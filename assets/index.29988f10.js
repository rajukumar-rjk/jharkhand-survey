const ZS=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};ZS();var y={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),eT=Symbol.for("react.portal"),tT=Symbol.for("react.fragment"),nT=Symbol.for("react.strict_mode"),rT=Symbol.for("react.profiler"),iT=Symbol.for("react.provider"),sT=Symbol.for("react.context"),oT=Symbol.for("react.forward_ref"),aT=Symbol.for("react.suspense"),lT=Symbol.for("react.memo"),uT=Symbol.for("react.lazy"),Gp=Symbol.iterator;function cT(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var Hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kv=Object.assign,Wv={};function Ui(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||Hv}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qv(){}qv.prototype=Ui.prototype;function dd(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||Hv}var fd=dd.prototype=new qv;fd.constructor=dd;Kv(fd,Ui.prototype);fd.isPureReactComponent=!0;var Qp=Array.isArray,Gv=Object.prototype.hasOwnProperty,pd={current:null},Qv={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gv.call(e,r)&&!Qv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yo,type:t,key:s,ref:o,props:i,_owner:pd.current}}function hT(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function md(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function dT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xp=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dT(""+t.key):e.toString(36)}function Ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yo:case eT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bu(o,0):r,Qp(i)?(n="",t!=null&&(n=t.replace(Xp,"$&/")+"/"),Ia(i,e,n,"",function(u){return u})):i!=null&&(md(i)&&(i=hT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bu(s,a);o+=Ia(s,e,n,l,i)}else if(l=cT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bu(s,a++),o+=Ia(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var r=[],i=0;return Ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var et={current:null},_a={transition:null},pT={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:_a,ReactCurrentOwner:pd};K.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ui;K.Fragment=tT;K.Profiler=rT;K.PureComponent=dd;K.StrictMode=nT;K.Suspense=aT;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pT;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gv.call(e,l)&&!Qv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yo,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:sT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iT,_context:t},t.Consumer=t};K.createElement=Xv;K.createFactory=function(t){var e=Xv.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:oT,render:t}};K.isValidElement=md;K.lazy=function(t){return{$$typeof:uT,_payload:{_status:-1,_result:t},_init:fT}};K.memo=function(t,e){return{$$typeof:lT,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=_a.transition;_a.transition={};try{t()}finally{_a.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return et.current.useCallback(t,e)};K.useContext=function(t){return et.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return et.current.useDeferredValue(t)};K.useEffect=function(t,e){return et.current.useEffect(t,e)};K.useId=function(){return et.current.useId()};K.useImperativeHandle=function(t,e,n){return et.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return et.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return et.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return et.current.useMemo(t,e)};K.useReducer=function(t,e,n){return et.current.useReducer(t,e,n)};K.useRef=function(t){return et.current.useRef(t)};K.useState=function(t){return et.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return et.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return et.current.useTransition()};K.version="18.2.0";y.exports=K;var Ht=y.exports,bc={},gd={exports:{}},yt={},Yv={exports:{}},Jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,F){var M=R.length;R.push(F);e:for(;0<M;){var ne=M-1>>>1,pe=R[ne];if(0<i(pe,F))R[ne]=F,R[M]=pe,M=ne;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var F=R[0],M=R.pop();if(M!==F){R[0]=M;e:for(var ne=0,pe=R.length,qr=pe>>>1;ne<qr;){var Jt=2*(ne+1)-1,Yi=R[Jt],Nt=Jt+1,_n=R[Nt];if(0>i(Yi,M))Nt<pe&&0>i(_n,Yi)?(R[ne]=_n,R[Nt]=M,ne=Nt):(R[ne]=Yi,R[Jt]=M,ne=Jt);else if(Nt<pe&&0>i(_n,M))R[ne]=_n,R[Nt]=M,ne=Nt;else break e}}return F}function i(R,F){var M=R.sortIndex-F.sortIndex;return M!==0?M:R.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=R)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function S(R){if(E=!1,g(R),!v)if(n(l)!==null)v=!0,In(k);else{var F=n(u);F!==null&&ar(S,F.startTime-R)}}function k(R,F){v=!1,E&&(E=!1,p(T),T=-1),m=!0;var M=d;try{for(g(F),h=n(l);h!==null&&(!(h.expirationTime>F)||R&&!Y());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var pe=ne(h.expirationTime<=F);F=t.unstable_now(),typeof pe=="function"?h.callback=pe:h===n(l)&&r(l),g(F)}else r(l);h=n(l)}if(h!==null)var qr=!0;else{var Jt=n(u);Jt!==null&&ar(S,Jt.startTime-F),qr=!1}return qr}finally{h=null,d=M,m=!1}}var _=!1,N=null,T=-1,P=5,L=-1;function Y(){return!(t.unstable_now()-L<P)}function we(){if(N!==null){var R=t.unstable_now();L=R;var F=!0;try{F=N(!0,R)}finally{F?ve():(_=!1,N=null)}}else _=!1}var ve;if(typeof f=="function")ve=function(){f(we)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,re=Ge.port2;Ge.port1.onmessage=we,ve=function(){re.postMessage(null)}}else ve=function(){I(we,0)};function In(R){N=R,_||(_=!0,ve())}function ar(R,F){T=I(function(){R(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,In(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var M=d;d=F;try{return R()}finally{d=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,F){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=d;d=R;try{return F()}finally{d=M}},t.unstable_scheduleCallback=function(R,F,M){var ne=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ne+M:ne):M=ne,R){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=M+pe,R={id:c++,callback:F,priorityLevel:R,startTime:M,expirationTime:pe,sortIndex:-1},M>ne?(R.sortIndex=M,e(u,R),n(l)===null&&R===n(u)&&(E?(p(T),T=-1):E=!0,ar(S,M-ne))):(R.sortIndex=pe,e(l,R),v||m||(v=!0,In(k))),R},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(R){var F=d;return function(){var M=d;d=F;try{return R.apply(this,arguments)}finally{d=M}}}})(Jv);Yv.exports=Jv;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=y.exports,gt=Yv.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ey=new Set,bs={};function jr(t,e){_i(t,e),_i(t+"Capture",e)}function _i(t,e){for(bs[t]=e,t=0;t<e.length;t++)ey.add(e[t])}var hn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Fc=Object.prototype.hasOwnProperty,mT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yp={},Jp={};function gT(t){return Fc.call(Jp,t)?!0:Fc.call(Yp,t)?!1:mT.test(t)?Jp[t]=!0:(Yp[t]=!0,!1)}function vT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yT(t,e,n,r){if(e===null||typeof e=="undefined"||vT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,yd);Ve[e]=new tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,yd);Ve[e]=new tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,yd);Ve[e]=new tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new tt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yT(e,n,i,r)&&(n=null),r||i===null?gT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wn=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),ty=Symbol.for("react.provider"),ny=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),Td=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),ry=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function Ji(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,Fu;function us(t){if(Fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fu=e&&e[1]||""}return`
`+Fu+t}var Uu=!1;function Vu(t,e){if(!t||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?us(t):""}function wT(t){switch(t.tag){case 5:return us(t.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 2:case 15:return t=Vu(t.type,!1),t;case 11:return t=Vu(t.type.render,!1),t;case 1:return t=Vu(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Jr:return"Portal";case Uc:return"Profiler";case Ed:return"StrictMode";case Vc:return"Suspense";case Bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ny:return(t.displayName||"Context")+".Consumer";case ty:return(t._context.displayName||"Context")+".Provider";case Sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Td:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case Nn:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function ET(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ST(t){var e=iy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=ST(t))}function sy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ja(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function zc(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function oy(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function Hc(t,e){oy(t,e);var n=Qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,Qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var cs=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(cs(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qn(n)}}function ay(t,e){var n=Qn(e.value),r=Qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ly(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ly(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,uy=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TT=["Webkit","ms","Moz","O"];Object.keys(ys).forEach(function(t){TT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ys[e]=ys[t]})});function cy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ys.hasOwnProperty(t)&&ys[t]?(""+e).trim():e+"px"}function hy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var IT=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gc(t,e){if(e){if(IT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xc=null;function Id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yc=null,pi=null,mi=null;function im(t){if(t=So(t)){if(typeof Yc!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Vl(e),Yc(t.stateNode,t.type,e))}}function dy(t){pi?mi?mi.push(t):mi=[t]:pi=t}function fy(){if(pi){var t=pi,e=mi;if(mi=pi=null,im(t),e)for(t=0;t<e.length;t++)im(e[t])}}function py(t,e){return t(e)}function my(){}var Bu=!1;function gy(t,e,n){if(Bu)return t(e,n);Bu=!0;try{return py(t,e,n)}finally{Bu=!1,(pi!==null||mi!==null)&&(my(),fy())}}function Us(t,e){var n=t.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Jc=!1;if(hn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Jc=!1}function _T(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ws=!1,za=null,Ha=!1,Zc=null,CT={onError:function(t){ws=!0,za=t}};function kT(t,e,n,r,i,s,o,a,l){ws=!1,za=null,_T.apply(CT,arguments)}function xT(t,e,n,r,i,s,o,a,l){if(kT.apply(this,arguments),ws){if(ws){var u=za;ws=!1,za=null}else throw Error(C(198));Ha||(Ha=!0,Zc=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(zr(t)!==t)throw Error(C(188))}function NT(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sm(i),t;if(s===r)return sm(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function yy(t){return t=NT(t),t!==null?wy(t):null}function wy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wy(t);if(e!==null)return e;t=t.sibling}return null}var Ey=gt.unstable_scheduleCallback,om=gt.unstable_cancelCallback,RT=gt.unstable_shouldYield,AT=gt.unstable_requestPaint,ye=gt.unstable_now,DT=gt.unstable_getCurrentPriorityLevel,_d=gt.unstable_ImmediatePriority,Sy=gt.unstable_UserBlockingPriority,Ka=gt.unstable_NormalPriority,OT=gt.unstable_LowPriority,Ty=gt.unstable_IdlePriority,Ml=null,Kt=null;function PT(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:MT,LT=Math.log,$T=Math.LN2;function MT(t){return t>>>=0,t===0?32:31-(LT(t)/$T|0)|0}var Zo=64,ea=4194304;function hs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=hs(a):(s&=o,s!==0&&(r=hs(s)))}else o=n&~i,o!==0?r=hs(o):s!==0&&(r=hs(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function bT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=bT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iy(){var t=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function UT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function _y(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Cy,kd,ky,xy,Ny,th=!1,ta=[],Un=null,Vn=null,Bn=null,Vs=new Map,Bs=new Map,Dn=[],VT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(e.pointerId)}}function es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=So(e),e!==null&&kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BT(t,e,n,r,i){switch(e){case"focusin":return Un=es(Un,t,e,n,r,i),!0;case"dragenter":return Vn=es(Vn,t,e,n,r,i),!0;case"mouseover":return Bn=es(Bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vs.set(s,es(Vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bs.set(s,es(Bs.get(s)||null,t,e,n,r,i)),!0}return!1}function Ry(t){var e=dr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=vy(n),e!==null){t.blockedOn=e,Ny(t.priority,function(){ky(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xc=r,n.target.dispatchEvent(r),Xc=null}else return e=So(n),e!==null&&kd(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){Ca(t)&&n.delete(e)}function jT(){th=!1,Un!==null&&Ca(Un)&&(Un=null),Vn!==null&&Ca(Vn)&&(Vn=null),Bn!==null&&Ca(Bn)&&(Bn=null),Vs.forEach(lm),Bs.forEach(lm)}function ts(t,e){t.blockedOn===e&&(t.blockedOn=null,th||(th=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,jT)))}function js(t){function e(i){return ts(i,t)}if(0<ta.length){ts(ta[0],t);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Un!==null&&ts(Un,t),Vn!==null&&ts(Vn,t),Bn!==null&&ts(Bn,t),Vs.forEach(e),Bs.forEach(e),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Ry(n),n.blockedOn===null&&Dn.shift()}var gi=wn.ReactCurrentBatchConfig,qa=!0;function zT(t,e,n,r){var i=ee,s=gi.transition;gi.transition=null;try{ee=1,xd(t,e,n,r)}finally{ee=i,gi.transition=s}}function HT(t,e,n,r){var i=ee,s=gi.transition;gi.transition=null;try{ee=4,xd(t,e,n,r)}finally{ee=i,gi.transition=s}}function xd(t,e,n,r){if(qa){var i=nh(t,e,n,r);if(i===null)Ju(t,e,r,Ga,n),am(t,r);else if(BT(i,t,e,n,r))r.stopPropagation();else if(am(t,r),e&4&&-1<VT.indexOf(t)){for(;i!==null;){var s=So(i);if(s!==null&&Cy(s),s=nh(t,e,n,r),s===null&&Ju(t,e,r,Ga,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ju(t,e,r,null,n)}}var Ga=null;function nh(t,e,n,r){if(Ga=null,t=Id(r),t=dr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function Ay(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DT()){case _d:return 1;case Sy:return 4;case Ka:case OT:return 16;case Ty:return 536870912;default:return 16}default:return 16}}var bn=null,Nd=null,ka=null;function Dy(){if(ka)return ka;var t,e=Nd,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ka=i.slice(t,1<r?1-r:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function um(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:um,this.isPropagationStopped=um,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=wt(Vi),Eo=fe({},Vi,{view:0,detail:0}),KT=wt(Eo),zu,Hu,ns,bl=fe({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ns&&(ns&&t.type==="mousemove"?(zu=t.screenX-ns.screenX,Hu=t.screenY-ns.screenY):Hu=zu=0,ns=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),cm=wt(bl),WT=fe({},bl,{dataTransfer:0}),qT=wt(WT),GT=fe({},Eo,{relatedTarget:0}),Ku=wt(GT),QT=fe({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),XT=wt(QT),YT=fe({},Vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JT=wt(YT),ZT=fe({},Vi,{data:0}),hm=wt(ZT),eI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nI[t])?!!e[t]:!1}function Ad(){return rI}var iI=fe({},Eo,{key:function(t){if(t.key){var e=eI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sI=wt(iI),oI=fe({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=wt(oI),aI=fe({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),lI=wt(aI),uI=fe({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),cI=wt(uI),hI=fe({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dI=wt(hI),fI=[9,13,27,32],Dd=hn&&"CompositionEvent"in window,Es=null;hn&&"documentMode"in document&&(Es=document.documentMode);var pI=hn&&"TextEvent"in window&&!Es,Oy=hn&&(!Dd||Es&&8<Es&&11>=Es),fm=String.fromCharCode(32),pm=!1;function Py(t,e){switch(t){case"keyup":return fI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ly(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function mI(t,e){switch(t){case"compositionend":return Ly(e);case"keypress":return e.which!==32?null:(pm=!0,fm);case"textInput":return t=e.data,t===fm&&pm?null:t;default:return null}}function gI(t,e){if(ei)return t==="compositionend"||!Dd&&Py(t,e)?(t=Dy(),ka=Nd=bn=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Oy&&e.locale!=="ko"?null:e.data;default:return null}}var vI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vI[t.type]:e==="textarea"}function $y(t,e,n,r){dy(r),e=Qa(e,"onChange"),0<e.length&&(n=new Rd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ss=null,zs=null;function yI(t){Wy(t,0)}function Fl(t){var e=ri(t);if(sy(e))return t}function wI(t,e){if(t==="change")return e}var My=!1;if(hn){var Wu;if(hn){var qu="oninput"in document;if(!qu){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),qu=typeof gm.oninput=="function"}Wu=qu}else Wu=!1;My=Wu&&(!document.documentMode||9<document.documentMode)}function vm(){Ss&&(Ss.detachEvent("onpropertychange",by),zs=Ss=null)}function by(t){if(t.propertyName==="value"&&Fl(zs)){var e=[];$y(e,zs,t,Id(t)),gy(yI,e)}}function EI(t,e,n){t==="focusin"?(vm(),Ss=e,zs=n,Ss.attachEvent("onpropertychange",by)):t==="focusout"&&vm()}function SI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(zs)}function TI(t,e){if(t==="click")return Fl(e)}function II(t,e){if(t==="input"||t==="change")return Fl(e)}function _I(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:_I;function Hs(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fc.call(e,i)||!bt(t[i],e[i]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,e){var n=ym(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ym(n)}}function Fy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uy(){for(var t=window,e=ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ja(t.document)}return e}function Od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CI(t){var e=Uy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fy(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wm(n,s);var o=wm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kI=hn&&"documentMode"in document&&11>=document.documentMode,ti=null,rh=null,Ts=null,ih=!1;function Em(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ih||ti==null||ti!==ja(r)||(r=ti,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ts&&Hs(Ts,r)||(Ts=r,r=Qa(rh,"onSelect"),0<r.length&&(e=new Rd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ti)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ni={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Gu={},Vy={};hn&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function Ul(t){if(Gu[t])return Gu[t];if(!ni[t])return t;var e=ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vy)return Gu[t]=e[n];return t}var By=Ul("animationend"),jy=Ul("animationiteration"),zy=Ul("animationstart"),Hy=Ul("transitionend"),Ky=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){Ky.set(t,e),jr(e,[t])}for(var Qu=0;Qu<Sm.length;Qu++){var Xu=Sm[Qu],xI=Xu.toLowerCase(),NI=Xu[0].toUpperCase()+Xu.slice(1);nr(xI,"on"+NI)}nr(By,"onAnimationEnd");nr(jy,"onAnimationIteration");nr(zy,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(Hy,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function Tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xT(r,e,void 0,t),t.currentTarget=null}function Wy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Tm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Tm(i,a,u),s=l}}}if(Ha)throw t=Zc,Ha=!1,Zc=null,t}function oe(t,e){var n=e[uh];n===void 0&&(n=e[uh]=new Set);var r=t+"__bubble";n.has(r)||(qy(e,t,2,!1),n.add(r))}function Yu(t,e,n){var r=0;e&&(r|=4),qy(n,t,r,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Ks(t){if(!t[ia]){t[ia]=!0,ey.forEach(function(n){n!=="selectionchange"&&(RI.has(n)||Yu(n,!1,t),Yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,Yu("selectionchange",!1,e))}}function qy(t,e,n,r){switch(Ay(e)){case 1:var i=zT;break;case 4:i=HT;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ju(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gy(function(){var u=s,c=Id(n),h=[];e:{var d=Ky.get(t);if(d!==void 0){var m=Rd,v=t;switch(t){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":m=sI;break;case"focusin":v="focus",m=Ku;break;case"focusout":v="blur",m=Ku;break;case"beforeblur":case"afterblur":m=Ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=qT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=lI;break;case By:case jy:case zy:m=XT;break;case Hy:m=cI;break;case"scroll":m=KT;break;case"wheel":m=dI;break;case"copy":case"cut":case"paste":m=JT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=dm}var E=(e&4)!==0,I=!E&&t==="scroll",p=E?d!==null?d+"Capture":null:d;E=[];for(var f=u,g;f!==null;){g=f;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,p!==null&&(S=Us(f,p),S!=null&&E.push(Ws(f,S,g)))),I)break;f=f.return}0<E.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:E}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Xc&&(v=n.relatedTarget||n.fromElement)&&(dr(v)||v[dn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?dr(v):null,v!==null&&(I=zr(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(E=cm,S="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(E=dm,S="onPointerLeave",p="onPointerEnter",f="pointer"),I=m==null?d:ri(m),g=v==null?d:ri(v),d=new E(S,f+"leave",m,n,c),d.target=I,d.relatedTarget=g,S=null,dr(c)===u&&(E=new E(p,f+"enter",v,n,c),E.target=g,E.relatedTarget=I,S=E),I=S,m&&v)t:{for(E=m,p=v,f=0,g=E;g;g=Gr(g))f++;for(g=0,S=p;S;S=Gr(S))g++;for(;0<f-g;)E=Gr(E),f--;for(;0<g-f;)p=Gr(p),g--;for(;f--;){if(E===p||p!==null&&E===p.alternate)break t;E=Gr(E),p=Gr(p)}E=null}else E=null;m!==null&&Im(h,d,m,E,!1),v!==null&&I!==null&&Im(h,I,v,E,!0)}}e:{if(d=u?ri(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var k=wI;else if(mm(d))if(My)k=II;else{k=SI;var _=EI}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=TI);if(k&&(k=k(t,u))){$y(h,k,n,c);break e}_&&_(t,d,u),t==="focusout"&&(_=d._wrapperState)&&_.controlled&&d.type==="number"&&Kc(d,"number",d.value)}switch(_=u?ri(u):window,t){case"focusin":(mm(_)||_.contentEditable==="true")&&(ti=_,rh=u,Ts=null);break;case"focusout":Ts=rh=ti=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,Em(h,n,c);break;case"selectionchange":if(kI)break;case"keydown":case"keyup":Em(h,n,c)}var N;if(Dd)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ei?Py(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Oy&&n.locale!=="ko"&&(ei||T!=="onCompositionStart"?T==="onCompositionEnd"&&ei&&(N=Dy()):(bn=c,Nd="value"in bn?bn.value:bn.textContent,ei=!0)),_=Qa(u,T),0<_.length&&(T=new hm(T,t,null,n,c),h.push({event:T,listeners:_}),N?T.data=N:(N=Ly(n),N!==null&&(T.data=N)))),(N=pI?mI(t,n):gI(t,n))&&(u=Qa(u,"onBeforeInput"),0<u.length&&(c=new hm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Wy(h,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Us(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=Us(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Im(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Us(n,s),l!=null&&o.unshift(Ws(n,l,a))):i||(l=Us(n,s),l!=null&&o.push(Ws(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AI=/\r\n?/g,DI=/\u0000|\uFFFD/g;function _m(t){return(typeof t=="string"?t:""+t).replace(AI,`
`).replace(DI,"")}function sa(t,e,n){if(e=_m(e),_m(t)!==e&&n)throw Error(C(425))}function Xa(){}var sh=null,oh=null;function ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,OI=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,PI=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm!="undefined"?function(t){return Cm.resolve(null).then(t).catch(LI)}:lh;function LI(t){setTimeout(function(){throw t})}function Zu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),js(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);js(e)}function jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),jt="__reactFiber$"+Bi,qs="__reactProps$"+Bi,dn="__reactContainer$"+Bi,uh="__reactEvents$"+Bi,$I="__reactListeners$"+Bi,MI="__reactHandles$"+Bi;function dr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=km(t);t!==null;){if(n=t[jt])return n;t=km(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[jt]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Vl(t){return t[qs]||null}var ch=[],ii=-1;function rr(t){return{current:t}}function ae(t){0>ii||(t.current=ch[ii],ch[ii]=null,ii--)}function ie(t,e){ii++,ch[ii]=t.current,t.current=e}var Xn={},qe=rr(Xn),at=rr(!1),xr=Xn;function Ci(t,e){var n=t.type.contextTypes;if(!n)return Xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function Ya(){ae(at),ae(qe)}function xm(t,e,n){if(qe.current!==Xn)throw Error(C(168));ie(qe,e),ie(at,n)}function Gy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,ET(t)||"Unknown",i));return fe({},n,r)}function Ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,xr=qe.current,ie(qe,t),ie(at,at.current),!0}function Nm(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Gy(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,ae(at),ae(qe),ie(qe,t)):ae(at),ie(at,n)}var en=null,Bl=!1,ec=!1;function Qy(t){en===null?en=[t]:en.push(t)}function bI(t){Bl=!0,Qy(t)}function ir(){if(!ec&&en!==null){ec=!0;var t=0,e=ee;try{var n=en;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}en=null,Bl=!1}catch(i){throw en!==null&&(en=en.slice(t+1)),Ey(_d,ir),i}finally{ee=e,ec=!1}}return null}var si=[],oi=0,Za=null,el=0,Et=[],St=0,Nr=null,nn=1,rn="";function lr(t,e){si[oi++]=el,si[oi++]=Za,Za=t,el=e}function Xy(t,e,n){Et[St++]=nn,Et[St++]=rn,Et[St++]=Nr,Nr=t;var r=nn;t=rn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nn=1<<32-$t(e)+i|n<<i|r,rn=s+t}else nn=1<<s|n<<i|r,rn=t}function Pd(t){t.return!==null&&(lr(t,1),Xy(t,1,0))}function Ld(t){for(;t===Za;)Za=si[--oi],si[oi]=null,el=si[--oi],si[oi]=null;for(;t===Nr;)Nr=Et[--St],Et[St]=null,rn=Et[--St],Et[St]=null,nn=Et[--St],Et[St]=null}var pt=null,ft=null,le=!1,Ot=null;function Yy(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ft=jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ft=null,!0):!1;default:return!1}}function hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dh(t){if(le){var e=ft;if(e){var n=e;if(!Rm(t,e)){if(hh(t))throw Error(C(418));e=jn(n.nextSibling);var r=pt;e&&Rm(t,e)?Yy(r,n):(t.flags=t.flags&-4097|2,le=!1,pt=t)}}else{if(hh(t))throw Error(C(418));t.flags=t.flags&-4097|2,le=!1,pt=t}}}function Am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function oa(t){if(t!==pt)return!1;if(!le)return Am(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ah(t.type,t.memoizedProps)),e&&(e=ft)){if(hh(t))throw Jy(),Error(C(418));for(;e;)Yy(t,e),e=jn(e.nextSibling)}if(Am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=pt?jn(t.stateNode.nextSibling):null;return!0}function Jy(){for(var t=ft;t;)t=jn(t.nextSibling)}function ki(){ft=pt=null,le=!1}function $d(t){Ot===null?Ot=[t]:Ot.push(t)}var FI=wn.ReactCurrentBatchConfig;function At(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tl=rr(null),nl=null,ai=null,Md=null;function bd(){Md=ai=nl=null}function Fd(t){var e=tl.current;ae(tl),t._currentValue=e}function fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vi(t,e){nl=t,Md=ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(st=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},ai===null){if(nl===null)throw Error(C(308));ai=t,nl.dependencies={lanes:0,firstContext:t}}else ai=ai.next=t;return e}var fr=null;function Ud(t){fr===null?fr=[t]:fr.push(t)}function Zy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ud(e)):(n.next=i.next,i.next=n),e.interleaved=n,fn(t,r)}function fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ud(r)):(e.next=i.next,i.next=e),r.interleaved=e,fn(t,n)}function Na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cd(t,n)}}function Dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,r){var i=t.updateQueue;Rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,E=a;switch(d=e,m=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=fe({},h,d);break e;case 2:Rn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ar|=o,t.lanes=o,t.memoizedState=h}}function Om(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var t0=new Zv.Component().refs;function ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=Kn(t),s=ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Mt(e,t,i,r),Na(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=Kn(t),s=ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Mt(e,t,i,r),Na(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ze(),r=Kn(t),i=ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Mt(e,t,r,n),Na(e,t,r))}};function Pm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function n0(t,e,n){var r=!1,i=Xn,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=lt(e)?xr:qe.current,r=e.contextTypes,s=(r=r!=null)?Ci(t,i):Xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function mh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=t0,Vd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=lt(e)?xr:qe.current,i.context=Ci(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ph(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jl.enqueueReplaceState(i,i.state,null),rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===t0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function aa(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function r0(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Wn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,S){return f===null||f.tag!==6?(f=ac(g,p.mode,S),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,S){var k=g.type;return k===Zr?c(p,f,g.props.children,S,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nn&&$m(k)===f.type)?(S=i(f,g.props),S.ref=rs(p,f,g),S.return=p,S):(S=La(g.type,g.key,g.props,null,p.mode,S),S.ref=rs(p,f,g),S.return=p,S)}function u(p,f,g,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=lc(g,p.mode,S),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,S,k){return f===null||f.tag!==7?(f=Sr(g,p.mode,S,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ac(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xo:return g=La(f.type,f.key,f.props,null,p.mode,g),g.ref=rs(p,null,f),g.return=p,g;case Jr:return f=lc(f,p.mode,g),f.return=p,f;case Nn:var S=f._init;return h(p,S(f._payload),g)}if(cs(f)||Ji(f))return f=Sr(f,p.mode,g,null),f.return=p,f;aa(p,f)}return null}function d(p,f,g,S){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:return g.key===k?l(p,f,g,S):null;case Jr:return g.key===k?u(p,f,g,S):null;case Nn:return k=g._init,d(p,f,k(g._payload),S)}if(cs(g)||Ji(g))return k!==null?null:c(p,f,g,S,null);aa(p,g)}return null}function m(p,f,g,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(g)||null,a(f,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xo:return p=p.get(S.key===null?g:S.key)||null,l(f,p,S,k);case Jr:return p=p.get(S.key===null?g:S.key)||null,u(f,p,S,k);case Nn:var _=S._init;return m(p,f,g,_(S._payload),k)}if(cs(S)||Ji(S))return p=p.get(g)||null,c(f,p,S,k,null);aa(f,S)}return null}function v(p,f,g,S){for(var k=null,_=null,N=f,T=f=0,P=null;N!==null&&T<g.length;T++){N.index>T?(P=N,N=null):P=N.sibling;var L=d(p,N,g[T],S);if(L===null){N===null&&(N=P);break}t&&N&&L.alternate===null&&e(p,N),f=s(L,f,T),_===null?k=L:_.sibling=L,_=L,N=P}if(T===g.length)return n(p,N),le&&lr(p,T),k;if(N===null){for(;T<g.length;T++)N=h(p,g[T],S),N!==null&&(f=s(N,f,T),_===null?k=N:_.sibling=N,_=N);return le&&lr(p,T),k}for(N=r(p,N);T<g.length;T++)P=m(N,p,T,g[T],S),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?T:P.key),f=s(P,f,T),_===null?k=P:_.sibling=P,_=P);return t&&N.forEach(function(Y){return e(p,Y)}),le&&lr(p,T),k}function E(p,f,g,S){var k=Ji(g);if(typeof k!="function")throw Error(C(150));if(g=k.call(g),g==null)throw Error(C(151));for(var _=k=null,N=f,T=f=0,P=null,L=g.next();N!==null&&!L.done;T++,L=g.next()){N.index>T?(P=N,N=null):P=N.sibling;var Y=d(p,N,L.value,S);if(Y===null){N===null&&(N=P);break}t&&N&&Y.alternate===null&&e(p,N),f=s(Y,f,T),_===null?k=Y:_.sibling=Y,_=Y,N=P}if(L.done)return n(p,N),le&&lr(p,T),k;if(N===null){for(;!L.done;T++,L=g.next())L=h(p,L.value,S),L!==null&&(f=s(L,f,T),_===null?k=L:_.sibling=L,_=L);return le&&lr(p,T),k}for(N=r(p,N);!L.done;T++,L=g.next())L=m(N,p,T,L.value,S),L!==null&&(t&&L.alternate!==null&&N.delete(L.key===null?T:L.key),f=s(L,f,T),_===null?k=L:_.sibling=L,_=L);return t&&N.forEach(function(we){return e(p,we)}),le&&lr(p,T),k}function I(p,f,g,S){if(typeof g=="object"&&g!==null&&g.type===Zr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:e:{for(var k=g.key,_=f;_!==null;){if(_.key===k){if(k=g.type,k===Zr){if(_.tag===7){n(p,_.sibling),f=i(_,g.props.children),f.return=p,p=f;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nn&&$m(k)===_.type){n(p,_.sibling),f=i(_,g.props),f.ref=rs(p,_,g),f.return=p,p=f;break e}n(p,_);break}else e(p,_);_=_.sibling}g.type===Zr?(f=Sr(g.props.children,p.mode,S,g.key),f.return=p,p=f):(S=La(g.type,g.key,g.props,null,p.mode,S),S.ref=rs(p,f,g),S.return=p,p=S)}return o(p);case Jr:e:{for(_=g.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=lc(g,p.mode,S),f.return=p,p=f}return o(p);case Nn:return _=g._init,I(p,f,_(g._payload),S)}if(cs(g))return v(p,f,g,S);if(Ji(g))return E(p,f,g,S);aa(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ac(g,p.mode,S),f.return=p,p=f),o(p)):n(p,f)}return I}var xi=r0(!0),i0=r0(!1),To={},Wt=rr(To),Gs=rr(To),Qs=rr(To);function pr(t){if(t===To)throw Error(C(174));return t}function Bd(t,e){switch(ie(Qs,e),ie(Gs,t),ie(Wt,To),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qc(e,t)}ae(Wt),ie(Wt,e)}function Ni(){ae(Wt),ae(Gs),ae(Qs)}function s0(t){pr(Qs.current);var e=pr(Wt.current),n=qc(e,t.type);e!==n&&(ie(Gs,t),ie(Wt,n))}function jd(t){Gs.current===t&&(ae(Wt),ae(Gs))}var he=rr(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tc=[];function zd(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var Ra=wn.ReactCurrentDispatcher,nc=wn.ReactCurrentBatchConfig,Rr=0,de=null,Ce=null,Re=null,sl=!1,Is=!1,Xs=0,UI=0;function ze(){throw Error(C(321))}function Hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bt(t[n],e[n]))return!1;return!0}function Kd(t,e,n,r,i,s){if(Rr=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ra.current=t===null||t.memoizedState===null?zI:HI,t=n(r,i),Is){s=0;do{if(Is=!1,Xs=0,25<=s)throw Error(C(301));s+=1,Re=Ce=null,e.updateQueue=null,Ra.current=KI,t=n(r,i)}while(Is)}if(Ra.current=ol,e=Ce!==null&&Ce.next!==null,Rr=0,Re=Ce=de=null,sl=!1,e)throw Error(C(300));return t}function Wd(){var t=Xs!==0;return Xs=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?de.memoizedState=Re=t:Re=Re.next=t,Re}function xt(){if(Ce===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Re===null?de.memoizedState:Re.next;if(e!==null)Re=e,Ce=t;else{if(t===null)throw Error(C(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Re===null?de.memoizedState=Re=t:Re=Re.next=t}return Re}function Ys(t,e){return typeof e=="function"?e(t):e}function rc(t){var e=xt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,de.lanes|=c,Ar|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,bt(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,de.lanes|=s,Ar|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ic(t){var e=xt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bt(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function o0(){}function a0(t,e){var n=de,r=xt(),i=e(),s=!bt(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,qd(c0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Js(9,u0.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(C(349));(Rr&30)!==0||l0(n,e,i)}return i}function l0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,r){e.value=n,e.getSnapshot=r,h0(e)&&d0(t)}function c0(t,e,n){return n(function(){h0(e)&&d0(t)})}function h0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bt(t,n)}catch{return!0}}function d0(t){var e=fn(t,1);e!==null&&Mt(e,t,1,-1)}function Mm(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:t},e.queue=t,t=t.dispatch=jI.bind(null,de,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f0(){return xt().memoizedState}function Aa(t,e,n,r){var i=Bt();de.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function zl(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&Hd(r,o.deps)){i.memoizedState=Js(e,n,s,r);return}}de.flags|=t,i.memoizedState=Js(1|e,n,s,r)}function bm(t,e){return Aa(8390656,8,t,e)}function qd(t,e){return zl(2048,8,t,e)}function p0(t,e){return zl(4,2,t,e)}function m0(t,e){return zl(4,4,t,e)}function g0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v0(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,g0.bind(null,e,t),n)}function Gd(){}function y0(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function w0(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function E0(t,e,n){return(Rr&21)===0?(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n):(bt(n,e)||(n=Iy(),de.lanes|=n,Ar|=n,t.baseState=!0),e)}function VI(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=nc.transition;nc.transition={};try{t(!1),e()}finally{ee=n,nc.transition=r}}function S0(){return xt().memoizedState}function BI(t,e,n){var r=Kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},T0(t))I0(e,n);else if(n=Zy(t,e,n,r),n!==null){var i=Ze();Mt(n,t,r,i),_0(n,e,r)}}function jI(t,e,n){var r=Kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(T0(t))I0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,bt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ud(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Zy(t,e,i,r),n!==null&&(i=Ze(),Mt(n,t,r,i),_0(n,e,r))}}function T0(t){var e=t.alternate;return t===de||e!==null&&e===de}function I0(t,e){Is=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cd(t,n)}}var ol={readContext:kt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},zI={readContext:kt,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,g0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=BI.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:Mm,useDebugValue:Gd,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=Mm(!1),e=t[0];return t=VI.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,i=Bt();if(le){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ae===null)throw Error(C(349));(Rr&30)!==0||l0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bm(c0.bind(null,r,s,t),[t]),r.flags|=2048,Js(9,u0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=Ae.identifierPrefix;if(le){var n=rn,r=nn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=UI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HI={readContext:kt,useCallback:y0,useContext:kt,useEffect:qd,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:w0,useReducer:rc,useRef:f0,useState:function(){return rc(Ys)},useDebugValue:Gd,useDeferredValue:function(t){var e=xt();return E0(e,Ce.memoizedState,t)},useTransition:function(){var t=rc(Ys)[0],e=xt().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:S0,unstable_isNewReconciler:!1},KI={readContext:kt,useCallback:y0,useContext:kt,useEffect:qd,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:w0,useReducer:ic,useRef:f0,useState:function(){return ic(Ys)},useDebugValue:Gd,useDeferredValue:function(t){var e=xt();return Ce===null?e.memoizedState=t:E0(e,Ce.memoizedState,t)},useTransition:function(){var t=ic(Ys)[0],e=xt().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:S0,unstable_isNewReconciler:!1};function Ri(t,e){try{var n="",r=e;do n+=wT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WI=typeof WeakMap=="function"?WeakMap:Map;function C0(t,e,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ll||(ll=!0,kh=r),gh(t,e)},n}function k0(t,e,n){n=ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gh(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new WI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=o_.bind(null,t,e,n),e.then(t,t))}function Um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ln(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var qI=wn.ReactCurrentOwner,st=!1;function Qe(t,e,n,r){e.child=t===null?i0(e,null,n,r):xi(e,t.child,n,r)}function Bm(t,e,n,r,i){n=n.render;var s=e.ref;return vi(e,i),r=Kd(t,e,n,r,s,i),n=Wd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pn(t,e,i)):(le&&n&&Pd(e),e.flags|=1,Qe(t,e,r,i),e.child)}function jm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x0(t,e,s,r,i)):(t=La(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&t.ref===e.ref)return pn(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function x0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hs(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(st=!0);else return e.lanes=t.lanes,pn(t,e,i)}return vh(t,e,n,r,i)}function N0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(ui,dt),dt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(ui,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(ui,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(ui,dt),dt|=r;return Qe(t,e,i,n),e.child}function R0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,i){var s=lt(n)?xr:qe.current;return s=Ci(e,s),vi(e,i),n=Kd(t,e,n,r,s,i),r=Wd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pn(t,e,i)):(le&&r&&Pd(e),e.flags|=1,Qe(t,e,n,i),e.child)}function zm(t,e,n,r,i){if(lt(n)){var s=!0;Ja(e)}else s=!1;if(vi(e,i),e.stateNode===null)Da(t,e),n0(e,n,r),mh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=lt(n)?xr:qe.current,u=Ci(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Lm(e,o,r,u),Rn=!1;var d=e.memoizedState;o.state=d,rl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||at.current||Rn?(typeof c=="function"&&(ph(e,n,c,r),l=e.memoizedState),(a=Rn||Pm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,e0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:At(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=lt(n)?xr:qe.current,l=Ci(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Lm(e,o,r,l),Rn=!1,d=e.memoizedState,o.state=d,rl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||at.current||Rn?(typeof m=="function"&&(ph(e,n,m,r),v=e.memoizedState),(u=Rn||Pm(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return yh(t,e,n,r,s,i)}function yh(t,e,n,r,i,s){R0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Nm(e,n,!1),pn(t,e,s);r=e.stateNode,qI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xi(e,t.child,null,s),e.child=xi(e,null,a,s)):Qe(t,e,a,s),e.memoizedState=r.state,i&&Nm(e,n,!0),e.child}function A0(t){var e=t.stateNode;e.pendingContext?xm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(t,e.context,!1),Bd(t,e.containerInfo)}function Hm(t,e,n,r,i){return ki(),$d(i),e.flags|=256,Qe(t,e,n,r),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function D0(t,e,n){var r=e.pendingProps,i=he.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(he,i&1),t===null)return dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,r,0,null),t=Sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eh(n),e.memoizedState=wh,t):Qd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wh,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qd(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function la(t,e,n,r){return r!==null&&$d(r),xi(e,t.child,null,n),t=Qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sc(Error(C(422))),la(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wl({mode:"visible",children:r.children},i,0,null),s=Sr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&xi(e,t.child,null,o),e.child.memoizedState=Eh(o),e.memoizedState=wh,s);if((e.mode&1)===0)return la(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=sc(s,r,void 0),la(t,e,o,r)}if(a=(o&t.childLanes)!==0,st||a){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fn(t,i),Mt(r,t,i,-1))}return tf(),r=sc(Error(C(421))),la(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=a_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=jn(i.nextSibling),pt=e,le=!0,Ot=null,t!==null&&(Et[St++]=nn,Et[St++]=rn,Et[St++]=Nr,nn=t.id,rn=t.overflow,Nr=e),e=Qd(e,r.children),e.flags|=4096,e)}function Km(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fh(t.return,e,n)}function oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function O0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(t,e,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Km(t,n,e);else if(t.tag===19)Km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(he,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oc(e,!0,n,null,s);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QI(t,e,n){switch(e.tag){case 3:A0(e),ki();break;case 5:s0(e);break;case 1:lt(e.type)&&Ja(e);break;case 4:Bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(he,he.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?D0(t,e,n):(ie(he,he.current&1),t=pn(t,e,n),t!==null?t.sibling:null);ie(he,he.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return O0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(he,he.current),r)break;return null;case 22:case 23:return e.lanes=0,N0(t,e,n)}return pn(t,e,n)}var P0,Sh,L0,$0;P0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};L0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pr(Wt.current);var s=null;switch(n){case"input":i=zc(t,i),r=zc(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=Wc(t,i),r=Wc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xa)}Gc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$0=function(t,e,n,r){n!==r&&(e.flags|=4)};function is(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function XI(t,e,n){var r=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return lt(e.type)&&Ya(),He(e),null;case 3:return r=e.stateNode,Ni(),ae(at),ae(qe),zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ot!==null&&(Rh(Ot),Ot=null))),Sh(t,e),He(e),null;case 5:jd(e);var i=pr(Qs.current);if(n=e.type,t!==null&&e.stateNode!=null)L0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return He(e),null}if(t=pr(Wt.current),oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[qs]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<ds.length;i++)oe(ds[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":em(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":nm(r,s),oe("invalid",r)}Gc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,a,t),i=["children",""+a]):bs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":Yo(r),tm(r,s,!0);break;case"textarea":Yo(r),rm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ly(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jt]=e,t[qs]=r,P0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ds.length;i++)oe(ds[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":em(t,r),i=zc(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),oe("invalid",t);break;case"textarea":nm(t,r),i=Wc(t,r),oe("invalid",t);break;default:i=r}Gc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fs(t,l):typeof l=="number"&&Fs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&oe("scroll",t):l!=null&&wd(t,s,l,o))}switch(n){case"input":Yo(t),tm(t,r,!1);break;case"textarea":Yo(t),rm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)$0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=pr(Qs.current),pr(Wt.current),oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return He(e),null;case 13:if(ae(he),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&ft!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Jy(),ki(),e.flags|=98560,s=!1;else if(s=oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[jt]=e}else ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Ot!==null&&(Rh(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(he.current&1)!==0?ke===0&&(ke=3):tf())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return Ni(),Sh(t,e),t===null&&Ks(e.stateNode.containerInfo),He(e),null;case 10:return Fd(e.type._context),He(e),null;case 17:return lt(e.type)&&Ya(),He(e),null;case 19:if(ae(he),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)is(s,!1);else{if(ke!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=il(t),o!==null){for(e.flags|=128,is(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>Ai&&(e.flags|=128,r=!0,is(s,!1),e.lanes=4194304)}else{if(!r)if(t=il(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return He(e),null}else 2*ye()-s.renderingStartTime>Ai&&n!==1073741824&&(e.flags|=128,r=!0,is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=he.current,ie(he,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return ef(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(dt&1073741824)!==0&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function YI(t,e){switch(Ld(e),e.tag){case 1:return lt(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ni(),ae(at),ae(qe),zd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return jd(e),null;case 13:if(ae(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(he),null;case 4:return Ni(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var ua=!1,Ke=!1,JI=typeof WeakSet=="function"?WeakSet:Set,D=null;function li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(t,e,r)}else n.current=null}function Th(t,e,n){try{n()}catch(r){me(t,e,r)}}var Wm=!1;function ZI(t,e){if(sh=qa,t=Uy(),Od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(oh={focusedElem:t,selectionRange:n},qa=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,I=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?E:At(e.type,E),I);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){me(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=Wm,Wm=!1,v}function _s(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Th(e,n,s)}i=i.next}while(i!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M0(t){var e=t.alternate;e!==null&&(t.alternate=null,M0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[qs],delete e[uh],delete e[$I],delete e[MI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b0(t){return t.tag===5||t.tag===3||t.tag===4}function qm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}var Le=null,Dt=!1;function Cn(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Ke||li(n,e);case 6:var r=Le,i=Dt;Le=null,Cn(t,e,n),Le=r,Dt=i,Le!==null&&(Dt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Dt?(t=Le,n=n.stateNode,t.nodeType===8?Zu(t.parentNode,n):t.nodeType===1&&Zu(t,n),js(t)):Zu(Le,n.stateNode));break;case 4:r=Le,i=Dt,Le=n.stateNode.containerInfo,Dt=!0,Cn(t,e,n),Le=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Th(n,e,o),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!Ke&&(li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,e,a)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Cn(t,e,n),Ke=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function Gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JI),e.forEach(function(r){var i=l_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Dt=!1;break e;case 3:Le=a.stateNode.containerInfo,Dt=!0;break e;case 4:Le=a.stateNode.containerInfo,Dt=!0;break e}a=a.return}if(Le===null)throw Error(C(160));F0(s,o,i),Le=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,t),e=e.sibling}function U0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),Vt(t),r&4){try{_s(3,t,t.return),Hl(3,t)}catch(E){me(t,t.return,E)}try{_s(5,t,t.return)}catch(E){me(t,t.return,E)}}break;case 1:Rt(e,t),Vt(t),r&512&&n!==null&&li(n,n.return);break;case 5:if(Rt(e,t),Vt(t),r&512&&n!==null&&li(n,n.return),t.flags&32){var i=t.stateNode;try{Fs(i,"")}catch(E){me(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&oy(i,s),Qc(a,o);var u=Qc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?hy(i,h):c==="dangerouslySetInnerHTML"?uy(i,h):c==="children"?Fs(i,h):wd(i,c,h,u)}switch(a){case"input":Hc(i,s);break;case"textarea":ay(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?fi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?fi(i,!!s.multiple,s.defaultValue,!0):fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[qs]=s}catch(E){me(t,t.return,E)}}break;case 6:if(Rt(e,t),Vt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){me(t,t.return,E)}}break;case 3:if(Rt(e,t),Vt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{js(e.containerInfo)}catch(E){me(t,t.return,E)}break;case 4:Rt(e,t),Vt(t);break;case 13:Rt(e,t),Vt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jd=ye())),r&4&&Gm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||c,Rt(e,t),Ke=u):Rt(e,t),Vt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(D=t,c=t.child;c!==null;){for(h=D=c;D!==null;){switch(d=D,m=d.child,d.tag){case 0:case 11:case 14:case 15:_s(4,d,d.return);break;case 1:li(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){me(r,n,E)}}break;case 5:li(d,d.return);break;case 22:if(d.memoizedState!==null){Xm(h);continue}}m!==null?(m.return=d,D=m):Xm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cy("display",o))}catch(E){me(t,t.return,E)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){me(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rt(e,t),Vt(t),r&4&&Gm(t);break;case 21:break;default:Rt(e,t),Vt(t)}}function Vt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b0(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fs(i,""),r.flags&=-33);var s=qm(t);Ch(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=qm(t);_h(t,a,o);break;default:throw Error(C(161))}}catch(l){me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e_(t,e,n){D=t,V0(t)}function V0(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ua;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=ua;var u=Ke;if(ua=o,(Ke=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Ym(i):l!==null?(l.return=o,D=l):Ym(i);for(;s!==null;)D=s,V0(s),s=s.sibling;D=i,ua=a,Ke=u}Qm(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,D=s):Qm(t)}}function Qm(t){for(;D!==null;){var e=D;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ke||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Om(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Om(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&js(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ke||e.flags&512&&Ih(e)}catch(d){me(e,e.return,d)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Xm(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Ym(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(l){me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){me(e,i,l)}}var s=e.return;try{Ih(e)}catch(l){me(e,s,l)}break;case 5:var o=e.return;try{Ih(e)}catch(l){me(e,o,l)}}}catch(l){me(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var t_=Math.ceil,al=wn.ReactCurrentDispatcher,Xd=wn.ReactCurrentOwner,It=wn.ReactCurrentBatchConfig,G=0,Ae=null,Te=null,be=0,dt=0,ui=rr(0),ke=0,Zs=null,Ar=0,Kl=0,Yd=0,Cs=null,rt=null,Jd=0,Ai=1/0,Zt=null,ll=!1,kh=null,Hn=null,ca=!1,Fn=null,ul=0,ks=0,xh=null,Oa=-1,Pa=0;function Ze(){return(G&6)!==0?ye():Oa!==-1?Oa:Oa=ye()}function Kn(t){return(t.mode&1)===0?1:(G&2)!==0&&be!==0?be&-be:FI.transition!==null?(Pa===0&&(Pa=Iy()),Pa):(t=ee,t!==0||(t=window.event,t=t===void 0?16:Ay(t.type)),t)}function Mt(t,e,n,r){if(50<ks)throw ks=0,xh=null,Error(C(185));wo(t,n,r),((G&2)===0||t!==Ae)&&(t===Ae&&((G&2)===0&&(Kl|=n),ke===4&&On(t,be)),ut(t,r),n===1&&G===0&&(e.mode&1)===0&&(Ai=ye()+500,Bl&&ir()))}function ut(t,e){var n=t.callbackNode;FT(t,e);var r=Wa(t,t===Ae?be:0);if(r===0)n!==null&&om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&om(n),e===1)t.tag===0?bI(Jm.bind(null,t)):Qy(Jm.bind(null,t)),PI(function(){(G&6)===0&&ir()}),n=null;else{switch(_y(r)){case 1:n=_d;break;case 4:n=Sy;break;case 16:n=Ka;break;case 536870912:n=Ty;break;default:n=Ka}n=G0(n,B0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B0(t,e){if(Oa=-1,Pa=0,(G&6)!==0)throw Error(C(327));var n=t.callbackNode;if(yi()&&t.callbackNode!==n)return null;var r=Wa(t,t===Ae?be:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=cl(t,r);else{e=r;var i=G;G|=2;var s=z0();(Ae!==t||be!==e)&&(Zt=null,Ai=ye()+500,Er(t,e));do try{i_();break}catch(a){j0(t,a)}while(1);bd(),al.current=s,G=i,Te!==null?e=0:(Ae=null,be=0,e=ke)}if(e!==0){if(e===2&&(i=eh(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=Zs,Er(t,0),On(t,r),ut(t,ye()),n;if(e===6)On(t,r);else{if(i=t.current.alternate,(r&30)===0&&!n_(i)&&(e=cl(t,r),e===2&&(s=eh(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=Zs,Er(t,0),On(t,r),ut(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:ur(t,rt,Zt);break;case 3:if(On(t,r),(r&130023424)===r&&(e=Jd+500-ye(),10<e)){if(Wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lh(ur.bind(null,t,rt,Zt),e);break}ur(t,rt,Zt);break;case 4:if(On(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t_(r/1960))-r,10<r){t.timeoutHandle=lh(ur.bind(null,t,rt,Zt),r);break}ur(t,rt,Zt);break;case 5:ur(t,rt,Zt);break;default:throw Error(C(329))}}}return ut(t,ye()),t.callbackNode===n?B0.bind(null,t):null}function Nh(t,e){var n=Cs;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=cl(t,e),t!==2&&(e=rt,rt=n,e!==null&&Rh(e)),t}function Rh(t){rt===null?rt=t:rt.push.apply(rt,t)}function n_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e){for(e&=~Yd,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Jm(t){if((G&6)!==0)throw Error(C(327));yi();var e=Wa(t,0);if((e&1)===0)return ut(t,ye()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var r=eh(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=Zs,Er(t,0),On(t,e),ut(t,ye()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,rt,Zt),ut(t,ye()),null}function Zd(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Ai=ye()+500,Bl&&ir())}}function Dr(t){Fn!==null&&Fn.tag===0&&(G&6)===0&&yi();var e=G;G|=1;var n=It.transition,r=ee;try{if(It.transition=null,ee=1,t)return t()}finally{ee=r,It.transition=n,G=e,(G&6)===0&&ir()}}function ef(){dt=ui.current,ae(ui)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OI(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:Ni(),ae(at),ae(qe),zd();break;case 5:jd(r);break;case 4:Ni();break;case 13:ae(he);break;case 19:ae(he);break;case 10:Fd(r.type._context);break;case 22:case 23:ef()}n=n.return}if(Ae=t,Te=t=Wn(t.current,null),be=dt=e,ke=0,Zs=null,Yd=Kl=Ar=0,rt=Cs=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fr=null}return t}function j0(t,e){do{var n=Te;try{if(bd(),Ra.current=ol,sl){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sl=!1}if(Rr=0,Re=Ce=de=null,Is=!1,Xs=0,Xd.current=null,n===null||n.return===null){ke=1,Zs=e,Te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Um(o);if(m!==null){m.flags&=-257,Vm(m,o,a,s,e),m.mode&1&&Fm(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if((e&1)===0){Fm(s,u,e),tf();break e}l=Error(C(426))}}else if(le&&a.mode&1){var I=Um(o);if(I!==null){(I.flags&65536)===0&&(I.flags|=256),Vm(I,o,a,s,e),$d(Ri(l,a));break e}}s=l=Ri(l,a),ke!==4&&(ke=2),Cs===null?Cs=[s]:Cs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=C0(s,l,e);Dm(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hn===null||!Hn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=k0(s,a,e);Dm(s,S);break e}}s=s.return}while(s!==null)}K0(n)}catch(k){e=k,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function z0(){var t=al.current;return al.current=ol,t===null?ol:t}function tf(){(ke===0||ke===3||ke===2)&&(ke=4),Ae===null||(Ar&268435455)===0&&(Kl&268435455)===0||On(Ae,be)}function cl(t,e){var n=G;G|=2;var r=z0();(Ae!==t||be!==e)&&(Zt=null,Er(t,e));do try{r_();break}catch(i){j0(t,i)}while(1);if(bd(),G=n,al.current=r,Te!==null)throw Error(C(261));return Ae=null,be=0,ke}function r_(){for(;Te!==null;)H0(Te)}function i_(){for(;Te!==null&&!RT();)H0(Te)}function H0(t){var e=q0(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?K0(t):Te=e,Xd.current=null}function K0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=XI(n,e,dt),n!==null){Te=n;return}}else{if(n=YI(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Te=null;return}}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);ke===0&&(ke=5)}function ur(t,e,n){var r=ee,i=It.transition;try{It.transition=null,ee=1,s_(t,e,n,r)}finally{It.transition=i,ee=r}return null}function s_(t,e,n,r){do yi();while(Fn!==null);if((G&6)!==0)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(UT(t,s),t===Ae&&(Te=Ae=null,be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ca||(ca=!0,G0(Ka,function(){return yi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=It.transition,It.transition=null;var o=ee;ee=1;var a=G;G|=4,Xd.current=null,ZI(t,n),U0(n,t),CI(oh),qa=!!sh,oh=sh=null,t.current=n,e_(n),AT(),G=a,ee=o,It.transition=s}else t.current=n;if(ca&&(ca=!1,Fn=t,ul=i),s=t.pendingLanes,s===0&&(Hn=null),PT(n.stateNode),ut(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,t=kh,kh=null,t;return(ul&1)!==0&&t.tag!==0&&yi(),s=t.pendingLanes,(s&1)!==0?t===xh?ks++:(ks=0,xh=t):ks=0,ir(),null}function yi(){if(Fn!==null){var t=_y(ul),e=It.transition,n=ee;try{if(It.transition=null,ee=16>t?16:t,Fn===null)var r=!1;else{if(t=Fn,Fn=null,ul=0,(G&6)!==0)throw Error(C(331));var i=G;for(G|=4,D=t.current;D!==null;){var s=D,o=s.child;if((D.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:_s(8,c,s)}var h=c.child;if(h!==null)h.return=c,D=h;else for(;D!==null;){c=D;var d=c.sibling,m=c.return;if(M0(c),c===u){D=null;break}if(d!==null){d.return=m,D=d;break}D=m}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}D=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:_s(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,D=p;break e}D=s.return}}var f=t.current;for(D=f;D!==null;){o=D;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,D=g;else e:for(o=f;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(k){me(a,a.return,k)}if(a===o){D=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,D=S;break e}D=a.return}}if(G=i,ir(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Ml,t)}catch{}r=!0}return r}finally{ee=n,It.transition=e}}return!1}function Zm(t,e,n){e=Ri(n,e),e=C0(t,e,1),t=zn(t,e,1),e=Ze(),t!==null&&(wo(t,1,e),ut(t,e))}function me(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Ri(n,t),t=k0(e,t,1),e=zn(e,t,1),t=Ze(),e!==null&&(wo(e,1,t),ut(e,t));break}}e=e.return}}function o_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ze(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(be&n)===n&&(ke===4||ke===3&&(be&130023424)===be&&500>ye()-Jd?Er(t,0):Yd|=n),ut(t,e)}function W0(t,e){e===0&&((t.mode&1)===0?e=1:(e=ea,ea<<=1,(ea&130023424)===0&&(ea=4194304)));var n=Ze();t=fn(t,e),t!==null&&(wo(t,e,n),ut(t,n))}function a_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W0(t,n)}function l_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),W0(t,n)}var q0;q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)st=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return st=!1,QI(t,e,n);st=(t.flags&131072)!==0}else st=!1,le&&(e.flags&1048576)!==0&&Xy(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Da(t,e),t=e.pendingProps;var i=Ci(e,qe.current);vi(e,n),i=Kd(null,e,r,t,i,n);var s=Wd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(s=!0,Ja(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vd(e),i.updater=jl,e.stateNode=i,i._reactInternals=e,mh(e,r,t,n),e=yh(null,e,r,!0,s,n)):(e.tag=0,le&&s&&Pd(e),Qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Da(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=c_(r),t=At(r,t),i){case 0:e=vh(null,e,r,t,n);break e;case 1:e=zm(null,e,r,t,n);break e;case 11:e=Bm(null,e,r,t,n);break e;case 14:e=jm(null,e,r,At(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),zm(t,e,r,i,n);case 3:e:{if(A0(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,e0(t,e),rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ri(Error(C(423)),e),e=Hm(t,e,r,n,i);break e}else if(r!==i){i=Ri(Error(C(424)),e),e=Hm(t,e,r,n,i);break e}else for(ft=jn(e.stateNode.containerInfo.firstChild),pt=e,le=!0,Ot=null,n=i0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){e=pn(t,e,n);break e}Qe(t,e,r,n)}e=e.child}return e;case 5:return s0(e),t===null&&dh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ah(r,i)?o=null:s!==null&&ah(r,s)&&(e.flags|=32),R0(t,e),Qe(t,e,o,n),e.child;case 6:return t===null&&dh(e),null;case 13:return D0(t,e,n);case 4:return Bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xi(e,null,r,n):Qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Bm(t,e,r,i,n);case 7:return Qe(t,e,e.pendingProps,n),e.child;case 8:return Qe(t,e,e.pendingProps.children,n),e.child;case 12:return Qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(tl,r._currentValue),r._currentValue=o,s!==null)if(bt(s.value,o)){if(s.children===i.children&&!at.current){e=pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ln(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vi(e,n),i=kt(i),r=r(i),e.flags|=1,Qe(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),jm(t,e,r,i,n);case 15:return x0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Da(t,e),e.tag=1,lt(r)?(t=!0,Ja(e)):t=!1,vi(e,n),n0(e,r,i),mh(e,r,i,n),yh(null,e,r,!0,t,n);case 19:return O0(t,e,n);case 22:return N0(t,e,n)}throw Error(C(156,e.tag))};function G0(t,e){return Ey(t,e)}function u_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new u_(t,e,n,r)}function nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c_(t){if(typeof t=="function")return nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sd)return 11;if(t===Td)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zr:return Sr(n.children,i,s,e);case Ed:o=8,i|=8;break;case Uc:return t=Tt(12,n,e,i|2),t.elementType=Uc,t.lanes=s,t;case Vc:return t=Tt(13,n,e,i),t.elementType=Vc,t.lanes=s,t;case Bc:return t=Tt(19,n,e,i),t.elementType=Bc,t.lanes=s,t;case ry:return Wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ty:o=10;break e;case ny:o=9;break e;case Sd:o=11;break e;case Td:o=14;break e;case Nn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sr(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=ry,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function lc(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function h_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rf(t,e,n,r,i,s,o,a,l){return t=new h_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vd(s),t}function d_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Q0(t){if(!t)return Xn;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(lt(n))return Gy(t,n,e)}return e}function X0(t,e,n,r,i,s,o,a,l){return t=rf(n,r,!0,t,i,s,o,a,l),t.context=Q0(null),n=t.current,r=Ze(),i=Kn(n),s=ln(r,i),s.callback=e!=null?e:null,zn(n,s,i),t.current.lanes=i,wo(t,i,r),ut(t,r),t}function ql(t,e,n,r){var i=e.current,s=Ze(),o=Kn(i);return n=Q0(n),e.context===null?e.context=n:e.pendingContext=n,e=ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,o),t!==null&&(Mt(t,i,o,s),Na(t,i,o)),o}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sf(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function f_(){return null}var Y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function of(t){this._internalRoot=t}Gl.prototype.render=of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));ql(t,e,null,null)};Gl.prototype.unmount=of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){ql(null,t,null,null)}),e[dn]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=xy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&Ry(t)}};function af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tg(){}function p_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hl(o);s.call(u)}}var o=X0(e,r,t,0,null,!1,!1,"",tg);return t._reactRootContainer=o,t[dn]=o.current,Ks(t.nodeType===8?t.parentNode:t),Dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hl(l);a.call(u)}}var l=rf(t,0,!1,null,null,!1,!1,"",tg);return t._reactRootContainer=l,t[dn]=l.current,Ks(t.nodeType===8?t.parentNode:t),Dr(function(){ql(e,l,n,r)}),l}function Xl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hl(o);a.call(l)}}ql(e,o,t,i)}else o=p_(n,e,t,i,r);return hl(o)}Cy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hs(e.pendingLanes);n!==0&&(Cd(e,n|1),ut(e,ye()),(G&6)===0&&(Ai=ye()+500,ir()))}break;case 13:Dr(function(){var r=fn(t,1);if(r!==null){var i=Ze();Mt(r,t,1,i)}}),sf(t,1)}};kd=function(t){if(t.tag===13){var e=fn(t,134217728);if(e!==null){var n=Ze();Mt(e,t,134217728,n)}sf(t,134217728)}};ky=function(t){if(t.tag===13){var e=Kn(t),n=fn(t,e);if(n!==null){var r=Ze();Mt(n,t,e,r)}sf(t,e)}};xy=function(){return ee};Ny=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Yc=function(t,e,n){switch(e){case"input":if(Hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vl(r);if(!i)throw Error(C(90));sy(r),Hc(r,i)}}}break;case"textarea":ay(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};py=Zd;my=Dr;var m_={usingClientEntryPoint:!1,Events:[So,ri,Vl,dy,fy,Zd]},ss={findFiberByHostInstance:dr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},g_={bundleType:ss.bundleType,version:ss.version,rendererPackageName:ss.rendererPackageName,rendererConfig:ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yy(t),t===null?null:t.stateNode},findFiberByHostInstance:ss.findFiberByHostInstance||f_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Ml=ha.inject(g_),Kt=ha}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m_;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(e))throw Error(C(200));return d_(t,e,null,n)};yt.createRoot=function(t,e){if(!af(t))throw Error(C(299));var n=!1,r="",i=Y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rf(t,1,!1,null,null,n,!1,r,i),t[dn]=e.current,Ks(t.nodeType===8?t.parentNode:t),new of(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=yy(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return Dr(t)};yt.hydrate=function(t,e,n){if(!Ql(e))throw Error(C(200));return Xl(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!af(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Y0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=X0(e,null,t,1,n!=null?n:null,i,!1,s,o),t[dn]=e.current,Ks(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Gl(e)};yt.render=function(t,e,n){if(!Ql(e))throw Error(C(200));return Xl(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(C(40));return t._reactRootContainer?(Dr(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1};yt.unstable_batchedUpdates=Zd;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ql(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Xl(t,e,n,!1,r)};yt.version="18.2.0-next-9e3b772b8-20220608";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(t){console.error(t)}}J0(),gd.exports=yt;var xs=gd.exports,ng=gd.exports;bc.createRoot=ng.createRoot,bc.hydrateRoot=ng.hydrateRoot;var Z0={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object")if(s.toString===Object.prototype.toString)for(var l in s)e.call(s,l)&&s[l]&&r.push(l);else r.push(s.toString())}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Z0);var W=Z0.exports;function eo(){return eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eo.apply(this,arguments)}function ew(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rg(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function v_(t){var e=y_(t,"string");return typeof e=="symbol"?e:String(e)}function y_(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function w_(t,e,n){var r=y.exports.useRef(t!==void 0),i=y.exports.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,y.exports.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function lf(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[rg(r)],a=s[r],l=ew(s,[rg(r),r].map(v_)),u=e[r],c=w_(a,o,t[u]),h=c[0],d=c[1];return eo({},l,(i={},i[r]=h,i[u]=d,i))},t)}function Ah(t,e){return Ah=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ah(t,e)}function E_(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ah(t,e)}var Yl={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_=y.exports,T_=Symbol.for("react.element"),I_=Symbol.for("react.fragment"),__=Object.prototype.hasOwnProperty,C_=S_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k_={key:!0,ref:!0,__self:!0,__source:!0};function tw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)__.call(e,r)&&!k_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:T_,type:t,key:s,ref:o,props:i,_owner:C_.current}}Jl.Fragment=I_;Jl.jsx=tw;Jl.jsxs=tw;Yl.exports=Jl;const w=Yl.exports.jsx,j=Yl.exports.jsxs,mn=Yl.exports.Fragment,x_=["xxl","xl","lg","md","sm","xs"],nw=y.exports.createContext({prefixes:{},breakpoints:x_});function te(t,e){const{prefixes:n}=y.exports.useContext(nw);return t||n[e]||e}function N_(){const{breakpoints:t}=y.exports.useContext(nw);return t}function uf(t){return t&&t.ownerDocument||document}function R_(t){var e=uf(t);return e&&e.defaultView||window}function A_(t,e){return R_(t).getComputedStyle(t,e)}var D_=/([A-Z])/g;function O_(t){return t.replace(D_,"-$1").toLowerCase()}var P_=/^ms-/;function da(t){return O_(t).replace(P_,"-ms-")}var L_=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function $_(t){return!!(t&&L_.test(t))}function un(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(da(e))||A_(t).getPropertyValue(da(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(da(i)):$_(i)?r+=i+"("+s+") ":n+=da(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var rw={exports:{}},M_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b_=M_,F_=b_;function iw(){}function sw(){}sw.resetWarningCache=iw;var U_=function(){function t(r,i,s,o,a,l){if(l!==F_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:sw,resetWarningCache:iw};return n.PropTypes=n,n};rw.exports=U_();var cn=rw.exports,ig={disabled:!1},ow=Ht.createContext(null),fs="unmounted",An="exited",Pt="entering",tn="entered",to="exiting",En=function(t){E_(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=An,s.appearStatus=Pt):l=tn:r.unmountOnExit||r.mountOnEnter?l=fs:l=An,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===fs?{status:An}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Pt&&o!==tn&&(s=Pt):(o===Pt||o===tn)&&(s=to)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){i===void 0&&(i=!1),s!==null?(this.cancelNextCallback(),s===Pt?this.performEnter(i):this.performExit()):this.props.unmountOnExit&&this.state.status===An&&this.setState({status:fs})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[xs.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||ig.disabled){this.safeSetState({status:tn},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Pt},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:tn},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:xs.findDOMNode(this);if(!s||ig.disabled){this.safeSetState({status:An},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:to},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:An},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:xs.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===fs)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=ew(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ht.createElement(ow.Provider,{value:null},typeof o=="function"?o(i,a):Ht.cloneElement(Ht.Children.only(o),a))},e}(Ht.Component);En.contextType=ow;En.propTypes={};function Qr(){}En.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Qr,onEntering:Qr,onEntered:Qr,onExit:Qr,onExiting:Qr,onExited:Qr};En.UNMOUNTED=fs;En.EXITED=An;En.ENTERING=Pt;En.ENTERED=tn;En.EXITING=to;var Zl=!!(typeof window!="undefined"&&window.document&&window.document.createElement),Dh=!1,Oh=!1;try{var uc={get passive(){return Dh=!0},get once(){return Oh=Dh=!0}};Zl&&(window.addEventListener("test",uc,uc),window.removeEventListener("test",uc,!0))}catch{}function V_(t,e,n,r){if(r&&typeof r!="boolean"&&!Oh){var i=r.once,s=r.capture,o=n;!Oh&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Dh?r:s)}t.addEventListener(e,n,r)}function B_(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function dl(t,e,n,r){return V_(t,e,n,r),function(){B_(t,e,n,r)}}function j_(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function z_(t){var e=un(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function H_(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||j_(t,"transitionend",!0)},e+n),s=dl(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function K_(t,e,n,r){n==null&&(n=z_(t)||0);var i=H_(t,n,r),s=dl(t,"transitionend",e);return function(){i(),s()}}function sg(t,e){const n=un(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function cf(t,e){const n=sg(t,"transitionDuration"),r=sg(t,"transitionDelay"),i=K_(t,s=>{s.target===t&&(i(),e(s))},n+r)}function os(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function aw(t){t.offsetHeight}var og=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function W_(t,e){var n=og(t),r=og(e);return function(i){n&&n(i),r&&r(i)}}function lw(t,e){return y.exports.useMemo(function(){return W_(t,e)},[t,e])}function q_(t){return t&&"setState"in t?xs.findDOMNode(t):t!=null?t:null}const G_=Ht.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=y.exports.useRef(null),d=lw(h,l),m=_=>{d(q_(_))},v=_=>N=>{_&&h.current&&_(h.current,N)},E=y.exports.useCallback(v(t),[t]),I=y.exports.useCallback(v(e),[e]),p=y.exports.useCallback(v(n),[n]),f=y.exports.useCallback(v(r),[r]),g=y.exports.useCallback(v(i),[i]),S=y.exports.useCallback(v(s),[s]),k=y.exports.useCallback(v(o),[o]);return w(En,{ref:c,...u,onEnter:E,onEntered:p,onEntering:I,onExit:f,onExited:S,onExiting:g,addEndListener:k,nodeRef:h,children:typeof a=="function"?(_,N)=>a(_,{...N,ref:m}):Ht.cloneElement(a,{ref:m})})});var hf=G_;const Q_={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function uw(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=Q_[t];return r+parseInt(un(e,i[0]),10)+parseInt(un(e,i[1]),10)}const X_={[An]:"collapse",[to]:"collapsing",[Pt]:"collapsing",[tn]:"collapse show"},Y_={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:uw},cw=Ht.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=uw,...u},c)=>{const h=typeof a=="function"?a():a,d=y.exports.useMemo(()=>os(p=>{p.style[h]="0"},t),[h,t]),m=y.exports.useMemo(()=>os(p=>{const f=`scroll${h[0].toUpperCase()}${h.slice(1)}`;p.style[h]=`${p[f]}px`},e),[h,e]),v=y.exports.useMemo(()=>os(p=>{p.style[h]=null},n),[h,n]),E=y.exports.useMemo(()=>os(p=>{p.style[h]=`${l(h,p)}px`,aw(p)},r),[r,l,h]),I=y.exports.useMemo(()=>os(p=>{p.style[h]=null},i),[h,i]);return w(hf,{ref:c,addEndListener:cf,...u,"aria-expanded":u.role?u.in:null,onEnter:d,onEntering:m,onEntered:v,onExit:E,onExiting:I,childRef:o.ref,children:(p,f)=>Ht.cloneElement(o,{...f,className:W(s,o.props.className,X_[p],h==="width"&&"collapse-horizontal")})})});cw.defaultProps=Y_;var J_=cw;function Z_(t){var e=y.exports.useRef(t);return y.exports.useEffect(function(){e.current=t},[t]),e}function Lt(t){var e=Z_(t);return y.exports.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function eC(){var t=y.exports.useRef(!0),e=y.exports.useRef(function(){return t.current});return y.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function tC(t){var e=y.exports.useRef(null);return y.exports.useEffect(function(){e.current=t}),e.current}var nC=typeof global!="undefined"&&global.navigator&&global.navigator.product==="ReactNative",rC=typeof document!="undefined",iC=rC||nC?y.exports.useLayoutEffect:y.exports.useEffect;const sC=["as","disabled"];function oC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aC(t){return!t||t.trim()==="#"}function df({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&aC(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s!=null?s:"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const hw=y.exports.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=oC(t,sC);const[s,{tagName:o}]=df(Object.assign({tagName:n,disabled:r},i));return w(o,Object.assign({},i,s,{ref:e}))});hw.displayName="Button";const lC=["onKeyDown"];function uC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cC(t){return!t||t.trim()==="#"}const ff=y.exports.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=uC(t,lC);const[i]=df(Object.assign({tagName:"a"},r)),s=Lt(o=>{i.onKeyDown(o),n==null||n(o)});return cC(r.href)||r.role==="button"?w("a",Object.assign({ref:e},r,i,{onKeyDown:s})):w("a",Object.assign({ref:e},r,{onKeyDown:n}))});ff.displayName="Anchor";const hC={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},dC={[Pt]:"show",[tn]:"show"},pf=y.exports.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=y.exports.useCallback((o,a)=>{aw(o),r.onEnter==null||r.onEnter(o,a)},[r]);return w(hf,{ref:i,addEndListener:cf,...r,onEnter:s,childRef:e.ref,children:(o,a)=>y.exports.cloneElement(e,{...a,className:W("fade",t,e.props.className,dC[o],n[o])})})});pf.defaultProps=hC;pf.displayName="Fade";var mf=pf;const fC={"aria-label":cn.string,onClick:cn.func,variant:cn.oneOf(["white"])},pC={"aria-label":"Close"},eu=y.exports.forwardRef(({className:t,variant:e,...n},r)=>w("button",{ref:r,type:"button",className:W("btn-close",e&&`btn-close-${e}`,t),...n}));eu.displayName="CloseButton";eu.propTypes=fC;eu.defaultProps=pC;var dw=eu,tu=t=>y.exports.forwardRef((e,n)=>w("div",{...e,ref:n,className:W(e.className,t)})),mC=/-(.)/g;function gC(t){return t.replace(mC,function(e,n){return n.toUpperCase()})}const vC=t=>t[0].toUpperCase()+gC(t).slice(1);function ht(t,{displayName:e=vC(t),Component:n,defaultProps:r}={}){const i=y.exports.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c=te(o,t);return w(a,{ref:u,className:W(s,c),...l})});return i.defaultProps=r,i.displayName=e,i}const fw=tu("h4");fw.displayName="DivStyledAsH4";const yC=ht("alert-heading",{Component:fw}),wC=ht("alert-link",{Component:ff}),EC={variant:"primary",show:!0,transition:mf,closeLabel:"Close alert"},gf=y.exports.forwardRef((t,e)=>{const{bsPrefix:n,show:r,closeLabel:i,closeVariant:s,className:o,children:a,variant:l,onClose:u,dismissible:c,transition:h,...d}=lf(t,{show:"onClose"}),m=te(n,"alert"),v=Lt(p=>{u&&u(!1,p)}),E=h===!0?mf:h,I=j("div",{role:"alert",...E?void 0:d,ref:e,className:W(o,m,l&&`${m}-${l}`,c&&`${m}-dismissible`),children:[c&&w(dw,{onClick:v,"aria-label":i,variant:s}),a]});return E?w(E,{unmountOnExit:!0,...d,ref:void 0,in:r,children:I}):r?I:null});gf.displayName="Alert";gf.defaultProps=EC;var vf=Object.assign(gf,{Link:wC,Heading:yC});const SC={variant:"primary",active:!1,disabled:!1},yf=y.exports.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=te(e,"btn"),[u,{tagName:c}]=df({tagName:t,...o});return w(c,{...u,...o,ref:a,className:W(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});yf.displayName="Button";yf.defaultProps=SC;var Io=yf;const pw=y.exports.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=te(t,"card-img");return w(r,{ref:s,className:W(n?`${o}-${n}`:o,e),...i})});pw.displayName="CardImg";var TC=pw;const mw=y.exports.createContext(null);mw.displayName="CardHeaderContext";var gw=mw;const vw=y.exports.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=te(t,"card-header"),o=y.exports.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return w(gw.Provider,{value:o,children:w(n,{ref:i,...r,className:W(e,s)})})});vw.displayName="CardHeader";var IC=vw;const _C=tu("h5"),CC=tu("h6"),yw=ht("card-body"),kC=ht("card-title",{Component:_C}),xC=ht("card-subtitle",{Component:CC}),NC=ht("card-link",{Component:"a"}),RC=ht("card-text",{Component:"p"}),AC=ht("card-footer"),DC=ht("card-img-overlay"),OC={body:!1},wf=y.exports.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s,children:o,as:a="div",...l},u)=>{const c=te(t,"card");return w(a,{ref:u,...l,className:W(e,c,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?w(yw,{children:o}):o})});wf.displayName="Card";wf.defaultProps=OC;var Di=Object.assign(wf,{Img:TC,Title:kC,Subtitle:xC,Body:yw,Link:NC,Text:RC,Header:IC,Footer:AC,ImgOverlay:DC});function PC(t){var e=y.exports.useRef(t);return e.current=t,e}function LC(t){var e=PC(t);y.exports.useEffect(function(){return function(){return e.current()}},[])}function $C(t,e){return y.exports.Children.toArray(t).some(n=>y.exports.isValidElement(n)&&n.type===e)}function MC({as:t,bsPrefix:e,className:n,...r}){e=te(e,"col");const i=N_(),s=[],o=[];return i.forEach(a=>{const l=r[a];delete r[a];let u,c,h;typeof l=="object"&&l!=null?{span:u,offset:c,order:h}=l:u=l;const d=a!=="xs"?`-${a}`:"";u&&s.push(u===!0?`${e}${d}`:`${e}${d}-${u}`),h!=null&&o.push(`order${d}-${h}`),c!=null&&o.push(`offset${d}-${c}`)}),[{...r,className:W(n,...s,...o)},{as:t,bsPrefix:e,spans:s}]}const ww=y.exports.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=MC(t);return w(i,{...r,ref:e,className:W(n,!o.length&&s)})});ww.displayName="Col";var bC=ww,FC=Function.prototype.bind.call(Function.prototype.call,[].slice);function cr(t,e){return FC(t.querySelectorAll(e))}function UC(){var t=y.exports.useReducer(function(n){return!n},!1),e=t[1];return e}function ag(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const fl=y.exports.createContext(null),Ef=(t,e=null)=>t!=null?String(t):e||null,Sf=y.exports.createContext(null);Sf.displayName="NavContext";const VC="data-rr-ui-",BC="rrUi";function nu(t){return`${VC}${t}`}function jC(t){return`${BC}${t}`}const Ew=y.exports.createContext(Zl?window:void 0);Ew.Provider;function Sw(){return y.exports.useContext(Ew)}const Tw=y.exports.createContext(null);Tw.displayName="NavbarContext";var ji=Tw;const zC={type:cn.string,tooltip:cn.bool,as:cn.elementType},Tf=y.exports.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>w(t,{...i,ref:s,className:W(e,`${n}-${r?"tooltip":"feedback"}`)}));Tf.displayName="Feedback";Tf.propTypes=zC;var Iw=Tf;const HC=y.exports.createContext({});var gn=HC;const _w=y.exports.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=y.exports.useContext(gn);return e=te(e,"form-check-input"),w(o,{...a,ref:l,type:r,id:t||u,className:W(n,e,i&&"is-valid",s&&"is-invalid")})});_w.displayName="FormCheckInput";var Cw=_w;const kw=y.exports.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=y.exports.useContext(gn);return t=te(t,"form-check-label"),w("label",{...r,ref:i,htmlFor:n||s,className:W(e,t)})});kw.displayName="FormCheckLabel";var Ph=kw;const xw=y.exports.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,disabled:i=!1,isValid:s=!1,isInvalid:o=!1,feedbackTooltip:a=!1,feedback:l,feedbackType:u,className:c,style:h,title:d="",type:m="checkbox",label:v,children:E,as:I="input",...p},f)=>{e=te(e,"form-check"),n=te(n,"form-switch");const{controlId:g}=y.exports.useContext(gn),S=y.exports.useMemo(()=>({controlId:t||g}),[g,t]),k=!E&&v!=null&&v!==!1||$C(E,Ph),_=w(Cw,{...p,type:m==="switch"?"checkbox":m,ref:f,isValid:s,isInvalid:o,disabled:i,as:I});return w(gn.Provider,{value:S,children:w("div",{style:h,className:W(c,k&&e,r&&`${e}-inline`,m==="switch"&&n),children:E||j(mn,{children:[_,k&&w(Ph,{title:d,children:v}),l&&w(Iw,{type:u,tooltip:a,children:l})]})})})});xw.displayName="FormCheck";var pl=Object.assign(xw,{Input:Cw,Label:Ph});const Nw=y.exports.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...h},d)=>{const{controlId:m}=y.exports.useContext(gn);t=te(t,"form-control");let v;return l?v={[`${t}-plaintext`]:!0}:v={[t]:!0,[`${t}-${n}`]:n},w(c,{...h,type:e,size:r,ref:d,readOnly:u,id:i||m,className:W(s,v,o&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)})});Nw.displayName="FormControl";var KC=Object.assign(Nw,{Feedback:Iw}),WC=ht("form-floating");const Rw=y.exports.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=y.exports.useMemo(()=>({controlId:t}),[t]);return w(gn.Provider,{value:i,children:w(e,{...n,ref:r})})});Rw.displayName="FormGroup";var Aw=Rw;const qC={column:!1,visuallyHidden:!1},If=y.exports.forwardRef(({as:t="label",bsPrefix:e,column:n,visuallyHidden:r,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=y.exports.useContext(gn);e=te(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=W(i,e,r&&"visually-hidden",n&&u);return s=s||l,n?w(bC,{ref:a,as:"label",className:c,htmlFor:s,...o}):w(t,{ref:a,className:c,htmlFor:s,...o})});If.displayName="FormLabel";If.defaultProps=qC;var GC=If;const Dw=y.exports.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=y.exports.useContext(gn);return t=te(t,"form-range"),w("input",{...r,type:"range",ref:i,className:W(e,t),id:n||s})});Dw.displayName="FormRange";var QC=Dw;const Ow=y.exports.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=y.exports.useContext(gn);return t=te(t,"form-select"),w("select",{...a,size:n,ref:l,className:W(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});Ow.displayName="FormSelect";var XC=Ow;const Pw=y.exports.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=te(t,"form-text"),w(n,{...i,ref:s,className:W(e,t,r&&"text-muted")})));Pw.displayName="FormText";var YC=Pw;const Lw=y.exports.forwardRef((t,e)=>w(pl,{...t,ref:e,type:"switch"}));Lw.displayName="Switch";var JC=Object.assign(Lw,{Input:pl.Input,Label:pl.Label});const $w=y.exports.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=te(t,"form-floating"),j(Aw,{ref:o,className:W(e,t),controlId:r,...s,children:[n,w("label",{htmlFor:r,children:i})]})));$w.displayName="FloatingLabel";var ZC=$w;const ek={_ref:cn.any,validated:cn.bool,as:cn.elementType},_f=y.exports.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>w(n,{...r,ref:i,className:W(t,e&&"was-validated")}));_f.displayName="Form";_f.propTypes=ek;var ce=Object.assign(_f,{Group:Aw,Control:KC,Floating:WC,Check:pl,Switch:JC,Label:GC,Text:YC,Range:QC,Select:XC,FloatingLabel:ZC});const tk={fluid:!1},Cf=y.exports.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=te(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return w(n,{ref:s,...i,className:W(r,e?`${o}${a}`:o)})});Cf.displayName="Container";Cf.defaultProps=tk;var ru=Cf;const Mw=y.exports.createContext(null),nk=["as","active","eventKey"];function rk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bw({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=y.exports.useContext(fl),a=y.exports.useContext(Sf),l=y.exports.useContext(Mw);let u=n;const c={role:i};if(a){!i&&a.role==="tablist"&&(c.role="tab");const h=a.getControllerId(t!=null?t:null),d=a.getControlledId(t!=null?t:null);c[nu("event-key")]=t,c.id=h||r,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=d)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=Lt(h=>{s||(e==null||e(h),t!=null&&o&&!h.isPropagationStopped()&&o(t,h))}),[c,{isActive:u}]}const Fw=y.exports.forwardRef((t,e)=>{let{as:n=hw,active:r,eventKey:i}=t,s=rk(t,nk);const[o,a]=bw(Object.assign({key:Ef(i,s.href),active:r},s));return o[nu("active")]=a.isActive,w(n,Object.assign({},s,o,{ref:e}))});Fw.displayName="NavItem";const ik=["as","onSelect","activeKey","role","onKeyDown"];function sk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const lg=()=>{},ug=nu("event-key"),Uw=y.exports.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=sk(t,ik);const l=UC(),u=y.exports.useRef(!1),c=y.exports.useContext(fl),h=y.exports.useContext(Mw);let d,m;h&&(s=s||"tablist",i=h.activeKey,d=h.getControlledId,m=h.getControllerId);const v=y.exports.useRef(null),E=g=>{const S=v.current;if(!S)return null;const k=cr(S,`[${ug}]:not([aria-disabled=true])`),_=S.querySelector("[aria-selected=true]");if(!_||_!==document.activeElement)return null;const N=k.indexOf(_);if(N===-1)return null;let T=N+g;return T>=k.length&&(T=0),T<0&&(T=k.length-1),k[T]},I=(g,S)=>{g!=null&&(r==null||r(g,S),c==null||c(g,S))},p=g=>{if(o==null||o(g),!h)return;let S;switch(g.key){case"ArrowLeft":case"ArrowUp":S=E(-1);break;case"ArrowRight":case"ArrowDown":S=E(1);break;default:return}!S||(g.preventDefault(),I(S.dataset[jC("EventKey")]||null,g),u.current=!0,l())};y.exports.useEffect(()=>{if(v.current&&u.current){const g=v.current.querySelector(`[${ug}][aria-selected=true]`);g==null||g.focus()}u.current=!1});const f=lw(e,v);return w(fl.Provider,{value:I,children:w(Sf.Provider,{value:{role:s,activeKey:Ef(i),getControlledId:d||lg,getControllerId:m||lg},children:w(n,Object.assign({},a,{onKeyDown:p,ref:f,role:s}))})})});Uw.displayName="Nav";var ok=Object.assign(Uw,{Item:Fw});function cc(t){t===void 0&&(t=uf());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function ak(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const cg=nu("modal-open");class kf{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return ak(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(un(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(cg,""),un(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(cg),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const hc=(t,e)=>{var n;return Zl?t==null?(e||uf()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),(n=t)!=null&&n.nodeType&&t||null):null};function lk(t,e){const n=Sw(),[r,i]=y.exports.useState(()=>hc(t,n==null?void 0:n.document));if(!r){const s=hc(t);s&&i(s)}return y.exports.useEffect(()=>{e&&r&&e(r)},[e,r]),y.exports.useEffect(()=>{const s=hc(t);s!==r&&i(s)},[t,r]),r}const uk=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function ck(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let dc;function hk(t){return dc||(dc=new kf({ownerDocument:t==null?void 0:t.document})),dc}function dk(t){const e=Sw(),n=t||hk(e),r=y.exports.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:y.exports.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:y.exports.useCallback(i=>{r.current.backdrop=i},[])})}const Vw=y.exports.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:h,backdropTransition:d,autoFocus:m=!0,enforceFocus:v=!0,restoreFocus:E=!0,restoreFocusOptions:I,renderDialog:p,renderBackdrop:f=se=>w("div",Object.assign({},se)),manager:g,container:S,onShow:k,onHide:_=()=>{},onExit:N,onExited:T,onExiting:P,onEnter:L,onEntering:Y,onEntered:we}=t,ve=ck(t,uk);const Ge=lk(S),re=dk(g),In=eC(),ar=tC(n),[R,F]=y.exports.useState(!n),M=y.exports.useRef(null);y.exports.useImperativeHandle(e,()=>re,[re]),Zl&&!ar&&n&&(M.current=cc()),!h&&!n&&!R?F(!0):n&&R&&F(!1);const ne=Lt(()=>{if(re.add(),_n.current=dl(document,"keydown",Yi),Nt.current=dl(document,"focus",()=>setTimeout(qr),!0),k&&k(),m){const se=cc(document);re.dialog&&se&&!ag(re.dialog,se)&&(M.current=se,re.dialog.focus())}}),pe=Lt(()=>{if(re.remove(),_n.current==null||_n.current(),Nt.current==null||Nt.current(),E){var se;(se=M.current)==null||se.focus==null||se.focus(I),M.current=null}});y.exports.useEffect(()=>{!n||!Ge||ne()},[n,Ge,ne]),y.exports.useEffect(()=>{!R||pe()},[R,pe]),LC(()=>{pe()});const qr=Lt(()=>{if(!v||!In()||!re.isTopModal())return;const se=cc();re.dialog&&se&&!ag(re.dialog,se)&&re.dialog.focus()}),Jt=Lt(se=>{se.target===se.currentTarget&&(u==null||u(se),a===!0&&_())}),Yi=Lt(se=>{l&&se.keyCode===27&&re.isTopModal()&&(c==null||c(se),se.defaultPrevented||_())}),Nt=y.exports.useRef(),_n=y.exports.useRef(),JS=(...se)=>{F(!0),T==null||T(...se)},$u=h;if(!Ge||!(n||$u&&!R))return null;const qp=Object.assign({role:r,ref:re.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ve,{style:s,className:i,tabIndex:-1});let Mu=p?p(qp):w("div",Object.assign({},qp,{children:y.exports.cloneElement(o,{role:"document"})}));$u&&(Mu=w($u,{appear:!0,unmountOnExit:!0,in:!!n,onExit:N,onExiting:P,onExited:JS,onEnter:L,onEntering:Y,onEntered:we,children:Mu}));let Go=null;if(a){const se=d;Go=f({ref:re.setBackdropRef,onClick:Jt}),se&&(Go=w(se,{appear:!0,in:!!n,children:Go}))}return w(mn,{children:xs.createPortal(j(mn,{children:[Go,Mu]}),Ge)})});Vw.displayName="Modal";var fk=Object.assign(Vw,{Manager:kf});function pk(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function mk(t,e){t.classList?t.classList.add(e):pk(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function hg(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function gk(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=hg(t.className,e):t.setAttribute("class",hg(t.className&&t.className.baseVal||"",e))}const Xr={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Bw extends kf{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,un(n,{[e]:`${parseFloat(un(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],un(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(mk(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";cr(n,Xr.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),cr(n,Xr.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),cr(n,Xr.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();gk(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";cr(n,Xr.FIXED_CONTENT).forEach(s=>this.restore(r,s)),cr(n,Xr.STICKY_CONTENT).forEach(s=>this.restore(i,s)),cr(n,Xr.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let fc;function vk(t){return fc||(fc=new Bw(t)),fc}var yk=Bw;const wk=y.exports.createContext({onHide(){}});var jw=wk;const Ek={closeLabel:"Close",closeButton:!1},zw=y.exports.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=y.exports.useContext(jw),l=Lt(()=>{a==null||a.onHide(),r==null||r()});return j("div",{ref:o,...s,children:[i,n&&w(dw,{"aria-label":t,variant:e,onClick:l})]})});zw.defaultProps=Ek;var Sk=zw,dg={exports:{}},Lh={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,u,c,h){var d=u||"<<anonymous>>",m=h||l;if(a[l]==null)return o?new Error("Required "+c+" `"+m+"` was not specified "+("in `"+d+"`.")):null;for(var v=arguments.length,E=Array(v>6?v-6:0),I=6;I<v;I++)E[I-6]=arguments[I];return r.apply(void 0,[a,l,d,c,m].concat(E))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(Lh,Lh.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=Lh.exports,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,h=Array(c),d=0;d<c;d++)h[d]=arguments[d];var m=null;return a.forEach(function(v){if(m==null){var E=v.apply(void 0,h);E!=null&&(m=E)}}),m}return(0,r.default)(u)}t.exports=e.default})(dg,dg.exports);var Tk=ht("nav-item");const Ik={disabled:!1},xf=y.exports.forwardRef(({bsPrefix:t,className:e,as:n=ff,active:r,eventKey:i,...s},o)=>{t=te(t,"nav-link");const[a,l]=bw({key:Ef(i,s.href),active:r,...s});return w(n,{...s,...a,ref:o,className:W(e,t,s.disabled&&"disabled",l.isActive&&"active")})});xf.displayName="NavLink";xf.defaultProps=Ik;var _k=xf;const Ck={justify:!1,fill:!1},Nf=y.exports.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s,justify:o,navbar:a,navbarScroll:l,className:u,activeKey:c,...h}=lf(t,{activeKey:"onSelect"}),d=te(r,"nav");let m,v,E=!1;const I=y.exports.useContext(ji),p=y.exports.useContext(gw);return I?(m=I.bsPrefix,E=a==null?!0:a):p&&({cardHeaderBsPrefix:v}=p),w(ok,{as:n,ref:e,activeKey:c,className:W(u,{[d]:!E,[`${m}-nav`]:E,[`${m}-nav-scroll`]:E&&l,[`${v}-${i}`]:!!v,[`${d}-${i}`]:!!i,[`${d}-fill`]:s,[`${d}-justified`]:o}),...h})});Nf.displayName="Nav";Nf.defaultProps=Ck;var fa=Object.assign(Nf,{Item:Tk,Link:_k});const Hw=y.exports.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=te(t,"navbar-brand");const s=n||(r.href?"a":"span");return w(s,{...r,ref:i,className:W(e,t)})});Hw.displayName="NavbarBrand";var kk=Hw;const Kw=y.exports.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=te(e,"navbar-collapse");const i=y.exports.useContext(ji);return w(J_,{in:!!(i&&i.expanded),...n,children:w("div",{ref:r,className:e,children:t})})});Kw.displayName="NavbarCollapse";var xk=Kw;const Nk={label:"Toggle navigation"},Rf=y.exports.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=te(t,"navbar-toggler");const{onToggle:l,expanded:u}=y.exports.useContext(ji)||{},c=Lt(h=>{s&&s(h),l&&l()});return i==="button"&&(o.type="button"),w(i,{...o,ref:a,onClick:c,"aria-label":r,className:W(e,t,!u&&"collapsed"),children:n||w("span",{className:`${t}-icon`})})});Rf.displayName="NavbarToggle";Rf.defaultProps=Nk;var Rk=Rf,$h=new WeakMap,fg=function(e,n){if(!(!e||!n)){var r=$h.get(n)||new Map;$h.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function Ak(t,e){e===void 0&&(e=typeof window=="undefined"?void 0:window);var n=fg(t,e),r=y.exports.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return iC(function(){var o=fg(t,e);if(!o)return s(!1);var a=$h.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function Dk(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var c;if(typeof a=="object")c=a,u=l,l=!0;else{var h;l=l||!0,c=(h={},h[a]=l,h)}var d=y.exports.useMemo(function(){return Object.entries(c).reduce(function(m,v){var E=v[0],I=v[1];return(I==="up"||I===!0)&&(m=n(m,s(E))),(I==="down"||I===!0)&&(m=n(m,i(E))),m},"")},[JSON.stringify(c)]);return Ak(d,u)}return o}var Ok=Dk({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Pk=ht("offcanvas-body");const Lk={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},$k={[Pt]:"show",[tn]:"show"},Af=y.exports.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=te(t,"offcanvas"),w(hf,{ref:i,addEndListener:cf,...r,childRef:n.ref,children:(s,o)=>y.exports.cloneElement(n,{...o,className:W(e,n.props.className,(s===Pt||s===to)&&`${t}-toggling`,$k[s])})})));Af.defaultProps=Lk;Af.displayName="OffcanvasToggling";var Mk=Af;const bk={closeLabel:"Close",closeButton:!1},Df=y.exports.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=te(t,"offcanvas-header"),w(Sk,{ref:r,...n,className:W(e,t)})));Df.displayName="OffcanvasHeader";Df.defaultProps=bk;var Fk=Df;const Uk=tu("h5");var Vk=ht("offcanvas-title",{Component:Uk});const Bk={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};function jk(t){return w(Mk,{...t})}function zk(t){return w(mf,{...t})}const Of=y.exports.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,show:s,backdrop:o,keyboard:a,scroll:l,onEscapeKeyDown:u,onShow:c,onHide:h,container:d,autoFocus:m,enforceFocus:v,restoreFocus:E,restoreFocusOptions:I,onEntered:p,onExit:f,onExiting:g,onEnter:S,onEntering:k,onExited:_,backdropClassName:N,manager:T,...P},L)=>{const Y=y.exports.useRef();t=te(t,"offcanvas");const{onToggle:we}=y.exports.useContext(ji)||{},ve=Lt(()=>{we==null||we(),h==null||h()}),Ge=y.exports.useMemo(()=>({onHide:ve}),[ve]);function re(){return T||(l?(Y.current||(Y.current=new yk({handleContainerOverflow:!1})),Y.current):vk())}const In=(M,...ne)=>{M&&(M.style.visibility="visible"),S==null||S(M,...ne)},ar=(M,...ne)=>{M&&(M.style.visibility=""),_==null||_(...ne)},R=y.exports.useCallback(M=>w("div",{...M,className:W(`${t}-backdrop`,N)}),[N,t]),F=M=>w("div",{role:"dialog",...M,...P,className:W(e,t,`${t}-${i}`),"aria-labelledby":r,children:n});return w(jw.Provider,{value:Ge,children:w(fk,{show:s,ref:L,backdrop:o,container:d,keyboard:a,autoFocus:m,enforceFocus:v&&!l,restoreFocus:E,restoreFocusOptions:I,onEscapeKeyDown:u,onShow:c,onHide:ve,onEnter:In,onEntering:k,onEntered:p,onExit:f,onExiting:g,onExited:ar,manager:re(),transition:jk,backdropTransition:zk,renderBackdrop:R,renderDialog:F})})});Of.displayName="Offcanvas";Of.defaultProps=Bk;var Hk=Object.assign(Of,{Body:Pk,Header:Fk,Title:Vk});const Ww=y.exports.forwardRef(({className:t,bsPrefix:e,backdrop:n,backdropClassName:r,keyboard:i,scroll:s,placement:o,autoFocus:a,enforceFocus:l,restoreFocus:u,restoreFocusOptions:c,onShow:h,onHide:d,onEscapeKeyDown:m,onEnter:v,onEntering:E,onEntered:I,onExit:p,onExiting:f,onExited:g,...S},k)=>{const _=y.exports.useContext(ji);e=te(e,"offcanvas");const N=typeof(_==null?void 0:_.expand)=="string",T=Ok(N?_.expand:"xs","up");return N&&T?w("div",{ref:k,...S,className:W(t,e,`${e}-${o}`)}):w(Hk,{ref:k,show:!!(_!=null&&_.expanded),bsPrefix:e,backdrop:n,backdropClassName:r,keyboard:i,scroll:s,placement:o,autoFocus:a,enforceFocus:l,restoreFocus:u,restoreFocusOptions:c,onShow:h,onHide:d,onEscapeKeyDown:m,onEnter:v,onEntering:E,onEntered:I,onExit:p,onExiting:f,onExited:g,...S})});Ww.displayName="NavbarOffcanvas";var Kk=Ww;const Wk=ht("navbar-text",{Component:"span"}),qk={expand:!0,variant:"light",collapseOnSelect:!1},Pf=y.exports.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:h,onSelect:d,collapseOnSelect:m,...v}=lf(t,{expanded:"onToggle"}),E=te(n,"navbar"),I=y.exports.useCallback((...g)=>{d==null||d(...g),m&&c&&(h==null||h(!1))},[d,m,c,h]);v.role===void 0&&u!=="nav"&&(v.role="navigation");let p=`${E}-expand`;typeof r=="string"&&(p=`${p}-${r}`);const f=y.exports.useMemo(()=>({onToggle:()=>h==null?void 0:h(!c),bsPrefix:E,expanded:!!c,expand:r}),[E,c,r,h]);return w(ji.Provider,{value:f,children:w(fl.Provider,{value:I,children:w(u,{ref:e,...v,className:W(l,E,r&&p,i&&`${E}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});Pf.defaultProps=qk;Pf.displayName="Navbar";var Gk=Object.assign(Pf,{Brand:kk,Collapse:xk,Offcanvas:Kk,Text:Wk,Toggle:Rk});const Qk=y.exports.forwardRef(({bsPrefix:t,className:e,striped:n,bordered:r,borderless:i,hover:s,size:o,variant:a,responsive:l,...u},c)=>{const h=te(t,"table"),d=W(e,h,a&&`${h}-${a}`,o&&`${h}-${o}`,n&&`${h}-striped`,r&&`${h}-bordered`,i&&`${h}-borderless`,s&&`${h}-hover`),m=w("table",{...u,className:d,ref:c});if(l){let v=`${h}-responsive`;return typeof l=="string"&&(v=`${v}-${l}`),w("div",{className:v,children:m})}return m});var qw=Qk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yk=function(t){const e=Gw(t);return Qw.encodeByteArray(e,!0)},Xw=function(t){return Yk(t).replace(/\./g,"")},Jk=function(t){try{return Qw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yw(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Lf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ex(){return De().indexOf("Electron/")>=0}function Zw(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tx(){return De().indexOf("MSAppHost/")>=0}function e1(){return typeof indexedDB=="object"}function t1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function nx(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rx,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ix(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,r)}}function ix(t,e){return t.replace(sx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sx=/\{\$([^}]+)}/g;function ox(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function no(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(pg(s)&&pg(o)){if(!no(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function pg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ax(t,e){const n=new lx(t,e);return n.subscribe.bind(n)}class lx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ux(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pc),i.error===void 0&&(i.error=pc),i.complete===void 0&&(i.complete=pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ux(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=1e3,hx=2,dx=4*60*60*1e3,fx=.5;function mg(t,e=cx,n=hx){const r=e*Math.pow(n,t),i=Math.round(fx*r*(Math.random()-.5)*2);return Math.min(dx,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){return t&&t._delegate?t._delegate:t}class Ft{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gx(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mx(t){return t===hr?void 0:t}function gx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new px(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const yx={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},wx=J.INFO,Ex={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Sx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ex[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class iu{constructor(e){this.name=e,this._logLevel=wx,this._logHandler=Sx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Tx=(t,e)=>e.some(n=>t instanceof n);let gg,vg;function Ix(){return gg||(gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _x(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n1=new WeakMap,Mh=new WeakMap,r1=new WeakMap,mc=new WeakMap,$f=new WeakMap;function Cx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n1.set(n,t)}).catch(()=>{}),$f.set(e,t),e}function kx(t){if(Mh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mh.set(t,e)}let bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xx(t){bh=t(bh)}function Nx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gc(this),e,...n);return r1.set(r,e.sort?e.sort():[e]),qn(r)}:_x().includes(t)?function(...e){return t.apply(gc(this),e),qn(n1.get(this))}:function(...e){return qn(t.apply(gc(this),e))}}function Rx(t){return typeof t=="function"?Nx(t):(t instanceof IDBTransaction&&kx(t),Tx(t,Ix())?new Proxy(t,bh):t)}function qn(t){if(t instanceof IDBRequest)return Cx(t);if(mc.has(t))return mc.get(t);const e=Rx(t);return e!==t&&(mc.set(t,e),$f.set(e,t)),e}const gc=t=>$f.get(t);function i1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qn(o.result),l.oldVersion,l.newVersion,qn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ax=["get","getKey","getAll","getAllKeys","count"],Dx=["put","add","delete","clear"],vc=new Map;function yg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Dx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ax.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vc.set(e,s),s}xx(t=>({...t,get:(e,n,r)=>yg(e,n)||t.get(e,n,r),has:(e,n)=>!!yg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Px(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Px(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",wg="0.7.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new iu("@firebase/app"),Lx="@firebase/app-compat",$x="@firebase/analytics-compat",Mx="@firebase/analytics",bx="@firebase/app-check-compat",Fx="@firebase/app-check",Ux="@firebase/auth",Vx="@firebase/auth-compat",Bx="@firebase/database",jx="@firebase/database-compat",zx="@firebase/functions",Hx="@firebase/functions-compat",Kx="@firebase/installations",Wx="@firebase/installations-compat",qx="@firebase/messaging",Gx="@firebase/messaging-compat",Qx="@firebase/performance",Xx="@firebase/performance-compat",Yx="@firebase/remote-config",Jx="@firebase/remote-config-compat",Zx="@firebase/storage",eN="@firebase/storage-compat",tN="@firebase/firestore",nN="@firebase/firestore-compat",rN="firebase",iN="9.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="[DEFAULT]",sN={[Fh]:"fire-core",[Lx]:"fire-core-compat",[Mx]:"fire-analytics",[$x]:"fire-analytics-compat",[Fx]:"fire-app-check",[bx]:"fire-app-check-compat",[Ux]:"fire-auth",[Vx]:"fire-auth-compat",[Bx]:"fire-rtdb",[jx]:"fire-rtdb-compat",[zx]:"fire-fn",[Hx]:"fire-fn-compat",[Kx]:"fire-iid",[Wx]:"fire-iid-compat",[qx]:"fire-fcm",[Gx]:"fire-fcm-compat",[Qx]:"fire-perf",[Xx]:"fire-perf-compat",[Yx]:"fire-rc",[Jx]:"fire-rc-compat",[Zx]:"fire-gcs",[eN]:"fire-gcs-compat",[tN]:"fire-fst",[nN]:"fire-fst-compat","fire-js":"fire-js",[rN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,Uh=new Map;function oN(t,e){try{t.container.addComponent(e)}catch(n){Mf.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qt(t){const e=t.name;if(Uh.has(e))return Mf.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of ml.values())oN(n,t);return!0}function Kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Or=new Hr("app","Firebase",aN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=iN;function uN(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:s1,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Or.create("bad-app-name",{appName:String(r)});const i=ml.get(r);if(i){if(no(t,i.options)&&no(n,i.config))return i;throw Or.create("duplicate-app",{appName:r})}const s=new vx(r);for(const a of Uh.values())s.addComponent(a);const o=new lN(t,n,s);return ml.set(r,o),o}function bf(t=s1){const e=ml.get(t);if(!e)throw Or.create("no-app",{appName:t});return e}function _t(t,e,n){var r;let i=(r=sN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mf.warn(a.join(" "));return}Qt(new Ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="firebase-heartbeat-database",hN=1,ro="firebase-heartbeat-store";let yc=null;function o1(){return yc||(yc=i1(cN,hN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ro)}}}).catch(t=>{throw Or.create("storage-open",{originalErrorMessage:t.message})})),yc}async function dN(t){var e;try{return(await o1()).transaction(ro).objectStore(ro).get(a1(t))}catch(n){throw Or.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Eg(t,e){var n;try{const i=(await o1()).transaction(ro,"readwrite");return await i.objectStore(ro).put(e,a1(t)),i.done}catch(r){throw Or.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function a1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=1024,pN=30*24*60*60*1e3;class mN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=pN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sg(),{heartbeatsToSend:n,unsentEntries:r}=gN(this._heartbeatsCache.heartbeats),i=Xw(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sg(){return new Date().toISOString().substring(0,10)}function gN(t,e=fN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return e1()?t1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tg(t){return Xw(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){Qt(new Ft("platform-logger",e=>new Ox(e),"PRIVATE")),Qt(new Ft("heartbeat",e=>new mN(e),"PRIVATE")),_t(Fh,wg,t),_t(Fh,wg,"esm2017"),_t("fire-js","")}yN("");var wN="firebase",EN="9.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(wN,EN,"app");const l1="@firebase/installations",Ff="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=1e4,c1=`w:${Ff}`,h1="FIS_v2",SN="https://firebaseinstallations.googleapis.com/v1",TN=60*60*1e3,IN="installations",_N="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Pr=new Hr(IN,_N,CN);function d1(t){return t instanceof Sn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1({projectId:t}){return`${SN}/projects/${t}/installations`}function p1(t){return{token:t.token,requestStatus:2,expiresIn:xN(t.expiresIn),creationTime:Date.now()}}async function m1(t,e){const r=(await e.json()).error;return Pr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function g1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kN(t,{refreshToken:e}){const n=g1(t);return n.append("Authorization",NN(e)),n}async function v1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function xN(t){return Number(t.replace("s","000"))}function NN(t){return`${h1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=f1(t),i=g1(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:h1,appId:t.appId,sdkVersion:c1},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await v1(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:p1(u.authToken)}}else throw await m1("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=/^[cdef][\w-]{21}$/,Vh="";function ON(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PN(t);return DN.test(n)?n:Vh}catch{return Vh}}function PN(t){return AN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new Map;function E1(t,e){const n=su(t);S1(n,e),LN(n,e)}function S1(t,e){const n=w1.get(t);if(!!n)for(const r of n)r(e)}function LN(t,e){const n=$N();n&&n.postMessage({key:t,fid:e}),MN()}let mr=null;function $N(){return!mr&&"BroadcastChannel"in self&&(mr=new BroadcastChannel("[Firebase] FID Change"),mr.onmessage=t=>{S1(t.data.key,t.data.fid)}),mr}function MN(){w1.size===0&&mr&&(mr.close(),mr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="firebase-installations-database",FN=1,Lr="firebase-installations-store";let wc=null;function Uf(){return wc||(wc=i1(bN,FN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lr)}}})),wc}async function gl(t,e){const n=su(t),i=(await Uf()).transaction(Lr,"readwrite"),s=i.objectStore(Lr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&E1(t,e.fid),e}async function T1(t){const e=su(t),r=(await Uf()).transaction(Lr,"readwrite");await r.objectStore(Lr).delete(e),await r.done}async function ou(t,e){const n=su(t),i=(await Uf()).transaction(Lr,"readwrite"),s=i.objectStore(Lr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&E1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vf(t){let e;const n=await ou(t.appConfig,r=>{const i=UN(r),s=VN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Vh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function UN(t){const e=t||{fid:ON(),registrationStatus:0};return I1(e)}function VN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Pr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=BN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jN(t)}:{installationEntry:e}}async function BN(t,e){try{const n=await RN(t,e);return gl(t.appConfig,n)}catch(n){throw d1(n)&&n.customData.serverCode===409?await T1(t.appConfig):await gl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function jN(t){let e=await Ig(t.appConfig);for(;e.registrationStatus===1;)await y1(100),e=await Ig(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vf(t);return r||n}return e}function Ig(t){return ou(t,e=>{if(!e)throw Pr.create("installation-not-found");return I1(e)})}function I1(t){return zN(t)?{fid:t.fid,registrationStatus:0}:t}function zN(t){return t.registrationStatus===1&&t.registrationTime+u1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN({appConfig:t,heartbeatServiceProvider:e},n){const r=KN(t,n),i=kN(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:c1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await v1(()=>fetch(r,a));if(l.ok){const u=await l.json();return p1(u)}else throw await m1("Generate Auth Token",l)}function KN(t,{fid:e}){return`${f1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(t,e=!1){let n;const r=await ou(t.appConfig,s=>{if(!_1(s))throw Pr.create("not-registered");const o=s.authToken;if(!e&&GN(o))return s;if(o.requestStatus===1)return n=WN(t,e),s;{if(!navigator.onLine)throw Pr.create("app-offline");const a=XN(s);return n=qN(t,a),a}});return n?await n:r.authToken}async function WN(t,e){let n=await _g(t.appConfig);for(;n.authToken.requestStatus===1;)await y1(100),n=await _g(t.appConfig);const r=n.authToken;return r.requestStatus===0?Bf(t,e):r}function _g(t){return ou(t,e=>{if(!_1(e))throw Pr.create("not-registered");const n=e.authToken;return YN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qN(t,e){try{const n=await HN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await gl(t.appConfig,r),n}catch(n){if(d1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await T1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await gl(t.appConfig,r)}throw n}}function _1(t){return t!==void 0&&t.registrationStatus===2}function GN(t){return t.requestStatus===2&&!QN(t)}function QN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+TN}function XN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function YN(t){return t.requestStatus===1&&t.requestTime+u1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vf(e);return r?r.catch(console.error):Bf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(t,e=!1){const n=t;return await eR(n),(await Bf(n,e)).token}async function eR(t){const{registrationPromise:e}=await Vf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){if(!t||!t.options)throw Ec("App Configuration");if(!t.name)throw Ec("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ec(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ec(t){return Pr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="installations",nR="installations-internal",rR=t=>{const e=t.getProvider("app").getImmediate(),n=tR(e),r=Kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},iR=t=>{const e=t.getProvider("app").getImmediate(),n=Kr(e,C1).getImmediate();return{getId:()=>JN(n),getToken:i=>ZN(n,i)}};function sR(){Qt(new Ft(C1,rR,"PUBLIC")),Qt(new Ft(nR,iR,"PRIVATE"))}sR();_t(l1,Ff);_t(l1,Ff,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="analytics",oR="firebase_id",aR="origin",lR=60*1e3,uR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",k1="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new iu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cR(t,e){const n=document.createElement("script");n.src=`${k1}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function hR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await x1(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){mt.error(a)}t("config",i,s)}async function fR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await x1(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){mt.error(s)}}function pR(t,e,n,r){async function i(s,o,a){try{s==="event"?await fR(t,e,n,o,a):s==="config"?await dR(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){mt.error(l)}}return i}function mR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=pR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function gR(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(k1))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ct=new Hr("analytics","Analytics",vR);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=30,wR=1e3;class ER{constructor(e={},n=wR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const N1=new ER;function SR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function TR(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:SR(r)},s=uR.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function IR(t,e=N1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ct.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ct.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new kR;return setTimeout(async()=>{a.abort()},n!==void 0?n:lR),R1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function R1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=N1){var s,o;const{appId:a,measurementId:l}=t;try{await _R(r,e)}catch(u){if(l)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await TR(t);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!CR(c)){if(i.deleteThrottleMetadata(a),l)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?mg(n,i.intervalMillis,yR):mg(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),mt.debug(`Calling attemptFetch again in ${h} millis`),R1(t,d,r,i)}}function _R(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function CR(t){if(!(t instanceof Sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class kR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(){var t;if(e1())try{await t1()}catch(e){return mt.warn(Ct.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return mt.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function RR(t,e,n,r,i,s,o){var a;const l=IR(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>mt.error(m)),e.push(l);const u=NR().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);gR()||cR(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[aR]="firebase",d.update=!0,h!=null&&(d[oR]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.app=e}_delete(){return delete Ns[this.app.options.appId],Promise.resolve()}}let Ns={},Cg=[];const kg={};let Sc="dataLayer",DR="gtag",xg,A1,Ng=!1;function OR(){const t=[];if(Lf()&&t.push("This is a browser extension environment."),nx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});mt.warn(n.message)}}function PR(t,e,n){OR();const r=t.options.appId;if(!r)throw Ct.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(Ns[r]!=null)throw Ct.create("already-exists",{id:r});if(!Ng){hR(Sc);const{wrappedGtag:s,gtagCore:o}=mR(Ns,Cg,kg,Sc,DR);A1=s,xg=o,Ng=!0}return Ns[r]=RR(t,Cg,kg,e,xg,Sc,n),new AR(t)}function LR(t=bf()){t=Tn(t);const e=Kr(t,vl);return e.isInitialized()?e.getImmediate():$R(t)}function $R(t,e={}){const n=Kr(t,vl);if(n.isInitialized()){const i=n.getImmediate();if(no(e,n.getOptions()))return i;throw Ct.create("already-initialized")}return n.initialize({options:e})}function MR(t,e,n,r){t=Tn(t),xR(A1,Ns[t.app.options.appId],e,n,r).catch(i=>mt.error(i))}const Rg="@firebase/analytics",Ag="0.8.0";function bR(){Qt(new Ft(vl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return PR(r,i,n)},"PUBLIC")),Qt(new Ft("analytics-internal",t,"PRIVATE")),_t(Rg,Ag),_t(Rg,Ag,"esm2017");function t(e){try{const n=e.getProvider(vl).getImmediate();return{logEvent:(r,i,s)=>MR(n,r,i,s)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}bR();var FR=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,jf=jf||{},B=FR||self;function yl(){}function Bh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ko(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UR(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++VR)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),VR=0;function BR(t,e,n){return t.call.apply(t.bind,arguments)}function jR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=BR:Fe=jR,Fe.apply(null,arguments)}function pa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function sr(){this.s=this.s,this.o=this.o}var zR=0;sr.prototype.s=!1;sr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zR!=0)&&UR(this)};sr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const D1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},O1=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function HR(t){e:{var e=$A;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Dg(t){return Array.prototype.concat.apply([],arguments)}function zf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function wl(t){return/^[\s\xa0]*$/.test(t)}var Og=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function Ic(t,e){return t<e?-1:t>e?1:0}var Ye;e:{var Pg=B.navigator;if(Pg){var Lg=Pg.userAgent;if(Lg){Ye=Lg;break e}}Ye=""}function Hf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P1(t){const e={};for(const n in t)e[n]=t[n];return e}var $g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<$g.length;s++)n=$g[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kf(t){return Kf[" "](t),t}Kf[" "]=yl;function KR(t){var e=GR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var WR=Xe(Ye,"Opera"),Oi=Xe(Ye,"Trident")||Xe(Ye,"MSIE"),$1=Xe(Ye,"Edge"),jh=$1||Oi,M1=Xe(Ye,"Gecko")&&!(Xe(Ye.toLowerCase(),"webkit")&&!Xe(Ye,"Edge"))&&!(Xe(Ye,"Trident")||Xe(Ye,"MSIE"))&&!Xe(Ye,"Edge"),qR=Xe(Ye.toLowerCase(),"webkit")&&!Xe(Ye,"Edge");function b1(){var t=B.document;return t?t.documentMode:void 0}var El;e:{var _c="",Cc=function(){var t=Ye;if(M1)return/rv:([^\);]+)(\)|;)/.exec(t);if($1)return/Edge\/([\d\.]+)/.exec(t);if(Oi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qR)return/WebKit\/(\S+)/.exec(t);if(WR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cc&&(_c=Cc?Cc[1]:""),Oi){var kc=b1();if(kc!=null&&kc>parseFloat(_c)){El=String(kc);break e}}El=_c}var GR={};function QR(){return KR(function(){let t=0;const e=Og(String(El)).split("."),n=Og("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ic(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ic(i[2].length==0,s[2].length==0)||Ic(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var zh;if(B.document&&Oi){var Mg=b1();zh=Mg||parseInt(El,10)||void 0}else zh=void 0;var XR=zh,YR=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",yl,e),B.removeEventListener("test",yl,e)}catch{}return t}();function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};function io(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(M1){e:{try{Kf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:JR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&io.Z.h.call(this)}}je(io,We);var JR={2:"touch",3:"pen",4:"mouse"};io.prototype.h=function(){io.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xo="closure_listenable_"+(1e6*Math.random()|0),ZR=0;function eA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ZR,this.ca=this.fa=!1}function au(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lu(t){this.src=t,this.g={},this.h=0}lu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Kh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new eA(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Hh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=D1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(au(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Wf="closure_lm_"+(1e6*Math.random()|0),xc={};function F1(t,e,n,r,i){if(r&&r.once)return V1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)F1(t,e[s],n,r,i);return null}return n=Qf(n),t&&t[xo]?t.N(e,n,ko(r)?!!r.capture:!!r,i):U1(t,e,n,!1,r,i)}function U1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ko(i)?!!i.capture:!!i,a=Gf(t);if(a||(t[Wf]=a=new lu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=tA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)YR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(j1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tA(){function t(n){return e.call(t.src,t.listener,n)}var e=nA;return t}function V1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)V1(t,e[s],n,r,i);return null}return n=Qf(n),t&&t[xo]?t.O(e,n,ko(r)?!!r.capture:!!r,i):U1(t,e,n,!0,r,i)}function B1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)B1(t,e[s],n,r,i);else r=ko(r)?!!r.capture:!!r,n=Qf(n),t&&t[xo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Kh(s,n,r,i),-1<n&&(au(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kh(e,n,r,i)),(n=-1<t?e[t]:null)&&qf(n))}function qf(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[xo])Hh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(j1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gf(e))?(Hh(n,t),n.h==0&&(n.src=null,e[Wf]=null)):au(t)}}}function j1(t){return t in xc?xc[t]:xc[t]="on"+t}function nA(t,e){if(t.ca)t=!0;else{e=new io(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&qf(t),t=n.call(r,e)}return t}function Gf(t){return t=t[Wf],t instanceof lu?t:null}var Nc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qf(t){return typeof t=="function"?t:(t[Nc]||(t[Nc]=function(e){return t.handleEvent(e)}),t[Nc])}function Oe(){sr.call(this),this.i=new lu(this),this.P=this,this.I=null}je(Oe,sr);Oe.prototype[xo]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){B1(this,t,e,n,r)};function Ue(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var i=e;e=new We(r,t),L1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ma(o,r,!0,e)&&i}if(o=e.g=t,i=ma(o,r,!0,e)&&i,i=ma(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ma(o,r,!1,e)&&i}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)au(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ma(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Hh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xf=B.JSON.stringify;function rA(){var t=H1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class iA{constructor(){this.h=this.g=null}add(e,n){const r=z1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var z1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new sA,t=>t.reset());class sA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oA(t){B.setTimeout(()=>{throw t},0)}function Yf(t,e){Wh||aA(),qh||(Wh(),qh=!0),H1.add(t,e)}var Wh;function aA(){var t=B.Promise.resolve(void 0);Wh=function(){t.then(lA)}}var qh=!1,H1=new iA;function lA(){for(var t;t=rA();){try{t.h.call(t.g)}catch(n){oA(n)}var e=z1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qh=!1}function uu(t,e){Oe.call(this),this.h=t||1,this.g=e||B,this.j=Fe(this.kb,this),this.l=Date.now()}je(uu,Oe);O=uu.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ue(this,"tick"),this.da&&(Jf(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jf(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){uu.Z.M.call(this),Jf(this),delete this.g};function Zf(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function K1(t){t.g=Zf(()=>{t.g=null,t.i&&(t.i=!1,K1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class uA extends sr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:K1(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function so(t){sr.call(this),this.h=t,this.g={}}je(so,sr);var bg=[];function W1(t,e,n,r){Array.isArray(n)||(n&&(bg[0]=n.toString()),n=bg);for(var i=0;i<n.length;i++){var s=F1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function q1(t){Hf(t.g,function(e,n){this.g.hasOwnProperty(n)&&qf(e)},t),t.g={}}so.prototype.M=function(){so.Z.M.call(this),q1(this)};so.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function cu(){this.g=!0}cu.prototype.Aa=function(){this.g=!1};function cA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function hA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ci(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fA(t,n)+(r?" "+r:"")})}function dA(t,e){t.info(function(){return"TIMEOUT: "+e})}cu.prototype.info=function(){};function fA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xf(n)}catch{return e}}var Wr={},Fg=null;function hu(){return Fg=Fg||new Oe}Wr.Ma="serverreachability";function G1(t){We.call(this,Wr.Ma,t)}je(G1,We);function oo(t){const e=hu();Ue(e,new G1(e))}Wr.STAT_EVENT="statevent";function Q1(t,e){We.call(this,Wr.STAT_EVENT,t),this.stat=e}je(Q1,We);function Je(t){const e=hu();Ue(e,new Q1(e,t))}Wr.Na="timingevent";function X1(t,e){We.call(this,Wr.Na,t),this.size=e}je(X1,We);function No(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var du={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Y1={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ep(){}ep.prototype.h=null;function Ug(t){return t.h||(t.h=t.i())}function J1(){}var Ro={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function tp(){We.call(this,"d")}je(tp,We);function np(){We.call(this,"c")}je(np,We);var Gh;function fu(){}je(fu,ep);fu.prototype.g=function(){return new XMLHttpRequest};fu.prototype.i=function(){return{}};Gh=new fu;function Ao(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new so(this),this.P=pA,t=jh?125:void 0,this.W=new uu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Z1}function Z1(){this.i=null,this.g="",this.h=!1}var pA=45e3,Qh={},Sl={};O=Ao.prototype;O.setTimeout=function(t){this.P=t};function Xh(t,e,n){t.K=1,t.v=mu(vn(e)),t.s=n,t.U=!0,eE(t,null)}function eE(t,e){t.F=Date.now(),Do(t),t.A=vn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),aE(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Z1,t.g=xE(t.l,n?e:null,!t.s),0<t.O&&(t.L=new uA(Fe(t.Ia,t,t.g),t.O)),W1(t.V,t.g,"readystatechange",t.gb),e=t.H?P1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oo(),cA(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&sn(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const c=sn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||jh||this.g&&(this.h.h||this.g.ga()||zg(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?oo(3):oo(2)),pu(this);var n=this.g.ba();this.N=n;t:if(tE(this)){var r=zg(this.g);t="";var i=r.length,s=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){gr(this),Rs(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,hA(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wl(a)){var u=a;break t}}u=null}if(n=u)ci(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yh(this,n);else{this.i=!1,this.o=3,Je(12),gr(this),Rs(this);break e}}this.U?(nE(this,c,o),jh&&this.i&&c==3&&(W1(this.V,this.W,"tick",this.fb),this.W.start())):(ci(this.j,this.m,o,null),Yh(this,o)),c==4&&gr(this),this.i&&!this.I&&(c==4?IE(this.l,this):(this.i=!1,Do(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),gr(this),Rs(this)}}}catch{}finally{}};function tE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function nE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=mA(t,n),i==Sl){e==4&&(t.o=4,Je(14),r=!1),ci(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Qh){t.o=4,Je(15),ci(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ci(t.j,t.m,i,null),Yh(t,i);tE(t)&&i!=Sl&&i!=Qh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hp(e),e.L=!0,Je(11))):(ci(t.j,t.m,n,"[Invalid Chunked Response]"),gr(t),Rs(t))}O.fb=function(){if(this.g){var t=sn(this.g),e=this.g.ga();this.C<e.length&&(pu(this),nE(this,t,e),this.i&&t!=4&&Do(this))}};function mA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Sl:(n=Number(e.substring(n,r)),isNaN(n)?Qh:(r+=1,r+n>e.length?Sl:(e=e.substr(r,n),t.C=r+n,e)))}O.cancel=function(){this.I=!0,gr(this)};function Do(t){t.Y=Date.now()+t.P,rE(t,t.P)}function rE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=No(Fe(t.eb,t),e)}function pu(t){t.B&&(B.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(dA(this.j,this.A),this.K!=2&&(oo(),Je(17)),gr(this),this.o=2,Rs(this)):rE(this,this.Y-t)};function Rs(t){t.l.G==0||t.I||IE(t.l,t)}function gr(t){pu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jf(t.W),q1(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jh(n.i,t))){if(n.I=t.N,!t.J&&Jh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Cl(n),yu(n);else break e;cp(n),Je(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=No(Fe(n.ab,n),6e3));if(1>=cE(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else vr(n,11)}else if((t.J||n.g==t)&&Cl(n),!wl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;!s.g&&(Xe(v,"spdy")||Xe(v,"quic")||Xe(v,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(sp(s,s.h),s.h=null))}if(r.D){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,ue(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=kE(r,r.H?r.la:null,r.W),o.J){hE(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(pu(a),Do(a)),r.g=o}else SE(r);0<n.l.length&&wu(n)}else u[0]!="stop"&&u[0]!="close"||vr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vr(n,7):up(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}oo(4)}catch{}}function gA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Bh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bh(t)||typeof t=="string")O1(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Bh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=gA(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function zi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof zi)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}O=zi.prototype;O.R=function(){ip(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return ip(this),this.g.concat()};function ip(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];$r(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],$r(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}O.get=function(t,e){return $r(this.h,t)?this.h[t]:e};O.set=function(t,e){$r(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function $r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var iE=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Mr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Mr){this.g=e!==void 0?e:t.g,Tl(this,t.j),this.s=t.s,Il(this,t.i),_l(this,t.m),this.l=t.l,e=t.h;var n=new ao;n.i=e.i,e.g&&(n.g=new zi(e.g),n.h=e.h),Vg(this,n),this.o=t.o}else t&&(n=String(t).match(iE))?(this.g=!!e,Tl(this,n[1]||"",!0),this.s=As(n[2]||""),Il(this,n[3]||"",!0),_l(this,n[4]),this.l=As(n[5]||"",!0),Vg(this,n[6]||"",!0),this.o=As(n[7]||"")):(this.g=!!e,this.h=new ao(null,this.g))}Mr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gs(e,Bg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(gs(e,Bg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(gs(n,n.charAt(0)=="/"?TA:SA,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gs(n,_A)),t.join("")};function vn(t){return new Mr(t)}function Tl(t,e,n){t.j=n?As(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Il(t,e,n){t.i=n?As(e,!0):e}function _l(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vg(t,e,n){e instanceof ao?(t.h=e,CA(t.h,t.g)):(n||(e=gs(e,IA)),t.h=new ao(e,t.g))}function ue(t,e,n){t.h.set(e,n)}function mu(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yA(t){return t instanceof Mr?vn(t):new Mr(t,void 0)}function wA(t,e,n,r){var i=new Mr(null,void 0);return t&&Tl(i,t),e&&Il(i,e),n&&_l(i,n),r&&(i.l=r),i}function As(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,EA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function EA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bg=/[#\/\?@]/g,SA=/[#\?:]/g,TA=/[#\?]/g,IA=/[#\?@]/g,_A=/#/g;function ao(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function or(t){t.g||(t.g=new zi,t.h=0,t.i&&vA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ao.prototype;O.add=function(t,e){or(this),this.i=null,t=Hi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sE(t,e){or(t),e=Hi(t,e),$r(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,$r(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ip(t)))}function oE(t,e){return or(t),e=Hi(t,e),$r(t.g.h,e)}O.forEach=function(t,e){or(this),this.g.forEach(function(n,r){O1(n,function(i){t.call(e,i,r,this)},this)},this)};O.T=function(){or(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};O.R=function(t){or(this);var e=[];if(typeof t=="string")oE(this,t)&&(e=Dg(e,this.g.get(Hi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Dg(e,t[n])}return e};O.set=function(t,e){return or(this),this.i=null,t=Hi(this,t),oE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function aE(t,e,n){sE(t,e),0<n.length&&(t.i=null,t.g.set(Hi(t,e),zf(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Hi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CA(t,e){e&&!t.j&&(or(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sE(this,r),aE(this,i,n))},t)),t.j=e}var kA=class{constructor(t,e){this.h=t,this.g=e}};function lE(t){this.l=t||xA,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ea&&B.g.Ea()&&B.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xA=10;function uE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cE(t){return t.h?1:t.g?t.g.size:0}function Jh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function sp(t,e){t.g?t.g.add(e):t.h=e}function hE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lE.prototype.cancel=function(){if(this.i=dE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zf(t.i)}function op(){}op.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};op.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function NA(){this.g=new op}function RA(t,e,n){const r=n||"";try{rp(t,function(i,s){let o=i;ko(i)&&(o=Xf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function AA(t,e){const n=new cu;if(B.Image){const r=new Image;r.onload=pa(ga,n,r,"TestLoadImage: loaded",!0,e),r.onerror=pa(ga,n,r,"TestLoadImage: error",!1,e),r.onabort=pa(ga,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=pa(ga,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ga(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Oo(t){this.l=t.$b||null,this.j=t.ib||!1}je(Oo,ep);Oo.prototype.g=function(){return new gu(this.l,this.j)};Oo.prototype.i=function(t){return function(){return t}}({});function gu(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ap,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(gu,Oe);var ap=0;O=gu.prototype;O.open=function(t,e){if(this.readyState!=ap)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,lo(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Po(this)),this.readyState=ap};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,lo(this)),this.g&&(this.readyState=3,lo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof B.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fE(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function fE(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Po(this):lo(this),this.readyState==3&&fE(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Po(this))};O.Ta=function(t){this.g&&(this.response=t,Po(this))};O.ha=function(){this.g&&Po(this)};function Po(t){t.readyState=4,t.l=null,t.j=null,t.A=null,lo(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function lo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DA=B.JSON.parse;function _e(t){Oe.call(this),this.headers=new zi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pE,this.K=this.L=!1}je(_e,Oe);var pE="",OA=/^https?$/i,PA=["POST","PUT"];O=_e.prototype;O.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gh.g(),this.C=this.u?Ug(this.u):Ug(Gh),this.g.onreadystatechange=Fe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){jg(this,s);return}t=n||"";const i=new zi(this.headers);r&&rp(r,function(s,o){i.set(o,s)}),r=HR(i.T()),n=B.FormData&&t instanceof B.FormData,!(0<=D1(PA,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vE(this),0<this.B&&((this.K=LA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.pa,this)):this.A=Zf(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){jg(this,s)}};function LA(t){return Oi&&QR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function $A(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof jf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function jg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mE(t),vu(t)}function mE(t){t.D||(t.D=!0,Ue(t,"complete"),Ue(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),vu(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vu(this,!0)),_e.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?gE(this):this.cb())};O.cb=function(){gE(this)};function gE(t){if(t.h&&typeof jf!="undefined"&&(!t.C[1]||sn(t)!=4||t.ba()!=2)){if(t.v&&sn(t)==4)Zf(t.Fa,0,t);else if(Ue(t,"readystatechange"),sn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(iE)[1]||null;if(!i&&B.self&&B.self.location){var s=B.self.location.protocol;i=s.substr(0,s.length-1)}r=!OA.test(i?i.toLowerCase():"")}n=r}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var o=2<sn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",mE(t)}}finally{vu(t)}}}}function vu(t,e){if(t.g){vE(t);const n=t.g,r=t.C[0]?yl:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=r}catch{}}}function vE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function sn(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DA(e)}};function zg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function MA(t){let e="";return Hf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=MA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function as(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yE(t){this.za=0,this.l=[],this.h=new cu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=as("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=as("baseRetryDelayMs",5e3,t),this.$a=as("retryDelaySeedMs",1e4,t),this.Ya=as("forwardChannelMaxRetries",2,t),this.ra=as("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new lE(t&&t.concurrentRequestLimit),this.Ca=new NA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=yE.prototype;O.ma=8;O.G=1;function up(t){if(wE(t),t.G==3){var e=t.V++,n=vn(t.F);ue(n,"SID",t.J),ue(n,"RID",e),ue(n,"TYPE","terminate"),Lo(t,n),e=new Ao(t,t.h,e,void 0),e.K=2,e.v=mu(vn(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=xE(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Do(e)}CE(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function yu(t){t.g&&(hp(t),t.g.cancel(),t.g=null)}function wE(t){yu(t),t.u&&(B.clearTimeout(t.u),t.u=null),Cl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Rc(t,e){t.l.push(new kA(t.Za++,e)),t.G==3&&wu(t)}function wu(t){uE(t.i)||t.m||(t.m=!0,Yf(t.Ha,t),t.C=0)}function bA(t,e){return cE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=No(Fe(t.Ha,t,e),_E(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ao(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=P1(s),L1(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=EE(this,i,e),n=vn(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Lo(this,n),this.o&&s&&lp(n,this.o,s),sp(this.i,i),this.Ra&&ue(n,"TYPE","init"),this.ja?(ue(n,"$req",e),ue(n,"SID","null"),i.$=!0,Xh(i,n,null)):Xh(i,n,e),this.G=2}}else this.G==3&&(t?Hg(this,t):this.l.length==0||uE(this.i)||Hg(this))};function Hg(t,e){var n;e?n=e.m:n=t.V++;const r=vn(t.F);ue(r,"SID",t.J),ue(r,"RID",n),ue(r,"AID",t.U),Lo(t,r),t.o&&t.s&&lp(r,t.o,t.s),n=new Ao(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=EE(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),sp(t.i,n),Xh(n,r,e)}function Lo(t,e){t.j&&rp({},function(n,r){ue(e,r,n)})}function EE(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Fe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{RA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function SE(t){t.g||t.u||(t.Y=1,Yf(t.Ga,t),t.A=0)}function cp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=No(Fe(t.Ga,t),_E(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,TE(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=No(Fe(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Je(10),yu(this),TE(this))};function hp(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function TE(t){t.g=new Ao(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=vn(t.oa);ue(e,"RID","rpc"),ue(e,"SID",t.J),ue(e,"CI",t.N?"0":"1"),ue(e,"AID",t.U),Lo(t,e),ue(e,"TYPE","xmlhttp"),t.o&&t.s&&lp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=mu(vn(e)),n.s=null,n.U=!0,eE(n,t)}O.ab=function(){this.v!=null&&(this.v=null,yu(this),cp(this),Je(19))};function Cl(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function IE(t,e){var n=null;if(t.g==e){Cl(t),hp(t),t.g=null;var r=2}else if(Jh(t.i,e))n=e.D,hE(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=hu(),Ue(r,new X1(r,n)),wu(t)}else SE(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&bA(t,e)||r==2&&cp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:vr(t,5);break;case 4:vr(t,10);break;case 3:vr(t,6);break;default:vr(t,2)}}}function _E(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function vr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Fe(t.jb,t);n||(n=new Mr("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Tl(n,"https"),mu(n)),AA(n.toString(),r)}else Je(2);t.G=0,t.j&&t.j.va(e),CE(t),wE(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Je(2)):(this.h.info("Failed to ping google.com"),Je(1))};function CE(t){t.G=0,t.I=-1,t.j&&((dE(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,zf(t.l),t.l.length=0),t.j.ua())}function kE(t,e,n){let r=yA(n);if(r.i!="")e&&Il(r,e+"."+r.i),_l(r,r.m);else{const i=B.location;r=wA(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Hf(t.aa,function(i,s){ue(r,s,i)}),e=t.D,n=t.sa,e&&n&&ue(r,e,n),ue(r,"VER",t.ma),Lo(t,r),r}function xE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new _e(new Oo({ib:!0})):new _e(t.qa),e.L=t.H,e}function NE(){}O=NE.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function kl(){if(Oi&&!(10<=Number(XR)))throw Error("Environmental error: no available transport.")}kl.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){Oe.call(this),this.g=new yE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!wl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ki(this)}je(vt,Oe);vt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Yf(Fe(t.hb,t,e))),Je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=kE(t,null,t.W),wu(t)};vt.prototype.close=function(){up(this.g)};vt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Rc(this.g,e)}else this.v?(e={},e.__data__=Xf(t),Rc(this.g,e)):Rc(this.g,t)};vt.prototype.M=function(){this.g.j=null,delete this.j,up(this.g),delete this.g,vt.Z.M.call(this)};function RE(t){tp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(RE,tp);function AE(){np.call(this),this.status=1}je(AE,np);function Ki(t){this.g=t}je(Ki,NE);Ki.prototype.xa=function(){Ue(this.g,"a")};Ki.prototype.wa=function(t){Ue(this.g,new RE(t))};Ki.prototype.va=function(t){Ue(this.g,new AE)};Ki.prototype.ua=function(){Ue(this.g,"b")};kl.prototype.createWebChannel=kl.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;du.NO_ERROR=0;du.TIMEOUT=8;du.HTTP_ERROR=6;Y1.COMPLETE="complete";J1.EventType=Ro;Ro.OPEN="a";Ro.CLOSE="b";Ro.ERROR="c";Ro.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.La;_e.prototype.getLastErrorCode=_e.prototype.Da;_e.prototype.getStatus=_e.prototype.ba;_e.prototype.getResponseJson=_e.prototype.Qa;_e.prototype.getResponseText=_e.prototype.ga;_e.prototype.send=_e.prototype.ea;var FA=function(){return new kl},UA=function(){return hu()},Ac=du,VA=Y1,BA=Wr,Kg={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},jA=Oo,va=J1,zA=_e;const Wg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi="9.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new iu("@firebase/firestore");function qg(){return br.logLevel}function $(t,...e){if(br.logLevel<=J.DEBUG){const n=e.map(dp);br.debug(`Firestore (${Wi}): ${t}`,...n)}}function Yn(t,...e){if(br.logLevel<=J.ERROR){const n=e.map(dp);br.error(`Firestore (${Wi}): ${t}`,...n)}}function Gg(t,...e){if(br.logLevel<=J.WARN){const n=e.map(dp);br.warn(`Firestore (${Wi}): ${t}`,...n)}}function dp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function Ie(t,e){t||z()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class WA{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new HA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new nt(e)}}class qA{constructor(e,n,r){this.type="FirstParty",this.user=nt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class GA{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new qA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.p=n.token,new QA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=YA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new ct(0,0))}static max(){return new H(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return uo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof uo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends uo{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const ZA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends uo{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return ZA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(ge.fromString(e))}static fromName(e){return new b(ge.fromString(e).popFirst(5))}static empty(){return new b(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new ge(e.slice()))}}function eD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Jn(i,b.empty(),e)}function tD(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(H.min(),b.empty(),-1)}static max(){return new Jn(H.max(),b.empty(),-1)}}function nD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==rD)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $o(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Eu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pp.ot=-1;class Pe{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:$e.RED,this.left=i!=null?i:$e.EMPTY,this.right=s!=null?s:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xg(this.data.getIterator())}getIteratorFrom(e){return new Xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xe(this.comparator);return n.data=e,n}}class Xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Ir([])}unionWith(e){let n=new xe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ir(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const oD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=oD.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Li(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function OE(t){const e=t.mapValue.fields.__previous_value__;return DE(e)?OE(e):e}function co(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class $i{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){return t==null}function Zh(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?DE(t)?4:lD(t)?9007199254740991:10:z()}function Xt(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Zn(r.timestampValue),o=Zn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Li(r.bytesValue).isEqual(Li(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Se(r.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(r.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Se(r.integerValue)===Se(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Se(r.doubleValue),o=Se(i.doubleValue);return s===o?Zh(s)===Zh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Qg(s)!==Qg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Xt(s[a],o[a])))return!1;return!0}(t,e);default:return z()}}function ho(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Se(i.integerValue||i.doubleValue),a=Se(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yg(t.timestampValue,e.timestampValue);case 4:return Yg(co(t),co(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Li(i),a=Li(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Z(o[l],a[l]);if(u!==0)return u}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(Se(i.latitude),Se(s.latitude));return o!==0?o:Z(Se(i.longitude),Se(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Mi(o[l],a[l]);if(u)return u}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===wa.mapValue&&s===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(s===wa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Z(a[c],u[c]);if(h!==0)return h;const d=Mi(o[a[c]],l[u[c]]);if(d!==0)return d}return Z(a.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function Yg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Zn(t),r=Zn(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function wi(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Zn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Li(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,b.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ed(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ed(r.fields[a])}`;return s+"}"}(t.mapValue):z();var e,n}function td(t){return!!t&&"integerValue"in t}function mp(t){return!!t&&"arrayValue"in t}function Jg(t){return!!t&&"nullValue"in t}function Zg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dc(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Eu(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ds(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Dc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Dc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Eu(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(Ds(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Me(e,0,H.min(),H.min(),zt.empty(),0)}static newFoundDocument(e,n,r){return new Me(e,1,n,H.min(),r,0)}static newNoDocument(e,n){return new Me(e,2,n,H.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,H.min(),zt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function ev(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uD(t,e,n,r,i,s,o)}function gp(t){const e=X(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+wi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.ut=n}return e.ut}function cD(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${wi(r.value)}`;var r}).join(", ")}]`),Su(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>wi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>wi(n)).join(",")),`Target(${e})`}function vp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!yD(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Xt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nv(t.startAt,e.startAt)&&nv(t.endAt,e.endAt)}function nd(t){return b.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ot extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new hD(e,n,r):n==="array-contains"?new pD(e,r):n==="in"?new mD(e,r):n==="not-in"?new gD(e,r):n==="array-contains-any"?new vD(e,r):new ot(e,n,r)}static ct(e,n,r){return n==="in"?new dD(e,r):new fD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Mi(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.at(Mi(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hD extends ot{constructor(e,n,r){super(e,n,r),this.key=b.fromName(r.referenceValue)}matches(e){const n=b.comparator(e.key,this.key);return this.at(n)}}class dD extends ot{constructor(e,n){super(e,"in",n),this.keys=PE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fD extends ot{constructor(e,n){super(e,"not-in",n),this.keys=PE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}class pD extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mp(n)&&ho(n.arrayValue,this.value)}}class mD extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class gD extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class vD extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}class xl{constructor(e,n){this.position=e,this.inclusive=n}}class Os{constructor(e,n="asc"){this.field=e,this.dir=n}}function yD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function tv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=Mi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function wD(t,e,n,r,i,s,o,a){return new Tu(t,e,n,r,i,s,o,a)}function LE(t){return new Tu(t)}function ED(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function SD(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function TD(t){for(const e of t.filters)if(e.ht())return e.field;return null}function ID(t){return t.collectionGroup!==null}function fo(t){const e=X(t);if(e.lt===null){e.lt=[];const n=TD(e),r=SD(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Os(n)),e.lt.push(new Os(it.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Os(it.keyField(),s))}}}return e.lt}function Ur(t){const e=X(t);if(!e.ft)if(e.limitType==="F")e.ft=ev(e.path,e.collectionGroup,fo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of fo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Os(s.field,o))}const r=e.endAt?new xl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xl(e.startAt.position,e.startAt.inclusive):null;e.ft=ev(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function _D(t,e,n){return new Tu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Iu(t,e){return vp(Ur(t),Ur(e))&&t.limitType===e.limitType}function $E(t){return`${gp(Ur(t))}|lt:${t.limitType}`}function rd(t){return`Query(target=${cD(Ur(t))}; limitType=${t.limitType})`}function yp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):b.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=tv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,fo(n),r)||n.endAt&&!function(i,s,o){const a=tv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,fo(n),r))}(t,e)}function CD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ME(t){return(e,n)=>{let r=!1;for(const i of fo(t)){const s=kD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kD(t,e,n){const r=t.field.isKeyField()?b.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Mi(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zh(e)?"-0":e}}function ND(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this._=void 0}}function RD(t,e,n){return t instanceof id?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Nl?bE(t,e):t instanceof Rl?FE(t,e):function(r,i){const s=DD(r,i),o=rv(s)+rv(r._t);return td(s)&&td(r._t)?ND(o):xD(r.wt,o)}(t,e)}function AD(t,e,n){return t instanceof Nl?bE(t,e):t instanceof Rl?FE(t,e):n}function DD(t,e){return t instanceof sd?td(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class id extends _u{}class Nl extends _u{constructor(e){super(),this.elements=e}}function bE(t,e){const n=UE(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Rl extends _u{constructor(e){super(),this.elements=e}}function FE(t,e){let n=UE(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class sd extends _u{constructor(e,n){super(),this.wt=e,this._t=n}}function rv(t){return Se(t.integerValue||t.doubleValue)}function UE(t){return mp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Nl&&r instanceof Nl||n instanceof Rl&&r instanceof Rl?Pi(n.elements,r.elements,Xt):n instanceof sd&&r instanceof sd?Xt(n._t,r._t):n instanceof id&&r instanceof id}(t.transform,e.transform)}class _r{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _r}static exists(e){return new _r(void 0,e)}static updateTime(e){return new _r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wp{}function VE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new LD(t.key,_r.none()):new Ep(t.key,t.data,_r.none());{const n=t.data,r=zt.empty();let i=new xe(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cu(t.key,r,new Ir(i.toArray()),_r.none())}}function PD(t,e,n){t instanceof Ep?function(r,i,s){const o=r.value.clone(),a=sv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Cu?function(r,i,s){if(!$a(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(BE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ps(t,e,n,r){return t instanceof Ep?function(i,s,o,a){if(!$a(i.precondition,s))return o;const l=i.value.clone(),u=ov(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cu?function(i,s,o,a){if(!$a(i.precondition,s))return o;const l=ov(i.fieldTransforms,a,s),u=s.data;return u.setAll(BE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return $a(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function iv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Pi(n,r,(i,s)=>OD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ep extends wp{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cu extends wp{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function BE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sv(t,e,n){const r=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,AD(o,a,n[i]))}return r}function ov(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RD(s,o,e))}return r}class LD extends wp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,q;function jE(t){if(t===void 0)return Yn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ee.OK:return A.OK;case Ee.CANCELLED:return A.CANCELLED;case Ee.UNKNOWN:return A.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return A.INTERNAL;case Ee.UNAVAILABLE:return A.UNAVAILABLE;case Ee.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ee.NOT_FOUND:return A.NOT_FOUND;case Ee.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ee.ABORTED:return A.ABORTED;case Ee.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ee.DATA_LOSS:return A.DATA_LOSS;default:return z()}}(q=Ee||(Ee={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Eu(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return sD(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=new Pe(b.comparator);function er(){return MD}const zE=new Pe(b.comparator);function vs(...t){let e=zE;for(const n of t)e=e.insert(n.key,n);return e}function bD(t){let e=zE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yr(){return Ls()}function HE(){return Ls()}function Ls(){return new qi(t=>t.toString(),(t,e)=>t.isEqual(e))}new Pe(b.comparator);const FD=new xe(b.comparator);function Q(...t){let e=FD;for(const n of t)e=e.add(n);return e}const UD=new xe(Z);function KE(){return UD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Mo.createSynthesizedTargetChangeForCurrentChange(e,n)),new ku(H.min(),r,KE(),er(),Q())}}class Mo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Mo(Be.EMPTY_BYTE_STRING,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class WE{constructor(e,n){this.targetId=e,this.It=n}}class qE{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class av{constructor(){this.Tt=0,this.Et=uv(),this.At=Be.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Q(),n=Q(),r=Q();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Mo(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=uv()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class VD{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=er(),this.Bt=lv(),this.Lt=new xe(Z)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(nd(s))if(r===0){const o=new b(s.path);this.Kt(n,o,Me.newNoDocument(o,H.min()))}else Ie(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&nd(a.target)){const l=new b(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,Me.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=Q();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ht(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new ku(e,n,this.Lt,this.$t,r);return this.$t=er(),this.Bt=lv(),this.Lt=new xe(Z),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new av,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new xe(Z),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new av),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function lv(){return new Pe(b.comparator)}function uv(){return new Pe(b.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class zD{constructor(e,n){this.databaseId=e,this.dt=n}}function HD(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KD(t,e){return t.dt?e.toBase64():e.toUint8Array()}function po(t){return Ie(!!t),H.fromTimestamp(function(e){const n=Zn(e);return new ct(n.seconds,n.nanos)}(t))}function WD(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function GE(t){const e=ge.fromString(t);return Ie(YE(e)),e}function Oc(t,e){const n=GE(e);if(n.get(1)!==t.databaseId.projectId)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new b(QE(n))}function od(t,e){return WD(t.databaseId,e)}function qD(t){const e=GE(t);return e.length===4?ge.emptyPath():QE(e)}function cv(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QE(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function GD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.dt?(Ie(u===void 0||typeof u=="string"),Be.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),Be.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:jE(l.code);return new U(u,l.message||"")}(o);n=new qE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oc(t,r.document.name),s=po(r.document.updateTime),o=new zt({mapValue:{fields:r.document.fields}}),a=Me.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ma(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oc(t,r.document),s=r.readTime?po(r.readTime):H.min(),o=Me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ma([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oc(t,r.document),s=r.removedTargetIds||[];n=new Ma([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new $D(i),o=r.targetId;n=new WE(o,s)}}return n}function QD(t,e){return{documents:[od(t,e.path)]}}function XD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=od(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=od(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Zg(h.value))return{unaryFilter:{field:Yr(h.field),op:"IS_NAN"}};if(Jg(h.value))return{unaryFilter:{field:Yr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Zg(h.value))return{unaryFilter:{field:Yr(h.field),op:"IS_NOT_NAN"}};if(Jg(h.value))return{unaryFilter:{field:Yr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(h.field),op:eO(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Yr(c.field),direction:ZD(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.dt||Su(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function YD(t){let e=qD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=XE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Os(hi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Su(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new xl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new xl(d,h)}(n.endAt)),wD(e,i,o,s,a,"F",l,u)}function JD(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function XE(t){return t?t.unaryFilter!==void 0?[nO(t)]:t.fieldFilter!==void 0?[tO(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>XE(e)).reduce((e,n)=>e.concat(n)):z():[]}function ZD(t){return BD[t]}function eO(t){return jD[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function hi(t){return it.fromServerFormat(t.fieldPath)}function tO(t){return ot.create(hi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function nO(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hi(t.unaryFilter.field);return ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hi(t.unaryFilter.field);return ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hi(t.unaryFilter.field);return ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=hi(t.unaryFilter.field);return ot.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function YE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&PD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=VE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,r)=>iv(n,r))&&Pi(this.baseMutations,e.baseMutations,(n,r)=>iv(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r,i,s=H.min(),o=H.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.ne=e}}function oO(t){const e=YD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_D(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(){this.ze=new lO}addToCollectionParentIndex(e,n){return this.ze.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Jn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class lO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new xe(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xe(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new bi(0)}static Rn(){return new bi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(){this.changes=new qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Ps(r.mutation,i,Ir.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=vs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=er();const o=Ls(),a=Ls();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Cu)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ps(c.mutation,u,c.mutation.getFieldMask(),ct.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new cO(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ls();let i=new Pe((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ir.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=HE();c.forEach(d=>{if(!s.has(d)){const m=VE(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return b.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ID(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(yr());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:bD(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new b(n)).next(r=>{let i=vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=vs();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new Tu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Me.newInvalidDocument(u)))});let o=vs();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Ps(u.mutation,l,Ir.empty(),ct.now()),yp(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):x.resolve(Me.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return x.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:po(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:oO(r.bundledQuery),readTime:po(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(){this.overlays=new Pe(b.comparator),this.Xn=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=yr(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=yr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iO(n,r));let s=this.Xn.get(n);s===void 0&&(s=Q(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.Zn=new xe(Ne.ts),this.es=new xe(Ne.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Ne(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new b(new ge([])),r=new Ne(n,e),i=new Ne(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new b(new ge([])),r=new Ne(n,e),i=new Ne(n,e+1);let s=Q();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ne(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return b.comparator(e.key,n.key)||Z(e.ls,n.ls)}static ns(e,n){return Z(e.ls,n.ls)||b.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new xe(Ne.ts)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Ne(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xe(Z);return n.forEach(i=>{const s=new Ne(i,0),o=new Ne(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),x.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;b.isDocumentKey(s)||(s=s.child(""));const o=new Ne(new b(s),0);let a=new xe(Z);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ls)),!0)},o),x.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return x.forEach(n.mutations,i=>{const s=new Ne(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Ne(n,0),i=this.ds.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.ps=e,this.docs=new Pe(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),x.resolve(r)}getAllFromCollection(e,n,r){let i=er();const s=new b(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||nD(tD(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,i){z()}Is(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gO(this)}getSize(e){return x.resolve(this.size)}}class gO extends uO{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.persistence=e,this.Ts=new qi(n=>gp(n),vp),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Es=0,this.As=new Sp,this.targetCount=0,this.Rs=bi.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),x.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.vn(n),x.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n){this.bs={},this.overlays={},this.Ps=new pp(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new vO(this),this.indexManager=new aO,this.remoteDocumentCache=function(r){return new mO(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new sO(n),this.Ds=new dO(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new pO(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new wO(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return x.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class wO extends iD{constructor(e){super(),this.currentSequenceNumber=e}}class Tp{constructor(e){this.persistence=e,this.ks=new Sp,this.Os=null}static Ms(e){return new Tp(e)}get Fs(){if(this.Os)return this.Os;throw z()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),x.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Fs,r=>{const i=b.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return x.or([()=>x.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ip(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){return x.resolve(null)}xi(e,n,r,i){return ED(n)||i.isEqual(H.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Oi(n,o,r,i)?this.Ni(e,n):(qg()<=J.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rd(n)),this.Mi(e,o,n,eD(i,-1)))})}ki(e,n){let r=new xe(ME(e));return n.forEach((i,s)=>{yp(e,s)&&(r=r.add(s))}),r}Oi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return qg()<=J.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",rd(n)),this.Di.getDocumentsMatchingQuery(e,n,Jn.min())}Mi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Pe(Z),this.Bi=new qi(s=>gp(s),vp),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hO(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function TO(t,e,n,r){return new SO(t,e,n,r)}async function JE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function ZE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function IO(t,e){const n=X(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Be.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,E,I){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,m,c)&&a.push(n.Vs.updateTargetData(s,m))});let l=er(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(_O(s,o,e.documentUpdates).next(c=>{l=c.Gi,u=c.Qi})),!r.isEqual(H.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.$i=i,s))}function _O(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=er();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function CO(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Cr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function ad(t,e,n){const r=X(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$o(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function hv(t,e,n){const r=X(t);let i=H.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=X(a),h=c.Bi.get(u);return h!==void 0?x.resolve(c.$i.get(h)):c.Vs.getTargetData(l,u)}(r,o,Ur(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?s:Q())).next(a=>(kO(r,CD(e),a),{documents:a,ji:s})))}function kO(t,e,n){let r=H.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class dv{constructor(){this.activeTargetIds=KE()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xO{constructor(){this.Fr=new dv,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new dv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);$("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>($("RestConnection","Received: ",l),l),l=>{throw Gg("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=RO[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new zA;a.listenOnce(VA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ac.NO_ERROR:const u=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Ac.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new U(A.DEADLINE_EXCEEDED,"Request time out"));break;case Ac.HTTP_ERROR:const c=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(v)>=0?v:A.UNKNOWN}(h.status);o(new U(d,h.message))}else o(new U(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(A.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=FA(),o=UA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new jA({})),this.uo(a.initMessageHeaders,n,r),Yw()||Jw()||ex()||Zw()||tx()||Lf()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");$("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new AO({jr:v=>{h?$("Connection","Not sending because WebChannel is closed:",v):(c||($("Connection","Opening WebChannel transport."),u.open(),c=!0),$("Connection","WebChannel sending:",v),u.send(v))},Wr:()=>u.close()}),m=(v,E,I)=>{v.listen(E,p=>{try{I(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,va.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),m(u,va.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),d.eo())}),m(u,va.EventType.ERROR,v=>{h||(h=!0,Gg("Connection","WebChannel transport errored:",v),d.eo(new U(A.UNAVAILABLE,"The operation could not be completed")))}),m(u,va.EventType.MESSAGE,v=>{var E;if(!h){const I=v.data[0];Ie(!!I);const p=I,f=p.error||((E=p[0])===null||E===void 0?void 0:E.error);if(f){$("Connection","WebChannel received error:",f);const g=f.status;let S=function(_){const N=Ee[_];if(N!==void 0)return jE(N)}(g),k=f.message;S===void 0&&(S=A.INTERNAL,k="Unknown error status: "+g+" with message "+f.message),h=!0,d.eo(new U(S,k)),u.close()}else $("Connection","WebChannel received:",I),d.no(I)}}),m(o,BA.STAT_EVENT,v=>{v.stat===Kg.PROXY?$("Connection","Detected buffering proxy"):v.stat===Kg.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Pc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t){return new zD(t,!0)}class tS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new tS(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new U(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PO extends OO{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=GD(this.wt,e),r=function(i){if(!("targetChange"in i))return H.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?H.min():s.readTime?po(s.readTime):H.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=cv(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=nd(a)?{documents:QD(i,a)}:{query:XD(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=KD(i,s.resumeToken):s.snapshotVersion.compareTo(H.min())>0&&(o.readTime=HD(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=JD(this.wt,e);r&&(n.labels=r),this.Mo(n)}jo(e){const n={};n.database=cv(this.wt),n.removeTarget=e,this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(A.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(A.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class $O{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Yn(n),this.su=!1):$("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Fo(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l.lu.add(4),await bo(l),l._u.set("Unknown"),l.lu.delete(4),await xu(l)}(this))})}),this._u=new $O(r,i)}}async function xu(t){if(Fo(t))for(const e of t.fu)await e(!0)}async function bo(t){for(const e of t.fu)await e(!1)}function nS(t,e){const n=X(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),kp(n)?Cp(n):Gi(n).Co()&&_p(n,e))}function rS(t,e){const n=X(t),r=Gi(n);n.hu.delete(e),r.Co()&&iS(n,e),n.hu.size===0&&(r.Co()?r.ko():Fo(n)&&n._u.set("Unknown"))}function _p(t,e){t.wu.Nt(e.targetId),Gi(t).Qo(e)}function iS(t,e){t.wu.Nt(e),Gi(t).jo(e)}function Cp(t){t.wu=new VD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Gi(t).start(),t._u.iu()}function kp(t){return Fo(t)&&!Gi(t).Do()&&t.hu.size>0}function Fo(t){return X(t).lu.size===0}function sS(t){t.wu=void 0}async function bO(t){t.hu.forEach((e,n)=>{_p(t,e)})}async function FO(t,e){sS(t),kp(t)?(t._u.uu(e),Cp(t)):t._u.set("Unknown")}async function UO(t,e,n){if(t._u.set("Online"),e instanceof qE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pv(t,r)}else if(e instanceof Ma?t.wu.Ut(e):e instanceof WE?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(H.min()))try{const r=await ZE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(l);u&&i.hu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(Be.EMPTY_BYTE_STRING,l.snapshotVersion)),iS(i,a);const u=new Cr(l.target,a,1,l.sequenceNumber);_p(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await pv(t,r)}}async function pv(t,e,n){if(!$o(e))throw e;t.lu.add(1),await bo(t),t._u.set("Offline"),n||(n=()=>ZE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await xu(t)})}async function mv(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Fo(n);n.lu.add(3),await bo(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await xu(n)}async function VO(t,e){const n=X(t);e?(n.lu.delete(2),await xu(n)):e||(n.lu.add(2),await bo(n),n._u.set("Unknown"))}function Gi(t){return t.mu||(t.mu=function(e,n,r){const i=X(e);return i.tu(),new PO(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:bO.bind(null,t),Jr:FO.bind(null,t),Go:UO.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),kp(t)?Cp(t):t._u.set("Unknown")):(await t.mu.stop(),sS(t))})),t.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new xp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oS(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),$o(t))return new U(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||b.comparator(n.key,r.key):(n,r)=>b.comparator(n.key,r.key),this.keyedMap=vs(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.yu=new Pe(b.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):z():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Fi(e,n,Ei.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.Iu=void 0,this.listeners=[]}}class jO{constructor(){this.queries=new qi(e=>$E(e),Iu),this.onlineState="Unknown",this.Tu=new Set}}async function zO(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new BO),i)try{s.Iu=await n.onListen(r)}catch(o){const a=oS(o,`Initialization of query '${rd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Np(n)}async function HO(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KO(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Np(n)}function WO(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Np(t){t.Tu.forEach(e=>{e.next()})}class qO{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.key=e}}class lS{constructor(e){this.key=e}}class GO{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Q(),this.mutatedKeys=Q(),this.Lu=ME(e),this.Uu=new Ei(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new gv,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=yp(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;d&&m?d.data.isEqual(m.data)?v!==E&&(r.track({type:3,doc:m}),I=!0):this.Qu(d,m)||(r.track({type:2,doc:m}),I=!0,(l&&this.Lu(m,l)>0||u&&this.Lu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),I=!0):d&&!m&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(m?(o=o.add(m),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Oi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(h,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return m(h)-m(d)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new Fi(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new gv,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Q(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new lS(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new aS(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=Q();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Fi.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class QO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XO{constructor(e){this.key=e,this.Xu=!1}}class YO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new qi(a=>$E(a),Iu),this.ec=new Map,this.nc=new Set,this.sc=new Pe(b.comparator),this.ic=new Map,this.rc=new Sp,this.oc={},this.uc=new Map,this.cc=bi.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function JO(t,e){const n=sP(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await CO(n.localStore,Ur(e));n.isPrimaryClient&&nS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ZO(n,e,r,a==="current")}return i}async function ZO(t,e,n,r){t.hc=(c,h,d)=>async function(m,v,E,I){let p=v.view.Ku(E);p.Oi&&(p=await hv(m.localStore,v.query,!1).then(({documents:S})=>v.view.Ku(S,p)));const f=I&&I.targetChanges.get(v.targetId),g=v.view.applyChanges(p,m.isPrimaryClient,f);return yv(m,v.targetId,g.zu),g.snapshot}(t,c,h,d);const i=await hv(t.localStore,e,!0),s=new GO(e,i.ji),o=s.Ku(i.documents),a=Mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);yv(t,n,l.zu);const u=new QO(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function eP(t,e){const n=X(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!Iu(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ad(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rS(n.remoteStore,r.targetId),ld(n,r.targetId)}).catch(fp)):(ld(n,r.targetId),await ad(n.localStore,r.targetId,!0))}async function uS(t,e){const n=X(t);try{const r=await IO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?Ie(o.Xu):i.removedDocuments.size>0&&(Ie(o.Xu),o.Xu=!1))}),await hS(n,r,e)}catch(r){await fp(r)}}function vv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Eu(o)&&(l=!0)}),l&&Np(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Pe(b.comparator);o=o.insert(s,Me.newNoDocument(s,H.min()));const a=Q().add(s),l=new ku(H.min(),new Map,new xe(Z),o,a);await uS(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),Rp(r)}else await ad(r.localStore,e,!1).then(()=>ld(r,e,n)).catch(fp)}function ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||cS(t,r)})}function cS(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(rS(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Rp(t))}function yv(t,e,n){for(const r of n)r instanceof aS?(t.rc.addReference(r.key,e),nP(t,r)):r instanceof lS?($("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||cS(t,r.key)):z()}function nP(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||($("SyncEngine","New document in limbo: "+n),t.nc.add(r),Rp(t))}function Rp(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new b(ge.fromString(e)),r=t.cc.next();t.ic.set(r,new XO(n)),t.sc=t.sc.insert(n,r),nS(t.remoteStore,new Cr(Ur(LE(n.path)),r,2,pp.ot))}}async function hS(t,e,n){const r=X(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Ip.Vi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!$o(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.$i.get(h),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);u.$i=u.$i.insert(h,v)}}}(r.localStore,s))}async function rP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await JE(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new U(A.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hS(n,r.Ki)}}function iP(t,e){const n=X(t),r=n.ic.get(e);if(r&&r.Xu)return Q().add(r.key);{let i=Q();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function sP(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tP.bind(null,e),e.Zu.Go=KO.bind(null,e.eventManager),e.Zu.lc=WO.bind(null,e.eventManager),e}class oP{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=eS(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return TO(this.persistence,new EO,e.initialUser,this.wt)}_c(e){return new yO(Tp.Ms,this.wt)}dc(e){return new xO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rP.bind(null,this.syncEngine),await VO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jO}createDatastore(e){const n=eS(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new DO(i));var i;return function(s,o,a,l){return new LO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>vv(this.syncEngine,a,0),o=fv.V()?new fv:new NO,new MO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new YO(r,i,s,o,a,l);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);$("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await bo(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=JA.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oS(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cP(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function hP(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dP(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>mv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>mv(e.remoteStore,s)),t.onlineComponents=e}async function dP(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await cP(t,new oP)),t.offlineComponents}async function fP(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await hP(t,new aP)),t.onlineComponents}async function pP(t){const e=await fP(t),n=e.eventManager;return n.onListen=JO.bind(null,e.syncEngine),n.onUnlisten=eP.bind(null,e.syncEngine),n}function mP(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new lP({next:h=>{s.enqueueAndForget(()=>HO(i,c)),h.fromCache&&a.source==="server"?l.reject(new U(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new qO(o,u,{includeMetadataChanges:!0,Du:!0});return zO(i,c)}(await pP(t),t.asyncQueue,e,n,r)),r.promise}const wv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t,e,n){if(!n)throw new U(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vP(t,e,n,r){if(e===!0&&r===!0)throw new U(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ev(t){if(b.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yP(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Sv(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yP(t);throw new U(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,vP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tv({}),this._settingsFrozen=!1,e instanceof $i?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new U(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(i.options.projectId)}(e))}get app(){if(!this._app)throw new U(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KA;switch(n.type){case"gapi":const r=n.client;return Ie(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new GA(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new U(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wv.get(e);n&&($("ComponentProvider","Removing Datastore"),wv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qi(this.firestore,e,this._key)}}class Nu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nu(this.firestore,e,this._query)}}class Si extends Nu{constructor(e,n,r){super(e,n,LE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qi(this.firestore,null,new b(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function Ap(t,e,...n){if(t=Tn(t),gP("collection","path",e),t instanceof dS){const r=ge.fromString(e,...n);return Ev(r),new Si(t,null,r)}{if(!(t instanceof Qi||t instanceof Si))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Ev(r),new Si(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new tS(this,"async_queue_retry"),this.Kc=()=>{const n=Pc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Tr;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!$o(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=xp.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&z()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class fS extends dS{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new wP,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||pS(this),this._firestoreClient.terminate()}}function EP(t=bf()){return Kr(t,"firestore").getImmediate()}function SP(t){return t._firestoreClient||pS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new aD(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new uP(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Al(Be.fromBase64String(e))}catch(n){throw new U(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Al(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}const IP=new RegExp("[~\\*/\\[\\]]");function _P(t,e,n){if(e.search(IP)>=0)throw Iv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mS(...e.split("."))._internalPath}catch{throw Iv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Iv(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(A.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CP extends gS{data(){return super.data()}}function vS(t,e){return typeof e=="string"?_P(t,e):e instanceof mS?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kP extends gS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ba extends kP{data(e={}){return super.data(e)}}class xP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ea(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ba(this._firestore,this._userDataWriter,r.key,r,new Ea(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ba(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ea(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ba(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ea(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:NP(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const r={};return Eu(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new TP(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=OE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(co(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);Ie(YE(r));const i=new $i(r.get(1),r.get(3)),s=new b(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}class DP extends AP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Al(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qi(this.firestore,null,n)}}function Dp(t){t=Sv(t,Nu);const e=Sv(t.firestore,fS),n=SP(e),r=new DP(e);return RP(t._query),mP(n,t._query).then(i=>new xP(e,r,t,i))}(function(t,e=!0){(function(n){Wi=n})(Co),Qt(new Ft("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new fS(i,new WA(n.getProvider("auth-internal")),new XA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),_t(Wg,"3.4.13",t),_t(Wg,"3.4.13","esm2017")})();function Op(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OP=yS,wS=new Hr("auth","Firebase",yS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new iu("@firebase/auth");function Fa(t,...e){_v.logLevel<=J.ERROR&&_v.error(`Auth (${Co}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,...e){throw Pp(t,...e)}function qt(t,...e){return Pp(t,...e)}function PP(t,e,n){const r=Object.assign(Object.assign({},OP()),{[e]:n});return new Hr("auth","Firebase",r).create(e,{appName:t.name})}function Pp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wS.create(t,...e)}function V(t,e,...n){if(!t)throw Pp(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fa(e),new Error(e)}function yn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=new Map;function an(t){yn(t instanceof Function,"Expected a class definition");let e=Cv.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cv.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e){const n=Kr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(no(s,e!=null?e:{}))return i;Ut(i,"already-initialized")}return n.initialize({options:e})}function $P(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MP(){return kv()==="http:"||kv()==="https:"}function kv(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MP()||Lf()||"connection"in navigator)?navigator.onLine:!0}function FP(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=Yw()||Jw()}get(){return bP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=new Uo(3e4,6e4);function Vo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bo(t,e,n,r,i={}){return SS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ES.fetch()(TS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function SS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UP),e);try{const i=new BP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw PP(t,c,u);Ut(t,c)}}catch(i){if(i instanceof Sn)throw i;Ut(t,"network-request-failed")}}async function jo(t,e,n,r,i={}){const s=await Bo(t,e,n,r,i);return"mfaPendingCredential"in s&&Ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function TS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lp(t.config,i):`${t.config.apiScheme}://${i}`}class BP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),VP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e){return Bo(t,"POST","/v1/accounts:delete",e)}async function zP(t,e){return Bo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HP(t,e=!1){const n=Tn(t),r=await n.getIdToken(e),i=$p(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$s(Lc(i.auth_time)),issuedAtTime:$s(Lc(i.iat)),expirationTime:$s(Lc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function $p(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Fa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jk(r);return s?JSON.parse(s):(Fa("Failed to decode base64 JWT payload"),null)}catch(s){return Fa("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function KP(t){const e=$p(t);return V(e,"internal-error"),V(typeof e.exp!="undefined","internal-error"),V(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&WP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mo(t,zP(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?XP(s.providerUserInfo):[],a=QP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new IS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function GP(t){const e=Tn(t);await Dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function XP(t){return t.map(e=>{var{providerId:n}=e,r=Op(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e){const n=await SS(t,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=TS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ES.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken!="undefined","internal-error"),V(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):KP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await YP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new go;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){V(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new IS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HP(this,e)}reload(){return GP(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mo(this,jP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:S,isAnonymous:k,providerData:_,stsTokenManager:N}=n;V(g&&N,e,"internal-error");const T=go.fromJSON(this.name,N);V(typeof g=="string",e,"internal-error"),kn(h,e.name),kn(d,e.name),V(typeof S=="boolean",e,"internal-error"),V(typeof k=="boolean",e,"internal-error"),kn(m,e.name),kn(v,e.name),kn(E,e.name),kn(I,e.name),kn(p,e.name),kn(f,e.name);const P=new kr({uid:g,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:k,photoURL:v,phoneNumber:m,tenantId:E,stsTokenManager:T,createdAt:p,lastLoginAt:f});return _&&Array.isArray(_)&&(P.providerData=_.map(L=>Object.assign({},L))),I&&(P._redirectEventId=I),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new go;i.updateFromServerResponse(n);const s=new kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_S.type="NONE";const xv=_S;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t,e,n){return`firebase:${t}:${e}:${n}`}class Ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ua(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ua("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ti(an(xv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||an(xv);const o=Ua(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=kr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RS(e))return"Blackberry";if(AS(e))return"Webos";if(Mp(e))return"Safari";if((e.includes("chrome/")||kS(e))&&!e.includes("edge/"))return"Chrome";if(NS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CS(t=De()){return/firefox\//i.test(t)}function Mp(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kS(t=De()){return/crios\//i.test(t)}function xS(t=De()){return/iemobile/i.test(t)}function NS(t=De()){return/android/i.test(t)}function RS(t=De()){return/blackberry/i.test(t)}function AS(t=De()){return/webos/i.test(t)}function Ru(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JP(t=De()){var e;return Ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZP(){return Zw()&&document.documentMode===10}function DS(t=De()){return Ru(t)||NS(t)||AS(t)||RS(t)||/windows phone/i.test(t)||xS(t)}function eL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t,e=[]){let n;switch(t){case"Browser":n=Nv(De());break;case"Worker":n=`${Nv(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Co}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rv(this),this.idTokenSubscription=new Rv(this),this.beforeStateQueue=new tL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Dl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Tn(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Au(t){return Tn(t)}class Rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=ax(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function rL(t,e){return Bo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iL(t,e){return jo(t,"POST","/v1/accounts:signInWithPassword",Vo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sL(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",Vo(t,e))}async function oL(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",Vo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends bp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return iL(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sL(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rL(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oL(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e){return jo(t,"POST","/v1/accounts:signInWithIdp",Vo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL="http://localhost";class Vr extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Op(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:aL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uL(t){const e=ps(ms(t)).link,n=e?ps(ms(e)).deep_link_id:null,r=ps(ms(t)).deep_link_id;return(r?ps(ms(r)).link:null)||r||n||e||t}class Fp{constructor(e){var n,r,i,s,o,a;const l=ps(ms(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=lL((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uL(e);try{return new Fp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,n){return vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fp.parseLink(n);return V(r,"argument-error"),vo._fromEmailAndCode(e,r.code,r.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends PS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends zo{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends zo{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends zo{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cL(t,e){return jo(t,"POST","/v1/accounts:signUp",Vo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kr._fromIdTokenResponse(e,r,i),o=Av(r);return new Br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Av(r);return new Br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Av(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ol(e,n,r,i)}}function LS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(t,s,e,r):s})}async function hL(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dL(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await mo(t,LS(i,s,e,t),n);V(o.idToken,i,"internal-error");const a=$p(o.idToken);V(a,i,"internal-error");const{sub:l}=a;return V(t.uid===l,i,"user-mismatch"),Br._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ut(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e,n=!1){const r="signIn",i=await LS(t,r,e),s=await Br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fL(t,e){return $S(Au(t),e)}async function pL(t,e,n){const r=Au(t),i=await cL(r,{returnSecureToken:!0,email:e,password:n}),s=await Br._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function mL(t,e,n){return fL(Tn(t),Xi.credential(e,n))}function gL(t){return Tn(t).signOut()}const Pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(){const t=De();return Mp(t)||Ru(t)}const yL=1e3,wL=10;class bS extends MS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vL()&&eL(),this.fallbackToPolling=DS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bS.type="LOCAL";const EL=bS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS extends MS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FS.type="SESSION";const US=FS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Du(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await SL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Du.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Up("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function IL(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){return typeof Gt().WorkerGlobalScope!="undefined"&&typeof Gt().importScripts=="function"}async function _L(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kL(){return VS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="firebaseLocalStorageDb",xL=1,Ll="firebaseLocalStorage",jS="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ou(t,e){return t.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function NL(){const t=indexedDB.deleteDatabase(BS);return new Ho(t).toPromise()}function cd(){const t=indexedDB.open(BS,xL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ll,{keyPath:jS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ll)?e(r):(r.close(),await NL(),e(await cd()))})})}async function Dv(t,e,n){const r=Ou(t,!0).put({[jS]:e,value:n});return new Ho(r).toPromise()}async function RL(t,e){const n=Ou(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function Ov(t,e){const n=Ou(t,!0).delete(e);return new Ho(n).toPromise()}const AL=800,DL=3;class zS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Du._getInstance(kL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _L(),!this.activeServiceWorker)return;this.sender=new TL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await Dv(e,Pl,"1"),await Ov(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ov(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ou(i,!1).getAll();return new Ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zS.type="LOCAL";const OL=zS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function LL(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PL().appendChild(r)})}function $L(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Uo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(t,e){return e?an(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp extends bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bL(t){return $S(t.auth,new Vp(t),t.bypassAuthState)}function FL(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),dL(n,new Vp(t),t.bypassAuthState)}async function UL(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),hL(n,new Vp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bL;case"linkViaPopup":case"linkViaRedirect":return UL;case"reauthViaPopup":case"reauthViaRedirect":return FL;default:Ut(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VL=new Uo(2e3,1e4);class di extends HS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,VL.get())};e()}}di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL="pendingRedirect",Va=new Map;class jL extends HS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await zL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zL(t,e){const n=WL(e),r=KL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HL(t,e){Va.set(t._key(),e)}function KL(t){return an(t._redirectPersistence)}function WL(t){return Ua(BL,t.config.apiKey,t.name)}async function qL(t,e,n=!1){const r=Au(t),i=ML(r,e),o=await new jL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=10*60*1e3;class QL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!KS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pv(e))}saveEventToCache(e){this.cachedEventUids.add(Pv(e)),this.lastProcessedEventTime=Date.now()}}function Pv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YL(t,e={}){return Bo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZL=/^https?/;async function e$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YL(t);for(const n of e)try{if(t$(n))return}catch{}Ut(t,"unauthorized-domain")}function t$(t){const e=ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZL.test(n))return!1;if(JL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$=new Uo(3e4,6e4);function Lv(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function r$(t){return new Promise((e,n)=>{var r,i,s;function o(){Lv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lv(),n(qt(t,"network-request-failed"))},timeout:n$.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const a=$L("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},LL(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function i$(t){return Ba=Ba||r$(t),Ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s$=new Uo(5e3,15e3),o$="__/auth/iframe",a$="emulator/auth/iframe",l$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c$(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lp(e,a$):`https://${t.config.authDomain}/${o$}`,r={apiKey:e.apiKey,appName:t.name,v:Co},i=u$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_o(r).slice(1)}`}async function h$(t){const e=await i$(t),n=Gt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:c$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Gt().setTimeout(()=>{s(o)},s$.get());function l(){Gt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f$=500,p$=600,m$="_blank",g$="http://localhost";class $v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v$(t,e,n,r=f$,i=p$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},d$),{width:r.toString(),height:i.toString(),top:s,left:o}),u=De().toLowerCase();n&&(a=kS(u)?m$:n),CS(u)&&(e=e||g$,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(JP(u)&&a!=="_self")return y$(e||"",a),new $v(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new $v(h)}function y$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w$="__/auth/handler",E$="emulator/auth/handler";function Mv(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Co,eventId:i};if(e instanceof PS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ox(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof zo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${S$(t)}?${_o(a).slice(1)}`}function S$({config:t}){return t.emulator?Lp(t,E$):`https://${t.authDomain}/${w$}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="webStorageSupport";class T${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=US,this._completeRedirectFn=qL,this._overrideRedirectResult=HL}async _openPopup(e,n,r,i){var s;yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Mv(e,n,r,ud(),i);return v$(e,o,Up())}async _openRedirect(e,n,r,i){return await this._originValidation(e),IL(Mv(e,n,r,ud(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await h$(e),r=new QL(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$c];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=e$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return DS()||Mp()||Ru()}}const I$=T$;var bv="@firebase/auth",Fv="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function k$(t){Qt(new Ft("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{V(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OS(t)},c=new nL(a,l,u);return $P(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qt(new Ft("auth-internal",e=>{const n=Au(e.getProvider("auth").getImmediate());return(r=>new _$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(bv,Fv,C$(t)),_t(bv,Fv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x$(t=bf()){const e=Kr(t,"auth");return e.isInitialized()?e.getImmediate():LP(t,{popupRedirectResolver:I$,persistence:[OL,EL,US]})}k$("Browser");const N$={apiKey:"AIzaSyB4IYslkJNL3Gt30U4HtkfRV_cRpCKodTI",authDomain:"jharkhand-study.firebaseapp.com",projectId:"jharkhand-study",storageBucket:"jharkhand-study.appspot.com",messagingSenderId:"246827518476",appId:"1:246827518476:web:abae482c81579b4a4d3c29",measurementId:"G-NBJY1KE185"},Bp=uN(N$),jp=EP(Bp),Ta=x$(Bp);LR(Bp);const WS=y.exports.createContext();function Ko(){return y.exports.useContext(WS)}function R$({children:t}){const[e,n]=y.exports.useState(),[r,i]=y.exports.useState();function s(u,c){return pL(Ta,u,c)}function o(u,c){return mL(Ta,u,c)}function a(){return gL(Ta)}y.exports.useEffect(()=>Ta.onAuthStateChanged(c=>{n(c),i(!1)}),[]);const l={currentUser:e,signup:s,login:o,logout:a};return w(WS.Provider,{value:l,children:!r&&t})}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));var Uv=function(t){return t},Vv="beforeunload",A$="hashchange",D$="popstate";function O$(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var T=tr(r.location.hash.substr(1)),P=T.pathname,L=P===void 0?"/":P,Y=T.search,we=Y===void 0?"":Y,ve=T.hash,Ge=ve===void 0?"":ve,re=i.state||{};return[re.idx,Uv({pathname:L,search:we,hash:Ge,state:re.usr||null,key:re.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var T=wr.Pop,P=s(),L=P[0],Y=P[1];if(m.length){if(L!=null){var we=c-L;we&&(o={action:T,location:Y,retry:function(){_(we*-1)}},_(we))}}else g(T)}}r.addEventListener(D$,a),r.addEventListener(A$,function(){var T=s(),P=T[1];Ms(P)!==Ms(h)&&a()});var l=wr.Pop,u=s(),c=u[0],h=u[1],d=jv(),m=jv();c==null&&(c=0,i.replaceState(eo({},i.state,{idx:c}),""));function v(){var T=document.querySelector("base"),P="";if(T&&T.getAttribute("href")){var L=r.location.href,Y=L.indexOf("#");P=Y===-1?L:L.slice(0,Y)}return P}function E(T){return v()+"#"+(typeof T=="string"?T:Ms(T))}function I(T,P){return P===void 0&&(P=null),Uv(eo({pathname:h.pathname,hash:"",search:""},typeof T=="string"?tr(T):T,{state:P,key:P$()}))}function p(T,P){return[{usr:T.state,key:T.key,idx:P},E(T)]}function f(T,P,L){return!m.length||(m.call({action:T,location:P,retry:L}),!1)}function g(T){l=T;var P=s();c=P[0],h=P[1],d.call({action:l,location:h})}function S(T,P){var L=wr.Push,Y=I(T,P);function we(){S(T,P)}if(f(L,Y,we)){var ve=p(Y,c+1),Ge=ve[0],re=ve[1];try{i.pushState(Ge,"",re)}catch{r.location.assign(re)}g(L)}}function k(T,P){var L=wr.Replace,Y=I(T,P);function we(){k(T,P)}if(f(L,Y,we)){var ve=p(Y,c),Ge=ve[0],re=ve[1];i.replaceState(Ge,"",re),g(L)}}function _(T){i.go(T)}var N={get action(){return l},get location(){return h},createHref:E,push:S,replace:k,go:_,back:function(){_(-1)},forward:function(){_(1)},listen:function(P){return d.push(P)},block:function(P){var L=m.push(P);return m.length===1&&r.addEventListener(Vv,Bv),function(){L(),m.length||r.removeEventListener(Vv,Bv)}}};return N}function Bv(t){t.preventDefault(),t.returnValue=""}function jv(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function P$(){return Math.random().toString(36).substr(2,8)}function Ms(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function tr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const zp=y.exports.createContext(null),Hp=y.exports.createContext(null),Pu=y.exports.createContext({outlet:null,matches:[]});function Yt(t,e){if(!t)throw new Error(e)}function L$(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?tr(e):e,i=QS(r.pathname||"/",n);if(i==null)return null;let s=qS(t);$$(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=H$(s[a],i);return o}function qS(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Yt(!1),o.relativePath=o.relativePath.slice(r.length));let a=Gn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Yt(!1),qS(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:j$(a,i.index),routesMeta:l})}),e}function $$(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:z$(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const M$=/^:\w+$/,b$=3,F$=2,U$=1,V$=10,B$=-2,zv=t=>t==="*";function j$(t,e){let n=t.split("/"),r=n.length;return n.some(zv)&&(r+=B$),e&&(r+=F$),n.filter(i=>!zv(i)).reduce((i,s)=>i+(M$.test(s)?b$:s===""?U$:V$),r)}function z$(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function H$(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=K$({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Gn([i,c.pathname]),pathnameBase:XS(Gn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Gn([i,c.pathnameBase]))}return s}function K$(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=W$(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=q$(a[h]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function W$(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function q$(t,e){try{return decodeURIComponent(t)}catch{return t}}function G$(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?tr(t):t;return{pathname:n?n.startsWith("/")?n:Q$(n,e):e,search:Y$(r),hash:J$(i)}}function Q$(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function GS(t,e,n){let r=typeof t=="string"?tr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=G$(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function X$(t){return t===""||t.pathname===""?"/":typeof t=="string"?tr(t).pathname:t.pathname}function QS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Gn=t=>t.join("/").replace(/\/\/+/g,"/"),XS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Y$=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,J$=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Z$(t){Wo()||Yt(!1);let{basename:e,navigator:n}=y.exports.useContext(zp),{hash:r,pathname:i,search:s}=Kp(t),o=i;if(e!=="/"){let a=X$(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):Gn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Wo(){return y.exports.useContext(Hp)!=null}function qo(){return Wo()||Yt(!1),y.exports.useContext(Hp).location}function Lu(){Wo()||Yt(!1);let{basename:t,navigator:e}=y.exports.useContext(zp),{matches:n}=y.exports.useContext(Pu),{pathname:r}=qo(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=y.exports.useRef(!1);return y.exports.useEffect(()=>{s.current=!0}),y.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=GS(a,JSON.parse(i),r);t!=="/"&&(u.pathname=Gn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function Kp(t){let{matches:e}=y.exports.useContext(Pu),{pathname:n}=qo(),r=JSON.stringify(e.map(i=>i.pathnameBase));return y.exports.useMemo(()=>GS(t,JSON.parse(r),n),[t,r,n])}function eM(t,e){Wo()||Yt(!1);let{matches:n}=y.exports.useContext(Pu),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=qo(),a;if(e){var l;let d=typeof e=="string"?tr(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Yt(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",h=L$(t,{pathname:c});return tM(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:Gn([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Gn([s,d.pathnameBase])})),n)}function tM(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>y.exports.createElement(Pu.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function xn(t){Yt(!1)}function nM(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1}=t;Wo()&&Yt(!1);let a=XS(e),l=y.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=tr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=y.exports.useMemo(()=>{let E=QS(u,a);return E==null?null:{pathname:E,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return v==null?null:y.exports.createElement(zp.Provider,{value:l},y.exports.createElement(Hp.Provider,{children:n,value:{location:v,navigationType:i}}))}function rM(t){let{children:e,location:n}=t;return eM(hd(e),n)}function hd(t){let e=[];return y.exports.Children.forEach(t,n=>{if(!y.exports.isValidElement(n))return;if(n.type===y.exports.Fragment){e.push.apply(e,hd(n.props.children));return}n.type!==xn&&Yt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=hd(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$l.apply(this,arguments)}function YS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const iM=["onClick","reloadDocument","replace","state","target","to"],sM=["aria-current","caseSensitive","className","end","style","to","children"];function oM(t){let{basename:e,children:n,window:r}=t,i=y.exports.useRef();i.current==null&&(i.current=O$({window:r}));let s=i.current,[o,a]=y.exports.useState({action:s.action,location:s.location});return y.exports.useLayoutEffect(()=>s.listen(a),[s]),y.exports.createElement(nM,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function aM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Wp=y.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=YS(e,iM),c=Z$(l),h=lM(l,{replace:s,state:o,target:a});function d(m){r&&r(m),!m.defaultPrevented&&!i&&h(m)}return y.exports.createElement("a",$l({},u,{href:c,onClick:d,ref:n,target:a}))}),Mc=y.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=YS(e,sM),h=qo(),d=Kp(l),m=h.pathname,v=d.pathname;i||(m=m.toLowerCase(),v=v.toLowerCase());let E=m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/",I=E?r:void 0,p;typeof s=="function"?p=s({isActive:E}):p=[s,E?"active":null].filter(Boolean).join(" ");let f=typeof a=="function"?a({isActive:E}):a;return y.exports.createElement(Wp,$l({},c,{"aria-current":I,className:p,ref:n,style:f,to:l}),typeof u=="function"?u({isActive:E}):u)});function lM(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=Lu(),o=qo(),a=Kp(t);return y.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!aM(l)){l.preventDefault();let u=!!r||Ms(o)===Ms(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}function uM(){const[t,e]=y.exports.useState(!1),[n,r]=y.exports.useState(""),i=y.exports.useRef(),s=y.exports.useRef(),o=y.exports.useRef(),{signup:a}=Ko();async function l(u){if(u.preventDefault(),e(!0),s.current.value!==o.current.value)return e(!1),r("password do not match");try{await a(i.current.value,s.current.value)}catch(c){r(c.message)}e(!1)}return w(mn,{children:w(ru,{className:"d-flex align-item-center justify-content-center mt-5",style:{minHeight:"100vh"},children:j("div",{className:"w-100",style:{maxWidth:"400px"},children:[w(Di,{children:j(Di.Body,{children:[w("h2",{className:"text-center mb-4",children:"Sign Up"}),n&&w(vf,{variant:"danger",children:n}),j(ce,{onSubmit:l,children:[j(ce.Group,{id:"email",children:[w(ce.Label,{children:"Email"}),w(ce.Control,{type:"email",ref:i,required:!0})]}),j(ce.Group,{id:"password",children:[w(ce.Label,{children:"Password"}),w(ce.Control,{type:"password",ref:s,required:!0})]}),j(ce.Group,{id:"password-confirm",children:[w(ce.Label,{children:"Confirm Password"}),w(ce.Control,{type:"password",ref:o,required:!0})]}),w(Io,{type:"submit",className:"w-100 mt-2",disabled:t,children:"Sign up"})]})]})}),j("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",w(Wp,{to:"/login",children:"Log In"})]})]})})})}function cM(){const[t,e]=y.exports.useState(!1),[n,r]=y.exports.useState(""),i=y.exports.useRef(),s=y.exports.useRef(),{login:o,currentUser:a}=Ko(),l=Lu();async function u(c){c.preventDefault(),e(!0);try{await o(i.current.value,s.current.value),l("/user")}catch(h){r(h.message)}e(!1)}return y.exports.useEffect(()=>{a&&l("/user")},[]),w(mn,{children:w(ru,{className:"d-flex align-item-center justify-content-center mt-5",style:{minHeight:"100vh"},children:j("div",{className:"w-100",style:{maxWidth:"400px"},children:[w(Di,{children:j(Di.Body,{children:[w("h2",{className:"text-center mb-4",children:"Log In"}),n&&w(vf,{variant:"danger",children:n}),j(ce,{onSubmit:u,children:[j(ce.Group,{id:"email",children:[w(ce.Label,{children:"Email"}),w(ce.Control,{type:"email",ref:i,required:!0})]}),j(ce.Group,{id:"password",children:[w(ce.Label,{children:"Password"}),w(ce.Control,{type:"password",ref:s,required:!0})]}),w(Io,{type:"submit",className:"w-100 mt-2",disabled:t,children:"Login"})]})]})}),j("div",{className:"w-100 text-center mt-2",children:["Need an Account? ",w(Wp,{to:"/signup",children:"Sign Up"})]})]})})})}function hM(){const[t,e]=y.exports.useState(),{currentUser:n,logout:r}=Ko(),i=Lu();async function s(){e("");try{await r(),i("/login")}catch(o){e(o.message)}}return j(mn,{children:[w(Di,{children:j(Di.Body,{children:[w("h2",{className:"text-center mb-4",children:"Profile"}),t&&w(vf,{variant:"danger",children:t}),w("strong",{children:"Email:"}),n==null?void 0:n.email]})}),w("div",{className:"w-100 text-center mt-2",children:w(Io,{variant:"link",onClick:s,children:"Log Out"})})]})}const dM=()=>{const{currentUser:t,logout:e}=Ko(),[n,r]=y.exports.useState();async function i(){r("");try{await e(),navigate("/login")}catch(s){r(s.message)}}return w(Gk,{className:"bg-white shadow-sm mb-3",sticky:"top",children:j(ru,{children:[j(fa,{className:"me-auto",children:[w(fa.Link,{to:"/user",as:Mc,children:"User"}),w(fa.Link,{to:"/question",as:Mc,children:"Question"}),w(fa.Link,{to:"/tracking",as:Mc,children:"Tracking"})]}),t==null?void 0:t.email,w(Io,{variant:"link",onClick:i,children:"Log Out"})]})})};function ls(t){const{currentUser:e}=Ko(),n=Lu(),{Component:r}=t;if(!e)console.log(e),n("/login");else return j(mn,{children:[w(dM,{}),w(ru,{children:w(r,{})})]})}function fM(){return w("div",{children:"Home"})}function pM(){const[t,e]=y.exports.useState([]);y.exports.useEffect(()=>{n()},[]);function n(){const r=Ap(jp,"users");Dp(r).then(i=>{const s=i.docs.map(o=>({data:o.data(),id:o.id}));console.log(s),e(s)}).catch(i=>{console.log(i.message)})}return j("div",{children:[w("h4",{children:"List of users"}),j(qw,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[w("thead",{children:j("tr",{children:[w("th",{children:"User"}),w("th",{children:"Password"}),w("th",{children:"Role"}),w("th",{children:"activated"})]})}),w("tbody",{children:t.map(r=>j("tr",{children:[w("td",{children:r.data.user_id}),w("td",{children:r.data.pass}),w("td",{children:r.data.role}),w("td",{children:r.data.is_active})]},r.id))})]})]})}function mM(){const[t,e]=y.exports.useState([]);y.exports.useEffect(()=>{n()},[]);const n=()=>{const r=Ap(jp,"questions");Dp(r).then(i=>{let s=i.docs.map(o=>({data:o.data(),id:o.id}));console.log(s),e(s)}).catch(i=>{console.log(i)})};return j("div",{children:[w("h2",{children:"Questions"}),t.map(r=>j("div",{children:[w("h4",{children:r.id}),w("div",{children:w("pre",{children:w("code",{children:JSON.stringify(r.data.data)})})})]},r.id))]})}function gM(){const[t,e]=y.exports.useState([]),[n,r]=y.exports.useState([]);y.exports.useState(0);const[i,s]=y.exports.useState([]),o=y.exports.useRef(),a=y.exports.useRef(),l=y.exports.useRef(),[u,c]=y.exports.useState({totalHH:0,totalSection1:0,totalSection2:0,totalSection3:0,totalSection4:0,totalSection5:0,totalSection6:0});y.exports.useEffect(()=>{h()},[]),y.exports.useEffect(()=>{m(),console.log(n)},[n]);const h=()=>{const v=Ap(jp,"section1");Dp(v).then(E=>{let I=E.docs.map(f=>({data:f.data(),id:f.id}));e(I),r(I);let p=[];I.map(f=>{p.push(f.data.user_id)}),s([...new Set(p)])}).catch(E=>{console.log(E)})},d=()=>{if(a.current.value){const v=t.filter(function(E){return console.log("date yes"),E.data.date===a.current.value});r(v)}else if(o.current.value&&o.current.value!=="All User"){const v=t.filter(function(E){return console.log("user yes"),E.data.user_id===o.current.value});r(v)}else if(l.current.value){const v=t.filter(function(E){return E.data.mobile_no===l.current.value});r(v)}else r(t)},m=()=>{let[v,E,I,p,f,g]=[0,0,0,0,0,0];n.map(S=>{S.data.section3===!0&&(I+=1),S.data.section1===!0&&(v+=1),S.data.section2===!0&&(E+=1),S.data.section6===!0&&(g+=1),S.data.section4===!0&&(p+=1),S.data.section5===!0&&(f+=1)}),c({totalHH:n.length,totalSection1:v,totalSection2:E,totalSection3:I,totalSection4:p,totalSection5:f,totalSection6:g})};return j(mn,{children:[j("div",{className:"d-flex justify-content-end mb-3 gap-1",children:[w(ce.Group,{className:"",children:j(ce.Select,{"aria-label":"Default select example",ref:o,children:[w("option",{children:"All User"}),i.map((v,E)=>w("option",{value:v,children:v},E))]})}),w(ce.Group,{className:"",children:w(ce.Control,{type:"date",ref:a})}),w(ce.Group,{className:"",children:w(ce.Control,{type:"number",ref:l,placeholder:"Phone no"})}),w(Io,{variant:"primary",type:"button",onClick:d,children:"Filter"})]}),w("h6",{children:"Summary"}),j("div",{className:"d-flex justify-content-start gap-1 mb-3",children:[j("div",{className:"shadow-sm p-3 mb-2 bg-body rounded",children:["Total HH : ",u.totalHH]}),j("div",{className:"shadow-sm p-3 mb-2 bg-body rounded",children:["Total Section 1 : ",u.totalSection1]}),j("div",{className:"shadow-sm p-3 mb-2 bg-body rounded",children:["Total Section 2 : ",u.totalSection2]}),j("div",{className:"shadow-sm p-3 mb-2 bg-body rounded",children:["Total Section 3 : ",u.totalSection3]}),j("div",{className:"shadow-sm p-3 mb-2 bg-body rounded",children:["Total Section 4 : ",u.totalSection4]}),j("div",{className:"shadow-sm p-3 mb-2 bg-body rounded",children:["Total Section 5 : ",u.totalSection5]}),j("div",{className:"shadow-sm p-3 mb-2 bg-body rounded",children:["Total Section 6 : ",u.totalSection6]})]}),w("h6",{children:"List of entered data"}),w("div",{className:"d-flex justify-content-start",children:j(qw,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[w("thead",{children:j("tr",{children:[w("th",{children:"HH No"}),w("th",{children:"Phone"}),w("th",{children:"Date"}),w("th",{children:"Respondent Name"}),w("th",{children:"Section 1"}),w("th",{children:"Section 2"}),w("th",{children:"Section 3"}),w("th",{children:"Section 4"}),w("th",{children:"Section 5"}),w("th",{children:"Section 6"})]})}),w("tbody",{children:n.map(v=>{var E,I,p,f,g,S;return j("tr",{children:[w("td",{children:v.data.household_no}),w("td",{children:v.data.mobile_no}),w("td",{children:v.data.date}),w("td",{children:v.data.respondent_name}),w("td",{children:(E=v.data.section1)==null?void 0:E.toString()}),w("td",{children:(I=v.data.section2)==null?void 0:I.toString()}),w("td",{children:(p=v.data.section3)==null?void 0:p.toString()}),w("td",{children:(f=v.data.section4)==null?void 0:f.toString()}),w("td",{children:(g=v.data.section5)==null?void 0:g.toString()}),w("td",{children:(S=v.data.section6)==null?void 0:S.toString()})]},v.id)})})]})})]})}function vM(){return w(mn,{children:w(R$,{children:j(rM,{children:[w(xn,{path:"/dashboard",element:w(ls,{Component:hM})}),w(xn,{path:"/",element:w(ls,{Component:fM})}),w(xn,{path:"/tracking",element:w(ls,{Component:gM})}),w(xn,{path:"/question",element:w(ls,{Component:mM})}),w(xn,{path:"/user",element:w(ls,{Component:pM})}),w(xn,{path:"/login",element:w(cM,{})}),w(xn,{path:"/signup",element:w(uM,{})})]})})})}bc.createRoot(document.getElementById("root")).render(w(oM,{children:w(Ht.StrictMode,{children:w(vM,{})})}));
