import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AboutPage from './pages/AboutPage.jsx'
import AiContentPage from './pages/services/AiContentPage.jsx'
import BrandIdentityPage from './pages/services/BrandIdentityPage.jsx'
import CorporateGiftingPage from './pages/services/CorporateGiftingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ContentProductionPage from './pages/services/ContentProductionPage.jsx'
import CreativeDesignPage from './pages/services/CreativeDesignPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MarketingPage from './pages/services/MarketingPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import WebsiteDevelopmentPage from './pages/services/WebsiteDevelopmentPage.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function ScrollReveals() {
  const { pathname } = useLocation()

  useEffect(() => {
    let observer
    const frame = window.requestAnimationFrame(() => {
      const sections = [...document.querySelectorAll('main > section, .site-footer')]
      const targets = new Set(sections)
      document.querySelectorAll('.service-card, .values-grid article, .deliverables-list li').forEach((item) => targets.add(item))
      const directions = ['up', 'left', 'right', 'down']

      ;[...targets].forEach((element, index) => {
        element.dataset.reveal = directions[index % directions.length]
      })

      if (!('IntersectionObserver' in window)) {
        targets.forEach((element) => element.classList.add('is-visible'))
        return
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => target.classList.toggle('is-visible', isIntersecting))
      }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' })
      targets.forEach((element) => observer.observe(element))
    })

    return () => {
      window.cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveals />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/services/brand-identity" element={<BrandIdentityPage />} />
        <Route path="/services/creative-design" element={<CreativeDesignPage />} />
        <Route path="/services/content-production" element={<ContentProductionPage />} />
        <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
        <Route path="/services/marketing" element={<MarketingPage />} />
        <Route path="/services/ai-content" element={<AiContentPage />} />
        <Route path="/services/corporate-gifting" element={<CorporateGiftingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}
