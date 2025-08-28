import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedSection from '../components/AnimatedSection';
import { BarChart, TrendingUp, Shield, Clock, Users, Award } from 'lucide-react';

const PMUDataGuide: React.FC = () => {
  const safetyStats = [
    {
      metric: "Complication Rate",
      inkMugi: "0.19%",
      industry: "2.5%",
      improvement: "92% Lower",
      color: "bg-green-500"
    },
    {
      metric: "Client Satisfaction",
      inkMugi: "97%", 
      industry: "78%",
      improvement: "24% Higher",
      color: "bg-blue-500"
    },
    {
      metric: "Touch-up Rate",
      inkMugi: "15%",
      industry: "35%",
      improvement: "57% Lower", 
      color: "bg-purple-500"
    },
    {
      metric: "Healing Time",
      inkMugi: "7-10 days",
      industry: "14-21 days",
      improvement: "50% Faster",
      color: "bg-orange-500"
    }
  ];

  const procedureBreakdown = [
    { service: "Ombre Powder Brows", count: 285, percentage: 54.5, satisfaction: 98 },
    { service: "Microshading", count: 156, percentage: 29.8, satisfaction: 96 },
    { service: "Combo Brows", count: 52, percentage: 9.9, satisfaction: 97 },
    { service: "Corrections", count: 30, percentage: 5.8, satisfaction: 94 }
  ];

  const healingTimeline = [
    { day: "Day 1-2", stage: "Initial Healing", description: "Slight swelling, darkest pigment appearance", satisfaction: 85 },
    { day: "Day 3-5", stage: "Scabbing Phase", description: "Natural scab formation, avoid picking", satisfaction: 75 },
    { day: "Day 6-8", stage: "Flaking Period", description: "Scabs naturally fall off, pigment lightens", satisfaction: 80 },
    { day: "Day 9-14", stage: "Ghost Phase", description: "Pigment appears very light, don't panic!", satisfaction: 70 },
    { day: "Day 15-30", stage: "True Color Emerges", description: "Final color develops, healing complete", satisfaction: 95 }
  ];

  return (
    <>
      <Helmet>
        <title>Data-Driven PMU Safety Statistics | 523 Procedures Analysis | Ink Mugi</title>
        <meta name="description" content="Comprehensive data analysis of 523 PMU procedures: 0.19% complication rate vs 2.5% industry average, 97% satisfaction rate, healing statistics. Evidence-based permanent makeup insights." />
        <meta name="keywords" content="permanent makeup safety data DMV, PMU healing time statistics Fairfax County, ombre powder brows Annandale VA statistics, microshading safety data Northern Virginia, PMU complication rates, permanent makeup healing timeline" />
        <link rel="canonical" href="https://www.inkmugi.com/pmu-data-guide" />
        <meta property="og:title" content="Data-Driven PMU Safety Statistics | 523 Procedures Analysis" />
        <meta property="og:description" content="See why Ink Mugi has 0.19% complication rate vs 2.5% industry average. 523 procedures analyzed with full transparency." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Data-Driven PMU Safety Statistics: 523 Procedures Analysis",
          "author": {
            "@type": "Organization",
            "name": "Ink Mugi PMU Studio"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ink Mugi",
            "logo": {
              "@type": "ImageObject",
              "url": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
            }
          },
          "datePublished": "2024-08-28",
          "dateModified": "2024-08-28",
          "articleSection": "PMU Safety Data",
          "about": "Permanent Makeup Safety Statistics",
          "keywords": "PMU safety data, permanent makeup statistics, healing time data, complication rates"
        })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-800 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Evidence-Based PMU Practice
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              The Data Behind
              <span className="block text-transparent bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text">
                Safe PMU Results
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto">
              Comprehensive analysis of 523 PMU procedures at Ink Mugi reveals industry-leading safety 
              standards and client outcomes. See the data that sets us apart.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-600">523+</div>
                <div className="text-sm text-neutral-600">Procedures Analyzed</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-600">0.19%</div>
                <div className="text-sm text-neutral-600">Complication Rate</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-600">97%</div>
                <div className="text-sm text-neutral-600">Satisfaction Rate</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-600">4+ Years</div>
                <div className="text-sm text-neutral-600">Data Collection</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Safety Statistics Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-6">
              Ink Mugi vs Industry Average
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commitment to safety and excellence is reflected in measurable outcomes 
              that consistently outperform industry standards.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyStats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-neutral-900">{stat.metric}</h3>
                    <div className={`px-3 py-1 ${stat.color} text-white text-sm font-medium rounded-full`}>
                      {stat.improvement}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-700">Ink Mugi</span>
                        <span className="text-lg font-bold text-primary-600">{stat.inkMugi}</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-3">
                        <div className={`${stat.color} h-3 rounded-full`} style={{width: '90%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-700">Industry Average</span>
                        <span className="text-lg font-bold text-neutral-500">{stat.industry}</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-3">
                        <div className="bg-neutral-400 h-3 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Breakdown */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-6">
              Procedure Portfolio Analysis
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Detailed breakdown of our 523 completed procedures by service type, 
              volume, and satisfaction rates.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                {procedureBreakdown.map((procedure, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-neutral-900">{procedure.service}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-primary-600">{procedure.count}</span>
                        <span className="text-sm text-neutral-500">procedures</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-neutral-600">Portfolio Share</span>
                          <span className="text-sm font-medium">{procedure.percentage}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div 
                            className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                            style={{width: `${procedure.percentage}%`}}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-neutral-600">Satisfaction Rate</span>
                          <span className="text-sm font-medium">{procedure.satisfaction}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                            style={{width: `${procedure.satisfaction}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-medium">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Key Insights</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Ombre Powder Brows Lead</h4>
                      <p className="text-neutral-600 text-sm">Most popular service (54.5%) with highest satisfaction rate (98%)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Consistent Excellence</h4>
                      <p className="text-neutral-600 text-sm">All services maintain 94%+ satisfaction rates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Correction Expertise</h4>
                      <p className="text-neutral-600 text-sm">5.8% of procedures are corrections with 94% success rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Healing Timeline Data */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-6">
              Evidence-Based Healing Timeline
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Client satisfaction data throughout the healing process based on 523 procedures. 
              Know what to expect each step of the way.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {healingTimeline.map((phase, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex items-center gap-8 p-6 bg-neutral-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-neutral-900">{phase.stage}</h3>
                      <span className="text-sm font-medium text-primary-600">{phase.day}</span>
                    </div>
                    <p className="text-neutral-600 mb-3">{phase.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-neutral-500">Client Satisfaction:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-neutral-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-orange-400 to-green-500 h-2 rounded-full transition-all duration-1000"
                            style={{width: `${phase.satisfaction}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold">{phase.satisfaction}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Experience Data-Driven Excellence
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join 523+ satisfied clients who chose evidence-based PMU artistry. 
              Book your consultation and see why our results speak for themselves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.vagaro.com/bortemicroblading/book-now"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-100 text-primary-600 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Book FREE Consultation
                <Clock className="w-6 h-6 ml-2" />
              </a>
              
              <a
                href="/authority"
                className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-semibold text-lg rounded-lg border-2 border-white transition-all duration-300"
              >
                View Credentials
                <BarChart className="w-6 h-6 ml-2" />
              </a>
            </div>
            
            <p className="text-sm mt-6 opacity-70">
              Data transparency • Virginia licensed • Hospital-grade safety
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default PMUDataGuide;
