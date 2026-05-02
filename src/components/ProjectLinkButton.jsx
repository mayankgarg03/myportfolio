import { hasPublicLink } from '../utils/projectLinks'

const primary =
  'inline-flex items-center justify-center rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400'
const secondary =
  'inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-xs font-semibold text-zinc-800 transition hover:border-sky-500/60 hover:text-sky-800 dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-sky-400/50 dark:hover:text-sky-300'

const locked =
  'inline-flex cursor-default items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400'

export function ProjectLinkButton({ href, label, variant = 'primary' }) {
  if (!hasPublicLink(href)) {
    return (
      <span className={locked} title="Not shared publicly — client work or NDA.">
        {label} — private
      </span>
    )
  }
  if (variant === 'primary') {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={primary}>
        {label}
      </a>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={secondary}>
      {label}
    </a>
  )
}

export function ProjectLinkButtonLarge({ href, label, variant = 'primary' }) {
  if (!hasPublicLink(href)) {
    return (
      <span className={`${locked} rounded-xl px-4 py-2.5 text-sm`} title="Not shared publicly.">
        {label} — private
      </span>
    )
  }
  if (variant === 'primary') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
      >
        {label}
      </a>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-sky-400/60 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
    >
      {label}
    </a>
  )
}
