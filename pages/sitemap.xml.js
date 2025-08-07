const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplaymedia.com';

// Import any data sources you need
// import { getAllProjects } from '@/lib/projects';
// import { getAllBlogPosts } from '@/lib/posts';

function generateSiteMap(pages = []) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      <!-- Static Pages -->
      <url>
        <loc>${EXTERNAL_DATA_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${EXTERNAL_DATA_URL}/AboutUs</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${EXTERNAL_DATA_URL}/ContactPage</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${EXTERNAL_DATA_URL}/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${EXTERNAL_DATA_URL}/CareerPage</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>

      <!-- Dynamic Pages (Example - Uncomment and implement as needed) -->
      ${pages.map(page => `
        <url>
          <loc>${`${EXTERNAL_DATA_URL}/${page.slug}`}</loc>
          <lastmod>${new Date(page.updatedAt || page.createdAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
          ${page.image ? `
            <image:image>
              <image:loc>${page.image}</image:loc>
              <image:title>${page.title}</image:title>
            </image:image>
          ` : ''}
        </url>
      `).join('')}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  // Fetch dynamic content if needed
  // const projects = await getAllProjects();
  // const posts = await getAllBlogPosts();
  
  // Combine all pages
  const allPages = [
    // ...projects.map(p => ({ 
    //   slug: `projects/${p.slug}`, 
    //   updatedAt: p.updatedAt,
    //   image: p.featuredImage,
    //   title: p.title
    // })),
    // ...posts.map(p => ({
    //   slug: `blog/${p.slug}`,
    //   updatedAt: p.updatedAt,
    //   image: p.featuredImage,
    //   title: p.title
    // }))
  ];

  const sitemap = generateSiteMap(allPages);
  
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}