import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-8 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center"
        >
          <div className="col-span-1 md:col-span-3 flex flex-col items-center">
            <h5 className="text-2xl font-semibold mb-8">Connect With Us</h5>
            <div className="flex space-x-6 mb-8">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61575929525297"
                whileHover={{ scale: 1.1 }}
                className="h-12 w-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-600/20"
              >
                <Facebook className="h-6 w-6 text-blue-900" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="h-12 w-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-600/20"
              >
                <Twitter className="h-6 w-6 text-blue-900" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/feed/?trk=onboarding-landing"
                whileHover={{ scale: 1.1 }}
                className="h-12 w-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-600/20"
              >
                <Linkedin className="h-6 w-6 text-blue-900" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com"
                whileHover={{ scale: 1.1 }}
                className="h-12 w-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-600/20"
              >
                <Instagram className="h-6 w-6 text-blue-900" />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8 border-t border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-white/90 text-center md:text-left text-lg">&copy; GCA Group. All rights reserved.</p>
            <p className="text-white/90 text-center md:text-right text-lg">
            Co-powered by Global Computing and AI University
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer