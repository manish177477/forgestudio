import { Link } from 'react-router-dom'
import { pageSeo } from '../data/pageSeo.js'
import usePageSeo from '../hooks/usePageSeo.js'
import ContactCallout from '../components/ContactCallout.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import { assetUrl } from '../utils/assetUrl.js'

export default function AboutPage() {
  const seo = pageSeo.about
  usePageSeo({
    ...seo,
    schema: { '@context': 'https://schema.org', '@type': 'AboutPage', name: seo.title, description: seo.description, about: { '@type': 'Organization', name: 'Forge Studio' } },
  })

  return (
    <main>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div><Eyebrow>Meet Forge Studio <span className="eyebrow-dot" /></Eyebrow><h1>Good people.<br /><em>Good ideas.</em><br />Good work.</h1></div>
          <div className="page-hero-aside"><p>We are an independent creative partner for businesses ready to do things with a little more intention.</p><Link className="button button-dark" to="/contact">Come say hello <span>↗</span></Link></div>
        </div>
      </section>
      <section className="about-image-section">
        <div className="shell about-image-wrap">
          <img src={assetUrl('/assets/forge-studio-process-CtKRjiAE.jpg')} alt="Forge Studio collaborators working together in a bright creative studio" fetchPriority="high" />
          <span className="image-caption">Different perspectives. One shared ambition.</span>
        </div>
      </section>
      <section className="service-detail section-pad">
        <div className="shell service-detail-grid">
          <div><Eyebrow>What we believe</Eyebrow></div>
          <div><h2 className="section-heading">Creativity works best when it&apos;s <em>connected.</em></h2><p className="body-copy">The big picture matters. So do the details. Forge Studio brings strategy, design, production and digital under one roof, giving ambitious teams one thoughtful partner from the first question to the finished thing.</p><p className="body-copy">We keep collaboration close, make the process clear and treat every brief like a chance to make something genuinely useful—not just something that looks good in a deck.</p></div>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="shell">
          <Eyebrow>A few things we stand for</Eyebrow>
          <div className="values-grid">
            <article><span>01</span><h3>Curiosity, always.</h3><p>We ask better questions before reaching for easy answers.</p></article>
            <article><span>02</span><h3>Make it matter.</h3><p>Every idea should serve a real purpose for real people.</p></article>
            <article><span>03</span><h3>Better together.</h3><p>Good partnerships make braver work and better outcomes.</p></article>
          </div>
        </div>
      </section>
      <section className="work-steps-section section-pad">
        <div className="shell">
          <div className="section-top">
            <div><Eyebrow>A simple way to make good work</Eyebrow><h2 className="section-heading">Close collaboration.<br /><em>Clear momentum.</em></h2></div>
            <p className="body-copy">We make the process easy to follow, keep decisions connected to your goals and bring the right specialists in at the right time.</p>
          </div>
          <div className="work-steps-grid">
            <article><span>01 / Listen</span><h3>Understand the challenge</h3><p>We start with your business, audience and ambitions. A shared brief gives everyone a clear idea of what success needs to look like.</p></article>
            <article><span>02 / Shape</span><h3>Find the right direction</h3><p>We bring strategic thinking and creative exploration together, then align on a focused direction before the making begins.</p></article>
            <article><span>03 / Make</span><h3>Build, refine and deliver</h3><p>We work in the open, make useful decisions together and prepare thoughtful work your team can confidently put into action.</p></article>
          </div>
        </div>
      </section>
      <ContactCallout />
    </main>
  )
}
