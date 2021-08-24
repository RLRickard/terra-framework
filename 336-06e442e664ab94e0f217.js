(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1263:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),r=t.n(a),u=t(1095),o=t.n(u),i=function(e){var n=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-side-menu",name:"terra-navigation-side-menu",version:"2.40.0",url:n})}},1733:function(e,n,t){"use strict";var a=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(33)),u=a(t(39)),o=a(t(49)),i=a(t(41)),s=a(t(42)),c=a(t(43)),d=a(t(0)),m=a(t(7)),l=a(t(1190)),p=a(t(1734));function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,c.default)(e);if(n){var r=(0,c.default)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return(0,s.default)(this,t)}}var h=m.default.bind(p.default),f=function(e){(0,i.default)(t,e);var n=b(t);function t(e){var a;return(0,r.default)(this,t),(a=n.call(this,e)).handleOnChange=a.handleOnChange.bind((0,o.default)(a)),a.resetMenuState=a.resetMenuState.bind((0,o.default)(a)),a.fakeRoutingBack=a.fakeRoutingBack.bind((0,o.default)(a)),a.state={selectedMenuKey:"menu",selectedChildKey:void 0},a}return(0,u.default)(t,[{key:"handleOnChange",value:function(e,n){this.setState({selectedMenuKey:n.selectedMenuKey,selectedChildKey:n.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?d.default.createElement("div",{className:h("content")},d.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),d.default.createElement("p",null,"Parent Route")):d.default.createElement(l.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,routingStackBack:this.fakeRoutingBack,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey}),d.default.createElement("div",{className:h("content-wrapper")},e)}}]),t}(d.default.Component);n.default=f},1734:function(e,n,t){"use strict";t.r(n),n.default={content:"NavigationSideMenuExample-module__content___2ZQw_","content-wrapper":"NavigationSideMenuExample-module__content-wrapper___uHzfW",toolbar:"NavigationSideMenuExample-module__toolbar___3QOwd"}},2212:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return P}));var a=t(23),r=t.n(a),u=t(47),o=t.n(u),i=t(0),s=t.n(i),c=t(599),d=t(1263),m=t(1106),l=t.n(m),p=["components"],b=["components"],h=["components"],f=["components"],x=["components"],y=["components"],g=["components"],v=["components"],M=["components"],O=["components"],j=["components"],S=["components"],k=function(){return Object(c.mdx)(l.a,{rows:[{name:"menuItems",type:function(){var e={};function n(n){var t=n.components,a=o()(n,p);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"arrayOf"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "shape",\n "value": {\n  "childKeys": {\n   "name": "arrayOf",\n   "value": {\n    "name": "string"\n   },\n   "description": "Keys of menu items",\n   "required": false\n  },\n  "hasSubMenu": {\n   "name": "bool",\n   "description": "Used to match visual style of a menuItem with children on an item without children.",\n   "required": false\n  },\n  "isRootMenu": {\n   "name": "bool",\n   "description": "Whether or not the menu is the primary navigation links in small form factor.",\n   "required": false\n  },\n  "id": {\n   "name": "string",\n   "description": "ID to be applied to the menu item div.",\n   "required": false\n  },\n  "metaData": {\n   "name": "object",\n   "description": "Optional meta data to be returned along with the item key within the onChange.",\n   "required": false\n  },\n  "key": {\n   "name": "string",\n   "description": "Unique identifier that will be returned in the onChange callback when an endpoint is reached.",\n   "required": true\n  },\n  "text": {\n   "name": "string",\n   "description": "Text for the menu row and header title when selected.",\n   "required": true\n  }\n }\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"[]",description:function(){var e={};function n(n){var t=n.components,a=o()(n,b);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"An array of configuration for each menu item."))}return n.isMDXComponent=!0,n({})}},{name:"onChange",type:function(){var e={};function n(n){var t=n.components,a=o()(n,h);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=o()(n,f);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Callback function when a menu endpoint is reached.\nreturns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})"))}return n.isMDXComponent=!0,n({})}},{name:"routingStackBack",type:function(){var e={};function n(n){var t=n.components,a=o()(n,x);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=o()(n,y);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Delegate prop showParent function that is provided by the terra-navigation-layout."))}return n.isMDXComponent=!0,n({})}},{name:"selectedChildKey",type:function(){var e={};function n(n){var t=n.components,a=o()(n,g);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=o()(n,v);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Key of the currently selected child item on the selected menu page.\nThis is used when traveling back up the menu stack or when the child is an end point."))}return n.isMDXComponent=!0,n({})}},{name:"selectedMenuKey",type:function(){var e={};function n(n){var t=n.components,a=o()(n,M);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=o()(n,O);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Key of the currently selected menu page."))}return n.isMDXComponent=!0,n({})}},{name:"toolbar",type:function(){var e={};function n(n){var t=n.components,a=o()(n,j);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=o()(n,S);return Object(c.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"An optional toolbar to display below the side menu action header"))}return n.isMDXComponent=!0,n({})}}]})},C=t(1733),N=t.n(C),w=["components"],D={};function K(e){var n=e.components,t=o()(e,w);return Object(c.mdx)("wrapper",r()({},D,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NavigationSideMenu from 'terra-navigation-side-menu';\n\nimport styles from './NavigationSideMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass NavigationSideMenuDefault extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.resetMenuState = this.resetMenuState.bind(this);\n    this.fakeRoutingBack = this.fakeRoutingBack.bind(this);\n\n    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };\n  }\n\n  handleOnChange(event, changeData) {\n    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });\n  }\n\n  resetMenuState() {\n    this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined });\n  }\n\n  fakeRoutingBack() {\n    this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined });\n  }\n\n  render() {\n    let content;\n    if (this.state.selectedMenuKey === 'fake-parent') {\n      content = (\n        <div className={cx('content')}>\n          <button type=\"button\" onClick={this.resetMenuState}>\n            Child Route\n          </button>\n          <p>Parent Route</p>\n        </div>\n      );\n    } else {\n      content = (\n        <NavigationSideMenu\n          id=\"test-menu\"\n          menuItems={[\n            { key: 'menu', text: 'Menu', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },\n            {\n              key: 'submenu1', text: 'Sub Menu 1', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',\n            },\n            { key: 'submenu2', text: 'Sub Menu 2' },\n            { key: 'submenu3', text: 'Sub Menu 3' },\n            { key: 'submenu4', text: 'Sub Menu 4' },\n            { key: 'subsubmenu1', text: 'Sub-Sub Menu 1', id: 'test-item-2' },\n            { key: 'subsubmenu2', text: 'Sub-Sub Menu 2' },\n            { key: 'subsubmenu3', text: 'Sub-Sub Menu 3' },\n          ]}\n          onChange={this.handleOnChange}\n          routingStackBack={this.fakeRoutingBack}\n          selectedMenuKey={this.state.selectedMenuKey}\n          selectedChildKey={this.state.selectedChildKey}\n        />\n      );\n    }\n\n    return (\n      <div className={cx('content-wrapper')}>\n        {content}\n      </div>\n    );\n  }\n}\n\nexport default NavigationSideMenuDefault;\n\n")))}K.isMDXComponent=!0;var X=t(1097),T=t.n(X),R=["components"],E={};function _(e){var n=e.components,t=o()(e,R);return Object(c.mdx)("wrapper",r()({},E,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '../../test/navigation-side-menu/NavigationSideMenuDocCommon.module';\n\n:local {\n  .content-wrapper {\n    border: 1px solid #d3d3d3;\n    height: 450px;\n    position: relative;\n    width: 300px;\n  }\n}\n\n")))}_.isMDXComponent=!0;var q=function(e){var n=e.title,t=e.description,a=e.isExpanded;return s.a.createElement(T.a,{title:n||"Navigation Side Menu Example",description:t,example:s.a.createElement(N.a,null),exampleCssSrc:s.a.createElement(_,null),exampleSrc:s.a.createElement(K,null),isExpanded:a})},B=["components"],L={};function P(e){var n=e.components,t=o()(e,B);return Object(c.mdx)("wrapper",r()({},L,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)(d.a,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"terra-navigation-side-menu"},"Terra Navigation Side Menu"),Object(c.mdx)("p",null,"A structural component for nesting navigational items within the content section of the terra-menu-layout."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm install terra-navigation-side-menu"))))),Object(c.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(c.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(c.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"react"),Object(c.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(c.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"react-intl"),Object(c.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import NavigationSideMenu from 'terra-navigation-side-menu';\n")),Object(c.mdx)("h2",{id:"component-features"},"Component Features"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(q,{title:"Navigation Side Menu Example",mdxType:"NavigationSideMenuExample"}),Object(c.mdx)("h2",{id:"navigation-side-menu-props-table"},"Navigation Side Menu Props Table"),Object(c.mdx)(k,{mdxType:"NavigationSideMenuPropsTable"}))}P.isMDXComponent=!0}}]);