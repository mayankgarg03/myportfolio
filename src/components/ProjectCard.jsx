import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ProjectLinkButton } from './ProjectLinkButton'
import { SkillBadge } from './SkillBadge'
import { projectCategories } from '../data/site'

function categoryLabel(id) {
  return projectCategories.find((c) => c.id === id)?.label ?? id
}

export function ProjectCard({ project, index = 0, featured = false }) {
  const { id, title, description, techStack, image, githubLink, liveLink, category } = project

  const techLine = techStack.slice(0, 6).join(' · ')

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
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-medium text-sky-200 backdrop-blur-sm">
            {categoryLabel(category)}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{techLine}</p>
        <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((t) => (
            <SkillBadge key={t}>{t}</SkillBadge>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          {/* <ProjectLinkButton href={liveLink} label="See live" variant="primary" />
          <ProjectLinkButton href={githubLink} label="See on GitHub" variant="secondary" /> */}
          <Link
            to={`/projects/${id}`}
            className="text-xs font-semibold text-sky-700 underline-offset-4 hover:underline dark:text-sky-400"
          >
            View project →
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
