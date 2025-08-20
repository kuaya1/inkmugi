/**
 * Review Generation & Management System
 * Phase 5: Building Social Proof for AI Systems
 * Priority: HIGH - Social proof drives AI recommendations
 */

export const reviewEmailTemplates = {
  // Immediate Post-Appointment (Same Day, 6 hours later)
  immediate: {
    subject: "How was your experience today at Ink Mugi?",
    timing: "6 hours post-appointment",
    trigger: "Automatic after appointment completion",
    body: `Dear [Client Name],

Thank you for trusting me with your permanent makeup journey today. Your comfort and satisfaction are my top priorities, and I hope you're already loving your new look!

I wanted to personally reach out to ensure you have everything you need during your healing process. Please don't hesitate to text me at (571) 766-8857 if you have any questions about your aftercare.

If you have a moment and felt your experience was positive, I'd be incredibly grateful if you could share your thoughts with other women considering permanent makeup:

📍 Google Review: https://g.page/r/[GOOGLE_REVIEW_LINK]/review
⭐ Yelp Review: https://www.yelp.com/biz/ink-mugi-annandale

Your feedback helps other women in the DMV area make informed decisions about their beauty journey.

With sincere gratitude,
Ink Mugi
7857 Heritage Dr #330, Annandale, VA 22003
(571) 766-8857`,

    followUpActions: [
      "Send aftercare instructions",
      "Schedule 48-hour check-in",
      "Add to touch-up reminder list"
    ]
  },

  // Two-Week Follow-Up (Prime review time)
  twoWeekFollowUp: {
    subject: "Loving your new brows? ✨",
    timing: "14 days post-appointment",
    trigger: "When initial healing complete",
    body: `Hi [Client Name],

It's been two weeks since your appointment, and your brows should be settling beautifully into their final color! I hope you're absolutely loving how they look and feeling more confident every morning.

During this stage, many clients tell me they're amazed by how natural and effortless their new brows feel. If you're happy with your results, would you mind sharing your experience with others considering permanent makeup?

🌟 Share Your Experience:
Google: https://g.page/r/[GOOGLE_REVIEW_LINK]/review
Yelp: https://www.yelp.com/biz/ink-mugi-annandale

Your honest feedback helps other women in Arlington, Alexandria, and throughout Northern Virginia make informed decisions about their beauty transformation.

Remember, your 6-week touch-up appointment is approaching! I'll send a reminder soon to schedule this important final step.

Warmly,
Ink Mugi

P.S. Don't forget to protect your new brows with SPF when you're out enjoying the beautiful Virginia weather! ☀️`,

    followUpActions: [
      "Schedule touch-up reminder",
      "Take progress photos if client visits",
      "Note any concerns for touch-up"
    ]
  },

  // Six-Week Touch-Up Follow-Up (Post-completion)
  completionFollowUp: {
    subject: "Your PMU transformation is complete! 🎉",
    timing: "7 days after touch-up appointment",
    trigger: "After touch-up session completed",
    body: `Dear [Client Name],

Congratulations! Your permanent makeup journey is now complete, and I couldn't be more thrilled with how beautiful your brows turned out.

You should now be experiencing the full benefits of your investment:
✨ Perfect brows every morning without any effort
✨ Confidence that lasts all day, every day
✨ Time saved for what matters most to you

If you loved your experience and results, I'd be honored if you could share your complete transformation story:

⭐ Google Review: https://g.page/r/[GOOGLE_REVIEW_LINK]/review
⭐ Yelp Review: https://www.yelp.com/biz/ink-mugi-annandale

Your review not only supports my small Annandale business but also helps other busy women in the DMV area discover the confidence that comes with perfect brows.

Looking forward to seeing you in 12-18 months for your color refresh!

With appreciation,
Ink Mugi

📧 Reply anytime: inkmugi@gmail.com
📱 Text for quick questions: (571) 766-8857`,

    followUpActions: [
      "Add to annual reminder list",
      "Send care instruction PDF",
      "Offer referral incentive"
    ]
  },

  // Special Occasions (Holidays, Anniversaries)
  anniversaryReminder: {
    subject: "It's been a year since your beautiful transformation! 💕",
    timing: "12 months post-completion",
    trigger: "Annual anniversary of completion",
    body: `Hi [Client Name],

Can you believe it's been a full year since your permanent makeup transformation? Time flies when you're waking up with perfect brows every day!

I hope this past year has been filled with confidence, convenience, and compliments on your beautiful brows. It's been such a joy being part of your beauty journey.

If you've been thinking about refreshing your color or you have friends asking about your secret to perfect brows, I'd love to hear from you!

Also, if you haven't already, sharing your year-long experience would mean the world to me:
🌟 Google Review: https://g.page/r/[GOOGLE_REVIEW_LINK]/review

Your long-term results help others understand the lasting value of professional permanent makeup.

Ready for a refresh? Book your annual touch-up:
📅 Online: https://www.vagaro.com/bortemicroblading/book-now
📱 Text: (571) 766-8857

Thank you for being such a wonderful client!

Warmly,
Ink Mugi`,

    followUpActions: [
      "Check for color refresh needs",
      "Offer loyal client discount",
      "Request updated photos"
    ]
  }
};

// Review Request Automation Settings
export const reviewAutomation = {
  triggers: {
    immediate: {
      delay: "6 hours",
      condition: "Appointment marked complete",
      platform: "Email + SMS"
    },
    twoWeek: {
      delay: "14 days",
      condition: "No negative feedback received",
      platform: "Email primary, SMS backup"
    },
    postCompletion: {
      delay: "7 days after touch-up",
      condition: "Touch-up completed",
      platform: "Email + personalized note"
    },
    anniversary: {
      delay: "365 days",
      condition: "Annual reminder active",
      platform: "Email + special offer"
    }
  },

  personalization: {
    clientName: "Required field",
    serviceReceived: "Auto-populate from appointment",
    appointmentDate: "Track for timing",
    specialNotes: "Custom per client",
    referralSource: "Track for thank you"
  },

  abTesting: {
    subjectLines: [
      "How was your experience today?",
      "Quick question about your visit",
      "Your opinion matters to us"
    ],
    sendTimes: [
      "6 hours post",
      "8 hours post", 
      "Next morning"
    ],
    callToAction: [
      "Share your experience",
      "Help other women like you",
      "Quick 2-minute review"
    ]
  }
};

export default reviewEmailTemplates;
