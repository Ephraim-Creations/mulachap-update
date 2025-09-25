  const floatBtn = document.getElementById("whatsapp-float");
  const widget = document.getElementById("whatsapp-widget");
  const closeBtn = document.getElementById("close-widget");
  const timeSpan = document.getElementById("live-time");

  // Toggle widget
  floatBtn.addEventListener("click", () => {
    widget.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    widget.style.display = "none";
  });

  // Live time (EAT)
  function updateTime() {
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Africa/Nairobi" };
    timeSpan.textContent = now.toLocaleTimeString("en-GB", options) + " EAT";
    document.querySelector(".message-time").textContent = now.toLocaleTimeString("en-GB", options);
  }
  setInterval(updateTime, 60000);
  updateTime();

//back to TOP
  const backToTopBtn = document.getElementById("backToTop");
  let hideTimer;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add("show");

      // Reset hide timer
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        backToTopBtn.classList.remove("show");
      }, 5000);
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  //Animations
    AOS.init({
    once: false,  // keep animating when scrolling
    mirror: true  // animate out as well
  });