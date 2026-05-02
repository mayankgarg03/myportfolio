import { motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../data/site'

const initial = { name: '', email: '', message: '', website: '' }

const inputClass =
  'mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3.5 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-sky-500'

export function ContactForm({ embedded = false }) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Name is required'
    if (!values.email.trim()) {
      e.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      e.email = 'Enter a valid email'
    }
    if (!values.message.trim()) e.message = 'Message is required'
    else if (values.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    setServerError('')
    if (!validate()) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data?.ok) {
        if (data?.fields) setErrors((prev) => ({ ...prev, ...data.fields }))
        setServerError(data?.error || 'Could not send your message. Please try again.')
        setStatus('error')
        return
      }

      setValues(initial)
      setStatus('sent')
    } catch {
      setServerError('Network error — please check your connection and try again.')
      setStatus('error')
    }
  }

  const onChange = (field) => (ev) => {
    setValues((v) => ({ ...v, [field]: ev.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
    if (status === 'error') setStatus('idle')
  }

  const sending = status === 'sending'

  const emailBlock = (
    <div className="flex flex-col gap-7">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/70 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to opportunities
        </span>
        <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
          Let&apos;s start a conversation
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Have a project in mind, an interesting role, or just want to talk shop? Drop a line — I usually
          reply within a day. The more context you share up front, the better I can help.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-sky-400 hover:bg-sky-50/60 dark:border-zinc-800 dark:bg-neutral-950/40 dark:hover:border-sky-500/40 dark:hover:bg-sky-500/5"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
              Email
            </span>
            <span className="mt-0.5 block truncate text-sm font-semibold text-zinc-900 transition group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
              {profile.email}
            </span>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-sky-500 dark:text-zinc-600" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </a>

        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-sky-400 hover:bg-sky-50/60 dark:border-zinc-800 dark:bg-neutral-950/40 dark:hover:border-sky-500/40 dark:hover:bg-sky-500/5"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34V10H5.67v8.34H8.34zM7 8.84a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm11.34 9.5v-4.57c0-2.45-1.31-3.59-3.05-3.59-1.41 0-2.04.78-2.39 1.32V10H10.23c.04.75 0 8.34 0 8.34h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.48h2.65z" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
              LinkedIn
            </span>
            <span className="mt-0.5 block truncate text-sm font-semibold text-zinc-900 transition group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
              Connect with me
            </span>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-sky-500 dark:text-zinc-600" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </a>

        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-sky-400 hover:bg-sky-50/60 dark:border-zinc-800 dark:bg-neutral-950/40 dark:hover:border-sky-500/40 dark:hover:bg-sky-500/5"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.55v-1.92c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
              GitHub
            </span>
            <span className="mt-0.5 block truncate text-sm font-semibold text-zinc-900 transition group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-300">
              See my code
            </span>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-sky-500 dark:text-zinc-600" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200 pt-5 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-500">
        <span className="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
            <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {profile.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden>
            <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
          </svg>
          Replies within a day
        </span>
      </div>
    </div>
  )

  const formBlock = (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={onChange('name')}
          className={inputClass}
          aria-invalid={!!errors.name}
          disabled={sending}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={onChange('email')}
          className={inputClass}
          aria-invalid={!!errors.email}
          disabled={sending}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange('message')}
          className={`${inputClass} resize-y`}
          aria-invalid={!!errors.message}
          disabled={sending}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
      </div>

      {/* Honeypot — hidden from real users, bots will fill it and be silently dropped server-side. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={onChange('website')}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-500 dark:hover:bg-sky-400"
      >
        {sending && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
            <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )}
        {sending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )

  return (
    <div className={embedded ? '' : 'mx-auto max-w-xl'}>
      {!embedded && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Let&apos;s work together
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Available for freelance and full-time opportunities. Tell me about your project.
          </p>
        </motion.div>
      )}

      <div
        className={
          embedded ? 'mt-0 grid gap-10 lg:grid-cols-2 lg:gap-14' : 'mt-12 flex flex-col gap-10'
        }
      >
        {emailBlock}
        {formBlock}
      </div>

      {status === 'sent' && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
          role="status"
        >
          Thanks — your message is on its way. I&apos;ll get back to you shortly.
        </motion.p>
      )}

      {status === 'error' && serverError && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
          role="alert"
        >
          {serverError}
        </motion.p>
      )}
    </div>
  )
}
