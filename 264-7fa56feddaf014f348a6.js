(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1236:function(e,t,l){"use strict";l.r(t),t.default={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___c1UeX","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___3Tqdo","disclosure-container":"ModalManagerCommon-test-module__disclosure-container___qyOpZ"}},1487:function(e,t,l){"use strict";l.r(t),t.default={header:"DisclosureComponentCommon-test-module__header___3kRCk","content-form":"DisclosureComponentCommon-test-module__content-form___31E3o","select-field":"DisclosureComponentCommon-test-module__select-field___1su5g"}},1801:function(e,t,l){"use strict";var n=l(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(l(79)),a=n(l(33)),i=n(l(39)),o=n(l(49)),u=n(l(41)),r=n(l(42)),c=n(l(43)),d=n(l(0)),m=n(l(3)),f=n(l(82)),h=n(l(612)),p=l(498),g=n(l(7)),b=n(l(1487));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,c.default)(e);if(t){var s=(0,c.default)(this).constructor;l=Reflect.construct(n,arguments,s)}else l=n.apply(this,arguments);return(0,r.default)(this,l)}}var v=g.default.bind(b.default),k=Object.keys(p.availableDisclosureHeights),E=Object.keys(p.availableDisclosureWidths),C=function(e){(0,u.default)(l,e);var t=y(l);function l(e){var n;return(0,a.default)(this,l),(n=t.call(this,e)).disclose=n.disclose.bind((0,o.default)(n)),n.dismiss=n.dismiss.bind((0,o.default)(n)),n.closeDisclosure=n.closeDisclosure.bind((0,o.default)(n)),n.goBack=n.goBack.bind((0,o.default)(n)),n.maximize=n.maximize.bind((0,o.default)(n)),n.minimize=n.minimize.bind((0,o.default)(n)),n.generateOptions=n.generateOptions.bind((0,o.default)(n)),n.handleSelectChange=n.handleSelectChange.bind((0,o.default)(n)),n.renderFormButton=n.renderFormButton.bind((0,o.default)(n)),n.renderForm=n.renderForm.bind((0,o.default)(n)),n.getId=n.getId.bind((0,o.default)(n)),n.state={id:"disclosureDimensions",disclosureHeight:k[0],disclosureWidth:E[0]},n}return(0,i.default)(l,[{key:"handleSelectChange",value:function(e){this.setState((0,s.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var l=this;return e.map((function(e,n){var s=n;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(l.props.nestedIndex),key:s,value:e},e)}))}},{key:"disclose",value:function(e,t){var l=this,n=this.props,s=n.disclosureType,a=n.nestedIndex+1;return function(){l.props.disclosureManager.disclose({preferredType:s,size:e,dimensions:t,content:{key:"DemoContainer-".concat(a),component:d.default.createElement(_,{identifier:"DemoContainer-".concat(a),nestedIndex:a})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(k,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(E,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,l=e.identifier;return d.default.createElement(f.default,{id:l,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:v("header")},"Content Component")},d.default.createElement("p",null,"id:"," ",l),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("div",{className:v("content-form")},this.renderForm(),this.renderFormButton(),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement(h.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field",required:!0,className:v("select-field")},d.default.createElement(h.default.Option,{value:"Red",display:"Red"}),d.default.createElement(h.default.Option,{value:"Orange",display:"Orange"}),d.default.createElement(h.default.Option,{value:"Yellow",display:"Yellow"}),d.default.createElement(h.default.Option,{value:"Green",display:"Green"}),d.default.createElement(h.default.Option,{value:"Blue",display:"Blue"}),d.default.createElement(h.default.Option,{value:"Purple",display:"Purple"}),d.default.createElement(h.default.Option,{value:"Pink",display:"Pink"}))),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),l}(d.default.Component);C.propTypes={disclosureManager:p.disclosureManagerShape,identifier:m.default.string,disclosureType:m.default.string,nestedIndex:m.default.number},C.defaultProps={nestedIndex:0};var _=(0,p.withDisclosureManager)(C),D=_;t.default=D},2080:function(e,t,l){"use strict";var n=l(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(l(0)),a=n(l(7)),i=n(l(601)),o=n(l(1801)),u=n(l(1236)),r=a.default.bind(u.default),c=function(){return s.default.createElement("div",{role:"main",className:r("content-wrapper")},s.default.createElement(i.default,null,s.default.createElement(o.default,{identifier:"root-component",disclosureType:"modal"})))};t.default=c}}]);