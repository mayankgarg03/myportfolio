export function SectionHeader({ kicker, title, description, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">{kicker}</p>
      )}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl [&_span]:font-mono">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
    </div>
  )
}
