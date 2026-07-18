import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { useAssistantHealthCheck } from './hooks/useAssistantHealthCheck'
import { MainLayout } from './layouts/MainLayout'
import { About } from './pages/About'
import { CaseStudy } from './pages/CaseStudy'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'

/**
 * App shell: theme + client-side routes.
 * Analytics + SpeedInsights are no-ops outside Vercel and require zero config.
 */
function App() {
  useAssistantHealthCheck();

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default App
