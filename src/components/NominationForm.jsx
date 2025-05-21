import { useState } from 'react';
import * as XLSX from 'xlsx';

const NominationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
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
    doctorate: '',
    forbes: ''
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
    if (!formData.address.trim() || formData.address.length < 5) newErrors.address = 'Address is required';
    if (!formData.state.trim() || formData.state.length < 2) newErrors.state = 'State is required';
    if (!formData.city.trim() || formData.city.length < 2) newErrors.city = 'City is required';
    if (formData.website && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(formData.website)) newErrors.website = 'Please enter a valid URL';
    if (!formData.sector) newErrors.sector = 'Please select a sector';
    if (!formData.doctorate) newErrors.doctorate = 'Please select an option';
    if (!formData.forbes) newErrors.forbes = 'Please select an option';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
          doctorate: '',
          forbes: ''
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Submit Nomination</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
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
              <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
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
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
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

            <div>
              <label htmlFor="gstin" className="block text-sm font-medium text-gray-700 mb-1">GSTIN (Optional)</label>
              <input
                type="text"
                id="gstin"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Honorary Doctorate Interest *</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="doctorate"
                    value="Yes"
                    checked={formData.doctorate === 'Yes'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="doctorate"
                    value="No"
                    checked={formData.doctorate === 'No'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
              {errors.doctorate && <p className="mt-1 text-sm text-red-500">{errors.doctorate}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Forbes Recognition Interest *</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="forbes"
                    value="Yes"
                    checked={formData.forbes === 'Yes'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="forbes"
                    value="No"
                    checked={formData.forbes === 'No'}
                    onChange={handleChange}
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
              {errors.forbes && <p className="mt-1 text-sm text-red-500">{errors.forbes}</p>}
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
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
    </div>
  );
};

export default NominationForm;