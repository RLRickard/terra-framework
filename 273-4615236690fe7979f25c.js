(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1122:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.SlidePanelPositions=t.default=void 0;var l=a(n(23)),o=a(n(47)),i=a(n(33)),r=a(n(39)),u=a(n(49)),s=a(n(41)),d=a(n(42)),c=a(n(43)),f=a(n(0)),p=a(n(3)),m=a(n(21)),_=a(n(7)),h=a(n(12)),v=a(n(1129)),P=["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"];function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var l=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var y=_.default.bind(v.default),g={START:"start",END:"end"};t.SlidePanelPositions=g;var S={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},O={panelBehavior:"overlay",panelPosition:g.END,panelSize:"small"},N=function(e){(0,s.default)(n,e);var t=b(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,u.default)(a)),a.mainNode=f.default.createRef(),a}return(0,r.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,n=e.mainAriaLabel,a=e.mainContent,i=e.panelContent,r=e.panelBehavior,u=e.panelPosition,s=e.panelSize,d=e.isFullscreen,c=e.isOpen,p=e.fill,_=(0,o.default)(e,P),h=this.context,v=(0,m.default)(y("slide-panel",{"is-open":c},{"is-fullscreen":d},{fill:p},h.className),_.className),b=f.default.createElement("div",{className:y(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",ref:this.setPanelNode},i),S=f.default.createElement("div",{className:y("main"),key:"main",tabIndex:"-1","aria-label":n,ref:this.mainNode},a),O=u===g.START?f.default.createElement(f.default.Fragment,null,b,S):f.default.createElement(f.default.Fragment,null,S,b);return f.default.createElement("div",(0,l.default)({},_,{className:v,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":u,"data-slide-panel-panel-size":s}),O)}}]),n}(f.default.Component);N.propTypes=S,N.defaultProps=O,N.contextType=h.default;var w=N;t.default=w},1129:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___3PlGc","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___2R-RA","slide-panel":"SlidePanel-module__slide-panel___3p50s",main:"SlidePanel-module__main___148ym",panel:"SlidePanel-module__panel___3U_Ba","is-open":"SlidePanel-module__is-open___2oBW3","is-fullscreen":"SlidePanel-module__is-fullscreen___2b64E",fill:"SlidePanel-module__fill___1cmXh"}},1194:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___2tOmz","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___3cz5N","main-content":"SlidePanelDocCommon-test-module__main-content___2y5xj","panel-content":"SlidePanelDocCommon-test-module__panel-content___95-83","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___Lhxw2",button:"SlidePanelDocCommon-test-module__button___3sOc1"}},2129:function(e,t,n){"use strict";var a=n(4),l=n(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(33)),i=a(n(39)),r=a(n(49)),u=a(n(41)),s=a(n(42)),d=a(n(43)),c=a(n(58)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(0)),p=a(n(7)),m=a(n(1122)),_=a(n(1194));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var l=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var P=p.default.bind(_.default),b=function(){var e=(0,f.useState)(0),t=(0,c.default)(e,2),n=t[0],a=t[1];return f.default.createElement("div",{id:"panel-content",className:P("panel-content")},f.default.createElement("button",{id:"focus-button",type:"button",className:P("button"),onClick:function(){a(n+1)}},"Increase Count "),n)},y=function(e){(0,u.default)(n,e);var t=v(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).state={panelHasStartPostion:!1},a.handlePanelToggle=a.handlePanelToggle.bind((0,r.default)(a)),a}return(0,i.default)(n,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelHasStartPostion:!e.panelHasStartPostion}}))}},{key:"render",value:function(){return f.default.createElement("div",{className:P("content-wrapper-toggle")},f.default.createElement(m.default,{id:"test-slide",mainContent:f.default.createElement("div",{className:P("main-content")},f.default.createElement("button",{type:"button",id:"test-toggle",className:P("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:f.default.createElement(b,null),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"squish",panelPosition:this.state.panelHasStartPostion?"start":"end",isOpen:!0,fill:!0}))}}]),n}(f.default.Component);t.default=y}}]);