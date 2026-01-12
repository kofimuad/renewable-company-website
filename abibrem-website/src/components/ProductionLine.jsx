export default function ProductionLine() {
  const steps = [
    { number: '01', title: 'RAW MATERIAL INTAKE', description: 'Automated sorting and purification of silicon and lithium compounds.' },
    { number: '02', title: 'PRECISION ASSEMBLY', description: 'Robotic integration of components with micron-level accuracy.' },
    { number: '03', title: 'QUALITY ASSURANCE', description: 'Stress testing under extreme environmental conditions.' },
    { number: '04', title: 'ENERGY CALIBRATION', description: 'System synchronization and efficiency benchmarking.' },
    { number: '05', title: 'LOGISTICS DISPATCH', description: 'Smart tracking and deployment to regional hubs.' },
  ]

  const primaryColor = '#00b9d1'

  return (
    <section id="production" className="bg-background-dark py-16 md:py-32 px-4 md:px-6 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-20 w-full">
        <div className="w-full md:w-1/3">
          <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-none mb-6">
            24-HOUR<br/>PRODUCTION<br/><span style={{ color: primaryColor }}>LINE</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8">
            Continuous operational excellence ensuring global supply chain demands are met without downtime.
          </p>
          <div className="p-4 md:p-6 border-l-4" style={{ borderColor: primaryColor, backgroundColor: `${primaryColor}15` }}>
            <p className="text-white font-bold text-xs tracking-widest uppercase">System Status</p>
            <p className="font-mono text-sm md:text-xl mt-2" style={{ color: primaryColor }}>OPERATIONAL 100%</p>
          </div>
        </div>

        <div className="w-full md:w-2/3 relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-[2px]" style={{ backgroundColor: `${primaryColor}33` }}></div>
          
          {/* Mobile line - adjusted for mobile */}
          <div className="md:hidden absolute left-3 top-0 bottom-0 w-[2px]" style={{ backgroundColor: `${primaryColor}33` }}></div>

          <div className="space-y-8 md:space-y-16 relative">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative pl-8 md:pl-20 group cursor-pointer transition-all"
                onMouseEnter={(e) => {
                  const numberEl = e.currentTarget.querySelector('[data-step-number]')
                  if (numberEl) {
                    numberEl.style.color = primaryColor
                  }
                }}
                onMouseLeave={(e) => {
                  const numberEl = e.currentTarget.querySelector('[data-step-number]')
                  if (numberEl) {
                    numberEl.style.color = index === 0 ? primaryColor : `${primaryColor}50`
                  }
                }}
              >
                {/* Dot circle - only show on desktop */}
                <div 
                  className="hidden md:block absolute left-4 top-1 w-4 h-4 rounded-full transition-all flex-shrink-0" 
                  style={{ 
                    backgroundColor: primaryColor, 
                    boxShadow: `0 0 0 8px ${primaryColor}20` 
                  }}
                ></div>

                {/* Mobile dot circle - smaller */}
                <div 
                  className="md:hidden absolute left-1 top-1 w-3 h-3 rounded-full transition-all flex-shrink-0" 
                  style={{ 
                    backgroundColor: primaryColor, 
                    boxShadow: `0 0 0 4px ${primaryColor}20` 
                  }}
                ></div>

                {/* Step number - hidden on mobile, show on desktop */}
                <span 
                  data-step-number
                  className="hidden md:block font-display text-5xl font-black absolute -left-12 top-0 transition-colors"
                  style={{ 
                    color: index === 0 ? primaryColor : `${primaryColor}50`
                  }}
                >
                  {step.number}
                </span>

                {/* Mobile step number - shown inline on mobile */}
                <span 
                  className="md:hidden font-display text-lg font-black transition-colors"
                  style={{ 
                    color: index === 0 ? primaryColor : `${primaryColor}50`,
                    marginRight: '8px'
                  }}
                >
                  {step.number}
                </span>

                <div className="pt-0 md:pt-1">
                  <h5 className="text-white font-bold text-sm md:text-xl mb-2 break-words inline md:block">{step.title}</h5>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}