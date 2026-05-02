/**
 * Skill tile with accent icon — reference-style grid cards.
 */
const icons = {
  js: (
    <path d="M3 3h18v18H3V3zm10.5 14.25c.75.45 1.65.75 2.55.75 1.35 0 2.1-.6 2.1-1.65 0-1.2-.75-1.65-2.1-2.25-1.05-.45-1.35-.75-1.35-1.35 0-.45.3-.75.9-.75.45 0 .9.15 1.35.45l.45-1.65c-.6-.3-1.35-.45-2.1-.45-1.5 0-2.55.75-2.55 1.95 0 1.35.9 1.8 2.25 2.25 1.05.45 1.35.75 1.35 1.35 0 .6-.45.9-1.2.9-.75 0-1.5-.3-2.1-.75l-.45 1.65zm-6 0c.75.45 1.65.75 2.55.75 1.35 0 2.1-.6 2.1-1.65 0-1.2-.75-1.65-2.1-2.25-1.05-.45-1.35-.75-1.35-1.35 0-.45.3-.75.9-.75.45 0 .9.15 1.35.45l.45-1.65c-.6-.3-1.35-.45-2.1-.45-1.5 0-2.55.75-2.55 1.95 0 1.35.9 1.8 2.25 2.25 1.05.45 1.35.75 1.35 1.35 0 .6-.45.9-1.2.9-.75 0-1.5-.3-2.1-.75l-.45 1.65z" />
  ),
  react: (
    <path d="M12 10.5c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm9.93 3c0-.45-.06-.9-.15-1.35-1.05-4.2-5.25-7.2-9.78-7.2-4.5 0-8.7 3-9.78 7.2-.09.45-.15.9-.15 1.35s.06.9.15 1.35c1.05 4.2 5.25 7.2 9.78 7.2 4.5 0 8.7-3 9.78-7.2.09-.45.15-.9.15-1.35zM12 19.5c-3.45 0-6.6-2.25-7.5-6 1.05-4.05 4.2-6 7.5-6s6.45 1.95 7.5 6c-.9 3.75-4.05 6-7.5 6z" />
  ),
  node: (
    <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm-1 15.5v-7L6 8.5v7l5 3zm2-7v7l5-3v-7l-5 3-5-3v7l5-3z" />
  ),
  mongo: (
    <path d="M12 2C8.5 6 7 10.5 7 14c0 3.5 2 6 5 8 3-2 5-4.5 5-8 0-3.5-1.5-8-5-12zm0 0v18" />
  ),
  css: (
    <path d="M4 3h16v4H4V3zm0 6h10v4H4V9zm0 6h16v4H4v-4zm0 6h10v4H4v-4z" />
  ),
  tools: (
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1 0-1.4z" />
  ),
}

export function SkillShowcaseCard({ title, description, iconId }) {
  const path = icons[iconId] || icons.js
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-sky-300 dark:border-zinc-800 dark:bg-neutral-950/60 dark:shadow-none dark:hover:border-sky-500/35">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-500/10">
        <svg className="h-7 w-7 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          {path}
        </svg>
      </div>
      <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  )
}
