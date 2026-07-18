/* eslint-disable react-refresh/only-export-components -- the JSON-LD builders ship beside this component */
import { defaultOgImage, profile, SITE_URL } from '../data/site'

/**
 * Per-page SEO metadata.
 *
 * React 19 hoists <title>, <meta>, and <link> rendered anywhere in the tree into
 * <head> automatically — no helmet / portal needed. We use that here.
 *
 * NOTE on SPA + crawlers: Google executes JS and will see these tags. Most social
 * scrapers (LinkedIn, X, Slack, WhatsApp) DO NOT run JS — for them, the values
 * defined in `index.html` are what gets shown. So `index.html` carries strong
 * defaults, and these per-page tags are an upgrade for JS-aware crawlers.
 *
 * Props:
 *   fullTitle     when set, used verbatim for <title> / OG / Twitter (no suffix)
 *   title         page-specific title (suffixed with ` — ${profile.name}`) when fullTitle omitted
 *   description   meta description (≤ 160 chars ideally)
 *   path          path on the site, e.g. "/projects/foo" — used for canonical/OG URL
 *   image         absolute or root-relative OG image (default: defaultOgImage)
 *   type          OG type — "website" | "article" | "profile"
 *   noindex       set true for 404 / private pages
 *   jsonLd        optional JSON-LD object(s) — emits a <script type="application/ld+json">
 */
export function SEO({
  fullTitle: fullTitleProp,
  title,
  description,
  path = '/',
  image = defaultOgImage,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const fullTitle =
    fullTitleProp?.trim() ||
    (title ? `${title} — ${profile.name}` : `${profile.name} — ${profile.heroTitle}`)
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const absoluteImage = /^https?:\/\//.test(image) ? image : `${SITE_URL}${image}`
  const ldNodes = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={absoluteImage} />
      {profile.twitterHandle && <meta name="twitter:creator" content={`@${profile.twitterHandle}`} />}

      {/* JSON-LD structured data — one <script> per object. dangerouslySetInnerHTML
          is required: React escapes string children inside <script>, but JSON-LD must
          be emitted as raw JSON. */}
      {ldNodes.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  )
}

/**
 * Reusable Person schema — used on the home page so Google can build a knowledge
 * panel / rich card for "Mayank Garg".
 */
export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.heroTitle,
    description: profile.tagline,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: `${SITE_URL}${defaultOgImage}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location,
    },
    sameAs: [profile.githubUrl, profile.linkedinUrl, profile.leetcodeUrl].filter(Boolean),
  }
}

/**
 * Website schema — helps Google understand the site as a whole.
 */
export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: profile.name,
    url: SITE_URL,
    inLanguage: 'en',
    author: { '@type': 'Person', name: profile.name },
  }
}

/**
 * BreadcrumbList — used on case-study pages so search results get a breadcrumb trail.
 */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
}
