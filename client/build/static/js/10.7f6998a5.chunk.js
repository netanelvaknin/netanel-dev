(this["webpackJsonpnetanel-dev-frontend"]=this["webpackJsonpnetanel-dev-frontend"]||[]).push([[10],{197:function(e,t,n){"use strict";var i=n(171),r=n.n(i),a=n(172),o=n(27),c=n(14),s=n(0),m=n(47),l=n(173),d=n(677),h=n(195),f=n(196),u=n(45),b=n(57),p=n(3),j=h.a().shape({email:h.b().email("\u05db\u05ea\u05d5\u05d1\u05ea \u05d0\u05d9\u05de\u05d9\u05d9\u05dc \u05dc\u05d0 \u05d7\u05d5\u05e7\u05d9\u05ea").required("\u05e0\u05d0 \u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05db\u05ea\u05d5\u05d1\u05ea \u05d0\u05d9\u05de\u05d9\u05d9\u05dc")}),g=c.c.h2.withConfig({displayName:"Newsletter__PrimaryHeading",componentId:"gdqmky-0"})(["font-size:2.5rem;line-height:1.3;font-family:",";"],(function(e){return e.theme.fonts.bold}));t.a=function(e){var t=e.title,n=void 0===t?"\u05d4\u05e8\u05e9\u05de\u05d5 \u05e2\u05db\u05e9\u05d9\u05d5 \u05dc\u05e0\u05d9\u05d5\u05d5\u05d6\u05dc\u05d8\u05e8 \u05e9\u05dc\u05d9 \u05d5\u05ea\u05e7\u05d1\u05dc\u05d5 \u05e2\u05d3\u05db\u05d5\u05e0\u05d9\u05dd \u05e9\u05d5\u05d8\u05e4\u05d9\u05dd":t,i=Object(s.useState)(!1),c=Object(o.a)(i,2),h=c[0],O=c[1],v=Object(b.a)(),x=Object(l.d)({resolver:Object(f.a)(j)}),y=x.register,w=x.handleSubmit,_=x.setError,C=x.formState.errors,N=function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.email)){e.next=12;break}return e.prev=2,e.next=5,u.a.post("/newsletter/signup",{email:n});case 5:200===e.sent.status&&O(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),_("email",{type:"manual",message:"\u05db\u05ea\u05d5\u05d1\u05ea \u05d4\u05d0\u05d9\u05de\u05d9\u05d9\u05dc \u05e9\u05d4\u05d6\u05e0\u05ea \u05db\u05d1\u05e8 \u05e8\u05e9\u05d5\u05de\u05d4 \u05dc\u05e0\u05d9\u05d5\u05d5\u05d6\u05dc\u05d8\u05e8"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{style:{marginTop:v?"6rem":"9rem"},children:h?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{children:"\u05d4\u05d4\u05e8\u05e9\u05de\u05d4 \u05dc\u05e2\u05d3\u05db\u05d5\u05e0\u05d9 \u05d4\u05e0\u05d9\u05d5\u05d5\u05d6\u05dc\u05d8\u05e8 \u05e0\u05e7\u05dc\u05d8\u05d4"}),Object(p.jsx)(g,{children:"\u05ea\u05d5\u05d3\u05d4 \u05e8\u05d1\u05d4 \ud83d\ude4f"})]}):Object(p.jsxs)("form",{onSubmit:w(N),children:[Object(p.jsx)(g,{children:n}),Object(p.jsx)("p",{children:"\u05de\u05d1\u05d8\u05d9\u05d7 \u05dc\u05d0 \u05dc\u05d7\u05e4\u05d5\u05e8 \u05d5\u05dc\u05e9\u05dc\u05d5\u05d7 \u05e2\u05d3\u05db\u05d5\u05e0\u05d9\u05dd \u05e8\u05e7 \u05db\u05e9\u05d9\u05d5\u05e6\u05d0\u05d9\u05dd \u05de\u05d0\u05de\u05e8\u05d9\u05dd \u05d7\u05d3\u05e9\u05d9\u05dd \ud83d\ude09"}),Object(p.jsx)("div",{style:{maxWidth:"50rem",margin:"2rem 0 1rem"},children:Object(p.jsx)(m.c,{label:"\u05db\u05ea\u05d5\u05d1\u05ea \u05d0\u05d9\u05de\u05d9\u05d9\u05dc",name:"email",register:y,error:!!C.email,errorMessage:C.email&&C.email.message})}),Object(p.jsx)(d.a,{variant:"contained",color:"secondary",type:"submit",style:{marginTop:"2rem"},children:"\u05ea\u05e8\u05e9\u05d5\u05dd \u05d0\u05d5\u05ea\u05d9"})]})})}},679:function(e,t,n){"use strict";n.r(t);var i=n(27),r=n(0),a=n(14),o=n(677),c=n(8),s=n(23),m=n(3),l=a.c.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-4phmu4-0"})(["min-height:29rem;max-width:58rem;@media ","{margin-bottom:6rem;padding-top:3rem;}"],s.a),d=a.c.h1.withConfig({displayName:"Header__PrimaryHeading",componentId:"sc-4phmu4-1"})(["font-family:",";"],(function(e){return e.theme.fonts.bold})),h=a.c.h2.withConfig({displayName:"Header__SecondaryHeading",componentId:"sc-4phmu4-2"})(["font-family:",";margin-top:2rem;margin-bottom:2rem;"],(function(e){return e.theme.fonts.light})),f=a.c.div.withConfig({displayName:"Header__ButtonsContainer",componentId:"sc-4phmu4-3"})(["display:flex;@media ","{margin-bottom:3rem;}"],s.a),u=Object(a.c)(o.a).withConfig({displayName:"Header__BlogButton",componentId:"sc-4phmu4-4"})(["&,&.MuiButtonBase-root{margin-left:1.5rem;}"]),b=function(){var e=Object(c.g)();return Object(m.jsxs)(l,{children:[Object(m.jsx)(d,{children:"\u05e4\u05e8\u05d5\u05e0\u05d8-\u05d0\u05e0\u05d3 \u05d1\u05d2\u05d5\u05d1\u05d4 \u05d4\u05e2\u05d9\u05e0\u05d9\u05d9\u05dd"}),Object(m.jsx)(h,{children:"\u05d7\u05d3\u05e9\u05d9\u05dd \u05d1\u05e2\u05d5\u05dc\u05dd \u05d4- Web ? \u05de\u05d7\u05e4\u05e9\u05d9\u05dd \u05ea\u05d5\u05db\u05df \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea ? \u05d4\u05d2\u05e2\u05ea\u05dd \u05dc\u05de\u05e7\u05d5\u05dd \u05d4\u05e0\u05db\u05d5\u05df. \u05ea\u05d5\u05db\u05dc\u05d5 \u05dc\u05de\u05e6\u05d5\u05d0 \u05db\u05d0\u05df \u05de\u05d0\u05de\u05e8\u05d9\u05dd \u05e7\u05dc\u05d9\u05dc\u05d9\u05dd \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea \u05d5\u05d1\u05dc\u05d9 \u05de\u05d5\u05e9\u05d2\u05d9\u05dd \u05de\u05e4\u05d5\u05e6\u05e6\u05d9\u05dd."}),Object(m.jsxs)(f,{children:[Object(m.jsx)(u,{color:"secondary",variant:"contained",onClick:function(){return e.push("/blog")},children:"\u05dc\u05de\u05d0\u05de\u05e8\u05d9\u05dd"}),Object(m.jsx)(o.a,{variant:"outlined",onClick:function(){return e.push("/about")},children:"\u05e7\u05e6\u05ea \u05e2\u05dc\u05d9\u05d9"})]})]})},p=n(1),j=n(2),g=(n(5),n(4)),O=n(158),v=n(6),x=r.forwardRef((function(e,t){var n=e.classes,i=e.className,a=e.raised,o=void 0!==a&&a,c=Object(j.a)(e,["classes","className","raised"]);return r.createElement(O.a,Object(p.a)({className:Object(g.a)(n.root,i),elevation:o?8:1,ref:t},c))})),y=Object(v.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(x),w=n(30),_=r.forwardRef((function(e,t){var n=e.animation,i=void 0===n?"pulse":n,a=e.classes,o=e.className,c=e.component,s=void 0===c?"span":c,m=e.height,l=e.variant,d=void 0===l?"text":l,h=e.width,f=Object(j.a)(e,["animation","classes","className","component","height","variant","width"]),u=Boolean(f.children);return r.createElement(s,Object(p.a)({ref:t,className:Object(g.a)(a.root,a[d],o,u&&[a.withChildren,!h&&a.fitContent,!m&&a.heightAuto],!1!==i&&a[i])},f,{style:Object(p.a)({width:h,height:m},f.style)}))})),C=Object(v.a)((function(e){return{root:{display:"block",backgroundColor:Object(w.b)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(_),N=function(){return Object(m.jsxs)(k,{children:[Object(m.jsx)(C,{animation:"wave"}),Object(m.jsx)(C,{width:"60%",height:"5rem",animation:"wave"})]})},k=a.c.div.withConfig({displayName:"Recent__SkeletonStyle",componentId:"fswpr7-0"})(["flex:1;margin:0 0 2rem 2rem;.MuiSkeleton-root{width:100%;height:10.1rem;margin-bottom:1rem;}"]),R=a.c.div.withConfig({displayName:"Recent__RecentPostsContainer",componentId:"fswpr7-1"})(["margin-top:2rem;margin-bottom:5rem;display:flex;justify-content:space-between;@media ","{flex-direction:column;}& > *:last-child{margin-left:0;}"],s.a),I=Object(a.c)(y).withConfig({displayName:"Recent__RecentPost",componentId:"fswpr7-2"})(["flex:1;padding:2rem;margin-left:2rem;cursor:pointer;@media ","{margin-left:0;margin-bottom:2.5rem;}&:hover{background:rgba(0,0,0,0.04);}"],s.a),S=a.c.h1.withConfig({displayName:"Recent__Title",componentId:"fswpr7-3"})(["font-family:",";font-size:2.5rem;line-height:1.3;"],(function(e){return e.theme.fonts.bold})),H=Object(a.c)(S).withConfig({displayName:"Recent__RecentPostsPrimaryTitle",componentId:"fswpr7-4"})(["margin-bottom:2rem;font-family:",";"],(function(e){return e.theme.fonts.bold})),P=Object(a.c)(S).withConfig({displayName:"Recent__CardTitle",componentId:"fswpr7-5"})(["min-height:7rem;font-family:",";font-size:2.2rem;"],(function(e){return e.theme.fonts.regular})),B=function(e){var t=e.recentPosts,n=Object(c.g)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(H,{children:"\u05de\u05d0\u05de\u05e8\u05d9\u05dd \u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd"}),Object(m.jsx)(R,{children:t.length>0?t.map((function(e){return Object(m.jsx)(I,{onClick:function(){return n.push("/blog/".concat(e._id))},children:Object(m.jsx)(P,{children:null===e||void 0===e?void 0:e.title})},null===e||void 0===e?void 0:e._id)})):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{}),Object(m.jsx)(N,{}),Object(m.jsx)(N,{})]})})]})},T=n(197),M=n(45);t.default=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){M.a.get("/posts/recent").then((function(e){var t=e.data;a(t)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(b,{}),Object(m.jsx)(B,{recentPosts:n}),Object(m.jsx)(T.a,{})]})}}}]);
//# sourceMappingURL=10.7f6998a5.chunk.js.map