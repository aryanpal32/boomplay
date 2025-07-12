// // pages/index.js
// import Header from '../components/Header';
// import ProjectCard from '../components/ProjectCard';
// import Footer from '../components/Footer';
// import HeroSection from '../components/HeroSection';
// import AboutUs from '@/components/AboutUs';
// import AboutFounder from '@/components/Aboutfounder';

// const projects = [
//   { title: 'Price Action', imgSrc: '/images/the-journey.jpg' },

 
// ];

// const Home = () => (
//   <div>
//     <Header />
//     <HeroSection />
//     <AboutUs />
//     <main className="p-10">
//       <section id="projects" className="mt-2">
//         <div className="flex flex-wrap justify-center">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </section>
//       <AboutFounder />
//     </main>
//     <Footer />
//   </div>
// );

// export default Home;


import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutUs from '@/components/AboutUs';
import AboutFounder from '@/components/Aboutfounder';
import SEO from '@/components/SEO';

// Project data array - easily add new projects here
const projects = [
  { 
    title: 'Price Action', 
    imgSrc: '/priceactionimage.png',
    slug: 'price-action',
    description: `Price Action is the debut web series by Boom Play Media — a gripping psychological thriller set in the high-stakes world of stock trading.

The story follows Aryan, a small-town dreamer who moves to the city to become an actor but accidentally stumbles into the chaotic world of financial markets. What begins as a search for success soon turns into a journey through greed, obsession, betrayal, and inner conflict.

This series explores not just the technical side of trading, but the emotions, psychology, and mental pressure that drive human behavior in high-risk environments.

Written and Directed by Aryan Pal, Price Action reflects the darker side of ambition and the cost of chasing money in a world full of illusions.`,
    tags: ['trading', 'education', 'finance']
  },
  // { 
  //   title: 'Market Masters', 
  //   imgSrc: '/marketmasters.jpg',
  //   slug: 'market-masters',
  //   description: 'Advanced trading strategies series',
  //   tags: ['trading', 'advanced', 'strategies']
  // },
  // { 
  //   title: 'The Wealth Journey', 
  //   imgSrc: '/wealthjourney.jpg',
  //   slug: 'wealth-journey',
  //   description: 'Personal finance documentary series',
  //   tags: ['finance', 'documentary', 'education']
  // },
  // Add more projects as needed by copying the object format above
];

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Boom Play",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://boomplaymedia.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplaymedia.com/'}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boom Play",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://boomplaymedia.com/",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplaymedia.com/'}/images/logo.png`,
    "description": "Premium media production and trading education",
    "sameAs": [
      "https://facebook.com/boomplay",
      "https://instagram.com/boomplay"
    ]
  };

  return (
    <>
      <SEO 
        title="Boom Play | Media Production & Trading Education"
        description="Professional media production services and premium trading education. Explore our projects and learning resources."
        keywords="media production, trading education, film production, price action trading"
        ogImage="/images/og-home.jpg"
        structuredData={[structuredData, organizationStructuredData]}
      />

      <Header />
      <HeroSection />
      <AboutUs />
      
      <main className="p-10 max-w-7xl mx-auto">
        <section id="projects" className="mt-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title}
                imgSrc={project.imgSrc}
                description={project.description}
                tags={project.tags}
                slug={project.slug}
              />
            ))}
          </div>
        </section>

        <AboutFounder />
      </main>

      <Footer />
    </>
  );
};

export default Home;