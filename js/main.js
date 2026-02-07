/* === SCROLL SPY === */
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => observer.observe(section));
}

/* === KEYBOARD ACCESSIBILITY === */
function setupKeyboardNav() {
    document.querySelectorAll('details > summary').forEach(summary => {
        summary.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                summary.closest('details').open = !summary.closest('details').open;
            }
        });
    });
}

/* === LAZY LOADING === */
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                entry.target.removeAttribute('data-src');
                imgObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '50px' });
    
    images.forEach(img => imgObserver.observe(img));
}

/* === TAB FOCUS INDICATOR === */
function setupTabFocus() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('tab-focus');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('tab-focus');
    });
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
    setupScrollSpy();
    setupKeyboardNav();
    setupLazyLoading();
    setupTabFocus();
});
