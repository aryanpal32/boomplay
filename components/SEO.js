import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const SEO = ({
<<<<<<< HEAD
  title = "Boom Play Media",
  description = "Boom Play is a leading media production company specializing in film, photography, and digital content creation.",
  keywords = "media production, film company, photography, content creation, Boom play media, Aryan Pal,trading,media",
  ogImage = "/boomplaylogo.png",
  structuredData,
  noindex = false,
  canonicalUrl
}) => {
  const router = useRouter();
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplaymedia.com/'}${router.asPath}`;
  
=======
  title = "Boom Play Media - Premium Media Production Services",
  description = "Boom Play is a leading media production company specializing in film, photography, and digital content creation with a focus on innovative storytelling.",
  keywords = "media production, film company, photography, content creation, Boom play media, Aryan Pal, trading, media, video production, creative agency",
  ogImage = "/boomplaylogo.png",
  structuredData,
  noindex = false,
  canonicalUrl,
  ogType = "website",
  publishedTime, // For articles
  author, // For articles
}) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplaymedia.com';
  const pageUrl = `${baseUrl}${router.asPath}`;
  
  // Enhanced keywords with dynamic additions
  const enhancedKeywords = `${keywords}, ${title.toLowerCase().split(' ').join(', ')}, ${router.pathname.split('/').filter(Boolean).join(', ')}`;
  
  // Default structured data if none provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boom Play Media",
    "url": baseUrl,
    "logo": `${baseUrl}/boomplaylogo.png`,
    "description": description,
    "sameAs": [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourprofile",
      "https://www.linkedin.com/company/yourcompany"
    ]
  };

>>>>>>> master
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
=======
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
>>>>>>> master
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || pageUrl} />
      
      {/* Open Graph / Facebook */}
<<<<<<< HEAD
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplaymedia.com/'}${ogImage}`} />
      <meta property="og:site_name" content="Boom Play" />
=======
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} | Boom Play Media`} />
      <meta property="og:site_name" content="Boom Play Media" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}
>>>>>>> master
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
<<<<<<< HEAD
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplaymedia.com/'}${ogImage}`} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Favicons */}
  <link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicons/favicon-32x32.png" type="image/png" />
<link rel="icon" href="/favicons/favicon-16x16.png" type="image/png" />
<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
<link rel="manifest" href="/favicons/site.webmanifest" />
=======
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content={`${title} | Boom Play Media`} />
      <meta name="twitter:site" content="@boomplaymedia" />
      <meta name="twitter:creator" content="@boomplaymedia" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicons/favicon-32x32.png" type="image/png" />
      <link rel="icon" href="/favicons/favicon-16x16.png" type="image/png" />
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      {/* <link rel="manifest" href="/favicons/site.webmanifest" /> */}
      
      {/* Theme and PWA */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      
      {/* Performance Optimizations */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      
      {/* Security */}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
>>>>>>> master
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  structuredData: PropTypes.object,
  noindex: PropTypes.bool,
<<<<<<< HEAD
  canonicalUrl: PropTypes.string
=======
  canonicalUrl: PropTypes.string,
  ogType: PropTypes.string,
  publishedTime: PropTypes.string,
  author: PropTypes.string
>>>>>>> master
};

export default SEO;