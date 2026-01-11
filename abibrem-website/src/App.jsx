import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import ProductionLine from './components/ProductionLine'
import MarketAnalysis from './components/MarketAnalysis'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="dark">
      <div className="bg-background-light dark:bg-background-dark font-body text-gray-800 dark:text-gray-100">
        <Navigation />
        <main>
          <Hero />
          <Stats />
          <Solutions />
          <ProductionLine />
          <MarketAnalysis />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App