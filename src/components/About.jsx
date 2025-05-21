import { motion } from 'framer-motion';
import { Sparkles, Globe, Award, Users } from 'lucide-react';

const About = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
            About GCAU GROUP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Empowering Global Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
        </motion.div>

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
                  GCAU GROUP is a pioneer in education since 2022 committed to academic innovation, global engagement, and societal impact. We strive to empower individuals through accessible and transformative education, combining quality learning experiences with ethical leadership and community service.
                </p>
                
                <p className="text-gray-600 mb-4">
                  Our programs are crafted to meet the evolving needs of modern learners—providing flexibility, affordability, and practical relevance through cutting-edge platforms and global partnerships. GCAU GROUP remains devoted to building a worldwide community of learners and leaders who aspire to drive meaningful change.
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
                  GCAU GROUP's mission is to empower individuals through transformative, globally recognized education. We are dedicated to fostering innovation, leadership, and lifelong learning by delivering high-quality academic, publishing, and professional development programs.
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
      </div>
    </section>
  );
};

export default About;