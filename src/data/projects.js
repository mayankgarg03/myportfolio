/**
 * Portfolio project entries — shape is stable for the UI. Merge with a CMS/API later if needed.
 *
 * Links: set `githubLink` and/or `liveLink` to `null` for client / NDA work — the UI shows
 * “private” chips instead of buttons. Add `confidentialityNote` inside `caseStudy` to explain.
 *
 * Covers: confidential work uses `cover` (typed summary panel) instead of product screenshots.
 * Optional `image` is only for public demos you can show — leave null when NDA applies.
 */

export const projects = [
  {
    id: 'edtech-qa-platform',
    category: 'apps',
    title: 'EdTech Q&A Platform',
    description:
      'Large-scale learning product where students post academic questions and receive answers from subject-matter experts, AI, or both — with fraud controls, subscriptions, and à la carte credits.',
    techStack: ['NestJS', 'Next.js', 'Node.js', 'AWS', 'TypeScript'],
    timeline: 'Aug 2022 — Feb 2025',
    image: null,
    cover: {
      domain: 'EdTech · Learning',
      improvements: [
        'Fraud checks became rule-driven so ops could tighten policy without redeploys',
        'Subscriptions and regional pricing made monetization flexible across markets',
        'Hybrid SME + AI routing let the product answer faster while keeping humans in the loop',
      ],
    },
    githubLink: null,
    liveLink: null,
    caseStudy: {
      confidentialityNote:
        'Worked under client confidentiality (VPN-only product, NDA/SOW). No client name, production URLs, or proprietary assets are shown — this case study describes responsibilities, systems, and outcomes at a high level.',
      overview:
        'For roughly three years I worked as a full-stack engineer on a large edtech Q&A platform: students submit academic questions, and answers are fulfilled by subject-matter experts (SMEs), AI-assisted pipelines, or a hybrid path depending on business rules and user preference. I owned substantial slices of onboarding, trust & safety adjacent flows, monetization, and the early AI-assisted answering integration — plus an internal Student Financial Aid (SFA) MVP for operations and B2B partnership experiments.',
      problem:
        'The product had to grow trust and revenue simultaneously: abusive signups and payment fraud could undermine SMEs and margins; monetization needed flexible plans without blocking international users; routing between human experts and automated answers had to stay transparent and configurable as models and policy evolved.',
      architecture: [
        'NestJS/Node services behind Next.js product surfaces, with clear API contracts for web and fulfillment workflows.',
        'Fraud pipeline as a rule engine over device, IP, and vendor risk signals — policy changes without redeploys.',
        'Monetization domain for plans, SKUs, promos, and country-tier pricing plus à la carte credits.',
        'Hybrid answering router that steered traffic to SME, AI, or blended paths from operational rules.',
        'AWS deploy path (Lambda, EC2, ECS, S3, CDN) with release coordination and hotfix practices.',
      ],
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
    timeline: '2024 — 2025',
    image: null,
    cover: {
      domain: 'Enterprise · GenAI',
      improvements: [
        'Scattered HR docs, video, and audio became searchable through one RAG assistant',
        'Answers gained citations and conversational memory so teams could trust and follow up',
        'End-to-end response time dropped from ~60s to under ~20s with caching and pipeline work',
      ],
    },
    githubLink: null,
    liveLink: null,
    caseStudy: {
      confidentialityNote:
        'Built for a US-based organization under standard enterprise confidentiality. No employer name, internal URLs, or document samples are shared here — only architecture, responsibilities, and outcomes.',
      overview:
        'I designed and delivered a production-grade RAG stack so employees could ask natural-language questions against internal HR knowledge: written policies, best-practice guidance, performance-related reference material, and advisory documents. The surface area included heterogeneous sources (PDFs, spreadsheets, video, and audio), a Node.js/LangChain orchestration layer with Azure OpenAI, and a React frontend for search and conversational use.',
      problem:
        'HR knowledge was scattered across formats and systems; keyword search and static portals did not scale as content grew. The organization needed trustworthy answers with traceability, reliable background processing for fresh content, and costs under control across environments — without sacrificing latency for interactive chat.',
      architecture: [
        'Ingestion via Azure Document Intelligence and Video Indexer for PDFs, Excel, video, and audio.',
        'Scheduled jobs to fetch, process, embed, and store vectors plus metadata in MongoDB.',
        'LangChain + Azure OpenAI orchestration behind a Node.js API, with a React chat/search client.',
        'Observability with structured logging, tracing, and email alerts on ingest success/failure.',
        'Cost-aware environments: heavy Azure indexing in production; lower envs used replicated data.',
      ],
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
    techStack: ['OpenSearch', 'Python', 'Lambda', 'API Gateway', 'React', 'TypeScript'],
    timeline: 'Mar 2025 — Present',
    image: null,
    cover: {
      domain: 'Enterprise · Search',
      improvements: [
        'One global search box could scan many fields across ~20M+ indexed documents',
        'Analysts got a block-based builder for precise filters instead of spreadsheet exports',
        'Validated OpenSearch APIs kept complex queries safe and performant in production',
      ],
    },
    githubLink: null,
    liveLink: null,
    caseStudy: {
      confidentialityNote:
        'Shipped inside a confidential enterprise product (NDA/VPN context). Employer and product names are omitted; metrics describe production scale for this feature only.',
      overview:
        'I owned the design and implementation of search experiences on top of OpenSearch backed by tens of millions of documents. Users get a fast global entry point that fans out across many fields in our index for plain-text exploration, alongside an advanced mode for power users who need precise filters comparable to structured query tooling.',
      problem:
        'Teams needed one place to hunt across heterogeneous records without exporting to spreadsheets. Keyword-only UX was insufficient for auditors and analysts who think in predicates; at the same time, permissive querying over ~20 million rows had to remain safe, explainable, and performant.',
      architecture: [
        'OpenSearch index modeled for both multi-field global search and advanced filter paths.',
        'REST APIs that translate UI intent into validated OpenSearch DSL with pagination guards.',
        'Global search: one query mapped across permitted text and facet fields.',
        'Advanced mode: field → operator → value rows with AND/OR and nested logical blocks.',
        'Python/Lambda + API Gateway services paired with a React query-builder UI.',
      ],
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
  }
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
