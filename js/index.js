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