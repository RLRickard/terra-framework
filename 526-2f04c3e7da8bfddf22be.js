(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{2064:function(e,t,l){"use strict";var u=l(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(33)),n=u(l(39)),f=u(l(49)),d=u(l(41)),o=u(l(42)),r=u(l(43)),c=u(l(0)),i=u(l(602));function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,u=(0,r.default)(e);if(t){var a=(0,r.default)(this).constructor;l=Reflect.construct(u,arguments,a)}else l=u.apply(this,arguments);return(0,o.default)(this,l)}}var m=function(e){(0,d.default)(l,e);var t=s(l);function l(e){var u;return(0,a.default)(this,l),(u=t.call(this,e)).handleButtonClick=u.handleButtonClick.bind((0,f.default)(u)),u.handleRequestClose=u.handleRequestClose.bind((0,f.default)(u)),u.setButtonNode=u.setButtonNode.bind((0,f.default)(u)),u.getButtonNode=u.getButtonNode.bind((0,f.default)(u)),u.state={open:!1},u}return(0,n.default)(l,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"This menu should have a medium height. And all items should be visible without scrolling."),c.default.createElement(i.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(i.default.Item,{text:"Default 1",key:"1",className:"TestFirstItem"}),c.default.createElement(i.default.Item,{text:"Default 2",key:"2"}),c.default.createElement(i.default.Item,{text:"Default 3",key:"3"}),c.default.createElement(i.default.Item,{text:"Default 4",key:"4"}),c.default.createElement(i.default.Item,{text:"Default 5",key:"5"}),c.default.createElement(i.default.ItemGroup,{key:"6"},c.default.createElement(i.default.Item,{text:"Default 61",key:"61"}),c.default.createElement(i.default.Item,{text:"Default 62",key:"62"}),c.default.createElement(i.default.Item,{text:"Default 63",key:"63"})),c.default.createElement(i.default.Item,{text:"Default 7",key:"7"}),c.default.createElement(i.default.Item,{text:"Default 8",key:"8"}),c.default.createElement(i.default.Item,{text:"Default 9",key:"9"}),c.default.createElement(i.default.Item,{text:"Default 10",key:"10"}),c.default.createElement(i.default.Item,{text:"Default 11",key:"11"}),c.default.createElement(i.default.Item,{text:"Default 12",key:"12"}),c.default.createElement(i.default.Item,{text:"Default 13",key:"13"}),c.default.createElement(i.default.Item,{text:"Default 14",key:"14"}),c.default.createElement(i.default.ItemGroup,{key:"15"},c.default.createElement(i.default.Item,{text:"Default 151",key:"151"}),c.default.createElement(i.default.Item,{text:"Default 152",key:"152"}),c.default.createElement(i.default.Item,{text:"Default 153",key:"153",className:"TestLastItem"}))),c.default.createElement("button",{type:"button",id:"medium-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),l}(c.default.Component);t.default=m}}]);