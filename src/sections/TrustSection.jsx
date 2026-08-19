/*
  TrustSection.jsx — Credibility through product transparency.

  This section builds trust WITHOUT fabricated social proof.
  It does NOT contain:
    - fake user counts
    - fake testimonials
    - fake ratings
    - fake company logos
    - fabricated statistics

  Instead it builds credibility through:
    - product capability demonstration
    - honest product positioning statements
    - clear "one workspace" visualization
    - transparent product language

  Structure:
    1. Section heading
    2. Capability strip (all 6 StudyMate AI features at a glance)
    3. "One workspace" sub-heading + workspace visualization
    4. Product positioning statement + 3 honest principles
    5. (Subtle) transparency note
*/
import SectionLabel from '@/components/common/SectionLabel'
import CapabilityStrip from '@/components/trust/CapabilityStrip'
import WorkspaceVisualization from '@/components/trust/WorkspaceVisualization'
import ProductPrinciple from '@/components/trust/ProductPrinciple'

const PRINCIPLES = [
  {
    number:      '01',
    title:       'Your material',
    description: 'StudyMate works around the notes and resources you already use — not some generic curriculum.',
  },
  {
    number:      '02',
    title:       'Your pace',
    description: 'Learn, practice, and revise in a flow that fits your schedule, not a fixed program.',
  },
  {
    number:      '03',
    title:       'Your weak spots',
    description: 'Progress tracking highlights exactly which topics need more attention, so you study smarter.',
  },
]

function TrustSection() {
  return (
    <section
      id="workspace"
      aria-label="StudyMate AI product overview"
      className="section"
      style={{ background: 'hsl(220 25% 97%)' }}
    >
      <div className="container">

        {/* ── 1. Section heading ── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel className="mb-4">Why StudyMate AI</SectionLabel>
          <h2 className="text-display text-text mt-2 mb-4">
            Built around the way students actually learn.
          </h2>
          <p className="text-body-lg">
            StudyMate AI brings the tools you need for understanding, practice,
            and revision into one focused workspace.
          </p>
        </div>

        {/* ── 2. Capability strip ── */}
        <CapabilityStrip />

        {/* ── Divider ── */}
        <div className="h-px bg-border-subtle my-12" aria-hidden="true" />

        {/* ── 3. One workspace visualization ── */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-heading text-text mb-3">
              One workspace. Every part of your study session.
            </h3>
            <p className="text-body-lg">
              Everything from your first question to your final revision,
              connected in one place.
            </p>
          </div>

          <WorkspaceVisualization />
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-border-subtle my-12" aria-hidden="true" />

        {/* ── 4. Credibility statement + product principles ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: credibility statement */}
          <div>
            <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-4">
              Product philosophy
            </p>
            <h3 className="text-heading text-text mb-4">
              See the product. Understand the workflow. Decide if it's right for you.
            </h3>
            <p className="text-body-lg">
              StudyMate AI is designed to fit into the study habits you already have —
              not to replace them with a new system to learn.
            </p>
          </div>

          {/* Right: 3 principles */}
          <div className="flex flex-col gap-6" role="list" aria-label="Product principles">
            {PRINCIPLES.map((p) => (
              <div key={p.number} role="listitem">
                <ProductPrinciple {...p} />
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. Transparency note ── */}
        <p className="text-center text-[11px] text-text-subtle mt-14">
          StudyMate AI is a product concept designed as a frontend engineering challenge.
        </p>

      </div>
    </section>
  )
}

export default TrustSection
