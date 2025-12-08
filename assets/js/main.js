// Atualiza ano automático no footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.innerHTML = navLinks.classList.contains("open")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Animação ao rolar (reveal)
const revealElements = document.querySelectorAll(".reveal");

const onScrollReveal = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(onScrollReveal, {
  threshold: 0.14,
});

revealElements.forEach((el) => revealObserver.observe(el));