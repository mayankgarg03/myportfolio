import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import { askAssistant } from '../utils/assistantApi'

const SUGGESTIONS = [
  'What technologies does Mayank work with?',
  'Tell me about his recent experience',
  'What projects has he built?',
  'Is he open to new opportunities?',
]

const WELCOME =
  "Hi — I'm Mayank's portfolio assistant. Ask me about his skills, experience, projects, or background."

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 px-1" aria-hidden>
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500 [animation-delay:-0.2s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500 [animation-delay:-0.1s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500" />
    </span>
  )
}

function ChatPanel({ onClose }) {
  const formId = useId()
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const abortRef = useRef(null)
  const panelRef = useRef(null)

  const [messages, setMessages] = useState([
    { id: 'welcome', role: 'assistant', content: WELCOME },
  ])
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, status])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      abortRef.current?.abort()
    }
  }, [onClose])

  const send = async (raw) => {
    const query = String(raw ?? '').trim()
    if (!query || status === 'loading') return

    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    const userMsg = { id: crypto.randomUUID(), role: 'user', content: query }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setError('')
    setStatus('loading')

    try {
      const { answer } = await askAssistant(query, controller.signal)
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'assistant', content: answer },
      ])
      setStatus('idle')
    } catch (err) {
      if (err?.name === 'AbortError') return
      setError(err?.message || 'Something went wrong. Please try again.')
      setStatus('error')
    } finally {
      inputRef.current?.focus()
    }
  }

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${formId}-title`}
      className="flex h-full max-h-[min(36rem,85vh)] w-full flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-2xl shadow-sky-900/10 dark:border-zinc-700 dark:bg-neutral-950 dark:shadow-black/40"
    >
      <div className="flex items-start justify-between gap-3 border-b border-sky-100 bg-sky-50/80 px-4 py-3.5 dark:border-zinc-800 dark:bg-zinc-900/70 sm:px-5">
        <div className="min-w-0">
          <p id={`${formId}-title`} className="text-sm font-semibold text-zinc-900 dark:text-white">
            Ask Mayank&apos;s assistant
          </p>
          <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
            Skills, experience, projects, and more.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-sky-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      <div
        ref={listRef}
        className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4 sm:px-5"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'rounded-br-md bg-sky-600 text-white dark:bg-sky-500'
                  : 'rounded-bl-md border border-sky-100 bg-sky-50/80 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200'
              }`}
            >
              {m.content}
            </div>
          </motion.div>
        ))}

        {status === 'loading' && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md border border-sky-100 bg-sky-50/80 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-900/80">
              <TypingDots />
              <span className="sr-only">Assistant is thinking</span>
            </div>
          </div>
        )}
      </div>

      {messages.length <= 1 && status === 'idle' && (
        <div className="flex flex-wrap gap-2 border-t border-sky-50 px-4 py-3 dark:border-zinc-800/80 sm:px-5">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-left text-xs font-medium text-sky-800 transition hover:border-sky-400 hover:bg-sky-50 dark:border-zinc-700 dark:bg-transparent dark:text-sky-300 dark:hover:border-sky-500/50 dark:hover:bg-sky-500/10"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="border-t border-rose-100 bg-rose-50 px-4 py-2 text-xs text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-300 sm:px-5">
          {error}
        </p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          send(input)
        }}
        className="flex items-end gap-2 border-t border-sky-100 bg-sky-50/40 p-3 dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-4"
      >
        <label htmlFor={`${formId}-input`} className="sr-only">
          Ask a question about Mayank
        </label>
        <textarea
          ref={inputRef}
          id={`${formId}-input`}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              send(input)
            }
          }}
          placeholder="Ask about skills, experience…"
          disabled={status === 'loading'}
          className="max-h-28 min-h-[2.75rem] flex-1 resize-none rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 disabled:opacity-60 dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !input.trim()}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-sky-600 px-5 text-sm font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-sky-500 dark:hover:bg-sky-400"
        >
          Send
        </button>
      </form>
    </div>
  )
}

/**
 * Floating “Ask me” bot button + overlay chat panel.
 */
export function ChatAssistant() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-overlay"
            className="fixed inset-0 z-[60] flex items-end justify-center p-3 sm:items-end sm:justify-end sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[2px] dark:bg-black/55"
              aria-label="Close chat overlay"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-[min(36rem,85vh)] w-full max-w-md"
            >
              <ChatPanel onClose={() => setOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && (
          <motion.button
            key="ask-fab"
            type="button"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/30 transition hover:bg-sky-500 dark:bg-sky-500 dark:shadow-sky-900/40 dark:hover:bg-sky-400"
            aria-haspopup="dialog"
            aria-expanded={false}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M4.913 2.625a1.875 1.875 0 0 0-1.875 1.875v12.75c0 1.036.84 1.875 1.875 1.875h3.321l3.482 3.482A1.125 1.125 0 0 0 13.5 21.19V18.75h5.25a1.875 1.875 0 0 0 1.875-1.875V4.5A1.875 1.875 0 0 0 18.75 2.625H4.913Z" />
              </svg>
            </span>
            Ask me
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
