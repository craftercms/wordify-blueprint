(this["webpackJsonp@craftercms/wordify-react"]=this["webpackJsonp@craftercms/wordify-react"]||[]).push([[10],{270:function(e,t,s){"use strict";s.r(t);var c=s(2),o=s(5),n=s(1),a=s(322),l=s(29),d=s(64);t.default=function(e){var t,s=e.model,r=Object(d.d)();0!==e.model.posts_o.length&&(r=e.model.posts_o);var i=Object(n.useState)(0),m=Object(o.a)(i,2),j=m[0],b=m[1],u=r[j];return Object(c.jsx)(l.b,{model:s,className:"owl-carousel owl-theme owl-loaded home-slider",children:Object(c.jsxs)("div",{className:"owl-stage-outer",children:[Object(c.jsx)(l.b,{model:s,fieldId:"posts_o",className:"owl-stage",children:Object(c.jsx)(l.b,{className:"owl-item active",model:s,fieldId:"posts_o",index:j,style:{width:"100%"},children:Object(c.jsx)(a.d,{tags:"Food",model:u,showBlurb:!0,format:a.a,classes:{root:"height-lg",innerWrapper:"half-to-full"}})},u.craftercms.id)}),Object(c.jsx)("div",{className:"owl-dots",children:null===(t=r)||void 0===t?void 0:t.map((function(e,t){return Object(c.jsx)("button",{className:"owl-dot ".concat(t===j?"active":""),onClick:function(){return b(t)},children:Object(c.jsx)("span",{})},t)}))})]})})}},322:function(e,t,s){"use strict";s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return r})),s.d(t,"a",(function(){return i}));var c=s(2),o=(s(1),s(60)),n=s(328),a=s(29),l="portrait",d="landscape",r="landscapeCompressed",i="imageBackground";t.d=function(e){var t,s,m=Object(n.a)().formatDate,j=e.classes,b=e.format,u=void 0===b?l:b,p=e.showBlurb,h=void 0!==p&&p,x=e.numOfComments,f=e.model,O=e.model,v=O.authorBio_o,g=O.headline_s,N=O.mainImageAlt_s,I=void 0===N?"":N,_=O.categories_o,w=O.craftercms.dateModified,y=null===v||void 0===v?void 0:v[0],k=Object(c.jsxs)("div",{className:"post-meta",children:[Object(c.jsx)(a.b,{component:"span",model:f,fieldId:"authorBio_o",index:0,className:"author mr-2",children:Object(c.jsxs)(a.b,{component:"span",model:y,children:[Object(c.jsx)(a.d,{component:"img",model:y,renderTarget:"src",fieldId:"profilePic_s",alt:""})," ",Object(c.jsx)(a.d,{component:"span",model:y,fieldId:"name_s"})]})})," \u2022 ",Object(c.jsx)("span",{className:"mr-2",children:m(w)}),x&&Object(c.jsxs)(c.Fragment,{children:[" \u2022 ",Object(c.jsxs)("span",{className:"ml-2",children:[Object(c.jsx)("span",{className:"fa fa-comments"})," ",x]})]})]}),B=f.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace(".xml","");switch(u){case l:return Object(c.jsxs)(a.b,{component:o.b,model:f,to:B,className:"blog-entry ".concat(null!==(t=null===j||void 0===j?void 0:j.root)&&void 0!==t?t:""),children:[Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)(a.d,{component:"img",model:f,renderTarget:"src",fieldId:"mainImage_s",alt:I})}),Object(c.jsxs)("div",{className:"blog-content-body",children:[k,Object(c.jsx)(a.d,{component:"h2",model:f,fieldId:"headline_s"})]})]});case d:return Object(c.jsx)("div",{className:"post-entry-horizontal",children:Object(c.jsxs)(a.b,{component:o.b,model:f,to:B,className:null===j||void 0===j?void 0:j.root,children:[Object(c.jsx)(a.d,{model:f,fieldId:"mainImage_s",renderTarget:"style.backgroundImage",format:function(e){return'url("'.concat(e,'")')},className:"image"}),Object(c.jsxs)("span",{className:"text",children:[k,Object(c.jsx)(a.d,{component:"h2",fieldId:"headline_s",model:f})]})]})});case r:return Object(c.jsxs)(a.b,{component:o.b,model:f,to:B,className:null===j||void 0===j?void 0:j.root,children:[Object(c.jsx)(a.d,{component:"img",renderTarget:"src",model:f,fieldId:"mainImage_s",className:"mr-4",alt:""}),Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)(a.d,{component:"h4",model:f,fieldId:"headline_s"}),Object(c.jsx)("div",{className:"post-meta",children:Object(c.jsx)("span",{className:"mr-2",children:m(w)})})]})]});case i:return Object(c.jsx)(a.d,{model:f,fieldId:"mainImage_s",renderTarget:"style",className:"a-block d-flex align-items-center ".concat(null!==(s=null===j||void 0===j?void 0:j.root)&&void 0!==s?s:""),format:function(e){return{backgroundImage:'url("'.concat(e,'")')}},children:Object(c.jsxs)(a.b,{component:o.b,model:f,to:B,className:"text ".concat(null===j||void 0===j?void 0:j.innerWrapper),children:[Object(c.jsxs)("div",{className:"post-meta",children:[_&&Object(c.jsxs)(c.Fragment,{children:[null===_||void 0===_?void 0:_.map((function(e){return Object(c.jsx)("span",{className:"category",children:e.value_smv},e.key)}))," \u2022 "]}),Object(c.jsx)("span",{className:"mr-2",children:m(w)}),x&&Object(c.jsxs)(c.Fragment,{children:[" \u2022 ",Object(c.jsxs)("span",{className:"ml-2",children:[Object(c.jsx)("span",{className:"fa fa-comments"})," ",x]})]})]}),Object(c.jsx)(a.d,{component:"h3",model:f,fieldId:"headline_s"}),h&&Object(c.jsx)(a.d,{component:"p",model:f,fieldId:"blurb_t"})]})});default:return console.error('Unknown PostCard format "'.concat(u,'" on post "').concat(g,'"')),Object(c.jsx)(a.b,{component:o.b,model:f,to:B,className:null===j||void 0===j?void 0:j.root,children:Object(c.jsx)("h2",{children:g})})}}},328:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var c=s(1),o=s(158),n=s(25);function a(){var e=Object(c.useContext)(o.a);return Object(n.f)(e),e}}}]);
//# sourceMappingURL=10.c20f613c.chunk.js.map