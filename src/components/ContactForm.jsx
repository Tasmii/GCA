import { useState } from 'react';
import * as XLSX from 'xlsx';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const appendToExcel = async (data) => {
    try {
      // Create a new workbook
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet([{
        ...data,
        timestamp: new Date().toISOString()
      }]);
      XLSX.utils.book_append_sheet(wb, ws, 'Contacts');
      
      // Save the file
      XLSX.writeFile(wb, 'contacts.xlsx');
      return true;
    } catch (error) {
      console.error('Error saving to Excel:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus('');
      
      const success = await appendToExcel(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
      
      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="h-5 w-5 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaEnvelope className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-600">gcauniversitycollege@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaPhone className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-600">+919815979159</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-gray-600">A.O. SCO-19, Zirakpur-140603</p>
                    <p className="text-gray-600">Chandigarh-Delhi Expressway</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 italic">"We look forward to connecting with you and discussing how we can help achieve your goals."</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-blue-900 to-yellow-600" />
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300
                      ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-shown:border-gray-300`}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 text-sm text-gray-600 transition-all duration-300 group-focus-within:text-blue-900"
                  >
                    Name
                  </label>
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300
                      ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-shown:border-gray-300`}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 text-sm text-gray-600 transition-all duration-300 group-focus-within:text-blue-900"
                  >
                    Email
                  </label>
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300
                      ${errors.subject ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-shown:border-gray-300`}
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-3 -top-6 text-sm text-gray-600 transition-all duration-300 group-focus-within:text-blue-900"
                  >
                    Subject
                  </label>
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder=" "
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300
                      ${errors.message ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-shown:border-gray-300`}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 text-sm text-gray-600 transition-all duration-300 group-focus-within:text-blue-900"
                  >
                    Message
                  </label>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-yellow-500/50 active:scale-95
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                      flex items-center justify-center gap-2`}
                  >
                    <span>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="text-center text-green-600 font-medium bg-green-100 p-4 rounded-lg">
                    Thank you for your message. We'll get back to you soon!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-center text-red-600 font-medium bg-red-100 p-4 rounded-lg">
                    There was an error submitting your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;