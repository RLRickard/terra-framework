(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{1167:function(e,t,l){"use strict";var a=l(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(l(23)),d=a(l(47)),i=a(l(0)),u=a(l(499)),n=a(l(3)),r=a(l(21)),s=a(l(7)),c=a(l(12)),_=a(l(1175)),f=["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"],m=s.default.bind(_.default),h={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},p={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(h)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},g=function(e){var t=e.header,l=e.footer,a=e.children,n=e.onRequestClose,s=e.isOpen,_=e.ariaLabel,p=e.width,g=e.closeOnOutsideClick,w=e.rootSelector,v=(0,d.default)(e,f),M=i.default.useContext(c.default);if(!s)return null;var C=["dialog-modal-wrapper",M.className];return p in h?C.push("width-".concat(h[p])):C.push("width-1120"),i.default.createElement(u.default,{ariaLabel:_,role:"dialog",classNameModal:m(C),isOpen:s,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:g,rootSelector:w},i.default.createElement("div",(0,o.default)({},v,{className:(0,r.default)(m("dialog-modal-inner-wrapper"),v.className)}),i.default.createElement("div",{className:m("dialog-modal-container")},i.default.createElement("div",null,t),i.default.createElement("div",{className:m("dialog-modal-body")},a),i.default.createElement("div",null,l))))};g.propTypes=p,g.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var w=g;t.default=w},1175:function(e,t,l){"use strict";l.r(t),t.default={"clinical-lowlight-theme":"DialogModal-module__clinical-lowlight-theme___SaKc0","orion-fusion-theme":"DialogModal-module__orion-fusion-theme___3o9Mk","dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___3sPcp","width-320":"DialogModal-module__width-320___1F-q-","width-480":"DialogModal-module__width-480___2t4Xb","width-560":"DialogModal-module__width-560___3aETX","width-640":"DialogModal-module__width-640___13ULp","width-800":"DialogModal-module__width-800___29VLV","width-960":"DialogModal-module__width-960___2zV1i","width-1120":"DialogModal-module__width-1120___ybLhM","width-1280":"DialogModal-module__width-1280___1ysQr","width-1440":"DialogModal-module__width-1440___1jbz7","width-1600":"DialogModal-module__width-1600___L_2gu","width-1760":"DialogModal-module__width-1760___2WapK","width-1920":"DialogModal-module__width-1920___2CmC6","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___2YfG7","dialog-modal-container":"DialogModal-module__dialog-modal-container___2-s0w","dialog-modal-header":"DialogModal-module__dialog-modal-header___3g6p2","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___fEXtA","dialog-modal-body":"DialogModal-module__dialog-modal-body___SHhUf"}},1796:function(e,t,l){"use strict";l.r(t),t.default={header:"DialogModalWithCustomHeaderAndCustomFooter-test-module__header___1nouX",footer:"DialogModalWithCustomHeaderAndCustomFooter-test-module__footer___ugg2h","close-button":"DialogModalWithCustomHeaderAndCustomFooter-test-module__close-button___7UZbG"}},2018:function(e,t,l){"use strict";var a=l(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(l(33)),d=a(l(39)),i=a(l(49)),u=a(l(41)),n=a(l(42)),r=a(l(43)),s=a(l(0)),c=a(l(78)),_=a(l(7)),f=a(l(1167)),m=a(l(1796));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,a=(0,r.default)(e);if(t){var o=(0,r.default)(this).constructor;l=Reflect.construct(a,arguments,o)}else l=a.apply(this,arguments);return(0,n.default)(this,l)}}var p=_.default.bind(m.default),g=function(e){(0,u.default)(l,e);var t=h(l);function l(){var e;return(0,o.default)(this,l),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(l,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(f.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement("div",{className:p("header")},"Custom Header",s.default.createElement(c.default,{id:"close-dialog-modal",text:"Close",className:p("close-button"),onClick:this.handleCloseModal})),footer:s.default.createElement("div",{className:p("footer")},"Custom Footer")},s.default.createElement("p",null,e)),s.default.createElement(c.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),l}(s.default.Component);t.default=g}}]);