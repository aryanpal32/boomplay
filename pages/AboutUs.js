import React from 'react';
import Image from 'next/image';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boom Play Media",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://boomplay.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplay.com'}/images/logo.png`,
    "description": "Film production company creating  web series and financial education content",
    "founder": {
      "@type": "Person",
      "name": "Aryan Pal"
    }
  };

  return (
    <>
    <Header / >
      <SEO 
        title="About Boom Play - Our Story & Mission"
        description="Discover Boom Play Media - a production company merging financial education with cinematic storytelling through web series like Price Action"
        keywords="film production, financial education, web series, Aryan Pal, Boom Play Media"
        ogImage="/images/og-about.jpg"
        structuredData={structuredData}
      />

      {/* Company Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-950 text-white py-20 px-6 md:px-20 overflow-hidden ">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 ">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-400 filter blur-3xl "></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 mt-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="relative inline-block">
                <span className="absolute -inset-4 bg-blue-600 rounded-xl opacity-20"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 ">
                  About Boom Play
                </span>
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Company intro card */}
            <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Who We Are
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                <span className="font-bold text-white">Boom Play Media</span> is a dynamic film production company creating bold web series, films, and advertising content that pushes creative boundaries while educating audiences.
              </p>
            </div>

            {/* Price Action card */}
            <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Price Action
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Our debut series is a psychological thriller exploring the dark side of stock trading - where obsession, survival, and human psyche collide in high-pressure markets.
              </p>
            </div>

            {/* Vision card */}
            <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Our Vision
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Founded by <span className="font-bold text-white">Aryan Pal</span>, we blend real-world financial themes with cinematic storytelling to create content that educates, entertains, and provokes thought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white text-blue-900 py-16 px-6 md:px-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                The Visionary Behind Boom Play
              </span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Founder Image */}
            <div className="w-full md:w-2/5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 group-hover:rotate-0 transition duration-500">
                <Image 
                  src="/founder.jpeg" 
                  alt="Aryan Pal - Founder of Boom Play" 
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h4 className="text-white text-xl font-bold">Aryan Pal</h4>
                  <p className="text-blue-200">Founder & Creative Director</p>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="w-full md:w-3/5 space-y-6">
              {/* <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                From ₹10 Crore Portfolio to Financial Educator
              </h3> */}
              
              <p className="text-lg leading-relaxed">
                Aryan Pal isn&apos;t your typical entrepreneur. A <span className="font-semibold text-blue-600">self-made trader</span>, <span className="font-semibold text-blue-600">award-winning filmmaker</span>, and <span className="font-semibold text-blue-600">passionate educator</span>, he&apos;s on a mission to democratize financial literacy through compelling storytelling.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 mb-3">Featured In:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Ahmedabad Mirror",
                      excerpt: "From Rookie to ₹10 Crore Portfolio",
                      link: "https://www.ahmedabadmirror.com/from-rookie-to-10-crore--the-inspiring-portfolio-journey-of-aryan-pal/81888779.html"
                    },
                    {
                      title: "Borok Times",
                      excerpt: "Revolutionizing Financial Education",
                      link: "https://boroktimes.com/aryan-pal-a-young-day-trader-revolutionizing-financial-education/"
                    },
                    {
                      title: "Mid-Day",
                      excerpt: "Free Market Education Movement",
                      link: "https://www.mid-day.com/amp/buzz/article/revolutionizing-financial-literacy-how-aryan-pal-is-offering-free-market-education-5488"
                    }
                  ].map((media, index) => (
                    <a 
                      key={index}
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-blue-100 hover:border-blue-300 group"
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                          <span className="text-blue-600">📰</span>
                        </div>
                        <h5 className="font-semibold text-blue-800 group-hover:text-blue-600">{media.title}</h5>
                      </div>
                      <p className="text-sm text-blue-600">{media.excerpt}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">🎓</span>
                  Financial Education Mission
                </h4>
                <p className="text-blue-700 mb-4">
                  Despite building a ₹10 Crore portfolio, Aryan chose to focus on free financial education, teaching 3,000+ learners through:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">📺</span>
                    <div>
                      <h5 className="font-semibold text-blue-800">Boom Talk</h5>
                      <p className="text-blue-600 text-sm">Educational content and trading psychology</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">📺</span>
                    <div>
                      <h5 className="font-semibold text-blue-800">Boom Pulse</h5>
                      <p className="text-blue-600 text-sm">Live market analysis and real-time breakdowns</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
                <h4 className="font-bold text-xl mb-3 relative z-10">Creative Vision</h4>
                <p className="relative z-10">
                  Aryan writes, directs, and stars in <span className="font-semibold">&quot;Price Action&quot;</span> — Boom Play&apos;s web series merging financial education with psychological thriller storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;