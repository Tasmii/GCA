import { useState } from 'react';
import * as XLSX from 'xlsx';

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
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">CONTACT US</h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300
                  ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-shown:border-gray-300`}
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-6 text-sm text-gray-600 transition-all duration-300 group-focus-within:text-yellow-400"
              >
                Name
              </label>
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300
                  ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-shown:border-gray-300`}
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-6 text-sm text-gray-600 transition-all duration-300 group-focus-within:text-yellow-400"
              >
                Email
              </label>
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div className="relative group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder=" "
                className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300
                  ${errors.subject ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-shown:border-gray-300`}
              />
              <label
                htmlFor="subject"
                className="absolute left-3 -top-6 text-sm text-gray-600 transition-all duration-300 group-focus-within:text-yellow-400"
              >
                Subject
              </label>
              {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
            </div>

            <div className="relative group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder=" "
                className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300
                  ${errors.message ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-shown:border-gray-300`}
              />
              <label
                htmlFor="message"
                className="absolute left-3 -top-6 text-sm text-gray-600 transition-all duration-300 group-focus-within:text-yellow-400"
              >
                Message
              </label>
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-yellow-500 hover:to-yellow-600'}
                  relative overflow-hidden group`}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="text-center text-green-400 font-medium bg-green-400/10 p-4 rounded-lg border border-green-400/20">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center text-red-400 font-medium bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                There was an error submitting your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;