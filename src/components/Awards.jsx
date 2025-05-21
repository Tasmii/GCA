import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Users } from 'lucide-react';

const Awards = () => {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          element.classList.add('fade-in-scale');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const categories = [
    {
      title: '🌟 Start-Up Excellence Awards',
      awards: [
        'Innovative Start-Up of the Year',
        'Start-Up of the Year (Industry-Specific)',
        'Emerging Start-Up of the Year',
        'Mobility Start-Up of the Year',
        'Best Social Impact Start-Up'
      ]
    },
    {
      title: '🚀 Entrepreneurship & Business Awards',
      awards: [
        'Entrepreneur of the Year',
        'Young Entrepreneur of the Year',
        'Woman Entrepreneur of the Year',
        'Innovative Entrepreneur of the Year',
        'Fastest-Growing Company of the Year'
      ]
    },
    {
      title: '💡 Technology & Innovation Awards',
      awards: [
        'Most Innovative Tech Company',
        'AI & Emerging Technology Leader',
        'Best Digital Transformation Company',
        'Cybersecurity Innovation Award',
        'Blockchain & Fintech Disruptor'
      ]
    },
    {
      title: '🎓 Education & Academia Awards',
      awards: [
        'Best University/College of the Year',
        'Best Coaching Institute of the Year',
        'Best Online Education Program',
        'Emerging Play School of the Year',
        'Best Education Mobile App'
      ]
    }
  ];

  const packages = [
    {
      name: '⭐ Standard',
      idealFor: 'Individuals & Small Teams',
      features: [
        'GCA Membership & Welcome Kit',
        'Networking Opportunity',
        'Branding in GCA Magazine',
        'Conference Lunch'
      ]
    },
    {
      name: '🌟 Supreme',
      idealFor: 'Growing Organizations',
      features: [
        'All Standard Features',
        'Enhanced Networking Session',
        'Video Byte Feature'
      ]
    },
    {
      name: '💫 Elite',
      idealFor: 'Established Businesses',
      features: [
        'All Supreme Features',
        'VIP Networking Opportunities',
        'University Convocation (International or GCAU HQ, India)',
        'Biographical Film (Shot by Actor + Anchor in Metro City)'
      ]
    },
    {
      name: '✨ Premium',
      idealFor: 'Industry Leaders',
      features: [
        'All Elite Features',
        'Happy Hour with Premium Guests'
      ]
    },
    {
      name: '👑 LEGENDS',
      idealFor: 'Industry Trailblazers',
      features: [
        'All Premium Features',
        'Global Media Coverage',
        'VIP Recognition Experience'
      ]
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
            Global Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Awards & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              GCAU group proudly hosted the The Business and Education Awards & The Icon Awards, a landmark event celebrating excellence across diverse industries. This prestigious ceremony brought together leaders, entrepreneurs, educators, and visionaries from around the world, recognizing individuals and organizations that have made outstanding contributions to business, education, and leadership.
            </p>
            {showMore && (
              <>
                <p className="text-lg mb-6 leading-relaxed">
                  With a strong emphasis on excellence and global impact, the awards set a new benchmark for recognizing achievements on an The scale. Inspiring speeches from honorees and speakers showcased their remarkable journeys, sharing insights into their dedication, perseverance, and success.
                </p>
                <p className="text-lg leading-relaxed">
                  The event garnered extensive media coverage, amplifying the achievements of the awardees and highlighting the significance of the Global Eminence Awards. By bringing together the brightest minds and celebrating their success, the ceremony reinforced its mission to champion innovation, leadership, and excellence on a global stage.
                </p>
              </>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-900 font-medium flex items-center gap-1 hover:text-blue-800 transition-colors mt-4"
            >
              {showMore ? 'Read Less' : 'Read More'}
              {showMore ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        </motion.div>
        </div>

        <div className="mb-20 mx-28 animate-on-scroll">
          <h3 className="text-3xl font-bold mb-12 text-center text-blue-900">🏆 Awards Categories</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.awards.map((award, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-blue-900 mr-2">•</span>
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold mb-12 text-center text-blue-900">🏆 Awards Packages</h3>
          <p className="text-center mb-8 text-lg">Select the perfect package to showcase your achievements and gain national and global recognition.</p>
          
          <div className="grid grid-cols-5 gap-8 mx-28">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-t-2xl -mt-6 -mx-6 mb-6" />
                <h4 className="text-2xl font-semibold mb-2 text-gray-800">{pkg.name}</h4>
                <p className="text-blue-900 mb-4">{pkg.idealFor}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-blue-900 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 mt-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">Why Choose a Package?</h3>
                  <p className="text-md mr-8">Each package is crafted to elevate your recognition, boost visibility, and connect you with a vibrant community of innovators, educators, and industry pioneers.</p>
                </div>
              </div>
              <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 text-lg font-bold whitespace-nowrap rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/30 active:scale-95">
                Choose Now
              </button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Awards;