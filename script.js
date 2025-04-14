// Project details
document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      const isVisible = details.style.display === "block";
  
      details.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "Show Details" : "Hide Details";
    });
  });
  