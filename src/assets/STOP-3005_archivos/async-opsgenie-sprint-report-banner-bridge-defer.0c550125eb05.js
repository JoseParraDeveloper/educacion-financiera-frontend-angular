try{window.performance.mark("async-opsgenie-sprint-report-banner-bridge-defer.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-opsgenie-sprint-report-banner-bridge-defer"],{"2X/c":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),i=n.n(r),a=n("17x9"),o=n.n(a);const s=n("vOnD").default.div.withConfig({componentId:"sc-1sln26t-0"})`position:absolute;left:-999999px;`;class c extends r.Component{constructor(...e){super(...e),this.state={shouldAnimateMount:!0,childSize:null},this.onMountAnimationEnd=()=>{this.setState({shouldAnimateMount:!1})},this.calculateSize=e=>{e&&requestAnimationFrame((()=>{const{width:t,height:n}=e.getBoundingClientRect();this.setState({childSize:{width:t,height:n}})}))}}render(){const{mountAnimation:e,children:t}=this.props;return this.state.shouldAnimateMount?this.state.childSize?i.a.createElement(e,{onAnimationEnd:this.onMountAnimationEnd,height:this.state.childSize.height,
width:this.state.childSize.width},t):i.a.createElement(s,{innerRef:this.calculateSize},t):t}}c.displayName="MountAnimator",c.propTypes={mountAnimation:o.a.func,children:o.a.node.isRequired},c.defaultProps={mountAnimation:void 0}},"8qE/":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),i=n.n(r),a=n("17x9"),o=n.n(a),s=n("vOnD");const c=s.default.div.withConfig({componentId:"ebqdw6-0"})`overflow:hidden;animation:${({height:e})=>s.keyframes`0%{max-height:0;}100%{max-height:${e}px;}`} 0.2s ease-in;`;class l extends r.Component{render(){return i.a.createElement(n("2X/c").a,{mountAnimation:c},this.props.children)}}l.displayName="SlideDownOnMount",l.propTypes={children:o.a.node.isRequired}},AB8E:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("wSSu");const o={render:(e,t)=>{
document.body&&document.body.contains(e)&&Object(a.render)(i.a.createElement(n("rZxA").a,null,i.a.createElement(n("Z7M4").a,null,i.a.createElement(n("t3Mb").a,t)),i.a.createElement(n("FbcP").a,{metricKey:n("vYCx").b})),e)},unmount:e=>{document.body&&document.body.contains(e)&&Object(a.unmountComponentAtNode)(e)}};t.default=()=>(Object(r.useEffect)((()=>{Object(n("X1dq").a)({name:"jira-agile/rapid/ui/opsgenie-sprint-report-banner/bridge"}).then((e=>e(o)))}),[]),null)},HOmg:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r={iconColor:"inherit",iconGradientStart:"inherit",iconGradientStop:"inherit",label:"",size:"medium",textColor:"currentColor"},i={xsmall:16,small:24,medium:32,large:40,xlarge:48}},"MJk/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>{let t,n,r,i,a;switch(e){case"brand":t="#0052CC",n="#2684FF",r="#2684FF",i="var(--ds-text, #172B4D)",a="#0052CC";break;case"neutral":t="#344563",n="#7A869A",
r="#7A869A",i="#505F79",a="#505F79";break;case"inverse":t="#C1C7D0",n="#FFFFFF",r="#FFFFFF",i="var(--ds-text-inverse, #FFFFFF)",a="var(--ds-text-inverse, #FFFFFF)"}return{iconGradientStart:t,iconGradientStop:n,iconColor:r,textColor:i,atlassianLogoTextColor:a}}},NJIi:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),i=n.n(r);const a=({appearance:e,size:t,iconGradientStart:r,iconGradientStop:i,iconColor:a,textColor:o})=>{let s={iconGradientStart:r,iconGradientStop:i,iconColor:a,textColor:o},c=Object(n("nere").b)({iconGradientStart:i});return e&&(s=Object(n("MJk/").a)(e),c=`opsgenieLogo-${e}`),
`\n  <svg viewBox="0 0 133 32" height="32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient id="${c}-1" x1="50%" x2="50%" y1="0%" y2="100%">\n        <stop\n          offset="0%"\n          stop-color="${s.iconGradientStop}"\n        />\n        <stop\n          offset="82%"\n          stop-color="${s.iconGradientStart}"\n          ${"inherit"===s.iconGradientStart?'stop-opacity="0.4"':""}\n        />\n      </linearGradient>\n      <linearGradient id="${c}-2" x1="7.133%" x2="50%" y1="13.352%" y2="58.228%">\n        <stop\n          offset="0%"\n          stop-color="${s.iconGradientStop}"\n        />\n        <stop\n          stop-color="${s.iconGradientStart}"\n          ${"inherit"===s.iconGradientStart?'stop-opacity="0.4"':""}\n          offset="100%"\n        />\n      </linearGradient>\n    </defs>\n    <g fill-rule="evenodd">\n      <path fill="${s.textColor}" fill-rule="nonzero" d="M27,14.9963259 C27,9.84140338 29.9575,6.22438088 35.2484675,6.22438088 C40.539435,6.22438088 43.4880625,9.84436088 43.4880625,14.9963259 C43.4880625,20.1985684 40.5305625,23.8422084 35.263255,23.8422084 C29.9959475,23.8422084 27,20.1956109 27,14.9963259 Z M29.34234,14.9963259 C29.34234,18.6133484 31.03403,21.6063384 35.25734,21.6063384 C39.48065,21.6063384 41.1220625,18.6133484 41.1220625,14.9963259 C41.1220625,11.4473259 39.4303725,8.46320838 35.239595,8.46320838 C31.0488175,8.46320838 29.34234,11.4561984 29.34234,14.9963259 Z M48.7050925,21.2928434 L48.7050925,28.6570184 L46.466265,28.6570184 L46.466265,10.5719059 L48.7050925,10.5719059 L48.7050925,12.9142459 C49.53615,11.1959384 51.1006675,10.3116459 53.102895,10.3116459 C56.56317,10.3116459 58.308095,13.2514009 58.308095,17.0754484 C58.308095,20.7457059 56.486275,23.8422084 52.842635,23.8422084 C50.94392,23.8422084 49.4858725,22.9845334 48.7050925,21.2928434 Z M52.50548,12.3937259 C50.500295,12.3937259 48.7050925,13.6684084 48.7050925,16.5578859 L48.7050925,17.5989259 C48.7050925,20.4854459 50.3435475,21.7601284 52.2540925,21.7601284 C54.77684,21.7601284 56.07814,20.0950559 56.07814,17.0754484 C56.0692675,13.9552859 54.8212025,12.3937259 52.50548,12.3937259 Z M64.99796,23.8422084 C63.4334449,23.8787499 61.881995,23.5496237 60.46707,22.8810209 L60.46707,20.5150209 C61.8881071,21.303432 63.4771215,21.740487 65.1014725,21.7897034 C66.81978,21.7897034 67.7040725,21.0887759 67.7040725,20.0713959 C67.7040725,19.0540159 66.94991,18.5098359 64.47744,17.9124209 C61.5879625,17.2085359 60.3635575,16.0906009 60.3635575,13.9582434 C60.3635575,11.6927984 62.1084825,10.3146034 65.074855,10.3146034 C66.5257548,10.2930388 67.96137,10.6131901 69.2656325,11.2491734 L69.2656325,13.5678534 C67.7040725,12.7870734 66.42939,12.3848534 65.0482375,12.3848534 C63.4097825,12.3848534 62.52549,12.9556509 62.52549,13.9730309 C62.52549,14.8839409 63.1495225,15.4517809 65.5450975,16.0284934 C68.4316175,16.7294209 69.889665,17.8029934 69.889665,20.0625234 C69.889665,22.2037534 68.4848525,23.8422084 64.99796,23.8422084 Z M81.7581125,21.2396084 C80.9240975,22.9579159 79.3625375,23.8422084 77.3573525,23.8422084 C73.923695,23.8422084 72.2053875,20.9024534 72.2053875,17.0754484 C72.2053875,13.4081484 74.00059,10.3116459 77.62057,10.3116459 C79.519285,10.3116459 80.9773325,11.1693209 81.76107,12.8610109 L81.76107,10.5719059 L83.9466625,10.5719059 L83.9466625,22.4019059 C83.9466625,26.2289109 82.15146,28.8048934 77.49044,28.8048934 C75.9171438,28.849884 74.3485221,28.6124873 72.858995,28.1039659 L72.858995,25.9154159 C74.315222,26.4191931 75.8431618,26.6848349 77.38397,26.7021109 C80.63722,26.7021109 81.7581125,24.9601434 81.7581125,22.5379509 L81.7581125,21.2396084 Z M77.957725,21.7601284 C79.9599525,21.7601284 81.7581125,20.4854459 81.7581125,17.5989259 L81.7581125,16.5578859 C81.7581125,13.6684084 80.1167,12.3937259 78.2091125,12.3937259 C75.6834075,12.3937259 74.3821075,14.0587984 74.3821075,17.0754484 C74.39098,20.1956109 75.6420025,21.7601284 77.957725,21.7601284 Z M93.5467075,23.8422084 C88.6786625,23.8422084 86.546305,21.0325834 86.546305,17.0399584 C86.546305,13.1094409 88.7318975,10.2998159 92.6890325,10.2998159 C96.696445,10.2998159 98.308282,13.0828234 98.308282,17.0399584 L98.308282,18.0662109 L88.8087925,18.0662109 C89.1222875,20.2784209 90.5537175,21.7098509 93.6236025,21.7098509 C94.9737094,21.7089885 96.313149,21.4707325 97.580737,21.0059659 L97.580737,23.0762159 C96.51308,23.6351834 94.874625,23.8422084 93.5467075,23.8422084 Z M88.7851325,16.1527084 L96.045795,16.1527084 C95.915665,13.7305159 94.82139,12.3523209 92.5825625,12.3523209 C90.2165625,12.3404909 89.0335625,13.8754334 88.7851325,16.1408784 L88.7851325,16.1527084 Z M112.025168,23.5819484 L109.78634,23.5819484 L109.78634,15.7238709 C109.78634,13.3815309 108.848813,12.3404909 106.716455,12.3404909 C104.646205,12.3404909 103.202945,13.7186859 103.202945,16.3479034 L103.202945,23.5819484 L100.964118,23.5819484 L100.964118,10.5689484 L103.202945,10.5689484 L103.202945,12.7013059 C104.015399,11.1952365 105.603045,10.2712035 107.31387,10.3086884 C110.30686,10.3086884 112.025168,12.3789384 112.025168,15.9545559 L112.025168,23.5819484 Z M116.29284,5.57373088 C116.715541,5.54348282 117.130549,5.69826386 117.430208,5.99792296 C117.729867,6.29758207 117.884648,6.71258978 117.8544,7.13529088 C117.8544,7.99771665 117.155266,8.69685088 116.29284,8.69685088 C115.430414,8.69685088 114.73128,7.99771665 114.73128,7.13529088 C114.701032,6.71258978 114.855813,6.29758207 115.155472,5.99792296 C115.455131,5.69826386 115.870139,5.54348282 116.29284,5.57373088 Z M115.148287,10.5719059 L117.387115,10.5719059 L117.387115,23.5849059 L115.148287,23.5849059 L115.148287,10.5719059 Z M127.510637,23.8422084 C122.642592,23.8422084 120.510235,21.0325834 120.510235,17.0399584 C120.510235,13.1094409 122.695827,10.2998159 126.650005,10.2998159 C130.657417,10.2998159 132.269255,13.0828234 132.269255,17.0399584 L132.269255,18.0662109 L122.772722,18.0662109 C123.086217,20.2784209 124.517647,21.7098509 127.587532,21.7098509 C128.937639,21.7089885 130.277079,21.4707325 131.544667,21.0059659 L131.544667,23.0762159 C130.47701,23.6351834 128.838555,23.8422084 127.510637,23.8422084 Z M122.749062,16.1408784 L130.012682,16.1408784 C129.882552,13.7186859 128.788277,12.3404909 126.54945,12.3404909 C124.177535,12.3404909 122.982705,13.8754334 122.749062,16.1408784 Z"/>\n      <circle fill="url(#${c}-1)" cx="10.055" cy="10" r="6" fill-rule="nonzero"/>\n      <path fill="url(#${c}-2)" fill-rule="nonzero" d="M9.5466546,27.8535048 C5.6443752,25.3649677 2.39856217,21.9735337 0.0835689575,17.9658651 C-0.0952202525,17.6419027 0.0222963675,17.2343451 0.346122097,17.0553085 L0.374053287,17.0553085 L4.8989053,14.8208136 C5.2162202,14.6649408 5.6000426,14.7822878 5.7759446,15.088953 C8.0603155,18.9171632 11.4349681,21.9767185 15.4680659,23.876104 C13.9786912,25.3786979 12.3282342,26.7125519 10.5465911,27.8535048 C10.2398972,28.0418894 9.8533485,28.0418894 9.5466546,27.8535048 Z"/>\n      <path fill="${s.iconColor}" fill-rule="nonzero" d="M10.5633498,27.8535048 C14.4667513,25.3663345 17.7128569,21.9745949 20.0264354,17.9658651 C20.2034083,17.6413306 20.0894039,17.23488 19.7694685,17.0497222 L19.7359511,17.0497222 L15.2055128,14.8152274 C14.8898394,14.6599316 14.5078288,14.7774733 14.3340598,15.0833668 C12.0472876,18.9191667 8.663628,21.9817774 4.6195935,23.876104 C6.11093,25.3787865 7.7632469,26.7126296 9.5466546,27.8535048 C9.8574084,28.0488317 10.252596,28.0488317 10.5633498,27.8535048 Z"/>\n    </g>\n  </svg>`
},o=({appearance:e,label:t="Opsgenie",size:r=n("HOmg").a.size,testId:o,textColor:s=n("HOmg").a.textColor,iconColor:c=n("HOmg").a.iconColor,iconGradientStart:l=n("HOmg").a.iconGradientStart,iconGradientStop:p=n("HOmg").a.iconGradientStop})=>i.a.createElement(n("PyFn").a,{appearance:e,iconColor:c,iconGradientStart:l,iconGradientStop:p,label:t,size:r,svg:a({appearance:e,size:r,iconGradientStart:l,iconGradientStop:p,iconColor:c,textColor:s}),testId:o,textColor:s})},PyFn:function(e,t,n){"use strict";var r=n("QILm"),i=n.n(r),a=n("pVnL"),o=n.n(a);const s=["label","svg","size","appearance","iconGradientStart","iconGradientStop","iconColor","textColor","testId"];const c="--logo-color",l="--logo-fill",p=Object(n("AeFk").css)({display:"inline-block",position:"relative",color:"var(--logo-color)",fill:"var(--logo-fill)",lineHeight:1,userSelect:"none",whiteSpace:"normal","> svg":{height:"100%",fill:"inherit"}}),d={name:"1hl44m8",styles:"stop{stop-color:currentColor;}"
},u=Object.entries(n("HOmg").b).reduce(((e,[t,r])=>(e[t]=Object(n("AeFk").css)({height:`${r}px`}),e)),{});t.a=e=>{let{label:t,svg:r,size:a,appearance:g,iconGradientStart:h,iconGradientStop:m,iconColor:f,textColor:b,testId:C}=e,x=i()(e,s);const w="inherit"===h&&"inherit"===m&&void 0===g,v=C&&`${C}--wrapper`;return Object(n("AeFk").jsx)("span",o()({css:[p,w&&d,a&&u[a]],"data-testid":v,style:{[c]:f,[l]:b},"aria-label":t||void 0,role:t?"img":void 0,dangerouslySetInnerHTML:{__html:r}},x))}},mYp3:function(e,t,n){"use strict";var r=n("vOnD");t.a=r.default.div.withConfig({componentId:"sc-17ht0z6-0"})`font-family:${n("1T3M").d};font-size:${n("1T3M").e}px;height:inherit;letter-spacing:normal;`},nere:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=1,t=new WeakMap,n=function(r,i){return"number"==typeof r||"string"==typeof r?i?"idx-"+i:"val-"+r:t.has(r)?"uid"+t.get(r):(t.set(r,e++),n(r))};return n},i=r()},t3Mb:function(e,t,n){
"use strict";var r=n("q1tI"),i=n.n(r),a=n("+lDl"),o=n("pVnL"),s=n.n(o);var c=Object(n("D6b/").defineMessages)({title:{id:"opsgenie-sprint-report-banner.title",defaultMessage:"Get insight into how incidents impact your team\u2019s sprint performance.",description:"The title message in Sprint report Opsgenie banner."},showMore:{id:"opsgenie-sprint-report-banner.show-more",defaultMessage:"Show more",description:"The toggle expand link text when banner content is collapse."},showLess:{id:"opsgenie-sprint-report-banner.show-less",defaultMessage:"Show less",description:"The toggle expand link text when banner content is expand."},contextText:{id:"opsgenie-sprint-report-banner.context-text",defaultMessage:"Opsgenie is incident management software that integrates with Jira to automatically create issues, send on-call alerts, and visualize the frequency and timing of incidents in your sprint reports.",description:"The contextual text when banner content is expand."},learnMore:{
id:"opsgenie-sprint-report-banner.learn-more",defaultMessage:"Learn more",description:"The text of a learn more button, when clicked opens up product detail page."},tryOpsgenie:{id:"opsgenie-sprint-report-banner.try-opsgenie",defaultMessage:"Try Opsgenie",description:"The text of a try now button, when clicked opens up product detail page."},closeButtonLabel:{id:"opsgenie-sprint-report-banner.close-button-label",defaultMessage:"Dismiss",description:"The close button label in the sprint report v2 touchpoint banner."},migrateLink:{id:"opsgenie-sprint-report-banner.migrate-link",defaultMessage:"Migrate your existing Opsgenie site",description:"The migrate link text in the sprint report v2 touchpoint banner."}}),l=n("vOnD");const p=l.default.div.withConfig({componentId:"sc-2dvucr-0"})`margin:29px 0px 102px 5px;padding:5px 10px;box-shadow:${"var(--ds-shadow-raised, 0px 0px 1px rgba(9, 30, 66, 0.31), 0px 3px 5px rgba(9, 30, 66, 0.2))"};min-width:550px;`,d=l.default.div.withConfig({
componentId:"sc-2dvucr-1"})`width:100%;background:${"var(--ds-background-neutral-subtle, white)"};display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-content:center;align-items:center;`,u=l.default.div.withConfig({componentId:"sc-2dvucr-2"})`width:100%;background:${"var(--ds-background-neutral-subtle, white)"};display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center;> *{margin:0 ${n("1T3M").f}px;}`,g=l.default.h5.withConfig({componentId:"sc-2dvucr-3"})`text-align:center;margin:5px ${n("1T3M").f}px;`,h=Object(l.default)(n("340+").a).withConfig({componentId:"sc-2dvucr-4"})`min-width:${12.25*n("1T3M").f}px;padding-left:0 !important;margin:0;`,m=Object(l.default)(n("340+").a).withConfig({componentId:"sc-2dvucr-5"})`margin:0 ${.4*n("1T3M").f}px;`,f=Object(l.default)(n("340+").a).withConfig({componentId:"sc-2dvucr-6"})`margin-top:${2*n("1T3M").f}px;`,b=Object(l.default)(n("340+").a).withConfig({
componentId:"sc-2dvucr-7"})`align-self:center;padding:${.5*n("1T3M").f}px !important;line-height:0 !important;`,C=l.default.div.withConfig({componentId:"sc-2dvucr-8"})`align-self:center;`,x=l.default.div.withConfig({componentId:"sc-2dvucr-9"})`width:100%;background:${"var(--ds-background-neutral-subtle, white)"};margin:25px 0;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-between;align-content:center;align-items:center;`,w=l.default.img.withConfig({componentId:"sc-2dvucr-10"})`height:152px;width:438px;`,v=l.default.div.withConfig({componentId:"sc-2dvucr-11"})`margin:19px 0;`,S=l.default.h5.withConfig({componentId:"sc-2dvucr-12"})`text-align:center;max-width:524px;font-size:14px;font-weight:400;line-height:20px;letter-spacing:0px;`,y={textColor:`var(--ds-text, ${n("5kDX").a.N700})`,iconColor:`var(--ds-text-brand, ${n("5kDX").a.B200})`,iconGradientStart:`var(--ds-text-brand, ${n("5kDX").a.B400})`,iconGradientStop:`var(--ds-text-brand, ${n("5kDX").a.B200})`
},O="growth-jsw.og.sprint.report.v2-sprintreport.is-opsgenie-integration-enabled";var E=Object(n("W3MJ").a)((({intl:{formatMessage:e},onLearnMore:t,onTry:a,onOptOut:o,enabled:l,isSiteAdmin:E})=>{const[L,M]=Object(r.useState)(!0),[j,k]=Object(r.useState)(!1),[I,A]=Object(r.useState)(!1);Object(r.useEffect)((()=>((async()=>{E?M(!l):(A(!0),Object(n("tqe9").a)({[O]:{}}).then((e=>{const t=e[O].status;M(t||!l),A(!1)})))})(),()=>{})),[l,E]);const F=e=>{Object(n("SALc").h)(e,"opsgenieSprintReportV2Dismiss")};return I||L?null:i.a.createElement(n("ebhp").a,{sourceName:"sprintReportV2ContextPanel",sourceType:n("2V2x").g,attributes:{isExpand:j}},i.a.createElement(p,{"data-testid":"opsgenie-sprint-report-banner.ui.wrapper"},i.a.createElement(d,null,i.a.createElement(u,null,i.a.createElement(n("NJIi").a,s()({label:"",size:"small"},y)),i.a.createElement(g,null,e(c.title)),i.a.createElement(h,{testId:"opsgenie-sprint-report-banner.ui.accordion-panel-toggle-button",appearance:"link",onClick:(e,t)=>{
k(!j),Object(n("SALc").h)(t,"opsgenieSprintReportV2Show")}},e(j?c.showLess:c.showMore))),i.a.createElement(b,{testId:"opsgenie-sprint-report-banner.ui.close-button",appearance:"subtle",onClick:(e,t)=>{E?(o(),F(t)):Object(n("tqe9").b)(O).then((()=>{M(!0),F(t)}))},spacing:"none"},i.a.createElement(n.n(n("ZSU+")).a,{primaryColor:`var(--ds-icon, ${n("5kDX").a.N70})`,label:e(c.closeButtonLabel),size:"small"}))),j&&i.a.createElement(n("8qE/").a,null,i.a.createElement(C,{"data-testid":"opsgenie-sprint-report-banner.ui.accordion-content-container"},i.a.createElement(x,null,i.a.createElement(w,{src:n.n(n("vNbn")).a}),i.a.createElement(v,null,i.a.createElement(S,null,e(c.contextText))),i.a.createElement(n("/HJ0").a,null,i.a.createElement(m,{testId:"opsgenie-sprint-report-banner.ui.touchpoint-button-try-now",onClick:(e,t)=>{a(),Object(n("SALc").h)(t,"opsgenieSprintReportV2Try")},appearance:"primary"},e(c.tryOpsgenie)),i.a.createElement(m,{onClick:(e,r)=>{t(),
Object(n("SALc").h)(r,"learnMoreButton")},testId:"opsgenie-sprint-report-banner.ui.touchpoint-button-learn-more"},e(c.learnMore))),i.a.createElement(f,{onClick:(e,t)=>{window.open("https://app.opsgenie.com/settings/general","_blank"),Object(n("SALc").h)(t,"opsgenieSprintReportV2Migrate")},appearance:"subtle-link"},e(c.migrateLink)))))),i.a.createElement(n("dY08").c,{eventName:"sprintReportV2ContextPanel viewed"}))}));const L=()=>{const e=Object(a.c)(),[t,o]=Object(r.useState)(!1);Object(r.useEffect)((()=>{e.isEnabled||Object(n("q2+m").a)({error:new Error(e.reason),meta:{id:"crossFlow",packageName:"jiraOpsgenieSprintReportBanner"}})}),[e]);const s=()=>{e.isEnabled&&e.api.open({journey:a.a.DECIDE,targetProduct:a.b.OPSGENIE,sourceComponent:"opsgenie-sprint-report-v2-try",sourceContext:"jira"})},c=()=>{e.isEnabled&&e.api.open({journey:a.a.GET_STARTED,targetProduct:a.b.OPSGENIE,sourceComponent:"opsgenie-sprint-report-v2-try",sourceContext:"jira"})},l=async()=>{if(e.isEnabled){
const{success:t=!1}=await e.api.open({journey:a.a.GET_STARTED,targetProduct:a.b.OPSGENIE,sourceComponent:"sprint-report-opsgenie-optout",sourceContext:"jira"});o(t)}};return i.a.createElement(n("Icg4").b,null,i.a.createElement(n("E/iH").a,{teamName:"fusion-solaris",id:"opsgenieSprintReportBanner",packageName:"jiraOpsgenieSprintReportBanner",sendToPrivacyUnsafeSplunk:!0},i.a.createElement(n("9UX1").a,null,i.a.createElement(n("mYp3").a,null,i.a.createElement(n("QwAD").b,null,(({tenantContext:{isSiteAdmin:n}})=>i.a.createElement(E,{onLearnMore:s,onTry:c,onOptOut:l,enabled:e.isEnabled&&!t,isSiteAdmin:n})))))))};L.displayName="OpsgenieSprintReportBannerApp";t.a=L},tqe9:function(t,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return g}));var i=r("noZS"),a=r.n(i),o=r("VJLA"),s=r.n(o);const c="https://have-i-seen-it.us-east-1.prod.public.atl-paas.net",l=(e,t)=>{const n=new URLSearchParams;return t.forEach((e=>n.append("flagKey",e))),n.append("userKey",e),
fetch(`${c}/flags?${n.toString()}`).then((e=>{if(!e.ok)throw new(r("zBNx").a)(e.status,e.statusText);return e.json()})).then((e=>(e=>a()(e,(({status:e,lastSeenDate:t})=>({status:e,lastSeenDate:t?new Date(t):null}))))(e)))};var p=(()=>{let t=null;try{let n;try{n=Object(r("y9+o").h)()}catch(e){return t}const{atlassianAccountId:i}=n;i&&(t=Object(r("veu8").a)(`have-i-seen-it-${i.replace(/:/g,"_")}`))}catch(e){r("ZXUb").a.safeErrorWithoutCustomerData("have-i-seen-it.storage","Failed to initialize storage.")}return t})();const d=2592e6,u=async e=>{const{atlassianAccountId:t,isAnonymous:n}=Object(r("y9+o").h)(),i=Object.keys(e),o=s()(i);if(!t||n)return a()(o,(()=>({status:!0,lastSeenDate:null})));const c={};p&&i.forEach((e=>{const t=p.get(e);t&&(delete o[e],c[e]=t)}));const u=Object.keys(o);if(u.length>0&&Object.assign(c,await l(t,u)),p){const t=Date.now();u.forEach((n=>{if(!c[n])return;const{status:r}=c[n],i=e[n].ttlNotSeen||36e5,a=e[n].ttlSeen||d;p.set(n,c[n],t+(r?a:i))}))}return c
},g=async(e,t=2592e6)=>{const{atlassianAccountId:n,isAnonymous:i}=Object(r("y9+o").h)();if(n&&!i){if(p){const n=p.get(e);if(n&&n.status)return;const r=new Date;p.set(e,{status:!0,lastSeenDate:r.toISOString()},r.getTime()+t)}await((e,t)=>{const n={userKey:e,flagKey:t};return fetch(`${c}/flag`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>{if(!e.ok)throw new(r("zBNx").a)(e.status,e.statusText)}))})(n,e)}}},vNbn:function(e,t,n){e.exports=n.p+"assets/opsgenie-chart-alerts.9a8a6b350b46e9d675f4b42e60cb5e28.8.svg"}}]);try{window.__jsEvalStop("async-opsgenie-sprint-report-banner-bridge-defer.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-opsgenie-sprint-report-banner-bridge-defer.0c550125eb052ed8e037.8.js.map