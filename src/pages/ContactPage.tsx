import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { PageHeader } from '../components/PageHeader/PageHeader'
import './pages.css'

export function ContactPage() {
  const [sent, setSent] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (event.currentTarget.checkValidity()) setSent(true) }
  return <main className="editorial-page">
    <PageHeader eyebrow="Contact / 04" title={<>Let&apos;s <em>talk.</em></>} intro="Questions, collaborations, press, or just want to say hello? We&apos;d love to hear from you." />
    <section className="form-section">
      <div><p className="section-kicker">Open channel</p><h2>Make a connection.<br /><em>Start a conversation.</em></h2></div>
      {sent ? <div className="contact-success" role="status">Thanks for reaching out. Your message is with us, and we&apos;ll be in touch soon.</div> : <form className="contact-form" onSubmit={submit}>
        <label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Subject<input name="subject" required /></label><label>Message<textarea name="message" required /></label><button type="submit">Send message <ArrowUpRight size={17} /></button>
      </form>}
    </section>
  </main>
}
