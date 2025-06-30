import React from 'react';
import { ArrowLeft, ExternalLink, Facebook } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Electrical Panel Upgrade",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/panel%20install%20600x450_result.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/panel%20install%201200x900_result.webp"
    },
    {
      id: 2,
      title: "Kitchen Lighting Installation",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/recess%20lighting%20600x450_result.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/recess%20lighting%201200x900_result.webp"
    },
    {
      id: 3,
      title: "Outdoor Lighting Work",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/outside%20lighting%20600x450_result.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/outside%20lighting%201200x900_result.webp"
    },
    {
      id: 4,
      title: "EV Charger Installation",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/main/ev-600x450.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/main/ev-1200x900.webp"
    },
    {
      id: 5,
      title: "New Wiring",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/main/wiring-600x450.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/main/wiring-1200x900.webp"
    },
    {
      id: 6,
      title: "Generator Install",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/generator%20600x450_result.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/generator%201200x900_result.webp"
    },
    {
      id: 7,
      title: "Basement Electrical Panels",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/main/basement-600x450.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/main/basement-1200x900.webp"
    },
    {
      id: 8,
      title: "Lighting",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/bingo%20hall%20600x450_result.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/bingo%20hall%201200x900_result.webp"
    },
    {
      id: 9,
      title: "Solar Backup System",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/main/solar-600x450.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/main/solar-1200x900.webp"
    },
    {
      id: 10,
      title: "Smart Home Equipment",
      small: "https://raw.githubusercontent.com/McMasters-electric/images/main/smart-600x450.webp",
      large: "https://raw.githubusercontent.com/McMasters-electric/images/main/smart-1200x900.webp"
    }
  ];

  return (
    <section className="min-h-screen bg-black pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {galleryImages.map(({ id, title, small, large }) => (
            <article
              key={id}
              className="bg-gray-900 rounded-lg border-[3px] border-gray-400 shadow-inner shadow-gray-700 overflow-hidden"
              aria-label={`Gallery image: ${title}`}
            >
              <div className="aspect-[4/3] bg-gray-800 p-3 flex items-center justify-center">
                <img
                  src={small}
                  srcSet={`${small} 600w, ${large} 1200w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={title}
                  title={title}
                  loading="lazy"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = `https://via.placeholder.com/600x450/374151/ffffff?text=${encodeURIComponent(title)}`;
                  }}
                />
              </div>
              <div
                className="bg-gray-800 p-4 text-center"
                style={{ borderTop: '3px solid #9ca3af' }}
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
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
              href="https://www.facebook.com/mcmasterelectric/photos"
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
