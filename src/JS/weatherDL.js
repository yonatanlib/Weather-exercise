const https = require('https');
const axios = require('axios');
const { resolve } = require('path');

const apiKey = '7ae8ccfbb3c794652c1916af0004862d';
function makeRequest(city) {
  // https.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&lang=he&appid=${apiKey}`, (res) => {
  //   res.on('data', (data) => {
  //     const weatherData = process.stdout.write(data);
  //     return {
  //       description: weatherData.weather[0].description,
  //       temp: weatherData.main.temp,
  //       feelsLike: weatherData.main.feels_like,
  //     }
  //   });
  // });
  return new Promise((resolve, reject) => {
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: city.lat,
        lon: city.lon,
        units: 'metric',
        lang: 'he',
        appid: apiKey,
      },
    }).then((response) => resolve(response)).catch((error) => reject(error));
  });
}

const cities = {
  eilat: {
    lat: '29.5569348',
    lon: '34.9497949',
  },
  london: {
    lat: '51.5156177',
    lon: '-0.0919983',
  },
  alaska: {
    lat: '46.6174128',
    lon: '-64.1090125',
  },
  newYork: {
    lat: '40.7127281',
    lon: '-74.0060152',
  },
};

makeRequest(cities.london).then((data) => {
  console.log(data);
}).catch((error) => { console.log(error); });
