import React from 'react';
import { Shield, Award, Users } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-[#F9F7F5] to-[#F0E4D8] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#2D2D2B]"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#2D2D2B]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center">
          <AnimatedSection className="max-w-5xl mx-auto">
            {/* Authority Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-[#E6DAD2] border border-[#E6DAD2] rounded-full text-[#2D2D2B] text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              DMV's #1 Licensed PMU Authority
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-medium mb-6 text-[#2D2D2B] tracking-tight leading-tight">
              Washington DC's
              <span className="block text-[#2D2D2B]">
                Premier PMU
              </span>
              <span className="block">Authority</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Expert microshading, ombre powder brows, and precision permanent makeup artistry. 
              <span className="font-medium text-[#2D2D2B]"> 500+ transformations</span>, 
              <span className="font-medium text-[#2D2D2B]"> 4.9★ rated</span>, and 
              <span className="font-medium text-[#2D2D2B]"> industry-leading techniques</span> 
              trusted by DMV clients since 2020.
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-2">500+</div>
                <div className="text-sm lg:text-base text-[#2D2D2B]/70">Transformations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-2">4.9★</div>
                <div className="text-sm lg:text-base text-[#2D2D2B]/70">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-2">4+</div>
                <div className="text-sm lg:text-base text-[#2D2D2B]/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-2">8</div>
                <div className="text-sm lg:text-base text-[#2D2D2B]/70">DMV Locations Served</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.vagaro.com/bortemicroblading/book-now"
                className="btn bg-[#2D2D2B] hover:bg-[#1A1A18] text-white transition-all duration-500 transform hover:translate-y-[-1px] hover:shadow-lg px-10 py-4 rounded-lg inline-flex items-center group"
              >
                Book Expert Consultation
                <svg className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#credentials"
                className="btn bg-white hover:bg-[#F9F7F5] text-[#2D2D2B] border-2 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg px-10 py-4 rounded-lg"
              >
                View Credentials
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-[#2D2D2B]/60">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#2D2D2B]" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#2D2D2B]" />
                <span className="text-sm">Health Dept Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#2D2D2B]" />
                <span className="text-sm">500+ Satisfied Clients</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
