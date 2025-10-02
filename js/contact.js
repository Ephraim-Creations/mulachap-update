// Contact Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            // Reset error states
            document.querySelectorAll('.error').forEach(el => el.remove());
            document.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));
            
            // Validate name
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate phone
            if (!phoneInput.value.trim()) {
                showError(phoneInput, 'Please enter your phone number');
                isValid = false;
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Please enter your message');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid, you would typically send data to server here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    // Helper function to show error messages
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.9rem';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        
        formGroup.appendChild(errorElement);
    }
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}   );