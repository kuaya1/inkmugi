import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import AnimatedSection from '../components/AnimatedSection';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const Faq: React.FC = () => {
  // Medical Business Schema for enhanced healthcare credentials
  const medicalBusinessSchema = {
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

  // FAQ Schema for comprehensive FAQ coverage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between microblading and ombre powder brows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microblading creates hair-like strokes using a manual tool, while ombre powder brows use a machine to create a soft, shaded effect similar to brow powder makeup. Powder brows typically last longer and work better for oily skin types. They also provide a more defined, makeup-like appearance compared to the more natural look of microblading."
        }
      },
      {
        "@type": "Question", 
        "name": "Is the procedure painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use a topical anesthetic to minimize discomfort. Most clients describe the sensation as mild to moderate, similar to threading or plucking. Your comfort is our priority throughout the procedure, and we can apply additional numbing if needed."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the procedure take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The initial ombre powder brows procedure typically takes 2-3 hours. This includes the consultation, brow mapping, color selection, and the actual procedure. Touch-up appointments usually take 1-2 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What is the healing process like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The healing process takes about 4-6 weeks in total. Initially, your brows will appear 30-40% darker and more defined than the final result. Around days 3-7, you'll experience flaking and the color will appear to fade significantly. By days 10-14, the color will begin to return, and by day 30, you'll see the true color and definition."
        }
      },
      {
        "@type": "Question",
        "name": "How long do ombre powder brows last?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Results typically last 1-3 years, depending on skin type, lifestyle, sun exposure, and skincare routine. Oily skin types may experience faster fading. Touch-ups are recommended every 12-18 months to maintain optimal appearance. Using sunscreen on the area can help extend the life of your brows."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ombre powder brows start at $400 for the initial procedure. Microshading starts at $500. We offer free brow consultations. Touch-up pricing varies by time elapsed: 1-3 months ($100), 3-6 months ($150), 6-12 months ($200), and 1-2 years ($250). All initial procedures include one follow-up session within the first 8 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What aftercare is required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the first 7-10 days, keep the area clean and dry. Avoid makeup on the area, swimming, saunas, and excessive sweating. Apply the provided aftercare balm as directed. Avoid picking or scratching at the flaking skin. After the initial healing period, protect your brows from sun exposure with SPF to maintain the color longevity."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get ombre powder brows if I have existing microblading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, powder brows can be done over faded microblading. We'll assess your current brows during consultation and create a plan to achieve your desired results, which may include color correction. In some cases, we may recommend waiting until the previous work has faded more before proceeding."
        }
      },
      {
        "@type": "Question",
        "name": "Is there anyone who shouldn't get ombre powder brows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Permanent makeup may not be suitable for everyone. Contraindications include pregnancy, nursing, uncontrolled diabetes, autoimmune disorders, blood-thinning medications, recent chemotherapy, keloid scarring, and certain skin conditions in the brow area. During your consultation, we'll review your medical history to ensure the procedure is safe for you."
        }
      },
      {
        "@type": "Question",
        "name": "What pigments do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use premium, hypoallergenic pigments that are specifically formulated for permanent makeup. Our pigments are iron-oxide based, vegan, and cruelty-free. We select colors that complement your skin tone, hair color, and personal preference to achieve the most natural-looking results."
        }
      }
    ]
  };

  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'procedure', name: 'The Procedure' },
    { id: 'aftercare', name: 'Aftercare' },
    { id: 'results', name: 'Results & Longevity' },
    { id: 'booking', name: 'Booking & Pricing' },
  ];

  const faqItems: FaqItem[] = [
    {
      question: 'What is the difference between microblading and ombre powder brows?',
      answer: 'Microblading creates hair-like strokes using a manual tool, while ombre powder brows use a machine to create a soft, shaded effect similar to brow powder makeup. Powder brows typically last longer and work better for oily skin types. They also provide a more defined, makeup-like appearance compared to the more natural look of microblading.',
      category: 'procedure',
    },
    {
      question: 'Is the procedure painful?',
      answer: 'We use a topical anesthetic to minimize discomfort. Most clients describe the sensation as mild to moderate, similar to threading or plucking. Your comfort is our priority throughout the procedure, and we can apply additional numbing if needed.',
      category: 'procedure',
    },
    {
      question: 'How long does the procedure take?',
      answer: 'The initial ombre powder brows procedure typically takes 2-3 hours. This includes the consultation, brow mapping, color selection, and the actual procedure. Touch-up appointments usually take 1-2 hours.',
      category: 'procedure',
    },
    {
      question: 'How should I prepare for my appointment?',
      answer: 'Avoid blood thinners (alcohol, aspirin) for 48 hours before, retinol products for 2 weeks before, and caffeine on the day of your procedure. Arrive with clean brows and no makeup in the area. Avoid sun exposure and tanning before your appointment. If you\'re on any medications, please inform us during your consultation.',
      category: 'procedure',
    },
    {
      question: 'What is the healing process like?',
      answer: 'The healing process takes about 4-6 weeks in total. Initially, your brows will appear 30-40% darker and more defined than the final result. Around days 3-7, you\'ll experience flaking and the color will appear to fade significantly. By days 10-14, the color will begin to return, and by day 30, you\'ll see the true color and definition. A touch-up appointment 6-8 weeks after the initial procedure ensures optimal results.',
      category: 'aftercare',
    },
    {
      question: 'What aftercare is required?',
      answer: 'For the first 7-10 days, keep the area clean and dry. Avoid makeup on the area, swimming, saunas, and excessive sweating. Apply the provided aftercare balm as directed. Avoid picking or scratching at the flaking skin. After the initial healing period, protect your brows from sun exposure with SPF to maintain the color longevity.',
      category: 'aftercare',
    },
    {
      question: 'Can I wear makeup after the procedure?',
      answer: 'Avoid makeup on the brow area for at least 10 days after the procedure to prevent infection and ensure proper healing. After the initial healing period, you can resume wearing makeup as usual. One of the benefits of permanent makeup is that you\'ll need less makeup overall!',
      category: 'aftercare',
    },
    {
      question: 'When will I see the final results?',
      answer: 'The true color and definition of your ombre powder brows will be visible after about 30 days, once the skin has fully healed and the pigment has settled. However, the complete process includes a touch-up appointment 6-8 weeks after the initial procedure, which perfects the shape and color for optimal results.',
      category: 'results',
    },
    {
      question: 'How long do ombre powder brows last?',
      answer: 'Results typically last 1-3 years, depending on skin type, lifestyle, sun exposure, and skincare routine. Oily skin types may experience faster fading. Touch-ups are recommended every 12-18 months to maintain optimal appearance. Using sunscreen on the area can help extend the life of your brows.',
      category: 'results',
    },
    {
      question: 'Can I get ombre powder brows if I have existing microblading?',
      answer: 'Yes, powder brows can be done over faded microblading. We\'ll assess your current brows during consultation and create a plan to achieve your desired results, which may include color correction. In some cases, we may recommend waiting until the previous work has faded more before proceeding.',
      category: 'procedure',
    },
    {
      question: 'What if I don\'t like the results?',
      answer: 'We take great care during the consultation and mapping process to ensure you\'ll love your results. However, if you\'re unhappy with any aspect, please contact us. Minor adjustments can be made during your touch-up appointment. For significant changes, we may recommend waiting for the pigment to fade or discuss removal options. This is why our thorough consultation process is so important!',
      category: 'results',
    },
    {
      question: 'How much does it cost?',
      answer: 'Ombre powder brows start at $400 for the initial procedure. Microshading starts at $500. We offer free brow consultations. Touch-up pricing varies by time elapsed: 1-3 months ($100), 3-6 months ($150), 6-12 months ($200), and 1-2 years ($250). All initial procedures include one follow-up session within the first 8 weeks. We offer a detailed pricing breakdown during your consultation based on your specific needs.',
      category: 'booking',
    },
    {
      question: 'Do you require a deposit?',
      answer: 'Yes, we require a $50 non-refundable deposit to secure your appointment, which is applied toward your service. This ensures commitment from our clients and allows us to maintain our schedule efficiently.',
      category: 'booking',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 48 hours notice for cancellations or rescheduling. Cancellations with less than 48 hours notice will forfeit the deposit. We understand emergencies happen, and these situations are handled on a case-by-case basis.',
      category: 'booking',
    },
    {
      question: 'Is there anyone who shouldn\'t get ombre powder brows?',
      answer: 'Permanent makeup may not be suitable for everyone. Contraindications include pregnancy, nursing, uncontrolled diabetes, autoimmune disorders, blood-thinning medications, recent chemotherapy, keloid scarring, and certain skin conditions in the brow area. During your consultation, we\'ll review your medical history to ensure the procedure is safe for you.',
      category: 'procedure',
    },
    {
      question: 'What pigments do you use?',
      answer: 'We use premium, hypoallergenic pigments that are specifically formulated for permanent makeup. Our pigments are iron-oxide based, vegan, and cruelty-free. We select colors that complement your skin tone, hair color, and personal preference to achieve the most natural-looking results.',
      category: 'procedure',
    },
    {
      question: 'Do you offer other permanent makeup services?',
      answer: 'Currently, we specialize exclusively in ombre powder brows to ensure we deliver the highest quality results in our area of expertise. This specialization allows us to perfect our technique and provide exceptional results for our clients.',
      category: 'booking',
    },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Permanent Makeup FAQ | Expert Answers | Ink Mugi</title>
        <meta name="description" content="Get expert answers to frequently asked questions about permanent makeup procedures, aftercare, results, and pricing. Professional PMU guidance from certified artists." />
        <meta name="keywords" content="permanent makeup FAQ, microblading questions, PMU aftercare, powder brows, lip blush, eyebrow tattoo" />
        <link rel="canonical" href="https://inkmugi.com/faq" />
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              Find answers to common questions about our permanent makeup services
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          {/* Categories */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#2D2D2B] text-white'
                      : 'bg-[#E6DAD2] text-[#2D2D2B] hover:bg-[#F0E4D8]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index % 5} className="mb-4">
                <div className="border border-[#E6DAD2] rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-[#F9F7F5] transition-colors"
                  >
                    <span className="font-medium text-[#2D2D2B]">{faq.question}</span>
                    {openItems.includes(index) ? (
                      <ChevronUp size={20} className="text-[#2D2D2B]" />
                    ) : (
                      <ChevronDown size={20} className="text-[#2D2D2B]/60" />
                    )}
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-4 bg-[#F9F7F5] border-t border-[#E6DAD2]">
                      <p className="text-[#2D2D2B]/80">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Missing closing div for container-custom */}
        </div>
      </section>

      {/* Voice Search Optimization Section - Conversational Content Blocks */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-gray-100" itemScope itemType="https://schema.org/FAQPage">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-semibold text-neutral-900 mb-6">
              Quick Answers for <span className="text-primary">Smart Searches</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Voice-friendly answers to help you find exactly what you're looking for
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Quick Answer Cards - Optimized for Voice Search */}
            <AnimatedSection delay={0.1}>
              <div className="voice-answer quick-answer featured-info bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200" itemScope itemType="https://schema.org/Question">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900" itemProp="name">
                  "Where can I get licensed permanent makeup in Annandale Virginia?"
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-neutral-700 leading-relaxed" itemProp="text">
                    <strong>Ink Mugi is Annandale's #1 licensed PMU artist</strong> located at 7857 Heritage Dr #330. Virginia-licensed with 523+ procedures completed and 0.19% complication rate (industry average 2.5%). Call <strong>(571) 283-8228</strong> for FREE consultation.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="voice-answer quick-answer featured-info bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200" itemScope itemType="https://schema.org/Question">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900" itemProp="name">
                  "How much does ombre powder brows cost in Annandale VA?"
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-neutral-700 leading-relaxed" itemProp="text">
                    At <strong>Ink Mugi in Annandale, ombre powder brows cost $600</strong> and microshading costs $500. Includes consultation, procedure, aftercare kit, and touch-up. Hospital-grade studio serving Arlington, Alexandria, and Northern Virginia.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="voice-answer quick-answer featured-info bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200" itemScope itemType="https://schema.org/Question">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900" itemProp="name">
                  "What is the safest PMU studio in Northern Virginia?"
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-neutral-700 leading-relaxed" itemProp="text">
                    <strong>Ink Mugi maintains a 0.19% complication rate</strong> (industry average 2.5%) with 523+ successful procedures. Virginia-licensed, hospital-grade sterile studio with 97% client satisfaction rate in Annandale.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="voice-answer quick-answer featured-info bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200" itemScope itemType="https://schema.org/Question">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900" itemProp="name">
                  "Who does microshading correction in Fairfax County?"
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-neutral-700 leading-relaxed" itemProp="text">
                    <strong>Ink Mugi specializes in microshading correction</strong> for previous PMU work. Located in Annandale VA 22003, serving all of Fairfax County with advanced correction techniques and Virginia licensing.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="voice-answer quick-answer featured-info bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200" itemScope itemType="https://schema.org/Question">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900" itemProp="name">
                  "How long does PMU healing take in DMV area?"
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-neutral-700 leading-relaxed" itemProp="text">
                    <strong>PMU healing takes 4-6 weeks</strong> in the DMV climate. Initial healing 7-10 days, complete healing 4-6 weeks. Touch-up recommended at 6 weeks for optimal results in Northern Virginia's humidity.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="voice-answer quick-answer featured-info bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200" itemScope itemType="https://schema.org/Question">
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900" itemProp="name">
                  "Best PMU technique for oily skin near Washington DC?"
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-neutral-700 leading-relaxed" itemProp="text">
                    <strong>Ombre powder brows are best for oily skin</strong> near DC. The stippling technique at Ink Mugi holds better in oily skin and humid DMV climate compared to microblading. Perfect for Washington area weather.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Call-to-Action for Voice Search Users */}
          <AnimatedSection delay={0.7} className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
                Ready to Book Your Consultation?
              </h3>
              <p className="text-neutral-600 mb-6 text-lg">
                Call <strong className="text-primary">(571) 283-8228</strong> or book online instantly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+15712838228" 
                  className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <Link 
                  to="/booking" 
                  className="bg-neutral-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Online
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block text-[#E6DAD2] font-light tracking-wider mb-4 uppercase text-sm">Get Started</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6 leading-tight">
                Ready to Transform Your Brows?
              </h2>
              <p className="text-lg text-[#F9F7F5]/90 mb-10 max-w-2xl mx-auto">
                Book your consultation today and take the first step towards effortlessly beautiful brows that enhance your natural features.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/booking" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-medium transition-all duration-300 transform hover:translate-y-[-2px]">
                  Book Now
                </Link>
                <Link to="/contact" className="btn bg-transparent border border-[#F9F7F5] hover:bg-white/10 text-white transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
