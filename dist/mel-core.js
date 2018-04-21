(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mel-core"] = factory();
	else
		root["mel-core"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../mel-web/dist/index.html":
/*!**********************************!*\
  !*** ../mel-web/dist/index.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"mel-web/index.html\";\n\n//# sourceURL=webpack://mel-core/../mel-web/dist/index.html?");

/***/ }),

/***/ "../mel-web/dist/mel-web.js":
/*!**********************************!*\
  !*** ../mel-web/dist/mel-web.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__.p + \"mel-web/mel-web.js\";\n\n//# sourceURL=webpack://mel-core/../mel-web/dist/mel-web.js?");

/***/ }),

/***/ "../mel-web/dist/res/fonts/OpenSans-Regular.ttf":
/*!******************************************************!*\
  !*** ../mel-web/dist/res/fonts/OpenSans-Regular.ttf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"mel-web/res/fonts/OpenSans-Regular.ttf\";\n\n//# sourceURL=webpack://mel-core/../mel-web/dist/res/fonts/OpenSans-Regular.ttf?");

/***/ }),

/***/ "../mel-web/dist/res/fonts/Oswald-Regular.ttf":
/*!****************************************************!*\
  !*** ../mel-web/dist/res/fonts/Oswald-Regular.ttf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"mel-web/res/fonts/Oswald-Regular.ttf\";\n\n//# sourceURL=webpack://mel-core/../mel-web/dist/res/fonts/Oswald-Regular.ttf?");

/***/ }),

/***/ "../mel-web/dist/res/fonts/Roboto-Regular.ttf":
/*!****************************************************!*\
  !*** ../mel-web/dist/res/fonts/Roboto-Regular.ttf ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"mel-web/res/fonts/Roboto-Regular.ttf\";\n\n//# sourceURL=webpack://mel-core/../mel-web/dist/res/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/array/from */ \"./node_modules/core-js/library/fn/array/from.js\"), __esModule: true };\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/get-iterator */ \"./node_modules/core-js/library/fn/get-iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/json/stringify */ \"./node_modules/core-js/library/fn/json/stringify.js\"), __esModule: true };\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/core-js/json/stringify.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/promise */ \"./node_modules/core-js/library/fn/promise.js\"), __esModule: true };\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/string/from-code-point.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/string/from-code-point.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/string/from-code-point */ \"./node_modules/core-js/library/fn/string/from-code-point.js\"), __esModule: true };\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/core-js/string/from-code-point.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _promise = __webpack_require__(/*! ../core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (fn) {\n  return function () {\n    var gen = fn.apply(this, arguments);\n    return new _promise2.default(function (resolve, reject) {\n      function step(key, arg) {\n        try {\n          var info = gen[key](arg);\n          var value = info.value;\n        } catch (error) {\n          reject(error);\n          return;\n        }\n\n        if (info.done) {\n          resolve(value);\n        } else {\n          return _promise2.default.resolve(value).then(function (value) {\n            step(\"next\", value);\n          }, function (err) {\n            step(\"throw\", err);\n          });\n        }\n      }\n\n      return step(\"next\");\n    });\n  };\n};\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _from = __webpack_require__(/*! ../core-js/array/from */ \"./node_modules/babel-runtime/core-js/array/from.js\");\n\nvar _from2 = _interopRequireDefault(_from);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  } else {\n    return (0, _from2.default)(arr);\n  }\n};\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime-module.js\");\n\n\n//# sourceURL=webpack://mel-core/./node_modules/babel-runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es6.array.from */ \"./node_modules/core-js/library/modules/es6.array.from.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Array.from;\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/fn/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ \"./node_modules/core-js/library/modules/core.get-iterator.js\");\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/fn/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });\nmodule.exports = function stringify(it) { // eslint-disable-line no-unused-vars\n  return $JSON.stringify.apply($JSON, arguments);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/fn/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/library/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es7.promise.finally */ \"./node_modules/core-js/library/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ../modules/es7.promise.try */ \"./node_modules/core-js/library/modules/es7.promise.try.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Promise;\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/fn/promise.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/string/from-code-point.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/string/from-code-point.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.from-code-point */ \"./node_modules/core-js/library/modules/es6.string.from-code-point.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").String.fromCodePoint;\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/fn/string/from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.5' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    var promise = Promise.resolve();\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/library/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/core.get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/library/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/library/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/library/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.from-code-point.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.from-code-point.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://mel-core/./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/mel-web/dist sync recursive .+":
/*!*******************************************!*\
  !*** ./node_modules/mel-web/dist sync .+ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.html\": \"../mel-web/dist/index.html\",\n\t\"./mel-web\": \"../mel-web/dist/mel-web.js\",\n\t\"./mel-web.js\": \"../mel-web/dist/mel-web.js\",\n\t\"./res/fonts/OpenSans-Regular.ttf\": \"../mel-web/dist/res/fonts/OpenSans-Regular.ttf\",\n\t\"./res/fonts/Oswald-Regular.ttf\": \"../mel-web/dist/res/fonts/Oswald-Regular.ttf\",\n\t\"./res/fonts/Roboto-Regular.ttf\": \"../mel-web/dist/res/fonts/Roboto-Regular.ttf\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/mel-web/dist sync recursive .+\";\n\n//# sourceURL=webpack://mel-core/./node_modules/mel-web/dist_sync_.+?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(/*! ./runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//# sourceURL=webpack://mel-core/./node_modules/regenerator-runtime/runtime-module.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n\n\n//# sourceURL=webpack://mel-core/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./src/config/configuration-loader.js":
/*!********************************************!*\
  !*** ./src/config/configuration-loader.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _configuration = __webpack_require__(/*! ./configuration */ \"./src/config/configuration.js\");\n\nvar _configuration2 = _interopRequireDefault(_configuration);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DEFAULT_CONFIG = {\n  scanner: {\n    extensions: ['.mp3'],\n    directories: []\n  },\n  tag_reader: {\n    feature_patterns: [{\n      pattern: '(feat. %a)',\n      delimiter: ',',\n      ending_delimiter: '&'\n    }, {\n      pattern: '(mit %a)',\n      delimiter: ','\n    }]\n  }\n};\n\nvar ConfigurationLoader = function () {\n  function ConfigurationLoader(configPath, fileSystem) {\n    (0, _classCallCheck3.default)(this, ConfigurationLoader);\n\n    this._fileSystem = fileSystem;\n    this._configPath = this._fileSystem.APPLICATION_DIRECTORY + configPath;\n  }\n\n  (0, _createClass3.default)(ConfigurationLoader, [{\n    key: '_createConfig',\n    value: function _createConfig(config) {\n      var configuration = new _configuration2.default();\n      configuration.scanner.directories = config.scanner.directories;\n      configuration.scanner.extensions = config.scanner.extensions;\n      configuration.tagReader.featurePatterns = config.tag_reader.feature_patterns;\n      return configuration;\n    }\n  }, {\n    key: 'loadConfiguration',\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n        var configJson, configuration;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this._fileSystem.readFile(this._configPath);\n\n              case 2:\n                configJson = _context.sent;\n\n                if (!configJson) {\n                  _context.next = 8;\n                  break;\n                }\n\n                configJson = JSON.parse(configJson);\n                return _context.abrupt('return', this._createConfig(configJson));\n\n              case 8:\n                configuration = this._createConfig(DEFAULT_CONFIG);\n\n                this.saveConfiguration(configuration);\n                return _context.abrupt('return', configuration);\n\n              case 11:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadConfiguration() {\n        return _ref.apply(this, arguments);\n      }\n\n      return loadConfiguration;\n    }()\n  }, {\n    key: 'saveConfiguration',\n    value: function saveConfiguration(configuration) {\n      return this._fileSystem.writeFile(this._configPath, configuration.toJsonString());\n    }\n  }]);\n  return ConfigurationLoader;\n}();\n\nexports.default = ConfigurationLoader;\n\n//# sourceURL=webpack://mel-core/./src/config/configuration-loader.js?");

/***/ }),

