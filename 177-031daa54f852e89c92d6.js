(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1095:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(3)),s=r(n(7)),l=r(n(1096)),d=s.default.bind(l.default),i={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,o=e.version,s=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(o))),l=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},s,l)};c.propTypes=i;var u=c;t.default=u},1096:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},1106:function(e,t,n){"use strict";var r=n(4),a=n(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=o?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(r,s,l):r[s]=e[s]}r.default=e,n&&n.set(e,r);return r}(n(0)),s=r(n(3)),l=r(n(7)),d=n(167),i=r(n(1109));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u=l.default.bind(i.default),p={rows:s.default.arrayOf(s.default.shape({name:s.default.string,type:s.default.func,required:s.default.bool,defaultValue:s.default.string,description:s.default.func}))},m=function(e){var t=e.rows,n=(0,o.useContext)(d.ThemeContext);return o.default.createElement("table",{className:u("table",n.className)},o.default.createElement("thead",null,o.default.createElement("tr",{className:u("tr")},o.default.createElement("th",{className:u("th")},"Prop Name"),o.default.createElement("th",{className:u("th")},"Type"),o.default.createElement("th",{className:u("th")},"Is Required"),o.default.createElement("th",{className:u("th")},"Default Value"),o.default.createElement("th",{className:u("th")},"Description"))),o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{className:u("tr","props-tr"),key:e.name},o.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:u(["td","props-td"])},e.type()),o.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};m.propTypes=p;var _=m;t.default=_},1109:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___2OiA6","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___3AJGO",a:"PropsTable-module__a___Nl2I_",blockquote:"PropsTable-module__blockquote___1UooW",code:"PropsTable-module__code___2CrUu",dd:"PropsTable-module__dd___-FF1D",dl:"PropsTable-module__dl___xAY9f",dt:"PropsTable-module__dt___3ZdLl",h1:"PropsTable-module__h1___2344J",h2:"PropsTable-module__h2___39ybm",h3:"PropsTable-module__h3___2fnGf",h4:"PropsTable-module__h4___3EKMz",h5:"PropsTable-module__h5___2O9Fr",h6:"PropsTable-module__h6___3yqd6","icon-link":"PropsTable-module__icon-link___3-2wE",anchor:"PropsTable-module__anchor___3FaVY",hr:"PropsTable-module__hr___284T6",img:"PropsTable-module__img___228gq",input:"PropsTable-module__input___37YH2",kbd:"PropsTable-module__kbd___9Qwkj",li:"PropsTable-module__li___2DP3k",p:"PropsTable-module__p___il_ri",ol:"PropsTable-module__ol___31QwV",ul:"PropsTable-module__ul___2emTr",td:"PropsTable-module__td___2UqeU",pre:"PropsTable-module__pre___2B0eh",strong:"PropsTable-module__strong___2t-kf",table:"PropsTable-module__table___1UgXO",th:"PropsTable-module__th___3-CqB",tr:"PropsTable-module__tr___1oPul",icon:"PropsTable-module__icon___2R10q",required:"PropsTable-module__required___r_fIG","props-tr":"PropsTable-module__props-tr___3a95z","props-td":"PropsTable-module__props-td___1xIuD"}},1201:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(1095),s=n.n(o),l=function(e){var t=e.url;return a.a.createElement(s.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.41.0",url:t})}},2237:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n(23),a=n.n(r),o=n(47),s=n.n(o),l=(n(0),n(599)),d=n(1201),i=n(1106),c=n.n(i),u=["components"],p=["components"],m=["components"],_=["components"],b=["components"],h=["components"],f=["components"],g=["components"],x=function(){return Object(l.mdx)(c.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=s()(t,u);return Object(l.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=s()(t,p);return Object(l.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The child components that will be provided the disclosure functionality."))}return t.isMDXComponent=!0,t({})}},{name:"render",type:function(){var e={};function t(t){var n=t.components,r=s()(t,m);return Object(l.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=s()(t,_);return Object(l.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"A function used to provide rendering capabilities to the DisclosureManager."))}return t.isMDXComponent=!0,t({})}},{name:"supportedDisclosureTypes",type:function(){var e={};function t(t){var n=t.components,r=s()(t,b);return Object(l.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"array"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=s()(t,h);return Object(l.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"An array of disclosure types that the DisclosureManager should support. If an unsupported disclosure request occurs, the DisclosureManager will\nutilize its 'disclosureManager' prop and forward the request instead of handling the request itself."))}return t.isMDXComponent=!0,t({})}},{name:"trapNestedDisclosureRequests",type:function(){var e={};function t(t){var n=t.components,r=s()(t,f);return Object(l.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=s()(t,g);return Object(l.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"A boolean indicating whether or not the DisclosureManager should handle all nested disclosure requests. When enabled, the DisclosureManager will handle all\ndisclose requests coming from disclosed components, regardless of the preferred disclosure type."))}return t.isMDXComponent=!0,t({})}}]})},O=["components"],y={};function j(e){var t=e.components,n=s()(e,O);return Object(l.mdx)("wrapper",a()({},y,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(d.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-disclosure-manager"},"Terra Disclosure Manager"),Object(l.mdx)("p",null,"The DisclosureManager is a stateful component used to manage disclosure presentation. It provides consumers with access to the ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManager")," component, the ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext"),", and the context wrapper ",Object(l.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager"),". Additionally, it provides the ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to allow disclosed content to register header information with the disclosing container."),Object(l.mdx)("p",null,"For the purpose of clarity, the concepts explained can be broken down into:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Disclosure Manager"),Object(l.mdx)("li",{parentName:"ul"},"Disclosure Manager Children - content rendered as children of the DisclosureManager"),Object(l.mdx)("li",{parentName:"ul"},"Disclosed Content - content that will be disclosed by a DisclosureManager child")),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-disclosure-manager"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(l.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react"),Object(l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(l.mdx)("p",null,"This package uses React's Context for inter-component communication. A single instance of this package must be installed to ensure that communication occurs between all Context Providers and Consumers. To help ensure a single instance is installed, this package should be defined as a peer dependency in packages that are reusable libraries or otherwise consumed by other packages."),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import DisclosureManager from 'terra-disclosure-manager';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),Object(l.mdx)("h2",{id:"disclosure-manager-props"},"Disclosure Manager Props"),Object(l.mdx)(x,{mdxType:"DisclosureManagerPropsTable"}),Object(l.mdx)("h3",{id:"requirements-of-the-render-prop"},"Requirements of the Render Prop"),Object(l.mdx)("p",null,"The DisclosureManager does not implement a traditional render function. Instead, it uses the ",Object(l.mdx)("inlineCode",{parentName:"p"},"render")," prop provided to the DisclosureManager to allow the implementing component to managed how disclsoures should be presented. The ",Object(l.mdx)("inlineCode",{parentName:"p"},"render")," function should define the following parameters that will reflect the the DisclosureManager's state."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"const render = ({\n  children,\n  closeDisclosure,\n  disclosureComponentKeys,\n  disclosureComponentData,\n  disclosure,\n  dismissPresentedComponent,\n  maximizeDisclosure,\n  minimizeDisclosure,\n}) => {\n  // render stuff\n};\n")),Object(l.mdx)("details",null,Object(l.mdx)("summary",null,"Render Arguments in Detail"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"const render = ({\n  /* The children components provided to the DisclosureManager. */\n  children: {\n    /* Array of React components to render as content. */\n    components: PropsTypes.arrayOf(PropsTypes.node),\n  },\n\n  /* Closes the disclosure and removes all components from the disclosure stack. */\n  closeDisclosure: PropsTypes.func,\n\n  /* The components in the disclosure stack. */\n  disclose: {\n    /* The React components to render in a disclosure mechanism. */\n    components: PropTypes.arrayOf(PropsTypes.node),\n        \n    /* Indicate the current display state of the DisclosureManager. */\n    isOpen: PropTypes.bool,\n        \n    /**\n     * Indicate the current focus state of the DisclosureManager.\n     *  > Note: The `isFocused` value has little relevance now that Terra's AbstractModal and other\n     *    components directly manage their own focus state. `isFocused` will be removed from their\n     *    DisclosureManager API in a future major release.\n     */\n    isFocused: PropTypes.bool,\n        \n    /* Indicate the current maximize state of the DisclosureManager. */\n    isMaximized: PropTypes.bool,\n    \n    /* The String size of the disclosure. */\n    size: PropTypes.string,\n  },\n  \n  /* Array of keys representing the components in the disclosure stack. */\n  disclosureComponentKeys: PropsTypes.arrayOf(PropsTypes.string),\n\n  /* Contains components and associated data representing the state of disclosure stack */\n  disclosureComponentData: {\n    \n    /* Component that has been wrapped with the DisclosureManager-provided contexts */\n    component: PropsTypes.node,\n\n    /** \n     * Contains the header data for the associated component. This will be provided if the \n     * component's title is provided title on disclose or the DisclosureHeaderAdapter is rendered\n     * by the disclosed component.\n     */\n    headerAdapterData: {\n      /* The disclosed component's title that can be rendered within the header. */\n      title: PropsTypes.string,\n\n      /* A CollapsibleMenuView component that can render within the header. */\n      collapsibleMenuView: PropType.node,\n    },\n  },\n\n  /* Pops the currently disclosed component off the disclosure stack. */\n  dismissPresentedComponent: PropsTypes.func,\n\n  /**\n   * Maximizes the disclosure size. If the disclosure cannot be maximized, or if it is already\n   * maximized, the function is not provided.\n   */\n  maximizeDisclosure: PropsTypes.func,\n\n  /**\n   * Minimizes the disclosure size. If the disclosure cannot be minimized, or if it is already\n   * minimized, the function is not provided.\n   */\n  minimizeDisclosure: PropsTypes.func,\n}) => {\n  // render stuff\n};\n"))))}j.isMDXComponent=!0}}]);