(this["webpackJsonpcomic-viewer"]=this["webpackJsonpcomic-viewer"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(8),a=n.n(i),o=(n(13),n(4)),s=n(7),u=n(6),f=(n(14),n(0)),g="https://warm-waters-42495.herokuapp.com/",h=function(t,e,n){return Object(f.jsx)("a",{href:"".concat("https://vanonselenp.github.io","/comic-viewer?page=").concat(t,"&comic=").concat(n),children:e.map((function(t){return Object(f.jsx)("img",{className:"fit-picture",src:t,alt:"Grapefruit slice atop a pile of other slices"})}))})},m={gg:new function t(){Object(u.a)(this,t),this.startPage="20021104",this.getNextPage=function(t,e){var n=new Set;Array.from(t.links).filter((function(t){return t.href.startsWith("http://www.girlgeniusonline.com/comic.php?date=")})).map((function(t){return t.href.split("=")[1]})).forEach((function(t){return n.add(t)})),n.add(e);var r=Object(s.a)(n).sort();return r[r.findIndex((function(t){return t===e}))+1]},this.getCurrentImages=function(t){return Array.from(t.images).map((function(t){return t.src})).filter((function(t){return t.startsWith("http://www.girlgeniusonline.com/ggmain/strips/ggmain")}))},this.getPageUrl=function(t){return"".concat(g,"https://www.girlgeniusonline.com/comic.php?date=").concat(t)}},emp:new function t(){Object(u.a)(this,t),this.startPage="volume-1-page-1",this.getNextPage=function(t,e){var n=new Set;Array.from(t.links).filter((function(t){return"cc-next"===t.className})).map((function(t){var e=t.href.split("/");return e[e.length-1]})).forEach((function(t){return n.add(t)}));var r=Object(s.a)(n).sort()[0];return console.log(r),r},this.getCurrentImages=function(t){return Array.from(t.images).map((function(t){return t.src})).filter((function(t){return t.startsWith("https://www.empoweredcomic.com/comic")}))},this.getPageUrl=function(t){return"".concat(g,"https://www.empoweredcomic.com/comic/").concat(t)}}};var l=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)([]),a=Object(o.a)(i,2),s=a[0],u=a[1],g=Object(r.useState)("gg"),l=Object(o.a)(g,2),p=l[0],w=l[1];return Object(r.useEffect)((function(){var t,e;if(window.location.href.includes("?")){var n=window.location.href.split("?")[1].split("&"),r=n.find((function(t){return t.startsWith("comic")}));if(r){var i=r.split("=")[1];w(i),e=m[i]}var a=n.find((function(t){return t.startsWith("page")}));t=a?a.split("=")[1]:e.startPage}else t=(e=m.gg).startPage;var o=e.getPageUrl(t);fetch(o).then((function(t){return t.text()})).then((function(n){var r=(new DOMParser).parseFromString(n,"text/html");c(e.getNextPage(r,t)),u(e.getCurrentImages(r))}))}),[]),""!==n?Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:h(n,s,p)})}):Object(f.jsx)(f.Fragment,{})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),i(t),a(t)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(l,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.d1ee0891.chunk.js.map