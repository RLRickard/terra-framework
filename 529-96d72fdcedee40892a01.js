(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{2067:function(e,t,n){"use strict";var u=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(33)),o=u(n(39)),a=u(n(49)),s=u(n(41)),r=u(n(42)),d=u(n(43)),c=u(n(0)),i=u(n(602));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,d.default)(e);if(t){var l=(0,d.default)(this).constructor;n=Reflect.construct(u,arguments,l)}else n=u.apply(this,arguments);return(0,r.default)(this,n)}}var h=function(e){(0,s.default)(n,e);var t=f(n);function n(e){var u;return(0,l.default)(this,n),(u=t.call(this,e)).handleButtonClick=u.handleButtonClick.bind((0,a.default)(u)),u.handleRequestClose=u.handleRequestClose.bind((0,a.default)(u)),u.setButtonNode=u.setButtonNode.bind((0,a.default)(u)),u.getButtonNode=u.getButtonNode.bind((0,a.default)(u)),u.state={open:!1},u}return(0,o.default)(n,[{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"This menu contains one selectable child (an Item Group). The menu should allow space for the checkmark and the items in the item group should be selectable."),c.default.createElement(i.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(i.default.ItemGroup,{className:"TestGroup",onChange:this.handleSelection,key:"selectable-group"},c.default.createElement(i.default.Item,{text:"Group Item 1",key:"1",className:"TestGroupItem1"}),c.default.createElement(i.default.Item,{text:"Group Item 2",key:"2",className:"TestGroupItem2"}),c.default.createElement(i.default.Item,{text:"Group Item 3",key:"3",className:"TestGroupItem3"}))),c.default.createElement("button",{type:"button",id:"selectable-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),n}(c.default.Component);t.default=h}}]);