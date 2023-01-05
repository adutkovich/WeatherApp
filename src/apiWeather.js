const cityName = document.getElementById('cityName');
const showData = document.getElementById('showData');
const weatherData = [];
let currentCity = '';

function getCityWeather() {
  currentCity = cityName.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&APPID=b53e3b744a3a48c535d07a1334621a2d&units=imperial`,
    { mode: 'cors' },
  )
    .then((response) => response.json())
    .then((response) => {
      showData.textContent = '';

      const showCity = document.createElement('p');
      showCity.textContent = `City: ${response.name}`;
      showData.appendChild(showCity);

      const showTemp = document.createElement('p');
      showTemp.textContent = `Temperature: ${response.main.temp}`;
      showData.appendChild(showTemp);

      const feelsLike = document.createElement('p');
      feelsLike.textContent = `Feels Like: ${response.main.feels_like}`;
      showData.appendChild(feelsLike);
    });
}
// export default getCityWeather;
export { getCityWeather, weatherData, cityName };
