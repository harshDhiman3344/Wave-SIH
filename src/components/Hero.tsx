import '../styles/Hero.scss'

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
    </section>
  )
}

export default Hero