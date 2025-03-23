document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
  
    toggleButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const faq = this.closest(".faq");
  
        faq.classList.toggle("active");
  
        if (faq.classList.contains("active")) {
          this.textContent = "−";
        } else {
          this.textContent = "+";
        }
      });
    });
  });