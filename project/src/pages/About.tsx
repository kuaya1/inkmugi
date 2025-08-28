import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Calendar, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const About: React.FC = () => {
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
  const certifications = [
    "PhiBrows Certified Artist",
    "Ombre Powder Brows Specialist",
    "Advanced Color Theory",
    "Skin Anatomy & Physiology",
    "Bloodborne Pathogens Certified",
    "Hygienic Standards Certified",
    "Microblading Master Class",
    "Permanent Makeup Safety"
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-gradient-to-b from-[#F0E4D8] to-[#F9F7F5] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#2D2D2B]"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#2D2D2B]"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-medium mb-6 text-[#2D2D2B] tracking-tight leading-tight">
              About Brow<span className="text-[#9A7B69]"> Artistry</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto font-light">
              Dedicated to enhancing natural beauty through the art of permanent makeup,
              creating timeless elegance that complements your unique features
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Artist Bio */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -left-5 -top-5 w-24 h-24 border-l-2 border-t-2 border-[#9A7B69]"></div>
                <img 
                  src="https://live.staticflickr.com/65535/54366426370_64dd9b761b_k_d.jpg" 
                  alt="Permanent Makeup Artist" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover z-10 relative"
                  style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 border-r-2 border-b-2 border-[#9A7B69]"></div>
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-xl hidden md:block">
                  <div className="flex items-center">
                    <Award size={26} className="text-[#9A7B69] mr-3" />
                    <div>
                      <p className="text-sm font-medium text-[#2D2D2B]">Master PMU Artist</p>
                      <p className="text-xs text-[#2D2D2B]/70">Since 2012</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="text-[#9A7B69] font-medium tracking-wider text-sm mb-2 block">FOUNDER & ARTIST</span>
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium mb-6 text-[#2D2D2B]">Meet Mugi</h2>
              <div className="w-20 h-1 bg-[#9A7B69]/50 mb-8"></div>
              <p className="text-[#2D2D2B] mb-6 text-lg leading-relaxed">
                My name is Mugi, and art isn't just my passion—it's the heart of my work as a PMU and tattoo artist. Drawing and creating have been part of me for as long as I can remember, a path that naturally led me to this rewarding career. My greatest joy comes from helping women embrace their unique beauty and radiate confidence. Seeing that spark of happiness after a session, knowing I've played a part in making someone feel incredible in their own skin, is truly fulfilling. My focus is always on enhancing your natural features, ensuring you leave feeling beautiful and genuinely empowered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/booking" className="btn bg-[#9A7B69] hover:bg-[#876959] transition-all duration-300 text-white px-8 py-3 rounded-md font-medium">
                  Book a Consultation
                </Link>
                <Link to="/gallery" className="btn btn-outline text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5 transition-all duration-300 px-8 py-3 rounded-md font-medium">
                  View My Work
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gradient-to-b from-[#E6DAD2] to-[#F0E4D8] relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F9F7F5] to-transparent"></div>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#9A7B69] font-medium tracking-wider text-sm mb-2 block">OUR APPROACH</span>
            <h2 className="text-4xl md:text-5xl font-cormorant font-medium mb-4 text-[#2D2D2B]">Our Philosophy</h2>
            <div className="w-20 h-1 bg-[#9A7B69]/50 mx-auto mb-6"></div>
            <p className="text-xl text-[#2D2D2B]/80 max-w-2xl mx-auto font-light">
              The principles that guide our approach to permanent makeup and client care
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full border border-[#E6DAD2] hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#F0E4D8] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-[#9A7B69]" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-[#2D2D2B] font-cormorant">Natural Enhancement</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We believe in enhancing your natural features, not changing them. Our goal is to create brows that look like they were always meant to be there, perfectly suited to your face.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full border border-[#E6DAD2] hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#F0E4D8] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-[#9A7B69]" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-[#2D2D2B] font-cormorant">Safety & Hygiene</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Your safety is our priority. We maintain the highest standards of hygiene and use only premium, medical-grade pigments and equipment in a sterile environment. {' '}
                  <Link 
                    to="/permanent-makeup-safety-dmv" 
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    View our comprehensive safety protocols
                  </Link> and industry-leading complication rates.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full border border-[#E6DAD2] hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#F0E4D8] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-[#9A7B69]" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-[#2D2D2B] font-cormorant">Personalized Approach</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  No two faces are alike, and neither should be any two sets of brows. We take time to understand your preferences and design brows that complement your unique features.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-[#9A7B69] font-medium tracking-wider text-sm mb-2 block">EXPERTISE & QUALIFICATIONS</span>
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium mb-6 text-[#2D2D2B]">Certifications & Training</h2>
              <div className="w-20 h-1 bg-[#9A7B69]/50 mb-8"></div>
              <p className="text-[#2D2D2B] mb-8 text-lg leading-relaxed">
                Continuous education and training are essential in the ever-evolving field of permanent makeup. We pride ourselves on staying at the forefront of industry innovations and techniques.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300">
                    <Award size={18} className="text-[#9A7B69] mr-3 flex-shrink-0" />
                    <span className="text-[#2D2D2B]">{cert}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-[#2D2D2B] text-lg leading-relaxed italic border-l-4 border-[#9A7B69]/30 pl-4">
                Our commitment to excellence means we regularly attend advanced workshops, conferences, and training sessions to refine our skills and bring the latest techniques to our clients.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#F0E4D8] to-[#E6DAD2] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <Calendar size={36} className="text-[#9A7B69] mb-5" />
                  <h3 className="text-3xl font-cormorant font-medium mb-2 text-[#2D2D2B]">10+</h3>
                  <p className="text-[#2D2D2B]/80 text-sm">Years of Experience</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#F0E4D8] to-[#E6DAD2] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <Users size={36} className="text-[#9A7B69] mb-5" />
                  <h3 className="text-3xl font-cormorant font-medium mb-2 text-[#2D2D2B]">1,500+</h3>
                  <p className="text-[#2D2D2B]/80 text-sm">Satisfied Clients</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#F0E4D8] to-[#E6DAD2] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <Award size={36} className="text-[#9A7B69] mb-5" />
                  <h3 className="text-3xl font-cormorant font-medium mb-2 text-[#2D2D2B]">15+</h3>
                  <p className="text-[#2D2D2B]/80 text-sm">Certifications</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#F0E4D8] to-[#E6DAD2] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <CheckCircle size={36} className="text-[#9A7B69] mb-5" />
                  <h3 className="text-3xl font-cormorant font-medium mb-2 text-[#2D2D2B]">100%</h3>
                  <p className="text-[#2D2D2B]/80 text-sm">Hygiene Standards</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-24 bg-[#E6DAD2]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#9A7B69] font-medium tracking-wider text-sm mb-2 block">OUR SPACE</span>
            <h2 className="text-4xl md:text-5xl font-cormorant font-medium mb-4 text-[#2D2D2B]">Our Studio</h2>
            <div className="w-20 h-1 bg-[#9A7B69]/50 mx-auto mb-6"></div>
            <p className="text-xl text-[#2D2D2B]/80 max-w-2xl mx-auto font-light">
              A serene, professional environment designed for your comfort and safety
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-32 h-32 border-l-2 border-t-2 border-[#9A7B69] rounded-tl-lg"></div>
                <img 
                  src="https://live.staticflickr.com/65535/54366208951_7b5cbbc391_o_d.jpg" 
                  alt="Brow Artistry Studio" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full flex flex-col justify-center pl-0 md:pl-6">
                <span className="text-[#9A7B69] font-medium tracking-wider text-sm mb-2 block">LUXURY EXPERIENCE</span>
                <h3 className="text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">A Space Designed for Transformation</h3>
                <div className="w-16 h-1 bg-[#9A7B69]/50 mb-8"></div>
                <p className="text-[#2D2D2B] mb-5 text-lg leading-relaxed">
                  Our studio is designed to provide a calm, luxurious experience from the moment you walk in. We've created a space that feels both professional and welcoming, where you can relax while receiving your treatment.
                </p>
                <p className="text-[#2D2D2B] mb-8 text-lg leading-relaxed">
                  Every aspect of our studio adheres to the highest standards of cleanliness and hygiene. We use medical-grade sterilization equipment, disposable tools, and maintain a spotless environment to ensure your safety and comfort.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#9A7B69]/20 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <CheckCircle size={16} className="text-[#9A7B69]" />
                    </div>
                    <span className="text-[#2D2D2B] font-medium">Private treatment rooms</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#9A7B69]/20 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <CheckCircle size={16} className="text-[#9A7B69]" />
                    </div>
                    <span className="text-[#2D2D2B] font-medium">Medical-grade sterilization</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#9A7B69]/20 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <CheckCircle size={16} className="text-[#9A7B69]" />
                    </div>
                    <span className="text-[#2D2D2B] font-medium">Comfortable seating</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#9A7B69]/20 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <CheckCircle size={16} className="text-[#9A7B69]" />
                    </div>
                    <span className="text-[#2D2D2B] font-medium">Soothing atmosphere</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-4 block">Evidence-Based Education</span>
            <h2 className="section-title relative inline-block mb-6">
              Learn the Facts About PMU
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto mt-8">
              Make informed decisions with data-driven insights from 523+ procedures and Virginia-licensed expertise
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Link to="/pmu-data-guide" className="group block bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-blue-700 transition-colors">
                  PMU Safety Data & Statistics
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  Comprehensive analysis of 523 procedures: 0.19% complication rate vs 2.5% industry average, healing timelines, and satisfaction data.
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>View Data Analysis</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link to="/pmu-myths-vs-facts" className="group block bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-red-100 hover:border-red-200">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-red-700 transition-colors">
                  PMU Myths vs Facts
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  Debunking dangerous misinformation with evidence-based truth. Learn what to avoid and what really matters for safe PMU.
                </p>
                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Separate Fact from Fiction</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link to="/authority" className="group block bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-green-700 transition-colors">
                  DMV PMU Authority Page
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  Virginia licensing, credentials, safety protocols, and why we're the DMV's most trusted permanent makeup authority.
                </p>
                <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>View Credentials</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default About;
