(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1297:function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),a=r(22),o=r(311);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(){var t=u(Object(n.useState)(!0),2),e=t[0],r=t[1];return e?i.a.createElement(o.default,{id:"dismissibleAlert",type:"success",onDismiss:function(){return r(!1)}},"This is a dismissable Alert."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"dismissed"},"Alert was dismissed"),i.a.createElement(a.default,{text:"Trigger Alert",onClick:function(){r(!0)}}))}}}]);