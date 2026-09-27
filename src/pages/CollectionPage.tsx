import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { NotifyForm } from '../components/NotifyForm/NotifyForm'
import { HERO_IMAGE, MOBILE_HERO_IMAGE } from '../config'
import './pages.css'

const drops = [
  ['01', 'Signature'], ['02', 'After hours'], ['03', 'Everyday'], ['04', 'Unfiltered'],
]

export function CollectionPage() {
  return <main className="editorial-page">
    <PageHeader eyebrow="Collection / 03" title={<>The first drop<br /><em>is coming.</em></>} intro="A collection built for different moods, different moments, and one thing that never changes: you." />
    <section className="collection-grid" aria-label="Preview collection">
      {drops.map(([number, title], index) => <article className="collection-card" style={index === 0 ? { '--collection-image': `url(${HERO_IMAGE})`, '--collection-mobile-image': `url(${MOBILE_HERO_IMAGE})` } as CSSProperties : undefined} key={number}><div className="collection-card-content"><span className="number">{number}</span><h2>{title}</h2><span>Coming soon</span></div></article>)}
    </section>
    <section className="editorial-section dark-band"><div><p className="section-kicker">Before the launch</p><h2>Be there for<br /><em>the beginning.</em></h2></div><div><p>These are first glimpses, not products for sale. The full collection is still taking shape, and we want you there when it arrives.</p><div style={{ marginTop: '28px' }}><NotifyForm /></div><Link className="text-link" to="/contact">For press and collaborations <span aria-hidden="true">↗</span></Link></div></section>
  </main>
}
