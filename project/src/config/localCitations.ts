/**
 * Local Citation & Authority Building Strategy
 * Phase 3: Establishing Comprehensive Online Presence
 * Priority: HIGH - Local Search Authority Building
 */

export const priorityDirectories = [
  // TIER 1: CRITICAL PLATFORMS (Complete First)
  {
    platform: "Yelp for Business",
    url: "https://biz.yelp.com",
    priority: "CRITICAL",
    impact: "Primary local discovery platform",
    profile: {
      businessName: "Ink Mugi Permanent Makeup Studio",
      categories: ["Permanent Makeup", "Eyebrow Services", "Beauty & Spas"],
      description: "Master permanent makeup artist specializing in ombre powder brows and microshading in Annandale, VA. Serving discerning clients throughout Northern Virginia with bespoke PMU artistry. 7+ years experience, 500+ transformations.",
      photos: 25,
      services: [
        "Ombre Powder Brows ($650)",
        "Precision Microshading ($550)", 
        "PMU Correction (Starting $700)",
        "Complimentary Consultation"
      ],
      hours: "Tue-Fri 10AM-6PM, Sat 10AM-4PM, Sun-Mon Closed",
      specialties: ["Color correction", "Asian skin expertise", "Corrective PMU"]
    },
    reviewStrategy: "Target 15+ reviews in first month"
  },

  {
    platform: "Google Business Profile",
    url: "https://business.google.com",
    priority: "CRITICAL",
    impact: "Primary local search visibility",
    profile: {
      useConfiguration: "googleBusinessProfileSetup.js",
      postingSchedule: "3x weekly",
      qaMonitoring: "Daily responses",
      photoUploads: "Weekly fresh content"
    },
    optimizations: [
      "Weekly Google Posts",
      "Q&A monitoring and responses", 
      "Regular photo updates",
      "Service menu optimization",
      "Booking integration"
    ]
  },

  {
    platform: "Nextdoor Business",
    url: "https://business.nextdoor.com", 
    priority: "HIGH",
    impact: "Neighborhood-specific visibility",
    targetNeighborhoods: [
      "Annandale",
      "Falls Church",
      "Arlington Forest", 
      "Fairfax",
      "Burke",
      "Springfield",
      "West Springfield"
    ],
    strategy: {
      neighborhoodSponsorship: true,
      localEventParticipation: true,
      specialOffers: "Nextdoor neighbor discount",
      recommendations: "Target beauty-related discussions"
    }
  },

  {
    platform: "Facebook Business",
    url: "https://business.facebook.com",
    priority: "HIGH", 
    impact: "Social proof and local discovery",
    profile: {
      businessType: "Local Business",
      categories: ["Beauty, Cosmetic & Personal Care", "Eyebrow Bar"],
      description: "Where artistry meets precision in permanent beauty. Annandale's premier PMU studio specializing in ombre powder brows and microshading.",
      services: "Enable Facebook Services",
      booking: "Link to Vagaro system",
      messaging: "Enable instant response"
    },
    contentStrategy: {
      beforeAfter: "Weekly transformation posts",
      educational: "PMU tips and aftercare",
      clientSpotlight: "Monthly testimonials",
      behindScenes: "Studio and process content"
    }
  },

  // TIER 2: IMPORTANT PLATFORMS (Complete Second)
  {
    platform: "Better Business Bureau",
    url: "https://www.bbb.org",
    priority: "HIGH",
    impact: "Trust and credibility building",
    accreditation: true,
    profile: {
      businessCategory: "Beauty Salons",
      serviceArea: "Northern Virginia",
      certification: "All licenses and insurance current",
      complaintResolution: "24-hour response guarantee"
    }
  },

  {
    platform: "Alignable",
    url: "https://www.alignable.com",
    priority: "MEDIUM-HIGH",
    impact: "B2B networking and referrals",
    networkingFocus: [
      "Local salons and spas",
      "Wedding vendors", 
      "Photography studios",
      "Makeup artists",
      "Medical aesthetics practices"
    ],
    strategy: {
      recommendations: "Exchange with complementary businesses",
      referralProgram: "Offer professional discounts",
      localEvents: "Participate in business networking"
    }
  },

  {
    platform: "Thumbtack",
    url: "https://www.thumbtack.com",
    priority: "MEDIUM",
    impact: "Lead generation platform",
    services: [
      "Permanent Makeup",
      "Eyebrow Services", 
      "Beauty Consultation"
    ],
    strategy: {
      responseTime: "Under 1 hour",
      customQuotes: "Detailed service explanations",
      portfolio: "Comprehensive before/after gallery"
    }
  },

  // TIER 3: SUPPLEMENTARY PLATFORMS (Complete Third)
  {
    platform: "Yellow Pages",
    url: "https://www.yellowpages.com",
    priority: "MEDIUM",
    impact: "Traditional directory authority",
    listing: {
      enhanced: true,
      photos: 10,
      description: "Full service description",
      coupons: "New client special offers"
    }
  },

  {
    platform: "Angie's List (Angi)",
    url: "https://www.angi.com",
    priority: "MEDIUM",
    impact: "Service provider credibility",
    verification: {
      backgroundCheck: true,
      licenseVerification: true,
      insuranceProof: true
    }
  },

  {
    platform: "Local Chamber of Commerce",
    url: "https://www.fairfaxchamber.org",
    priority: "MEDIUM",
    impact: "Local business authority",
    membership: {
      type: "Active membership",
      networking: "Monthly events participation",
      directory: "Enhanced listing",
      referrals: "Member-to-member program"
    }
  },

  // TIER 4: NICHE PLATFORMS (Complete Fourth)
  {
    platform: "StyleSeat",
    url: "https://www.styleseat.com",
    priority: "MEDIUM",
    impact: "Beauty-specific booking platform",
    profile: {
      specialization: "Permanent Makeup",
      booking: "Integrated scheduling",
      portfolio: "Professional photo gallery",
      pricing: "Transparent service menu"
    }
  },

  {
    platform: "Vagaro Directory",
    url: "https://www.vagaro.com",
    priority: "MEDIUM",
    impact: "Beauty industry directory",
    integration: {
      bookingSystem: "Already integrated",
      clientReviews: "Enable review collection",
      serviceMenu: "Complete menu listing",
      promotions: "Special offers integration"
    }
  },

  {
    platform: "Beauty Booker",
    url: "https://www.beautybooker.com",
    priority: "LOW-MEDIUM",
    impact: "Beauty service aggregation",
    listing: {
      services: "Complete PMU service list",
      availability: "Real-time scheduling",
      specialOffers: "Platform-specific promotions"
    }
  },

  // TIER 5: REVIEW PLATFORMS (Ongoing Management)
  {
    platform: "TripAdvisor",
    url: "https://www.tripadvisor.com",
    priority: "LOW",
    impact: "Tourist and visitor discovery",
    category: "Spas & Wellness",
    focus: "Out-of-area client attraction"
  },

  {
    platform: "Foursquare/Swarm",
    url: "https://foursquare.com",
    priority: "LOW",
    impact: "Location-based discovery",
    optimization: {
      categories: ["Beauty Salon", "Spa"],
      tips: "Encourage client check-ins",
      photos: "Location and service photos"
    }
  }
];

