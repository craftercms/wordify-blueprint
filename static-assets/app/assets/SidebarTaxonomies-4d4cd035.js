import{i as u,j as e,l as i,e as n,b as j,r as h,d as b,p as f,F as p}from"./index-34635784.js";import{P as S,a as C}from"./PostCard-f2ff03b4.js";function F(){const a=u();return e.jsxs("div",{className:"sidebar-box",children:[e.jsx("h3",{className:"heading",children:e.jsx(i.FormattedMessage,{id:"common.popularPostsTitle",defaultMessage:"Latest Posts"})}),e.jsx("div",{className:"post-entry-sidebar",children:e.jsx("ul",{children:a==null?void 0:a.map(t=>e.jsx("li",{children:e.jsx(S,{model:t,render:C})},t.craftercms.id))})})]})}function P(a){var l;const{title:t,filter:c,baseUrl:d,listClass:m,resource:x}=a,{data:g}=x.read(),s=f(g.taxonomy.items).filter(c)[0];return Array.isArray((l=s==null?void 0:s.items)==null?void 0:l.item)&&s.items.item.length>0&&e.jsxs("div",{className:"sidebar-box",children:[e.jsx("h3",{className:"heading",children:t}),e.jsx(p,{component:"ul",model:s,className:`${m} clearfix`,children:s==null?void 0:s.items.item.map(r=>e.jsx("li",{children:e.jsx("a",{href:`${d}/${r.key}`,children:r.value})},r.key))})]})}function o(a){let t=j();return e.jsx(h.Suspense,{fallback:e.jsx(b,{screenHeight:!1}),children:e.jsx(P,{...a,resource:t})})}function R(){return e.jsx(o,{title:e.jsx(i.FormattedMessage,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"}),filter:n("tags.xml"),baseUrl:"/tag",listClass:"tags"})}function T(){return e.jsx(o,{title:e.jsx(i.FormattedMessage,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"}),filter:n("categories.xml"),baseUrl:"/category",listClass:"categories"})}export{F as R,T as S,R as a};