import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, GraduationCap, Calendar, BookOpen } from 'lucide-react';

const ServicePopup = ({ isOpen, onClose }) => {
  const services = [
    {
      icon: Award,
      title: 'Awards',
      description: 'Recognizing excellence across diverse fields globally'
    },
    {
      icon: GraduationCap,
      title: 'Honorary Doctorate',
      description: 'Prestigious recognition for distinguished societal contributions'
    },
    {
      icon: GraduationCap,
      title: 'Doctorate Degree',
      description: 'Advanced academic programs for aspiring professionals'
    },
    {
      icon: Calendar,
      title: 'Conference 2025',
      description: 'Groundbreaking research & networking opportunities'
    },
    {
      icon: Calendar,
      title: 'Conference 2026',
      description: 'Innovation showcase & collaborative opportunities'
    },
    {
      icon: BookOpen,
      title: 'Publications',
      description: 'Curated collection of scholarly works & research'
    }
  ];

  return (
    <div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2.0 } }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 1.0, bounce: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
            >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-900 to-yellow-700 p-8">
              <motion.button
                onClick={onClose}
                className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <div className="flex items-center justify-between">
                <img src="/images/Logo.png" alt="GCA Logo" className="w-16 h-16 object-contain" />
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex-1 text-center"
                >
                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-200 mb-3">
                    GCA Group
                  </h2>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    Empowering individuals through transformative education and recognitions
                  </p>
                </motion.div>
                <div className="w-16"></div> {/* Spacer to balance the logo */}
              </div>
            </div>

            {/* Services Grid */}
            <div className="p-6 grid md:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
                    <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-md">
                    <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicePopup;