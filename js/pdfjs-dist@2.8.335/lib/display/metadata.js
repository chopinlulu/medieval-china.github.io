"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,_toPropertyKey(a.key),a)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);var a=r.call(t,e||"default");if("object"!==_typeof(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Metadata=void 0;var _util=require("../shared/util.js"),Metadata=function(){function a(t){var e=t.parsedData,r=t.rawData;_classCallCheck(this,a),this._metadataMap=e,this._data=r}return _createClass(a,[{key:"getRaw",value:function(){return this._data}},{key:"get",value:function(t){var e;return null!==(e=this._metadataMap.get(t))&&void 0!==e?e:null}},{key:"getAll",value:function(){return(0,_util.objectFromMap)(this._metadataMap)}},{key:"has",value:function(t){return this._metadataMap.has(t)}}]),a}();exports.Metadata=Metadata;