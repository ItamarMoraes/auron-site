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

/* =========================================
   Inicialização do Particles.js no Hero
========================================= */

// Verifica se o elemento existe na página antes de rodar
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Quantidade de partículas (reduza se ficar lento no celular)
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#D4AF37", // Cor dos pontos (branco)
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5, // Transparência dos pontos
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3, // Tamanho base dos pontos
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        // Usando a sua cor de destaque (ciano) para as linhas
        color: "#FFD700", 
        opacity: 0.3, // Linhas mais sutis
        width: 1,
      },
      move: {
        enable: true,
        speed: 2, // Velocidade de movimento (menor = mais lento e elegante)
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab", // As linhas se conectam ao mouse quando passa por cima
        },
        onclick: {
          enable: true,
          mode: "push", // Cria mais partículas ao clicar
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.6,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
}
