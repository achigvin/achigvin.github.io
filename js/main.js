/* ===================================================
   PREMIUM PORTFOLIO JAVASCRIPT
   Mobile Navigation | Active Section Highlight
   Smooth Interactions | Accessibility
   ================================================== */

// === MOBILE MENU HANDLER ===
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMobile = document.getElementById('nav-mobile');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMobile.classList.toggle('open');
    });
    
    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only close if it's a mobile link
            if (link.parentElement.parentElement.id === 'nav-mobile') {
                menuToggle.setAttribute('aria-expanded', 'false');
                navMobile.classList.remove('open');
            }
        });
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMobile.classList.remove('open');
        }
    });
    
    // === ACTIVE SECTION HIGHLIGHT (IntersectionObserver) ===
    setupScrollSpy();
});

function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to matching link
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// === SMOOTH SCROLL ENHANCEMENT ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// === DETAILS/SUMMARY KEYBOARD SUPPORT ===
document.querySelectorAll('details summary').forEach(summary => {
    summary.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const details = summary.closest('details');
            details.open = !details.open;
        }
    });
});

// === LAZY LOADING FOR IMAGES ===
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// === FOCUS INDICATOR ===
const body = document.body;
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        body.classList.add('tab-focus');
    }
});

document.addEventListener('mousedown', () => {
    body.classList.remove('tab-focus');
});

// === PRELOAD LINKS (Performance) ===
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            const url = new URL(link.href);
            if (url.origin === window.location.origin) {
                const prefetch = document.createElement('link');
                prefetch.rel = 'prefetch';
                prefetch.href = link.href;
                document.head.appendChild(prefetch);
            }
        });
    });
} else {
    setTimeout(() => {
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            const url = new URL(link.href);
            if (url.origin === window.location.origin) {
                const prefetch = document.createElement('link');
                prefetch.rel = 'prefetch';
                prefetch.href = link.href;
                document.head.appendChild(prefetch);
            }
        });
    }, 2000);
}
