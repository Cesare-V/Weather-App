const API_KEY = "MSXNM3ZCQQCT9LJ3JQB2LVVKQ";

async function getWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Città non trovata o errore di rete");
    }

    const data = await response.json();
    return processWeatherData(data);
}

function processWeatherData(data) {
    return {
        city: data.address,
        temp: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windSpeed,
        conditions: data.currentConditions.conditions,
        icon: data.currentConditions.icon,
        tempMax: data.days[0].tempmax,
        tempMin: data.days[0].tempmin,
    };
}

export {getWeather};