(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{1203:function(e,t,n){"use strict";n.r(t),t.default={}},1861:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(33)),o=a(n(39)),u=a(n(49)),d=a(n(41)),r=a(n(42)),s=a(n(43)),c=a(n(0)),i=a(n(499));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var l=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,r.default)(this,n)}}n(1203);var p=function(e){(0,d.default)(n,e);var t=f(n);function n(){var e;return(0,l.default)(this,n),(e=t.call(this)).state={isOpen:!0},e.handleOpenModal=e.handleOpenModal.bind((0,u.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,u.default)(e)),e}return(0,o.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(i.default,{ariaLabel:"Terra Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,classNameModal:"test-background-class"},c.default.createElement("div",null,"No focusable content inside the modal.")),c.default.createElement("button",{type:"button",className:"button-open-modal",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(c.default.Component);t.default=p}}]);