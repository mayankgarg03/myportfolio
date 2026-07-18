import { BackToTop } from '../components/BackToTop'
import { ChatAssistant } from '../components/ChatAssistant'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { PageTransition } from '../components/PageTransition'
import { ScrollProgress } from '../components/ScrollProgress'

/**
 * Shared chrome: nav, footer, scroll affordances, and animated page outlet.
 */
export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <PageTransition />
      </main>
      <Footer />
      <BackToTop />
      <ChatAssistant />
    </div>
  )
}
