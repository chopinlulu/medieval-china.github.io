"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);var o=r.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var o=_superPropBase(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}}).apply(this,arguments)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(o){var n=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(o);if(n){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.PDFViewer=void 0;var _ui_utils=require("./ui_utils.js"),_base_viewer=require("./base_viewer.js"),_pdf=require("../pdf"),PDFViewer=function(e){_inherits(s,_base_viewer.BaseViewer);var t=_createSuper(s);function s(){return _classCallCheck(this,s),t.apply(this,arguments)}return _createClass(s,[{key:"_viewerElement",get:function(){return(0,_pdf.shadow)(this,"_viewerElement",this.viewer)}},{key:"_scrollIntoView",value:function(e){var t=e.pageDiv,r=e.pageSpot,o=void 0===r?null:r,n=e.pageNumber,i=void 0===n?null:n;if(!o&&!this.isInPresentationMode){var u=t.offsetLeft+t.clientLeft,a=u+t.clientWidth,f=this.container,l=f.scrollLeft,c=f.clientWidth;(this._isScrollModeHorizontal||u<l||l+c<a)&&(o={left:0,top:0})}_get(_getPrototypeOf(s.prototype),"_scrollIntoView",this).call(this,{pageDiv:t,pageSpot:o,pageNumber:i})}},{key:"_getVisiblePages",value:function(){return this.isInPresentationMode?this._getCurrentVisiblePage():_get(_getPrototypeOf(s.prototype),"_getVisiblePages",this).call(this)}},{key:"_updateHelper",value:function(e){if(!this.isInPresentationMode){var t,r=this._currentPageNumber,o=!1,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(i.percent<100)break;if(i.id===r&&this._scrollMode===_ui_utils.ScrollMode.VERTICAL&&this._spreadMode===_ui_utils.SpreadMode.NONE){o=!0;break}}}catch(e){n.e(e)}finally{n.f()}o||(r=e[0].id),this._setCurrentPageNumber(r)}}}]),s}();exports.PDFViewer=PDFViewer;