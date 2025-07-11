import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;