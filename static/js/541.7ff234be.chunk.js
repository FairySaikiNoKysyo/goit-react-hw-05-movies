"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{6488:function(n,t,r){r.d(t,{Hx:function(){return l},Y5:function(){return f},bI:function(){return o},uV:function(){return p},wr:function(){return s}});var e=r(5861),a=r(7757),c=r.n(a),u=r(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=new URLSearchParams({api_key:"c711c80cfbcd91878c6dbf3d7083e79a",language:"en-US"}),s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/week?".concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(i,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2541:function(n,t,r){r.r(t),r.d(t,{Cast:function(){return h}});var e=r(5861),a=r(9439),c=r(7757),u=r.n(c),i=r(2791),s=r(7689),o=r(5218),f=r(6488),p=r(9098),l=r(184),h=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1],h=(0,s.UO)().movieId;return(0,i.useEffect)((function(){function n(){return(n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.uV)(h);case 3:t=n.sent,r=t.cast,c(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),o.ZP.error("Error while fetching movie cast it's not ok!");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[h]),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.oK,{children:"Cast"}),0===r.length&&(0,l.jsx)("div",{children:"There is no cast list for this movie."}),(0,l.jsx)(p.ds,{children:r.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character;return(0,l.jsxs)("li",{children:[r?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:e,width:250}):(0,l.jsx)(p.tl,{size:250}),(0,l.jsx)("h3",{children:e}),(0,l.jsxs)("p",{children:["Character: ",a]})]},t)}))})]})};t.default=h},9098:function(n,t,r){r.d(t,{ds:function(){return o},oK:function(){return p},tl:function(){return f}});var e,a,c,u=r(168),i=r(8617),s=r(6444),o=s.default.ul(e||(e=(0,u.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    flex-wrap: wrap;\n    margin-top: 30px;\n"]))),f=(0,s.default)(i.A2F)(a||(a=(0,u.Z)(["\n    width: 250px;\n    height: 375px;\n    fill: #fff;\n    background-color: lightblue;\n    \n"]))),p=s.default.h2(c||(c=(0,u.Z)(["\n    color: #CB852B;    \n"])))}}]);
//# sourceMappingURL=541.7ff234be.chunk.js.map