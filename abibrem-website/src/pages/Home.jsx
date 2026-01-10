import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Solutions from '../components/sections/Solutions';
import Stats from '../components/sections/Stats';
import ProductionLine from '../components/sections/ProductionLine';
import MarketAnalysis from '../components/sections/MarketAnalysis';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Solutions />
      <Stats />
      <ProductionLine />
      <MarketAnalysis />
      <About />
      <Contact />
    </Layout>
  );
}