import { useState } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://boomplay.com";
  const currentPageUrl = `${siteUrl}/ContactPage`;

  // Enhanced Structured Data
  const structuredData = [
  // Organization Schema (for logo and brand identity)
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boom Play Media",
    "url": siteUrl,
    "logo": `${siteUrl}/boomplaylogo.png`,
    "description": "Film production company creating bold web series and financial education content",
    "foundingDate": "2020", // Add actual founding year
    "founder": {
      "@type": "Person",
      "name": "Aryan Pal",
      "jobTitle": "Founder & Creative Director",
      "image": `${siteUrl}/founder.jpeg`,
      "sameAs": [
        "https://www.linkedin.com/in/aryan-pal",
        "https://twitter.com/aryanpal"
      ]
    },
    "sameAs": [
      "https://www.facebook.com/boomplaymedia",
      "https://www.instagram.com/boomplaymedia",
      // "https://www.youtube.com/@boomplaymedia"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    }
  },
  
  // Breadcrumb Schema
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": currentPageUrl
      }
    ]
  },
  
  // WebPage Schema
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Boom Play - Our Story & Mission",
    "description": "Discover Boom Play Media - a production company merging financial education with cinematic storytelling through web series like Price Action",
    "url": currentPageUrl,
    "primaryImageOfPage": `${siteUrl}/founder.jpeg`,
    "publisher": {
      "@type": "Organization",
      "name": "Boom Play Media",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/boomplaylogo.png`
      }
    }
  },
  
  // Person Schema for Aryan Pal
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aryan Pal",
    "jobTitle": "Founder & Creative Director",
    "image": `${siteUrl}/founder.jpeg`,
    "description": "Award-winning filmmaker and financial educator, founder of Boom Play Media",
    "url": `${siteUrl}/AboutUs`,
    "sameAs": [
      "https://www.linkedin.com/in/aryan-pal",
      "https://twitter.com/aryanpal",
      "https://www.ahmedabadmirror.com/from-rookie-to-10-crore--the-inspiring-portfolio-journey-of-aryan-pal/81888779.html"
    ],
    "knowsAbout": [
      "Film Production",
      "Financial Markets",
      "Trading Psychology",
      "Content Creation"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Financial Market Certification",
      "url": "https://example.com/certification"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Film Institute"
    }
  },
  
  // VideoObject Schema for Price Action
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Price Action Web Series",
    "description": "Psychological thriller exploring the dark side of stock trading",
    "thumbnailUrl": `${siteUrl}/priceaction-thumbnail.jpg`,
    "uploadDate": "2025-05-15", // Add actual date
    "duration": "PT1H30M", // Example duration
    "contentUrl": `${siteUrl}/price-action`,
    "embedUrl": `${siteUrl}/embed/price-action`,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 50000 // Update with actual views
    },
    "actor": {
      "@type": "Person",
      "name": "Aryan Pal"
    },
    "director": {
      "@type": "Person",
      "name": "Aryan Pal"
    }
  },

  {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Boom Play Media",
  "image": `${siteUrl}/boomplaylogo.png`,
  "@id": `${siteUrl}#organization`,
  "url": siteUrl,
  // "telephone": "+91-",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-704, Crystal Plaza Link Road,  Opp. Infinity Mall, Andheri West",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400053",
    "addressCountry": "IN"
  },
  // "geo": {
  //   "@type": "GeoCoordinates",
  //   // "latitude": 19.0760,
  //   // "longitude": 72.8777
  // },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
}
];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Submission failed. Please try again.');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus(`error: ${error.message}`);
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <SEO 
        title="Contact Boom Play Media | Film Production & Creative Services"
        description="Get in touch with Boom Play Media for film production, creative services, and media inquiries. Contact our team via email, phone or visit our Mumbai office."
        keywords="contact Boom Play Media, film production company Mumbai, media production contact, creative services inquiry, Price Action web series, Aryan Pal contact"
        ogImage={`${siteUrl}/boomplaylogo.png`}
        structuredData={structuredData}
        canonicalUrl={currentPageUrl}
          publishedTime="2023-01-15T09:00:00+05:30" // When this page was published
  author="Aryan Pal"
      />
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 mt-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions or want to discuss a project? Reach out to our team and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {submitStatus?.startsWith('success') && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}

          {submitStatus?.startsWith('error') && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
              {submitStatus.replace('error: ', '')}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

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

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Project Collaboration">Project Collaboration</option>
                <option value="Media Inquiry">Media Inquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-1 text-gray-500">Boomplaymedia@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-1 text-gray-500">+91 727-601-1446</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Office</h3>
              <p className="mt-1 text-gray-500">C-704, Crystal Plaza Link Road,
  Opp. Infinity Mall, Andheri West,
  Mumbai – 400053</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}