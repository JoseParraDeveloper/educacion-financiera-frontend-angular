try{window.performance.mark("async-issue-details-field-descriptions.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-issue-details-field-descriptions"],{Rzng:function(e,s,i){"use strict";i.r(s);var t=i("q1tI"),n=i("3tO9"),c=i.n(n);const r=e=>i("XhGV").a`query fieldDescriptionQuery {
    issue(issueIdOrKey: "${e}", latestVersion: true, screen: "view") {
        fields {
            key
            description
        }
    }
}`,a={loading:!0,value:void 0},d=e=>{const[s,n]=Object(t.useState)(a),d=Object(t.useRef)(null);return Object(t.useEffect)((()=>{(async()=>{n(a);const s=await(async e=>{try{var s,t;const n=await Object(i("2tF7").f)("/rest/graphql/1/",{method:"POST",body:JSON.stringify({query:r(e)})});return null!=n&&null!==(s=n.data)&&void 0!==s&&null!==(t=s.issue)&&void 0!==t&&t.fields?n.data.issue.fields.reduce(((e,s)=>s.description?c()(c()({},e),{},{[s.key]:{description:s.description}}):c()({},e)),{}):void 0}catch(n){return void Object(i("q2+m").b)({error:n,id:"issue.details.fetch-field-description",packageName:"jiraIssueFieldDescription",logToSentry:!Object(i("aDTl").f)(n),sendToPrivacyUnsafeSplunk:!0})}})(e);n({loading:!1,value:s})})()}),[e]),d.current!==e?(d.current=e,a):s};s.default=()=>{const e=Object(i("gZwB").i)(),[,{setFieldConfigValue:s}]=Object(i("vGO3").b)(),{value:n,loading:c}=d(e);return Object(t.useEffect)((()=>{!c&&n&&Object.keys(n).forEach((i=>{const t=n[i];t&&s(e,i,{
description:t.description||""})}))}),[e,n,c,s]),null}}}]);try{window.__jsEvalStop("async-issue-details-field-descriptions.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-issue-details-field-descriptions.07e11ef7752ad7edff51.8.js.map