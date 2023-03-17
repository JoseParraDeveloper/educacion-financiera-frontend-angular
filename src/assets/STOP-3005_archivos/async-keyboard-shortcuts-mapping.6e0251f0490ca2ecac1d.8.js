try{window.performance.mark("async-keyboard-shortcuts-mapping.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-keyboard-shortcuts-mapping","glyphUndefined"],{"0Q2g":function(e,t,a){var n=a("W6/K");e.exports=function(e,t){return e&&e.length&&t&&t.length?n(e,t):e}},"2GsC":function(e,t){e.exports=function(e,t,a,n){for(var o=a-1,r=e.length;++o<r;)if(n(e[o],t))return o;return-1}},"9fHu":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a("q1tI")),o=a("QEuf");const r=e=>n.default.createElement(o.Icon,Object.assign({
dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M13 11V3.993A.997.997 0 0012 3c-.556 0-1 .445-1 .993V11H3.993A.997.997 0 003 12c0 .557.445 1 .993 1H11v7.007c0 .548.448.993 1 .993.556 0 1-.445 1-.993V13h7.007A.997.997 0 0021 12c0-.556-.445-1-.993-1H13z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));r.displayName="AddIcon";var s=r;t.default=s},EwQA:function(e,t,a){var n=a("zZ0H");e.exports=function(e){return"function"==typeof e?e:n}},IbsU:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>{const[t,n]=Object(a("Suqb").a)();return e.children(t,n)};n.displayName="ContainerContextSubscriber"},Isu6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a("q1tI")),o=a("QEuf");const r=e=>n.default.createElement(o.Icon,Object.assign({
dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M5.836 6.95l-3.825 9.97a.5.5 0 00.467.68h1.208a.5.5 0 00.47-.33l.683-1.877a.5.5 0 01.47-.33H9.12a.5.5 0 01.47.33l.683 1.878a.5.5 0 00.47.329h1.272a.5.5 0 00.468-.678L8.685 6.95a.7.7 0 00-.655-.45H6.49a.7.7 0 00-.654.45zm1.566 2.457l1.25 3.414a.2.2 0 01-.188.269H5.966a.2.2 0 01-.188-.269l1.249-3.414a.2.2 0 01.375 0zm10.148 6.465c1.222 0 2.142-1.01 2.142-2.603 0-1.594-.902-2.532-2.142-2.532-1.256 0-2.178.938-2.178 2.532 0 1.575.904 2.603 2.178 2.603zm2.161.602c-.372.833-1.276 1.433-2.445 1.433-2.567 0-4.266-2-4.266-4.638 0-2.551 1.664-4.569 4.195-4.569 1.56 0 2.284.833 2.497 1.329v-.34c0-.247.007-.392.213-.576.137-.122.344-.177.62-.165h.764a.581.581 0 01.496.165c.213.203.192.421.192.577v6.394c0 .227.008.526.023.899 0 .191-.041.336-.124.434a.628.628 0 01-.508.242h-.93c-.193 0-.45-.084-.533-.184-.083-.1-.165-.23-.183-.532a6.342 6.342 0 01-.01-.364v-.105z" fill="currentColor" fill-rule="evenodd"/></svg>'
},e));r.displayName="EmojiKeyboardIcon";var s=r;t.default=s},Mgzh:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));const n=Object(a("0b8M").a)({initialState:{isEnabled:!("false"===Object(a("vlh1").a)("ajs-keyboard-shortcuts-enabled")),error:null},actions:{toggle:(e,t)=>async({setState:e,getState:n})=>{const o=n().isEnabled,r=`/rest/internal/latest/user/preferences/keyboardShortcuts?turn=${o?"off":"on"}`;try{await Object(a("2tF7").h)(r),e({isEnabled:!o,error:null}),Object(a("SALc").h)(t,"keyboardShortcutsToggle",{isEnabled:!o})}catch(s){e({error:s}),Object(a("q2+m").a)({meta:{id:"keyboardShortcutToggleFailure",packageName:"jiraCommonLegacyDoNotAddAnythingNew"},error:s})}}}}),o=Object(a("dq9g").b)(n);Object(a("Y6nV").a)(n)},OFL0:function(e,t,a){var n=a("lvO4"),o=a("4sDh");e.exports=function(e,t){return null!=e&&o(e,t,n)}},P0aG:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");const o=({children:e})=>{
const{collapseLeftSidebar:t,expandLeftSidebar:o}=Object(a("r7wj").a)(),{isCollapsed:r,width:s}=Object(a("r7wj").b)(),c=Object(n.useRef)({state:{isCollapsed:r,isResizing:!1,isResizeDisabled:!1,productNavWidth:s},collapse:t,expand:o,toggleCollapse:()=>r?o():t()}),i=Object(n.useMemo)((()=>({state:{isCollapsed:r,isResizing:!1,isResizeDisabled:!1,productNavWidth:s},collapse:t,expand:o,toggleCollapse:()=>r?o():t()})),[t,o,r,s]);return c.current=Object.assign(c.current,i),e(c.current)}},SKAX:function(e,t,a){var n=a("JC6p"),o=a("lQqw")(n);e.exports=o},VJii:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));const n="UI",o="TRACK"},"W6/K":function(e,t,a){var n=a("eUgh"),o=a("R/W3"),r=a("2GsC"),s=a("sEf8"),c=a("Q1l4"),i=Array.prototype.splice;e.exports=function(e,t,a,l){var d=l?r:o,u=-1,m=t.length,p=e;for(e===t&&(t=c(t)),a&&(p=n(e,s(a)));++u<m;)for(var h=0,b=t[u],g=a?a(b):b;(h=d(p,g,h,l))>-1;)p!==e&&i.call(p,h,1),i.call(e,h,1);return e}},
Zqya:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a("q1tI")),o=a("QEuf");const r=e=>n.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M12 18a1 1 0 010-2 1 1 0 010 2m-2-9a1 1 0 11-2 0 1 1 0 012 0"/><path d="M15.89 8.048a3.971 3.971 0 00-2.951-2.94A4.005 4.005 0 008 9.087a.073.073 0 00.009.008l1.878.022.112-.116A2.002 2.002 0 0112 7c1.103 0 2 .897 2 2 0 1.102-.897 2-2 2h.008a1 1 0 00-.998.987v2.014a1 1 0 102 0v-.782c0-.217.145-.399.349-.472a3.991 3.991 0 002.53-4.699"/></g></svg>'},e));r.displayName="QuestionIcon";var s=r;t.default=s},bNQv:function(e,t,a){var n=a("gFfm"),o=a("SKAX"),r=a("EwQA"),s=a("Z0cm");e.exports=function(e,t){return(s(e)?n:o)(e,r(t))}},bcBz:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a.n(n)
;const r=Object(n.createContext)(a("k2SY").b),s=({children:e=null})=>{const t=Object(n.useMemo)((()=>new(a("k2SY").a)),[]),s=Object(n.useContext)(r)||a("k2SY").b;return Object(n.useEffect)((()=>s.addChildRegistry(t)),[]),o.a.createElement(r.Provider,{value:t},e)};s.displayName="ShortcutScope",t.b=s},dLw9:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");const o=(e,t=[])=>{const o=Object(a("kHJ8").a)(),r=Object(n.useRef)(e);Object(n.useEffect)((()=>{r.current=e}),[e]),Object(n.useEffect)((()=>o(r.current)),[...t,o])}},fbZ3:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n={open:()=>({setState:e})=>{e({isOpen:!0})},close:()=>({setState:e})=>{e({isOpen:!1})}};var o=Object(a("0b8M").a)({name:"modals",initialState:{isOpen:!1},actions:n});const r=Object(a("UCyb").a)(o),s=Object(a("Y6nV").a)(o,{displayName:"ModalsSubscriber",selector:e=>e.isOpen})},hzCD:function(e,t,a){var n=a("EA7m")(a("0Q2g"));e.exports=n},
k2SY:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a("3tO9"),o=a.n(n),r=(a("bNQv"),a("OFL0")),s=a.n(r),c=(a("J2iB"),a("hzCD")),i=a.n(c);class l{constructor(){this.children=[],this.keyMapRetrievers=[]}addChildRegistry(e){return this.children.push(e),()=>{i()(this.children,e)}}addKeyMap(e){return this.keyMapRetrievers.push(e),()=>{i()(this.keyMapRetrievers,e)}}getActiveKeyMap(){const e=this.children.length?this.children.map((e=>e.getActiveKeyMap())):this.keyMapRetrievers.map((e=>e().keyMap));return o()({},(e=>e.reduce(((e,t)=>o()(o()({},e),Object.keys(t).reduce(((a,n)=>{var r,c;return!s()(e,n)||(null!==(r=e[n].priority)&&void 0!==r?r:0)<(null!==(c=t[n].priority)&&void 0!==c?c:1)?o()(o()({},a),{},{[n]:t[n]}):a}),{}))),{}))(e))}getKeyMapInfo(){const e=this.children.length?this.children.map((e=>e.getKeyMapInfo())):this.keyMapRetrievers.map((e=>e()));return[].concat(...e)}}const d=new l},kHJ8:function(e,t,a){"use strict"
;a.d(t,"a",(function(){return o}));var n=a("q1tI");const o=()=>{const{addCommands:e,removeCommands:t}=Object(a("mbbK").a)();return Object(n.useCallback)((a=>(e(a),()=>{t(a)})),[e,t])}},kdyv:function(e,t,a){"use strict";var n=a("QILm"),o=a.n(n),r=a("q1tI"),s=a.n(r),c=a("4c1C"),i=a("8yf6");a("sx9y"),a("DlyV"),a("fjAU"),a("M67X"),a("4XzM"),a("MSNS"),a("k558"),a("g5/V");const l={Control:!0,Meta:!0,Shift:!0,Alt:!0,AltGraph:!0,CapsLock:!0,Fn:!0,FnLock:!0,Hyper:!0,NumLock:!0,OS:!0,ScrollLock:!0,Super:!0,Symbol:!0,SymbolLock:!0},d=e=>"string"==typeof e.key&&("Escape"===e.key||!(e=>"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName||!0===e.isContentEditable)(e.target)&&!l[e.key]),u=()=>null==document.querySelector('.aui-blanket:not([aria-hidden="true"])');let m,p;const h=new i.Subject;const b=()=>{h.next()},g=e=>t=>t.startsWith(`${e} `);var f=e=>{Object(a("r5cN").a)()?(e=>{const{sequence:t,e:n}=e||{},o=a("k2SY").b.getActiveKeyMap();void 0!==t&&o[t]?(o[t].callback(n),
b()):void 0!==t&&Object.keys(o).some(g(t))||b()})(e):(e=>{const t=a("k2SY").b.getActiveKeyMap();void 0!==e&&t[e]?(t[e].callback(),b()):void 0!==e&&Object.keys(t).some(g(e))||b()})(e)},y=a("3tO9"),v=a.n(y);const S=(e,t,n="keyboard-shortcuts.common")=>()=>{try{t()}catch(o){a("ZXUb").a.safeErrorWithoutCustomerData(n,`Error firing shortcut '${e}': ${o.message}`,o)}},k=(e,t,n="keyboard-shortcuts.common")=>o=>{try{t(o)}catch(r){a("ZXUb").a.safeErrorWithoutCustomerData(n,`Error firing shortcut '${e}': ${r.message} (commandPaletteBlockNativeShortcutFF=true)`,r)}},C=(e,t)=>Object.keys(e).reduce(((n,o)=>v()(v()({},n),{},{[o]:v()(v()({},e[o]),{},{callback:Object(a("r5cN").a)()?k(o,e[o].callback,t):S(o,e[o].callback,t)})})),{}),O=["useKeyboardShortcutsToggle"];let j=0,E=null;const I=({keyMap:e,label:t,location:n})=>{const o=Object(r.useContext)(a("bcBz").a)||a("k2SY").b,s=Object(r.useCallback)((()=>o.addKeyMap((()=>({keyMap:C(e,n),label:t})))),[t,o,e,n]);return Object(r.useEffect)((()=>{j+=1
;const e=s();return()=>{e(),j-=1,E&&0===j&&(E.unsubscribe(),E=null)}}),[s]),Object(r.useEffect)((()=>{E=E||(()=>{if(Object(a("r5cN").a)()){if(!p){p=c.Observable.fromEvent(document,"keydown").filter(d).filter(u).map(a("yO4b").d);const e=p.scan(((e,t)=>{if(t&&e)return{sequence:`${String(e.sequence)} ${String(t.sequence)}`,e:t.e}}));p=p.debounceTime(1e3).startWith(null).merge(h).switchMapTo(e)}return p}if(!m){m=c.Observable.fromEvent(document,"keydown").filter(d).filter(u).map(a("yO4b").c);const e=m.scan(((e,t)=>`${String(e)} ${String(t)}`));m=m.debounceTime(1e3).startWith(null).merge(h).switchMapTo(e)}return m})().subscribe(f)}),[o,e]),null};t.a=e=>{let{useKeyboardShortcutsToggle:t=a("Mgzh").a}=e,n=o()(e,O);const[{isEnabled:r}]=t();return r?s.a.createElement(I,n):null}},lQqw:function(e,t,a){var n=a("MMmD");e.exports=function(e,t){return function(a,o){if(null==a)return a;if(!n(a))return e(a,o);for(var r=a.length,s=t?r:-1,c=Object(a);(t?s--:++s<r)&&!1!==o(c[s],s,c););return a}}},
lvO4:function(e,t){var a=Object.prototype.hasOwnProperty;e.exports=function(e,t){return null!=e&&a.call(e,t)}},mbbK:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u}));a("pVnL"),a("q1tI");var n=a("3tO9"),o=a.n(n),r=a("EcEN"),s=a.n(r);const c={parentCommand:[],expandedCommand:void 0,childCommands:void 0},i={open:()=>({setState:e})=>{e({commandPaletteSessionId:s.a.v4(),isOpen:!0,activeIndex:0,search:""})},toggle:()=>({setState:e,getState:t})=>{const a=!t().isOpen;e(o()({isOpen:a,activeIndex:0,search:"",commandPaletteSessionId:a?s.a.v4():""},a?{}:c))},close:()=>({setState:e})=>{e(o()({isOpen:!1,commandPaletteSessionId:"",search:""},c))},addCommands:e=>({setState:t,getState:a})=>{t({commands:a().commands.concat(e)})},removeCommands:e=>({setState:t,getState:a})=>{t({commands:a().commands.filter((t=>!e.includes(t)))})},handleSearch:e=>({setState:t})=>{t({search:e,activeIndex:0})},forceFocusSearch:(e=!1)=>({setState:t})=>{t({forceSearchFocus:e})},
setActiveIndex:e=>({setState:t,getState:a})=>{const{isSearchFieldFocused:n}=a();t(o()({activeIndex:e},n?{}:{forceSearchFocus:!0}))},executeCommand:(e,t)=>({setState:n,getState:o})=>{var r,s;const c={search:"",activeIndex:0},i=o(),l={commandPaletteId:e.id,commandPaletteSessionId:i.commandPaletteSessionId,cpMenu:(null===(r=i.expandedCommand)||void 0===r?void 0:r.id)||"rootMenu",action:e.name,actionCategory:(null===(s=e.section)||void 0===s?void 0:s.name)||"null",searchTaken:!!i.search,method:(null==t?void 0:t.method)||"undefined"};if(null!=t&&t.onAnalytics&&null!=t&&t.createAnalyticsEvent){const e=t.createAnalyticsEvent({action:"navigation",actionSubject:"commandPalette"});t.onAnalytics(e,a("VJii").a,l)}if(e.loadChildren)i.expandedCommand&&(c.parentCommand=[...i.parentCommand,i.expandedCommand]),c.expandedCommand=e,c.childCommands=void 0,c.forceSearchFocus=!0,n(c);else if(e.perform){if(c.commandPaletteSessionId="",c.isOpen=!1,c.expandedCommand=void 0,c.parentCommand=[],
c.childCommands=void 0,n(c),null!=t&&t.onAnalytics&&null!=t&&t.createAnalyticsEvent){const e=t.createAnalyticsEvent({action:"closed",actionSubject:"commandPalette"});t.onAnalytics(e,a("VJii").b,l)}setTimeout((()=>{var t;null===(t=e.perform)||void 0===t||t.call(e)}),0)}},goBackLevel:e=>({setState:t,getState:a})=>{const n=a(),o={search:"",activeIndex:0,childCommands:void 0,forceSearchFocus:!0};n.parentCommand.length&&!e?(o.expandedCommand=n.parentCommand[n.parentCommand.length-1],o.parentCommand=n.parentCommand.slice(0,n.parentCommand.length-1)):(o.loadingList=!1,o.parentCommand=[],o.expandedCommand=void 0,o.childCommands=void 0),t(o)},setChildCommands:e=>({setState:t})=>{t({childCommands:e})},setLoadingList:e=>({setState:t})=>{t({loadingList:e})},setFocusInput:e=>({setState:t})=>t({isSearchFieldFocused:e})},l=Object(a("0b8M").a)({initialState:{commandPaletteSessionId:"",isOpen:!1,search:"",activeIndex:0,isSearchFieldFocused:!1,commands:[],parentCommand:[]},actions:i,
name:"commandPalette"}),d=Object(a("dq9g").b)(l),u=Object(a("dq9g").a)(l)},ngbQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("3tO9"),o=a.n(n),r=a("QILm"),s=a.n(r),c=a("q1tI"),i=a.n(c);const l=({commands:e,deps:t})=>(Object(a("dLw9").a)(e,t),null),d=["loadChildren","perform"],u=e=>{const{keyMap:t}=e,n=Object(c.useMemo)((()=>{const e=[];return Object.entries(t).forEach((([t,a])=>{if(!a.registerInCommandPalette)return;const n=a.registerInCommandPalette,{loadChildren:r,perform:c}=n,i=s()(n,d);e.push(o()(o()({id:`command-shortcut-${t}`,shortcut:t},i),r?{loadChildren:r}:{perform:()=>c?c():a.callback()}))})),e}),[t]),r=Object(c.useMemo)((()=>n.map((({id:e})=>e)).toString()),[n]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(a("sBEl").b,e),!!n.length&&i.a.createElement(l,{commands:n,deps:[r]}))}},sBEl:function(e,t,a){"use strict";a.d(t,"b",(function(){return a("kdyv").a})),a.d(t,"a",(function(){return a("bcBz").b}))},yO4b:function(e,t,a){"use strict"
;a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m}));const n=e=>e.key.length>1||" "===e.key,o=[{name:"ctrl",test:e=>e.ctrlKey},{name:"shift",test:e=>e.shiftKey&&n(e)},{name:"meta",test:e=>e.metaKey||e.getModifierState&&e.getModifierState("OS")}],r=e=>n(e)?e.key.toLowerCase():e.shiftKey?e.key.toUpperCase():e.key.toLowerCase(),s=e=>e&&e.key?o.filter((t=>t.test(e))).map((e=>e.name)).concat(r(e)).join("+"):"",c=e=>e&&e.key?{sequence:o.filter((t=>t.test(e))).map((e=>e.name)).concat(r(e)).join("+"),e}:{sequence:"",e},i=" |arrowdown|arrowleft|arrowright|arrowup|backspace|clear|delete|end|enter|escape|home|insert|pagedown|pageup|pause|printscreen|tab",l=`(ctrl\\+)?(shift\\+(?=(?:(?:meta\\+)?(?:${i}))))?(meta\\+)?(${i}|[!-~])`,d=RegExp(`^${l}( ${l})*$`),u=e=>d.test(e),m=(e,t)=>e&&t?t===e||(0===e.indexOf(t)?" "===e[t.length]:0===t.indexOf(e)&&" "===t[e.length]):e===t},zMlt:function(e,t,a){"use strict";a.r(t)
;var n=a("3tO9"),o=a.n(n),r=a("zuKv");const s=({createAnalyticsEvent:e,id:t,key:a,attributes:n={}})=>{e({action:"pressed",actionSubject:"keyboardShortcut",actionSubjectId:t,attributes:o()({navVersion:window.__NAV_VERSION__||"UNKNOWN",key:a},n)}).fire(r.FabricChannel.navigation)},c=()=>Object(a("0zaF").a)("global.command-palette",!1);var i=a("q1tI"),l=a.n(i),d=a("DTaC");const u=Object(d.h)((()=>Promise.all([a.e("vendor~d0ae3f07"),a.e("vendor~31ecd969"),a.e("vendor~1f20a385"),a.e("atlassian-jira-keyboard-shortcuts.dialog")]).then(a.bind(null,"Mx2y"))),{ssr:!1,moduleId:"./src/packages/common-legacy-do-not-add-anything-new/src/components/keyboard-shortcuts-dialog/index.tsx"}),m=e=>l.a.createElement(a("iqve").a,{id:"integrations.keyboard-shortcuts-dialog",packageName:"jira-keyboard-shortcuts",fallback:"unmount"},l.a.createElement(a("n+vo").a,{fallback:null},l.a.createElement(u,e)));m.displayName="KeyboardShortcutsDialog";var p=a("pVnL"),h=a.n(p),b=Object(a("D6b/").defineMessages)({
globalShortcuts:{id:"keyboard-shortcuts.global-shortcuts",defaultMessage:"Global shortcuts",description:""},quickSearch:{id:"keyboard-shortcuts.quick-search",defaultMessage:"Quick search",description:""},closeDrawer:{id:"keyboard-shortcuts.close-drawer",defaultMessage:"Close drawer",description:""},createIssue:{id:"keyboard-shortcuts.create-issue",defaultMessage:"Create issue",description:""},keyboardShortcuts:{id:"keyboard-shortcuts.keyboard-shortcuts",defaultMessage:"Keyboard shortcuts",description:""},keyboardShortcutsCommandPalette:{id:"keyboard-shortcuts.keyboard-shortcuts-command-palette",defaultMessage:"View keyboard shortcuts",description:"Command in the command palette which triggers the modal that displays all keyboard shortcuts"},findIssues:{id:"keyboard-shortcuts.find-issues",defaultMessage:"Find issues",description:""},browseAProject:{id:"keyboard-shortcuts.browse-a-project",defaultMessage:"Browse to a project",description:""},toggleSidebar:{
id:"keyboard-shortcuts.toggle-sidebar",defaultMessage:"Toggle sidebar",description:""},openHelpPanel:{id:"keyboard-shortcuts.open-help-panel",defaultMessage:"Open help panel",description:"Description of the keyboard shortcut to open the help-panel"},openCommandPalette:{id:"keyboard-shortcuts.open-command-palette",defaultMessage:"Open command palette",description:"Description of the keyboard shortcut to open the command palette"},goToSection:{id:"keyboard-shortcuts.go-to-section",defaultMessage:"Go to",description:"Command Palette section name, used to group navigation commands like backlog, board, page search"},atlassianSearch:{id:"keyboard-shortcuts.atlassian-search",defaultMessage:"Atlassian search",description:"Command in the command palette that will trigger that will focus the user in the search input"},getHelp:{id:"keyboard-shortcuts.get-help",defaultMessage:"Get help",description:"Command in the command palette that will trigger the help panel on the sidebar"},helpSection:{
id:"keyboard-shortcuts.help-section",defaultMessage:"Help",description:"Command Palette section name, used to group help commands like get help, keyboard shortcuts"},quickActionsSection:{id:"keyboard-shortcuts.quick-actions-section",defaultMessage:"Quick actions",description:"Command Palette section name, used to group action commands like create issue, change theme"}});const g=()=>(()=>{var e,t;return/Mac/i.test(null===(e=window)||void 0===e||null===(t=e.navigator)||void 0===t?void 0:t.platform)})()?"meta":"ctrl";class f extends i.Component{getKeyMap({toggleHelpPanel:e,openKeyboardShortcutsDialog:t,toggleCollapse:n,isNextGen:r}){const{baseUrl:s,navigateToIssueSearch:i,navigateToMostRecentProject:d,showIssueCreate:u,showSearch:m,shouldUseHelpShortcut:p}=this.props,{formatMessage:h}=c()?this.props:{formatMessage:void 0};return!0===r?o()({"?":o()({callback:t},c()?{registerInCommandPalette:{name:h(b.keyboardShortcutsCommandPalette),priority:1,section:{name:h(b.helpSection),priority:1},
leftIcon:()=>l.a.createElement(a.n(a("Isu6")).a,{label:h(b.keyboardShortcutsCommandPalette)})}}:void 0),"/":o()({callback:m},c()?{registerInCommandPalette:{name:h(b.atlassianSearch),priority:2,section:{name:h(b.goToSection)},leftIcon:()=>l.a.createElement(a.n(a("UN/d")).a,{label:h(b.atlassianSearch)})}}:void 0),"[":{callback:n},escape:{callback:()=>{}},"g p":{callback:()=>d(s)},"g i":{callback:()=>i(s)},c:o()({callback:u},c()?{registerInCommandPalette:{name:h(b.createIssue),section:{name:h(b.quickActionsSection)},leftIcon:()=>l.a.createElement(a.n(a("9fHu")).a,{label:h(b.createIssue)})}}:void 0)},p&&__SPA__?{h:o()({callback:e},c()?{registerInCommandPalette:{name:h(b.getHelp),priority:2,section:{name:h(b.helpSection)},leftIcon:()=>l.a.createElement(a.n(a("Zqya")).a,{label:h(b.getHelp)})}}:void 0)}:null):o()(o()({"/":o()({callback:m,label:l.a.createElement(a("GKBH").a,b.quickSearch)},c()?{registerInCommandPalette:{name:h(b.atlassianSearch),priority:2,section:{name:h(b.goToSection)},
leftIcon:()=>l.a.createElement(a.n(a("UN/d")).a,{label:h(b.atlassianSearch)})}}:void 0),escape:{callback:()=>{},label:l.a.createElement(a("GKBH").a,b.closeDrawer)},c:o()({callback:u,label:l.a.createElement(a("GKBH").a,b.createIssue)},c()?{registerInCommandPalette:{name:h(b.createIssue),section:{name:h(b.quickActionsSection)},leftIcon:()=>l.a.createElement(a.n(a("9fHu")).a,{label:h(b.createIssue)})}}:void 0),"?":o()({callback:t,label:l.a.createElement(a("GKBH").a,b.keyboardShortcuts)},c()?{registerInCommandPalette:{name:h(b.keyboardShortcutsCommandPalette),priority:1,section:{name:h(b.helpSection)},leftIcon:()=>l.a.createElement(a.n(a("Isu6")).a,{label:h(b.keyboardShortcutsCommandPalette)})}}:void 0),"g i":{callback:()=>i(s),label:l.a.createElement(a("GKBH").a,b.findIssues)},"g p":{callback:()=>d(s),label:l.a.createElement(a("GKBH").a,b.browseAProject)},"[":{callback:n,label:l.a.createElement(a("GKBH").a,b.toggleSidebar)}},p&&__SPA__?{h:o()({callback:e,
label:l.a.createElement(a("GKBH").a,b.openHelpPanel)},c()?{registerInCommandPalette:{name:h(b.getHelp),priority:2,section:{name:h(b.helpSection)},leftIcon:()=>l.a.createElement(a.n(a("Zqya")).a,{label:h(b.getHelp)})}}:void 0)}:null),c()&&!!this.props.isCommandPaletteOptedIn&&{[`${g()}+k`]:{callback:()=>{},label:l.a.createElement(a("GKBH").a,b.openCommandPalette),priority:-1,isNew:!0}})}createToggleCollapse(e){return()=>{const{createAnalyticsEvent:t}=this.props,{state:{isCollapsed:a},toggleCollapse:n}=e,o=document.querySelector('[data-testid="ContextualNavigation"]');!0===(o&&"0px"!==o.style.width)&&(s({createAnalyticsEvent:t,id:"expandCollapseSidebar",key:"["}),(({createAnalyticsEvent:e,isCollapsed:t})=>{e({action:t?"expanded":"collapsed",actionSubject:"productNavigation",attributes:{trigger:"keyboardShortcut"}}).fire(r.FabricChannel.navigation)})({createAnalyticsEvent:t,isCollapsed:a}),n())}}createToggleHelpPanel(e){return()=>{const{createAnalyticsEvent:t,toggleHelpPanel:n}=this.props
;s({createAnalyticsEvent:t,id:"openHelpPanel",key:"h",attributes:{helpPanelVersion:a("ZMdd").b,helpPanelType:"inProductHelp",nextGenProject:e}}),n()}}createOpenKeyboardShortcutsDialog(e){return()=>{const{createAnalyticsEvent:t}=this.props;s({createAnalyticsEvent:t,id:"keyboardShortcuts",key:"?"}),e()}}render(){const{ApplicationPermissionsSubscriber:e,KeyboardShortcutsDialog:t,ProjectCreateDrawerConsumer:n,Shortcuts:o,NavUIControllerSubscriber:r}=this.props;return l.a.createElement(e,null,(({data:e})=>l.a.createElement(n,null,(({data:{isOpen:n}})=>n?null:l.a.createElement(a("fbZ3").a,{scope:"keyboard-shortcuts"},l.a.createElement(a("fbZ3").b,null,((n,{open:s,close:c})=>l.a.createElement(a("IbsU").a,null,(({data:i})=>{const d=!(!i||"project"!==i.contextType)&&i.project.isSimplified;return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement(t,{isOpen:!0,onDialogDismissed:c,applicationPermissionData:e.applicationPermissions,isNextGen:d,shouldUseHelpShortcut:!0
}),l.a.createElement(r,null,(e=>l.a.createElement(o,{isSpa:__SPA__,label:d?null:l.a.createElement(a("GKBH").a,b.globalShortcuts),keyMap:this.getKeyMap({toggleHelpPanel:this.createToggleHelpPanel(d),openKeyboardShortcutsDialog:this.createOpenKeyboardShortcutsDialog(s),toggleCollapse:this.createToggleCollapse(e),isNextGen:d})}))))})))))))))}}f.displayName="KeyboardShortcuts";const y=e=>{const{formatMessage:t}=Object(a("3NU0").a)(),{isCommandPaletteOptedIn:n}=Object(a("duBR").b)();return l.a.createElement(f,h()({formatMessage:t,isCommandPaletteOptedIn:!!n},e))};y.displayName="KeyboardShortcutsWithCommandPalette";var v=Object(a("WdOs").a)(c,y,f);const S=Object(a("WdOs").a)(c,a("ngbQ").a,a("sBEl").b);t.default=Object(a("mHTv").a)(Object(a("VHV8").a)({showSearch:e=>s({createAnalyticsEvent:e,id:"quickSearch",key:"/"}),showIssueCreate:e=>s({createAnalyticsEvent:e,id:"createIssue",key:"c"}),navigateToIssueSearch:e=>s({createAnalyticsEvent:e,id:"findIssues",key:"g i"}),
navigateToMostRecentProject:e=>s({createAnalyticsEvent:e,id:"browseToProject",key:"g p"})})(v),{navigateToIssueSearch:e=>window.open(`${e}/issues/`,"_self"),navigateToMostRecentProject:e=>Object(a("2tF7").c)(`${e}/rest/internal/2/productsearch/search?type=projects`).then((e=>{const t=e.find((({id:e})=>"quick-search-projects"===e));t&&t.items&&t.items[0]&&t.items[0].url&&window.open(t.items[0].url,"_self")})),ApplicationPermissionsSubscriber:a("ZWaj").a,KeyboardShortcutsDialog:m,ProjectCreateDrawerConsumer:a("cBRi").a,Shortcuts:S,NavUIControllerSubscriber:a("P0aG").a})}}]);try{window.__jsEvalStop("async-keyboard-shortcuts-mapping.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-keyboard-shortcuts-mapping.6e0251f0490ca2ecac1d.8.js.map