// About Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Animated counter for statistics
    const counterSection = document.querySelector('.stats-grid');
    const counters = document.querySelectorAll('.stat-number');
    let intervalId;

    function startCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // ~60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    if (counter.getAttribute('data-count') === '100') {
                        counter.textContent = Math.ceil(current);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    function loopCounters() {
        startCounters();
        // Restart every 5 seconds (2s animation + 3s pause)
        intervalId = setInterval(() => {
            counters.forEach(c => c.textContent = "0"); // reset
            startCounters();
        }, 5000);
    }

    // Start counting when the stats section is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !intervalId) {
                loopCounters();
            }
        });
    }, { threshold: 0.5 });

    if (counterSection) {
        observer.observe(counterSection);
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
