/*
  CapabilityCard.jsx — A capability card in the WorkspaceVisualization.

  Rendered on the left and right of the central hub on desktop.
  Shows an icon, a capability name, and a one-line description.
  On hover: primary-tinted border + subtle background lift.

  Props:
    icon        → Lucide icon component
    name        → Capability name
    description → One-sentence description
    className   → Optional extra Tailwind classes
*/
function CapabilityCard({ icon: Icon, name, description, className = '' }) {
  return (
    <div
      className={[
        'rounded-xl border border-border bg-surface p-3.5',
        'hover:border-primary/25 hover:shadow-md hover:bg-primary-light/20',
        'transition-all duration-200 group',
        className,
      ].join(' ')}
    >
      {/* Header row */}
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-6 h-6 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
          <Icon size={12} className="text-primary" aria-hidden="true" />
        </div>
        <span className="text-[12px] font-semibold text-text">{name}</span>
      </div>

      {/* Description */}
      <p className="text-[10px] text-text-muted leading-relaxed pl-8">
        {description}
      </p>
    </div>
  )
}

export default CapabilityCard
