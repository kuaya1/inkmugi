import React from 'react';
import AnimatedSection from '../AnimatedSection';

const CredentialsGrid: React.FC = () => {
  const credentials = [
    {
      category: "Professional Certifications",
      items: [
        {
          title: "Advanced Microshading Certification",
          issuer: "PhiBrows Academy",
          year: "2023",
          description: "Advanced training in precision microshading techniques and hair-stroke artistry",
          badge: "🏆"
        },
        {
          title: "Ombre Powder Brows Mastery",
          issuer: "PMU International",
          year: "2022",
          description: "Comprehensive certification in gradient shading and powder brow techniques",
          badge: "🎯"
        },
        {
          title: "Permanent Makeup Artist License",
          issuer: "Virginia Department of Health",
          year: "2020",
          description: "State-licensed permanent makeup artist with health department approval",
          badge: "✅"
        }
      ]
    },
    {
      category: "Safety & Hygiene",
      items: [
        {
          title: "Bloodborne Pathogens Certification",
          issuer: "OSHA Compliance Training",
          year: "2024",
          description: "Current certification in bloodborne pathogen safety and infection control",
          badge: "🛡️"
        },
        {
          title: "Health Department Approved",
          issuer: "Fairfax County Health Dept",
          year: "2024",
          description: "Annual health department inspection and approval for PMU procedures",
          badge: "🏥"
        },
        {
          title: "CPR/First Aid Certified",
          issuer: "American Red Cross",
          year: "2024",
          description: "Current CPR and First Aid certification for emergency preparedness",
          badge: "🚑"
        }
      ]
    },
    {
      category: "Business Excellence",
      items: [
        {
          title: "BBB Accredited Business",
          issuer: "Better Business Bureau",
          year: "2023",
          description: "A+ rating with Better Business Bureau for outstanding customer service",
          badge: "⭐"
        },
        {
          title: "Professional Liability Insurance",
          issuer: "Beauty & Wellness Insurance",
          year: "2024",
          description: "Comprehensive professional liability and malpractice insurance coverage",
          badge: "🔒"
        },
        {
          title: "Google Guaranteed Provider",
          issuer: "Google Business",
          year: "2024",
          description: "Verified and guaranteed service provider with Google's quality assurance",
          badge: "🌟"
        }
      ]
    },
    {
      category: "Continuing Education",
      items: [
        {
          title: "Advanced Color Theory Workshop",
          issuer: "International PMU Conference",
          year: "2024",
          description: "Latest techniques in color matching and pigment selection for diverse skin tones",
          badge: "🎨"
        },
        {
          title: "Skin Analysis & Consultation",
          issuer: "Dermatology Training Institute",
          year: "2023",
          description: "Advanced training in skin analysis and pre-procedure consultation techniques",
          badge: "🔬"
        },
        {
          title: "Business Management for PMU Artists",
          issuer: "Beauty Business Academy",
          year: "2023",
          description: "Professional development in client relations and business operations",
          badge: "📈"
        }
      ]
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div id="credentials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Credentials That Set Us 
            <span className="text-primary-600"> Apart</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our comprehensive certifications, licenses, and ongoing education demonstrate our unwavering 
            commitment to safety, excellence, and staying at the forefront of permanent makeup artistry.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="space-y-16">
          {credentials.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-800 mb-2">
                  {category.category}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
              </div>

              {/* Category Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-neutral-50 rounded-xl p-6 border-2 border-transparent hover:border-primary-200 transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Badge & Year */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{item.badge}</span>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                      {item.title}
                    </h4>

                    {/* Issuer */}
                    <p className="text-primary-600 font-medium mb-3">
                      {item.issuer}
                    </p>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Your Safety & Satisfaction Are Our Top Priorities
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Every credential, certification, and license we hold is a promise to you – that you're receiving 
              the highest standard of care from the most qualified permanent makeup artist in the DMV area.
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🏛️</div>
                <div className="text-sm font-medium text-neutral-700">State Licensed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <div className="text-sm font-medium text-neutral-700">Health Approved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="text-sm font-medium text-neutral-700">Fully Insured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-sm font-medium text-neutral-700">Continuing Ed</div>
              </div>
            </div>

            <a
              href="https://inkmugi.vagaro.com/Services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book with Confidence
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CredentialsGrid;