// Implementation Timeline
export const citationTimeline = {
  week1: [
    "Google Business Profile optimization",
    "Yelp for Business setup",
    "Facebook Business page creation",
    "Nextdoor Business registration"
  ],
  
  week2: [
    "BBB accreditation application",
    "Alignable profile creation", 
    "Yellow Pages enhanced listing",
    "Chamber of Commerce membership"
  ],
  
  week3: [
    "Thumbtack professional profile",
    "StyleSeat artist profile",
    "Angie's List verification",
    "Vagaro directory optimization"
  ],
  
  week4: [
    "Beauty Booker listing",
    "TripAdvisor business listing",
    "Foursquare venue optimization",
    "Review monitoring system setup"
  ]
};

// Citation Tracking Template
export const citationTracking = {
  trackingFields: [
    "Business Name",
    "Address", 
    "Phone Number",
    "Website URL",
    "Business Hours",
    "Categories",
    "Description",
    "Review Count",
    "Average Rating"
  ],
  
  consistency: {
    businessName: "Ink Mugi Permanent Makeup Studio",
    address: "7857 Heritage Dr #330, Annandale, VA 22003", 
    phone: "(571) 766-8857",
    website: "https://inkmugi.com",
    categories: ["Permanent Makeup", "Beauty Salon", "Eyebrow Services"]
  },
  
  monitoring: {
    frequency: "Weekly",
    tools: ["BrightLocal", "Whitespark", "Manual checking"],
    kpis: ["Citation count", "NAP consistency", "Review velocity"]
  }
};

export default priorityDirectories;
