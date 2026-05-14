/* ===================================================
   PREMIUM PORTFOLIO JAVASCRIPT
   Mobile Navigation | Active Section Highlight
   Smooth Interactions | Accessibility | Mouse Tracking
   ================================================== */

// === MOUSE CURSOR TRACKING GRADIENT (Desktop Only) ===
let mouseGradientEnabled = window.innerWidth > 768; // Only on desktop

document.addEventListener('mousemove', (e) => {
    // Skip on mobile for performance
    if (!mouseGradientEnabled) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    // Create an optimized gradient circle effect with better colors
    const gradient = `radial-gradient(circle 600px at ${x}px ${y}px, rgba(183, 28, 53, 0.06), transparent 80%)`;
    document.documentElement.style.background = gradient;
});

// Disable gradient on small screens
window.addEventListener('resize', () => {
    mouseGradientEnabled = window.innerWidth > 768;
});

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

// === EDUCATION TOGGLE TEXT CHANGE ===
const educationDetails = document.querySelector('.education-more');
if (educationDetails) {
    const educationToggle = educationDetails.querySelector('.education-toggle');
    const originalText = educationToggle.textContent.trim();
    
    educationDetails.addEventListener('toggle', () => {
        if (educationDetails.open) {
            educationToggle.textContent = originalText.replace('+', '-');
        } else {
            educationToggle.textContent = originalText;
        }
    });
}

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

// === PROJECT FILTERING FUNCTION ===
function setupProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('filter-btn-active'));
            button.classList.add('filter-btn-active');
            
            // Filter projects
            projectCards.forEach(card => {
                const cardFilters = card.getAttribute('data-filter')?.split(' ') || [];
                
                if (filterValue === 'all' || cardFilters.includes(filterValue)) {
                    card.style.display = '';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
    
    // Set "All" as default active
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) allButton.classList.add('filter-btn-active');
}

// === PROJECT MODAL SYSTEM ===
function setupProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extract project data from card
            const title = card.querySelector('.project-title')?.textContent || 'Project';
            const description = card.querySelector('.project-description')?.innerHTML || '';
            const badges = card.querySelector('.project-badges')?.innerHTML || '';
            const links = card.querySelector('.project-links')?.innerHTML || '';
            
            showProjectModal(title, description, badges, links);
        });
    });
}

// Show modal with project details
function showProjectModal(title, description, badges, links) {
    let modal = document.getElementById('project-modal');
    
    if (!modal) {
        // Create modal if it doesn't exist
        modal = document.createElement('div');
        modal.id = 'project-modal';
        modal.className = 'project-modal';
        document.body.appendChild(modal);
    }
    
    // Populate modal content
    const content = `
        <div class="project-modal-content" style="position: relative;">
            <button class="project-modal-close" onclick="document.getElementById('project-modal').classList.remove('active')">✕</button>
            <h2 style="margin-top: 0; color: var(--color-accent);">${title}</h2>
            <div class="project-badges" style="margin-bottom: var(--space-6);">
                ${badges}
            </div>
            <div style="line-height: 1.8; color: var(--color-text);">
                ${description}
            </div>
            ${links ? `<div class="project-links" style="margin-top: var(--space-6);">${links}</div>` : ''}
        </div>
    `;
    
    modal.innerHTML = content;
    modal.classList.add('active');
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}
