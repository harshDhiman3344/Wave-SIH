import './styles/App.scss'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LatestReports from './components/LatestReports'
import Precautions from './components/Precautions'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <LatestReports />
      <Precautions />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default App
