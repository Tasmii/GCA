import { useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <section id="about" className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <motion.div 
          className="mb-16 text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            About GCAU GROUP
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            GCAU GROUP is a pioneer in education since 2022 committed to academic innovation, global engagement, and societal impact. We strive to empower individuals through accessible and transformative education, combining quality learning experiences with ethical leadership and community service. Our programs are crafted to meet the evolving needs of modern learners—providing flexibility, affordability, and practical relevance through cutting-edge platforms and global partnerships. GCAU GROUP remains devoted to building a worldwide community of learners and leaders who aspire to drive meaningful change.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="p-8 rounded-lg backdrop-blur-md bg-white/10"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Mission</h3>
            <p className="text-lg leading-relaxed">
              GCAU GROUP's mission is to empower individuals through transformative, globally recognized education. We are dedicated to fostering innovation, leadership, and lifelong learning by delivering high-quality academic, publishing, and professional development programs. Our goal is to create ethical global leaders who contribute meaningfully to society and industry.
            </p>
          </motion.div>

          <motion.div 
            className="p-8 rounded-lg backdrop-blur-md bg-white/10"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Vision</h3>
            <p className="text-lg leading-relaxed">
              To be a globally respected institution that bridges education, recognition, and innovation—empowering learners, authors, and leaders to thrive beyond boundaries. GCAU GROUP envisions a world where access to quality education and global acknowledgment is a right, not a privilege.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <h4 className="text-xl font-bold mb-3 text-yellow-300">{value.title}</h4>
                <p className="text-gray-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;