/*
  Button.jsx — Reusable button component

  Props:
    variant  → 'primary' | 'secondary' | 'ghost'   (default: 'primary')
    size     → 'sm' | 'md' | 'lg'                  (default: 'md')
    as       → HTML element to render               (default: 'button')
               Pass as="a" to render an accessible link button.
    All other native props (onClick, disabled, href, etc.) pass through.

  Usage:
    <Button>Start Learning</Button>
    <Button variant="secondary">Explore Features</Button>
    <Button variant="ghost" size="sm">See How It Works</Button>
    <Button as="a" href="/signup" size="lg">Get Started Free</Button>
*/
function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className = '',
  children,
  ...props
}) {
  const classes = ['btn', `btn-${size}`, `btn-${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}

export default Button
