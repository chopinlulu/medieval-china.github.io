"use strict";function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(r){var i=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);if(i){var a=_getPrototypeOf(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0===a)return("string"===t?String:Number)(e);var r=a.call(e,t||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.LocalTilingPatternCache=exports.LocalImageCache=exports.LocalGStateCache=exports.LocalFunctionCache=exports.LocalColorSpaceCache=exports.GlobalImageCache=void 0;var _util=require("../shared/util.js"),_primitives=require("./primitives.js"),BaseLocalCache=function(){function t(e){_classCallCheck(this,t),this.constructor===t&&(0,_util.unreachable)("Cannot initialize BaseLocalCache."),e&&e.onlyRefs||(this._nameRefMap=new Map,this._imageMap=new Map),this._imageCache=new _primitives.RefSetCache}return _createClass(t,[{key:"getByName",value:function(e){var t=this._nameRefMap.get(e);return t?this.getByRef(t):this._imageMap.get(e)||null}},{key:"getByRef",value:function(e){return this._imageCache.get(e)||null}},{key:"set",value:function(e,t,a){(0,_util.unreachable)("Abstract method `set` called.")}}]),t}(),LocalImageCache=function(e){_inherits(a,BaseLocalCache);var t=_createSuper(a);function a(){return _classCallCheck(this,a),t.apply(this,arguments)}return _createClass(a,[{key:"set",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,a=2<arguments.length?arguments[2]:void 0;if(!e)throw new Error('LocalImageCache.set - expected "name" argument.');if(t){if(this._imageCache.has(t))return;return this._nameRefMap.set(e,t),void this._imageCache.put(t,a)}this._imageMap.has(e)||this._imageMap.set(e,a)}}]),a}();exports.LocalImageCache=LocalImageCache;var LocalColorSpaceCache=function(e){_inherits(a,BaseLocalCache);var t=_createSuper(a);function a(){return _classCallCheck(this,a),t.apply(this,arguments)}return _createClass(a,[{key:"set",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,a=2<arguments.length?arguments[2]:void 0;if(!e&&!t)throw new Error('LocalColorSpaceCache.set - expected "name" and/or "ref" argument.');if(t){if(this._imageCache.has(t))return;return e&&this._nameRefMap.set(e,t),void this._imageCache.put(t,a)}this._imageMap.has(e)||this._imageMap.set(e,a)}}]),a}();exports.LocalColorSpaceCache=LocalColorSpaceCache;var LocalFunctionCache=function(e){_inherits(a,BaseLocalCache);var t=_createSuper(a);function a(e){return _classCallCheck(this,a),t.call(this,{onlyRefs:!0})}return _createClass(a,[{key:"getByName",value:function(e){(0,_util.unreachable)("Should not call `getByName` method.")}},{key:"set",value:function(){0<arguments.length&&void 0!==arguments[0]&&arguments[0];var e=1<arguments.length?arguments[1]:void 0,t=2<arguments.length?arguments[2]:void 0;if(!e)throw new Error('LocalFunctionCache.set - expected "ref" argument.');this._imageCache.has(e)||this._imageCache.put(e,t)}}]),a}();exports.LocalFunctionCache=LocalFunctionCache;var LocalGStateCache=function(e){_inherits(a,BaseLocalCache);var t=_createSuper(a);function a(){return _classCallCheck(this,a),t.apply(this,arguments)}return _createClass(a,[{key:"set",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,a=2<arguments.length?arguments[2]:void 0;if(!e)throw new Error('LocalGStateCache.set - expected "name" argument.');if(t){if(this._imageCache.has(t))return;return this._nameRefMap.set(e,t),void this._imageCache.put(t,a)}this._imageMap.has(e)||this._imageMap.set(e,a)}}]),a}();exports.LocalGStateCache=LocalGStateCache;var LocalTilingPatternCache=function(e){_inherits(a,BaseLocalCache);var t=_createSuper(a);function a(){return _classCallCheck(this,a),t.apply(this,arguments)}return _createClass(a,[{key:"set",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,a=2<arguments.length?arguments[2]:void 0;if(!e)throw new Error('LocalTilingPatternCache.set - expected "name" argument.');if(t){if(this._imageCache.has(t))return;return this._nameRefMap.set(e,t),void this._imageCache.put(t,a)}this._imageMap.has(e)||this._imageMap.set(e,a)}}]),a}();exports.LocalTilingPatternCache=LocalTilingPatternCache;var GlobalImageCache=function(){function i(){_classCallCheck(this,i),this._refCache=new _primitives.RefSetCache,this._imageCache=new _primitives.RefSetCache}return _createClass(i,[{key:"_byteSize",get:function(){var t=0;return this._imageCache.forEach(function(e){t+=e.byteSize}),t}},{key:"_cacheLimitReached",get:function(){return!(this._imageCache.size<i.MIN_IMAGES_TO_CACHE)&&!(this._byteSize<i.MAX_BYTE_SIZE)}},{key:"shouldCache",value:function(e,t){var a=this._refCache.get(e);return!((a?a.size+(a.has(t)?0:1):1)<i.NUM_PAGES_THRESHOLD)&&!(!this._imageCache.has(e)&&this._cacheLimitReached)}},{key:"addPageIndex",value:function(e,t){var a=this._refCache.get(e);a||(a=new Set,this._refCache.put(e,a)),a.add(t)}},{key:"addByteSize",value:function(e,t){var a=this._imageCache.get(e);a&&(a.byteSize||(a.byteSize=t))}},{key:"getData",value:function(e,t){var a=this._refCache.get(e);if(!a)return null;if(a.size<i.NUM_PAGES_THRESHOLD)return null;var r=this._imageCache.get(e);return r?(a.add(t),r):null}},{key:"setData",value:function(e,t){if(!this._refCache.has(e))throw new Error('GlobalImageCache.setData - expected "addPageIndex" to have been called.');this._imageCache.has(e)||(this._cacheLimitReached?(0,_util.warn)("GlobalImageCache.setData - cache limit reached."):this._imageCache.put(e,t))}},{key:"clear",value:function(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]||this._refCache.clear(),this._imageCache.clear()}}],[{key:"NUM_PAGES_THRESHOLD",get:function(){return(0,_util.shadow)(this,"NUM_PAGES_THRESHOLD",2)}},{key:"MIN_IMAGES_TO_CACHE",get:function(){return(0,_util.shadow)(this,"MIN_IMAGES_TO_CACHE",10)}},{key:"MAX_BYTE_SIZE",get:function(){return(0,_util.shadow)(this,"MAX_BYTE_SIZE",4e7)}}]),i}();exports.GlobalImageCache=GlobalImageCache;