/*
  UnderstandPreview.jsx — Step 02 visual.
  Shows a brief AI Tutor conversation demonstrating concept explanation.
*/
function UnderstandPreview() {
  return (
    <div className="space-y-2 text-left">
      {/* Student message */}
      <div className="flex justify-end">
        <span className="text-[10px] bg-primary text-white rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[88%] leading-relaxed">
          Explain normalization simply.
        </span>
      </div>

      {/* AI response */}
      <div className="flex items-start gap-1.5">
        <span
          className="w-4 h-4 rounded-full bg-primary-light border border-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5"
          aria-hidden="true"
        >
          <span className="text-[7px] text-primary font-bold">AI</span>
        </span>
        <span className="text-[10px] bg-surface-alt border border-border rounded-xl rounded-tl-sm px-2.5 py-1.5 text-text leading-relaxed">
          Think of it as organizing data to reduce repetition and inconsistency.
        </span>
      </div>
    </div>
  )
}

export default UnderstandPreview
