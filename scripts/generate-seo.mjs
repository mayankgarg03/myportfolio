/**
 * Generates `public/sitemap.xml` and rewrites the Sitemap line in
 * `public/robots.txt` using `VITE_SITE_URL` (the same env the app reads).
 *
 * Runs automatically before `vite build` via the `prebuild` npm script.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const SITE_URL = (process.env.VITE_SITE_URL || 'https://mayank-garg.vercel.app').replace(/\/$/, '')

/**
 * We can't `import` projects.js directly here because it pulls in a PDF asset.
 * Instead we parse the `id:` lines — robust enough for this static data file.
 */
async function loadProjectIds() {
  const src = await readFile(resolve(root, 'src/data/projects.js'), 'utf8')
  const ids = []
  const re = /^\s*id:\s*'([^']+)'/gm
  let m
  while ((m = re.exec(src)) !== null) ids.push(m[1])
  return Array.from(new Set(ids))
}

const today = new Date().toISOString().slice(0, 10)

function urlEntry({ loc, changefreq = 'monthly', priority = '0.7' }) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

async function main() {
  const projectIds = await loadProjectIds()

  const staticRoutes = [
    { path: '/', changefreq: 'monthly', priority: '1.0' },
    { path: '/projects', changefreq: 'monthly', priority: '0.9' },
    { path: '/contact', changefreq: 'yearly', priority: '0.6' },
  ]

  const projectRoutes = projectIds.map((id) => ({
    path: `/projects/${id}`,
    changefreq: 'yearly',
    priority: '0.8',
  }))

  const all = [...staticRoutes, ...projectRoutes].map(({ path, changefreq, priority }) =>
    urlEntry({ loc: `${SITE_URL}${path}`, changefreq, priority }),
  )

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.join('\n')}
</urlset>
`

  const publicDir = resolve(root, 'public')
  await mkdir(publicDir, { recursive: true })
  await writeFile(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8')

  const robotsPath = resolve(publicDir, 'robots.txt')
  let robots
  try {
    robots = await readFile(robotsPath, 'utf8')
  } catch {
    robots = `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
  }
  robots = robots.replace(/^Sitemap:.*$/m, `Sitemap: ${SITE_URL}/sitemap.xml`)
  if (!/^Sitemap:/m.test(robots)) {
    robots += `\nSitemap: ${SITE_URL}/sitemap.xml\n`
  }
  await writeFile(robotsPath, robots, 'utf8')

  console.log(`[seo] sitemap.xml + robots.txt generated for ${SITE_URL} (${projectIds.length} project routes)`) 
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error('[seo] generation failed:', err)
    process.exit(1)
  })
}
