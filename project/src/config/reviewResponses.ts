/**
 * Professional Review Response Templates
 * Phase 5: Review Management for AI Authority Building
 * Optimized for local SEO and professional brand positioning
 */

export const reviewResponseTemplates = {
  // Five-Star Reviews (Enthusiastic, Grateful)
  fiveStar: {
    standard: `Thank you so much, [Name]! ✨ It was truly wonderful working with you to create your perfect [service]. We're absolutely thrilled that you're loving your results! Your trust and confidence in our Annandale studio means everything to us. 

We look forward to seeing you for your annual touch-up and hearing about all the time you're saving each morning! 💕`,

    detailed: `[Name], your review just made my day! 🌟 Thank you for taking the time to share your experience with [service]. It brings me such joy knowing that you're waking up confident and beautiful every morning.

Your transformation was truly special to work on, and I'm honored you chose Ink Mugi for your permanent makeup journey. Thank you for trusting our Annandale studio with something so important to you.

Can't wait to see you for your touch-up! ✨`,

    referral: `Thank you from the bottom of my heart, [Name]! 💕 Reviews like yours are exactly why I love what I do. Your [service] transformation turned out absolutely beautiful, and I'm so happy you're loving the results.

Thank you for recommending us to your friends - word-of-mouth from amazing clients like you is how our little Annandale studio grows. We appreciate you more than you know!

See you soon for your touch-up! ✨`
  },

  // Four-Star Reviews (Appreciative, Improvement-Focused)
  fourStar: {
    grateful: `Thank you so much for your thoughtful review, [Name]! 🌟 We're delighted that you had such a positive experience with your [service] at our Annandale studio. 

Your feedback is incredibly valuable to us, and if there's anything we can do to make your experience even better next time, please don't hesitate to reach out at inkmugi@gmail.com or (571) 766-8857.

Thank you for choosing Ink Mugi! ✨`,

    improvement: `Hi [Name], thank you for taking the time to share your experience! We're so glad you're happy with your [service] results. 

I'd love to learn more about how we can improve and earn that fifth star from you. Would you mind reaching out to me directly at inkmugi@gmail.com? Your feedback helps us serve all our Northern Virginia clients better.

Thank you for choosing our Annandale studio! 💕`
  },

  // Three-Star Reviews (Professional, Solution-Oriented)
  threeStar: {
    understanding: `Thank you for your honest feedback, [Name]. We appreciate you taking the time to share your experience with your [service].

I'd really like to understand your concerns better and see how we can make things right. Could you please call or text me directly at (571) 766-8857? Your satisfaction is my top priority, and I want to ensure you're completely happy with your results.

Thank you for giving us the opportunity to improve.`,

    proactive: `Hi [Name], thank you for your review. I can see that your experience wasn't quite what we hoped for, and I'd like to make it right.

Please reach out to me personally at inkmugi@gmail.com or (571) 766-8857 so we can discuss your concerns and find a solution together. Your satisfaction means everything to our Annandale studio.

I look forward to hearing from you soon.`
  },

  // Two-Star or Below (Immediate Response, Problem-Solving)
  concernResponse: {
    immediate: `[Name], thank you for bringing your concerns to my attention. I sincerely apologize that your experience with [service] didn't meet the high standards we strive for at Ink Mugi.

Your satisfaction is my absolute priority, and I'd like to speak with you personally to understand what happened and how we can make this right immediately.

Please call or text me directly at (571) 766-8857, or email inkmugi@gmail.com. I'm committed to resolving this situation to your complete satisfaction.`,

    followUp: `Hi [Name], I wanted to follow up on your recent review and thank you again for giving me the opportunity to address your concerns.

[Specific resolution details based on conversation]

Your feedback has helped us improve our processes, and I'm grateful for your patience as we worked together to find a solution.

If you have any other questions or concerns, please don't hesitate to reach out directly at (571) 766-8857.`
  },

  // Platform-Specific Variations
  google: {
    localSEO: `Thank you so much, [Name]! 🌟 We're thrilled you chose Ink Mugi in Annandale for your [service]. Your beautiful results are exactly why we love serving clients throughout Northern Virginia - from Arlington to Alexandria and beyond!

Thank you for trusting our studio with your permanent makeup journey. We can't wait to see you for your touch-up! ✨

#AnnandalePMU #NorthernVirginiaBrows #InkMugi`,

    mobile: `Thanks [Name]! 💕 So happy you love your [service]! Your results look absolutely stunning. Thank you for choosing our Annandale studio - we're honored to be part of your beauty journey! ✨`
  },

  yelp: {
    detailed: `[Name], thank you for this wonderful review! Your [service] transformation was such a pleasure to work on, and I'm delighted you're loving the results.

We pride ourselves on creating natural, beautiful permanent makeup for the diverse Northern Virginia community, and reviews like yours confirm we're on the right track.

Thank you for recommending Ink Mugi to others in the DMV area - it means the world to our small Annandale business! 💕`,

    community: `Thank you, [Name]! The Yelp community is so important for helping people find quality permanent makeup services in Northern Virginia. We're honored you chose to share your [service] experience with others.

Your trust in our Annandale studio is deeply appreciated, and we're thrilled you're loving your results! ✨`
  },

  facebook: {
    social: `[Name], you just made our day! 🌟 Thank you for sharing your amazing [service] experience with the Facebook community. 

Your results are absolutely gorgeous, and we're so proud to have been part of your transformation journey. Thank you for choosing Ink Mugi in Annandale!

Feel free to tag us in any photos - we love celebrating our beautiful clients! 💕 #InkMugiTransformation`
  }
};

