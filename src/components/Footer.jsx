export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <div className="footer-brand-logo">⚕ Forge <span>Assistant</span></div>
            <p className="footer-tagline">
              Connecting patients with the right care — fast, simple, and secure.
              Your health, on your terms.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
              <a href="#" className="social-icon" aria-label="Instagram">IG</a>
              <a href="#" className="social-icon" aria-label="Facebook">f</a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#book">Book Appointment</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="footer-col">
            <h4>Specialties</h4>
            <ul>
              <li><a href="#book">General Physician</a></li>
              <li><a href="#book">Cardiology</a></li>
              <li><a href="#book">Dermatology</a></li>
              <li><a href="#book">Pediatrics</a></li>
              <li><a href="#book">Orthopedics</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Forge Assistant. All rights reserved.</span>
          <span>Forge Assistant is not a substitute for professional medical advice.</span>
        </div>
      </div>
    </footer>
  )
}
