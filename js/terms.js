// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Auto-hide header on scroll
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide header
        header.classList.add('hide');
    } else {
        // Scrolling up - show header
        header.classList.remove('hide');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
}

function onScroll() {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll);

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Create money bills background
function createMoneyBills() {
    const moneyBillsBg = document.querySelector('.money-bills-bg');
    if (!moneyBillsBg) return;
    
    const moneySymbols = ['💵', '🪙', '💵', '🪙', '💵', '🪙'];
    
    for (let i = 0; i < 15; i++) {
        const moneyBill = document.createElement('div');
        moneyBill.className = 'money-bill';
        moneyBill.textContent = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];
        moneyBill.style.left = `${Math.random() * 100}%`;
        moneyBill.style.animationDelay = `${Math.random() * 20}s`;
        moneyBill.style.fontSize = `${Math.random() * 2 + 2}rem`;
        moneyBillsBg.appendChild(moneyBill);
    }
}

// Initialize money bills when page loads
document.addEventListener('DOMContentLoaded', createMoneyBills);

// Add shadow to header when scrolled
function updateHeaderShadow() {
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', updateHeaderShadow);