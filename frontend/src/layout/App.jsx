
import Header from '../components/common/Header.jsx'
import HeroSection from '../pages/public/Herosection.jsx'
import Footer from '../components/common/Footer.jsx'
import RestrictedGate from '../components/common/RestrictedGate.jsx'

const App = () => {
  return (
    <RestrictedGate>
      <Header />
      <HeroSection />
      <Footer />
    </RestrictedGate>
  )
}
export default App
