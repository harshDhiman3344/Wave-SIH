import './styles/App.scss'
import { ClerkProvider } from '@clerk/clerk-react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Weather from './components/Weather'
import LatestReports from './components/LatestReports'
import Precautions from './components/Precautions'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="app">
        <Navigation />
        <Hero />
        <Weather />
        <LatestReports />
        <Precautions />
        <About />
        <Services />
        <Footer />
      </div>
    </ClerkProvider>
  )
}

export default App
