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
      "identifier": "1231002471"
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
    "license": "https://creativecommons.org/licenses/by-nc/4.0/",
    "creator": {
      "@type": "Organization",
      "name": "Ink Mugi PMU Studio",
      "url": "https://inkmugi.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Annandale Professional Beauty Center",
        "addressLocality": "Annandale",
        "addressRegion": "VA",
        "postalCode": "22003",
        "addressCountry": "US"
      }
    },
    "distribution": {
      "@type": "DataDownload",
      "contentUrl": "https://inkmugi.com/data/pmu-safety-statistics.json",
      "encodingFormat": "application/json"
    },
    "keywords": ["permanent makeup", "PMU safety", "cosmetic tattooing", "Northern Virginia", "medical statistics"],
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-01",
    "temporalCoverage": "2020-01-01/2024-12-31",
    "spatialCoverage": {
      "@type": "Place",
      "name": "Northern Virginia",
      "geo": {
        "@type": "GeoShape",
        "box": "38.7 -77.5 39.0 -77.0"
      }
    }
  };

  // FAQ Schema for Authority page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does permanent makeup last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Permanent makeup typically lasts 1-3 years, depending on your skin type, lifestyle, and aftercare. Oily skin tends to fade faster, while dry skin retains pigment longer. We recommend touch-ups every 12-18 months to maintain optimal color and shape."
        }
      },
      {
        "@type": "Question",
        "name": "Is the procedure painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients experience minimal discomfort thanks to our professional-grade topical numbing agents. The sensation is often described as similar to eyebrow tweezing. We prioritize your comfort throughout the entire process and can adjust numbing as needed."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between microshading and ombre powder brows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microshading creates individual hair-like strokes for a natural appearance, perfect for those wanting to enhance sparse brows. Ombre powder brows use a shading technique creating a soft, makeup-like finish that's ideal for oily skin and those preferring a bolder look."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the healing process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial healing takes 7-14 days, with complete healing occurring over 4-6 weeks. During the first week, you may experience slight swelling and scabbing. We provide detailed aftercare instructions to ensure optimal healing and results."
        }
      },
      {
        "@type": "Question",
        "name": "Can I still get permanent makeup if I have sensitive skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We conduct patch tests for clients with sensitive skin and use hypoallergenic, premium pigments. Our extensive consultation process includes reviewing your medical history and skin sensitivity to ensure the best possible outcome."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect during the consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your free consultation includes face analysis, skin assessment, brow mapping, color selection, and technique recommendation. We'll discuss your goals, lifestyle, and preferences to create a customized plan that's perfect for you."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose INK MUGI over other PMU artists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our combination of advanced training, 4+ years experience, 500+ successful procedures, 4.9-star rating, and comprehensive insurance sets us apart. We're state-licensed, health department approved, and committed to staying current with the latest techniques."
        }
      }
    ]
  };

  const authoritySchemas = [
    enhancedMedicalBusinessSchema,
    clinicalMedicalBusinessSchema,
    datasetSchema,
    faqSchema,
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
        title="DMV's #1 Licensed PMU Artist | Expert Microshading & Ombre Brows | INK MUGI Authority"
        description="Virginia-licensed PMU expert with 523+ procedures, 0.19% complication rate (industry avg: 2.5%). Hospital-grade studio serving Annandale, Arlington, Alexandria. Data-driven permanent makeup authority."
        keywords="licensed PMU artist Northern Virginia, ombre powder brows Annandale VA, microshading correction specialist 22003, permanent makeup safety data DMV, hospital-grade PMU studio Arlington, Virginia licensed permanent cosmetic tattooer, PMU healing time statistics Fairfax County, powder brow touch-up Annandale, permanent makeup for alopecia Northern VA, Korean PMU techniques Annandale"
        canonicalUrl="https://www.inkmugi.com/authority"
        structuredData={authoritySchemas}
      />
      
      <HeroSection />
      <StatsSection />
      <CredentialsGrid />
      <ServicesSection />
      <FAQSection />
      <TestimonialSection />
      <LocationInfo />
      <CTASection />
    </>
  );
};

export default AuthorityPage;
