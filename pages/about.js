import SEO from '../components/SEO';

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boom Play",
    "url": "https://boomplaymedia.com/",
    "logo": "https://boomplaymedia.com/_next/image?url=%2Fboomplaylogo.png&w=3840&q=75",
    "description": "Premium media production services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C-704, Crystal Plaza Link Road",
      "addressLocality": "Opp. Infinity Mall,Andheri West ",
      "addressRegion": "Andheri West",
      "postalCode": "400053",
      "addressCountry": "IND"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 727-601-1446",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <SEO 
        title="About Boom Play - Our Story & Mission"
        description="Learn about Boom Play's journey in media production and our commitment to creative excellence."
        keywords="media company about us, film production story, Boom Play history"
        ogImage="/https://boomplaymedia.com/_next/image?url=%2Fboomplaylogo.png&w=3840&q=75"
        structuredData={structuredData}
      />
      
      {/* Page content */}
      <main>
        <h1>About Boom Play</h1>
        {/* ... */}
      </main>
    </>
  );
};

export default AboutPage;