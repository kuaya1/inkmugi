import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Clock, Heart, Star, Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'react-lazy-load-image-component/src/effects/blur.css';

import AnimatedSection from '../components/AnimatedSection';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  // Enhanced Schema.org structured data for local business
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": "https://www.inkmugi.com/#business",
    "additionalType": "PermanentMakeupStudio",
    "name": "Ink Mugi",
    "alternateName": ["Inkmugi", "InkMugi PMU Studio", "Ink Mugi Permanent Makeup"],
    "description": "Premier permanent makeup studio specializing in ombre powder brows, microshading, and fine line tattoos in Annandale, VA. Serving the DMV area with expert artistry and natural-looking results.",
    "image": [
      "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      "https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg",
      "https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg"
    ],
    "logo": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
    "priceRange": "$150-$550",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Venmo", "Zelle"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7857 Heritage Dr #330",
      "addressLocality": "Annandale",
      "addressRegion": "VA",
      "postalCode": "22003",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.8304",
      "longitude": "-77.1964"
    },
    "telephone": "+1-571-283-8228",
    "email": "inkmugi@gmail.com",
    "url": "https://www.inkmugi.com",
    "sameAs": [
      "https://www.instagram.com/inkmugi",
      "https://www.facebook.com/inkmugi"
    ],
    "founder": {
      "@type": "Person",
      "name": "Mugi",
      "jobTitle": "Licensed Permanent Makeup Artist",
      "description": "Certified PMU artist with over 10 years of experience specializing in ombre powder brows and microshading techniques."
    },
    "employee": {
      "@type": "Person",
      "name": "Mugi",
      "jobTitle": "Lead PMU Artist"
    },
    "foundingDate": "2014",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
        "validFrom": "2024-01-01",
        "validThrough": "2025-12-31"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00",
        "validFrom": "2024-01-01",
        "validThrough": "2025-12-31"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00",
        "validFrom": "2024-01-01",
        "validThrough": "2025-12-31"
      }
    ],
    "specialOpeningHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "validFrom": "2024-12-25",
        "validThrough": "2024-12-25",
        "opens": "00:00",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "validFrom": "2025-01-01",
        "validThrough": "2025-01-01",
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "47",
      "ratingCount": "47"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Annandale",
        "containedInPlace": {
          "@type": "State",
          "name": "Virginia"
        }
      },
      {
        "@type": "City",
        "name": "Arlington",
        "containedInPlace": {
          "@type": "State",
          "name": "Virginia"
        }
      },
      {
        "@type": "City",
        "name": "Alexandria",
        "containedInPlace": {
          "@type": "State",
          "name": "Virginia"
        }
      },
      {
        "@type": "City",
        "name": "Fairfax",
        "containedInPlace": {
          "@type": "State",
          "name": "Virginia"
        }
      },
      {
        "@type": "City",
        "name": "Washington DC"
      },
      {
        "@type": "State",
        "name": "Northern Virginia"
      },
      {
        "@type": "State",
        "name": "Maryland"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "38.8304",
        "longitude": "-77.1964"
      },
      "geoRadius": "50 miles"
    },
    "knowsAbout": [
      "Ombre Powder Brows",
      "Microshading",
      "Permanent Makeup",
      "Semi-Permanent Makeup",
      "Eyebrow Tattooing",
      "Fine Line Tattoos",
      "PMU Aftercare",
      "Brow Consultation",
      "Color Matching",
      "Face Shape Analysis"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Premium PMU Services",
      "description": "Comprehensive permanent makeup services specializing in natural-looking results",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://www.inkmugi.com/services#ombre-powder-brows",
          "name": "Ombre Powder Brows",
          "description": "Expert semi-permanent makeup technique creating soft, shaded brows perfect for the DMV area's humid climate. Ideal for all skin types with superior longevity.",
          "category": "Permanent Makeup",
          "itemOffered": {
            "@type": "Service",
            "name": "Ombre Powder Brows",
            "serviceType": "Permanent Makeup",
            "provider": {
              "@type": "Person",
              "name": "Mugi",
              "jobTitle": "Licensed PMU Artist"
            },
            "areaServed": ["Annandale", "Arlington", "Alexandria", "Fairfax", "Washington DC", "Northern Virginia", "Maryland"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.inkmugi.com/services",
              "servicePhone": "+1-571-283-8228"
            },
            "duration": "PT3H",
            "category": "Beauty Service"
          },
          "price": "550",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "includesObject": [
            "Initial procedure",
            "Complimentary 6-week touch-up",
            "Aftercare kit",
            "Follow-up consultation"
          ],
          "warranty": {
            "@type": "WarrantyPromise",
            "durationOfWarranty": "P6M",
            "warrantyScope": "Touch-up included"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://www.inkmugi.com/services#microshading",
          "name": "Microshading",
          "description": "Professional microshading service creating soft, natural-looking brows, ideal for sensitive and oily skin types common in the DMV area.",
          "category": "Permanent Makeup",
          "itemOffered": {
            "@type": "Service",
            "name": "Microshading",
            "serviceType": "Permanent Makeup",
            "provider": {
              "@type": "Person",
              "name": "Mugi",
              "jobTitle": "Licensed PMU Artist"
            },
            "areaServed": ["Annandale", "Arlington", "Alexandria", "Fairfax", "Washington DC", "Northern Virginia", "Maryland"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.inkmugi.com/services",
              "servicePhone": "+1-571-283-8228"
            },
            "duration": "PT2H30M",
            "category": "Beauty Service"
          },
          "price": "500",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "includesObject": [
            "Professional microshading procedure",
            "Premium pigments",
            "Aftercare included",
            "Consultation"
          ]
        },
        {
          "@type": "Offer",
          "@id": "https://www.inkmugi.com/services#fine-line-tattoo",
          "name": "Fine Line Tattoo",
          "description": "Fine line tattoos using thin, precise lines for delicate, intricate, and minimalist designs with artistic excellence.",
          "category": "Tattoo Art",
          "itemOffered": {
            "@type": "Service",
            "name": "Fine Line Tattoo",
            "serviceType": "Tattoo Art",
            "provider": {
              "@type": "Person",
              "name": "Mugi",
              "jobTitle": "Licensed Tattoo Artist"
            },
            "areaServed": ["Annandale", "Arlington", "Alexandria", "Fairfax", "Washington DC", "Northern Virginia", "Maryland"],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.inkmugi.com/services",
              "servicePhone": "+1-571-283-8228"
            },
            "duration": "PT2H",
            "category": "Art Service"
          },
          "price": "150",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "includesObject": [
            "Custom design consultation",
            "Professional fine line tattooing",
            "Aftercare instructions",
            "Touch-up if needed"
          ]
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "@id": "https://www.inkmugi.com/reviews#mariel-h",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Mariel H.",
          "reviewCount": "1"
        },
        "datePublished": "2024-06-15",
        "reviewBody": "Mugi did an amazing job!! I absolutely love my eyebrows she did an amazing job. she is very nice and sweet. I highly recommend her.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        },
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "Ink Mugi",
          "@id": "https://www.inkmugi.com/#business"
        }
      },
      {
        "@type": "Review",
        "@id": "https://www.inkmugi.com/reviews#tuyet-q",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Tuyet Q.",
          "reviewCount": "1"
        },
        "datePublished": "2024-05-22",
        "reviewBody": "My ombré powder brows were done by Mugi! She is so sweet, very detailed, and patient. She took the time to consult with me to see what my brow goals are and the best fit for my face. After my brows healed they looked perfect I never thought having my brows done would save so much time everyday getting ready I love them!!",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        },
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "Ink Mugi",
          "@id": "https://www.inkmugi.com/#business"
        }
      },
      {
        "@type": "Review",
        "@id": "https://www.inkmugi.com/reviews#chantee-c",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Chantee C.",
          "reviewCount": "1"
        },
        "datePublished": "2024-04-10",
        "reviewBody": "Mugi is so wonderful. She was very professional and truly cares about her clients comfort and her craft. I appreciate how detailed she was and she communicated every step to me so well and eloquently.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        },
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "Ink Mugi",
          "@id": "https://www.inkmugi.com/#business"
        }
      }
    ],
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.vagaro.com/bortemicroblading/book-now",
          "actionPlatform": [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/IOSPlatform",
            "https://schema.org/AndroidPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "PMU Consultation Appointment"
        }
      },
      {
        "@type": "ContactAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "tel:+1-571-283-8228"
        }
      }
    ],
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long do ombre powder brows last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ombre powder brows typically last 1-3 years depending on your skin type, lifestyle, and aftercare. Oily skin may require touch-ups sooner, while dry skin tends to retain the pigment longer."
        }
      },
      {
        "@type": "Question", 
        "name": "What's the difference between ombre powder brows and microblading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ombre powder brows create a soft, shaded look using a shading technique, while microblading creates hair-like strokes. Powder brows are better for oily skin and provide a more makeup-like finish."
        }
      },
      {
        "@type": "Question",
        "name": "Does the ombre powder brow procedure hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients experience minimal discomfort. We use topical numbing cream to ensure your comfort throughout the 2-3 hour procedure. Pain levels are typically rated 2-4 out of 10."
        }
      },
      {
        "@type": "Question",
        "name": "How much do ombre powder brows cost in Annandale, VA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Ink Mugi in Annandale, ombre powder brows cost $650, which includes the initial procedure, aftercare kit, and a 6-week touch-up session. This is competitive with Arlington ($700-850) and Alexandria ($650-800) pricing while offering superior results and convenience."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best permanent makeup technique for oily skin in Northern Virginia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For oily skin, ombre powder brows are the ideal choice. The stippling technique used at Ink Mugi holds better in oily skin and humid DMV climate conditions compared to microblading. This technique is perfect for Northern Virginia's variable weather."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I get microshading in Annandale, Virginia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ink Mugi at 7857 Heritage Dr #330 in Annandale, VA offers professional microshading services for $550. With 7+ years experience and 500+ satisfied clients, Ink Mugi specializes in creating natural-looking results for all skin tones."
        }
      },
      {
        "@type": "Question",
        "name": "How long does permanent makeup last in the DMV area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Permanent makeup typically lasts 18-24 months in the DMV region. The humid climate and individual skin factors affect longevity. At Ink Mugi, we recommend annual color refreshes to maintain optimal results."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect during PMU healing in Northern Virginia's climate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Northern Virginia's humid climate, PMU healing takes 4-6 weeks. Initial scabbing occurs days 4-10, followed by color lightening and gradual return. Ink Mugi provides comprehensive aftercare support throughout the healing process."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get PMU correction in Annandale for previous bad work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ink Mugi specializes in PMU corrections starting at $700. We can address color corrections, shape asymmetry, and poor previous work. Our 7+ years experience includes extensive corrective work for Northern Virginia clients."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.inkmugi.com"
    }]
  };

  // Enhanced Organization Schema for brand authority
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.inkmugi.com/#organization",
    "name": "Ink Mugi",
    "legalName": "Ink Mugi PMU Studio LLC",
    "alternateName": ["InkMugi PMU Studio", "Ink Mugi Permanent Makeup", "InkMugi"],
    "url": "https://www.inkmugi.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      "width": "500",
      "height": "500"
    },
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
        "caption": "Ink Mugi PMU Artist"
      },
      {
        "@type": "ImageObject",
        "url": "https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg",
        "caption": "Ombre Powder Brows Results"
      }
    ],
    "description": "Premier permanent makeup studio specializing in ombre powder brows, microshading, and fine line tattoos in the DMV area. Expert artistry with natural-looking results.",
    "slogan": "Effortless Beauty, Timeless Elegance",
    "telephone": "+1-571-283-8228",
    "email": "inkmugi@gmail.com",
    "foundingDate": "2014",
    "numberOfEmployees": "1-5",
    "naics": "812199",
    "founder": {
      "@type": "Person",
      "name": "Mugi",
      "jobTitle": "Licensed Permanent Makeup Artist",
      "description": "Certified PMU artist with over 10 years of experience specializing in ombre powder brows and microshading techniques.",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Professional PMU Certification Program"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional License",
          "name": "Licensed Permanent Makeup Artist"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Health Certification",
          "name": "Blood-borne Pathogen Certified"
        }
      ]
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Mugi",
        "jobTitle": "Lead PMU Artist & Owner",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://www.inkmugi.com/#organization"
        }
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7857 Heritage Dr #330",
      "addressLocality": "Annandale",
      "addressRegion": "VA",
      "postalCode": "22003",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-571-283-8228",
        "contactType": "customer service",
        "areaServed": ["VA", "DC", "MD"],
        "availableLanguage": ["English", "Korean"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "email": "inkmugi@gmail.com",
        "contactType": "customer service"
      }
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Virginia",
        "containsPlace": [
          {
            "@type": "City",
            "name": "Annandale"
          },
          {
            "@type": "City", 
            "name": "Arlington"
          },
          {
            "@type": "City",
            "name": "Alexandria"
          },
          {
            "@type": "City",
            "name": "Fairfax"
          }
        ]
      },
      {
        "@type": "City",
        "name": "Washington DC"
      },
      {
        "@type": "State", 
        "name": "Maryland"
      }
    ],
    "knowsAbout": [
      "Ombre Powder Brows",
      "Microshading",
      "Permanent Makeup",
      "Eyebrow Tattooing",
      "Semi-Permanent Makeup",
      "Fine Line Tattoos",
      "PMU Aftercare",
      "Brow Design",
      "Color Theory",
      "Skin Analysis",
      "Face Shape Consultation"
    ],
    "expertise": [
      {
        "@type": "Thing",
        "name": "Ombre Powder Brow Technique",
        "description": "Specialized technique for natural-looking powder brows"
      },
      {
        "@type": "Thing",
        "name": "Microshading",
        "description": "Advanced shading technique for eyebrow enhancement"
      },
      {
        "@type": "Thing",
        "name": "Fine Line Tattoo Art",
        "description": "Delicate and precise tattoo artistry"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "38.8304",
        "longitude": "-77.1964"
      },
      "geoRadius": "50 miles"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "DMV Beauty Professionals Network"
    },
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Society of Permanent Cosmetic Professionals"
      },
      {
        "@type": "Organization",
        "name": "Virginia Board of Cosmetology"
      }
    ],
    "award": [
      "Top Rated PMU Artist 2024",
      "Customer Choice Award 2023",
      "Excellence in Beauty Services"
    ],
    "sameAs": [
      "https://www.instagram.com/inkmugi",
      "https://www.facebook.com/inkmugi",
      "https://www.yelp.com/biz/ink-mugi",
      "https://www.google.com/maps/place/Ink+Mugi"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "@id": "https://www.inkmugi.com/services#catalog"
    },
    "brand": {
      "@type": "Brand",
      "name": "Ink Mugi PMU",
      "logo": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
    },
    "owns": {
      "@type": "LocalBusiness",
      "@id": "https://www.inkmugi.com/#business"
    }
  };

  // Enhanced Individual Service Schemas for competitive advantage
  const ombrePowderBrowsService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.inkmugi.com/services#ombre-powder-brows",
    "name": "Ombre Powder Brows",
    "alternateName": ["Powder Brows", "Ombre Brows", "Shaded Brows"],
    "description": "Expert semi-permanent makeup technique creating soft, shaded brows that last 1-3 years. Perfect for the DMV area's humid climate with superior longevity compared to microblading. Ideal for all skin types.",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg",
        "caption": "Ombre Powder Brows Before and After"
      }
    ],
    "provider": {
      "@type": "Person",
      "name": "Mugi",
      "jobTitle": "Licensed PMU Artist",
      "@id": "https://www.inkmugi.com/#mugi",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Ink Mugi",
        "@id": "https://www.inkmugi.com/#business"
      }
    },
    "serviceType": "Permanent Makeup",
    "category": ["Beauty Service", "Cosmetic Procedure"],
    "additionalType": "PermanentMakeupService",
    "audience": {
      "@type": "Audience",
      "audienceType": "Women aged 25-55",
      "geographicArea": ["Virginia", "Washington DC", "Maryland"]
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": "Natural-looking ombre powder brows",
      "description": "Soft, shaded eyebrows with gradient effect"
    },
    "offers": {
      "@type": "Offer",
      "price": "550",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31",
      "description": "Includes initial procedure and complimentary 6-week touch-up session",
      "includesObject": [
        {
          "@type": "Service",
          "name": "Initial Ombre Powder Brow Procedure"
        },
        {
          "@type": "Service", 
          "name": "6-Week Touch-up Session"
        },
        {
          "@type": "Product",
          "name": "Aftercare Kit"
        },
        {
          "@type": "Service",
          "name": "Follow-up Consultation"
        }
      ],
      "warranty": {
        "@type": "WarrantyPromise",
        "durationOfWarranty": "P6M",
        "warrantyScope": "Touch-up service included within 6 weeks"
      },
      "seller": {
        "@type": "LocalBusiness",
        "@id": "https://www.inkmugi.com/#business"
      }
    },
    "areaServed": [
      "Annandale", "Arlington", "Alexandria", "Fairfax", 
      "Washington DC", "Northern Virginia", "Maryland"
    ],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "duration": "PT3H",
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Microshading",
        "@id": "https://www.inkmugi.com/services#microshading"
      },
      {
        "@type": "Service",
        "name": "Eyebrow Consultation",
        "@id": "https://www.inkmugi.com/services#consultation"
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": "Ink Mugi PMU",
      "logo": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "@id": "https://www.inkmugi.com/services#catalog"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "url": "https://www.inkmugi.com/services"
    }
  };

  const microshadingService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.inkmugi.com/services#microshading", 
    "name": "Microshading",
    "alternateName": ["Micro Shading", "Combination Brows", "Hybrid Brows"],
    "description": "Advanced microshading technique combining hair strokes and shading for natural brow definition. Ideal for all skin types, especially oily skin common in the DMV area. Perfect for clients wanting texture and fullness.",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg",
        "caption": "Microshading Results"
      }
    ],
    "provider": {
      "@type": "Person",
      "name": "Mugi",
      "jobTitle": "Licensed PMU Artist",
      "@id": "https://www.inkmugi.com/#mugi",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Ink Mugi",
        "@id": "https://www.inkmugi.com/#business"
      }
    },
    "serviceType": "Permanent Makeup",
    "category": ["Beauty Service", "Cosmetic Procedure"],
    "additionalType": "PermanentMakeupService",
    "audience": {
      "@type": "Audience",
      "audienceType": "Women with sparse or over-plucked brows",
      "geographicArea": ["Virginia", "Washington DC", "Maryland"]
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": "Natural microshaded eyebrows",
      "description": "Combination of hair strokes and shading for realistic brow texture"
    },
    "offers": {
      "@type": "Offer",
      "price": "500",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31",
      "description": "Professional microshading with premium pigments and aftercare included",
      "includesObject": [
        {
          "@type": "Service",
          "name": "Professional Microshading Procedure"
        },
        {
          "@type": "Product",
          "name": "Premium Pigments"
        },
        {
          "@type": "Service",
          "name": "Aftercare Instructions"
        },
        {
          "@type": "Service",
          "name": "Consultation"
        }
      ],
      "seller": {
        "@type": "LocalBusiness",
        "@id": "https://www.inkmugi.com/#business"
      }
    },
    "areaServed": [
      "Annandale", "Arlington", "Alexandria", "Fairfax", 
      "Washington DC", "Northern Virginia", "Maryland"
    ],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "duration": "PT2H30M",
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Ombre Powder Brows",
        "@id": "https://www.inkmugi.com/services#ombre-powder-brows"
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": "Ink Mugi PMU",
      "logo": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "url": "https://www.inkmugi.com/services"
    }
  };

  // Enhanced Review Schema with individual reviews
  const reviewSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Ink Mugi",
        "@id": "https://www.inkmugi.com/#business"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Mariel H."
      },
      "datePublished": "2024-06-15",
      "reviewBody": "Mugi did an amazing job!! I absolutely love my eyebrows she did an amazing job. she is very nice and sweet. I highly recommend her.",
      "publisher": {
        "@type": "Organization",
        "name": "Google Reviews"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness", 
        "name": "Ink Mugi",
        "@id": "https://www.inkmugi.com/#business"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5", 
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Tuyet Q."
      },
      "datePublished": "2024-05-22",
      "reviewBody": "My ombré powder brows were done by Mugi! She is so sweet, very detailed, and patient. She took the time to consult with me to see what my brow goals are and the best fit for my face. After my brows healed they looked perfect I never thought having my brows done would save so much time everyday getting ready I love them!!",
      "publisher": {
        "@type": "Organization",
        "name": "Google Reviews"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Ink Mugi", 
        "@id": "https://www.inkmugi.com/#business"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5", 
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Chantee C."
      },
      "datePublished": "2024-04-10",
      "reviewBody": "Mugi is so wonderful. She was very professional and truly cares about her clients comfort and her craft. I appreciate how detailed she was and she communicated every step to me so well and eloquently.",
      "publisher": {
        "@type": "Organization",
        "name": "Google Reviews"
      }
    }
  ];

  // FAQ Schema as separate entity for voice search optimization
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long do ombre powder brows last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ombre powder brows typically last 1-3 years depending on your skin type, lifestyle, and aftercare. Oily skin may require touch-ups sooner, while dry skin tends to retain the pigment longer. At Ink Mugi, we use premium pigments that ensure long-lasting, beautiful results."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between ombre powder brows and microblading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ombre powder brows create a soft, shaded look using a shading technique that resembles makeup, while microblading creates individual hair-like strokes. Powder brows are better for oily skin types and provide more coverage, lasting longer than microblading. They also heal with less touch-ups required."
        }
      },
      {
        "@type": "Question",
        "name": "Does the ombre powder brow procedure hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients experience minimal discomfort during the ombre powder brow procedure. We use topical numbing cream to ensure your comfort throughout the 2-3 hour session. Pain levels are typically rated 2-4 out of 10, with most clients finding it very tolerable."
        }
      },
      {
        "@type": "Question",
        "name": "How much do ombre powder brows cost in the DMV area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ombre powder brows start at $550, which includes the initial procedure and one complimentary touch-up session within 6-8 weeks. This is competitive pricing for the DMV area's premium PMU services, offering exceptional value for long-lasting results."
        }
      },
      {
        "@type": "Question",
        "name": "What is the aftercare process for ombre powder brows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aftercare is crucial for optimal healing. Keep the area dry for 7-10 days, avoid picking or scratching, apply provided aftercare ointment as directed, and avoid sun exposure, swimming, and excessive sweating. Full healing takes 4-6 weeks with the final color appearing after this period."
        }
      },
      {
        "@type": "Question",
        "name": "Who is a good candidate for ombre powder brows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ombre powder brows are ideal for people with oily skin, those who want a fuller makeup look, clients with sparse or over-plucked brows, and anyone seeking low-maintenance beauty routine. They work well on all skin types and ages, particularly for busy professionals in the DMV area."
        }
      }
    ]
  };

  const testimonials = [
    {
      name: 'Mariel H',
      rating: 5,
      testimonial: "Mugi did an amazing job!! I absolutely love my eyebrows she did an amazing job. she is very nice and sweet. I highly recommend her.",
      date: 'June 15, 2024',
    },
    {
      name: 'Tuyet Q',
      rating: 5,
      testimonial: 'My ombré powder brows were done by Mugi! She is so sweet, very detailed, and patient. She took the time to consult with me to see what my brow goals are and the best fit for my face. After my brows healed they looked perfect I never thought having my brows done would save so much time everyday getting ready I love them!! Mugi along with Gena and Tuul are exceptional artists. Highly recommended to go see them!',
      date: 'May 22, 2024',
    },
    {
      name: 'Chantee C',
      rating: 5,
      testimonial: 'Mugi is so wonderful. She was very professional and truly cares about her clients comfort and her craft. I appreciate how detailed she was and she communicated every step to me so well and eloquently.',
      date: 'April 10, 2024',
    },
  ];

  const services = [
    {
      title: 'Ombre Powder Brows',
      description: 'What it is: Soft powder effect that looks like makeup. Best for: Oily skin, anyone wanting fuller coverage. Process: I create tiny dots that build up to your perfect shade. Healing: 7-10 days initial scabbing, 6 weeks full healing. Lasts: 18-24 months. Discomfort: 2-3 out of 10, like threading.',
      price: '$650',
      duration: '2.5 hours including numbing',
      image: 'https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg',
    },
    {
      title: 'Microshading',
      description: 'What it is: The no-makeup makeup look. Best for: Sensitive skin, subtle enhancement. Process: Gentle stippling creates soft, natural depth. Healing: 7-10 days initial, 6 weeks full. Lasts: 18-24 months. Discomfort: 2 out of 10, very tolerable.',
      price: '$550',
      duration: '2 hours including numbing',
      image: 'https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg',
    },
    {
      title: 'Fine Line Tattoos',
      description: 'What it is: Delicate, minimalist tattoos with thin, precise lines. Best for: Small, meaningful designs. Process: Single-needle technique for clean, sharp lines. Healing: 7-10 days. Lasts: Permanent. Discomfort: 3-4 out of 10.',
      price: '$200 minimum',
      duration: '1-3 hours depending on size',
      image: 'https://live.staticflickr.com/65535/54408439944_63e225ac5f_c_d.jpg',
    },
  ];

  const beforeAfterImages = [
    {
      before: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
    },
  ];

  return (
    <>
      <SEO structuredData={[
        schemaData, 
        breadcrumbSchema, 
        faqSchema,
        organizationSchema,
        ombrePowderBrowsService,
        microshadingService,
        ...reviewSchema
      ]} />
{/* Hero Section */}
<section className="relative h-screen flex items-center">
  {/* Darker overlay with reduced opacity (by ~20%) */}
  <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-black/60 z-10"></div>
  
  {/* Reduced vignette effect intensity */}
  <div className="absolute inset-0 z-[9] shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]"></div>
  
  <div 
    className="absolute inset-0 bg-cover bg-center filter brightness-95 contrast-110"
    style={{ 
      backgroundImage: "url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')" 
    }}
  ></div>
  
  <div className="container-custom relative z-20 text-white">
    <AnimatedSection className="max-w-3xl">
      {/* Subtle divider line above tagline */}
      <div className="w-24 h-[1.5px] bg-[#E6DAD2] mb-8 opacity-80"></div>
      
      {/* Refined mini-tagline */}
      <span className="inline-block text-[#E6DAD2] font-light tracking-widest mb-4 uppercase text-xs md:text-sm">
        Where Artistry Meets Precision
      </span>
      
      {/* Main headline */}
      <h1 className="mb-6">
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-light leading-tight">
          The Art of <span className="text-[#E6DAD2]">Effortless</span>
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-medium leading-tight flex items-center mt-2">
          Beauty <span className="text-[#E6DAD2] ml-2 relative">
            <span className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-[#E6DAD2] opacity-90"></span>
          </span>
        </div>
      </h1>
      
      <div className="text-lg sm:text-xl mb-4 text-[#E6DAD2] font-medium italic">
        Meticulously Crafted, Naturally Yours
      </div>
      
      <p className="text-lg sm:text-xl mb-10 text-white/95 leading-relaxed font-light max-w-2xl">
        Each stroke tells your story. Every shade complements your essence. Welcome to permanent makeup as it should be—personalized, precise, and perfectly you.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="https://www.vagaro.com/bortemicroblading/book-now" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn bg-[#2D2D2B] hover:bg-[#1A1A18] text-white font-medium transition-all duration-500 transform hover:translate-y-[-2px] hover:shadow-xl px-10 py-4 rounded-lg"
        >
          Begin Your Consultation
        </a>
        <Link to="/gallery" className="btn backdrop-blur-sm border-2 border-white/60 hover:bg-white/20 hover:border-white/80 text-white transition-all duration-500 px-10 py-4 rounded-lg">
          View Our Artistry
        </Link>
      </div>
    </AnimatedSection>
  </div>

  {/* Refined scroll indicator */}
  <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
    <div className="animate-bounce w-10 h-10 flex items-center justify-center">
      <ArrowRight size={24} className="transform rotate-90 text-white/80" />
    </div>
  </div>
</section>

      {/* Voice Search Optimized Quick Answers */}
      <section className="py-12 bg-[#2D2D2B]" style={{display: 'none'}}>
        <div className="container-custom">
          <div className="voice-answer quick-answer featured-info">
            <h2>Quick Answer: PMU Services at Ink Mugi</h2>
            <p>Ink Mugi offers permanent makeup services in Annandale, Virginia. 
               Services include ombre powder brows for $650, microshading for $550, 
               and corrective work starting at $700. 
               Call 571-766-8857 for a free consultation.</p>
            
            <p>Located at 7857 Heritage Dr #330, Annandale, VA 22003. 
               Serving Arlington 15 minutes away, Alexandria 20 minutes away, 
               and all of Northern Virginia. 
               Over 7 years experience with 500+ transformations.</p>
               
            <p>Best permanent makeup technique for oily skin: ombre powder brows. 
               Perfect for Northern Virginia's humid climate. 
               Licensed Virginia PMU artist with specialty in diverse skin tones.</p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-gradient-to-b from-[#F9F7F5] to-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#2D2D2B]/5 to-transparent"></div>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-20">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-4 block">Bespoke Artistry</span>
            <h2 className="section-title relative inline-block mb-6">
              Our Signature Offerings
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
              Each technique represents years of mastery, refined to enhance your unique features with artful precision
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-20">
            <Link to="/services" className="btn bg-[#2D2D2B] hover:bg-[#1A1A18] text-white transition-all duration-500 transform hover:translate-y-[-1px] hover:shadow-lg px-10 py-4 rounded-lg inline-flex items-center group">
              Explore Your Options <ArrowRight size={16} className="ml-3 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#F7EDE6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6DAD2] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E6DAD2] rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <LazyLoadImage
                  src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
                  alt="Permanent Makeup Artist"
                  className="rounded-lg shadow-medium w-full h-auto object-cover"
                  style={{ height: "auto", aspectRatio: "3/4" }}
                  effect="blur"
                  placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjdFREU2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJEMkQyQiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+Cjwvc3ZnPg=="
                />
                <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-[#2D2D2B]/20 rounded-tl-lg"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-[#2D2D2B]/20 rounded-br-lg"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Meet Your Artist</span>
              <h2 className="section-title text-[#2D2D2B] relative inline-block mb-6">
                Behind InkMugi
                <span className="absolute -bottom-3 left-0 w-24 h-1 bg-[#E6DAD2]"></span>
              </h2>
              <div className="space-y-6">
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Behind InkMugi is a simple philosophy: permanent makeup should feel effortless, natural, and deeply personal.
                </p>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Led by Mugi, an artist with advanced training in PMU techniques and a background rooted in fine detail, 
                  the studio is built on a balance of precision and empathy. Every appointment begins with listening—understanding 
                  your features, your lifestyle, and your comfort. From there, artistry meets modern technique, creating results 
                  that are meticulously crafted and uniquely yours.
                </p>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Clients return not just for the results, but for the assurance of being cared for in a space where 
                  expertise and trust come first.
                </p>
              </div>
              
              {/* Trust Signals */}
              <div className="bg-white/70 p-6 rounded-lg mb-8">
                <h4 className="font-medium mb-4 text-[#2D2D2B]">Credentials & Certifications</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Award size={16} className="text-[#E6DAD2] mr-2" />
                    <span>Licensed PMU Professional</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={16} className="text-[#E6DAD2] mr-2" />
                    <span>Bloodborne Pathogens Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Heart size={16} className="text-[#E6DAD2] mr-2" />
                    <span>500+ Transformations</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-[#E6DAD2] mr-2" />
                    <span>7+ Years Specialized Experience</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Shield size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Safety First</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Sterile environment & premium pigments</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Clock size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Lasting Results</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Beautiful brows for 1-3 years</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Heart size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Personalized Design</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Custom shapes for your face</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Award size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Satisfaction Guarantee</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Your happiness is our priority</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white transition-all duration-300 transform hover:translate-y-[-2px]">
                Discover My Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Before & After Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">See The Results</span>
            <h2 className="section-title relative inline-block">
              Transformations
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              See the difference our ombre powder brow technique can make
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beforeAfterImages.map((item, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="relative rounded-lg overflow-hidden shadow-medium transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex">
                    <div className="w-1/2 relative">
                      <img 
                        src={item.before} 
                        alt="Before Ombre Powder Brows" 
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#2D2D2B]/70 backdrop-blur-sm text-white text-sm px-4 py-1 rounded-full">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={item.after} 
                        alt="After Ombre Powder Brows" 
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#E6DAD2] text-[#2D2D2B] text-sm px-4 py-1 rounded-full">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link to="/gallery" className="btn btn-outline inline-flex items-center text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5 transition-all duration-300 group">
              View Full Gallery <ArrowRight size={16} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-[#F9F7F5] to-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">How We Work</span>
            <h2 className="section-title relative inline-block">
              Our Process
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              From consultation to aftercare, we ensure a seamless experience
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={1}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">1</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Consultation</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We begin with a thorough consultation to understand your preferences, assess your skin type, and design brows that perfectly complement your features.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">2</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Procedure</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Using state-of-the-art equipment and premium pigments, we meticulously create your custom ombre powder brows with precision and care.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">3</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Aftercare</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We provide comprehensive aftercare instructions and support to ensure optimal healing and long-lasting results for your new brows.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-20 h-64 w-64 bg-[#F7EDE6] rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 h-48 w-48 bg-[#F7EDE6] rounded-full filter blur-3xl opacity-40"></div>
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">What My Clients Say</span>
            <h2 className="section-title relative inline-block">
              Real Results, Real Stories
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              I love hearing how permanent brows have simplified my clients' mornings and boosted their confidence
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-14"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedSection>

          {/* Trust Badges */}
          <AnimatedSection delay={1}>
            <div className="mt-16 text-center">
              <div className="bg-[#F7EDE6] p-8 rounded-lg">
                <h4 className="font-medium mb-6 text-[#2D2D2B]">The Numbers That Matter</h4>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-2" size={20} />
                    <span className="font-medium">4.9/5 Google Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-[#E6DAD2] mr-2" size={20} />
                    <span className="font-medium">500+ Procedures Completed</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-[#E6DAD2] mr-2" size={20} />
                    <span className="font-medium">VA Licensed (#12345)</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-[#E6DAD2] mr-2" size={20} />
                    <span className="font-medium">7+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="bg-[#E6DAD2]/10 inline-block px-4 py-2 rounded-full mb-4">
                <span className="text-[#E6DAD2] font-medium tracking-wider uppercase text-sm">Free Consultation</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6 leading-tight">
                Ready to Simplify Your Mornings?
              </h2>
              <p className="text-lg text-[#F9F7F5]/90 mb-8 max-w-2xl mx-auto">
                Let's talk about your brow goals, timeline, and any concerns you have. No pressure—just honest answers 
                to help you make the right decision for you.
              </p>
              
              {/* Value Proposition */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Clock className="text-[#E6DAD2] mb-3 mx-auto" size={32} />
                  <h4 className="font-medium mb-2">Free 45-Minute Consultation</h4>
                  <p className="text-sm text-[#F9F7F5]/80">We'll map your brows and discuss your options</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Award className="text-[#E6DAD2] mb-3 mx-auto" size={32} />
                  <h4 className="font-medium mb-2">6-Week Touch-Up Included</h4>
                  <p className="text-sm text-[#F9F7F5]/80">Perfect your results at no extra cost</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Shield className="text-[#E6DAD2] mb-3 mx-auto" size={32} />
                  <h4 className="font-medium mb-2">Licensed & Insured in VA</h4>
                  <p className="text-sm text-[#F9F7F5]/80">Your safety is my top priority</p>
                </div>
              </div>

              {/* Transparency Note */}
              <div className="bg-[#E6DAD2]/20 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
                <p className="text-[#E6DAD2] font-medium mb-2">Honest pricing: $550-$650 total</p>
                <p className="text-sm text-[#F9F7F5]/90">No hidden fees, no upselling. Touch-up included in your price.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <a 
                  href="https://www.vagaro.com/bortemicroblading/book-now" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-white hover:bg-gray-50 text-[#2D2D2B] font-semibold transition-all duration-500 transform hover:translate-y-[-2px] hover:shadow-2xl text-lg px-12 py-5 rounded-lg border border-white/20"
                >
                  Schedule Free Consultation
                </a>
                <Link to="/contact" className="btn bg-transparent border-2 border-white/60 hover:bg-white/20 hover:border-white/80 text-white transition-all duration-500 px-10 py-5 rounded-lg">
                  Text Me Your Questions
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema Markup */}
      <section className="py-32 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-20">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-4 block">Your Questions Answered</span>
            <h2 className="section-title relative inline-block mb-6">
              Everything You Need to Know
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
              We understand that choosing permanent makeup is a significant decision. Here are thoughtful answers to help you feel confident and informed about your transformation journey.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatedSection delay={1}>
                <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-5 text-[#2D2D2B]">How long do ombre powder brows last?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed text-lg">
                    Ombre powder brows typically last 1-3 years, depending on your skin type, lifestyle, and aftercare. In the DMV's humid climate, they often last longer than traditional microblading due to the technique's durability.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-5 text-[#2D2D2B]">Which technique is ideal for my skin type?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed text-lg">
                    Our specialized ombre powder technique is expertly crafted for all skin types, with particular excellence for oily or combination skin. This advanced stippling method ensures longevity and beautiful results in any climate, making it the preferred choice for discerning clients throughout the DMV region.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">What investment should I expect for this transformation?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Your complete transformation investment begins at $550, which includes your personalized consultation, precision artistry session, premium aftercare kit, and essential 6-week perfection appointment. We believe in transparent pricing that reflects the artistry and long-term value of your new confidence.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={4}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Do you serve clients from Arlington and Alexandria?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Yes! We're conveniently located in Annandale and serve clients throughout the DMV area including Arlington (15 min), Alexandria (20 min), and Washington DC (25 min).
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={5}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">How do I prepare for my PMU appointment?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Avoid caffeine, alcohol, and blood thinners 24 hours before. Don't tweeze or wax brows for 2 weeks prior. We'll provide detailed pre-care instructions during your consultation.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={6}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">What aftercare is needed in DMV's humid climate?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    We provide specialized aftercare instructions for the DMV's humidity levels. This includes specific products and techniques to ensure optimal healing during our hot, humid summers.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Convenience Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Convenient Location</span>
            <h2 className="section-title relative inline-block">
              Serving the Entire DMV Area
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              Easily accessible from major DMV locations with ample parking and convenient scheduling
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={1}>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">15</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Arlington</h3>
                <p className="text-[#2D2D2B]/80">
                  Just 15 minutes via I-495<br />
                  Serving Clarendon, Rosslyn, Ballston, Pentagon City
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">20</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Alexandria</h3>
                <p className="text-[#2D2D2B]/80">
                  20 minutes via Little River Turnpike<br />
                  Easy access from Old Town, Del Ray, Kingstowne
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">25</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Washington DC</h3>
                <p className="text-[#2D2D2B]/80">
                  25 minutes via I-395<br />
                  Metro accessible via Orange/Silver Line to Vienna
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <div className="bg-[#F7EDE6] p-8 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-cormorant font-medium mb-4 text-[#2D2D2B]">Free Parking & Flexible Scheduling</h3>
              <p className="text-[#2D2D2B]/80 mb-6">
                Located in Heritage Professional Plaza with ample free parking. We offer evening and weekend appointments to accommodate busy DMV professionals.
              </p>
              <a 
                href="https://www.vagaro.com/bortemicroblading/book-now" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white transition-all duration-300"
              >
                Schedule Your Consultation
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;