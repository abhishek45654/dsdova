import { PageHeader } from '../components/PageHeader/PageHeader'
import { Link } from 'react-router-dom'
import './pages.css'

type LegalType = 'privacy' | 'terms' | 'shipping'

export function LegalPage({ type }: { type: LegalType }) {
  const privacy = type === 'privacy'
  const shipping = type === 'shipping'
  const title = privacy ? <>Privacy<br /><em>policy.</em></> : shipping ? <>Shipping &amp;<br /><em>returns.</em></> : <>Terms &amp;<br /><em>conditions.</em></>
  const eyebrow = privacy ? '06' : shipping ? '08' : '07'
  return <main className="editorial-page"><PageHeader eyebrow={`Information / ${eyebrow}`} title={title} intro="This page contains an initial outline for the DSDOVA launch. Final information will be added before the store opens." /><article className="legal-copy"><h2>Overview</h2><p>{privacy ? 'We respect your privacy. When you join the DSDOVA launch list or contact us, we use the information you provide only to respond to you and share relevant launch updates.' : shipping ? 'DSDOVA has not launched yet, so shipping and returns are not currently active. We will publish full delivery, exchange, and return details before the first drop becomes available.' : 'By using this website, you agree to use it respectfully and for lawful purposes. DSDOVA is currently a pre-launch brand website and does not yet process product orders.'}</p><h2>{shipping ? 'Before launch' : privacy ? 'What we collect' : 'Site content'}</h2><p>{privacy ? 'We may collect your email address when you sign up for updates, along with the message details you choose to send through our contact form. We do not ask for information that is not needed for these purposes.' : shipping ? 'Join the launch list to be notified when the collection, shipping destinations, and returns policy are ready to share.' : 'All site content, including brand names, writing, imagery, and design, belongs to DSDOVA or its respective creators. Please do not reproduce or redistribute it without permission.'}</p><h2>Questions</h2><p>For questions about this page or the DSDOVA website, please use our <Link className="text-link" to="/contact">contact page</Link>.</p></article></main>
}
