# Portfolio — Mayank Garg

React 19 + Vite + Tailwind v4 portfolio with a Brevo-backed contact form, SEO metadata,
auto-generated sitemap, and Vercel analytics. Deploys to Vercel as a static site plus a
single serverless function (`/api/contact`).

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in only what you need locally
npm run dev
```

The app runs at `http://localhost:5173`. The contact form will return an error in dev
unless you also run `vercel dev` (so the `/api/contact` function is served).

## Scripts

| Script         | What it does                                                                  |
| -------------- | ----------------------------------------------------------------------------- |
| `npm run dev`  | Vite dev server                                                               |
| `npm run build`| Generates SEO files (`prebuild`), then runs `vite build`                      |
| `npm run seo`  | Regenerates `public/sitemap.xml` + rewrites `Sitemap:` line in `robots.txt`   |
| `npm run preview` | Preview the production build                                               |
| `npm run lint` | ESLint                                                                        |

## Environment variables

See [`.env.example`](./.env.example) for the full list. Set them in Vercel under
**Project Settings → Environment Variables** (production + preview).

### Public (build-time, exposed to the browser)

- `VITE_SITE_URL` — full origin (e.g. `https://mayank-garg.vercel.app`). Used for
  canonical URLs, OG tags, the sitemap, and JSON-LD. Update this after Vercel gives you
  the live URL (or after you attach a custom domain).

### Server-only (used by `/api/contact`)

- `RESEND_API_KEY` — Resend dashboard → **API Keys**.
- `CONTACT_TO_EMAIL` — inbox that receives messages. **On Resend's free tier without a
  verified domain, this must be the email you signed up to Resend with** (sandbox sends
  are restricted to your own verified address).
- `CONTACT_FROM_EMAIL` *(optional)* — sender address. Leave empty to use Resend's
  sandbox sender `onboarding@resend.dev` (works without owning a domain). Once you
  verify a domain in Resend, set this to e.g. `contact@yourdomain.com`.
- `CONTACT_FROM_NAME` *(optional)* — display name on the From header (default
  `Portfolio Contact`).
- `ALLOWED_ORIGIN` *(optional)* — CORS lock-down to one origin.

## Resend setup (one-time, ~3 min)

1. Sign up at [resend.com](https://resend.com/) — only an email is required (no phone,
   no credit card). Free tier: 100 emails/day, 3,000/month.
2. Verify the email you signed up with (Resend sends a confirmation link).
3. **API Keys → Create API Key** → "Sending access" → name it "portfolio-contact" and
   copy the key (it's shown only once).
4. Add the env vars above to Vercel:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO_EMAIL` = the email you verified in step 2 (this is also where messages
     will arrive)
   - leave `CONTACT_FROM_EMAIL` empty for now
5. Redeploy. The contact form will POST to `/api/contact`, which calls Resend, which
   delivers to `CONTACT_TO_EMAIL` from `onboarding@resend.dev`. The `Reply-To` header
   is the form submitter's email so you can hit Reply normally.

The Resend API key is **never** sent to the browser — it lives only in the serverless
function's runtime environment.

### Later: branded sender (optional)

When you buy a custom domain, add it in Resend → **Domains**, paste the SPF/DKIM/DMARC
records into your DNS, and set `CONTACT_FROM_EMAIL=contact@yourdomain.com`. Nothing
else changes.

## SEO

- Per-page metadata (title, description, canonical, Open Graph, Twitter card, JSON-LD)
  via the `<SEO />` component in `src/components/SEO.jsx`. React 19 hoists these into
  `<head>` automatically — no `react-helmet` needed.
- Strong defaults in `index.html` for crawlers that don't run JavaScript
  (LinkedIn, X, Slack, WhatsApp, Discord scrapers).
- `public/sitemap.xml` is generated at build time from `src/data/projects.js` by
  `scripts/generate-seo.mjs`. The same script keeps `robots.txt` in sync.
- Drop a 1200×630 PNG/JPG at `public/og-default.png` for a great default share preview
  (the file path is referenced in `index.html` and `data/site.js`). Per-project case
  studies use the project image automatically.

## Analytics

Two zero-config Vercel integrations are wired in `src/App.jsx`:

- **`@vercel/analytics`** — page-view + referrer tracking, cookieless, no consent
  banner needed (GDPR-friendly).
- **`@vercel/speed-insights`** — real-user Core Web Vitals (LCP/INP/CLS).

After deploying, enable both under **Analytics** and **Speed Insights** tabs in the
Vercel project dashboard. Both are free on the Hobby plan.

If you ever outgrow it, swap-in candidates: Plausible, Umami, Fathom, or Google
Analytics 4 (GA4 needs a cookie banner in the EU).

## Deploying to Vercel

1. Push to GitHub.
2. Import the repo in Vercel — framework auto-detects as Vite.
3. Add env vars (see above).
4. Deploy. `vercel.json` already handles SPA routing and excludes `/api/*` from the
   rewrite so the contact function is reachable.

## Project structure

```
api/                      Vercel serverless functions
  contact.js              Brevo email handler
public/                   Static assets served as-is
  favicon.svg
  robots.txt              Generated/synced by scripts/generate-seo.mjs
  sitemap.xml             Generated by scripts/generate-seo.mjs
scripts/
  generate-seo.mjs        Runs on `prebuild`
src/
  components/             Shared UI (Navbar, Footer, ProjectCard, SEO, ...)
  contexts/               ThemeProvider
  data/                   site.js + projects.js (single source of content)
  hooks/                  useTheme, useHashScroll, useScrollProgress
  layouts/MainLayout.jsx
  pages/                  Home, Projects, CaseStudy, Contact, NotFound
  App.jsx                 Router shell + analytics
  main.jsx                Entry
index.html                SEO defaults for non-JS crawlers
vercel.json               SPA rewrites + cache headers
```
