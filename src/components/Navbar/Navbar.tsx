import { Menu, X } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import './Navbar.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Our story', to: '/our-story' },
  { label: 'Collection', to: '/collection' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <Link className="wordmark wordmark--small" to="/" aria-label="dsdova home" onClick={() => setMenuOpen(false)}>
        dsdova<span className="wordmark-dot">.</span>
      </Link>
      <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <div className="mobile-socials"><SocialLinks /></div>
      </nav>
      <div className="header-socials"><SocialLinks /></div>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  )
}
