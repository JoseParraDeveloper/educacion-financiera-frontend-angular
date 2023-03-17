try{window.performance.mark("@atlaskit-internal_renderer-node_MediaGroup.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["@atlaskit-internal_renderer-node_MediaGroup"],{"/u5F":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(t){return t&&t.__esModule?t:{default:t}}(i("q1tI")),n=i("QEuf");const o=t=>s.default.createElement(n.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.793 5.793a.999.999 0 000 1.414L15.586 11H6a1 1 0 000 2h9.586l-3.793 3.793a.999.999 0 000 1.414c.39.39 1.024.39 1.415 0l5.499-5.5a.997.997 0 00.293-.679v-.057a.996.996 0 00-.293-.678l-5.499-5.5a1 1 0 00-1.415 0z" fill="currentColor" fill-rule="evenodd"/></svg>'},t));o.displayName="ArrowRightIcon";var r=o;e.default=r},"9PHQ":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r}));const s={width:156,height:125},n={
width:435,height:125},o={width:300,height:300},r=t=>"image"===t?s:"square"===t?o:"horizontal"===t?n:s},Hi1j:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return h}));var s=i("3tO9"),n=i.n(s),o=i("lSNA"),r=i.n(o),a=i("q1tI"),l=i.n(a);class h extends a.PureComponent{constructor(...t){super(...t),r()(this,"state",{animate:!1,offset:0}),r()(this,"handleSize",(({offset:t})=>this.setState({offset:t}))),r()(this,"handleScroll",(({animate:t,offset:e})=>this.setState({animate:t,offset:e}))),r()(this,"onMediaClick",((t,e,i)=>(s,n)=>{const o={collectionName:e.props.collection,list:i};t(s,o,n)}))}render(){let t;if(1===l.a.Children.count(this.props.children)){const e=l.a.Children.toArray(this.props.children)[0];switch(e.props.type){case"file":t=this.renderSingleFile(e);break;case"link":t=null;break;default:t=this.renderSingleLink(e)}}else t=this.renderStrip();return l.a.createElement("div",{className:"MediaGroup"},t)}renderSingleFile(t){return l.a.cloneElement(t,{
resizeMode:"stretchy-fit",cardDimensions:i("9PHQ").a,useInlinePlayer:!1,featureFlags:this.props.featureFlags,enableDownloadButton:this.props.enableDownloadButton})}renderSingleLink(t){return l.a.cloneElement(t,{appearance:"auto",featureFlags:this.props.featureFlags})}cloneFileCard(t,e){const i=this.props&&this.props.eventHandlers&&this.props.eventHandlers.media&&this.props.eventHandlers.media.onClick,s=i?this.onMediaClick(i,t,e):void 0;return l.a.cloneElement(t,{useInlinePlayer:!1,eventHandlers:n()(n()({},t.props.eventHandlers),{},{media:{onClick:s}}),featureFlags:this.props.featureFlags,enableDownloadButton:this.props.enableDownloadButton})}renderStrip(){const{children:t}=this.props,{animate:e,offset:s}=this.state,n=l.a.Children.map(t,(t=>this.mapMediaPropsToIdentifier(t.props))).filter((t=>!!t));return l.a.createElement(i("S8d9").a,{animate:e,offset:s,onSize:this.handleSize,onScroll:this.handleScroll},l.a.Children.map(t,(t=>{const e=t;switch(e.props.type){case"file":
return this.cloneFileCard(e,n);case"link":return null;default:return l.a.cloneElement(e,{featureFlags:this.props.featureFlags,enableDownloadButton:this.props.enableDownloadButton})}})))}mapMediaPropsToIdentifier({id:t,type:e,occurrenceKey:i,collection:s}){switch(e){case"file":return{id:t,mediaItemType:e,occurrenceKey:i,collectionName:s};case"link":return;case"external":return{id:t,mediaItemType:"file",occurrenceKey:i,collectionName:s}}}}h.displayName="MediaGroup"},S8d9:function(t,i,s){"use strict";s.d(i,"a",(function(){return T}));var n=s("lSNA"),o=s.n(n),r=s("q1tI"),a=s.n(r),l=s("sBL/"),h=s.n(l);const c={name:"k6wqd6",styles:"position:relative;padding:3px 0;border-radius:3px;&:hover .arrow{opacity:1;}.ellipsed-text{white-space:initial;}"},d={name:"1h10tu",styles:"width:inherit;overflow:hidden;padding:2px 0"},f={name:"fsf3or",styles:"margin:0;padding:0;transition-property:transform;transition-timing-function:cubic-bezier(0.77, 0, 0.175, 1);white-space:nowrap;display:inline-block"},u={
name:"19lahzv",styles:"list-style-type:none;margin:0;padding:0 4px;display:inline-block;vertical-align:middle;font-size:0"},p=Object(s("AeFk").css)("position:absolute;top:50%;transform:translateY(-50%);background-color:","var(--ds-surface-overlay, #F4F5F7)",";border-radius:100%;display:flex;cursor:pointer;transition:opacity 0.3s;box-shadow:var(--ds-shadow-overlay, 0 1px 6px 0 rgba(0, 0, 0, 0.6));color:var(--ds-icon, black);width:30px;height:30px;justify-content:center;opacity:0;&:hover{color:var(--ds-text-subtle, black);background-color:","var(--ds-surface-overlay-hovered, #DFE1E6)",";}&:active{color:","var(--ds-text-selected, #0052CC)",";background-color:","var(--ds-background-selected, #DEEBFF)",";}svg{height:30px;width:20px;}"),m=Object(s("AeFk").css)(p,";left:8px;svg{padding-right:2px;}"),g=Object(s("AeFk").css)(p,";right:8px;svg{padding-left:1px;}"),v={name:"atrqgo",
styles:"position:absolute;z-index:10;height:100%;top:0;width:2px;background-color:var(--ds-border, rgba(0, 0, 0, 0.2))"},w=Object(s("AeFk").css)(v,";left:0;"),b=Object(s("AeFk").css)(v,";right:0;"),O=({children:t})=>Object(s("AeFk").jsx)("div",{css:w},t),x=({children:t,onClick:e})=>Object(s("AeFk").jsx)("div",{css:m,className:"arrow",onClick:e},t),k=({children:t})=>Object(s("AeFk").jsx)("div",{css:b},t),M=({children:t,onClick:e})=>Object(s("AeFk").jsx)("div",{css:g,className:"arrow",onClick:e},t),y=({onClick:t})=>Object(s("AeFk").jsx)(O,null,Object(s("AeFk").jsx)(x,{onClick:t},Object(s("AeFk").jsx)(s.n(s("TUgI")).a,{label:"left"}))),S=({onClick:t})=>Object(s("AeFk").jsx)(k,null,Object(s("AeFk").jsx)(M,{onClick:t},Object(s("AeFk").jsx)(s.n(s("/u5F")).a,{label:"right"}))),C=({children:t,"data-testid":e})=>Object(s("AeFk").jsx)("div",{css:c,"data-testid":e
},t),E=Object(r.forwardRef)((({children:t,onWheel:e,onTouchStart:i,onTouchMove:n,onTouchEnd:o,"data-testid":r},a)=>Object(s("AeFk").jsx)("div",{css:d,ref:a,onWheel:e,onTouchStart:i,onTouchMove:n,onTouchEnd:o,"data-testid":r},t))),F=a.a.forwardRef((({children:t,style:e},i)=>Object(s("AeFk").jsx)("ul",{css:f,ref:i,style:e},t))),j=({children:t,index:e})=>Object(s("AeFk").jsx)("li",{css:u,className:"media-filmstrip-list-item","data-testid":"media-filmstrip-list-item",key:e},t),A={attributes:!0,childList:!0,subtree:!0,characterData:!0};class T extends a.a.Component{constructor(t){super(t),o()(this,"previousOffset",0),o()(this,"state",{bufferWidth:0,windowWidth:0,touchMoveStartPosition:0,isTouchMoveInProgress:!1}),o()(this,"handleSizeChange",(()=>{const{windowElement:t,bufferElement:e}=this;let i=0,s=0,n=[];if(t&&e){i=e.getBoundingClientRect().width,s=t.getBoundingClientRect().width;const o=Array.prototype.slice.call(e.children,0);let r=0;n=o.map(((t,e)=>{
const i=t.getBoundingClientRect().width,s={left:r,right:r+i-1};return r+=i,s}))}const{bufferWidth:o,windowWidth:r}=this.state;i===o&&s===r||this.setState({bufferWidth:i,windowWidth:s},(()=>{this.childOffsets=n;const{onSize:t}=this.props;t&&t({offset:Math.min(this.maxOffset,this.offset),offsets:n,width:s,minOffset:this.minOffset,maxOffset:this.maxOffset})}))})),o()(this,"handleWindowElementChange",(t=>{this.windowElement=t,this.handleSizeChange()})),o()(this,"handleBufferElementChange",(t=>{t&&(this.bufferElement=t,this.handleSizeChange(),this.initMutationObserver())})),o()(this,"handleMutation",(t=>{this.handleSizeChange()})),o()(this,"handleLeftClick",(t=>{t.stopPropagation();const{onScroll:e}=this.props;if(e){const{windowWidth:t}=this.state;e({direction:"left",offset:this.getClosestForLeft(this.offset-t),animate:!0})}})),o()(this,"handleRightClick",(t=>{t.stopPropagation();const{onScroll:e}=this.props;if(e){const{windowWidth:t}=this.state;e({direction:"right",
offset:this.getClosestForRight(this.offset+t),animate:!0})}})),o()(this,"handleScroll",(t=>{const e=Math.abs(t.deltaX)>Math.abs(t.deltaY);if(!e)return;t.preventDefault();const{onScroll:i}=this.props;if(i&&e){const e=Math.max(this.minOffset,Math.min(this.maxOffset,this.offset+t.deltaX));i({direction:t.deltaX<0?"left":"right",offset:e,animate:!1})}})),o()(this,"handleTouchStart",(t=>{t.touches[0]&&this.setState({touchMoveStartPosition:t.touches[0].clientX,isTouchMoveInProgress:!0})})),o()(this,"handleTouchEnd",(t=>{t.touches[0]&&this.setState({touchMoveStartPosition:t.touches[0].clientX,isTouchMoveInProgress:!1})})),o()(this,"handleTouchMove",(t=>{const{onScroll:e}=this.props;if(this.state.isTouchMoveInProgress&&e){const i=t.touches[0].clientX,s=this.state.touchMoveStartPosition?this.offset-(i-this.state.touchMoveStartPosition):this.offset;e({direction:s>this.offset?"left":"right",offset:s,animate:!1})}})),this.childOffsets=[];try{
this.mutationObserver=new MutationObserver(h()(this.handleMutation,30,!0))}catch(e){}}get offset(){const{offset:t}=this.props;return t?Math.min(this.maxOffset,Math.max(this.minOffset,t)):0}get minOffset(){return 0}get maxOffset(){const{bufferWidth:t,windowWidth:e}=this.state;return Math.max(this.minOffset,t-e-1)}get canGoLeft(){return this.offset>this.minOffset}get canGoRight(){return this.offset<this.maxOffset}get transitionDuration(){const{animate:t}=this.props,{windowWidth:e}=this.state;if(!t)return 0;if(Math.abs(this.offset-this.previousOffset)<1e-6)return.5;{const t=1-.5*(Math.abs(this.offset-this.previousOffset)/e);return Math.max(Math.min(t,1),.5)}}initMutationObserver(){const{mutationObserver:t}=this;t&&this.bufferElement&&(t.disconnect(),t.observe(this.bufferElement,A))}triggerScrollEvent(){if(!this.windowElement)return;const t=document.createEvent("MouseEvents");t.initEvent("scroll",!0,!0),this.windowElement.dispatchEvent(t)}getClosestForLeft(t){
const e=Math.min(this.maxOffset,Math.max(this.minOffset,t));for(let i=0;i<this.childOffsets.length;++i){const t=this.childOffsets[i];if(e>=t.left&&e<=t.right){const e=0===i?t.left:t.right;return e>=4?e-4:e}}return Math.min(this.maxOffset,Math.max(this.minOffset,t))}getClosestForRight(t){const{windowWidth:e}=this.state,i=Math.min(this.maxOffset,Math.max(this.minOffset,t))+e;for(let s=0;s<this.childOffsets.length;++s){const t=this.childOffsets[s];if(i>=t.left&&i<=t.right){const i=(s===this.childOffsets.length-1?t.right:t.left)-e;return i+4<=this.maxOffset?i+4:i}}return Math.min(this.maxOffset,Math.max(this.minOffset,t))}renderLeftArrow(){const{canGoLeft:t}=this;return t?a.a.createElement(y,{onClick:this.handleLeftClick}):null}renderRightArrow(){const{canGoRight:t}=this;return t?a.a.createElement(S,{onClick:this.handleRightClick}):null}componentDidMount(){this.previousOffset=this.offset,window.addEventListener("resize",this.handleSizeChange)}componentWillUnmount(){
const{mutationObserver:t}=this;window.removeEventListener("resize",this.handleSizeChange),t&&t.disconnect()}componentDidUpdate(){this.previousOffset=this.offset,window.setTimeout((()=>this.triggerScrollEvent()),1e3*this.transitionDuration)}render(){const{animate:t,children:e,testId:i}=this.props,s=`translateX(${-this.offset}px)`,n=t?"transform":"none",o=`${this.transitionDuration}s`;return a.a.createElement(C,{"data-testid":i},this.renderLeftArrow(),a.a.createElement(E,{ref:this.handleWindowElementChange,onWheel:this.handleScroll,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,"data-testid":"filmstrip-list-wrapper"},a.a.createElement(F,{ref:this.handleBufferElementChange,style:{transform:s,transitionProperty:n,transitionDuration:o}},a.a.Children.map(e,P))),this.renderRightArrow())}}function P(t,e){const i=function(t){return!!t.type}(t)&&t.key||e;return a.a.createElement(j,{key:i,index:i},t)}T.displayName="FilmstripView",
o()(T,"defaultProps",{animate:!1,offset:0})},TUgI:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(t){return t&&t.__esModule?t:{default:t}}(i("q1tI")),n=i("QEuf");const o=t=>s.default.createElement(n.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="#fff" fill-opacity=".01" d="M0 0h24v24H0z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.207 5.793a1 1 0 010 1.414L8.414 11H18a1 1 0 110 2H8.414l3.793 3.793a1 1 0 11-1.415 1.414l-5.499-5.5A.997.997 0 015 12.028v-.057a.996.996 0 01.293-.678l5.499-5.5a1 1 0 011.415 0z" fill="currentColor"/></svg>'},t));o.displayName="ArrowLeftIcon";var r=o;e.default=r},"sBL/":function(t,e){t.exports=function(t,e,i){var s,n,o,r,a;function l(){var h=Date.now()-r;h<e&&h>=0?s=setTimeout(l,e-h):(s=null,i||(a=t.apply(o,n),o=n=null))}null==e&&(e=100);var h=function(){o=this,n=arguments,r=Date.now();var h=i&&!s
;return s||(s=setTimeout(l,e)),h&&(a=t.apply(o,n),o=n=null),a};return h.clear=function(){s&&(clearTimeout(s),s=null)},h}}}]);try{window.__jsEvalStop("@atlaskit-internal_renderer-node_MediaGroup.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/@atlaskit-internal_renderer-node_MediaGroup.2729a46433af2a809ce0.8.js.map