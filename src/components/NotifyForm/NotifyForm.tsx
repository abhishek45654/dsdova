import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import './NotifyForm.css'

export function NotifyForm({ inputId = 'notify-email' }: { inputId?: string }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (event.currentTarget.checkValidity()) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-message" role="status">
        <span>You&apos;re on the list.</span>
        <strong>Welcome to DSDOVA.</strong>
      </div>
    )
  }

  return (
    <form className="notify-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={inputId}>Email address</label>
      <input id={inputId} name="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Be the first to know" autoComplete="email" />
      <button type="submit">Notify me <ArrowUpRight size={17} aria-hidden="true" /></button>
    </form>
  )
}
