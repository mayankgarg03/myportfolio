const icons = {
  layout: (
    <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 13a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5z" />
  ),
  shield: <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />,
  credit: (
    <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2H4V6zm0 4h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8zm4 4h4v2H8v-2z" />
  ),
  search: (
    <path d="M10 4a6 6 0 104 10.472l3.382 3.383 1.415-1.415L15.472 13.1A6 6 0 0010 4zm-4 6a4 4 0 118 0 4 4 0 01-8 0z" />
  ),
  box: <path d="M4 8l8-4 8 4v8l-8 4-8-4V8zm2 1.618V15l6 3V12.618L6 9.618z" />,
  chart: <path d="M4 19h16v2H2V3h2v16zm2-4h2v4H6v-4zm4-6h2v10h-2V9zm4-4h2v14h-2V5z" />,
  lock: (
    <path d="M6 10V8a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h1zm2 0h8V8a4 4 0 10-8 0v2z" />
  ),
  file: <path d="M6 2h7l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 0v5h5" />,
  grid: <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />,
  sun: (
    <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-16a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 20a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM5.64 5.64a1 1 0 011.41 0l.71.71a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 010-1.41zm12.02 12.02a1 1 0 01-1.41 0l-.71-.71a1 1 0 011.41-1.41l.71.71a1 1 0 010 1.41zM3 12a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm16 0a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM7.05 18.36a1 1 0 010-1.41l.71-.71a1 1 0 111.41 1.41l-.71.71a1 1 0 01-1.41 0zm9.9-9.9a1 1 0 010 1.41l-.71.71a1 1 0 11-1.41-1.41l.71-.71a1 1 0 011.41 0z" />
  ),
  download: (
    <path d="M4 19h16v2H2v-4h2v2zm8-14v9.5l3.5-3.5 1.5 1.5-6 6-6-6 1.5-1.5L12 14.5V5h-2v4H8V3h8v6h-2V5h-2z" />
  ),
  eye: (
    <path d="M12 5c-5 0-9 5-9 7s4 7 9 7 9-5 9-7-4-7-9-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z" />
  ),
  link: (
    <path d="M10 13a5 5 0 010-7l1-1a5 5 0 017 7l-1 1M14 11a5 5 0 010 7l-1 1a5 5 0 01-7-7l1-1" />
  ),
  api: <path d="M8 9l3 3-3 3m8-6l-3 3 3 3M3 5h18v14H3V5zm2 2v10h14V7H5z" />,
}

function IconGlyph({ name }) {
  const path = icons[name] || icons.layout
  return (
    <svg className="h-5 w-5 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      {path}
    </svg>
  )
}

export function FeatureCard({ title, description, icon = 'layout' }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-neutral-950/60">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-500/15">
        <IconGlyph name={icon} />
      </div>
      <h4 className="mt-4 font-semibold text-zinc-900 dark:text-white">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  )
}
