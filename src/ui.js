function celsiusToFahrenheit(c) {
    return Math.round((c * 9/5) + 32);
}

function displayWeather(weather, unit = "C") {
    const container = document.getElementById("weather-display");

    const temp = unit === 'C' ? weather.temp : celsiusToFahrenheit(weather.temp);
    const feelsLike = unit === 'C' ? weather.feelsLike : celsiusToFahrenheit(weather.feelsLike);
    const tempMax = unit === 'C' ? weather.tempMax : celsiusToFahrenheit(weather.tempMax);
    const tempMin = unit === 'C' ? weather.tempMin : celsiusToFahrenheit(weather.tempMin);
    const unitSymbol = unit === 'C' ? '°C' : '°F';

    container.innerHTML = `
    <h2>${weather.city}</h2>
    <p class="temp">${temp}${unitSymbol}</p>
    <p class="conditions">${weather.conditions}</p>
    <p>Percepita: ${feelsLike}${unitSymbol}</p>
    <p>Max: ${tempMax}${unitSymbol} — Min: ${tempMin}${unitSymbol}</p>
    <p>Umidità: ${weather.humidity}%</p>
    <p>Vento: ${weather.windSpeed} km/h</p>
  `;
}

function displayError(message) {
    const container = document.getElementById("weather-display");
    container.innerHTML = `<p class="error">${message}</p>`;
}

function showLoading() {
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('weather-display').innerHTML = '';
}

function hideLoading() {
  document.getElementById('loading').classList.add('hidden');
}

export { displayWeather, displayError, showLoading, hideLoading };