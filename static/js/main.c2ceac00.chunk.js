(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(15),s=n.n(r),o=(n(21),n(22),n(3)),u=n.n(o),i=n(4),d=n(6),l=n(16),f=n.n(l),h=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.request({method:"GET",url:"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"}).then((function(e){return e})).catch((function(e){console.error(e)}));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=n(0),j=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({quote:"",author:""}),s=Object(d.a)(r,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:(t=e.sent)&&200===t.status&&t.data.quotes.length>0&&a(t.data.quotes);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){n.length>0&&l(n[Math.floor(Math.random()*n.length)])}),[n]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"quote-box",className:"m-3 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 flex-col",children:[Object(b.jsx)("div",{id:"text",children:Object(b.jsx)("p",{className:"text-lg font-semibold",children:"\u201c ".concat(o.quote," \u201d")})}),Object(b.jsxs)("div",{id:"author",className:"font-medium",children:["- ",Object(b.jsx)("span",{className:"text-gray-500",children:o.author})]}),Object(b.jsxs)("div",{className:"flex space-x-3 mb-4 text-sm font-medium p-2",children:[Object(b.jsx)("div",{className:"flex-auto flex space-x-3",children:Object(b.jsx)("button",{className:"p-2 flex items-center justify-center rounded-md bg-black text-white",id:"new-quote",onClick:function(){l(n[Math.floor(Math.random()*n.length)])},children:"New Quote"})}),Object(b.jsx)("a",{className:"flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300",type:"button","aria-label":"like",id:"tweet-quote",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(encodeURIComponent('"'+o.quote+'" '+o.author)),children:Object(b.jsx)("i",{className:"fa fa-twitter"})})]}),Object(b.jsx)("div",{})]})})};var m=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.c2ceac00.chunk.js.map