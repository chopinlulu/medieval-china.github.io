"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},t=Object.prototype,l=t.hasOwnProperty,f=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var i,a,c,u,o=e&&e.prototype instanceof y?e:y,s=Object.create(o.prototype),l=new P(n||[]);return f(s,"_invoke",{value:(i=t,a=r,c=l,u="suspendedStart",function(t,e){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===t)throw e;return k()}for(c.method=t,c.arg=e;;){var r=c.delegate;if(r){var n=_(r,c);if(n){if(n===p)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===u)throw u="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u="executing";var o=h(i,a,c);if("normal"===o.type){if(u=c.done?"completed":"suspendedYield",o.arg===p)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u="completed",c.method="throw",c.arg=o.arg)}})}),s}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var p={};function y(){}function u(){}function s(){}var v={};i(v,o,function(){return this});var d=Object.getPrototypeOf,m=d&&d(d(E([])));m&&m!==t&&l.call(m,o)&&(v=m);var g=s.prototype=y.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function b(u,s){var e;f(this,"_invoke",{value:function(r,n){function t(){return new s(function(t,e){!function e(t,r,n,o){var i=h(u[t],u,r);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"==_typeof(c)&&l.call(c,"__await")?s.resolve(c.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):s.resolve(c).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)})}o(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(l.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return f(g,"constructor",{value:u.prototype=s,configurable:!0}),f(s,"constructor",{value:u,configurable:!0}),u.displayName=i(s,n,"GeneratorFunction"),a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,s):(t.__proto__=s,i(t,n,"GeneratorFunction")),t.prototype=Object.create(g),t},a.awrap=function(t){return{__await:t}},w(b.prototype),i(b.prototype,r,function(){return this}),a.AsyncIterator=b,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new b(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),i(g,n,"Generator"),i(g,o,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),a.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=E,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc"),c=l.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},a}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);var n=r.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.PasswordPrompt=void 0;var _pdf=require("../pdf"),PasswordPrompt=function(){function i(t,e,r){var n=this,o=3<arguments.length&&void 0!==arguments[3]&&arguments[3];_classCallCheck(this,i),this.overlayName=t.overlayName,this.container=t.container,this.label=t.label,this.input=t.input,this.submitButton=t.submitButton,this.cancelButton=t.cancelButton,this.overlayManager=e,this.l10n=r,this._isViewerEmbedded=o,this.updateCallback=null,this.reason=null,this.submitButton.addEventListener("click",this.verify.bind(this)),this.cancelButton.addEventListener("click",this.close.bind(this)),this.input.addEventListener("keydown",function(t){13===t.keyCode&&n.verify()}),this.overlayManager.register(this.overlayName,this.container,this.close.bind(this),!0)}var t;return _createClass(i,[{key:"open",value:(t=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.overlayManager.open(this.overlayName);case 2:return e=this.reason===_pdf.PasswordResponses.INCORRECT_PASSWORD,this._isViewerEmbedded&&!e||this.input.focus(),t.next=6,this.l10n.get("password_".concat(e?"invalid":"label"));case 6:this.label.textContent=t.sent;case 7:case"end":return t.stop()}},t,this)})),function(){return t.apply(this,arguments)})},{key:"close",value:function(){var t=this;this.overlayManager.close(this.overlayName).then(function(){t.input.value=""})}},{key:"verify",value:function(){var t=this.input.value;0<(null==t?void 0:t.length)&&(this.close(),this.updateCallback(t))}},{key:"setUpdateCallback",value:function(t,e){this.updateCallback=t,this.reason=e}}]),i}();exports.PasswordPrompt=PasswordPrompt;