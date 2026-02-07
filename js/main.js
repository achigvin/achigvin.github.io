/**
 * Main.js – Navigation scroll spy, interactivity, and utilities
 */

// ========================================
// Scroll Spy – Highlight active nav link
// ========================================

function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active'));

                    // Add active class to matching link
                    const activeLink = document.querySelector(
                        `.nav-link[href="#${entry.target.id}"]`
                    );
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        },
        {
            threshold: 0.3,
            rootMargin: '-50% 0px -50% 0px'
        }
    );

    sections.forEach(section => observer.observe(section));
}

// ========================================
// Smooth Scroll Behavior
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip skip-link and already smooth-scrolling
        if (href === '#main') {
            return; // Let browser handle it naturally
        }
        // Otherwise, native smooth scrolling via CSS handles it
    });
});

// ========================================
// Keyboard Accessibility – Details elements
// ========================================

document.querySelectorAll('details').forEach(details => {
    const summary = details.querySelector('summary');
    if (summary) {
        summary.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                details.open = !details.open;
            }
        });
    }
});

// ========================================
// Lazy Loading for Images (if applicable)
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Tab Focus Visible Enhancement
// ========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('tab-focus');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('tab-focus');
});

// ========================================
// Initialize all modules on DOM ready
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    setupScrollSpy();
    
    // Log initialization (for debugging)
    console.log('Portfolio initialized – Scroll spy and keyboard handlers active');
});

// ========================================
// Utility: Prefetch external links
// ========================================

function prefetchLinks() {
    if (document.head) {
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = link.href;
            document.head.appendChild(prefetchLink);
        });
    }
}

// Run prefetch after interactive
if ('requestIdleCallback' in window) {
    requestIdleCallback(prefetchLinks);
} else {
    setTimeout(prefetchLinks, 2000);
}
