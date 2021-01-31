(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{1771:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var r=n(0),o=n.n(r),a=n(309),c=n(925),l=n(840);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){var e=p(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.d,{label:"Export"},o.a.createElement(l.a,{label:"Export as PDF",onSelect:function(){return n("Export as PDF clicked")}}),o.a.createElement(l.a,{label:"Export as Plain Text",onSelect:function(){return n("Export as Plain Text clicked")}}),o.a.createElement(l.a,{label:"Export as Web Page",onSelect:function(){return n("Export as Web Page clicked")}}),o.a.createElement(l.a,{label:"Export as XML",onSelect:function(){return n("Export as XML clicked")}})),o.a.createElement("p",null,t))};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={};function b(e){var t=e.components,n=m(e,["components"]);return Object(a.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport DropdownButton, { Item } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <DropdownButton\n        label=\"Export\"\n      >\n        <Item label=\"Export as PDF\" onSelect={() => setMessage('Export as PDF clicked')} />\n        <Item label=\"Export as Plain Text\" onSelect={() => setMessage('Export as Plain Text clicked')} />\n        <Item label=\"Export as Web Page\" onSelect={() => setMessage('Export as Web Page clicked')} />\n        <Item label=\"Export as XML\" onSelect={() => setMessage('Export as XML clicked')} />\n      </DropdownButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}b.isMDXComponent=!0;var f=n(802),O=n.n(f),y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:t||"Default Dropdown Button",description:n,example:o.a.createElement(u,null),exampleSrc:o.a.createElement(b,null),isExpanded:r})};function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(){var e=x(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.d,{label:"Dropdown",variant:l.c.EMPHASIS},o.a.createElement(l.a,{label:"1st Option",onSelect:function(){return n("1st option clicked")}}),o.a.createElement(l.a,{label:"2nd Option",onSelect:function(){return n("2nd option clicked")}}),o.a.createElement(l.a,{label:"3rd Option",onSelect:function(){return n("3rd option clicked")}}),o.a.createElement(l.a,{label:"4th Option",onSelect:function(){return n("4th option clicked")}})),o.a.createElement("p",null,t))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w={};function S(e){var t=e.components,n=v(e,["components"]);return Object(a.mdx)("wrapper",g({},w,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",g({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport DropdownButton, { Item, Variants } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <DropdownButton\n        label=\"Dropdown\"\n        variant={Variants.EMPHASIS}\n      >\n        <Item label=\"1st Option\" onSelect={() => setMessage('1st option clicked')} />\n        <Item label=\"2nd Option\" onSelect={() => setMessage('2nd option clicked')} />\n        <Item label=\"3rd Option\" onSelect={() => setMessage('3rd option clicked')} />\n        <Item label=\"4th Option\" onSelect={() => setMessage('4th option clicked')} />\n      </DropdownButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}S.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:t||"Emphasis Dropdown Button",description:n,example:o.a.createElement(h,null),exampleSrc:o.a.createElement(S,null),isExpanded:r})};function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(){var e=D(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.d,{label:"Dropdown",variant:"ghost"},o.a.createElement(l.a,{label:"1st Option",onSelect:function(){return n("1st option clicked")}}),o.a.createElement(l.a,{label:"2nd Option",onSelect:function(){return n("2nd option clicked")}}),o.a.createElement(l.a,{label:"3rd Option",onSelect:function(){return n("3rd option clicked")}}),o.a.createElement(l.a,{label:"4th Option",onSelect:function(){return n("4th option clicked")}})),o.a.createElement("p",null,t))};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var T={};function X(e){var t=e.components,n=N(e,["components"]);return Object(a.mdx)("wrapper",I({},T,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",I({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport DropdownButton, { Item } from 'terra-dropdown-button';\n\nconst GhostDropdownButton = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <DropdownButton\n        label=\"Dropdown\"\n        variant=\"ghost\"\n      >\n        <Item label=\"1st Option\" onSelect={() => setMessage('1st option clicked')} />\n        <Item label=\"2nd Option\" onSelect={() => setMessage('2nd option clicked')} />\n        <Item label=\"3rd Option\" onSelect={() => setMessage('3rd option clicked')} />\n        <Item label=\"4th Option\" onSelect={() => setMessage('4th option clicked')} />\n      </DropdownButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default GhostDropdownButton;\n\n")))}X.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:t||"Ghost Dropdown Button",description:n,example:o.a.createElement(k,null),exampleSrc:o.a.createElement(X,null),isExpanded:r})};function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(){var e=B(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.d,{label:"Dropdown",isDisabled:!0},o.a.createElement(l.a,{label:"1st Option",onSelect:function(){return n("1st option clicked")}}),o.a.createElement(l.a,{label:"2nd Option",onSelect:function(){return n("2nd option clicked")}}),o.a.createElement(l.a,{label:"3rd Option",onSelect:function(){return n("3rd option clicked")}}),o.a.createElement(l.a,{label:"4th Option",onSelect:function(){return n("4th option clicked")}})),o.a.createElement("p",null,t))};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R={};function V(e){var t=e.components,n=F(e,["components"]);return Object(a.mdx)("wrapper",A({},R,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",A({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport DropdownButton, { Item } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <DropdownButton\n        label=\"Dropdown\"\n        isDisabled\n      >\n        <Item label=\"1st Option\" onSelect={() => setMessage('1st option clicked')} />\n        <Item label=\"2nd Option\" onSelect={() => setMessage('2nd option clicked')} />\n        <Item label=\"3rd Option\" onSelect={() => setMessage('3rd option clicked')} />\n        <Item label=\"4th Option\" onSelect={() => setMessage('4th option clicked')} />\n      </DropdownButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}V.isMDXComponent=!0;var q=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:t||"Disabled Dropdown Button",description:n,example:o.a.createElement(L,null),exampleSrc:o.a.createElement(V,null),isExpanded:r})};function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=function(){var e=U(Object(r.useState)("No option clicked"),2),t=e[0],n=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.d,{label:"Dropdown",isBlock:!0},o.a.createElement(l.a,{label:"1st Option",onSelect:function(){return n("1st option clicked")}}),o.a.createElement(l.a,{label:"2nd Option",onSelect:function(){return n("2nd option clicked")}}),o.a.createElement(l.a,{label:"3rd Option",onSelect:function(){return n("3rd option clicked")}}),o.a.createElement(l.a,{label:"4th Option",onSelect:function(){return n("4th option clicked")}})),o.a.createElement("p",null,t))};function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var J={};function z(e){var t=e.components,n=H(e,["components"]);return Object(a.mdx)("wrapper",$({},J,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",$({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport DropdownButton, { Item } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <DropdownButton\n        label=\"Dropdown\"\n        isBlock\n      >\n        <Item label=\"1st Option\" onSelect={() => setMessage('1st option clicked')} />\n        <Item label=\"2nd Option\" onSelect={() => setMessage('2nd option clicked')} />\n        <Item label=\"3rd Option\" onSelect={() => setMessage('3rd option clicked')} />\n        <Item label=\"4th Option\" onSelect={() => setMessage('4th option clicked')} />\n      </DropdownButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}z.isMDXComponent=!0;var K=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(O.a,{title:t||"Block Dropdown Button",description:n,example:o.a.createElement(W,null),exampleSrc:o.a.createElement(z,null),isExpanded:r})},Q=n(805),Y=n.n(Q);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ee=function(){return Object(a.mdx)(Y.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The options to display in the dropdown. Should be comprised of the subcomponent ",Object(a.mdx)("inlineCode",{parentName:"p"},"Item"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isBlock",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Determines whether the button should have block styling applied. The dropdown list will match the component's width."))}return t.isMDXComponent=!0,t({})}},{name:"isCompact",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the button has reduced padding for use in tables and single-row lists."))}return t.isMDXComponent=!0,t({})}},{name:"isDisabled",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Determines whether the button should be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Sets the text that will be shown on the dropdown button."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Z({parentName:"pre"},{className:"language-json"}),'[\n "neutral",\n "emphasis",\n "ghost"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'neutral'",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(a.mdx)("wrapper",Z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Sets the styles of the component, one of ",Object(a.mdx)("inlineCode",{parentName:"p"},"neutral"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"emphasis"),", or ",Object(a.mdx)("inlineCode",{parentName:"p"},"ghost"),"."))}return t.isMDXComponent=!0,t({})}}]})};function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var re=function(){return Object(a.mdx)(Y.a,{rows:[{name:"label",type:function(){var e={};function t(t){var n=t.components,r=ne(t,["components"]);return Object(a.mdx)("wrapper",te({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ne(t,["components"]);return Object(a.mdx)("wrapper",te({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The text that is displayed on the option."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=ne(t,["components"]);return Object(a.mdx)("wrapper",te({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ne(t,["components"]);return Object(a.mdx)("wrapper",te({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=ne(t,["components"]);return Object(a.mdx)("wrapper",te({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=ne(t,["components"]);return Object(a.mdx)("wrapper",te({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}}]})};function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ce={};function le(e){var t=e.components,n=ae(e,["components"]);return Object(a.mdx)("wrapper",oe({},ce,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-dropdown-button"},"Terra Dropdown Button"),Object(a.mdx)("p",null,"The Terra Dropdown Button is a button that, when pressed, opens a dropdown with more buttons.\nIt is intended to allow the user to choose from a list of options with no special emphasis on any option."),Object(a.mdx)("p",null,"Children must be ",Object(a.mdx)("inlineCode",{parentName:"p"},"Item")," subcomponent for proper functionality and appearance."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",oe({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-dropdown-button"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",oe({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",oe({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",oe({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",oe({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",oe({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",oe({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",oe({parentName:"tr"},{align:null}),"react-intl"),Object(a.mdx)("td",oe({parentName:"tr"},{align:null}),"^2.8.0")))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",oe({parentName:"pre"},{className:"language-jsx"}),"import DropdownButton, { Item } from 'terra-dropdown-button';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",oe({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",oe({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",oe({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",oe({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"}),"LTR/RTL Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(y,{mdxType:"DefaultDropdownButton"}),Object(a.mdx)(E,{mdxType:"EmphasisDropdownButton"}),Object(a.mdx)(P,{mdxType:"GhostDropdownButton"}),Object(a.mdx)(q,{mdxType:"DisabledDropdownButton"}),Object(a.mdx)(K,{mdxType:"BlockDropdownButton"}),Object(a.mdx)("h2",{id:"dropdownbutton-props"},"DropdownButton Props"),Object(a.mdx)(ee,{mdxType:"DropdownButtonPropsTable"}),Object(a.mdx)("h2",{id:"item-props"},"Item Props"),Object(a.mdx)(re,{mdxType:"ItemPropsTable"}))}le.isMDXComponent=!0},806:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=c({},e);return o.a.createElement(a.a,t,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},925:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),a=n(803),c=n.n(a),l=function(e){var t=e.url;return o.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-dropdown-button",name:"terra-dropdown-button",version:"1.24.0",url:t})}}}]);