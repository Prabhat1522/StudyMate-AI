/*
  Hero.jsx — Above-the-fold hero section.

  Layout:
  - Two-column grid on desktop (lg+): headline left, dashboard preview right
  - Single column on mobile: text only (dashboard hidden on small screens)

  Design decisions:
  - Very faint radial gradient at the top adds depth without being flashy
  - No fake user counts, no fabricated social proof
  - One clear primary CTA + a secondary ghost link
  - "No credit card required" as the only trust signal (factual)
*/
import { ArrowRight } from 'lucide-react'
import Button from '@/components/common/Button'
import SectionLabel from '@/components/common/SectionLabel'
import HeroDashboard from '@/components/HeroDashboard'

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ paddingBlock: '5rem 4rem' }}
    >
      {/* Barely-visible radial gradient — adds warmth without distraction */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% -5%, hsl(244 66% 57% / 0.07) 0%, transparent 65%)',
        }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column: Headline + CTA ── */}
          <div className="max-w-xl">

            {/* Small label above the heading */}
            <SectionLabel className="mb-5">
              AI-Powered Learning
            </SectionLabel>

            {/* Hero headline — the single most important line on the page */}
            <h1 className="text-hero text-text mb-6">
              Study smarter.<br />
              Understand faster.
            </h1>

            {/* Supporting description */}
            <p className="text-body-lg mb-8 max-w-md">
              Your AI-powered study companion that turns study material into
              real understanding — through personalized plans, smart flashcards,
              and instant AI tutoring.
            </p>

            {/* CTA group */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Button
                size="lg"
                id="hero-cta-primary"
                onClick={() => {
                  const target = document.getElementById('product-preview')
                  if (target) target.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Start Learning — It's Free
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="hero-cta-secondary"
                className="gap-1"
                onClick={() => {
                  const target = document.getElementById('how-it-works')
                  if (target) target.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                See how it works
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>

            {/* Trust signal — factual only, no fake numbers */}
            <p className="text-caption text-text-subtle">
              No credit card required · Free to get started
            </p>

          </div>

          {/* ── Right column: Product dashboard preview ── */}
          {/* Displays side-by-side on desktop (lg+), stacked under CTAs on mobile */}
          <div className="flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            <HeroDashboard />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
