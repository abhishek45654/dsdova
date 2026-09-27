import { Plus } from 'lucide-react'
import { useState } from 'react'
import { PageHeader } from '../components/PageHeader/PageHeader'
import './pages.css'

const questions = [
  ['When is DSDOVA launching?', 'We are preparing the first drop now. Join the list to hear about the launch before anyone else.'],
  ['Where will DSDOVA ship?', 'We will share shipping destinations and delivery details as the collection gets closer to launch.'],
  ['What kind of clothing will DSDOVA offer?', 'Expect considered everyday pieces with a streetwear edge: easy to wear, hard to forget.'],
  ['How can I get launch updates?', 'Sign up through any of the forms across the site. We will only send the updates that matter.'],
  ['Will the first collection be limited?', 'The first drop will be intentionally small. More details will be shared with our early community.'],
  ['How can I contact DSDOVA?', 'Use the contact page for questions, collaborations, press, or simply to say hello.'],
]

export function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)
  return <main className="editorial-page"><PageHeader eyebrow="Information / 05" title={<>Questions,<br /><em>answered.</em></>} intro="A few things people have asked us so far. More answers will arrive with the first drop." /><section className="faq-list">{questions.map(([question, answer], index) => <div className={open === index ? 'faq-item open' : 'faq-item'} key={question}><button className="faq-question" type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{question}</span><Plus size={22} /></button>{open === index && <div className="faq-answer">{answer}</div>}</div>)}</section></main>
}
