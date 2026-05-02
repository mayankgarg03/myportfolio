/**
 * Use `null` for githubLink / liveLink when code or demo cannot be shared (NDA, client-only, etc.).
 */
export function hasPublicLink(href) {
  return typeof href === 'string' && /^https?:\/\//i.test(href.trim())
}
