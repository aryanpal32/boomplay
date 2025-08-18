


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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://boomplay.com";
const  currentPageUrl = `${siteUrl}/`;

const Home = () => {
const structuredData = [
  // Organization Schema (for logo and brand identity)
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boom Play Media",
    "url": siteUrl,
    "logo": `${siteUrl}/boomplaylogo.png`,
    "description": "Film production company creating bold web series and financial education content",
    "foundingDate": "2025", // Add actual founding year
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
        keywords="media production, trading education, film production, price action trading, boom play media, aryan pal, trading"
        ogImage={`${siteUrl}/boomplaylogo.png`}

        structuredData={[structuredData, organizationStructuredData]}
      />

      <Header />
      <HeroSection />
      <AboutUs />
      
      <main className="px-4 py-10 lg:p-10 max-w-7xl mx-auto">
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