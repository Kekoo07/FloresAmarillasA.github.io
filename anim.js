// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No se que pasa, te veo", time: 23 },
  { text: "No se me pasa, Te deseo", time: 25 },
  { text: "Llevo tatuado tu aroma entero", time: 28 },
  { text: "Mientras caminas yo te espero", time: 30 },
  { text: "No No No", time: 32 },
  { text: "Lo creo", time: 34 },
  { text: "Que bien tu y yo nos vemos (Ana)", time: 35 },
  { text: "Tu y yo nos vemos", time: 38 },
  { text: "Te estoy esperando baby", time: 42 },
  { text: "Dime donde", time: 44 },
  { text: "No lo pidas llevo flores", time: 46 },
  { text: "MERECES FLORES", time: 49 },
  { text: "Te estoy esperando", time: 51 },
  { text: "Perfuma mi cuerpo", time: 53 },
  { text: "Y que luego te hable", time: 56 },
  { text: "De lo que yo no cuento", time: 59 },
  { text: "te estoy esperando", time: 101 },
  { text: "Perfuma mi cuerpo", time: 103 },
  { text: "Y que luego te hable", time: 106},
  { text: "De lo que yo no cuento", time: 108 },
  { text: "Te estoy esperando", time: 111 },
  { text: "Quiero verte hoy", time: 115 },
  { text: "Prestame tus besos", time: 117 },
  { text: "Los devuelvo luego", time: 120 },
  { text: "Sigo pensando que flores llevar", time: 122 },
  { text: "Dime donde las paso a dejar", time: 125 },
  { text: "Le llevo una flor a tu mamá", time: 126},
  { text: "Para agradecer que te vino a crear", time: 129 },
  { text: "Solo quiero complacerla", time: 132 },
  { text: "Que se sienta toda una reina", time: 132 },
  { text: "Que yo me muero si me besa", time: 136 },
  { text: "Le doy mi vida si usted me deja", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);