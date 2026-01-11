export default function Footer() {
  const primaryColor = '#00b9d1'

  return (
    <footer className="bg-background-dark pt-20 pb-10 px-6" style={{ borderTop: `4px solid ${primaryColor}` }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
              <span className="material-symbols-outlined text-background-dark font-bold">bolt</span>
            </div>
            <h2 className="font-display font-bold text-2xl tracking-tighter text-white">
              ABIBREM <span style={{ color: primaryColor }}>RES</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed uppercase tracking-tighter">
            Empowering the African continent through localized renewable energy manufacturing. Technical excellence. Sovereign independence.
          </p>
        </div>

        <div>
          <h5 className="text-white font-black text-xs tracking-widest mb-8 uppercase">Systems</h5>
          <ul className="space-y-4 text-xs font-bold text-gray-500">
            <li>
              <a 
                className="uppercase transition-colors" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.target.style.color = primaryColor}
                onMouseLeave={(e) => e.target.style.color = 'rgb(107, 114, 128)'}
                href="#"
              >
                Solar Farm Build
              </a>
            </li>
            <li>
              <a 
                className="uppercase transition-colors" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.target.style.color = primaryColor}
                onMouseLeave={(e) => e.target.style.color = 'rgb(107, 114, 128)'}
                href="#"
              >
                Hydrogen Storage
              </a>
            </li>
            <li>
              <a 
                className="uppercase transition-colors" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.target.style.color = primaryColor}
                onMouseLeave={(e) => e.target.style.color = 'rgb(107, 114, 128)'}
                href="#"
              >
                EV Infrastructure
              </a>
            </li>
            <li>
              <a 
                className="uppercase transition-colors" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.target.style.color = primaryColor}
                onMouseLeave={(e) => e.target.style.color = 'rgb(107, 114, 128)'}
                href="#"
              >
                Grid Software
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black text-xs tracking-widest mb-8 uppercase">Connect</h5>
          <ul className="space-y-4 text-xs font-bold text-gray-500">
            <li>
              <a 
                className="uppercase transition-colors" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.target.style.color = primaryColor}
                onMouseLeave={(e) => e.target.style.color = 'rgb(107, 114, 128)'}
                href="#"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                className="uppercase transition-colors" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.target.style.color = primaryColor}
                onMouseLeave={(e) => e.target.style.color = 'rgb(107, 114, 128)'}
                href="#"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a 
                className="uppercase transition-colors" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.target.style.color = primaryColor}
                onMouseLeave={(e) => e.target.style.color = 'rgb(107, 114, 128)'}
                href="#"
              >
                Technical Blog
              </a>
            </li>
            <li>
              <a 
                className="uppercase transition-colors" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.target.style.color = primaryColor}
                onMouseLeave={(e) => e.target.style.color = 'rgb(107, 114, 128)'}
                href="#"
              >
                Press Center
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <p className="text-[10px] text-gray-600 font-bold tracking-widest uppercase">
          © 2024 ABIBREM RENEWABLE ENERGY SOLUTIONS. ALL SYSTEMS OPERATIONAL.
        </p>
        <div className="flex gap-8 text-[10px] text-gray-600 font-bold tracking-widest uppercase">
          <a 
            className="transition-colors" 
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'rgb(75, 85, 99)'}
            href="#"
          >
            PRIVACY_PROTOCOL
          </a>
          <a 
            className="transition-colors" 
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'rgb(75, 85, 99)'}
            href="#"
          >
            LEGAL_COMPLIANCE
          </a>
        </div>
      </div>
    </footer>
  )
}