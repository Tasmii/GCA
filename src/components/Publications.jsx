import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNomination } from '../contexts/NominationContext';
import { Book, Edit, Globe, Award, Star, Rocket, Users } from 'lucide-react';

const Publications = () => {
  const { openNominationForm } = useNomination();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/Videos/Video 7.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              Empowering Authors Through Global Publishing
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Transform Your Ideas into</span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Published Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join our global community of authors and share your knowledge with the world through our comprehensive publishing solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={openNominationForm}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-5 px-20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-500/50 active:scale-95 text-xl"
            >
              Nominate Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
            GCA Publishing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Your Publishing Journey Starts Here
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Empowering authors through a seamless, high-quality self-publishing experience that ensures you retain full ownership, rights, and creative control of your book. Our mission is to make publishing transparent and author-centric, offering expert guidance from manuscript to market.
          </p>
        </motion.div>

        {/* Publishing Journey */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-bold text-blue-900">Your Step-by-Step Publishing Journey</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-20">
            {[
              { step: 1, title: 'Register', desc: 'Create your free account and begin your self-publishing journey.', icon: <Edit className="h-8 w-8 text-blue-900" /> },
              { step: 2, title: 'Choose Format', desc: 'Select your preferred format: eBook, Paperback, or Audiobook.', icon: <Book className="h-8 w-8 text-blue-900" /> },
              { step: 3, title: 'Upload or Create', desc: 'Use our easy-to-use DIY publishing tool or upload your ready-to-print manuscript.', icon: <Globe className="h-8 w-8 text-blue-900" /> },
              { step: 4, title: 'Design & Edit', desc: 'Customize your cover, format your content, and opt for professional editing services if needed.', icon: <Star className="h-8 w-8 text-blue-900" /> },
              { step: 5, title: 'Review & Approve', desc: 'Review your final draft, make necessary adjustments, and approve for publishing.', icon: <Award className="h-8 w-8 text-blue-900" /> },
              { step: 6, title: 'Publish', desc: 'Launch your book across global platforms and online bookstores.', icon: <Rocket className="h-8 w-8 text-blue-900" /> },
              { step: 7, title: 'Market & Distribute', desc: 'Leverage our optional marketing tools to promote and distribute your work.', icon: <Globe className="h-8 w-8 text-blue-900" /> },
              { step: 8, title: 'Earn Royalties', desc: 'Track sales and earn 100% of your author royalties with full rights retained.', icon: <Award className="h-8 w-8 text-blue-900" /> },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.step * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {item.icon}
                    <div className="text-blue-900 font-bold text-xl">Step {item.step}</div>
                  </div>
                  <h4 className="text-gray-800 font-semibold text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Writeup + Publishing Packages */}
        <div className="mb-20 bg-gradient-to-b from-blue-900 to-blue-800 py-20 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <div className="inline-block mb-4 px-5 py-2 bg-white/10 text-white rounded-full text-sm">
              Writeup + Publishing Packages
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Publishing Solutions</h3>
            <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
              We offer complete end-to-end solutions—from content creation to publishing—for aspiring authors, professionals, and thought leaders.
            </p>
          </motion.div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-20">
              {/* Starter Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Edit className="h-8 w-8 text-blue-900" />
                    <h4 className="text-2xl font-bold text-gray-800">Starter Package</h4>
                  </div>
                  <p className="text-yellow-600 mb-4">Ideal For: Authors with basic ideas or notes</p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Content Structuring & Outline</li>
                    <li>• Up to 15,000 words of Writeup</li>
                    <li>• Copy Editing & Proofreading</li>
                    <li>• Paperback Publishing (India)</li>
                    <li>• ISBN & Distribution</li>
                    <li>• Author Dashboard Access</li>
                  </ul>
                  <button
                    onClick={openNominationForm}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>

              {/* Pro Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 relative"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">Most Chosen</div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-8 w-8 text-blue-900" />
                    <h4 className="text-2xl font-bold text-gray-800">Pro Package</h4>
                  </div>
                  <p className="text-yellow-600 mb-4">Ideal For: Professionals with stories, research, or training material</p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Full Writeup (up to 40,000 words)</li>
                    <li>• Global Paperback & eBook Publishing</li>
                    <li>• Author Website (Basic)</li>
                    <li>• Press Kit & Media Profile</li>
                    <li>• Book Cover Design</li>
                    <li>• Everything in Starter Package</li>
                  </ul>
                  <button
                    onClick={openNominationForm}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
                  >
                    Choose Pro
                  </button>
                </div>
              </motion.div>

              {/* Elite Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="h-8 w-8 text-blue-900" />
                    <h4 className="text-2xl font-bold text-gray-800">Elite Package</h4>
                  </div>
                  <p className="text-yellow-600 mb-4">Ideal For: Coaches, experts, and high-impact professionals</p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Full Writeup (up to 70,000 words)</li>
                    <li>• Advanced Editing & Manuscript Formatting</li>
                    <li>• Global Sales in 150+ Countries</li>
                    <li>• Book Trailer (Promo Video)</li>
                    <li>• Press Release & Media Submission</li>
                    <li>• Amazon Prime & Oxford Listing</li>
                    <li>• Everything in Pro Package</li>
                  </ul>
                  <button
                    onClick={openNominationForm}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
                  >
                    Go Elite
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* GCA Publishing Packages */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-4">GCA Publishing Packages</h3>
          <p className="text-center text-blue-800 mb-10">Your Journey from Manuscript to Marketplace Starts Here</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-20">
            {/* Essential Author Package */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 fade-in">
              
              <h4 className="text-2xl font-bold text-white mb-4">📘 Essential Author Package</h4>
              <p className="text-yellow-400 mb-4">Perfect for first-time authors who want to publish quickly and professionally.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✅ Paperback & eBook Publishing</li>
                <li>✅ Sales Across India</li>
                <li>✅ ISBN Allocation</li>
                <li>✅ Author Website (One Page)</li>
                <li>✅ Press Kit & Media Profile</li>
              </ul>
              <button
                onClick={openNominationForm}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Choose Essential
              </button>
            </div>

            {/* Professional Author Package */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 fade-in relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <h4 className="text-2xl font-bold text-white mb-4">📗 Professional Author Package</h4>
              <p className="text-yellow-400 mb-4">Ideal for authors seeking global exposure and editorial excellence.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✅ Global Paperback & eBook Distribution</li>
                <li>✅ Copy Editing (Up to 50,000 words)</li>
                <li>✅ Dedicated Author Dashboard</li>
                <li>✅ Custom Cover Design</li>
                <li>✅ Marketing Kit</li>
                <li>✅ Everything in Essential Package</li>
              </ul>
              <button
                onClick={openNominationForm}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Choose Professional
              </button>
            </div>

            {/* Elite Author Package */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 fade-in">
              <h4 className="text-2xl font-bold text-white mb-4">📕 Elite Author Package</h4>
              <p className="text-yellow-400 mb-4">For thought leaders, experts, and professionals who want full impact and visibility.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✅ Premium Editing & Formatting</li>
                <li>✅ Illustrated Elements (Charts, Graphics, etc.)</li>
                <li>✅ Press Release & Media Circulation</li>
                <li>✅ Amazon Prime Listing</li>
                <li>✅ Oxford Bookstore Listing</li>
                <li>✅ Grand Book Launch Support</li>
                <li>✅ Fully Customised Author Website</li>
                <li>✅ Everything in Professional Package</li>
              </ul>
              <button
                onClick={openNominationForm}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Choose Elite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="grid grid-cols-1 gap-4 mb-20 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">Why Choose a Package?</h3>
                  <p className="text-md mr-8">Each package is crafted to elevate your recognition, boost visibility, and connect you with a vibrant community of innovators, educators, and industry pioneers.</p>
                </div>
              </div>
              <button 
              onClick={openNominationForm}
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 text-lg font-bold whitespace-nowrap rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/30 active:scale-95">
                Nominate Now
              </button>
            </div>
          </div>
    </div>
  );
};

export default Publications;