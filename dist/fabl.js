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
	
	var _embedStory = __webpack_require__(1);
	
	var _embedStory2 = _interopRequireDefault(_embedStory);
	
	var _loadScripts = __webpack_require__(57);
	
	var _loadScripts2 = _interopRequireDefault(_loadScripts);
	
	var _tracking = __webpack_require__(60);
	
	var _tracking2 = _interopRequireDefault(_tracking);
	
	var _version = __webpack_require__(65);
	
	var _version2 = _interopRequireDefault(_version);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// NOTE: using module.exports directly instead of `export default`
	// to ensure Fabl is consistently exported for both Bower and NPM
	module.exports = {
	  embedStory: _embedStory2.default,
	  loadScripts: _loadScripts2.default,
	  tracking: _tracking2.default,
	  VERSION: _version2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = embedStory;
	
	var _validators = __webpack_require__(2);
	
	var _buildStoryProxy = __webpack_require__(52);
	
	var _buildStoryProxy2 = _interopRequireDefault(_buildStoryProxy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var functionName = "embedStory";
	function embedStory(_element, _storyUrl) {
	  var element = (0, _validators.validateElement)(_element, functionName + ": expected first argument to be a DOM element");
	  var storyUrl = (0, _validators.validateString)(_storyUrl, functionName + ": expected second argument to be a Fabl story URL");
	
	  var storyProxy = (0, _buildStoryProxy2.default)(storyUrl);
	  storyProxy.render(element);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _validateCallback = __webpack_require__(3);
	
	var _validateCallback2 = _interopRequireDefault(_validateCallback);
	
	var _validateElement = __webpack_require__(6);
	
	var _validateElement2 = _interopRequireDefault(_validateElement);
	
	var _validateEventName = __webpack_require__(12);
	
	var _validateEventName2 = _interopRequireDefault(_validateEventName);
	
	var _validateEventTrigger = __webpack_require__(48);
	
	var _validateEventTrigger2 = _interopRequireDefault(_validateEventTrigger);
	
	var _validateString = __webpack_require__(50);
	
	var _validateString2 = _interopRequireDefault(_validateString);
	
	var _validateUrls = __webpack_require__(51);
	
	var _validateUrls2 = _interopRequireDefault(_validateUrls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  validateCallback: _validateCallback2.default,
	  validateElement: _validateElement2.default,
	  validateEventName: _validateEventName2.default,
	  validateEventTrigger: _validateEventTrigger2.default,
	  validateString: _validateString2.default,
	  validateUrls: _validateUrls2.default
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateCallback;
	
	var _isFunction = __webpack_require__(4);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateCallback(callback, errorMessage) {
	  if (!!callback && !(0, _isFunction2.default)(callback)) {
	    throw new Error(errorMessage);
	  }
	
	  var done = function done() {
	    if (callback) {
	      callback();
	    }
	  };
	
	  return done;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
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
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
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
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateElement;
	
	var _isElement = __webpack_require__(7);
	
	var _isElement2 = _interopRequireDefault(_isElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateElement(element, errorMessage) {
	  var domElement = element;
	
	  // extract the underlying DOM element if the provided element is wrapped in jQuery
	  if (element && element[0]) {
	    domElement = element[0];
	  }
	
	  if (!(0, _isElement2.default)(domElement)) {
	    throw new Error(errorMessage);
	  }
	
	  return domElement;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(8),
	    isPlainObject = __webpack_require__(9);
	
	/**
	 * Checks if `value` is likely a DOM element.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	 * @example
	 *
	 * _.isElement(document.body);
	 * // => true
	 *
	 * _.isElement('<body>');
	 * // => false
	 */
	function isElement(value) {
	  return value != null && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	}
	
	module.exports = isElement;


/***/ },
/* 8 */
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
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(10),
	    isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(11);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateEventName;
	
	var _includes = __webpack_require__(13);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _eventNames = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateEventName(eventName, errorMessage) {
	  if (!(0, _includes2.default)(_eventNames.EVENT_NAMES, eventName)) {
	    throw new Error(errorMessage);
	  }
	
	  return eventName;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(14),
	    isArrayLike = __webpack_require__(18),
	    isString = __webpack_require__(20),
	    toInteger = __webpack_require__(22),
	    values = __webpack_require__(26);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
	
	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}
	
	module.exports = includes;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(15),
	    baseIsNaN = __webpack_require__(16),
	    strictIndexOf = __webpack_require__(17);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}
	
	module.exports = baseIsNaN;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = strictIndexOf;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(4),
	    isLength = __webpack_require__(19);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(21),
	    isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(23);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(24);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5),
	    isSymbol = __webpack_require__(25);
	
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
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(27),
	    keys = __webpack_require__(29);
	
	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}
	
	module.exports = values;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(28);
	
	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}
	
	module.exports = baseValues;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(30),
	    baseKeys = __webpack_require__(44),
	    isArrayLike = __webpack_require__(18);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(31),
	    isArguments = __webpack_require__(32),
	    isArray = __webpack_require__(21),
	    isBuffer = __webpack_require__(34),
	    isIndex = __webpack_require__(39),
	    isTypedArray = __webpack_require__(40);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(33),
	    isObjectLike = __webpack_require__(8);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && objectToString.call(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(36),
	    stubFalse = __webpack_require__(38);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(37);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(41),
	    baseUnary = __webpack_require__(42),
	    nodeUtil = __webpack_require__(43);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(19),
	    isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(37);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(45),
	    nativeKeys = __webpack_require__(46);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(11);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CLICKED_LINK = exports.CLICKED_LINK = "Clicked Link";
	
	var EVENT_NAMES = exports.EVENT_NAMES = [CLICKED_LINK];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateEventTrigger;
	
	var _includes = __webpack_require__(13);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _eventTriggers = __webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateEventTrigger(eventTrigger, errorMessage) {
	  if (!(0, _includes2.default)(_eventTriggers.EVENT_TRIGGERS, eventTrigger)) {
	    throw new Error(errorMessage);
	  }
	
	  return eventTrigger;
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CLICK = exports.CLICK = "click";
	
	var EVENT_TRIGGERS = exports.EVENT_TRIGGERS = [CLICK];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateString;
	
	var _isString = __webpack_require__(20);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateString(string, errorMessage) {
	  if (!(0, _isString2.default)(string)) {
	    throw new Error(errorMessage);
	  }
	
	  return string;
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateUrls;
	
	var _isArray = __webpack_require__(21);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _validateString = __webpack_require__(50);
	
	var _validateString2 = _interopRequireDefault(_validateString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateUrls(urlOrUrls, errorMessage) {
	  var urls = void 0;
	  if (isString(urlOrUrls)) {
	    urls = [urlOrUrls];
	  } else if ((0, _isArray2.default)(urlOrUrls)) {
	    urls = urlOrUrls;
	  }
	
	  // validate the urlOrUrls parameter
	  if (!urls) {
	    throw new Error(errorMessage);
	  }
	  urls.forEach(function (url) {
	    (0, _validateString2.default)(url, errorMessage);
	  });
	
	  return urls;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = buildStoryProxy;
	
	var _urlParse = __webpack_require__(53);
	
	var _urlParse2 = _interopRequireDefault(_urlParse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var INIT_MESSAGE = "fabl:embed:init";
	var HEIGHT_MESSAGE_REGEX = /^fabl:document:height\((\d+)\)$/;
	
	function buildFrameNotifier(iframe, origin) {
	  return function (message) {
	    if (!iframe || !iframe.contentWindow) {
	      throw new Error("Fabl.embedStory: unable to communicate with embedded story (could not find target)");
	    }
	
	    iframe.contentWindow.postMessage(message, origin);
	  };
	}
	
	function buildIframe(url, height) {
	  var iframe = document.createElement("iframe");
	  iframe.setAttribute("allowfullscreen", true);
	  iframe.setAttribute("height", height + "px");
	  iframe.setAttribute("src", url);
	  iframe.setAttribute("style", "background-color: transparent; border: none; overflow-y: hidden;");
	  iframe.setAttribute("width", "100%");
	
	  return iframe;
	}
	
	function getOrigin(url) {
	  var parsedUrl = (0, _urlParse2.default)(url);
	  return parsedUrl.origin || "*";
	}
	
	function buildStoryProxy(storyUrl) {
	  var currentHeight = 800; // px
	
	  var iframe = buildIframe(storyUrl, currentHeight);
	
	  var storyOrigin = getOrigin(storyUrl);
	  var sendMessage = buildFrameNotifier(iframe, storyOrigin);
	
	  var render = function render(element) {
	    element.appendChild(iframe);
	  };
	
	  var resize = function resize(height) {
	    if (height === currentHeight) {
	      return;
	    }
	
	    iframe.setAttribute("height", height + "px");
	    currentHeight = height;
	  };
	
	  // when the frame loads, notify that it is an embedded story
	  iframe.addEventListener("load", function () {
	    sendMessage(INIT_MESSAGE);
	  });
	
	  // handle messages from the frame
	  window.addEventListener("message", function (event) {
	    // ignore messages from other frames
	    if (event.origin !== storyOrigin) {
	      return;
	    }
	
	    if (HEIGHT_MESSAGE_REGEX.test(event.data)) {
	      var matches = event.data.match(HEIGHT_MESSAGE_REGEX);
	      var desiredHeight = parseInt(matches[1], 10);
	
	      resize(desiredHeight);
	    }
	  });
	
	  return {
	    render: render,
	    resize: resize
	  };
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var required = __webpack_require__(54)
	  , lolcation = __webpack_require__(55)
	  , qs = __webpack_require__(56)
	  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
	
	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [
	  ['#', 'hash'],                        // Extract from the back.
	  ['?', 'query'],                       // Extract from the back.
	  ['/', 'pathname'],                    // Extract from the back.
	  ['@', 'auth', 1],                     // Extract from the front.
	  [NaN, 'host', undefined, 1, 1],       // Set left over value.
	  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
	  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
	];
	
	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */
	
	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @api private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);
	
	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}
	
	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @api private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
	    , i = path.length
	    , last = path[i - 1]
	    , unshift = false
	    , up = 0;
	
	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }
	
	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');
	
	  return path.join('/');
	}
	
	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} location Location defaults for relative paths.
	 * @param {Boolean|Function} parser Parser for the query string.
	 * @api public
	 */
	function URL(address, location, parser) {
	  if (!(this instanceof URL)) {
	    return new URL(address, location, parser);
	  }
	
	  var relative, extracted, parse, instruction, index, key
	    , instructions = rules.slice()
	    , type = typeof location
	    , url = this
	    , i = 0;
	
	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }
	
	  if (parser && 'function' !== typeof parser) parser = qs.parse;
	
	  location = lolcation(location);
	
	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address || '');
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;
	
	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];
	
	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];
	    parse = instruction[0];
	    key = instruction[1];
	
	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if (index = parse.exec(address)) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }
	
	    url[key] = url[key] || (
	      relative && instruction[3] ? location[key] || '' : ''
	    );
	
	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }
	
	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);
	
	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (
	      relative
	    && location.slashes
	    && url.pathname.charAt(0) !== '/'
	    && (url.pathname !== '' || location.pathname !== '')
	  ) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }
	
	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }
	
	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }
	
	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';
	
	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}
	
	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL}
	 * @api public
	 */
	URL.prototype.set = function set(part, value, fn) {
	  var url = this;
	
	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }
	
	      url[part] = value;
	      break;
	
	    case 'port':
	      url[part] = value;
	
	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname +':'+ value;
	      }
	
	      break;
	
	    case 'hostname':
	      url[part] = value;
	
	      if (url.port) value += ':'+ url.port;
	      url.host = value;
	      break;
	
	    case 'host':
	      url[part] = value;
	
	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }
	
	      break;
	
	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;
	
	    case 'pathname':
	      url.pathname = value.charAt(0) === '/' ? value : '/' + value;
	      break;
	
	    default:
	      url[part] = value;
	  }
	
	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];
	
	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }
	
	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';
	
	  url.href = url.toString();
	
	  return url;
	};
	
	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String}
	 * @api public
	 */
	URL.prototype.toString = function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
	
	  var query
	    , url = this
	    , protocol = url.protocol;
	
	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
	
	  var result = protocol + (url.slashes ? '//' : '');
	
	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':'+ url.password;
	    result += '@';
	  }
	
	  result += url.host + url.pathname;
	
	  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;
	
	  if (url.hash) result += url.hash;
	
	  return result;
	};
	
	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	URL.extractProtocol = extractProtocol;
	URL.location = lolcation;
	URL.qs = qs;
	
	module.exports = URL;


