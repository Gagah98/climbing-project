/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/climbingRoutes.json":
/*!**********************************!*\
  !*** ./data/climbingRoutes.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, default */
/***/ (function(module) {

eval("module.exports = [{\"country\":\"United States\",\"ascents\":117619,\"routes\":76631,\"gearStyles\":{\"alpine\":1884,\"boulder\":8757,\"dws\":47,\"ice\":1081,\"sport\":15369,\"top-rope\":1070,\"trad\":7600}},{\"country\":\"Canada\",\"ascents\":36508,\"routes\":16207,\"gearStyles\":{\"alpine\":140,\"boulder\":2438,\"dws\":10,\"ice\":274,\"sport\":5683,\"top-rope\":516,\"trad\":4097}},{\"country\":\"Mexico\",\"ascents\":11714,\"routes\":3769,\"gearStyles\":{\"alpine\":2,\"boulder\":374,\"dws\":1,\"sport\":3266,\"top-rope\":10,\"trad\":79}},{\"country\":\"Victoria\",\"ascents\":184346,\"routes\":18343,\"gearStyles\":{\"boulder\":3327,\"dws\":10,\"ice\":17,\"sport\":1723,\"top-rope\":168,\"trad\":10703}},{\"country\":\"New South Wales and ACT\",\"ascents\":376434,\"routes\":30265,\"gearStyles\":{\"alpine\":5,\"boulder\":10252,\"dws\":163,\"ice\":3,\"sport\":9553,\"top-rope\":397,\"trad\":7940,\"via-ferrata\":3}},{\"country\":\"Western Australia\",\"ascents\":18631,\"routes\":4195,\"gearStyles\":{\"alpine\":0,\"boulder\":1599,\"dws\":13,\"sport\":689,\"top-rope\":9,\"trad\":1315}},{\"country\":\"Queensland\",\"ascents\":161709,\"routes\":8618,\"gearStyles\":{\"alpine\":15,\"boulder\":3391,\"dws\":25,\"sport\":1742,\"top-rope\":246,\"trad\":2710}},{\"country\":\"South Australia\",\"ascents\":30057,\"routes\":4136,\"gearStyles\":{\"boulder\":1098,\"dws\":21,\"sport\":410,\"top-rope\":45,\"trad\":2299}},{\"country\":\"Northern Territory\",\"ascents\":1509,\"routes\":778,\"gearStyles\":{\"boulder\":25,\"dws\":7,\"sport\":103,\"top-rope\":29,\"trad\":457}},{\"country\":\"Tasmania\",\"ascents\":27449,\"routes\":5683,\"gearStyles\":{\"alpine\":10,\"boulder\":1559,\"dws\":48,\"ice\":12,\"sport\":1164,\"top-rope\":116,\"trad\":1725}},{\"country\":\"Norfolk Island\"},{},{\"country\":\"Thailand\",\"ascents\":23017,\"routes\":1468,\"gearStyles\":{\"boulder\":26,\"dws\":4,\"ice\":0,\"sport\":1176,\"top-rope\":9,\"trad\":14,\"via-ferrata\":0}},{\"country\":\"Philippines\",\"ascents\":443,\"routes\":244,\"gearStyles\":{\"boulder\":1,\"dws\":1,\"sport\":209,\"trad\":31}},{\"country\":\"Indonesia\",\"ascents\":33,\"routes\":198,\"gearStyles\":{\"alpine\":1,\"boulder\":15,\"dws\":4,\"sport\":175,\"top-rope\":1}},{\"country\":\"Singapore\",\"ascents\":689,\"routes\":109,\"gearStyles\":{\"boulder\":23,\"sport\":53,\"top-rope\":3,\"trad\":29}},{\"country\":\"Malaysia\",\"ascents\":1219,\"routes\":612,\"gearStyles\":{\"boulder\":7,\"sport\":540,\"top-rope\":2,\"trad\":28}},{\"country\":\"Myanmar\",\"ascents\":3,\"routes\":25,\"gearStyles\":{\"sport\":25}},{\"country\":\"Laos\",\"ascents\":4118,\"routes\":470,\"gearStyles\":{\"boulder\":1,\"sport\":469}},{\"country\":\"Cambodia\",\"ascents\":30,\"routes\":62,\"gearStyles\":{\"boulder\":15,\"sport\":38,\"trad\":3}},{\"country\":\"Vietnam\",\"ascents\":2551,\"routes\":359,\"gearStyles\":{\"boulder\":5,\"dws\":40,\"sport\":241,\"top-rope\":4,\"trad\":2}},{\"country\":\"Brunei\"},{\"country\":\"Hong Kong\",\"ascents\":1732,\"routes\":1405,\"gearStyles\":{\"boulder\":516,\"sport\":661,\"top-rope\":7,\"trad\":222}},{\"country\":\"Japan\",\"ascents\":949,\"routes\":1824,\"gearStyles\":{\"alpine\":19,\"boulder\":324,\"ice\":16,\"sport\":920,\"top-rope\":46,\"trad\":306}},{\"country\":\"South Korea\",\"ascents\":607,\"routes\":2536,\"gearStyles\":{\"boulder\":4,\"sport\":2443,\"trad\":12}},{\"country\":\"China Mainland\",\"ascents\":6909,\"routes\":4615,\"gearStyles\":{\"boulder\":167,\"ice\":32,\"sport\":4052,\"top-rope\":14,\"trad\":334}},{\"country\":\"North Korea\"},{\"country\":\"Mongolia\"},{\"country\":\"Taiwan\",\"ascents\":80,\"routes\":575,\"gearStyles\":{\"boulder\":50,\"sport\":200,\"top-rope\":48,\"trad\":275}},{\"country\":\"Afghanistan\",\"ascents\":3,\"routes\":2,\"gearStyles\":{\"trad\":1}},{\"country\":\"Kazakhstan\",\"ascents\":5,\"routes\":63,\"gearStyles\":{\"sport\":61,\"trad\":2}},{\"country\":\"Uzbekistan\"},{\"country\":\"Turkmenistan\"},{\"country\":\"Kyrgyzstan\",\"ascents\":23,\"routes\":10},{\"country\":\"Tajikistan\",\"routes\":6,\"gearStyles\":{\"sport\":5,\"trad\":1}},{\"country\":\"Pakistan\",\"ascents\":18,\"routes\":41,\"gearStyles\":{\"alpine\":2,\"sport\":36,\"trad\":1}},{\"country\":\"India\",\"ascents\":521,\"routes\":506,\"gearStyles\":{\"alpine\":0,\"boulder\":291,\"sport\":174,\"top-rope\":13,\"trad\":22}},{\"country\":\"Nepal\",\"ascents\":13,\"routes\":6,\"gearStyles\":{\"alpine\":6}},{\"country\":\"Bhutan\",\"routes\":15,\"gearStyles\":{\"sport\":13}},{\"country\":\"Bangladesh\"},{\"country\":\"Sri Lanka\",\"ascents\":29,\"routes\":16,\"gearStyles\":{\"boulder\":4,\"sport\":12}},{\"country\":\"East Timor\"},{\"country\":\"Germany\",\"ascents\":38447,\"routes\":70698,\"gearStyles\":{\"alpine\":56,\"boulder\":4316,\"dws\":18,\"ice\":5,\"sport\":37147,\"top-rope\":224,\"trad\":24957,\"via-ferrata\":22}},{\"country\":\"France\",\"ascents\":24118,\"routes\":58207,\"gearStyles\":{\"alpine\":79,\"boulder\":28226,\"dws\":55,\"ice\":3,\"sport\":26771,\"top-rope\":159,\"trad\":487,\"via-ferrata\":1}},{\"country\":\"United Kingdom\",\"ascents\":16761,\"routes\":27777,\"gearStyles\":{\"alpine\":76,\"boulder\":1371,\"dws\":67,\"ice\":2,\"sport\":2121,\"top-rope\":503,\"trad\":7073}},{\"country\":\"Switzerland\",\"ascents\":14118,\"routes\":23500,\"gearStyles\":{\"alpine\":269,\"boulder\":3665,\"dws\":1,\"ice\":11,\"sport\":18709,\"top-rope\":97,\"trad\":758,\"via-ferrata\":2}},{\"country\":\"Austria\",\"ascents\":16136,\"routes\":15734,\"gearStyles\":{\"alpine\":208,\"boulder\":705,\"ice\":175,\"sport\":13626,\"top-rope\":133,\"trad\":658,\"via-ferrata\":92}},{\"country\":\"Netherlands\",\"ascents\":8,\"routes\":59,\"gearStyles\":{\"boulder\":6,\"sport\":25,\"top-rope\":29}},{\"country\":\"Luxembourg\",\"ascents\":618,\"routes\":158,\"gearStyles\":{\"sport\":157,\"top-rope\":1}},{\"country\":\"Belgium\",\"ascents\":735,\"routes\":4496,\"gearStyles\":{\"alpine\":3,\"boulder\":334,\"sport\":4108,\"top-rope\":5,\"trad\":4}},{\"country\":\"Ireland\",\"ascents\":642,\"routes\":910,\"gearStyles\":{\"boulder\":9,\"trad\":556}},{\"country\":\"Liechtenstein\",\"ascents\":8,\"routes\":10,\"gearStyles\":{\"boulder\":9,\"trad\":1}},{\"country\":\"Italy\",\"ascents\":12389,\"routes\":32412,\"gearStyles\":{\"alpine\":52,\"boulder\":480,\"dws\":9,\"ice\":47,\"sport\":25171,\"top-rope\":7,\"trad\":932,\"via-ferrata\":136}},{\"country\":\"Spain\",\"ascents\":18696,\"routes\":33463,\"gearStyles\":{\"alpine\":6,\"boulder\":822,\"dws\":413,\"ice\":15,\"sport\":29402,\"top-rope\":13,\"trad\":1846,\"via-ferrata\":4}},{\"country\":\"Greece\",\"ascents\":29163,\"routes\":8018,\"gearStyles\":{\"alpine\":5,\"boulder\":110,\"dws\":8,\"sport\":7486,\"top-rope\":24,\"trad\":237,\"via-ferrata\":1}},{\"country\":\"Portugal\",\"ascents\":256,\"routes\":591,\"gearStyles\":{\"boulder\":57,\"dws\":5,\"sport\":488,\"top-rope\":1,\"trad\":7}},{\"country\":\"Malta\",\"ascents\":551,\"routes\":595,\"gearStyles\":{\"boulder\":9,\"sport\":468,\"trad\":121}},{\"country\":\"Sweden\",\"ascents\":1718,\"routes\":8340,\"gearStyles\":{\"alpine\":1,\"boulder\":4989,\"dws\":17,\"sport\":986,\"top-rope\":5,\"trad\":1775}},{\"country\":\"Norway\",\"ascents\":4159,\"routes\":12568,\"gearStyles\":{\"alpine\":9,\"boulder\":4621,\"dws\":10,\"ice\":177,\"sport\":4789,\"top-rope\":36,\"trad\":2926}},{\"country\":\"Finland\",\"ascents\":158,\"routes\":546,\"gearStyles\":{\"boulder\":461,\"sport\":19,\"trad\":16}},{\"country\":\"Denmark\",\"ascents\":84,\"routes\":253,\"gearStyles\":{\"alpine\":4,\"ice\":2,\"sport\":163,\"top-rope\":1,\"trad\":85}},{\"country\":\"Iceland\",\"ascents\":22,\"routes\":148,\"gearStyles\":{\"boulder\":26,\"ice\":13,\"sport\":69,\"top-rope\":1,\"trad\":36}},{\"country\":\"Slovenia\",\"ascents\":1029,\"routes\":2856,\"gearStyles\":{\"boulder\":84,\"sport\":2758}},{\"country\":\"Hungary\",\"ascents\":337,\"routes\":756,\"gearStyles\":{\"boulder\":18,\"sport\":481,\"top-rope\":2,\"trad\":124,\"via-ferrata\":7}},{\"country\":\"Poland\",\"ascents\":378,\"routes\":1328,\"gearStyles\":{\"boulder\":19,\"sport\":754,\"top-rope\":1,\"trad\":551,\"via-ferrata\":1}},{\"country\":\"Czech Republic\",\"ascents\":1872,\"routes\":58641,\"gearStyles\":{\"alpine\":0,\"boulder\":1400,\"ice\":3,\"sport\":4187,\"top-rope\":2,\"trad\":52420,\"via-ferrata\":1}},{\"country\":\"Croatia\",\"ascents\":1549,\"routes\":2118,\"gearStyles\":{\"dws\":110,\"sport\":1975,\"trad\":16}},{\"country\":\"Romania\",\"ascents\":164,\"routes\":720,\"gearStyles\":{\"alpine\":1,\"sport\":690,\"trad\":26}},{\"country\":\"Bosnia Herzegovina\",\"ascents\":11,\"routes\":155,\"gearStyles\":{\"boulder\":39,\"sport\":116}},{\"country\":\"Serbia\",\"ascents\":207,\"routes\":662,\"gearStyles\":{\"sport\":662}},{\"country\":\"Bulgaria\",\"ascents\":123,\"routes\":1385,\"gearStyles\":{\"sport\":260,\"trad\":1119}},{\"country\":\"Macedonia\",\"ascents\":242,\"routes\":217,\"gearStyles\":{\"boulder\":8,\"sport\":178,\"trad\":30}},{\"country\":\"Albania\",\"ascents\":28,\"routes\":64,\"gearStyles\":{\"sport\":62,\"trad\":2}},{\"country\":\"Kosovo\"},{\"country\":\"Russia\",\"ascents\":358,\"routes\":1784,\"gearStyles\":{\"boulder\":85,\"sport\":1641,\"top-rope\":22,\"trad\":33}},{\"country\":\"Estonia\"},{\"country\":\"Latvia\"},{\"country\":\"Lithuania\"},{\"country\":\"Belarus\"},{\"country\":\"Ukraine\",\"ascents\":595,\"routes\":3504,\"gearStyles\":{\"boulder\":1331,\"sport\":2111,\"top-rope\":38,\"trad\":5}},{\"country\":\"Moldova\",\"routes\":1,\"gearStyles\":{\"top-rope\":1}},{\"country\":\"Montenegro\",\"ascents\":70,\"routes\":313,\"gearStyles\":{\"alpine\":1,\"boulder\":7,\"sport\":201,\"trad\":102}},{\"country\":\"Slovakia\",\"ascents\":667,\"routes\":2231,\"gearStyles\":{\"alpine\":42,\"boulder\":109,\"sport\":1972,\"trad\":35,\"via-ferrata\":1}},{\"country\":\"Andorra\",\"ascents\":2,\"routes\":2,\"gearStyles\":{\"sport\":2}},{},{\"country\":\"Bolivia\",\"ascents\":56,\"routes\":127,\"gearStyles\":{\"alpine\":43,\"sport\":72,\"trad\":4}},{\"country\":\"Brazil\",\"ascents\":611,\"routes\":3236,\"gearStyles\":{\"alpine\":5,\"boulder\":842,\"sport\":1935,\"top-rope\":34,\"trad\":340,\"via-ferrata\":1}},{\"country\":\"Argentina\",\"ascents\":758,\"routes\":1722,\"gearStyles\":{\"alpine\":45,\"boulder\":5,\"sport\":1389,\"top-rope\":3,\"trad\":252}},{\"country\":\"Ecuador\",\"routes\":1,\"gearStyles\":{\"boulder\":1}},{\"country\":\"Colombia\",\"ascents\":626,\"routes\":633,\"gearStyles\":{\"boulder\":5,\"sport\":312,\"trad\":227}},{\"country\":\"Venezuela\",\"ascents\":31,\"routes\":74,\"gearStyles\":{\"sport\":8,\"trad\":22}},{\"country\":\"Peru\",\"ascents\":457,\"routes\":611,\"gearStyles\":{\"alpine\":66,\"boulder\":16,\"sport\":396,\"top-rope\":1,\"trad\":38}},{\"country\":\"Chile\",\"ascents\":631,\"routes\":1363,\"gearStyles\":{\"alpine\":11,\"boulder\":0,\"sport\":1179,\"top-rope\":2,\"trad\":143,\"via-ferrata\":1}},{\"country\":\"Guyana\"},{\"country\":\"Suriname\"},{\"country\":\"French Guiana\"},{\"country\":\"Paraguay\"},{\"country\":\"Uruguay\"},{\"country\":\"Falkland Islands\"},{\"country\":\"South Africa\",\"ascents\":10186,\"routes\":7456,\"gearStyles\":{\"boulder\":1629,\"ice\":20,\"sport\":2433,\"top-rope\":6,\"trad\":2178}},{\"country\":\"Botswana\",\"ascents\":5,\"routes\":6},{\"country\":\"Lesotho\",\"routes\":36,\"gearStyles\":{\"ice\":1}},{\"country\":\"Namibia\",\"ascents\":137,\"routes\":164,\"gearStyles\":{\"sport\":127,\"trad\":29}},{\"country\":\"Mozambique\"},{\"country\":\"Zimbabwe\"},{\"country\":\"Swaziland\"},{\"country\":\"Morocco\",\"ascents\":351,\"routes\":462,\"gearStyles\":{\"boulder\":5,\"sport\":138,\"trad\":177}},{\"country\":\"Algeria\",\"routes\":2,\"gearStyles\":{\"trad\":2}},{\"country\":\"Tunisia\",\"routes\":38,\"gearStyles\":{\"sport\":32,\"top-rope\":3,\"trad\":3}},{\"country\":\"Libya\"},{\"country\":\"Egypt\",\"ascents\":6,\"routes\":26,\"gearStyles\":{\"sport\":23}},{\"country\":\"Sudan\"},{\"country\":\"Kenya\",\"ascents\":285,\"routes\":932,\"gearStyles\":{\"alpine\":1,\"boulder\":9,\"ice\":2,\"sport\":26,\"top-rope\":1,\"trad\":820}},{\"country\":\"Eritrea\"},{\"country\":\"Ethiopia\"},{\"country\":\"Somalia\"},{\"country\":\"Uganda\",\"ascents\":265,\"routes\":147,\"gearStyles\":{\"boulder\":11,\"sport\":82,\"top-rope\":35,\"trad\":19}},{\"country\":\"Tanzania\",\"routes\":2,\"gearStyles\":{\"trad\":2}},{\"country\":\"Zambia\"},{\"country\":\"Malawi\"},{\"country\":\"Madagascar\",\"ascents\":3,\"routes\":159,\"gearStyles\":{\"sport\":154}},{\"country\":\"Rwanda\",\"ascents\":10,\"routes\":22,\"gearStyles\":{\"sport\":1}},{\"country\":\"Mauritania\"},{\"country\":\"Senegal\"},{\"country\":\"Gambia\"},{\"country\":\"Mali\",\"ascents\":3,\"routes\":2,\"gearStyles\":{\"trad\":2}},{\"country\":\"Burkina Faso\"},{\"country\":\"Niger\"},{\"country\":\"Guinea\"},{\"country\":\"Sierra Leone\"},{\"country\":\"Liberia\"},{\"country\":\"Cote d'Ivoire\"},{\"country\":\"Ghana\",\"ascents\":4,\"routes\":33,\"gearStyles\":{\"alpine\":2,\"sport\":24,\"top-rope\":1,\"trad\":6}},{\"country\":\"Togo\"},{\"country\":\"Nigeria\"},{\"country\":\"Chad\"},{\"country\":\"Central African Republic\"},{\"country\":\"Cameroon\"},{\"country\":\"Gabon\"},{\"country\":\"Republic of the Congo\"},{\"country\":\"Democratic Republic of the Congo\"},{\"country\":\"Angola\"},{\"country\":\"Western Sahara\"},{\"country\":\"Benin\"},{\"country\":\"Cabo Verde\"},{\"country\":\"Guinea-Bissau\"},{\"country\":\"Saint Helena, Ascension and Tristan da Cunha\"},{\"country\":\"Equatorial Guinea\"},{\"country\":\"Sao Tome and Principe\"},{\"country\":\"Burundi\"},{\"country\":\"Comoros\"},{\"country\":\"Djibouti\"},{\"country\":\"Mauritius\"},{\"country\":\"Mayotte\"},{\"country\":\"La Réunion\",\"routes\":148,\"gearStyles\":{\"boulder\":16,\"sport\":129,\"trad\":2}},{\"country\":\"Seychelles\"},{\"country\":\"South Sudan\"},{},{\"country\":\"Melanesia\",\"ascents\":12,\"routes\":114,\"gearStyles\":{\"dws\":2,\"sport\":111,\"trad\":1}},{\"country\":\"Micronesia\",\"routes\":1,\"gearStyles\":{\"sport\":1}},{\"country\":\"Polynesia\",\"ascents\":119,\"routes\":59,\"gearStyles\":{\"boulder\":3,\"sport\":54,\"top-rope\":1,\"trad\":1}},{\"country\":\"North Pole\",\"routes\":1,\"gearStyles\":{\"alpine\":1}},{\"country\":\"Greenland\",\"ascents\":1,\"routes\":29,\"gearStyles\":{\"alpine\":16,\"ice\":2,\"trad\":11}},{}];\n\n//# sourceURL=webpack:///./data/climbingRoutes.json?");

/***/ }),

