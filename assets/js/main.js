// Preloader / animação ao carregar
window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader");

  // Espera um pouco para a animação da logo e do texto acontecerem
  setTimeout(() => {
    document.body.classList.remove("loading");
    document.body.classList.add("ready");

    if (loader) {
      loader.classList.add("hidden");
    }
  }, 2800); // 2,8 segundos - ajuste se quiser mais/menos tempo
});

// Atualiza ano automático no footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.innerHTML = navLinks.classList.contains("open")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}

// Animação ao rolar (reveal)
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
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
}
