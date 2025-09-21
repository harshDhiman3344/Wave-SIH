import '../styles/Hero.scss'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <h1 className="hero__title">WAVE</h1>
        <p className="hero__subtitle">Ocean Natural Disaster Monitoring & Response System</p>
        <p className="hero__description">
          Protecting coastal communities through real-time tsunami alerts, disaster reporting, and emergency response coordination.
        </p>
        <div className="hero__buttons">
          <button className="hero__button hero__button--primary">
            Upload Media Report
          </button>
          <button className="hero__button hero__button--secondary">
            View Latest Reports
          </button>
        </div>
      </div>
      
      <motion.img 
        src="diyWave.png" 
        className="waveBG" 
        alt="Wave background"
        animate={{
          x: [-50, 50, -50]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}

export default Hero