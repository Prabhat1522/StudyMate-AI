/*
  ProductPrinciple.jsx — One product positioning statement.

  Three of these are shown in a row to communicate StudyMate AI's
  product philosophy. These are honest positioning statements
  — NOT user testimonials or fabricated social proof.

  Props:
    number      → '01' | '02' | '03'
    title       → Short principle title
    description → One-sentence product statement
*/
function ProductPrinciple({ number, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      {/* Numbered label */}
      <span
        className="text-[11px] font-bold flex-shrink-0 mt-0.5 tabular-nums"
        style={{ color: 'var(--color-primary)' }}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Content */}
      <div>
        <h4 className="text-[14px] font-semibold text-text mb-1">{title}</h4>
        <p className="text-body-sm">{description}</p>
      </div>
    </div>
  )
}

export default ProductPrinciple
