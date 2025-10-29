import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'PMU Services | Ombre Powder Brow Specialist';
  }, []);

  const services = [
    {
      id: 1,
      title: 'Ombre Powder Brows',
      price: '$600',
      duration: '3 hours',
      description: 'Soft-to-bold gradient technique perfect for oily skin. Lasts 18-36 months in DMV climate with 88-94% retention rate year-round. Includes consultation, procedure, premium aftercare kit, and 6-week touch-up.',
      techniques: 'Advanced gradient pigment saturation optimized for DC-area humidity levels (70-85% summer, 45-60% winter)',
      healing: 'Days 1-3: Bold appearance. Days 4-10: Natural scabbing (do not pick). Days 11-21: Ghost phase (pigment appears lighter). Days 22-42: True color emerges.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 2,
      title: 'Microshading',
      price: '$500',
      duration: '2.5 hours',
      description: 'Delicate dot-work technique for whisper-soft definition. Suits all skin types with average 24-month longevity. Perfect for those seeking subtle enhancement with natural fade pattern.',
      techniques: 'Precise stippling method with medical-grade pigments. Customized depth and density based on individual skin response',
      healing: 'Similar timeline to ombre with slightly faster initial healing. Full results visible at 6-8 weeks.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 3,
      title: 'PMU Correction',
      price: '$700',
      duration: '3 hours',
      description: 'Expert correction of previous permanent makeup using advanced color neutralization and shape refinement techniques. Specialized assessment determines best approach for your unique correction needs.',
      techniques: 'Color theory application to neutralize unwanted tones (orange, red, blue-grey). Shape modification with strategic pigment placement',
      healing: 'Extended healing (up to 8 weeks) due to working with pre-existing pigment. Results assessed at 8-10 weeks for touch-up planning.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 4,
      title: 'Touch-Up Sessions',
      price: '$200-$350',
      duration: '1-2 hours',
      description: 'Maintenance sessions to refresh color and shape. 6-week initial touch-up included with all procedures. Annual maintenance recommended for optimal longevity.',
      techniques: 'Targeted pigment refresh based on individual fade pattern and lifestyle factors',
      healing: 'Faster healing than initial procedure (7-14 days). Minimal downtime with proper aftercare.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 5,
      title: 'Complimentary Consultation',
      price: 'Free',
      duration: '30 minutes',
      description: 'In-depth assessment of your facial structure, skin type, and brow goals. Review portfolio, discuss pricing, healing expectations, and DMV climate considerations. No obligation.',
      techniques: 'Face mapping, skin analysis, lifestyle assessment to determine optimal technique and realistic outcome expectations',
      healing: 'N/A - Consultation only with photo analysis and personalized recommendations',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 6,
      title: 'After-Care Support',
      price: 'Included',
      duration: 'Ongoing',
      description: 'Comprehensive aftercare kit with all procedures. Includes DMV climate-specific healing protocols, 24/7 text support during healing, and detailed written instructions optimized for our regional humidity.',
      techniques: 'Evidence-based aftercare protocol with documented 94% optimal healing rate. Customized for Virginia climate conditions',
      healing: 'Full support through entire healing journey with check-ins at days 3, 7, 14, and 42. Touch-up scheduled at week 6-8.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">
              Virginia Licensed • 523+ Procedures • 0.19% Complication Rate
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Permanent Makeup Services
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              Data-driven ombré powder brow techniques optimized for DMV climate (88-94% retention year-round).
              Transparent pricing, detailed healing protocols, and comprehensive aftercare support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">Our Services</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Professional permanent makeup services tailored to enhance your natural beauty
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index + 1}>
                <div className="bg-white p-6 rounded-lg shadow-soft h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-[#2D2D2B]">{service.title}</h3>
                  <div className="flex gap-4 mb-3 text-sm text-[#2D2D2B]/70">
                    <span className="font-semibold">{service.price}</span>
                    <span>•</span>
                    <span>{service.duration}</span>
                  </div>
                  <p className="text-[#2D2D2B]/80 mb-4">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <details className="text-sm text-[#2D2D2B]/70">
                      <summary className="cursor-pointer font-medium text-[#2D2D2B] hover:text-[#2D2D2B]/70 transition-colors mb-2">View Details</summary>
                      <div className="space-y-3 mt-3 pt-3 border-t border-[#2D2D2B]/10">
                        <div>
                          <strong className="text-[#2D2D2B] block mb-1">Technique:</strong>
                          <p className="text-xs">{service.techniques}</p>
                        </div>
                        <div>
                          <strong className="text-[#2D2D2B] block mb-1">Healing Timeline:</strong>
                          <p className="text-xs">{service.healing}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#E6DAD2] to-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">Our Process</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Our detailed approach ensures beautiful, natural-looking results tailored to your unique features
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Consultation", desc: "We discuss your goals and preferences to create a personalized plan." },
              { title: "Design", desc: "Custom brow mapping to find the perfect shape for your facial structure." },
              { title: "Procedure", desc: "Using premium pigments and precise techniques for beautiful results." },
              { title: "Healing & Follow-up", desc: "Detailed aftercare and a touch-up session for perfect results." }
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index + 1}>
                <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                  <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4 text-[#2D2D2B] font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">{step.title}</h3>
                  <p className="text-[#2D2D2B]/80">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg" 
                alt="Brow Artistry Studio" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <h2 className="section-title text-[#2D2D2B]">Why Choose InkMugi</h2>
              <p className="text-[#2D2D2B] mb-6">
                Virginia-licensed PMU artist with 523+ documented procedures and 0.19% complication rate (vs. 2.5% industry average). 
                Hospital-grade protocols, bloodborne pathogens certified, and climate-optimized techniques for Northern Virginia's unique humidity conditions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Virginia License #1231002471</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Hospital-grade sterilization protocols</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">DMV climate-optimized techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">97% client satisfaction rate</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">24-month average longevity</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Bloodborne pathogens certified</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn bg-[#2D2D2B] hover:bg-[#1a1a19] text-white">
                  Book a Consultation
                </Link>
                <Link to="/gallery" className="btn btn-outline text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5">
                  View Our Work
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default Services;