(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1116:function(e,t,a){"use strict";var i=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(3)),l=a(1119),o=n.default.shape({size:n.default.string,toggleMenu:n.default.func,menuIsOpen:n.default.bool,togglePin:n.default.bool,menuIsPinned:n.default.bool}),u=n.default.shape({accessory:n.default.element,title:n.default.string}),r=n.default.oneOf(["start","center","end"]),s=n.default.arrayOf(n.default.shape({path:n.default.string.isRequired,text:n.default.string.isRequired,hasSubMenu:n.default.bool,icon:n.default.node})),d={utilityConfigPropType:n.default.shape({title:n.default.string,accessory:n.default.element,onChange:n.default.func.isRequired,menuItems:n.default.arrayOf(l.UtilityUtils.itemShape).isRequired,initialSelectedKey:n.default.string.isRequired}),utilityMenuItemPropType:l.UtilityUtils.itemShape,layoutConfigPropType:o,nameConfigPropType:u,navigationAlignmentPropType:r,navigationItemsPropType:s};t.default=d},1126:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={isSizeCompact:function(e){return"tiny"===e||"small"===e}};t.default=i},1131:function(e,t,a){"use strict";var i=a(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationHeaderName",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ApplicationMenuName",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=i(a(1138)),l=i(a(1140)),o={ApplicationHeaderName:n.default,ApplicationMenuName:l.default};t.default=o},1136:function(e,t,a){"use strict";var i=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(23)),l=i(a(47)),o=i(a(0)),u=i(a(3)),r=i(a(21)),s=i(a(7)),d=i(a(12)),c=a(19),f=i(a(1137)),p=["extensions","logo","navigation","intl","toggle","utilities"],m=s.default.bind(f.default),_={extensions:u.default.element,logo:u.default.element,intl:u.default.shape({formatMessage:u.default.func}).isRequired,navigation:u.default.element,toggle:u.default.element,utilities:u.default.element},y=function(e){var t,a,i,u,s,c=e.extensions,f=e.logo,_=e.navigation,y=e.intl,g=e.toggle,h=e.utilities,v=(0,l.default)(e,p),b=o.default.useContext(d.default),N=(0,r.default)(m("header","fill",b.className),v.className);f&&(t=o.default.createElement("div",{className:m("fit","start","logo")},f)),_&&(a=o.default.createElement("nav",{role:"navigation",className:m("fill")},_)),c&&(i=o.default.createElement("div",{className:m("fit","end","extensions")},c)),h&&(u=o.default.createElement("div",{className:m("fit","end","utilities")},h)),g&&(s=o.default.createElement("div",{className:m("fit")},g));var C,A=o.default.createElement("div",{className:m("fill","header-inner")},a,i),P=o.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:m("skip-content")},y.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(A||t||u)&&(C=o.default.createElement("div",{className:m("fill","header-body")},P,t,A,u)),o.default.createElement("div",(0,n.default)({},v,{className:N}),s,C)};y.propTypes=_;var g=(0,c.injectIntl)(y);t.default=g},1137:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderLayout-module__clinical-lowlight-theme___2bNAu","orion-fusion-theme":"ApplicationHeaderLayout-module__orion-fusion-theme___1_WJx",fit:"ApplicationHeaderLayout-module__fit___156Sk",fill:"ApplicationHeaderLayout-module__fill___xK-CU",start:"ApplicationHeaderLayout-module__start___3pTQW",end:"ApplicationHeaderLayout-module__end___3gbC_","header-inner":"ApplicationHeaderLayout-module__header-inner___2ay7A",logo:"ApplicationHeaderLayout-module__logo___3U4kT",utilities:"ApplicationHeaderLayout-module__utilities___1Wf5t",extensions:"ApplicationHeaderLayout-module__extensions___1xUww","header-body":"ApplicationHeaderLayout-module__header-body___4JmFD","skip-content":"ApplicationHeaderLayout-module__skip-content___1JtRT"}},1138:function(e,t,a){"use strict";var i=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(23)),l=i(a(47)),o=i(a(0)),u=i(a(3)),r=i(a(21)),s=i(a(7)),d=i(a(12)),c=i(a(1139)),f=["accessory","title"],p=s.default.bind(c.default),m={accessory:u.default.element,title:u.default.node},_=function(e){var t=e.accessory,a=e.title,i=(0,l.default)(e,f),u=o.default.useContext(d.default),s=(0,r.default)(p("application-header-name",u.className),i.className);return o.default.createElement("div",(0,n.default)({},i,{className:s}),t&&o.default.createElement("div",{className:p("accessory")},t),a&&o.default.createElement("div",{className:p("title")},a))};_.propTypes=m;var y=_;t.default=y},1139:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderName-module__clinical-lowlight-theme___3tLNe","orion-fusion-theme":"ApplicationHeaderName-module__orion-fusion-theme___1EtY2","application-header-name":"ApplicationHeaderName-module__application-header-name___33L4P",accessory:"ApplicationHeaderName-module__accessory___1p9Mm",title:"ApplicationHeaderName-module__title___2_R_G"}},1140:function(e,t,a){"use strict";var i=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(23)),l=i(a(47)),o=i(a(0)),u=i(a(3)),r=i(a(21)),s=i(a(7)),d=i(a(12)),c=i(a(1141)),f=["accessory","title"],p=s.default.bind(c.default),m={accessory:u.default.element,title:u.default.node},_=function(e){var t=e.accessory,a=e.title,i=(0,l.default)(e,f),u=o.default.useContext(d.default),s=(0,r.default)(p("application-menu-name",u.className),i.className);return o.default.createElement("div",(0,n.default)({},i,{className:s}),t&&o.default.createElement("div",{className:p("accessory")},t),a&&o.default.createElement("div",{className:p("title")},a))};_.propTypes=m;var y=_;t.default=y},1141:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ApplicationMenuName-module__clinical-lowlight-theme___1H0q_","orion-fusion-theme":"ApplicationMenuName-module__orion-fusion-theme___2O07l","application-menu-name":"ApplicationMenuName-module__application-menu-name___28pkP",accessory:"ApplicationMenuName-module__accessory___Ib4my",title:"ApplicationMenuName-module__title___3tOTH"}},1150:function(e,t,a){"use strict";var i=a(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationTabs",{enumerable:!0,get:function(){return l.default}}),t.ApplicationLinksPropType=t.default=void 0;var n=i(a(3)),l=i(a(1161)),o=n.default.shape({alignment:n.default.oneOf(["start","center","end"]),links:n.default.arrayOf(n.default.shape({id:n.default.string,path:n.default.string.isRequired,text:n.default.string.isRequired,icon:n.default.node}))});t.ApplicationLinksPropType=o;var u={ApplicationTabs:l.default,ApplicationLinksPropType:o};t.default=u},1151:function(e,t,a){"use strict";var i=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(23)),l=i(a(47)),o=i(a(33)),u=i(a(39)),r=i(a(49)),s=i(a(41)),d=i(a(42)),c=i(a(43)),f=i(a(0)),p=i(a(3)),m=i(a(21)),_=i(a(7)),y=i(a(12)),g=a(19),h=a(498),v=i(a(1136)),b=a(1119),N=a(1131),C=a(1150),A=i(a(607)),P=i(a(228)),T=a(1132),k=i(a(1116)),R=i(a(1126)),H=i(a(1162)),L=["disclosureManager","applicationLinks","extensions","layoutConfig","nameConfig","utilityConfig","navigationLayoutRoutes","navigationLayoutSize","intl","hasIcons"];function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return(0,d.default)(this,a)}}var M=_.default.bind(H.default),U={applicationLinks:C.ApplicationLinksPropType,extensions:p.default.element,layoutConfig:k.default.layoutConfigPropType,navigationLayoutRoutes:p.default.arrayOf(T.processedRoutesPropType),navigationLayoutSize:p.default.string,nameConfig:k.default.nameConfigPropType,utilityConfig:k.default.utilityConfigPropType,intl:p.default.shape({formatMessage:p.default.func}),disclosureManager:h.disclosureManagerShape,hasIcons:p.default.bool},x=function(e){(0,s.default)(a,e);var t=E(a);function a(e){var i;return(0,o.default)(this,a),(i=t.call(this,e)).handleUtilityDiscloseRequest=i.handleUtilityDiscloseRequest.bind((0,r.default)(i)),i.handleUtilityPopupCloseRequest=i.handleUtilityPopupCloseRequest.bind((0,r.default)(i)),i.handleUtilityOnChange=i.handleUtilityOnChange.bind((0,r.default)(i)),i.getTargetRef=i.getTargetRef.bind((0,r.default)(i)),i.setContentNode=i.setContentNode.bind((0,r.default)(i)),i.renderToggle=i.renderToggle.bind((0,r.default)(i)),i.renderAppName=i.renderAppName.bind((0,r.default)(i)),i.renderExtensions=i.renderExtensions.bind((0,r.default)(i)),i.renderNavigation=i.renderNavigation.bind((0,r.default)(i)),i.renderUtilities=i.renderUtilities.bind((0,r.default)(i)),i.renderUtilitiesPopup=i.renderUtilitiesPopup.bind((0,r.default)(i)),i.state={utilityComponent:void 0},i}return(0,u.default)(a,[{key:"handleUtilityDiscloseRequest",value:function(e){this.setState({utilityComponent:f.default.cloneElement(e,{onRequestClose:this.handleUtilityPopupCloseRequest})})}},{key:"handleUtilityPopupCloseRequest",value:function(){this.state.utilityComponent&&this.setState({utilityComponent:void 0})}},{key:"handleUtilityOnChange",value:function(e,t){var a=this.props,i=a.utilityConfig,n=a.disclosureManager;i.onChange(e,t,n&&n.disclose)}},{key:"setContentNode",value:function(e){this.contentNode=e}},{key:"getTargetRef",value:function(){if(this.contentNode)return this.contentNode.querySelector("[data-application-header-utility]")}},{key:"renderToggle",value:function(){var e=this.props,t=e.layoutConfig,a=e.intl;return t.toggleMenu?f.default.createElement("div",{className:M("navbar-toggle")},f.default.createElement("button",{type:"button",className:M("toggle-button"),"aria-label":a.formatMessage({id:"Terra.applicationLayout.applicationHeader.menuToggleLabel"}),onClick:t.toggleMenu,"data-application-header-toggle":!0},f.default.createElement(A.default,null))):null}},{key:"renderAppName",value:function(){var e=this.props.nameConfig;return e&&(e.accessory||e.title)?f.default.createElement(N.ApplicationHeaderName,{accessory:e.accessory,title:e.title}):null}},{key:"renderNavigation",value:function(e){var t=this.props.applicationLinks;return e?this.renderAppName():t.links&&t.links.length?f.default.createElement(C.ApplicationTabs,t):null}},{key:"renderExtensions",value:function(e){var t=this.props,a=t.layoutConfig,i=t.extensions;return!e&&i?f.default.cloneElement(i,{layoutConfig:a}):null}},{key:"renderUtilities",value:function(e){var t=this.props.utilityConfig;return!e&&t?f.default.createElement(b.ApplicationHeaderUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-header-utility":!0}):null}},{key:"renderUtilitiesPopup",value:function(){var e=this.state.utilityComponent;return e?f.default.createElement(P.default,{attachmentBehavior:"push",contentAttachment:"top center",contentHeight:"auto",contentWidth:"240",isArrowDisplayed:!0,isHeaderDisabled:!0,isOpen:!0,onRequestClose:this.handleUtilityPopupCloseRequest,targetRef:this.getTargetRef},e):null}},{key:"render",value:function(){var e=this.props,t=(e.disclosureManager,e.applicationLinks,e.extensions,e.layoutConfig),a=(e.nameConfig,e.utilityConfig,e.navigationLayoutRoutes,e.navigationLayoutSize,e.intl,e.hasIcons),i=(0,l.default)(e,L),o=this.context,u=(0,m.default)(M("application-navbar",{"application-navbar-with-icons":a},o.className),i.className),r=R.default.isSizeCompact(t.size);return f.default.createElement("header",(0,n.default)({role:"banner"},i,{className:u,ref:this.setContentNode}),f.default.createElement(v.default,{toggle:this.renderToggle(),logo:r?null:this.renderAppName(),navigation:this.renderNavigation(r),extensions:this.renderExtensions(r),utilities:this.renderUtilities(r)}),this.renderUtilitiesPopup())}}]),a}(f.default.Component);x.propTypes=U,x.defaultProps={applicationLinks:{},hasIcons:!1},x.contextType=y.default;var O=(0,g.injectIntl)((0,h.withDisclosureManager)(x));t.default=O},1162:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeader-module__clinical-lowlight-theme___SId3C","orion-fusion-theme":"ApplicationHeader-module__orion-fusion-theme___2iS99","application-navbar":"ApplicationHeader-module__application-navbar___3SEh7","application-navbar-with-icons":"ApplicationHeader-module__application-navbar-with-icons___1L4GK","navbar-toggle":"ApplicationHeader-module__navbar-toggle___3_Omk","toggle-button":"ApplicationHeader-module__toggle-button___16_CB"}}}]);