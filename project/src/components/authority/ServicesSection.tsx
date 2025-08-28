import React from 'react';
import AnimatedSection from '../AnimatedSection';

const ServicesSection: React.FC = () => {
  const services = [
    {
      name: "Microshading Eyebrows",
      price: "$450",
      duration: "2-3 hours",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      description: "Advanced microshading technique creating natural, hair-like strokes for fuller, more defined eyebrows that last 1-3 years.",
      features: [
        "Natural hair-stroke appearance",
        "Customized shape design",
        "Premium pigment quality",
        "Complimentary touch-up included",
        "1-3 year longevity"
      ],
      popular: true
    },
    {
      name: "Ombre Powder Brows",
      price: "$400",
      duration: "2-3 hours", 
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      description: "Gradient shading technique creating a soft, powdered makeup look that's perfect for oily skin types and bold brow preferences.",
      features: [
        "Soft, powdered finish",
        "Great for oily skin",
        "Bold, defined look",
        "Fade-resistant formula",
        "Low maintenance"
      ],
      popular: false
    },
    {
      name: "Combo Brows",
      price: "$500",
      duration: "3-4 hours",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg", 
      description: "The best of both worlds - combining microshading and powder techniques for ultimate dimension and natural-looking fullness.",
      features: [
        "Microshading + powder combo",
        "Maximum dimension",
        "Suitable for all skin types",
        "Ultra-natural appearance",
        "Longest-lasting option"
      ],
      popular: false
    },
    {
      name: "Brow Touch-Up",
      price: "$150",
      duration: "1-2 hours",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      description: "Refresh and maintain your existing permanent makeup with professional touch-up services to keep your brows looking fresh.",
      features: [
        "Color refresh",
        "Shape adjustment",
        "Fill sparse areas",
        "Extend longevity",
        "Quick appointment"
      ],
      popular: false
    },
    {
      name: "Consultation & Design",
      price: "Free",
      duration: "30 minutes",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      description: "Comprehensive consultation including face analysis, brow mapping, color selection, and technique recommendation.",
      features: [
        "Professional face analysis",
        "Custom brow mapping",
        "Color matching",
        "Technique consultation",
        "No obligation"
      ],
      popular: false
    },
    {
      name: "Color Correction",
      price: "$300",
      duration: "2-3 hours",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      description: "Expert correction of previous permanent makeup work, including color adjustment and shape refinement by other artists.",
      features: [
        "Previous work correction",
        "Color neutralization",
        "Shape refinement",
        "Expert assessment",
        "Restoration service"
      ],
      popular: false
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Expert PMU Services for 
            <span className="text-primary-600"> Every Need</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From initial consultations to advanced corrections, our comprehensive service menu 
            covers every aspect of permanent makeup artistry with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-primary-400 ring-opacity-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      {service.price}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://www.vagaro.com/bortemicroblading/book-now"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {service.price === 'Free' ? 'Schedule Consultation' : 'Book This Service'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Our Proven Process
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every service follows our meticulous 5-step process ensuring safety, precision, and your complete satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Free consultation and brow mapping' },
              { step: '02', title: 'Design', desc: 'Custom shape and color selection' },
              { step: '03', title: 'Numbing', desc: 'Comfort application for pain-free experience' },
              { step: '04', title: 'Procedure', desc: 'Precise application using expert techniques' },
              { step: '05', title: 'Aftercare', desc: 'Comprehensive healing instructions' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
              Ready to Transform Your Brows?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of satisfied clients who trust INK MUGI for their permanent makeup needs. 
              Book your free consultation today.
            </p>
            <a
              href="https://www.vagaro.com/bortemicroblading/book-now"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-100 text-primary-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
