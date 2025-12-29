/**
 * LUX MARKETS - Main JavaScript
 * Version: 2.0
 * Enhanced functionality for luxury market experience
 */

(function() {
    'use strict';

    // ===================================
    // DOM Elements
    // ===================================
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const announcementBar = document.querySelector('.announcement-bar');

    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    function initMobileNav() {
        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            document.body.classList.toggle('nav-open');

            // Toggle aria-expanded
            const isExpanded = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            });
        });

        // Handle escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });
    }

    // ===================================
    // Header Scroll Effect
    // ===================================
    function initHeaderScroll() {
        if (!header) return;

        let lastScroll = 0;
        const scrollThreshold = announcementBar ? announcementBar.offsetHeight : 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 10) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }

            // Hide/show header on scroll (optional - for better UX on long pages)
            if (currentScroll > 300) {
                if (currentScroll > lastScroll) {
                    header.classList.add('header--hidden');
                } else {
                    header.classList.remove('header--hidden');
                }
            } else {
                header.classList.remove('header--hidden');
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ===================================
    // Process Tabs (How It Works Section)
    // ===================================
    function initProcessTabs() {
        const tabs = document.querySelectorAll('.process-tab');
        const contents = document.querySelectorAll('.process-content');

        if (!tabs.length || !contents.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetId = this.getAttribute('data-tab');

                // Update tabs
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Update content
                contents.forEach(content => {
                    if (content.getAttribute('data-content') === targetId) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    }

    // ===================================
    // Exit Intent Modal
    // ===================================
    function initExitIntent() {
        const modal = document.getElementById('exitModal');
        if (!modal) return;

        let hasShown = sessionStorage.getItem('exitModalShown');

        const showModal = () => {
            if (!hasShown) {
                modal.classList.add('active');
                sessionStorage.setItem('exitModalShown', 'true');
                hasShown = true;
            }
        };

        // Trigger on mouse leave (desktop)
        document.addEventListener('mouseout', function(e) {
            if (e.clientY < 10 && e.relatedTarget === null) {
                showModal();
            }
        });

        // Close modal handlers
        const closeBtn = modal.querySelector('.modal__close');
        const overlay = modal.querySelector('.modal__overlay');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        if (overlay) {
            overlay.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        // Close on escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }

    // ===================================
    // Form Handling
    // ===================================
    function initForms() {
        const forms = document.querySelectorAll('form');

        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                // Show loading state
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';

                // Collect form data
                const formData = new FormData(this);
                const data = Object.fromEntries(formData.entries());

                // Validate email if present
                if (data.email && !isValidEmail(data.email)) {
                    showNotification('Please enter a valid email address.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    return;
                }

                // Simulate API call (replace with actual endpoint)
                setTimeout(() => {
                    console.log('Form submitted:', data);

                    // Show success
                    showNotification('Thank you! Your message has been sent.', 'success');

                    // Reset form
                    this.reset();

                    // Restore button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 1000);
            });
        });
    }

    // ===================================
    // Notification System
    // ===================================
    function showNotification(message, type = 'success') {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification__close">&times;</button>
        `;

        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('active'), 10);

        // Close handlers
        notification.querySelector('.notification__close').addEventListener('click', () => {
            notification.classList.remove('active');
            setTimeout(() => notification.remove(), 300);
        });

        // Auto close
        setTimeout(() => {
            notification.classList.remove('active');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // ===================================
    // Email Validation Helper
    // ===================================
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');

                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    const headerHeight = header ? header.offsetHeight : 0;
                    const announcementHeight = announcementBar ? announcementBar.offsetHeight : 0;
                    const offset = headerHeight + announcementHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===================================
    // Intersection Observer for Animations
    // ===================================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.problem-card, .testimonial-card, .result-card, .result-highlight, ' +
            '.service-card, .benefit-item, .timeline-item, .cta-card, .faq-item, ' +
            '.pricing-card, .resource-card, .platform-feature, .gallery-item'
        );

        if (!animatedElements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation delay
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
            el.classList.add('animate-ready');
            observer.observe(el);
        });
    }

    // ===================================
    // Counter Animation
    // ===================================
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat__number, .result-card__metric, .result-highlight__metric');

        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        counters.forEach(counter => observer.observe(counter));
    }

    function animateCounter(element) {
        const text = element.textContent;
        const match = text.match(/(\d+)/);

        if (!match) return;

        const target = parseInt(match[0]);
        const suffix = text.replace(/[\d,]/g, '');
        const duration = 2000;
        const increment = target / (duration / 16);

        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString() + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString() + suffix;
            }
        }, 16);
    }

    // ===================================
    // Dropdown Navigation Enhancement
    // ===================================
    function initDropdowns() {
        const dropdownItems = document.querySelectorAll('.nav__item--dropdown');

        dropdownItems.forEach(item => {
            const link = item.querySelector('.nav__link');
            const dropdown = item.querySelector('.dropdown');

            if (!link || !dropdown) return;

            // Handle keyboard navigation
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    dropdown.classList.toggle('show');
                }
            });

            // Handle focus for accessibility
            const dropdownLinks = dropdown.querySelectorAll('a');
            const lastLink = dropdownLinks[dropdownLinks.length - 1];

            if (lastLink) {
                lastLink.addEventListener('blur', function() {
                    dropdown.classList.remove('show');
                });
            }
        });
    }

    // ===================================
    // Add Dynamic Styles
    // ===================================
    function addDynamicStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Animation styles */
            .animate-ready {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }

            .animate-in {
                opacity: 1;
                transform: translateY(0);
            }

            /* Header states */
            .header--scrolled {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }

            .header--hidden {
                transform: translateY(-100%);
            }

            .header {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            /* Body lock when nav open */
            body.nav-open {
                overflow: hidden;
            }

            /* Notification styles */
            .notification {
                position: fixed;
                bottom: 24px;
                right: 24px;
                padding: 16px 24px;
                background: #0D1B2A;
                color: white;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 16px;
                z-index: 9999;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s ease, transform 0.3s ease;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            }

            .notification.active {
                opacity: 1;
                transform: translateY(0);
            }

            .notification--success {
                background: #2D6A4F;
            }

            .notification--error {
                background: #DC2626;
            }

            .notification__close {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                opacity: 0.7;
                line-height: 1;
            }

            .notification__close:hover {
                opacity: 1;
            }

            /* Dropdown keyboard support */
            .dropdown.show {
                opacity: 1 !important;
                visibility: visible !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // ===================================
    // All Pages Dropdown Toggle
    // ===================================
    function initAllPagesDropdown() {
        const allPagesItem = document.querySelector('.nav__item--allpages');
        const allPagesLink = document.querySelector('.nav__link--allpages');

        if (!allPagesItem || !allPagesLink) return;

        allPagesLink.addEventListener('click', function(e) {
            e.preventDefault();
            allPagesItem.classList.toggle('expanded');
        });

        // Close when clicking outside (but not when clicking inside the dropdown)
        document.addEventListener('click', function(e) {
            if (!allPagesItem.contains(e.target)) {
                allPagesItem.classList.remove('expanded');
            }
        });

        // Close when pressing Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                allPagesItem.classList.remove('expanded');
            }
        });
    }

    // ===================================
    // Initialize All Functions
    // ===================================
    function init() {
        addDynamicStyles();
        initMobileNav();
        initHeaderScroll();
        initProcessTabs();
        initExitIntent();
        initForms();
        initSmoothScroll();
        initScrollAnimations();
        initCounterAnimation();
        initDropdowns();
        initAllPagesDropdown();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
