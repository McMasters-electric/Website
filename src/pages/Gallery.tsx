import React from 'react';
import { ArrowLeft, ExternalLink, Facebook } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Electrical Panel Upgrade",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Panel%20replacement_result_result.webp"
    },
    {
      id: 2,
      title: "Kitchen Lighting Installation",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/recess%20lighting_result_result.webp"
    },
    {
      id: 3,
      title: "Outdoor Lighting Work",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Outside%20lighting.webp"
    },
    {
      id: 4,
      title: "EV Charger Installation",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/tesla%20plug%20resize_result_result.webp"
    },
    {
      id: 5,
      title: "New Wiring",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/panel%20wiring_result_result.webp"
    },
    {
      id: 6,
      title: "Generator Install",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/generator%20resize_result_result.webp"
    },
    {
      id: 7,
      title: "Basement Electrical Panels",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Basement%20panel%20wiring_result_result.webp"
    },
    {
      id: 8,
      title: "Outside Meters",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Outside%20meter.webp"
    },
    {
      id: 9,
      title: "Solar Backup System",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Solar%20basement%20setup_result.webp"
    },
    {
      id: 10,
      title: "Smart Home Equipment",
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Smart%20home%20equipment_result_result.webp"
    }
  ];

  return (
    <section className="min-h-screen bg-black pt-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <a
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6 font-semibold"
            aria-label="Back to home page"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </a>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Work Gallery
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            See examples of our professional electrical work throughout the Saratoga Springs area and surrounding areas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {galleryImages.map(({ id, title, image }) => (
            <article
              key={id}
              className="bg-gray-900 rounded-lg border-[3px] border-gray-400 shadow-inner shadow-gray-700 flex flex-col overflow-hidden"
              aria-label={`Gallery image: ${title}`}
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = `https://via.placeholder.com/400x300/374151/ffffff?text=${encodeURIComponent(title)}`;
                }}
              />
              <div
                className="bg-gray-800 p-6 text-center"
                style={{ borderTop: '3px solid #9ca3af' }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Facebook Link */}
        <div className="max-w-2xl mx-auto">
          <section
            className="bg-gray-900 p-8 rounded-lg border-[3px] border-gray-400 shadow-inner shadow-gray-700 text-center"
            aria-label="Facebook photo gallery link"
          >
            <h2 className="text-2xl font-bold text-white mb-4">View More Work</h2>
            <p className="text-gray-300 mb-6">
              See our complete photo gallery on Facebook. We update our page with new electrical installations, repairs, and before/after photos.
            </p>
            <a
              href="https://facebook.com/mcmasterelectric"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              aria-label="Visit McMaster Electric Facebook page"
            >
              <Facebook className="mr-2" size={20} />
              Visit Our Facebook Page
              <ExternalLink className="ml-2" size={16} />
            </a>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
