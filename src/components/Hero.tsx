import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // <-- Added import

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedSlide, setDisplayedSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    {
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/resized%20carousal%201_result.webp",
      mobileImage: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Untitled%20(2)_result.webp",
      title: "Lighting Needs",
      description: "We install all types of lightning and fixtures",
      desktopPosition: "left-bottom" // Position for desktop
    },
    {
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/474797959_1691028691852358_997613075117587621_n_result.webp",
      mobileImage: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Solar%20storage_result.webp",
      title: "Expert Solar Equipment Installation",
      description: "Professional electrical work you can trust",
      desktopPosition: "left-bottom" // Position for desktop
    },
    {
      image: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Ford%20electric%20car%20charger.webp",
      mobileImage: "https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/Tesla%20charger_result.webp",
      title: "EV charger install",
      description: "We can install and get you connected",
      desktopPosition: "right-bottom" // Position for desktop
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setDisplayedSlide(currentSlide);
  }, [currentSlide]);

  const getTextPositioning = (index: number) => {
    const slide = slides[index];
    const mobileClasses = "items-end justify-center text-center";
    let desktopClasses = "";

    switch (slide.desktopPosition) {
      case "left-bottom":
        desktopClasses = "md:items-end md:justify-start md:text-left";
        break;
      case "right-bottom":
        desktopClasses = "md:items-end md:justify-end md:text-right";
        break;
      case "center-bottom":
      default:
        desktopClasses = "md:items-end md:justify-center md:text-center";
        break;
    }

    return `${mobileClasses} ${desktopClasses}`;
  };

  const getContentPositioning = (index: number) => {
    const slide = slides[index];

    switch (slide.desktopPosition) {
      case "right-bottom":
        return "md:ml-auto md:mr-0 md:text-right max-w-xl";
      case "left-bottom":
        return "md:ml-0 md:mr-auto md:text-left max-w-xl";
      case "center-bottom":
      default:
        return "md:ml-auto md:mr-auto md:text-center max-w-xl";
    }
  };

  return (
    <section className="relative bg-black">
      {/* Navigation Header */}
      <nav className="bg-black relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img 
                src="https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/McMasters%20logo.webp" 
                alt="McMaster Electric LLC Logo" 
                className="h-14 w-auto transition-all duration-300"
                style={{ 
                  mixBlendMode: 'screen',
                  transition: 'filter 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(59,130,246,0.6))')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
              />
              <div className="text-xl md:text-2xl font-bold chrome-text transition-all duration-300">
                McMaster Electric LLC
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="chrome-text text-lg font-medium transition-all duration-300">
                Home
              </a>
              <a href="#about" className="chrome-text text-lg font-medium transition-all duration-300">
                About
              </a>
              <a href="#services" className="chrome-text text-lg font-medium transition-all duration-300">
                Services
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(145deg, #c0c0c0, #a0a0a0)',
                  color: '#2d2d2d',
                  border: '1px solid #808080',
                  boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)',
                  textShadow: '1px 1px 1px rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 1px 1px 2px rgba(255,255,255,0.4), inset -1px -1px 2px rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-black border-t border-gray-200`}>
            <div className="py-4 space-y-4">
              <a href="#home" className="block chrome-text text-lg font-medium px-4 py-2">Home</a>
              <a href="#about" className="block chrome-text text-lg font-medium px-4 py-2">About</a>
              <a href="#services" className="block chrome-text text-lg font-medium px-4 py-2">Services</a>
              <a href="#contact" className="block text-white px-4 py-2 mx-4 rounded-lg font-semibold text-center" 
                style={{
                  background: 'linear-gradient(145deg, #c0c0c0, #a0a0a0)',
                  color: '#2d2d2d',
                  border: '1px solid #808080',
                  boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 4px rgba(0,0,0,0.3)',
                  textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
                }}
              >Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider Container */}
      <div className="relative h-screen overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === displayedSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Desktop Image - Hidden on mobile */}
            <img
              src={slide.image}
              alt={slide.title}
              className="hidden md:block w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Mobile Image - Hidden on desktop */}
            <img
              src={slide.mobileImage}
              alt={slide.title}
              className="block md:hidden w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            
            {/* Text Content with Dynamic Positioning */}
            <div className={`absolute inset-0 z-10 flex pb-20 md:pb-16 ${getTextPositioning(index)}`}>
              <div className="container mx-auto px-4">
                <div className={`text-white opacity-90 ${getContentPositioning(index)}`}>
                  <h2 className="text-sm md:text-lg font-semibold text-orange-400 mb-2 md:mb-4" style={{ textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black' }}>
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 leading-tight text-white" style={{ textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black' }}>
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-lg lg:text-xl text-gray-200" style={{ textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black' }}>
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators - Fixed Size for Mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-2 h-2 md:w-3 md:h-3 
                rounded-full transition-all duration-300 
                ${index === currentSlide 
                  ? 'bg-orange-500 scale-110' 
                  : 'bg-white/50 hover:bg-white/75 hover:scale-105'
                }
              `}
              style={{
                minWidth: '8px',
                minHeight: '8px',
                touchAction: 'manipulation'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Gallery Button Section */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            See Our Quality Work
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse through our portfolio of completed electrical projects and see the quality craftsmanship that sets us apart.
          </p>
          <Link 
            to="/gallery" 
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(145deg, #c0c0c0, #a0a0a0)',
              color: '#2d2d2d',
              border: '1px solid #808080',
              boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)',
              textShadow: '1px 1px 1px rgba(255,255,255,0.5)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'inset 1px 1px 2px rgba(255,255,255,0.4), inset -1px -1px 2px rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View Some Of Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
