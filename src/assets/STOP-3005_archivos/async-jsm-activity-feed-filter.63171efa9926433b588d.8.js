try{window.performance.mark("async-jsm-activity-feed-filter.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-jsm-activity-feed-filter"],{"/+ar":function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"d",(function(){return d})),i.d(t,"f",(function(){return l})),i.d(t,"c",(function(){return u})),i.d(t,"a",(function(){return f})),i.d(t,"e",(function(){return p})),i.d(t,"g",(function(){return m}));var n=i("3tO9"),s=i.n(n),c=Object(i("D6b/").defineMessages)({filterDropdownComments:{id:"jsm-issue-activity-filter.common.filter-dropdown-comments",defaultMessage:"Comments",description:"Checkbox label to filter activity feed comments. Shown inside the issue view activity feed filter dropdown."},filterDropdownHistory:{id:"jsm-issue-activity-filter.common.filter-dropdown-history",defaultMessage:"History",description:"Checkbox label to filter activity feed history. Shown inside the issue view activity feed filter dropdown."},filterDropdownWorkLog:{
id:"jsm-issue-activity-filter.common.filter-dropdown-work-log",defaultMessage:"Work log",description:"Checkbox label to filter activity feed work log. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxStakeholderUpdates:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-stakeholder-updates",defaultMessage:"Stakeholder updates",description:"Checkbox label to filter timeline entries created by stakeholders. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxAlerts:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-alerts",defaultMessage:"Alerts",description:"Checkbox label to filter alerts timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxIncidentChanges:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-incident-changes",defaultMessage:"Incident changes",
description:"Checkbox label to filter Incident changes timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxIccSessionActivity:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-icc-session-activity",defaultMessage:"ICC session activity",description:"Checkbox label to filter ICC (Incident Command Center) session activity timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxIccParticipantActivity:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-icc-participant-activity",defaultMessage:"ICC participant activity",description:"Checkbox label to filter ICC (Incident Command Center) participant activity timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxIntegrationActions:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-integration-actions",defaultMessage:"Integration actions",
description:"Checkbox label to filter integration actions timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownCheckboxSlackMessages:{id:"jsm-issue-activity-filter.common.filter-dropdown-checkbox-slack-messages",defaultMessage:"Slack messages",description:"Checkbox label to filter Slack messages timeline entries. Shown inside the issue view activity feed filter dropdown."},filterDropdownApprovals:{id:"jsm-issue-activity-filter.common.filter-dropdown-approvals",defaultMessage:"Approvals",description:"Checkbox label to filter Jira Service Management approvals activity. Shown inside the issue view activity feed filter dropdown."},filterHiddenMessages:{id:"jsm-issue-activity-filter.common.filter-hidden-messages",defaultMessage:"Hidden",description:"Checkbox label to filter Jira Service Management hidden activity. Shown inside the issue view activity feed filter dropdown."}});const r={comments:{id:i("1fvC").b,i18nMessage:c.filterDropdownComments},
history:{id:i("1fvC").d,i18nMessage:c.filterDropdownHistory},workLog:{id:i("1fvC").h,i18nMessage:c.filterDropdownWorkLog}},a={approval:{id:i("1fvC").a,i18nMessage:c.filterDropdownApprovals}},o=s()({responderAlerts:{id:i("1fvC").f,i18nMessage:c.filterDropdownCheckboxAlerts},incidentChanges:{id:i("1fvC").e,i18nMessage:c.filterDropdownCheckboxIncidentChanges},stakeHolderChanges:{id:i("1fvC").g,i18nMessage:c.filterDropdownCheckboxStakeholderUpdates}},Object(i("FGpf").c)()?{hiddenChange:{id:i("1fvC").c,i18nMessage:c.filterHiddenMessages}}:{}),d=s()(s()({},r),a),l=s()(s()({},d),o),u=Object.values(d),f=Object.keys(r).map((e=>r[e])),p=Object.keys(l).map((e=>l[e])),m=[l.comments.id,l.history.id,l.workLog.id,l.approval.id,l.responderAlerts.id,l.incidentChanges.id,l.stakeHolderChanges.id]},"1fvC":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return s})),i.d(t,"h",(function(){return c})),i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return a})),
i.d(t,"f",(function(){return o})),i.d(t,"e",(function(){return d})),i.d(t,"g",(function(){return l}));const n="ANY_COMMENT",s="HISTORY",c="WORK_LOG",r="APPROVAL",a="HIDDEN_CUSTOM_ENTRIES",o="RESPONDER_ALERT",d="INCIDENT",l="STAKEHOLDER_UPDATE"},C1Mi:function(e,t,i){"use strict";i.r(t),i.d(t,"ActivityFeedFilter",(function(){return g}));var n=i("q1tI"),s=i.n(n),c=i("pVnL"),r=i.n(c),a=i("QILm"),o=i.n(a),d=Object(i("D6b/").defineMessages)({filterButtonLabel:{id:"jsm-issue-activity-filter.activity-feed-filter-button.filter-button-label",defaultMessage:"Filter",description:"The label for the filter button that shows / hides the timeline filter modal for the all activities feed"}});const l=["triggerRef"],u=(e,t,n)=>{const s=!0===e&&(t||n)?i("/+ar").e:i("/+ar").a;return Object(i("FGpf").a)()?s:s.filter((e=>e.id!==i("1fvC").a))},f=(e,t,n,s)=>{switch(!0){case!0===e&&(t||n):return i("/+ar").e;case s:return i("/+ar").c;default:return i("/+ar").a}},p=({isIssueOfIncidentsPractice:e=!1})=>{
const{formatMessage:t}=Object(i("6JHv").a)(),[c,a]=Object(n.useState)(!1),{createAnalyticsEvent:p}=Object(i("rZ/p").a)(),[m,{setSelectedFilters:g}]=Object(i("yKp6").a)(),[{isIncidentTimelineModalOpen:v}]=Object(i("sWS5").a)(),y=e=>-1!==m.indexOf(e),[b]=Object(i("zRmz").a)(),h=Object(i("FGpf").b)()&&v,I=Object(i("XXMI").b)(),O=(Object(i("FGpf").a)()?f:u)(!!b,e,h,I),w=p({action:"clicked",actionSubject:"checkbox"});return s.a.createElement(i("bbo4").a,{placement:"bottom-start",isOpen:c,onOpenChange:e=>{a(e.isOpen)},trigger:n=>{let{triggerRef:u}=n,f=o()(n,l);return s.a.createElement(i("340+").a,r()({},f,{ref:u,appearance:"default",isSelected:c,iconBefore:s.a.createElement(i.n(i("KMW0")).a,{size:"medium",label:""}),iconAfter:s.a.createElement(i.n(i("1YpF")).a,{size:"medium",label:""}),onClick:(t,n)=>{a(!c),Object(i("SALc").h)(n,"activityFeedFilter",{isJsmIncident:e})}}),t(d.filterButtonLabel))}},s.a.createElement(i("byUq").a,{id:"activityFeedFilterDropdown"
},O.map((n=>s.a.createElement(i("OIEE").a,{key:n.id,id:n.id,isSelected:y(n.id),onClick:()=>{(e=>{const t=(({clickedFilterId:e,filters:t})=>{let i=t;const n=-1===i.indexOf(e);return i=n?[...i,e]:i.filter((t=>t!==e)),i})({clickedFilterId:e,filters:m});g(t)})(n.id),Object(i("SALc").h)(w,"activityFeedFilter",{isJsmIncident:e,filterId:n.id,isChecked:!y(n.id)})}},t(n.i18nMessage))))))};p.displayName="ActivityFeedFilterButton";const m=i("vOnD").default.div.withConfig({componentId:"sc-1wr5e97-0"})`margin-top:${2*i("1T3M").f}px;`,g=({selectedActivityFeed:e})=>{i("wvC/").a.success();const t=Object(i("uz7G").a)(),[{isIncidentTimelineModalOpen:n}]=Object(i("sWS5").a)();return Object(i("FGpf").b)()&&Object(i("uz7G").b)()&&n||e===i("5f7s").a&&t?s.a.createElement(m,null,s.a.createElement(p,{isIssueOfIncidentsPractice:t})):null};g.displayName="ActivityFeedFilter"},FGpf:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return c}))
;const n=()=>Object(i("0zaF").a)("jsm-incident-pir",!1),s=()=>Object(i("0zaF").a)("approval-activity-items-in-issue-view-all-activity-feed",!1),c=()=>Object(i("0zaF").a)("jsm-timelines-phase-2_70gja",!1)},KMW0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(i("q1tI")),s=i("QEuf");const c=e=>n.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M7 13h10l1-2H6zM3.993 6c-.548 0-.79.405-.546.895L4 8h16l.553-1.105C20.8 6.4 20.555 6 20.007 6H3.993zm6.785 11.556a.87.87 0 00.727.444h.99c.279 0 .605-.2.727-.444L14 16h-4l.778 1.556z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));c.displayName="FilterIcon";var r=c;t.default=r},OJqm:function(t,i,n){"use strict";n.d(i,"a",(function(){return m})),n.d(i,"g",(function(){return g})),n.d(i,"j",(function(){return v})),n.d(i,"b",(function(){return y})),
n.d(i,"h",(function(){return b})),n.d(i,"d",(function(){return h})),n.d(i,"e",(function(){return I})),n.d(i,"k",(function(){return O})),n.d(i,"f",(function(){return w})),n.d(i,"i",(function(){return j})),n.d(i,"c",(function(){return k}));var s=n("3tO9"),c=n.n(s),r=Object(n("D6b/").defineMessages)({deletePrimaryIncidentErrorTitle:{id:"servicedesk-post-incident-review.services.actions.delete-primary-incident.delete-primary-incident-error-title",defaultMessage:"We couldn\u2019t unlink the primary incident",description:"Flag error title"},deletePrimaryIncidentErrorDescription:{id:"servicedesk-post-incident-review.services.actions.delete-primary-incident.delete-primary-incident-error-description",defaultMessage:"Refresh the page to try again.",description:"Flag error description"},flagSuccessTitleMessage:{id:"servicedesk-post-incident-review.services.actions.delete-primary-incident.flag-success-title-message",defaultMessage:"You\u2019ve unlinked the primary incident.",
description:"Flag success title"},errorFlagAction:{id:"servicedesk-post-incident-review.services.actions.delete-primary-incident.error-flag-action",defaultMessage:"Refresh",description:"Button of the flag when API throws error"}});var a=Object(n("D6b/").defineMessages)({flagSuccessTitleMessage:{id:"servicedesk-post-incident-review.services.actions.export-pir-confluence.flag-success-title-message",defaultMessage:"Success!",description:"Flag success title"},flagSuccessDescription:{id:"servicedesk-post-incident-review.services.actions.export-pir-confluence.flag-success-description",defaultMessage:"You\u2019ve published {confluencePageTitle} in {confluenceSpaceName}.",description:"Flag success description"},flagLinkText:{id:"servicedesk-post-incident-review.services.actions.export-pir-confluence.flag-link-text",defaultMessage:"View in confluence",description:"Success Flag link text"},flagErrorTitle:{
id:"servicedesk-post-incident-review.services.actions.export-pir-confluence.flag-error-title",defaultMessage:"Post incident review export failed",description:"Flag error title"}});const o=({id:e,name:t,inward:i,outward:n})=>[{id:e,label:n,value:n,name:t,direction:"OUTWARD"},...i===n?[]:[{id:e,label:i,value:i,name:t,direction:"INWARD"}]],d=()=>async({getState:e,setState:t},{cloudId:i,issueId:s,analyticsEvent:r})=>{if(void 0!==s){t(c()(c()({},e()),{},{isPrimaryIncidentLoading:!0}));try{const a=await Object(n("DycT").a)(`${Object(n("3erz").a)(i)}/issue/${s}/primary-incident`);if(t(c()(c()({},e()),{},{primaryIncidentIssue:a,isPrimaryIncidentLoading:!1})),a.key&&a.id){const e=Object(n("Tx4b").a)(),i=await((e,t)=>Object(n("DycT").a)(Object(n("xaXP").a)("",e,t)))(a.key,e);t({viewContext:Object(n("14k7").c)(i)})}r&&Object(n("SALc").b)(r,"fetchPrimaryIncident succeeded")}catch(a){Object(n("q2+m").a)({meta:{id:"fetchPrimaryIncident",packageName:"jiraServicedeskPostIncidentReview"},event:r,
error:a,sendToPrivacyUnsafeSplunk:!0}),t(c()(c()({},e()),{},{primaryIncidentIssue:null,isPrimaryIncidentLoading:!1}))}}};var l=Object(n("D6b/").defineMessages)({flagSuccessTitleMessage:{id:"servicedesk-post-incident-review.services.actions.set-primary-incident.flag-success-title-message",defaultMessage:"Success",description:"Flag success title"},flagSuccessDescriptionMessage:{id:"servicedesk-post-incident-review.services.actions.set-primary-incident.flag-success-description-message",defaultMessage:"You\u2019ve added a primary incident to this post-incident review.",description:"Flag success description"},flagErrorTitleMessage:{id:"servicedesk-post-incident-review.services.actions.set-primary-incident.flag-error-title-message",defaultMessage:"We couldn\u2019t add the primary incident",description:"Flag Error title"},flagErrorDescriptionMessage:{id:"servicedesk-post-incident-review.services.actions.set-primary-incident.flag-error-description-message",
defaultMessage:"Refresh the page to try again.",description:"Flag Error title"}});const u=(e,t,i)=>async({setState:s,dispatch:c},{cloudId:r,analyticsEvent:a})=>{if(void 0===t||void 0===e)return;s({isPrimaryIncidentLoading:!0});const{showFlag:o}=Object(n("uSxZ").e)();try{const u=await fetch(`${Object(n("3erz").a)(r)}/issue/${t}/primary-incident/${e}`,{method:"POST"}),f=await u.json();if(!u.ok)throw new(n("zBNx").a)(u.status,null==f?void 0:f.errorMessage);s({isPrimaryIncidentLoading:!1,primaryIncidentIssue:void 0}),i&&(c(d()),o({type:"success",title:l.flagSuccessTitleMessage,description:l.flagSuccessDescriptionMessage})),a&&Object(n("SALc").b)(a,"setPrimaryIncident succeeded")}catch(u){Object(n("q2+m").a)({meta:{id:"setPrimaryIncident",packageName:"jiraServicedeskPostIncidentReview"},event:a,error:u,sendToPrivacyUnsafeSplunk:!0}),o({type:"error",title:l.flagErrorTitleMessage,description:u.message}),s({primaryIncidentIssue:null,isPrimaryIncidentLoading:!1})}},f={
fetchConfluenceDefaultConfig:()=>async({getState:t,setState:i},{cloudId:s,projectId:r,analyticsEvent:a})=>{try{if(null==r)throw new Error("projectId is not set");const e=await Object(n("DycT").a)(`${Object(n("3erz").a)(s)}/project/${r}/pir-configuration`);i(c()(c()(c()({},t()),e.response),{},{isLoading:!1})),a&&Object(n("SALc").b)(a,"fetchConfluenceSpaceConfiguration succeeded")}catch(e){Object(n("q2+m").a)({meta:{id:"fetchConfluenceSpaceConfiguration",packageName:"jiraServicedeskPostIncidentReview"},event:a,error:e,sendToPrivacyUnsafeSplunk:!0}),i(c()(c()({},t()),{},{isLoading:!1,error:{value:e.message,type:"FETCH_CONFLUENCE_CONFIGURATION_ERROR"}}))}},setConfluenceSpace:(e,t)=>({getState:i,setState:n})=>{n(c()(c()({},i()),{},{confluenceSpaceId:e,confluenceSpaceName:t,confluenceParentPageId:void 0,confluenceParentPageName:void 0}))},setConfluenceParent:(e,t)=>({getState:i,setState:n})=>{n(c()(c()({},i()),{},{confluenceParentPageId:e,confluenceParentPageName:t}))},
fetchPirTemplate:()=>async({getState:e,setState:t},{cloudId:i,analyticsEvent:s,issueId:r})=>{const a=e(),{pirTemplate:o}=a;if(!o&&void 0!==r)try{t({pirTemplate:await Object(n("DycT").a)(`${Object(n("3erz").a)(i)}/pir/${r}/export-to-adf`),isLoading:!1}),s&&Object(n("SALc").b)(s,"fetchPirTemplate succeeded")}catch(d){Object(n("q2+m").a)({meta:{id:"fetchPirTemplate",packageName:"jiraServicedeskPostIncidentReview"},event:s,error:d,sendToPrivacyUnsafeSplunk:!0}),t(c()(c()({},e()),{},{isLoading:!1,error:{value:d.message,type:"FETCH_PIR_ERROR"}}))}},setConfluencePageName:e=>({getState:t,setState:i})=>{i(c()(c()({},t()),{},{confluencePageTitle:e}))},exportPirConfluence:e=>async({getState:t,setState:i},{analyticsEvent:s,cloudId:r,issueId:o})=>{const{showFlag:d}=Object(n("uSxZ").e)(),{isLoading:l,confluencePageTitle:u,confluenceParentPageId:f,confluenceSpaceId:p,confluenceSpaceName:m}=t();if(!l&&void 0!==u&&""!==u){i(c()(c()({},t()),{},{isConfluenceExportLoading:!0}));try{
if(void 0===o)throw new Error("Issue ID is not defined");const l={title:u,spaceKey:p,parentPageId:f},g=c()(c()({},n("drMZ").a),{},{method:"POST",body:JSON.stringify(l)}),v=await fetch(`${Object(n("3erz").a)(r)}/pir/${o}/export-to-confluence`,g),y=await v.json();if(!v.ok)throw new(n("zBNx").a)(v.status,null==y?void 0:y.errorMessage);i(c()(c()({},t()),{},{isConfluenceExportLoading:!1})),e(),d({type:"success",title:a.flagSuccessTitleMessage,description:[a.flagSuccessDescription,{confluencePageTitle:u,confluenceSpaceName:m}],actions:[{content:a.flagLinkText,href:y.webLink,target:"_blank"}]}),s&&Object(n("SALc").b)(s,"exportPirConfluence succeeded")}catch(g){Object(n("q2+m").a)({meta:{id:"exportPirConfluence",packageName:"jiraServicedeskPostIncidentReview"},event:s,error:g,sendToPrivacyUnsafeSplunk:!0}),i(c()(c()({},t()),{},{isConfluenceExportLoading:!1,error:{value:g.message,type:"EXPORT_CONFLUENCE_ERROR"}})),d({type:"error",title:a.flagErrorTitle,isAutoDismiss:!0,description:g.message})}}
},fetchPrimaryIncident:d,deletePrimaryIncident:e=>async({getState:t,setState:i},{issueId:s,analyticsEvent:a,cloudId:o})=>{if(void 0===s)return;const{showFlag:d}=Object(n("uSxZ").e)();try{await Object(n("DycT").a)(`${Object(n("3erz").a)(o)}/issue/${s}/primary-incident`,{method:"DELETE"}),i(c()(c()({},t()),{},{primaryIncidentIssue:null})),d({type:"success",title:r.flagSuccessTitleMessage}),a&&Object(n("SALc").b)(a,"deletePrimaryIncident succeeded")}catch(l){Object(n("q2+m").a)({meta:{id:"deletePrimaryIncident",packageName:"jiraServicedeskPostIncidentReview"},event:a,error:l,sendToPrivacyUnsafeSplunk:!0}),d({type:"error",title:r.deletePrimaryIncidentErrorTitle,description:r.deletePrimaryIncidentErrorDescription,isAutoDismiss:!0,actions:[{content:r.errorFlagAction,onClick:()=>window.location.reload()}]})}e()},setPrimaryIncident:u,fetchIssueLinkType:()=>async({setState:e},{analyticsEvent:t})=>{try{var i
;const{issueLinkTypes:s}=await Object(n("DycT").a)("/rest/api/3/issueLinkType"),c=s.map(o).flat(),r=null!==(i=c.find((({value:e})=>"reviews"===e)))&&void 0!==i?i:c[0];e({issueLinkTypes:c,selectedIssueLinkType:r}),t&&Object(n("SALc").b)(t,"fetchIssueLinkType succeeded")}catch(s){Object(n("q2+m").a)({meta:{id:"fetchIssueLinkType",packageName:"jiraServicedeskPostIncidentReview"},event:t,error:s,sendToPrivacyUnsafeSplunk:!0}),e({issueLinkTypes:[]})}},setSelectedIssueLinkType:e=>({setState:t})=>{t({selectedIssueLinkType:e})},linkIssue:(e,t)=>async({getState:i,setState:s,dispatch:c},{analyticsEvent:r,issueKey:a,issueId:o})=>{if(void 0!==a&&void 0!==o){s({isPrimaryIncidentLoading:!0});try{const{selectedIssueLinkType:s}=i();if(void 0===s)return;const d={type:{id:s.id},inwardIssue:{key:a},outwardIssue:{key:e}};await Object(n("2tF7").f)("/rest/api/2/issueLink",{body:JSON.stringify(d)}),c(u(t,o,!0)),r&&Object(n("SALc").b)(r,"linkIssue succeeded")}catch(d){Object(n("q2+m").a)({meta:{
id:"linkIssue",packageName:"jiraServicedeskPostIncidentReview"},event:r,error:d,sendToPrivacyUnsafeSplunk:!0}),s({primaryIncidentIssue:null,isPrimaryIncidentLoading:!1})}}},setIncidentModal:e=>({setState:t})=>{t({isIncidentTimelineModalOpen:e})},setIncidentSearch:e=>({setState:t})=>{t({showIncidentSearch:e})}},p=Object(n("0b8M").a)({name:"postIncidentReviewStore",actions:f,initialState:{isLoading:!0}}),m=Object(n("UCyb").a)(p,{onInit:()=>({dispatch:e})=>{e(f.fetchConfluenceDefaultConfig())}}),g=Object(n("dq9g").b)(p),v=Object(n("dq9g").b)(p,{selector:({confluenceSpaceId:e,confluencePageTitle:t})=>({isDisabled:void 0===e||void 0===t||""===t})}),y=Object(n("UCyb").a)(p,{onInit:()=>({dispatch:e})=>{e(f.fetchPirTemplate())}}),b=Object(n("dq9g").b)(p,{selector:({pirTemplate:e,isLoading:t,error:i})=>({pirTemplate:e,isLoading:t,error:i})}),h=Object(n("UCyb").a)(p,{onInit:()=>({dispatch:e})=>{e(f.fetchPrimaryIncident()),e(f.fetchIssueLinkType())}}),I=Object(n("UCyb").a)(p,{
onInit:()=>({dispatch:e})=>{e(f.fetchIssueLinkType())}}),O=Object(n("dq9g").b)(p,{selector:({primaryIncidentIssue:e,isPrimaryIncidentLoading:t,issueLinkTypes:i,selectedIssueLinkType:n,isIncidentTimelineModalOpen:s,viewContext:c,showIncidentSearch:r})=>({primaryIncidentIssue:e,isPrimaryIncidentLoading:t,issueLinkTypes:i,selectedIssueLinkType:n,isIncidentTimelineModalOpen:s,viewContext:c,showIncidentSearch:r})}),w=Object(n("dq9g").b)(p,{selector:({issueLinkTypes:e})=>({issueLinkTypes:e})}),j=Object(n("dq9g").b)(p,{selector:({isIncidentTimelineModalOpen:e=!1,primaryIncidentIssue:t})=>({isIncidentTimelineModalOpen:e,incidentIssueKey:null==t?void 0:t.key})}),k=Object(n("UCyb").a)(p)},RJk4:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return c})),i.d(t,"a",(function(){return r})),i.d(t,"e",(function(){return a}))
;const n=()=>Object(i("0zaF").a)("jsm-incident-pir",!1),s=()=>Object(i("G9hk").a)().getBooleanValue("confluence.frontend.fabric.editor.show-hover-preview",{default:!1,shouldTrackExposureEvent:!0}),c=()=>Object(i("0zaF").a)("issue.details.renderer.tti-tracking",!1),r=()=>Object(i("0zaF").a)("gic-issue-request-type-options-support-fe_fi2ej",!1),a=()=>Object(i("0zaF").a)("jsm.deprecate.servicedesk.practice.to.work.category_4rp0p",!1)},XXMI:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return c})),i.d(t,"b",(function(){return r}));var n=i("q1tI");const s=(e,t)=>{const i=new Set(t);return[...new Set(e)].filter((e=>i.has(e)))},c=e=>Object.values(e).map((e=>e.id)),r=()=>{const[{data:e}]=Object(i("hmQV").a)();return Object(n.useMemo)((()=>!!e),[e])}},hmQV:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("q1tI"),s=i("hJd6");const c=e=>{const{data:t,loading:c,error:r,refresh:a}=Object(s.q)((()=>i("mFKR").a)())
;return Object(n.useEffect)((()=>{a()}),[e,a]),[{data:t,loading:c,error:r}]}},mFKR:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("hJd6");const s=Object(n.j)({type:i("MD6T").rb,getKey:({match:e,query:t})=>(({match:e,query:t})=>{const{projectKey:n,projectId:s}=Object(i("zP+w").a)(e,t);return n||s})({match:e,query:t}),getDataLoader:()=>Promise.all([i.e("commons"),i.e("async-resource-servicedesk-context")]).then(i.bind(null,"/cMi")),maxAge:1/0})},sWS5:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n=()=>{const e=Object(i("RJk4").b)()&&Object(i("uz7G").b)(),[{isIncidentTimelineModalOpen:t,incidentIssueKey:n}]=Object(i("OJqm").i)();return e?[{isIncidentTimelineModalOpen:t,incidentIssueKey:n}]:[{isIncidentTimelineModalOpen:!1,incidentIssueKey:void 0}]}},yKp6:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));const n=i("/+ar").a.map((e=>e.id)),s={selectedFilters:i("/+ar").g},c=Object(i("0b8M").a)({initialState:s,actions:{
setSelectedFilters:e=>({setState:t})=>{t({selectedFilters:e})}},name:"activity-feed-filter-context"}),r=({selectedFilters:e},t)=>{const{isTimeLineModalPirIssueOpen:n,isIssueOfIncidentsPractice:s,hasOpsgenieAccount:c,isJiraServiceManagementRequest:r}=t,a=(({showJSMIncidentFilters:e,isJiraServiceManagementRequest:t})=>e?Object(i("XXMI").c)(i("/+ar").f):t?Object(i("XXMI").c)(i("/+ar").d):Object(i("XXMI").c)(i("/+ar").b))({showJSMIncidentFilters:Object(i("FGpf").b)()&&!0===n||s&&!0===c,isJiraServiceManagementRequest:r});return Object(i("XXMI").a)(a,e)},a=Object(i("dq9g").b)(c,{selector:(...e)=>Object(i("FGpf").a)()?r(...e):(({selectedFilters:e},t={})=>{const s=[...e],c=s;return Object(i("FGpf").b)()&&!0===t.isTimeLineModalPirIssueOpen||t.isIssueOfIncidentsPractice&&!0===t.hasOpsgenieAccount?Object(i("FGpf").a)()?c:c.filter((e=>e!==i("1fvC").a)):s.filter((e=>-1!==n.indexOf(e)))})(...e)}),o=()=>{
const[{data:e}]=Object(i("hmQV").a)(),t=Object(i("FGpf").a)()?!!e:void 0,n=Object(i("uz7G").a)(),[s]=Object(i("zRmz").a)(),[{isIncidentTimelineModalOpen:c}]=Object(i("sWS5").a)(),r=Object(i("FGpf").b)()&&Object(i("uz7G").b)()&&c;return a({isIssueOfIncidentsPractice:n,hasOpsgenieAccount:s,isTimeLineModalPirIssueOpen:r,isJiraServiceManagementRequest:t})}}}]);try{window.__jsEvalStop("async-jsm-activity-feed-filter.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-jsm-activity-feed-filter.63171efa9926433b588d.8.js.map