(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[0],{187:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r,n,l=t(0),s=t(5),i=t(86),o=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(n||(n={}));function c(e){var a=function(a){return l.createElement(i.a.Consumer,null,(function(t){Object(s.f)(t);var r=a.value,n=a.children,l=o(a,["value","children"]),i="string"===typeof r?new Date(r||0):r;return n("formatDate"===e?t.formatDateToParts(i,l):t.formatTimeToParts(i,l))}))};return a.displayName=n[e],a}function u(e){var a=function(a){return l.createElement(i.a.Consumer,null,(function(t){Object(s.f)(t);var r=a.value,n=a.children,i=o(a,["value","children"]),c=t[e](r,i);if("function"===typeof n)return n(c);var u=t.textComponent||l.Fragment;return l.createElement(u,null,c)}))};return a.displayName=r[e],a}function m(e){return e}u("formatDate"),u("formatTime"),u("formatNumber"),u("formatList"),u("formatDisplayName"),c("formatDate"),c("formatTime")},192:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"c",(function(){return m})),t.d(a,"a",(function(){return d}));var r=t(4),n=t(0),l=t.n(n),s=t(25),i=t(195),o=t(73),c=t(11),u="landscape",m="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,n=Object(i.a)().formatDate,f=Object(c.b)(),p=Object(r.a)(f,1)[0].isAuthoring,g=e.classes,b=e.parentModelId,v=e.format,h=void 0===v?"portrait":v,C=e.showBlurb,N=void 0!==C&&C,y=e.numOfComments,k=e.model,E=e.model,P=Object(r.a)(E.authorBio_o,1)[0],O=P.name_s,x=P.profilePic_s,L=E.blurb_t,j=E.headline_s,D=E.mainImage_s,_=E.mainImageAlt_s,w=void 0===_?"":_,T=E.categories_o,M=E.craftercms.dateModified,F=k.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace(".xml",""),B=Object(o.b)({model:k,parentModelId:b,isAuthoring:p}).props;switch(h){case"portrait":return l.a.createElement(s.b,Object.assign({to:F,className:"blog-entry ".concat(null!==(a=null===g||void 0===g?void 0:g.root)&&void 0!==a?a:"")},B),l.a.createElement("img",{src:D,alt:w}),l.a.createElement("div",{className:"blog-content-body"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:x,alt:""})," ",O)," \u2022 ",l.a.createElement("span",{className:"mr-2"},n(M)),y&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",y))),l.a.createElement("h2",null,j)));case u:return l.a.createElement("div",Object.assign({className:"post-entry-horizontal"},B),l.a.createElement(s.b,{to:F,className:null===g||void 0===g?void 0:g.root},l.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(D,")")}}),l.a.createElement("span",{className:"text"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:x,alt:""})," ",O),"\u2022 ",l.a.createElement("span",{className:"mr-2"},n(M)),y&&l.a.createElement(l.a.Fragment,null,"\u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," $",y))),l.a.createElement("h2",null,j))));case m:return l.a.createElement(s.b,Object.assign({to:F,className:null===g||void 0===g?void 0:g.root},B),l.a.createElement("img",{src:D,alt:w,className:"mr-4"}),l.a.createElement("div",{className:"text"},l.a.createElement("h4",null,j),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"mr-2"},n(M)))));case d:return l.a.createElement(s.b,{to:F,className:"a-block d-flex align-items-center ".concat(null!==(t=null===g||void 0===g?void 0:g.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(D,")")}},l.a.createElement("div",Object.assign({className:"text ".concat(null===g||void 0===g?void 0:g.innerWrapper)},B),l.a.createElement("div",{className:"post-meta"},T&&l.a.createElement(l.a.Fragment,null,null===T||void 0===T?void 0:T.map((function(e){return l.a.createElement("span",{className:"category",key:e.key},e.value_smv)}))," \u2022 "),l.a.createElement("span",{className:"mr-2"},n(M)),y&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",y))),l.a.createElement("h3",null,j),N&&l.a.createElement("p",null,L)));default:return console.error('Unknown PostCard format "'.concat(h,'" on post "').concat(j,'"')),l.a.createElement(s.b,Object.assign({to:F,className:null===g||void 0===g?void 0:g.root},B),l.a.createElement("h2",null,j))}}},195:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(0),n=t(86),l=t(5);function s(){var e=Object(r.useContext)(n.a);return Object(l.f)(e),e}},197:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(198),s=t(192),i=t(17);a.a=function(){var e=Object(i.f)();return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"common.popularPostsTitle",defaultMessage:"Recent Posts"})),n.a.createElement("div",{className:"post-entry-sidebar"},n.a.createElement("ul",null,null===e||void 0===e?void 0:e.map((function(e){return n.a.createElement("li",{key:e.craftercms.id},n.a.createElement(s.d,{model:e,format:s.c}))})))))}},198:function(e,a,t){"use strict";var r=t(90),n=t(60),l=t(88),s=t(62),i=t(61),o=t(0),c=t(86),u=t(89),m=t(5),d=t(74),f=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t},p=t.n(d).a||d;function g(e,a){return Object(u.a)(Object.assign(Object.assign({},m.a),{locale:"en"}),Object(m.b)(),e,a)}var b=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,r=f(a,["values"]),n=e.values,l=f(e,["values"]);return!p(n,t)||!p(r,l)}},{key:"render",value:function(){var e=this;return o.createElement(c.a.Consumer,null,(function(a){e.props.defaultMessage||Object(m.f)(a);var t=a||{},n=t.formatMessage,l=void 0===n?g:n,s=t.textComponent,i=void 0===s?o.Fragment:s,c=e.props,u=c.id,d=c.description,f=c.defaultMessage,p=c.values,b=c.children,v=c.tagName,h=void 0===v?i:v,C=l({id:u,description:d,defaultMessage:f},p);return Array.isArray(C)||(C=[C]),"function"===typeof b?b.apply(void 0,Object(r.a)(C)):h?o.createElement.apply(o,[h,null].concat(Object(r.a)(C))):C}))}}]),t}(o.Component);b.displayName="FormattedMessage",b.defaultProps={values:{}},a.a=b},199:function(e,a,t){"use strict";t.d(a,"b",(function(){return d})),t.d(a,"a",(function(){return f}));var r=t(0),n=t.n(r),l=t(198),s=t(17),i=t(15),o=t(59),c=t(36);function u(e){var a=e.filter,t=e.baseUrl,r=e.listClass,l=e.resource.read().data,i=Object(c.a)(l.taxonomy.items).filter(a)[0],o=Object(s.d)({model:i});return n.a.createElement("ul",Object.assign({className:r},o),null===i||void 0===i?void 0:i.items.item.map((function(e){return n.a.createElement("li",{key:e.key},n.a.createElement("a",{href:"".concat(t,"/").concat(e.key)},e.value))})))}function m(e){var a=e.title,t=e.filter,l=e.baseUrl,i=e.listClass,c=Object(s.i)();return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},a),n.a.createElement(r.Suspense,{fallback:n.a.createElement(o.a,{screenHeight:!1})},n.a.createElement(u,{resource:c,filter:t,baseUrl:l,listClass:i})))}function d(){return n.a.createElement(m,{title:n.a.createElement(l.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"}),filter:Object(i.c)("tags.xml"),baseUrl:"/tag",listClass:"tags"})}function f(){return n.a.createElement(m,{title:n.a.createElement(l.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"}),filter:Object(i.c)("categories.xml"),baseUrl:"/category",listClass:"categories"})}},200:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(187),s=t(195),i=t(94),o=Object(l.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(s.a)().formatMessage;return n.a.createElement("div",{className:"sidebar-box search-form-wrap"},n.a.createElement(i.a,{id:"s",placeholder:e(o.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},203:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(205),s=t.n(l);a.a=function(e){var a=e.pageCount,t=e.onPageChange;return n.a.createElement(s.a,{containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:0,pageCount:a,onPageChange:function(e){var a=e.selected;return t(a)},disableInitialCallback:!0,previousLabel:n.a.createElement("span",null,"<"),nextLabel:n.a.createElement("span",null,">")})}},205:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r,n=t(206),l=(r=n)&&r.__esModule?r:{default:r};a.default=l.default},206:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),n=t(0),l=c(n),s=c(t(49)),i=c(t(207)),o=c(t(208));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,s=a.marginPagesDisplayed,i=a.breakLabel,c=a.breakClassName,u=a.breakLinkClassName,m=t.state.selected;if(n<=r)for(var d=0;d<n;d++)e.push(t.getPageElement(d));else{var f=r/2,p=r-f;m>n-r/2?f=r-(p=n-m):m<r/2&&(p=r-(f=m));var g=void 0,b=void 0,v=void 0,h=function(e){return t.getPageElement(e)};for(g=0;g<n;g++)(b=g+1)<=s||b>n-s||g>=m-f&&g<=m+p?e.push(h(g)):i&&e[e.length-1]!==v&&(v=l.default.createElement(o.default,{key:g,breakLabel:i,breakClassName:c,breakLinkClassName:u,onClick:t.handleBreakClick.bind(null,g)}),e.push(v))}return e};var r=void 0;return r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),r(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,s=t.activeClassName,o=t.activeLinkClassName,c=t.extraAriaContext;return l.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,r=e.nextClassName,n=e.pageCount,s=e.containerClassName,i=e.previousLinkClassName,o=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,m=this.state.selected,d=t+(0===m?" "+a:""),f=r+(m===n-1?" "+a:""),p=0===m?"true":"false",g=m===n-1?"true":"false";return l.default.createElement("ul",{className:s},l.default.createElement("li",{className:d},l.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":p},o)),this.pagination(),l.default.createElement("li",{className:f},l.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":g},u)))}}]),a}(n.Component);u.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=u},207:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=l(t(0)),n=l(t(49));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.onClick,l=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",s=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),r.default.createElement("li",{className:a},r.default.createElement("a",{onClick:n,role:"button",className:t,href:l,tabIndex:"0","aria-label":s,"aria-current":i,onKeyPress:n},e.page))};s.propTypes={onClick:n.default.func.isRequired,selected:n.default.bool.isRequired,pageClassName:n.default.string,pageLinkClassName:n.default.string,activeClassName:n.default.string,activeLinkClassName:n.default.string,extraAriaContext:n.default.string,href:n.default.string,ariaLabel:n.default.string,page:n.default.number.isRequired},a.default=s},208:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=l(t(0)),n=l(t(49));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,l=e.onClick,s=t||"break";return r.default.createElement("li",{className:s},r.default.createElement("a",{className:n,onClick:l,role:"button",tabIndex:"0",onKeyPress:l},a))};s.propTypes={breakLabel:n.default.oneOfType([n.default.string,n.default.node]),breakClassName:n.default.string,breakLinkClassName:n.default.string,onClick:n.default.func.isRequired},a.default=s}}]);
//# sourceMappingURL=0.375f836e.chunk.js.map