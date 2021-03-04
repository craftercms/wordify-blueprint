(this["webpackJsonp@craftercms/wordify-react"]=this["webpackJsonp@craftercms/wordify-react"]||[]).push([[5,11],{145:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14);a.default=function(e){var a=e.model,t=e.model,n=t.linkButtonText_s,c=t.showLinkButton_b,o=t.facebookLink_s,m=t.twitterLink_s,s=t.instagramLink_s,i=t.youTubeLink_s;return l.a.createElement(r.b,{className:"bio text-center",model:a},l.a.createElement(r.d,{component:"img",renderTarget:"src",model:a,fieldId:"profilePic_s",className:"img-fluid",alt:""}),l.a.createElement("div",{className:"bio-body"},l.a.createElement(r.d,{component:"h2",model:a,fieldId:"name_s"}),c&&n&&l.a.createElement("p",null,l.a.createElement(r.d,{component:"a",model:a,fieldId:"linkButtonText_s,linkButtonUrl_s",renderTarget:"children,href",className:"btn btn-primary btn-sm rounded bio-link"})),l.a.createElement(r.d,{component:"p",model:a,fieldId:"bio_t"}),l.a.createElement("p",{className:"social"},o&&l.a.createElement("a",{href:o,className:"p-2",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"fa fa-facebook"})),m&&l.a.createElement("a",{href:m,className:"p-2",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"fa fa-twitter"})),s&&l.a.createElement("a",{href:s,className:"p-2",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"fa fa-instagram"})),i&&l.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"fa fa-youtube-play"})))))}},150:function(e,a,t){"use strict";t.r(a);var n=t(42),l=t(2),r=t(0),c=t.n(r),o=t(81),m=t(165),s=t(172),i=t(166),d=t(170),u=t(168),f=t(14),p=t(83),E=t(167),g=t(169),b=t(36);a.default=function(e){var a=e.model,t=e.meta.levelDescriptor,v=Object(r.useState)({itemsPerPage:10,currentPage:0}),N=Object(l.a)(v,2),h=N[0],k=N[1],_=Object(b.c)(h);return c.a.createElement(o.a,{model:t},c.a.createElement("section",{className:"site-section pt-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row blog-entries"},c.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(f.d,{component:"h2",model:a,fieldId:"headline_s",className:"mb-4"}),c.a.createElement(f.d,{model:a,fieldId:"content_o",format:function(e){return null===e||void 0===e?void 0:e.map((function(e,t){return c.a.createElement(f.b,{key:"".concat(e.craftercms.id,"_").concat(t),className:"mb-5",model:a,fieldId:"content_o",index:t},c.a.createElement(f.a,{model:e,contentTypeMap:p.a}))}))}}))),c.a.createElement("div",{className:"row mb-5 mt-5"},c.a.createElement("div",{className:"col-md-12 mb-5"},c.a.createElement("h2",null,c.a.createElement(s.a,{id:"common.latestPostSectionTitle",defaultMessage:"Latest Posts"}))),c.a.createElement("div",{className:"col-md-12"},null===_||void 0===_?void 0:_.items.map((function(e){return c.a.createElement(m.d,{model:e,format:m.b,key:e.craftercms.id})})))),(null===_||void 0===_?void 0:_.pageCount)>1&&c.a.createElement("nav",{"aria-label":"Posts navigation",className:"text-center"},c.a.createElement(g.a,{pageCount:_.pageCount,onPageChange:function(e){return k(Object(n.a)(Object(n.a)({},h),{},{currentPage:e*h.itemsPerPage}))}}))),c.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},c.a.createElement(u.a,null),c.a.createElement(d.a,{model:a,fieldId:"bios_o"}),c.a.createElement(i.a,null),c.a.createElement(E.a,null),c.a.createElement(E.b,null))))))}},165:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return d}));var n=t(0),l=t.n(n),r=t(32),c=t(171),o=t(14),m="portrait",s="landscape",i="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,n=Object(c.a)().formatDate,u=e.classes,f=e.format,p=void 0===f?m:f,E=e.showBlurb,g=void 0!==E&&E,b=e.numOfComments,v=e.model,N=e.model,h=N.headline_s,k=N.mainImageAlt_s,_=void 0===k?"":k,y=N.categories_o,I=N.authorBio_o,x=N.craftercms.dateModified,C=null===I||void 0===I?void 0:I[0],P=l.a.createElement("div",{className:"post-meta"},l.a.createElement(o.b,{component:"span",model:v,fieldId:"authorBio_o",index:0,className:"author mr-2"},l.a.createElement(o.b,{component:"span",model:C},l.a.createElement(o.d,{component:"img",model:C,renderTarget:"src",fieldId:"profilePic_s",alt:""})," ",l.a.createElement(o.d,{component:"span",model:C,fieldId:"name_s"})))," \u2022 ",l.a.createElement("span",{className:"mr-2"},n(x)),b&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",b))),T=v.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace(".xml","");switch(p){case m:return l.a.createElement(o.b,{component:r.b,model:v,to:T,className:"blog-entry ".concat(null!==(a=null===u||void 0===u?void 0:u.root)&&void 0!==a?a:"")},l.a.createElement("div",{className:"img-container"},l.a.createElement(o.d,{component:"img",model:v,renderTarget:"src",fieldId:"mainImage_s",alt:_})),l.a.createElement("div",{className:"blog-content-body"},P,l.a.createElement(o.d,{component:"h2",model:v,fieldId:"headline_s"})));case s:return l.a.createElement("div",{className:"post-entry-horizontal"},l.a.createElement(o.b,{component:r.b,model:v,to:T,className:null===u||void 0===u?void 0:u.root},l.a.createElement(o.d,{model:v,fieldId:"mainImage_s",renderTarget:"style.backgroundImage",format:function(e){return'url("'.concat(e,'")')},className:"image"}),l.a.createElement("span",{className:"text"},P,l.a.createElement(o.d,{component:"h2",fieldId:"headline_s",model:v}))));case i:return l.a.createElement(o.b,{component:r.b,model:v,to:T,className:null===u||void 0===u?void 0:u.root},l.a.createElement(o.d,{component:"img",renderTarget:"src",model:v,fieldId:"mainImage_s",className:"mr-4",alt:""}),l.a.createElement("div",{className:"text"},l.a.createElement(o.d,{component:"h4",model:v,fieldId:"headline_s"}),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"mr-2"},n(x)))));case d:return l.a.createElement(o.d,{model:v,fieldId:"mainImage_s",renderTarget:"style",className:"a-block d-flex align-items-center ".concat(null!==(t=null===u||void 0===u?void 0:u.root)&&void 0!==t?t:""),format:function(e){return{backgroundImage:'url("'.concat(e,'")')}}},l.a.createElement(o.b,{component:r.b,model:v,to:T,className:"text ".concat(null===u||void 0===u?void 0:u.innerWrapper)},l.a.createElement("div",{className:"post-meta"},y&&l.a.createElement(l.a.Fragment,null,null===y||void 0===y?void 0:y.map((function(e){return l.a.createElement("span",{className:"category",key:e.key},e.value_smv)}))," \u2022 "),l.a.createElement("span",{className:"mr-2"},n(x)),b&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",b))),l.a.createElement(o.d,{component:"h3",model:v,fieldId:"headline_s"}),g&&l.a.createElement(o.d,{component:"p",model:v,fieldId:"blurb_t"})));default:return console.error('Unknown PostCard format "'.concat(p,'" on post "').concat(h,'"')),l.a.createElement(o.b,{component:r.b,model:v,to:T,className:null===u||void 0===u?void 0:u.root},l.a.createElement("h2",null,h))}}},166:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(172),c=t(165),o=t(36);a.a=function(){var e=Object(o.d)();return l.a.createElement("div",{className:"sidebar-box"},l.a.createElement("h3",{className:"heading"},l.a.createElement(r.a,{id:"common.popularPostsTitle",defaultMessage:"Latest Posts"})),l.a.createElement("div",{className:"post-entry-sidebar"},l.a.createElement("ul",null,null===e||void 0===e?void 0:e.map((function(e){return l.a.createElement("li",{key:e.craftercms.id},l.a.createElement(c.d,{model:e,format:c.c}))})))))}},167:function(e,a,t){"use strict";t.d(a,"b",(function(){return f})),t.d(a,"a",(function(){return p}));var n=t(0),l=t.n(n),r=t(172),c=t(36),o=t(17),m=t(58),s=t(24),i=t(14);function d(e){var a,t=e.title,n=e.filter,r=e.baseUrl,c=e.listClass,o=e.resource.read().data,m=Object(s.a)(o.taxonomy.items).filter(n)[0];return Array.isArray(null===m||void 0===m||null===(a=m.items)||void 0===a?void 0:a.item)&&m.items.item.length>0&&l.a.createElement("div",{className:"sidebar-box"},l.a.createElement("h3",{className:"heading"},t),l.a.createElement(i.b,{component:"ul",model:m,className:"".concat(c," clearfix")},null===m||void 0===m?void 0:m.items.item.map((function(e){return l.a.createElement("li",{key:e.key},l.a.createElement("a",{href:"".concat(r,"/").concat(e.key)},e.value))}))))}function u(e){var a=Object(c.g)();return l.a.createElement(n.Suspense,{fallback:l.a.createElement(m.a,{screenHeight:!1})},l.a.createElement(d,Object.assign({},e,{resource:a})))}function f(){return l.a.createElement(u,{title:l.a.createElement(r.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"}),filter:Object(o.c)("tags.xml"),baseUrl:"/tag",listClass:"tags"})}function p(){return l.a.createElement(u,{title:l.a.createElement(r.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"}),filter:Object(o.c)("categories.xml"),baseUrl:"/category",listClass:"categories"})}},168:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(144),c=t(171),o=t(82),m=Object(r.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(c.a)().formatMessage;return l.a.createElement("div",{className:"sidebar-box search-form-wrap"},l.a.createElement(o.a,{id:"s",placeholder:e(m.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},169:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(173),c=t.n(r);a.a=function(e){var a=e.pageCount,t=e.onPageChange;return l.a.createElement(c.a,{containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:0,pageCount:a,onPageChange:function(e){var a=e.selected;return t(a)},disableInitialCallback:!0,previousLabel:l.a.createElement("span",null,"<"),nextLabel:l.a.createElement("span",null,">")})}},170:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),l=t.n(n),r=t(145),c=t(14);function o(e){var a=e.model,t=e.fieldId;return l.a.createElement(c.d,{model:a,fieldId:t,className:"bio-zone",format:function(e){return null===e||void 0===e?void 0:e.map((function(e,n){return l.a.createElement(c.b,{key:"".concat(e.craftercms.id,"_").concat(n),model:a,fieldId:t,index:n,className:"sidebar-box"},l.a.createElement(r.default,{model:e}))}))}})}}}]);
//# sourceMappingURL=5.3caad585.chunk.js.map