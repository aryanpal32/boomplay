<<<<<<< HEAD
// components/PerformanceMetrics.js
=======
>>>>>>> master
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PerformanceMetrics() {
  const router = useRouter();

  useEffect(() => {
<<<<<<< HEAD
    const handleRouteChange = (url) => {
=======
    const trackPerformance = () => {
      // Only track if window.performance is available
      if (typeof window !== 'undefined' && window.performance) {
        const timing = window.performance.timing;
        const navigationStart = timing.navigationStart;
        
        // Core Web Vitals metrics
        const metrics = {
          dns: timing.domainLookupEnd - timing.domainLookupStart,
          tcp: timing.connectEnd - timing.connectStart,
          ttfb: timing.responseStart - timing.requestStart,
          pageLoad: timing.loadEventEnd - navigationStart,
          domReady: timing.domComplete - timing.domLoading,
          frontEnd: timing.loadEventEnd - timing.domComplete,
        };

        // Send to analytics
        if (window.ga) {
          window.ga('send', 'event', {
            eventCategory: 'Performance Metrics',
            eventAction: 'Page Timing',
            eventValue: metrics.pageLoad,
            nonInteraction: true,
            metric1: metrics.dns,
            metric2: metrics.tcp,
            metric3: metrics.ttfb,
            metric4: metrics.domReady,
            metric5: metrics.frontEnd
          });
        }

        // Log to console for debugging (remove in production)
        if (process.env.NODE_ENV === 'development') {
          console.table({
            'DNS Lookup (ms)': metrics.dns,
            'TCP Connection (ms)': metrics.tcp,
            'Time to First Byte (ms)': metrics.ttfb,
            'DOM Ready (ms)': metrics.domReady,
            'Frontend Time (ms)': metrics.frontEnd,
            'Total Page Load (ms)': metrics.pageLoad
          });
        }
      }
    };

    const handleRouteChange = (url) => {
      // Standard pageview tracking
>>>>>>> master
      if (window.ga) {
        window.ga('send', 'pageview', url);
      }
      
<<<<<<< HEAD
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
=======
      // Track performance after page loads
      setTimeout(trackPerformance, 0);
    };

    // Track initial page load
    trackPerformance();
    
    // Track subsequent route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
>>>>>>> master
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}