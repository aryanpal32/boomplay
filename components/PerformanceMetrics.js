// components/PerformanceMetrics.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PerformanceMetrics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.ga) {
        window.ga('send', 'pageview', url);
      }
      
      // Track page load performance
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      
      if (window.ga) {
        window.ga('send', 'event', {
          eventCategory: 'Performance Metrics',
          eventAction: 'Page Load',
          eventValue: pageLoadTime,
          nonInteraction: true,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}