import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ProjectCover } from './ProjectCover'
import { projectCategories } from '../data/site'

function categoryLabel(id) {
  return projectCategories.find((c) => c.id === id)?.label ?? id
}

export function ProjectCard({ project, index = 0, featured = false }) {
  const { id, image, cover, category } = project
  const label = category ? categoryLabel(category) : null

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-sky-300 dark:border-zinc-800 dark:bg-neutral-950/80 dark:hover:border-sky-500/35 ${
        featured ? 'ring-1 ring-sky-200 dark:ring-sky-500/20' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        {image ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            {label && (
              <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-medium text-sky-200 backdrop-blur-sm">
                {label}
              </span>
            )}
          </div>
        ) : cover ? (
          <ProjectCover project={project} variant="card" categoryLabel={label} />
        ) : (
          <div className="aspect-[16/10] bg-zinc-100 dark:bg-zinc-900" />
        )}
      </div>
      <div className="p-5 sm:p-6">
        <Link
          to={`/projects/${id}`}
          className="text-xs font-semibold text-sky-700 underline-offset-4 hover:underline dark:text-sky-400"
        >
          Case study & architecture →
        </Link>
      </div>
    </motion.article>
  )
}
