import { motion } from 'framer-motion';
import { Award, CheckCircle2, ArrowRight, Building2, Users, Handshake } from 'lucide-react';
import { useNomination } from '../contexts/NominationContext'

const HonoraryDoctorate = () => {
  const { openNominationForm } = useNomination()
  const comparisonData = [
    {
      aspect: 'Purpose',
      honorary: 'Awarded to honor achievements or contributions in a field or society',
      regular: 'Earned through original academic research and scholarly work'
    },
    {
      aspect: 'Eligibility',
      honorary: 'No formal academic qualifications required',
      regular: "Requires a master's degree (usually) and prior academic credentials"
    },
    {
      aspect: 'Process',
      honorary: 'Conferred by nomination and approval from a university or council',
      regular: 'Involves coursework, comprehensive exams, research, and dissertation'
    },
    {
      aspect: 'Duration',
      honorary: 'Not time-bound; awarded at ceremonies',
      regular: 'Typically takes 3–7 years to complete'
    },
    {
      aspect: 'Academic Value',
      honorary: 'Symbolic and honorary; does not confer academic or teaching rights',
      regular: 'Recognized as the highest academic qualification in a field'
    },
    {
      aspect: 'Title Usage',
      honorary: '"Dr." usage often discouraged outside the awarding institution',
      regular: '"Dr." title formally recognized in academia and professional settings'
    },
    {
      aspect: 'Research Requirement',
      honorary: 'No research or thesis required',
      regular: 'Requires original research and a dissertation defense'
    },
    {
      aspect: 'CV Placement',
      honorary: 'Listed under Awards or Honors',
      regular: 'Listed under Education or Academic Qualifications'
    },
    {
      aspect: 'Career Impact',
      honorary: 'Mostly ceremonial, but enhances public image or recognition',
      regular: 'Required for academic and research careers'
    }
  ];

  const whyHonoraryPoints = [
    {
      title: 'To Recognize Excellence',
      description: 'It honors individuals who have made significant achievements in areas like education, science, arts, business, social service, or public leadership.'
    },
    {
      title: 'To Inspire Society',
      description: 'Honoring exemplary individuals serves as a source of inspiration for students, educators, and the broader community.'
    },
    {
      title: 'To Strengthen Institutional Values',
      description: 'By associating with individuals who uphold high standards of service, innovation, or integrity, the university reinforces its own mission and values.'
    },
    {
      title: 'To Promote Public Good',
      description: 'It acknowledges those who have positively impacted society, driven social change, or contributed to global development, aligning with the university\'s commitment to community service and sustainability.'
    },
    {
      title: 'To Foster Global Partnerships',
      description: 'Honorees often become ambassadors of the institution, helping to build networks, collaborations, and international goodwill.'
    },
    {
      title: 'To Celebrate Lifelong Learning',
      description: 'It emphasizes that impactful learning and leadership can happen beyond the classroom, honoring practical knowledge, experience, and wisdom.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/Videos/Video 1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              Honoring Excellence in Leadership & Innovation
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Honorary</span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Doctorate
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Recognizing distinguished individuals who have made exceptional contributions to their fields and society
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
            <div className="inline-block mb-4 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
              About Honorary Doctorate
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Empowering Global Leaders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
          </motion.div>
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-2"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="h-8 w-8 text-blue-900" />
                        <h3 className="text-2xl font-bold text-gray-800">Excellence in Recognition</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        GCA GROUP takes pride in recognizing outstanding contributions to society by conferring Honorary Doctorates upon individuals who have demonstrated exceptional achievements in their respective fields. These symbolic academic honors serve to inspire others and underscore our commitment to celebrating excellence.
                      </p>
                      
                      <p className="text-gray-600 mb-4">
                        Our Honorary Doctorate program celebrates visionaries, innovators, and leaders who have made significant impacts in areas such as education, research, business, arts, and social service. Through this recognition, we aim to inspire the next generation of leaders and foster a global community dedicated to positive change.
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
                        <CheckCircle2 className="h-6 w-6 text-blue-900" />
                        <h3 className="text-xl font-bold text-gray-800">Program Highlights</h3>
                      </div>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-900 rounded-full" />
                          Global Recognition
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-900 rounded-full" />
                          Distinguished Ceremony
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-900 rounded-full" />
                          Networking Opportunities
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-900 rounded-full" />
                          Media Coverage
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-900 rounded-full" />
                          Alumni Network Access
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
        </div>
      </section>

      {/* Why Honorary Doctorate Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Why Honorary Doctorate?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              At GCA University, the Honorary Doctorate is more than a title—it's a symbol of gratitude, respect, and inspiration. It celebrates those whose lives and work have elevated the world through dedication, innovation, and service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyHonoraryPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                
                <div className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
                Program Comparison
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
                Honorary vs Regular Doctorate
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full mb-8" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
                Understanding the key differences between Honorary and Regular Doctorate degrees
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                      <th className="p-4 text-left font-semibold">Aspect</th>
                      <th className="p-4 text-left font-semibold">Honorary Doctorate</th>
                      <th className="p-4 text-left font-semibold">Regular Ph.D. (Doctor of Philosophy)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-yellow-100 transition-colors duration-200`}
                      >
                        <td className="p-4 border-t border-gray-200 font-semibold text-blue-900">{row.aspect}</td>
                        <td className="p-4 border-t border-gray-200">{row.honorary}</td>
                        <td className="p-4 border-t border-gray-200">{row.regular}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">Why Pursue an Honorary Doctorate?</h3>
                  <p className="text-md mr-8">This prestigious recognition celebrates your lifetime achievements while connecting you with a global network of visionaries. It serves as both an honor for past accomplishments and a platform to amplify your future impact.</p>
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
    </div>
  );
};

export default HonoraryDoctorate;