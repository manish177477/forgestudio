import { Link } from 'react-router-dom'
import Eyebrow from './Eyebrow.jsx'

export default function ContactCallout() {
  return (
    <section className="contact-callout">
      <div className="shell flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div><Eyebrow>Have a project in mind?</Eyebrow><h2 className="section-heading">We&apos;re all ears.</h2></div>
        <Link className="button button-dark" to="/contact">Let&apos;s talk <span>↗</span></Link>
      </div>
    </section>
  )
}
