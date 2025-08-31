// Mock API endpoint for AI analytics
// In a real production app, this would be a backend endpoint

import { analyticsService } from '../services/analyticsService';

export const createMockAPI = () => {
  // Mock API endpoint that can be called from components
  return {
    async getAnalytics() {
      // This simulates fetching from a real backend
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      return analyticsService.fetchRealAnalytics();
    },

    async trackEvent(event: any) {
      analyticsService.trackAnalyticsEvent(event);
      return { success: true };
    },

    async getContentIdeas() {
      const analytics = await analyticsService.fetchRealAnalytics();
      return analyticsService.generateContentIdeas(analytics);
    }
  };
};

// Global API instance
export const mockAPI = createMockAPI();
