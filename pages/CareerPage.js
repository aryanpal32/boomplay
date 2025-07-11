import { useState } from 'react';
import Head from 'next/head';

export default function CareerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    aboutYou: '',
    email: '',
    phone: '',
    position: '',
    otherPosition: '',
  });
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const positions = [
    'Actor',
    'Cinematographer',
    'Photographer',
    'Director of Photography (DOP)',
    'Production Manager',
    'Sound Engineer',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });
    if (resume) {
      formPayload.append('resume', resume);
    }

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: formPayload,
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        aboutYou: '',
        email: '',
        phone: '',
        position: '',
        otherPosition: '',
      });
      setResume(null);
    } catch (error) {
      setSubmitStatus(`error: ${error.message}`);
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Join Our Creative Team</title>
      </Head>
      
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        {/* Header and description */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Join Our Creative Team</h1>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re always on the lookout for passionate and talented individuals in the film and media industry. 
            Whether you&apos;re in front of the camera or behind it, if you&apos;ve got the drive — we want to hear from you!
          </p>
        </div>

        {/* Application notice */}
        <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold mb-2">📋 Apply Now</h2>
          <p>Fill out the form below to apply for a role with us. We&apos;ll get in touch with suitable candidates shortly.</p>
        </div>

        {/* Status messages */}
        {submitStatus?.startsWith('success') && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
            Thank you for your application! We&apos;ll review your information and get back to you soon.
          </div>
        )}

        {submitStatus?.startsWith('error') && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
            {submitStatus.replace('error: ', '')}
          </div>
        )}

        {/* Main form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">👤</span> Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="16"
                  max="99"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <div className="flex flex-wrap gap-4">
                {['Male', 'Female', 'Other', 'Prefer not to say'].map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={option}
                      checked={formData.gender === option}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* About You */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🧾</span> About You
            </h2>
            
            <div>
              <label htmlFor="aboutYou" className="block text-sm font-medium text-gray-700 mb-1">
                Tell us about yourself
              </label>
              <textarea
                id="aboutYou"
                name="aboutYou"
                rows={6}
                value={formData.aboutYou}
                onChange={handleChange}
                placeholder="Your short bio, experience, goals, etc."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">📞</span> Contact Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Position */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">🎭</span> Position You&apos;re Applying For *
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {positions.map((pos) => (
                  <label key={pos} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="position"
                      value={pos}
                      checked={formData.position === pos}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{pos}</span>
                  </label>
                ))}
              </div>

              {formData.position === 'Other' && (
                <div className="mt-4">
                  <label htmlFor="otherPosition" className="block text-sm font-medium text-gray-700 mb-1">
                    Please specify *
                  </label>
                  <input
                    type="text"
                    id="otherPosition"
                    name="otherPosition"
                    value={formData.otherPosition}
                    onChange={handleChange}
                    required={formData.position === 'Other'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Resume Upload */}
          <div className="pb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="mr-2">📎</span> Upload Resume / Portfolio (Optional)
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                File (PDF, DOCX, or image files)
              </label>
              <div className="mt-1 flex items-center">
                <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Choose File
                  <input
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                </label>
                <span className="ml-4 text-sm text-gray-500">
                  {resume ? resume.name : 'No file chosen'}
                </span>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="pt-4">
            <p className="text-sm text-gray-500 mb-6">
              <span className="font-semibold">📝 Note:</span> Please make sure your contact information is correct. 
              We&apos;ll contact shortlisted applicants via email or phone number. Fields marked with * are required.
            </p>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}