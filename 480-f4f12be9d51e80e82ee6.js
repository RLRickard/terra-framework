(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{1816:function(t,e,n){"use strict";n.r(e),e.default={"test-popup-area":"DifferentAttachmentsPopup-test-module__test-popup-area___9ngUF","popup-text":"DifferentAttachmentsPopup-test-module__popup-text___iWqL6","popup-button":"DifferentAttachmentsPopup-test-module__popup-button___1l2EX"}},2117:function(t,e,n){"use strict";var a=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(33)),u=a(n(39)),l=a(n(49)),r=a(n(41)),i=a(n(42)),c=a(n(43)),s=a(n(0)),d=a(n(7)),f=a(n(228)),h=a(n(1816));function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=(0,c.default)(t);if(e){var o=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,i.default)(this,n)}}var m=d.default.bind(h.default),b={"bottom left":"top right","bottom right":"top left"},g=function(t){(0,r.default)(n,t);var e=p(n);function n(t){var a;return(0,o.default)(this,n),(a=e.call(this,t)).handleButtonClick=a.handleButtonClick.bind((0,l.default)(a)),a.handleAttachment=a.handleAttachment.bind((0,l.default)(a)),a.handleRequestClose=a.handleRequestClose.bind((0,l.default)(a)),a.setButtonNode=a.setButtonNode.bind((0,l.default)(a)),a.getButtonNode=a.getButtonNode.bind((0,l.default)(a)),a.setParentNode=a.setParentNode.bind((0,l.default)(a)),a.getParentNode=a.getParentNode.bind((0,l.default)(a)),a.state={open:!1,contentAttachment:"bottom left",targetAttachment:"top right"},a}return(0,u.default)(n,[{key:"handleAttachment",value:function(t){this.setState({contentAttachment:t.target.value,targetAttachment:b[t.target.value],open:!0})}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("div",{id:"test-popup-area",className:m("test-popup-area"),ref:this.setParentNode},s.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:this.state.contentAttachment,targetAttachment:this.state.targetAttachment,contentHeight:"80",contentWidth:"160",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},s.default.createElement("p",{className:m("popup-text")},"This popup arrow has vertical attachment.")),s.default.createElement("button",{type:"button",id:"alignment-button",className:m("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode,"aria-label":"Alignment button"},"")),s.default.createElement("p",null,"Choose Content Attachment. It will flip the target attachment."),s.default.createElement("button",{type:"button",id:"attach-Left",value:"bottom left",onClick:this.handleAttachment},"Attach Bottom Left"),s.default.createElement("button",{type:"button",id:"attach-Right",value:"bottom right",onClick:this.handleAttachment},"Attach Bottom Right"))}}]),n}(s.default.Component);e.default=g}}]);