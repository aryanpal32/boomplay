import { getAllPages, getAllProjects, getAllBlogPosts } from '../lib/api';

const EXTERNAL_DATA_URL = 'https://boomplay.com';

function generateSiteMap(pages, projects, posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
         <loc>${`${EXTERNAL_DATA_URL}/${page.slug}`}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>1.0</priority>
       </url>
     `;
       })
       .join('')}
     ${projects
       .map((project) => {
         return `
       <url>
         <loc>${`${EXTERNAL_DATA_URL}/projects/${project.slug}`}</loc>
         <lastmod>${new Date(project.updatedAt).toISOString()}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
     ${posts
       .map((post) => {
         return `
       <url>
         <loc>${`${EXTERNAL_DATA_URL}/blog/${post.slug}`}</loc>
         <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.7</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const pages = await getAllPages();
  const projects = await getAllProjects();
  const posts = await getAllBlogPosts();

  const sitemap = generateSiteMap(pages, projects, posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;