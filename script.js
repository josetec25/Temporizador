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
      document.getElementById("sonido-corneta").play();

      // Activar animación de sacudida
      timer.classList.add("animacion");

      // Quitar la clase después de la animación para poder reutilizarla
      setTimeout(() => {
        timer.classList.remove("animacion");
      }, 700);
    }
  }, 1000);
}
