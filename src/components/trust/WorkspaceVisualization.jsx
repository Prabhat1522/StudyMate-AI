/*
  WorkspaceVisualization.jsx — "One workspace" product visual.

  Desktop layout:
    [left capabilities] | [StudyMate AI hub] | [right capabilities]
                          [Study Progress — centered below hub]

  Mobile layout:
    [StudyMate AI hub]
    [all capabilities in 2-column grid]

  The hub is the visual focal point. A very faint radial gradient behind
  the whole container creates a subtle "everything connects to the center"
  impression without drawing explicit connection lines (which are complex
  to implement responsively and often add visual noise).

  No fake user data, no fabricated metrics. All content describes product
  capabilities honestly.
*/
import {
  Brain,
  Bot,
  FileText,
  AlignLeft,
  Layers,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'
import CapabilityCard from './CapabilityCard'

/* Left-column capabilities (desktop) */
const LEFT_CAPS = [
  {
    id:          'notes',
    icon:        FileText,
    name:        'Smart Notes',
    description: 'Turn uploaded PDFs into organized, searchable notes.',
  },
  {
    id:          'flashcards',
    icon:        Layers,
    name:        'Flashcards',
    description: 'Auto-generate flashcards from your key concepts.',
  },
]

/* Right-column capabilities (desktop) */
const RIGHT_CAPS = [
  {
    id:          'tutor',
    icon:        Bot,
    name:        'AI Tutor',
    description: 'Ask anything and get clear, contextual explanations.',
  },
  {
    id:          'summary',
    icon:        AlignLeft,
    name:        'AI Summaries',
    description: 'Condense long material into focused summaries.',
  },
]

/* Bottom capability (desktop) */
const BOTTOM_CAP = {
  id:          'progress',
  icon:        TrendingUp,
  name:        'Study Progress',
  description: 'Track mastery and identify which topics need revision.',
}

/* All capabilities combined for mobile grid */
const ALL_CAPS = [...LEFT_CAPS, ...RIGHT_CAPS, BOTTOM_CAP, {
  id:          'quiz',
  icon:        Brain,
  name:        'AI Quiz',
  description: 'Generate practice quizzes from your own material.',
}]

/* ── Central Hub ─────────────────────────────────────────────── */
function CentralHub() {
  const features = [
    'AI Tutor active',
    'Notes organized',
    'Quizzes ready',
    'Progress tracked',
  ]

  return (
    <div
      className="rounded-2xl border-2 bg-surface overflow-hidden"
      style={{
        borderColor: 'hsl(244 66% 57% / 0.35)',
        boxShadow:   'var(--shadow-lg), 0 0 0 4px hsl(244 66% 57% / 0.07)',
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center gap-2.5 border-b"
        style={{
          background:   'hsl(244 66% 57% / 0.06)',
          borderColor:  'hsl(244 66% 57% / 0.15)',
        }}
      >
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
          <Brain size={14} className="text-white" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[12px] font-bold text-text leading-none">StudyMate AI</p>
          <p className="text-[10px] text-text-muted mt-0.5">Your study workspace</p>
        </div>
      </div>

      {/* Active features list */}
      <div className="p-4 space-y-2.5">
        {features.map((feat) => (
          <div key={feat} className="flex items-center gap-2">
            <CheckCircle2
              size={13}
              className="text-accent flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-[11px] text-text font-medium">{feat}</span>
          </div>
        ))}

        {/* Subtle status indicator */}
        <div
          className="mt-3 pt-3 border-t flex items-center gap-1.5"
          style={{ borderColor: 'hsl(244 66% 57% / 0.12)' }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: 'var(--color-accent)' }}
            aria-hidden="true"
          />
          <p className="text-[10px] text-text-muted">All systems connected</p>
        </div>
      </div>
    </div>
  )
}

/* ── WorkspaceVisualization ──────────────────────────────────── */
function WorkspaceVisualization() {
  return (
    <div
      className="relative rounded-2xl p-6 lg:p-8"
      style={{
        /* Very faint radial glow centred on the hub — purely decorative */
        background:
          'radial-gradient(ellipse 60% 60% at 50% 50%, hsl(244 66% 57% / 0.04) 0%, transparent 70%)',
      }}
    >
      {/* ── Desktop: 3-column layout ── */}
      <div className="hidden lg:flex items-center gap-8">

        {/* Left capabilities */}
        <div className="flex flex-col gap-4 flex-1">
          {LEFT_CAPS.map((cap) => (
            <CapabilityCard key={cap.id} {...cap} />
          ))}
        </div>

        {/* Central hub */}
        <div className="flex-shrink-0 w-52">
          <CentralHub />
        </div>

        {/* Right capabilities */}
        <div className="flex flex-col gap-4 flex-1">
          {RIGHT_CAPS.map((cap) => (
            <CapabilityCard key={cap.id} {...cap} />
          ))}
        </div>
      </div>

      {/* Study progress — centered below hub (desktop only) */}
      <div className="hidden lg:flex justify-center mt-5">
        <CapabilityCard
          {...BOTTOM_CAP}
          className="w-52"
        />
      </div>

      {/* ── Mobile: hub + 2-column capability grid ── */}
      <div className="lg:hidden flex flex-col items-center gap-5">
        <div className="w-full max-w-xs">
          <CentralHub />
        </div>
        <div className="grid grid-cols-2 gap-3 w-full">
          {ALL_CAPS.map((cap) => (
            <CapabilityCard key={cap.id} {...cap} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkspaceVisualization
