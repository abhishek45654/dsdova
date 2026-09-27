import './PageHeader.css'
import type { ReactNode } from 'react'

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <header className="page-header">
      <p className="section-kicker">{eyebrow}</p>
      <h1>{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </header>
  )
}
