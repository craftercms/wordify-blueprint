(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[7],{208:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t(3),r=t(0),s=t.n(r),i=t(230),u=t(235),o=t(223),c=t(232),d=t(233),f=t(107),p=t(76),m=t(222),g=t(42),b=t(231),C=t(225);function h(e){var a=e.resource,t=e.paginationData,n=e.onPageChange,l=a.read(),r=l.hits,i=l.total,u="object"===typeof i?i.value:i,o=Math.ceil(u/t.itemsPerPage);return s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,u," result",0===u||u>1?"s":""," found."),r.map((function(e){return s.a.createElement(m.d,{key:e.craftercms.id,model:e,format:m.b})})),o>1&&s.a.createElement("div",{className:"col-md-12 text-center mt-5"},s.a.createElement(C.a,{pageCount:o,onPageChange:function(e){return n(e*t.itemsPerPage)}})))}a.default=function(e){var a=e.model,t=e.meta,m=t.siteTitle,C=t.socialLinks,v=Object(r.useState)({itemsPerPage:10,currentPage:0}),k=Object(l.a)(v,2),N=k[0],P=k[1],y=Object(f.h)(N.itemsPerPage),L=Object(g.f)(),E=Object(f.e)(),x=Object(l.a)(E,1)[0];return s.a.createElement(i.a,{siteTitle:m,socialLinks:C},s.a.createElement("section",{className:"site-section pt-5 py-sm"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h2",{className:"mb-4"},s.a.createElement(u.a,{id:"common.latestPostSectionTitle",defaultMessage:"Search Results"})))),s.a.createElement("div",{className:"row blog-entries"},s.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},s.a.createElement("div",{className:"row"},s.a.createElement(r.Suspense,{fallback:s.a.createElement(p.a,{screenHeight:!1})},s.a.createElement(h,{resource:y,paginationData:N,onPageChange:function(e){P(Object(n.a)({},N,{currentPage:e})),L.push({pathname:"/search",search:"?q=".concat(x,"&p=").concat(e)})}})))),s.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},s.a.createElement(o.a,null),s.a.createElement(b.a,{model:a,fieldId:"bios_o"}),s.a.createElement(c.a,null),s.a.createElement(d.a,null),s.a.createElement(d.b,null))))))}},223:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(199),s=t(234),i=t(224),u=Object(r.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(s.a)().formatMessage;return l.a.createElement("div",{className:"sidebar-box search-form-wrap"},l.a.createElement(i.a,{id:"s",placeholder:e(u.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},225:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(226),s=t.n(r);a.a=function(e){var a=e.pageCount,t=e.onPageChange;return l.a.createElement(s.a,{containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:0,pageCount:a,onPageChange:function(e){var a=e.selected;return t(a)},disableInitialCallback:!0,previousLabel:l.a.createElement("span",null,"<"),nextLabel:l.a.createElement("span",null,">")})}},226:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(227),r=(n=l)&&n.__esModule?n:{default:n};a.default=r.default},227:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),l=t(0),r=o(l),s=o(t(56)),i=o(t(228)),u=o(t(229));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,l=a.pageCount,s=a.marginPagesDisplayed,i=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,d=t.state.selected;if(l<=n)for(var f=0;f<l;f++)e.push(t.getPageElement(f));else{var p=n/2,m=n-p;d>l-n/2?p=n-(m=l-d):d<n/2&&(m=n-(p=d));var g=void 0,b=void 0,C=void 0,h=function(e){return t.getPageElement(e)};for(g=0;g<l;g++)(b=g+1)<=s||b>l-s||g>=d-p&&g<=d+m?e.push(h(g)):i&&e[e.length-1]!==C&&(C=r.default.createElement(u.default,{key:g,breakLabel:i,breakClassName:o,breakLinkClassName:c,onClick:t.handleBreakClick.bind(null,g)}),e.push(C))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,l=t.pageLinkClassName,s=t.activeClassName,u=t.activeLinkClassName,o=t.extraAriaContext;return r.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:l,activeClassName:s,activeLinkClassName:u,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,l=e.pageCount,s=e.containerClassName,i=e.previousLinkClassName,u=e.previousLabel,o=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,f=t+(0===d?" "+a:""),p=n+(d===l-1?" "+a:""),m=0===d?"true":"false",g=d===l-1?"true":"false";return r.default.createElement("ul",{className:s},r.default.createElement("li",{className:f},r.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":m},u)),this.pagination(),r.default.createElement("li",{className:p},r.default.createElement("a",{onClick:this.handleNextPage,className:o,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":g},c)))}}]),a}(l.Component);c.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=c},228:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(0)),l=r(t(56));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,l=e.onClick,r=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",s=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:l,role:"button",className:t,href:r,tabIndex:"0","aria-label":s,"aria-current":i,onKeyPress:l},e.page))};s.propTypes={onClick:l.default.func.isRequired,selected:l.default.bool.isRequired,pageClassName:l.default.string,pageLinkClassName:l.default.string,activeClassName:l.default.string,activeLinkClassName:l.default.string,extraAriaContext:l.default.string,href:l.default.string,ariaLabel:l.default.string,page:l.default.number.isRequired},a.default=s},229:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(0)),l=r(t(56));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.breakLabel,t=e.breakClassName,l=e.breakLinkClassName,r=e.onClick,s=t||"break";return n.default.createElement("li",{className:s},n.default.createElement("a",{className:l,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};s.propTypes={breakLabel:l.default.oneOfType([l.default.string,l.default.node]),breakClassName:l.default.string,breakLinkClassName:l.default.string,onClick:l.default.func.isRequired},a.default=s}}]);
//# sourceMappingURL=7.6ac447db.chunk.js.map