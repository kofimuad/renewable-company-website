export default function Solutions() {
  const solutions = [
    {
      id: 1,
      icon: 'solar_power',
      number: '01',
      title: 'Solar Manufacturing',
      description: 'Advanced photovoltaic cell production using locally sourced materials and high-precision automation lines.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7yHSdbVpZVItLwEWTP4wnPhzbfaaud6RKZlXwZKn4axWzzqw_Ji9KQA7d2rnONq_EVb9Qzn8XEMLB-9eolTh9qSXV_oogBXTkSpYbiqE9M3frkfsdu3VxtOWWuslr3ztQwKCARiv_S3XmhlLnrSPp6ZoQDFhmxlNuZztJwEwXGVE97RzYrx_JkVCVlTdmvd9PrZkK4gzt-du46KIzdZmdPaK9s6-i5bgZDwkSXUxgsbvHV8cZUOPDZyTOSLUYh-vqg-uYqALUeBv_'
    },
    {
      id: 2,
      icon: 'water_drop',
      number: '02',
      title: 'Hydrogen Generation',
      description: 'Industrial-scale green hydrogen electrolysis systems designed for heavy industry and long-haul logistics.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTCF2z1apKElNloViKOShigg-fHl1rLf3yg7hodO_bAC6PhLx4yT6O5Mlhn0ug1yDgH7A41GbP3jkv9nzvNBAM6FurDFAtvNgWCv0DpsY33RaKuLy8Tuh5wGHoBUPQ5aEF9jZqUntnjMj0_rcCs9rN1FvUlguFXy69oLn1jHneEP_HVS2XhABnznqpl3G3Od_cNn3yP93KDnd_JCgubV2XhLnaD27wm1Sxq8LOqXmSK1wgwBroY0WRiME31x_AY3TvlC2iNUGw6rxM'
    },
    {
      id: 3,
      icon: 'battery_charging_full',
      number: '03',
      title: 'Lithium Batteries',
      description: 'High-density energy storage units for grid stabilization and residential backup with integrated smart BMS.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoXTPTptzI1JuM-M8aDyFNC1f-FaUfrn1F8subLuQLs8taGs536VLjZI5JX2WSX_GjSvIP9F1D3o8LM-ssDJYHcTX-ouWz7L8QD2R0ZquNWIWR4Jg_ThRcdAHH2adFHX5yd4eK4J5k21EpcvpX_9cgS5kraRM5yeirkHENf3Y-qHC6OcWyXmgJpj3b0CUWc_2eCc0sBxGXI5DEboHANEeohLRAIwPxsFYnqmBuQ4-KkCCjw-a5CdyLcyBh3vZAiuev1hpMEEpd1gSz'
    },
    {
      id: 4,
      icon: 'electric_car',
      number: '04',
      title: 'Electric Vehicles',
      description: 'Sustainable mobility solutions through EV chassis assembly and fleet conversion kits for urban transit.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOgax7D5icaP1YMWBC6h0DwLqLJ8whOMYmPaX4FEllcVOg6c2ZVUMHZyy7m24vHk66G_A_Y683ul2bwvr6MNN5WVZLTkMHTTk7YfhqKpGuQPYvKZHrn3c0ublVBNSVltH5sP8jzfMg2timYZ0sovECLrTZxJwjTCurz_EPedRol7GT2eIFJ3rAAHtM9OxeqOen7nHNP-PXon0eSwzp7yWvy1uo8pO9oameHgtJWk_HVwoaAYVuhKXjwnZtwIrEDsUNEm_dpXCYzf0R'
    }
  ]

  const primaryColor = '#00b9d1'

  return (
    <section id="solutions" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-20">
        <div>
          <h2 className="font-display text-5xl font-black text-white mb-4">OUR SOLUTIONS</h2>
          <div className="w-24 h-2" style={{ backgroundColor: primaryColor }}></div>
        </div>
        <p className="max-w-md text-gray-400 text-sm hidden md:block">
          Integrated manufacturing systems providing end-to-end infrastructure for the green economy. High performance, zero compromise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution) => (
          <div 
            key={solution.id} 
            className="group relative bg-card-bg p-10 border transition-all duration-300 dark:bg-card-bg cursor-pointer"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = primaryColor
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-5xl" style={{ color: primaryColor }}>{solution.icon}</span>
              <span 
                className="font-display text-6xl font-black transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.2)' }}
                onMouseEnter={(e) => e.target.style.color = `${primaryColor}4d`}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.2)'}
              >
                {solution.number}
              </span>
            </div>
            <h4 className="font-display text-2xl font-bold text-white mb-4 uppercase tracking-tight">{solution.title}</h4>
            <p className="text-gray-400 mb-8 leading-relaxed">{solution.description}</p>
            <div className="h-[200px] bg-neutral-900 overflow-hidden relative">
              <img 
                src={solution.image} 
                alt={solution.title} 
                className="w-full h-full object-cover transition-all duration-500"
                style={{ filter: 'grayscale(1)' }}
                onMouseEnter={(e) => e.target.style.filter = 'grayscale(0)'}
                onMouseLeave={(e) => e.target.style.filter = 'grayscale(1)'}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}