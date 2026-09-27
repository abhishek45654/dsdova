import desktopHeroImage from './assets/background.png'
import mobileHeroImage from './assets/mobile_background.png'

export const SOCIAL_LINKS = [
  { label: 'Instagram', handle: '@dsdova.in', href: 'https://instagram.com/dsdova.in', icon: 'instagram' },
  { label: 'YouTube', handle: 'Coming soon', href: '#', icon: 'youtube' },
  { label: 'Pinterest', handle: 'Coming soon', href: '#', icon: 'pinterest' },
] as const

// export const HERO_IMAGE =
//   'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=90'

export const HERO_IMAGE = desktopHeroImage
export const MOBILE_HERO_IMAGE = mobileHeroImage


export const BRAND_VALUES = [
  { title: 'Premium fabrics', detail: 'All day comfort', icon: 'leaf' },
  { title: 'Timeless design', detail: 'Made for real life', icon: 'shirt' },
  { title: 'Express yourself', detail: 'Wear your vibe', icon: 'sparkles' },
  { title: 'A more conscious tomorrow', detail: 'Style with purpose', icon: 'globe' },
] as const

export const FOOTER_INFORMATION = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms & conditions', href: '/terms' },
  { label: 'Shipping & returns', href: '/shipping' },
  { label: 'FAQ', href: '/faq' },
] as const
