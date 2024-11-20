const fetch = require('node-fetch');

async function obtenerClima(lat, lon, apiKey) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Error al obtener los datos del clima:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return null;
    }
}

function mostrarClima(clima) {
    if (clima) {
        const tempActual = clima.current.temp;
        const descripcion = clima.current.weather[0].description;
        console.log(`La temperatura actual es ${tempActual}°C con ${descripcion}.`);
    } else {
        console.log('No se pudo obtener el clima.');
    }
}

async function recuperarDatosClima() {
    const lat = parseFloat(prompt('Introduce la latitud: '));
    const lon = parseFloat(prompt('Introduce la longitud: '));
    const apiKey = prompt('Introduce tu API key de OpenWeatherMap: ');

    const clima = await obtenerClima(lat, lon, apiKey);
    mostrarClima(clima);
}

recuperarDatosClima();