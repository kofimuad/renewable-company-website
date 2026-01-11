export default function Stats() {
  const primaryColor = '#00b9d1'

  return (
    <section className="w-full bg-card-bg dark:bg-card-bg" style={{ borderTop: `4px solid ${primaryColor}`, borderBottom: `4px solid ${primaryColor}` }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ divideColor: `${primaryColor}4d` }}>
        <div className="p-12 text-center md:text-left">
          <p className="text-xs font-black tracking-widest mb-4 uppercase" style={{ color: primaryColor }}>Capacity</p>
          <h3 className="font-display text-6xl font-black text-white">800 MW</h3>
        </div>
        <div className="p-12 text-center md:text-left">
          <p className="text-xs font-black tracking-widest mb-4 uppercase" style={{ color: primaryColor }}>Operations</p>
          <h3 className="font-display text-6xl font-black text-white">24 HOUR</h3>
        </div>
        <div className="p-12 text-center md:text-left">
          <p className="text-xs font-black tracking-widest mb-4 uppercase" style={{ color: primaryColor }}>Technicians</p>
          <h3 className="font-display text-6xl font-black text-white">1000+</h3>
        </div>
      </div>
    </section>
  )
}