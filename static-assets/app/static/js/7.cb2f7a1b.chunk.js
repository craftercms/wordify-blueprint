(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[7,11],{184:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return d}));var r=t(9),n=t(0),l=t.n(n),c=t(5),s=t(185),m=t(70),o=t(20),i="landscape",u="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,n=Object(s.a)().formatDate,p=Object(o.b)(),E=Object(r.a)(p,1)[0].isAuthoring,f=e.classes,v=e.parentModelId,b=e.format,g=void 0===b?"portrait":b,N=e.showBlurb,h=void 0!==N&&N,y=e.tags,O=void 0===y?"":y,j=e.numOfComments,k=e.model,_=e.model,w=Object(r.a)(_.authorBio_o,1)[0],x=w.name_s,M=w.profilePic_s,F=_.blurb_t,C=_.headline_s,P=_.mainImage_s,T=_.mainImageAlt_s,I=void 0===T?"":T,B=_.craftercms.dateModified,A=k.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace("post/","articles/"),L=Object(m.b)({model:k,parentModelId:v,isAuthoring:E}).props;switch(g){case"portrait":return l.a.createElement(c.b,Object.assign({to:A,className:"blog-entry ".concat(null!==(a=null===f||void 0===f?void 0:f.root)&&void 0!==a?a:"")},L),l.a.createElement("img",{src:P,alt:I}),l.a.createElement("div",{className:"blog-content-body"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:M,alt:""})," ",x)," \u2022 ",l.a.createElement("span",{className:"mr-2"},n(B)),j&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",j))),l.a.createElement("h2",null,C)));case i:return l.a.createElement("div",Object.assign({className:"post-entry-horizontal"},L),l.a.createElement(c.b,{to:A,className:null===f||void 0===f?void 0:f.root},l.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(P,")")}}),l.a.createElement("span",{className:"text"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:M,alt:""})," ",x),"\u2022 ",l.a.createElement("span",{className:"mr-2"},n(B)),j&&l.a.createElement(l.a.Fragment,null,"\u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," $",j))),l.a.createElement("h2",null,C))));case u:return l.a.createElement(c.b,Object.assign({to:A,className:null===f||void 0===f?void 0:f.root},L),l.a.createElement("img",{src:P,alt:I,className:"mr-4"}),l.a.createElement("div",{className:"text"},l.a.createElement("h4",null,C),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"mr-2"},n(B)))));case d:return l.a.createElement(c.b,{to:A,className:"a-block d-flex align-items-center ".concat(null!==(t=null===f||void 0===f?void 0:f.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(P,")")}},l.a.createElement("div",Object.assign({className:"text ".concat(null===f||void 0===f?void 0:f.innerWrapper)},L),l.a.createElement("div",{className:"post-meta"},O&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"category"},O)," \u2022 "),l.a.createElement("span",{className:"mr-2"},n(B)),j&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",j))),l.a.createElement("h3",null,C),h&&l.a.createElement("p",null,F)));default:return console.error('Unknown PostCard format "'.concat(g,'" on post "').concat(C,'"')),l.a.createElement(c.b,Object.assign({to:A,className:null===f||void 0===f?void 0:f.root},L),l.a.createElement("h2",null,C))}}},185:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(0),n=t(84),l=t(4);function c(){var e=Object(r.useContext)(n.a);return Object(l.f)(e),e}},186:function(e,a,t){"use strict";var r=t(88),n=t(55),l=t(86),c=t(57),s=t(56),m=t(0),o=t(84),i=t(87),u=t(4),d=t(71),p=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t},E=t.n(d).a||d;function f(e,a){return Object(i.a)(Object.assign(Object.assign({},u.a),{locale:"en"}),Object(u.b)(),e,a)}var v=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,r=p(a,["values"]),n=e.values,l=p(e,["values"]);return!E(n,t)||!E(r,l)}},{key:"render",value:function(){var e=this;return m.createElement(o.a.Consumer,null,(function(a){e.props.defaultMessage||Object(u.f)(a);var t=a||{},n=t.formatMessage,l=void 0===n?f:n,c=t.textComponent,s=void 0===c?m.Fragment:c,o=e.props,i=o.id,d=o.description,p=o.defaultMessage,E=o.values,v=o.children,b=o.tagName,g=void 0===b?s:b,N=l({id:i,description:d,defaultMessage:p},E);return Array.isArray(N)||(N=[N]),"function"===typeof v?v.apply(void 0,Object(r.a)(N)):g?m.createElement.apply(m,[g,null].concat(Object(r.a)(N))):N}))}}]),t}(m.Component);v.displayName="FormattedMessage",v.defaultProps={values:{}},a.a=v},187:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186),c=t(184);a.a=function(e){var a=e.posts;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"common.popularPostsTitle",defaultMessage:"Popular Posts"})),n.a.createElement("div",{className:"post-entry-sidebar"},n.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement("li",{key:e.craftercms.id},n.a.createElement(c.d,{model:e,format:c.c}))})))))}},188:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186);a.a=function(e){var a=e.categories;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"})),n.a.createElement("ul",{className:"categories"},null===a||void 0===a?void 0:a.map((function(e,a){return n.a.createElement("li",{key:e.key},n.a.createElement("a",{href:"/"},e.value," ",n.a.createElement("span",null,"(12)")))}))))}},189:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186);a.a=function(e){var a=e.tags;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"})),n.a.createElement("ul",{className:"tags"},null===a||void 0===a?void 0:a.map((function(e,a){return n.a.createElement("li",{key:e.key},n.a.createElement("a",{href:"/"},e.value))}))))}},190:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r);a.default=function(e){var a=e.ice,t=e.model,r=t.bio_t,l=t.name_s,c=t.profilePic_s,s=t.linkButtonText_s,m=t.linkButtonUrl_s,o=t.showLinkButton_b,i=t.facebookLink_s,u=t.twitterLink_s,d=t.instagramLink_s,p=t.youTubeLink_s;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",Object.assign({className:"bio text-center"},a),n.a.createElement("img",{src:c,alt:"",className:"img-fluid"}),n.a.createElement("div",{className:"bio-body"},n.a.createElement("h2",null,l),n.a.createElement("p",null,r),o&&n.a.createElement("p",null,n.a.createElement("a",{href:m,className:"btn btn-primary btn-sm rounded"},s)),n.a.createElement("p",{className:"social"},i&&n.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-facebook"})),u&&n.a.createElement("a",{href:u,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-twitter"})),d&&n.a.createElement("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-instagram"})),p&&n.a.createElement("a",{href:p,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},193:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(190),c=t(23);function s(e){var a=e.model,t=Object(c.c)(e);return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement(l.default,{ice:t,model:a}))}a.a=function(e){var a=e.bios;return n.a.createElement(n.a.Fragment,null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement(s,{key:e.craftercms.id,model:e})})))}},199:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(85),c=t(187),s=t(193),m=t(188),o=t(189);a.default=function(e){var a=e.bios_o,t=e.posts,r=e.categories,i=e.tags;return n.a.createElement(l.a,null,n.a.createElement("section",{className:"site-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h1",null,"Contact Me"))),n.a.createElement("div",{className:"row blog-entries"},n.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},n.a.createElement("form",{action:"#",method:"post"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",id:"name",className:"form-control "})),n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"phone"},"Phone"),n.a.createElement("input",{type:"text",id:"phone",className:"form-control "})),n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",className:"form-control "}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"message"},"Write Message"),n.a.createElement("textarea",{name:"message",id:"message",className:"form-control ",cols:"30",rows:"8"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 form-group"},n.a.createElement("input",{type:"submit",value:"Send Message",className:"btn btn-primary"}))))),n.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},n.a.createElement("div",{className:"sidebar-box search-form-wrap"},n.a.createElement("form",{action:"#",className:"search-form"},n.a.createElement("div",{className:"form-group"},n.a.createElement("span",{className:"icon fa fa-search"}),n.a.createElement("input",{type:"text",className:"form-control",id:"s",placeholder:"Type a keyword and hit enter"})))),n.a.createElement(s.a,{bios:a}),n.a.createElement(c.a,{posts:t}),n.a.createElement(m.a,{categories:r}),n.a.createElement(o.a,{tags:i}))))))}}}]);
//# sourceMappingURL=7.cb2f7a1b.chunk.js.map