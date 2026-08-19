/*
  FeatureVisual.jsx — Mini product demos inside each Feature card.

  Each export is a small, self-contained React component that visually
  demonstrates one StudyMate AI feature. They are purely decorative/informational
  — no interactivity, no fake data, no fabricated metrics.

  Exports:
  TutorVisual     — mini AI chat
  NotesVisual     — document import summary
  SummaryVisual   — page compression (47 pages → 2-min read)
  QuizVisual      — multiple choice question
  FlashcardVisual — study card concept
  ProgressVisual  — subject progress bars
*/
import { FileText, ArrowRight } from 'lucide-react'

/* ── 1. AI Study Tutor ─────────────────────────────────── */
export function TutorVisual() {
  return (
    <div className="space-y-2">
      {/* Student message */}
      <div className="flex justify-end">
        <span className="text-[10px] bg-primary text-white rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[78%] leading-relaxed">
          What is memoization?
        </span>
      </div>
      {/* AI response */}
      <div className="flex items-start gap-1.5">
        <span className="w-4 h-4 rounded-full bg-primary-light flex-shrink-0 flex items-center justify-center mt-0.5">
          <span className="text-[8px] text-primary font-bold">AI</span>
        </span>
        <span className="text-[10px] bg-surface-alt border border-border rounded-xl rounded-tl-sm px-2.5 py-1.5 text-text leading-relaxed">
          Caching results to avoid repeated calculations — like remembering answers.
        </span>
      </div>
    </div>
  )
}

/* ── 2. Smart Notes ────────────────────────────────────── */
export function NotesVisual() {
  return (
    <div className="rounded-lg border border-border bg-surface-alt p-3 space-y-1.5">
      <div className="flex items-center gap-1.5 mb-0.5">
        <FileText size={11} className="text-primary flex-shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-medium text-text truncate">Binary_Trees.pdf</span>
      </div>
      <p className="text-[10px] text-text-muted pl-0.5">• 47 pages imported</p>
      <p className="text-[10px] text-text-muted pl-0.5">• 12 key concepts found</p>
      <p className="text-[10px] text-accent font-medium pl-0.5">✓ Notes organized</p>
    </div>
  )
}

/* ── 3. AI Summaries ───────────────────────────────────── */
export function SummaryVisual() {
  return (
    <div className="flex items-center gap-2">
      {/* Source */}
      <div className="flex-1 rounded-lg border border-border bg-surface-alt p-2.5 text-center">
        <p className="text-base font-bold text-text leading-none">47</p>
        <p className="text-[10px] text-text-muted mt-0.5">pages</p>
      </div>
      {/* Arrow */}
      <ArrowRight size={14} className="text-primary flex-shrink-0" aria-hidden="true" />
      {/* Output */}
      <div className="flex-1 rounded-lg border border-primary/20 bg-primary-light p-2.5 text-center">
        <p className="text-base font-bold text-primary leading-none">2</p>
        <p className="text-[10px] text-primary/70 mt-0.5">min read</p>
      </div>
    </div>
  )
}

/* ── 4. AI Quiz Generator ──────────────────────────────── */
export function QuizVisual() {
  const options = [
    { label: 'A. Inorder',   correct: false },
    { label: 'B. Preorder',  correct: true  },
    { label: 'C. Postorder', correct: false },
  ]

  return (
    <div>
      <p className="text-[10px] font-medium text-text mb-2 leading-relaxed">
        Which traversal visits the root first?
      </p>
      <div className="space-y-1.5">
        {options.map((opt) => (
          <div
            key={opt.label}
            className={[
              'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px]',
              opt.correct
                ? 'bg-accent/10 border border-accent/25 text-accent font-medium'
                : 'bg-surface-alt border border-border text-text-muted',
            ].join(' ')}
          >
            {opt.correct && <span aria-hidden="true">✓</span>}
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── 5. AI Flashcards ──────────────────────────────────── */
export function FlashcardVisual() {
  return (
    <div className="rounded-lg border border-border bg-surface p-3 text-center">
      <p className="text-[9px] font-semibold text-text-subtle uppercase tracking-widest mb-2">
        Flashcard
      </p>
      <p className="text-[11px] font-semibold text-text leading-snug mb-3">
        What is a binary search tree?
      </p>
      <div className="border-t border-border-subtle pt-2.5">
        <span className="text-[10px] font-medium text-primary">
          Tap to reveal answer →
        </span>
      </div>
    </div>
  )
}

/* ── 6. Study Progress ─────────────────────────────────── */
export function ProgressVisual() {
  const subjects = [
    { name: 'Algorithms',       pct: 80 },
    { name: 'Data Structures',  pct: 62 },
    { name: 'Recursion',        pct: 38 },
  ]

  return (
    <div className="space-y-2.5">
      {subjects.map((s) => (
        <div key={s.name}>
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-text-muted">{s.name}</span>
            <span className="text-[10px] font-semibold text-text">{s.pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${s.pct}%` }}
              role="progressbar"
              aria-valuenow={s.pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${s.name} progress`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
