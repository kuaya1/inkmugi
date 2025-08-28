import React from 'react';
import AnimatedSection from '../AnimatedSection';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Arlington, VA",
      service: "Microshading",
      rating: 5,
      text: "Absolutely the best PMU artist in the DMV area! My ombre brows look incredibly natural and have lasted perfectly for over a year. The consultation was thorough and professional.",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      verified: true
    },
    {
      name: "Jessica L.",
      location: "Alexandria, VA", 
      service: "Ombre Powder Brows",
      rating: 5,
      text: "I was nervous about permanent makeup, but INK MUGI made me feel completely comfortable. The results exceeded my expectations - I wake up with perfect brows every day!",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      verified: true
    },
    {
      name: "Maria R.",
      location: "Washington, DC",
      service: "Combo Brows",
      rating: 5,
      text: "After a bad experience elsewhere, INK MUGI corrected my brows beautifully. The attention to detail and artistry is unmatched. I finally have the brows I've always wanted!",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      verified: true
    },
    {
      name: "Lisa K.",
      location: "Fairfax, VA",
      service: "Microshading",
      rating: 5,
      text: "Professional, clean, and absolutely talented! The healing process was smooth and the final results are perfect. I've already recommended INK MUGI to three friends.",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      verified: true
    },
    {
      name: "Amanda T.",
      location: "McLean, VA",
      service: "Ombre Powder Brows",
      rating: 5,
      text: "The best investment I've made! My brows look flawless every morning. The technique is superior and the results speak for themselves. Worth every penny!",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      verified: true
    },
    {
      name: "Michelle C.",
      location: "Annandale, VA",
      service: "Touch-Up",
      rating: 5,
      text: "Two years later and my brows still look amazing! The touch-up service keeps them looking fresh. INK MUGI truly cares about long-term client satisfaction.",
      image: "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
      verified: true
    }
  ];

  const platforms = [
    {
      name: "Google Reviews",
      rating: "4.9",
      count: "67",
      logo: "🔍"
    },
    {
      name: "Yelp",
      rating: "4.8",
      count: "34",
      logo: "⭐"
    },
    {
      name: "Facebook",
      rating: "5.0",
      count: "26",
      logo: "📘"
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            What Our Clients Are 
            <span className="text-primary-600"> Saying</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Read what our satisfied clients across the DMV 
            area have to say about their INK MUGI experience.
          </p>
        </div>

        {/* Review Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-neutral-100">
              <div className="text-4xl mb-3">{platform.logo}</div>
              <h3 className="font-semibold text-neutral-900 mb-2">{platform.name}</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary-600 mr-2">{platform.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-neutral-600">{platform.count} reviews</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {testimonial.verified && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-neutral-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.location}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl font-bold text-primary-600 mr-4">4.9</div>
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-lg text-neutral-600">Based on 127+ reviews</div>
              </div>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Join Our Community of Satisfied Clients
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Over 500 successful transformations, 127+ verified reviews, and a 4.9-star average rating. 
              Experience the INK MUGI difference for yourself.
            </p>
            
            <a
              href="https://www.vagaro.com/bortemicroblading/book-now"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Transformation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Social Proof Footer */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 mb-4">Follow our transformations on social media</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/inkmugi" className="text-neutral-400 hover:text-primary-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.553 3.708 13.4 3.708 12.104s.49-2.449 1.297-3.324C5.933 7.851 7.086 7.361 8.383 7.361s2.449.49 3.324 1.297c.927.928 1.297 2.08 1.297 3.377s-.49 2.449-1.297 3.324c-.928.928-2.08 1.297-3.377 1.297zm7.83-2.08c0 .612-.245 1.175-.685 1.567-.44.393-1.003.637-1.615.637s-1.175-.245-1.567-.685c-.393-.44-.637-1.003-.637-1.615s.245-1.175.685-1.567c.44-.393 1.003-.637 1.615-.637s1.175.245 1.567.685c.393.44.637 1.003.637 1.615z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/inkmugi" className="text-neutral-400 hover:text-primary-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialSection;
