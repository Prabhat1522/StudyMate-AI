/*
  Footer.jsx — Site footer with SaaS multi-column navigation and brand elements.

  Features:
  - Brand identity with icon and tagline
  - Multi-column navigation links mapped to existing sections (no dead routes)
  - Secondary Footer CTA: "Start your next study session"
  - Challenge concept disclaimer
  - Copyright statement
  - Fully responsive and accessible
*/
import { Brain, ArrowRight } from 'lucide-react'
import Button from '@/components/common/Button'

const FOOTER_NAV = {
  product: {
    title: 'Product',
    links: [
      { label: 'AI Tutor', href: '#features' },
      { label: 'Smart Notes', href: '#features' },
      { label: 'AI Summaries', href: '#features' },
      { label: 'AI Quizzes', href: '#features' },
      { label: 'Flashcards', href: '#features' },
      { label: 'Study Progress', href: '#features' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#workspace' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Contact', href: '#final-cta' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Study Tips', href: '#features' },
      { label: 'Help Center', href: '#workspace' },
      { label: 'Documentation', href: '#product-preview' },
    ],
  },
}

function Footer() {
  return (
    <footer
      id="site-footer"
      className="border-t border-border bg-surface-alt/60 text-text-muted"
      aria-label="Site Footer"
    >
      <div className="container py-12 lg:py-16">
        
        {/* ── Top area: Brand + Multi-column Links + Secondary CTA ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border">
          
          {/* Left Column: Brand summary (spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <a
              href="/"
              className="flex items-center gap-2.5 mb-4 group"
              aria-label="StudyMate AI Homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                <Brain size={16} className="text-white" aria-hidden="true" />
              </div>
              <span className="text-base font-bold text-text tracking-tight">
                StudyMate AI
              </span>
            </a>
            
            <p className="text-sm font-medium text-text mb-1">
              Your AI-powered study companion.
            </p>
            <p className="text-xs text-text-muted max-w-sm leading-relaxed mb-6">
              Learn smarter. Practice better. Keep moving.
            </p>

            {/* Footer Secondary CTA */}
            <div className="rounded-xl border border-border bg-surface p-3.5 w-full max-w-xs">
              <p className="text-xs font-semibold text-text mb-2">
                Start your next study session.
              </p>
              <Button
                variant="primary"
                size="sm"
                className="w-full justify-center group"
                onClick={() => {
                  const el = document.getElementById('product-preview')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                  else window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Start Learning
                <ArrowRight
                  size={14}
                  className="transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>

          {/* Right Columns: Navigation categories */}
          {Object.entries(FOOTER_NAV).map(([key, group]) => (
            <div key={key} className="flex flex-col">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5" role="list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-text-muted hover:text-primary transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom area: Disclaimer + Copyright ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-text-subtle">
            StudyMate AI is a frontend product concept created for the Acdyon Technologies challenge.
          </p>
          <p className="text-[11px] text-text-subtle whitespace-nowrap">
            © 2026 StudyMate AI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
