import '../styles/Services.scss'

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">Services & Support</h2>
          <p className="services__description">
            Comprehensive disaster relief services and ways to contribute to ocean safety initiatives.
          </p>
        </div>
        
        <div className="services__content">
          <div className="services__offerings">
            <h3 className="services__offerings-title">Our Services</h3>
            <div className="services__offerings-grid">
              <div className="services__offerings-card">
                <div className="services__offerings-card-header">
                  <div className="services__offerings-card-icon services__offerings-card-icon--blue">MONITOR</div>
                  <div className="services__offerings-card-title">24/7 Monitoring</div>
                </div>
                <div className="services__offerings-card-content">Continuous ocean surveillance with AI-powered threat detection.</div>
              </div>
              <div className="services__offerings-card">
                <div className="services__offerings-card-header">
                  <div className="services__offerings-card-icon services__offerings-card-icon--green">CALL</div>
                  <div className="services__offerings-card-title">Emergency Response</div>
                </div>
                <div className="services__offerings-card-content">Immediate coordination with rescue teams and emergency services.</div>
              </div>
              <div className="services__offerings-card">
                <div className="services__offerings-card-header">
                  <div className="services__offerings-card-icon services__offerings-card-icon--purple">TRAIN</div>
                  <div className="services__offerings-card-title">Training Programs</div>
                </div>
                <div className="services__offerings-card-content">Community education and disaster preparedness workshops.</div>
              </div>
            </div>
          </div>
          <div className="services__donations">
            <h3 className="services__donations-title">Support Disaster Relief</h3>
            <div className="services__donations-card">
              <div className="services__donations-card-title">Donate for Victims</div>
              <div className="services__donations-card-description">
                Your contribution helps provide immediate relief to disaster-affected communities and supports the development of better early warning systems.
              </div>
              <div className="services__donations-card-amounts">
                <button className="services__donations-card-amount-btn">₹500</button>
                <button className="services__donations-card-amount-btn">₹1000</button>
                <button className="services__donations-card-amount-btn">₹2000</button>
              </div>
              <input type="number" placeholder="Enter custom amount" className="services__donations-card-input" />
              <button className="services__donations-card-donate-btn">Donate Now</button>
              <div className="services__donations-card-partners">
                <div className="services__donations-card-partners-title">Partner NGOs</div>
                <div className="services__donations-card-partners-list">
                  <span className="services__donations-card-partners-tag">Red Cross</span>
                  <span className="services__donations-card-partners-tag">NDRF</span>
                  <span className="services__donations-card-partners-tag">Oxfam</span>
                  <span className="services__donations-card-partners-tag">Save the Children</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services