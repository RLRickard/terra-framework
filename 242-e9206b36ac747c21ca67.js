(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1209:function(e,t,n){"use strict";n.r(t),t.default={container:"SlideGroupDemo-module__container___LsaHD",slide:"SlideGroupDemo-module__slide____vwHw","content-wrapper":"SlideGroupDemo-module__content-wrapper___2MZqu",button:"SlideGroupDemo-module__button___13fP-","custom-slide":"SlideGroupDemo-module__custom-slide___lWzSl"}},1472:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),i=n(1095),a=n.n(i),l=function(e){var t=e.url;return o.a.createElement(a.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-slide-group",name:"terra-slide-group",version:"4.27.0",url:t})}},1758:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(33)),i=r(n(39)),a=r(n(49)),l=r(n(41)),c=r(n(42)),u=r(n(43)),d=r(n(0)),s=r(n(3)),m=r(n(7)),p=r(n(606)),f=r(n(1209));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var h=m.default.bind(f.default),x=function(e){(0,l.default)(n,e);var t=b(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).increment=r.increment.bind((0,a.default)(r)),r.decrement=r.decrement.bind((0,a.default)(r)),r.state={counter:1},r}return(0,i.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(d.default.createElement("div",{key:"Slide ".concat(t),className:h("slide")},d.default.createElement("h2",null,"Slide",t),d.default.createElement("br",null),d.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?d.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return d.default.createElement("div",{className:h("container")},d.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(d.default.Component);x.propTypes={isAnimated:s.default.bool};var y=x;t.default=y},1759:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(33)),i=r(n(39)),a=r(n(49)),l=r(n(41)),c=r(n(42)),u=r(n(43)),d=r(n(0)),s=r(n(3)),m=r(n(7)),p=r(n(606)),f=r(n(1209));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var h=m.default.bind(f.default),x=function(e){(0,l.default)(n,e);var t=b(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).increment=r.increment.bind((0,a.default)(r)),r.decrement=r.decrement.bind((0,a.default)(r)),r.state={counter:1},r}return(0,i.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(d.default.createElement("div",{key:"Slide ".concat(t),className:h("slide")},d.default.createElement("h2",null,"Slide",t),d.default.createElement("br",null),d.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?d.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return d.default.createElement("div",{className:h("container")},d.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(d.default.Component);x.propTypes={isAnimated:s.default.bool};var y=function(){return d.default.createElement(x,{isAnimated:!0})};t.default=y},2205:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(23),o=n.n(r),i=n(47),a=n.n(i),l=n(0),c=n.n(l),u=n(599),d=n(1472),s=n(1106),m=n.n(s),p=["components"],f=["components"],b=["components"],h=["components"],x=function(){return Object(u.mdx)(m.a,{rows:[{name:"items",type:function(){var e={};function t(t){var n=t.components,r=a()(t,p);return Object(u.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"array"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=a()(t,f);return Object(u.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"The array of components for the group. Only the last component is visible. The others are hidden but still mounted."))}return t.isMDXComponent=!0,t({})}},{name:"isAnimated",type:function(){var e={};function t(t){var n=t.components,r=a()(t,b);return Object(u.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=a()(t,h);return Object(u.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"When true, the transition between slides is animated."))}return t.isMDXComponent=!0,t({})}}]})},y=n(1758),v=n.n(y),j=["components"],S={};function O(e){var t=e.components,n=a()(e,j);return Object(u.mdx)("wrapper",o()({},S,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("pre",null,Object(u.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nexport default SlideGroupDemo;\n\n")))}O.isMDXComponent=!0;var g=n(1097),D=n.n(g),N=["components"],w={};function G(e){var t=e.components,n=a()(e,N);return Object(u.mdx)("wrapper",o()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("pre",null,Object(u.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .container {\n    height: 250px;\n    overflow: hidden;\n    position: relative;\n    width: 400px;\n  }\n\n  .slide {\n    background-color: #add8e6;\n    height: 100%;\n    padding: 5px;\n  }\n\n  .content-wrapper {\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n    width: 400px;\n  }\n\n  .button {\n    background-color: #d3d3d3;\n  }\n\n  .custom-slide {\n    height: 200px !important;\n  }\n}\n\n")))}G.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,r=e.isExpanded;return c.a.createElement(D.a,{title:t||"Slide Group Demo",description:n,example:c.a.createElement(v.a,null),exampleCssSrc:c.a.createElement(G,null),exampleSrc:c.a.createElement(O,null),isExpanded:r})},E=n(1759),T=n.n(E),k=["components"],C={};function A(e){var t=e.components,n=a()(e,k);return Object(u.mdx)("wrapper",o()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("pre",null,Object(u.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nconst AnimatedSlideGroup = () => (\n  <SlideGroupDemo isAnimated />\n);\nexport default AnimatedSlideGroup;\n\n")))}A.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,r=e.isExpanded;return c.a.createElement(D.a,{title:t||"Slide Group Demo Animated",description:n,example:c.a.createElement(T.a,null),exampleCssSrc:c.a.createElement(G,null),exampleSrc:c.a.createElement(A,null),isExpanded:r})},X=["components"],R={};function P(e){var t=e.components,n=a()(e,X);return Object(u.mdx)("wrapper",o()({},R,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)(d.a,{mdxType:"Badge"}),Object(u.mdx)("h1",{id:"terra-slide-group"},"Terra Slide Group"),Object(u.mdx)("p",null,"The SlideGroup is a utility component that utilizes the ",Object(u.mdx)("inlineCode",{parentName:"p"},"react-transition-group")," library to present a stack of components in an\nanimated fashion."),Object(u.mdx)("p",null,"The last component in the group is visible, and all others are hidden. While the hidden components are not visible and\nmarked with the ",Object(u.mdx)("inlineCode",{parentName:"p"},"aria-hidden")," attribute, they are not actually unmounted."),Object(u.mdx)("p",null,"As a utility component, any component utilizing the SlideGroup will need to handle the keyboard accessibility of the content on each slide."),Object(u.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(u.mdx)("ul",null,Object(u.mdx)("li",{parentName:"ul"},"Install with ",Object(u.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(u.mdx)("ul",{parentName:"li"},Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("inlineCode",{parentName:"li"},"npm install terra-slide-group"))))),Object(u.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(u.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(u.mdx)("table",null,Object(u.mdx)("thead",{parentName:"table"},Object(u.mdx)("tr",{parentName:"thead"},Object(u.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(u.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(u.mdx)("tbody",{parentName:"table"},Object(u.mdx)("tr",{parentName:"tbody"},Object(u.mdx)("td",{parentName:"tr",align:null},"react"),Object(u.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(u.mdx)("tr",{parentName:"tbody"},Object(u.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(u.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(u.mdx)("h2",{id:"usage"},"Usage"),Object(u.mdx)("pre",null,Object(u.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SlideGroup from 'terra-slide-group';\n")),Object(u.mdx)("h2",{id:"examples"},"Examples"),Object(u.mdx)(_,{title:"Non-Animated SlideGroup",mdxType:"SlideGroupDemo"}),Object(u.mdx)(M,{title:"Animated SlideGroup",mdxType:"SlideGroupDemoAnimated"}),Object(u.mdx)("h2",{id:"slide-group-props-table"},"Slide Group Props Table"),Object(u.mdx)(x,{mdxType:"SlideGroupPropsTable"}))}P.isMDXComponent=!0}}]);