// import React from 'react';
// import Image from 'next/image';

// const ProjectCard = ({ title, imgSrc, description, tags = [] }) => (
//   <div className="group relative w-80 h-[420px] bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 m-4">
//     {/* Image container with overlay */}
//     <div className="relative h-56 overflow-hidden">
//       <Image 
//         src={imgSrc} 
//         alt={title} 
//         width={320}
//         height={224}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//       />
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
//       {/* Title overlay */}
//       <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white text-2xl font-bold truncate">
//         {title}
//       </h3>
//     </div>

//     {/* Content area */}
//     <div className="p-5">
//       <p className="text-gray-600 line-clamp-3 mb-4">
//         {description || "Psychological thriller"}
//       </p>
      
//       {/* Tags */}
//       <div className="flex flex-wrap gap-2">
//         {tags.map((tag, index) => (
//           <span 
//             key={index}
//             className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>

//     {/* Hover action button */}
//     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center">
//         <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//         View Project
//       </button>
//     </div>
//   </div>
// );

// const OurProjects = () => (
//   <div className="container mx-auto py-16">
//     <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
    
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//       <ProjectCard 
//         title="🎬 Price Action – A Psychological Thriller" 
//         imgSrc="/priceaction.png" // Replace with actual image path
//         description="Price Action is the debut web series by Boom Play Media — a gripping psychological thriller set in the high-stakes world of stock trading. The story follows Aryan, a small-town dreamer who moves to the city to become an actor but accidentally stumbles into the chaotic world of financial markets. What begins as a search for success soon turns into a journey through greed, obsession, betrayal, and inner conflict. This series explores not just the technical side of trading, but the emotions, psychology, and mental pressure that drive human behavior in high-risk environments."
//         tags={["Psychological Thriller", "Stock Trading", "Drama", "Debut Series"]}
//       />
//     </div>
//   </div>
// );

// export default OurProjects;

// components/ProjectCard.js
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ title, imgSrc, description, tags = [], slug }) => (
  <Link href={`/projects/${slug}`} className="group block">
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
      {/* Image container with overlay */}
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={imgSrc} 
          alt={title} 
          fill
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        {/* Title overlay */}
        <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white text-2xl font-bold truncate">
          {title}
        </h3>
      </div>

      {/* Content area */}
      <div className="p-5">
        <p className="text-gray-600 line-clamp-3 mb-4">
          {description || "Psychological thriller"}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover action button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          View Project
        </div>
      </div>
    </div>
  </Link>
);

export default ProjectCard;