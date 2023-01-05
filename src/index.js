import { getCityWeather } from './apiWeather';

const userInput = document.getElementById('inputForm');

userInput.addEventListener('submit', (e) => {
  e.preventDefault();
  getCityWeather();
});
