/*
  FinalCTA.jsx — Final Call-to-Action conversion section.

  Design:
  - Soft primary-tinted background card with subtle border
  - Large, clear typography and focused composition
  - High-contrast primary CTA button with hover arrow micro-interaction
  - Low-friction reassurance: "No complicated setup. Just bring your study material."
  - No unsupported claims or fake social proof
*/
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/common/SectionLabel'
import Button from '@/components/common/Button'

function FinalCTA() {
  return (
    <section id="final-cta" aria-label="Get started with StudyMate AI" className="section pb-24">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-3xl border border-primary/20 p-8 sm:p-12 lg:p-16 text-center"
          style={{
            background:
              'linear-gradient(145deg, hsl(244 66% 57% / 0.08) 0%, hsl(244 66% 57% / 0.02) 100%)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Subtle decorative radial light */}
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(244 66% 57% / 0.12) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Eyebrow */}
            <SectionLabel className="mb-4">
              Your Next Study Session
            </SectionLabel>

            {/* Main Heading */}
            <h2 className="text-display text-text mt-2 mb-4">
              Ready to study smarter?
            </h2>

            {/* Supporting Copy */}
            <p className="text-body-lg text-text-muted mb-8 max-w-xl mx-auto">
              Turn your study material into clearer explanations, better practice,
              and a smarter revision routine.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <Button
                size="lg"
                id="final-cta-btn"
                className="group w-full sm:w-auto px-8 justify-center"
                onClick={() => {
                  const target = document.getElementById('product-preview')
                  if (target) target.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Start Learning — It's Free
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </Button>
            </div>

            {/* Low-friction reassurance */}
            <p className="text-caption text-text-subtle">
              No complicated setup. Just bring your study material.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
