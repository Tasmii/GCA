import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO, Global EdTech",
      quote: "The DBA program at GCA transformed my leadership approach. The global immersion experience was particularly valuable for expanding my business network.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "University Dean",
      quote: "GCA's Honorary Doctorate recognition has opened new collaboration opportunities for our institution. Their commitment to academic excellence is commendable.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emily Chen",
      role: "Published Author",
      quote: "GCA Publishing made my dream of becoming an author come true. Their team provided exceptional support throughout the entire process.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Dr. Michael Anderson",
      role: "Research Director",
      quote: "The academic rigor and practical insights gained from GCA's programs have significantly enhanced our research capabilities.",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Lisa Wong",
      role: "Innovation Lead",
      quote: "GCA's approach to combining theory with real-world applications has been instrumental in shaping our organization's strategy.",
      image: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
      name: "Dr. James Martinez",
      role: "Academic Director",
      quote: "The collaborative environment at GCA fosters intellectual growth and professional development in unique ways.",
      image: "https://randomuser.me/api/portraits/men/78.jpg"
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const lastIndex = testimonials.length - 1;
    return [
      activeIndex === 0 ? lastIndex : activeIndex - 1,
      activeIndex,
      activeIndex === lastIndex ? 0 : activeIndex + 1,
    ];
  };

  return (
    <section 
      id="testimonials" 
      className="py-16 bg-white relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">WHAT OUR COMMUNITY SAYS</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center gap-4 transition-transform duration-500 ease-in-out">
            {getVisibleTestimonials().map((index) => (
              <div 
                key={index}
                className={`w-full md:w-1/3 p-6 rounded-lg transition-all duration-500 ease-in-out transform ${index === activeIndex ? 'bg-gray-50 shadow-md scale-105 opacity-100' : 'bg-gray-100 opacity-60 scale-95'}`}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonials[index].image} 
                    alt={testimonials[index].name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonials[index].name}</h4>
                    <p className="text-sm text-gray-600">{testimonials[index].role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonials[index].quote}"</p>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-r transition-opacity duration-300 ${isHovering ? 'opacity-80' : 'opacity-20'} hover:opacity-100`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-l transition-opacity duration-300 ${isHovering ? 'opacity-80' : 'opacity-20'} hover:opacity-100`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials