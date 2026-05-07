
// Main App component - Renders the public homepage layout
import Header from '../components/common/Header.jsx'
import HeroSection from '../pages/public/Herosection.jsx'
import Footer from '../components/common/Footer.jsx'
import RestrictedGate from '../components/common/RestrictedGate.jsx'

const App = () => {
  return (
    // Wrap the entire app in the restricted gate component
    // This handles maintenance mode and access restrictions
    <RestrictedGate>
      {/* Main header navigation */}
      <Header />
      
      {/* Hero section with welcome message */}
      <HeroSection />
      
      {/* Footer with contact information */}
      <Footer />
    </RestrictedGate>
  )
}

export default App
