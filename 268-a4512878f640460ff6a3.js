(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{1122:function(e,l,t){"use strict";var n=t(4);Object.defineProperty(l,"__esModule",{value:!0}),l.SlidePanelPositions=l.default=void 0;var a=n(t(23)),i=n(t(47)),u=n(t(33)),r=n(t(39)),o=n(t(49)),d=n(t(41)),s=n(t(42)),m=n(t(43)),c=n(t(0)),f=n(t(3)),p=n(t(21)),v=n(t(7)),E=n(t(12)),_=n(t(1129)),h=["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"];function I(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,m.default)(e);if(l){var a=(0,m.default)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return(0,s.default)(this,t)}}var P=v.default.bind(_.default),b={START:"start",END:"end"};l.SlidePanelPositions=b;var y={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool},O={panelBehavior:"overlay",panelPosition:b.END,panelSize:"small"},g=function(e){(0,d.default)(t,e);var l=I(t);function t(e){var n;return(0,u.default)(this,t),(n=l.call(this,e)).setPanelNode=n.setPanelNode.bind((0,o.default)(n)),n.mainNode=c.default.createRef(),n}return(0,r.default)(t,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,l=e.panelAriaLabel,t=e.mainAriaLabel,n=e.mainContent,u=e.panelContent,r=e.panelBehavior,o=e.panelPosition,d=e.panelSize,s=e.isFullscreen,m=e.isOpen,f=e.fill,v=(0,i.default)(e,h),E=this.context,_=(0,p.default)(P("slide-panel",{"is-open":m},{"is-fullscreen":s},{fill:f},E.className),v.className),I=c.default.createElement("div",{className:P(["panel"]),key:"panel",tabIndex:"-1","aria-label":l,"aria-hidden":m?"false":"true",ref:this.setPanelNode},u),y=c.default.createElement("div",{className:P("main"),key:"main",tabIndex:"-1","aria-label":t,ref:this.mainNode},n),O=o===b.START?c.default.createElement(c.default.Fragment,null,I,y):c.default.createElement(c.default.Fragment,null,y,I);return c.default.createElement("div",(0,a.default)({},v,{className:_,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":o,"data-slide-panel-panel-size":d}),O)}}]),t}(c.default.Component);g.propTypes=y,g.defaultProps=O,g.contextType=E.default;var S=g;l.default=S},1129:function(e,l,t){"use strict";t.r(l),l.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___3PlGc","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___2R-RA","slide-panel":"SlidePanel-module__slide-panel___3p50s",main:"SlidePanel-module__main___148ym",panel:"SlidePanel-module__panel___3U_Ba","is-open":"SlidePanel-module__is-open___2oBW3","is-fullscreen":"SlidePanel-module__is-fullscreen___2b64E",fill:"SlidePanel-module__fill___1cmXh"}},1134:function(e,l,t){"use strict";var n=t(4);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},1135:function(e,l,t){"use strict";var n=t(4);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},1527:function(e,l,t){"use strict";var n=t(4),a=t(16);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=n(t(0)),u=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=d(l);if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var r=i?Object.getOwnPropertyDescriptor(e,u):null;r&&(r.get||r.set)?Object.defineProperty(n,u,r):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(t(1122)),r=n(t(1134)),o=n(t(1135));function d(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:l})(e)}var s=function(){return i.default.createElement(u.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(o.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.END,panelSize:"large",isOpen:!0})};l.default=s}}]);