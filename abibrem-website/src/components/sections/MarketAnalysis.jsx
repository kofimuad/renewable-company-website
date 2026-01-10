export default function MarketAnalysis() {
  const swotData = [
    { label: 'STRENGTHS', color: 'bg-yellow-500', items: ['Experienced team', 'Government support', 'Synergistic tech'] },
    { label: 'OPPORTUNITIES', color: 'bg-cyan-400', items: ['Growing demand', 'Tax incentives', 'Market expansion'] },
    { label: 'WEAKNESSES', color: 'bg-gray-600', items: ['New market entry', 'Capital intensive', 'Competition'] },
    { label: 'THREATS', color: 'bg-orange-500', items: ['Import competition', 'Economic shifts', 'New competitors'] }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16 border-b-4 border-cyan-400 pb-6">
          MARKET POSITION
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {swotData.map((swot) => (
            <div key={swot.label} className={`${swot.color} text-black p-8 border-4 border-black`}>
              <h3 className="text-2xl font-black tracking-wider mb-6">
                {swot.label}
              </h3>
              <ul className="space-y-3">
                {swot.items.map((item) => (
                  <li key={item} className="text-sm font-bold flex items-start gap-3">
                    <span className="block w-2 h-2 bg-black mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}