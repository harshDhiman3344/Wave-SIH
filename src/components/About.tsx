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
          <div className="about__mission-card">
            <h3 className="about__mission-title">Our Mission</h3>
            <p className="about__description">
              WAVE (Water Alert & Vigilance Engine) is a platform designed to protect coastal communities from ocean-related natural disasters through advanced monitoring, real-time alerts, and community-driven reporting.
            </p>
            <p className="about__description">
              We combine technology with grassroots community involvement to create a comprehensive early warning system that saves lives and minimizes disaster impact.
            </p>
            <div className="about__stats-grid">
              <div className="about__stat-card">
                <div className="about__stat-number about__stat-number--blue">500K+</div>
                <div className="about__stat-label">People Protected</div>
              </div>
              <div className="about__stat-card">
                <div className="about__stat-number about__stat-number--green">1200+</div>
                <div className="about__stat-label">Coastal Areas Covered</div>
              </div>
              <div className="about__stat-card">
                <div className="about__stat-number about__stat-number--purple">24/7</div>
                <div className="about__stat-label">Monitoring System</div>
              </div>
              <div className="about__stat-card">
                <div className="about__stat-number about__stat-number--orange">98%</div>
                <div className="about__stat-label">Alert Accuracy</div>
              </div>
            </div>
          </div>
          <div className="about__features-card">
            <h3 className="about__features-title">Key Features</h3>
            <div className="about__features-grid">
              <div className="about__feature-block">
                <div className="about__feature-icon about__feature-icon--blue">WAVE</div>
                <div className="about__feature-text">Real-time tsunami detection & alerts</div>
              </div>
              <div className="about__feature-block">
                <div className="about__feature-icon about__feature-icon--green">REPORT</div>
                <div className="about__feature-text">Community-driven disaster reporting</div>
              </div>
              <div className="about__feature-block">
                <div className="about__feature-icon about__feature-icon--red">SOS</div>
                <div className="about__feature-text">Emergency SOS signal system</div>
              </div>
              <div className="about__feature-block">
                <div className="about__feature-icon about__feature-icon--purple">TARGET</div>
                <div className="about__feature-text">Precise location-based warnings</div>
              </div>
              <div className="about__feature-block">
                <div className="about__feature-icon about__feature-icon--orange">SUPPORT</div>
                <div className="about__feature-text">NGO & government coordination</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About