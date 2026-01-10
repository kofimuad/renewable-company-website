import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { submitInquiry } from '../../services/api';
import Button from '../common/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitInquiry(formData);
      setMessage('Thank you for your inquiry! We will contact you soon.');
      setFormData({ name: '', email: '', inquiryType: '', message: '' });
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      setMessage('Error submitting form. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 border-t-4 border-cyan-400">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16 border-b-4 border-cyan-400 pb-6">
          GET IN TOUCH
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border-4 border-gray-700 p-6 hover:border-cyan-400 transition">
              <div className="flex gap-4 items-start">
                <Phone className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-black tracking-wider mb-2">PHONE</h3>
                  {CONTACT_INFO.phone.map((phone) => (
                    <p key={phone} className="text-gray-300 font-mono">
                      {phone}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-4 border-gray-700 p-6 hover:border-cyan-400 transition">
              <div className="flex gap-4 items-start">
                <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-black tracking-wider mb-2">EMAIL</h3>
                  <p className="text-gray-300 font-mono text-sm">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-4 border-gray-700 p-6 hover:border-cyan-400 transition">
              <div className="flex gap-4 items-start">
                <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-black tracking-wider mb-2">ADDRESS</h3>
                  <p className="text-gray-300 text-sm">{CONTACT_INFO.address.box}</p>
                  <p className="text-gray-300 text-sm">{CONTACT_INFO.address.city}</p>
                  <p className="text-gray-300 text-sm">{CONTACT_INFO.address.country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-4 border-cyan-400 p-8 bg-black">
            <h3 className="text-2xl font-black tracking-wider mb-6">INQUIRY FORM</h3>
            {message && (
              <div className={`mb-4 p-4 border-2 ${message.includes('Error') ? 'border-red-500 text-red-400' : 'border-cyan-400 text-cyan-400'}`}>
                {message}
              </div>
            )}
            <div className="space-y-4">
              <input 
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-2 border-cyan-400 bg-transparent p-3 font-mono text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input 
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-2 border-cyan-400 bg-transparent p-3 font-mono text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <select 
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full border-2 border-cyan-400 bg-transparent p-3 font-mono text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">SELECT INQUIRY TYPE</option>
                <option value="solar">Solar Panel Manufacturing</option>
                <option value="hydrogen">Hydrogen Generation</option>
                <option value="ev">Electric Vehicles</option>
                <option value="partnership">Partnership</option>
                <option value="career">Career Inquiry</option>
              </select>
              <textarea 
                name="message"
                placeholder="YOUR MESSAGE"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border-2 border-cyan-400 bg-transparent p-3 font-mono text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              ></textarea>
              <Button 
                variant="primary"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full"
              >
                {loading ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}