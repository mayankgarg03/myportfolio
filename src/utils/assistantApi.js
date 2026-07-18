const ASSISTANT_API_URL = (
  import.meta.env.VITE_ASSISTANT_API_URL || 'http://localhost:3001'
).replace(/\/$/, '')

export { ASSISTANT_API_URL }

/**
 * Ask the personal assistant API a question.
 * @param {string} query
 * @param {AbortSignal} [signal]
 * @returns {Promise<{ answer: string }>}
 */
export async function askAssistant(query, signal) {
  const res = await fetch(`${ASSISTANT_API_URL}/api/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    signal,
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(data?.error || 'Failed to get a response from the assistant')
  }

  if (!data?.answer || typeof data.answer !== 'string') {
    throw new Error('Unexpected response from the assistant')
  }

  return data
}

export async function checkAssistantHealth(signal) {
  const res = await fetch(`${ASSISTANT_API_URL}/health`, {
    method: 'GET',
    cache: 'no-store',
    signal,
  })
  if (!res.ok) throw new Error('Assistant health check failed')
  return res.json()
}
