(window.webpackJsonp=window.webpackJsonp||[]).push([[65,17],{1116:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(3)),o=n(1119),l=i.default.shape({size:i.default.string,toggleMenu:i.default.func,menuIsOpen:i.default.bool,togglePin:i.default.bool,menuIsPinned:i.default.bool}),u=i.default.shape({accessory:i.default.element,title:i.default.string}),r=i.default.oneOf(["start","center","end"]),s=i.default.arrayOf(i.default.shape({path:i.default.string.isRequired,text:i.default.string.isRequired,hasSubMenu:i.default.bool,icon:i.default.node})),d={utilityConfigPropType:i.default.shape({title:i.default.string,accessory:i.default.element,onChange:i.default.func.isRequired,menuItems:i.default.arrayOf(o.UtilityUtils.itemShape).isRequired,initialSelectedKey:i.default.string.isRequired}),utilityMenuItemPropType:o.UtilityUtils.itemShape,layoutConfigPropType:l,nameConfigPropType:u,navigationAlignmentPropType:r,navigationItemsPropType:s};t.default=d},1126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={isSizeCompact:function(e){return"tiny"===e||"small"===e}};t.default=a},1131:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationHeaderName",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ApplicationMenuName",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var i=a(n(1138)),o=a(n(1140)),l={ApplicationHeaderName:i.default,ApplicationMenuName:o.default};t.default=l},1136:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(23)),o=a(n(47)),l=a(n(0)),u=a(n(3)),r=a(n(21)),s=a(n(7)),d=a(n(12)),c=n(19),f=a(n(1137)),p=["extensions","logo","navigation","intl","toggle","utilities"],m=s.default.bind(f.default),y={extensions:u.default.element,logo:u.default.element,intl:u.default.shape({formatMessage:u.default.func}).isRequired,navigation:u.default.element,toggle:u.default.element,utilities:u.default.element},g=function(e){var t,n,a,u,s,c=e.extensions,f=e.logo,y=e.navigation,g=e.intl,h=e.toggle,_=e.utilities,v=(0,o.default)(e,p),C=l.default.useContext(d.default),b=(0,r.default)(m("header","fill",C.className),v.className);f&&(t=l.default.createElement("div",{className:m("fit","start","logo")},f)),y&&(n=l.default.createElement("nav",{role:"navigation",className:m("fill")},y)),c&&(a=l.default.createElement("div",{className:m("fit","end","extensions")},c)),_&&(u=l.default.createElement("div",{className:m("fit","end","utilities")},_)),h&&(s=l.default.createElement("div",{className:m("fit")},h));var P,M=l.default.createElement("div",{className:m("fill","header-inner")},n,a),N=l.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:m("skip-content")},g.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(M||t||u)&&(P=l.default.createElement("div",{className:m("fill","header-body")},N,t,M,u)),l.default.createElement("div",(0,i.default)({},v,{className:b}),s,P)};g.propTypes=y;var h=(0,c.injectIntl)(g);t.default=h},1137:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderLayout-module__clinical-lowlight-theme___2bNAu","orion-fusion-theme":"ApplicationHeaderLayout-module__orion-fusion-theme___1_WJx",fit:"ApplicationHeaderLayout-module__fit___156Sk",fill:"ApplicationHeaderLayout-module__fill___xK-CU",start:"ApplicationHeaderLayout-module__start___3pTQW",end:"ApplicationHeaderLayout-module__end___3gbC_","header-inner":"ApplicationHeaderLayout-module__header-inner___2ay7A",logo:"ApplicationHeaderLayout-module__logo___3U4kT",utilities:"ApplicationHeaderLayout-module__utilities___1Wf5t",extensions:"ApplicationHeaderLayout-module__extensions___1xUww","header-body":"ApplicationHeaderLayout-module__header-body___4JmFD","skip-content":"ApplicationHeaderLayout-module__skip-content___1JtRT"}},1138:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(23)),o=a(n(47)),l=a(n(0)),u=a(n(3)),r=a(n(21)),s=a(n(7)),d=a(n(12)),c=a(n(1139)),f=["accessory","title"],p=s.default.bind(c.default),m={accessory:u.default.element,title:u.default.node},y=function(e){var t=e.accessory,n=e.title,a=(0,o.default)(e,f),u=l.default.useContext(d.default),s=(0,r.default)(p("application-header-name",u.className),a.className);return l.default.createElement("div",(0,i.default)({},a,{className:s}),t&&l.default.createElement("div",{className:p("accessory")},t),n&&l.default.createElement("div",{className:p("title")},n))};y.propTypes=m;var g=y;t.default=g},1139:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderName-module__clinical-lowlight-theme___3tLNe","orion-fusion-theme":"ApplicationHeaderName-module__orion-fusion-theme___1EtY2","application-header-name":"ApplicationHeaderName-module__application-header-name___33L4P",accessory:"ApplicationHeaderName-module__accessory___1p9Mm",title:"ApplicationHeaderName-module__title___2_R_G"}},1140:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(23)),o=a(n(47)),l=a(n(0)),u=a(n(3)),r=a(n(21)),s=a(n(7)),d=a(n(12)),c=a(n(1141)),f=["accessory","title"],p=s.default.bind(c.default),m={accessory:u.default.element,title:u.default.node},y=function(e){var t=e.accessory,n=e.title,a=(0,o.default)(e,f),u=l.default.useContext(d.default),s=(0,r.default)(p("application-menu-name",u.className),a.className);return l.default.createElement("div",(0,i.default)({},a,{className:s}),t&&l.default.createElement("div",{className:p("accessory")},t),n&&l.default.createElement("div",{className:p("title")},n))};y.propTypes=m;var g=y;t.default=g},1141:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ApplicationMenuName-module__clinical-lowlight-theme___1H0q_","orion-fusion-theme":"ApplicationMenuName-module__orion-fusion-theme___2O07l","application-menu-name":"ApplicationMenuName-module__application-menu-name___28pkP",accessory:"ApplicationMenuName-module__accessory___Ib4my",title:"ApplicationMenuName-module__title___3tOTH"}},1144:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(23)),o=a(n(47)),l=a(n(0)),u=a(n(3)),r=a(n(7)),s=a(n(1145)),d=["content","extensions","footer","header"],c=r.default.bind(s.default),f={content:u.default.element,extensions:u.default.element,footer:u.default.element,header:u.default.element},p=function(e){var t,n,a,u,r=e.content,s=e.extensions,f=e.footer,p=e.header,m=(0,o.default)(e,d),y=c(["menu","fill",m.className]);return p&&(t=l.default.createElement("div",{className:c(["fit","header"])},p)),r&&(n=l.default.createElement("div",{className:c(["fill","content"])},l.default.createElement("div",{className:c("normalizer")},r))),s&&(a=l.default.createElement("div",{className:c(["fit","widget"])},s)),f&&(u=l.default.createElement("div",{className:c(["fit","footer"])},f)),l.default.createElement("div",(0,i.default)({},m,{className:y}),t,l.default.createElement("div",{className:c(["fill","body"])},a,n),u)};p.propTypes=f;var m=p;t.default=m},1145:function(e,t,n){"use strict";n.r(t),t.default={fit:"ApplicationMenuLayout-module__fit___314MK",fill:"ApplicationMenuLayout-module__fill___3To-J",menu:"ApplicationMenuLayout-module__menu___3wquh",header:"ApplicationMenuLayout-module__header___1d0TV",footer:"ApplicationMenuLayout-module__footer___xY2BR",body:"ApplicationMenuLayout-module__body___2rr5O",widgets:"ApplicationMenuLayout-module__widgets___3CRr6",content:"ApplicationMenuLayout-module__content___1cJCs",normalizer:"ApplicationMenuLayout-module__normalizer___3gCHT"}},1150:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationTabs",{enumerable:!0,get:function(){return o.default}}),t.ApplicationLinksPropType=t.default=void 0;var i=a(n(3)),o=a(n(1161)),l=i.default.shape({alignment:i.default.oneOf(["start","center","end"]),links:i.default.arrayOf(i.default.shape({id:i.default.string,path:i.default.string.isRequired,text:i.default.string.isRequired,icon:i.default.node}))});t.ApplicationLinksPropType=l;var u={ApplicationTabs:o.default,ApplicationLinksPropType:l};t.default=u},1151:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(23)),o=a(n(47)),l=a(n(33)),u=a(n(39)),r=a(n(49)),s=a(n(41)),d=a(n(42)),c=a(n(43)),f=a(n(0)),p=a(n(3)),m=a(n(21)),y=a(n(7)),g=a(n(12)),h=n(19),_=n(498),v=a(n(1136)),C=n(1119),b=n(1131),P=n(1150),M=a(n(607)),N=a(n(228)),E=n(1132),O=a(n(1116)),T=a(n(1126)),k=a(n(1162)),x=["disclosureManager","applicationLinks","extensions","layoutConfig","nameConfig","utilityConfig","navigationLayoutRoutes","navigationLayoutSize","intl","hasIcons"];function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var A=y.default.bind(k.default),S={applicationLinks:P.ApplicationLinksPropType,extensions:p.default.element,layoutConfig:O.default.layoutConfigPropType,navigationLayoutRoutes:p.default.arrayOf(E.processedRoutesPropType),navigationLayoutSize:p.default.string,nameConfig:O.default.nameConfigPropType,utilityConfig:O.default.utilityConfigPropType,intl:p.default.shape({formatMessage:p.default.func}),disclosureManager:_.disclosureManagerShape,hasIcons:p.default.bool},U=function(e){(0,s.default)(n,e);var t=R(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).handleUtilityDiscloseRequest=a.handleUtilityDiscloseRequest.bind((0,r.default)(a)),a.handleUtilityPopupCloseRequest=a.handleUtilityPopupCloseRequest.bind((0,r.default)(a)),a.handleUtilityOnChange=a.handleUtilityOnChange.bind((0,r.default)(a)),a.getTargetRef=a.getTargetRef.bind((0,r.default)(a)),a.setContentNode=a.setContentNode.bind((0,r.default)(a)),a.renderToggle=a.renderToggle.bind((0,r.default)(a)),a.renderAppName=a.renderAppName.bind((0,r.default)(a)),a.renderExtensions=a.renderExtensions.bind((0,r.default)(a)),a.renderNavigation=a.renderNavigation.bind((0,r.default)(a)),a.renderUtilities=a.renderUtilities.bind((0,r.default)(a)),a.renderUtilitiesPopup=a.renderUtilitiesPopup.bind((0,r.default)(a)),a.state={utilityComponent:void 0},a}return(0,u.default)(n,[{key:"handleUtilityDiscloseRequest",value:function(e){this.setState({utilityComponent:f.default.cloneElement(e,{onRequestClose:this.handleUtilityPopupCloseRequest})})}},{key:"handleUtilityPopupCloseRequest",value:function(){this.state.utilityComponent&&this.setState({utilityComponent:void 0})}},{key:"handleUtilityOnChange",value:function(e,t){var n=this.props,a=n.utilityConfig,i=n.disclosureManager;a.onChange(e,t,i&&i.disclose)}},{key:"setContentNode",value:function(e){this.contentNode=e}},{key:"getTargetRef",value:function(){if(this.contentNode)return this.contentNode.querySelector("[data-application-header-utility]")}},{key:"renderToggle",value:function(){var e=this.props,t=e.layoutConfig,n=e.intl;return t.toggleMenu?f.default.createElement("div",{className:A("navbar-toggle")},f.default.createElement("button",{type:"button",className:A("toggle-button"),"aria-label":n.formatMessage({id:"Terra.applicationLayout.applicationHeader.menuToggleLabel"}),onClick:t.toggleMenu,"data-application-header-toggle":!0},f.default.createElement(M.default,null))):null}},{key:"renderAppName",value:function(){var e=this.props.nameConfig;return e&&(e.accessory||e.title)?f.default.createElement(b.ApplicationHeaderName,{accessory:e.accessory,title:e.title}):null}},{key:"renderNavigation",value:function(e){var t=this.props.applicationLinks;return e?this.renderAppName():t.links&&t.links.length?f.default.createElement(P.ApplicationTabs,t):null}},{key:"renderExtensions",value:function(e){var t=this.props,n=t.layoutConfig,a=t.extensions;return!e&&a?f.default.cloneElement(a,{layoutConfig:n}):null}},{key:"renderUtilities",value:function(e){var t=this.props.utilityConfig;return!e&&t?f.default.createElement(C.ApplicationHeaderUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-header-utility":!0}):null}},{key:"renderUtilitiesPopup",value:function(){var e=this.state.utilityComponent;return e?f.default.createElement(N.default,{attachmentBehavior:"push",contentAttachment:"top center",contentHeight:"auto",contentWidth:"240",isArrowDisplayed:!0,isHeaderDisabled:!0,isOpen:!0,onRequestClose:this.handleUtilityPopupCloseRequest,targetRef:this.getTargetRef},e):null}},{key:"render",value:function(){var e=this.props,t=(e.disclosureManager,e.applicationLinks,e.extensions,e.layoutConfig),n=(e.nameConfig,e.utilityConfig,e.navigationLayoutRoutes,e.navigationLayoutSize,e.intl,e.hasIcons),a=(0,o.default)(e,x),l=this.context,u=(0,m.default)(A("application-navbar",{"application-navbar-with-icons":n},l.className),a.className),r=T.default.isSizeCompact(t.size);return f.default.createElement("header",(0,i.default)({role:"banner"},a,{className:u,ref:this.setContentNode}),f.default.createElement(v.default,{toggle:this.renderToggle(),logo:r?null:this.renderAppName(),navigation:this.renderNavigation(r),extensions:this.renderExtensions(r),utilities:this.renderUtilities(r)}),this.renderUtilitiesPopup())}}]),n}(f.default.Component);U.propTypes=S,U.defaultProps={applicationLinks:{},hasIcons:!1},U.contextType=g.default;var I=(0,h.injectIntl)((0,_.withDisclosureManager)(U));t.default=I},1154:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],a=n.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var n,o,u,r=[],c=[],f=e.querySelectorAll(a);for(t.includeContainer&&i.call(e,a)&&(f=Array.prototype.slice.apply(f)).unshift(e),n=0;n<f.length;n++)l(o=f[n])&&(0===(u=s(o))?r.push(o):c.push({documentOrder:n,tabIndex:u,node:o}));return c.sort(d).map((function(e){return e.node})).concat(r)}function l(e){return!(!u(e)||function(e){return function(e){return c(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||s(e)<0)}function u(e){return!(e.disabled||function(e){return c(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,a)&&l(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,r)&&u(e)};var r=n.concat("iframe").join(",");function s(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function c(e){return"INPUT"===e.tagName}e.exports=o},1157:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RoutingMenu",{enumerable:!0,get:function(){return g.default}}),t.Utils=t.default=void 0;var i=a(n(79)),o=a(n(33)),l=a(n(39)),u=a(n(41)),r=a(n(42)),s=a(n(43)),d=a(n(0)),c=a(n(3)),f=a(n(1189)),p=n(1132),m=n(155),y=a(n(601)),g=a(n(1168)),h=a(n(1169)),_=a(n(1151)),v=a(n(1116)),C=a(n(1126)),b=a(n(1170));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var i=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,r.default)(this,n)}}var E=["default","tiny","small","medium","large","huge"],O={extensions:c.default.element,indexPath:c.default.string.isRequired,nameConfig:v.default.nameConfigPropType,navigationAlignment:v.default.navigationAlignmentPropType,navigationItems:v.default.navigationItemsPropType,routingConfig:c.default.shape({menu:p.routeConfigPropType,content:p.routeConfigPropType}).isRequired,utilityConfig:v.default.utilityConfigPropType},T=function(e){(0,u.default)(n,e);var t=N(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).state={applicationLayoutRoutingConfig:n.buildRoutingConfig(a.props),prevProps:{nameConfig:e.nameConfig,routingConfig:e.routingConfig,utilityConfig:e.utilityConfig,navigationItems:e.navigationItems,indexPath:e.indexPath}},a}return(0,l.default)(n,[{key:"render",value:function(){var e=this.props,t=e.nameConfig,n=e.utilityConfig,a=e.navigationAlignment,i=e.navigationItems,o=e.indexPath,l=e.extensions,u=this.state.applicationLayoutRoutingConfig,r=(i||[]).some((function(e){return e.icon})),s=i?(i||[]).map((function(e,t){return{id:"application-layout-tab-".concat(t),path:e.path,text:e.text,externalLink:e.externalLink,icon:e.icon}})):void 0,c=d.default.createElement(_.default,{nameConfig:t,utilityConfig:n,extensions:l,applicationLinks:{alignment:a,links:s},hasIcons:r});return d.default.createElement(y.default,null,d.default.createElement(f.default,{config:u,header:c,indexPath:o}))}}],[{key:"buildMenuNavigationItems",value:function(e){var t=e.navigationItems,n=e.routingConfig;if(!n.menu)return t;var a=Object.keys(n.menu).map((function(e){return n.menu[e].path}));return t.map((function(e){return{externalLink:e.externalLink,path:e.path,text:e.text,hasSubMenu:a.filter((function(t){return(0,m.matchPath)(e.path,{path:t})})).length>0}}))}},{key:"buildNavigationMenuConfig",value:function(e){var t=n.buildMenuNavigationItems(e),a={componentClass:g.default,props:{menuItems:t},refuseRoutingStackNavigation:0===t.length};return{"/":{path:"/",component:{tiny:a,small:a}}}}},{key:"buildApplicationMenus",value:function(e,t){var n=e.nameConfig,a=e.utilityConfig,i=e.extensions;if(t){var o={};return Object.keys(t).forEach((function(e){var l=M({},t[e]),u=M({},l.component);E.forEach((function(e){if(u[e]){var t=M({},u[e]),o=M({},t.props);o.applicationMenuWrapperProps={contentComponentClass:t.componentClass,nameConfig:n,utilityConfig:a,extensions:i},t.props=o,t.componentClass=h.default,u[e]=t}})),l.component=u,o[e]=l})),o}}},{key:"buildRoutingConfig",value:function(e){var t=e.routingConfig;return M(M({},t),{},{menu:n.buildApplicationMenus(e,M(M({},t.menu),n.buildNavigationMenuConfig(e)))})}},{key:"getDerivedStateFromProps",value:function(e,t){return t.prevProps.nameConfig!==e.nameConfig||t.prevProps.utilityConfig!==e.utilityConfig||t.prevProps.routingConfig!==e.routingConfig||t.prevProps.navigationItems!==e.navigationItems||t.prevProps.indexPath!==e.indexPath?{applicationLayoutRoutingConfig:n.buildRoutingConfig(e)}:null}}]),n}(d.default.Component);T.propTypes=O,T.defaultProps={navigationItems:[]};var k=T;t.default=k;var x={helpers:C.default,utilityHelpers:b.default,propTypes:v.default};t.Utils=x},1158:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(23)),o=a(n(47)),l=a(n(33)),u=a(n(39)),r=a(n(49)),s=a(n(41)),d=a(n(42)),c=a(n(43)),f=a(n(0)),p=a(n(3)),m=a(n(21)),y=a(n(7)),g=a(n(12)),h=a(n(1144)),_=n(1131),v=a(n(1130)),C=n(1119),b=n(601),P=n(498),M=a(n(1116)),N=a(n(1126)),E=a(n(1159)),O=a(n(1160)),T=["disclosureManager","content","extensions","layoutConfig","nameConfig","routingStackDelegate","utilityConfig"];function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var x=y.default.bind(O.default),R={content:p.default.element,extensions:p.default.element,layoutConfig:M.default.layoutConfigPropType.isRequired,nameConfig:M.default.nameConfigPropType,routingStackDelegate:v.default.propType.isRequired,utilityConfig:M.default.utilityConfigPropType,disclosureManager:P.disclosureManagerShape},A=function(e){(0,s.default)(n,e);var t=k(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).renderHeader=a.renderHeader.bind((0,r.default)(a)),a.renderExtensions=a.renderExtensions.bind((0,r.default)(a)),a.renderFooter=a.renderFooter.bind((0,r.default)(a)),a.handleUtilityDiscloseRequest=a.handleUtilityDiscloseRequest.bind((0,r.default)(a)),a.handleUtilityOnChange=a.handleUtilityOnChange.bind((0,r.default)(a)),a}return(0,u.default)(n,[{key:"handleUtilityDiscloseRequest",value:function(e){var t=this.props,n=t.disclosureManager,a=t.layoutConfig;a&&a.toggleMenu&&a.toggleMenu(),n&&e&&n.disclose({preferredType:b.disclosureType,dimensions:{height:"420",width:"320"},content:{component:f.default.createElement(E.default,null,e),key:"application-menu-utility-menu"}})}},{key:"handleUtilityOnChange",value:function(e,t){var n=this.props,a=n.utilityConfig,i=n.disclosureManager;a.onChange(e,t,i&&i.disclose)}},{key:"renderHeader",value:function(e){var t=this.props.nameConfig;return e&&t&&(t.accessory||t.title)?f.default.createElement("div",{className:x("menu-header")},f.default.createElement(_.ApplicationMenuName,{accessory:t.accessory,title:t.title})):null}},{key:"renderExtensions",value:function(e){var t=this.props,n=t.layoutConfig,a=t.extensions;return e&&a?f.default.cloneElement(a,{layoutConfig:n}):null}},{key:"renderFooter",value:function(e){var t=this.props.utilityConfig;return e&&t?f.default.createElement(C.ApplicationMenuUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-menu-utility":!0}):null}},{key:"render",value:function(){var e,t=this.props,n=(t.disclosureManager,t.content),a=(t.extensions,t.layoutConfig),l=(t.nameConfig,t.routingStackDelegate),u=(t.utilityConfig,(0,o.default)(t,T)),r=this.context,s=(0,m.default)(x("application-menu",r.className),u.className),d=N.default.isSizeCompact(a.size);return n&&(e=f.default.cloneElement(n,{layoutConfig:a,routingStackDelegate:l})),f.default.createElement("div",(0,i.default)({},u,{className:s}),f.default.createElement(h.default,{header:this.renderHeader(d),extensions:this.renderExtensions(d),content:e,footer:this.renderFooter(d)}))}}]),n}(f.default.Component);A.propTypes=R,A.contextType=g.default;var S=(0,P.withDisclosureManager)(A);t.default=S},1159:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(79)),o=a(n(47)),l=a(n(0)),u=a(n(3)),r=n(498),s=["disclosureManager","children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={disclosureManager:r.disclosureManagerShape,children:u.default.node.isRequired},p=function(e){var t=e.disclosureManager,n=e.children,a=(0,o.default)(e,s);return l.default.cloneElement(n,c(c({},a),{},{onRequestClose:t.dismiss,isHeightBounded:!0}))};p.propTypes=f;var m=(0,r.withDisclosureManager)(p);t.default=m},1160:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ApplicationMenu-module__clinical-lowlight-theme___3fHFu","orion-fusion-theme":"ApplicationMenu-module__orion-fusion-theme___3sjuU","application-menu":"ApplicationMenu-module__application-menu___1fLog","menu-header":"ApplicationMenu-module__menu-header___3S7b5"}},1162:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeader-module__clinical-lowlight-theme___SId3C","orion-fusion-theme":"ApplicationHeader-module__orion-fusion-theme___2iS99","application-navbar":"ApplicationHeader-module__application-navbar___3SEh7","application-navbar-with-icons":"ApplicationHeader-module__application-navbar-with-icons___1L4GK","navbar-toggle":"ApplicationHeader-module__navbar-toggle___3_Omk","toggle-button":"ApplicationHeader-module__toggle-button___16_CB"}},1168:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(33)),o=a(n(39)),l=a(n(49)),u=a(n(41)),r=a(n(42)),s=a(n(43)),d=a(n(0)),c=a(n(3)),f=n(155),p=a(n(1190)),m=a(n(1130)),y=a(n(1116));function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var i=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,r.default)(this,n)}}var h={title:c.default.string,menuItems:c.default.arrayOf(c.default.shape({text:c.default.string.isRequired,path:c.default.string.isRequired,hasSubMenu:c.default.bool})),layoutConfig:y.default.layoutConfigPropType.isRequired,routingStackDelegate:m.default.propType.isRequired,location:c.default.shape({pathname:c.default.string}).isRequired},_="routingMenuRootMenuKey",v=function(e){(0,u.default)(n,e);var t=g(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).handleMenuChange=a.handleMenuChange.bind((0,l.default)(a)),a.state={selectedChildKey:n.getSelectedChildKey(e.location.pathname,e.menuItems),prevPropsLocationPathName:e.location.pathname,prevPropsMenuItems:e.menuItems},a}return(0,o.default)(n,[{key:"handleMenuChange",value:function(e,t){var n,a=this.props,i=a.routingStackDelegate,o=a.layoutConfig;return t.metaData.externalLink?n=function(){return window.open(t.metaData.externalLink.path,t.metaData.externalLink.target||"_blank")}:(this.setState({selectedChildKey:t.selectedChildKey}),n=function(){return i.show({path:t.metaData.path})}),!t.metaData.hasSubMenu&&o.toggleMenu?o.toggleMenu().then((function(){n()})):Promise.resolve().then((function(){return n()}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.routingStackDelegate,i=e.menuItems,o=this.state.selectedChildKey,l=n.buildSideMenuItems(i);return l.push({key:_,text:t||"",childKeys:l.map((function(e){return e.key})),isRootMenu:!a.showParent&&!t}),d.default.createElement(p.default,{menuItems:l,onChange:this.handleMenuChange,routingStackBack:a.showParent,selectedMenuKey:_,selectedChildKey:o,"data-routing-menu":!0})}}],[{key:"buildSideMenuItems",value:function(e){return e.map((function(e){return{key:e.path,text:e.text,hasSubMenu:!!e.hasSubMenu,metaData:{path:e.path,externalLink:e.externalLink,hasSubMenu:!!e.hasSubMenu}}}))}},{key:"getDerivedStateFromProps",value:function(e,t){return e.location.pathname!==t.prevPropsLocationPathName||e.menuItems!==t.prevPropsMenuItems?{prevPropsLocationPathName:e.location.pathname,prevPropsMenuItems:e.menuItems,selectedChildKey:n.getSelectedChildKey(e.location.pathname,e.menuItems)}:null}},{key:"getSelectedChildKey",value:function(e,t){for(var n=0,a=t.length;n<a;n+=1){var i=t[n];if(i.path&&(0,f.matchPath)(e,{path:i.path}))return i.path}}}]),n}(d.default.Component);v.propTypes=h;var C=(0,f.withRouter)(v);t.default=C},1169:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(47)),o=a(n(0)),l=a(n(3)),u=a(n(1130)),r=a(n(1158)),s=a(n(1116)),d=["layoutConfig","routingStackDelegate","applicationMenuWrapperProps"],c={navigationItems:s.default.navigationItemsPropType,layoutConfig:s.default.layoutConfigPropType.isRequired,routingStackDelegate:u.default.propType.isRequired,applicationMenuWrapperProps:l.default.shape({contentComponentClass:l.default.func.isRequired,nameConfig:s.default.nameConfigPropType,utilityConfig:s.default.utilityConfigPropType,extensions:l.default.node}).isRequired},f=function(e){var t=e.layoutConfig,n=e.routingStackDelegate,a=e.applicationMenuWrapperProps,l=(0,i.default)(e,d),u=a.contentComponentClass;return o.default.createElement(r.default,{layoutConfig:t,routingStackDelegate:n,nameConfig:a.nameConfig,utilityConfig:a.utilityConfig,extensions:a.extensions,content:o.default.createElement(u,l)})};f.propTypes=c;var p=f;t.default=p},1170:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=n(1119),l=a(n(1171)),u={MENU:"menu",USER_INFORMATION:"user-information",CHANGE_PHOTO:"change-photo",SETTINGS:"settings",APPEARANCE:"appearance",SECURITY:"security",HELP:"help",GETTING_STARTED:"getting-started",ABOUT:"about",TERMS_OF_USE:"terms-of-use",LOG_OUT:"log-out"},r=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.menu"})},s=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.userInformation"})},d=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.changePhoto"})},c=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.settings"})},f=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.appearance"})},p=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.security"})},m=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.help"})},y=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.gettingStarted"})},g=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.about"})},h=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.termsOfUse"})},_=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.logOut"})},v={getDefaultUtilityItems:function(e,t,n){var a=i.default.createElement(l.default,{userName:t.name,userDetail:t.detail,userPhoto:t.photo});return function(e,t){return t?(t.forEach((function(t){if(t.parentKey){var n=e.filter((function(e){return e.key===t.parentKey}));if(!n.length)return;var a=n[0];a.childKeys?a.childKeys.indexOf(t.key)<0&&a.childKeys.push(t.key):a.childKeys=[t.key]}})),e.concat(t)):e}([{key:u.MENU,title:r(e),childKeys:[u.USER_INFORMATION,u.SETTINGS,u.HELP,u.LOG_OUT]},{key:u.USER_INFORMATION,title:s(e),content:a,childKeys:[u.CHANGE_PHOTO]},{key:u.SETTINGS,title:c(e),childKeys:[u.APPEARANCE,u.SECURITY]},{key:u.LOG_OUT,contentLocation:o.UtilityUtils.LOCATIONS.FOOTER,title:_(e)},{key:u.HELP,title:m(e),childKeys:[u.GETTING_STARTED,u.ABOUT,u.TERMS_OF_USE]},{key:u.CHANGE_PHOTO,title:d(e)},{key:u.APPEARANCE,title:f(e)},{key:u.SECURITY,title:p(e)},{key:u.GETTING_STARTED,title:y(e)},{key:u.ABOUT,title:g(e)},{key:u.TERMS_OF_USE,title:h(e)}],n)},defaultKeys:u,locations:o.UtilityUtils.LOCATIONS};t.default=v},1171:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(23)),o=a(n(47)),l=a(n(0)),u=a(n(3)),r=a(n(21)),s=a(n(7)),d=a(n(12)),c=a(n(1172)),f=["userDetail","userName","userPhoto"],p=s.default.bind(c.default),m={userDetail:u.default.string,userName:u.default.string,userPhoto:u.default.element},y=function(e){var t,n=e.userDetail,a=e.userName,u=e.userPhoto,s=(0,o.default)(e,f),c=l.default.useContext(d.default),m=(0,r.default)(p("user-data",c.className),s.className);return(a||n)&&(t=l.default.createElement("div",{className:p("user-info")},!!a&&l.default.createElement("div",{className:p("name")},a),!!n&&l.default.createElement("div",{className:p("detail")},n))),l.default.createElement("div",(0,i.default)({},s,{className:m}),!!u&&l.default.cloneElement(u,{className:p("photo")}),t)};y.propTypes=m;var g=y;t.default=g},1172:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"UserData-module__clinical-lowlight-theme___2BPYy","orion-fusion-theme":"UserData-module__orion-fusion-theme___1bTxW","user-data":"UserData-module__user-data___1hWc8",photo:"UserData-module__photo___l-s06","user-info":"UserData-module__user-info___2zJwY",name:"UserData-module__name___2N1Br",detail:"UserData-module__detail___1mkEz"}},1186:function(e,t,n){"use strict";n.r(t),t.default={"app-router":"ApplicationLayoutCommon-test-module__app-router___15Nyt"}},1868:function(e,t,n){"use strict";var a=n(4),i=n(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(33)),l=a(n(39)),u=a(n(41)),r=a(n(42)),s=a(n(43)),d=a(n(0)),c=a(n(3)),f=n(155),p=n(19),m=a(n(504)),y=a(n(256)),g=a(n(82)),h=a(n(78)),_=a(n(7)),v=a(n(1186)),C=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(1157));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var i=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,r.default)(this,n)}}var M=_.default.bind(v.default),N=function(e){var t=e.contentName;return d.default.createElement("div",null,"Page Content:"," ",t)};N.propTypes={contentName:c.default.string};var E=function(){return d.default.createElement(h.default,{text:"Extensions"})},O={menu:{"/page_1":{path:"/page_1",component:{default:{componentClass:C.RoutingMenu,props:{title:"Page 1 Menu",menuItems:[{text:"Item 1",path:"/page_1/item_1",hasSubMenu:!0},{text:"Item 2",path:"/page_1/item_2"}]}}}},"/page_1/item_1":{path:"/page_1/item_1",component:{default:{componentClass:C.RoutingMenu,props:{title:"Page 1 Item 1 Menu",menuItems:[{text:"Thing 1",path:"/page_1/item_1/thing_1"},{text:"Thing 2",path:"/page_1/item_1/thing_2"}]}}}}},content:{"/page_1":{path:"/page_1",component:{default:{componentClass:N,props:{contentName:"Page 1"}}}},"/page_2":{path:"/page_2",component:{default:{componentClass:N,props:{contentName:"Page 2"}}}},"/page_3":{path:"/page_3",component:{default:{componentClass:N,props:{contentName:"Page 3"}}}},"/page_4":{path:"/page_4",component:{default:{componentClass:N,props:{contentName:"Page 4"}}}},"/page_5":{path:"/page_5",component:{default:{componentClass:N,props:{contentName:"Page 5"}}}},"/page_6":{path:"/page_6",component:{default:{componentClass:N,props:{contentName:"Page 6"}}}},"/page_7":{path:"/page_7",component:{default:{componentClass:N,props:{contentName:"Page 7"}}}}}},T=[{path:"/page_1",text:"Page 1"},{path:"/page_2",text:"Page 2"},{path:"/page_3",text:"Page 3"},{path:"/page_4",text:"Page 4"},{path:"/page_5",text:"Page 5"},{path:"/page_6",text:"Page 6"},{path:"/page_7",text:"Page 7"}],k=d.default.createElement(y.default,{alt:"User, Test",initials:"TU",key:"user_avatar"}),x={name:"User, Test",detail:"User Detail",photo:k},R=Object.freeze({title:"Test Application",accessory:d.default.createElement(m.default,{variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",alt:"App logo",height:"26px",width:"26px"})}),A=function(e){(0,u.default)(n,e);var t=P(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).state={checkboxItemEnabled:!1},a}return(0,l.default)(n,[{key:"render",value:function(){var e=this.props.intl,t=this.state.checkboxItemEnabled,n=[{key:"additional-1",title:"Drill-in Item",childKeys:["additional-sub-1","additional-sub-2"],parentKey:C.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-sub-1",title:"Additional Item 1 - Sub 1",parentKey:"additional-1"},{key:"additional-sub-2",title:"Additional Item 1 - Sub 2",parentKey:"additional-1"},{key:"checkbox-item",title:"Custom Checkbox Item",isSelectable:!0,isSelected:t,parentKey:C.Utils.utilityHelpers.defaultKeys.MENU},{key:"read-only-item",title:"Custom Read-Only Item",id:"readonly",isReadOnly:!0,parentKey:C.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-3",contentLocation:C.Utils.utilityHelpers.locations.FOOTER,title:"Custom Footer",parentKey:C.Utils.utilityHelpers.defaultKeys.MENU}],a=Object.freeze({title:"Test, User",accessory:k,menuItems:C.Utils.utilityHelpers.getDefaultUtilityItems(e,x,n),initialSelectedKey:C.Utils.utilityHelpers.defaultKeys.MENU,onChange:function(){}});return d.default.createElement(g.default,{fill:!0,id:"application-layout-test"},d.default.createElement(C.default,{nameConfig:R,utilityConfig:a,routingConfig:O,navigationItems:T,extensions:d.default.createElement(E,null),indexPath:"/page_1"}))}}]),n}(d.default.Component);A.propTypes={intl:c.default.shape({})};var S=(0,f.withRouter)((0,p.injectIntl)(A)),U=function(){return d.default.createElement("div",{className:M("app-router")},d.default.createElement(f.MemoryRouter,null,d.default.createElement(S,null)))};t.default=U}}]);