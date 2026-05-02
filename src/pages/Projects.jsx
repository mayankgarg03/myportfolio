import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { SEO } from '../components/SEO'
import { projectCategories } from '../data/site'
import { projects } from '../data/projects'

export function Projects() {
  const [active, setActive] = useState(null)

  const filtered = useMemo(() => {
    if (!active) return projects
    return projects.filter((p) => p.category === active)
  }, [active])

  return (
    <div className="min-h-screen bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-24">
      <SEO
        title="Projects"
        description="Selected production work — full-stack apps, search at scale, RAG systems, and SaaS products built with React, Node.js, and AWS."
        path="/projects"
      />
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <SectionHeader
          kicker="Portfolio"
          title={
            <>
              My{' '}
              <span className="font-mono text-sky-600 dark:text-sky-400">
                {'{'}
                dev
                {'}'}
              </span>{' '}
              projects
            </>
          }
          description="Filter by focus area. Each card is a shipped project—with the full breakdown on its own page."
        />
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
            active === null
              ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-500 dark:bg-sky-500'
              : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:bg-neutral-950 dark:text-zinc-300'
          }`}
        >
          All
        </button>
        {projectCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(c.id)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              active === c.id
                ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-500 dark:bg-sky-500'
                : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:bg-neutral-950 dark:text-zinc-300'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-20 text-center text-zinc-500 dark:text-zinc-400">No projects in this category yet.</p>
      )}
    </div>
  )
}
