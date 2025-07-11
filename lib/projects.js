// lib/projects.js
export async function fetchProjects() {
  // Replace with your actual data source:
  // - API call
  // - Database query
  // - File system (for Markdown)
  return [
    { 
      slug: 'project-1',
      title: 'First Project',
      description: 'Description of first project',
      imageUrl: '/images/project1.jpg',
      publishedDate: '2023-01-01',
      metaDescription: 'Meta description for project 1',
      tags: ['film', 'production']
    },
    { 
      slug: 'project-2',
      title: 'Second Project',
      description: 'Description of second project',
      imageUrl: '/images/project2.jpg',
      publishedDate: '2023-02-01',
      metaDescription: 'Meta description for project 2',
      tags: ['photography', 'media']
    }
  ];
}

export async function fetchProjectBySlug(slug) {
  const projects = await fetchProjects();
  return projects.find(project => project.slug === slug);
}