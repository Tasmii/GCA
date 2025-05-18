import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Conferences = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('fade-in-scale');
        }, index * 200);
      });
    }
  }, [inView]);

  return (
    <section id="conferences" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className="space-y-12">
          {/* Main Heading */}
          <div className="text-center animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conferences
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          {/* Premier Conference Platform */}
          <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll opacity-0">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-400">Premier Conference Platform</h3>
              <p className="text-gray-300 leading-relaxed">
                GCAU group is a premier tech-conference that unites global scientists, researchers, and industry leaders.
                This exclusive platform facilitates the exchange of ideas and technologies, attracting renowned speakers
                worldwide to present cutting-edge research and industry trends.
              </p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Global Knowledge Exchange
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Industry Leading Speakers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cutting-edge Research
                </li>
              </ul>
            </div>
          </div>

          {/* Branding Services */}
          <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll opacity-0">
            <div className="bg-blue-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 order-2 md:order-1">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Brand Identity Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Strategic Communication
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Market Research Excellence
                </li>
              </ul>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-yellow-400">Comprehensive Branding Services</h3>
              <p className="text-gray-300 leading-relaxed">
                We accelerate brand development and redefine market research through strategic services. Our expertise spans
                diverse sectors, including government bodies, NGOs, corporates, and startups. We offer branding services
                that develop and implement brand identity by effectively communicating business messages to target audiences.
              </p>
            </div>
          </div>

          {/* Media Solutions */}
          <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll opacity-0">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-400">Innovative Media Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                GCAU group specializes in media solutions, including profiling, consulting, promotions, and advertising.
                We organize exhibitions, award events, and conferences that nurture and promote innovation and talent.
                Our evaluations and research analyses adhere to high industry standards, maintaining our credibility and reputation.
              </p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Professional Event Organization
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Media Consulting & Promotion
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Innovation Recognition
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conferences;