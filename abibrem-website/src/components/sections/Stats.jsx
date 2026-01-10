export default function Stats() {
  const stats = [
    { number: '800', label: 'MW CAPACITY', detail: 'Manufacturing' },
    { number: '24', label: 'HOUR OPERATIONS', detail: 'Continuous Production' },
    { number: '1000+', label: 'TECHNICIANS', detail: 'Expert Workforce' }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 border-t-4 border-b-4 border-cyan-400">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="border-2 border-cyan-400 p-8">
            <div className="text-5xl font-black text-cyan-400 mb-2">
              {stat.number}
            </div>
            <div className="text-xs font-black tracking-widest text-white mb-2">
              {stat.label}
            </div>
            <div className="text-gray-400 text-sm">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}