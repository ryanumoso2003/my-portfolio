// Project details
document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      const isVisible = details.style.display === "block";
  
      details.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "Show Details" : "Hide Details";
    });
  });

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorBox = document.getElementById("form-error");
  
    let errors = [];
  
    if (name === "") errors.push("Name is required.");
    if (!email.includes("@") || !email.includes(".")) errors.push("Enter a valid email.");
    if (message.length < 10) errors.push("Message must be at least 10 characters.");
  
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
    } else {
      errorBox.innerHTML = "";
      alert("Message sent successfully!");
      this.reset();
    }
  });
  
  // Typed.js animation
new Typed("#typed-text", {
    strings: ["Hi, I’m Ryan.", "Web Developer.", "Student.", "Problem Solver."],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  });
  
  // Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Geolocation API
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        document.getElementById("location-info").textContent =
          `Thanks for visiting from around Latitude ${latitude.toFixed(2)}, Longitude ${longitude.toFixed(2)} 🌎`;
      },
      (error) => {
        document.getElementById("location-info").textContent =
          "Location not available";
      }
    );
  } else {
    document.getElementById("location-info").textContent =
      "Geolocation not supported on your browser";
  }
  