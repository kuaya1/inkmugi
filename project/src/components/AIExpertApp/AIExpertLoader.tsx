import React, { Suspense, useState } from 'react';
import { Sparkles, Camera, MessageSquare } from 'lucide-react';

// Lazy load the AI Expert App
const AIExpertApp = React.lazy(() => import('./App'));

interface AIExpertLoaderProps {
  className?: string;
}

const LoadingFallback: React.FC = () => {
  return (
    <div className="w-full min-h-[500px] bg-gradient-to-br from-[#F9F7F5] to-[#E6DAD2] rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-[#D4C4B8]">
      {/* Animated Icon */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-[#2D2D2B] rounded-full flex items-center justify-center animate-pulse">
          <Sparkles className="w-10 h-10 text-[#F9F7F5]" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B8997A] rounded-full flex items-center justify-center animate-bounce">
          <Camera className="w-4 h-4 text-white" />
        </div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#8B7355] rounded-full flex items-center justify-center animate-bounce delay-150">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Loading Text */}
      <h3 className="text-2xl font-bold text-[#2D2D2B] mb-3">
        Loading AI Expert Assistant
      </h3>
      <p className="text-[#4F4A45] mb-6 max-w-md leading-relaxed">
        Preparing your personalized PMU consultation experience with virtual try-on and expert guidance.
      </p>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-[#D4C4B8] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#B8997A] to-[#8B7355] rounded-full animate-pulse"></div>
      </div>

      {/* Features Preview */}
      <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-[#4F4A45]">
        <div className="flex flex-col items-center">
          <MessageSquare className="w-6 h-6 mb-2 text-[#B8997A]" />
          <span>AI Chat</span>
        </div>
        <div className="flex flex-col items-center">
          <Camera className="w-6 h-6 mb-2 text-[#8B7355]" />
          <span>Virtual Try-On</span>
        </div>
        <div className="flex flex-col items-center">
          <Sparkles className="w-6 h-6 mb-2 text-[#2D2D2B]" />
          <span>Expert Quiz</span>
        </div>
      </div>
    </div>
  );
};

const ErrorFallback: React.FC<{ onRetry: () => void }> = ({ onRetry }) => {
  return (
    <div className="w-full min-h-[400px] bg-[#F9F7F5] rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-[#D4C4B8]">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">⚠️</span>
      </div>
      <h3 className="text-xl font-bold text-[#2D2D2B] mb-3">
        Unable to Load AI Assistant
      </h3>
      <p className="text-[#4F4A45] mb-6 max-w-md">
        The AI Expert Assistant couldn't load. Please check your connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-[#2D2D2B] text-[#F9F7F5] rounded-lg hover:bg-[#4F4A45] transition-colors duration-200 font-medium"
      >
        Try Again
      </button>
    </div>
  );
};

const AIExpertLoader: React.FC<AIExpertLoaderProps> = ({ className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const handleLaunch = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setRetryKey(prev => prev + 1);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <ErrorFallback onRetry={handleRetry} />;
  }

  if (!isLoaded) {
    return (
      <div className={`w-full ${className}`}>
        <div className="w-full min-h-[400px] bg-gradient-to-br from-[#F9F7F5] to-[#E6DAD2] rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-[#D4C4B8]">
          {/* Hero Icon */}
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-[#2D2D2B] rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-12 h-12 text-[#F9F7F5]" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#B8997A] rounded-full flex items-center justify-center shadow-md">
              <Camera className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Title & Description */}
          <h2 className="text-3xl font-bold text-[#2D2D2B] mb-4">
            InkMugi AI Expert
          </h2>
          <p className="text-[#4F4A45] mb-8 max-w-lg leading-relaxed">
            Experience personalized PMU consultations with our AI-powered assistant. 
            Get expert advice, take interactive quizzes, and try on different styles virtually.
          </p>

          {/* Launch Button */}
          <button
            onClick={handleLaunch}
            className="group px-8 py-4 bg-[#2D2D2B] text-[#F9F7F5] rounded-xl hover:bg-[#4F4A45] transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg flex items-center gap-3"
          >
            <Sparkles className="w-6 h-6 group-hover:animate-spin" />
            Launch AI Assistant
            <span className="text-sm opacity-75">→</span>
          </button>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-[#D4C4B8]">
              <MessageSquare className="w-8 h-8 text-[#B8997A] mb-3 mx-auto" />
              <h4 className="font-semibold text-[#2D2D2B] mb-2">AI Chat Assistant</h4>
              <p className="text-sm text-[#4F4A45]">Get instant answers about PMU procedures, aftercare, and pricing</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-[#D4C4B8]">
              <Camera className="w-8 h-8 text-[#8B7355] mb-3 mx-auto" />
              <h4 className="font-semibold text-[#2D2D2B] mb-2">Virtual Try-On</h4>
              <p className="text-sm text-[#4F4A45]">Visualize how different PMU styles will look on you</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-[#D4C4B8]">
              <Sparkles className="w-8 h-8 text-[#2D2D2B] mb-3 mx-auto" />
              <h4 className="font-semibold text-[#2D2D2B] mb-2">Expert Quiz</h4>
              <p className="text-sm text-[#4F4A45]">Discover which PMU style suits your lifestyle and preferences</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`} key={retryKey}>
      <Suspense fallback={<LoadingFallback />}>
        <div onError={handleError}>
          <AIExpertApp />
        </div>
      </Suspense>
    </div>
  );
};

export default AIExpertLoader;
