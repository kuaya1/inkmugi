import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Clock, Shield, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import AIExpertLoader from '../components/AIExpertApp/AIExpertLoader';
import EnvTest from '../components/EnvTest';

const OmbreBrows = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Ombre Powder Brows Arlington VA | Natural PMU Results';
  }, []);

  // Enhanced Schema for Ombre Brows Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ombre Powder Brows",
    "description": "Professional ombre powder brow permanent makeup technique creating natural, soft powdered effect that lasts 18-36 months. Performed by licensed Virginia PMU artist.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ink Mugi PMU Studio",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4040 University Dr",
        "addressLocality": "Fairfax",
        "addressRegion": "VA",
        "postalCode": "22030"
      }
    },
    "areaServed": ["Arlington VA", "Fairfax VA", "Annandale VA", "Alexandria VA"],
    "offers": {
      "@type": "Offer",
      "price": "600",
      "priceCurrency": "USD",
      "itemOffered": {
        "@type": "Service",
        "name": "Ombre Powder Brows with Touch-up"
      }
    }
  };

  const beforeAfterImages = [
    {
      before: "https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg",
      after: "https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg",
      description: "Natural ombre powder brows on mature skin"
    },
    {
      before: "https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg", 
      after: "https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg",
      description: "Ombre brows correcting previous microblading"
    },
    {
      before: "https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg",
      after: "https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg", 
      description: "Natural ombre gradient on sparse brows"
    }
  ];

  return (
    <>
      <EnvTest />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <meta name="description" content="Professional ombre powder brows in Arlington VA. Natural, long-lasting results with licensed PMU artist. View before/after photos and book consultation." />
        <meta name="keywords" content="ombre powder brows Arlington VA, permanent makeup Arlington, PMU eyebrows, microshading Fairfax" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9F7F5] to-[#E6DAD2]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[#B8997A] mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-[#4F4A45] ml-2">523+ satisfied clients</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight">
                  Natural Ombre Powder Brows in{' '}
                  <span className="text-[#B8997A]">Arlington VA</span>
                </h1>
                
                <p className="text-lg md:text-xl text-[#4F4A45] leading-relaxed">
                  Wake up with perfect brows every day. Our signature ombre powder technique 
                  creates soft, natural-looking results that last 18-36 months in Northern Virginia's climate.
                </p>

                <div className="grid grid-cols-2 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[#B8997A]" />
                    <span className="text-[#2D2D2B] font-medium">Licensed in VA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-[#B8997A]" />
                    <span className="text-[#2D2D2B] font-medium">2-3 Hour Session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-[#B8997A]" />
                    <span className="text-[#2D2D2B] font-medium">Gentle Technique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#B8997A]" />
                    <span className="text-[#2D2D2B] font-medium">Touch-up Included</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.vagaro.com/bortemicroblading/book-now" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-[#2D2D2B] hover:bg-[#4F4A45] text-[#F9F7F5] px-8 py-4 text-lg"
                  >
                    Book Consultation - $600
                  </a>
                  <Link 
                    to="/gallery" 
                    className="btn btn-outline border-[#2D2D2B] text-[#2D2D2B] hover:bg-[#2D2D2B] hover:text-[#F9F7F5] px-8 py-4 text-lg"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="relative">
                <img 
                  src="https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg" 
                  alt="Natural ombre powder brows result" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-[#2D2D2B]">97%</div>
                  <div className="text-sm text-[#4F4A45]">Satisfaction Rate</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AI Expert Assistant Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              Try Our AI-Powered PMU Assistant
            </h2>
            <p className="text-lg text-[#4F4A45] max-w-3xl mx-auto leading-relaxed">
              Get personalized recommendations, see virtual try-ons, and chat with our AI expert 
              to determine if ombre powder brows are right for you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <AIExpertLoader className="max-w-6xl mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* What is Ombre Powder Brows */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                What Are Ombre Powder Brows?
              </h2>
              <div className="space-y-4 text-[#4F4A45] leading-relaxed">
                <p>
                  Ombre powder brows, also known as microshading, is a semi-permanent cosmetic 
                  tattooing technique that creates a soft, powdered makeup effect. Unlike traditional 
                  microblading which creates hair strokes, this technique uses tiny dots of pigment 
                  to build up color gradually.
                </p>
                <p>
                  The result is a natural gradient that starts lighter at the front of the brow 
                  and gradually becomes darker toward the tail - just like professionally applied 
                  brow powder. This technique is perfect for all skin types, especially oily skin 
                  where traditional microblading may not hold as well.
                </p>
                <p>
                  In Northern Virginia's humid climate, ombre powder brows typically last 
                  18-36 months, making them a cost-effective solution for busy professionals 
                  who want to wake up with perfect brows every day.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#F9F7F5] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#B8997A] mb-1">18-36</div>
                  <div className="text-sm text-[#4F4A45]">Months Longevity</div>
                </div>
                <div className="bg-[#F9F7F5] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#B8997A] mb-1">All</div>
                  <div className="text-sm text-[#4F4A45]">Skin Types</div>
                </div>
                <div className="bg-[#F9F7F5] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#B8997A] mb-1">2-3</div>
                  <div className="text-sm text-[#4F4A45]">Hour Session</div>
                </div>
                <div className="bg-[#F9F7F5] p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#B8997A] mb-1">6-8</div>
                  <div className="text-sm text-[#4F4A45]">Week Touch-up</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="relative">
                <img 
                  src="https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg" 
                  alt="Ombre powder brows healing process" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              Real Results from Arlington Clients
            </h2>
            <p className="text-lg text-[#4F4A45] max-w-2xl mx-auto">
              See the transformation our ombre powder brow technique creates for clients throughout Northern Virginia.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((image, index) => (
              <AnimatedSection key={index} delay={index + 1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-[#4F4A45] mb-2">BEFORE</div>
                      <img 
                        src={image.before} 
                        alt="Before ombre powder brows" 
                        className="rounded-lg w-full h-32 object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#4F4A45] mb-2">AFTER</div>
                      <img 
                        src={image.after} 
                        alt="After ombre powder brows" 
                        className="rounded-lg w-full h-32 object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-[#4F4A45] text-center">{image.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={4} className="text-center mt-12">
            <Link 
              to="/gallery" 
              className="btn bg-[#2D2D2B] hover:bg-[#4F4A45] text-[#F9F7F5] px-8 py-4"
            >
              View Complete Gallery
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Ombre vs Microblading Comparison */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              Ombre Powder Brows vs. Microblading
            </h2>
            <p className="text-lg text-[#4F4A45] max-w-3xl mx-auto">
              Understanding the differences helps you make the best choice for your lifestyle and skin type.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-[#F9F7F5] to-[#E6DAD2] rounded-2xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#B8997A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2B] mb-2">Ombre Powder Brows</h3>
                  <p className="text-[#4F4A45]">Our recommended technique</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8997A] mt-1 flex-shrink-0" />
                    <span className="text-[#2D2D2B]">Perfect for all skin types, especially oily skin</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8997A] mt-1 flex-shrink-0" />
                    <span className="text-[#2D2D2B]">Lasts 18-36 months in DMV climate</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8997A] mt-1 flex-shrink-0" />
                    <span className="text-[#2D2D2B]">Soft, natural makeup effect</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8997A] mt-1 flex-shrink-0" />
                    <span className="text-[#2D2D2B]">Less trauma to skin during procedure</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8997A] mt-1 flex-shrink-0" />
                    <span className="text-[#2D2D2B]">Ages more gracefully over time</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8997A] mt-1 flex-shrink-0" />
                    <span className="text-[#2D2D2B]">Faster healing time</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <div className="text-lg font-bold text-[#2D2D2B]">$600</div>
                  <div className="text-sm text-[#4F4A45]">Includes touch-up session</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-sm">MB</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">Traditional Microblading</h3>
                  <p className="text-gray-500">Hair stroke technique</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Not ideal for oily or sensitive skin</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Fades faster in humid climates (8-18 months)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Hair-like strokes that may blur over time</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">More invasive blade technique</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Can appear patchy as it fades</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Longer healing period</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="text-lg font-bold text-gray-600">$550-800</div>
                  <div className="text-sm text-gray-500">Typical market price</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              Your Healing Journey
            </h2>
            <p className="text-lg text-[#4F4A45] max-w-3xl mx-auto">
              Understanding the healing process helps set proper expectations for your ombre powder brow results.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  phase: "Days 1-3",
                  title: "Initial Bold Phase",
                  description: "Brows appear darker and bolder than final result. This is completely normal.",
                  color: "bg-red-100 border-red-200 text-red-800"
                },
                {
                  phase: "Days 4-10", 
                  title: "Healing & Scabbing",
                  description: "Natural scabbing occurs. Resist the urge to pick or scratch.",
                  color: "bg-orange-100 border-orange-200 text-orange-800"
                },
                {
                  phase: "Days 11-21",
                  title: "Ghost Phase", 
                  description: "Brows may appear very light or patchy. Don't panic - this is part of healing!",
                  color: "bg-yellow-100 border-yellow-200 text-yellow-800"
                },
                {
                  phase: "Days 22-42",
                  title: "True Color",
                  description: "Your final color emerges. Touch-up appointment scheduled if needed.",
                  color: "bg-green-100 border-green-200 text-green-800"
                }
              ].map((stage, index) => (
                <AnimatedSection key={index} delay={index + 1}>
                  <div className={`${stage.color} rounded-xl p-6 border-2 h-full`}>
                    <div className="text-lg font-bold mb-2">{stage.phase}</div>
                    <h4 className="text-xl font-semibold mb-3">{stage.title}</h4>
                    <p className="text-sm">{stage.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={5} className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-[#2D2D2B] mb-4">Aftercare Support Included</h3>
              <p className="text-[#4F4A45] mb-6">
                We provide detailed aftercare instructions and are available to answer any questions 
                during your healing process. Your success is our priority.
              </p>
              <Link 
                to="/aftercare-guide" 
                className="btn bg-[#B8997A] hover:bg-[#8B7355] text-white"
              >
                View Aftercare Guide
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#4F4A45] max-w-2xl mx-auto">
              Get answers to the most common questions about ombre powder brows.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long do ombre powder brows last in Virginia's climate?",
                answer: "In Northern Virginia's humid climate, ombre powder brows typically last 18-36 months. Factors like skin type, lifestyle, and aftercare compliance affect longevity. Our clinical data shows 92% client satisfaction at the 24-month mark."
              },
              {
                question: "Is the ombre powder brow procedure painful?",
                answer: "Most clients rate the discomfort as 3-4 out of 10. We use topical numbing cream to minimize discomfort. The procedure feels similar to eyebrow tweezing or threading. Many clients are surprised by how comfortable the process is."
              },
              {
                question: "Who is a good candidate for ombre powder brows?",
                answer: "Ombre powder brows work well for all skin types, including oily and sensitive skin where microblading may not be suitable. Ideal candidates include busy professionals, athletes, people with sparse brows, or anyone wanting to enhance their natural brow shape."
              },
              {
                question: "How much do ombre powder brows cost in Arlington?",
                answer: "Our ombre powder brow service is $600, which includes the initial procedure, aftercare kit, and a 6-8 week touch-up session. This is competitive pricing for the Arlington/Fairfax area, where services typically range from $550-800."
              },
              {
                question: "Can I still wear makeup with ombre powder brows?",
                answer: "Yes! Many clients love that they can go makeup-free or enhance their ombre brows with additional powder or pencil for special occasions. The technique creates a natural base that works with or without additional makeup."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index + 1}>
                <details className="bg-[#F9F7F5] rounded-xl border border-[#E6DAD2] overflow-hidden group">
                  <summary className="p-6 cursor-pointer hover:bg-[#E6DAD2] transition-colors">
                    <h4 className="text-lg font-semibold text-[#2D2D2B] inline">{faq.question}</h4>
                  </summary>
                  <div className="px-6 pb-6 border-t border-[#E6DAD2]/50">
                    <p className="text-[#4F4A45] leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
};

export default OmbreBrows;
