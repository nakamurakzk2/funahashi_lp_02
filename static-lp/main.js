/**
 * Static LP - Main JavaScript
 * Handles animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initOpeningAnimation();
    initScrollReveal();
    initParallax();
});

/**
 * Opening Animation
 * Fades out the hero opening overlay after 3.5 seconds
 */
function initOpeningAnimation() {
    const overlay = document.getElementById('openingOverlay');
    if (!overlay) return;

    setTimeout(() => {
        overlay.classList.add('fade-out');
        // Remove from DOM after animation completes
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 800);
    }, 3500);
}

/**
 * Scroll Reveal
 * Uses Intersection Observer to trigger animations when elements enter viewport
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');

    if (!revealElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-100px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animation
                entry.target.classList.add('visible');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Parallax Effect
 * Moves the hero background image based on scroll position
 */
function initParallax() {
    const parallaxElement = document.getElementById('heroParallax');
    if (!parallaxElement) return;

    // Only apply on desktop
    if (window.innerWidth < 768) return;

    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        // Only apply parallax while in hero section
        if (scrollY < heroHeight) {
            const translateY = scrollY * 0.5;
            parallaxElement.style.transform = `translateY(${translateY}px)`;
        }
    }, { passive: true });
}

/**
 * Smooth Scroll
 * Scrolls to an element by ID with smooth behavior
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
