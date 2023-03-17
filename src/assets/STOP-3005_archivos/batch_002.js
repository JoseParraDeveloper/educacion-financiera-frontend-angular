;try{window.performance.mark('com.atlassian.jira.plugins.jira-browser-metrics,com.atlassian.plugins.browser.metrics.browser-metrics-plugin_batch_file_eval:start');} catch(e){};;
/* module-key = 'com.atlassian.jira.plugins.jira-browser-metrics:contrib', location = 'jira-browser-metrics-frontend/contrib.js' */
window["browser-metrics-plugin"].install(function(r){require(["internal/browser-metrics","internal/browser-metrics-aa-beacon","jquery","jira/featureflags/feature-manager"],function(e,n,t,i,a){var o,s={},u={},d={},l={},f={},c={},p={},m={},b={},v={},R={},S={},h={},w={},y={},_={},I={},N={},M={},E={},g={},D={},T={},V={};s=function(r){r.window=(0,eval)("window");return r}(s),u=function(r,e){function n(){t||(t=e.window.WRM.data.claim(i));var r=t?{applicationHash:t}:{};return r}r.applicationHashReporter=n;var t=null,i="com.atlassian.jira.plugins.jira-browser-metrics:contrib.scm-commit-id";return r}(u,s),d=function(r){function e(r){return"string"==typeof r.applicationHash}function n(r){if(e(r))return{applicationHash:r.applicationHash}}return r.applicationHashReportMarshaller=n,r}(d),l=function(r,e){function n(r){return r.isInitial?t.promise():{}}r.applicationVersionReporter=n;var t=e.Deferred();return e(function(){var r={},n=e("meta[name=application-name]").data("version");n&&(r.applicationHash=n),t.resolve(r)}),r}(l,t),f=function(r){function e(r){return"string"==typeof r.applicationVersion}function n(r){if(e(r))return{applicationVersion:r.applicationVersion}}return r.applicationVersionReportMarshaller=n,r}(f),c=function(r,e){function n(r){return""+Number(r)===r}function t(r){return r.isInitial?i.promise():{}}r.serverDurationReporter=t;var i=e.Deferred();return e(function(){var r={},t=e("#jira_request_timing_info").find("[title=jira\\.request\\.server\\.time]").val();t&&n(t)&&(r.serverDuration=Number(t));var a=e("#jira_request_timing_info").find("[title=jira\\.request\\.server\\.head\\.time]").val();a&&n(a)&&(r.serverHeadDuration=Number(a));var o=e("#jira_request_timing_info").find("[title=jira\\.request\\.id]").val();o&&(r.serverOriginRequestId=o);var s=e("#jira_request_timing_info").find("[title=jira\\.request\\.trace\\.id]").val();s&&(r.serverRequestTraceId=s),i.resolve(r)}),r}(c,t),p=function(r){function e(r){return"number"==typeof r.serverDuration}function n(r){if(e(r))return{serverDuration:""+r.serverDuration,serverHeadDuration:""+r.serverHeadDuration,serverOriginRequestId:""+r.serverOriginRequestId,serverRequestTraceId:""+r.serverRequestTraceId}}return r.serverDurationReportMarshaller=n,r}(p),m=function(r,e){function n(r){return""+Number(r)===r}function t(r){return r.isInitial?i.promise():{}}r.databaseDurationReporter=t;var i=e.Deferred();return e(function(){var r={},t="#jira_request_timing_info",a=e(t).find("[title=db\\.reads\\.time\\.in\\.ms]").val(),o=e(t).find("[title=db\\.conns\\.time\\.in\\.ms]").val(),s=e(t).find("[title=db\\.reads\\.count]").val(),u=e(t).find("[title=head\\.db\\.reads\\.count]").val();a&&n(a)&&(r.dbReadsTimeInMs=Number(a)),o&&n(o)&&(r.dbConnsTimeInMs=Number(o)),s&&n(s)&&(r.dbReadsCount=Number(s)),u&&n(u)&&(r.dbReadsHeadCount=Number(u)),i.resolve(r)}),r}(m,t),b=function(r){function e(r){return"number"==typeof r.dbReadsTimeInMs||"number"==typeof r.dbConnsTimeInMs||"number"==typeof r.dbReadsCount||"number"==typeof r.dbReadsHeadCount}function n(r){if(e(r)){var n={dbReadsTimeInMs:""+(r.dbReadsTimeInMs||""),dbConnsTimeInMs:""+(r.dbConnsTimeInMs||"")};return r.dbReadsCount&&(n.dbReadsCount=r.dbReadsCount),r.dbReadsHeadCount&&(n.dbReadsHeadCount=r.dbReadsHeadCount),n}}return r.databaseDurationReportMarshaller=n,r}(b),v=function(r,e){function n(r){if(r.isInitial){i||(i=e.window.WRM.data.claim(t));var n=i?{correlationId:i}:{};return n}return{}}r.correlationIdReporter=n;var t="jira.request.correlation-id",i=null;return r}(v,s),R=function(r){function e(r){return"string"==typeof r.correlationId}function n(r){if(e(r))return{correlationId:r.correlationId}}return r.correlationIdReportMarshaller=n,r}(R),S=function(r,e){function n(r){var n={};if(e.window.performance&&e.window.performance.getEntriesByName&&r.isInitial){var t=e.window.performance.getEntriesByName("mark_fully_visible"),i=e.window.performance.getEntriesByName("mark_fully_loaded");if(t&&t.length>0&&i&&i.length>0){var a=t[0].startTime;n.deferScriptsStart=a;var o=i[0].startTime;n.deferScriptsEnd=o;var s=0,u=e.window.performance.getEntriesByName("defer_scripts_clicks");u&&u.forEach(function(r){var e=r.startTime;e>=a&&e<=o&&s++}),n.deferScriptsClicks=s;var d=0,l=e.window.performance.getEntriesByName("defer_scripts_keydowns");l&&l.forEach(function(r){var e=r.startTime;e>=a&&e<=o&&d++}),n.deferScriptsKeydowns=d}}return n}return r.deferScriptsReporter=n,r}(S,s),h=function(r){function e(r){var e={};return"number"==typeof r.deferScriptsStart&&(e.deferScriptsStart=Math.floor(r.deferScriptsStart)),"number"==typeof r.deferScriptsEnd&&(e.deferScriptsEnd=Math.floor(r.deferScriptsEnd)),"number"==typeof r.deferScriptsClicks&&(e.deferScriptsClicks=Math.floor(r.deferScriptsClicks)),"number"==typeof r.deferScriptsKeydowns&&(e.deferScriptsKeydowns=Math.floor(r.deferScriptsKeydowns)),e}return r.deferScriptsMarshaller=e,r}(h),w=function(r,e){function n(){var r=e.isFeatureEnabled("fe.platform.ssr.navigation.master");return{isSsrNavCohort:r}}return r.ssrNavReporter=n,r}(w,i),y=function(r,e){function n(){return e.window.SKELETON_NAVIGATION&&e.window.SKELETON_NAVIGATION["ssr/detail_request_trace"]&&e.window.SKELETON_NAVIGATION["ssr/detail_request_trace"].data||{}}function t(){return e.window.SKELETON_NAVIGATION&&e.window.SKELETON_NAVIGATION["ssr/detail_render_trace"]&&e.window.SKELETON_NAVIGATION["ssr/detail_render_trace"].data||{}}function i(r){var e={},i=n(),a=t();return e.ssrRouteName=a.routeName,e.ssrRenderTiming=JSON.stringify(a.traces),e.ssrResourceTiming=JSON.stringify(i),e}return r.ssrTimingReporter=i,r}(y,s),_=function(r){function e(r){return"boolean"==typeof r.isSsrNavCohort}function n(r){if(e(r))return r}return r.ssrNavReportMarshaller=n,r}(_),I=function(r,e){function n(){var r=e.window.__NAV_VERSION__||"UNKNOWN";return{navVersion:r}}return r.navigationVersionReporter=n,r}(I,s),N=function(r){function e(r){return"object"===t(r.navigationVersion)}function n(r){if(e(r))return{navVersion:JSON.stringify(r.navVersion)}}r.navigationVersionReportMarshaller=n;var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};return r}(N),M=function(r){function e(r){if(r.isInitial){var e=window.JFE_PRELOAD_MODE;if(void 0!==e)return{jiraFrontendPreloadMode:e}}return{}}return r.preloadModeReporter=e,r}(M),E=function(r){function e(r){return"string"==typeof r.jiraFrontendPreloadMode}function n(r){if(e(r))return{jiraFrontendPreloadMode:r.jiraFrontendPreloadMode}}return r.preloadModeReportMarshaller=n,r}(E),g=function(r){function e(r){return"boolean"==typeof r.isInDashboardSpaRollout}function n(r){if(e(r))return{isInDashboardSpaRollout:r.isInDashboardSpaRollout}}return r.dashboardSpaRolloutMarshaller=n,r}(g),D=function(r){function e(){return{isDashboardSpaEnabled:!0}}return r.dashboardSpaEnabledReporter=e,r}(D),T=function(r){function e(r){return"boolean"==typeof r.isDashboardSpaEnabled}function n(r){if(e(r))return{isDashboardSpaEnabled:r.isDashboardSpaEnabled}}return r.dashboardSpaEnabledMarshaller=n,r}(T),V=function(r){function e(){var r={};return window.BUILD_KEY&&(r.jiraFrontendVersion=window.BUILD_KEY),window.SSR_BUILD_KEY&&(r.jiraFrontendSSRVersion=window.SSR_BUILD_KEY),r}return r.jiraFrontendVersionReporter=e,r}(V),o=function(r,e,n,t,i,a,o,s,u,d,l,f,c,p,m,b,v,R,S,h,w,y,_,I,N){var M=I.addReporter,E=N.addReportMarshaller;M(r.applicationHashReporter),M(n.applicationVersionReporter),M(o.databaseDurationReporter),M(i.serverDurationReporter),M(u.correlationIdReporter),M(l.deferScriptsReporter),M(c.ssrNavReporter),M(p.ssrTimingReporter),M(b.navigationVersionReporter),M(R.preloadModeReporter),M(w.dashboardSpaEnabledReporter),M(_.jiraFrontendVersionReporter),E(e.applicationHashReportMarshaller),E(t.applicationVersionReportMarshaller),E(s.databaseDurationReportMarshaller),E(a.serverDurationReportMarshaller),E(d.correlationIdReportMarshaller),E(f.deferScriptsMarshaller),E(m.ssrNavReportMarshaller),E(v.navigationVersionReportMarshaller),E(S.preloadModeReportMarshaller),E(h.dashboardSpaRolloutMarshaller),E(y.dashboardSpaEnabledMarshaller),I.subscribe(function(r){var e=document.getElementById("browser-metrics-report");null==e&&(e=document.createElement("div"),e.id="browser-metrics-report",e.style.display="none",document.body.appendChild(e)),e.textContent=JSON.stringify(r)})}(u,d,l,f,c,p,m,b,v,R,S,h,w,y,_,I,N,M,E,g,D,T,V,e,n),r()})});;
;
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:impl', location = 'browser-metrics-plugin/internal/browser-metrics-aa-beacon/impl.js' */
!function(n,r){var t={},e={},o={},u={},i={};i=function(n,r,t,e,o,u,i,c,a,s,f,d,h,l,m,p,v,y){Object.defineProperty(n,"__esModule",{value:!0});var E=t.addReportMarshaller;return E(o),E(e),E(u),E(i),E(c),E(a),E(s),E(f),E(d),E(h),E(l),E(m),E(p),E(v),E(y),r.subscribe(function(n){t.beacon(n.report)}),n}(i,window["browser-metrics"],r,function(n,r){function t(n){return r(n.apdex)}return function(n){if(t(n))return{apdex:""+n.apdex}}}(0,t=function(n){return"number"==typeof n}),function(n,r,t,e){return function(n){var o={};return Object.keys(n).forEach(function(u){var i=n[u];(t(i)||r(i)||e(i)||null===i)&&(o[u]=i)}),o}}(0,function(n){return"boolean"==typeof n},t,e=function(n){return"string"==typeof n}),function(n,r,t){function e(n){return t(n.firstPaint)}return function(n){if(e(n))return{firstPaint:r(n.firstPaint)}}}(0,o=function(n){return""+Math.floor(n)},t),function(n){function r(n){return"boolean"==typeof n.isInitial}return function(n){if(r(n))return{isInitial:""+n.isInitial}}}(),function(n,r){function t(n){return r(n.journeyId)}return function(n){if(t(n))return{journeyId:n.journeyId}}}(0,e),function(n,r){function t(n){return r(n.key)}return function(n){if(t(n))return{key:n.key}}}(0,e),function(n,r){function t(n){return r(n.navigationType)}return function(n){if(t(n))return{navigationType:""+n.navigationType}}}(0,t),function(n,r,t){function e(n){return t(n.readyForUser)}return function(n){if(e(n))return{readyForUser:r(n.readyForUser)}}}(0,o,t),function(n,r){function t(n){return r(n.redirectCount)}return function(n){if(t(n))return{redirectCount:""+n.redirectCount}}}(0,t),function(n,r,t){function e(n){return t(n.resourceLoadedEnd)}return function(n){if(e(n))return{resourceLoadedEnd:r(n.resourceLoadedEnd)}}}(0,o,t),function(n,r,t){function e(n){return Array.isArray(n.resourceTiming)}function o(n){return(n=Math.floor(n||0))>0?u(n):""}function u(n){return n.toString(36)}function i(n){return[c[n.initiatorType]||a,o(n.startTime),o(n.responseEnd),o(n.responseStart),o(n.requestStart),o(n.connectEnd),o(n.secureConnectionStart),o(n.connectStart),o(n.domainLookupEnd),o(n.domainLookupStart),o(n.redirectEnd),o(n.redirectStart)].join(",").replace(/,+$/,"")}var c={other:0,img:1,link:2,script:3,css:4,xmlhttprequest:5},a=-1;return function(n){if(e(n)){var o=new t;return n.resourceTiming.forEach(function(n){var t=r.cleanUrl(n.name);o.add(t||"☠",i(n))}),{resourceTiming:JSON.stringify(o.condensed().toTrieObject())}}}}(0,r,function(n,r){function t(n){return Object.keys(n).length}return function(){function n(){this.children={},this.values=[]}return n.prototype.add=function(r,t){0==r.length?this.values.push(t):(this.children.hasOwnProperty(r[0])||(this.children[r[0]]=new n),this.children[r[0]].add(r.substr(1),t))},n.prototype.toTrieObject=function(){var n={};return r(this.children,function(r,t){n[r]=t.toTrieObject()}),0===this.values.length?n:0===t(this.children)?this.values:[n,this.values]},n.prototype.condensed=function(){var e=new n;return e.values=this.values.concat(),r(this.children,function(n,o){var u=o.condensed();0===u.values.length&&1===t(u.children)?r(u.children,function(r,t){e.children[n+r]=t}):e.children[n]=u}),e},n}()}(0,u=function(n,r){Object.keys(n).forEach(function(t){r(t,n[t])})})),function(n,r,t){function e(n){return t(n.threshold)}return function(n){if(e(n))return{threshold:r(n.threshold)}}}(0,o,t),function(n,r,t){var e="unloadEventStart,unloadEventEnd,redirectStart,redirectEnd,fetchStart,domainLookupStart,domainLookupEnd,connectStart,connectEnd,secureConnectionStart,requestStart,responseStart,responseEnd,domLoading,domInteractive,domContentLoadedEventStart,domContentLoadedEventEnd,domComplete,loadEventStart,loadEventEnd".split(",");return function(n){var o={};return e.forEach(function(e){t(n[e])&&(o[e]=r(n[e]))}),o}}(0,o,t),function(n,r){function t(n){return r(n.userAgent)}return function(n){if(t(n))return{userAgent:n.userAgent}}}(0,e),function(n,r){function t(n){return"object"==typeof n.marks}return function(n){if(t(n)){var e={},o={marks:{},measures:{}};return n.marks.forEach(function(n){o.marks[n.name]=o.marks[n.name]||[],o.marks[n.name].push(Math.floor(n.time))}),r(o.marks,function(n,r){var t=r.sort(function(n,r){return n-r})[0];e["mark__"+n]=t}),n.measures.forEach(function(n){o.measures[n.name]=o.measures[n.name]||[],o.measures[n.name].push([Math.floor(n.startTime),Math.floor(n.duration)])}),r(o.measures,function(n,r){var t=r.sort(function(n,r){return n[0]-r[0]})[0],o=t[0],u=t[1];e["measure__"+n+"__start"]=o,e["measure__"+n+"__duration"]=u}),e.userTimingRaw=JSON.stringify({marks:o.marks,measures:o.measures}),e}}}(0,u))}(0,window["browser-metrics-aa-beacon"]);;
;
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:impl', location = 'browser-metrics-plugin/impl.js' */
define("internal/browser-metrics-plugin/collector",function(){return{install:function(){!function(){var t,n,e,r,o,i,u,a,s,c,f,l,p,d,h,m,v,y,g,w,b,_,x,T,E,S,C,I,A,k;t=function(){return function(t){return{isInitial:"isInitial"in t&&t.isInitial,start:t.timestamp,end:null,key:t.key,threshold:t.threshold,reporters:t.reporters}}}(),e=function(t){return function(n){var e,r=t(n),o=n.threshold,i=4*n.threshold;return e=r.readyForUser<=o?1:r.readyForUser<=i?.5:0,{apdex:e}}}(n=function(){return function(t){return{readyForUser:t.end-t.start}}}()),function(){"use strict";function t(t){return"function"==typeof t}function n(){}function e(){for(var t=0;t<y;t+=2){(0,x[t])(x[t+1]),x[t]=void 0,x[t+1]=void 0}y=0}function o(){}function i(n,e){n===e?a(n,new TypeError("You cannot resolve a promise with itself")):function(t){return"function"==typeof t||"object"==typeof t&&null!==t}(e)?function(n,e){if(e.constructor===n.constructor)!function(t,n){n._state===E?u(t,n._result):t._state===S?a(t,n._result):s(n,void 0,function(n){i(t,n)},function(n){a(t,n)})}(n,e);else{var r=function(t){try{return t.then}catch(t){return C.error=t,C}}(e);r===C?a(n,C.error):void 0===r?u(n,e):t(r)?function(t,n,e){g(function(t){var r=!1,o=function(t,n,e,r){try{t.call(n,e,r)}catch(t){return t}}(e,n,function(e){r||(r=!0,n!==e?i(t,e):u(t,e))},function(n){r||(r=!0,a(t,n))},t._label);!r&&o&&(r=!0,a(t,o))},t)}(n,e,r):u(n,e)}}(n,e):u(n,e)}function u(t,n){t._state===T&&(t._result=n,t._state=E,0===t._subscribers.length||g(c,t))}function a(t,n){t._state===T&&(t._state=S,t._result=n,g(function(t){t._onerror&&t._onerror(t._result),c(t)},t))}function s(t,n,e,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=n,o[i+E]=e,o[i+S]=r,0===i&&t._state&&g(c,t)}function c(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var r,o,i=t._result,u=0;u<n.length;u+=3)r=n[u],o=n[u+e],r?l(e,r,o,i):o(i);t._subscribers.length=0}}function f(){this.error=null}function l(n,e,r,o){var s,c,f,l,p=t(r);if(p){if((s=function(t,n){try{return t(n)}catch(t){return I.error=t,I}}(r,o))===I?(l=!0,c=s.error,s=null):f=!0,e===s)return void a(e,new TypeError("A promises callback cannot return that same promise."))}else s=o,f=!0;e._state!==T||(p&&f?i(e,s):l?a(e,c):n===E?u(e,s):n===S&&a(e,s))}function p(t,n,e,r){this._instanceConstructor=t,this.promise=new t(o,r),this._abortOnReject=e,this._validateInput(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._init(),0===this.length?u(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&u(this.promise,this._result))):a(this.promise,this._validationError())}function d(n,e){this._id=k++,this._label=e,this._state=void 0,this._result=void 0,this._subscribers=[],o!==n&&(t(n)||function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof d||function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}(),function(t,n){try{n(function(n){i(t,n)},function(n){a(t,n)})}catch(n){a(t,n)}}(this,n))}var h,m,v=h=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=(Date.now,Object.create,0),g=function(t,n){x[y]=t,x[y+1]=n,2===(y+=2)&&m()},w="undefined"!=typeof window?window:{},b=w.MutationObserver||w.WebKitMutationObserver,_="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,x=new Array(1e3);m="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?function(){process.nextTick(e)}:b?function(){var t=0,n=new b(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}():_?function(){var t=new MessageChannel;return t.port1.onmessage=e,function(){t.port2.postMessage(0)}}():function(){setTimeout(e,1)};var T=void 0,E=1,S=2,C=new f,I=new f;p.prototype._validateInput=function(t){return v(t)},p.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},p.prototype._init=function(){this._result=new Array(this.length)};var A=p;p.prototype._enumerate=function(){for(var t=this.length,n=this.promise,e=this._input,r=0;n._state===T&&r<t;r++)this._eachEntry(e[r],r)},p.prototype._eachEntry=function(t,n){var e=this._instanceConstructor;!function(t){return"object"==typeof t&&null!==t}(t)?(this._remaining--,this._result[n]=this._makeResult(E,n,t)):t.constructor===e&&t._state!==T?(t._onerror=null,this._settledAt(t._state,n,t._result)):this._willSettleAt(e.resolve(t),n)},p.prototype._settledAt=function(t,n,e){var r=this.promise;r._state===T&&(this._remaining--,this._abortOnReject&&t===S?a(r,e):this._result[n]=this._makeResult(t,n,e)),0===this._remaining&&u(r,this._result)},p.prototype._makeResult=function(t,n,e){return e},p.prototype._willSettleAt=function(t,n){var e=this;s(t,void 0,function(t){e._settledAt(E,n,t)},function(t){e._settledAt(S,n,t)})};var k=0,j=d;d.all=function(t,n){return new A(this,t,!0,n).promise},d.race=function(t,n){var e=new this(o,n);if(!v(t))return a(e,new TypeError("You must pass an array to race.")),e;for(var r=t.length,u=0;e._state===T&&u<r;u++)s(this.resolve(t[u]),void 0,function(t){i(e,t)},function(t){a(e,t)});return e},d.resolve=function(t,n){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(o,n);return i(e,t),e},d.reject=function(t,n){var e=new this(o,n);return a(e,t),e},d.prototype={constructor:d,then:function(t,n,e){var r=this._state;if(r===E&&!t||r===S&&!n)return this;this._onerror=null;var i=new this.constructor(o,e),u=this._result;if(r){var a=arguments[r-1];g(function(){l(r,i,a,u)})}else s(this,i,t,n);return i},catch:function(t,n){return this.then(null,t,n)}};var R={Promise:j,polyfill:function(){var n;"Promise"in(n="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self)&&"resolve"in n.Promise&&"reject"in n.Promise&&"all"in n.Promise&&"race"in n.Promise&&function(){var e;return new n.Promise(function(t){e=t}),t(e)}()||(n.Promise=j)}};r=R}.call(this),s=function(t,n,e,r){function o(){return u&&u.loadTimes}function i(){return void 0!==a.msFirstPaint}if(n){var u=r.chrome,a=n.timing;return function(n){return n.isInitial?(r.top===r.self&&(o()||i())?t(function(){return o()&&u.loadTimes().firstPaintTime>0?1e3*u.loadTimes().firstPaintTime-a.navigationStart:i()&&a.msFirstPaint>0?a.msFirstPaint-a.navigationStart:void 0},250):e.reject("The browser does not have a first paint metric")).then(function(t){return{firstPaint:t}},function(){return{}}):{}}}}(i=function(t){return function(n,e){return new t(function(t){function r(){var e=n();void 0!==e&&(clearInterval(o),t(e))}var o;o=setInterval(r,e),r()})}}(o=r.Promise),a=(u=window).performance,o,u),c=function(t){return{isInitial:t.isInitial}},f=function(t,n){var e="browser-metrics-journey";return function(){return void 0===n.sessionStorage?t.reject("sessionStorage is required to produce a report for this transition."):(null===n.sessionStorage.getItem(e)&&n.sessionStorage.setItem(e,"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*n.Math.random()|0;return("x"===t?e:3&e|8).toString(16)})),t.resolve({journeyId:n.sessionStorage.getItem(e)}))}}(o,u),l=function(){return function(t){return{key:t.key}}}(),d=function(t,n){return function(e){var r={};return e.isInitial&&n()&&(r.navigationType=t.performance.navigation.type),r}}(u,p=function(t){return function(){return t.performance&&t.performance.navigation&&t.performance.timing&&void 0!==t.performance.timing.navigationStart}}(u)),h=function(t,n,e){return function(r){var o={};if(r.isInitial){if(!n())return t.reject("The navigation timing API is required to produce a report for this transition.");void 0!==e.performance.navigation.redirectCount&&(o.redirectCount=e.performance.navigation.redirectCount)}return t.resolve(o)}}(o,p,u),m=function(t){return function(n){var e=t.document.createElement("a");return e.href=n,e.href}}(u),y=function(t,n){return function(e){var r=n.onresourcetimingbufferfull||function(){};t(n.addEventListener)?n.addEventListener("resourcetimingbufferfull",e):n.onresourcetimingbufferfull=function(){e(),r()}}}(v=function(t){return"function"==typeof t},a),g=function(t,n){return function(){return n&&t(n.getEntriesByType)}}(v,a),x=function(t){return function(n){return n.isInitial?t().then(function(t){return 0===t.length?{resourceLoadedEnd:null}:{resourceLoadedEnd:t.map(function(t){return t.responseEnd}).reduce(function(t,n){return Math.max(t,n)})}}):{}}}(_=function(t,n,e,r){return function(){var o=function(){var n=r.document.querySelectorAll("script[src][async]");return Array.prototype.map.call(n,function(n){return t(n.src)})}();return e().then(function(t){return n().filter(function(t){return"link"===t.initiatorType||"script"===t.initiatorType}).filter(function(n){return n.responseEnd<t.domContentLoadedEventStart}).filter(function(t){return"script"!==t.initiatorType||-1===o.indexOf(t.name)})})}}(m,w=function(t,n,e,r){function o(){return e.getEntriesByType("resource").filter(function(t){return"img"!==t.initiatorType})}function i(){t(e.clearResourceTimings)&&(u=o(),e.clearResourceTimings())}var u=[];return g()?(i(),n(i),function(){return u.concat(o())}):function(){return[]}}(v,y,a),b=function(t,n,e,r){if(r){var o,i=r.timing,u="unloadEventStart,unloadEventEnd,redirectStart,redirectEnd,fetchStart,domainLookupStart,domainLookupEnd,connectStart,connectEnd,secureConnectionStart,requestStart,responseStart,responseEnd,domLoading,domInteractive,domContentLoadedEventStart,domContentLoadedEventEnd,domComplete,loadEventStart,loadEventEnd".split(",");return function(){return e()?(void 0===o&&(o=t(function(){var t={};if(i.loadEventEnd>0)return u.forEach(function(n){var e=i[n];e>0&&(t[n]=e-i.navigationStart)}),t},250)),o):n.reject("The navigation timing API is required to produce a report for this transition.")}}}(i,o,p,a),u)),T=function(t){return function(n){return n.isInitial?t().then(function(t){if(0===t.length)return{resourceLoadedStart:null};var n=t.map(function(t){return t.startTime});return{resourceLoadedStart:Math.min.apply(Math,n)}}):{}}}(_),E=function(t,n){var e="duration,initiatorType,name".split(","),r="startTime,connectEnd,connectStart,domainLookupEnd,domainLookupStart,fetchStart,redirectEnd,redirectStart,requestStart,responseEnd,responseStart,secureConnectionStart".split(",");return function(o){return t()?{resourceTiming:n().filter(function(t){var n=t.responseEnd;return n>=o.start&&n<=o.end&&t.startTime>=o.start}).map(function(t){var n={};return e.forEach(function(e){n[e]=t[e]}),r.forEach(function(e){n[e]=t[e]>0?t[e]-o.start:0}),n})}:{}}}(g,w),S=function(){return function(t){return{threshold:t.threshold}}}(),C=function(t){return function(n){return n.isInitial?t():{}}}(b),I=function(t){return function(){return{userAgent:t.navigator.userAgent}}}(u),A=function(t,n){return function(e){if(!n||!t(n.getEntriesByType))return{};var r=n.getEntriesByType("mark").filter(function(t){return t.startTime>=e.start&&t.startTime<=e.end}),o=n.getEntriesByType("measure").filter(function(t){return t.startTime>=e.start&&t.startTime+t.duration<=e.end});return{marks:r.map(function(t){return{name:t.name,time:t.startTime-e.start}}),measures:o.map(function(t){return{name:t.name,startTime:t.startTime-e.start,duration:t.duration}})}}}(v,a),function(t,n,e){if(a){var r=new t;n.delegateTo(r)}}(function(t,n,e){return function(){var r,o=[],i=[];return function(u){u.start?function(n){r=new t(n)}(u.start):u.end?function(t){r&&r.key===t.key&&(r.end=t.timestamp,e(r).then(function(t){i.push(t),o.forEach(function(n){n({report:t})})}),r=null)}(u.end):u.addReporter?function(t){n.add(t)}(u.addReporter):u.subscribe&&function(t){i.forEach(function(n){t({report:n})}),o.push(t)}(u.subscribe)}}}(t,k=function(t,r,o,i,u,a,p,m,v,y,g,w,b,_,k){var j=[e,s,c,f,l,d,n,h,x,T,E,S,C,I,A];return{get:function(){return j.concat()},add:function(t){j.push(t)}}}(),function(t,n,e,r,o,i){return function(t){var r=t.reporters,u=i.get().concat(r).map(function(n){var r;try{r=n(t)}catch(t){o(t),r={}}return function(t){return function(t){return e.all([t]).then(function(t){return t[0]})}(t).then(null,function(){return{}})}(r)});return e.all(u).then(function(t){return n.apply(void 0,t)})}}(0,function(){var t=Object.prototype.hasOwnProperty;return function(){for(var n,e,r={},o=0,i=arguments.length;o<i;o++){n=arguments[o];for(e in n)t.call(n,e)&&(r[e]=n[e])}return r}}(),o,0,function(t){return function(n){(t.console.error||t.console.log).call(t.console,n.stack||n)}}(u),k)),u["browser-metrics"])}()}}}),window["browser-metrics-plugin"].install(function(t){require(["internal/browser-metrics","internal/browser-metrics-aa-beacon"],function(n,e){var r,o={},i={};!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():r="function"==typeof t?t():t}(function(){return function(){function t(n,e,r){function o(u,a){if(!e[u]){if(!n[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=e[u]={exports:{}};n[u][0].call(f.exports,function(t){return o(n[u][1][t]||t)},f,f.exports,t,n,e,r)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}return t}()({1:[function(t,n,e){"use strict";function r(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}var o=Object.prototype.hasOwnProperty;e.stringify=function(t,n){var e,r,i=[];"string"!=typeof(n=n||"")&&(n="?");for(r in t)if(o.call(t,r)){if((e=t[r])||null!==e&&void 0!==e&&!isNaN(e)||(e=""),r=encodeURIComponent(r),e=encodeURIComponent(e),null===r||null===e)continue;i.push(r+"="+e)}return i.length?n+i.join("&"):""},e.parse=function(t){for(var n,e=/([^=?&]+)=?([^&]*)/g,o={};n=e.exec(t);){var i=r(n[1]),u=r(n[2]);null===i||null===u||i in o||(o[i]=u)}return o}},{}],2:[function(t,n,e){"use strict";n.exports=function(t,n){if(n=n.split(":")[0],!(t=+t))return!1;switch(n){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},{}],3:[function(t,n,e){(function(e){(function(){"use strict";function r(t){return(t||"").toString().replace(f,"")}function o(t){var n,r,o=(n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).location||{},i={},u=typeof(t=t||o);if("blob:"===t.protocol)i=new a(unescape(t.pathname),{});else if("string"===u){i=new a(t,{});for(r in y)delete i[r]}else if("object"===u){for(r in t)r in y||(i[r]=t[r]);void 0===i.slashes&&(i.slashes=p.test(t.href))}return i}function i(t){return"file:"===t||"ftp:"===t||"http:"===t||"https:"===t||"ws:"===t||"wss:"===t}function u(t,n){t=(t=r(t)).replace(l,""),n=n||{};var e,o=h.exec(t),u=o[1]?o[1].toLowerCase():"",a=!!o[2],s=!!o[3],c=0;return a?s?(e=o[2]+o[3]+o[4],c=o[2].length+o[3].length):(e=o[2]+o[4],c=o[2].length):s?(e=o[3]+o[4],c=o[3].length):e=o[4],"file:"===u?c>=2&&(e=e.slice(2)):i(u)?e=o[4]:u?a&&(e=e.slice(2)):c>=2&&i(n.protocol)&&(e=o[4]),{protocol:u,slashes:a||i(u),slashesCount:c,rest:e}}function a(t,n,e){if(t=r(t),t=t.replace(l,""),!(this instanceof a))return new a(t,n,e);var f,p,d,h,y,g,w=v.slice(),b=typeof n,_=this,x=0;for("object"!==b&&"string"!==b&&(e=n,n=null),e&&"function"!=typeof e&&(e=c.parse),n=o(n),f=!(p=u(t||"",n)).protocol&&!p.slashes,_.slashes=p.slashes||f&&n.slashes,_.protocol=p.protocol||n.protocol||"",t=p.rest,("file:"===p.protocol&&(2!==p.slashesCount||m.test(t))||!p.slashes&&(p.protocol||p.slashesCount<2||!i(_.protocol)))&&(w[3]=[/(.*)/,"pathname"]);x<w.length;x++)"function"!=typeof(h=w[x])?(d=h[0],g=h[1],d!=d?_[g]=t:"string"==typeof d?~(y="@"===d?t.lastIndexOf(d):t.indexOf(d))&&("number"==typeof h[2]?(_[g]=t.slice(0,y),t=t.slice(y+h[2])):(_[g]=t.slice(y),t=t.slice(0,y))):(y=d.exec(t))&&(_[g]=y[1],t=t.slice(0,y.index)),_[g]=_[g]||(f&&h[3]?n[g]||"":""),h[4]&&(_[g]=_[g].toLowerCase())):t=h(t,_);e&&(_.query=e(_.query)),f&&n.slashes&&"/"!==_.pathname.charAt(0)&&(""!==_.pathname||""!==n.pathname)&&(_.pathname=function(t,n){if(""===t)return n;for(var e=(n||"/").split("/").slice(0,-1).concat(t.split("/")),r=e.length,o=e[r-1],i=!1,u=0;r--;)"."===e[r]?e.splice(r,1):".."===e[r]?(e.splice(r,1),u++):u&&(0===r&&(i=!0),e.splice(r,1),u--);return i&&e.unshift(""),"."!==o&&".."!==o||e.push(""),e.join("/")}(_.pathname,n.pathname)),"/"!==_.pathname.charAt(0)&&i(_.protocol)&&(_.pathname="/"+_.pathname),s(_.port,_.protocol)||(_.host=_.hostname,_.port=""),_.username=_.password="",_.auth&&(~(y=_.auth.indexOf(":"))?(_.username=_.auth.slice(0,y),_.username=encodeURIComponent(decodeURIComponent(_.username)),_.password=_.auth.slice(y+1),_.password=encodeURIComponent(decodeURIComponent(_.password))):_.username=encodeURIComponent(decodeURIComponent(_.auth)),_.auth=_.password?_.username+":"+_.password:_.username),_.origin="file:"!==_.protocol&&i(_.protocol)&&_.host?_.protocol+"//"+_.host:"null",_.href=_.toString()}var s=t("requires-port"),c=t("querystringify"),f=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,l=/[\n\r\t]/g,p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,d=/:\d+$/,h=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,m=/^[a-zA-Z]:/,v=[["#","hash"],["?","query"],function(t,n){return i(n.protocol)?t.replace(/\\/g,"/"):t},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],y={hash:1,query:1};a.prototype={set:function(t,n,e){var r=this;switch(t){case"query":"string"==typeof n&&n.length&&(n=(e||c.parse)(n)),r[t]=n;break;case"port":r[t]=n,s(n,r.protocol)?n&&(r.host=r.hostname+":"+n):(r.host=r.hostname,r[t]="");break;case"hostname":r[t]=n,r.port&&(n+=":"+r.port),r.host=n;break;case"host":r[t]=n,d.test(n)?(n=n.split(":"),r.port=n.pop(),r.hostname=n.join(":")):(r.hostname=n,r.port="");break;case"protocol":r.protocol=n.toLowerCase(),r.slashes=!e;break;case"pathname":case"hash":if(n){var o="pathname"===t?"/":"#";r[t]=n.charAt(0)!==o?o+n:n}else r[t]=n;break;case"username":case"password":r[t]=encodeURIComponent(n);break;case"auth":var u=n.indexOf(":");~u?(r.username=n.slice(0,u),r.username=encodeURIComponent(decodeURIComponent(r.username)),r.password=n.slice(u+1),r.password=encodeURIComponent(decodeURIComponent(r.password))):r.username=encodeURIComponent(decodeURIComponent(n))}for(var a=0;a<v.length;a++){var f=v[a];f[4]&&(r[f[1]]=r[f[1]].toLowerCase())}return r.auth=r.password?r.username+":"+r.password:r.username,r.origin="file:"!==r.protocol&&i(r.protocol)&&r.host?r.protocol+"//"+r.host:"null",r.href=r.toString(),r},toString:function(t){t&&"function"==typeof t||(t=c.stringify);var n,e=this,r=e.host,o=e.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var u=o+(e.protocol&&e.slashes||i(e.protocol)?"//":"");return e.username?(u+=e.username,e.password&&(u+=":"+e.password),u+="@"):e.password?(u+=":"+e.password,u+="@"):"file:"!==e.protocol&&i(e.protocol)&&!r&&"/"!==e.pathname&&(u+="@"),(":"===r[r.length-1]||d.test(e.hostname)&&!e.port)&&(r+=":"),u+=r+e.pathname,(n="object"==typeof e.query?t(e.query):e.query)&&(u+="?"!==n.charAt(0)?"?"+n:n),e.hash&&(u+=e.hash),u}},a.extractProtocol=u,a.location=o,a.trimLeft=r,a.qs=c,n.exports=a}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{querystringify:1,"requires-port":2}]},{},[3])(3)}),i=function(t,n,e,r,o,i,u,a,s,c){Object.defineProperty(t,"__esModule",{value:!0});var f=n.addReporter,l=e.addReportMarshaller,p=e.addUrlCleaner;return f(function(){return{pageVisible:!(window&&window.document&&window.document.hidden)}}),window.performance.clearResourceTimings&&(window.performance.clearResourceTimings=function(){}),f(r),f(o),l(i),l(u),p(a),p(s),p(c),t}(i,n,e,function(t,n){return function(t){var e=window.performance&&"undefined"!=typeof PerformanceResourceTiming?window.performance.getEntriesByType("navigation").concat(window.performance.getEntriesByType("resource")).map(function(t){return{url:t.name,type:t.initiatorType,size:t.transferSize,startTime:Math.round(t.startTime),duration:Math.round(t.duration)}}):null;if(!e)return{};var r={};e.filter(function(t){return["script","link","fetch"].indexOf(t.type)>-1}).map(function(t){if(!t.url)return null;var e={startTime:t.startTime,duration:t.duration,size:t.size,type:t.type};e.transferType=function(t){var n=t.duration,e=t.size;return 0===e&&0===n?"memory":0===e&&n>0?"disk":"network"}(e);var o;o="fetch"===t.type?n(t.url,!0).pathname.replace(/\/(\w+)-(\d+)\//i,"/<issue-key>/").split("#")[0].split("?")[0]:n(t.url,!0).pathname.replace(/^.*[\\/]/,"").replace(/\..*\./,"."),r[o]=e});return{resourceTiming:JSON.stringify(r)}}}(0,r),function(t,n,e){var r=/^(?:https?:)?\/\/[^\.]+\.cloudfront\.net\/p\/([^\/]+)\/main\.js$/,o=/^(?:https?:)?\/\/aes-artifacts--cdn\.[^\.]+\.atlassian\.io\/hashed\/([^\/]+)\/.+\.js$/,i=function(){var t=e.Deferred();return e(function(){var e=[];Array.prototype.slice.call(n.document.getElementsByTagName("script")||[]).forEach(function(t){var n=t.getAttribute("src"),i=n&&(n.match(o)||n.match(r));if(i&&i.length>1){var u=i[1];e.push({name:u,async:t.async})}}),t.resolve(e)}),t.promise()}().pipe(function(t){return{experiments:t}});return function(){return i}}(0,o=window,function(t,n){var e;try{e=n.require("jquery")}catch(t){e=n.jQuery}return e}(0,o)),function(t){return function(t){if(function(t){return Array.isArray(t.experiments)}(t))return{experiments:JSON.stringify(t.experiments.map(function(t){return[t.name,t.async?1:0]}))}}}(),function(t){function n(t){var n=t.toLowerCase().replace(/[;,()+]/g,"");return function(t){return!!t.match(/^[0-9.,_%\-]+$/)}(n)||-1!==e.indexOf(n)?t:""}var e=["android","applewebkit","baiduspider","bingbot","build","chrome","compatible","edge","electron","explorer","firefox","gecko","googlebot","iemobile","intel","ipad","iphone","khtml","konqueror","like","linux","mac","macintosh","maxthon","microsoft","mini","mobi","mobile","mozilla","msie","mwendo","nt","opera","opr","os","phone","playstation","presto","rv","safari","samsung","thunderbird","trident","ubuntu","ucbrowser","unix","version","vivo","win","win64","windows","wow64","x","x11","x64","x86","x86_64","xbox"];return function(t){if(t.userAgent)return{userAgent:function(t){var e=/[\s\/:]/g,r=t.match(e);return null===r?n(t):t.split(e).map(n).reduce(function(t,n){return t+r.shift()+n})}(t.userAgent)}}}(),function(t,n,e){var r=/^https:\/\/[^.]+\.cloudfront.net\/[^/]+(\/wiki)?\/s\//g;return function(t){return t.match(r)?(t=n(t),t=e(t)):""}}(0,function(t,n){var e=/([&?][^&=]+)(=?)([^&#]*)/g;return function(t){return t.replace(e,function(t,e,r,o){return e+r+(n(o)?o:"☠")})}}(0,function(t){var n=/^(true|false|\d+)$/gi;return function(t){return!!t.match(n)}}()),function(t){var n=/(\/s\/).+(\/_\/)/;return function(t){return t.replace(n,function(t,n,e){return n+"☠"+e})}}()),function(t){var n=/^https:\/\/d2kryfvs3op226\.cloudfront\.net\/[a-f0-9]+\.[a-z]+$/g;return function(t){return t.match(n)?t:""}}(),function(t){var n=/^https:\/\/[^\/]+\.atl-paas.net\//g;return function(t){return t.match(n)?t:""}}()),t()})});;;try{window.performance.mark('com.atlassian.jira.plugins.jira-browser-metrics,com.atlassian.plugins.browser.metrics.browser-metrics-plugin_batch_file_eval:end');} catch(e){};