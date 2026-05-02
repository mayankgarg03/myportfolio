import { motion } from 'framer-motion'

export function CaseStudySection({ title, children, id, delay = 0 }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, delay }}
      className="scroll-mt-28"
    >
      <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 [&>p+p]:mt-4">{children}</div>
    </motion.section>
  )
}
