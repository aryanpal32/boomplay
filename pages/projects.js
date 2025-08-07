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
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.description,
          "url": `${siteUrl}/projects/${project.slug}`,
          "image": `${siteUrl}${project.imgSrc}`,
          "datePublished": project.releaseDate,
          "genre": project.genre.join(", "),
          "creator": {
            "@type": "Person",
            "name": project.director
          }
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Boom Play Media Projects | Film & Web Series Portfolio",
      "url": currentPageUrl,
      "description": "Explore Boom Play Media's portfolio of innovative film and web series projects including the psychological thriller 'Price Action' about stock trading psychology.",
      "publisher": {
        "@type": "Organization",
        "name": "Boom Play Media",
        "logo": `${siteUrl}/images/logo.png`
      }
    },
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
          "name": "Projects",
          "item": currentPageUrl
        }
      ]
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
                We're always looking for innovative collaborations that push creative boundaries in financial storytelling.
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