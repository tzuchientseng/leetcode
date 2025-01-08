(function(){"use strict";var e={8704:function(e,t,n){var r=n(3751),o=n(641),l=n.p+"img/logo.a93dfb79.png";const u={id:"app"};function i(e,t,n,r,i,a){const c=(0,o.g2)("MainPage");return(0,o.uX)(),(0,o.CE)("div",u,[t[0]||(t[0]=(0,o.Lk)("picture",null,[(0,o.Lk)("a",{href:"https://leetcode.com/problemset/",target:"_blank"},[(0,o.Lk)("img",{alt:"Vue logo",src:l,class:"logo-image"})])],-1)),(0,o.bF)(c)])}const a={class:"main-page"};function c(e,t,n,r,l,u){const i=(0,o.g2)("SearchBar"),c=(0,o.g2)("ProblemList");return(0,o.uX)(),(0,o.CE)("div",a,[t[1]||(t[1]=(0,o.Lk)("h1",{style:{"font-size":"2.0rem"}},"我的刷題記錄筆記",-1)),(0,o.bF)(i,{modelValue:e.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t)},null,8,["modelValue"]),(0,o.bF)(c,{problems:e.filteredProblems,onSelectProblem:e.selectProblem},null,8,["problems","onSelectProblem"]),e.selectedProblemComponent?((0,o.uX)(),(0,o.Wv)((0,o.$y)(e.selectedProblemComponent),{key:0,onClose:e.closeDetail},null,40,["onClose"])):(0,o.Q3)("",!0)])}n(8992),n(4520);var s=n(953);const d=["value"];function f(e,t,n,r,l,u){return(0,o.uX)(),(0,o.CE)("input",{value:e.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),type:"text",placeholder:"Search problems...",class:"search-bar"},null,40,d)}var p=(0,o.pM)({name:"SearchBar",props:{modelValue:{type:String,required:!0}}}),m=n(6262);const b=(0,m.A)(p,[["render",f],["__scopeId","data-v-14857c26"]]);var v=b,h=n(33);const g={class:"problem-list"},y=["onClick"],k={class:"difficulty"};function C(e,t,n,r,l,u){return(0,o.uX)(),(0,o.CE)("ul",g,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.problems,(t=>((0,o.uX)(),(0,o.CE)("li",{key:t.id},[(0,o.Lk)("span",{class:(0,h.C4)(t.difficulty),onClick:n=>e.$emit("selectProblem",t)},(0,h.v_)(t.id)+". "+(0,h.v_)(t.title),11,y),(0,o.Lk)("span",k,(0,h.v_)(t.difficulty),1)])))),128))])}var P=(0,o.pM)({name:"ProblemList",props:{problems:{type:Array,required:!0}}});const L=(0,m.A)(P,[["render",C],["__scopeId","data-v-d3bb5e86"]]);var E=L;const S={key:0,class:"problem-detail"},_={class:"code-block"},w={key:0};function A(e,t,n,r,l,u){return e.problem?((0,o.uX)(),(0,o.CE)("div",S,[(0,o.Lk)("button",{class:"close-btn",onClick:t[0]||(t[0]=t=>e.$emit("close"))},"×"),(0,o.Lk)("h2",null,(0,h.v_)(e.problem.title),1),(0,o.Lk)("p",null,[t[1]||(t[1]=(0,o.Lk)("strong",null,"難度:",-1)),(0,o.Lk)("span",{class:(0,h.C4)(e.problem.difficulty)},(0,h.v_)(e.problem.difficulty),3)]),t[2]||(t[2]=(0,o.Lk)("h3",null,"我的解答",-1)),(0,o.Lk)("pre",_,(0,h.v_)(e.problem.solution),1),e.problem.relatedSolutions&&e.problem.relatedSolutions.length?((0,o.uX)(),(0,o.CE)("h3",w,"相關解法")):(0,o.Q3)("",!0),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.problem.relatedSolutions,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t},(0,h.v_)(e),1)))),128))])])):(0,o.Q3)("",!0)}var O=(0,o.pM)({name:"ProblemDetail",props:{problem:{type:Object,required:!0,default:()=>({title:"",difficulty:"",solution:"",relatedSolutions:[]})}}});const j=(0,m.A)(O,[["render",A],["__scopeId","data-v-2a9179eb"]]);var X=j;const M=(0,o.$V)((()=>n.e(930).then(n.bind(n,6930))));var T=(0,o.pM)({name:"MainPage",components:{SearchBar:v,ProblemList:E,ProblemDetail:X},setup(){const e=(0,s.KR)([{title:"Two Sum",component:M}]),t=(0,s.KR)(""),n=(0,o.EW)((()=>e.value.filter((e=>e.title.toLowerCase().includes(t.value.toLowerCase()))))),r=(0,s.KR)(null),l=(0,s.KR)(null),u=e=>{r.value=e,l.value=e.component},i=()=>{r.value=null,l.value=null};return{searchQuery:t,filteredProblems:n,selectedProblem:r,selectedProblemComponent:l,selectProblem:u,closeDetail:i}}});const F=(0,m.A)(T,[["render",c],["__scopeId","data-v-7516f861"]]);var N=F,x=(0,o.pM)({name:"App",components:{MainPage:N}});const I=(0,m.A)(x,[["render",i]]);var V=I,B=n(6278),K=(0,B.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.Ef)(V).use(K).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,l){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],l=e[s][2];for(var i=!0,a=0;a<r.length;a++)(!1&l||u>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(i=!1,l<u&&(u=l));if(i){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[r,o,l]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".f26b5280.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".a9ef2230.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="leetcode:";n.l=function(r,o,l,u){if(e[r])e[r].push(o);else{var i,a;if(void 0!==l)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+l){i=d;break}}i||(a=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+l),i.src=r),e[r]=[o];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),a&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/leetcode/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,l){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var i=function(n){if(u.onerror=u.onload=null,"load"===n.type)o();else{var r=n&&n.type,i=n&&n.target&&n.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");a.name="ChunkLoadError",a.code="CSS_CHUNK_LOAD_FAILED",a.type=r,a.request=i,u.parentNode&&u.parentNode.removeChild(u),l(a)}};return u.onerror=u.onload=i,u.href=t,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===e||l===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],l=o.getAttribute("data-href");if(l===e||l===t)return o}},r=function(r){return new Promise((function(o,l){var u=n.miniCssF(r),i=n.p+u;if(t(u,i))return o();e(r,i,null,o,l)}))},o={524:0};n.f.miniCss=function(e,t){var n={930:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var l=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=l);var u=n.p+n.u(t),i=new Error,a=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,o[1](i)}};n.l(u,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,u=r[0],i=r[1],a=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(a)var s=a(n)}for(t&&t(r);c<u.length;c++)l=u[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},r=self["webpackChunkleetcode"]=self["webpackChunkleetcode"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(8704)}));r=n.O(r)})();
//# sourceMappingURL=app.913d6855.js.map