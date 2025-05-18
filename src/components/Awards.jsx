import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Awards = () => {
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
      name: 'Standard',
      idealFor: 'Individuals & Small Teams',
      features: [
        'GCA Membership & Welcome Kit',
        'Networking Opportunity',
        'Branding in GCA Magazine',
        'Conference Lunch'
      ]
    },
    {
      name: 'Supreme',
      idealFor: 'Growing Organizations',
      features: [
        'All Standard Features',
        'Enhanced Networking Session',
        'Video Byte Feature'
      ]
    },
    {
      name: 'Elite',
      idealFor: 'Established Businesses',
      features: [
        'All Supreme Features',
        'VIP Networking Opportunities',
        'University Convocation (International or GCAU HQ, India)',
        'Biographical Film (Shot by Actor + Anchor in Metro City)'
      ]
    },
    {
      name: 'Premium',
      idealFor: 'Industry Leaders',
      features: [
        'All Elite Features',
        'Happy Hour with Premium Guests'
      ]
    },
    {
      name: 'LEGENDS 🥇',
      idealFor: 'Industry Trailblazers',
      features: [
        'All Premium Features',
        'Global Media Coverage',
        'VIP Recognition Experience'
      ]
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-8 text-center text-yellow-300">Awards</h2>
          <p className="text-lg mb-6 leading-relaxed">
            GCAU group proudly hosted the The Business and Education Awards & The Icon Awards, a landmark event celebrating excellence across diverse industries. This prestigious ceremony brought together leaders, entrepreneurs, educators, and visionaries from around the world, recognizing individuals and organizations that have made outstanding contributions to business, education, and leadership.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            With a strong emphasis on excellence and global impact, the awards set a new benchmark for recognizing achievements on an The scale. Inspiring speeches from honorees and speakers showcased their remarkable journeys, sharing insights into their dedication, perseverance, and success.
          </p>
          <p className="text-lg leading-relaxed">
            The event garnered extensive media coverage, amplifying the achievements of the awardees and highlighting the significance of the Global Eminence Awards. By bringing together the brightest minds and celebrating their success, the ceremony reinforced its mission to champion innovation, leadership, and excellence on a global stage.
          </p>
        </div>

        <div className="mb-20 animate-on-scroll">
          <h3 className="text-3xl font-bold mb-12 text-center text-yellow-300">🏆 Awards Categories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-blue-800 bg-opacity-50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.awards.map((award, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">•</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold mb-12 text-center text-yellow-300">🏆 Awards Packages</h3>
          <p className="text-center mb-8 text-lg">Select the perfect package to showcase your achievements and gain national and global recognition.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-blue-800 bg-opacity-50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-2">{pkg.name}</h4>
                <p className="text-yellow-300 mb-4">{pkg.idealFor}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-400 mr-2">✅</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h4 className="text-2xl font-bold mb-6 text-yellow-300">✨ Why Choose a Package?</h4>
            <p className="text-lg max-w-3xl mx-auto">
              Each package is crafted to elevate your recognition, boost visibility, and connect you with a vibrant community of innovators, educators, and industry pioneers. Whether you're just starting out or already changing the world, there's a platform for your story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;