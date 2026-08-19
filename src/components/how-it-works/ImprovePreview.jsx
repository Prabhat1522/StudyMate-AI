/*
  ImprovePreview.jsx — Step 04 visual.
  Shows topic mastery progress bars with a recommended revision suggestion.
*/
const TOPICS = [
  { name: 'DBMS', pct: 86 },
  { name: 'DSA',  pct: 72 },
  { name: 'OS',   pct: 64 },
]

function ImprovePreview() {
  return (
    <div className="text-left space-y-2">
      {/* Progress bars */}
      {TOPICS.map((topic) => (
        <div key={topic.name}>
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-text-muted">{topic.name}</span>
            <span className="text-[10px] font-semibold text-text">{topic.pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${topic.pct}%` }}
              role="progressbar"
              aria-valuenow={topic.pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${topic.name} mastery`}
            />
          </div>
        </div>
      ))}

      {/* Recommendation */}
      <div className="pt-1.5 border-t border-border-subtle">
        <p className="text-[10px] font-medium text-primary">
          → Revise Operating Systems
        </p>
      </div>
    </div>
  )
}

export default ImprovePreview
