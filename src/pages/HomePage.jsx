import { Link } from 'react-router-dom'
import { pillars } from '../data/services.js'
import { pageSeo } from '../data/pageSeo.js'
import usePageSeo from '../hooks/usePageSeo.js'
import Eyebrow from '../components/Eyebrow.jsx'
import brandedDetailsImage from '../assets/images/forge-branded-details-Bctahl7-.jpg'
import creativeWorkspaceImage from '../assets/images/forge-creative-workspace-B2yH-tU9.jpg'
import studioProcessImage from '../assets/images/forge-studio-process-CtKRjiAE.jpg'

export default function HomePage() {
  const seo = pageSeo.home
  usePageSeo({
    ...seo,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', name: 'Forge Studio', description: seo.description },
        { '@type': 'WebSite', name: 'Forge Studio', description: seo.description },
      ],
    },
  })

  return (
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <Eyebrow>We don&apos;t just design. We build brands. <span className="eyebrow-dot" /></Eyebrow>
            <h1>One Studio.<br /><span>Endless</span><br />Possibilities.</h1>
            <p className="hero-intro">We forge defining brand identities, high-impact content, scalable web experiences and thoughtful campaigns—so your brand stands out, connects and grows.</p>
            <div className="hero-actions">
              <Link className="button button-dark" to="/contact">Let&apos;s build something remarkable <span>↗</span></Link>
              <a className="text-link" href="#services">Explore our services <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-later">
            <img src={creativeWorkspaceImage} alt="A sunlit creative studio with brand concepts, a camera and design work in progress" fetchPriority="high" />
            <div className="hero-stamp"><span>MAKE<br />IT MEAN<br />SOMETHING</span><b>F.</b></div>
            <p className="image-caption">Good ideas deserve good company.</p>
          </div>
        </div>
      </section>

      <div className="expertise-ribbon" aria-label="Forge Studio capabilities">
        <div className="expertise-track">
          {['Brand architecture', 'Motion graphics & video', 'Conversion-first web', 'AI-enabled content', 'Corporate gifting', 'Craftsmanship guaranteed', 'Brand architecture', 'Motion graphics & video', 'Conversion-first web', 'AI-enabled content', 'Corporate gifting', 'Craftsmanship guaranteed'].map((item, index) => (
            <span key={`${item}-${index}`}><i />{item}</span>
          ))}
        </div>
      </div>

      <section className="intro-section section-pad">
        <div className="shell intro-grid">
          <div className="intro-aside">
            <Eyebrow>More than a pretty picture</Eyebrow>
            <figure className="intro-visual reveal reveal-later">
              <img src={brandedDetailsImage} alt="Thoughtfully crafted navy and orange branded packaging" loading="lazy" />
              <figcaption>Every detail tells your story.</figcaption>
            </figure>
          </div>
          <div>
            <h2 className="section-heading">The best work happens when <em>everything</em> works together.</h2>
            <p className="body-copy">We connect the thinking to the making—bringing strategy, identity, content and digital into one clear, considered experience. No hand-offs. No noise. Just the right people around the right idea.</p>
            <p className="body-copy">Whether you need a sharper brand story, a campaign that earns attention or a website that makes the next step obvious, we bring the right mix of creative and practical expertise around the brief.</p>
            <Link className="text-link" to="/about">Meet your creative partner <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="shell">
          <div className="section-top">
            <div><Eyebrow>What we do</Eyebrow><h2 className="section-heading">Every service.<br /><em>One brand obsession.</em></h2></div>
            <p className="body-copy">A connected creative studio for every step of your brand journey—from the first spark to the next stage of growth.</p>
          </div>
            <p className="body-copy services-overview-copy">Each service can stand on its own or connect with the others: start with a clear identity, create consistent content, bring the experience online and keep building momentum through thoughtful marketing.</p>
          <div className="service-grid">
            {pillars.map((pillar) => (
              <Link className="service-card pillar-card service-catalog-card" to={`/services/${pillar.slug}`} key={pillar.slug}>
                <div className="service-card-image"><img src={pillar.image} alt={pillar.imageAlt} loading="lazy" /></div>
                <div className="service-card-content">
                  <span className="service-card-number">{pillar.eyebrow}</span>
                  <div className="service-card-top"><span>{pillar.title}</span><span className="service-arrow">↗</span></div>
                  <p>{pillar.description}</p>
                  <span className="pillar-offerings">{pillar.offerings.join(' · ')}</span>
                  <span className="service-card-link">Explore <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="shell approach-grid">
          <div className="approach-image">
            <img src={studioProcessImage} alt="The Forge Studio team sharing ideas around a table" loading="lazy" />
            <span className="approach-image-note">A little better, together.</span>
          </div>
          <div className="approach-copy">
            <Eyebrow>Good work is a team sport</Eyebrow>
            <h2 className="section-heading">Small enough to care.<br /><em>Connected enough to deliver.</em></h2>
            <p className="body-copy">We work side by side with your team, bringing senior creative thinking and practical momentum from day one. The result is work that feels like you—and moves your business forward.</p>
            <Link className="text-link" to="/about">How we work <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell cta-content">
          <Eyebrow light>Ready when you are</Eyebrow>
          <h2>Let&apos;s forge<br /><em>what&apos;s next.</em></h2>
          <Link className="button button-light" to="/contact">Start a conversation <span>↗</span></Link>
        </div>
        <div className="cta-orbit" aria-hidden="true">F</div>
      </section>
    </main>
  )
}
