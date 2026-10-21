(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mantiene solo una pregunta frecuente abierta a la vez para facilitar la lectura.
  const questions = document.querySelectorAll(".accordion details");
  questions.forEach((question) => {
    question.addEventListener("toggle", () => {
      if (question.open) {
        questions.forEach((other) => {
          if (other !== question) other.open = false;
        });
      }
    });
  });
})();
