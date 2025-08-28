import React from 'react';
import AnimatedSection from '../AnimatedSection';

const CTASection: React.FC = () => {
  const guarantees = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a complete satisfaction guarantee"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Licensed & Insured",
      description: "Fully licensed, insured, and health department approved"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Free Consultation",
      description: "Complimentary consultation with no obligation to book"
    }
  ];

  const urgencyFactors = [
    "📅 Limited availability for 2024",
    "⏰ Same-week consultations often booked",
    "🎯 Peak season approaching",
    "💎 Premium time slots filling fast"
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-primary-600 to-accent-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.white)_1px,_transparent_0)] bg-[size:30px_30px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Ready to Transform 
            <span className="block">Your Brows?</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join 500+ satisfied clients who chose INK MUGI for their permanent makeup transformation. 
            Your perfect brows are just one appointment away.
          </p>

          {/* Urgency Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {urgencyFactors.map((factor, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-3 backdrop-blur-sm">
                <span className="text-sm font-medium">{factor}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://www.vagaro.com/bortemicroblading/book-now"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-100 text-primary-600 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Book Free Consultation
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="tel:+1-703-555-0123"
              className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-semibold text-lg rounded-lg border-2 border-white transition-all duration-300"
            >
              Call Now: (703) 555-0123
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">127+</div>
              <div className="text-sm opacity-80">Reviews</div>
            </div>
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                {guarantee.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{guarantee.title}</h3>
              <p className="text-sm opacity-80">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm mb-16">
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-8">
            Getting Started is Simple
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold mb-2">Book Consultation</h4>
              <p className="text-sm opacity-80">Schedule your free consultation online or by phone</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold mb-2">Custom Design</h4>
              <p className="text-sm opacity-80">We design the perfect brows for your face and style</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold mb-2">Perfect Results</h4>
              <p className="text-sm opacity-80">Wake up every day with flawless brows</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Don't Wait - Your Perfect Brows Await
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            With limited availability and high demand, secure your spot with the DMV's #1 PMU authority today.
          </p>
          
          <a
            href="https://www.vagaro.com/bortemicroblading/book-now"
            className="inline-flex items-center px-10 py-5 bg-white hover:bg-neutral-100 text-primary-600 font-bold text-xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Claim Your Spot Now
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          <p className="text-sm mt-4 opacity-70">
            Free consultation • No obligation • Licensed & insured
          </p>
        </div>

        {/* Contact Info Footer */}
        <div className="mt-16 pt-8 border-t border-white border-opacity-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm opacity-80">
            <div>
              <strong>Location:</strong><br />
              Annandale Professional Beauty Center<br />
              Annandale, VA 22003
            </div>
            <div>
              <strong>Phone:</strong><br />
              (703) 555-0123<br />
              Text or call anytime
            </div>
            <div>
              <strong>Hours:</strong><br />
              Mon-Fri: 9AM-5PM<br />
              Sat: 9AM-3PM • Sun: By Appt
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CTASection;
