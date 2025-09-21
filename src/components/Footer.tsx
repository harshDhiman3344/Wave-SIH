import '../styles/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div>
            <h3 className="footer__brand-title">WAVE</h3>
            <p className="footer__brand-description">
              Government of India's comprehensive ocean disaster management platform.
            </p>
          </div>
          <div>
            <h4 className="footer__section-title">Quick Links</h4>
            <div className="footer__links">
              <a href="#home" className="footer__link">Home</a>
              <a href="#reports" className="footer__link">Reports</a>
              <a href="#precautions" className="footer__link">Safety</a>
              <a href="#about" className="footer__link">About</a>
            </div>
          </div>
          <div>
            <h4 className="footer__section-title">Emergency</h4>
            <div className="footer__emergency">
              <p className="footer__emergency-item">Emergency: 112</p>
              <p className="footer__emergency-item">Tsunami Alert: 1077</p>
              <p className="footer__emergency-item">Coast Guard: 1554</p>
            </div>
          </div>
          <div>
            <h4 className="footer__section-title">Contact</h4>
            <div className="footer__contact">
              <p className="footer__contact-item">Email: info@wave.gov.in</p>
              <p className="footer__contact-item">Phone: +91-11-2345-6789</p>
              <p className="footer__contact-item">Ministry of Earth Sciences</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2025 WAVE - Government of India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer