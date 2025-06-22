const quotes = [
  "No podemos resolver nuestros problemas con el mismo razonamiento que usamos cuando los creamos. — Albert Einstein",
  "Vive como si fueras a morir mañana; aprende como si fueras a vivir siempre. — Mahatma Gandhi",
  "Cambia tus pensamientos y cambiarás tu mundo. — Norman Vincent Peale",
  "Es mejor fallar en la originalidad que triunfar en la imitación. — Herman Melville",
  "Desarrolla el éxito a partir de los fracasos. El desaliento y el fracaso son los peldaños hacia el éxito. — Dale Carnegie"
];

// Obtener el día del año como índice
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Seleccionar la frase del día
function showDailyQuote() {
  const index = getDayOfYear() % quotes.length;
  document.getElementById("daily-quote").innerText = quotes[index];
}

showDailyQuote();
