import React from 'react';
import { ArrowLeft, ExternalLink, Facebook } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Electrical Panel Upgrade",
      small: "https://raw.githubusercontent.com/your-repo/images/main/panel-600x450.webp",
      large: "https://raw.githubusercontent.com/your-repo/images/main/panel-1200x900.webp"
    },
    {
      id: 2,
      title: "Kitchen Lighting",
      small: "https://raw.githubusercontent.com/your-repo/images/main/kitchen-600x450.webp",
      large: "https://raw.githubusercontent.com/your-repo/images/main/kitchen-1200x900.webp"
    },
    // ... add the rest
  ];

  return (
    <section className="min-h-screen bg-black pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <a
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6 font-semibold"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Work Gallery
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            See examples of our professional electrical work throughout the Saratoga Springs area.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map(({ id, title, small, large }) => (
            <article
              key={id}
              className="bg-gray-900 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors shadow-lg overflow-hidden"
              aria-label={`Gallery image: ${title}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={small}
                  srcSet={`${small} 600w, ${large} 1200w`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt={title}
                  title={title}
                  loading="lazy"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://via.placeholder.com/600x450/374151/ffffff?text=${encodeURIComponent(title)}`;
                  }}
                />
              </div>
              <div className="bg-gray-800 p-4 text-center border-t border-gray-600">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Facebook Link */}
        <div className="max-w-2xl mx-auto">
          <section className="bg-gray-900 p-8 rounded-lg border border-gray-600 shadow-inner shadow-gray-700 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">View More Work</h2>
            <p className="text-gray-300 mb-6">
              See our complete photo gallery on Facebook. We update it regularly with new installations, repairs, and before/after photos.
            </p>
            <a
              href="https://www.facebook.com/mcmasterelectric/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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
