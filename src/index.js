import { getWeather } from './weather.js';
import { displayWeather, displayError, showLoading, hideLoading } from './ui.js';
import "./style.css"

const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const unitToggle = document.getElementById("unit-toggle");

let currentUnit = "C"; // Unità attiva
let currentWeather = null; // Ultimi dati ricevuti

form.addEventListener("submit", async(e) => {
    e.preventDefault(); // impedisce il ricaricamento della pagina

    const city = input.value.trim();
    if(!city) return;

    showLoading(); // Prima della chiamata API

    try {
        currentWeather = await getWeather(city);
        displayWeather(currentWeather, currentUnit);
    } catch (error) {
        displayError(error.message);
    } finally {
    hideLoading(); // Sempre, sia successo che errore
  }
});

unitToggle.addEventListener("click", () => {
    if (!currentWeather) return; // non fare nulla se non c'è il meteo

    currentUnit = currentUnit === "C" ? "F" : "C";
    unitToggle.textContent = currentUnit === 'C' ? 'Passa a °F' : 'Passa a °C';
    displayWeather(currentWeather, currentUnit);
})