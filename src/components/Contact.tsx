import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.us1.make.com/flm8b2u09y8eoffk5ew9m224unj275sw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'McMasters Electric Website',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <Helmet>
        <title>Contact | McMaster Electric LLC</title>
        <meta name="description" content="Get in touch with McMaster Electric LLC for expert residential electrical services in Saratoga Springs and nearby areas. Free estimates available." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mcmasterselectric.com/contact" />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get Your Free Estimate</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your electrical project? Contact us today for a free consultation and estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Quote Form */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg border-[3px] border-gray-400 shadow-inner shadow-gray-700 transform transition-all duration-300 hover:shadow-3xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6 md:mt-16">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-[3px] border-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-[3px] border-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-[3px] border-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Project Description Or Issue</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your electrical project or issue..."
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-[3px] border-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-900 bg-opacity-50 border border-green-600 p-4 rounded-lg text-green-200 text-center">
                  ✓ Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900 bg-opacity-50 border border-red-600 p-4 rounded-lg text-red-200 text-center">
                  ✗ There was an error sending your message. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-semibold py-3 px-6 rounded-lg flex items-center justify-center min-h-[44px]"
                style={{
                  background: isSubmitting ? 'linear-gradient(145deg, #888888, #666666)' : 'linear-gradient(145deg, #c0c0c0, #a0a0a0)',
                  color: isSubmitting ? '#999999' : '#2d2d2d',
                  border: '1px solid #808080',
                  boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)',
                  textShadow: '1px 1px 1px rgba(255,255,255,0.5)',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg border-[3px] border-gray-400 shadow-inner shadow-gray-700 transform transition-all duration-300 hover:shadow-3xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6 pl-4">
              <div>
                <div className="flex items-center mb-1">
                  <Phone className="w-6 h-6 mr-4 text-[#c0c0c0]" />
                  <p className="font-semibold text-white">Phone</p>
                </div>
                <p className="text-gray-300 text-base ml-10">(518) 491-0389</p>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <Mail className="w-6 h-6 mr-4 text-[#c0c0c0]" />
                  <p className="font-semibold text-white">Email</p>
                </div>
                <p className="text-gray-300 text-base ml-10">mcmasterelectricllc@gmail.com</p>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <MapPin className="w-6 h-6 mr-4 text-[#c0c0c0]" />
                  <p className="font-semibold text-white">Service Area</p>
                </div>
                <p className="text-gray-300 text-base ml-10">Saratoga Springs & Surrounding Areas</p>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <Clock className="w-6 h-6 mr-4 text-[#c0c0c0]" />
                  <p className="font-semibold text-white">Hours</p>
                </div>
                <p className="text-gray-300 text-base ml-10">
                  Monday - Saturday: 7:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
