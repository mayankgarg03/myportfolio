/**
 * Global site copy and profile data.
 */

/**
 * Resume is served as a static asset from `public/`.
 * Drop your PDF at `public/Mayank_Garg_Resume.pdf` — no build-time import needed,
 * so dev/build never fail if the file is missing.
 */
const resumePdf = '/Mayank_Garg_Resume.pdf'

/**
 * Public origin used in canonical URLs, OG tags, sitemap, and JSON-LD.
 * Set `VITE_SITE_URL` in Vercel (e.g. https://your-app.vercel.app) for accurate values.
 * Without it, we fall back to a sensible placeholder so the build still works.
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://mayank-garg.vercel.app'
).replace(/\/$/, '')

export const profile = {
  name: 'Mayank Garg',
  displayName: 'Mayank Garg',
  /** Hero greeting line */
  greeting: "Hi, I'm Mayank",
  heroTitle: 'Senior Software Engineer',
  /** Rotated in typing animation alongside role */
  roleVariants: ['Senior Software Engineer', 'MERN Developer'],
  role: 'Senior Software Engineer / MERN Developer',
  tagline:
    'Building scalable apps with clean architecture, thoughtful APIs, and interfaces people enjoy using.',
  /** Shown in hero — full years since career start (Aug 2020) */
  yearsExperience: 5,
  /** Resolved URL to the bundled PDF (Vite import) */
  resumeUrl: resumePdf,
  githubUrl: 'https://github.com/mayankgarg03',
  linkedinUrl: 'https://www.linkedin.com/in/mayank-garg-ab7a26183',
  /** Optional Twitter/X handle (without @) — used for twitter:creator. Leave empty to omit. */
  twitterHandle: '',
  email: '',
  location: 'Delhi, India',
}

/**
 * Default Open Graph image. Place a 1200×630 PNG/JPG at `public/og-default.png`,
 * or override per-page via the `<SEO image>` prop.
 */
export const defaultOgImage = '/og-default.png'

/** Full-bleed hero background (code / tech) */
export const heroBackgroundImage =
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80'

export const heroTechBracket = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'AWS',
  'Docker',
]

export const aboutIntro = `I'm a full-stack developer who cares about clarity — in code, in APIs, and in the product experience. I enjoy owning features end to end: from database shape to loading states that don't frustrate users.`

export const aboutStrengths = [
  'MERN stack: predictable APIs, validated data, and React UIs that stay maintainable',
  'Architecture: boundaries, testing where it matters, and docs the next dev will thank you for',
  'Performance: lazy loading, caching, and bundle choices that keep things snappy',
  'Collaboration: constructive reviews, estimates you can stand behind, and async-friendly updates',
]

export const interestsAndHobbies = [
  'Mechanical keyboards and a tidy terminal — small joys that add up',
  'Contributing to side projects and reading release notes like short stories',
  'Trail runs when I need to debug with my feet instead of a keyboard',
]

/** Vertical timeline — each role has impact bullets */
export const experienceTimeline = [
  {
    id: 'exp-charmai',
    role: 'Senior Software Engineer',
    company: 'Charmai Technologies Private Limited',
    duration: 'Mar 2025 — Present',
    impacts: [
      'Building master data management (MDM) software for the banking domain: data quality, governance workflows, and integration with downstream systems.',
      'Full-stack ownership of features in a regulated enterprise environment — from requirements and APIs to UI and releases.',
      'Ongoing work on the same MDM product line, deepening domain knowledge in banking data and entity resolution.',
    ],
  },
  {
    id: 'exp-misemind-edtech',
    role: 'Software Engineer',
    company: 'Misemind Technologies Private Limited',
    duration: 'Feb 2022 — Feb 2025',
    impacts: [
      'Shipped features for a large edtech learning platform (study tools, homework help, and content workflows) — similar in scope to major Q&A and tutoring products.',
      'End-to-end delivery across Node.js APIs, data layer, and React frontends used by students and internal teams.',
      'Collaborated on performance, reliability, and iterative delivery on a long-running production codebase.',
    ],
  },
  {
    id: 'exp-misemind-fullstack',
    role: 'Full-stack Developer',
    company: 'Misemind Technologies Private Limited',
    duration: 'Feb 2021 — Feb 2022',
    impacts: [
      'Owned vertical slices of MERN-style features: REST APIs, persistence, and responsive UIs.',
      'Participated in code reviews, testing, and deployment practices alongside senior engineers.',
    ],
  },
  {
    id: 'exp-misemind-intern',
    role: 'Backend Engineer (Intern)',
    company: 'Misemind Technologies Private Limited',
    duration: 'Aug 2020 — Feb 2021',
    impacts: [
      'Internship focused on backend engineering: APIs, services, and working with databases in a real codebase.',
      'Learned production expectations: logging, error handling, and shipping incremental changes safely.',
    ],
  },
]

/**
 * Tech stack (`#tech`) — three cards; keep aligned with what you use in production.
 */
export const skillCategories = [
  {
    title: 'Application stack',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'NestJS', 'Python'],
  },
  {
    title: 'Data stores & messaging',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis', 'Kafka', 'RabbitMQ'],
  },
  {
    title: 'Cloud, platform & observability',
    skills: [
      'AWS Lambda',
      'SQS',
      'SNS',
      'EC2',
      'ECS',
      'API Gateway',
      'CloudWatch',
      'Docker',
      'Git',
      'Datadog',
    ],
  },
]

/** Legacy grid — kept for optional use */
export const skillShowcase = [
  {
    id: 'js',
    title: 'JavaScript',
    description: 'Modern ES+, async flows, and patterns that scale across client and server.',
  },
  {
    id: 'react',
    title: 'React',
    description: 'Hooks, composition, and state that stays understandable as features grow.',
  },
  {
    id: 'node',
    title: 'Node.js',
    description: 'REST APIs, auth, and services with clear boundaries and tests.',
  },
  {
    id: 'mongo',
    title: 'MongoDB',
    description: 'Schema design, indexes, and aggregations when documents are the right fit.',
  },
  {
    id: 'css',
    title: 'CSS & UI',
    description: 'Tailwind-first styling, responsive layouts, and accessible components.',
  },
  {
    id: 'tools',
    title: 'Tooling',
    description: 'Vite, Git, ESLint, CI basics — shipping with confidence.',
  },
]

export const projectCategories = [
  { id: 'apps', label: 'Apps' },
  { id: 'websites', label: 'Websites' },
  { id: 'games', label: 'Games' },
]

/** How I work — numbered steps */
export const howIWorkSteps = [
  {
    title: 'Understand the problem',
    description:
      'Ask who it’s for, what success looks like, and what constraints are non-negotiable before touching code.',
  },
  {
    title: 'Design the shape',
    description:
      'Sketch data models, API contracts, and UI states so the happy path and edge cases are visible early.',
  },
  {
    title: 'Build in slices',
    description:
      'Ship vertical slices — backend + frontend + tests — so feedback is real, not theoretical.',
  },
  {
    title: 'Refine and document',
    description:
      'Profile when needed, simplify where it hurts, and leave READMEs and handoff notes that age well.',
  },
]
