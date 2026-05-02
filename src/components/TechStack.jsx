import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { skillCategories } from '../data/site'

/** Skills: `skillCategories` in `src/data/site.js` (three merged groups). */

function IconFrontend(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9l3 3-3 3" />
    </svg>
  )
}

function IconBackend(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
      />
      <path strokeLinecap="round" d="M9 7h1M9 17h1M14 7h1M14 17h1" />
    </svg>
  )
}

function IconTools(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

const ACCENT_BY_INDEX = [
  {
    Icon: IconFrontend,
    bar: 'bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600',
    iconWrap:
      'bg-gradient-to-br from-sky-500/15 to-sky-600/5 text-sky-600 ring-sky-500/25 dark:from-sky-400/20 dark:to-sky-500/5 dark:text-sky-300 dark:ring-sky-400/20',
    dot: 'bg-sky-500 dark:bg-sky-400',
    chip:
      'border-sky-200/90 bg-white text-zinc-800 shadow-sm shadow-sky-500/5 ring-1 ring-sky-500/10 transition group-hover:border-sky-300 group-hover:shadow-md group-hover:shadow-sky-500/10 dark:border-sky-500/25 dark:bg-sky-500/10 dark:text-sky-50 dark:ring-sky-400/15 dark:group-hover:border-sky-400/40',
  },
  {
    Icon: IconBackend,
    bar: 'bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600',
    iconWrap:
      'bg-gradient-to-br from-emerald-500/15 to-teal-600/5 text-emerald-600 ring-emerald-500/25 dark:from-emerald-400/20 dark:to-teal-500/5 dark:text-emerald-300 dark:ring-emerald-400/20',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    chip:
      'border-emerald-200/90 bg-white text-zinc-800 shadow-sm shadow-emerald-500/5 ring-1 ring-emerald-500/10 transition group-hover:border-emerald-300 group-hover:shadow-md group-hover:shadow-emerald-500/10 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-50 dark:ring-emerald-400/15 dark:group-hover:border-emerald-400/40',
  },
  {
    Icon: IconTools,
    bar: 'bg-gradient-to-b from-violet-400 via-violet-500 to-fuchsia-600',
    iconWrap:
      'bg-gradient-to-br from-violet-500/15 to-fuchsia-600/5 text-violet-600 ring-violet-500/25 dark:from-violet-400/20 dark:to-fuchsia-500/5 dark:text-violet-300 dark:ring-violet-400/20',
    dot: 'bg-violet-500 dark:bg-violet-400',
    chip:
      'border-violet-200/90 bg-white text-zinc-800 shadow-sm shadow-violet-500/5 ring-1 ring-violet-500/10 transition group-hover:border-violet-300 group-hover:shadow-md group-hover:shadow-violet-500/10 dark:border-violet-500/25 dark:bg-violet-500/10 dark:text-violet-50 dark:ring-violet-400/15 dark:group-hover:border-violet-400/40',
  },
]

export function TechStack() {
  return (
    <section
      id="tech"
      className="relative scroll-mt-24 overflow-hidden border-t border-sky-100 bg-gradient-to-b from-sky-50/80 via-white to-sky-50/30 px-4 py-20 dark:border-zinc-800 dark:from-zinc-900/40 dark:via-neutral-950 dark:to-zinc-900/20 sm:px-6 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-sky-300/30 blur-[100px] dark:bg-sky-600/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-24 h-64 w-64 rounded-full bg-violet-200/25 blur-[90px] dark:bg-violet-600/10"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          kicker="Tech stack"
          title={
            <>
              Tools I reach for <span className="text-sky-600 dark:text-sky-400">every day</span>
            </>
          }
          description="Languages & frameworks, data stores and brokers, then AWS and ops tooling — only what ships to production."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const accent = ACCENT_BY_INDEX[i % ACCENT_BY_INDEX.length]
            const { Icon } = accent
            return (
              <motion.article
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 shadow-lg shadow-zinc-200/40 backdrop-blur-sm dark:border-zinc-800 dark:bg-neutral-950/85 dark:shadow-black/40"
              >
                <div className={`absolute left-0 top-0 h-full w-1 ${accent.bar}`} aria-hidden />
                <div className="flex flex-1 flex-col p-6 pl-7 sm:p-7 sm:pl-8">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${accent.iconWrap}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[0.7rem] font-medium tabular-nums tracking-widest text-zinc-400 dark:text-zinc-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">{cat.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                    {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                  </p>

                  <ul
                    className={`mt-5 flex-1 gap-2.5 ${cat.skills.length > 4 ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-col'}`}
                  >
                    {cat.skills.map((skill) => (
                      <li key={skill} className="min-w-0">
                        <span
                          className={`flex min-h-[2.35rem] w-full items-center gap-2.5 rounded-xl border px-2.5 py-1.5 text-sm font-medium leading-snug sm:min-h-0 sm:py-2 sm:pl-3 ${accent.chip}`}
                        >
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                          <span className="min-w-0 break-words">{skill}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
