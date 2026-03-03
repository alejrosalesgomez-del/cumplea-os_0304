function abrirCarta() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("carta").classList.remove("oculto");
}

// textos que aparecen al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll(".texto-scroll").forEach(el => {
  observer.observe(el);
});

// activar pantalla final
let finalMostrado = false;

window.addEventListener("scroll", () => {
  if (finalMostrado) return;

  const scrollBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

  if (scrollBottom) {
    finalMostrado = true;
    document.getElementById("final-amor").classList.add("visible");
  }
});
// pantalla traviesa al volver arriba
let traviesaMostrada = false;

window.addEventListener("scroll", () => {
  // detectar si volvió arriba después de ver el final
  const estaArriba = window.scrollY < 40;
  const finalVisible =
    document.getElementById("final-amor")?.classList.contains("visible");

  if (estaArriba && finalVisible && !traviesaMostrada) {
    traviesaMostrada = true;

    setTimeout(() => {
      document
        .getElementById("pantalla-traviesa")
        .classList.add("visible");
    }, 400);
  }
});

// esperar a que carguen las imágenes
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("oculto");
  }, 500); // pequeño delay romántico 😌
});