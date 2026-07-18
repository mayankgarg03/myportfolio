import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { skillCategories } from '../data/site'

/** Skills: `skillCategories` in `src/data/site.js`. */

function IconApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9l3 3-3 3" />
    </svg>
  )
}

function IconData(props) {
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

function IconAi(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    </svg>
  )
}

function IconArchitecture(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 6A2.25 2.25 0 0115.75 3.75H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z"
      />
    </svg>
  )
}

function IconCloud(props) {
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

const ACCENT_BY_ID = {
  app: {
    Icon: IconApp,
    rail: 'bg-sky-500 dark:bg-sky-400',
    iconWrap: 'bg-sky-500/10 text-sky-700 ring-sky-500/20 dark:bg-sky-400/15 dark:text-sky-300 dark:ring-sky-400/25',
    chip:
      'border-sky-200/80 bg-white text-zinc-800 hover:border-sky-400 hover:text-sky-900 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-sky-500/50 dark:hover:text-sky-100',
  },
  data: {
    Icon: IconData,
    rail: 'bg-emerald-500 dark:bg-emerald-400',
    iconWrap:
      'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:bg-emerald-400/15 dark:text-emerald-300 dark:ring-emerald-400/25',
    chip:
      'border-emerald-200/80 bg-white text-zinc-800 hover:border-emerald-400 hover:text-emerald-900 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-emerald-500/50 dark:hover:text-emerald-100',
  },
  ai: {
    Icon: IconAi,
    rail: 'bg-amber-500 dark:bg-amber-400',
    iconWrap:
      'bg-amber-500/10 text-amber-800 ring-amber-500/25 dark:bg-amber-400/15 dark:text-amber-300 dark:ring-amber-400/25',
    chip:
      'border-amber-200/90 bg-amber-50/80 text-zinc-800 hover:border-amber-400 hover:text-amber-950 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-zinc-100 dark:hover:border-amber-400/60 dark:hover:text-amber-50',
  },
  architecture: {
    Icon: IconArchitecture,
    rail: 'bg-teal-500 dark:bg-teal-400',
    iconWrap:
      'bg-teal-500/10 text-teal-700 ring-teal-500/20 dark:bg-teal-400/15 dark:text-teal-300 dark:ring-teal-400/25',
    chip:
      'border-teal-200/80 bg-white text-zinc-800 hover:border-teal-400 hover:text-teal-900 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-teal-500/50 dark:hover:text-teal-100',
  },
  cloud: {
    Icon: IconCloud,
    rail: 'bg-zinc-500 dark:bg-zinc-400',
    iconWrap: 'bg-zinc-500/10 text-zinc-700 ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-300 dark:ring-zinc-500/30',
    chip:
      'border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white',
  },
}

export function TechStack() {
  return (
    <section
      id="tech"
      className="relative scroll-mt-24 overflow-hidden border-t border-sky-100 bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 px-4 py-20 dark:border-zinc-800 dark:from-zinc-900/40 dark:via-neutral-950 dark:to-zinc-900/25 sm:px-6 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-sky-300/25 blur-[110px] dark:bg-sky-600/12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-72 w-72 rounded-full bg-amber-200/20 blur-[100px] dark:bg-amber-500/8"
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
          description="Application code, data layer, AI tooling, architecture patterns, and cloud ops — the stack that actually ships."
        />

        <div className="mt-14 space-y-4">
          {skillCategories.map((cat, i) => {
            const accent = ACCENT_BY_ID[cat.id] ?? ACCENT_BY_ID.app
            const { Icon } = accent
            const isAi = cat.id === 'ai'

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl border ${
                  isAi
                    ? 'border-amber-200/90 bg-gradient-to-r from-amber-50/90 via-white to-white dark:border-amber-500/25 dark:from-amber-500/10 dark:via-neutral-950/90 dark:to-neutral-950/90'
                    : 'border-zinc-200/80 bg-white/80 dark:border-zinc-800 dark:bg-neutral-950/70'
                }`}
              >
                <div className={`absolute inset-y-0 left-0 w-1 ${accent.rail}`} aria-hidden />

                <div className="grid gap-6 p-5 pl-6 sm:p-6 sm:pl-7 lg:grid-cols-[minmax(12rem,16rem)_1fr] lg:items-start lg:gap-10">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${accent.iconWrap}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[0.65rem] font-medium tracking-widest text-zinc-400 dark:text-zinc-600">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">
                          {cat.title}
                        </h3>
                      </div>
                      {cat.blurb && (
                        <p className="mt-1.5 text-sm leading-snug text-zinc-500 dark:text-zinc-500">{cat.blurb}</p>
                      )}
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 + skillIndex * 0.02, duration: 0.25 }}
                      >
                        <span
                          className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium transition ${accent.chip}`}
                        >
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
