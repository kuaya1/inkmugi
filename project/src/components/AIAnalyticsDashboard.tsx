import React, { useState, useEffect } from 'react';
import { analyticsService, AIAnalyticsData } from '../services/analyticsService';

interface AIAnalyticsData {
  faceShapes: Record<string, number>;
  recommendedStyles: Record<string, number>;
  conversions: number;
  totalAnalyses: number;
  avgConfidence: number;
  weeklyTrends: Array<{
    week: string;
    analyses: number;
    conversions: number;
  }>;
}

const AIAnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AIAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [contentIdeas, setContentIdeas] = useState<string[]>([]);

  // Fetch real analytics data on component mount
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const data = await analyticsService.fetchRealAnalytics();
        setAnalyticsData(data);
        setContentIdeas(analyticsService.generateContentIdeas(data));
      } catch (error) {
        console.error('Error fetching analytics:', error);
        // Fallback to mock data if there's an error
        setAnalyticsData(await analyticsService.fetchRealAnalytics());
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchAnalytics, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Add some sample data for demonstration
  const addSampleData = () => {
    const faceShapes = ['Heart', 'Oval', 'Round', 'Square'];
    const styles = ['Soft Arch Ombre', 'Bold Arch Ombre', 'Natural Ombre'];
    
    // Simulate 10 AI interactions
    for (let i = 0; i < 10; i++) {
      const faceShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
      const style = styles[Math.floor(Math.random() * styles.length)];
      const converted = Math.random() > 0.3; // 70% conversion rate
      
      analyticsService.simulateAIInteraction(faceShape, style, converted);
    }
    
    // Refresh data
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4 h-20"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
        <p className="text-gray-600">Failed to load analytics data.</p>
      </div>
    );
  }

  const conversionRate = analyticsData.conversionRate;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#2D2D2B]">
          🤖 AI Tool Analytics Dashboard
        </h2>
        <div className="flex gap-2">
          <button
            onClick={addSampleData}
            className="px-4 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#A0522D] transition-colors text-sm"
          >
            Add Sample Data
          </button>
          <div className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm">
            Live Data
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-[#8B4513]/10 to-[#A0522D]/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[#8B4513]">{analyticsData.totalAnalyses}</div>
          <div className="text-sm text-[#4F4A45]">Total AI Analyses</div>
        </div>
        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-700">{analyticsData.conversions}</div>
          <div className="text-sm text-green-600">Bookings Generated</div>
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">{conversionRate}%</div>
          <div className="text-sm text-blue-600">Conversion Rate</div>
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-700">{Math.round(analyticsData.avgConfidence * 100)}%</div>
          <div className="text-sm text-purple-600">Avg Confidence</div>
        </div>
      </div>

      {/* Face Shape Distribution */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#2D2D2B] mb-4">
          Face Shape Analysis (Arlington/Fairfax Clients)
        </h3>
        <div className="space-y-3">
          {Object.entries(analyticsData.faceShapes).map(([shape, count]) => (
            <div key={shape} className="flex items-center">
              <div className="w-20 text-sm text-[#4F4A45]">{shape}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-4 mx-3">
                <div 
                  className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] h-4 rounded-full"
                  style={{ width: `${(count / analyticsData.totalAnalyses) * 100}%` }}
                />
              </div>
              <div className="w-8 text-sm font-medium text-[#2D2D2B]">{count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Trends */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#2D2D2B] mb-4">
          Weekly Performance Trends
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {analyticsData.weeklyTrends.map((week, index) => (
            <div key={index} className="bg-[#F9F7F5] rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-[#8B4513]">{week.week}</div>
              <div className="text-sm text-[#4F4A45] mt-1">
                {week.analyses} analyses
              </div>
              <div className="text-sm text-green-600">
                {week.conversions} conversions
              </div>
              <div className="text-xs text-[#4F4A45] mt-1">
                {week.analyses > 0 ? Math.round((week.conversions / week.analyses) * 100) : 0}% rate
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Ideas */}
      <div className="bg-[#F9F7F5] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-[#2D2D2B] mb-4">
          📝 AI-Generated Content Ideas
        </h3>
        <ul className="space-y-2">
          {contentIdeas.map((idea: string, index: number) => (
            <li key={index} className="text-[#4F4A45] flex items-start">
              <span className="text-[#8B4513] mr-2">•</span>
              {idea}
            </li>
          ))}
        </ul>
        <div className="mt-4 p-3 bg-[#8B4513]/10 rounded-lg">
          <p className="text-sm text-[#2D2D2B]">
            <strong>SEO Opportunity:</strong> Use this data to create location-specific content 
            targeting "ombre brows for [face shape] Arlington VA" searches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAnalyticsDashboard;
