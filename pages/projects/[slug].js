// pages/projects/[slug].js
import { useRouter } from 'next/router';
import SEO from '../../components/SEO';
import { fetchProjectBySlug, fetchProjects } from '../../lib/projects';

const ProjectPage = ({ projectData }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": projectData.title,
    "description": projectData.description,
    "image": projectData.imageUrl,
    "datePublished": projectData.publishedDate
  };

  return (
    <>
      <SEO
        title={`${projectData.title} | Boom Play Project`}
        description={projectData.metaDescription}
        keywords={projectData.tags.join(', ')}
        ogImage={projectData.imageUrl}
        structuredData={structuredData}
        canonicalUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/projects/${projectData.slug}`}
      />
      
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">{projectData.title}</h1>
        <img 
          src={projectData.imageUrl} 
          alt={projectData.title} 
          className="w-full h-auto mb-8 rounded-lg"
        />
        <p className="text-lg mb-4">{projectData.description}</p>
        {/* Add more project details here */}
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const projects = await fetchProjects();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { 
    paths,
    fallback: true // Allows new slugs without rebuild
  };
}

export async function getStaticProps({ params }) {
  const projectData = await fetchProjectBySlug(params.slug);
  
  if (!projectData) {
    return { notFound: true };
  }

  return {
    props: { projectData },
    revalidate: 86400, // Regenerate at most once per day
  };
}

export default ProjectPage;