// import React from 'react';
// import Image from 'next/image';

// const AboutFounder = () => (
//   <section className="bg-gradient-to-br from-blue-50 to-white text-blue-900 py-16 px-6 md:px-20 relative overflow-hidden">
//     {/* Decorative elements */}
//     <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
//     <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-10"></div>
    
//     <div className="max-w-6xl mx-auto relative z-10">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
//             The Visionary Behind Boom Play
//           </span>
//         </h2>
//         <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center gap-12">
//         {/* Founder Image with creative frame */}
//         <div className="w-full md:w-2/5 relative group">
//           <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
//           <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 group-hover:rotate-0 transition duration-500">
//             <img 
//               src="/founder.jpeg" 
//               alt="Aryan Pal" 
//               className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
//               <h4 className="text-white text-xl font-bold">Aryan Pal</h4>
//               <p className="text-blue-200">Founder & Creative Director</p>
//             </div>
//           </div>
//         </div>

//         {/* Founder Bio */}
//         <div className="w-full md:w-3/5 space-y-6">
//           <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
//             From ₹10 Crore Portfolio to Financial Educator
//           </h3>
          
//           <p className="text-lg leading-relaxed">
//             Aryan Pal isn't your typical entrepreneur. A <span className="font-semibold text-blue-600">self-made trader</span>, <span className="font-semibold text-blue-600">award-winning filmmaker</span>, and <span className="font-semibold text-blue-600">passionate educator</span>, he's on a mission to democratize financial literacy through compelling storytelling.
//           </p>
          
//           <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
//             <h4 className="font-bold text-blue-800 mb-3">Featured In:</h4>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {[
//                 {
//                   title: "Ahmedabad Mirror",
//                   excerpt: "From Rookie to ₹10 Crore Portfolio",
//                   link: "https://www.ahmedabadmirror.com/from-rookie-to-10-crore--the-inspiring-portfolio-journey-of-aryan-pal/81888779.html"
//                 },
//                 {
//                   title: "Borok Times",
//                   excerpt: "Revolutionizing Financial Education",
//                   link: "https://boroktimes.com/aryan-pal-a-young-day-trader-revolutionizing-financial-education/"
//                 },
//                 {
//                   title: "Mid-Day",
//                   excerpt: "Free Market Education Movement",
//                   link: "https://www.mid-day.com/amp/buzz/article/revolutionizing-financial-literacy-how-aryan-pal-is-offering-free-market-education-5488"
//                 }
//               ].map((media, index) => (
//                 <a 
//                   key={index}
//                   href={media.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-blue-100 hover:border-blue-300 group"
//                 >
//                   <div className="flex items-center mb-2">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
//                       <span className="text-blue-600">📰</span>
//                     </div>
//                     <h5 className="font-semibold text-blue-800 group-hover:text-blue-600">{media.title}</h5>
//                   </div>
//                   <p className="text-sm text-blue-600">{media.excerpt}</p>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-400">
//               <h4 className="font-bold text-blue-800 mb-3 flex items-center">
//                 <span className="bg-blue-100 p-2 rounded-full mr-3">📺</span>
//                 Boom Talk
//               </h4>
//               <p className="text-blue-700">
//                 Educational content, mindset building, and trading psychology for 3,000+ global learners.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-400">
//               <h4 className="font-bold text-blue-800 mb-3 flex items-center">
//                 <span className="bg-blue-100 p-2 rounded-full mr-3">🎬</span>
//                 Boom Pulse
//               </h4>
//               <p className="text-blue-700">
//                 Live market stories and real-time breakdowns that make trading accessible.
//               </p>
//             </div>
//           </div>

//           <div className="bg-blue-600 text-white p-6 rounded-xl relative overflow-hidden">
//             <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
//             <h4 className="font-bold text-xl mb-3 relative z-10">Creative Vision</h4>
//             <p className="relative z-10">
//               Aryan is currently writing, directing, and starring in <span className="font-semibold">"Price Action"</span> — Boom Play Media's groundbreaking web series that merges financial education with psychological thriller storytelling.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default AboutFounder;

