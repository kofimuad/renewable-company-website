import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const primaryColor = '#00b9d1'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Inquiry submitted successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 px-6 bg-background-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display text-6xl font-black text-white leading-none mb-12 uppercase tracking-tight">
            Let's<br/>Connect<br/><span style={{ color: primaryColor }}>Systems</span>
          </h2>
          <div className="space-y-6">
            <div 
              className="p-8 flex items-center gap-6 group transition-all cursor-pointer"
              style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <div 
                className="w-14 h-14 flex items-center justify-center"
                style={{ backgroundColor: `${primaryColor}1a`, color: primaryColor }}
              >
                <span className="material-symbols-outlined text-3xl font-light">location_on</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Headquarters</p>
                <p className="text-white font-bold">Industrial Area, Accra, Ghana</p>
              </div>
            </div>
            <div 
              className="p-8 flex items-center gap-6 group transition-all cursor-pointer"
              style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <div 
                className="w-14 h-14 flex items-center justify-center"
                style={{ backgroundColor: `${primaryColor}1a`, color: primaryColor }}
              >
                <span className="material-symbols-outlined text-3xl font-light">mail</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Electronic Mail</p>
                <p className="text-white font-bold">ops@abibrem-res.gh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card-bg p-12" style={{ border: `2px solid rgba(255, 255, 255, 0.05)` }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: primaryColor }}>Identify / Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="w-full bg-background-dark text-white p-4 transition-all outline-none"
                style={{ borderBottom: `1px solid rgba(255, 255, 255, 0.2)` }}
                onFocus={(e) => e.target.style.borderBottomColor = primaryColor}
                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'}
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: primaryColor }}>Comm Channel / Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@provider.com"
                className="w-full bg-background-dark text-white p-4 transition-all outline-none"
                style={{ borderBottom: `1px solid rgba(255, 255, 255, 0.2)` }}
                onFocus={(e) => e.target.style.borderBottomColor = primaryColor}
                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'}
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: primaryColor }}>Subject / Requirement</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-background-dark text-white p-4 transition-all outline-none"
                style={{ borderBottom: `1px solid rgba(255, 255, 255, 0.2)`, color: 'rgb(209, 213, 219)' }}
                onFocus={(e) => e.target.style.borderBottomColor = primaryColor}
                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'}
                required
              >
                <option value="">SELECT OPTION</option>
                <option value="solar">SOLAR INFRASTRUCTURE</option>
                <option value="lithium">LITHIUM STORAGE</option>
                <option value="hydrogen">HYDROGEN SYSTEMS</option>
                <option value="other">OTHER INQUIRY</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: primaryColor }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Brief technical requirements..."
                rows="4"
                className="w-full bg-background-dark text-white p-4 transition-all outline-none resize-none"
                style={{ borderBottom: `1px solid rgba(255, 255, 255, 0.2)` }}
                onFocus={(e) => e.target.style.borderBottomColor = primaryColor}
                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-5 font-black text-sm tracking-widest uppercase transition-all"
              style={{ backgroundColor: primaryColor, color: '#050505' }}
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
              TRANSMIT INQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}