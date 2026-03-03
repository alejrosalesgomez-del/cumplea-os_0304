function abrirCarta() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("carta").classList.remove("oculto");
}

// animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.3
});

// observar textos
document.querySelectorAll(".texto-scroll").forEach(el => {
  observer.observe(el);
});

// detectar final de página
window.addEventListener("scroll", () => {
  const final = document.getElementById("final-amor");
  const rect = final.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    document.body.classList.add("oscuro");
    final.classList.add("visible");
  }
});