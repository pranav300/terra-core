(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{1526:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var o=n(0),r=n.n(o),u=n(4),c=n.n(u),i=n(815),a=n(832);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b(t);if(e){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=c.a.bind(a.a),w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(c,t);var e,n,o,u=s(c);function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),t=u.call(this),window.DocumentTouch||(t.resetDocumentTouch=!0,window.DocumentTouch=function(){},window.DocumentTouch.prototype=Document.prototype),t}return e=c,(n=[{key:"componentDidUpdate",value:function(){window.DocumentTouch||(this.resetDocumentTouch=!0,window.DocumentTouch=function(){},window.DocumentTouch.prototype=Document.prototype)}},{key:"componentWillUnmount",value:function(){this.resetDocumentTouch&&delete window.DocumentTouch}},{key:"render",value:function(){return r.a.createElement("div",{className:m("content-wrapper")},r.a.createElement(i.a,{id:"auto-resizable",cols:"2",isAutoResizable:!0,defaultValue:"Default Value",ariaLabel:"label"}))}}])&&l(e.prototype,n),o&&l(e,o),c}(r.a.Component)}}]);