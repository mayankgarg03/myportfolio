import { SkillBadge } from './SkillBadge'

/**
 * Readable project cover for confidential / NDA work — no fake product screenshots.
 * `variant`: `card` (grid) | `hero` (case study banner)
 */
export function ProjectCover({ project, variant = 'card', categoryLabel }) {
  const { title, description, timeline, techStack, cover } = project
  const isHero = variant === 'hero'
  const improvements = cover?.improvements?.slice(0, 3) ?? []
  const tech = techStack ?? []

  return (
    <div
      className={`relative overflow-hidden bg-sky-50/70 dark:bg-zinc-900/50 ${
        isHero ? 'min-h-[12rem] sm:min-h-[14rem]' : ''
      }`}
    >
      <div
        className={`relative flex h-full flex-col ${isHero ? 'justify-center p-6 sm:p-8' : 'p-5 sm:p-6'}`}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {cover?.domain && (
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-400">
              {cover.domain}
            </span>
          )}
          <span className="text-xs text-zinc-500 dark:text-zinc-500">Confidential</span>
          {categoryLabel && !isHero && (
            <span className="text-xs text-zinc-500 dark:text-zinc-500">{categoryLabel}</span>
          )}
        </div>

        {isHero ? (
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            {title}
          </h1>
        ) : (
          <h3 className="mt-3 text-lg font-bold tracking-tight text-zinc-900 sm:text-xl dark:text-white">
            {title}
          </h3>
        )}

        {timeline && (
          <p className={`mt-1.5 font-mono text-sky-700 dark:text-sky-400 ${isHero ? 'text-sm' : 'text-xs'}`}>
            {timeline}
          </p>
        )}

        {tech.length > 0 && (
          <div className={`flex flex-wrap gap-1.5 ${isHero ? 'mt-4' : 'mt-3'}`}>
            {tech.map((t) => (
              <SkillBadge key={t}>{t}</SkillBadge>
            ))}
          </div>
        )}

        {description && (
          <p
            className={`leading-relaxed text-zinc-600 dark:text-zinc-400 ${
              isHero ? 'mt-4 max-w-2xl text-sm sm:text-base' : 'mt-3 text-sm'
            }`}
          >
            {description}
          </p>
        )}

        {improvements.length > 0 && (
          <div className={isHero ? 'mt-6 max-w-2xl' : 'mt-4'}>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              What improved
            </p>
            <ul className={`mt-2.5 space-y-2 ${isHero ? 'sm:space-y-2.5' : ''}`}>
              {improvements.map((item) => (
                <li
                  key={item}
                  className={`flex gap-2 leading-relaxed text-zinc-700 dark:text-zinc-300 ${
                    isHero ? 'text-sm sm:text-base' : 'text-sm'
                  }`}
                >
                  <span className="mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden>
                    ▹
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
