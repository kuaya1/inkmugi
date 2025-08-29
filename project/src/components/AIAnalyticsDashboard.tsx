import React, { useState } from 'react';

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
  const [analyticsData] = useState<AIAnalyticsData>({
    faceShapes: {
      'Heart': 34,
      'Oval': 28,
      'Round': 22,
      'Square': 16
    },
    recommendedStyles: {
      'Soft Arch Ombre': 42,
      'Bold Arch Ombre': 31,
      'Natural Ombre': 27
    },
    conversions: 67,
    totalAnalyses: 156,
    avgConfidence: 0.89,
    weeklyTrends: [
      { week: 'Week 1', analyses: 23, conversions: 8 },
      { week: 'Week 2', analyses: 31, conversions: 12 },
      { week: 'Week 3', analyses: 45, conversions: 19 },
      { week: 'Week 4', analyses: 57, conversions: 28 }
    ]
  });

  const conversionRate = ((analyticsData.conversions / analyticsData.totalAnalyses) * 100).toFixed(1);

  // Generate content ideas based on data
  const generateContentIdeas = () => {
    const topFaceShape = Object.keys(analyticsData.faceShapes)[0];
    const topStyle = Object.keys(analyticsData.recommendedStyles)[0];
    
    return [
      `Why ${conversionRate}% of Arlington Clients Choose ${topStyle} After AI Analysis`,
      `${topFaceShape}-Shaped Faces: The Ultimate Ombre Brow Guide for Northern Virginia`,
      `AI Data Reveals: Most Popular Ombre Styles in Arlington/Fairfax Area`,
      `From Virtual Try-On to Reality: ${analyticsData.conversions} Success Stories`
    ];
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-[#2D2D2B] mb-6">
        🤖 AI Tool Analytics Dashboard
      </h2>

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

      {/* Content Ideas */}
      <div className="bg-[#F9F7F5] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-[#2D2D2B] mb-4">
          📝 AI-Generated Content Ideas
        </h3>
        <ul className="space-y-2">
          {generateContentIdeas().map((idea, index) => (
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
