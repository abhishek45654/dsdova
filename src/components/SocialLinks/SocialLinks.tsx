import { AtSign, PinIcon, Play } from 'lucide-react'
import { SOCIAL_LINKS } from '../../config'
import './SocialLinks.css'

const icons = {
  instagram: AtSign,
  youtube: Play,
  pinterest: PinIcon,
}

export function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <nav className="social-links" aria-label="Social media links">
      {SOCIAL_LINKS.map(({ label, href, icon }) => {
        const Icon = icons[icon]
        return (
          <a className="social-link" key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
            <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
            {showLabels && <span><strong>{label}</strong><small>{SOCIAL_LINKS.find((social) => social.label === label)?.handle}</small></span>}
          </a>
        )
      })}
    </nav>
  )
}
