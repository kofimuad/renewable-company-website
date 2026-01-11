export default function MarketAnalysis() {
  const swotData = [
    {
      title: 'STRENGTHS',
      icon: 'trending_up',
      bgColor: '#ffa500',
      textColor: 'text-black',
      textSecondary: 'text-black/80',
      items: ['Locally Sourced Human Capital', 'Vertically Integrated Supply', 'High Barrier to Entry Patenting']
    },
    {
      title: 'OPPORTUNITIES',
      icon: 'lightbulb',
      bgColor: '#00b9d1',
      textColor: 'text-black',
      textSecondary: 'text-black/80',
      items: ['Pan-African Trade Corridors', 'Decarbonization Incentives', 'Industrial Grid Modernization']
    },
    {
      title: 'WEAKNESSES',
      icon: 'warning',
      bgColor: '#2a2a2a',
      textColor: 'text-white',
      textSecondary: 'text-white/60',
      items: ['Initial High CapEx Requirements', 'Early-Stage Infrastructure Scale']
    },
    {
      title: 'THREATS',
      icon: 'security',
      bgColor: '#ff6b35',
      textColor: 'text-white',
      textSecondary: 'text-white/60',
      items: ['Global Raw Material Volatility', 'Legacy Fossil Fuel Lobbying']
    },
  ]

  return (
    <section className="py-32 px-6 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-5xl font-black text-white">STRATEGIC POSITION</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs mt-2 font-bold">Market Analysis & Resilience Matrix</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {swotData.map((swot, idx) => (
            <div 
              key={idx} 
              style={{ backgroundColor: swot.bgColor }}
              className={`p-8 md:p-12 border-2 border-black ${swot.textColor}`}
            >
              <h4 className="font-display text-2xl md:text-4xl font-black mb-6 flex justify-between items-center">
                {swot.title}
                <span className="material-symbols-outlined text-3xl md:text-4xl">{swot.icon}</span>
              </h4>
              <ul className={`${swot.textSecondary} font-bold space-y-3 md:space-y-4 text-xs md:text-sm tracking-tight uppercase`}>
                {swot.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3">
                    <span className="mt-1">/ </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}