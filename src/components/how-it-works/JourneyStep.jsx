/*
  JourneyStep.jsx — Individual step card in the How It Works journey.

  Handles:
  - Scroll-reveal animation via useIntersection (staggered by index)
  - Hover interactions (card elevation, icon scale, number badge highlight)
  - Consistent layout: number → phase label → card (icon + title + desc + preview)

  Props:
    number  → '01' | '02' | '03' | '04'
    phase   → 'Upload' | 'Understand' | 'Practice' | 'Improve'
    icon    → Lucide icon component
    title   → Feature title string
    description → Short benefit description
    Preview → React component (no props) for the mini UI demo
    index   → Position in array (drives animation stagger delay)
*/
import { useIntersection } from '@/hooks/useIntersection'

function JourneyStep({ number, phase, icon: Icon, title, description, Preview, index }) {
  const [ref, isVisible] = useIntersection({ threshold: 0.15 })

  // Each step reveals 120ms after the previous one
  const delay = index * 120

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center group"
      style={{
        transition: 'opacity 0.45s ease, transform 0.45s ease',
        transitionDelay: `${delay}ms`,
        opacity:   isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {/* ── Step number badge ── */}
      {/* z-10 keeps it above the connector line drawn by the parent */}
      <div
        className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center mb-3 border-2 transition-all duration-200 group-hover:scale-110"
        style={{
          background:   'var(--color-primary-light)',
          borderColor:  'hsl(244 66% 57% / 0.3)',
        }}
        /* On hover the parent group makes these classes active */
      >
        <span
          className="text-[11px] font-bold transition-colors duration-200"
          style={{ color: 'var(--color-primary)' }}
        >
          {number}
        </span>
      </div>

      {/* ── Phase label ── */}
      <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase mb-3">
        {phase}
      </p>

      {/* ── Step card ── */}
      <div
        className="w-full bg-surface border border-border rounded-xl p-4 transition-all duration-200 group-hover:border-primary/20"
        style={{ '--tw-shadow': 'none' }}
      >
        {/* Icon */}
        <div className="icon-box mx-auto mb-3 transition-transform duration-200 group-hover:scale-110">
          <Icon size={18} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-semibold text-text mb-2">{title}</h3>

        {/* Description */}
        <p className="text-body-sm mb-4">{description}</p>

        {/* Mini product visual */}
        <div className="border-t border-border-subtle pt-4">
          <Preview />
        </div>
      </div>
    </div>
  )
}

export default JourneyStep