// import React from 'react';
// import Image from 'next/image';

// const AboutFounder = () => (
//   <section className="bg-gradient-to-br from-blue-50 to-white text-blue-900 py-16 px-6 md:px-20 relative overflow-hidden">
//     {/* Decorative elements */}
//     <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
//     <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-10"></div>
    
//     <div className="max-w-6xl mx-auto relative z-10">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
//             The Visionary Behind Boom Play
//           </span>
//         </h2>
//         <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center gap-12">
//         {/* Founder Image with creative frame */}
//         <div className="w-full md:w-2/5 relative group">
//           <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
//           <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 group-hover:rotate-0 transition duration-500">
//             <img 
//               src="/founder.jpeg" 
//               alt="Aryan Pal" 
//               className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
//               <h4 className="text-white text-xl font-bold">Aryan Pal</h4>
//               <p className="text-blue-200">Founder & Creative Director</p>
//             </div>
//           </div>
//         </div>

//         {/* Founder Bio */}
//         <div className="w-full md:w-3/5 space-y-6">
//           <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
//             From ₹10 Crore Portfolio to Financial Educator
//           </h3>
          
//           <p className="text-lg leading-relaxed">
//             Aryan Pal isn't your typical entrepreneur. A <span className="font-semibold text-blue-600">self-made trader</span>, <span className="font-semibold text-blue-600">award-winning filmmaker</span>, and <span className="font-semibold text-blue-600">passionate educator</span>, he's on a mission to democratize financial literacy through compelling storytelling.
//           </p>
          
//           <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
//             <h4 className="font-bold text-blue-800 mb-3">Featured In:</h4>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {[
//                 {
//                   title: "Ahmedabad Mirror",
//                   excerpt: "From Rookie to ₹10 Crore Portfolio",
//                   link: "https://www.ahmedabadmirror.com/from-rookie-to-10-crore--the-inspiring-portfolio-journey-of-aryan-pal/81888779.html"
//                 },
//                 {
//                   title: "Borok Times",
//                   excerpt: "Revolutionizing Financial Education",
//                   link: "https://boroktimes.com/aryan-pal-a-young-day-trader-revolutionizing-financial-education/"
//                 },
//                 {
//                   title: "Mid-Day",
//                   excerpt: "Free Market Education Movement",
//                   link: "https://www.mid-day.com/amp/buzz/article/revolutionizing-financial-literacy-how-aryan-pal-is-offering-free-market-education-5488"
//                 }
//               ].map((media, index) => (
//                 <a 
//                   key={index}
//                   href={media.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-blue-100 hover:border-blue-300 group"
//                 >
//                   <div className="flex items-center mb-2">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
//                       <span className="text-blue-600">📰</span>
//                     </div>
//                     <h5 className="font-semibold text-blue-800 group-hover:text-blue-600">{media.title}</h5>
//                   </div>
//                   <p className="text-sm text-blue-600">{media.excerpt}</p>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* New Education Section */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
//             <h4 className="font-bold text-blue-800 mb-3 flex items-center">
//               <span className="bg-blue-100 p-2 rounded-full mr-3">🎓</span>
//               Financial Education Mission
//             </h4>
//             <p className="text-blue-700 mb-4">
//               Despite his success in the world of trading, Aryan chose to use his knowledge for a greater purpose — free financial education for all. He has taught over 3,000+ learners globally through his YouTube channels:
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <span className="text-blue-600 mr-3 mt-1">📺</span>
//                 <div>
//                   <h5 className="font-semibold text-blue-800">Boom Talk</h5>
//                   <p className="text-blue-600 text-sm">Focused on educational content, mindset building, and trading psychology</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-blue-600 mr-3 mt-1">📺</span>
//                 <div>
//                   <h5 className="font-semibold text-blue-800">Boom Pulse</h5>
//                   <p className="text-blue-600 text-sm">Known for live market stories, price behavior insights, and real-time breakdowns</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-400">
//               <h4 className="font-bold text-blue-800 mb-3 flex items-center">
//                 <span className="bg-blue-100 p-2 rounded-full mr-3">📺</span>
//                 Boom Talk
//               </h4>
//               <p className="text-blue-700">
//                 Educational content, mindset building, and trading psychology for 3,000+ global learners.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-400">
//               <h4 className="font-bold text-blue-800 mb-3 flex items-center">
//                 <span className="bg-blue-100 p-2 rounded-full mr-3">🎬</span>
//                 Boom Pulse
//               </h4>
//               <p className="text-blue-700">
//                 Live market stories and real-time breakdowns that make trading accessible.
//               </p>
//             </div>
//           </div> */}

