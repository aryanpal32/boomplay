// import React from 'react';
// import Image from 'next/image';

// const AboutUs = () => (
//   <section className="relative bg-gradient-to-br from-blue-800 to-blue-950 text-white py-20 px-6 md:px-20 overflow-hidden">
//     {/* Decorative elements */}
//     <div className="absolute top-0 left-0 w-full h-full opacity-5">
//       <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-400 filter blur-3xl"></div>
//       <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
//     </div>


//     <div className="max-w-6xl mx-auto relative z-10">
//       {/* Animated title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-6xl font-bold mb-6">
//           <span className="relative inline-block">
//             <span className="absolute -inset-4 bg-blue-600 rounded-xl opacity-20"></span>
//             <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
//               About Boom Play Media
//             </span>
//           </span>
//         </h2>
//         <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-transparent mx-auto"></div>
//       </div>

//       {/* Content with animated cards */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//         {/* Company intro card */}
//         <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2">
//           <div className="flex items-center mb-4">
//             <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//               </svg>
//             </div>
//             <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
//               Who We Are
//             </h3>
//           </div>
//           <p className="text-blue-100 leading-relaxed">
//             <span className="font-bold text-white">Boom Play Media</span> is a dynamic film production company creating bold web series, films, and advertising content that pushes creative boundaries.
//           </p>
//         </div>

//         {/* Price Action card */}
//         <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2">
//           <div className="flex items-center mb-4">
//             <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
//               </svg>
//             </div>
//             <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
//               Price Action/Upcoming project
//             </h3>
//           </div>
//           <p className="text-blue-100 leading-relaxed">
//             Our debut series is a psychological thriller exploring the dark side of stock trading - where obsession, survival, and human psyche collide in high-pressure markets.
//           </p>
//         </div>

//         {/* Vision card */}
//         <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2">
//           <div className="flex items-center mb-4">
//             <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//               </svg>
//             </div>
//             <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
//               Our Vision
//             </h3>
//           </div>
//           <p className="text-blue-100 leading-relaxed">
//             Founded by <span className="font-bold text-white">Aryan Pal</span>, we blend real-world themes with cinematic storytelling to create content that educates, entertains, and provokes thought.
//           </p>
//         </div>
//       </div>

//       {/* Enhanced CTA */}
//       <div className="text-center mt-12">
//         <a 
//           href="#projects" 
//           className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-blue-900 rounded-full group"
//         >
//           <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white to-blue-200 group-hover:from-blue-200 group-hover:to-white transition-all duration-300"></span>
//           <span className="absolute top-0 left-0 w-full h-1 bg-blue-400 group-hover:h-full group-hover:bg-blue-500 transition-all duration-500 opacity-60 group-hover:opacity-100"></span>
//           <span className="relative flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//             </svg>
//             Discover Our Projects
//           </span>
//         </a>
//       </div>
//     </div>

 
//   </section>
// );

// export default AboutUs;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => (
  <section className="relative bg-gradient-to-br from-blue-800 to-blue-950 text-white py-20 px-6 md:px-20 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5">
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-400 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Animated title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="relative inline-block">
            <span className="absolute -inset-4 bg-blue-600 rounded-xl opacity-20"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              About Boom Play Media
            </span>
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-transparent mx-auto"></div>
      </div>

      {/* Content with animated cards */}
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
            <span className="font-bold text-white">Boom Play Media</span> is a dynamic film production company creating bold web series, films, and advertising content that pushes creative boundaries.
          </p>
        </div>

        {/* Price Action card */}
        <Link 
          href="/projects/price-action" 
          className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Price Action/ <span>Upcoming Project</span>
            </h3>
          </div>
          <p className="text-blue-100 leading-relaxed">
            A psychological thriller exploring the dark side of stock trading, following Aryan&apos;s journey from small-town dreamer to market-obsessed trader.
          </p>
        </Link>

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
            Founded by <span className="font-bold text-white">Aryan Pal</span>, we blend real-world themes with cinematic storytelling to create content that educates, entertains, and provokes thought.
          </p>
        </div>
      </div>

      {/* Enhanced CTA */}
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-blue-900 rounded-full group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white to-blue-200 group-hover:from-blue-200 group-hover:to-white transition-all duration-300"></span>
          <span className="absolute top-0 left-0 w-full h-1 bg-blue-400 group-hover:h-full group-hover:bg-blue-500 transition-all duration-500 opacity-60 group-hover:opacity-100"></span>
          <span className="relative flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Discover Our Projects
          </span>
        </Link>
      </div>
    </div>
  </section>
);

export default AboutUs;