// Response Timing Guidelines
export const responseGuidelines = {
  timing: {
    fiveStar: "Within 2-4 hours during business hours",
    fourStar: "Within 2-4 hours, prioritize engagement",
    threeStar: "Within 1-2 hours, immediate attention",
    twoStarOrBelow: "Within 30 minutes during business hours"
  },

  tone: {
    fiveStar: "Enthusiastic, grateful, celebratory",
    fourStar: "Appreciative, improvement-focused", 
    threeStar: "Professional, solution-oriented",
    twoStarOrBelow: "Apologetic, immediate action-focused"
  },

  elements: {
    always: [
      "Thank client by name",
      "Reference specific service",
      "Include contact information for concerns",
      "Maintain professional brand voice"
    ],
    never: [
      "Get defensive or argumentative",
      "Share private client information",
      "Make promises you can't keep",
      "Ignore negative feedback"
    ]
  }
};

// Review Monitoring System
export const reviewMonitoring = {
  platforms: [
    {
      name: "Google Business Profile",
      priority: "CRITICAL",
      checkFrequency: "3x daily",
      alertSystem: "Immediate email + SMS",
      responseTarget: "30 minutes for negative"
    },
    {
      name: "Yelp",
      priority: "HIGH", 
      checkFrequency: "2x daily",
      alertSystem: "Immediate email",
      responseTarget: "2 hours"
    },
    {
      name: "Facebook",
      priority: "MEDIUM",
      checkFrequency: "Daily",
      alertSystem: "Daily digest",
      responseTarget: "4 hours"
    }
  ],

  automation: {
    positiveReviews: "Auto-thank + personal follow-up",
    neutralReviews: "Immediate alert for personal response",
    negativeReviews: "Immediate alert + escalation protocol",
    noResponse: "Follow-up reminder after 24 hours"
  },

  reporting: {
    weekly: [
      "New review count by platform",
      "Average rating changes",
      "Response time metrics",
      "Conversion impact analysis"
    ],
    monthly: [
      "Review sentiment analysis",
      "Keyword mentions in reviews",
      "Competitor comparison",
      "SEO impact assessment"
    ]
  }
};

export default reviewResponseTemplates;
