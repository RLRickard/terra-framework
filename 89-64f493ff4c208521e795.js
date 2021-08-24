(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1229:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper1":"NavigationLayoutDocCommon-module__content-wrapper1___1yY2R","content-wrapper2":"NavigationLayoutDocCommon-module__content-wrapper2___3QXkq",button:"NavigationLayoutDocCommon-module__button___3E-Dd","content-wrapper":"NavigationLayoutDocCommon-module__content-wrapper___2UWnf","example-menu":"NavigationLayoutDocCommon-module__example-menu___-7OWC"}},1471:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),i=n(1095),r=n.n(i),l=function(e){var t=e.url;return o.a.createElement(r.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-layout",name:"terra-navigation-layout",version:"5.34.0",url:t})}},1719:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(7)),r=n(155),l=a(n(1189)),u=a(n(1720)),p=a(n(1722)),d=a(n(1723)),c=a(n(1724)),m=a(n(1725)),s=a(n(1726)),g=a(n(1727)),f=a(n(1229)),h=i.default.bind(f.default),b={header:{"/":{path:"/",component:{default:{componentClass:u.default}}}},menu:{"/":{path:"/",component:{tiny:{componentClass:p.default},small:{componentClass:p.default}}},"/page1":{path:"/page1",component:{default:{componentClass:s.default}}},"/page2":{path:"/page2",component:{default:{componentClass:g.default}}}},content:{"/page1":{path:"/page1",component:{default:{componentClass:d.default}}},"/page2":{path:"/page2",component:{default:{componentClass:c.default}}},"/page3":{path:"/page3",component:{default:{componentClass:m.default}}}}},y=(0,r.withRouter)((function(e){var t=e.location;return o.default.createElement("div",null,o.default.createElement("h3",null,"Features"),o.default.createElement("ul",null,o.default.createElement("li",null,"Contains 3 different primary routes: /page1, /page2, and /page3"),o.default.createElement("ul",null,o.default.createElement("li",null,"/page1 - Has content, inner routes, and an associated menu"),o.default.createElement("li",null,"/page2 - Has content and an associated menu"),o.default.createElement("li",null,"/page3 - Has only content")),o.default.createElement("li",null,"Has a Header that is rendered for all routes (matched to `/` path)"),o.default.createElement("li",null,"Header provides links to other primary routes for breakpoints `medium`, `large`, and `huge`"),o.default.createElement("li",null,"When size is `tiny` or `small`, a new Menu is presented to expose links to primary routes (the Header hides its links at these sizes)"),o.default.createElement("li",null,"Page menus expose navigation to parent menus"),o.default.createElement("li",null,"Page content and menus expose Layout-provided functionality")),o.default.createElement("h3",null,"Browser Location: ".concat(t.pathname)),o.default.createElement(l.default,{config:b,menuText:"Example Menu",className:h("example-menu")}))})),x=function(){return o.default.createElement(r.MemoryRouter,{initialEntries:["/page1","/page1/item1","/page1/item2","/page2","page3"],initialIndex:0},o.default.createElement(y,null))};t.default=x},1720:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(7)),r=a(n(3)),l=n(155),u=a(n(1721)),p=i.default.bind(u.default),d={layoutConfig:r.default.shape({})},c=function(e){var t=e.layoutConfig;return o.default.createElement("div",{className:p("content-wrapper1")},o.default.createElement("div",{className:p("content-wrapper2")},o.default.createElement("h2",null,"Header"),t.toggleMenu&&o.default.createElement("button",{type:"button",onClick:t.toggleMenu,className:p("button")},"Toggle Menu"),"small"!==t.size&&"tiny"!==t.size&&o.default.createElement(l.Link,{to:"/page1",className:p("link")},"Page 1"),"small"!==t.size&&"tiny"!==t.size&&o.default.createElement(l.Link,{to:"/page2",className:p("link")},"Page 2"),"small"!==t.size&&"tiny"!==t.size&&o.default.createElement(l.Link,{to:"/page3",className:p("link")},"Page 3")))};c.propTypes=d;var m=(0,l.withRouter)(c);t.default=m},1721:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper1":"HeaderExample-module__content-wrapper1___33lQJ","content-wrapper2":"HeaderExample-module__content-wrapper2___2KHsh",link:"HeaderExample-module__link___3UAkw",button:"HeaderExample-module__button___1Xy0B"}},1722:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(7)),r=a(n(3)),l=n(155),u=a(n(1229)),p=i.default.bind(u.default),d=function(e){var t=e.layoutConfig;return o.default.createElement("div",{className:p("content-wrapper1")},o.default.createElement("div",{className:p("content-wrapper2")},t.toggleMenu&&o.default.createElement("button",{type:"button",onClick:t.toggleMenu,className:p("button")},"Toggle Menu"),t.togglePin&&!t.menuIsPinned&&o.default.createElement("button",{type:"button",onClick:t.togglePin,className:p("button")},"Pin"),t.togglePin&&t.menuIsPinned&&o.default.createElement("button",{type:"button",onClick:t.togglePin,className:p("button")},"Unpin"),o.default.createElement("h2",null,"Menu"),o.default.createElement("br",null),o.default.createElement(l.Link,{to:"/page1"},"Page 1"),o.default.createElement("br",null),o.default.createElement(l.Link,{to:"/page2"},"Page 2"),o.default.createElement("br",null),o.default.createElement(l.Link,{to:"/page3"},"Page 3")))};d.propTypes={layoutConfig:r.default.shape({toggleMenu:r.default.func,togglePin:r.default.func,menuIsPinned:r.default.bool})};var c=(0,l.withRouter)(d);t.default=c},1723:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(7)),r=a(n(3)),l=n(155),u=a(n(1229)),p=i.default.bind(u.default),d=function(e){var t=e.layoutConfig;return o.default.createElement("div",{className:p("content-wrapper1")},o.default.createElement("div",{className:p("content-wrapper2")},o.default.createElement("h2",null,"Page 1 Content"),t.toggleMenu&&o.default.createElement("button",{type:"button",onClick:t.toggleMenu,className:p("button")},"Toggle Menu"),o.default.createElement(l.Route,{path:"/page1/item1",render:function(){return o.default.createElement("h2",null,"Item 1")}}),o.default.createElement(l.Route,{path:"/page1/item2",render:function(){return o.default.createElement("h2",null,"Item 2")}})))};d.propTypes={layoutConfig:r.default.shape({toggleMenu:r.default.func})};var c=d;t.default=c},1724:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(7)),r=a(n(3)),l=a(n(1229)),u=i.default.bind(l.default),p=function(e){var t=e.layoutConfig;return o.default.createElement("div",{className:u("content-wrapper1")},o.default.createElement("div",{className:u("content-wrapper2")},o.default.createElement("h2",null,"Page 2 Content"),t.toggleMenu&&o.default.createElement("button",{type:"button",onClick:t.toggleMenu,className:u("button")},"Toggle Menu")))};p.propTypes={layoutConfig:r.default.shape({toggleMenu:r.default.func})};var d=p;t.default=d},1725:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(7)),r=a(n(3)),l=a(n(1229)),u=i.default.bind(l.default),p=function(e){var t=e.layoutConfig;return o.default.createElement("div",{className:u("content-wrapper1")},o.default.createElement("div",{className:u("content-wrapper2")},o.default.createElement("h2",null,"Page 3 Content"),t.toggleMenu&&o.default.createElement("button",{type:"button",onClick:t.toggleMenu,className:u("button")},"Toggle Menu")))};p.propTypes={layoutConfig:r.default.shape({toggleMenu:r.default.func})};var d=p;t.default=d},1726:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(7)),r=a(n(3)),l=n(155),u=a(n(1130)),p=a(n(1229)),d=i.default.bind(p.default),c=function(e){var t=e.layoutConfig,n=e.routingStackDelegate;return o.default.createElement("div",{className:d("content-wrapper1")},o.default.createElement("div",{className:d("content-wrapper2")},n&&n.showParent&&o.default.createElement("button",{type:"button",onClick:n.showParent,className:d("button")},"Go Back"),t.toggleMenu&&o.default.createElement("button",{type:"button",onClick:t.toggleMenu,className:d("button")},"Toggle Menu"),t.togglePin&&!t.menuIsPinned&&o.default.createElement("button",{type:"button",onClick:t.togglePin,className:d("button")},"Pin"),t.togglePin&&t.menuIsPinned&&o.default.createElement("button",{type:"button",onClick:t.togglePin,className:d("button")},"Unpin"),o.default.createElement("h2",null,"Page 1 Menu"),o.default.createElement("br",null),o.default.createElement(l.Link,{to:"/page1/item1"},"Item 1"),o.default.createElement("br",null),o.default.createElement(l.Link,{to:"/page1/item2"},"Item 2")))};c.propTypes={layoutConfig:r.default.shape({toggleMenu:r.default.func,togglePin:r.default.func,menuIsPinned:r.default.bool}),routingStackDelegate:u.default.propType};var m=(0,l.withRouter)(c);t.default=m},1727:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(7)),r=a(n(3)),l=n(155),u=a(n(1130)),p=a(n(1229)),d=i.default.bind(p.default),c=function(e){var t=e.layoutConfig,n=e.routingStackDelegate;return o.default.createElement("div",{className:d("content-wrapper1")},o.default.createElement("div",{className:d("content-wrapper2")},n&&n.showParent&&o.default.createElement("button",{type:"button",onClick:n.showParent,className:d("button")},"Go Back"),t.toggleMenu&&o.default.createElement("button",{type:"button",onClick:t.toggleMenu,className:d("button")},"Toggle Menu"),t.togglePin&&!t.menuIsPinned&&o.default.createElement("button",{type:"button",onClick:t.togglePin,className:d("button")},"Pin"),t.togglePin&&t.menuIsPinned&&o.default.createElement("button",{type:"button",onClick:t.togglePin,className:d("button")},"Unpin"),o.default.createElement("h2",null,"Page 2 Menu")))};c.propTypes={layoutConfig:r.default.shape({toggleMenu:r.default.func,togglePin:r.default.func,menuIsPinned:r.default.bool}),routingStackDelegate:u.default.propType};var m=(0,l.withRouter)(c);t.default=m},2211:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return G}));var a=n(23),o=n.n(a),i=n(47),r=n.n(i),l=n(0),u=n.n(l),p=n(599),d=n(1471),c=n(1106),m=n.n(c),s=["components"],g=["components"],f=["components"],h=["components"],b=["components"],y=["components"],x=["components"],v=["components"],j=["components"],O=["components"],N=["components"],C=["components"],w=["components"],M=["components"],E=["components"],T=["components"],P=["components"],L=["components"],k=["components"],D=["components"],_=function(){return Object(p.mdx)(m.a,{rows:[{name:"header",type:function(){var e={};function t(t){var n=t.components,a=r()(t,s);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,g);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The component to render within the NavigationLayout's ",Object(p.mdx)("inlineCode",{parentName:"p"},"header")," region. If provided, this component\nmust appropriately handle the NavigationLayout-supplied props: ",Object(p.mdx)("inlineCode",{parentName:"p"},"routeConfig"),", and ",Object(p.mdx)("inlineCode",{parentName:"p"},"navigationLayoutSize"),"."))}return t.isMDXComponent=!0,t({})}},{name:"menu",type:function(){var e={};function t(t){var n=t.components,a=r()(t,f);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,h);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The component to render within the NavigationLayout's ",Object(p.mdx)("inlineCode",{parentName:"p"},"menu")," region. If provided, this component\nmust appropriately handle the NavigationLayout-supplied props: ",Object(p.mdx)("inlineCode",{parentName:"p"},"routeConfig"),", and ",Object(p.mdx)("inlineCode",{parentName:"p"},"navigationLayoutSize"),"."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,a=r()(t,b);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,y);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The component to render within the NavigationLayout's ",Object(p.mdx)("inlineCode",{parentName:"p"},"content")," region. If provided, this component\nmust appropriately handle the NavigationLayout-supplied props: ",Object(p.mdx)("inlineCode",{parentName:"p"},"routeConfig"),", and ",Object(p.mdx)("inlineCode",{parentName:"p"},"navigationLayoutSize"),"."))}return t.isMDXComponent=!0,t({})}},{name:"menuText",type:function(){var e={};function t(t){var n=t.components,a=r()(t,x);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,v);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The String to display in the NavigationLayout's hover-target menu disclosure."))}return t.isMDXComponent=!0,t({})}},{name:"config",type:function(){var e={};function t(t){var n=t.components,a=r()(t,j);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,O);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The configuration Object that will be used to generate the specified regions of the NavigationLayout.\nNote: The config prop is treated as an immutable object to prevent unnecessary processing and improve performance.\nIf the configuration is changed after the first render, a new configuration object instance must be provided."))}return t.isMDXComponent=!0,t({})}},{name:"indexPath",type:function(){var e={};function t(t){var n=t.components,a=r()(t,N);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,C);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The index path of the consuming application's routing structure. If provided, the NavigationLayout will\nensure Redirects are present where necessary."))}return t.isMDXComponent=!0,t({})}},{name:"location",type:function(){var e={};function t(t){var n=t.components,a=r()(t,w);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,M);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The location as provided by the ",Object(p.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))}return t.isMDXComponent=!0,t({})}},{name:"match",type:function(){var e={};function t(t){var n=t.components,a=r()(t,E);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,T);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The match as provided by the ",Object(p.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))}return t.isMDXComponent=!0,t({})}},{name:"history",type:function(){var e={};function t(t){var n=t.components,a=r()(t,P);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,L);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The history as provided by the ",Object(p.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))}return t.isMDXComponent=!0,t({})}},{name:"staticContext",type:function(){var e={};function t(t){var n=t.components,a=r()(t,k);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=r()(t,D);return Object(p.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("p",null,"The staticContext as provided by the ",Object(p.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC. This will only be provided when\nwithin a StaticRouter."))}return t.isMDXComponent=!0,t({})}}]})},X=n(1719),R=n.n(X),I=["components"],H={};function S(e){var t=e.components,n=r()(e,I);return Object(p.mdx)("wrapper",o()({},H,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport { MemoryRouter, withRouter } from 'react-router-dom';\nimport NavigationLayout from 'terra-navigation-layout';\nimport HeaderExample from 'terra-navigation-layout/lib/terra-dev-site/doc/example/HeaderExample';\nimport MenuExample from 'terra-navigation-layout/lib/terra-dev-site/doc/example/MenuExample';\nimport Page1Content from 'terra-navigation-layout/lib/terra-dev-site/doc/example/Page1Content';\nimport Page2Content from 'terra-navigation-layout/lib/terra-dev-site/doc/example/Page2Content';\nimport Page3Content from 'terra-navigation-layout/lib/terra-dev-site/doc/example/Page3Content';\nimport Page1Menu from 'terra-navigation-layout/lib/terra-dev-site/doc/example/Page1Menu';\nimport Page2Menu from 'terra-navigation-layout/lib/terra-dev-site/doc/example/Page2Menu';\nimport styles from './NavigationLayoutDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\n// If changing config, ensure NavigationLayoutStandardConfig.md is updated to match\nconst config = {\n  header: {\n    '/': {\n      path: '/',\n      component: {\n        default: {\n          componentClass: HeaderExample,\n        },\n      },\n    },\n  },\n  menu: {\n    '/': {\n      path: '/',\n      component: {\n        tiny: {\n          componentClass: MenuExample,\n        },\n        small: {\n          componentClass: MenuExample,\n        },\n      },\n    },\n    '/page1': {\n      path: '/page1',\n      component: {\n        default: {\n          componentClass: Page1Menu,\n        },\n      },\n    },\n    '/page2': {\n      path: '/page2',\n      component: {\n        default: {\n          componentClass: Page2Menu,\n        },\n      },\n    },\n  },\n  content: {\n    '/page1': {\n      path: '/page1',\n      component: {\n        default: {\n          componentClass: Page1Content,\n        },\n      },\n    },\n    '/page2': {\n      path: '/page2',\n      component: {\n        default: {\n          componentClass: Page2Content,\n        },\n      },\n    },\n    '/page3': {\n      path: '/page3',\n      component: {\n        default: {\n          componentClass: Page3Content,\n        },\n      },\n    },\n  },\n};\n\nconst NavigationLayoutStandard = withRouter(({ location }) => (\n  <div>\n    <h3>Features</h3>\n    <ul>\n      <li>Contains 3 different primary routes: /page1, /page2, and /page3</li>\n      <ul>\n        <li>/page1 - Has content, inner routes, and an associated menu</li>\n        <li>/page2 - Has content and an associated menu</li>\n        <li>/page3 - Has only content</li>\n      </ul>\n      <li>Has a Header that is rendered for all routes (matched to `/` path)</li>\n      <li>Header provides links to other primary routes for breakpoints `medium`, `large`, and `huge`</li>\n      <li>When size is `tiny` or `small`, a new Menu is presented to expose links to primary routes (the Header hides its links at these sizes)</li>\n      <li>Page menus expose navigation to parent menus</li>\n      <li>Page content and menus expose Layout-provided functionality</li>\n    </ul>\n    <h3>{`Browser Location: ${location.pathname}`}</h3>\n    <NavigationLayout\n      config={config}\n      menuText=\"Example Menu\"\n      className={cx('example-menu')}\n    />\n  </div>\n));\n\nconst NavigationLayoutRouter = () => (\n  <MemoryRouter\n    initialEntries={['/page1', '/page1/item1', '/page1/item2', '/page2', 'page3']}\n    initialIndex={0}\n  >\n    <NavigationLayoutStandard />\n  </MemoryRouter>\n);\n\nexport default NavigationLayoutRouter;\n\n")))}S.isMDXComponent=!0;var z=n(1097),q=n.n(z),A=["components"],V={};function B(e){var t=e.components,n=r()(e,A);return Object(p.mdx)("wrapper",o()({},V,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper1 {\n    border: 4px dashed #d3d3d3;\n    height: calc(100% - 10px);\n    margin: 5px;\n    position: relative;\n    width: calc(100% - 10px);\n  }\n\n  .content-wrapper2 {\n    color: #808080;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n  }\n\n  .button {\n    border: 1px dashed #d3d3d3;\n    display: inline-block;\n    height: 25px;\n    margin-left: 5px;\n  }\n\n  .content-wrapper h2 {\n    margin: 0;\n  }\n\n  .example-menu {\n    height: 400px;\n    width: 100%;\n  }\n}\n\n")))}B.isMDXComponent=!0;var U=function(e){var t=e.title,n=e.description,a=e.isExpanded;return u.a.createElement(q.a,{title:t||"Navigation Layout Standard",description:n,example:u.a.createElement(R.a,null),exampleCssSrc:u.a.createElement(B,null),exampleSrc:u.a.createElement(S,null),isExpanded:a})},F=["components"],W={};function G(e){var t=e.components,n=r()(e,F);return Object(p.mdx)("wrapper",o()({},W,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)(d.a,{mdxType:"Badge"}),Object(p.mdx)("h1",{id:"terra-navigation-layout"},"Terra Navigation Layout"),Object(p.mdx)("p",null,"The ",Object(p.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," is a configuration-based, ",Object(p.mdx)("inlineCode",{parentName:"p"},"react-router"),"-driven layout. It wraps the ",Object(p.mdx)("inlineCode",{parentName:"p"},"Layout")," component provided by ",Object(p.mdx)("inlineCode",{parentName:"p"},"terra-layout")," and injects routing-based components into its various component regions. If navigation is not desired, the ",Object(p.mdx)("inlineCode",{parentName:"p"},"Layout")," component can and should be used directly. However, the NavigationLayout does support very basic navigation workflows with minimal configuration required."),Object(p.mdx)("p",null,"The ",Object(p.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," is able to successfully render with just the config object defining its structure. However, custom components can be provided directly to the NavigationLayout for the ",Object(p.mdx)("inlineCode",{parentName:"p"},"header"),", ",Object(p.mdx)("inlineCode",{parentName:"p"},"menu"),", and ",Object(p.mdx)("inlineCode",{parentName:"p"},"content")," props. Those custom components will be provided with any relevant configuration data to allow them to render things as they see fit."),Object(p.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"The ",Object(p.mdx)("inlineCode",{parentName:"li"},"NavigationLayout")," must have a ",Object(p.mdx)("inlineCode",{parentName:"li"},"Router")," (or other high-level router like ",Object(p.mdx)("inlineCode",{parentName:"li"},"BrowserRouter"),", ",Object(p.mdx)("inlineCode",{parentName:"li"},"HashRouter"),", or ",Object(p.mdx)("inlineCode",{parentName:"li"},"MemoryRouter"),") as a component ancestor."),Object(p.mdx)("li",{parentName:"ul"},"A configuration prop must be supplied to the ",Object(p.mdx)("inlineCode",{parentName:"li"},"NavigationLayout")," that defines the desired routing setup. The ",Object(p.mdx)("inlineCode",{parentName:"li"},"NavigationLayout")," treats this prop as immutable for caching and performance reasons. If a configuration object is changing due to a state change in a higher component, a new object instance must be provided for those changes to take effect.")),Object(p.mdx)("h2",{id:"configuration-api"},"Configuration API"),Object(p.mdx)("p",null,"The configuration object is structured like the below example. A couple key takeaways:"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"The ",Object(p.mdx)("inlineCode",{parentName:"li"},"header"),", ",Object(p.mdx)("inlineCode",{parentName:"li"},"menu"),", and ",Object(p.mdx)("inlineCode",{parentName:"li"},"content")," regions have a separate configurations but share the same configuration APIs. These can be omitted if routing is unnecessary for an individual section."),Object(p.mdx)("li",{parentName:"ul"},"The configuration can be responsive and supports specifying components on a per-route, per-breakpoint basis."),Object(p.mdx)("li",{parentName:"ul"},"Routes can be provided in any order; however, the NavigationLayout will sort them as necessary to ensure the expected render order is maintained."),Object(p.mdx)("li",{parentName:"ul"},"Proptypes for the various pieces of the configuration object are exported by the ",Object(p.mdx)("inlineCode",{parentName:"li"},"configurationPropTypes.js")," file.")),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"{\n  /**\n   * The menu, content, and header configurations are keyed at the root of the object.\n   */\n  menu: {\n    /**\n     * At this level of the configuration, we're defining each path to which we want to match.\n     * The key here doesn't have to be a path (the actual path used is specified within), but generally it\n     * makes sense to use the path as the key as they need to be unique anyway.\n     */\n    '/': {\n      path: '/',\n      component: {\n        /**\n         * Here we get access to the configuration's responsive API.\n         * The keys at this level must be either `default` or one of our supported breakpoints (`tiny`, `small`, `medium`, `large`, `huge`)\n         * If you specify a component for `default`, it will be rendered for any size that isn't overridden.\n         * If you do not specify a `default` component, any size that has no defined component will simply not be rendered.\n         */\n        default: {\n          componentClass: MenuExample,\n          props: {\n            menuTitle: 'Title From Config' // The `props` are applied to the given componentClass when instantiated.\n          },\n        },\n        /**\n         * We're going to provide a separate configuration for the `huge` breakpoint that has a different prop value.\n         * While we're just changing the prop value, we could add props, remove them, or provide a different componentClass entirely.\n         */\n        huge: {\n          componentClass: MenuExample,\n          props: {\n            menuTitle: 'Long Title From Config Because There Is Lots of Space (Cause The Size Is Huge)'\n          },\n        },\n      },\n    },\n    '/page1': {\n      /*\n       * Now a component for the route /page1 is being defined. This path is a descendent of the route above (/), so when the\n       * page location matches '/page1', the Page1Menu will be rendered instead of the MenuExample.\n       */\n      path: '/page1',\n      component: {\n        default: {\n          componentClass: Page1Menu,\n        },\n      },\n    },\n    '/page1/subpage1': {\n      /*\n       * Similarly, this route is a descendent of /page1 and will take precedent over it when the location matches. The order of these configurations\n       * are not important, as the NavigationLayout will determine the parent-child relationships and render things accordingly.\n       */\n      path: '/page1/subpage1',\n      component: {\n        default: {\n          componentClass: Subpage1Menu,\n        },\n      },\n    }\n  },\n  content: {...}, // The configuration shape for the content and header sections is the same as that of the menu section.\n  header: {...},\n}\n")),Object(p.mdx)("h2",{id:"routingstackdelegate"},"RoutingStackDelegate"),Object(p.mdx)("p",null,"All components rendered within the ",Object(p.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," receive a ",Object(p.mdx)("inlineCode",{parentName:"p"},"routingStackDelegate")," prop. This prop contains the following attributes:"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"location")," - The location used to render the component. This can be used to build NavLinks or other components that might desire the current location."),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"parentPaths")," - An array of String paths that were determined to preceed the current path in the configuration. For example, if the routes ",Object(p.mdx)("inlineCode",{parentName:"li"},"/pages"),", ",Object(p.mdx)("inlineCode",{parentName:"li"},"/pages/:id"),", and ",Object(p.mdx)("inlineCode",{parentName:"li"},"/pages/:id/summary")," were defined by the config, the component rendered for the path ",Object(p.mdx)("inlineCode",{parentName:"li"},"/pages/123/summary")," would receive a parentPaths value of ","[",Object(p.mdx)("inlineCode",{parentName:"li"},"/pages"),", ",Object(p.mdx)("inlineCode",{parentName:"li"},"/pages/123"),"]",". This set of paths could be used to build breadcrumbs or simple navigation functionality.")),Object(p.mdx)("p",null,"Components within the ",Object(p.mdx)("inlineCode",{parentName:"p"},"menu")," region get a few extra features, however. To help enable nested menu scenarios, the ",Object(p.mdx)("inlineCode",{parentName:"p"},"routingStackDelegate")," will also include the following:"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"show")," - A function that will cause the NavigationLayout to display the menu for the given path. If the given path does not match the current history location, the new location is pushed onto the history stack. If the given path already matches the current history location, only the RoutingStack's internal location is updated; this insures that the history is not being manipulated unnecessarily when navigating down the stack of menu components."),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"showParent")," - A function that will cause the NavigationLayout to display the immediate parent path (if one is present)."),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"showRoot")," - A function that will cause the NavigationLayout to display the first (or root) parent path (if one is present, and the number of parent paths is more than 1).")),Object(p.mdx)("p",null,"It is important to note that ",Object(p.mdx)("inlineCode",{parentName:"p"},"showParent"),"/",Object(p.mdx)("inlineCode",{parentName:"p"},"showRoot")," change the location used by the menu components, but they do not change the location of the overall page. For example, if the page location is ",Object(p.mdx)("inlineCode",{parentName:"p"},"/pages/99/summary"),", and the menu component calls ",Object(p.mdx)("inlineCode",{parentName:"p"},"showParent"),", the menu component for ",Object(p.mdx)("inlineCode",{parentName:"p"},"/pages/99")," will be rendered, but the content component for ",Object(p.mdx)("inlineCode",{parentName:"p"},"/pages/99/summary")," will still be rendered, and the browser URL will still be ",Object(p.mdx)("inlineCode",{parentName:"p"},"[base-url]/pages/99/summary"),"."),Object(p.mdx)("p",null,"After calling these navigation functions, the ",Object(p.mdx)("inlineCode",{parentName:"p"},"location")," provided in the ",Object(p.mdx)("inlineCode",{parentName:"p"},"routingStackDelegate")," match the parent path specified. If the true page location is still necessary, the ",Object(p.mdx)("inlineCode",{parentName:"p"},"withRouter")," HOC provided by ",Object(p.mdx)("inlineCode",{parentName:"p"},"react-router")," can be utilized as needed. And if this functionality is not desired at all for a given application, these props can be safely ignored."),Object(p.mdx)("h2",{id:"refuseroutingstacknavigation"},"refuseRoutingStackNavigation"),Object(p.mdx)("p",null,"The configuration API supports an additional key for each component specification called ",Object(p.mdx)("inlineCode",{parentName:"p"},"refuseRoutingStackNavigation")," that will prevent the associated component from appearing in parentPaths and will disallow navigation to it through the ",Object(p.mdx)("inlineCode",{parentName:"p"},"showParent"),"/",Object(p.mdx)("inlineCode",{parentName:"p"},"showRoot"),". A component with ",Object(p.mdx)("inlineCode",{parentName:"p"},"refuseRoutingStackNavigation")," set to ",Object(p.mdx)("inlineCode",{parentName:"p"},"true")," will only be presented if the current location matches its route. This is an advanced option that can be used to better control menu-based workflows."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm install terra-navigation-layout"))))),Object(p.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(p.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(p.mdx)("table",null,Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(p.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"react"),Object(p.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(p.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"react-router-dom"),Object(p.mdx)("td",{parentName:"tr",align:null},"^5.0.0")))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import NavigationLayout from 'terra-navigation-layout'\n")),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(U,{title:"Example Navigation Layout",mdxType:"NavigationLayoutStandard"}),Object(p.mdx)("h2",{id:"navigation-layout-props-table"},"Navigation Layout Props Table"),Object(p.mdx)(_,{mdxType:"NavigationLayoutPropsTable"}))}G.isMDXComponent=!0}}]);