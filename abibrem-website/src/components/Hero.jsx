export default function Hero() {
  const primaryColor = '#00b9d1'

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden brutalist-grid bg-background-dark">
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full glowing-blob" style={{ backgroundColor: `${primaryColor}33` }}></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full glowing-blob" style={{ backgroundColor: `${primaryColor}1a` }}></div>

      <div className="relative z-10 text-center px-6">
        <div 
          className="inline-block px-4 py-1 mb-8 text-[10px] tracking-[0.3em] font-bold uppercase"
          style={{ 
            border: `1px solid ${primaryColor}`,
            color: primaryColor
          }}
        >
          Ghana's Energy Future
        </div>

        <h1 className="font-display text-7xl md:text-9xl font-black leading-none tracking-tighter mb-8 text-white">
          FREE ENERGY<br/>FOR <span className="outline-text">AFRICA</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-10 leading-relaxed">
          Next-generation renewable energy manufacturing solutions. We build the hardware that powers the continental shift to sustainable independence.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            className="px-10 py-5 text-sm font-black tracking-widest uppercase flex items-center gap-3 transition-all"
            style={{ 
              backgroundColor: primaryColor, 
              color: '#050505'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#050505'
              e.target.style.color = primaryColor
              e.target.style.border = `2px solid ${primaryColor}`
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = primaryColor
              e.target.style.color = '#050505'
              e.target.style.border = 'none'
            }}
          >
            EXPLORE SOLUTIONS <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button 
            className="px-10 py-5 text-sm font-black tracking-widest uppercase text-white transition-all"
            style={{ borderColor: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = primaryColor
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
            }}
          >
            WATCH PROCESS
          </button>
        </div>
      </div>
    </section>
  )
}