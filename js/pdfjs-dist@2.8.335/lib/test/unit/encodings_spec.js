"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function _createForOfIteratorHelper(n,r){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=_unsupportedIterableToArray(n))||r&&n&&"number"==typeof n.length){t&&(n=t);var e=0,o=function(){};return{s:o,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return i=n.done,n},e:function(n){c=!0,a=n},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw a}}}}function _unsupportedIterableToArray(n,r){if(n){if("string"==typeof n)return _arrayLikeToArray(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(n,r):void 0}}function _arrayLikeToArray(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}var _encodings=require("../../core/encodings.js");describe("encodings",function(){describe("getEncoding",function(){it("fetches a valid array for known encoding names",function(){for(var n=0,r=["ExpertEncoding","MacExpertEncoding","MacRomanEncoding","StandardEncoding","SymbolSetEncoding","WinAnsiEncoding","ZapfDingbatsEncoding"];n<r.length;n++){var t=r[n],e=(0,_encodings.getEncoding)(t);expect(Array.isArray(e)).toEqual(!0),expect(e.length).toEqual(256);var o,a=_createForOfIteratorHelper(e);try{for(a.s();!(o=a.n()).done;){var i=o.value;expect(_typeof(i)).toEqual("string")}}catch(n){a.e(n)}finally{a.f()}}}),it("fetches `null` for unknown encoding names",function(){expect((0,_encodings.getEncoding)("FooBarEncoding")).toEqual(null)})})});