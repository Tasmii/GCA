import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ServicePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show popup on direct homepage visits
    if (location.pathname === '/') {
      const hasVisited = sessionStorage.getItem('hasVisitedHomepage');
      if (!hasVisited) {
        setIsOpen(true);
        sessionStorage.setItem('hasVisitedHomepage', 'true');
      }
    }
  }, [location.pathname]);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2.0 } }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 1.0, bounce: 0.2 }}
              className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.button
                onClick={onClose}
                className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <video
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
              >
                <source src="/Videos/Video Popup.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicePopup;