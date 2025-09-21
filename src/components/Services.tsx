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
          {/* Services */}
          <div>
            <h3 className="services__section-title">Our Services</h3>
            <div className="services__cards">
              <div className="services__card">
                <div className="services__card-header">
                  <div className="services__card-icon services__card-icon--blue">MONITOR</div>
                  <h4 className="services__card-title">24/7 Monitoring</h4>
                </div>
                <p className="services__card-description">Continuous ocean surveillance with AI-powered threat detection.</p>
              </div>
              
              <div className="services__card">
                <div className="services__card-header">
                  <div className="services__card-icon services__card-icon--green">CALL</div>
                  <h4 className="services__card-title">Emergency Response</h4>
                </div>
                <p className="services__card-description">Immediate coordination with rescue teams and emergency services.</p>
              </div>
              
              <div className="services__card">
                <div className="services__card-header">
                  <div className="services__card-icon services__card-icon--purple">TRAIN</div>
                  <h4 className="services__card-title">Training Programs</h4>
                </div>
                <p className="services__card-description">Community education and disaster preparedness workshops.</p>
              </div>
            </div>
          </div>
          
          {/* Donations */}
          <div>
            <h3 className="services__donation-title">Support Disaster Relief</h3>
            <div className="services__donation-card">
              <h4 className="services__donation-header">Donate for Victims</h4>
              <p className="services__donation-description">
                Your contribution helps provide immediate relief to disaster-affected communities and 
                supports the development of better early warning systems.
              </p>
              
              <div className="services__amount-buttons">
                <button className="services__amount-button">
                  ₹500
                </button>
                <button className="services__amount-button">
                  ₹1000
                </button>
                <button className="services__amount-button">
                  ₹2000
                </button>
              </div>
              
              <input 
                type="number" 
                placeholder="Enter custom amount"
                className="services__custom-amount"
              />
              
              <button className="services__donate-button">
                Donate Now
              </button>
              
              <div className="services__partners">
                <h5 className="services__partners-title">Partner NGOs</h5>
                <div className="services__partners-list">
                  <span className="services__partner-tag">Red Cross</span>
                  <span className="services__partner-tag">NDRF</span>
                  <span className="services__partner-tag">Oxfam</span>
                  <span className="services__partner-tag">Save the Children</span>
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