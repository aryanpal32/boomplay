import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const SEO = ({
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
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || pageUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://boomplaymedia.com/'}${ogImage}`} />
      <meta property="og:site_name" content="Boom Play" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
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
  canonicalUrl: PropTypes.string
};

export default SEO;