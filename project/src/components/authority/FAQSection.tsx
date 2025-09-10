import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does permanent makeup last?",
      answer: "Permanent makeup typically lasts 1-3 years, depending on your skin type, lifestyle, and aftercare. Oily skin tends to fade faster, while dry skin retains pigment longer. We recommend touch-ups every 12-18 months to maintain optimal color and shape."
    },
    {
      question: "Is the procedure painful?",
      answer: "Most clients experience minimal discomfort thanks to our professional-grade topical numbing agents. The sensation is often described as similar to eyebrow tweezing. We prioritize your comfort throughout the entire process and can adjust numbing as needed."
    },
    {
      question: "What's the difference between microshading and ombre powder brows?",
      answer: "Microshading creates individual hair-like strokes for a natural appearance, perfect for those wanting to enhance sparse brows. Ombre powder brows use a shading technique creating a soft, makeup-like finish that's ideal for oily skin and those preferring a bolder look."
    },
    {
      question: "How long is the healing process?",
      answer: "Initial healing takes 7-14 days, with complete healing occurring over 4-6 weeks. During the first week, you may experience slight swelling and scabbing. We provide detailed aftercare instructions to ensure optimal healing and results."
    },
    {
      question: "Can I still get permanent makeup if I have sensitive skin?",
      answer: "Yes! We conduct patch tests for clients with sensitive skin and use hypoallergenic, premium pigments. Our extensive consultation process includes reviewing your medical history and skin sensitivity to ensure the best possible outcome."
    },
    {
      question: "What should I expect during the consultation?",
      answer: "Your free consultation includes face analysis, skin assessment, brow mapping, color selection, and technique recommendation. We'll discuss your goals, lifestyle, and preferences to create a customized plan that's perfect for you."
    },
    {
      question: "How do I prepare for my appointment?",
      answer: "Avoid blood thinners, alcohol, and caffeine 24 hours before. Don't tweeze or wax brows for 1 week prior. Arrive with clean skin (no makeup on brow area). We'll provide a complete pre-care checklist upon booking."
    },
    {
      question: "Can permanent makeup be removed or corrected?",
      answer: "Yes, we offer color correction services for previous work by other artists. Removal is possible through laser treatments, though correction is often preferred. We assess each case individually to recommend the best approach."
    },
    {
      question: "Why choose INK MUGI over other PMU artists?",
      answer: "Our combination of advanced training, 4+ years experience, 500+ successful procedures, 4.9-star rating, and comprehensive insurance sets us apart. We're state-licensed, health department approved, and committed to staying current with the latest techniques."
    },
    {
      question: "What are your payment options and policies?",
      answer: "We accept cash, credit cards, and offer payment plans for qualifying clients. A deposit is required to secure your appointment. We have a 48-hour cancellation policy to respect both your time and ours."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Frequently Asked 
            <span className="text-primary-600"> Questions</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Get answers to the most common questions about permanent makeup, our process, 
            and what you can expect when choosing INK MUGI for your PMU needs.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg 
                    className="w-full h-full text-primary-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5">
                  <p className="text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              We're here to help! Schedule a free consultation to discuss your specific needs 
              and get personalized answers to all your permanent makeup questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.vagaro.com/bortemicroblading/book-now"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="mailto:inkmugi@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-50 text-primary-600 font-semibold rounded-lg border-2 border-primary-600 transition-all duration-300 hover:shadow-lg"
              >
                Email Your Questions
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-semibold text-neutral-900 mb-1">Confidential Consultations</h4>
            <p className="text-sm text-neutral-600">Your privacy is protected</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-neutral-900 mb-1">Licensed & Insured</h4>
            <p className="text-sm text-neutral-600">Full professional coverage</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-neutral-900 mb-1">Client-Centered Care</h4>
            <p className="text-sm text-neutral-600">Your satisfaction guaranteed</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQSection;
