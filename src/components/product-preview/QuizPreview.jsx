/*
  QuizPreview.jsx — "Quiz" tab content inside the product window.

  An interactive multiple-choice question. The user can click an option to
  "select" it. Preorder is marked as the correct answer.

  Real interactivity (useState) to demonstrate the product feels alive.
  Static question data — not a real quiz engine.
*/
import { useState } from 'react'

const QUESTION = {
  course:   'Data Structures',
  current:  3,
  total:    8,
  text:     'Which traversal visits the root node first?',
  options: [
    { id: 'A', label: 'Inorder',     correct: false },
    { id: 'B', label: 'Preorder',    correct: true  },
    { id: 'C', label: 'Postorder',   correct: false },
    { id: 'D', label: 'Level-order', correct: false },
  ],
}

function QuizPreview() {
  const [selected, setSelected] = useState(null)
  const answered = selected !== null
  const isCorrect = selected !== null && QUESTION.options.find((o) => o.id === selected)?.correct

  return (
    <div
      id="panel-quiz"
      role="tabpanel"
      aria-labelledby="tab-quiz"
      className="p-5 lg:p-6 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
        <p className="text-xs font-semibold text-text">Quiz: {QUESTION.course}</p>
        <p className="text-[10px] text-text-muted font-medium">
          {QUESTION.current} of {QUESTION.total}
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-1.5 rounded-full bg-surface-alt overflow-hidden">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${(QUESTION.current / QUESTION.total) * 100}%` }}
          role="progressbar"
          aria-valuenow={QUESTION.current}
          aria-valuemin={0}
          aria-valuemax={QUESTION.total}
          aria-label="Quiz progress"
        />
      </div>

      {/* Question */}
      <p className="text-xs font-semibold text-text mb-4 leading-relaxed">
        {QUESTION.text}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-2 flex-1" role="radiogroup" aria-label="Answer options">
        {QUESTION.options.map((opt) => {
          const isSelected = selected === opt.id
          const showResult = answered

          let stateClass = 'border-border hover:border-primary/30 hover:bg-surface-alt'
          if (isSelected && !showResult) stateClass = 'border-primary bg-primary-light'
          if (showResult && opt.correct) stateClass = 'border-accent bg-accent/8'
          if (showResult && isSelected && !opt.correct) stateClass = 'border-error/40 bg-error/5'

          return (
            <button
              key={opt.id}
              role="radio"
              aria-checked={isSelected}
              onClick={() => !answered && setSelected(opt.id)}
              className={[
                'flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-colors',
                answered ? 'cursor-default' : 'cursor-pointer',
                stateClass,
              ].join(' ')}
            >
              {/* Option circle */}
              <span
                className={[
                  'w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center text-[10px] font-bold',
                  isSelected && !answered  ? 'border-primary bg-primary text-white' : '',
                  !isSelected && !answered  ? 'border-border text-text-muted' : '',
                  answered && opt.correct   ? 'border-accent bg-accent text-white' : '',
                  answered && isSelected && !opt.correct ? 'border-error bg-error/10 text-error' : '',
                  answered && !opt.correct && !isSelected ? 'border-border text-text-muted' : '',
                ].join(' ')}
              >
                {opt.id}
              </span>
              <span className={`text-xs font-medium ${isSelected && !answered ? 'text-primary' : answered && opt.correct ? 'text-accent' : 'text-text'}`}>
                {opt.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Feedback / Next button */}
      <div className="mt-4 pt-3 border-t border-border">
        {answered ? (
          <p className={`text-xs font-medium ${isCorrect ? 'text-accent' : 'text-error'}`}>
            {isCorrect
              ? '✓ Correct! Preorder visits root → left → right.'
              : '✗ Not quite. Preorder visits the root first.'}
          </p>
        ) : (
          <p className="text-[10px] text-text-subtle">Select an answer to continue</p>
        )}
      </div>
    </div>
  )
}

export default QuizPreview
