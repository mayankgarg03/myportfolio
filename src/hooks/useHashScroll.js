import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Smooth-scrolls to `location.hash` when present (e.g. /#contact).
 */
export function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    const raw = (location.hash || '').replace(/^#/, '')
    if (!raw) return
    const el = document.getElementById(raw)
    if (!el) return
    const t = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(t)
  }, [location.hash, location.pathname])
}
