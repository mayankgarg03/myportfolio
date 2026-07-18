import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { CaseStudySection } from '../components/CaseStudySection'
import { FeatureCard } from '../components/FeatureCard'
import { ProjectCover } from '../components/ProjectCover'
import { ProjectLinkButtonLarge } from '../components/ProjectLinkButton'
import { SEO, buildBreadcrumbSchema } from '../components/SEO'
import { getProjectById } from '../data/projects'
import { defaultOgImage, profile, SITE_URL } from '../data/site'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return <NotFound />
  }

  const { title, techStack, timeline, image, cover, githubLink, liveLink, caseStudy: cs } = project
  const ogImage = image || defaultOgImage

  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: title, path: `/projects/${id}` },
  ])

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    headline: title,
    description: cs.overview,
    url: `${SITE_URL}/projects/${id}`,
    image: ogImage,
    keywords: techStack.join(', '),
    author: { '@type': 'Person', name: profile.name, url: SITE_URL },
  }

  return (
    <article className="min-h-screen bg-white dark:bg-neutral-950">
      <SEO
        title={title}
        description={cs.overview.slice(0, 200)}
        path={`/projects/${id}`}
        image={ogImage}
        type="article"
        jsonLd={[breadcrumb, articleSchema]}
      />
      <section className="border-b border-zinc-200 dark:border-zinc-900">
        <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
          <Link
            to="/#projects"
            className="inline-flex text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400"
          >
            ← All projects
          </Link>
          {(liveLink || githubLink) && (
            <div className="mt-6 flex flex-wrap gap-3">
              <ProjectLinkButtonLarge href={liveLink} label="Live demo" variant="primary" />
              <ProjectLinkButtonLarge href={githubLink} label="GitHub" variant="secondary" />
            </div>
          )}
        </div>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800"
          >
            {image ? (
              <div>
                <img src={image} alt="" className="aspect-[21/9] w-full object-cover" />
                <div className="border-t border-zinc-200 bg-sky-50/70 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                    {title}
                  </h1>
                  {timeline && (
                    <p className="mt-1.5 font-mono text-sm text-sky-700 dark:text-sky-400">{timeline}</p>
                  )}
                </div>
              </div>
            ) : cover ? (
              <ProjectCover project={project} variant="hero" />
            ) : null}
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-16 px-4 py-16 sm:px-6 sm:py-24">
        {cs.confidentialityNote && (
          <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm leading-relaxed text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <span className="font-semibold text-zinc-900 dark:text-white">Confidentiality: </span>
            {cs.confidentialityNote}
          </aside>
        )}

        <CaseStudySection title="Overview" id="overview">
          <p>{cs.overview}</p>
        </CaseStudySection>

        <CaseStudySection title="Problem" id="problem" delay={0.05}>
          <p>{cs.problem}</p>
        </CaseStudySection>

        {cs.architecture?.length > 0 && (
          <CaseStudySection title="Architecture" id="architecture" delay={0.06}>
            <ul className="space-y-3">
              {cs.architecture.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden>
                    ▹
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>
        )}

        <CaseStudySection title="Approach" id="approach" delay={0.08}>
          <ol className="list-decimal space-y-3 pl-5 marker:text-sky-600 dark:marker:text-sky-400">
            {cs.approach.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </CaseStudySection>

        <section id="features" className="scroll-mt-28">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {cs.features.map((f) => (
              <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
            ))}
          </div>
        </section>

        <CaseStudySection title="Challenges" id="challenges" delay={0.05}>
          <p>{cs.challenges}</p>
        </CaseStudySection>

        <CaseStudySection title="Learnings" id="learnings" delay={0.05}>
          <p>{cs.learnings}</p>
        </CaseStudySection>

        <CaseStudySection title="Outcome" id="outcome" delay={0.05}>
          <p>{cs.outcome}</p>
        </CaseStudySection>
      </div>
    </article>
  )
}
