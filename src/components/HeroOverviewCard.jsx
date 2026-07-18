import { motion } from 'framer-motion'
import { profile, heroOverview } from '../data/site'

/**
 * Compact “at a glance” snapshot for the hero right column.
 */
export function HeroOverviewCard() {
  const initials = heroOverview.initials ?? 'MG'

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Career overview"
      className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-sky-200/80 bg-white/80 p-6 shadow-xl shadow-sky-900/5 backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:shadow-black/30 sm:p-7"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/15"
        aria-hidden
      />

      <div className="relative flex flex-col items-center text-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-teal-400 text-lg font-bold tracking-wide text-white shadow-lg shadow-sky-500/25"
          aria-hidden
        >
          {initials}
        </div>
        <h2 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {/* {profile.displayName ?? profile.name} */}
        </h2>
        <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {/* {heroOverview.roleShort} · {profile.location} */}
          {heroOverview.roleShort}
        </p>
      </div>

      <dl className="relative mt-7 space-y-3">
        {heroOverview.stats.map(({ label, value }) => (
          <div key={label} className="flex items-baseline justify-between gap-4">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              {label}
            </dt>
            <dd className="font-mono text-sm font-medium text-sky-700 dark:text-sky-300">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-6 flex items-center justify-center gap-2 border-t border-sky-100 pt-5 dark:border-zinc-700/80">
        <span
          className={`h-2 w-2 rounded-full ${
            heroOverview.openToWork
              ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]'
              : 'bg-zinc-400'
          }`}
          aria-hidden
        />
        <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
          {heroOverview.openToWork ? 'Open to work' : 'Not looking'}
        </p>
      </div>
    </motion.aside>
  )
}
