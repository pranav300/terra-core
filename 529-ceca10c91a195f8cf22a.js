(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{1452:function(e,i,r){"use strict";r.r(i);var n=r(0),d=r.n(n),a=r(833),l=r(855);i.default=function(){return d.a.createElement(l.a,{id:"testing-radio-field",legend:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",help:"Help Message"},d.a.createElement(a.a,{id:"default",labelText:"Default Radio"}))}},855:function(e,i,r){"use strict";var n=r(0),d=r.n(n),a=r(1),l=r.n(a),o=r(11),t=r(10),s=r.n(t),c=r(4),u=r.n(c),_=r(6),m=r.n(_),p=r(28),g=r.n(p),h=r(161);function f(){return(f=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,i){if(null==e)return{};var r,n,d=function(e,i){if(null==e)return{};var r,n,d={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],i.indexOf(r)>=0||(d[r]=e[r]);return d}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(d[r]=e[r])}return d}var R=u.a.bind({"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___3b-Fy","orion-fusion-theme":"RadioField-module__orion-fusion-theme___1OOKK","radio-field":"RadioField-module__radio-field___ct8VD","is-inline":"RadioField-module__is-inline___2cCY2","legend-group":"RadioField-module__legend-group___9Aad-","legend-group-hidden":"RadioField-module__legend-group-hidden___1uTve",legend:"RadioField-module__legend___3dDrN","error-icon":"RadioField-module__error-icon___3-fM5","error-icon-hidden":"RadioField-module__error-icon-hidden___3ciPg",required:"RadioField-module__required___3B97W","required-hidden":"RadioField-module__required-hidden___RA9AV",optional:"RadioField-module__optional___2mnPg","help-text":"RadioField-module__help-text___3GS05","error-text":"RadioField-module__error-text___1Oz0b"}),q={children:l.a.node,error:l.a.node,help:l.a.node,hideRequired:l.a.bool,intl:l.a.shape({formatMessage:l.a.func}).isRequired,isInline:l.a.bool,isInvalid:l.a.bool,isLegendHidden:l.a.bool,legend:l.a.string.isRequired,legendAttrs:l.a.object,required:l.a.bool,showOptional:l.a.bool},v=function(e){var i=e.children,r=e.error,n=e.help,a=e.hideRequired,l=e.intl,o=e.isInvalid,t=e.isInline,c=e.isLegendHidden,u=e.legend,_=e.legendAttrs,p=e.required,q=e.showOptional,v=b(e,["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"]),O=d.a.useContext(m.a),E=s()(R("radio-field",{"is-inline":t},O.className),v.className),F=R(["legend",_.className]),w="terra-radio-field-description-".concat(g()()),y=n?"terra-radio-field-description-help-".concat(g()()):"",N=r?"terra-radio-field-description-error-".concat(g()()):"",x="".concat(w," ").concat(N," ").concat(y),I=d.a.createElement("legend",{id:w,className:R(["legend-group",{"legend-group-hidden":c}])},d.a.createElement("div",f({},_,{className:F}),o&&d.a.createElement("span",{className:R("error-icon")}),p&&(o||!a)&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{"aria-hidden":"true",className:R("required")},"*"),d.a.createElement(h.default,{text:l.formatMessage({id:"Terra.form.field.required"})})),u,p&&!o&&a&&d.a.createElement("span",{className:R("required-hidden")},"*"),q&&!p&&d.a.createElement("span",{className:R("optional")},l.formatMessage({id:"Terra.form.field.optional"})),!o&&d.a.createElement("span",{className:R("error-icon-hidden")}))),j=d.a.Children.map(i,(function(e){return e&&e.type.isRadio?d.a.cloneElement(e,{inputAttrs:{"aria-describedby":x}}):e}));return d.a.createElement("fieldset",f({},v,{"aria-required":p,required:p,className:E}),I,j,o&&r&&d.a.createElement("div",{id:N,className:R("error-text")},r),n&&d.a.createElement("div",{id:y,className:R("help-text")},n))};v.propTypes=q,v.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};i.a=Object(o.injectIntl)(v)}}]);