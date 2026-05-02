import { useEffect, useState } from 'react'

/**
 * Cycles through `phrases` with a typewriter + delete animation.
 */
export function TypingRole({ phrases, className = '' }) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const phrase = phrases[phraseIndex % phrases.length]
    if (!phrase) return undefined
    let t

    if (phase === 'typing') {
      if (text.length < phrase.length) {
        t = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 72)
      } else {
        t = setTimeout(() => setPhase('hold'), 2000)
      }
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('deleting'), 400)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        t = setTimeout(() => setText(phrase.slice(0, text.length - 1)), 42)
      } else {
        t = setTimeout(() => {
          setPhraseIndex((n) => n + 1)
          setPhase('typing')
        }, 0)
      }
    }

    return () => clearTimeout(t)
  }, [text, phase, phraseIndex, phrases])

  return (
    <span className={className}>
      {text}
      <span
        className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-sky-600 align-middle dark:bg-sky-400"
        aria-hidden
      />
    </span>
  )
}
