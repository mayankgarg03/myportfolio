import { useEffect } from 'react'
import { checkAssistantHealth } from '../utils/assistantApi'

/**
 * Pings the assistant API /health once on mount to wake the server.
 */
export function useAssistantHealthCheck() {
  useEffect(() => {
    const controller = new AbortController()

    checkAssistantHealth(controller.signal).catch(() => {
      /* server may be offline during local UI-only work */
    })

    return () => controller.abort()
  }, [])
}
