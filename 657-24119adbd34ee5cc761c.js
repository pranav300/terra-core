(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{1544:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(4),l=n.n(i),a=n(891),s=n(832);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=l.a.bind(s.a),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,e);var t,n,r,i=p(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.call(this)).state={isInvalid:!1,isIncomplete:!1,required:!1},e.toggleInvalid=e.toggleInvalid.bind(f(e)),e.toggleIncomplete=e.toggleIncomplete.bind(f(e)),e}return t=l,(n=[{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"toggleIncomplete",value:function(){this.setState((function(e){return{isIncomplete:!e.isIncomplete,required:!e.required}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:m("content-wrapper")},o.a.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),o.a.createElement("button",{type:"button",id:"incomplete-toggle",onClick:this.toggleIncomplete},"Toggle Incomplete"),o.a.createElement(a.a,{defaultValue:"Value",inputId:"test-input",error:"Error message.",help:"Help message.",hideRequired:!0,inputAttrs:{name:"test"},isInvalid:this.state.isInvalid,isIncomplete:this.state.isIncomplete,required:this.state.required,label:"Label Text",labelAttrs:{className:"label"},showOptional:!0}))}}])&&c(t.prototype,n),r&&c(t,r),l}(o.a.Component);t.default=y},891:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),l=n.n(i),a=n(128),s=n(205),u=n(815);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={inputId:l.a.string.isRequired,label:l.a.string.isRequired,defaultValue:l.a.oneOfType([l.a.string,l.a.number]),disabled:l.a.bool,error:l.a.node,errorIcon:l.a.element,help:l.a.node,hideRequired:l.a.bool,inputAttrs:l.a.object,isAutoResizable:l.a.bool,isIncomplete:l.a.bool,isInline:l.a.bool,isInvalid:l.a.bool,isLabelHidden:l.a.bool,labelAttrs:l.a.object,maxWidth:l.a.string,onChange:l.a.func,onInput:l.a.func,required:l.a.bool,rows:l.a.number,size:l.a.oneOf(["small","medium","large","full"]),showOptional:l.a.bool,value:l.a.oneOfType([l.a.string,l.a.number]),disableResize:l.a.bool},b={defaultValue:void 0,disabled:!1,error:null,errorIcon:o.a.createElement(a.a,null),help:null,hideRequired:!1,isAutoResizable:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,onInput:void 0,rows:void 0,size:"small",required:!1,showOptional:!1,value:void 0,disableResize:!1},f=function(e){var t,n=e.defaultValue,r=e.disabled,i=e.disableResize,l=e.error,a=e.errorIcon,p=e.help,b=e.hideRequired,f=e.inputAttrs,h=e.inputId,m=e.isAutoResizable,y=e.isIncomplete,v=e.isInline,g=e.isInvalid,I=e.isLabelHidden,w=e.label,O=e.labelAttrs,R=e.maxWidth,q=e.required,z=e.rows,A=e.size,j=e.showOptional,E=e.onChange,S=e.onInput,x=e.value,P=d(e,["defaultValue","disabled","disableResize","error","errorIcon","help","hideRequired","inputAttrs","inputId","isAutoResizable","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","required","rows","size","showOptional","onChange","onInput","value"]);return p&&l&&g?t="".concat(h,"-error ").concat(h,"-help"):(p&&(t="".concat(h,"-help")),l&&g&&(t="".concat(h,"-error"))),P.placeholder&&(P.placeholder=null),o.a.createElement(s.a,c({},P,{label:w,labelAttrs:O,error:l,errorIcon:a,help:p,hideRequired:b,required:q,showOptional:j,isInvalid:g,isInline:v,isLabelHidden:I,htmlFor:h,maxWidth:R}),o.a.createElement(u.a,c({},f,{disabled:f.disabled||r,id:h,isAutoResizable:f.isAutoResizable||m,isIncomplete:y,onChange:E,onInput:S,value:x,defaultValue:n,"aria-describedby":t,rows:f.rows||z,size:f.size||A,disableResize:f.disableResize||i})))};f.propTypes=p,f.defaultProps=b,t.a=f}}]);