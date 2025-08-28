import React from 'react';
import { Shield, Lock, Calendar, ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const CTASection: React.FC = () => {
  const guarantees = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a complete satisfaction guarantee"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Licensed & Insured", 
      description: "Fully licensed, insured, and health department approved"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
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
    <section className="py-32 bg-[#2D2D2B] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Main CTA Section */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 tracking-tight leading-tight">
            Ready to Transform 
            <span className="block">Your Brows?</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
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
              className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] transition-all duration-500 transform hover:translate-y-[-1px] hover:shadow-lg px-10 py-4 rounded-lg inline-flex items-center group text-lg font-medium"
            >
              Book Free Consultation
              <Calendar className="w-6 h-6 ml-2 transition-all duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+1-703-555-0123"
              className="btn bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-2 border-white transition-all duration-300 px-10 py-4 rounded-lg inline-flex items-center text-lg font-medium"
            >
              Call Now: (703) 555-0123
              <Phone className="w-6 h-6 ml-2" />
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-cormorant font-medium">500+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cormorant font-medium">4.9★</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cormorant font-medium">127+</div>
              <div className="text-sm opacity-80">Reviews</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Guarantees Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="text-center">
              <div className="w-16 h-16 bg-[#E6DAD2] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm text-[#E6DAD2]">
                {guarantee.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{guarantee.title}</h3>
              <p className="text-sm opacity-80">{guarantee.description}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Process Steps */}
        <AnimatedSection className="bg-white bg-opacity-5 rounded-lg p-8 lg:p-12 backdrop-blur-sm mb-16">
          <h3 className="text-2xl lg:text-3xl font-cormorant font-medium text-center mb-8">
            Getting Started is Simple
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E6DAD2] text-[#2D2D2B] rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">1</div>
              <h4 className="font-medium mb-2">Book Consultation</h4>
              <p className="text-sm opacity-80">Schedule your free consultation online or by phone</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E6DAD2] text-[#2D2D2B] rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">2</div>
              <h4 className="font-medium mb-2">Custom Design</h4>
              <p className="text-sm opacity-80">We design the perfect brows for your face and style</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E6DAD2] text-[#2D2D2B] rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">3</div>
              <h4 className="font-medium mb-2">Perfect Results</h4>
              <p className="text-sm opacity-80">Wake up every day with flawless brows</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection className="text-center">
          <h3 className="text-3xl font-cormorant font-medium mb-4">
            Don't Wait - Your Perfect Brows Await
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            With limited availability and high demand, secure your spot with the DMV's #1 PMU authority today.
          </p>
          
          <a
            href="https://www.vagaro.com/bortemicroblading/book-now"
            className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] transition-all duration-500 transform hover:translate-y-[-1px] hover:shadow-lg px-12 py-5 rounded-lg inline-flex items-center group text-xl font-medium"
          >
            Claim Your Spot Now
            <ArrowRight className="w-6 h-6 ml-3 transition-all duration-300 group-hover:translate-x-1" />
          </a>
          
          <p className="text-sm mt-4 opacity-70">
            Free consultation • No obligation • Licensed & insured
          </p>
        </AnimatedSection>

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
    </section>
  );
};

export default CTASection;
