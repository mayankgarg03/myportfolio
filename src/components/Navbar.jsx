import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionLinks = [
  { hash: 'hero', label: 'Home' },
  { hash: 'about', label: 'About' },
  { hash: 'experience', label: 'Experience' },
  { hash: 'tech', label: 'Tech' },
  { hash: 'projects', label: 'Projects' },
  { hash: 'contact', label: 'Contact' },
]

const sectionIds = sectionLinks.map((l) => l.hash)

function NavLinkItem({ hash, label, active, onClick }) {
  return (
    <Link
      to={{ pathname: '/', hash }}
      onClick={(e) => onClick(e, hash)}
      aria-current={active ? 'page' : undefined}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? 'text-sky-700 dark:text-sky-400'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      }`}
    >
      {label}
    </Link>
  )
}

export function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Scroll-spy on home only — keeps the URL and the highlighted nav item in sync.
  const activeSection = useActiveSection(sectionIds, { syncUrl: true, pathname: '/' })
  const activeHash = pathname === '/' ? activeSection ?? 'hero' : null

  /**
   * If we're already on home, scroll directly. This handles two edge cases that
   * react-router-dom's <Link> alone doesn't:
   *   1. Clicking the current section's link (URL unchanged → no navigation event).
   *   2. Re-clicking after the scroll-spy already updated the URL.
   * For cross-route navigation we fall through and let <Link> handle it; the
   * `useHashScroll` hook on the home page picks up the hash after route mount.
   */
  const handleClick = (e, hash) => {
    close()
    if (window.location.pathname !== '/') return
    e.preventDefault()
    const el = document.getElementById(hash)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const desiredHash = hash === sectionIds[0] ? '' : `#${hash}`
    window.history.replaceState(null, '', `/${window.location.search}${desiredHash}`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 backdrop-blur-xl dark:border-zinc-800 dark:bg-neutral-950/90">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to={{ pathname: '/', hash: 'hero' }}
          onClick={(e) => handleClick(e, 'hero')}
          className="relative z-10 flex shrink-0 items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white dark:bg-sky-500">
            &lt;/&gt;
          </span>
          <span className="uppercase tracking-wider">{profile.displayName ?? profile.name}</span>
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 md:flex"
          aria-label="Main"
        >
          {sectionLinks.map((l) => (
            <NavLinkItem
              key={l.hash}
              hash={l.hash}
              label={l.label}
              active={activeHash === l.hash}
              onClick={handleClick}
            />
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          <a
            href={profile.resumeUrl}
            download="Mayank_Garg_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-semibold text-sky-700 transition hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 md:inline-flex"
          >
            Résumé
          </a>
          <Link
            to={{ pathname: '/', hash: 'contact' }}
            onClick={(e) => handleClick(e, 'contact')}
            className="hidden rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex rounded-lg border border-zinc-300 p-2 text-zinc-700 dark:border-zinc-600 dark:text-zinc-200 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden border-t border-sky-100 dark:border-zinc-800 md:hidden"
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {sectionLinks.map((l) => (
            <Link
              key={l.hash}
              to={{ pathname: '/', hash: l.hash }}
              onClick={(e) => handleClick(e, l.hash)}
              aria-current={activeHash === l.hash ? 'page' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeHash === l.hash
                  ? 'bg-sky-50 text-sky-700 dark:bg-zinc-800/80 dark:text-sky-400'
                  : 'text-zinc-700 hover:bg-sky-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/80 dark:hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            download="Mayank_Garg_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-2 rounded-lg px-3 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50 dark:text-sky-400 dark:hover:bg-zinc-800/80"
          >
            Download résumé
          </a>
          <Link
            to={{ pathname: '/', hash: 'contact' }}
            onClick={(e) => handleClick(e, 'contact')}
            className="mt-1 rounded-full bg-sky-600 py-2.5 text-center text-sm font-semibold text-white dark:bg-sky-500"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </motion.div>
    </header>
  )
}
