import { useState } from 'react'
import { services } from '../data/services.js'
import { studioEmail } from '../data/contact.js'
import { pageSeo } from '../data/pageSeo.js'
import usePageSeo from '../hooks/usePageSeo.js'
import Eyebrow from '../components/Eyebrow.jsx'

export default function ContactPage() {
  const seo = pageSeo.contact
  usePageSeo({
    ...seo,
    schema: { '@context': 'https://schema.org', '@type': 'ContactPage', name: seo.title, description: seo.description, about: { '@type': 'Organization', name: 'Forge Studio' } },
  })
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email and a little about your project.')
      return
    }
    const body = [
      'Hi Forge Studio,',
      '',
      `I'm ${form.name.trim()} (${form.email.trim()}).`,
      form.service ? `I'm interested in: ${form.service}.` : '',
      '',
      form.message.trim(),
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer')
    setError('')
  }

  return (
    <main>
      <section className="contact-hero">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <Eyebrow>Good things start with a hello <span className="eyebrow-dot" /></Eyebrow>
            <h1>What are you<br /><em>making possible?</em></h1>
            <p>Tell us a little about the idea, the challenge or the thing you can&apos;t stop thinking about. We&apos;ll take it from there.</p>
            <div className="contact-aside"><span>01</span><p>Brand, design, digital or a good question—there&apos;s no wrong place to start.</p></div>
            <div className="contact-email">
              <span className="contact-email-label">Prefer email?</span>
              <a href={`mailto:${studioEmail}`}>{studioEmail}</a>
              <p>Share your goals, timeline and any useful references. We&apos;ll get back to you to talk through the next step.</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your name<input autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="How should we address you?" required /></label>
            <label>Email address<input autoComplete="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@yourcompany.com" required /></label>
            <label>What can we help with?
              <select value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}>
                <option value="">Choose a service (optional)</option>
                {services.map((service) => <option key={service.slug} value={service.short}>{service.short}</option>)}
                <option value="Something else">Something else</option>
              </select>
            </label>
            <label>A little about your project<textarea rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What's on your mind?" required /></label>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="button button-dark form-submit" type="submit">Send your enquiry <span>↗</span></button>
            <p className="form-note">This opens WhatsApp with your message ready to send. No details are stored on this website.</p>
          </form>
        </div>
      </section>
    </main>
  )
}
