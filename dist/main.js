/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiWeather.js":
/*!***************************!*\
  !*** ./src/apiWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cityName\": () => (/* binding */ cityName),\n/* harmony export */   \"getCityWeather\": () => (/* binding */ getCityWeather),\n/* harmony export */   \"weatherData\": () => (/* binding */ weatherData)\n/* harmony export */ });\nconst cityName = document.getElementById('cityName');\nconst showData = document.getElementById('showData');\nconst weatherData = [];\nlet currentCity = '';\n\nfunction getCityWeather() {\n  currentCity = cityName.value;\n  fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&APPID=b53e3b744a3a48c535d07a1334621a2d&units=imperial`,\n    { mode: 'cors' },\n  )\n    .then((response) => response.json())\n    .then((response) => {\n      showData.textContent = '';\n\n      const showCity = document.createElement('p');\n      showCity.textContent = `City: ${response.name}`;\n      showData.appendChild(showCity);\n\n      const showTemp = document.createElement('p');\n      showTemp.textContent = `Temperature: ${response.main.temp}`;\n      showData.appendChild(showTemp);\n\n      const feelsLike = document.createElement('p');\n      feelsLike.textContent = `Feels Like: ${response.main.feels_like}`;\n      showData.appendChild(feelsLike);\n    });\n}\n// export default getCityWeather;\n\n\n\n//# sourceURL=webpack://weatherapp/./src/apiWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiWeather */ \"./src/apiWeather.js\");\n\n\nconst userInput = document.getElementById('inputForm');\n\nuserInput.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_apiWeather__WEBPACK_IMPORTED_MODULE_0__.getCityWeather)();\n});\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;