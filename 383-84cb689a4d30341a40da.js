(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{1817:function(e,t,n){"use strict";var u=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(33)),l=u(n(39)),a=u(n(49)),r=u(n(41)),c=u(n(42)),s=u(n(43)),i=u(n(0)),d=u(n(78)),f=n(498),p=u(n(1818));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,s.default)(e);if(t){var o=(0,s.default)(this).constructor;n=Reflect.construct(u,arguments,o)}else n=u.apply(this,arguments);return(0,c.default)(this,n)}}var v=function(e){(0,r.default)(n,e);var t=h(n);function n(e){var u;return(0,o.default)(this,n),(u=t.call(this,e)).disclose=u.disclose.bind((0,a.default)(u)),u}return(0,l.default)(n,[{key:"disclose",value:function(){this.props.disclosureManager.disclose({preferredType:"modal",size:"",content:{key:"PopupModalContent",component:i.default.createElement(p.default,null)}})}},{key:"render",value:function(){return i.default.createElement(d.default,{className:"disclose",text:"Disclose Modal",onClick:this.disclose})}}]),n}(i.default.Component);v.propTypes={disclosureManager:f.disclosureManagerShape};var m=(0,f.withDisclosureManager)(v);t.default=m},1818:function(e,t,n){"use strict";var u=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(33)),l=u(n(39)),a=u(n(49)),r=u(n(41)),c=u(n(42)),s=u(n(43)),i=u(n(0)),d=u(n(78)),f=u(n(7)),p=n(498),h=u(n(228)),v=u(n(1819));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,s.default)(e);if(t){var o=(0,s.default)(this).constructor;n=Reflect.construct(u,arguments,o)}else n=u.apply(this,arguments);return(0,c.default)(this,n)}}var y=f.default.bind(v.default),C=function(e){(0,r.default)(n,e);var t=m(n);function n(e){var u;return(0,o.default)(this,n),(u=t.call(this,e)).handlePopupButtonClick=u.handlePopupButtonClick.bind((0,a.default)(u)),u.handlePopupRequestClose=u.handlePopupRequestClose.bind((0,a.default)(u)),u.handlePopupOnChange=u.handlePopupOnChange.bind((0,a.default)(u)),u.state={open:!1},u}return(0,l.default)(n,[{key:"handlePopupButtonClick",value:function(){this.setState({open:!0})}},{key:"handlePopupRequestClose",value:function(){this.setState({open:!1})}},{key:"handlePopupOnChange",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.disclosureManager;return i.default.createElement("div",{id:"test-popup-area",className:y("content-container")},i.default.createElement(h.default,{isArrowDisplayed:!0,classNameContent:"test-content",isOpen:this.state.open,onRequestClose:this.handlePopupRequestClose,targetRef:function(){return document.getElementById("popup-in-modal")}},i.default.createElement("p",null,"This is popup content"),i.default.createElement("button",{type:"button"},"Test button 1"),i.default.createElement("button",{type:"button"},"Test button 2")),i.default.createElement(d.default,{id:"popup-in-modal",className:y("popup-button"),text:"Popup In Modal",onClick:this.handlePopupButtonClick}),i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement(d.default,{className:"close-disclosure",text:"Close Disclosure",onClick:e.closeDisclosure}))}}]),n}(i.default.Component);C.propTypes={disclosureManager:p.disclosureManagerShape};var b=(0,p.withDisclosureManager)(C);t.default=b},1819:function(e,t,n){"use strict";n.r(t),t.default={"content-container":"PopupModalContent-module__content-container___1Jvf0","popup-button":"PopupModalContent-module__popup-button___2BeOn"}},2119:function(e,t,n){"use strict";var u=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),l=u(n(601)),a=u(n(1817)),r=function(){return o.default.createElement(l.default,null,o.default.createElement(a.default,null))};t.default=r}}]);