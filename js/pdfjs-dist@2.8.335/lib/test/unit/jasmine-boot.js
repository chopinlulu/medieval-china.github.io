"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},t=Object.prototype,p=t.hasOwnProperty,f=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},i=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function o(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{o({},"")}catch(t){o=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o,a,s,c,i=e&&e.prototype instanceof h?e:h,u=Object.create(i.prototype),p=new P(n||[]);return f(u,"_invoke",{value:(o=t,a=r,s=p,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return L()}for(s.method=t,s.arg=e;;){var r=s.delegate;if(r){var n=w(r,s);if(n){if(n===d)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===c)throw c="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c="executing";var i=l(o,a,s);if("normal"===i.type){if(c=s.done?"completed":"suspendedYield",i.arg===d)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(c="completed",s.method="throw",s.arg=i.arg)}})}),u}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=s;var d={};function h(){}function c(){}function u(){}var y={};o(y,i,function(){return this});var m=Object.getPrototypeOf,j=m&&m(m(S([])));j&&j!==t&&p.call(j,i)&&(y=j);var v=u.prototype=h.prototype=Object.create(y);function _(t){["next","throw","return"].forEach(function(e){o(t,e,function(t){return this._invoke(e,t)})})}function g(c,u){var e;f(this,"_invoke",{value:function(r,n){function t(){return new u(function(t,e){!function e(t,r,n,i){var o=l(c[t],c,r);if("throw"!==o.type){var a=o.arg,s=a.value;return s&&"object"==_typeof(s)&&p.call(s,"__await")?u.resolve(s.__await).then(function(t){e("next",t,n,i)},function(t){e("throw",t,n,i)}):u.resolve(s).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,i)})}i(o.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=l(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function S(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(p.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return f(v,"constructor",{value:c.prototype=u,configurable:!0}),f(u,"constructor",{value:c,configurable:!0}),c.displayName=o(u,n,"GeneratorFunction"),a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,o(t,n,"GeneratorFunction")),t.prototype=Object.create(v),t},a.awrap=function(t){return{__await:t}},_(g.prototype),o(g.prototype,r,function(){return this}),a.AsyncIterator=g,a.async=function(t,e,r,n,i){void 0===i&&(i=Promise);var o=new g(s(t,e,r,n),i);return a.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(v),o(v,n,"Generator"),o(v,i,function(){return this}),o(v,"toString",function(){return"[object Generator]"}),a.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&p.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return o.type="throw",o.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var i=this.tryEntries[e],o=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var a=p.call(i,"catchLoc"),s=p.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&p.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},a}function _getRequireWildcardCache(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(t){return t?r:e})(t)}function _interopRequireWildcard(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==_typeof(t)&&"function"!=typeof t)return{default:t};var r=_getRequireWildcardCache(e);if(r&&r.has(t))return r.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=i?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}return n.default=t,r&&r.set(t,n),n}function asyncGeneratorStep(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function _asyncToGenerator(s){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=s.apply(t,a);function i(t){asyncGeneratorStep(n,e,r,i,o,"next",t)}function o(t){asyncGeneratorStep(n,e,r,i,o,"throw",t)}i(void 0)})}}var _worker_options=require("pdfjs/display/worker_options.js"),_is_node=require("pdfjs/shared/is_node.js"),_fetch_stream=require("pdfjs/display/fetch_stream.js"),_network=require("pdfjs/display/network.js"),_api=require("pdfjs/display/api.js"),_testreporter=require("./testreporter.js");function initializePDFJS(t){return _initializePDFJS.apply(this,arguments)}function _initializePDFJS(){return(_initializePDFJS=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(["pdfjs-test/unit/annotation_spec.js","pdfjs-test/unit/annotation_storage_spec.js","pdfjs-test/unit/api_spec.js","pdfjs-test/unit/bidi_spec.js","pdfjs-test/unit/cff_parser_spec.js","pdfjs-test/unit/cmap_spec.js","pdfjs-test/unit/colorspace_spec.js","pdfjs-test/unit/core_utils_spec.js","pdfjs-test/unit/crypto_spec.js","pdfjs-test/unit/custom_spec.js","pdfjs-test/unit/default_appearance_spec.js","pdfjs-test/unit/display_svg_spec.js","pdfjs-test/unit/display_utils_spec.js","pdfjs-test/unit/document_spec.js","pdfjs-test/unit/encodings_spec.js","pdfjs-test/unit/evaluator_spec.js","pdfjs-test/unit/function_spec.js","pdfjs-test/unit/fetch_stream_spec.js","pdfjs-test/unit/message_handler_spec.js","pdfjs-test/unit/metadata_spec.js","pdfjs-test/unit/murmurhash3_spec.js","pdfjs-test/unit/network_spec.js","pdfjs-test/unit/network_utils_spec.js","pdfjs-test/unit/parser_spec.js","pdfjs-test/unit/pdf_find_controller_spec.js","pdfjs-test/unit/pdf_find_utils_spec.js","pdfjs-test/unit/pdf_history_spec.js","pdfjs-test/unit/primitives_spec.js","pdfjs-test/unit/scripting_spec.js","pdfjs-test/unit/stream_spec.js","pdfjs-test/unit/type1_parser_spec.js","pdfjs-test/unit/ui_utils_spec.js","pdfjs-test/unit/unicode_spec.js","pdfjs-test/unit/util_spec.js","pdfjs-test/unit/writer_spec.js","pdfjs-test/unit/xfa_formcalc_spec.js","pdfjs-test/unit/xfa_parser_spec.js","pdfjs-test/unit/xfa_tohtml_spec.js","pdfjs-test/unit/xml_spec.js"].map(function(t){return Promise.resolve("".concat(t)).then(function(t){return _interopRequireWildcard(require(t))})}));case 2:if(_is_node.isNodeJS)throw new Error("The `gulp unittest` command cannot be used in Node.js environments.");t.next=4;break;case 4:"undefined"!=typeof Response&&"body"in Response.prototype&&"undefined"!=typeof ReadableStream?(0,_api.setPDFNetworkStreamFactory)(function(t){return new _fetch_stream.PDFFetchStream(t)}):(0,_api.setPDFNetworkStreamFactory)(function(t){return new _network.PDFNetworkStream(t)}),_worker_options.GlobalWorkerOptions.workerSrc="../../build/generic/build/pdf.worker.js",e();case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){window.jasmine=jasmineRequire.core(jasmineRequire),jasmineRequire.html(jasmine);var t=jasmine.getEnv(),e=jasmineRequire.interface(jasmine,t);!function(t,e){for(var r in e)t[r]=e[r]}(window,e);var r=new jasmine.QueryString({getWindowLocation:function(){return window.location}}),n={failFast:r.getParam("failFast"),oneFailurePerSpec:r.getParam("oneFailurePerSpec"),hideDisabled:r.getParam("hideDisabled")},i=r.getParam("random");void 0!==i&&""!==i&&(n.random=i);var o=r.getParam("seed");o&&(n.seed=o);var a=new jasmine.HtmlReporter({env:t,navigateWithNewParam:function(t,e){return r.navigateWithNewParam(t,e)},addToExistingQueryString:function(t,e){return r.fullStringWithNewParam(t,e)},getContainer:function(){return document.body},createElement:function(){return document.createElement.apply(document,arguments)},createTextNode:function(){return document.createTextNode.apply(document,arguments)},timer:new jasmine.Timer});if(t.addReporter(a),r.getParam("browser")){var s=new _testreporter.TestReporter(r.getParam("browser"));t.addReporter(s)}var c=new jasmine.HtmlSpecFilter({filterString:function(){return r.getParam("spec")}});function u(){initializePDFJS(function(){a.initialize(),t.execute()})}n.specFilter=function(t){return c.matches(t.getFullName())},t.configure(n),jasmine.DEFAULT_TIMEOUT_INTERVAL=3e4,"interactive"===document.readyState||"complete"===document.readyState?u():document.addEventListener("DOMContentLoaded",u,!0)}();