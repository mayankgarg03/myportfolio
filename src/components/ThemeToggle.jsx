import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex h-9 w-14 items-center rounded-full border border-zinc-300 bg-zinc-100 shadow-inner transition-colors dark:border-zinc-600 dark:bg-zinc-800 ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        className="absolute left-0.5 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs text-amber-500 shadow dark:bg-zinc-900 dark:text-amber-300"
        animate={{ x: isDark ? 22 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      >
        {isDark ? '☾' : '☀'}
      </motion.span>
    </button>
  )
}
