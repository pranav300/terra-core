(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1225:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return d}));r(0);var t=r(309),n=r(914);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c={};function d(e){var a=e.components,r=s(e,["components"]);return Object(t.mdx)("wrapper",o({},c,r,{components:a,mdxType:"MDXLayout"}),Object(t.mdx)(n.a,{mdxType:"Badge"}),Object(t.mdx)("h1",{id:"terra-arrange-upgrade-guide"},"Terra Arrange Upgrade Guide"),Object(t.mdx)("h2",{id:"changes-from-20-to-30"},"Changes from 2.0 to 3.0"),Object(t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(t.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),Object(t.mdx)("ul",null,Object(t.mdx)("li",{parentName:"ul"},"terra-doc-template")))}d.isMDXComponent=!0},803:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=c(r(0)),n=c(r(1)),o=c(r(4)),s=c(r(804));function c(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(s.default),u={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},i=function(e){var a=e.src,r=e.name,n=e.url,o=e.version,s=t.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},t.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),t.default.createElement("span",{className:d("badge-version")},"v".concat(o))),c=a?t.default.createElement("a",{className:d("badge"),href:a},t.default.createElement("span",{className:d("badge-name")},"github"),t.default.createElement("span",{className:d("badge-version")},"source")):void 0;return t.default.createElement("div",{className:d("badge-container")},s,c)};i.propTypes=u;var l=i;a.default=l},804:function(e,a,r){"use strict";r.r(a),a.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},914:function(e,a,r){"use strict";r.d(a,"a",(function(){return c}));var t=r(0),n=r.n(t),o=r(803),s=r.n(o),c=function(e){var a=e.url;return n.a.createElement(s.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-arrange",name:"terra-arrange",version:"3.42.0",url:a})}}}]);