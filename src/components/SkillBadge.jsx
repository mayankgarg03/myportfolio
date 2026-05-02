export function SkillBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-900 dark:border-sky-500/35 dark:bg-sky-500/10 dark:text-sky-100 ${className}`}
    >
      {children}
    </span>
  )
}
