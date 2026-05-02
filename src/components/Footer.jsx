import { Link } from 'react-router-dom'
import { profile } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-sky-100 bg-sky-50/50 dark:border-zinc-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold text-zinc-900 dark:text-white">{profile.displayName ?? profile.name}</p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-500">{profile.heroTitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-8 text-sm font-medium">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 transition hover:text-sky-700 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 transition hover:text-sky-700 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            download="Mayank_Garg_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition hover:text-sky-700 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            Résumé
          </a>
          <Link
            to={{ pathname: '/', hash: 'contact' }}
            className="text-zinc-600 transition hover:text-sky-700 dark:text-zinc-400 dark:hover:text-sky-400"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-sky-100 py-4 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-600">
        © {year} {profile.name}
      </div>
    </footer>
  )
}