/***/ "./src/config/configuration.js":
/*!*************************************!*\
  !*** ./src/config/configuration.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ScannerConfig = function () {\n  function ScannerConfig() {\n    (0, _classCallCheck3.default)(this, ScannerConfig);\n\n    this._directories = [];\n    this._extensions = [];\n  }\n\n  (0, _createClass3.default)(ScannerConfig, [{\n    key: 'toDataObject',\n    value: function toDataObject() {\n      return {\n        directories: this._directories,\n        extensions: this._extensions\n      };\n    }\n  }, {\n    key: 'directories',\n    get: function get() {\n      return this._directories;\n    },\n    set: function set(value) {\n      this._directories = value;\n    }\n  }, {\n    key: 'extensions',\n    get: function get() {\n      return this._extensions;\n    },\n    set: function set(value) {\n      this._extensions = value;\n    }\n  }]);\n  return ScannerConfig;\n}();\n\nvar TagReaderConfig = function () {\n  function TagReaderConfig() {\n    (0, _classCallCheck3.default)(this, TagReaderConfig);\n\n    this._featurePatterns = [];\n  }\n\n  (0, _createClass3.default)(TagReaderConfig, [{\n    key: 'toDataObject',\n    value: function toDataObject() {\n      return {\n        feature_patterns: this._featurePatterns\n      };\n    }\n  }, {\n    key: 'featurePatterns',\n    get: function get() {\n      return this._featurePatterns;\n    },\n    set: function set(value) {\n      this._featurePatterns = value;\n    }\n  }]);\n  return TagReaderConfig;\n}();\n\nvar Configuration = function () {\n  function Configuration() {\n    (0, _classCallCheck3.default)(this, Configuration);\n\n    this._scanner = new ScannerConfig();\n    this._tagReader = new TagReaderConfig();\n  }\n\n  (0, _createClass3.default)(Configuration, [{\n    key: 'toJsonString',\n    value: function toJsonString() {\n      return (0, _stringify2.default)({\n        scanner: this.scanner.toDataObject(),\n        tag_reader: this.tagReader.toDataObject()\n      }, null, '  ');\n    }\n  }, {\n    key: 'scanner',\n    get: function get() {\n      return this._scanner;\n    },\n    set: function set(value) {\n      this._scanner = value;\n    }\n  }, {\n    key: 'tagReader',\n    get: function get() {\n      return this._tagReader;\n    },\n    set: function set(value) {\n      this._tagReader = value;\n    }\n  }]);\n  return Configuration;\n}();\n\nexports.default = Configuration;\n\n//# sourceURL=webpack://mel-core/./src/config/configuration.js?");

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Request = exports.Response = exports.MelCore = exports.Database = exports.WebServer = exports.FileSystem = exports.MelHttpService = exports.MelClientSocket = exports.WebSocket = exports.File = exports.Track = exports.Album = exports.Artist = undefined;\n\nvar _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _directoryScanner = __webpack_require__(/*! ./files/directory-scanner */ \"./src/files/directory-scanner.js\");\n\nvar _directoryScanner2 = _interopRequireDefault(_directoryScanner);\n\nvar _webServer = __webpack_require__(/*! ./network/http/web-server */ \"./src/network/http/web-server.js\");\n\nvar _webServer2 = _interopRequireDefault(_webServer);\n\nvar _configurationLoader = __webpack_require__(/*! ./config/configuration-loader */ \"./src/config/configuration-loader.js\");\n\nvar _configurationLoader2 = _interopRequireDefault(_configurationLoader);\n\nvar _tagReader = __webpack_require__(/*! ./media/tag-reader */ \"./src/media/tag-reader.js\");\n\nvar _tagReader2 = _interopRequireDefault(_tagReader);\n\nvar _database = __webpack_require__(/*! ./database/database */ \"./src/database/database.js\");\n\nvar _database2 = _interopRequireDefault(_database);\n\nvar _apiHandler = __webpack_require__(/*! ./network/http/api-handler */ \"./src/network/http/api-handler.js\");\n\nvar _apiHandler2 = _interopRequireDefault(_apiHandler);\n\nvar _file = __webpack_require__(/*! ./data/files/file */ \"./src/data/files/file.js\");\n\nvar _file2 = _interopRequireDefault(_file);\n\nvar _track = __webpack_require__(/*! ./data/track */ \"./src/data/track.js\");\n\nvar _track2 = _interopRequireDefault(_track);\n\nvar _album = __webpack_require__(/*! ./data/album */ \"./src/data/album.js\");\n\nvar _album2 = _interopRequireDefault(_album);\n\nvar _artist = __webpack_require__(/*! ./data/artist */ \"./src/data/artist.js\");\n\nvar _artist2 = _interopRequireDefault(_artist);\n\nvar _melServerSocket = __webpack_require__(/*! ./network/web-socket/mel-server-socket */ \"./src/network/web-socket/mel-server-socket.js\");\n\nvar _melServerSocket2 = _interopRequireDefault(_melServerSocket);\n\nvar _melClientSocket = __webpack_require__(/*! ./network/web-socket/mel-client-socket */ \"./src/network/web-socket/mel-client-socket.js\");\n\nvar _melClientSocket2 = _interopRequireDefault(_melClientSocket);\n\nvar _melHttpService = __webpack_require__(/*! ./network/http/mel-http-service */ \"./src/network/http/mel-http-service.js\");\n\nvar _melHttpService2 = _interopRequireDefault(_melHttpService);\n\nvar _webSocket = __webpack_require__(/*! ./network/web-socket/web-socket */ \"./src/network/web-socket/web-socket.js\");\n\nvar _webSocket2 = _interopRequireDefault(_webSocket);\n\nvar _fileSystem = __webpack_require__(/*! ./files/file-system */ \"./src/files/file-system.js\");\n\nvar _fileSystem2 = _interopRequireDefault(_fileSystem);\n\nvar _jobQeue = __webpack_require__(/*! ./utils/job-qeue */ \"./src/utils/job-qeue.js\");\n\nvar _jobQeue2 = _interopRequireDefault(_jobQeue);\n\nvar _response = __webpack_require__(/*! ./network/http/response */ \"./src/network/http/response.js\");\n\nvar _response2 = _interopRequireDefault(_response);\n\nvar _request = __webpack_require__(/*! ./network/http/request */ \"./src/network/http/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Dependency for web app\n__webpack_require__(\"./node_modules/mel-web/dist sync recursive .+\");\n\nvar RELATIVE_CONFIG_PATH = '/config.json';\n\nvar MelCore = function () {\n  function MelCore() {\n    (0, _classCallCheck3.default)(this, MelCore);\n  }\n\n  (0, _createClass3.default)(MelCore, [{\n    key: 'initialize',\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n        var configurationLoader, identity;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                configurationLoader = new _configurationLoader2.default(RELATIVE_CONFIG_PATH, this._fileSystem);\n                _context.next = 4;\n                return configurationLoader.loadConfiguration();\n\n              case 4:\n                this._configuration = _context.sent;\n                _context.next = 10;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context['catch'](0);\n\n                console.error('Could not load database: ' + _context.t0);\n\n              case 10:\n\n                // Directory Scanner\n                try {\n                  this._directoryScanner = new _directoryScanner2.default(this._fileSystem, this._configuration.scanner);\n                } catch (err) {\n                  console.error('Could not initialize directory scanner: ' + err);\n                }\n                this._tagReader = new _tagReader2.default(this._configuration.tagReader);\n\n                // Database\n                _context.prev = 12;\n                _context.next = 15;\n                return this._database.initialize();\n\n              case 15:\n                _context.next = 20;\n                break;\n\n              case 17:\n                _context.prev = 17;\n                _context.t1 = _context['catch'](12);\n\n                console.error('Could not initialize database: ' + _context.t1);\n\n              case 20:\n\n                // API Handler\n                try {\n                  this._apiHandler = new _apiHandler2.default(this._database, this._fileSystem);\n                  this._webServer.addRoutes(this._apiHandler.getRoutes());\n                } catch (err) {\n                  console.error('Could not initialize api handler: ' + err);\n                }\n\n                // Web App\n                this._webServer.addStaticDirectory(this._fileSystem.APPLICATION_DIRECTORY + '/mel-web/');\n\n                // Network Adapter\n                try {\n                  identity = this._database.identity;\n\n                  this._melServerSocket = new _melServerSocket2.default(this._webSocket, identity, this._database);\n                  this._melServerSocket.initialize();\n                } catch (err) {\n                  console.error('Could not initialize network adapter: ' + err);\n                }\n\n                _context.next = 25;\n                return this._webServer.start();\n\n              case 25:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[0, 7], [12, 17]]);\n      }));\n\n      function initialize() {\n        return _ref.apply(this, arguments);\n      }\n\n      return initialize;\n    }()\n  }, {\n    key: 'refreshFiles',\n    value: function () {\n      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {\n        var _this = this;\n\n        var refreshQuery;\n        return _regenerator2.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                console.log('Refreshing files ...');\n                refreshQuery = new _jobQeue2.default(5);\n                // Scan directories\n\n                _context3.next = 4;\n                return this._directoryScanner.scanDirs(function (newFile) {\n                  return refreshQuery.queueJob((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {\n                    var file, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, artist;\n\n                    return _regenerator2.default.wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            _context2.prev = 0;\n                            _context2.next = 3;\n                            return _this._database.readFile(newFile.path);\n\n                          case 3:\n                            file = _context2.sent;\n\n                            if (!(file && newFile.lastModified <= file.lastModified)) {\n                              _context2.next = 7;\n                              break;\n                            }\n\n                            // If file exists in DB -> skip\n                            console.log('Skipping existing file ' + file.path + ' ...');\n                            return _context2.abrupt('return', null);\n\n                          case 7:\n                            _context2.next = 9;\n                            return _this._fileSystem.readFileBuffer(newFile.path);\n\n                          case 9:\n                            newFile.buffer = _context2.sent;\n                            _context2.next = 12;\n                            return _this._tagReader.readTags(newFile);\n\n                          case 12:\n                            newFile.track = _context2.sent;\n\n\n                            newFile.deleteBuffer();\n                            // Persist file in DB\n                            _context2.next = 16;\n                            return _this._database.persistFile(newFile);\n\n                          case 16:\n                            console.log('Added new file ' + newFile.path);\n\n                            _context2.next = 19;\n                            return _this._database.persistTrack(newFile.track);\n\n                          case 19:\n                            _context2.next = 21;\n                            return _this._database.persistAlbum(newFile.track.album);\n\n                          case 21:\n                            _context2.next = 23;\n                            return _this._database.persistArtist(newFile.track.album.artist);\n\n                          case 23:\n                            _iteratorNormalCompletion = true;\n                            _didIteratorError = false;\n                            _iteratorError = undefined;\n                            _context2.prev = 26;\n                            _iterator = (0, _getIterator3.default)(newFile.track.artists);\n\n                          case 28:\n                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                              _context2.next = 35;\n                              break;\n                            }\n\n                            artist = _step.value;\n                            _context2.next = 32;\n                            return _this._database.persistArtist(artist);\n\n                          case 32:\n                            _iteratorNormalCompletion = true;\n                            _context2.next = 28;\n                            break;\n\n                          case 35:\n                            _context2.next = 41;\n                            break;\n\n                          case 37:\n                            _context2.prev = 37;\n                            _context2.t0 = _context2['catch'](26);\n                            _didIteratorError = true;\n                            _iteratorError = _context2.t0;\n\n                          case 41:\n                            _context2.prev = 41;\n                            _context2.prev = 42;\n\n                            if (!_iteratorNormalCompletion && _iterator.return) {\n                              _iterator.return();\n                            }\n\n                          case 44:\n                            _context2.prev = 44;\n\n                            if (!_didIteratorError) {\n                              _context2.next = 47;\n                              break;\n                            }\n\n                            throw _iteratorError;\n\n                          case 47:\n                            return _context2.finish(44);\n\n                          case 48:\n                            return _context2.finish(41);\n\n                          case 49:\n                            _context2.next = 54;\n                            break;\n\n                          case 51:\n                            _context2.prev = 51;\n                            _context2.t1 = _context2['catch'](0);\n\n                            console.error(new Error('Could not handle file:\\n' + _context2.t1.stack));\n\n                          case 54:\n                          case 'end':\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2, _this, [[0, 51], [26, 37, 41, 49], [42,, 44, 48]]);\n                  })));\n                });\n\n              case 4:\n                console.log('Files refreshed.');\n\n              case 5:\n              case 'end':\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function refreshFiles() {\n        return _ref2.apply(this, arguments);\n      }\n\n      return refreshFiles;\n    }()\n  }, {\n    key: 'fileSystem',\n    set: function set(fileSystem) {\n      if (!(fileSystem instanceof _fileSystem2.default)) {\n        throw new Error('File system must be of class FileSystem.');\n      }\n      this._fileSystem = fileSystem;\n    }\n  }, {\n    key: 'webServer',\n    set: function set(webServer) {\n      if (!(webServer instanceof _webServer2.default)) {\n        throw new Error('Web server must be of class WebServer.');\n      }\n      this._webServer = webServer;\n    },\n    get: function get() {\n      return this._webServer;\n    }\n  }, {\n    key: 'database',\n    set: function set(database) {\n      if (!(database instanceof _database2.default)) {\n        throw new Error('Database must be of class Database.');\n      }\n      this._database = database;\n    }\n  }, {\n    key: 'webSocket',\n    set: function set(socket) {\n      this._webSocket = socket;\n    }\n  }]);\n  return MelCore;\n}();\n\nexports.Artist = _artist2.default;\nexports.Album = _album2.default;\nexports.Track = _track2.default;\nexports.File = _file2.default;\nexports.WebSocket = _webSocket2.default;\nexports.MelClientSocket = _melClientSocket2.default;\nexports.MelHttpService = _melHttpService2.default;\nexports.FileSystem = _fileSystem2.default;\nexports.WebServer = _webServer2.default;\nexports.Database = _database2.default;\nexports.MelCore = MelCore;\nexports.Response = _response2.default;\nexports.Request = _request2.default;\n\n//# sourceURL=webpack://mel-core/./src/core.js?");

/***/ }),

/***/ "./src/data/album.js":
/*!***************************!*\
  !*** ./src/data/album.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Album = function () {\n  function Album(id, artist, title, year) {\n    var tracks = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];\n    var featureArtists = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];\n    (0, _classCallCheck3.default)(this, Album);\n\n    this._id = id;\n    this._title = title;\n    this._year = year;\n    this._tracks = tracks;\n    this._artist = artist;\n    this._featureArtists = featureArtists;\n  }\n\n  (0, _createClass3.default)(Album, [{\n    key: \"addTrack\",\n    value: function addTrack(newTrack) {\n      newTrack.album = this;\n      if (this._tracks.findIndex(function (track) {\n        return track.id === newTrack.id;\n      }) === -1) {\n        this._tracks.push(newTrack);\n      }\n    }\n  }, {\n    key: \"addTracks\",\n    value: function addTracks(tracks) {\n      var _this = this;\n\n      tracks.forEach(function (track) {\n        return _this.addTrack(track);\n      });\n    }\n  }, {\n    key: \"addFeatureArtist\",\n    value: function addFeatureArtist(newArtist) {\n      if (this._featureArtists.findIndex(function (artist) {\n        return artist.id === newArtist.id;\n      }) === -1) {\n        this._featureArtists.push(newArtist);\n        newArtist.addFeatureAlbum(this);\n      }\n    }\n  }, {\n    key: \"addFeatureArtists\",\n    value: function addFeatureArtists(artists) {\n      var _this2 = this;\n\n      artists.forEach(function (artist) {\n        return _this2.addFeatureArtist(artist);\n      });\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"Album {\" + (\"title: \" + this.title + \", \") + (\"year: \" + this.year + \", \") + (\"trackCount: \" + this.tracks.length + \", \") + (\"artist: \" + this.artist.name + \", \") + (\"featureArtists: \" + this.featureArtists.map(function (artist) {\n        return artist.name;\n      }) + \", \") + (\"id: \" + this.id + \"}\");\n    }\n  }, {\n    key: \"artist\",\n    set: function set(artist) {\n      this._artist = artist;\n    },\n    get: function get() {\n      return this._artist;\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return this._title;\n    },\n    set: function set(value) {\n      this._title = value;\n    }\n  }, {\n    key: \"year\",\n    get: function get() {\n      return this._year;\n    },\n    set: function set(value) {\n      this._year = value;\n    }\n  }, {\n    key: \"tracks\",\n    get: function get() {\n      return this._tracks;\n    },\n    set: function set(value) {\n      this._tracks = value;\n    }\n  }, {\n    key: \"id\",\n    get: function get() {\n      return this._id;\n    },\n    set: function set(value) {\n      this._id = value;\n    }\n  }, {\n    key: \"featureArtists\",\n    get: function get() {\n      return this._featureArtists;\n    },\n    set: function set(value) {\n      this._featureArtists = value;\n    }\n  }]);\n  return Album;\n}();\n\nexports.default = Album;\n\n//# sourceURL=webpack://mel-core/./src/data/album.js?");

/***/ }),

/***/ "./src/data/artist.js":
/*!****************************!*\
  !*** ./src/data/artist.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Artist = function () {\n  function Artist(id, name) {\n    var albums = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n    var featureAlbums = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];\n    (0, _classCallCheck3.default)(this, Artist);\n\n    this._id = id;\n    this._name = name;\n    this._albums = albums;\n    this._featureAlbums = featureAlbums;\n  }\n\n  (0, _createClass3.default)(Artist, [{\n    key: \"addAlbum\",\n    value: function addAlbum(newAlbum) {\n      newAlbum.artist = this;\n      if (this._albums.findIndex(function (album) {\n        return album.id === newAlbum.id;\n      }) === -1) {\n        this._albums.push(newAlbum);\n      }\n    }\n  }, {\n    key: \"addAlbums\",\n    value: function addAlbums(albums) {\n      var _this = this;\n\n      albums.forEach(function (album) {\n        return _this.addAlbum(album);\n      });\n    }\n  }, {\n    key: \"addFeatureAlbum\",\n    value: function addFeatureAlbum(newAlbum) {\n      if (this._featureAlbums.findIndex(function (album) {\n        return album.id === newAlbum.id;\n      }) === -1) {\n        newAlbum.addFeatureArtist(this);\n        this._featureAlbums.push(newAlbum);\n      }\n    }\n  }, {\n    key: \"addFeatureAlbums\",\n    value: function addFeatureAlbums(albums) {\n      var _this2 = this;\n\n      albums.forEach(function (album) {\n        return _this2.addFeatureAlbum(album);\n      });\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"Artist {\" + (\"name: \" + this.name + \", \") + (\"albums: \" + this.albums.map(function (album) {\n        return album.title;\n      }) + \", \") + (\"featureAlbums: \" + this.featureAlbums.map(function (album) {\n        return album.title;\n      }) + \", \") + (\"id: \" + this.id + \"}\");\n    }\n  }, {\n    key: \"name\",\n    get: function get() {\n      return this._name;\n    },\n    set: function set(value) {\n      this._name = value;\n    }\n  }, {\n    key: \"albums\",\n    get: function get() {\n      return this._albums;\n    },\n    set: function set(value) {\n      this._albums = value;\n    }\n  }, {\n    key: \"id\",\n    get: function get() {\n      return this._id;\n    },\n    set: function set(value) {\n      this._id = value;\n    }\n  }, {\n    key: \"featureAlbums\",\n    get: function get() {\n      return this._featureAlbums;\n    },\n    set: function set(value) {\n      this._featureAlbums = value;\n    }\n  }]);\n  return Artist;\n}();\n\nexports.default = Artist;\n\n//# sourceURL=webpack://mel-core/./src/data/artist.js?");

/***/ }),

/***/ "./src/data/files/file.js":
/*!********************************!*\
  !*** ./src/data/files/file.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MP3 = 1;\nvar FLAC = 2;\n\nvar File = function () {\n  function File(path, type) {\n    var buffer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n    var lastModified = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n    var track = arguments[4];\n    (0, _classCallCheck3.default)(this, File);\n\n    this._path = path;\n    this._type = type;\n    this._buffer = buffer;\n    this._lastModified = lastModified;\n    this._track = track;\n  }\n\n  (0, _createClass3.default)(File, [{\n    key: \"deleteBuffer\",\n    value: function deleteBuffer() {\n      delete this._buffer;\n    }\n  }, {\n    key: \"path\",\n    get: function get() {\n      return this._path;\n    },\n    set: function set(value) {\n      this._path = value;\n    }\n  }, {\n    key: \"type\",\n    get: function get() {\n      return this._type;\n    },\n    set: function set(value) {\n      this._type = value;\n    }\n  }, {\n    key: \"buffer\",\n    get: function get() {\n      return this._buffer;\n    },\n    set: function set(value) {\n      this._buffer = value;\n    }\n  }, {\n    key: \"lastModified\",\n    get: function get() {\n      return this._lastModified;\n    },\n    set: function set(value) {\n      this._lastModified = value;\n    }\n  }, {\n    key: \"track\",\n    get: function get() {\n      return this._track;\n    },\n    set: function set(value) {\n      this._track = value;\n    }\n  }], [{\n    key: \"MP3\",\n    get: function get() {\n      return MP3;\n    }\n  }, {\n    key: \"FLAC\",\n    get: function get() {\n      return FLAC;\n    }\n  }]);\n  return File;\n}();\n\nexports.default = File;\n\n//# sourceURL=webpack://mel-core/./src/data/files/file.js?");

/***/ }),

/***/ "./src/data/track.js":
/*!***************************!*\
  !*** ./src/data/track.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Track = function () {\n  function Track(id) {\n    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n    var artists = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n    var album = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n    var number = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n    var discNumber = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;\n    (0, _classCallCheck3.default)(this, Track);\n\n    this._title = title;\n    this._artists = artists;\n    this._album = album;\n    this._number = number;\n    this._discNumber = discNumber;\n    this._id = id;\n  }\n\n  (0, _createClass3.default)(Track, [{\n    key: 'addArtist',\n    value: function addArtist(newArtist) {\n      if (this._artists.findIndex(function (artist) {\n        return artist.id === newArtist.id;\n      }) === -1) {\n        this._artists.push(newArtist);\n      }\n    }\n  }, {\n    key: 'toString',\n    value: function toString() {\n      return 'Track {' + ('title: ' + this.title + ', ') + ('artists: ' + this.artists.map(function (artist) {\n        return artist.name;\n      }) + ', ') + ('album: ' + this.album.name + ', ') + ('number: ' + this.number + ', ') + ('discNumber: ' + this.discNumber + ', ') + ('id: ' + this.id + '}');\n    }\n  }, {\n    key: 'title',\n    get: function get() {\n      return this._title;\n    },\n    set: function set(value) {\n      this._title = value;\n    }\n  }, {\n    key: 'artists',\n    get: function get() {\n      return this._artists;\n    }\n  }, {\n    key: 'artist',\n    set: function set(value) {\n      this._artists = value;\n    }\n  }, {\n    key: 'album',\n    get: function get() {\n      return this._album;\n    },\n    set: function set(value) {\n      this._album = value;\n    }\n  }, {\n    key: 'number',\n    get: function get() {\n      return this._number;\n    },\n    set: function set(value) {\n      this._number = value;\n    }\n  }, {\n    key: 'discNumber',\n    get: function get() {\n      return this._discNumber;\n    },\n    set: function set(value) {\n      this._discNumber = value;\n    }\n  }, {\n    key: 'id',\n    get: function get() {\n      return this._id;\n    },\n    set: function set(value) {\n      this._id = value;\n    }\n  }]);\n  return Track;\n}();\n\nexports.default = Track;\n\n//# sourceURL=webpack://mel-core/./src/data/track.js?");

/***/ }),

/***/ "./src/database/database.js":
/*!**********************************!*\
  !*** ./src/database/database.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _serializer = __webpack_require__(/*! ../utils/serializer */ \"./src/utils/serializer.js\");\n\nvar _serializer2 = _interopRequireDefault(_serializer);\n\nvar _deserializer = __webpack_require__(/*! ../utils/deserializer */ \"./src/utils/deserializer.js\");\n\nvar _deserializer2 = _interopRequireDefault(_deserializer);\n\nvar _jobQeue = __webpack_require__(/*! ../utils/job-qeue */ \"./src/utils/job-qeue.js\");\n\nvar _jobQeue2 = _interopRequireDefault(_jobQeue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar IDENTITY = 'id';\nvar MAX_READING_JOBS = 5;\nvar MAX_WRITING_JOBS = 1;\n\nvar Database = function () {\n  function Database() {\n    (0, _classCallCheck3.default)(this, Database);\n\n    this._readingQueue = new _jobQeue2.default(MAX_READING_JOBS);\n    this._queueReading = this._readingQueue.queueJob.bind(this._readingQueue);\n    this._writingQueue = new _jobQeue2.default(MAX_WRITING_JOBS);\n    this._queueWriting = this._writingQueue.queueJob.bind(this._writingQueue);\n    this._persistingFileQueue = new _jobQeue2.default(1);\n    this._queuePersistingFile = this._persistingFileQueue.queueJob.bind(this._persistingFileQueue);\n    this._persistingTrackQueue = new _jobQeue2.default(1);\n    this._queuePersistingTrack = this._persistingTrackQueue.queueJob.bind(this._persistingTrackQueue);\n    this._persistingAlbumQueue = new _jobQeue2.default(1);\n    this._queuePersistingAlbum = this._persistingAlbumQueue.queueJob.bind(this._persistingAlbumQueue);\n    this._persistingArtistQueue = new _jobQeue2.default(1);\n    this._queuePersistingArtist = this._persistingArtistQueue.queueJob.bind(this._persistingArtistQueue);\n  }\n\n  (0, _createClass3.default)(Database, [{\n    key: 'initialize',\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this._loadDatabase();\n\n              case 2:\n                _context.next = 4;\n                return this._readDatabaseMetaData(IDENTITY);\n\n              case 4:\n                this._identity = _context.sent;\n\n                if (this._identity) {\n                  _context.next = 9;\n                  break;\n                }\n\n                this._identity = this._generateIdentity();\n                _context.next = 9;\n                return this._updateDatabaseMetaData(IDENTITY, this._identity);\n\n              case 9:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function initialize() {\n        return _ref.apply(this, arguments);\n      }\n\n      return initialize;\n    }()\n  }, {\n    key: '_generateIdentity',\n    value: function _generateIdentity() {\n      var currentDate = new Date().valueOf().toString();\n      var random = Math.random().toString();\n      return 'tmp';\n    }\n  }, {\n    key: 'createTrack',\n\n\n    // Track //\n\n    value: function () {\n      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(track) {\n        var _this = this;\n\n        var trackJson;\n        return _regenerator2.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                trackJson = _serializer2.default.serializeTrack(track);\n                return _context2.abrupt('return', this._queueWriting(function () {\n                  return _this._createTrack(trackJson);\n                }));\n\n              case 2:\n              case 'end':\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function createTrack(_x) {\n        return _ref2.apply(this, arguments);\n      }\n\n      return createTrack;\n    }()\n  }, {\n    key: '_createTrack',\n    value: function () {\n      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(trackJson) {\n        return _regenerator2.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                throw new Error('Database._createTrack(trackJson) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function _createTrack(_x2) {\n        return _ref3.apply(this, arguments);\n      }\n\n      return _createTrack;\n    }()\n  }, {\n    key: 'readTrack',\n    value: function () {\n      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(trackId) {\n        var _this2 = this;\n\n        var trackJson;\n        return _regenerator2.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return this._queueReading(function () {\n                  return _this2._readTrack(trackId);\n                });\n\n              case 2:\n                trackJson = _context4.sent;\n                return _context4.abrupt('return', _deserializer2.default.deserializeTrack(trackJson));\n\n              case 4:\n              case 'end':\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      function readTrack(_x3) {\n        return _ref4.apply(this, arguments);\n      }\n\n      return readTrack;\n    }()\n  }, {\n    key: '_readTrack',\n    value: function () {\n      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(trackId) {\n        return _regenerator2.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                throw new Error('Database._readTrack(trackId) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context5.stop();\n            }\n          }\n        }, _callee5, this);\n      }));\n\n      function _readTrack(_x4) {\n        return _ref5.apply(this, arguments);\n      }\n\n      return _readTrack;\n    }()\n  }, {\n    key: 'updateTrack',\n    value: function () {\n      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(track) {\n        var _this3 = this;\n\n        var trackJson;\n        return _regenerator2.default.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                trackJson = _serializer2.default.serializeTrack(track);\n                return _context6.abrupt('return', this._queueWriting(function () {\n                  return _this3._updateTrack(trackJson);\n                }));\n\n              case 2:\n              case 'end':\n                return _context6.stop();\n            }\n          }\n        }, _callee6, this);\n      }));\n\n      function updateTrack(_x5) {\n        return _ref6.apply(this, arguments);\n      }\n\n      return updateTrack;\n    }()\n  }, {\n    key: '_updateTrack',\n    value: function () {\n      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(trackJson) {\n        return _regenerator2.default.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                throw new Error('Database._updateTrack(trackJson) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context7.stop();\n            }\n          }\n        }, _callee7, this);\n      }));\n\n      function _updateTrack(_x6) {\n        return _ref7.apply(this, arguments);\n      }\n\n      return _updateTrack;\n    }()\n  }, {\n    key: 'persistTrack',\n    value: function () {\n      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(track) {\n        var _this4 = this;\n\n        return _regenerator2.default.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                return _context8.abrupt('return', this._queuePersistingTrack(function () {\n                  return _this4._persistTrack(track);\n                }));\n\n              case 1:\n              case 'end':\n                return _context8.stop();\n            }\n          }\n        }, _callee8, this);\n      }));\n\n      function persistTrack(_x7) {\n        return _ref8.apply(this, arguments);\n      }\n\n      return persistTrack;\n    }()\n  }, {\n    key: '_persistTrack',\n    value: function () {\n      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(track) {\n        return _regenerator2.default.wrap(function _callee9$(_context9) {\n          while (1) {\n            switch (_context9.prev = _context9.next) {\n              case 0:\n                _context9.prev = 0;\n                _context9.next = 3;\n                return this.readTrack(track.id);\n\n              case 3:\n                if (!_context9.sent) {\n                  _context9.next = 7;\n                  break;\n                }\n\n                return _context9.abrupt('return', this.updateTrack(track));\n\n              case 7:\n                return _context9.abrupt('return', this.createTrack(track));\n\n              case 8:\n                _context9.next = 13;\n                break;\n\n              case 10:\n                _context9.prev = 10;\n                _context9.t0 = _context9['catch'](0);\n                throw new Error('Could not persist track: ' + _context9.t0);\n\n              case 13:\n              case 'end':\n                return _context9.stop();\n            }\n          }\n        }, _callee9, this, [[0, 10]]);\n      }));\n\n      function _persistTrack(_x8) {\n        return _ref9.apply(this, arguments);\n      }\n\n      return _persistTrack;\n    }()\n\n    // Album\n\n  }, {\n    key: 'createAlbum',\n    value: function () {\n      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(album) {\n        var _this5 = this;\n\n        var albumJson;\n        return _regenerator2.default.wrap(function _callee10$(_context10) {\n          while (1) {\n            switch (_context10.prev = _context10.next) {\n              case 0:\n                albumJson = _serializer2.default.serializeAlbum(album);\n                return _context10.abrupt('return', this._queueWriting(function () {\n                  return _this5._createAlbum(albumJson);\n                }));\n\n              case 2:\n              case 'end':\n                return _context10.stop();\n            }\n          }\n        }, _callee10, this);\n      }));\n\n      function createAlbum(_x9) {\n        return _ref10.apply(this, arguments);\n      }\n\n      return createAlbum;\n    }()\n  }, {\n    key: '_createAlbum',\n    value: function () {\n      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(albumJson) {\n        return _regenerator2.default.wrap(function _callee11$(_context11) {\n          while (1) {\n            switch (_context11.prev = _context11.next) {\n              case 0:\n                throw new Error('Database._createAlbum(albumJson) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context11.stop();\n            }\n          }\n        }, _callee11, this);\n      }));\n\n      function _createAlbum(_x10) {\n        return _ref11.apply(this, arguments);\n      }\n\n      return _createAlbum;\n    }()\n  }, {\n    key: 'readAlbum',\n    value: function () {\n      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(albumId) {\n        var _this6 = this;\n\n        var albumJson;\n        return _regenerator2.default.wrap(function _callee12$(_context12) {\n          while (1) {\n            switch (_context12.prev = _context12.next) {\n              case 0:\n                _context12.next = 2;\n                return this._queueReading(function () {\n                  return _this6._readAlbum(albumId);\n                });\n\n              case 2:\n                albumJson = _context12.sent;\n                return _context12.abrupt('return', _deserializer2.default.deserializeAlbum(albumJson));\n\n              case 4:\n              case 'end':\n                return _context12.stop();\n            }\n          }\n        }, _callee12, this);\n      }));\n\n      function readAlbum(_x11) {\n        return _ref12.apply(this, arguments);\n      }\n\n      return readAlbum;\n    }()\n  }, {\n    key: '_readAlbum',\n    value: function () {\n      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(albumId) {\n        return _regenerator2.default.wrap(function _callee13$(_context13) {\n          while (1) {\n            switch (_context13.prev = _context13.next) {\n              case 0:\n                throw new Error('Database._readAlbum(albumId) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context13.stop();\n            }\n          }\n        }, _callee13, this);\n      }));\n\n      function _readAlbum(_x12) {\n        return _ref13.apply(this, arguments);\n      }\n\n      return _readAlbum;\n    }()\n  }, {\n    key: 'updateAlbum',\n    value: function () {\n      var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(album) {\n        var _this7 = this;\n\n        var albumJson;\n        return _regenerator2.default.wrap(function _callee14$(_context14) {\n          while (1) {\n            switch (_context14.prev = _context14.next) {\n              case 0:\n                albumJson = _serializer2.default.serializeAlbum(album);\n                return _context14.abrupt('return', this._queueWriting(function () {\n                  return _this7._updateAlbum(albumJson);\n                }));\n\n              case 2:\n              case 'end':\n                return _context14.stop();\n            }\n          }\n        }, _callee14, this);\n      }));\n\n      function updateAlbum(_x13) {\n        return _ref14.apply(this, arguments);\n      }\n\n      return updateAlbum;\n    }()\n  }, {\n    key: '_updateAlbum',\n    value: function () {\n      var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(albumJson) {\n        return _regenerator2.default.wrap(function _callee15$(_context15) {\n          while (1) {\n            switch (_context15.prev = _context15.next) {\n              case 0:\n                throw new Error('Database._updateAlbum(albumJson) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context15.stop();\n            }\n          }\n        }, _callee15, this);\n      }));\n\n      function _updateAlbum(_x14) {\n        return _ref15.apply(this, arguments);\n      }\n\n      return _updateAlbum;\n    }()\n  }, {\n    key: 'persistAlbum',\n    value: function () {\n      var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(album) {\n        var _this8 = this;\n\n        return _regenerator2.default.wrap(function _callee16$(_context16) {\n          while (1) {\n            switch (_context16.prev = _context16.next) {\n              case 0:\n                return _context16.abrupt('return', this._queuePersistingAlbum(function () {\n                  return _this8._persistAlbum(album);\n                }));\n\n              case 1:\n              case 'end':\n                return _context16.stop();\n            }\n          }\n        }, _callee16, this);\n      }));\n\n      function persistAlbum(_x15) {\n        return _ref16.apply(this, arguments);\n      }\n\n      return persistAlbum;\n    }()\n  }, {\n    key: '_persistAlbum',\n    value: function () {\n      var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(album) {\n        var readAlbum;\n        return _regenerator2.default.wrap(function _callee17$(_context17) {\n          while (1) {\n            switch (_context17.prev = _context17.next) {\n              case 0:\n                _context17.prev = 0;\n                _context17.next = 3;\n                return this.readAlbum(album.id);\n\n              case 3:\n                readAlbum = _context17.sent;\n\n                if (!readAlbum) {\n                  _context17.next = 10;\n                  break;\n                }\n\n                readAlbum.addTracks(album.tracks);\n                readAlbum.addFeatureArtists(album.featureArtists);\n                return _context17.abrupt('return', this.updateAlbum(readAlbum));\n\n              case 10:\n                return _context17.abrupt('return', this.createAlbum(album));\n\n              case 11:\n                _context17.next = 16;\n                break;\n\n              case 13:\n                _context17.prev = 13;\n                _context17.t0 = _context17['catch'](0);\n                throw new Error('Could not persist album: ' + _context17.t0);\n\n              case 16:\n              case 'end':\n                return _context17.stop();\n            }\n          }\n        }, _callee17, this, [[0, 13]]);\n      }));\n\n      function _persistAlbum(_x16) {\n        return _ref17.apply(this, arguments);\n      }\n\n      return _persistAlbum;\n    }()\n\n    // Artist\n\n  }, {\n    key: 'createArtist',\n    value: function () {\n      var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(artist) {\n        var _this9 = this;\n\n        var artistJson;\n        return _regenerator2.default.wrap(function _callee18$(_context18) {\n          while (1) {\n            switch (_context18.prev = _context18.next) {\n              case 0:\n                artistJson = _serializer2.default.serializeArtist(artist);\n                return _context18.abrupt('return', this._queueWriting(function () {\n                  return _this9._createArtist(artistJson);\n                }));\n\n              case 2:\n              case 'end':\n                return _context18.stop();\n            }\n          }\n        }, _callee18, this);\n      }));\n\n      function createArtist(_x17) {\n        return _ref18.apply(this, arguments);\n      }\n\n      return createArtist;\n    }()\n  }, {\n    key: '_createArtist',\n    value: function () {\n      var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19(artistJson) {\n        return _regenerator2.default.wrap(function _callee19$(_context19) {\n          while (1) {\n            switch (_context19.prev = _context19.next) {\n              case 0:\n                throw new Error('Database._createArtist(artistJson) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context19.stop();\n            }\n          }\n        }, _callee19, this);\n      }));\n\n      function _createArtist(_x18) {\n        return _ref19.apply(this, arguments);\n      }\n\n      return _createArtist;\n    }()\n  }, {\n    key: 'readArtist',\n    value: function () {\n      var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20(artistId) {\n        var _this10 = this;\n\n        var artistJson;\n        return _regenerator2.default.wrap(function _callee20$(_context20) {\n          while (1) {\n            switch (_context20.prev = _context20.next) {\n              case 0:\n                _context20.next = 2;\n                return this._queueReading(function () {\n                  return _this10._readArtist(artistId);\n                });\n\n              case 2:\n                artistJson = _context20.sent;\n                return _context20.abrupt('return', _deserializer2.default.deserializeArtist(artistJson));\n\n              case 4:\n              case 'end':\n                return _context20.stop();\n            }\n          }\n        }, _callee20, this);\n      }));\n\n      function readArtist(_x19) {\n        return _ref20.apply(this, arguments);\n      }\n\n      return readArtist;\n    }()\n  }, {\n    key: '_readArtist',\n    value: function () {\n      var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21(artistId) {\n        return _regenerator2.default.wrap(function _callee21$(_context21) {\n          while (1) {\n            switch (_context21.prev = _context21.next) {\n              case 0:\n                throw new Error('Database._readArtist(artistId) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context21.stop();\n            }\n          }\n        }, _callee21, this);\n      }));\n\n      function _readArtist(_x20) {\n        return _ref21.apply(this, arguments);\n      }\n\n      return _readArtist;\n    }()\n  }, {\n    key: 'updateArtist',\n    value: function () {\n      var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22(artist) {\n        var _this11 = this;\n\n        var artistJson;\n        return _regenerator2.default.wrap(function _callee22$(_context22) {\n          while (1) {\n            switch (_context22.prev = _context22.next) {\n              case 0:\n                artistJson = _serializer2.default.serializeArtist(artist);\n                return _context22.abrupt('return', this._queueWriting(function () {\n                  return _this11._updateArtist(artistJson);\n                }));\n\n              case 2:\n              case 'end':\n                return _context22.stop();\n            }\n          }\n        }, _callee22, this);\n      }));\n\n      function updateArtist(_x21) {\n        return _ref22.apply(this, arguments);\n      }\n\n      return updateArtist;\n    }()\n  }, {\n    key: '_updateArtist',\n    value: function () {\n      var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23(artistJson) {\n        return _regenerator2.default.wrap(function _callee23$(_context23) {\n          while (1) {\n            switch (_context23.prev = _context23.next) {\n              case 0:\n                throw new Error('Database._updateArtist(artistJson) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context23.stop();\n            }\n          }\n        }, _callee23, this);\n      }));\n\n      function _updateArtist(_x22) {\n        return _ref23.apply(this, arguments);\n      }\n\n      return _updateArtist;\n    }()\n  }, {\n    key: 'readArtists',\n    value: function () {\n      var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24() {\n        var _this12 = this;\n\n        var artistsJson;\n        return _regenerator2.default.wrap(function _callee24$(_context24) {\n          while (1) {\n            switch (_context24.prev = _context24.next) {\n              case 0:\n                _context24.next = 2;\n                return this._queueReading(function () {\n                  return _this12._readArtists();\n                });\n\n              case 2:\n                artistsJson = _context24.sent;\n                return _context24.abrupt('return', _deserializer2.default.deserializeArtists(artistsJson));\n\n              case 4:\n              case 'end':\n                return _context24.stop();\n            }\n          }\n        }, _callee24, this);\n      }));\n\n      function readArtists() {\n        return _ref24.apply(this, arguments);\n      }\n\n      return readArtists;\n    }()\n  }, {\n    key: '_readArtists',\n    value: function () {\n      var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25() {\n        return _regenerator2.default.wrap(function _callee25$(_context25) {\n          while (1) {\n            switch (_context25.prev = _context25.next) {\n              case 0:\n                throw new Error('Database._readArtists() not implemented!');\n\n              case 1:\n              case 'end':\n                return _context25.stop();\n            }\n          }\n        }, _callee25, this);\n      }));\n\n      function _readArtists() {\n        return _ref25.apply(this, arguments);\n      }\n\n      return _readArtists;\n    }()\n  }, {\n    key: 'persistArtist',\n    value: function () {\n      var _ref26 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee26(artist) {\n        var _this13 = this;\n\n        return _regenerator2.default.wrap(function _callee26$(_context26) {\n          while (1) {\n            switch (_context26.prev = _context26.next) {\n              case 0:\n                return _context26.abrupt('return', this._queuePersistingArtist(function () {\n                  return _this13._persistArtist(artist);\n                }));\n\n              case 1:\n              case 'end':\n                return _context26.stop();\n            }\n          }\n        }, _callee26, this);\n      }));\n\n      function persistArtist(_x23) {\n        return _ref26.apply(this, arguments);\n      }\n\n      return persistArtist;\n    }()\n  }, {\n    key: '_persistArtist',\n    value: function () {\n      var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee27(artist) {\n        var readArtist;\n        return _regenerator2.default.wrap(function _callee27$(_context27) {\n          while (1) {\n            switch (_context27.prev = _context27.next) {\n              case 0:\n                _context27.prev = 0;\n                _context27.next = 3;\n                return this.readArtist(artist.id);\n\n              case 3:\n                readArtist = _context27.sent;\n\n                if (!readArtist) {\n                  _context27.next = 11;\n                  break;\n                }\n\n                readArtist.addAlbums(artist.albums);\n                readArtist.addFeatureAlbums(artist.featureAlbums);\n                _context27.next = 9;\n                return this.updateArtist(readArtist);\n\n              case 9:\n                _context27.next = 13;\n                break;\n\n              case 11:\n                _context27.next = 13;\n                return this.createArtist(artist);\n\n              case 13:\n                _context27.next = 18;\n                break;\n\n              case 15:\n                _context27.prev = 15;\n                _context27.t0 = _context27['catch'](0);\n                throw new Error('Could not persist artist:\\n' + _context27.t0);\n\n              case 18:\n              case 'end':\n                return _context27.stop();\n            }\n          }\n        }, _callee27, this, [[0, 15]]);\n      }));\n\n      function _persistArtist(_x24) {\n        return _ref27.apply(this, arguments);\n      }\n\n      return _persistArtist;\n    }()\n\n    // General\n\n  }, {\n    key: '_loadDatabase',\n    value: function () {\n      var _ref28 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee28() {\n        return _regenerator2.default.wrap(function _callee28$(_context28) {\n          while (1) {\n            switch (_context28.prev = _context28.next) {\n              case 0:\n                throw new Error('Database._loadDatabase() is not implemented!');\n\n              case 1:\n              case 'end':\n                return _context28.stop();\n            }\n          }\n        }, _callee28, this);\n      }));\n\n      function _loadDatabase() {\n        return _ref28.apply(this, arguments);\n      }\n\n      return _loadDatabase;\n    }()\n\n    // File\n\n  }, {\n    key: 'createFile',\n    value: function () {\n      var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee29(file) {\n        var _this14 = this;\n\n        var fileJson;\n        return _regenerator2.default.wrap(function _callee29$(_context29) {\n          while (1) {\n            switch (_context29.prev = _context29.next) {\n              case 0:\n                fileJson = _serializer2.default.serializeFile(file);\n                return _context29.abrupt('return', this._queueWriting(function () {\n                  return _this14._createFile(fileJson);\n                }));\n\n              case 2:\n              case 'end':\n                return _context29.stop();\n            }\n          }\n        }, _callee29, this);\n      }));\n\n      function createFile(_x25) {\n        return _ref29.apply(this, arguments);\n      }\n\n      return createFile;\n    }()\n  }, {\n    key: '_createFile',\n    value: function () {\n      var _ref30 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee30(fileJson) {\n        return _regenerator2.default.wrap(function _callee30$(_context30) {\n          while (1) {\n            switch (_context30.prev = _context30.next) {\n              case 0:\n                throw new Error('Database._createFile(fileJson) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context30.stop();\n            }\n          }\n        }, _callee30, this);\n      }));\n\n      function _createFile(_x26) {\n        return _ref30.apply(this, arguments);\n      }\n\n      return _createFile;\n    }()\n  }, {\n    key: 'readFile',\n    value: function () {\n      var _ref31 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee31(filePath) {\n        var _this15 = this;\n\n        var fileJson;\n        return _regenerator2.default.wrap(function _callee31$(_context31) {\n          while (1) {\n            switch (_context31.prev = _context31.next) {\n              case 0:\n                _context31.next = 2;\n                return this._queueReading(function () {\n                  return _this15._readFile(filePath);\n                });\n\n              case 2:\n                fileJson = _context31.sent;\n                return _context31.abrupt('return', _deserializer2.default.deserializeFile(fileJson));\n\n              case 4:\n              case 'end':\n                return _context31.stop();\n            }\n          }\n        }, _callee31, this);\n      }));\n\n      function readFile(_x27) {\n        return _ref31.apply(this, arguments);\n      }\n\n      return readFile;\n    }()\n  }, {\n    key: '_readFile',\n    value: function () {\n      var _ref32 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee32(filePath) {\n        return _regenerator2.default.wrap(function _callee32$(_context32) {\n          while (1) {\n            switch (_context32.prev = _context32.next) {\n              case 0:\n                throw new Error('Database._readFile(filePath) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context32.stop();\n            }\n          }\n        }, _callee32, this);\n      }));\n\n      function _readFile(_x28) {\n        return _ref32.apply(this, arguments);\n      }\n\n      return _readFile;\n    }()\n  }, {\n    key: 'readFilesByTrackId',\n    value: function () {\n      var _ref33 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee33(trackId) {\n        var _this16 = this;\n\n        var filesJson;\n        return _regenerator2.default.wrap(function _callee33$(_context33) {\n          while (1) {\n            switch (_context33.prev = _context33.next) {\n              case 0:\n                _context33.next = 2;\n                return this._queueReading(function () {\n                  return _this16._readFilesByTrackId(trackId);\n                });\n\n              case 2:\n                filesJson = _context33.sent;\n                return _context33.abrupt('return', _deserializer2.default.deserializeFiles(filesJson));\n\n              case 4:\n              case 'end':\n                return _context33.stop();\n            }\n          }\n        }, _callee33, this);\n      }));\n\n      function readFilesByTrackId(_x29) {\n        return _ref33.apply(this, arguments);\n      }\n\n      return readFilesByTrackId;\n    }()\n  }, {\n    key: '_readFilesByTrackId',\n    value: function () {\n      var _ref34 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee34(trackId) {\n        return _regenerator2.default.wrap(function _callee34$(_context34) {\n          while (1) {\n            switch (_context34.prev = _context34.next) {\n              case 0:\n                throw new Error('Database._readFilesByTrackId(trackId) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context34.stop();\n            }\n          }\n        }, _callee34, this);\n      }));\n\n      function _readFilesByTrackId(_x30) {\n        return _ref34.apply(this, arguments);\n      }\n\n      return _readFilesByTrackId;\n    }()\n  }, {\n    key: 'updateFile',\n    value: function () {\n      var _ref35 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee35(file) {\n        var _this17 = this;\n\n        var fileJson;\n        return _regenerator2.default.wrap(function _callee35$(_context35) {\n          while (1) {\n            switch (_context35.prev = _context35.next) {\n              case 0:\n                fileJson = _serializer2.default.serializeFile(file);\n                return _context35.abrupt('return', this._queueWriting(function () {\n                  return _this17._updateFile(fileJson);\n                }));\n\n              case 2:\n              case 'end':\n                return _context35.stop();\n            }\n          }\n        }, _callee35, this);\n      }));\n\n      function updateFile(_x31) {\n        return _ref35.apply(this, arguments);\n      }\n\n      return updateFile;\n    }()\n  }, {\n    key: '_updateFile',\n    value: function () {\n      var _ref36 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee36(fileJson) {\n        return _regenerator2.default.wrap(function _callee36$(_context36) {\n          while (1) {\n            switch (_context36.prev = _context36.next) {\n              case 0:\n                throw new Error('Database._updateFile(fileJson) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context36.stop();\n            }\n          }\n        }, _callee36, this);\n      }));\n\n      function _updateFile(_x32) {\n        return _ref36.apply(this, arguments);\n      }\n\n      return _updateFile;\n    }()\n  }, {\n    key: 'persistFile',\n    value: function () {\n      var _ref37 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee37(file) {\n        var _this18 = this;\n\n        return _regenerator2.default.wrap(function _callee37$(_context37) {\n          while (1) {\n            switch (_context37.prev = _context37.next) {\n              case 0:\n                return _context37.abrupt('return', this._queuePersistingFile(function () {\n                  return _this18._persistFile(file);\n                }));\n\n              case 1:\n              case 'end':\n                return _context37.stop();\n            }\n          }\n        }, _callee37, this);\n      }));\n\n      function persistFile(_x33) {\n        return _ref37.apply(this, arguments);\n      }\n\n      return persistFile;\n    }()\n  }, {\n    key: '_persistFile',\n    value: function () {\n      var _ref38 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee38(file) {\n        return _regenerator2.default.wrap(function _callee38$(_context38) {\n          while (1) {\n            switch (_context38.prev = _context38.next) {\n              case 0:\n                _context38.next = 2;\n                return this.readFile(file.id);\n\n              case 2:\n                if (_context38.sent) {\n                  _context38.next = 6;\n                  break;\n                }\n\n                return _context38.abrupt('return', this.createFile(file));\n\n              case 6:\n                return _context38.abrupt('return', this.updateFile(file));\n\n              case 7:\n              case 'end':\n                return _context38.stop();\n            }\n          }\n        }, _callee38, this);\n      }));\n\n      function _persistFile(_x34) {\n        return _ref38.apply(this, arguments);\n      }\n\n      return _persistFile;\n    }()\n\n    // Meta Data\n\n  }, {\n    key: '_readDatabaseMetaData',\n    value: function () {\n      var _ref39 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee39(key) {\n        return _regenerator2.default.wrap(function _callee39$(_context39) {\n          while (1) {\n            switch (_context39.prev = _context39.next) {\n              case 0:\n                throw new Error('Database._readDatabaseMetadata(key) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context39.stop();\n            }\n          }\n        }, _callee39, this);\n      }));\n\n      function _readDatabaseMetaData(_x35) {\n        return _ref39.apply(this, arguments);\n      }\n\n      return _readDatabaseMetaData;\n    }()\n  }, {\n    key: '_updateDatabaseMetaData',\n    value: function () {\n      var _ref40 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee40(key, value) {\n        return _regenerator2.default.wrap(function _callee40$(_context40) {\n          while (1) {\n            switch (_context40.prev = _context40.next) {\n              case 0:\n                throw new Error('Database._updateDatabaseMetaData(key, value) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context40.stop();\n            }\n          }\n        }, _callee40, this);\n      }));\n\n      function _updateDatabaseMetaData(_x36, _x37) {\n        return _ref40.apply(this, arguments);\n      }\n\n      return _updateDatabaseMetaData;\n    }()\n  }, {\n    key: 'identity',\n    get: function get() {\n      return this._identity;\n    }\n  }]);\n  return Database;\n}();\n\nexports.default = Database;\n\n//# sourceURL=webpack://mel-core/./src/database/database.js?");

/***/ }),

/***/ "./src/database/id-generator.js":
/*!**************************************!*\
  !*** ./src/database/id-generator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.IdGenerator = undefined;\n\nvar _artist = __webpack_require__(/*! ../data/artist */ \"./src/data/artist.js\");\n\nvar _artist2 = _interopRequireDefault(_artist);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar IdGenerator = exports.IdGenerator = {\n  getArtistId: function getArtistId(artist) {\n    // Check if all necessary information are provided\n    if (artist.name === undefined || artist.name === '') {\n      return 'undefined';\n    }\n\n    return artist.name.toLowerCase().replace(/ und /g, '&').replace(/ and /g, '&').replace(/\\$/g, 's').replace(/€/g, 'e').replace(/¥/g, 'y').replace(/[^a-zA-Z0-9-&]/g, '');\n  },\n  getAlbumId: function getAlbumId(album, artist) {\n    var title = 'undefined';\n    var year = 'undefined';\n    var artistId = 'undefined';\n\n    // Get the artist\n    if (!artist && album.artist) {\n      artistId = album.artist;\n    }\n\n    // Make sure artist has a valid id\n    if (artist && artist.id) {\n      artistId = artist.id;\n    } else {\n      artistId = IdGenerator.getArtistId(artist);\n    }\n\n    if (album && album.title) {\n      title = album.title.replace(/\\$/g, 's').replace(/€/g, 'e').replace(/¥/g, 'y').replace(/[^a-zA-Z0-9-&]/g, '').toLowerCase();\n    }\n\n    if (album && album.year) {\n      year = album.year;\n    }\n\n    return title + year + artistId;\n  },\n\n  getTrackId: function getTrackId(track, album, artist) {\n    var title = 'undefined';\n    var number = 'undefined';\n    var albumId = 'undefined';\n\n    // Get the album\n    if (!album && track.album) {\n      album = track.album;\n    }\n\n    // Make sure album has valid id\n    if (album && album.id) {\n      albumId = album.id;\n    } else {\n      // get the artist to generate id\n      if (!artist && track.artist) {\n        // if album.artist is set, IdGenerator.getAlbumId will find it\n        artist = track.artist;\n      }\n      albumId = IdGenerator.getAlbumId(album, artist);\n    }\n\n    if (track && track.title) {\n      title = track.title.replace(/\\$/g, 's').replace(/€/g, 'e').replace(/¥/g, 'y').replace(/[^a-zA-Z0-9-&]/g, '').toLowerCase();\n    }\n\n    if (track && track.number) {\n      number = track.number;\n    }\n\n    return title + number + albumId;\n  }\n};\n\n//# sourceURL=webpack://mel-core/./src/database/id-generator.js?");

/***/ }),

/***/ "./src/files/directory-scanner.js":
/*!****************************************!*\
  !*** ./src/files/directory-scanner.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _file = __webpack_require__(/*! ../data/files/file */ \"./src/data/files/file.js\");\n\nvar _file2 = _interopRequireDefault(_file);\n\nvar _jobQeue = __webpack_require__(/*! ../utils/job-qeue */ \"./src/utils/job-qeue.js\");\n\nvar _jobQeue2 = _interopRequireDefault(_jobQeue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MAX_READING_JOBS = 1;\n\nvar DirectoryScanner = function () {\n  function DirectoryScanner(fileSystem, configuration) {\n    (0, _classCallCheck3.default)(this, DirectoryScanner);\n\n    this._fileSystem = fileSystem;\n    this._config = configuration;\n    this._readingQueue = new _jobQeue2.default(MAX_READING_JOBS);\n    this._queueReading = this._readingQueue.queueJob.bind(this._readingQueue);\n  }\n\n  (0, _createClass3.default)(DirectoryScanner, [{\n    key: 'scanDirs',\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(callback) {\n        var _this = this;\n\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt('return', _promise2.default.all(this._config.directories.map(function (directory) {\n                  return _this.scanDir(directory, callback);\n                })));\n\n              case 1:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function scanDirs(_x) {\n        return _ref.apply(this, arguments);\n      }\n\n      return scanDirs;\n    }()\n  }, {\n    key: 'scanDir',\n    value: function () {\n      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(directory, callback) {\n        var _this2 = this;\n\n        var files;\n        return _regenerator2.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                files = [];\n                _context3.prev = 1;\n                _context3.next = 4;\n                return this._queueReading(function () {\n                  return _this2._fileSystem.readDir(directory);\n                });\n\n              case 4:\n                files = _context3.sent;\n                _context3.next = 10;\n                break;\n\n              case 7:\n                _context3.prev = 7;\n                _context3.t0 = _context3['catch'](1);\n                throw Error('Could not read directory: ' + _context3.t0);\n\n              case 10:\n                return _context3.abrupt('return', _promise2.default.all(files.map(function () {\n                  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(file) {\n                    var path, stats, fileType;\n                    return _regenerator2.default.wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            path = directory + '/' + file;\n                            _context2.next = 3;\n                            return _this2._queueReading(function () {\n                              return _this2._fileSystem.stats(path);\n                            });\n\n                          case 3:\n                            stats = _context2.sent;\n\n                            if (!stats.isDirectory) {\n                              _context2.next = 8;\n                              break;\n                            }\n\n                            return _context2.abrupt('return', _this2.scanDir(path, callback));\n\n                          case 8:\n                            fileType = _this2._determineFileType(path);\n\n                            callback(new _file2.default(path, fileType, null, stats.lastModified));\n\n                          case 10:\n                          case 'end':\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2, _this2);\n                  }));\n\n                  return function (_x4) {\n                    return _ref3.apply(this, arguments);\n                  };\n                }())));\n\n              case 11:\n              case 'end':\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this, [[1, 7]]);\n      }));\n\n      function scanDir(_x2, _x3) {\n        return _ref2.apply(this, arguments);\n      }\n\n      return scanDir;\n    }()\n  }, {\n    key: '_determineFileType',\n    value: function _determineFileType(path) {\n      switch (path.split('.').pop().toLowerCase()) {\n        case 'mp3':\n          return _file2.default.MP3;\n        case 'flac':\n          return _file2.default.FLAC;\n      }\n    }\n  }]);\n  return DirectoryScanner;\n}();\n\nexports.default = DirectoryScanner;\n\n//# sourceURL=webpack://mel-core/./src/files/directory-scanner.js?");

/***/ }),

/***/ "./src/files/file-system.js":
/*!**********************************!*\
  !*** ./src/files/file-system.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FileSystem = function () {\n  function FileSystem() {\n    (0, _classCallCheck3.default)(this, FileSystem);\n  }\n\n  (0, _createClass3.default)(FileSystem, [{\n    key: 'stats',\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(filePath) {\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                throw new Error('FileSystem.stats(filePath) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function stats(_x) {\n        return _ref.apply(this, arguments);\n      }\n\n      return stats;\n    }()\n  }, {\n    key: 'readFile',\n    value: function () {\n      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(filePath) {\n        return _regenerator2.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                throw new Error('FileSystem.readFile(filePath) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function readFile(_x2) {\n        return _ref2.apply(this, arguments);\n      }\n\n      return readFile;\n    }()\n  }, {\n    key: 'writeFile',\n    value: function () {\n      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(filePath, data) {\n        return _regenerator2.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                throw new Error('FileSystem.writeFile(filePath, data) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function writeFile(_x3, _x4) {\n        return _ref3.apply(this, arguments);\n      }\n\n      return writeFile;\n    }()\n  }, {\n    key: 'readDir',\n    value: function () {\n      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(directoryPath) {\n        return _regenerator2.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                throw new Error('FileSystem.readDir(directoryPath) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      function readDir(_x5) {\n        return _ref4.apply(this, arguments);\n      }\n\n      return readDir;\n    }()\n  }, {\n    key: 'readFileBuffer',\n    value: function () {\n      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(filePath) {\n        return _regenerator2.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                throw new Error('FileSystem.readFileBuffer(filePath) not implemented!');\n\n              case 1:\n              case 'end':\n                return _context5.stop();\n            }\n          }\n        }, _callee5, this);\n      }));\n\n      function readFileBuffer(_x6) {\n        return _ref5.apply(this, arguments);\n      }\n\n      return readFileBuffer;\n    }()\n  }, {\n    key: 'APPLICATION_DIRECTORY',\n    get: function get() {\n      throw new Error('FileSystem.APPLICATION_DIRECTORY() not implemented!');\n    }\n  }]);\n  return FileSystem;\n}();\n\nexports.default = FileSystem;\n\n//# sourceURL=webpack://mel-core/./src/files/file-system.js?");

/***/ }),

/***/ "./src/media/id3-tagger.js":
/*!*********************************!*\
  !*** ./src/media/id3-tagger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _fromCodePoint = __webpack_require__(/*! babel-runtime/core-js/string/from-code-point */ \"./node_modules/babel-runtime/core-js/string/from-code-point.js\");\n\nvar _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);\n\nvar _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ \"./node_modules/babel-runtime/helpers/toConsumableArray.js\");\n\nvar _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _file = __webpack_require__(/*! ../data/files/file */ \"./src/data/files/file.js\");\n\nvar _file2 = _interopRequireDefault(_file);\n\nvar _utf8Transcoder = __webpack_require__(/*! ../utils/utf8-transcoder */ \"./src/utils/utf8-transcoder.js\");\n\nvar _utf8Transcoder2 = _interopRequireDefault(_utf8Transcoder);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Id3Tagger = function () {\n  function Id3Tagger() {\n    (0, _classCallCheck3.default)(this, Id3Tagger);\n  }\n\n  (0, _createClass3.default)(Id3Tagger, [{\n    key: 'readTags',\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file) {\n        var dataView;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (file instanceof _file2.default) {\n                  _context.next = 2;\n                  break;\n                }\n\n                throw new Error('First parameter must be of type File!');\n\n              case 2:\n                dataView = new DataView(file.buffer);\n                return _context.abrupt('return', this._readID3v2(dataView));\n\n              case 4:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function readTags(_x) {\n        return _ref.apply(this, arguments);\n      }\n\n      return readTags;\n    }()\n  }, {\n    key: '_synchsafeIntToInt',\n    value: function _synchsafeIntToInt(synchsafeInt) {\n      var string = synchsafeInt.toString(2);\n      var missing = 32 - string.length;\n      for (var i = 0; i < missing; i++) {\n        string = '0' + string;\n      }\n\n      var intString = '';\n\n      for (var _i = 1; _i < 32; _i += 8) {\n        intString += string.substr(_i, 7);\n      }\n\n      return parseInt(intString, 2);\n    }\n  }, {\n    key: '_readID3v2Frames',\n    value: function _readID3v2Frames(dataView, header) {\n      var i = 10;\n\n      var frames = [];\n      while (i < header.size) {\n        var frameId = '';\n        for (var j = 0; j < 4; j++) {\n          frameId += String.fromCharCode(dataView.getUint8(i));\n          i++;\n        }\n\n        var size = dataView.getUint32(i);\n        i += 4;\n\n        var statusFlag = dataView.getUint8(i).toString(2);\n        i++;\n        var gap = 8 - statusFlag.length;\n        for (var _j = 0; _j < gap; _j++) {\n          statusFlag = '0' + statusFlag;\n        }\n        statusFlag = {\n          tag_alter_preservation: statusFlag[1] === '1',\n          file_alter_preservation: statusFlag[2] === '1',\n          read_only: statusFlag[3] === '1'\n        };\n\n        var formatDescription = dataView.getUint8(i).toString(2);\n        i++;\n        gap = 8 - formatDescription.length;\n        for (var _j2 = 0; _j2 < gap; _j2++) {\n          formatDescription = '0' + formatDescription;\n        }\n        formatDescription = {\n          grouping_identity: formatDescription[1] === '1',\n          compression: formatDescription[4] === '1',\n          encryption: formatDescription[5] === '1',\n          unsynchronisation: formatDescription[6] === '1',\n          data_length_indicator: formatDescription[7] === '1'\n        };\n\n        var value = '';\n        if (frameId.startsWith('T') && frameId !== 'TXXX') {\n          var encoding = dataView.getUint8(i).toString(16);\n          switch (encoding) {\n            case '0':\n              encoding = 'ISO-8859-1';\n              break;\n            case '1':\n              encoding = 'UTF-16';\n              break;\n            case '2':\n              encoding = 'UTF-16BE';\n              break;\n            case '3':\n              encoding = 'UTF-8';\n              break;\n          }\n\n          i++;\n          size--;\n\n          if (encoding === 'UTF-16' || encoding === 'UTF-16BE') {\n            var hex1 = dataView.getUint8(i).toString(16);\n            var hex2 = dataView.getUint8(i + 1).toString(16);\n            if (hex1 === 'ff' && hex2 === 'fe' || hex1 === 'fe' && hex2 === 'ff') {\n              i += 2;\n              size -= 2;\n            }\n          }\n\n          var codes = [];\n          for (var _j3 = i; _j3 < i + size; _j3++) {\n            switch (encoding) {\n              case 'UTF-8':\n              case 'ISO-8859-1':\n                codes.push(dataView.getUint8(_j3));\n                break;\n              case 'UTF-16':\n                {\n                  codes.push(dataView.getUint16(_j3, true));\n                  _j3++;\n                  break;\n                }\n              case 'UTF-16BE':\n                {\n                  codes.push(dataView.getUint16(_j3));\n                  _j3++;\n                  break;\n                }\n            }\n          }\n          codes = new Uint8Array(codes);\n\n          switch (encoding) {\n            case 'UTF-8':\n            case 'ISO-8859-1':\n              value = _utf8Transcoder2.default.decodeUtf8(codes, true);\n              break;\n            case 'UTF-16':\n            case 'UTF-16BE':\n              value = _fromCodePoint2.default.apply(String, (0, _toConsumableArray3.default)(codes));\n              break;\n          }\n        } else if (frameId === 'APIC') {}\n\n        i += size;\n        frames.push({ frameId: frameId, value: value });\n      }\n      return frames;\n    }\n  }, {\n    key: '_readID3v2Header',\n    value: function _readID3v2Header(dataView) {\n      var identifier = '';\n      for (var i = 0; i < 3; i++) {\n        var byte = dataView.getUint8(i);\n        identifier += String.fromCharCode(byte);\n      }\n\n      var version = dataView.getUint8(3).toString(16).toUpperCase() + '.' + dataView.getUint8(4).toString(16).toUpperCase();\n\n      var flags = dataView.getUint8(5).toString(2);\n      var gap = 8 - flags.length;\n      for (var _i2 = 0; _i2 < gap; _i2++) {\n        flags = '0' + flags;\n      }\n\n      var unsynchronized = flags[0] === '1';\n      var extended = flags[1] === '1';\n      var experimental = flags[2] === '1';\n      var footer = flags[3] === '1';\n\n      var size = this._readSynchsafeInteger(dataView, 6);\n\n      return {\n        identifier: identifier,\n        version: version,\n        unsynchronized: unsynchronized,\n        extended: extended,\n        experimental: experimental,\n        footer: footer,\n        size: size\n      };\n    }\n  }, {\n    key: '_readSynchsafeInteger',\n    value: function _readSynchsafeInteger(dataView, offset) {\n      var size1 = dataView.getUint8(offset).toString(2);\n      var gap = 7 - size1.length;\n      for (var i = 0; i < gap; i++) {\n        size1 = '0' + size1;\n      }\n\n      var size2 = dataView.getUint8(offset + 1).toString(2);\n      gap = 7 - size2.length;\n      for (var _i3 = 0; _i3 < gap; _i3++) {\n        size2 = '0' + size2;\n      }\n\n      var size3 = dataView.getUint8(offset + 2).toString(2);\n      gap = 7 - size3.length;\n      for (var _i4 = 0; _i4 < gap; _i4++) {\n        size3 = '0' + size3;\n      }\n\n      var size4 = dataView.getUint8(offset + 3).toString(2);\n      gap = 7 - size4.length;\n      for (var _i5 = 0; _i5 < gap; _i5++) {\n        size4 = '0' + size4;\n      }\n\n      return parseInt(size1 + size2 + size3 + size4, 2);\n    }\n  }, {\n    key: '_readID3v2',\n    value: function _readID3v2(dataView) {\n      var header = this._readID3v2Header(dataView);\n      var frames = this._readID3v2Frames(dataView, header);\n\n      // console.log(header);\n      console.log(frames);\n      var tags = {};\n      for (var i = 0; i < frames.length; i++) {\n        var frame = frames[i];\n        switch (frame.frameId) {\n          case 'TIT2':\n            tags.trackTitle = frame.value;\n            break;\n          case 'TPE1':\n            tags.artistName = frame.value;\n            break;\n          case 'TPE2':\n            tags.albumArtistName = frame.value;\n            break;\n          case 'TYER':\n            tags.year = frame.value;\n            break;\n          case 'TRCK':\n            tags.trackNumber = frame.value;\n            break;\n          case 'TPOS':\n            tags.discNumber = frame.value;\n            break;\n          case 'TALB':\n            tags.albumTitle = frame.value;\n            break;\n        }\n      }\n      return tags;\n    }\n  }, {\n    key: '_readString',\n    value: function _readString(dataView, offset, start, end) {\n      var string = '';\n      for (var i = offset + start; i < offset + end; i++) {\n        var byte = dataView.getUint8(i);\n        string += String.fromCharCode(byte);\n      }\n      return string;\n    }\n  }, {\n    key: '_readID3v1',\n    value: function _readID3v1(dataView) {\n      var tags = {\n        title: '',\n        artist: '',\n        album: '',\n        year: '',\n        comment: '',\n        zeroByte: '',\n        track: '',\n        genre: ''\n      };\n\n      var offset = dataView.byteLength - 128;\n      var header = this._readString(dataView, offset, 0, 3);\n      if (header !== 'TAG') {\n        return tags;\n      }\n      var title = this._readString(dataView, offset, 3, 33).trim();\n      var artist = this._readString(dataView, offset, 3, 33);\n      var album = this._readString(dataView, offset, 33, 63);\n      var year = this._readString(dataView, offset, 63, 93);\n      var comment = this._readString(dataView, offset, 93, 97);\n      var zeroByte = this._readString(dataView, offset, 97, 126);\n      var track = this._readString(dataView, offset, 126, 127);\n      var genre = this._readString(dataView, offset, 127, 128);\n\n      return { title: title, artist: artist, album: album, year: year, comment: comment, zeroByte: zeroByte, track: track, genre: genre };\n    }\n  }]);\n  return Id3Tagger;\n}();\n\nexports.default = Id3Tagger;\n\n//# sourceURL=webpack://mel-core/./src/media/id3-tagger.js?");

/***/ }),

/***/ "./src/media/tag-reader.js":
/*!*********************************!*\
  !*** ./src/media/tag-reader.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _id3Tagger = __webpack_require__(/*! ../media/id3-tagger */ \"./src/media/id3-tagger.js\");\n\nvar _id3Tagger2 = _interopRequireDefault(_id3Tagger);\n\nvar _idGenerator = __webpack_require__(/*! ../database/id-generator */ \"./src/database/id-generator.js\");\n\nvar _artist = __webpack_require__(/*! ../data/artist */ \"./src/data/artist.js\");\n\nvar _artist2 = _interopRequireDefault(_artist);\n\nvar _album = __webpack_require__(/*! ../data/album */ \"./src/data/album.js\");\n\nvar _album2 = _interopRequireDefault(_album);\n\nvar _track = __webpack_require__(/*! ../data/track */ \"./src/data/track.js\");\n\nvar _track2 = _interopRequireDefault(_track);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TagReader = function () {\n  function TagReader(configuration) {\n    (0, _classCallCheck3.default)(this, TagReader);\n\n    this._id3Tagger = new _id3Tagger2.default();\n    this._config = configuration;\n  }\n\n  (0, _createClass3.default)(TagReader, [{\n    key: 'readTags',\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file) {\n        var tags, track;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this._id3Tagger.readTags(file);\n\n              case 2:\n                tags = _context.sent;\n                track = this._generateMetaData(file, tags);\n                return _context.abrupt('return', track);\n\n              case 5:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function readTags(_x) {\n        return _ref.apply(this, arguments);\n      }\n\n      return readTags;\n    }()\n  }, {\n    key: '_generateMetaData',\n    value: function _generateMetaData(file, tags) {\n      tags = this._evaluateTags(tags);\n\n      var trackArtists = tags.trackArtistNames.map(function (trackArtistName) {\n        return new _artist2.default(undefined, trackArtistName, [], []);\n      });\n\n      trackArtists.forEach(function (trackArtist) {\n        trackArtist.id = _idGenerator.IdGenerator.getArtistId(trackArtist);\n      });\n\n      var albumArtistName = tags.albumArtistName;\n      var albumArtist = new _artist2.default(undefined, albumArtistName, [], []);\n      albumArtist.id = _idGenerator.IdGenerator.getArtistId(albumArtist);\n\n      trackArtists.forEach(function (artist) {\n        if (artist.id === albumArtist.id) {\n          albumArtist = artist;\n        }\n      });\n\n      var albumTitle = tags.albumTitle;\n      var year = tags.year;\n      var album = new _album2.default(undefined, albumArtist, albumTitle, year, [], []);\n      album.id = _idGenerator.IdGenerator.getAlbumId(album, album.artist);\n\n      var trackTitle = tags.trackTitle;\n      var trackNumber = tags.trackNumber;\n      var discNumber = tags.discNumber;\n      var track = new _track2.default(undefined, trackTitle, trackArtists, album, trackNumber, discNumber);\n      track.id = _idGenerator.IdGenerator.getTrackId(track);\n\n      album.addTrack(track);\n      trackArtists.forEach(function (artist) {\n        if (albumArtist.id !== artist.id) {\n          album.addFeatureArtist(artist);\n          artist.addFeatureAlbum(album);\n        }\n      });\n\n      albumArtist.addAlbum(album);\n\n      return track;\n    }\n  }, {\n    key: '_evaluateTags',\n    value: function _evaluateTags(tags) {\n      var year = tags.year ? parseInt(tags.year.split('-')[0]) : undefined;\n      var trackNumber = tags.trackNumber ? parseInt(tags.trackNumber.split('/')[0]) : 0;\n      var discNumber = tags.discNumber ? parseInt(tags.discNumber) : 1;\n\n      var trackArtistNames = [];\n      var trackTitle = tags.trackTitle;\n      if (trackTitle) {\n        var result = this._analyseFeatureArtists(tags.trackTitle);\n        trackTitle = result.string.replace(/ +/g, ' ').trim();\n        trackArtistNames.concat(result.artistNames.filter(function (artistName) {\n          return trackArtistNames.indexOf(artistName) === -1;\n        }));\n      }\n\n      var trackArtistName = tags.artistName;\n      if (trackArtistName) {\n        var _result = this._analyseFeatureArtists(trackArtistName);\n        trackArtistName = _result.string.replace(/ +/g, ' ').trim();\n        trackArtistNames.concat(_result.artistNames.filter(function (artistName) {\n          return trackArtistNames.indexOf(artistName) === -1;\n        }));\n        trackArtistNames.push(trackArtistName);\n      }\n\n      var albumArtistName = tags.albumArtistName;\n      if (albumArtistName) {\n        var _result2 = this._analyseFeatureArtists(albumArtistName);\n        albumArtistName = _result2.string.replace(/ +/g, ' ').trim();\n        trackArtistNames.concat(_result2.artistNames.filter(function (artistName) {\n          return trackArtistNames.indexOf(artistName) === -1;\n        }));\n      }\n\n      if (!albumArtistName || albumArtistName === '') {\n        albumArtistName = trackArtistName;\n      }\n      var albumTitle = tags.albumTitle;\n\n      return {\n        trackTitle: trackTitle,\n        year: year,\n        trackNumber: trackNumber,\n        discNumber: discNumber,\n        trackArtistNames: trackArtistNames,\n        albumArtistName: albumArtistName,\n        albumTitle: albumTitle\n      };\n    }\n  }, {\n    key: '_analyseFeatureArtists',\n    value: function _analyseFeatureArtists(string) {\n      var artistNames = [];\n      var newString = string;\n      this._config.featurePatterns.forEach(function (featurePattern) {\n        var artistListString = void 0;\n        var prefix = featurePattern.pattern.split('%a')[0];\n        var suffix = featurePattern.pattern.split('%a')[1];\n        var startIndex = string.indexOf(prefix);\n        if (startIndex !== -1) {\n          artistListString = string.substr(startIndex + prefix.length);\n          var endIndex = artistListString.indexOf(suffix);\n          if (endIndex !== -1) {\n            artistListString = artistListString.substr(0, endIndex);\n            artistListString.split(featurePattern.delimiter).map(function (artist) {\n              return artist.trim();\n            }).forEach(function (artist) {\n              return artistNames.push(artist);\n            });\n\n            var last = artistNames.slice(-1);\n            artistNames = artistNames.slice(0, artistNames.length - 1);\n            last[0].split(featurePattern.endingDelimiter).forEach(function (artist) {\n              return artistNames.push(artist.trim().replace(/ +/g, ' '));\n            });\n\n            newString = string.substr(0, string.indexOf(prefix));\n            newString = newString + string.substr(string.indexOf(suffix) + suffix.length, string.length);\n            newString = newString.replace(/ +/g, ' ');\n          }\n        }\n      });\n      return { string: newString, artistNames: artistNames };\n    }\n  }]);\n  return TagReader;\n}();\n\nexports.default = TagReader;\n\n//# sourceURL=webpack://mel-core/./src/media/tag-reader.js?");

/***/ }),

/***/ "./src/network/http/api-handler.js":
/*!*****************************************!*\
  !*** ./src/network/http/api-handler.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _serializer = __webpack_require__(/*! ../../utils/serializer */ \"./src/utils/serializer.js\");\n\nvar _serializer2 = _interopRequireDefault(_serializer);\n\nvar _route = __webpack_require__(/*! ./route */ \"./src/network/http/route.js\");\n\nvar _route2 = _interopRequireDefault(_route);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ApiHandler = function () {\n  function ApiHandler(database, fileSystem) {\n    (0, _classCallCheck3.default)(this, ApiHandler);\n\n    this._db = database;\n    this._fileSystem = fileSystem;\n  }\n\n  (0, _createClass3.default)(ApiHandler, [{\n    key: 'getRoutes',\n    value: function getRoutes() {\n      var GET = _route2.default.GET;\n\n      return [new _route2.default('/api/artists', GET, this._getArtists.bind(this)), new _route2.default('/api/tracks/*/data', GET, this._getTrackData.bind(this))];\n    }\n  }, {\n    key: '_getArtists',\n    value: function _getArtists(request, response) {\n      this._db.readArtists().then(function (artists) {\n        artists = artists.map(function (artist) {\n          return _serializer2.default.serializeArtist(artist);\n        });\n\n        response.status = 200;\n        response.setHeader('Content-Type', 'application/json');\n        response.send((0, _stringify2.default)({ artists: artists }));\n      });\n    }\n  }, {\n    key: '_getTrackData',\n    value: function _getTrackData(request, response) {\n      var _this = this;\n\n      var urlParts = request.getUrl().split('/');\n      var trackId = urlParts[3];\n      this._db.readFilesByTrackId(trackId).then(function (files) {\n        var file = files[0];\n        _this._fileSystem.readFileBuffer(file.path).then(function (data) {\n          response.setHeader('Access-Control-Allow-Origin', '*');\n          response.sendBuffer(data);\n        });\n      });\n    }\n  }]);\n  return ApiHandler;\n}();\n\nexports.default = ApiHandler;\n\n//# sourceURL=webpack://mel-core/./src/network/http/api-handler.js?");

/***/ }),

/***/ "./src/network/http/mel-http-service.js":
/*!**********************************************!*\
  !*** ./src/network/http/mel-http-service.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _deserializer = __webpack_require__(/*! ../../utils/deserializer */ \"./src/utils/deserializer.js\");\n\nvar _deserializer2 = _interopRequireDefault(_deserializer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MelHttpService = function () {\n  function MelHttpService(host, port) {\n    (0, _classCallCheck3.default)(this, MelHttpService);\n\n    this._host = host;\n    this._port = port;\n  }\n\n  // getTracks () {\n  //   return new Promise((resolve, reject) =>\n  //     this._sendRequest('GET', '/api/tracks')\n  //       .then(response =>\n  //         resolve(\n  //           this._deserializer.deserializeTracks(JSON.parse(response).tracks)\n  //         )\n  //       )\n  //       .catch(err => reject(err))\n  //   )\n  // }\n\n  // getArtist (artistId) {\n  //   return new Promise((resolve, reject) =>\n  //     this._sendRequest('GET', '/api/artists/' + artistId)\n  //       .then(response =>\n  //         resolve(\n  //           this._deserializer.deserializeArtist(JSON.parse(response).artist)\n  //         )\n  //       )\n  //       .catch(err => reject(err))\n  //   )\n  // }\n\n  (0, _createClass3.default)(MelHttpService, [{\n    key: 'getArtists',\n    value: function getArtists() {\n      var _this = this;\n\n      return new _promise2.default(function (resolve, reject) {\n        return _this._sendRequest('GET', '/api/artists').then(function (response) {\n          return resolve(_deserializer2.default.deserializeArtists(JSON.parse(response)));\n        }).catch(function (err) {\n          return reject(err);\n        });\n      });\n    }\n\n    // getAlbum (albumId) {\n    //   return new Promise((resolve, reject) =>\n    //     this._sendRequest('GET', '/api/albums/' + albumId)\n    //       .then(response =>\n    //         resolve(\n    //           this._deserializer.deserializeAlbum(JSON.parse(response).album)\n    //         )\n    //       )\n    //       .catch(err => reject(err))\n    //   )\n    // }\n\n  }, {\n    key: 'downloadTrack',\n    value: function downloadTrack(trackId) {\n      var _this2 = this;\n\n      return new _promise2.default(function (resolve, reject) {\n        _this2._sendRequest('GET', '/api/tracks/' + trackId + '/data', { responseType: 'arraybuffer' }).then(function (arrayBuffer) {\n          return resolve(arrayBuffer);\n        }).catch(function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }, {\n    key: '_sendRequest',\n    value: function _sendRequest(method, uri, _ref) {\n      var _this3 = this;\n\n      var responseType = _ref.responseType;\n\n      return new _promise2.default(function (resolve, reject) {\n        var request = new XMLHttpRequest();\n        request.onreadystatechange = function () {\n          console.log('PROGRESS', request.readyState);\n          if (request.readyState === 4) {\n            if (request.status === 200) {\n              resolve(request.response);\n            } else {\n              reject(request.status);\n            }\n          }\n        };\n        if (responseType) {\n          request.responseType = responseType;\n        }\n\n        console.log('REQUESTING', 'http://' + _this3._host + ':' + _this3._port + uri);\n\n        request.open(method, 'http://' + _this3._host + ':' + _this3._port + uri, true);\n        request.send();\n      });\n    }\n  }]);\n  return MelHttpService;\n}();\n\nexports.default = MelHttpService;\n\n//# sourceURL=webpack://mel-core/./src/network/http/mel-http-service.js?");

/***/ }),

/***/ "./src/network/http/request.js":
/*!*************************************!*\
  !*** ./src/network/http/request.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Request = function () {\n  function Request() {\n    (0, _classCallCheck3.default)(this, Request);\n  }\n\n  (0, _createClass3.default)(Request, [{\n    key: 'getUrl',\n    value: function getUrl() {\n      throw new Error('Request.getUrl() is not implemented!');\n    }\n  }]);\n  return Request;\n}();\n\nexports.default = Request;\n\n//# sourceURL=webpack://mel-core/./src/network/http/request.js?");

/***/ }),

/***/ "./src/network/http/response.js":
/*!**************************************!*\
  !*** ./src/network/http/response.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar OK = 200;\n\nvar Response = function () {\n  function Response() {\n    (0, _classCallCheck3.default)(this, Response);\n\n    this._status = OK;\n  }\n\n  (0, _createClass3.default)(Response, [{\n    key: 'getStatus',\n    value: function getStatus() {\n      return this._status;\n    }\n  }, {\n    key: 'setStatus',\n    value: function setStatus(status) {\n      this._status = status;\n    }\n  }, {\n    key: 'send',\n    value: function send(body) {\n      throw new Error('Response.send(body) is not implemented!');\n    }\n  }, {\n    key: 'sendFile',\n    value: function sendFile(relativeFilePath) {\n      throw new Error('Response.sendFile(relativeFilePath) is not implemented!');\n    }\n  }, {\n    key: 'sendBuffer',\n    value: function sendBuffer(arrayBuffer) {\n      throw new Error('Response.sendBuffer(arrayBuffer) is not implemented!');\n    }\n  }, {\n    key: 'setHeader',\n    value: function setHeader(field, value) {\n      throw new Error('Response.setHeader(field, value) is not implemented!');\n    }\n  }]);\n  return Response;\n}();\n\nexports.default = Response;\n\n//# sourceURL=webpack://mel-core/./src/network/http/response.js?");

/***/ }),

/***/ "./src/network/http/route.js":
/*!***********************************!*\
  !*** ./src/network/http/route.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GET = 1;\nvar POST = 2;\nvar PUT = 3;\nvar DELETE = 4;\n\nvar Route = function () {\n  function Route(uri, method, handler) {\n    (0, _classCallCheck3.default)(this, Route);\n\n    this._uri = uri;\n    this._method = method;\n    this._handler = handler;\n  }\n\n  (0, _createClass3.default)(Route, [{\n    key: \"setUri\",\n    value: function setUri(uri) {\n      this._uri = uri;\n    }\n  }, {\n    key: \"getUri\",\n    value: function getUri() {\n      return this._uri;\n    }\n  }, {\n    key: \"setMethod\",\n    value: function setMethod(method) {\n      this._method = method;\n    }\n  }, {\n    key: \"getMethod\",\n    value: function getMethod() {\n      return this._method;\n    }\n  }, {\n    key: \"setHandler\",\n    value: function setHandler(handler) {\n      this._handler = handler;\n    }\n  }, {\n    key: \"getHandler\",\n    value: function getHandler() {\n      return this._handler;\n    }\n  }]);\n  return Route;\n}();\n\nRoute.GET = GET;\nRoute.POST = POST;\nRoute.PUT = PUT;\nRoute.DELETE = DELETE;\n\nexports.default = Route;\n\n//# sourceURL=webpack://mel-core/./src/network/http/route.js?");

/***/ }),

/***/ "./src/network/http/web-server.js":
/*!****************************************!*\
  !*** ./src/network/http/web-server.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _response = __webpack_require__(/*! ./response */ \"./src/network/http/response.js\");\n\nvar _response2 = _interopRequireDefault(_response);\n\nvar _route = __webpack_require__(/*! ./route */ \"./src/network/http/route.js\");\n\nvar _route2 = _interopRequireDefault(_route);\n\nvar _request = __webpack_require__(/*! ./request */ \"./src/network/http/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar WebServer = function () {\n  function WebServer() {\n    (0, _classCallCheck3.default)(this, WebServer);\n  }\n\n  (0, _createClass3.default)(WebServer, [{\n    key: 'addRoutes',\n    value: function addRoutes(routes) {\n      var _this = this;\n\n      routes.forEach(function (route) {\n        return _this.addRoute(route);\n      });\n    }\n  }, {\n    key: 'addRoute',\n    value: function addRoute(route) {\n      var GET = _route2.default.GET,\n          POST = _route2.default.POST,\n          PUT = _route2.default.PUT,\n          DELETE = _route2.default.DELETE;\n\n      var method = route.getMethod();\n      var uri = route.getUri();\n      var handler = this._wrapCallback(route.getHandler());\n      switch (method) {\n        case GET:\n          this._get(uri, handler);\n          break;\n        case POST:\n          this._post(uri, handler);\n          break;\n        case PUT:\n          this._put(uri, handler);\n          break;\n        case DELETE:\n          this._delete(uri, handler);\n          break;\n      }\n    }\n  }, {\n    key: 'addStaticDirectory',\n    value: function addStaticDirectory(directory) {\n      this._static(directory);\n    }\n  }, {\n    key: '_wrapCallback',\n    value: function _wrapCallback(callback) {\n      return function (request, response) {\n        if (!(request instanceof _request2.default)) {\n          throw Error('Expecting 1st parameter of request handler to be Request!');\n        }\n        if (!(response instanceof _response2.default)) {\n          throw Error('Expecting 2nd parameter of request handler to be Response!');\n        }\n        callback(request, response);\n      };\n    }\n  }, {\n    key: '_get',\n    value: function _get(uri, handler) {\n      throw new Error('WebServer._get(uri, handler) not implemented.');\n    }\n  }, {\n    key: '_post',\n    value: function _post(uri, handler) {\n      throw new Error('WebServer._post(uri, handler) not implemented.');\n    }\n  }, {\n    key: '_put',\n    value: function _put(uri, handler) {\n      throw new Error('WebServer._put(uri, handler) not implemented.');\n    }\n  }, {\n    key: '_delete',\n    value: function _delete(uri, handler) {\n      throw new Error('WebServer._delete(uri, handler) not implemented.');\n    }\n  }, {\n    key: '_static',\n    value: function _static(directory) {\n      throw new Error('WebServer._static(directory) not implemented.');\n    }\n  }, {\n    key: 'start',\n    value: function start() {\n      throw new Error('WebServer.start() not implemented.');\n    }\n  }, {\n    key: 'port',\n    get: function get() {\n      throw new Error('WebServer.port() not implemented.');\n    }\n  }, {\n    key: 'server',\n    get: function get() {\n      throw new Error('WebServer.server() not implemented.');\n    }\n  }]);\n  return WebServer;\n}();\n\nexports.default = WebServer;\n\n//# sourceURL=webpack://mel-core/./src/network/http/web-server.js?");

/***/ }),

/***/ "./src/network/web-socket/mel-client-socket.js":
/*!*****************************************************!*\
  !*** ./src/network/web-socket/mel-client-socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _deserializer = __webpack_require__(/*! ../../utils/deserializer */ \"./src/utils/deserializer.js\");\n\nvar _deserializer2 = _interopRequireDefault(_deserializer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MelClientSocket = function () {\n  function MelClientSocket(webSocket) {\n    (0, _classCallCheck3.default)(this, MelClientSocket);\n\n    this._webSocket = webSocket;\n  }\n\n  (0, _createClass3.default)(MelClientSocket, [{\n    key: 'getArtists',\n    value: function getArtists() {\n      var _this = this;\n\n      return new _promise2.default(function (resolve, reject) {\n        _this._webSocket.emit('get_artists', {});\n        _this._webSocket.on('get_artists', function (artists) {\n          resolve(_deserializer2.default.deserializeArtists(artists));\n        });\n      });\n    }\n  }, {\n    key: 'getArtist',\n    value: function getArtist(artistId) {\n      var _this2 = this;\n\n      return new _promise2.default(function (resolve, reject) {\n        _this2._webSocket.emit('get_artist', { artistId: artistId });\n        _this2._webSocket.on('get_artist', function (artist) {\n          resolve(_deserializer2.default.deserializeArtist(artist));\n        });\n      });\n    }\n  }, {\n    key: 'getAlbum',\n    value: function getAlbum(albumId) {\n      var _this3 = this;\n\n      return new _promise2.default(function (resolve, reject) {\n        _this3._webSocket.emit('get_album', { albumId: albumId });\n        _this3._webSocket.on('get_album', function (albumJson) {\n          resolve(_deserializer2.default.deserializeAlbum(albumJson));\n        });\n      });\n    }\n  }, {\n    key: 'getTrack',\n    value: function getTrack(trackId) {\n      var _this4 = this;\n\n      return new _promise2.default(function (resolve, reject) {\n        _this4._webSocket.emit('get_track', { trackId: trackId });\n        _this4._webSocket.on('get_track', function (trackJson) {\n          var track = _deserializer2.default.deserializeTrack(trackJson);\n          resolve(track);\n        });\n      });\n    }\n  }]);\n  return MelClientSocket;\n}();\n\nexports.default = MelClientSocket;\n\n//# sourceURL=webpack://mel-core/./src/network/web-socket/mel-client-socket.js?");

/***/ }),

