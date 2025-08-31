import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { analyticsService } from '../services/analyticsService';

interface ConversionTrackerProps {
  aiResults?: {
    faceShape?: string;
    recommendedStyle?: string;
    skinTone?: string;
    confidence?: number;
  };
  onConversion?: (data: any) => void;
}

const ConversionTracker: React.FC<ConversionTrackerProps> = ({ 
  aiResults, 
  onConversion 
}) => {
  useEffect(() => {
    // Track AI tool engagement
    if (aiResults) {
      // Track the AI analysis completion
      analyticsService.trackAnalyticsEvent({
        source: 'ai_tool_ombre_page',
        aiResults: aiResults,
        converted: false,
        page: '/ombre-brows'
      });

      // Track with Google Analytics if available
      if (window.gtag) {
        window.gtag('event', 'ai_analysis_complete', {
          event_category: 'AI Tool',
          event_label: `${aiResults.faceShape}-${aiResults.recommendedStyle}`,
          value: Math.round((aiResults.confidence || 0) * 100)
        });
      }
    }
  }, [aiResults]);

  const handleBookingClick = () => {
    // Capture conversion data
    const conversionData = {
      timestamp: new Date().toISOString(),
      source: 'ai_tool_ombre_page',
      aiResults: aiResults,
      page: '/ombre-brows',
      userAgent: navigator.userAgent,
      converted: true,
      conversionValue: 600
    };

    // Track conversion in analytics service
    analyticsService.trackAnalyticsEvent(conversionData);

    // Track conversion with Google Analytics
    if (window.gtag) {
      window.gtag('event', 'ai_to_booking_conversion', {
        event_category: 'Conversion',
        event_label: 'Ombre Brows AI Tool',
        value: 600
      });
    }

    // Store in localStorage for booking form pre-fill
    localStorage.setItem('aiAnalysisData', JSON.stringify(conversionData));
    
    // Call parent callback
    if (onConversion) {
      onConversion(conversionData);
    }
  };

  if (!aiResults) return null;

  return (
    <div className="bg-gradient-to-r from-[#8B4513]/10 to-[#A0522D]/10 rounded-lg p-6 mt-6 border border-[#8B4513]/20">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#2D2D2B] mb-4">
          🎯 Your Perfect Ombre Brows Match!
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/80 rounded-lg p-4">
            <div className="text-sm text-[#4F4A45] font-medium">Face Shape</div>
            <div className="text-lg font-bold text-[#8B4513]">
              {aiResults.faceShape || 'Analyzed'}
            </div>
          </div>
          <div className="bg-white/80 rounded-lg p-4">
            <div className="text-sm text-[#4F4A45] font-medium">Recommended Style</div>
            <div className="text-lg font-bold text-[#8B4513]">
              {aiResults.recommendedStyle || 'Soft Arch Ombre'}
            </div>
          </div>
          <div className="bg-white/80 rounded-lg p-4">
            <div className="text-sm text-[#4F4A45] font-medium">Match Confidence</div>
            <div className="text-lg font-bold text-[#8B4513]">
              {Math.round((aiResults.confidence || 0.92) * 100)}%
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[#2D2D2B] font-medium text-lg">
            ✨ Ready to make this look yours? Book with Mugi and mention your AI results!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking"
              onClick={handleBookingClick}
              className="btn bg-[#8B4513] hover:bg-[#A0522D] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book This Exact Look
            </Link>
            <button 
              onClick={() => window.print()}
              className="btn border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white px-6 py-4 rounded-lg transition-all duration-300"
            >
              Save Results (PDF)
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[#2D2D2B]/5 rounded-lg">
          <p className="text-sm text-[#4F4A45]">
            <strong>Pro Tip:</strong> Screenshot these results and bring them to your consultation. 
            Your INK MUGI artist will use this data to create your perfect ombre brows!
          </p>
        </div>
      </div>
    </div>
  );
};

// Global type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default ConversionTracker;
