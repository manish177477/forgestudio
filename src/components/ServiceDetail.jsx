import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import usePageSeo from '../hooks/usePageSeo.js'
import ContactCallout from './ContactCallout.jsx'
import Eyebrow from './Eyebrow.jsx'
import { assetUrl } from '../utils/assetUrl.js'

const serviceJourneys = {
  'brand-identity': [
    ['Find the story', 'We learn your ambitions, audience and category to uncover what makes your brand distinct.'],
    ['Set the direction', 'We turn those findings into positioning, messaging and a visual point of view.'],
    ['Build the system', 'We develop and refine the identity across the touchpoints your team uses most.'],
    ['Hand it over well', 'You receive clear guidelines and launch-ready assets that make the brand easy to use.'],
  ],
  'creative-design': [
    ['Understand the brief', 'We clarify the audience, message, format and job the design needs to do.'],
    ['Explore ideas', 'We develop creative routes that balance originality with your brand and business goals.'],
    ['Refine the craft', 'We shape the chosen direction through considered typography, layout, imagery and detail.'],
    ['Prepare for use', 'Final artwork is organised for the right channels, formats and production requirements.'],
  ],
  'content-production': [
    ['Shape the story', 'We define the audience, message, creative treatment and content formats before production.'],
    ['Plan the shoot', 'We align people, locations, schedules and shot lists so production has a clear purpose.'],
    ['Create the assets', 'Our team guides production and post-production to keep every piece on-brand.'],
    ['Deliver for channels', 'You receive edited, organised assets sized for the platforms and campaigns ahead.'],
  ],
  'website-development': [
    ['Map the experience', 'We clarify visitor needs, content priorities and the journeys that matter most.'],
    ['Design the system', 'We create responsive page layouts and reusable components around your identity.'],
    ['Build with care', 'We develop accessible, performance-minded pages and check them across screen sizes.'],
    ['Launch and learn', 'We prepare the site for launch and identify practical opportunities for future improvement.'],
  ],
  marketing: [
    ['Set a clear goal', 'We agree who the campaign needs to reach and what change it should create.'],
    ['Develop the message', 'We connect a useful audience insight to a focused idea and campaign direction.'],
    ['Make it channel-ready', 'We adapt the creative into a coordinated set of assets for your chosen channels.'],
    ['Review the response', 'We look at what resonated and capture learnings to make the next campaign stronger.'],
  ],
  'ai-content': [
    ['Find the right use', 'We review your content needs and identify tasks where AI can offer practical help.'],
    ['Set the guardrails', 'We define voice, review steps and boundaries that protect quality and brand trust.'],
    ['Prototype a workflow', 'We test the process on real examples and refine it with your team feedback.'],
    ['Enable your team', 'You receive reusable prompts, templates and guidance to keep the workflow useful.'],
  ],
  'corporate-gifting': [
    ['Understand the moment', 'We learn who the gift is for, what it should communicate and when it needs to arrive.'],
    ['Curate the right pieces', 'We select useful, well-made items that suit the audience, budget and brand.'],
    ['Make it feel personal', 'We bring the collection together with considered branding and packaging details.'],
    ['Coordinate delivery', 'We plan quantities and presentation so the finished gift arrives ready to make an impression.'],
  ],
}

export default function ServiceDetail({ service }) {
  const description = service.description
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.short,
        serviceType: service.short,
        description,
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
  }
  usePageSeo({ title: `${service.short} | Forge Studio`, description, schema })
  const nextService = services[(services.indexOf(service) + 1) % services.length]
  const journey = serviceJourneys[service.slug]

  return (
    <main>
      <section className="service-hero">
        <div className="shell">
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/#services">Services</Link><span>/</span><span>{service.short}</span></div>
          <div className="service-hero-grid">
            <div className="service-hero-copy">
              <Eyebrow>{service.eyebrow} <span className="eyebrow-dot" /></Eyebrow>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <Link className="button button-dark" to="/contact">Talk to us about {service.short.toLowerCase()} <span>↗</span></Link>
            </div>
            <div className="service-hero-image">
              <img src={assetUrl(service.image)} alt={service.imageAlt} fetchPriority="high" />
              <span className="image-caption">{service.short}, considered from every angle.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="service-detail section-pad">
        <div className="shell service-detail-grid">
          <div><Eyebrow>The thinking behind the work</Eyebrow></div>
          <div>
            <h2 className="section-heading">{service.intro}</h2>
            <p className="body-copy">{service.process}</p>
          </div>
        </div>
      </section>
      <section className="deliverables-section">
        <div className="shell deliverables-grid">
          <div>
            <Eyebrow>How we can help</Eyebrow>
            <h2 className="section-heading">Everything you need.<br /><em>Nothing you don&apos;t.</em></h2>
            <p className="body-copy">{service.outcome}</p>
          </div>
          <ul className="deliverables-list">
            {service.deliverables.map((item, index) => (
              <li key={item}><span>0{index + 1}</span>{item}<span aria-hidden="true">↗</span></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="service-journey-section section-pad">
        <div className="shell">
          <div className="section-top">
            <div><Eyebrow>A clear path from brief to delivery</Eyebrow><h2 className="section-heading">How the work<br /><em>takes shape.</em></h2></div>
            <p className="body-copy">The details change with every project, but we keep the collaboration clear: agree on the goal, make thoughtful choices, and keep you involved as the work develops.</p>
          </div>
          <div className="journey-grid">
            {journey.map(([title, description], index) => (
              <article className="journey-card" key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="service-faq-section section-pad">
        <div className="shell faq-grid">
          <div>
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="section-heading">{service.short},<br /><em>explained.</em></h2>
            <p className="body-copy">Answers to questions people often ask when exploring {service.short.toLowerCase()}.</p>
            <Link className="text-link" to="/contact">Ask us about your project <span>↗</span></Link>
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
      <section className="service-next">
        <div className="shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div><Eyebrow>Keep the good ideas going</Eyebrow><h2 className="section-heading">Next up: <em>{nextService.short}</em></h2></div>
          <Link className="button button-dark" to={`/services/${nextService.slug}`}>Explore {nextService.short} <span>↗</span></Link>
        </div>
      </section>
      <ContactCallout />
    </main>
  )
}
