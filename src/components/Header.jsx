import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { services } from '../data/services.js'
import { assetUrl } from '../utils/assetUrl.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  function goHome() {
    window.scrollTo(0, 0)
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="site-header">
      <div className="shell flex h-[78px] items-center justify-between">
        <Link className="wordmark" to="/" aria-label="Forge Studio home" onClick={goHome}>
          <img className="brand-logo" src={assetUrl('/assets/forge-logo-qGJ_2-zb.png')} alt="Forge Studio" />
          <span className="wordmark-name">Forge <span>Studio</span></span>
        </Link>
        <nav className={`${menuOpen ? 'nav-open' : ''} site-nav`} aria-label="Main navigation">
          <NavLink to="/" end onClick={goHome}>Home</NavLink>
          <div className="services-nav" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onFocus={() => setServicesOpen(true)} onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false)
          }}>
            <button type="button" className="services-trigger" aria-expanded={servicesOpen} onClick={() => {
              if (window.matchMedia('(max-width: 800px)').matches) setServicesOpen(true)
            }}>
              Services
            </button>
            {servicesOpen && (
              <div className="services-menu">
                {services.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setServicesOpen(false)}>
                    <span>{service.short}</span><span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
          <Link className="nav-contact nav-project-mobile" to="/contact">Start a project <span aria-hidden="true">↗</span></Link>
        </nav>
        <div className="header-actions">
          <Link className="nav-contact" to="/contact">Start a project <span aria-hidden="true">↗</span></Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
