try{window.performance.mark("@atlaskit-internal_renderer-node_WindowedCodeBlock.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["@atlaskit-internal_renderer-node_WindowedCodeBlock"],{JyIQ:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(t("q1tI")),r=t("QEuf");const c=e=>a.default.createElement(r.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M10 19h8V8h-8v11zM8 7.992C8 6.892 8.902 6 10.009 6h7.982C19.101 6 20 6.893 20 7.992v11.016c0 1.1-.902 1.992-2.009 1.992H10.01A2.001 2.001 0 018 19.008V7.992z"/><path d="M5 16V4.992C5 3.892 5.902 3 7.009 3H15v13H5zm2 0h8V5H7v11z"/></g></svg>'},e));c.displayName="CopyIcon";var n=c;o.default=n},SaGf:function(e,o,t){"use strict";t.d(o,"a",(function(){return a}));const a=Object(t("D6b/").defineMessages)({copyCodeToClipboard:{
id:"fabric.editor.codeBlockCopyButton.copyToClipboard",defaultMessage:"Copy as text",description:"Copy the content of the code block as text to your clipboard"},copiedCodeToClipboard:{id:"fabric.editor.codeBlockCopyButton.copiedToClipboard",defaultMessage:"Copied!",description:"Copied the content of the code block as text to clipboard"}})},bBrM:function(e,o,t){"use strict";var a=t("q1tI")
;const r=Object(t("AeFk").css)("display:flex;position:sticky;justify-content:flex-end;top:0;button{position:absolute;display:flex;justify-content:center;height:32px;width:32px;right:6px;top:4px;padding:2px;opacity:0;transition:opacity 0.2s ease 0s;border:2px solid var(--ds-border, #fff);border-radius:4px;background-color:","var(--ds-surface-overlay, #F4F5F7)",";color:var(--ds-text, rgb(66, 82, 110))!important;}button:hover{border:2px solid var(--ds-border, transparent);background-color:","var(--ds-surface-overlay-hovered, #EBECF0)",";}button:active{border:2px solid var(--ds-border, transparent);background-color:","var(--ds-surface-overlay-pressed, #EBECF0)",";}button.clicked{background-color:","var(--ds-surface-overlay, #253858)",";color:var(--ds-text, #fff)!important;}button.clicked:hover{background-color:","var(--ds-surface-overlay-hovered, #253858)",";}");var c=Object(t("o5hF").c)((({content:e,intl:o})=>{
const[c,n]=Object(a.useState)(o.formatMessage(t("SaGf").a.copyCodeToClipboard)),[s,i]=Object(a.useState)("copy-to-clipboard");return Object(t("AeFk").jsx)("span",{css:r},Object(t("AeFk").jsx)(t("Yto1").a,{content:c,hideTooltipOnClick:!1,position:"top"},Object(t("AeFk").jsx)("div",{onMouseLeave:()=>{n(o.formatMessage(t("SaGf").a.copyCodeToClipboard)),i("copy-to-clipboard")}},Object(t("AeFk").jsx)(t("340+").a,{className:s,"aria-label":c,spacing:"compact",appearance:"subtle","aria-haspopup":!0,iconBefore:Object(t("AeFk").jsx)(t.n(t("JyIQ")).a,{label:c}),onClick:()=>{Object(t("2DEc").a)(e),n(o.formatMessage(t("SaGf").a.copiedCodeToClipboard)),i("copy-to-clipboard clicked")}}))))}));const n=e=>Object(t("AeFk").css)("tab-size:4;background-color:",Object(t("56zV").a)({light:"var(--ds-surface-raised, #F4F5F7)",dark:"var(--ds-surface-raised, #283447)"
})(e),";",t("P7RL").a.DS_CODEBLOCK,"{font-size:",Object(t("9cwX").fb)(Object(t("7w+A").fontSize)()),";line-height:1.5rem;background-image:",Object(t("QO7l").a)({background:Object(t("56zV").a)({light:"var(--ds-background-neutral, #F4F5F7)",dark:"var(--ds-background-neutral, #283447)"})(e),leftCoverWidth:3*Object(t("7w+A").gridSize)()+"px"}),";background-attachment:local,local,local,local,scroll,scroll,scroll,scroll;background-position:0 0,0 0,100% 0,100% 0,100% 0,100% 0,0 0,0 0;}");o.a=({text:e,className:o,allowCopyToClipboard:a,children:r})=>Object(t("AeFk").jsx)("div",{className:o,css:n},a?Object(t("AeFk").jsx)(c,{content:e}):null,r)},jlxL:function(e,o,t){"use strict";t.r(o);var a=t("q1tI");const r=Object(a.lazy)((async()=>t.e("@atlaskit-internal_renderer-codeBlock").then(t.bind(null,"vr6s")))),c=Object(a.memo)(t("8+gw").a);o.default=({text:e,language:o,allowCopyToClipboard:n,codeBidiWarningTooltipEnabled:s,className:i})=>{const{warningLabel:l}=Object(t("c5O9").a)({
enableWarningTooltip:s}),{isInViewport:d,trackingRef:b}=(()=>{const e=Object(a.useRef)(null),[o,t]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(!e||null==e||!e.current)return;const o=e.current,a=new IntersectionObserver((e=>{for(const o of e)o.isIntersecting&&t(!0)}));return a.observe(o),()=>a.disconnect()}),[e]),{isInViewport:o,trackingRef:e}})(),p=((...e)=>e.join(" "))(t("P7RL").a.CODEBLOCK_CONTAINER,i),u=Object(t("AeFk").jsx)(c,{ref:b,text:e,codeBidiWarningTooltipEnabled:s,className:i});return d?Object(t("AeFk").jsx)(a.Fragment,null,Object(t("AeFk").jsx)(a.Suspense,{fallback:u},Object(t("AeFk").jsx)(t("bBrM").a,{className:p,text:e,allowCopyToClipboard:n},Object(t("AeFk").jsx)(r,{language:o,text:e,codeBidiWarningLabel:l,codeBidiWarningTooltipEnabled:s})))):u}}}]);try{window.__jsEvalStop("@atlaskit-internal_renderer-node_WindowedCodeBlock.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/@atlaskit-internal_renderer-node_WindowedCodeBlock.92a3a872564157e24fe8.8.js.map