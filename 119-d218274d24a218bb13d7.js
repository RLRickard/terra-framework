(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1095:function(e,t,n){"use strict";var i=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),c=i(n(3)),u=i(n(7)),l=i(n(1096)),r=u.default.bind(l.default),o={name:c.default.string.isRequired,src:c.default.string,url:c.default.string,version:c.default.string.isRequired},s=function(e){var t=e.src,n=e.name,i=e.url,c=e.version,u=a.default.createElement("a",{className:r("badge"),href:i||"https://www.npmjs.org/package/".concat(n,"/v/").concat(c)},a.default.createElement("span",{className:r("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:r("badge-version")},"v".concat(c))),l=t?a.default.createElement("a",{className:r("badge"),href:t},a.default.createElement("span",{className:r("badge-name")},"github"),a.default.createElement("span",{className:r("badge-version")},"source")):void 0;return a.default.createElement("div",{className:r("badge-container")},u,l)};s.propTypes=o;var d=s;t.default=d},1096:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},1177:function(e,t,n){"use strict";n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___1F6cs","item-content":"InfiniteListDocExampleCommon-module__item-content___1EwQg","main-content":"InfiniteListDocExampleCommon-module__main-content___3YhfB"}},1202:function(e,t,n){"use strict";var i=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),c=i(n(7)),u=i(n(1177)),l=c.default.bind(u.default),r=function(e){var t=e.children;return a.default.createElement("div",{className:l("main-content")},t)};t.default=r},1216:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(0),a=n.n(i),c=n(1095),u=n.n(c),l=function(e){var t=e.url;return a.a.createElement(u.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-infinite-list",name:"terra-infinite-list",version:"3.39.0",url:t})}},1704:function(e,t,n){"use strict";var i=n(4),a=n(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(n(0)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var i={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=c?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(i,u,l):i[u]=e[u]}i.default=e,n&&n.set(e,i);return i}(n(605)),l=n(1133),r=i(n(7)),o=i(n(1705)),s=i(n(1202)),d=i(n(1177));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var p=r.default.bind(d.default),f=function(e){var t=[c.default.createElement(u.SubsectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push((n=e,c.default.createElement(u.Item,{key:n.key},c.default.createElement(l.Placeholder,{title:n.title,className:p("placeholder")}))));var n})),t},y=function(e){return e.map((function(e){return function(e){var t=[c.default.createElement(u.SectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push(f(e))})),t}(e)}))},b=function(){return c.default.createElement(s.default,null,c.default.createElement(u.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Subsection"},y(o.default)))};t.default=b},1705:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-0-0-0"},{title:"Item 0-0-1",key:"unique-0-0-1"},{title:"Item 0-0-2",key:"unique-0-0-2"},{title:"Item 0-0-3",key:"unique-0-0-3"},{title:"Item 0-0-4",key:"unique-0-0-4"},{title:"Item 0-0-5",key:"unique-0-0-5"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-0-1-0"},{title:"Item 0-1-1",key:"unique-0-1-1"},{title:"Item 0-1-2",key:"unique-0-1-2"},{title:"Item 0-1-3",key:"unique-0-1-3"},{title:"Item 0-1-4",key:"unique-0-1-4"},{title:"Item 0-1-5",key:"unique-0-1-5"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-1-0-0"},{title:"Item 1-0-1",key:"unique-1-0-1"},{title:"Item 1-0-2",key:"unique-1-0-2"},{title:"Item 1-0-3",key:"unique-1-0-3"},{title:"Item 1-0-4",key:"unique-1-0-4"},{title:"Item 1-0-5",key:"unique-1-0-5"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-1-1-0"},{title:"Item 1-1-1",key:"unique-1-1-1"},{title:"Item 1-1-2",key:"unique-1-1-2"},{title:"Item 1-1-3",key:"unique-1-1-3"},{title:"Item 1-1-4",key:"unique-1-1-4"},{title:"Item 1-1-5",key:"unique-1-1-5"}]}]},{title:"Section 2",key:"unique-key-2",childItems:[{title:"Subsection 2-0",key:"unique-key-2-0",childItems:[{title:"Item 2-0-0",key:"unique-2-0-0"},{title:"Item 2-0-1",key:"unique-2-0-1"},{title:"Item 2-0-2",key:"unique-2-0-2"},{title:"Item 2-0-3",key:"unique-2-0-3"},{title:"Item 2-0-4",key:"unique-2-0-4"},{title:"Item 2-0-5",key:"unique-2-0-5"}]},{title:"Subsection 2-1",key:"unique-key-2-1",childItems:[{title:"Item 2-1-0",key:"unique-2-1-0"},{title:"Item 2-1-1",key:"unique-2-1-1"},{title:"Item 2-1-2",key:"unique-2-1-2"},{title:"Item 2-1-3",key:"unique-2-1-3"},{title:"Item 2-1-4",key:"unique-2-1-4"},{title:"Item 2-1-5",key:"unique-2-1-5"}]}]}];t.default=i},1845:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var i=n(23),a=n.n(i),c=n(47),u=n.n(c),l=(n(0),n(599)),r=n(1216),o=n(1704),s=n.n(o),d=["components"],m={};function p(e){var t=e.components,n=u()(e,d);return Object(l.mdx)("wrapper",a()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(r.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-infinitelist---subsections"},"Terra InfiniteList - Subsections"),Object(l.mdx)("p",null,"To achieve sections within the InfiniteList the only supported implementation is directly consuming the static variant of the ",Object(l.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"SubsectionHeader")," component. Expand/collapse functionality is not supported within the infinite list. "),Object(l.mdx)("h2",{id:"map-section-structure"},"Map Section Structure"),Object(l.mdx)("p",null,"So in our first step a ",Object(l.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in the following steps."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    return section;\n  };\n")),Object(l.mdx)("p",null,"Next we'll create an array with the first item being our section header, and then loop through the associated child sub sections for the section appending them to the initial array."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    sectionData.childItems.forEach(childItem => section.push(createSection(childItem)));\n    return section;\n  };\n")),Object(l.mdx)("h2",{id:"map-subsection-structure"},"Map Subsection Structure"),Object(l.mdx)("p",null,"So in our first step a ",Object(l.mdx)("inlineCode",{parentName:"p"},"SubsectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in following steps."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createSubSection = (subsectionData) => {\n  const section = [\n    <SubsectionHeader\n      key={subsectionData.key}\n      title={subsectionData.title}\n    />,\n  ];\n  return section;\n};\n")),Object(l.mdx)("p",null,"Next we'll create an array with the first item being our subsection header, and then loop through the associated child items for the section appending them to the initial array."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createSubSection = (subsectionData) => {\n  const section = [\n    <SubsectionHeader\n      key={subsectionData.key}\n      title={subsectionData.title}\n    />,\n  ];\n  subsectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));\n  return section;\n};\n")),Object(l.mdx)("h2",{id:"unpack-data"},"Unpack Data"),Object(l.mdx)("p",null,"We can then implement the unpack of our data into our list items."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} />\n  </Item>\n);\n\nconst createSections = data => data.map(section => createSection(section));\n")),Object(l.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},'const InfiniteListSection = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle="standard"\n      isFinishedLoading\n    >\n      {createSections(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n')),Object(l.mdx)("p",null,"Using these steps we get the following example:"),Object(l.mdx)("h2",{id:"example"},"Example"),Object(l.mdx)(s.a,{title:"Sections Header Infinite List",mdxType:"InfiniteListSubsection"}))}p.isMDXComponent=!0}}]);