/***/ "./src/drawGraph.js":
/*!**************************!*\
  !*** ./src/drawGraph.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const climbingRoutes = __webpack_require__(/*! ../data/climbingRoutes.json */ \"./data/climbingRoutes.json\")\r\n\r\nvar chart = bb.generate({\r\n    data: {\r\n      json: {\r\n        routes: climbingRoutes.map(({ routes }) => routes),\r\n        ascents: climbingRoutes.map(({ ascents }) => ascents),\r\n      },\r\n      // définir les axes y et y2\r\n      axes: {\r\n        routes: 'y',\r\n        ascents: 'y2',\r\n      },\r\n      type: 'bar',\r\n    },\r\n    axis: {\r\n      x: {\r\n        type: 'category',\r\n        categories: climbingRoutes.map(({ country }) => country)\r\n      },\r\n      // Nommer l'axe y\r\n      y: {\r\n        label: 'Routes',\r\n      },\r\n      // Montrer et nommer l'axe y2\r\n      y2: {\r\n        show: true,\r\n        label: 'Ascents',\r\n      }\r\n    },\r\n    bindto: chart,\r\n  })\n\n//# sourceURL=webpack:///./src/drawGraph.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawGraph */ \"./src/drawGraph.js\");\n/* harmony import */ var _drawGraph__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drawGraph__WEBPACK_IMPORTED_MODULE_0__);\n\r\n//import drawTest from \"./drawTest\";\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });