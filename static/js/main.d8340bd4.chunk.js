(this["webpackJsonpcomic-viewer"]=this["webpackJsonpcomic-viewer"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(6),a=n.n(i),o=(n(12),n(7)),s=n(5),u=(n(13),n(0)),f=function(t,e){return Object(u.jsx)("a",{href:"".concat("http://localhost:3000","/comic-viewer?").concat(t),children:e.map((function(t){return Object(u.jsx)("img",{className:"fit-picture",src:t,alt:"Grapefruit slice atop a pile of other slices"})}))})};var h=function(){var t=Object(r.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)([]),a=Object(s.a)(i,2),h=a[0],l=a[1];return Object(r.useEffect)((function(){var t="20021104";if(window.location.href.includes("?")){var e=window.location.href.split("?");t=e[e.length-1]}var n="".concat("https://warm-waters-42495.herokuapp.com/").concat(function(t){return"https://www.girlgeniusonline.com/comic.php?date=".concat(t)}(t));fetch(n).then((function(t){return t.text()})).then((function(e){var n=(new DOMParser).parseFromString(e,"text/html"),r=new Set;Array.from(n.links).filter((function(t){return t.href.startsWith("http://www.girlgeniusonline.com/comic.php?date=")})).map((function(t){return t.href.split("=")[1]})).forEach((function(t){return r.add(t)})),r.add(t);var i=Object(o.a)(r).sort(),a=i[i.findIndex((function(e){return e===t}))+1];c(a);var s=Array.from(n.images).map((function(t){return t.src})).filter((function(t){return t.startsWith("http://www.girlgeniusonline.com/ggmain/strips/ggmain")}));l(s)}))}),[]),""!==n?Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("header",{className:"App-header",children:f(n,h)})}):Object(u.jsx)(u.Fragment,{})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),i(t),a(t)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.d8340bd4.chunk.js.map