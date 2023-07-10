/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/network.js":
/*!*******************************!*\
  !*** ./src/client/network.js ***!
  \*******************************/
/***/ ((module) => {

eval("function addData(jsonObj, keys, values) {\n    for (let i = 0; i < keys.Length; i++) {\n        jsonObj[keys[i]] = values[i];\n    }\n}\nfunction removeData(jsonObj) { \n    jsonObj = {}\n}\nfunction storeData(jsonObj) {\n\tfetch(url + \"/store_data\", {\n\t\tmethod: \"POST\",\n\t\theaders: {},\n\t\tbody: jsonObj\n\t})\n   .then(response => response.json())\n   .then(response => console.log(JSON.stringify(response)))\n}\n\nmodule.exports = {\n    addData,\n    removeData,\n    storeData\n};\n\n//# sourceURL=webpack://blockninja/./src/client/network.js?");

/***/ }),

/***/ "./src/client/question.js":
/*!********************************!*\
  !*** ./src/client/question.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const network = __webpack_require__(/*! ./network */ \"./src/client/network.js\");\n\n//# sourceURL=webpack://blockninja/./src/client/question.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/question.js");
/******/ 	
/******/ })()
;