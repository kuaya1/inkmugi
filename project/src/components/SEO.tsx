import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Ombre Powder Brows & Microshading Annandale VA | Top-Rated DMV PMU Studio | Inkmugi",
  description = "Premier PMU studio in Annandale, VA specializing in ombre powder brows & microshading. Serving Arlington, Alexandria, Fairfax, Washington DC & Maryland. Book your consultation today.",
  keywords = "ombre powder brows, microshading, permanent makeup, PMU artist, Annandale VA, DMV, Arlington, Alexandria, Washington DC, eyebrow tattoo, nano brows",
  ogImage = "https://inkmugi.com/images/ink-mugi-pmu-artist.jpg",
  canonicalUrl = "https://inkmugi.com/",
  structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
