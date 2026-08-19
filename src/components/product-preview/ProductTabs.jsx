/*
  ProductTabs.jsx — Tab selector for the product preview window.

  Renders a pill-shaped tab bar. Active tab gets a white background + shadow.
  Passes selection up to parent (ProductShowcase) via onTabChange.

  Accessibility: role="tablist", role="tab", aria-selected on each button.
*/
const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'tutor',    label: 'AI Tutor' },
  { id: 'notes',    label: 'Notes' },
  { id: 'quiz',     label: 'Quiz' },
]

function ProductTabs({ activeTab, onTabChange }) {
  return (
    <div
      role="tablist"
      aria-label="Product preview sections"
      className="inline-flex items-center gap-1 p-1 bg-surface-alt rounded-xl border border-border"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={[
              'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150',
              isActive
                ? 'bg-surface text-text shadow-sm border border-border'
                : 'text-text-muted hover:text-text',
            ].join(' ')}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default ProductTabs
