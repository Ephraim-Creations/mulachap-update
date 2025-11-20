document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const popup = document.getElementById("popupSuccess");
  const closePopup = document.getElementById("closePopup");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/mulachapventures@gmail.com", {
        method: "POST",
        body: formData
      });

      // Show popup
      popup.style.display = "flex";

      // Clear form
      form.reset();

    } catch (error) {
      alert("Error sending your message. Please try again.");
    }
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});