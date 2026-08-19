/*
  TutorPreview.jsx — "AI Tutor" tab content inside the product window.

  Simulates a real AI chat conversation about binary search trees.
  The input field is readOnly — this is a product demo, not a real AI.

  No real API calls. Static demo conversation only.
*/
import { Brain, ArrowUp } from 'lucide-react'

function TutorPreview() {
  return (
    <div
      id="panel-tutor"
      role="tabpanel"
      aria-labelledby="tab-tutor"
      className="p-5 lg:p-6 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <Brain size={13} className="text-white" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold text-text">AI Study Tutor</p>
          <p className="text-[10px] text-accent font-medium">● Active</p>
        </div>
      </div>

      {/* Conversation */}
      <div className="flex-1 flex flex-col gap-3 overflow-hidden">

        {/* Student message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] bg-primary rounded-2xl rounded-tr-sm px-3 py-2">
            <p className="text-xs text-white leading-relaxed">
              Can you explain binary search trees simply?
            </p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-primary-light flex-shrink-0 flex items-center justify-center mt-0.5">
            <Brain size={11} className="text-primary" aria-hidden="true" />
          </div>
          <div className="bg-surface-alt border border-border rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[85%]">
            <p className="text-xs text-text leading-relaxed">
              Think of a BST as an organized tree — smaller values go{' '}
              <span className="font-semibold text-primary">left</span>, larger go{' '}
              <span className="font-semibold text-primary">right</span>. This makes
              searching very fast.
            </p>
            {/* Key takeaway chips */}
            <div className="mt-2 flex gap-1.5 flex-wrap">
              <span className="text-[10px] bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium">
                Left &lt; Root
              </span>
              <span className="text-[10px] bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium">
                Right &gt; Root
              </span>
              <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                O(log n) search
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Input area */}
      <div className="mt-4 flex items-center gap-2 bg-surface-alt border border-border rounded-xl px-3 py-2.5">
        <input
          className="flex-1 bg-transparent text-xs text-text placeholder:text-text-subtle outline-none"
          placeholder="Ask a follow-up..."
          aria-label="Ask a follow-up question to the AI Tutor"
          readOnly
        />
        <button
          className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center flex-shrink-0"
          aria-label="Send message"
        >
          <ArrowUp size={12} className="text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default TutorPreview
