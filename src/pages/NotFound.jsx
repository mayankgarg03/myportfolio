import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 py-20 text-center dark:bg-neutral-950">
      <SEO title="Page not found" description="That URL doesn't exist." path="/404" noindex />
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}>
        <p className="text-8xl font-bold tabular-nums text-zinc-200 dark:text-zinc-800">404</p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">Page not found</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">That URL doesn’t exist or the project wasn’t found.</p>
        <Link
          to="/"
          className="mt-10 inline-flex rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
        >
          Back home
        </Link>
      </motion.div>
    </div>
  )
}
