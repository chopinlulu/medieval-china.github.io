"use strict";function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);if(n){var A=_getPrototypeOf(this).constructor;t=Reflect.construct(e,arguments,A)}else t=e.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return i};var i={},t=Object.prototype,s=t.hasOwnProperty,l=Object.defineProperty||function(t,e,A){t[e]=A.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",A=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function o(t,e,A){return Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{o({},"")}catch(t){o=function(t,e,A){return t[e]=A}}function a(t,e,A,r){var o,i,a,c,n=e&&e.prototype instanceof d?e:d,u=Object.create(n.prototype),s=new E(r||[]);return l(u,"_invoke",{value:(o=t,i=A,a=s,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return x()}for(a.method=t,a.arg=e;;){var A=a.delegate;if(A){var r=b(A,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";var n=h(o,i,a);if("normal"===n.type){if(c=a.done?"completed":"suspendedYield",n.arg===f)continue;return{value:n.arg,done:a.done}}"throw"===n.type&&(c="completed",a.method="throw",a.arg=n.arg)}})}),u}function h(t,e,A){try{return{type:"normal",arg:t.call(e,A)}}catch(t){return{type:"throw",arg:t}}}i.wrap=a;var f={};function d(){}function c(){}function u(){}var p={};o(p,n,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(L([])));v&&v!==t&&s.call(v,n)&&(p=v);var g=u.prototype=d.prototype=Object.create(p);function m(t){["next","throw","return"].forEach(function(e){o(t,e,function(t){return this._invoke(e,t)})})}function _(c,u){var e;l(this,"_invoke",{value:function(A,r){function t(){return new u(function(t,e){!function e(t,A,r,n){var o=h(c[t],c,A);if("throw"!==o.type){var i=o.arg,a=i.value;return a&&"object"==_typeof(a)&&s.call(a,"__await")?u.resolve(a.__await).then(function(t){e("next",t,r,n)},function(t){e("throw",t,r,n)}):u.resolve(a).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,n)})}n(o.arg)}(A,r,t,e)})}return e=e?e.then(t,t):t()}})}function b(t,e){var A=e.method,r=t.iterator[A];if(void 0===r)return e.delegate=null,"throw"===A&&t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method)||"return"!==A&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+A+"' method")),f;var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var A=-1,r=function t(){for(;++A<e.length;)if(s.call(e,A))return t.value=e[A],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:x}}function x(){return{value:void 0,done:!0}}return l(g,"constructor",{value:c.prototype=u,configurable:!0}),l(u,"constructor",{value:c,configurable:!0}),c.displayName=o(u,r,"GeneratorFunction"),i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,o(t,r,"GeneratorFunction")),t.prototype=Object.create(g),t},i.awrap=function(t){return{__await:t}},m(_.prototype),o(_.prototype,A,function(){return this}),i.AsyncIterator=_,i.async=function(t,e,A,r,n){void 0===n&&(n=Promise);var o=new _(a(t,e,A,r),n);return i.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},m(g),o(g,r,"Generator"),o(g,n,function(){return this}),o(g,"toString",function(){return"[object Generator]"}),i.keys=function(t){var A=Object(t),r=[];for(var e in A)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in A)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(A){if(this.done)throw A;var r=this;function t(t,e){return o.type="throw",o.arg=A,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e],o=n.completion;if("root"===n.tryLoc)return t("end");if(n.tryLoc<=this.prev){var i=s.call(n,"catchLoc"),a=s.call(n,"finallyLoc");if(i&&a){if(this.prev<n.catchLoc)return t(n.catchLoc,!0);if(this.prev<n.finallyLoc)return t(n.finallyLoc)}else if(i){if(this.prev<n.catchLoc)return t(n.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return t(n.finallyLoc)}}}},abrupt:function(t,e){for(var A=this.tryEntries.length-1;0<=A;--A){var r=this.tryEntries[A];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var n=r;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var o=n?n.completion:{};return o.type=t,o.arg=e,n?(this.method="next",this.next=n.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var A=this.tryEntries[e];if(A.finallyLoc===t)return this.complete(A.completion,A.afterLoc),w(A),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var A=this.tryEntries[e];if(A.tryLoc===t){var r=A.completion;if("throw"===r.type){var n=r.arg;w(A)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,A){return this.delegate={iterator:L(t),resultName:e,nextLoc:A},"next"===this.method&&(this.arg=void 0),f}},i}function asyncGeneratorStep(t,e,A,r,n,o,i){try{var a=t[o](i),c=a.value}catch(t){return void A(t)}a.done?e(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator(a){return function(){var t=this,i=arguments;return new Promise(function(e,A){var r=a.apply(t,i);function n(t){asyncGeneratorStep(r,e,A,n,o,"next",t)}function o(t){asyncGeneratorStep(r,e,A,n,o,"throw",t)}n(void 0)})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var A=0;A<e.length;A++){var r=e[A];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,A){return e&&_defineProperties(t.prototype,e),A&&_defineProperties(t,A),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var A=t[Symbol.toPrimitive];if(void 0===A)return("string"===e?String:Number)(t);var r=A.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FontLoader=exports.FontFaceObject=void 0;var FontLoader,_util=require("../shared/util.js"),BaseFontLoader=function(){function o(t){var e=t.docId,A=t.onUnsupportedFeature,r=t.ownerDocument,n=void 0===r?globalThis.document:r;_classCallCheck(this,o),this.constructor===o&&(0,_util.unreachable)("Cannot initialize BaseFontLoader."),this.docId=e,this._onUnsupportedFeature=A,this._document=n,this.nativeFontFaces=[],this.styleElement=null}var e;return _createClass(o,[{key:"addNativeFontFace",value:function(t){this.nativeFontFaces.push(t),this._document.fonts.add(t)}},{key:"insertRule",value:function(t){var e=this.styleElement;e||((e=this.styleElement=this._document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_".concat(this.docId),this._document.documentElement.getElementsByTagName("head")[0].appendChild(e));var A=e.sheet;A.insertRule(t,A.cssRules.length)}},{key:"clear",value:function(){var e=this;this.nativeFontFaces.forEach(function(t){e._document.fonts.delete(t)}),this.nativeFontFaces.length=0,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}},{key:"bind",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function t(A){var e,r,n=this;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(A.attached||A.missingFile)return t.abrupt("return");t.next=2;break;case 2:if(A.attached=!0,!this.isFontLoadingAPISupported){t.next=19;break}if(e=A.createNativeFontFace())return this.addNativeFontFace(e),t.prev=7,t.next=10,e.loaded;t.next=18;break;case 10:t.next=18;break;case 12:throw t.prev=12,t.t0=t.catch(7),this._onUnsupportedFeature({featureId:_util.UNSUPPORTED_FEATURES.errorFontLoadNative}),(0,_util.warn)("Failed to load font '".concat(e.family,"': '").concat(t.t0,"'.")),A.disableFontFace=!0,t.t0;case 18:return t.abrupt("return");case 19:if(!(r=A.createFontFaceRule())){t.next=26;break}if(this.insertRule(r),this.isSyncFontLoadingSupported)return t.abrupt("return");t.next=24;break;case 24:return t.next=26,new Promise(function(t){var e=n._queueLoadingCallback(t);n._prepareFontLoadEvent([r],[A],e)});case 26:case"end":return t.stop()}},t,this,[[7,12]])})),function(t){return e.apply(this,arguments)})},{key:"_queueLoadingCallback",value:function(t){(0,_util.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"isFontLoadingAPISupported",get:function(){var t;return(0,_util.shadow)(this,"isFontLoadingAPISupported",!(null===(t=this._document)||void 0===t||!t.fonts))}},{key:"isSyncFontLoadingSupported",get:function(){(0,_util.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function(){(0,_util.unreachable)("Abstract method `_loadTestFont`.")}},{key:"_prepareFontLoadEvent",value:function(t,e,A){(0,_util.unreachable)("Abstract method `_prepareFontLoadEvent`.")}}]),o}();exports.FontLoader=FontLoader,exports.FontLoader=FontLoader=function(t){_inherits(r,BaseFontLoader);var A=_createSuper(r);function r(t){var e;return _classCallCheck(this,r),(e=A.call(this,t)).loadingContext={requests:[],nextRequestId:0},e.loadTestFontId=0,e}return _createClass(r,[{key:"isSyncFontLoadingSupported",get:function(){var t=!1;if("undefined"==typeof navigator)t=!0;else{var e=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);14<=(null==e?void 0:e[1])&&(t=!0)}return(0,_util.shadow)(this,"isSyncFontLoadingSupported",t)}},{key:"_queueLoadingCallback",value:function(t){var e=this.loadingContext,A={id:"pdfjs-font-loading-".concat(e.nextRequestId++),done:!1,complete:function(){for((0,_util.assert)(!A.done,"completeRequest() cannot be called twice."),A.done=!0;0<e.requests.length&&e.requests[0].done;){var t=e.requests.shift();setTimeout(t.callback,0)}},callback:t};return e.requests.push(A),A}},{key:"_loadTestFont",get:function(){return(0,_util.shadow)(this,"_loadTestFont",atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))}},{key:"_prepareFontLoadEvent",value:function(t,e,A){var r,n,o=this;function i(t,e){return t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|255&t.charCodeAt(e+3)}function a(t,e,A,r){return t.substring(0,e)+r+t.substring(e+A)}var c=this._document.createElement("canvas");c.width=1,c.height=1;var u=c.getContext("2d"),s=0;var l="lt".concat(Date.now()).concat(this.loadTestFontId++),h=this._loadTestFont,f=1482184792,d=i(h=a(h,976,l.length,l),16);for(r=0,n=l.length-3;r<n;r+=4)d=d-f+i(l,r)|0;r<l.length&&(d=d-f+i(l+"XXX",r)|0),h=a(h,16,4,(0,_util.string32)(d));var p="url(data:font/opentype;base64,".concat(btoa(h),");"),y='@font-face {font-family:"'.concat(l,'";src:').concat(p,"}");this.insertRule(y);var v=[];for(r=0,n=e.length;r<n;r++)v.push(e[r].loadedName);v.push(l);var g=this._document.createElement("div");for(g.style.visibility="hidden",g.style.width=g.style.height="10px",g.style.position="absolute",g.style.top=g.style.left="0px",r=0,n=v.length;r<n;++r){var m=this._document.createElement("span");m.textContent="Hi",m.style.fontFamily=v[r],g.appendChild(m)}this._document.body.appendChild(g),function t(e,A){if(30<++s)return(0,_util.warn)("Load test font never loaded."),void A();u.font="30px "+e,u.fillText(".",0,20),0<u.getImageData(0,0,1,1).data[3]?A():setTimeout(t.bind(null,e,A))}(l,function(){o._document.body.removeChild(g),A.complete()})}}]),r}();var FontFaceObject=function(){function h(t,e){var A=e.isEvalSupported,r=void 0===A||A,n=e.disableFontFace,o=void 0!==n&&n,i=e.ignoreErrors,a=void 0!==i&&i,c=e.onUnsupportedFeature,u=e.fontRegistry,s=void 0===u?null:u;for(var l in _classCallCheck(this,h),this.compiledGlyphs=Object.create(null),t)this[l]=t[l];this.isEvalSupported=!1!==r,this.disableFontFace=!0===o,this.ignoreErrors=!0===a,this._onUnsupportedFeature=c,this.fontRegistry=s}return _createClass(h,[{key:"createNativeFontFace",value:function(){if(!this.data||this.disableFontFace)return null;var t=new FontFace(this.loadedName,this.data,{});return this.fontRegistry&&this.fontRegistry.registerFont(this),t}},{key:"createFontFaceRule",value:function(){if(!this.data||this.disableFontFace)return null;var t=(0,_util.bytesToString)(new Uint8Array(this.data)),e="url(data:".concat(this.mimetype,";base64,").concat(btoa(t),");"),A='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(e,"}");return this.fontRegistry&&this.fontRegistry.registerFont(this,e),A}},{key:"getPathGenerator",value:function(t,e){if(void 0!==this.compiledGlyphs[e])return this.compiledGlyphs[e];var n,o;try{n=t.get(this.loadedName+"_path_"+e)}catch(t){if(!this.ignoreErrors)throw t;return this._onUnsupportedFeature({featureId:_util.UNSUPPORTED_FEATURES.errorFontGetPath}),(0,_util.warn)('getPathGenerator - ignoring character: "'.concat(t,'".')),this.compiledGlyphs[e]=function(t,e){}}if(this.isEvalSupported&&_util.IsEvalSupportedCached.value){for(var A,r="",i=0,a=n.length;i<a;i++)A=void 0!==(o=n[i]).args?o.args.join(","):"",r+="c."+o.cmd+"("+A+");\n";return this.compiledGlyphs[e]=new Function("c","size",r)}return this.compiledGlyphs[e]=function(t,e){for(var A=0,r=n.length;A<r;A++)"scale"===(o=n[A]).cmd&&(o.args=[e,-e]),t[o.cmd].apply(t,o.args)}}}]),h}();exports.FontFaceObject=FontFaceObject;