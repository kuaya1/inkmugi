import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Function to send analytics data
const sendToAnalytics = (metric: Metric) => {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, metric);
  }

  // In production, you could send to Google Analytics, DataDog, etc.
  // Example for Google Analytics 4:
  // gtag('event', metric.name, {
  //   event_category: 'Web Vitals',
  //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //   event_label: metric.id,
  //   non_interaction: true,
  // });
};

// Initialize web vitals monitoring
export const initWebVitals = () => {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics); // FID is deprecated, replaced with INP
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
};

// Export individual metrics for specific monitoring
export { onCLS, onINP, onFCP, onLCP, onTTFB };
