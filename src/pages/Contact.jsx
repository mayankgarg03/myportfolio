import { motion } from 'framer-motion'
import { ContactForm } from '../components/ContactForm'
import { SEO } from '../components/SEO'

export function Contact() {
  return (
    <div className="min-h-screen bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-24">
      <SEO
        title="Contact"
        description="Reach out about freelance, full-time, or collaboration opportunities. I usually reply within a day."
        path="/contact"
      />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-xl"
      >
        <ContactForm />
      </motion.div>
    </div>
  )
}
