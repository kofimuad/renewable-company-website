import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const primaryColor = '#00b9d1'

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-dark/80 backdrop-blur-md" style={{ borderBottom: `1px solid rgba(255, 255, 255, 0.05)` }}>
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
            <span className="material-symbols-outlined text-background-dark font-bold">bolt</span>
          </div>
          <h1 className="font-display font-bold text-xl tracking-tighter leading-none text-white">
            ABIBREM <span style={{ color: primaryColor }}>RENEWABLE ENERGY</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollToSection('solutions')} 
            className="text-xs font-bold tracking-widest transition-colors"
            style={{ color: 'rgb(209, 213, 219)' }}
            onMouseEnter={(e) => e.target.style.color = primaryColor}
            onMouseLeave={(e) => e.target.style.color = 'rgb(209, 213, 219)'}
          >
            SOLUTIONS
          </button>
          <button 
            onClick={() => scrollToSection('production')} 
            className="text-xs font-bold tracking-widest transition-colors"
            style={{ color: 'rgb(209, 213, 219)' }}
            onMouseEnter={(e) => e.target.style.color = primaryColor}
            onMouseLeave={(e) => e.target.style.color = 'rgb(209, 213, 219)'}
          >
            TECHNOLOGY
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-xs font-bold tracking-widest transition-colors"
            style={{ color: 'rgb(209, 213, 219)' }}
            onMouseEnter={(e) => e.target.style.color = primaryColor}
            onMouseLeave={(e) => e.target.style.color = 'rgb(209, 213, 219)'}
          >
            ABOUT
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-xs font-bold tracking-widest transition-colors"
            style={{ color: 'rgb(209, 213, 219)' }}
            onMouseEnter={(e) => e.target.style.color = primaryColor}
            onMouseLeave={(e) => e.target.style.color = 'rgb(209, 213, 219)'}
          >
            CONTACT
          </button>
          <button 
            className="px-6 py-2 text-xs font-black tracking-widest uppercase transition-all"
            style={{ backgroundColor: primaryColor, color: '#050505' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#050505'
              e.target.style.color = primaryColor
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = primaryColor
              e.target.style.color = '#050505'
            }}
          >
            EXPLORE SOLUTIONS
          </button>
        </div>

        <button 
          className="md:hidden"
          style={{ color: primaryColor }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background-dark p-6 flex flex-col gap-4" style={{ borderTop: `1px solid rgba(255, 255, 255, 0.05)` }}>
          <button 
            onClick={() => { scrollToSection('solutions'); setIsOpen(false); }} 
            className="text-xs font-bold tracking-widest transition-colors text-left"
            style={{ color: 'rgb(209, 213, 219)' }}
            onMouseEnter={(e) => e.target.style.color = primaryColor}
            onMouseLeave={(e) => e.target.style.color = 'rgb(209, 213, 219)'}
          >
            SOLUTIONS
          </button>
          <button 
            onClick={() => { scrollToSection('production'); setIsOpen(false); }} 
            className="text-xs font-bold tracking-widest transition-colors text-left"
            style={{ color: 'rgb(209, 213, 219)' }}
            onMouseEnter={(e) => e.target.style.color = primaryColor}
            onMouseLeave={(e) => e.target.style.color = 'rgb(209, 213, 219)'}
          >
            TECHNOLOGY
          </button>
          <button 
            onClick={() => { scrollToSection('about'); setIsOpen(false); }} 
            className="text-xs font-bold tracking-widest transition-colors text-left"
            style={{ color: 'rgb(209, 213, 219)' }}
            onMouseEnter={(e) => e.target.style.color = primaryColor}
            onMouseLeave={(e) => e.target.style.color = 'rgb(209, 213, 219)'}
          >
            ABOUT
          </button>
          <button 
            onClick={() => { scrollToSection('contact'); setIsOpen(false); }} 
            className="text-xs font-bold tracking-widest transition-colors text-left"
            style={{ color: 'rgb(209, 213, 219)' }}
            onMouseEnter={(e) => e.target.style.color = primaryColor}
            onMouseLeave={(e) => e.target.style.color = 'rgb(209, 213, 219)'}
          >
            CONTACT
          </button>
        </div>
      )}
    </header>
  )
}