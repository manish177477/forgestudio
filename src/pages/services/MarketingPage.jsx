import { Link } from 'react-router-dom'
import ContactCallout from '../../components/ContactCallout.jsx'
import Eyebrow from '../../components/Eyebrow.jsx'
import { pageSeo } from '../../data/pageSeo.js'
import { servicesBySlug } from '../../data/services.js'
import usePageSeo from '../../hooks/usePageSeo.js'
import { assetUrl } from '../../utils/assetUrl.js'

const digitalServices = [
  {
    number: '01',
    name: 'Search engine optimization',
    short: 'SEO',
    description: 'Build lasting organic visibility by making your website easier to find, understand and trust.',
    includes: ['Keyword and search-intent research', 'On-page and technical recommendations', 'Content optimization'],
  },
  {
    number: '02',
    name: 'Local SEO',
    short: 'Be found nearby',
    description: 'Help nearby customers discover your business with accurate, useful local search experiences.',
    includes: ['Local search presence review', 'Business profile and listing guidance', 'Location-page recommendations'],
  },
  {
    number: '03',
    name: 'Paid search campaigns',
    short: 'Google Ads / PPC',
    description: 'Reach people actively looking for what you offer with focused, measurable paid search campaigns.',
    includes: ['Campaign and keyword planning', 'Ad copy and landing-page alignment', 'Budget and conversion optimization'],
  },
  {
    number: '04',
    name: 'Paid social advertising',
    short: 'Social ads',
    description: 'Put thoughtful creative in front of relevant audiences and support campaigns across social platforms.',
    includes: ['Audience and campaign planning', 'Platform-ready ad creative', 'Testing and performance reviews'],
  },
  {
    number: '05',
    name: 'Social media marketing',
    short: 'Social media',
    description: 'Create a consistent, recognizable presence with content designed for the platforms your audience uses.',
    includes: ['Channel and content planning', 'Post, story and short-form concepts', 'Community and engagement guidance'],
  },
  {
    number: '06',
    name: 'Content marketing',
    short: 'Useful content',
    description: 'Turn what you know into useful content that answers customer questions and supports discovery.',
    includes: ['Content strategy and topic planning', 'Website, blog and campaign copy', 'Content distribution guidance'],
  },
  {
    number: '07',
    name: 'Email marketing and automation',
    short: 'Email journeys',
    description: 'Nurture interest and keep your audience connected with relevant, well-timed email communication.',
    includes: ['Newsletter and campaign planning', 'Audience segmentation and journeys', 'Automation and performance review'],
  },
  {
    number: '08',
    name: 'Analytics and conversion optimization',
    short: 'Measure & improve',
    description: 'Understand how people interact with your digital experience and find practical ways to improve it.',
    includes: ['Measurement and tracking recommendations', 'Landing-page and journey review', 'Testing ideas and reporting'],
  },
  {
    number: '09',
    name: 'Answer and AI search readiness',
    short: 'AEO / GEO',
    description: 'Make your expertise clearer to people and emerging search experiences with useful, well-structured content.',
    includes: ['Question-led content opportunities', 'Clear brand and service information', 'Structured content recommendations'],
  },
]

const process = [
  ['Discover', 'Understand your business, audience, current digital presence and the outcomes that matter.'],
  ['Set direction', 'Choose the right channels, messages and measures for your goals, budget and timeline.'],
  ['Create & launch', 'Build coordinated campaigns and content with a consistent brand voice across touchpoints.'],
  ['Learn & optimize', 'Review meaningful results, identify what can improve and adjust the next round of activity.'],
]

export default function MarketingPage() {
  const service = servicesBySlug.marketing
  const seo = pageSeo.digitalMarketing
  usePageSeo({
    ...seo,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: service.short,
          serviceType: service.short,
          description: seo.description,
          provider: { '@type': 'Organization', name: 'Forge Studio' },
        },
        {
          '@type': 'FAQPage',
          mainEntity: service.faqs.map(([question, answer]) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ],
    },
  })

  return (
    <main className="digital-marketing-page">
      <section className="digital-hero">
        <div className="shell">
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/#services">Services</Link><span>/</span><span>Digital marketing</span></div>
          <div className="digital-hero-grid">
            <div className="digital-hero-copy">
              <Eyebrow>05 / Digital marketing <span className="eyebrow-dot" /></Eyebrow>
              <h1>Be found.<br />Be <em>remembered.</em><br />Keep growing.</h1>
              <p>Bring search, content, social and paid campaigns together in a digital plan built around your business—not a one-size-fits-all checklist.</p>
              <div className="digital-hero-actions">
                <Link className="button button-dark" to="/contact">Talk about your goals <span>↗</span></Link>
                <a className="text-link" href="#digital-services">Explore our services <span>↓</span></a>
              </div>
              <ul className="digital-proof-points">
                <li>Goal-led planning</li>
                <li>Connected channels</li>
                <li>Clear measurement</li>
              </ul>
            </div>
            <div className="digital-hero-image">
              <img src={assetUrl(service.image)} alt={service.imageAlt} fetchPriority="high" />
              <span>One connected digital presence.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="digital-intro section-pad">
        <div className="shell digital-intro-grid">
          <Eyebrow>One strategy. Connected channels.</Eyebrow>
          <div>
            <h2 className="section-heading">Every channel has a role.<br /><em>Every action has a reason.</em></h2>
            <p className="body-copy">People move between search, social, websites and inboxes before they make a decision. We help your brand show up with a consistent message at the moments that matter—from first discovery to the next step.</p>
          </div>
        </div>
        <div className="shell digital-flow" aria-label="Digital marketing customer journey">
          <div><span>01 / Discover</span><strong>Search &amp; social</strong></div>
          <i aria-hidden="true">→</i>
          <div><span>02 / Explore</span><strong>Content &amp; website</strong></div>
          <i aria-hidden="true">→</i>
          <div><span>03 / Connect</span><strong>Email &amp; campaigns</strong></div>
          <i aria-hidden="true">→</i>
          <div><span>04 / Improve</span><strong>Insights &amp; testing</strong></div>
        </div>
      </section>

      <section className="digital-services section-pad" id="digital-services">
        <div className="shell">
          <div className="digital-section-heading">
            <div>
              <Eyebrow>Our digital marketing services</Eyebrow>
              <h2 className="section-heading">The right mix for<br /><em>your next move.</em></h2>
            </div>
            <p className="body-copy">Choose focused support or connect services into a broader programme. We shape the mix around your audience, priorities and capacity.</p>
          </div>
          <div className="digital-service-grid">
            {digitalServices.map((item) => (
              <article className="digital-service-card" key={item.number}>
                <div className="digital-card-meta"><span>{item.number}</span><span>{item.short}</span></div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <ul>{item.includes.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="digital-process section-pad">
        <div className="shell">
          <div className="digital-section-heading">
            <div><Eyebrow>Our approach</Eyebrow><h2 className="section-heading">Strategy before<br /><em>activity.</em></h2></div>
            <p className="body-copy">We start with what you need to achieve, then build a practical plan that can be reviewed and refined as we learn.</p>
          </div>
          <div className="digital-process-grid">
            {process.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="shell faq-grid">
          <div>
            <Eyebrow>Good questions, clear answers</Eyebrow>
            <h2 className="section-heading">Digital marketing,<br /><em>made clearer.</em></h2>
            <p className="body-copy">Not sure where to start? Let&apos;s make sense of the options together.</p>
            <Link className="text-link" to="/contact">Ask us about your goals <span>↗</span></Link>
          </div>
          <div className="faq-list">
            {service.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCallout />
    </main>
  )
}