/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */
	module.exports = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;
	
	  if (!port) return false;
	
	  switch (protocol) {
	    case 'http':
	    case 'ws':
	    return port !== 80;
	
	    case 'https':
	    case 'wss':
	    return port !== 443;
	
	    case 'ftp':
	    return port !== 21;
	
	    case 'gopher':
	    return port !== 70;
	
	    case 'file':
	    return false;
	  }
	
	  return port !== 0;
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
	
	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 }
	  , URL;
	
	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @api public
	 */
	module.exports = function lolcation(loc) {
	  loc = loc || global.location || {};
	  URL = URL || __webpack_require__(53);
	
	  var finaldestination = {}
	    , type = typeof loc
	    , key;
	
	  if ('blob:' === loc.protocol) {
	    finaldestination = new URL(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new URL(loc, {});
	    for (key in ignore) delete finaldestination[key];
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }
	
	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }
	
	  return finaldestination;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g
	    , result = {}
	    , part;
	
	  //
	  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
	  // the lastIndex property so we can continue executing this loop until we've
	  // parsed all results.
	  //
	  for (;
	    part = parser.exec(query);
	    result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])
	  );
	
	  return result;
	}
	
	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';
	
	  var pairs = [];
	
	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';
	
	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
	    }
	  }
	
	  return pairs.length ? prefix + pairs.join('&') : '';
	}
	
	//
	// Expose the module.
	//
	exports.stringify = querystringify;
	exports.parse = querystring;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadScripts;
	
	var _after = __webpack_require__(58);
	
	var _after2 = _interopRequireDefault(_after);
	
	var _loadScript = __webpack_require__(59);
	
	var _loadScript2 = _interopRequireDefault(_loadScript);
	
	var _validators = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var functionName = "loadScripts";
	function loadScripts(urlOrUrls, callback) {
	  var urls = (0, _validators.validateUrls)(urlOrUrls, functionName + ": expected first argument to be a url string or an array of url strings");
	  var done = (0, _validators.validateCallback)(callback, functionName + ": expected second argument to be a callback function (optional)");
	
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(22);
	
	/** Error message constants. */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadScript;
	
	var _isFunction = __webpack_require__(4);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isString = __webpack_require__(20);
	
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _attachToElement = __webpack_require__(61);
	
	var _attachToElement2 = _interopRequireDefault(_attachToElement);
	
	var _eventNames = __webpack_require__(47);
	
	var eventNames = _interopRequireWildcard(_eventNames);
	
	var _eventTriggers = __webpack_require__(49);
	
	var eventTriggers = _interopRequireWildcard(_eventTriggers);
	
	var _setup = __webpack_require__(63);
	
	var _setup2 = _interopRequireDefault(_setup);
	
	var _triggerEvent = __webpack_require__(64);
	
	var _triggerEvent2 = _interopRequireDefault(_triggerEvent);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _extends({}, eventNames, eventTriggers, {
	  attachToElement: _attachToElement2.default,
	  setup: _setup2.default,
	  triggerEvent: _triggerEvent2.default
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = attachToElement;
	
	var _eventHandler = __webpack_require__(62);
	
	var _eventTriggers = __webpack_require__(49);
	
	var _validators = __webpack_require__(2);
	
	var functionName = "tracking.attachToElement";
	function attachToElement(_element, _eventName) {
	  var _eventTrigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventTriggers.CLICK;
	
	  var element = (0, _validators.validateElement)(_element, functionName + ": expected first argument to be a DOM element");
	  var eventName = (0, _validators.validateEventName)(_eventName, functionName + ": expected second argument to be a valid event name");
	  var eventTrigger = (0, _validators.validateEventTrigger)(_eventTrigger, functionName + ": expected third argument to be a valid event trigger (default: 'click'");
	
	  var handler = function handler(event) {
	    var handleEvent = (0, _eventHandler.getEventHandler)();
	    handleEvent(eventName, element, event);
	  };
	
	  element.addEventListener(eventTrigger, handler);
	}

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getEventHandler = getEventHandler;
	exports.setEventHandler = setEventHandler;
	var _eventHandler = function _eventHandler(eventName, element, event) {
	  console.info("tracking: received a '" + eventName + "' event");
	};
	
	function getEventHandler() {
	  return _eventHandler;
	}
	
	function setEventHandler(eventHandler) {
	  _eventHandler = eventHandler;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setup;
	
	var _eventHandler = __webpack_require__(62);
	
	function setup(eventHandler) {
	  (0, _eventHandler.setEventHandler)(eventHandler);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = triggerEvent;
	
	var _eventHandler = __webpack_require__(62);
	
	var _validators = __webpack_require__(2);
	
	var functionName = "tracking.triggerEvent";
	function triggerEvent(_eventName, _element) {
	  var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	  var eventName = (0, _validators.validateEventName)(_eventName, functionName + ": expected first argument to be a valid event name");
	  var element = (0, _validators.validateElement)(_element, functionName + ": expected second argument to be a valid element");
	
	  var handleEvent = (0, _eventHandler.getEventHandler)();
	  handleEvent(eventName, element, event);
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _package = __webpack_require__(66);
	
	exports.default = _package.version;

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = {
		"name": "fabl-js",
		"version": "1.2.1",
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
		"dependencies": {
			"lodash": "^4.14.1",
			"url-parse": "^1.1.6"
		},
		"devDependencies": {
			"babel-cli": "^6.11.4",
			"babel-core": "^6.11.4",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.9.0",
			"babel-preset-stage-1": "^6.5.0",
			"json-loader": "^0.5.4",
			"rimraf": "^2.5.4",
			"unminified-webpack-plugin": "^1.1.0",
			"webpack": "^1.13.1"
		}
	};

/***/ }
/******/ ])
});
;