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
  
  document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("skillsCanvas");
    if (!canvas) return;
  
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  
    const dots = [];
  
    for (let i = 0; i < 40; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 3 + Math.random() * 3,
        dx: -1 + Math.random() * 2,
        dy: -1 + Math.random() * 2,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      });
    }
  
    function drawDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
  
        dot.x += dot.dx;
        dot.y += dot.dy;
  
        // bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.dx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.dy *= -1;
      }
      requestAnimationFrame(drawDots);
    }
  
    drawDots();
  });
  