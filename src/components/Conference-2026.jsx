import { motion } from 'framer-motion';
import { 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Globe,
  Award,
  Users,
  Sparkles,
  MapPin,
  CalendarCheck,
  Brain,
  Activity,
  Lock,
  Wifi,
  Atom,
  Leaf,
  UserPlus,
  BarChart,
  Building,
  Train,
  Plane,
  Hotel,
  Utensils
} from 'lucide-react';
import { useState } from 'react';

const ConferencePage = () => {
  // State management
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [activeTab, setActiveTab] = useState('highlights');
  const [showMoreTopics, setShowMoreTopics] = useState(false);
  const [venueTab, setVenueTab] = useState('overview');

  // Conference Topics Data
  const topics = [
    { icon: <Brain className="h-8 w-8 text-white" />, title: "Generative AI", description: "Explore cutting-edge developments in generative models" },
    { icon: <Activity className="h-8 w-8 text-white" />, title: "AI in Healthcare", description: "Revolutionizing medical diagnosis and treatment" },
    { icon: <Lock className="h-8 w-8 text-white" />, title: "AI Security", description: "Ensuring safety and ethics in AI systems" },
    { icon: <Wifi className="h-8 w-8 text-white" />, title: "AIoT", description: "Integration of AI with IoT technologies" },
    { icon: <Atom className="h-8 w-8 text-white" />, title: "Quantum AI", description: "Quantum computing applications in ML" },
    { icon: <Leaf className="h-8 w-8 text-white" />, title: "Sustainable AI", description: "Environmentally friendly AI systems" }
  ];

  const additionalTopics = [
    { icon: <UserPlus className="h-8 w-8 text-white" />, title: "Human-AI Collaboration", description: "Enhancing human capabilities through AI" },
    { icon: <BarChart className="h-8 w-8 text-white" />, title: "Business AI", description: "AI applications in enterprise systems" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/Videos/2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 text-center px-4">
        <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            November 27-29, 2025 • Malaysia
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          <span className="block">Conference on</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI & Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Join world-leading experts in artificial intelligence and machine learning to explore the future of technology
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#registration"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
            About GCA 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
            Shaping the Future of AI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-500" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-8 w-8 text-purple-500" />
                  <h3 className="text-2xl font-bold text-gray-800">Golden Conference Awards</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                We are pleased to announce the "Conference on Artificial Intelligence and Applications", scheduled to take place on 27-29th November 2025 in Malaysia, in collaboration with the Malaysia University of Science and Technology.</p>
                
                {showMoreAbout && (
                  <>
                    <p className="text-gray-600 mb-4">
                    GCA is a peer-reviewed international conference dedicated to bringing together scientists, academics, researchers, and industry professionals to exchange ideas, share high-quality research findings, and present the latest advancements in Artificial Intelligence, Control, Data Sciences, and related applications.

The conference will offer a comprehensive technical program featuring multiple technical sessions showcasing cutting-edge research and technological innovations.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Featuring keynote speeches from AI pioneers, hands-on workshops, and panel discussions with 
                      industry leaders, GCA 2025 offers unparalleled opportunities to shape the future of artificial 
                      intelligence.
                    </p>
                  </>
                )}
                
                <button
                  onClick={() => setShowMoreAbout(!showMoreAbout)}
                  className="text-blue-600 font-medium flex items-center gap-1 hover:text-purple-500 transition-colors"
                >
                  {showMoreAbout ? 'Read Less' : 'Read More'}
                  {showMoreAbout ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                <div className="grid grid-cols-2 gap-2 mt-9">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <CalendarCheck className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium">Nov 27-29, 2025</p>
                      <p className="text-sm text-gray-600">Conference Dates</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                    <MapPin className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="font-medium">University of Science & Tech</p>
                      <p className="text-sm text-gray-600">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex bg-gray-50">
                <button
                  onClick={() => setActiveTab('highlights')}
                  className={`flex-1 py-4 text-center ${
                    activeTab === 'highlights' 
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-white' 
                      : 'text-gray-600'
                  }`}
                >
                  Highlights
                </button>
                <button
                  onClick={() => setActiveTab('topics')}
                  className={`flex-1 py-4 text-center ${
                    activeTab === 'topics' 
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-white' 
                      : 'text-gray-600'
                  }`}
                >
                  Topics
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'highlights' && (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Hybrid Format</h4>
                        <p className="text-gray-600">Present your papers either physically or online, ensuring global participation regardless of travel constraints.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Innovation Awards</h4>
                        <p className="text-gray-600">Outstanding research papers will be recognized with special awards and certificates. $50k in prize money</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'topics' && (
                  <div className="grid gap-2">
                    {[
                      'Artificial Intelligence & Machine Learning',
                      'Neural Networks & Deep Learning',
                      'Computer Vision & Pattern Recognition',
                      'Natural Language Processing',
                      'Robotics & Automation',
                      'Big Data Analytics'
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-2xl p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">Join Us in Malaysia</h3>
                  <p className="text-md">Be part of this exciting opportunity to share your research, gain valuable insights, and build lasting collaborations with peers from around the world.</p>
                </div>
              </div>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold mx-6 py-2 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/30 active:scale-95">
                Nominate Now
              </button>
            </div>
            </div>
        </div>
      </section>

      {/* Conference Topics Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
            Conference Topics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the cutting-edge research areas in AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...topics, ...(showMoreTopics ? additionalTopics : [])].map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 mb-4 flex items-center justify-center">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowMoreTopics(!showMoreTopics)}
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
          >
            {showMoreTopics ? 'Show Less Topics' : 'Show More Topics'}
          </button>
        </div>
      </section>

      {/* Venue Details Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
              Venue Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              World-class facilities in Kuala Lumpur
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.79771432555!2d101.68924631475726!3d3.138355297710132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362b0e679927%3A0x6376d2c3a10a4956!2sKuala%20Lumpur%20Convention%20Centre!5e0!3m2!1sen!2smy!4v1628235678909!5m2!1sen!2smy"
                className="w-full h-96 border-0"
                allowFullScreen
              />
            </div>

            <div>
              <div className="flex bg-gray-100 rounded-t-xl overflow-hidden">
                {['overview', 'attractions', 'transport'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setVenueTab(tab)}
                    className={`flex-1 py-4 text-center ${
                      venueTab === tab ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-b-xl shadow-lg p-6">
              {venueTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Building className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">KL Convention Center</h3>
                        <p className="text-gray-600">
                          State-of-the-art convention facility in the heart of Kuala Lumpur, 
                          featuring 10,000 sqm of exhibition space and 50 meeting rooms.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <h4 className="font-semibold mb-1">Capacity</h4>
                        <p className="text-gray-600">5,000+ attendees</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-xl">
                        <h4 className="font-semibold mb-1">Facilities</h4>
                        <p className="text-gray-600">Free WiFi, Translation Services</p>
                      </div>
                    </div>
                  </div>
                )}

                {venueTab === 'attractions' && (
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Globe className="h-5 w-5" />, name: 'Petronas Towers' },
                      { icon: <MapPin className="h-5 w-5" />, name: 'Batu Caves' },
                      { icon: <Utensils className="h-5 w-5" />, name: 'Jalan Alor Food Street' },
                      { icon: <Hotel className="h-5 w-5" />, name: 'Luxury Hotels' }
                    ].map((attraction, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 text-blue-600">
                          {attraction.icon}
                          <span className="font-medium">{attraction.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {venueTab === 'transport' && (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Plane className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">KLIA Airport</h4>
                        <p className="text-gray-600">45 minutes by express train</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Train className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Public Transport</h4>
                        <p className="text-gray-600">Direct LRT access to convention center</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConferencePage;