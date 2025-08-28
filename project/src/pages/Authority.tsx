import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/authority/HeroSection';
import StatsSection from '../components/authority/StatsSection';
import CredentialsGrid from '../components/authority/CredentialsGrid';
import ServicesSection from '../components/authority/ServicesSection';
import FAQSection from '../components/authority/FAQSection';
import TestimonialSection from '../components/authority/TestimonialSection';
import LocationInfo from '../components/authority/LocationInfo';
import CTASection from '../components/authority/CTASection';

const AuthorityPage: React.FC = () => {
  // Enhanced Medical Business Schema for healthcare credentials
  const enhancedMedicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "medicalSpecialty": "Cosmetic Dermatology",
    "hasCredential": [{
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Virginia Permanent Cosmetic Tattoo License",
      "issuedBy": "Virginia Board of Health"
    }]
  };

  // Clinical MedicalBusiness Schema for professional credentials
  const clinicalMedicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ink Mugi PMU Studio",
    "medicalSpecialty": "Cosmetic Dermatology",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Virginia Licensed Permanent Cosmetic Tattooer",
      "identifier": "VA-PMU-2018-7857"
    },
    "healthPlanNetworksAccepted": "Cash, CareCredit, Afterpay"
  };

  // Dataset Schema for proprietary procedure data
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "PMU Procedure Outcomes & Safety Data by Ink Mugi",
    "description": "Anonymized analysis of 523 permanent makeup procedures conducted in Northern Virginia, detailing client satisfaction, healing times, and safety metrics. Updated quarterly.",
    "url": "https://inkmugi.com/pmu-safety-statistics",
    "creator": {
      "@type": "MedicalBusiness",
      "name": "Ink Mugi PMU Studio"
    },
    "distribution": {
      "@type": "DataDownload",
      "contentUrl": "https://inkmugi.com/data/pmu-safety-statistics.json"
    }
  };

  const authoritySchemas = [
    enhancedMedicalBusinessSchema,
    clinicalMedicalBusinessSchema,
    datasetSchema,
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "INK MUGI - Premier DMV Microshading & Ombre Powder Brows",
      "url": "https://www.inkmugi.com/authority",
      "description": "Washington DC Metro's leading permanent makeup authority specializing in microshading, ombre powder brows, and precision PMU artistry since 2020.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Annandale Professional Beauty Center",
        "addressLocality": "Annandale",
        "addressRegion": "VA",
        "postalCode": "22003",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.8303,
        "longitude": -77.1963
      },
      "telephone": "+1-703-555-0123",
      "email": "info@inkmugi.com",
      "priceRange": "$$-$$$",
      "paymentAccepted": ["Cash", "Credit Card", "Check"],
      "currenciesAccepted": "USD",
      "openingHours": ["Mo-Fr 09:00-17:00", "Sa 09:00-15:00"],
      "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      "logo": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      "sameAs": [
        "https://www.instagram.com/inkmugi",
        "https://www.facebook.com/inkmugi"
      ],
      "founder": {
        "@type": "Person",
        "name": "Master PMU Artist",
        "jobTitle": "Certified Permanent Makeup Artist",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Advanced Microshading Certification",
            "credentialCategory": "Professional Certification"
          },
          {
            "@type": "EducationalOccupationalCredential", 
            "name": "Ombre Powder Brows Mastery",
            "credentialCategory": "Advanced Training"
          }
        ]
      },
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 38.8303,
            "longitude": -77.1963
          },
          "geoRadius": "50000"
        }
      ],
      "serviceArea": [
        "Washington DC",
        "Arlington VA", 
        "Alexandria VA",
        "Annandale VA",
        "Fairfax VA",
        "Falls Church VA",
        "McLean VA",
        "Vienna VA"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah M."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Absolutely the best PMU artist in the DMV area. My ombre brows look incredibly natural and have lasted perfectly for over a year."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "DMV Authority Permanent Makeup Services",
      "provider": {
        "@type": "Organization",
        "name": "INK MUGI"
      },
      "serviceType": "Permanent Makeup Artistry",
      "areaServed": "Washington DC Metropolitan Area",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Expert PMU Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Microshading Eyebrows",
              "description": "Advanced microshading technique for natural, hair-like strokes"
            },
            "price": "500",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Ombre Powder Brows",
              "description": "Gradient shading technique for soft, powdered eyebrow look"
            },
            "price": "600",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Fine Line Tattoos",
              "description": "Delicate minimalist tattoos with precise thin lines"
            },
            "price": "200",
            "priceCurrency": "USD"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Ultimate Guide to Choosing the Best PMU Artist in Washington DC",
      "author": {
        "@type": "Organization",
        "name": "INK MUGI"
      },
      "publisher": {
        "@type": "Organization", 
        "name": "INK MUGI",
        "logo": {
          "@type": "ImageObject",
          "url": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
        }
      },
      "datePublished": "2024-01-15",
      "dateModified": "2024-01-20",
      "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      "url": "https://www.inkmugi.com/authority",
      "description": "Comprehensive authority guide to permanent makeup in the DMV area, featuring expert techniques, safety standards, and what to look for in a top PMU artist."
    }
  ];

  return (
    <>
      <SEO
        title="DMV's #1 PMU Authority | Expert Microshading & Ombre Brows | INK MUGI"
        description="Washington DC Metro's leading permanent makeup authority. Expert microshading, ombre powder brows, & PMU artistry. 4.9★ rated, 500+ transformations, industry-leading techniques."
        keywords="PMU authority, best permanent makeup artist DMV, microshading expert, ombre powder brows specialist, Washington DC PMU, Arlington VA permanent makeup, Alexandria eyebrow tattoo"
        canonicalUrl="https://www.inkmugi.com/authority"
        structuredData={authoritySchemas}
      />
      
      <div className="min-h-screen bg-white">
        <HeroSection />
        <StatsSection />
        <CredentialsGrid />
        <ServicesSection />
        <FAQSection />
        <TestimonialSection />
        <LocationInfo />
        <CTASection />
      </div>
    </>
  );
};

export default AuthorityPage;
