/**
 * Vercel Serverless Function — POST /api/contact
 *
 * Sends contact-form submissions to your inbox via Resend's transactional email API.
 * The Resend API key never touches the client; it lives only as a Vercel env var.
 *
 * Required Vercel env vars (Project Settings → Environment Variables):
 *   - RESEND_API_KEY       Resend API key (resend.com/api-keys)
 *   - CONTACT_TO_EMAIL     Inbox that receives the message. On Resend's free tier
 *                          *without a verified domain*, this MUST be the email you
 *                          signed up with (Resend only allows sandbox sends to your
 *                          own verified address). For a contact form going to your
 *                          own inbox, that's exactly what you want.
 *
 * Optional:
 *   - CONTACT_FROM_EMAIL   Sender address. Defaults to `onboarding@resend.dev`
 *                          (Resend's sandbox sender — works without owning a domain).
 *                          Once you verify a domain in Resend, set this to e.g.
 *                          `contact@yourdomain.com` for branded emails.
 *   - CONTACT_FROM_NAME    Display name on the "From" header (default: "Portfolio Contact")
 *   - ALLOWED_ORIGIN       Restrict CORS to one origin (default: same-origin only)
 */

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const DEFAULT_FROM_EMAIL = 'onboarding@resend.dev'

const isEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const clean = (v, max = 5000) => String(v ?? '').trim().slice(0, max)
const escapeHtml = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]),
  )

export default async function handler(req, res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN
  if (allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
    res.setHeader('Vary', 'Origin')
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL
  const fromName = process.env.CONTACT_FROM_NAME || 'Portfolio Contact'

  if (!apiKey || !toEmail) {
    console.error('[contact] Missing env vars (RESEND_API_KEY / CONTACT_TO_EMAIL).')
    res.status(500).json({ ok: false, error: 'Email service is not configured.' })
    return
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      res.status(400).json({ ok: false, error: 'Invalid JSON body.' })
      return
    }
  }
  body = body || {}

  // Honeypot — silently accept and discard bot submissions.
  if (clean(body.website)) {
    res.status(200).json({ ok: true })
    return
  }

  const name = clean(body.name, 200)
  const email = clean(body.email, 200)
  const message = clean(body.message, 5000)

  const errors = {}
  if (!name) errors.name = 'Name is required.'
  if (!email) errors.email = 'Email is required.'
  else if (!isEmail(email)) errors.email = 'Enter a valid email.'
  if (!message) errors.message = 'Message is required.'
  else if (message.length < 10) errors.message = 'Message should be at least 10 characters.'

  if (Object.keys(errors).length) {
    res.status(400).json({ ok: false, error: 'Validation failed.', fields: errors })
    return
  }

  const subject = `Portfolio contact: ${name}`
  const text = `New message from your portfolio contact form\n\nName:    ${name}\nEmail:   ${email}\n\nMessage:\n${message}\n`
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:auto;color:#0f172a">
      <h2 style="margin:0 0 12px;font-size:18px;color:#0369a1">New portfolio contact</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.55">
        <tr><td style="padding:6px 0;color:#64748b;width:90px">Name</td><td style="padding:6px 0">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}" style="color:#0369a1">${escapeHtml(email)}</a></td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
      <div style="white-space:pre-wrap;font-size:14px;line-height:1.6">${escapeHtml(message)}</div>
    </div>
  `

  try {
    const resendRes = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
        text,
      }),
    })

    if (!resendRes.ok) {
      const detail = await resendRes.text().catch(() => '')
      console.error('[contact] Resend error', resendRes.status, detail)
      res.status(502).json({ ok: false, error: 'Email provider rejected the request.' })
      return
    }

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error', err)
    res.status(500).json({ ok: false, error: 'Something went wrong sending the message.' })
  }
}
