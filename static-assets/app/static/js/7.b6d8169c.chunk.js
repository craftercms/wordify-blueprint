(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[7,11],{193:function(e,a,t){"use strict";var n=t(31),r=t(17),l=t(0),c=t.n(l);a.a=function(e){var a=Object(r.a)(e),t=e.component,l=void 0===t?"div":t,m=Object(n.a)({},e);return delete m.model,delete m.component,delete m.fieldId,c.a.createElement(l,Object.assign({},a,m))}},194:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n);a.default=function(e){var a=e.ice,t=e.model,n=t.bio_t,l=t.name_s,c=t.profilePic_s,m=t.linkButtonText_s,s=t.linkButtonUrl_s,i=t.showLinkButton_b,o=t.facebookLink_s,d=t.twitterLink_s,u=t.instagramLink_s,f=t.youTubeLink_s;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({className:"bio text-center"},a),r.a.createElement("img",{src:c,alt:"",className:"img-fluid"}),r.a.createElement("div",{className:"bio-body"},r.a.createElement("h2",null,l),r.a.createElement("p",null,n),i&&r.a.createElement("p",null,r.a.createElement("a",{href:s,className:"btn btn-primary btn-sm rounded"},m)),r.a.createElement("p",{className:"social"},o&&r.a.createElement("a",{href:o,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-facebook"})),d&&r.a.createElement("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-twitter"})),u&&r.a.createElement("a",{href:u,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-instagram"})),f&&r.a.createElement("a",{href:f,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},196:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(194),c=t(17),m=t(193);function s(e){var a=e.model,t=Object(c.d)(e);return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement(l.default,{ice:t,model:a}))}a.a=function(e){var a,t=e.model,n=e.fieldId;return r.a.createElement(m.a,{model:t,component:"div",fieldId:n,style:{float:"left"}},null===(a=t[n])||void 0===a?void 0:a.map((function(e){return r.a.createElement(s,{key:e.craftercms.id,model:e})})))}},216:function(e,a,t){"use strict";t.r(a);var n=t(31),r=t(4),l=t(0),c=t.n(l),m=t(87),s=t(197),i=t(192),o=t(196),d=t(200),u=t(199),f=t(17),E=t(25),g=function(e){var a=e.category,t=e.isTag?"tag":"category";return c.a.createElement(E.b,{to:"/".concat(t,"/").concat(a.key),className:"blog-entry category-card"},a.image_s&&c.a.createElement("img",{className:"background",src:a.image_s,alt:a.value}),c.a.createElement("h2",{className:"title"},a.value))},b=t(36),v=t(15),p=t(59),N=t(203);function k(e){var a,t,m=e.resource,s=e.isTag,o=e.categoryId,d=m.read().data,u=Object(b.a)(d.taxonomy.items).filter(Object(v.c)(s?"tags.xml":"categories.xml"))[0],E=Object(f.d)({model:u}),p=Object(l.useState)({itemsPerPage:10,currentPage:0}),k=Object(r.a)(p,2),y=k[0],h=k[1];o&&(t=null===u||void 0===u?void 0:u.items.item.filter((function(e){return e.key===o}))[0]);var j=Object(f.e)(y,t);return c.a.createElement(c.a.Fragment,null,o?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h2",{className:"mb-4"},s?"Tag":"Category",": ",null===(a=t)||void 0===a?void 0:a.value)),c.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},c.a.createElement("div",{className:"row mb-5 mt-5"},c.a.createElement("div",{className:"col-md-12"},null===j||void 0===j?void 0:j.items.map((function(e){return c.a.createElement(i.d,{key:e.craftercms.id,model:e,format:i.b})})))),(null===j||void 0===j?void 0:j.pageCount)>1&&c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col-md-12 text-center"},c.a.createElement("nav",{"aria-label":"Categories navigation",className:"text-center"},c.a.createElement(N.a,{pageCount:j.pageCount,onPageChange:function(e){return h(Object(n.a)({},y,{currentPage:e*y.itemsPerPage}))}})))))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h2",{className:"mb-4"},s?"Tags":"Categories",":")),c.a.createElement("div",{className:"col-md-12 col-lg-8"},c.a.createElement("div",Object.assign({className:"row"},E),null===u||void 0===u?void 0:u.items.item.map((function(e){return c.a.createElement("div",{className:"col-md-6 mb-4",key:e.key},c.a.createElement(g,{category:e,isTag:s}))}))))))}a.default=function(e){var a=e.model,t=e.match,n=e.meta,i=n.siteTitle,E=n.socialLinks,g="/tag/:id?"===t.path,b=Object(l.useState)(),v=Object(r.a)(b,2),N=v[0],y=v[1],h=Object(f.i)();return Object(l.useEffect)((function(){"/category/:id?"!==t.path&&"/tag/:id?"!==t.path||y(t.params.id)}),[t.params,t.path]),c.a.createElement(m.a,{siteTitle:i,socialLinks:E},c.a.createElement("section",{className:"site-section pt-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row blog-entries"},c.a.createElement(l.Suspense,{fallback:c.a.createElement(p.a,{screenHeight:!1})},c.a.createElement(k,{resource:h,categoryId:N,isTag:g})),c.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},c.a.createElement(d.a,null),c.a.createElement(o.a,{model:a,fieldId:"bios_o"}),c.a.createElement(s.a,null),c.a.createElement(u.a,null),c.a.createElement(u.b,null))))))}}}]);
//# sourceMappingURL=7.b6d8169c.chunk.js.map