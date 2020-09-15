(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[5],{213:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t(3),r=t(0),s=t.n(r),i=t(230),o=t(232),c=t(222),u=t(223),d=t(233),m=t(107),f=t(95),p=t(94),g=function(e){var a=e.model,t=e.category,l=e.isTag?"tag":"category";return s.a.createElement(p.b,{component:f.b,model:a,to:"/".concat(l,"/").concat(t.key),className:"blog-entry category-card"},t.image_s&&s.a.createElement("img",{className:"background",src:t.image_s,alt:t.value}),s.a.createElement("h2",{className:"title"},t.value))},b=t(33),v=t(16),C=t(76),h=t(231),N=t(225);function k(e){var a,t,i=e.resource,o=e.isTag,u=e.categoryId,d=i.read().data,f=Object(b.a)(d.taxonomy.items).filter(Object(v.c)(o?"tags.xml":"categories.xml"))[0],C=Object(r.useState)({itemsPerPage:10,currentPage:0}),h=Object(n.a)(C,2),k=h[0],y=h[1];u&&(t=null===f||void 0===f?void 0:f.items.item.filter((function(e){return e.key===u}))[0]);var P=Object(m.c)(k,t);return s.a.createElement(s.a.Fragment,null,u?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h2",{className:"mb-4"},o?"Tag":"Category",": ",null===(a=t)||void 0===a?void 0:a.value)),s.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},s.a.createElement("div",{className:"row mb-5 mt-5"},s.a.createElement("div",{className:"col-md-12"},null===P||void 0===P?void 0:P.items.map((function(e){return s.a.createElement(c.d,{key:e.craftercms.id,model:e,format:c.b})})))),(null===P||void 0===P?void 0:P.pageCount)>1&&s.a.createElement("div",{className:"row mt-5"},s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("nav",{"aria-label":"Categories navigation",className:"text-center"},s.a.createElement(N.a,{pageCount:P.pageCount,onPageChange:function(e){return y(Object(l.a)({},k,{currentPage:e*k.itemsPerPage}))}})))))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h2",{className:"mb-4"},o?"Tags":"Categories",":")),s.a.createElement("div",{className:"col-md-12 col-lg-8"},s.a.createElement(p.b,{model:f,className:"row"},null===f||void 0===f?void 0:f.items.item.map((function(e){return s.a.createElement("div",{className:"col-md-6 mb-4",key:e.key},s.a.createElement(g,{model:f,category:e,isTag:o}))}))))))}a.default=function(e){var a=e.match,t=e.model,l=e.meta,n=l.siteTitle,c=l.socialLinks,f="/tag/:id?"===a.path,p=a.params.id,g=Object(m.g)();return s.a.createElement(i.a,{siteTitle:n,socialLinks:c},s.a.createElement("section",{className:"site-section pt-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row blog-entries"},s.a.createElement(r.Suspense,{fallback:s.a.createElement(C.a,{screenHeight:!1})},s.a.createElement(k,{resource:g,categoryId:p,isTag:f})),s.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},s.a.createElement(u.a,null),s.a.createElement(h.a,{model:t,fieldId:"bios_o"}),s.a.createElement(o.a,null),s.a.createElement(d.a,null),s.a.createElement(d.b,null))))))}},223:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(199),s=t(234),i=t(224),o=Object(r.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(s.a)().formatMessage;return n.a.createElement("div",{className:"sidebar-box search-form-wrap"},n.a.createElement(i.a,{id:"s",placeholder:e(o.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},225:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(226),s=t.n(r);a.a=function(e){var a=e.pageCount,t=e.onPageChange;return n.a.createElement(s.a,{containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:0,pageCount:a,onPageChange:function(e){var a=e.selected;return t(a)},disableInitialCallback:!0,previousLabel:n.a.createElement("span",null,"<"),nextLabel:n.a.createElement("span",null,">")})}},226:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l,n=t(227),r=(l=n)&&l.__esModule?l:{default:l};a.default=r.default},227:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),n=t(0),r=c(n),s=c(t(56)),i=c(t(228)),o=c(t(229));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,l=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<l-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var l=t.state.selected;t.handlePageSelected(l<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,l=a.pageRangeDisplayed,n=a.pageCount,s=a.marginPagesDisplayed,i=a.breakLabel,c=a.breakClassName,u=a.breakLinkClassName,d=t.state.selected;if(n<=l)for(var m=0;m<n;m++)e.push(t.getPageElement(m));else{var f=l/2,p=l-f;d>n-l/2?f=l-(p=n-d):d<l/2&&(p=l-(f=d));var g=void 0,b=void 0,v=void 0,C=function(e){return t.getPageElement(e)};for(g=0;g<n;g++)(b=g+1)<=s||b>n-s||g>=d-f&&g<=d+p?e.push(C(g)):i&&e[e.length-1]!==v&&(v=r.default.createElement(o.default,{key:g,breakLabel:i,breakClassName:c,breakLinkClassName:u,onClick:t.handleBreakClick.bind(null,g)}),e.push(v))}return e};var l=void 0;return l=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:l},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),l(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,l=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),l&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,l=e+a.pageRangeDisplayed;return l>=t?t-1:l}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,l=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<l)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,l=t.pageClassName,n=t.pageLinkClassName,s=t.activeClassName,o=t.activeLinkClassName,c=t.extraAriaContext;return r.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:l,pageLinkClassName:n,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,l=e.nextClassName,n=e.pageCount,s=e.containerClassName,i=e.previousLinkClassName,o=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,d=this.state.selected,m=t+(0===d?" "+a:""),f=l+(d===n-1?" "+a:""),p=0===d?"true":"false",g=d===n-1?"true":"false";return r.default.createElement("ul",{className:s},r.default.createElement("li",{className:m},r.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":p},o)),this.pagination(),r.default.createElement("li",{className:f},r.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":g},u)))}}]),a}(n.Component);u.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=u},228:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=r(t(0)),n=r(t(56));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.onClick,r=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",s=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),l.default.createElement("li",{className:a},l.default.createElement("a",{onClick:n,role:"button",className:t,href:r,tabIndex:"0","aria-label":s,"aria-current":i,onKeyPress:n},e.page))};s.propTypes={onClick:n.default.func.isRequired,selected:n.default.bool.isRequired,pageClassName:n.default.string,pageLinkClassName:n.default.string,activeClassName:n.default.string,activeLinkClassName:n.default.string,extraAriaContext:n.default.string,href:n.default.string,ariaLabel:n.default.string,page:n.default.number.isRequired},a.default=s},229:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=r(t(0)),n=r(t(56));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,r=e.onClick,s=t||"break";return l.default.createElement("li",{className:s},l.default.createElement("a",{className:n,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};s.propTypes={breakLabel:n.default.oneOfType([n.default.string,n.default.node]),breakClassName:n.default.string,breakLinkClassName:n.default.string,onClick:n.default.func.isRequired},a.default=s}}]);
//# sourceMappingURL=5.e54bd99a.chunk.js.map