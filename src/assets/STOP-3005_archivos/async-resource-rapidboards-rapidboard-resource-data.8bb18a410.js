try{window.performance.mark("async-resource-rapidboards-rapidboard-resource-data.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-resource-rapidboards-rapidboard-resource-data"],{"0FXl":function(r,a,e){"use strict";e.d(a,"a",(function(){return t})),e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s}));const t=(r,a)=>{const{rapidView:t,quickFilter:n,projectKey:i,etag:s}=r,c=a.params.boardId||t,o=a.params.projectKey||i;let u="";n&&(u=Array.isArray(n)?n.reduce(((r,a)=>`${r}&activeQuickFilters=${a}`),u):`&activeQuickFilters=${n}`);const d=s?`&etag=${s}`:"",l=o?`&selectedProjectKey=${o}`:"",{GH:p}=window;let w="&forceConsistency=";var g,f,b,j,R,h,m
;Object(e("GfYg").t)()?w+=(null==p||null===(g=p.RapidBoard)||void 0===g||null===(f=g.State)||void 0===f||null===(b=f.getRapidViewIdForEventuallyConsistentBoard())||void 0===b?void 0:b.toString())!==c||null!=p&&null!==(j=p.RapidBoard)&&void 0!==j&&null!==(R=j.State)&&void 0!==R&&R.isFirstLoad()?"true":"false":(null==p||null===(h=p.RapidBoard)||void 0===h||null===(m=h.State)||void 0===m||m.setRapidViewIdForEventuallyConsistentBoard(void 0),w+="true");return`rapidViewId=${c}${l}${u}${d}${w}`},n=r=>{delete window[r]},i=r=>{const a=window[r];return a?a.readyState===a.DONE&&200!==a.status?(n(r),null):new Promise((e=>{a.readyState===a.DONE&&200===a.status?(n(r),e(JSON.parse(a.response))):a.addEventListener("load",(()=>{n(r),e(JSON.parse(a.response))}))})):null},s=r=>{let a=e("EhL9").q;switch(r){case e("6pTR").b.RAPIDBOARD_BOARD:case e("6pTR").b.RAPIDBOARD_USER_BOARD:a=e("EhL9").o;break;case e("6pTR").b.RAPIDBOARD_BACKLOG:case e("6pTR").b.RAPIDBOARD_USER_BACKLOG:a=e("EhL9").n}
return[...e("EhL9").p,...a]}},EhL9:function(r,a,e){"use strict";e.d(a,"m",(function(){return t})),e.d(a,"j",(function(){return n})),e.d(a,"i",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"k",(function(){return c})),e.d(a,"l",(function(){return o})),e.d(a,"d",(function(){return u})),e.d(a,"a",(function(){return d})),e.d(a,"h",(function(){return l})),e.d(a,"g",(function(){return p})),e.d(a,"f",(function(){return w})),e.d(a,"e",(function(){return g})),e.d(a,"b",(function(){return f})),e.d(a,"p",(function(){return b})),e.d(a,"q",(function(){return j})),e.d(a,"o",(function(){return R})),e.d(a,"n",(function(){return h}))
;const t="work",n="plan",i="initial-data",s="config-data",c="report",o="success",u="failure",d="all-data-promise",l="GH_SPA_RESOURCES_READY",p="GH_SPA_RB_READY",w="GH_SPA_SPINNER_HIDE",g="GH_SPA_SPINNER_SHOW",f="ghx-issue-fragment",b=[],j=["_super","wrc!greenhopper-rapid-non-gadget","wrc!gh-rapid","wrc!jira.global","wrc!atl.general","wrc!jira.general","wrc!atl.global","wrc!com.pyxis.greenhopper.jira:rapid-board-page","wrc!gh-rapid-config","wrc!gh-rapid-analytics","wrc!gh-rapid-charts","wrc!jira.webresources:mentions-feature","wrc!com.atlassian.jira.plugins.jira-development-integration-plugin:devstatus-dialog-resources-ctx"],R=["wrc!gh-rapid-lwf-board-fhd","wrc!jira.webresources:skate","wrc!jira.webresources:feature-flags","wrc!com.atlassian.auiplugin:aui-spinner","wrc!com.atlassian.jira.jira-client-analytics-plugin:analytics-web-client","wrc!com.atlassian.jira.jira-atlaskit-plugin:overrides-general","wrc!com.atlassian.jira.jira-atlaskit-plugin:overrides-dialogs","wrc!com.atlassian.analytics.analytics-client:js-events"],h=["wrc!gh-rapid-backlog-fhd","wrc!jira.webresources:skate","wrc!jira.webresources:header","wrc!jira.webresources:feature-flags","wrc!com.atlassian.auiplugin:aui-spinner","wrc!com.atlassian.jira.jira-client-analytics-plugin:analytics-web-client","wrc!com.atlassian.jira.jira-atlaskit-plugin:overrides-general","wrc!com.atlassian.jira.jira-atlaskit-plugin:overrides-dialogs","wrc!com.atlassian.analytics.analytics-client:js-events"]
},"wn+n":function(r,a,e){"use strict";e.r(a),a.default=async({query:r,match:a},{tenantContext:t})=>{const n=null!=a.params.boardId?a.params.boardId:r.rapidView;if(!n)return null;try{const r="SPA_RAPIDBOARD_RESOURCE",{baseUrl:a}=t,i=Object(e("0FXl").b)(r)||Object(e("DycT").a)(`${a}/rest/greenhopper/1.0/api/rapidboardsWrmResource/${n}`);return await i,Object(e("FbcP").f)(Object(e("HuSD").a)("rapidboard_resources_done")),i}catch(i){throw Object(e("AfAr").a)({component:"spa.view.routes.classic-projects.rapidboard-resource.getData",message:"An error was thrown while fetching rapidboard resource",name:"ResourceError"},i)}}}}]);try{window.__jsEvalStop("async-resource-rapidboards-rapidboard-resource-data.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-resource-rapidboards-rapidboard-resource-data.8bb18a410b9d9f907539.8.js.map