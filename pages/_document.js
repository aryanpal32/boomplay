// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }


// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           {/* Preconnect to important domains */}
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
//           {/* Preload critical resources */}
//           <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          
//           {/* DNS prefetch */}
//           <link rel="dns-prefetch" href="//www.google-analytics.com" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
          
//           {/* Async scripts */}
//           <script 
//             async 
//             src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
//           />
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', 'GA_MEASUREMENT_ID');
//               `,
//             }}
//           />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon Setup */}
         
         
           <meta name="description" content="Boom Play Media - Your ultimate destination for music, entertainment, and creative media." />
  <meta name="keywords" content="Boom Play Media, BoomPlay, Boom Play, Media Streaming, Music Platform" />
  <meta name="author" content="Boom Play Media" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph (for social media preview) */}
  <meta property="og:site_name" content="Boom Play Media" />
  <meta property="og:title" content="Boom Play Media - Music & Entertainment Platform" />
  <meta property="og:description" content="Stream music, explore entertainment, and enjoy Boom Play Media's creative universe." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://boomplaymedia.com" />
  <meta property="og:image" content="https://boomplaymedia.com/boomplaylogo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Boom Play Media - Music & Entertainment Platform" />
  <meta name="twitter:description" content="Stream music, explore entertainment, and enjoy Boom Play Media's creative universe." />
  {/* <meta name="twitter:image" content="https://boomplaymedia.com/twitter-image.jpg" /> */}

  {/* Canonical URL */}
  <link rel="canonical" href="https://boomplaymedia.com" />

          {/* DNS Prefetch */}
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />

          {/* GA Tracking */}
          <script 
            async 
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;