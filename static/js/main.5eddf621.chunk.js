(this["webpackJsonpreact-framer-demo"]=this["webpackJsonpreact-framer-demo"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(18),a=(n(25),n(13)),r=n(30),o=n(31),s=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return{modalOpen:n,close:function(){return c(!1)},open:function(){return c(!0)}}},l=n(3),d=function(e){var t=e.children,n=e.onClick;return Object(l.jsx)(r.a.div,{className:"backdrop",onClick:n,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t})},j={hidden:{y:"100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.1,type:"spring",damping:25,stiffness:500}},exit:{y:"100vh",opacity:0}},u=function(){return Object(l.jsxs)("div",{className:"modal-text",children:[Object(l.jsx)("h3",{children:"Text"}),Object(l.jsx)("h5",{children:"\u0421 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442 \u0437\u0430 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0442\u0440\u0443\u0434, \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435\u0442\u043e, \u0441\u0442\u0430\u0440\u0430\u043d\u0438\u0435\u0442\u043e \u0438 \u043f\u0440\u0438\u044f\u0442\u0435\u043b\u0441\u043a\u043e\u0442\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043a\u0430\u043d\u0438\u043c: \u0411\u043e\u0433\u0434\u0430\u043d \u0411\u043e\u0433\u0434\u0430\u043d\u043e\u0432"})]})},h=function(e){var t=e.onClick,n=e.label;return Object(l.jsx)(r.a.button,{className:"modal-button",type:"button",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:t,children:n})},b=function(e){var t=e.handleClose,n=e.setShowConfetti;function i(){n(!1),t()}return Object(l.jsx)(d,{onClick:function(){return i()},children:Object(l.jsxs)(r.a.div,{onClick:function(e){return e.stopPropagation()},className:"modal orange-gradient",variants:j,initial:"hidden",animate:"visible",exit:"exit",children:[Object(l.jsx)(u,{text:"text"}),Object(l.jsx)(h,{onClick:function(){return i()},label:"Close"})]})})},O=n(19),p=n.n(O),x=n(20);var f=function(e){var t=e.children;return Object(l.jsx)(o.a,{initial:!1,exitBeforeEnter:!0,children:t})},m=function(){var e=s(),t=e.modalOpen,n=e.close,c=e.open,o=Object(i.useState)("mail.png"),d=Object(a.a)(o,2),j=d[0],u=d[1],h=Object(x.a)(),O=h.width,m=h.height,v=Object(i.useState)(!1),g=Object(a.a)(v,2),y=g[0],C=g[1];return Object(l.jsxs)(l.Fragment,{children:[y?Object(l.jsx)(p.a,{width:O,height:m}):Object(l.jsx)(l.Fragment,{}),Object(l.jsxs)(r.a.main,{children:[Object(l.jsx)("h1",{children:"If you aren't scared click here:"}),Object(l.jsx)(r.a.img,{src:j,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){return u("openedMail.png"),C(!0),void c()},style:{padding:"auto"}})]}),Object(l.jsx)(f,{children:t&&Object(l.jsx)(b,{clasName:".ModalCard",modalOpen:t,handleClose:n,setShowConfetti:C})})]})},v=(n(27),document.getElementById("root"));Object(c.render)(Object(l.jsx)(m,{}),v)}},[[28,1,2]]]);
//# sourceMappingURL=main.5eddf621.chunk.js.map