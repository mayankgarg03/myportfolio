/**
 * Portfolio project entries — shape is stable for the UI. Merge with a CMS/API later if needed.
 *
 * Links: set `githubLink` and/or `liveLink` to `null` for client / NDA work — the UI shows
 * “private” chips instead of buttons. Add `confidentialityNote` inside `caseStudy` to explain.
 */

export const projects = [
  {
    id: 'edtech-qa-platform',
    category: 'apps',
    title: 'EdTech Q&A Platform',
    description:
      'Large-scale learning product where students post academic questions and receive answers from subject-matter experts, AI, or both — with fraud controls, subscriptions, and à la carte credits.',
    techStack: ['NestJS', 'Next.js', 'Node.js', 'AWS', 'TypeScript'],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    githubLink: null,
    liveLink: null,
    caseStudy: {
      confidentialityNote:
        'Worked under client confidentiality (VPN-only product, NDA/SOW). No client name, production URLs, or proprietary assets are shown — this case study describes responsibilities, systems, and outcomes at a high level.',
      overview:
        'For roughly three years I worked as a full-stack engineer on a large edtech Q&A platform: students submit academic questions, and answers are fulfilled by subject-matter experts (SMEs), AI-assisted pipelines, or a hybrid path depending on business rules and user preference. I owned substantial slices of onboarding, trust & safety adjacent flows, monetization, and the early AI-assisted answering integration — plus an internal Student Financial Aid (SFA) MVP for operations and B2B partnership experiments.',
      problem:
        'The product had to grow trust and revenue simultaneously: abusive signups and payment fraud could undermine SMEs and margins; monetization needed flexible plans without blocking international users; routing between human experts and automated answers had to stay transparent and configurable as models and policy evolved.',
      approach: [
        'Built and extended backend services in Node.js/NestJS and product UI in Next.js from Figma, keeping API contracts predictable for web and fulfillment workflows.',
        'Designed a fraud-detection pipeline using IPQualityScore: device fingerprints, IP intelligence, VPN/proxy signals, and risk scores evaluated through a configurable rule engine so business teams could tighten or relax policies without code deploys.',
        'Implemented subscription monetization — plans, SKU catalog, promotions, and country-tier pricing — plus à la carte question credits beyond plan allowances.',
        'Contributed to a hybrid answering model: routing and preference logic steered queries toward SMEs or AI based on operational rules.',
        'Delivered an SFA MVP: student-facing application flow and an internal admin surface for ops to review and approve aid, supporting early B2B initiatives.',
        'Operated alongside production reality: deployments on AWS (Lambda, EC2, ECS, S3, CDN), release coordination, hotfixes, and iterative performance and SEO work.',
      ],
      features: [
        {
          title: 'Fraud & risk engine',
          description:
            'Fingerprinting plus IP/vendor signals feeding a rule engine — ops could adjust thresholds and policies dynamically.',
          icon: 'shield',
        },
        {
          title: 'Monetization stack',
          description:
            'Subscriptions, SKU management, promos, and region-tier pricing alongside add-on credit purchases.',
          icon: 'credit',
        },
        {
          title: 'Hybrid SME + AI answers',
          description:
            'Business logic routed questions to experts, AI-assisted flows, or a blend aligned with user preference.',
          icon: 'layout',
        },
        {
          title: 'SFA MVP',
          description:
            'End-user aid applications plus an internal dashboard for ops review and approvals.',
          icon: 'file',
        },
      ],
      challenges:
        'Keeping fraud scoring explainable enough for stakeholder trust while iterating quickly; aligning subscription SKUs and regional pricing without fragmenting codebase; safely introducing AI-side paths beside human fulfillment with clear fallbacks.',
      learnings:
        'Deeper ownership across NestJS domains, Next.js product surfaces, AWS deployment patterns, and cross-functional workflows — especially where policy must move faster than weekly releases.',
      outcome:
        'Production features spanning registration, payments, fraud prevention, core Q&A monetization, hybrid answering, and ops tooling — all within a regulated, SLA-minded client environment.',
    },
  },
  {
    id: 'enterprise-rag-hr-assistant',
    category: 'apps',
    title: 'Enterprise RAG — HR Knowledge Assistant',
    description:
      'Production Retrieval-Augmented Generation system for internal HR Q&A over policies, guidance, and rich media — Azure OpenAI, LangChain, and a React UI with MongoDB-backed vectors and scheduled ingestion.',
    techStack: ['Node.js', 'React', 'MongoDB', 'LangChain', 'Azure OpenAI', 'TypeScript'],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    githubLink: null,
    liveLink: null,
    caseStudy: {
      confidentialityNote:
        'Built for a US-based organization under standard enterprise confidentiality. No employer name, internal URLs, or document samples are shared here — only architecture, responsibilities, and outcomes.',
      overview:
        'I designed and delivered a production-grade RAG stack so employees could ask natural-language questions against internal HR knowledge: written policies, best-practice guidance, performance-related reference material, and advisory documents. The surface area included heterogeneous sources (PDFs, spreadsheets, video, and audio), a Node.js/LangChain orchestration layer with Azure OpenAI, and a React frontend for search and conversational use.',
      problem:
        'HR knowledge was scattered across formats and systems; keyword search and static portals did not scale as content grew. The organization needed trustworthy answers with traceability, reliable background processing for fresh content, and costs under control across environments — without sacrificing latency for interactive chat.',
      approach: [
        'Implemented ingestion with Azure Document Intelligence and Azure Video Indexer to extract usable text and structure from PDFs, Excel, video, and audio.',
        'Automated end-to-end pipelines with scheduled jobs: fetch new or updated assets, process, embed, and persist vectors and metadata in MongoDB (serving both operational state and vector retrieval).',
        'Composed retrieval and generation with LangChain and Azure OpenAI Service behind a scalable Node.js API, paired with a React client.',
        'Added observability: structured logging, tracing, and email alerting for success and failure paths so long-running ingest and index workflows were operable.',
        'Improved retrieval quality with tuning, citation/reference surfacing in answers, and conversational memory for multi-turn sessions.',
        'Worked with DevOps on environment-aware processing: heavyweight Azure indexing limited to production where appropriate while lower environments used replicated datasets to protect spend.',
        'Reduced end-to-end response time from north of ~60 seconds to under ~20 seconds through caching, memory optimization, and pipeline/retrieval improvements.',
      ],
      features: [
        {
          title: 'Multi-format ingestion',
          description:
            'Document Intelligence and Video Indexer normalize PDFs, Excel, video, and audio into retrievable text and signals.',
          icon: 'file',
        },
        {
          title: 'RAG orchestration',
          description:
            'LangChain plus Azure OpenAI over MongoDB-stored embeddings with scheduled ingest and embedding refresh.',
          icon: 'search',
        },
        {
          title: 'Reliability & ops',
          description:
            'Logging, tracing, and proactive email alerts for ingest and workflow success and failure.',
          icon: 'chart',
        },
        {
          title: 'Trust & UX',
          description:
            'Citations and reference tracking to curb hallucinations; conversational context and latency-focused optimizations.',
          icon: 'shield',
        },
      ],
      challenges:
        'Balancing answer faithfulness against latency; keeping vector stores consistent with evolving HR content; coordinating expensive third-party indexing across prod vs non-prod; and extending support to additional document types without regressing retrieval quality.',
      learnings:
        'End-to-end fluency shipping real-world LLM systems: ingestion at scale, eval loops for retrieval quality, production observability for async AI pipelines, and cost-aware platform design.',
      outcome:
        'A live internal assistant used for HR Q&A with measurable latency gains, stronger citation-backed answers, and sustainable ingestion and monitoring practices for ongoing content growth.',
    },
  },
  {
    id: 'enterprise-opensearch-search',
    category: 'apps',
    title: 'Enterprise Search — OpenSearch',
    description:
      'Global and advanced OpenSearch-backed search over ~20M+ indexed documents: cross-field keyword discovery plus a block-based query builder with field-level operators (begins with, ends with, in, AND/OR, and more).',
    techStack: ['OpenSearch', 'Node.js', 'REST APIs', 'React', 'TypeScript'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    githubLink: null,
    liveLink: null,
    caseStudy: {
      confidentialityNote:
        'Shipped inside a confidential enterprise product (NDA/VPN context). Employer and product names are omitted; metrics describe production scale for this feature only.',
      overview:
        'I owned the design and implementation of search experiences on top of OpenSearch backed by tens of millions of documents. Users get a fast global entry point that fans out across many fields in our index for plain-text exploration, alongside an advanced mode for power users who need precise filters comparable to structured query tooling.',
      problem:
        'Teams needed one place to hunt across heterogeneous records without exporting to spreadsheets. Keyword-only UX was insufficient for auditors and analysts who think in predicates; at the same time, permissive querying over ~20 million rows had to remain safe, explainable, and performant.',
      approach: [
        'Modeled indexing so high-value facets and text fields aligned with realistic global search and advanced filter paths on OpenSearch.',
        'Specified and built REST APIs that translate UI intent into validated OpenSearch DSL — refusing ambiguous structures and guarding against abusive deep pagination.',
        'Implemented global search: single query input mapped to multi-field `_search` strategies across permitted index fields.',
        'Implemented advanced search: configurable rows pairing field → operator → value, with richer operators including begins-with, ends-with, membership (“in”), and boolean composition with AND/OR between conditions.',
        'Introduced composable logical blocks so users group criteria (e.g. block-level AND/OR nesting) mirroring how analysts reason about subsets of data.',
        'Collaborated on performance tuning against real cluster topology: timeouts, sizing, profiling slow queries, and iterating mappings where hotspots appeared.',
      ],
      features: [
        {
          title: 'Global search',
          description:
            'One search box interrogating many mapped fields simultaneously against the shared OpenSearch index.',
          icon: 'search',
        },
        {
          title: 'Advanced query builder',
          description:
            'Pick fields, comparison operators, and values row-by-row; combine with logical AND/OR semantics.',
          icon: 'layout',
        },
        {
          title: 'Block-based grouping',
          description:
            'Add blocks so complex predicates read like grouped clauses rather than flat one-off filters.',
          icon: 'grid',
        },
        {
          title: 'API-first delivery',
          description:
            'Typed request/response contracts between the React shell and backend search services.',
          icon: 'api',
        },
      ],
      challenges:
        'Bridging approachable UX with correct OpenSearch semantics; validating nested boolean trees before they hit the cluster; and keeping relevance and latency predictable as query shapes diversified.',
      learnings:
        'Translating conceptual “how analysts search” into safe composable DSL, hardening pipelines at tens of millions of documents, and instrumenting APIs so regressions surfaced before users noticed.',
      outcome:
        'Production search powering both casual lookup and granular investigation over an index on the order of twenty million documents, with APIs and UX I designed end to end.',
    },
  },
  {
    id: 'taskflow-saas',
    category: 'apps',
    title: 'TaskFlow SaaS',
    description:
      'Collaborative project management with real-time boards, role-based access, and Stripe billing.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80',
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    caseStudy: {
      overview:
        'TaskFlow is a B2B SaaS for small teams that need Kanban-style workflows without the complexity of enterprise tools. I owned the MERN stack implementation end-to-end, from auth to subscriptions.',
      problem:
        'Teams were juggling spreadsheets and chat threads; deadlines slipped because ownership and status were unclear. They needed a single source of truth with permissions that matched how they actually work.',
      approach: [
        'Mapped user journeys and defined a minimal viable permission model (owner, admin, member).',
        'Built REST APIs with Express and structured MongoDB schemas with validation.',
        'Implemented JWT refresh flows and httpOnly cookies for safer browser sessions.',
        'Added Socket.io for live card moves and presence, with room-based broadcasts.',
        'Integrated Stripe Checkout and webhooks for plan changes and invoice history.',
      ],
      features: [
        {
          title: 'Real-time boards',
          description: 'Live updates when teammates move or comment on cards.',
          icon: 'layout',
        },
        {
          title: 'RBAC',
          description: 'Workspace and project roles with audited permission checks on the server.',
          icon: 'shield',
        },
        {
          title: 'Billing',
          description: 'Checkout, customer portal, and webhook-driven subscription state.',
          icon: 'credit',
        },
        {
          title: 'Search & filters',
          description: 'Fast filtering by assignee, label, and due date across projects.',
          icon: 'search',
        },
      ],
      challenges:
        'Keeping socket payloads small under flaky networks, and reconciling optimistic UI updates with server truth when two users edited the same card. Stripe webhook idempotency required careful event storage.',
      learnings:
        'I deepened my understanding of distributed state, idempotent webhooks, and designing APIs that stay predictable as the permission model grows.',
      outcome:
        'A demo-ready product with seeded data, documented API, and a deployment path to a single VPS with PM2 and nginx — suitable for portfolio review and user testing.',
    },
  },
  {
    id: 'commerce-api',
    category: 'apps',
    title: 'Commerce REST API',
    description:
      'E-commerce backend with cart, orders, inventory, and admin analytics — documented with OpenAPI.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Jest'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    /** Set to `null` when code or URLs cannot be shared (client / NDA). */
    githubLink: null,
    liveLink: null,
    caseStudy: {
      confidentialityNote:
        'Built for a client under NDA. Source code and production URLs are not public; this case study describes scope, approach, and outcomes only.',
      overview:
        'A headless commerce API designed for a future storefront. It focuses on correctness, test coverage, and clear boundaries between catalog, cart, and fulfillment.',
      problem:
        'Rapid prototypes often skip inventory consistency and order state machines, leading to overselling and painful fixes later. The goal was a backend that could evolve without rewriting core flows.',
      approach: [
        'Modeled products, variants, and stock reservations with MongoDB transactions where needed.',
        'Implemented cart merge for anonymous → authenticated users.',
        'Built an order pipeline: pending → paid → fulfilled with explicit transitions.',
        'Wrote integration tests against a test database and documented endpoints in OpenAPI 3.',
      ],
      features: [
        {
          title: 'Inventory safety',
          description: 'Reservations during checkout reduce race conditions on hot items.',
          icon: 'box',
        },
        {
          title: 'Admin metrics',
          description: 'Aggregation pipelines for revenue and top SKUs over date ranges.',
          icon: 'chart',
        },
        {
          title: 'Auth',
          description: 'JWT for customers; separate admin routes with stricter scopes.',
          icon: 'lock',
        },
        {
          title: 'Docs',
          description: 'OpenAPI spec generated from route metadata for handoff to frontend teams.',
          icon: 'file',
        },
      ],
      challenges:
        'Balancing transactional overhead with MongoDB’s document model, and making aggregations performant without premature caching.',
      learnings:
        'I learned to treat API design as a contract: version carefully, validate aggressively, and invest in tests around money-moving paths.',
      outcome:
        'A stable API layer with >80% route coverage in tests and a Postman collection for stakeholders — ready to plug into React or mobile clients.',
    },
  },
  {
    id: 'devdash',
    category: 'apps',
    title: 'DevDash Analytics',
    description:
      'React dashboard visualizing GitHub activity, CI status, and deployment health in one place.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Chart.js', 'REST'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
    caseStudy: {
      overview:
        'DevDash pulls together signals developers check daily — PR throughput, build failures, and release cadence — into a calm, dark-mode-first UI.',
      problem:
        'Context switching between GitHub, CI, and hosting dashboards slowed morning standups. The team wanted one glanceable view without building a full internal platform.',
      approach: [
        'Defined widgets per metric with clear refresh semantics and stale states.',
        'Used React Query-style caching patterns with manual invalidation for demo data.',
        'Built responsive grid layouts with Tailwind and accessible chart summaries.',
        'Mocked external APIs in JSON for the frontend-only portfolio build.',
      ],
      features: [
        {
          title: 'Widget grid',
          description: 'Drag-resize friendly cards with consistent loading skeletons.',
          icon: 'grid',
        },
        {
          title: 'Charts',
          description: 'Line and bar charts with accessible labels and reduced motion support.',
          icon: 'chart',
        },
        {
          title: 'Theming',
          description: 'Dark-first palette with WCAG-minded contrast checks.',
          icon: 'sun',
        },
        {
          title: 'Export',
          description: 'CSV export of summary tables for weekly reports (mock).',
          icon: 'download',
        },
      ],
      challenges:
        'Making charts readable on mobile without hiding nuance, and keeping bundle size reasonable when adding visualization libraries.',
      learnings:
        'I practiced designing for information density: progressive disclosure beats one giant chart, and motion should reinforce hierarchy, not distract.',
      outcome:
        'A polished dashboard shell that can swap mock JSON for live API keys — ideal for demonstrating frontend architecture and UX judgment.',
    },
  },
  {
    id: 'content-cms',
    category: 'websites',
    title: 'Headless CMS Lite',
    description:
      'Minimal CMS with Markdown content, media metadata, and a public read API for a marketing site.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Markdown'],
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    githubLink: null,
    liveLink: null,
    caseStudy: {
      confidentialityNote:
        'Client-owned product; repository and live admin are not shared. Details below reflect what can be disclosed contractually.',
      overview:
        'A lightweight CMS for a marketing site: authors edit Markdown, upload asset references, and publish through a simple review flag — no heavy WYSIWYG.',
      problem:
        'Marketing wanted faster landing page updates without touching the repo, but full CMS products were overkill for a small static site.',
      approach: [
        'Stored content as Markdown with front-matter in MongoDB; validated on write.',
        'Built a React admin with list/detail views and preview pane.',
        'Exposed a read-only public API with caching headers for the static site generator.',
        'Added slug uniqueness and soft-delete for safe rollbacks.',
      ],
      features: [
        {
          title: 'Markdown pipeline',
          description: 'Sanitized HTML output with a consistent heading hierarchy.',
          icon: 'file',
        },
        {
          title: 'Preview',
          description: 'Side-by-side edit and rendered preview for faster iteration.',
          icon: 'eye',
        },
        {
          title: 'Slugs & SEO',
          description: 'Slug uniqueness, meta title/description fields per page.',
          icon: 'link',
        },
        {
          title: 'API',
          description: 'Versioned JSON endpoints for static builds and edge caching.',
          icon: 'api',
        },
      ],
      challenges:
        'Sanitizing user Markdown while preserving intentional HTML embeds, and handling concurrent edits without full operational transform.',
      learnings:
        'I learned to prioritize content integrity (validation, backups) over feature breadth — small teams feel pain when publish paths are fragile.',
      outcome:
        'A working admin and API that could back Gatsby, Next.js, or Astro — with clear extension points for roles and workflows.',
    },
  },
]

/** All unique tech labels across projects — used for filter chips on the Projects page. */
export function getAllTechTags() {
  const set = new Set()
  projects.forEach((p) => p.techStack.forEach((t) => set.add(t)))
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}

/** Filter by `category`: `apps` | `websites` | `games` — omit for all */
export function getProjectsByCategory(category) {
  if (!category) return projects
  return projects.filter((p) => p.category === category)
}
