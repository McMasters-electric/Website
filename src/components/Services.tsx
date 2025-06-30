import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Electrical Repairs",
      description: "Our experts quickly diagnose and repair electrical issues to restore or improve your home's electrical system."
    },
    {
      title: "Panel Upgrades",
      description: "Modern electrical panels to support today's power needs with safety and efficiency."
    },
    {
      title: "New Wiring",
      description: "New wiring installed for new construction, remodels or upgrades—meeting code."
    },
    {
      title: "Outlet Installation",
      description: "GFCI, USB, and standard outlets installed safely and professionally."
    },
    {
      title: "Lighting Installation",
      description: "Complete lighting design from recessed lighting to ceiling fans and fixtures."
    },
    {
      title: "Solar Services",
      description: "NABCEP certified solar installation, maintenance, and repair services."
    }
  ];

  const leftColumn = services.slice(0, 3);
  const rightColumn = services.slice(3, 6);

  return (
    <section id="services" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Electrical Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We provide a wide range of electrical solutions to meet your unique needs, 
            from simple repairs to complex installations.
          </p>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((service, index) => (
                <article
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-[3px] border-gray-400 
                             shadow-inner shadow-gray-700 min-h-[8rem] md:h-32 
                             flex flex-col justify-center items-center text-center
                             mx-4 md:mx-6 lg:mx-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
