(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1131:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationHeaderName",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ApplicationMenuName",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var o=n(a(1138)),r=n(a(1140)),l={ApplicationHeaderName:o.default,ApplicationMenuName:r.default};t.default=l},1136:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(23)),r=n(a(47)),l=n(a(0)),i=n(a(3)),d=n(a(21)),m=n(a(7)),c=n(a(12)),s=a(19),u=n(a(1137)),p=["extensions","logo","navigation","intl","toggle","utilities"],f=m.default.bind(u.default),_={extensions:i.default.element,logo:i.default.element,intl:i.default.shape({formatMessage:i.default.func}).isRequired,navigation:i.default.element,toggle:i.default.element,utilities:i.default.element},x=function(e){var t,a,n,i,m,s=e.extensions,u=e.logo,_=e.navigation,x=e.intl,b=e.toggle,h=e.utilities,y=(0,r.default)(e,p),N=l.default.useContext(c.default),v=(0,d.default)(f("header","fill",N.className),y.className);u&&(t=l.default.createElement("div",{className:f("fit","start","logo")},u)),_&&(a=l.default.createElement("nav",{role:"navigation",className:f("fill")},_)),s&&(n=l.default.createElement("div",{className:f("fit","end","extensions")},s)),h&&(i=l.default.createElement("div",{className:f("fit","end","utilities")},h)),b&&(m=l.default.createElement("div",{className:f("fit")},b));var g,w=l.default.createElement("div",{className:f("fill","header-inner")},a,n),j=l.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:f("skip-content")},x.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(w||t||i)&&(g=l.default.createElement("div",{className:f("fill","header-body")},j,t,w,i)),l.default.createElement("div",(0,o.default)({},y,{className:v}),m,g)};x.propTypes=_;var b=(0,s.injectIntl)(x);t.default=b},1137:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderLayout-module__clinical-lowlight-theme___2bNAu","orion-fusion-theme":"ApplicationHeaderLayout-module__orion-fusion-theme___1_WJx",fit:"ApplicationHeaderLayout-module__fit___156Sk",fill:"ApplicationHeaderLayout-module__fill___xK-CU",start:"ApplicationHeaderLayout-module__start___3pTQW",end:"ApplicationHeaderLayout-module__end___3gbC_","header-inner":"ApplicationHeaderLayout-module__header-inner___2ay7A",logo:"ApplicationHeaderLayout-module__logo___3U4kT",utilities:"ApplicationHeaderLayout-module__utilities___1Wf5t",extensions:"ApplicationHeaderLayout-module__extensions___1xUww","header-body":"ApplicationHeaderLayout-module__header-body___4JmFD","skip-content":"ApplicationHeaderLayout-module__skip-content___1JtRT"}},1138:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(23)),r=n(a(47)),l=n(a(0)),i=n(a(3)),d=n(a(21)),m=n(a(7)),c=n(a(12)),s=n(a(1139)),u=["accessory","title"],p=m.default.bind(s.default),f={accessory:i.default.element,title:i.default.node},_=function(e){var t=e.accessory,a=e.title,n=(0,r.default)(e,u),i=l.default.useContext(c.default),m=(0,d.default)(p("application-header-name",i.className),n.className);return l.default.createElement("div",(0,o.default)({},n,{className:m}),t&&l.default.createElement("div",{className:p("accessory")},t),a&&l.default.createElement("div",{className:p("title")},a))};_.propTypes=f;var x=_;t.default=x},1139:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderName-module__clinical-lowlight-theme___3tLNe","orion-fusion-theme":"ApplicationHeaderName-module__orion-fusion-theme___1EtY2","application-header-name":"ApplicationHeaderName-module__application-header-name___33L4P",accessory:"ApplicationHeaderName-module__accessory___1p9Mm",title:"ApplicationHeaderName-module__title___2_R_G"}},1140:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(23)),r=n(a(47)),l=n(a(0)),i=n(a(3)),d=n(a(21)),m=n(a(7)),c=n(a(12)),s=n(a(1141)),u=["accessory","title"],p=m.default.bind(s.default),f={accessory:i.default.element,title:i.default.node},_=function(e){var t=e.accessory,a=e.title,n=(0,r.default)(e,u),i=l.default.useContext(c.default),m=(0,d.default)(p("application-menu-name",i.className),n.className);return l.default.createElement("div",(0,o.default)({},n,{className:m}),t&&l.default.createElement("div",{className:p("accessory")},t),a&&l.default.createElement("div",{className:p("title")},a))};_.propTypes=f;var x=_;t.default=x},1141:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ApplicationMenuName-module__clinical-lowlight-theme___1H0q_","orion-fusion-theme":"ApplicationMenuName-module__orion-fusion-theme___2O07l","application-menu-name":"ApplicationMenuName-module__application-menu-name___28pkP",accessory:"ApplicationMenuName-module__accessory___Ib4my",title:"ApplicationMenuName-module__title___3tOTH"}},1144:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(23)),r=n(a(47)),l=n(a(0)),i=n(a(3)),d=n(a(7)),m=n(a(1145)),c=["content","extensions","footer","header"],s=d.default.bind(m.default),u={content:i.default.element,extensions:i.default.element,footer:i.default.element,header:i.default.element},p=function(e){var t,a,n,i,d=e.content,m=e.extensions,u=e.footer,p=e.header,f=(0,r.default)(e,c),_=s(["menu","fill",f.className]);return p&&(t=l.default.createElement("div",{className:s(["fit","header"])},p)),d&&(a=l.default.createElement("div",{className:s(["fill","content"])},l.default.createElement("div",{className:s("normalizer")},d))),m&&(n=l.default.createElement("div",{className:s(["fit","widget"])},m)),u&&(i=l.default.createElement("div",{className:s(["fit","footer"])},u)),l.default.createElement("div",(0,o.default)({},f,{className:_}),t,l.default.createElement("div",{className:s(["fill","body"])},n,a),i)};p.propTypes=u;var f=p;t.default=f},1145:function(e,t,a){"use strict";a.r(t),t.default={fit:"ApplicationMenuLayout-module__fit___314MK",fill:"ApplicationMenuLayout-module__fill___3To-J",menu:"ApplicationMenuLayout-module__menu___3wquh",header:"ApplicationMenuLayout-module__header___1d0TV",footer:"ApplicationMenuLayout-module__footer___xY2BR",body:"ApplicationMenuLayout-module__body___2rr5O",widgets:"ApplicationMenuLayout-module__widgets___3CRr6",content:"ApplicationMenuLayout-module__content___1cJCs",normalizer:"ApplicationMenuLayout-module__normalizer___3gCHT"}},1207:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"demoStyles-module__clinical-lowlight-theme___YMaWE","orion-fusion-theme":"demoStyles-module__orion-fusion-theme___2Go94","demo-background-color":"demoStyles-module__demo-background-color___3yn3D","demo-truncate-width":"demoStyles-module__demo-truncate-width___3OCuY","demo-image-container":"demoStyles-module__demo-image-container___1xL_L","content-wrapper":"demoStyles-module__content-wrapper___38m03"}},1245:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),o=a.n(n),r=a(1095),l=a.n(r),i=function(e){var t=e.url;return o.a.createElement(l.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-name",name:"terra-application-name",version:"3.39.0",url:t})}},1504:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(7)),l=n(a(3)),i=n(a(1594)),d=r.default.bind(i.default),m={text:l.default.string,type:l.default.string},c=function(e){var t=e.text,a=e.type;return o.default.createElement("div",{className:d("wrapper1-".concat(a))},o.default.createElement("div",{className:d("wrapper2")},o.default.createElement("div",{className:d("wrapper3")},o.default.createElement("h3",null,t))))};c.propTypes=m,c.defaultProps={text:"PlaceHolder",type:""};var s=c;t.default=s},1593:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(1136)),l=n(a(504)),i=n(a(21)),d=n(a(12)),m=n(a(7)),c=n(a(1504)),s=a(1131),u=n(a(1207)),p=n(a(1595)),f=m.default.bind(u.default),_=m.default.bind(p.default),x=function(){var e=o.default.useContext(d.default),t=(0,i.default)(f("demo-background-color",e.className));return o.default.createElement(r.default,{className:_("demo-size"),logo:o.default.createElement(s.ApplicationHeaderName,{title:"App-Name",accessory:o.default.createElement(l.default,{alt:"Terra Logo",variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",className:f("demo-image-container"),isFluid:!0}),className:t}),extensions:o.default.createElement(c.default,{text:"Extensions",type:"header-extensions"}),navigation:o.default.createElement(c.default,{text:"Content",type:"default"}),utilities:o.default.createElement(c.default,{text:"Utiltities",type:"utiltities"})})};t.default=x},1594:function(e,t,a){"use strict";a.r(t),t.default={"wrapper1-default":"Placeholder-module__wrapper1-default___2sLvT","wrapper1-header-extensions":"Placeholder-module__wrapper1-header-extensions___3R1Gb","wrapper1-utiltities":"Placeholder-module__wrapper1-utiltities___1rV2Z","wrapper1-menu-extensions":"Placeholder-module__wrapper1-menu-extensions___13M10","wrapper1-footer":"Placeholder-module__wrapper1-footer___2TLTP",wrapper2:"Placeholder-module__wrapper2___2BCcf",wrapper3:"Placeholder-module__wrapper3___3CmMK"}},1595:function(e,t,a){"use strict";a.r(t),t.default={"demo-size":"ApplicationHeaderNameStandard-module__demo-size___136nM"}},1596:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(1144)),l=n(a(504)),i=n(a(21)),d=n(a(12)),m=n(a(7)),c=n(a(1504)),s=a(1131),u=n(a(1207)),p=n(a(1597)),f=m.default.bind(u.default),_=m.default.bind(p.default),x=function(){var e=o.default.useContext(d.default),t=(0,i.default)(f("demo-background-color",e.className));return o.default.createElement(r.default,{className:_("demo-size"),header:o.default.createElement(s.ApplicationMenuName,{title:"App-Name",accessory:o.default.createElement(l.default,{alt:"Terra Logo",variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",className:f("demo-image-container"),isFluid:!0}),className:t}),extensions:o.default.createElement(c.default,{text:"Extensions",type:"menu-extensions"}),content:o.default.createElement(c.default,{text:"Content",type:"default"}),footer:o.default.createElement(c.default,{text:"Footer",type:"footer"})})};t.default=x},1597:function(e,t,a){"use strict";a.r(t),t.default={"demo-size":"ApplicationMenuNameStandard-module__demo-size___vAkEA"}},2202:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return X}));var n=a(23),o=a.n(n),r=a(47),l=a.n(r),i=a(0),d=a.n(i),m=a(599),c=a(1245),s=a(1106),u=a.n(s),p=["components"],f=["components"],_=["components"],x=["components"],b=function(){return Object(m.mdx)(u.a,{rows:[{name:"accessory",type:function(){var e={};function t(t){var a=t.components,n=l()(t,p);return Object(m.mdx)("wrapper",o()({},e,n,{components:a,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var a=t.components,n=l()(t,f);return Object(m.mdx)("wrapper",o()({},e,n,{components:a,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"The accessory element to be displayed next to the title."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var a=t.components,n=l()(t,_);return Object(m.mdx)("wrapper",o()({},e,n,{components:a,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var a=t.components,n=l()(t,x);return Object(m.mdx)("wrapper",o()({},e,n,{components:a,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"The title branding of the application name."))}return t.isMDXComponent=!0,t({})}}]})},h=a(1593),y=a.n(h),N=["components"],v={};function g(e){var t=e.components,a=l()(e,N);return Object(m.mdx)("wrapper",o()({},v,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ApplicationHeaderLayout from 'terra-application-header-layout';\nimport Image from 'terra-image';\nimport classNames from 'classnames';\nimport ThemeContext from 'terra-theme-context';\nimport classNamesBind from 'classnames/bind';\nimport Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';\nimport { ApplicationHeaderName } from 'terra-application-name';\nimport demoColors from '../../test/application-name/demoStyles.module.scss';\nimport styles from './ApplicationHeaderNameStandard.module.scss';\n\nconst cx = classNamesBind.bind(demoColors);\nconst cy = classNamesBind.bind(styles);\nconst ApplicationHeaderNameStandard = () => {\n  const theme = React.useContext(ThemeContext);\n  const demoClassName = classNames(cx(\n    'demo-background-color',\n    theme.className,\n  ));\n  return (\n    <ApplicationHeaderLayout\n      className={cy('demo-size')}\n      logo={(\n        <ApplicationHeaderName\n          title=\"App-Name\"\n          accessory={<Image alt=\"Terra Logo\" variant=\"rounded\" src=\"https://github.com/cerner/terra-framework/raw/main/terra.png\" className={cx('demo-image-container')} isFluid />}\n          className={demoClassName}\n        />\n      )}\n      extensions={<Placeholder text=\"Extensions\" type=\"header-extensions\" />}\n      navigation={<Placeholder text=\"Content\" type=\"default\" />}\n      utilities={<Placeholder text=\"Utiltities\" type=\"utiltities\" />}\n    />\n  );\n};\n\nexport default ApplicationHeaderNameStandard;\n\n")))}g.isMDXComponent=!0;var w=a(1097),j=a.n(w),O=["components"],A={};function M(e){var t=e.components,a=l()(e,O);return Object(m.mdx)("wrapper",o()({},A,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '../../../clinical-lowlight-theme/demoStyles.module';\n@import '../../../orion-fusion-theme/demoStyles.module';\n\n:local {\n  .demo-background-color {\n    background-color: var(--terra-application-name-demo-background-color, #008000);\n  }\n\n  .demo-truncate-width {\n    width: 150px;\n  }\n\n  .demo-image-container {\n    height: 26px;\n    width: 26px;\n  }\n\n  .content-wrapper {\n    width: 100%;\n  }\n}\n\n")))}M.isMDXComponent=!0;var E=function(e){var t=e.title,a=e.description,n=e.isExpanded;return d.a.createElement(j.a,{title:t||"Application Header Name Standard",description:a,example:d.a.createElement(y.a,null),exampleCssSrc:d.a.createElement(M,null),exampleSrc:d.a.createElement(g,null),isExpanded:n})},C=a(1596),T=a.n(C),L=["components"],H={};function P(e){var t=e.components,a=l()(e,L);return Object(m.mdx)("wrapper",o()({},H,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Menu from 'terra-application-menu-layout';\nimport Image from 'terra-image';\nimport classNames from 'classnames';\nimport ThemeContext from 'terra-theme-context';\nimport classNamesBind from 'classnames/bind';\nimport Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';\nimport { ApplicationMenuName } from 'terra-application-name';\nimport demoColors from '../../test/application-name/demoStyles.module.scss';\nimport styles from './ApplicationMenuNameStandard.module.scss';\n\nconst cx = classNamesBind.bind(demoColors);\nconst cy = classNamesBind.bind(styles);\nconst ApplicationMenuNameStandard = () => {\n  const theme = React.useContext(ThemeContext);\n  const demoClassName = classNames(cx(\n    'demo-background-color',\n    theme.className,\n  ));\n\n  return (\n    <Menu\n      className={cy('demo-size')}\n      header={(\n        <ApplicationMenuName\n          title=\"App-Name\"\n          accessory={<Image alt=\"Terra Logo\" variant=\"rounded\" src=\"https://github.com/cerner/terra-framework/raw/main/terra.png\" className={cx('demo-image-container')} isFluid />}\n          className={demoClassName}\n        />\n      )}\n      extensions={<Placeholder text=\"Extensions\" type=\"menu-extensions\" />}\n      content={<Placeholder text=\"Content\" type=\"default\" />}\n      footer={<Placeholder text=\"Footer\" type=\"footer\" />}\n    />\n  );\n};\n\nexport default ApplicationMenuNameStandard;\n\n")))}P.isMDXComponent=!0;var S=function(e){var t=e.title,a=e.description,n=e.isExpanded;return d.a.createElement(j.a,{title:t||"Application Menu Name Standard",description:a,example:d.a.createElement(T.a,null),exampleCssSrc:d.a.createElement(M,null),exampleSrc:d.a.createElement(P,null),isExpanded:n})},k=["components"],D={};function X(e){var t=e.components,a=l()(e,k);return Object(m.mdx)("wrapper",o()({},D,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)(c.a,{mdxType:"Badge"}),Object(m.mdx)("h1",{id:"terra-application-name"},"Terra Application Name"),Object(m.mdx)("p",null,"Houses the title of the application, along with a logo. There are two versions - a header version and menu version. These should be used with the corresponding header and menu layouts."),Object(m.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Install with ",Object(m.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-name"))))),Object(m.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(m.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(m.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"react"),Object(m.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(m.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(m.mdx)("h2",{id:"component-features"},"Component Features"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),Object(m.mdx)("h2",{id:"examples"},"Examples"),Object(m.mdx)(E,{title:"Application Header Name",mdxType:"ApplicationHeaderNameStandard"}),Object(m.mdx)(S,{title:"Application Menu Name",mdxType:"ApplicationMenuNameStandard"}),Object(m.mdx)("h2",{id:"application-name-props-table"},"Application name props table"),Object(m.mdx)(b,{mdxType:"ApplicationNamePropsTable"}))}X.isMDXComponent=!0}}]);