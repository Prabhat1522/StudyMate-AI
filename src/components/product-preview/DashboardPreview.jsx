/*
  DashboardPreview.jsx — "Overview" tab content inside the product window.

  Shows:
  - Personalized greeting
  - Today's progress summary with a progress bar
  - "Continue Learning" card with subject, topic, and progress
  - Quick stats row (flashcards studied, quizzes done, weekly improvement)

  All data is static demo content — no real API calls.
*/
function DashboardPreview() {
  return (
    <div
      id="panel-overview"
      role="tabpanel"
      aria-labelledby="tab-overview"
      className="p-5 lg:p-6 flex flex-col gap-4 h-full overflow-auto"
    >
      {/* Greeting */}
      <div>
        <p className="text-sm font-semibold text-text">Good morning 👋</p>
        <p className="text-xs text-text-muted mt-0.5">
          Let's make today's study session count.
        </p>
      </div>

      {/* Today's Progress */}
      <div className="rounded-xl border border-border bg-surface p-4">
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-xs font-semibold text-text">Today's Progress</p>
          <p className="text-xs font-bold text-primary">72%</p>
        </div>
        {/* Progress bar */}
        <div className="h-2 rounded-full bg-surface-alt overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: '72%' }}
            role="progressbar"
            aria-valuenow={72}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Today's study progress"
          />
        </div>
        <p className="text-[10px] text-text-muted mt-1.5">
          3.6 hrs studied · 1.4 hrs remaining
        </p>
      </div>

      {/* Continue Learning card */}
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
          Continue Learning
        </p>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-text">Data Structures</p>
            <p className="text-xs text-text-muted">Binary Trees</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs font-bold text-primary">72%</p>
            <div className="mt-1 w-14 h-1.5 rounded-full bg-surface-alt overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: '72%' }} />
            </div>
          </div>
        </div>
        <button
          className="mt-3 w-full text-xs font-medium text-primary py-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary-light transition-colors flex items-center justify-center gap-1"
          aria-label="Continue learning Data Structures — Binary Trees"
        >
          Continue Learning <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { value: '12', label: 'Flashcards' },
          { value: '4',  label: 'Quizzes' },
          { value: '↑8%', label: 'This week', highlight: true },
        ].map(({ value, label, highlight }) => (
          <div key={label} className="rounded-xl bg-surface-alt border border-border-subtle p-3 text-center">
            <p className={`text-base font-bold leading-none ${highlight ? 'text-accent' : 'text-text'}`}>
              {value}
            </p>
            <p className="text-[10px] text-text-muted mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPreview
