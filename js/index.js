// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Background image slider
    const bgSlides = document.querySelectorAll('.bg-slide');
    let currentSlide = 0;
    
    function changeBackground() {
        bgSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % bgSlides.length;
        bgSlides[currentSlide].classList.add('active');
    }
    
    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

//FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
});

// Create money bills background
function createMoneyBills() {
    const moneyBillsBg = document.querySelector('.money-bills-bg');
    if (!moneyBillsBg) return;
    
    const moneySymbols = ['💵', '🪙'/*, '💵', '🪙', '💵', '🪙'*/];
    
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
//header scroll effect
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down → hide header
    header.classList.add("hide");
  } else {
    // Scrolling up → show header
    header.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});