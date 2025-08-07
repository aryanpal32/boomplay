import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug } from '@/lib/projects'; // Add this import
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// This function gets called at build time
export async function getStaticPaths() {
  // Get all project slugs from your data source
  const projects = await getAllProjects();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Fetch the project data based on slug
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
    // Re-generate the page at most once per hour
    revalidate: 3600 // In seconds
  };
}



const ProjectDetailPage = ({ project }) => {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
    <Header />
      <SEO 
        title={`${project.title} | Boom Play Media`}
        description={project.metaDescription || project.excerpt}
        keywords={project.tags.join(', ')}
        ogImage={project.featuredImage}
      />

      <article className="max-w-6xl mx-auto px-6 py-16 ">
        {/* Project Header */}
        <header className="mb-12 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            {project.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Featured Image */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Project Content */}
        <div className="prose prose-lg max-w-none mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">About the Project</h2>
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-blue-50 p-6 rounded-xl sticky top-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="block text-blue-800">Release Date:</strong>
                    <span>{project.releaseDate}</span>
                  </li>
                  <li>
                    <strong className="block text-blue-800">Genre:</strong>
                    <span>{project.genre}</span>
                  </li>
                  <li>
                    <strong className="block text-blue-800">Director:</strong>
                    <span>{project.director}</span>
                  </li>
                  <li>
                    <strong className="block text-blue-800">Cast:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.cast.map((actor) => (
                        <span key={actor} className="px-3 py-1 bg-white rounded-full text-sm">
                          {actor}
                        </span>
                      ))}
                    </div>
                  </li>
                </ul>

                {project.trailerUrl && (
                  <div className="mt-8">
                    <Link
                      href={project.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      Watch Trailer
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
   <Footer />
    </>
  );
};

export default ProjectDetailPage;