//           <div className="bg-blue-600 text-white p-6 rounded-xl relative overflow-hidden">
//             <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
//             <h4 className="font-bold text-xl mb-3 relative z-10">Creative Vision</h4>
//             <p className="relative z-10">
//               Aryan is the writer, director, and lead actor of Boom Play Media's first web series <span className="font-semibold">"Price Action"</span> — a psychological thriller based on the emotional rollercoaster of trading, merging his financial expertise with cinematic storytelling.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default AboutFounder;




import React from 'react';
import Image from 'next/image';

const AboutFounder = () => (
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
        {/* Founder Image with creative frame */}
        <div className="w-full md:w-2/5 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 group-hover:rotate-0 transition duration-500">
            <Image
              src="/founder.jpeg"
              alt="Aryan Pal"
              width={500} // Set width
              height={500} // Set height
              className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h4 className="text-white text-xl font-bold">Aryan Pal</h4>
              <p className="text-blue-200">Founder & Creative Director</p>
            </div>
          </div>
        </div>

        {/* Founder Bio */}
        <div className="w-full md:w-3/5 space-y-6">
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            From ₹10 Crore Portfolio to Financial Educator
          </h3>

          <p className="text-lg leading-relaxed">
            Aryan Pal isn&apos;t your typical entrepreneur. A <span className="font-semibold text-blue-600">self-made trader</span>, <span className="font-semibold text-blue-600">award-winning filmmaker</span>, and <span className="font-semibold text-blue-600">passionate educator</span>, he&apos;s on a mission to democratize financial literacy through compelling storytelling.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-800 mb-3">Featured In:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Ahmedabad Mirror',
                  excerpt: 'From Rookie to ₹10 Crore Portfolio',
                  link: 'https://www.ahmedabadmirror.com/from-rookie-to-10-crore--the-inspiring-portfolio-journey-of-aryan-pal/81888779.html',
                },
                {
                  title: 'Borok Times',
                  excerpt: 'Revolutionizing Financial Education',
                  link: 'https://boroktimes.com/aryan-pal-a-young-day-trader-revolutionizing-financial-education/',
                },
                {
                  title: 'Mid-Day',
                  excerpt: 'Free Market Education Movement',
                  link: 'https://www.mid-day.com/amp/buzz/article/revolutionizing-financial-literacy-how-aryan-pal-is-offering-free-market-education-5488',
                },
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

          {/* New Education Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-3">🎓</span>
              Financial Education Mission
            </h4>
            <p className="text-blue-700 mb-4">
              Despite his success in the world of trading, Aryan chose to use his knowledge for a greater purpose — free financial education for all. He has taught over 3,000+ learners globally through his YouTube channels:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">📺</span>
                <div>
                  <h5 className="font-semibold text-blue-800">Boom Talk</h5>
                  <p className="text-blue-600 text-sm">Focused on educational content, mindset building, and trading psychology</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">📺</span>
                <div>
                  <h5 className="font-semibold text-blue-800">Boom Pulse</h5>
                  <p className="text-blue-600 text-sm">Known for live market stories, price behavior insights, and real-time breakdowns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
            <h4 className="font-bold text-xl mb-3 relative z-10">Creative Vision</h4>
            <p className="relative z-10">
              Aryan is the writer, director, and lead actor of Boom Play Media first web series <span className="font-semibold">&quot;Price Action&quot;</span> — a psychological thriller based on the emotional rollercoaster of trading, merging his financial expertise with cinematic storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutFounder;
