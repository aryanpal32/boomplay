import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const SEO = ({
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
    // "logo": `${baseUrl}/boomplaylogo.png`,
    "logo": "https://boomplaymedia.com/boomplaylogo.png", // Full absolute URL
  "image": "https://boomplaymedia.com/boomplaylogo.png",
    "description": description,
    "sameAs": [
      "https://www.facebook.com/boomplaymedia",
      "https://www.instagram.com/boomplaymedia",
      // "https://www.linkedin.com/company/yourcompany"
    ]
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || pageUrl} />
      
      {/* Open Graph / Facebook */}
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
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content={`${title} | Boom Play Media`} />
      <meta name="twitter:site" content="@boomplaymedia" />
      <meta name="twitter:creator" content="@boomplaymedia" />
        <meta name="author" content="Aryan Pal" />
  <meta name="publisher" content="Boom Play Media" />
  
  {/* For local business */}
  <meta name="geo.region" content="IN" />
  <meta name="geo.placename" content="Mumbai" /> {/* Update with your city */}
  <meta name="geo.position" content="latitude;longitude" />
  <meta name="ICBM" content="latitude, longitude" />

  {/* For content type */}
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      
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
      <link rel="logo" href="https://boomplaymedia.com/images/logo.png" />
      {/* Theme and PWA */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      
      {/* Performance Optimizations */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="manifest" href="/manifest.json" />
      {/* Security */}
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
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
  canonicalUrl: PropTypes.string,
  ogType: PropTypes.string,
  publishedTime: PropTypes.string,
  author: PropTypes.string
};

export default SEO;