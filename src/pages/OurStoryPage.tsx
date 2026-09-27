import type { CSSProperties } from 'react'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { HERO_IMAGE, MOBILE_HERO_IMAGE } from '../config'
import './pages.css'

export function OurStoryPage() {
  return <main className="editorial-page">
    <PageHeader eyebrow="Our story / 02" title={<>More than clothes.<br /><em>A way to express you.</em></>} intro="DSDOVA is built for the days when you want your clothes to say something before you do." />
    <section className="editorial-section">
      <div><p className="section-kicker">Why DSDOVA</p><h2>Wear the feeling.<br /><em>Keep the edge.</em></h2></div>
      <div><p>We make clothing for people who move through the world in their own rhythm. Pieces that feel considered, but never precious. Familiar, but never forgettable.</p><p>DSDOVA is an independent label rooted in personal expression, everyday confidence, and the freedom to change your mind. Your style is allowed to evolve. That is the point.</p></div>
    </section>
    <section className="editorial-section dark-band"><div className="editorial-image" style={{ '--editorial-image': `url(${HERO_IMAGE})`, '--editorial-mobile-image': `url(${MOBILE_HERO_IMAGE})` } as CSSProperties} aria-label="Warm city editorial scene" /><div><p className="section-kicker">The idea</p><h2>Made for real life. <em>Ready for more.</em></h2><p>From the first coffee to the last train home, our approach starts with comfort and ends with character. We believe the best clothes give you room to become whoever the day asks you to be.</p></div></section>
    <section className="editorial-section"><div><p className="section-kicker">Our approach</p><h2>Less noise.<br /><em>More you.</em></h2></div><div><p>We are taking our time with the first collection: thoughtful fabrics, repeat-wear silhouettes, and details that reveal themselves slowly. No overproduction. No disposable mood.</p></div></section>
  </main>
}
