import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FOOTER_INFORMATION } from '../../config'
import { NotifyForm } from '../NotifyForm/NotifyForm'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="footer-wordmark" to="/">dsdova<span className="wordmark-dot">.</span></Link>
          <p>wear your vibe.</p>
          <span className="footer-edition">Independent label / 01</span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/">Home</Link><Link to="/our-story">Our story</Link><Link to="/collection">Collection</Link><Link to="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Follow</h2>
          <SocialLinks showLabels />
        </div>
        <div className="footer-column footer-signup">
          <h2>Stay in the loop</h2>
          <p>Get updates about the DSDOVA launch.</p>
          <NotifyForm />
        </div>
      </div>
      <div className="footer-bottom">
        <div>{FOOTER_INFORMATION.map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}</div>
        <span>© 2026 DSDOVA. All rights reserved.</span>
        <Link className="back-top" to="/" aria-label="Back to homepage">Back to top <ArrowUpRight size={14} /></Link>
      </div>
    </footer>
  )
}
