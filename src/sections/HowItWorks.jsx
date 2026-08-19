/*
  HowItWorks.jsx — "From study material to mastery" section.

  Tells the StudyMate AI product story as a four-step visual journey:
    01 UPLOAD → 02 UNDERSTAND → 03 PRACTICE → 04 IMPROVE

  Layout:
  - Desktop (lg+):  Horizontal 4-column grid.
                    A gradient connector line runs behind the step number badges,
                    linking them visually left to right.
  - Mobile/tablet:  Single-column stack.
                    A small vertical connector (line + dot) appears between steps
                    to maintain the sense of progression.

  Animation:
  - Each step fades + slides up as it enters the viewport (via JourneyStep).
  - Staggered by 120ms per step.
  - Fully disabled when prefers-reduced-motion is set.
*/
import { Fragment } from 'react'
import { FileUp, Sparkles, ClipboardCheck, TrendingUp } from 'lucide-react'
import SectionLabel from '@/components/common/SectionLabel'
import JourneyStep from '@/components/how-it-works/JourneyStep'
import UploadPreview from '@/components/how-it-works/UploadPreview'
import UnderstandPreview from '@/components/how-it-works/UnderstandPreview'
import PracticePreview from '@/components/how-it-works/PracticePreview'
import ImprovePreview from '@/components/how-it-works/ImprovePreview'

const STEPS = [
  {
    id:          'upload',
    number:      '01',
    phase:       'Upload',
    icon:        FileUp,
    title:       'Bring your material',
    description: 'Upload your notes, PDFs, or study material and give StudyMate AI the context it needs.',
    Preview:     UploadPreview,
  },
  {
    id:          'understand',
    number:      '02',
    phase:       'Understand',
    icon:        Sparkles,
    title:       'Understand concepts',
    description: 'Ask questions, get simple explanations, and turn difficult topics into clear concepts.',
    Preview:     UnderstandPreview,
  },
  {
    id:          'practice',
    number:      '03',
    phase:       'Practice',
    icon:        ClipboardCheck,
    title:       'Practice what you learned',
    description: 'Generate quizzes and flashcards from your own material and test your understanding.',
    Preview:     PracticePreview,
  },
  {
    id:          'improve',
    number:      '04',
    phase:       'Improve',
    icon:        TrendingUp,
    title:       'Know what to improve',
    description: "Track your progress, identify weak topics, and focus your next session where it matters.",
    Preview:     ImprovePreview,
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How StudyMate AI works"
      className="section"
    >
      <div className="container">

        {/* ── Section header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="mb-4">How It Works</SectionLabel>
          <h2 className="text-display text-text mt-2 mb-4">
            From study material to mastery.
          </h2>
          <p className="text-body-lg max-w-lg mx-auto">
            StudyMate AI turns the way you already study into a smarter, more
            personalized workflow.
          </p>
        </div>

        {/* ── Journey steps ── */}
        <div className="relative">

          {/*
            Desktop connector line:
            A gradient line drawn behind the four step number badges.
            - Full width with fade-in/fade-out at edges (transparent → solid → transparent).
            - top: 1rem (16px) centers it on the 32px step number circles.
            - Hidden on mobile and tablet (lg:block).
            - aria-hidden because it's purely decorative.
          */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-0 right-0 h-px pointer-events-none"
            style={{
              top: '1rem',
              background:
                'linear-gradient(to right, transparent, hsl(244 66% 57% / 0.22) 15%, hsl(244 66% 57% / 0.38) 50%, hsl(244 66% 57% / 0.22) 85%, transparent)',
            }}
          />

          {/*
            Steps grid.
            - grid-cols-1: single column on mobile (steps + connectors stack)
            - lg:grid-cols-4: four equal columns on desktop (connectors hidden)
            - gap-0 on mobile: spacing handled by mobile connector divs
            - lg:gap-8 on desktop: 32px gutter between step columns
          */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-8">
            {STEPS.map((step, index) => (
              <Fragment key={step.id}>
                <JourneyStep {...step} index={index} />

                {/* Mobile vertical connector — rendered between steps, hidden on desktop */}
                {index < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="lg:hidden flex flex-col items-center py-3"
                  >
                    {/* Vertical line */}
                    <div
                      className="w-px"
                      style={{
                        height: '1.5rem',
                        background:
                          'linear-gradient(to bottom, hsl(244 66% 57% / 0.3), hsl(244 66% 57% / 0.5))',
                      }}
                    />
                    {/* Dot at the bottom of the connector */}
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1"
                      style={{ background: 'hsl(244 66% 57% / 0.5)' }}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
