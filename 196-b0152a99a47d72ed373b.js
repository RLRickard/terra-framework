(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1100:function(e,t,r){"use strict";r.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2m4Lc","orion-fusion-theme":"Input-module__orion-fusion-theme___1P-S4","form-input":"Input-module__form-input___3oe9F","form-error":"Input-module__form-error___3tyh6","form-incomplete":"Input-module__form-incomplete___2OzNB"}},1101:function(e,t){var r,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var i,d=[],c=!1,f=-1;function s(){c&&i&&(c=!1,i.length?d=i.concat(d):f=-1,d.length&&p())}function p(){if(!c){var e=u(s);c=!0;for(var t=d.length;t;){for(i=d,d=[];++f<t;)i&&i[f].run();f=-1,t=d.length}i=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];d.push(new m(e,t)),1!==d.length||c||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1108:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(r(0)),o=f(r(3)),l=f(r(21)),u=f(r(7)),i=f(r(12)),d=f(r(1100)),c=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var a=O(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=u.default.bind(d.default),j={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,onInput:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},I={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,r,n,o=v(u);function u(){return y(this,u),o.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,o=t.isIncomplete,u=t.isInvalid,i=t.onBlur,d=t.onChange,f=t.onFocus,y=t.onInput,h=t.name,_=t.pattern,v=t.refCallback,g=t.required,O=t.type,j=t.ariaLabel,I=t.value,P=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},b(t,c)),F=this.context,E=(void 0===O||["text","number","password","email","search","tel","url","hidden"].includes(O))&&w("form-input",{"form-error":u},{"form-incomplete":o&&g&&!u},F.className),T=(0,l.default)(E,P.className);return P&&Object.prototype.hasOwnProperty.call(P,"aria-label")?e=j||P["aria-label"]:j&&(e=j),P["aria-label"]=e,g&&(P["aria-required"]="true"),void 0!==I?P.value=I:void 0!==r&&(P.defaultValue=r),P.placeholder&&(P.placeholder=null),a.default.createElement("input",s({},P,{ref:function(e){v&&v(e)},name:h,type:O,pattern:_,onBlur:i,onChange:d,onFocus:f,onInput:y,disabled:n,required:g,className:T}))}}])&&h(t.prototype,r),n&&h(t,n),u}(a.default.Component);P.propTypes=j,P.defaultProps=I,P.contextType=i.default,P.isInput=!0;var F=P;t.default=F},1121:function(e,t,r){"use strict";var n=r(4),a=r(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(79)),l=n(r(23)),u=n(r(47)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=O(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(0)),d=n(r(3)),c=r(19),f=n(r(21)),s=n(r(7)),p=n(r(12)),m=n(r(229)),b=n(r(501)),y=n(r(254)),h=n(r(1127)),_=n(r(1146)),v=n(r(1123)),g=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"];function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(O=function(e){return e?r:t})(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=s.default.bind(v.default),P={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,intl:d.default.shape({formatMessage:d.default.func}),legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},F={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},E=function(e){var t=e.dayAttributes,r=e.disabled,n=e.displayFormat,a=e.error,o=e.help,d=e.hideRequired,c=e.isIncomplete,s=e.isInline,v=e.isInvalid,O=e.isLegendHidden,w=e.intl,P=e.legend,F=e.legendAttributes,E=e.monthAttributes,T=(e.maxWidth,e.name),D=e.onBlur,x=e.onChange,q=e.onFocus,k=e.required,A=e.showOptional,M=e.value,C=e.yearAttributes,N=(0,u.default)(e,g),L=(0,i.useRef)((0,m.default)()),S=i.default.useContext(p.default),B=(0,f.default)(I("date-input-field",{"is-inline":s},S.className),N.className),R=(0,f.default)(I("legend",S.className),F.className),W="terra-date-input-field-description-help-".concat(L.current),V="terra-date-input-field-description-error-".concat(L.current),H=W;a&&v&&(H="".concat(V," ").concat(W));var z=E&&E["aria-describedby"],J=t&&t["aria-describedby"],K=C&&C["aria-describedby"],U=z?"".concat(H," ").concat(z):H,Y=J?"".concat(H," ").concat(J):H,G=K?"".concat(H," ").concat(K):H,Q=i.default.createElement("legend",{className:I(["legend-group",{"legend-group-hidden":O}])},i.default.createElement("div",(0,l.default)({},F,{className:R}),v&&i.default.createElement("span",{className:I("error-icon")},i.default.createElement(b.default,null)),k&&(v||!d)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:I("required")},"*"),i.default.createElement(y.default,{text:w.formatMessage({id:"Terra.date.input.required"})})),P,k&&!v&&d&&i.default.createElement("span",{className:I("required-hidden")},"*"),A&&!k&&i.default.createElement("span",{className:I("optional")},w.formatMessage({id:"Terra.date.input.optional"})),!v&&i.default.createElement("span",{className:I("error-icon-hidden")}))),X=_.default.getDateFormat({displayFormat:n,intl:w});return i.default.createElement("fieldset",(0,l.default)({},N,{className:B}),Q,i.default.createElement(h.default,{name:T,onChange:x,onBlur:D,onFocus:q,value:M,displayFormat:n,disabled:r,isInvalid:v,isIncomplete:c,useExternalFormatMask:!0,required:k,monthAttributes:j(j({},E),{"aria-describedby":U}),dayAttributes:j(j({},t),{"aria-describedby":Y}),yearAttributes:j(j({},C),{"aria-describedby":G})}),v&&a&&i.default.createElement("div",{id:V,className:I("error-text")},a),o?i.default.createElement("div",{id:W,className:I("help-text"),"aria-label":"".concat(w.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(X,", ").concat(o)},X," ",o):i.default.createElement("div",{id:W,className:I("help-text"),"aria-label":"".concat(w.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(X)},X))};E.propTypes=P,E.defaultProps=F;var T=(0,c.injectIntl)(E);t.default=T},1123:function(e,t,r){"use strict";r.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___1b5gY","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___3k5l6","date-input-field":"DateInputField-module__date-input-field___1M_VI","is-inline":"DateInputField-module__is-inline___1Etvd","legend-group":"DateInputField-module__legend-group___1mhF8","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BWTV",legend:"DateInputField-module__legend___2cUjM","error-icon":"DateInputField-module__error-icon___3WS5S","error-icon-hidden":"DateInputField-module__error-icon-hidden___3zOAH",required:"DateInputField-module__required___sd-Md","required-hidden":"DateInputField-module__required-hidden___2l4dy",optional:"DateInputField-module__optional___2WxM1","help-text":"DateInputField-module__help-text___2Koxr","error-text":"DateInputField-module__error-text___3u5L4"}},1951:function(e,t,r){"use strict";var n=r(4),a=r(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(58)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(0)),u=n(r(1121));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var d=function(){var e=(0,l.useState)("1999-03-10"),t=(0,o.default)(e,2),r=t[0],n=t[1],a=(0,l.useState)(!1),i=(0,o.default)(a,2),d=i[0],c=i[1];return l.default.createElement("div",null,l.default.createElement(u.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return n(t)},required:!0,error:"Error message",help:"Help message",isInvalid:d}),l.default.createElement("p",null,"DateInputField Value: ".concat(r)),l.default.createElement("button",{type:"button",onClick:function(){return c((function(e){return!e}))}},"Toggle isInvalid"))};t.default=d}}]);