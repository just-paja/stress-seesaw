(this.webpackJsonpstressswing=this.webpackJsonpstressswing||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports={container:"SwingBoard_container__1p5X6"}},23:function(e,t,a){e.exports={forms:"App_forms__tbkJv"}},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(21),o=a.n(c),i=(a(28),a(29),a(6)),s=a(12),u=a(11),m=a(19),f=a(8),d=a(18),p=a(16),E=a(17),b=a.n(E),g=Object(r.memo)((function(e){var t=e.collection,a=e.onSubmit,n=Object(p.b)({defaultValues:t}),c=n.register,o=n.control,s=n.handleSubmit,u=n.watch,E=Object(p.a)({name:"data",control:o}),g=E.fields,v=E.append,h=E.remove,O=u(void 0,t);return Object(r.useEffect)((function(){JSON.stringify(O)!==JSON.stringify(t)&&a(O)}),[O]),console.log(O),l.a.createElement(f.a,{onSubmit:s(a),className:b.a.form},l.a.createElement(d.a,null,g.map((function(e,t){return l.a.createElement(d.a.Item,{key:e.id},l.a.createElement(f.a.Row,null,l.a.createElement(i.a,{xs:6},l.a.createElement(f.a.Group,{controlId:"data["+t+"].name"},l.a.createElement(f.a.Label,{srOnly:!0},"Name"),l.a.createElement(f.a.Control,{name:"data["+t+"].name",placeholder:"Name",ref:c(),defaultValue:e.name}))),l.a.createElement(i.a,{xs:3},l.a.createElement(f.a.Group,{controlId:"data["+t+"].weight"},l.a.createElement(f.a.Label,{srOnly:!0},"Weight"),l.a.createElement(f.a.Control,{ref:c(),placeholder:"Weight",defaultValue:e.weight,name:"data["+t+"].weight",type:"number",autoComplete:"off",min:0}))),l.a.createElement(i.a,{xs:3},l.a.createElement(m.a,{variant:"danger",className:b.a.deleteButton,onClick:function(){return h(t)}},"x"))))}))),l.a.createElement(m.a,{variant:"secondary",onClick:function(){return v({name:"",weight:1})}},"Add"))})),v=a(22),h=a.n(v),O=a(9),y=a.n(O);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function S(e,t){var a=e.title,l=e.titleId,c=j(e,["title","titleId"]);return r.createElement("svg",w({viewBox:"0 0 150 150",ref:t,"aria-labelledby":l},c),a?r.createElement("title",{id:l},a):null,n||(n=r.createElement("path",{d:"M 75,0 0,150 h 150 z"})))}var _,x=r.forwardRef(S);a.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function C(e,t){var a=e.title,n=e.titleId,l=N(e,["title","titleId"]);return r.createElement("svg",I({viewBox:"0 0 1000 185",ref:t,"aria-labelledby":n},l),a?r.createElement("title",{id:n},a):null,_||(_=r.createElement("path",{d:"m 821.20662,53.476636 c 0,0 10.34349,69.371794 -3.37859,93.167524 -1.75216,1.37524 -647.93081,-0.10873 -649.07001,-1.56969 -6.10662,-30.17777 -3.33348,-95.434453 -3.33348,-95.434453 -6.5543,-13.235071 -28.2784,-12.749171 -35.5175,0.88504 0,0 4.19696,65.253243 -4.25334,94.777803 L 2.413781,146.17522 0,185.03729 c 333.33501,-0.72197 666.66488,0.68088 1000,0 0,0 -1.89271,-20.06085 -3.55982,-36.85081 l -135.25106,-1.7289 c -9.87422,-24.00264 -1.59296,-92.201103 -1.59296,-92.201103 -14.38395,-8.876004 -24.89184,-7.332445 -38.38954,-0.779841 z"})))}var P=r.forwardRef(C);a.p;function k(e,t){var a=t+e,n=Math.abs(t-e),r=Math.sign(t-e),l=n/(a+1),c=Math.sin(45*Math.PI/180),o=Math.min(c,l);return r*Math.asin(o)}var M=function(e){var t={transform:"rotate("+k(e.left,e.right)+"rad)"};return l.a.createElement("div",{className:y.a.seesaw},l.a.createElement("div",{className:y.a.ssObject},l.a.createElement(P,{className:y.a.board,style:t})),l.a.createElement("div",{className:y.a.ssObject},l.a.createElement(x,{className:y.a.pivot})))},B=function(e){var t=e.left,a=e.right;return l.a.createElement(u.a,{className:h.a.container},l.a.createElement(s.a,null,l.a.createElement(i.a,{xs:6},l.a.createElement("div",null,"Left: ",t)),l.a.createElement(i.a,{xs:6},l.a.createElement("div",null,"Right: ",a))),l.a.createElement(M,{left:t,right:a}))},F=a(23),L=a.n(F),R=function(e){return e.reduce((function(e,t){return e+parseInt(t.weight,10)}),0)};var J=function(){var e=Object(r.useState)({data:[]}),t=e[0],a=e[1],n=Object(r.useState)({data:[]}),c=n[0],o=n[1];console.log(t,c);var m=R(t.data),f=R(c.data);return l.a.createElement("div",null,l.a.createElement("div",{className:L.a.forms},l.a.createElement(u.a,null,l.a.createElement("h1",null,"Stress swing"),l.a.createElement(s.a,null,l.a.createElement(i.a,{lg:6},l.a.createElement("h2",null,"Requirements"),l.a.createElement(g,{onSubmit:a,collection:t})),l.a.createElement(i.a,{lg:6},l.a.createElement("h2",null,"Resources"),l.a.createElement(g,{onSubmit:o,collection:c}))))),l.a.createElement(B,{left:m,right:f}))},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),q()},9:function(e,t,a){e.exports={seesaw:"Swing_seesaw__2FFhq",ssObject:"Swing_ssObject__3-lK_",pivot:"Swing_pivot__3Cqe7",board:"Swing_board__2ypdy"}}},[[34,1,2]]]);
//# sourceMappingURL=main.12dc2a98.chunk.js.map