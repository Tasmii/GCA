import { motion } from 'framer-motion';
import { ArrowRight, Book, Users, Clock, Globe, Award, Brain, ChartBar, School } from 'lucide-react';
import { useNomination } from '../contexts/NominationContext'


const DoctrateDegree = () => {
  const { openNominationForm } = useNomination()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/Videos/1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              Transform Your Future with Advanced Education
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Doctorate Programs at</span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              GCA Group
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Advance your career with globally recognized doctorate programs designed for working professionals
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

      {/* DBA Program Section */}
      <section id="programs" className="py-10 mt-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Doctorate of Business Administration (DBA)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
            <div className="p-8">
              <p className="text-gray-600 mb-8">
                The Doctorate of Business Administration (DBA) program at GCA Group is designed for seasoned professionals aiming to redefine business leadership through advanced research, strategic innovation, and global insights. This program empowers you to bridge theory and practice, addressing real-world challenges while contributing transformative solutions to the global business landscape.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Program Details</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Program Duration: 36 Months (flexible completion in 2 years)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Mode of Study: Online with 5-day global immersion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Research Support: 1:1 supervised research with real-world impact
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Key Focus Areas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Executive leadership
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Applied business research
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      AI-driven decision-making
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Global strategy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EdD Program Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Doctorate of Education (EdD)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
            <div className="p-8">
              <p className="text-gray-600 mb-8">
                The Doctorate of Education (EdD) program at GCA Group is designed for education professionals who aspire to become visionary leaders, change-makers, and innovators in the field of education. This program equips you with advanced research skills, critical thinking, and practical strategies to solve complex educational challenges and drive systemic improvements in schools, universities, and educational organizations worldwide.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Program Details</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Program Duration: 3 to 4 years (flexible pacing)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Mode of Study: Fully online with optional in-person residencies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Thesis: Original research contributing to educational practice and theory
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Key Focus Areas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Educational leadership
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Curriculum development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Policy analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Technology integration in education
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Inclusive education
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DM Program Section */}
      <section className="py-10 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Doctorate of Management (DM Program)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
            <div className="p-8">
              <p className="text-gray-600 mb-8">
                The Doctorate of Management (DM) at GCA Group is tailored for experienced managers and executives who seek to deepen their understanding of leadership, strategy, and organizational change. This program blends rigorous academic research with practical applications to empower you to influence high-level decision-making, innovate business processes, and lead sustainable growth in diverse industries.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Program Structure</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Program Duration: 3 years (part-time for working professionals)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Mode of Study: Online with interactive workshops and mentorship
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Thesis: Applied research addressing real-world management challenges
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Key Focus Areas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Strategic management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Organizational behavior
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Innovation and leadership ethics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Global business trends
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular PhD Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Doctor of Philosophy (Regular Ph.D.)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
            <div className="p-8">
              <p className="text-gray-600 mb-8">
                The Regular Ph.D. (Doctor of Philosophy) program at GCA Group is offered through a globally accredited university and is fully UGC approved, ensuring international recognition and academic credibility. This advanced degree is designed for dedicated scholars aiming to contribute original knowledge through rigorous and independent research.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Program Components</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Program Duration: Typically 3 months
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Mode of Study: Full-time with flexible research scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Extensive literature analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Hypothesis formulation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Experimental or empirical research
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Career Pathways</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      University professor
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Research scientist
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Industry expert
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Policy advisor
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-900">•</span>
                      Innovation leader
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600">
                Join GCA Group's Regular Ph.D. program to advance your expertise, push the boundaries of knowledge, and earn a degree recognized globally and approved by the University Grants Commission (UGC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Impact Section */}
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
              Career Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Transform Your Career Path
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Educational Leadership Careers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Educational Leadership Careers</h3>
              <div className="grid gap-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900">Chief Academic Officer</h4>
                    <p className="text-gray-600 mt-2">₹91,00,000 – ₹1.32 Cr ($110K – $160K)</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900">University Dean</h4>
                    <p className="text-gray-600 mt-2">₹74,00,000 – ₹1.23 Cr ($90K – $150K)</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900">Director of Education</h4>
                    <p className="text-gray-600 mt-2">₹64,00,000 – ₹96,00,000 ($80K – $120K)</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900">School Principal</h4>
                    <p className="text-gray-600 mt-2">₹72,00,000 – ₹96,00,000 ($90K – $120K)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Administration Careers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Business Administration Careers</h3>
              <div className="grid gap-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900">Chief Executive Officer (CEO)</h4>
                    <p className="text-gray-600 mt-2">₹1.2 Cr – ₹2.4 Cr ($150K – $300K)</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900">Chief Financial Officer (CFO)</h4>
                    <p className="text-gray-600 mt-2">₹90L – ₹1.8 Cr ($120K – $220K)</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900">Management Consultant</h4>
                    <p className="text-gray-600 mt-2">₹70L – ₹1.5 Cr ($100K – $200K)</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900">Director of Strategy</h4>
                    <p className="text-gray-600 mt-2">₹60L – ₹1.2 Cr ($80K – $150K)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-4 mb-20 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">Why Pursue a Doctorate at GCA Group?</h3>
                  <p className="text-md mr-8">Our doctorate programs are designed to maximize your career impact through rigorous research, 
          executive-level networking, and flexible learning formats tailored for working professionals. 
          Gain both academic prestige and practical leadership tools to transform your industry.</p>
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

export default DoctrateDegree;