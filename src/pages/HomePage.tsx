import { BrandValues } from '../components/BrandValues/BrandValues'
import { Hero } from '../components/Hero/Hero'
import { NotifyForm } from '../components/NotifyForm/NotifyForm'
import './HomePage.css'

export function HomePage() {
  return <>
    <Hero />
    <section className="mobile-notify" aria-labelledby="mobile-notify-title">
      <div>
        <p className="section-kicker">Before the first drop</p>
        <h2 id="mobile-notify-title">Be first<br /><em>to know.</em></h2>
      </div>
      <NotifyForm inputId="mobile-notify-email" />
    </section>
    <BrandValues />
  </>
}
