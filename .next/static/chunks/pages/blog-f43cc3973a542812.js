(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2032:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function s(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n),t.d(n,{default:function(){return f}});var r=t(1664),l=t.n(r),o=t(7294),c=t(6851),i=t(3003),d=t(2373),u=t(6154),h=t(5893),f=function(){var e=(0,o.useState)(1),n=e[0],t=(e[1],(0,o.useState)([])),a=(t[0],t[1]),r=(0,o.useState)(),f=(r[0],r[1],(0,o.useState)(1)),m=f[0],_=f[1],g=(0,o.useState)(6),x=g[0],p=g[1],j=(0,o.useState)([]),b=j[0],N=j[1];(0,o.useEffect)((function(){var e=document.querySelectorAll(".neoh_fn_moving_blog ul li");(0,d.oA)(".neoh_fn_moving_blog ul li",3,n),a((0,d.ot)(e.length,3))}),[n]),(0,o.useEffect)((function(){(0,u.Z)({method:"get",url:"https://bajrangi-backend.onrender.com/api/getallblogs?page=".concat(m)}).then((function(e){console.log(e),N([].concat(s(b),s(e.data.savedBlog)))})).catch((function(e){return console.log(e)}))}),[m]);var v=function(e){var n=new Date(e);return n=n.toLocaleString()};return(0,h.jsxs)(c.Z,{pageName:"Blog",children:[(0,h.jsx)(i.Z,{pageName:"Blog"}),(0,h.jsx)("div",{className:"neoh_fn_blog_page",children:(0,h.jsxs)("div",{className:"container",children:[b&&b.map((function(e){return(0,h.jsx)("div",{className:"neoh_fn_moving_blog",children:(0,h.jsx)("ul",{children:(0,h.jsx)("li",{children:(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("p",{className:"fn_date",children:(0,h.jsx)("span",{children:v(e.createdAt)})}),(0,h.jsx)("h3",{className:"fn_title",children:(0,h.jsx)(l(),{href:{pathname:"/blog-single",query:{blogId:e._id}},children:e.Title})}),(0,h.jsx)("p",{className:"fn_desc",children:e.ShortDescription}),(0,h.jsx)("p",{className:"fn_read",children:(0,h.jsx)(l(),{href:{pathname:"/blog-single",query:{blogId:e._id}},children:(0,h.jsx)("a",{className:"neoh_fn_button only_text",children:(0,h.jsx)("span",{className:"text",children:"Read More"})})})})]})})})},e._id)})),b.length>=x?(0,h.jsx)("div",{className:"buttons fn_desc",children:(0,h.jsx)("button",{onClick:function(){_(m+1),p(x+6)},className:"neoh_fn_buttons only_text",children:"Load more"})}):null]})})]})}},3003:function(e,n,t){"use strict";var a=t(1664),s=t.n(a),r=t(5893);n.Z=function(e){var n=e.pageName;return(0,r.jsxs)("div",{className:"neoh_fn_pagetitle",children:[(0,r.jsxs)("div",{className:"bg_overlay",children:[(0,r.jsx)("div",{className:"bg_color"}),(0,r.jsx)("div",{className:"bg_image","data-bg-img":"img/hero/bg.jpg"})]}),(0,r.jsx)("div",{className:"pt_content",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h3",{className:"fn_title fn_animated_text","data-wait":1e3,"data-speed":8,children:n}),(0,r.jsxs)("p",{className:"fn_desc",style:{color:"black",fontSize:"24px"},children:[(0,r.jsx)(s(),{href:"/",children:(0,r.jsx)("a",{children:"Home"})}),(0,r.jsx)("span",{className:"separator",children:"/"}),(0,r.jsx)("span",{className:"current",children:n})]}),(0,r.jsx)("p",{className:"fn_desc",style:{color:"black",fontSize:"24px"},children:"Bajrangi - Your safe Haven for sharing. Anonymity Guaranteed!"}),(0,r.jsx)("div",{className:"buttons fn_desc",style:{paddingTop:"15px"},children:(0,r.jsx)(s(),{href:"/AddBlog",children:(0,r.jsx)("a",{className:"neoh_fn_button only_text",children:(0,r.jsx)("span",{className:"text",children:"Add Blog"})})})})]})})]})}},3899:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(2032)}])}},function(e){e.O(0,[80,154,851,774,888,179],(function(){return n=3899,e(e.s=n);var n}));var n=e.O();_N_E=n}]);