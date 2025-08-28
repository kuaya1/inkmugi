import React from 'react';
import AnimatedSection from '../AnimatedSection';

const LocationInfo: React.FC = () => {
  const serviceAreas = [
    {
      city: "Washington, DC",
      distance: "15 miles",
      highlights: ["Capitol Hill", "Dupont Circle", "Georgetown", "Adams Morgan"],
      icon: "🏛️"
    },
    {
      city: "Arlington, VA",
      distance: "8 miles", 
      highlights: ["Rosslyn", "Ballston", "Clarendon", "Pentagon City"],
      icon: "🌉"
    },
    {
      city: "Alexandria, VA",
      distance: "12 miles",
      highlights: ["Old Town", "Del Ray", "Eisenhower Valley", "Kingstowne"],
      icon: "⚓"
    },
    {
      city: "Fairfax, VA",
      distance: "5 miles",
      highlights: ["Fairfax City", "Fair Oaks", "University Area", "Government Center"],
      icon: "🏫"
    },
    {
      city: "Falls Church, VA",
      distance: "6 miles",
      highlights: ["East Falls Church", "Seven Corners", "Skyline", "West Falls Church"],
      icon: "🌲"
    },
    {
      city: "McLean, VA",
      distance: "10 miles",
      highlights: ["Tysons Corner", "Chain Bridge", "McLean Center", "Great Falls"],
      icon: "💼"
    }
  ];

  const transportOptions = [
    {
      method: "Metro Rail",
      details: "Orange/Silver Line to East Falls Church + 10 min drive",
      icon: "🚇"
    },
    {
      method: "Driving",
      details: "Free parking available on-site",
      icon: "🚗"
    },
    {
      method: "Ride Share",
      details: "Uber/Lyft drop-off at front entrance",
      icon: "📱"
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Conveniently Located in 
            <span className="text-primary-600"> Annandale, VA</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Centrally positioned to serve the entire DMV area with easy access from 
            Washington DC, Northern Virginia, and Maryland.
          </p>
        </div>

        {/* Main Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map/Address Section */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              Studio Location
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-neutral-900">Annandale Professional Beauty Center</div>
                  <div className="text-neutral-600">Annandale, VA 22003</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="font-semibold text-neutral-900">Phone</div>
                  <div className="text-neutral-600">(703) 555-0123</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-neutral-900">Hours</div>
                  <div className="text-neutral-600">
                    <div>Mon-Fri: 9:00 AM - 5:00 PM</div>
                    <div>Saturday: 9:00 AM - 3:00 PM</div>
                    <div>Sunday: By Appointment</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Annandale+VA+22003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Get Directions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Transportation Options */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              Easy Transportation
            </h3>
            
            <div className="space-y-4 mb-8">
              {transportOptions.map((option, index) => (
                <div key={index} className="flex items-start p-4 bg-neutral-50 rounded-lg">
                  <span className="text-2xl mr-4">{option.icon}</span>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">{option.method}</div>
                    <div className="text-neutral-600">{option.details}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-green-800">Free parking available for all clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-neutral-900 text-center mb-12">
            Areas We Proudly Serve
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-2">{area.city}</h4>
                <p className="text-primary-600 font-medium mb-3">{area.distance} from studio</p>
                <div className="space-y-1">
                  {area.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="text-sm text-neutral-600">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Our Location Matters */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Why Our Location Makes a Difference
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Strategically located in the heart of the DMV area, our Annandale studio offers 
              convenience, accessibility, and a professional environment for all clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">Time Efficient</h4>
              <p className="text-neutral-600">Central location minimizes travel time from anywhere in the DMV</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">Safe & Secure</h4>
              <p className="text-neutral-600">Professional building with security and safe parking environment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">Professional Setting</h4>
              <p className="text-neutral-600">Modern beauty center with all amenities for your comfort</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.vagaro.com/bortemicroblading/book-now"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule Your Visit
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

export default LocationInfo;
