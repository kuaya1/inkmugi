import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
  title = "Ombre Powder Brows & Microshading Annandale VA | Top DMV PMU Artist | Inkmugi",
  description = "Expert ombre powder brows & microshading in Annandale, VA. Serving Arlington, Alexandria, Fairfax & DC. Natural-looking PMU lasting 1-3 years. Book consultation today!",
  keywords = "ombre powder brows, microshading, permanent makeup, PMU artist, Annandale VA, DMV, Arlington, Alexandria, Washington DC, eyebrow tattoo, nano brows",
  ogImage = "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
  canonicalUrl = "https://www.inkmugi.com/",
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
        Array.isArray(structuredData) ? (
          structuredData.map((schema, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;
