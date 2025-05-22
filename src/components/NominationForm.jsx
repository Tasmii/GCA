import { useState } from 'react';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NominationForm = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    phoneNumber: '',
    email: '',
    state: '',
    city: '',
    sector: '',
    website: '',
    service: '',
    serviceOption: '',
    package: '',
    file: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2) newErrors.fullName = 'Name must be at least 2 characters';
    if (!formData.organizationName.trim() || formData.organizationName.length < 2) newErrors.organizationName = 'Organization name is required';
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 6) newErrors.phoneNumber = 'Valid phone number is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email address is required';
    if (!formData.state.trim() || formData.state.length < 2) newErrors.state = 'State is required';
    if (!formData.city.trim() || formData.city.length < 2) newErrors.city = 'City is required';
    if (formData.website && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(formData.website)) newErrors.website = 'Please enter a valid URL';
    if (!formData.sector) newErrors.sector = 'Please select a sector';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (formData.service && !formData.serviceOption) newErrors.serviceOption = 'Please select an option';
    if (formData.service === 'Awards' && !formData.package) newErrors.package = 'Please select a package';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const appendToExcel = async (data) => {
    try {
      const existingData = JSON.parse(localStorage.getItem('nominations') || '[]');
      const newEntry = {
        ...data,
        timestamp: new Date().toISOString()
      };
      const updatedData = [...existingData, newEntry];
      localStorage.setItem('nominations', JSON.stringify(updatedData));

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(updatedData);
      XLSX.utils.book_append_sheet(wb, ws, 'Nominations');
      XLSX.writeFile(wb, 'nominations.xlsx');
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
        setTimeout(() => {
          onClose();
          navigate('/');
        }, 1500);
        setFormData({
          fullName: '',
          organizationName: '',
          phoneNumber: '',
          email: '',
          address: '',
          state: '',
          city: '',
          gstin: '',
          sector: '',
          website: '',
          service: ''
        });
        onClose();
      } else {
        setSubmitStatus('error');
      }
      
      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="min-h-screen py-8 w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-2xl mt-90 w-full max-w-2xl my-8"
      >
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="inline-block mb-2 px-5 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm">
                Submit Your Nomination
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent">
                Submit Nomination
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mt-2" />
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-1"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Remove Address and GSTIN fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.organizationName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.organizationName && <p className="mt-1 text-sm text-red-500">{errors.organizationName}</p>}
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="gstin" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">Sector *</label>
                <select
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.sector ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Sector</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Finance">Finance</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Other">Other</option>
                </select>
                {errors.sector && <p className="mt-1 text-sm text-red-500">{errors.sector}</p>}
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="https://example.com"
                />
                {errors.website && <p className="mt-1 text-sm text-red-500">{errors.website}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Which service are you interested in? *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value="Honorary doctorate"
                    checked={formData.service === 'Honorary doctorate'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">Honorary Doctorate</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value="Doctorate Degree"
                    checked={formData.service === 'Doctorate Degree'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">Doctorate Degree</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value="Publishing"
                    checked={formData.service === 'Publishing'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">Publishing</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value="Awards"
                    checked={formData.service === 'Awards'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">Awards</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value="Conference"
                    checked={formData.service === 'Conference'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">Conference</span>
                </label>
              </div>
              {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}

              {formData.service === 'Awards' && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="serviceOption" className="block text-sm font-medium text-gray-700 mb-1">Award Category *</label>
                    <select
                      id="serviceOption"
                      name="serviceOption"
                      value={formData.serviceOption}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.serviceOption ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Category</option>
                      <option value="category1">Start-Up Excellence Awards</option>
                      <option value="category2">Entrepreneurship & Business Awards</option>
                      <option value="category3">Technology & Innovation Awards</option>
                      <option value="category4">Education & Academia Awards</option>
                      <option value="category5">Lifetime Achievement in Medicine</option>
                    </select>
                    {errors.serviceOption && <p className="mt-1 text-sm text-red-500">{errors.serviceOption}</p>}
                  </div>
                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">Award Package *</label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.package ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Package</option>
                      <option value="package1">Standard</option>
                      <option value="package2">Supreme</option>
                      <option value="package3">Elite</option>
                      <option value="package4">Premium</option>
                      <option value="package5">Legends</option>
                    </select>
                    {errors.package && <p className="mt-1 text-sm text-red-500">{errors.package}</p>}
                  </div>
                </div>
              )}

              {formData.service === 'Doctorate Degree' && (
                <div className="mt-4">
                  <label htmlFor="serviceOption" className="block text-sm font-medium text-gray-700 mb-1">Doctorate Type *</label>
                  <select
                    id="serviceOption"
                    name="serviceOption"
                    value={formData.serviceOption}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.serviceOption ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select Type</option>
                    <option value="DBA">DBA</option>
                    <option value="Ed">Ed</option>
                    <option value="Regular">Regular</option>
                  </select>
                  {errors.serviceOption && <p className="mt-1 text-sm text-red-500">{errors.serviceOption}</p>}
                </div>
              )}

              {formData.service === 'Publishing' && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="serviceOption" className="block text-sm font-medium text-gray-700 mb-1">Publishing Package *</label>
                    <select
                      id="serviceOption"
                      name="serviceOption"
                      value={formData.serviceOption}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.serviceOption ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Package</option>
                      <option value="basic">Basic Package</option>
                      <option value="standard">Standard Package</option>
                      <option value="premium">Premium Package</option>
                    </select>
                    {errors.serviceOption && <p className="mt-1 text-sm text-red-500">{errors.serviceOption}</p>}
                  </div>
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">Upload Document (Optional)</label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleChange}
                      accept=".pdf,.docx"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>
              )}

              {formData.service === 'Conference' && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="serviceOption" className="block text-sm font-medium text-gray-700 mb-1">Conference *</label>
                    <select
                      id="serviceOption"
                      name="serviceOption"
                      value={formData.serviceOption}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.serviceOption ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Conference</option>
                      <option value="2025">Conference 2025</option>
                      <option value="2026">Conference 2026</option>
                    </select>
                    {errors.serviceOption && <p className="mt-1 text-sm text-red-500">{errors.serviceOption}</p>}
                  </div>
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">Upload Paper (Optional)</label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleChange}
                      accept=".pdf,.docx"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 font-semibold border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-500/50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Nomination'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="text-center text-green-600 bg-green-50 p-4 rounded-lg">
                Nomination submitted successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center text-red-600 bg-red-50 p-4 rounded-lg">
                Error submitting nomination. Please try again.
              </div>
            )}
          </form>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default NominationForm;