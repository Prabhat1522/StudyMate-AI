/*
  Navbar.jsx — Sticky top navigation bar.

  Behaviour:
  - Sticky at top (stays in document flow, no overlap with content)
  - Transparent on page load, gains background + border on scroll
  - Mobile: hamburger menu toggle
*/
import { useState, useEffect } from 'react'
import { Brain, Menu, X } from 'lucide-react'
import Button from '@/components/common/Button'
import { navLinks } from '@/data/navLinks'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Add a visual border + background after the user scrolls past the hero top
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full transition-all duration-200',
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <nav className="container flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <a
          href="/"
          className="flex items-center gap-2.5"
          aria-label="StudyMate AI — go to homepage"
        >
          {/* Brand icon */}
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Brain size={16} className="text-white" />
          </div>
          <span className="text-sm font-bold text-text tracking-tight">
            StudyMate AI
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-alt rounded-lg transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Desktop CTAs ── */}
        <div className="hidden md:flex items-center gap-2.5">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const el = document.getElementById('product-preview')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Sign in
          </Button>
          <Button
            size="sm"
            onClick={() => {
              const el = document.getElementById('product-preview')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Start Learning
          </Button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface-alt transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile menu (dropdown) ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-surface"
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-alt rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-center"
                onClick={() => {
                  setMobileOpen(false)
                  const el = document.getElementById('product-preview')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Sign in
              </Button>
              <Button
                size="sm"
                className="w-full justify-center"
                onClick={() => {
                  setMobileOpen(false)
                  const el = document.getElementById('product-preview')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
