// Form handling and submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const successMessage = document.getElementById('successMessage');

    // Set minimum date for preferred date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('preferredDate').min = today;

    bookingForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }

        // Show loading state
        showLoading(true);

        try {
            // Get form data
            const formData = getFormData();
            
            // Simulate API call (replace with actual backend endpoint)
            await submitFormData(formData);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            bookingForm.reset();
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Sorry, there was an error submitting your form. Please try again.');
        } finally {
            showLoading(false);
        }
    });

    function validateForm() {
        const requiredFields = bookingForm.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                highlightError(field);
            } else {
                removeErrorHighlight(field);
            }
        });

        // Email validation
        const emailField = document.getElementById('email');
        if (emailField.value && !isValidEmail(emailField.value)) {
            isValid = false;
            highlightError(emailField);
            alert('Please enter a valid email address.');
        }

        return isValid;
    }

    function highlightError(field) {
        field.style.borderColor = '#e53e3e';
        field.style.backgroundColor = '#fed7d7';
    }

    function removeErrorHighlight(field) {
        field.style.borderColor = '#e2e8f0';
        field.style.backgroundColor = 'white';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showLoading(show) {
        if (show) {
            btnText.style.display = 'none';
            btnLoading.style.display = 'flex';
            submitBtn.disabled = true;
        } else {
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    }

    function getFormData() {
        return {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            amount: document.getElementById('amount').value,
            message: document.getElementById('message').value,
            preferredDate: document.getElementById('preferredDate').value,
            preferredTime: document.getElementById('preferredTime').value,
            consent: document.getElementById('consent').checked,
            submittedAt: new Date().toISOString()
        };
    }

    // Simulate form submission (replace with actual API call)
    function submitFormData(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate successful submission
                console.log('Form submitted:', formData);
                
                // In a real implementation, you would:
                // 1. Send data to your backend
                // 2. Send confirmation email to user
                // 3. Send notification email to admin
                
                // For now, we'll just log and resolve
                simulateEmailNotifications(formData);
                resolve(formData);
            }, 2000); // Simulate network delay
        });
    }

    function simulateEmailNotifications(formData) {
        // This would be replaced with actual email service integration
        console.log('Sending confirmation email to:', formData.email);
        console.log('Sending notification to admin about new booking');
        
        // Example of what you would send to your email service
        const userEmailData = {
            to: formData.email,
            subject: 'Loan Consultation Booking Confirmation',
            body: `Dear ${formData.fullName},\n\nThank you for booking a loan consultation for ${formData.service}. We will contact you within 24 hours to confirm your appointment.\n\nBest regards,\nYour Loan Consulting Team`
        };

        const adminEmailData = {
            to: 'admin@yourcompany.com', // Replace with actual admin email
            subject: 'New Loan Consultation Booking',
            body: `New booking received:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nAmount: ${formData.amount || 'Not specified'}\nPreferred Date: ${formData.preferredDate || 'Not specified'}\nMessage: ${formData.message || 'No additional message'}`
        };

        console.log('User email data:', userEmailData);
        console.log('Admin email data:', adminEmailData);
    }

    function showSuccessMessage() {
        bookingForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });
    }

    // Real-time validation
    const formInputs = bookingForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            removeErrorHighlight(this);
        });
        
        input.addEventListener('change', function() {
            removeErrorHighlight(this);
        });
    });
});

// Example backend integration (for when you implement the actual backend)
/*
// In your actual implementation, you would use something like:
async function submitFormData(formData) {
    const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

// For email integration, you could use services like:
// - EmailJS (free tier available)
// - SendGrid
// - AWS SES
// - Or your own SMTP server
*/