import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Clock, Heart, Star, Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'react-lazy-load-image-component/src/effects/blur.css';

import AnimatedSection from '../components/AnimatedSection';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  // Schema.org structured data for local business
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Inkmugi",
    "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7857 Heritage Dr #330",
      "addressLocality": "Annandale",
      "addressRegion": "VA",
      "postalCode": "22003",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.8304",
      "longitude": "-77.1964"
    },
    "telephone": "+1-571-283-8228",
    "email": "inkmugi@gmail.com",
    "url": "https://www.inkmugi.com",
    "sameAs": [
      "https://www.instagram.com/inkmugi",
      "https://www.facebook.com/inkmugi"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47"
    },
    "areaServed": [
      "Annandale",
      "Arlington",
      "Alexandria", 
      "Fairfax",
      "Washington DC",
      "Northern Virginia",
      "Maryland"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "PMU Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ombre Powder Brows",
            "description": "Expert semi-permanent makeup technique creating soft, shaded brows perfect for the DMV area's humid climate."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Microshading",
            "description": "Professional microshading service creating soft, natural-looking brows, ideal for sensitive and oily skin types."
          }
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Mariel H',
      rating: 5,
      testimonial: "Mugi did an amazing job!! I absolutely love my eyebrows she did an amazing job. she is very nice and sweet. I highly recommend her.",
      date: 'June 15, 2024',
    },
    {
      name: 'Tuyet Q',
      rating: 5,
      testimonial: 'My ombré powder brows were done by Mugi! She is so sweet, very detailed, and patient. She took the time to consult with me to see what my brow goals are and the best fit for my face. After my brows healed they looked perfect I never thought having my brows done would save so much time everyday getting ready I love them!! Mugi along with Gena and Tuul are exceptional artists. Highly recommended to go see them!',
      date: 'May 22, 2024',
    },
    {
      name: 'Chantee C',
      rating: 5,
      testimonial: 'Mugi is so wonderful. She was very professional and truly cares about her clients comfort and her craft. I appreciate how detailed she was and she communicated every step to me so well and eloquently.',
      date: 'April 10, 2024',
    },
  ];

  const services = [
    {
      title: 'Ombre Powder Brows',
      description: 'A soft, airbrushed effect that creates the perfect brow shape with a subtle gradient appearance.',
      price: 'From 400',
      duration: '2-3 hours',
      image: 'https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg',
    },
    {
      title: 'Microshading',
      description: 'combines brow hair strokes and shading for natural definition; suits all skin, lasts 1-3 years, touch-up required.',
      price: 'From $500',
      duration: '1-2 hours',
      image: 'https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg',
    },
    {
      title: 'Fine line tattoo ',
      description: 'Fine line tattoos use thin, precise lines for delicate, intricate, and minimalist designs.',
      price: 'From $150',
      duration: '2-3 hours',
      image: 'https://live.staticflickr.com/65535/54408439944_63e225ac5f_c_d.jpg',
    },
  ];

  const beforeAfterImages = [
    {
      before: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
    },
  ];

  return (
    <>
      <SEO structuredData={schemaData} />
{/* Hero Section */}
<section className="relative h-screen flex items-center">
  {/* Darker overlay with reduced opacity (by ~20%) */}
  <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-black/60 z-10"></div>
  
  {/* Reduced vignette effect intensity */}
  <div className="absolute inset-0 z-[9] shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]"></div>
  
  <div 
    className="absolute inset-0 bg-cover bg-center filter brightness-95 contrast-110"
    style={{ 
      backgroundImage: "url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')" 
    }}
  ></div>
  
  <div className="container-custom relative z-20 text-white">
    <AnimatedSection className="max-w-3xl">
      {/* Subtle divider line above tagline */}
      <div className="w-24 h-[1.5px] bg-[#E6DAD2] mb-8 opacity-80"></div>
      
      {/* Refined mini-tagline */}
      <span className="inline-block text-[#E6DAD2] font-light tracking-widest mb-4 uppercase text-xs md:text-sm">
        Premium Permanent Makeup Artistry
      </span>
      
      {/* Main headline */}
      <h1 className="mb-6">
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-light leading-tight">
          Effortless <span className="text-[#E6DAD2]">Beauty</span>,
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-medium leading-tight flex items-center mt-2">
          Timeless <span className="text-[#E6DAD2] ml-2 relative">
            Elegance
            {/* Decorative underline element */}
            <span className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-[#E6DAD2] opacity-90"></span>
          </span>
        </div>
      </h1>
      
      <p className="text-xl sm:text-2xl mb-10 text-white/95 leading-relaxed font-light max-w-2xl">
        Discover expertly crafted ombré powder brows that enhance your features with subtle elegance and lasting perfection.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/booking" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-medium transition-all duration-300 transform hover:translate-y-[-2px] px-8 py-3">
          Schedule Consultation
        </Link>
        <Link to="/gallery" className="btn backdrop-blur-sm border border-white/40 hover:bg-white/10 text-white transition-all duration-300 px-8 py-3">
          Explore Our Work
        </Link>
      </div>
    </AnimatedSection>
  </div>

  {/* Refined scroll indicator */}
  <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
    <div className="animate-bounce w-10 h-10 flex items-center justify-center">
      <ArrowRight size={24} className="transform rotate-90 text-white/80" />
    </div>
  </div>
</section>

      {/* Featured Services */}
      <section className="py-24 bg-gradient-to-b from-[#F9F7F5] to-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#2D2D2B]/5 to-transparent"></div>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Exceptional Artistry</span>
            <h2 className="section-title relative inline-block">
              Our Signature Services
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              Discover our range of specialized permanent makeup services, each designed to enhance your natural beauty
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link to="/services" className="btn btn-outline inline-flex items-center text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5 transition-all duration-300 group">
              View All Services <ArrowRight size={16} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#F7EDE6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6DAD2] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E6DAD2] rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <LazyLoadImage
                  src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
                  alt="Permanent Makeup Artist"
                  className="rounded-lg shadow-medium w-full h-auto object-cover"
                  style={{ height: "auto", aspectRatio: "3/4" }}
                  effect="blur"
                  placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjdFREU2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJEMkQyQiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+Cjwvc3ZnPg=="
                />
                <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-[#2D2D2B]/20 rounded-tl-lg"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-[#2D2D2B]/20 rounded-br-lg"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">About Us</span>
              <h2 className="section-title text-[#2D2D2B] relative inline-block mb-6">
                Artistry Meets Precision
                <span className="absolute -bottom-3 left-0 w-24 h-1 bg-[#E6DAD2]"></span>
              </h2>
              <p className="text-[#2D2D2B]/80 mb-6 leading-relaxed">
                With over a decade of experience in permanent makeup, I specialize in creating natural-looking, perfectly tailored ombre powder brows that enhance your unique features.
              </p>
              <p className="text-[#2D2D2B]/80 mb-8 leading-relaxed">
                Every procedure begins with a thorough consultation to understand your preferences and design brows that complement your face shape, skin tone, and personal style.
              </p>
              
              {/* Trust Signals */}
              <div className="bg-white/70 p-6 rounded-lg mb-8">
                <h4 className="font-medium mb-4 text-[#2D2D2B]">Certified & Trusted</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Award size={16} className="text-[#E6DAD2] mr-2" />
                    <span>Licensed PMU Artist</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={16} className="text-[#E6DAD2] mr-2" />
                    <span>Blood-borne Pathogen Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Heart size={16} className="text-[#E6DAD2] mr-2" />
                    <span>47+ Five-Star Reviews</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-[#E6DAD2] mr-2" />
                    <span>10+ Years Experience</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Shield size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Safety First</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Sterile environment & premium pigments</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Clock size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Lasting Results</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Beautiful brows for 1-3 years</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Heart size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Personalized Design</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Custom shapes for your face</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Award size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Satisfaction Guarantee</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Your happiness is our priority</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white transition-all duration-300 transform hover:translate-y-[-2px]">
                Learn More About Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Before & After Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">See The Results</span>
            <h2 className="section-title relative inline-block">
              Transformations
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              See the difference our ombre powder brow technique can make
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beforeAfterImages.map((item, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="relative rounded-lg overflow-hidden shadow-medium transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex">
                    <div className="w-1/2 relative">
                      <img 
                        src={item.before} 
                        alt="Before Ombre Powder Brows" 
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#2D2D2B]/70 backdrop-blur-sm text-white text-sm px-4 py-1 rounded-full">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={item.after} 
                        alt="After Ombre Powder Brows" 
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#E6DAD2] text-[#2D2D2B] text-sm px-4 py-1 rounded-full">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link to="/gallery" className="btn btn-outline inline-flex items-center text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5 transition-all duration-300 group">
              View Full Gallery <ArrowRight size={16} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-[#F9F7F5] to-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">How We Work</span>
            <h2 className="section-title relative inline-block">
              Our Process
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              From consultation to aftercare, we ensure a seamless experience
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={1}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">1</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Consultation</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We begin with a thorough consultation to understand your preferences, assess your skin type, and design brows that perfectly complement your features.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">2</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Procedure</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Using state-of-the-art equipment and premium pigments, we meticulously create your custom ombre powder brows with precision and care.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">3</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Aftercare</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We provide comprehensive aftercare instructions and support to ensure optimal healing and long-lasting results for your new brows.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-20 h-64 w-64 bg-[#F7EDE6] rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 h-48 w-48 bg-[#F7EDE6] rounded-full filter blur-3xl opacity-40"></div>
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Our Happy Clients</span>
            <h2 className="section-title relative inline-block">
              Client Experiences
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              Hear what our clients have to say about their ombre powder brow transformations
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-14"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedSection>

          {/* Trust Badges */}
          <AnimatedSection delay={1}>
            <div className="mt-16 text-center">
              <div className="bg-[#F7EDE6] p-8 rounded-lg">
                <h4 className="font-medium mb-6 text-[#2D2D2B]">Trusted & Verified</h4>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-2" size={20} />
                    <span className="font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-[#E6DAD2] mr-2" size={20} />
                    <span className="font-medium">200+ Happy Clients</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-[#E6DAD2] mr-2" size={20} />
                    <span className="font-medium">Licensed Professional</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-[#E6DAD2] mr-2" size={20} />
                    <span className="font-medium">Insured & Bonded</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="bg-[#E6DAD2]/10 inline-block px-4 py-2 rounded-full mb-4">
                <span className="text-[#E6DAD2] font-medium tracking-wider uppercase text-sm">Limited Availability</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6 leading-tight">
                Ready to Transform Your Brows?
              </h2>
              <p className="text-lg text-[#F9F7F5]/90 mb-8 max-w-2xl mx-auto">
                Book your consultation today and take the first step towards effortlessly beautiful brows that enhance your natural features.
              </p>
              
              {/* Value Proposition */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Clock className="text-[#E6DAD2] mb-3 mx-auto" size={32} />
                  <h4 className="font-medium mb-2">Free Consultation</h4>
                  <p className="text-sm text-[#F9F7F5]/80">30-minute personalized design session</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Award className="text-[#E6DAD2] mb-3 mx-auto" size={32} />
                  <h4 className="font-medium mb-2">Satisfaction Guarantee</h4>
                  <p className="text-sm text-[#F9F7F5]/80">Love your brows or we'll make it right</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Shield className="text-[#E6DAD2] mb-3 mx-auto" size={32} />
                  <h4 className="font-medium mb-2">Licensed & Insured</h4>
                  <p className="text-sm text-[#F9F7F5]/80">Certified permanent makeup artist</p>
                </div>
              </div>

              {/* Urgency Element */}
              <div className="bg-[#E6DAD2]/20 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
                <p className="text-[#E6DAD2] font-medium mb-2">🔥 Only 3 spots available this month!</p>
                <p className="text-sm text-[#F9F7F5]/90">Book now to secure your appointment at our current pricing</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/booking" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-medium transition-all duration-300 transform hover:translate-y-[-2px] text-lg px-8 py-4">
                  Book Your Consultation Now
                </Link>
                <Link to="/contact" className="btn bg-transparent border border-[#F9F7F5] hover:bg-white/10 text-white transition-all duration-300">
                  Have Questions? Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema Markup */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Common Questions</span>
            <h2 className="section-title relative inline-block">
              Frequently Asked Questions
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              Get answers to the most common questions about ombre powder brows and microshading in the DMV area
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={1}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">How long do ombre powder brows last?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Ombre powder brows typically last 1-3 years, depending on your skin type, lifestyle, and aftercare. In the DMV's humid climate, they often last longer than traditional microblading due to the technique's durability.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">What's better for oily skin - microshading or microblading?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Microshading is generally better for oily skin types common in the DMV area. The stippling technique holds better in oily skin and humid conditions compared to hair-stroke methods.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">How much do ombre brows cost in Annandale?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Our ombre powder brows start at $400, including consultation, initial treatment, and 6-week touch-up. We offer transparent pricing with no hidden fees for our Annandale and DMV clients.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={4}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Do you serve clients from Arlington and Alexandria?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Yes! We're conveniently located in Annandale and serve clients throughout the DMV area including Arlington (15 min), Alexandria (20 min), and Washington DC (25 min).
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={5}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">How do I prepare for my PMU appointment?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Avoid caffeine, alcohol, and blood thinners 24 hours before. Don't tweeze or wax brows for 2 weeks prior. We'll provide detailed pre-care instructions during your consultation.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={6}>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">What aftercare is needed in DMV's humid climate?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    We provide specialized aftercare instructions for the DMV's humidity levels. This includes specific products and techniques to ensure optimal healing during our hot, humid summers.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Convenience Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Convenient Location</span>
            <h2 className="section-title relative inline-block">
              Serving the Entire DMV Area
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              Easily accessible from major DMV locations with ample parking and convenient scheduling
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={1}>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">15</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Arlington</h3>
                <p className="text-[#2D2D2B]/80">
                  Just 15 minutes via I-495<br />
                  Serving Clarendon, Rosslyn, Ballston, Pentagon City
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">20</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Alexandria</h3>
                <p className="text-[#2D2D2B]/80">
                  20 minutes via Little River Turnpike<br />
                  Easy access from Old Town, Del Ray, Kingstowne
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">25</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Washington DC</h3>
                <p className="text-[#2D2D2B]/80">
                  25 minutes via I-395<br />
                  Metro accessible via Orange/Silver Line to Vienna
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <div className="bg-[#F7EDE6] p-8 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-cormorant font-medium mb-4 text-[#2D2D2B]">Free Parking & Flexible Scheduling</h3>
              <p className="text-[#2D2D2B]/80 mb-6">
                Located in Heritage Professional Plaza with ample free parking. We offer evening and weekend appointments to accommodate busy DMV professionals.
              </p>
              <Link to="/booking" className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white transition-all duration-300">
                Schedule Your Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;