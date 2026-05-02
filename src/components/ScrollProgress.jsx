import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-0.5 bg-transparent" aria-hidden>
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600"
        style={{ scaleX: progress }}
        initial={false}
      />
    </div>
  )
}
