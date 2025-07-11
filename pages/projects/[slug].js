import { useRouter } from 'next/router';
import SEO from '../../components/SEO';

const ProjectPage = ({ projectData }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
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
        ogImage={projectData.socialImage}
        structuredData={structuredData}
        canonicalUrl={`https://boomplay.com/projects/${projectData.slug}`}
      />
      
      {/* Project content */}
    </>
  );
};

export async function getStaticPaths() {
  // Fetch all project slugs
  const projects = await fetchProjects();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch project data based on slug
  const projectData = await fetchProjectBySlug(params.slug);
  
  if (!projectData) {
    return { notFound: true };
  }

  return {
    props: { projectData },
    revalidate: 86400, // Regenerate page once per day
  };
}

export default ProjectPage;