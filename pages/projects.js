import Image from 'next/image';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Price Action – A Psychological Thriller Web Series",
      imgSrc: "/priceactionimage.png",
      description: "A gripping psychological thriller set in the high-stakes world of stock trading, following a small-town dreamer's journey through greed, obsession, and betrayal in financial markets. Our debut web series explores the dark psychology behind trading decisions.",
      tags: ["Psychological Thriller", "Stock Trading", "Financial Drama", "Web Series", "Market Psychology"],
      slug: "price-action",
      releaseDate: "2023-10-15",
      director: "Aryan Pal",
      genre: ["Thriller", "Drama"]
    },
    // Add more projects here following the same structure
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://boomplay.com";
  const currentPageUrl = `${siteUrl}/projects`;

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

  return (
    <>
      <Header />
      <SEO 
        title="Film & Web Series Projects | Boom Play Media Portfolio"
        description="Explore Boom Play Media's innovative projects including 'Price Action' - a psychological thriller web series about stock trading psychology. View our complete portfolio of films and media productions."
        keywords="Boom Play Media projects, Price Action web series, financial thriller, stock market drama, film production portfolio, Aryan Pal films, web series India, psychological thriller series"
        ogImage={`${siteUrl}/priceactionimage.png`}
        structuredData={structuredData}
        canonicalUrl={currentPageUrl}
          publishedTime="2023-01-15T09:00:00+05:30" // When this page was published
  author="Aryan Pal"
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Our Creative Projects
              </span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Bold storytelling that merges financial education with cinematic thrills
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                imgSrc={project.imgSrc}
                description={project.description}
                tags={project.tags}
                slug={project.slug}
                releaseDate={project.releaseDate}
                director={project.director}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-inner border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Have a project in mind?</h3>
              <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for innovative collaborations that push creative boundaries in financial storytelling.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Contact us about your project"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;