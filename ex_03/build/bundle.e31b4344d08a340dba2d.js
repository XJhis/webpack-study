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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/a.css":
/*!***********************!*\
  !*** ./src/css/a.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/a.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_a_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/a.css */ \"./src/css/a.css\");\n/* harmony import */ var _css_a_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_a_css__WEBPACK_IMPORTED_MODULE_0__);\n// var name = require('./js/a');\n__webpack_require__(/*! ./css/a.css */ \"./src/css/a.css\"); // require('./css/common/base.css')\n\n\n__webpack_require__(/*! ./css/a.css */ \"./src/css/a.css\");\n\n\nconsole.log(_css_a_css__WEBPACK_IMPORTED_MODULE_0___default.a); // let myName = '熊炬辉'\n// console.log(name);\n// let arr = [1,2,3];\n// let arr2 = arr.map(val => {\n//     val + 1\n// })\n// console.log(arr2);\n// let a = new Promise( (resolve, reject) => {\n//     setTimeout(() => {\n//         resolve('成功')\n//     }, 3000);\n// } )\n// a.then( res => {\n//     console.log(res)\n// })\n// class Person {\n//     a = 1\n// }\n// console.log(new Person());\n\n/*\r\n * expose-loader ：expose加载程序将模块添加到全局对象。 \r\n * \r\n */\n//v1：\n// 这里是将jQuery加载到了window对象下\n// import $ from 'expose-loader?jQuery!jquery';\n//v2:\n//在webpack的配置项里配置\n// //如果通过cdn引入的\n// import $ from \"jquery\";\n// console.log('$', $);\n// console.log('window', window.$);\n// //图片处理\n// import img_src from \"./butterfly.jpg\";\n// console.log('img_src', img_src);\n// let img = new Image();\n// img.width = 500;\n// img.height = 300;\n// img.src = img_src;\n// document.body.append(img)\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });