(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Fabl"] = factory();
	else
		root["Fabl"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _loadScripts = __webpack_require__(1);
	
	var _loadScripts2 = _interopRequireDefault(_loadScripts);
	
	var _version = __webpack_require__(14);
	
	var _version2 = _interopRequireDefault(_version);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// NOTE: using module.exports directly instead of `export default`
	// to ensure Fabl is consistently exported for both Bower and NPM
	module.exports = {
	  loadScripts: _loadScripts2.default,
	  VERSION: _version2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadScripts;
	
	var _after = __webpack_require__(2);
	
	var _after2 = _interopRequireDefault(_after);
	
	var _loadScript = __webpack_require__(10);
	
	var _loadScript2 = _interopRequireDefault(_loadScript);
	
	var _validators = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function loadScripts(urlOrUrls, callback) {
	  var urls = (0, _validators.validateUrls)(urlOrUrls);
	  var done = (0, _validators.validateCallback)(callback);
	
	  // handle an empty set of dependencies
	  var urlCount = urls.length;
	  if (urlCount === 0) {
	    setTimeout(done, 0);
	    return;
	  }
	
	  // set up tracking across all of the requested scripts
	  var handleLoad = (0, _after2.default)(urlCount, done);
	  urls.forEach(function (url) {
	    return (0, _loadScript2.default)(url, handleLoad);
	  });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(3);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * The opposite of `_.before`; this method creates a function that invokes
	 * `func` once it's called `n` or more times.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {number} n The number of calls before `func` is invoked.
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * var saves = ['profile', 'settings'];
	 *
	 * var done = _.after(saves.length, function() {
	 *   console.log('done saving!');
	 * });
	 *
	 * _.forEach(saves, function(type) {
	 *   asyncSave({ 'type': type, 'complete': done });
	 * });
	 * // => Logs 'done saving!' after the two async saves have completed.
	 */
	function after(n, func) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  n = toInteger(n);
	  return function() {
	    if (--n < 1) {
	      return func.apply(this, arguments);
	    }
	  };
	}
	
	module.exports = after;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(4);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(5);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(6),
	    isObject = __webpack_require__(7),
	    isSymbol = __webpack_require__(8);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(7);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadScript;
	
	var _isFunction = __webpack_require__(6);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isString = __webpack_require__(11);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function appendToHead(element) {
	  var head = document.getElementsByTagName("head")[0];
	  head.appendChild(element);
	}
	
	function attachScriptLoadHandler(script, callback) {
	  var inOldIE = (0, _isString2.default)(script.readyState);
	  if (!inOldIE) {
	    script.onload = function () {
	      callback();
	    };
	
	    return;
	  }
	
	  script.onreadystatechange = function () {
	    var readyState = script.readyState;
	
	    switch (readyState) {
	      case "complete":
	      case "loaded":
	        script.onreadystatechange = null;
	        callback();
	        break;
	
	      default:
	      // do nothing
	    }
	  };
	}
	
	function buildScriptTag(src) {
	  var script = document.createElement("script");
	  script.setAttribute("async", true);
	  script.setAttribute("src", src);
	  return script;
	}
	
	function loadScript(src, callback) {
	  var script = buildScriptTag(src);
	
	  if ((0, _isFunction2.default)(callback)) {
	    attachScriptLoadHandler(script, callback);
	  }
	
	  appendToHead(script);
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(12),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateCallback = validateCallback;
	exports.validateUrls = validateUrls;
	
	var _isArray = __webpack_require__(12);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isFunction = __webpack_require__(6);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isString = __webpack_require__(11);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var invalidCallbackErrorMessage = "loadScripts: expected second argument to be a callback function (optional)";
	function validateCallback(callback) {
	  if (!!callback && !(0, _isFunction2.default)(callback)) {
	    throw new Error(invalidCallbackErrorMessage);
	  }
	
	  var done = function done() {
	    if (callback) {
	      callback();
	    }
	  };
	
	  return done;
	}
	
	var invalidUrlsErrorMessage = "loadScripts: expected first argument to be a url string or an array of url strings";
	function validateUrls(urlOrUrls) {
	  var urls = void 0;
	  if ((0, _isString2.default)(urlOrUrls)) {
	    urls = [urlOrUrls];
	  } else if ((0, _isArray2.default)(urlOrUrls)) {
	    urls = urlOrUrls;
	  }
	
	  // validate the urlOrUrls parameter
	  if (!urls) {
	    throw new Error(invalidUrlsErrorMessage);
	  }
	  urls.forEach(function (url) {
	    if (!(0, _isString2.default)(url)) {
	      throw new Error(invalidUrlsErrorMessage);
	    }
	  });
	
	  return urls;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _package = __webpack_require__(15);
	
	exports.default = _package.version;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
		"name": "fabl-js",
		"version": "1.0.2",
		"description": "The Fabl Javascript SDK",
		"author": "Fabl <developers@fabl.co>",
		"license": "ISC",
		"repository": {
			"type": "git",
			"url": "https://github.com/FablCo/fabl-js.git"
		},
		"bugs": "https://github.com/FablCo/fabl-js/issues",
		"main": "lib/fabl.js",
		"scripts": {
			"build:assets:development": "$(npm bin)/webpack --config config/webpack/development.config.js --display-error-details --verbose",
			"build:assets:production": "$(npm bin)/webpack --config config/webpack/production.config.js --display-error-details --progress --verbose",
			"build:lib": "$(npm bin)/babel ./src --out-dir ./lib",
			"compress:assets:production": "gzip --best --force --keep ./dist/fabl.min.js",
			"clean": "npm run clean:dist && npm run clean:lib",
			"clean:dist": "$(npm bin)/rimraf ./dist",
			"clean:lib": "$(npm bin)/rimraf ./lib",
			"dist": "npm run clean && npm run build:lib && npm run build:assets:production && npm run compress:assets:production"
		},
		"devDependencies": {
			"babel-cli": "^6.11.4",
			"babel-core": "^6.11.4",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.9.0",
			"babel-preset-stage-1": "^6.5.0",
			"json-loader": "^0.5.4",
			"lodash": "^4.14.1",
			"rimraf": "^2.5.4",
			"unminified-webpack-plugin": "^1.1.0",
			"webpack": "^1.13.1"
		}
	};

/***/ }
/******/ ])
});
;