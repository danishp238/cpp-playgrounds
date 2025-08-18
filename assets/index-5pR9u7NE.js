(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cr(a){const n=Object.create(null);for(const t of a.split(","))n[t]=1;return t=>t in n}const wn={},It=[],Ea=()=>{},Jp=()=>!1,ce=a=>a.charCodeAt(0)===111&&a.charCodeAt(1)===110&&(a.charCodeAt(2)>122||a.charCodeAt(2)<97),Tr=a=>a.startsWith("onUpdate:"),Yn=Object.assign,Pr=(a,n)=>{const t=a.indexOf(n);t>-1&&a.splice(t,1)},nd=Object.prototype.hasOwnProperty,yn=(a,n)=>nd.call(a,n),en=Array.isArray,Ft=a=>ue(a)==="[object Map]",Ri=a=>ue(a)==="[object Set]",rn=a=>typeof a=="function",Rn=a=>typeof a=="string",dt=a=>typeof a=="symbol",_n=a=>a!==null&&typeof a=="object",Ei=a=>(_n(a)||rn(a))&&rn(a.then)&&rn(a.catch),Ii=Object.prototype.toString,ue=a=>Ii.call(a),ad=a=>ue(a).slice(8,-1),Fi=a=>ue(a)==="[object Object]",Ar=a=>Rn(a)&&a!=="NaN"&&a[0]!=="-"&&""+parseInt(a,10)===a,rs=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),he=a=>{const n=Object.create(null);return t=>n[t]||(n[t]=a(t))},td=/-(\w)/g,ya=he(a=>a.replace(td,(n,t)=>t?t.toUpperCase():"")),sd=/\B([A-Z])/g,St=he(a=>a.replace(sd,"-$1").toLowerCase()),fe=he(a=>a.charAt(0).toUpperCase()+a.slice(1)),Ae=he(a=>a?`on${fe(a)}`:""),st=(a,n)=>!Object.is(a,n),Me=(a,...n)=>{for(let t=0;t<a.length;t++)a[t](...n)},zi=(a,n,t,r=!1)=>{Object.defineProperty(a,n,{configurable:!0,enumerable:!1,writable:r,value:t})},ed=a=>{const n=parseFloat(a);return isNaN(n)?a:n};let bo;const me=()=>bo||(bo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mr(a){if(en(a)){const n={};for(let t=0;t<a.length;t++){const r=a[t],e=Rn(r)?ld(r):Mr(r);if(e)for(const s in e)n[s]=e[s]}return n}else if(Rn(a)||_n(a))return a}const rd=/;(?![^(]*\))/g,od=/:([^]+)/,id=/\/\*[^]*?\*\//g;function ld(a){const n={};return a.replace(id,"").split(rd).forEach(t=>{if(t){const r=t.split(od);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Rr(a){let n="";if(Rn(a))n=a;else if(en(a))for(let t=0;t<a.length;t++){const r=Rr(a[t]);r&&(n+=r+" ")}else if(_n(a))for(const t in a)a[t]&&(n+=t+" ");return n.trim()}const pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dd=Cr(pd);function Oi(a){return!!a||a===""}const Di=a=>!!(a&&a.__v_isRef===!0),Ga=a=>Rn(a)?a:a==null?"":en(a)||_n(a)&&(a.toString===Ii||!rn(a.toString))?Di(a)?Ga(a.value):JSON.stringify(a,Bi,2):String(a),Bi=(a,n)=>Di(n)?Bi(a,n.value):Ft(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,e],s)=>(t[Re(r,s)+" =>"]=e,t),{})}:Ri(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Re(t))}:dt(n)?Re(n):_n(n)&&!en(n)&&!Fi(n)?String(n):n,Re=(a,n="")=>{var t;return dt(a)?`Symbol(${(t=a.description)!=null?t:n})`:a};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zn;class cd{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zn,!n&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Zn;try{return Zn=this,n()}finally{Zn=t}}}on(){++this._on===1&&(this.prevScope=Zn,Zn=this)}off(){this._on>0&&--this._on===0&&(Zn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function ud(){return Zn}let vn;const Ee=new WeakSet;class Li{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zn&&Zn.active&&Zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ee.has(this)&&(Ee.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vo(this),Wi(this);const n=vn,t=ba;vn=this,ba=!0;try{return this.fn()}finally{Hi(this),vn=n,ba=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Fr(n);this.deps=this.depsTail=void 0,vo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ee.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ke(this)&&this.run()}get dirty(){return Ke(this)}}let Ui=0,os,is;function Gi(a,n=!1){if(a.flags|=8,n){a.next=is,is=a;return}a.next=os,os=a}function Er(){Ui++}function Ir(){if(--Ui>0)return;if(is){let n=is;for(is=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let a;for(;os;){let n=os;for(os=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){a||(a=r)}n=t}}if(a)throw a}function Wi(a){for(let n=a.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Hi(a){let n,t=a.depsTail,r=t;for(;r;){const e=r.prevDep;r.version===-1?(r===t&&(t=e),Fr(r),hd(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}a.deps=n,a.depsTail=t}function Ke(a){for(let n=a.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Ni(n.dep.computed)||n.dep.version!==n.version))return!0;return!!a._dirty}function Ni(a){if(a.flags&4&&!(a.flags&16)||(a.flags&=-17,a.globalVersion===gs)||(a.globalVersion=gs,!a.isSSR&&a.flags&128&&(!a.deps&&!a._dirty||!Ke(a))))return;a.flags|=2;const n=a.dep,t=vn,r=ba;vn=a,ba=!0;try{Wi(a);const e=a.fn(a._value);(n.version===0||st(e,a._value))&&(a.flags|=128,a._value=e,n.version++)}catch(e){throw n.version++,e}finally{vn=t,ba=r,Hi(a),a.flags&=-3}}function Fr(a,n=!1){const{dep:t,prevSub:r,nextSub:e}=a;if(r&&(r.nextSub=e,a.prevSub=void 0),e&&(e.prevSub=r,a.nextSub=void 0),t.subs===a&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Fr(s,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function hd(a){const{prevDep:n,nextDep:t}=a;n&&(n.nextDep=t,a.prevDep=void 0),t&&(t.prevDep=n,a.nextDep=void 0)}let ba=!0;const Vi=[];function Na(){Vi.push(ba),ba=!1}function Va(){const a=Vi.pop();ba=a===void 0?!0:a}function vo(a){const{cleanup:n}=a;if(a.cleanup=void 0,n){const t=vn;vn=void 0;try{n()}finally{vn=t}}}let gs=0;class fd{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!vn||!ba||vn===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vn)t=this.activeLink=new fd(vn,this),vn.deps?(t.prevDep=vn.depsTail,vn.depsTail.nextDep=t,vn.depsTail=t):vn.deps=vn.depsTail=t,Yi(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=vn.depsTail,t.nextDep=void 0,vn.depsTail.nextDep=t,vn.depsTail=t,vn.deps===t&&(vn.deps=r)}return t}trigger(n){this.version++,gs++,this.notify(n)}notify(n){Er();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ir()}}}function Yi(a){if(a.dep.sc++,a.sub.flags&4){const n=a.dep.computed;if(n&&!a.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)Yi(r)}const t=a.dep.subs;t!==a&&(a.prevSub=t,t&&(t.nextSub=a)),a.dep.subs=a}}const Ze=new WeakMap,bt=Symbol(""),Qe=Symbol(""),ys=Symbol("");function Ln(a,n,t){if(ba&&vn){let r=Ze.get(a);r||Ze.set(a,r=new Map);let e=r.get(t);e||(r.set(t,e=new zr),e.map=r,e.key=t),e.track()}}function Wa(a,n,t,r,e,s){const o=Ze.get(a);if(!o){gs++;return}const i=l=>{l&&l.trigger()};if(Er(),n==="clear")o.forEach(i);else{const l=en(a),c=l&&Ar(t);if(l&&t==="length"){const d=Number(r);o.forEach((u,f)=>{(f==="length"||f===ys||!dt(f)&&f>=d)&&i(u)})}else switch((t!==void 0||o.has(void 0))&&i(o.get(t)),c&&i(o.get(ys)),n){case"add":l?c&&i(o.get("length")):(i(o.get(bt)),Ft(a)&&i(o.get(Qe)));break;case"delete":l||(i(o.get(bt)),Ft(a)&&i(o.get(Qe)));break;case"set":Ft(a)&&i(o.get(bt));break}}Ir()}function Tt(a){const n=gn(a);return n===a?n:(Ln(n,"iterate",ys),ga(a)?n:n.map(On))}function ge(a){return Ln(a=gn(a),"iterate",ys),a}const md={__proto__:null,[Symbol.iterator](){return Ie(this,Symbol.iterator,On)},concat(...a){return Tt(this).concat(...a.map(n=>en(n)?Tt(n):n))},entries(){return Ie(this,"entries",a=>(a[1]=On(a[1]),a))},every(a,n){return Oa(this,"every",a,n,void 0,arguments)},filter(a,n){return Oa(this,"filter",a,n,t=>t.map(On),arguments)},find(a,n){return Oa(this,"find",a,n,On,arguments)},findIndex(a,n){return Oa(this,"findIndex",a,n,void 0,arguments)},findLast(a,n){return Oa(this,"findLast",a,n,On,arguments)},findLastIndex(a,n){return Oa(this,"findLastIndex",a,n,void 0,arguments)},forEach(a,n){return Oa(this,"forEach",a,n,void 0,arguments)},includes(...a){return Fe(this,"includes",a)},indexOf(...a){return Fe(this,"indexOf",a)},join(a){return Tt(this).join(a)},lastIndexOf(...a){return Fe(this,"lastIndexOf",a)},map(a,n){return Oa(this,"map",a,n,void 0,arguments)},pop(){return Qt(this,"pop")},push(...a){return Qt(this,"push",a)},reduce(a,...n){return wo(this,"reduce",a,n)},reduceRight(a,...n){return wo(this,"reduceRight",a,n)},shift(){return Qt(this,"shift")},some(a,n){return Oa(this,"some",a,n,void 0,arguments)},splice(...a){return Qt(this,"splice",a)},toReversed(){return Tt(this).toReversed()},toSorted(a){return Tt(this).toSorted(a)},toSpliced(...a){return Tt(this).toSpliced(...a)},unshift(...a){return Qt(this,"unshift",a)},values(){return Ie(this,"values",On)}};function Ie(a,n,t){const r=ge(a),e=r[n]();return r!==a&&!ga(a)&&(e._next=e.next,e.next=()=>{const s=e._next();return s.value&&(s.value=t(s.value)),s}),e}const gd=Array.prototype;function Oa(a,n,t,r,e,s){const o=ge(a),i=o!==a&&!ga(a),l=o[n];if(l!==gd[n]){const u=l.apply(a,s);return i?On(u):u}let c=t;o!==a&&(i?c=function(u,f){return t.call(this,On(u),f,a)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,a)}));const d=l.call(o,c,r);return i&&e?e(d):d}function wo(a,n,t,r){const e=ge(a);let s=t;return e!==a&&(ga(a)?t.length>3&&(s=function(o,i,l){return t.call(this,o,i,l,a)}):s=function(o,i,l){return t.call(this,o,On(i),l,a)}),e[n](s,...r)}function Fe(a,n,t){const r=gn(a);Ln(r,"iterate",ys);const e=r[n](...t);return(e===-1||e===!1)&&Br(t[0])?(t[0]=gn(t[0]),r[n](...t)):e}function Qt(a,n,t=[]){Na(),Er();const r=gn(a)[n].apply(a,t);return Ir(),Va(),r}const yd=Cr("__proto__,__v_isRef,__isVue"),qi=new Set(Object.getOwnPropertyNames(Symbol).filter(a=>a!=="arguments"&&a!=="caller").map(a=>Symbol[a]).filter(dt));function kd(a){dt(a)||(a=String(a));const n=gn(this);return Ln(n,"has",a),n.hasOwnProperty(a)}class $i{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const e=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!e;if(t==="__v_isReadonly")return e;if(t==="__v_isShallow")return s;if(t==="__v_raw")return r===(e?s?Pd:Qi:s?Zi:Ki).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const o=en(n);if(!e){let l;if(o&&(l=md[t]))return l;if(t==="hasOwnProperty")return kd}const i=Reflect.get(n,t,Nn(n)?n:r);return(dt(t)?qi.has(t):yd(t))||(e||Ln(n,"get",t),s)?i:Nn(i)?o&&Ar(t)?i:i.value:_n(i)?e?nl(i):ye(i):i}}class Xi extends $i{constructor(n=!1){super(!1,n)}set(n,t,r,e){let s=n[t];if(!this._isShallow){const l=ot(s);if(!ga(r)&&!ot(r)&&(s=gn(s),r=gn(r)),!en(n)&&Nn(s)&&!Nn(r))return l?!1:(s.value=r,!0)}const o=en(n)&&Ar(t)?Number(t)<n.length:yn(n,t),i=Reflect.set(n,t,r,Nn(n)?n:e);return n===gn(e)&&(o?st(r,s)&&Wa(n,"set",t,r):Wa(n,"add",t,r)),i}deleteProperty(n,t){const r=yn(n,t);n[t];const e=Reflect.deleteProperty(n,t);return e&&r&&Wa(n,"delete",t,void 0),e}has(n,t){const r=Reflect.has(n,t);return(!dt(t)||!qi.has(t))&&Ln(n,"has",t),r}ownKeys(n){return Ln(n,"iterate",en(n)?"length":bt),Reflect.ownKeys(n)}}class bd extends $i{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const vd=new Xi,wd=new bd,xd=new Xi(!0);const Je=a=>a,zs=a=>Reflect.getPrototypeOf(a);function jd(a,n,t){return function(...r){const e=this.__v_raw,s=gn(e),o=Ft(s),i=a==="entries"||a===Symbol.iterator&&o,l=a==="keys"&&o,c=e[a](...r),d=t?Je:n?Ks:On;return!n&&Ln(s,"iterate",l?Qe:bt),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:i?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function Os(a){return function(...n){return a==="delete"?!1:a==="clear"?void 0:this}}function _d(a,n){const t={get(e){const s=this.__v_raw,o=gn(s),i=gn(e);a||(st(e,i)&&Ln(o,"get",e),Ln(o,"get",i));const{has:l}=zs(o),c=n?Je:a?Ks:On;if(l.call(o,e))return c(s.get(e));if(l.call(o,i))return c(s.get(i));s!==o&&s.get(e)},get size(){const e=this.__v_raw;return!a&&Ln(gn(e),"iterate",bt),Reflect.get(e,"size",e)},has(e){const s=this.__v_raw,o=gn(s),i=gn(e);return a||(st(e,i)&&Ln(o,"has",e),Ln(o,"has",i)),e===i?s.has(e):s.has(e)||s.has(i)},forEach(e,s){const o=this,i=o.__v_raw,l=gn(i),c=n?Je:a?Ks:On;return!a&&Ln(l,"iterate",bt),i.forEach((d,u)=>e.call(s,c(d),c(u),o))}};return Yn(t,a?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(e){!n&&!ga(e)&&!ot(e)&&(e=gn(e));const s=gn(this);return zs(s).has.call(s,e)||(s.add(e),Wa(s,"add",e,e)),this},set(e,s){!n&&!ga(s)&&!ot(s)&&(s=gn(s));const o=gn(this),{has:i,get:l}=zs(o);let c=i.call(o,e);c||(e=gn(e),c=i.call(o,e));const d=l.call(o,e);return o.set(e,s),c?st(s,d)&&Wa(o,"set",e,s):Wa(o,"add",e,s),this},delete(e){const s=gn(this),{has:o,get:i}=zs(s);let l=o.call(s,e);l||(e=gn(e),l=o.call(s,e)),i&&i.call(s,e);const c=s.delete(e);return l&&Wa(s,"delete",e,void 0),c},clear(){const e=gn(this),s=e.size!==0,o=e.clear();return s&&Wa(e,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(e=>{t[e]=jd(e,a,n)}),t}function Or(a,n){const t=_d(a,n);return(r,e,s)=>e==="__v_isReactive"?!a:e==="__v_isReadonly"?a:e==="__v_raw"?r:Reflect.get(yn(t,e)&&e in r?t:r,e,s)}const Sd={get:Or(!1,!1)},Cd={get:Or(!1,!0)},Td={get:Or(!0,!1)};const Ki=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,Pd=new WeakMap;function Ad(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Md(a){return a.__v_skip||!Object.isExtensible(a)?0:Ad(ad(a))}function ye(a){return ot(a)?a:Dr(a,!1,vd,Sd,Ki)}function Ji(a){return Dr(a,!1,xd,Cd,Zi)}function nl(a){return Dr(a,!0,wd,Td,Qi)}function Dr(a,n,t,r,e){if(!_n(a)||a.__v_raw&&!(n&&a.__v_isReactive))return a;const s=Md(a);if(s===0)return a;const o=e.get(a);if(o)return o;const i=new Proxy(a,s===2?r:t);return e.set(a,i),i}function zt(a){return ot(a)?zt(a.__v_raw):!!(a&&a.__v_isReactive)}function ot(a){return!!(a&&a.__v_isReadonly)}function ga(a){return!!(a&&a.__v_isShallow)}function Br(a){return a?!!a.__v_raw:!1}function gn(a){const n=a&&a.__v_raw;return n?gn(n):a}function Rd(a){return!yn(a,"__v_skip")&&Object.isExtensible(a)&&zi(a,"__v_skip",!0),a}const On=a=>_n(a)?ye(a):a,Ks=a=>_n(a)?nl(a):a;function Nn(a){return a?a.__v_isRef===!0:!1}function Ha(a){return al(a,!1)}function Ed(a){return al(a,!0)}function al(a,n){return Nn(a)?a:new Id(a,n)}class Id{constructor(n,t){this.dep=new zr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:gn(n),this._value=t?n:On(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||ga(n)||ot(n);n=r?n:gn(n),st(n,t)&&(this._rawValue=n,this._value=r?n:On(n),this.dep.trigger())}}function va(a){return Nn(a)?a.value:a}const Fd={get:(a,n,t)=>n==="__v_raw"?a:va(Reflect.get(a,n,t)),set:(a,n,t,r)=>{const e=a[n];return Nn(e)&&!Nn(t)?(e.value=t,!0):Reflect.set(a,n,t,r)}};function tl(a){return zt(a)?a:new Proxy(a,Fd)}class zd{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new zr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&vn!==this)return Gi(this,!0),!0}get value(){const n=this.dep.track();return Ni(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Od(a,n,t=!1){let r,e;return rn(a)?r=a:(r=a.get,e=a.set),new zd(r,e,t)}const Ds={},Zs=new WeakMap;let gt;function Dd(a,n=!1,t=gt){if(t){let r=Zs.get(t);r||Zs.set(t,r=[]),r.push(a)}}function Bd(a,n,t=wn){const{immediate:r,deep:e,once:s,scheduler:o,augmentJob:i,call:l}=t,c=_=>e?_:ga(_)||e===!1||e===0?Ja(_,1):Ja(_);let d,u,f,p,m=!1,h=!1;if(Nn(a)?(u=()=>a.value,m=ga(a)):zt(a)?(u=()=>c(a),m=!0):en(a)?(h=!0,m=a.some(_=>zt(_)||ga(_)),u=()=>a.map(_=>{if(Nn(_))return _.value;if(zt(_))return c(_);if(rn(_))return l?l(_,2):_()})):rn(a)?n?u=l?()=>l(a,2):a:u=()=>{if(f){Na();try{f()}finally{Va()}}const _=gt;gt=d;try{return l?l(a,3,[p]):a(p)}finally{gt=_}}:u=Ea,n&&e){const _=u,y=e===!0?1/0:e;u=()=>Ja(_(),y)}const g=ud(),k=()=>{d.stop(),g&&g.active&&Pr(g.effects,d)};if(s&&n){const _=n;n=(...y)=>{_(...y),k()}}let v=h?new Array(a.length).fill(Ds):Ds;const j=_=>{if(!(!(d.flags&1)||!d.dirty&&!_))if(n){const y=d.run();if(e||m||(h?y.some((w,x)=>st(w,v[x])):st(y,v))){f&&f();const w=gt;gt=d;try{const x=[y,v===Ds?void 0:h&&v[0]===Ds?[]:v,p];v=y,l?l(n,3,x):n(...x)}finally{gt=w}}}else d.run()};return i&&i(j),d=new Li(u),d.scheduler=o?()=>o(j,!1):j,p=_=>Dd(_,!1,d),f=d.onStop=()=>{const _=Zs.get(d);if(_){if(l)l(_,4);else for(const y of _)y();Zs.delete(d)}},n?r?j(!0):v=d.run():o?o(j.bind(null,!0),!0):d.run(),k.pause=d.pause.bind(d),k.resume=d.resume.bind(d),k.stop=k,k}function Ja(a,n=1/0,t){if(n<=0||!_n(a)||a.__v_skip||(t=t||new Set,t.has(a)))return a;if(t.add(a),n--,Nn(a))Ja(a.value,n,t);else if(en(a))for(let r=0;r<a.length;r++)Ja(a[r],n,t);else if(Ri(a)||Ft(a))a.forEach(r=>{Ja(r,n,t)});else if(Fi(a)){for(const r in a)Ja(a[r],n,t);for(const r of Object.getOwnPropertySymbols(a))Object.prototype.propertyIsEnumerable.call(a,r)&&Ja(a[r],n,t)}return a}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rs(a,n,t,r){try{return r?a(...r):a()}catch(e){ke(e,n,t)}}function Fa(a,n,t,r){if(rn(a)){const e=Rs(a,n,t,r);return e&&Ei(e)&&e.catch(s=>{ke(s,n,t)}),e}if(en(a)){const e=[];for(let s=0;s<a.length;s++)e.push(Fa(a[s],n,t,r));return e}}function ke(a,n,t,r=!0){const e=n?n.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||wn;if(n){let i=n.parent;const l=n.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](a,l,c)===!1)return}i=i.parent}if(s){Na(),Rs(s,null,10,[a,l,c]),Va();return}}Ld(a,t,e,r,o)}function Ld(a,n,t,r=!0,e=!1){if(e)throw a;console.error(a)}const $n=[];let Ta=-1;const Ot=[];let Ka=null,At=0;const sl=Promise.resolve();let Qs=null;function Lr(a){const n=Qs||sl;return a?n.then(this?a.bind(this):a):n}function Ud(a){let n=Ta+1,t=$n.length;for(;n<t;){const r=n+t>>>1,e=$n[r],s=ks(e);s<a||s===a&&e.flags&2?n=r+1:t=r}return n}function Ur(a){if(!(a.flags&1)){const n=ks(a),t=$n[$n.length-1];!t||!(a.flags&2)&&n>=ks(t)?$n.push(a):$n.splice(Ud(n),0,a),a.flags|=1,el()}}function el(){Qs||(Qs=sl.then(ol))}function Gd(a){en(a)?Ot.push(...a):Ka&&a.id===-1?Ka.splice(At+1,0,a):a.flags&1||(Ot.push(a),a.flags|=1),el()}function xo(a,n,t=Ta+1){for(;t<$n.length;t++){const r=$n[t];if(r&&r.flags&2){if(a&&r.id!==a.uid)continue;$n.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function rl(a){if(Ot.length){const n=[...new Set(Ot)].sort((t,r)=>ks(t)-ks(r));if(Ot.length=0,Ka){Ka.push(...n);return}for(Ka=n,At=0;At<Ka.length;At++){const t=Ka[At];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ka=null,At=0}}const ks=a=>a.id==null?a.flags&2?-1:1/0:a.id;function ol(a){try{for(Ta=0;Ta<$n.length;Ta++){const n=$n[Ta];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Rs(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ta<$n.length;Ta++){const n=$n[Ta];n&&(n.flags&=-2)}Ta=-1,$n.length=0,rl(),Qs=null,($n.length||Ot.length)&&ol()}}let ka=null,il=null;function Js(a){const n=ka;return ka=a,il=a&&a.type.__scopeId||null,n}function Dt(a,n=ka,t){if(!n||a._n)return a;const r=(...e)=>{r._d&&Eo(-1);const s=Js(n);let o;try{o=a(...e)}finally{Js(s),r._d&&Eo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ut(a,n,t,r){const e=a.dirs,s=n&&n.dirs;for(let o=0;o<e.length;o++){const i=e[o];s&&(i.oldValue=s[o].value);let l=i.dir[r];l&&(Na(),Fa(l,t,8,[a.el,i,a,n]),Va())}}const Wd=Symbol("_vte"),Hd=a=>a.__isTeleport;function Gr(a,n){a.shapeFlag&6&&a.component?(a.transition=n,Gr(a.component.subTree,n)):a.shapeFlag&128?(a.ssContent.transition=n.clone(a.ssContent),a.ssFallback.transition=n.clone(a.ssFallback)):a.transition=n}/*! #__NO_SIDE_EFFECTS__ */function ll(a,n){return rn(a)?Yn({name:a.name},n,{setup:a}):a}function pl(a){a.ids=[a.ids[0]+a.ids[2]+++"-",0,0]}function ne(a,n,t,r,e=!1){if(en(a)){a.forEach((m,h)=>ne(m,n&&(en(n)?n[h]:n),t,r,e));return}if(ls(r)&&!e){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ne(a,n,t,r.component.subTree);return}const s=r.shapeFlag&4?qr(r.component):r.el,o=e?null:s,{i,r:l}=a,c=n&&n.r,d=i.refs===wn?i.refs={}:i.refs,u=i.setupState,f=gn(u),p=u===wn?()=>!1:m=>yn(f,m);if(c!=null&&c!==l&&(Rn(c)?(d[c]=null,p(c)&&(u[c]=null)):Nn(c)&&(c.value=null)),rn(l))Rs(l,i,12,[o,d]);else{const m=Rn(l),h=Nn(l);if(m||h){const g=()=>{if(a.f){const k=m?p(l)?u[l]:d[l]:l.value;e?en(k)&&Pr(k,s):en(k)?k.includes(s)||k.push(s):m?(d[l]=[s],p(l)&&(u[l]=d[l])):(l.value=[s],a.k&&(d[a.k]=l.value))}else m?(d[l]=o,p(l)&&(u[l]=o)):h&&(l.value=o,a.k&&(d[a.k]=o))};o?(g.id=-1,ea(g,t)):g()}}}me().requestIdleCallback;me().cancelIdleCallback;const ls=a=>!!a.type.__asyncLoader,dl=a=>a.type.__isKeepAlive;function Nd(a,n){cl(a,"a",n)}function Vd(a,n){cl(a,"da",n)}function cl(a,n,t=Gn){const r=a.__wdc||(a.__wdc=()=>{let e=t;for(;e;){if(e.isDeactivated)return;e=e.parent}return a()});if(be(n,r,t),t){let e=t.parent;for(;e&&e.parent;)dl(e.parent.vnode)&&Yd(r,n,t,e),e=e.parent}}function Yd(a,n,t,r){const e=be(n,a,r,!0);Hr(()=>{Pr(r[n],e)},t)}function be(a,n,t=Gn,r=!1){if(t){const e=t[a]||(t[a]=[]),s=n.__weh||(n.__weh=(...o)=>{Na();const i=Is(t),l=Fa(n,t,a,o);return i(),Va(),l});return r?e.unshift(s):e.push(s),s}}const $a=a=>(n,t=Gn)=>{(!vs||a==="sp")&&be(a,(...r)=>n(...r),t)},qd=$a("bm"),Es=$a("m"),$d=$a("bu"),Xd=$a("u"),Wr=$a("bum"),Hr=$a("um"),Kd=$a("sp"),Zd=$a("rtg"),Qd=$a("rtc");function Jd(a,n=Gn){be("ec",a,n)}const nc="components";function ac(a,n){return sc(nc,a,!0,n)||a}const tc=Symbol.for("v-ndc");function sc(a,n,t=!0,r=!1){const e=ka||Gn;if(e){const s=e.type;{const i=Nc(s,!1);if(i&&(i===n||i===ya(n)||i===fe(ya(n))))return s}const o=jo(e[a]||s[a],n)||jo(e.appContext[a],n);return!o&&r?s:o}}function jo(a,n){return a&&(a[n]||a[ya(n)]||a[fe(ya(n))])}function nr(a,n,t,r){let e;const s=t,o=en(a);if(o||Rn(a)){const i=o&&zt(a);let l=!1,c=!1;i&&(l=!ga(a),c=ot(a),a=ge(a)),e=new Array(a.length);for(let d=0,u=a.length;d<u;d++)e[d]=n(l?c?Ks(On(a[d])):On(a[d]):a[d],d,void 0,s)}else if(typeof a=="number"){e=new Array(a);for(let i=0;i<a;i++)e[i]=n(i+1,i,void 0,s)}else if(_n(a))if(a[Symbol.iterator])e=Array.from(a,(i,l)=>n(i,l,void 0,s));else{const i=Object.keys(a);e=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const d=i[l];e[l]=n(a[d],d,l,s)}}else e=[];return e}const ar=a=>a?Il(a)?qr(a):ar(a.parent):null,ps=Yn(Object.create(null),{$:a=>a,$el:a=>a.vnode.el,$data:a=>a.data,$props:a=>a.props,$attrs:a=>a.attrs,$slots:a=>a.slots,$refs:a=>a.refs,$parent:a=>ar(a.parent),$root:a=>ar(a.root),$host:a=>a.ce,$emit:a=>a.emit,$options:a=>hl(a),$forceUpdate:a=>a.f||(a.f=()=>{Ur(a.update)}),$nextTick:a=>a.n||(a.n=Lr.bind(a.proxy)),$watch:a=>_c.bind(a)}),ze=(a,n)=>a!==wn&&!a.__isScriptSetup&&yn(a,n),ec={get({_:a},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:e,props:s,accessCache:o,type:i,appContext:l}=a;let c;if(n[0]!=="$"){const p=o[n];if(p!==void 0)switch(p){case 1:return r[n];case 2:return e[n];case 4:return t[n];case 3:return s[n]}else{if(ze(r,n))return o[n]=1,r[n];if(e!==wn&&yn(e,n))return o[n]=2,e[n];if((c=a.propsOptions[0])&&yn(c,n))return o[n]=3,s[n];if(t!==wn&&yn(t,n))return o[n]=4,t[n];tr&&(o[n]=0)}}const d=ps[n];let u,f;if(d)return n==="$attrs"&&Ln(a.attrs,"get",""),d(a);if((u=i.__cssModules)&&(u=u[n]))return u;if(t!==wn&&yn(t,n))return o[n]=4,t[n];if(f=l.config.globalProperties,yn(f,n))return f[n]},set({_:a},n,t){const{data:r,setupState:e,ctx:s}=a;return ze(e,n)?(e[n]=t,!0):r!==wn&&yn(r,n)?(r[n]=t,!0):yn(a.props,n)||n[0]==="$"&&n.slice(1)in a?!1:(s[n]=t,!0)},has({_:{data:a,setupState:n,accessCache:t,ctx:r,appContext:e,propsOptions:s}},o){let i;return!!t[o]||a!==wn&&yn(a,o)||ze(n,o)||(i=s[0])&&yn(i,o)||yn(r,o)||yn(ps,o)||yn(e.config.globalProperties,o)},defineProperty(a,n,t){return t.get!=null?a._.accessCache[n]=0:yn(t,"value")&&this.set(a,n,t.value,null),Reflect.defineProperty(a,n,t)}};function _o(a){return en(a)?a.reduce((n,t)=>(n[t]=null,n),{}):a}let tr=!0;function rc(a){const n=hl(a),t=a.proxy,r=a.ctx;tr=!1,n.beforeCreate&&So(n.beforeCreate,a,"bc");const{data:e,computed:s,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:g,beforeDestroy:k,beforeUnmount:v,destroyed:j,unmounted:_,render:y,renderTracked:w,renderTriggered:x,errorCaptured:b,serverPrefetch:S,expose:T,inheritAttrs:P,components:C,directives:E,filters:I}=n;if(c&&oc(c,r,null),o)for(const D in o){const N=o[D];rn(N)&&(r[D]=N.bind(t))}if(e){const D=e.call(t,t);_n(D)&&(a.data=ye(D))}if(tr=!0,s)for(const D in s){const N=s[D],nn=rn(N)?N.bind(t,t):rn(N.get)?N.get.bind(t,t):Ea,on=!rn(N)&&rn(N.set)?N.set.bind(t):Ea,pn=Xn({get:nn,set:on});Object.defineProperty(r,D,{enumerable:!0,configurable:!0,get:()=>pn.value,set:sn=>pn.value=sn})}if(i)for(const D in i)ul(i[D],r,t,D);if(l){const D=rn(l)?l.call(t):l;Reflect.ownKeys(D).forEach(N=>{Ls(N,D[N])})}d&&So(d,a,"c");function U(D,N){en(N)?N.forEach(nn=>D(nn.bind(t))):N&&D(N.bind(t))}if(U(qd,u),U(Es,f),U($d,p),U(Xd,m),U(Nd,h),U(Vd,g),U(Jd,b),U(Qd,w),U(Zd,x),U(Wr,v),U(Hr,_),U(Kd,S),en(T))if(T.length){const D=a.exposed||(a.exposed={});T.forEach(N=>{Object.defineProperty(D,N,{get:()=>t[N],set:nn=>t[N]=nn})})}else a.exposed||(a.exposed={});y&&a.render===Ea&&(a.render=y),P!=null&&(a.inheritAttrs=P),C&&(a.components=C),E&&(a.directives=E),S&&pl(a)}function oc(a,n,t=Ea){en(a)&&(a=sr(a));for(const r in a){const e=a[r];let s;_n(e)?"default"in e?s=wa(e.from||r,e.default,!0):s=wa(e.from||r):s=wa(e),Nn(s)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):n[r]=s}}function So(a,n,t){Fa(en(a)?a.map(r=>r.bind(n.proxy)):a.bind(n.proxy),n,t)}function ul(a,n,t,r){let e=r.includes(".")?Cl(t,r):()=>t[r];if(Rn(a)){const s=n[a];rn(s)&&Us(e,s)}else if(rn(a))Us(e,a.bind(t));else if(_n(a))if(en(a))a.forEach(s=>ul(s,n,t,r));else{const s=rn(a.handler)?a.handler.bind(t):n[a.handler];rn(s)&&Us(e,s,a)}}function hl(a){const n=a.type,{mixins:t,extends:r}=n,{mixins:e,optionsCache:s,config:{optionMergeStrategies:o}}=a.appContext,i=s.get(n);let l;return i?l=i:!e.length&&!t&&!r?l=n:(l={},e.length&&e.forEach(c=>ae(l,c,o,!0)),ae(l,n,o)),_n(n)&&s.set(n,l),l}function ae(a,n,t,r=!1){const{mixins:e,extends:s}=n;s&&ae(a,s,t,!0),e&&e.forEach(o=>ae(a,o,t,!0));for(const o in n)if(!(r&&o==="expose")){const i=ic[o]||t&&t[o];a[o]=i?i(a[o],n[o]):n[o]}return a}const ic={data:Co,props:To,emits:To,methods:ts,computed:ts,beforeCreate:qn,created:qn,beforeMount:qn,mounted:qn,beforeUpdate:qn,updated:qn,beforeDestroy:qn,beforeUnmount:qn,destroyed:qn,unmounted:qn,activated:qn,deactivated:qn,errorCaptured:qn,serverPrefetch:qn,components:ts,directives:ts,watch:pc,provide:Co,inject:lc};function Co(a,n){return n?a?function(){return Yn(rn(a)?a.call(this,this):a,rn(n)?n.call(this,this):n)}:n:a}function lc(a,n){return ts(sr(a),sr(n))}function sr(a){if(en(a)){const n={};for(let t=0;t<a.length;t++)n[a[t]]=a[t];return n}return a}function qn(a,n){return a?[...new Set([].concat(a,n))]:n}function ts(a,n){return a?Yn(Object.create(null),a,n):n}function To(a,n){return a?en(a)&&en(n)?[...new Set([...a,...n])]:Yn(Object.create(null),_o(a),_o(n??{})):n}function pc(a,n){if(!a)return n;if(!n)return a;const t=Yn(Object.create(null),a);for(const r in n)t[r]=qn(a[r],n[r]);return t}function fl(){return{app:null,config:{isNativeTag:Jp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dc=0;function cc(a,n){return function(r,e=null){rn(r)||(r=Yn({},r)),e!=null&&!_n(e)&&(e=null);const s=fl(),o=new WeakSet,i=[];let l=!1;const c=s.app={_uid:dc++,_component:r,_props:e,_container:null,_context:s,_instance:null,version:Yc,get config(){return s.config},set config(d){},use(d,...u){return o.has(d)||(d&&rn(d.install)?(o.add(d),d.install(c,...u)):rn(d)&&(o.add(d),d(c,...u))),c},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),c},component(d,u){return u?(s.components[d]=u,c):s.components[d]},directive(d,u){return u?(s.directives[d]=u,c):s.directives[d]},mount(d,u,f){if(!l){const p=c._ceVNode||xn(r,e);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),a(p,d,f),l=!0,c._container=d,d.__vue_app__=c,qr(p.component)}},onUnmount(d){i.push(d)},unmount(){l&&(Fa(i,c._instance,16),a(null,c._container),delete c._container.__vue_app__)},provide(d,u){return s.provides[d]=u,c},runWithContext(d){const u=Bt;Bt=c;try{return d()}finally{Bt=u}}};return c}}let Bt=null;function Ls(a,n){if(Gn){let t=Gn.provides;const r=Gn.parent&&Gn.parent.provides;r===t&&(t=Gn.provides=Object.create(r)),t[a]=n}}function wa(a,n,t=!1){const r=Gn||ka;if(r||Bt){let e=Bt?Bt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(e&&a in e)return e[a];if(arguments.length>1)return t&&rn(n)?n.call(r&&r.proxy):n}}const ml={},gl=()=>Object.create(ml),yl=a=>Object.getPrototypeOf(a)===ml;function uc(a,n,t,r=!1){const e={},s=gl();a.propsDefaults=Object.create(null),kl(a,n,e,s);for(const o in a.propsOptions[0])o in e||(e[o]=void 0);t?a.props=r?e:Ji(e):a.type.props?a.props=e:a.props=s,a.attrs=s}function hc(a,n,t,r){const{props:e,attrs:s,vnode:{patchFlag:o}}=a,i=gn(e),[l]=a.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=a.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(ve(a.emitsOptions,f))continue;const p=n[f];if(l)if(yn(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const m=ya(f);e[m]=er(l,i,m,p,a,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{kl(a,n,e,s)&&(c=!0);let d;for(const u in i)(!n||!yn(n,u)&&((d=St(u))===u||!yn(n,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(e[u]=er(l,i,u,void 0,a,!0)):delete e[u]);if(s!==i)for(const u in s)(!n||!yn(n,u))&&(delete s[u],c=!0)}c&&Wa(a.attrs,"set","")}function kl(a,n,t,r){const[e,s]=a.propsOptions;let o=!1,i;if(n)for(let l in n){if(rs(l))continue;const c=n[l];let d;e&&yn(e,d=ya(l))?!s||!s.includes(d)?t[d]=c:(i||(i={}))[d]=c:ve(a.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=gn(t),c=i||wn;for(let d=0;d<s.length;d++){const u=s[d];t[u]=er(e,l,u,c[u],a,!yn(c,u))}}return o}function er(a,n,t,r,e,s){const o=a[t];if(o!=null){const i=yn(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rn(l)){const{propsDefaults:c}=e;if(t in c)r=c[t];else{const d=Is(e);r=c[t]=l.call(null,n),d()}}else r=l;e.ce&&e.ce._setProp(t,r)}o[0]&&(s&&!i?r=!1:o[1]&&(r===""||r===St(t))&&(r=!0))}return r}const fc=new WeakMap;function bl(a,n,t=!1){const r=t?fc:n.propsCache,e=r.get(a);if(e)return e;const s=a.props,o={},i=[];let l=!1;if(!rn(a)){const d=u=>{l=!0;const[f,p]=bl(u,n,!0);Yn(o,f),p&&i.push(...p)};!t&&n.mixins.length&&n.mixins.forEach(d),a.extends&&d(a.extends),a.mixins&&a.mixins.forEach(d)}if(!s&&!l)return _n(a)&&r.set(a,It),It;if(en(s))for(let d=0;d<s.length;d++){const u=ya(s[d]);Po(u)&&(o[u]=wn)}else if(s)for(const d in s){const u=ya(d);if(Po(u)){const f=s[d],p=o[u]=en(f)||rn(f)?{type:f}:Yn({},f),m=p.type;let h=!1,g=!0;if(en(m))for(let k=0;k<m.length;++k){const v=m[k],j=rn(v)&&v.name;if(j==="Boolean"){h=!0;break}else j==="String"&&(g=!1)}else h=rn(m)&&m.name==="Boolean";p[0]=h,p[1]=g,(h||yn(p,"default"))&&i.push(u)}}const c=[o,i];return _n(a)&&r.set(a,c),c}function Po(a){return a[0]!=="$"&&!rs(a)}const Nr=a=>a[0]==="_"||a==="$stable",Vr=a=>en(a)?a.map(Aa):[Aa(a)],mc=(a,n,t)=>{if(n._n)return n;const r=Dt((...e)=>Vr(n(...e)),t);return r._c=!1,r},vl=(a,n,t)=>{const r=a._ctx;for(const e in a){if(Nr(e))continue;const s=a[e];if(rn(s))n[e]=mc(e,s,r);else if(s!=null){const o=Vr(s);n[e]=()=>o}}},wl=(a,n)=>{const t=Vr(n);a.slots.default=()=>t},xl=(a,n,t)=>{for(const r in n)(t||!Nr(r))&&(a[r]=n[r])},gc=(a,n,t)=>{const r=a.slots=gl();if(a.vnode.shapeFlag&32){const e=n._;e?(xl(r,n,t),t&&zi(r,"_",e,!0)):vl(n,r)}else n&&wl(a,n)},yc=(a,n,t)=>{const{vnode:r,slots:e}=a;let s=!0,o=wn;if(r.shapeFlag&32){const i=n._;i?t&&i===1?s=!1:xl(e,n,t):(s=!n.$stable,vl(n,e)),o=n}else n&&(wl(a,n),o={default:1});if(s)for(const i in e)!Nr(i)&&o[i]==null&&delete e[i]},ea=Rc;function kc(a){return bc(a)}function bc(a,n){const t=me();t.__VUE__=!0;const{insert:r,remove:e,patchProp:s,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:p=Ea,insertStaticContent:m}=a,h=(A,M,R,z=null,B=null,L=null,$=void 0,V=null,Y=!!M.dynamicChildren)=>{if(A===M)return;A&&!Jt(A,M)&&(z=F(A),sn(A,B,L,!0),A=null),M.patchFlag===-2&&(Y=!1,M.dynamicChildren=null);const{type:W,ref:J,shapeFlag:X}=M;switch(W){case we:g(A,M,R,z);break;case it:k(A,M,R,z);break;case Gs:A==null&&v(M,R,z,$);break;case Un:C(A,M,R,z,B,L,$,V,Y);break;default:X&1?y(A,M,R,z,B,L,$,V,Y):X&6?E(A,M,R,z,B,L,$,V,Y):(X&64||X&128)&&W.process(A,M,R,z,B,L,$,V,Y,q)}J!=null&&B&&ne(J,A&&A.ref,L,M||A,!M)},g=(A,M,R,z)=>{if(A==null)r(M.el=i(M.children),R,z);else{const B=M.el=A.el;M.children!==A.children&&c(B,M.children)}},k=(A,M,R,z)=>{A==null?r(M.el=l(M.children||""),R,z):M.el=A.el},v=(A,M,R,z)=>{[A.el,A.anchor]=m(A.children,M,R,z,A.el,A.anchor)},j=({el:A,anchor:M},R,z)=>{let B;for(;A&&A!==M;)B=f(A),r(A,R,z),A=B;r(M,R,z)},_=({el:A,anchor:M})=>{let R;for(;A&&A!==M;)R=f(A),e(A),A=R;e(M)},y=(A,M,R,z,B,L,$,V,Y)=>{M.type==="svg"?$="svg":M.type==="math"&&($="mathml"),A==null?w(M,R,z,B,L,$,V,Y):S(A,M,B,L,$,V,Y)},w=(A,M,R,z,B,L,$,V)=>{let Y,W;const{props:J,shapeFlag:X,transition:K,dirs:an}=A;if(Y=A.el=o(A.type,L,J&&J.is,J),X&8?d(Y,A.children):X&16&&b(A.children,Y,null,z,B,Oe(A,L),$,V),an&&ut(A,null,z,"created"),x(Y,A,A.scopeId,$,z),J){for(const kn in J)kn!=="value"&&!rs(kn)&&s(Y,kn,null,J[kn],L,z);"value"in J&&s(Y,"value",null,J.value,L),(W=J.onVnodeBeforeMount)&&Ca(W,z,A)}an&&ut(A,null,z,"beforeMount");const ln=vc(B,K);ln&&K.beforeEnter(Y),r(Y,M,R),((W=J&&J.onVnodeMounted)||ln||an)&&ea(()=>{W&&Ca(W,z,A),ln&&K.enter(Y),an&&ut(A,null,z,"mounted")},B)},x=(A,M,R,z,B)=>{if(R&&p(A,R),z)for(let L=0;L<z.length;L++)p(A,z[L]);if(B){let L=B.subTree;if(M===L||Pl(L.type)&&(L.ssContent===M||L.ssFallback===M)){const $=B.vnode;x(A,$,$.scopeId,$.slotScopeIds,B.parent)}}},b=(A,M,R,z,B,L,$,V,Y=0)=>{for(let W=Y;W<A.length;W++){const J=A[W]=V?Za(A[W]):Aa(A[W]);h(null,J,M,R,z,B,L,$,V)}},S=(A,M,R,z,B,L,$)=>{const V=M.el=A.el;let{patchFlag:Y,dynamicChildren:W,dirs:J}=M;Y|=A.patchFlag&16;const X=A.props||wn,K=M.props||wn;let an;if(R&&ht(R,!1),(an=K.onVnodeBeforeUpdate)&&Ca(an,R,M,A),J&&ut(M,A,R,"beforeUpdate"),R&&ht(R,!0),(X.innerHTML&&K.innerHTML==null||X.textContent&&K.textContent==null)&&d(V,""),W?T(A.dynamicChildren,W,V,R,z,Oe(M,B),L):$||N(A,M,V,null,R,z,Oe(M,B),L,!1),Y>0){if(Y&16)P(V,X,K,R,B);else if(Y&2&&X.class!==K.class&&s(V,"class",null,K.class,B),Y&4&&s(V,"style",X.style,K.style,B),Y&8){const ln=M.dynamicProps;for(let kn=0;kn<ln.length;kn++){const fn=ln[kn],In=X[fn],En=K[fn];(En!==In||fn==="value")&&s(V,fn,In,En,B,R)}}Y&1&&A.children!==M.children&&d(V,M.children)}else!$&&W==null&&P(V,X,K,R,B);((an=K.onVnodeUpdated)||J)&&ea(()=>{an&&Ca(an,R,M,A),J&&ut(M,A,R,"updated")},z)},T=(A,M,R,z,B,L,$)=>{for(let V=0;V<M.length;V++){const Y=A[V],W=M[V],J=Y.el&&(Y.type===Un||!Jt(Y,W)||Y.shapeFlag&198)?u(Y.el):R;h(Y,W,J,null,z,B,L,$,!0)}},P=(A,M,R,z,B)=>{if(M!==R){if(M!==wn)for(const L in M)!rs(L)&&!(L in R)&&s(A,L,M[L],null,B,z);for(const L in R){if(rs(L))continue;const $=R[L],V=M[L];$!==V&&L!=="value"&&s(A,L,V,$,B,z)}"value"in R&&s(A,"value",M.value,R.value,B)}},C=(A,M,R,z,B,L,$,V,Y)=>{const W=M.el=A?A.el:i(""),J=M.anchor=A?A.anchor:i("");let{patchFlag:X,dynamicChildren:K,slotScopeIds:an}=M;an&&(V=V?V.concat(an):an),A==null?(r(W,R,z),r(J,R,z),b(M.children||[],R,J,B,L,$,V,Y)):X>0&&X&64&&K&&A.dynamicChildren?(T(A.dynamicChildren,K,R,B,L,$,V),(M.key!=null||B&&M===B.subTree)&&jl(A,M,!0)):N(A,M,R,J,B,L,$,V,Y)},E=(A,M,R,z,B,L,$,V,Y)=>{M.slotScopeIds=V,A==null?M.shapeFlag&512?B.ctx.activate(M,R,z,$,Y):I(M,R,z,B,L,$,Y):O(A,M,Y)},I=(A,M,R,z,B,L,$)=>{const V=A.component=Lc(A,z,B);if(dl(A)&&(V.ctx.renderer=q),Uc(V,!1,$),V.asyncDep){if(B&&B.registerDep(V,U,$),!A.el){const Y=V.subTree=xn(it);k(null,Y,M,R)}}else U(V,A,M,R,B,L,$)},O=(A,M,R)=>{const z=M.component=A.component;if(Ac(A,M,R))if(z.asyncDep&&!z.asyncResolved){D(z,M,R);return}else z.next=M,z.update();else M.el=A.el,z.vnode=M},U=(A,M,R,z,B,L,$)=>{const V=()=>{if(A.isMounted){let{next:X,bu:K,u:an,parent:ln,vnode:kn}=A;{const _a=_l(A);if(_a){X&&(X.el=kn.el,D(A,X,$)),_a.asyncDep.then(()=>{A.isUnmounted||V()});return}}let fn=X,In;ht(A,!1),X?(X.el=kn.el,D(A,X,$)):X=kn,K&&Me(K),(In=X.props&&X.props.onVnodeBeforeUpdate)&&Ca(In,ln,X,kn),ht(A,!0);const En=Mo(A),ja=A.subTree;A.subTree=En,h(ja,En,u(ja.el),F(ja),A,B,L),X.el=En.el,fn===null&&Mc(A,En.el),an&&ea(an,B),(In=X.props&&X.props.onVnodeUpdated)&&ea(()=>Ca(In,ln,X,kn),B)}else{let X;const{el:K,props:an}=M,{bm:ln,m:kn,parent:fn,root:In,type:En}=A,ja=ls(M);ht(A,!1),ln&&Me(ln),!ja&&(X=an&&an.onVnodeBeforeMount)&&Ca(X,fn,M),ht(A,!0);{In.ce&&In.ce._injectChildStyle(En);const _a=A.subTree=Mo(A);h(null,_a,R,z,A,B,L),M.el=_a.el}if(kn&&ea(kn,B),!ja&&(X=an&&an.onVnodeMounted)){const _a=M;ea(()=>Ca(X,fn,_a),B)}(M.shapeFlag&256||fn&&ls(fn.vnode)&&fn.vnode.shapeFlag&256)&&A.a&&ea(A.a,B),A.isMounted=!0,M=R=z=null}};A.scope.on();const Y=A.effect=new Li(V);A.scope.off();const W=A.update=Y.run.bind(Y),J=A.job=Y.runIfDirty.bind(Y);J.i=A,J.id=A.uid,Y.scheduler=()=>Ur(J),ht(A,!0),W()},D=(A,M,R)=>{M.component=A;const z=A.vnode.props;A.vnode=M,A.next=null,hc(A,M.props,z,R),yc(A,M.children,R),Na(),xo(A),Va()},N=(A,M,R,z,B,L,$,V,Y=!1)=>{const W=A&&A.children,J=A?A.shapeFlag:0,X=M.children,{patchFlag:K,shapeFlag:an}=M;if(K>0){if(K&128){on(W,X,R,z,B,L,$,V,Y);return}else if(K&256){nn(W,X,R,z,B,L,$,V,Y);return}}an&8?(J&16&&Q(W,B,L),X!==W&&d(R,X)):J&16?an&16?on(W,X,R,z,B,L,$,V,Y):Q(W,B,L,!0):(J&8&&d(R,""),an&16&&b(X,R,z,B,L,$,V,Y))},nn=(A,M,R,z,B,L,$,V,Y)=>{A=A||It,M=M||It;const W=A.length,J=M.length,X=Math.min(W,J);let K;for(K=0;K<X;K++){const an=M[K]=Y?Za(M[K]):Aa(M[K]);h(A[K],an,R,null,B,L,$,V,Y)}W>J?Q(A,B,L,!0,!1,X):b(M,R,z,B,L,$,V,Y,X)},on=(A,M,R,z,B,L,$,V,Y)=>{let W=0;const J=M.length;let X=A.length-1,K=J-1;for(;W<=X&&W<=K;){const an=A[W],ln=M[W]=Y?Za(M[W]):Aa(M[W]);if(Jt(an,ln))h(an,ln,R,null,B,L,$,V,Y);else break;W++}for(;W<=X&&W<=K;){const an=A[X],ln=M[K]=Y?Za(M[K]):Aa(M[K]);if(Jt(an,ln))h(an,ln,R,null,B,L,$,V,Y);else break;X--,K--}if(W>X){if(W<=K){const an=K+1,ln=an<J?M[an].el:z;for(;W<=K;)h(null,M[W]=Y?Za(M[W]):Aa(M[W]),R,ln,B,L,$,V,Y),W++}}else if(W>K)for(;W<=X;)sn(A[W],B,L,!0),W++;else{const an=W,ln=W,kn=new Map;for(W=ln;W<=K;W++){const sa=M[W]=Y?Za(M[W]):Aa(M[W]);sa.key!=null&&kn.set(sa.key,W)}let fn,In=0;const En=K-ln+1;let ja=!1,_a=0;const Zt=new Array(En);for(W=0;W<En;W++)Zt[W]=0;for(W=an;W<=X;W++){const sa=A[W];if(In>=En){sn(sa,B,L,!0);continue}let Sa;if(sa.key!=null)Sa=kn.get(sa.key);else for(fn=ln;fn<=K;fn++)if(Zt[fn-ln]===0&&Jt(sa,M[fn])){Sa=fn;break}Sa===void 0?sn(sa,B,L,!0):(Zt[Sa-ln]=W+1,Sa>=_a?_a=Sa:ja=!0,h(sa,M[Sa],R,null,B,L,$,V,Y),In++)}const yo=ja?wc(Zt):It;for(fn=yo.length-1,W=En-1;W>=0;W--){const sa=ln+W,Sa=M[sa],ko=sa+1<J?M[sa+1].el:z;Zt[W]===0?h(null,Sa,R,ko,B,L,$,V,Y):ja&&(fn<0||W!==yo[fn]?pn(Sa,R,ko,2):fn--)}}},pn=(A,M,R,z,B=null)=>{const{el:L,type:$,transition:V,children:Y,shapeFlag:W}=A;if(W&6){pn(A.component.subTree,M,R,z);return}if(W&128){A.suspense.move(M,R,z);return}if(W&64){$.move(A,M,R,q);return}if($===Un){r(L,M,R);for(let X=0;X<Y.length;X++)pn(Y[X],M,R,z);r(A.anchor,M,R);return}if($===Gs){j(A,M,R);return}if(z!==2&&W&1&&V)if(z===0)V.beforeEnter(L),r(L,M,R),ea(()=>V.enter(L),B);else{const{leave:X,delayLeave:K,afterLeave:an}=V,ln=()=>{A.ctx.isUnmounted?e(L):r(L,M,R)},kn=()=>{X(L,()=>{ln(),an&&an()})};K?K(L,ln,kn):kn()}else r(L,M,R)},sn=(A,M,R,z=!1,B=!1)=>{const{type:L,props:$,ref:V,children:Y,dynamicChildren:W,shapeFlag:J,patchFlag:X,dirs:K,cacheIndex:an}=A;if(X===-2&&(B=!1),V!=null&&(Na(),ne(V,null,R,A,!0),Va()),an!=null&&(M.renderCache[an]=void 0),J&256){M.ctx.deactivate(A);return}const ln=J&1&&K,kn=!ls(A);let fn;if(kn&&(fn=$&&$.onVnodeBeforeUnmount)&&Ca(fn,M,A),J&6)un(A.component,R,z);else{if(J&128){A.suspense.unmount(R,z);return}ln&&ut(A,null,M,"beforeUnmount"),J&64?A.type.remove(A,M,R,q,z):W&&!W.hasOnce&&(L!==Un||X>0&&X&64)?Q(W,M,R,!1,!0):(L===Un&&X&384||!B&&J&16)&&Q(Y,M,R),z&&cn(A)}(kn&&(fn=$&&$.onVnodeUnmounted)||ln)&&ea(()=>{fn&&Ca(fn,M,A),ln&&ut(A,null,M,"unmounted")},R)},cn=A=>{const{type:M,el:R,anchor:z,transition:B}=A;if(M===Un){dn(R,z);return}if(M===Gs){_(A);return}const L=()=>{e(R),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(A.shapeFlag&1&&B&&!B.persisted){const{leave:$,delayLeave:V}=B,Y=()=>$(R,L);V?V(A.el,L,Y):Y()}else L()},dn=(A,M)=>{let R;for(;A!==M;)R=f(A),e(A),A=R;e(M)},un=(A,M,R)=>{const{bum:z,scope:B,job:L,subTree:$,um:V,m:Y,a:W,parent:J,slots:{__:X}}=A;Ao(Y),Ao(W),z&&Me(z),J&&en(X)&&X.forEach(K=>{J.renderCache[K]=void 0}),B.stop(),L&&(L.flags|=8,sn($,A,M,R)),V&&ea(V,M),ea(()=>{A.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},Q=(A,M,R,z=!1,B=!1,L=0)=>{for(let $=L;$<A.length;$++)sn(A[$],M,R,z,B)},F=A=>{if(A.shapeFlag&6)return F(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const M=f(A.anchor||A.el),R=M&&M[Wd];return R?f(R):M};let G=!1;const H=(A,M,R)=>{A==null?M._vnode&&sn(M._vnode,null,null,!0):h(M._vnode||null,A,M,null,null,null,R),M._vnode=A,G||(G=!0,xo(),rl(),G=!1)},q={p:h,um:sn,m:pn,r:cn,mt:I,mc:b,pc:N,pbc:T,n:F,o:a};return{render:H,hydrate:void 0,createApp:cc(H)}}function Oe({type:a,props:n},t){return t==="svg"&&a==="foreignObject"||t==="mathml"&&a==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function ht({effect:a,job:n},t){t?(a.flags|=32,n.flags|=4):(a.flags&=-33,n.flags&=-5)}function vc(a,n){return(!a||a&&!a.pendingBranch)&&n&&!n.persisted}function jl(a,n,t=!1){const r=a.children,e=n.children;if(en(r)&&en(e))for(let s=0;s<r.length;s++){const o=r[s];let i=e[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=e[s]=Za(e[s]),i.el=o.el),!t&&i.patchFlag!==-2&&jl(o,i)),i.type===we&&(i.el=o.el),i.type===it&&!i.el&&(i.el=o.el)}}function wc(a){const n=a.slice(),t=[0];let r,e,s,o,i;const l=a.length;for(r=0;r<l;r++){const c=a[r];if(c!==0){if(e=t[t.length-1],a[e]<c){n[r]=e,t.push(r);continue}for(s=0,o=t.length-1;s<o;)i=s+o>>1,a[t[i]]<c?s=i+1:o=i;c<a[t[s]]&&(s>0&&(n[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=n[o];return t}function _l(a){const n=a.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:_l(n)}function Ao(a){if(a)for(let n=0;n<a.length;n++)a[n].flags|=8}const xc=Symbol.for("v-scx"),jc=()=>wa(xc);function Us(a,n,t){return Sl(a,n,t)}function Sl(a,n,t=wn){const{immediate:r,deep:e,flush:s,once:o}=t,i=Yn({},t),l=n&&r||!n&&s!=="post";let c;if(vs){if(s==="sync"){const p=jc();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Ea,p.resume=Ea,p.pause=Ea,p}}const d=Gn;i.call=(p,m,h)=>Fa(p,d,m,h);let u=!1;s==="post"?i.scheduler=p=>{ea(p,d&&d.suspense)}:s!=="sync"&&(u=!0,i.scheduler=(p,m)=>{m?p():Ur(p)}),i.augmentJob=p=>{n&&(p.flags|=4),u&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const f=Bd(a,n,i);return vs&&(c?c.push(f):l&&f()),f}function _c(a,n,t){const r=this.proxy,e=Rn(a)?a.includes(".")?Cl(r,a):()=>r[a]:a.bind(r,r);let s;rn(n)?s=n:(s=n.handler,t=n);const o=Is(this),i=Sl(e,s.bind(r),t);return o(),i}function Cl(a,n){const t=n.split(".");return()=>{let r=a;for(let e=0;e<t.length&&r;e++)r=r[t[e]];return r}}const Sc=(a,n)=>n==="modelValue"||n==="model-value"?a.modelModifiers:a[`${n}Modifiers`]||a[`${ya(n)}Modifiers`]||a[`${St(n)}Modifiers`];function Cc(a,n,...t){if(a.isUnmounted)return;const r=a.vnode.props||wn;let e=t;const s=n.startsWith("update:"),o=s&&Sc(r,n.slice(7));o&&(o.trim&&(e=t.map(d=>Rn(d)?d.trim():d)),o.number&&(e=t.map(ed)));let i,l=r[i=Ae(n)]||r[i=Ae(ya(n))];!l&&s&&(l=r[i=Ae(St(n))]),l&&Fa(l,a,6,e);const c=r[i+"Once"];if(c){if(!a.emitted)a.emitted={};else if(a.emitted[i])return;a.emitted[i]=!0,Fa(c,a,6,e)}}function Tl(a,n,t=!1){const r=n.emitsCache,e=r.get(a);if(e!==void 0)return e;const s=a.emits;let o={},i=!1;if(!rn(a)){const l=c=>{const d=Tl(c,n,!0);d&&(i=!0,Yn(o,d))};!t&&n.mixins.length&&n.mixins.forEach(l),a.extends&&l(a.extends),a.mixins&&a.mixins.forEach(l)}return!s&&!i?(_n(a)&&r.set(a,null),null):(en(s)?s.forEach(l=>o[l]=null):Yn(o,s),_n(a)&&r.set(a,o),o)}function ve(a,n){return!a||!ce(n)?!1:(n=n.slice(2).replace(/Once$/,""),yn(a,n[0].toLowerCase()+n.slice(1))||yn(a,St(n))||yn(a,n))}function Mo(a){const{type:n,vnode:t,proxy:r,withProxy:e,propsOptions:[s],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:f,setupState:p,ctx:m,inheritAttrs:h}=a,g=Js(a);let k,v;try{if(t.shapeFlag&4){const _=e||r,y=_;k=Aa(c.call(y,_,d,u,p,f,m)),v=i}else{const _=n;k=Aa(_.length>1?_(u,{attrs:i,slots:o,emit:l}):_(u,null)),v=n.props?i:Tc(i)}}catch(_){ds.length=0,ke(_,a,1),k=xn(it)}let j=k;if(v&&h!==!1){const _=Object.keys(v),{shapeFlag:y}=j;_.length&&y&7&&(s&&_.some(Tr)&&(v=Pc(v,s)),j=Wt(j,v,!1,!0))}return t.dirs&&(j=Wt(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(t.dirs):t.dirs),t.transition&&Gr(j,t.transition),k=j,Js(g),k}const Tc=a=>{let n;for(const t in a)(t==="class"||t==="style"||ce(t))&&((n||(n={}))[t]=a[t]);return n},Pc=(a,n)=>{const t={};for(const r in a)(!Tr(r)||!(r.slice(9)in n))&&(t[r]=a[r]);return t};function Ac(a,n,t){const{props:r,children:e,component:s}=a,{props:o,children:i,patchFlag:l}=n,c=s.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Ro(r,o,c):!!o;if(l&8){const d=n.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(o[f]!==r[f]&&!ve(c,f))return!0}}}else return(e||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?Ro(r,o,c):!0:!!o;return!1}function Ro(a,n,t){const r=Object.keys(n);if(r.length!==Object.keys(a).length)return!0;for(let e=0;e<r.length;e++){const s=r[e];if(n[s]!==a[s]&&!ve(t,s))return!0}return!1}function Mc({vnode:a,parent:n},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===a&&(r.el=a.el),r===a)(a=n.vnode).el=t,n=n.parent;else break}}const Pl=a=>a.__isSuspense;function Rc(a,n){n&&n.pendingBranch?en(a)?n.effects.push(...a):n.effects.push(a):Gd(a)}const Un=Symbol.for("v-fgt"),we=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Gs=Symbol.for("v-stc"),ds=[];let ia=null;function Fn(a=!1){ds.push(ia=a?null:[])}function Ec(){ds.pop(),ia=ds[ds.length-1]||null}let bs=1;function Eo(a,n=!1){bs+=a,a<0&&ia&&n&&(ia.hasOnce=!0)}function Al(a){return a.dynamicChildren=bs>0?ia||It:null,Ec(),bs>0&&ia&&ia.push(a),a}function Bn(a,n,t,r,e,s){return Al(Z(a,n,t,r,e,s,!0))}function Ml(a,n,t,r,e){return Al(xn(a,n,t,r,e,!0))}function te(a){return a?a.__v_isVNode===!0:!1}function Jt(a,n){return a.type===n.type&&a.key===n.key}const Rl=({key:a})=>a??null,Ws=({ref:a,ref_key:n,ref_for:t})=>(typeof a=="number"&&(a=""+a),a!=null?Rn(a)||Nn(a)||rn(a)?{i:ka,r:a,k:n,f:!!t}:a:null);function Z(a,n=null,t=null,r=0,e=null,s=a===Un?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:a,props:n,key:n&&Rl(n),ref:n&&Ws(n),scopeId:il,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:e,dynamicChildren:null,appContext:null,ctx:ka};return i?(Yr(l,t),s&128&&a.normalize(l)):t&&(l.shapeFlag|=Rn(t)?8:16),bs>0&&!o&&ia&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ia.push(l),l}const xn=Ic;function Ic(a,n=null,t=null,r=0,e=null,s=!1){if((!a||a===tc)&&(a=it),te(a)){const i=Wt(a,n,!0);return t&&Yr(i,t),bs>0&&!s&&ia&&(i.shapeFlag&6?ia[ia.indexOf(a)]=i:ia.push(i)),i.patchFlag=-2,i}if(Vc(a)&&(a=a.__vccOpts),n){n=Fc(n);let{class:i,style:l}=n;i&&!Rn(i)&&(n.class=Rr(i)),_n(l)&&(Br(l)&&!en(l)&&(l=Yn({},l)),n.style=Mr(l))}const o=Rn(a)?1:Pl(a)?128:Hd(a)?64:_n(a)?4:rn(a)?2:0;return Z(a,n,t,r,e,o,s,!0)}function Fc(a){return a?Br(a)||yl(a)?Yn({},a):a:null}function Wt(a,n,t=!1,r=!1){const{props:e,ref:s,patchFlag:o,children:i,transition:l}=a,c=n?Oc(e||{},n):e,d={__v_isVNode:!0,__v_skip:!0,type:a.type,props:c,key:c&&Rl(c),ref:n&&n.ref?t&&s?en(s)?s.concat(Ws(n)):[s,Ws(n)]:Ws(n):s,scopeId:a.scopeId,slotScopeIds:a.slotScopeIds,children:i,target:a.target,targetStart:a.targetStart,targetAnchor:a.targetAnchor,staticCount:a.staticCount,shapeFlag:a.shapeFlag,patchFlag:n&&a.type!==Un?o===-1?16:o|16:o,dynamicProps:a.dynamicProps,dynamicChildren:a.dynamicChildren,appContext:a.appContext,dirs:a.dirs,transition:l,component:a.component,suspense:a.suspense,ssContent:a.ssContent&&Wt(a.ssContent),ssFallback:a.ssFallback&&Wt(a.ssFallback),el:a.el,anchor:a.anchor,ctx:a.ctx,ce:a.ce};return l&&r&&Gr(d,l.clone(d)),d}function El(a=" ",n=0){return xn(we,null,a,n)}function rr(a,n){const t=xn(Gs,null,a);return t.staticCount=n,t}function zc(a="",n=!1){return n?(Fn(),Ml(it,null,a)):xn(it,null,a)}function Aa(a){return a==null||typeof a=="boolean"?xn(it):en(a)?xn(Un,null,a.slice()):te(a)?Za(a):xn(we,null,String(a))}function Za(a){return a.el===null&&a.patchFlag!==-1||a.memo?a:Wt(a)}function Yr(a,n){let t=0;const{shapeFlag:r}=a;if(n==null)n=null;else if(en(n))t=16;else if(typeof n=="object")if(r&65){const e=n.default;e&&(e._c&&(e._d=!1),Yr(a,e()),e._c&&(e._d=!0));return}else{t=32;const e=n._;!e&&!yl(n)?n._ctx=ka:e===3&&ka&&(ka.slots._===1?n._=1:(n._=2,a.patchFlag|=1024))}else rn(n)?(n={default:n,_ctx:ka},t=32):(n=String(n),r&64?(t=16,n=[El(n)]):t=8);a.children=n,a.shapeFlag|=t}function Oc(...a){const n={};for(let t=0;t<a.length;t++){const r=a[t];for(const e in r)if(e==="class")n.class!==r.class&&(n.class=Rr([n.class,r.class]));else if(e==="style")n.style=Mr([n.style,r.style]);else if(ce(e)){const s=n[e],o=r[e];o&&s!==o&&!(en(s)&&s.includes(o))&&(n[e]=s?[].concat(s,o):o)}else e!==""&&(n[e]=r[e])}return n}function Ca(a,n,t,r=null){Fa(a,n,7,[t,r])}const Dc=fl();let Bc=0;function Lc(a,n,t){const r=a.type,e=(n?n.appContext:a.appContext)||Dc,s={uid:Bc++,vnode:a,type:r,parent:n,appContext:e,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(e.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bl(r,e),emitsOptions:Tl(r,e),emit:null,emitted:null,propsDefaults:wn,inheritAttrs:r.inheritAttrs,ctx:wn,data:wn,props:wn,attrs:wn,slots:wn,refs:wn,setupState:wn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Cc.bind(null,s),a.ce&&a.ce(s),s}let Gn=null,se,or;{const a=me(),n=(t,r)=>{let e;return(e=a[t])||(e=a[t]=[]),e.push(r),s=>{e.length>1?e.forEach(o=>o(s)):e[0](s)}};se=n("__VUE_INSTANCE_SETTERS__",t=>Gn=t),or=n("__VUE_SSR_SETTERS__",t=>vs=t)}const Is=a=>{const n=Gn;return se(a),a.scope.on(),()=>{a.scope.off(),se(n)}},Io=()=>{Gn&&Gn.scope.off(),se(null)};function Il(a){return a.vnode.shapeFlag&4}let vs=!1;function Uc(a,n=!1,t=!1){n&&or(n);const{props:r,children:e}=a.vnode,s=Il(a);uc(a,r,s,n),gc(a,e,t||n);const o=s?Gc(a,n):void 0;return n&&or(!1),o}function Gc(a,n){const t=a.type;a.accessCache=Object.create(null),a.proxy=new Proxy(a.ctx,ec);const{setup:r}=t;if(r){Na();const e=a.setupContext=r.length>1?Hc(a):null,s=Is(a),o=Rs(r,a,0,[a.props,e]),i=Ei(o);if(Va(),s(),(i||a.sp)&&!ls(a)&&pl(a),i){if(o.then(Io,Io),n)return o.then(l=>{Fo(a,l)}).catch(l=>{ke(l,a,0)});a.asyncDep=o}else Fo(a,o)}else Fl(a)}function Fo(a,n,t){rn(n)?a.type.__ssrInlineRender?a.ssrRender=n:a.render=n:_n(n)&&(a.setupState=tl(n)),Fl(a)}function Fl(a,n,t){const r=a.type;a.render||(a.render=r.render||Ea);{const e=Is(a);Na();try{rc(a)}finally{Va(),e()}}}const Wc={get(a,n){return Ln(a,"get",""),a[n]}};function Hc(a){const n=t=>{a.exposed=t||{}};return{attrs:new Proxy(a.attrs,Wc),slots:a.slots,emit:a.emit,expose:n}}function qr(a){return a.exposed?a.exposeProxy||(a.exposeProxy=new Proxy(tl(Rd(a.exposed)),{get(n,t){if(t in n)return n[t];if(t in ps)return ps[t](a)},has(n,t){return t in n||t in ps}})):a.proxy}function Nc(a,n=!0){return rn(a)?a.displayName||a.name:a.name||n&&a.__name}function Vc(a){return rn(a)&&"__vccOpts"in a}const Xn=(a,n)=>Od(a,n,vs);function zl(a,n,t){const r=arguments.length;return r===2?_n(n)&&!en(n)?te(n)?xn(a,null,[n]):xn(a,n):xn(a,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&te(t)&&(t=[t]),xn(a,n,t))}const Yc="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ir;const zo=typeof window<"u"&&window.trustedTypes;if(zo)try{ir=zo.createPolicy("vue",{createHTML:a=>a})}catch{}const Ol=ir?a=>ir.createHTML(a):a=>a,qc="http://www.w3.org/2000/svg",$c="http://www.w3.org/1998/Math/MathML",Ba=typeof document<"u"?document:null,Oo=Ba&&Ba.createElement("template"),Xc={insert:(a,n,t)=>{n.insertBefore(a,t||null)},remove:a=>{const n=a.parentNode;n&&n.removeChild(a)},createElement:(a,n,t,r)=>{const e=n==="svg"?Ba.createElementNS(qc,a):n==="mathml"?Ba.createElementNS($c,a):t?Ba.createElement(a,{is:t}):Ba.createElement(a);return a==="select"&&r&&r.multiple!=null&&e.setAttribute("multiple",r.multiple),e},createText:a=>Ba.createTextNode(a),createComment:a=>Ba.createComment(a),setText:(a,n)=>{a.nodeValue=n},setElementText:(a,n)=>{a.textContent=n},parentNode:a=>a.parentNode,nextSibling:a=>a.nextSibling,querySelector:a=>Ba.querySelector(a),setScopeId(a,n){a.setAttribute(n,"")},insertStaticContent(a,n,t,r,e,s){const o=t?t.previousSibling:n.lastChild;if(e&&(e===s||e.nextSibling))for(;n.insertBefore(e.cloneNode(!0),t),!(e===s||!(e=e.nextSibling)););else{Oo.innerHTML=Ol(r==="svg"?`<svg>${a}</svg>`:r==="mathml"?`<math>${a}</math>`:a);const i=Oo.content;if(r==="svg"||r==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Kc=Symbol("_vtc");function Zc(a,n,t){const r=a[Kc];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?a.removeAttribute("class"):t?a.setAttribute("class",n):a.className=n}const Do=Symbol("_vod"),Qc=Symbol("_vsh"),Jc=Symbol(""),nu=/(^|;)\s*display\s*:/;function au(a,n,t){const r=a.style,e=Rn(t);let s=!1;if(t&&!e){if(n)if(Rn(n))for(const o of n.split(";")){const i=o.slice(0,o.indexOf(":")).trim();t[i]==null&&Hs(r,i,"")}else for(const o in n)t[o]==null&&Hs(r,o,"");for(const o in t)o==="display"&&(s=!0),Hs(r,o,t[o])}else if(e){if(n!==t){const o=r[Jc];o&&(t+=";"+o),r.cssText=t,s=nu.test(t)}}else n&&a.removeAttribute("style");Do in a&&(a[Do]=s?r.display:"",a[Qc]&&(r.display="none"))}const Bo=/\s*!important$/;function Hs(a,n,t){if(en(t))t.forEach(r=>Hs(a,n,r));else if(t==null&&(t=""),n.startsWith("--"))a.setProperty(n,t);else{const r=tu(a,n);Bo.test(t)?a.setProperty(St(r),t.replace(Bo,""),"important"):a[r]=t}}const Lo=["Webkit","Moz","ms"],De={};function tu(a,n){const t=De[n];if(t)return t;let r=ya(n);if(r!=="filter"&&r in a)return De[n]=r;r=fe(r);for(let e=0;e<Lo.length;e++){const s=Lo[e]+r;if(s in a)return De[n]=s}return n}const Uo="http://www.w3.org/1999/xlink";function Go(a,n,t,r,e,s=dd(n)){r&&n.startsWith("xlink:")?t==null?a.removeAttributeNS(Uo,n.slice(6,n.length)):a.setAttributeNS(Uo,n,t):t==null||s&&!Oi(t)?a.removeAttribute(n):a.setAttribute(n,s?"":dt(t)?String(t):t)}function Wo(a,n,t,r,e){if(n==="innerHTML"||n==="textContent"){t!=null&&(a[n]=n==="innerHTML"?Ol(t):t);return}const s=a.tagName;if(n==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?a.getAttribute("value")||"":a.value,l=t==null?a.type==="checkbox"?"on":"":String(t);(i!==l||!("_value"in a))&&(a.value=l),t==null&&a.removeAttribute(n),a._value=t;return}let o=!1;if(t===""||t==null){const i=typeof a[n];i==="boolean"?t=Oi(t):t==null&&i==="string"?(t="",o=!0):i==="number"&&(t=0,o=!0)}try{a[n]=t}catch{}o&&a.removeAttribute(e||n)}function su(a,n,t,r){a.addEventListener(n,t,r)}function eu(a,n,t,r){a.removeEventListener(n,t,r)}const Ho=Symbol("_vei");function ru(a,n,t,r,e=null){const s=a[Ho]||(a[Ho]={}),o=s[n];if(r&&o)o.value=r;else{const[i,l]=ou(n);if(r){const c=s[n]=pu(r,e);su(a,i,c,l)}else o&&(eu(a,i,o,l),s[n]=void 0)}}const No=/(?:Once|Passive|Capture)$/;function ou(a){let n;if(No.test(a)){n={};let r;for(;r=a.match(No);)a=a.slice(0,a.length-r[0].length),n[r[0].toLowerCase()]=!0}return[a[2]===":"?a.slice(3):St(a.slice(2)),n]}let Be=0;const iu=Promise.resolve(),lu=()=>Be||(iu.then(()=>Be=0),Be=Date.now());function pu(a,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Fa(du(r,t.value),n,5,[r])};return t.value=a,t.attached=lu(),t}function du(a,n){if(en(n)){const t=a.stopImmediatePropagation;return a.stopImmediatePropagation=()=>{t.call(a),a._stopped=!0},n.map(r=>e=>!e._stopped&&r&&r(e))}else return n}const Vo=a=>a.charCodeAt(0)===111&&a.charCodeAt(1)===110&&a.charCodeAt(2)>96&&a.charCodeAt(2)<123,cu=(a,n,t,r,e,s)=>{const o=e==="svg";n==="class"?Zc(a,r,o):n==="style"?au(a,t,r):ce(n)?Tr(n)||ru(a,n,t,r,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):uu(a,n,r,o))?(Wo(a,n,r),!a.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Go(a,n,r,o,s,n!=="value")):a._isVueCE&&(/[A-Z]/.test(n)||!Rn(r))?Wo(a,ya(n),r,s,n):(n==="true-value"?a._trueValue=r:n==="false-value"&&(a._falseValue=r),Go(a,n,r,o))};function uu(a,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in a&&Vo(n)&&rn(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&a.tagName==="INPUT"||n==="type"&&a.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const e=a.tagName;if(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")return!1}return Vo(n)&&Rn(t)?!1:n in a}const hu=Yn({patchProp:cu},Xc);let Yo;function fu(){return Yo||(Yo=kc(hu))}const mu=(...a)=>{const n=fu().createApp(...a),{mount:t}=n;return n.mount=r=>{const e=yu(r);if(!e)return;const s=n._component;!rn(s)&&!s.render&&!s.template&&(s.template=e.innerHTML),e.nodeType===1&&(e.textContent="");const o=t(e,!1,gu(e));return e instanceof Element&&(e.removeAttribute("v-cloak"),e.setAttribute("data-v-app","")),o},n};function gu(a){if(a instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&a instanceof MathMLElement)return"mathml"}function yu(a){return Rn(a)?document.querySelector(a):a}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Mt=typeof document<"u";function Dl(a){return typeof a=="object"||"displayName"in a||"props"in a||"__vccOpts"in a}function ku(a){return a.__esModule||a[Symbol.toStringTag]==="Module"||a.default&&Dl(a.default)}const mn=Object.assign;function Le(a,n){const t={};for(const r in n){const e=n[r];t[r]=xa(e)?e.map(a):a(e)}return t}const cs=()=>{},xa=Array.isArray,Bl=/#/g,bu=/&/g,vu=/\//g,wu=/=/g,xu=/\?/g,Ll=/\+/g,ju=/%5B/g,_u=/%5D/g,Ul=/%5E/g,Su=/%60/g,Gl=/%7B/g,Cu=/%7C/g,Wl=/%7D/g,Tu=/%20/g;function $r(a){return encodeURI(""+a).replace(Cu,"|").replace(ju,"[").replace(_u,"]")}function Pu(a){return $r(a).replace(Gl,"{").replace(Wl,"}").replace(Ul,"^")}function lr(a){return $r(a).replace(Ll,"%2B").replace(Tu,"+").replace(Bl,"%23").replace(bu,"%26").replace(Su,"`").replace(Gl,"{").replace(Wl,"}").replace(Ul,"^")}function Au(a){return lr(a).replace(wu,"%3D")}function Mu(a){return $r(a).replace(Bl,"%23").replace(xu,"%3F")}function Ru(a){return a==null?"":Mu(a).replace(vu,"%2F")}function ws(a){try{return decodeURIComponent(""+a)}catch{}return""+a}const Eu=/\/$/,Iu=a=>a.replace(Eu,"");function Ue(a,n,t="/"){let r,e={},s="",o="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(r=n.slice(0,l),s=n.slice(l+1,i>-1?i:n.length),e=a(s)),i>-1&&(r=r||n.slice(0,i),o=n.slice(i,n.length)),r=Du(r??n,t),{fullPath:r+(s&&"?")+s+o,path:r,query:e,hash:ws(o)}}function Fu(a,n){const t=n.query?a(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function qo(a,n){return!n||!a.toLowerCase().startsWith(n.toLowerCase())?a:a.slice(n.length)||"/"}function zu(a,n,t){const r=n.matched.length-1,e=t.matched.length-1;return r>-1&&r===e&&Ht(n.matched[r],t.matched[e])&&Hl(n.params,t.params)&&a(n.query)===a(t.query)&&n.hash===t.hash}function Ht(a,n){return(a.aliasOf||a)===(n.aliasOf||n)}function Hl(a,n){if(Object.keys(a).length!==Object.keys(n).length)return!1;for(const t in a)if(!Ou(a[t],n[t]))return!1;return!0}function Ou(a,n){return xa(a)?$o(a,n):xa(n)?$o(n,a):a===n}function $o(a,n){return xa(n)?a.length===n.length&&a.every((t,r)=>t===n[r]):a.length===1&&a[0]===n}function Du(a,n){if(a.startsWith("/"))return a;if(!a)return n;const t=n.split("/"),r=a.split("/"),e=r[r.length-1];(e===".."||e===".")&&r.push("");let s=t.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Xa={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var xs;(function(a){a.pop="pop",a.push="push"})(xs||(xs={}));var us;(function(a){a.back="back",a.forward="forward",a.unknown=""})(us||(us={}));function Bu(a){if(!a)if(Mt){const n=document.querySelector("base");a=n&&n.getAttribute("href")||"/",a=a.replace(/^\w+:\/\/[^\/]+/,"")}else a="/";return a[0]!=="/"&&a[0]!=="#"&&(a="/"+a),Iu(a)}const Lu=/^[^#]+#/;function Uu(a,n){return a.replace(Lu,"#")+n}function Gu(a,n){const t=document.documentElement.getBoundingClientRect(),r=a.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const xe=()=>({left:window.scrollX,top:window.scrollY});function Wu(a){let n;if("el"in a){const t=a.el,r=typeof t=="string"&&t.startsWith("#"),e=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!e)return;n=Gu(e,a)}else n=a;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Xo(a,n){return(history.state?history.state.position-n:-1)+a}const pr=new Map;function Hu(a,n){pr.set(a,n)}function Nu(a){const n=pr.get(a);return pr.delete(a),n}let Vu=()=>location.protocol+"//"+location.host;function Nl(a,n){const{pathname:t,search:r,hash:e}=n,s=a.indexOf("#");if(s>-1){let i=e.includes(a.slice(s))?a.slice(s).length:1,l=e.slice(i);return l[0]!=="/"&&(l="/"+l),qo(l,"")}return qo(t,a)+r+e}function Yu(a,n,t,r){let e=[],s=[],o=null;const i=({state:f})=>{const p=Nl(a,location),m=t.value,h=n.value;let g=0;if(f){if(t.value=p,n.value=f,o&&o===m){o=null;return}g=h?f.position-h.position:0}else r(p);e.forEach(k=>{k(t.value,m,{delta:g,type:xs.pop,direction:g?g>0?us.forward:us.back:us.unknown})})};function l(){o=t.value}function c(f){e.push(f);const p=()=>{const m=e.indexOf(f);m>-1&&e.splice(m,1)};return s.push(p),p}function d(){const{history:f}=window;f.state&&f.replaceState(mn({},f.state,{scroll:xe()}),"")}function u(){for(const f of s)f();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Ko(a,n,t,r=!1,e=!1){return{back:a,current:n,forward:t,replaced:r,position:window.history.length,scroll:e?xe():null}}function qu(a){const{history:n,location:t}=window,r={value:Nl(a,t)},e={value:n.state};e.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(l,c,d){const u=a.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?a:a.slice(u))+l:Vu()+a+l;try{n[d?"replaceState":"pushState"](c,"",f),e.value=c}catch(p){console.error(p),t[d?"replace":"assign"](f)}}function o(l,c){const d=mn({},n.state,Ko(e.value.back,l,e.value.forward,!0),c,{position:e.value.position});s(l,d,!0),r.value=l}function i(l,c){const d=mn({},e.value,n.state,{forward:l,scroll:xe()});s(d.current,d,!0);const u=mn({},Ko(r.value,l,null),{position:d.position+1},c);s(l,u,!1),r.value=l}return{location:r,state:e,push:i,replace:o}}function $u(a){a=Bu(a);const n=qu(a),t=Yu(a,n.state,n.location,n.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const e=mn({location:"",base:a,go:r,createHref:Uu.bind(null,a)},n,t);return Object.defineProperty(e,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>n.state.value}),e}function Xu(a){return typeof a=="string"||a&&typeof a=="object"}function Vl(a){return typeof a=="string"||typeof a=="symbol"}const Yl=Symbol("");var Zo;(function(a){a[a.aborted=4]="aborted",a[a.cancelled=8]="cancelled",a[a.duplicated=16]="duplicated"})(Zo||(Zo={}));function Nt(a,n){return mn(new Error,{type:a,[Yl]:!0},n)}function Da(a,n){return a instanceof Error&&Yl in a&&(n==null||!!(a.type&n))}const Qo="[^/]+?",Ku={sensitive:!1,strict:!1,start:!0,end:!0},Zu=/[.+*?^${}()[\]/\\]/g;function Qu(a,n){const t=mn({},Ku,n),r=[];let e=t.start?"^":"";const s=[];for(const c of a){const d=c.length?[]:[90];t.strict&&!c.length&&(e+="/");for(let u=0;u<c.length;u++){const f=c[u];let p=40+(t.sensitive?.25:0);if(f.type===0)u||(e+="/"),e+=f.value.replace(Zu,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:h,optional:g,regexp:k}=f;s.push({name:m,repeatable:h,optional:g});const v=k||Qo;if(v!==Qo){p+=10;try{new RegExp(`(${v})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+_.message)}}let j=h?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;u||(j=g&&c.length<2?`(?:/${j})`:"/"+j),g&&(j+="?"),e+=j,p+=20,g&&(p+=-8),h&&(p+=-20),v===".*"&&(p+=-50)}d.push(p)}r.push(d)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(e+="/?"),t.end?e+="$":t.strict&&!e.endsWith("/")&&(e+="(?:/|$)");const o=new RegExp(e,t.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let f=1;f<d.length;f++){const p=d[f]||"",m=s[f-1];u[m.name]=p&&m.repeatable?p.split("/"):p}return u}function l(c){let d="",u=!1;for(const f of a){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const p of f)if(p.type===0)d+=p.value;else if(p.type===1){const{value:m,repeatable:h,optional:g}=p,k=m in c?c[m]:"";if(xa(k)&&!h)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=xa(k)?k.join("/"):k;if(!v)if(g)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);d+=v}}return d||"/"}return{re:o,score:r,keys:s,parse:i,stringify:l}}function Ju(a,n){let t=0;for(;t<a.length&&t<n.length;){const r=n[t]-a[t];if(r)return r;t++}return a.length<n.length?a.length===1&&a[0]===80?-1:1:a.length>n.length?n.length===1&&n[0]===80?1:-1:0}function ql(a,n){let t=0;const r=a.score,e=n.score;for(;t<r.length&&t<e.length;){const s=Ju(r[t],e[t]);if(s)return s;t++}if(Math.abs(e.length-r.length)===1){if(Jo(r))return 1;if(Jo(e))return-1}return e.length-r.length}function Jo(a){const n=a[a.length-1];return a.length>0&&n[n.length-1]<0}const nh={type:0,value:""},ah=/[a-zA-Z0-9_]/;function th(a){if(!a)return[[]];if(a==="/")return[[nh]];if(!a.startsWith("/"))throw new Error(`Invalid path "${a}"`);function n(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,r=t;const e=[];let s;function o(){s&&e.push(s),s=[]}let i=0,l,c="",d="";function u(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;i<a.length;){if(l=a[i++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:ah.test(l)?f():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=3:d+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${c}"`),u(),o(),e}function sh(a,n,t){const r=Qu(th(a.path),t),e=mn(r,{record:a,parent:n,children:[],alias:[]});return n&&!e.record.aliasOf==!n.record.aliasOf&&n.children.push(e),e}function eh(a,n){const t=[],r=new Map;n=si({strict:!1,end:!0,sensitive:!1},n);function e(u){return r.get(u)}function s(u,f,p){const m=!p,h=ai(u);h.aliasOf=p&&p.record;const g=si(n,u),k=[h];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of _)k.push(ai(mn({},h,{components:p?p.record.components:h.components,path:y,aliasOf:p?p.record:h})))}let v,j;for(const _ of k){const{path:y}=_;if(f&&y[0]!=="/"){const w=f.record.path,x=w[w.length-1]==="/"?"":"/";_.path=f.record.path+(y&&x+y)}if(v=sh(_,f,g),p?p.alias.push(v):(j=j||v,j!==v&&j.alias.push(v),m&&u.name&&!ti(v)&&o(u.name)),$l(v)&&l(v),h.children){const w=h.children;for(let x=0;x<w.length;x++)s(w[x],v,p&&p.children[x])}p=p||v}return j?()=>{o(j)}:cs}function o(u){if(Vl(u)){const f=r.get(u);f&&(r.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return t}function l(u){const f=ih(u,t);t.splice(f,0,u),u.record.name&&!ti(u)&&r.set(u.record.name,u)}function c(u,f){let p,m={},h,g;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Nt(1,{location:u});g=p.record.name,m=mn(ni(f.params,p.keys.filter(j=>!j.optional).concat(p.parent?p.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),u.params&&ni(u.params,p.keys.map(j=>j.name))),h=p.stringify(m)}else if(u.path!=null)h=u.path,p=t.find(j=>j.re.test(h)),p&&(m=p.parse(h),g=p.record.name);else{if(p=f.name?r.get(f.name):t.find(j=>j.re.test(f.path)),!p)throw Nt(1,{location:u,currentLocation:f});g=p.record.name,m=mn({},f.params,u.params),h=p.stringify(m)}const k=[];let v=p;for(;v;)k.unshift(v.record),v=v.parent;return{name:g,path:h,params:m,matched:k,meta:oh(k)}}a.forEach(u=>s(u));function d(){t.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:e}}function ni(a,n){const t={};for(const r of n)r in a&&(t[r]=a[r]);return t}function ai(a){const n={path:a.path,redirect:a.redirect,name:a.name,meta:a.meta||{},aliasOf:a.aliasOf,beforeEnter:a.beforeEnter,props:rh(a),children:a.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in a?a.components||null:a.component&&{default:a.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function rh(a){const n={},t=a.props||!1;if("component"in a)n.default=t;else for(const r in a.components)n[r]=typeof t=="object"?t[r]:t;return n}function ti(a){for(;a;){if(a.record.aliasOf)return!0;a=a.parent}return!1}function oh(a){return a.reduce((n,t)=>mn(n,t.meta),{})}function si(a,n){const t={};for(const r in a)t[r]=r in n?n[r]:a[r];return t}function ih(a,n){let t=0,r=n.length;for(;t!==r;){const s=t+r>>1;ql(a,n[s])<0?r=s:t=s+1}const e=lh(a);return e&&(r=n.lastIndexOf(e,r-1)),r}function lh(a){let n=a;for(;n=n.parent;)if($l(n)&&ql(a,n)===0)return n}function $l({record:a}){return!!(a.name||a.components&&Object.keys(a.components).length||a.redirect)}function ph(a){const n={};if(a===""||a==="?")return n;const r=(a[0]==="?"?a.slice(1):a).split("&");for(let e=0;e<r.length;++e){const s=r[e].replace(Ll," "),o=s.indexOf("="),i=ws(o<0?s:s.slice(0,o)),l=o<0?null:ws(s.slice(o+1));if(i in n){let c=n[i];xa(c)||(c=n[i]=[c]),c.push(l)}else n[i]=l}return n}function ei(a){let n="";for(let t in a){const r=a[t];if(t=Au(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(xa(r)?r.map(s=>s&&lr(s)):[r&&lr(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function dh(a){const n={};for(const t in a){const r=a[t];r!==void 0&&(n[t]=xa(r)?r.map(e=>e==null?null:""+e):r==null?r:""+r)}return n}const ch=Symbol(""),ri=Symbol(""),je=Symbol(""),Xr=Symbol(""),dr=Symbol("");function ns(){let a=[];function n(r){return a.push(r),()=>{const e=a.indexOf(r);e>-1&&a.splice(e,1)}}function t(){a=[]}return{add:n,list:()=>a.slice(),reset:t}}function Qa(a,n,t,r,e,s=o=>o()){const o=r&&(r.enterCallbacks[e]=r.enterCallbacks[e]||[]);return()=>new Promise((i,l)=>{const c=f=>{f===!1?l(Nt(4,{from:t,to:n})):f instanceof Error?l(f):Xu(f)?l(Nt(2,{from:n,to:f})):(o&&r.enterCallbacks[e]===o&&typeof f=="function"&&o.push(f),i())},d=s(()=>a.call(r&&r.instances[e],n,t,c));let u=Promise.resolve(d);a.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function Ge(a,n,t,r,e=s=>s()){const s=[];for(const o of a)for(const i in o.components){let l=o.components[i];if(!(n!=="beforeRouteEnter"&&!o.instances[i]))if(Dl(l)){const d=(l.__vccOpts||l)[n];d&&s.push(Qa(d,t,r,o,i,e))}else{let c=l();s.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=ku(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[n];return p&&Qa(p,t,r,o,i,e)()}))}}return s}function oi(a){const n=wa(je),t=wa(Xr),r=Xn(()=>{const l=va(a.to);return n.resolve(l)}),e=Xn(()=>{const{matched:l}=r.value,{length:c}=l,d=l[c-1],u=t.matched;if(!d||!u.length)return-1;const f=u.findIndex(Ht.bind(null,d));if(f>-1)return f;const p=ii(l[c-2]);return c>1&&ii(d)===p&&u[u.length-1].path!==p?u.findIndex(Ht.bind(null,l[c-2])):f}),s=Xn(()=>e.value>-1&&mh(t.params,r.value.params)),o=Xn(()=>e.value>-1&&e.value===t.matched.length-1&&Hl(t.params,r.value.params));function i(l={}){if(fh(l)){const c=n[va(a.replace)?"replace":"push"](va(a.to)).catch(cs);return a.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Xn(()=>r.value.href),isActive:s,isExactActive:o,navigate:i}}function uh(a){return a.length===1?a[0]:a}const hh=ll({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:oi,setup(a,{slots:n}){const t=ye(oi(a)),{options:r}=wa(je),e=Xn(()=>({[li(a.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[li(a.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=n.default&&uh(n.default(t));return a.custom?s:zl("a",{"aria-current":t.isExactActive?a.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:e.value},s)}}}),Kr=hh;function fh(a){if(!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)&&!a.defaultPrevented&&!(a.button!==void 0&&a.button!==0)){if(a.currentTarget&&a.currentTarget.getAttribute){const n=a.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return a.preventDefault&&a.preventDefault(),!0}}function mh(a,n){for(const t in n){const r=n[t],e=a[t];if(typeof r=="string"){if(r!==e)return!1}else if(!xa(e)||e.length!==r.length||r.some((s,o)=>s!==e[o]))return!1}return!0}function ii(a){return a?a.aliasOf?a.aliasOf.path:a.path:""}const li=(a,n,t)=>a??n??t,gh=ll({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(a,{attrs:n,slots:t}){const r=wa(dr),e=Xn(()=>a.route||r.value),s=wa(ri,0),o=Xn(()=>{let c=va(s);const{matched:d}=e.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=Xn(()=>e.value.matched[o.value]);Ls(ri,Xn(()=>o.value+1)),Ls(ch,i),Ls(dr,e);const l=Ha();return Us(()=>[l.value,i.value,a.name],([c,d,u],[f,p,m])=>{d&&(d.instances[u]=c,p&&p!==d&&c&&c===f&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards),d.updateGuards.size||(d.updateGuards=p.updateGuards))),c&&d&&(!p||!Ht(d,p)||!f)&&(d.enterCallbacks[u]||[]).forEach(h=>h(c))},{flush:"post"}),()=>{const c=e.value,d=a.name,u=i.value,f=u&&u.components[d];if(!f)return pi(t.default,{Component:f,route:c});const p=u.props[d],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,g=zl(f,mn({},m,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return pi(t.default,{Component:g,route:c})||g}}});function pi(a,n){if(!a)return null;const t=a(n);return t.length===1?t[0]:t}const Xl=gh;function yh(a){const n=eh(a.routes,a),t=a.parseQuery||ph,r=a.stringifyQuery||ei,e=a.history,s=ns(),o=ns(),i=ns(),l=Ed(Xa);let c=Xa;Mt&&a.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Le.bind(null,F=>""+F),u=Le.bind(null,Ru),f=Le.bind(null,ws);function p(F,G){let H,q;return Vl(F)?(H=n.getRecordMatcher(F),q=G):q=F,n.addRoute(q,H)}function m(F){const G=n.getRecordMatcher(F);G&&n.removeRoute(G)}function h(){return n.getRoutes().map(F=>F.record)}function g(F){return!!n.getRecordMatcher(F)}function k(F,G){if(G=mn({},G||l.value),typeof F=="string"){const R=Ue(t,F,G.path),z=n.resolve({path:R.path},G),B=e.createHref(R.fullPath);return mn(R,z,{params:f(z.params),hash:ws(R.hash),redirectedFrom:void 0,href:B})}let H;if(F.path!=null)H=mn({},F,{path:Ue(t,F.path,G.path).path});else{const R=mn({},F.params);for(const z in R)R[z]==null&&delete R[z];H=mn({},F,{params:u(R)}),G.params=u(G.params)}const q=n.resolve(H,G),tn=F.hash||"";q.params=d(f(q.params));const A=Fu(r,mn({},F,{hash:Pu(tn),path:q.path})),M=e.createHref(A);return mn({fullPath:A,hash:tn,query:r===ei?dh(F.query):F.query||{}},q,{redirectedFrom:void 0,href:M})}function v(F){return typeof F=="string"?Ue(t,F,l.value.path):mn({},F)}function j(F,G){if(c!==F)return Nt(8,{from:G,to:F})}function _(F){return x(F)}function y(F){return _(mn(v(F),{replace:!0}))}function w(F){const G=F.matched[F.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let q=typeof H=="function"?H(F):H;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=v(q):{path:q},q.params={}),mn({query:F.query,hash:F.hash,params:q.path!=null?{}:F.params},q)}}function x(F,G){const H=c=k(F),q=l.value,tn=F.state,A=F.force,M=F.replace===!0,R=w(H);if(R)return x(mn(v(R),{state:typeof R=="object"?mn({},tn,R.state):tn,force:A,replace:M}),G||H);const z=H;z.redirectedFrom=G;let B;return!A&&zu(r,q,H)&&(B=Nt(16,{to:z,from:q}),pn(q,q,!0,!1)),(B?Promise.resolve(B):T(z,q)).catch(L=>Da(L)?Da(L,2)?L:on(L):N(L,z,q)).then(L=>{if(L){if(Da(L,2))return x(mn({replace:M},v(L.to),{state:typeof L.to=="object"?mn({},tn,L.to.state):tn,force:A}),G||z)}else L=C(z,q,!0,M,tn);return P(z,q,L),L})}function b(F,G){const H=j(F,G);return H?Promise.reject(H):Promise.resolve()}function S(F){const G=dn.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(F):F()}function T(F,G){let H;const[q,tn,A]=kh(F,G);H=Ge(q.reverse(),"beforeRouteLeave",F,G);for(const R of q)R.leaveGuards.forEach(z=>{H.push(Qa(z,F,G))});const M=b.bind(null,F,G);return H.push(M),Q(H).then(()=>{H=[];for(const R of s.list())H.push(Qa(R,F,G));return H.push(M),Q(H)}).then(()=>{H=Ge(tn,"beforeRouteUpdate",F,G);for(const R of tn)R.updateGuards.forEach(z=>{H.push(Qa(z,F,G))});return H.push(M),Q(H)}).then(()=>{H=[];for(const R of A)if(R.beforeEnter)if(xa(R.beforeEnter))for(const z of R.beforeEnter)H.push(Qa(z,F,G));else H.push(Qa(R.beforeEnter,F,G));return H.push(M),Q(H)}).then(()=>(F.matched.forEach(R=>R.enterCallbacks={}),H=Ge(A,"beforeRouteEnter",F,G,S),H.push(M),Q(H))).then(()=>{H=[];for(const R of o.list())H.push(Qa(R,F,G));return H.push(M),Q(H)}).catch(R=>Da(R,8)?R:Promise.reject(R))}function P(F,G,H){i.list().forEach(q=>S(()=>q(F,G,H)))}function C(F,G,H,q,tn){const A=j(F,G);if(A)return A;const M=G===Xa,R=Mt?history.state:{};H&&(q||M?e.replace(F.fullPath,mn({scroll:M&&R&&R.scroll},tn)):e.push(F.fullPath,tn)),l.value=F,pn(F,G,H,M),on()}let E;function I(){E||(E=e.listen((F,G,H)=>{if(!un.listening)return;const q=k(F),tn=w(q);if(tn){x(mn(tn,{replace:!0,force:!0}),q).catch(cs);return}c=q;const A=l.value;Mt&&Hu(Xo(A.fullPath,H.delta),xe()),T(q,A).catch(M=>Da(M,12)?M:Da(M,2)?(x(mn(v(M.to),{force:!0}),q).then(R=>{Da(R,20)&&!H.delta&&H.type===xs.pop&&e.go(-1,!1)}).catch(cs),Promise.reject()):(H.delta&&e.go(-H.delta,!1),N(M,q,A))).then(M=>{M=M||C(q,A,!1),M&&(H.delta&&!Da(M,8)?e.go(-H.delta,!1):H.type===xs.pop&&Da(M,20)&&e.go(-1,!1)),P(q,A,M)}).catch(cs)}))}let O=ns(),U=ns(),D;function N(F,G,H){on(F);const q=U.list();return q.length?q.forEach(tn=>tn(F,G,H)):console.error(F),Promise.reject(F)}function nn(){return D&&l.value!==Xa?Promise.resolve():new Promise((F,G)=>{O.add([F,G])})}function on(F){return D||(D=!F,I(),O.list().forEach(([G,H])=>F?H(F):G()),O.reset()),F}function pn(F,G,H,q){const{scrollBehavior:tn}=a;if(!Mt||!tn)return Promise.resolve();const A=!H&&Nu(Xo(F.fullPath,0))||(q||!H)&&history.state&&history.state.scroll||null;return Lr().then(()=>tn(F,G,A)).then(M=>M&&Wu(M)).catch(M=>N(M,F,G))}const sn=F=>e.go(F);let cn;const dn=new Set,un={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,clearRoutes:n.clearRoutes,hasRoute:g,getRoutes:h,resolve:k,options:a,push:_,replace:y,go:sn,back:()=>sn(-1),forward:()=>sn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:i.add,onError:U.add,isReady:nn,install(F){const G=this;F.component("RouterLink",Kr),F.component("RouterView",Xl),F.config.globalProperties.$router=G,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>va(l)}),Mt&&!cn&&l.value===Xa&&(cn=!0,_(e.location).catch(tn=>{}));const H={};for(const tn in Xa)Object.defineProperty(H,tn,{get:()=>l.value[tn],enumerable:!0});F.provide(je,G),F.provide(Xr,Ji(H)),F.provide(dr,l);const q=F.unmount;dn.add(F),F.unmount=function(){dn.delete(F),dn.size<1&&(c=Xa,E&&E(),E=null,l.value=Xa,cn=!1,D=!1),q()}}};function Q(F){return F.reduce((G,H)=>G.then(()=>S(H)),Promise.resolve())}return un}function kh(a,n){const t=[],r=[],e=[],s=Math.max(n.matched.length,a.matched.length);for(let o=0;o<s;o++){const i=n.matched[o];i&&(a.matched.find(c=>Ht(c,i))?r.push(i):t.push(i));const l=a.matched[o];l&&(n.matched.find(c=>Ht(c,l))||e.push(l))}return[t,r,e]}function bh(){return wa(je)}function vh(a){return wa(Xr)}const wh={__name:"App",setup(a){return(n,t)=>(Fn(),Ml(va(Xl)))}};var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kl(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ns={exports:{}},xh=Ns.exports,ci;function jh(){return ci||(ci=1,function(a,n){(function(t,r){a.exports=r()})(xh,function(){return function(t){function r(s){if(e[s])return e[s].exports;var o=e[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=t,r.c=e,r.p="dist/",r(0)}([function(t,r,e){function s(I){return I&&I.__esModule?I:{default:I}}var o=Object.assign||function(I){for(var O=1;O<arguments.length;O++){var U=arguments[O];for(var D in U)Object.prototype.hasOwnProperty.call(U,D)&&(I[D]=U[D])}return I},i=e(1),l=(s(i),e(6)),c=s(l),d=e(7),u=s(d),f=e(8),p=s(f),m=e(9),h=s(m),g=e(10),k=s(g),v=e(11),j=s(v),_=e(14),y=s(_),w=[],x=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},S=function(){var I=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(I&&(x=!0),x)return w=(0,j.default)(w,b),(0,k.default)(w,b.once),w},T=function(){w=(0,y.default)(),S()},P=function(){w.forEach(function(I,O){I.node.removeAttribute("data-aos"),I.node.removeAttribute("data-aos-easing"),I.node.removeAttribute("data-aos-duration"),I.node.removeAttribute("data-aos-delay")})},C=function(I){return I===!0||I==="mobile"&&h.default.mobile()||I==="phone"&&h.default.phone()||I==="tablet"&&h.default.tablet()||typeof I=="function"&&I()===!0},E=function(I){b=o(b,I),w=(0,y.default)();var O=document.all&&!window.atob;return C(b.disable)||O?P():(b.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),b.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?S(!0):b.startEvent==="load"?window.addEventListener(b.startEvent,function(){S(!0)}):document.addEventListener(b.startEvent,function(){S(!0)}),window.addEventListener("resize",(0,u.default)(S,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(S,b.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,k.default)(w,b.once)},b.throttleDelay)),b.disableMutationObserver||p.default.ready("[data-aos]",T),w)};t.exports={init:E,refresh:S,refreshHard:T}},function(t,r){},,,,,function(t,r){(function(e){function s(C,E,I){function O(R){var z=dn,B=un;return dn=un=void 0,q=R,F=C.apply(B,z)}function U(R){return q=R,G=setTimeout(nn,E),tn?O(R):F}function D(R){var z=R-H,B=R-q,L=E-z;return A?T(L,Q-B):L}function N(R){var z=R-H,B=R-q;return H===void 0||z>=E||z<0||A&&B>=Q}function nn(){var R=P();return N(R)?on(R):void(G=setTimeout(nn,D(R)))}function on(R){return G=void 0,M&&dn?O(R):(dn=un=void 0,F)}function pn(){G!==void 0&&clearTimeout(G),q=0,dn=H=un=G=void 0}function sn(){return G===void 0?F:on(P())}function cn(){var R=P(),z=N(R);if(dn=arguments,un=this,H=R,z){if(G===void 0)return U(H);if(A)return G=setTimeout(nn,E),O(H)}return G===void 0&&(G=setTimeout(nn,E)),F}var dn,un,Q,F,G,H,q=0,tn=!1,A=!1,M=!0;if(typeof C!="function")throw new TypeError(f);return E=d(E)||0,i(I)&&(tn=!!I.leading,A="maxWait"in I,Q=A?S(d(I.maxWait)||0,E):Q,M="trailing"in I?!!I.trailing:M),cn.cancel=pn,cn.flush=sn,cn}function o(C,E,I){var O=!0,U=!0;if(typeof C!="function")throw new TypeError(f);return i(I)&&(O="leading"in I?!!I.leading:O,U="trailing"in I?!!I.trailing:U),s(C,E,{leading:O,maxWait:E,trailing:U})}function i(C){var E=typeof C>"u"?"undefined":u(C);return!!C&&(E=="object"||E=="function")}function l(C){return!!C&&(typeof C>"u"?"undefined":u(C))=="object"}function c(C){return(typeof C>"u"?"undefined":u(C))=="symbol"||l(C)&&b.call(C)==m}function d(C){if(typeof C=="number")return C;if(c(C))return p;if(i(C)){var E=typeof C.valueOf=="function"?C.valueOf():C;C=i(E)?E+"":E}if(typeof C!="string")return C===0?C:+C;C=C.replace(h,"");var I=k.test(C);return I||v.test(C)?j(C.slice(2),I?2:8):g.test(C)?p:+C}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},f="Expected a function",p=NaN,m="[object Symbol]",h=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,v=/^0o[0-7]+$/i,j=parseInt,_=(typeof e>"u"?"undefined":u(e))=="object"&&e&&e.Object===Object&&e,y=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,w=_||y||Function("return this")(),x=Object.prototype,b=x.toString,S=Math.max,T=Math.min,P=function(){return w.Date.now()};t.exports=o}).call(r,function(){return this}())},function(t,r){(function(e){function s(P,C,E){function I(M){var R=cn,z=dn;return cn=dn=void 0,H=M,Q=P.apply(z,R)}function O(M){return H=M,F=setTimeout(N,C),q?I(M):Q}function U(M){var R=M-G,z=M-H,B=C-R;return tn?S(B,un-z):B}function D(M){var R=M-G,z=M-H;return G===void 0||R>=C||R<0||tn&&z>=un}function N(){var M=T();return D(M)?nn(M):void(F=setTimeout(N,U(M)))}function nn(M){return F=void 0,A&&cn?I(M):(cn=dn=void 0,Q)}function on(){F!==void 0&&clearTimeout(F),H=0,cn=G=dn=F=void 0}function pn(){return F===void 0?Q:nn(T())}function sn(){var M=T(),R=D(M);if(cn=arguments,dn=this,G=M,R){if(F===void 0)return O(G);if(tn)return F=setTimeout(N,C),I(G)}return F===void 0&&(F=setTimeout(N,C)),Q}var cn,dn,un,Q,F,G,H=0,q=!1,tn=!1,A=!0;if(typeof P!="function")throw new TypeError(u);return C=c(C)||0,o(E)&&(q=!!E.leading,tn="maxWait"in E,un=tn?b(c(E.maxWait)||0,C):un,A="trailing"in E?!!E.trailing:A),sn.cancel=on,sn.flush=pn,sn}function o(P){var C=typeof P>"u"?"undefined":d(P);return!!P&&(C=="object"||C=="function")}function i(P){return!!P&&(typeof P>"u"?"undefined":d(P))=="object"}function l(P){return(typeof P>"u"?"undefined":d(P))=="symbol"||i(P)&&x.call(P)==p}function c(P){if(typeof P=="number")return P;if(l(P))return f;if(o(P)){var C=typeof P.valueOf=="function"?P.valueOf():P;P=o(C)?C+"":C}if(typeof P!="string")return P===0?P:+P;P=P.replace(m,"");var E=g.test(P);return E||k.test(P)?v(P.slice(2),E?2:8):h.test(P)?f:+P}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},u="Expected a function",f=NaN,p="[object Symbol]",m=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,k=/^0o[0-7]+$/i,v=parseInt,j=(typeof e>"u"?"undefined":d(e))=="object"&&e&&e.Object===Object&&e,_=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,y=j||_||Function("return this")(),w=Object.prototype,x=w.toString,b=Math.max,S=Math.min,T=function(){return y.Date.now()};t.exports=s}).call(r,function(){return this}())},function(t,r){function e(d){var u=void 0,f=void 0;for(u=0;u<d.length;u+=1)if(f=d[u],f.dataset&&f.dataset.aos||f.children&&e(f.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function i(d,u){var f=window.document,p=s(),m=new p(l);c=u,m.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(d){d&&d.forEach(function(u){var f=Array.prototype.slice.call(u.addedNodes),p=Array.prototype.slice.call(u.removedNodes),m=f.concat(p);if(e(m))return c()})}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){};r.default={isSupported:o,ready:i}},function(t,r){function e(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function f(p,m){for(var h=0;h<m.length;h++){var g=m[h];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(p,g.key,g)}}return function(p,m,h){return m&&f(p.prototype,m),h&&f(p,h),p}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function f(){e(this,f)}return o(f,[{key:"phone",value:function(){var p=s();return!(!i.test(p)&&!l.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=s();return!(!c.test(p)&&!d.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();r.default=new u},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(o,i,l){var c=o.node.getAttribute("data-aos-once");i>o.position?o.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,i){var l=window.pageYOffset,c=window.innerHeight;o.forEach(function(d,u){e(d,c+l,i)})};r.default=s},function(t,r,e){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(12),i=s(o),l=function(c,d){return c.forEach(function(u,f){u.node.classList.add("aos-init"),u.position=(0,i.default)(u.node,d.offset)}),c};r.default=l},function(t,r,e){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(13),i=s(o),l=function(c,d){var u=0,f=0,p=window.innerHeight,m={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(f=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(c=document.querySelectorAll(m.anchor)[0]),u=(0,i.default)(c).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=p/2;break;case"bottom-center":u+=p/2+c.offsetHeight;break;case"center-center":u+=p/2+c.offsetHeight/2;break;case"top-top":u+=p;break;case"bottom-top":u+=c.offsetHeight+p;break;case"center-top":u+=c.offsetHeight/2+p}return m.anchorPlacement||m.offset||isNaN(d)||(f=d),u+f};r.default=l},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(s){for(var o=0,i=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),i+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:i,left:o}};r.default=e},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};r.default=e}])})}(Ns)),Ns.exports}var _h=jh();const Zl=Kl(_h),Sh={class:"min-h-20"},Ch={__name:"Typewriter",setup(a){const n=[["Build Stunning Visuals","All With The Classic C++"],["Let's Innovate","With Cpp Playgrounds!"],["Less time","More productivity."],["Work Smart","Not Hard"],["Let's Shine","With Cpp Playgrounds!"]],t=Ha(null),r=Ha(null);let e=0,s;const o=()=>{const[i,l]=n[e];t.value.classList.remove("opacity-100"),r.value.classList.remove("opacity-100"),t.value.classList.add("opacity-0"),r.value.classList.add("opacity-0"),setTimeout(()=>{t.value.textContent=i,r.value.textContent="",t.value.classList.remove("opacity-0"),t.value.classList.add("opacity-100"),setTimeout(()=>{r.value.textContent=l,r.value.classList.remove("opacity-0"),r.value.classList.add("opacity-100")},500)},500),e=(e+1)%n.length,setTimeout(()=>{t.value.classList.remove("opacity-100"),t.value.classList.add("opacity-0"),r.value.classList.remove("opacity-100"),r.value.classList.add("opacity-0")},3e3)};return Es(()=>{o(),s=setInterval(o,4e3)}),Wr(()=>{clearInterval(s)}),(i,l)=>(Fn(),Bn("div",Sh,[Z("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part1",ref:t},null,512),Z("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part2",ref:r},null,512)]))}};var Vs={exports:{}};/*!
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
 */var Th=Vs.exports,ui;function Ph(){return ui||(ui=1,function(a,n){(function(r,e){a.exports=e()})(Th,function(){return function(t){var r={};function e(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(s,o,i){e.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:i})},e.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,o){if(o&1&&(s=e(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var l in s)e.d(i,l,(function(c){return s[c]}).bind(null,l));return i},e.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(o,"a",o),o},e.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},e.p="",e(e.s=20)}([function(t,r){var e={};t.exports=e,function(){e._baseDelta=1e3/60,e._nextId=0,e._seed=0,e._nowStartTime=+new Date,e._warnedOnce={},e._decomp=null,e.extend=function(o,i){var l,c;typeof i=="boolean"?(l=2,c=i):(l=1,c=!0);for(var d=l;d<arguments.length;d++){var u=arguments[d];if(u)for(var f in u)c&&u[f]&&u[f].constructor===Object&&(!o[f]||o[f].constructor===Object)?(o[f]=o[f]||{},e.extend(o[f],c,u[f])):o[f]=u[f]}return o},e.clone=function(o,i){return e.extend({},i,o)},e.keys=function(o){if(Object.keys)return Object.keys(o);var i=[];for(var l in o)i.push(l);return i},e.values=function(o){var i=[];if(Object.keys){for(var l=Object.keys(o),c=0;c<l.length;c++)i.push(o[l[c]]);return i}for(var d in o)i.push(o[d]);return i},e.get=function(o,i,l,c){i=i.split(".").slice(l,c);for(var d=0;d<i.length;d+=1)o=o[i[d]];return o},e.set=function(o,i,l,c,d){var u=i.split(".").slice(c,d);return e.get(o,i,0,-1)[u[u.length-1]]=l,l},e.shuffle=function(o){for(var i=o.length-1;i>0;i--){var l=Math.floor(e.random()*(i+1)),c=o[i];o[i]=o[l],o[l]=c}return o},e.choose=function(o){return o[Math.floor(e.random()*o.length)]},e.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},e.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},e.isFunction=function(o){return typeof o=="function"},e.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},e.isString=function(o){return toString.call(o)==="[object String]"},e.clamp=function(o,i,l){return o<i?i:o>l?l:o},e.sign=function(o){return o<0?-1:1},e.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-e._nowStartTime},e.random=function(o,i){return o=typeof o<"u"?o:0,i=typeof i<"u"?i:1,o+s()*(i-o)};var s=function(){return e._seed=(e._seed*9301+49297)%233280,e._seed/233280};e.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},e.logLevel=1,e.log=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.info=function(){console&&e.logLevel>0&&e.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warn=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");e._warnedOnce[o]||(e.warn(o),e._warnedOnce[o]=!0)},e.deprecated=function(o,i,l){o[i]=e.chain(function(){e.warnOnce("🔅 deprecated 🔅",l)},o[i])},e.nextId=function(){return e._nextId++},e.indexOf=function(o,i){if(o.indexOf)return o.indexOf(i);for(var l=0;l<o.length;l++)if(o[l]===i)return l;return-1},e.map=function(o,i){if(o.map)return o.map(i);for(var l=[],c=0;c<o.length;c+=1)l.push(i(o[c]));return l},e.topologicalSort=function(o){var i=[],l=[],c=[];for(var d in o)!l[d]&&!c[d]&&e._topologicalSort(d,l,c,o,i);return i},e._topologicalSort=function(o,i,l,c,d){var u=c[o]||[];l[o]=!0;for(var f=0;f<u.length;f+=1){var p=u[f];l[p]||i[p]||e._topologicalSort(p,i,l,c,d)}l[o]=!1,i[o]=!0,d.push(o)},e.chain=function(){for(var o=[],i=0;i<arguments.length;i+=1){var l=arguments[i];l._chained?o.push.apply(o,l._chained):o.push(l)}var c=function(){for(var d,u=new Array(arguments.length),f=0,p=arguments.length;f<p;f++)u[f]=arguments[f];for(f=0;f<o.length;f+=1){var m=o[f].apply(d,u);typeof m<"u"&&(d=m)}return d};return c._chained=o,c},e.chainPathBefore=function(o,i,l){return e.set(o,i,e.chain(l,e.get(o,i)))},e.chainPathAfter=function(o,i,l){return e.set(o,i,e.chain(e.get(o,i),l))},e.setDecomp=function(o){e._decomp=o},e.getDecomp=function(){var o=e._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof di<"u"&&(o=di.decomp)}catch{o=null}return o}}()},function(t,r){var e={};t.exports=e,function(){e.create=function(s){var o={min:{x:0,y:0},max:{x:0,y:0}};return s&&e.update(o,s),o},e.update=function(s,o,i){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var l=0;l<o.length;l++){var c=o[l];c.x>s.max.x&&(s.max.x=c.x),c.x<s.min.x&&(s.min.x=c.x),c.y>s.max.y&&(s.max.y=c.y),c.y<s.min.y&&(s.min.y=c.y)}i&&(i.x>0?s.max.x+=i.x:s.min.x+=i.x,i.y>0?s.max.y+=i.y:s.min.y+=i.y)},e.contains=function(s,o){return o.x>=s.min.x&&o.x<=s.max.x&&o.y>=s.min.y&&o.y<=s.max.y},e.overlaps=function(s,o){return s.min.x<=o.max.x&&s.max.x>=o.min.x&&s.max.y>=o.min.y&&s.min.y<=o.max.y},e.translate=function(s,o){s.min.x+=o.x,s.max.x+=o.x,s.min.y+=o.y,s.max.y+=o.y},e.shift=function(s,o){var i=s.max.x-s.min.x,l=s.max.y-s.min.y;s.min.x=o.x,s.max.x=o.x+i,s.min.y=o.y,s.max.y=o.y+l}}()},function(t,r){var e={};t.exports=e,function(){e.create=function(s,o){return{x:s||0,y:o||0}},e.clone=function(s){return{x:s.x,y:s.y}},e.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},e.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},e.rotate=function(s,o,i){var l=Math.cos(o),c=Math.sin(o);i||(i={});var d=s.x*l-s.y*c;return i.y=s.x*c+s.y*l,i.x=d,i},e.rotateAbout=function(s,o,i,l){var c=Math.cos(o),d=Math.sin(o);l||(l={});var u=i.x+((s.x-i.x)*c-(s.y-i.y)*d);return l.y=i.y+((s.x-i.x)*d+(s.y-i.y)*c),l.x=u,l},e.normalise=function(s){var o=e.magnitude(s);return o===0?{x:0,y:0}:{x:s.x/o,y:s.y/o}},e.dot=function(s,o){return s.x*o.x+s.y*o.y},e.cross=function(s,o){return s.x*o.y-s.y*o.x},e.cross3=function(s,o,i){return(o.x-s.x)*(i.y-s.y)-(o.y-s.y)*(i.x-s.x)},e.add=function(s,o,i){return i||(i={}),i.x=s.x+o.x,i.y=s.y+o.y,i},e.sub=function(s,o,i){return i||(i={}),i.x=s.x-o.x,i.y=s.y-o.y,i},e.mult=function(s,o){return{x:s.x*o,y:s.y*o}},e.div=function(s,o){return{x:s.x/o,y:s.y/o}},e.perp=function(s,o){return o=o===!0?-1:1,{x:o*-s.y,y:o*s.x}},e.neg=function(s){return{x:-s.x,y:-s.y}},e.angle=function(s,o){return Math.atan2(o.y-s.y,o.x-s.x)},e._temp=[e.create(),e.create(),e.create(),e.create(),e.create(),e.create()]}()},function(t,r,e){var s={};t.exports=s;var o=e(2),i=e(0);(function(){s.create=function(l,c){for(var d=[],u=0;u<l.length;u++){var f=l[u],p={x:f.x,y:f.y,index:u,body:c,isInternal:!1};d.push(p)}return d},s.fromPath=function(l,c){var d=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,u=[];return l.replace(d,function(f,p,m){u.push({x:parseFloat(p),y:parseFloat(m)})}),s.create(u,c)},s.centre=function(l){for(var c=s.area(l,!0),d={x:0,y:0},u,f,p,m=0;m<l.length;m++)p=(m+1)%l.length,u=o.cross(l[m],l[p]),f=o.mult(o.add(l[m],l[p]),u),d=o.add(d,f);return o.div(d,6*c)},s.mean=function(l){for(var c={x:0,y:0},d=0;d<l.length;d++)c.x+=l[d].x,c.y+=l[d].y;return o.div(c,l.length)},s.area=function(l,c){for(var d=0,u=l.length-1,f=0;f<l.length;f++)d+=(l[u].x-l[f].x)*(l[u].y+l[f].y),u=f;return c?d/2:Math.abs(d)/2},s.inertia=function(l,c){for(var d=0,u=0,f=l,p,m,h=0;h<f.length;h++)m=(h+1)%f.length,p=Math.abs(o.cross(f[m],f[h])),d+=p*(o.dot(f[m],f[m])+o.dot(f[m],f[h])+o.dot(f[h],f[h])),u+=p;return c/6*(d/u)},s.translate=function(l,c,d){d=typeof d<"u"?d:1;var u=l.length,f=c.x*d,p=c.y*d,m;for(m=0;m<u;m++)l[m].x+=f,l[m].y+=p;return l},s.rotate=function(l,c,d){if(c!==0){var u=Math.cos(c),f=Math.sin(c),p=d.x,m=d.y,h=l.length,g,k,v,j;for(j=0;j<h;j++)g=l[j],k=g.x-p,v=g.y-m,g.x=p+(k*u-v*f),g.y=m+(k*f+v*u);return l}},s.contains=function(l,c){for(var d=c.x,u=c.y,f=l.length,p=l[f-1],m,h=0;h<f;h++){if(m=l[h],(d-p.x)*(m.y-p.y)+(u-p.y)*(p.x-m.x)>0)return!1;p=m}return!0},s.scale=function(l,c,d,u){if(c===1&&d===1)return l;u=u||s.centre(l);for(var f,p,m=0;m<l.length;m++)f=l[m],p=o.sub(f,u),l[m].x=u.x+p.x*c,l[m].y=u.y+p.y*d;return l},s.chamfer=function(l,c,d,u,f){typeof c=="number"?c=[c]:c=c||[8],d=typeof d<"u"?d:-1,u=u||2,f=f||14;for(var p=[],m=0;m<l.length;m++){var h=l[m-1>=0?m-1:l.length-1],g=l[m],k=l[(m+1)%l.length],v=c[m<c.length?m:c.length-1];if(v===0){p.push(g);continue}var j=o.normalise({x:g.y-h.y,y:h.x-g.x}),_=o.normalise({x:k.y-g.y,y:g.x-k.x}),y=Math.sqrt(2*Math.pow(v,2)),w=o.mult(i.clone(j),v),x=o.normalise(o.mult(o.add(j,_),.5)),b=o.sub(g,o.mult(x,y)),S=d;d===-1&&(S=Math.pow(v,.32)*1.75),S=i.clamp(S,u,f),S%2===1&&(S+=1);for(var T=Math.acos(o.dot(j,_)),P=T/S,C=0;C<S;C++)p.push(o.add(o.rotate(w,P*C),b))}return p},s.clockwiseSort=function(l){var c=s.mean(l);return l.sort(function(d,u){return o.angle(c,d)-o.angle(c,u)}),l},s.isConvex=function(l){var c=0,d=l.length,u,f,p,m;if(d<3)return null;for(u=0;u<d;u++)if(f=(u+1)%d,p=(u+2)%d,m=(l[f].x-l[u].x)*(l[p].y-l[f].y),m-=(l[f].y-l[u].y)*(l[p].x-l[f].x),m<0?c|=1:m>0&&(c|=2),c===3)return!1;return c!==0?!0:null},s.hull=function(l){var c=[],d=[],u,f;for(l=l.slice(0),l.sort(function(p,m){var h=p.x-m.x;return h!==0?h:p.y-m.y}),f=0;f<l.length;f+=1){for(u=l[f];d.length>=2&&o.cross3(d[d.length-2],d[d.length-1],u)<=0;)d.pop();d.push(u)}for(f=l.length-1;f>=0;f-=1){for(u=l[f];c.length>=2&&o.cross3(c[c.length-2],c[c.length-1],u)<=0;)c.pop();c.push(u)}return c.pop(),d.pop(),c.concat(d)}})()},function(t,r,e){var s={};t.exports=s;var o=e(3),i=e(2),l=e(7),c=e(0),d=e(1),u=e(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(p){var m={id:c.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},h=c.extend(m,p);return f(h,p),h},s.nextGroup=function(p){return p?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var f=function(p,m){m=m||{},s.set(p,{bounds:p.bounds||d.create(p.vertices),positionPrev:p.positionPrev||i.clone(p.position),anglePrev:p.anglePrev||p.angle,vertices:p.vertices,parts:p.parts||[p],isStatic:p.isStatic,isSleeping:p.isSleeping,parent:p.parent||p}),o.rotate(p.vertices,p.angle,p.position),u.rotate(p.axes,p.angle),d.update(p.bounds,p.vertices,p.velocity),s.set(p,{axes:m.axes||p.axes,area:m.area||p.area,mass:m.mass||p.mass,inertia:m.inertia||p.inertia});var h=p.isStatic?"#14151f":c.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),g=p.isStatic?"#555":"#ccc",k=p.isStatic&&p.render.fillStyle===null?1:0;p.render.fillStyle=p.render.fillStyle||h,p.render.strokeStyle=p.render.strokeStyle||g,p.render.lineWidth=p.render.lineWidth||k,p.render.sprite.xOffset+=-(p.bounds.min.x-p.position.x)/(p.bounds.max.x-p.bounds.min.x),p.render.sprite.yOffset+=-(p.bounds.min.y-p.position.y)/(p.bounds.max.y-p.bounds.min.y)};s.set=function(p,m,h){var g;typeof m=="string"&&(g=m,m={},m[g]=h);for(g in m)if(Object.prototype.hasOwnProperty.call(m,g))switch(h=m[g],g){case"isStatic":s.setStatic(p,h);break;case"isSleeping":l.set(p,h);break;case"mass":s.setMass(p,h);break;case"density":s.setDensity(p,h);break;case"inertia":s.setInertia(p,h);break;case"vertices":s.setVertices(p,h);break;case"position":s.setPosition(p,h);break;case"angle":s.setAngle(p,h);break;case"velocity":s.setVelocity(p,h);break;case"angularVelocity":s.setAngularVelocity(p,h);break;case"speed":s.setSpeed(p,h);break;case"angularSpeed":s.setAngularSpeed(p,h);break;case"parts":s.setParts(p,h);break;case"centre":s.setCentre(p,h);break;default:p[g]=h}},s.setStatic=function(p,m){for(var h=0;h<p.parts.length;h++){var g=p.parts[h];m?(g.isStatic||(g._original={restitution:g.restitution,friction:g.friction,mass:g.mass,inertia:g.inertia,density:g.density,inverseMass:g.inverseMass,inverseInertia:g.inverseInertia}),g.restitution=0,g.friction=1,g.mass=g.inertia=g.density=1/0,g.inverseMass=g.inverseInertia=0,g.positionPrev.x=g.position.x,g.positionPrev.y=g.position.y,g.anglePrev=g.angle,g.angularVelocity=0,g.speed=0,g.angularSpeed=0,g.motion=0):g._original&&(g.restitution=g._original.restitution,g.friction=g._original.friction,g.mass=g._original.mass,g.inertia=g._original.inertia,g.density=g._original.density,g.inverseMass=g._original.inverseMass,g.inverseInertia=g._original.inverseInertia,g._original=null),g.isStatic=m}},s.setMass=function(p,m){var h=p.inertia/(p.mass/6);p.inertia=h*(m/6),p.inverseInertia=1/p.inertia,p.mass=m,p.inverseMass=1/p.mass,p.density=p.mass/p.area},s.setDensity=function(p,m){s.setMass(p,m*p.area),p.density=m},s.setInertia=function(p,m){p.inertia=m,p.inverseInertia=1/p.inertia},s.setVertices=function(p,m){m[0].body===p?p.vertices=m:p.vertices=o.create(m,p),p.axes=u.fromVertices(p.vertices),p.area=o.area(p.vertices),s.setMass(p,p.density*p.area);var h=o.centre(p.vertices);o.translate(p.vertices,h,-1),s.setInertia(p,s._inertiaScale*o.inertia(p.vertices,p.mass)),o.translate(p.vertices,p.position),d.update(p.bounds,p.vertices,p.velocity)},s.setParts=function(p,m,h){var g;for(m=m.slice(0),p.parts.length=0,p.parts.push(p),p.parent=p,g=0;g<m.length;g++){var k=m[g];k!==p&&(k.parent=p,p.parts.push(k))}if(p.parts.length!==1){if(h=typeof h<"u"?h:!0,h){var v=[];for(g=0;g<m.length;g++)v=v.concat(m[g].vertices);o.clockwiseSort(v);var j=o.hull(v),_=o.centre(j);s.setVertices(p,j),o.translate(p.vertices,_)}var y=s._totalProperties(p);p.area=y.area,p.parent=p,p.position.x=y.centre.x,p.position.y=y.centre.y,p.positionPrev.x=y.centre.x,p.positionPrev.y=y.centre.y,s.setMass(p,y.mass),s.setInertia(p,y.inertia),s.setPosition(p,y.centre)}},s.setCentre=function(p,m,h){h?(p.positionPrev.x+=m.x,p.positionPrev.y+=m.y,p.position.x+=m.x,p.position.y+=m.y):(p.positionPrev.x=m.x-(p.position.x-p.positionPrev.x),p.positionPrev.y=m.y-(p.position.y-p.positionPrev.y),p.position.x=m.x,p.position.y=m.y)},s.setPosition=function(p,m,h){var g=i.sub(m,p.position);h?(p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.velocity.x=g.x,p.velocity.y=g.y,p.speed=i.magnitude(g)):(p.positionPrev.x+=g.x,p.positionPrev.y+=g.y);for(var k=0;k<p.parts.length;k++){var v=p.parts[k];v.position.x+=g.x,v.position.y+=g.y,o.translate(v.vertices,g),d.update(v.bounds,v.vertices,p.velocity)}},s.setAngle=function(p,m,h){var g=m-p.angle;h?(p.anglePrev=p.angle,p.angularVelocity=g,p.angularSpeed=Math.abs(g)):p.anglePrev+=g;for(var k=0;k<p.parts.length;k++){var v=p.parts[k];v.angle+=g,o.rotate(v.vertices,g,p.position),u.rotate(v.axes,g),d.update(v.bounds,v.vertices,p.velocity),k>0&&i.rotateAbout(v.position,g,p.position,v.position)}},s.setVelocity=function(p,m){var h=p.deltaTime/s._baseDelta;p.positionPrev.x=p.position.x-m.x*h,p.positionPrev.y=p.position.y-m.y*h,p.velocity.x=(p.position.x-p.positionPrev.x)/h,p.velocity.y=(p.position.y-p.positionPrev.y)/h,p.speed=i.magnitude(p.velocity)},s.getVelocity=function(p){var m=s._baseDelta/p.deltaTime;return{x:(p.position.x-p.positionPrev.x)*m,y:(p.position.y-p.positionPrev.y)*m}},s.getSpeed=function(p){return i.magnitude(s.getVelocity(p))},s.setSpeed=function(p,m){s.setVelocity(p,i.mult(i.normalise(s.getVelocity(p)),m))},s.setAngularVelocity=function(p,m){var h=p.deltaTime/s._baseDelta;p.anglePrev=p.angle-m*h,p.angularVelocity=(p.angle-p.anglePrev)/h,p.angularSpeed=Math.abs(p.angularVelocity)},s.getAngularVelocity=function(p){return(p.angle-p.anglePrev)*s._baseDelta/p.deltaTime},s.getAngularSpeed=function(p){return Math.abs(s.getAngularVelocity(p))},s.setAngularSpeed=function(p,m){s.setAngularVelocity(p,c.sign(s.getAngularVelocity(p))*m)},s.translate=function(p,m,h){s.setPosition(p,i.add(p.position,m),h)},s.rotate=function(p,m,h,g){if(!h)s.setAngle(p,p.angle+m,g);else{var k=Math.cos(m),v=Math.sin(m),j=p.position.x-h.x,_=p.position.y-h.y;s.setPosition(p,{x:h.x+(j*k-_*v),y:h.y+(j*v+_*k)},g),s.setAngle(p,p.angle+m,g)}},s.scale=function(p,m,h,g){var k=0,v=0;g=g||p.position;for(var j=0;j<p.parts.length;j++){var _=p.parts[j];o.scale(_.vertices,m,h,g),_.axes=u.fromVertices(_.vertices),_.area=o.area(_.vertices),s.setMass(_,p.density*_.area),o.translate(_.vertices,{x:-_.position.x,y:-_.position.y}),s.setInertia(_,s._inertiaScale*o.inertia(_.vertices,_.mass)),o.translate(_.vertices,{x:_.position.x,y:_.position.y}),j>0&&(k+=_.area,v+=_.inertia),_.position.x=g.x+(_.position.x-g.x)*m,_.position.y=g.y+(_.position.y-g.y)*h,d.update(_.bounds,_.vertices,p.velocity)}p.parts.length>1&&(p.area=k,p.isStatic||(s.setMass(p,p.density*k),s.setInertia(p,v))),p.circleRadius&&(m===h?p.circleRadius*=m:p.circleRadius=null)},s.update=function(p,m){m=(typeof m<"u"?m:1e3/60)*p.timeScale;var h=m*m,g=s._timeCorrection?m/(p.deltaTime||m):1,k=1-p.frictionAir*(m/c._baseDelta),v=(p.position.x-p.positionPrev.x)*g,j=(p.position.y-p.positionPrev.y)*g;p.velocity.x=v*k+p.force.x/p.mass*h,p.velocity.y=j*k+p.force.y/p.mass*h,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.position.x+=p.velocity.x,p.position.y+=p.velocity.y,p.deltaTime=m,p.angularVelocity=(p.angle-p.anglePrev)*k*g+p.torque/p.inertia*h,p.anglePrev=p.angle,p.angle+=p.angularVelocity;for(var _=0;_<p.parts.length;_++){var y=p.parts[_];o.translate(y.vertices,p.velocity),_>0&&(y.position.x+=p.velocity.x,y.position.y+=p.velocity.y),p.angularVelocity!==0&&(o.rotate(y.vertices,p.angularVelocity,p.position),u.rotate(y.axes,p.angularVelocity),_>0&&i.rotateAbout(y.position,p.angularVelocity,p.position,y.position)),d.update(y.bounds,y.vertices,p.velocity)}},s.updateVelocities=function(p){var m=s._baseDelta/p.deltaTime,h=p.velocity;h.x=(p.position.x-p.positionPrev.x)*m,h.y=(p.position.y-p.positionPrev.y)*m,p.speed=Math.sqrt(h.x*h.x+h.y*h.y),p.angularVelocity=(p.angle-p.anglePrev)*m,p.angularSpeed=Math.abs(p.angularVelocity)},s.applyForce=function(p,m,h){var g={x:m.x-p.position.x,y:m.y-p.position.y};p.force.x+=h.x,p.force.y+=h.y,p.torque+=g.x*h.y-g.y*h.x},s._totalProperties=function(p){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},h=p.parts.length===1?0:1;h<p.parts.length;h++){var g=p.parts[h],k=g.mass!==1/0?g.mass:1;m.mass+=k,m.area+=g.area,m.inertia+=g.inertia,m.centre=i.add(m.centre,i.mult(g.position,k))}return m.centre=i.div(m.centre,m.mass),m}})()},function(t,r,e){var s={};t.exports=s;var o=e(0);(function(){s.on=function(i,l,c){for(var d=l.split(" "),u,f=0;f<d.length;f++)u=d[f],i.events=i.events||{},i.events[u]=i.events[u]||[],i.events[u].push(c);return c},s.off=function(i,l,c){if(!l){i.events={};return}typeof l=="function"&&(c=l,l=o.keys(i.events).join(" "));for(var d=l.split(" "),u=0;u<d.length;u++){var f=i.events[d[u]],p=[];if(c&&f)for(var m=0;m<f.length;m++)f[m]!==c&&p.push(f[m]);i.events[d[u]]=p}},s.trigger=function(i,l,c){var d,u,f,p,m=i.events;if(m&&o.keys(m).length>0){c||(c={}),d=l.split(" ");for(var h=0;h<d.length;h++)if(u=d[h],f=m[u],f){p=o.clone(c,!1),p.name=u,p.source=i;for(var g=0;g<f.length;g++)f[g].apply(i,[p])}}}})()},function(t,r,e){var s={};t.exports=s;var o=e(5),i=e(0),l=e(1),c=e(4);(function(){s.create=function(d){return i.extend({id:i.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},d)},s.setModified=function(d,u,f,p){if(d.isModified=u,u&&d.cache&&(d.cache.allBodies=null,d.cache.allConstraints=null,d.cache.allComposites=null),f&&d.parent&&s.setModified(d.parent,u,f,p),p)for(var m=0;m<d.composites.length;m++){var h=d.composites[m];s.setModified(h,u,f,p)}},s.add=function(d,u){var f=[].concat(u);o.trigger(d,"beforeAdd",{object:u});for(var p=0;p<f.length;p++){var m=f[p];switch(m.type){case"body":if(m.parent!==m){i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(d,m);break;case"constraint":s.addConstraint(d,m);break;case"composite":s.addComposite(d,m);break;case"mouseConstraint":s.addConstraint(d,m.constraint);break}}return o.trigger(d,"afterAdd",{object:u}),d},s.remove=function(d,u,f){var p=[].concat(u);o.trigger(d,"beforeRemove",{object:u});for(var m=0;m<p.length;m++){var h=p[m];switch(h.type){case"body":s.removeBody(d,h,f);break;case"constraint":s.removeConstraint(d,h,f);break;case"composite":s.removeComposite(d,h,f);break;case"mouseConstraint":s.removeConstraint(d,h.constraint);break}}return o.trigger(d,"afterRemove",{object:u}),d},s.addComposite=function(d,u){return d.composites.push(u),u.parent=d,s.setModified(d,!0,!0,!1),d},s.removeComposite=function(d,u,f){var p=i.indexOf(d.composites,u);if(p!==-1){var m=s.allBodies(u);s.removeCompositeAt(d,p);for(var h=0;h<m.length;h++)m[h].sleepCounter=0}if(f)for(var h=0;h<d.composites.length;h++)s.removeComposite(d.composites[h],u,!0);return d},s.removeCompositeAt=function(d,u){return d.composites.splice(u,1),s.setModified(d,!0,!0,!1),d},s.addBody=function(d,u){return d.bodies.push(u),s.setModified(d,!0,!0,!1),d},s.removeBody=function(d,u,f){var p=i.indexOf(d.bodies,u);if(p!==-1&&(s.removeBodyAt(d,p),u.sleepCounter=0),f)for(var m=0;m<d.composites.length;m++)s.removeBody(d.composites[m],u,!0);return d},s.removeBodyAt=function(d,u){return d.bodies.splice(u,1),s.setModified(d,!0,!0,!1),d},s.addConstraint=function(d,u){return d.constraints.push(u),s.setModified(d,!0,!0,!1),d},s.removeConstraint=function(d,u,f){var p=i.indexOf(d.constraints,u);if(p!==-1&&s.removeConstraintAt(d,p),f)for(var m=0;m<d.composites.length;m++)s.removeConstraint(d.composites[m],u,!0);return d},s.removeConstraintAt=function(d,u){return d.constraints.splice(u,1),s.setModified(d,!0,!0,!1),d},s.clear=function(d,u,f){if(f)for(var p=0;p<d.composites.length;p++)s.clear(d.composites[p],u,!0);return u?d.bodies=d.bodies.filter(function(m){return m.isStatic}):d.bodies.length=0,d.constraints.length=0,d.composites.length=0,s.setModified(d,!0,!0,!1),d},s.allBodies=function(d){if(d.cache&&d.cache.allBodies)return d.cache.allBodies;for(var u=[].concat(d.bodies),f=0;f<d.composites.length;f++)u=u.concat(s.allBodies(d.composites[f]));return d.cache&&(d.cache.allBodies=u),u},s.allConstraints=function(d){if(d.cache&&d.cache.allConstraints)return d.cache.allConstraints;for(var u=[].concat(d.constraints),f=0;f<d.composites.length;f++)u=u.concat(s.allConstraints(d.composites[f]));return d.cache&&(d.cache.allConstraints=u),u},s.allComposites=function(d){if(d.cache&&d.cache.allComposites)return d.cache.allComposites;for(var u=[].concat(d.composites),f=0;f<d.composites.length;f++)u=u.concat(s.allComposites(d.composites[f]));return d.cache&&(d.cache.allComposites=u),u},s.get=function(d,u,f){var p,m;switch(f){case"body":p=s.allBodies(d);break;case"constraint":p=s.allConstraints(d);break;case"composite":p=s.allComposites(d).concat(d);break}return p?(m=p.filter(function(h){return h.id.toString()===u.toString()}),m.length===0?null:m[0]):null},s.move=function(d,u,f){return s.remove(d,u),s.add(f,u),d},s.rebase=function(d){for(var u=s.allBodies(d).concat(s.allConstraints(d)).concat(s.allComposites(d)),f=0;f<u.length;f++)u[f].id=i.nextId();return d},s.translate=function(d,u,f){for(var p=f?s.allBodies(d):d.bodies,m=0;m<p.length;m++)c.translate(p[m],u);return d},s.rotate=function(d,u,f,p){for(var m=Math.cos(u),h=Math.sin(u),g=p?s.allBodies(d):d.bodies,k=0;k<g.length;k++){var v=g[k],j=v.position.x-f.x,_=v.position.y-f.y;c.setPosition(v,{x:f.x+(j*m-_*h),y:f.y+(j*h+_*m)}),c.rotate(v,u)}return d},s.scale=function(d,u,f,p,m){for(var h=m?s.allBodies(d):d.bodies,g=0;g<h.length;g++){var k=h[g],v=k.position.x-p.x,j=k.position.y-p.y;c.setPosition(k,{x:p.x+v*u,y:p.y+j*f}),c.scale(k,u,f)}return d},s.bounds=function(d){for(var u=s.allBodies(d),f=[],p=0;p<u.length;p+=1){var m=u[p];f.push(m.bounds.min,m.bounds.max)}return l.create(f)}})()},function(t,r,e){var s={};t.exports=s;var o=e(4),i=e(5),l=e(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(c,d){for(var u=d/l._baseDelta,f=s._motionSleepThreshold,p=0;p<c.length;p++){var m=c[p],h=o.getSpeed(m),g=o.getAngularSpeed(m),k=h*h+g*g;if(m.force.x!==0||m.force.y!==0){s.set(m,!1);continue}var v=Math.min(m.motion,k),j=Math.max(m.motion,k);m.motion=s._minBias*v+(1-s._minBias)*j,m.sleepThreshold>0&&m.motion<f?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/u&&s.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},s.afterCollisions=function(c){for(var d=s._motionSleepThreshold,u=0;u<c.length;u++){var f=c[u];if(f.isActive){var p=f.collision,m=p.bodyA.parent,h=p.bodyB.parent;if(!(m.isSleeping&&h.isSleeping||m.isStatic||h.isStatic)&&(m.isSleeping||h.isSleeping)){var g=m.isSleeping&&!m.isStatic?m:h,k=g===m?h:m;!g.isStatic&&k.motion>d&&s.set(g,!1)}}}},s.set=function(c,d){var u=c.isSleeping;d?(c.isSleeping=!0,c.sleepCounter=c.sleepThreshold,c.positionImpulse.x=0,c.positionImpulse.y=0,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.anglePrev=c.angle,c.speed=0,c.angularSpeed=0,c.motion=0,u||i.trigger(c,"sleepStart")):(c.isSleeping=!1,c.sleepCounter=0,u&&i.trigger(c,"sleepEnd"))}})()},function(t,r,e){var s={};t.exports=s;var o=e(3),i=e(9);(function(){var l=[],c={overlap:0,axis:null},d={overlap:0,axis:null};s.create=function(u,f){return{pair:null,collided:!1,bodyA:u,bodyB:f,parentA:u.parent,parentB:f.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(u,f,p){if(s._overlapAxes(c,u.vertices,f.vertices,u.axes),c.overlap<=0||(s._overlapAxes(d,f.vertices,u.vertices,f.axes),d.overlap<=0))return null;var m=p&&p.table[i.id(u,f)],h;m?h=m.collision:(h=s.create(u,f),h.collided=!0,h.bodyA=u.id<f.id?u:f,h.bodyB=u.id<f.id?f:u,h.parentA=h.bodyA.parent,h.parentB=h.bodyB.parent),u=h.bodyA,f=h.bodyB;var g;c.overlap<d.overlap?g=c:g=d;var k=h.normal,v=h.tangent,j=h.penetration,_=h.supports,y=g.overlap,w=g.axis,x=w.x,b=w.y,S=f.position.x-u.position.x,T=f.position.y-u.position.y;x*S+b*T>=0&&(x=-x,b=-b),k.x=x,k.y=b,v.x=-b,v.y=x,j.x=x*y,j.y=b*y,h.depth=y;var P=s._findSupports(u,f,k,1),C=0;if(o.contains(u.vertices,P[0])&&(_[C++]=P[0]),o.contains(u.vertices,P[1])&&(_[C++]=P[1]),C<2){var E=s._findSupports(f,u,k,-1);o.contains(f.vertices,E[0])&&(_[C++]=E[0]),C<2&&o.contains(f.vertices,E[1])&&(_[C++]=E[1])}return C===0&&(_[C++]=P[0]),h.supportCount=C,h},s._overlapAxes=function(u,f,p,m){var h=f.length,g=p.length,k=f[0].x,v=f[0].y,j=p[0].x,_=p[0].y,y=m.length,w=Number.MAX_VALUE,x=0,b,S,T,P,C,E;for(C=0;C<y;C++){var I=m[C],O=I.x,U=I.y,D=k*O+v*U,N=j*O+_*U,nn=D,on=N;for(E=1;E<h;E+=1)P=f[E].x*O+f[E].y*U,P>nn?nn=P:P<D&&(D=P);for(E=1;E<g;E+=1)P=p[E].x*O+p[E].y*U,P>on?on=P:P<N&&(N=P);if(S=nn-N,T=on-D,b=S<T?S:T,b<w&&(w=b,x=C,b<=0))break}u.axis=m[x],u.overlap=w},s._findSupports=function(u,f,p,m){var h=f.vertices,g=h.length,k=u.position.x,v=u.position.y,j=p.x*m,_=p.y*m,y=h[0],w=y,x=j*(k-w.x)+_*(v-w.y),b,S,T;for(T=1;T<g;T+=1)w=h[T],S=j*(k-w.x)+_*(v-w.y),S<x&&(x=S,y=w);return b=h[(g+y.index-1)%g],x=j*(k-b.x)+_*(v-b.y),w=h[(y.index+1)%g],j*(k-w.x)+_*(v-w.y)<x?(l[0]=y,l[1]=w,l):(l[0]=y,l[1]=b,l)}})()},function(t,r,e){var s={};t.exports=s;var o=e(16);(function(){s.create=function(i,l){var c=i.bodyA,d=i.bodyB,u={id:s.id(c,d),bodyA:c,bodyB:d,collision:i,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:c.isSensor||d.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(u,i,l),u},s.update=function(i,l,c){var d=l.supports,u=l.supportCount,f=i.contacts,p=l.parentA,m=l.parentB;i.isActive=!0,i.timeUpdated=c,i.collision=l,i.separation=l.depth,i.inverseMass=p.inverseMass+m.inverseMass,i.friction=p.friction<m.friction?p.friction:m.friction,i.frictionStatic=p.frictionStatic>m.frictionStatic?p.frictionStatic:m.frictionStatic,i.restitution=p.restitution>m.restitution?p.restitution:m.restitution,i.slop=p.slop>m.slop?p.slop:m.slop,i.contactCount=u,l.pair=i;var h=d[0],g=f[0],k=d[1],v=f[1];(v.vertex===h||g.vertex===k)&&(f[1]=g,f[0]=g=v,v=f[1]),g.vertex=h,v.vertex=k},s.setActive=function(i,l,c){l?(i.isActive=!0,i.timeUpdated=c):(i.isActive=!1,i.contactCount=0)},s.id=function(i,l){return i.id<l.id?i.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+i.id.toString(36)}})()},function(t,r,e){var s={};t.exports=s;var o=e(3),i=e(2),l=e(7),c=e(1),d=e(11),u=e(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(f){var p=f;p.bodyA&&!p.pointA&&(p.pointA={x:0,y:0}),p.bodyB&&!p.pointB&&(p.pointB={x:0,y:0});var m=p.bodyA?i.add(p.bodyA.position,p.pointA):p.pointA,h=p.bodyB?i.add(p.bodyB.position,p.pointB):p.pointB,g=i.magnitude(i.sub(m,h));p.length=typeof p.length<"u"?p.length:g,p.id=p.id||u.nextId(),p.label=p.label||"Constraint",p.type="constraint",p.stiffness=p.stiffness||(p.length>0?1:.7),p.damping=p.damping||0,p.angularStiffness=p.angularStiffness||0,p.angleA=p.bodyA?p.bodyA.angle:p.angleA,p.angleB=p.bodyB?p.bodyB.angle:p.angleB,p.plugin={};var k={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return p.length===0&&p.stiffness>.1?(k.type="pin",k.anchors=!1):p.stiffness<.9&&(k.type="spring"),p.render=u.extend(k,p.render),p},s.preSolveAll=function(f){for(var p=0;p<f.length;p+=1){var m=f[p],h=m.constraintImpulse;m.isStatic||h.x===0&&h.y===0&&h.angle===0||(m.position.x+=h.x,m.position.y+=h.y,m.angle+=h.angle)}},s.solveAll=function(f,p){for(var m=u.clamp(p/u._baseDelta,0,1),h=0;h<f.length;h+=1){var g=f[h],k=!g.bodyA||g.bodyA&&g.bodyA.isStatic,v=!g.bodyB||g.bodyB&&g.bodyB.isStatic;(k||v)&&s.solve(f[h],m)}for(h=0;h<f.length;h+=1)g=f[h],k=!g.bodyA||g.bodyA&&g.bodyA.isStatic,v=!g.bodyB||g.bodyB&&g.bodyB.isStatic,!k&&!v&&s.solve(f[h],m)},s.solve=function(f,p){var m=f.bodyA,h=f.bodyB,g=f.pointA,k=f.pointB;if(!(!m&&!h)){m&&!m.isStatic&&(i.rotate(g,m.angle-f.angleA,g),f.angleA=m.angle),h&&!h.isStatic&&(i.rotate(k,h.angle-f.angleB,k),f.angleB=h.angle);var v=g,j=k;if(m&&(v=i.add(m.position,g)),h&&(j=i.add(h.position,k)),!(!v||!j)){var _=i.sub(v,j),y=i.magnitude(_);y<s._minLength&&(y=s._minLength);var w=(y-f.length)/y,x=f.stiffness>=1||f.length===0,b=x?f.stiffness*p:f.stiffness*p*p,S=f.damping*p,T=i.mult(_,w*b),P=(m?m.inverseMass:0)+(h?h.inverseMass:0),C=(m?m.inverseInertia:0)+(h?h.inverseInertia:0),E=P+C,I,O,U,D,N;if(S>0){var nn=i.create();U=i.div(_,y),N=i.sub(h&&i.sub(h.position,h.positionPrev)||nn,m&&i.sub(m.position,m.positionPrev)||nn),D=i.dot(U,N)}m&&!m.isStatic&&(O=m.inverseMass/P,m.constraintImpulse.x-=T.x*O,m.constraintImpulse.y-=T.y*O,m.position.x-=T.x*O,m.position.y-=T.y*O,S>0&&(m.positionPrev.x-=S*U.x*D*O,m.positionPrev.y-=S*U.y*D*O),I=i.cross(g,T)/E*s._torqueDampen*m.inverseInertia*(1-f.angularStiffness),m.constraintImpulse.angle-=I,m.angle-=I),h&&!h.isStatic&&(O=h.inverseMass/P,h.constraintImpulse.x+=T.x*O,h.constraintImpulse.y+=T.y*O,h.position.x+=T.x*O,h.position.y+=T.y*O,S>0&&(h.positionPrev.x+=S*U.x*D*O,h.positionPrev.y+=S*U.y*D*O),I=i.cross(k,T)/E*s._torqueDampen*h.inverseInertia*(1-f.angularStiffness),h.constraintImpulse.angle+=I,h.angle+=I)}}},s.postSolveAll=function(f){for(var p=0;p<f.length;p++){var m=f[p],h=m.constraintImpulse;if(!(m.isStatic||h.x===0&&h.y===0&&h.angle===0)){l.set(m,!1);for(var g=0;g<m.parts.length;g++){var k=m.parts[g];o.translate(k.vertices,h),g>0&&(k.position.x+=h.x,k.position.y+=h.y),h.angle!==0&&(o.rotate(k.vertices,h.angle,m.position),d.rotate(k.axes,h.angle),g>0&&i.rotateAbout(k.position,h.angle,m.position,k.position)),c.update(k.bounds,k.vertices,m.velocity)}h.angle*=s._warming,h.x*=s._warming,h.y*=s._warming}}},s.pointAWorld=function(f){return{x:(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),y:(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0)}},s.pointBWorld=function(f){return{x:(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),y:(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0)}},s.currentLength=function(f){var p=(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),m=(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0),h=(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),g=(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0),k=p-h,v=m-g;return Math.sqrt(k*k+v*v)}})()},function(t,r,e){var s={};t.exports=s;var o=e(2),i=e(0);(function(){s.fromVertices=function(l){for(var c={},d=0;d<l.length;d++){var u=(d+1)%l.length,f=o.normalise({x:l[u].y-l[d].y,y:l[d].x-l[u].x}),p=f.y===0?1/0:f.x/f.y;p=p.toFixed(3).toString(),c[p]=f}return i.values(c)},s.rotate=function(l,c){if(c!==0)for(var d=Math.cos(c),u=Math.sin(c),f=0;f<l.length;f++){var p=l[f],m;m=p.x*d-p.y*u,p.y=p.x*u+p.y*d,p.x=m}}})()},function(t,r,e){var s={};t.exports=s;var o=e(3),i=e(0),l=e(4),c=e(1),d=e(2);(function(){s.rectangle=function(u,f,p,m,h){h=h||{};var g={label:"Rectangle Body",position:{x:u,y:f},vertices:o.fromPath("L 0 0 L "+p+" 0 L "+p+" "+m+" L 0 "+m)};if(h.chamfer){var k=h.chamfer;g.vertices=o.chamfer(g.vertices,k.radius,k.quality,k.qualityMin,k.qualityMax),delete h.chamfer}return l.create(i.extend({},g,h))},s.trapezoid=function(u,f,p,m,h,g){g=g||{},h>=1&&i.warn("Bodies.trapezoid: slope parameter must be < 1."),h*=.5;var k=(1-h*2)*p,v=p*h,j=v+k,_=j+v,y;h<.5?y="L 0 0 L "+v+" "+-m+" L "+j+" "+-m+" L "+_+" 0":y="L 0 0 L "+j+" "+-m+" L "+_+" 0";var w={label:"Trapezoid Body",position:{x:u,y:f},vertices:o.fromPath(y)};if(g.chamfer){var x=g.chamfer;w.vertices=o.chamfer(w.vertices,x.radius,x.quality,x.qualityMin,x.qualityMax),delete g.chamfer}return l.create(i.extend({},w,g))},s.circle=function(u,f,p,m,h){m=m||{};var g={label:"Circle Body",circleRadius:p};h=h||25;var k=Math.ceil(Math.max(10,Math.min(h,p)));return k%2===1&&(k+=1),s.polygon(u,f,k,p,i.extend({},g,m))},s.polygon=function(u,f,p,m,h){if(h=h||{},p<3)return s.circle(u,f,m,h);for(var g=2*Math.PI/p,k="",v=g*.5,j=0;j<p;j+=1){var _=v+j*g,y=Math.cos(_)*m,w=Math.sin(_)*m;k+="L "+y.toFixed(3)+" "+w.toFixed(3)+" "}var x={label:"Polygon Body",position:{x:u,y:f},vertices:o.fromPath(k)};if(h.chamfer){var b=h.chamfer;x.vertices=o.chamfer(x.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete h.chamfer}return l.create(i.extend({},x,h))},s.fromVertices=function(u,f,p,m,h,g,k,v){var j=i.getDecomp(),_,y,w,x,b,S,T,P,C,E,I;for(_=!!(j&&j.quickDecomp),m=m||{},w=[],h=typeof h<"u"?h:!1,g=typeof g<"u"?g:.01,k=typeof k<"u"?k:10,v=typeof v<"u"?v:.01,i.isArray(p[0])||(p=[p]),E=0;E<p.length;E+=1)if(S=p[E],x=o.isConvex(S),b=!x,b&&!_&&i.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),x||!_)x?S=o.clockwiseSort(S):S=o.hull(S),w.push({position:{x:u,y:f},vertices:S});else{var O=S.map(function(Q){return[Q.x,Q.y]});j.makeCCW(O),g!==!1&&j.removeCollinearPoints(O,g),v!==!1&&j.removeDuplicatePoints&&j.removeDuplicatePoints(O,v);var U=j.quickDecomp(O);for(T=0;T<U.length;T++){var D=U[T],N=D.map(function(Q){return{x:Q[0],y:Q[1]}});k>0&&o.area(N)<k||w.push({position:o.centre(N),vertices:N})}}for(T=0;T<w.length;T++)w[T]=l.create(i.extend(w[T],m));if(h){var nn=5;for(T=0;T<w.length;T++){var on=w[T];for(P=T+1;P<w.length;P++){var pn=w[P];if(c.overlaps(on.bounds,pn.bounds)){var sn=on.vertices,cn=pn.vertices;for(C=0;C<on.vertices.length;C++)for(I=0;I<pn.vertices.length;I++){var dn=d.magnitudeSquared(d.sub(sn[(C+1)%sn.length],cn[I])),un=d.magnitudeSquared(d.sub(sn[C],cn[(I+1)%cn.length]));dn<nn&&un<nn&&(sn[C].isInternal=!0,cn[I].isInternal=!0)}}}}}return w.length>1?(y=l.create(i.extend({parts:w.slice(0)},m)),l.setPosition(y,{x:u,y:f}),y):w[0]}})()},function(t,r,e){var s={};t.exports=s;var o=e(0),i=e(8);(function(){s.create=function(l){var c={bodies:[],collisions:[],pairs:null};return o.extend(c,l)},s.setBodies=function(l,c){l.bodies=c.slice(0)},s.clear=function(l){l.bodies=[],l.collisions=[]},s.collisions=function(l){var c=l.pairs,d=l.bodies,u=d.length,f=s.canCollide,p=i.collides,m=l.collisions,h=0,g,k;for(d.sort(s._compareBoundsX),g=0;g<u;g++){var v=d[g],j=v.bounds,_=v.bounds.max.x,y=v.bounds.max.y,w=v.bounds.min.y,x=v.isStatic||v.isSleeping,b=v.parts.length,S=b===1;for(k=g+1;k<u;k++){var T=d[k],P=T.bounds;if(P.min.x>_)break;if(!(y<P.min.y||w>P.max.y)&&!(x&&(T.isStatic||T.isSleeping))&&f(v.collisionFilter,T.collisionFilter)){var C=T.parts.length;if(S&&C===1){var E=p(v,T,c);E&&(m[h++]=E)}else for(var I=b>1?1:0,O=C>1?1:0,U=I;U<b;U++)for(var D=v.parts[U],j=D.bounds,N=O;N<C;N++){var nn=T.parts[N],P=nn.bounds;if(!(j.min.x>P.max.x||j.max.x<P.min.x||j.max.y<P.min.y||j.min.y>P.max.y)){var E=p(D,nn,c);E&&(m[h++]=E)}}}}}return m.length!==h&&(m.length=h),m},s.canCollide=function(l,c){return l.group===c.group&&l.group!==0?l.group>0:(l.mask&c.category)!==0&&(c.mask&l.category)!==0},s._compareBoundsX=function(l,c){return l.bounds.min.x-c.bounds.min.x}})()},function(t,r,e){var s={};t.exports=s;var o=e(0);(function(){s.create=function(i){var l={};return i||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=i||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(c){var d=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u&&(l.button=0,c.preventDefault()),l.absolute.x=d.x,l.absolute.y=d.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=c},l.mousedown=function(c){var d=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u?(l.button=0,c.preventDefault()):l.button=c.button,l.absolute.x=d.x,l.absolute.y=d.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=c},l.mouseup=function(c){var d=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u&&c.preventDefault(),l.button=-1,l.absolute.x=d.x,l.absolute.y=d.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=c},l.mousewheel=function(c){l.wheelDelta=Math.max(-1,Math.min(1,c.wheelDelta||-c.detail)),c.preventDefault(),l.sourceEvents.mousewheel=c},s.setElement(l,l.element),l},s.setElement=function(i,l){i.element=l,l.addEventListener("mousemove",i.mousemove,{passive:!0}),l.addEventListener("mousedown",i.mousedown,{passive:!0}),l.addEventListener("mouseup",i.mouseup,{passive:!0}),l.addEventListener("wheel",i.mousewheel,{passive:!1}),l.addEventListener("touchmove",i.mousemove,{passive:!1}),l.addEventListener("touchstart",i.mousedown,{passive:!1}),l.addEventListener("touchend",i.mouseup,{passive:!1})},s.clearSourceEvents=function(i){i.sourceEvents.mousemove=null,i.sourceEvents.mousedown=null,i.sourceEvents.mouseup=null,i.sourceEvents.mousewheel=null,i.wheelDelta=0},s.setOffset=function(i,l){i.offset.x=l.x,i.offset.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},s.setScale=function(i,l){i.scale.x=l.x,i.scale.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},s._getRelativeMousePosition=function(i,l,c){var d=l.getBoundingClientRect(),u=document.documentElement||document.body.parentNode||document.body,f=window.pageXOffset!==void 0?window.pageXOffset:u.scrollLeft,p=window.pageYOffset!==void 0?window.pageYOffset:u.scrollTop,m=i.changedTouches,h,g;return m?(h=m[0].pageX-d.left-f,g=m[0].pageY-d.top-p):(h=i.pageX-d.left-f,g=i.pageY-d.top-p),{x:h/(l.clientWidth/(l.width||l.clientWidth)*c),y:g/(l.clientHeight/(l.height||l.clientHeight)*c)}}})()},function(t,r,e){var s={};t.exports=s;var o=e(0);(function(){s._registry={},s.register=function(i){if(s.isPlugin(i)||o.warn("Plugin.register:",s.toString(i),"does not implement all required fields."),i.name in s._registry){var l=s._registry[i.name],c=s.versionParse(i.version).number,d=s.versionParse(l.version).number;c>d?(o.warn("Plugin.register:",s.toString(l),"was upgraded to",s.toString(i)),s._registry[i.name]=i):c<d?o.warn("Plugin.register:",s.toString(l),"can not be downgraded to",s.toString(i)):i!==l&&o.warn("Plugin.register:",s.toString(i),"is already registered to different plugin object")}else s._registry[i.name]=i;return i},s.resolve=function(i){return s._registry[s.dependencyParse(i).name]},s.toString=function(i){return typeof i=="string"?i:(i.name||"anonymous")+"@"+(i.version||i.range||"0.0.0")},s.isPlugin=function(i){return i&&i.name&&i.version&&i.install},s.isUsed=function(i,l){return i.used.indexOf(l)>-1},s.isFor=function(i,l){var c=i.for&&s.dependencyParse(i.for);return!i.for||l.name===c.name&&s.versionSatisfies(l.version,c.range)},s.use=function(i,l){if(i.uses=(i.uses||[]).concat(l||[]),i.uses.length===0){o.warn("Plugin.use:",s.toString(i),"does not specify any dependencies to install.");return}for(var c=s.dependencies(i),d=o.topologicalSort(c),u=[],f=0;f<d.length;f+=1)if(d[f]!==i.name){var p=s.resolve(d[f]);if(!p){u.push("❌ "+d[f]);continue}s.isUsed(i,p.name)||(s.isFor(p,i)||(o.warn("Plugin.use:",s.toString(p),"is for",p.for,"but installed on",s.toString(i)+"."),p._warned=!0),p.install?p.install(i):(o.warn("Plugin.use:",s.toString(p),"does not specify an install function."),p._warned=!0),p._warned?(u.push("🔶 "+s.toString(p)),delete p._warned):u.push("✅ "+s.toString(p)),i.used.push(p.name))}u.length>0&&o.info(u.join("  "))},s.dependencies=function(i,l){var c=s.dependencyParse(i),d=c.name;if(l=l||{},!(d in l)){i=s.resolve(i)||i,l[d]=o.map(i.uses||[],function(f){s.isPlugin(f)&&s.register(f);var p=s.dependencyParse(f),m=s.resolve(f);return m&&!s.versionSatisfies(m.version,p.range)?(o.warn("Plugin.dependencies:",s.toString(m),"does not satisfy",s.toString(p),"used by",s.toString(c)+"."),m._warned=!0,i._warned=!0):m||(o.warn("Plugin.dependencies:",s.toString(f),"used by",s.toString(c),"could not be resolved."),i._warned=!0),p.name});for(var u=0;u<l[d].length;u+=1)s.dependencies(l[d][u],l);return l}},s.dependencyParse=function(i){if(o.isString(i)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(i)||o.warn("Plugin.dependencyParse:",i,"is not a valid dependency string."),{name:i.split("@")[0],range:i.split("@")[1]||"*"}}return{name:i.name,range:i.range||i.version}},s.versionParse=function(i){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(i)||o.warn("Plugin.versionParse:",i,"is not a valid version or range.");var c=l.exec(i),d=Number(c[4]),u=Number(c[5]),f=Number(c[6]);return{isRange:!!(c[1]||c[2]),version:c[3],range:i,operator:c[1]||c[2]||"",major:d,minor:u,patch:f,parts:[d,u,f],prerelease:c[7],number:d*1e8+u*1e4+f}},s.versionSatisfies=function(i,l){l=l||"*";var c=s.versionParse(l),d=s.versionParse(i);if(c.isRange){if(c.operator==="*"||i==="*")return!0;if(c.operator===">")return d.number>c.number;if(c.operator===">=")return d.number>=c.number;if(c.operator==="~")return d.major===c.major&&d.minor===c.minor&&d.patch>=c.patch;if(c.operator==="^")return c.major>0?d.major===c.major&&d.number>=c.number:c.minor>0?d.minor===c.minor&&d.patch>=c.patch:d.patch===c.patch}return i===l||i==="*"}})()},function(t,r){var e={};t.exports=e,function(){e.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}}()},function(t,r,e){var s={};t.exports=s;var o=e(7),i=e(18),l=e(13),c=e(19),d=e(5),u=e(6),f=e(10),p=e(0),m=e(4);(function(){s._deltaMax=1e3/60,s.create=function(h){h=h||{};var g={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},k=p.extend(g,h);return k.world=h.world||u.create({label:"World"}),k.pairs=h.pairs||c.create(),k.detector=h.detector||l.create(),k.detector.pairs=k.pairs,k.grid={buckets:[]},k.world.gravity=k.gravity,k.broadphase=k.grid,k.metrics={},k},s.update=function(h,g){var k=p.now(),v=h.world,j=h.detector,_=h.pairs,y=h.timing,w=y.timestamp,x;g>s._deltaMax&&p.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),g=typeof g<"u"?g:p._baseDelta,g*=y.timeScale,y.timestamp+=g,y.lastDelta=g;var b={timestamp:y.timestamp,delta:g};d.trigger(h,"beforeUpdate",b);var S=u.allBodies(v),T=u.allConstraints(v);for(v.isModified&&(l.setBodies(j,S),u.setModified(v,!1,!1,!0)),h.enableSleeping&&o.update(S,g),s._bodiesApplyGravity(S,h.gravity),g>0&&s._bodiesUpdate(S,g),d.trigger(h,"beforeSolve",b),f.preSolveAll(S),x=0;x<h.constraintIterations;x++)f.solveAll(T,g);f.postSolveAll(S);var P=l.collisions(j);c.update(_,P,w),h.enableSleeping&&o.afterCollisions(_.list),_.collisionStart.length>0&&d.trigger(h,"collisionStart",{pairs:_.collisionStart,timestamp:y.timestamp,delta:g});var C=p.clamp(20/h.positionIterations,0,1);for(i.preSolvePosition(_.list),x=0;x<h.positionIterations;x++)i.solvePosition(_.list,g,C);for(i.postSolvePosition(S),f.preSolveAll(S),x=0;x<h.constraintIterations;x++)f.solveAll(T,g);for(f.postSolveAll(S),i.preSolveVelocity(_.list),x=0;x<h.velocityIterations;x++)i.solveVelocity(_.list,g);return s._bodiesUpdateVelocities(S),_.collisionActive.length>0&&d.trigger(h,"collisionActive",{pairs:_.collisionActive,timestamp:y.timestamp,delta:g}),_.collisionEnd.length>0&&d.trigger(h,"collisionEnd",{pairs:_.collisionEnd,timestamp:y.timestamp,delta:g}),s._bodiesClearForces(S),d.trigger(h,"afterUpdate",b),h.timing.lastElapsed=p.now()-k,h},s.merge=function(h,g){if(p.extend(h,g),g.world){h.world=g.world,s.clear(h);for(var k=u.allBodies(h.world),v=0;v<k.length;v++){var j=k[v];o.set(j,!1),j.id=p.nextId()}}},s.clear=function(h){c.clear(h.pairs),l.clear(h.detector)},s._bodiesClearForces=function(h){for(var g=h.length,k=0;k<g;k++){var v=h[k];v.force.x=0,v.force.y=0,v.torque=0}},s._bodiesApplyGravity=function(h,g){var k=typeof g.scale<"u"?g.scale:.001,v=h.length;if(!(g.x===0&&g.y===0||k===0))for(var j=0;j<v;j++){var _=h[j];_.isStatic||_.isSleeping||(_.force.y+=_.mass*g.y*k,_.force.x+=_.mass*g.x*k)}},s._bodiesUpdate=function(h,g){for(var k=h.length,v=0;v<k;v++){var j=h[v];j.isStatic||j.isSleeping||m.update(j,g)}},s._bodiesUpdateVelocities=function(h){for(var g=h.length,k=0;k<g;k++)m.updateVelocities(h[k])}})()},function(t,r,e){var s={};t.exports=s;var o=e(3),i=e(0),l=e(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(c){var d,u,f,p=c.length;for(d=0;d<p;d++)u=c[d],u.isActive&&(f=u.contactCount,u.collision.parentA.totalContacts+=f,u.collision.parentB.totalContacts+=f)},s.solvePosition=function(c,d,u){var f,p,m,h,g,k,v,j,_=s._positionDampen*(u||1),y=i.clamp(d/i._baseDelta,0,1),w=c.length;for(f=0;f<w;f++)p=c[f],!(!p.isActive||p.isSensor)&&(m=p.collision,h=m.parentA,g=m.parentB,k=m.normal,p.separation=m.depth+k.x*(g.positionImpulse.x-h.positionImpulse.x)+k.y*(g.positionImpulse.y-h.positionImpulse.y));for(f=0;f<w;f++)p=c[f],!(!p.isActive||p.isSensor)&&(m=p.collision,h=m.parentA,g=m.parentB,k=m.normal,j=p.separation-p.slop*y,(h.isStatic||g.isStatic)&&(j*=2),h.isStatic||h.isSleeping||(v=_/h.totalContacts,h.positionImpulse.x+=k.x*j*v,h.positionImpulse.y+=k.y*j*v),g.isStatic||g.isSleeping||(v=_/g.totalContacts,g.positionImpulse.x-=k.x*j*v,g.positionImpulse.y-=k.y*j*v))},s.postSolvePosition=function(c){for(var d=s._positionWarming,u=c.length,f=o.translate,p=l.update,m=0;m<u;m++){var h=c[m],g=h.positionImpulse,k=g.x,v=g.y,j=h.velocity;if(h.totalContacts=0,k!==0||v!==0){for(var _=0;_<h.parts.length;_++){var y=h.parts[_];f(y.vertices,g),p(y.bounds,y.vertices,j),y.position.x+=k,y.position.y+=v}h.positionPrev.x+=k,h.positionPrev.y+=v,k*j.x+v*j.y<0?(g.x=0,g.y=0):(g.x*=d,g.y*=d)}}},s.preSolveVelocity=function(c){var d=c.length,u,f;for(u=0;u<d;u++){var p=c[u];if(!(!p.isActive||p.isSensor)){var m=p.contacts,h=p.contactCount,g=p.collision,k=g.parentA,v=g.parentB,j=g.normal,_=g.tangent;for(f=0;f<h;f++){var y=m[f],w=y.vertex,x=y.normalImpulse,b=y.tangentImpulse;if(x!==0||b!==0){var S=j.x*x+_.x*b,T=j.y*x+_.y*b;k.isStatic||k.isSleeping||(k.positionPrev.x+=S*k.inverseMass,k.positionPrev.y+=T*k.inverseMass,k.anglePrev+=k.inverseInertia*((w.x-k.position.x)*T-(w.y-k.position.y)*S)),v.isStatic||v.isSleeping||(v.positionPrev.x-=S*v.inverseMass,v.positionPrev.y-=T*v.inverseMass,v.anglePrev-=v.inverseInertia*((w.x-v.position.x)*T-(w.y-v.position.y)*S))}}}}},s.solveVelocity=function(c,d){var u=d/i._baseDelta,f=u*u,p=f*u,m=-s._restingThresh*u,h=s._restingThreshTangent,g=s._frictionNormalMultiplier*u,k=s._frictionMaxStatic,v=c.length,j,_,y,w;for(y=0;y<v;y++){var x=c[y];if(!(!x.isActive||x.isSensor)){var b=x.collision,S=b.parentA,T=b.parentB,P=b.normal.x,C=b.normal.y,E=b.tangent.x,I=b.tangent.y,O=x.inverseMass,U=x.friction*x.frictionStatic*g,D=x.contacts,N=x.contactCount,nn=1/N,on=S.position.x-S.positionPrev.x,pn=S.position.y-S.positionPrev.y,sn=S.angle-S.anglePrev,cn=T.position.x-T.positionPrev.x,dn=T.position.y-T.positionPrev.y,un=T.angle-T.anglePrev;for(w=0;w<N;w++){var Q=D[w],F=Q.vertex,G=F.x-S.position.x,H=F.y-S.position.y,q=F.x-T.position.x,tn=F.y-T.position.y,A=on-H*sn,M=pn+G*sn,R=cn-tn*un,z=dn+q*un,B=A-R,L=M-z,$=P*B+C*L,V=E*B+I*L,Y=x.separation+$,W=Math.min(Y,1);W=Y<0?0:W;var J=W*U;V<-J||V>J?(_=V>0?V:-V,j=x.friction*(V>0?1:-1)*p,j<-_?j=-_:j>_&&(j=_)):(j=V,_=k);var X=G*C-H*P,K=q*C-tn*P,an=nn/(O+S.inverseInertia*X*X+T.inverseInertia*K*K),ln=(1+x.restitution)*$*an;if(j*=an,$<m)Q.normalImpulse=0;else{var kn=Q.normalImpulse;Q.normalImpulse+=ln,Q.normalImpulse>0&&(Q.normalImpulse=0),ln=Q.normalImpulse-kn}if(V<-h||V>h)Q.tangentImpulse=0;else{var fn=Q.tangentImpulse;Q.tangentImpulse+=j,Q.tangentImpulse<-_&&(Q.tangentImpulse=-_),Q.tangentImpulse>_&&(Q.tangentImpulse=_),j=Q.tangentImpulse-fn}var In=P*ln+E*j,En=C*ln+I*j;S.isStatic||S.isSleeping||(S.positionPrev.x+=In*S.inverseMass,S.positionPrev.y+=En*S.inverseMass,S.anglePrev+=(G*En-H*In)*S.inverseInertia),T.isStatic||T.isSleeping||(T.positionPrev.x-=In*T.inverseMass,T.positionPrev.y-=En*T.inverseMass,T.anglePrev-=(q*En-tn*In)*T.inverseInertia)}}}}})()},function(t,r,e){var s={};t.exports=s;var o=e(9),i=e(0);(function(){s.create=function(l){return i.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},s.update=function(l,c,d){var u=o.update,f=o.create,p=o.setActive,m=l.table,h=l.list,g=h.length,k=g,v=l.collisionStart,j=l.collisionEnd,_=l.collisionActive,y=c.length,w=0,x=0,b=0,S,T,P;for(P=0;P<y;P++)S=c[P],T=S.pair,T?(T.isActive&&(_[b++]=T),u(T,S,d)):(T=f(S,d),m[T.id]=T,v[w++]=T,h[k++]=T);for(k=0,g=h.length,P=0;P<g;P++)T=h[P],T.timeUpdated>=d?h[k++]=T:(p(T,!1,d),T.collision.bodyA.sleepCounter>0&&T.collision.bodyB.sleepCounter>0?h[k++]=T:(j[x++]=T,delete m[T.id]));h.length!==k&&(h.length=k),v.length!==w&&(v.length=w),j.length!==x&&(j.length=x),_.length!==b&&(_.length=b)},s.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(t,r,e){var s=t.exports=e(21);s.Axes=e(11),s.Bodies=e(12),s.Body=e(4),s.Bounds=e(1),s.Collision=e(8),s.Common=e(0),s.Composite=e(6),s.Composites=e(22),s.Constraint=e(10),s.Contact=e(16),s.Detector=e(13),s.Engine=e(17),s.Events=e(5),s.Grid=e(23),s.Mouse=e(14),s.MouseConstraint=e(24),s.Pair=e(9),s.Pairs=e(19),s.Plugin=e(15),s.Query=e(25),s.Render=e(26),s.Resolver=e(18),s.Runner=e(27),s.SAT=e(28),s.Sleeping=e(7),s.Svg=e(29),s.Vector=e(2),s.Vertices=e(3),s.World=e(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(t,r,e){var s={};t.exports=s;var o=e(15),i=e(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){o.use(s,Array.prototype.slice.call(arguments))},s.before=function(l,c){return l=l.replace(/^Matter./,""),i.chainPathBefore(s,l,c)},s.after=function(l,c){return l=l.replace(/^Matter./,""),i.chainPathAfter(s,l,c)}})()},function(t,r,e){var s={};t.exports=s;var o=e(6),i=e(10),l=e(0),c=e(4),d=e(12),u=l.deprecated;(function(){s.stack=function(f,p,m,h,g,k,v){for(var j=o.create({label:"Stack"}),_=f,y=p,w,x=0,b=0;b<h;b++){for(var S=0,T=0;T<m;T++){var P=v(_,y,T,b,w,x);if(P){var C=P.bounds.max.y-P.bounds.min.y,E=P.bounds.max.x-P.bounds.min.x;C>S&&(S=C),c.translate(P,{x:E*.5,y:C*.5}),_=P.bounds.max.x+g,o.addBody(j,P),w=P,x+=1}else _+=g}y+=S+k,_=f}return j},s.chain=function(f,p,m,h,g,k){for(var v=f.bodies,j=1;j<v.length;j++){var _=v[j-1],y=v[j],w=_.bounds.max.y-_.bounds.min.y,x=_.bounds.max.x-_.bounds.min.x,b=y.bounds.max.y-y.bounds.min.y,S=y.bounds.max.x-y.bounds.min.x,T={bodyA:_,pointA:{x:x*p,y:w*m},bodyB:y,pointB:{x:S*h,y:b*g}},P=l.extend(T,k);o.addConstraint(f,i.create(P))}return f.label+=" Chain",f},s.mesh=function(f,p,m,h,g){var k=f.bodies,v,j,_,y,w;for(v=0;v<m;v++){for(j=1;j<p;j++)_=k[j-1+v*p],y=k[j+v*p],o.addConstraint(f,i.create(l.extend({bodyA:_,bodyB:y},g)));if(v>0)for(j=0;j<p;j++)_=k[j+(v-1)*p],y=k[j+v*p],o.addConstraint(f,i.create(l.extend({bodyA:_,bodyB:y},g))),h&&j>0&&(w=k[j-1+(v-1)*p],o.addConstraint(f,i.create(l.extend({bodyA:w,bodyB:y},g)))),h&&j<p-1&&(w=k[j+1+(v-1)*p],o.addConstraint(f,i.create(l.extend({bodyA:w,bodyB:y},g))))}return f.label+=" Mesh",f},s.pyramid=function(f,p,m,h,g,k,v){return s.stack(f,p,m,h,g,k,function(j,_,y,w,x,b){var S=Math.min(h,Math.ceil(m/2)),T=x?x.bounds.max.x-x.bounds.min.x:0;if(!(w>S)){w=S-w;var P=w,C=m-1-w;if(!(y<P||y>C)){b===1&&c.translate(x,{x:(y+(m%2===1?1:-1))*T,y:0});var E=x?y*T:0;return v(f+E+y*g,_,y,w,x,b)}}})},s.newtonsCradle=function(f,p,m,h,g){for(var k=o.create({label:"Newtons Cradle"}),v=0;v<m;v++){var j=1.9,_=d.circle(f+v*(h*j),p+g,h,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),y=i.create({pointA:{x:f+v*(h*j),y:p},bodyB:_});o.addBody(k,_),o.addConstraint(k,y)}return k},u(s,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),s.car=function(f,p,m,h,g){var k=c.nextGroup(!0),v=20,j=-m*.5+v,_=m*.5-v,y=0,w=o.create({label:"Car"}),x=d.rectangle(f,p,m,h,{collisionFilter:{group:k},chamfer:{radius:h*.5},density:2e-4}),b=d.circle(f+j,p+y,g,{collisionFilter:{group:k},friction:.8}),S=d.circle(f+_,p+y,g,{collisionFilter:{group:k},friction:.8}),T=i.create({bodyB:x,pointB:{x:j,y},bodyA:b,stiffness:1,length:0}),P=i.create({bodyB:x,pointB:{x:_,y},bodyA:S,stiffness:1,length:0});return o.addBody(w,x),o.addBody(w,b),o.addBody(w,S),o.addConstraint(w,T),o.addConstraint(w,P),w},u(s,"car","Composites.car ➤ moved to car example"),s.softBody=function(f,p,m,h,g,k,v,j,_,y){_=l.extend({inertia:1/0},_),y=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},y);var w=s.stack(f,p,m,h,g,k,function(x,b){return d.circle(x,b,j,_)});return s.mesh(w,m,h,v,y),w.label="Soft Body",w},u(s,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(t,r,e){var s={};t.exports=s;var o=e(9),i=e(0),l=i.deprecated;(function(){s.create=function(c){var d={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return i.extend(d,c)},s.update=function(c,d,u,f){var p,m,h,g=u.world,k=c.buckets,v,j,_=!1;for(p=0;p<d.length;p++){var y=d[p];if(!(y.isSleeping&&!f)&&!(g.bounds&&(y.bounds.max.x<g.bounds.min.x||y.bounds.min.x>g.bounds.max.x||y.bounds.max.y<g.bounds.min.y||y.bounds.min.y>g.bounds.max.y))){var w=s._getRegion(c,y);if(!y.region||w.id!==y.region.id||f){(!y.region||f)&&(y.region=w);var x=s._regionUnion(w,y.region);for(m=x.startCol;m<=x.endCol;m++)for(h=x.startRow;h<=x.endRow;h++){j=s._getBucketId(m,h),v=k[j];var b=m>=w.startCol&&m<=w.endCol&&h>=w.startRow&&h<=w.endRow,S=m>=y.region.startCol&&m<=y.region.endCol&&h>=y.region.startRow&&h<=y.region.endRow;!b&&S&&S&&v&&s._bucketRemoveBody(c,v,y),(y.region===w||b&&!S||f)&&(v||(v=s._createBucket(k,j)),s._bucketAddBody(c,v,y))}y.region=w,_=!0}}}_&&(c.pairsList=s._createActivePairsList(c))},l(s,"update","Grid.update ➤ replaced by Matter.Detector"),s.clear=function(c){c.buckets={},c.pairs={},c.pairsList=[]},l(s,"clear","Grid.clear ➤ replaced by Matter.Detector"),s._regionUnion=function(c,d){var u=Math.min(c.startCol,d.startCol),f=Math.max(c.endCol,d.endCol),p=Math.min(c.startRow,d.startRow),m=Math.max(c.endRow,d.endRow);return s._createRegion(u,f,p,m)},s._getRegion=function(c,d){var u=d.bounds,f=Math.floor(u.min.x/c.bucketWidth),p=Math.floor(u.max.x/c.bucketWidth),m=Math.floor(u.min.y/c.bucketHeight),h=Math.floor(u.max.y/c.bucketHeight);return s._createRegion(f,p,m,h)},s._createRegion=function(c,d,u,f){return{id:c+","+d+","+u+","+f,startCol:c,endCol:d,startRow:u,endRow:f}},s._getBucketId=function(c,d){return"C"+c+"R"+d},s._createBucket=function(c,d){var u=c[d]=[];return u},s._bucketAddBody=function(c,d,u){var f=c.pairs,p=o.id,m=d.length,h;for(h=0;h<m;h++){var g=d[h];if(!(u.id===g.id||u.isStatic&&g.isStatic)){var k=p(u,g),v=f[k];v?v[2]+=1:f[k]=[u,g,1]}}d.push(u)},s._bucketRemoveBody=function(c,d,u){var f=c.pairs,p=o.id,m;d.splice(i.indexOf(d,u),1);var h=d.length;for(m=0;m<h;m++){var g=f[p(u,d[m])];g&&(g[2]-=1)}},s._createActivePairsList=function(c){var d,u=c.pairs,f=i.keys(u),p=f.length,m=[],h;for(h=0;h<p;h++)d=u[f[h]],d[2]>0?m.push(d):delete u[f[h]];return m}})()},function(t,r,e){var s={};t.exports=s;var o=e(3),i=e(7),l=e(14),c=e(5),d=e(13),u=e(10),f=e(6),p=e(0),m=e(1);(function(){s.create=function(h,g){var k=(h?h.mouse:null)||(g?g.mouse:null);k||(h&&h.render&&h.render.canvas?k=l.create(h.render.canvas):g&&g.element?k=l.create(g.element):(k=l.create(),p.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var v=u.create({label:"Mouse Constraint",pointA:k.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),j={type:"mouseConstraint",mouse:k,element:null,body:null,constraint:v,collisionFilter:{category:1,mask:4294967295,group:0}},_=p.extend(j,g);return c.on(h,"beforeUpdate",function(){var y=f.allBodies(h.world);s.update(_,y),s._triggerEvents(_)}),_},s.update=function(h,g){var k=h.mouse,v=h.constraint,j=h.body;if(k.button===0){if(v.bodyB)i.set(v.bodyB,!1),v.pointA=k.position;else for(var _=0;_<g.length;_++)if(j=g[_],m.contains(j.bounds,k.position)&&d.canCollide(j.collisionFilter,h.collisionFilter))for(var y=j.parts.length>1?1:0;y<j.parts.length;y++){var w=j.parts[y];if(o.contains(w.vertices,k.position)){v.pointA=k.position,v.bodyB=h.body=j,v.pointB={x:k.position.x-j.position.x,y:k.position.y-j.position.y},v.angleB=j.angle,i.set(j,!1),c.trigger(h,"startdrag",{mouse:k,body:j});break}}}else v.bodyB=h.body=null,v.pointB=null,j&&c.trigger(h,"enddrag",{mouse:k,body:j})},s._triggerEvents=function(h){var g=h.mouse,k=g.sourceEvents;k.mousemove&&c.trigger(h,"mousemove",{mouse:g}),k.mousedown&&c.trigger(h,"mousedown",{mouse:g}),k.mouseup&&c.trigger(h,"mouseup",{mouse:g}),l.clearSourceEvents(g)}})()},function(t,r,e){var s={};t.exports=s;var o=e(2),i=e(8),l=e(1),c=e(12),d=e(3);(function(){s.collides=function(u,f){for(var p=[],m=f.length,h=u.bounds,g=i.collides,k=l.overlaps,v=0;v<m;v++){var j=f[v],_=j.parts.length,y=_===1?0:1;if(k(j.bounds,h))for(var w=y;w<_;w++){var x=j.parts[w];if(k(x.bounds,h)){var b=g(x,u);if(b){p.push(b);break}}}}return p},s.ray=function(u,f,p,m){m=m||1e-100;for(var h=o.angle(f,p),g=o.magnitude(o.sub(f,p)),k=(p.x+f.x)*.5,v=(p.y+f.y)*.5,j=c.rectangle(k,v,g,m,{angle:h}),_=s.collides(j,u),y=0;y<_.length;y+=1){var w=_[y];w.body=w.bodyB=w.bodyA}return _},s.region=function(u,f,p){for(var m=[],h=0;h<u.length;h++){var g=u[h],k=l.overlaps(g.bounds,f);(k&&!p||!k&&p)&&m.push(g)}return m},s.point=function(u,f){for(var p=[],m=0;m<u.length;m++){var h=u[m];if(l.contains(h.bounds,f))for(var g=h.parts.length===1?0:1;g<h.parts.length;g++){var k=h.parts[g];if(l.contains(k.bounds,f)&&d.contains(k.vertices,f)){p.push(h);break}}}return p}})()},function(t,r,e){var s={};t.exports=s;var o=e(4),i=e(0),l=e(6),c=e(1),d=e(5),u=e(2),f=e(14);(function(){var p,m;typeof window<"u"&&(p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(y){window.setTimeout(function(){y(i.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(y){var w={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!y.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},x=i.extend(w,y);return x.canvas&&(x.canvas.width=x.options.width||x.canvas.width,x.canvas.height=x.options.height||x.canvas.height),x.mouse=y.mouse,x.engine=y.engine,x.canvas=x.canvas||k(x.options.width,x.options.height),x.context=x.canvas.getContext("2d"),x.textures={},x.bounds=x.bounds||{min:{x:0,y:0},max:{x:x.canvas.width,y:x.canvas.height}},x.controller=s,x.options.showBroadphase=!1,x.options.pixelRatio!==1&&s.setPixelRatio(x,x.options.pixelRatio),i.isElement(x.element)&&x.element.appendChild(x.canvas),x},s.run=function(y){(function w(x){y.frameRequestId=p(w),h(y,x),s.world(y,x),y.context.setTransform(y.options.pixelRatio,0,0,y.options.pixelRatio,0,0),(y.options.showStats||y.options.showDebug)&&s.stats(y,y.context,x),(y.options.showPerformance||y.options.showDebug)&&s.performance(y,y.context,x),y.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(y){m(y.frameRequestId)},s.setPixelRatio=function(y,w){var x=y.options,b=y.canvas;w==="auto"&&(w=v(b)),x.pixelRatio=w,b.setAttribute("data-pixel-ratio",w),b.width=x.width*w,b.height=x.height*w,b.style.width=x.width+"px",b.style.height=x.height+"px"},s.setSize=function(y,w,x){y.options.width=w,y.options.height=x,y.bounds.max.x=y.bounds.min.x+w,y.bounds.max.y=y.bounds.min.y+x,y.options.pixelRatio!==1?s.setPixelRatio(y,y.options.pixelRatio):(y.canvas.width=w,y.canvas.height=x)},s.lookAt=function(y,w,x,b){b=typeof b<"u"?b:!0,w=i.isArray(w)?w:[w],x=x||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},T=0;T<w.length;T+=1){var P=w[T],C=P.bounds?P.bounds.min:P.min||P.position||P,E=P.bounds?P.bounds.max:P.max||P.position||P;C&&E&&(C.x<S.min.x&&(S.min.x=C.x),E.x>S.max.x&&(S.max.x=E.x),C.y<S.min.y&&(S.min.y=C.y),E.y>S.max.y&&(S.max.y=E.y))}var I=S.max.x-S.min.x+2*x.x,O=S.max.y-S.min.y+2*x.y,U=y.canvas.height,D=y.canvas.width,N=D/U,nn=I/O,on=1,pn=1;nn>N?pn=nn/N:on=N/nn,y.options.hasBounds=!0,y.bounds.min.x=S.min.x,y.bounds.max.x=S.min.x+I*on,y.bounds.min.y=S.min.y,y.bounds.max.y=S.min.y+O*pn,b&&(y.bounds.min.x+=I*.5-I*on*.5,y.bounds.max.x+=I*.5-I*on*.5,y.bounds.min.y+=O*.5-O*pn*.5,y.bounds.max.y+=O*.5-O*pn*.5),y.bounds.min.x-=x.x,y.bounds.max.x-=x.x,y.bounds.min.y-=x.y,y.bounds.max.y-=x.y,y.mouse&&(f.setScale(y.mouse,{x:(y.bounds.max.x-y.bounds.min.x)/y.canvas.width,y:(y.bounds.max.y-y.bounds.min.y)/y.canvas.height}),f.setOffset(y.mouse,y.bounds.min))},s.startViewTransform=function(y){var w=y.bounds.max.x-y.bounds.min.x,x=y.bounds.max.y-y.bounds.min.y,b=w/y.options.width,S=x/y.options.height;y.context.setTransform(y.options.pixelRatio/b,0,0,y.options.pixelRatio/S,0,0),y.context.translate(-y.bounds.min.x,-y.bounds.min.y)},s.endViewTransform=function(y){y.context.setTransform(y.options.pixelRatio,0,0,y.options.pixelRatio,0,0)},s.world=function(y,w){var x=i.now(),b=y.engine,S=b.world,T=y.canvas,P=y.context,C=y.options,E=y.timing,I=l.allBodies(S),O=l.allConstraints(S),U=C.wireframes?C.wireframeBackground:C.background,D=[],N=[],nn,on={timestamp:b.timing.timestamp};if(d.trigger(y,"beforeRender",on),y.currentBackground!==U&&_(y,U),P.globalCompositeOperation="source-in",P.fillStyle="transparent",P.fillRect(0,0,T.width,T.height),P.globalCompositeOperation="source-over",C.hasBounds){for(nn=0;nn<I.length;nn++){var pn=I[nn];c.overlaps(pn.bounds,y.bounds)&&D.push(pn)}for(nn=0;nn<O.length;nn++){var sn=O[nn],cn=sn.bodyA,dn=sn.bodyB,un=sn.pointA,Q=sn.pointB;cn&&(un=u.add(cn.position,sn.pointA)),dn&&(Q=u.add(dn.position,sn.pointB)),!(!un||!Q)&&(c.contains(y.bounds,un)||c.contains(y.bounds,Q))&&N.push(sn)}s.startViewTransform(y),y.mouse&&(f.setScale(y.mouse,{x:(y.bounds.max.x-y.bounds.min.x)/y.options.width,y:(y.bounds.max.y-y.bounds.min.y)/y.options.height}),f.setOffset(y.mouse,y.bounds.min))}else N=O,D=I,y.options.pixelRatio!==1&&y.context.setTransform(y.options.pixelRatio,0,0,y.options.pixelRatio,0,0);!C.wireframes||b.enableSleeping&&C.showSleeping?s.bodies(y,D,P):(C.showConvexHulls&&s.bodyConvexHulls(y,D,P),s.bodyWireframes(y,D,P)),C.showBounds&&s.bodyBounds(y,D,P),(C.showAxes||C.showAngleIndicator)&&s.bodyAxes(y,D,P),C.showPositions&&s.bodyPositions(y,D,P),C.showVelocity&&s.bodyVelocity(y,D,P),C.showIds&&s.bodyIds(y,D,P),C.showSeparations&&s.separations(y,b.pairs.list,P),C.showCollisions&&s.collisions(y,b.pairs.list,P),C.showVertexNumbers&&s.vertexNumbers(y,D,P),C.showMousePosition&&s.mousePosition(y,y.mouse,P),s.constraints(N,P),C.hasBounds&&s.endViewTransform(y),d.trigger(y,"afterRender",on),E.lastElapsed=i.now()-x},s.stats=function(y,w,x){for(var b=y.engine,S=b.world,T=l.allBodies(S),P=0,C=55,E=44,I=0,O=0,U=0;U<T.length;U+=1)P+=T[U].parts.length;var D={Part:P,Body:T.length,Cons:l.allConstraints(S).length,Comp:l.allComposites(S).length,Pair:b.pairs.list.length};w.fillStyle="#0e0f19",w.fillRect(I,O,C*5.5,E),w.font="12px Arial",w.textBaseline="top",w.textAlign="right";for(var N in D){var nn=D[N];w.fillStyle="#aaa",w.fillText(N,I+C,O+8),w.fillStyle="#eee",w.fillText(nn,I+C,O+26),I+=C}},s.performance=function(y,w){var x=y.engine,b=y.timing,S=b.deltaHistory,T=b.elapsedHistory,P=b.timestampElapsedHistory,C=b.engineDeltaHistory,E=b.engineUpdatesHistory,I=b.engineElapsedHistory,O=x.timing.lastUpdatesPerFrame,U=x.timing.lastDelta,D=g(S),N=g(T),nn=g(C),on=g(E),pn=g(I),sn=g(P),cn=sn/D||0,dn=Math.round(D/U),un=1e3/D||0,Q=4,F=12,G=60,H=34,q=10,tn=69;w.fillStyle="#0e0f19",w.fillRect(0,50,F*5+G*6+22,H),s.status(w,q,tn,G,Q,S.length,Math.round(un)+" fps",un/s._goodFps,function(A){return S[A]/D-1}),s.status(w,q+F+G,tn,G,Q,C.length,U.toFixed(2)+" dt",s._goodDelta/U,function(A){return C[A]/nn-1}),s.status(w,q+(F+G)*2,tn,G,Q,E.length,O+" upf",Math.pow(i.clamp(on/dn||1,0,1),4),function(A){return E[A]/on-1}),s.status(w,q+(F+G)*3,tn,G,Q,I.length,pn.toFixed(2)+" ut",1-O*pn/s._goodFps,function(A){return I[A]/pn-1}),s.status(w,q+(F+G)*4,tn,G,Q,T.length,N.toFixed(2)+" rt",1-N/s._goodFps,function(A){return T[A]/N-1}),s.status(w,q+(F+G)*5,tn,G,Q,P.length,cn.toFixed(2)+" x",cn*cn*cn,function(A){return(P[A]/S[A]/cn||0)-1})},s.status=function(y,w,x,b,S,T,P,C,E){y.strokeStyle="#888",y.fillStyle="#444",y.lineWidth=1,y.fillRect(w,x+7,b,1),y.beginPath(),y.moveTo(w,x+7-S*i.clamp(.4*E(0),-2,2));for(var I=0;I<b;I+=1)y.lineTo(w+I,x+7-(I<T?S*i.clamp(.4*E(I),-2,2):0));y.stroke(),y.fillStyle="hsl("+i.clamp(25+95*C,0,120)+",100%,60%)",y.fillRect(w,x-7,4,4),y.font="12px Arial",y.textBaseline="middle",y.textAlign="right",y.fillStyle="#eee",y.fillText(P,w+b,x-5)},s.constraints=function(y,w){for(var x=w,b=0;b<y.length;b++){var S=y[b];if(!(!S.render.visible||!S.pointA||!S.pointB)){var T=S.bodyA,P=S.bodyB,C,E;if(T?C=u.add(T.position,S.pointA):C=S.pointA,S.render.type==="pin")x.beginPath(),x.arc(C.x,C.y,3,0,2*Math.PI),x.closePath();else{if(P?E=u.add(P.position,S.pointB):E=S.pointB,x.beginPath(),x.moveTo(C.x,C.y),S.render.type==="spring")for(var I=u.sub(E,C),O=u.perp(u.normalise(I)),U=Math.ceil(i.clamp(S.length/5,12,20)),D,N=1;N<U;N+=1)D=N%2===0?1:-1,x.lineTo(C.x+I.x*(N/U)+O.x*D*4,C.y+I.y*(N/U)+O.y*D*4);x.lineTo(E.x,E.y)}S.render.lineWidth&&(x.lineWidth=S.render.lineWidth,x.strokeStyle=S.render.strokeStyle,x.stroke()),S.render.anchors&&(x.fillStyle=S.render.strokeStyle,x.beginPath(),x.arc(C.x,C.y,3,0,2*Math.PI),x.arc(E.x,E.y,3,0,2*Math.PI),x.closePath(),x.fill())}}},s.bodies=function(y,w,x){var b=x;y.engine;var S=y.options,T=S.showInternalEdges||!S.wireframes,P,C,E,I;for(E=0;E<w.length;E++)if(P=w[E],!!P.render.visible){for(I=P.parts.length>1?1:0;I<P.parts.length;I++)if(C=P.parts[I],!!C.render.visible){if(S.showSleeping&&P.isSleeping?b.globalAlpha=.5*C.render.opacity:C.render.opacity!==1&&(b.globalAlpha=C.render.opacity),C.render.sprite&&C.render.sprite.texture&&!S.wireframes){var O=C.render.sprite,U=j(y,O.texture);b.translate(C.position.x,C.position.y),b.rotate(C.angle),b.drawImage(U,U.width*-O.xOffset*O.xScale,U.height*-O.yOffset*O.yScale,U.width*O.xScale,U.height*O.yScale),b.rotate(-C.angle),b.translate(-C.position.x,-C.position.y)}else{if(C.circleRadius)b.beginPath(),b.arc(C.position.x,C.position.y,C.circleRadius,0,2*Math.PI);else{b.beginPath(),b.moveTo(C.vertices[0].x,C.vertices[0].y);for(var D=1;D<C.vertices.length;D++)!C.vertices[D-1].isInternal||T?b.lineTo(C.vertices[D].x,C.vertices[D].y):b.moveTo(C.vertices[D].x,C.vertices[D].y),C.vertices[D].isInternal&&!T&&b.moveTo(C.vertices[(D+1)%C.vertices.length].x,C.vertices[(D+1)%C.vertices.length].y);b.lineTo(C.vertices[0].x,C.vertices[0].y),b.closePath()}S.wireframes?(b.lineWidth=1,b.strokeStyle=y.options.wireframeStrokeStyle,b.stroke()):(b.fillStyle=C.render.fillStyle,C.render.lineWidth&&(b.lineWidth=C.render.lineWidth,b.strokeStyle=C.render.strokeStyle,b.stroke()),b.fill())}b.globalAlpha=1}}},s.bodyWireframes=function(y,w,x){var b=x,S=y.options.showInternalEdges,T,P,C,E,I;for(b.beginPath(),C=0;C<w.length;C++)if(T=w[C],!!T.render.visible)for(I=T.parts.length>1?1:0;I<T.parts.length;I++){for(P=T.parts[I],b.moveTo(P.vertices[0].x,P.vertices[0].y),E=1;E<P.vertices.length;E++)!P.vertices[E-1].isInternal||S?b.lineTo(P.vertices[E].x,P.vertices[E].y):b.moveTo(P.vertices[E].x,P.vertices[E].y),P.vertices[E].isInternal&&!S&&b.moveTo(P.vertices[(E+1)%P.vertices.length].x,P.vertices[(E+1)%P.vertices.length].y);b.lineTo(P.vertices[0].x,P.vertices[0].y)}b.lineWidth=1,b.strokeStyle=y.options.wireframeStrokeStyle,b.stroke()},s.bodyConvexHulls=function(y,w,x){var b=x,S,T,P;for(b.beginPath(),T=0;T<w.length;T++)if(S=w[T],!(!S.render.visible||S.parts.length===1)){for(b.moveTo(S.vertices[0].x,S.vertices[0].y),P=1;P<S.vertices.length;P++)b.lineTo(S.vertices[P].x,S.vertices[P].y);b.lineTo(S.vertices[0].x,S.vertices[0].y)}b.lineWidth=1,b.strokeStyle="rgba(255,255,255,0.2)",b.stroke()},s.vertexNumbers=function(y,w,x){var b=x,S,T,P;for(S=0;S<w.length;S++){var C=w[S].parts;for(P=C.length>1?1:0;P<C.length;P++){var E=C[P];for(T=0;T<E.vertices.length;T++)b.fillStyle="rgba(255,255,255,0.2)",b.fillText(S+"_"+T,E.position.x+(E.vertices[T].x-E.position.x)*.8,E.position.y+(E.vertices[T].y-E.position.y)*.8)}}},s.mousePosition=function(y,w,x){var b=x;b.fillStyle="rgba(255,255,255,0.8)",b.fillText(w.position.x+"  "+w.position.y,w.position.x+5,w.position.y-5)},s.bodyBounds=function(y,w,x){var b=x;y.engine;var S=y.options;b.beginPath();for(var T=0;T<w.length;T++){var P=w[T];if(P.render.visible)for(var C=w[T].parts,E=C.length>1?1:0;E<C.length;E++){var I=C[E];b.rect(I.bounds.min.x,I.bounds.min.y,I.bounds.max.x-I.bounds.min.x,I.bounds.max.y-I.bounds.min.y)}}S.wireframes?b.strokeStyle="rgba(255,255,255,0.08)":b.strokeStyle="rgba(0,0,0,0.1)",b.lineWidth=1,b.stroke()},s.bodyAxes=function(y,w,x){var b=x;y.engine;var S=y.options,T,P,C,E;for(b.beginPath(),P=0;P<w.length;P++){var I=w[P],O=I.parts;if(I.render.visible)if(S.showAxes)for(C=O.length>1?1:0;C<O.length;C++)for(T=O[C],E=0;E<T.axes.length;E++){var U=T.axes[E];b.moveTo(T.position.x,T.position.y),b.lineTo(T.position.x+U.x*20,T.position.y+U.y*20)}else for(C=O.length>1?1:0;C<O.length;C++)for(T=O[C],E=0;E<T.axes.length;E++)b.moveTo(T.position.x,T.position.y),b.lineTo((T.vertices[0].x+T.vertices[T.vertices.length-1].x)/2,(T.vertices[0].y+T.vertices[T.vertices.length-1].y)/2)}S.wireframes?(b.strokeStyle="indianred",b.lineWidth=1):(b.strokeStyle="rgba(255, 255, 255, 0.4)",b.globalCompositeOperation="overlay",b.lineWidth=2),b.stroke(),b.globalCompositeOperation="source-over"},s.bodyPositions=function(y,w,x){var b=x;y.engine;var S=y.options,T,P,C,E;for(b.beginPath(),C=0;C<w.length;C++)if(T=w[C],!!T.render.visible)for(E=0;E<T.parts.length;E++)P=T.parts[E],b.arc(P.position.x,P.position.y,3,0,2*Math.PI,!1),b.closePath();for(S.wireframes?b.fillStyle="indianred":b.fillStyle="rgba(0,0,0,0.5)",b.fill(),b.beginPath(),C=0;C<w.length;C++)T=w[C],T.render.visible&&(b.arc(T.positionPrev.x,T.positionPrev.y,2,0,2*Math.PI,!1),b.closePath());b.fillStyle="rgba(255,165,0,0.8)",b.fill()},s.bodyVelocity=function(y,w,x){var b=x;b.beginPath();for(var S=0;S<w.length;S++){var T=w[S];if(T.render.visible){var P=o.getVelocity(T);b.moveTo(T.position.x,T.position.y),b.lineTo(T.position.x+P.x,T.position.y+P.y)}}b.lineWidth=3,b.strokeStyle="cornflowerblue",b.stroke()},s.bodyIds=function(y,w,x){var b=x,S,T;for(S=0;S<w.length;S++)if(w[S].render.visible){var P=w[S].parts;for(T=P.length>1?1:0;T<P.length;T++){var C=P[T];b.font="12px Arial",b.fillStyle="rgba(255,255,255,0.5)",b.fillText(C.id,C.position.x+10,C.position.y-10)}}},s.collisions=function(y,w,x){var b=x,S=y.options,T,P,C,E;for(b.beginPath(),C=0;C<w.length;C++)if(T=w[C],!!T.isActive)for(P=T.collision,E=0;E<T.contactCount;E++){var I=T.contacts[E],O=I.vertex;b.rect(O.x-1.5,O.y-1.5,3.5,3.5)}for(S.wireframes?b.fillStyle="rgba(255,255,255,0.7)":b.fillStyle="orange",b.fill(),b.beginPath(),C=0;C<w.length;C++)if(T=w[C],!!T.isActive&&(P=T.collision,T.contactCount>0)){var U=T.contacts[0].vertex.x,D=T.contacts[0].vertex.y;T.contactCount===2&&(U=(T.contacts[0].vertex.x+T.contacts[1].vertex.x)/2,D=(T.contacts[0].vertex.y+T.contacts[1].vertex.y)/2),P.bodyB===P.supports[0].body||P.bodyA.isStatic===!0?b.moveTo(U-P.normal.x*8,D-P.normal.y*8):b.moveTo(U+P.normal.x*8,D+P.normal.y*8),b.lineTo(U,D)}S.wireframes?b.strokeStyle="rgba(255,165,0,0.7)":b.strokeStyle="orange",b.lineWidth=1,b.stroke()},s.separations=function(y,w,x){var b=x,S=y.options,T,P,C,E,I;for(b.beginPath(),I=0;I<w.length;I++)if(T=w[I],!!T.isActive){P=T.collision,C=P.bodyA,E=P.bodyB;var O=1;!E.isStatic&&!C.isStatic&&(O=.5),E.isStatic&&(O=0),b.moveTo(E.position.x,E.position.y),b.lineTo(E.position.x-P.penetration.x*O,E.position.y-P.penetration.y*O),O=1,!E.isStatic&&!C.isStatic&&(O=.5),C.isStatic&&(O=0),b.moveTo(C.position.x,C.position.y),b.lineTo(C.position.x+P.penetration.x*O,C.position.y+P.penetration.y*O)}S.wireframes?b.strokeStyle="rgba(255,165,0,0.5)":b.strokeStyle="orange",b.stroke()},s.inspector=function(y,w){y.engine;var x=y.selected,b=y.render,S=b.options,T;if(S.hasBounds){var P=b.bounds.max.x-b.bounds.min.x,C=b.bounds.max.y-b.bounds.min.y,E=P/b.options.width,I=C/b.options.height;w.scale(1/E,1/I),w.translate(-b.bounds.min.x,-b.bounds.min.y)}for(var O=0;O<x.length;O++){var U=x[O].data;switch(w.translate(.5,.5),w.lineWidth=1,w.strokeStyle="rgba(255,165,0,0.9)",w.setLineDash([1,2]),U.type){case"body":T=U.bounds,w.beginPath(),w.rect(Math.floor(T.min.x-3),Math.floor(T.min.y-3),Math.floor(T.max.x-T.min.x+6),Math.floor(T.max.y-T.min.y+6)),w.closePath(),w.stroke();break;case"constraint":var D=U.pointA;U.bodyA&&(D=U.pointB),w.beginPath(),w.arc(D.x,D.y,10,0,2*Math.PI),w.closePath(),w.stroke();break}w.setLineDash([]),w.translate(-.5,-.5)}y.selectStart!==null&&(w.translate(.5,.5),w.lineWidth=1,w.strokeStyle="rgba(255,165,0,0.6)",w.fillStyle="rgba(255,165,0,0.1)",T=y.selectBounds,w.beginPath(),w.rect(Math.floor(T.min.x),Math.floor(T.min.y),Math.floor(T.max.x-T.min.x),Math.floor(T.max.y-T.min.y)),w.closePath(),w.stroke(),w.fill(),w.translate(-.5,-.5)),S.hasBounds&&w.setTransform(1,0,0,1,0,0)};var h=function(y,w){var x=y.engine,b=y.timing,S=b.historySize,T=x.timing.timestamp;b.delta=w-b.lastTime||s._goodDelta,b.lastTime=w,b.timestampElapsed=T-b.lastTimestamp||0,b.lastTimestamp=T,b.deltaHistory.unshift(b.delta),b.deltaHistory.length=Math.min(b.deltaHistory.length,S),b.engineDeltaHistory.unshift(x.timing.lastDelta),b.engineDeltaHistory.length=Math.min(b.engineDeltaHistory.length,S),b.timestampElapsedHistory.unshift(b.timestampElapsed),b.timestampElapsedHistory.length=Math.min(b.timestampElapsedHistory.length,S),b.engineUpdatesHistory.unshift(x.timing.lastUpdatesPerFrame),b.engineUpdatesHistory.length=Math.min(b.engineUpdatesHistory.length,S),b.engineElapsedHistory.unshift(x.timing.lastElapsed),b.engineElapsedHistory.length=Math.min(b.engineElapsedHistory.length,S),b.elapsedHistory.unshift(b.lastElapsed),b.elapsedHistory.length=Math.min(b.elapsedHistory.length,S)},g=function(y){for(var w=0,x=0;x<y.length;x+=1)w+=y[x];return w/y.length||0},k=function(y,w){var x=document.createElement("canvas");return x.width=y,x.height=w,x.oncontextmenu=function(){return!1},x.onselectstart=function(){return!1},x},v=function(y){var w=y.getContext("2d"),x=window.devicePixelRatio||1,b=w.webkitBackingStorePixelRatio||w.mozBackingStorePixelRatio||w.msBackingStorePixelRatio||w.oBackingStorePixelRatio||w.backingStorePixelRatio||1;return x/b},j=function(y,w){var x=y.textures[w];return x||(x=y.textures[w]=new Image,x.src=w,x)},_=function(y,w){var x=w;/(jpg|gif|png)$/.test(w)&&(x="url("+w+")"),y.canvas.style.background=x,y.canvas.style.backgroundSize="contain",y.currentBackground=w}})()},function(t,r,e){var s={};t.exports=s;var o=e(5),i=e(17),l=e(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(d){var u={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},f=l.extend(u,d);return f.fps=0,f},s.run=function(d,u){return d.timeBuffer=s._frameDeltaFallback,function f(p){d.frameRequestId=s._onNextFrame(d,f),p&&d.enabled&&s.tick(d,u,p)}(),d},s.tick=function(d,u,f){var p=l.now(),m=d.delta,h=0,g=f-d.timeLastTick;if((!g||!d.timeLastTick||g>Math.max(s._maxFrameDelta,d.maxFrameTime))&&(g=d.frameDelta||s._frameDeltaFallback),d.frameDeltaSmoothing){d.frameDeltaHistory.push(g),d.frameDeltaHistory=d.frameDeltaHistory.slice(-d.frameDeltaHistorySize);var k=d.frameDeltaHistory.slice(0).sort(),v=d.frameDeltaHistory.slice(k.length*s._smoothingLowerBound,k.length*s._smoothingUpperBound),j=c(v);g=j||g}d.frameDeltaSnapping&&(g=1e3/Math.round(1e3/g)),d.frameDelta=g,d.timeLastTick=f,d.timeBuffer+=d.frameDelta,d.timeBuffer=l.clamp(d.timeBuffer,0,d.frameDelta+m*s._timeBufferMargin),d.lastUpdatesDeferred=0;var _=d.maxUpdates||Math.ceil(d.maxFrameTime/m),y={timestamp:u.timing.timestamp};o.trigger(d,"beforeTick",y),o.trigger(d,"tick",y);for(var w=l.now();m>0&&d.timeBuffer>=m*s._timeBufferMargin;){o.trigger(d,"beforeUpdate",y),i.update(u,m),o.trigger(d,"afterUpdate",y),d.timeBuffer-=m,h+=1;var x=l.now()-p,b=l.now()-w,S=x+s._elapsedNextEstimate*b/h;if(h>=_||S>d.maxFrameTime){d.lastUpdatesDeferred=Math.round(Math.max(0,d.timeBuffer/m-s._timeBufferMargin));break}}u.timing.lastUpdatesPerFrame=h,o.trigger(d,"afterTick",y),d.frameDeltaHistory.length>=100&&(d.lastUpdatesDeferred&&Math.round(d.frameDelta/m)>_?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):d.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof d.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(d.deltaMin||d.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),d.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(d){s._cancelNextFrame(d)},s._onNextFrame=function(d,u){if(typeof window<"u"&&window.requestAnimationFrame)d.frameRequestId=window.requestAnimationFrame(u);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return d.frameRequestId},s._cancelNextFrame=function(d){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(d.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var c=function(d){for(var u=0,f=d.length,p=0;p<f;p+=1)u+=d[p];return u/f||0}})()},function(t,r,e){var s={};t.exports=s;var o=e(8),i=e(0),l=i.deprecated;(function(){s.collides=function(c,d){return o.collides(c,d)},l(s,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(t,r,e){var s={};t.exports=s,e(1);var o=e(0);(function(){s.pathToVertices=function(i,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var c,d,u,f,p,m,h,g,k,v,j=[],_,y,w=0,x=0,b=0;l=l||15;var S=function(P,C,E){var I=E%2===1&&E>1;if(!k||P!=k.x||C!=k.y){k&&I?(_=k.x,y=k.y):(_=0,y=0);var O={x:_+P,y:y+C};(I||!k)&&(k=O),j.push(O),x=_+P,b=y+C}},T=function(P){var C=P.pathSegTypeAsLetter.toUpperCase();if(C!=="Z"){switch(C){case"M":case"L":case"T":case"C":case"S":case"Q":x=P.x,b=P.y;break;case"H":x=P.x;break;case"V":b=P.y;break}S(x,b,P.pathSegType)}};for(s._svgPathToAbsolute(i),u=i.getTotalLength(),m=[],c=0;c<i.pathSegList.numberOfItems;c+=1)m.push(i.pathSegList.getItem(c));for(h=m.concat();w<u;){if(v=i.getPathSegAtLength(w),p=m[v],p!=g){for(;h.length&&h[0]!=p;)T(h.shift());g=p}switch(p.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":f=i.getPointAtLength(w),S(f.x,f.y,0);break}w+=l}for(c=0,d=h.length;c<d;++c)T(h[c]);return j},s._svgPathToAbsolute=function(i){for(var l,c,d,u,f,p,m=i.pathSegList,h=0,g=0,k=m.numberOfItems,v=0;v<k;++v){var j=m.getItem(v),_=j.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(_))"x"in j&&(h=j.x),"y"in j&&(g=j.y);else switch("x1"in j&&(d=h+j.x1),"x2"in j&&(f=h+j.x2),"y1"in j&&(u=g+j.y1),"y2"in j&&(p=g+j.y2),"x"in j&&(h+=j.x),"y"in j&&(g+=j.y),_){case"m":m.replaceItem(i.createSVGPathSegMovetoAbs(h,g),v);break;case"l":m.replaceItem(i.createSVGPathSegLinetoAbs(h,g),v);break;case"h":m.replaceItem(i.createSVGPathSegLinetoHorizontalAbs(h),v);break;case"v":m.replaceItem(i.createSVGPathSegLinetoVerticalAbs(g),v);break;case"c":m.replaceItem(i.createSVGPathSegCurvetoCubicAbs(h,g,d,u,f,p),v);break;case"s":m.replaceItem(i.createSVGPathSegCurvetoCubicSmoothAbs(h,g,f,p),v);break;case"q":m.replaceItem(i.createSVGPathSegCurvetoQuadraticAbs(h,g,d,u),v);break;case"t":m.replaceItem(i.createSVGPathSegCurvetoQuadraticSmoothAbs(h,g),v);break;case"a":m.replaceItem(i.createSVGPathSegArcAbs(h,g,j.r1,j.r2,j.angle,j.largeArcFlag,j.sweepFlag),v);break;case"z":case"Z":h=l,g=c;break}(_=="M"||_=="m")&&(l=h,c=g)}}})()},function(t,r,e){var s={};t.exports=s;var o=e(6);e(0),function(){s.create=o.create,s.add=o.add,s.remove=o.remove,s.clear=o.clear,s.addComposite=o.addComposite,s.addBody=o.addBody,s.addConstraint=o.addConstraint}()}])})}(Vs)),Vs.exports}var ua=Ph();function La(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ql(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pa={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vt={duration:.5,overwrite:!1,delay:0},Zr,Dn,jn,Ia=1e8,Hn=1/Ia,cr=Math.PI*2,Ah=cr/4,Mh=0,Jl=Math.sqrt,Rh=Math.cos,Eh=Math.sin,zn=function(n){return typeof n=="string"},Tn=function(n){return typeof n=="function"},Ya=function(n){return typeof n=="number"},Qr=function(n){return typeof n>"u"},za=function(n){return typeof n=="object"},Qn=function(n){return n!==!1},Jr=function(){return typeof window<"u"},Bs=function(n){return Tn(n)||zn(n)},np=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,ur=/(?:-?\.?\d|\.)+/gi,ap=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,We=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tp=/[+-]=-?[.\d]+/,sp=/[^,'"\[\]\s]+/gi,Ih=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Sn,Pa,hr,no,da={},ee={},ep,rp=function(n){return(ee=Yt(n,da))&&ta},ao=function(n,t){return console.warn("Invalid property",n,"set to",t,"Missing plugin? gsap.registerPlugin()")},js=function(n,t){return!t&&console.warn(n)},op=function(n,t){return n&&(da[n]=t)&&ee&&(ee[n]=t)||da},_s=function(){return 0},Fh={suppressEvents:!0,isStart:!0,kill:!1},Ys={suppressEvents:!0,kill:!1},zh={suppressEvents:!0},to={},et=[],fr={},ip,ra={},He={},hi=30,qs=[],so="",eo=function(n){var t=n[0],r,e;if(za(t)||Tn(t)||(n=[n]),!(r=(t._gsap||{}).harness)){for(e=qs.length;e--&&!qs[e].targetTest(t););r=qs[e]}for(e=n.length;e--;)n[e]&&(n[e]._gsap||(n[e]._gsap=new Rp(n[e],r)))||n.splice(e,1);return n},vt=function(n){return n._gsap||eo(fa(n))[0]._gsap},lp=function(n,t,r){return(r=n[t])&&Tn(r)?n[t]():Qr(r)&&n.getAttribute&&n.getAttribute(t)||r},Jn=function(n,t){return(n=n.split(",")).forEach(t)||n},Pn=function(n){return Math.round(n*1e5)/1e5||0},Mn=function(n){return Math.round(n*1e7)/1e7||0},Lt=function(n,t){var r=t.charAt(0),e=parseFloat(t.substr(2));return n=parseFloat(n),r==="+"?n+e:r==="-"?n-e:r==="*"?n*e:n/e},Oh=function(n,t){for(var r=t.length,e=0;n.indexOf(t[e])<0&&++e<r;);return e<r},re=function(){var n=et.length,t=et.slice(0),r,e;for(fr={},et.length=0,r=0;r<n;r++)e=t[r],e&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},ro=function(n){return!!(n._initted||n._startAt||n.add)},pp=function(n,t,r,e){et.length&&!Dn&&re(),n.render(t,r,!!(Dn&&t<0&&ro(n))),et.length&&!Dn&&re()},dp=function(n){var t=parseFloat(n);return(t||t===0)&&(n+"").match(sp).length<2?t:zn(n)?n.trim():n},cp=function(n){return n},ca=function(n,t){for(var r in t)r in n||(n[r]=t[r]);return n},Dh=function(n){return function(t,r){for(var e in r)e in t||e==="duration"&&n||e==="ease"||(t[e]=r[e])}},Yt=function(n,t){for(var r in t)n[r]=t[r];return n},fi=function a(n,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(n[r]=za(t[r])?a(n[r]||(n[r]={}),t[r]):t[r]);return n},oe=function(n,t){var r={},e;for(e in n)e in t||(r[e]=n[e]);return r},hs=function(n){var t=n.parent||Sn,r=n.keyframes?Dh(Vn(n.keyframes)):ca;if(Qn(n.inherit))for(;t;)r(n,t.vars.defaults),t=t.parent||t._dp;return n},Bh=function(n,t){for(var r=n.length,e=r===t.length;e&&r--&&n[r]===t[r];);return r<0},up=function(n,t,r,e,s){var o=n[e],i;if(s)for(i=t[s];o&&o[s]>i;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=n[r],n[r]=t),t._next?t._next._prev=t:n[e]=t,t._prev=o,t.parent=t._dp=n,t},_e=function(n,t,r,e){r===void 0&&(r="_first"),e===void 0&&(e="_last");var s=t._prev,o=t._next;s?s._next=o:n[r]===t&&(n[r]=o),o?o._prev=s:n[e]===t&&(n[e]=s),t._next=t._prev=t.parent=null},lt=function(n,t){n.parent&&(!t||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},wt=function(n,t){if(n&&(!t||t._end>n._dur||t._start<0))for(var r=n;r;)r._dirty=1,r=r.parent;return n},Lh=function(n){for(var t=n.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return n},mr=function(n,t,r,e){return n._startAt&&(Dn?n._startAt.revert(Ys):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(t,!0,e))},Uh=function a(n){return!n||n._ts&&a(n.parent)},mi=function(n){return n._repeat?qt(n._tTime,n=n.duration()+n._rDelay)*n:0},qt=function(n,t){var r=Math.floor(n=Mn(n/t));return n&&r===n?r-1:r},ie=function(n,t){return(n-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Se=function(n){return n._end=Mn(n._start+(n._tDur/Math.abs(n._ts||n._rts||Hn)||0))},Ce=function(n,t){var r=n._dp;return r&&r.smoothChildTiming&&n._ts&&(n._start=Mn(r._time-(n._ts>0?t/n._ts:((n._dirty?n.totalDuration():n._tDur)-t)/-n._ts)),Se(n),r._dirty||wt(r,n)),n},hp=function(n,t){var r;if((t._time||!t._dur&&t._initted||t._start<n._time&&(t._dur||!t.add))&&(r=ie(n.rawTime(),t),(!t._dur||Fs(0,t.totalDuration(),r)-t._tTime>Hn)&&t.render(r,!0)),wt(n,t)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(r=n;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;n._zTime=-1e-8}},Ma=function(n,t,r,e){return t.parent&&lt(t),t._start=Mn((Ya(r)?r:r||n!==Sn?ha(n,r,t):n._time)+t._delay),t._end=Mn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),up(n,t,"_first","_last",n._sort?"_start":0),gr(t)||(n._recent=t),e||hp(n,t),n._ts<0&&Ce(n,n._tTime),n},fp=function(n,t){return(da.ScrollTrigger||ao("scrollTrigger",t))&&da.ScrollTrigger.create(t,n)},mp=function(n,t,r,e,s){if(io(n,t,s),!n._initted)return 1;if(!r&&n._pt&&!Dn&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&ip!==oa.frame)return et.push(n),n._lazy=[s,e],1},Gh=function a(n){var t=n.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},gr=function(n){var t=n.data;return t==="isFromStart"||t==="isStart"},Wh=function(n,t,r,e){var s=n.ratio,o=t<0||!t&&(!n._start&&Gh(n)&&!(!n._initted&&gr(n))||(n._ts<0||n._dp._ts<0)&&!gr(n))?0:1,i=n._rDelay,l=0,c,d,u;if(i&&n._repeat&&(l=Fs(0,n._tDur,t),d=qt(l,i),n._yoyo&&d&1&&(o=1-o),d!==qt(n._tTime,i)&&(s=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==s||Dn||e||n._zTime===Hn||!t&&n._zTime){if(!n._initted&&mp(n,t,e,r,l))return;for(u=n._zTime,n._zTime=t||(r?Hn:0),r||(r=t&&!u),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=l,c=n._pt;c;)c.r(o,c.d),c=c._next;t<0&&mr(n,t,r,!0),n._onUpdate&&!r&&la(n,"onUpdate"),l&&n._repeat&&!r&&n.parent&&la(n,"onRepeat"),(t>=n._tDur||t<0)&&n.ratio===o&&(o&&lt(n,1),!r&&!Dn&&(la(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=t)},Hh=function(n,t,r){var e;if(r>t)for(e=n._first;e&&e._start<=r;){if(e.data==="isPause"&&e._start>t)return e;e=e._next}else for(e=n._last;e&&e._start>=r;){if(e.data==="isPause"&&e._start<t)return e;e=e._prev}},$t=function(n,t,r,e){var s=n._repeat,o=Mn(t)||0,i=n._tTime/n._tDur;return i&&!e&&(n._time*=o/n._dur),n._dur=o,n._tDur=s?s<0?1e10:Mn(o*(s+1)+n._rDelay*s):o,i>0&&!e&&Ce(n,n._tTime=n._tDur*i),n.parent&&Se(n),r||wt(n.parent,n),n},gi=function(n){return n instanceof Kn?wt(n):$t(n,n._dur)},Nh={_start:0,endTime:_s,totalDuration:_s},ha=function a(n,t,r){var e=n.labels,s=n._recent||Nh,o=n.duration()>=Ia?s.endTime(!1):n._dur,i,l,c;return zn(t)&&(isNaN(t)||t in e)?(l=t.charAt(0),c=t.substr(-1)==="%",i=t.indexOf("="),l==="<"||l===">"?(i>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(i<0?s:r).totalDuration()/100:1)):i<0?(t in e||(e[t]=o),e[t]):(l=parseFloat(t.charAt(i-1)+t.substr(i+1)),c&&r&&(l=l/100*(Vn(r)?r[0]:r).totalDuration()),i>1?a(n,t.substr(0,i-1),r)+l:o+l)):t==null?o:+t},fs=function(n,t,r){var e=Ya(t[1]),s=(e?2:1)+(n<2?0:1),o=t[s],i,l;if(e&&(o.duration=t[1]),o.parent=r,n){for(i=o,l=r;l&&!("immediateRender"in i);)i=l.vars.defaults||{},l=Qn(l.vars.inherit)&&l.parent;o.immediateRender=Qn(i.immediateRender),n<2?o.runBackwards=1:o.startAt=t[s-1]}return new An(t[0],o,t[s+1])},ct=function(n,t){return n||n===0?t(n):t},Fs=function(n,t,r){return r<n?n:r>t?t:r},Wn=function(n,t){return!zn(n)||!(t=Ih.exec(n))?"":t[1]},Vh=function(n,t,r){return ct(r,function(e){return Fs(n,t,e)})},yr=[].slice,gp=function(n,t){return n&&za(n)&&"length"in n&&(!t&&!n.length||n.length-1 in n&&za(n[0]))&&!n.nodeType&&n!==Pa},Yh=function(n,t,r){return r===void 0&&(r=[]),n.forEach(function(e){var s;return zn(e)&&!t||gp(e,1)?(s=r).push.apply(s,fa(e)):r.push(e)})||r},fa=function(n,t,r){return jn&&!t&&jn.selector?jn.selector(n):zn(n)&&!r&&(hr||!Xt())?yr.call((t||no).querySelectorAll(n),0):Vn(n)?Yh(n,r):gp(n)?yr.call(n,0):n?[n]:[]},kr=function(n){return n=fa(n)[0]||js("Invalid scope")||{},function(t){var r=n.current||n.nativeElement||n;return fa(t,r.querySelectorAll?r:r===n?js("Invalid scope")||no.createElement("div"):n)}},yp=function(n){return n.sort(function(){return .5-Math.random()})},kp=function(n){if(Tn(n))return n;var t=za(n)?n:{each:n},r=xt(t.ease),e=t.from||0,s=parseFloat(t.base)||0,o={},i=e>0&&e<1,l=isNaN(e)||i,c=t.axis,d=e,u=e;return zn(e)?d=u={center:.5,edges:.5,end:1}[e]||0:!i&&l&&(d=e[0],u=e[1]),function(f,p,m){var h=(m||t).length,g=o[h],k,v,j,_,y,w,x,b,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,Ia])[1],!S){for(x=-1e8;x<(x=m[S++].getBoundingClientRect().left)&&S<h;);S<h&&S--}for(g=o[h]=[],k=l?Math.min(S,h)*d-.5:e%S,v=S===Ia?0:l?h*u/S-.5:e/S|0,x=0,b=Ia,w=0;w<h;w++)j=w%S-k,_=v-(w/S|0),g[w]=y=c?Math.abs(c==="y"?_:j):Jl(j*j+_*_),y>x&&(x=y),y<b&&(b=y);e==="random"&&yp(g),g.max=x-b,g.min=b,g.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(S>h?h-1:c?c==="y"?h/S:S:Math.max(S,h/S))||0)*(e==="edges"?-1:1),g.b=h<0?s-h:s,g.u=Wn(t.amount||t.each)||0,r=r&&h<0?Pp(r):r}return h=(g[f]-g.min)/g.max||0,Mn(g.b+(r?r(h):h)*g.v)+g.u}},br=function(n){var t=Math.pow(10,((n+"").split(".")[1]||"").length);return function(r){var e=Mn(Math.round(parseFloat(r)/n)*n*t);return(e-e%1)/t+(Ya(r)?0:Wn(r))}},bp=function(n,t){var r=Vn(n),e,s;return!r&&za(n)&&(e=r=n.radius||Ia,n.values?(n=fa(n.values),(s=!Ya(n[0]))&&(e*=e)):n=br(n.increment)),ct(t,r?Tn(n)?function(o){return s=n(o),Math.abs(s-o)<=e?s:o}:function(o){for(var i=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ia,d=0,u=n.length,f,p;u--;)s?(f=n[u].x-i,p=n[u].y-l,f=f*f+p*p):f=Math.abs(n[u]-i),f<c&&(c=f,d=u);return d=!e||c<=e?n[d]:o,s||d===o||Ya(o)?d:d+Wn(o)}:br(n))},vp=function(n,t,r,e){return ct(Vn(n)?!t:r===!0?!!(r=0):!e,function(){return Vn(n)?n[~~(Math.random()*n.length)]:(r=r||1e-5)&&(e=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((n-r/2+Math.random()*(t-n+r*.99))/r)*r*e)/e})},qh=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(e){return t.reduce(function(s,o){return o(s)},e)}},$h=function(n,t){return function(r){return n(parseFloat(r))+(t||Wn(r))}},Xh=function(n,t,r){return xp(n,t,0,1,r)},wp=function(n,t,r){return ct(r,function(e){return n[~~t(e)]})},Kh=function a(n,t,r){var e=t-n;return Vn(n)?wp(n,a(0,n.length),t):ct(r,function(s){return(e+(s-n)%e)%e+n})},Zh=function a(n,t,r){var e=t-n,s=e*2;return Vn(n)?wp(n,a(0,n.length-1),t):ct(r,function(o){return o=(s+(o-n)%s)%s||0,n+(o>e?s-o:o)})},Ss=function(n){for(var t=0,r="",e,s,o,i;~(e=n.indexOf("random(",t));)o=n.indexOf(")",e),i=n.charAt(e+7)==="[",s=n.substr(e+7,o-e-7).match(i?sp:ur),r+=n.substr(t,e-t)+vp(i?s:+s[0],i?0:+s[1],+s[2]||1e-5),t=o+1;return r+n.substr(t,n.length-t)},xp=function(n,t,r,e,s){var o=t-n,i=e-r;return ct(s,function(l){return r+((l-n)/o*i||0)})},Qh=function a(n,t,r,e){var s=isNaN(n+t)?0:function(p){return(1-p)*n+p*t};if(!s){var o=zn(n),i={},l,c,d,u,f;if(r===!0&&(e=1)&&(r=null),o)n={p:n},t={p:t};else if(Vn(n)&&!Vn(t)){for(d=[],u=n.length,f=u-2,c=1;c<u;c++)d.push(a(n[c-1],n[c]));u--,s=function(m){m*=u;var h=Math.min(f,~~m);return d[h](m-h)},r=t}else e||(n=Yt(Vn(n)?[]:{},n));if(!d){for(l in t)oo.call(i,n,l,"get",t[l]);s=function(m){return co(m,i)||(o?n.p:n)}}}return ct(r,s)},yi=function(n,t,r){var e=n.labels,s=Ia,o,i,l;for(o in e)i=e[o]-t,i<0==!!r&&i&&s>(i=Math.abs(i))&&(l=o,s=i);return l},la=function(n,t,r){var e=n.vars,s=e[t],o=jn,i=n._ctx,l,c,d;if(s)return l=e[t+"Params"],c=e.callbackScope||n,r&&et.length&&re(),i&&(jn=i),d=l?s.apply(c,l):s.call(c),jn=o,d},ss=function(n){return lt(n),n.scrollTrigger&&n.scrollTrigger.kill(!!Dn),n.progress()<1&&la(n,"onInterrupt"),n},Et,jp=[],_p=function(n){if(n)if(n=!n.name&&n.default||n,Jr()||n.headless){var t=n.name,r=Tn(n),e=t&&!r&&n.init?function(){this._props=[]}:n,s={init:_s,render:co,add:oo,kill:mf,modifier:ff,rawVars:0},o={targetTest:0,get:0,getSetter:po,aliases:{},register:0};if(Xt(),n!==e){if(ra[t])return;ca(e,ca(oe(n,s),o)),Yt(e.prototype,Yt(s,oe(n,o))),ra[e.prop=t]=e,n.targetTest&&(qs.push(e),to[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}op(t,e),n.register&&n.register(ta,e,na)}else jp.push(n)},bn=255,es={aqua:[0,bn,bn],lime:[0,bn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bn],navy:[0,0,128],white:[bn,bn,bn],olive:[128,128,0],yellow:[bn,bn,0],orange:[bn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bn,0,0],pink:[bn,192,203],cyan:[0,bn,bn],transparent:[bn,bn,bn,0]},Ne=function(n,t,r){return n+=n<0?1:n>1?-1:0,(n*6<1?t+(r-t)*n*6:n<.5?r:n*3<2?t+(r-t)*(2/3-n)*6:t)*bn+.5|0},Sp=function(n,t,r){var e=n?Ya(n)?[n>>16,n>>8&bn,n&bn]:0:es.black,s,o,i,l,c,d,u,f,p,m;if(!e){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),es[n])e=es[n];else if(n.charAt(0)==="#"){if(n.length<6&&(s=n.charAt(1),o=n.charAt(2),i=n.charAt(3),n="#"+s+s+o+o+i+i+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return e=parseInt(n.substr(1,6),16),[e>>16,e>>8&bn,e&bn,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),e=[n>>16,n>>8&bn,n&bn]}else if(n.substr(0,3)==="hsl"){if(e=m=n.match(ur),!t)l=+e[0]%360/360,c=+e[1]/100,d=+e[2]/100,o=d<=.5?d*(c+1):d+c-d*c,s=d*2-o,e.length>3&&(e[3]*=1),e[0]=Ne(l+1/3,s,o),e[1]=Ne(l,s,o),e[2]=Ne(l-1/3,s,o);else if(~n.indexOf("="))return e=n.match(ap),r&&e.length<4&&(e[3]=1),e}else e=n.match(ur)||es.transparent;e=e.map(Number)}return t&&!m&&(s=e[0]/bn,o=e[1]/bn,i=e[2]/bn,u=Math.max(s,o,i),f=Math.min(s,o,i),d=(u+f)/2,u===f?l=c=0:(p=u-f,c=d>.5?p/(2-u-f):p/(u+f),l=u===s?(o-i)/p+(o<i?6:0):u===o?(i-s)/p+2:(s-o)/p+4,l*=60),e[0]=~~(l+.5),e[1]=~~(c*100+.5),e[2]=~~(d*100+.5)),r&&e.length<4&&(e[3]=1),e},Cp=function(n){var t=[],r=[],e=-1;return n.split(rt).forEach(function(s){var o=s.match(Rt)||[];t.push.apply(t,o),r.push(e+=o.length+1)}),t.c=r,t},ki=function(n,t,r){var e="",s=(n+e).match(rt),o=t?"hsla(":"rgba(",i=0,l,c,d,u;if(!s)return n;if(s=s.map(function(f){return(f=Sp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),r&&(d=Cp(n),l=r.c,l.join(e)!==d.c.join(e)))for(c=n.replace(rt,"1").split(Rt),u=c.length-1;i<u;i++)e+=c[i]+(~l.indexOf(i)?s.shift()||o+"0,0,0,0)":(d.length?d:s.length?s:r).shift());if(!c)for(c=n.split(rt),u=c.length-1;i<u;i++)e+=c[i]+s[i];return e+c[u]},rt=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in es)a+="|"+n+"\\b";return new RegExp(a+")","gi")}(),Jh=/hsl[a]?\(/,Tp=function(n){var t=n.join(" "),r;if(rt.lastIndex=0,rt.test(t))return r=Jh.test(t),n[1]=ki(n[1],r),n[0]=ki(n[0],r,Cp(n[1])),!0},Cs,oa=function(){var a=Date.now,n=500,t=33,r=a(),e=r,s=1e3/240,o=s,i=[],l,c,d,u,f,p,m=function h(g){var k=a()-e,v=g===!0,j,_,y,w;if((k>n||k<0)&&(r+=k-t),e+=k,y=e-r,j=y-o,(j>0||v)&&(w=++u.frame,f=y-u.time*1e3,u.time=y=y/1e3,o+=j+(j>=s?4:s-j),_=1),v||(l=c(h)),_)for(p=0;p<i.length;p++)i[p](y,f,w,g)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){ep&&(!hr&&Jr()&&(Pa=hr=window,no=Pa.document||{},da.gsap=ta,(Pa.gsapVersions||(Pa.gsapVersions=[])).push(ta.version),rp(ee||Pa.GreenSockGlobals||!Pa.gsap&&Pa||{}),jp.forEach(_p)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=d||function(g){return setTimeout(g,o-u.time*1e3+1|0)},Cs=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),Cs=0,c=_s},lagSmoothing:function(g,k){n=g||1/0,t=Math.min(k||33,n)},fps:function(g){s=1e3/(g||240),o=u.time*1e3+s},add:function(g,k,v){var j=k?function(_,y,w,x){g(_,y,w,x),u.remove(j)}:g;return u.remove(g),i[v?"unshift":"push"](j),Xt(),j},remove:function(g,k){~(k=i.indexOf(g))&&i.splice(k,1)&&p>=k&&p--},_listeners:i},u}(),Xt=function(){return!Cs&&oa.wake()},hn={},nf=/^[\d.\-M][\d.\-,\s]/,af=/["']/g,tf=function(n){for(var t={},r=n.substr(1,n.length-3).split(":"),e=r[0],s=1,o=r.length,i,l,c;s<o;s++)l=r[s],i=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,i),t[e]=isNaN(c)?c.replace(af,"").trim():+c,e=l.substr(i+1).trim();return t},sf=function(n){var t=n.indexOf("(")+1,r=n.indexOf(")"),e=n.indexOf("(",t);return n.substring(t,~e&&e<r?n.indexOf(")",r+1):r)},ef=function(n){var t=(n+"").split("("),r=hn[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~n.indexOf("{")?[tf(t[1])]:sf(n).split(",").map(dp)):hn._CE&&nf.test(n)?hn._CE("",n):r},Pp=function(n){return function(t){return 1-n(1-t)}},Ap=function a(n,t){for(var r=n._first,e;r;)r instanceof Kn?a(r,t):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==t&&(r.timeline?a(r.timeline,t):(e=r._ease,r._ease=r._yEase,r._yEase=e,r._yoyo=t)),r=r._next},xt=function(n,t){return n&&(Tn(n)?n:hn[n]||ef(n))||t},Ct=function(n,t,r,e){r===void 0&&(r=function(l){return 1-t(1-l)}),e===void 0&&(e=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:r,easeInOut:e},o;return Jn(n,function(i){hn[i]=da[i]=s,hn[o=i.toLowerCase()]=r;for(var l in s)hn[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=hn[i+"."+l]=s[l]}),s},Mp=function(n){return function(t){return t<.5?(1-n(1-t*2))/2:.5+n((t-.5)*2)/2}},Ve=function a(n,t,r){var e=t>=1?t:1,s=(r||(n?.3:.45))/(t<1?t:1),o=s/cr*(Math.asin(1/e)||0),i=function(d){return d===1?1:e*Math.pow(2,-10*d)*Eh((d-o)*s)+1},l=n==="out"?i:n==="in"?function(c){return 1-i(1-c)}:Mp(i);return s=cr/s,l.config=function(c,d){return a(n,c,d)},l},Ye=function a(n,t){t===void 0&&(t=1.70158);var r=function(o){return o?--o*o*((t+1)*o+t)+1:0},e=n==="out"?r:n==="in"?function(s){return 1-r(1-s)}:Mp(r);return e.config=function(s){return a(n,s)},e};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,n){var t=n<5?n+1:n;Ct(a+",Power"+(t-1),n?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});hn.Linear.easeNone=hn.none=hn.Linear.easeIn;Ct("Elastic",Ve("in"),Ve("out"),Ve());(function(a,n){var t=1/n,r=2*t,e=2.5*t,s=function(i){return i<t?a*i*i:i<r?a*Math.pow(i-1.5/n,2)+.75:i<e?a*(i-=2.25/n)*i+.9375:a*Math.pow(i-2.625/n,2)+.984375};Ct("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ct("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Ct("Circ",function(a){return-(Jl(1-a*a)-1)});Ct("Sine",function(a){return a===1?1:-Rh(a*Ah)+1});Ct("Back",Ye("in"),Ye("out"),Ye());hn.SteppedEase=hn.steps=da.SteppedEase={config:function(n,t){n===void 0&&(n=1);var r=1/n,e=n+(t?0:1),s=t?1:0,o=1-Hn;return function(i){return((e*Fs(0,o,i)|0)+s)*r}}};Vt.ease=hn["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return so+=a+","+a+"Params,"});var Rp=function(n,t){this.id=Mh++,n._gsap=this,this.target=n,this.harness=t,this.get=t?t.get:lp,this.set=t?t.getSetter:po},Ts=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$t(this,+t.duration,1,1),this.data=t.data,jn&&(this._ctx=jn,jn.data.push(this)),Cs||oa.wake()}var n=a.prototype;return n.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},n.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},n.totalDuration=function(r){return arguments.length?(this._dirty=0,$t(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(r,e){if(Xt(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ce(this,r),!s._dp||s.parent||hp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Ma(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===Hn||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),pp(this,r,e)),this},n.time=function(r,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+mi(this))%(this._dur+this._rDelay)||(r?this._dur:0),e):this._time},n.totalProgress=function(r,e){return arguments.length?this.totalTime(this.totalDuration()*r,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(r,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+mi(this),e):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(r,e){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,e):this._repeat?qt(this._tTime,s)+1:1},n.timeScale=function(r,e){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?ie(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(Fs(-Math.abs(this._delay),this.totalDuration(),s),e!==!1),Se(this),Lh(this)},n.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Hn&&(this._tTime-=Hn)))),this):this._ps},n.startTime=function(r){if(arguments.length){this._start=r;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&Ma(e,this,r-this._delay),this}return this._start},n.endTime=function(r){return this._start+(Qn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(r){var e=this.parent||this._dp;return e?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ie(e.rawTime(r),this):this._tTime:this._tTime},n.revert=function(r){r===void 0&&(r=zh);var e=Dn;return Dn=r,ro(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Dn=e,this},n.globalTime=function(r){for(var e=this,s=arguments.length?r:e.rawTime();e;)s=e._start+s/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(r):s},n.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,gi(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(r){if(arguments.length){var e=this._time;return this._rDelay=r,gi(this),e?this.time(e):this}return this._rDelay},n.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},n.seek=function(r,e){return this.totalTime(ha(this,r),Qn(e))},n.restart=function(r,e){return this.play().totalTime(r?-this._delay:0,Qn(e)),this._dur||(this._zTime=-1e-8),this},n.play=function(r,e){return r!=null&&this.seek(r,e),this.reversed(!1).paused(!1)},n.reverse=function(r,e){return r!=null&&this.seek(r||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.pause=function(r,e){return r!=null&&this.seek(r,e),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},n.isActive=function(){var r=this.parent||this._dp,e=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=e&&s<this.endTime(!0)-Hn)},n.eventCallback=function(r,e,s){var o=this.vars;return arguments.length>1?(e?(o[r]=e,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=e)):delete o[r],this):o[r]},n.then=function(r){var e=this;return new Promise(function(s){var o=Tn(r)?r:cp,i=function(){var c=e.then;e.then=null,Tn(o)&&(o=o(e))&&(o.then||o===e)&&(e.then=c),s(o),e.then=c};e._initted&&e.totalProgress()===1&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i})},n.kill=function(){ss(this)},a}();ca(Ts.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Kn=function(a){Ql(n,a);function n(r,e){var s;return r===void 0&&(r={}),s=a.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=Qn(r.sortChildren),Sn&&Ma(r.parent||Sn,La(s),e),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&fp(La(s),r.scrollTrigger),s}var t=n.prototype;return t.to=function(e,s,o){return fs(0,arguments,this),this},t.from=function(e,s,o){return fs(1,arguments,this),this},t.fromTo=function(e,s,o,i){return fs(2,arguments,this),this},t.set=function(e,s,o){return s.duration=0,s.parent=this,hs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new An(e,s,ha(this,o),1),this},t.call=function(e,s,o){return Ma(this,An.delayedCall(0,e,s),o)},t.staggerTo=function(e,s,o,i,l,c,d){return o.duration=s,o.stagger=o.stagger||i,o.onComplete=c,o.onCompleteParams=d,o.parent=this,new An(e,o,ha(this,l)),this},t.staggerFrom=function(e,s,o,i,l,c,d){return o.runBackwards=1,hs(o).immediateRender=Qn(o.immediateRender),this.staggerTo(e,s,o,i,l,c,d)},t.staggerFromTo=function(e,s,o,i,l,c,d,u){return i.startAt=o,hs(i).immediateRender=Qn(i.immediateRender),this.staggerTo(e,s,i,l,c,d,u)},t.render=function(e,s,o){var i=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=e<=0?0:Mn(e),u=this._zTime<0!=e<0&&(this._initted||!c),f,p,m,h,g,k,v,j,_,y,w,x;if(this!==Sn&&d>l&&e>=0&&(d=l),d!==this._tTime||o||u){if(i!==this._time&&c&&(d+=this._time-i,e+=this._time-i),f=d,_=this._start,j=this._ts,k=!j,u&&(c||(i=this._zTime),(e||!s)&&(this._zTime=e)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(g*100+e,s,o);if(f=Mn(d%g),d===l?(h=this._repeat,f=c):(y=Mn(d/g),h=~~y,h&&h===y&&(f=c,h--),f>c&&(f=c)),y=qt(this._tTime,g),!i&&this._tTime&&y!==h&&this._tTime-y*g-this._dur<=0&&(y=h),w&&h&1&&(f=c-f,x=1),h!==y&&!this._lock){var b=w&&y&1,S=b===(w&&h&1);if(h<y&&(b=!b),i=b?0:d%c?c:d,this._lock=1,this.render(i||(x?0:Mn(h*g)),s,!c)._lock=0,this._tTime=d,!s&&this.parent&&la(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1),i&&i!==this._time||k!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,i=b?c:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!k)return this;Ap(this,x)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Hh(this,Mn(i),Mn(f)),v&&(d-=f-(f=v._start))),this._tTime=d,this._time=f,this._act=!j,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,i=0),!i&&d&&!s&&!y&&(la(this,"onStart"),this._tTime!==d))return this;if(f>=i&&e>=0)for(p=this._first;p;){if(m=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(e,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!k){v=0,m&&(d+=this._zTime=-1e-8);break}}p=m}else{p=this._last;for(var T=e<0?e:f;p;){if(m=p._prev,(p._act||T<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(e,s,o);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,o||Dn&&ro(p)),f!==this._time||!this._ts&&!k){v=0,m&&(d+=this._zTime=T?-1e-8:Hn);break}}p=m}}if(v&&!s&&(this.pause(),v.render(f>=i?0:-1e-8)._zTime=f>=i?1:-1,this._ts))return this._start=_,Se(this),this.render(e,s,o);this._onUpdate&&!s&&la(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&i)&&(_===this._start||Math.abs(j)!==Math.abs(this._ts))&&(this._lock||((e||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&lt(this,1),!s&&!(e<0&&!i)&&(d||i||!l)&&(la(this,d===l&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(e,s){var o=this;if(Ya(s)||(s=ha(this,s,e)),!(e instanceof Ts)){if(Vn(e))return e.forEach(function(i){return o.add(i,s)}),this;if(zn(e))return this.addLabel(e,s);if(Tn(e))e=An.delayedCall(0,e);else return this}return this!==e?Ma(this,e,s):this},t.getChildren=function(e,s,o,i){e===void 0&&(e=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),i===void 0&&(i=-1e8);for(var l=[],c=this._first;c;)c._start>=i&&(c instanceof An?s&&l.push(c):(o&&l.push(c),e&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(e){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===e)return s[o]},t.remove=function(e){return zn(e)?this.removeLabel(e):Tn(e)?this.killTweensOf(e):(e.parent===this&&_e(this,e),e===this._recent&&(this._recent=this._last),wt(this))},t.totalTime=function(e,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mn(oa.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),a.prototype.totalTime.call(this,e,s),this._forcing=0,this):this._tTime},t.addLabel=function(e,s){return this.labels[e]=ha(this,s),this},t.removeLabel=function(e){return delete this.labels[e],this},t.addPause=function(e,s,o){var i=An.delayedCall(0,s||_s,o);return i.data="isPause",this._hasPause=1,Ma(this,i,ha(this,e))},t.removePause=function(e){var s=this._first;for(e=ha(this,e);s;)s._start===e&&s.data==="isPause"&&lt(s),s=s._next},t.killTweensOf=function(e,s,o){for(var i=this.getTweensOf(e,o),l=i.length;l--;)nt!==i[l]&&i[l].kill(e,s);return this},t.getTweensOf=function(e,s){for(var o=[],i=fa(e),l=this._first,c=Ya(s),d;l;)l instanceof An?Oh(l._targets,i)&&(c?(!nt||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(d=l.getTweensOf(i,s)).length&&o.push.apply(o,d),l=l._next;return o},t.tweenTo=function(e,s){s=s||{};var o=this,i=ha(o,e),l=s,c=l.startAt,d=l.onStart,u=l.onStartParams,f=l.immediateRender,p,m=An.to(o,ca({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:s.duration||Math.abs((i-(c&&"time"in c?c.time:o._time))/o.timeScale())||Hn,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((i-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&$t(m,g,0,1).render(m._time,!0,!0),p=1}d&&d.apply(m,u||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(e,s,o){return this.tweenTo(s,ca({startAt:{time:ha(this,e)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(e){return e===void 0&&(e=this._time),yi(this,ha(this,e))},t.previousLabel=function(e){return e===void 0&&(e=this._time),yi(this,ha(this,e),1)},t.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Hn)},t.shiftChildren=function(e,s,o){o===void 0&&(o=0);for(var i=this._first,l=this.labels,c;i;)i._start>=o&&(i._start+=e,i._end+=e),i=i._next;if(s)for(c in l)l[c]>=o&&(l[c]+=e);return wt(this)},t.invalidate=function(e){var s=this._first;for(this._lock=0;s;)s.invalidate(e),s=s._next;return a.prototype.invalidate.call(this,e)},t.clear=function(e){e===void 0&&(e=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),wt(this)},t.totalDuration=function(e){var s=0,o=this,i=o._last,l=Ia,c,d,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-e:e));if(o._dirty){for(u=o.parent;i;)c=i._prev,i._dirty&&i.totalDuration(),d=i._start,d>l&&o._sort&&i._ts&&!o._lock?(o._lock=1,Ma(o,i,d-i._delay,1)._lock=0):l=d,d<0&&i._ts&&(s-=d,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=d/o._ts,o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),l=0),i._end>s&&i._ts&&(s=i._end),i=c;$t(o,o===Sn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},n.updateRoot=function(e){if(Sn._ts&&(pp(Sn,ie(e,Sn)),ip=oa.frame),oa.frame>=hi){hi+=pa.autoSleep||120;var s=Sn._first;if((!s||!s._ts)&&pa.autoSleep&&oa._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||oa.sleep()}}},n}(Ts);ca(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var rf=function(n,t,r,e,s,o,i){var l=new na(this._pt,n,t,0,1,Dp,null,s),c=0,d=0,u,f,p,m,h,g,k,v;for(l.b=r,l.e=e,r+="",e+="",(k=~e.indexOf("random("))&&(e=Ss(e)),o&&(v=[r,e],o(v,n,t),r=v[0],e=v[1]),f=r.match(We)||[];u=We.exec(e);)m=u[0],h=e.substring(c,u.index),p?p=(p+1)%5:h.substr(-5)==="rgba("&&(p=1),m!==f[d++]&&(g=parseFloat(f[d-1])||0,l._pt={_next:l._pt,p:h||d===1?h:",",s:g,c:m.charAt(1)==="="?Lt(g,m)-g:parseFloat(m)-g,m:p&&p<4?Math.round:0},c=We.lastIndex);return l.c=c<e.length?e.substring(c,e.length):"",l.fp=i,(tp.test(e)||k)&&(l.e=0),this._pt=l,l},oo=function(n,t,r,e,s,o,i,l,c,d){Tn(e)&&(e=e(s||0,n,o));var u=n[t],f=r!=="get"?r:Tn(u)?c?n[t.indexOf("set")||!Tn(n["get"+t.substr(3)])?t:"get"+t.substr(3)](c):n[t]():u,p=Tn(u)?c?cf:zp:lo,m;if(zn(e)&&(~e.indexOf("random(")&&(e=Ss(e)),e.charAt(1)==="="&&(m=Lt(f,e)+(Wn(f)||0),(m||m===0)&&(e=m))),!d||f!==e||vr)return!isNaN(f*e)&&e!==""?(m=new na(this._pt,n,t,+f||0,e-(f||0),typeof u=="boolean"?hf:Op,0,p),c&&(m.fp=c),i&&m.modifier(i,this,n),this._pt=m):(!u&&!(t in n)&&ao(t,e),rf.call(this,n,t,f,e,p,l||pa.stringFilter,c))},of=function(n,t,r,e,s){if(Tn(n)&&(n=ms(n,s,t,r,e)),!za(n)||n.style&&n.nodeType||Vn(n)||np(n))return zn(n)?ms(n,s,t,r,e):n;var o={},i;for(i in n)o[i]=ms(n[i],s,t,r,e);return o},Ep=function(n,t,r,e,s,o){var i,l,c,d;if(ra[n]&&(i=new ra[n]).init(s,i.rawVars?t[n]:of(t[n],e,s,o,r),r,e,o)!==!1&&(r._pt=l=new na(r._pt,s,n,0,1,i.render,i,0,i.priority),r!==Et))for(c=r._ptLookup[r._targets.indexOf(s)],d=i._props.length;d--;)c[i._props[d]]=l;return i},nt,vr,io=function a(n,t,r){var e=n.vars,s=e.ease,o=e.startAt,i=e.immediateRender,l=e.lazy,c=e.onUpdate,d=e.runBackwards,u=e.yoyoEase,f=e.keyframes,p=e.autoRevert,m=n._dur,h=n._startAt,g=n._targets,k=n.parent,v=k&&k.data==="nested"?k.vars.targets:g,j=n._overwrite==="auto"&&!Zr,_=n.timeline,y,w,x,b,S,T,P,C,E,I,O,U,D;if(_&&(!f||!s)&&(s="none"),n._ease=xt(s,Vt.ease),n._yEase=u?Pp(xt(u===!0?s:u,Vt.ease)):0,u&&n._yoyo&&!n._repeat&&(u=n._yEase,n._yEase=n._ease,n._ease=u),n._from=!_&&!!e.runBackwards,!_||f&&!e.stagger){if(C=g[0]?vt(g[0]).harness:0,U=C&&e[C.prop],y=oe(e,to),h&&(h._zTime<0&&h.progress(1),t<0&&d&&i&&!p?h.render(-1,!0):h.revert(d&&m?Ys:Fh),h._lazy=0),o){if(lt(n._startAt=An.set(g,ca({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!h&&Qn(l),startAt:null,delay:0,onUpdate:c&&function(){return la(n,"onUpdate")},stagger:0},o))),n._startAt._dp=0,n._startAt._sat=n,t<0&&(Dn||!i&&!p)&&n._startAt.revert(Ys),i&&m&&t<=0&&r<=0){t&&(n._zTime=t);return}}else if(d&&m&&!h){if(t&&(i=!1),x=ca({overwrite:!1,data:"isFromStart",lazy:i&&!h&&Qn(l),immediateRender:i,stagger:0,parent:k},y),U&&(x[C.prop]=U),lt(n._startAt=An.set(g,x)),n._startAt._dp=0,n._startAt._sat=n,t<0&&(Dn?n._startAt.revert(Ys):n._startAt.render(-1,!0)),n._zTime=t,!i)a(n._startAt,Hn,Hn);else if(!t)return}for(n._pt=n._ptCache=0,l=m&&Qn(l)||l&&!m,w=0;w<g.length;w++){if(S=g[w],P=S._gsap||eo(g)[w]._gsap,n._ptLookup[w]=I={},fr[P.id]&&et.length&&re(),O=v===g?w:v.indexOf(S),C&&(E=new C).init(S,U||y,n,O,v)!==!1&&(n._pt=b=new na(n._pt,S,E.name,0,1,E.render,E,0,E.priority),E._props.forEach(function(N){I[N]=b}),E.priority&&(T=1)),!C||U)for(x in y)ra[x]&&(E=Ep(x,y,n,O,S,v))?E.priority&&(T=1):I[x]=b=oo.call(n,S,x,"get",y[x],O,v,0,e.stringFilter);n._op&&n._op[w]&&n.kill(S,n._op[w]),j&&n._pt&&(nt=n,Sn.killTweensOf(S,I,n.globalTime(t)),D=!n.parent,nt=0),n._pt&&l&&(fr[P.id]=1)}T&&Bp(n),n._onInit&&n._onInit(n)}n._onUpdate=c,n._initted=(!n._op||n._pt)&&!D,f&&t<=0&&_.render(Ia,!0,!0)},lf=function(n,t,r,e,s,o,i,l){var c=(n._pt&&n._ptCache||(n._ptCache={}))[t],d,u,f,p;if(!c)for(c=n._ptCache[t]=[],f=n._ptLookup,p=n._targets.length;p--;){if(d=f[p][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return vr=1,n.vars[t]="+=0",io(n,i),vr=0,l?js(t+" not eligible for reset"):1;c.push(d)}for(p=c.length;p--;)u=c[p],d=u._pt||u,d.s=(e||e===0)&&!s?e:d.s+(e||0)+o*d.c,d.c=r-d.s,u.e&&(u.e=Pn(r)+Wn(u.e)),u.b&&(u.b=d.s+Wn(u.b))},pf=function(n,t){var r=n[0]?vt(n[0]).harness:0,e=r&&r.aliases,s,o,i,l;if(!e)return t;s=Yt({},t);for(o in e)if(o in s)for(l=e[o].split(","),i=l.length;i--;)s[l[i]]=s[o];return s},df=function(n,t,r,e){var s=t.ease||e||"power1.inOut",o,i;if(Vn(t))i=r[n]||(r[n]=[]),t.forEach(function(l,c){return i.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)i=r[o]||(r[o]=[]),o==="ease"||i.push({t:parseFloat(n),v:t[o],e:s})},ms=function(n,t,r,e,s){return Tn(n)?n.call(t,r,e,s):zn(n)&&~n.indexOf("random(")?Ss(n):n},Ip=so+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fp={};Jn(Ip+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Fp[a]=1});var An=function(a){Ql(n,a);function n(r,e,s,o){var i;typeof e=="number"&&(s.duration=e,e=s,s=null),i=a.call(this,o?e:hs(e))||this;var l=i.vars,c=l.duration,d=l.delay,u=l.immediateRender,f=l.stagger,p=l.overwrite,m=l.keyframes,h=l.defaults,g=l.scrollTrigger,k=l.yoyoEase,v=e.parent||Sn,j=(Vn(r)||np(r)?Ya(r[0]):"length"in e)?[r]:fa(r),_,y,w,x,b,S,T,P;if(i._targets=j.length?eo(j):js("GSAP target "+r+" not found. https://gsap.com",!pa.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=p,m||f||Bs(c)||Bs(d)){if(e=i.vars,_=i.timeline=new Kn({data:"nested",defaults:h||{},targets:v&&v.data==="nested"?v.vars.targets:j}),_.kill(),_.parent=_._dp=La(i),_._start=0,f||Bs(c)||Bs(d)){if(x=j.length,T=f&&kp(f),za(f))for(b in f)~Ip.indexOf(b)&&(P||(P={}),P[b]=f[b]);for(y=0;y<x;y++)w=oe(e,Fp),w.stagger=0,k&&(w.yoyoEase=k),P&&Yt(w,P),S=j[y],w.duration=+ms(c,La(i),y,S,j),w.delay=(+ms(d,La(i),y,S,j)||0)-i._delay,!f&&x===1&&w.delay&&(i._delay=d=w.delay,i._start+=d,w.delay=0),_.to(S,w,T?T(y,S,j):0),_._ease=hn.none;_.duration()?c=d=0:i.timeline=0}else if(m){hs(ca(_.vars.defaults,{ease:"none"})),_._ease=xt(m.ease||e.ease||"none");var C=0,E,I,O;if(Vn(m))m.forEach(function(U){return _.to(j,U,">")}),_.duration();else{w={};for(b in m)b==="ease"||b==="easeEach"||df(b,m[b],w,m.easeEach);for(b in w)for(E=w[b].sort(function(U,D){return U.t-D.t}),C=0,y=0;y<E.length;y++)I=E[y],O={ease:I.e,duration:(I.t-(y?E[y-1].t:0))/100*c},O[b]=I.v,_.to(j,O,C),C+=O.duration;_.duration()<c&&_.to({},{duration:c-_.duration()})}}c||i.duration(c=_.duration())}else i.timeline=0;return p===!0&&!Zr&&(nt=La(i),Sn.killTweensOf(j),nt=0),Ma(v,La(i),s),e.reversed&&i.reverse(),e.paused&&i.paused(!0),(u||!c&&!m&&i._start===Mn(v._time)&&Qn(u)&&Uh(La(i))&&v.data!=="nested")&&(i._tTime=-1e-8,i.render(Math.max(0,-d)||0)),g&&fp(La(i),g),i}var t=n.prototype;return t.render=function(e,s,o){var i=this._time,l=this._tDur,c=this._dur,d=e<0,u=e>l-Hn&&!d?l:e<Hn?0:e,f,p,m,h,g,k,v,j,_;if(!c)Wh(this,e,s,o);else if(u!==this._tTime||!e||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(f=u,j=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+e,s,o);if(f=Mn(u%h),u===l?(m=this._repeat,f=c):(g=Mn(u/h),m=~~g,m&&m===g?(f=c,m--):f>c&&(f=c)),k=this._yoyo&&m&1,k&&(_=this._yEase,f=c-f),g=qt(this._tTime,h),f===i&&!o&&this._initted&&m===g)return this._tTime=u,this;m!==g&&(j&&this._yEase&&Ap(j,k),this.vars.repeatRefresh&&!k&&!this._lock&&f!==h&&this._initted&&(this._lock=o=1,this.render(Mn(h*m),!0).invalidate()._lock=0))}if(!this._initted){if(mp(this,d?e:f,o,s,u))return this._tTime=0,this;if(i!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(e,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(_||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!i&&u&&!s&&!g&&(la(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;j&&j.render(e<0?e:j._dur*j._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=e),this._onUpdate&&!s&&(d&&mr(this,e,s,o),la(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&la(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(d&&!this._onUpdate&&mr(this,e,!0,!0),(e||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&lt(this,1),!s&&!(d&&!i)&&(u||i||k)&&(la(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),a.prototype.invalidate.call(this,e)},t.resetTo=function(e,s,o,i,l){Cs||oa.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||io(this,c),d=this._ease(c/this._dur),lf(this,e,s,o,i,d,c,l)?this.resetTo(e,s,o,i,1):(Ce(this,0),this.parent||up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(e,s){if(s===void 0&&(s="all"),!e&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ss(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(e,s,nt&&nt.vars.overwrite!==!0)._first||ss(this),this.parent&&o!==this.timeline.totalDuration()&&$t(this,this._dur*this.timeline._tDur/o,0,1),this}var i=this._targets,l=e?fa(e):i,c=this._ptLookup,d=this._pt,u,f,p,m,h,g,k;if((!s||s==="all")&&Bh(i,l))return s==="all"&&(this._pt=0),ss(this);for(u=this._op=this._op||[],s!=="all"&&(zn(s)&&(h={},Jn(s,function(v){return h[v]=1}),s=h),s=pf(i,s)),k=i.length;k--;)if(~l.indexOf(i[k])){f=c[k],s==="all"?(u[k]=s,m=f,p={}):(p=u[k]=u[k]||{},m=s);for(h in m)g=f&&f[h],g&&((!("kill"in g.d)||g.d.kill(h)===!0)&&_e(this,g,"_pt"),delete f[h]),p!=="all"&&(p[h]=1)}return this._initted&&!this._pt&&d&&ss(this),this},n.to=function(e,s){return new n(e,s,arguments[2])},n.from=function(e,s){return fs(1,arguments)},n.delayedCall=function(e,s,o,i){return new n(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:i})},n.fromTo=function(e,s,o){return fs(2,arguments)},n.set=function(e,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new n(e,s)},n.killTweensOf=function(e,s,o){return Sn.killTweensOf(e,s,o)},n}(Ts);ca(An.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(a){An[a]=function(){var n=new Kn,t=yr.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),n[a].apply(n,t)}});var lo=function(n,t,r){return n[t]=r},zp=function(n,t,r){return n[t](r)},cf=function(n,t,r,e){return n[t](e.fp,r)},uf=function(n,t,r){return n.setAttribute(t,r)},po=function(n,t){return Tn(n[t])?zp:Qr(n[t])&&n.setAttribute?uf:lo},Op=function(n,t){return t.set(t.t,t.p,Math.round((t.s+t.c*n)*1e6)/1e6,t)},hf=function(n,t){return t.set(t.t,t.p,!!(t.s+t.c*n),t)},Dp=function(n,t){var r=t._pt,e="";if(!n&&t.b)e=t.b;else if(n===1&&t.e)e=t.e;else{for(;r;)e=r.p+(r.m?r.m(r.s+r.c*n):Math.round((r.s+r.c*n)*1e4)/1e4)+e,r=r._next;e+=t.c}t.set(t.t,t.p,e,t)},co=function(n,t){for(var r=t._pt;r;)r.r(n,r.d),r=r._next},ff=function(n,t,r,e){for(var s=this._pt,o;s;)o=s._next,s.p===e&&s.modifier(n,t,r),s=o},mf=function(n){for(var t=this._pt,r,e;t;)e=t._next,t.p===n&&!t.op||t.op===n?_e(this,t,"_pt"):t.dep||(r=1),t=e;return!r},gf=function(n,t,r,e){e.mSet(n,t,e.m.call(e.tween,r,e.mt),e)},Bp=function(n){for(var t=n._pt,r,e,s,o;t;){for(r=t._next,e=s;e&&e.pr>t.pr;)e=e._next;(t._prev=e?e._prev:o)?t._prev._next=t:s=t,(t._next=e)?e._prev=t:o=t,t=r}n._pt=s},na=function(){function a(t,r,e,s,o,i,l,c,d){this.t=r,this.s=s,this.c=o,this.p=e,this.r=i||Op,this.d=l||this,this.set=c||lo,this.pr=d||0,this._next=t,t&&(t._prev=this)}var n=a.prototype;return n.modifier=function(r,e,s){this.mSet=this.mSet||this.set,this.set=gf,this.m=r,this.mt=s,this.tween=e},a}();Jn(so+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return to[a]=1});da.TweenMax=da.TweenLite=An;da.TimelineLite=da.TimelineMax=Kn;Sn=new Kn({sortChildren:!1,defaults:Vt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pa.stringFilter=Tp;var jt=[],$s={},yf=[],bi=0,kf=0,qe=function(n){return($s[n]||yf).map(function(t){return t()})},wr=function(){var n=Date.now(),t=[];n-bi>2&&(qe("matchMediaInit"),jt.forEach(function(r){var e=r.queries,s=r.conditions,o,i,l,c;for(i in e)o=Pa.matchMedia(e[i]).matches,o&&(l=1),o!==s[i]&&(s[i]=o,c=1);c&&(r.revert(),l&&t.push(r))}),qe("matchMediaRevert"),t.forEach(function(r){return r.onMatch(r,function(e){return r.add(null,e)})}),bi=n,qe("matchMedia"))},Lp=function(){function a(t,r){this.selector=r&&kr(r),this.data=[],this._r=[],this.isReverted=!1,this.id=kf++,t&&this.add(t)}var n=a.prototype;return n.add=function(r,e,s){Tn(r)&&(s=e,e=r,r=Tn);var o=this,i=function(){var c=jn,d=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=kr(s)),jn=o,u=e.apply(o,arguments),Tn(u)&&o._r.push(u),jn=c,o.selector=d,o.isReverted=!1,u};return o.last=i,r===Tn?i(o,function(l){return o.add(null,l)}):r?o[r]=i:i},n.ignore=function(r){var e=jn;jn=null,r(this),jn=e},n.getTweens=function(){var r=[];return this.data.forEach(function(e){return e instanceof a?r.push.apply(r,e.getTweens()):e instanceof An&&!(e.parent&&e.parent.data==="nested")&&r.push(e)}),r},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(r,e){var s=this;if(r?function(){for(var i=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return i.splice(i.indexOf(d),1)}));for(i.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,u){return u.g-d.g||-1/0}).forEach(function(d){return d.t.revert(r)}),l=s.data.length;l--;)c=s.data[l],c instanceof Kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof An)&&c.revert&&c.revert(r);s._r.forEach(function(d){return d(r,s)}),s.isReverted=!0}():this.data.forEach(function(i){return i.kill&&i.kill()}),this.clear(),e)for(var o=jt.length;o--;)jt[o].id===this.id&&jt.splice(o,1)},n.revert=function(r){this.kill(r||{})},a}(),bf=function(){function a(t){this.contexts=[],this.scope=t,jn&&jn.data.push(this)}var n=a.prototype;return n.add=function(r,e,s){za(r)||(r={matches:r});var o=new Lp(0,s||this.scope),i=o.conditions={},l,c,d;jn&&!o.selector&&(o.selector=jn.selector),this.contexts.push(o),e=o.add("onMatch",e),o.queries=r;for(c in r)c==="all"?d=1:(l=Pa.matchMedia(r[c]),l&&(jt.indexOf(o)<0&&jt.push(o),(i[c]=l.matches)&&(d=1),l.addListener?l.addListener(wr):l.addEventListener("change",wr)));return d&&e(o,function(u){return o.add(null,u)}),this},n.revert=function(r){this.kill(r||{})},n.kill=function(r){this.contexts.forEach(function(e){return e.kill(r,!0)})},a}(),le={registerPlugin:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];t.forEach(function(e){return _p(e)})},timeline:function(n){return new Kn(n)},getTweensOf:function(n,t){return Sn.getTweensOf(n,t)},getProperty:function(n,t,r,e){zn(n)&&(n=fa(n)[0]);var s=vt(n||{}).get,o=r?cp:dp;return r==="native"&&(r=""),n&&(t?o((ra[t]&&ra[t].get||s)(n,t,r,e)):function(i,l,c){return o((ra[i]&&ra[i].get||s)(n,i,l,c))})},quickSetter:function(n,t,r){if(n=fa(n),n.length>1){var e=n.map(function(d){return ta.quickSetter(d,t,r)}),s=e.length;return function(d){for(var u=s;u--;)e[u](d)}}n=n[0]||{};var o=ra[t],i=vt(n),l=i.harness&&(i.harness.aliases||{})[t]||t,c=o?function(d){var u=new o;Et._pt=0,u.init(n,r?d+r:d,Et,0,[n]),u.render(1,u),Et._pt&&co(1,Et)}:i.set(n,l);return o?c:function(d){return c(n,l,r?d+r:d,i,1)}},quickTo:function(n,t,r){var e,s=ta.to(n,ca((e={},e[t]="+=0.1",e.paused=!0,e.stagger=0,e),r||{})),o=function(l,c,d){return s.resetTo(t,l,c,d)};return o.tween=s,o},isTweening:function(n){return Sn.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=xt(n.ease,Vt.ease)),fi(Vt,n||{})},config:function(n){return fi(pa,n||{})},registerEffect:function(n){var t=n.name,r=n.effect,e=n.plugins,s=n.defaults,o=n.extendTimeline;(e||"").split(",").forEach(function(i){return i&&!ra[i]&&!da[i]&&js(t+" effect requires "+i+" plugin.")}),He[t]=function(i,l,c){return r(fa(i),ca(l||{},s),c)},o&&(Kn.prototype[t]=function(i,l,c){return this.add(He[t](i,za(l)?l:(c=l)&&{},this),c)})},registerEase:function(n,t){hn[n]=xt(t)},parseEase:function(n,t){return arguments.length?xt(n,t):hn},getById:function(n){return Sn.getById(n)},exportRoot:function(n,t){n===void 0&&(n={});var r=new Kn(n),e,s;for(r.smoothChildTiming=Qn(n.smoothChildTiming),Sn.remove(r),r._dp=0,r._time=r._tTime=Sn._time,e=Sn._first;e;)s=e._next,(t||!(!e._dur&&e instanceof An&&e.vars.onComplete===e._targets[0]))&&Ma(r,e,e._start-e._delay),e=s;return Ma(Sn,r,0),r},context:function(n,t){return n?new Lp(n,t):jn},matchMedia:function(n){return new bf(n)},matchMediaRefresh:function(){return jt.forEach(function(n){var t=n.conditions,r,e;for(e in t)t[e]&&(t[e]=!1,r=1);r&&n.revert()})||wr()},addEventListener:function(n,t){var r=$s[n]||($s[n]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(n,t){var r=$s[n],e=r&&r.indexOf(t);e>=0&&r.splice(e,1)},utils:{wrap:Kh,wrapYoyo:Zh,distribute:kp,random:vp,snap:bp,normalize:Xh,getUnit:Wn,clamp:Vh,splitColor:Sp,toArray:fa,selector:kr,mapRange:xp,pipe:qh,unitize:$h,interpolate:Qh,shuffle:yp},install:rp,effects:He,ticker:oa,updateRoot:Kn.updateRoot,plugins:ra,globalTimeline:Sn,core:{PropTween:na,globals:op,Tween:An,Timeline:Kn,Animation:Ts,getCache:vt,_removeLinkedListItem:_e,reverting:function(){return Dn},context:function(n){return n&&jn&&(jn.data.push(n),n._ctx=jn),jn},suppressOverwrites:function(n){return Zr=n}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return le[a]=An[a]});oa.add(Kn.updateRoot);Et=le.to({},{duration:0});var vf=function(n,t){for(var r=n._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},wf=function(n,t){var r=n._targets,e,s,o;for(e in t)for(s=r.length;s--;)o=n._ptLookup[s][e],o&&(o=o.d)&&(o._pt&&(o=vf(o,e)),o&&o.modifier&&o.modifier(t[e],n,r[s],e))},$e=function(n,t){return{name:n,headless:1,rawVars:1,init:function(e,s,o){o._onInit=function(i){var l,c;if(zn(s)&&(l={},Jn(s,function(d){return l[d]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}wf(i,s)}}}},ta=le.registerPlugin({name:"attr",init:function(n,t,r,e,s){var o,i,l;this.tween=r;for(o in t)l=n.getAttribute(o)||"",i=this.add(n,"setAttribute",(l||0)+"",t[o],e,s,0,0,o),i.op=o,i.b=l,this._props.push(o)},render:function(n,t){for(var r=t._pt;r;)Dn?r.set(r.t,r.p,r.b,r):r.r(n,r.d),r=r._next}},{name:"endArray",headless:1,init:function(n,t){for(var r=t.length;r--;)this.add(n,r,n[r]||0,t[r],0,0,0,0,0,1)}},$e("roundProps",br),$e("modifiers"),$e("snap",bp))||le;An.version=Kn.version=ta.version="3.13.0";ep=1;Jr()&&Xt();hn.Power0;hn.Power1;hn.Power2;hn.Power3;hn.Power4;hn.Linear;hn.Quad;hn.Cubic;hn.Quart;hn.Quint;hn.Strong;hn.Elastic;hn.Back;hn.SteppedEase;hn.Bounce;hn.Sine;hn.Expo;hn.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vi,at,Ut,uo,kt,wi,ho,xf=function(){return typeof window<"u"},qa={},yt=180/Math.PI,Gt=Math.PI/180,Pt=Math.atan2,xi=1e8,fo=/([A-Z])/g,jf=/(left|right|width|margin|padding|x)/i,_f=/[\s,\(]\S/,Ra={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xr=function(n,t){return t.set(t.t,t.p,Math.round((t.s+t.c*n)*1e4)/1e4+t.u,t)},Sf=function(n,t){return t.set(t.t,t.p,n===1?t.e:Math.round((t.s+t.c*n)*1e4)/1e4+t.u,t)},Cf=function(n,t){return t.set(t.t,t.p,n?Math.round((t.s+t.c*n)*1e4)/1e4+t.u:t.b,t)},Tf=function(n,t){var r=t.s+t.c*n;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},Up=function(n,t){return t.set(t.t,t.p,n?t.e:t.b,t)},Gp=function(n,t){return t.set(t.t,t.p,n!==1?t.b:t.e,t)},Pf=function(n,t,r){return n.style[t]=r},Af=function(n,t,r){return n.style.setProperty(t,r)},Mf=function(n,t,r){return n._gsap[t]=r},Rf=function(n,t,r){return n._gsap.scaleX=n._gsap.scaleY=r},Ef=function(n,t,r,e,s){var o=n._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},If=function(n,t,r,e,s){var o=n._gsap;o[t]=r,o.renderTransform(s,o)},Cn="transform",aa=Cn+"Origin",Ff=function a(n,t){var r=this,e=this.target,s=e.style,o=e._gsap;if(n in qa&&s){if(this.tfm=this.tfm||{},n!=="transform")n=Ra[n]||n,~n.indexOf(",")?n.split(",").forEach(function(i){return r.tfm[i]=Ua(e,i)}):this.tfm[n]=o.x?o[n]:Ua(e,n),n===aa&&(this.tfm.zOrigin=o.zOrigin);else return Ra.transform.split(",").forEach(function(i){return a.call(r,i,t)});if(this.props.indexOf(Cn)>=0)return;o.svg&&(this.svgo=e.getAttribute("data-svg-origin"),this.props.push(aa,t,"")),n=Cn}(s||t)&&this.props.push(n,t,s[n])},Wp=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},zf=function(){var n=this.props,t=this.target,r=t.style,e=t._gsap,s,o;for(s=0;s<n.length;s+=3)n[s+1]?n[s+1]===2?t[n[s]](n[s+2]):t[n[s]]=n[s+2]:n[s+2]?r[n[s]]=n[s+2]:r.removeProperty(n[s].substr(0,2)==="--"?n[s]:n[s].replace(fo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)e[o]=this.tfm[o];e.svg&&(e.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ho(),(!s||!s.isStart)&&!r[Cn]&&(Wp(r),e.zOrigin&&r[aa]&&(r[aa]+=" "+e.zOrigin+"px",e.zOrigin=0,e.renderTransform()),e.uncache=1)}},Hp=function(n,t){var r={target:n,props:[],revert:zf,save:Ff};return n._gsap||ta.core.getCache(n),t&&n.style&&n.nodeType&&t.split(",").forEach(function(e){return r.save(e)}),r},Np,jr=function(n,t){var r=at.createElementNS?at.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):at.createElement(n);return r&&r.style?r:at.createElement(n)},ma=function a(n,t,r){var e=getComputedStyle(n);return e[t]||e.getPropertyValue(t.replace(fo,"-$1").toLowerCase())||e.getPropertyValue(t)||!r&&a(n,Kt(t)||t,1)||""},ji="O,Moz,ms,Ms,Webkit".split(","),Kt=function(n,t,r){var e=t||kt,s=e.style,o=5;if(n in s&&!r)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(ji[o]+n in s););return o<0?null:(o===3?"ms":o>=0?ji[o]:"")+n},_r=function(){xf()&&window.document&&(vi=window,at=vi.document,Ut=at.documentElement,kt=jr("div")||{style:{}},jr("div"),Cn=Kt(Cn),aa=Cn+"Origin",kt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Np=!!Kt("perspective"),ho=ta.core.reverting,uo=1)},_i=function(n){var t=n.ownerSVGElement,r=jr("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),e=n.cloneNode(!0),s;e.style.display="block",r.appendChild(e),Ut.appendChild(r);try{s=e.getBBox()}catch{}return r.removeChild(e),Ut.removeChild(r),s},Si=function(n,t){for(var r=t.length;r--;)if(n.hasAttribute(t[r]))return n.getAttribute(t[r])},Vp=function(n){var t,r;try{t=n.getBBox()}catch{t=_i(n),r=1}return t&&(t.width||t.height)||r||(t=_i(n)),t&&!t.width&&!t.x&&!t.y?{x:+Si(n,["x","cx","x1"])||0,y:+Si(n,["y","cy","y1"])||0,width:0,height:0}:t},Yp=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&Vp(n))},_t=function(n,t){if(t){var r=n.style,e;t in qa&&t!==aa&&(t=Cn),r.removeProperty?(e=t.substr(0,2),(e==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),r.removeProperty(e==="--"?t:t.replace(fo,"-$1").toLowerCase())):r.removeAttribute(t)}},tt=function(n,t,r,e,s,o){var i=new na(n._pt,t,r,0,1,o?Gp:Up);return n._pt=i,i.b=e,i.e=s,n._props.push(r),i},Ci={deg:1,rad:1,turn:1},Of={grid:1,flex:1},pt=function a(n,t,r,e){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",i=kt.style,l=jf.test(t),c=n.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=e==="px",p=e==="%",m,h,g,k;if(e===o||!s||Ci[e]||Ci[o])return s;if(o!=="px"&&!f&&(s=a(n,t,r,"px")),k=n.getCTM&&Yp(n),(p||o==="%")&&(qa[t]||~t.indexOf("adius")))return m=k?n.getBBox()[l?"width":"height"]:n[d],Pn(p?s/m*u:s/100*m);if(i[l?"width":"height"]=u+(f?o:e),h=e!=="rem"&&~t.indexOf("adius")||e==="em"&&n.appendChild&&!c?n:n.parentNode,k&&(h=(n.ownerSVGElement||{}).parentNode),(!h||h===at||!h.appendChild)&&(h=at.body),g=h._gsap,g&&p&&g.width&&l&&g.time===oa.time&&!g.uncache)return Pn(s/g.width*u);if(p&&(t==="height"||t==="width")){var v=n.style[t];n.style[t]=u+e,m=n[d],v?n.style[t]=v:_t(n,t)}else(p||o==="%")&&!Of[ma(h,"display")]&&(i.position=ma(n,"position")),h===n&&(i.position="static"),h.appendChild(kt),m=kt[d],h.removeChild(kt),i.position="absolute";return l&&p&&(g=vt(h),g.time=oa.time,g.width=h[d]),Pn(f?m*s/u:m&&s?u/m*s:0)},Ua=function(n,t,r,e){var s;return uo||_r(),t in Ra&&t!=="transform"&&(t=Ra[t],~t.indexOf(",")&&(t=t.split(",")[0])),qa[t]&&t!=="transform"?(s=As(n,e),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:de(ma(n,aa))+" "+s.zOrigin+"px"):(s=n.style[t],(!s||s==="auto"||e||~(s+"").indexOf("calc("))&&(s=pe[t]&&pe[t](n,t,r)||ma(n,t)||lp(n,t)||(t==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?pt(n,t,s,r)+r:s},Df=function(n,t,r,e){if(!r||r==="none"){var s=Kt(t,n,1),o=s&&ma(n,s,1);o&&o!==r?(t=s,r=o):t==="borderColor"&&(r=ma(n,"borderTopColor"))}var i=new na(this._pt,n.style,t,0,1,Dp),l=0,c=0,d,u,f,p,m,h,g,k,v,j,_,y;if(i.b=r,i.e=e,r+="",e+="",e.substring(0,6)==="var(--"&&(e=ma(n,e.substring(4,e.indexOf(")")))),e==="auto"&&(h=n.style[t],n.style[t]=e,e=ma(n,t)||e,h?n.style[t]=h:_t(n,t)),d=[r,e],Tp(d),r=d[0],e=d[1],f=r.match(Rt)||[],y=e.match(Rt)||[],y.length){for(;u=Rt.exec(e);)g=u[0],v=e.substring(l,u.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),g!==(h=f[c++]||"")&&(p=parseFloat(h)||0,_=h.substr((p+"").length),g.charAt(1)==="="&&(g=Lt(p,g)+_),k=parseFloat(g),j=g.substr((k+"").length),l=Rt.lastIndex-j.length,j||(j=j||pa.units[t]||_,l===e.length&&(e+=j,i.e+=j)),_!==j&&(p=pt(n,t,h,j)||0),i._pt={_next:i._pt,p:v||c===1?v:",",s:p,c:k-p,m:m&&m<4||t==="zIndex"?Math.round:0});i.c=l<e.length?e.substring(l,e.length):""}else i.r=t==="display"&&e==="none"?Gp:Up;return tp.test(e)&&(i.e=0),this._pt=i,i},Ti={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bf=function(n){var t=n.split(" "),r=t[0],e=t[1]||"50%";return(r==="top"||r==="bottom"||e==="left"||e==="right")&&(n=r,r=e,e=n),t[0]=Ti[r]||r,t[1]=Ti[e]||e,t.join(" ")},Lf=function(n,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,e=r.style,s=t.u,o=r._gsap,i,l,c;if(s==="all"||s===!0)e.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)i=s[c],qa[i]&&(l=1,i=i==="transformOrigin"?aa:Cn),_t(r,i);l&&(_t(r,Cn),o&&(o.svg&&r.removeAttribute("transform"),e.scale=e.rotate=e.translate="none",As(r,1),o.uncache=1,Wp(e)))}},pe={clearProps:function(n,t,r,e,s){if(s.data!=="isFromStart"){var o=n._pt=new na(n._pt,t,r,0,0,Lf);return o.u=e,o.pr=-10,o.tween=s,n._props.push(r),1}}},Ps=[1,0,0,1,0,0],qp={},$p=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Pi=function(n){var t=ma(n,Cn);return $p(t)?Ps:t.substr(7).match(ap).map(Pn)},mo=function(n,t){var r=n._gsap||vt(n),e=n.style,s=Pi(n),o,i,l,c;return r.svg&&n.getAttribute("transform")?(l=n.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ps:s):(s===Ps&&!n.offsetParent&&n!==Ut&&!r.svg&&(l=e.display,e.display="block",o=n.parentNode,(!o||!n.offsetParent&&!n.getBoundingClientRect().width)&&(c=1,i=n.nextElementSibling,Ut.appendChild(n)),s=Pi(n),l?e.display=l:_t(n,"display"),c&&(i?o.insertBefore(n,i):o?o.appendChild(n):Ut.removeChild(n))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Sr=function(n,t,r,e,s,o){var i=n._gsap,l=s||mo(n,!0),c=i.xOrigin||0,d=i.yOrigin||0,u=i.xOffset||0,f=i.yOffset||0,p=l[0],m=l[1],h=l[2],g=l[3],k=l[4],v=l[5],j=t.split(" "),_=parseFloat(j[0])||0,y=parseFloat(j[1])||0,w,x,b,S;r?l!==Ps&&(x=p*g-m*h)&&(b=_*(g/x)+y*(-h/x)+(h*v-g*k)/x,S=_*(-m/x)+y*(p/x)-(p*v-m*k)/x,_=b,y=S):(w=Vp(n),_=w.x+(~j[0].indexOf("%")?_/100*w.width:_),y=w.y+(~(j[1]||j[0]).indexOf("%")?y/100*w.height:y)),e||e!==!1&&i.smooth?(k=_-c,v=y-d,i.xOffset=u+(k*p+v*h)-k,i.yOffset=f+(k*m+v*g)-v):i.xOffset=i.yOffset=0,i.xOrigin=_,i.yOrigin=y,i.smooth=!!e,i.origin=t,i.originIsAbsolute=!!r,n.style[aa]="0px 0px",o&&(tt(o,i,"xOrigin",c,_),tt(o,i,"yOrigin",d,y),tt(o,i,"xOffset",u,i.xOffset),tt(o,i,"yOffset",f,i.yOffset)),n.setAttribute("data-svg-origin",_+" "+y)},As=function(n,t){var r=n._gsap||new Rp(n);if("x"in r&&!t&&!r.uncache)return r;var e=n.style,s=r.scaleX<0,o="px",i="deg",l=getComputedStyle(n),c=ma(n,aa)||"0",d,u,f,p,m,h,g,k,v,j,_,y,w,x,b,S,T,P,C,E,I,O,U,D,N,nn,on,pn,sn,cn,dn,un;return d=u=f=h=g=k=v=j=_=0,p=m=1,r.svg=!!(n.getCTM&&Yp(n)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(e[Cn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Cn]!=="none"?l[Cn]:"")),e.scale=e.rotate=e.translate="none"),x=mo(n,r.svg),r.svg&&(r.uncache?(N=n.getBBox(),c=r.xOrigin-N.x+"px "+(r.yOrigin-N.y)+"px",D=""):D=!t&&n.getAttribute("data-svg-origin"),Sr(n,D||c,!!D||r.originIsAbsolute,r.smooth!==!1,x)),y=r.xOrigin||0,w=r.yOrigin||0,x!==Ps&&(P=x[0],C=x[1],E=x[2],I=x[3],d=O=x[4],u=U=x[5],x.length===6?(p=Math.sqrt(P*P+C*C),m=Math.sqrt(I*I+E*E),h=P||C?Pt(C,P)*yt:0,v=E||I?Pt(E,I)*yt+h:0,v&&(m*=Math.abs(Math.cos(v*Gt))),r.svg&&(d-=y-(y*P+w*E),u-=w-(y*C+w*I))):(un=x[6],cn=x[7],on=x[8],pn=x[9],sn=x[10],dn=x[11],d=x[12],u=x[13],f=x[14],b=Pt(un,sn),g=b*yt,b&&(S=Math.cos(-b),T=Math.sin(-b),D=O*S+on*T,N=U*S+pn*T,nn=un*S+sn*T,on=O*-T+on*S,pn=U*-T+pn*S,sn=un*-T+sn*S,dn=cn*-T+dn*S,O=D,U=N,un=nn),b=Pt(-E,sn),k=b*yt,b&&(S=Math.cos(-b),T=Math.sin(-b),D=P*S-on*T,N=C*S-pn*T,nn=E*S-sn*T,dn=I*T+dn*S,P=D,C=N,E=nn),b=Pt(C,P),h=b*yt,b&&(S=Math.cos(b),T=Math.sin(b),D=P*S+C*T,N=O*S+U*T,C=C*S-P*T,U=U*S-O*T,P=D,O=N),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,k=180-k),p=Pn(Math.sqrt(P*P+C*C+E*E)),m=Pn(Math.sqrt(U*U+un*un)),b=Pt(O,U),v=Math.abs(b)>2e-4?b*yt:0,_=dn?1/(dn<0?-dn:dn):0),r.svg&&(D=n.getAttribute("transform"),r.forceCSS=n.setAttribute("transform","")||!$p(ma(n,Cn)),D&&n.setAttribute("transform",D))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||r.uncache,r.x=d-((r.xPercent=d&&(!t&&r.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-d)?-50:0)))?n.offsetWidth*r.xPercent/100:0)+o,r.y=u-((r.yPercent=u&&(!t&&r.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-u)?-50:0)))?n.offsetHeight*r.yPercent/100:0)+o,r.z=f+o,r.scaleX=Pn(p),r.scaleY=Pn(m),r.rotation=Pn(h)+i,r.rotationX=Pn(g)+i,r.rotationY=Pn(k)+i,r.skewX=v+i,r.skewY=j+i,r.transformPerspective=_+o,(r.zOrigin=parseFloat(c.split(" ")[2])||!t&&r.zOrigin||0)&&(e[aa]=de(c)),r.xOffset=r.yOffset=0,r.force3D=pa.force3D,r.renderTransform=r.svg?Gf:Np?Xp:Uf,r.uncache=0,r},de=function(n){return(n=n.split(" "))[0]+" "+n[1]},Xe=function(n,t,r){var e=Wn(t);return Pn(parseFloat(t)+parseFloat(pt(n,"x",r+"px",e)))+e},Uf=function(n,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Xp(n,t)},ft="0deg",as="0px",mt=") ",Xp=function(n,t){var r=t||this,e=r.xPercent,s=r.yPercent,o=r.x,i=r.y,l=r.z,c=r.rotation,d=r.rotationY,u=r.rotationX,f=r.skewX,p=r.skewY,m=r.scaleX,h=r.scaleY,g=r.transformPerspective,k=r.force3D,v=r.target,j=r.zOrigin,_="",y=k==="auto"&&n&&n!==1||k===!0;if(j&&(u!==ft||d!==ft)){var w=parseFloat(d)*Gt,x=Math.sin(w),b=Math.cos(w),S;w=parseFloat(u)*Gt,S=Math.cos(w),o=Xe(v,o,x*S*-j),i=Xe(v,i,-Math.sin(w)*-j),l=Xe(v,l,b*S*-j+j)}g!==as&&(_+="perspective("+g+mt),(e||s)&&(_+="translate("+e+"%, "+s+"%) "),(y||o!==as||i!==as||l!==as)&&(_+=l!==as||y?"translate3d("+o+", "+i+", "+l+") ":"translate("+o+", "+i+mt),c!==ft&&(_+="rotate("+c+mt),d!==ft&&(_+="rotateY("+d+mt),u!==ft&&(_+="rotateX("+u+mt),(f!==ft||p!==ft)&&(_+="skew("+f+", "+p+mt),(m!==1||h!==1)&&(_+="scale("+m+", "+h+mt),v.style[Cn]=_||"translate(0, 0)"},Gf=function(n,t){var r=t||this,e=r.xPercent,s=r.yPercent,o=r.x,i=r.y,l=r.rotation,c=r.skewX,d=r.skewY,u=r.scaleX,f=r.scaleY,p=r.target,m=r.xOrigin,h=r.yOrigin,g=r.xOffset,k=r.yOffset,v=r.forceCSS,j=parseFloat(o),_=parseFloat(i),y,w,x,b,S;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=Gt,c*=Gt,y=Math.cos(l)*u,w=Math.sin(l)*u,x=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(d*=Gt,S=Math.tan(c-d),S=Math.sqrt(1+S*S),x*=S,b*=S,d&&(S=Math.tan(d),S=Math.sqrt(1+S*S),y*=S,w*=S)),y=Pn(y),w=Pn(w),x=Pn(x),b=Pn(b)):(y=u,b=f,w=x=0),(j&&!~(o+"").indexOf("px")||_&&!~(i+"").indexOf("px"))&&(j=pt(p,"x",o,"px"),_=pt(p,"y",i,"px")),(m||h||g||k)&&(j=Pn(j+m-(m*y+h*x)+g),_=Pn(_+h-(m*w+h*b)+k)),(e||s)&&(S=p.getBBox(),j=Pn(j+e/100*S.width),_=Pn(_+s/100*S.height)),S="matrix("+y+","+w+","+x+","+b+","+j+","+_+")",p.setAttribute("transform",S),v&&(p.style[Cn]=S)},Wf=function(n,t,r,e,s){var o=360,i=zn(s),l=parseFloat(s)*(i&&~s.indexOf("rad")?yt:1),c=l-e,d=e+c+"deg",u,f;return i&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*xi)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*xi)%o-~~(c/o)*o)),n._pt=f=new na(n._pt,t,r,e,c,Sf),f.e=d,f.u="deg",n._props.push(r),f},Ai=function(n,t){for(var r in t)n[r]=t[r];return n},Hf=function(n,t,r){var e=Ai({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,i,l,c,d,u,f,p,m;e.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),o[Cn]=t,i=As(r,1),_t(r,Cn),r.setAttribute("transform",c)):(c=getComputedStyle(r)[Cn],o[Cn]=t,i=As(r,1),o[Cn]=c);for(l in qa)c=e[l],d=i[l],c!==d&&s.indexOf(l)<0&&(p=Wn(c),m=Wn(d),u=p!==m?pt(r,l,c,m):parseFloat(c),f=parseFloat(d),n._pt=new na(n._pt,i,l,u,f-u,xr),n._pt.u=m||0,n._props.push(l));Ai(i,e)};Jn("padding,margin,Width,Radius",function(a,n){var t="Top",r="Right",e="Bottom",s="Left",o=(n<3?[t,r,e,s]:[t+s,t+r,e+r,e+s]).map(function(i){return n<2?a+i:"border"+i+a});pe[n>1?"border"+a:a]=function(i,l,c,d,u){var f,p;if(arguments.length<4)return f=o.map(function(m){return Ua(i,m,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(d+"").split(" "),p={},o.forEach(function(m,h){return p[m]=f[h]=f[h]||f[(h-1)/2|0]}),i.init(l,p,u)}});var Kp={name:"css",register:_r,targetTest:function(n){return n.style&&n.nodeType},init:function(n,t,r,e,s){var o=this._props,i=n.style,l=r.vars.startAt,c,d,u,f,p,m,h,g,k,v,j,_,y,w,x,b;uo||_r(),this.styles=this.styles||Hp(n),b=this.styles.props,this.tween=r;for(h in t)if(h!=="autoRound"&&(d=t[h],!(ra[h]&&Ep(h,t,r,e,n,s)))){if(p=typeof d,m=pe[h],p==="function"&&(d=d.call(r,e,n,s),p=typeof d),p==="string"&&~d.indexOf("random(")&&(d=Ss(d)),m)m(this,n,h,d,r)&&(x=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(n).getPropertyValue(h)+"").trim(),d+="",rt.lastIndex=0,rt.test(c)||(g=Wn(c),k=Wn(d)),k?g!==k&&(c=pt(n,h,c,k)+k):g&&(d+=g),this.add(i,"setProperty",c,d,e,s,0,0,h),o.push(h),b.push(h,0,i[h]);else if(p!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(r,e,n,s):l[h],zn(c)&&~c.indexOf("random(")&&(c=Ss(c)),Wn(c+"")||c==="auto"||(c+=pa.units[h]||Wn(Ua(n,h))||""),(c+"").charAt(1)==="="&&(c=Ua(n,h))):c=Ua(n,h),f=parseFloat(c),v=p==="string"&&d.charAt(1)==="="&&d.substr(0,2),v&&(d=d.substr(2)),u=parseFloat(d),h in Ra&&(h==="autoAlpha"&&(f===1&&Ua(n,"visibility")==="hidden"&&u&&(f=0),b.push("visibility",0,i.visibility),tt(this,i,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),h!=="scale"&&h!=="transform"&&(h=Ra[h],~h.indexOf(",")&&(h=h.split(",")[0]))),j=h in qa,j){if(this.styles.save(h),p==="string"&&d.substring(0,6)==="var(--"&&(d=ma(n,d.substring(4,d.indexOf(")"))),u=parseFloat(d)),_||(y=n._gsap,y.renderTransform&&!t.parseTransform||As(n,t.parseTransform),w=t.smoothOrigin!==!1&&y.smooth,_=this._pt=new na(this._pt,i,Cn,0,1,y.renderTransform,y,0,-1),_.dep=1),h==="scale")this._pt=new na(this._pt,y,"scaleY",y.scaleY,(v?Lt(y.scaleY,v+u):u)-y.scaleY||0,xr),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){b.push(aa,0,i[aa]),d=Bf(d),y.svg?Sr(n,d,0,w,0,this):(k=parseFloat(d.split(" ")[2])||0,k!==y.zOrigin&&tt(this,y,"zOrigin",y.zOrigin,k),tt(this,i,h,de(c),de(d)));continue}else if(h==="svgOrigin"){Sr(n,d,1,w,0,this);continue}else if(h in qp){Wf(this,y,h,f,v?Lt(f,v+d):d);continue}else if(h==="smoothOrigin"){tt(this,y,"smooth",y.smooth,d);continue}else if(h==="force3D"){y[h]=d;continue}else if(h==="transform"){Hf(this,d,n);continue}}else h in i||(h=Kt(h)||h);if(j||(u||u===0)&&(f||f===0)&&!_f.test(d)&&h in i)g=(c+"").substr((f+"").length),u||(u=0),k=Wn(d)||(h in pa.units?pa.units[h]:g),g!==k&&(f=pt(n,h,c,k)),this._pt=new na(this._pt,j?y:i,h,f,(v?Lt(f,v+u):u)-f,!j&&(k==="px"||h==="zIndex")&&t.autoRound!==!1?Tf:xr),this._pt.u=k||0,g!==k&&k!=="%"&&(this._pt.b=c,this._pt.r=Cf);else if(h in i)Df.call(this,n,h,c,v?v+d:d);else if(h in n)this.add(n,h,c||n[h],v?v+d:d,e,s);else if(h!=="parseTransform"){ao(h,d);continue}j||(h in i?b.push(h,0,i[h]):typeof n[h]=="function"?b.push(h,2,n[h]()):b.push(h,1,c||n[h])),o.push(h)}}x&&Bp(this)},render:function(n,t){if(t.tween._time||!ho())for(var r=t._pt;r;)r.r(n,r.d),r=r._next;else t.styles.revert()},get:Ua,aliases:Ra,getSetter:function(n,t,r){var e=Ra[t];return e&&e.indexOf(",")<0&&(t=e),t in qa&&t!==aa&&(n._gsap.x||Ua(n,"x"))?r&&wi===r?t==="scale"?Rf:Mf:(wi=r||{})&&(t==="scale"?Ef:If):n.style&&!Qr(n.style[t])?Pf:~t.indexOf("-")?Af:po(n,t)},core:{_removeProperty:_t,_getMatrix:mo}};ta.utils.checkPrefix=Kt;ta.core.getStyleSaver=Hp;(function(a,n,t,r){var e=Jn(a+","+n+","+t,function(s){qa[s]=1});Jn(n,function(s){pa.units[s]="deg",qp[s]=1}),Ra[e[13]]=a+","+n,Jn(r,function(s){var o=s.split(":");Ra[o[1]]=e[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){pa.units[a]="px"});ta.registerPlugin(Kp);var Zp=ta.registerPlugin(Kp)||ta;Zp.core.Tween;const Nf=`<!DOCTYPE html>\r
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
</html>`,Vf=`<!DOCTYPE html>\r
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
</html>`,Yf=`<!DOCTYPE html>\r
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
</html>`,qf=`<!DOCTYPE html>\r
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
</html>`,$f=`<!DOCTYPE html>\r
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
</html>`,Xf=`<!DOCTYPE html>\r
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
</html>`,Kf=`<!DOCTYPE html>\r
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
</html>`,Zf=`<!DOCTYPE html>\r
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
</html>`,Qf=`<!DOCTYPE html>\r
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
</html>`,Jf=`<!DOCTYPE html>\r
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
</html>`,nm=`<!DOCTYPE html>\r
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
</html>`,am=`<!DOCTYPE html>\r
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
</html>`,tm=`<!DOCTYPE html>\r
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
</html>`,sm=`<!DOCTYPE html>\r
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
</html>`,em=`<!DOCTYPE html>\r
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
        <h2 data-start="169" data-end="227">🎮 GAME TITLE: <strong data-start="187" data-end="227">"RainRise:\r
                Waterkeepers of Tomorrow"</strong></h2>\r
        <hr data-start="229" data-end="232" />\r
        <h3 data-start="234" data-end="263">🌍 <strong data-start="241" data-end="263">High-Level Concept</strong></h3>\r
        <p data-start="265" data-end="539"><strong data-start="265" data-end="279">"RainRise"</strong> is a <strong\r
                data-start="285" data-end="340">futuristic open-world environmental simulation game</strong> where\r
            players act as <strong data-start="362" data-end="385">Rainwater Engineers</strong> using advanced <strong\r
                data-start="401" data-end="476">drones, AI sensors, water-routing bots, and bio-tech filtration\r
                systems</strong> to conserve rainwater, purify it, and sustain eco-settlements.</p>\r
        <blockquote data-start="541" data-end="641">\r
            <p data-start="543" data-end="641">Think: <em data-start="550" data-end="599">Minecraft meets SimCity meets\r
                    Horizon Zero Dawn</em>, focused on <strong data-start="612" data-end="640">real-world water\r
                    science</strong>.</p>\r
        </blockquote>\r
        <hr data-start="643" data-end="646" />\r
        <h2 data-start="648" data-end="668">🧠 CORE GAME IDEA</h2>\r
        <p data-start="670" data-end="810">You live in the <strong data-start="686" data-end="699">year 2084</strong>,\r
            where global droughts and mismanagement have made <strong data-start="751" data-end="799">rainwater the\r
                world&rsquo;s most precious resource</strong>. You must:</p>\r
        <ul data-start="811" data-end="1016">\r
            <li data-start="811" data-end="848">\r
                <p data-start="813" data-end="848">Capture rainwater intelligently 🌧️</p>\r
            </li>\r
            <li data-start="849" data-end="869">\r
                <p data-start="851" data-end="869">Avoid acid rain ☠️</p>\r
            </li>\r
            <li data-start="870" data-end="920">\r
                <p data-start="872" data-end="920">Store and purify it using advanced technology 💧</p>\r
            </li>\r
            <li data-start="921" data-end="951">\r
                <p data-start="923" data-end="951">Save shrinking ecosystems 🌱</p>\r
            </li>\r
            <li data-start="952" data-end="1016">\r
                <p data-start="954" data-end="1016">Battle <strong data-start="961" data-end="987">tech-noir\r
                        corporations</strong> draining the water supply ⚙️</p>\r
            </li>\r
        </ul>\r
        <hr data-start="1018" data-end="1021" />\r
        <h2 data-start="1023" data-end="1071">🛠️ ADVANCED TECHNOLOGIES USED (with Purpose)</h2>\r
        <div class="_tableContainer_16hzy_1">\r
            <div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="1073" data-end="1900">\r
                    <thead data-start="1073" data-end="1091">\r
                        <tr data-start="1073" data-end="1091">\r
                            <th data-start="1073" data-end="1080" data-col-size="sm">Tech</th>\r
                            <th data-start="1080" data-end="1091" data-col-size="md">Purpose</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="1111" data-end="1900">\r
                        <tr data-start="1111" data-end="1179">\r
                            <td data-start="1111" data-end="1135" data-col-size="sm"><strong data-start="1113"\r
                                    data-end="1134">Unreal Engine 5.4</strong></td>\r
                            <td data-start="1135" data-end="1179" data-col-size="md">Cutting-edge visuals, open-world\r
                                systems</td>\r
                        </tr>\r
                        <tr data-start="1180" data-end="1275">\r
                            <td data-start="1180" data-end="1201" data-col-size="sm"><strong data-start="1182"\r
                                    data-end="1200">Nanite &amp; Lumen</strong></td>\r
                            <td data-start="1201" data-end="1275" data-col-size="md">Ultra-detailed rain capture zones,\r
                                realistic lighting and wet surfaces</td>\r
                        </tr>\r
                        <tr data-start="1276" data-end="1357">\r
                            <td data-start="1276" data-end="1315" data-col-size="sm"><strong data-start="1278"\r
                                    data-end="1314">Chaos Physics + Fluid Simulation</strong></td>\r
                            <td data-start="1315" data-end="1357" data-col-size="md">Dynamic puddles, floods, flow\r
                                channels</td>\r
                        </tr>\r
                        <tr data-start="1358" data-end="1427">\r
                            <td data-start="1358" data-end="1391" data-col-size="sm"><strong data-start="1360"\r
                                    data-end="1390">MetaHuman &amp; Motion Capture</strong></td>\r
                            <td data-start="1391" data-end="1427" data-col-size="md">Realistic citizens and engineers\r
                            </td>\r
                        </tr>\r
                        <tr data-start="1428" data-end="1496">\r
                            <td data-start="1428" data-end="1449" data-col-size="sm"><strong data-start="1430"\r
                                    data-end="1448">Niagara System</strong></td>\r
                            <td data-start="1449" data-end="1496" data-col-size="md">Rain particles, mist, fog,\r
                                filtration vapor</td>\r
                        </tr>\r
                        <tr data-start="1497" data-end="1567">\r
                            <td data-start="1497" data-end="1526" data-col-size="sm"><strong data-start="1499"\r
                                    data-end="1525">DLSS 3.5 + Ray Tracing</strong></td>\r
                            <td data-start="1526" data-end="1567" data-col-size="md">High-quality performance and\r
                                lighting</td>\r
                        </tr>\r
                        <tr data-start="1568" data-end="1655">\r
                            <td data-start="1568" data-end="1599" data-col-size="sm"><strong data-start="1570"\r
                                    data-end="1598">AI: Behavior Trees + EQS</strong></td>\r
                            <td data-start="1599" data-end="1655" data-col-size="md">Smart bots for water routing,\r
                                environmental analysis</td>\r
                        </tr>\r
                        <tr data-start="1656" data-end="1719">\r
                            <td data-start="1656" data-end="1678" data-col-size="sm"><strong data-start="1658"\r
                                    data-end="1677">Pixel Streaming</strong></td>\r
                            <td data-start="1678" data-end="1719" data-col-size="md">Play from low-end devices via\r
                                browser</td>\r
                        </tr>\r
                        <tr data-start="1720" data-end="1802">\r
                            <td data-start="1720" data-end="1736" data-col-size="sm"><strong data-start="1722"\r
                                    data-end="1735">AWS/Cloud</strong></td>\r
                            <td data-start="1736" data-end="1802" data-col-size="md">Sync player-built eco-towns &amp;\r
                                global water conservation events</td>\r
                        </tr>\r
                        <tr data-start="1803" data-end="1900">\r
                            <td data-start="1803" data-end="1836" data-col-size="sm"><strong data-start="1805"\r
                                    data-end="1835">Real-World API Integration</strong></td>\r
                            <td data-start="1836" data-end="1900" data-col-size="md">Uses real climate and rainfall data\r
                                (OpenWeatherMap, NASA GPM)</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="1902" data-end="1905" />\r
        <h2 data-start="1907" data-end="1930">🎯 GAMEPLAY FEATURES</h2>\r
        <h3 data-start="1932" data-end="1979">🌧️ 1. <strong data-start="1943" data-end="1979">Rainwater Capture &amp;\r
                Conservation</strong></h3>\r
        <ul data-start="1980" data-end="2181">\r
            <li data-start="1980" data-end="2043">\r
                <p data-start="1982" data-end="2043">Build <strong data-start="1988" data-end="2003">Smart\r
                        Roofs</strong>, <strong data-start="2005" data-end="2025">Drainage Tunnels</strong>, <strong\r
                        data-start="2027" data-end="2043">AI Pipelines</strong></p>\r
            </li>\r
            <li data-start="2044" data-end="2087">\r
                <p data-start="2046" data-end="2087">Analyze terrain to <strong data-start="2065"\r
                        data-end="2087">optimize catchment</strong></p>\r
            </li>\r
            <li data-start="2088" data-end="2136">\r
                <p data-start="2090" data-end="2136">Real-time changes in rain direction, intensity</p>\r
            </li>\r
            <li data-start="2137" data-end="2181">\r
                <p data-start="2139" data-end="2181">Acid rain detection &rarr; divert or neutralize</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2183" data-end="2186" />\r
        <h3 data-start="2188" data-end="2242">🧱 2. <strong data-start="2198" data-end="2242">Infrastructure Building\r
                (RTS + City Sim)</strong></h3>\r
        <ul data-start="2243" data-end="2410">\r
            <li data-start="2243" data-end="2298">\r
                <p data-start="2245" data-end="2298">Create filtration plants, bio-reactors, storage domes</p>\r
            </li>\r
            <li data-start="2299" data-end="2349">\r
                <p data-start="2301" data-end="2349">Design eco-villages based on collected rainwater</p>\r
            </li>\r
            <li data-start="2350" data-end="2410">\r
                <p data-start="2352" data-end="2410">Build vertical gardens &amp; hydroponics using conserved water</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2412" data-end="2415" />\r
        <h3 data-start="2417" data-end="2453">🔁 3. <strong data-start="2427" data-end="2453">Water Cycle\r
                Simulation</strong></h3>\r
        <ul data-start="2454" data-end="2628">\r
            <li data-start="2454" data-end="2574">\r
                <p data-start="2456" data-end="2475">Full simulation of:</p>\r
                <ul data-start="2478" data-end="2574">\r
                    <li data-start="2478" data-end="2495">\r
                        <p data-start="2480" data-end="2495"><strong data-start="2480"\r
                                data-end="2495">Evaporation</strong></p>\r
                    </li>\r
                    <li data-start="2498" data-end="2516">\r
                        <p data-start="2500" data-end="2516"><strong data-start="2500"\r
                                data-end="2516">Condensation</strong></p>\r
                    </li>\r
                    <li data-start="2519" data-end="2538">\r
                        <p data-start="2521" data-end="2538"><strong data-start="2521"\r
                                data-end="2538">Precipitation</strong></p>\r
                    </li>\r
                    <li data-start="2541" data-end="2559">\r
                        <p data-start="2543" data-end="2559"><strong data-start="2543"\r
                                data-end="2559">Infiltration</strong></p>\r
                    </li>\r
                    <li data-start="2562" data-end="2574">\r
                        <p data-start="2564" data-end="2574"><strong data-start="2564" data-end="2574">Runoff</strong>\r
                        </p>\r
                    </li>\r
                </ul>\r
            </li>\r
            <li data-start="2575" data-end="2628">\r
                <p data-start="2577" data-end="2628">Players can manipulate parts of the cycle with tech</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2630" data-end="2633" />\r
        <h3 data-start="2635" data-end="2677">🤖 4. <strong data-start="2645" data-end="2677">AI-Based Field Bots &amp;\r
                Drones</strong></h3>\r
        <ul data-start="2678" data-end="2853">\r
            <li data-start="2678" data-end="2739">\r
                <p data-start="2680" data-end="2739">Deploy <strong data-start="2687"\r
                        data-end="2701">"AQUABots"</strong> to clean, redirect or store rainwater</p>\r
            </li>\r
            <li data-start="2740" data-end="2802">\r
                <p data-start="2742" data-end="2802">Use <strong data-start="2746" data-end="2759">AI drones</strong> to\r
                    scan cloud formations or check toxicity</p>\r
            </li>\r
            <li data-start="2803" data-end="2853">\r
                <p data-start="2805" data-end="2853">EQS + Behavior Trees power their smart decisions</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2855" data-end="2858" />\r
        <h3 data-start="2860" data-end="2891">⚔️ 5. <strong data-start="2870" data-end="2891">Eco-War Scenarios</strong>\r
        </h3>\r
        <ul data-start="2892" data-end="3072">\r
            <li data-start="2892" data-end="2955">\r
                <p data-start="2894" data-end="2955">Face off against <strong data-start="2911"\r
                        data-end="2924">HydroCorp</strong>, a mega-corp draining aquifers</p>\r
            </li>\r
            <li data-start="2956" data-end="3014">\r
                <p data-start="2958" data-end="3014">Use <strong data-start="2962" data-end="2987">environmental\r
                        hacking</strong>, EMP storms, flood release</p>\r
            </li>\r
            <li data-start="3015" data-end="3072">\r
                <p data-start="3017" data-end="3072">Ethical choices: weaponize water or protect ecosystems?</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3074" data-end="3077" />\r
        <h3 data-start="3079" data-end="3116">🌎 6. <strong data-start="3089" data-end="3116">Global Multiplayer\r
                Mode</strong></h3>\r
        <ul data-start="3117" data-end="3285">\r
            <li data-start="3117" data-end="3165">\r
                <p data-start="3119" data-end="3165">Build cooperative eco-settlements with friends</p>\r
            </li>\r
            <li data-start="3166" data-end="3231">\r
                <p data-start="3168" data-end="3231">Launch <strong data-start="3175" data-end="3205">global\r
                        conservation events</strong> during real-time monsoons</p>\r
            </li>\r
            <li data-start="3232" data-end="3285">\r
                <p data-start="3234" data-end="3285">Leaderboards for most water preserved, least wasted</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3287" data-end="3290" />\r
        <h2 data-start="3292" data-end="3318">👨&zwj;🔬 EDUCATIONAL VALUE</h2>\r
        <ul data-start="3319" data-end="3572">\r
            <li data-start="3319" data-end="3393">\r
                <p data-start="3321" data-end="3393">Teaches <strong data-start="3329" data-end="3353">rainwater\r
                        harvesting</strong>, <strong data-start="3355" data-end="3373">urban planning</strong>, <strong\r
                        data-start="3375" data-end="3393">sustainability</strong></p>\r
            </li>\r
            <li data-start="3394" data-end="3454">\r
                <p data-start="3396" data-end="3454">Shows impact of acid rain, climate zones, soil percolation</p>\r
            </li>\r
            <li data-start="3455" data-end="3506">\r
                <p data-start="3457" data-end="3506">Uses <strong data-start="3462" data-end="3484">real rainfall\r
                        data</strong> to influence missions</p>\r
            </li>\r
            <li data-start="3507" data-end="3572">\r
                <p data-start="3509" data-end="3572">School mode: Classroom-safe version for environmental education</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3574" data-end="3577" />\r
        <h2 data-start="3579" data-end="3614">📦 STRUCTURE EXAMPLE (GAME LOOP)</h2>\r
        <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
            <div\r
                class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">\r
                markdown</div>\r
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
                    class="whitespace-pre!"><span class="hljs-bullet">1.</span> Forecast &rarr; 2. Build Catchers &rarr; 3. Route Water &rarr; 4. Purify &rarr; <span class="hljs-bullet">5.</span> Store / Use &rarr; 6. Monitor Waste &rarr; 7. Upgrade Tech &rarr; 8. Repeat </code>\r
            </div>\r
        </div>\r
        <hr data-start="3757" data-end="3760" />\r
        <h2 data-start="3762" data-end="3796">🎥 VISUALS SNAPSHOT (Using UE5)</h2>\r
        <ul data-start="3798" data-end="4193">\r
            <li data-start="3798" data-end="3902">\r
                <p data-start="3800" data-end="3902">🌧️ Rain particles falling on <strong data-start="3830"\r
                        data-end="3856">metal, wood, and glass</strong> with unique reflections (Ray Tracing + Lumen)\r
                </p>\r
            </li>\r
            <li data-start="3903" data-end="3962">\r
                <p data-start="3905" data-end="3962">🌿 Wet leaves shimmering and dripping with <strong\r
                        data-start="3948" data-end="3962">Niagara FX</strong></p>\r
            </li>\r
            <li data-start="3963" data-end="4046">\r
                <p data-start="3965" data-end="4046">💧 Water flowing over terrain realistically, pooling in low areas\r
                    (Chaos + Fluid)</p>\r
            </li>\r
            <li data-start="4047" data-end="4130">\r
                <p data-start="4049" data-end="4130">🧍 Villagers walking with umbrellas, reacting to cold rain\r
                    (MetaHuman animations)</p>\r
            </li>\r
            <li data-start="4131" data-end="4193">\r
                <p data-start="4133" data-end="4193">🌇 Sunset glistening off puddles as a drone scans from above</p>\r
            </li>\r
        </ul>\r
        <hr data-start="4195" data-end="4198" />\r
        <h2 data-start="4200" data-end="4225">🔮 FUTURE ENHANCEMENTS</h2>\r
        <ul data-start="4227" data-end="4494">\r
            <li data-start="4227" data-end="4287">\r
                <p data-start="4229" data-end="4287"><strong data-start="4229" data-end="4240">VR Mode</strong>: Use\r
                    motion to manually build filtration units</p>\r
            </li>\r
            <li data-start="4288" data-end="4359">\r
                <p data-start="4290" data-end="4359"><strong data-start="4290" data-end="4314">Mobile Companion\r
                        App</strong>: Monitor your eco-city&rsquo;s water tank remotely</p>\r
            </li>\r
            <li data-start="4360" data-end="4427">\r
                <p data-start="4362" data-end="4427"><strong data-start="4362" data-end="4373">AR Mode</strong>:\r
                    Visualize your home&rsquo;s rainwater harvesting potential</p>\r
            </li>\r
            <li data-start="4428" data-end="4494">\r
                <p data-start="4430" data-end="4494"><strong data-start="4430" data-end="4457">Climate Change\r
                        Timeline</strong>: View your world in 2025, 2050, 2100</p>\r
            </li>\r
        </ul>\r
        <hr data-start="4496" data-end="4499" />\r
        <h2 data-start="4501" data-end="4528">💡 REAL-LIFE INSPIRATION</h2>\r
        <ul data-start="4529" data-end="4716">\r
            <li data-start="4529" data-end="4572">\r
                <p data-start="4531" data-end="4572">Rainwater harvesting in Rajasthan (India)</p>\r
            </li>\r
            <li data-start="4573" data-end="4608">\r
                <p data-start="4575" data-end="4608">Tokyo&rsquo;s underground flood tunnels</p>\r
            </li>\r
            <li data-start="4609" data-end="4643">\r
                <p data-start="4611" data-end="4643">Cloud seeding experiments in UAE</p>\r
            </li>\r
            <li data-start="4644" data-end="4678">\r
                <p data-start="4646" data-end="4678">NASA&rsquo;s TRMM &amp; GPM satellite data</p>\r
            </li>\r
            <li data-start="4679" data-end="4716">\r
                <p data-start="4681" data-end="4716">Singapore&rsquo;s NEWater recycling plant</p>\r
            </li>\r
        </ul>\r
        <hr data-start="4718" data-end="4721" />\r
        <h2 data-start="4723" data-end="4738">✅ CONCLUSION</h2>\r
        <p data-start="4740" data-end="4996"><strong data-start="4740" data-end="4780">"RainRise: Waterkeepers of\r
                Tomorrow"</strong> isn't just a visually stunning open-world game &mdash; it&rsquo;s a playable <strong\r
                data-start="4846" data-end="4864">call to action</strong>. Combining advanced tech and real science, it\r
            challenges players to <strong data-start="4933" data-end="4950">rethink water</strong>, fight exploitation,\r
            and conserve every drop.</p>\r
    </article>\r
</body>\r
\r
</html>`,rm=`<!DOCTYPE html>\r
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
        <h2 data-start="191" data-end="242">🌱 Feature: Vertical Garden &amp; Hydroponics System</h2>\r
        <h3 data-start="244" data-end="258">🎯 Purpose</h3>\r
        <p data-start="259" data-end="306">Allow players to use their stored rainwater to:</p>\r
        <ul data-start="307" data-end="420">\r
            <li data-start="307" data-end="363">\r
                <p data-start="309" data-end="363">Grow crops in stacked garden towers (vertical gardens)</p>\r
            </li>\r
            <li data-start="364" data-end="420">\r
                <p data-start="366" data-end="420">Feed hydroponic beds for fast, water-efficient farming</p>\r
            </li>\r
        </ul>\r
        <hr data-start="422" data-end="425" />\r
        <h2 data-start="427" data-end="450">🧱 System Components</h2>\r
        <h3 data-start="452" data-end="506">1. <strong data-start="459" data-end="481">WaterTankComponent</strong>\r
            (Tracks conserved water)</h3>\r
        <h3 data-start="507" data-end="561">2. <strong data-start="514" data-end="532">HydroponicUnit</strong> (Consumes\r
            water, grows food)</h3>\r
        <h3 data-start="562" data-end="616">3. <strong data-start="569" data-end="592">VerticalGardenTower</strong>\r
            (Stacks growable plots)</h3>\r
        <h3 data-start="617" data-end="662">4. <strong data-start="624" data-end="640">GrowthSystem</strong> (Manages\r
            crop stages)</h3>\r
        <h3 data-start="663" data-end="720">5. <strong data-start="670" data-end="684">UI Monitor</strong> (Shows water\r
            levels, growth status)</h3>\r
        <hr data-start="722" data-end="725" />\r
        <h2 data-start="727" data-end="765">🧑&zwj;💻 C++ Code Snippet (Core Logic)</h2>\r
        <h3 data-start="767" data-end="793">✅ WaterTankComponent.h</h3>\r
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
                    class="whitespace-pre! language-cpp"><span class="hljs-built_in">UCLASS</span>(ClassGroup=(Custom), meta=(BlueprintSpawnableComponent)) <span class="hljs-keyword">class</span> <span class="hljs-title class_">UWaterTankComponent</span> : <span class="hljs-keyword">public</span> UActorComponent { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">UWaterTankComponent</span>(); <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Water"</span>) <span class="hljs-type">float</span> WaterStored; <span class="hljs-built_in">UFUNCTION</span>(BlueprintCallable, Category=<span class="hljs-string">"Water"</span>) <span class="hljs-function"><span class="hljs-type">bool</span></span> <span class="hljs-title">ConsumeWater</span><span class="hljs-params">(<span class="hljs-type">float</span></span> Amount); <span class="hljs-built_in">UFUNCTION</span>(BlueprintCallable, Category=<span class="hljs-string">"Water"</span>) <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AddWater</span><span class="hljs-params">(<span class="hljs-type">float</span></span> Amount); }; </code>\r
            </div>\r
        </div>\r
        <h3 data-start="1247" data-end="1275">✅ WaterTankComponent.cpp</h3>\r
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
                    class="whitespace-pre! language-cpp">UWaterTankComponent::<span class="hljs-built_in">UWaterTankComponent</span>() { WaterStored = <span class="hljs-number">500.0f</span>; <span class="hljs-comment">// Starting water</span> } <span class="hljs-function"><span class="hljs-type">bool</span></span> <span class="hljs-title">UWaterTankComponent::ConsumeWater</span><span class="hljs-params">(<span class="hljs-type">float</span></span> Amount) { <span class="hljs-keyword">if</span> (WaterStored &gt;= Amount) { WaterStored -= Amount; <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>; } <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UWaterTankComponent::AddWater</span><span class="hljs-params">(<span class="hljs-type">float</span></span> Amount) { WaterStored += Amount; } </code>\r
            </div>\r
        </div>\r
        <hr data-start="1627" data-end="1630" />\r
        <h3 data-start="1632" data-end="1690">✅ HydroponicUnit.cpp (tick-based consumption &amp; growth)</h3>\r
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
                    class="whitespace-pre! language-cpp"><span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AHydroponicUnit::Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) { Super::<span class="hljs-built_in">Tick</span>(DeltaTime); WaterTick += DeltaTime; <span class="hljs-keyword">if</span> (WaterTick &gt;= <span class="hljs-number">2.0f</span>) { <span class="hljs-keyword">if</span> (WaterTank-&gt;<span class="hljs-built_in">ConsumeWater</span>(<span class="hljs-number">5.0f</span>)) { <span class="hljs-built_in">GrowCrop</span>(); } WaterTick = <span class="hljs-number">0.0f</span>; } } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AHydroponicUnit::GrowCrop</span><span class="hljs-params">()</span> { GrowthStage++; <span class="hljs-keyword">if</span> (GrowthStage &gt;= MaxStage) { bIsReadyToHarvest = <span class="hljs-literal">true</span>; } } </code>\r
            </div>\r
        </div>\r
        <hr data-start="2080" data-end="2083" />\r
        <h2 data-start="2085" data-end="2131">🎮 Blueprint Visual (Can Be Made via Nodes)</h2>\r
        <ul data-start="2132" data-end="2301">\r
            <li data-start="2132" data-end="2173">\r
                <p data-start="2134" data-end="2173">Use <strong data-start="2138" data-end="2150">Timeline</strong> or\r
                    <strong data-start="2154" data-end="2162">Tick</strong> for growth</p>\r
            </li>\r
            <li data-start="2174" data-end="2210">\r
                <p data-start="2176" data-end="2210">Connect to <strong data-start="2187"\r
                        data-end="2210">UWaterTankComponent</strong></p>\r
            </li>\r
            <li data-start="2211" data-end="2263">\r
                <p data-start="2213" data-end="2263">Add particle FX for growing (e.g., glowing leaves)</p>\r
            </li>\r
            <li data-start="2264" data-end="2301">\r
                <p data-start="2266" data-end="2301">Bind water meter and growth % to UI</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2303" data-end="2306" />\r
        <h2 data-start="2308" data-end="2327">📊 UI Monitoring</h2>\r
        <p data-start="2328" data-end="2333">Show:</p>\r
        <ul data-start="2334" data-end="2431">\r
            <li data-start="2334" data-end="2355">\r
                <p data-start="2336" data-end="2355"><strong data-start="2336" data-end="2355">Water Level Bar</strong>\r
                </p>\r
            </li>\r
            <li data-start="2356" data-end="2375">\r
                <p data-start="2358" data-end="2375"><strong data-start="2358" data-end="2375">Crop Growth %</strong>\r
                </p>\r
            </li>\r
            <li data-start="2376" data-end="2408">\r
                <p data-start="2378" data-end="2408"><strong data-start="2378" data-end="2408">Ready to Harvest\r
                        indicator</strong></p>\r
            </li>\r
            <li data-start="2409" data-end="2431">\r
                <p data-start="2411" data-end="2431"><strong data-start="2411" data-end="2431">"Harvest" Button</strong>\r
                </p>\r
            </li>\r
        </ul>\r
        <hr data-start="2433" data-end="2436" />\r
        <h2 data-start="2438" data-end="2461">💡 Game Design Notes</h2>\r
        <ul data-start="2462" data-end="2682">\r
            <li data-start="2462" data-end="2549">\r
                <p data-start="2464" data-end="2549">Some plants require <strong data-start="2484"\r
                        data-end="2496">filtered</strong> rainwater &rarr; you must build a <strong data-start="2526"\r
                        data-end="2549">Purification Module</strong></p>\r
            </li>\r
            <li data-start="2550" data-end="2625">\r
                <p data-start="2552" data-end="2625">Rare seeds (e.g. algae, air plants) grow only in <strong\r
                        data-start="2601" data-end="2625">low-acid rain cycles</strong></p>\r
            </li>\r
            <li data-start="2626" data-end="2682">\r
                <p data-start="2628" data-end="2682">Option to <strong data-start="2638" data-end="2659">automate\r
                        watering</strong> using AI helper drones</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2684" data-end="2687" />\r
        <h2 data-start="2689" data-end="2714">🔮 Future Enhancements</h2>\r
        <div class="_tableContainer_16hzy_1">\r
            <div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="2715" data-end="3067">\r
                    <thead data-start="2715" data-end="2733">\r
                        <tr data-start="2715" data-end="2733">\r
                            <th data-start="2715" data-end="2725" data-col-size="sm">Feature</th>\r
                            <th data-start="2725" data-end="2733" data-col-size="md">Idea</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="2752" data-end="3067">\r
                        <tr data-start="2752" data-end="2792">\r
                            <td data-start="2752" data-end="2761" data-col-size="sm">AI Bot</td>\r
                            <td data-start="2761" data-end="2792" data-col-size="md">Auto-manage plant hydration</td>\r
                        </tr>\r
                        <tr data-start="2793" data-end="2845">\r
                            <td data-start="2793" data-end="2802" data-col-size="sm">Market</td>\r
                            <td data-start="2802" data-end="2845" data-col-size="md">Trade harvested crops for tech\r
                                upgrades</td>\r
                        </tr>\r
                        <tr data-start="2846" data-end="2899">\r
                            <td data-start="2846" data-end="2863" data-col-size="sm">Climate Effect</td>\r
                            <td data-start="2863" data-end="2899" data-col-size="md">Too much acid rain stunts growth\r
                            </td>\r
                        </tr>\r
                        <tr data-start="2900" data-end="2968">\r
                            <td data-start="2900" data-end="2919" data-col-size="sm">Lighting Control</td>\r
                            <td data-start="2919" data-end="2968" data-col-size="md">Use solar panels to extend daylight\r
                                for crops</td>\r
                        </tr>\r
                        <tr data-start="2969" data-end="3067">\r
                            <td data-start="2969" data-end="3001" data-col-size="sm">Power + Water Interdependence</td>\r
                            <td data-start="3001" data-end="3067" data-col-size="md">Garden depends on sustainable power\r
                                from stored rain batteries</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
            </div>\r
        </div>\r
    </article>\r
</body>\r
\r
</html>`,om=`<!DOCTYPE html>\r
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
        <h2 data-start="128" data-end="182">🎮 Game Title: <strong data-start="146" data-end="182">"Picnic Panic: Nature\r
                Adventure"</strong></h2>\r
        <h3 data-start="184" data-end="199">🌟 Concept:</h3>\r
        <p data-start="200" data-end="418">A vibrant 2.5D or 3D picnic simulation-adventure game where players must set\r
            up and protect their picnic in a dynamic environment, facing challenges like weather changes, animals, time\r
            constraints, and item collection.</p>\r
        <hr data-start="420" data-end="423" />\r
        <h2 data-start="425" data-end="449">🧠 Core Technologies:</h2>\r
        <div class="_tableContainer_16hzy_1">\r
            <div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="450" data-end="1103">\r
                    <thead data-start="450" data-end="504">\r
                        <tr data-start="450" data-end="504">\r
                            <th data-start="450" data-end="475" data-col-size="sm">Feature</th>\r
                            <th data-start="475" data-end="504" data-col-size="md">Modern Tools &amp; Frameworks</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="561" data-end="1103">\r
                        <tr data-start="561" data-end="646">\r
                            <td data-start="561" data-end="586" data-col-size="sm">Graphics Engine</td>\r
                            <td data-start="586" data-end="646" data-col-size="md"><strong data-start="588"\r
                                    data-end="620">Unreal Engine 5 (C++ native)</strong> or <strong data-start="624"\r
                                    data-end="637">SFML/SDL2</strong> for 2D</td>\r
                        </tr>\r
                        <tr data-start="647" data-end="712">\r
                            <td data-start="647" data-end="672" data-col-size="sm">Physics Simulation</td>\r
                            <td data-start="672" data-end="712" data-col-size="md"><strong data-start="674"\r
                                    data-end="683">PhysX</strong> (via Unreal or standalone)</td>\r
                        </tr>\r
                        <tr data-start="713" data-end="774">\r
                            <td data-start="713" data-end="738" data-col-size="sm">UI &amp; UX Design</td>\r
                            <td data-start="738" data-end="774" data-col-size="md"><strong data-start="740"\r
                                    data-end="754">Unreal UMG</strong> or <strong data-start="758" data-end="772">Dear\r
                                    ImGui</strong></td>\r
                        </tr>\r
                        <tr data-start="775" data-end="826">\r
                            <td data-start="775" data-end="800" data-col-size="sm">Sound &amp; Music</td>\r
                            <td data-start="800" data-end="826" data-col-size="md"><strong data-start="802"\r
                                    data-end="810">FMOD</strong> or <strong data-start="814"\r
                                    data-end="824">OpenAL</strong></td>\r
                        </tr>\r
                        <tr data-start="827" data-end="878">\r
                            <td data-start="827" data-end="852" data-col-size="sm">Input &amp; Devices</td>\r
                            <td data-start="852" data-end="878" data-col-size="md"><strong data-start="854"\r
                                    data-end="876">Gamepad + Keyboard</strong></td>\r
                        </tr>\r
                        <tr data-start="879" data-end="948">\r
                            <td data-start="879" data-end="904" data-col-size="sm">AI &amp; Pathfinding</td>\r
                            <td data-start="904" data-end="948" data-col-size="md"><strong data-start="906"\r
                                    data-end="924">Behavior Trees</strong> (Unreal) or custom A*</td>\r
                        </tr>\r
                        <tr data-start="949" data-end="1036">\r
                            <td data-start="949" data-end="976" data-col-size="sm">Robotic Sensor Emulation</td>\r
                            <td data-start="976" data-end="1036" data-col-size="md">Simulated via game physics (e.g.,\r
                                motion detection, GPS)</td>\r
                        </tr>\r
                        <tr data-start="1037" data-end="1103">\r
                            <td data-start="1037" data-end="1062" data-col-size="sm">Multiplayer (Optional)</td>\r
                            <td data-start="1062" data-end="1103" data-col-size="md"><strong data-start="1064"\r
                                    data-end="1077">Steam SDK</strong> / <strong data-start="1080"\r
                                    data-end="1101">Unreal Subsystems</strong></td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="1105" data-end="1108" />\r
        <h2 data-start="1110" data-end="1130">🧺 Game Features:</h2>\r
        <h3 data-start="1131" data-end="1148">✅ Game Modes:</h3>\r
        <ul data-start="1149" data-end="1346">\r
            <li data-start="1149" data-end="1204">\r
                <p data-start="1151" data-end="1204"><strong data-start="1151" data-end="1171">Solo Picnic\r
                        Mode</strong>: Set up your picnic and explore.</p>\r
            </li>\r
            <li data-start="1205" data-end="1280">\r
                <p data-start="1207" data-end="1280"><strong data-start="1207" data-end="1231">Survival Picnic\r
                        Mode</strong>: Protect your food from ants, rain, and animals.</p>\r
            </li>\r
            <li data-start="1281" data-end="1346">\r
                <p data-start="1283" data-end="1346"><strong data-start="1283" data-end="1298">Picnic Race</strong>:\r
                    Compete to collect items before time runs out.</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="1348" data-end="1368">✅ Key Mechanics:</h3>\r
        <ul data-start="1369" data-end="1661">\r
            <li data-start="1369" data-end="1402">\r
                <p data-start="1371" data-end="1402"><strong data-start="1371" data-end="1402">Drag-and-drop picnic\r
                        layout</strong></p>\r
            </li>\r
            <li data-start="1403" data-end="1449">\r
                <p data-start="1405" data-end="1449"><strong data-start="1405" data-end="1431">Dynamic Weather\r
                        System</strong> (sun, rain, wind)</p>\r
            </li>\r
            <li data-start="1450" data-end="1491">\r
                <p data-start="1452" data-end="1491"><strong data-start="1452" data-end="1466">AI Animals</strong>\r
                    (squirrels, birds, ants)</p>\r
            </li>\r
            <li data-start="1492" data-end="1552">\r
                <p data-start="1494" data-end="1552"><strong data-start="1494" data-end="1523">Inventory &amp; Recipe\r
                        System</strong> (sandwiches, fruits, juices)</p>\r
            </li>\r
            <li data-start="1553" data-end="1610">\r
                <p data-start="1555" data-end="1610"><strong data-start="1555" data-end="1573">Scoring System</strong>\r
                    (cleanliness, food saved, fun level)</p>\r
            </li>\r
            <li data-start="1611" data-end="1661">\r
                <p data-start="1613" data-end="1661"><strong data-start="1613" data-end="1627">Mini-games</strong>\r
                    (Frisbee toss, kite flying, etc.)</p>\r
            </li>\r
        </ul>\r
        <hr data-start="1663" data-end="1666" />\r
        <h2 data-start="1668" data-end="1718">🧩 Sample System Architecture (for Unreal/C++):</h2>\r
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
                    class="whitespace-pre! language-cpp"><span class="hljs-keyword">class</span> <span class="hljs-title class_">APicnicGameManager</span> : <span class="hljs-keyword">public</span> AActor { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">BeginPlay</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) <span class="hljs-keyword">override</span>; <span class="hljs-keyword">private</span>: <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">InitializePicnicArea</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">SpawnAnimals</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UpdateWeather</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">HandleMiniGames</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">CheckScore</span><span class="hljs-params">()</span>; }; </code>\r
            </div>\r
        </div>\r
        <h3 data-start="2040" data-end="2072">🌦️ Dynamic Weather Example:</h3>\r
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
                    class="whitespace-pre! language-cpp"><span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">APicnicGameManager::UpdateWeather</span><span class="hljs-params">()</span> { <span class="hljs-type">float</span> RandomVal = FMath::<span class="hljs-built_in">FRand</span>(); <span class="hljs-keyword">if</span> (RandomVal &lt; <span class="hljs-number">0.2f</span>) { CurrentWeather = EPicnicWeather::Rainy; <span class="hljs-built_in">ActivateRainEffect</span>(); <span class="hljs-built_in">PlayThunderSound</span>(); } <span class="hljs-keyword">else</span> { CurrentWeather = EPicnicWeather::Sunny; } } </code>\r
            </div>\r
        </div>\r
        <hr data-start="2373" data-end="2376" />\r
        <h2 data-start="2378" data-end="2393">🎨 UI &amp; Art:</h2>\r
        <ul data-start="2394" data-end="2534">\r
            <li data-start="2394" data-end="2436">\r
                <p data-start="2396" data-end="2436">Cartoon-style 3D models for picnic items</p>\r
            </li>\r
            <li data-start="2437" data-end="2493">\r
                <p data-start="2439" data-end="2493">Day-Night cycle with real-time lighting (Lumen if UE5)</p>\r
            </li>\r
            <li data-start="2494" data-end="2534">\r
                <p data-start="2496" data-end="2534">UI Score bar, item inventory, mini-map</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2536" data-end="2539" />\r
        <h2 data-start="2541" data-end="2556">🔊 Sound FX:</h2>\r
        <ul data-start="2557" data-end="2660">\r
            <li data-start="2557" data-end="2571">\r
                <p data-start="2559" data-end="2571">Buzzing bees</p>\r
            </li>\r
            <li data-start="2572" data-end="2585">\r
                <p data-start="2574" data-end="2585">Bird chirps</p>\r
            </li>\r
            <li data-start="2586" data-end="2601">\r
                <p data-start="2588" data-end="2601">Food sizzling</p>\r
            </li>\r
            <li data-start="2602" data-end="2617">\r
                <p data-start="2604" data-end="2617">Wind rustling</p>\r
            </li>\r
            <li data-start="2618" data-end="2660">\r
                <p data-start="2620" data-end="2660">Picnic music (e.g., ukulele, light jazz)</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2662" data-end="2665" />\r
        <h2 data-start="2667" data-end="2685">🧪 Fun Add-ons:</h2>\r
        <ul data-start="2686" data-end="2823">\r
            <li data-start="2686" data-end="2722">\r
                <p data-start="2688" data-end="2722"><strong data-start="2688" data-end="2711">Picnic Drone\r
                        Camera</strong> (FPV mode)</p>\r
            </li>\r
            <li data-start="2723" data-end="2770">\r
                <p data-start="2725" data-end="2770"><strong data-start="2725" data-end="2739">Photo Mode</strong>\r
                    (selfies with picnic, animals)</p>\r
            </li>\r
            <li data-start="2771" data-end="2823">\r
                <p data-start="2773" data-end="2823"><strong data-start="2773" data-end="2787">Eco Points</strong> (if\r
                    you clean up, compost, recycle)</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2825" data-end="2828" />\r
        <h2 data-start="2830" data-end="2851">📈 Scoring System:</h2>\r
        <div class="_tableContainer_16hzy_1">\r
            <div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="2852" data-end="3094">\r
                    <thead data-start="2852" data-end="2885">\r
                        <tr data-start="2852" data-end="2885">\r
                            <th data-start="2852" data-end="2875" data-col-size="sm">Action</th>\r
                            <th data-start="2875" data-end="2885" data-col-size="sm">Points</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="2920" data-end="3094">\r
                        <tr data-start="2920" data-end="2954">\r
                            <td data-start="2920" data-end="2944" data-col-size="sm">Setting up picnic</td>\r
                            <td data-start="2944" data-end="2954" data-col-size="sm">+50</td>\r
                        </tr>\r
                        <tr data-start="2955" data-end="2989">\r
                            <td data-start="2955" data-end="2979" data-col-size="sm">Saving food from ants</td>\r
                            <td data-start="2979" data-end="2989" data-col-size="sm">+25</td>\r
                        </tr>\r
                        <tr data-start="2990" data-end="3024">\r
                            <td data-start="2990" data-end="3014" data-col-size="sm">Cleaning up properly</td>\r
                            <td data-start="3014" data-end="3024" data-col-size="sm">+100</td>\r
                        </tr>\r
                        <tr data-start="3025" data-end="3059">\r
                            <td data-start="3025" data-end="3049" data-col-size="sm">Wasting food</td>\r
                            <td data-start="3049" data-end="3059" data-col-size="sm">-50</td>\r
                        </tr>\r
                        <tr data-start="3060" data-end="3094">\r
                            <td data-start="3060" data-end="3084" data-col-size="sm">Getting wet</td>\r
                            <td data-start="3084" data-end="3094" data-col-size="sm">-20</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="3096" data-end="3099" />\r
        <h2 data-start="3101" data-end="3130">🛠️ Tools for Development:</h2>\r
        <ul data-start="3131" data-end="3302">\r
            <li data-start="3131" data-end="3184">\r
                <p data-start="3133" data-end="3184"><strong data-start="3133" data-end="3152">Unreal Engine 5</strong>\r
                    with <strong data-start="3158" data-end="3184">Blueprint + C++ Hybrid</strong></p>\r
            </li>\r
            <li data-start="3185" data-end="3214">\r
                <p data-start="3187" data-end="3214"><strong data-start="3187" data-end="3195">FMOD</strong> for\r
                    adaptive sound</p>\r
            </li>\r
            <li data-start="3215" data-end="3263">\r
                <p data-start="3217" data-end="3263"><strong data-start="3217" data-end="3228">Blender</strong> or\r
                    <strong data-start="3232" data-end="3242">Mixamo</strong> for models/animation</p>\r
            </li>\r
            <li data-start="3264" data-end="3302">\r
                <p data-start="3266" data-end="3302"><strong data-start="3266" data-end="3282">Perforce/Git</strong> for\r
                    version control</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3304" data-end="3307" />\r
        <h2 data-start="3309" data-end="3335">🎯 Future Enhancements:</h2>\r
        <ul data-start="3336" data-end="3484">\r
            <li data-start="3336" data-end="3362">\r
                <p data-start="3338" data-end="3362">Multiplayer co-op picnic</p>\r
            </li>\r
            <li data-start="3363" data-end="3413">\r
                <p data-start="3365" data-end="3413">Seasonal events (spring picnic, winter snow day)</p>\r
            </li>\r
            <li data-start="3414" data-end="3450">\r
                <p data-start="3416" data-end="3450">Real-world GPS-linked picnic spots</p>\r
            </li>\r
            <li data-start="3451" data-end="3484">\r
                <p data-start="3453" data-end="3484">VR support (Unreal VR template)</p>\r
            </li>\r
        </ul>\r
    </article>\r
</body>\r
\r
</html>`,im=`<!DOCTYPE html>\r
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
        <h1 data-start="88" data-end="129">🎮 <strong data-start="93" data-end="127">Picnic Panic: Nature\r
                Adventure</strong></h1>\r
        <h3 data-start="130" data-end="192">A Modern Seasonal Picnic Game in Unreal Engine 5 using C++</h3>\r
        <hr data-start="194" data-end="197" />\r
        <h2 data-start="199" data-end="268">🧾 Part 1: Game Overview</h2>\r
        <blockquote data-start="270" data-end="592">\r
            <p data-start="272" data-end="592"><strong data-start="272" data-end="319">Welcome, game developers and\r
                    nature lovers!</strong><br data-start="319" data-end="322" /> In this blog, we're diving deep into a\r
                <strong data-start="363" data-end="389">modern Unreal Engine 5</strong> C++ project called <strong\r
                    data-start="409" data-end="446">&ldquo;Picnic Panic: Nature Adventure.&rdquo;</strong> This game\r
                takes the simple joy of a picnic and elevates it with interactive gameplay, seasonal events, wildlife\r
                AI, and advanced weather effects.</p>\r
        </blockquote>\r
        <p data-start="594" data-end="859">Imagine setting up your picnic on a sunny spring day&hellip; until squirrels\r
            steal your food, bees buzz around, or snow suddenly starts falling in winter mode.<br data-start="746"\r
                data-end="749" /> This guide includes <strong data-start="769" data-end="789">full C++ classes</strong>,\r
            <strong data-start="791" data-end="807">explanations</strong>, and <strong data-start="813"\r
                data-end="835">modular game logic</strong> that you can expand on.</p>\r
        <hr data-start="861" data-end="864" />\r
        <h2 data-start="866" data-end="901">🏗️ Game Components (Unreal UE5)</h2>\r
        <div class="_tableContainer_16hzy_1">\r
            <div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">\r
                <table class="w-fit min-w-(--thread-content-width)" data-start="902" data-end="1323">\r
                    <thead data-start="902" data-end="926">\r
                        <tr data-start="902" data-end="926">\r
                            <th data-start="902" data-end="911" data-col-size="sm">System</th>\r
                            <th data-start="911" data-end="926" data-col-size="sm">Description</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody data-start="952" data-end="1323">\r
                        <tr data-start="952" data-end="1017">\r
                            <td data-start="952" data-end="975" data-col-size="sm"><code data-start="954"\r
                                    data-end="974">APicnicGameManager</code></td>\r
                            <td data-start="975" data-end="1017" data-col-size="sm">Core controller: weather, time,\r
                                season</td>\r
                        </tr>\r
                        <tr data-start="1018" data-end="1071">\r
                            <td data-start="1018" data-end="1034" data-col-size="sm"><code data-start="1020"\r
                                    data-end="1033">APicnicItem</code></td>\r
                            <td data-start="1034" data-end="1071" data-col-size="sm">Generic class for food, mat, etc.\r
                            </td>\r
                        </tr>\r
                        <tr data-start="1072" data-end="1116">\r
                            <td data-start="1072" data-end="1086" data-col-size="sm"><code data-start="1074"\r
                                    data-end="1085">AAnimalAI</code></td>\r
                            <td data-start="1086" data-end="1116" data-col-size="sm">For bees, birds, squirrels</td>\r
                        </tr>\r
                        <tr data-start="1117" data-end="1167">\r
                            <td data-start="1117" data-end="1133" data-col-size="sm"><code data-start="1119"\r
                                    data-end="1132">UUserWidget</code></td>\r
                            <td data-start="1133" data-end="1167" data-col-size="sm">UI for timer, inventory, score</td>\r
                        </tr>\r
                        <tr data-start="1168" data-end="1211">\r
                            <td data-start="1168" data-end="1190" data-col-size="sm"><code data-start="1170"\r
                                    data-end="1181">USoundCue</code>, <code data-start="1183"\r
                                    data-end="1189">FMOD</code></td>\r
                            <td data-start="1190" data-end="1211" data-col-size="sm">Audio integration</td>\r
                        </tr>\r
                        <tr data-start="1212" data-end="1277">\r
                            <td data-start="1212" data-end="1235" data-col-size="sm"><code data-start="1214"\r
                                    data-end="1234">PicnicSeasonSystem</code></td>\r
                            <td data-start="1235" data-end="1277" data-col-size="sm">Handles spring, summer, winter\r
                                changes</td>\r
                        </tr>\r
                        <tr data-start="1278" data-end="1323">\r
                            <td data-start="1278" data-end="1300" data-col-size="sm"><code data-start="1280"\r
                                    data-end="1299">DroneCamComponent</code></td>\r
                            <td data-start="1300" data-end="1323" data-col-size="sm">Flying picnic camera!</td>\r
                        </tr>\r
                    </tbody>\r
                </table>\r
                <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>\r
            </div>\r
        </div>\r
        <hr data-start="1325" data-end="1328" />\r
        <h2 data-start="1330" data-end="1361">🧠 Part 2: Main Game Manager</h2>\r
        <h3 data-start="1363" data-end="1397">📦 File: <code data-start="1376"\r
                data-end="1397">PicnicGameManager.h</code></h3>\r
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
                    class="whitespace-pre! language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/Actor.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"PicnicGameManager.generated.h"</span> <span class="hljs-built_in">UENUM</span>(BlueprintType) <span class="hljs-keyword">enum class</span> <span class="hljs-title class_">EPicnicSeason</span> : uint8 { Spring, Summer, Winter }; <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">PICNICPANIC_API</span> APicnicGameManager : <span class="hljs-keyword">public</span> AActor { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">APicnicGameManager</span>(); <span class="hljs-keyword">protected</span>: <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">BeginPlay</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) <span class="hljs-keyword">override</span>; <span class="hljs-keyword">private</span>: <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ChangeSeason</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">SpawnPicnicItems</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">HandleWeather</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UpdateScore</span><span class="hljs-params">()</span>; FTimerHandle SeasonTimer; int32 TotalScore; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere) EPicnicSeason CurrentSeason; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere) TSubclassOf&lt;AActor&gt; PicnicMatClass; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere) TSubclassOf&lt;AActor&gt; FoodItemClass; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere) <span class="hljs-keyword">class</span> <span class="hljs-title class_">USoundCue</span>* BackgroundMusic; }; </code>\r
            </div>\r
        </div>\r
        <hr data-start="2272" data-end="2275" />\r
        <h3 data-start="2277" data-end="2310">🧠 Explanation (Word-by-Word)</h3>\r
        <ul data-start="2312" data-end="2915">\r
            <li data-start="2312" data-end="2405">\r
                <p data-start="2314" data-end="2405"><code data-start="2314" data-end="2336">UENUM(BlueprintType)</code>\r
                    defines a blueprint-accessible season type (Spring, Summer, Winter).</p>\r
            </li>\r
            <li data-start="2406" data-end="2515">\r
                <p data-start="2408" data-end="2515"><code data-start="2408" data-end="2428">APicnicGameManager</code>\r
                    inherits from <code data-start="2443" data-end="2451">AActor</code>, meaning it will be placed in\r
                    the world and updated every tick.</p>\r
            </li>\r
            <li data-start="2516" data-end="2573">\r
                <p data-start="2518" data-end="2573"><code data-start="2518" data-end="2531">BeginPlay()</code> starts\r
                    timers and initializes the picnic.</p>\r
            </li>\r
            <li data-start="2574" data-end="2656">\r
                <p data-start="2576" data-end="2656"><code data-start="2576" data-end="2584">Tick()</code> allows\r
                    real-time control of weather, animal spawns, or camera behavior.</p>\r
            </li>\r
            <li data-start="2657" data-end="2724">\r
                <p data-start="2659" data-end="2724"><code data-start="2659"\r
                        data-end="2685">FTimerHandle SeasonTimer</code> is used to trigger <strong data-start="2705"\r
                        data-end="2723">season changes</strong>.</p>\r
            </li>\r
            <li data-start="2725" data-end="2801">\r
                <p data-start="2727" data-end="2801"><code data-start="2727" data-end="2739">TotalScore</code> tracks\r
                    your performance (cleanliness, food saved, time, etc).</p>\r
            </li>\r
            <li data-start="2802" data-end="2867">\r
                <p data-start="2804" data-end="2867"><code data-start="2804"\r
                        data-end="2825">TSubclassOf&lt;AActor&gt;</code> allows dynamic spawning of food and mats.</p>\r
            </li>\r
            <li data-start="2868" data-end="2915">\r
                <p data-start="2870" data-end="2915"><code data-start="2870" data-end="2881">USoundCue</code> handles\r
                    our <strong data-start="2894" data-end="2914">background music</strong>.</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2917" data-end="2920" />\r
        <h2 data-start="2922" data-end="2961">🌤️ Part 3: Seasons &amp; Weather System</h2>\r
        <h3 data-start="2963" data-end="2999">📦 File: <code data-start="2976"\r
                data-end="2999">PicnicGameManager.cpp</code></h3>\r
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
                    class="whitespace-pre! language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"PicnicGameManager.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Kismet/GameplayStatics.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Sound/SoundCue.h"</span> APicnicGameManager::<span class="hljs-built_in">APicnicGameManager</span>() { PrimaryActorTick.bCanEverTick = <span class="hljs-literal">true</span>; CurrentSeason = EPicnicSeason::Spring; TotalScore = <span class="hljs-number">0</span>; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">APicnicGameManager::BeginPlay</span><span class="hljs-params">()</span> { Super::<span class="hljs-built_in">BeginPlay</span>(); <span class="hljs-built_in">SpawnPicnicItems</span>(); <span class="hljs-built_in">GetWorld</span>()-&gt;<span class="hljs-built_in">GetTimerManager</span>().<span class="hljs-built_in">SetTimer</span>(SeasonTimer, <span class="hljs-keyword">this</span>, &amp;APicnicGameManager::ChangeSeason, <span class="hljs-number">60.0f</span>, <span class="hljs-literal">true</span>); UGameplayStatics::<span class="hljs-built_in">PlaySound2D</span>(<span class="hljs-keyword">this</span>, BackgroundMusic); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">APicnicGameManager::Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) { Super::<span class="hljs-built_in">Tick</span>(DeltaTime); <span class="hljs-built_in">HandleWeather</span>(); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">APicnicGameManager::SpawnPicnicItems</span><span class="hljs-params">()</span> { <span class="hljs-built_in">GetWorld</span>()-&gt;<span class="hljs-built_in">SpawnActor</span>&lt;AActor&gt;(PicnicMatClass, <span class="hljs-built_in">FVector</span>(<span class="hljs-number">200</span>, <span class="hljs-number">200</span>, <span class="hljs-number">100</span>), FRotator::ZeroRotator); <span class="hljs-built_in">GetWorld</span>()-&gt;<span class="hljs-built_in">SpawnActor</span>&lt;AActor&gt;(FoodItemClass, <span class="hljs-built_in">FVector</span>(<span class="hljs-number">250</span>, <span class="hljs-number">200</span>, <span class="hljs-number">100</span>), FRotator::ZeroRotator); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">APicnicGameManager::ChangeSeason</span><span class="hljs-params">()</span> { <span class="hljs-keyword">switch</span> (CurrentSeason) { <span class="hljs-keyword">case</span> EPicnicSeason::Spring: CurrentSeason = EPicnicSeason::Winter; <span class="hljs-keyword">break</span>; <span class="hljs-keyword">case</span> EPicnicSeason::Winter: CurrentSeason = EPicnicSeason::Summer; <span class="hljs-keyword">break</span>; <span class="hljs-keyword">case</span> EPicnicSeason::Summer: <span class="hljs-keyword">default</span>: CurrentSeason = EPicnicSeason::Spring; <span class="hljs-keyword">break</span>; } <span class="hljs-built_in">UE_LOG</span>(LogTemp, Warning, <span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"Season changed to: %d"</span>), (int32)CurrentSeason); }</code>\r
            </div>\r
        </div>\r
    </article>\r
</body>\r
\r
</html>`,lm=`<!DOCTYPE html>\r
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
        <h1 data-start="430" data-end="478">Rainfall Rescue &ndash; Building a Fun SFML C++ Game</h1>\r
        <h2 data-start="480" data-end="531">Introduction &ndash; Bringing the Rain to Life in Code</h2>\r
        <p data-start="532" data-end="741">Have you ever wished you could control the rain? In this exciting C++\r
            project, we&rsquo;re doing just that &ndash; building <strong data-start="644" data-end="663">Rainfall\r
                Rescue</strong>, a 2D arcade-style game where players catch pure rain and avoid acid drops.</p>\r
        <p data-start="743" data-end="764">This game combines:</p>\r
        <ul data-start="765" data-end="882">\r
            <li data-start="765" data-end="781">\r
                <p data-start="767" data-end="781">Fun gameplay</p>\r
            </li>\r
            <li data-start="782" data-end="819">\r
                <p data-start="784" data-end="819">Real-world environmental concepts</p>\r
            </li>\r
            <li data-start="820" data-end="882">\r
                <p data-start="822" data-end="882">The power of <strong data-start="835" data-end="880">SFML (Simple and\r
                        Fast Multimedia Library)</strong></p>\r
            </li>\r
        </ul>\r
        <p data-start="884" data-end="1178">In <strong data-start="887" data-end="906">Rainfall Rescue</strong>,\r
            you&rsquo;ll move a bucket left and right to collect clean rainwater. Every drop you catch boosts your score\r
            and helps plants grow, while acid rain harms them. Add realistic rain sounds, splashes, and simple particle\r
            effects, and you&rsquo;ve got a truly immersive coding project.</p>\r
        <hr data-start="1180" data-end="1183" />\r
        <h2 data-start="1185" data-end="1226">Section 1 &ndash; Setting Up SFML on Windows</h2>\r
        <p data-start="1228" data-end="1246"><strong data-start="1228" data-end="1244">You&rsquo;ll need:</strong></p>\r
        <ul data-start="1247" data-end="1533">\r
            <li data-start="1247" data-end="1326">\r
                <p data-start="1249" data-end="1326">Windows PC with a C++ compiler (<strong data-start="1281"\r
                        data-end="1290">MinGW</strong> or <strong data-start="1294" data-end="1311">Visual\r
                        Studio</strong> recommended)</p>\r
            </li>\r
            <li data-start="1327" data-end="1390">\r
                <p data-start="1329" data-end="1390"><strong data-start="1329" data-end="1342">SFML 2.5+</strong> from\r
                    <a class="cursor-pointer" target="_new" rel="noopener" data-start="1348"\r
                        data-end="1388">sfml-dev.org</a>\r
                </p>\r
            </li>\r
            <li data-start="1391" data-end="1533">\r
                <p data-start="1393" data-end="1423">A project folder containing:</p>\r
                <ul data-start="1426" data-end="1533">\r
                    <li data-start="1426" data-end="1454">\r
                        <p data-start="1428" data-end="1454"><code data-start="1428"\r
                                data-end="1452">Rainfall_SFML_Game.cpp</code></p>\r
                    </li>\r
                    <li data-start="1457" data-end="1533">\r
                        <p data-start="1459" data-end="1533">An <code data-start="1462" data-end="1470">assets</code>\r
                            folder with your font (<code data-start="1494" data-end="1514">Roboto-Regular.ttf</code>)\r
                            and sound files</p>\r
                    </li>\r
                </ul>\r
            </li>\r
        </ul>\r
        <p data-start="1535" data-end="1558"><strong data-start="1535" data-end="1558">Compile with MinGW:</strong></p>\r
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
                                class="flex items-center gap-1 py-1 select-none">Edit</button></span>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="overflow-y-auto p-4" dir="ltr"><code\r
                    class="whitespace-pre! language-bash">g++ -std=c++17 -O2 -I<span class="hljs-string">"C:\\SFML\\include"</span> Rainfall_SFML_Game.cpp -o Rainfall.exe -L<span class="hljs-string">"C:\\SFML\\lib"</span> -lsfml-graphics -lsfml-window -lsfml-system -lsfml-audio </code>\r
            </div>\r
        </div>\r
        <hr data-start="1723" data-end="1726" />\r
        <h2 data-start="1728" data-end="1756">Section 2 &ndash; Game Features</h2>\r
        <ul data-start="1758" data-end="2091">\r
            <li data-start="1758" data-end="1826">\r
                <p data-start="1760" data-end="1826"><strong data-start="1760" data-end="1781">Dynamic\r
                        raindrops</strong>: clean drops to catch, acid drops to avoid</p>\r
            </li>\r
            <li data-start="1827" data-end="1880">\r
                <p data-start="1829" data-end="1880"><strong data-start="1829" data-end="1857">Player-controlled\r
                        bucket</strong> with smooth movement</p>\r
            </li>\r
            <li data-start="1881" data-end="1938">\r
                <p data-start="1883" data-end="1938"><strong data-start="1883" data-end="1904">Real-time\r
                        scoring</strong> and <strong data-start="1909" data-end="1936">plant health indicators</strong>\r
                </p>\r
            </li>\r
            <li data-start="1939" data-end="1997">\r
                <p data-start="1941" data-end="1997"><strong data-start="1941" data-end="1958">Sound effects</strong>\r
                    for rain, splashes, and acid hissing</p>\r
            </li>\r
            <li data-start="1998" data-end="2040">\r
                <p data-start="2000" data-end="2040"><strong data-start="2000" data-end="2019">Particle bursts</strong>\r
                    for water splashes</p>\r
            </li>\r
            <li data-start="2041" data-end="2091">\r
                <p data-start="2043" data-end="2091">Simple, clean visuals without external sprites</p>\r
            </li>\r
        </ul>\r
        <hr data-start="2093" data-end="2096" />\r
        <h2 data-start="2098" data-end="2145">Section 3 &ndash; The Code, Explained Step-by-Step</h2>\r
\r
        <p>#include &lt;SFML/Graphics.hpp&gt;<br />#include &lt;vector&gt;<br />#include &lt;random&gt;<br />#include\r
            &lt;string&gt;<br />#include &lt;sstream&gt;</p>\r
        <p>struct Raindrop {<br /> sf::CircleShape shape;<br /> float speed;<br /> bool acid;<br />};</p>\r
        <p>int main() {<br /> const unsigned int WINDOW_W = 1024;<br /> const unsigned int WINDOW_H = 720;<br />\r
            sf::RenderWindow window(sf::VideoMode(WINDOW_W, WINDOW_H), "Rainfall Eco-Proto");<br />\r
            window.setFramerateLimit(60);</p>\r
        <p>std::random_device rd;<br /> std::mt19937 rng(rd());<br /> std::uniform_real_distribution&lt;float&gt;\r
            xDist(20.f, WINDOW_W - 20.f);<br /> std::uniform_real_distribution&lt;float&gt; speedDist(140.f,\r
            360.f);<br /> std::uniform_real_distribution&lt;float&gt; acidChance(0.f, 1.f);</p>\r
        <p>sf::RectangleShape bucket(sf::Vector2f(120.f, 24.f));<br /> bucket.setOrigin(bucket.getSize().x/2.f,\r
            bucket.getSize().y/2.f);<br /> bucket.setPosition(WINDOW_W/2.f, WINDOW_H - 60.f);<br />\r
            bucket.setFillColor(sf::Color(100, 149, 237));</p>\r
        <p>sf::RectangleShape ground(sf::Vector2f((float)WINDOW_W, 100.f));<br /> ground.setPosition(0.f, WINDOW_H -\r
            50.f);<br /> ground.setFillColor(sf::Color(50, 160, 60));</p>\r
        <p>float plantHealth = 0.6f;<br /> sf::CircleShape plant(28.f);<br /> plant.setOrigin(plant.getRadius(),\r
            plant.getRadius());<br /> plant.setPosition(100.f, WINDOW_H - 90.f);</p>\r
        <p>sf::Font font;<br /> bool fontLoaded = font.loadFromFile("assets/Roboto-Regular.ttf");</p>\r
        <p>sf::Text hudText;<br /> if (fontLoaded) {<br /> hudText.setFont(font);<br />\r
            hudText.setCharacterSize(18);<br /> hudText.setFillColor(sf::Color::White);<br /> hudText.setPosition(10.f,\r
            10.f);<br /> }</p>\r
        <p>std::vector&lt;Raindrop&gt; drops;<br /> float spawnTimer = 0.f;<br /> float spawnInterval = 0.15f;<br /> int\r
            score = 0;<br /> float soilMoisture = 0.3f;<br /> float gameTime = 60.f;</p>\r
        <p>sf::Clock clock;</p>\r
        <p>auto spawnDrop = [&amp;](float overrideX = -1.f) {<br /> Raindrop d;<br /> d.shape =\r
            sf::CircleShape(8.f);<br /> float x = (overrideX &lt; 0.f) ? xDist(rng) : overrideX;<br />\r
            d.shape.setPosition(x, -10.f);<br /> d.speed = speedDist(rng);<br /> d.acid = (acidChance(rng) &lt;\r
            0.12f);<br /> d.shape.setFillColor(d.acid ? sf::Color(170, 0, 255) : sf::Color(120, 180, 255));<br />\r
            drops.push_back(std::move(d));<br /> };</p>\r
        <p>for (int i=0;i&lt;6;i++) spawnDrop();</p>\r
        <p>while (window.isOpen()) {<br /> float dt = clock.restart().asSeconds();<br /> gameTime -= dt;</p>\r
        <p>sf::Event ev;<br /> while (window.pollEvent(ev)) {<br /> if (ev.type == sf::Event::Closed)\r
            window.close();<br /> }</p>\r
        <p>if (sf::Keyboard::isKeyPressed(sf::Keyboard::Left) || sf::Keyboard::isKeyPressed(sf::Keyboard::A))<br />\r
            bucket.move(-420.f * dt, 0.f);<br /> if (sf::Keyboard::isKeyPressed(sf::Keyboard::Right) ||\r
            sf::Keyboard::isKeyPressed(sf::Keyboard::D))<br /> bucket.move(420.f * dt, 0.f);</p>\r
        <p>if (bucket.getPosition().x &lt; bucket.getSize().x/2.f) bucket.setPosition(bucket.getSize().x/2.f,\r
            bucket.getPosition().y);<br /> if (bucket.getPosition().x &gt; WINDOW_W - bucket.getSize().x/2.f)\r
            bucket.setPosition(WINDOW_W - bucket.getSize().x/2.f, bucket.getPosition().y);</p>\r
        <p>spawnTimer += dt;<br /> if (spawnTimer &gt;= spawnInterval) {<br /> spawnTimer = 0.f;<br />\r
            spawnDrop();<br /> if (acidChance(rng) &lt; 0.08f) {<br /> float clusterX = xDist(rng);<br /> for (int\r
            i=0;i&lt;4;i++) spawnDrop(clusterX + (i-2)*12.f);<br /> }<br /> }</p>\r
        <p>for (size_t i=0;i&lt;drops.size();) {<br /> drops[i].shape.move(0.f, drops[i].speed * dt);<br /> if\r
            (drops[i].shape.getGlobalBounds().intersects(bucket.getGlobalBounds())) {<br /> if (drops[i].acid) {<br />\r
            score -= 5;<br /> soilMoisture = std::max(0.f, soilMoisture - 0.06f);<br /> plantHealth = std::max(0.f,\r
            plantHealth - 0.06f);<br /> } else {<br /> score += 10;<br /> soilMoisture = std::min(1.f, soilMoisture +\r
            0.05f);<br /> plantHealth = std::min(1.f, plantHealth + 0.03f);<br /> }<br /> drops.erase(drops.begin() +\r
            i);<br /> continue;<br /> }<br /> if (drops[i].shape.getPosition().y &gt; WINDOW_H - 40.f) {<br /> if\r
            (drops[i].acid) {<br /> plantHealth = std::max(0.f, plantHealth - 0.03f);<br /> } else {<br /> soilMoisture\r
            = std::min(1.f, soilMoisture + 0.02f);<br /> }<br /> drops.erase(drops.begin() + i);<br /> continue;<br />\r
            }<br /> ++i;<br /> }</p>\r
        <p>if (soilMoisture &lt; 0.4f) plantHealth = std::max(0.f, plantHealth - 0.01f * dt);<br /> else plantHealth =\r
            std::min(1.f, plantHealth + 0.02f * dt);</p>\r
        <p>soilMoisture = std::max(0.f, soilMoisture - 0.01f * dt);</p>\r
        <p>float plantScale = 0.6f + plantHealth * 1.2f;<br /> plant.setRadius(28.f * plantScale);<br />\r
            plant.setOrigin(plant.getRadius(), plant.getRadius());<br /> sf::Uint8 g = (sf::Uint8)(100 + plantHealth *\r
            155);<br /> sf::Uint8 r = (sf::Uint8)(60 + (1.f-plantHealth) * 120);<br /> plant.setFillColor(sf::Color(r,\r
            g, 40));</p>\r
        <p>window.clear(sf::Color(20, 24, 40));<br /> for (auto &amp;d : drops) window.draw(d.shape);<br />\r
            window.draw(ground);<br /> window.draw(plant);<br /> window.draw(bucket);</p>\r
        <p>if (fontLoaded) {<br /> std::stringstream s;<br /> s &lt;&lt; "Score: " &lt;&lt; score &lt;&lt; " Time: "\r
            &lt;&lt; (int)gameTime &lt;&lt; "s";<br /> s &lt;&lt; " Soil: " &lt;&lt; (int)(soilMoisture*100) &lt;&lt; "%\r
            Plant: " &lt;&lt; (int)(plantHealth*100) &lt;&lt; "%";<br /> hudText.setString(s.str());<br />\r
            window.draw(hudText);<br /> }</p>\r
        <p>window.display();<br /> }<br />}</p>\r
\r
        <h3 data-start="2147" data-end="2173">1. Including Libraries</h3>\r
        <p data-start="2174" data-end="2308">We include <strong data-start="2185" data-end="2201">SFML modules</strong>\r
            for graphics, window control, and audio. This provides shapes, text rendering, sound playback, and more.</p>\r
        <h3 data-start="2310" data-end="2338">2. Defining Game Objects</h3>\r
        <ul data-start="2339" data-end="2471">\r
            <li data-start="2339" data-end="2376">\r
                <p data-start="2341" data-end="2376"><strong data-start="2341" data-end="2351">Bucket</strong> &rarr;\r
                    <code data-start="2354" data-end="2374">sf::RectangleShape</code>\r
                </p>\r
            </li>\r
            <li data-start="2377" data-end="2414">\r
                <p data-start="2379" data-end="2414"><strong data-start="2379" data-end="2392">Raindrops</strong> &rarr;\r
                    <code data-start="2395" data-end="2412">sf::CircleShape</code>\r
                </p>\r
            </li>\r
            <li data-start="2415" data-end="2471">\r
                <p data-start="2417" data-end="2471"><strong data-start="2417" data-end="2430">Particles</strong> &rarr;\r
                    stored in <code data-start="2443" data-end="2456">std::vector</code> for splashes</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="2473" data-end="2494">3. Handling Input</h3>\r
        <p data-start="2495" data-end="2623">We check for <strong data-start="2508" data-end="2527">keyboard\r
                events</strong> to move the bucket left or right. Both arrow keys and <strong data-start="2582"\r
                data-end="2594">A/D keys</strong> are supported for comfort.</p>\r
        <h3 data-start="2625" data-end="2645">4. Spawning Rain</h3>\r
        <ul data-start="2646" data-end="2769">\r
            <li data-start="2646" data-end="2684">\r
                <p data-start="2648" data-end="2684">Timer-controlled raindrop creation</p>\r
            </li>\r
            <li data-start="2685" data-end="2716">\r
                <p data-start="2687" data-end="2716">Random positions and speeds</p>\r
            </li>\r
            <li data-start="2717" data-end="2769">\r
                <p data-start="2719" data-end="2769">Probability to decide if a drop is clean or acid</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="2771" data-end="2797">5. Collision Detection</h3>\r
        <p data-start="2798" data-end="2826">If a drop hits the bucket:</p>\r
        <ul data-start="2827" data-end="2902">\r
            <li data-start="2827" data-end="2862">\r
                <p data-start="2829" data-end="2862"><strong data-start="2829" data-end="2843">Clean drop</strong>\r
                    &rarr; increase score</p>\r
            </li>\r
            <li data-start="2863" data-end="2902">\r
                <p data-start="2865" data-end="2902"><strong data-start="2865" data-end="2878">Acid drop</strong> &rarr;\r
                    reduce plant health</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="2904" data-end="2923">6. Adding Sound</h3>\r
        <p data-start="2924" data-end="3008">We load <code data-start="2932" data-end="2938">.ogg</code> or <code\r
                data-start="2942" data-end="2948">.wav</code> into <code data-start="2954"\r
                data-end="2971">sf::SoundBuffer</code> and attach to <code data-start="2986"\r
                data-end="2997">sf::Sound</code> objects.</p>\r
        <ul data-start="3009" data-end="3117">\r
            <li data-start="3009" data-end="3038">\r
                <p data-start="3011" data-end="3038"><strong data-start="3011" data-end="3030">Rain background</strong>\r
                    loops</p>\r
            </li>\r
            <li data-start="3039" data-end="3078">\r
                <p data-start="3041" data-end="3078"><strong data-start="3041" data-end="3057">Splash sound</strong> for\r
                    catching drops</p>\r
            </li>\r
            <li data-start="3079" data-end="3117">\r
                <p data-start="3081" data-end="3117"><strong data-start="3081" data-end="3094">Acid hiss</strong> for\r
                    acid rain impact</p>\r
            </li>\r
        </ul>\r
        <h3 data-start="3119" data-end="3142">7. Particle Effects</h3>\r
        <p data-start="3143" data-end="3200">When drops hit, small fading circles simulate splashes.</p>\r
        <h3 data-start="3202" data-end="3226">8. Drawing the Frame</h3>\r
        <p data-start="3227" data-end="3241">Every frame:</p>\r
        <ul data-start="3242" data-end="3305">\r
            <li data-start="3242" data-end="3262">\r
                <p data-start="3244" data-end="3262">Clear the window</p>\r
            </li>\r
            <li data-start="3263" data-end="3305">\r
                <p data-start="3265" data-end="3305">Draw bucket, raindrops, particles, HUD</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3307" data-end="3310" />\r
        <h2 data-start="3312" data-end="3335">Fun Facts About Rain</h2>\r
        <ul data-start="3336" data-end="3534">\r
            <li data-start="3336" data-end="3398">\r
                <p data-start="3338" data-end="3398">The <strong data-start="3342" data-end="3363">heaviest\r
                        raindrop</strong> recorded was 8.8 mm in diameter.</p>\r
            </li>\r
            <li data-start="3399" data-end="3457">\r
                <p data-start="3401" data-end="3457">Acid rain can damage plants, fish, and even buildings.</p>\r
            </li>\r
            <li data-start="3458" data-end="3534">\r
                <p data-start="3460" data-end="3534">Rainbows form when sunlight refracts through raindrops &ndash; not\r
                    acid drops!</p>\r
            </li>\r
        </ul>\r
        <hr data-start="3536" data-end="3539" />\r
        <h2 data-start="3541" data-end="3563">Future Enhancements</h2>\r
        <ul data-start="3564" data-end="3758">\r
            <li data-start="3564" data-end="3619">\r
                <p data-start="3566" data-end="3619"><strong data-start="3566" data-end="3596">Seasons &amp; weather\r
                        patterns</strong> affecting drop speed</p>\r
            </li>\r
            <li data-start="3620" data-end="3663">\r
                <p data-start="3622" data-end="3663"><strong data-start="3622" data-end="3647">Multiple bucket\r
                        types</strong> with upgrades</p>\r
            </li>\r
            <li data-start="3664" data-end="3706">\r
                <p data-start="3666" data-end="3706"><strong data-start="3666" data-end="3688">Online\r
                        leaderboard</strong> for high scores</p>\r
            </li>\r
            <li data-start="3707" data-end="3758">\r
                <p data-start="3709" data-end="3758"><strong data-start="3709" data-end="3736">Mobile-friendly\r
                        version</strong> with touch controls</p>\r
            </li>\r
        </ul>\r
    </article>\r
</body>\r
\r
</html>`,pm=`<!DOCTYPE html>\r
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
   <h1 data-start="390" data-end="443">FloodGuard (UE5 C++): Rescue Boat vs. Rising Waters</h1>\r
<h2 data-start="445" data-end="460">What you get</h2>\r
<ul data-start="461" data-end="870">\r
<li data-start="461" data-end="535">\r
<p data-start="463" data-end="535">Dynamic <strong data-start="471" data-end="486">flood level</strong> that rises over time (configurable curve/speed).</p>\r
</li>\r
<li data-start="536" data-end="636">\r
<p data-start="538" data-end="636">A <strong data-start="540" data-end="570">physics-driven rescue boat</strong> with simplified, performant <strong data-start="599" data-end="611">buoyancy</strong> over a flat water plane.</p>\r
</li>\r
<li data-start="637" data-end="709">\r
<p data-start="639" data-end="709"><strong data-start="639" data-end="662">Pickups (survivors)</strong> scattered on rooftops; collect them for score.</p>\r
</li>\r
<li data-start="710" data-end="784">\r
<p data-start="712" data-end="784"><strong data-start="712" data-end="725">Basic HUD</strong> via on-screen debug messages (easy to swap for UMG later).</p>\r
</li>\r
<li data-start="785" data-end="870">\r
<p data-start="787" data-end="870">Clean, modular <strong data-start="802" data-end="817">C++ classes</strong>: <code data-start="819" data-end="835">RescueBoatPawn</code>, <code data-start="837" data-end="851">FloodManager</code>, <code data-start="853" data-end="869">SurvivorPickup</code>.</p>\r
</li>\r
</ul>\r
<h2 data-start="872" data-end="887">Tested setup</h2>\r
<ul data-start="888" data-end="1055">\r
<li data-start="888" data-end="918">\r
<p data-start="890" data-end="918">Unreal Engine 5.x (5.2&ndash;5.4+)</p>\r
</li>\r
<li data-start="919" data-end="972">\r
<p data-start="921" data-end="972">New &ldquo;C++ &rarr; Blank&rdquo; project (Desktop/Maximum Quality)</p>\r
</li>\r
<li data-start="973" data-end="990">\r
<p data-start="975" data-end="990">Target: Windows</p>\r
</li>\r
<li data-start="991" data-end="1055">\r
<p data-start="993" data-end="1055">No plugins required (optional: Water plugin later for visuals)</p>\r
</li>\r
</ul>\r
<hr data-start="1057" data-end="1060" />\r
<h2 data-start="1062" data-end="1091">Quick install steps (once)</h2>\r
<ol data-start="1092" data-end="1929">\r
<li data-start="1092" data-end="1155">\r
<p data-start="1095" data-end="1155">Create UE5 C++ project (Blank &rarr; No Starter Content is fine).</p>\r
</li>\r
<li data-start="1156" data-end="1257">\r
<p data-start="1159" data-end="1257">In Content, add a <strong data-start="1177" data-end="1191">plane mesh</strong> (or use a basic cube scaled flat) named &ldquo;WaterPlane&rdquo; for visuals.</p>\r
</li>\r
<li data-start="1258" data-end="1366">\r
<p data-start="1261" data-end="1366">Add a simple <strong data-start="1274" data-end="1286">Material</strong> for water (blue BaseColor + slight metallic/roughness; optional panner normal).</p>\r
</li>\r
<li data-start="1367" data-end="1468">\r
<p data-start="1370" data-end="1468">Add a small <strong data-start="1382" data-end="1397">static mesh</strong> for the boat (e.g., a cube/capsule). We&rsquo;ll assign it to the boat pawn.</p>\r
</li>\r
<li data-start="1469" data-end="1595">\r
<p data-start="1472" data-end="1595">Create the C++ classes below (Editor &rarr; Tools &rarr; New C++ Class &rarr; Actor/Pawn) and <strong data-start="1551" data-end="1562">replace</strong> contents with the code provided.</p>\r
</li>\r
<li data-start="1596" data-end="1642">\r
<p data-start="1599" data-end="1642">Compile from the Editor (or Visual Studio).</p>\r
</li>\r
<li data-start="1643" data-end="1914">\r
<p data-start="1646" data-end="1664">In your <strong data-start="1654" data-end="1663">World</strong>:</p>\r
<ul data-start="1668" data-end="1914">\r
<li data-start="1668" data-end="1744">\r
<p data-start="1670" data-end="1744">Place a <code data-start="1678" data-end="1695">BP_FloodManager</code> (or the raw <code data-start="1708" data-end="1723">AFloodManager</code> actor) in the level.</p>\r
</li>\r
<li data-start="1748" data-end="1808">\r
<p data-start="1750" data-end="1808">Set its WaterMesh reference to the plane you use as water.</p>\r
</li>\r
<li data-start="1812" data-end="1914">\r
<p data-start="1814" data-end="1914">Set Boat pawn as default in Project Settings &rarr; Maps &amp; Modes &rarr; Default Pawn Class: <code data-start="1896" data-end="1913">ARescueBoatPawn</code>.</p>\r
</li>\r
</ul>\r
</li>\r
<li data-start="1915" data-end="1929">\r
<p data-start="1918" data-end="1929">Press Play.</p>\r
</li>\r
</ol>\r
<hr data-start="1931" data-end="1934" />\r
<h2 data-start="1936" data-end="1947">Controls</h2>\r
<ul data-start="1948" data-end="2080">\r
<li data-start="1948" data-end="1978">\r
<p data-start="1950" data-end="1978">W / S: throttle forward/back</p>\r
</li>\r
<li data-start="1979" data-end="2003">\r
<p data-start="1981" data-end="2003">A / D: turn left/right</p>\r
</li>\r
<li data-start="2004" data-end="2032">\r
<p data-start="2006" data-end="2032">Space: boost (short burst)</p>\r
</li>\r
<li data-start="2033" data-end="2080">\r
<p data-start="2035" data-end="2080">Collect survivor pickups by overlapping them.</p>\r
</li>\r
</ul>\r
<hr data-start="2082" data-end="2085" />\r
<h2 data-start="2087" data-end="2098">C++ Code</h2>\r
<h3 data-start="2100" data-end="2123">1) RescueBoatPawn.h</h3>\r
<div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
<div class="sticky top-9">&nbsp;</div>\r
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-cpp"><span class="hljs-comment">// RescueBoatPawn.h</span> <span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/Pawn.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"RescueBoatPawn.generated.h"</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">UStaticMeshComponent</span>; <span class="hljs-keyword">class</span> <span class="hljs-title class_">UFloatingPawnMovement</span>; <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">ARescueBoatPawn</span> : <span class="hljs-keyword">public</span> APawn { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">ARescueBoatPawn</span>(); <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) <span class="hljs-keyword">override</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">SetupPlayerInputComponent</span><span class="hljs-params">(<span class="hljs-keyword">class</span></span> UInputComponent* PlayerInputComponent) <span class="hljs-keyword">override</span>; <span class="hljs-comment">// Called by FloodManager to get current XY for water sampling</span> <span class="hljs-function">FVector2D <span class="hljs-title">GetBoatXY</span></span><span class="hljs-params">()</span> <span class="hljs-type">const</span>; <span class="hljs-comment">// Physics root for buoyancy &amp; forces</span> <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere, BlueprintReadOnly) UStaticMeshComponent* BoatMesh; <span class="hljs-keyword">protected</span>: <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">BeginPlay</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-keyword">private</span>: <span class="hljs-comment">// Movement input</span> <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">Throttle</span><span class="hljs-params">(<span class="hljs-type">float</span></span> Value); <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">Turn</span><span class="hljs-params">(<span class="hljs-type">float</span></span> Value); <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">Boost</span><span class="hljs-params">()</span>; <span class="hljs-comment">// Buoyancy parameters</span> <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ApplyBuoyancy</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime); <span class="hljs-comment">// Movement state</span> <span class="hljs-type">float</span> ThrottleInput = <span class="hljs-number">0.f</span>; <span class="hljs-type">float</span> TurnInput = <span class="hljs-number">0.f</span>; <span class="hljs-type">bool</span> bBoosting = <span class="hljs-literal">false</span>; <span class="hljs-type">float</span> BoostTimer = <span class="hljs-number">0.f</span>; <span class="hljs-comment">// Tunables</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category = <span class="hljs-string">"Boat|Tuning"</span>) <span class="hljs-type">float</span> EngineForce = <span class="hljs-number">300000.f</span>; <span class="hljs-comment">// Forward push</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category = <span class="hljs-string">"Boat|Tuning"</span>) <span class="hljs-type">float</span> TurnTorque = <span class="hljs-number">45000000.f</span>; <span class="hljs-comment">// Yaw torque</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category = <span class="hljs-string">"Boat|Tuning"</span>) <span class="hljs-type">float</span> BoostImpulse = <span class="hljs-number">500000.f</span>; <span class="hljs-comment">// Short impulse</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category = <span class="hljs-string">"Boat|Tuning"</span>) <span class="hljs-type">float</span> BoostDuration = <span class="hljs-number">0.25f</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category = <span class="hljs-string">"Boat|Buoyancy"</span>) <span class="hljs-type">float</span> WaterDensity = <span class="hljs-number">1.0f</span>; <span class="hljs-comment">// Scales lift</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category = <span class="hljs-string">"Boat|Buoyancy"</span>) <span class="hljs-type">float</span> BuoyancyStrength = <span class="hljs-number">400000.f</span>; <span class="hljs-comment">// Upward force</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category = <span class="hljs-string">"Boat|Buoyancy"</span>) <span class="hljs-type">float</span> LinearDampingInWater = <span class="hljs-number">1.6f</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category = <span class="hljs-string">"Boat|Buoyancy"</span>) <span class="hljs-type">float</span> AngularDampingInWater = <span class="hljs-number">2.0f</span>; }; </code></div>\r
</div>\r
<h3 data-start="3924" data-end="3949">2) RescueBoatPawn.cpp</h3>\r
<div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
<div class="sticky top-9">&nbsp;</div>\r
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-cpp"><span class="hljs-comment">// RescueBoatPawn.cpp</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"RescueBoatPawn.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Components/StaticMeshComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/FloatingPawnMovement.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Kismet/GameplayStatics.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Engine/World.h"</span> <span class="hljs-comment">// Forward declare to query water height</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AFloodManager</span>; ARescueBoatPawn::<span class="hljs-built_in">ARescueBoatPawn</span>() { PrimaryActorTick.bCanEverTick = <span class="hljs-literal">true</span>; BoatMesh = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;UStaticMeshComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"BoatMesh"</span>)); <span class="hljs-built_in">SetRootComponent</span>(BoatMesh); BoatMesh-&gt;<span class="hljs-built_in">SetSimulatePhysics</span>(<span class="hljs-literal">true</span>); BoatMesh-&gt;<span class="hljs-built_in">SetMassOverrideInKg</span>(NAME_None, <span class="hljs-number">200.f</span>, <span class="hljs-literal">true</span>); BoatMesh-&gt;<span class="hljs-built_in">SetLinearDamping</span>(<span class="hljs-number">0.2f</span>); BoatMesh-&gt;<span class="hljs-built_in">SetAngularDamping</span>(<span class="hljs-number">0.2f</span>); BoatMesh-&gt;BodyInstance.bEnableGravity = <span class="hljs-literal">true</span>; BoatMesh-&gt;<span class="hljs-built_in">SetCollisionProfileName</span>(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"PhysicsActor"</span>)); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ARescueBoatPawn::BeginPlay</span><span class="hljs-params">()</span> { Super::<span class="hljs-built_in">BeginPlay</span>(); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ARescueBoatPawn::Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) { Super::<span class="hljs-built_in">Tick</span>(DeltaTime); <span class="hljs-comment">// Forward/back engine force</span> <span class="hljs-keyword">if</span> (FMath::<span class="hljs-built_in">Abs</span>(ThrottleInput) &gt; KINDA_SMALL_NUMBER) { <span class="hljs-type">const</span> FVector Forward = <span class="hljs-built_in">GetActorForwardVector</span>(); BoatMesh-&gt;<span class="hljs-built_in">AddForce</span>(Forward * EngineForce * ThrottleInput); } <span class="hljs-comment">// Yaw torque for turning</span> <span class="hljs-keyword">if</span> (FMath::<span class="hljs-built_in">Abs</span>(TurnInput) &gt; KINDA_SMALL_NUMBER) { <span class="hljs-type">const</span> FVector Torque = <span class="hljs-built_in">FVector</span>(<span class="hljs-number">0.f</span>, <span class="hljs-number">0.f</span>, TurnTorque * TurnInput); BoatMesh-&gt;<span class="hljs-built_in">AddTorqueInRadians</span>(Torque); } <span class="hljs-comment">// Boost (short impulse)</span> <span class="hljs-keyword">if</span> (bBoosting &amp;&amp; BoostTimer &gt; <span class="hljs-number">0.f</span>) { <span class="hljs-type">const</span> FVector Forward = <span class="hljs-built_in">GetActorForwardVector</span>(); BoatMesh-&gt;<span class="hljs-built_in">AddImpulse</span>(Forward * BoostImpulse); BoostTimer -= DeltaTime; <span class="hljs-keyword">if</span> (BoostTimer &lt;= <span class="hljs-number">0.f</span>) bBoosting = <span class="hljs-literal">false</span>; } <span class="hljs-built_in">ApplyBuoyancy</span>(DeltaTime); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ARescueBoatPawn::ApplyBuoyancy</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) { <span class="hljs-comment">// Find FloodManager in level</span> AFloodManager* Manager = <span class="hljs-literal">nullptr</span>; <span class="hljs-keyword">for</span> (TActorIterator&lt;AFloodManager&gt; <span class="hljs-built_in">It</span>(<span class="hljs-built_in">GetWorld</span>()); It; ++It) { Manager = *It; <span class="hljs-keyword">break</span>; } <span class="hljs-keyword">if</span> (!Manager) <span class="hljs-keyword">return</span>; <span class="hljs-comment">// Query current water Z at this XY (flat plane for now)</span> <span class="hljs-type">const</span> FVector Loc = <span class="hljs-built_in">GetActorLocation</span>(); <span class="hljs-type">const</span> <span class="hljs-type">float</span> WaterZ = Manager-&gt;<span class="hljs-built_in">GetWaterHeightAt</span>(<span class="hljs-built_in">FVector2D</span>(Loc.X, Loc.Y)); <span class="hljs-comment">// If the boat is below water surface &rarr; apply upward force proportional to submergence</span> <span class="hljs-type">const</span> <span class="hljs-type">float</span> Depth = (WaterZ - Loc.Z); <span class="hljs-keyword">if</span> (Depth &gt; <span class="hljs-number">0.f</span>) { <span class="hljs-type">const</span> <span class="hljs-type">float</span> Submergence = FMath::<span class="hljs-built_in">Clamp</span>(Depth / <span class="hljs-number">100.f</span>, <span class="hljs-number">0.f</span>, <span class="hljs-number">1.f</span>); <span class="hljs-type">const</span> <span class="hljs-type">float</span> Lift = BuoyancyStrength * Submergence * WaterDensity; BoatMesh-&gt;<span class="hljs-built_in">AddForce</span>(<span class="hljs-built_in">FVector</span>(<span class="hljs-number">0.f</span>, <span class="hljs-number">0.f</span>, Lift)); <span class="hljs-comment">// Extra drag/damping while submerged</span> BoatMesh-&gt;<span class="hljs-built_in">SetLinearDamping</span>(LinearDampingInWater); BoatMesh-&gt;<span class="hljs-built_in">SetAngularDamping</span>(AngularDampingInWater); } <span class="hljs-keyword">else</span> { <span class="hljs-comment">// In air (or above surface)</span> BoatMesh-&gt;<span class="hljs-built_in">SetLinearDamping</span>(<span class="hljs-number">0.2f</span>); BoatMesh-&gt;<span class="hljs-built_in">SetAngularDamping</span>(<span class="hljs-number">0.2f</span>); } } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ARescueBoatPawn::SetupPlayerInputComponent</span><span class="hljs-params">(UInputComponent* PlayerInputComponent)</span> { Super::<span class="hljs-built_in">SetupPlayerInputComponent</span>(PlayerInputComponent); PlayerInputComponent-&gt;<span class="hljs-built_in">BindAxis</span>(<span class="hljs-string">"MoveForward"</span>, <span class="hljs-keyword">this</span>, &amp;ARescueBoatPawn::Throttle); PlayerInputComponent-&gt;<span class="hljs-built_in">BindAxis</span>(<span class="hljs-string">"Turn"</span>, <span class="hljs-keyword">this</span>, &amp;ARescueBoatPawn::Turn); PlayerInputComponent-&gt;<span class="hljs-built_in">BindAction</span>(<span class="hljs-string">"Boost"</span>, IE_Pressed, <span class="hljs-keyword">this</span>, &amp;ARescueBoatPawn::Boost); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ARescueBoatPawn::Throttle</span><span class="hljs-params">(<span class="hljs-type">float</span></span> Value) { ThrottleInput = Value; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ARescueBoatPawn::Turn</span><span class="hljs-params">(<span class="hljs-type">float</span></span> Value) { TurnInput = Value; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ARescueBoatPawn::Boost</span><span class="hljs-params">()</span> { <span class="hljs-keyword">if</span> (!bBoosting) { bBoosting = <span class="hljs-literal">true</span>; BoostTimer = BoostDuration; } } <span class="hljs-function">FVector2D <span class="hljs-title">ARescueBoatPawn::GetBoatXY</span></span><span class="hljs-params">()</span> <span class="hljs-type">const</span> { <span class="hljs-type">const</span> FVector L = <span class="hljs-built_in">GetActorLocation</span>(); <span class="hljs-keyword">return</span> <span class="hljs-built_in">FVector2D</span>(L.X, L.Y); } </code></div>\r
</div>\r
<p data-start="7235" data-end="7281"><strong data-start="7235" data-end="7281">Project Settings &rarr; Input (legacy bindings)</strong></p>\r
<ul data-start="7282" data-end="7386">\r
<li data-start="7282" data-end="7324">\r
<p data-start="7284" data-end="7324">Axis: <code data-start="7290" data-end="7303">MoveForward</code> &rarr; W = +1.0, S = -1.0</p>\r
</li>\r
<li data-start="7325" data-end="7360">\r
<p data-start="7327" data-end="7360">Axis: <code data-start="7333" data-end="7339">Turn</code> &rarr; A = -1.0, D = +1.0</p>\r
</li>\r
<li data-start="7361" data-end="7386">\r
<p data-start="7363" data-end="7386">Action: <code data-start="7371" data-end="7378">Boost</code> &rarr; Space</p>\r
</li>\r
</ul>\r
<blockquote data-start="7388" data-end="7472">\r
<p data-start="7390" data-end="7472">If you prefer Enhanced Input, you can swap later; legacy keeps the sample minimal.</p>\r
</blockquote>\r
<hr data-start="7474" data-end="7477" />\r
<h3 data-start="7479" data-end="7500">2) FloodManager.h</h3>\r
<div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
<div class="sticky top-9">&nbsp;</div>\r
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-cpp"><span class="hljs-comment">// FloodManager.h</span> <span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/Actor.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"FloodManager.generated.h"</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">UStaticMeshComponent</span>; <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">AFloodManager</span> : <span class="hljs-keyword">public</span> AActor { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">AFloodManager</span>(); <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) <span class="hljs-keyword">override</span>; <span class="hljs-comment">// Returns water surface Z at XY (flat plane base; swap with Water plugin later)</span> <span class="hljs-built_in">UFUNCTION</span>(BlueprintCallable, Category=<span class="hljs-string">"Flood"</span>) <span class="hljs-function"><span class="hljs-type">float</span></span> <span class="hljs-title">GetWaterHeightAt</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FVector2D&amp; XY) <span class="hljs-type">const</span>; <span class="hljs-keyword">protected</span>: <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">BeginPlay</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-keyword">public</span>: <span class="hljs-comment">// Visual water mesh (assign your plane)</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Flood|Refs"</span>) UStaticMeshComponent* WaterMesh; <span class="hljs-comment">// Rising water settings</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Flood|Rising"</span>) <span class="hljs-type">float</span> BaseWaterZ = <span class="hljs-number">0.f</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Flood|Rising"</span>) <span class="hljs-type">float</span> RiseSpeed = <span class="hljs-number">20.f</span>; <span class="hljs-comment">// cm/s</span> <span class="hljs-comment">// Optional: sinusoidal waves (visual/feel)</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Flood|Waves"</span>) <span class="hljs-type">float</span> WaveAmplitude = <span class="hljs-number">12.f</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Flood|Waves"</span>) <span class="hljs-type">float</span> WaveFrequency = <span class="hljs-number">0.25f</span>; <span class="hljs-comment">// Gameplay</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Flood|Gameplay"</span>) int32 TargetSurvivors = <span class="hljs-number">5</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Flood|Gameplay"</span>) <span class="hljs-type">float</span> TimeLimit = <span class="hljs-number">120.f</span>; <span class="hljs-comment">// seconds</span> <span class="hljs-comment">// Runtime</span> <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere, BlueprintReadOnly) <span class="hljs-type">float</span> Elapsed = <span class="hljs-number">0.f</span>; <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere, BlueprintReadOnly) int32 Rescued = <span class="hljs-number">0</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">NotifyRescue</span><span class="hljs-params">()</span>; <span class="hljs-comment">// called by SurvivorPickup</span> <span class="hljs-keyword">private</span>: <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UpdateWaterTransform</span><span class="hljs-params">()</span> <span class="hljs-type">const</span>; }; </code></div>\r
</div>\r
<h3 data-start="9136" data-end="9159">2) FloodManager.cpp</h3>\r
<div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
<div class="sticky top-9">&nbsp;</div>\r
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-cpp"><span class="hljs-comment">// FloodManager.cpp</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"FloodManager.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Components/StaticMeshComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Kismet/GameplayStatics.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Engine/World.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Engine/Engine.h"</span> AFloodManager::<span class="hljs-built_in">AFloodManager</span>() { PrimaryActorTick.bCanEverTick = <span class="hljs-literal">true</span>; WaterMesh = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;UStaticMeshComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"WaterMesh"</span>)); <span class="hljs-built_in">SetRootComponent</span>(WaterMesh); WaterMesh-&gt;<span class="hljs-built_in">SetCollisionProfileName</span>(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"OverlapAllDynamic"</span>)); <span class="hljs-comment">// visual plane</span> WaterMesh-&gt;<span class="hljs-built_in">SetGenerateOverlapEvents</span>(<span class="hljs-literal">false</span>); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AFloodManager::BeginPlay</span><span class="hljs-params">()</span> { Super::<span class="hljs-built_in">BeginPlay</span>(); <span class="hljs-comment">// Place the water plane at BaseWaterZ initially</span> FTransform T = WaterMesh-&gt;<span class="hljs-built_in">GetComponentTransform</span>(); FVector P = T.<span class="hljs-built_in">GetLocation</span>(); P.Z = BaseWaterZ; T.<span class="hljs-built_in">SetLocation</span>(P); WaterMesh-&gt;<span class="hljs-built_in">SetWorldTransform</span>(T); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AFloodManager::Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime) { Super::<span class="hljs-built_in">Tick</span>(DeltaTime); Elapsed += DeltaTime; <span class="hljs-comment">// Game over conditions</span> <span class="hljs-type">const</span> <span class="hljs-type">float</span> TimeLeft = FMath::<span class="hljs-built_in">Max</span>(<span class="hljs-number">0.f</span>, TimeLimit - Elapsed); <span class="hljs-keyword">if</span> (TimeLeft &lt;= <span class="hljs-number">0.f</span>) { GEngine-&gt;<span class="hljs-built_in">AddOnScreenDebugMessage</span>(<span class="hljs-number">-1</span>, <span class="hljs-number">2.f</span>, FColor::Yellow, FString::<span class="hljs-built_in">Printf</span>(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"Time! Rescued: %d / %d"</span>), Rescued, TargetSurvivors)); <span class="hljs-comment">// Reset simple loop (or travel to Menu map)</span> Elapsed = <span class="hljs-number">0.f</span>; Rescued = <span class="hljs-number">0</span>; } <span class="hljs-built_in">UpdateWaterTransform</span>(); <span class="hljs-comment">// Win check</span> <span class="hljs-keyword">if</span> (Rescued &gt;= TargetSurvivors) { GEngine-&gt;<span class="hljs-built_in">AddOnScreenDebugMessage</span>(<span class="hljs-number">-1</span>, <span class="hljs-number">2.f</span>, FColor::Green, <span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"All survivors rescued!"</span>)); <span class="hljs-comment">// simple reset</span> Rescued = <span class="hljs-number">0</span>; Elapsed = <span class="hljs-number">0.f</span>; } } <span class="hljs-function"><span class="hljs-type">float</span></span> <span class="hljs-title">AFloodManager::GetWaterHeightAt</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FVector2D&amp; XY) <span class="hljs-type">const</span> { <span class="hljs-comment">// Flat plane + tiny wave</span> <span class="hljs-type">const</span> <span class="hljs-type">float</span> Time = Elapsed; <span class="hljs-type">const</span> <span class="hljs-type">float</span> Wave = WaveAmplitude * FMath::<span class="hljs-built_in">Sin</span>(WaveFrequency * Time + <span class="hljs-number">0.0009f</span> * XY.X + <span class="hljs-number">0.0007f</span> * XY.Y); <span class="hljs-keyword">return</span> BaseWaterZ + RiseSpeed * Time + Wave; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AFloodManager::UpdateWaterTransform</span><span class="hljs-params">()</span> <span class="hljs-type">const</span> { FTransform T = WaterMesh-&gt;<span class="hljs-built_in">GetComponentTransform</span>(); FVector P = T.<span class="hljs-built_in">GetLocation</span>(); P.Z = BaseWaterZ + RiseSpeed * Elapsed; T.<span class="hljs-built_in">SetLocation</span>(P); WaterMesh-&gt;<span class="hljs-built_in">SetWorldTransform</span>(T); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AFloodManager::NotifyRescue</span><span class="hljs-params">()</span> { Rescued++; GEngine-&gt;<span class="hljs-built_in">AddOnScreenDebugMessage</span>(<span class="hljs-number">-1</span>, <span class="hljs-number">1.5f</span>, FColor::Cyan, FString::<span class="hljs-built_in">Printf</span>(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"Rescued: %d"</span>), Rescued)); } </code></div>\r
</div>\r
<hr data-start="11241" data-end="11244" />\r
<h3 data-start="11246" data-end="11269">3) SurvivorPickup.h</h3>\r
<div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
<div class="sticky top-9">&nbsp;</div>\r
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-cpp"><span class="hljs-comment">// SurvivorPickup.h</span> <span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/Actor.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"SurvivorPickup.generated.h"</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">USphereComponent</span>; <span class="hljs-keyword">class</span> <span class="hljs-title class_">UStaticMeshComponent</span>; <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">ASurvivorPickup</span> : <span class="hljs-keyword">public</span> AActor { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">ASurvivorPickup</span>(); <span class="hljs-keyword">protected</span>: <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">BeginPlay</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-built_in">UFUNCTION</span>() <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">OnOverlap</span><span class="hljs-params">(UPrimitiveComponent* OverlappedComp, AActor* Other, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, </span><span class="hljs-type">bool</span> bFromSweep, <span class="hljs-type">const</span> FHitResult&amp; SweepResult); <span class="hljs-keyword">public</span>: <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere) USphereComponent* Trigger; <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere) UStaticMeshComponent* VisualMesh; <span class="hljs-comment">// Optional bobbing</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"FX"</span>) <span class="hljs-type">float</span> BobAmplitude = <span class="hljs-number">15.f</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"FX"</span>) <span class="hljs-type">float</span> BobSpeed = <span class="hljs-number">2.f</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaSeconds) <span class="hljs-keyword">override</span>; }; </code></div>\r
</div>\r
<h3 data-start="12163" data-end="12188">3) SurvivorPickup.cpp</h3>\r
<div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
<div class="sticky top-9">&nbsp;</div>\r
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-cpp"><span class="hljs-comment">// SurvivorPickup.cpp</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"SurvivorPickup.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Components/SphereComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Components/StaticMeshComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Engine/World.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Kismet/GameplayStatics.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"FloodManager.h"</span> ASurvivorPickup::<span class="hljs-built_in">ASurvivorPickup</span>() { PrimaryActorTick.bCanEverTick = <span class="hljs-literal">true</span>; Trigger = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;USphereComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"Trigger"</span>)); <span class="hljs-built_in">SetRootComponent</span>(Trigger); Trigger-&gt;<span class="hljs-built_in">InitSphereRadius</span>(<span class="hljs-number">80.f</span>); Trigger-&gt;<span class="hljs-built_in">SetCollisionProfileName</span>(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"OverlapAllDynamic"</span>)); VisualMesh = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;UStaticMeshComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"VisualMesh"</span>)); VisualMesh-&gt;<span class="hljs-built_in">SetupAttachment</span>(Trigger); VisualMesh-&gt;<span class="hljs-built_in">SetCollisionEnabled</span>(ECollisionEnabled::NoCollision); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ASurvivorPickup::BeginPlay</span><span class="hljs-params">()</span> { Super::<span class="hljs-built_in">BeginPlay</span>(); Trigger-&gt;OnComponentBeginOverlap.<span class="hljs-built_in">AddDynamic</span>(<span class="hljs-keyword">this</span>, &amp;ASurvivorPickup::OnOverlap); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ASurvivorPickup::OnOverlap</span><span class="hljs-params">(UPrimitiveComponent* OverlappedComp, AActor* Other, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, </span><span class="hljs-type">bool</span> bFromSweep, <span class="hljs-type">const</span> FHitResult&amp; SweepResult) { <span class="hljs-comment">// Accept rescue if overlapped by boat pawn</span> <span class="hljs-keyword">if</span> (Other &amp;&amp; Other-&gt;<span class="hljs-built_in">IsA</span>(ARescueBoatPawn::<span class="hljs-built_in">StaticClass</span>())) { <span class="hljs-comment">// Find manager and notify</span> <span class="hljs-keyword">for</span> (TActorIterator&lt;AFloodManager&gt; <span class="hljs-built_in">It</span>(<span class="hljs-built_in">GetWorld</span>()); It; ++It) { It-&gt;<span class="hljs-built_in">NotifyRescue</span>(); <span class="hljs-keyword">break</span>; } <span class="hljs-built_in">Destroy</span>(); <span class="hljs-comment">// pickup consumed</span> } } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ASurvivorPickup::Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaSeconds) { Super::<span class="hljs-built_in">Tick</span>(DeltaSeconds); <span class="hljs-comment">// Simple bobbing for visibility</span> <span class="hljs-type">const</span> <span class="hljs-type">float</span> Time = <span class="hljs-built_in">GetWorld</span>()-&gt;<span class="hljs-built_in">GetTimeSeconds</span>(); FVector P = <span class="hljs-built_in">GetActorLocation</span>(); P.Z += FMath::<span class="hljs-built_in">Sin</span>(Time * BobSpeed) * BobAmplitude * DeltaSeconds; <span class="hljs-built_in">SetActorLocation</span>(P); } </code></div>\r
</div>\r
<blockquote data-start="13841" data-end="13964">\r
<p data-start="13843" data-end="13964">Place several <code data-start="13857" data-end="13873">SurvivorPickup</code> actors on higher ground or rooftops. When you drive the boat into them, they&rsquo;re &ldquo;rescued&rdquo;.</p>\r
</blockquote>\r
<hr data-start="13966" data-end="13969" />\r
<h2 data-start="13971" data-end="14002">Simple World Setup (minimal)</h2>\r
<ul data-start="14003" data-end="14261">\r
<li data-start="14003" data-end="14045">\r
<p data-start="14005" data-end="14045">Flat ground (land) meshes at Z = 0 &hellip; 200</p>\r
</li>\r
<li data-start="14046" data-end="14107">\r
<p data-start="14048" data-end="14107">Buildings/rooftops as static meshes (place survivors there)</p>\r
</li>\r
<li data-start="14108" data-end="14199">\r
<p data-start="14110" data-end="14199">Water plane at Z = BaseWaterZ (e.g., -100) so it will rise and eventually flood low areas</p>\r
</li>\r
<li data-start="14200" data-end="14261">\r
<p data-start="14202" data-end="14261">Player Start is optional since the default pawn is the boat</p>\r
</li>\r
</ul>\r
<hr data-start="14263" data-end="14266" />\r
<h2 data-start="14268" data-end="14282">Tuning tips</h2>\r
<ul data-start="14283" data-end="14609">\r
<li data-start="14283" data-end="14352">\r
<p data-start="14285" data-end="14352">Make flood tense: set <code data-start="14307" data-end="14331">RiseSpeed = 40&ndash;80 cm/s</code>, <code data-start="14333" data-end="14351">TimeLimit = 90 s</code>.</p>\r
</li>\r
<li data-start="14353" data-end="14439">\r
<p data-start="14355" data-end="14439">Add wave feel without plugins via <code data-start="14389" data-end="14411">WaveAmplitude = 8&ndash;20</code>, <code data-start="14413" data-end="14438">WaveFrequency = 0.2&ndash;0.5</code>.</p>\r
</li>\r
<li data-start="14440" data-end="14539">\r
<p data-start="14442" data-end="14539">Boat handling: increase <code data-start="14466" data-end="14479">EngineForce</code> for punchy acceleration; <code data-start="14505" data-end="14517">TurnTorque</code> for tighter steering.</p>\r
</li>\r
<li data-start="14540" data-end="14609">\r
<p data-start="14542" data-end="14609">Make pickups obvious: bright emissive material or a billboard icon.</p>\r
</li>\r
</ul>\r
<hr data-start="14611" data-end="14614" />\r
<h2 data-start="14616" data-end="14648">Where to go next (quick wins)</h2>\r
<ul data-start="14649" data-end="15068">\r
<li data-start="14649" data-end="14759">\r
<p data-start="14651" data-end="14759">Visuals: swap flat water for <strong data-start="14680" data-end="14699">UE Water plugin</strong> (WaterBodyOcean/Lake) and sample surface from spline waves.</p>\r
</li>\r
<li data-start="14760" data-end="14851">\r
<p data-start="14762" data-end="14851">Particles &amp; Audio: splashes (Niagara) + water/engine sounds (looped) on speed thresholds.</p>\r
</li>\r
<li data-start="14852" data-end="14913">\r
<p data-start="14854" data-end="14913">UMG HUD: time left, rescued count, a mini-map of survivors.</p>\r
</li>\r
<li data-start="14914" data-end="14986">\r
<p data-start="14916" data-end="14986">AI events: drifting debris, stranded NPCs that wave and call for help.</p>\r
</li>\r
<li data-start="14987" data-end="15068">\r
<p data-start="14989" data-end="15068">Missions &amp; savegame: multiple levels, persistent high score, difficulty curves.</p>\r
</li>\r
</ul>\r
<hr data-start="15070" data-end="15073" />\r
<h2 data-start="15075" data-end="15106">Having trouble wiring Input?</h2>\r
<p data-start="15107" data-end="15185">If actions/axes don&rsquo;t respond, add these in Project Settings &rarr; Input (legacy):</p>\r
<ul data-start="15186" data-end="15286">\r
<li data-start="15186" data-end="15222">\r
<p data-start="15188" data-end="15222">Axis <code data-start="15193" data-end="15206">MoveForward</code>: W=+1.0, S=-1.0</p>\r
</li>\r
<li data-start="15223" data-end="15252">\r
<p data-start="15225" data-end="15252">Axis <code data-start="15230" data-end="15236">Turn</code>: A=-1.0, D=+1.0</p>\r
</li>\r
<li data-start="15253" data-end="15286">\r
<p data-start="15255" data-end="15286">Action <code data-start="15262" data-end="15269">Boost</code>: Space (Pressed)</p>\r
</li>\r
</ul>\r
</article>\r
</body>\r
\r
</html>`,dm=`<!DOCTYPE html>\r
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
        <div\r
            class="relative flex basis-auto flex-col -mb-(--composer-overlap-px) [--composer-overlap-px:28px] grow overflow-hidden">\r
            <div class="relative h-full">\r
                <div\r
                    class="flex h-full flex-col overflow-y-auto [scrollbar-gutter:stable_both-edges] @[84rem]/thread:pt-(--header-height)">\r
                    <div class="@thread-xl/thread:pt-header-height flex flex-col text-sm pb-25">\r
                        <article\r
                            class="text-token-text-primary w-full focus:outline-none scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]"\r
                            dir="auto" tabindex="-1" data-turn-id="5af25053-1042-4ac4-b55b-f5395ca08f3c"\r
                            data-testid="conversation-turn-6" data-scroll-anchor="true" data-turn="assistant">\r
                            <div\r
                                class="text-base my-auto mx-auto pb-10 [--thread-content-margin:--spacing(4)] @[37rem]:[--thread-content-margin:--spacing(6)] @[72rem]:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)">\r
                                <div class="[--thread-content-max-width:32rem] @[34rem]:[--thread-content-max-width:40rem] @[64rem]:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn"\r
                                    tabindex="-1">\r
                                    <div class="flex max-w-full flex-col grow">\r
                                        <div class="min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal [.text-message+&amp;]:mt-5"\r
                                            dir="auto" data-message-author-role="assistant"\r
                                            data-message-id="bbbf5d9b-98b3-4da7-905d-ada322dda2d8"\r
                                            data-message-model-slug="gpt-5-thinking">\r
                                            <div class="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]">\r
                                                <div\r
                                                    class="markdown prose dark:prose-invert w-full break-words dark markdown-new-styling">\r
                                                    <h1 data-start="240" data-end="269">game concept &mdash;\r
                                                        &ldquo;Muggy Rush&rdquo;</h1>\r
                                                    <p data-start="271" data-end="588">you&rsquo;re a field technician\r
                                                        sprinting through a <strong data-start="317"\r
                                                            data-end="340">monsoon-season city</strong>. the catch:\r
                                                        <strong data-start="353" data-end="372">heat + humidity</strong>\r
                                                        make you tire quickly. you must manage stamina and body\r
                                                        temperature by ducking into cool zones (AC vents, mist stations,\r
                                                        shaded alleys) while collecting parts to restart dehumidifier\r
                                                        towers before the city fogs out.</p>\r
                                                    <p data-start="590" data-end="603"><strong data-start="590"\r
                                                            data-end="603">core loop</strong></p>\r
                                                    <ul data-start="604" data-end="982">\r
                                                        <li data-start="604" data-end="631">\r
                                                            <p data-start="606" data-end="631">move, sprint, jump, slide\r
                                                            </p>\r
                                                        </li>\r
                                                        <li data-start="632" data-end="748">\r
                                                            <p data-start="634" data-end="748">humidity/heat index\r
                                                                dynamically rises/falls &rarr; affects <strong\r
                                                                    data-start="688" data-end="705">stamina\r
                                                                    drain</strong>, <strong data-start="707"\r
                                                                    data-end="721">screen fog</strong>, <strong\r
                                                                    data-start="723" data-end="748">footing on wet\r
                                                                    ground</strong></p>\r
                                                        </li>\r
                                                        <li data-start="749" data-end="849">\r
                                                            <p data-start="751" data-end="849">find <strong\r
                                                                    data-start="756" data-end="770">cool spots</strong>\r
                                                                (reduce heat index), <strong data-start="792"\r
                                                                    data-end="810">hydration kits</strong> (restore\r
                                                                stamina), <strong data-start="830"\r
                                                                    data-end="841">filters</strong> (score)</p>\r
                                                        </li>\r
                                                        <li data-start="850" data-end="930">\r
                                                            <p data-start="852" data-end="930">avoid <strong\r
                                                                    data-start="858" data-end="880">hot, muggy\r
                                                                    pockets</strong> (steam leaks, closed rooms) that\r
                                                                spike heat index</p>\r
                                                        </li>\r
                                                        <li data-start="931" data-end="982">\r
                                                            <p data-start="933" data-end="982">finish level before the\r
                                                                <strong data-start="957" data-end="970">mug\r
                                                                    gauge</strong> reaches max</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <hr data-start="984" data-end="987" />\r
                                                    <h1 data-start="989" data-end="1020">systems we&rsquo;ll implement\r
                                                        (C++)</h1>\r
                                                    <ol data-start="1022" data-end="1674">\r
                                                        <li data-start="1022" data-end="1185">\r
                                                            <p data-start="1025" data-end="1185"><strong\r
                                                                    data-start="1025"\r
                                                                    data-end="1047">UHumiditySubsystem</strong>\r
                                                                (GameInstanceSubsystem)<br data-start="1071"\r
                                                                    data-end="1074" /> global muggy weather brain:\r
                                                                tracks temperature, RH, computes <strong\r
                                                                    data-start="1138" data-end="1164">Heat Index &amp;\r
                                                                    Dew Point</strong>, broadcasts changes.</p>\r
                                                        </li>\r
                                                        <li data-start="1186" data-end="1309">\r
                                                            <p data-start="1189" data-end="1309"><strong\r
                                                                    data-start="1189"\r
                                                                    data-end="1207">AWeatherVolume</strong> (Actor with\r
                                                                Box/Sphere component)<br data-start="1241"\r
                                                                    data-end="1244" /> localizes humidity/temperature\r
                                                                (e.g., mist tunnels, AC zones).</p>\r
                                                        </li>\r
                                                        <li data-start="1310" data-end="1444">\r
                                                            <p data-start="1313" data-end="1444"><strong\r
                                                                    data-start="1313"\r
                                                                    data-end="1332">AMuggyCharacter</strong>\r
                                                                (ACharacter)<br data-start="1345" data-end="1348" />\r
                                                                movement + <strong data-start="1362"\r
                                                                    data-end="1382">stamina/overheat</strong> logic\r
                                                                driven by heat index; applies camera effects and input.\r
                                                            </p>\r
                                                        </li>\r
                                                        <li data-start="1445" data-end="1585">\r
                                                            <p data-start="1448" data-end="1585"><strong\r
                                                                    data-start="1448"\r
                                                                    data-end="1478">UMuggyPostProcessComponent</strong>\r
                                                                (ActorComponent)<br data-start="1495" data-end="1498" />\r
                                                                simple link to a PostProcessVolume or material parameter\r
                                                                collection for fog/wetness.</p>\r
                                                        </li>\r
                                                        <li data-start="1586" data-end="1640">\r
                                                            <p data-start="1589" data-end="1640"><strong\r
                                                                    data-start="1589" data-end="1606">pickup\r
                                                                    actors</strong>: hydration kit, filter cartridge.\r
                                                            </p>\r
                                                        </li>\r
                                                        <li data-start="1641" data-end="1674">\r
                                                            <p data-start="1644" data-end="1674"><strong\r
                                                                    data-start="1644" data-end="1653">input</strong>:\r
                                                                UE5 Enhanced Input.</p>\r
                                                        </li>\r
                                                    </ol>\r
                                                    <blockquote data-start="1676" data-end="1766">\r
                                                        <p data-start="1678" data-end="1766">note: you can keep all\r
                                                            blueprint UIs (HUD widgets) in UMG for speed; C++ exposes\r
                                                            values.</p>\r
                                                    </blockquote>\r
                                                    <hr data-start="1768" data-end="1771" />\r
                                                    <h2 data-start="1773" data-end="1797">project setup (quick)</h2>\r
                                                    <ol data-start="1799" data-end="2312">\r
                                                        <li data-start="1799" data-end="1879">\r
                                                            <p data-start="1802" data-end="1879">create a new UE5\r
                                                                project &rarr; <strong data-start="1829"\r
                                                                    data-end="1853">Games &rarr; First Person</strong>\r
                                                                or <strong data-start="1857" data-end="1873">Third\r
                                                                    Person</strong>, C++.</p>\r
                                                        </li>\r
                                                        <li data-start="1880" data-end="1989">\r
                                                            <p data-start="1883" data-end="1915">enable plugins (Edit\r
                                                                &rarr; Plugins):</p>\r
                                                            <ul data-start="1919" data-end="1989">\r
                                                                <li data-start="1919" data-end="1972">\r
                                                                    <p data-start="1921" data-end="1972"><strong\r
                                                                            data-start="1921" data-end="1939">Enhanced\r
                                                                            Input</strong> (on by default in new\r
                                                                        templates)</p>\r
                                                                </li>\r
                                                                <li data-start="1976" data-end="1989">\r
                                                                    <p data-start="1978" data-end="1989"><strong\r
                                                                            data-start="1978"\r
                                                                            data-end="1989">Niagara</strong></p>\r
                                                                </li>\r
                                                            </ul>\r
                                                        </li>\r
                                                        <li data-start="1990" data-end="2052">\r
                                                            <p data-start="1993" data-end="2052">create folders: <code\r
                                                                    data-start="2009"\r
                                                                    data-end="2027">Source/MuggyRush</code> and <code\r
                                                                    data-start="2032"\r
                                                                    data-end="2051">Content/MuggyRush</code>.</p>\r
                                                        </li>\r
                                                        <li data-start="2053" data-end="2172">\r
                                                            <p data-start="2056" data-end="2172">add a <strong\r
                                                                    data-start="2062" data-end="2095">Material Parameter\r
                                                                    Collection</strong> <code data-start="2096"\r
                                                                    data-end="2107">MPC_Muggy</code> with scalar params:\r
                                                                <code data-start="2128"\r
                                                                    data-end="2142">FogIntensity</code>, <code\r
                                                                    data-start="2144"\r
                                                                    data-end="2159">ScreenWetness</code>, <code\r
                                                                    data-start="2161" data-end="2171">HeatTint</code>.\r
                                                            </p>\r
                                                        </li>\r
                                                        <li data-start="2173" data-end="2312">\r
                                                            <p data-start="2176" data-end="2312">add a global <strong\r
                                                                    data-start="2189"\r
                                                                    data-end="2210">PostProcessVolume</strong> (Unbound)\r
                                                                that reads MPC values in a post-process material (can be\r
                                                                done later; code controls params).</p>\r
                                                        </li>\r
                                                    </ol>\r
                                                    <hr data-start="2314" data-end="2317" />\r
                                                    <h2 data-start="2319" data-end="2364">1) Humidity subsystem (global\r
                                                        muggy model)</h2>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// HumiditySubsystem.h</span> <span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Subsystems/GameInstanceSubsystem.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"HumiditySubsystem.generated.h"</span> <span class="hljs-built_in">DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams</span>(FOnMuggyChanged, <span class="hljs-type">float</span>, HeatIndexC, <span class="hljs-type">float</span>, DewPointC); <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">MUGGYRUSH_API</span> UHumiditySubsystem : <span class="hljs-keyword">public</span> UGameInstanceSubsystem { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">UPROPERTY</span>(BlueprintAssignable, Category=<span class="hljs-string">"Muggy"</span>) FOnMuggyChanged OnMuggyChanged; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> AmbientTempC = <span class="hljs-number">31.f</span>; <span class="hljs-comment">// base temperature</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> AmbientRH = <span class="hljs-number">78.f</span>; <span class="hljs-comment">// relative humidity %</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> TimeScale = <span class="hljs-number">1.f</span>; <span class="hljs-comment">// speed of day cycle</span> <span class="hljs-built_in">UFUNCTION</span>(BlueprintCallable, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">SetAmbient</span><span class="hljs-params">(<span class="hljs-type">float</span></span> InTempC, <span class="hljs-type">float</span> InRH); <span class="hljs-built_in">UFUNCTION</span>(BlueprintCallable, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">ApplyLocalDelta</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTempC, <span class="hljs-type">float</span> DeltaRH, <span class="hljs-type">float</span> Duration); <span class="hljs-built_in">UFUNCTION</span>(BlueprintPure, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-function"><span class="hljs-type">float</span></span> <span class="hljs-title">GetHeatIndexC</span><span class="hljs-params">()</span> <span class="hljs-type">const</span> { <span class="hljs-keyword">return</span> CachedHeatIndexC; } <span class="hljs-built_in">UFUNCTION</span>(BlueprintPure, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-function"><span class="hljs-type">float</span></span> <span class="hljs-title">GetDewPointC</span><span class="hljs-params">()</span> <span class="hljs-type">const</span> { <span class="hljs-keyword">return</span> CachedDewPointC; } <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Initialize</span><span class="hljs-params">(FSubsystemCollectionBase&amp; Collection)</span> <span class="hljs-keyword">override</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Deinitialize</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime); <span class="hljs-function"><span class="hljs-type">bool</span></span> <span class="hljs-title">IsTickable</span><span class="hljs-params">()</span> <span class="hljs-type">const</span> { <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>; } <span class="hljs-keyword">private</span>: <span class="hljs-type">float</span> CachedHeatIndexC = <span class="hljs-number">0.f</span>; <span class="hljs-type">float</span> CachedDewPointC = <span class="hljs-number">0.f</span>; <span class="hljs-type">float</span> TempOffsetTimer = <span class="hljs-number">0.f</span>; <span class="hljs-type">float</span> TempOffsetC = <span class="hljs-number">0.f</span>; <span class="hljs-type">float</span> RHOffset = <span class="hljs-number">0.f</span>; <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">Recompute</span><span class="hljs-params">()</span>; <span class="hljs-function"><span class="hljs-type">static</span></span> <span class="hljs-type">float</span> <span class="hljs-title">DewPointC</span><span class="hljs-params">(<span class="hljs-type">float</span></span> T, <span class="hljs-type">float</span> RH); <span class="hljs-function"><span class="hljs-type">static</span></span> <span class="hljs-type">float</span> <span class="hljs-title">HeatIndexC</span><span class="hljs-params">(<span class="hljs-type">float</span></span> T, <span class="hljs-type">float</span> RH); }; </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// HumiditySubsystem.cpp</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"HumiditySubsystem.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Engine/World.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"TimerManager.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Math/UnrealMathUtility.h"</span> <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UHumiditySubsystem::Initialize</span><span class="hljs-params">(FSubsystemCollectionBase&amp;)</span>{ <span class="hljs-built_in">Recompute</span>(); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UHumiditySubsystem::Deinitialize</span><span class="hljs-params">()</span>{} <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UHumiditySubsystem::SetAmbient</span><span class="hljs-params">(<span class="hljs-type">float</span></span> InTempC, <span class="hljs-type">float</span> InRH){ AmbientTempC = InTempC; AmbientRH = InRH; <span class="hljs-built_in">Recompute</span>(); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UHumiditySubsystem::ApplyLocalDelta</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTempC, <span class="hljs-type">float</span> DeltaRH, <span class="hljs-type">float</span> Duration){ TempOffsetC = DeltaTempC; RHOffset = DeltaRH; TempOffsetTimer = Duration; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UHumiditySubsystem::Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaTime){ <span class="hljs-comment">// simple slow daily swing</span> <span class="hljs-type">const</span> <span class="hljs-type">float</span> Time = <span class="hljs-built_in">GetWorld</span>() ? <span class="hljs-built_in">GetWorld</span>()-&gt;<span class="hljs-built_in">GetTimeSeconds</span>() * TimeScale : <span class="hljs-number">0.f</span>; <span class="hljs-type">const</span> <span class="hljs-type">float</span> DaySine = FMath::<span class="hljs-built_in">Sin</span>(Time * <span class="hljs-number">2.f</span> * PI / <span class="hljs-number">120.f</span>); <span class="hljs-comment">// 2min loop demo</span> <span class="hljs-type">const</span> <span class="hljs-type">float</span> TempDaily = AmbientTempC + <span class="hljs-number">2.5f</span> * DaySine; <span class="hljs-type">const</span> <span class="hljs-type">float</span> RHDaily = AmbientRH + <span class="hljs-number">5.f</span> * FMath::<span class="hljs-built_in">Max</span>(<span class="hljs-number">0.f</span>, DaySine); <span class="hljs-keyword">if</span> (TempOffsetTimer &gt; <span class="hljs-number">0.f</span>){ TempOffsetTimer -= DeltaTime; <span class="hljs-keyword">if</span> (TempOffsetTimer &lt;= <span class="hljs-number">0.f</span>){ TempOffsetC = <span class="hljs-number">0.f</span>; RHOffset = <span class="hljs-number">0.f</span>; } } <span class="hljs-type">const</span> <span class="hljs-type">float</span> T = TempDaily + TempOffsetC; <span class="hljs-type">const</span> <span class="hljs-type">float</span> RH = FMath::<span class="hljs-built_in">Clamp</span>(RHDaily + RHOffset, <span class="hljs-number">0.f</span>, <span class="hljs-number">100.f</span>); <span class="hljs-type">const</span> <span class="hljs-type">float</span> NewDP = <span class="hljs-built_in">DewPointC</span>(T, RH); <span class="hljs-type">const</span> <span class="hljs-type">float</span> NewHI = <span class="hljs-built_in">HeatIndexC</span>(T, RH); <span class="hljs-keyword">if</span> (!FMath::<span class="hljs-built_in">IsNearlyEqual</span>(NewDP, CachedDewPointC, <span class="hljs-number">0.01f</span>) || !FMath::<span class="hljs-built_in">IsNearlyEqual</span>(NewHI, CachedHeatIndexC, <span class="hljs-number">0.01f</span>)) { CachedDewPointC = NewDP; CachedHeatIndexC = NewHI; OnMuggyChanged.<span class="hljs-built_in">Broadcast</span>(CachedHeatIndexC, CachedDewPointC); } } <span class="hljs-function"><span class="hljs-type">float</span></span> <span class="hljs-title">UHumiditySubsystem::DewPointC</span><span class="hljs-params">(<span class="hljs-type">float</span></span> T, <span class="hljs-type">float</span> RH){ <span class="hljs-type">const</span> <span class="hljs-type">float</span> a=<span class="hljs-number">17.62f</span>, b=<span class="hljs-number">243.12f</span>; <span class="hljs-type">const</span> <span class="hljs-type">float</span> gamma = (a*T)/(b+T) + FMath::<span class="hljs-built_in">Loge</span>(RH/<span class="hljs-number">100.f</span>); <span class="hljs-keyword">return</span> (b*gamma)/(a-gamma); } <span class="hljs-function"><span class="hljs-type">float</span></span> <span class="hljs-title">UHumiditySubsystem::HeatIndexC</span><span class="hljs-params">(<span class="hljs-type">float</span></span> T, <span class="hljs-type">float</span> RH){ <span class="hljs-type">const</span> <span class="hljs-type">float</span> TF = T*<span class="hljs-number">9.f</span>/<span class="hljs-number">5.f</span> + <span class="hljs-number">32.f</span>; <span class="hljs-type">const</span> <span class="hljs-type">float</span> R = RH; <span class="hljs-type">float</span> HI = <span class="hljs-number">-42.379f</span> + <span class="hljs-number">2.04901523f</span>*TF + <span class="hljs-number">10.14333127f</span>*R - <span class="hljs-number">0.22475541f</span>*TF*R - <span class="hljs-number">0.00683783f</span>*TF*TF - <span class="hljs-number">0.05481717f</span>*R*R + <span class="hljs-number">0.00122874f</span>*TF*TF*R + <span class="hljs-number">0.00085282f</span>*TF*R*R - <span class="hljs-number">0.00000199f</span>*TF*TF*R*R; <span class="hljs-keyword">if</span> (TF &lt; <span class="hljs-number">80.f</span>){ <span class="hljs-type">const</span> <span class="hljs-type">float</span> w = FMath::<span class="hljs-built_in">Clamp</span>((TF<span class="hljs-number">-70.f</span>)/<span class="hljs-number">10.f</span>, <span class="hljs-number">0.f</span>, <span class="hljs-number">1.f</span>); HI = (<span class="hljs-number">1.f</span>-w)*TF + w*HI; } <span class="hljs-keyword">return</span> (HI<span class="hljs-number">-32.f</span>)*<span class="hljs-number">5.f</span>/<span class="hljs-number">9.f</span>; } </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <blockquote data-start="6387" data-end="6492">\r
                                                        <p data-start="6389" data-end="6492">this gives you a <strong\r
                                                                data-start="6406" data-end="6418">tickable</strong>,\r
                                                            global humidity model with a broadcast you can hook to VFX\r
                                                            and gameplay.</p>\r
                                                    </blockquote>\r
                                                    <hr data-start="6494" data-end="6497" />\r
                                                    <h2 data-start="6499" data-end="6555">2) local weather volumes (cool\r
                                                        spots / steam pockets)</h2>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// WeatherVolume.h</span> <span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/Actor.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"WeatherVolume.generated.h"</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">UBoxComponent</span>; <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">MUGGYRUSH_API</span> AWeatherVolume : <span class="hljs-keyword">public</span> AActor { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">AWeatherVolume</span>(); <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> DeltaTempC = <span class="hljs-number">-3.f</span>; <span class="hljs-comment">// negative = cooler zone</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> DeltaRH = <span class="hljs-number">-10.f</span>; <span class="hljs-comment">// negative = drier</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> EffectDuration = <span class="hljs-number">2.f</span>; <span class="hljs-comment">// seconds after exit</span> <span class="hljs-keyword">protected</span>: <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere) UBoxComponent* Box; <span class="hljs-built_in">UFUNCTION</span>() <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">OnBeginOverlap</span><span class="hljs-params">(AActor* Overlapped, AActor* Other)</span>; <span class="hljs-built_in">UFUNCTION</span>() <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">OnEndOverlap</span><span class="hljs-params">(AActor* Overlapped, AActor* Other)</span>; }; </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// WeatherVolume.cpp</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"WeatherVolume.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Components/BoxComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"HumiditySubsystem.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Kismet/GameplayStatics.h"</span> AWeatherVolume::<span class="hljs-built_in">AWeatherVolume</span>(){ Box = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;UBoxComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"Box"</span>)); RootComponent = Box; Box-&gt;<span class="hljs-built_in">SetCollisionProfileName</span>(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"OverlapAll"</span>)); Box-&gt;OnComponentBeginOverlap.<span class="hljs-built_in">AddDynamic</span>(<span class="hljs-keyword">this</span>, &amp;AWeatherVolume::OnBeginOverlap); Box-&gt;OnComponentEndOverlap.<span class="hljs-built_in">AddDynamic</span>(<span class="hljs-keyword">this</span>, &amp;AWeatherVolume::OnEndOverlap); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AWeatherVolume::OnBeginOverlap</span><span class="hljs-params">(AActor*, AActor* Other)</span>{ <span class="hljs-keyword">if</span> (!Other) <span class="hljs-keyword">return</span>; <span class="hljs-keyword">if</span> (UWorld* W = <span class="hljs-built_in">GetWorld</span>()){ <span class="hljs-keyword">if</span> (<span class="hljs-keyword">auto</span>* HS = W-&gt;<span class="hljs-built_in">GetGameInstance</span>()-&gt;<span class="hljs-built_in">GetSubsystem</span>&lt;UHumiditySubsystem&gt;()){ HS-&gt;<span class="hljs-built_in">ApplyLocalDelta</span>(DeltaTempC, DeltaRH, EffectDuration); } } } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AWeatherVolume::OnEndOverlap</span><span class="hljs-params">(AActor*, AActor* Other)</span>{ <span class="hljs-keyword">if</span> (!Other) <span class="hljs-keyword">return</span>; <span class="hljs-keyword">if</span> (UWorld* W = <span class="hljs-built_in">GetWorld</span>()){ <span class="hljs-keyword">if</span> (<span class="hljs-keyword">auto</span>* HS = W-&gt;<span class="hljs-built_in">GetGameInstance</span>()-&gt;<span class="hljs-built_in">GetSubsystem</span>&lt;UHumiditySubsystem&gt;()){ HS-&gt;<span class="hljs-built_in">ApplyLocalDelta</span>(<span class="hljs-number">0.f</span>, <span class="hljs-number">0.f</span>, <span class="hljs-number">0.1f</span>); } } } </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <p data-start="8418" data-end="8518">drop these in the level to make\r
                                                        <strong data-start="8450" data-end="8462">AC zones</strong>\r
                                                        (negative deltas) or <strong data-start="8484"\r
                                                            data-end="8499">steam leaks</strong> (positive deltas).</p>\r
                                                    <hr data-start="8520" data-end="8523" />\r
                                                    <h2 data-start="8525" data-end="8573">3) post-process driver\r
                                                        (fog/wetness feedback)</h2>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// MuggyPostProcessComponent.h</span> <span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Components/ActorComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"MuggyPostProcessComponent.generated.h"</span> <span class="hljs-built_in">UCLASS</span>(ClassGroup=(Custom), meta=(BlueprintSpawnableComponent)) <span class="hljs-keyword">class</span> <span class="hljs-title class_">MUGGYRUSH_API</span> UMuggyPostProcessComponent : <span class="hljs-keyword">public</span> UActorComponent { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">BeginPlay</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) FName FogParam = <span class="hljs-string">"FogIntensity"</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) FName WetParam = <span class="hljs-string">"ScreenWetness"</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) FName HeatParam = <span class="hljs-string">"HeatTint"</span>; <span class="hljs-keyword">private</span>: <span class="hljs-keyword">class</span> <span class="hljs-title class_">UMaterialParameterCollection</span>* MPC; <span class="hljs-keyword">class</span> <span class="hljs-title class_">UMaterialParameterCollectionInstance</span>* MPCI; <span class="hljs-built_in">UFUNCTION</span>() <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">OnMuggyChanged</span><span class="hljs-params">(<span class="hljs-type">float</span></span> HeatIndexC, <span class="hljs-type">float</span> DewPointC); }; </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// MuggyPostProcessComponent.cpp</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"MuggyPostProcessComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"HumiditySubsystem.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Materials/MaterialParameterCollection.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Materials/MaterialParameterCollectionInstance.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Kismet/GameplayStatics.h"</span> <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UMuggyPostProcessComponent::BeginPlay</span><span class="hljs-params">()</span>{ Super::<span class="hljs-built_in">BeginPlay</span>(); MPC = <span class="hljs-built_in">LoadObject</span>&lt;UMaterialParameterCollection&gt;(<span class="hljs-literal">nullptr</span>, <span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"/Game/MuggyRush/MPC_Muggy.MPC_Muggy"</span>)); <span class="hljs-keyword">if</span> (MPC){ MPCI = <span class="hljs-built_in">GetWorld</span>()-&gt;<span class="hljs-built_in">GetParameterCollectionInstance</span>(MPC); } <span class="hljs-keyword">if</span> (<span class="hljs-keyword">auto</span>* HS = <span class="hljs-built_in">GetWorld</span>()-&gt;<span class="hljs-built_in">GetGameInstance</span>()-&gt;<span class="hljs-built_in">GetSubsystem</span>&lt;UHumiditySubsystem&gt;()){ HS-&gt;OnMuggyChanged.<span class="hljs-built_in">AddDynamic</span>(<span class="hljs-keyword">this</span>, &amp;UMuggyPostProcessComponent::OnMuggyChanged); } } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">UMuggyPostProcessComponent::OnMuggyChanged</span><span class="hljs-params">(<span class="hljs-type">float</span></span> HeatIndexC, <span class="hljs-type">float</span> DewPointC){ <span class="hljs-keyword">if</span> (!MPCI) <span class="hljs-keyword">return</span>; <span class="hljs-type">const</span> <span class="hljs-type">float</span> Fog = FMath::<span class="hljs-built_in">GetMappedRangeValueClamped</span>(<span class="hljs-built_in">FVector2D</span>(<span class="hljs-number">30.f</span>, <span class="hljs-number">45.f</span>), <span class="hljs-built_in">FVector2D</span>(<span class="hljs-number">0.1f</span>, <span class="hljs-number">1.0f</span>), HeatIndexC); <span class="hljs-type">const</span> <span class="hljs-type">float</span> Wet = FMath::<span class="hljs-built_in">GetMappedRangeValueClamped</span>(<span class="hljs-built_in">FVector2D</span>(<span class="hljs-number">22.f</span>, <span class="hljs-number">27.f</span>), <span class="hljs-built_in">FVector2D</span>(<span class="hljs-number">0.0f</span>, <span class="hljs-number">1.0f</span>), DewPointC); <span class="hljs-type">const</span> <span class="hljs-type">float</span> HeatTint = FMath::<span class="hljs-built_in">GetMappedRangeValueClamped</span>(<span class="hljs-built_in">FVector2D</span>(<span class="hljs-number">32.f</span>, <span class="hljs-number">44.f</span>), <span class="hljs-built_in">FVector2D</span>(<span class="hljs-number">0.0f</span>, <span class="hljs-number">1.0f</span>), HeatIndexC); MPCI-&gt;<span class="hljs-built_in">SetScalarParameterValue</span>(FogParam, Fog); MPCI-&gt;<span class="hljs-built_in">SetScalarParameterValue</span>(WetParam, Wet); MPCI-&gt;<span class="hljs-built_in">SetScalarParameterValue</span>(HeatParam, HeatTint); } </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <p data-start="10697" data-end="10792">attach this component to the\r
                                                        player (or a manager actor) to drive fog/wetness <strong\r
                                                            data-start="10775" data-end="10791">in real time</strong>.\r
                                                    </p>\r
                                                    <hr data-start="10794" data-end="10797" />\r
                                                    <h2 data-start="10799" data-end="10848">4) player character with\r
                                                        stamina &amp; overheating</h2>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// MuggyCharacter.h</span> <span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/Character.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"InputActionValue.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"MuggyCharacter.generated.h"</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">UCameraComponent</span>; <span class="hljs-keyword">class</span> <span class="hljs-title class_">USpringArmComponent</span>; <span class="hljs-keyword">class</span> <span class="hljs-title class_">UEnhancedInputLocalPlayerSubsystem</span>; <span class="hljs-keyword">class</span> <span class="hljs-title class_">UInputMappingContext</span>; <span class="hljs-keyword">class</span> <span class="hljs-title class_">UInputAction</span>; <span class="hljs-keyword">class</span> <span class="hljs-title class_">UMuggyPostProcessComponent</span>; <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">MUGGYRUSH_API</span> AMuggyCharacter : <span class="hljs-keyword">public</span> ACharacter { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">AMuggyCharacter</span>(); <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">SetupPlayerInputComponent</span><span class="hljs-params">(UInputComponent* PlayerInputComponent)</span> <span class="hljs-keyword">override</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">BeginPlay</span><span class="hljs-params">()</span> <span class="hljs-keyword">override</span>; <span class="hljs-function"><span class="hljs-keyword">virtual</span></span> <span class="hljs-type">void</span> <span class="hljs-title">Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaSeconds) <span class="hljs-keyword">override</span>; <span class="hljs-keyword">protected</span>: <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere, BlueprintReadOnly) USpringArmComponent* SpringArm; <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere, BlueprintReadOnly) UCameraComponent* Camera; <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere) UMuggyPostProcessComponent* MuggyFX; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Input"</span>) UInputMappingContext* IMC; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Input"</span>) UInputAction* IA_Move; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Input"</span>) UInputAction* IA_Look; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Input"</span>) UInputAction* IA_Sprint; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Input"</span>) UInputAction* IA_Jump; FVector2D MoveInput; <span class="hljs-type">bool</span> bSprinting = <span class="hljs-literal">false</span>; <span class="hljs-comment">// stamina &amp; heat</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, BlueprintReadWrite, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> MaxStamina = <span class="hljs-number">100.f</span>; <span class="hljs-built_in">UPROPERTY</span>(BlueprintReadOnly, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> Stamina = <span class="hljs-number">100.f</span>; <span class="hljs-built_in">UPROPERTY</span>(BlueprintReadOnly, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> BodyHeat = <span class="hljs-number">0.f</span>; <span class="hljs-comment">// 0..100</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> BaseStaminaDrain = <span class="hljs-number">8.f</span>; <span class="hljs-comment">// per sec while sprinting</span> <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> HeatSensitivity = <span class="hljs-number">0.5f</span>; <span class="hljs-comment">// scales with HeatIndex</span> <span class="hljs-keyword">private</span>: <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">Move</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FInputActionValue&amp; Value); <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">Look</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FInputActionValue&amp; Value); <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">SprintPressed</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FInputActionValue&amp;); <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">SprintReleased</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FInputActionValue&amp;); <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">RefreshMovementSpeed</span><span class="hljs-params">()</span>; }; </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// MuggyCharacter.cpp</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"MuggyCharacter.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Camera/CameraComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/SpringArmComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"EnhancedInputSubsystems.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"EnhancedInputComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"HumiditySubsystem.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"MuggyPostProcessComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/CharacterMovementComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Kismet/GameplayStatics.h"</span> AMuggyCharacter::<span class="hljs-built_in">AMuggyCharacter</span>(){ PrimaryActorTick.bCanEverTick = <span class="hljs-literal">true</span>; SpringArm = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;USpringArmComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"SpringArm"</span>)); SpringArm-&gt;<span class="hljs-built_in">SetupAttachment</span>(RootComponent); SpringArm-&gt;TargetArmLength = <span class="hljs-number">0.f</span>; <span class="hljs-comment">// first person? set 0 or small for third person set 300</span> Camera = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;UCameraComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"Camera"</span>)); Camera-&gt;<span class="hljs-built_in">SetupAttachment</span>(SpringArm); MuggyFX = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;UMuggyPostProcessComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"MuggyFX"</span>)); <span class="hljs-built_in">GetCharacterMovement</span>()-&gt;MaxWalkSpeed = <span class="hljs-number">450.f</span>; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AMuggyCharacter::BeginPlay</span><span class="hljs-params">()</span>{ Super::<span class="hljs-built_in">BeginPlay</span>(); <span class="hljs-keyword">if</span> (APlayerController* PC = <span class="hljs-built_in">Cast</span>&lt;APlayerController&gt;(<span class="hljs-built_in">GetController</span>())){ <span class="hljs-keyword">if</span> (ULocalPlayer* LP = PC-&gt;<span class="hljs-built_in">GetLocalPlayer</span>()){ <span class="hljs-keyword">if</span> (<span class="hljs-keyword">auto</span>* Sub = LP-&gt;<span class="hljs-built_in">GetSubsystem</span>&lt;UEnhancedInputLocalPlayerSubsystem&gt;()){ Sub-&gt;<span class="hljs-built_in">AddMappingContext</span>(IMC, <span class="hljs-number">0</span>); } } } } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AMuggyCharacter::SetupPlayerInputComponent</span><span class="hljs-params">(UInputComponent* PlayerInputComponent)</span>{ <span class="hljs-keyword">if</span> (UEnhancedInputComponent* EIC = <span class="hljs-built_in">Cast</span>&lt;UEnhancedInputComponent&gt;(PlayerInputComponent)){ EIC-&gt;<span class="hljs-built_in">BindAction</span>(IA_Move, ETriggerEvent::Triggered, <span class="hljs-keyword">this</span>, &amp;AMuggyCharacter::Move); EIC-&gt;<span class="hljs-built_in">BindAction</span>(IA_Look, ETriggerEvent::Triggered, <span class="hljs-keyword">this</span>, &amp;AMuggyCharacter::Look); EIC-&gt;<span class="hljs-built_in">BindAction</span>(IA_Sprint, ETriggerEvent::Started, <span class="hljs-keyword">this</span>, &amp;AMuggyCharacter::SprintPressed); EIC-&gt;<span class="hljs-built_in">BindAction</span>(IA_Sprint, ETriggerEvent::Completed, <span class="hljs-keyword">this</span>, &amp;AMuggyCharacter::SprintReleased); EIC-&gt;<span class="hljs-built_in">BindAction</span>(IA_Jump, ETriggerEvent::Started, <span class="hljs-keyword">this</span>, &amp;ACharacter::Jump); } } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AMuggyCharacter::Move</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FInputActionValue&amp; Value){ FVector2D Axis = Value.<span class="hljs-built_in">Get</span>&lt;FVector2D&gt;(); MoveInput = Axis; <span class="hljs-keyword">if</span> (Controller){ <span class="hljs-built_in">AddMovementInput</span>(<span class="hljs-built_in">GetActorForwardVector</span>(), Axis.Y); <span class="hljs-built_in">AddMovementInput</span>(<span class="hljs-built_in">GetActorRightVector</span>(), Axis.X); } } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AMuggyCharacter::Look</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FInputActionValue&amp; Value){ FVector2D Axis = Value.<span class="hljs-built_in">Get</span>&lt;FVector2D&gt;(); <span class="hljs-built_in">AddControllerYawInput</span>(Axis.X); <span class="hljs-built_in">AddControllerPitchInput</span>(Axis.Y); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AMuggyCharacter::SprintPressed</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FInputActionValue&amp;){ bSprinting = <span class="hljs-literal">true</span>; <span class="hljs-built_in">RefreshMovementSpeed</span>(); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AMuggyCharacter::SprintReleased</span><span class="hljs-params">(<span class="hljs-type">const</span></span> FInputActionValue&amp;){ bSprinting = <span class="hljs-literal">false</span>; <span class="hljs-built_in">RefreshMovementSpeed</span>(); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AMuggyCharacter::RefreshMovementSpeed</span><span class="hljs-params">()</span>{ <span class="hljs-type">float</span> Base = <span class="hljs-number">450.f</span>; <span class="hljs-type">float</span> Speed = bSprinting ? <span class="hljs-number">700.f</span> : Base; <span class="hljs-comment">// heat penalty</span> <span class="hljs-keyword">if</span> (UWorld* W = <span class="hljs-built_in">GetWorld</span>()){ <span class="hljs-keyword">if</span> (<span class="hljs-keyword">auto</span>* HS = W-&gt;<span class="hljs-built_in">GetGameInstance</span>()-&gt;<span class="hljs-built_in">GetSubsystem</span>&lt;UHumiditySubsystem&gt;()){ <span class="hljs-type">const</span> <span class="hljs-type">float</span> HI = HS-&gt;<span class="hljs-built_in">GetHeatIndexC</span>(); <span class="hljs-comment">// 30..45 typical</span> <span class="hljs-type">const</span> <span class="hljs-type">float</span> Penalty = FMath::<span class="hljs-built_in">GetMappedRangeValueClamped</span>(<span class="hljs-built_in">FVector2D</span>(<span class="hljs-number">30.f</span>, <span class="hljs-number">45.f</span>), <span class="hljs-built_in">FVector2D</span>(<span class="hljs-number">0.f</span>, <span class="hljs-number">200.f</span>), HI); Speed = FMath::<span class="hljs-built_in">Max</span>(<span class="hljs-number">250.f</span>, Speed - Penalty*<span class="hljs-number">0.5f</span>); } } <span class="hljs-built_in">GetCharacterMovement</span>()-&gt;MaxWalkSpeed = Speed; } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AMuggyCharacter::Tick</span><span class="hljs-params">(<span class="hljs-type">float</span></span> DeltaSeconds){ Super::<span class="hljs-built_in">Tick</span>(DeltaSeconds); <span class="hljs-type">float</span> HI = <span class="hljs-number">32.f</span>; <span class="hljs-keyword">if</span> (<span class="hljs-keyword">auto</span>* HS = <span class="hljs-built_in">GetWorld</span>()-&gt;<span class="hljs-built_in">GetGameInstance</span>()-&gt;<span class="hljs-built_in">GetSubsystem</span>&lt;UHumiditySubsystem&gt;()){ HI = HS-&gt;<span class="hljs-built_in">GetHeatIndexC</span>(); } <span class="hljs-comment">// stamina dynamics</span> <span class="hljs-type">const</span> <span class="hljs-type">bool</span> bIsMovingFast = bSprinting &amp;&amp; (MoveInput.<span class="hljs-built_in">SizeSquared</span>() &gt; <span class="hljs-number">0.1f</span>); <span class="hljs-type">const</span> <span class="hljs-type">float</span> Drain = bIsMovingFast ? (BaseStaminaDrain + HeatSensitivity * FMath::<span class="hljs-built_in">Max</span>(<span class="hljs-number">0.f</span>, HI<span class="hljs-number">-30.f</span>)) : <span class="hljs-number">0.f</span>; <span class="hljs-type">const</span> <span class="hljs-type">float</span> Regen = (!bIsMovingFast &amp;&amp; HI &lt; <span class="hljs-number">35.f</span>) ? <span class="hljs-number">10.f</span> : <span class="hljs-number">4.f</span>; Stamina = FMath::<span class="hljs-built_in">Clamp</span>(Stamina + ( -Drain + Regen) * DeltaSeconds, <span class="hljs-number">0.f</span>, MaxStamina); BodyHeat = FMath::<span class="hljs-built_in">Clamp</span>(BodyHeat + (bIsMovingFast ? (<span class="hljs-number">0.6f</span> + <span class="hljs-number">0.05f</span>*(HI<span class="hljs-number">-30.f</span>)) : <span class="hljs-number">-0.8f</span>) * DeltaSeconds, <span class="hljs-number">0.f</span>, <span class="hljs-number">100.f</span>); <span class="hljs-keyword">if</span> (Stamina &lt;= <span class="hljs-number">1.f</span> || BodyHeat &gt;= <span class="hljs-number">95.f</span>){ bSprinting = <span class="hljs-literal">false</span>; <span class="hljs-comment">// auto cancel sprint</span> } <span class="hljs-built_in">RefreshMovementSpeed</span>(); } </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <p data-start="16946" data-end="16972"><strong data-start="16946"\r
                                                            data-end="16972">hook up Enhanced Input</strong></p>\r
                                                    <ul data-start="16973" data-end="17174">\r
                                                        <li data-start="16973" data-end="17133">\r
                                                            <p data-start="16975" data-end="16999">create IMC with\r
                                                                actions:</p>\r
                                                            <ul data-start="17002" data-end="17133">\r
                                                                <li data-start="17002" data-end="17034">\r
                                                                    <p data-start="17004" data-end="17034"><code\r
                                                                            data-start="17004"\r
                                                                            data-end="17013">IA_Move</code> (Value2D,\r
                                                                        WASD/Axes)</p>\r
                                                                </li>\r
                                                                <li data-start="17037" data-end="17065">\r
                                                                    <p data-start="17039" data-end="17065"><code\r
                                                                            data-start="17039"\r
                                                                            data-end="17048">IA_Look</code> (Value2D,\r
                                                                        mouse)</p>\r
                                                                </li>\r
                                                                <li data-start="17068" data-end="17102">\r
                                                                    <p data-start="17070" data-end="17102"><code\r
                                                                            data-start="17070"\r
                                                                            data-end="17081">IA_Sprint</code> (Digital,\r
                                                                        LeftShift)</p>\r
                                                                </li>\r
                                                                <li data-start="17105" data-end="17133">\r
                                                                    <p data-start="17107" data-end="17133"><code\r
                                                                            data-start="17107"\r
                                                                            data-end="17116">IA_Jump</code> (Digital,\r
                                                                        Space)</p>\r
                                                                </li>\r
                                                            </ul>\r
                                                        </li>\r
                                                        <li data-start="17134" data-end="17174">\r
                                                            <p data-start="17136" data-end="17174">assign them in the\r
                                                                character defaults.</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <hr data-start="17176" data-end="17179" />\r
                                                    <h2 data-start="17181" data-end="17216">5) pickups (hydration +\r
                                                        filters)</h2>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// HydrationPickup.h</span> <span class="hljs-meta">#<span class="hljs-keyword">pragma</span></span> once <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"CoreMinimal.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"GameFramework/Actor.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"HydrationPickup.generated.h"</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">USphereComponent</span>; <span class="hljs-keyword">class</span> <span class="hljs-title class_">UNiagaraSystem</span>; <span class="hljs-built_in">UCLASS</span>() <span class="hljs-keyword">class</span> <span class="hljs-title class_">MUGGYRUSH_API</span> AHydrationPickup : <span class="hljs-keyword">public</span> AActor { <span class="hljs-built_in">GENERATED_BODY</span>() <span class="hljs-keyword">public</span>: <span class="hljs-built_in">AHydrationPickup</span>(); <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"Muggy"</span>) <span class="hljs-type">float</span> StaminaBoost = <span class="hljs-number">35.f</span>; <span class="hljs-built_in">UPROPERTY</span>(EditAnywhere, Category=<span class="hljs-string">"FX"</span>) UNiagaraSystem* PickupFX; <span class="hljs-keyword">protected</span>: <span class="hljs-built_in">UPROPERTY</span>(VisibleAnywhere) USphereComponent* Sphere; <span class="hljs-built_in">UFUNCTION</span>() <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">OnOverlap</span><span class="hljs-params">(AActor* Overlapped, AActor* Other)</span>; }; </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-cpp"><span class="hljs-comment">// HydrationPickup.cpp</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"HydrationPickup.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"Components/SphereComponent.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"NiagaraFunctionLibrary.h"</span> <span class="hljs-meta">#<span class="hljs-keyword">include</span></span> <span class="hljs-string">"MuggyCharacter.h"</span> AHydrationPickup::<span class="hljs-built_in">AHydrationPickup</span>(){ Sphere = <span class="hljs-built_in">CreateDefaultSubobject</span>&lt;USphereComponent&gt;(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"Sphere"</span>)); RootComponent = Sphere; Sphere-&gt;<span class="hljs-built_in">InitSphereRadius</span>(<span class="hljs-number">50.f</span>); Sphere-&gt;<span class="hljs-built_in">SetCollisionProfileName</span>(<span class="hljs-built_in">TEXT</span>(<span class="hljs-string">"OverlapAll"</span>)); Sphere-&gt;OnComponentBeginOverlap.<span class="hljs-built_in">AddDynamic</span>(<span class="hljs-keyword">this</span>, &amp;AHydrationPickup::OnOverlap); } <span class="hljs-function"><span class="hljs-type">void</span></span> <span class="hljs-title">AHydrationPickup::OnOverlap</span><span class="hljs-params">(AActor*, AActor* Other)</span>{ <span class="hljs-keyword">if</span> (AMuggyCharacter* MC = <span class="hljs-built_in">Cast</span>&lt;AMuggyCharacter&gt;(Other)){ MC-&gt;Stamina = FMath::<span class="hljs-built_in">Min</span>(MC-&gt;Stamina + StaminaBoost, MC-&gt;MaxStamina); <span class="hljs-keyword">if</span> (PickupFX) UNiagaraFunctionLibrary::<span class="hljs-built_in">SpawnSystemAtLocation</span>(<span class="hljs-built_in">GetWorld</span>(), PickupFX, <span class="hljs-built_in">GetActorLocation</span>()); <span class="hljs-built_in">Destroy</span>(); } } </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <p data-start="18639" data-end="18721">add a <strong\r
                                                            data-start="18645" data-end="18661">FilterPickup</strong>\r
                                                        for scoring the dehumidifier objective in the same pattern.</p>\r
                                                    <hr data-start="18723" data-end="18726" />\r
                                                    <h2 data-start="18728" data-end="18765">6) win/lose conditions (mug\r
                                                        gauge)</h2>\r
                                                    <ul data-start="18767" data-end="18910">\r
                                                        <li data-start="18767" data-end="18825">\r
                                                            <p data-start="18769" data-end="18825">win: collect N\r
                                                                filters and reach the dehumidifier tower.</p>\r
                                                        </li>\r
                                                        <li data-start="18826" data-end="18910">\r
                                                            <p data-start="18828" data-end="18910">lose: <strong\r
                                                                    data-start="18834" data-end="18847">Mug\r
                                                                    Gauge</strong> hits max (e.g., HI averaged over 20s\r
                                                                &gt; 42&deg;C) or timer expires.</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <p data-start="18912" data-end="18953">Add a simple GameMode or\r
                                                        Level Blueprint:</p>\r
                                                    <ul data-start="18954" data-end="19104">\r
                                                        <li data-start="18954" data-end="19000">\r
                                                            <p data-start="18956" data-end="19000">listen to <code\r
                                                                    data-start="18966"\r
                                                                    data-end="19000">HumiditySubsystem.OnMuggyChanged</code>\r
                                                            </p>\r
                                                        </li>\r
                                                        <li data-start="19001" data-end="19043">\r
                                                            <p data-start="19003" data-end="19043">maintain a rolling\r
                                                                average of heat index</p>\r
                                                        </li>\r
                                                        <li data-start="19044" data-end="19104">\r
                                                            <p data-start="19046" data-end="19104">if threshold exceeded\r
                                                                &rarr; trigger fog burst + fade to black.</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <hr data-start="19106" data-end="19109" />\r
                                                    <h2 data-start="19111" data-end="19150">7) visuals &amp;\r
                                                        &ldquo;latest tech&rdquo; sprinkles</h2>\r
                                                    <ul data-start="19152" data-end="19706">\r
                                                        <li data-start="19152" data-end="19262">\r
                                                            <p data-start="19154" data-end="19262"><strong\r
                                                                    data-start="19154" data-end="19163">Lumen</strong>:\r
                                                                default global illumination&mdash;use wet asphalt and\r
                                                                metallic props; looks great under overcast HDRIs.</p>\r
                                                        </li>\r
                                                        <li data-start="19263" data-end="19319">\r
                                                            <p data-start="19265" data-end="19319"><strong\r
                                                                    data-start="19265" data-end="19275">Nanite</strong>:\r
                                                                enable on dense meshes; helps performance.</p>\r
                                                        </li>\r
                                                        <li data-start="19320" data-end="19451">\r
                                                            <p data-start="19322" data-end="19336"><strong\r
                                                                    data-start="19322"\r
                                                                    data-end="19333">Niagara</strong>:</p>\r
                                                            <ul data-start="19339" data-end="19451">\r
                                                                <li data-start="19339" data-end="19381">\r
                                                                    <p data-start="19341" data-end="19381">soft <strong\r
                                                                            data-start="19346" data-end="19363">mist\r
                                                                            emitters</strong> in cool tunnels</p>\r
                                                                </li>\r
                                                                <li data-start="19384" data-end="19451">\r
                                                                    <p data-start="19386" data-end="19451">subtle\r
                                                                        <strong data-start="19393" data-end="19409">heat\r
                                                                            shimmer</strong> in hot alleys\r
                                                                        (screen-aligned distortion)</p>\r
                                                                </li>\r
                                                            </ul>\r
                                                        </li>\r
                                                        <li data-start="19452" data-end="19567">\r
                                                            <p data-start="19454" data-end="19567"><strong\r
                                                                    data-start="19454" data-end="19476">Material\r
                                                                    functions</strong>: <code data-start="19478"\r
                                                                    data-end="19499">WorldAlignedWetness</code> driven\r
                                                                by <code data-start="19510"\r
                                                                    data-end="19525">ScreenWetness</code> MPC param for\r
                                                                a universal &ldquo;wetness&rdquo; mask.</p>\r
                                                        </li>\r
                                                        <li data-start="19568" data-end="19706">\r
                                                            <p data-start="19570" data-end="19706"><strong\r
                                                                    data-start="19570" data-end="19579">Chaos</strong>:\r
                                                                slippery physics&mdash;reduce friction on wet floor\r
                                                                Physics Materials (character will slide a bit when\r
                                                                sprinting with low stamina).</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <hr data-start="19708" data-end="19711" />\r
                                                    <h2 data-start="19713" data-end="19737">quick playtest recipe</h2>\r
                                                    <ol data-start="19739" data-end="20137">\r
                                                        <li data-start="19739" data-end="19889">\r
                                                            <p data-start="19742" data-end="19780">place a few <strong\r
                                                                    data-start="19754"\r
                                                                    data-end="19772">AWeatherVolume</strong> actors:</p>\r
                                                            <ul data-start="19784" data-end="19889">\r
                                                                <li data-start="19784" data-end="19835">\r
                                                                    <p data-start="19786" data-end="19835">&ldquo;Mist\r
                                                                        Tunnel&rdquo;: <code data-start="19801"\r
                                                                            data-end="19818">DeltaTempC = -5</code>,\r
                                                                        <code data-start="19820"\r
                                                                            data-end="19835">DeltaRH = -20</code></p>\r
                                                                </li>\r
                                                                <li data-start="19839" data-end="19889">\r
                                                                    <p data-start="19841" data-end="19889">&ldquo;Steam\r
                                                                        Leak&rdquo;: <code data-start="19855"\r
                                                                            data-end="19872">DeltaTempC = +3</code>,\r
                                                                        <code data-start="19874"\r
                                                                            data-end="19889">DeltaRH = +15</code></p>\r
                                                                </li>\r
                                                            </ul>\r
                                                        </li>\r
                                                        <li data-start="19890" data-end="19948">\r
                                                            <p data-start="19893" data-end="19948">drop several <strong\r
                                                                    data-start="19906"\r
                                                                    data-end="19925">HydrationPickup</strong> items\r
                                                                along the route.</p>\r
                                                        </li>\r
                                                        <li data-start="19949" data-end="20012">\r
                                                            <p data-start="19952" data-end="20012">set <code\r
                                                                    data-start="19956"\r
                                                                    data-end="19993">HumiditySubsystem.AmbientTempC = 32</code>,\r
                                                                <code data-start="19995"\r
                                                                    data-end="20011">AmbientRH = 80</code>.</p>\r
                                                        </li>\r
                                                        <li data-start="20013" data-end="20137">\r
                                                            <p data-start="20016" data-end="20137">run PIE: watch\r
                                                                <strong data-start="20031" data-end="20048">stamina\r
                                                                    drain</strong> faster in hot/humid spaces; recover\r
                                                                in cool zones; fog intensifies at higher heat index.</p>\r
                                                        </li>\r
                                                    </ol>\r
                                                    <hr data-start="20139" data-end="20142" />\r
                                                    <h2 data-start="20144" data-end="20176">optional: blueprint HUD\r
                                                        (UMG)</h2>\r
                                                    <ul data-start="20178" data-end="20410">\r
                                                        <li data-start="20178" data-end="20296">\r
                                                            <p data-start="20180" data-end="20205">create a UMG widget\r
                                                                with:</p>\r
                                                            <ul data-start="20208" data-end="20296">\r
                                                                <li data-start="20208" data-end="20225">\r
                                                                    <p data-start="20210" data-end="20225"><strong\r
                                                                            data-start="20210" data-end="20225">Stamina\r
                                                                            bar</strong></p>\r
                                                                </li>\r
                                                                <li data-start="20228" data-end="20252">\r
                                                                    <p data-start="20230" data-end="20252"><strong\r
                                                                            data-start="20230" data-end="20252">Heat\r
                                                                            Index readout</strong></p>\r
                                                                </li>\r
                                                                <li data-start="20255" data-end="20278">\r
                                                                    <p data-start="20257" data-end="20278"><strong\r
                                                                            data-start="20257" data-end="20278">Dew\r
                                                                            Point readout</strong></p>\r
                                                                </li>\r
                                                                <li data-start="20281" data-end="20296">\r
                                                                    <p data-start="20283" data-end="20296"><strong\r
                                                                            data-start="20283" data-end="20296">Mug\r
                                                                            Gauge</strong></p>\r
                                                                </li>\r
                                                            </ul>\r
                                                        </li>\r
                                                        <li data-start="20297" data-end="20410">\r
                                                            <p data-start="20299" data-end="20410">bind values from the\r
                                                                character and the subsystem (via <code\r
                                                                    data-start="20353"\r
                                                                    data-end="20408">GetGameInstance()-&gt;GetSubsystem&lt;UHumiditySubsystem&gt;()</code>).\r
                                                            </p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <hr data-start="20412" data-end="20415" />\r
                                                    <h2 data-start="20417" data-end="20457">polishing ideas / future\r
                                                        enhancements</h2>\r
                                                    <ul data-start="20459" data-end="21047">\r
                                                        <li data-start="20459" data-end="20579">\r
                                                            <p data-start="20461" data-end="20579"><strong\r
                                                                    data-start="20461" data-end="20482">outside vs\r
                                                                    inside</strong>: add an &ldquo;outdoor probe&rdquo;\r
                                                                volume; open/close gates only if outside <strong\r
                                                                    data-start="20548" data-end="20569">absolute\r
                                                                    humidity</strong> is lower.</p>\r
                                                        </li>\r
                                                        <li data-start="20580" data-end="20661">\r
                                                            <p data-start="20582" data-end="20661"><strong\r
                                                                    data-start="20582" data-end="20601">dynamic\r
                                                                    puddles</strong>: runtime virtual textures + mesh\r
                                                                decals as humidity spikes.</p>\r
                                                        </li>\r
                                                        <li data-start="20662" data-end="20780">\r
                                                            <p data-start="20664" data-end="20780"><strong\r
                                                                    data-start="20664" data-end="20697">GAS (Gameplay\r
                                                                    Ability System)</strong>: model sprint as an ability\r
                                                                with tags (&ldquo;Overheated&rdquo;), cooldown when\r
                                                                BodyHeat high.</p>\r
                                                        </li>\r
                                                        <li data-start="20781" data-end="20860">\r
                                                            <p data-start="20783" data-end="20860"><strong\r
                                                                    data-start="20783" data-end="20797">AI\r
                                                                    workers</strong>: NPCs with overheating meters;\r
                                                                escort them through cool paths.</p>\r
                                                        </li>\r
                                                        <li data-start="20861" data-end="20965">\r
                                                            <p data-start="20863" data-end="20965"><strong\r
                                                                    data-start="20863" data-end="20885">procedural\r
                                                                    weather</strong>: drive clouds, rain bursts; tie\r
                                                                rain to temporary RH drop then post-rain spike.</p>\r
                                                        </li>\r
                                                        <li data-start="20966" data-end="21047">\r
                                                            <p data-start="20968" data-end="21047"><strong\r
                                                                    data-start="20968" data-end="20982">photo\r
                                                                    mode</strong>: capture steamy vistas with\r
                                                                post-process vignette and heat tint.</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <hr data-start="21049" data-end="21052" />\r
                                                    <h2 data-start="21054" data-end="21076">minimal build notes</h2>\r
                                                    <ul data-start="21078" data-end="21168">\r
                                                        <li data-start="21078" data-end="21125">\r
                                                            <p data-start="21080" data-end="21125">target <strong\r
                                                                    data-start="21087" data-end="21096">C++20</strong>\r
                                                                or <strong data-start="21100"\r
                                                                    data-end="21109">C++17</strong> (UE5 supports).</p>\r
                                                        </li>\r
                                                        <li data-start="21126" data-end="21168">\r
                                                            <p data-start="21128" data-end="21168">include module\r
                                                                references (<code data-start="21155"\r
                                                                    data-end="21166">.Build.cs</code>):</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <div\r
                                                        class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">\r
                                                        <div class="sticky top-9">&nbsp;</div>\r
                                                        <div class="overflow-y-auto p-4" dir="ltr"><code\r
                                                                class="whitespace-pre! language-csharp"><span class="hljs-comment">// MuggyRush.Build.cs</span> <span class="hljs-keyword">using</span> UnrealBuildTool; <span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">MuggyRush</span> : <span class="hljs-title">ModuleRules</span> { <span class="hljs-function"><span class="hljs-keyword">public</span></span> <span class="hljs-title">MuggyRush</span>(<span class="hljs-params">ReadOnlyTargetRules Target</span>) : <span class="hljs-title">base</span>(<span class="hljs-params">Target</span>) { PCHUsage = ModuleRules.PCHUsageMode.UseExplicitOrSharedPCHs; PublicDependencyModuleNames.AddRange(<span class="hljs-keyword">new</span> <span class="hljs-built_in">string</span>[] { <span class="hljs-string">"Core"</span>,<span class="hljs-string">"CoreUObject"</span>,<span class="hljs-string">"Engine"</span>,<span class="hljs-string">"InputCore"</span>, <span class="hljs-string">"EnhancedInput"</span>,<span class="hljs-string">"Niagara"</span>,<span class="hljs-string">"UMG"</span> }); } } </code>\r
                                                        </div>\r
                                                    </div>\r
                                                    <hr data-start="21588" data-end="21591" />\r
                                                    <h2 data-start="21593" data-end="21620">level design tips (fast)\r
                                                    </h2>\r
                                                    <ul data-start="21622" data-end="21848">\r
                                                        <li data-start="21622" data-end="21676">\r
                                                            <p data-start="21624" data-end="21676">use a <strong\r
                                                                    data-start="21630" data-end="21644">foggy\r
                                                                    HDRI</strong> sky + slightly desaturated LUT.</p>\r
                                                        </li>\r
                                                        <li data-start="21677" data-end="21729">\r
                                                            <p data-start="21679" data-end="21729">put <strong\r
                                                                    data-start="21683" data-end="21699">cool\r
                                                                    refuges</strong> every ~15&ndash;25s of sprint time.\r
                                                            </p>\r
                                                        </li>\r
                                                        <li data-start="21730" data-end="21782">\r
                                                            <p data-start="21732" data-end="21782">path choices:\r
                                                                short/hot alley vs long/cool arcade.</p>\r
                                                        </li>\r
                                                        <li data-start="21783" data-end="21848">\r
                                                            <p data-start="21785" data-end="21848">readable VFX:\r
                                                                blue-white mist for cool, orange shimmer for hot.</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    <hr data-start="21850" data-end="21853" />\r
                                                    <h2 data-start="21855" data-end="21873">quick checklist</h2>\r
                                                    <ul class="contains-task-list" data-start="21875" data-end="22177">\r
                                                        <li class="task-list-item" data-start="21875" data-end="21938">\r
                                                            <p data-start="21881" data-end="21938"><input\r
                                                                    checked="checked" disabled="disabled"\r
                                                                    type="checkbox" /> global humidity model with\r
                                                                <strong data-start="21908" data-end="21922">Heat\r
                                                                    Index</strong> &amp; <strong data-start="21925"\r
                                                                    data-end="21938">Dew Point</strong></p>\r
                                                        </li>\r
                                                        <li class="task-list-item" data-start="21939" data-end="21989">\r
                                                            <p data-start="21945" data-end="21989"><input\r
                                                                    checked="checked" disabled="disabled"\r
                                                                    type="checkbox" /> local volumes to modify\r
                                                                humidity/temperature</p>\r
                                                        </li>\r
                                                        <li class="task-list-item" data-start="21990" data-end="22047">\r
                                                            <p data-start="21996" data-end="22047"><input\r
                                                                    checked="checked" disabled="disabled"\r
                                                                    type="checkbox" /> character stamina/overheat tied\r
                                                                to muggy conditions</p>\r
                                                        </li>\r
                                                        <li class="task-list-item" data-start="22048" data-end="22113">\r
                                                            <p data-start="22054" data-end="22113"><input\r
                                                                    checked="checked" disabled="disabled"\r
                                                                    type="checkbox" /> post-process feedback via <strong\r
                                                                    data-start="22080" data-end="22113">Material\r
                                                                    Parameter Collection</strong></p>\r
                                                        </li>\r
                                                        <li class="task-list-item" data-start="22114" data-end="22149">\r
                                                            <p data-start="22120" data-end="22149"><input\r
                                                                    checked="checked" disabled="disabled"\r
                                                                    type="checkbox" /> pickups and simple objectives</p>\r
                                                        </li>\r
                                                        <li class="task-list-item" data-start="22150" data-end="22177">\r
                                                            <p data-start="22156" data-end="22177"><input\r
                                                                    checked="checked" disabled="disabled"\r
                                                                    type="checkbox" /> Enhanced Input wiring</p>\r
                                                        </li>\r
                                                    </ul>\r
                                                    \r
                </div>\r
            </div>\r
        </div>\r
    </article>\r
</body>\r
\r
</html>`,Ms=[{id:1,title:"Recipe Rush: Online Grocery Ordering Game",slug:"recipe-rush",description:`
                It's a fun text-based simulation game teaching decision-making, budgeting, and basic input/output in C++ — great for beginners.`,image:new URL("/images/grocery-game-img.jpeg",import.meta.url).href,date:"Posted on June 15, 2025 – 10:00 AM",content:Nf,customReadMore:[{title:"Fun Meets Function: Grocery Games, Tips, and Surprising Facts",excerpt:"Scenario 1: Last-Minute Dinner Party You're hosting guests tonight and plan to cook Spaghetti Marinara. You have 20 minutes to order groceries before the cutoff for...",image:new URL("/images/grocery-game-fun.jpeg",import.meta.url).href,slug:"fun-meets-function",content:Vf},{title:"Let's add a Graphical User Interface (GUI) to your Recipe Rush: Online Grocery Ordering Game",excerpt:"With SFML, your game will look like: A window showing recipe selection. Grocery items displayed with names & prices as buttons. A side panel with your current cart and budget. Clickable buttons to add",image:new URL("/images/grocery-game-gui.jpeg",import.meta.url).href,slug:"adding-gui-to-recipe-rush",content:Yf}]},{id:2,title:"Highway Driver: A Complete SFML Racing Game",slug:"highway-driver",description:"Highway Driver, you control a car speeding down a highway while avoiding incoming traffic. The longer you survive, the higher your score.",image:new URL("/images/highway-driver.jpeg",import.meta.url).href,date:"Posted on June 16, 2025 – 3:30 PM",content:qf,customReadMore:[{title:"Speed, Skill & Code: The Making of a Highway Driver Game",excerpt:`Ever wondered how the simple thrill of dodging traffic in a game mirrors real-life driving? In this deep dive, we explore Highway Driver—a deceptively simple game that captures the chaos, strategy, and reflexes of the open road. From real-world driving psychology to game design secrets, we’ll break down:
        ✅ How highway survival games train your brain (faster reactions, better focus)
        ✅ Clever game mechanics inspired by actual driving challenges (lane-switching, speed fatigue, tunnel vision)
      ✅ Behind-the-scenes coding & design choices (why obstacles spawn just right)
      ✅ Fun upgrades to turn a basic prototype into a full-fledged game (weather, AI traffic, boss chases!)

      Whether you're a gamer, developer, or just love the open road, this post shifts gears between entertainment, education, and pure coding adrenaline. Ready to hit the highway? Let’s go! 🚗💨`,slug:"highway-driver-making",content:$f,image:new URL("/images/highway-driver-addition.jpeg",import.meta.url).href},{title:"Adding graphics to your game",excerpt:"Your Highway Driver game already has a basic graphical UI using SFML rectangles and text, but now let’s talk about enhancing the GUI (Graphical User Interface) with visual polish, usability, and menus — just like a complete arcade-style game.",slug:"highway-driver-gui",image:new URL("/images/highway-driver-gui.jpeg",import.meta.url).href,content:Xf}]},{id:3,title:"Car Parking Master",slug:"car-parking-master",description:"you control a car in a crowded parking lot. Your goal is to navigate through obstacles and park in the designated spot without collisions.",image:new URL("/images/car-parking.jpeg",import.meta.url).href,date:"Posted on June 17, 2025 – 8:00 AM",content:Kf},{id:4,title:"Farm Frenzy: Harvest Grow",slug:"farm-frenzy",description:`👨‍🌾 You're a farmer who must:
    🌱 Plant crops
  🐄 Feed animals
  🧺 Harvest and sell products
  🌾 Expand your farm
  💡 All while managing time, money, and resources wisely.`,image:new URL("/images/farm-frenzy.jpeg",import.meta.url).href,date:"Posted on June 17, 2025 – 8:00 AM",content:Zf,customReadMore:[{title:"Building Farm Frenzy: A GUI-Based Farm Game in C++ with SFML",slug:"farm-frenzy-with-gui",excerpt:`What if you could bring the joy of farming to your screen using just C++ and a bit of graphics? Welcome to
        Farm Frenzy, a simple but engaging GUI-based farm simulation game developed in C++ using
            the SFML (Simple and Fast Multimedia Library)`,image:new URL("/images/farm-frenzy-gui.jpeg",import.meta.url).href,content:Qf}]},{title:"🥗🎮 Buffet Rush – A C++ Game Based on a Buffet Experience",slug:"buffet-rush",description:'"Buffet Rush" is a fun, text-based or SFML-powered graphical C++ game where the player acts as a customer in a buffet. The goal is to build the perfect meal tray under time and nutritional constraints—while also managing cost, calories, and customer satisfaction.',image:new URL("/images/buffet.jpeg",import.meta.url).href,content:Jf,customReadMore:[{title:"🥗 Buffet Rush: A Tasty Game in C++ with GUI (SFML)",slug:"buffet-rush-with-gui",description:"Have you ever imagined what a buffet would look like if it turned into a fast-paced game? Welcome to Buffet Rush, a light-hearted yet educational C++ game powered by SFML, where you dodge unhealthy snacks and rack up your nutrition score!",image:new URL("/images/buffet-gui.jpeg",import.meta.url).href,content:nm}]},{title:"🚙 Jeep Adventure Game in C++ (with GUI + Weather Effects)",slug:"jeep-adventure-game",description:"This is a graphical C++ game using SFML, where you control a Jeep driving on a rainy road. Your goal is to avoid falling obstacles, stay visible in the rain, and survive long enough to earn points.",image:new URL("/images/jeep.jpeg",import.meta.url).href,content:am},{title:"Echoes of Gaia",slug:"echoes-of-gaia",description:"A next-gen C++ game demo using real-time ray tracing, AI NPCs, and physics simulation.",image:new URL("/images/echo.jpeg",import.meta.url).href,content:tm},{title:"🌧️ Rainfall Reclaimer: EcoFrontline",slug:"rainfall-reclaimer",description:"Set in a near-future world suffering from extreme rainfall, acid rain, and rising floods, you play as an AI-assisted meteorological operative using drones, robots, and water recycling stations to monitor, mitigate, and survive climate chaos.",image:new URL("/images/rainfall-reclamation.jpeg",import.meta.url).href,content:sm},{title:"RainRise: Waterkeepers of Tomorrow",slug:"rain-rise",description:'"RainRise" is a futuristic open-world environmental simulation game where players act as Rainwater Engineers using advanced drones, AI sensors, water-routing bots, and bio-tech filtration systems to conserve rainwater, purify it, and sustain eco-settlements.',image:new URL("/images/rain-rise.jpg",import.meta.url).href,content:em,customReadMore:[{title:"🌱 Feature: Vertical Garden & Hydroponics System",slug:"vertical-garden-and-hydroponics-system",excerpt:"Let’s now build the Vertical Garden & Hydroponics System using Unreal Engine 5 logic and code structure (C++ + Blueprint style), tied to rainwater conservation gameplay.",content:rm,image:new URL("/images/vertical-garden.jpg",import.meta.url).href}]},{title:"Picnic Panic: Nature Adventure",slug:"picnic-panic",description:"A vibrant 2.5D or 3D picnic simulation-adventure game where players must set up and protect their picnic in a dynamic environment, facing challenges like weather changes, animals, time constraints, and item collection.",image:new URL("/images/picnic-panic.jpeg",import.meta.url).href,content:om,customReadMore:[{title:`🎮 Picnic Panic: Nature Adventure
        A Modern Seasonal Picnic Game in Unreal Engine 5 using C++ Part 1`,slug:"picnic-panic-part1",excerpt:`Imagine setting up your picnic on a sunny spring day… until squirrels steal your food, bees buzz around, or snow suddenly starts falling in winter mode.
        This guide includes full C++ classes, explanations, and modular game logic that you can expand on.`,image:new URL("/images/picnic-panic-1.jpeg",import.meta.url).href,content:im}]},{title:"Rainfall Rescue – Building a Fun SFML C++ Game",slug:"rainfall-rescue",description:"Have you ever wished you could control the rain? In this exciting C++ project, we’re doing just that – building Rainfall Rescue, a 2D arcade-style game where players catch pure rain and avoid acid drops.",image:new URL("/images/rainfall-rescue.jpeg",import.meta.url).href,content:lm},{title:"FloodGuard (UE5 C++): Rescue Boat vs. Rising Waters",slug:"floodguard",description:`Dynamic flood level that rises over time (configurable curve/speed).

A physics-driven rescue boat with simplified, performant buoyancy over a flat water plane.

Pickups (survivors) scattered on rooftops; collect them for score.

Basic HUD via on-screen debug messages (easy to swap for UMG later).

Clean, modular C++ classes: RescueBoatPawn, FloodManager, SurvivorPickup.`,image:new URL("/images/flood.jpeg",import.meta.url).href,content:pm},{title:"“Muggy Rush”",slug:"muggy-rush",description:"you’re a field technician sprinting through a monsoon-season city. the catch: heat + humidity make you tire quickly. you must manage stamina and body temperature by ducking into cool zones (AC vents, mist stations, shaded alleys) while collecting parts to restart dehumidifier towers before the city fogs out.",image:new URL("/images/muggyrush.jpeg",import.meta.url).href,content:dm}],cm={class:"text-white px-4 py-12"},um={class:"max-w-7xl mx-auto"},hm={class:"relative overflow-hidden"},fm=["data-aos-delay"],mm={class:"relative"},gm=["src"],ym={class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end transition-all duration-300 group-hover:backdrop-blur-sm"},km={class:"text-lg text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300"},bm={class:"p-4"},vm={class:"text-xl font-semibold mb-2"},wm={class:"text-xs text-gray-400"},xm={__name:"Slider",setup(a){const n=Ha(Ms);function t(){const u=window.innerWidth;return u<640?1:u<1024?2:3}const r=Ha(0),e=Ha(t()),s=()=>{e.value=t(),r.value=0},o=Xn(()=>n.value.slice(r.value,r.value+e.value)),i=Ha(null),l=u=>{Zp.fromTo(i.value,{x:u==="next"?300:-300,opacity:0},{x:0,opacity:1,duration:.5,ease:"power2.out"})},c=()=>{r.value+e.value>=n.value.length?r.value=0:r.value+=e.value,l("next")},d=()=>{r.value-e.value<0?r.value=Math.max(n.value.length-e.value,0):r.value-=e.value,l("prev")};return Es(()=>{Zl.init({once:!0}),window.addEventListener("resize",s)}),Hr(()=>{window.removeEventListener("resize",s)}),(u,f)=>(Fn(),Bn("section",cm,[Z("div",um,[f[0]||(f[0]=Z("h2",{class:"text-3xl font-bold mb-8","data-aos":"fade-up"}," Latest Project Walkthroughs ",-1)),Z("div",hm,[Z("div",{ref_key:"slider",ref:i,class:"flex transition-all duration-500 space-x-6 w-full"},[(Fn(!0),Bn(Un,null,nr(o.value,(p,m)=>(Fn(),Bn("div",{key:p.id,class:"min-w-[300px] md:min-w-[350px] bg-gray-800 rounded-2xl shadow-xl overflow-hidden group relative","data-aos":"fade-up","data-aos-delay":100*m},[xn(va(Kr),{to:`/blogs/${p.slug}`},{default:Dt(()=>[Z("div",mm,[Z("img",{src:p.image,alt:"Project Image",class:"w-full h-68 object-cover transition duration-300 group-hover:blur-sm"},null,8,gm),Z("div",ym,[Z("p",km,Ga(p.description),1)])])]),_:2},1032,["to"]),Z("div",bm,[Z("h3",vm,Ga(p.title),1),Z("span",wm,Ga(p.date),1)])],8,fm))),128))],512),Z("button",{onClick:d,class:"absolute top-1/2 -translate-y-10 left-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ⬅ "),Z("button",{onClick:c,class:"absolute top-1/2 -translate-y-1/2 right-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ➡ ")])])]))}},jm="/images/logo.jpg",_m=(a,n)=>{const t=a.__vccOpts||a;for(const[r,e]of n)t[r]=e;return t},Sm={},Cm={class:"flex items-center justify-between"},Tm={class:"w-20 relative left-5 sm:left-5 sm:w-32"},Pm={class:"flex justify-between w-36 sm:w-42 relative right-6 sm:right-12"};function Am(a,n){const t=ac("router-link");return Fn(),Bn("header",null,[Z("nav",Cm,[Z("div",Tm,[xn(t,{to:"/"},{default:Dt(()=>n[0]||(n[0]=[Z("img",{src:jm,class:"cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out",alt:"Logo"},null,-1)])),_:1,__:[0]})]),Z("div",Pm,[xn(t,{to:"/about-cpp-playgrounds"},{default:Dt(()=>n[1]||(n[1]=[Z("p",{class:"cursor-pointer"},"About Us",-1)])),_:1,__:[1]}),xn(t,{to:"/contact-cpp-playgrounds"},{default:Dt(()=>n[2]||(n[2]=[Z("p",{class:"cursor-pointer"},"Contact",-1)])),_:1,__:[2]})])])])}const Te=_m(Sm,[["render",Am]]),Mm={class:"flex sm:flex-row flex-col justify-around items-center w-full min-h-screen p-4 space-y-6 md:space-y-0 mt-20 md:mt-36"},Rm={__name:"Banner",setup(a){const n=Ha(null);let t,r,e;const s=["https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png","https://em-content.zobj.net/thumbs/240/apple/354/red-heart_2764-fe0f.png","https://em-content.zobj.net/thumbs/240/apple/354/video-game_1f3ae.png","https://em-content.zobj.net/thumbs/240/apple/354/keyboard_2328-fe0f.png","https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg","https://em-content.zobj.net/thumbs/240/apple/354/smiling-face-with-sunglasses_1f60e.png","https://em-content.zobj.net/thumbs/240/apple/354/money-bag_1f4b0.png","https://em-content.zobj.net/thumbs/240/apple/354/party-popper_1f389.png","https://em-content.zobj.net/thumbs/240/apple/354/technologist_1f9d1-200d-1f4bb.png"];function o(i,l,c){return ua.Bodies.rectangle(i,l,40,40,{render:{sprite:{texture:c,xScale:.4,yScale:.4}}})}return Es(()=>{t=ua.Engine.create();const i=t.world;r=ua.Render.create({canvas:n.value,engine:t,options:{width:window.innerWidth,height:window.innerHeight,background:"transparent",wireframes:!1}}),ua.Render.run(r),e=ua.Runner.create(),ua.Runner.run(e,t);const l=ua.Bodies.rectangle(window.innerWidth/2,window.innerHeight+20,window.innerWidth,40,{isStatic:!0,render:{fillStyle:"#333"}});ua.World.add(i,l);const c=setInterval(()=>{const u=Math.random()*window.innerWidth,f=-50,p=Math.floor(Math.random()*s.length),m=o(u,f,s[p]);ua.World.add(i,m)},50),d=()=>{ua.Render.lookAt(r,{min:{x:0,y:0},max:{x:window.innerWidth,y:window.innerHeight}})};window.addEventListener("resize",d),Wr(()=>{clearInterval(c),window.removeEventListener("resize",d),ua.Render.stop(r),ua.Runner.stop(e)})}),(i,l)=>(Fn(),Bn(Un,null,[xn(Te),l[1]||(l[1]=Z("h1",{class:"font-serif text-center text-2xl sm:text-3xl mt-6 sm:mt-1","data-aos":"zoom-out","data-aos-delay":"100"}," CPP Playgrounds ",-1)),xn(Ch),Z("div",Mm,[Z("canvas",{ref_key:"canvasRef",ref:n,class:"w-1/2 sm:w-1/2 md:w-1/2 h-[300px] md:h-[60vh] bg-black"},null,512),l[0]||(l[0]=Z("div",{class:"w-full sm:w-1/3 md:w-1/3 text-xl md:text-2xl text-white","data-aos":"fade-left","data-aos-delay":"250"},[Z("br"),Z("p",null,"Unlock your game development potential with our comprehensive C++ guides and step-by-step walkthroughs. Whether you're a beginner or looking to refine your skills, our expertly crafted tutorials cover everything from graphics and game loops to physics engines and AI logic. Learn how to build powerful, high-performance games using C++, the industry-standard language behind many of today’s biggest titles. With real-world examples, source code snippets, and hands-on projects, we make it easy for you to master the art of game development. Start building your dream game today — no experience needed! ")],-1))]),xn(xm),l[2]||(l[2]=Z("div",{class:"relative z-10 text-center mt-12 mb-3 text-sm"}," © 2025 Cpp Playgrounds. All rights reserved. ",-1))],64))}},Em={key:0,class:""},Im={class:"text-center text-xl sm:text-3xl mt-8 px-4"},Fm={class:"mt-10 w-1/2 mx-auto px-4 sm:px-6 lg:px-8"},zm=["src"],Om=["innerHTML"],Dm={key:1,class:"text-center py-24 text-2xl"},Bm={key:2,class:"mt-20 border-t border-white/20 pt-10"},Lm={class:"space-y-8 max-w-3xl mx-auto px-4"},Um=["onClick"],Gm={class:"flex flex-col sm:flex-row gap-4 items-center"},Wm=["src"],Hm={class:"text-lg font-bold text-white"},Nm={class:"text-sm text-white/80 mt-1 line-clamp-2"},Vm={class:"mt-20 border-t border-white/20 pt-10"},Ym={class:"space-y-8 max-w-3xl mx-auto px-4"},qm=["onClick"],$m={class:"flex flex-col sm:flex-row gap-4 items-center"},Xm=["src"],Km={class:"text-lg font-bold text-white"},Zm={class:"text-sm text-white/80 mt-1"},Qm={__name:"BlogPage",setup(a){const n=vh(),t=bh(),r=Xn(()=>n.params.slug);function e(l){var c,d;for(const u of Ms){if(u.slug===l)return u;const f=(c=u.related)==null?void 0:c.find(m=>m.slug===l);if(f)return f;const p=(d=u.customReadMore)==null?void 0:d.find(m=>m.slug===l);if(p)return p}return null}const s=Xn(()=>e(r.value)),o=Ha(null);Es(()=>{o.value&&o.value.addEventListener("click",l=>{const c=l.target.closest("[data-router-link]");if(c){l.preventDefault();const d=c.getAttribute("data-router-link");d&&t.push(d)}})});const i=Xn(()=>Ms.filter(l=>{var c;return l.slug!==((c=s.value)==null?void 0:c.slug)}).slice(0,3));return(l,c)=>{var d,u;return Fn(),Bn(Un,null,[xn(Te),s.value?(Fn(),Bn("div",Em,[Z("h1",Im,Ga(s.value.title),1),Z("div",Fm,[Z("img",{src:s.value.image,alt:"blog-img",class:"mt-4 w-full h-auto rounded-lg shadow-lg",style:{"max-height":"400px"}},null,8,zm)]),Z("div",{class:"text-lg w-1/2 mx-auto",innerHTML:s.value.content,ref_key:"htmlContainer",ref:o},null,8,Om)])):(Fn(),Bn("div",Dm," Blog not found. ")),(u=(d=s.value)==null?void 0:d.customReadMore)!=null&&u.length?(Fn(),Bn("div",Bm,[c[1]||(c[1]=Z("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"You Might Also Like",-1)),Z("div",Lm,[(Fn(!0),Bn(Un,null,nr(s.value.customReadMore,f=>(Fn(),Bn("div",{key:f.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:p=>va(t).push({name:"BlogPage",params:{slug:f.slug}})},[Z("div",Gm,[Z("img",{src:f.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Wm),Z("div",null,[Z("h3",Hm,Ga(f.title),1),Z("p",Nm,Ga(f.excerpt),1),c[0]||(c[0]=Z("button",{class:"mt-2 px-3 py-1 bg-indigo-600 text-sm text-white rounded hover:bg-indigo-700"}," Read More → ",-1))])])],8,Um))),128))])])):zc("",!0),Z("div",Vm,[c[2]||(c[2]=Z("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"Read More",-1)),Z("div",Ym,[(Fn(!0),Bn(Un,null,nr(i.value,f=>(Fn(),Bn("div",{key:f.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:p=>va(t).push({name:"BlogPage",params:{slug:f.slug}})},[Z("div",$m,[Z("img",{src:f.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Xm),Z("div",null,[Z("h3",Km,Ga(f.title),1),Z("p",Zm,Ga(f.excerpt),1)])])],8,qm))),128))])])],64)}}};var Xs={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var Jm=Xs.exports,Mi;function ng(){return Mi||(Mi=1,function(a,n){(function(t,r){a.exports=r()})(Jm,function(){var t={};t.version="0.2.0";var r=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(m){var h,g;for(h in m)g=m[h],g!==void 0&&m.hasOwnProperty(h)&&(r[h]=g);return this},t.status=null,t.set=function(m){var h=t.isStarted();m=e(m,r.minimum,1),t.status=m===1?null:m;var g=t.render(!h),k=g.querySelector(r.barSelector),v=r.speed,j=r.easing;return g.offsetWidth,i(function(_){r.positionUsing===""&&(r.positionUsing=t.getPositioningCSS()),l(k,o(m,v,j)),m===1?(l(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){l(g,{transition:"all "+v+"ms linear",opacity:0}),setTimeout(function(){t.remove(),_()},v)},v)):setTimeout(_,v)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var m=function(){setTimeout(function(){t.status&&(t.trickle(),m())},r.trickleSpeed)};return r.trickle&&m(),this},t.done=function(m){return!m&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(m){var h=t.status;return h?(typeof m!="number"&&(m=(1-h)*e(Math.random()*h,.1,.95)),h=e(h+m,0,.994),t.set(h)):t.start()},t.trickle=function(){return t.inc(Math.random()*r.trickleRate)},function(){var m=0,h=0;t.promise=function(g){return!g||g.state()==="resolved"?this:(h===0&&t.start(),m++,h++,g.always(function(){h--,h===0?(m=0,t.done()):t.set((m-h)/m)}),this)}}(),t.render=function(m){if(t.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var h=document.createElement("div");h.id="nprogress",h.innerHTML=r.template;var g=h.querySelector(r.barSelector),k=m?"-100":s(t.status||0),v=document.querySelector(r.parent),j;return l(g,{transition:"all 0 linear",transform:"translate3d("+k+"%,0,0)"}),r.showSpinner||(j=h.querySelector(r.spinnerSelector),j&&p(j)),v!=document.body&&d(v,"nprogress-custom-parent"),v.appendChild(h),h},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(r.parent),"nprogress-custom-parent");var m=document.getElementById("nprogress");m&&p(m)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var m=document.body.style,h="WebkitTransform"in m?"Webkit":"MozTransform"in m?"Moz":"msTransform"in m?"ms":"OTransform"in m?"O":"";return h+"Perspective"in m?"translate3d":h+"Transform"in m?"translate":"margin"};function e(m,h,g){return m<h?h:m>g?g:m}function s(m){return(-1+m)*100}function o(m,h,g){var k;return r.positionUsing==="translate3d"?k={transform:"translate3d("+s(m)+"%,0,0)"}:r.positionUsing==="translate"?k={transform:"translate("+s(m)+"%,0)"}:k={"margin-left":s(m)+"%"},k.transition="all "+h+"ms "+g,k}var i=function(){var m=[];function h(){var g=m.shift();g&&g(h)}return function(g){m.push(g),m.length==1&&h()}}(),l=function(){var m=["Webkit","O","Moz","ms"],h={};function g(_){return _.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(y,w){return w.toUpperCase()})}function k(_){var y=document.body.style;if(_ in y)return _;for(var w=m.length,x=_.charAt(0).toUpperCase()+_.slice(1),b;w--;)if(b=m[w]+x,b in y)return b;return _}function v(_){return _=g(_),h[_]||(h[_]=k(_))}function j(_,y,w){y=v(y),_.style[y]=w}return function(_,y){var w=arguments,x,b;if(w.length==2)for(x in y)b=y[x],b!==void 0&&y.hasOwnProperty(x)&&j(_,x,b);else j(_,w[1],w[2])}}();function c(m,h){var g=typeof m=="string"?m:f(m);return g.indexOf(" "+h+" ")>=0}function d(m,h){var g=f(m),k=g+h;c(g,h)||(m.className=k.substring(1))}function u(m,h){var g=f(m),k;c(m,h)&&(k=g.replace(" "+h+" "," "),m.className=k.substring(1,k.length-1))}function f(m){return(" "+(m.className||"")+" ").replace(/\s+/gi," ")}function p(m){m&&m.parentNode&&m.parentNode.removeChild(m)}return t})}(Xs)),Xs.exports}var ag=ng();const go=Kl(ag),tg="/images/about_us.jpeg",sg={class:"max-w-4xl mx-auto px-6 py-12 md:py-20"},eg={class:"space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"},rg={class:"text-center mt-16 px-6 py-8 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-xl border border-gray-200 dark:border-gray-700"},og={__name:"AboutUs",setup(a){return(n,t)=>(Fn(),Bn(Un,null,[xn(Te),Z("div",sg,[t[4]||(t[4]=rr('<div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 mb-6"> 🎮 From Player to Creator: My C++ Game Dev Journey </h1><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"></div></div><div class="mb-16 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500"><img src="'+tg+'" alt="Game development workspace" class="w-full h-auto object-cover"></div>',2)),Z("div",eg,[t[3]||(t[3]=rr('<p class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500"><span class="text-3xl mr-2">👾</span> I still remember the first time a video game truly captivated me. It wasn&#39;t just the immersive worlds or thrilling gameplay—I became obsessed with understanding <em class="font-semibold text-blue-600 dark:text-blue-400">how</em> these digital magic tricks worked. As a wide-eyed teenager, I&#39;d tear through game files, stumbling upon mysterious <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.cpp</code> extensions that might as well have been ancient hieroglyphics. </p><p class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500"><span class="text-3xl mr-2">🔥</span> My early coding attempts were brutal. I&#39;d stare at walls of C++ syntax—templates that looked like algebraic nightmares, pointer errors that crashed my screen, and linker errors that haunted my dreams. But every small breakthrough felt like leveling up in real life. That first moving sprite? <span class="font-bold text-amber-600 dark:text-amber-400">Pure euphoria</span>. My initial collision detection that actually worked? <span class="font-bold text-amber-600 dark:text-amber-400">Better than any boss fight</span>. </p><div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner"><h3 class="text-2xl font-bold mb-4 flex items-center"><span class="text-3xl mr-3">💡</span> Through years of trial and error, I discovered: </h3><ul class="space-y-4 pl-2"><li class="flex items-start"><span class="text-amber-500 mr-3">⚙️</span><span><strong class="text-gray-900 dark:text-white">Game code isn&#39;t about perfection</strong>—it&#39;s about systems talking to each other</span></li><li class="flex items-start"><span class="text-blue-500 mr-3">🧠</span><span><strong class="text-gray-900 dark:text-white">The best learning happens when you&#39;re fixing broken things</strong>, not just copying working examples</span></li><li class="flex items-start"><span class="text-purple-500 mr-3">🚀</span><span><strong class="text-gray-900 dark:text-white">C++&#39;s complexity is its superpower</strong>—once you tame it, you can bend hardware to your will</span></li></ul></div><p class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500"><span class="text-3xl mr-2">✨</span> This site is the mentor I wish I&#39;d had. Every tutorial solves a problem I struggled with—from &quot;why does my character clip through walls?&quot; to &quot;how do I make NPCs <em>think</em>?&quot; The code snippets are battle-tested, the explanations assume zero knowledge (but respect your intelligence), and the projects build toward actual portfolio pieces. </p>',4)),Z("div",rg,[t[1]||(t[1]=Z("h3",{class:"text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center"},[Z("span",{class:"mr-3"},"🎯"),El(" Ready to Level Up? ")],-1)),t[2]||(t[2]=Z("p",{class:"text-xl mb-6"}," Whether you're modding your first game or architecting an engine from scratch, I'm here to help you skip the years of frustration. ",-1)),xn(va(Kr),{to:"/"},{default:Dt(()=>t[0]||(t[0]=[Z("button",{class:"px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"}," Start Learning Now → ",-1)])),_:1,__:[0]})])])])],64))}},ig={__name:"ContactUs",setup(a){return(n,t)=>(Fn(),Bn(Un,null,[xn(Te),t[0]||(t[0]=rr('<div class="py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"><span class="inline-block mr-3">👋</span> Let&#39;s Connect! </h1><p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"> Whether you&#39;re stuck on a bug, want to suggest improvements, or just geek out about game dev </p><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full mt-6"></div></div><div class="grid md:grid-cols-2 gap-8"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4"><span class="text-2xl">📬</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Shoot Us a Message</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Found a bug in our code? Need advice on your project? Want mentorship or course recommendations? </p><div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500"><p class="font-mono text-lg break-all text-blue-600 dark:text-blue-300"> programmingninja@proton.me </p><p class="text-sm text-gray-500 dark:text-gray-400 mt-2"> (We typically reply within 24 hours) </p></div><p class="text-gray-600 dark:text-gray-300"><span class="font-bold">Pro Tip:</span> Include &quot;[GameDev]&quot; in your subject line to skip the queue! </p></div></div></div><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4"><span class="text-2xl">👨‍💻</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Join Community</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Connect with other game developers, share projects, and get real-time help: </p><div class="space-y-4"><a href="https://cppalliance.org/slack/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">💬</span><div><h3 class="font-bold">C++ Slack/Discord</h3><p class="text-sm text-gray-500 dark:text-gray-400">Live chat with developers. Best for real-time help</p></div></a><a href="https://www.reddit.com/r/cpp/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">🐦</span><div><h3 class="font-bold">r/cpp (Reddit)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Best for language updates, technical discussions</p></div></a><a href="https://stackoverflow.com/questions/tagged/c%252b%252b" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">📱</span><div><h3 class="font-bold">Stack Overflow (C++ Tag)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Code-specific questions</p></div></a></div></div></div></div></div><div class="mt-16 text-center"><p class="text-white text-md font-extrabold"><span class="inline-block mr-2 text-xl font-extrabold">⚠️</span> Warning: Contacting us about game dev may result in spontaneous coding sessions, excessive coffee consumption, and unexpected friendships. <span class="inline-block ml-2">☕</span></p></div></div></div>',1))],64))}};go.configure({showSpinner:!1});const Pe=yh({history:$u("/"),scrollBehavior(a,n,t){return{top:0}},routes:[{path:"/",component:Rm},{path:"/about-cpp-playgrounds",name:"AboutUs",component:og,meta:{title:"About Us | cpp-playgrounds"}},{path:"/contact-cpp-playgrounds",name:"ContactUs",component:ig,meta:{title:"Contact US | cpp-playgrounds"}},{path:"/blogs/:slug",name:"BlogPage",component:Qm,meta:{title:""}}],scrollBehavior(){return{top:0}}});Pe.beforeEach((a,n,t)=>{go.start(),t()});Pe.afterEach(()=>{go.done()});Pe.afterEach((a,n)=>{Lr(()=>{var e;let t="cpp-playgrounds";const r=a.matched.slice().reverse().find(s=>s.meta&&s.meta.title);if(r&&r.meta.title&&(t=r.meta.title),a.name==="BlogPage"){const s=Ms.find(o=>o.slug===a.params.slug);if(s)t=`${s.title} | cpp-playgrounds`;else for(const o of Ms){const i=(e=o.customReadMore)==null?void 0:e.find(l=>l.slug===a.params.slug);if(i){t=`${i.title} | cpp-playgrounds`;break}}}document.title=t,typeof gtag=="function"?gtag("event","page_view",{page_title:t,page_location:window.location.href,page_path:a.fullPath}):console.warn("gtag not defined")})});Zl.init();const Qp=mu(wh);Qp.use(Pe);Qp.mount("#app");
