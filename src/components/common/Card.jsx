/*
  Card.jsx — Reusable card container

  Props:
    variant   → 'default' | 'elevated' | 'feature'  (default: 'default')
    className → extra classes to merge in
    All native div props pass through.

  Variants:
    default  → flat card with border, no shadow
    elevated → adds a subtle shadow (use for important content)
    feature  → larger padding + hover effect (feature grid cards)

  Usage:
    <Card>Simple card content</Card>
    <Card variant="elevated">Stat or highlight</Card>
    <Card variant="feature">Feature highlight with icon</Card>
*/
function Card({
  variant = 'default',
  className = '',
  children,
  ...props
}) {
  const variantClass = {
    default:  'card',
    elevated: 'card-elevated',
    feature:  'card-feature',
  }[variant] ?? 'card'

  const classes = [variantClass, className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
