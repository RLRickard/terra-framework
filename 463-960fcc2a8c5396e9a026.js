(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1285:function(e,t,n){"use strict";n.r(t),t.default={content:"NavigationSideMenuDocCommon-module__content___2zyKv","content-wrapper":"NavigationSideMenuDocCommon-module__content-wrapper___R4nw3",toolbar:"NavigationSideMenuDocCommon-module__toolbar___3bIcH"}},2087:function(e,t,n){"use strict";var u=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(33)),l=u(n(39)),s=u(n(49)),o=u(n(41)),c=u(n(42)),d=u(n(43)),i=u(n(0)),r=u(n(7)),f=u(n(1190)),b=u(n(1285));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(u,arguments,a)}else n=u.apply(this,arguments);return(0,c.default)(this,n)}}var y=r.default.bind(b.default),h=function(e){(0,o.default)(n,e);var t=m(n);function n(e){var u;return(0,a.default)(this,n),(u=t.call(this,e)).handleOnChange=u.handleOnChange.bind((0,s.default)(u)),u.resetMenuState=u.resetMenuState.bind((0,s.default)(u)),u.fakeRoutingBack=u.fakeRoutingBack.bind((0,s.default)(u)),u.state={selectedMenuKey:"menu",selectedChildKey:void 0},u}return(0,l.default)(n,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?i.default.createElement("div",{className:y("content")},i.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),i.default.createElement("p",null,"Parent Route")):i.default.createElement(f.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,routingStackBack:this.fakeRoutingBack,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey,toolbar:i.default.createElement("div",{className:y("toolbar")},"Toolbar here")}),i.default.createElement("div",{className:y("content-wrapper")},e)}}]),n}(i.default.Component);t.default=h}}]);