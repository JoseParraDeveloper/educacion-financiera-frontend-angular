try{window.performance.mark("async-software-onboarding-checklist-button-internal.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-software-onboarding-checklist-button-internal"],{"0WmC":function(e,t,n){"use strict";var i=n("3tO9"),o=n.n(i);t.a=(e,t)=>i=>Object(n("VHV8").a)(((e,t)=>Object.keys(e).reduce(((n,i)=>o()(o()({},n),{},{[i]:{action:e[i],actionSubject:t}})),{}))(t,e))(i)},"820D":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n("q1tI")),o=n("QEuf");const a=e=>i.default.createElement(o.Icon,Object.assign({
dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.998 4A5.997 5.997 0 006 9.998c0 2.218 2.288 4.484 2.288 4.484.39.387.71 1.112.71 1.611 0 .499.45.907 1 .907h4c.55 0 1-.408 1-.907 0-.499.32-1.224.71-1.611 0 0 2.288-2.266 2.288-4.484A5.997 5.997 0 0011.998 4zm2.965 15c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v.003c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V19z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));a.displayName="LightbulbFilledIcon";var c=a;t.default=c},"8S7z":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=()=>{const[{isOpen:e,isDismissed:t,openTask:i},{nextSetChecklistIsOpen:o,nextSetChecklistIsDismissed:a,nextOpenTask:c}]=Object(n("5eAj").g)(),{openRightSidebar:r}=Object(n("z3Aa").b)(),{createAnalyticsEvent:s}=Object(n("rZ/p").a)(),[l]=Object(n("5eAj").m)(),d=Object(n("z3Aa").a)(),u=null==d?void 0:d.panelId;if(!Object(n("b9w1").f)())return()=>{};return({trigger:d,openTask:p})=>{p&&p!==i&&c(p),
u===n("NS6o").ab&&e||(r(n("NS6o").ab,n("NS6o").bb,!1,!0),Object(n("8qSl").f)(s,{quickstartStatus:l,currentRightSidebarPanelId:u||"",openRightSidebarToTop:!0,trigger:d}),t?a(!1):o(!0))}}},SEpd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n("q1tI")),o=n("QEuf");const a=e=>i.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M13.477 9.113l-4.36 4.386a1 1 0 101.418 1.41l4.36-4.386a1 1 0 00-1.418-1.41z" fill="inherit"/><path d="M9.084 10.501l4.358 4.377a1 1 0 101.418-1.411L10.5 9.09a1 1 0 00-1.417 1.411z" fill="inherit"/></g></svg>'},e));a.displayName="CrossCircleIcon";var c=a;t.default=c},Z7F5:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("u6S6"),o=n.n(i);const a={[n("JXwD").a]:"workManagement",
[n("JXwD").i]:"software",[n("JXwD").g]:"serviceManagement"},c=e=>e?a[e]||o()(e):null},dY08:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var i=n("pVnL"),o=n.n(i),a=n("q1tI"),c=n.n(a);class r extends a.Component{componentDidMount(){const{type:e,attributes:t,eventName:i,componentName:o,action:a,actionSubject:c,actionSubjectId:r}=this.props;if(i&&(a||c))throw Error("eventName is an alias for action & actionSubject, provide only one of those");if(o&&r)throw Error("componentName is an alias for actionSubjectId, provide only one of those");const s=i?i.split(" "):[],l=a||s[1],d=c||s[0];if(!l||!d)throw Error('eventName should exist and be in the format "subject action", i.e. "button clicked", "menu opened", "issue created", etc');const u=r||o,p=this.props.createAnalyticsEvent({action:l});Object(n("SALc").a)(p,e,{action:l,actionSubject:d,actionSubjectId:u,attributes:t})}
render(){return null}}r.displayName="FireComponent";const s=Object(n("VHV8").a)()(r),l=e=>c.a.createElement(s,o()({},e,{type:n("2V2x").j}));l.displayName="FireUiAnalytics";const d=e=>c.a.createElement(s,o()({},e,{type:n("2V2x").i}));d.displayName="FireTrackAnalytics";const u=e=>c.a.createElement(s,o()({},e,{type:n("2V2x").f}));u.displayName="FireOperationalAnalytics";const p=e=>c.a.createElement(s,o()({},e,{type:n("2V2x").h,eventName:"screen viewed"}));p.displayName="FireScreenAnalytics"},tRkW:function(e,t,n){"use strict";n.r(t),n.d(t,"JswOnboardingChecklistButton",(function(){return k}));var i=n("q1tI"),o=n.n(i),a=n("3tO9"),c=n.n(a),r=n("QILm"),s=n.n(r),l=n("qKvR");const d=["children"],u=["children"],p=e=>{let{children:t}=e,i=s()(e,d);return Object(l.d)("button",{onClick:i.onClick,css:l.c`
      border-radius: 24px;
      font-size: 14px;
      border: none;
      outline: none;
      white-space: nowrap;
      background: ${i.completed?`var(--ds-background-success-bold, ${n("5kDX").a.G400})`:`var(--ds-background-discovery-bold, ${n("5kDX").a.P300})`};
      padding: ${i.hasDismissButton?"10px 44px 10px 12px;":"10px 12px;"};
      box-shadow: ${`var(--ds-shadow-overlay, 0 8px 16px -4px ${n("5kDX").a.N50A}, 0 0 1px ${n("5kDX").a.N60A})`};
      transition: all 0.8s ease-in-out;
      display: inline-flex;
      align-items: center;
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
    `},t)},b=({children:e})=>Object(l.d)("h3",{css:l.c`
      ${n("5kDX").c.h500()};
      color: ${`var(--ds-text-inverse, ${n("5kDX").a.N0})`};
      font-weight: 500;
      display: inline;
      margin: 0;
      padding-left: 4px;
      padding-right: 8px;
    `},e),m=l.c`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: fade 0.6s ease-in-out;
`,h=e=>e.isOpen?e.hasDismissButton?"inline-block":"block":"none",v=e=>{let{children:t}=e,n=s()(e,u);return Object(l.d)("div",{css:l.c`
      ${n.hasDismissButton&&"position: relative;"}
      display: ${h(n)};
      ${m}
    `},t)},f={position:"absolute",right:"6px",top:"50%",transform:"translateY(-50%)",borderRadius:"50%",width:"34px",height:"34px"};var j=Object(n("D6b/").defineMessages)({dismissButtonAria:{id:"growth-checklist.dismissButtonAria",defaultMessage:"Dismiss {title}",description:"Text for screen readers only to describe that this will dismiss the button."}}),g=Object(n("o5hF").c)((({isOpen:e,title:t,completed:i,onClick:a,onDismiss:r,intl:s})=>{const l="function"==typeof r;return o.a.createElement(v,{isOpen:e,hasDismissButton:l},o.a.createElement(p,{completed:Boolean(i),onClick:a,hasDismissButton:l},o.a.createElement(n.n(n("820D")).a,{size:"medium",primaryColor:`var(--ds-icon-inverse, ${n("5kDX").a.N0})`,label:"check"}),o.a.createElement(b,null,t)),l&&o.a.createElement(n("340+").a,{onClick:r,style:f,"aria-label":s.formatMessage(c()({},j.dismissButtonAria),{title:t}),iconBefore:o.a.createElement(n.n(n("SEpd")).a,{label:"",size:"large",
primaryColor:i?`var(--ds-icon-success, ${n("5kDX").a.G500})`:`var(--ds-icon-discovery, ${n("5kDX").a.P500})`,secondaryColor:i?`var(--ds-background-accent-green-subtlest, ${n("5kDX").a.G50})`:`var(--ds-background-accent-purple-subtlest, ${n("5kDX").a.P50})`,"aria-hidden":"true"}),testId:"checklist-button--dismiss-button"}))}));const y=n("vOnD").default.div.withConfig({componentId:"sc-1sc1ks7-0"})`color:${`var(--ds-text-subtle, ${n("5kDX").a.N500})`};transition:margin 220ms;margin-bottom:${({reposition:e})=>e?7*n("1T3M").f:0}px;cursor:pointer;`,O=Object(n("0WmC").a)("button",{onClick:"clicked"})(g),k=()=>{const[e]=Object(n("5eAj").m)(),{openRightSidebar:t}=Object(n("z3Aa").b)(),a=Object(n("z3Aa").a)(),[,{nextSetChecklistIsDismissed:c,setNudgeStep:r,setHasNudgeActive:s}]=Object(n("5eAj").l)(),{createAnalyticsEvent:l}=Object(n("rZ/p").a)(),d=Object(n("8S7z").a)(),[u]=Object(n("5eAj").g)(),p=null==a?void 0:a.panelId,b=Object(i.useCallback)((e=>{var t,i;e.preventDefault(),
n("CD9/").d.start(),c(!0),r(n("POdn").j),s(!0);const o=l({});Object(n("8qSl").m)(o,{projectId:null===(t=u.projectState)||void 0===t?void 0:t.projectId,productType:Object(n("Z7F5").a)(null===(i=u.projectState)||void 0===i?void 0:i.projectType)},"button")}),[l,c,r,s,u]);return Object(i.useLayoutEffect)((()=>{Object(n("CD9/").a)(n("CD9/").c)&&n("CD9/").c.stop(),Object(n("CD9/").a)(n("CD9/").h)&&n("CD9/").h.stop()}),[]),p!==n("NS6o").ab?null:o.a.createElement(n("5eAj").a,null,((i,c)=>{var r,s;return o.a.createElement(y,{reposition:i.isOpen},o.a.createElement(n("ebhp").a,{sourceType:n("2V2x").b,sourceName:n("NS6o").f},o.a.createElement(n("dY08").b,{attributes:{projectId:null===(r=i.projectState)||void 0===r?void 0:r.projectId,productType:Object(n("Z7F5").a)(null===(s=i.projectState)||void 0===s?void 0:s.projectType)}}),o.a.createElement(O,{isOpen:!i.isOpen,title:"Quickstart",onClick:(o,r)=>{if(n("CD9/").e.start(),Object(n("b9w1").f)()){var s,u;d({trigger:"JswOnboardingChecklistButton"}),
Object(n("SALc").h)(r,n("NS6o").f,{projectId:null===(s=i.projectState)||void 0===s?void 0:s.projectId,productType:Object(n("Z7F5").a)(null===(u=i.projectState)||void 0===u?void 0:u.projectType)})}else{var b,m,h;const o=null!==(b=null==a?void 0:a.isMinimised)&&void 0!==b&&b;c.setIsOpen(!0),t(n("NS6o").ab,n("NS6o").bb,!1,!0),Object(n("SALc").h)(r,n("NS6o").f,{projectId:null===(m=i.projectState)||void 0===m?void 0:m.projectId,productType:Object(n("Z7F5").a)(null===(h=i.projectState)||void 0===h?void 0:h.projectType)}),Object(n("8qSl").f)(l,{quickstartStatus:e,isRightSidePanelCollapsed:o,isRightSidePanelMinimised:o,currentRightSidebarPanelId:p||"",openRightSidebarAsMinimised:!1,openRightSidebarToTop:!0,trigger:"JswOnboardingChecklistButton"})}},onDismiss:Object(n("b9w1").b)()?b:void 0})))}))};k.displayName="JswOnboardingChecklistButton"}}]);try{window.__jsEvalStop("async-software-onboarding-checklist-button-internal.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-software-onboarding-checklist-button-internal.3d0a679a7648017ea3b5.8.js.map