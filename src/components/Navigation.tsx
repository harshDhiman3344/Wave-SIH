import { useState } from 'react'
import '../styles/Navigation.scss'
import AuthModal from './auth/AuthModal'

function Navigation() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const handleSignInClick = () => {
    setIsAuthModalOpen(true)
  }

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  return (
    <>
      <nav className="navigation">
        <div className="navigation__container">
          <div className="navigation__content">
            {/* Logo */}
            <div className="navigation__logo">
              <img 
                src="/waveLogo.png" 
                alt="WAVE Logo" 
                className="navigation__logo-image"
              />
              <div className="navigation__logo-text">
                <div className="navigation__logo-title">WAVE</div>
                <div className="navigation__logo-subtitle">Govt. of India</div>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="navigation__menu">
              <a href="#home" className="navigation__menu-link">Home</a>
              <a href="#reports" className="navigation__menu-link">Latest Reports</a>
              <a href="#precautions" className="navigation__menu-link">Precautions</a>
              <a href="#about" className="navigation__menu-link">About</a>
              <a href="#services" className="navigation__menu-link">Services</a>
            </div>
            
            {/* Action Buttons */}
            <div className="navigation__actions">
              <button 
                className="navigation__signin-button"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
              <button className="navigation__sos-button">
                SOS SIGNAL
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={handleCloseAuthModal}
        initialMode="login"
      />
    </>
  )
}

export default Navigation