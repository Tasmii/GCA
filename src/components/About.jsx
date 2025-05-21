import { motion } from 'framer-motion';
import { Sparkles, Globe, Award, Users, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNomination } from '../contexts/NominationContext' 

const About = () => {
  const navigate = useNavigate();
  const { openNominationForm } = useNomination();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const coreValues = [
    { title: 'Excellence', description: 'We strive for the highest standards in education, publishing, and professional services.' },
    { title: 'Integrity', description: 'Our work is grounded in honesty, transparency, and ethical practices.' },
    { title: 'Innovation', description: 'We embrace new ideas, technologies, and approaches to enhance learning and recognition.' },
    { title: 'Diversity & Inclusion', description: 'We celebrate diverse perspectives and promote equal opportunity for all learners and contributors.' },
    { title: 'Empowerment', description: 'We provide platforms and recognition that inspire individuals to maximize their potential.' },
    { title: 'Global Impact', description: 'We nurture a global community dedicated to creating positive change across borders.' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8 text-blue-900" />
                  <h3 className="text-2xl font-bold text-gray-800">Global Education Pioneer</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  GCA GROUP is a pioneer in education since 2022 committed to academic innovation, global engagement, and societal impact. We strive to empower individuals through accessible and transformative education, combining quality learning experiences with ethical leadership and community service.
                </p>
                
                <p className="text-gray-600 mb-4">
                  Our programs are crafted to meet the evolving needs of modern learners—providing flexibility, affordability, and practical relevance through cutting-edge platforms and global partnerships. GCA GROUP remains devoted to building a worldwide community of learners and leaders who aspire to drive meaningful change.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-blue-900" />
                  <h3 className="text-xl font-bold text-gray-800">Mission</h3>
                </div>
                <p className="text-gray-600">
                  GCA GROUP's mission is to empower individuals through transformative, globally recognized education. We are dedicated to fostering innovation, leadership, and lifelong learning by delivering high-quality academic, publishing, and professional development programs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-blue-900" />
                  <h3 className="text-xl font-bold text-gray-800">Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be a globally respected institution that bridges education, recognition, and innovation—empowering learners, authors, and leaders to thrive beyond boundaries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent">
            Our Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-900" />
                  <h4 className="text-xl font-bold text-gray-800">Honorary Doctorate</h4>
                </div>
                <p className="text-gray-600 mb-4">Recognize exceptional achievements with our prestigious Honorary Doctorate program, celebrating distinguished contributions to society and academia.</p>
                <button
                  onClick={() => navigate('/honorary-doctorate')}
                  className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-900" />
                  <h4 className="text-xl font-bold text-gray-800">Doctorate Degree</h4>
                </div>
                <p className="text-gray-600 mb-4">Advance your academic journey with our comprehensive Doctorate Degree programs, designed for aspiring scholars and professionals.</p>
                <button
                  onClick={() => navigate('/doctorate-degree')}
                  className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-900" />
                  <h4 className="text-xl font-bold text-gray-800">Conference 2025</h4>
                </div>
                <p className="text-gray-600 mb-4">Join our upcoming 2025 conference featuring groundbreaking research, networking opportunities, and expert speakers.</p>
                <button
                  onClick={() => navigate('/conference-2025')}
                  className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-900" />
                  <h4 className="text-xl font-bold text-gray-800">Conference 2026</h4>
                </div>
                <p className="text-gray-600 mb-4">Experience our 2026 conference showcasing innovative research, collaborative opportunities, and industry insights.</p>
                <button
                  onClick={() => navigate('/conference-2026')}
                  className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-blue-900" />
                  <h4 className="text-xl font-bold text-gray-800">Awards</h4>
                </div>
                <p className="text-gray-600 mb-4">Celebrate excellence through our prestigious awards program, recognizing outstanding achievements across various fields.</p>
                <button
                  onClick={() => navigate('/awards')}
                  className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                  <h4 className="text-xl font-bold text-gray-800">Publications</h4>
                </div>
                <p className="text-gray-600 mb-4">Discover our collection of academic publications, research papers, and scholarly works from our global community.</p>
                <button
                  onClick={() => navigate('/publications')}
                  className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">Why Pursue Recognition with GCA?</h3>
                  <p className="text-md mr-8">Our comprehensive packages are designed to amplify your professional legacy through:
          <span className="block">
            <span className="inline-block mr-4">• Global Accreditation</span>
            <span className="inline-block mr-4">• Prestigious Ceremonies</span>
            <span className="inline-block">• Elite Networking</span>
          </span></p>
                </div>
              </div>
              <button 
              onClick={openNominationForm}
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 text-lg font-bold whitespace-nowrap rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/30 active:scale-95">
                Nominate Now
              </button>
            </div>
          </div>
    </section>
    
  );
};

export default About;