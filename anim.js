// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No se que pasa, te veo", time: 22 },
  { text: "No se me pasa, Te deseo", time: 24 },
  { text: "Llevo tatuado tu aroma entero", time: 27 },
  { text: "Mientras caminas yo te espero", time: 29 },
  { text: "No No No", time: 30 },
  { text: "Lo creo", time: 31 },
  { text: "Que bien tu y yo nos vemos (Ana)", time: 32 },
  { text: "Tu y yo nos vemos", time: 33 },
  { text: "Te estoy esperando baby", time: 35 },
  { text: "Dime donde", time: 37 },
  { text: "No lo pidas llevo flores", time: 38 },
  { text: "MERECES FLORES", time: 39 },
  { text: "Te estoy esperando", time: 40 },
  { text: "Perfuma mi cuerpo", time: 42 },
  { text: "Y que luego te hable", time: 44 },
  { text: "De lo que yo no cuento", time: 48 },
  { text: "te estoy esperando", time: 59 },
  { text: "Perfuma mi cuerpo", time: 101 },
  { text: "Y que luego te hable", time: 103},
  { text: "De lo que yo no cuento", time: 105 },
  { text: "Te estoy esperando", time: 109 },
  { text: "Quiero verte hoy", time: 113 },
  { text: "Prestame tus besos", time: 115 },
  { text: "Los devuelvo luego", time: 118 },
  { text: "Sigo pensando que flores llevar", time: 120 },
  { text: "Dime donde las paso a dejar", time: 123 },
  { text: "Le llevo una flor a tu mamá", time: 124},
  { text: "Para agradecer que te vino a crear", time: 125 },
  { text: "Solo quiero complacerla", time: 129 },
  { text: "Que se sienta toda una reina", time: 130 },
  { text: "Que yo me muero si me besa", time: 133 },
  { text: "Le doy mi vida si usted me deja", time: 134 },
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
