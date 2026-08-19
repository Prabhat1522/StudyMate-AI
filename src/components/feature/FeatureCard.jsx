/*
  FeatureCard.jsx — Reusable card for the Core Features section.

  Each card has:
  - An icon (from Lucide React) in the brand icon box
  - A feature name + short description
  - A Visual component (passed as prop) that demonstrates the feature

  The `group` class enables hover effects on child elements.
  The .card-feature class (from design system) handles the card hover animation.

  Props:
    icon    → Lucide icon component
    name    → Feature name string
    description → Short description string
    Visual  → React component (no props) that renders the mini demo
*/
function FeatureCard({ icon: Icon, name, description, Visual }) {
  return (
    <article className="card-feature group flex flex-col">

      {/* Icon box — scales up on hover via group-hover */}
      <div className="icon-box icon-box-lg mb-5 transition-transform duration-200 group-hover:scale-110">
        <Icon size={20} aria-hidden="true" />
      </div>

      {/* Text block */}
      <h3 className="text-[15px] font-semibold text-text mb-2">{name}</h3>
      <p className="text-body-sm mb-5">{description}</p>

      {/* Visual demo — pushed to bottom so all cards align */}
      <div className="mt-auto">
        <div className="h-px bg-border-subtle mb-4" aria-hidden="true" />
        <Visual />
      </div>

    </article>
  )
}

export default FeatureCard
