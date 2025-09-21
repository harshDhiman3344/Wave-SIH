import '../styles/Navigation.scss'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__content">
          {/* Logo */}
          <div className="navigation__logo">
            <div className="navigation__logo-title">WAVE</div>
            <div className="navigation__logo-subtitle">Govt. of India</div>
          </div>
          
          {/* Navigation Menu */}
          <div className="navigation__menu">
            <a href="#home" className="navigation__menu-link">Home</a>
            <a href="#reports" className="navigation__menu-link">Latest Reports</a>
            <a href="#precautions" className="navigation__menu-link">Precautions</a>
            <a href="#about" className="navigation__menu-link">About</a>
            <a href="#services" className="navigation__menu-link">Services</a>
          </div>
          
          {/* Emergency Button */}
          <button className="navigation__sos-button">
            SOS SIGNAL
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation