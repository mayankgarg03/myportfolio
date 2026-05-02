import { useEffect, useState } from 'react'

/**
 * Tracks which section ID is "active" in the viewport via IntersectionObserver.
 *
 * When `syncUrl` is true, the URL hash is rewritten via `history.replaceState`
 * as the user scrolls. We use replaceState (not pushState) so the back button
 * doesn't fill up with one entry per scrolled-past section.
 *
 * @param {string[]} ids                 Section element IDs to observe (in document order).
 * @param {object}   [options]
 * @param {boolean}  [options.syncUrl]   Update URL hash on scroll. Default: false.
 * @param {string}   [options.pathname]  Only run when window.location.pathname matches.
 *                                       Default: '/'.
 * @returns {string|null} The currently active section ID, or null on other routes.
 */
export function useActiveSection(ids, { syncUrl = false, pathname = '/' } = {}) {
  const [active, setActive] = useState(null)
  // Stable cache key so an inline array prop doesn't re-run the effect every render.
  const idsKey = ids.join(',')

  useEffect(() => {
    if (typeof window === 'undefined' || !idsKey) return
    if (window.location.pathname !== pathname) return

    const list = idsKey.split(',')
    const elements = list.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    let current = null

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost section currently intersecting the active band.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (!visible.length) return
        const id = visible[0].target.id
        if (id === current) return
        current = id
        setActive(id)

        if (syncUrl) {
          // Treat the first ID as "no hash" (e.g. hero == landing top).
          const desiredHash = id === list[0] ? '' : `#${id}`
          const next = `${window.location.pathname}${window.location.search}${desiredHash}`
          const now = `${window.location.pathname}${window.location.search}${window.location.hash}`
          if (now !== next) window.history.replaceState(null, '', next)
        }
      },
      // Active band sits in the upper-middle of the viewport so the URL flips
      // around the time the section visually dominates the screen.
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [idsKey, syncUrl, pathname])

  return active
}
