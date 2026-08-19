/*
  UploadPreview.jsx — Step 01 visual.
  Shows a PDF being uploaded and processed by StudyMate AI.
*/
function UploadPreview() {
  return (
    <div className="rounded-lg border border-border bg-surface-alt p-3 space-y-2.5 text-left">
      {/* File row */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-primary-light border border-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-[9px] font-bold text-primary">PDF</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-text truncate">DBMS_Unit_3.pdf</p>
          <p className="text-[10px] text-text-muted">2.4 MB · 47 pages</p>
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] text-text-muted">Processing...</span>
          <span className="text-[10px] font-semibold text-primary">100%</span>
        </div>
        <div className="h-1.5 rounded-full bg-surface border border-border overflow-hidden">
          <div className="h-full rounded-full bg-primary" style={{ width: '100%' }} />
        </div>
      </div>

      {/* Success */}
      <p className="text-[10px] font-medium text-accent">✓ Ready to study</p>
    </div>
  )
}

export default UploadPreview
