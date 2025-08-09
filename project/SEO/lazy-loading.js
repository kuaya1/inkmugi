// Lazy Loading Implementation for Images
document.addEventListener('DOMContentLoaded', function() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('.lazy-load');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Replace src with data-src
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    // Replace srcset with data-srcset if it exists
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    
                    // Remove lazy-load class and add loaded class
                    img.classList.remove('lazy-load');
                    img.classList.add('lazy-loaded');
                    
                    // Stop observing this image
                    imageObserver.unobserve(img);
                }
            });
        }, {
            // Load images 50px before they come into view
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        // Start observing all lazy images
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        const lazyImages = document.querySelectorAll('.lazy-load');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
            }
            img.classList.remove('lazy-load');
            img.classList.add('lazy-loaded');
        });
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without triggering page jump
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
});

// Form submission enhancement for booking forms
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form[data-netlify]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('button[type="submit"]');
            
            if (submitButton) {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
            }
        });
    });
});

// Google Analytics Enhanced eCommerce for consultation bookings
function trackConsultationStart(service) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
            'currency': 'USD',
            'value': 0,
            'items': [{
                'item_id': `consultation_${service}`,
                'item_name': `${service} Consultation`,
                'category': 'Consultation',
                'quantity': 1,
                'price': 0
            }]
        });
    }
}

// Service page interaction tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.cta-button, .book-now, .contact-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service') || 'unknown';
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': service,
                    'value': 1
                });
            }
            
            // Track consultation start if it's a booking button
            if (this.classList.contains('book-now')) {
                trackConsultationStart(service);
            }
        });
    });
    
    // Track gallery image views
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    if (galleryImages.length > 0 && 'IntersectionObserver' in window) {
        const galleryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const service = img.getAttribute('data-service') || 'unknown';
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'view_item', {
                            'event_category': 'Gallery',
                            'event_label': service,
                            'value': 1
                        });
                    }
                    
                    // Only track once per session
                    galleryObserver.unobserve(img);
                }
            });
        }, {
            threshold: 0.5
        });
        
        galleryImages.forEach(img => {
            galleryObserver.observe(img);
        });
    }
});
