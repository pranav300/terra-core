(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{1464:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),u=n.n(a),c=n(127),l=n(809);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=u.a.bind(l.a),m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,a=s(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this)).state={value:[]},e.handleChange=e.handleChange.bind(b(e)),e}return t=u,(n=[{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:d("content-wrapper")},o.a.createElement(c.a,{id:"multiple",onChange:this.handleChange,placeholder:"Select a color",value:this.state.value,variant:"multiple"},o.a.createElement(c.a.Option,{value:"blue",display:"Blue"}),o.a.createElement(c.a.Option,{value:"green",display:"Green"}),o.a.createElement(c.a.Option,{value:"purple",display:"Purple"}),o.a.createElement(c.a.Option,{value:"red",display:"Red"}),o.a.createElement(c.a.Option,{value:"violet",display:"Violet"})))}}])&&f(t.prototype,n),r&&f(t,r),u}(o.a.Component);t.default=m},809:function(e,t,n){"use strict";t.a={"content-wrapper":"Select-test-module__content-wrapper___200CU","bottom-left":"Select-test-module__bottom-left___JP1So"}}}]);