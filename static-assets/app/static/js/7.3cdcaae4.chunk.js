(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[7,12],{116:function(e,a,t){"use strict";t.d(a,"b",(function(){return d})),t.d(a,"c",(function(){return b})),t.d(a,"a",(function(){return m}));var s=t(4),c=t(1),r=t(5),n=(t(0),t(22)),i=t(124),l=t(51),o=t(11),j="portrait",d="landscape",b="landscapeCompressed",m="imageBackground";a.d=function(e){var a,t,O,u=Object(i.a)().formatDate,x=Object(o.b)(),h=Object(r.a)(x,1)[0].isAuthoring,g=e.classes,f=e.parentModelId,p=e.format,v=void 0===p?j:p,N=e.showBlurb,k=void 0!==N&&N,y=e.numOfComments,C=e.model,_=e.model,w=Object(r.a)(_.authorBio_o,1)[0],P=w.name_s,T=w.profilePic_s,I=_.blurb_t,L=_.headline_s,F=_.mainImage_s,M=_.mainImageAlt_s,B=void 0===M?"":M,S=_.categories_o,A=_.craftercms.dateModified,U=C.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace(".xml",""),D=Object(l.b)({model:C,parentModelId:f,isAuthoring:h}).props;switch(v){case j:return Object(c.jsxs)(n.b,Object(s.a)(Object(s.a)({to:U,className:"blog-entry ".concat(null!==(a=null===g||void 0===g?void 0:g.root)&&void 0!==a?a:"")},D),{},{children:[Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)("img",{src:F,alt:B})}),Object(c.jsxs)("div",{className:"blog-content-body",children:[Object(c.jsxs)("div",{className:"post-meta",children:[Object(c.jsxs)("span",{className:"author mr-2",children:[Object(c.jsx)("img",{src:T,alt:""})," ",P]})," \u2022 ",Object(c.jsx)("span",{className:"mr-2",children:u(A)}),y&&Object(c.jsxs)(c.Fragment,{children:[" \u2022 ",Object(c.jsxs)("span",{className:"ml-2",children:[Object(c.jsx)("span",{className:"fa fa-comments"})," ",y]})]})]}),Object(c.jsx)("h2",{children:L})]})]}));case d:return Object(c.jsx)("div",Object(s.a)(Object(s.a)({className:"post-entry-horizontal"},D),{},{children:Object(c.jsxs)(n.b,{to:U,className:null===g||void 0===g?void 0:g.root,children:[Object(c.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(F,")")}}),Object(c.jsxs)("span",{className:"text",children:[Object(c.jsxs)("div",{className:"post-meta",children:[Object(c.jsxs)("span",{className:"author mr-2",children:[Object(c.jsx)("img",{src:T,alt:""})," ",P]}),"\u2022 ",Object(c.jsx)("span",{className:"mr-2",children:u(A)}),y&&Object(c.jsxs)(c.Fragment,{children:["\u2022 ",Object(c.jsxs)("span",{className:"ml-2",children:[Object(c.jsx)("span",{className:"fa fa-comments"})," $",y]})]})]}),Object(c.jsx)("h2",{children:L})]})]})}));case b:return Object(c.jsxs)(n.b,Object(s.a)(Object(s.a)({to:U,className:null===g||void 0===g?void 0:g.root},D),{},{children:[Object(c.jsx)("img",{src:F,alt:B,className:"mr-4"}),Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("h4",{children:L}),Object(c.jsx)("div",{className:"post-meta",children:Object(c.jsx)("span",{className:"mr-2",children:u(A)})})]})]}));case m:return Object(c.jsx)(n.b,{to:U,className:"a-block d-flex align-items-center ".concat(null!==(t=null===g||void 0===g?void 0:g.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(F,")")},children:Object(c.jsxs)("div",Object(s.a)(Object(s.a)({className:"text ".concat(null===g||void 0===g?void 0:g.innerWrapper)},D),{},{children:[Object(c.jsxs)("div",{className:"post-meta",children:[S&&Object(c.jsxs)(c.Fragment,{children:[null===S||void 0===S?void 0:S.map((function(e){return Object(c.jsx)("span",{className:"category",children:e.value_smv},e.key)}))," \u2022 "]}),Object(c.jsx)("span",{className:"mr-2",children:u(A)}),y&&Object(c.jsxs)(c.Fragment,{children:[" \u2022 ",Object(c.jsxs)("span",{className:"ml-2",children:[Object(c.jsx)("span",{className:"fa fa-comments"})," ",y]})]})]}),Object(c.jsx)("h3",{children:null!==(O=L.text)&&void 0!==O?O:L}),k&&Object(c.jsx)("p",{children:I})]}))});default:return console.error('Unknown PostCard format "'.concat(v,'" on post "').concat(L,'"')),Object(c.jsx)(n.b,Object(s.a)(Object(s.a)({to:U,className:null===g||void 0===g?void 0:g.root},D),{},{children:Object(c.jsx)("h2",{children:L})}))}}},117:function(e,a,t){"use strict";var s=t(1),c=t(4),r=t(16);t(0);a.a=function(e){var a=Object(r.a)(e),t=e.component,n=void 0===t?"div":t,i=Object(c.a)({},e);return delete i.model,delete i.component,delete i.fieldId,Object(s.jsx)(n,Object(c.a)(Object(c.a)({},a),i))}},118:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return r}));var s=t(1),c=t(4);t(0);function r(e){var a=e.ice,t=e.model,r=t.bio_t,n=t.name_s,i=t.profilePic_s,l=t.linkButtonText_s,o=t.linkButtonUrl_s,j=t.showLinkButton_b,d=t.facebookLink_s,b=t.twitterLink_s,m=t.instagramLink_s,O=t.youTubeLink_s;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",Object(c.a)(Object(c.a)({className:"bio text-center"},a),{},{children:[Object(s.jsx)("img",{src:i,alt:"",className:"img-fluid"}),Object(s.jsxs)("div",{className:"bio-body",children:[Object(s.jsx)("h2",{children:n}),Object(s.jsx)("p",{children:r}),j&&Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:o,className:"btn btn-primary btn-sm rounded",children:l})}),Object(s.jsxs)("p",{className:"social",children:[d&&Object(s.jsx)("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)("span",{className:"fa fa-facebook"})}),b&&Object(s.jsx)("a",{href:b,className:"p-2",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)("span",{className:"fa fa-twitter"})}),m&&Object(s.jsx)("a",{href:m,className:"p-2",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)("span",{className:"fa fa-instagram"})}),O&&Object(s.jsx)("a",{href:O,className:"p-2",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)("span",{className:"fa fa-youtube-play"})})]})]})]}))})}},119:function(e,a,t){"use strict";var s=t(1),c=(t(0),t(118)),r=t(16),n=t(117);function i(e){var a=e.model,t=Object(r.d)(e);return Object(s.jsx)("div",{className:"sidebar-box",children:Object(s.jsx)(c.default,{ice:t,model:a})})}a.a=function(e){var a,t=e.model,c=e.fieldId;return Object(s.jsx)(n.a,{model:t,component:"div",fieldId:c,style:{float:"left"},className:"bio-zone",children:null===(a=t[c])||void 0===a?void 0:a.map((function(e){return Object(s.jsx)(i,{model:e},e.craftercms.id)}))})}},120:function(e,a,t){"use strict";var s=t(1),c=(t(0),t(125)),r=t(116),n=t(16);a.a=function(){var e=Object(n.f)();return Object(s.jsxs)("div",{className:"sidebar-box",children:[Object(s.jsx)("h3",{className:"heading",children:Object(s.jsx)(c.a,{id:"common.latestPostsTitle",defaultMessage:"Latest Posts"})}),Object(s.jsx)("div",{className:"post-entry-sidebar",children:Object(s.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(r.d,{model:e,format:r.c})},e.craftercms.id)}))})})]})}},121:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"a",(function(){return O}));var s=t(1),c=t(4),r=t(0),n=t(125),i=t(16),l=t(14),o=t(42),j=t(27);function d(e){var a,t,r=e.title,n=e.filter,l=e.baseUrl,o=e.listClass,d=e.resource.read().data,b=Object(j.a)(d.taxonomy.items).filter(n)[0],m=Object(i.d)({model:b});return Array.isArray(null===b||void 0===b||null===(a=b.items)||void 0===a?void 0:a.item)&&b.items.item.length>0&&Object(s.jsxs)("div",{className:"sidebar-box",children:[Object(s.jsx)("h3",{className:"heading",children:r}),Object(s.jsx)("ul",Object(c.a)(Object(c.a)({className:o},m),{},{children:null===b||void 0===b||null===(t=b.items)||void 0===t?void 0:t.item.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"".concat(l,"/").concat(e.key),children:e.value})},e.key)}))}))]})}function b(e){var a=Object(i.i)();return Object(s.jsx)(r.Suspense,{fallback:Object(s.jsx)(o.a,{screenHeight:!1}),children:Object(s.jsx)(d,Object(c.a)(Object(c.a)({},e),{},{resource:a}))})}function m(){return Object(s.jsx)(b,{title:Object(s.jsx)(n.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"}),filter:Object(l.c)("tags.xml"),baseUrl:"/tag",listClass:"tags"})}function O(){return Object(s.jsx)(b,{title:Object(s.jsx)(n.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"}),filter:Object(l.c)("categories.xml"),baseUrl:"/category",listClass:"categories"})}},122:function(e,a,t){"use strict";var s=t(1),c=(t(0),t(112)),r=t(124),n=t(63),i=Object(c.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(r.a)().formatMessage;return Object(s.jsx)("div",{className:"sidebar-box search-form-wrap",children:Object(s.jsx)(n.a,{id:"s",placeholder:e(i.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}})})}},123:function(e,a,t){"use strict";var s=t(1),c=(t(0),t(126)),r=t.n(c);a.a=function(e){var a=e.pageCount,t=e.onPageChange;return Object(s.jsx)(r.a,{containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:0,pageCount:a,onPageChange:function(e){var a=e.selected;return t(a)},disableInitialCallback:!0,previousLabel:Object(s.jsx)("span",{children:"<"}),nextLabel:Object(s.jsx)("span",{children:">"})})}},137:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(4),r=t(5),n=t(0),i=t(62),l=t(120),o=t(116),j=t(119),d=t(122),b=t(121),m=t(16),O=t(22);var u=function(e){var a=e.category,t=e.isTag?"tag":"category";return Object(s.jsxs)(O.b,{to:"/".concat(t,"/").concat(a.key),className:"blog-entry category-card",children:[a.image_s&&Object(s.jsx)("img",{className:"background",src:a.image_s,alt:a.value}),Object(s.jsx)("h2",{className:"title",children:a.value})]})},x=t(27),h=t(14),g=t(42),f=t(123);function p(e){var a,t,i=e.resource,l=e.isTag,j=e.categoryId,d=i.read().data,b=Object(x.a)(d.taxonomy.items).filter(Object(h.c)(l?"tags.xml":"categories.xml"))[0],O=Object(m.d)({model:b}),g=Object(n.useState)({itemsPerPage:8,currentPage:0}),p=Object(r.a)(g,2),v=p[0],N=p[1];j&&(t=null===b||void 0===b?void 0:b.items.item.filter((function(e){return e.key===j}))[0]);var k=Object(m.e)(v,t);return Object(s.jsx)(s.Fragment,{children:j?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("h2",{className:"mb-4",children:[l?"Tag":"Category",": ",null===(a=t)||void 0===a?void 0:a.value]})}),Object(s.jsxs)("div",{className:"col-md-12 col-lg-8 main-content",children:[Object(s.jsx)("div",{className:"row mb-5 mt-5",children:Object(s.jsx)("div",{className:"col-md-12",children:null===k||void 0===k?void 0:k.items.map((function(e){return Object(s.jsx)(o.d,{model:e,format:o.b},e.craftercms.id)}))})}),(null===k||void 0===k?void 0:k.pageCount)>1&&Object(s.jsx)("div",{className:"row mt-5",children:Object(s.jsx)("div",{className:"col-md-12 text-center",children:Object(s.jsx)("nav",{"aria-label":"Categories navigation",className:"text-center",children:Object(s.jsx)(f.a,{pageCount:k.pageCount,onPageChange:function(e){N(Object(c.a)(Object(c.a)({},v),{},{currentPage:e}))}})})})})]})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("h2",{className:"mb-4",children:[l?"Tags":"Categories",":"]})}),Object(s.jsx)("div",{className:"col-md-12 col-lg-8",children:Object(s.jsx)("div",Object(c.a)(Object(c.a)({className:"row"},O),{},{children:null===b||void 0===b?void 0:b.items.item.map((function(e){return Object(s.jsx)("div",{className:"col-md-6 mb-4",children:Object(s.jsx)(u,{category:e,isTag:l})},e.key)}))}))})]})})}a.default=function(e){var a=e.model,t=e.match,c=e.meta,o=c.siteTitle,O=c.socialLinks,u="/tag/:id?"===t.path,x=Object(n.useState)(),h=Object(r.a)(x,2),f=h[0],v=h[1],N=Object(m.i)();return Object(n.useEffect)((function(){"/category/:id?"!==t.path&&"/tag/:id?"!==t.path||v(t.params.id)}),[t.params,t.path]),Object(s.jsx)(i.a,{siteTitle:o,socialLinks:O,children:Object(s.jsx)("section",{className:"site-section pt-5",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row blog-entries",children:[Object(s.jsx)(n.Suspense,{fallback:Object(s.jsx)(g.a,{screenHeight:!1}),children:Object(s.jsx)(p,{resource:N,categoryId:f,isTag:u})}),Object(s.jsxs)("div",{className:"col-md-12 col-lg-4 sidebar",children:[Object(s.jsx)(d.a,{}),Object(s.jsx)(j.a,{model:a,fieldId:"bios_o"}),Object(s.jsx)(l.a,{}),Object(s.jsx)(b.a,{}),Object(s.jsx)(b.b,{})]})]})})})})}}}]);
//# sourceMappingURL=7.3cdcaae4.chunk.js.map