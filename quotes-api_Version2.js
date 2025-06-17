async function fetchDailyQuote() {
  const quoteDiv = document.getElementById("daily-quote");
  quoteDiv.innerText = "Cargando frase diaria...";

  // Creamos un 'seed' basado en la fecha (YYYY-MM-DD)
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateSeed = `${year}-${month}-${day}`;

  // Usamos el seed en la API de Quotable
  const apiUrl = `https://api.quotable.io/random?tags=motivational|inspirational&seed=${dateSeed}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("No se pudo obtener la frase");
    const data = await response.json();
    quoteDiv.innerHTML = `<strong>${data.content}</strong><br><em>— ${data.author}</em>`;
  } catch (err) {
    quoteDiv.innerText = "No se pudo cargar la frase diaria. Intenta de nuevo más tarde.";
  }
}

fetchDailyQuote();