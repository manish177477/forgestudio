import { studioEmail } from '../data/contact.js'
import { pageSeo } from '../data/pageSeo.js'
import usePageSeo from '../hooks/usePageSeo.js'
import Eyebrow from '../components/Eyebrow.jsx'

export default function TermsPage() {
  const seo = pageSeo.terms
  usePageSeo({
    ...seo,
    schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: seo.title, description: seo.description, about: { '@type': 'Organization', name: 'Forge Studio' } },
  })

  return (
    <main className="legal-page">
      <section className="page-hero">
        <div className="shell">
          <Eyebrow>Clear expectations make good work <span className="eyebrow-dot" /></Eyebrow>
          <h1>Terms &amp; <em>Conditions.</em></h1>
          <p className="legal-updated">Last updated: 28 October 2026</p>
        </div>
      </section>
      <section className="legal-section section-pad">
        <div className="shell legal-content">
          <p>These Terms &amp; Conditions (“Terms”) apply to your use of the Forge Studio website. They also describe general terms for our creative services. A signed proposal, statement of work or other written agreement for a project may set additional or different terms; if so, that project agreement will take precedence for that project.</p>

          <h2>Using this website</h2>
          <p>You may browse this website for lawful, personal or business purposes. You agree not to misuse it, interfere with its operation, attempt unauthorised access, introduce malicious code, or copy, scrape or exploit its content in a way that violates applicable law or our rights.</p>
          <p>Website copy, design, graphics, logos and other materials are owned by or licensed to Forge Studio unless stated otherwise. You may not reproduce, adapt or commercially use them without prior written permission. Names, marks and work shown as belonging to clients or other third parties remain theirs.</p>

          <h2>Enquiries and project scope</h2>
          <p>Sending an enquiry does not create a client relationship or guarantee that Forge Studio will accept a project. Before work starts, we will agree the scope, deliverables, schedule, fees, payment milestones and any included revision rounds in writing. Work outside that agreed scope may require additional fees and time, which we will discuss with you first.</p>

          <h2>Fees, payment and taxes</h2>
          <p>Fees, currency, due dates, deposits, expenses and applicable taxes will be stated in the project proposal or invoice. You agree to pay invoices by the agreed due dates. If a payment is overdue, we may pause work after giving reasonable notice, and delivery dates may move accordingly. Any late charges or collection costs will apply only where agreed in writing or permitted by law.</p>

          <h2>Your responsibilities</h2>
          <p>You agree to provide accurate project information, timely feedback, approvals and materials needed for the work. You are responsible for ensuring that you have permission to use any text, images, fonts, trademarks or other materials you supply. Delays in feedback, approvals or materials may affect the schedule.</p>

          <h2>Reviews, changes and cancellation</h2>
          <p>We will deliver work for review as described in the project agreement. You should review it and provide consolidated feedback within the agreed review period. Additional revisions or changes to an approved direction may be treated as out-of-scope work. If either party needs to pause or end a project, the process and any fees for work already completed, committed costs or cancellation will follow the project agreement.</p>

          <h2>Ownership and usage rights</h2>
          <p>Unless the project agreement says otherwise, final, specifically commissioned deliverables become available for the usage rights set out in that agreement after all related invoices are paid in full. Until then, drafts and working files remain our property and may not be used or published without written permission. We retain our pre-existing tools, methods, know-how and reusable materials. Third-party assets may be subject to separate licences and terms.</p>
          <p>Unless we agree otherwise in writing, Forge Studio may identify completed work in its portfolio and promotional materials, subject to any confidentiality commitments and reasonable client launch restrictions agreed for the project.</p>

          <h2>Confidentiality</h2>
          <p>Each party will use reasonable care to protect non-public information shared for a project and use it only for that project. This does not apply to information that is public through no fault of the receiving party, already lawfully known, independently developed or required to be disclosed by law.</p>

          <h2>Third-party services and links</h2>
          <p>This website may link to third-party services or websites. We do not control their content, availability, terms or privacy practices, and a link does not mean we endorse them. Your use of those services is subject to their own terms.</p>

          <h2>No guarantee; limitation of liability</h2>
          <p>We work carefully toward the objectives agreed in a project, but business, marketing and audience results depend on factors outside our control and are not guaranteed unless expressly agreed in writing. This website and its content are provided for general information and may change or be unavailable from time to time.</p>
          <p>To the maximum extent permitted by law, Forge Studio will not be liable for indirect, incidental, special or consequential losses arising from use of this website or a project. Our total liability for a claim relating to a particular project will not exceed the fees paid or payable for the services giving rise to that claim. Nothing in these Terms excludes liability that cannot lawfully be excluded or limits any rights that applicable law does not allow us to limit.</p>

          <h2>Suspension and changes</h2>
          <p>We may restrict access to the website if needed to protect its security or operation. We may update these Terms by publishing a revised version on this page. Changes to a project’s agreed scope or commercial terms will be made in writing between the parties.</p>

          <h2>Governing law and contact</h2>
          <p>These Terms are governed by the laws of India, without limiting any mandatory consumer protections that apply to you. Subject to applicable law, courts with jurisdiction in New Delhi, India will hear disputes concerning these Terms. We encourage you to contact us first so we can try to resolve a concern constructively.</p>
          <p>Questions about these Terms? Contact Forge Studio at <a href={`mailto:${studioEmail}`}>{studioEmail}</a>.</p>
        </div>
      </section>
    </main>
  )
}
