const quotes = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No cuentes los días, haz que los días cuenten.",
  "Cree en ti y todo será posible.",
  "La vida es 10% lo que nos sucede y 90% cómo reaccionamos.",
  "La motivación nos impulsa a comenzar y el hábito nos permite continuar."
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