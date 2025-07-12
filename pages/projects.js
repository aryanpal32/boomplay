
// ***** this Project list page ***
import Image from 'next/image';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllProjects } from '@/lib/projects'; // Import the function to get all projects   

const ProjectCard = ({ title, imgSrc, description, tags = [], slug }) => (
  <div className="group relative w-full h-full bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
    {/* Image container with overlay */}
    <div className="relative h-64 overflow-hidden">
      <Image 
        src={imgSrc} 
        alt={title} 
        width={600}
        height={400}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
      {/* Title overlay */}
      <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white text-2xl font-bold">
        {title}
      </h3>
    </div>

    {/* Content area */}
    <div className="p-6">
      <p className="text-gray-600 line-clamp-3 mb-4 text-lg">
        {description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Project Button - Updated Link usage */}
      <Link
        href={`/projects/${slug}`}
        className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        View Project Details
      </Link>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Price Action – A Psychological Thriller",
      imgSrc: "/priceactionimage.png",
      description: "A gripping psychological thriller set in the high-stakes world of stock trading, following a small-town dreamer's journey through greed, obsession, and betrayal in financial markets.",
      tags: ["Psychological Thriller", "Stock Trading", "Drama", "Web Series"],
      slug: "price-action"
    },
    // Add more projects here following the same structure
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${project.slug}`
      }
    }))
  };

  return (
    <>
      <Header />
      <SEO 
        title="Our Projects | Boom Play Media"
        description="Explore Boom Play Media's groundbreaking projects including the psychological thriller web series 'Price Action' about stock trading psychology"
        keywords="film projects, web series, price action, stock market thriller, boom play media"
        ogImage="/priceactionimage.png"
        structuredData={structuredData}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 px-6 ">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 ">
                Our Projects
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
              />
            ))}
          </div>

          {/* CTA Section - Updated Link usage */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-inner border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Have a project in mind?</h3>
              <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for innovative collaborations that push creative boundaries.
              </p>
              <Link
                href="/ContactPage"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
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