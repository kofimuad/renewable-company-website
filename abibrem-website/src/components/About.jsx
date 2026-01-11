export default function About() {
  const primaryColor = '#00b9d1'

  return (
    <section id="about" className="py-32 px-6 bg-card-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-10 bg-background-dark" style={{ borderLeft: `4px solid ${primaryColor}` }}>
            <h3 className="font-display text-3xl font-black text-white mb-6 uppercase italic">Mission</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              To democratize industrial energy production across the continent through sovereign manufacturing capability and radical efficiency.
            </p>
          </div>
          <div className="p-10 bg-background-dark" style={{ borderLeft: `4px solid ${primaryColor}` }}>
            <h3 className="font-display text-3xl font-black text-white mb-6 uppercase italic">Vision</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              A fully powered Africa, led by Ghanaian innovation, providing surplus renewable energy to the global market by 2040.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 bg-background-dark overflow-hidden" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="md:w-1/3 h-[500px] w-full bg-cover bg-center" style={{
            backgroundImage: 'url(./src/assets/frederick_agyemang.png)',
            filter: 'grayscale(1) contrast(1.25)'
          }}></div>
          <div className="md:w-2/3 p-12">
            <span className="font-mono text-xs mb-4 block tracking-[0.4em]" style={{ color: primaryColor }}>EXECUTIVE LEADERSHIP</span>
            <h3 className="font-display text-5xl font-black text-white mb-2 leading-none uppercase">Dr. Frederick Agyemang</h3>
            <p className="font-bold text-sm mb-8" style={{ color: primaryColor }}>CHIEF EXECUTIVE OFFICER & FOUNDER</p>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
              A visionary in energy systems engineering with over 20 years of experience in multinational power infrastructure. Dr. Agyemang founded AbibremRES to bridge the gap between African potential and technical realization.
            </p>
            <div className="flex gap-4">
              <button 
                className="w-12 h-12 flex items-center justify-center transition-all"
                style={{ border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor
                  e.currentTarget.style.color = 'black'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'white'
                }}
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </button>
              <button 
                className="px-8 py-3 font-black text-xs tracking-widest uppercase transition-all"
                style={{ backgroundColor: 'white', color: 'black' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = primaryColor
                  e.target.style.color = 'black'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.color = 'black'
                }}
              >
                FULL BIO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}