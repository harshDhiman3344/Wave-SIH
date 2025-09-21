import '../styles/Weather.scss'
import { motion } from 'framer-motion'

function Weather() {
  return (
    <section className="weather">
      <div className="weather__container">
        <motion.div 
          className="weather__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="weather__title">Live Weather & Ocean Radar</h2>
          <p className="weather__subtitle">
            Real-time meteorological data and ocean conditions for enhanced disaster preparedness
          </p>
        </motion.div>
        
        <motion.div 
          className="weather__map-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="weather__map-frame">
            <iframe 
              src="https://www.rainviewer.com/map.html?loc=21.0149,76.8373,2.746208700312303&oCS=1&oAP=1&c=3&o=83&lm=1&layer=radar&sm=1&sn=1&ts=1" 
              width="100%" 
              frameBorder="0" 
              style={{border:0, height:'60vh'}} 
              allowFullScreen
              title="Live Weather and Ocean Conditions Map"
            />
          </div>
          
          {/* <div className="weather__features">
            <div className="weather__feature">
              <div className="weather__feature-icon">🌊</div>
              <span>Ocean Currents</span>
            </div>
            <div className="weather__feature">
              <div className="weather__feature-icon">⛈️</div>
              <span>Storm Tracking</span>
            </div>
            <div className="weather__feature">
              <div className="weather__feature-icon">📡</div>
              <span>Radar Data</span>
            </div>
            <div className="weather__feature">
              <div className="weather__feature-icon">🌡️</div>
              <span>Temperature</span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Weather