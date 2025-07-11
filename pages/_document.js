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
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicons/favicon-32x32.png" type="image/png" sizes="32x32" />
          <link rel="icon" href="/favicons/favicon-16x16.png" type="image/png" sizes="16x16" />
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" sizes="180x180" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />

          {/* Font Preloading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            rel="preload"
            href="/fonts/your-font.woff2" 
            as="font" 
            type="font/woff2" 
            crossOrigin="anonymous"
          />

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