(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{2098:function(e,t,r){"use strict";var n=r(4),a=r(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(58)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(0)),u=n(r(78)),c=n(r(502));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var f=function(){var e=(0,o.useState)(!1),t=(0,i.default)(e,2),r=t[0],n=t[1];return o.default.createElement(o.default.Fragment,null,r&&o.default.createElement(c.default,{variant:"hazard-low",dialogTitle:"There is no message here.",acceptAction:{text:"Close",onClick:function(){n(!1)}},buttonOrder:"acceptFirst",emphasizedAction:"accept"}),o.default.createElement(u.default,{id:"trigger-notification-dialog",text:"Trigger NotificationDialog",onClick:function(){n(!0)}}))};t.default=f}}]);