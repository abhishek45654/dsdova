import type { CSSProperties } from 'react'
import { HERO_IMAGE, MOBILE_HERO_IMAGE } from '../../config'
import { NotifyForm } from '../NotifyForm/NotifyForm'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import './Hero.css'

export function Hero() {
  return (
    <main id="home" className="hero" style={{ '--hero-image': `url(${HERO_IMAGE})` } as CSSProperties}>
      <picture className="hero-picture">
        <source media="(max-width: 760px)" srcSet={MOBILE_HERO_IMAGE} />
        <img className="hero-image" src={HERO_IMAGE} alt="A city skyline at sunset" />
      </picture>
      <div className="hero-content">
        <h1 className="hero-wordmark">dsdova<span className="wordmark-dot">.</span></h1>
        <p className="signature">wear your vibe.</p>
        <div className="hero-copy">
          <p>Clothing that feels like you.</p>
          <p>Bolder days ahead.</p>
        </div>
        <p className="coming-soon">Coming soon</p>
        <div className="hero-notify"><NotifyForm /></div>
        <SocialLinks />
      </div>
      <a className="scroll-cue" href="#values"><span>Scroll to discover</span><i aria-hidden="true" /></a>
    </main>
  )
}
