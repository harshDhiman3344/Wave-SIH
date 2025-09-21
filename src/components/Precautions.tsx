import '../styles/Precautions.scss'

function Precautions() {
  return (
    <section id="precautions" className="precautions">
      <div className="precautions__container">
        <div className="precautions__header">
          <h2 className="precautions__title">Safety Precautions</h2>
          <p className="precautions__description">
            Essential guidelines and emergency procedures to keep you and your community safe during ocean disasters.
          </p>
        </div>
        
        <div className="precautions__content">
          <div>
            <h3 className="precautions__steps-title">Emergency Response Steps</h3>
            <div className="precautions__steps">
              <div className="precautions__step">
                <div className="precautions__step-number precautions__step-number--red">1</div>
                <div>
                  <h4 className="precautions__step-title">Immediate Evacuation</h4>
                  <p className="precautions__step-description">Move to higher ground immediately when tsunami warning is issued.</p>
                </div>
              </div>
              <div className="precautions__step">
                <div className="precautions__step-number precautions__step-number--orange">2</div>
                <div>
                  <h4 className="precautions__step-title">Emergency Kit Ready</h4>
                  <p className="precautions__step-description">Keep emergency supplies: water, food, first aid, radio, flashlight.</p>
                </div>
              </div>
              <div className="precautions__step">
                <div className="precautions__step-number precautions__step-number--yellow">3</div>
                <div>
                  <h4 className="precautions__step-title">Stay Informed</h4>
                  <p className="precautions__step-description">Monitor official channels and WAVE alerts continuously.</p>
                </div>
              </div>
              <div className="precautions__step">
                <div className="precautions__step-number precautions__step-number--green">4</div>
                <div>
                  <h4 className="precautions__step-title">Community Support</h4>
                  <p className="precautions__step-description">Help neighbors and report to authorities using WAVE platform.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="precautions__video">
            <h3 className="precautions__video-title">Precaution Videos & Manuals</h3>
            <iframe 
              width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/m7EDddq9ftQ" 
              title="How to Prepare in Case of a Tsunami | Disasters" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="precautions__video-iframe">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Precautions