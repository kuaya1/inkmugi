import React from 'react';
import { CheckCircle, Star, Heart, Clock, MapPin, MessageCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "PMU Transformations",
      description: "Successful permanent makeup procedures completed with exceptional results",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      number: "4.9★",
      label: "Client Satisfaction", 
      description: "Average rating from 127+ verified client reviews across all platforms",
      icon: <Star className="w-8 h-8" />
    },
    {
      number: "98%",
      label: "Client Retention",
      description: "Clients who return for touch-ups and recommend us to friends",
      icon: <Heart className="w-8 h-8" />
    },
    {
      number: "4+",
      label: "Years Expertise",
      description: "Professional experience specializing in DMV permanent makeup artistry",
      icon: <Clock className="w-8 h-8" />
    },
    {
      number: "8",
      label: "DMV Areas Served",
      description: "Comprehensive coverage across Washington DC, Northern VA, and Maryland",
      icon: <MapPin className="w-8 h-8" />
    },
    {
      number: "72hr",
      label: "Response Time",
      description: "Average consultation booking confirmation and client communication",
      icon: <MessageCircle className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-4 block">Proven Excellence</span>
          <h2 className="section-title relative inline-block mb-6">
            The Numbers That Make Us DMV's #1 Choice
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
            Our track record speaks for itself. These aren't just statistics – they're proof of our commitment 
            to excellence in permanent makeup artistry across the Washington DC metropolitan area.
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-[#F9F7F5] rounded-lg p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 border border-[#E6DAD2]/20">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E6DAD2] text-[#2D2D2B] rounded-full mb-6">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="text-4xl lg:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-xl font-medium text-[#2D2D2B] mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-[#2D2D2B]/70 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-20">
          <div className="bg-gradient-to-b from-[#F0E4D8] to-[#E6DAD2] rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              Ready to Join 500+ Satisfied Clients?
            </h3>
            <p className="text-lg text-[#2D2D2B]/80 mb-8 max-w-2xl mx-auto">
              Experience the INK MUGI difference. Book your consultation today and discover why we're 
              the DMV's most trusted permanent makeup authority.
            </p>
            <a
              href="https://www.vagaro.com/bortemicroblading/book-now"
              className="btn bg-[#2D2D2B] hover:bg-[#1A1A18] text-white transition-all duration-500 transform hover:translate-y-[-1px] hover:shadow-lg px-10 py-4 rounded-lg inline-flex items-center group"
            >
              Schedule Your Consultation
              <MessageCircle className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;
