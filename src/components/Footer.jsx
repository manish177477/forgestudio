import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import { studioEmail } from '../data/contact.js'
import { assetUrl } from '../utils/assetUrl.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top footer-columns">
          <div className="footer-brand-block">
            <p className="eyebrow text-orange-400">Have a good one in mind?</p>
            <h2 className="footer-heading">Let&apos;s make<br />something matter.</h2>
            <p className="footer-intro">Forge Studio brings brand thinking, creative craft and digital know-how together to make your next move clearer.</p>
            <Link className="text-link footer-cta" to="/contact">Start a conversation <span>↗</span></Link>
          </div>
          <nav className="footer-links" aria-label="Quick links">
            <p className="eyebrow text-white/50">Quick links</p>
            <Link to="/">Home</Link>
            <Link to="/about">About Forge</Link>
            <Link to="/contact">Contact us</Link>
          </nav>
          <nav className="footer-links" aria-label="What we do">
            <p className="eyebrow text-white/50">What we do</p>
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>{service.short}</Link>
            ))}
          </nav>
          <div className="footer-links footer-contact">
            <p className="eyebrow text-white/50">Contact us</p>
            <a href={`mailto:${studioEmail}`}>{studioEmail}</a>
            <Link to="/contact">Tell us about your project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="footer-social">
          <p className="eyebrow text-white/50">Follow us</p>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/official_forgestudio/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/company/forgestudio.co.in/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="footer-bottom flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link className="wordmark wordmark-footer" to="/" aria-label="Forge Studio home">
            <img className="brand-logo" src={assetUrl('/assets/forge-logo-qGJ_2-zb.png')} alt="" />
            <span className="wordmark-name">Forge <span>Studio</span></span>
          </Link>
          <p>Independent creative partner. Built on good ideas.</p>
          <nav className="footer-legal" aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </nav>
          <p>© {new Date().getFullYear()} Forge Studio</p>
        </div>
      </div>
    </footer>
  )
}
