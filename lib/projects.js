

//*******You can add many projects Here  */
// lib/projects.js

// export async function getAllProjects() {
//   return [
//     {
//       slug: "price-action",
//       title: "🎬 PRICE ACTION",
//       metaDescription: "A psychological thriller exploring the dark side of stock trading and ambition",
//       excerpt: "When dreams collide with the ruthless world of finance",
//       featuredImage: "/priceactionimage.png",
//       content: `
//         <div class="prose prose-lg max-w-none">
//           <div class="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl mb-8 border-l-4 border-blue-500">
//             <p class="font-medium">
//               <span class="text-blue-600">BOOM PLAY MEDIA</span> presents its debut psychological thriller
//             </p>
//           </div>

//           <p class="text-lg mb-6">
//             <strong>Price Action</strong> follows Aryan, a small-town dreamer who moves to the city to become an actor, 
//             only to stumble into the high-stakes world of stock trading.
//           </p>

//           <div class="grid md:grid-cols-2 gap-8 mb-8">
//             <div class="bg-black/5 p-4 rounded-lg">
//               <h3 class="text-xl font-bold mb-3 text-blue-800">The Descent</h3>
//               <p>
//                 What begins as a search for success turns into a dangerous journey through greed, 
//                 obsession, and betrayal in the chaotic financial markets.
//               </p>
//             </div>
//             <div class="bg-black/5 p-4 rounded-lg">
//               <h3 class="text-xl font-bold mb-3 text-blue-800">The Psychology</h3>
//               <p>
//                 The series explores not just trading techniques, but the emotional turmoil and 
//                 mental pressure that drive human behavior in high-risk environments.
//               </p>
//             </div>
//           </div>

//           <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700">
//             "The market doesn't just trade stocks - it trades souls."
//           </blockquote>

//           <div class="mt-8 bg-blue-50 p-6 rounded-xl">
//             <h3 class="text-xl font-bold mb-3">About the Creator</h3>
//             <p>
//               Written and directed by <span class="font-semibold">Aryan Pal</span>, Price Action reflects 
//               the darker side of ambition and the cost of chasing money in a world of illusions.
//             </p>
//           </div>
//         </div>
//       `,
//       tags: ["Psychological Thriller", "Stock Trading", "Drama", "Debut Series"],
//       releaseDate: "October 15, 2023",
//       genre: "Psychological Thriller",
//       director: "Aryan Pal",
//       cast: ["Actor 1 as Aryan", "Actor 2 as The Broker", "Actor 3 as The Mentor"],
//       trailerUrl: "https://youtube.com/watch?v=example"
//     }
//   ];
// }

// export async function getProjectBySlug(slug) {
//   const projects = await getAllProjects();
//   return projects.find((project) => project.slug === slug) || null;
// }

// lib/projects.js

export async function getAllProjects() {
  return [
    {
      slug: "price-action",
      title: "🎬 PRICE ACTION",
      metaDescription: "A psychological thriller exploring the dark side of stock trading and ambition",
      excerpt: "When dreams collide with the ruthless world of finance",
      featuredImage: "/priceactionimage.png",
      content: `
        <div class="prose prose-lg max-w-none">
          <!-- Full-width image section -->
          <div class="w-full h-auto mb-10 rounded-xl overflow-hidden">
            <img 
              src="/priceactionimage.png" 
              alt="Price Action Key Visual" 
              class="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl mb-8 border-l-4 border-blue-500">
            <p class="font-medium">
              <span class="text-blue-600">BOOM PLAY MEDIA</span> presents its debut psychological thriller
            </p>
          </div>

          <p class="text-lg mb-6">
            <strong>Price Action</strong> follows Aryan, a small-town dreamer who moves to the city to become an actor, 
            only to stumble into the high-stakes world of stock trading.
          </p>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-black/5 p-4 rounded-lg">
              <h3 class="text-xl font-bold mb-3 text-blue-800">The Descent</h3>
              <p>
                What begins as a search for success turns into a dangerous journey through greed, 
                obsession, and betrayal in the chaotic financial markets.
              </p>
            </div>
            <div class="bg-black/5 p-4 rounded-lg">
              <h3 class="text-xl font-bold mb-3 text-blue-800">The Psychology</h3>
              <p>
                The series explores not just trading techniques, but the emotional turmoil and 
                mental pressure that drive human behavior in high-risk environments.
              </p>
            </div>
          </div>

          <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700">
            "The market doesn't just trade stocks - it trades souls."
          </blockquote>

          <div class="mt-8 bg-blue-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold mb-3">About the Creator</h3>
            <p>
              Written and directed by <span class="font-semibold">Aryan Pal</span>, Price Action reflects 
              the darker side of ambition and the cost of chasing money in a world of illusions.
            </p>
          </div>
        </div>
      `,
      tags: ["Psychological Thriller", "Stock Trading", "Drama", "Debut Series"],
      releaseDate: "October 15, 2023",
      genre: "Psychological Thriller",
      director: "Aryan Pal",
      cast: ["Actor 1 as Aryan", "Actor 2 as The Broker", "Actor 3 as The Mentor"],
      trailerUrl: "https://youtube.com/watch?v=example"
    }
  ];
}

export async function getProjectBySlug(slug) {
  const projects = await getAllProjects();
  return projects.find((project) => project.slug === slug) || null;
}