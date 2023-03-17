try{window.performance.mark("async-devops-launch-toolchain-spotlight.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-devops-launch-toolchain-spotlight"],{"1FdC":function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return v}));var s=n("QILm"),r=n.n(s),o=n("pVnL"),a=n.n(o);const c=["alt"];const i=Object(n("7w+A").gridSize)(),l={name:"1hyxgad",styles:"max-width:100%;height:auto"},d=Object(n("AeFk").css)({display:"flex",margin:`0 -${i/2}px`,flexDirection:"row-reverse"}),u=Object(n("AeFk").css)({margin:`0 ${i/2}px`}),h=e=>{let{alt:t}=e,s=r()(e,c);return Object(n("AeFk").jsx)("img",a()({css:l,alt:t},s))},p=({children:e})=>Object(n("AeFk").jsx)("div",{css:d},e),v=({children:e})=>Object(n("AeFk").jsx)("div",{css:u},e)},"9oDu":function(e,t,n){e.exports=n.p+"assets/launch.10244d8ec3157229ddd8882fd977bcd3.8.svg"},QsPq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}))
;var s=n("q1tI"),r=n.n(s),o=n("hJd6");const a=({stop:e,children:t})=>t(e);var c=Object(n("uKP8").a)({heading:{id:"devops-launch-toolchain-spotlight.heading",defaultMessage:"Customize your toolchain",description:"The heading for the devops launch toolchain spotlight"},content:{id:"devops-launch-toolchain-spotlight.content",defaultMessage:"Design the toolchain that works for your team with integrations for your preferred tools.",description:"The content for the devops launch toolchain spotlight"},closeButton:{id:"devops-launch-toolchain-spotlight.close-button",defaultMessage:"Close",description:"The close button for the devops launch toolchain spotlight"},exploreButton:{id:"devops-launch-toolchain-spotlight.explore-button",defaultMessage:"Explore toolchain",description:"The Explore button for the devops launch toolchain spotlight"}}),i=n("vOnD");const l=i.default.div.withConfig({componentId:"sc-2r9fv2-0"
})`position:absolute;bottom:${2.5*n("1T3M").f}px;left:${2.5*n("1T3M").f}px;z-index:${n("1T3M").g.dialog};`,d=i.default.div.withConfig({componentId:"sc-2r9fv2-1"})`position:absolute;bottom:${36*n("1T3M").f}px;right:${n("1T3M").f}px;`,u=({stopFn:e,setIsSpotlightActive:t})=>{const{formatMessage:o}=Object(n("3NU0").a)(),{createAnalyticsEvent:a}=Object(n("rZ/p").a)(),i=Object(s.useCallback)((()=>{null==e||e(),t(!1);const s=a({action:"clicked",actionSubject:"button"});Object(n("SALc").h)(s,"devopsLaunchToolchainSpotlightClose")}),[t,e,a]);return r.a.createElement(d,null,r.a.createElement(n("340+").a,{onClick:i,appearance:"subtle",iconAfter:r.a.createElement(n.n(n("ZSU+")).a,{primaryColor:"#FFFFFF",label:o(c.closeButton),size:"medium"})}))};u.displayName="CloseButton";const h=({projectId:e,projectKey:t,stopFn:a})=>{
const[i]=Object(o.r)(),{formatMessage:d}=Object(n("3NU0").a)(),{push:h}=Object(o.s)(),[p,v]=Object(s.useState)(!0),{createAnalyticsEvent:b}=Object(n("rZ/p").a)(),F=i.location.pathname.startsWith("/jira/software/projects"),f=Object(s.useCallback)((()=>{const s=F?`/jira/software/projects/${t}/settings/toolchain?projectId=${e}`:`/jira/software/c/projects/${t}/settings/toolchain?projectId=${e}`,r=b({action:"clicked",actionSubject:"button"});Object(n("SALc").h)(r,"devopsLaunchToolchainSpotlightExplore"),null==a||a(),h(s)}),[h,t,e,F,b,a]),g=r.a.createElement(n("sV8C").a,{image:n.n(n("9oDu")).a,heading:d(c.heading),headingAfterElement:r.a.createElement(u,{stopFn:a,setIsSpotlightActive:v}),actions:[{text:d(c.exploreButton),onClick:f}],width:275},r.a.createElement("p",null,d(c.content)),r.a.createElement(n("dY08").b,null));return r.a.createElement(l,null,p&&g)};h.displayName="LaunchSpotlight";const p=({projectId:e,projectKey:t})=>{const s=(()=>{var e
;const t=Object(n("QcgV").a)(),s=Object(n("42YJ").b)();return t||(null==s||null===(e=s.data)||void 0===e?void 0:e.isProjectAdmin)||!1})();return r.a.createElement(n("qAQD").a,{id:"devopsLaunchToolchainSpotlight",packageName:"jiraSpaAppsDevopsLaunchToolchainSpotlight"},s&&r.a.createElement(n("ebhp").a,{sourceType:n("2V2x").e,sourceName:"devopsLaunchToolchainSpotlight"},r.a.createElement(n("gx0+").b,{messageId:"devops-launch-toolchain-spotlight"},r.a.createElement(a,null,(n=>r.a.createElement(h,{projectId:e,projectKey:t,stopFn:n}))))))};p.displayName="DevopsConnectedProjectSpotlight";var v=p},WQJ7:function(t,n,s){"use strict";s.d(n,"a",(function(){return A}));var r=s("yXPU"),o=s.n(r),a=s("lwsE"),c=s.n(a),i=s("W8MJ"),l=s.n(i),d=s("PJYZ"),u=s.n(d),h=s("7W2i"),p=s.n(h),v=s("a1gu"),b=s.n(v),F=s("Nsbk"),f=s.n(F),g=s("lSNA"),j=s.n(g),x=s("o0o1"),k=s.n(x),m=s("q1tI");function y(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1
;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,s=f()(t);if(n){var r=f()(this).constructor;e=Reflect.construct(s,arguments,r)}else e=s.apply(this,arguments);return b()(this,e)}}var A=function(e){p()(n,e);var t=y(n);function n(){var e;c()(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),j()(u()(e),"state",{shouldRenderChildren:!1}),j()(u()(e),"stop",o()(k.a.mark((function t(){var n,s,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,s=n.client,r=n.messageId,t.prev=1,t.next=4,s.stop(r);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error("Unable to stop flow message ".concat(r,". ").concat(t.t0));case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))),e}return l()(n,[{key:"componentDidMount",value:function(){var e=o()(k.a.mark((function e(){
var t,n,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.client,s=t.messageId,e.prev=1,e.next=4,n.start(s);case 4:e.sent&&this.setState({shouldRenderChildren:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Unable to start flow message ".concat(s,". ").concat(e.t0));case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"injectStop",value:function(e){return Object(m.cloneElement)(e,{stop:this.stop})}},{key:"render",value:function(){var e=this.props,t=e.fallback,n=e.children;return this.state.shouldRenderChildren?this.injectStop(n):t}}]),n}(m.PureComponent);j()(A,"defaultProps",{fallback:null})},bva1:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var s=n("yXPU"),r=n.n(s),o=n("lwsE"),a=n.n(o),c=n("W8MJ"),i=n.n(c),l=n("lSNA"),d=n.n(l),u=n("o0o1"),h=n.n(u),p=function(){function e(t,n){if(a()(this,e),d()(this,"cloudId",void 0),
d()(this,"stargateUrl",void 0),!t||!n)throw new Error("Need a valid CloudId and Stargate url");this.cloudId=t,this.stargateUrl=n}return i()(e,[{key:"start",value:function(){var e=r()(h.a.mark((function e(t,s){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n("zDkT").d)(this.cloudId,this.stargateUrl,t,s));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"stop",value:function(){var e=r()(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n("zDkT").e)(this.cloudId,this.stargateUrl,t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},erh5:function(e,t,n){"use strict";const s=(e,t)=>t/e;const r={h900:"h1",h800:"h1",h700:"h2",h600:"h3",h500:"h4",h400:"h5",h300:"h6",h200:"div",h100:"div"},o={name:"ti75j2",styles:"margin:0"},a={h900:Object(n("AeFk").css)({
fontSize:35,fontWeight:500,letterSpacing:"-0.01em",lineHeight:s(35,40)}),h800:Object(n("AeFk").css)({fontSize:29,fontWeight:600,letterSpacing:"-0.01em",lineHeight:s(29,32)}),h700:Object(n("AeFk").css)({fontSize:24,fontWeight:500,letterSpacing:"-0.01em",lineHeight:s(24,28)}),h600:Object(n("AeFk").css)({fontSize:20,fontWeight:500,letterSpacing:"-0.008em",lineHeight:s(20,24)}),h500:Object(n("AeFk").css)({fontSize:16,fontWeight:600,letterSpacing:"-0.006em",lineHeight:s(16,20)}),h400:Object(n("AeFk").css)({fontSize:14,fontWeight:600,letterSpacing:"-0.003em",lineHeight:s(14,16)}),h300:Object(n("AeFk").css)({fontSize:12,fontWeight:600,letterSpacing:0,lineHeight:s(12,16),textTransform:"uppercase"}),h200:Object(n("AeFk").css)({fontSize:12,fontWeight:600,letterSpacing:0,lineHeight:s(12,16)}),h100:Object(n("AeFk").css)({fontSize:11,fontWeight:700,letterSpacing:0,lineHeight:s(11,16)})},c={default:Object(n("AeFk").css)({color:"var(--ds-text, #172B4D)"}),inverse:Object(n("AeFk").css)({
color:"var(--ds-text-inverse, #FFFFFF)"}),subtlest:Object(n("AeFk").css)({color:"var(--ds-text-subtlest, #6B778C)"})};t.a=({children:e,level:t,id:s,testId:i,as:l,color:d="default"})=>{const u=l||r[t],h="h200"===t||"h100"===t;return Object(n("AeFk").jsx)(u,{id:s,"data-testid":i,css:[o,a[t],"inverse"===d&&c.inverse,"default"===d&&h&&c.subtlest,"default"===d&&!h&&c.default]},e)}},"gx0+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var s=n("q1tI"),r=n.n(s);class o extends n("bva1").a{constructor(e,t,s=!1){super(e,t),this.shouldUseMockClient=void 0,this.isDebugModeEnabled=void 0,this.shouldUseMockClient=(()=>"true"===Object(n("vlh1").a)("ajs-is-synthetic"))()&&!s,this.isDebugModeEnabled=(()=>Object(n("0zaF").a)("ep-external-message-debug-mode",!1))()}async start(e){if(this.isDebugModeEnabled){
const t=await super.start(e),n=confirm(`\ud83d\udc1e \ud835\uddd8\ud835\udde3 \ud835\uddd8\ud835\ude05\ud835\ude01\ud835\uddf2\ud835\uddff\ud835\uddfb\ud835\uddee\ud835\uddf9 \ud835\udde0\ud835\uddf2\ud835\ude00\ud835\ude00\ud835\uddee\ud835\uddf4\ud835\uddf2 \ud835\uddd7\ud835\uddf2\ud835\uddef\ud835\ude02\ud835\uddf4\ud835\uddf4\ud835\uddf2\ud835\uddff\n\nMessage ID: ${e}\nStart call server response: ${t}\n\nDo you want to display the message?`);return n||await super.stop(e),n}return!this.shouldUseMockClient&&super.start(e)}async stop(e){return!!this.shouldUseMockClient||super.stop(e)}}class a extends s.Component{constructor(...e){super(...e),this.client=null}UNSAFE_componentWillMount(){const{cloudId:e}=Object(n("y9+o").h)();this.client=new o(e,"/gateway/api",this.props.shouldAllowOnSynthetic)}render(){const{messageId:e}=this.props;return r.a.createElement(n("WQJ7").a,{client:this.client,messageId:e},this.props.children)}}a.displayName="CoordinationClientComponent"},
mNye:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return p}));var s=n("3tO9"),r=n.n(s),o=n("QILm"),a=n.n(o);const c=["buttonStyles"],i=["buttonStyles"],l={default:{background:{default:"var(--ds-background-inverse-subtle, #5243AA)",hover:"var(--ds-background-inverse-subtle-hovered, #8777D9)",active:"var(--ds-background-inverse-subtle-pressed, #403294)",disabled:"var(--ds-background-disabled, #5243AA)",selected:"var(--ds-background-inverse-subtle-pressed, #BF2600)",focus:"var(--ds-background-inverse-subtle, #5243AA)"},boxShadow:{focus:"0 0 0 2px var(--ds-border-discovery, #998DD9)"},color:{default:"var(--ds-text-inverse, #FFFFFF)",hover:"var(--ds-text-inverse, #FFFFFF)",active:"var(--ds-text-inverse, #FFFFFF)",disabled:{light:"var(--ds-text-disabled, #FFFFFF)",dark:"var(--ds-text-disabled, #1B2638)"},selected:"var(--ds-text-inverse, #FFFFFF)",focus:"var(--ds-text-inverse, #FFFFFF)"},outline:{focus:"none"}},subtle:{background:{default:"none",
hover:"var(--ds-background-inverse-subtle-hovered, #8777D9)",active:"var(--ds-background-inverse-subtle-pressed, #403294)",disabled:"none",selected:{light:"var(--ds-background-selected-hovered, #253858)",dark:"var(--ds-background-selected-hovered, #0D1424)"},focusSelected:{light:"var(--ds-background-selected-hovered, #253858)",dark:"var(--ds-background-selected-hovered, #0D1424)"}},boxShadow:{focus:"0 0 0 2px var(--ds-icon-discovery, #998DD9)"},color:{default:"var(--ds-text-inverse, #FFFFFF)",hover:"var(--ds-text-inverse, #FFFFFF)",active:"var(--ds-text-inverse, #FFFFFF)",disabled:"var(--ds-text-disabled, #FFFFFF)",selected:"var(--ds-text-inverse, #FFFFFF)",focus:"var(--ds-text-inverse, #FFFFFF)"},outline:{focus:"none"}},"subtle-link":{textDecoration:{hover:"underline var(--ds-text-inverse, #C0B6F2)"},textDecorationLine:{active:"none"},boxShadow:{focus:"0 0 0 2px var(--ds-border-discovery, #998DD9)"},color:{default:"var(--ds-text-inverse, #FFFFFF)",
hover:"var(--ds-text-inverse, #C0B6F2)",active:"var(--ds-text-inverse, #998DD9)",disabled:"var(--ds-text-discovery, #403294)",selected:"var(--ds-text-selected, #FFFFFF)",focus:"var(--ds-text-inverse, #FFFFFF)"}}},d={primary:{background:{default:"var(--ds-background-discovery-bold, #5243AA)",hover:"var(--ds-background-discovery-bold-hovered, #8777D9)",active:"var(--ds-background-discovery-bold-pressed, #403294)",disabled:{light:"var(--ds-background-disabled, #EBECF0)",dark:"var(--ds-background-disabled, #3B475C)"},selected:"var(--ds-background-selected-hovered, #BF2600)",focus:"var(--ds-background-discovery-bold-hovered, #5243AA)"},boxShadow:{focus:{light:"0 0 0 2px var(--ds-border-discovery, #998DD9)",dark:"0 0 0 2px var(--ds-border-discovery, #998DD9)"}},color:{default:"var(--ds-text-inverse, #FFFFFF)",disabled:{light:"var(--ds-text-disabled, #FFFFFF)",dark:"var(--ds-text-disabled, #1B2638)"},selected:"var(--ds-text-selected, #FFFFFF)",focus:"var(--ds-text-inverse, #FFFFFF)"}}}
;function u(e,{mode:t,appearance:n,state:s}){if(!e[n])return;const r=e[n];return Object.keys(r).reduce(((e,n)=>{let o=r;return[n,s,t].forEach((t=>{o[t]&&("object"==typeof o[t]?o=o[t]:e[n]=o[t])})),e}),{})}const h=(e,t)=>{const n=e(t),{buttonStyles:s}=n,o=a()(n,c);return r()({buttonStyles:r()(r()({},s),u(l,t))},o)},p=(e,t)=>{const n=e(t),{buttonStyles:s}=n,o=a()(n,i);return r()({buttonStyles:r()(r()({},s),u(d,t))},o)}},sV8C:function(e,t,n){"use strict";var s=n("QILm"),r=n.n(s),o=n("q1tI");const a=["text","key"],c=Object(n("7w+A").gridSize)(),i=Object(n("AeFk").css)({display:"flex",padding:`${2*c}px ${2.5*c}px`,flexDirection:"column"}),l=Object(n("AeFk").css)({display:"flex",paddingBottom:`${c}px`,alignItems:"baseline",justifyContent:"space-between"}),d=({children:e})=>Object(n("AeFk").jsx)("div",{css:l},e),u=Object(n("AeFk").css)({display:"flex",paddingTop:`${c}px`,alignItems:"center",justifyContent:"space-between"}),h=({children:e})=>Object(n("AeFk").jsx)("div",{css:u
},e),p=Object(n("AeFk").css)({height:"fit-content",zIndex:n("7w+A").layers.spotlight()+1,background:"var(--ds-background-discovery-bold, #6554C0)",borderRadius:`${Object(n("7w+A").borderRadius)()}px`,color:"var(--ds-text-inverse, #FFFFFF)",overflow:"auto"}),v=Object(n("AeFk").css)({boxShadow:"var(--ds-shadow-raised, 0 4px 8px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31))"}),b=Object(n("10pq").a)((()=>({container:{}}))),F=Object(o.forwardRef)(((e,t)=>{const{actions:s=[],actionsBeforeElement:o,children:c,components:l={},heading:u,headingAfterElement:F,image:f,innerRef:g,isFlat:j,testId:x,theme:k,width:m=400}=e,{Header:y=d,Footer:A=h}=l;return Object(n("AeFk").jsx)(n("0N/r").a.Provider,{value:n("mNye").b},Object(n("AeFk").jsx)(b.Provider,{value:k},Object(n("AeFk").jsx)(b.Consumer,null,(({container:e})=>Object(n("AeFk").jsx)("div",{css:[p,!j&&v,e],style:{width:`${Math.min(Math.max(m,160),600)}px`},ref:t||g,"data-testid":x},"string"==typeof f?Object(n("AeFk").jsx)("img",{src:f,
alt:""}):f,Object(n("AeFk").jsx)("div",{css:i},u||F?Object(n("AeFk").jsx)(y,null,Object(n("AeFk").jsx)(n("erh5").a,{color:"inverse",level:"h600",as:"h4"},u),F):null,c,s.length>0||o?Object(n("AeFk").jsx)(A,null,o||Object(n("AeFk").jsx)("span",null),Object(n("AeFk").jsx)(n("1FdC").b,null,s.map(((e,t)=>{let{text:s,key:o}=e,c=r()(e,a);return Object(n("AeFk").jsx)(n("1FdC").a,{key:o||("string"==typeof s?s:`${t}`)},Object(n("AeFk").jsx)(n("0+Gd").a,c,s))})))):null))))))}));F.displayName="SpotlightCard",t.a=F},uKP8:function(e,t,n){"use strict";function s(e){return Object(n("D6b/").defineMessages)(e)}n.d(t,"a",(function(){return s}))}}]);try{window.__jsEvalStop("async-devops-launch-toolchain-spotlight.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-devops-launch-toolchain-spotlight.7b5b4cfb134938228d8b.8.js.map