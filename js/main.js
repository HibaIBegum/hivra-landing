/**
 * HivRa Landing Page
 * Handles scroll reveal, mobile navigation, and screenshot tabs.
 */

(function() {
    'use strict';

    const initScrollReveal = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });
    };

    const initMobileNav = () => {
        const toggle = document.getElementById('navToggle');
        const links = document.querySelector('.nav__links');

        if (!toggle || !links) return;

        const resetToggle = () => {
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        };

        toggle.addEventListener('click', () => {
            links.classList.toggle('nav__links--open');
            const spans = toggle.querySelectorAll('span');
            const isOpen = links.classList.contains('nav__links--open');

            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                resetToggle();
            }
        });

        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('nav__links--open');
                resetToggle();
            });
        });
    };

    const initScreenshotTabs = () => {
        const tabs = document.querySelectorAll('.tab');
        const img = document.getElementById('screenshotImage');

        if (!tabs.length || !img) return;

        const screenshots = [
            { src: 'assets/images/dashboard.png', alt: 'HivRa dashboard screen' },
            { src: 'assets/images/workout.png', alt: 'HivRa workout tracking screen' },
            { src: 'assets/images/streak.png', alt: 'HivRa streak maintenance screen' },
            { src: 'assets/images/meals.png', alt: 'HivRa meals screen' },
            { src: 'assets/images/recipebook.png', alt: 'HivRa recipe book screen' },
            { src: 'assets/images/ai.png', alt: 'HivRa AI recommendations screen' },
            { src: 'assets/images/grocery.png', alt: 'HivRa grocery list screen' }
        ];

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const index = Number(tab.dataset.index);
                const next = screenshots[index];

                if (!next) return;

                tabs.forEach(item => item.classList.remove('tab--active'));
                tab.classList.add('tab--active');
                img.src = next.src;
                img.alt = next.alt;
            });
        });
    };

    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));

                if (!target) return;

                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    };

    const init = () => {
        initScrollReveal();
        initMobileNav();
        initScreenshotTabs();
        initSmoothScroll();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