/***/ "./src/network/web-socket/mel-server-socket.js":
/*!*****************************************************!*\
  !*** ./src/network/web-socket/mel-server-socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _serializer = __webpack_require__(/*! ../../utils/serializer */ \"./src/utils/serializer.js\");\n\nvar _serializer2 = _interopRequireDefault(_serializer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GET_ARTISTS = 'get_artists',\n    GET_ARTIST = 'get_artist',\n    GET_ALBUM = 'get_album',\n    GET_TRACK = 'get_track';\n\nvar MelServerSocket = function () {\n  function MelServerSocket(webSocket, identity, database) {\n    (0, _classCallCheck3.default)(this, MelServerSocket);\n\n    this._webSocket = webSocket;\n    this._identity = identity;\n    this._sockets = [];\n    this._database = database;\n  }\n\n  (0, _createClass3.default)(MelServerSocket, [{\n    key: 'initialize',\n    value: function initialize() {\n      var _this = this;\n\n      this._webSocket.on('connection', function (socket) {\n        console.log('New Client: ', socket.id);\n        socket.on(GET_ARTISTS, function () {\n          return _this._getArtists(socket);\n        });\n        socket.on(GET_ARTIST, function (data) {\n          return _this._getArtist(socket, data);\n        });\n        socket.on(GET_ALBUM, function (data) {\n          return _this._getAlbum(socket, data);\n        });\n        socket.on(GET_TRACK, function (data) {\n          return _this._getTrack(socket, data);\n        });\n      });\n      console.log('Web Socket listening ...');\n    }\n  }, {\n    key: '_getArtists',\n    value: function _getArtists(socket) {\n      this._database.readArtists().then(function (artists) {\n        socket.emit(GET_ARTISTS, _serializer2.default.serializeArtists(artists));\n      }).catch(function (err) {\n        return console.error(err.stack);\n      });\n    }\n  }, {\n    key: '_getArtist',\n    value: function _getArtist(socket, data) {\n      this._database.readArtist(data.artistId).then(function (artist) {\n        return socket.emit(GET_ARTIST, _serializer2.default.serializeArtist(artist));\n      }).catch(function (err) {\n        return console.error(err.stack);\n      });\n    }\n  }, {\n    key: '_getAlbum',\n    value: function _getAlbum(socket, data) {\n      this._database.readAlbum(data.albumId).then(function (album) {\n        return socket.emit(GET_ALBUM, _serializer2.default.serializeAlbum(album));\n      }).catch(function (err) {\n        return console.error(err.stack);\n      });\n    }\n  }, {\n    key: '_getTrack',\n    value: function _getTrack(socket, data) {\n      this._database.readTrack(data.trackId).then(function (track) {\n        return socket.emit(GET_TRACK, _serializer2.default.serializeTrack(track));\n      }).catch(function (err) {\n        return console.error(err.stack);\n      });\n    }\n  }, {\n    key: 'identity',\n    set: function set(identity) {\n      this._identity = identity;\n    }\n  }]);\n  return MelServerSocket;\n}();\n\nexports.default = MelServerSocket;\n\n//# sourceURL=webpack://mel-core/./src/network/web-socket/mel-server-socket.js?");

/***/ }),

/***/ "./src/network/web-socket/web-socket.js":
/*!**********************************************!*\
  !*** ./src/network/web-socket/web-socket.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar WebSocket = function () {\n  function WebSocket() {\n    (0, _classCallCheck3.default)(this, WebSocket);\n\n    this._hasServer = false;\n  }\n\n  (0, _createClass3.default)(WebSocket, [{\n    key: 'on',\n    value: function on(event, callback) {\n      throw new Error('Function WebSocket.on(event, callback) is not implemented!');\n    }\n  }, {\n    key: 'emit',\n    value: function emit(event, data) {\n      throw new Error('Function WebSocket.emit(event, data) is not implemented!');\n    }\n  }, {\n    key: 'server',\n    set: function set(server) {\n      this._server = server;\n      if (server) {\n        this._hasServer = true;\n      }\n    },\n    get: function get() {\n      return this._server;\n    }\n  }, {\n    key: 'hasServer',\n    get: function get() {\n      return this._hasServer;\n    }\n  }]);\n  return WebSocket;\n}();\n\nexports.default = WebSocket;\n\n//# sourceURL=webpack://mel-core/./src/network/web-socket/web-socket.js?");

/***/ }),

/***/ "./src/utils/deserializer.js":
/*!***********************************!*\
  !*** ./src/utils/deserializer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _file = __webpack_require__(/*! ../data/files/file */ \"./src/data/files/file.js\");\n\nvar _file2 = _interopRequireDefault(_file);\n\nvar _track = __webpack_require__(/*! ../data/track */ \"./src/data/track.js\");\n\nvar _track2 = _interopRequireDefault(_track);\n\nvar _album = __webpack_require__(/*! ../data/album */ \"./src/data/album.js\");\n\nvar _album2 = _interopRequireDefault(_album);\n\nvar _artist = __webpack_require__(/*! ../data/artist */ \"./src/data/artist.js\");\n\nvar _artist2 = _interopRequireDefault(_artist);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar deserializer = {};\n\ndeserializer.deserializeTrack = function (trackJson) {\n  if (!trackJson) {\n    return null;\n  }\n  var id = trackJson.id;\n  var title = trackJson.title;\n  var artists = trackJson.artists.map(function (artistId) {\n    return new _artist2.default(artistId);\n  });\n  var album = new _album2.default(trackJson.album);\n  var number = trackJson.number;\n  var discNumber = trackJson.discNumber;\n  var filePath = trackJson.filePath;\n  return new _track2.default(id, title, artists, album, number, discNumber, filePath);\n};\n\ndeserializer.deserializeAlbum = function (albumJson) {\n  if (!albumJson) {\n    return null;\n  }\n  if (typeof albumJson === 'string') {\n    return new _album2.default(albumJson);\n  }\n\n  var id = albumJson.id;\n  var artist = deserializer.deserializeArtist(albumJson.artist);\n  var title = albumJson.title;\n  var year = albumJson.year;\n  var tracks = albumJson.tracks ? albumJson.tracks.map(function (trackId) {\n    return new _track2.default(trackId);\n  }) : [];\n  var featureArtists = albumJson.featureArtists ? albumJson.featureArtists.map(function (artistId) {\n    return new _artist2.default(artistId);\n  }) : [];\n  var album = new _album2.default(id, artist, title, year, tracks, featureArtists);\n  return album;\n};\n\ndeserializer.deserializeAlbums = function (albumsJson) {\n  if (!albumsJson) {\n    return null;\n  }\n  return albumsJson.map(function (artistJson) {\n    return deserializer.deserializeAlbum(artistJson);\n  });\n};\n\ndeserializer.deserializeArtist = function (artistJson) {\n  if (!artistJson) {\n    return null;\n  }\n  if (typeof artistJson === 'string') {\n    return new _artist2.default(artistJson);\n  }\n\n  var id = artistJson.id;\n  var name = artistJson.name ? artistJson.name : 'Unknown Artist';\n  var albums = deserializer.deserializeAlbums(artistJson.albums);\n  var featureAlbums = deserializer.deserializeAlbums(artistJson.featureAlbums);\n  return new _artist2.default(id, name, albums, featureAlbums);\n};\n\ndeserializer.deserializeArtists = function (artistsJson) {\n  if (!artistsJson) {\n    return null;\n  }\n  return artistsJson.map(function (artistJson) {\n    return deserializer.deserializeArtist(artistJson);\n  });\n};\n\ndeserializer.deserializeFile = function (fileJson) {\n  if (!fileJson) {\n    return null;\n  }\n\n  var path = fileJson.path;\n  var type = fileJson.type;\n  var lastModified = fileJson.lastModified;\n  var track = new _track2.default(fileJson.trackId);\n  return new _file2.default(path, type, null, lastModified, track);\n};\n\ndeserializer.deserializeFiles = function (filesJson) {\n  if (!filesJson) {\n    return null;\n  }\n\n  return filesJson.map(function (fileJson) {\n    return deserializer.deserializeFile(fileJson);\n  });\n};\n\nexports.default = deserializer;\n\n//# sourceURL=webpack://mel-core/./src/utils/deserializer.js?");

/***/ }),

/***/ "./src/utils/job-qeue.js":
/*!*******************************!*\
  !*** ./src/utils/job-qeue.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar JobQueue = function () {\n  function JobQueue(limit) {\n    var waitingTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    (0, _classCallCheck3.default)(this, JobQueue);\n\n    this._jobs = [];\n    this._processingJobs = false;\n    this._limit = limit;\n    this._waitingTime = waitingTime;\n    this._runningJobs = 0;\n  }\n\n  (0, _createClass3.default)(JobQueue, [{\n    key: \"_processJobs\",\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {\n        var _this = this;\n\n        return _regenerator2.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (!this._processingJobs) {\n                  _context2.next = 2;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\");\n\n              case 2:\n                this._processingJobs = true;\n\n              case 3:\n                if (!(this._jobs.length > 0)) {\n                  _context2.next = 14;\n                  break;\n                }\n\n                if (!(this._runningJobs < this._limit)) {\n                  _context2.next = 10;\n                  break;\n                }\n\n                ;(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n                  var job;\n                  return _regenerator2.default.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          job = _this._jobs.shift();\n                          _context.prev = 1;\n                          _context.t0 = job;\n                          _context.next = 5;\n                          return job.fn();\n\n                        case 5:\n                          _context.t1 = _context.sent;\n\n                          _context.t0.resolve.call(_context.t0, _context.t1);\n\n                          _context.next = 12;\n                          break;\n\n                        case 9:\n                          _context.prev = 9;\n                          _context.t2 = _context[\"catch\"](1);\n\n                          job.reject(_context.t2);\n\n                        case 12:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee, _this, [[1, 9]]);\n                }))().then(function () {\n                  return _this._runningJobs--;\n                }).catch(console.error);\n                this._runningJobs++;\n                _context2.next = 12;\n                break;\n\n              case 10:\n                _context2.next = 12;\n                return new _promise2.default(function (resolve) {\n                  return setTimeout(resolve, _this._waitingTime);\n                });\n\n              case 12:\n                _context2.next = 3;\n                break;\n\n              case 14:\n                this._processingJobs = false;\n\n              case 15:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function _processJobs() {\n        return _ref.apply(this, arguments);\n      }\n\n      return _processJobs;\n    }()\n  }, {\n    key: \"queueJob\",\n    value: function queueJob(fn) {\n      var _this2 = this;\n\n      var promise = new _promise2.default(function (resolve, reject) {\n        return _this2._jobs.push({ fn: fn, resolve: resolve, reject: reject });\n      });\n      this._processJobs();\n      return promise;\n    }\n  }]);\n  return JobQueue;\n}();\n\nexports.default = JobQueue;\n\n//# sourceURL=webpack://mel-core/./src/utils/job-qeue.js?");

/***/ }),

/***/ "./src/utils/serializer.js":
/*!*********************************!*\
  !*** ./src/utils/serializer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar serializer = {};\n\nserializer.serializeTrack = function (track) {\n  if (!track) {\n    return null;\n  }\n\n  var id = track.id;\n  var title = track.title;\n  var artists = track.artists.map(function (artist) {\n    return artist.id;\n  });\n  var album = track.album.id;\n  var number = track.number;\n  var discNumber = track.discNumber;\n  return { id: id, title: title, number: number, album: album, discNumber: discNumber, artists: artists };\n};\n\nserializer.serializeAlbum = function (album) {\n  if (!album) {\n    return null;\n  }\n\n  var id = album.id;\n  var artist = album.artist.id;\n  var title = album.title;\n  var year = album.year;\n  var featureArtists = album.featureArtists.map(function (artist) {\n    return artist.id;\n  });\n  var tracks = album.tracks.map(function (track) {\n    return track.id;\n  });\n  return { id: id, artist: artist, title: title, year: year, featureArtists: featureArtists, tracks: tracks };\n};\n\nserializer.serializeArtist = function (artist) {\n  if (!artist) {\n    return null;\n  }\n  try {\n    var id = artist.id;\n    var name = artist.name;\n    var albums = artist.albums ? artist.albums.map(function (album) {\n      return album.id;\n    }) : [];\n    var featureAlbums = artist.featureAlbums ? artist.featureAlbums.map(function (album) {\n      return album.id;\n    }) : [];\n    return { id: id, name: name, albums: albums, featureAlbums: featureAlbums };\n  } catch (error) {\n    throw new Error(\"Could not serialize artist: \" + error);\n  }\n};\n\nserializer.serializeArtists = function (artists) {\n  if (!artists) {\n    return null;\n  }\n\n  return artists.map(function (artist) {\n    return serializer.serializeArtist(artist);\n  });\n};\n\nserializer.serializeFile = function (file) {\n  if (!file) {\n    return null;\n  }\n\n  var path = file.path;\n  var type = file.type;\n  var lastModified = file.lastModified;\n  var trackId = file.track.id;\n  return { path: path, type: type, lastModified: lastModified, trackId: trackId };\n};\n\nexports.default = serializer;\n\n//# sourceURL=webpack://mel-core/./src/utils/serializer.js?");

/***/ }),

/***/ "./src/utils/utf8-transcoder.js":
/*!**************************************!*\
  !*** ./src/utils/utf8-transcoder.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Utf8Transcoder = function Utf8Transcoder() {\n  (0, _classCallCheck3.default)(this, Utf8Transcoder);\n};\n\nUtf8Transcoder.decodeUtf8 = function (uint8array, removeZeroTermination) {\n  var result = '';\n  var i = 0;\n  var c = 0;\n  var c3 = 0;\n  var c2 = 0;\n\n  // If we have a BOM skip it\n  if (uint8array.length >= 3 && uint8array[0] === 0xef && uint8array[1] === 0xbb && uint8array[2] === 0xbf) {\n    i = 3;\n  }\n\n  if (removeZeroTermination && uint8array[uint8array.length - 1] === 0) {\n    uint8array = uint8array.slice(0, uint8array.length - 1);\n  }\n\n  while (i < uint8array.length) {\n    c = uint8array[i];\n\n    if (c < 128) {\n      result += String.fromCharCode(c);\n      i++;\n    } else if (c > 191 && c < 224) {\n      // if (i + 1 >= uint8array.length) {\n      if (i + 1 > uint8array.length) {\n        throw new Error('UTF-8 Decode failed. Two byte character was truncated.');\n      }\n      c2 = uint8array[i + 1];\n\n      result += String.fromCharCode((c & 31) << 6 | c2 & 63);\n      i += 2;\n    } else {\n      if (i + 2 >= uint8array.length) {\n        throw new Error('UTF-8 Decode failed. Multi byte character was truncated.');\n      }\n      c2 = uint8array[i + 1];\n      c3 = uint8array[i + 2];\n      result += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\n      i += 3;\n    }\n  }\n  return result;\n};\n\nexports.default = Utf8Transcoder;\n\n//# sourceURL=webpack://mel-core/./src/utils/utf8-transcoder.js?");

/***/ })

/******/ });
});