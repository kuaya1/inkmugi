/**
 * Google Business Profile Optimization Configuration
 * Critical Foundation - Week 1 Implementation
 * Revenue Impact: EMERGENCY PRIORITY
 */

export const googleBusinessProfileSetup = {
  // Primary Business Information
  businessName: "Ink Mugi Permanent Makeup Studio",
  primaryCategory: "Permanent make-up clinic",
  secondaryCategories: [
    "Beauty salon",
    "Eyebrow bar", 
    "Cosmetic tattoo clinic",
    "Beauty consultant"
  ],

  // SEO-Optimized Business Description
  description: `Master permanent makeup artist specializing in ombre powder brows and microshading. Serving discerning clients throughout Northern Virginia with bespoke PMU artistry. Licensed professional with 7+ years experience transforming natural beauty through precision techniques. Located in Heritage Center, Annandale - convenient to Arlington, Alexandria, and Washington DC.`,

  // Business Attributes (Critical for Local SEO)
  attributes: {
    womenOwned: true,
    lgbtqFriendly: true,
    wheelchairAccessible: true,
    appointmentRequired: true,
    freeConsultation: true,
    privateParking: true,
    sanitizedEquipment: true,
    masksRequired: false,
    staffWearsMasks: true,
    temperatureCheck: false
  },

  // Service Offerings with Pricing (Revenue Driver)
  services: [
    {
      name: "Signature Ombre Powder Brows",
      description: "Soft-to-bold gradient technique creating naturally beautiful, long-lasting brows. Perfect for all skin types.",
      price: "$600",
      duration: "3 hours",
      category: "Permanent Makeup"
    },
    {
      name: "Precision Microshading",
      description: "Delicate stippling technique for whisper-soft definition and natural texture",
      price: "$500", 
      duration: "2.5 hours",
      category: "Permanent Makeup"
    },
    {
      name: "PMU Transformation & Correction", 
      description: "Expert correction and enhancement of previous permanent makeup work",
      price: "$700+",
      duration: "3-4 hours",
      category: "Corrective Services"
    },
    {
      name: "Complimentary Design Consultation",
      description: "Private consultation with personalized brow design, skin assessment, and treatment planning",
      price: "Free",
      duration: "45 minutes", 
      category: "Consultation"
    },
    {
      name: "Annual Touch-Up Session",
      description: "Maintenance session to refresh and perfect your permanent makeup",
      price: "$200",
      duration: "1.5 hours",
      category: "Maintenance"
    }
  ],

  // Operating Hours (Critical for Local Search)
  openingHours: {
    tuesday: "10:00-18:00",
    wednesday: "10:00-18:00", 
    thursday: "10:00-19:00",
    friday: "10:00-18:00",
    saturday: "10:00-16:00",
    sunday: "Closed",
    monday: "Closed"
  },

  // Location & Contact Details
  address: {
    street: "7857 Heritage Dr #330",
    city: "Annandale", 
    state: "VA",
    zipCode: "22003",
    country: "US"
  },

  contact: {
    phone: "(571) 283-8228",
    email: "inkmugi@gmail.com",
    website: "https://inkmugi.com"
  },

  // Photo Strategy (Critical for CTR)
  photoStrategy: {
    logo: "High-resolution Ink Mugi logo with transparent background",
    cover: "Before/after transformation showcase",
    interior: [
      "Clean, professional studio setup",
      "Sterilization equipment",
      "Comfortable client chair",
      "Pigment collection display"
    ],
    work: [
      "Fresh ombre powder brows (multiple angles)",
      "Healed results at 6 weeks", 
      "Before/after comparisons",
      "Different skin tones and brow shapes"
    ],
    team: "Professional headshot of artist in studio setting"
  },

  // Posts Strategy (Weekly Content)
  postingStrategy: {
    beforeAfter: "Weekly transformation showcase",
    educational: "PMU aftercare tips and myths debunked", 
    behind: "Studio prep and sterilization process",
    testimonials: "Client experience highlights",
    seasonal: "Holiday booking reminders and availability"
  },

  // Review Response Templates 
  reviewTemplates: {
    positive: "Thank you so much for trusting me with your brow transformation! It was an absolute pleasure working with you, and I'm thrilled you love your new look. 💕",
    neutral: "Thank you for your feedback! I'd love to discuss how we can improve your experience. Please reach out directly so we can make this right.",
    negative: "I sincerely apologize for not meeting your expectations. Your experience matters deeply to me. Please contact me directly so we can resolve this immediately."
  }
};

// Export for use in marketing automation
export default googleBusinessProfileSetup;
