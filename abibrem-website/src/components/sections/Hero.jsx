import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-70"></div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array(48).fill(0).map((_, i) => (
            <div key={i} className="border border-cyan-400"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-tight animate-fade-in">
          FREE ENERGY
          <br />
          <span className="text-cyan-400">FOR AFRICA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light tracking-wide animate-fade-in">
          Next generation renewable energy solutions and manufacturing for a sustainable future
        </p>

        <Button 
          variant="primary" 
          size="md"
          className="animate-slide-in"
        >
          EXPLORE SOLUTIONS
          <ChevronRight className="ml-2" size={20} />
        </Button>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {Array(5).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}