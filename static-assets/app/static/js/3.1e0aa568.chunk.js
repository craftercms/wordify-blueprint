(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[3,9,11],{181:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n,r,l=t(0),c=t(4),o=t(84),s=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));function i(e){var a=function(a){return l.createElement(o.a.Consumer,null,(function(t){Object(c.f)(t);var n=a.value,r=a.children,l=s(a,["value","children"]),o="string"===typeof n?new Date(n||0):n;return r("formatDate"===e?t.formatDateToParts(o,l):t.formatTimeToParts(o,l))}))};return a.displayName=r[e],a}function m(e){var a=function(a){return l.createElement(o.a.Consumer,null,(function(t){Object(c.f)(t);var n=a.value,r=a.children,o=s(a,["value","children"]),i=t[e](n,o);if("function"===typeof r)return r(i);var m=t.textComponent||l.Fragment;return l.createElement(m,null,i)}))};return a.displayName=n[e],a}function u(e){return e}m("formatDate"),m("formatTime"),m("formatNumber"),m("formatList"),m("formatDisplayName"),i("formatDate"),i("formatTime")},184:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return d}));var n=t(9),r=t(0),l=t.n(r),c=t(5),o=t(185),s=t(70),i=t(20),m="landscape",u="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,r=Object(o.a)().formatDate,f=Object(i.b)(),p=Object(n.a)(f,1)[0].isAuthoring,v=e.classes,b=e.parentModelId,E=e.format,g=void 0===E?"portrait":E,h=e.showBlurb,N=void 0!==h&&h,y=e.tags,O=void 0===y?"":y,j=e.numOfComments,k=e.model,_=e.model,w=Object(n.a)(_.authorBio_o,1)[0],P=w.name_s,D=w.profilePic_s,I=_.blurb_t,T=_.headline_s,x=_.mainImage_s,M=_.mainImageAlt_s,F=void 0===M?"":M,C=_.craftercms.dateModified,L=k.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace("post/","articles/"),A=Object(s.b)({model:k,parentModelId:b,isAuthoring:p}).props;switch(g){case"portrait":return l.a.createElement(c.b,Object.assign({to:L,className:"blog-entry ".concat(null!==(a=null===v||void 0===v?void 0:v.root)&&void 0!==a?a:"")},A),l.a.createElement("img",{src:x,alt:F}),l.a.createElement("div",{className:"blog-content-body"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:D,alt:""})," ",P)," \u2022 ",l.a.createElement("span",{className:"mr-2"},r(C)),j&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",j))),l.a.createElement("h2",null,T)));case m:return l.a.createElement("div",Object.assign({className:"post-entry-horizontal"},A),l.a.createElement(c.b,{to:L,className:null===v||void 0===v?void 0:v.root},l.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(x,")")}}),l.a.createElement("span",{className:"text"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:D,alt:""})," ",P),"\u2022 ",l.a.createElement("span",{className:"mr-2"},r(C)),j&&l.a.createElement(l.a.Fragment,null,"\u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," $",j))),l.a.createElement("h2",null,T))));case u:return l.a.createElement(c.b,Object.assign({to:L,className:null===v||void 0===v?void 0:v.root},A),l.a.createElement("img",{src:x,alt:F,className:"mr-4"}),l.a.createElement("div",{className:"text"},l.a.createElement("h4",null,T),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"mr-2"},r(C)))));case d:return l.a.createElement(c.b,{to:L,className:"a-block d-flex align-items-center ".concat(null!==(t=null===v||void 0===v?void 0:v.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(x,")")}},l.a.createElement("div",Object.assign({className:"text ".concat(null===v||void 0===v?void 0:v.innerWrapper)},A),l.a.createElement("div",{className:"post-meta"},O&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"category"},O)," \u2022 "),l.a.createElement("span",{className:"mr-2"},r(C)),j&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",j))),l.a.createElement("h3",null,T),N&&l.a.createElement("p",null,I)));default:return console.error('Unknown PostCard format "'.concat(g,'" on post "').concat(T,'"')),l.a.createElement(c.b,Object.assign({to:L,className:null===v||void 0===v?void 0:v.root},A),l.a.createElement("h2",null,T))}}},185:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t(84),l=t(4);function c(){var e=Object(n.useContext)(r.a);return Object(l.f)(e),e}},186:function(e,a,t){"use strict";var n=t(88),r=t(55),l=t(86),c=t(57),o=t(56),s=t(0),i=t(84),m=t(87),u=t(4),d=t(71),f=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},p=t.n(d).a||d;function v(e,a){return Object(m.a)(Object.assign(Object.assign({},u.a),{locale:"en"}),Object(u.b)(),e,a)}var b=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,n=f(a,["values"]),r=e.values,l=f(e,["values"]);return!p(r,t)||!p(n,l)}},{key:"render",value:function(){var e=this;return s.createElement(i.a.Consumer,null,(function(a){e.props.defaultMessage||Object(u.f)(a);var t=a||{},r=t.formatMessage,l=void 0===r?v:r,c=t.textComponent,o=void 0===c?s.Fragment:c,i=e.props,m=i.id,d=i.description,f=i.defaultMessage,p=i.values,b=i.children,E=i.tagName,g=void 0===E?o:E,h=l({id:m,description:d,defaultMessage:f},p);return Array.isArray(h)||(h=[h]),"function"===typeof b?b.apply(void 0,Object(n.a)(h)):g?s.createElement.apply(s,[g,null].concat(Object(n.a)(h))):h}))}}]),t}(s.Component);b.displayName="FormattedMessage",b.defaultProps={values:{}},a.a=b},187:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(186),c=t(184);a.a=function(e){var a=e.posts;return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(l.a,{id:"common.popularPostsTitle",defaultMessage:"Popular Posts"})),r.a.createElement("div",{className:"post-entry-sidebar"},r.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement("li",{key:e.craftercms.id},r.a.createElement(c.d,{model:e,format:c.c}))})))))}},188:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(186);a.a=function(e){var a=e.categories;return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(l.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"})),r.a.createElement("ul",{className:"categories"},null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement("li",{key:e.key},r.a.createElement("a",{href:"/"},e.value," ",r.a.createElement("span",null,"(12)")))}))))}},189:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(186);a.a=function(e){var a=e.tags;return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(l.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"})),r.a.createElement("ul",{className:"tags"},null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement("li",{key:e.key},r.a.createElement("a",{href:"/"},e.value))}))))}},190:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n);a.default=function(e){var a=e.ice,t=e.model,n=t.bio_t,l=t.name_s,c=t.profilePic_s,o=t.linkButtonText_s,s=t.linkButtonUrl_s,i=t.showLinkButton_b,m=t.facebookLink_s,u=t.twitterLink_s,d=t.instagramLink_s,f=t.youTubeLink_s;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({className:"bio text-center"},a),r.a.createElement("img",{src:c,alt:"",className:"img-fluid"}),r.a.createElement("div",{className:"bio-body"},r.a.createElement("h2",null,l),r.a.createElement("p",null,n),i&&r.a.createElement("p",null,r.a.createElement("a",{href:s,className:"btn btn-primary btn-sm rounded"},o)),r.a.createElement("p",{className:"social"},m&&r.a.createElement("a",{href:m,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-facebook"})),u&&r.a.createElement("a",{href:u,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-twitter"})),d&&r.a.createElement("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-instagram"})),f&&r.a.createElement("a",{href:f,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},193:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(190),c=t(23);function o(e){var a=e.model,t=Object(c.c)(e);return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement(l.default,{ice:t,model:a}))}a.a=function(e){var a=e.bios;return r.a.createElement(r.a.Fragment,null,null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(o,{key:e.craftercms.id,model:e})})))}},194:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(181),c=t(185),o=t(89),s=Object(l.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(c.a)().formatMessage;return r.a.createElement("div",{className:"sidebar-box search-form-wrap"},r.a.createElement(o.a,{id:"s",placeholder:e(s.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},196:function(e,a,t){"use strict";t.r(a);var n=t(29),r=t(9),l=t(0),c=t.n(l),o=t(184),s=t(6),i=t(7);function m(e,a){a=s.b.mix(a);var t=Object(i.a)(a,a.endpoints.GET_ITEM_URL);return s.a.httpGet(t,{url:e,crafterSite:a.site})}var u={guid:"id",cmsId:"id",objectId:"id",localId:"path","file-name":"fileName",file__name:"fileName",placeInNav:"placeInNav","internal-name":"label",internal__name:"label","content-type":"contentTypeId",content__type:"contentTypeId",createdDate_dt:"dateCreated",lastModifiedDate_dt:"dateModified",disabled:"disabled"},d=["orderDefault_f","merge-strategy","display-template","objectGroupId","folder-name","createdDate","lastModifiedDate","no-template-required"],f=Object.keys(u).concat(Object.values(u));function p(e){if(null==e)return null;if(Array.isArray(e))return e.map((function(e){return p(e)}));if(e.children)return p(function e(a){return a.flatMap((function(a){return a.children?e(a.children):a}))}(e.children));if(null===e.descriptorDom&&e.descriptorUrl)throw new Error("[parseDescriptor] Invalid descriptor supplied. Did you call parseDescriptor with a `getChildren` API response? The `getChildren` API response may contain certain items that are not parsable into ContentInstances. Try a different API (getItem, getDescriptor or getTree) or filter out the metadata items which descriptorDom property has a `page` or `component` property with the content item.");return function e(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(a).forEach((function(a){var n,l,c,o=Object(r.a)(a,2),s=o[0],i=o[1];d.includes(s)||(f.includes(s)?t.craftercms[(n=u[s],null!==n&&void 0!==n?n:s)]=i:s.endsWith("_o")?(t[s]=null!==(c=null===(l=i)||void 0===l?void 0:l.item)&&void 0!==c?c:[],t[s]=t[s].map((function(a){var t=a.key,n=a.value,r=a.component;return a.component||a.key&&a.value?p(Object.assign(Object.assign({label:n},r),{path:t.startsWith("/")?t:null})):e(a)}))):t[s]=null!==i&&void 0!==i?i:null)})),t}(function(e){var a=e;if(e.descriptorDom)return Object.assign(Object.assign({},e.descriptorDom.page||e.descriptorDom.component),{path:e.url});if(e.page)return e.page;if(e.component)return e.component;return a}(e),{craftercms:{id:null,path:null,label:null,contentTypeId:null,dateCreated:null,dateModified:null}})}var v=t(23),b=t(20),E=t(26);a.default=function(e){var a=e.model,t=a.craftercms.id,s=a.posts_o,i=Object(b.b)(),u=Object(r.a)(i,1)[0].$,d=Object(v.c)(e),f=Object(l.useState)(null),g=Object(r.a)(f,2),h=g[0],N=g[1],y=null===s||void 0===s?void 0:s.reduce((function(e,a,t){var n=a.craftercms.path;return"".concat(e).concat(t?"{-}":"").concat(n)}),"");return Object(l.useEffect)((function(){var e=!1;return y&&Promise.all(y.split("{-}").map((function(e){return m(e,E.a).toPromise()}))).then(p).then((function(a){!e&&Promise.all(a.flatMap((function(e){return e.authorBio_o.map((function(e){return e.craftercms.path}))})).map((function(e){return m(e,E.a).toPromise()}))).then(p).then((function(t){!e&&N(a.map((function(e){return Object(n.a)({},e,{authorBio_o:e.authorBio_o.map((function(e){return t.find((function(a){return e.craftercms.path===a.craftercms.path}))}))})})))}))})),function(){e=!0}}),[t,y]),Object(l.useEffect)((function(){if(h){var e=u(".home-slider");return e.owlCarousel({loop:!0,autoplay:!0,margin:10,animateOut:"fadeOut",animateIn:"fadeIn",nav:!0,autoplayHoverPause:!0,items:1,navText:['<span class="ion-chevron-left"></span>','<span class="ion-chevron-right"></span>'],responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1e3:{items:1,nav:!0}}}),function(){e.owlCarousel("destroy")}}}),[h,u]),c.a.createElement("div",Object.assign({className:"owl-carousel owl-theme home-slider"},d),null===h||void 0===h?void 0:h.map((function(e){return c.a.createElement("div",{key:e.craftercms.id},c.a.createElement(o.d,{tags:"Food",model:e,showBlurb:!0,format:o.a,classes:{root:"height-lg",innerWrapper:"half-to-full"}}))})))}},197:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(85),c=t(196),o=t(186),s=t(184),i=t(193),m=t(194),u=t(187),d=t(188),f=t(189),p=t(5),v=t(48);a.default=function(e){var a,t=e.model,n=t.craftercms.path,b=t.bios_o,E=t.slider_o,g=e.posts,h=e.categories,N=e.tags,y=e.meta.posts,O=y.total,j=y.limit,k=parseInt(null!==(a=Object(v.parse)(window.location.search).page)&&void 0!==a?a:1),_=k-1,w=Math.ceil(O/j);return r.a.createElement(l.a,null,r.a.createElement("section",{className:"site-section pt-5 pb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},null===E||void 0===E?void 0:E.map((function(e,a){return r.a.createElement("div",{className:"col-md-12",key:a},r.a.createElement(c.default,{model:e,parentModelId:n}))}))))),r.a.createElement("section",{className:"site-section py-sm"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"mb-4"},r.a.createElement(o.a,{id:"common.latestPostSectionTitle",defaultMessage:"Latest Posts"})))),r.a.createElement("div",{className:"row blog-entries"},r.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},r.a.createElement("div",{className:"row"},null===g||void 0===g?void 0:g.map((function(e){return r.a.createElement("div",{className:"col-md-6",key:e.craftercms.id},r.a.createElement(s.d,{model:e}))}))),w>1&&r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("nav",{"aria-label":"Page navigation",className:"text-center"},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item",style:{visibility:k>1?"":"hidden"}},r.a.createElement(p.b,{onClick:function(e){return e.preventDefault()},className:"page-link",to:"/?page=".concat(k-1)},"<")),new Array(w).fill(null).map((function(e,a){return r.a.createElement("li",{className:"page-item ".concat(a===_?"active":""),key:a},r.a.createElement(p.b,{className:"page-link",to:"/?page=".concat(a+1)},a+1))})),r.a.createElement("li",{className:"page-item",style:{visibility:k<w?"":"hidden"}},r.a.createElement(p.b,{className:"page-link",to:"/?page=".concat(k+1)},">"))))))),r.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},r.a.createElement(m.a,null),r.a.createElement(i.a,{bios:b}),r.a.createElement(u.a,{posts:g}),r.a.createElement(d.a,{categories:h}),r.a.createElement(f.a,{tags:N}))))))}}}]);
//# sourceMappingURL=3.1e0aa568.chunk.js.map