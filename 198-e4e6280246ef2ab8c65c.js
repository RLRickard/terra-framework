(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1192:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(23)),u=r(n(47)),l=r(n(33)),a=r(n(39)),d=r(n(41)),c=r(n(42)),i=r(n(43)),s=r(n(0)),f=r(n(3));n(1213),n(1214);var m=["children"];function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var p={children:f.default.node.isRequired},v=function(e){(0,d.default)(n,e);var t=h(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,u.default)(e,m);return s.default.createElement("div",(0,o.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),n}(s.default.Component);v.propTypes=p;var b=v;t.default=b},1193:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___1WHhV"}},1213:function(e,t,n){"use strict";n.r(t),t.default={}},1214:function(e,t,n){"use strict";n.r(t),t.default={}},1509:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(33)),u=r(n(39)),l=r(n(49)),a=r(n(41)),d=r(n(42)),c=r(n(43)),i=r(n(0)),s=n(505),f=r(n(7)),m=r(n(1192)),h=r(n(1193));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var v=f.default.bind(h.default),b=function(e){(0,a.default)(n,e);var t=p(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).onClick=r.onClick.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"onClick",value:function(){s.Provider.trigger("EventA")}},{key:"render",value:function(){return i.default.createElement("div",{className:v("content-wrapper")},i.default.createElement("h1",null,"Listening to Custom Event"),i.default.createElement("p",null,"A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. "),i.default.createElement("p",null,"This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker."),i.default.createElement("ol",null,i.default.createElement("li",null,i.default.createElement("p",null,"Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.")),i.default.createElement("li",null,i.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content"))),i.default.createElement("button",{id:"EventA",onClick:this.onClick,type:"button"},"Set Border Color!"))}}]),n}(i.default.Component),y=function(){return i.default.createElement(m.default,null,i.default.createElement(b,null))};t.default=y}}]);