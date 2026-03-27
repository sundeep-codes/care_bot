import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo" onClick={close}>
            ⚕ Forge <span>Assistant</span>
          </a>
          <ul className="navbar-links">
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#book">Book Appointment</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
          <div className="navbar-actions">
            <a href="#book" className="btn btn-primary btn-sm">Book Now</a>
          </div>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#how-it-works" onClick={close}>How It Works</a>
        <a href="#book" onClick={close}>Book Appointment</a>
        <a href="#faq" onClick={close}>FAQ</a>
        <a href="#footer" onClick={close}>Contact</a>
        <a href="#book" className="btn btn-primary" onClick={close}>Book Now</a>
      </div>
    </>
  )
}
