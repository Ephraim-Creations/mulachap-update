document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const popup = document.getElementById('successPopup');
  const closePopup = document.getElementById('closePopup');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent default redirect

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          popup.style.display = "flex"; // show popup
          contactForm.reset(); // reset form fields
        } else {
          popup.style.display = "flex"; // still show popup on error
        }
      })
      .catch(() => {
        popup.style.display = "flex"; // show popup if network error
      });
    });
  }

  if (closePopup) {
    closePopup.addEventListener("click", function() {
      popup.style.display = "none"; // allow manual close
    });
  }
});
