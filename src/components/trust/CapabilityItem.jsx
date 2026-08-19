/*
  CapabilityItem.jsx — One entry in the capability strip.

  Shows a single StudyMate AI capability with icon + label.
  Subtle hover: icon scales, item gets a primary-tint border.

  This is used in the CapabilityStrip grid and is
  purely a product capability overview — not a fake "partner" strip.
*/
function CapabilityItem({ icon: Icon, label }) {
  return (
    <div
      className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border bg-surface hover:border-primary/25 hover:bg-primary-light/40 transition-all duration-150 cursor-default group"
      tabIndex={0}
    >
      {/* Icon */}
      <div className="w-8 h-8 rounded-lg bg-surface-alt flex items-center justify-center group-hover:scale-110 transition-transform duration-150">
        <Icon size={15} className="text-primary" aria-hidden="true" />
      </div>
      {/* Label */}
      <span className="text-[11px] font-medium text-text-muted group-hover:text-text transition-colors text-center leading-tight">
        {label}
      </span>
    </div>
  )
}

export default CapabilityItem
