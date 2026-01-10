import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SOLUTIONS', href: '#solutions' },
    { label: 'TECHNOLOGY', href: '#technology' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all ${
      scrolled ? 'bg-black border-b-2 border-cyan-400' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest">
          <span className="text-cyan-400">ABIBREM</span>
          <span className="text-xs ml-2">RENEWABLE ENERGY</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-wider">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cyan-400 border-2 border-cyan-400 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t-2 border-cyan-400 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-sm font-bold tracking-wider hover:text-cyan-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}