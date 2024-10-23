// ux.js

document.addEventListener('DOMContentLoaded', function() {
    // Testimonials Rotator Logic
    let testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    const totalTestimonials = testimonials.length;

    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalTestimonials;
        testimonials[currentIndex].classList.add('active');
    }

    // Make the first testimonial visible initially
    testimonials[currentIndex].classList.add('active');

    // Set the interval for changing testimonials every 8 seconds
    setInterval(showNextTestimonial, 8000);

    // Sticky Navbar Logic
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerBottom) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
});
