import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { SEO, buildPersonSchema, buildWebsiteSchema } from '../components/SEO'
import { TechStack } from '../components/TechStack'
import { TypingRole } from '../components/TypingRole'
import {
  aboutIntro,
  aboutStrengths,
  experienceTimeline,
  heroBackgroundImage,
  heroTechBracket,
  howIWorkSteps,
  interestsAndHobbies,
  profile,
  projectCategories,
} from '../data/site'
import { projects } from '../data/projects'
import { useHashScroll } from '../hooks/useHashScroll'

const featured = projects.slice(0, 3)

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.45 },
}

export function Home() {
  useHashScroll()
  const bracketLine = heroTechBracket.join(' · ')

  return (
    <div className="bg-white text-zinc-900 dark:bg-neutral-950 dark:text-zinc-100">
      <SEO
        fullTitle={`${profile.name} - ${profile.heroTitle}`}
        description={`${profile.name} — ${profile.heroTitle} based in ${profile.location}. ${profile.tagline}`}
        path="/"
        jsonLd={[buildPersonSchema(), buildWebsiteSchema()]}
      />
      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/93 via-sky-50/85 to-white dark:from-neutral-950/92 dark:via-neutral-950/88 dark:to-neutral-950" />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-sky-400/25 blur-[120px] dark:bg-sky-500/15" />
        <div className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-sky-300/20 blur-[100px] dark:bg-sky-600/10" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-700 dark:text-sky-300/90">
              {profile.greeting}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[1.08] dark:text-white">
              <span className="block">{profile.name}</span>
              <span className="mt-2 block min-h-[1.2em] bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-sky-400">
                <TypingRole phrases={profile.roleVariants} />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{profile.tagline}</p>
            <p className="mt-3 font-mono text-sm text-sky-700 dark:text-sky-400/90">[ {bracketLine} ]</p>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-500">
              <span className="font-semibold text-zinc-900 dark:text-zinc-300">{profile.yearsExperience}+ years</span>{' '}
              shipping production web apps
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/25 transition hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                View Projects
              </Link>
              <Link
                to={{ pathname: '/', hash: 'contact' }}
                className="inline-flex items-center justify-center rounded-full border border-sky-600/40 bg-white/80 px-8 py-3.5 text-sm font-semibold text-sky-800 transition hover:border-sky-500 hover:bg-sky-50 dark:border-sky-400/50 dark:bg-transparent dark:text-sky-200 dark:hover:bg-sky-500/10"
              >
                Contact
              </Link>
              <a
                href={profile.resumeUrl}
                download="Mayank_Garg_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300/90 bg-white/70 px-8 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-sky-400 hover:bg-white dark:border-zinc-600 dark:bg-transparent dark:text-zinc-200 dark:hover:border-sky-500/50 dark:hover:bg-zinc-900/40"
              >
                Résumé
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-sky-100 bg-sky-50/60 px-4 py-20 dark:border-zinc-800 dark:bg-zinc-900/35 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="About"
            title={
              <>
                Who I am & <span className="text-sky-600 dark:text-sky-400">what I bring</span>
              </>
            }
            description={aboutIntro}
          />
          <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:items-start">
            <motion.div {...fadeUp}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">What I bring</h3>
              <ul className="mt-6 space-y-4">
                {aboutStrengths.map((line) => (
                  <li key={line} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm text-sky-700 dark:bg-sky-500/20 dark:text-sky-300">
                      ✓
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Interests & hobbies</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                A lighter side — because good work comes from people, not just pipelines.
              </p>
              <ul className="mt-6 space-y-3 text-zinc-700 dark:text-zinc-400">
                {interestsAndHobbies.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 border-l-2 border-sky-300 pl-4 leading-relaxed dark:border-sky-500/35"
                  >
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 overflow-hidden rounded-2xl border border-sky-200/80 ring-1 ring-sky-100 dark:border-zinc-800 dark:ring-sky-500/10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="Experience"
            title="Where I’ve shipped impact"
            description="Roles that shaped how I think about systems, users, and teams."
          />
          <ol className="relative mt-14 space-y-0 border-l border-sky-200 pl-8 dark:border-zinc-700 md:pl-10">
            {experienceTimeline.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative pb-14 last:pb-0"
              >
                {/* Dot sits on the border line: pl-8/md:pl-10 from ol, minus half the marker (6px) */}
                <span
                  className="absolute -left-[2.375rem] top-2.5 h-3 w-3 shrink-0 rounded-full border-2 border-white bg-sky-500 dark:border-neutral-950 dark:bg-sky-400 md:-left-[2.875rem] md:top-2"
                  aria-hidden
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{item.role}</h3>
                  <span className="text-sm font-medium text-sky-700 dark:text-sky-400">{item.duration}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">{item.company}</p>
                <ul className="mt-4 space-y-2">
                  {item.impacts.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      <span className="mt-0.5 text-sky-600 dark:text-sky-500">▹</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <TechStack />

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              kicker="Projects"
              title={
                <>
                  Selected <span className="font-mono text-sky-600 dark:text-sky-400">{'{ work }'}</span>
                </>
              }
              description="A curated preview of shipped work — each card opens the full project page (overview, approach, outcomes)."
              className="max-w-2xl"
            />
            {/* <Link
              to="/projects"
              className="shrink-0 rounded-full border border-sky-300 px-5 py-2.5 text-sm font-semibold text-sky-800 transition hover:bg-sky-50 dark:border-sky-500/40 dark:text-sky-300 dark:hover:bg-sky-500/10"
            >
              View all projects →
            </Link> */}
          </div>
          {/* <div className="mb-8 flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <span
                key={c.id}
                className="rounded-full border border-sky-200 bg-sky-50/80 px-4 py-1.5 text-xs font-medium text-sky-900 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-400"
              >
                {c.label}
              </span>
            ))}
          </div> */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} featured />
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section
        id="how-i-work"
        className="scroll-mt-24 border-t border-sky-100 bg-sky-50/50 px-4 py-20 dark:border-zinc-800 dark:bg-zinc-900/20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="Process"
            title="How I work"
            description="A predictable rhythm — so surprises are the good kind."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howIWorkSteps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl border border-sky-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-neutral-950/70"
              >
                <span className="absolute right-5 top-5 font-mono text-3xl font-bold text-sky-200 dark:text-sky-500/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="pr-12 text-lg font-semibold text-zinc-900 dark:text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            kicker="Contact"
            title="Let’s build something solid"
            description="Tell me about your project, role, or what you’re working on — messages land straight in my inbox."
            className="mb-14"
          />
          <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900/60 dark:to-neutral-950 sm:p-10">
            <ContactForm embedded />
          </div>
        </div>
      </section>
    </div>
  )
}
