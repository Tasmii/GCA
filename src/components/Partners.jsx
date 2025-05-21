import { motion } from 'framer-motion';
import { Building2, Handshake, Users } from 'lucide-react';

const Partners = () => {
  const partners = [
    { name: 'Wilmington Metropolitan University', logo: 'university-bg.svg' },
    { name: 'Hawkins University', logo: 'university-bg.svg' },
    { name: 'Oxford International College', logo: 'university-bg.svg' },
    { name: 'American Merit Council', logo: 'university-bg.svg' },
    { name: 'NIILM University', logo: 'university-bg.svg' },
    { name: 'United Nations Uzbekistan', logo: 'university-bg.svg' }
  ];

  const collaborators = [
    { name: 'Eduqua Certified' },
    { name: '5 Star QS Rating' },
    { name: 'ACBSP Member' },
    { name: 'BGA MP' },
    { name: 'IACBE Education' }
  ];

  const members = [
    { name: 'UN PRME Member' },
    { name: 'UN PRME Member' }
  ];

  return (
    <>
      {/* Partners Section */}
      <section className="py-10 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
              Our Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Sponsors & Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We are proud to collaborate with leading organizations that share our vision for excellence and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="flex flex-col items-center gap-4 p-6">
                  <Building2 className="w-16 h-16 text-blue-900" />
                  <h3 className="text-xl font-semibold text-gray-800 text-center">{partner.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
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
              Collaborations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Accreditation & Collaboration
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We are proud to collaborate with leading organizations that share our vision for excellence and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="flex flex-col items-center gap-4 p-6">
                  <Handshake className="w-16 h-16 text-blue-900" />
                  <h3 className="text-xl font-semibold text-gray-800 text-center">{collaborator.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
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
              Membership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Membership & Representation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We welcome dedicated individuals and groups whose values resonate with our mission of excellence and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                <div className="flex flex-col items-center gap-4 p-6">
                  <Users className="w-16 h-16 text-blue-900" />
                  <h3 className="text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;