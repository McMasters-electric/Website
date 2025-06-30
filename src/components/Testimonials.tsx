import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marie Murawski",
      location: "",
      rating: 5,
      text: "Responsiveness, Punctuality, Quality, Professionalism, Value",
      service: "",
      date: "a year ago"
    },
    {
      id: 2,
      name: "anthony moccia",
      location: "",
      rating: 5,
      text: "I've had Zach do multiple jobs for me and he's been excellent each time.",
      service: "",
      date: "a year ago"
    },
    {
      id: 3,
      name: "Meg Woods",
      location: "",
      rating: 5,
      text: "Excellent service and communication. Great job!!! Highly recommend",
      service: "",
      date: "2 years ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
        aria-label={i < rating ? 'Filled star' : 'Empty star'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            This Is What Some Of Our Customers Say
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what local customers are saying about our electrical services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 rounded-lg p-6 border-[3px] border-gray-400 shadow-inner shadow-gray-700 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-3" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-200 text-center leading-relaxed mb-4 text-sm">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="text-center">
                <h4 className="text-base font-semibold text-white mb-1">
                  {testimonial.name}
                </h4>

                <div className="flex flex-col items-center space-y-2">
                  {testimonial.name.toLowerCase() !== "anthony moccia" && testimonial.service && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                      {testimonial.service}
                    </span>
                  )}
                  <span className="text-gray-400 text-xs">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/McMaster+Electric+LLC/@43.2910352,-74.3601031,9z/data=!4m8!3m7!1s0x89de31b1ba15f2af:0xae41d408e0f56fc3!8m2!3d43.291929!4d-73.7007454!9m1!1b1!16s%2Fg%2F11hmmhtn38?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
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
            aria-label="Read more customer reviews on Google"
          >
            <Star className="w-4 h-4 mr-2" />
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
