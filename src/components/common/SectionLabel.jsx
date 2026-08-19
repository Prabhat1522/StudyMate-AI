/*
  SectionLabel.jsx — Small uppercase label above section headings.

  Creates visual context before a section's main heading.
  Styled with the brand color, uppercase tracking, and small size.

  Example output:
    ┌──────────────┐
    │  ✦ FEATURES  │   ← SectionLabel
    │              │
    │  Everything  │   ← section heading
    │  you need …  │
    └──────────────┘

  Props:
    className → extra classes to merge in
    children  → label text (e.g., "Features", "How It Works")

  Usage:
    <SectionLabel>Features</SectionLabel>
    <SectionLabel>How It Works</SectionLabel>
*/
function SectionLabel({ className = '', children }) {
  const classes = ['section-label', className].filter(Boolean).join(' ')

  return (
    <span className={classes}>
      {/* Decorative dot that ties the label to the brand color */}
      <span aria-hidden="true">✦</span>
      {children}
    </span>
  )
}

export default SectionLabel
