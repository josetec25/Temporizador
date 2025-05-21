let tiempo = 10;
let intervalo;

function iniciarTemporizador() {
  tiempo = 10;
  const timer = document.getElementById("timer");
  timer.textContent = "00:10";
  timer.classList.remove("animacion");
  clearInterval(intervalo);

  intervalo = setInterval(() => {
    tiempo--;
    timer.textContent = `00:${tiempo < 10 ? '0' + tiempo : tiempo}`;

    if (tiempo <= 0) {
      clearInterval(intervalo);
      document.getElementById("sonido-corneta").play().catch((error) => {
        console.log("No se pudo reproducir el audio:", error);
      });
      timer.classList.add("animacion");

      setTimeout(() => {
        timer.classList.remove("animacion");
      }, 700);

      // Lanzar confeti
      if (typeof confetti === "function") {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
        });
      }
    }
  }, 1000);
}
