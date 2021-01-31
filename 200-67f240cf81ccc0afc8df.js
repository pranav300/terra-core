(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1847:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var l=n(0),a=n.n(l),r=n(309),o=n(818),i=n(844),c=function(){return a.a.createElement(o.b,{summaryId:"example-static-table",summary:"This table shows an implementation of static width table columns.",numberOfColumns:4,cellPaddingStyle:"standard",columnWidths:[{static:{value:60,unit:"px"}},{static:{value:45,unit:"px"}},{static:{value:5,unit:"rem"}},{static:{value:120,unit:"px"}}],dividerStyle:"both",headerData:{cells:[{key:"cell-0",id:"unique-cell-0",children:"60px"},{key:"cell-1",id:"unique-cell-1",children:"45px"},{key:"cell-2",id:"unique-cell-2",children:"5rem"},{key:"cell-3",id:"unique-cell-3",children:"120px"}]},bodyData:[{rows:(e=i.a,e.map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var t,n})))}]});var e};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function m(e){var t=e.components,n=s(e,["components"]);return Object(r.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = rowData => (\n  {\n    key: rowData.key,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map(childItem => createRow(childItem));\n\nconst StaticWidthTable = () => (\n  <Table\n    summaryId=\"example-static-table\"\n    summary=\"This table shows an implementation of static width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    columnWidths={[\n      { static: { value: 60, unit: 'px' } },\n      { static: { value: 45, unit: 'px' } },\n      { static: { value: 5, unit: 'rem' } },\n      { static: { value: 120, unit: 'px' } },\n    ]}\n    dividerStyle=\"both\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'unique-cell-0', children: '60px' },\n        { key: 'cell-1', id: 'unique-cell-1', children: '45px' },\n        { key: 'cell-2', id: 'unique-cell-2', children: '5rem' },\n        { key: 'cell-3', id: 'unique-cell-3', children: '120px' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default StaticWidthTable;\n\n")))}m.isMDXComponent=!0;var p=n(802),f=n.n(p),y=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.a.createElement(f.a,{title:t||"Static Width Table",description:n,example:a.a.createElement(c,null),exampleSrc:a.a.createElement(m,null),isExpanded:l})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x={};function w(e){var t=e.components,n=h(e,["components"]);return Object(r.mdx)("wrapper",b({},x,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"terra-table---static-width-columns"},"Terra Table - Static Width Columns"),Object(r.mdx)("h2",{id:"create-row-and-cell-generation-functions"},"Create Row and Cell Generation Functions"),Object(r.mdx)("p",null,"First we declare our method of creating our rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n\n+ const createRows = data => data.map(childItem => createRow(childItem));\n")),Object(r.mdx)("p",null,"Followed by unpacking our cell data into those rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(r.mdx)("p",null,"And then we define the functional component returning our table."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const StaticWidthTable = () => (\n+   <Table\n+     summaryId=\"example-static-table\"\n+     summary=\"This table shows an implementation of static width table columns.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: `unique-cell-0`, children: '60px' },\n+         { key: 'cell-1', id: `unique-cell-1`, children: '45px' },\n+         { key: 'cell-2', id: `unique-cell-2`, children: '5rem' },\n+         { key: 'cell-3', id: `unique-cell-3`, children: '120px' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),Object(r.mdx)("p",null,"Then in order to adjust our columns, we set the ",Object(r.mdx)("inlineCode",{parentName:"p"},"columnWidths")," prop with your appropriate index based width values."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"const StaticWidthTable = () => (\n  <Table\n    summaryId=\"example-static-table\"\n    summary=\"This table shows an implementation of static width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n+   columnWidths={[\n+     { static: { value: 80, unit: 'px' } },\n+     { static: { value: 55, unit: 'px' } },\n+     { static: { value: 5, unit: 'rem' } },\n+     { static: { value: 120, unit: 'px' } },\n+   ]}\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: `unique-cell-0`, children: '60px' },\n        { key: 'cell-1', id: `unique-cell-1`, children: '45px' },\n        { key: 'cell-2', id: `unique-cell-2`, children: '5rem' },\n        { key: 'cell-3', id: `unique-cell-3`, children: '120px' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n")),Object(r.mdx)("p",null,"Using these steps we get the following example:"),Object(r.mdx)(y,{mdxType:"StaticWidthTable"}))}w.isMDXComponent=!0},802:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=m(n(1)),o=m(n(4)),i=n(97),c=m(n(806)),u=m(n(160)),s=n(9),d=m(n(807));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(l=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);l=!0);}catch(e){a=!0,r=e}finally{try{l||null==i.return||i.return()}finally{if(a)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var b=o.default.bind(d.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,o=e.description,d=e.isExpanded,m=f((0,a.useState)(d),2),p=m[0],y=m[1],h=f((0,a.useState)(!1),2),_=h[0],g=h[1],v=a.default.useContext(i.ThemeContext),k=void 0!==l,O=function(){g(!_),p&&y(!p)},T=function(){y(!p),_&&g(!_)},E=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:b("template",v.className)},a.default.createElement("div",{className:b("header")},r&&a.default.createElement("h2",{className:b("title")},r)),a.default.createElement("div",{className:b("content")},o&&a.default.createElement("div",{className:b("description")},o),t),a.default.createElement("div",{className:b("footer")},n?a.default.createElement("div",{className:b("button-container")},k&&a.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":_}),onClick:O,onKeyDown:function(e){return E(e,O)},onBlur:x,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:b("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(u.default,{className:b("chevron")})),a.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":p}),onClick:T,onKeyDown:function(e){return E(e,T)},onBlur:x,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:b("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(u.default,{className:b("chevron")}))):null,a.default.createElement("div",null,_&&a.default.createElement("div",{className:b("css")},l),p&&a.default.createElement("div",{className:b("code")},n))))};_.propTypes=h,_.defaultProps={isExpanded:!1};var g=_;t.default=g},806:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(12);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return a.a.createElement(r.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=i},807:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},844:function(e,t,n){"use strict";t.a=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}]}}]);