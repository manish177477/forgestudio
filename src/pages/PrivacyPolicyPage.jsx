import { studioEmail } from '../data/contact.js'
import { pageSeo } from '../data/pageSeo.js'
import usePageSeo from '../hooks/usePageSeo.js'
import Eyebrow from '../components/Eyebrow.jsx'

export default function PrivacyPolicyPage() {
  const seo = pageSeo.privacy
  usePageSeo({
    ...seo,
    schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: seo.title, description: seo.description, about: { '@type': 'Organization', name: 'Forge Studio' } },
  })

  return (
    <main className="legal-page">
      <section className="page-hero">
        <div className="shell">
          <Eyebrow>Your information, handled thoughtfully <span className="eyebrow-dot" /></Eyebrow>
          <h1>Privacy <em>Policy.</em></h1>
          <p className="legal-updated">Last updated: 28 October 2026</p>
        </div>
      </section>
      <section className="legal-section section-pad">
        <div className="shell legal-content">
          <p>This Privacy Policy explains how Forge Studio (“Forge Studio”, “we”, “us” or “our”) handles information when you visit this website or contact us about our services. We aim to collect only what is needed to respond and operate the site.</p>

          <h2>Information you choose to provide</h2>
          <p>Our contact form asks for your name, email address, the service you are interested in (optional) and a description of your project. The form does not submit information to a Forge Studio server or store it in a website database. When you select “Send your enquiry”, your browser opens WhatsApp with a message prepared from the details you entered. You choose whether to send it. WhatsApp then handles any information you send under its own privacy terms.</p>
          <p>You may also contact us directly by email or through our social media pages. In those cases, we receive the information you include in your message and any information the platform makes available to us.</p>

          <h2>How we use information</h2>
          <p>We use information you send to respond to enquiries, understand a project brief, communicate with you and provide services you request. We do not sell your personal information.</p>

          <h2>Website operation and third parties</h2>
          <p>Our hosting provider may process standard technical information, such as IP address, browser details and request logs, to deliver and secure the website. We do not control the provider’s retention practices. Links to WhatsApp, Instagram and LinkedIn take you to services operated by third parties; their own privacy policies apply when you use them.</p>
          <p>This website does not currently use analytics or advertising cookies. If that changes, we will update this policy and provide any notices or choices required by law.</p>

          <h2>Retention and security</h2>
          <p>Because enquiries are sent through WhatsApp or email rather than stored in this website, copies may remain in the messaging or email accounts used to communicate with us. We keep business correspondence only as long as reasonably needed to respond, manage a project, meet legal obligations or resolve a dispute. No online transmission or storage method can be guaranteed completely secure.</p>

          <h2>Your choices and requests</h2>
          <p>You can choose what information to include when contacting us. Depending on applicable law, you may be able to request access to, correction or deletion of personal information we hold, or object to certain uses. To make a request, email <a href={`mailto:${studioEmail}`}>{studioEmail}</a>. We may need to verify your identity before acting on a request.</p>

          <h2>Children’s privacy</h2>
          <p>This website and our services are intended for businesses and adults. We do not knowingly seek personal information from children.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy when our website or practices change. The latest version and its update date will be published on this page.</p>

          <h2>Contact</h2>
          <p>For questions about this policy or how we handle information, contact Forge Studio at <a href={`mailto:${studioEmail}`}>{studioEmail}</a>.</p>
        </div>
      </section>
    </main>
  )
}
