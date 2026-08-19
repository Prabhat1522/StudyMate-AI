/*
  HeroDashboard.jsx — Product preview card shown inside the Hero section.

  This is a STATIC visual mockup of what the StudyMate AI product looks like.
  It is not functional — it exists to make the product feel real and tangible
  to a visitor who has never used it before.

  Important: this uses only realistic interface elements.
  No fabricated user counts, testimonials, or social proof.
*/
import { Brain, ArrowUp } from 'lucide-react'

function HeroDashboard() {
  return (
    <div
      className="w-full max-w-sm rounded-2xl border border-border bg-surface overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)' }}
    >
      {/* ── Window chrome (macOS-style title bar) ── */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-alt border-b border-border">
        <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(4 72% 71%)' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(40 86% 66%)' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(134 46% 58%)' }} />
        <span className="text-xs text-text-subtle ml-2 font-medium select-none">StudyMate AI</span>
      </div>

      {/* ── Dashboard body ── */}
      <div className="p-5">

        {/* Greeting */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-text leading-none">
            Good morning 👋
          </p>
          <p className="text-xs text-text-muted mt-1">
            Ready to continue where you left off?
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 mb-5">

          {/* Progress stat */}
          <div className="rounded-xl border border-border p-3">
            <p className="text-[11px] font-medium text-text-muted mb-1.5">
              Progress
            </p>
            <p className="text-2xl font-bold text-text leading-none mb-2.5">
              82%
            </p>
            {/* Progress bar */}
            <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: '82%' }}
              />
            </div>
          </div>

          {/* Quiz stat */}
          <div className="rounded-xl border border-border p-3">
            <p className="text-[11px] font-medium text-text-muted mb-1.5">
              Quiz Score
            </p>
            <p className="text-2xl font-bold text-text leading-none mb-2.5">
              8
              <span className="text-sm font-normal text-text-muted">/10</span>
            </p>
            <p className="text-[11px] font-medium text-accent">
              ↑ Above average
            </p>
          </div>

        </div>

        {/* AI Study Assistant panel */}
        <div>
          <p className="text-[10px] font-semibold text-text-subtle uppercase tracking-widest mb-3">
            AI Study Assistant
          </p>

          {/* AI reply bubble */}
          <div className="rounded-xl bg-primary-light border border-primary/10 p-3 mb-3">
            <div className="flex items-start gap-2">
              {/* AI avatar */}
              <div className="w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-0.5">
                <Brain size={10} className="text-white" />
              </div>
              <p className="text-xs text-text leading-relaxed">
                Explain recursion in simple terms...
              </p>
            </div>
          </div>

          {/* Input field (decorative) */}
          <div className="rounded-xl border border-border bg-surface-alt px-3 py-2.5 flex items-center gap-2">
            <p className="text-xs text-text-subtle flex-1">
              Ask anything about your material...
            </p>
            <div className="w-6 h-6 rounded-lg bg-primary flex-shrink-0 flex items-center justify-center">
              <ArrowUp size={12} className="text-white" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroDashboard
