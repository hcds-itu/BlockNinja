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

eval("\nclass JsonData {\n    static jsonObj\n\n    constructor() {\n        JsonData.jsonObj = {};\n    }\n\n    static addData(keys, values) {\n        console.log(keys.length);\n        for (let i = 0; i < keys.length; i++) {\n            let key = keys[i];\n            if (JsonData.jsonObj.hasOwnProperty(key)) {\n                JsonData.jsonObj[key].push(values[i]);\n            }\n            else {\n                JsonData.jsonObj[key] = [values[i]];\n            }\n        }\n    }\n\n    static removeData() { \n        this.jsonObj = {}\n    }\n\n    static storeData(url) {\n        fetch(url + \"/store_data\", {\n            method: \"POST\",\n            body: JSON.stringify(JsonData.jsonObj)\n        })\n       .then(response => response.json())\n       .then(response => console.log(JSON.stringify(response)))\n    }   \n}\n\nmodule.exports = {\n    JsonData\n};\n\n//# sourceURL=webpack://blockninja/./src/client/network.js?");

/***/ }),

/***/ "./src/client/question.js":
/*!********************************!*\
  !*** ./src/client/question.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const network = __webpack_require__(/*! ./network */ \"./src/client/network.js\");\nconst jsonData = new network.JsonData();\n\nconst urlParams = new URLSearchParams(window.location.search);\nconst encodedJsonData = urlParams.get(\"data\");\nconst decodedJsonString = decodeURIComponent(encodedJsonData);\nconst data = JSON.parse(decodedJsonString);\n\njsonData.jsonObj = data\n\nconsole.log(JSON.stringify(data));\n\n//# sourceURL=webpack://blockninja/./src/client/question.js?");

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