/**
 * MealMuse Landing Page — Main JavaScript
 * Handles: scroll reveal, mobile nav, screenshot tabs
 */

(function() {
    'use strict';

    // ============================================
    // Scroll Reveal Animation
    // ============================================
    const initScrollReveal = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Unobserve after reveal to prevent re-animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add reveal class to sections and observe
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });
    };

    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    const initMobileNav = () => {
        const toggle = document.getElementById('navToggle');
        const links = document.querySelector('.nav__links');

        if (!toggle || !links) return;

        toggle.addEventListener('click', () => {
            links.classList.toggle('nav__links--open');

            // Animate hamburger to X
            const spans = toggle.querySelectorAll('span');
            const isOpen = links.classList.contains('nav__links--open');

            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });

        // Close nav on link click
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('nav__links--open');
                const spans = toggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            });
        });
    };

    // ============================================
// Screenshot Tabs
// ============================================
const initScreenshotTabs = () => {
    const tabs = document.querySelectorAll('.tab');
    const screen = document.getElementById('screenshotScreen');
    const label = document.getElementById('screenshotLabel');
    const img = document.getElementById('screenshotImage');
    
    if (!tabs.length || !screen) return;
    
    const screenshotImages = [
        'assets/images/dashboard.png',
        'assets/images/meals.png',
        'assets/images/workout.png',
        'assets/images/ai.png',
    'assets/images/recipebook.png'
    ];
    
    const labels = ['Dashboard', 'Meal Logging', 'Workout Tracking', 'AI Recommendations','Recipe Book'];
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const index = parseInt(tab.dataset.index);
            
            // Update active state
            tabs.forEach(t => t.classList.remove('tab--active'));
            tab.classList.add('tab--active');
            
            // Update content
            if (img) {
                img.src = screenshotImages[index];
                img.alt = labels[index];
            }
            if (label) {
                label.textContent = labels[index];
            }
        });
    });
};

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // ============================================
    // Initialize Everything
    // ============================================
    const init = () => {
        initScrollReveal();
        initMobileNav();
        initScreenshotTabs();
        initSmoothScroll();
    };

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();