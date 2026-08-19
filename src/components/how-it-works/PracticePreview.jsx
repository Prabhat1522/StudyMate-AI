/*
  PracticePreview.jsx — Step 03 visual.
  Shows a quiz question with one correct answer highlighted.
*/
const OPTIONS = [
  { id: 'A', label: 'Partial dependency',    correct: false },
  { id: 'B', label: 'Transitive dependency', correct: true  },
  { id: 'C', label: 'Duplicate rows',        correct: false },
]

function PracticePreview() {
  return (
    <div className="text-left">
      {/* Quiz meta */}
      <p className="text-[9px] font-semibold text-text-muted uppercase tracking-wider mb-2">
        Question 3 of 10
      </p>

      {/* Question */}
      <p className="text-[10px] font-semibold text-text mb-2.5 leading-relaxed">
        What does 3NF primarily eliminate?
      </p>

      {/* Options */}
      <div className="space-y-1.5">
        {OPTIONS.map((opt) => (
          <div
            key={opt.id}
            className={[
              'flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px]',
              opt.correct
                ? 'bg-accent/10 border border-accent/25 text-accent font-medium'
                : 'bg-surface-alt border border-border text-text-muted',
            ].join(' ')}
          >
            <span
              className={[
                'w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold border',
                opt.correct
                  ? 'bg-accent border-accent text-white'
                  : 'border-border text-text-muted',
              ].join(' ')}
              aria-hidden="true"
            >
              {opt.id}
            </span>
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PracticePreview
