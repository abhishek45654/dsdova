import { Globe2, Leaf, Shirt, Sparkles } from 'lucide-react'
import { BRAND_VALUES } from '../../config'
import './BrandValues.css'

const icons = { leaf: Leaf, shirt: Shirt, sparkles: Sparkles, globe: Globe2 }

export function BrandValues() {
  return (
    <section className="values" id="values" aria-labelledby="values-heading">
      <div className="values-intro">
        <p className="section-kicker">The DSDOVA standard</p>
        <h2 id="values-heading">Made to move<br /><em>with you.</em></h2>
      </div>
      <div className="values-grid">
        {BRAND_VALUES.map(({ title, detail, icon }) => {
          const Icon = icons[icon]
          return (
            <article className="value" key={title}>
              <Icon className="value-icon" size={31} strokeWidth={1.25} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
