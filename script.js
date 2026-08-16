// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Simple scroll animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach(section => {
  observer.observe(section);
});

// Current year in footer
const footerText = document.querySelector(".footer-content > p");

if (footerText) {
  footerText.innerHTML =
    `© ${new Date().getFullYear()} Velvet Hair. Сите права се задржани.`;
}
