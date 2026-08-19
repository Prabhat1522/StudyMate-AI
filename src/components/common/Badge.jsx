/*
  Badge.jsx — Small label / tag component

  Props:
    variant   → 'primary' | 'neutral' | 'success'  (default: 'neutral')
    className → extra classes to merge in

  Usage:
    <Badge variant="primary">AI-Powered</Badge>
    <Badge variant="neutral">New</Badge>
    <Badge variant="success">Active</Badge>
*/
function Badge({
  variant = 'neutral',
  className = '',
  children,
}) {
  const classes = ['badge', `badge-${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes}>
      {children}
    </span>
  )
}

export default Badge
