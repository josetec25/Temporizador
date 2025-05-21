let tiempo = 10;
let intervalo;

function iniciarTemporizador() {
  tiempo = 10;
  document.getElementById("timer").textContent = "00:10";
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    tiempo--;
    document.getElementById("timer").textContent = `00:${tiempo < 10 ? '0' + tiempo : tiempo}`;
    if (tiempo <= 0) {
      clearInterval(intervalo);
      document.getElementById("sonido-corneta").play();
    }
  }, 1000);
}
