import '../styles/About.scss'

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">About WAVE</h2>
          <p className="about__subtitle">
            A Government of India initiative for comprehensive ocean disaster management and community safety.
          </p>
        </div>
        
        <div className="about__content">
          <div>
            <h3 className="about__mission-title">Our Mission</h3>
            <p className="about__description">
              WAVE (Water Alert & Vigilance Engine) is a revolutionary platform designed to protect coastal communities 
              from ocean-related natural disasters through advanced monitoring, real-time alerts, and community-driven reporting.
            </p>
            <p className="about__description">
              We combine cutting-edge technology with grassroots community involvement to create a comprehensive 
              early warning system that saves lives and minimizes disaster impact.
            </p>
            
            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number about__stat-number--blue">500K+</div>
                <p className="about__stat-label">People Protected</p>
              </div>
              <div className="about__stat">
                <div className="about__stat-number about__stat-number--green">1200+</div>
                <p className="about__stat-label">Coastal Areas Covered</p>
              </div>
              <div className="about__stat">
                <div className="about__stat-number about__stat-number--purple">24/7</div>
                <p className="about__stat-label">Monitoring System</p>
              </div>
              <div className="about__stat">
                <div className="about__stat-number about__stat-number--orange">98%</div>
                <p className="about__stat-label">Alert Accuracy</p>
              </div>
            </div>
          </div>
          
          <div className="about__features">
            <h3 className="about__features-title">Key Features</h3>
            <div className="about__features-list">
              <div className="about__feature">
                <div className="about__feature-icon about__feature-icon--blue">🌊</div>
                <span className="about__feature-text">Real-time tsunami detection & alerts</span>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon about__feature-icon--green">📱</div>
                <span className="about__feature-text">Community-driven disaster reporting</span>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon about__feature-icon--red">🆘</div>
                <span className="about__feature-text">Emergency SOS signal system</span>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon about__feature-icon--purple">🎯</div>
                <span className="about__feature-text">Precise location-based warnings</span>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon about__feature-icon--orange">🤝</div>
                <span className="about__feature-text">NGO & government coordination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About