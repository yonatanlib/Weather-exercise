const axios = require('axios');

const cities = [
  {
    name: "אילת",
    lat: '29.5569348',
    lon: '34.9497949',
  },
  {
    name: "לונדון",
    lat: '51.5073219',
    lon: '-0.1276474',
  },
  {
    name: "אלסקה",
    lat: '39.4703246',
    lon: '-86.6413912',
  },
  {
    name: "ניו יורק",
    lat: '40.7127281',
    lon: '-74.0060152',
  },
];

function makeRequest(city) {
  return new Promise((resolve, reject) => {
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: city.lat,
        lon: city.lon,
        units: 'metric',
        lang: 'he',
        appid: '068eea8b3fe329e7f574a6b38451a4e4',
      },
    }).then((response) => resolve(response)).catch((error) => reject(error));
  });
}

export default async function getWeatherData() {
  const citiesData = [];
  for (let i = 0; i < cities.length; i += 1) {
    citiesData.push(makeRequest(cities[i]));
  }

  const data = await Promise.all(citiesData);

  return (data.map((request) => ({
    cityName: cities[data.indexOf(request)].name,
    description: request.data.weather[0].description,
    temp: request.data.main.temp,
    feelsLike: request.data.main.feels_like,
    humidity: request.data.main.humidity,
    icon: request.data.weather[0].icon,
  })));
}
