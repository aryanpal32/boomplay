// lib/api.js
export async function getAllPages() {
  // Replace with actual data fetching logic
  return [
    { slug: '', updatedAt: new Date() },        // Homepage
    { slug: 'about', updatedAt: new Date() },   // About page
    { slug: 'contact', updatedAt: new Date() }, // Contact page
  ];
}

export async function getAllProjects() {
  // Replace with actual project data fetching
  return [
    { slug: 'project-1', updatedAt: new Date() },
    { slug: 'project-2', updatedAt: new Date() },
  ];
}

export async function getAllBlogPosts() {
  // Replace with actual blog post fetching
  return [
    { slug: 'post-1', updatedAt: new Date() },
  ];
}