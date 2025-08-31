import React from 'react';
import { Helmet } from 'react-helmet';

interface FaviconSEOProps {
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  pageImage?: string;
  pageType?: 'website' | 'article' | 'service';
}

const FaviconSEO: React.FC<FaviconSEOProps> = ({
  pageTitle = "Ink Mugi - Annandale's #1 Licensed PMU Artist",
  pageDescription = "Virginia-licensed PMU expert with proven results: 523 procedures, 0.19% complication rate. FREE consultation. Hospital-grade studio serving Annandale, Arlington, Alexandria.",
  pageUrl = "https://inkmugi.com/",
  pageImage = "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
  pageType = "website"
}) => {
  return (
    <Helmet>
      {/* PRIMARY FAVICON (MOST IMPORTANT FOR GOOGLE) */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* PNG Icons for modern browsers */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Apple Touch Icon (Google often uses this) */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Android Chrome Icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2D2D2B" />
      <meta name="msapplication-navbutton-color" content="#2D2D2B" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Enhanced Open Graph meta tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Ink Mugi - Premier PMU Artist in Annandale, VA" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:type" content={pageType} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Ink Mugi PMU Studio" />
      
      {/* Enhanced Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content="Ink Mugi - Premier PMU Artist in Annandale, VA" />
      <meta name="twitter:site" content="@inkmugi" />
      <meta name="twitter:creator" content="@inkmugi" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={pageUrl} />
      
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Ink Mugi PMU" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content="#2D2D2B" />
      <meta name="msapplication-TileImage" content="/android-chrome-512x512.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Helmet>
  );
};

export default FaviconSEO;
