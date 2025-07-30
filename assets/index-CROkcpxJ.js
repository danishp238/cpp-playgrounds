(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cr(t){const n=Object.create(null);for(const a of t.split(","))n[a]=1;return a=>a in n}const xn={},Ia=[],At=()=>{},Jp=()=>!1,de=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tr=t=>t.startsWith("onUpdate:"),qn=Object.assign,Pr=(t,n)=>{const a=t.indexOf(n);a>-1&&t.splice(a,1)},nc=Object.prototype.hasOwnProperty,kn=(t,n)=>nc.call(t,n),en=Array.isArray,za=t=>ue(t)==="[object Map]",Ri=t=>ue(t)==="[object Set]",rn=t=>typeof t=="function",Rn=t=>typeof t=="string",ca=t=>typeof t=="symbol",Sn=t=>t!==null&&typeof t=="object",Ai=t=>(Sn(t)||rn(t))&&rn(t.then)&&rn(t.catch),Ii=Object.prototype.toString,ue=t=>Ii.call(t),tc=t=>ue(t).slice(8,-1),zi=t=>ue(t)==="[object Object]",Mr=t=>Rn(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rs=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fe=t=>{const n=Object.create(null);return a=>n[a]||(n[a]=t(a))},ac=/-(\w)/g,kt=fe(t=>t.replace(ac,(n,a)=>a?a.toUpperCase():"")),sc=/\B([A-Z])/g,ja=fe(t=>t.replace(sc,"-$1").toLowerCase()),he=fe(t=>t.charAt(0).toUpperCase()+t.slice(1)),Me=fe(t=>t?`on${he(t)}`:""),sa=(t,n)=>!Object.is(t,n),Ee=(t,...n)=>{for(let a=0;a<t.length;a++)t[a](...n)},Oi=(t,n,a,r=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:r,value:a})},ec=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let yo;const ge=()=>yo||(yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Er(t){if(en(t)){const n={};for(let a=0;a<t.length;a++){const r=t[a],e=Rn(r)?lc(r):Er(r);if(e)for(const s in e)n[s]=e[s]}return n}else if(Rn(t)||Sn(t))return t}const rc=/;(?![^(]*\))/g,oc=/:([^]+)/,ic=/\/\*[^]*?\*\//g;function lc(t){const n={};return t.replace(ic,"").split(rc).forEach(a=>{if(a){const r=a.split(oc);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Rr(t){let n="";if(Rn(t))n=t;else if(en(t))for(let a=0;a<t.length;a++){const r=Rr(t[a]);r&&(n+=r+" ")}else if(Sn(t))for(const a in t)t[a]&&(n+=a+" ");return n.trim()}const pc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cc=Cr(pc);function Fi(t){return!!t||t===""}const Li=t=>!!(t&&t.__v_isRef===!0),Ut=t=>Rn(t)?t:t==null?"":en(t)||Sn(t)&&(t.toString===Ii||!rn(t.toString))?Li(t)?Ut(t.value):JSON.stringify(t,Di,2):String(t),Di=(t,n)=>Li(n)?Di(t,n.value):za(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((a,[r,e],s)=>(a[Re(r,s)+" =>"]=e,a),{})}:Ri(n)?{[`Set(${n.size})`]:[...n.values()].map(a=>Re(a))}:ca(n)?Re(n):Sn(n)&&!en(n)&&!zi(n)?String(n):n,Re=(t,n="")=>{var a;return ca(t)?`Symbol(${(a=t.description)!=null?a:n})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zn;class dc{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zn,!n&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,a;if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].pause();for(n=0,a=this.effects.length;n<a;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,a;if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].resume();for(n=0,a=this.effects.length;n<a;n++)this.effects[n].resume()}}run(n){if(this._active){const a=Zn;try{return Zn=this,n()}finally{Zn=a}}}on(){++this._on===1&&(this.prevScope=Zn,Zn=this)}off(){this._on>0&&--this._on===0&&(Zn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let a,r;for(a=0,r=this.effects.length;a<r;a++)this.effects[a].stop();for(this.effects.length=0,a=0,r=this.cleanups.length;a<r;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,r=this.scopes.length;a<r;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function uc(){return Zn}let bn;const Ae=new WeakSet;class Bi{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zn&&Zn.active&&Zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ae.has(this)&&(Ae.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ui(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bo(this),Wi(this);const n=bn,a=yt;bn=this,yt=!0;try{return this.fn()}finally{Ni(this),bn=n,yt=a,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)zr(n);this.deps=this.depsTail=void 0,bo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ae.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xe(this)&&this.run()}get dirty(){return Xe(this)}}let Gi=0,os,is;function Ui(t,n=!1){if(t.flags|=8,n){t.next=is,is=t;return}t.next=os,os=t}function Ar(){Gi++}function Ir(){if(--Gi>0)return;if(is){let n=is;for(is=void 0;n;){const a=n.next;n.next=void 0,n.flags&=-9,n=a}}let t;for(;os;){let n=os;for(os=void 0;n;){const a=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){t||(t=r)}n=a}}if(t)throw t}function Wi(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ni(t){let n,a=t.depsTail,r=a;for(;r;){const e=r.prevDep;r.version===-1?(r===a&&(a=e),zr(r),fc(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}t.deps=n,t.depsTail=a}function Xe(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Vi(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function Vi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ms)||(t.globalVersion=ms,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Xe(t))))return;t.flags|=2;const n=t.dep,a=bn,r=yt;bn=t,yt=!0;try{Wi(t);const e=t.fn(t._value);(n.version===0||sa(e,t._value))&&(t.flags|=128,t._value=e,n.version++)}catch(e){throw n.version++,e}finally{bn=a,yt=r,Ni(t),t.flags&=-3}}function zr(t,n=!1){const{dep:a,prevSub:r,nextSub:e}=t;if(r&&(r.nextSub=e,t.prevSub=void 0),e&&(e.prevSub=r,t.nextSub=void 0),a.subs===t&&(a.subs=r,!r&&a.computed)){a.computed.flags&=-5;for(let s=a.computed.deps;s;s=s.nextDep)zr(s,!0)}!n&&!--a.sc&&a.map&&a.map.delete(a.key)}function fc(t){const{prevDep:n,nextDep:a}=t;n&&(n.nextDep=a,t.prevDep=void 0),a&&(a.prevDep=n,t.nextDep=void 0)}let yt=!0;const Hi=[];function Vt(){Hi.push(yt),yt=!1}function Ht(){const t=Hi.pop();yt=t===void 0?!0:t}function bo(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const a=bn;bn=void 0;try{n()}finally{bn=a}}}let ms=0;class hc{constructor(n,a){this.sub=n,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Or{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!bn||!yt||bn===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==bn)a=this.activeLink=new hc(bn,this),bn.deps?(a.prevDep=bn.depsTail,bn.depsTail.nextDep=a,bn.depsTail=a):bn.deps=bn.depsTail=a,qi(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const r=a.nextDep;r.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=r),a.prevDep=bn.depsTail,a.nextDep=void 0,bn.depsTail.nextDep=a,bn.depsTail=a,bn.deps===a&&(bn.deps=r)}return a}trigger(n){this.version++,ms++,this.notify(n)}notify(n){Ar();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Ir()}}}function qi(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)qi(r)}const a=t.dep.subs;a!==t&&(t.prevSub=a,a&&(a.nextSub=t)),t.dep.subs=t}}const Ze=new WeakMap,ya=Symbol(""),Qe=Symbol(""),ks=Symbol("");function Bn(t,n,a){if(yt&&bn){let r=Ze.get(t);r||Ze.set(t,r=new Map);let e=r.get(a);e||(r.set(a,e=new Or),e.map=r,e.key=a),e.track()}}function Wt(t,n,a,r,e,s){const o=Ze.get(t);if(!o){ms++;return}const i=l=>{l&&l.trigger()};if(Ar(),n==="clear")o.forEach(i);else{const l=en(t),d=l&&Mr(a);if(l&&a==="length"){const c=Number(r);o.forEach((u,h)=>{(h==="length"||h===ks||!ca(h)&&h>=c)&&i(u)})}else switch((a!==void 0||o.has(void 0))&&i(o.get(a)),d&&i(o.get(ks)),n){case"add":l?d&&i(o.get("length")):(i(o.get(ya)),za(t)&&i(o.get(Qe)));break;case"delete":l||(i(o.get(ya)),za(t)&&i(o.get(Qe)));break;case"set":za(t)&&i(o.get(ya));break}}Ir()}function Ta(t){const n=mn(t);return n===t?n:(Bn(n,"iterate",ks),mt(t)?n:n.map(Fn))}function me(t){return Bn(t=mn(t),"iterate",ks),t}const gc={__proto__:null,[Symbol.iterator](){return Ie(this,Symbol.iterator,Fn)},concat(...t){return Ta(this).concat(...t.map(n=>en(n)?Ta(n):n))},entries(){return Ie(this,"entries",t=>(t[1]=Fn(t[1]),t))},every(t,n){return Ft(this,"every",t,n,void 0,arguments)},filter(t,n){return Ft(this,"filter",t,n,a=>a.map(Fn),arguments)},find(t,n){return Ft(this,"find",t,n,Fn,arguments)},findIndex(t,n){return Ft(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Ft(this,"findLast",t,n,Fn,arguments)},findLastIndex(t,n){return Ft(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Ft(this,"forEach",t,n,void 0,arguments)},includes(...t){return ze(this,"includes",t)},indexOf(...t){return ze(this,"indexOf",t)},join(t){return Ta(this).join(t)},lastIndexOf(...t){return ze(this,"lastIndexOf",t)},map(t,n){return Ft(this,"map",t,n,void 0,arguments)},pop(){return Qa(this,"pop")},push(...t){return Qa(this,"push",t)},reduce(t,...n){return xo(this,"reduce",t,n)},reduceRight(t,...n){return xo(this,"reduceRight",t,n)},shift(){return Qa(this,"shift")},some(t,n){return Ft(this,"some",t,n,void 0,arguments)},splice(...t){return Qa(this,"splice",t)},toReversed(){return Ta(this).toReversed()},toSorted(t){return Ta(this).toSorted(t)},toSpliced(...t){return Ta(this).toSpliced(...t)},unshift(...t){return Qa(this,"unshift",t)},values(){return Ie(this,"values",Fn)}};function Ie(t,n,a){const r=me(t),e=r[n]();return r!==t&&!mt(t)&&(e._next=e.next,e.next=()=>{const s=e._next();return s.value&&(s.value=a(s.value)),s}),e}const mc=Array.prototype;function Ft(t,n,a,r,e,s){const o=me(t),i=o!==t&&!mt(t),l=o[n];if(l!==mc[n]){const u=l.apply(t,s);return i?Fn(u):u}let d=a;o!==t&&(i?d=function(u,h){return a.call(this,Fn(u),h,t)}:a.length>2&&(d=function(u,h){return a.call(this,u,h,t)}));const c=l.call(o,d,r);return i&&e?e(c):c}function xo(t,n,a,r){const e=me(t);let s=a;return e!==t&&(mt(t)?a.length>3&&(s=function(o,i,l){return a.call(this,o,i,l,t)}):s=function(o,i,l){return a.call(this,o,Fn(i),l,t)}),e[n](s,...r)}function ze(t,n,a){const r=mn(t);Bn(r,"iterate",ks);const e=r[n](...a);return(e===-1||e===!1)&&Dr(a[0])?(a[0]=mn(a[0]),r[n](...a)):e}function Qa(t,n,a=[]){Vt(),Ar();const r=mn(t)[n].apply(t,a);return Ir(),Ht(),r}const kc=Cr("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ca));function vc(t){ca(t)||(t=String(t));const n=mn(this);return Bn(n,"has",t),n.hasOwnProperty(t)}class $i{constructor(n=!1,a=!1){this._isReadonly=n,this._isShallow=a}get(n,a,r){if(a==="__v_skip")return n.__v_skip;const e=this._isReadonly,s=this._isShallow;if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return s;if(a==="__v_raw")return r===(e?s?Pc:Qi:s?Zi:Xi).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const o=en(n);if(!e){let l;if(o&&(l=gc[a]))return l;if(a==="hasOwnProperty")return vc}const i=Reflect.get(n,a,Vn(n)?n:r);return(ca(a)?Yi.has(a):kc(a))||(e||Bn(n,"get",a),s)?i:Vn(i)?o&&Mr(a)?i:i.value:Sn(i)?e?nl(i):ke(i):i}}class Ki extends $i{constructor(n=!1){super(!1,n)}set(n,a,r,e){let s=n[a];if(!this._isShallow){const l=oa(s);if(!mt(r)&&!oa(r)&&(s=mn(s),r=mn(r)),!en(n)&&Vn(s)&&!Vn(r))return l?!1:(s.value=r,!0)}const o=en(n)&&Mr(a)?Number(a)<n.length:kn(n,a),i=Reflect.set(n,a,r,Vn(n)?n:e);return n===mn(e)&&(o?sa(r,s)&&Wt(n,"set",a,r):Wt(n,"add",a,r)),i}deleteProperty(n,a){const r=kn(n,a);n[a];const e=Reflect.deleteProperty(n,a);return e&&r&&Wt(n,"delete",a,void 0),e}has(n,a){const r=Reflect.has(n,a);return(!ca(a)||!Yi.has(a))&&Bn(n,"has",a),r}ownKeys(n){return Bn(n,"iterate",en(n)?"length":ya),Reflect.ownKeys(n)}}class yc extends $i{constructor(n=!1){super(!0,n)}set(n,a){return!0}deleteProperty(n,a){return!0}}const bc=new Ki,xc=new yc,wc=new Ki(!0);const Je=t=>t,Os=t=>Reflect.getPrototypeOf(t);function _c(t,n,a){return function(...r){const e=this.__v_raw,s=mn(e),o=za(s),i=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,d=e[t](...r),c=a?Je:n?Xs:Fn;return!n&&Bn(s,"iterate",l?Qe:ya),{next(){const{value:u,done:h}=d.next();return h?{value:u,done:h}:{value:i?[c(u[0]),c(u[1])]:c(u),done:h}},[Symbol.iterator](){return this}}}}function Fs(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function Sc(t,n){const a={get(e){const s=this.__v_raw,o=mn(s),i=mn(e);t||(sa(e,i)&&Bn(o,"get",e),Bn(o,"get",i));const{has:l}=Os(o),d=n?Je:t?Xs:Fn;if(l.call(o,e))return d(s.get(e));if(l.call(o,i))return d(s.get(i));s!==o&&s.get(e)},get size(){const e=this.__v_raw;return!t&&Bn(mn(e),"iterate",ya),Reflect.get(e,"size",e)},has(e){const s=this.__v_raw,o=mn(s),i=mn(e);return t||(sa(e,i)&&Bn(o,"has",e),Bn(o,"has",i)),e===i?s.has(e):s.has(e)||s.has(i)},forEach(e,s){const o=this,i=o.__v_raw,l=mn(i),d=n?Je:t?Xs:Fn;return!t&&Bn(l,"iterate",ya),i.forEach((c,u)=>e.call(s,d(c),d(u),o))}};return qn(a,t?{add:Fs("add"),set:Fs("set"),delete:Fs("delete"),clear:Fs("clear")}:{add(e){!n&&!mt(e)&&!oa(e)&&(e=mn(e));const s=mn(this);return Os(s).has.call(s,e)||(s.add(e),Wt(s,"add",e,e)),this},set(e,s){!n&&!mt(s)&&!oa(s)&&(s=mn(s));const o=mn(this),{has:i,get:l}=Os(o);let d=i.call(o,e);d||(e=mn(e),d=i.call(o,e));const c=l.call(o,e);return o.set(e,s),d?sa(s,c)&&Wt(o,"set",e,s):Wt(o,"add",e,s),this},delete(e){const s=mn(this),{has:o,get:i}=Os(s);let l=o.call(s,e);l||(e=mn(e),l=o.call(s,e)),i&&i.call(s,e);const d=s.delete(e);return l&&Wt(s,"delete",e,void 0),d},clear(){const e=mn(this),s=e.size!==0,o=e.clear();return s&&Wt(e,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(e=>{a[e]=_c(e,t,n)}),a}function Fr(t,n){const a=Sc(t,n);return(r,e,s)=>e==="__v_isReactive"?!t:e==="__v_isReadonly"?t:e==="__v_raw"?r:Reflect.get(kn(a,e)&&e in r?a:r,e,s)}const jc={get:Fr(!1,!1)},Cc={get:Fr(!1,!0)},Tc={get:Fr(!0,!1)};const Xi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,Pc=new WeakMap;function Mc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ec(t){return t.__v_skip||!Object.isExtensible(t)?0:Mc(tc(t))}function ke(t){return oa(t)?t:Lr(t,!1,bc,jc,Xi)}function Ji(t){return Lr(t,!1,wc,Cc,Zi)}function nl(t){return Lr(t,!0,xc,Tc,Qi)}function Lr(t,n,a,r,e){if(!Sn(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const s=Ec(t);if(s===0)return t;const o=e.get(t);if(o)return o;const i=new Proxy(t,s===2?r:a);return e.set(t,i),i}function Oa(t){return oa(t)?Oa(t.__v_raw):!!(t&&t.__v_isReactive)}function oa(t){return!!(t&&t.__v_isReadonly)}function mt(t){return!!(t&&t.__v_isShallow)}function Dr(t){return t?!!t.__v_raw:!1}function mn(t){const n=t&&t.__v_raw;return n?mn(n):t}function Rc(t){return!kn(t,"__v_skip")&&Object.isExtensible(t)&&Oi(t,"__v_skip",!0),t}const Fn=t=>Sn(t)?ke(t):t,Xs=t=>Sn(t)?nl(t):t;function Vn(t){return t?t.__v_isRef===!0:!1}function Nt(t){return tl(t,!1)}function Ac(t){return tl(t,!0)}function tl(t,n){return Vn(t)?t:new Ic(t,n)}class Ic{constructor(n,a){this.dep=new Or,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?n:mn(n),this._value=a?n:Fn(n),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(n){const a=this._rawValue,r=this.__v_isShallow||mt(n)||oa(n);n=r?n:mn(n),sa(n,a)&&(this._rawValue=n,this._value=r?n:Fn(n),this.dep.trigger())}}function bt(t){return Vn(t)?t.value:t}const zc={get:(t,n,a)=>n==="__v_raw"?t:bt(Reflect.get(t,n,a)),set:(t,n,a,r)=>{const e=t[n];return Vn(e)&&!Vn(a)?(e.value=a,!0):Reflect.set(t,n,a,r)}};function al(t){return Oa(t)?t:new Proxy(t,zc)}class Oc{constructor(n,a,r){this.fn=n,this.setter=a,this._value=void 0,this.dep=new Or(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&bn!==this)return Ui(this,!0),!0}get value(){const n=this.dep.track();return Vi(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Fc(t,n,a=!1){let r,e;return rn(t)?r=t:(r=t.get,e=t.set),new Oc(r,e,a)}const Ls={},Zs=new WeakMap;let ma;function Lc(t,n=!1,a=ma){if(a){let r=Zs.get(a);r||Zs.set(a,r=[]),r.push(t)}}function Dc(t,n,a=xn){const{immediate:r,deep:e,once:s,scheduler:o,augmentJob:i,call:l}=a,d=S=>e?S:mt(S)||e===!1||e===0?Jt(S,1):Jt(S);let c,u,h,p,g=!1,f=!1;if(Vn(t)?(u=()=>t.value,g=mt(t)):Oa(t)?(u=()=>d(t),g=!0):en(t)?(f=!0,g=t.some(S=>Oa(S)||mt(S)),u=()=>t.map(S=>{if(Vn(S))return S.value;if(Oa(S))return d(S);if(rn(S))return l?l(S,2):S()})):rn(t)?n?u=l?()=>l(t,2):t:u=()=>{if(h){Vt();try{h()}finally{Ht()}}const S=ma;ma=c;try{return l?l(t,3,[p]):t(p)}finally{ma=S}}:u=At,n&&e){const S=u,k=e===!0?1/0:e;u=()=>Jt(S(),k)}const m=uc(),v=()=>{c.stop(),m&&m.active&&Pr(m.effects,c)};if(s&&n){const S=n;n=(...k)=>{S(...k),v()}}let b=f?new Array(t.length).fill(Ls):Ls;const _=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(n){const k=c.run();if(e||g||(f?k.some((x,w)=>sa(x,b[w])):sa(k,b))){h&&h();const x=ma;ma=c;try{const w=[k,b===Ls?void 0:f&&b[0]===Ls?[]:b,p];b=k,l?l(n,3,w):n(...w)}finally{ma=x}}}else c.run()};return i&&i(_),c=new Bi(u),c.scheduler=o?()=>o(_,!1):_,p=S=>Lc(S,!1,c),h=c.onStop=()=>{const S=Zs.get(c);if(S){if(l)l(S,4);else for(const k of S)k();Zs.delete(c)}},n?r?_(!0):b=c.run():o?o(_.bind(null,!0),!0):c.run(),v.pause=c.pause.bind(c),v.resume=c.resume.bind(c),v.stop=v,v}function Jt(t,n=1/0,a){if(n<=0||!Sn(t)||t.__v_skip||(a=a||new Set,a.has(t)))return t;if(a.add(t),n--,Vn(t))Jt(t.value,n,a);else if(en(t))for(let r=0;r<t.length;r++)Jt(t[r],n,a);else if(Ri(t)||za(t))t.forEach(r=>{Jt(r,n,a)});else if(zi(t)){for(const r in t)Jt(t[r],n,a);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Jt(t[r],n,a)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rs(t,n,a,r){try{return r?t(...r):t()}catch(e){ve(e,n,a)}}function zt(t,n,a,r){if(rn(t)){const e=Rs(t,n,a,r);return e&&Ai(e)&&e.catch(s=>{ve(s,n,a)}),e}if(en(t)){const e=[];for(let s=0;s<t.length;s++)e.push(zt(t[s],n,a,r));return e}}function ve(t,n,a,r=!0){const e=n?n.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||xn;if(n){let i=n.parent;const l=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,l,d)===!1)return}i=i.parent}if(s){Vt(),Rs(s,null,10,[t,l,d]),Ht();return}}Bc(t,a,e,r,o)}function Bc(t,n,a,r=!0,e=!1){if(e)throw t;console.error(t)}const $n=[];let Tt=-1;const Fa=[];let Xt=null,Ma=0;const sl=Promise.resolve();let Qs=null;function Br(t){const n=Qs||sl;return t?n.then(this?t.bind(this):t):n}function Gc(t){let n=Tt+1,a=$n.length;for(;n<a;){const r=n+a>>>1,e=$n[r],s=vs(e);s<t||s===t&&e.flags&2?n=r+1:a=r}return n}function Gr(t){if(!(t.flags&1)){const n=vs(t),a=$n[$n.length-1];!a||!(t.flags&2)&&n>=vs(a)?$n.push(t):$n.splice(Gc(n),0,t),t.flags|=1,el()}}function el(){Qs||(Qs=sl.then(ol))}function Uc(t){en(t)?Fa.push(...t):Xt&&t.id===-1?Xt.splice(Ma+1,0,t):t.flags&1||(Fa.push(t),t.flags|=1),el()}function wo(t,n,a=Tt+1){for(;a<$n.length;a++){const r=$n[a];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;$n.splice(a,1),a--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function rl(t){if(Fa.length){const n=[...new Set(Fa)].sort((a,r)=>vs(a)-vs(r));if(Fa.length=0,Xt){Xt.push(...n);return}for(Xt=n,Ma=0;Ma<Xt.length;Ma++){const a=Xt[Ma];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Xt=null,Ma=0}}const vs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ol(t){try{for(Tt=0;Tt<$n.length;Tt++){const n=$n[Tt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Rs(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Tt<$n.length;Tt++){const n=$n[Tt];n&&(n.flags&=-2)}Tt=-1,$n.length=0,rl(),Qs=null,($n.length||Fa.length)&&ol()}}let vt=null,il=null;function Js(t){const n=vt;return vt=t,il=t&&t.type.__scopeId||null,n}function La(t,n=vt,a){if(!n||t._n)return t;const r=(...e)=>{r._d&&Ao(-1);const s=Js(n);let o;try{o=t(...e)}finally{Js(s),r._d&&Ao(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ua(t,n,a,r){const e=t.dirs,s=n&&n.dirs;for(let o=0;o<e.length;o++){const i=e[o];s&&(i.oldValue=s[o].value);let l=i.dir[r];l&&(Vt(),zt(l,a,8,[t.el,i,t,n]),Ht())}}const Wc=Symbol("_vte"),Nc=t=>t.__isTeleport;function Ur(t,n){t.shapeFlag&6&&t.component?(t.transition=n,Ur(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function ll(t,n){return rn(t)?qn({name:t.name},n,{setup:t}):t}function pl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ne(t,n,a,r,e=!1){if(en(t)){t.forEach((g,f)=>ne(g,n&&(en(n)?n[f]:n),a,r,e));return}if(ls(r)&&!e){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ne(t,n,a,r.component.subTree);return}const s=r.shapeFlag&4?Yr(r.component):r.el,o=e?null:s,{i,r:l}=t,d=n&&n.r,c=i.refs===xn?i.refs={}:i.refs,u=i.setupState,h=mn(u),p=u===xn?()=>!1:g=>kn(h,g);if(d!=null&&d!==l&&(Rn(d)?(c[d]=null,p(d)&&(u[d]=null)):Vn(d)&&(d.value=null)),rn(l))Rs(l,i,12,[o,c]);else{const g=Rn(l),f=Vn(l);if(g||f){const m=()=>{if(t.f){const v=g?p(l)?u[l]:c[l]:l.value;e?en(v)&&Pr(v,s):en(v)?v.includes(s)||v.push(s):g?(c[l]=[s],p(l)&&(u[l]=c[l])):(l.value=[s],t.k&&(c[t.k]=l.value))}else g?(c[l]=o,p(l)&&(u[l]=o)):f&&(l.value=o,t.k&&(c[t.k]=o))};o?(m.id=-1,et(m,a)):m()}}}ge().requestIdleCallback;ge().cancelIdleCallback;const ls=t=>!!t.type.__asyncLoader,cl=t=>t.type.__isKeepAlive;function Vc(t,n){dl(t,"a",n)}function Hc(t,n){dl(t,"da",n)}function dl(t,n,a=Un){const r=t.__wdc||(t.__wdc=()=>{let e=a;for(;e;){if(e.isDeactivated)return;e=e.parent}return t()});if(ye(n,r,a),a){let e=a.parent;for(;e&&e.parent;)cl(e.parent.vnode)&&qc(r,n,a,e),e=e.parent}}function qc(t,n,a,r){const e=ye(n,t,r,!0);Nr(()=>{Pr(r[n],e)},a)}function ye(t,n,a=Un,r=!1){if(a){const e=a[t]||(a[t]=[]),s=n.__weh||(n.__weh=(...o)=>{Vt();const i=Is(a),l=zt(n,a,t,o);return i(),Ht(),l});return r?e.unshift(s):e.push(s),s}}const $t=t=>(n,a=Un)=>{(!bs||t==="sp")&&ye(t,(...r)=>n(...r),a)},Yc=$t("bm"),As=$t("m"),$c=$t("bu"),Kc=$t("u"),Wr=$t("bum"),Nr=$t("um"),Xc=$t("sp"),Zc=$t("rtg"),Qc=$t("rtc");function Jc(t,n=Un){ye("ec",t,n)}const nd="components";function td(t,n){return sd(nd,t,!0,n)||t}const ad=Symbol.for("v-ndc");function sd(t,n,a=!0,r=!1){const e=vt||Un;if(e){const s=e.type;{const i=Vd(s,!1);if(i&&(i===n||i===kt(n)||i===he(kt(n))))return s}const o=_o(e[t]||s[t],n)||_o(e.appContext[t],n);return!o&&r?s:o}}function _o(t,n){return t&&(t[n]||t[kt(n)]||t[he(kt(n))])}function nr(t,n,a,r){let e;const s=a,o=en(t);if(o||Rn(t)){const i=o&&Oa(t);let l=!1,d=!1;i&&(l=!mt(t),d=oa(t),t=me(t)),e=new Array(t.length);for(let c=0,u=t.length;c<u;c++)e[c]=n(l?d?Xs(Fn(t[c])):Fn(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){e=new Array(t);for(let i=0;i<t;i++)e[i]=n(i+1,i,void 0,s)}else if(Sn(t))if(t[Symbol.iterator])e=Array.from(t,(i,l)=>n(i,l,void 0,s));else{const i=Object.keys(t);e=new Array(i.length);for(let l=0,d=i.length;l<d;l++){const c=i[l];e[l]=n(t[c],c,l,s)}}else e=[];return e}const tr=t=>t?Il(t)?Yr(t):tr(t.parent):null,ps=qn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tr(t.parent),$root:t=>tr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fl(t),$forceUpdate:t=>t.f||(t.f=()=>{Gr(t.update)}),$nextTick:t=>t.n||(t.n=Br.bind(t.proxy)),$watch:t=>Sd.bind(t)}),Oe=(t,n)=>t!==xn&&!t.__isScriptSetup&&kn(t,n),ed={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:a,setupState:r,data:e,props:s,accessCache:o,type:i,appContext:l}=t;let d;if(n[0]!=="$"){const p=o[n];if(p!==void 0)switch(p){case 1:return r[n];case 2:return e[n];case 4:return a[n];case 3:return s[n]}else{if(Oe(r,n))return o[n]=1,r[n];if(e!==xn&&kn(e,n))return o[n]=2,e[n];if((d=t.propsOptions[0])&&kn(d,n))return o[n]=3,s[n];if(a!==xn&&kn(a,n))return o[n]=4,a[n];ar&&(o[n]=0)}}const c=ps[n];let u,h;if(c)return n==="$attrs"&&Bn(t.attrs,"get",""),c(t);if((u=i.__cssModules)&&(u=u[n]))return u;if(a!==xn&&kn(a,n))return o[n]=4,a[n];if(h=l.config.globalProperties,kn(h,n))return h[n]},set({_:t},n,a){const{data:r,setupState:e,ctx:s}=t;return Oe(e,n)?(e[n]=a,!0):r!==xn&&kn(r,n)?(r[n]=a,!0):kn(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(s[n]=a,!0)},has({_:{data:t,setupState:n,accessCache:a,ctx:r,appContext:e,propsOptions:s}},o){let i;return!!a[o]||t!==xn&&kn(t,o)||Oe(n,o)||(i=s[0])&&kn(i,o)||kn(r,o)||kn(ps,o)||kn(e.config.globalProperties,o)},defineProperty(t,n,a){return a.get!=null?t._.accessCache[n]=0:kn(a,"value")&&this.set(t,n,a.value,null),Reflect.defineProperty(t,n,a)}};function So(t){return en(t)?t.reduce((n,a)=>(n[a]=null,n),{}):t}let ar=!0;function rd(t){const n=fl(t),a=t.proxy,r=t.ctx;ar=!1,n.beforeCreate&&jo(n.beforeCreate,t,"bc");const{data:e,computed:s,methods:o,watch:i,provide:l,inject:d,created:c,beforeMount:u,mounted:h,beforeUpdate:p,updated:g,activated:f,deactivated:m,beforeDestroy:v,beforeUnmount:b,destroyed:_,unmounted:S,render:k,renderTracked:x,renderTriggered:w,errorCaptured:y,serverPrefetch:j,expose:T,inheritAttrs:P,components:C,directives:A,filters:I}=n;if(d&&od(d,r,null),o)for(const L in o){const V=o[L];rn(V)&&(r[L]=V.bind(a))}if(e){const L=e.call(a,a);Sn(L)&&(t.data=ke(L))}if(ar=!0,s)for(const L in s){const V=s[L],nn=rn(V)?V.bind(a,a):rn(V.get)?V.get.bind(a,a):At,on=!rn(V)&&rn(V.set)?V.set.bind(a):At,pn=Kn({get:nn,set:on});Object.defineProperty(r,L,{enumerable:!0,configurable:!0,get:()=>pn.value,set:sn=>pn.value=sn})}if(i)for(const L in i)ul(i[L],r,a,L);if(l){const L=rn(l)?l.call(a):l;Reflect.ownKeys(L).forEach(V=>{Bs(V,L[V])})}c&&jo(c,t,"c");function G(L,V){en(V)?V.forEach(nn=>L(nn.bind(a))):V&&L(V.bind(a))}if(G(Yc,u),G(As,h),G($c,p),G(Kc,g),G(Vc,f),G(Hc,m),G(Jc,y),G(Qc,x),G(Zc,w),G(Wr,b),G(Nr,S),G(Xc,j),en(T))if(T.length){const L=t.exposed||(t.exposed={});T.forEach(V=>{Object.defineProperty(L,V,{get:()=>a[V],set:nn=>a[V]=nn})})}else t.exposed||(t.exposed={});k&&t.render===At&&(t.render=k),P!=null&&(t.inheritAttrs=P),C&&(t.components=C),A&&(t.directives=A),j&&pl(t)}function od(t,n,a=At){en(t)&&(t=sr(t));for(const r in t){const e=t[r];let s;Sn(e)?"default"in e?s=xt(e.from||r,e.default,!0):s=xt(e.from||r):s=xt(e),Vn(s)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):n[r]=s}}function jo(t,n,a){zt(en(t)?t.map(r=>r.bind(n.proxy)):t.bind(n.proxy),n,a)}function ul(t,n,a,r){let e=r.includes(".")?Cl(a,r):()=>a[r];if(Rn(t)){const s=n[t];rn(s)&&Gs(e,s)}else if(rn(t))Gs(e,t.bind(a));else if(Sn(t))if(en(t))t.forEach(s=>ul(s,n,a,r));else{const s=rn(t.handler)?t.handler.bind(a):n[t.handler];rn(s)&&Gs(e,s,t)}}function fl(t){const n=t.type,{mixins:a,extends:r}=n,{mixins:e,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,i=s.get(n);let l;return i?l=i:!e.length&&!a&&!r?l=n:(l={},e.length&&e.forEach(d=>te(l,d,o,!0)),te(l,n,o)),Sn(n)&&s.set(n,l),l}function te(t,n,a,r=!1){const{mixins:e,extends:s}=n;s&&te(t,s,a,!0),e&&e.forEach(o=>te(t,o,a,!0));for(const o in n)if(!(r&&o==="expose")){const i=id[o]||a&&a[o];t[o]=i?i(t[o],n[o]):n[o]}return t}const id={data:Co,props:To,emits:To,methods:as,computed:as,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:as,directives:as,watch:pd,provide:Co,inject:ld};function Co(t,n){return n?t?function(){return qn(rn(t)?t.call(this,this):t,rn(n)?n.call(this,this):n)}:n:t}function ld(t,n){return as(sr(t),sr(n))}function sr(t){if(en(t)){const n={};for(let a=0;a<t.length;a++)n[t[a]]=t[a];return n}return t}function Yn(t,n){return t?[...new Set([].concat(t,n))]:n}function as(t,n){return t?qn(Object.create(null),t,n):n}function To(t,n){return t?en(t)&&en(n)?[...new Set([...t,...n])]:qn(Object.create(null),So(t),So(n??{})):n}function pd(t,n){if(!t)return n;if(!n)return t;const a=qn(Object.create(null),t);for(const r in n)a[r]=Yn(t[r],n[r]);return a}function hl(){return{app:null,config:{isNativeTag:Jp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cd=0;function dd(t,n){return function(r,e=null){rn(r)||(r=qn({},r)),e!=null&&!Sn(e)&&(e=null);const s=hl(),o=new WeakSet,i=[];let l=!1;const d=s.app={_uid:cd++,_component:r,_props:e,_container:null,_context:s,_instance:null,version:qd,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&rn(c.install)?(o.add(c),c.install(d,...u)):rn(c)&&(o.add(c),c(d,...u))),d},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),d},component(c,u){return u?(s.components[c]=u,d):s.components[c]},directive(c,u){return u?(s.directives[c]=u,d):s.directives[c]},mount(c,u,h){if(!l){const p=d._ceVNode||wn(r,e);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,c,h),l=!0,d._container=c,c.__vue_app__=d,Yr(p.component)}},onUnmount(c){i.push(c)},unmount(){l&&(zt(i,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(c,u){return s.provides[c]=u,d},runWithContext(c){const u=Da;Da=d;try{return c()}finally{Da=u}}};return d}}let Da=null;function Bs(t,n){if(Un){let a=Un.provides;const r=Un.parent&&Un.parent.provides;r===a&&(a=Un.provides=Object.create(r)),a[t]=n}}function xt(t,n,a=!1){const r=Un||vt;if(r||Da){let e=Da?Da._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(e&&t in e)return e[t];if(arguments.length>1)return a&&rn(n)?n.call(r&&r.proxy):n}}const gl={},ml=()=>Object.create(gl),kl=t=>Object.getPrototypeOf(t)===gl;function ud(t,n,a,r=!1){const e={},s=ml();t.propsDefaults=Object.create(null),vl(t,n,e,s);for(const o in t.propsOptions[0])o in e||(e[o]=void 0);a?t.props=r?e:Ji(e):t.type.props?t.props=e:t.props=s,t.attrs=s}function fd(t,n,a,r){const{props:e,attrs:s,vnode:{patchFlag:o}}=t,i=mn(e),[l]=t.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let u=0;u<c.length;u++){let h=c[u];if(be(t.emitsOptions,h))continue;const p=n[h];if(l)if(kn(s,h))p!==s[h]&&(s[h]=p,d=!0);else{const g=kt(h);e[g]=er(l,i,g,p,t,!1)}else p!==s[h]&&(s[h]=p,d=!0)}}}else{vl(t,n,e,s)&&(d=!0);let c;for(const u in i)(!n||!kn(n,u)&&((c=ja(u))===u||!kn(n,c)))&&(l?a&&(a[u]!==void 0||a[c]!==void 0)&&(e[u]=er(l,i,u,void 0,t,!0)):delete e[u]);if(s!==i)for(const u in s)(!n||!kn(n,u))&&(delete s[u],d=!0)}d&&Wt(t.attrs,"set","")}function vl(t,n,a,r){const[e,s]=t.propsOptions;let o=!1,i;if(n)for(let l in n){if(rs(l))continue;const d=n[l];let c;e&&kn(e,c=kt(l))?!s||!s.includes(c)?a[c]=d:(i||(i={}))[c]=d:be(t.emitsOptions,l)||(!(l in r)||d!==r[l])&&(r[l]=d,o=!0)}if(s){const l=mn(a),d=i||xn;for(let c=0;c<s.length;c++){const u=s[c];a[u]=er(e,l,u,d[u],t,!kn(d,u))}}return o}function er(t,n,a,r,e,s){const o=t[a];if(o!=null){const i=kn(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rn(l)){const{propsDefaults:d}=e;if(a in d)r=d[a];else{const c=Is(e);r=d[a]=l.call(null,n),c()}}else r=l;e.ce&&e.ce._setProp(a,r)}o[0]&&(s&&!i?r=!1:o[1]&&(r===""||r===ja(a))&&(r=!0))}return r}const hd=new WeakMap;function yl(t,n,a=!1){const r=a?hd:n.propsCache,e=r.get(t);if(e)return e;const s=t.props,o={},i=[];let l=!1;if(!rn(t)){const c=u=>{l=!0;const[h,p]=yl(u,n,!0);qn(o,h),p&&i.push(...p)};!a&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return Sn(t)&&r.set(t,Ia),Ia;if(en(s))for(let c=0;c<s.length;c++){const u=kt(s[c]);Po(u)&&(o[u]=xn)}else if(s)for(const c in s){const u=kt(c);if(Po(u)){const h=s[c],p=o[u]=en(h)||rn(h)?{type:h}:qn({},h),g=p.type;let f=!1,m=!0;if(en(g))for(let v=0;v<g.length;++v){const b=g[v],_=rn(b)&&b.name;if(_==="Boolean"){f=!0;break}else _==="String"&&(m=!1)}else f=rn(g)&&g.name==="Boolean";p[0]=f,p[1]=m,(f||kn(p,"default"))&&i.push(u)}}const d=[o,i];return Sn(t)&&r.set(t,d),d}function Po(t){return t[0]!=="$"&&!rs(t)}const Vr=t=>t[0]==="_"||t==="$stable",Hr=t=>en(t)?t.map(Mt):[Mt(t)],gd=(t,n,a)=>{if(n._n)return n;const r=La((...e)=>Hr(n(...e)),a);return r._c=!1,r},bl=(t,n,a)=>{const r=t._ctx;for(const e in t){if(Vr(e))continue;const s=t[e];if(rn(s))n[e]=gd(e,s,r);else if(s!=null){const o=Hr(s);n[e]=()=>o}}},xl=(t,n)=>{const a=Hr(n);t.slots.default=()=>a},wl=(t,n,a)=>{for(const r in n)(a||!Vr(r))&&(t[r]=n[r])},md=(t,n,a)=>{const r=t.slots=ml();if(t.vnode.shapeFlag&32){const e=n._;e?(wl(r,n,a),a&&Oi(r,"_",e,!0)):bl(n,r)}else n&&xl(t,n)},kd=(t,n,a)=>{const{vnode:r,slots:e}=t;let s=!0,o=xn;if(r.shapeFlag&32){const i=n._;i?a&&i===1?s=!1:wl(e,n,a):(s=!n.$stable,bl(n,e)),o=n}else n&&(xl(t,n),o={default:1});if(s)for(const i in e)!Vr(i)&&o[i]==null&&delete e[i]},et=Rd;function vd(t){return yd(t)}function yd(t,n){const a=ge();a.__VUE__=!0;const{insert:r,remove:e,patchProp:s,createElement:o,createText:i,createComment:l,setText:d,setElementText:c,parentNode:u,nextSibling:h,setScopeId:p=At,insertStaticContent:g}=t,f=(M,E,R,O=null,D=null,B=null,$=void 0,H=null,q=!!E.dynamicChildren)=>{if(M===E)return;M&&!Ja(M,E)&&(O=z(M),sn(M,D,B,!0),M=null),E.patchFlag===-2&&(q=!1,E.dynamicChildren=null);const{type:W,ref:J,shapeFlag:K}=E;switch(W){case xe:m(M,E,R,O);break;case ia:v(M,E,R,O);break;case Us:M==null&&b(E,R,O,$);break;case Gn:C(M,E,R,O,D,B,$,H,q);break;default:K&1?k(M,E,R,O,D,B,$,H,q):K&6?A(M,E,R,O,D,B,$,H,q):(K&64||K&128)&&W.process(M,E,R,O,D,B,$,H,q,Y)}J!=null&&D&&ne(J,M&&M.ref,B,E||M,!E)},m=(M,E,R,O)=>{if(M==null)r(E.el=i(E.children),R,O);else{const D=E.el=M.el;E.children!==M.children&&d(D,E.children)}},v=(M,E,R,O)=>{M==null?r(E.el=l(E.children||""),R,O):E.el=M.el},b=(M,E,R,O)=>{[M.el,M.anchor]=g(M.children,E,R,O,M.el,M.anchor)},_=({el:M,anchor:E},R,O)=>{let D;for(;M&&M!==E;)D=h(M),r(M,R,O),M=D;r(E,R,O)},S=({el:M,anchor:E})=>{let R;for(;M&&M!==E;)R=h(M),e(M),M=R;e(E)},k=(M,E,R,O,D,B,$,H,q)=>{E.type==="svg"?$="svg":E.type==="math"&&($="mathml"),M==null?x(E,R,O,D,B,$,H,q):j(M,E,D,B,$,H,q)},x=(M,E,R,O,D,B,$,H)=>{let q,W;const{props:J,shapeFlag:K,transition:X,dirs:tn}=M;if(q=M.el=o(M.type,B,J&&J.is,J),K&8?c(q,M.children):K&16&&y(M.children,q,null,O,D,Fe(M,B),$,H),tn&&ua(M,null,O,"created"),w(q,M,M.scopeId,$,O),J){for(const vn in J)vn!=="value"&&!rs(vn)&&s(q,vn,null,J[vn],B,O);"value"in J&&s(q,"value",null,J.value,B),(W=J.onVnodeBeforeMount)&&Ct(W,O,M)}tn&&ua(M,null,O,"beforeMount");const ln=bd(D,X);ln&&X.beforeEnter(q),r(q,E,R),((W=J&&J.onVnodeMounted)||ln||tn)&&et(()=>{W&&Ct(W,O,M),ln&&X.enter(q),tn&&ua(M,null,O,"mounted")},D)},w=(M,E,R,O,D)=>{if(R&&p(M,R),O)for(let B=0;B<O.length;B++)p(M,O[B]);if(D){let B=D.subTree;if(E===B||Pl(B.type)&&(B.ssContent===E||B.ssFallback===E)){const $=D.vnode;w(M,$,$.scopeId,$.slotScopeIds,D.parent)}}},y=(M,E,R,O,D,B,$,H,q=0)=>{for(let W=q;W<M.length;W++){const J=M[W]=H?Zt(M[W]):Mt(M[W]);f(null,J,E,R,O,D,B,$,H)}},j=(M,E,R,O,D,B,$)=>{const H=E.el=M.el;let{patchFlag:q,dynamicChildren:W,dirs:J}=E;q|=M.patchFlag&16;const K=M.props||xn,X=E.props||xn;let tn;if(R&&fa(R,!1),(tn=X.onVnodeBeforeUpdate)&&Ct(tn,R,E,M),J&&ua(E,M,R,"beforeUpdate"),R&&fa(R,!0),(K.innerHTML&&X.innerHTML==null||K.textContent&&X.textContent==null)&&c(H,""),W?T(M.dynamicChildren,W,H,R,O,Fe(E,D),B):$||V(M,E,H,null,R,O,Fe(E,D),B,!1),q>0){if(q&16)P(H,K,X,R,D);else if(q&2&&K.class!==X.class&&s(H,"class",null,X.class,D),q&4&&s(H,"style",K.style,X.style,D),q&8){const ln=E.dynamicProps;for(let vn=0;vn<ln.length;vn++){const hn=ln[vn],In=K[hn],An=X[hn];(An!==In||hn==="value")&&s(H,hn,In,An,D,R)}}q&1&&M.children!==E.children&&c(H,E.children)}else!$&&W==null&&P(H,K,X,R,D);((tn=X.onVnodeUpdated)||J)&&et(()=>{tn&&Ct(tn,R,E,M),J&&ua(E,M,R,"updated")},O)},T=(M,E,R,O,D,B,$)=>{for(let H=0;H<E.length;H++){const q=M[H],W=E[H],J=q.el&&(q.type===Gn||!Ja(q,W)||q.shapeFlag&198)?u(q.el):R;f(q,W,J,null,O,D,B,$,!0)}},P=(M,E,R,O,D)=>{if(E!==R){if(E!==xn)for(const B in E)!rs(B)&&!(B in R)&&s(M,B,E[B],null,D,O);for(const B in R){if(rs(B))continue;const $=R[B],H=E[B];$!==H&&B!=="value"&&s(M,B,H,$,D,O)}"value"in R&&s(M,"value",E.value,R.value,D)}},C=(M,E,R,O,D,B,$,H,q)=>{const W=E.el=M?M.el:i(""),J=E.anchor=M?M.anchor:i("");let{patchFlag:K,dynamicChildren:X,slotScopeIds:tn}=E;tn&&(H=H?H.concat(tn):tn),M==null?(r(W,R,O),r(J,R,O),y(E.children||[],R,J,D,B,$,H,q)):K>0&&K&64&&X&&M.dynamicChildren?(T(M.dynamicChildren,X,R,D,B,$,H),(E.key!=null||D&&E===D.subTree)&&_l(M,E,!0)):V(M,E,R,J,D,B,$,H,q)},A=(M,E,R,O,D,B,$,H,q)=>{E.slotScopeIds=H,M==null?E.shapeFlag&512?D.ctx.activate(E,R,O,$,q):I(E,R,O,D,B,$,q):F(M,E,q)},I=(M,E,R,O,D,B,$)=>{const H=M.component=Bd(M,O,D);if(cl(M)&&(H.ctx.renderer=Y),Gd(H,!1,$),H.asyncDep){if(D&&D.registerDep(H,G,$),!M.el){const q=H.subTree=wn(ia);v(null,q,E,R)}}else G(H,M,E,R,D,B,$)},F=(M,E,R)=>{const O=E.component=M.component;if(Md(M,E,R))if(O.asyncDep&&!O.asyncResolved){L(O,E,R);return}else O.next=E,O.update();else E.el=M.el,O.vnode=E},G=(M,E,R,O,D,B,$)=>{const H=()=>{if(M.isMounted){let{next:K,bu:X,u:tn,parent:ln,vnode:vn}=M;{const St=Sl(M);if(St){K&&(K.el=vn.el,L(M,K,$)),St.asyncDep.then(()=>{M.isUnmounted||H()});return}}let hn=K,In;fa(M,!1),K?(K.el=vn.el,L(M,K,$)):K=vn,X&&Ee(X),(In=K.props&&K.props.onVnodeBeforeUpdate)&&Ct(In,ln,K,vn),fa(M,!0);const An=Eo(M),_t=M.subTree;M.subTree=An,f(_t,An,u(_t.el),z(_t),M,D,B),K.el=An.el,hn===null&&Ed(M,An.el),tn&&et(tn,D),(In=K.props&&K.props.onVnodeUpdated)&&et(()=>Ct(In,ln,K,vn),D)}else{let K;const{el:X,props:tn}=E,{bm:ln,m:vn,parent:hn,root:In,type:An}=M,_t=ls(E);fa(M,!1),ln&&Ee(ln),!_t&&(K=tn&&tn.onVnodeBeforeMount)&&Ct(K,hn,E),fa(M,!0);{In.ce&&In.ce._injectChildStyle(An);const St=M.subTree=Eo(M);f(null,St,R,O,M,D,B),E.el=St.el}if(vn&&et(vn,D),!_t&&(K=tn&&tn.onVnodeMounted)){const St=E;et(()=>Ct(K,hn,St),D)}(E.shapeFlag&256||hn&&ls(hn.vnode)&&hn.vnode.shapeFlag&256)&&M.a&&et(M.a,D),M.isMounted=!0,E=R=O=null}};M.scope.on();const q=M.effect=new Bi(H);M.scope.off();const W=M.update=q.run.bind(q),J=M.job=q.runIfDirty.bind(q);J.i=M,J.id=M.uid,q.scheduler=()=>Gr(J),fa(M,!0),W()},L=(M,E,R)=>{E.component=M;const O=M.vnode.props;M.vnode=E,M.next=null,fd(M,E.props,O,R),kd(M,E.children,R),Vt(),wo(M),Ht()},V=(M,E,R,O,D,B,$,H,q=!1)=>{const W=M&&M.children,J=M?M.shapeFlag:0,K=E.children,{patchFlag:X,shapeFlag:tn}=E;if(X>0){if(X&128){on(W,K,R,O,D,B,$,H,q);return}else if(X&256){nn(W,K,R,O,D,B,$,H,q);return}}tn&8?(J&16&&Q(W,D,B),K!==W&&c(R,K)):J&16?tn&16?on(W,K,R,O,D,B,$,H,q):Q(W,D,B,!0):(J&8&&c(R,""),tn&16&&y(K,R,O,D,B,$,H,q))},nn=(M,E,R,O,D,B,$,H,q)=>{M=M||Ia,E=E||Ia;const W=M.length,J=E.length,K=Math.min(W,J);let X;for(X=0;X<K;X++){const tn=E[X]=q?Zt(E[X]):Mt(E[X]);f(M[X],tn,R,null,D,B,$,H,q)}W>J?Q(M,D,B,!0,!1,K):y(E,R,O,D,B,$,H,q,K)},on=(M,E,R,O,D,B,$,H,q)=>{let W=0;const J=E.length;let K=M.length-1,X=J-1;for(;W<=K&&W<=X;){const tn=M[W],ln=E[W]=q?Zt(E[W]):Mt(E[W]);if(Ja(tn,ln))f(tn,ln,R,null,D,B,$,H,q);else break;W++}for(;W<=K&&W<=X;){const tn=M[K],ln=E[X]=q?Zt(E[X]):Mt(E[X]);if(Ja(tn,ln))f(tn,ln,R,null,D,B,$,H,q);else break;K--,X--}if(W>K){if(W<=X){const tn=X+1,ln=tn<J?E[tn].el:O;for(;W<=X;)f(null,E[W]=q?Zt(E[W]):Mt(E[W]),R,ln,D,B,$,H,q),W++}}else if(W>X)for(;W<=K;)sn(M[W],D,B,!0),W++;else{const tn=W,ln=W,vn=new Map;for(W=ln;W<=X;W++){const st=E[W]=q?Zt(E[W]):Mt(E[W]);st.key!=null&&vn.set(st.key,W)}let hn,In=0;const An=X-ln+1;let _t=!1,St=0;const Za=new Array(An);for(W=0;W<An;W++)Za[W]=0;for(W=tn;W<=K;W++){const st=M[W];if(In>=An){sn(st,D,B,!0);continue}let jt;if(st.key!=null)jt=vn.get(st.key);else for(hn=ln;hn<=X;hn++)if(Za[hn-ln]===0&&Ja(st,E[hn])){jt=hn;break}jt===void 0?sn(st,D,B,!0):(Za[jt-ln]=W+1,jt>=St?St=jt:_t=!0,f(st,E[jt],R,null,D,B,$,H,q),In++)}const ko=_t?xd(Za):Ia;for(hn=ko.length-1,W=An-1;W>=0;W--){const st=ln+W,jt=E[st],vo=st+1<J?E[st+1].el:O;Za[W]===0?f(null,jt,R,vo,D,B,$,H,q):_t&&(hn<0||W!==ko[hn]?pn(jt,R,vo,2):hn--)}}},pn=(M,E,R,O,D=null)=>{const{el:B,type:$,transition:H,children:q,shapeFlag:W}=M;if(W&6){pn(M.component.subTree,E,R,O);return}if(W&128){M.suspense.move(E,R,O);return}if(W&64){$.move(M,E,R,Y);return}if($===Gn){r(B,E,R);for(let K=0;K<q.length;K++)pn(q[K],E,R,O);r(M.anchor,E,R);return}if($===Us){_(M,E,R);return}if(O!==2&&W&1&&H)if(O===0)H.beforeEnter(B),r(B,E,R),et(()=>H.enter(B),D);else{const{leave:K,delayLeave:X,afterLeave:tn}=H,ln=()=>{M.ctx.isUnmounted?e(B):r(B,E,R)},vn=()=>{K(B,()=>{ln(),tn&&tn()})};X?X(B,ln,vn):vn()}else r(B,E,R)},sn=(M,E,R,O=!1,D=!1)=>{const{type:B,props:$,ref:H,children:q,dynamicChildren:W,shapeFlag:J,patchFlag:K,dirs:X,cacheIndex:tn}=M;if(K===-2&&(D=!1),H!=null&&(Vt(),ne(H,null,R,M,!0),Ht()),tn!=null&&(E.renderCache[tn]=void 0),J&256){E.ctx.deactivate(M);return}const ln=J&1&&X,vn=!ls(M);let hn;if(vn&&(hn=$&&$.onVnodeBeforeUnmount)&&Ct(hn,E,M),J&6)un(M.component,R,O);else{if(J&128){M.suspense.unmount(R,O);return}ln&&ua(M,null,E,"beforeUnmount"),J&64?M.type.remove(M,E,R,Y,O):W&&!W.hasOnce&&(B!==Gn||K>0&&K&64)?Q(W,E,R,!1,!0):(B===Gn&&K&384||!D&&J&16)&&Q(q,E,R),O&&dn(M)}(vn&&(hn=$&&$.onVnodeUnmounted)||ln)&&et(()=>{hn&&Ct(hn,E,M),ln&&ua(M,null,E,"unmounted")},R)},dn=M=>{const{type:E,el:R,anchor:O,transition:D}=M;if(E===Gn){cn(R,O);return}if(E===Us){S(M);return}const B=()=>{e(R),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(M.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:H}=D,q=()=>$(R,B);H?H(M.el,B,q):q()}else B()},cn=(M,E)=>{let R;for(;M!==E;)R=h(M),e(M),M=R;e(E)},un=(M,E,R)=>{const{bum:O,scope:D,job:B,subTree:$,um:H,m:q,a:W,parent:J,slots:{__:K}}=M;Mo(q),Mo(W),O&&Ee(O),J&&en(K)&&K.forEach(X=>{J.renderCache[X]=void 0}),D.stop(),B&&(B.flags|=8,sn($,M,E,R)),H&&et(H,E),et(()=>{M.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Q=(M,E,R,O=!1,D=!1,B=0)=>{for(let $=B;$<M.length;$++)sn(M[$],E,R,O,D)},z=M=>{if(M.shapeFlag&6)return z(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const E=h(M.anchor||M.el),R=E&&E[Wc];return R?h(R):E};let U=!1;const N=(M,E,R)=>{M==null?E._vnode&&sn(E._vnode,null,null,!0):f(E._vnode||null,M,E,null,null,null,R),E._vnode=M,U||(U=!0,wo(),rl(),U=!1)},Y={p:f,um:sn,m:pn,r:dn,mt:I,mc:y,pc:V,pbc:T,n:z,o:t};return{render:N,hydrate:void 0,createApp:dd(N)}}function Fe({type:t,props:n},a){return a==="svg"&&t==="foreignObject"||a==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:a}function fa({effect:t,job:n},a){a?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function bd(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function _l(t,n,a=!1){const r=t.children,e=n.children;if(en(r)&&en(e))for(let s=0;s<r.length;s++){const o=r[s];let i=e[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=e[s]=Zt(e[s]),i.el=o.el),!a&&i.patchFlag!==-2&&_l(o,i)),i.type===xe&&(i.el=o.el),i.type===ia&&!i.el&&(i.el=o.el)}}function xd(t){const n=t.slice(),a=[0];let r,e,s,o,i;const l=t.length;for(r=0;r<l;r++){const d=t[r];if(d!==0){if(e=a[a.length-1],t[e]<d){n[r]=e,a.push(r);continue}for(s=0,o=a.length-1;s<o;)i=s+o>>1,t[a[i]]<d?s=i+1:o=i;d<t[a[s]]&&(s>0&&(n[r]=a[s-1]),a[s]=r)}}for(s=a.length,o=a[s-1];s-- >0;)a[s]=o,o=n[o];return a}function Sl(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Sl(n)}function Mo(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const wd=Symbol.for("v-scx"),_d=()=>xt(wd);function Gs(t,n,a){return jl(t,n,a)}function jl(t,n,a=xn){const{immediate:r,deep:e,flush:s,once:o}=a,i=qn({},a),l=n&&r||!n&&s!=="post";let d;if(bs){if(s==="sync"){const p=_d();d=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=At,p.resume=At,p.pause=At,p}}const c=Un;i.call=(p,g,f)=>zt(p,c,g,f);let u=!1;s==="post"?i.scheduler=p=>{et(p,c&&c.suspense)}:s!=="sync"&&(u=!0,i.scheduler=(p,g)=>{g?p():Gr(p)}),i.augmentJob=p=>{n&&(p.flags|=4),u&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=Dc(t,n,i);return bs&&(d?d.push(h):l&&h()),h}function Sd(t,n,a){const r=this.proxy,e=Rn(t)?t.includes(".")?Cl(r,t):()=>r[t]:t.bind(r,r);let s;rn(n)?s=n:(s=n.handler,a=n);const o=Is(this),i=jl(e,s.bind(r),a);return o(),i}function Cl(t,n){const a=n.split(".");return()=>{let r=t;for(let e=0;e<a.length&&r;e++)r=r[a[e]];return r}}const jd=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${kt(n)}Modifiers`]||t[`${ja(n)}Modifiers`];function Cd(t,n,...a){if(t.isUnmounted)return;const r=t.vnode.props||xn;let e=a;const s=n.startsWith("update:"),o=s&&jd(r,n.slice(7));o&&(o.trim&&(e=a.map(c=>Rn(c)?c.trim():c)),o.number&&(e=a.map(ec)));let i,l=r[i=Me(n)]||r[i=Me(kt(n))];!l&&s&&(l=r[i=Me(ja(n))]),l&&zt(l,t,6,e);const d=r[i+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,zt(d,t,6,e)}}function Tl(t,n,a=!1){const r=n.emitsCache,e=r.get(t);if(e!==void 0)return e;const s=t.emits;let o={},i=!1;if(!rn(t)){const l=d=>{const c=Tl(d,n,!0);c&&(i=!0,qn(o,c))};!a&&n.mixins.length&&n.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!i?(Sn(t)&&r.set(t,null),null):(en(s)?s.forEach(l=>o[l]=null):qn(o,s),Sn(t)&&r.set(t,o),o)}function be(t,n){return!t||!de(n)?!1:(n=n.slice(2).replace(/Once$/,""),kn(t,n[0].toLowerCase()+n.slice(1))||kn(t,ja(n))||kn(t,n))}function Eo(t){const{type:n,vnode:a,proxy:r,withProxy:e,propsOptions:[s],slots:o,attrs:i,emit:l,render:d,renderCache:c,props:u,data:h,setupState:p,ctx:g,inheritAttrs:f}=t,m=Js(t);let v,b;try{if(a.shapeFlag&4){const S=e||r,k=S;v=Mt(d.call(k,S,c,u,p,h,g)),b=i}else{const S=n;v=Mt(S.length>1?S(u,{attrs:i,slots:o,emit:l}):S(u,null)),b=n.props?i:Td(i)}}catch(S){cs.length=0,ve(S,t,1),v=wn(ia)}let _=v;if(b&&f!==!1){const S=Object.keys(b),{shapeFlag:k}=_;S.length&&k&7&&(s&&S.some(Tr)&&(b=Pd(b,s)),_=Wa(_,b,!1,!0))}return a.dirs&&(_=Wa(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(a.dirs):a.dirs),a.transition&&Ur(_,a.transition),v=_,Js(m),v}const Td=t=>{let n;for(const a in t)(a==="class"||a==="style"||de(a))&&((n||(n={}))[a]=t[a]);return n},Pd=(t,n)=>{const a={};for(const r in t)(!Tr(r)||!(r.slice(9)in n))&&(a[r]=t[r]);return a};function Md(t,n,a){const{props:r,children:e,component:s}=t,{props:o,children:i,patchFlag:l}=n,d=s.emitsOptions;if(n.dirs||n.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return r?Ro(r,o,d):!!o;if(l&8){const c=n.dynamicProps;for(let u=0;u<c.length;u++){const h=c[u];if(o[h]!==r[h]&&!be(d,h))return!0}}}else return(e||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?Ro(r,o,d):!0:!!o;return!1}function Ro(t,n,a){const r=Object.keys(n);if(r.length!==Object.keys(t).length)return!0;for(let e=0;e<r.length;e++){const s=r[e];if(n[s]!==t[s]&&!be(a,s))return!0}return!1}function Ed({vnode:t,parent:n},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=n.vnode).el=a,n=n.parent;else break}}const Pl=t=>t.__isSuspense;function Rd(t,n){n&&n.pendingBranch?en(t)?n.effects.push(...t):n.effects.push(t):Uc(t)}const Gn=Symbol.for("v-fgt"),xe=Symbol.for("v-txt"),ia=Symbol.for("v-cmt"),Us=Symbol.for("v-stc"),cs=[];let it=null;function zn(t=!1){cs.push(it=t?null:[])}function Ad(){cs.pop(),it=cs[cs.length-1]||null}let ys=1;function Ao(t,n=!1){ys+=t,t<0&&it&&n&&(it.hasOnce=!0)}function Ml(t){return t.dynamicChildren=ys>0?it||Ia:null,Ad(),ys>0&&it&&it.push(t),t}function Dn(t,n,a,r,e,s){return Ml(Z(t,n,a,r,e,s,!0))}function El(t,n,a,r,e){return Ml(wn(t,n,a,r,e,!0))}function ae(t){return t?t.__v_isVNode===!0:!1}function Ja(t,n){return t.type===n.type&&t.key===n.key}const Rl=({key:t})=>t??null,Ws=({ref:t,ref_key:n,ref_for:a})=>(typeof t=="number"&&(t=""+t),t!=null?Rn(t)||Vn(t)||rn(t)?{i:vt,r:t,k:n,f:!!a}:t:null);function Z(t,n=null,a=null,r=0,e=null,s=t===Gn?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Rl(n),ref:n&&Ws(n),scopeId:il,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:e,dynamicChildren:null,appContext:null,ctx:vt};return i?(qr(l,a),s&128&&t.normalize(l)):a&&(l.shapeFlag|=Rn(a)?8:16),ys>0&&!o&&it&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&it.push(l),l}const wn=Id;function Id(t,n=null,a=null,r=0,e=null,s=!1){if((!t||t===ad)&&(t=ia),ae(t)){const i=Wa(t,n,!0);return a&&qr(i,a),ys>0&&!s&&it&&(i.shapeFlag&6?it[it.indexOf(t)]=i:it.push(i)),i.patchFlag=-2,i}if(Hd(t)&&(t=t.__vccOpts),n){n=zd(n);let{class:i,style:l}=n;i&&!Rn(i)&&(n.class=Rr(i)),Sn(l)&&(Dr(l)&&!en(l)&&(l=qn({},l)),n.style=Er(l))}const o=Rn(t)?1:Pl(t)?128:Nc(t)?64:Sn(t)?4:rn(t)?2:0;return Z(t,n,a,r,e,o,s,!0)}function zd(t){return t?Dr(t)||kl(t)?qn({},t):t:null}function Wa(t,n,a=!1,r=!1){const{props:e,ref:s,patchFlag:o,children:i,transition:l}=t,d=n?Fd(e||{},n):e,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Rl(d),ref:n&&n.ref?a&&s?en(s)?s.concat(Ws(n)):[s,Ws(n)]:Ws(n):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Gn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wa(t.ssContent),ssFallback:t.ssFallback&&Wa(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ur(c,l.clone(c)),c}function Al(t=" ",n=0){return wn(xe,null,t,n)}function rr(t,n){const a=wn(Us,null,t);return a.staticCount=n,a}function Od(t="",n=!1){return n?(zn(),El(ia,null,t)):wn(ia,null,t)}function Mt(t){return t==null||typeof t=="boolean"?wn(ia):en(t)?wn(Gn,null,t.slice()):ae(t)?Zt(t):wn(xe,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wa(t)}function qr(t,n){let a=0;const{shapeFlag:r}=t;if(n==null)n=null;else if(en(n))a=16;else if(typeof n=="object")if(r&65){const e=n.default;e&&(e._c&&(e._d=!1),qr(t,e()),e._c&&(e._d=!0));return}else{a=32;const e=n._;!e&&!kl(n)?n._ctx=vt:e===3&&vt&&(vt.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else rn(n)?(n={default:n,_ctx:vt},a=32):(n=String(n),r&64?(a=16,n=[Al(n)]):a=8);t.children=n,t.shapeFlag|=a}function Fd(...t){const n={};for(let a=0;a<t.length;a++){const r=t[a];for(const e in r)if(e==="class")n.class!==r.class&&(n.class=Rr([n.class,r.class]));else if(e==="style")n.style=Er([n.style,r.style]);else if(de(e)){const s=n[e],o=r[e];o&&s!==o&&!(en(s)&&s.includes(o))&&(n[e]=s?[].concat(s,o):o)}else e!==""&&(n[e]=r[e])}return n}function Ct(t,n,a,r=null){zt(t,n,7,[a,r])}const Ld=hl();let Dd=0;function Bd(t,n,a){const r=t.type,e=(n?n.appContext:t.appContext)||Ld,s={uid:Dd++,vnode:t,type:r,parent:n,appContext:e,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(e.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yl(r,e),emitsOptions:Tl(r,e),emit:null,emitted:null,propsDefaults:xn,inheritAttrs:r.inheritAttrs,ctx:xn,data:xn,props:xn,attrs:xn,slots:xn,refs:xn,setupState:xn,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Cd.bind(null,s),t.ce&&t.ce(s),s}let Un=null,se,or;{const t=ge(),n=(a,r)=>{let e;return(e=t[a])||(e=t[a]=[]),e.push(r),s=>{e.length>1?e.forEach(o=>o(s)):e[0](s)}};se=n("__VUE_INSTANCE_SETTERS__",a=>Un=a),or=n("__VUE_SSR_SETTERS__",a=>bs=a)}const Is=t=>{const n=Un;return se(t),t.scope.on(),()=>{t.scope.off(),se(n)}},Io=()=>{Un&&Un.scope.off(),se(null)};function Il(t){return t.vnode.shapeFlag&4}let bs=!1;function Gd(t,n=!1,a=!1){n&&or(n);const{props:r,children:e}=t.vnode,s=Il(t);ud(t,r,s,n),md(t,e,a||n);const o=s?Ud(t,n):void 0;return n&&or(!1),o}function Ud(t,n){const a=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ed);const{setup:r}=a;if(r){Vt();const e=t.setupContext=r.length>1?Nd(t):null,s=Is(t),o=Rs(r,t,0,[t.props,e]),i=Ai(o);if(Ht(),s(),(i||t.sp)&&!ls(t)&&pl(t),i){if(o.then(Io,Io),n)return o.then(l=>{zo(t,l)}).catch(l=>{ve(l,t,0)});t.asyncDep=o}else zo(t,o)}else zl(t)}function zo(t,n,a){rn(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Sn(n)&&(t.setupState=al(n)),zl(t)}function zl(t,n,a){const r=t.type;t.render||(t.render=r.render||At);{const e=Is(t);Vt();try{rd(t)}finally{Ht(),e()}}}const Wd={get(t,n){return Bn(t,"get",""),t[n]}};function Nd(t){const n=a=>{t.exposed=a||{}};return{attrs:new Proxy(t.attrs,Wd),slots:t.slots,emit:t.emit,expose:n}}function Yr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(al(Rc(t.exposed)),{get(n,a){if(a in n)return n[a];if(a in ps)return ps[a](t)},has(n,a){return a in n||a in ps}})):t.proxy}function Vd(t,n=!0){return rn(t)?t.displayName||t.name:t.name||n&&t.__name}function Hd(t){return rn(t)&&"__vccOpts"in t}const Kn=(t,n)=>Fc(t,n,bs);function Ol(t,n,a){const r=arguments.length;return r===2?Sn(n)&&!en(n)?ae(n)?wn(t,null,[n]):wn(t,n):wn(t,null,n):(r>3?a=Array.prototype.slice.call(arguments,2):r===3&&ae(a)&&(a=[a]),wn(t,n,a))}const qd="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ir;const Oo=typeof window<"u"&&window.trustedTypes;if(Oo)try{ir=Oo.createPolicy("vue",{createHTML:t=>t})}catch{}const Fl=ir?t=>ir.createHTML(t):t=>t,Yd="http://www.w3.org/2000/svg",$d="http://www.w3.org/1998/Math/MathML",Dt=typeof document<"u"?document:null,Fo=Dt&&Dt.createElement("template"),Kd={insert:(t,n,a)=>{n.insertBefore(t,a||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,a,r)=>{const e=n==="svg"?Dt.createElementNS(Yd,t):n==="mathml"?Dt.createElementNS($d,t):a?Dt.createElement(t,{is:a}):Dt.createElement(t);return t==="select"&&r&&r.multiple!=null&&e.setAttribute("multiple",r.multiple),e},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,a,r,e,s){const o=a?a.previousSibling:n.lastChild;if(e&&(e===s||e.nextSibling))for(;n.insertBefore(e.cloneNode(!0),a),!(e===s||!(e=e.nextSibling)););else{Fo.innerHTML=Fl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const i=Fo.content;if(r==="svg"||r==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,a)}return[o?o.nextSibling:n.firstChild,a?a.previousSibling:n.lastChild]}},Xd=Symbol("_vtc");function Zd(t,n,a){const r=t[Xd];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?t.removeAttribute("class"):a?t.setAttribute("class",n):t.className=n}const Lo=Symbol("_vod"),Qd=Symbol("_vsh"),Jd=Symbol(""),nu=/(^|;)\s*display\s*:/;function tu(t,n,a){const r=t.style,e=Rn(a);let s=!1;if(a&&!e){if(n)if(Rn(n))for(const o of n.split(";")){const i=o.slice(0,o.indexOf(":")).trim();a[i]==null&&Ns(r,i,"")}else for(const o in n)a[o]==null&&Ns(r,o,"");for(const o in a)o==="display"&&(s=!0),Ns(r,o,a[o])}else if(e){if(n!==a){const o=r[Jd];o&&(a+=";"+o),r.cssText=a,s=nu.test(a)}}else n&&t.removeAttribute("style");Lo in t&&(t[Lo]=s?r.display:"",t[Qd]&&(r.display="none"))}const Do=/\s*!important$/;function Ns(t,n,a){if(en(a))a.forEach(r=>Ns(t,n,r));else if(a==null&&(a=""),n.startsWith("--"))t.setProperty(n,a);else{const r=au(t,n);Do.test(a)?t.setProperty(ja(r),a.replace(Do,""),"important"):t[r]=a}}const Bo=["Webkit","Moz","ms"],Le={};function au(t,n){const a=Le[n];if(a)return a;let r=kt(n);if(r!=="filter"&&r in t)return Le[n]=r;r=he(r);for(let e=0;e<Bo.length;e++){const s=Bo[e]+r;if(s in t)return Le[n]=s}return n}const Go="http://www.w3.org/1999/xlink";function Uo(t,n,a,r,e,s=cc(n)){r&&n.startsWith("xlink:")?a==null?t.removeAttributeNS(Go,n.slice(6,n.length)):t.setAttributeNS(Go,n,a):a==null||s&&!Fi(a)?t.removeAttribute(n):t.setAttribute(n,s?"":ca(a)?String(a):a)}function Wo(t,n,a,r,e){if(n==="innerHTML"||n==="textContent"){a!=null&&(t[n]=n==="innerHTML"?Fl(a):a);return}const s=t.tagName;if(n==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?t.getAttribute("value")||"":t.value,l=a==null?t.type==="checkbox"?"on":"":String(a);(i!==l||!("_value"in t))&&(t.value=l),a==null&&t.removeAttribute(n),t._value=a;return}let o=!1;if(a===""||a==null){const i=typeof t[n];i==="boolean"?a=Fi(a):a==null&&i==="string"?(a="",o=!0):i==="number"&&(a=0,o=!0)}try{t[n]=a}catch{}o&&t.removeAttribute(e||n)}function su(t,n,a,r){t.addEventListener(n,a,r)}function eu(t,n,a,r){t.removeEventListener(n,a,r)}const No=Symbol("_vei");function ru(t,n,a,r,e=null){const s=t[No]||(t[No]={}),o=s[n];if(r&&o)o.value=r;else{const[i,l]=ou(n);if(r){const d=s[n]=pu(r,e);su(t,i,d,l)}else o&&(eu(t,i,o,l),s[n]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function ou(t){let n;if(Vo.test(t)){n={};let r;for(;r=t.match(Vo);)t=t.slice(0,t.length-r[0].length),n[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ja(t.slice(2)),n]}let De=0;const iu=Promise.resolve(),lu=()=>De||(iu.then(()=>De=0),De=Date.now());function pu(t,n){const a=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=a.attached)return;zt(cu(r,a.value),n,5,[r])};return a.value=t,a.attached=lu(),a}function cu(t,n){if(en(n)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},n.map(r=>e=>!e._stopped&&r&&r(e))}else return n}const Ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,du=(t,n,a,r,e,s)=>{const o=e==="svg";n==="class"?Zd(t,r,o):n==="style"?tu(t,a,r):de(n)?Tr(n)||ru(t,n,a,r,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):uu(t,n,r,o))?(Wo(t,n,r),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Uo(t,n,r,o,s,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!Rn(r))?Wo(t,kt(n),r,s,n):(n==="true-value"?t._trueValue=r:n==="false-value"&&(t._falseValue=r),Uo(t,n,r,o))};function uu(t,n,a,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in t&&Ho(n)&&rn(a));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const e=t.tagName;if(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")return!1}return Ho(n)&&Rn(a)?!1:n in t}const fu=qn({patchProp:du},Kd);let qo;function hu(){return qo||(qo=vd(fu))}const gu=(...t)=>{const n=hu().createApp(...t),{mount:a}=n;return n.mount=r=>{const e=ku(r);if(!e)return;const s=n._component;!rn(s)&&!s.render&&!s.template&&(s.template=e.innerHTML),e.nodeType===1&&(e.textContent="");const o=a(e,!1,mu(e));return e instanceof Element&&(e.removeAttribute("v-cloak"),e.setAttribute("data-v-app","")),o},n};function mu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ku(t){return Rn(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ea=typeof document<"u";function Ll(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ll(t.default)}const gn=Object.assign;function Be(t,n){const a={};for(const r in n){const e=n[r];a[r]=wt(e)?e.map(t):t(e)}return a}const ds=()=>{},wt=Array.isArray,Dl=/#/g,yu=/&/g,bu=/\//g,xu=/=/g,wu=/\?/g,Bl=/\+/g,_u=/%5B/g,Su=/%5D/g,Gl=/%5E/g,ju=/%60/g,Ul=/%7B/g,Cu=/%7C/g,Wl=/%7D/g,Tu=/%20/g;function $r(t){return encodeURI(""+t).replace(Cu,"|").replace(_u,"[").replace(Su,"]")}function Pu(t){return $r(t).replace(Ul,"{").replace(Wl,"}").replace(Gl,"^")}function lr(t){return $r(t).replace(Bl,"%2B").replace(Tu,"+").replace(Dl,"%23").replace(yu,"%26").replace(ju,"`").replace(Ul,"{").replace(Wl,"}").replace(Gl,"^")}function Mu(t){return lr(t).replace(xu,"%3D")}function Eu(t){return $r(t).replace(Dl,"%23").replace(wu,"%3F")}function Ru(t){return t==null?"":Eu(t).replace(bu,"%2F")}function xs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Au=/\/$/,Iu=t=>t.replace(Au,"");function Ge(t,n,a="/"){let r,e={},s="",o="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(r=n.slice(0,l),s=n.slice(l+1,i>-1?i:n.length),e=t(s)),i>-1&&(r=r||n.slice(0,i),o=n.slice(i,n.length)),r=Lu(r??n,a),{fullPath:r+(s&&"?")+s+o,path:r,query:e,hash:xs(o)}}function zu(t,n){const a=n.query?t(n.query):"";return n.path+(a&&"?")+a+(n.hash||"")}function Yo(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Ou(t,n,a){const r=n.matched.length-1,e=a.matched.length-1;return r>-1&&r===e&&Na(n.matched[r],a.matched[e])&&Nl(n.params,a.params)&&t(n.query)===t(a.query)&&n.hash===a.hash}function Na(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Nl(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const a in t)if(!Fu(t[a],n[a]))return!1;return!0}function Fu(t,n){return wt(t)?$o(t,n):wt(n)?$o(n,t):t===n}function $o(t,n){return wt(n)?t.length===n.length&&t.every((a,r)=>a===n[r]):t.length===1&&t[0]===n}function Lu(t,n){if(t.startsWith("/"))return t;if(!t)return n;const a=n.split("/"),r=t.split("/"),e=r[r.length-1];(e===".."||e===".")&&r.push("");let s=a.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")s>1&&s--;else break;return a.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ws;(function(t){t.pop="pop",t.push="push"})(ws||(ws={}));var us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(us||(us={}));function Du(t){if(!t)if(Ea){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Iu(t)}const Bu=/^[^#]+#/;function Gu(t,n){return t.replace(Bu,"#")+n}function Uu(t,n){const a=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:n.behavior,left:r.left-a.left-(n.left||0),top:r.top-a.top-(n.top||0)}}const we=()=>({left:window.scrollX,top:window.scrollY});function Wu(t){let n;if("el"in t){const a=t.el,r=typeof a=="string"&&a.startsWith("#"),e=typeof a=="string"?r?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!e)return;n=Uu(e,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ko(t,n){return(history.state?history.state.position-n:-1)+t}const pr=new Map;function Nu(t,n){pr.set(t,n)}function Vu(t){const n=pr.get(t);return pr.delete(t),n}let Hu=()=>location.protocol+"//"+location.host;function Vl(t,n){const{pathname:a,search:r,hash:e}=n,s=t.indexOf("#");if(s>-1){let i=e.includes(t.slice(s))?t.slice(s).length:1,l=e.slice(i);return l[0]!=="/"&&(l="/"+l),Yo(l,"")}return Yo(a,t)+r+e}function qu(t,n,a,r){let e=[],s=[],o=null;const i=({state:h})=>{const p=Vl(t,location),g=a.value,f=n.value;let m=0;if(h){if(a.value=p,n.value=h,o&&o===g){o=null;return}m=f?h.position-f.position:0}else r(p);e.forEach(v=>{v(a.value,g,{delta:m,type:ws.pop,direction:m?m>0?us.forward:us.back:us.unknown})})};function l(){o=a.value}function d(h){e.push(h);const p=()=>{const g=e.indexOf(h);g>-1&&e.splice(g,1)};return s.push(p),p}function c(){const{history:h}=window;h.state&&h.replaceState(gn({},h.state,{scroll:we()}),"")}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:d,destroy:u}}function Xo(t,n,a,r=!1,e=!1){return{back:t,current:n,forward:a,replaced:r,position:window.history.length,scroll:e?we():null}}function Yu(t){const{history:n,location:a}=window,r={value:Vl(t,a)},e={value:n.state};e.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(l,d,c){const u=t.indexOf("#"),h=u>-1?(a.host&&document.querySelector("base")?t:t.slice(u))+l:Hu()+t+l;try{n[c?"replaceState":"pushState"](d,"",h),e.value=d}catch(p){console.error(p),a[c?"replace":"assign"](h)}}function o(l,d){const c=gn({},n.state,Xo(e.value.back,l,e.value.forward,!0),d,{position:e.value.position});s(l,c,!0),r.value=l}function i(l,d){const c=gn({},e.value,n.state,{forward:l,scroll:we()});s(c.current,c,!0);const u=gn({},Xo(r.value,l,null),{position:c.position+1},d);s(l,u,!1),r.value=l}return{location:r,state:e,push:i,replace:o}}function $u(t){t=Du(t);const n=Yu(t),a=qu(t,n.state,n.location,n.replace);function r(s,o=!0){o||a.pauseListeners(),history.go(s)}const e=gn({location:"",base:t,go:r,createHref:Gu.bind(null,t)},n,a);return Object.defineProperty(e,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>n.state.value}),e}function Ku(t){return typeof t=="string"||t&&typeof t=="object"}function Hl(t){return typeof t=="string"||typeof t=="symbol"}const ql=Symbol("");var Zo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zo||(Zo={}));function Va(t,n){return gn(new Error,{type:t,[ql]:!0},n)}function Lt(t,n){return t instanceof Error&&ql in t&&(n==null||!!(t.type&n))}const Qo="[^/]+?",Xu={sensitive:!1,strict:!1,start:!0,end:!0},Zu=/[.+*?^${}()[\]/\\]/g;function Qu(t,n){const a=gn({},Xu,n),r=[];let e=a.start?"^":"";const s=[];for(const d of t){const c=d.length?[]:[90];a.strict&&!d.length&&(e+="/");for(let u=0;u<d.length;u++){const h=d[u];let p=40+(a.sensitive?.25:0);if(h.type===0)u||(e+="/"),e+=h.value.replace(Zu,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:f,optional:m,regexp:v}=h;s.push({name:g,repeatable:f,optional:m});const b=v||Qo;if(b!==Qo){p+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+S.message)}}let _=f?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(_=m&&d.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),e+=_,p+=20,m&&(p+=-8),f&&(p+=-20),b===".*"&&(p+=-50)}c.push(p)}r.push(c)}if(a.strict&&a.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}a.strict||(e+="/?"),a.end?e+="$":a.strict&&!e.endsWith("/")&&(e+="(?:/|$)");const o=new RegExp(e,a.sensitive?"":"i");function i(d){const c=d.match(o),u={};if(!c)return null;for(let h=1;h<c.length;h++){const p=c[h]||"",g=s[h-1];u[g.name]=p&&g.repeatable?p.split("/"):p}return u}function l(d){let c="",u=!1;for(const h of t){(!u||!c.endsWith("/"))&&(c+="/"),u=!1;for(const p of h)if(p.type===0)c+=p.value;else if(p.type===1){const{value:g,repeatable:f,optional:m}=p,v=g in d?d[g]:"";if(wt(v)&&!f)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=wt(v)?v.join("/"):v;if(!b)if(m)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);c+=b}}return c||"/"}return{re:o,score:r,keys:s,parse:i,stringify:l}}function Ju(t,n){let a=0;for(;a<t.length&&a<n.length;){const r=n[a]-t[a];if(r)return r;a++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function Yl(t,n){let a=0;const r=t.score,e=n.score;for(;a<r.length&&a<e.length;){const s=Ju(r[a],e[a]);if(s)return s;a++}if(Math.abs(e.length-r.length)===1){if(Jo(r))return 1;if(Jo(e))return-1}return e.length-r.length}function Jo(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const nf={type:0,value:""},tf=/[a-zA-Z0-9_]/;function af(t){if(!t)return[[]];if(t==="/")return[[nf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(p){throw new Error(`ERR (${a})/"${d}": ${p}`)}let a=0,r=a;const e=[];let s;function o(){s&&e.push(s),s=[]}let i=0,l,d="",c="";function u(){d&&(a===0?s.push({type:0,value:d}):a===1||a===2||a===3?(s.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),d="")}function h(){d+=l}for(;i<t.length;){if(l=t[i++],l==="\\"&&a!==2){r=a,a=4;continue}switch(a){case 0:l==="/"?(d&&u(),o()):l===":"?(u(),a=1):h();break;case 4:h(),a=r;break;case 1:l==="("?a=2:tf.test(l)?h():(u(),a=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:a=3:c+=l;break;case 3:u(),a=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,c="";break;default:n("Unknown state");break}}return a===2&&n(`Unfinished custom RegExp for param "${d}"`),u(),o(),e}function sf(t,n,a){const r=Qu(af(t.path),a),e=gn(r,{record:t,parent:n,children:[],alias:[]});return n&&!e.record.aliasOf==!n.record.aliasOf&&n.children.push(e),e}function ef(t,n){const a=[],r=new Map;n=si({strict:!1,end:!0,sensitive:!1},n);function e(u){return r.get(u)}function s(u,h,p){const g=!p,f=ti(u);f.aliasOf=p&&p.record;const m=si(n,u),v=[f];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of S)v.push(ti(gn({},f,{components:p?p.record.components:f.components,path:k,aliasOf:p?p.record:f})))}let b,_;for(const S of v){const{path:k}=S;if(h&&k[0]!=="/"){const x=h.record.path,w=x[x.length-1]==="/"?"":"/";S.path=h.record.path+(k&&w+k)}if(b=sf(S,h,m),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&u.name&&!ai(b)&&o(u.name)),$l(b)&&l(b),f.children){const x=f.children;for(let w=0;w<x.length;w++)s(x[w],b,p&&p.children[w])}p=p||b}return _?()=>{o(_)}:ds}function o(u){if(Hl(u)){const h=r.get(u);h&&(r.delete(u),a.splice(a.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=a.indexOf(u);h>-1&&(a.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return a}function l(u){const h=lf(u,a);a.splice(h,0,u),u.record.name&&!ai(u)&&r.set(u.record.name,u)}function d(u,h){let p,g={},f,m;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Va(1,{location:u});m=p.record.name,g=gn(ni(h.params,p.keys.filter(_=>!_.optional).concat(p.parent?p.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&ni(u.params,p.keys.map(_=>_.name))),f=p.stringify(g)}else if(u.path!=null)f=u.path,p=a.find(_=>_.re.test(f)),p&&(g=p.parse(f),m=p.record.name);else{if(p=h.name?r.get(h.name):a.find(_=>_.re.test(h.path)),!p)throw Va(1,{location:u,currentLocation:h});m=p.record.name,g=gn({},h.params,u.params),f=p.stringify(g)}const v=[];let b=p;for(;b;)v.unshift(b.record),b=b.parent;return{name:m,path:f,params:g,matched:v,meta:of(v)}}t.forEach(u=>s(u));function c(){a.length=0,r.clear()}return{addRoute:s,resolve:d,removeRoute:o,clearRoutes:c,getRoutes:i,getRecordMatcher:e}}function ni(t,n){const a={};for(const r of n)r in t&&(a[r]=t[r]);return a}function ti(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function rf(t){const n={},a=t.props||!1;if("component"in t)n.default=a;else for(const r in t.components)n[r]=typeof a=="object"?a[r]:a;return n}function ai(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function of(t){return t.reduce((n,a)=>gn(n,a.meta),{})}function si(t,n){const a={};for(const r in t)a[r]=r in n?n[r]:t[r];return a}function lf(t,n){let a=0,r=n.length;for(;a!==r;){const s=a+r>>1;Yl(t,n[s])<0?r=s:a=s+1}const e=pf(t);return e&&(r=n.lastIndexOf(e,r-1)),r}function pf(t){let n=t;for(;n=n.parent;)if($l(n)&&Yl(t,n)===0)return n}function $l({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cf(t){const n={};if(t===""||t==="?")return n;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let e=0;e<r.length;++e){const s=r[e].replace(Bl," "),o=s.indexOf("="),i=xs(o<0?s:s.slice(0,o)),l=o<0?null:xs(s.slice(o+1));if(i in n){let d=n[i];wt(d)||(d=n[i]=[d]),d.push(l)}else n[i]=l}return n}function ei(t){let n="";for(let a in t){const r=t[a];if(a=Mu(a),r==null){r!==void 0&&(n+=(n.length?"&":"")+a);continue}(wt(r)?r.map(s=>s&&lr(s)):[r&&lr(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+a,s!=null&&(n+="="+s))})}return n}function df(t){const n={};for(const a in t){const r=t[a];r!==void 0&&(n[a]=wt(r)?r.map(e=>e==null?null:""+e):r==null?r:""+r)}return n}const uf=Symbol(""),ri=Symbol(""),_e=Symbol(""),Kr=Symbol(""),cr=Symbol("");function ns(){let t=[];function n(r){return t.push(r),()=>{const e=t.indexOf(r);e>-1&&t.splice(e,1)}}function a(){t=[]}return{add:n,list:()=>t.slice(),reset:a}}function Qt(t,n,a,r,e,s=o=>o()){const o=r&&(r.enterCallbacks[e]=r.enterCallbacks[e]||[]);return()=>new Promise((i,l)=>{const d=h=>{h===!1?l(Va(4,{from:a,to:n})):h instanceof Error?l(h):Ku(h)?l(Va(2,{from:n,to:h})):(o&&r.enterCallbacks[e]===o&&typeof h=="function"&&o.push(h),i())},c=s(()=>t.call(r&&r.instances[e],n,a,d));let u=Promise.resolve(c);t.length<3&&(u=u.then(d)),u.catch(h=>l(h))})}function Ue(t,n,a,r,e=s=>s()){const s=[];for(const o of t)for(const i in o.components){let l=o.components[i];if(!(n!=="beforeRouteEnter"&&!o.instances[i]))if(Ll(l)){const c=(l.__vccOpts||l)[n];c&&s.push(Qt(c,a,r,o,i,e))}else{let d=l();s.push(()=>d.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=vu(c)?c.default:c;o.mods[i]=c,o.components[i]=u;const p=(u.__vccOpts||u)[n];return p&&Qt(p,a,r,o,i,e)()}))}}return s}function oi(t){const n=xt(_e),a=xt(Kr),r=Kn(()=>{const l=bt(t.to);return n.resolve(l)}),e=Kn(()=>{const{matched:l}=r.value,{length:d}=l,c=l[d-1],u=a.matched;if(!c||!u.length)return-1;const h=u.findIndex(Na.bind(null,c));if(h>-1)return h;const p=ii(l[d-2]);return d>1&&ii(c)===p&&u[u.length-1].path!==p?u.findIndex(Na.bind(null,l[d-2])):h}),s=Kn(()=>e.value>-1&&mf(a.params,r.value.params)),o=Kn(()=>e.value>-1&&e.value===a.matched.length-1&&Nl(a.params,r.value.params));function i(l={}){if(gf(l)){const d=n[bt(t.replace)?"replace":"push"](bt(t.to)).catch(ds);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:r,href:Kn(()=>r.value.href),isActive:s,isExactActive:o,navigate:i}}function ff(t){return t.length===1?t[0]:t}const hf=ll({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:oi,setup(t,{slots:n}){const a=ke(oi(t)),{options:r}=xt(_e),e=Kn(()=>({[li(t.activeClass,r.linkActiveClass,"router-link-active")]:a.isActive,[li(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const s=n.default&&ff(n.default(a));return t.custom?s:Ol("a",{"aria-current":a.isExactActive?t.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:e.value},s)}}}),Xr=hf;function gf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function mf(t,n){for(const a in n){const r=n[a],e=t[a];if(typeof r=="string"){if(r!==e)return!1}else if(!wt(e)||e.length!==r.length||r.some((s,o)=>s!==e[o]))return!1}return!0}function ii(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const li=(t,n,a)=>t??n??a,kf=ll({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:a}){const r=xt(cr),e=Kn(()=>t.route||r.value),s=xt(ri,0),o=Kn(()=>{let d=bt(s);const{matched:c}=e.value;let u;for(;(u=c[d])&&!u.components;)d++;return d}),i=Kn(()=>e.value.matched[o.value]);Bs(ri,Kn(()=>o.value+1)),Bs(uf,i),Bs(cr,e);const l=Nt();return Gs(()=>[l.value,i.value,t.name],([d,c,u],[h,p,g])=>{c&&(c.instances[u]=d,p&&p!==c&&d&&d===h&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),d&&c&&(!p||!Na(c,p)||!h)&&(c.enterCallbacks[u]||[]).forEach(f=>f(d))},{flush:"post"}),()=>{const d=e.value,c=t.name,u=i.value,h=u&&u.components[c];if(!h)return pi(a.default,{Component:h,route:d});const p=u.props[c],g=p?p===!0?d.params:typeof p=="function"?p(d):p:null,m=Ol(h,gn({},g,n,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[c]=null)},ref:l}));return pi(a.default,{Component:m,route:d})||m}}});function pi(t,n){if(!t)return null;const a=t(n);return a.length===1?a[0]:a}const Kl=kf;function vf(t){const n=ef(t.routes,t),a=t.parseQuery||cf,r=t.stringifyQuery||ei,e=t.history,s=ns(),o=ns(),i=ns(),l=Ac(Kt);let d=Kt;Ea&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Be.bind(null,z=>""+z),u=Be.bind(null,Ru),h=Be.bind(null,xs);function p(z,U){let N,Y;return Hl(z)?(N=n.getRecordMatcher(z),Y=U):Y=z,n.addRoute(Y,N)}function g(z){const U=n.getRecordMatcher(z);U&&n.removeRoute(U)}function f(){return n.getRoutes().map(z=>z.record)}function m(z){return!!n.getRecordMatcher(z)}function v(z,U){if(U=gn({},U||l.value),typeof z=="string"){const R=Ge(a,z,U.path),O=n.resolve({path:R.path},U),D=e.createHref(R.fullPath);return gn(R,O,{params:h(O.params),hash:xs(R.hash),redirectedFrom:void 0,href:D})}let N;if(z.path!=null)N=gn({},z,{path:Ge(a,z.path,U.path).path});else{const R=gn({},z.params);for(const O in R)R[O]==null&&delete R[O];N=gn({},z,{params:u(R)}),U.params=u(U.params)}const Y=n.resolve(N,U),an=z.hash||"";Y.params=c(h(Y.params));const M=zu(r,gn({},z,{hash:Pu(an),path:Y.path})),E=e.createHref(M);return gn({fullPath:M,hash:an,query:r===ei?df(z.query):z.query||{}},Y,{redirectedFrom:void 0,href:E})}function b(z){return typeof z=="string"?Ge(a,z,l.value.path):gn({},z)}function _(z,U){if(d!==z)return Va(8,{from:U,to:z})}function S(z){return w(z)}function k(z){return S(gn(b(z),{replace:!0}))}function x(z){const U=z.matched[z.matched.length-1];if(U&&U.redirect){const{redirect:N}=U;let Y=typeof N=="function"?N(z):N;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=b(Y):{path:Y},Y.params={}),gn({query:z.query,hash:z.hash,params:Y.path!=null?{}:z.params},Y)}}function w(z,U){const N=d=v(z),Y=l.value,an=z.state,M=z.force,E=z.replace===!0,R=x(N);if(R)return w(gn(b(R),{state:typeof R=="object"?gn({},an,R.state):an,force:M,replace:E}),U||N);const O=N;O.redirectedFrom=U;let D;return!M&&Ou(r,Y,N)&&(D=Va(16,{to:O,from:Y}),pn(Y,Y,!0,!1)),(D?Promise.resolve(D):T(O,Y)).catch(B=>Lt(B)?Lt(B,2)?B:on(B):V(B,O,Y)).then(B=>{if(B){if(Lt(B,2))return w(gn({replace:E},b(B.to),{state:typeof B.to=="object"?gn({},an,B.to.state):an,force:M}),U||O)}else B=C(O,Y,!0,E,an);return P(O,Y,B),B})}function y(z,U){const N=_(z,U);return N?Promise.reject(N):Promise.resolve()}function j(z){const U=cn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(z):z()}function T(z,U){let N;const[Y,an,M]=yf(z,U);N=Ue(Y.reverse(),"beforeRouteLeave",z,U);for(const R of Y)R.leaveGuards.forEach(O=>{N.push(Qt(O,z,U))});const E=y.bind(null,z,U);return N.push(E),Q(N).then(()=>{N=[];for(const R of s.list())N.push(Qt(R,z,U));return N.push(E),Q(N)}).then(()=>{N=Ue(an,"beforeRouteUpdate",z,U);for(const R of an)R.updateGuards.forEach(O=>{N.push(Qt(O,z,U))});return N.push(E),Q(N)}).then(()=>{N=[];for(const R of M)if(R.beforeEnter)if(wt(R.beforeEnter))for(const O of R.beforeEnter)N.push(Qt(O,z,U));else N.push(Qt(R.beforeEnter,z,U));return N.push(E),Q(N)}).then(()=>(z.matched.forEach(R=>R.enterCallbacks={}),N=Ue(M,"beforeRouteEnter",z,U,j),N.push(E),Q(N))).then(()=>{N=[];for(const R of o.list())N.push(Qt(R,z,U));return N.push(E),Q(N)}).catch(R=>Lt(R,8)?R:Promise.reject(R))}function P(z,U,N){i.list().forEach(Y=>j(()=>Y(z,U,N)))}function C(z,U,N,Y,an){const M=_(z,U);if(M)return M;const E=U===Kt,R=Ea?history.state:{};N&&(Y||E?e.replace(z.fullPath,gn({scroll:E&&R&&R.scroll},an)):e.push(z.fullPath,an)),l.value=z,pn(z,U,N,E),on()}let A;function I(){A||(A=e.listen((z,U,N)=>{if(!un.listening)return;const Y=v(z),an=x(Y);if(an){w(gn(an,{replace:!0,force:!0}),Y).catch(ds);return}d=Y;const M=l.value;Ea&&Nu(Ko(M.fullPath,N.delta),we()),T(Y,M).catch(E=>Lt(E,12)?E:Lt(E,2)?(w(gn(b(E.to),{force:!0}),Y).then(R=>{Lt(R,20)&&!N.delta&&N.type===ws.pop&&e.go(-1,!1)}).catch(ds),Promise.reject()):(N.delta&&e.go(-N.delta,!1),V(E,Y,M))).then(E=>{E=E||C(Y,M,!1),E&&(N.delta&&!Lt(E,8)?e.go(-N.delta,!1):N.type===ws.pop&&Lt(E,20)&&e.go(-1,!1)),P(Y,M,E)}).catch(ds)}))}let F=ns(),G=ns(),L;function V(z,U,N){on(z);const Y=G.list();return Y.length?Y.forEach(an=>an(z,U,N)):console.error(z),Promise.reject(z)}function nn(){return L&&l.value!==Kt?Promise.resolve():new Promise((z,U)=>{F.add([z,U])})}function on(z){return L||(L=!z,I(),F.list().forEach(([U,N])=>z?N(z):U()),F.reset()),z}function pn(z,U,N,Y){const{scrollBehavior:an}=t;if(!Ea||!an)return Promise.resolve();const M=!N&&Vu(Ko(z.fullPath,0))||(Y||!N)&&history.state&&history.state.scroll||null;return Br().then(()=>an(z,U,M)).then(E=>E&&Wu(E)).catch(E=>V(E,z,U))}const sn=z=>e.go(z);let dn;const cn=new Set,un={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:n.clearRoutes,hasRoute:m,getRoutes:f,resolve:v,options:t,push:S,replace:k,go:sn,back:()=>sn(-1),forward:()=>sn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:i.add,onError:G.add,isReady:nn,install(z){const U=this;z.component("RouterLink",Xr),z.component("RouterView",Kl),z.config.globalProperties.$router=U,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>bt(l)}),Ea&&!dn&&l.value===Kt&&(dn=!0,S(e.location).catch(an=>{}));const N={};for(const an in Kt)Object.defineProperty(N,an,{get:()=>l.value[an],enumerable:!0});z.provide(_e,U),z.provide(Kr,Ji(N)),z.provide(cr,l);const Y=z.unmount;cn.add(z),z.unmount=function(){cn.delete(z),cn.size<1&&(d=Kt,A&&A(),A=null,l.value=Kt,dn=!1,L=!1),Y()}}};function Q(z){return z.reduce((U,N)=>U.then(()=>j(N)),Promise.resolve())}return un}function yf(t,n){const a=[],r=[],e=[],s=Math.max(n.matched.length,t.matched.length);for(let o=0;o<s;o++){const i=n.matched[o];i&&(t.matched.find(d=>Na(d,i))?r.push(i):a.push(i));const l=t.matched[o];l&&(n.matched.find(d=>Na(d,l))||e.push(l))}return[a,r,e]}function bf(){return xt(_e)}function xf(t){return xt(Kr)}const wf={__name:"App",setup(t){return(n,a)=>(zn(),El(bt(Kl)))}};var ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vs={exports:{}},_f=Vs.exports,di;function Sf(){return di||(di=1,function(t,n){(function(a,r){t.exports=r()})(_f,function(){return function(a){function r(s){if(e[s])return e[s].exports;var o=e[s]={exports:{},id:s,loaded:!1};return a[s].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=a,r.c=e,r.p="dist/",r(0)}([function(a,r,e){function s(I){return I&&I.__esModule?I:{default:I}}var o=Object.assign||function(I){for(var F=1;F<arguments.length;F++){var G=arguments[F];for(var L in G)Object.prototype.hasOwnProperty.call(G,L)&&(I[L]=G[L])}return I},i=e(1),l=(s(i),e(6)),d=s(l),c=e(7),u=s(c),h=e(8),p=s(h),g=e(9),f=s(g),m=e(10),v=s(m),b=e(11),_=s(b),S=e(14),k=s(S),x=[],w=!1,y={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var I=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(I&&(w=!0),w)return x=(0,_.default)(x,y),(0,v.default)(x,y.once),x},T=function(){x=(0,k.default)(),j()},P=function(){x.forEach(function(I,F){I.node.removeAttribute("data-aos"),I.node.removeAttribute("data-aos-easing"),I.node.removeAttribute("data-aos-duration"),I.node.removeAttribute("data-aos-delay")})},C=function(I){return I===!0||I==="mobile"&&f.default.mobile()||I==="phone"&&f.default.phone()||I==="tablet"&&f.default.tablet()||typeof I=="function"&&I()===!0},A=function(I){y=o(y,I),x=(0,k.default)();var F=document.all&&!window.atob;return C(y.disable)||F?P():(y.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),y.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",y.easing),document.querySelector("body").setAttribute("data-aos-duration",y.duration),document.querySelector("body").setAttribute("data-aos-delay",y.delay),y.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):y.startEvent==="load"?window.addEventListener(y.startEvent,function(){j(!0)}):document.addEventListener(y.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,u.default)(j,y.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(j,y.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,v.default)(x,y.once)},y.throttleDelay)),y.disableMutationObserver||p.default.ready("[data-aos]",T),x)};a.exports={init:A,refresh:j,refreshHard:T}},function(a,r){},,,,,function(a,r){(function(e){function s(C,A,I){function F(R){var O=cn,D=un;return cn=un=void 0,Y=R,z=C.apply(D,O)}function G(R){return Y=R,U=setTimeout(nn,A),an?F(R):z}function L(R){var O=R-N,D=R-Y,B=A-O;return M?T(B,Q-D):B}function V(R){var O=R-N,D=R-Y;return N===void 0||O>=A||O<0||M&&D>=Q}function nn(){var R=P();return V(R)?on(R):void(U=setTimeout(nn,L(R)))}function on(R){return U=void 0,E&&cn?F(R):(cn=un=void 0,z)}function pn(){U!==void 0&&clearTimeout(U),Y=0,cn=N=un=U=void 0}function sn(){return U===void 0?z:on(P())}function dn(){var R=P(),O=V(R);if(cn=arguments,un=this,N=R,O){if(U===void 0)return G(N);if(M)return U=setTimeout(nn,A),F(N)}return U===void 0&&(U=setTimeout(nn,A)),z}var cn,un,Q,z,U,N,Y=0,an=!1,M=!1,E=!0;if(typeof C!="function")throw new TypeError(h);return A=c(A)||0,i(I)&&(an=!!I.leading,M="maxWait"in I,Q=M?j(c(I.maxWait)||0,A):Q,E="trailing"in I?!!I.trailing:E),dn.cancel=pn,dn.flush=sn,dn}function o(C,A,I){var F=!0,G=!0;if(typeof C!="function")throw new TypeError(h);return i(I)&&(F="leading"in I?!!I.leading:F,G="trailing"in I?!!I.trailing:G),s(C,A,{leading:F,maxWait:A,trailing:G})}function i(C){var A=typeof C>"u"?"undefined":u(C);return!!C&&(A=="object"||A=="function")}function l(C){return!!C&&(typeof C>"u"?"undefined":u(C))=="object"}function d(C){return(typeof C>"u"?"undefined":u(C))=="symbol"||l(C)&&y.call(C)==g}function c(C){if(typeof C=="number")return C;if(d(C))return p;if(i(C)){var A=typeof C.valueOf=="function"?C.valueOf():C;C=i(A)?A+"":A}if(typeof C!="string")return C===0?C:+C;C=C.replace(f,"");var I=v.test(C);return I||b.test(C)?_(C.slice(2),I?2:8):m.test(C)?p:+C}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},h="Expected a function",p=NaN,g="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,b=/^0o[0-7]+$/i,_=parseInt,S=(typeof e>"u"?"undefined":u(e))=="object"&&e&&e.Object===Object&&e,k=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,x=S||k||Function("return this")(),w=Object.prototype,y=w.toString,j=Math.max,T=Math.min,P=function(){return x.Date.now()};a.exports=o}).call(r,function(){return this}())},function(a,r){(function(e){function s(P,C,A){function I(E){var R=dn,O=cn;return dn=cn=void 0,N=E,Q=P.apply(O,R)}function F(E){return N=E,z=setTimeout(V,C),Y?I(E):Q}function G(E){var R=E-U,O=E-N,D=C-R;return an?j(D,un-O):D}function L(E){var R=E-U,O=E-N;return U===void 0||R>=C||R<0||an&&O>=un}function V(){var E=T();return L(E)?nn(E):void(z=setTimeout(V,G(E)))}function nn(E){return z=void 0,M&&dn?I(E):(dn=cn=void 0,Q)}function on(){z!==void 0&&clearTimeout(z),N=0,dn=U=cn=z=void 0}function pn(){return z===void 0?Q:nn(T())}function sn(){var E=T(),R=L(E);if(dn=arguments,cn=this,U=E,R){if(z===void 0)return F(U);if(an)return z=setTimeout(V,C),I(U)}return z===void 0&&(z=setTimeout(V,C)),Q}var dn,cn,un,Q,z,U,N=0,Y=!1,an=!1,M=!0;if(typeof P!="function")throw new TypeError(u);return C=d(C)||0,o(A)&&(Y=!!A.leading,an="maxWait"in A,un=an?y(d(A.maxWait)||0,C):un,M="trailing"in A?!!A.trailing:M),sn.cancel=on,sn.flush=pn,sn}function o(P){var C=typeof P>"u"?"undefined":c(P);return!!P&&(C=="object"||C=="function")}function i(P){return!!P&&(typeof P>"u"?"undefined":c(P))=="object"}function l(P){return(typeof P>"u"?"undefined":c(P))=="symbol"||i(P)&&w.call(P)==p}function d(P){if(typeof P=="number")return P;if(l(P))return h;if(o(P)){var C=typeof P.valueOf=="function"?P.valueOf():P;P=o(C)?C+"":C}if(typeof P!="string")return P===0?P:+P;P=P.replace(g,"");var A=m.test(P);return A||v.test(P)?b(P.slice(2),A?2:8):f.test(P)?h:+P}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},u="Expected a function",h=NaN,p="[object Symbol]",g=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,b=parseInt,_=(typeof e>"u"?"undefined":c(e))=="object"&&e&&e.Object===Object&&e,S=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,k=_||S||Function("return this")(),x=Object.prototype,w=x.toString,y=Math.max,j=Math.min,T=function(){return k.Date.now()};a.exports=s}).call(r,function(){return this}())},function(a,r){function e(c){var u=void 0,h=void 0;for(u=0;u<c.length;u+=1)if(h=c[u],h.dataset&&h.dataset.aos||h.children&&e(h.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function i(c,u){var h=window.document,p=s(),g=new p(l);d=u,g.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(c){c&&c.forEach(function(u){var h=Array.prototype.slice.call(u.addedNodes),p=Array.prototype.slice.call(u.removedNodes),g=h.concat(p);if(e(g))return d()})}Object.defineProperty(r,"__esModule",{value:!0});var d=function(){};r.default={isSupported:o,ready:i}},function(a,r){function e(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function h(p,g){for(var f=0;f<g.length;f++){var m=g[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(p,m.key,m)}}return function(p,g,f){return g&&h(p.prototype,g),f&&h(p,f),p}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function h(){e(this,h)}return o(h,[{key:"phone",value:function(){var p=s();return!(!i.test(p)&&!l.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=s();return!(!d.test(p)&&!c.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();r.default=new u},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(o,i,l){var d=o.node.getAttribute("data-aos-once");i>o.position?o.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!l&&d!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,i){var l=window.pageYOffset,d=window.innerHeight;o.forEach(function(c,u){e(c,d+l,i)})};r.default=s},function(a,r,e){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(12),i=s(o),l=function(d,c){return d.forEach(function(u,h){u.node.classList.add("aos-init"),u.position=(0,i.default)(u.node,c.offset)}),d};r.default=l},function(a,r,e){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(13),i=s(o),l=function(d,c){var u=0,h=0,p=window.innerHeight,g={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(h=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(d=document.querySelectorAll(g.anchor)[0]),u=(0,i.default)(d).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=d.offsetHeight/2;break;case"bottom-bottom":u+=d.offsetHeight;break;case"top-center":u+=p/2;break;case"bottom-center":u+=p/2+d.offsetHeight;break;case"center-center":u+=p/2+d.offsetHeight/2;break;case"top-top":u+=p;break;case"bottom-top":u+=d.offsetHeight+p;break;case"center-top":u+=d.offsetHeight/2+p}return g.anchorPlacement||g.offset||isNaN(c)||(h=c),u+h};r.default=l},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(s){for(var o=0,i=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),i+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:i,left:o}};r.default=e},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};r.default=e}])})}(Vs)),Vs.exports}var jf=Sf();const Zl=Xl(jf),Cf={class:"min-h-20"},Tf={__name:"Typewriter",setup(t){const n=[["Build Stunning Visuals","All With The Classic C++"],["Let's Innovate","With Cpp Playgrounds!"],["Less time","More productivity."],["Work Smart","Not Hard"],["Let's Shine","With Cpp Playgrounds!"]],a=Nt(null),r=Nt(null);let e=0,s;const o=()=>{const[i,l]=n[e];a.value.classList.remove("opacity-100"),r.value.classList.remove("opacity-100"),a.value.classList.add("opacity-0"),r.value.classList.add("opacity-0"),setTimeout(()=>{a.value.textContent=i,r.value.textContent="",a.value.classList.remove("opacity-0"),a.value.classList.add("opacity-100"),setTimeout(()=>{r.value.textContent=l,r.value.classList.remove("opacity-0"),r.value.classList.add("opacity-100")},500)},500),e=(e+1)%n.length,setTimeout(()=>{a.value.classList.remove("opacity-100"),a.value.classList.add("opacity-0"),r.value.classList.remove("opacity-100"),r.value.classList.add("opacity-0")},3e3)};return As(()=>{o(),s=setInterval(o,4e3)}),Wr(()=>{clearInterval(s)}),(i,l)=>(zn(),Dn("div",Cf,[Z("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part1",ref:a},null,512),Z("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part2",ref:r},null,512)]))}};var Hs={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pf=Hs.exports,ui;function Mf(){return ui||(ui=1,function(t,n){(function(r,e){t.exports=e()})(Pf,function(){return function(a){var r={};function e(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return a[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=a,e.c=r,e.d=function(s,o,i){e.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:i})},e.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,o){if(o&1&&(s=e(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var l in s)e.d(i,l,(function(d){return s[d]}).bind(null,l));return i},e.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(o,"a",o),o},e.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},e.p="",e(e.s=20)}([function(a,r){var e={};a.exports=e,function(){e._baseDelta=1e3/60,e._nextId=0,e._seed=0,e._nowStartTime=+new Date,e._warnedOnce={},e._decomp=null,e.extend=function(o,i){var l,d;typeof i=="boolean"?(l=2,d=i):(l=1,d=!0);for(var c=l;c<arguments.length;c++){var u=arguments[c];if(u)for(var h in u)d&&u[h]&&u[h].constructor===Object&&(!o[h]||o[h].constructor===Object)?(o[h]=o[h]||{},e.extend(o[h],d,u[h])):o[h]=u[h]}return o},e.clone=function(o,i){return e.extend({},i,o)},e.keys=function(o){if(Object.keys)return Object.keys(o);var i=[];for(var l in o)i.push(l);return i},e.values=function(o){var i=[];if(Object.keys){for(var l=Object.keys(o),d=0;d<l.length;d++)i.push(o[l[d]]);return i}for(var c in o)i.push(o[c]);return i},e.get=function(o,i,l,d){i=i.split(".").slice(l,d);for(var c=0;c<i.length;c+=1)o=o[i[c]];return o},e.set=function(o,i,l,d,c){var u=i.split(".").slice(d,c);return e.get(o,i,0,-1)[u[u.length-1]]=l,l},e.shuffle=function(o){for(var i=o.length-1;i>0;i--){var l=Math.floor(e.random()*(i+1)),d=o[i];o[i]=o[l],o[l]=d}return o},e.choose=function(o){return o[Math.floor(e.random()*o.length)]},e.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},e.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},e.isFunction=function(o){return typeof o=="function"},e.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},e.isString=function(o){return toString.call(o)==="[object String]"},e.clamp=function(o,i,l){return o<i?i:o>l?l:o},e.sign=function(o){return o<0?-1:1},e.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-e._nowStartTime},e.random=function(o,i){return o=typeof o<"u"?o:0,i=typeof i<"u"?i:1,o+s()*(i-o)};var s=function(){return e._seed=(e._seed*9301+49297)%233280,e._seed/233280};e.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},e.logLevel=1,e.log=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.info=function(){console&&e.logLevel>0&&e.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warn=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");e._warnedOnce[o]||(e.warn(o),e._warnedOnce[o]=!0)},e.deprecated=function(o,i,l){o[i]=e.chain(function(){e.warnOnce("🔅 deprecated 🔅",l)},o[i])},e.nextId=function(){return e._nextId++},e.indexOf=function(o,i){if(o.indexOf)return o.indexOf(i);for(var l=0;l<o.length;l++)if(o[l]===i)return l;return-1},e.map=function(o,i){if(o.map)return o.map(i);for(var l=[],d=0;d<o.length;d+=1)l.push(i(o[d]));return l},e.topologicalSort=function(o){var i=[],l=[],d=[];for(var c in o)!l[c]&&!d[c]&&e._topologicalSort(c,l,d,o,i);return i},e._topologicalSort=function(o,i,l,d,c){var u=d[o]||[];l[o]=!0;for(var h=0;h<u.length;h+=1){var p=u[h];l[p]||i[p]||e._topologicalSort(p,i,l,d,c)}l[o]=!1,i[o]=!0,c.push(o)},e.chain=function(){for(var o=[],i=0;i<arguments.length;i+=1){var l=arguments[i];l._chained?o.push.apply(o,l._chained):o.push(l)}var d=function(){for(var c,u=new Array(arguments.length),h=0,p=arguments.length;h<p;h++)u[h]=arguments[h];for(h=0;h<o.length;h+=1){var g=o[h].apply(c,u);typeof g<"u"&&(c=g)}return c};return d._chained=o,d},e.chainPathBefore=function(o,i,l){return e.set(o,i,e.chain(l,e.get(o,i)))},e.chainPathAfter=function(o,i,l){return e.set(o,i,e.chain(e.get(o,i),l))},e.setDecomp=function(o){e._decomp=o},e.getDecomp=function(){var o=e._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof ci<"u"&&(o=ci.decomp)}catch{o=null}return o}}()},function(a,r){var e={};a.exports=e,function(){e.create=function(s){var o={min:{x:0,y:0},max:{x:0,y:0}};return s&&e.update(o,s),o},e.update=function(s,o,i){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var l=0;l<o.length;l++){var d=o[l];d.x>s.max.x&&(s.max.x=d.x),d.x<s.min.x&&(s.min.x=d.x),d.y>s.max.y&&(s.max.y=d.y),d.y<s.min.y&&(s.min.y=d.y)}i&&(i.x>0?s.max.x+=i.x:s.min.x+=i.x,i.y>0?s.max.y+=i.y:s.min.y+=i.y)},e.contains=function(s,o){return o.x>=s.min.x&&o.x<=s.max.x&&o.y>=s.min.y&&o.y<=s.max.y},e.overlaps=function(s,o){return s.min.x<=o.max.x&&s.max.x>=o.min.x&&s.max.y>=o.min.y&&s.min.y<=o.max.y},e.translate=function(s,o){s.min.x+=o.x,s.max.x+=o.x,s.min.y+=o.y,s.max.y+=o.y},e.shift=function(s,o){var i=s.max.x-s.min.x,l=s.max.y-s.min.y;s.min.x=o.x,s.max.x=o.x+i,s.min.y=o.y,s.max.y=o.y+l}}()},function(a,r){var e={};a.exports=e,function(){e.create=function(s,o){return{x:s||0,y:o||0}},e.clone=function(s){return{x:s.x,y:s.y}},e.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},e.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},e.rotate=function(s,o,i){var l=Math.cos(o),d=Math.sin(o);i||(i={});var c=s.x*l-s.y*d;return i.y=s.x*d+s.y*l,i.x=c,i},e.rotateAbout=function(s,o,i,l){var d=Math.cos(o),c=Math.sin(o);l||(l={});var u=i.x+((s.x-i.x)*d-(s.y-i.y)*c);return l.y=i.y+((s.x-i.x)*c+(s.y-i.y)*d),l.x=u,l},e.normalise=function(s){var o=e.magnitude(s);return o===0?{x:0,y:0}:{x:s.x/o,y:s.y/o}},e.dot=function(s,o){return s.x*o.x+s.y*o.y},e.cross=function(s,o){return s.x*o.y-s.y*o.x},e.cross3=function(s,o,i){return(o.x-s.x)*(i.y-s.y)-(o.y-s.y)*(i.x-s.x)},e.add=function(s,o,i){return i||(i={}),i.x=s.x+o.x,i.y=s.y+o.y,i},e.sub=function(s,o,i){return i||(i={}),i.x=s.x-o.x,i.y=s.y-o.y,i},e.mult=function(s,o){return{x:s.x*o,y:s.y*o}},e.div=function(s,o){return{x:s.x/o,y:s.y/o}},e.perp=function(s,o){return o=o===!0?-1:1,{x:o*-s.y,y:o*s.x}},e.neg=function(s){return{x:-s.x,y:-s.y}},e.angle=function(s,o){return Math.atan2(o.y-s.y,o.x-s.x)},e._temp=[e.create(),e.create(),e.create(),e.create(),e.create(),e.create()]}()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(0);(function(){s.create=function(l,d){for(var c=[],u=0;u<l.length;u++){var h=l[u],p={x:h.x,y:h.y,index:u,body:d,isInternal:!1};c.push(p)}return c},s.fromPath=function(l,d){var c=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,u=[];return l.replace(c,function(h,p,g){u.push({x:parseFloat(p),y:parseFloat(g)})}),s.create(u,d)},s.centre=function(l){for(var d=s.area(l,!0),c={x:0,y:0},u,h,p,g=0;g<l.length;g++)p=(g+1)%l.length,u=o.cross(l[g],l[p]),h=o.mult(o.add(l[g],l[p]),u),c=o.add(c,h);return o.div(c,6*d)},s.mean=function(l){for(var d={x:0,y:0},c=0;c<l.length;c++)d.x+=l[c].x,d.y+=l[c].y;return o.div(d,l.length)},s.area=function(l,d){for(var c=0,u=l.length-1,h=0;h<l.length;h++)c+=(l[u].x-l[h].x)*(l[u].y+l[h].y),u=h;return d?c/2:Math.abs(c)/2},s.inertia=function(l,d){for(var c=0,u=0,h=l,p,g,f=0;f<h.length;f++)g=(f+1)%h.length,p=Math.abs(o.cross(h[g],h[f])),c+=p*(o.dot(h[g],h[g])+o.dot(h[g],h[f])+o.dot(h[f],h[f])),u+=p;return d/6*(c/u)},s.translate=function(l,d,c){c=typeof c<"u"?c:1;var u=l.length,h=d.x*c,p=d.y*c,g;for(g=0;g<u;g++)l[g].x+=h,l[g].y+=p;return l},s.rotate=function(l,d,c){if(d!==0){var u=Math.cos(d),h=Math.sin(d),p=c.x,g=c.y,f=l.length,m,v,b,_;for(_=0;_<f;_++)m=l[_],v=m.x-p,b=m.y-g,m.x=p+(v*u-b*h),m.y=g+(v*h+b*u);return l}},s.contains=function(l,d){for(var c=d.x,u=d.y,h=l.length,p=l[h-1],g,f=0;f<h;f++){if(g=l[f],(c-p.x)*(g.y-p.y)+(u-p.y)*(p.x-g.x)>0)return!1;p=g}return!0},s.scale=function(l,d,c,u){if(d===1&&c===1)return l;u=u||s.centre(l);for(var h,p,g=0;g<l.length;g++)h=l[g],p=o.sub(h,u),l[g].x=u.x+p.x*d,l[g].y=u.y+p.y*c;return l},s.chamfer=function(l,d,c,u,h){typeof d=="number"?d=[d]:d=d||[8],c=typeof c<"u"?c:-1,u=u||2,h=h||14;for(var p=[],g=0;g<l.length;g++){var f=l[g-1>=0?g-1:l.length-1],m=l[g],v=l[(g+1)%l.length],b=d[g<d.length?g:d.length-1];if(b===0){p.push(m);continue}var _=o.normalise({x:m.y-f.y,y:f.x-m.x}),S=o.normalise({x:v.y-m.y,y:m.x-v.x}),k=Math.sqrt(2*Math.pow(b,2)),x=o.mult(i.clone(_),b),w=o.normalise(o.mult(o.add(_,S),.5)),y=o.sub(m,o.mult(w,k)),j=c;c===-1&&(j=Math.pow(b,.32)*1.75),j=i.clamp(j,u,h),j%2===1&&(j+=1);for(var T=Math.acos(o.dot(_,S)),P=T/j,C=0;C<j;C++)p.push(o.add(o.rotate(x,P*C),y))}return p},s.clockwiseSort=function(l){var d=s.mean(l);return l.sort(function(c,u){return o.angle(d,c)-o.angle(d,u)}),l},s.isConvex=function(l){var d=0,c=l.length,u,h,p,g;if(c<3)return null;for(u=0;u<c;u++)if(h=(u+1)%c,p=(u+2)%c,g=(l[h].x-l[u].x)*(l[p].y-l[h].y),g-=(l[h].y-l[u].y)*(l[p].x-l[h].x),g<0?d|=1:g>0&&(d|=2),d===3)return!1;return d!==0?!0:null},s.hull=function(l){var d=[],c=[],u,h;for(l=l.slice(0),l.sort(function(p,g){var f=p.x-g.x;return f!==0?f:p.y-g.y}),h=0;h<l.length;h+=1){for(u=l[h];c.length>=2&&o.cross3(c[c.length-2],c[c.length-1],u)<=0;)c.pop();c.push(u)}for(h=l.length-1;h>=0;h-=1){for(u=l[h];d.length>=2&&o.cross3(d[d.length-2],d[d.length-1],u)<=0;)d.pop();d.push(u)}return d.pop(),c.pop(),d.concat(c)}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(2),l=e(7),d=e(0),c=e(1),u=e(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(p){var g={id:d.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},f=d.extend(g,p);return h(f,p),f},s.nextGroup=function(p){return p?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var h=function(p,g){g=g||{},s.set(p,{bounds:p.bounds||c.create(p.vertices),positionPrev:p.positionPrev||i.clone(p.position),anglePrev:p.anglePrev||p.angle,vertices:p.vertices,parts:p.parts||[p],isStatic:p.isStatic,isSleeping:p.isSleeping,parent:p.parent||p}),o.rotate(p.vertices,p.angle,p.position),u.rotate(p.axes,p.angle),c.update(p.bounds,p.vertices,p.velocity),s.set(p,{axes:g.axes||p.axes,area:g.area||p.area,mass:g.mass||p.mass,inertia:g.inertia||p.inertia});var f=p.isStatic?"#14151f":d.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=p.isStatic?"#555":"#ccc",v=p.isStatic&&p.render.fillStyle===null?1:0;p.render.fillStyle=p.render.fillStyle||f,p.render.strokeStyle=p.render.strokeStyle||m,p.render.lineWidth=p.render.lineWidth||v,p.render.sprite.xOffset+=-(p.bounds.min.x-p.position.x)/(p.bounds.max.x-p.bounds.min.x),p.render.sprite.yOffset+=-(p.bounds.min.y-p.position.y)/(p.bounds.max.y-p.bounds.min.y)};s.set=function(p,g,f){var m;typeof g=="string"&&(m=g,g={},g[m]=f);for(m in g)if(Object.prototype.hasOwnProperty.call(g,m))switch(f=g[m],m){case"isStatic":s.setStatic(p,f);break;case"isSleeping":l.set(p,f);break;case"mass":s.setMass(p,f);break;case"density":s.setDensity(p,f);break;case"inertia":s.setInertia(p,f);break;case"vertices":s.setVertices(p,f);break;case"position":s.setPosition(p,f);break;case"angle":s.setAngle(p,f);break;case"velocity":s.setVelocity(p,f);break;case"angularVelocity":s.setAngularVelocity(p,f);break;case"speed":s.setSpeed(p,f);break;case"angularSpeed":s.setAngularSpeed(p,f);break;case"parts":s.setParts(p,f);break;case"centre":s.setCentre(p,f);break;default:p[m]=f}},s.setStatic=function(p,g){for(var f=0;f<p.parts.length;f++){var m=p.parts[f];g?(m.isStatic||(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia}),m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null),m.isStatic=g}},s.setMass=function(p,g){var f=p.inertia/(p.mass/6);p.inertia=f*(g/6),p.inverseInertia=1/p.inertia,p.mass=g,p.inverseMass=1/p.mass,p.density=p.mass/p.area},s.setDensity=function(p,g){s.setMass(p,g*p.area),p.density=g},s.setInertia=function(p,g){p.inertia=g,p.inverseInertia=1/p.inertia},s.setVertices=function(p,g){g[0].body===p?p.vertices=g:p.vertices=o.create(g,p),p.axes=u.fromVertices(p.vertices),p.area=o.area(p.vertices),s.setMass(p,p.density*p.area);var f=o.centre(p.vertices);o.translate(p.vertices,f,-1),s.setInertia(p,s._inertiaScale*o.inertia(p.vertices,p.mass)),o.translate(p.vertices,p.position),c.update(p.bounds,p.vertices,p.velocity)},s.setParts=function(p,g,f){var m;for(g=g.slice(0),p.parts.length=0,p.parts.push(p),p.parent=p,m=0;m<g.length;m++){var v=g[m];v!==p&&(v.parent=p,p.parts.push(v))}if(p.parts.length!==1){if(f=typeof f<"u"?f:!0,f){var b=[];for(m=0;m<g.length;m++)b=b.concat(g[m].vertices);o.clockwiseSort(b);var _=o.hull(b),S=o.centre(_);s.setVertices(p,_),o.translate(p.vertices,S)}var k=s._totalProperties(p);p.area=k.area,p.parent=p,p.position.x=k.centre.x,p.position.y=k.centre.y,p.positionPrev.x=k.centre.x,p.positionPrev.y=k.centre.y,s.setMass(p,k.mass),s.setInertia(p,k.inertia),s.setPosition(p,k.centre)}},s.setCentre=function(p,g,f){f?(p.positionPrev.x+=g.x,p.positionPrev.y+=g.y,p.position.x+=g.x,p.position.y+=g.y):(p.positionPrev.x=g.x-(p.position.x-p.positionPrev.x),p.positionPrev.y=g.y-(p.position.y-p.positionPrev.y),p.position.x=g.x,p.position.y=g.y)},s.setPosition=function(p,g,f){var m=i.sub(g,p.position);f?(p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.velocity.x=m.x,p.velocity.y=m.y,p.speed=i.magnitude(m)):(p.positionPrev.x+=m.x,p.positionPrev.y+=m.y);for(var v=0;v<p.parts.length;v++){var b=p.parts[v];b.position.x+=m.x,b.position.y+=m.y,o.translate(b.vertices,m),c.update(b.bounds,b.vertices,p.velocity)}},s.setAngle=function(p,g,f){var m=g-p.angle;f?(p.anglePrev=p.angle,p.angularVelocity=m,p.angularSpeed=Math.abs(m)):p.anglePrev+=m;for(var v=0;v<p.parts.length;v++){var b=p.parts[v];b.angle+=m,o.rotate(b.vertices,m,p.position),u.rotate(b.axes,m),c.update(b.bounds,b.vertices,p.velocity),v>0&&i.rotateAbout(b.position,m,p.position,b.position)}},s.setVelocity=function(p,g){var f=p.deltaTime/s._baseDelta;p.positionPrev.x=p.position.x-g.x*f,p.positionPrev.y=p.position.y-g.y*f,p.velocity.x=(p.position.x-p.positionPrev.x)/f,p.velocity.y=(p.position.y-p.positionPrev.y)/f,p.speed=i.magnitude(p.velocity)},s.getVelocity=function(p){var g=s._baseDelta/p.deltaTime;return{x:(p.position.x-p.positionPrev.x)*g,y:(p.position.y-p.positionPrev.y)*g}},s.getSpeed=function(p){return i.magnitude(s.getVelocity(p))},s.setSpeed=function(p,g){s.setVelocity(p,i.mult(i.normalise(s.getVelocity(p)),g))},s.setAngularVelocity=function(p,g){var f=p.deltaTime/s._baseDelta;p.anglePrev=p.angle-g*f,p.angularVelocity=(p.angle-p.anglePrev)/f,p.angularSpeed=Math.abs(p.angularVelocity)},s.getAngularVelocity=function(p){return(p.angle-p.anglePrev)*s._baseDelta/p.deltaTime},s.getAngularSpeed=function(p){return Math.abs(s.getAngularVelocity(p))},s.setAngularSpeed=function(p,g){s.setAngularVelocity(p,d.sign(s.getAngularVelocity(p))*g)},s.translate=function(p,g,f){s.setPosition(p,i.add(p.position,g),f)},s.rotate=function(p,g,f,m){if(!f)s.setAngle(p,p.angle+g,m);else{var v=Math.cos(g),b=Math.sin(g),_=p.position.x-f.x,S=p.position.y-f.y;s.setPosition(p,{x:f.x+(_*v-S*b),y:f.y+(_*b+S*v)},m),s.setAngle(p,p.angle+g,m)}},s.scale=function(p,g,f,m){var v=0,b=0;m=m||p.position;for(var _=0;_<p.parts.length;_++){var S=p.parts[_];o.scale(S.vertices,g,f,m),S.axes=u.fromVertices(S.vertices),S.area=o.area(S.vertices),s.setMass(S,p.density*S.area),o.translate(S.vertices,{x:-S.position.x,y:-S.position.y}),s.setInertia(S,s._inertiaScale*o.inertia(S.vertices,S.mass)),o.translate(S.vertices,{x:S.position.x,y:S.position.y}),_>0&&(v+=S.area,b+=S.inertia),S.position.x=m.x+(S.position.x-m.x)*g,S.position.y=m.y+(S.position.y-m.y)*f,c.update(S.bounds,S.vertices,p.velocity)}p.parts.length>1&&(p.area=v,p.isStatic||(s.setMass(p,p.density*v),s.setInertia(p,b))),p.circleRadius&&(g===f?p.circleRadius*=g:p.circleRadius=null)},s.update=function(p,g){g=(typeof g<"u"?g:1e3/60)*p.timeScale;var f=g*g,m=s._timeCorrection?g/(p.deltaTime||g):1,v=1-p.frictionAir*(g/d._baseDelta),b=(p.position.x-p.positionPrev.x)*m,_=(p.position.y-p.positionPrev.y)*m;p.velocity.x=b*v+p.force.x/p.mass*f,p.velocity.y=_*v+p.force.y/p.mass*f,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.position.x+=p.velocity.x,p.position.y+=p.velocity.y,p.deltaTime=g,p.angularVelocity=(p.angle-p.anglePrev)*v*m+p.torque/p.inertia*f,p.anglePrev=p.angle,p.angle+=p.angularVelocity;for(var S=0;S<p.parts.length;S++){var k=p.parts[S];o.translate(k.vertices,p.velocity),S>0&&(k.position.x+=p.velocity.x,k.position.y+=p.velocity.y),p.angularVelocity!==0&&(o.rotate(k.vertices,p.angularVelocity,p.position),u.rotate(k.axes,p.angularVelocity),S>0&&i.rotateAbout(k.position,p.angularVelocity,p.position,k.position)),c.update(k.bounds,k.vertices,p.velocity)}},s.updateVelocities=function(p){var g=s._baseDelta/p.deltaTime,f=p.velocity;f.x=(p.position.x-p.positionPrev.x)*g,f.y=(p.position.y-p.positionPrev.y)*g,p.speed=Math.sqrt(f.x*f.x+f.y*f.y),p.angularVelocity=(p.angle-p.anglePrev)*g,p.angularSpeed=Math.abs(p.angularVelocity)},s.applyForce=function(p,g,f){var m={x:g.x-p.position.x,y:g.y-p.position.y};p.force.x+=f.x,p.force.y+=f.y,p.torque+=m.x*f.y-m.y*f.x},s._totalProperties=function(p){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},f=p.parts.length===1?0:1;f<p.parts.length;f++){var m=p.parts[f],v=m.mass!==1/0?m.mass:1;g.mass+=v,g.area+=m.area,g.inertia+=m.inertia,g.centre=i.add(g.centre,i.mult(m.position,v))}return g.centre=i.div(g.centre,g.mass),g}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s.on=function(i,l,d){for(var c=l.split(" "),u,h=0;h<c.length;h++)u=c[h],i.events=i.events||{},i.events[u]=i.events[u]||[],i.events[u].push(d);return d},s.off=function(i,l,d){if(!l){i.events={};return}typeof l=="function"&&(d=l,l=o.keys(i.events).join(" "));for(var c=l.split(" "),u=0;u<c.length;u++){var h=i.events[c[u]],p=[];if(d&&h)for(var g=0;g<h.length;g++)h[g]!==d&&p.push(h[g]);i.events[c[u]]=p}},s.trigger=function(i,l,d){var c,u,h,p,g=i.events;if(g&&o.keys(g).length>0){d||(d={}),c=l.split(" ");for(var f=0;f<c.length;f++)if(u=c[f],h=g[u],h){p=o.clone(d,!1),p.name=u,p.source=i;for(var m=0;m<h.length;m++)h[m].apply(i,[p])}}}})()},function(a,r,e){var s={};a.exports=s;var o=e(5),i=e(0),l=e(1),d=e(4);(function(){s.create=function(c){return i.extend({id:i.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},c)},s.setModified=function(c,u,h,p){if(c.isModified=u,u&&c.cache&&(c.cache.allBodies=null,c.cache.allConstraints=null,c.cache.allComposites=null),h&&c.parent&&s.setModified(c.parent,u,h,p),p)for(var g=0;g<c.composites.length;g++){var f=c.composites[g];s.setModified(f,u,h,p)}},s.add=function(c,u){var h=[].concat(u);o.trigger(c,"beforeAdd",{object:u});for(var p=0;p<h.length;p++){var g=h[p];switch(g.type){case"body":if(g.parent!==g){i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(c,g);break;case"constraint":s.addConstraint(c,g);break;case"composite":s.addComposite(c,g);break;case"mouseConstraint":s.addConstraint(c,g.constraint);break}}return o.trigger(c,"afterAdd",{object:u}),c},s.remove=function(c,u,h){var p=[].concat(u);o.trigger(c,"beforeRemove",{object:u});for(var g=0;g<p.length;g++){var f=p[g];switch(f.type){case"body":s.removeBody(c,f,h);break;case"constraint":s.removeConstraint(c,f,h);break;case"composite":s.removeComposite(c,f,h);break;case"mouseConstraint":s.removeConstraint(c,f.constraint);break}}return o.trigger(c,"afterRemove",{object:u}),c},s.addComposite=function(c,u){return c.composites.push(u),u.parent=c,s.setModified(c,!0,!0,!1),c},s.removeComposite=function(c,u,h){var p=i.indexOf(c.composites,u);if(p!==-1){var g=s.allBodies(u);s.removeCompositeAt(c,p);for(var f=0;f<g.length;f++)g[f].sleepCounter=0}if(h)for(var f=0;f<c.composites.length;f++)s.removeComposite(c.composites[f],u,!0);return c},s.removeCompositeAt=function(c,u){return c.composites.splice(u,1),s.setModified(c,!0,!0,!1),c},s.addBody=function(c,u){return c.bodies.push(u),s.setModified(c,!0,!0,!1),c},s.removeBody=function(c,u,h){var p=i.indexOf(c.bodies,u);if(p!==-1&&(s.removeBodyAt(c,p),u.sleepCounter=0),h)for(var g=0;g<c.composites.length;g++)s.removeBody(c.composites[g],u,!0);return c},s.removeBodyAt=function(c,u){return c.bodies.splice(u,1),s.setModified(c,!0,!0,!1),c},s.addConstraint=function(c,u){return c.constraints.push(u),s.setModified(c,!0,!0,!1),c},s.removeConstraint=function(c,u,h){var p=i.indexOf(c.constraints,u);if(p!==-1&&s.removeConstraintAt(c,p),h)for(var g=0;g<c.composites.length;g++)s.removeConstraint(c.composites[g],u,!0);return c},s.removeConstraintAt=function(c,u){return c.constraints.splice(u,1),s.setModified(c,!0,!0,!1),c},s.clear=function(c,u,h){if(h)for(var p=0;p<c.composites.length;p++)s.clear(c.composites[p],u,!0);return u?c.bodies=c.bodies.filter(function(g){return g.isStatic}):c.bodies.length=0,c.constraints.length=0,c.composites.length=0,s.setModified(c,!0,!0,!1),c},s.allBodies=function(c){if(c.cache&&c.cache.allBodies)return c.cache.allBodies;for(var u=[].concat(c.bodies),h=0;h<c.composites.length;h++)u=u.concat(s.allBodies(c.composites[h]));return c.cache&&(c.cache.allBodies=u),u},s.allConstraints=function(c){if(c.cache&&c.cache.allConstraints)return c.cache.allConstraints;for(var u=[].concat(c.constraints),h=0;h<c.composites.length;h++)u=u.concat(s.allConstraints(c.composites[h]));return c.cache&&(c.cache.allConstraints=u),u},s.allComposites=function(c){if(c.cache&&c.cache.allComposites)return c.cache.allComposites;for(var u=[].concat(c.composites),h=0;h<c.composites.length;h++)u=u.concat(s.allComposites(c.composites[h]));return c.cache&&(c.cache.allComposites=u),u},s.get=function(c,u,h){var p,g;switch(h){case"body":p=s.allBodies(c);break;case"constraint":p=s.allConstraints(c);break;case"composite":p=s.allComposites(c).concat(c);break}return p?(g=p.filter(function(f){return f.id.toString()===u.toString()}),g.length===0?null:g[0]):null},s.move=function(c,u,h){return s.remove(c,u),s.add(h,u),c},s.rebase=function(c){for(var u=s.allBodies(c).concat(s.allConstraints(c)).concat(s.allComposites(c)),h=0;h<u.length;h++)u[h].id=i.nextId();return c},s.translate=function(c,u,h){for(var p=h?s.allBodies(c):c.bodies,g=0;g<p.length;g++)d.translate(p[g],u);return c},s.rotate=function(c,u,h,p){for(var g=Math.cos(u),f=Math.sin(u),m=p?s.allBodies(c):c.bodies,v=0;v<m.length;v++){var b=m[v],_=b.position.x-h.x,S=b.position.y-h.y;d.setPosition(b,{x:h.x+(_*g-S*f),y:h.y+(_*f+S*g)}),d.rotate(b,u)}return c},s.scale=function(c,u,h,p,g){for(var f=g?s.allBodies(c):c.bodies,m=0;m<f.length;m++){var v=f[m],b=v.position.x-p.x,_=v.position.y-p.y;d.setPosition(v,{x:p.x+b*u,y:p.y+_*h}),d.scale(v,u,h)}return c},s.bounds=function(c){for(var u=s.allBodies(c),h=[],p=0;p<u.length;p+=1){var g=u[p];h.push(g.bounds.min,g.bounds.max)}return l.create(h)}})()},function(a,r,e){var s={};a.exports=s;var o=e(4),i=e(5),l=e(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(d,c){for(var u=c/l._baseDelta,h=s._motionSleepThreshold,p=0;p<d.length;p++){var g=d[p],f=o.getSpeed(g),m=o.getAngularSpeed(g),v=f*f+m*m;if(g.force.x!==0||g.force.y!==0){s.set(g,!1);continue}var b=Math.min(g.motion,v),_=Math.max(g.motion,v);g.motion=s._minBias*b+(1-s._minBias)*_,g.sleepThreshold>0&&g.motion<h?(g.sleepCounter+=1,g.sleepCounter>=g.sleepThreshold/u&&s.set(g,!0)):g.sleepCounter>0&&(g.sleepCounter-=1)}},s.afterCollisions=function(d){for(var c=s._motionSleepThreshold,u=0;u<d.length;u++){var h=d[u];if(h.isActive){var p=h.collision,g=p.bodyA.parent,f=p.bodyB.parent;if(!(g.isSleeping&&f.isSleeping||g.isStatic||f.isStatic)&&(g.isSleeping||f.isSleeping)){var m=g.isSleeping&&!g.isStatic?g:f,v=m===g?f:g;!m.isStatic&&v.motion>c&&s.set(m,!1)}}}},s.set=function(d,c){var u=d.isSleeping;c?(d.isSleeping=!0,d.sleepCounter=d.sleepThreshold,d.positionImpulse.x=0,d.positionImpulse.y=0,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.anglePrev=d.angle,d.speed=0,d.angularSpeed=0,d.motion=0,u||i.trigger(d,"sleepStart")):(d.isSleeping=!1,d.sleepCounter=0,u&&i.trigger(d,"sleepEnd"))}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(9);(function(){var l=[],d={overlap:0,axis:null},c={overlap:0,axis:null};s.create=function(u,h){return{pair:null,collided:!1,bodyA:u,bodyB:h,parentA:u.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(u,h,p){if(s._overlapAxes(d,u.vertices,h.vertices,u.axes),d.overlap<=0||(s._overlapAxes(c,h.vertices,u.vertices,h.axes),c.overlap<=0))return null;var g=p&&p.table[i.id(u,h)],f;g?f=g.collision:(f=s.create(u,h),f.collided=!0,f.bodyA=u.id<h.id?u:h,f.bodyB=u.id<h.id?h:u,f.parentA=f.bodyA.parent,f.parentB=f.bodyB.parent),u=f.bodyA,h=f.bodyB;var m;d.overlap<c.overlap?m=d:m=c;var v=f.normal,b=f.tangent,_=f.penetration,S=f.supports,k=m.overlap,x=m.axis,w=x.x,y=x.y,j=h.position.x-u.position.x,T=h.position.y-u.position.y;w*j+y*T>=0&&(w=-w,y=-y),v.x=w,v.y=y,b.x=-y,b.y=w,_.x=w*k,_.y=y*k,f.depth=k;var P=s._findSupports(u,h,v,1),C=0;if(o.contains(u.vertices,P[0])&&(S[C++]=P[0]),o.contains(u.vertices,P[1])&&(S[C++]=P[1]),C<2){var A=s._findSupports(h,u,v,-1);o.contains(h.vertices,A[0])&&(S[C++]=A[0]),C<2&&o.contains(h.vertices,A[1])&&(S[C++]=A[1])}return C===0&&(S[C++]=P[0]),f.supportCount=C,f},s._overlapAxes=function(u,h,p,g){var f=h.length,m=p.length,v=h[0].x,b=h[0].y,_=p[0].x,S=p[0].y,k=g.length,x=Number.MAX_VALUE,w=0,y,j,T,P,C,A;for(C=0;C<k;C++){var I=g[C],F=I.x,G=I.y,L=v*F+b*G,V=_*F+S*G,nn=L,on=V;for(A=1;A<f;A+=1)P=h[A].x*F+h[A].y*G,P>nn?nn=P:P<L&&(L=P);for(A=1;A<m;A+=1)P=p[A].x*F+p[A].y*G,P>on?on=P:P<V&&(V=P);if(j=nn-V,T=on-L,y=j<T?j:T,y<x&&(x=y,w=C,y<=0))break}u.axis=g[w],u.overlap=x},s._findSupports=function(u,h,p,g){var f=h.vertices,m=f.length,v=u.position.x,b=u.position.y,_=p.x*g,S=p.y*g,k=f[0],x=k,w=_*(v-x.x)+S*(b-x.y),y,j,T;for(T=1;T<m;T+=1)x=f[T],j=_*(v-x.x)+S*(b-x.y),j<w&&(w=j,k=x);return y=f[(m+k.index-1)%m],w=_*(v-y.x)+S*(b-y.y),x=f[(k.index+1)%m],_*(v-x.x)+S*(b-x.y)<w?(l[0]=k,l[1]=x,l):(l[0]=k,l[1]=y,l)}})()},function(a,r,e){var s={};a.exports=s;var o=e(16);(function(){s.create=function(i,l){var d=i.bodyA,c=i.bodyB,u={id:s.id(d,c),bodyA:d,bodyB:c,collision:i,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:d.isSensor||c.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(u,i,l),u},s.update=function(i,l,d){var c=l.supports,u=l.supportCount,h=i.contacts,p=l.parentA,g=l.parentB;i.isActive=!0,i.timeUpdated=d,i.collision=l,i.separation=l.depth,i.inverseMass=p.inverseMass+g.inverseMass,i.friction=p.friction<g.friction?p.friction:g.friction,i.frictionStatic=p.frictionStatic>g.frictionStatic?p.frictionStatic:g.frictionStatic,i.restitution=p.restitution>g.restitution?p.restitution:g.restitution,i.slop=p.slop>g.slop?p.slop:g.slop,i.contactCount=u,l.pair=i;var f=c[0],m=h[0],v=c[1],b=h[1];(b.vertex===f||m.vertex===v)&&(h[1]=m,h[0]=m=b,b=h[1]),m.vertex=f,b.vertex=v},s.setActive=function(i,l,d){l?(i.isActive=!0,i.timeUpdated=d):(i.isActive=!1,i.contactCount=0)},s.id=function(i,l){return i.id<l.id?i.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+i.id.toString(36)}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(2),l=e(7),d=e(1),c=e(11),u=e(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(h){var p=h;p.bodyA&&!p.pointA&&(p.pointA={x:0,y:0}),p.bodyB&&!p.pointB&&(p.pointB={x:0,y:0});var g=p.bodyA?i.add(p.bodyA.position,p.pointA):p.pointA,f=p.bodyB?i.add(p.bodyB.position,p.pointB):p.pointB,m=i.magnitude(i.sub(g,f));p.length=typeof p.length<"u"?p.length:m,p.id=p.id||u.nextId(),p.label=p.label||"Constraint",p.type="constraint",p.stiffness=p.stiffness||(p.length>0?1:.7),p.damping=p.damping||0,p.angularStiffness=p.angularStiffness||0,p.angleA=p.bodyA?p.bodyA.angle:p.angleA,p.angleB=p.bodyB?p.bodyB.angle:p.angleB,p.plugin={};var v={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return p.length===0&&p.stiffness>.1?(v.type="pin",v.anchors=!1):p.stiffness<.9&&(v.type="spring"),p.render=u.extend(v,p.render),p},s.preSolveAll=function(h){for(var p=0;p<h.length;p+=1){var g=h[p],f=g.constraintImpulse;g.isStatic||f.x===0&&f.y===0&&f.angle===0||(g.position.x+=f.x,g.position.y+=f.y,g.angle+=f.angle)}},s.solveAll=function(h,p){for(var g=u.clamp(p/u._baseDelta,0,1),f=0;f<h.length;f+=1){var m=h[f],v=!m.bodyA||m.bodyA&&m.bodyA.isStatic,b=!m.bodyB||m.bodyB&&m.bodyB.isStatic;(v||b)&&s.solve(h[f],g)}for(f=0;f<h.length;f+=1)m=h[f],v=!m.bodyA||m.bodyA&&m.bodyA.isStatic,b=!m.bodyB||m.bodyB&&m.bodyB.isStatic,!v&&!b&&s.solve(h[f],g)},s.solve=function(h,p){var g=h.bodyA,f=h.bodyB,m=h.pointA,v=h.pointB;if(!(!g&&!f)){g&&!g.isStatic&&(i.rotate(m,g.angle-h.angleA,m),h.angleA=g.angle),f&&!f.isStatic&&(i.rotate(v,f.angle-h.angleB,v),h.angleB=f.angle);var b=m,_=v;if(g&&(b=i.add(g.position,m)),f&&(_=i.add(f.position,v)),!(!b||!_)){var S=i.sub(b,_),k=i.magnitude(S);k<s._minLength&&(k=s._minLength);var x=(k-h.length)/k,w=h.stiffness>=1||h.length===0,y=w?h.stiffness*p:h.stiffness*p*p,j=h.damping*p,T=i.mult(S,x*y),P=(g?g.inverseMass:0)+(f?f.inverseMass:0),C=(g?g.inverseInertia:0)+(f?f.inverseInertia:0),A=P+C,I,F,G,L,V;if(j>0){var nn=i.create();G=i.div(S,k),V=i.sub(f&&i.sub(f.position,f.positionPrev)||nn,g&&i.sub(g.position,g.positionPrev)||nn),L=i.dot(G,V)}g&&!g.isStatic&&(F=g.inverseMass/P,g.constraintImpulse.x-=T.x*F,g.constraintImpulse.y-=T.y*F,g.position.x-=T.x*F,g.position.y-=T.y*F,j>0&&(g.positionPrev.x-=j*G.x*L*F,g.positionPrev.y-=j*G.y*L*F),I=i.cross(m,T)/A*s._torqueDampen*g.inverseInertia*(1-h.angularStiffness),g.constraintImpulse.angle-=I,g.angle-=I),f&&!f.isStatic&&(F=f.inverseMass/P,f.constraintImpulse.x+=T.x*F,f.constraintImpulse.y+=T.y*F,f.position.x+=T.x*F,f.position.y+=T.y*F,j>0&&(f.positionPrev.x+=j*G.x*L*F,f.positionPrev.y+=j*G.y*L*F),I=i.cross(v,T)/A*s._torqueDampen*f.inverseInertia*(1-h.angularStiffness),f.constraintImpulse.angle+=I,f.angle+=I)}}},s.postSolveAll=function(h){for(var p=0;p<h.length;p++){var g=h[p],f=g.constraintImpulse;if(!(g.isStatic||f.x===0&&f.y===0&&f.angle===0)){l.set(g,!1);for(var m=0;m<g.parts.length;m++){var v=g.parts[m];o.translate(v.vertices,f),m>0&&(v.position.x+=f.x,v.position.y+=f.y),f.angle!==0&&(o.rotate(v.vertices,f.angle,g.position),c.rotate(v.axes,f.angle),m>0&&i.rotateAbout(v.position,f.angle,g.position,v.position)),d.update(v.bounds,v.vertices,g.velocity)}f.angle*=s._warming,f.x*=s._warming,f.y*=s._warming}}},s.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},s.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},s.currentLength=function(h){var p=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),g=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),f=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),m=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),v=p-f,b=g-m;return Math.sqrt(v*v+b*b)}})()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(0);(function(){s.fromVertices=function(l){for(var d={},c=0;c<l.length;c++){var u=(c+1)%l.length,h=o.normalise({x:l[u].y-l[c].y,y:l[c].x-l[u].x}),p=h.y===0?1/0:h.x/h.y;p=p.toFixed(3).toString(),d[p]=h}return i.values(d)},s.rotate=function(l,d){if(d!==0)for(var c=Math.cos(d),u=Math.sin(d),h=0;h<l.length;h++){var p=l[h],g;g=p.x*c-p.y*u,p.y=p.x*u+p.y*c,p.x=g}}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(0),l=e(4),d=e(1),c=e(2);(function(){s.rectangle=function(u,h,p,g,f){f=f||{};var m={label:"Rectangle Body",position:{x:u,y:h},vertices:o.fromPath("L 0 0 L "+p+" 0 L "+p+" "+g+" L 0 "+g)};if(f.chamfer){var v=f.chamfer;m.vertices=o.chamfer(m.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete f.chamfer}return l.create(i.extend({},m,f))},s.trapezoid=function(u,h,p,g,f,m){m=m||{},f>=1&&i.warn("Bodies.trapezoid: slope parameter must be < 1."),f*=.5;var v=(1-f*2)*p,b=p*f,_=b+v,S=_+b,k;f<.5?k="L 0 0 L "+b+" "+-g+" L "+_+" "+-g+" L "+S+" 0":k="L 0 0 L "+_+" "+-g+" L "+S+" 0";var x={label:"Trapezoid Body",position:{x:u,y:h},vertices:o.fromPath(k)};if(m.chamfer){var w=m.chamfer;x.vertices=o.chamfer(x.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete m.chamfer}return l.create(i.extend({},x,m))},s.circle=function(u,h,p,g,f){g=g||{};var m={label:"Circle Body",circleRadius:p};f=f||25;var v=Math.ceil(Math.max(10,Math.min(f,p)));return v%2===1&&(v+=1),s.polygon(u,h,v,p,i.extend({},m,g))},s.polygon=function(u,h,p,g,f){if(f=f||{},p<3)return s.circle(u,h,g,f);for(var m=2*Math.PI/p,v="",b=m*.5,_=0;_<p;_+=1){var S=b+_*m,k=Math.cos(S)*g,x=Math.sin(S)*g;v+="L "+k.toFixed(3)+" "+x.toFixed(3)+" "}var w={label:"Polygon Body",position:{x:u,y:h},vertices:o.fromPath(v)};if(f.chamfer){var y=f.chamfer;w.vertices=o.chamfer(w.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete f.chamfer}return l.create(i.extend({},w,f))},s.fromVertices=function(u,h,p,g,f,m,v,b){var _=i.getDecomp(),S,k,x,w,y,j,T,P,C,A,I;for(S=!!(_&&_.quickDecomp),g=g||{},x=[],f=typeof f<"u"?f:!1,m=typeof m<"u"?m:.01,v=typeof v<"u"?v:10,b=typeof b<"u"?b:.01,i.isArray(p[0])||(p=[p]),A=0;A<p.length;A+=1)if(j=p[A],w=o.isConvex(j),y=!w,y&&!S&&i.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),w||!S)w?j=o.clockwiseSort(j):j=o.hull(j),x.push({position:{x:u,y:h},vertices:j});else{var F=j.map(function(Q){return[Q.x,Q.y]});_.makeCCW(F),m!==!1&&_.removeCollinearPoints(F,m),b!==!1&&_.removeDuplicatePoints&&_.removeDuplicatePoints(F,b);var G=_.quickDecomp(F);for(T=0;T<G.length;T++){var L=G[T],V=L.map(function(Q){return{x:Q[0],y:Q[1]}});v>0&&o.area(V)<v||x.push({position:o.centre(V),vertices:V})}}for(T=0;T<x.length;T++)x[T]=l.create(i.extend(x[T],g));if(f){var nn=5;for(T=0;T<x.length;T++){var on=x[T];for(P=T+1;P<x.length;P++){var pn=x[P];if(d.overlaps(on.bounds,pn.bounds)){var sn=on.vertices,dn=pn.vertices;for(C=0;C<on.vertices.length;C++)for(I=0;I<pn.vertices.length;I++){var cn=c.magnitudeSquared(c.sub(sn[(C+1)%sn.length],dn[I])),un=c.magnitudeSquared(c.sub(sn[C],dn[(I+1)%dn.length]));cn<nn&&un<nn&&(sn[C].isInternal=!0,dn[I].isInternal=!0)}}}}}return x.length>1?(k=l.create(i.extend({parts:x.slice(0)},g)),l.setPosition(k,{x:u,y:h}),k):x[0]}})()},function(a,r,e){var s={};a.exports=s;var o=e(0),i=e(8);(function(){s.create=function(l){var d={bodies:[],collisions:[],pairs:null};return o.extend(d,l)},s.setBodies=function(l,d){l.bodies=d.slice(0)},s.clear=function(l){l.bodies=[],l.collisions=[]},s.collisions=function(l){var d=l.pairs,c=l.bodies,u=c.length,h=s.canCollide,p=i.collides,g=l.collisions,f=0,m,v;for(c.sort(s._compareBoundsX),m=0;m<u;m++){var b=c[m],_=b.bounds,S=b.bounds.max.x,k=b.bounds.max.y,x=b.bounds.min.y,w=b.isStatic||b.isSleeping,y=b.parts.length,j=y===1;for(v=m+1;v<u;v++){var T=c[v],P=T.bounds;if(P.min.x>S)break;if(!(k<P.min.y||x>P.max.y)&&!(w&&(T.isStatic||T.isSleeping))&&h(b.collisionFilter,T.collisionFilter)){var C=T.parts.length;if(j&&C===1){var A=p(b,T,d);A&&(g[f++]=A)}else for(var I=y>1?1:0,F=C>1?1:0,G=I;G<y;G++)for(var L=b.parts[G],_=L.bounds,V=F;V<C;V++){var nn=T.parts[V],P=nn.bounds;if(!(_.min.x>P.max.x||_.max.x<P.min.x||_.max.y<P.min.y||_.min.y>P.max.y)){var A=p(L,nn,d);A&&(g[f++]=A)}}}}}return g.length!==f&&(g.length=f),g},s.canCollide=function(l,d){return l.group===d.group&&l.group!==0?l.group>0:(l.mask&d.category)!==0&&(d.mask&l.category)!==0},s._compareBoundsX=function(l,d){return l.bounds.min.x-d.bounds.min.x}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s.create=function(i){var l={};return i||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=i||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(d){var c=s._getRelativeMousePosition(d,l.element,l.pixelRatio),u=d.changedTouches;u&&(l.button=0,d.preventDefault()),l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=d},l.mousedown=function(d){var c=s._getRelativeMousePosition(d,l.element,l.pixelRatio),u=d.changedTouches;u?(l.button=0,d.preventDefault()):l.button=d.button,l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=d},l.mouseup=function(d){var c=s._getRelativeMousePosition(d,l.element,l.pixelRatio),u=d.changedTouches;u&&d.preventDefault(),l.button=-1,l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=d},l.mousewheel=function(d){l.wheelDelta=Math.max(-1,Math.min(1,d.wheelDelta||-d.detail)),d.preventDefault(),l.sourceEvents.mousewheel=d},s.setElement(l,l.element),l},s.setElement=function(i,l){i.element=l,l.addEventListener("mousemove",i.mousemove,{passive:!0}),l.addEventListener("mousedown",i.mousedown,{passive:!0}),l.addEventListener("mouseup",i.mouseup,{passive:!0}),l.addEventListener("wheel",i.mousewheel,{passive:!1}),l.addEventListener("touchmove",i.mousemove,{passive:!1}),l.addEventListener("touchstart",i.mousedown,{passive:!1}),l.addEventListener("touchend",i.mouseup,{passive:!1})},s.clearSourceEvents=function(i){i.sourceEvents.mousemove=null,i.sourceEvents.mousedown=null,i.sourceEvents.mouseup=null,i.sourceEvents.mousewheel=null,i.wheelDelta=0},s.setOffset=function(i,l){i.offset.x=l.x,i.offset.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},s.setScale=function(i,l){i.scale.x=l.x,i.scale.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},s._getRelativeMousePosition=function(i,l,d){var c=l.getBoundingClientRect(),u=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:u.scrollLeft,p=window.pageYOffset!==void 0?window.pageYOffset:u.scrollTop,g=i.changedTouches,f,m;return g?(f=g[0].pageX-c.left-h,m=g[0].pageY-c.top-p):(f=i.pageX-c.left-h,m=i.pageY-c.top-p),{x:f/(l.clientWidth/(l.width||l.clientWidth)*d),y:m/(l.clientHeight/(l.height||l.clientHeight)*d)}}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s._registry={},s.register=function(i){if(s.isPlugin(i)||o.warn("Plugin.register:",s.toString(i),"does not implement all required fields."),i.name in s._registry){var l=s._registry[i.name],d=s.versionParse(i.version).number,c=s.versionParse(l.version).number;d>c?(o.warn("Plugin.register:",s.toString(l),"was upgraded to",s.toString(i)),s._registry[i.name]=i):d<c?o.warn("Plugin.register:",s.toString(l),"can not be downgraded to",s.toString(i)):i!==l&&o.warn("Plugin.register:",s.toString(i),"is already registered to different plugin object")}else s._registry[i.name]=i;return i},s.resolve=function(i){return s._registry[s.dependencyParse(i).name]},s.toString=function(i){return typeof i=="string"?i:(i.name||"anonymous")+"@"+(i.version||i.range||"0.0.0")},s.isPlugin=function(i){return i&&i.name&&i.version&&i.install},s.isUsed=function(i,l){return i.used.indexOf(l)>-1},s.isFor=function(i,l){var d=i.for&&s.dependencyParse(i.for);return!i.for||l.name===d.name&&s.versionSatisfies(l.version,d.range)},s.use=function(i,l){if(i.uses=(i.uses||[]).concat(l||[]),i.uses.length===0){o.warn("Plugin.use:",s.toString(i),"does not specify any dependencies to install.");return}for(var d=s.dependencies(i),c=o.topologicalSort(d),u=[],h=0;h<c.length;h+=1)if(c[h]!==i.name){var p=s.resolve(c[h]);if(!p){u.push("❌ "+c[h]);continue}s.isUsed(i,p.name)||(s.isFor(p,i)||(o.warn("Plugin.use:",s.toString(p),"is for",p.for,"but installed on",s.toString(i)+"."),p._warned=!0),p.install?p.install(i):(o.warn("Plugin.use:",s.toString(p),"does not specify an install function."),p._warned=!0),p._warned?(u.push("🔶 "+s.toString(p)),delete p._warned):u.push("✅ "+s.toString(p)),i.used.push(p.name))}u.length>0&&o.info(u.join("  "))},s.dependencies=function(i,l){var d=s.dependencyParse(i),c=d.name;if(l=l||{},!(c in l)){i=s.resolve(i)||i,l[c]=o.map(i.uses||[],function(h){s.isPlugin(h)&&s.register(h);var p=s.dependencyParse(h),g=s.resolve(h);return g&&!s.versionSatisfies(g.version,p.range)?(o.warn("Plugin.dependencies:",s.toString(g),"does not satisfy",s.toString(p),"used by",s.toString(d)+"."),g._warned=!0,i._warned=!0):g||(o.warn("Plugin.dependencies:",s.toString(h),"used by",s.toString(d),"could not be resolved."),i._warned=!0),p.name});for(var u=0;u<l[c].length;u+=1)s.dependencies(l[c][u],l);return l}},s.dependencyParse=function(i){if(o.isString(i)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(i)||o.warn("Plugin.dependencyParse:",i,"is not a valid dependency string."),{name:i.split("@")[0],range:i.split("@")[1]||"*"}}return{name:i.name,range:i.range||i.version}},s.versionParse=function(i){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(i)||o.warn("Plugin.versionParse:",i,"is not a valid version or range.");var d=l.exec(i),c=Number(d[4]),u=Number(d[5]),h=Number(d[6]);return{isRange:!!(d[1]||d[2]),version:d[3],range:i,operator:d[1]||d[2]||"",major:c,minor:u,patch:h,parts:[c,u,h],prerelease:d[7],number:c*1e8+u*1e4+h}},s.versionSatisfies=function(i,l){l=l||"*";var d=s.versionParse(l),c=s.versionParse(i);if(d.isRange){if(d.operator==="*"||i==="*")return!0;if(d.operator===">")return c.number>d.number;if(d.operator===">=")return c.number>=d.number;if(d.operator==="~")return c.major===d.major&&c.minor===d.minor&&c.patch>=d.patch;if(d.operator==="^")return d.major>0?c.major===d.major&&c.number>=d.number:d.minor>0?c.minor===d.minor&&c.patch>=d.patch:c.patch===d.patch}return i===l||i==="*"}})()},function(a,r){var e={};a.exports=e,function(){e.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}}()},function(a,r,e){var s={};a.exports=s;var o=e(7),i=e(18),l=e(13),d=e(19),c=e(5),u=e(6),h=e(10),p=e(0),g=e(4);(function(){s._deltaMax=1e3/60,s.create=function(f){f=f||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},v=p.extend(m,f);return v.world=f.world||u.create({label:"World"}),v.pairs=f.pairs||d.create(),v.detector=f.detector||l.create(),v.detector.pairs=v.pairs,v.grid={buckets:[]},v.world.gravity=v.gravity,v.broadphase=v.grid,v.metrics={},v},s.update=function(f,m){var v=p.now(),b=f.world,_=f.detector,S=f.pairs,k=f.timing,x=k.timestamp,w;m>s._deltaMax&&p.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),m=typeof m<"u"?m:p._baseDelta,m*=k.timeScale,k.timestamp+=m,k.lastDelta=m;var y={timestamp:k.timestamp,delta:m};c.trigger(f,"beforeUpdate",y);var j=u.allBodies(b),T=u.allConstraints(b);for(b.isModified&&(l.setBodies(_,j),u.setModified(b,!1,!1,!0)),f.enableSleeping&&o.update(j,m),s._bodiesApplyGravity(j,f.gravity),m>0&&s._bodiesUpdate(j,m),c.trigger(f,"beforeSolve",y),h.preSolveAll(j),w=0;w<f.constraintIterations;w++)h.solveAll(T,m);h.postSolveAll(j);var P=l.collisions(_);d.update(S,P,x),f.enableSleeping&&o.afterCollisions(S.list),S.collisionStart.length>0&&c.trigger(f,"collisionStart",{pairs:S.collisionStart,timestamp:k.timestamp,delta:m});var C=p.clamp(20/f.positionIterations,0,1);for(i.preSolvePosition(S.list),w=0;w<f.positionIterations;w++)i.solvePosition(S.list,m,C);for(i.postSolvePosition(j),h.preSolveAll(j),w=0;w<f.constraintIterations;w++)h.solveAll(T,m);for(h.postSolveAll(j),i.preSolveVelocity(S.list),w=0;w<f.velocityIterations;w++)i.solveVelocity(S.list,m);return s._bodiesUpdateVelocities(j),S.collisionActive.length>0&&c.trigger(f,"collisionActive",{pairs:S.collisionActive,timestamp:k.timestamp,delta:m}),S.collisionEnd.length>0&&c.trigger(f,"collisionEnd",{pairs:S.collisionEnd,timestamp:k.timestamp,delta:m}),s._bodiesClearForces(j),c.trigger(f,"afterUpdate",y),f.timing.lastElapsed=p.now()-v,f},s.merge=function(f,m){if(p.extend(f,m),m.world){f.world=m.world,s.clear(f);for(var v=u.allBodies(f.world),b=0;b<v.length;b++){var _=v[b];o.set(_,!1),_.id=p.nextId()}}},s.clear=function(f){d.clear(f.pairs),l.clear(f.detector)},s._bodiesClearForces=function(f){for(var m=f.length,v=0;v<m;v++){var b=f[v];b.force.x=0,b.force.y=0,b.torque=0}},s._bodiesApplyGravity=function(f,m){var v=typeof m.scale<"u"?m.scale:.001,b=f.length;if(!(m.x===0&&m.y===0||v===0))for(var _=0;_<b;_++){var S=f[_];S.isStatic||S.isSleeping||(S.force.y+=S.mass*m.y*v,S.force.x+=S.mass*m.x*v)}},s._bodiesUpdate=function(f,m){for(var v=f.length,b=0;b<v;b++){var _=f[b];_.isStatic||_.isSleeping||g.update(_,m)}},s._bodiesUpdateVelocities=function(f){for(var m=f.length,v=0;v<m;v++)g.updateVelocities(f[v])}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(0),l=e(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(d){var c,u,h,p=d.length;for(c=0;c<p;c++)u=d[c],u.isActive&&(h=u.contactCount,u.collision.parentA.totalContacts+=h,u.collision.parentB.totalContacts+=h)},s.solvePosition=function(d,c,u){var h,p,g,f,m,v,b,_,S=s._positionDampen*(u||1),k=i.clamp(c/i._baseDelta,0,1),x=d.length;for(h=0;h<x;h++)p=d[h],!(!p.isActive||p.isSensor)&&(g=p.collision,f=g.parentA,m=g.parentB,v=g.normal,p.separation=g.depth+v.x*(m.positionImpulse.x-f.positionImpulse.x)+v.y*(m.positionImpulse.y-f.positionImpulse.y));for(h=0;h<x;h++)p=d[h],!(!p.isActive||p.isSensor)&&(g=p.collision,f=g.parentA,m=g.parentB,v=g.normal,_=p.separation-p.slop*k,(f.isStatic||m.isStatic)&&(_*=2),f.isStatic||f.isSleeping||(b=S/f.totalContacts,f.positionImpulse.x+=v.x*_*b,f.positionImpulse.y+=v.y*_*b),m.isStatic||m.isSleeping||(b=S/m.totalContacts,m.positionImpulse.x-=v.x*_*b,m.positionImpulse.y-=v.y*_*b))},s.postSolvePosition=function(d){for(var c=s._positionWarming,u=d.length,h=o.translate,p=l.update,g=0;g<u;g++){var f=d[g],m=f.positionImpulse,v=m.x,b=m.y,_=f.velocity;if(f.totalContacts=0,v!==0||b!==0){for(var S=0;S<f.parts.length;S++){var k=f.parts[S];h(k.vertices,m),p(k.bounds,k.vertices,_),k.position.x+=v,k.position.y+=b}f.positionPrev.x+=v,f.positionPrev.y+=b,v*_.x+b*_.y<0?(m.x=0,m.y=0):(m.x*=c,m.y*=c)}}},s.preSolveVelocity=function(d){var c=d.length,u,h;for(u=0;u<c;u++){var p=d[u];if(!(!p.isActive||p.isSensor)){var g=p.contacts,f=p.contactCount,m=p.collision,v=m.parentA,b=m.parentB,_=m.normal,S=m.tangent;for(h=0;h<f;h++){var k=g[h],x=k.vertex,w=k.normalImpulse,y=k.tangentImpulse;if(w!==0||y!==0){var j=_.x*w+S.x*y,T=_.y*w+S.y*y;v.isStatic||v.isSleeping||(v.positionPrev.x+=j*v.inverseMass,v.positionPrev.y+=T*v.inverseMass,v.anglePrev+=v.inverseInertia*((x.x-v.position.x)*T-(x.y-v.position.y)*j)),b.isStatic||b.isSleeping||(b.positionPrev.x-=j*b.inverseMass,b.positionPrev.y-=T*b.inverseMass,b.anglePrev-=b.inverseInertia*((x.x-b.position.x)*T-(x.y-b.position.y)*j))}}}}},s.solveVelocity=function(d,c){var u=c/i._baseDelta,h=u*u,p=h*u,g=-s._restingThresh*u,f=s._restingThreshTangent,m=s._frictionNormalMultiplier*u,v=s._frictionMaxStatic,b=d.length,_,S,k,x;for(k=0;k<b;k++){var w=d[k];if(!(!w.isActive||w.isSensor)){var y=w.collision,j=y.parentA,T=y.parentB,P=y.normal.x,C=y.normal.y,A=y.tangent.x,I=y.tangent.y,F=w.inverseMass,G=w.friction*w.frictionStatic*m,L=w.contacts,V=w.contactCount,nn=1/V,on=j.position.x-j.positionPrev.x,pn=j.position.y-j.positionPrev.y,sn=j.angle-j.anglePrev,dn=T.position.x-T.positionPrev.x,cn=T.position.y-T.positionPrev.y,un=T.angle-T.anglePrev;for(x=0;x<V;x++){var Q=L[x],z=Q.vertex,U=z.x-j.position.x,N=z.y-j.position.y,Y=z.x-T.position.x,an=z.y-T.position.y,M=on-N*sn,E=pn+U*sn,R=dn-an*un,O=cn+Y*un,D=M-R,B=E-O,$=P*D+C*B,H=A*D+I*B,q=w.separation+$,W=Math.min(q,1);W=q<0?0:W;var J=W*G;H<-J||H>J?(S=H>0?H:-H,_=w.friction*(H>0?1:-1)*p,_<-S?_=-S:_>S&&(_=S)):(_=H,S=v);var K=U*C-N*P,X=Y*C-an*P,tn=nn/(F+j.inverseInertia*K*K+T.inverseInertia*X*X),ln=(1+w.restitution)*$*tn;if(_*=tn,$<g)Q.normalImpulse=0;else{var vn=Q.normalImpulse;Q.normalImpulse+=ln,Q.normalImpulse>0&&(Q.normalImpulse=0),ln=Q.normalImpulse-vn}if(H<-f||H>f)Q.tangentImpulse=0;else{var hn=Q.tangentImpulse;Q.tangentImpulse+=_,Q.tangentImpulse<-S&&(Q.tangentImpulse=-S),Q.tangentImpulse>S&&(Q.tangentImpulse=S),_=Q.tangentImpulse-hn}var In=P*ln+A*_,An=C*ln+I*_;j.isStatic||j.isSleeping||(j.positionPrev.x+=In*j.inverseMass,j.positionPrev.y+=An*j.inverseMass,j.anglePrev+=(U*An-N*In)*j.inverseInertia),T.isStatic||T.isSleeping||(T.positionPrev.x-=In*T.inverseMass,T.positionPrev.y-=An*T.inverseMass,T.anglePrev-=(Y*An-an*In)*T.inverseInertia)}}}}})()},function(a,r,e){var s={};a.exports=s;var o=e(9),i=e(0);(function(){s.create=function(l){return i.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},s.update=function(l,d,c){var u=o.update,h=o.create,p=o.setActive,g=l.table,f=l.list,m=f.length,v=m,b=l.collisionStart,_=l.collisionEnd,S=l.collisionActive,k=d.length,x=0,w=0,y=0,j,T,P;for(P=0;P<k;P++)j=d[P],T=j.pair,T?(T.isActive&&(S[y++]=T),u(T,j,c)):(T=h(j,c),g[T.id]=T,b[x++]=T,f[v++]=T);for(v=0,m=f.length,P=0;P<m;P++)T=f[P],T.timeUpdated>=c?f[v++]=T:(p(T,!1,c),T.collision.bodyA.sleepCounter>0&&T.collision.bodyB.sleepCounter>0?f[v++]=T:(_[w++]=T,delete g[T.id]));f.length!==v&&(f.length=v),b.length!==x&&(b.length=x),_.length!==w&&(_.length=w),S.length!==y&&(S.length=y)},s.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(a,r,e){var s=a.exports=e(21);s.Axes=e(11),s.Bodies=e(12),s.Body=e(4),s.Bounds=e(1),s.Collision=e(8),s.Common=e(0),s.Composite=e(6),s.Composites=e(22),s.Constraint=e(10),s.Contact=e(16),s.Detector=e(13),s.Engine=e(17),s.Events=e(5),s.Grid=e(23),s.Mouse=e(14),s.MouseConstraint=e(24),s.Pair=e(9),s.Pairs=e(19),s.Plugin=e(15),s.Query=e(25),s.Render=e(26),s.Resolver=e(18),s.Runner=e(27),s.SAT=e(28),s.Sleeping=e(7),s.Svg=e(29),s.Vector=e(2),s.Vertices=e(3),s.World=e(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(a,r,e){var s={};a.exports=s;var o=e(15),i=e(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){o.use(s,Array.prototype.slice.call(arguments))},s.before=function(l,d){return l=l.replace(/^Matter./,""),i.chainPathBefore(s,l,d)},s.after=function(l,d){return l=l.replace(/^Matter./,""),i.chainPathAfter(s,l,d)}})()},function(a,r,e){var s={};a.exports=s;var o=e(6),i=e(10),l=e(0),d=e(4),c=e(12),u=l.deprecated;(function(){s.stack=function(h,p,g,f,m,v,b){for(var _=o.create({label:"Stack"}),S=h,k=p,x,w=0,y=0;y<f;y++){for(var j=0,T=0;T<g;T++){var P=b(S,k,T,y,x,w);if(P){var C=P.bounds.max.y-P.bounds.min.y,A=P.bounds.max.x-P.bounds.min.x;C>j&&(j=C),d.translate(P,{x:A*.5,y:C*.5}),S=P.bounds.max.x+m,o.addBody(_,P),x=P,w+=1}else S+=m}k+=j+v,S=h}return _},s.chain=function(h,p,g,f,m,v){for(var b=h.bodies,_=1;_<b.length;_++){var S=b[_-1],k=b[_],x=S.bounds.max.y-S.bounds.min.y,w=S.bounds.max.x-S.bounds.min.x,y=k.bounds.max.y-k.bounds.min.y,j=k.bounds.max.x-k.bounds.min.x,T={bodyA:S,pointA:{x:w*p,y:x*g},bodyB:k,pointB:{x:j*f,y:y*m}},P=l.extend(T,v);o.addConstraint(h,i.create(P))}return h.label+=" Chain",h},s.mesh=function(h,p,g,f,m){var v=h.bodies,b,_,S,k,x;for(b=0;b<g;b++){for(_=1;_<p;_++)S=v[_-1+b*p],k=v[_+b*p],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:k},m)));if(b>0)for(_=0;_<p;_++)S=v[_+(b-1)*p],k=v[_+b*p],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:k},m))),f&&_>0&&(x=v[_-1+(b-1)*p],o.addConstraint(h,i.create(l.extend({bodyA:x,bodyB:k},m)))),f&&_<p-1&&(x=v[_+1+(b-1)*p],o.addConstraint(h,i.create(l.extend({bodyA:x,bodyB:k},m))))}return h.label+=" Mesh",h},s.pyramid=function(h,p,g,f,m,v,b){return s.stack(h,p,g,f,m,v,function(_,S,k,x,w,y){var j=Math.min(f,Math.ceil(g/2)),T=w?w.bounds.max.x-w.bounds.min.x:0;if(!(x>j)){x=j-x;var P=x,C=g-1-x;if(!(k<P||k>C)){y===1&&d.translate(w,{x:(k+(g%2===1?1:-1))*T,y:0});var A=w?k*T:0;return b(h+A+k*m,S,k,x,w,y)}}})},s.newtonsCradle=function(h,p,g,f,m){for(var v=o.create({label:"Newtons Cradle"}),b=0;b<g;b++){var _=1.9,S=c.circle(h+b*(f*_),p+m,f,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),k=i.create({pointA:{x:h+b*(f*_),y:p},bodyB:S});o.addBody(v,S),o.addConstraint(v,k)}return v},u(s,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),s.car=function(h,p,g,f,m){var v=d.nextGroup(!0),b=20,_=-g*.5+b,S=g*.5-b,k=0,x=o.create({label:"Car"}),w=c.rectangle(h,p,g,f,{collisionFilter:{group:v},chamfer:{radius:f*.5},density:2e-4}),y=c.circle(h+_,p+k,m,{collisionFilter:{group:v},friction:.8}),j=c.circle(h+S,p+k,m,{collisionFilter:{group:v},friction:.8}),T=i.create({bodyB:w,pointB:{x:_,y:k},bodyA:y,stiffness:1,length:0}),P=i.create({bodyB:w,pointB:{x:S,y:k},bodyA:j,stiffness:1,length:0});return o.addBody(x,w),o.addBody(x,y),o.addBody(x,j),o.addConstraint(x,T),o.addConstraint(x,P),x},u(s,"car","Composites.car ➤ moved to car example"),s.softBody=function(h,p,g,f,m,v,b,_,S,k){S=l.extend({inertia:1/0},S),k=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},k);var x=s.stack(h,p,g,f,m,v,function(w,y){return c.circle(w,y,_,S)});return s.mesh(x,g,f,b,k),x.label="Soft Body",x},u(s,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(a,r,e){var s={};a.exports=s;var o=e(9),i=e(0),l=i.deprecated;(function(){s.create=function(d){var c={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return i.extend(c,d)},s.update=function(d,c,u,h){var p,g,f,m=u.world,v=d.buckets,b,_,S=!1;for(p=0;p<c.length;p++){var k=c[p];if(!(k.isSleeping&&!h)&&!(m.bounds&&(k.bounds.max.x<m.bounds.min.x||k.bounds.min.x>m.bounds.max.x||k.bounds.max.y<m.bounds.min.y||k.bounds.min.y>m.bounds.max.y))){var x=s._getRegion(d,k);if(!k.region||x.id!==k.region.id||h){(!k.region||h)&&(k.region=x);var w=s._regionUnion(x,k.region);for(g=w.startCol;g<=w.endCol;g++)for(f=w.startRow;f<=w.endRow;f++){_=s._getBucketId(g,f),b=v[_];var y=g>=x.startCol&&g<=x.endCol&&f>=x.startRow&&f<=x.endRow,j=g>=k.region.startCol&&g<=k.region.endCol&&f>=k.region.startRow&&f<=k.region.endRow;!y&&j&&j&&b&&s._bucketRemoveBody(d,b,k),(k.region===x||y&&!j||h)&&(b||(b=s._createBucket(v,_)),s._bucketAddBody(d,b,k))}k.region=x,S=!0}}}S&&(d.pairsList=s._createActivePairsList(d))},l(s,"update","Grid.update ➤ replaced by Matter.Detector"),s.clear=function(d){d.buckets={},d.pairs={},d.pairsList=[]},l(s,"clear","Grid.clear ➤ replaced by Matter.Detector"),s._regionUnion=function(d,c){var u=Math.min(d.startCol,c.startCol),h=Math.max(d.endCol,c.endCol),p=Math.min(d.startRow,c.startRow),g=Math.max(d.endRow,c.endRow);return s._createRegion(u,h,p,g)},s._getRegion=function(d,c){var u=c.bounds,h=Math.floor(u.min.x/d.bucketWidth),p=Math.floor(u.max.x/d.bucketWidth),g=Math.floor(u.min.y/d.bucketHeight),f=Math.floor(u.max.y/d.bucketHeight);return s._createRegion(h,p,g,f)},s._createRegion=function(d,c,u,h){return{id:d+","+c+","+u+","+h,startCol:d,endCol:c,startRow:u,endRow:h}},s._getBucketId=function(d,c){return"C"+d+"R"+c},s._createBucket=function(d,c){var u=d[c]=[];return u},s._bucketAddBody=function(d,c,u){var h=d.pairs,p=o.id,g=c.length,f;for(f=0;f<g;f++){var m=c[f];if(!(u.id===m.id||u.isStatic&&m.isStatic)){var v=p(u,m),b=h[v];b?b[2]+=1:h[v]=[u,m,1]}}c.push(u)},s._bucketRemoveBody=function(d,c,u){var h=d.pairs,p=o.id,g;c.splice(i.indexOf(c,u),1);var f=c.length;for(g=0;g<f;g++){var m=h[p(u,c[g])];m&&(m[2]-=1)}},s._createActivePairsList=function(d){var c,u=d.pairs,h=i.keys(u),p=h.length,g=[],f;for(f=0;f<p;f++)c=u[h[f]],c[2]>0?g.push(c):delete u[h[f]];return g}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(7),l=e(14),d=e(5),c=e(13),u=e(10),h=e(6),p=e(0),g=e(1);(function(){s.create=function(f,m){var v=(f?f.mouse:null)||(m?m.mouse:null);v||(f&&f.render&&f.render.canvas?v=l.create(f.render.canvas):m&&m.element?v=l.create(m.element):(v=l.create(),p.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var b=u.create({label:"Mouse Constraint",pointA:v.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),_={type:"mouseConstraint",mouse:v,element:null,body:null,constraint:b,collisionFilter:{category:1,mask:4294967295,group:0}},S=p.extend(_,m);return d.on(f,"beforeUpdate",function(){var k=h.allBodies(f.world);s.update(S,k),s._triggerEvents(S)}),S},s.update=function(f,m){var v=f.mouse,b=f.constraint,_=f.body;if(v.button===0){if(b.bodyB)i.set(b.bodyB,!1),b.pointA=v.position;else for(var S=0;S<m.length;S++)if(_=m[S],g.contains(_.bounds,v.position)&&c.canCollide(_.collisionFilter,f.collisionFilter))for(var k=_.parts.length>1?1:0;k<_.parts.length;k++){var x=_.parts[k];if(o.contains(x.vertices,v.position)){b.pointA=v.position,b.bodyB=f.body=_,b.pointB={x:v.position.x-_.position.x,y:v.position.y-_.position.y},b.angleB=_.angle,i.set(_,!1),d.trigger(f,"startdrag",{mouse:v,body:_});break}}}else b.bodyB=f.body=null,b.pointB=null,_&&d.trigger(f,"enddrag",{mouse:v,body:_})},s._triggerEvents=function(f){var m=f.mouse,v=m.sourceEvents;v.mousemove&&d.trigger(f,"mousemove",{mouse:m}),v.mousedown&&d.trigger(f,"mousedown",{mouse:m}),v.mouseup&&d.trigger(f,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(8),l=e(1),d=e(12),c=e(3);(function(){s.collides=function(u,h){for(var p=[],g=h.length,f=u.bounds,m=i.collides,v=l.overlaps,b=0;b<g;b++){var _=h[b],S=_.parts.length,k=S===1?0:1;if(v(_.bounds,f))for(var x=k;x<S;x++){var w=_.parts[x];if(v(w.bounds,f)){var y=m(w,u);if(y){p.push(y);break}}}}return p},s.ray=function(u,h,p,g){g=g||1e-100;for(var f=o.angle(h,p),m=o.magnitude(o.sub(h,p)),v=(p.x+h.x)*.5,b=(p.y+h.y)*.5,_=d.rectangle(v,b,m,g,{angle:f}),S=s.collides(_,u),k=0;k<S.length;k+=1){var x=S[k];x.body=x.bodyB=x.bodyA}return S},s.region=function(u,h,p){for(var g=[],f=0;f<u.length;f++){var m=u[f],v=l.overlaps(m.bounds,h);(v&&!p||!v&&p)&&g.push(m)}return g},s.point=function(u,h){for(var p=[],g=0;g<u.length;g++){var f=u[g];if(l.contains(f.bounds,h))for(var m=f.parts.length===1?0:1;m<f.parts.length;m++){var v=f.parts[m];if(l.contains(v.bounds,h)&&c.contains(v.vertices,h)){p.push(f);break}}}return p}})()},function(a,r,e){var s={};a.exports=s;var o=e(4),i=e(0),l=e(6),d=e(1),c=e(5),u=e(2),h=e(14);(function(){var p,g;typeof window<"u"&&(p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(k){window.setTimeout(function(){k(i.now())},1e3/60)},g=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(k){var x={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!k.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},w=i.extend(x,k);return w.canvas&&(w.canvas.width=w.options.width||w.canvas.width,w.canvas.height=w.options.height||w.canvas.height),w.mouse=k.mouse,w.engine=k.engine,w.canvas=w.canvas||v(w.options.width,w.options.height),w.context=w.canvas.getContext("2d"),w.textures={},w.bounds=w.bounds||{min:{x:0,y:0},max:{x:w.canvas.width,y:w.canvas.height}},w.controller=s,w.options.showBroadphase=!1,w.options.pixelRatio!==1&&s.setPixelRatio(w,w.options.pixelRatio),i.isElement(w.element)&&w.element.appendChild(w.canvas),w},s.run=function(k){(function x(w){k.frameRequestId=p(x),f(k,w),s.world(k,w),k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0),(k.options.showStats||k.options.showDebug)&&s.stats(k,k.context,w),(k.options.showPerformance||k.options.showDebug)&&s.performance(k,k.context,w),k.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(k){g(k.frameRequestId)},s.setPixelRatio=function(k,x){var w=k.options,y=k.canvas;x==="auto"&&(x=b(y)),w.pixelRatio=x,y.setAttribute("data-pixel-ratio",x),y.width=w.width*x,y.height=w.height*x,y.style.width=w.width+"px",y.style.height=w.height+"px"},s.setSize=function(k,x,w){k.options.width=x,k.options.height=w,k.bounds.max.x=k.bounds.min.x+x,k.bounds.max.y=k.bounds.min.y+w,k.options.pixelRatio!==1?s.setPixelRatio(k,k.options.pixelRatio):(k.canvas.width=x,k.canvas.height=w)},s.lookAt=function(k,x,w,y){y=typeof y<"u"?y:!0,x=i.isArray(x)?x:[x],w=w||{x:0,y:0};for(var j={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},T=0;T<x.length;T+=1){var P=x[T],C=P.bounds?P.bounds.min:P.min||P.position||P,A=P.bounds?P.bounds.max:P.max||P.position||P;C&&A&&(C.x<j.min.x&&(j.min.x=C.x),A.x>j.max.x&&(j.max.x=A.x),C.y<j.min.y&&(j.min.y=C.y),A.y>j.max.y&&(j.max.y=A.y))}var I=j.max.x-j.min.x+2*w.x,F=j.max.y-j.min.y+2*w.y,G=k.canvas.height,L=k.canvas.width,V=L/G,nn=I/F,on=1,pn=1;nn>V?pn=nn/V:on=V/nn,k.options.hasBounds=!0,k.bounds.min.x=j.min.x,k.bounds.max.x=j.min.x+I*on,k.bounds.min.y=j.min.y,k.bounds.max.y=j.min.y+F*pn,y&&(k.bounds.min.x+=I*.5-I*on*.5,k.bounds.max.x+=I*.5-I*on*.5,k.bounds.min.y+=F*.5-F*pn*.5,k.bounds.max.y+=F*.5-F*pn*.5),k.bounds.min.x-=w.x,k.bounds.max.x-=w.x,k.bounds.min.y-=w.y,k.bounds.max.y-=w.y,k.mouse&&(h.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.canvas.width,y:(k.bounds.max.y-k.bounds.min.y)/k.canvas.height}),h.setOffset(k.mouse,k.bounds.min))},s.startViewTransform=function(k){var x=k.bounds.max.x-k.bounds.min.x,w=k.bounds.max.y-k.bounds.min.y,y=x/k.options.width,j=w/k.options.height;k.context.setTransform(k.options.pixelRatio/y,0,0,k.options.pixelRatio/j,0,0),k.context.translate(-k.bounds.min.x,-k.bounds.min.y)},s.endViewTransform=function(k){k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0)},s.world=function(k,x){var w=i.now(),y=k.engine,j=y.world,T=k.canvas,P=k.context,C=k.options,A=k.timing,I=l.allBodies(j),F=l.allConstraints(j),G=C.wireframes?C.wireframeBackground:C.background,L=[],V=[],nn,on={timestamp:y.timing.timestamp};if(c.trigger(k,"beforeRender",on),k.currentBackground!==G&&S(k,G),P.globalCompositeOperation="source-in",P.fillStyle="transparent",P.fillRect(0,0,T.width,T.height),P.globalCompositeOperation="source-over",C.hasBounds){for(nn=0;nn<I.length;nn++){var pn=I[nn];d.overlaps(pn.bounds,k.bounds)&&L.push(pn)}for(nn=0;nn<F.length;nn++){var sn=F[nn],dn=sn.bodyA,cn=sn.bodyB,un=sn.pointA,Q=sn.pointB;dn&&(un=u.add(dn.position,sn.pointA)),cn&&(Q=u.add(cn.position,sn.pointB)),!(!un||!Q)&&(d.contains(k.bounds,un)||d.contains(k.bounds,Q))&&V.push(sn)}s.startViewTransform(k),k.mouse&&(h.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.options.width,y:(k.bounds.max.y-k.bounds.min.y)/k.options.height}),h.setOffset(k.mouse,k.bounds.min))}else V=F,L=I,k.options.pixelRatio!==1&&k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0);!C.wireframes||y.enableSleeping&&C.showSleeping?s.bodies(k,L,P):(C.showConvexHulls&&s.bodyConvexHulls(k,L,P),s.bodyWireframes(k,L,P)),C.showBounds&&s.bodyBounds(k,L,P),(C.showAxes||C.showAngleIndicator)&&s.bodyAxes(k,L,P),C.showPositions&&s.bodyPositions(k,L,P),C.showVelocity&&s.bodyVelocity(k,L,P),C.showIds&&s.bodyIds(k,L,P),C.showSeparations&&s.separations(k,y.pairs.list,P),C.showCollisions&&s.collisions(k,y.pairs.list,P),C.showVertexNumbers&&s.vertexNumbers(k,L,P),C.showMousePosition&&s.mousePosition(k,k.mouse,P),s.constraints(V,P),C.hasBounds&&s.endViewTransform(k),c.trigger(k,"afterRender",on),A.lastElapsed=i.now()-w},s.stats=function(k,x,w){for(var y=k.engine,j=y.world,T=l.allBodies(j),P=0,C=55,A=44,I=0,F=0,G=0;G<T.length;G+=1)P+=T[G].parts.length;var L={Part:P,Body:T.length,Cons:l.allConstraints(j).length,Comp:l.allComposites(j).length,Pair:y.pairs.list.length};x.fillStyle="#0e0f19",x.fillRect(I,F,C*5.5,A),x.font="12px Arial",x.textBaseline="top",x.textAlign="right";for(var V in L){var nn=L[V];x.fillStyle="#aaa",x.fillText(V,I+C,F+8),x.fillStyle="#eee",x.fillText(nn,I+C,F+26),I+=C}},s.performance=function(k,x){var w=k.engine,y=k.timing,j=y.deltaHistory,T=y.elapsedHistory,P=y.timestampElapsedHistory,C=y.engineDeltaHistory,A=y.engineUpdatesHistory,I=y.engineElapsedHistory,F=w.timing.lastUpdatesPerFrame,G=w.timing.lastDelta,L=m(j),V=m(T),nn=m(C),on=m(A),pn=m(I),sn=m(P),dn=sn/L||0,cn=Math.round(L/G),un=1e3/L||0,Q=4,z=12,U=60,N=34,Y=10,an=69;x.fillStyle="#0e0f19",x.fillRect(0,50,z*5+U*6+22,N),s.status(x,Y,an,U,Q,j.length,Math.round(un)+" fps",un/s._goodFps,function(M){return j[M]/L-1}),s.status(x,Y+z+U,an,U,Q,C.length,G.toFixed(2)+" dt",s._goodDelta/G,function(M){return C[M]/nn-1}),s.status(x,Y+(z+U)*2,an,U,Q,A.length,F+" upf",Math.pow(i.clamp(on/cn||1,0,1),4),function(M){return A[M]/on-1}),s.status(x,Y+(z+U)*3,an,U,Q,I.length,pn.toFixed(2)+" ut",1-F*pn/s._goodFps,function(M){return I[M]/pn-1}),s.status(x,Y+(z+U)*4,an,U,Q,T.length,V.toFixed(2)+" rt",1-V/s._goodFps,function(M){return T[M]/V-1}),s.status(x,Y+(z+U)*5,an,U,Q,P.length,dn.toFixed(2)+" x",dn*dn*dn,function(M){return(P[M]/j[M]/dn||0)-1})},s.status=function(k,x,w,y,j,T,P,C,A){k.strokeStyle="#888",k.fillStyle="#444",k.lineWidth=1,k.fillRect(x,w+7,y,1),k.beginPath(),k.moveTo(x,w+7-j*i.clamp(.4*A(0),-2,2));for(var I=0;I<y;I+=1)k.lineTo(x+I,w+7-(I<T?j*i.clamp(.4*A(I),-2,2):0));k.stroke(),k.fillStyle="hsl("+i.clamp(25+95*C,0,120)+",100%,60%)",k.fillRect(x,w-7,4,4),k.font="12px Arial",k.textBaseline="middle",k.textAlign="right",k.fillStyle="#eee",k.fillText(P,x+y,w-5)},s.constraints=function(k,x){for(var w=x,y=0;y<k.length;y++){var j=k[y];if(!(!j.render.visible||!j.pointA||!j.pointB)){var T=j.bodyA,P=j.bodyB,C,A;if(T?C=u.add(T.position,j.pointA):C=j.pointA,j.render.type==="pin")w.beginPath(),w.arc(C.x,C.y,3,0,2*Math.PI),w.closePath();else{if(P?A=u.add(P.position,j.pointB):A=j.pointB,w.beginPath(),w.moveTo(C.x,C.y),j.render.type==="spring")for(var I=u.sub(A,C),F=u.perp(u.normalise(I)),G=Math.ceil(i.clamp(j.length/5,12,20)),L,V=1;V<G;V+=1)L=V%2===0?1:-1,w.lineTo(C.x+I.x*(V/G)+F.x*L*4,C.y+I.y*(V/G)+F.y*L*4);w.lineTo(A.x,A.y)}j.render.lineWidth&&(w.lineWidth=j.render.lineWidth,w.strokeStyle=j.render.strokeStyle,w.stroke()),j.render.anchors&&(w.fillStyle=j.render.strokeStyle,w.beginPath(),w.arc(C.x,C.y,3,0,2*Math.PI),w.arc(A.x,A.y,3,0,2*Math.PI),w.closePath(),w.fill())}}},s.bodies=function(k,x,w){var y=w;k.engine;var j=k.options,T=j.showInternalEdges||!j.wireframes,P,C,A,I;for(A=0;A<x.length;A++)if(P=x[A],!!P.render.visible){for(I=P.parts.length>1?1:0;I<P.parts.length;I++)if(C=P.parts[I],!!C.render.visible){if(j.showSleeping&&P.isSleeping?y.globalAlpha=.5*C.render.opacity:C.render.opacity!==1&&(y.globalAlpha=C.render.opacity),C.render.sprite&&C.render.sprite.texture&&!j.wireframes){var F=C.render.sprite,G=_(k,F.texture);y.translate(C.position.x,C.position.y),y.rotate(C.angle),y.drawImage(G,G.width*-F.xOffset*F.xScale,G.height*-F.yOffset*F.yScale,G.width*F.xScale,G.height*F.yScale),y.rotate(-C.angle),y.translate(-C.position.x,-C.position.y)}else{if(C.circleRadius)y.beginPath(),y.arc(C.position.x,C.position.y,C.circleRadius,0,2*Math.PI);else{y.beginPath(),y.moveTo(C.vertices[0].x,C.vertices[0].y);for(var L=1;L<C.vertices.length;L++)!C.vertices[L-1].isInternal||T?y.lineTo(C.vertices[L].x,C.vertices[L].y):y.moveTo(C.vertices[L].x,C.vertices[L].y),C.vertices[L].isInternal&&!T&&y.moveTo(C.vertices[(L+1)%C.vertices.length].x,C.vertices[(L+1)%C.vertices.length].y);y.lineTo(C.vertices[0].x,C.vertices[0].y),y.closePath()}j.wireframes?(y.lineWidth=1,y.strokeStyle=k.options.wireframeStrokeStyle,y.stroke()):(y.fillStyle=C.render.fillStyle,C.render.lineWidth&&(y.lineWidth=C.render.lineWidth,y.strokeStyle=C.render.strokeStyle,y.stroke()),y.fill())}y.globalAlpha=1}}},s.bodyWireframes=function(k,x,w){var y=w,j=k.options.showInternalEdges,T,P,C,A,I;for(y.beginPath(),C=0;C<x.length;C++)if(T=x[C],!!T.render.visible)for(I=T.parts.length>1?1:0;I<T.parts.length;I++){for(P=T.parts[I],y.moveTo(P.vertices[0].x,P.vertices[0].y),A=1;A<P.vertices.length;A++)!P.vertices[A-1].isInternal||j?y.lineTo(P.vertices[A].x,P.vertices[A].y):y.moveTo(P.vertices[A].x,P.vertices[A].y),P.vertices[A].isInternal&&!j&&y.moveTo(P.vertices[(A+1)%P.vertices.length].x,P.vertices[(A+1)%P.vertices.length].y);y.lineTo(P.vertices[0].x,P.vertices[0].y)}y.lineWidth=1,y.strokeStyle=k.options.wireframeStrokeStyle,y.stroke()},s.bodyConvexHulls=function(k,x,w){var y=w,j,T,P;for(y.beginPath(),T=0;T<x.length;T++)if(j=x[T],!(!j.render.visible||j.parts.length===1)){for(y.moveTo(j.vertices[0].x,j.vertices[0].y),P=1;P<j.vertices.length;P++)y.lineTo(j.vertices[P].x,j.vertices[P].y);y.lineTo(j.vertices[0].x,j.vertices[0].y)}y.lineWidth=1,y.strokeStyle="rgba(255,255,255,0.2)",y.stroke()},s.vertexNumbers=function(k,x,w){var y=w,j,T,P;for(j=0;j<x.length;j++){var C=x[j].parts;for(P=C.length>1?1:0;P<C.length;P++){var A=C[P];for(T=0;T<A.vertices.length;T++)y.fillStyle="rgba(255,255,255,0.2)",y.fillText(j+"_"+T,A.position.x+(A.vertices[T].x-A.position.x)*.8,A.position.y+(A.vertices[T].y-A.position.y)*.8)}}},s.mousePosition=function(k,x,w){var y=w;y.fillStyle="rgba(255,255,255,0.8)",y.fillText(x.position.x+"  "+x.position.y,x.position.x+5,x.position.y-5)},s.bodyBounds=function(k,x,w){var y=w;k.engine;var j=k.options;y.beginPath();for(var T=0;T<x.length;T++){var P=x[T];if(P.render.visible)for(var C=x[T].parts,A=C.length>1?1:0;A<C.length;A++){var I=C[A];y.rect(I.bounds.min.x,I.bounds.min.y,I.bounds.max.x-I.bounds.min.x,I.bounds.max.y-I.bounds.min.y)}}j.wireframes?y.strokeStyle="rgba(255,255,255,0.08)":y.strokeStyle="rgba(0,0,0,0.1)",y.lineWidth=1,y.stroke()},s.bodyAxes=function(k,x,w){var y=w;k.engine;var j=k.options,T,P,C,A;for(y.beginPath(),P=0;P<x.length;P++){var I=x[P],F=I.parts;if(I.render.visible)if(j.showAxes)for(C=F.length>1?1:0;C<F.length;C++)for(T=F[C],A=0;A<T.axes.length;A++){var G=T.axes[A];y.moveTo(T.position.x,T.position.y),y.lineTo(T.position.x+G.x*20,T.position.y+G.y*20)}else for(C=F.length>1?1:0;C<F.length;C++)for(T=F[C],A=0;A<T.axes.length;A++)y.moveTo(T.position.x,T.position.y),y.lineTo((T.vertices[0].x+T.vertices[T.vertices.length-1].x)/2,(T.vertices[0].y+T.vertices[T.vertices.length-1].y)/2)}j.wireframes?(y.strokeStyle="indianred",y.lineWidth=1):(y.strokeStyle="rgba(255, 255, 255, 0.4)",y.globalCompositeOperation="overlay",y.lineWidth=2),y.stroke(),y.globalCompositeOperation="source-over"},s.bodyPositions=function(k,x,w){var y=w;k.engine;var j=k.options,T,P,C,A;for(y.beginPath(),C=0;C<x.length;C++)if(T=x[C],!!T.render.visible)for(A=0;A<T.parts.length;A++)P=T.parts[A],y.arc(P.position.x,P.position.y,3,0,2*Math.PI,!1),y.closePath();for(j.wireframes?y.fillStyle="indianred":y.fillStyle="rgba(0,0,0,0.5)",y.fill(),y.beginPath(),C=0;C<x.length;C++)T=x[C],T.render.visible&&(y.arc(T.positionPrev.x,T.positionPrev.y,2,0,2*Math.PI,!1),y.closePath());y.fillStyle="rgba(255,165,0,0.8)",y.fill()},s.bodyVelocity=function(k,x,w){var y=w;y.beginPath();for(var j=0;j<x.length;j++){var T=x[j];if(T.render.visible){var P=o.getVelocity(T);y.moveTo(T.position.x,T.position.y),y.lineTo(T.position.x+P.x,T.position.y+P.y)}}y.lineWidth=3,y.strokeStyle="cornflowerblue",y.stroke()},s.bodyIds=function(k,x,w){var y=w,j,T;for(j=0;j<x.length;j++)if(x[j].render.visible){var P=x[j].parts;for(T=P.length>1?1:0;T<P.length;T++){var C=P[T];y.font="12px Arial",y.fillStyle="rgba(255,255,255,0.5)",y.fillText(C.id,C.position.x+10,C.position.y-10)}}},s.collisions=function(k,x,w){var y=w,j=k.options,T,P,C,A;for(y.beginPath(),C=0;C<x.length;C++)if(T=x[C],!!T.isActive)for(P=T.collision,A=0;A<T.contactCount;A++){var I=T.contacts[A],F=I.vertex;y.rect(F.x-1.5,F.y-1.5,3.5,3.5)}for(j.wireframes?y.fillStyle="rgba(255,255,255,0.7)":y.fillStyle="orange",y.fill(),y.beginPath(),C=0;C<x.length;C++)if(T=x[C],!!T.isActive&&(P=T.collision,T.contactCount>0)){var G=T.contacts[0].vertex.x,L=T.contacts[0].vertex.y;T.contactCount===2&&(G=(T.contacts[0].vertex.x+T.contacts[1].vertex.x)/2,L=(T.contacts[0].vertex.y+T.contacts[1].vertex.y)/2),P.bodyB===P.supports[0].body||P.bodyA.isStatic===!0?y.moveTo(G-P.normal.x*8,L-P.normal.y*8):y.moveTo(G+P.normal.x*8,L+P.normal.y*8),y.lineTo(G,L)}j.wireframes?y.strokeStyle="rgba(255,165,0,0.7)":y.strokeStyle="orange",y.lineWidth=1,y.stroke()},s.separations=function(k,x,w){var y=w,j=k.options,T,P,C,A,I;for(y.beginPath(),I=0;I<x.length;I++)if(T=x[I],!!T.isActive){P=T.collision,C=P.bodyA,A=P.bodyB;var F=1;!A.isStatic&&!C.isStatic&&(F=.5),A.isStatic&&(F=0),y.moveTo(A.position.x,A.position.y),y.lineTo(A.position.x-P.penetration.x*F,A.position.y-P.penetration.y*F),F=1,!A.isStatic&&!C.isStatic&&(F=.5),C.isStatic&&(F=0),y.moveTo(C.position.x,C.position.y),y.lineTo(C.position.x+P.penetration.x*F,C.position.y+P.penetration.y*F)}j.wireframes?y.strokeStyle="rgba(255,165,0,0.5)":y.strokeStyle="orange",y.stroke()},s.inspector=function(k,x){k.engine;var w=k.selected,y=k.render,j=y.options,T;if(j.hasBounds){var P=y.bounds.max.x-y.bounds.min.x,C=y.bounds.max.y-y.bounds.min.y,A=P/y.options.width,I=C/y.options.height;x.scale(1/A,1/I),x.translate(-y.bounds.min.x,-y.bounds.min.y)}for(var F=0;F<w.length;F++){var G=w[F].data;switch(x.translate(.5,.5),x.lineWidth=1,x.strokeStyle="rgba(255,165,0,0.9)",x.setLineDash([1,2]),G.type){case"body":T=G.bounds,x.beginPath(),x.rect(Math.floor(T.min.x-3),Math.floor(T.min.y-3),Math.floor(T.max.x-T.min.x+6),Math.floor(T.max.y-T.min.y+6)),x.closePath(),x.stroke();break;case"constraint":var L=G.pointA;G.bodyA&&(L=G.pointB),x.beginPath(),x.arc(L.x,L.y,10,0,2*Math.PI),x.closePath(),x.stroke();break}x.setLineDash([]),x.translate(-.5,-.5)}k.selectStart!==null&&(x.translate(.5,.5),x.lineWidth=1,x.strokeStyle="rgba(255,165,0,0.6)",x.fillStyle="rgba(255,165,0,0.1)",T=k.selectBounds,x.beginPath(),x.rect(Math.floor(T.min.x),Math.floor(T.min.y),Math.floor(T.max.x-T.min.x),Math.floor(T.max.y-T.min.y)),x.closePath(),x.stroke(),x.fill(),x.translate(-.5,-.5)),j.hasBounds&&x.setTransform(1,0,0,1,0,0)};var f=function(k,x){var w=k.engine,y=k.timing,j=y.historySize,T=w.timing.timestamp;y.delta=x-y.lastTime||s._goodDelta,y.lastTime=x,y.timestampElapsed=T-y.lastTimestamp||0,y.lastTimestamp=T,y.deltaHistory.unshift(y.delta),y.deltaHistory.length=Math.min(y.deltaHistory.length,j),y.engineDeltaHistory.unshift(w.timing.lastDelta),y.engineDeltaHistory.length=Math.min(y.engineDeltaHistory.length,j),y.timestampElapsedHistory.unshift(y.timestampElapsed),y.timestampElapsedHistory.length=Math.min(y.timestampElapsedHistory.length,j),y.engineUpdatesHistory.unshift(w.timing.lastUpdatesPerFrame),y.engineUpdatesHistory.length=Math.min(y.engineUpdatesHistory.length,j),y.engineElapsedHistory.unshift(w.timing.lastElapsed),y.engineElapsedHistory.length=Math.min(y.engineElapsedHistory.length,j),y.elapsedHistory.unshift(y.lastElapsed),y.elapsedHistory.length=Math.min(y.elapsedHistory.length,j)},m=function(k){for(var x=0,w=0;w<k.length;w+=1)x+=k[w];return x/k.length||0},v=function(k,x){var w=document.createElement("canvas");return w.width=k,w.height=x,w.oncontextmenu=function(){return!1},w.onselectstart=function(){return!1},w},b=function(k){var x=k.getContext("2d"),w=window.devicePixelRatio||1,y=x.webkitBackingStorePixelRatio||x.mozBackingStorePixelRatio||x.msBackingStorePixelRatio||x.oBackingStorePixelRatio||x.backingStorePixelRatio||1;return w/y},_=function(k,x){var w=k.textures[x];return w||(w=k.textures[x]=new Image,w.src=x,w)},S=function(k,x){var w=x;/(jpg|gif|png)$/.test(x)&&(w="url("+x+")"),k.canvas.style.background=w,k.canvas.style.backgroundSize="contain",k.currentBackground=x}})()},function(a,r,e){var s={};a.exports=s;var o=e(5),i=e(17),l=e(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(c){var u={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=l.extend(u,c);return h.fps=0,h},s.run=function(c,u){return c.timeBuffer=s._frameDeltaFallback,function h(p){c.frameRequestId=s._onNextFrame(c,h),p&&c.enabled&&s.tick(c,u,p)}(),c},s.tick=function(c,u,h){var p=l.now(),g=c.delta,f=0,m=h-c.timeLastTick;if((!m||!c.timeLastTick||m>Math.max(s._maxFrameDelta,c.maxFrameTime))&&(m=c.frameDelta||s._frameDeltaFallback),c.frameDeltaSmoothing){c.frameDeltaHistory.push(m),c.frameDeltaHistory=c.frameDeltaHistory.slice(-c.frameDeltaHistorySize);var v=c.frameDeltaHistory.slice(0).sort(),b=c.frameDeltaHistory.slice(v.length*s._smoothingLowerBound,v.length*s._smoothingUpperBound),_=d(b);m=_||m}c.frameDeltaSnapping&&(m=1e3/Math.round(1e3/m)),c.frameDelta=m,c.timeLastTick=h,c.timeBuffer+=c.frameDelta,c.timeBuffer=l.clamp(c.timeBuffer,0,c.frameDelta+g*s._timeBufferMargin),c.lastUpdatesDeferred=0;var S=c.maxUpdates||Math.ceil(c.maxFrameTime/g),k={timestamp:u.timing.timestamp};o.trigger(c,"beforeTick",k),o.trigger(c,"tick",k);for(var x=l.now();g>0&&c.timeBuffer>=g*s._timeBufferMargin;){o.trigger(c,"beforeUpdate",k),i.update(u,g),o.trigger(c,"afterUpdate",k),c.timeBuffer-=g,f+=1;var w=l.now()-p,y=l.now()-x,j=w+s._elapsedNextEstimate*y/f;if(f>=S||j>c.maxFrameTime){c.lastUpdatesDeferred=Math.round(Math.max(0,c.timeBuffer/g-s._timeBufferMargin));break}}u.timing.lastUpdatesPerFrame=f,o.trigger(c,"afterTick",k),c.frameDeltaHistory.length>=100&&(c.lastUpdatesDeferred&&Math.round(c.frameDelta/g)>S?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):c.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof c.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(c.deltaMin||c.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),c.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(c){s._cancelNextFrame(c)},s._onNextFrame=function(c,u){if(typeof window<"u"&&window.requestAnimationFrame)c.frameRequestId=window.requestAnimationFrame(u);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return c.frameRequestId},s._cancelNextFrame=function(c){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(c.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var d=function(c){for(var u=0,h=c.length,p=0;p<h;p+=1)u+=c[p];return u/h||0}})()},function(a,r,e){var s={};a.exports=s;var o=e(8),i=e(0),l=i.deprecated;(function(){s.collides=function(d,c){return o.collides(d,c)},l(s,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(a,r,e){var s={};a.exports=s,e(1);var o=e(0);(function(){s.pathToVertices=function(i,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var d,c,u,h,p,g,f,m,v,b,_=[],S,k,x=0,w=0,y=0;l=l||15;var j=function(P,C,A){var I=A%2===1&&A>1;if(!v||P!=v.x||C!=v.y){v&&I?(S=v.x,k=v.y):(S=0,k=0);var F={x:S+P,y:k+C};(I||!v)&&(v=F),_.push(F),w=S+P,y=k+C}},T=function(P){var C=P.pathSegTypeAsLetter.toUpperCase();if(C!=="Z"){switch(C){case"M":case"L":case"T":case"C":case"S":case"Q":w=P.x,y=P.y;break;case"H":w=P.x;break;case"V":y=P.y;break}j(w,y,P.pathSegType)}};for(s._svgPathToAbsolute(i),u=i.getTotalLength(),g=[],d=0;d<i.pathSegList.numberOfItems;d+=1)g.push(i.pathSegList.getItem(d));for(f=g.concat();x<u;){if(b=i.getPathSegAtLength(x),p=g[b],p!=m){for(;f.length&&f[0]!=p;)T(f.shift());m=p}switch(p.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=i.getPointAtLength(x),j(h.x,h.y,0);break}x+=l}for(d=0,c=f.length;d<c;++d)T(f[d]);return _},s._svgPathToAbsolute=function(i){for(var l,d,c,u,h,p,g=i.pathSegList,f=0,m=0,v=g.numberOfItems,b=0;b<v;++b){var _=g.getItem(b),S=_.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(S))"x"in _&&(f=_.x),"y"in _&&(m=_.y);else switch("x1"in _&&(c=f+_.x1),"x2"in _&&(h=f+_.x2),"y1"in _&&(u=m+_.y1),"y2"in _&&(p=m+_.y2),"x"in _&&(f+=_.x),"y"in _&&(m+=_.y),S){case"m":g.replaceItem(i.createSVGPathSegMovetoAbs(f,m),b);break;case"l":g.replaceItem(i.createSVGPathSegLinetoAbs(f,m),b);break;case"h":g.replaceItem(i.createSVGPathSegLinetoHorizontalAbs(f),b);break;case"v":g.replaceItem(i.createSVGPathSegLinetoVerticalAbs(m),b);break;case"c":g.replaceItem(i.createSVGPathSegCurvetoCubicAbs(f,m,c,u,h,p),b);break;case"s":g.replaceItem(i.createSVGPathSegCurvetoCubicSmoothAbs(f,m,h,p),b);break;case"q":g.replaceItem(i.createSVGPathSegCurvetoQuadraticAbs(f,m,c,u),b);break;case"t":g.replaceItem(i.createSVGPathSegCurvetoQuadraticSmoothAbs(f,m),b);break;case"a":g.replaceItem(i.createSVGPathSegArcAbs(f,m,_.r1,_.r2,_.angle,_.largeArcFlag,_.sweepFlag),b);break;case"z":case"Z":f=l,m=d;break}(S=="M"||S=="m")&&(l=f,d=m)}}})()},function(a,r,e){var s={};a.exports=s;var o=e(6);e(0),function(){s.create=o.create,s.add=o.add,s.remove=o.remove,s.clear=o.clear,s.addComposite=o.addComposite,s.addBody=o.addBody,s.addConstraint=o.addConstraint}()}])})}(Hs)),Hs.exports}var ut=Mf();function Bt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ql(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ha={duration:.5,overwrite:!1,delay:0},Zr,Ln,_n,It=1e8,Nn=1/It,dr=Math.PI*2,Ef=dr/4,Rf=0,Jl=Math.sqrt,Af=Math.cos,If=Math.sin,On=function(n){return typeof n=="string"},Tn=function(n){return typeof n=="function"},qt=function(n){return typeof n=="number"},Qr=function(n){return typeof n>"u"},Ot=function(n){return typeof n=="object"},Qn=function(n){return n!==!1},Jr=function(){return typeof window<"u"},Ds=function(n){return Tn(n)||On(n)},np=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,ur=/(?:-?\.?\d|\.)+/gi,tp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ra=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,We=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ap=/[+-]=-?[.\d]+/,sp=/[^,'"\[\]\s]+/gi,zf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jn,Pt,fr,no,ct={},ee={},ep,rp=function(n){return(ee=qa(n,ct))&&at},to=function(n,a){return console.warn("Invalid property",n,"set to",a,"Missing plugin? gsap.registerPlugin()")},_s=function(n,a){return!a&&console.warn(n)},op=function(n,a){return n&&(ct[n]=a)&&ee&&(ee[n]=a)||ct},Ss=function(){return 0},Of={suppressEvents:!0,isStart:!0,kill:!1},qs={suppressEvents:!0,kill:!1},Ff={suppressEvents:!0},ao={},ea=[],hr={},ip,rt={},Ne={},fi=30,Ys=[],so="",eo=function(n){var a=n[0],r,e;if(Ot(a)||Tn(a)||(n=[n]),!(r=(a._gsap||{}).harness)){for(e=Ys.length;e--&&!Ys[e].targetTest(a););r=Ys[e]}for(e=n.length;e--;)n[e]&&(n[e]._gsap||(n[e]._gsap=new Rp(n[e],r)))||n.splice(e,1);return n},ba=function(n){return n._gsap||eo(ht(n))[0]._gsap},lp=function(n,a,r){return(r=n[a])&&Tn(r)?n[a]():Qr(r)&&n.getAttribute&&n.getAttribute(a)||r},Jn=function(n,a){return(n=n.split(",")).forEach(a)||n},Pn=function(n){return Math.round(n*1e5)/1e5||0},En=function(n){return Math.round(n*1e7)/1e7||0},Ba=function(n,a){var r=a.charAt(0),e=parseFloat(a.substr(2));return n=parseFloat(n),r==="+"?n+e:r==="-"?n-e:r==="*"?n*e:n/e},Lf=function(n,a){for(var r=a.length,e=0;n.indexOf(a[e])<0&&++e<r;);return e<r},re=function(){var n=ea.length,a=ea.slice(0),r,e;for(hr={},ea.length=0,r=0;r<n;r++)e=a[r],e&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},ro=function(n){return!!(n._initted||n._startAt||n.add)},pp=function(n,a,r,e){ea.length&&!Ln&&re(),n.render(a,r,!!(Ln&&a<0&&ro(n))),ea.length&&!Ln&&re()},cp=function(n){var a=parseFloat(n);return(a||a===0)&&(n+"").match(sp).length<2?a:On(n)?n.trim():n},dp=function(n){return n},dt=function(n,a){for(var r in a)r in n||(n[r]=a[r]);return n},Df=function(n){return function(a,r){for(var e in r)e in a||e==="duration"&&n||e==="ease"||(a[e]=r[e])}},qa=function(n,a){for(var r in a)n[r]=a[r];return n},hi=function t(n,a){for(var r in a)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(n[r]=Ot(a[r])?t(n[r]||(n[r]={}),a[r]):a[r]);return n},oe=function(n,a){var r={},e;for(e in n)e in a||(r[e]=n[e]);return r},fs=function(n){var a=n.parent||jn,r=n.keyframes?Df(Hn(n.keyframes)):dt;if(Qn(n.inherit))for(;a;)r(n,a.vars.defaults),a=a.parent||a._dp;return n},Bf=function(n,a){for(var r=n.length,e=r===a.length;e&&r--&&n[r]===a[r];);return r<0},up=function(n,a,r,e,s){var o=n[e],i;if(s)for(i=a[s];o&&o[s]>i;)o=o._prev;return o?(a._next=o._next,o._next=a):(a._next=n[r],n[r]=a),a._next?a._next._prev=a:n[e]=a,a._prev=o,a.parent=a._dp=n,a},Se=function(n,a,r,e){r===void 0&&(r="_first"),e===void 0&&(e="_last");var s=a._prev,o=a._next;s?s._next=o:n[r]===a&&(n[r]=o),o?o._prev=s:n[e]===a&&(n[e]=s),a._next=a._prev=a.parent=null},la=function(n,a){n.parent&&(!a||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},xa=function(n,a){if(n&&(!a||a._end>n._dur||a._start<0))for(var r=n;r;)r._dirty=1,r=r.parent;return n},Gf=function(n){for(var a=n.parent;a&&a.parent;)a._dirty=1,a.totalDuration(),a=a.parent;return n},gr=function(n,a,r,e){return n._startAt&&(Ln?n._startAt.revert(qs):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(a,!0,e))},Uf=function t(n){return!n||n._ts&&t(n.parent)},gi=function(n){return n._repeat?Ya(n._tTime,n=n.duration()+n._rDelay)*n:0},Ya=function(n,a){var r=Math.floor(n=En(n/a));return n&&r===n?r-1:r},ie=function(n,a){return(n-a._start)*a._ts+(a._ts>=0?0:a._dirty?a.totalDuration():a._tDur)},je=function(n){return n._end=En(n._start+(n._tDur/Math.abs(n._ts||n._rts||Nn)||0))},Ce=function(n,a){var r=n._dp;return r&&r.smoothChildTiming&&n._ts&&(n._start=En(r._time-(n._ts>0?a/n._ts:((n._dirty?n.totalDuration():n._tDur)-a)/-n._ts)),je(n),r._dirty||xa(r,n)),n},fp=function(n,a){var r;if((a._time||!a._dur&&a._initted||a._start<n._time&&(a._dur||!a.add))&&(r=ie(n.rawTime(),a),(!a._dur||zs(0,a.totalDuration(),r)-a._tTime>Nn)&&a.render(r,!0)),xa(n,a)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(r=n;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;n._zTime=-1e-8}},Et=function(n,a,r,e){return a.parent&&la(a),a._start=En((qt(r)?r:r||n!==jn?ft(n,r,a):n._time)+a._delay),a._end=En(a._start+(a.totalDuration()/Math.abs(a.timeScale())||0)),up(n,a,"_first","_last",n._sort?"_start":0),mr(a)||(n._recent=a),e||fp(n,a),n._ts<0&&Ce(n,n._tTime),n},hp=function(n,a){return(ct.ScrollTrigger||to("scrollTrigger",a))&&ct.ScrollTrigger.create(a,n)},gp=function(n,a,r,e,s){if(io(n,a,s),!n._initted)return 1;if(!r&&n._pt&&!Ln&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&ip!==ot.frame)return ea.push(n),n._lazy=[s,e],1},Wf=function t(n){var a=n.parent;return a&&a._ts&&a._initted&&!a._lock&&(a.rawTime()<0||t(a))},mr=function(n){var a=n.data;return a==="isFromStart"||a==="isStart"},Nf=function(n,a,r,e){var s=n.ratio,o=a<0||!a&&(!n._start&&Wf(n)&&!(!n._initted&&mr(n))||(n._ts<0||n._dp._ts<0)&&!mr(n))?0:1,i=n._rDelay,l=0,d,c,u;if(i&&n._repeat&&(l=zs(0,n._tDur,a),c=Ya(l,i),n._yoyo&&c&1&&(o=1-o),c!==Ya(n._tTime,i)&&(s=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==s||Ln||e||n._zTime===Nn||!a&&n._zTime){if(!n._initted&&gp(n,a,e,r,l))return;for(u=n._zTime,n._zTime=a||(r?Nn:0),r||(r=a&&!u),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=l,d=n._pt;d;)d.r(o,d.d),d=d._next;a<0&&gr(n,a,r,!0),n._onUpdate&&!r&&lt(n,"onUpdate"),l&&n._repeat&&!r&&n.parent&&lt(n,"onRepeat"),(a>=n._tDur||a<0)&&n.ratio===o&&(o&&la(n,1),!r&&!Ln&&(lt(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=a)},Vf=function(n,a,r){var e;if(r>a)for(e=n._first;e&&e._start<=r;){if(e.data==="isPause"&&e._start>a)return e;e=e._next}else for(e=n._last;e&&e._start>=r;){if(e.data==="isPause"&&e._start<a)return e;e=e._prev}},$a=function(n,a,r,e){var s=n._repeat,o=En(a)||0,i=n._tTime/n._tDur;return i&&!e&&(n._time*=o/n._dur),n._dur=o,n._tDur=s?s<0?1e10:En(o*(s+1)+n._rDelay*s):o,i>0&&!e&&Ce(n,n._tTime=n._tDur*i),n.parent&&je(n),r||xa(n.parent,n),n},mi=function(n){return n instanceof Xn?xa(n):$a(n,n._dur)},Hf={_start:0,endTime:Ss,totalDuration:Ss},ft=function t(n,a,r){var e=n.labels,s=n._recent||Hf,o=n.duration()>=It?s.endTime(!1):n._dur,i,l,d;return On(a)&&(isNaN(a)||a in e)?(l=a.charAt(0),d=a.substr(-1)==="%",i=a.indexOf("="),l==="<"||l===">"?(i>=0&&(a=a.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(a.substr(1))||0)*(d?(i<0?s:r).totalDuration()/100:1)):i<0?(a in e||(e[a]=o),e[a]):(l=parseFloat(a.charAt(i-1)+a.substr(i+1)),d&&r&&(l=l/100*(Hn(r)?r[0]:r).totalDuration()),i>1?t(n,a.substr(0,i-1),r)+l:o+l)):a==null?o:+a},hs=function(n,a,r){var e=qt(a[1]),s=(e?2:1)+(n<2?0:1),o=a[s],i,l;if(e&&(o.duration=a[1]),o.parent=r,n){for(i=o,l=r;l&&!("immediateRender"in i);)i=l.vars.defaults||{},l=Qn(l.vars.inherit)&&l.parent;o.immediateRender=Qn(i.immediateRender),n<2?o.runBackwards=1:o.startAt=a[s-1]}return new Mn(a[0],o,a[s+1])},da=function(n,a){return n||n===0?a(n):a},zs=function(n,a,r){return r<n?n:r>a?a:r},Wn=function(n,a){return!On(n)||!(a=zf.exec(n))?"":a[1]},qf=function(n,a,r){return da(r,function(e){return zs(n,a,e)})},kr=[].slice,mp=function(n,a){return n&&Ot(n)&&"length"in n&&(!a&&!n.length||n.length-1 in n&&Ot(n[0]))&&!n.nodeType&&n!==Pt},Yf=function(n,a,r){return r===void 0&&(r=[]),n.forEach(function(e){var s;return On(e)&&!a||mp(e,1)?(s=r).push.apply(s,ht(e)):r.push(e)})||r},ht=function(n,a,r){return _n&&!a&&_n.selector?_n.selector(n):On(n)&&!r&&(fr||!Ka())?kr.call((a||no).querySelectorAll(n),0):Hn(n)?Yf(n,r):mp(n)?kr.call(n,0):n?[n]:[]},vr=function(n){return n=ht(n)[0]||_s("Invalid scope")||{},function(a){var r=n.current||n.nativeElement||n;return ht(a,r.querySelectorAll?r:r===n?_s("Invalid scope")||no.createElement("div"):n)}},kp=function(n){return n.sort(function(){return .5-Math.random()})},vp=function(n){if(Tn(n))return n;var a=Ot(n)?n:{each:n},r=wa(a.ease),e=a.from||0,s=parseFloat(a.base)||0,o={},i=e>0&&e<1,l=isNaN(e)||i,d=a.axis,c=e,u=e;return On(e)?c=u={center:.5,edges:.5,end:1}[e]||0:!i&&l&&(c=e[0],u=e[1]),function(h,p,g){var f=(g||a).length,m=o[f],v,b,_,S,k,x,w,y,j;if(!m){if(j=a.grid==="auto"?0:(a.grid||[1,It])[1],!j){for(w=-1e8;w<(w=g[j++].getBoundingClientRect().left)&&j<f;);j<f&&j--}for(m=o[f]=[],v=l?Math.min(j,f)*c-.5:e%j,b=j===It?0:l?f*u/j-.5:e/j|0,w=0,y=It,x=0;x<f;x++)_=x%j-v,S=b-(x/j|0),m[x]=k=d?Math.abs(d==="y"?S:_):Jl(_*_+S*S),k>w&&(w=k),k<y&&(y=k);e==="random"&&kp(m),m.max=w-y,m.min=y,m.v=f=(parseFloat(a.amount)||parseFloat(a.each)*(j>f?f-1:d?d==="y"?f/j:j:Math.max(j,f/j))||0)*(e==="edges"?-1:1),m.b=f<0?s-f:s,m.u=Wn(a.amount||a.each)||0,r=r&&f<0?Pp(r):r}return f=(m[h]-m.min)/m.max||0,En(m.b+(r?r(f):f)*m.v)+m.u}},yr=function(n){var a=Math.pow(10,((n+"").split(".")[1]||"").length);return function(r){var e=En(Math.round(parseFloat(r)/n)*n*a);return(e-e%1)/a+(qt(r)?0:Wn(r))}},yp=function(n,a){var r=Hn(n),e,s;return!r&&Ot(n)&&(e=r=n.radius||It,n.values?(n=ht(n.values),(s=!qt(n[0]))&&(e*=e)):n=yr(n.increment)),da(a,r?Tn(n)?function(o){return s=n(o),Math.abs(s-o)<=e?s:o}:function(o){for(var i=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),d=It,c=0,u=n.length,h,p;u--;)s?(h=n[u].x-i,p=n[u].y-l,h=h*h+p*p):h=Math.abs(n[u]-i),h<d&&(d=h,c=u);return c=!e||d<=e?n[c]:o,s||c===o||qt(o)?c:c+Wn(o)}:yr(n))},bp=function(n,a,r,e){return da(Hn(n)?!a:r===!0?!!(r=0):!e,function(){return Hn(n)?n[~~(Math.random()*n.length)]:(r=r||1e-5)&&(e=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((n-r/2+Math.random()*(a-n+r*.99))/r)*r*e)/e})},$f=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return function(e){return a.reduce(function(s,o){return o(s)},e)}},Kf=function(n,a){return function(r){return n(parseFloat(r))+(a||Wn(r))}},Xf=function(n,a,r){return wp(n,a,0,1,r)},xp=function(n,a,r){return da(r,function(e){return n[~~a(e)]})},Zf=function t(n,a,r){var e=a-n;return Hn(n)?xp(n,t(0,n.length),a):da(r,function(s){return(e+(s-n)%e)%e+n})},Qf=function t(n,a,r){var e=a-n,s=e*2;return Hn(n)?xp(n,t(0,n.length-1),a):da(r,function(o){return o=(s+(o-n)%s)%s||0,n+(o>e?s-o:o)})},js=function(n){for(var a=0,r="",e,s,o,i;~(e=n.indexOf("random(",a));)o=n.indexOf(")",e),i=n.charAt(e+7)==="[",s=n.substr(e+7,o-e-7).match(i?sp:ur),r+=n.substr(a,e-a)+bp(i?s:+s[0],i?0:+s[1],+s[2]||1e-5),a=o+1;return r+n.substr(a,n.length-a)},wp=function(n,a,r,e,s){var o=a-n,i=e-r;return da(s,function(l){return r+((l-n)/o*i||0)})},Jf=function t(n,a,r,e){var s=isNaN(n+a)?0:function(p){return(1-p)*n+p*a};if(!s){var o=On(n),i={},l,d,c,u,h;if(r===!0&&(e=1)&&(r=null),o)n={p:n},a={p:a};else if(Hn(n)&&!Hn(a)){for(c=[],u=n.length,h=u-2,d=1;d<u;d++)c.push(t(n[d-1],n[d]));u--,s=function(g){g*=u;var f=Math.min(h,~~g);return c[f](g-f)},r=a}else e||(n=qa(Hn(n)?[]:{},n));if(!c){for(l in a)oo.call(i,n,l,"get",a[l]);s=function(g){return co(g,i)||(o?n.p:n)}}}return da(r,s)},ki=function(n,a,r){var e=n.labels,s=It,o,i,l;for(o in e)i=e[o]-a,i<0==!!r&&i&&s>(i=Math.abs(i))&&(l=o,s=i);return l},lt=function(n,a,r){var e=n.vars,s=e[a],o=_n,i=n._ctx,l,d,c;if(s)return l=e[a+"Params"],d=e.callbackScope||n,r&&ea.length&&re(),i&&(_n=i),c=l?s.apply(d,l):s.call(d),_n=o,c},ss=function(n){return la(n),n.scrollTrigger&&n.scrollTrigger.kill(!!Ln),n.progress()<1&&lt(n,"onInterrupt"),n},Aa,_p=[],Sp=function(n){if(n)if(n=!n.name&&n.default||n,Jr()||n.headless){var a=n.name,r=Tn(n),e=a&&!r&&n.init?function(){this._props=[]}:n,s={init:Ss,render:co,add:oo,kill:gh,modifier:hh,rawVars:0},o={targetTest:0,get:0,getSetter:po,aliases:{},register:0};if(Ka(),n!==e){if(rt[a])return;dt(e,dt(oe(n,s),o)),qa(e.prototype,qa(s,oe(n,o))),rt[e.prop=a]=e,n.targetTest&&(Ys.push(e),ao[a]=1),a=(a==="css"?"CSS":a.charAt(0).toUpperCase()+a.substr(1))+"Plugin"}op(a,e),n.register&&n.register(at,e,nt)}else _p.push(n)},yn=255,es={aqua:[0,yn,yn],lime:[0,yn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yn],navy:[0,0,128],white:[yn,yn,yn],olive:[128,128,0],yellow:[yn,yn,0],orange:[yn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yn,0,0],pink:[yn,192,203],cyan:[0,yn,yn],transparent:[yn,yn,yn,0]},Ve=function(n,a,r){return n+=n<0?1:n>1?-1:0,(n*6<1?a+(r-a)*n*6:n<.5?r:n*3<2?a+(r-a)*(2/3-n)*6:a)*yn+.5|0},jp=function(n,a,r){var e=n?qt(n)?[n>>16,n>>8&yn,n&yn]:0:es.black,s,o,i,l,d,c,u,h,p,g;if(!e){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),es[n])e=es[n];else if(n.charAt(0)==="#"){if(n.length<6&&(s=n.charAt(1),o=n.charAt(2),i=n.charAt(3),n="#"+s+s+o+o+i+i+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return e=parseInt(n.substr(1,6),16),[e>>16,e>>8&yn,e&yn,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),e=[n>>16,n>>8&yn,n&yn]}else if(n.substr(0,3)==="hsl"){if(e=g=n.match(ur),!a)l=+e[0]%360/360,d=+e[1]/100,c=+e[2]/100,o=c<=.5?c*(d+1):c+d-c*d,s=c*2-o,e.length>3&&(e[3]*=1),e[0]=Ve(l+1/3,s,o),e[1]=Ve(l,s,o),e[2]=Ve(l-1/3,s,o);else if(~n.indexOf("="))return e=n.match(tp),r&&e.length<4&&(e[3]=1),e}else e=n.match(ur)||es.transparent;e=e.map(Number)}return a&&!g&&(s=e[0]/yn,o=e[1]/yn,i=e[2]/yn,u=Math.max(s,o,i),h=Math.min(s,o,i),c=(u+h)/2,u===h?l=d=0:(p=u-h,d=c>.5?p/(2-u-h):p/(u+h),l=u===s?(o-i)/p+(o<i?6:0):u===o?(i-s)/p+2:(s-o)/p+4,l*=60),e[0]=~~(l+.5),e[1]=~~(d*100+.5),e[2]=~~(c*100+.5)),r&&e.length<4&&(e[3]=1),e},Cp=function(n){var a=[],r=[],e=-1;return n.split(ra).forEach(function(s){var o=s.match(Ra)||[];a.push.apply(a,o),r.push(e+=o.length+1)}),a.c=r,a},vi=function(n,a,r){var e="",s=(n+e).match(ra),o=a?"hsla(":"rgba(",i=0,l,d,c,u;if(!s)return n;if(s=s.map(function(h){return(h=jp(h,a,1))&&o+(a?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),r&&(c=Cp(n),l=r.c,l.join(e)!==c.c.join(e)))for(d=n.replace(ra,"1").split(Ra),u=d.length-1;i<u;i++)e+=d[i]+(~l.indexOf(i)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:r).shift());if(!d)for(d=n.split(ra),u=d.length-1;i<u;i++)e+=d[i]+s[i];return e+d[u]},ra=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in es)t+="|"+n+"\\b";return new RegExp(t+")","gi")}(),nh=/hsl[a]?\(/,Tp=function(n){var a=n.join(" "),r;if(ra.lastIndex=0,ra.test(a))return r=nh.test(a),n[1]=vi(n[1],r),n[0]=vi(n[0],r,Cp(n[1])),!0},Cs,ot=function(){var t=Date.now,n=500,a=33,r=t(),e=r,s=1e3/240,o=s,i=[],l,d,c,u,h,p,g=function f(m){var v=t()-e,b=m===!0,_,S,k,x;if((v>n||v<0)&&(r+=v-a),e+=v,k=e-r,_=k-o,(_>0||b)&&(x=++u.frame,h=k-u.time*1e3,u.time=k=k/1e3,o+=_+(_>=s?4:s-_),S=1),b||(l=d(f)),S)for(p=0;p<i.length;p++)i[p](k,h,x,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ep&&(!fr&&Jr()&&(Pt=fr=window,no=Pt.document||{},ct.gsap=at,(Pt.gsapVersions||(Pt.gsapVersions=[])).push(at.version),rp(ee||Pt.GreenSockGlobals||!Pt.gsap&&Pt||{}),_p.forEach(Sp)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),d=c||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Cs=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Cs=0,d=Ss},lagSmoothing:function(m,v){n=m||1/0,a=Math.min(v||33,n)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,v,b){var _=v?function(S,k,x,w){m(S,k,x,w),u.remove(_)}:m;return u.remove(m),i[b?"unshift":"push"](_),Ka(),_},remove:function(m,v){~(v=i.indexOf(m))&&i.splice(v,1)&&p>=v&&p--},_listeners:i},u}(),Ka=function(){return!Cs&&ot.wake()},fn={},th=/^[\d.\-M][\d.\-,\s]/,ah=/["']/g,sh=function(n){for(var a={},r=n.substr(1,n.length-3).split(":"),e=r[0],s=1,o=r.length,i,l,d;s<o;s++)l=r[s],i=s!==o-1?l.lastIndexOf(","):l.length,d=l.substr(0,i),a[e]=isNaN(d)?d.replace(ah,"").trim():+d,e=l.substr(i+1).trim();return a},eh=function(n){var a=n.indexOf("(")+1,r=n.indexOf(")"),e=n.indexOf("(",a);return n.substring(a,~e&&e<r?n.indexOf(")",r+1):r)},rh=function(n){var a=(n+"").split("("),r=fn[a[0]];return r&&a.length>1&&r.config?r.config.apply(null,~n.indexOf("{")?[sh(a[1])]:eh(n).split(",").map(cp)):fn._CE&&th.test(n)?fn._CE("",n):r},Pp=function(n){return function(a){return 1-n(1-a)}},Mp=function t(n,a){for(var r=n._first,e;r;)r instanceof Xn?t(r,a):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==a&&(r.timeline?t(r.timeline,a):(e=r._ease,r._ease=r._yEase,r._yEase=e,r._yoyo=a)),r=r._next},wa=function(n,a){return n&&(Tn(n)?n:fn[n]||rh(n))||a},Ca=function(n,a,r,e){r===void 0&&(r=function(l){return 1-a(1-l)}),e===void 0&&(e=function(l){return l<.5?a(l*2)/2:1-a((1-l)*2)/2});var s={easeIn:a,easeOut:r,easeInOut:e},o;return Jn(n,function(i){fn[i]=ct[i]=s,fn[o=i.toLowerCase()]=r;for(var l in s)fn[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fn[i+"."+l]=s[l]}),s},Ep=function(n){return function(a){return a<.5?(1-n(1-a*2))/2:.5+n((a-.5)*2)/2}},He=function t(n,a,r){var e=a>=1?a:1,s=(r||(n?.3:.45))/(a<1?a:1),o=s/dr*(Math.asin(1/e)||0),i=function(c){return c===1?1:e*Math.pow(2,-10*c)*If((c-o)*s)+1},l=n==="out"?i:n==="in"?function(d){return 1-i(1-d)}:Ep(i);return s=dr/s,l.config=function(d,c){return t(n,d,c)},l},qe=function t(n,a){a===void 0&&(a=1.70158);var r=function(o){return o?--o*o*((a+1)*o+a)+1:0},e=n==="out"?r:n==="in"?function(s){return 1-r(1-s)}:Ep(r);return e.config=function(s){return t(n,s)},e};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,n){var a=n<5?n+1:n;Ca(t+",Power"+(a-1),n?function(r){return Math.pow(r,a)}:function(r){return r},function(r){return 1-Math.pow(1-r,a)},function(r){return r<.5?Math.pow(r*2,a)/2:1-Math.pow((1-r)*2,a)/2})});fn.Linear.easeNone=fn.none=fn.Linear.easeIn;Ca("Elastic",He("in"),He("out"),He());(function(t,n){var a=1/n,r=2*a,e=2.5*a,s=function(i){return i<a?t*i*i:i<r?t*Math.pow(i-1.5/n,2)+.75:i<e?t*(i-=2.25/n)*i+.9375:t*Math.pow(i-2.625/n,2)+.984375};Ca("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ca("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Ca("Circ",function(t){return-(Jl(1-t*t)-1)});Ca("Sine",function(t){return t===1?1:-Af(t*Ef)+1});Ca("Back",qe("in"),qe("out"),qe());fn.SteppedEase=fn.steps=ct.SteppedEase={config:function(n,a){n===void 0&&(n=1);var r=1/n,e=n+(a?0:1),s=a?1:0,o=1-Nn;return function(i){return((e*zs(0,o,i)|0)+s)*r}}};Ha.ease=fn["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return so+=t+","+t+"Params,"});var Rp=function(n,a){this.id=Rf++,n._gsap=this,this.target=n,this.harness=a,this.get=a?a.get:lp,this.set=a?a.getSetter:po},Ts=function(){function t(a){this.vars=a,this._delay=+a.delay||0,(this._repeat=a.repeat===1/0?-2:a.repeat||0)&&(this._rDelay=a.repeatDelay||0,this._yoyo=!!a.yoyo||!!a.yoyoEase),this._ts=1,$a(this,+a.duration,1,1),this.data=a.data,_n&&(this._ctx=_n,_n.data.push(this)),Cs||ot.wake()}var n=t.prototype;return n.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},n.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},n.totalDuration=function(r){return arguments.length?(this._dirty=0,$a(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(r,e){if(Ka(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ce(this,r),!s._dp||s.parent||fp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Et(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===Nn||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),pp(this,r,e)),this},n.time=function(r,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+gi(this))%(this._dur+this._rDelay)||(r?this._dur:0),e):this._time},n.totalProgress=function(r,e){return arguments.length?this.totalTime(this.totalDuration()*r,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(r,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+gi(this),e):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(r,e){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,e):this._repeat?Ya(this._tTime,s)+1:1},n.timeScale=function(r,e){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?ie(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(zs(-Math.abs(this._delay),this.totalDuration(),s),e!==!1),je(this),Gf(this)},n.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nn&&(this._tTime-=Nn)))),this):this._ps},n.startTime=function(r){if(arguments.length){this._start=r;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&Et(e,this,r-this._delay),this}return this._start},n.endTime=function(r){return this._start+(Qn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(r){var e=this.parent||this._dp;return e?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ie(e.rawTime(r),this):this._tTime:this._tTime},n.revert=function(r){r===void 0&&(r=Ff);var e=Ln;return Ln=r,ro(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Ln=e,this},n.globalTime=function(r){for(var e=this,s=arguments.length?r:e.rawTime();e;)s=e._start+s/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(r):s},n.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,mi(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(r){if(arguments.length){var e=this._time;return this._rDelay=r,mi(this),e?this.time(e):this}return this._rDelay},n.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},n.seek=function(r,e){return this.totalTime(ft(this,r),Qn(e))},n.restart=function(r,e){return this.play().totalTime(r?-this._delay:0,Qn(e)),this._dur||(this._zTime=-1e-8),this},n.play=function(r,e){return r!=null&&this.seek(r,e),this.reversed(!1).paused(!1)},n.reverse=function(r,e){return r!=null&&this.seek(r||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.pause=function(r,e){return r!=null&&this.seek(r,e),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},n.isActive=function(){var r=this.parent||this._dp,e=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=e&&s<this.endTime(!0)-Nn)},n.eventCallback=function(r,e,s){var o=this.vars;return arguments.length>1?(e?(o[r]=e,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=e)):delete o[r],this):o[r]},n.then=function(r){var e=this;return new Promise(function(s){var o=Tn(r)?r:dp,i=function(){var d=e.then;e.then=null,Tn(o)&&(o=o(e))&&(o.then||o===e)&&(e.then=d),s(o),e.then=d};e._initted&&e.totalProgress()===1&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i})},n.kill=function(){ss(this)},t}();dt(Ts.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Xn=function(t){Ql(n,t);function n(r,e){var s;return r===void 0&&(r={}),s=t.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=Qn(r.sortChildren),jn&&Et(r.parent||jn,Bt(s),e),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&hp(Bt(s),r.scrollTrigger),s}var a=n.prototype;return a.to=function(e,s,o){return hs(0,arguments,this),this},a.from=function(e,s,o){return hs(1,arguments,this),this},a.fromTo=function(e,s,o,i){return hs(2,arguments,this),this},a.set=function(e,s,o){return s.duration=0,s.parent=this,fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Mn(e,s,ft(this,o),1),this},a.call=function(e,s,o){return Et(this,Mn.delayedCall(0,e,s),o)},a.staggerTo=function(e,s,o,i,l,d,c){return o.duration=s,o.stagger=o.stagger||i,o.onComplete=d,o.onCompleteParams=c,o.parent=this,new Mn(e,o,ft(this,l)),this},a.staggerFrom=function(e,s,o,i,l,d,c){return o.runBackwards=1,fs(o).immediateRender=Qn(o.immediateRender),this.staggerTo(e,s,o,i,l,d,c)},a.staggerFromTo=function(e,s,o,i,l,d,c,u){return i.startAt=o,fs(i).immediateRender=Qn(i.immediateRender),this.staggerTo(e,s,i,l,d,c,u)},a.render=function(e,s,o){var i=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=e<=0?0:En(e),u=this._zTime<0!=e<0&&(this._initted||!d),h,p,g,f,m,v,b,_,S,k,x,w;if(this!==jn&&c>l&&e>=0&&(c=l),c!==this._tTime||o||u){if(i!==this._time&&d&&(c+=this._time-i,e+=this._time-i),h=c,S=this._start,_=this._ts,v=!_,u&&(d||(i=this._zTime),(e||!s)&&(this._zTime=e)),this._repeat){if(x=this._yoyo,m=d+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,s,o);if(h=En(c%m),c===l?(f=this._repeat,h=d):(k=En(c/m),f=~~k,f&&f===k&&(h=d,f--),h>d&&(h=d)),k=Ya(this._tTime,m),!i&&this._tTime&&k!==f&&this._tTime-k*m-this._dur<=0&&(k=f),x&&f&1&&(h=d-h,w=1),f!==k&&!this._lock){var y=x&&k&1,j=y===(x&&f&1);if(f<k&&(y=!y),i=y?0:c%d?d:c,this._lock=1,this.render(i||(w?0:En(f*m)),s,!d)._lock=0,this._tTime=c,!s&&this.parent&&lt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),i&&i!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,j&&(this._lock=2,i=y?d:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Mp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Vf(this,En(i),En(h)),b&&(c-=h-(h=b._start))),this._tTime=c,this._time=h,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,i=0),!i&&c&&!s&&!k&&(lt(this,"onStart"),this._tTime!==c))return this;if(h>=i&&e>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(e,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!v){b=0,g&&(c+=this._zTime=-1e-8);break}}p=g}else{p=this._last;for(var T=e<0?e:h;p;){if(g=p._prev,(p._act||T<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(e,s,o);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,o||Ln&&ro(p)),h!==this._time||!this._ts&&!v){b=0,g&&(c+=this._zTime=T?-1e-8:Nn);break}}p=g}}if(b&&!s&&(this.pause(),b.render(h>=i?0:-1e-8)._zTime=h>=i?1:-1,this._ts))return this._start=S,je(this),this.render(e,s,o);this._onUpdate&&!s&&lt(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&i)&&(S===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((e||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&la(this,1),!s&&!(e<0&&!i)&&(c||i||!l)&&(lt(this,c===l&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},a.add=function(e,s){var o=this;if(qt(s)||(s=ft(this,s,e)),!(e instanceof Ts)){if(Hn(e))return e.forEach(function(i){return o.add(i,s)}),this;if(On(e))return this.addLabel(e,s);if(Tn(e))e=Mn.delayedCall(0,e);else return this}return this!==e?Et(this,e,s):this},a.getChildren=function(e,s,o,i){e===void 0&&(e=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),i===void 0&&(i=-1e8);for(var l=[],d=this._first;d;)d._start>=i&&(d instanceof Mn?s&&l.push(d):(o&&l.push(d),e&&l.push.apply(l,d.getChildren(!0,s,o)))),d=d._next;return l},a.getById=function(e){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===e)return s[o]},a.remove=function(e){return On(e)?this.removeLabel(e):Tn(e)?this.killTweensOf(e):(e.parent===this&&Se(this,e),e===this._recent&&(this._recent=this._last),xa(this))},a.totalTime=function(e,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=En(ot.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),t.prototype.totalTime.call(this,e,s),this._forcing=0,this):this._tTime},a.addLabel=function(e,s){return this.labels[e]=ft(this,s),this},a.removeLabel=function(e){return delete this.labels[e],this},a.addPause=function(e,s,o){var i=Mn.delayedCall(0,s||Ss,o);return i.data="isPause",this._hasPause=1,Et(this,i,ft(this,e))},a.removePause=function(e){var s=this._first;for(e=ft(this,e);s;)s._start===e&&s.data==="isPause"&&la(s),s=s._next},a.killTweensOf=function(e,s,o){for(var i=this.getTweensOf(e,o),l=i.length;l--;)na!==i[l]&&i[l].kill(e,s);return this},a.getTweensOf=function(e,s){for(var o=[],i=ht(e),l=this._first,d=qt(s),c;l;)l instanceof Mn?Lf(l._targets,i)&&(d?(!na||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(i,s)).length&&o.push.apply(o,c),l=l._next;return o},a.tweenTo=function(e,s){s=s||{};var o=this,i=ft(o,e),l=s,d=l.startAt,c=l.onStart,u=l.onStartParams,h=l.immediateRender,p,g=Mn.to(o,dt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:s.duration||Math.abs((i-(d&&"time"in d?d.time:o._time))/o.timeScale())||Nn,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((i-(d&&"time"in d?d.time:o._time))/o.timeScale());g._dur!==m&&$a(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,u||[])}},s));return h?g.render(0):g},a.tweenFromTo=function(e,s,o){return this.tweenTo(s,dt({startAt:{time:ft(this,e)}},o))},a.recent=function(){return this._recent},a.nextLabel=function(e){return e===void 0&&(e=this._time),ki(this,ft(this,e))},a.previousLabel=function(e){return e===void 0&&(e=this._time),ki(this,ft(this,e),1)},a.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Nn)},a.shiftChildren=function(e,s,o){o===void 0&&(o=0);for(var i=this._first,l=this.labels,d;i;)i._start>=o&&(i._start+=e,i._end+=e),i=i._next;if(s)for(d in l)l[d]>=o&&(l[d]+=e);return xa(this)},a.invalidate=function(e){var s=this._first;for(this._lock=0;s;)s.invalidate(e),s=s._next;return t.prototype.invalidate.call(this,e)},a.clear=function(e){e===void 0&&(e=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),xa(this)},a.totalDuration=function(e){var s=0,o=this,i=o._last,l=It,d,c,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-e:e));if(o._dirty){for(u=o.parent;i;)d=i._prev,i._dirty&&i.totalDuration(),c=i._start,c>l&&o._sort&&i._ts&&!o._lock?(o._lock=1,Et(o,i,c-i._delay,1)._lock=0):l=c,c<0&&i._ts&&(s-=c,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),i._end>s&&i._ts&&(s=i._end),i=d;$a(o,o===jn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},n.updateRoot=function(e){if(jn._ts&&(pp(jn,ie(e,jn)),ip=ot.frame),ot.frame>=fi){fi+=pt.autoSleep||120;var s=jn._first;if((!s||!s._ts)&&pt.autoSleep&&ot._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ot.sleep()}}},n}(Ts);dt(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var oh=function(n,a,r,e,s,o,i){var l=new nt(this._pt,n,a,0,1,Lp,null,s),d=0,c=0,u,h,p,g,f,m,v,b;for(l.b=r,l.e=e,r+="",e+="",(v=~e.indexOf("random("))&&(e=js(e)),o&&(b=[r,e],o(b,n,a),r=b[0],e=b[1]),h=r.match(We)||[];u=We.exec(e);)g=u[0],f=e.substring(d,u.index),p?p=(p+1)%5:f.substr(-5)==="rgba("&&(p=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:f||c===1?f:",",s:m,c:g.charAt(1)==="="?Ba(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},d=We.lastIndex);return l.c=d<e.length?e.substring(d,e.length):"",l.fp=i,(ap.test(e)||v)&&(l.e=0),this._pt=l,l},oo=function(n,a,r,e,s,o,i,l,d,c){Tn(e)&&(e=e(s||0,n,o));var u=n[a],h=r!=="get"?r:Tn(u)?d?n[a.indexOf("set")||!Tn(n["get"+a.substr(3)])?a:"get"+a.substr(3)](d):n[a]():u,p=Tn(u)?d?dh:Op:lo,g;if(On(e)&&(~e.indexOf("random(")&&(e=js(e)),e.charAt(1)==="="&&(g=Ba(h,e)+(Wn(h)||0),(g||g===0)&&(e=g))),!c||h!==e||br)return!isNaN(h*e)&&e!==""?(g=new nt(this._pt,n,a,+h||0,e-(h||0),typeof u=="boolean"?fh:Fp,0,p),d&&(g.fp=d),i&&g.modifier(i,this,n),this._pt=g):(!u&&!(a in n)&&to(a,e),oh.call(this,n,a,h,e,p,l||pt.stringFilter,d))},ih=function(n,a,r,e,s){if(Tn(n)&&(n=gs(n,s,a,r,e)),!Ot(n)||n.style&&n.nodeType||Hn(n)||np(n))return On(n)?gs(n,s,a,r,e):n;var o={},i;for(i in n)o[i]=gs(n[i],s,a,r,e);return o},Ap=function(n,a,r,e,s,o){var i,l,d,c;if(rt[n]&&(i=new rt[n]).init(s,i.rawVars?a[n]:ih(a[n],e,s,o,r),r,e,o)!==!1&&(r._pt=l=new nt(r._pt,s,n,0,1,i.render,i,0,i.priority),r!==Aa))for(d=r._ptLookup[r._targets.indexOf(s)],c=i._props.length;c--;)d[i._props[c]]=l;return i},na,br,io=function t(n,a,r){var e=n.vars,s=e.ease,o=e.startAt,i=e.immediateRender,l=e.lazy,d=e.onUpdate,c=e.runBackwards,u=e.yoyoEase,h=e.keyframes,p=e.autoRevert,g=n._dur,f=n._startAt,m=n._targets,v=n.parent,b=v&&v.data==="nested"?v.vars.targets:m,_=n._overwrite==="auto"&&!Zr,S=n.timeline,k,x,w,y,j,T,P,C,A,I,F,G,L;if(S&&(!h||!s)&&(s="none"),n._ease=wa(s,Ha.ease),n._yEase=u?Pp(wa(u===!0?s:u,Ha.ease)):0,u&&n._yoyo&&!n._repeat&&(u=n._yEase,n._yEase=n._ease,n._ease=u),n._from=!S&&!!e.runBackwards,!S||h&&!e.stagger){if(C=m[0]?ba(m[0]).harness:0,G=C&&e[C.prop],k=oe(e,ao),f&&(f._zTime<0&&f.progress(1),a<0&&c&&i&&!p?f.render(-1,!0):f.revert(c&&g?qs:Of),f._lazy=0),o){if(la(n._startAt=Mn.set(m,dt({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!f&&Qn(l),startAt:null,delay:0,onUpdate:d&&function(){return lt(n,"onUpdate")},stagger:0},o))),n._startAt._dp=0,n._startAt._sat=n,a<0&&(Ln||!i&&!p)&&n._startAt.revert(qs),i&&g&&a<=0&&r<=0){a&&(n._zTime=a);return}}else if(c&&g&&!f){if(a&&(i=!1),w=dt({overwrite:!1,data:"isFromStart",lazy:i&&!f&&Qn(l),immediateRender:i,stagger:0,parent:v},k),G&&(w[C.prop]=G),la(n._startAt=Mn.set(m,w)),n._startAt._dp=0,n._startAt._sat=n,a<0&&(Ln?n._startAt.revert(qs):n._startAt.render(-1,!0)),n._zTime=a,!i)t(n._startAt,Nn,Nn);else if(!a)return}for(n._pt=n._ptCache=0,l=g&&Qn(l)||l&&!g,x=0;x<m.length;x++){if(j=m[x],P=j._gsap||eo(m)[x]._gsap,n._ptLookup[x]=I={},hr[P.id]&&ea.length&&re(),F=b===m?x:b.indexOf(j),C&&(A=new C).init(j,G||k,n,F,b)!==!1&&(n._pt=y=new nt(n._pt,j,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(V){I[V]=y}),A.priority&&(T=1)),!C||G)for(w in k)rt[w]&&(A=Ap(w,k,n,F,j,b))?A.priority&&(T=1):I[w]=y=oo.call(n,j,w,"get",k[w],F,b,0,e.stringFilter);n._op&&n._op[x]&&n.kill(j,n._op[x]),_&&n._pt&&(na=n,jn.killTweensOf(j,I,n.globalTime(a)),L=!n.parent,na=0),n._pt&&l&&(hr[P.id]=1)}T&&Dp(n),n._onInit&&n._onInit(n)}n._onUpdate=d,n._initted=(!n._op||n._pt)&&!L,h&&a<=0&&S.render(It,!0,!0)},lh=function(n,a,r,e,s,o,i,l){var d=(n._pt&&n._ptCache||(n._ptCache={}))[a],c,u,h,p;if(!d)for(d=n._ptCache[a]=[],h=n._ptLookup,p=n._targets.length;p--;){if(c=h[p][a],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==a&&c.fp!==a;)c=c._next;if(!c)return br=1,n.vars[a]="+=0",io(n,i),br=0,l?_s(a+" not eligible for reset"):1;d.push(c)}for(p=d.length;p--;)u=d[p],c=u._pt||u,c.s=(e||e===0)&&!s?e:c.s+(e||0)+o*c.c,c.c=r-c.s,u.e&&(u.e=Pn(r)+Wn(u.e)),u.b&&(u.b=c.s+Wn(u.b))},ph=function(n,a){var r=n[0]?ba(n[0]).harness:0,e=r&&r.aliases,s,o,i,l;if(!e)return a;s=qa({},a);for(o in e)if(o in s)for(l=e[o].split(","),i=l.length;i--;)s[l[i]]=s[o];return s},ch=function(n,a,r,e){var s=a.ease||e||"power1.inOut",o,i;if(Hn(a))i=r[n]||(r[n]=[]),a.forEach(function(l,d){return i.push({t:d/(a.length-1)*100,v:l,e:s})});else for(o in a)i=r[o]||(r[o]=[]),o==="ease"||i.push({t:parseFloat(n),v:a[o],e:s})},gs=function(n,a,r,e,s){return Tn(n)?n.call(a,r,e,s):On(n)&&~n.indexOf("random(")?js(n):n},Ip=so+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zp={};Jn(Ip+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return zp[t]=1});var Mn=function(t){Ql(n,t);function n(r,e,s,o){var i;typeof e=="number"&&(s.duration=e,e=s,s=null),i=t.call(this,o?e:fs(e))||this;var l=i.vars,d=l.duration,c=l.delay,u=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,f=l.defaults,m=l.scrollTrigger,v=l.yoyoEase,b=e.parent||jn,_=(Hn(r)||np(r)?qt(r[0]):"length"in e)?[r]:ht(r),S,k,x,w,y,j,T,P;if(i._targets=_.length?eo(_):_s("GSAP target "+r+" not found. https://gsap.com",!pt.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=p,g||h||Ds(d)||Ds(c)){if(e=i.vars,S=i.timeline=new Xn({data:"nested",defaults:f||{},targets:b&&b.data==="nested"?b.vars.targets:_}),S.kill(),S.parent=S._dp=Bt(i),S._start=0,h||Ds(d)||Ds(c)){if(w=_.length,T=h&&vp(h),Ot(h))for(y in h)~Ip.indexOf(y)&&(P||(P={}),P[y]=h[y]);for(k=0;k<w;k++)x=oe(e,zp),x.stagger=0,v&&(x.yoyoEase=v),P&&qa(x,P),j=_[k],x.duration=+gs(d,Bt(i),k,j,_),x.delay=(+gs(c,Bt(i),k,j,_)||0)-i._delay,!h&&w===1&&x.delay&&(i._delay=c=x.delay,i._start+=c,x.delay=0),S.to(j,x,T?T(k,j,_):0),S._ease=fn.none;S.duration()?d=c=0:i.timeline=0}else if(g){fs(dt(S.vars.defaults,{ease:"none"})),S._ease=wa(g.ease||e.ease||"none");var C=0,A,I,F;if(Hn(g))g.forEach(function(G){return S.to(_,G,">")}),S.duration();else{x={};for(y in g)y==="ease"||y==="easeEach"||ch(y,g[y],x,g.easeEach);for(y in x)for(A=x[y].sort(function(G,L){return G.t-L.t}),C=0,k=0;k<A.length;k++)I=A[k],F={ease:I.e,duration:(I.t-(k?A[k-1].t:0))/100*d},F[y]=I.v,S.to(_,F,C),C+=F.duration;S.duration()<d&&S.to({},{duration:d-S.duration()})}}d||i.duration(d=S.duration())}else i.timeline=0;return p===!0&&!Zr&&(na=Bt(i),jn.killTweensOf(_),na=0),Et(b,Bt(i),s),e.reversed&&i.reverse(),e.paused&&i.paused(!0),(u||!d&&!g&&i._start===En(b._time)&&Qn(u)&&Uf(Bt(i))&&b.data!=="nested")&&(i._tTime=-1e-8,i.render(Math.max(0,-c)||0)),m&&hp(Bt(i),m),i}var a=n.prototype;return a.render=function(e,s,o){var i=this._time,l=this._tDur,d=this._dur,c=e<0,u=e>l-Nn&&!c?l:e<Nn?0:e,h,p,g,f,m,v,b,_,S;if(!d)Nf(this,e,s,o);else if(u!==this._tTime||!e||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=u,_=this.timeline,this._repeat){if(f=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(f*100+e,s,o);if(h=En(u%f),u===l?(g=this._repeat,h=d):(m=En(u/f),g=~~m,g&&g===m?(h=d,g--):h>d&&(h=d)),v=this._yoyo&&g&1,v&&(S=this._yEase,h=d-h),m=Ya(this._tTime,f),h===i&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(_&&this._yEase&&Mp(_,v),this.vars.repeatRefresh&&!v&&!this._lock&&h!==f&&this._initted&&(this._lock=o=1,this.render(En(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(gp(this,c?e:h,o,s,u))return this._tTime=0,this;if(i!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(d!==this._dur)return this.render(e,s,o)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(S||this._ease)(h/d),this._from&&(this.ratio=b=1-b),!i&&u&&!s&&!m&&(lt(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;_&&_.render(e<0?e:_._dur*_._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=e),this._onUpdate&&!s&&(c&&gr(this,e,s,o),lt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&lt(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(c&&!this._onUpdate&&gr(this,e,!0,!0),(e||!d)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&la(this,1),!s&&!(c&&!i)&&(u||i||v)&&(lt(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},a.targets=function(){return this._targets},a.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e)},a.resetTo=function(e,s,o,i,l){Cs||ot.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||io(this,d),c=this._ease(d/this._dur),lh(this,e,s,o,i,c,d,l)?this.resetTo(e,s,o,i,1):(Ce(this,0),this.parent||up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},a.kill=function(e,s){if(s===void 0&&(s="all"),!e&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ss(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(e,s,na&&na.vars.overwrite!==!0)._first||ss(this),this.parent&&o!==this.timeline.totalDuration()&&$a(this,this._dur*this.timeline._tDur/o,0,1),this}var i=this._targets,l=e?ht(e):i,d=this._ptLookup,c=this._pt,u,h,p,g,f,m,v;if((!s||s==="all")&&Bf(i,l))return s==="all"&&(this._pt=0),ss(this);for(u=this._op=this._op||[],s!=="all"&&(On(s)&&(f={},Jn(s,function(b){return f[b]=1}),s=f),s=ph(i,s)),v=i.length;v--;)if(~l.indexOf(i[v])){h=d[v],s==="all"?(u[v]=s,g=h,p={}):(p=u[v]=u[v]||{},g=s);for(f in g)m=h&&h[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&Se(this,m,"_pt"),delete h[f]),p!=="all"&&(p[f]=1)}return this._initted&&!this._pt&&c&&ss(this),this},n.to=function(e,s){return new n(e,s,arguments[2])},n.from=function(e,s){return hs(1,arguments)},n.delayedCall=function(e,s,o,i){return new n(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:i})},n.fromTo=function(e,s,o){return hs(2,arguments)},n.set=function(e,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new n(e,s)},n.killTweensOf=function(e,s,o){return jn.killTweensOf(e,s,o)},n}(Ts);dt(Mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(t){Mn[t]=function(){var n=new Xn,a=kr.call(arguments,0);return a.splice(t==="staggerFromTo"?5:4,0,0),n[t].apply(n,a)}});var lo=function(n,a,r){return n[a]=r},Op=function(n,a,r){return n[a](r)},dh=function(n,a,r,e){return n[a](e.fp,r)},uh=function(n,a,r){return n.setAttribute(a,r)},po=function(n,a){return Tn(n[a])?Op:Qr(n[a])&&n.setAttribute?uh:lo},Fp=function(n,a){return a.set(a.t,a.p,Math.round((a.s+a.c*n)*1e6)/1e6,a)},fh=function(n,a){return a.set(a.t,a.p,!!(a.s+a.c*n),a)},Lp=function(n,a){var r=a._pt,e="";if(!n&&a.b)e=a.b;else if(n===1&&a.e)e=a.e;else{for(;r;)e=r.p+(r.m?r.m(r.s+r.c*n):Math.round((r.s+r.c*n)*1e4)/1e4)+e,r=r._next;e+=a.c}a.set(a.t,a.p,e,a)},co=function(n,a){for(var r=a._pt;r;)r.r(n,r.d),r=r._next},hh=function(n,a,r,e){for(var s=this._pt,o;s;)o=s._next,s.p===e&&s.modifier(n,a,r),s=o},gh=function(n){for(var a=this._pt,r,e;a;)e=a._next,a.p===n&&!a.op||a.op===n?Se(this,a,"_pt"):a.dep||(r=1),a=e;return!r},mh=function(n,a,r,e){e.mSet(n,a,e.m.call(e.tween,r,e.mt),e)},Dp=function(n){for(var a=n._pt,r,e,s,o;a;){for(r=a._next,e=s;e&&e.pr>a.pr;)e=e._next;(a._prev=e?e._prev:o)?a._prev._next=a:s=a,(a._next=e)?e._prev=a:o=a,a=r}n._pt=s},nt=function(){function t(a,r,e,s,o,i,l,d,c){this.t=r,this.s=s,this.c=o,this.p=e,this.r=i||Fp,this.d=l||this,this.set=d||lo,this.pr=c||0,this._next=a,a&&(a._prev=this)}var n=t.prototype;return n.modifier=function(r,e,s){this.mSet=this.mSet||this.set,this.set=mh,this.m=r,this.mt=s,this.tween=e},t}();Jn(so+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ao[t]=1});ct.TweenMax=ct.TweenLite=Mn;ct.TimelineLite=ct.TimelineMax=Xn;jn=new Xn({sortChildren:!1,defaults:Ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pt.stringFilter=Tp;var _a=[],$s={},kh=[],yi=0,vh=0,Ye=function(n){return($s[n]||kh).map(function(a){return a()})},xr=function(){var n=Date.now(),a=[];n-yi>2&&(Ye("matchMediaInit"),_a.forEach(function(r){var e=r.queries,s=r.conditions,o,i,l,d;for(i in e)o=Pt.matchMedia(e[i]).matches,o&&(l=1),o!==s[i]&&(s[i]=o,d=1);d&&(r.revert(),l&&a.push(r))}),Ye("matchMediaRevert"),a.forEach(function(r){return r.onMatch(r,function(e){return r.add(null,e)})}),yi=n,Ye("matchMedia"))},Bp=function(){function t(a,r){this.selector=r&&vr(r),this.data=[],this._r=[],this.isReverted=!1,this.id=vh++,a&&this.add(a)}var n=t.prototype;return n.add=function(r,e,s){Tn(r)&&(s=e,e=r,r=Tn);var o=this,i=function(){var d=_n,c=o.selector,u;return d&&d!==o&&d.data.push(o),s&&(o.selector=vr(s)),_n=o,u=e.apply(o,arguments),Tn(u)&&o._r.push(u),_n=d,o.selector=c,o.isReverted=!1,u};return o.last=i,r===Tn?i(o,function(l){return o.add(null,l)}):r?o[r]=i:i},n.ignore=function(r){var e=_n;_n=null,r(this),_n=e},n.getTweens=function(){var r=[];return this.data.forEach(function(e){return e instanceof t?r.push.apply(r,e.getTweens()):e instanceof Mn&&!(e.parent&&e.parent.data==="nested")&&r.push(e)}),r},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(r,e){var s=this;if(r?function(){for(var i=s.getTweens(),l=s.data.length,d;l--;)d=s.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return i.splice(i.indexOf(c),1)}));for(i.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,u){return u.g-c.g||-1/0}).forEach(function(c){return c.t.revert(r)}),l=s.data.length;l--;)d=s.data[l],d instanceof Xn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Mn)&&d.revert&&d.revert(r);s._r.forEach(function(c){return c(r,s)}),s.isReverted=!0}():this.data.forEach(function(i){return i.kill&&i.kill()}),this.clear(),e)for(var o=_a.length;o--;)_a[o].id===this.id&&_a.splice(o,1)},n.revert=function(r){this.kill(r||{})},t}(),yh=function(){function t(a){this.contexts=[],this.scope=a,_n&&_n.data.push(this)}var n=t.prototype;return n.add=function(r,e,s){Ot(r)||(r={matches:r});var o=new Bp(0,s||this.scope),i=o.conditions={},l,d,c;_n&&!o.selector&&(o.selector=_n.selector),this.contexts.push(o),e=o.add("onMatch",e),o.queries=r;for(d in r)d==="all"?c=1:(l=Pt.matchMedia(r[d]),l&&(_a.indexOf(o)<0&&_a.push(o),(i[d]=l.matches)&&(c=1),l.addListener?l.addListener(xr):l.addEventListener("change",xr)));return c&&e(o,function(u){return o.add(null,u)}),this},n.revert=function(r){this.kill(r||{})},n.kill=function(r){this.contexts.forEach(function(e){return e.kill(r,!0)})},t}(),le={registerPlugin:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];a.forEach(function(e){return Sp(e)})},timeline:function(n){return new Xn(n)},getTweensOf:function(n,a){return jn.getTweensOf(n,a)},getProperty:function(n,a,r,e){On(n)&&(n=ht(n)[0]);var s=ba(n||{}).get,o=r?dp:cp;return r==="native"&&(r=""),n&&(a?o((rt[a]&&rt[a].get||s)(n,a,r,e)):function(i,l,d){return o((rt[i]&&rt[i].get||s)(n,i,l,d))})},quickSetter:function(n,a,r){if(n=ht(n),n.length>1){var e=n.map(function(c){return at.quickSetter(c,a,r)}),s=e.length;return function(c){for(var u=s;u--;)e[u](c)}}n=n[0]||{};var o=rt[a],i=ba(n),l=i.harness&&(i.harness.aliases||{})[a]||a,d=o?function(c){var u=new o;Aa._pt=0,u.init(n,r?c+r:c,Aa,0,[n]),u.render(1,u),Aa._pt&&co(1,Aa)}:i.set(n,l);return o?d:function(c){return d(n,l,r?c+r:c,i,1)}},quickTo:function(n,a,r){var e,s=at.to(n,dt((e={},e[a]="+=0.1",e.paused=!0,e.stagger=0,e),r||{})),o=function(l,d,c){return s.resetTo(a,l,d,c)};return o.tween=s,o},isTweening:function(n){return jn.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=wa(n.ease,Ha.ease)),hi(Ha,n||{})},config:function(n){return hi(pt,n||{})},registerEffect:function(n){var a=n.name,r=n.effect,e=n.plugins,s=n.defaults,o=n.extendTimeline;(e||"").split(",").forEach(function(i){return i&&!rt[i]&&!ct[i]&&_s(a+" effect requires "+i+" plugin.")}),Ne[a]=function(i,l,d){return r(ht(i),dt(l||{},s),d)},o&&(Xn.prototype[a]=function(i,l,d){return this.add(Ne[a](i,Ot(l)?l:(d=l)&&{},this),d)})},registerEase:function(n,a){fn[n]=wa(a)},parseEase:function(n,a){return arguments.length?wa(n,a):fn},getById:function(n){return jn.getById(n)},exportRoot:function(n,a){n===void 0&&(n={});var r=new Xn(n),e,s;for(r.smoothChildTiming=Qn(n.smoothChildTiming),jn.remove(r),r._dp=0,r._time=r._tTime=jn._time,e=jn._first;e;)s=e._next,(a||!(!e._dur&&e instanceof Mn&&e.vars.onComplete===e._targets[0]))&&Et(r,e,e._start-e._delay),e=s;return Et(jn,r,0),r},context:function(n,a){return n?new Bp(n,a):_n},matchMedia:function(n){return new yh(n)},matchMediaRefresh:function(){return _a.forEach(function(n){var a=n.conditions,r,e;for(e in a)a[e]&&(a[e]=!1,r=1);r&&n.revert()})||xr()},addEventListener:function(n,a){var r=$s[n]||($s[n]=[]);~r.indexOf(a)||r.push(a)},removeEventListener:function(n,a){var r=$s[n],e=r&&r.indexOf(a);e>=0&&r.splice(e,1)},utils:{wrap:Zf,wrapYoyo:Qf,distribute:vp,random:bp,snap:yp,normalize:Xf,getUnit:Wn,clamp:qf,splitColor:jp,toArray:ht,selector:vr,mapRange:wp,pipe:$f,unitize:Kf,interpolate:Jf,shuffle:kp},install:rp,effects:Ne,ticker:ot,updateRoot:Xn.updateRoot,plugins:rt,globalTimeline:jn,core:{PropTween:nt,globals:op,Tween:Mn,Timeline:Xn,Animation:Ts,getCache:ba,_removeLinkedListItem:Se,reverting:function(){return Ln},context:function(n){return n&&_n&&(_n.data.push(n),n._ctx=_n),_n},suppressOverwrites:function(n){return Zr=n}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return le[t]=Mn[t]});ot.add(Xn.updateRoot);Aa=le.to({},{duration:0});var bh=function(n,a){for(var r=n._pt;r&&r.p!==a&&r.op!==a&&r.fp!==a;)r=r._next;return r},xh=function(n,a){var r=n._targets,e,s,o;for(e in a)for(s=r.length;s--;)o=n._ptLookup[s][e],o&&(o=o.d)&&(o._pt&&(o=bh(o,e)),o&&o.modifier&&o.modifier(a[e],n,r[s],e))},$e=function(n,a){return{name:n,headless:1,rawVars:1,init:function(e,s,o){o._onInit=function(i){var l,d;if(On(s)&&(l={},Jn(s,function(c){return l[c]=1}),s=l),a){l={};for(d in s)l[d]=a(s[d]);s=l}xh(i,s)}}}},at=le.registerPlugin({name:"attr",init:function(n,a,r,e,s){var o,i,l;this.tween=r;for(o in a)l=n.getAttribute(o)||"",i=this.add(n,"setAttribute",(l||0)+"",a[o],e,s,0,0,o),i.op=o,i.b=l,this._props.push(o)},render:function(n,a){for(var r=a._pt;r;)Ln?r.set(r.t,r.p,r.b,r):r.r(n,r.d),r=r._next}},{name:"endArray",headless:1,init:function(n,a){for(var r=a.length;r--;)this.add(n,r,n[r]||0,a[r],0,0,0,0,0,1)}},$e("roundProps",yr),$e("modifiers"),$e("snap",yp))||le;Mn.version=Xn.version=at.version="3.13.0";ep=1;Jr()&&Ka();fn.Power0;fn.Power1;fn.Power2;fn.Power3;fn.Power4;fn.Linear;fn.Quad;fn.Cubic;fn.Quart;fn.Quint;fn.Strong;fn.Elastic;fn.Back;fn.SteppedEase;fn.Bounce;fn.Sine;fn.Expo;fn.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bi,ta,Ga,uo,va,xi,fo,wh=function(){return typeof window<"u"},Yt={},ka=180/Math.PI,Ua=Math.PI/180,Pa=Math.atan2,wi=1e8,ho=/([A-Z])/g,_h=/(left|right|width|margin|padding|x)/i,Sh=/[\s,\(]\S/,Rt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wr=function(n,a){return a.set(a.t,a.p,Math.round((a.s+a.c*n)*1e4)/1e4+a.u,a)},jh=function(n,a){return a.set(a.t,a.p,n===1?a.e:Math.round((a.s+a.c*n)*1e4)/1e4+a.u,a)},Ch=function(n,a){return a.set(a.t,a.p,n?Math.round((a.s+a.c*n)*1e4)/1e4+a.u:a.b,a)},Th=function(n,a){var r=a.s+a.c*n;a.set(a.t,a.p,~~(r+(r<0?-.5:.5))+a.u,a)},Gp=function(n,a){return a.set(a.t,a.p,n?a.e:a.b,a)},Up=function(n,a){return a.set(a.t,a.p,n!==1?a.b:a.e,a)},Ph=function(n,a,r){return n.style[a]=r},Mh=function(n,a,r){return n.style.setProperty(a,r)},Eh=function(n,a,r){return n._gsap[a]=r},Rh=function(n,a,r){return n._gsap.scaleX=n._gsap.scaleY=r},Ah=function(n,a,r,e,s){var o=n._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},Ih=function(n,a,r,e,s){var o=n._gsap;o[a]=r,o.renderTransform(s,o)},Cn="transform",tt=Cn+"Origin",zh=function t(n,a){var r=this,e=this.target,s=e.style,o=e._gsap;if(n in Yt&&s){if(this.tfm=this.tfm||{},n!=="transform")n=Rt[n]||n,~n.indexOf(",")?n.split(",").forEach(function(i){return r.tfm[i]=Gt(e,i)}):this.tfm[n]=o.x?o[n]:Gt(e,n),n===tt&&(this.tfm.zOrigin=o.zOrigin);else return Rt.transform.split(",").forEach(function(i){return t.call(r,i,a)});if(this.props.indexOf(Cn)>=0)return;o.svg&&(this.svgo=e.getAttribute("data-svg-origin"),this.props.push(tt,a,"")),n=Cn}(s||a)&&this.props.push(n,a,s[n])},Wp=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Oh=function(){var n=this.props,a=this.target,r=a.style,e=a._gsap,s,o;for(s=0;s<n.length;s+=3)n[s+1]?n[s+1]===2?a[n[s]](n[s+2]):a[n[s]]=n[s+2]:n[s+2]?r[n[s]]=n[s+2]:r.removeProperty(n[s].substr(0,2)==="--"?n[s]:n[s].replace(ho,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)e[o]=this.tfm[o];e.svg&&(e.renderTransform(),a.setAttribute("data-svg-origin",this.svgo||"")),s=fo(),(!s||!s.isStart)&&!r[Cn]&&(Wp(r),e.zOrigin&&r[tt]&&(r[tt]+=" "+e.zOrigin+"px",e.zOrigin=0,e.renderTransform()),e.uncache=1)}},Np=function(n,a){var r={target:n,props:[],revert:Oh,save:zh};return n._gsap||at.core.getCache(n),a&&n.style&&n.nodeType&&a.split(",").forEach(function(e){return r.save(e)}),r},Vp,_r=function(n,a){var r=ta.createElementNS?ta.createElementNS((a||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):ta.createElement(n);return r&&r.style?r:ta.createElement(n)},gt=function t(n,a,r){var e=getComputedStyle(n);return e[a]||e.getPropertyValue(a.replace(ho,"-$1").toLowerCase())||e.getPropertyValue(a)||!r&&t(n,Xa(a)||a,1)||""},_i="O,Moz,ms,Ms,Webkit".split(","),Xa=function(n,a,r){var e=a||va,s=e.style,o=5;if(n in s&&!r)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(_i[o]+n in s););return o<0?null:(o===3?"ms":o>=0?_i[o]:"")+n},Sr=function(){wh()&&window.document&&(bi=window,ta=bi.document,Ga=ta.documentElement,va=_r("div")||{style:{}},_r("div"),Cn=Xa(Cn),tt=Cn+"Origin",va.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vp=!!Xa("perspective"),fo=at.core.reverting,uo=1)},Si=function(n){var a=n.ownerSVGElement,r=_r("svg",a&&a.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),e=n.cloneNode(!0),s;e.style.display="block",r.appendChild(e),Ga.appendChild(r);try{s=e.getBBox()}catch{}return r.removeChild(e),Ga.removeChild(r),s},ji=function(n,a){for(var r=a.length;r--;)if(n.hasAttribute(a[r]))return n.getAttribute(a[r])},Hp=function(n){var a,r;try{a=n.getBBox()}catch{a=Si(n),r=1}return a&&(a.width||a.height)||r||(a=Si(n)),a&&!a.width&&!a.x&&!a.y?{x:+ji(n,["x","cx","x1"])||0,y:+ji(n,["y","cy","y1"])||0,width:0,height:0}:a},qp=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&Hp(n))},Sa=function(n,a){if(a){var r=n.style,e;a in Yt&&a!==tt&&(a=Cn),r.removeProperty?(e=a.substr(0,2),(e==="ms"||a.substr(0,6)==="webkit")&&(a="-"+a),r.removeProperty(e==="--"?a:a.replace(ho,"-$1").toLowerCase())):r.removeAttribute(a)}},aa=function(n,a,r,e,s,o){var i=new nt(n._pt,a,r,0,1,o?Up:Gp);return n._pt=i,i.b=e,i.e=s,n._props.push(r),i},Ci={deg:1,rad:1,turn:1},Fh={grid:1,flex:1},pa=function t(n,a,r,e){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",i=va.style,l=_h.test(a),d=n.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),u=100,h=e==="px",p=e==="%",g,f,m,v;if(e===o||!s||Ci[e]||Ci[o])return s;if(o!=="px"&&!h&&(s=t(n,a,r,"px")),v=n.getCTM&&qp(n),(p||o==="%")&&(Yt[a]||~a.indexOf("adius")))return g=v?n.getBBox()[l?"width":"height"]:n[c],Pn(p?s/g*u:s/100*g);if(i[l?"width":"height"]=u+(h?o:e),f=e!=="rem"&&~a.indexOf("adius")||e==="em"&&n.appendChild&&!d?n:n.parentNode,v&&(f=(n.ownerSVGElement||{}).parentNode),(!f||f===ta||!f.appendChild)&&(f=ta.body),m=f._gsap,m&&p&&m.width&&l&&m.time===ot.time&&!m.uncache)return Pn(s/m.width*u);if(p&&(a==="height"||a==="width")){var b=n.style[a];n.style[a]=u+e,g=n[c],b?n.style[a]=b:Sa(n,a)}else(p||o==="%")&&!Fh[gt(f,"display")]&&(i.position=gt(n,"position")),f===n&&(i.position="static"),f.appendChild(va),g=va[c],f.removeChild(va),i.position="absolute";return l&&p&&(m=ba(f),m.time=ot.time,m.width=f[c]),Pn(h?g*s/u:g&&s?u/g*s:0)},Gt=function(n,a,r,e){var s;return uo||Sr(),a in Rt&&a!=="transform"&&(a=Rt[a],~a.indexOf(",")&&(a=a.split(",")[0])),Yt[a]&&a!=="transform"?(s=Ms(n,e),s=a!=="transformOrigin"?s[a]:s.svg?s.origin:ce(gt(n,tt))+" "+s.zOrigin+"px"):(s=n.style[a],(!s||s==="auto"||e||~(s+"").indexOf("calc("))&&(s=pe[a]&&pe[a](n,a,r)||gt(n,a)||lp(n,a)||(a==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?pa(n,a,s,r)+r:s},Lh=function(n,a,r,e){if(!r||r==="none"){var s=Xa(a,n,1),o=s&&gt(n,s,1);o&&o!==r?(a=s,r=o):a==="borderColor"&&(r=gt(n,"borderTopColor"))}var i=new nt(this._pt,n.style,a,0,1,Lp),l=0,d=0,c,u,h,p,g,f,m,v,b,_,S,k;if(i.b=r,i.e=e,r+="",e+="",e.substring(0,6)==="var(--"&&(e=gt(n,e.substring(4,e.indexOf(")")))),e==="auto"&&(f=n.style[a],n.style[a]=e,e=gt(n,a)||e,f?n.style[a]=f:Sa(n,a)),c=[r,e],Tp(c),r=c[0],e=c[1],h=r.match(Ra)||[],k=e.match(Ra)||[],k.length){for(;u=Ra.exec(e);)m=u[0],b=e.substring(l,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(f=h[d++]||"")&&(p=parseFloat(f)||0,S=f.substr((p+"").length),m.charAt(1)==="="&&(m=Ba(p,m)+S),v=parseFloat(m),_=m.substr((v+"").length),l=Ra.lastIndex-_.length,_||(_=_||pt.units[a]||S,l===e.length&&(e+=_,i.e+=_)),S!==_&&(p=pa(n,a,f,_)||0),i._pt={_next:i._pt,p:b||d===1?b:",",s:p,c:v-p,m:g&&g<4||a==="zIndex"?Math.round:0});i.c=l<e.length?e.substring(l,e.length):""}else i.r=a==="display"&&e==="none"?Up:Gp;return ap.test(e)&&(i.e=0),this._pt=i,i},Ti={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dh=function(n){var a=n.split(" "),r=a[0],e=a[1]||"50%";return(r==="top"||r==="bottom"||e==="left"||e==="right")&&(n=r,r=e,e=n),a[0]=Ti[r]||r,a[1]=Ti[e]||e,a.join(" ")},Bh=function(n,a){if(a.tween&&a.tween._time===a.tween._dur){var r=a.t,e=r.style,s=a.u,o=r._gsap,i,l,d;if(s==="all"||s===!0)e.cssText="",l=1;else for(s=s.split(","),d=s.length;--d>-1;)i=s[d],Yt[i]&&(l=1,i=i==="transformOrigin"?tt:Cn),Sa(r,i);l&&(Sa(r,Cn),o&&(o.svg&&r.removeAttribute("transform"),e.scale=e.rotate=e.translate="none",Ms(r,1),o.uncache=1,Wp(e)))}},pe={clearProps:function(n,a,r,e,s){if(s.data!=="isFromStart"){var o=n._pt=new nt(n._pt,a,r,0,0,Bh);return o.u=e,o.pr=-10,o.tween=s,n._props.push(r),1}}},Ps=[1,0,0,1,0,0],Yp={},$p=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Pi=function(n){var a=gt(n,Cn);return $p(a)?Ps:a.substr(7).match(tp).map(Pn)},go=function(n,a){var r=n._gsap||ba(n),e=n.style,s=Pi(n),o,i,l,d;return r.svg&&n.getAttribute("transform")?(l=n.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ps:s):(s===Ps&&!n.offsetParent&&n!==Ga&&!r.svg&&(l=e.display,e.display="block",o=n.parentNode,(!o||!n.offsetParent&&!n.getBoundingClientRect().width)&&(d=1,i=n.nextElementSibling,Ga.appendChild(n)),s=Pi(n),l?e.display=l:Sa(n,"display"),d&&(i?o.insertBefore(n,i):o?o.appendChild(n):Ga.removeChild(n))),a&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},jr=function(n,a,r,e,s,o){var i=n._gsap,l=s||go(n,!0),d=i.xOrigin||0,c=i.yOrigin||0,u=i.xOffset||0,h=i.yOffset||0,p=l[0],g=l[1],f=l[2],m=l[3],v=l[4],b=l[5],_=a.split(" "),S=parseFloat(_[0])||0,k=parseFloat(_[1])||0,x,w,y,j;r?l!==Ps&&(w=p*m-g*f)&&(y=S*(m/w)+k*(-f/w)+(f*b-m*v)/w,j=S*(-g/w)+k*(p/w)-(p*b-g*v)/w,S=y,k=j):(x=Hp(n),S=x.x+(~_[0].indexOf("%")?S/100*x.width:S),k=x.y+(~(_[1]||_[0]).indexOf("%")?k/100*x.height:k)),e||e!==!1&&i.smooth?(v=S-d,b=k-c,i.xOffset=u+(v*p+b*f)-v,i.yOffset=h+(v*g+b*m)-b):i.xOffset=i.yOffset=0,i.xOrigin=S,i.yOrigin=k,i.smooth=!!e,i.origin=a,i.originIsAbsolute=!!r,n.style[tt]="0px 0px",o&&(aa(o,i,"xOrigin",d,S),aa(o,i,"yOrigin",c,k),aa(o,i,"xOffset",u,i.xOffset),aa(o,i,"yOffset",h,i.yOffset)),n.setAttribute("data-svg-origin",S+" "+k)},Ms=function(n,a){var r=n._gsap||new Rp(n);if("x"in r&&!a&&!r.uncache)return r;var e=n.style,s=r.scaleX<0,o="px",i="deg",l=getComputedStyle(n),d=gt(n,tt)||"0",c,u,h,p,g,f,m,v,b,_,S,k,x,w,y,j,T,P,C,A,I,F,G,L,V,nn,on,pn,sn,dn,cn,un;return c=u=h=f=m=v=b=_=S=0,p=g=1,r.svg=!!(n.getCTM&&qp(n)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(e[Cn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Cn]!=="none"?l[Cn]:"")),e.scale=e.rotate=e.translate="none"),w=go(n,r.svg),r.svg&&(r.uncache?(V=n.getBBox(),d=r.xOrigin-V.x+"px "+(r.yOrigin-V.y)+"px",L=""):L=!a&&n.getAttribute("data-svg-origin"),jr(n,L||d,!!L||r.originIsAbsolute,r.smooth!==!1,w)),k=r.xOrigin||0,x=r.yOrigin||0,w!==Ps&&(P=w[0],C=w[1],A=w[2],I=w[3],c=F=w[4],u=G=w[5],w.length===6?(p=Math.sqrt(P*P+C*C),g=Math.sqrt(I*I+A*A),f=P||C?Pa(C,P)*ka:0,b=A||I?Pa(A,I)*ka+f:0,b&&(g*=Math.abs(Math.cos(b*Ua))),r.svg&&(c-=k-(k*P+x*A),u-=x-(k*C+x*I))):(un=w[6],dn=w[7],on=w[8],pn=w[9],sn=w[10],cn=w[11],c=w[12],u=w[13],h=w[14],y=Pa(un,sn),m=y*ka,y&&(j=Math.cos(-y),T=Math.sin(-y),L=F*j+on*T,V=G*j+pn*T,nn=un*j+sn*T,on=F*-T+on*j,pn=G*-T+pn*j,sn=un*-T+sn*j,cn=dn*-T+cn*j,F=L,G=V,un=nn),y=Pa(-A,sn),v=y*ka,y&&(j=Math.cos(-y),T=Math.sin(-y),L=P*j-on*T,V=C*j-pn*T,nn=A*j-sn*T,cn=I*T+cn*j,P=L,C=V,A=nn),y=Pa(C,P),f=y*ka,y&&(j=Math.cos(y),T=Math.sin(y),L=P*j+C*T,V=F*j+G*T,C=C*j-P*T,G=G*j-F*T,P=L,F=V),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,v=180-v),p=Pn(Math.sqrt(P*P+C*C+A*A)),g=Pn(Math.sqrt(G*G+un*un)),y=Pa(F,G),b=Math.abs(y)>2e-4?y*ka:0,S=cn?1/(cn<0?-cn:cn):0),r.svg&&(L=n.getAttribute("transform"),r.forceCSS=n.setAttribute("transform","")||!$p(gt(n,Cn)),L&&n.setAttribute("transform",L))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),a=a||r.uncache,r.x=c-((r.xPercent=c&&(!a&&r.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-c)?-50:0)))?n.offsetWidth*r.xPercent/100:0)+o,r.y=u-((r.yPercent=u&&(!a&&r.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-u)?-50:0)))?n.offsetHeight*r.yPercent/100:0)+o,r.z=h+o,r.scaleX=Pn(p),r.scaleY=Pn(g),r.rotation=Pn(f)+i,r.rotationX=Pn(m)+i,r.rotationY=Pn(v)+i,r.skewX=b+i,r.skewY=_+i,r.transformPerspective=S+o,(r.zOrigin=parseFloat(d.split(" ")[2])||!a&&r.zOrigin||0)&&(e[tt]=ce(d)),r.xOffset=r.yOffset=0,r.force3D=pt.force3D,r.renderTransform=r.svg?Uh:Vp?Kp:Gh,r.uncache=0,r},ce=function(n){return(n=n.split(" "))[0]+" "+n[1]},Ke=function(n,a,r){var e=Wn(a);return Pn(parseFloat(a)+parseFloat(pa(n,"x",r+"px",e)))+e},Gh=function(n,a){a.z="0px",a.rotationY=a.rotationX="0deg",a.force3D=0,Kp(n,a)},ha="0deg",ts="0px",ga=") ",Kp=function(n,a){var r=a||this,e=r.xPercent,s=r.yPercent,o=r.x,i=r.y,l=r.z,d=r.rotation,c=r.rotationY,u=r.rotationX,h=r.skewX,p=r.skewY,g=r.scaleX,f=r.scaleY,m=r.transformPerspective,v=r.force3D,b=r.target,_=r.zOrigin,S="",k=v==="auto"&&n&&n!==1||v===!0;if(_&&(u!==ha||c!==ha)){var x=parseFloat(c)*Ua,w=Math.sin(x),y=Math.cos(x),j;x=parseFloat(u)*Ua,j=Math.cos(x),o=Ke(b,o,w*j*-_),i=Ke(b,i,-Math.sin(x)*-_),l=Ke(b,l,y*j*-_+_)}m!==ts&&(S+="perspective("+m+ga),(e||s)&&(S+="translate("+e+"%, "+s+"%) "),(k||o!==ts||i!==ts||l!==ts)&&(S+=l!==ts||k?"translate3d("+o+", "+i+", "+l+") ":"translate("+o+", "+i+ga),d!==ha&&(S+="rotate("+d+ga),c!==ha&&(S+="rotateY("+c+ga),u!==ha&&(S+="rotateX("+u+ga),(h!==ha||p!==ha)&&(S+="skew("+h+", "+p+ga),(g!==1||f!==1)&&(S+="scale("+g+", "+f+ga),b.style[Cn]=S||"translate(0, 0)"},Uh=function(n,a){var r=a||this,e=r.xPercent,s=r.yPercent,o=r.x,i=r.y,l=r.rotation,d=r.skewX,c=r.skewY,u=r.scaleX,h=r.scaleY,p=r.target,g=r.xOrigin,f=r.yOrigin,m=r.xOffset,v=r.yOffset,b=r.forceCSS,_=parseFloat(o),S=parseFloat(i),k,x,w,y,j;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=Ua,d*=Ua,k=Math.cos(l)*u,x=Math.sin(l)*u,w=Math.sin(l-d)*-h,y=Math.cos(l-d)*h,d&&(c*=Ua,j=Math.tan(d-c),j=Math.sqrt(1+j*j),w*=j,y*=j,c&&(j=Math.tan(c),j=Math.sqrt(1+j*j),k*=j,x*=j)),k=Pn(k),x=Pn(x),w=Pn(w),y=Pn(y)):(k=u,y=h,x=w=0),(_&&!~(o+"").indexOf("px")||S&&!~(i+"").indexOf("px"))&&(_=pa(p,"x",o,"px"),S=pa(p,"y",i,"px")),(g||f||m||v)&&(_=Pn(_+g-(g*k+f*w)+m),S=Pn(S+f-(g*x+f*y)+v)),(e||s)&&(j=p.getBBox(),_=Pn(_+e/100*j.width),S=Pn(S+s/100*j.height)),j="matrix("+k+","+x+","+w+","+y+","+_+","+S+")",p.setAttribute("transform",j),b&&(p.style[Cn]=j)},Wh=function(n,a,r,e,s){var o=360,i=On(s),l=parseFloat(s)*(i&&~s.indexOf("rad")?ka:1),d=l-e,c=e+d+"deg",u,h;return i&&(u=s.split("_")[1],u==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-360)),u==="cw"&&d<0?d=(d+o*wi)%o-~~(d/o)*o:u==="ccw"&&d>0&&(d=(d-o*wi)%o-~~(d/o)*o)),n._pt=h=new nt(n._pt,a,r,e,d,jh),h.e=c,h.u="deg",n._props.push(r),h},Mi=function(n,a){for(var r in a)n[r]=a[r];return n},Nh=function(n,a,r){var e=Mi({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,i,l,d,c,u,h,p,g;e.svg?(d=r.getAttribute("transform"),r.setAttribute("transform",""),o[Cn]=a,i=Ms(r,1),Sa(r,Cn),r.setAttribute("transform",d)):(d=getComputedStyle(r)[Cn],o[Cn]=a,i=Ms(r,1),o[Cn]=d);for(l in Yt)d=e[l],c=i[l],d!==c&&s.indexOf(l)<0&&(p=Wn(d),g=Wn(c),u=p!==g?pa(r,l,d,g):parseFloat(d),h=parseFloat(c),n._pt=new nt(n._pt,i,l,u,h-u,wr),n._pt.u=g||0,n._props.push(l));Mi(i,e)};Jn("padding,margin,Width,Radius",function(t,n){var a="Top",r="Right",e="Bottom",s="Left",o=(n<3?[a,r,e,s]:[a+s,a+r,e+r,e+s]).map(function(i){return n<2?t+i:"border"+i+t});pe[n>1?"border"+t:t]=function(i,l,d,c,u){var h,p;if(arguments.length<4)return h=o.map(function(g){return Gt(i,g,d)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(g,f){return p[g]=h[f]=h[f]||h[(f-1)/2|0]}),i.init(l,p,u)}});var Xp={name:"css",register:Sr,targetTest:function(n){return n.style&&n.nodeType},init:function(n,a,r,e,s){var o=this._props,i=n.style,l=r.vars.startAt,d,c,u,h,p,g,f,m,v,b,_,S,k,x,w,y;uo||Sr(),this.styles=this.styles||Np(n),y=this.styles.props,this.tween=r;for(f in a)if(f!=="autoRound"&&(c=a[f],!(rt[f]&&Ap(f,a,r,e,n,s)))){if(p=typeof c,g=pe[f],p==="function"&&(c=c.call(r,e,n,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=js(c)),g)g(this,n,f,c,r)&&(w=1);else if(f.substr(0,2)==="--")d=(getComputedStyle(n).getPropertyValue(f)+"").trim(),c+="",ra.lastIndex=0,ra.test(d)||(m=Wn(d),v=Wn(c)),v?m!==v&&(d=pa(n,f,d,v)+v):m&&(c+=m),this.add(i,"setProperty",d,c,e,s,0,0,f),o.push(f),y.push(f,0,i[f]);else if(p!=="undefined"){if(l&&f in l?(d=typeof l[f]=="function"?l[f].call(r,e,n,s):l[f],On(d)&&~d.indexOf("random(")&&(d=js(d)),Wn(d+"")||d==="auto"||(d+=pt.units[f]||Wn(Gt(n,f))||""),(d+"").charAt(1)==="="&&(d=Gt(n,f))):d=Gt(n,f),h=parseFloat(d),b=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),b&&(c=c.substr(2)),u=parseFloat(c),f in Rt&&(f==="autoAlpha"&&(h===1&&Gt(n,"visibility")==="hidden"&&u&&(h=0),y.push("visibility",0,i.visibility),aa(this,i,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),f!=="scale"&&f!=="transform"&&(f=Rt[f],~f.indexOf(",")&&(f=f.split(",")[0]))),_=f in Yt,_){if(this.styles.save(f),p==="string"&&c.substring(0,6)==="var(--"&&(c=gt(n,c.substring(4,c.indexOf(")"))),u=parseFloat(c)),S||(k=n._gsap,k.renderTransform&&!a.parseTransform||Ms(n,a.parseTransform),x=a.smoothOrigin!==!1&&k.smooth,S=this._pt=new nt(this._pt,i,Cn,0,1,k.renderTransform,k,0,-1),S.dep=1),f==="scale")this._pt=new nt(this._pt,k,"scaleY",k.scaleY,(b?Ba(k.scaleY,b+u):u)-k.scaleY||0,wr),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){y.push(tt,0,i[tt]),c=Dh(c),k.svg?jr(n,c,0,x,0,this):(v=parseFloat(c.split(" ")[2])||0,v!==k.zOrigin&&aa(this,k,"zOrigin",k.zOrigin,v),aa(this,i,f,ce(d),ce(c)));continue}else if(f==="svgOrigin"){jr(n,c,1,x,0,this);continue}else if(f in Yp){Wh(this,k,f,h,b?Ba(h,b+c):c);continue}else if(f==="smoothOrigin"){aa(this,k,"smooth",k.smooth,c);continue}else if(f==="force3D"){k[f]=c;continue}else if(f==="transform"){Nh(this,c,n);continue}}else f in i||(f=Xa(f)||f);if(_||(u||u===0)&&(h||h===0)&&!Sh.test(c)&&f in i)m=(d+"").substr((h+"").length),u||(u=0),v=Wn(c)||(f in pt.units?pt.units[f]:m),m!==v&&(h=pa(n,f,d,v)),this._pt=new nt(this._pt,_?k:i,f,h,(b?Ba(h,b+u):u)-h,!_&&(v==="px"||f==="zIndex")&&a.autoRound!==!1?Th:wr),this._pt.u=v||0,m!==v&&v!=="%"&&(this._pt.b=d,this._pt.r=Ch);else if(f in i)Lh.call(this,n,f,d,b?b+c:c);else if(f in n)this.add(n,f,d||n[f],b?b+c:c,e,s);else if(f!=="parseTransform"){to(f,c);continue}_||(f in i?y.push(f,0,i[f]):typeof n[f]=="function"?y.push(f,2,n[f]()):y.push(f,1,d||n[f])),o.push(f)}}w&&Dp(this)},render:function(n,a){if(a.tween._time||!fo())for(var r=a._pt;r;)r.r(n,r.d),r=r._next;else a.styles.revert()},get:Gt,aliases:Rt,getSetter:function(n,a,r){var e=Rt[a];return e&&e.indexOf(",")<0&&(a=e),a in Yt&&a!==tt&&(n._gsap.x||Gt(n,"x"))?r&&xi===r?a==="scale"?Rh:Eh:(xi=r||{})&&(a==="scale"?Ah:Ih):n.style&&!Qr(n.style[a])?Ph:~a.indexOf("-")?Mh:po(n,a)},core:{_removeProperty:Sa,_getMatrix:go}};at.utils.checkPrefix=Xa;at.core.getStyleSaver=Np;(function(t,n,a,r){var e=Jn(t+","+n+","+a,function(s){Yt[s]=1});Jn(n,function(s){pt.units[s]="deg",Yp[s]=1}),Rt[e[13]]=t+","+n,Jn(r,function(s){var o=s.split(":");Rt[o[1]]=e[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){pt.units[t]="px"});at.registerPlugin(Xp);var Zp=at.registerPlugin(Xp)||at;Zp.core.Tween;const Vh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
\r
    <article class="mt-16 px-4 sm:px-10 lg:px-20 max-w-5xl mx-auto text-white/90">\r
        <h2>🛒👩&zwj;🍳 <strong>&ldquo;Recipe Rush: Online Grocery Ordering Game&rdquo;</strong></h2>\r
        <hr />\r
        <h3>🎯 <strong>Game Objective</strong></h3>\r
        <p>You play as a home chef who must:</p>\r
        <ul>\r
            <li>\r
                <p>Select a recipe,</p>\r
            </li>\r
            <li>\r
                <p>Order the correct grocery items from an online grocery store,</p>\r
            </li>\r
            <li>\r
                <p>Stay within your budget,</p>\r
            </li>\r
            <li>\r
                <p>And complete the recipe before time runs out!</p>\r
            </li>\r
        </ul>\r
        <p>It's a fun <strong>text-based simulation game</strong> teaching decision-making, budgeting, and basic\r
            input/output in C++ &mdash; great for beginners.</p>\r
\r
        <hr />\r
        <h3>🧱 <strong>Features</strong></h3>\r
        <ul>\r
            <li>\r
                <p>Multiple recipes (e.g., Spaghetti, Chicken Curry, Vegetable Salad)</p>\r
            </li>\r
            <li>\r
                <p>Each recipe has a list of ingredients.</p>\r
            </li>\r
            <li>\r
                <p>You&rsquo;re given a budget and time.</p>\r
            </li>\r
            <li>\r
                <p>You can browse a grocery store catalog.</p>\r
            </li>\r
            <li>\r
                <p>Buy items wisely. Buying wrong items or overspending results in failure.</p>\r
            </li>\r
            <li>\r
                <p>Win if you collect all items for the recipe on time and under budget!</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h3>🧮 <strong>C++ Concepts Used</strong></h3>\r
        <ul>\r
            <li>\r
                <p>Structs</p>\r
            </li>\r
            <li>\r
                <p>Vectors</p>\r
            </li>\r
            <li>\r
                <p>Loops</p>\r
            </li>\r
            <li>\r
                <p>Conditionals</p>\r
            </li>\r
            <li>\r
                <p>Functions</p>\r
            </li>\r
            <li>\r
                <p>Basic randomization</p>\r
            </li>\r
            <li>\r
                <p>Simple gameplay mechanics</p>\r
            </li>\r
        </ul>\r
\r
        <hr />\r
        <h2>🧾 <strong>Sample Code: <code>recipe_rush.cpp</code></strong></h2>\r
        <pre><code class="language-cpp">#include &lt;iostream&gt;\r
#include &lt;vector&gt;\r
#include &lt;string&gt;\r
#include &lt;iomanip&gt;\r
using namespace std;\r
\r
struct Item {\r
    string name;\r
    double price;\r
};\r
\r
struct Recipe {\r
    string name;\r
    vector&lt;string&gt; ingredients;\r
    double maxBudget;\r
};\r
\r
// Store items\r
vector&lt;Item&gt; store = {\r
    {"Tomato", 1.5}, {"Onion", 1.0}, {"Chicken", 5.0}, {"Salt", 0.5},\r
    {"Pepper", 0.7}, {"Spaghetti", 2.5}, {"Garlic", 1.2}, {"Oil", 2.0},\r
    {"Rice", 3.0}, {"Carrot", 1.3}, {"Lettuce", 2.2}, {"Milk", 1.8}\r
};\r
\r
// Available recipes\r
vector&lt;Recipe&gt; recipes = {\r
    {"Spaghetti", {"Spaghetti", "Tomato", "Onion", "Garlic", "Salt"}, 10.0},\r
    {"Chicken Curry", {"Chicken", "Onion", "Garlic", "Salt", "Pepper", "Oil"}, 12.0},\r
    {"Veggie Salad", {"Lettuce", "Tomato", "Carrot", "Salt", "Oil"}, 8.0}\r
};\r
\r
void displayStore() {\r
    cout &lt;&lt; "\\n🛒 Grocery Store Catalog:\\n";\r
    cout &lt;&lt; setw(15) &lt;&lt; left &lt;&lt; "Item" &lt;&lt; "Price\\n";\r
    cout &lt;&lt; "-------------------------\\n";\r
    for (size_t i = 0; i &lt; store.size(); ++i) {\r
        cout &lt;&lt; i + 1 &lt;&lt; ". " &lt;&lt; setw(12) &lt;&lt; left &lt;&lt; store[i].name \r
             &lt;&lt; "$" &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; store[i].price &lt;&lt; endl;\r
    }\r
}\r
\r
void displayRecipe(const Recipe&amp; recipe) {\r
    cout &lt;&lt; "\\n📜 Recipe Selected: " &lt;&lt; recipe.name &lt;&lt; endl;\r
    cout &lt;&lt; "Ingredients needed:\\n";\r
    for (const string&amp; ing : recipe.ingredients)\r
        cout &lt;&lt; "- " &lt;&lt; ing &lt;&lt; endl;\r
    cout &lt;&lt; "💵 Budget: $" &lt;&lt; recipe.maxBudget &lt;&lt; endl;\r
}\r
\r
bool allIngredientsCollected(const vector&lt;string&gt;&amp; needed, const vector&lt;string&gt;&amp; bought) {\r
    for (const string&amp; item : needed) {\r
        if (find(bought.begin(), bought.end(), item) == bought.end())\r
            return false;\r
    }\r
    return true;\r
}\r
\r
int main() {\r
    cout &lt;&lt; "🎮 Welcome to 'Recipe Rush: Online Grocery Game'!\\n";\r
\r
    // Step 1: Choose Recipe\r
    cout &lt;&lt; "\\nChoose a recipe:\\n";\r
    for (size_t i = 0; i &lt; recipes.size(); ++i) {\r
        cout &lt;&lt; i + 1 &lt;&lt; ". " &lt;&lt; recipes[i].name &lt;&lt; endl;\r
    }\r
    int choice;\r
    cin &gt;&gt; choice;\r
    if (choice &lt; 1 || choice &gt; recipes.size()) {\r
        cout &lt;&lt; "❌ Invalid choice. Exiting...\\n";\r
        return 0;\r
    }\r
\r
    Recipe selected = recipes[choice - 1];\r
    vector&lt;string&gt; cart;\r
    double total = 0.0;\r
\r
    displayRecipe(selected);\r
\r
    int turns = 7; // limited shopping attempts\r
    while (turns-- &gt; 0 &amp;&amp; !allIngredientsCollected(selected.ingredients, cart)) {\r
        displayStore();\r
        cout &lt;&lt; "\\n🧺 Your current cart: ";\r
        for (const string&amp; item : cart) cout &lt;&lt; item &lt;&lt; ", ";\r
        cout &lt;&lt; "\\n💸 Total spent: $" &lt;&lt; total &lt;&lt; " | 🕒 Turns left: " &lt;&lt; turns + 1 &lt;&lt; endl;\r
\r
        cout &lt;&lt; "\\nEnter item number to add to cart (0 to skip): ";\r
        int itemChoice;\r
        cin &gt;&gt; itemChoice;\r
\r
        if (itemChoice == 0) continue;\r
        if (itemChoice &lt; 1 || itemChoice &gt; store.size()) {\r
            cout &lt;&lt; "❌ Invalid item!\\n";\r
            continue;\r
        }\r
\r
        Item selectedItem = store[itemChoice - 1];\r
\r
        // Check budget\r
        if (total + selectedItem.price &gt; selected.maxBudget) {\r
            cout &lt;&lt; "⚠️ You can't afford this item. Try something cheaper.\\n";\r
            continue;\r
        }\r
\r
        // Add item\r
        cart.push_back(selectedItem.name);\r
        total += selectedItem.price;\r
        cout &lt;&lt; "✅ " &lt;&lt; selectedItem.name &lt;&lt; " added to cart!\\n";\r
    }\r
\r
    // Game result\r
    if (allIngredientsCollected(selected.ingredients, cart)) {\r
        cout &lt;&lt; "\\n🎉 Congratulations! You successfully ordered all items for " &lt;&lt; selected.name &lt;&lt; " within budget.\\n";\r
    } else {\r
        cout &lt;&lt; "\\n❌ You failed to collect all ingredients. Better luck next time!\\n";\r
    }\r
\r
    return 0;\r
}\r
</code></pre>\r
\r
        <hr />\r
        <h2>🧠 <strong>How the Game Works</strong></h2>\r
        <h3>👨&zwj;🍳 1. Recipe Selection</h3>\r
        <p>The player chooses from 3 recipes, each with specific ingredients and a budget.</p>\r
        <h3>🛍️ 2. Grocery Store Catalog</h3>\r
        <p>A list of available groceries with prices is shown. Items are selected via number input.</p>\r
        <h3>🧮 3. Budget Tracking</h3>\r
        <p>The player has to shop carefully. Exceeding the budget prevents item purchase.</p>\r
        <h3>⏲️ 4. Time Pressure (Turns)</h3>\r
        <p>The player has limited turns to complete shopping (simulating delivery cut-off).</p>\r
        <h3>🏆 5. Win/Lose</h3>\r
        <p>If all recipe ingredients are collected within budget and turns, the player wins!</p>\r
\r
\r
        <hr />\r
        <h2>🔧 <strong>Extensions You Can Add</strong></h2>\r
        <ul>\r
            <li>\r
                <p>🧠 AI Suggestions: Suggest best combo under budget.</p>\r
            </li>\r
            <li>\r
                <p>⏳ Timer-Based: Add countdown timer using <code>&lt;chrono&gt;</code>.</p>\r
            </li>\r
            <li>\r
                <p>🛒 Save orders to a file (for stats/history).</p>\r
            </li>\r
            <li>\r
                <p>🎨 SFML GUI: Build graphical UI for store/recipe/cart.</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2>✅ Requirements to Compile</h2>\r
        <p>Any standard C++ compiler (g++ recommended):</p>\r
        <pre><code class="language-bash">g++ recipe_rush.cpp -o recipe_rush\r
./recipe_rush\r
</code></pre>\r
    </article>\r
\r
\r
</body>\r
\r
</html>`,Hh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h2 data-start="201" data-end="233">🍽️ 1. <strong data-start="211" data-end="233">Real-Life Examples</strong>\r
        </h2>\r
        <h3 data-start="235" data-end="281">🧑&zwj;🍳 Scenario 1: Last-Minute Dinner Party</h3>\r
        <p data-start="282" data-end="480">You&rsquo;re hosting guests tonight and plan to cook <strong data-start="329"\r
                data-end="351">Spaghetti Marinara</strong>. You have 20 minutes to order groceries before the cutoff for\r
            <strong data-start="414" data-end="435">same-day delivery</strong>. If you miss an ingredient, your dish\r
            fails!</p>\r
        <blockquote data-start="482" data-end="543">\r
            <p data-start="484" data-end="543">Real-world apps: Instacart, Amazon Fresh, Foodpanda Grocery</p>\r
        </blockquote>\r
        <hr data-start="545" data-end="548" />\r
        <h3 data-start="550" data-end="593">🥗 Scenario 2: Health-Conscious Choices</h3>\r
        <p data-start="594" data-end="761">You're on a <strong data-start="606" data-end="623">low-carb diet</strong>.\r
            You want to modify the &ldquo;Chicken Curry&rdquo; recipe &mdash; replacing rice with lettuce wraps. Can you\r
            find healthy alternatives within your budget?</p>\r
        <blockquote data-start="763" data-end="865">\r
            <p data-start="765" data-end="865">Real-world skill: Customizing meals with dietary restrictions &mdash;\r
                like gluten-free or vegan groceries.</p>\r
        </blockquote>\r
        <hr data-start="867" data-end="870" />\r
        <h3 data-start="872" data-end="910">📦 Scenario 3: Supply Chain Crisis</h3>\r
        <p data-start="911" data-end="1069">Certain items (e.g., tomatoes) are <strong data-start="946"\r
                data-end="962">out of stock</strong>. How will you substitute them? Can you <strong data-start="1002"\r
                data-end="1029">solve the recipe puzzle</strong> creatively using available ingredients?</p>\r
        <blockquote data-start="1071" data-end="1165">\r
            <p data-start="1073" data-end="1165">Real-world example: The 2022 tomato shortage in the UK due to climate +\r
                supply chain issues.</p>\r
        </blockquote>\r
        <hr data-start="1167" data-end="1170" />\r
        <h2 data-start="1172" data-end="1217">🎉 2. <strong data-start="1181" data-end="1217">Fun Facts to Include in\r
                the Game</strong></h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="1219" data-end="1754">\r
                    <thead data-start="1219" data-end="1244">\r
                        <tr data-start="1219" data-end="1244">\r
                            <th data-start="1219" data-end="1229" data-col-size="sm">🧠 Fact</th>\r
                            <th data-start="1229" data-end="1244" data-col-size="lg">Description</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="1270" data-end="1754">\r
                        <tr data-start="1270" data-end="1359">\r
                            <td data-start="1270" data-end="1284" data-col-size="sm">🥑 Avocados</td>\r
                            <td data-start="1284" data-end="1359" data-col-size="lg">Avocados take <strong\r
                                    data-start="1300" data-end="1313">4&ndash;6 years</strong> to grow. Include as a\r
                                rare, expensive item.</td>\r
                        </tr>\r
                        <tr data-start="1360" data-end="1480">\r
                            <td data-start="1360" data-end="1371" data-col-size="sm">🍞 Bread</td>\r
                            <td data-start="1371" data-end="1480" data-col-size="lg">In ancient Egypt, bread was used as\r
                                <strong data-start="1409" data-end="1421">currency</strong>. Add a level where you "buy"\r
                                with items instead of cash.</td>\r
                        </tr>\r
                        <tr data-start="1481" data-end="1571">\r
                            <td data-start="1481" data-end="1501" data-col-size="sm">🌐 Online Grocery</td>\r
                            <td data-start="1501" data-end="1571" data-col-size="lg">The global market is worth <strong\r
                                    data-start="1530" data-end="1551">over $800 billion</strong> and growing fast!</td>\r
                        </tr>\r
                        <tr data-start="1572" data-end="1645">\r
                            <td data-start="1572" data-end="1582" data-col-size="sm">🧂 Salt</td>\r
                            <td data-start="1582" data-end="1645" data-col-size="lg">Roman soldiers were paid in salt\r
                                &mdash; hence the word &ldquo;salary&rdquo;!</td>\r
                        </tr>\r
                        <tr data-start="1646" data-end="1754">\r
                            <td data-start="1646" data-end="1662" data-col-size="sm">📦 Algorithms</td>\r
                            <td data-start="1662" data-end="1754" data-col-size="lg">Apps like Amazon use <strong\r
                                    data-start="1685" data-end="1704">dynamic pricing</strong> &amp; <strong\r
                                    data-start="1707" data-end="1723">inventory AI</strong> &mdash; could be added in\r
                                hard mode!</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="1756" data-end="1759" />\r
        <h2 data-start="1761" data-end="1808">🧩 3. <strong data-start="1770" data-end="1808">Problem-Solving Skills in\r
                Gameplay</strong></h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="1810" data-end="2302">\r
                    <thead data-start="1810" data-end="1841">\r
                        <tr data-start="1810" data-end="1841">\r
                            <th data-start="1810" data-end="1818" data-col-size="sm">Skill</th>\r
                            <th data-start="1818" data-end="1841" data-col-size="md">Gameplay Connection</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="1874" data-end="2302">\r
                        <tr data-start="1874" data-end="1938">\r
                            <td data-start="1874" data-end="1890" data-col-size="sm"><strong data-start="1876"\r
                                    data-end="1889">Budgeting</strong></td>\r
                            <td data-start="1890" data-end="1938" data-col-size="md">Choose affordable items, avoid\r
                                overspending.</td>\r
                        </tr>\r
                        <tr data-start="1939" data-end="2040">\r
                            <td data-start="1939" data-end="1961" data-col-size="sm"><strong data-start="1941"\r
                                    data-end="1960">Time Management</strong></td>\r
                            <td data-start="1961" data-end="2040" data-col-size="md">Limited turns (or time) create\r
                                urgency like real grocery delivery cut-offs.</td>\r
                        </tr>\r
                        <tr data-start="2041" data-end="2131">\r
                            <td data-start="2041" data-end="2063" data-col-size="sm"><strong data-start="2043"\r
                                    data-end="2062">Decision Making</strong></td>\r
                            <td data-start="2063" data-end="2131" data-col-size="md">Should I buy that expensive garlic\r
                                or find a cheaper substitute?</td>\r
                        </tr>\r
                        <tr data-start="2132" data-end="2225">\r
                            <td data-start="2132" data-end="2157" data-col-size="sm"><strong data-start="2134"\r
                                    data-end="2156">Inventory Planning</strong></td>\r
                            <td data-start="2157" data-end="2225" data-col-size="md">What if I already have salt at\r
                                home? Don&rsquo;t waste money rebuying.</td>\r
                        </tr>\r
                        <tr data-start="2226" data-end="2302">\r
                            <td data-start="2226" data-end="2254" data-col-size="sm"><strong data-start="2228"\r
                                    data-end="2253">Substitution Thinking</strong></td>\r
                            <td data-start="2254" data-end="2302" data-col-size="md">No tomatoes? Try bell peppers or\r
                                tomato paste.</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="2304" data-end="2307" />\r
        <h2 data-start="2309" data-end="2359">🚀 4. <strong data-start="2318" data-end="2359">Further Enhancements\r
                (Advanced Ideas)</strong></h2>\r
        <h3 data-start="2361" data-end="2399">🎨 a. <strong data-start="2371" data-end="2397">Graphics\r
                (SFML/SDL/Qt)</strong></h3>\r
        <p data-start="2400" data-end="2427">Turn it into a visual game:</p>\r
        <ul data-start="2428" data-end="2541">\r
            <li data-start="2428" data-end="2452">\r
                <p data-start="2430" data-end="2452">Animated shopping cart</p>\r
            </li>\r
            <li data-start="2453" data-end="2482">\r
                <p data-start="2455" data-end="2482">Drag-and-drop grocery items</p>\r
            </li>\r
            <li data-start="2483" data-end="2507">\r
                <p data-start="2485" data-end="2507">Visual countdown timer</p>\r
            </li>\r
            <li data-start="2508" data-end="2541">\r
                <p data-start="2510" data-end="2541">Tabs: [Store], [Cart], [Recipe]</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2543" data-end="2546" />\r
        <h3 data-start="2548" data-end="2586">📱 b. <strong data-start="2558" data-end="2586">User Profiles +\r
                Progress</strong></h3>\r
        <ul data-start="2587" data-end="2702">\r
            <li data-start="2587" data-end="2616">\r
                <p data-start="2589" data-end="2616">Save user&rsquo;s grocery history</p>\r
            </li>\r
            <li data-start="2617" data-end="2640">\r
                <p data-start="2619" data-end="2640">Show favorite recipes</p>\r
            </li>\r
            <li data-start="2641" data-end="2702">\r
                <p data-start="2643" data-end="2702">Track budget habits (good for teaching financial literacy!)</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2704" data-end="2707" />\r
        <h3 data-start="2709" data-end="2749">🎲 c. <strong data-start="2719" data-end="2749">Random Events /\r
                Challenges</strong></h3>\r
        <ul data-start="2750" data-end="2895">\r
            <li data-start="2750" data-end="2789">\r
                <p data-start="2752" data-end="2789">🌀 &ldquo;Power Outage&rdquo;: You lose one turn!</p>\r
            </li>\r
            <li data-start="2790" data-end="2840">\r
                <p data-start="2792" data-end="2840">📉 &ldquo;Price Hike&rdquo;: All meat is 50% more expensive!</p>\r
            </li>\r
            <li data-start="2841" data-end="2895">\r
                <p data-start="2843" data-end="2895">🌿 &ldquo;Vegan Week&rdquo;: Only plant-based recipes available!\r
                </p>\r
            </li>\r
        </ul>\r
        <hr data-start="2897" data-end="2900" />\r
        <h3 data-start="2902" data-end="2932">📚 d. <strong data-start="2912" data-end="2932">Educational Mode</strong>\r
        </h3>\r
        <ul data-start="2933" data-end="3129">\r
            <li data-start="2933" data-end="3037">\r
                <p data-start="2935" data-end="3037">Add facts after each ingredient:<br data-start="2967"\r
                        data-end="2970" /> <em data-start="2972" data-end="3037">"Garlic: boosts immunity, used in\r
                        cooking for over 5000 years!"</em></p>\r
            </li>\r
            <li data-start="3039" data-end="3129">\r
                <p data-start="3041" data-end="3051">Quiz mode:</p>\r
                <blockquote data-start="3054" data-end="3129">\r
                    <p data-start="3056" data-end="3129">&ldquo;Which of these are high in fiber?&rdquo;<br\r
                            data-start="3091" data-end="3094" /> [ ] Rice [✔] Carrot [✔] Lettuce</p>\r
                </blockquote>\r
            </li>\r
        </ul>\r
        <hr data-start="3131" data-end="3134" />\r
        <h3 data-start="3136" data-end="3176">💬 e. <strong data-start="3146" data-end="3176">Multilingual or Voice\r
                Mode</strong></h3>\r
        <ul data-start="3177" data-end="3262">\r
            <li data-start="3177" data-end="3206">\r
                <p data-start="3179" data-end="3206">Urdu/Arabic/Hindi interface</p>\r
            </li>\r
            <li data-start="3207" data-end="3237">\r
                <p data-start="3209" data-end="3237">Text-to-speech for groceries</p>\r
            </li>\r
            <li data-start="3238" data-end="3262">\r
                <p data-start="3240" data-end="3262">Great for ESL learners</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3264" data-end="3267" />\r
        <h3 data-start="3269" data-end="3306">🌐 f. <strong data-start="3279" data-end="3306">APIs for Real-Time\r
                Data</strong></h3>\r
        <ul data-start="3307" data-end="3479">\r
            <li data-start="3307" data-end="3479">\r
                <p data-start="3309" data-end="3479">Use <a class="cursor-pointer" target="_new" rel="noopener"\r
                        data-start="3313" data-end="3364">Spoonacular API</a> or <a class="cursor-pointer" target="_new"\r
                        rel="noopener" data-start="3368" data-end="3425">OpenFoodFacts API</a> to fetch <strong\r
                        data-start="3435" data-end="3478">real grocery items, prices, and recipes</strong>.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3481" data-end="3484" />\r
        <h3 data-start="3486" data-end="3512">💡 g. <strong data-start="3496" data-end="3512">Gamification</strong></h3>\r
        <ul data-start="3513" data-end="3706">\r
            <li data-start="3513" data-end="3546">\r
                <p data-start="3515" data-end="3546">XP system for completed recipes</p>\r
            </li>\r
            <li data-start="3547" data-end="3598">\r
                <p data-start="3549" data-end="3598">Daily challenges: &ldquo;Make a vegan dinner under $10&rdquo;</p>\r
            </li>\r
            <li data-start="3599" data-end="3706">\r
                <p data-start="3601" data-end="3621">Unlock achievements:</p>\r
                <ul data-start="3624" data-end="3706">\r
                    <li data-start="3624" data-end="3662">\r
                        <p data-start="3626" data-end="3662">&ldquo;Budget Ninja&rdquo; &ndash; win with $0.01 left</p>\r
                    </li>\r
                    <li data-start="3665" data-end="3706">\r
                        <p data-start="3667" data-end="3706">&ldquo;Speed Shopper&rdquo; &ndash; complete in &lt; 4\r
                            turns</p>\r
                    </li>\r
                </ul>\r
            </li>\r
        </ul>\r
    </article>\r
</body>\r
\r
</html>`,qh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <p data-start="0" data-end="162">Let&rsquo;s add a <strong data-start="19" data-end="53">Graphical User\r
                Interface (GUI)</strong> to your <strong data-start="62" data-end="109">&ldquo;Recipe Rush: Online\r
                Grocery Ordering Game&rdquo;</strong> using <strong data-start="116" data-end="161">SFML (Simple and\r
                Fast Multimedia Library)</strong>.</p>\r
        <hr data-start="164" data-end="167" />\r
        <h2 data-start="169" data-end="196">🎮 Final Result Preview:</h2>\r
        <p data-start="197" data-end="233">With SFML, your game will look like:</p>\r
        <ul data-start="234" data-end="460">\r
            <li data-start="234" data-end="270">\r
                <p data-start="236" data-end="270">A window showing recipe selection.</p>\r
            </li>\r
            <li data-start="271" data-end="328">\r
                <p data-start="273" data-end="328">Grocery items displayed with names &amp; prices as buttons.</p>\r
            </li>\r
            <li data-start="329" data-end="378">\r
                <p data-start="331" data-end="378">A side panel with your current cart and budget.</p>\r
            </li>\r
            <li data-start="379" data-end="412">\r
                <p data-start="381" data-end="412">Clickable buttons to add items.</p>\r
            </li>\r
            <li data-start="413" data-end="460">\r
                <p data-start="415" data-end="460">Messages like &ldquo;✅ Added!&rdquo; or &ldquo;⚠️ Over budget!&rdquo;\r
                </p>\r
            </li>\r
        </ul>\r
        <hr data-start="462" data-end="465" />\r
        <h2 data-start="467" data-end="486">🧰 Tools &amp; Setup</h2>\r
        <h3 data-start="488" data-end="504">🔧 You need:</h3>\r
        <ul data-start="505" data-end="607">\r
            <li data-start="505" data-end="533">\r
                <p data-start="507" data-end="533">C++ Compiler (e.g., <code data-start="527" data-end="532">g++</code>)\r
                </p>\r
            </li>\r
            <li data-start="534" data-end="607">\r
                <p data-start="536" data-end="607">SFML installed (<a class="cursor-pointer" target="_new"\r
                        rel="noopener" data-start="552" data-end="606">SFML Download</a>)</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="609" data-end="644">📦 If you use MinGW on Windows:</h3>\r
        <ol data-start="645" data-end="775">\r
            <li data-start="645" data-end="682">\r
                <p data-start="648" data-end="682">Download <strong data-start="657" data-end="682">SFML for MinGW\r
                        64-bit</strong></p>\r
            </li>\r
            <li data-start="683" data-end="758">\r
                <p data-start="686" data-end="758">Set up include/lib paths in your compiler (like Code::Blocks or VS\r
                    Code)</p>\r
            </li>\r
            <li data-start="759" data-end="775">\r
                <p data-start="762" data-end="775">Compile with:</p>\r
            </li>\r
        </ol>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                bash</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-bash">g++ main.cpp -o recipe_gui -lsfml-graphics -lsfml-window -lsfml-system </code>\r
            </div>\r
        </div>\r
        <hr data-start="860" data-end="863" />\r
        <h2 data-start="865" data-end="918">🧾 GUI Version: <code data-start="884" data-end="900">recipe_gui.cpp</code>\r
            (Simplified Core)</h2>\r
        <p data-start="920" data-end="985">Here's the <strong data-start="931" data-end="973">simplified version with\r
                GUI using SFML</strong>. It covers:</p>\r
        <ul data-start="986" data-end="1065">\r
            <li data-start="986" data-end="1002">\r
                <p data-start="988" data-end="1002">Recipe display</p>\r
            </li>\r
            <li data-start="1003" data-end="1039">\r
                <p data-start="1005" data-end="1039">Grocery item selection via buttons</p>\r
            </li>\r
            <li data-start="1040" data-end="1065">\r
                <p data-start="1042" data-end="1065">Cart and budget display</p>\r
            </li>\r
        </ul>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;SFML/Graphics.hpp&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;vector&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;string&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;sstream&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;iostream&gt;</span> <span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> sf; <span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> std; <span class="hljs-keyword">struct</span> <span class="hljs-title class_">Item</span> { string name; <span class="hljs-type">float</span> price; }; vector&lt;Item&gt; store = { {<span class="hljs-string">"Tomato"</span>, <span class="hljs-number">1.5</span>}, {<span class="hljs-string">"Onion"</span>, <span class="hljs-number">1.0</span>}, {<span class="hljs-string">"Chicken"</span>, <span class="hljs-number">5.0</span>}, {<span class="hljs-string">"Garlic"</span>, <span class="hljs-number">1.2</span>}, {<span class="hljs-string">"Oil"</span>, <span class="hljs-number">2.0</span>}, {<span class="hljs-string">"Spaghetti"</span>, <span class="hljs-number">2.5</span>} }; vector&lt;string&gt; recipeIngredients = {<span class="hljs-string">"Spaghetti"</span>, <span class="hljs-string">"Tomato"</span>, <span class="hljs-string">"Onion"</span>, <span class="hljs-string">"Garlic"</span>, <span class="hljs-string">"Oil"</span>}; <span class="hljs-type">float</span> budget = <span class="hljs-number">10.0</span>; vector&lt;string&gt; cart; <span class="hljs-type">float</span> total = <span class="hljs-number">0.0</span>; <span class="hljs-function"><span class="hljs-type">bool</span></span> <span class="hljs-title">allIngredientsCollected</span><span class="hljs-params">()</span> { <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span>&amp; ing : recipeIngredients) { <span class="hljs-keyword">if</span> (<span class="hljs-built_in">find</span>(cart.<span class="hljs-built_in">begin</span>(), cart.<span class="hljs-built_in">end</span>(), ing) == cart.<span class="hljs-built_in">end</span>()) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>; } <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>; } <span class="hljs-function">string <span class="hljs-title">floatToStr</span></span><span class="hljs-params">(<span class="hljs-type">float</span></span> val) { stringstream ss; ss &lt;&lt; <span class="hljs-string">"$"</span> &lt;&lt; fixed &lt;&lt; <span class="hljs-built_in">setprecision</span>(<span class="hljs-number">2</span>) &lt;&lt; val; <span class="hljs-keyword">return</span> ss.<span class="hljs-built_in">str</span>(); } <span class="hljs-function"><span class="hljs-type">int</span></span> <span class="hljs-title">main</span><span class="hljs-params">()</span> { <span class="hljs-function">RenderWindow <span class="hljs-title">window</span></span><span class="hljs-params">(VideoMode(<span class="hljs-number">800</span></span>, <span class="hljs-number">600</span>), <span class="hljs-string">"Recipe Rush - GUI"</span>); Font font; font.<span class="hljs-built_in">loadFromFile</span>(<span class="hljs-string">"arial.ttf"</span>); <span class="hljs-comment">// Make sure arial.ttf is in the same directory</span> <span class="hljs-function">Text <span class="hljs-title">title</span></span><span class="hljs-params">(<span class="hljs-string">"Recipe: Spaghetti"</span></span>, font, <span class="hljs-number">24</span>); title.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">20</span>, <span class="hljs-number">20</span>); <span class="hljs-function">Text <span class="hljs-title">budgetText</span></span><span class="hljs-params">(<span class="hljs-string">"Budget: "</span></span> + floatToStr(budget), font, <span class="hljs-number">20</span>); budgetText.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">20</span>, <span class="hljs-number">60</span>); vector&lt;RectangleShape&gt; buttons; vector&lt;Text&gt; labels; <span class="hljs-keyword">for</span> (<span class="hljs-type">size_t</span> i = <span class="hljs-number">0</span>; i &lt; store.<span class="hljs-built_in">size</span>(); i++) { <span class="hljs-function">RectangleShape <span class="hljs-title">btn</span></span><span class="hljs-params">(Vector2f(<span class="hljs-number">200</span></span>, <span class="hljs-number">40</span>)); btn.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">50</span>, <span class="hljs-number">120</span> + i * <span class="hljs-number">50</span>); btn.<span class="hljs-built_in">setFillColor</span>(<span class="hljs-built_in">Color</span>(<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">255</span>)); buttons.<span class="hljs-built_in">push_back</span>(btn); <span class="hljs-function">Text <span class="hljs-title">label</span></span><span class="hljs-params">(store[i].name + <span class="hljs-string">" - "</span></span> + floatToStr(store[i].price), font, <span class="hljs-number">18</span>); label.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">60</span>, <span class="hljs-number">125</span> + i * <span class="hljs-number">50</span>); labels.<span class="hljs-built_in">push_back</span>(label); } <span class="hljs-function">Text <span class="hljs-title">cartText</span></span><span class="hljs-params">(<span class="hljs-string">""</span></span>, font, <span class="hljs-number">18</span>); cartText.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">300</span>, <span class="hljs-number">120</span>); <span class="hljs-function">Text <span class="hljs-title">resultText</span></span><span class="hljs-params">(<span class="hljs-string">""</span></span>, font, <span class="hljs-number">20</span>); resultText.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">300</span>, <span class="hljs-number">400</span>); <span class="hljs-keyword">while</span> (window.<span class="hljs-built_in">isOpen</span>()) { Event event; <span class="hljs-keyword">while</span> (window.<span class="hljs-built_in">pollEvent</span>(event)) { <span class="hljs-keyword">if</span> (event.type == Event::Closed) window.<span class="hljs-built_in">close</span>(); <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (event.type == Event::MouseButtonPressed) { <span class="hljs-keyword">for</span> (<span class="hljs-type">size_t</span> i = <span class="hljs-number">0</span>; i &lt; buttons.<span class="hljs-built_in">size</span>(); ++i) { <span class="hljs-keyword">if</span> (buttons[i].<span class="hljs-built_in">getGlobalBounds</span>().<span class="hljs-built_in">contains</span>(event.mouseButton.x, event.mouseButton.y)) { <span class="hljs-comment">// Add item</span> Item it = store[i]; <span class="hljs-keyword">if</span> (total + it.price &lt;= budget &amp;&amp; <span class="hljs-built_in">find</span>(cart.<span class="hljs-built_in">begin</span>(), cart.<span class="hljs-built_in">end</span>(), it.name) == cart.<span class="hljs-built_in">end</span>()) { cart.<span class="hljs-built_in">push_back</span>(it.name); total += it.price; resultText.<span class="hljs-built_in">setString</span>(<span class="hljs-string">"✅ Added "</span> + it.name); } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (total + it.price &gt; budget) { resultText.<span class="hljs-built_in">setString</span>(<span class="hljs-string">"❌ Over budget!"</span>); } <span class="hljs-keyword">else</span> { resultText.<span class="hljs-built_in">setString</span>(<span class="hljs-string">"⚠️ Already in cart."</span>); } } } } } <span class="hljs-comment">// Update cart display</span> stringstream ss; ss &lt;&lt; <span class="hljs-string">"🧺 Cart:\\n"</span>; <span class="hljs-keyword">for</span> (string&amp; s : cart) ss &lt;&lt; <span class="hljs-string">"- "</span> &lt;&lt; s &lt;&lt; <span class="hljs-string">"\\n"</span>; ss &lt;&lt; <span class="hljs-string">"\\nSpent: "</span> &lt;&lt; <span class="hljs-built_in">floatToStr</span>(total); cartText.<span class="hljs-built_in">setString</span>(ss.<span class="hljs-built_in">str</span>()); <span class="hljs-keyword">if</span> (<span class="hljs-built_in">allIngredientsCollected</span>()) { resultText.<span class="hljs-built_in">setString</span>(<span class="hljs-string">"🎉 All ingredients collected!"</span>); } window.<span class="hljs-built_in">clear</span>(Color::White); window.<span class="hljs-built_in">draw</span>(title); window.<span class="hljs-built_in">draw</span>(budgetText); <span class="hljs-keyword">for</span> (<span class="hljs-type">size_t</span> i = <span class="hljs-number">0</span>; i &lt; buttons.<span class="hljs-built_in">size</span>(); ++i) { window.<span class="hljs-built_in">draw</span>(buttons[i]); window.<span class="hljs-built_in">draw</span>(labels[i]); } window.<span class="hljs-built_in">draw</span>(cartText); window.<span class="hljs-built_in">draw</span>(resultText); window.<span class="hljs-built_in">display</span>(); } <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>; } </code>\r
            </div>\r
        </div>\r
        <hr data-start="4625" data-end="4628" />\r
        <h2 data-start="4630" data-end="4651">📁 Required Assets</h2>\r
        <ul data-start="4652" data-end="4733">\r
            <li data-start="4652" data-end="4733">\r
                <p data-start="4654" data-end="4733">Place a font file (like <code data-start="4678"\r
                        data-end="4689">arial.ttf</code>) in your project folder for text rendering.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="4735" data-end="4738" />\r
        <h2 data-start="4740" data-end="4759">✅ What&rsquo;s Working</h2>\r
        <ul data-start="4760" data-end="4953">\r
            <li data-start="4760" data-end="4814">\r
                <p data-start="4762" data-end="4814">Simple GUI with recipe name, budget, and store items</p>\r
            </li>\r
            <li data-start="4815" data-end="4860">\r
                <p data-start="4817" data-end="4860">Clicking on grocery items adds them to cart</p>\r
            </li>\r
            <li data-start="4861" data-end="4901">\r
                <p data-start="4863" data-end="4901">Prevents over-budget or duplicate buys</p>\r
            </li>\r
            <li data-start="4902" data-end="4953">\r
                <p data-start="4904" data-end="4953">Shows win message when all ingredients are bought</p>\r
            </li>\r
        </ul>\r
        <hr data-start="4955" data-end="4958" />\r
        <h2 data-start="4960" data-end="4990">🧱 Enhancements to Add Next</h2>\r
        <ul data-start="4991" data-end="5235">\r
            <li data-start="4991" data-end="5023">\r
                <p data-start="4993" data-end="5023">Add <strong data-start="4997" data-end="5013">images/icons</strong>\r
                    for items</p>\r
            </li>\r
            <li data-start="5024" data-end="5057">\r
                <p data-start="5026" data-end="5057">Add <strong data-start="5030" data-end="5057">recipe selection\r
                        screen</strong></p>\r
            </li>\r
            <li data-start="5058" data-end="5109">\r
                <p data-start="5060" data-end="5109">Replace hardcoded data with JSON or external file</p>\r
            </li>\r
            <li data-start="5110" data-end="5158">\r
                <p data-start="5112" data-end="5158">Sound effects on success/failure (<code data-start="5146"\r
                        data-end="5157">sf::Sound</code>)</p>\r
            </li>\r
            <li data-start="5159" data-end="5193">\r
                <p data-start="5161" data-end="5193">Add <strong data-start="5165" data-end="5174">timer</strong> or\r
                    countdown clock</p>\r
            </li>\r
            <li data-start="5194" data-end="5235">\r
                <p data-start="5196" data-end="5235">Multiple levels / increasing difficulty</p>\r
            </li>\r
        </ul>\r
    </article>\r
</body>\r
\r
</html>`,Yh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h1><strong>Highway Driver: A Complete SFML Racing Game with Audio and Progressive Difficulty</strong></h1>\r
        <p class="ds-markdown-paragraph"><strong>🎮 Game Description:</strong><br />In&nbsp;<em>Highway Driver</em>, you\r
            control a car speeding down a highway while avoiding incoming traffic. The longer you survive, the higher\r
            your score. The game features endless scrolling, collision detection, and increasing difficulty to keep the\r
            challenge fresh.</p>\r
        <hr />\r
        <h2><strong>✅ Game Features</strong></h2>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Player controls:</strong>&nbsp;Move left/right with arrow keys.\r
                </p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Endless scrolling road:</strong>&nbsp;Creates a dynamic driving\r
                    experience.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Random enemy cars:</strong>&nbsp;AI-controlled vehicles\r
                    approach from the top.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Collision detection:</strong>&nbsp;Crash into an enemy, and\r
                    it's game over!</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Score system:</strong>&nbsp;Based on survival time.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Progressive difficulty:</strong>&nbsp;Speed and spawn rates\r
                    increase over time.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Sound effects:</strong>&nbsp;Crash sounds and background music.\r
                </p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2><strong>🧰 Requirements</strong></h2>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>SFML 2.5+</strong>&nbsp;(Graphics, Window, System, Audio\r
                    modules)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>C++ Compiler</strong>&nbsp;(GCC, Clang, MSVC)</p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph"><strong>Compile with:</strong></p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">bash</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre>g++ highway_driver.cpp <span class="token parameter variable">-o</span> game -lsfml-graphics -lsfml-window -lsfml-system -lsfml-audio</pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🧾 Full SFML Code (Highway Driver)</strong></h2>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">cpp</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;SFML/Graphics.hpp&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;SFML/Window.hpp&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;SFML/Audio.hpp&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctime&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>\r
\r
<span class="token keyword">using</span> <span class="token keyword">namespace</span> sf<span class="token punctuation">;</span>\r
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\r
\r
<span class="token keyword">const</span> <span class="token keyword">int</span> windowWidth <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>\r
<span class="token keyword">const</span> <span class="token keyword">int</span> windowHeight <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span>\r
<span class="token keyword">const</span> <span class="token keyword">float</span> carSpeed <span class="token operator">=</span> <span class="token number">5.0f</span><span class="token punctuation">;</span>\r
<span class="token keyword">const</span> <span class="token keyword">float</span> baseEnemySpeed <span class="token operator">=</span> <span class="token number">4.0f</span><span class="token punctuation">;</span>\r
<span class="token keyword">const</span> <span class="token keyword">float</span> laneWidth <span class="token operator">=</span> <span class="token number">100.0f</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">struct</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>\r
    RectangleShape shape<span class="token punctuation">;</span>\r
    <span class="token keyword">float</span> speed<span class="token punctuation">;</span>\r
\r
    <span class="token function">Car</span><span class="token punctuation">(</span>Color color<span class="token punctuation">,</span> Vector2f pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        shape<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span><span class="token function">Vector2f</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        shape<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        shape<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>pos<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        speed <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">bool</span> <span class="token function">checkCollision</span><span class="token punctuation">(</span>Car<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> Car<span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">getGlobalBounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intersects</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">getGlobalBounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token function">srand</span><span class="token punctuation">(</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    RenderWindow <span class="token function">window</span><span class="token punctuation">(</span><span class="token function">VideoMode</span><span class="token punctuation">(</span>windowWidth<span class="token punctuation">,</span> windowHeight<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"🚘 Highway Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    window<span class="token punctuation">.</span><span class="token function">setFramerateLimit</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Player Car</span>\r
    Car <span class="token function">player</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>Blue<span class="token punctuation">,</span> <span class="token function">Vector2f</span><span class="token punctuation">(</span>windowWidth <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">25</span><span class="token punctuation">,</span> windowHeight <span class="token operator">-</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Enemy Cars</span>\r
    vector<span class="token operator">&lt;</span>Car<span class="token operator">&gt;</span> enemies<span class="token punctuation">;</span>\r
    <span class="token keyword">float</span> enemySpeed <span class="token operator">=</span> baseEnemySpeed<span class="token punctuation">;</span>\r
    <span class="token keyword">float</span> spawnInterval <span class="token operator">=</span> <span class="token number">1.0f</span><span class="token punctuation">;</span>\r
    <span class="token keyword">float</span> spawnTimer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Road Lines</span>\r
    RectangleShape <span class="token function">roadLine</span><span class="token punctuation">(</span><span class="token function">Vector2f</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    roadLine<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>White<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    vector<span class="token operator">&lt;</span><span class="token keyword">float</span><span class="token operator">&gt;</span> lineOffsets <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Game State</span>\r
    Clock clock<span class="token punctuation">;</span>\r
    <span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
    <span class="token keyword">int</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\r
    <span class="token keyword">float</span> levelTimer <span class="token operator">=</span> <span class="token number">0.0f</span><span class="token punctuation">;</span>\r
    <span class="token keyword">bool</span> gameOver <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Font &amp; Text</span>\r
    Font font<span class="token punctuation">;</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>font<span class="token punctuation">.</span><span class="token function">loadFromFile</span><span class="token punctuation">(</span><span class="token string">"arial.ttf"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\r
\r
    Text scoreText<span class="token punctuation">;</span>\r
    scoreText<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>font<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    scoreText<span class="token punctuation">.</span><span class="token function">setCharacterSize</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    scoreText<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>White<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    scoreText<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    Text levelText<span class="token punctuation">;</span>\r
    levelText<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>font<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    levelText<span class="token punctuation">.</span><span class="token function">setCharacterSize</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    levelText<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>White<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    levelText<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Audio</span>\r
    SoundBuffer crashBuffer<span class="token punctuation">;</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>crashBuffer<span class="token punctuation">.</span><span class="token function">loadFromFile</span><span class="token punctuation">(</span><span class="token string">"crash.wav"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Failed to load crash.wav"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
    Sound crashSound<span class="token punctuation">;</span>\r
    crashSound<span class="token punctuation">.</span><span class="token function">setBuffer</span><span class="token punctuation">(</span>crashBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    Music bgMusic<span class="token punctuation">;</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>bgMusic<span class="token punctuation">.</span><span class="token function">openFromFile</span><span class="token punctuation">(</span><span class="token string">"music.ogg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Failed to load music.ogg"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
    bgMusic<span class="token punctuation">.</span><span class="token function">setLoop</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    bgMusic<span class="token punctuation">.</span><span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    bgMusic<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">while</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">isOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        Event event<span class="token punctuation">;</span>\r
        <span class="token keyword">while</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">pollEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">==</span> Event<span class="token double-colon punctuation">::</span>Closed<span class="token punctuation">)</span>\r
                window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span>\r
\r
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gameOver<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token comment">// Input Handling</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Keyboard</span><span class="token double-colon punctuation">::</span><span class="token function">isKeyPressed</span><span class="token punctuation">(</span>Keyboard<span class="token double-colon punctuation">::</span>Left<span class="token punctuation">)</span> \r
                player<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token operator">-</span>carSpeed<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Keyboard</span><span class="token double-colon punctuation">::</span><span class="token function">isKeyPressed</span><span class="token punctuation">(</span>Keyboard<span class="token double-colon punctuation">::</span>Right<span class="token punctuation">)</span><span class="token punctuation">)</span> \r
                player<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span>carSpeed<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
            <span class="token comment">// Keep player in bounds</span>\r
            <span class="token keyword">float</span> playerX <span class="token operator">=</span> player<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>playerX <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> player<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> player<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>playerX <span class="token operator">&gt;</span> windowWidth <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">)</span> player<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>windowWidth <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">,</span> player<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
            <span class="token comment">// Time Tracking</span>\r
            <span class="token keyword">float</span> deltaTime <span class="token operator">=</span> clock<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            spawnTimer <span class="token operator">+=</span> deltaTime<span class="token punctuation">;</span>\r
            levelTimer <span class="token operator">+=</span> deltaTime<span class="token punctuation">;</span>\r
\r
            <span class="token comment">// Level Up System</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>levelTimer <span class="token operator">&gt;=</span> <span class="token number">10.0f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                level<span class="token operator">++</span><span class="token punctuation">;</span>\r
                levelTimer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
                enemySpeed <span class="token operator">+=</span> <span class="token number">0.5f</span><span class="token punctuation">;</span>\r
                spawnInterval <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0.4f</span><span class="token punctuation">,</span> spawnInterval <span class="token operator">-</span> <span class="token number">0.1f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token punctuation">}</span>\r
\r
            <span class="token comment">// Enemy Spawning</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>spawnTimer <span class="token operator">&gt;=</span> spawnInterval<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                <span class="token keyword">float</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> laneWidth <span class="token operator">+</span> <span class="token number">25</span><span class="token punctuation">;</span>\r
                enemies<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token function">Car</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>Red<span class="token punctuation">,</span> <span class="token function">Vector2f</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                spawnTimer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
            <span class="token punctuation">}</span>\r
\r
            <span class="token comment">// Move Enemies</span>\r
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> enemy <span class="token operator">:</span> enemies<span class="token punctuation">)</span>\r
                enemy<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> enemySpeed<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
            <span class="token comment">// Collision Detection</span>\r
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> enemy <span class="token operator">:</span> enemies<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkCollision</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> enemy<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                    crashSound<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                    gameOver <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\r
                    <span class="token keyword">break</span><span class="token punctuation">;</span>\r
                <span class="token punctuation">}</span>\r
            <span class="token punctuation">}</span>\r
\r
            <span class="token comment">// Remove Off-Screen Enemies</span>\r
            enemies<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span><span class="token function">remove_if</span><span class="token punctuation">(</span>enemies<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> enemies<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\r
                <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span>Car<span class="token operator">&amp;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> c<span class="token punctuation">.</span>shape<span class="token punctuation">.</span><span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>y <span class="token operator">&gt;</span> windowHeight<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> enemies<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
            <span class="token comment">// Update Score</span>\r
            score<span class="token operator">++</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span>\r
\r
        <span class="token comment">// Drawing</span>\r
        window<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        <span class="token comment">// Draw Road Lines</span>\r
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> y <span class="token operator">:</span> lineOffsets<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            roadLine<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>windowWidth <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>roadLine<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            y <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;</span> windowHeight<span class="token punctuation">)</span> y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span>\r
\r
        <span class="token comment">// Draw Player &amp; Enemies</span>\r
        window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span><span class="token operator">&amp;</span> enemy <span class="token operator">:</span> enemies<span class="token punctuation">)</span>\r
            window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>enemy<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        <span class="token comment">// Draw UI</span>\r
        scoreText<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token string">"Score: "</span> <span class="token operator">+</span> <span class="token function">to_string</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        levelText<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token string">"Level: "</span> <span class="token operator">+</span> <span class="token function">to_string</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>scoreText<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>levelText<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        <span class="token comment">// Game Over Screen</span>\r
        <span class="token keyword">if</span> <span class="token punctuation">(</span>gameOver<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            Text <span class="token function">gameOverText</span><span class="token punctuation">(</span><span class="token string">"CRASH! Game Over!"</span><span class="token punctuation">,</span> font<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            gameOverText<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>Yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            gameOverText<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> windowHeight <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>gameOverText<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span>\r
\r
        window<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🎮 Controls</strong></h2>\r
        <div class="markdown-table-wrapper">\r
            <table>\r
                <thead>\r
                    <tr>\r
                        <th>Key</th>\r
                        <th>Action</th>\r
                    </tr>\r
                </thead>\r
                <tbody>\r
                    <tr>\r
                        <td><strong>Left Arrow</strong></td>\r
                        <td>Move Left</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Right Arrow</strong></td>\r
                        <td>Move Right</td>\r
                    </tr>\r
                </tbody>\r
            </table>\r
        </div>\r
        <hr />\r
        <h2><strong>📦 Assets Needed</strong></h2>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Font:</strong>&nbsp;<code>arial.ttf</code>&nbsp;(or any other\r
                    font file).</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Sound Effects:</strong></p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph"><code>crash.wav</code>&nbsp;(plays on collision).</p>\r
                    </li>\r
                </ul>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Background Music:</strong></p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph"><code>music.ogg</code>&nbsp;(looping track).</p>\r
                    </li>\r
                </ul>\r
            </li>\r
        </ol>\r
        <p class="ds-markdown-paragraph"><em>(Free sounds available at&nbsp;<a href="https://freesound.org/"\r
                    target="_blank" rel="noreferrer">Freesound</a>&nbsp;or&nbsp;<a href="https://opengameart.org/"\r
                    target="_blank" rel="noreferrer">OpenGameArt</a>.)</em></p>\r
        <hr />\r
        <h2><strong>🔥 Progressive Difficulty System</strong></h2>\r
        <div class="markdown-table-wrapper">\r
            <table>\r
                <thead>\r
                    <tr>\r
                        <th>Feature</th>\r
                        <th>Behavior</th>\r
                    </tr>\r
                </thead>\r
                <tbody>\r
                    <tr>\r
                        <td><strong>Level Up Timer</strong></td>\r
                        <td>Every&nbsp;<strong>10 seconds</strong>, level increases.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Enemy Speed Boost</strong></td>\r
                        <td>Cars move&nbsp;<strong>faster</strong>&nbsp;each level.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Faster Spawn Rate</strong></td>\r
                        <td>Enemies appear&nbsp;<strong>more frequently</strong>.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Level Display</strong></td>\r
                        <td>Shows current difficulty on screen.</td>\r
                    </tr>\r
                </tbody>\r
            </table>\r
        </div>\r
        <hr />\r
        <h2><strong>🚀 What&rsquo;s Next?</strong></h2>\r
        <div class="markdown-table-wrapper">\r
            <table>\r
                <thead>\r
                    <tr>\r
                        <th>Feature</th>\r
                        <th>Description</th>\r
                    </tr>\r
                </thead>\r
                <tbody>\r
                    <tr>\r
                        <td><strong>🎨 Car Sprites</strong></td>\r
                        <td>Replace rectangles with images.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>🎵 More Sound Effects</strong></td>\r
                        <td>Engine revs, nitro boosts.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>🔁 Restart System</strong></td>\r
                        <td>Press&nbsp;<strong>R</strong>&nbsp;to replay after crashing.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>💾 High Scores</strong></td>\r
                        <td>Save and load best scores.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>🚧 Power-Ups</strong></td>\r
                        <td>Shields, speed boosts, or coins.</td>\r
                    </tr>\r
                </tbody>\r
            </table>\r
        </div>\r
        <hr />\r
        <h3><strong>🎨 Need More Enhancements?</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Better graphics?</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Multiplayer mode?</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Obstacle variations?</strong></p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph">Let me know how you'd like to expand&nbsp;<em>Highway Driver!</em>&nbsp;🚗💨\r
        </p>\r
    </article>\r
</body>\r
\r
</html>`,$h=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h2 data-start="66" data-end="95">🌍 Real-Life Inspiration</h2>\r
        <h3 data-start="96" data-end="136">🚗 Highway Driving in the Real World</h3>\r
        <ul data-start="138" data-end="638">\r
            <li data-start="138" data-end="260">\r
                <p data-start="140" data-end="260"><strong data-start="140" data-end="162">Obstacle Awareness</strong>:\r
                    Just like in real life, drivers must avoid sudden obstacles&mdash;potholes, debris, or other\r
                    vehicles.</p>\r
            </li>\r
            <li data-start="261" data-end="368">\r
                <p data-start="263" data-end="368"><strong data-start="263" data-end="281">Lane Switching</strong>: A\r
                    common challenge in real driving, especially at high speeds, is safe lane changing.</p>\r
            </li>\r
            <li data-start="369" data-end="495">\r
                <p data-start="371" data-end="495"><strong data-start="371" data-end="401">Increasing Speed with\r
                        Time</strong>: On long trips, drivers may unconsciously speed up over time, leading to fatigue\r
                    or mistakes.</p>\r
            </li>\r
            <li data-start="496" data-end="638">\r
                <p data-start="498" data-end="638"><strong data-start="498" data-end="515">Tunnel Vision</strong>: The\r
                    longer you're on the road, the narrower your focus can become&mdash;a great metaphor for increasing\r
                    difficulty in the game.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="640" data-end="643" />\r
        <h2 data-start="645" data-end="681">🎉 Fun Facts About Cars &amp; Driving</h2>\r
        <ol data-start="683" data-end="1245">\r
            <li data-start="683" data-end="776">\r
                <p data-start="686" data-end="776">🚦 <strong data-start="689" data-end="716">The first traffic\r
                        light</strong> was installed in London in 1868 and exploded a month later!</p>\r
            </li>\r
            <li data-start="777" data-end="883">\r
                <p data-start="780" data-end="883">🛣️ <strong data-start="784" data-end="806">Germany&rsquo;s\r
                        Autobahn</strong> has stretches with <strong data-start="826" data-end="844">no speed\r
                        limit</strong>, inspiring many endless driving games.</p>\r
            </li>\r
            <li data-start="884" data-end="1011">\r
                <p data-start="887" data-end="1011">⛽ <strong data-start="889" data-end="907">Cruise control</strong>\r
                    was invented by a blind man named Ralph Teetor who noticed his driver sped up and slowed down too\r
                    much.</p>\r
            </li>\r
            <li data-start="1012" data-end="1131">\r
                <p data-start="1015" data-end="1131">🧠 Reaction time at 100 km/h is just <strong data-start="1052"\r
                        data-end="1067">1.5 seconds</strong>, but that&rsquo;s 42 meters traveled before you even touch\r
                    the brake!</p>\r
            </li>\r
            <li data-start="1132" data-end="1245">\r
                <p data-start="1135" data-end="1245">🎮 <strong data-start="1138" data-end="1152">Mario Kart</strong>\r
                    inspired real driver studies&mdash;players often react faster than non-gamers in simulation tests.\r
                </p>\r
            </li>\r
        </ol>\r
        <hr data-start="1247" data-end="1250" />\r
        <h2 data-start="1252" data-end="1299">🧠 Problem-Solving Approaches in Game Design</h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="1301" data-end="1888">\r
                    <thead data-start="1301" data-end="1350">\r
                        <tr data-start="1301" data-end="1350">\r
                            <th data-start="1301" data-end="1313" data-col-size="sm">Challenge</th>\r
                            <th data-start="1313" data-end="1333" data-col-size="sm">Real-Life Analogy</th>\r
                            <th data-start="1333" data-end="1350" data-col-size="md">Game Solution</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="1401" data-end="1888">\r
                        <tr data-start="1401" data-end="1509">\r
                            <td data-start="1401" data-end="1426" data-col-size="sm">Keeping player engaged</td>\r
                            <td data-start="1426" data-end="1458" data-col-size="sm">Road becomes boring over time</td>\r
                            <td data-start="1458" data-end="1509" data-col-size="md">Increasing level speed &amp;\r
                                frequency of obstacles</td>\r
                        </tr>\r
                        <tr data-start="1510" data-end="1616">\r
                            <td data-start="1510" data-end="1533" data-col-size="sm">Balancing difficulty</td>\r
                            <td data-start="1533" data-end="1570" data-col-size="sm">Speeding makes real driving harder\r
                            </td>\r
                            <td data-start="1570" data-end="1616" data-col-size="md">Enemy spawn rate + movement speed\r
                                increase</td>\r
                        </tr>\r
                        <tr data-start="1617" data-end="1709">\r
                            <td data-start="1617" data-end="1633" data-col-size="sm">Feedback loop</td>\r
                            <td data-start="1633" data-end="1665" data-col-size="sm">Drivers use mirrors and sound</td>\r
                            <td data-start="1665" data-end="1709" data-col-size="md">Sound on crash, visual feedback on\r
                                score</td>\r
                        </tr>\r
                        <tr data-start="1710" data-end="1798">\r
                            <td data-start="1710" data-end="1735" data-col-size="sm">Avoiding unfair deaths</td>\r
                            <td data-start="1735" data-end="1759" data-col-size="sm">Road has safety zones</td>\r
                            <td data-start="1759" data-end="1798" data-col-size="md">Spawning enemies with spacing logic\r
                            </td>\r
                        </tr>\r
                        <tr data-start="1799" data-end="1888">\r
                            <td data-start="1799" data-end="1815" data-col-size="sm">Replayability</td>\r
                            <td data-start="1815" data-end="1850" data-col-size="sm">Driving isn't the same each time\r
                            </td>\r
                            <td data-start="1850" data-end="1888" data-col-size="md">Random lanes + high score tracking\r
                            </td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="1890" data-end="1893" />\r
        <h2 data-start="1895" data-end="1938">🛠️ Further Enhancements &amp; Game Features</h2>\r
        <p data-start="1940" data-end="2023">Here are <strong data-start="1949" data-end="1969">10+\r
                improvements</strong> to evolve <em data-start="1980" data-end="1996">Highway Driver</em> into a\r
            full-featured game:</p>\r
        <h3 data-start="2025" data-end="2043">🎨 Visual &amp; UX</h3>\r
        <ul data-start="2044" data-end="2349">\r
            <li data-start="2044" data-end="2121">\r
                <p data-start="2046" data-end="2121">✅ <strong data-start="2048" data-end="2059">Sprites</strong>:\r
                    Replace rectangles with car textures (<code data-start="2099" data-end="2108">car.png</code>, <code\r
                        data-start="2110" data-end="2120">road.png</code>)</p>\r
            </li>\r
            <li data-start="2122" data-end="2199">\r
                <p data-start="2124" data-end="2199">🌌 <strong data-start="2127" data-end="2146">Day/Night\r
                        Cycle</strong>: Gradually darken screen and add headlights at night</p>\r
            </li>\r
            <li data-start="2200" data-end="2284">\r
                <p data-start="2202" data-end="2284">🌧️ <strong data-start="2206" data-end="2223">Weather\r
                        Modes</strong>: Rain reduces visibility or slippery roads (faster movement)</p>\r
            </li>\r
            <li data-start="2285" data-end="2349">\r
                <p data-start="2287" data-end="2349">🛣️ <strong data-start="2291" data-end="2310">Different\r
                        Roads</strong>: City, desert, highway, mountain paths</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="2351" data-end="2363">🎵 Audio</h3>\r
        <ul data-start="2364" data-end="2455">\r
            <li data-start="2364" data-end="2413">\r
                <p data-start="2366" data-end="2413">✅ <strong data-start="2368" data-end="2388">Background\r
                        music</strong>: Change tracks per level</p>\r
            </li>\r
            <li data-start="2414" data-end="2455">\r
                <p data-start="2416" data-end="2455">💥 <strong data-start="2419" data-end="2455">Sound for crash,\r
                        boost, level up</strong></p>\r
            </li>\r
        </ul>\r
        <h3 data-start="2457" data-end="2473">🚘 Mechanics</h3>\r
        <ul data-start="2474" data-end="2670">\r
            <li data-start="2474" data-end="2543">\r
                <p data-start="2476" data-end="2543">⛽ <strong data-start="2478" data-end="2493">Fuel System</strong>:\r
                    Pick up gas to keep going (runs out = game over)</p>\r
            </li>\r
            <li data-start="2544" data-end="2602">\r
                <p data-start="2546" data-end="2602">🪙 <strong data-start="2549" data-end="2568">Coin\r
                        Collection</strong>: Add collectible items for points</p>\r
            </li>\r
            <li data-start="2603" data-end="2670">\r
                <p data-start="2605" data-end="2670">💨 <strong data-start="2608" data-end="2623">Turbo Boost</strong>:\r
                    Press spacebar to go super fast for 3 seconds</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="2672" data-end="2690">📈 Progression</h3>\r
        <ul data-start="2691" data-end="2936">\r
            <li data-start="2691" data-end="2759">\r
                <p data-start="2693" data-end="2759">🧠 <strong data-start="2696" data-end="2710">AI Traffic</strong>:\r
                    Smarter NPC cars that switch lanes or slow down</p>\r
            </li>\r
            <li data-start="2760" data-end="2819">\r
                <p data-start="2762" data-end="2819">🧩 <strong data-start="2765" data-end="2777">Boss Car</strong>: A\r
                    police car chases you every few levels</p>\r
            </li>\r
            <li data-start="2820" data-end="2875">\r
                <p data-start="2822" data-end="2875">💾 <strong data-start="2825" data-end="2846">High Score\r
                        Saving</strong>: Save top 5 scores to a file</p>\r
            </li>\r
            <li data-start="2876" data-end="2936">\r
                <p data-start="2878" data-end="2936">🧱 <strong data-start="2881" data-end="2899">Obstacle\r
                        Types</strong>: Barricades, traffic cones, potholes</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="2938" data-end="2954">🎮 Interface</h3>\r
        <ul data-start="2955" data-end="3066">\r
            <li data-start="2955" data-end="2991">\r
                <p data-start="2957" data-end="2991">🔄 <strong data-start="2960" data-end="2986">Restart / Pause /\r
                        Quit</strong> menu</p>\r
            </li>\r
            <li data-start="2992" data-end="3066">\r
                <p data-start="2994" data-end="3066">🎯 <strong data-start="2997" data-end="3015">Mission\r
                        System</strong>: &ldquo;Survive for 30s&rdquo;, &ldquo;Dodge 10 cars in a row&rdquo;, etc.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3068" data-end="3071" />\r
        <h2 data-start="3073" data-end="3094">🏆 Game Mode Ideas</h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="3096" data-end="3396">\r
                    <thead data-start="3096" data-end="3118">\r
                        <tr data-start="3096" data-end="3118">\r
                            <th data-start="3096" data-end="3103" data-col-size="sm">Mode</th>\r
                            <th data-start="3103" data-end="3118" data-col-size="sm">Description</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="3142" data-end="3396">\r
                        <tr data-start="3142" data-end="3205">\r
                            <td data-start="3142" data-end="3166" data-col-size="sm">🛣️ <strong data-start="3148"\r
                                    data-end="3165">Endless Drive</strong></td>\r
                            <td data-start="3166" data-end="3205" data-col-size="sm">Classic mode, gets faster with time\r
                            </td>\r
                        </tr>\r
                        <tr data-start="3206" data-end="3267">\r
                            <td data-start="3206" data-end="3231" data-col-size="sm">🧱 <strong data-start="3211"\r
                                    data-end="3230">Obstacle Course</strong></td>\r
                            <td data-start="3231" data-end="3267" data-col-size="sm">Random cones and potholes appear\r
                            </td>\r
                        </tr>\r
                        <tr data-start="3268" data-end="3330">\r
                            <td data-start="3268" data-end="3288" data-col-size="sm">🏁 <strong data-start="3273"\r
                                    data-end="3287">Time Trial</strong></td>\r
                            <td data-start="3288" data-end="3330" data-col-size="sm">Reach checkpoints before time runs\r
                                out</td>\r
                        </tr>\r
                        <tr data-start="3331" data-end="3396">\r
                            <td data-start="3331" data-end="3353" data-col-size="sm">🚨 <strong data-start="3336"\r
                                    data-end="3352">Police Chase</strong></td>\r
                            <td data-start="3353" data-end="3396" data-col-size="sm">Outrun chasing cars with tricky\r
                                traffic</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="3398" data-end="3401" />\r
        <h2 data-start="3403" data-end="3442">🚀 Real-World Skills Learnt via Game</h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="3444" data-end="3715">\r
                    <thead data-start="3444" data-end="3470">\r
                        <tr data-start="3444" data-end="3470">\r
                            <th data-start="3444" data-end="3452" data-col-size="sm">Skill</th>\r
                            <th data-start="3452" data-end="3470" data-col-size="sm">Gained Through</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="3498" data-end="3715">\r
                        <tr data-start="3498" data-end="3534">\r
                            <td data-start="3498" data-end="3514" data-col-size="sm">Reaction time</td>\r
                            <td data-start="3514" data-end="3534" data-col-size="sm">Dodge enemy cars</td>\r
                        </tr>\r
                        <tr data-start="3535" data-end="3576">\r
                            <td data-start="3535" data-end="3554" data-col-size="sm">Focus &amp; patience</td>\r
                            <td data-start="3554" data-end="3576" data-col-size="sm">Long survival runs</td>\r
                        </tr>\r
                        <tr data-start="3577" data-end="3620">\r
                            <td data-start="3577" data-end="3597" data-col-size="sm">Spatial awareness</td>\r
                            <td data-start="3597" data-end="3620" data-col-size="sm">Avoiding collisions</td>\r
                        </tr>\r
                        <tr data-start="3621" data-end="3664">\r
                            <td data-start="3621" data-end="3638" data-col-size="sm">Coding + logic</td>\r
                            <td data-start="3638" data-end="3664" data-col-size="sm">C++ + SFML programming</td>\r
                        </tr>\r
                        <tr data-start="3665" data-end="3715">\r
                            <td data-start="3665" data-end="3679" data-col-size="sm">Game design</td>\r
                            <td data-start="3679" data-end="3715" data-col-size="sm">Balancing speed, difficulty, fun\r
                            </td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="3717" data-end="3720" />\r
        <h2 data-start="3722" data-end="3734">✨ Summary</h2>\r
        <p data-start="3736" data-end="3804"><strong data-start="3736" data-end="3754">Highway Driver</strong> may look\r
            simple, but it's a powerful template to:</p>\r
        <ul data-start="3806" data-end="3991">\r
            <li data-start="3806" data-end="3852">\r
                <p data-start="3808" data-end="3852">Practice real-world reflexes &amp; traffic logic</p>\r
            </li>\r
            <li data-start="3853" data-end="3891">\r
                <p data-start="3855" data-end="3891">Learn <strong data-start="3861" data-end="3891">progressive game\r
                        mechanics</strong></p>\r
            </li>\r
            <li data-start="3892" data-end="3941">\r
                <p data-start="3894" data-end="3941">Implement <strong data-start="3904" data-end="3941">real-time\r
                        strategy under pressure</strong></p>\r
            </li>\r
            <li data-start="3942" data-end="3991">\r
                <p data-start="3944" data-end="3991">Introduce <strong data-start="3954" data-end="3991">problem-solving\r
                        &amp; software design</strong></p>\r
            </li>\r
        </ul>\r
    </article>\r
</body>\r
\r
</html>`,Kh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h2 data-start="270" data-end="304">🧱 What GUI Means for Your Game</h2>\r
        <p data-start="306" data-end="328">A better <strong data-start="315" data-end="322">GUI</strong> adds:</p>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="330" data-end="769">\r
                    <thead data-start="330" data-end="351">\r
                        <tr data-start="330" data-end="351">\r
                            <th data-start="330" data-end="340" data-col-size="sm">Feature</th>\r
                            <th data-start="340" data-end="351" data-col-size="sm">Purpose</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="373" data-end="769">\r
                        <tr data-start="373" data-end="423">\r
                            <td data-start="373" data-end="388" data-col-size="sm">🧭 Main Menu</td>\r
                            <td data-start="388" data-end="423" data-col-size="sm">Start Game, Quit, maybe Options</td>\r
                        </tr>\r
                        <tr data-start="424" data-end="475">\r
                            <td data-start="424" data-end="440" data-col-size="sm">🛑 Pause Menu</td>\r
                            <td data-start="440" data-end="475" data-col-size="sm">Press <code data-start="448"\r
                                    data-end="453">Esc</code> to pause and resume</td>\r
                        </tr>\r
                        <tr data-start="476" data-end="527">\r
                            <td data-start="476" data-end="498" data-col-size="sm">💥 Game Over Screen</td>\r
                            <td data-start="498" data-end="527" data-col-size="sm">Show score, retry or exit</td>\r
                        </tr>\r
                        <tr data-start="528" data-end="576">\r
                            <td data-start="528" data-end="537" data-col-size="sm">🎯 HUD</td>\r
                            <td data-start="537" data-end="576" data-col-size="sm">Score, level, lives shown on screen\r
                            </td>\r
                        </tr>\r
                        <tr data-start="577" data-end="636">\r
                            <td data-start="577" data-end="605" data-col-size="sm">🎨 Custom Fonts / Buttons</td>\r
                            <td data-start="605" data-end="636" data-col-size="sm">Make the game look polished</td>\r
                        </tr>\r
                        <tr data-start="637" data-end="704">\r
                            <td data-start="637" data-end="668" data-col-size="sm">🖼️ Textures and Backgrounds</td>\r
                            <td data-start="668" data-end="704" data-col-size="sm">Replace basic shapes with images</td>\r
                        </tr>\r
                        <tr data-start="705" data-end="769">\r
                            <td data-start="705" data-end="730" data-col-size="sm">🕹️ Mouse Interactions</td>\r
                            <td data-start="730" data-end="769" data-col-size="sm">Clickable buttons (via SFML events)\r
                            </td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="771" data-end="774" />\r
        <h2 data-start="776" data-end="808">✅ Example GUI Elements to Add</h2>\r
        <h3 data-start="810" data-end="840">1. 🎮 <strong data-start="820" data-end="840">Main Menu Screen</strong></h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-comment">// Before game starts:</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">GameState</span> { MENU, PLAYING, GAME_OVER }; GameState gameState = MENU; <span class="hljs-comment">// Draw menu buttons:</span> <span class="hljs-function">Text <span class="hljs-title">title</span></span><span class="hljs-params">(<span class="hljs-string">"HIGHWAY DRIVER"</span></span>, font, <span class="hljs-number">40</span>); title.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">50</span>, <span class="hljs-number">100</span>); <span class="hljs-function">Text <span class="hljs-title">startBtn</span></span><span class="hljs-params">(<span class="hljs-string">"Start Game"</span></span>, font, <span class="hljs-number">30</span>); startBtn.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">100</span>, <span class="hljs-number">250</span>); <span class="hljs-function">Text <span class="hljs-title">quitBtn</span></span><span class="hljs-params">(<span class="hljs-string">"Quit"</span></span>, font, <span class="hljs-number">30</span>); quitBtn.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">100</span>, <span class="hljs-number">300</span>); <span class="hljs-comment">// Inside window loop:</span> <span class="hljs-keyword">if</span> (gameState == MENU) { window.<span class="hljs-built_in">draw</span>(title); window.<span class="hljs-built_in">draw</span>(startBtn); window.<span class="hljs-built_in">draw</span>(quitBtn); } </code>\r
            </div>\r
        </div>\r
        <p data-start="1305" data-end="1335">Then check mouse clicks using:</p>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-keyword">if</span> (event.type == Event::MouseButtonPressed) { <span class="hljs-function">Vector2f <span class="hljs-title">mousePos</span></span><span class="hljs-params">(event.mouseButton.x, event.mouseButton.y)</span>; <span class="hljs-keyword">if</span> (startBtn.<span class="hljs-built_in">getGlobalBounds</span>().<span class="hljs-built_in">contains</span>(mousePos)) gameState = PLAYING; <span class="hljs-keyword">if</span> (quitBtn.<span class="hljs-built_in">getGlobalBounds</span>().<span class="hljs-built_in">contains</span>(mousePos)) window.<span class="hljs-built_in">close</span>(); } </code>\r
            </div>\r
        </div>\r
        <hr data-start="1624" data-end="1627" />\r
        <h3 data-start="1629" data-end="1666">2. 🛑 <strong data-start="1639" data-end="1666">Pause Menu with Esc\r
                Key</strong></h3>\r
        <p data-start="1668" data-end="1678">Add logic:</p>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-type">bool</span> paused = <span class="hljs-literal">false</span>; <span class="hljs-keyword">if</span> (event.type == Event::KeyPressed &amp;&amp; event.key.code == Keyboard::Escape) { paused = !paused; } <span class="hljs-keyword">if</span> (paused) { <span class="hljs-function">Text <span class="hljs-title">pauseText</span></span><span class="hljs-params">(<span class="hljs-string">"PAUSED"</span></span>, font, <span class="hljs-number">40</span>); pauseText.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">130</span>, <span class="hljs-number">250</span>); window.<span class="hljs-built_in">draw</span>(pauseText); <span class="hljs-keyword">continue</span>; <span class="hljs-comment">// Skip game update</span> } </code>\r
            </div>\r
        </div>\r
        <hr data-start="1970" data-end="1973" />\r
        <h3 data-start="1975" data-end="2005">3. 💥 <strong data-start="1985" data-end="2005">Game Over Screen</strong>\r
        </h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-keyword">if</span> (gameOver) { <span class="hljs-function">Text <span class="hljs-title">over</span></span><span class="hljs-params">(<span class="hljs-string">"Game Over!"</span></span>, font, <span class="hljs-number">40</span>); over.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">100</span>, <span class="hljs-number">250</span>); <span class="hljs-function">Text <span class="hljs-title">retry</span></span><span class="hljs-params">(<span class="hljs-string">"Press R to Retry"</span></span>, font, <span class="hljs-number">24</span>); retry.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">110</span>, <span class="hljs-number">320</span>); window.<span class="hljs-built_in">draw</span>(over); window.<span class="hljs-built_in">draw</span>(retry); <span class="hljs-keyword">if</span> (Keyboard::<span class="hljs-built_in">isKeyPressed</span>(Keyboard::R)) { <span class="hljs-comment">// Reset game variables:</span> enemies.<span class="hljs-built_in">clear</span>(); score = <span class="hljs-number">0</span>; moves = <span class="hljs-number">0</span>; gameOver = <span class="hljs-literal">false</span>; enemySpeed = <span class="hljs-number">4.0f</span>; level = <span class="hljs-number">1</span>; spawnInterval = <span class="hljs-number">1.0f</span>; clock.<span class="hljs-built_in">restart</span>(); } } </code>\r
            </div>\r
        </div>\r
        <hr data-start="2513" data-end="2516" />\r
        <h3 data-start="2518" data-end="2572">4. 🎨 <strong data-start="2528" data-end="2572">Optional: Use Textures\r
                Instead of Shapes</strong></h3>\r
        <p data-start="2574" data-end="2616">Replace car rectangles with actual images:</p>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp">Texture carTexture; carTexture.<span class="hljs-built_in">loadFromFile</span>(<span class="hljs-string">"car.png"</span>); <span class="hljs-function">Sprite <span class="hljs-title">playerSprite</span></span><span class="hljs-params">(carTexture)</span>; playerSprite.<span class="hljs-built_in">setPosition</span>(carX, carY); window.<span class="hljs-built_in">draw</span>(playerSprite); </code>\r
            </div>\r
        </div>\r
        <hr data-start="2784" data-end="2787" />\r
        <h2 data-start="2789" data-end="2823">🛠 Future GUI Tools to Consider</h2>\r
        <p data-start="2825" data-end="2866">If you outgrow SFML&rsquo;s basic GUI features:</p>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="2868" data-end="3167">\r
                    <thead data-start="2868" data-end="2893">\r
                        <tr data-start="2868" data-end="2893">\r
                            <th data-start="2868" data-end="2878" data-col-size="sm">Library</th>\r
                            <th data-start="2878" data-end="2893" data-col-size="md">Description</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="2920" data-end="3167">\r
                        <tr data-start="2920" data-end="2988">\r
                            <td data-start="2920" data-end="2931" data-col-size="sm"><strong data-start="2922"\r
                                    data-end="2930">TGUI</strong></td>\r
                            <td data-start="2931" data-end="2988" data-col-size="md">Add real GUI widgets to SFML\r
                                (buttons, sliders, etc.)</td>\r
                        </tr>\r
                        <tr data-start="2989" data-end="3042">\r
                            <td data-start="2989" data-end="3006" data-col-size="sm"><strong data-start="2991"\r
                                    data-end="3005">ImGui-SFML</strong></td>\r
                            <td data-start="3006" data-end="3042" data-col-size="md">Great for debug GUIs or overlays\r
                            </td>\r
                        </tr>\r
                        <tr data-start="3043" data-end="3102">\r
                            <td data-start="3043" data-end="3052" data-col-size="sm"><strong data-start="3045"\r
                                    data-end="3051">Qt</strong></td>\r
                            <td data-start="3052" data-end="3102" data-col-size="md">Full-scale GUI applications, not\r
                                game-oriented</td>\r
                        </tr>\r
                        <tr data-start="3103" data-end="3167">\r
                            <td data-start="3103" data-end="3120" data-col-size="sm"><strong data-start="3105"\r
                                    data-end="3119">Dear ImGui</strong></td>\r
                            <td data-start="3120" data-end="3167" data-col-size="md">Lightweight for in-game controls or\r
                                editors</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="3169" data-end="3172" />\r
        <h2 data-start="3174" data-end="3207">🔁 Summary of GUI Enhancements</h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="3209" data-end="3522">\r
                    <thead data-start="3209" data-end="3238">\r
                        <tr data-start="3209" data-end="3238">\r
                            <th data-start="3209" data-end="3219" data-col-size="sm">Element</th>\r
                            <th data-start="3219" data-end="3238" data-col-size="sm">Example Feature</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="3268" data-end="3522">\r
                        <tr data-start="3268" data-end="3297">\r
                            <td data-start="3268" data-end="3283" data-col-size="sm">🎮 Main Menu</td>\r
                            <td data-start="3283" data-end="3297" data-col-size="sm">Start/Quit</td>\r
                        </tr>\r
                        <tr data-start="3298" data-end="3324">\r
                            <td data-start="3298" data-end="3309" data-col-size="sm">🛑 Pause</td>\r
                            <td data-start="3309" data-end="3324" data-col-size="sm">Press <code data-start="3317"\r
                                    data-end="3322">Esc</code></td>\r
                        </tr>\r
                        <tr data-start="3325" data-end="3361">\r
                            <td data-start="3325" data-end="3340" data-col-size="sm">💥 Game Over</td>\r
                            <td data-start="3340" data-end="3361" data-col-size="sm">Show score, retry</td>\r
                        </tr>\r
                        <tr data-start="3362" data-end="3393">\r
                            <td data-start="3362" data-end="3371" data-col-size="sm">🧾 HUD</td>\r
                            <td data-start="3371" data-end="3393" data-col-size="sm">Score, Level, Fuel</td>\r
                        </tr>\r
                        <tr data-start="3394" data-end="3435">\r
                            <td data-start="3394" data-end="3411" data-col-size="sm">🖼️ Background</td>\r
                            <td data-start="3411" data-end="3435" data-col-size="sm">Scrolling road image</td>\r
                        </tr>\r
                        <tr data-start="3436" data-end="3475">\r
                            <td data-start="3436" data-end="3449" data-col-size="sm">🎨 Sprites</td>\r
                            <td data-start="3449" data-end="3475" data-col-size="sm">Player car, enemy cars</td>\r
                        </tr>\r
                        <tr data-start="3476" data-end="3522">\r
                            <td data-start="3476" data-end="3490" data-col-size="sm">🔊 Settings</td>\r
                            <td data-start="3490" data-end="3522" data-col-size="sm">Volume control, toggle music</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
        </div>\r
    </article>\r
</body>\r
\r
</html>`,Xh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h1><strong>Car Parking Master: A Complete Game Development Journey from Console to SFML</strong></h1>\r
        <p class="ds-markdown-paragraph"><strong>🎮 Game Description:</strong><br />In&nbsp;<em>Car Parking Master</em>,\r
            you control a car in a crowded parking lot. Your goal is to navigate through obstacles and park in the\r
            designated spot without collisions. The game tracks moves, time, and efficiency, rewarding players who park\r
            quickly and skillfully.</p>\r
        <hr />\r
        <h2><strong>🧱 Basic Features (Text-Based Prototype)</strong></h2>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Grid-based map (10x10)</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Player controls</strong>&nbsp;using WASD keys</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Obstacles (<code>#</code>)</strong>&nbsp;block movement</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Parking spot (<code>P</code>)</strong>&nbsp;is the target</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Car (<code>C</code>)</strong>&nbsp;represents the player</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Score system</strong>&nbsp;rewards fewer moves</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2><strong>✅ Tools Used</strong></h2>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Language:</strong>&nbsp;C++</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Graphics (future scope):</strong>&nbsp;SFML / SDL</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Sound effects (future scope):</strong>&nbsp;SFML Audio /\r
                    SDL_mixer</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2><strong>🔣 Sample Text-Based Code (C++ Console)</strong></h2>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">cpp</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span>  <span class="token comment">// for _getch() on Windows</span></span>\r
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\r
\r
<span class="token keyword">const</span> <span class="token keyword">int</span> SIZE <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\r
<span class="token keyword">char</span> grid<span class="token punctuation">[</span>SIZE<span class="token punctuation">]</span><span class="token punctuation">[</span>SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>\r
<span class="token keyword">int</span> carX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> carY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
<span class="token keyword">int</span> moves <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">void</span> <span class="token function">initGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\r
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>\r
            grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'.'</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Place some obstacles</span>\r
    grid<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Parking spot</span>\r
    grid<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'P'</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Car start</span>\r
    carX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
    carY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'C'</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">void</span> <span class="token function">drawGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">"cls"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// clear screen on Windows</span>\r
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            cout <span class="token operator">&lt;&lt;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token char">' '</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span>\r
        cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Moves: "</span> <span class="token operator">&lt;&lt;</span> moves <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Use W A S D to move the car."</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">bool</span> <span class="token function">moveCar</span><span class="token punctuation">(</span><span class="token keyword">char</span> dir<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">int</span> newX <span class="token operator">=</span> carX<span class="token punctuation">,</span> newY <span class="token operator">=</span> carY<span class="token punctuation">;</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token char">'w'</span><span class="token punctuation">)</span> newX<span class="token operator">--</span><span class="token punctuation">;</span>\r
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token char">'s'</span><span class="token punctuation">)</span> newX<span class="token operator">++</span><span class="token punctuation">;</span>\r
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token char">'a'</span><span class="token punctuation">)</span> newY<span class="token operator">--</span><span class="token punctuation">;</span>\r
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token char">'d'</span><span class="token punctuation">)</span> newY<span class="token operator">++</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Bounds check</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newX <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> newX <span class="token operator">&gt;=</span> SIZE <span class="token operator">||</span> newY <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> newY <span class="token operator">&gt;=</span> SIZE<span class="token punctuation">)</span>\r
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Obstacle check</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>newX<span class="token punctuation">]</span><span class="token punctuation">[</span>newY<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'#'</span><span class="token punctuation">)</span>\r
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Move car</span>\r
    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'.'</span><span class="token punctuation">;</span>\r
    carX <span class="token operator">=</span> newX<span class="token punctuation">;</span>\r
    carY <span class="token operator">=</span> newY<span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'C'</span><span class="token punctuation">;</span>\r
    moves<span class="token operator">++</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Win check</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>carX <span class="token operator">==</span> <span class="token number">9</span> <span class="token operator">&amp;&amp;</span> carY <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">)</span>\r
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token function">initGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token function">drawGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">char</span> input <span class="token operator">=</span> <span class="token function">_getch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token keyword">if</span> <span class="token punctuation">(</span>input <span class="token operator">==</span> <span class="token char">'w'</span> <span class="token operator">||</span> input <span class="token operator">==</span> <span class="token char">'a'</span> <span class="token operator">||</span> input <span class="token operator">==</span> <span class="token char">'s'</span> <span class="token operator">||</span> input <span class="token operator">==</span> <span class="token char">'d'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token keyword">bool</span> success <span class="token operator">=</span> <span class="token function">moveCar</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token function">drawGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                cout <span class="token operator">&lt;&lt;</span> <span class="token string">"🎉 You parked the car successfully in "</span> <span class="token operator">&lt;&lt;</span> moves <span class="token operator">&lt;&lt;</span> <span class="token string">" moves!"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
                <span class="token keyword">break</span><span class="token punctuation">;</span>\r
            <span class="token punctuation">}</span>\r
        <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span>\r
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🧩 Possible Extensions (Future Scope)</strong></h2>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>SFML GUI version:</strong>&nbsp;Replace text with sprites (car,\r
                    obstacles, parking spot).</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Timer + Score System:</strong>&nbsp;Bonus points for fast\r
                    parking.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Levels:</strong>&nbsp;Increase obstacle density or larger maps.\r
                </p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Reverse gear mechanic:</strong>&nbsp;Limited backward movement.\r
                </p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Sounds:</strong>&nbsp;Engine, horn, success chime.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Mobile Touch Support:</strong>&nbsp;SDL2/Android port.</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2><strong>⏱️ Timer + 🎯 Scoring System Design</strong></h2>\r
        <p class="ds-markdown-paragraph">We&rsquo;ll:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Track completion time.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Reward faster completions with higher scores.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Use&nbsp;<code>chrono</code>&nbsp;for timing.</p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph"><strong>Score\r
                Formula:</strong><br /><code>score = max(1000 - (moves * 10 + time_in_seconds * 5), 0)</code><br /><em>(Encourages\r
                fewer moves and quick decisions.)</em></p>\r
        <hr />\r
        <h2><strong>🚗 Updated C++ Code with Timer + Score</strong></h2>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">cpp</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;chrono&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span>  <span class="token comment">// For _getch() on Windows</span></span>\r
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\r
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token double-colon punctuation">::</span>chrono<span class="token punctuation">;</span>\r
\r
<span class="token keyword">const</span> <span class="token keyword">int</span> SIZE <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\r
<span class="token keyword">char</span> grid<span class="token punctuation">[</span>SIZE<span class="token punctuation">]</span><span class="token punctuation">[</span>SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>\r
<span class="token keyword">int</span> carX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> carY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
<span class="token keyword">int</span> moves <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">void</span> <span class="token function">initGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\r
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>\r
            grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'.'</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Place some obstacles</span>\r
    grid<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Parking spot</span>\r
    grid<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'P'</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Car start</span>\r
    carX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
    carY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'C'</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">void</span> <span class="token function">drawGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">"cls"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Clear screen (Windows)</span>\r
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            cout <span class="token operator">&lt;&lt;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token char">' '</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span>\r
        cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Moves: "</span> <span class="token operator">&lt;&lt;</span> moves <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Use W A S D to move the car."</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">bool</span> <span class="token function">moveCar</span><span class="token punctuation">(</span><span class="token keyword">char</span> dir<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">int</span> newX <span class="token operator">=</span> carX<span class="token punctuation">,</span> newY <span class="token operator">=</span> carY<span class="token punctuation">;</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token char">'w'</span><span class="token punctuation">)</span> newX<span class="token operator">--</span><span class="token punctuation">;</span>\r
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token char">'s'</span><span class="token punctuation">)</span> newX<span class="token operator">++</span><span class="token punctuation">;</span>\r
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token char">'a'</span><span class="token punctuation">)</span> newY<span class="token operator">--</span><span class="token punctuation">;</span>\r
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token char">'d'</span><span class="token punctuation">)</span> newY<span class="token operator">++</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Bounds check</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newX <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> newX <span class="token operator">&gt;=</span> SIZE <span class="token operator">||</span> newY <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> newY <span class="token operator">&gt;=</span> SIZE<span class="token punctuation">)</span>\r
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Obstacle check</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>newX<span class="token punctuation">]</span><span class="token punctuation">[</span>newY<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'#'</span><span class="token punctuation">)</span>\r
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Move car</span>\r
    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'.'</span><span class="token punctuation">;</span>\r
    carX <span class="token operator">=</span> newX<span class="token punctuation">;</span>\r
    carY <span class="token operator">=</span> newY<span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'C'</span><span class="token punctuation">;</span>\r
    moves<span class="token operator">++</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Win check</span>\r
    <span class="token keyword">return</span> <span class="token punctuation">(</span>carX <span class="token operator">==</span> <span class="token number">9</span> <span class="token operator">&amp;&amp;</span> carY <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">int</span> <span class="token function">calculateScore</span><span class="token punctuation">(</span><span class="token keyword">int</span> moves<span class="token punctuation">,</span> <span class="token keyword">int</span> timeTakenSec<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">int</span> rawScore <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">-</span> <span class="token punctuation">(</span>moves <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> timeTakenSec <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token keyword">return</span> <span class="token function">max</span><span class="token punctuation">(</span>rawScore<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Score should not go below 0</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token function">initGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token function">drawGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Start timer</span>\r
    <span class="token keyword">auto</span> startTime <span class="token operator">=</span> high_resolution_clock<span class="token double-colon punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">char</span> input <span class="token operator">=</span> <span class="token function">_getch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token keyword">if</span> <span class="token punctuation">(</span>input <span class="token operator">==</span> <span class="token char">'w'</span> <span class="token operator">||</span> input <span class="token operator">==</span> <span class="token char">'a'</span> <span class="token operator">||</span> input <span class="token operator">==</span> <span class="token char">'s'</span> <span class="token operator">||</span> input <span class="token operator">==</span> <span class="token char">'d'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token keyword">bool</span> success <span class="token operator">=</span> <span class="token function">moveCar</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token function">drawGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                <span class="token comment">// Stop timer</span>\r
                <span class="token keyword">auto</span> endTime <span class="token operator">=</span> high_resolution_clock<span class="token double-colon punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                <span class="token keyword">auto</span> duration <span class="token operator">=</span> <span class="token generic-function"><span class="token function">duration_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                <span class="token keyword">int</span> timeTaken <span class="token operator">=</span> duration<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
                <span class="token keyword">int</span> finalScore <span class="token operator">=</span> <span class="token function">calculateScore</span><span class="token punctuation">(</span>moves<span class="token punctuation">,</span> timeTaken<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
                cout <span class="token operator">&lt;&lt;</span> <span class="token string">"🎉 You parked the car successfully!\\n"</span><span class="token punctuation">;</span>\r
                cout <span class="token operator">&lt;&lt;</span> <span class="token string">"🕒 Time Taken: "</span> <span class="token operator">&lt;&lt;</span> timeTaken <span class="token operator">&lt;&lt;</span> <span class="token string">" seconds\\n"</span><span class="token punctuation">;</span>\r
                cout <span class="token operator">&lt;&lt;</span> <span class="token string">"🔢 Moves Used: "</span> <span class="token operator">&lt;&lt;</span> moves <span class="token operator">&lt;&lt;</span> <span class="token string">"\\n"</span><span class="token punctuation">;</span>\r
                cout <span class="token operator">&lt;&lt;</span> <span class="token string">"🏆 Final Score: "</span> <span class="token operator">&lt;&lt;</span> finalScore <span class="token operator">&lt;&lt;</span> <span class="token string">"/1000\\n"</span><span class="token punctuation">;</span>\r
                <span class="token keyword">break</span><span class="token punctuation">;</span>\r
            <span class="token punctuation">}</span>\r
        <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span>\r
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🎮 SFML-Based Graphics Version</strong></h2>\r
        <h3><strong>🧰 Requirements</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>SFML Installed</strong></p>\r
                <ul>\r
                    <li>\r
                        <p class="ds-markdown-paragraph">\r
                            <strong>Linux:</strong>&nbsp;<code>sudo apt-get install libsfml-dev</code></p>\r
                    </li>\r
                    <li>\r
                        <p class="ds-markdown-paragraph"><strong>Windows/Mac:</strong>&nbsp;Use vcpkg or SFML installer.\r
                        </p>\r
                    </li>\r
                </ul>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph"><strong>Compile with:</strong></p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">bash</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre>g++ car_parking_sfml.cpp <span class="token parameter variable">-o</span> game -lsfml-graphics -lsfml-window -lsfml-system</pre>\r
        </div>\r
        <h3><strong>🧾 Full SFML C++ Code</strong></h3>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">cpp</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;SFML/Graphics.hpp&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;SFML/Window.hpp&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>\r
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;chrono&gt;</span></span>\r
\r
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\r
<span class="token keyword">using</span> <span class="token keyword">namespace</span> sf<span class="token punctuation">;</span>\r
<span class="token keyword">using</span> <span class="token keyword">namespace</span> chrono<span class="token punctuation">;</span>\r
\r
<span class="token keyword">const</span> <span class="token keyword">int</span> GRID_SIZE <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\r
<span class="token keyword">const</span> <span class="token keyword">int</span> TILE_SIZE <span class="token operator">=</span> <span class="token number">64</span><span class="token punctuation">;</span>\r
<span class="token keyword">int</span> carX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> carY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
<span class="token keyword">int</span> moves <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
<span class="token keyword">bool</span> gameFinished <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\r
\r
vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token operator">&gt;&gt;</span> <span class="token function">grid</span><span class="token punctuation">(</span>GRID_SIZE<span class="token punctuation">,</span> <span class="token generic-function"><span class="token function">vector</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>GRID_SIZE<span class="token punctuation">,</span> <span class="token char">'.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token keyword">void</span> <span class="token function">initGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token comment">// Place obstacles</span>\r
    grid<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
    grid<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'#'</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Parking spot</span>\r
    grid<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'P'</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Car start</span>\r
    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'C'</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">int</span> <span class="token function">calculateScore</span><span class="token punctuation">(</span><span class="token keyword">int</span> moves<span class="token punctuation">,</span> <span class="token keyword">int</span> timeTakenSec<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">int</span> rawScore <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">-</span> <span class="token punctuation">(</span>moves <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> timeTakenSec <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token keyword">return</span> <span class="token function">max</span><span class="token punctuation">(</span>rawScore<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    RenderWindow <span class="token function">window</span><span class="token punctuation">(</span><span class="token function">VideoMode</span><span class="token punctuation">(</span>GRID_SIZE <span class="token operator">*</span> TILE_SIZE<span class="token punctuation">,</span> GRID_SIZE <span class="token operator">*</span> TILE_SIZE <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"🚗 Car Parking Master (SFML)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    Font font<span class="token punctuation">;</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>font<span class="token punctuation">.</span><span class="token function">loadFromFile</span><span class="token punctuation">(</span><span class="token string">"arial.ttf"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Font loading failed!"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\r
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token function">initGrid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    RectangleShape <span class="token function">car</span><span class="token punctuation">(</span><span class="token function">Vector2f</span><span class="token punctuation">(</span>TILE_SIZE <span class="token operator">-</span> <span class="token number">8</span><span class="token punctuation">,</span> TILE_SIZE <span class="token operator">-</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    car<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>Blue<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    RectangleShape <span class="token function">obstacle</span><span class="token punctuation">(</span><span class="token function">Vector2f</span><span class="token punctuation">(</span>TILE_SIZE<span class="token punctuation">,</span> TILE_SIZE<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    obstacle<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>Red<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    RectangleShape <span class="token function">parking</span><span class="token punctuation">(</span><span class="token function">Vector2f</span><span class="token punctuation">(</span>TILE_SIZE<span class="token punctuation">,</span> TILE_SIZE<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    parking<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>Green<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token comment">// Start the timer</span>\r
    <span class="token keyword">auto</span> startTime <span class="token operator">=</span> high_resolution_clock<span class="token double-colon punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
    <span class="token keyword">while</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">isOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        Event event<span class="token punctuation">;</span>\r
        <span class="token keyword">while</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">pollEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">==</span> Event<span class="token double-colon punctuation">::</span>Closed<span class="token punctuation">)</span>\r
                window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gameFinished <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>type <span class="token operator">==</span> Event<span class="token double-colon punctuation">::</span>KeyPressed<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                <span class="token keyword">int</span> newX <span class="token operator">=</span> carX<span class="token punctuation">,</span> newY <span class="token operator">=</span> carY<span class="token punctuation">;</span>\r
\r
                <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key<span class="token punctuation">.</span>code <span class="token operator">==</span> Keyboard<span class="token double-colon punctuation">::</span>Up<span class="token punctuation">)</span> newX<span class="token operator">--</span><span class="token punctuation">;</span>\r
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key<span class="token punctuation">.</span>code <span class="token operator">==</span> Keyboard<span class="token double-colon punctuation">::</span>Down<span class="token punctuation">)</span> newX<span class="token operator">++</span><span class="token punctuation">;</span>\r
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key<span class="token punctuation">.</span>code <span class="token operator">==</span> Keyboard<span class="token double-colon punctuation">::</span>Left<span class="token punctuation">)</span> newY<span class="token operator">--</span><span class="token punctuation">;</span>\r
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key<span class="token punctuation">.</span>code <span class="token operator">==</span> Keyboard<span class="token double-colon punctuation">::</span>Right<span class="token punctuation">)</span> newY<span class="token operator">++</span><span class="token punctuation">;</span>\r
\r
                <span class="token keyword">if</span> <span class="token punctuation">(</span>newX <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> newX <span class="token operator">&lt;</span> GRID_SIZE <span class="token operator">&amp;&amp;</span> newY <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> newY <span class="token operator">&lt;</span> GRID_SIZE <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>newX<span class="token punctuation">]</span><span class="token punctuation">[</span>newY<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">'#'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'.'</span><span class="token punctuation">;</span>\r
                    carX <span class="token operator">=</span> newX<span class="token punctuation">;</span>\r
                    carY <span class="token operator">=</span> newY<span class="token punctuation">;</span>\r
                    grid<span class="token punctuation">[</span>carX<span class="token punctuation">]</span><span class="token punctuation">[</span>carY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'C'</span><span class="token punctuation">;</span>\r
                    moves<span class="token operator">++</span><span class="token punctuation">;</span>\r
\r
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>carX <span class="token operator">==</span> <span class="token number">9</span> <span class="token operator">&amp;&amp;</span> carY <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                        gameFinished <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\r
                    <span class="token punctuation">}</span>\r
                <span class="token punctuation">}</span>\r
            <span class="token punctuation">}</span>\r
        <span class="token punctuation">}</span>\r
\r
        window<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>Black<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        <span class="token comment">// Draw grid</span>\r
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> GRID_SIZE<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> GRID_SIZE<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                RectangleShape <span class="token function">tile</span><span class="token punctuation">(</span><span class="token function">Vector2f</span><span class="token punctuation">(</span>TILE_SIZE <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span> TILE_SIZE <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                tile<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>j <span class="token operator">*</span> TILE_SIZE<span class="token punctuation">,</span> i <span class="token operator">*</span> TILE_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                tile<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span><span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
                <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'#'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                    obstacle<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>j <span class="token operator">*</span> TILE_SIZE<span class="token punctuation">,</span> i <span class="token operator">*</span> TILE_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                    window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>obstacle<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'P'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
                    parking<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>j <span class="token operator">*</span> TILE_SIZE<span class="token punctuation">,</span> i <span class="token operator">*</span> TILE_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                    window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>parking<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
                <span class="token punctuation">}</span>\r
\r
                window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>tile<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token punctuation">}</span>\r
        <span class="token punctuation">}</span>\r
\r
        <span class="token comment">// Draw car</span>\r
        car<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>carY <span class="token operator">*</span> TILE_SIZE <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">,</span> carX <span class="token operator">*</span> TILE_SIZE <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        <span class="token comment">// Show moves and score</span>\r
        Text infoText<span class="token punctuation">;</span>\r
        infoText<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>font<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        infoText<span class="token punctuation">.</span><span class="token function">setCharacterSize</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        infoText<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span>Color<span class="token double-colon punctuation">::</span>White<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        <span class="token keyword">if</span> <span class="token punctuation">(</span>gameFinished<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token keyword">auto</span> endTime <span class="token operator">=</span> high_resolution_clock<span class="token double-colon punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token keyword">auto</span> duration <span class="token operator">=</span> <span class="token generic-function"><span class="token function">duration_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token keyword">int</span> timeTaken <span class="token operator">=</span> duration<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
            <span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token function">calculateScore</span><span class="token punctuation">(</span>moves<span class="token punctuation">,</span> timeTaken<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
            infoText<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token string">"🎉 Parked in "</span> <span class="token operator">+</span> <span class="token function">to_string</span><span class="token punctuation">(</span>moves<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" moves, "</span> <span class="token operator">+</span>\r
                               <span class="token function">to_string</span><span class="token punctuation">(</span>timeTaken<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" sec\\n🏆 Score: "</span> <span class="token operator">+</span> <span class="token function">to_string</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\r
            infoText<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token string">"Moves: "</span> <span class="token operator">+</span> <span class="token function">to_string</span><span class="token punctuation">(</span>moves<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        <span class="token punctuation">}</span>\r
\r
        infoText<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> GRID_SIZE <span class="token operator">*</span> TILE_SIZE <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
        window<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>infoText<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
        window<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>📂 Assets Needed</strong></h2>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Font:</strong>&nbsp;Save&nbsp;<code>arial.ttf</code>&nbsp;in\r
                    the same folder.</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2><strong>🚀 What&rsquo;s Next?</strong></h2>\r
        <div class="markdown-table-wrapper">\r
            <table>\r
                <thead>\r
                    <tr>\r
                        <th>Feature</th>\r
                        <th>Description</th>\r
                    </tr>\r
                </thead>\r
                <tbody>\r
                    <tr>\r
                        <td><strong>🚗 Car Sprites</strong></td>\r
                        <td>Replace rectangles with car images.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>📦 Random Obstacles</strong></td>\r
                        <td>Generate dynamic levels.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>🧠 AI Opponent</strong></td>\r
                        <td>Race against a bot.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>🎵 Sound Effects</strong></td>\r
                        <td>Add engine sounds, honks, and success jingles.</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>🌐 Level Loader</strong></td>\r
                        <td>Load maps from files.</td>\r
                    </tr>\r
                </tbody>\r
            </table>\r
        </div>\r
        <hr />\r
        <h3><strong>🎨 Want More?</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Custom graphics?</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Sound effects?</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Multiplayer mode?</strong></p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph">Let me know what you'd like to see next in&nbsp;<em>Car Parking\r
                Master!</em>&nbsp;🚗💨</p>\r
    </article>\r
</body>\r
\r
</html>`,Zh=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
<body>\r
    <article>\r
        <h2 data-start="279" data-end="330"><strong data-start="297" data-end="330">&ldquo;Farm Frenzy: Harvest &amp; Grow&rdquo;</strong></h2>\r
<hr data-start="332" data-end="335" />\r
<h2 data-start="337" data-end="361">🎯 <strong data-start="343" data-end="361">Game Objective</strong></h2>\r
<p data-start="362" data-end="387">You're a farmer who must:</p>\r
<ul data-start="388" data-end="483">\r
<li data-start="388" data-end="406">\r
<p data-start="390" data-end="406">Plant crops 🌱</p>\r
</li>\r
<li data-start="407" data-end="426">\r
<p data-start="409" data-end="426">Feed animals 🐄</p>\r
</li>\r
<li data-start="427" data-end="459">\r
<p data-start="429" data-end="459">Harvest and sell products 🧺</p>\r
</li>\r
<li data-start="460" data-end="483">\r
<p data-start="462" data-end="483">Expand your farm 🌾</p>\r
</li>\r
</ul>\r
<p data-start="485" data-end="542">All while managing <strong data-start="504" data-end="534">time, money, and resources</strong> wisely.</p>\r
<hr data-start="544" data-end="547" />\r
<h2 data-start="549" data-end="577">🧱 <strong data-start="555" data-end="577">Core Game Features</strong></h2>\r
<div class="_tableContainer_80l1q_1">\r
<div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
<table class="w-fit min-w-(--thread-content-width)" data-start="579" data-end="1022">\r
<thead data-start="579" data-end="617">\r
<tr data-start="579" data-end="617">\r
<th data-start="579" data-end="602" data-col-size="sm">Feature</th>\r
<th data-start="602" data-end="617" data-col-size="sm">Description</th>\r
</tr>\r
</thead>\r
<tbody data-start="657" data-end="1022">\r
<tr data-start="657" data-end="723">\r
<td data-start="657" data-end="684" data-col-size="sm">🧑&zwj;🌾 Farm Dashboard</td>\r
<td data-start="684" data-end="723" data-col-size="sm">Shows money, weather, and day count</td>\r
</tr>\r
<tr data-start="724" data-end="791">\r
<td data-start="724" data-end="749" data-col-size="sm">🌱 Crop Management</td>\r
<td data-start="749" data-end="791" data-col-size="sm">Plant seeds, water them, wait, harvest</td>\r
</tr>\r
<tr data-start="792" data-end="858">\r
<td data-start="792" data-end="817" data-col-size="sm">🐄 Animal Management</td>\r
<td data-start="817" data-end="858" data-col-size="sm">Feed cows/chickens, collect milk/eggs</td>\r
</tr>\r
<tr data-start="859" data-end="911">\r
<td data-start="859" data-end="884" data-col-size="sm">🛒 Market System</td>\r
<td data-start="884" data-end="911" data-col-size="sm">Sell products for money</td>\r
</tr>\r
<tr data-start="912" data-end="957">\r
<td data-start="912" data-end="936" data-col-size="sm">⏳ Time Progression</td>\r
<td data-start="936" data-end="957" data-col-size="sm">Each turn = 1 day</td>\r
</tr>\r
<tr data-start="958" data-end="1022">\r
<td data-start="958" data-end="983" data-col-size="sm">💰 Resource Strategy</td>\r
<td data-start="983" data-end="1022" data-col-size="sm">Use money to buy more seeds/animals</td>\r
</tr>\r
</tbody>\r
</table>\r
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
</div>\r
</div>\r
<hr data-start="1024" data-end="1027" />\r
<h2 data-start="1029" data-end="1075">📘 Basic Version: Console-based Game in C++</h2>\r
<h3 data-start="1077" data-end="1122">🧾 Sample Code Overview (<code data-start="1106" data-end="1121">farm_game.cpp</code>)</h3>\r
<div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">cpp</div>\r
<div class="sticky top-9">\r
<div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
<div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none py-1">Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
</div>\r
</div>\r
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;iostream&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;vector&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;string&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;cstdlib&gt;</span> <span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> std; <span class="hljs-keyword">struct</span> <span class="hljs-title class_">Crop</span> { string name; <span class="hljs-type">int</span> daysToGrow; <span class="hljs-type">int</span> currentDay; <span class="hljs-type">int</span> value; <span class="hljs-type">bool</span> isHarvested = <span class="hljs-literal">false</span>; }; <span class="hljs-keyword">struct</span> <span class="hljs-title class_">Animal</span> { string type; <span class="hljs-type">int</span> feedRequired; <span class="hljs-type">bool</span> isFed = <span class="hljs-literal">false</span>; <span class="hljs-type">int</span> productValue; }; <span class="hljs-function"><span class="hljs-type">int</span></span> <span class="hljs-title">main</span><span class="hljs-params">()</span> { <span class="hljs-type">int</span> money = <span class="hljs-number">100</span>; <span class="hljs-type">int</span> day = <span class="hljs-number">1</span>; vector&lt;Crop&gt; crops; vector&lt;Animal&gt; animals; cout &lt;&lt; <span class="hljs-string">"🚜 Welcome to Farm Frenzy!\\n"</span>; <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) { cout &lt;&lt; <span class="hljs-string">"\\n📅 Day "</span> &lt;&lt; day &lt;&lt; <span class="hljs-string">" | 💰 Money: $"</span> &lt;&lt; money &lt;&lt; <span class="hljs-string">"\\n"</span>; cout &lt;&lt; <span class="hljs-string">"1. Plant Crop\\n2. Water Crops\\n3. Harvest Crops\\n4. Buy Animal\\n5. Feed Animals\\n6. Sell Products\\n7. End Day\\n8. Exit\\nChoose: "</span>; <span class="hljs-type">int</span> choice; cin &gt;&gt; choice; <span class="hljs-keyword">if</span> (choice == <span class="hljs-number">1</span>) { cout &lt;&lt; <span class="hljs-string">"Choose crop:\\n1. Carrot ($10)\\n2. Wheat ($15)\\n"</span>; <span class="hljs-type">int</span> c; cin &gt;&gt; c; <span class="hljs-keyword">if</span> (c == <span class="hljs-number">1</span> &amp;&amp; money &gt;= <span class="hljs-number">10</span>) { crops.<span class="hljs-built_in">push_back</span>({<span class="hljs-string">"Carrot"</span>, <span class="hljs-number">3</span>, <span class="hljs-number">0</span>, <span class="hljs-number">25</span>}); money -= <span class="hljs-number">10</span>; } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (c == <span class="hljs-number">2</span> &amp;&amp; money &gt;= <span class="hljs-number">15</span>) { crops.<span class="hljs-built_in">push_back</span>({<span class="hljs-string">"Wheat"</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">40</span>}); money -= <span class="hljs-number">15</span>; } <span class="hljs-keyword">else</span> { cout &lt;&lt; <span class="hljs-string">"❌ Not enough money.\\n"</span>; } } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (choice == <span class="hljs-number">2</span>) { <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span>&amp; crop : crops) { <span class="hljs-keyword">if</span> (!crop.isHarvested &amp;&amp; crop.currentDay &lt; crop.daysToGrow) crop.currentDay++; } cout &lt;&lt; <span class="hljs-string">"🪣 Crops watered.\\n"</span>; } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (choice == <span class="hljs-number">3</span>) { <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span>&amp; crop : crops) { <span class="hljs-keyword">if</span> (crop.currentDay &gt;= crop.daysToGrow &amp;&amp; !crop.isHarvested) { crop.isHarvested = <span class="hljs-literal">true</span>; cout &lt;&lt; <span class="hljs-string">"✅ Harvested "</span> &lt;&lt; crop.name &lt;&lt; <span class="hljs-string">"\\n"</span>; } } } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (choice == <span class="hljs-number">4</span>) { cout &lt;&lt; <span class="hljs-string">"Choose animal:\\n1. Cow ($50)\\n2. Chicken ($20)\\n"</span>; <span class="hljs-type">int</span> a; cin &gt;&gt; a; <span class="hljs-keyword">if</span> (a == <span class="hljs-number">1</span> &amp;&amp; money &gt;= <span class="hljs-number">50</span>) { animals.<span class="hljs-built_in">push_back</span>({<span class="hljs-string">"Cow"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">false</span>, <span class="hljs-number">30</span>}); money -= <span class="hljs-number">50</span>; } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (a == <span class="hljs-number">2</span> &amp;&amp; money &gt;= <span class="hljs-number">20</span>) { animals.<span class="hljs-built_in">push_back</span>({<span class="hljs-string">"Chicken"</span>, <span class="hljs-number">1</span>, <span class="hljs-literal">false</span>, <span class="hljs-number">10</span>}); money -= <span class="hljs-number">20</span>; } <span class="hljs-keyword">else</span> { cout &lt;&lt; <span class="hljs-string">"❌ Not enough money.\\n"</span>; } } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (choice == <span class="hljs-number">5</span>) { <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span>&amp; animal : animals) { animal.isFed = <span class="hljs-literal">true</span>; } cout &lt;&lt; <span class="hljs-string">"🐄 All animals fed.\\n"</span>; } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (choice == <span class="hljs-number">6</span>) { <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span>&amp; crop : crops) { <span class="hljs-keyword">if</span> (crop.isHarvested) { money += crop.value; cout &lt;&lt; <span class="hljs-string">"Sold "</span> &lt;&lt; crop.name &lt;&lt; <span class="hljs-string">" for $"</span> &lt;&lt; crop.value &lt;&lt; endl; crop.isHarvested = <span class="hljs-literal">false</span>; } } <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span>&amp; animal : animals) { <span class="hljs-keyword">if</span> (animal.isFed) { money += animal.productValue; cout &lt;&lt; <span class="hljs-string">"Collected from "</span> &lt;&lt; animal.type &lt;&lt; <span class="hljs-string">": $"</span> &lt;&lt; animal.productValue &lt;&lt; endl; animal.isFed = <span class="hljs-literal">false</span>; } } } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (choice == <span class="hljs-number">7</span>) { day++; } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (choice == <span class="hljs-number">8</span>) { cout &lt;&lt; <span class="hljs-string">"👋 Thanks for playing Farm Frenzy!\\n"</span>; <span class="hljs-keyword">break</span>; } <span class="hljs-keyword">else</span> { cout &lt;&lt; <span class="hljs-string">"Invalid option.\\n"</span>; } } <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>; } </code></div>\r
</div>\r
<hr data-start="4457" data-end="4460" />\r
<h2 data-start="4462" data-end="4496">🧠 Real-Life Examples Simulated</h2>\r
<div class="_tableContainer_80l1q_1">\r
<div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
<table class="w-fit min-w-(--thread-content-width)" data-start="4498" data-end="4840">\r
<thead data-start="4498" data-end="4541">\r
<tr data-start="4498" data-end="4541">\r
<th data-start="4498" data-end="4515" data-col-size="sm">Farm Situation</th>\r
<th data-start="4515" data-end="4541" data-col-size="md">How it appears in-game</th>\r
</tr>\r
</thead>\r
<tbody data-start="4586" data-end="4840">\r
<tr data-start="4586" data-end="4650">\r
<td data-start="4586" data-end="4609" data-col-size="sm">🧑&zwj;🌾 Daily routines</td>\r
<td data-start="4609" data-end="4650" data-col-size="md">Watering crops, feeding animals daily</td>\r
</tr>\r
<tr data-start="4651" data-end="4718">\r
<td data-start="4651" data-end="4674" data-col-size="sm">🌾 Crop growth cycle</td>\r
<td data-start="4674" data-end="4718" data-col-size="md">Wait for crops to grow before harvesting</td>\r
</tr>\r
<tr data-start="4719" data-end="4775">\r
<td data-start="4719" data-end="4741" data-col-size="sm">💸 Market economics</td>\r
<td data-start="4741" data-end="4775" data-col-size="md">Sell milk/eggs/crops for money</td>\r
</tr>\r
<tr data-start="4776" data-end="4840">\r
<td data-start="4776" data-end="4793" data-col-size="sm">🐔 Animal care</td>\r
<td data-start="4793" data-end="4840" data-col-size="md">Animals need daily feeding to be productive</td>\r
</tr>\r
</tbody>\r
</table>\r
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
</div>\r
</div>\r
<hr data-start="4842" data-end="4845" />\r
<h2 data-start="4847" data-end="4881">🎉 Fun Farming Facts to Display</h2>\r
<div class="_tableContainer_80l1q_1">\r
<div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
<table class="w-fit min-w-(--thread-content-width)" data-start="4883" data-end="5256">\r
<thead data-start="4883" data-end="4906">\r
<tr data-start="4883" data-end="4906">\r
<th data-start="4883" data-end="4890" data-col-size="md">Fact</th>\r
<th data-start="4890" data-end="4906" data-col-size="sm">When to Show</th>\r
</tr>\r
</thead>\r
<tbody data-start="4931" data-end="5256">\r
<tr data-start="4931" data-end="5019">\r
<td data-start="4931" data-end="4996" data-col-size="md">🌽 Corn was first domesticated in Mexico over 9,000 years ago.</td>\r
<td data-start="4996" data-end="5019" data-col-size="sm">After planting corn</td>\r
</tr>\r
<tr data-start="5020" data-end="5098">\r
<td data-start="5020" data-end="5075" data-col-size="md">🐄 Cows can produce up to 8 gallons of milk per day.</td>\r
<td data-start="5075" data-end="5098" data-col-size="sm">After milking a cow</td>\r
</tr>\r
<tr data-start="5099" data-end="5173">\r
<td data-start="5099" data-end="5147" data-col-size="md">🐣 Chickens outnumber humans 3-to-1 globally!</td>\r
<td data-start="5147" data-end="5173" data-col-size="sm">When you buy a chicken</td>\r
</tr>\r
<tr data-start="5174" data-end="5256">\r
<td data-start="5174" data-end="5214" data-col-size="md">🌱 Plants grow faster in greenhouses.</td>\r
<td data-start="5214" data-end="5256" data-col-size="sm">Future enhancement: Greenhouse feature</td>\r
</tr>\r
</tbody>\r
</table>\r
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
</div>\r
</div>\r
<hr data-start="5258" data-end="5261" />\r
<h2 data-start="5263" data-end="5301">🧠 Problem-Solving Skills Practiced</h2>\r
<div class="_tableContainer_80l1q_1">\r
<div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
<table class="w-fit min-w-(--thread-content-width)" data-start="5303" data-end="5606">\r
<thead data-start="5303" data-end="5331">\r
<tr data-start="5303" data-end="5331">\r
<th data-start="5303" data-end="5311" data-col-size="sm">Skill</th>\r
<th data-start="5311" data-end="5331" data-col-size="md">In-Game Activity</th>\r
</tr>\r
</thead>\r
<tbody data-start="5361" data-end="5606">\r
<tr data-start="5361" data-end="5414">\r
<td data-start="5361" data-end="5382" data-col-size="sm">⏱️ Time Management</td>\r
<td data-start="5382" data-end="5414" data-col-size="md">Choosing what to do each day</td>\r
</tr>\r
<tr data-start="5415" data-end="5474">\r
<td data-start="5415" data-end="5430" data-col-size="sm">💵 Budgeting</td>\r
<td data-start="5430" data-end="5474" data-col-size="md">Deciding between buying animals or seeds</td>\r
</tr>\r
<tr data-start="5475" data-end="5534">\r
<td data-start="5475" data-end="5499" data-col-size="sm">📈 Strategic Planning</td>\r
<td data-start="5499" data-end="5534" data-col-size="md">Investing now for future profit</td>\r
</tr>\r
<tr data-start="5535" data-end="5606">\r
<td data-start="5535" data-end="5560" data-col-size="sm">🔄 Resource Allocation</td>\r
<td data-start="5560" data-end="5606" data-col-size="md">Prioritizing watering, feeding, or selling</td>\r
</tr>\r
</tbody>\r
</table>\r
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
</div>\r
</div>\r
<hr data-start="5608" data-end="5611" />\r
<h2 data-start="5613" data-end="5639">🚀 Further Enhancements</h2>\r
<h3 data-start="5641" data-end="5661">🎮 Game Features</h3>\r
<ul data-start="5662" data-end="5856">\r
<li data-start="5662" data-end="5707">\r
<p data-start="5664" data-end="5707">🌧️ Weather system (rain auto-waters crops)</p>\r
</li>\r
<li data-start="5708" data-end="5733">\r
<p data-start="5710" data-end="5733">💉 Animal health system</p>\r
</li>\r
<li data-start="5734" data-end="5783">\r
<p data-start="5736" data-end="5783">🎁 Random events (flood, disease, good harvest)</p>\r
</li>\r
<li data-start="5784" data-end="5809">\r
<p data-start="5786" data-end="5809">📦 Inventory management</p>\r
</li>\r
<li data-start="5810" data-end="5856">\r
<p data-start="5812" data-end="5856">💼 Farm upgrades (barn, irrigation, tractor)</p>\r
</li>\r
</ul>\r
<h3 data-start="5858" data-end="5878">📊 Tech Upgrades</h3>\r
<ul data-start="5879" data-end="6007">\r
<li data-start="5879" data-end="5906">\r
<p data-start="5881" data-end="5906">GUI version with <strong data-start="5898" data-end="5906">SFML</strong></p>\r
</li>\r
<li data-start="5907" data-end="5937">\r
<p data-start="5909" data-end="5937">Save/load system using files</p>\r
</li>\r
<li data-start="5938" data-end="5968">\r
<p data-start="5940" data-end="5968">Sound effects and animations</p>\r
</li>\r
<li data-start="5969" data-end="6007">\r
<p data-start="5971" data-end="6007">Multiple farms (desert, hill, river)</p>\r
</li>\r
</ul>\r
<h3 data-start="6009" data-end="6035">🌐 Educational Tie-ins</h3>\r
<ul data-start="6036" data-end="6160">\r
<li data-start="6036" data-end="6074">\r
<p data-start="6038" data-end="6074">Add a <strong data-start="6044" data-end="6074">real-life crop facts panel</strong></p>\r
</li>\r
<li data-start="6075" data-end="6118">\r
<p data-start="6077" data-end="6118">Link crop cycle durations to real biology</p>\r
</li>\r
<li data-start="6119" data-end="6160">\r
<p data-start="6121" data-end="6160">Explain supply/demand in pricing system</p>\r
</li>\r
</ul>\r
    </article>\r
</body>\r
</html>`,Qh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <p><strong>Title: Building Farm Frenzy: A GUI-Based Farm Game in C++ with SFML</strong></p>\r
        <p><strong>Introduction</strong></p>\r
        <p>What if you could bring the joy of farming to your screen using just C++ and a bit of graphics? Welcome to\r
            <strong>Farm Frenzy</strong>, a simple but engaging GUI-based farm simulation game developed in C++ using\r
            the <strong>SFML (Simple and Fast Multimedia Library)</strong>. This project combines basic object-oriented\r
            programming principles, GUI handling, and fun gameplay to simulate crop growing, harvesting, and resource\r
            management in a visually interactive way.</p>\r
        <hr />\r
        <p><strong>Why a Farming Game?</strong></p>\r
        <p>Farming simulation games are beloved across the globe for their relaxing gameplay and rewarding mechanics.\r
            From Stardew Valley to Farmville, they blend creativity with resource management. Farm Frenzy simplifies\r
            this concept for beginners in C++ and game development, focusing on planting, watering, harvesting, and\r
            money management.</p>\r
        <hr />\r
        <p><strong>Tools Used</strong></p>\r
        <ul>\r
            <li>\r
                <p><strong>Language:</strong> C++</p>\r
            </li>\r
            <li>\r
                <p><strong>Graphics Library:</strong> SFML (Simple and Fast Multimedia Library)</p>\r
            </li>\r
            <li>\r
                <p><strong>Text Editor/IDE:</strong> Visual Studio Code, Code::Blocks, or any C++-compatible IDE</p>\r
            </li>\r
        </ul>\r
        <p>Ensure SFML is installed and linked correctly, and place a font file like <code>arial.ttf</code> in your\r
            project directory.</p>\r
        <hr />\r
        <p><strong>Game Features Overview</strong></p>\r
        <ul>\r
            <li>\r
                <p><strong>Crop Management:</strong> Plant carrots that take three days to grow</p>\r
            </li>\r
            <li>\r
                <p><strong>Interactive Buttons:</strong> Clickable buttons to plant, water, harvest, and end the day</p>\r
            </li>\r
            <li>\r
                <p><strong>Score System:</strong> Earn money by harvesting crops</p>\r
            </li>\r
            <li>\r
                <p><strong>Day Cycle:</strong> Progress time with a day counter</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <p><strong>How the Game Works</strong></p>\r
        <p>The player starts with $100 and can plant carrots for $10 each. Carrots take 3 days to grow. Each day, the\r
            player can water the crops (to grow them), harvest mature crops (to earn money), and end the day to\r
            progress.</p>\r
        <p>The GUI includes:</p>\r
        <ul>\r
            <li>\r
                <p>A title and information area</p>\r
            </li>\r
            <li>\r
                <p>Interactive buttons (Plant, Water, Harvest, End Day)</p>\r
            </li>\r
            <li>\r
                <p>A crop log area that displays updates</p>\r
            </li>\r
        </ul>\r
        <p>This simulation encourages users to strategize, manage money wisely, and time actions for the most profit.\r
        </p>\r
        <hr />\r
        <p><strong>Code Breakdown</strong></p>\r
        <p>The game uses a structure <code>Crop</code> to represent a plant with its growing time, current state, and\r
            value. SFML&rsquo;s GUI components like <code>RectangleShape</code>, <code>Text</code>, and\r
            <code>Font</code> are used to build the interface.</p>\r
        <p>Here's a brief look at how planting works:</p>\r
        <pre><code class="language-cpp">if (plantButton.getGlobalBounds().contains(mousePos) &amp;&amp; money &gt;= 10) {\r
    crops.push_back({"Carrot", 3, 0, 25});\r
    money -= 10;\r
    logText.setString("Planted a carrot.");\r
}\r
</code></pre>\r
        <p>This snippet checks if the player clicked the Plant button and has enough money, then adds a crop and updates\r
            the log.</p>\r
        <hr />\r
        <p><strong>Real-Life Inspiration &amp; Fun Facts</strong></p>\r
        <ul>\r
            <li>\r
                <p><strong>Real-Life Farming:</strong> Just like real farming, timing and planning matter. You can't\r
                    harvest a crop the day you plant it!</p>\r
            </li>\r
            <li>\r
                <p><strong>Fun Fact:</strong> Carrots were originally purple. Modern orange carrots were cultivated in\r
                    the Netherlands in the 17th century.</p>\r
            </li>\r
            <li>\r
                <p><strong>Economic Thinking:</strong> This game mimics real-life budgeting decisions. Do you spend now\r
                    or save for later?</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <p><strong>Problem-Solving Approach</strong></p>\r
        <p>This game encourages:</p>\r
        <ul>\r
            <li>\r
                <p><strong>Critical Thinking</strong>: Decide the best time to water or harvest.</p>\r
            </li>\r
            <li>\r
                <p><strong>Resource Management</strong>: Spend money wisely.</p>\r
            </li>\r
            <li>\r
                <p><strong>Time Management</strong>: Use limited turns to maximize output.</p>\r
            </li>\r
        </ul>\r
        <p>You can also expand the game with inventory systems, weather patterns, or even livestock.</p>\r
        <hr />\r
        <p><strong>Further Enhancements</strong></p>\r
        <p>Want to take the game further? Here are some ideas:</p>\r
        <ul>\r
            <li>\r
                <p><strong>Multiple Crops</strong>: Add wheat, tomatoes, or corn with different growth cycles and\r
                    values.</p>\r
            </li>\r
            <li>\r
                <p><strong>Weather System</strong>: Rain may automatically water crops; droughts reduce growth.</p>\r
            </li>\r
            <li>\r
                <p><strong>Animations</strong>: Show crops growing or wilting with sprite updates.</p>\r
            </li>\r
            <li>\r
                <p><strong>Sound Effects</strong>: Add background music and action-based sounds.</p>\r
            </li>\r
            <li>\r
                <p><strong>Progress System</strong>: Save/load your farm progress.</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <p><strong>Conclusion</strong></p>\r
        <p>Farm Frenzy is more than just a game; it&rsquo;s a fun way to learn GUI programming and game logic using C++.\r
            By managing virtual crops, players also get a light taste of economics and strategy. Whether you're learning\r
            C++ or looking to build your first game, this project is a great place to plant the seed.</p>\r
        <p><strong>Happy Coding and Farming!</strong></p>\r
    </article>\r
</body>\r
\r
</html>`,Jh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h2 data-start="93" data-end="158">🥗🎮 <strong data-start="101" data-end="158">Buffet Rush &ndash; A C++ Game\r
                Based on a Buffet Experience</strong></h2>\r
        <hr data-start="160" data-end="163" />\r
        <h3 data-start="165" data-end="188">🎯 <strong data-start="172" data-end="188">Game Concept</strong></h3>\r
        <p data-start="190" data-end="565"><strong data-start="190" data-end="207">"Buffet Rush"</strong> is a fun,\r
            text-based or SFML-powered graphical C++ game where the player acts as a customer in a buffet. The goal is\r
            to build the perfect meal tray under time and nutritional constraints&mdash;while also managing cost,\r
            calories, and customer satisfaction. The game introduces logic building, simple AI, and real-life problem\r
            solving in a kitchen-inspired setting.</p>\r
        <hr data-start="567" data-end="570" />\r
        <h3 data-start="572" data-end="601">🧱 <strong data-start="579" data-end="601">Core Game Features</strong></h3>\r
        <ul data-start="603" data-end="853">\r
            <li data-start="603" data-end="640">\r
                <p data-start="605" data-end="640">Choose items from a buffet counter.</p>\r
            </li>\r
            <li data-start="641" data-end="746">\r
                <p data-start="643" data-end="657">Each item has:</p>\r
                <ul data-start="660" data-end="746">\r
                    <li data-start="660" data-end="670">\r
                        <p data-start="662" data-end="670">Calories</p>\r
                    </li>\r
                    <li data-start="673" data-end="679">\r
                        <p data-start="675" data-end="679">Cost</p>\r
                    </li>\r
                    <li data-start="682" data-end="724">\r
                        <p data-start="684" data-end="724">Category (Starter, Main, Dessert, Drink)</p>\r
                    </li>\r
                    <li data-start="727" data-end="746">\r
                        <p data-start="729" data-end="746">Nutritional Value</p>\r
                    </li>\r
                </ul>\r
            </li>\r
            <li data-start="747" data-end="853">\r
                <p data-start="749" data-end="853">User wins if they build a <strong data-start="775"\r
                        data-end="792">balanced tray</strong> (one from each category) under the calorie and budget\r
                    limit.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="855" data-end="858" />\r
        <h3 data-start="860" data-end="905">🖥️ <strong data-start="868" data-end="905">Simple Console Version Code\r
                (C++)</strong></h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;iostream&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;vector&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;string&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;cstdlib&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;ctime&gt;</span> <span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> std; <span class="hljs-keyword">struct</span> <span class="hljs-title class_">Item</span> { string name; string category; <span class="hljs-type">int</span> calories; <span class="hljs-type">float</span> price; }; vector&lt;Item&gt; buffet = { {<span class="hljs-string">"Salad"</span>, <span class="hljs-string">"Starter"</span>, <span class="hljs-number">100</span>, <span class="hljs-number">2.5</span>}, {<span class="hljs-string">"Soup"</span>, <span class="hljs-string">"Starter"</span>, <span class="hljs-number">80</span>, <span class="hljs-number">2.0</span>}, {<span class="hljs-string">"Chicken Curry"</span>, <span class="hljs-string">"Main"</span>, <span class="hljs-number">400</span>, <span class="hljs-number">6.0</span>}, {<span class="hljs-string">"Pasta"</span>, <span class="hljs-string">"Main"</span>, <span class="hljs-number">350</span>, <span class="hljs-number">5.5</span>}, {<span class="hljs-string">"Ice Cream"</span>, <span class="hljs-string">"Dessert"</span>, <span class="hljs-number">200</span>, <span class="hljs-number">3.0</span>}, {<span class="hljs-string">"Fruit Bowl"</span>, <span class="hljs-string">"Dessert"</span>, <span class="hljs-number">120</span>, <span class="hljs-number">2.5</span>}, {<span class="hljs-string">"Soda"</span>, <span class="hljs-string">"Drink"</span>, <span class="hljs-number">150</span>, <span class="hljs-number">1.5</span>}, {<span class="hljs-string">"Water"</span>, <span class="hljs-string">"Drink"</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1.0</span>} }; <span class="hljs-type">float</span> totalCost = <span class="hljs-number">0.0</span>; <span class="hljs-type">int</span> totalCalories = <span class="hljs-number">0</span>; vector&lt;string&gt; categoriesChosen; <span class="hljs-function"><span class="hljs-type">bool</span></span> <span class="hljs-title">categoryAlreadyChosen</span><span class="hljs-params">(string category)</span> { <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span>&amp; cat : categoriesChosen) { <span class="hljs-keyword">if</span> (cat == category) <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>; } <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">displayBuffet</span><span class="hljs-params">()</span> { cout &lt;&lt; <span class="hljs-string">"🥗 Welcome to the Buffet! 🍝\\n\\n"</span>; cout &lt;&lt; <span class="hljs-string">"Items Available:\\n"</span>; <span class="hljs-keyword">for</span> (<span class="hljs-type">size_t</span> i = <span class="hljs-number">0</span>; i &lt; buffet.<span class="hljs-built_in">size</span>(); ++i) { cout &lt;&lt; i + <span class="hljs-number">1</span> &lt;&lt; <span class="hljs-string">". "</span> &lt;&lt; buffet[i].name &lt;&lt; <span class="hljs-string">" ("</span> &lt;&lt; buffet[i].category &lt;&lt; <span class="hljs-string">") - "</span>; cout &lt;&lt; buffet[i].calories &lt;&lt; <span class="hljs-string">" cal, $"</span> &lt;&lt; buffet[i].price &lt;&lt; endl; } cout &lt;&lt; <span class="hljs-string">"\\nPick one from each category: Starter, Main, Dessert, Drink\\n"</span>; } <span class="hljs-function"><span class="hljs-type">int</span></span> <span class="hljs-title">main</span><span class="hljs-params">()</span> { <span class="hljs-built_in">displayBuffet</span>(); <span class="hljs-type">int</span> choice, turns = <span class="hljs-number">0</span>; <span class="hljs-type">const</span> <span class="hljs-type">int</span> calorieLimit = <span class="hljs-number">900</span>; <span class="hljs-type">const</span> <span class="hljs-type">float</span> budget = <span class="hljs-number">12.0</span>; <span class="hljs-keyword">while</span> (categoriesChosen.<span class="hljs-built_in">size</span>() &lt; <span class="hljs-number">4</span>) { cout &lt;&lt; <span class="hljs-string">"\\nChoose an item (1-"</span> &lt;&lt; buffet.<span class="hljs-built_in">size</span>() &lt;&lt; <span class="hljs-string">"): "</span>; cin &gt;&gt; choice; <span class="hljs-keyword">if</span> (choice &lt; <span class="hljs-number">1</span> || choice &gt; buffet.<span class="hljs-built_in">size</span>()) { cout &lt;&lt; <span class="hljs-string">"Invalid choice! Try again."</span>; <span class="hljs-keyword">continue</span>; } Item selected = buffet[choice - <span class="hljs-number">1</span>]; <span class="hljs-keyword">if</span> (<span class="hljs-built_in">categoryAlreadyChosen</span>(selected.category)) { cout &lt;&lt; <span class="hljs-string">"You've already picked a "</span> &lt;&lt; selected.category &lt;&lt; <span class="hljs-string">"!\\n"</span>; <span class="hljs-keyword">continue</span>; } <span class="hljs-keyword">if</span> (totalCost + selected.price &gt; budget) { cout &lt;&lt; <span class="hljs-string">"💸 Over budget! Try a cheaper item.\\n"</span>; <span class="hljs-keyword">continue</span>; } <span class="hljs-keyword">if</span> (totalCalories + selected.calories &gt; calorieLimit) { cout &lt;&lt; <span class="hljs-string">"🔥 Too many calories! Try something lighter.\\n"</span>; <span class="hljs-keyword">continue</span>; } totalCost += selected.price; totalCalories += selected.calories; categoriesChosen.<span class="hljs-built_in">push_back</span>(selected.category); cout &lt;&lt; <span class="hljs-string">"✅ Added: "</span> &lt;&lt; selected.name &lt;&lt; <span class="hljs-string">" ("</span> &lt;&lt; selected.category &lt;&lt; <span class="hljs-string">")\\n"</span>; } cout &lt;&lt; <span class="hljs-string">"\\n🎉 Buffet Tray Completed! 🎉\\n"</span>; cout &lt;&lt; <span class="hljs-string">"Total Calories: "</span> &lt;&lt; totalCalories &lt;&lt; <span class="hljs-string">" cal\\n"</span>; cout &lt;&lt; <span class="hljs-string">"Total Cost: $"</span> &lt;&lt; totalCost &lt;&lt; <span class="hljs-string">"\\n"</span>; <span class="hljs-keyword">if</span> (totalCalories &lt;= calorieLimit &amp;&amp; totalCost &lt;= budget) { cout &lt;&lt; <span class="hljs-string">"😋 You made a healthy and affordable choice!\\n"</span>; } <span class="hljs-keyword">else</span> { cout &lt;&lt; <span class="hljs-string">"⚠️ You overshot your budget/calories. Try again!\\n"</span>; } <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>; } </code>\r
            </div>\r
        </div>\r
        <hr data-start="3625" data-end="3628" />\r
        <h3 data-start="3630" data-end="3656">🍽️ Real-Life Examples</h3>\r
        <ul data-start="3658" data-end="3910">\r
            <li data-start="3658" data-end="3738">\r
                <p data-start="3660" data-end="3738">Buffets often present decision-making challenges&mdash;what to eat\r
                    vs. what to skip.</p>\r
            </li>\r
            <li data-start="3739" data-end="3817">\r
                <p data-start="3741" data-end="3817">People must <strong data-start="3753" data-end="3772">budget\r
                        calories</strong> and <strong data-start="3777" data-end="3793">spend wisely</strong>, much like\r
                    in the game.</p>\r
            </li>\r
            <li data-start="3818" data-end="3910">\r
                <p data-start="3820" data-end="3910"><strong data-start="3820" data-end="3835">Restaurants</strong> use\r
                    similar algorithms for <strong data-start="3863" data-end="3880">menu planning</strong> and <strong\r
                        data-start="3885" data-end="3909">nutritional analysis</strong>.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3912" data-end="3915" />\r
        <h3 data-start="3917" data-end="3933">🤯 Fun Facts</h3>\r
        <ul data-start="3935" data-end="4157">\r
            <li data-start="3935" data-end="4011">\r
                <p data-start="3937" data-end="4011">Las Vegas has more buffet restaurants per square mile than any\r
                    other city.</p>\r
            </li>\r
            <li data-start="4012" data-end="4086">\r
                <p data-start="4014" data-end="4086">The concept of buffets dates back to 16th-century Swedish\r
                    "sm&ouml;rg&aring;sbord."</p>\r
            </li>\r
            <li data-start="4087" data-end="4157">\r
                <p data-start="4089" data-end="4157">The average buffet-goer consumes over 2,000 calories in one\r
                    sitting!</p>\r
            </li>\r
        </ul>\r
        <hr data-start="4159" data-end="4162" />\r
        <h3 data-start="4164" data-end="4203">🧠 Problem Solving Skills Practiced</h3>\r
        <ul data-start="4205" data-end="4468">\r
            <li data-start="4205" data-end="4261">\r
                <p data-start="4207" data-end="4261"><strong data-start="4207" data-end="4225">Greedy Choices</strong>:\r
                    Pick best items under constraints.</p>\r
            </li>\r
            <li data-start="4262" data-end="4316">\r
                <p data-start="4264" data-end="4316"><strong data-start="4264" data-end="4282">Decision Trees</strong>:\r
                    Evaluate what combinations work.</p>\r
            </li>\r
            <li data-start="4317" data-end="4392">\r
                <p data-start="4319" data-end="4392"><strong data-start="4319" data-end="4335">Optimization</strong>:\r
                    Maximize variety and value under budget/calorie limits.</p>\r
            </li>\r
            <li data-start="4393" data-end="4468">\r
                <p data-start="4395" data-end="4468"><strong data-start="4395" data-end="4409">Validation</strong>:\r
                    Prevent duplicate category choices and over-budget trays.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="4470" data-end="4473" />\r
        <h3 data-start="4475" data-end="4502">💡 Further Enhancements</h3>\r
        <h4 data-start="4504" data-end="4530">1. <strong data-start="4512" data-end="4528">SFML Version</strong></h4>\r
        <p data-start="4531" data-end="4569">Upgrade to a graphical interface with:</p>\r
        <ul data-start="4570" data-end="4674">\r
            <li data-start="4570" data-end="4593">\r
                <p data-start="4572" data-end="4593">Animated food trays</p>\r
            </li>\r
            <li data-start="4594" data-end="4624">\r
                <p data-start="4596" data-end="4624">Mouse click item selection</p>\r
            </li>\r
            <li data-start="4625" data-end="4648">\r
                <p data-start="4627" data-end="4648">Timed gameplay mode</p>\r
            </li>\r
            <li data-start="4649" data-end="4674">\r
                <p data-start="4651" data-end="4674">Score and nutrition bar</p>\r
            </li>\r
        </ul>\r
        <h4 data-start="4676" data-end="4704">2. <strong data-start="4684" data-end="4704">AI Opponent Mode</strong>\r
        </h4>\r
        <ul data-start="4705" data-end="4798">\r
            <li data-start="4705" data-end="4766">\r
                <p data-start="4707" data-end="4766">Compete with a bot selecting randomly or using AI strategy.</p>\r
            </li>\r
            <li data-start="4767" data-end="4798">\r
                <p data-start="4769" data-end="4798">See who builds a better tray!</p>\r
            </li>\r
        </ul>\r
        <h4 data-start="4800" data-end="4844">3. <strong data-start="4808" data-end="4844">Player Profiles + Scoring\r
                System</strong></h4>\r
        <ul data-start="4845" data-end="4919">\r
            <li data-start="4845" data-end="4863">\r
                <p data-start="4847" data-end="4863">Save best trays.</p>\r
            </li>\r
            <li data-start="4864" data-end="4919">\r
                <p data-start="4866" data-end="4919">Earn points for healthy, cheap, and balanced choices.</p>\r
            </li>\r
        </ul>\r
        <h4 data-start="4921" data-end="4952">4. <strong data-start="4929" data-end="4952">Dynamic Buffet Menu</strong>\r
        </h4>\r
        <ul data-start="4953" data-end="5008">\r
            <li data-start="4953" data-end="4974">\r
                <p data-start="4955" data-end="4974">Items rotate daily.</p>\r
            </li>\r
            <li data-start="4975" data-end="5008">\r
                <p data-start="4977" data-end="5008">Seasonal or themed buffet days.</p>\r
            </li>\r
        </ul>\r
        <h4 data-start="5010" data-end="5056">5. <strong data-start="5018" data-end="5056">Multiplayer Mode (Local or\r
                Online)</strong></h4>\r
        <ul data-start="5057" data-end="5106">\r
            <li data-start="5057" data-end="5106">\r
                <p data-start="5059" data-end="5106">Compete to create the best tray under pressure.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="5108" data-end="5111" />\r
        <h3 data-start="5113" data-end="5141">📦 Educational Takeaways</h3>\r
        <ul data-start="5143" data-end="5308">\r
            <li data-start="5143" data-end="5190">\r
                <p data-start="5145" data-end="5190">Teaches resource management (budget + health)</p>\r
            </li>\r
            <li data-start="5191" data-end="5227">\r
                <p data-start="5193" data-end="5227">Applies real-world logic in coding</p>\r
            </li>\r
            <li data-start="5228" data-end="5308">\r
                <p data-start="5230" data-end="5308">Great introduction to game loops, condition checks, and vector\r
                    handling in C++</p>\r
            </li>\r
        </ul>\r
        <p>&nbsp;</p>\r
        <p data-start="0" data-end="108">Let's enhance the <strong data-start="25" data-end="40">Buffet Rush</strong>\r
            C++ game using <strong data-start="56" data-end="64">SFML</strong> by adding a <strong data-start="77"\r
                data-end="104">Score and Nutrition Bar</strong> 🧃.</p>\r
        <hr data-start="110" data-end="113" />\r
        <h2 data-start="115" data-end="166">🧾 <strong data-start="121" data-end="166">Feature Overview: Score and\r
                Nutrition Bar</strong></h2>\r
        <h3 data-start="168" data-end="180">🎯 Goal:</h3>\r
        <ul data-start="181" data-end="331">\r
            <li data-start="181" data-end="266">\r
                <p data-start="183" data-end="209">Display <strong data-start="191" data-end="204">Score Bar</strong>\r
                    for:</p>\r
                <ul data-start="212" data-end="266">\r
                    <li data-start="212" data-end="238">\r
                        <p data-start="214" data-end="238">Balanced tray completion</p>\r
                    </li>\r
                    <li data-start="241" data-end="266">\r
                        <p data-start="243" data-end="266">Bonus for healthy items</p>\r
                    </li>\r
                </ul>\r
            </li>\r
            <li data-start="267" data-end="331">\r
                <p data-start="269" data-end="331">Display <strong data-start="277" data-end="294">Nutrition\r
                        Bar</strong> to visualize calories used vs. limit</p>\r
            </li>\r
        </ul>\r
        <hr data-start="333" data-end="336" />\r
        <h2 data-start="338" data-end="361">💡 What You&rsquo;ll Need:</h2>\r
        <ul data-start="362" data-end="479">\r
            <li data-start="362" data-end="417">\r
                <p data-start="364" data-end="417"><strong data-start="364" data-end="380">SFML library</strong>\r
                    installed (<a class="cursor-pointer" target="_new" rel="noopener" data-start="392"\r
                        data-end="416">https://www.sfml-dev.org</a>)</p>\r
            </li>\r
            <li data-start="418" data-end="448">\r
                <p data-start="420" data-end="448">Basic SFML window and shapes</p>\r
            </li>\r
            <li data-start="449" data-end="479">\r
                <p data-start="451" data-end="479">Some text and logic for bars</p>\r
            </li>\r
        </ul>\r
        <hr data-start="481" data-end="484" />\r
        <h2 data-start="486" data-end="510">🧪 <strong data-start="492" data-end="510">Design Details</strong></h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="512" data-end="924">\r
                    <thead data-start="512" data-end="595">\r
                        <tr data-start="512" data-end="595">\r
                            <th data-start="512" data-end="530" data-col-size="sm">Component</th>\r
                            <th data-start="530" data-end="544" data-col-size="sm">Type</th>\r
                            <th data-start="544" data-end="595" data-col-size="md">Description</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="679" data-end="924">\r
                        <tr data-start="679" data-end="760">\r
                            <td data-start="679" data-end="696" data-col-size="sm">Nutrition Bar</td>\r
                            <td data-start="696" data-end="710" data-col-size="sm">Rectangle</td>\r
                            <td data-start="710" data-end="760" data-col-size="md">Fills based on % of calories used\r
                                (max 900 cal)</td>\r
                        </tr>\r
                        <tr data-start="761" data-end="842">\r
                            <td data-start="761" data-end="778" data-col-size="sm">Score Bar</td>\r
                            <td data-start="778" data-end="792" data-col-size="sm">Rectangle</td>\r
                            <td data-start="792" data-end="842" data-col-size="md">Increases with each good choice</td>\r
                        </tr>\r
                        <tr data-start="843" data-end="924">\r
                            <td data-start="843" data-end="860" data-col-size="sm">Tray Display</td>\r
                            <td data-start="860" data-end="874" data-col-size="sm">Text</td>\r
                            <td data-start="874" data-end="924" data-col-size="md">Shows items picked</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="926" data-end="929" />\r
        <h2 data-start="931" data-end="974">🎮 <strong data-start="937" data-end="974">SFML Sample Snippet: Bars +\r
                Logic</strong></h2>\r
        <p data-start="976" data-end="1011">Here&rsquo;s a simplified implementation:</p>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;SFML/Graphics.hpp&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;iostream&gt;</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">&lt;vector&gt;</span> <span class="hljs-type">const</span> <span class="hljs-type">int</span> calorieLimit = <span class="hljs-number">900</span>; <span class="hljs-type">int</span> currentCalories = <span class="hljs-number">0</span>; <span class="hljs-type">int</span> score = <span class="hljs-number">0</span>; <span class="hljs-function">sf::RectangleShape <span class="hljs-title">createBar</span></span><span class="hljs-params">(sf::Vector2f position, sf::Color color, <span class="hljs-type">float</span></span> percentage) { <span class="hljs-function">sf::RectangleShape <span class="hljs-title">bar</span></span><span class="hljs-params">(sf::Vector2f(<span class="hljs-number">200</span></span> * percentage, <span class="hljs-number">20</span>)); bar.<span class="hljs-built_in">setPosition</span>(position); bar.<span class="hljs-built_in">setFillColor</span>(color); <span class="hljs-keyword">return</span> bar; } <span class="hljs-function"><span class="hljs-type">int</span></span> <span class="hljs-title">main</span><span class="hljs-params">()</span> { <span class="hljs-function">sf::RenderWindow <span class="hljs-title">window</span></span><span class="hljs-params">(sf::VideoMode(<span class="hljs-number">600</span></span>, <span class="hljs-number">400</span>), <span class="hljs-string">"Buffet Rush - Score &amp; Nutrition"</span>); sf::Font font; <span class="hljs-keyword">if</span> (!font.<span class="hljs-built_in">loadFromFile</span>(<span class="hljs-string">"arial.ttf"</span>)) <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>; <span class="hljs-function">sf::Text <span class="hljs-title">title</span></span><span class="hljs-params">(<span class="hljs-string">"Buffet Rush!"</span></span>, font, <span class="hljs-number">30</span>); title.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">180</span>, <span class="hljs-number">10</span>); sf::Text caloriesText; caloriesText.<span class="hljs-built_in">setFont</span>(font); caloriesText.<span class="hljs-built_in">setCharacterSize</span>(<span class="hljs-number">16</span>); caloriesText.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">50</span>, <span class="hljs-number">70</span>); sf::Text scoreText; scoreText.<span class="hljs-built_in">setFont</span>(font); scoreText.<span class="hljs-built_in">setCharacterSize</span>(<span class="hljs-number">16</span>); scoreText.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">50</span>, <span class="hljs-number">140</span>); <span class="hljs-comment">// Simulated calorie increase</span> std::vector&lt;<span class="hljs-type">int</span>&gt; choices = {<span class="hljs-number">100</span>, <span class="hljs-number">250</span>, <span class="hljs-number">300</span>, <span class="hljs-number">180</span>}; <span class="hljs-comment">// Example selections</span> <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> cal : choices) { currentCalories += cal; score += (cal &lt; <span class="hljs-number">300</span> ? <span class="hljs-number">10</span> : <span class="hljs-number">5</span>); <span class="hljs-comment">// Healthy = more score</span> } <span class="hljs-keyword">while</span> (window.<span class="hljs-built_in">isOpen</span>()) { sf::Event event; <span class="hljs-keyword">while</span> (window.<span class="hljs-built_in">pollEvent</span>(event)) { <span class="hljs-keyword">if</span> (event.type == sf::Event::Closed) window.<span class="hljs-built_in">close</span>(); } <span class="hljs-type">float</span> caloriePercent = <span class="hljs-built_in">static_cast</span>&lt;<span class="hljs-type">float</span>&gt;(currentCalories) / calorieLimit; <span class="hljs-keyword">if</span> (caloriePercent &gt; <span class="hljs-number">1.0f</span>) caloriePercent = <span class="hljs-number">1.0f</span>; <span class="hljs-type">float</span> scorePercent = <span class="hljs-built_in">static_cast</span>&lt;<span class="hljs-type">float</span>&gt;(score) / <span class="hljs-number">50.0f</span>; <span class="hljs-comment">// Assume 50 is max</span> <span class="hljs-keyword">if</span> (scorePercent &gt; <span class="hljs-number">1.0f</span>) scorePercent = <span class="hljs-number">1.0f</span>; caloriesText.<span class="hljs-built_in">setString</span>(<span class="hljs-string">"Calories: "</span> + std::<span class="hljs-built_in">to_string</span>(currentCalories) + <span class="hljs-string">" / 900"</span>); scoreText.<span class="hljs-built_in">setString</span>(<span class="hljs-string">"Score: "</span> + std::<span class="hljs-built_in">to_string</span>(score)); window.<span class="hljs-built_in">clear</span>(sf::<span class="hljs-built_in">Color</span>(<span class="hljs-number">240</span>, <span class="hljs-number">240</span>, <span class="hljs-number">240</span>)); window.<span class="hljs-built_in">draw</span>(title); window.<span class="hljs-built_in">draw</span>(caloriesText); window.<span class="hljs-built_in">draw</span>(<span class="hljs-built_in">createBar</span>(sf::<span class="hljs-built_in">Vector2f</span>(<span class="hljs-number">50</span>, <span class="hljs-number">100</span>), sf::Color::Red, caloriePercent)); window.<span class="hljs-built_in">draw</span>(scoreText); window.<span class="hljs-built_in">draw</span>(<span class="hljs-built_in">createBar</span>(sf::<span class="hljs-built_in">Vector2f</span>(<span class="hljs-number">50</span>, <span class="hljs-number">170</span>), sf::Color::Green, scorePercent)); window.<span class="hljs-built_in">display</span>(); } <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>; } </code>\r
            </div>\r
        </div>\r
        <hr data-start="3137" data-end="3140" />\r
        <h3 data-start="3142" data-end="3160">🧠 Explanation</h3>\r
        <ul data-start="3162" data-end="3356">\r
            <li data-start="3162" data-end="3223">\r
                <p data-start="3164" data-end="3223">We simulate <strong data-start="3176" data-end="3192">item\r
                        choices</strong> by adding calories and scores.</p>\r
            </li>\r
            <li data-start="3224" data-end="3278">\r
                <p data-start="3226" data-end="3278">Bars grow in width proportionally using percentages.</p>\r
            </li>\r
            <li data-start="3279" data-end="3356">\r
                <p data-start="3281" data-end="3356">The red bar shows <strong data-start="3299"\r
                        data-end="3319">nutrition intake</strong>, green bar shows <strong data-start="3337"\r
                        data-end="3355">score progress</strong>.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3358" data-end="3361" />\r
        <h2 data-start="3363" data-end="3386">🎨 You Can Also Add:</h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="3387" data-end="3655">\r
                    <thead data-start="3387" data-end="3424">\r
                        <tr data-start="3387" data-end="3424">\r
                            <th data-start="3387" data-end="3409" data-col-size="sm">Enhancement</th>\r
                            <th data-start="3409" data-end="3424" data-col-size="sm">Description</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="3463" data-end="3655">\r
                        <tr data-start="3463" data-end="3527">\r
                            <td data-start="3463" data-end="3485" data-col-size="sm">🍎 Nutrition icons</td>\r
                            <td data-start="3485" data-end="3527" data-col-size="sm">Represent carbs/proteins/fat\r
                                visually.</td>\r
                        </tr>\r
                        <tr data-start="3528" data-end="3590">\r
                            <td data-start="3528" data-end="3550" data-col-size="sm">⏱️ Timer bar</td>\r
                            <td data-start="3550" data-end="3590" data-col-size="sm">Add countdown to pressure\r
                                decisions.</td>\r
                        </tr>\r
                        <tr data-start="3591" data-end="3655">\r
                            <td data-start="3591" data-end="3613" data-col-size="sm">📊 Summary Screen</td>\r
                            <td data-start="3613" data-end="3655" data-col-size="sm">After tray completion, show\r
                                breakdown.</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
        </div>\r
    </article>\r
</body>\r
\r
</html>`,ng=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h1 data-start="200" data-end="257">🥗 <strong data-start="205" data-end="257">Buffet Rush: A Tasty Game in C++\r
                with GUI (SFML)</strong></h1>\r
        <p data-start="259" data-end="505">Have you ever imagined what a buffet would look like if it turned into a\r
            fast-paced game? Welcome to <strong data-start="360" data-end="375">Buffet Rush</strong>, a light-hearted\r
            yet educational C++ game powered by <strong data-start="429" data-end="437">SFML</strong>, where you dodge\r
            unhealthy snacks and rack up your nutrition score!</p>\r
        <p data-start="507" data-end="663">In this post, we&rsquo;ll guide you through the complete code, explore the\r
            game's logic, and brainstorm enhancements &mdash; all while keeping things flavorful and fun!</p>\r
        <hr data-start="665" data-end="668" />\r
        <h2 data-start="670" data-end="701">🍽️ <strong data-start="677" data-end="701">What Is Buffet Rush?</strong>\r
        </h2>\r
        <p data-start="703" data-end="986"><em data-start="703" data-end="716">Buffet Rush</em> simulates a player\r
            collecting food at a buffet. You control a plate, moving left and right to catch falling food. Some are\r
            nutritious (rewarded), and some are junk (penalized). We&rsquo;ve added visual polish, animation, and a\r
            "rush level" to simulate the hectic buffet line!</p>\r
        <hr data-start="988" data-end="991" />\r
        <h2 data-start="993" data-end="1038">🛠️ <strong data-start="1000" data-end="1038">Getting Started: Tools\r
                You&rsquo;ll Need</strong></h2>\r
        <ul data-start="1040" data-end="1160">\r
            <li data-start="1040" data-end="1070">\r
                <p data-start="1042" data-end="1070"><strong data-start="1042" data-end="1070">C++ Compiler (e.g.,\r
                        g++)</strong></p>\r
            </li>\r
            <li data-start="1071" data-end="1110">\r
                <p data-start="1073" data-end="1110"><strong data-start="1073" data-end="1089">SFML Library</strong>\r
                    installed and linked</p>\r
            </li>\r
            <li data-start="1111" data-end="1160">\r
                <p data-start="1113" data-end="1160"><strong data-start="1113" data-end="1123">Assets</strong>: <code\r
                        data-start="1125" data-end="1136">plate.png</code> image, <code data-start="1144"\r
                        data-end="1155">arial.ttf</code> font</p>\r
            </li>\r
        </ul>\r
        <hr data-start="1162" data-end="1165" />\r
        <h2 data-start="1167" data-end="1193">💻 <strong data-start="1173" data-end="1193">Code Walkthrough</strong>\r
        </h2>\r
        <p data-start="1195" data-end="1411">The full code is included below &mdash; complete with comments to help\r
            beginners understand every piece. From sprites and score tracking to animations and event handling,\r
            everything&rsquo;s baked in. Jump straight into the code:</p>\r
        <blockquote data-start="1413" data-end="1585">\r
            <p>// Buffet Rush GUI Game using SFML</p>\r
            <p>#include &lt;SFML/Graphics.hpp&gt;<br />#include &lt;iostream&gt;<br />#include\r
                &lt;vector&gt;<br />#include &lt;string&gt;</p>\r
            <p>struct Item {<br /> std::string name;<br /> std::string category;<br /> int calories;<br /> float\r
                price;<br />};</p>\r
            <p>std::vector&lt;Item&gt; buffet = {<br /> {"Salad", "Starter", 100, 2.5},<br /> {"Soup", "Starter", 80,\r
                2.0},<br /> {"Chicken", "Main", 400, 6.0},<br /> {"Pasta", "Main", 350, 5.5},<br /> {"Ice Cream",\r
                "Dessert", 200, 3.0},<br /> {"Fruit Bowl", "Dessert", 120, 2.5},<br /> {"Soda", "Drink", 150,\r
                1.5},<br /> {"Water", "Drink", 0, 1.0}<br />};</p>\r
            <p>const int calorieLimit = 900;<br />const float budget = 12.0;<br />int totalCalories = 0;<br />float\r
                totalCost = 0.0;<br />std::vector&lt;std::string&gt;\r
                categoriesChosen;<br />std::vector&lt;std::string&gt; tray;</p>\r
            <p>bool categoryChosen(const std::string&amp; cat) {<br /> for (auto&amp; c : categoriesChosen)<br /> if (c\r
                == cat) return true;<br /> return false;<br />}</p>\r
            <p>int main() {<br /> sf::RenderWindow window(sf::VideoMode(800, 600), "Buffet Rush");<br /> sf::Font\r
                font;<br /> font.loadFromFile("arial.ttf");</p>\r
            <p>sf::Text title("Buffet Rush", font, 36);<br /> title.setPosition(280, 10);</p>\r
            <p>std::vector&lt;sf::Text&gt; itemTexts;<br /> for (size_t i = 0; i &lt; buffet.size(); ++i) {<br />\r
                sf::Text t(buffet[i].name + " - $" + std::to_string(buffet[i].price) +<br /> ", " +\r
                std::to_string(buffet[i].calories) + " cal", font, 20);<br /> t.setPosition(50, 70 + i * 40);<br />\r
                itemTexts.push_back(t);<br /> }</p>\r
            <p>sf::Text info("Click an item to add to your tray", font, 20);<br /> info.setPosition(50, 450);</p>\r
            <p>sf::Text trayText("Tray:", font, 20);<br /> trayText.setPosition(500, 70);</p>\r
            <p>sf::Text calText("Calories: 0", font, 20);<br /> calText.setPosition(500, 300);</p>\r
            <p>sf::Text costText("Cost: $0.0", font, 20);<br /> costText.setPosition(500, 330);</p>\r
            <p>while (window.isOpen()) {<br /> sf::Event event;<br /> while (window.pollEvent(event)) {<br /> if\r
                (event.type == sf::Event::Closed)<br /> window.close();<br /> if (event.type ==\r
                sf::Event::MouseButtonPressed) {<br /> sf::Vector2f mouse(sf::Mouse::getPosition(window));<br /> for\r
                (size_t i = 0; i &lt; itemTexts.size(); ++i) {<br /> if (itemTexts[i].getGlobalBounds().contains(mouse))\r
                {<br /> Item&amp; item = buffet[i];<br /> if (!categoryChosen(item.category) &amp;&amp;<br />\r
                totalCalories + item.calories &lt;= calorieLimit &amp;&amp;<br /> totalCost + item.price &lt;= budget)\r
                {<br /> categoriesChosen.push_back(item.category);<br /> tray.push_back(item.name);<br /> totalCalories\r
                += item.calories;<br /> totalCost += item.price;<br /> }<br /> }<br /> }<br /> }<br /> }</p>\r
            <p>trayText.setString("Tray:\\n" + [&amp;]() {<br /> std::string s;<br /> for (auto&amp; t : tray) s += "- "\r
                + t + "\\n";<br /> return s;<br /> }());</p>\r
            <p>calText.setString("Calories: " + std::to_string(totalCalories));<br /> costText.setString("Cost: $" +\r
                std::to_string(totalCost));</p>\r
            <p>window.clear(sf::Color(250, 240, 230));<br /> window.draw(title);<br /> for (auto&amp; t : itemTexts)\r
                window.draw(t);<br /> window.draw(info);<br /> window.draw(trayText);<br /> window.draw(calText);<br />\r
                window.draw(costText);<br /> window.display();<br /> }<br /> return 0;<br />}</p>\r
        </blockquote>\r
        <hr data-start="1587" data-end="1590" />\r
        <h2 data-start="1592" data-end="1615">🎯 <strong data-start="1598" data-end="1615">Game Features</strong></h2>\r
        <ul data-start="1617" data-end="1873">\r
            <li data-start="1617" data-end="1657">\r
                <p data-start="1619" data-end="1657"><strong data-start="1619" data-end="1643">Custom player\r
                        sprite</strong> (your plate!)</p>\r
            </li>\r
            <li data-start="1658" data-end="1699">\r
                <p data-start="1660" data-end="1699"><strong data-start="1660" data-end="1683">Collision\r
                        detection</strong> for food pickup</p>\r
            </li>\r
            <li data-start="1700" data-end="1750">\r
                <p data-start="1702" data-end="1750"><strong data-start="1702" data-end="1720">Score tracking</strong>\r
                    based on healthy vs junk food</p>\r
            </li>\r
            <li data-start="1751" data-end="1795">\r
                <p data-start="1753" data-end="1795"><strong data-start="1753" data-end="1778">Adjustable\r
                        difficulty</strong> via up/down keys</p>\r
            </li>\r
            <li data-start="1796" data-end="1833">\r
                <p data-start="1798" data-end="1833"><strong data-start="1798" data-end="1816">Rain animation</strong>\r
                    for visual depth</p>\r
            </li>\r
            <li data-start="1834" data-end="1873">\r
                <p data-start="1836" data-end="1873"><strong data-start="1836" data-end="1851">Fog overlay</strong> for\r
                    a cozy atmosphere</p>\r
            </li>\r
        </ul>\r
        <hr data-start="1875" data-end="1878" />\r
        <h2 data-start="1880" data-end="1912">🍕 <strong data-start="1886" data-end="1912">Real-World\r
                Inspiration</strong></h2>\r
        <p data-start="1914" data-end="2098">Just like at an actual buffet, good choices (vegetables, fruits) give you a\r
            higher score. Junk food? That&rsquo;ll cost you! It's a fun way to <em data-start="2051"\r
                data-end="2084">visualize mindful eating habits</em> through play.</p>\r
        <hr data-start="2100" data-end="2103" />\r
        <h2 data-start="2105" data-end="2124">😄 <strong data-start="2111" data-end="2124">Fun Facts</strong></h2>\r
        <ul data-start="2126" data-end="2307">\r
            <li data-start="2126" data-end="2219">\r
                <p data-start="2128" data-end="2219">The word &ldquo;buffet&rdquo; comes from France, but the idea of\r
                    self-serve dining caught on worldwide.</p>\r
            </li>\r
            <li data-start="2220" data-end="2307">\r
                <p data-start="2222" data-end="2307">SFML makes GUI game dev in C++ accessible to beginners &mdash; no\r
                    need for complex engines!</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2309" data-end="2312" />\r
        <h2 data-start="2314" data-end="2350">🧠 <strong data-start="2320" data-end="2350">How We Solved Key\r
                Problems</strong></h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="2352" data-end="2817">\r
                    <thead data-start="2352" data-end="2400">\r
                        <tr data-start="2352" data-end="2400">\r
                            <th data-start="2352" data-end="2388" data-col-size="sm">Problem</th>\r
                            <th data-start="2388" data-end="2400" data-col-size="md">Solution</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="2449" data-end="2817">\r
                        <tr data-start="2449" data-end="2540">\r
                            <td data-start="2449" data-end="2485" data-col-size="sm">Managing multiple falling objects\r
                            </td>\r
                            <td data-col-size="md" data-start="2485" data-end="2540"><code data-start="2487"\r
                                    data-end="2510">std::vector&lt;Obstacle&gt;</code> and <code data-start="2515"\r
                                    data-end="2538">std::vector&lt;Raindrop&gt;</code></td>\r
                        </tr>\r
                        <tr data-start="2541" data-end="2627">\r
                            <td data-start="2541" data-end="2577" data-col-size="sm">Keeping performance smooth</td>\r
                            <td data-col-size="md" data-start="2577" data-end="2627"><code data-start="2579"\r
                                    data-end="2602">setFramerateLimit(60)</code> + object cleanup logic</td>\r
                        </tr>\r
                        <tr data-start="2628" data-end="2714">\r
                            <td data-start="2628" data-end="2664" data-col-size="sm">Interaction &amp; score calculation\r
                            </td>\r
                            <td data-col-size="md" data-start="2664" data-end="2714"><code data-start="2666"\r
                                    data-end="2698">getGlobalBounds().intersects()</code> for collision</td>\r
                        </tr>\r
                        <tr data-start="2715" data-end="2817">\r
                            <td data-start="2715" data-end="2751" data-col-size="sm">GUI updates</td>\r
                            <td data-col-size="md" data-start="2751" data-end="2817">Text and overlays drawn using <code\r
                                    data-start="2783" data-end="2793">sf::Text</code>, <code data-start="2795"\r
                                    data-end="2815">sf::RectangleShape</code></td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="2819" data-end="2822" />\r
        <h2 data-start="2824" data-end="2863">🚀 <strong data-start="2830" data-end="2863">Ideas for Future\r
                Enhancements</strong></h2>\r
        <ol data-start="2865" data-end="3182">\r
            <li data-start="2865" data-end="2923">\r
                <p data-start="2868" data-end="2923"><strong data-start="2868" data-end="2889">Use food\r
                        textures</strong> for apple, burger, broccoli, etc.</p>\r
            </li>\r
            <li data-start="2924" data-end="2977">\r
                <p data-start="2927" data-end="2977">Add a <strong data-start="2933" data-end="2947">health bar</strong>\r
                    showing nutritional progress.</p>\r
            </li>\r
            <li data-start="2978" data-end="3038">\r
                <p data-start="2981" data-end="3038">Play <strong data-start="2986" data-end="3003">sound\r
                        effects</strong> for eating healthy/unhealthy food.</p>\r
            </li>\r
            <li data-start="3039" data-end="3081">\r
                <p data-start="3042" data-end="3081">Introduce <strong data-start="3052" data-end="3068">combo\r
                        scores</strong> for streaks.</p>\r
            </li>\r
            <li data-start="3082" data-end="3133">\r
                <p data-start="3085" data-end="3133">Create <strong data-start="3092" data-end="3102">levels</strong> or\r
                    a <strong data-start="3108" data-end="3127">timer challenge</strong> mode.</p>\r
            </li>\r
            <li data-start="3134" data-end="3182">\r
                <p data-start="3137" data-end="3182">Track <strong data-start="3143" data-end="3160">calorie\r
                        count</strong> for each food caught.</p>\r
            </li>\r
        </ol>\r
        <hr data-start="3184" data-end="3187" />\r
        <h2 data-start="3189" data-end="3213">🧪 <strong data-start="3195" data-end="3213">Final Thoughts</strong></h2>\r
        <p data-start="3215" data-end="3427"><em data-start="3215" data-end="3228">Buffet Rush</em> is not just a game\r
            &mdash; it&rsquo;s a creative fusion of nutrition education and C++ programming. It's an excellent\r
            beginner&rsquo;s project to practice GUI design, collision detection, and dynamic object handling.</p>\r
        <p data-start="3429" data-end="3535">🎉 Whether you&rsquo;re coding for fun or learning SFML for the first time,\r
            this game is a great place to start!</p>\r
    </article>\r
</body>\r
\r
</html>`,tg=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        pre {\r
            overflow: auto;\r
        }\r
\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h2 data-start="195" data-end="256">🚙 Jeep Adventure Game in C++ (with GUI + Weather Effects)</h2>\r
        <h3 data-start="258" data-end="289">🧠 What is this game about?</h3>\r
        <p data-start="290" data-end="499">This is a <strong data-start="300" data-end="322">graphical C++ game</strong>\r
            using <strong data-start="329" data-end="337">SFML</strong>, where you control a <strong data-start="359"\r
                data-end="367">Jeep</strong> driving on a rainy road. Your goal is to avoid falling obstacles, stay\r
            visible in the rain, and survive long enough to earn points.</p>\r
        <p data-start="501" data-end="552">Let&rsquo;s break it down in easy-to-understand sections.</p>\r
        <hr data-start="554" data-end="557" />\r
        <h3 data-start="559" data-end="593">1️⃣ Setting Up the Game Window</h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-function">sf::RenderWindow <span class="hljs-title">window</span></span><span class="hljs-params">(sf::VideoMode(<span class="hljs-number">800</span></span>, <span class="hljs-number">600</span>), <span class="hljs-string">"Jeep Adventure with Rain Intensity"</span>); </code>\r
            </div>\r
        </div>\r
        <ul data-start="695" data-end="887">\r
            <li data-start="695" data-end="751">\r
                <p data-start="697" data-end="751">This line <strong data-start="707" data-end="727">creates a\r
                        window</strong> of size 800x600 pixels.</p>\r
            </li>\r
            <li data-start="752" data-end="830">\r
                <p data-start="754" data-end="830">The title bar of the window will say: <em data-start="792"\r
                        data-end="830">"Jeep Adventure with Rain Intensity"</em></p>\r
            </li>\r
            <li data-start="831" data-end="887">\r
                <p data-start="833" data-end="887">Think of it like creating a canvas for the game world.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="889" data-end="892" />\r
        <h3 data-start="894" data-end="933">2️⃣ Loading and Displaying the Jeep</h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp">sf::Texture jeepTexture; jeepTexture.<span class="hljs-built_in">loadFromFile</span>(<span class="hljs-string">"jeep.png"</span>); <span class="hljs-function">sf::Sprite <span class="hljs-title">jeep</span></span><span class="hljs-params">(jeepTexture)</span>; jeep.<span class="hljs-built_in">setScale</span>(<span class="hljs-number">0.15f</span>, <span class="hljs-number">0.15f</span>); jeep.<span class="hljs-built_in">setPosition</span>(<span class="hljs-number">100</span>, <span class="hljs-number">500</span>); </code>\r
            </div>\r
        </div>\r
        <ul data-start="1097" data-end="1275">\r
            <li data-start="1097" data-end="1138">\r
                <p data-start="1099" data-end="1138">We load the <strong data-start="1111" data-end="1125">jeep\r
                        image</strong> from a file.</p>\r
            </li>\r
            <li data-start="1139" data-end="1200">\r
                <p data-start="1141" data-end="1200">A <code data-start="1143" data-end="1151">Sprite</code> is like a\r
                    sticker &mdash; it shows the jeep on screen.</p>\r
            </li>\r
            <li data-start="1201" data-end="1275">\r
                <p data-start="1203" data-end="1275">We resize and move it to the bottom of the screen where the road\r
                    starts.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="1277" data-end="1280" />\r
        <h3 data-start="1282" data-end="1338">3️⃣ Displaying Text (Title + Score + Rain Intensity)</h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp">sf::Font font; font.<span class="hljs-built_in">loadFromFile</span>(<span class="hljs-string">"arial.ttf"</span>); <span class="hljs-function">sf::Text <span class="hljs-title">title</span></span><span class="hljs-params">(<span class="hljs-string">"Jeep Adventure"</span></span>, font, <span class="hljs-number">28</span>); <span class="hljs-function">sf::Text <span class="hljs-title">scoreText</span></span><span class="hljs-params">(<span class="hljs-string">"Score: 0"</span></span>, font, <span class="hljs-number">20</span>); <span class="hljs-function">sf::Text <span class="hljs-title">intensityLabel</span></span><span class="hljs-params">(<span class="hljs-string">"Rain Intensity: 5"</span></span>, font, <span class="hljs-number">20</span>); </code>\r
            </div>\r
        </div>\r
        <ul data-start="1541" data-end="1679">\r
            <li data-start="1541" data-end="1679">\r
                <p data-start="1543" data-end="1585">We use a font to show game info on screen:</p>\r
                <ul data-start="1588" data-end="1679">\r
                    <li data-start="1588" data-end="1600">\r
                        <p data-start="1590" data-end="1600">Game title</p>\r
                    </li>\r
                    <li data-start="1603" data-end="1635">\r
                        <p data-start="1605" data-end="1635">Score that updates as you play</p>\r
                    </li>\r
                    <li data-start="1638" data-end="1679">\r
                        <p data-start="1640" data-end="1679">Rain intensity (how strong the rain is)</p>\r
                    </li>\r
                </ul>\r
            </li>\r
        </ul>\r
        <hr data-start="1681" data-end="1684" />\r
        <h3 data-start="1686" data-end="1709">4️⃣ Moving the Jeep</h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-keyword">if</span> (sf::Keyboard::<span class="hljs-built_in">isKeyPressed</span>(sf::Keyboard::Left)) jeep.<span class="hljs-built_in">move</span>(<span class="hljs-number">-5</span>, <span class="hljs-number">0</span>); <span class="hljs-keyword">if</span> (sf::Keyboard::<span class="hljs-built_in">isKeyPressed</span>(sf::Keyboard::Right)) jeep.<span class="hljs-built_in">move</span>(<span class="hljs-number">5</span>, <span class="hljs-number">0</span>); </code>\r
            </div>\r
        </div>\r
        <ul data-start="1863" data-end="1913">\r
            <li data-start="1863" data-end="1913">\r
                <p data-start="1865" data-end="1913">Left/right arrow keys move the jeep on the road.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="1915" data-end="1918" />\r
        <h3 data-start="1920" data-end="1950">5️⃣ Obstacles Falling Down</h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-function">sf::RectangleShape <span class="hljs-title">obs</span></span><span class="hljs-params">(sf::Vector2f(<span class="hljs-number">30</span></span>, <span class="hljs-number">30</span>)); obs.<span class="hljs-built_in">setFillColor</span>(sf::Color::Red); obs.<span class="hljs-built_in">setPosition</span>(<span class="hljs-built_in">rand</span>() % <span class="hljs-number">700</span> + <span class="hljs-number">100</span>, <span class="hljs-number">0</span>); obstacles.<span class="hljs-built_in">push_back</span>({obs, <span class="hljs-number">5.0f</span>}); </code>\r
            </div>\r
        </div>\r
        <ul data-start="2118" data-end="2252">\r
            <li data-start="2118" data-end="2192">\r
                <p data-start="2120" data-end="2192">Red blocks fall from the top of the screen like <strong\r
                        data-start="2168" data-end="2177">rocks</strong> or <strong data-start="2181"\r
                        data-end="2191">debris</strong>.</p>\r
            </li>\r
            <li data-start="2193" data-end="2229">\r
                <p data-start="2195" data-end="2229">They appear at random x-positions.</p>\r
            </li>\r
            <li data-start="2230" data-end="2252">\r
                <p data-start="2232" data-end="2252">You must avoid them!</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2254" data-end="2257" />\r
        <h3 data-start="2259" data-end="2286">6️⃣ Rain and Visibility</h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-function">sf::RectangleShape <span class="hljs-title">drop</span></span><span class="hljs-params">(sf::Vector2f(<span class="hljs-number">2</span></span>, <span class="hljs-number">10</span>)); drop.<span class="hljs-built_in">setFillColor</span>(sf::<span class="hljs-built_in">Color</span>(<span class="hljs-number">150</span>, <span class="hljs-number">150</span>, <span class="hljs-number">255</span>)); raindrops.<span class="hljs-built_in">push_back</span>({drop, <span class="hljs-number">6.0f</span>}); </code>\r
            </div>\r
        </div>\r
        <ul data-start="2426" data-end="2564">\r
            <li data-start="2426" data-end="2471">\r
                <p data-start="2428" data-end="2471">Blue lines fall to represent <strong data-start="2457"\r
                        data-end="2470">raindrops</strong>.</p>\r
            </li>\r
            <li data-start="2472" data-end="2511">\r
                <p data-start="2474" data-end="2511">More rain means more drops on screen.</p>\r
            </li>\r
            <li data-start="2512" data-end="2564">\r
                <p data-start="2514" data-end="2564">A semi-transparent fog overlay reduces visibility.</p>\r
            </li>\r
        </ul>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp">fog.<span class="hljs-built_in">setFillColor</span>(sf::<span class="hljs-built_in">Color</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">50</span>)); <span class="hljs-comment">// Black with transparency</span> </code>\r
            </div>\r
        </div>\r
        <hr data-start="2648" data-end="2651" />\r
        <h3 data-start="2653" data-end="2687">7️⃣ Rain Intensity Control 🌧️</h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-keyword">if</span> (event.key.code == sf::Keyboard::Up &amp;&amp; rainIntensity &lt; <span class="hljs-number">10</span>) rainIntensity++; <span class="hljs-keyword">if</span> (event.key.code == sf::Keyboard::Down &amp;&amp; rainIntensity &gt; <span class="hljs-number">1</span>) rainIntensity--; </code>\r
            </div>\r
        </div>\r
        <ul data-start="2860" data-end="3005">\r
            <li data-start="2860" data-end="2898">\r
                <p data-start="2862" data-end="2898">Press <strong data-start="2868" data-end="2880">Up Arrow</strong>\r
                    to increase rain.</p>\r
            </li>\r
            <li data-start="2899" data-end="2935">\r
                <p data-start="2901" data-end="2935">Press <strong data-start="2907" data-end="2921">Down Arrow</strong>\r
                    to reduce it.</p>\r
            </li>\r
            <li data-start="2936" data-end="3005">\r
                <p data-start="2938" data-end="3005">This changes how many raindrops fall and how foggy the screen gets.\r
                </p>\r
            </li>\r
        </ul>\r
        <hr data-start="3007" data-end="3010" />\r
        <h3 data-start="3012" data-end="3037">8️⃣ Scoring System 🎯</h3>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-keyword">if</span> (obstacles[i].shape.<span class="hljs-built_in">getGlobalBounds</span>().<span class="hljs-built_in">intersects</span>(jeep.<span class="hljs-built_in">getGlobalBounds</span>())) { score -= <span class="hljs-number">5</span>; <span class="hljs-comment">// Collision</span> } <span class="hljs-keyword">if</span> (obstacles[i].shape.<span class="hljs-built_in">getPosition</span>().y &gt; <span class="hljs-number">600</span>) { score += <span class="hljs-number">10</span>; <span class="hljs-comment">// Dodge success</span> } </code>\r
            </div>\r
        </div>\r
        <ul data-start="3247" data-end="3354">\r
            <li data-start="3247" data-end="3298">\r
                <p data-start="3249" data-end="3298">You <strong data-start="3253" data-end="3268">lose points</strong>\r
                    if the jeep hits an obstacle.</p>\r
            </li>\r
            <li data-start="3299" data-end="3354">\r
                <p data-start="3301" data-end="3354">You <strong data-start="3305" data-end="3320">gain points</strong>\r
                    when you dodge them successfully.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3356" data-end="3359" />\r
        <h3 data-start="3361" data-end="3398">🎉 Fun Enhancements You Could Add</h3>\r
        <ol data-start="3400" data-end="3697">\r
            <li data-start="3400" data-end="3465">\r
                <p data-start="3403" data-end="3465"><strong data-start="3403" data-end="3421">Skid Animation</strong>:\r
                    Make the jeep slide slightly on wet roads.</p>\r
            </li>\r
            <li data-start="3466" data-end="3520">\r
                <p data-start="3469" data-end="3520"><strong data-start="3469" data-end="3499">Lightning + Thunder\r
                        Sounds</strong>: Add stormy effects!</p>\r
            </li>\r
            <li data-start="3521" data-end="3583">\r
                <p data-start="3524" data-end="3583"><strong data-start="3524" data-end="3538">Night Mode</strong>: Add\r
                    headlights and limited vision at night.</p>\r
            </li>\r
            <li data-start="3584" data-end="3645">\r
                <p data-start="3587" data-end="3645"><strong data-start="3587" data-end="3613">Fuel Bar or Health\r
                        Bar</strong>: Lose fuel or health over time.</p>\r
            </li>\r
            <li data-start="3646" data-end="3697">\r
                <p data-start="3649" data-end="3697"><strong data-start="3649" data-end="3659">Levels</strong>: Change\r
                    terrain as player progresses.</p>\r
            </li>\r
        </ol>\r
        <hr data-start="3699" data-end="3702" />\r
        <h3 data-start="3704" data-end="3744">🧩 Real-Life Applications / Learning</h3>\r
        <ul data-start="3745" data-end="3950">\r
            <li data-start="3745" data-end="3798">\r
                <p data-start="3747" data-end="3798">Simulates <strong data-start="3757" data-end="3782">road safety\r
                        awareness</strong> in bad weather.</p>\r
            </li>\r
            <li data-start="3799" data-end="3892">\r
                <p data-start="3801" data-end="3892">Great for learning <strong data-start="3820"\r
                        data-end="3847">event-based programming</strong>, <strong data-start="3849"\r
                        data-end="3871">graphics rendering</strong>, and <strong data-start="3877" data-end="3891">game\r
                        loops</strong>.</p>\r
            </li>\r
            <li data-start="3893" data-end="3950">\r
                <p data-start="3895" data-end="3950">Can be modified for <strong data-start="3915"\r
                        data-end="3949">educational driving simulators</strong>.</p>\r
            </li>\r
        </ul>\r
    </article>\r
</body>\r
\r
</html>`,ag=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>echos of gaiya</title>\r
   <style>\r
        pre {\r
            overflow: auto;\r
        }\r
        /* Gradient text styles for headings */\r
        h1,\r
        h2,\r
        h3,\r
        h4,\r
        h5,\r
        h6 {\r
            font-weight: 700;\r
            margin: 1.5rem 0 1rem;\r
            background-clip: text;\r
            -webkit-background-clip: text;\r
            /* color: transparent; */\r
        }\r
\r
        h1 {\r
            font-size: 2.5rem;\r
        }\r
\r
        h2 {\r
            font-size: 2rem;\r
            background-image: linear-gradient(to right, #805ad5, #4fd1c5);\r
        }\r
\r
        h3 {\r
            font-size: 1.75rem;\r
            background-image: linear-gradient(to right, #9f7aea, #68d391);\r
        }\r
\r
        /* List styles */\r
        ul,\r
        ol {\r
            padding-left: 2rem;\r
            margin: 1rem 0;\r
        }\r
\r
        li {\r
            margin-bottom: 0.5rem;\r
        }\r
\r
        ul {\r
            list-style-type: disc;\r
        }\r
\r
        ol {\r
            list-style-type: decimal;\r
        }\r
\r
        /* Link styles */\r
        a {\r
            color: #6b46c1;\r
            text-decoration: none;\r
            transition: color 0.3s ease;\r
        }\r
\r
        a:hover {\r
            color: #38b2ac;\r
            text-decoration: underline;\r
        }\r
\r
        /* Button styles */\r
        .button {\r
            display: inline-block;\r
            padding: 0.75rem 1.5rem;\r
            background: linear-gradient(to right, #6b46c1, #38b2ac);\r
            color: white;\r
            border-radius: 0.375rem;\r
            font-weight: 600;\r
            text-align: center;\r
            cursor: pointer;\r
            border: none;\r
            transition: all 0.3s ease;\r
        }\r
\r
        .button:hover {\r
            background: linear-gradient(to right, #805ad5, #4fd1c5);\r
            transform: translateY(-2px);\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
        }\r
\r
        /* Container styles */\r
        .container {\r
            max-width: 1200px;\r
            margin: 0 auto;\r
            padding: 0 20px;\r
        }\r
\r
        /* Card styles */\r
        .card {\r
            background: white;\r
            border-radius: 0.5rem;\r
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
            padding: 1.5rem;\r
            margin-bottom: 2rem;\r
        }\r
\r
        /* Responsive design */\r
        @media (max-width: 768px) {\r
            h1 {\r
                font-size: 2rem;\r
            }\r
\r
            h2 {\r
                font-size: 1.75rem;\r
            }\r
\r
            h3 {\r
                font-size: 1.5rem;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h3 data-start="148" data-end="184">🎮 Title: <strong data-start="162" data-end="182">"Echoes of Gaia"</strong>\r
        </h3>\r
        <p data-start="185" data-end="273"><em data-start="185" data-end="273">A next-gen C++ game demo using real-time\r
                ray tracing, AI NPCs, and physics simulation.</em></p>\r
        <hr data-start="275" data-end="278" />\r
        <h2 data-start="280" data-end="315">🧠 1. <strong data-start="289" data-end="315">Core Technologies\r
                Used</strong></h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="317" data-end="975">\r
                    <thead data-start="317" data-end="358">\r
                        <tr data-start="317" data-end="358">\r
                            <th data-start="317" data-end="324" data-col-size="sm">Area</th>\r
                            <th data-start="324" data-end="337" data-col-size="sm">Tools/Tech</th>\r
                            <th data-start="337" data-end="358" data-col-size="md">Why It's Advanced</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="400" data-end="975">\r
                        <tr data-start="400" data-end="482">\r
                            <td data-start="400" data-end="415" data-col-size="sm"><strong data-start="402"\r
                                    data-end="414">Graphics</strong></td>\r
                            <td data-start="415" data-end="447" data-col-size="sm">Unreal Engine 5 (C++ backend)</td>\r
                            <td data-start="447" data-end="482" data-col-size="md">Nanite + Lumen for photorealism</td>\r
                        </tr>\r
                        <tr data-start="483" data-end="572">\r
                            <td data-start="483" data-end="495" data-col-size="sm"><strong data-start="485"\r
                                    data-end="494">AI/ML</strong></td>\r
                            <td data-start="495" data-end="525" data-col-size="sm">OpenAI Gym, ONNX, RL models</td>\r
                            <td data-start="525" data-end="572" data-col-size="md">AI-controlled NPCs learning player\r
                                strategy</td>\r
                        </tr>\r
                        <tr data-start="573" data-end="658">\r
                            <td data-start="573" data-end="587" data-col-size="sm"><strong data-start="575"\r
                                    data-end="586">Physics</strong></td>\r
                            <td data-start="587" data-end="618" data-col-size="sm">NVIDIA PhysX / Chaos Physics</td>\r
                            <td data-start="618" data-end="658" data-col-size="md">Realistic environmental interactions\r
                            </td>\r
                        </tr>\r
                        <tr data-start="659" data-end="732">\r
                            <td data-start="659" data-end="671" data-col-size="sm"><strong data-start="661"\r
                                    data-end="670">Audio</strong></td>\r
                            <td data-start="671" data-end="692" data-col-size="sm">Wwise Audio Engine</td>\r
                            <td data-start="692" data-end="732" data-col-size="md">Dynamic and spatial audio processing\r
                            </td>\r
                        </tr>\r
                        <tr data-start="733" data-end="806">\r
                            <td data-start="733" data-end="750" data-col-size="sm"><strong data-start="735"\r
                                    data-end="749">Networking</strong></td>\r
                            <td data-start="750" data-end="767" data-col-size="sm">ENet or RakNet</td>\r
                            <td data-start="767" data-end="806" data-col-size="md">Custom high-performance multiplayer\r
                            </td>\r
                        </tr>\r
                        <tr data-start="807" data-end="887">\r
                            <td data-start="807" data-end="819" data-col-size="sm"><strong data-start="809"\r
                                    data-end="818">Input</strong></td>\r
                            <td data-start="819" data-end="857" data-col-size="sm">VR/AR (OpenXR), Haptics (HaptX SDK)\r
                            </td>\r
                            <td data-start="857" data-end="887" data-col-size="md">Immersive tactile feedback</td>\r
                        </tr>\r
                        <tr data-start="888" data-end="975">\r
                            <td data-start="888" data-end="900" data-col-size="sm"><strong data-start="890"\r
                                    data-end="899">Cloud</strong></td>\r
                            <td data-start="900" data-end="931" data-col-size="sm">AWS GameLift / Azure PlayFab</td>\r
                            <td data-start="931" data-end="975" data-col-size="md">Matchmaking, scaling, game state\r
                                storage</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="977" data-end="980" />\r
        <h2 data-start="982" data-end="1013">🛠️ 2. <strong data-start="992" data-end="1013">Development Stack</strong>\r
        </h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="1015" data-end="1353">\r
                    <thead data-start="1015" data-end="1041">\r
                        <tr data-start="1015" data-end="1041">\r
                            <th data-start="1015" data-end="1027" data-col-size="sm">Component</th>\r
                            <th data-start="1027" data-end="1041" data-col-size="md">Technology</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="1068" data-end="1353">\r
                        <tr data-start="1068" data-end="1119">\r
                            <td data-start="1068" data-end="1081" data-col-size="sm"><strong data-start="1070"\r
                                    data-end="1080">Engine</strong></td>\r
                            <td data-start="1081" data-end="1119" data-col-size="md">Unreal Engine 5 (C++ + Blueprints)\r
                            </td>\r
                        </tr>\r
                        <tr data-start="1120" data-end="1168">\r
                            <td data-start="1120" data-end="1136" data-col-size="sm"><strong data-start="1122"\r
                                    data-end="1135">Rendering</strong></td>\r
                            <td data-start="1136" data-end="1168" data-col-size="md">DirectX 12 Ultimate / Vulkan</td>\r
                        </tr>\r
                        <tr data-start="1169" data-end="1233">\r
                            <td data-start="1169" data-end="1185" data-col-size="sm"><strong data-start="1171"\r
                                    data-end="1184">Scripting</strong></td>\r
                            <td data-start="1185" data-end="1233" data-col-size="md">Lua / Python (for fast gameplay\r
                                prototyping)</td>\r
                        </tr>\r
                        <tr data-start="1234" data-end="1294">\r
                            <td data-start="1234" data-end="1243" data-col-size="sm"><strong data-start="1236"\r
                                    data-end="1242">AI</strong></td>\r
                            <td data-start="1243" data-end="1294" data-col-size="md">Reinforcement learning via C++ +\r
                                ONNX inference</td>\r
                        </tr>\r
                        <tr data-start="1295" data-end="1353">\r
                            <td data-start="1295" data-end="1307" data-col-size="sm"><strong data-start="1297"\r
                                    data-end="1306">Tools</strong></td>\r
                            <td data-start="1307" data-end="1353" data-col-size="md">Visual Studio 2022, Unreal Editor,\r
                                Blender</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="1355" data-end="1358" />\r
        <h2 data-start="1360" data-end="1412">🎮 3. Sample Feature List (What This Game Can Do)</h2>\r
        <h3 data-start="1414" data-end="1436">🌍 World Features:</h3>\r
        <ul data-start="1437" data-end="1655">\r
            <li data-start="1437" data-end="1503">\r
                <p data-start="1439" data-end="1503"><strong data-start="1439" data-end="1465">Photorealistic\r
                        terrain</strong> with Nanite-powered virtual geometry.</p>\r
            </li>\r
            <li data-start="1504" data-end="1583">\r
                <p data-start="1506" data-end="1583"><strong data-start="1506" data-end="1532">Dynamic weather\r
                        system</strong> with volumetric clouds, real-time rain simulation.</p>\r
            </li>\r
            <li data-start="1584" data-end="1655">\r
                <p data-start="1586" data-end="1655"><strong data-start="1586" data-end="1604">Flood modeling</strong>\r
                    using fluid dynamics in destructible environments.</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="1657" data-end="1674">🧠 AI System:</h3>\r
        <ul data-start="1675" data-end="1826">\r
            <li data-start="1675" data-end="1758">\r
                <p data-start="1677" data-end="1758">NPCs evolve their strategies using <strong data-start="1712"\r
                        data-end="1739">machine learning models</strong> (e.g. PPO or DQN).</p>\r
            </li>\r
            <li data-start="1759" data-end="1826">\r
                <p data-start="1761" data-end="1826">AI learns from player movement, tactics, and adapts in real-time.\r
                </p>\r
            </li>\r
        </ul>\r
        <h3 data-start="1828" data-end="1843">🔥 Visuals:</h3>\r
        <ul data-start="1844" data-end="1985">\r
            <li data-start="1844" data-end="1917">\r
                <p data-start="1846" data-end="1917">Real-time <strong data-start="1856" data-end="1882">ray traced\r
                        reflections</strong>, shadows, and global illumination.</p>\r
            </li>\r
            <li data-start="1918" data-end="1985">\r
                <p data-start="1920" data-end="1985"><strong data-start="1920" data-end="1939">Virtual Reality</strong>\r
                    and <strong data-start="1944" data-end="1965">Augmented Reality</strong> support via OpenXR.</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="1987" data-end="2000">🎵 Audio:</h3>\r
        <ul data-start="2001" data-end="2146">\r
            <li data-start="2001" data-end="2068">\r
                <p data-start="2003" data-end="2068">Interactive music layers that respond to environment and emotion.\r
                </p>\r
            </li>\r
            <li data-start="2069" data-end="2146">\r
                <p data-start="2071" data-end="2146">Full <strong data-start="2076" data-end="2096">spatial 3D\r
                        audio</strong> with Doppler effect and echo simulation in caves.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2148" data-end="2151" />\r
        <h2 data-start="2153" data-end="2205">🧾 4. Basic Code Integration Example (Simplified)</h2>\r
        <p data-start="2207" data-end="2277">Here's a minimal C++ game loop using Unreal Engine-style architecture:</p>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/Actor.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"FloodDrone.generated.h"</span> <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">AEcoFloodDrone</span> : <span class="hljs-keyword">public</span> AActor { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">AEcoFloodDrone</span>(); <span class="hljs-keyword">protected</span>: <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">BeginPlay</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) <span class="hljs-keyword">override</span>; <span class="hljs-keyword">private</span>: <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ScanForWaterLevel</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">MoveToSafeZone</span><span class="hljs-params">()</span>; <span class="hljs-type">float</span> WaterLevel; FVector TargetLocation; }; </code>\r
            </div>\r
        </div>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                cpp</div>\r
            <div class="sticky top-9">\r
                <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">\r
                    <div\r
                        class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs">\r
                        <button class="flex gap-1 items-center select-none py-1">Copy</button><span class=""\r
                            data-state="closed"><button\r
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-cpp"><span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AEcoFloodDrone::Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) { Super::<span class="hljs-built_in">Tick</span>(DeltaTime); <span class="hljs-built_in">ScanForWaterLevel</span>(); <span class="hljs-keyword">if</span> (WaterLevel &gt; Threshold) { <span class="hljs-built_in">MoveToSafeZone</span>(); <span class="hljs-comment">// AI-based navigation</span> } } </code>\r
            </div>\r
        </div>\r
        <hr data-start="2907" data-end="2910" />\r
        <h2 data-start="2912" data-end="2939">🖼️ 5. Optional Add-Ons:</h2>\r
        <ul data-start="2941" data-end="3192">\r
            <li data-start="2941" data-end="3008">\r
                <p data-start="2943" data-end="3008"><strong data-start="2943" data-end="2974">Procedural World\r
                        Generation</strong>: Using Perlin noise and fractals.</p>\r
            </li>\r
            <li data-start="3009" data-end="3052">\r
                <p data-start="3011" data-end="3052"><strong data-start="3011" data-end="3051">Multiplayer with Global\r
                        Leaderboards</strong>.</p>\r
            </li>\r
            <li data-start="3053" data-end="3141">\r
                <p data-start="3055" data-end="3141"><strong data-start="3055" data-end="3081">AI voice\r
                        communication</strong> using ElevenLabs API or Microsoft Azure Cognitive Services.</p>\r
            </li>\r
            <li data-start="3142" data-end="3192">\r
                <p data-start="3144" data-end="3192"><strong data-start="3144" data-end="3177">Blockchain for digital\r
                        assets</strong> (NFTs, skins).</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3194" data-end="3197" />\r
        <h2 data-start="3199" data-end="3236">🚀 6. How You Could Actually Start</h2>\r
        <ol data-start="3238" data-end="3506">\r
            <li data-start="3238" data-end="3268">\r
                <p data-start="3241" data-end="3268"><strong data-start="3241" data-end="3268">Install Unreal Engine\r
                        5</strong></p>\r
            </li>\r
            <li data-start="3269" data-end="3337">\r
                <p data-start="3272" data-end="3337"><strong data-start="3272" data-end="3300">Use C++ template\r
                        project</strong> (First Person, Top-down, or Vehicle)</p>\r
            </li>\r
            <li data-start="3338" data-end="3391">\r
                <p data-start="3341" data-end="3391"><strong data-start="3341" data-end="3391">Integrate physics, AI,\r
                        and ray tracing modules</strong></p>\r
            </li>\r
            <li data-start="3392" data-end="3452">\r
                <p data-start="3395" data-end="3452"><strong data-start="3395" data-end="3452">Train AI NPCs in Python\r
                        &rarr; export to ONNX &rarr; run in C++</strong></p>\r
            </li>\r
            <li data-start="3453" data-end="3506">\r
                <p data-start="3456" data-end="3506"><strong data-start="3456" data-end="3506">Export to Windows, Linux,\r
                        PS5, or Oculus Quest</strong></p>\r
            </li>\r
        </ol>\r
        <hr data-start="3508" data-end="3511" />\r
        <h2 data-start="3513" data-end="3539">🌐 Future Enhancements:</h2>\r
        <div class="_tableContainer_80l1q_1">\r
            <div class="_tableWrapper_80l1q_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="3541" data-end="3728">\r
                    <thead data-start="3541" data-end="3556">\r
                        <tr data-start="3541" data-end="3556">\r
                            <th data-start="3541" data-end="3548" data-col-size="sm">Idea</th>\r
                            <th data-start="3548" data-end="3556" data-col-size="sm">Tech</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="3573" data-end="3728">\r
                        <tr data-start="3573" data-end="3617">\r
                            <td data-start="3573" data-end="3595" data-col-size="sm">Generative dialogue</td>\r
                            <td data-start="3595" data-end="3617" data-col-size="sm">LLM via OpenAI API</td>\r
                        </tr>\r
                        <tr data-start="3618" data-end="3675">\r
                            <td data-start="3618" data-end="3642" data-col-size="sm">Auto-generated quests</td>\r
                            <td data-start="3642" data-end="3675" data-col-size="sm">GPT-generated XML quest trees</td>\r
                        </tr>\r
                        <tr data-start="3676" data-end="3728">\r
                            <td data-start="3676" data-end="3707" data-col-size="sm">Facial animation from webcam</td>\r
                            <td data-start="3707" data-end="3728" data-col-size="sm">NVIDIA Audio2Face</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
        </div>\r
    </article>\r
</body>\r
\r
</html>`,sg=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
</head>\r
\r
<body>\r
    <article>\r
        <h2 data-start="185" data-end="244">🌧️ <strong data-start="192" data-end="244">Game Concept: "Rainfall\r
                Reclaimer: EcoFrontline"</strong></h2>\r
        <h3 data-start="246" data-end="263">🎮 Game Type:</h3>\r
        <ul data-start="264" data-end="448">\r
            <li data-start="264" data-end="317">\r
                <p data-start="266" data-end="317">3D Survival + Simulation + Environmental Strategy</p>\r
            </li>\r
            <li data-start="318" data-end="407">\r
                <p data-start="320" data-end="407">Built using <strong data-start="332" data-end="353">Unreal Engine\r
                        5.4</strong> (Nanite, Lumen, Chaos Physics, MetaHuman integration)</p>\r
            </li>\r
            <li data-start="408" data-end="448">\r
                <p data-start="410" data-end="448">Cross-platform (PC, console, VR-ready)</p>\r
            </li>\r
        </ul>\r
        <hr data-start="450" data-end="453" />\r
        <h2 data-start="455" data-end="478">🌍 <strong data-start="461" data-end="478">Game Setting:</strong></h2>\r
        <p data-start="479" data-end="736">Set in a near-future world suffering from <strong data-start="521"\r
                data-end="571">extreme rainfall, acid rain, and rising floods</strong>, you play as an <strong\r
                data-start="588" data-end="628">AI-assisted meteorological operative</strong> using <strong\r
                data-start="635" data-end="683">drones, robots, and water recycling stations</strong> to <strong\r
                data-start="687" data-end="721">monitor, mitigate, and survive</strong> climate chaos.</p>\r
        <hr data-start="738" data-end="741" />\r
        <h2 data-start="743" data-end="767">🔧 Technologies Used:</h2>\r
        <div class="_tableContainer_16hzy_1">\r
            <div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="768" data-end="1289">\r
                    <thead data-start="768" data-end="792">\r
                        <tr data-start="768" data-end="792">\r
                            <th data-start="768" data-end="778" data-col-size="sm">Feature</th>\r
                            <th data-start="778" data-end="792" data-col-size="md">Technology</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="818" data-end="1289">\r
                        <tr data-start="818" data-end="857">\r
                            <td data-start="818" data-end="832" data-col-size="sm">Game Engine</td>\r
                            <td data-start="832" data-end="857" data-col-size="md"><strong data-start="834"\r
                                    data-end="855">Unreal Engine 5.4</strong></td>\r
                        </tr>\r
                        <tr data-start="858" data-end="942">\r
                            <td data-start="858" data-end="888" data-col-size="sm">AI &amp; Environment Simulation</td>\r
                            <td data-start="888" data-end="942" data-col-size="md"><strong data-start="890"\r
                                    data-end="922">NVIDIA DLSS 3.5, Ray Tracing</strong>, Fluid Simulation</td>\r
                        </tr>\r
                        <tr data-start="943" data-end="1014">\r
                            <td data-start="943" data-end="964" data-col-size="sm">Weather Simulation</td>\r
                            <td data-start="964" data-end="1014" data-col-size="md"><strong data-start="966"\r
                                    data-end="1012">Volumetric Clouds, Niagara Particle System</strong></td>\r
                        </tr>\r
                        <tr data-start="1015" data-end="1103">\r
                            <td data-start="1015" data-end="1046" data-col-size="sm">AI Enemies (Acid Rain Zones)</td>\r
                            <td data-start="1046" data-end="1103" data-col-size="md"><strong data-start="1048"\r
                                    data-end="1101">Behavior Trees + EQS (Environmental Query System)</strong></td>\r
                        </tr>\r
                        <tr data-start="1104" data-end="1154">\r
                            <td data-start="1104" data-end="1114" data-col-size="sm">Physics</td>\r
                            <td data-start="1114" data-end="1154" data-col-size="md"><strong data-start="1116"\r
                                    data-end="1152">Chaos Water &amp; Destruction System</strong></td>\r
                        </tr>\r
                        <tr data-start="1155" data-end="1215">\r
                            <td data-start="1155" data-end="1166" data-col-size="sm">Input/UX</td>\r
                            <td data-start="1166" data-end="1215" data-col-size="md"><strong data-start="1168"\r
                                    data-end="1198">MetaHuman + Motion Capture</strong>, VR-compatible</td>\r
                        </tr>\r
                        <tr data-start="1216" data-end="1289">\r
                            <td data-start="1216" data-end="1226" data-col-size="sm">Backend</td>\r
                            <td data-start="1226" data-end="1289" data-col-size="md"><strong data-start="1228"\r
                                    data-end="1260">AWS + Unreal Pixel Streaming</strong> (optional for multiplayer)\r
                            </td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="1291" data-end="1294" />\r
        <h2 data-start="1296" data-end="1320">🎯 Gameplay Features:</h2>\r
        <h3 data-start="1322" data-end="1339">✅ Main Goals:</h3>\r
        <ul data-start="1340" data-end="1605">\r
            <li data-start="1340" data-end="1400">\r
                <p data-start="1342" data-end="1400"><strong data-start="1342" data-end="1359">Deploy drones</strong> to\r
                    scan for safe zones and flood levels.</p>\r
            </li>\r
            <li data-start="1401" data-end="1469">\r
                <p data-start="1403" data-end="1469"><strong data-start="1403" data-end="1438">Construct rain filtration\r
                        units</strong> before acid rain zones spread.</p>\r
            </li>\r
            <li data-start="1470" data-end="1528">\r
                <p data-start="1472" data-end="1528"><strong data-start="1472" data-end="1504">Evacuate AI-guided\r
                        villagers</strong> using autonomous boats.</p>\r
            </li>\r
            <li data-start="1529" data-end="1605">\r
                <p data-start="1531" data-end="1605"><strong data-start="1531" data-end="1550">Collect samples</strong>\r
                    to upgrade your tech (e.g., rain intensity modifiers).</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="1607" data-end="1635">🌧️ Dynamic Rain System:</h3>\r
        <ul data-start="1636" data-end="1818">\r
            <li data-start="1636" data-end="1729">\r
                <p data-start="1638" data-end="1729">Uses <strong data-start="1643" data-end="1675">Lumen GI + Niagara\r
                        particles</strong> to simulate heavy rainfall, puddles, flooding rivers.</p>\r
            </li>\r
            <li data-start="1730" data-end="1818">\r
                <p data-start="1732" data-end="1818"><strong data-start="1732" data-end="1756">Rain changes\r
                        terrain</strong> in real-time: mudslides, power short-outs, visibility issues.</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="1820" data-end="1844">🔋 EcoTech Upgrades:</h3>\r
        <ul data-start="1845" data-end="1980">\r
            <li data-start="1845" data-end="1886">\r
                <p data-start="1847" data-end="1886"><strong data-start="1847" data-end="1865">Rain Batteries</strong>\r
                    (store water energy)</p>\r
            </li>\r
            <li data-start="1887" data-end="1937">\r
                <p data-start="1889" data-end="1937"><strong data-start="1889" data-end="1912">Weather\r
                        Manipulator</strong> (reduce storm intensity)</p>\r
            </li>\r
            <li data-start="1938" data-end="1980">\r
                <p data-start="1940" data-end="1980"><strong data-start="1940" data-end="1959">Climate Scanner</strong>\r
                    (forecast acid rain)</p>\r
            </li>\r
        </ul>\r
        <hr data-start="1982" data-end="1985" />\r
        <h2 data-start="1987" data-end="2005">🧠 Advanced AI:</h2>\r
        <ul data-start="2006" data-end="2228">\r
            <li data-start="2006" data-end="2067">\r
                <p data-start="2008" data-end="2067">Enemy: <strong data-start="2015" data-end="2043">Corrupted Weather\r
                        Drones</strong> that sabotage your gear</p>\r
            </li>\r
            <li data-start="2068" data-end="2152">\r
                <p data-start="2070" data-end="2152">NPCs: MetaHuman-based villagers with emotional responses and\r
                    help-seeking behavior</p>\r
            </li>\r
            <li data-start="2153" data-end="2228">\r
                <p data-start="2155" data-end="2228">Ally AI: Your partner drone &ldquo;Ozone&rdquo; (voice-activated,\r
                    upgrades over time)</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2230" data-end="2233" />\r
        <h2 data-start="2235" data-end="2263">💻 Development Breakdown:</h2>\r
        <div class="_tableContainer_16hzy_1">\r
            <div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="2265" data-end="2687">\r
                    <thead data-start="2265" data-end="2292">\r
                        <tr data-start="2265" data-end="2292">\r
                            <th data-start="2265" data-end="2277" data-col-size="sm">Component</th>\r
                            <th data-start="2277" data-end="2292" data-col-size="md">Description</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="2320" data-end="2687">\r
                        <tr data-start="2320" data-end="2397">\r
                            <td data-start="2320" data-end="2334" data-col-size="sm"><strong data-start="2322"\r
                                    data-end="2333">Visuals</strong></td>\r
                            <td data-start="2334" data-end="2397" data-col-size="md">UE5 with Lumen lighting, ray-traced\r
                                puddles, Nanite foliage</td>\r
                        </tr>\r
                        <tr data-start="2398" data-end="2476">\r
                            <td data-start="2398" data-end="2417" data-col-size="sm"><strong data-start="2400"\r
                                    data-end="2416">Sound Design</strong></td>\r
                            <td data-start="2417" data-end="2476" data-col-size="md">Binaural 3D rain effects, thunder\r
                                that affects gameplay</td>\r
                        </tr>\r
                        <tr data-start="2477" data-end="2544">\r
                            <td data-start="2477" data-end="2491" data-col-size="sm"><strong data-start="2479"\r
                                    data-end="2490">Physics</strong></td>\r
                            <td data-start="2491" data-end="2544" data-col-size="md">Chaos physics for falling debris,\r
                                collapsing dams</td>\r
                        </tr>\r
                        <tr data-start="2545" data-end="2615">\r
                            <td data-start="2545" data-end="2556" data-col-size="sm"><strong data-start="2547"\r
                                    data-end="2555">Code</strong></td>\r
                            <td data-start="2556" data-end="2615" data-col-size="md">C++ backend + Blueprint scripting\r
                                for rapid prototyping</td>\r
                        </tr>\r
                        <tr data-start="2616" data-end="2687">\r
                            <td data-start="2616" data-end="2625" data-col-size="sm"><strong data-start="2618"\r
                                    data-end="2624">UI</strong></td>\r
                            <td data-start="2625" data-end="2687" data-col-size="md">Futuristic HUD, hologram-style VR\r
                                displays, rainfall radar</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="2689" data-end="2692" />\r
        <h2 data-start="2694" data-end="2732">🧪 Fun Real-Life Integration Ideas:</h2>\r
        <ul data-start="2733" data-end="2935">\r
            <li data-start="2733" data-end="2790">\r
                <p data-start="2735" data-end="2790">Real rainfall data from <strong data-start="2759"\r
                        data-end="2789">NOAA or OpenWeatherMap API</strong>.</p>\r
            </li>\r
            <li data-start="2791" data-end="2880">\r
                <p data-start="2793" data-end="2880">AR mode using <strong data-start="2807" data-end="2823">iPhone\r
                        LiDAR</strong> or <strong data-start="2827" data-end="2845">Android ARCore</strong> to simulate\r
                    flooding in your room.</p>\r
            </li>\r
            <li data-start="2881" data-end="2935">\r
                <p data-start="2883" data-end="2935">Haptic suit support for VR players (feel raindrops!)</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2937" data-end="2940" />\r
        <h2 data-start="2942" data-end="2968">🔮 Future Enhancements:</h2>\r
        <ul data-start="2969" data-end="3159">\r
            <li data-start="2969" data-end="3034">\r
                <p data-start="2971" data-end="3034">Multiplayer co-op mode: coordinate rescue and rebuild missions.</p>\r
            </li>\r
            <li data-start="3035" data-end="3087">\r
                <p data-start="3037" data-end="3087">Dynamic terrain erosion based on rainfall history.</p>\r
            </li>\r
            <li data-start="3088" data-end="3159">\r
                <p data-start="3090" data-end="3159">Integration with <strong data-start="3107" data-end="3139">real\r
                        climate change datasets</strong> to raise awareness.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3161" data-end="3164" />\r
        <h2 data-start="3166" data-end="3199">✅ Why This is &ldquo;Most Advanced&rdquo;:</h2>\r
        <ul data-start="3200" data-end="3400">\r
            <li data-start="3200" data-end="3236">\r
                <p data-start="3202" data-end="3236">Uses state-of-the-art engine (UE5)</p>\r
            </li>\r
            <li data-start="3237" data-end="3301">\r
                <p data-start="3239" data-end="3301">Incorporates real-time global illumination and weather physics</p>\r
            </li>\r
            <li data-start="3302" data-end="3357">\r
                <p data-start="3304" data-end="3357">Combines robotics, AI, environment simulation, and VR</p>\r
            </li>\r
            <li data-start="3358" data-end="3400">\r
                <p data-start="3360" data-end="3400">Eco-conscious, educational and thrilling</p>\r
            </li>\r
        </ul>\r
    </article>\r
</body>\r
\r
</html>`,Es=[{id:1,title:"Recipe Rush: Online Grocery Ordering Game",slug:"recipe-rush",description:`
                It's a fun text-based simulation game teaching decision-making, budgeting, and basic input/output in C++ — great for beginners.`,image:new URL("/images/grocery-game-img.jpeg",import.meta.url).href,date:"Posted on June 15, 2025 – 10:00 AM",content:Vh,customReadMore:[{title:"Fun Meets Function: Grocery Games, Tips, and Surprising Facts",excerpt:"Scenario 1: Last-Minute Dinner Party You're hosting guests tonight and plan to cook Spaghetti Marinara. You have 20 minutes to order groceries before the cutoff for...",image:new URL("/images/grocery-game-fun.jpeg",import.meta.url).href,slug:"fun-meets-function",content:Hh},{title:"Let's add a Graphical User Interface (GUI) to your Recipe Rush: Online Grocery Ordering Game",excerpt:"With SFML, your game will look like: A window showing recipe selection. Grocery items displayed with names & prices as buttons. A side panel with your current cart and budget. Clickable buttons to add",image:new URL("/images/grocery-game-gui.jpeg",import.meta.url).href,slug:"adding-gui-to-recipe-rush",content:qh}]},{id:2,title:"Highway Driver: A Complete SFML Racing Game",slug:"highway-driver",description:"Highway Driver, you control a car speeding down a highway while avoiding incoming traffic. The longer you survive, the higher your score.",image:new URL("/images/highway-driver.jpeg",import.meta.url).href,date:"Posted on June 16, 2025 – 3:30 PM",content:Yh,customReadMore:[{title:"Speed, Skill & Code: The Making of a Highway Driver Game",excerpt:`Ever wondered how the simple thrill of dodging traffic in a game mirrors real-life driving? In this deep dive, we explore Highway Driver—a deceptively simple game that captures the chaos, strategy, and reflexes of the open road. From real-world driving psychology to game design secrets, we’ll break down:
        ✅ How highway survival games train your brain (faster reactions, better focus)
        ✅ Clever game mechanics inspired by actual driving challenges (lane-switching, speed fatigue, tunnel vision)
      ✅ Behind-the-scenes coding & design choices (why obstacles spawn just right)
      ✅ Fun upgrades to turn a basic prototype into a full-fledged game (weather, AI traffic, boss chases!)

      Whether you're a gamer, developer, or just love the open road, this post shifts gears between entertainment, education, and pure coding adrenaline. Ready to hit the highway? Let’s go! 🚗💨`,slug:"highway-driver-making",content:$h,image:new URL("/images/highway-driver-addition.jpeg",import.meta.url).href},{title:"Adding graphics to your game",excerpt:"Your Highway Driver game already has a basic graphical UI using SFML rectangles and text, but now let’s talk about enhancing the GUI (Graphical User Interface) with visual polish, usability, and menus — just like a complete arcade-style game.",slug:"highway-driver-gui",image:new URL("/images/highway-driver-gui.jpeg",import.meta.url).href,content:Kh}]},{id:3,title:"Car Parking Master",slug:"car-parking-master",description:"you control a car in a crowded parking lot. Your goal is to navigate through obstacles and park in the designated spot without collisions.",image:new URL("/images/car-parking.jpeg",import.meta.url).href,date:"Posted on June 17, 2025 – 8:00 AM",content:Xh},{id:4,title:"Farm Frenzy: Harvest Grow",slug:"farm-frenzy",description:`👨‍🌾 You're a farmer who must:
    🌱 Plant crops
  🐄 Feed animals
  🧺 Harvest and sell products
  🌾 Expand your farm
  💡 All while managing time, money, and resources wisely.`,image:new URL("/images/farm-frenzy.jpeg",import.meta.url).href,date:"Posted on June 17, 2025 – 8:00 AM",content:Zh,customReadMore:[{title:"Building Farm Frenzy: A GUI-Based Farm Game in C++ with SFML",slug:"farm-frenzy-with-gui",excerpt:`What if you could bring the joy of farming to your screen using just C++ and a bit of graphics? Welcome to
        Farm Frenzy, a simple but engaging GUI-based farm simulation game developed in C++ using
            the SFML (Simple and Fast Multimedia Library)`,image:new URL("/images/farm-frenzy-gui.jpeg",import.meta.url).href,content:Qh}]},{title:"🥗🎮 Buffet Rush – A C++ Game Based on a Buffet Experience",slug:"buffet-rush",description:'"Buffet Rush" is a fun, text-based or SFML-powered graphical C++ game where the player acts as a customer in a buffet. The goal is to build the perfect meal tray under time and nutritional constraints—while also managing cost, calories, and customer satisfaction.',image:new URL("/images/buffet.jpeg",import.meta.url).href,content:Jh,customReadMore:[{title:"🥗 Buffet Rush: A Tasty Game in C++ with GUI (SFML)",slug:"buffet-rush-with-gui",description:"Have you ever imagined what a buffet would look like if it turned into a fast-paced game? Welcome to Buffet Rush, a light-hearted yet educational C++ game powered by SFML, where you dodge unhealthy snacks and rack up your nutrition score!",image:new URL("/images/buffet-gui.jpeg",import.meta.url).href,content:ng}]},{title:"🚙 Jeep Adventure Game in C++ (with GUI + Weather Effects)",slug:"jeep-adventure-game",description:"This is a graphical C++ game using SFML, where you control a Jeep driving on a rainy road. Your goal is to avoid falling obstacles, stay visible in the rain, and survive long enough to earn points.",image:new URL("/images/jeep.jpeg",import.meta.url).href,content:tg},{title:"Echoes of Gaia",slug:"echoes-of-gaia",description:"A next-gen C++ game demo using real-time ray tracing, AI NPCs, and physics simulation.",image:new URL("/images/echo.jpeg",import.meta.url).href,content:ag},{title:"🌧️ Rainfall Reclaimer: EcoFrontline",slug:"rainfall-reclaimer",description:"Set in a near-future world suffering from extreme rainfall, acid rain, and rising floods, you play as an AI-assisted meteorological operative using drones, robots, and water recycling stations to monitor, mitigate, and survive climate chaos.",image:new URL("/images/rainfall-reclamation.jpeg",import.meta.url).href,content:sg}],eg={class:"text-white px-4 py-12"},rg={class:"max-w-7xl mx-auto"},og={class:"relative overflow-hidden"},ig=["data-aos-delay"],lg={class:"relative"},pg=["src"],cg={class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end transition-all duration-300 group-hover:backdrop-blur-sm"},dg={class:"text-lg text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300"},ug={class:"p-4"},fg={class:"text-xl font-semibold mb-2"},hg={class:"text-xs text-gray-400"},gg={__name:"Slider",setup(t){const n=Nt(Es);function a(){const u=window.innerWidth;return u<640?1:u<1024?2:3}const r=Nt(0),e=Nt(a()),s=()=>{e.value=a(),r.value=0},o=Kn(()=>n.value.slice(r.value,r.value+e.value)),i=Nt(null),l=u=>{Zp.fromTo(i.value,{x:u==="next"?300:-300,opacity:0},{x:0,opacity:1,duration:.5,ease:"power2.out"})},d=()=>{r.value+e.value>=n.value.length?r.value=0:r.value+=e.value,l("next")},c=()=>{r.value-e.value<0?r.value=Math.max(n.value.length-e.value,0):r.value-=e.value,l("prev")};return As(()=>{Zl.init({once:!0}),window.addEventListener("resize",s)}),Nr(()=>{window.removeEventListener("resize",s)}),(u,h)=>(zn(),Dn("section",eg,[Z("div",rg,[h[0]||(h[0]=Z("h2",{class:"text-3xl font-bold mb-8","data-aos":"fade-up"}," Latest Project Walkthroughs ",-1)),Z("div",og,[Z("div",{ref_key:"slider",ref:i,class:"flex transition-all duration-500 space-x-6 w-full"},[(zn(!0),Dn(Gn,null,nr(o.value,(p,g)=>(zn(),Dn("div",{key:p.id,class:"min-w-[300px] md:min-w-[350px] bg-gray-800 rounded-2xl shadow-xl overflow-hidden group relative","data-aos":"fade-up","data-aos-delay":100*g},[wn(bt(Xr),{to:`/blogs/${p.slug}`},{default:La(()=>[Z("div",lg,[Z("img",{src:p.image,alt:"Project Image",class:"w-full h-68 object-cover transition duration-300 group-hover:blur-sm"},null,8,pg),Z("div",cg,[Z("p",dg,Ut(p.description),1)])])]),_:2},1032,["to"]),Z("div",ug,[Z("h3",fg,Ut(p.title),1),Z("span",hg,Ut(p.date),1)])],8,ig))),128))],512),Z("button",{onClick:c,class:"absolute top-1/2 -translate-y-10 left-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ⬅ "),Z("button",{onClick:d,class:"absolute top-1/2 -translate-y-1/2 right-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ➡ ")])])]))}},mg="/images/logo.jpg",kg=(t,n)=>{const a=t.__vccOpts||t;for(const[r,e]of n)a[r]=e;return a},vg={},yg={class:"flex items-center justify-between"},bg={class:"w-20 relative left-5 sm:left-5 sm:w-32"},xg={class:"flex justify-between w-36 sm:w-42 relative right-6 sm:right-12"};function wg(t,n){const a=td("router-link");return zn(),Dn("header",null,[Z("nav",yg,[Z("div",bg,[wn(a,{to:"/"},{default:La(()=>n[0]||(n[0]=[Z("img",{src:mg,class:"cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out",alt:"Logo"},null,-1)])),_:1,__:[0]})]),Z("div",xg,[wn(a,{to:"/about-cpp-playgrounds"},{default:La(()=>n[1]||(n[1]=[Z("p",{class:"cursor-pointer"},"About Us",-1)])),_:1,__:[1]}),wn(a,{to:"/contact-cpp-playgrounds"},{default:La(()=>n[2]||(n[2]=[Z("p",{class:"cursor-pointer"},"Contact",-1)])),_:1,__:[2]})])])])}const Te=kg(vg,[["render",wg]]),_g={class:"flex sm:flex-row flex-col justify-around items-center w-full min-h-screen p-4 space-y-6 md:space-y-0 mt-20 md:mt-36"},Sg={__name:"Banner",setup(t){const n=Nt(null);let a,r,e;const s=["https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png","https://em-content.zobj.net/thumbs/240/apple/354/red-heart_2764-fe0f.png","https://em-content.zobj.net/thumbs/240/apple/354/video-game_1f3ae.png","https://em-content.zobj.net/thumbs/240/apple/354/keyboard_2328-fe0f.png","https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg","https://em-content.zobj.net/thumbs/240/apple/354/smiling-face-with-sunglasses_1f60e.png","https://em-content.zobj.net/thumbs/240/apple/354/money-bag_1f4b0.png","https://em-content.zobj.net/thumbs/240/apple/354/party-popper_1f389.png","https://em-content.zobj.net/thumbs/240/apple/354/technologist_1f9d1-200d-1f4bb.png"];function o(i,l,d){return ut.Bodies.rectangle(i,l,40,40,{render:{sprite:{texture:d,xScale:.4,yScale:.4}}})}return As(()=>{a=ut.Engine.create();const i=a.world;r=ut.Render.create({canvas:n.value,engine:a,options:{width:window.innerWidth,height:window.innerHeight,background:"transparent",wireframes:!1}}),ut.Render.run(r),e=ut.Runner.create(),ut.Runner.run(e,a);const l=ut.Bodies.rectangle(window.innerWidth/2,window.innerHeight+20,window.innerWidth,40,{isStatic:!0,render:{fillStyle:"#333"}});ut.World.add(i,l);const d=setInterval(()=>{const u=Math.random()*window.innerWidth,h=-50,p=Math.floor(Math.random()*s.length),g=o(u,h,s[p]);ut.World.add(i,g)},50),c=()=>{ut.Render.lookAt(r,{min:{x:0,y:0},max:{x:window.innerWidth,y:window.innerHeight}})};window.addEventListener("resize",c),Wr(()=>{clearInterval(d),window.removeEventListener("resize",c),ut.Render.stop(r),ut.Runner.stop(e)})}),(i,l)=>(zn(),Dn(Gn,null,[wn(Te),l[1]||(l[1]=Z("h1",{class:"font-serif text-center text-2xl sm:text-3xl mt-6 sm:mt-1","data-aos":"zoom-out","data-aos-delay":"100"}," CPP Playgrounds ",-1)),wn(Tf),Z("div",_g,[Z("canvas",{ref_key:"canvasRef",ref:n,class:"w-1/2 sm:w-1/2 md:w-1/2 h-[300px] md:h-[60vh] bg-black"},null,512),l[0]||(l[0]=Z("div",{class:"w-full sm:w-1/3 md:w-1/3 text-xl md:text-2xl text-white","data-aos":"fade-left","data-aos-delay":"250"},[Z("br"),Z("p",null,"Unlock your game development potential with our comprehensive C++ guides and step-by-step walkthroughs. Whether you're a beginner or looking to refine your skills, our expertly crafted tutorials cover everything from graphics and game loops to physics engines and AI logic. Learn how to build powerful, high-performance games using C++, the industry-standard language behind many of today’s biggest titles. With real-world examples, source code snippets, and hands-on projects, we make it easy for you to master the art of game development. Start building your dream game today — no experience needed! ")],-1))]),wn(gg),l[2]||(l[2]=Z("div",{class:"relative z-10 text-center mt-12 mb-3 text-sm"}," © 2025 Cpp Playgrounds. All rights reserved. ",-1))],64))}},jg={key:0,class:""},Cg={class:"text-center text-xl sm:text-3xl mt-8 px-4"},Tg={class:"mt-10 w-1/2 mx-auto px-4 sm:px-6 lg:px-8"},Pg=["src"],Mg=["innerHTML"],Eg={key:1,class:"text-center py-24 text-2xl"},Rg={key:2,class:"mt-20 border-t border-white/20 pt-10"},Ag={class:"space-y-8 max-w-3xl mx-auto px-4"},Ig=["onClick"],zg={class:"flex flex-col sm:flex-row gap-4 items-center"},Og=["src"],Fg={class:"text-lg font-bold text-white"},Lg={class:"text-sm text-white/80 mt-1 line-clamp-2"},Dg={class:"mt-20 border-t border-white/20 pt-10"},Bg={class:"space-y-8 max-w-3xl mx-auto px-4"},Gg=["onClick"],Ug={class:"flex flex-col sm:flex-row gap-4 items-center"},Wg=["src"],Ng={class:"text-lg font-bold text-white"},Vg={class:"text-sm text-white/80 mt-1"},Hg={__name:"BlogPage",setup(t){const n=xf(),a=bf(),r=Kn(()=>n.params.slug);function e(l){var d,c;for(const u of Es){if(u.slug===l)return u;const h=(d=u.related)==null?void 0:d.find(g=>g.slug===l);if(h)return h;const p=(c=u.customReadMore)==null?void 0:c.find(g=>g.slug===l);if(p)return p}return null}const s=Kn(()=>e(r.value)),o=Nt(null);As(()=>{o.value&&o.value.addEventListener("click",l=>{const d=l.target.closest("[data-router-link]");if(d){l.preventDefault();const c=d.getAttribute("data-router-link");c&&a.push(c)}})});const i=Kn(()=>Es.filter(l=>{var d;return l.slug!==((d=s.value)==null?void 0:d.slug)}).slice(0,3));return(l,d)=>{var c,u;return zn(),Dn(Gn,null,[wn(Te),s.value?(zn(),Dn("div",jg,[Z("h1",Cg,Ut(s.value.title),1),Z("div",Tg,[Z("img",{src:s.value.image,alt:"blog-img",class:"mt-4 w-full h-auto rounded-lg shadow-lg",style:{"max-height":"400px"}},null,8,Pg)]),Z("div",{class:"text-lg w-1/2 mx-auto",innerHTML:s.value.content,ref_key:"htmlContainer",ref:o},null,8,Mg)])):(zn(),Dn("div",Eg," Blog not found. ")),(u=(c=s.value)==null?void 0:c.customReadMore)!=null&&u.length?(zn(),Dn("div",Rg,[d[1]||(d[1]=Z("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"You Might Also Like",-1)),Z("div",Ag,[(zn(!0),Dn(Gn,null,nr(s.value.customReadMore,h=>(zn(),Dn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:p=>bt(a).push({name:"BlogPage",params:{slug:h.slug}})},[Z("div",zg,[Z("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Og),Z("div",null,[Z("h3",Fg,Ut(h.title),1),Z("p",Lg,Ut(h.excerpt),1),d[0]||(d[0]=Z("button",{class:"mt-2 px-3 py-1 bg-indigo-600 text-sm text-white rounded hover:bg-indigo-700"}," Read More → ",-1))])])],8,Ig))),128))])])):Od("",!0),Z("div",Dg,[d[2]||(d[2]=Z("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"Read More",-1)),Z("div",Bg,[(zn(!0),Dn(Gn,null,nr(i.value,h=>(zn(),Dn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:p=>bt(a).push({name:"BlogPage",params:{slug:h.slug}})},[Z("div",Ug,[Z("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Wg),Z("div",null,[Z("h3",Ng,Ut(h.title),1),Z("p",Vg,Ut(h.excerpt),1)])])],8,Gg))),128))])])],64)}}};var Ks={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var qg=Ks.exports,Ei;function Yg(){return Ei||(Ei=1,function(t,n){(function(a,r){t.exports=r()})(qg,function(){var a={};a.version="0.2.0";var r=a.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};a.configure=function(g){var f,m;for(f in g)m=g[f],m!==void 0&&g.hasOwnProperty(f)&&(r[f]=m);return this},a.status=null,a.set=function(g){var f=a.isStarted();g=e(g,r.minimum,1),a.status=g===1?null:g;var m=a.render(!f),v=m.querySelector(r.barSelector),b=r.speed,_=r.easing;return m.offsetWidth,i(function(S){r.positionUsing===""&&(r.positionUsing=a.getPositioningCSS()),l(v,o(g,b,_)),g===1?(l(m,{transition:"none",opacity:1}),m.offsetWidth,setTimeout(function(){l(m,{transition:"all "+b+"ms linear",opacity:0}),setTimeout(function(){a.remove(),S()},b)},b)):setTimeout(S,b)}),this},a.isStarted=function(){return typeof a.status=="number"},a.start=function(){a.status||a.set(0);var g=function(){setTimeout(function(){a.status&&(a.trickle(),g())},r.trickleSpeed)};return r.trickle&&g(),this},a.done=function(g){return!g&&!a.status?this:a.inc(.3+.5*Math.random()).set(1)},a.inc=function(g){var f=a.status;return f?(typeof g!="number"&&(g=(1-f)*e(Math.random()*f,.1,.95)),f=e(f+g,0,.994),a.set(f)):a.start()},a.trickle=function(){return a.inc(Math.random()*r.trickleRate)},function(){var g=0,f=0;a.promise=function(m){return!m||m.state()==="resolved"?this:(f===0&&a.start(),g++,f++,m.always(function(){f--,f===0?(g=0,a.done()):a.set((g-f)/g)}),this)}}(),a.render=function(g){if(a.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var f=document.createElement("div");f.id="nprogress",f.innerHTML=r.template;var m=f.querySelector(r.barSelector),v=g?"-100":s(a.status||0),b=document.querySelector(r.parent),_;return l(m,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),r.showSpinner||(_=f.querySelector(r.spinnerSelector),_&&p(_)),b!=document.body&&c(b,"nprogress-custom-parent"),b.appendChild(f),f},a.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(r.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&p(g)},a.isRendered=function(){return!!document.getElementById("nprogress")},a.getPositioningCSS=function(){var g=document.body.style,f="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return f+"Perspective"in g?"translate3d":f+"Transform"in g?"translate":"margin"};function e(g,f,m){return g<f?f:g>m?m:g}function s(g){return(-1+g)*100}function o(g,f,m){var v;return r.positionUsing==="translate3d"?v={transform:"translate3d("+s(g)+"%,0,0)"}:r.positionUsing==="translate"?v={transform:"translate("+s(g)+"%,0)"}:v={"margin-left":s(g)+"%"},v.transition="all "+f+"ms "+m,v}var i=function(){var g=[];function f(){var m=g.shift();m&&m(f)}return function(m){g.push(m),g.length==1&&f()}}(),l=function(){var g=["Webkit","O","Moz","ms"],f={};function m(S){return S.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(k,x){return x.toUpperCase()})}function v(S){var k=document.body.style;if(S in k)return S;for(var x=g.length,w=S.charAt(0).toUpperCase()+S.slice(1),y;x--;)if(y=g[x]+w,y in k)return y;return S}function b(S){return S=m(S),f[S]||(f[S]=v(S))}function _(S,k,x){k=b(k),S.style[k]=x}return function(S,k){var x=arguments,w,y;if(x.length==2)for(w in k)y=k[w],y!==void 0&&k.hasOwnProperty(w)&&_(S,w,y);else _(S,x[1],x[2])}}();function d(g,f){var m=typeof g=="string"?g:h(g);return m.indexOf(" "+f+" ")>=0}function c(g,f){var m=h(g),v=m+f;d(m,f)||(g.className=v.substring(1))}function u(g,f){var m=h(g),v;d(g,f)&&(v=m.replace(" "+f+" "," "),g.className=v.substring(1,v.length-1))}function h(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function p(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return a})}(Ks)),Ks.exports}var $g=Yg();const mo=Xl($g),Kg="/images/about_us.jpeg",Xg={class:"max-w-4xl mx-auto px-6 py-12 md:py-20"},Zg={class:"space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"},Qg={class:"text-center mt-16 px-6 py-8 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-xl border border-gray-200 dark:border-gray-700"},Jg={__name:"AboutUs",setup(t){return(n,a)=>(zn(),Dn(Gn,null,[wn(Te),Z("div",Xg,[a[4]||(a[4]=rr('<div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 mb-6"> 🎮 From Player to Creator: My C++ Game Dev Journey </h1><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"></div></div><div class="mb-16 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500"><img src="'+Kg+'" alt="Game development workspace" class="w-full h-auto object-cover"></div>',2)),Z("div",Zg,[a[3]||(a[3]=rr('<p class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500"><span class="text-3xl mr-2">👾</span> I still remember the first time a video game truly captivated me. It wasn&#39;t just the immersive worlds or thrilling gameplay—I became obsessed with understanding <em class="font-semibold text-blue-600 dark:text-blue-400">how</em> these digital magic tricks worked. As a wide-eyed teenager, I&#39;d tear through game files, stumbling upon mysterious <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.cpp</code> extensions that might as well have been ancient hieroglyphics. </p><p class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500"><span class="text-3xl mr-2">🔥</span> My early coding attempts were brutal. I&#39;d stare at walls of C++ syntax—templates that looked like algebraic nightmares, pointer errors that crashed my screen, and linker errors that haunted my dreams. But every small breakthrough felt like leveling up in real life. That first moving sprite? <span class="font-bold text-amber-600 dark:text-amber-400">Pure euphoria</span>. My initial collision detection that actually worked? <span class="font-bold text-amber-600 dark:text-amber-400">Better than any boss fight</span>. </p><div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner"><h3 class="text-2xl font-bold mb-4 flex items-center"><span class="text-3xl mr-3">💡</span> Through years of trial and error, I discovered: </h3><ul class="space-y-4 pl-2"><li class="flex items-start"><span class="text-amber-500 mr-3">⚙️</span><span><strong class="text-gray-900 dark:text-white">Game code isn&#39;t about perfection</strong>—it&#39;s about systems talking to each other</span></li><li class="flex items-start"><span class="text-blue-500 mr-3">🧠</span><span><strong class="text-gray-900 dark:text-white">The best learning happens when you&#39;re fixing broken things</strong>, not just copying working examples</span></li><li class="flex items-start"><span class="text-purple-500 mr-3">🚀</span><span><strong class="text-gray-900 dark:text-white">C++&#39;s complexity is its superpower</strong>—once you tame it, you can bend hardware to your will</span></li></ul></div><p class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500"><span class="text-3xl mr-2">✨</span> This site is the mentor I wish I&#39;d had. Every tutorial solves a problem I struggled with—from &quot;why does my character clip through walls?&quot; to &quot;how do I make NPCs <em>think</em>?&quot; The code snippets are battle-tested, the explanations assume zero knowledge (but respect your intelligence), and the projects build toward actual portfolio pieces. </p>',4)),Z("div",Qg,[a[1]||(a[1]=Z("h3",{class:"text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center"},[Z("span",{class:"mr-3"},"🎯"),Al(" Ready to Level Up? ")],-1)),a[2]||(a[2]=Z("p",{class:"text-xl mb-6"}," Whether you're modding your first game or architecting an engine from scratch, I'm here to help you skip the years of frustration. ",-1)),wn(bt(Xr),{to:"/"},{default:La(()=>a[0]||(a[0]=[Z("button",{class:"px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"}," Start Learning Now → ",-1)])),_:1,__:[0]})])])])],64))}},nm={__name:"ContactUs",setup(t){return(n,a)=>(zn(),Dn(Gn,null,[wn(Te),a[0]||(a[0]=rr('<div class="py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"><span class="inline-block mr-3">👋</span> Let&#39;s Connect! </h1><p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"> Whether you&#39;re stuck on a bug, want to suggest improvements, or just geek out about game dev </p><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full mt-6"></div></div><div class="grid md:grid-cols-2 gap-8"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4"><span class="text-2xl">📬</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Shoot Us a Message</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Found a bug in our code? Need advice on your project? Want mentorship or course recommendations? </p><div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500"><p class="font-mono text-lg break-all text-blue-600 dark:text-blue-300"> programmingninja@proton.me </p><p class="text-sm text-gray-500 dark:text-gray-400 mt-2"> (We typically reply within 24 hours) </p></div><p class="text-gray-600 dark:text-gray-300"><span class="font-bold">Pro Tip:</span> Include &quot;[GameDev]&quot; in your subject line to skip the queue! </p></div></div></div><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4"><span class="text-2xl">👨‍💻</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Join Community</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Connect with other game developers, share projects, and get real-time help: </p><div class="space-y-4"><a href="https://cppalliance.org/slack/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">💬</span><div><h3 class="font-bold">C++ Slack/Discord</h3><p class="text-sm text-gray-500 dark:text-gray-400">Live chat with developers. Best for real-time help</p></div></a><a href="https://www.reddit.com/r/cpp/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">🐦</span><div><h3 class="font-bold">r/cpp (Reddit)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Best for language updates, technical discussions</p></div></a><a href="https://stackoverflow.com/questions/tagged/c%252b%252b" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">📱</span><div><h3 class="font-bold">Stack Overflow (C++ Tag)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Code-specific questions</p></div></a></div></div></div></div></div><div class="mt-16 text-center"><p class="text-white text-md font-extrabold"><span class="inline-block mr-2 text-xl font-extrabold">⚠️</span> Warning: Contacting us about game dev may result in spontaneous coding sessions, excessive coffee consumption, and unexpected friendships. <span class="inline-block ml-2">☕</span></p></div></div></div>',1))],64))}};mo.configure({showSpinner:!1});const Pe=vf({history:$u("/"),scrollBehavior(t,n,a){return{top:0}},routes:[{path:"/",component:Sg},{path:"/about-cpp-playgrounds",name:"AboutUs",component:Jg,meta:{title:"About Us | cpp-playgrounds"}},{path:"/contact-cpp-playgrounds",name:"ContactUs",component:nm,meta:{title:"Contact US | cpp-playgrounds"}},{path:"/blogs/:slug",name:"BlogPage",component:Hg,meta:{title:""}}],scrollBehavior(){return{top:0}}});Pe.beforeEach((t,n,a)=>{mo.start(),a()});Pe.afterEach(()=>{mo.done()});Pe.afterEach((t,n)=>{Br(()=>{var e;let a="cpp-playgrounds";const r=t.matched.slice().reverse().find(s=>s.meta&&s.meta.title);if(r&&r.meta.title&&(a=r.meta.title),t.name==="BlogPage"){const s=Es.find(o=>o.slug===t.params.slug);if(s)a=`${s.title} | cpp-playgrounds`;else for(const o of Es){const i=(e=o.customReadMore)==null?void 0:e.find(l=>l.slug===t.params.slug);if(i){a=`${i.title} | cpp-playgrounds`;break}}}document.title=a,typeof gtag=="function"?gtag("event","page_view",{page_title:a,page_location:window.location.href,page_path:t.fullPath}):console.warn("gtag not defined")})});Zl.init();const Qp=gu(wf);Qp.use(Pe);Qp.mount("#app");
