(this["webpackJsonp@craftercms/wordify-react"]=this["webpackJsonp@craftercms/wordify-react"]||[]).push([[8,10],{329:function(e,t,c){"use strict";c.r(t);var a=c(3),s=(c(0),c(31));t.default=function(e){var t=e.model,c=e.model,n=c.linkButtonText_s,r=c.showLinkButton_b,l=c.facebookLink_s,i=c.twitterLink_s,o=c.instagramLink_s,d=c.youTubeLink_s;return Object(a.jsxs)(s.c,{className:"bio text-center",model:t,children:[Object(a.jsx)(s.d,{component:"img",renderTarget:"src",model:t,fieldId:"profilePic_s",className:"img-fluid",alt:""}),Object(a.jsxs)("div",{className:"bio-body",children:[Object(a.jsx)(s.d,{component:"h2",model:t,fieldId:"name_s"}),r&&n&&Object(a.jsx)("p",{children:Object(a.jsx)(s.d,{component:"a",model:t,fieldId:"linkButtonText_s,linkButtonUrl_s",renderTarget:"children,href",className:"btn btn-primary btn-sm rounded bio-link"})}),Object(a.jsx)(s.d,{component:"p",model:t,fieldId:"bio_t"}),Object(a.jsxs)("p",{className:"social",children:[l&&Object(a.jsx)("a",{href:l,className:"p-2",target:"_blank",rel:"noreferrer noopener",children:Object(a.jsx)("span",{className:"fa fa-facebook"})}),i&&Object(a.jsx)("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener",children:Object(a.jsx)("span",{className:"fa fa-twitter"})}),o&&Object(a.jsx)("a",{href:o,className:"p-2",target:"_blank",rel:"noreferrer noopener",children:Object(a.jsx)("span",{className:"fa fa-instagram"})}),d&&Object(a.jsx)("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener",children:Object(a.jsx)("span",{className:"fa fa-youtube-play"})})]})]})]})}},334:function(e,t,c){"use strict";c.r(t);var a=c(40),s=c(6),n=c(3),r=c(0),l=c(162),i=c(392),o=c(391),d=c(388),j=c(389),b=c(70),m=c(114),f=c(386),u=c(28),O=c(387),x=c(393);function h(e){var t=e.resource,c=e.paginationData,a=e.onPageChange,s=t.read(),r=s.hits,l=s.total,i="object"===typeof l?l.value:l,o=Math.ceil(i/c.itemsPerPage);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:[i," result",0===i||i>1?"s":""," found."]}),r.map((function(e){return Object(n.jsx)(f.d,{model:e,format:f.b},e.craftercms.id)})),o>1&&Object(n.jsx)("div",{className:"col-md-12 text-center mt-5",children:Object(n.jsx)(x.a,{pageCount:o,onPageChange:function(e){return a(e*c.itemsPerPage)}})})]})}t.default=function(e){var t=e.model,c=e.meta.levelDescriptor,f=Object(r.useState)({itemsPerPage:10,currentPage:0}),x=Object(s.a)(f,2),p=x[0],g=x[1],N=Object(b.h)(p.itemsPerPage),v=Object(u.f)(),k=Object(b.e)(),_=Object(s.a)(k,1)[0];return Object(n.jsx)(l.a,{model:c,children:Object(n.jsx)("section",{className:"site-section pt-5 py-sm",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsx)("h2",{className:"mb-4",children:Object(n.jsx)(i.a,{id:"common.latestPostSectionTitle",defaultMessage:"Search Results"})})})}),Object(n.jsxs)("div",{className:"row blog-entries",children:[Object(n.jsx)("div",{className:"col-md-12 col-lg-8 main-content",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(r.Suspense,{fallback:Object(n.jsx)(m.a,{screenHeight:!1}),children:Object(n.jsx)(h,{resource:N,paginationData:p,onPageChange:function(e){g(Object(a.a)(Object(a.a)({},p),{},{currentPage:e})),v.push({pathname:"/search",search:"?q=".concat(_,"&p=").concat(e)})}})})})}),Object(n.jsxs)("div",{className:"col-md-12 col-lg-4 sidebar",children:[Object(n.jsx)(o.a,{}),Object(n.jsx)(O.a,{model:t,fieldId:"bios_o"}),Object(n.jsx)(d.a,{}),Object(n.jsx)(j.a,{}),Object(n.jsx)(j.b,{})]})]})]})})})}},387:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var a=c(3),s=(c(0),c(329)),n=c(31);function r(e){var t=e.model,c=e.fieldId;return Object(a.jsx)(n.d,{model:t,fieldId:c,className:"bio-zone",format:function(e){return null===e||void 0===e?void 0:e.map((function(e,r){return Object(a.jsx)(n.c,{model:t,fieldId:c,index:r,className:"sidebar-box",children:Object(a.jsx)(s.default,{model:e})},"".concat(e.craftercms.id,"_").concat(r))}))}})}}}]);
//# sourceMappingURL=8.8cc07293.chunk.js.map