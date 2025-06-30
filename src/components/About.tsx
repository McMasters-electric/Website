import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-black">
      <Helmet>
        <title>About McMaster Electric LLC - Trusted Local Electrician</title>
        <meta
          name="description"
          content="Learn about McMaster Electric LLC, a licensed electrician serving Saratoga Springs with professional electrical services, solar installation, and EV charger expertise."
        />
        <meta name="keywords" content="electrician Saratoga Springs, licensed electrician, solar professional, EV charger installation" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Company Description Card */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg border-[3px] border-gray-400 shadow-inner shadow-gray-700 mx-4 md:mx-6 lg:mx-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              About McMaster Electric
            </h2>
            <div className="text-base text-gray-300 leading-relaxed space-y-4">
              <p>
                Founded in 2018 by owner-operator Zach McMaster, McMaster Electric LLC 
                has been serving the Saratoga Springs community with quality electrical 
                work for a fair price. As a locally owned and operated business, we 
                understand that no job is too big or too small.
              </p>
              <p>
                With over 10 years of experience in the electrical field, Zach brings 
                expertise in residential and light commercial electrical work. Our services 
                include home electrical installations and repairs, remodel/rewire projects, 
                service upgrades, underground electrical, new construction, EV chargers, 
                and solar maintenance and repair.
              </p>
              <p>
                We specialize in providing reliable, code-compliant electrical solutions 
                with transparent pricing and professional craftsmanship. Our commitment 
                to safety and quality has earned us the trust of neighbors throughout 
                the Saratoga Springs area.
              </p>
            </div>
          </div>
          
          {/* Professional Credentials Card */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg border-[3px] border-gray-400 shadow-inner shadow-gray-700 mx-4 md:mx-6 lg:mx-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Professional Credentials
            </h2>
            <div className="text-center space-y-4">
              <ul className="space-y-4 md:space-y-8 text-lg md:text-xl text-gray-300 inline-block text-left">
                <li className="flex items-center">
                  <span 
                    className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full mr-3 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #ffffff, #e0e0e0, #b8b8b8, #9a9a9a)',
                      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
                      border: '1px solid #888888'
                    }}
                  ></span>
                  <span className="leading-relaxed md:leading-loose">NYS Licensed Master Electrician</span>
                </li>
                <li className="flex items-center">
                  <span 
                    className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full mr-3 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #ffffff, #e0e0e0, #b8b8b8, #9a9a9a)',
                      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
                      border: '1px solid #888888'
                    }}
                  ></span>
                  <span className="leading-relaxed md:leading-loose">NABCEP Certified Solar Professional</span>
                </li>
                <li className="flex items-center">
                  <span 
                    className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full mr-3 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #ffffff, #e0e0e0, #b8b8b8, #9a9a9a)',
                      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
                      border: '1px solid #888888'
                    }}
                  ></span>
                  <span className="leading-relaxed md:leading-loose">Code Compliance Specialist</span>
                </li>
                <li className="flex items-center">
                  <span 
                    className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full mr-3 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #ffffff, #e0e0e0, #b8b8b8, #9a9a9a)',
                      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
                      border: '1px solid #888888'
                    }}
                  ></span>
                  <span className="leading-relaxed md:leading-loose">Residential Electrical Expert</span>
                </li>
                <li className="flex items-center">
                  <span 
                    className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full mr-3 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #ffffff, #e0e0e0, #b8b8b8, #9a9a9a)',
                      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
                      border: '1px solid #888888'
                    }}
                  ></span>
                  <span className="leading-relaxed md:leading-loose">Fully Licensed & Insured</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
