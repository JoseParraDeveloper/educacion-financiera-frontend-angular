try{window.performance.mark("async-global-navigation-components.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-global-navigation-components"],{QIyF:function(e,t,n){var r=n("Kz5y");e.exports=function(){return r.Date.now()}},dWob:function(e,t,n){"use strict";n.r(t),n.d(t,"Navigation",(function(){return m}));var r=n("q1tI"),a=n.n(r),i=n("3tO9"),o=n.n(i),u=n("sEfC"),c=n.n(u),s=n("hJd6"),l=n("cr+I"),v=n.n(l);const f="navigation-journey",p=["filter","selectedItem","rapidView","view","selectPageId","chart"],d=Object(n("cI+0").a)((()=>Object(n("veu8").b)("page-container"))),g=e=>!(()=>document?document.referrer:"")().includes(e),w=e=>{const t=g(e),{prevUrl:n,attributes:r}=(e=>{let t=null;if(e)return t;try{t=JSON.parse(d().get(f))}catch(n){}return t})(t)||{};return{prevUrl:n,attributes:o()(o()({steps:0,prevPage:null,isPrevPageSpa:null,currentPage:null,isCurrentPageSpa:null},r),{},{isInitial:!0,isNew:t})}
},y=c()((({navJourneyState:e,location:t,route:r,createAnalyticsEvent:a,setNavJourneyState:i})=>{const{prevUrl:u,attributes:c}=e||w(window.location.host),s=((e,t)=>{let n=e.replace(/\/$/,"");if(/\/browse\/\w+$/.test(e)||t.includes("useStoredSettings"))return null;if(/\/projects\/\w+\/issues\/\w+-\d+/.test(e)&&(n=e.replace(/issues\/\w+-\d+(.*)$/,"issues")),n+="?",t){const e=v.a.parse(t),r=Object.keys(e).reduce(((t,n)=>(p.includes(n)&&(t[n]=e[n]),t)),{});(e.filter||e.jql)&&(n=n.replace(/^\/issues\?$|^\/browse\/\w+-\d+(.*)$/,"/browse/ISSUE-1?")),n+=v.a.stringify(r)}return n})(t.pathname,t.search),l=null==r?void 0:r.name;if(!0===(null==r?void 0:r.isRedirect))return;if(null===s||null==l||u===s)return;const g=o()(o()({},c),{},{prevPage:null==c?void 0:c.currentPage,isPrevPageSpa:null==c?void 0:c.isCurrentPageSpa,currentPage:l,isCurrentPageSpa:__SPA__}),y=a({});Object(n("SALc").b)(y,"NavigationJourney navigated",g),g.steps+=1,g.isInitial=!1,g.isNew=!1;const b={prevUrl:s,attributes:g};i(b),(e=>{
try{d().set(f,JSON.stringify(e))}catch(t){}})(b)}),1e3),b=()=>{const[e,t]=Object(r.useState)(null),[{location:a,route:i}]=Object(s.r)(),{createAnalyticsEvent:o}=Object(n("rZ/p").a)();return Object(r.useEffect)((()=>y({navJourneyState:e,location:a,route:i,createAnalyticsEvent:o,setNavJourneyState:t})),[a,e,i,o,t]),null},m=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null));t.default=m},sEfC:function(e,t,n){var r=n("GoyQ"),a=n("QIyF"),i=n("tLB3"),o=Math.max,u=Math.min;e.exports=function(e,t,n){var c,s,l,v,f,p,d=0,g=!1,w=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=c,r=s;return c=s=void 0,d=t,v=e.apply(r,n)}function m(e){return d=e,f=setTimeout(h,t),g?b(e):v}function S(e){var n=e-p;return void 0===p||n>=t||n<0||w&&e-d>=l}function h(){var e=a();if(S(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-p);return w?u(n,l-(e-d)):n}(e))}function j(e){return f=void 0,y&&c?b(e):(c=s=void 0,v)}function P(){var e=a(),n=S(e)
;if(c=arguments,s=this,p=e,n){if(void 0===f)return m(p);if(w)return clearTimeout(f),f=setTimeout(h,t),b(p)}return void 0===f&&(f=setTimeout(h,t)),v}return t=i(t)||0,r(n)&&(g=!!n.leading,l=(w="maxWait"in n)?o(i(n.maxWait)||0,t):l,y="trailing"in n?!!n.trailing:y),P.cancel=function(){void 0!==f&&clearTimeout(f),d=0,c=p=s=f=void 0},P.flush=function(){return void 0===f?v:j(a())},P}}}]);try{window.__jsEvalStop("async-global-navigation-components.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-global-navigation-components.2cd6c489e12180c3bc5e.8.js.map