const Testimonials = () => {
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
    }
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">WHAT OUR COMMUNITY SAYS</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials