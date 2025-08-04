(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cr(t){const n=Object.create(null);for(const a of t.split(","))n[a]=1;return a=>a in n}const xn={},za=[],At=()=>{},Jd=()=>!1,ce=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tr=t=>t.startsWith("onUpdate:"),qn=Object.assign,Pr=(t,n)=>{const a=t.indexOf(n);a>-1&&t.splice(a,1)},np=Object.prototype.hasOwnProperty,kn=(t,n)=>np.call(t,n),en=Array.isArray,Ia=t=>ue(t)==="[object Map]",Ri=t=>ue(t)==="[object Set]",rn=t=>typeof t=="function",Rn=t=>typeof t=="string",pa=t=>typeof t=="symbol",Sn=t=>t!==null&&typeof t=="object",Ai=t=>(Sn(t)||rn(t))&&rn(t.then)&&rn(t.catch),zi=Object.prototype.toString,ue=t=>zi.call(t),tp=t=>ue(t).slice(8,-1),Ii=t=>ue(t)==="[object Object]",Er=t=>Rn(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rs=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fe=t=>{const n=Object.create(null);return a=>n[a]||(n[a]=t(a))},ap=/-(\w)/g,kt=fe(t=>t.replace(ap,(n,a)=>a?a.toUpperCase():"")),sp=/\B([A-Z])/g,ja=fe(t=>t.replace(sp,"-$1").toLowerCase()),he=fe(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ee=fe(t=>t?`on${he(t)}`:""),sa=(t,n)=>!Object.is(t,n),Me=(t,...n)=>{for(let a=0;a<t.length;a++)t[a](...n)},Fi=(t,n,a,r=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:r,value:a})},ep=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let vo;const ge=()=>vo||(vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mr(t){if(en(t)){const n={};for(let a=0;a<t.length;a++){const r=t[a],e=Rn(r)?lp(r):Mr(r);if(e)for(const s in e)n[s]=e[s]}return n}else if(Rn(t)||Sn(t))return t}const rp=/;(?![^(]*\))/g,op=/:([^]+)/,ip=/\/\*[^]*?\*\//g;function lp(t){const n={};return t.replace(ip,"").split(rp).forEach(a=>{if(a){const r=a.split(op);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Rr(t){let n="";if(Rn(t))n=t;else if(en(t))for(let a=0;a<t.length;a++){const r=Rr(t[a]);r&&(n+=r+" ")}else if(Sn(t))for(const a in t)t[a]&&(n+=a+" ");return n.trim()}const dp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pp=Cr(dp);function Oi(t){return!!t||t===""}const Li=t=>!!(t&&t.__v_isRef===!0),Gt=t=>Rn(t)?t:t==null?"":en(t)||Sn(t)&&(t.toString===zi||!rn(t.toString))?Li(t)?Gt(t.value):JSON.stringify(t,Di,2):String(t),Di=(t,n)=>Li(n)?Di(t,n.value):Ia(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((a,[r,e],s)=>(a[Re(r,s)+" =>"]=e,a),{})}:Ri(n)?{[`Set(${n.size})`]:[...n.values()].map(a=>Re(a))}:pa(n)?Re(n):Sn(n)&&!en(n)&&!Ii(n)?String(n):n,Re=(t,n="")=>{var a;return pa(t)?`Symbol(${(a=t.description)!=null?a:n})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zn;class cp{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zn,!n&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,a;if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].pause();for(n=0,a=this.effects.length;n<a;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,a;if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].resume();for(n=0,a=this.effects.length;n<a;n++)this.effects[n].resume()}}run(n){if(this._active){const a=Zn;try{return Zn=this,n()}finally{Zn=a}}}on(){++this._on===1&&(this.prevScope=Zn,Zn=this)}off(){this._on>0&&--this._on===0&&(Zn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let a,r;for(a=0,r=this.effects.length;a<r;a++)this.effects[a].stop();for(this.effects.length=0,a=0,r=this.cleanups.length;a<r;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,r=this.scopes.length;a<r;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function up(){return Zn}let bn;const Ae=new WeakSet;class Bi{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zn&&Zn.active&&Zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ae.has(this)&&(Ae.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bo(this),Wi(this);const n=bn,a=vt;bn=this,vt=!0;try{return this.fn()}finally{Ni(this),bn=n,vt=a,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ir(n);this.deps=this.depsTail=void 0,bo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ae.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xe(this)&&this.run()}get dirty(){return Xe(this)}}let Ui=0,os,is;function Gi(t,n=!1){if(t.flags|=8,n){t.next=is,is=t;return}t.next=os,os=t}function Ar(){Ui++}function zr(){if(--Ui>0)return;if(is){let n=is;for(is=void 0;n;){const a=n.next;n.next=void 0,n.flags&=-9,n=a}}let t;for(;os;){let n=os;for(os=void 0;n;){const a=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){t||(t=r)}n=a}}if(t)throw t}function Wi(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ni(t){let n,a=t.depsTail,r=a;for(;r;){const e=r.prevDep;r.version===-1?(r===a&&(a=e),Ir(r),fp(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}t.deps=n,t.depsTail=a}function Xe(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Vi(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function Vi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ms)||(t.globalVersion=ms,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Xe(t))))return;t.flags|=2;const n=t.dep,a=bn,r=vt;bn=t,vt=!0;try{Wi(t);const e=t.fn(t._value);(n.version===0||sa(e,t._value))&&(t.flags|=128,t._value=e,n.version++)}catch(e){throw n.version++,e}finally{bn=a,vt=r,Ni(t),t.flags&=-3}}function Ir(t,n=!1){const{dep:a,prevSub:r,nextSub:e}=t;if(r&&(r.nextSub=e,t.prevSub=void 0),e&&(e.prevSub=r,t.nextSub=void 0),a.subs===t&&(a.subs=r,!r&&a.computed)){a.computed.flags&=-5;for(let s=a.computed.deps;s;s=s.nextDep)Ir(s,!0)}!n&&!--a.sc&&a.map&&a.map.delete(a.key)}function fp(t){const{prevDep:n,nextDep:a}=t;n&&(n.nextDep=a,t.prevDep=void 0),a&&(a.prevDep=n,t.nextDep=void 0)}let vt=!0;const Hi=[];function Vt(){Hi.push(vt),vt=!1}function Ht(){const t=Hi.pop();vt=t===void 0?!0:t}function bo(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const a=bn;bn=void 0;try{n()}finally{bn=a}}}let ms=0;class hp{constructor(n,a){this.sub=n,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!bn||!vt||bn===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==bn)a=this.activeLink=new hp(bn,this),bn.deps?(a.prevDep=bn.depsTail,bn.depsTail.nextDep=a,bn.depsTail=a):bn.deps=bn.depsTail=a,qi(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const r=a.nextDep;r.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=r),a.prevDep=bn.depsTail,a.nextDep=void 0,bn.depsTail.nextDep=a,bn.depsTail=a,bn.deps===a&&(bn.deps=r)}return a}trigger(n){this.version++,ms++,this.notify(n)}notify(n){Ar();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{zr()}}}function qi(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)qi(r)}const a=t.dep.subs;a!==t&&(t.prevSub=a,a&&(a.nextSub=t)),t.dep.subs=t}}const Ze=new WeakMap,va=Symbol(""),Qe=Symbol(""),ks=Symbol("");function Bn(t,n,a){if(vt&&bn){let r=Ze.get(t);r||Ze.set(t,r=new Map);let e=r.get(a);e||(r.set(a,e=new Fr),e.map=r,e.key=a),e.track()}}function Wt(t,n,a,r,e,s){const o=Ze.get(t);if(!o){ms++;return}const i=l=>{l&&l.trigger()};if(Ar(),n==="clear")o.forEach(i);else{const l=en(t),c=l&&Er(a);if(l&&a==="length"){const p=Number(r);o.forEach((u,h)=>{(h==="length"||h===ks||!pa(h)&&h>=p)&&i(u)})}else switch((a!==void 0||o.has(void 0))&&i(o.get(a)),c&&i(o.get(ks)),n){case"add":l?c&&i(o.get("length")):(i(o.get(va)),Ia(t)&&i(o.get(Qe)));break;case"delete":l||(i(o.get(va)),Ia(t)&&i(o.get(Qe)));break;case"set":Ia(t)&&i(o.get(va));break}}zr()}function Ta(t){const n=mn(t);return n===t?n:(Bn(n,"iterate",ks),mt(t)?n:n.map(On))}function me(t){return Bn(t=mn(t),"iterate",ks),t}const gp={__proto__:null,[Symbol.iterator](){return ze(this,Symbol.iterator,On)},concat(...t){return Ta(this).concat(...t.map(n=>en(n)?Ta(n):n))},entries(){return ze(this,"entries",t=>(t[1]=On(t[1]),t))},every(t,n){return Ot(this,"every",t,n,void 0,arguments)},filter(t,n){return Ot(this,"filter",t,n,a=>a.map(On),arguments)},find(t,n){return Ot(this,"find",t,n,On,arguments)},findIndex(t,n){return Ot(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Ot(this,"findLast",t,n,On,arguments)},findLastIndex(t,n){return Ot(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Ot(this,"forEach",t,n,void 0,arguments)},includes(...t){return Ie(this,"includes",t)},indexOf(...t){return Ie(this,"indexOf",t)},join(t){return Ta(this).join(t)},lastIndexOf(...t){return Ie(this,"lastIndexOf",t)},map(t,n){return Ot(this,"map",t,n,void 0,arguments)},pop(){return Qa(this,"pop")},push(...t){return Qa(this,"push",t)},reduce(t,...n){return xo(this,"reduce",t,n)},reduceRight(t,...n){return xo(this,"reduceRight",t,n)},shift(){return Qa(this,"shift")},some(t,n){return Ot(this,"some",t,n,void 0,arguments)},splice(...t){return Qa(this,"splice",t)},toReversed(){return Ta(this).toReversed()},toSorted(t){return Ta(this).toSorted(t)},toSpliced(...t){return Ta(this).toSpliced(...t)},unshift(...t){return Qa(this,"unshift",t)},values(){return ze(this,"values",On)}};function ze(t,n,a){const r=me(t),e=r[n]();return r!==t&&!mt(t)&&(e._next=e.next,e.next=()=>{const s=e._next();return s.value&&(s.value=a(s.value)),s}),e}const mp=Array.prototype;function Ot(t,n,a,r,e,s){const o=me(t),i=o!==t&&!mt(t),l=o[n];if(l!==mp[n]){const u=l.apply(t,s);return i?On(u):u}let c=a;o!==t&&(i?c=function(u,h){return a.call(this,On(u),h,t)}:a.length>2&&(c=function(u,h){return a.call(this,u,h,t)}));const p=l.call(o,c,r);return i&&e?e(p):p}function xo(t,n,a,r){const e=me(t);let s=a;return e!==t&&(mt(t)?a.length>3&&(s=function(o,i,l){return a.call(this,o,i,l,t)}):s=function(o,i,l){return a.call(this,o,On(i),l,t)}),e[n](s,...r)}function Ie(t,n,a){const r=mn(t);Bn(r,"iterate",ks);const e=r[n](...a);return(e===-1||e===!1)&&Dr(a[0])?(a[0]=mn(a[0]),r[n](...a)):e}function Qa(t,n,a=[]){Vt(),Ar();const r=mn(t)[n].apply(t,a);return zr(),Ht(),r}const kp=Cr("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pa));function yp(t){pa(t)||(t=String(t));const n=mn(this);return Bn(n,"has",t),n.hasOwnProperty(t)}class $i{constructor(n=!1,a=!1){this._isReadonly=n,this._isShallow=a}get(n,a,r){if(a==="__v_skip")return n.__v_skip;const e=this._isReadonly,s=this._isShallow;if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return s;if(a==="__v_raw")return r===(e?s?Pp:Qi:s?Zi:Xi).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const o=en(n);if(!e){let l;if(o&&(l=gp[a]))return l;if(a==="hasOwnProperty")return yp}const i=Reflect.get(n,a,Vn(n)?n:r);return(pa(a)?Yi.has(a):kp(a))||(e||Bn(n,"get",a),s)?i:Vn(i)?o&&Er(a)?i:i.value:Sn(i)?e?nl(i):ke(i):i}}class Ki extends $i{constructor(n=!1){super(!1,n)}set(n,a,r,e){let s=n[a];if(!this._isShallow){const l=oa(s);if(!mt(r)&&!oa(r)&&(s=mn(s),r=mn(r)),!en(n)&&Vn(s)&&!Vn(r))return l?!1:(s.value=r,!0)}const o=en(n)&&Er(a)?Number(a)<n.length:kn(n,a),i=Reflect.set(n,a,r,Vn(n)?n:e);return n===mn(e)&&(o?sa(r,s)&&Wt(n,"set",a,r):Wt(n,"add",a,r)),i}deleteProperty(n,a){const r=kn(n,a);n[a];const e=Reflect.deleteProperty(n,a);return e&&r&&Wt(n,"delete",a,void 0),e}has(n,a){const r=Reflect.has(n,a);return(!pa(a)||!Yi.has(a))&&Bn(n,"has",a),r}ownKeys(n){return Bn(n,"iterate",en(n)?"length":va),Reflect.ownKeys(n)}}class vp extends $i{constructor(n=!1){super(!0,n)}set(n,a){return!0}deleteProperty(n,a){return!0}}const bp=new Ki,xp=new vp,wp=new Ki(!0);const Je=t=>t,Fs=t=>Reflect.getPrototypeOf(t);function _p(t,n,a){return function(...r){const e=this.__v_raw,s=mn(e),o=Ia(s),i=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=e[t](...r),p=a?Je:n?Xs:On;return!n&&Bn(s,"iterate",l?Qe:va),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:i?[p(u[0]),p(u[1])]:p(u),done:h}},[Symbol.iterator](){return this}}}}function Os(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function Sp(t,n){const a={get(e){const s=this.__v_raw,o=mn(s),i=mn(e);t||(sa(e,i)&&Bn(o,"get",e),Bn(o,"get",i));const{has:l}=Fs(o),c=n?Je:t?Xs:On;if(l.call(o,e))return c(s.get(e));if(l.call(o,i))return c(s.get(i));s!==o&&s.get(e)},get size(){const e=this.__v_raw;return!t&&Bn(mn(e),"iterate",va),Reflect.get(e,"size",e)},has(e){const s=this.__v_raw,o=mn(s),i=mn(e);return t||(sa(e,i)&&Bn(o,"has",e),Bn(o,"has",i)),e===i?s.has(e):s.has(e)||s.has(i)},forEach(e,s){const o=this,i=o.__v_raw,l=mn(i),c=n?Je:t?Xs:On;return!t&&Bn(l,"iterate",va),i.forEach((p,u)=>e.call(s,c(p),c(u),o))}};return qn(a,t?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(e){!n&&!mt(e)&&!oa(e)&&(e=mn(e));const s=mn(this);return Fs(s).has.call(s,e)||(s.add(e),Wt(s,"add",e,e)),this},set(e,s){!n&&!mt(s)&&!oa(s)&&(s=mn(s));const o=mn(this),{has:i,get:l}=Fs(o);let c=i.call(o,e);c||(e=mn(e),c=i.call(o,e));const p=l.call(o,e);return o.set(e,s),c?sa(s,p)&&Wt(o,"set",e,s):Wt(o,"add",e,s),this},delete(e){const s=mn(this),{has:o,get:i}=Fs(s);let l=o.call(s,e);l||(e=mn(e),l=o.call(s,e)),i&&i.call(s,e);const c=s.delete(e);return l&&Wt(s,"delete",e,void 0),c},clear(){const e=mn(this),s=e.size!==0,o=e.clear();return s&&Wt(e,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(e=>{a[e]=_p(e,t,n)}),a}function Or(t,n){const a=Sp(t,n);return(r,e,s)=>e==="__v_isReactive"?!t:e==="__v_isReadonly"?t:e==="__v_raw"?r:Reflect.get(kn(a,e)&&e in r?a:r,e,s)}const jp={get:Or(!1,!1)},Cp={get:Or(!1,!0)},Tp={get:Or(!0,!1)};const Xi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,Pp=new WeakMap;function Ep(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mp(t){return t.__v_skip||!Object.isExtensible(t)?0:Ep(tp(t))}function ke(t){return oa(t)?t:Lr(t,!1,bp,jp,Xi)}function Ji(t){return Lr(t,!1,wp,Cp,Zi)}function nl(t){return Lr(t,!0,xp,Tp,Qi)}function Lr(t,n,a,r,e){if(!Sn(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const s=Mp(t);if(s===0)return t;const o=e.get(t);if(o)return o;const i=new Proxy(t,s===2?r:a);return e.set(t,i),i}function Fa(t){return oa(t)?Fa(t.__v_raw):!!(t&&t.__v_isReactive)}function oa(t){return!!(t&&t.__v_isReadonly)}function mt(t){return!!(t&&t.__v_isShallow)}function Dr(t){return t?!!t.__v_raw:!1}function mn(t){const n=t&&t.__v_raw;return n?mn(n):t}function Rp(t){return!kn(t,"__v_skip")&&Object.isExtensible(t)&&Fi(t,"__v_skip",!0),t}const On=t=>Sn(t)?ke(t):t,Xs=t=>Sn(t)?nl(t):t;function Vn(t){return t?t.__v_isRef===!0:!1}function Nt(t){return tl(t,!1)}function Ap(t){return tl(t,!0)}function tl(t,n){return Vn(t)?t:new zp(t,n)}class zp{constructor(n,a){this.dep=new Fr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?n:mn(n),this._value=a?n:On(n),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(n){const a=this._rawValue,r=this.__v_isShallow||mt(n)||oa(n);n=r?n:mn(n),sa(n,a)&&(this._rawValue=n,this._value=r?n:On(n),this.dep.trigger())}}function bt(t){return Vn(t)?t.value:t}const Ip={get:(t,n,a)=>n==="__v_raw"?t:bt(Reflect.get(t,n,a)),set:(t,n,a,r)=>{const e=t[n];return Vn(e)&&!Vn(a)?(e.value=a,!0):Reflect.set(t,n,a,r)}};function al(t){return Fa(t)?t:new Proxy(t,Ip)}class Fp{constructor(n,a,r){this.fn=n,this.setter=a,this._value=void 0,this.dep=new Fr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&bn!==this)return Gi(this,!0),!0}get value(){const n=this.dep.track();return Vi(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Op(t,n,a=!1){let r,e;return rn(t)?r=t:(r=t.get,e=t.set),new Fp(r,e,a)}const Ls={},Zs=new WeakMap;let ma;function Lp(t,n=!1,a=ma){if(a){let r=Zs.get(a);r||Zs.set(a,r=[]),r.push(t)}}function Dp(t,n,a=xn){const{immediate:r,deep:e,once:s,scheduler:o,augmentJob:i,call:l}=a,c=S=>e?S:mt(S)||e===!1||e===0?Jt(S,1):Jt(S);let p,u,h,d,g=!1,f=!1;if(Vn(t)?(u=()=>t.value,g=mt(t)):Fa(t)?(u=()=>c(t),g=!0):en(t)?(f=!0,g=t.some(S=>Fa(S)||mt(S)),u=()=>t.map(S=>{if(Vn(S))return S.value;if(Fa(S))return c(S);if(rn(S))return l?l(S,2):S()})):rn(t)?n?u=l?()=>l(t,2):t:u=()=>{if(h){Vt();try{h()}finally{Ht()}}const S=ma;ma=p;try{return l?l(t,3,[d]):t(d)}finally{ma=S}}:u=At,n&&e){const S=u,k=e===!0?1/0:e;u=()=>Jt(S(),k)}const m=up(),y=()=>{p.stop(),m&&m.active&&Pr(m.effects,p)};if(s&&n){const S=n;n=(...k)=>{S(...k),y()}}let b=f?new Array(t.length).fill(Ls):Ls;const _=S=>{if(!(!(p.flags&1)||!p.dirty&&!S))if(n){const k=p.run();if(e||g||(f?k.some((x,w)=>sa(x,b[w])):sa(k,b))){h&&h();const x=ma;ma=p;try{const w=[k,b===Ls?void 0:f&&b[0]===Ls?[]:b,d];b=k,l?l(n,3,w):n(...w)}finally{ma=x}}}else p.run()};return i&&i(_),p=new Bi(u),p.scheduler=o?()=>o(_,!1):_,d=S=>Lp(S,!1,p),h=p.onStop=()=>{const S=Zs.get(p);if(S){if(l)l(S,4);else for(const k of S)k();Zs.delete(p)}},n?r?_(!0):b=p.run():o?o(_.bind(null,!0),!0):p.run(),y.pause=p.pause.bind(p),y.resume=p.resume.bind(p),y.stop=y,y}function Jt(t,n=1/0,a){if(n<=0||!Sn(t)||t.__v_skip||(a=a||new Set,a.has(t)))return t;if(a.add(t),n--,Vn(t))Jt(t.value,n,a);else if(en(t))for(let r=0;r<t.length;r++)Jt(t[r],n,a);else if(Ri(t)||Ia(t))t.forEach(r=>{Jt(r,n,a)});else if(Ii(t)){for(const r in t)Jt(t[r],n,a);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Jt(t[r],n,a)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rs(t,n,a,r){try{return r?t(...r):t()}catch(e){ye(e,n,a)}}function It(t,n,a,r){if(rn(t)){const e=Rs(t,n,a,r);return e&&Ai(e)&&e.catch(s=>{ye(s,n,a)}),e}if(en(t)){const e=[];for(let s=0;s<t.length;s++)e.push(It(t[s],n,a,r));return e}}function ye(t,n,a,r=!0){const e=n?n.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||xn;if(n){let i=n.parent;const l=n.proxy,c=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const p=i.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,l,c)===!1)return}i=i.parent}if(s){Vt(),Rs(s,null,10,[t,l,c]),Ht();return}}Bp(t,a,e,r,o)}function Bp(t,n,a,r=!0,e=!1){if(e)throw t;console.error(t)}const $n=[];let Tt=-1;const Oa=[];let Xt=null,Ea=0;const sl=Promise.resolve();let Qs=null;function Br(t){const n=Qs||sl;return t?n.then(this?t.bind(this):t):n}function Up(t){let n=Tt+1,a=$n.length;for(;n<a;){const r=n+a>>>1,e=$n[r],s=ys(e);s<t||s===t&&e.flags&2?n=r+1:a=r}return n}function Ur(t){if(!(t.flags&1)){const n=ys(t),a=$n[$n.length-1];!a||!(t.flags&2)&&n>=ys(a)?$n.push(t):$n.splice(Up(n),0,t),t.flags|=1,el()}}function el(){Qs||(Qs=sl.then(ol))}function Gp(t){en(t)?Oa.push(...t):Xt&&t.id===-1?Xt.splice(Ea+1,0,t):t.flags&1||(Oa.push(t),t.flags|=1),el()}function wo(t,n,a=Tt+1){for(;a<$n.length;a++){const r=$n[a];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;$n.splice(a,1),a--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function rl(t){if(Oa.length){const n=[...new Set(Oa)].sort((a,r)=>ys(a)-ys(r));if(Oa.length=0,Xt){Xt.push(...n);return}for(Xt=n,Ea=0;Ea<Xt.length;Ea++){const a=Xt[Ea];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Xt=null,Ea=0}}const ys=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ol(t){try{for(Tt=0;Tt<$n.length;Tt++){const n=$n[Tt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Rs(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Tt<$n.length;Tt++){const n=$n[Tt];n&&(n.flags&=-2)}Tt=-1,$n.length=0,rl(),Qs=null,($n.length||Oa.length)&&ol()}}let yt=null,il=null;function Js(t){const n=yt;return yt=t,il=t&&t.type.__scopeId||null,n}function La(t,n=yt,a){if(!n||t._n)return t;const r=(...e)=>{r._d&&Ao(-1);const s=Js(n);let o;try{o=t(...e)}finally{Js(s),r._d&&Ao(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ua(t,n,a,r){const e=t.dirs,s=n&&n.dirs;for(let o=0;o<e.length;o++){const i=e[o];s&&(i.oldValue=s[o].value);let l=i.dir[r];l&&(Vt(),It(l,a,8,[t.el,i,t,n]),Ht())}}const Wp=Symbol("_vte"),Np=t=>t.__isTeleport;function Gr(t,n){t.shapeFlag&6&&t.component?(t.transition=n,Gr(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function ll(t,n){return rn(t)?qn({name:t.name},n,{setup:t}):t}function dl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ne(t,n,a,r,e=!1){if(en(t)){t.forEach((g,f)=>ne(g,n&&(en(n)?n[f]:n),a,r,e));return}if(ls(r)&&!e){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ne(t,n,a,r.component.subTree);return}const s=r.shapeFlag&4?Yr(r.component):r.el,o=e?null:s,{i,r:l}=t,c=n&&n.r,p=i.refs===xn?i.refs={}:i.refs,u=i.setupState,h=mn(u),d=u===xn?()=>!1:g=>kn(h,g);if(c!=null&&c!==l&&(Rn(c)?(p[c]=null,d(c)&&(u[c]=null)):Vn(c)&&(c.value=null)),rn(l))Rs(l,i,12,[o,p]);else{const g=Rn(l),f=Vn(l);if(g||f){const m=()=>{if(t.f){const y=g?d(l)?u[l]:p[l]:l.value;e?en(y)&&Pr(y,s):en(y)?y.includes(s)||y.push(s):g?(p[l]=[s],d(l)&&(u[l]=p[l])):(l.value=[s],t.k&&(p[t.k]=l.value))}else g?(p[l]=o,d(l)&&(u[l]=o)):f&&(l.value=o,t.k&&(p[t.k]=o))};o?(m.id=-1,et(m,a)):m()}}}ge().requestIdleCallback;ge().cancelIdleCallback;const ls=t=>!!t.type.__asyncLoader,pl=t=>t.type.__isKeepAlive;function Vp(t,n){cl(t,"a",n)}function Hp(t,n){cl(t,"da",n)}function cl(t,n,a=Gn){const r=t.__wdc||(t.__wdc=()=>{let e=a;for(;e;){if(e.isDeactivated)return;e=e.parent}return t()});if(ve(n,r,a),a){let e=a.parent;for(;e&&e.parent;)pl(e.parent.vnode)&&qp(r,n,a,e),e=e.parent}}function qp(t,n,a,r){const e=ve(n,t,r,!0);Nr(()=>{Pr(r[n],e)},a)}function ve(t,n,a=Gn,r=!1){if(a){const e=a[t]||(a[t]=[]),s=n.__weh||(n.__weh=(...o)=>{Vt();const i=zs(a),l=It(n,a,t,o);return i(),Ht(),l});return r?e.unshift(s):e.push(s),s}}const $t=t=>(n,a=Gn)=>{(!bs||t==="sp")&&ve(t,(...r)=>n(...r),a)},Yp=$t("bm"),As=$t("m"),$p=$t("bu"),Kp=$t("u"),Wr=$t("bum"),Nr=$t("um"),Xp=$t("sp"),Zp=$t("rtg"),Qp=$t("rtc");function Jp(t,n=Gn){ve("ec",t,n)}const nc="components";function tc(t,n){return sc(nc,t,!0,n)||t}const ac=Symbol.for("v-ndc");function sc(t,n,a=!0,r=!1){const e=yt||Gn;if(e){const s=e.type;{const i=Vc(s,!1);if(i&&(i===n||i===kt(n)||i===he(kt(n))))return s}const o=_o(e[t]||s[t],n)||_o(e.appContext[t],n);return!o&&r?s:o}}function _o(t,n){return t&&(t[n]||t[kt(n)]||t[he(kt(n))])}function nr(t,n,a,r){let e;const s=a,o=en(t);if(o||Rn(t)){const i=o&&Fa(t);let l=!1,c=!1;i&&(l=!mt(t),c=oa(t),t=me(t)),e=new Array(t.length);for(let p=0,u=t.length;p<u;p++)e[p]=n(l?c?Xs(On(t[p])):On(t[p]):t[p],p,void 0,s)}else if(typeof t=="number"){e=new Array(t);for(let i=0;i<t;i++)e[i]=n(i+1,i,void 0,s)}else if(Sn(t))if(t[Symbol.iterator])e=Array.from(t,(i,l)=>n(i,l,void 0,s));else{const i=Object.keys(t);e=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const p=i[l];e[l]=n(t[p],p,l,s)}}else e=[];return e}const tr=t=>t?zl(t)?Yr(t):tr(t.parent):null,ds=qn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tr(t.parent),$root:t=>tr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fl(t),$forceUpdate:t=>t.f||(t.f=()=>{Ur(t.update)}),$nextTick:t=>t.n||(t.n=Br.bind(t.proxy)),$watch:t=>Sc.bind(t)}),Fe=(t,n)=>t!==xn&&!t.__isScriptSetup&&kn(t,n),ec={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:a,setupState:r,data:e,props:s,accessCache:o,type:i,appContext:l}=t;let c;if(n[0]!=="$"){const d=o[n];if(d!==void 0)switch(d){case 1:return r[n];case 2:return e[n];case 4:return a[n];case 3:return s[n]}else{if(Fe(r,n))return o[n]=1,r[n];if(e!==xn&&kn(e,n))return o[n]=2,e[n];if((c=t.propsOptions[0])&&kn(c,n))return o[n]=3,s[n];if(a!==xn&&kn(a,n))return o[n]=4,a[n];ar&&(o[n]=0)}}const p=ds[n];let u,h;if(p)return n==="$attrs"&&Bn(t.attrs,"get",""),p(t);if((u=i.__cssModules)&&(u=u[n]))return u;if(a!==xn&&kn(a,n))return o[n]=4,a[n];if(h=l.config.globalProperties,kn(h,n))return h[n]},set({_:t},n,a){const{data:r,setupState:e,ctx:s}=t;return Fe(e,n)?(e[n]=a,!0):r!==xn&&kn(r,n)?(r[n]=a,!0):kn(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(s[n]=a,!0)},has({_:{data:t,setupState:n,accessCache:a,ctx:r,appContext:e,propsOptions:s}},o){let i;return!!a[o]||t!==xn&&kn(t,o)||Fe(n,o)||(i=s[0])&&kn(i,o)||kn(r,o)||kn(ds,o)||kn(e.config.globalProperties,o)},defineProperty(t,n,a){return a.get!=null?t._.accessCache[n]=0:kn(a,"value")&&this.set(t,n,a.value,null),Reflect.defineProperty(t,n,a)}};function So(t){return en(t)?t.reduce((n,a)=>(n[a]=null,n),{}):t}let ar=!0;function rc(t){const n=fl(t),a=t.proxy,r=t.ctx;ar=!1,n.beforeCreate&&jo(n.beforeCreate,t,"bc");const{data:e,computed:s,methods:o,watch:i,provide:l,inject:c,created:p,beforeMount:u,mounted:h,beforeUpdate:d,updated:g,activated:f,deactivated:m,beforeDestroy:y,beforeUnmount:b,destroyed:_,unmounted:S,render:k,renderTracked:x,renderTriggered:w,errorCaptured:v,serverPrefetch:j,expose:T,inheritAttrs:P,components:C,directives:A,filters:z}=n;if(c&&oc(c,r,null),o)for(const L in o){const V=o[L];rn(V)&&(r[L]=V.bind(a))}if(e){const L=e.call(a,a);Sn(L)&&(t.data=ke(L))}if(ar=!0,s)for(const L in s){const V=s[L],nn=rn(V)?V.bind(a,a):rn(V.get)?V.get.bind(a,a):At,on=!rn(V)&&rn(V.set)?V.set.bind(a):At,dn=Kn({get:nn,set:on});Object.defineProperty(r,L,{enumerable:!0,configurable:!0,get:()=>dn.value,set:sn=>dn.value=sn})}if(i)for(const L in i)ul(i[L],r,a,L);if(l){const L=rn(l)?l.call(a):l;Reflect.ownKeys(L).forEach(V=>{Bs(V,L[V])})}p&&jo(p,t,"c");function U(L,V){en(V)?V.forEach(nn=>L(nn.bind(a))):V&&L(V.bind(a))}if(U(Yp,u),U(As,h),U($p,d),U(Kp,g),U(Vp,f),U(Hp,m),U(Jp,v),U(Qp,x),U(Zp,w),U(Wr,b),U(Nr,S),U(Xp,j),en(T))if(T.length){const L=t.exposed||(t.exposed={});T.forEach(V=>{Object.defineProperty(L,V,{get:()=>a[V],set:nn=>a[V]=nn})})}else t.exposed||(t.exposed={});k&&t.render===At&&(t.render=k),P!=null&&(t.inheritAttrs=P),C&&(t.components=C),A&&(t.directives=A),j&&dl(t)}function oc(t,n,a=At){en(t)&&(t=sr(t));for(const r in t){const e=t[r];let s;Sn(e)?"default"in e?s=xt(e.from||r,e.default,!0):s=xt(e.from||r):s=xt(e),Vn(s)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):n[r]=s}}function jo(t,n,a){It(en(t)?t.map(r=>r.bind(n.proxy)):t.bind(n.proxy),n,a)}function ul(t,n,a,r){let e=r.includes(".")?Cl(a,r):()=>a[r];if(Rn(t)){const s=n[t];rn(s)&&Us(e,s)}else if(rn(t))Us(e,t.bind(a));else if(Sn(t))if(en(t))t.forEach(s=>ul(s,n,a,r));else{const s=rn(t.handler)?t.handler.bind(a):n[t.handler];rn(s)&&Us(e,s,t)}}function fl(t){const n=t.type,{mixins:a,extends:r}=n,{mixins:e,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,i=s.get(n);let l;return i?l=i:!e.length&&!a&&!r?l=n:(l={},e.length&&e.forEach(c=>te(l,c,o,!0)),te(l,n,o)),Sn(n)&&s.set(n,l),l}function te(t,n,a,r=!1){const{mixins:e,extends:s}=n;s&&te(t,s,a,!0),e&&e.forEach(o=>te(t,o,a,!0));for(const o in n)if(!(r&&o==="expose")){const i=ic[o]||a&&a[o];t[o]=i?i(t[o],n[o]):n[o]}return t}const ic={data:Co,props:To,emits:To,methods:as,computed:as,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:as,directives:as,watch:dc,provide:Co,inject:lc};function Co(t,n){return n?t?function(){return qn(rn(t)?t.call(this,this):t,rn(n)?n.call(this,this):n)}:n:t}function lc(t,n){return as(sr(t),sr(n))}function sr(t){if(en(t)){const n={};for(let a=0;a<t.length;a++)n[t[a]]=t[a];return n}return t}function Yn(t,n){return t?[...new Set([].concat(t,n))]:n}function as(t,n){return t?qn(Object.create(null),t,n):n}function To(t,n){return t?en(t)&&en(n)?[...new Set([...t,...n])]:qn(Object.create(null),So(t),So(n??{})):n}function dc(t,n){if(!t)return n;if(!n)return t;const a=qn(Object.create(null),t);for(const r in n)a[r]=Yn(t[r],n[r]);return a}function hl(){return{app:null,config:{isNativeTag:Jd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pc=0;function cc(t,n){return function(r,e=null){rn(r)||(r=qn({},r)),e!=null&&!Sn(e)&&(e=null);const s=hl(),o=new WeakSet,i=[];let l=!1;const c=s.app={_uid:pc++,_component:r,_props:e,_container:null,_context:s,_instance:null,version:qc,get config(){return s.config},set config(p){},use(p,...u){return o.has(p)||(p&&rn(p.install)?(o.add(p),p.install(c,...u)):rn(p)&&(o.add(p),p(c,...u))),c},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),c},component(p,u){return u?(s.components[p]=u,c):s.components[p]},directive(p,u){return u?(s.directives[p]=u,c):s.directives[p]},mount(p,u,h){if(!l){const d=c._ceVNode||wn(r,e);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(d,p,h),l=!0,c._container=p,p.__vue_app__=c,Yr(d.component)}},onUnmount(p){i.push(p)},unmount(){l&&(It(i,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(p,u){return s.provides[p]=u,c},runWithContext(p){const u=Da;Da=c;try{return p()}finally{Da=u}}};return c}}let Da=null;function Bs(t,n){if(Gn){let a=Gn.provides;const r=Gn.parent&&Gn.parent.provides;r===a&&(a=Gn.provides=Object.create(r)),a[t]=n}}function xt(t,n,a=!1){const r=Gn||yt;if(r||Da){let e=Da?Da._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(e&&t in e)return e[t];if(arguments.length>1)return a&&rn(n)?n.call(r&&r.proxy):n}}const gl={},ml=()=>Object.create(gl),kl=t=>Object.getPrototypeOf(t)===gl;function uc(t,n,a,r=!1){const e={},s=ml();t.propsDefaults=Object.create(null),yl(t,n,e,s);for(const o in t.propsOptions[0])o in e||(e[o]=void 0);a?t.props=r?e:Ji(e):t.type.props?t.props=e:t.props=s,t.attrs=s}function fc(t,n,a,r){const{props:e,attrs:s,vnode:{patchFlag:o}}=t,i=mn(e),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=t.vnode.dynamicProps;for(let u=0;u<p.length;u++){let h=p[u];if(be(t.emitsOptions,h))continue;const d=n[h];if(l)if(kn(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=kt(h);e[g]=er(l,i,g,d,t,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{yl(t,n,e,s)&&(c=!0);let p;for(const u in i)(!n||!kn(n,u)&&((p=ja(u))===u||!kn(n,p)))&&(l?a&&(a[u]!==void 0||a[p]!==void 0)&&(e[u]=er(l,i,u,void 0,t,!0)):delete e[u]);if(s!==i)for(const u in s)(!n||!kn(n,u))&&(delete s[u],c=!0)}c&&Wt(t.attrs,"set","")}function yl(t,n,a,r){const[e,s]=t.propsOptions;let o=!1,i;if(n)for(let l in n){if(rs(l))continue;const c=n[l];let p;e&&kn(e,p=kt(l))?!s||!s.includes(p)?a[p]=c:(i||(i={}))[p]=c:be(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=mn(a),c=i||xn;for(let p=0;p<s.length;p++){const u=s[p];a[u]=er(e,l,u,c[u],t,!kn(c,u))}}return o}function er(t,n,a,r,e,s){const o=t[a];if(o!=null){const i=kn(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rn(l)){const{propsDefaults:c}=e;if(a in c)r=c[a];else{const p=zs(e);r=c[a]=l.call(null,n),p()}}else r=l;e.ce&&e.ce._setProp(a,r)}o[0]&&(s&&!i?r=!1:o[1]&&(r===""||r===ja(a))&&(r=!0))}return r}const hc=new WeakMap;function vl(t,n,a=!1){const r=a?hc:n.propsCache,e=r.get(t);if(e)return e;const s=t.props,o={},i=[];let l=!1;if(!rn(t)){const p=u=>{l=!0;const[h,d]=vl(u,n,!0);qn(o,h),d&&i.push(...d)};!a&&n.mixins.length&&n.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!s&&!l)return Sn(t)&&r.set(t,za),za;if(en(s))for(let p=0;p<s.length;p++){const u=kt(s[p]);Po(u)&&(o[u]=xn)}else if(s)for(const p in s){const u=kt(p);if(Po(u)){const h=s[p],d=o[u]=en(h)||rn(h)?{type:h}:qn({},h),g=d.type;let f=!1,m=!0;if(en(g))for(let y=0;y<g.length;++y){const b=g[y],_=rn(b)&&b.name;if(_==="Boolean"){f=!0;break}else _==="String"&&(m=!1)}else f=rn(g)&&g.name==="Boolean";d[0]=f,d[1]=m,(f||kn(d,"default"))&&i.push(u)}}const c=[o,i];return Sn(t)&&r.set(t,c),c}function Po(t){return t[0]!=="$"&&!rs(t)}const Vr=t=>t[0]==="_"||t==="$stable",Hr=t=>en(t)?t.map(Et):[Et(t)],gc=(t,n,a)=>{if(n._n)return n;const r=La((...e)=>Hr(n(...e)),a);return r._c=!1,r},bl=(t,n,a)=>{const r=t._ctx;for(const e in t){if(Vr(e))continue;const s=t[e];if(rn(s))n[e]=gc(e,s,r);else if(s!=null){const o=Hr(s);n[e]=()=>o}}},xl=(t,n)=>{const a=Hr(n);t.slots.default=()=>a},wl=(t,n,a)=>{for(const r in n)(a||!Vr(r))&&(t[r]=n[r])},mc=(t,n,a)=>{const r=t.slots=ml();if(t.vnode.shapeFlag&32){const e=n._;e?(wl(r,n,a),a&&Fi(r,"_",e,!0)):bl(n,r)}else n&&xl(t,n)},kc=(t,n,a)=>{const{vnode:r,slots:e}=t;let s=!0,o=xn;if(r.shapeFlag&32){const i=n._;i?a&&i===1?s=!1:wl(e,n,a):(s=!n.$stable,bl(n,e)),o=n}else n&&(xl(t,n),o={default:1});if(s)for(const i in e)!Vr(i)&&o[i]==null&&delete e[i]},et=Rc;function yc(t){return vc(t)}function vc(t,n){const a=ge();a.__VUE__=!0;const{insert:r,remove:e,patchProp:s,createElement:o,createText:i,createComment:l,setText:c,setElementText:p,parentNode:u,nextSibling:h,setScopeId:d=At,insertStaticContent:g}=t,f=(E,M,R,F=null,D=null,B=null,$=void 0,H=null,q=!!M.dynamicChildren)=>{if(E===M)return;E&&!Ja(E,M)&&(F=I(E),sn(E,D,B,!0),E=null),M.patchFlag===-2&&(q=!1,M.dynamicChildren=null);const{type:W,ref:J,shapeFlag:K}=M;switch(W){case xe:m(E,M,R,F);break;case ia:y(E,M,R,F);break;case Gs:E==null&&b(M,R,F,$);break;case Un:C(E,M,R,F,D,B,$,H,q);break;default:K&1?k(E,M,R,F,D,B,$,H,q):K&6?A(E,M,R,F,D,B,$,H,q):(K&64||K&128)&&W.process(E,M,R,F,D,B,$,H,q,Y)}J!=null&&D&&ne(J,E&&E.ref,B,M||E,!M)},m=(E,M,R,F)=>{if(E==null)r(M.el=i(M.children),R,F);else{const D=M.el=E.el;M.children!==E.children&&c(D,M.children)}},y=(E,M,R,F)=>{E==null?r(M.el=l(M.children||""),R,F):M.el=E.el},b=(E,M,R,F)=>{[E.el,E.anchor]=g(E.children,M,R,F,E.el,E.anchor)},_=({el:E,anchor:M},R,F)=>{let D;for(;E&&E!==M;)D=h(E),r(E,R,F),E=D;r(M,R,F)},S=({el:E,anchor:M})=>{let R;for(;E&&E!==M;)R=h(E),e(E),E=R;e(M)},k=(E,M,R,F,D,B,$,H,q)=>{M.type==="svg"?$="svg":M.type==="math"&&($="mathml"),E==null?x(M,R,F,D,B,$,H,q):j(E,M,D,B,$,H,q)},x=(E,M,R,F,D,B,$,H)=>{let q,W;const{props:J,shapeFlag:K,transition:X,dirs:tn}=E;if(q=E.el=o(E.type,B,J&&J.is,J),K&8?p(q,E.children):K&16&&v(E.children,q,null,F,D,Oe(E,B),$,H),tn&&ua(E,null,F,"created"),w(q,E,E.scopeId,$,F),J){for(const yn in J)yn!=="value"&&!rs(yn)&&s(q,yn,null,J[yn],B,F);"value"in J&&s(q,"value",null,J.value,B),(W=J.onVnodeBeforeMount)&&Ct(W,F,E)}tn&&ua(E,null,F,"beforeMount");const ln=bc(D,X);ln&&X.beforeEnter(q),r(q,M,R),((W=J&&J.onVnodeMounted)||ln||tn)&&et(()=>{W&&Ct(W,F,E),ln&&X.enter(q),tn&&ua(E,null,F,"mounted")},D)},w=(E,M,R,F,D)=>{if(R&&d(E,R),F)for(let B=0;B<F.length;B++)d(E,F[B]);if(D){let B=D.subTree;if(M===B||Pl(B.type)&&(B.ssContent===M||B.ssFallback===M)){const $=D.vnode;w(E,$,$.scopeId,$.slotScopeIds,D.parent)}}},v=(E,M,R,F,D,B,$,H,q=0)=>{for(let W=q;W<E.length;W++){const J=E[W]=H?Zt(E[W]):Et(E[W]);f(null,J,M,R,F,D,B,$,H)}},j=(E,M,R,F,D,B,$)=>{const H=M.el=E.el;let{patchFlag:q,dynamicChildren:W,dirs:J}=M;q|=E.patchFlag&16;const K=E.props||xn,X=M.props||xn;let tn;if(R&&fa(R,!1),(tn=X.onVnodeBeforeUpdate)&&Ct(tn,R,M,E),J&&ua(M,E,R,"beforeUpdate"),R&&fa(R,!0),(K.innerHTML&&X.innerHTML==null||K.textContent&&X.textContent==null)&&p(H,""),W?T(E.dynamicChildren,W,H,R,F,Oe(M,D),B):$||V(E,M,H,null,R,F,Oe(M,D),B,!1),q>0){if(q&16)P(H,K,X,R,D);else if(q&2&&K.class!==X.class&&s(H,"class",null,X.class,D),q&4&&s(H,"style",K.style,X.style,D),q&8){const ln=M.dynamicProps;for(let yn=0;yn<ln.length;yn++){const hn=ln[yn],zn=K[hn],An=X[hn];(An!==zn||hn==="value")&&s(H,hn,zn,An,D,R)}}q&1&&E.children!==M.children&&p(H,M.children)}else!$&&W==null&&P(H,K,X,R,D);((tn=X.onVnodeUpdated)||J)&&et(()=>{tn&&Ct(tn,R,M,E),J&&ua(M,E,R,"updated")},F)},T=(E,M,R,F,D,B,$)=>{for(let H=0;H<M.length;H++){const q=E[H],W=M[H],J=q.el&&(q.type===Un||!Ja(q,W)||q.shapeFlag&198)?u(q.el):R;f(q,W,J,null,F,D,B,$,!0)}},P=(E,M,R,F,D)=>{if(M!==R){if(M!==xn)for(const B in M)!rs(B)&&!(B in R)&&s(E,B,M[B],null,D,F);for(const B in R){if(rs(B))continue;const $=R[B],H=M[B];$!==H&&B!=="value"&&s(E,B,H,$,D,F)}"value"in R&&s(E,"value",M.value,R.value,D)}},C=(E,M,R,F,D,B,$,H,q)=>{const W=M.el=E?E.el:i(""),J=M.anchor=E?E.anchor:i("");let{patchFlag:K,dynamicChildren:X,slotScopeIds:tn}=M;tn&&(H=H?H.concat(tn):tn),E==null?(r(W,R,F),r(J,R,F),v(M.children||[],R,J,D,B,$,H,q)):K>0&&K&64&&X&&E.dynamicChildren?(T(E.dynamicChildren,X,R,D,B,$,H),(M.key!=null||D&&M===D.subTree)&&_l(E,M,!0)):V(E,M,R,J,D,B,$,H,q)},A=(E,M,R,F,D,B,$,H,q)=>{M.slotScopeIds=H,E==null?M.shapeFlag&512?D.ctx.activate(M,R,F,$,q):z(M,R,F,D,B,$,q):O(E,M,q)},z=(E,M,R,F,D,B,$)=>{const H=E.component=Bc(E,F,D);if(pl(E)&&(H.ctx.renderer=Y),Uc(H,!1,$),H.asyncDep){if(D&&D.registerDep(H,U,$),!E.el){const q=H.subTree=wn(ia);y(null,q,M,R)}}else U(H,E,M,R,D,B,$)},O=(E,M,R)=>{const F=M.component=E.component;if(Ec(E,M,R))if(F.asyncDep&&!F.asyncResolved){L(F,M,R);return}else F.next=M,F.update();else M.el=E.el,F.vnode=M},U=(E,M,R,F,D,B,$)=>{const H=()=>{if(E.isMounted){let{next:K,bu:X,u:tn,parent:ln,vnode:yn}=E;{const St=Sl(E);if(St){K&&(K.el=yn.el,L(E,K,$)),St.asyncDep.then(()=>{E.isUnmounted||H()});return}}let hn=K,zn;fa(E,!1),K?(K.el=yn.el,L(E,K,$)):K=yn,X&&Me(X),(zn=K.props&&K.props.onVnodeBeforeUpdate)&&Ct(zn,ln,K,yn),fa(E,!0);const An=Mo(E),_t=E.subTree;E.subTree=An,f(_t,An,u(_t.el),I(_t),E,D,B),K.el=An.el,hn===null&&Mc(E,An.el),tn&&et(tn,D),(zn=K.props&&K.props.onVnodeUpdated)&&et(()=>Ct(zn,ln,K,yn),D)}else{let K;const{el:X,props:tn}=M,{bm:ln,m:yn,parent:hn,root:zn,type:An}=E,_t=ls(M);fa(E,!1),ln&&Me(ln),!_t&&(K=tn&&tn.onVnodeBeforeMount)&&Ct(K,hn,M),fa(E,!0);{zn.ce&&zn.ce._injectChildStyle(An);const St=E.subTree=Mo(E);f(null,St,R,F,E,D,B),M.el=St.el}if(yn&&et(yn,D),!_t&&(K=tn&&tn.onVnodeMounted)){const St=M;et(()=>Ct(K,hn,St),D)}(M.shapeFlag&256||hn&&ls(hn.vnode)&&hn.vnode.shapeFlag&256)&&E.a&&et(E.a,D),E.isMounted=!0,M=R=F=null}};E.scope.on();const q=E.effect=new Bi(H);E.scope.off();const W=E.update=q.run.bind(q),J=E.job=q.runIfDirty.bind(q);J.i=E,J.id=E.uid,q.scheduler=()=>Ur(J),fa(E,!0),W()},L=(E,M,R)=>{M.component=E;const F=E.vnode.props;E.vnode=M,E.next=null,fc(E,M.props,F,R),kc(E,M.children,R),Vt(),wo(E),Ht()},V=(E,M,R,F,D,B,$,H,q=!1)=>{const W=E&&E.children,J=E?E.shapeFlag:0,K=M.children,{patchFlag:X,shapeFlag:tn}=M;if(X>0){if(X&128){on(W,K,R,F,D,B,$,H,q);return}else if(X&256){nn(W,K,R,F,D,B,$,H,q);return}}tn&8?(J&16&&Q(W,D,B),K!==W&&p(R,K)):J&16?tn&16?on(W,K,R,F,D,B,$,H,q):Q(W,D,B,!0):(J&8&&p(R,""),tn&16&&v(K,R,F,D,B,$,H,q))},nn=(E,M,R,F,D,B,$,H,q)=>{E=E||za,M=M||za;const W=E.length,J=M.length,K=Math.min(W,J);let X;for(X=0;X<K;X++){const tn=M[X]=q?Zt(M[X]):Et(M[X]);f(E[X],tn,R,null,D,B,$,H,q)}W>J?Q(E,D,B,!0,!1,K):v(M,R,F,D,B,$,H,q,K)},on=(E,M,R,F,D,B,$,H,q)=>{let W=0;const J=M.length;let K=E.length-1,X=J-1;for(;W<=K&&W<=X;){const tn=E[W],ln=M[W]=q?Zt(M[W]):Et(M[W]);if(Ja(tn,ln))f(tn,ln,R,null,D,B,$,H,q);else break;W++}for(;W<=K&&W<=X;){const tn=E[K],ln=M[X]=q?Zt(M[X]):Et(M[X]);if(Ja(tn,ln))f(tn,ln,R,null,D,B,$,H,q);else break;K--,X--}if(W>K){if(W<=X){const tn=X+1,ln=tn<J?M[tn].el:F;for(;W<=X;)f(null,M[W]=q?Zt(M[W]):Et(M[W]),R,ln,D,B,$,H,q),W++}}else if(W>X)for(;W<=K;)sn(E[W],D,B,!0),W++;else{const tn=W,ln=W,yn=new Map;for(W=ln;W<=X;W++){const st=M[W]=q?Zt(M[W]):Et(M[W]);st.key!=null&&yn.set(st.key,W)}let hn,zn=0;const An=X-ln+1;let _t=!1,St=0;const Za=new Array(An);for(W=0;W<An;W++)Za[W]=0;for(W=tn;W<=K;W++){const st=E[W];if(zn>=An){sn(st,D,B,!0);continue}let jt;if(st.key!=null)jt=yn.get(st.key);else for(hn=ln;hn<=X;hn++)if(Za[hn-ln]===0&&Ja(st,M[hn])){jt=hn;break}jt===void 0?sn(st,D,B,!0):(Za[jt-ln]=W+1,jt>=St?St=jt:_t=!0,f(st,M[jt],R,null,D,B,$,H,q),zn++)}const ko=_t?xc(Za):za;for(hn=ko.length-1,W=An-1;W>=0;W--){const st=ln+W,jt=M[st],yo=st+1<J?M[st+1].el:F;Za[W]===0?f(null,jt,R,yo,D,B,$,H,q):_t&&(hn<0||W!==ko[hn]?dn(jt,R,yo,2):hn--)}}},dn=(E,M,R,F,D=null)=>{const{el:B,type:$,transition:H,children:q,shapeFlag:W}=E;if(W&6){dn(E.component.subTree,M,R,F);return}if(W&128){E.suspense.move(M,R,F);return}if(W&64){$.move(E,M,R,Y);return}if($===Un){r(B,M,R);for(let K=0;K<q.length;K++)dn(q[K],M,R,F);r(E.anchor,M,R);return}if($===Gs){_(E,M,R);return}if(F!==2&&W&1&&H)if(F===0)H.beforeEnter(B),r(B,M,R),et(()=>H.enter(B),D);else{const{leave:K,delayLeave:X,afterLeave:tn}=H,ln=()=>{E.ctx.isUnmounted?e(B):r(B,M,R)},yn=()=>{K(B,()=>{ln(),tn&&tn()})};X?X(B,ln,yn):yn()}else r(B,M,R)},sn=(E,M,R,F=!1,D=!1)=>{const{type:B,props:$,ref:H,children:q,dynamicChildren:W,shapeFlag:J,patchFlag:K,dirs:X,cacheIndex:tn}=E;if(K===-2&&(D=!1),H!=null&&(Vt(),ne(H,null,R,E,!0),Ht()),tn!=null&&(M.renderCache[tn]=void 0),J&256){M.ctx.deactivate(E);return}const ln=J&1&&X,yn=!ls(E);let hn;if(yn&&(hn=$&&$.onVnodeBeforeUnmount)&&Ct(hn,M,E),J&6)un(E.component,R,F);else{if(J&128){E.suspense.unmount(R,F);return}ln&&ua(E,null,M,"beforeUnmount"),J&64?E.type.remove(E,M,R,Y,F):W&&!W.hasOnce&&(B!==Un||K>0&&K&64)?Q(W,M,R,!1,!0):(B===Un&&K&384||!D&&J&16)&&Q(q,M,R),F&&cn(E)}(yn&&(hn=$&&$.onVnodeUnmounted)||ln)&&et(()=>{hn&&Ct(hn,M,E),ln&&ua(E,null,M,"unmounted")},R)},cn=E=>{const{type:M,el:R,anchor:F,transition:D}=E;if(M===Un){pn(R,F);return}if(M===Gs){S(E);return}const B=()=>{e(R),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(E.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:H}=D,q=()=>$(R,B);H?H(E.el,B,q):q()}else B()},pn=(E,M)=>{let R;for(;E!==M;)R=h(E),e(E),E=R;e(M)},un=(E,M,R)=>{const{bum:F,scope:D,job:B,subTree:$,um:H,m:q,a:W,parent:J,slots:{__:K}}=E;Eo(q),Eo(W),F&&Me(F),J&&en(K)&&K.forEach(X=>{J.renderCache[X]=void 0}),D.stop(),B&&(B.flags|=8,sn($,E,M,R)),H&&et(H,M),et(()=>{E.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},Q=(E,M,R,F=!1,D=!1,B=0)=>{for(let $=B;$<E.length;$++)sn(E[$],M,R,F,D)},I=E=>{if(E.shapeFlag&6)return I(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const M=h(E.anchor||E.el),R=M&&M[Wp];return R?h(R):M};let G=!1;const N=(E,M,R)=>{E==null?M._vnode&&sn(M._vnode,null,null,!0):f(M._vnode||null,E,M,null,null,null,R),M._vnode=E,G||(G=!0,wo(),rl(),G=!1)},Y={p:f,um:sn,m:dn,r:cn,mt:z,mc:v,pc:V,pbc:T,n:I,o:t};return{render:N,hydrate:void 0,createApp:cc(N)}}function Oe({type:t,props:n},a){return a==="svg"&&t==="foreignObject"||a==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:a}function fa({effect:t,job:n},a){a?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function bc(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function _l(t,n,a=!1){const r=t.children,e=n.children;if(en(r)&&en(e))for(let s=0;s<r.length;s++){const o=r[s];let i=e[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=e[s]=Zt(e[s]),i.el=o.el),!a&&i.patchFlag!==-2&&_l(o,i)),i.type===xe&&(i.el=o.el),i.type===ia&&!i.el&&(i.el=o.el)}}function xc(t){const n=t.slice(),a=[0];let r,e,s,o,i;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(e=a[a.length-1],t[e]<c){n[r]=e,a.push(r);continue}for(s=0,o=a.length-1;s<o;)i=s+o>>1,t[a[i]]<c?s=i+1:o=i;c<t[a[s]]&&(s>0&&(n[r]=a[s-1]),a[s]=r)}}for(s=a.length,o=a[s-1];s-- >0;)a[s]=o,o=n[o];return a}function Sl(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Sl(n)}function Eo(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const wc=Symbol.for("v-scx"),_c=()=>xt(wc);function Us(t,n,a){return jl(t,n,a)}function jl(t,n,a=xn){const{immediate:r,deep:e,flush:s,once:o}=a,i=qn({},a),l=n&&r||!n&&s!=="post";let c;if(bs){if(s==="sync"){const d=_c();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=At,d.resume=At,d.pause=At,d}}const p=Gn;i.call=(d,g,f)=>It(d,p,g,f);let u=!1;s==="post"?i.scheduler=d=>{et(d,p&&p.suspense)}:s!=="sync"&&(u=!0,i.scheduler=(d,g)=>{g?d():Ur(d)}),i.augmentJob=d=>{n&&(d.flags|=4),u&&(d.flags|=2,p&&(d.id=p.uid,d.i=p))};const h=Dp(t,n,i);return bs&&(c?c.push(h):l&&h()),h}function Sc(t,n,a){const r=this.proxy,e=Rn(t)?t.includes(".")?Cl(r,t):()=>r[t]:t.bind(r,r);let s;rn(n)?s=n:(s=n.handler,a=n);const o=zs(this),i=jl(e,s.bind(r),a);return o(),i}function Cl(t,n){const a=n.split(".");return()=>{let r=t;for(let e=0;e<a.length&&r;e++)r=r[a[e]];return r}}const jc=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${kt(n)}Modifiers`]||t[`${ja(n)}Modifiers`];function Cc(t,n,...a){if(t.isUnmounted)return;const r=t.vnode.props||xn;let e=a;const s=n.startsWith("update:"),o=s&&jc(r,n.slice(7));o&&(o.trim&&(e=a.map(p=>Rn(p)?p.trim():p)),o.number&&(e=a.map(ep)));let i,l=r[i=Ee(n)]||r[i=Ee(kt(n))];!l&&s&&(l=r[i=Ee(ja(n))]),l&&It(l,t,6,e);const c=r[i+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,It(c,t,6,e)}}function Tl(t,n,a=!1){const r=n.emitsCache,e=r.get(t);if(e!==void 0)return e;const s=t.emits;let o={},i=!1;if(!rn(t)){const l=c=>{const p=Tl(c,n,!0);p&&(i=!0,qn(o,p))};!a&&n.mixins.length&&n.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!i?(Sn(t)&&r.set(t,null),null):(en(s)?s.forEach(l=>o[l]=null):qn(o,s),Sn(t)&&r.set(t,o),o)}function be(t,n){return!t||!ce(n)?!1:(n=n.slice(2).replace(/Once$/,""),kn(t,n[0].toLowerCase()+n.slice(1))||kn(t,ja(n))||kn(t,n))}function Mo(t){const{type:n,vnode:a,proxy:r,withProxy:e,propsOptions:[s],slots:o,attrs:i,emit:l,render:c,renderCache:p,props:u,data:h,setupState:d,ctx:g,inheritAttrs:f}=t,m=Js(t);let y,b;try{if(a.shapeFlag&4){const S=e||r,k=S;y=Et(c.call(k,S,p,u,d,h,g)),b=i}else{const S=n;y=Et(S.length>1?S(u,{attrs:i,slots:o,emit:l}):S(u,null)),b=n.props?i:Tc(i)}}catch(S){ps.length=0,ye(S,t,1),y=wn(ia)}let _=y;if(b&&f!==!1){const S=Object.keys(b),{shapeFlag:k}=_;S.length&&k&7&&(s&&S.some(Tr)&&(b=Pc(b,s)),_=Wa(_,b,!1,!0))}return a.dirs&&(_=Wa(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(a.dirs):a.dirs),a.transition&&Gr(_,a.transition),y=_,Js(m),y}const Tc=t=>{let n;for(const a in t)(a==="class"||a==="style"||ce(a))&&((n||(n={}))[a]=t[a]);return n},Pc=(t,n)=>{const a={};for(const r in t)(!Tr(r)||!(r.slice(9)in n))&&(a[r]=t[r]);return a};function Ec(t,n,a){const{props:r,children:e,component:s}=t,{props:o,children:i,patchFlag:l}=n,c=s.emitsOptions;if(n.dirs||n.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return r?Ro(r,o,c):!!o;if(l&8){const p=n.dynamicProps;for(let u=0;u<p.length;u++){const h=p[u];if(o[h]!==r[h]&&!be(c,h))return!0}}}else return(e||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?Ro(r,o,c):!0:!!o;return!1}function Ro(t,n,a){const r=Object.keys(n);if(r.length!==Object.keys(t).length)return!0;for(let e=0;e<r.length;e++){const s=r[e];if(n[s]!==t[s]&&!be(a,s))return!0}return!1}function Mc({vnode:t,parent:n},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=n.vnode).el=a,n=n.parent;else break}}const Pl=t=>t.__isSuspense;function Rc(t,n){n&&n.pendingBranch?en(t)?n.effects.push(...t):n.effects.push(t):Gp(t)}const Un=Symbol.for("v-fgt"),xe=Symbol.for("v-txt"),ia=Symbol.for("v-cmt"),Gs=Symbol.for("v-stc"),ps=[];let it=null;function In(t=!1){ps.push(it=t?null:[])}function Ac(){ps.pop(),it=ps[ps.length-1]||null}let vs=1;function Ao(t,n=!1){vs+=t,t<0&&it&&n&&(it.hasOnce=!0)}function El(t){return t.dynamicChildren=vs>0?it||za:null,Ac(),vs>0&&it&&it.push(t),t}function Dn(t,n,a,r,e,s){return El(Z(t,n,a,r,e,s,!0))}function Ml(t,n,a,r,e){return El(wn(t,n,a,r,e,!0))}function ae(t){return t?t.__v_isVNode===!0:!1}function Ja(t,n){return t.type===n.type&&t.key===n.key}const Rl=({key:t})=>t??null,Ws=({ref:t,ref_key:n,ref_for:a})=>(typeof t=="number"&&(t=""+t),t!=null?Rn(t)||Vn(t)||rn(t)?{i:yt,r:t,k:n,f:!!a}:t:null);function Z(t,n=null,a=null,r=0,e=null,s=t===Un?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Rl(n),ref:n&&Ws(n),scopeId:il,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:e,dynamicChildren:null,appContext:null,ctx:yt};return i?(qr(l,a),s&128&&t.normalize(l)):a&&(l.shapeFlag|=Rn(a)?8:16),vs>0&&!o&&it&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&it.push(l),l}const wn=zc;function zc(t,n=null,a=null,r=0,e=null,s=!1){if((!t||t===ac)&&(t=ia),ae(t)){const i=Wa(t,n,!0);return a&&qr(i,a),vs>0&&!s&&it&&(i.shapeFlag&6?it[it.indexOf(t)]=i:it.push(i)),i.patchFlag=-2,i}if(Hc(t)&&(t=t.__vccOpts),n){n=Ic(n);let{class:i,style:l}=n;i&&!Rn(i)&&(n.class=Rr(i)),Sn(l)&&(Dr(l)&&!en(l)&&(l=qn({},l)),n.style=Mr(l))}const o=Rn(t)?1:Pl(t)?128:Np(t)?64:Sn(t)?4:rn(t)?2:0;return Z(t,n,a,r,e,o,s,!0)}function Ic(t){return t?Dr(t)||kl(t)?qn({},t):t:null}function Wa(t,n,a=!1,r=!1){const{props:e,ref:s,patchFlag:o,children:i,transition:l}=t,c=n?Oc(e||{},n):e,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Rl(c),ref:n&&n.ref?a&&s?en(s)?s.concat(Ws(n)):[s,Ws(n)]:Ws(n):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Un?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wa(t.ssContent),ssFallback:t.ssFallback&&Wa(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Gr(p,l.clone(p)),p}function Al(t=" ",n=0){return wn(xe,null,t,n)}function rr(t,n){const a=wn(Gs,null,t);return a.staticCount=n,a}function Fc(t="",n=!1){return n?(In(),Ml(ia,null,t)):wn(ia,null,t)}function Et(t){return t==null||typeof t=="boolean"?wn(ia):en(t)?wn(Un,null,t.slice()):ae(t)?Zt(t):wn(xe,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wa(t)}function qr(t,n){let a=0;const{shapeFlag:r}=t;if(n==null)n=null;else if(en(n))a=16;else if(typeof n=="object")if(r&65){const e=n.default;e&&(e._c&&(e._d=!1),qr(t,e()),e._c&&(e._d=!0));return}else{a=32;const e=n._;!e&&!kl(n)?n._ctx=yt:e===3&&yt&&(yt.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else rn(n)?(n={default:n,_ctx:yt},a=32):(n=String(n),r&64?(a=16,n=[Al(n)]):a=8);t.children=n,t.shapeFlag|=a}function Oc(...t){const n={};for(let a=0;a<t.length;a++){const r=t[a];for(const e in r)if(e==="class")n.class!==r.class&&(n.class=Rr([n.class,r.class]));else if(e==="style")n.style=Mr([n.style,r.style]);else if(ce(e)){const s=n[e],o=r[e];o&&s!==o&&!(en(s)&&s.includes(o))&&(n[e]=s?[].concat(s,o):o)}else e!==""&&(n[e]=r[e])}return n}function Ct(t,n,a,r=null){It(t,n,7,[a,r])}const Lc=hl();let Dc=0;function Bc(t,n,a){const r=t.type,e=(n?n.appContext:t.appContext)||Lc,s={uid:Dc++,vnode:t,type:r,parent:n,appContext:e,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(e.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vl(r,e),emitsOptions:Tl(r,e),emit:null,emitted:null,propsDefaults:xn,inheritAttrs:r.inheritAttrs,ctx:xn,data:xn,props:xn,attrs:xn,slots:xn,refs:xn,setupState:xn,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Cc.bind(null,s),t.ce&&t.ce(s),s}let Gn=null,se,or;{const t=ge(),n=(a,r)=>{let e;return(e=t[a])||(e=t[a]=[]),e.push(r),s=>{e.length>1?e.forEach(o=>o(s)):e[0](s)}};se=n("__VUE_INSTANCE_SETTERS__",a=>Gn=a),or=n("__VUE_SSR_SETTERS__",a=>bs=a)}const zs=t=>{const n=Gn;return se(t),t.scope.on(),()=>{t.scope.off(),se(n)}},zo=()=>{Gn&&Gn.scope.off(),se(null)};function zl(t){return t.vnode.shapeFlag&4}let bs=!1;function Uc(t,n=!1,a=!1){n&&or(n);const{props:r,children:e}=t.vnode,s=zl(t);uc(t,r,s,n),mc(t,e,a||n);const o=s?Gc(t,n):void 0;return n&&or(!1),o}function Gc(t,n){const a=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ec);const{setup:r}=a;if(r){Vt();const e=t.setupContext=r.length>1?Nc(t):null,s=zs(t),o=Rs(r,t,0,[t.props,e]),i=Ai(o);if(Ht(),s(),(i||t.sp)&&!ls(t)&&dl(t),i){if(o.then(zo,zo),n)return o.then(l=>{Io(t,l)}).catch(l=>{ye(l,t,0)});t.asyncDep=o}else Io(t,o)}else Il(t)}function Io(t,n,a){rn(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Sn(n)&&(t.setupState=al(n)),Il(t)}function Il(t,n,a){const r=t.type;t.render||(t.render=r.render||At);{const e=zs(t);Vt();try{rc(t)}finally{Ht(),e()}}}const Wc={get(t,n){return Bn(t,"get",""),t[n]}};function Nc(t){const n=a=>{t.exposed=a||{}};return{attrs:new Proxy(t.attrs,Wc),slots:t.slots,emit:t.emit,expose:n}}function Yr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(al(Rp(t.exposed)),{get(n,a){if(a in n)return n[a];if(a in ds)return ds[a](t)},has(n,a){return a in n||a in ds}})):t.proxy}function Vc(t,n=!0){return rn(t)?t.displayName||t.name:t.name||n&&t.__name}function Hc(t){return rn(t)&&"__vccOpts"in t}const Kn=(t,n)=>Op(t,n,bs);function Fl(t,n,a){const r=arguments.length;return r===2?Sn(n)&&!en(n)?ae(n)?wn(t,null,[n]):wn(t,n):wn(t,null,n):(r>3?a=Array.prototype.slice.call(arguments,2):r===3&&ae(a)&&(a=[a]),wn(t,n,a))}const qc="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ir;const Fo=typeof window<"u"&&window.trustedTypes;if(Fo)try{ir=Fo.createPolicy("vue",{createHTML:t=>t})}catch{}const Ol=ir?t=>ir.createHTML(t):t=>t,Yc="http://www.w3.org/2000/svg",$c="http://www.w3.org/1998/Math/MathML",Dt=typeof document<"u"?document:null,Oo=Dt&&Dt.createElement("template"),Kc={insert:(t,n,a)=>{n.insertBefore(t,a||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,a,r)=>{const e=n==="svg"?Dt.createElementNS(Yc,t):n==="mathml"?Dt.createElementNS($c,t):a?Dt.createElement(t,{is:a}):Dt.createElement(t);return t==="select"&&r&&r.multiple!=null&&e.setAttribute("multiple",r.multiple),e},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,a,r,e,s){const o=a?a.previousSibling:n.lastChild;if(e&&(e===s||e.nextSibling))for(;n.insertBefore(e.cloneNode(!0),a),!(e===s||!(e=e.nextSibling)););else{Oo.innerHTML=Ol(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const i=Oo.content;if(r==="svg"||r==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,a)}return[o?o.nextSibling:n.firstChild,a?a.previousSibling:n.lastChild]}},Xc=Symbol("_vtc");function Zc(t,n,a){const r=t[Xc];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?t.removeAttribute("class"):a?t.setAttribute("class",n):t.className=n}const Lo=Symbol("_vod"),Qc=Symbol("_vsh"),Jc=Symbol(""),nu=/(^|;)\s*display\s*:/;function tu(t,n,a){const r=t.style,e=Rn(a);let s=!1;if(a&&!e){if(n)if(Rn(n))for(const o of n.split(";")){const i=o.slice(0,o.indexOf(":")).trim();a[i]==null&&Ns(r,i,"")}else for(const o in n)a[o]==null&&Ns(r,o,"");for(const o in a)o==="display"&&(s=!0),Ns(r,o,a[o])}else if(e){if(n!==a){const o=r[Jc];o&&(a+=";"+o),r.cssText=a,s=nu.test(a)}}else n&&t.removeAttribute("style");Lo in t&&(t[Lo]=s?r.display:"",t[Qc]&&(r.display="none"))}const Do=/\s*!important$/;function Ns(t,n,a){if(en(a))a.forEach(r=>Ns(t,n,r));else if(a==null&&(a=""),n.startsWith("--"))t.setProperty(n,a);else{const r=au(t,n);Do.test(a)?t.setProperty(ja(r),a.replace(Do,""),"important"):t[r]=a}}const Bo=["Webkit","Moz","ms"],Le={};function au(t,n){const a=Le[n];if(a)return a;let r=kt(n);if(r!=="filter"&&r in t)return Le[n]=r;r=he(r);for(let e=0;e<Bo.length;e++){const s=Bo[e]+r;if(s in t)return Le[n]=s}return n}const Uo="http://www.w3.org/1999/xlink";function Go(t,n,a,r,e,s=pp(n)){r&&n.startsWith("xlink:")?a==null?t.removeAttributeNS(Uo,n.slice(6,n.length)):t.setAttributeNS(Uo,n,a):a==null||s&&!Oi(a)?t.removeAttribute(n):t.setAttribute(n,s?"":pa(a)?String(a):a)}function Wo(t,n,a,r,e){if(n==="innerHTML"||n==="textContent"){a!=null&&(t[n]=n==="innerHTML"?Ol(a):a);return}const s=t.tagName;if(n==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?t.getAttribute("value")||"":t.value,l=a==null?t.type==="checkbox"?"on":"":String(a);(i!==l||!("_value"in t))&&(t.value=l),a==null&&t.removeAttribute(n),t._value=a;return}let o=!1;if(a===""||a==null){const i=typeof t[n];i==="boolean"?a=Oi(a):a==null&&i==="string"?(a="",o=!0):i==="number"&&(a=0,o=!0)}try{t[n]=a}catch{}o&&t.removeAttribute(e||n)}function su(t,n,a,r){t.addEventListener(n,a,r)}function eu(t,n,a,r){t.removeEventListener(n,a,r)}const No=Symbol("_vei");function ru(t,n,a,r,e=null){const s=t[No]||(t[No]={}),o=s[n];if(r&&o)o.value=r;else{const[i,l]=ou(n);if(r){const c=s[n]=du(r,e);su(t,i,c,l)}else o&&(eu(t,i,o,l),s[n]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function ou(t){let n;if(Vo.test(t)){n={};let r;for(;r=t.match(Vo);)t=t.slice(0,t.length-r[0].length),n[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ja(t.slice(2)),n]}let De=0;const iu=Promise.resolve(),lu=()=>De||(iu.then(()=>De=0),De=Date.now());function du(t,n){const a=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=a.attached)return;It(pu(r,a.value),n,5,[r])};return a.value=t,a.attached=lu(),a}function pu(t,n){if(en(n)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},n.map(r=>e=>!e._stopped&&r&&r(e))}else return n}const Ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cu=(t,n,a,r,e,s)=>{const o=e==="svg";n==="class"?Zc(t,r,o):n==="style"?tu(t,a,r):ce(n)?Tr(n)||ru(t,n,a,r,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):uu(t,n,r,o))?(Wo(t,n,r),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Go(t,n,r,o,s,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!Rn(r))?Wo(t,kt(n),r,s,n):(n==="true-value"?t._trueValue=r:n==="false-value"&&(t._falseValue=r),Go(t,n,r,o))};function uu(t,n,a,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in t&&Ho(n)&&rn(a));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const e=t.tagName;if(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")return!1}return Ho(n)&&Rn(a)?!1:n in t}const fu=qn({patchProp:cu},Kc);let qo;function hu(){return qo||(qo=yc(fu))}const gu=(...t)=>{const n=hu().createApp(...t),{mount:a}=n;return n.mount=r=>{const e=ku(r);if(!e)return;const s=n._component;!rn(s)&&!s.render&&!s.template&&(s.template=e.innerHTML),e.nodeType===1&&(e.textContent="");const o=a(e,!1,mu(e));return e instanceof Element&&(e.removeAttribute("v-cloak"),e.setAttribute("data-v-app","")),o},n};function mu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ku(t){return Rn(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ma=typeof document<"u";function Ll(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ll(t.default)}const gn=Object.assign;function Be(t,n){const a={};for(const r in n){const e=n[r];a[r]=wt(e)?e.map(t):t(e)}return a}const cs=()=>{},wt=Array.isArray,Dl=/#/g,vu=/&/g,bu=/\//g,xu=/=/g,wu=/\?/g,Bl=/\+/g,_u=/%5B/g,Su=/%5D/g,Ul=/%5E/g,ju=/%60/g,Gl=/%7B/g,Cu=/%7C/g,Wl=/%7D/g,Tu=/%20/g;function $r(t){return encodeURI(""+t).replace(Cu,"|").replace(_u,"[").replace(Su,"]")}function Pu(t){return $r(t).replace(Gl,"{").replace(Wl,"}").replace(Ul,"^")}function lr(t){return $r(t).replace(Bl,"%2B").replace(Tu,"+").replace(Dl,"%23").replace(vu,"%26").replace(ju,"`").replace(Gl,"{").replace(Wl,"}").replace(Ul,"^")}function Eu(t){return lr(t).replace(xu,"%3D")}function Mu(t){return $r(t).replace(Dl,"%23").replace(wu,"%3F")}function Ru(t){return t==null?"":Mu(t).replace(bu,"%2F")}function xs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Au=/\/$/,zu=t=>t.replace(Au,"");function Ue(t,n,a="/"){let r,e={},s="",o="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(r=n.slice(0,l),s=n.slice(l+1,i>-1?i:n.length),e=t(s)),i>-1&&(r=r||n.slice(0,i),o=n.slice(i,n.length)),r=Lu(r??n,a),{fullPath:r+(s&&"?")+s+o,path:r,query:e,hash:xs(o)}}function Iu(t,n){const a=n.query?t(n.query):"";return n.path+(a&&"?")+a+(n.hash||"")}function Yo(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Fu(t,n,a){const r=n.matched.length-1,e=a.matched.length-1;return r>-1&&r===e&&Na(n.matched[r],a.matched[e])&&Nl(n.params,a.params)&&t(n.query)===t(a.query)&&n.hash===a.hash}function Na(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Nl(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const a in t)if(!Ou(t[a],n[a]))return!1;return!0}function Ou(t,n){return wt(t)?$o(t,n):wt(n)?$o(n,t):t===n}function $o(t,n){return wt(n)?t.length===n.length&&t.every((a,r)=>a===n[r]):t.length===1&&t[0]===n}function Lu(t,n){if(t.startsWith("/"))return t;if(!t)return n;const a=n.split("/"),r=t.split("/"),e=r[r.length-1];(e===".."||e===".")&&r.push("");let s=a.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")s>1&&s--;else break;return a.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ws;(function(t){t.pop="pop",t.push="push"})(ws||(ws={}));var us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(us||(us={}));function Du(t){if(!t)if(Ma){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zu(t)}const Bu=/^[^#]+#/;function Uu(t,n){return t.replace(Bu,"#")+n}function Gu(t,n){const a=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:n.behavior,left:r.left-a.left-(n.left||0),top:r.top-a.top-(n.top||0)}}const we=()=>({left:window.scrollX,top:window.scrollY});function Wu(t){let n;if("el"in t){const a=t.el,r=typeof a=="string"&&a.startsWith("#"),e=typeof a=="string"?r?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!e)return;n=Gu(e,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ko(t,n){return(history.state?history.state.position-n:-1)+t}const dr=new Map;function Nu(t,n){dr.set(t,n)}function Vu(t){const n=dr.get(t);return dr.delete(t),n}let Hu=()=>location.protocol+"//"+location.host;function Vl(t,n){const{pathname:a,search:r,hash:e}=n,s=t.indexOf("#");if(s>-1){let i=e.includes(t.slice(s))?t.slice(s).length:1,l=e.slice(i);return l[0]!=="/"&&(l="/"+l),Yo(l,"")}return Yo(a,t)+r+e}function qu(t,n,a,r){let e=[],s=[],o=null;const i=({state:h})=>{const d=Vl(t,location),g=a.value,f=n.value;let m=0;if(h){if(a.value=d,n.value=h,o&&o===g){o=null;return}m=f?h.position-f.position:0}else r(d);e.forEach(y=>{y(a.value,g,{delta:m,type:ws.pop,direction:m?m>0?us.forward:us.back:us.unknown})})};function l(){o=a.value}function c(h){e.push(h);const d=()=>{const g=e.indexOf(h);g>-1&&e.splice(g,1)};return s.push(d),d}function p(){const{history:h}=window;h.state&&h.replaceState(gn({},h.state,{scroll:we()}),"")}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Xo(t,n,a,r=!1,e=!1){return{back:t,current:n,forward:a,replaced:r,position:window.history.length,scroll:e?we():null}}function Yu(t){const{history:n,location:a}=window,r={value:Vl(t,a)},e={value:n.state};e.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(l,c,p){const u=t.indexOf("#"),h=u>-1?(a.host&&document.querySelector("base")?t:t.slice(u))+l:Hu()+t+l;try{n[p?"replaceState":"pushState"](c,"",h),e.value=c}catch(d){console.error(d),a[p?"replace":"assign"](h)}}function o(l,c){const p=gn({},n.state,Xo(e.value.back,l,e.value.forward,!0),c,{position:e.value.position});s(l,p,!0),r.value=l}function i(l,c){const p=gn({},e.value,n.state,{forward:l,scroll:we()});s(p.current,p,!0);const u=gn({},Xo(r.value,l,null),{position:p.position+1},c);s(l,u,!1),r.value=l}return{location:r,state:e,push:i,replace:o}}function $u(t){t=Du(t);const n=Yu(t),a=qu(t,n.state,n.location,n.replace);function r(s,o=!0){o||a.pauseListeners(),history.go(s)}const e=gn({location:"",base:t,go:r,createHref:Uu.bind(null,t)},n,a);return Object.defineProperty(e,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>n.state.value}),e}function Ku(t){return typeof t=="string"||t&&typeof t=="object"}function Hl(t){return typeof t=="string"||typeof t=="symbol"}const ql=Symbol("");var Zo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zo||(Zo={}));function Va(t,n){return gn(new Error,{type:t,[ql]:!0},n)}function Lt(t,n){return t instanceof Error&&ql in t&&(n==null||!!(t.type&n))}const Qo="[^/]+?",Xu={sensitive:!1,strict:!1,start:!0,end:!0},Zu=/[.+*?^${}()[\]/\\]/g;function Qu(t,n){const a=gn({},Xu,n),r=[];let e=a.start?"^":"";const s=[];for(const c of t){const p=c.length?[]:[90];a.strict&&!c.length&&(e+="/");for(let u=0;u<c.length;u++){const h=c[u];let d=40+(a.sensitive?.25:0);if(h.type===0)u||(e+="/"),e+=h.value.replace(Zu,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:f,optional:m,regexp:y}=h;s.push({name:g,repeatable:f,optional:m});const b=y||Qo;if(b!==Qo){d+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+S.message)}}let _=f?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),e+=_,d+=20,m&&(d+=-8),f&&(d+=-20),b===".*"&&(d+=-50)}p.push(d)}r.push(p)}if(a.strict&&a.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}a.strict||(e+="/?"),a.end?e+="$":a.strict&&!e.endsWith("/")&&(e+="(?:/|$)");const o=new RegExp(e,a.sensitive?"":"i");function i(c){const p=c.match(o),u={};if(!p)return null;for(let h=1;h<p.length;h++){const d=p[h]||"",g=s[h-1];u[g.name]=d&&g.repeatable?d.split("/"):d}return u}function l(c){let p="",u=!1;for(const h of t){(!u||!p.endsWith("/"))&&(p+="/"),u=!1;for(const d of h)if(d.type===0)p+=d.value;else if(d.type===1){const{value:g,repeatable:f,optional:m}=d,y=g in c?c[g]:"";if(wt(y)&&!f)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=wt(y)?y.join("/"):y;if(!b)if(m)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);p+=b}}return p||"/"}return{re:o,score:r,keys:s,parse:i,stringify:l}}function Ju(t,n){let a=0;for(;a<t.length&&a<n.length;){const r=n[a]-t[a];if(r)return r;a++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function Yl(t,n){let a=0;const r=t.score,e=n.score;for(;a<r.length&&a<e.length;){const s=Ju(r[a],e[a]);if(s)return s;a++}if(Math.abs(e.length-r.length)===1){if(Jo(r))return 1;if(Jo(e))return-1}return e.length-r.length}function Jo(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const nf={type:0,value:""},tf=/[a-zA-Z0-9_]/;function af(t){if(!t)return[[]];if(t==="/")return[[nf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(d){throw new Error(`ERR (${a})/"${c}": ${d}`)}let a=0,r=a;const e=[];let s;function o(){s&&e.push(s),s=[]}let i=0,l,c="",p="";function u(){c&&(a===0?s.push({type:0,value:c}):a===1||a===2||a===3?(s.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:p,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;i<t.length;){if(l=t[i++],l==="\\"&&a!==2){r=a,a=4;continue}switch(a){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),a=1):h();break;case 4:h(),a=r;break;case 1:l==="("?a=2:tf.test(l)?h():(u(),a=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+l:a=3:p+=l;break;case 3:u(),a=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,p="";break;default:n("Unknown state");break}}return a===2&&n(`Unfinished custom RegExp for param "${c}"`),u(),o(),e}function sf(t,n,a){const r=Qu(af(t.path),a),e=gn(r,{record:t,parent:n,children:[],alias:[]});return n&&!e.record.aliasOf==!n.record.aliasOf&&n.children.push(e),e}function ef(t,n){const a=[],r=new Map;n=si({strict:!1,end:!0,sensitive:!1},n);function e(u){return r.get(u)}function s(u,h,d){const g=!d,f=ti(u);f.aliasOf=d&&d.record;const m=si(n,u),y=[f];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of S)y.push(ti(gn({},f,{components:d?d.record.components:f.components,path:k,aliasOf:d?d.record:f})))}let b,_;for(const S of y){const{path:k}=S;if(h&&k[0]!=="/"){const x=h.record.path,w=x[x.length-1]==="/"?"":"/";S.path=h.record.path+(k&&w+k)}if(b=sf(S,h,m),d?d.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&u.name&&!ai(b)&&o(u.name)),$l(b)&&l(b),f.children){const x=f.children;for(let w=0;w<x.length;w++)s(x[w],b,d&&d.children[w])}d=d||b}return _?()=>{o(_)}:cs}function o(u){if(Hl(u)){const h=r.get(u);h&&(r.delete(u),a.splice(a.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=a.indexOf(u);h>-1&&(a.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return a}function l(u){const h=lf(u,a);a.splice(h,0,u),u.record.name&&!ai(u)&&r.set(u.record.name,u)}function c(u,h){let d,g={},f,m;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Va(1,{location:u});m=d.record.name,g=gn(ni(h.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&ni(u.params,d.keys.map(_=>_.name))),f=d.stringify(g)}else if(u.path!=null)f=u.path,d=a.find(_=>_.re.test(f)),d&&(g=d.parse(f),m=d.record.name);else{if(d=h.name?r.get(h.name):a.find(_=>_.re.test(h.path)),!d)throw Va(1,{location:u,currentLocation:h});m=d.record.name,g=gn({},h.params,u.params),f=d.stringify(g)}const y=[];let b=d;for(;b;)y.unshift(b.record),b=b.parent;return{name:m,path:f,params:g,matched:y,meta:of(y)}}t.forEach(u=>s(u));function p(){a.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:p,getRoutes:i,getRecordMatcher:e}}function ni(t,n){const a={};for(const r of n)r in t&&(a[r]=t[r]);return a}function ti(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function rf(t){const n={},a=t.props||!1;if("component"in t)n.default=a;else for(const r in t.components)n[r]=typeof a=="object"?a[r]:a;return n}function ai(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function of(t){return t.reduce((n,a)=>gn(n,a.meta),{})}function si(t,n){const a={};for(const r in t)a[r]=r in n?n[r]:t[r];return a}function lf(t,n){let a=0,r=n.length;for(;a!==r;){const s=a+r>>1;Yl(t,n[s])<0?r=s:a=s+1}const e=df(t);return e&&(r=n.lastIndexOf(e,r-1)),r}function df(t){let n=t;for(;n=n.parent;)if($l(n)&&Yl(t,n)===0)return n}function $l({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pf(t){const n={};if(t===""||t==="?")return n;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let e=0;e<r.length;++e){const s=r[e].replace(Bl," "),o=s.indexOf("="),i=xs(o<0?s:s.slice(0,o)),l=o<0?null:xs(s.slice(o+1));if(i in n){let c=n[i];wt(c)||(c=n[i]=[c]),c.push(l)}else n[i]=l}return n}function ei(t){let n="";for(let a in t){const r=t[a];if(a=Eu(a),r==null){r!==void 0&&(n+=(n.length?"&":"")+a);continue}(wt(r)?r.map(s=>s&&lr(s)):[r&&lr(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+a,s!=null&&(n+="="+s))})}return n}function cf(t){const n={};for(const a in t){const r=t[a];r!==void 0&&(n[a]=wt(r)?r.map(e=>e==null?null:""+e):r==null?r:""+r)}return n}const uf=Symbol(""),ri=Symbol(""),_e=Symbol(""),Kr=Symbol(""),pr=Symbol("");function ns(){let t=[];function n(r){return t.push(r),()=>{const e=t.indexOf(r);e>-1&&t.splice(e,1)}}function a(){t=[]}return{add:n,list:()=>t.slice(),reset:a}}function Qt(t,n,a,r,e,s=o=>o()){const o=r&&(r.enterCallbacks[e]=r.enterCallbacks[e]||[]);return()=>new Promise((i,l)=>{const c=h=>{h===!1?l(Va(4,{from:a,to:n})):h instanceof Error?l(h):Ku(h)?l(Va(2,{from:n,to:h})):(o&&r.enterCallbacks[e]===o&&typeof h=="function"&&o.push(h),i())},p=s(()=>t.call(r&&r.instances[e],n,a,c));let u=Promise.resolve(p);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function Ge(t,n,a,r,e=s=>s()){const s=[];for(const o of t)for(const i in o.components){let l=o.components[i];if(!(n!=="beforeRouteEnter"&&!o.instances[i]))if(Ll(l)){const p=(l.__vccOpts||l)[n];p&&s.push(Qt(p,a,r,o,i,e))}else{let c=l();s.push(()=>c.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=yu(p)?p.default:p;o.mods[i]=p,o.components[i]=u;const d=(u.__vccOpts||u)[n];return d&&Qt(d,a,r,o,i,e)()}))}}return s}function oi(t){const n=xt(_e),a=xt(Kr),r=Kn(()=>{const l=bt(t.to);return n.resolve(l)}),e=Kn(()=>{const{matched:l}=r.value,{length:c}=l,p=l[c-1],u=a.matched;if(!p||!u.length)return-1;const h=u.findIndex(Na.bind(null,p));if(h>-1)return h;const d=ii(l[c-2]);return c>1&&ii(p)===d&&u[u.length-1].path!==d?u.findIndex(Na.bind(null,l[c-2])):h}),s=Kn(()=>e.value>-1&&mf(a.params,r.value.params)),o=Kn(()=>e.value>-1&&e.value===a.matched.length-1&&Nl(a.params,r.value.params));function i(l={}){if(gf(l)){const c=n[bt(t.replace)?"replace":"push"](bt(t.to)).catch(cs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Kn(()=>r.value.href),isActive:s,isExactActive:o,navigate:i}}function ff(t){return t.length===1?t[0]:t}const hf=ll({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:oi,setup(t,{slots:n}){const a=ke(oi(t)),{options:r}=xt(_e),e=Kn(()=>({[li(t.activeClass,r.linkActiveClass,"router-link-active")]:a.isActive,[li(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const s=n.default&&ff(n.default(a));return t.custom?s:Fl("a",{"aria-current":a.isExactActive?t.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:e.value},s)}}}),Xr=hf;function gf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function mf(t,n){for(const a in n){const r=n[a],e=t[a];if(typeof r=="string"){if(r!==e)return!1}else if(!wt(e)||e.length!==r.length||r.some((s,o)=>s!==e[o]))return!1}return!0}function ii(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const li=(t,n,a)=>t??n??a,kf=ll({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:a}){const r=xt(pr),e=Kn(()=>t.route||r.value),s=xt(ri,0),o=Kn(()=>{let c=bt(s);const{matched:p}=e.value;let u;for(;(u=p[c])&&!u.components;)c++;return c}),i=Kn(()=>e.value.matched[o.value]);Bs(ri,Kn(()=>o.value+1)),Bs(uf,i),Bs(pr,e);const l=Nt();return Us(()=>[l.value,i.value,t.name],([c,p,u],[h,d,g])=>{p&&(p.instances[u]=c,d&&d!==p&&c&&c===h&&(p.leaveGuards.size||(p.leaveGuards=d.leaveGuards),p.updateGuards.size||(p.updateGuards=d.updateGuards))),c&&p&&(!d||!Na(p,d)||!h)&&(p.enterCallbacks[u]||[]).forEach(f=>f(c))},{flush:"post"}),()=>{const c=e.value,p=t.name,u=i.value,h=u&&u.components[p];if(!h)return di(a.default,{Component:h,route:c});const d=u.props[p],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Fl(h,gn({},g,n,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(u.instances[p]=null)},ref:l}));return di(a.default,{Component:m,route:c})||m}}});function di(t,n){if(!t)return null;const a=t(n);return a.length===1?a[0]:a}const Kl=kf;function yf(t){const n=ef(t.routes,t),a=t.parseQuery||pf,r=t.stringifyQuery||ei,e=t.history,s=ns(),o=ns(),i=ns(),l=Ap(Kt);let c=Kt;Ma&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Be.bind(null,I=>""+I),u=Be.bind(null,Ru),h=Be.bind(null,xs);function d(I,G){let N,Y;return Hl(I)?(N=n.getRecordMatcher(I),Y=G):Y=I,n.addRoute(Y,N)}function g(I){const G=n.getRecordMatcher(I);G&&n.removeRoute(G)}function f(){return n.getRoutes().map(I=>I.record)}function m(I){return!!n.getRecordMatcher(I)}function y(I,G){if(G=gn({},G||l.value),typeof I=="string"){const R=Ue(a,I,G.path),F=n.resolve({path:R.path},G),D=e.createHref(R.fullPath);return gn(R,F,{params:h(F.params),hash:xs(R.hash),redirectedFrom:void 0,href:D})}let N;if(I.path!=null)N=gn({},I,{path:Ue(a,I.path,G.path).path});else{const R=gn({},I.params);for(const F in R)R[F]==null&&delete R[F];N=gn({},I,{params:u(R)}),G.params=u(G.params)}const Y=n.resolve(N,G),an=I.hash||"";Y.params=p(h(Y.params));const E=Iu(r,gn({},I,{hash:Pu(an),path:Y.path})),M=e.createHref(E);return gn({fullPath:E,hash:an,query:r===ei?cf(I.query):I.query||{}},Y,{redirectedFrom:void 0,href:M})}function b(I){return typeof I=="string"?Ue(a,I,l.value.path):gn({},I)}function _(I,G){if(c!==I)return Va(8,{from:G,to:I})}function S(I){return w(I)}function k(I){return S(gn(b(I),{replace:!0}))}function x(I){const G=I.matched[I.matched.length-1];if(G&&G.redirect){const{redirect:N}=G;let Y=typeof N=="function"?N(I):N;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=b(Y):{path:Y},Y.params={}),gn({query:I.query,hash:I.hash,params:Y.path!=null?{}:I.params},Y)}}function w(I,G){const N=c=y(I),Y=l.value,an=I.state,E=I.force,M=I.replace===!0,R=x(N);if(R)return w(gn(b(R),{state:typeof R=="object"?gn({},an,R.state):an,force:E,replace:M}),G||N);const F=N;F.redirectedFrom=G;let D;return!E&&Fu(r,Y,N)&&(D=Va(16,{to:F,from:Y}),dn(Y,Y,!0,!1)),(D?Promise.resolve(D):T(F,Y)).catch(B=>Lt(B)?Lt(B,2)?B:on(B):V(B,F,Y)).then(B=>{if(B){if(Lt(B,2))return w(gn({replace:M},b(B.to),{state:typeof B.to=="object"?gn({},an,B.to.state):an,force:E}),G||F)}else B=C(F,Y,!0,M,an);return P(F,Y,B),B})}function v(I,G){const N=_(I,G);return N?Promise.reject(N):Promise.resolve()}function j(I){const G=pn.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(I):I()}function T(I,G){let N;const[Y,an,E]=vf(I,G);N=Ge(Y.reverse(),"beforeRouteLeave",I,G);for(const R of Y)R.leaveGuards.forEach(F=>{N.push(Qt(F,I,G))});const M=v.bind(null,I,G);return N.push(M),Q(N).then(()=>{N=[];for(const R of s.list())N.push(Qt(R,I,G));return N.push(M),Q(N)}).then(()=>{N=Ge(an,"beforeRouteUpdate",I,G);for(const R of an)R.updateGuards.forEach(F=>{N.push(Qt(F,I,G))});return N.push(M),Q(N)}).then(()=>{N=[];for(const R of E)if(R.beforeEnter)if(wt(R.beforeEnter))for(const F of R.beforeEnter)N.push(Qt(F,I,G));else N.push(Qt(R.beforeEnter,I,G));return N.push(M),Q(N)}).then(()=>(I.matched.forEach(R=>R.enterCallbacks={}),N=Ge(E,"beforeRouteEnter",I,G,j),N.push(M),Q(N))).then(()=>{N=[];for(const R of o.list())N.push(Qt(R,I,G));return N.push(M),Q(N)}).catch(R=>Lt(R,8)?R:Promise.reject(R))}function P(I,G,N){i.list().forEach(Y=>j(()=>Y(I,G,N)))}function C(I,G,N,Y,an){const E=_(I,G);if(E)return E;const M=G===Kt,R=Ma?history.state:{};N&&(Y||M?e.replace(I.fullPath,gn({scroll:M&&R&&R.scroll},an)):e.push(I.fullPath,an)),l.value=I,dn(I,G,N,M),on()}let A;function z(){A||(A=e.listen((I,G,N)=>{if(!un.listening)return;const Y=y(I),an=x(Y);if(an){w(gn(an,{replace:!0,force:!0}),Y).catch(cs);return}c=Y;const E=l.value;Ma&&Nu(Ko(E.fullPath,N.delta),we()),T(Y,E).catch(M=>Lt(M,12)?M:Lt(M,2)?(w(gn(b(M.to),{force:!0}),Y).then(R=>{Lt(R,20)&&!N.delta&&N.type===ws.pop&&e.go(-1,!1)}).catch(cs),Promise.reject()):(N.delta&&e.go(-N.delta,!1),V(M,Y,E))).then(M=>{M=M||C(Y,E,!1),M&&(N.delta&&!Lt(M,8)?e.go(-N.delta,!1):N.type===ws.pop&&Lt(M,20)&&e.go(-1,!1)),P(Y,E,M)}).catch(cs)}))}let O=ns(),U=ns(),L;function V(I,G,N){on(I);const Y=U.list();return Y.length?Y.forEach(an=>an(I,G,N)):console.error(I),Promise.reject(I)}function nn(){return L&&l.value!==Kt?Promise.resolve():new Promise((I,G)=>{O.add([I,G])})}function on(I){return L||(L=!I,z(),O.list().forEach(([G,N])=>I?N(I):G()),O.reset()),I}function dn(I,G,N,Y){const{scrollBehavior:an}=t;if(!Ma||!an)return Promise.resolve();const E=!N&&Vu(Ko(I.fullPath,0))||(Y||!N)&&history.state&&history.state.scroll||null;return Br().then(()=>an(I,G,E)).then(M=>M&&Wu(M)).catch(M=>V(M,I,G))}const sn=I=>e.go(I);let cn;const pn=new Set,un={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:n.clearRoutes,hasRoute:m,getRoutes:f,resolve:y,options:t,push:S,replace:k,go:sn,back:()=>sn(-1),forward:()=>sn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:i.add,onError:U.add,isReady:nn,install(I){const G=this;I.component("RouterLink",Xr),I.component("RouterView",Kl),I.config.globalProperties.$router=G,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>bt(l)}),Ma&&!cn&&l.value===Kt&&(cn=!0,S(e.location).catch(an=>{}));const N={};for(const an in Kt)Object.defineProperty(N,an,{get:()=>l.value[an],enumerable:!0});I.provide(_e,G),I.provide(Kr,Ji(N)),I.provide(pr,l);const Y=I.unmount;pn.add(I),I.unmount=function(){pn.delete(I),pn.size<1&&(c=Kt,A&&A(),A=null,l.value=Kt,cn=!1,L=!1),Y()}}};function Q(I){return I.reduce((G,N)=>G.then(()=>j(N)),Promise.resolve())}return un}function vf(t,n){const a=[],r=[],e=[],s=Math.max(n.matched.length,t.matched.length);for(let o=0;o<s;o++){const i=n.matched[o];i&&(t.matched.find(c=>Na(c,i))?r.push(i):a.push(i));const l=t.matched[o];l&&(n.matched.find(c=>Na(c,l))||e.push(l))}return[a,r,e]}function bf(){return xt(_e)}function xf(t){return xt(Kr)}const wf={__name:"App",setup(t){return(n,a)=>(In(),Ml(bt(Kl)))}};var pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vs={exports:{}},_f=Vs.exports,ci;function Sf(){return ci||(ci=1,function(t,n){(function(a,r){t.exports=r()})(_f,function(){return function(a){function r(s){if(e[s])return e[s].exports;var o=e[s]={exports:{},id:s,loaded:!1};return a[s].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=a,r.c=e,r.p="dist/",r(0)}([function(a,r,e){function s(z){return z&&z.__esModule?z:{default:z}}var o=Object.assign||function(z){for(var O=1;O<arguments.length;O++){var U=arguments[O];for(var L in U)Object.prototype.hasOwnProperty.call(U,L)&&(z[L]=U[L])}return z},i=e(1),l=(s(i),e(6)),c=s(l),p=e(7),u=s(p),h=e(8),d=s(h),g=e(9),f=s(g),m=e(10),y=s(m),b=e(11),_=s(b),S=e(14),k=s(S),x=[],w=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var z=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(z&&(w=!0),w)return x=(0,_.default)(x,v),(0,y.default)(x,v.once),x},T=function(){x=(0,k.default)(),j()},P=function(){x.forEach(function(z,O){z.node.removeAttribute("data-aos"),z.node.removeAttribute("data-aos-easing"),z.node.removeAttribute("data-aos-duration"),z.node.removeAttribute("data-aos-delay")})},C=function(z){return z===!0||z==="mobile"&&f.default.mobile()||z==="phone"&&f.default.phone()||z==="tablet"&&f.default.tablet()||typeof z=="function"&&z()===!0},A=function(z){v=o(v,z),x=(0,k.default)();var O=document.all&&!window.atob;return C(v.disable)||O?P():(v.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){j(!0)}):document.addEventListener(v.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,u.default)(j,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(j,v.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,y.default)(x,v.once)},v.throttleDelay)),v.disableMutationObserver||d.default.ready("[data-aos]",T),x)};a.exports={init:A,refresh:j,refreshHard:T}},function(a,r){},,,,,function(a,r){(function(e){function s(C,A,z){function O(R){var F=pn,D=un;return pn=un=void 0,Y=R,I=C.apply(D,F)}function U(R){return Y=R,G=setTimeout(nn,A),an?O(R):I}function L(R){var F=R-N,D=R-Y,B=A-F;return E?T(B,Q-D):B}function V(R){var F=R-N,D=R-Y;return N===void 0||F>=A||F<0||E&&D>=Q}function nn(){var R=P();return V(R)?on(R):void(G=setTimeout(nn,L(R)))}function on(R){return G=void 0,M&&pn?O(R):(pn=un=void 0,I)}function dn(){G!==void 0&&clearTimeout(G),Y=0,pn=N=un=G=void 0}function sn(){return G===void 0?I:on(P())}function cn(){var R=P(),F=V(R);if(pn=arguments,un=this,N=R,F){if(G===void 0)return U(N);if(E)return G=setTimeout(nn,A),O(N)}return G===void 0&&(G=setTimeout(nn,A)),I}var pn,un,Q,I,G,N,Y=0,an=!1,E=!1,M=!0;if(typeof C!="function")throw new TypeError(h);return A=p(A)||0,i(z)&&(an=!!z.leading,E="maxWait"in z,Q=E?j(p(z.maxWait)||0,A):Q,M="trailing"in z?!!z.trailing:M),cn.cancel=dn,cn.flush=sn,cn}function o(C,A,z){var O=!0,U=!0;if(typeof C!="function")throw new TypeError(h);return i(z)&&(O="leading"in z?!!z.leading:O,U="trailing"in z?!!z.trailing:U),s(C,A,{leading:O,maxWait:A,trailing:U})}function i(C){var A=typeof C>"u"?"undefined":u(C);return!!C&&(A=="object"||A=="function")}function l(C){return!!C&&(typeof C>"u"?"undefined":u(C))=="object"}function c(C){return(typeof C>"u"?"undefined":u(C))=="symbol"||l(C)&&v.call(C)==g}function p(C){if(typeof C=="number")return C;if(c(C))return d;if(i(C)){var A=typeof C.valueOf=="function"?C.valueOf():C;C=i(A)?A+"":A}if(typeof C!="string")return C===0?C:+C;C=C.replace(f,"");var z=y.test(C);return z||b.test(C)?_(C.slice(2),z?2:8):m.test(C)?d:+C}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},h="Expected a function",d=NaN,g="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,b=/^0o[0-7]+$/i,_=parseInt,S=(typeof e>"u"?"undefined":u(e))=="object"&&e&&e.Object===Object&&e,k=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,x=S||k||Function("return this")(),w=Object.prototype,v=w.toString,j=Math.max,T=Math.min,P=function(){return x.Date.now()};a.exports=o}).call(r,function(){return this}())},function(a,r){(function(e){function s(P,C,A){function z(M){var R=cn,F=pn;return cn=pn=void 0,N=M,Q=P.apply(F,R)}function O(M){return N=M,I=setTimeout(V,C),Y?z(M):Q}function U(M){var R=M-G,F=M-N,D=C-R;return an?j(D,un-F):D}function L(M){var R=M-G,F=M-N;return G===void 0||R>=C||R<0||an&&F>=un}function V(){var M=T();return L(M)?nn(M):void(I=setTimeout(V,U(M)))}function nn(M){return I=void 0,E&&cn?z(M):(cn=pn=void 0,Q)}function on(){I!==void 0&&clearTimeout(I),N=0,cn=G=pn=I=void 0}function dn(){return I===void 0?Q:nn(T())}function sn(){var M=T(),R=L(M);if(cn=arguments,pn=this,G=M,R){if(I===void 0)return O(G);if(an)return I=setTimeout(V,C),z(G)}return I===void 0&&(I=setTimeout(V,C)),Q}var cn,pn,un,Q,I,G,N=0,Y=!1,an=!1,E=!0;if(typeof P!="function")throw new TypeError(u);return C=c(C)||0,o(A)&&(Y=!!A.leading,an="maxWait"in A,un=an?v(c(A.maxWait)||0,C):un,E="trailing"in A?!!A.trailing:E),sn.cancel=on,sn.flush=dn,sn}function o(P){var C=typeof P>"u"?"undefined":p(P);return!!P&&(C=="object"||C=="function")}function i(P){return!!P&&(typeof P>"u"?"undefined":p(P))=="object"}function l(P){return(typeof P>"u"?"undefined":p(P))=="symbol"||i(P)&&w.call(P)==d}function c(P){if(typeof P=="number")return P;if(l(P))return h;if(o(P)){var C=typeof P.valueOf=="function"?P.valueOf():P;P=o(C)?C+"":C}if(typeof P!="string")return P===0?P:+P;P=P.replace(g,"");var A=m.test(P);return A||y.test(P)?b(P.slice(2),A?2:8):f.test(P)?h:+P}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},u="Expected a function",h=NaN,d="[object Symbol]",g=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,y=/^0o[0-7]+$/i,b=parseInt,_=(typeof e>"u"?"undefined":p(e))=="object"&&e&&e.Object===Object&&e,S=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,k=_||S||Function("return this")(),x=Object.prototype,w=x.toString,v=Math.max,j=Math.min,T=function(){return k.Date.now()};a.exports=s}).call(r,function(){return this}())},function(a,r){function e(p){var u=void 0,h=void 0;for(u=0;u<p.length;u+=1)if(h=p[u],h.dataset&&h.dataset.aos||h.children&&e(h.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function i(p,u){var h=window.document,d=s(),g=new d(l);c=u,g.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(p){p&&p.forEach(function(u){var h=Array.prototype.slice.call(u.addedNodes),d=Array.prototype.slice.call(u.removedNodes),g=h.concat(d);if(e(g))return c()})}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){};r.default={isSupported:o,ready:i}},function(a,r){function e(h,d){if(!(h instanceof d))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function h(d,g){for(var f=0;f<g.length;f++){var m=g[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(d,m.key,m)}}return function(d,g,f){return g&&h(d.prototype,g),f&&h(d,f),d}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function h(){e(this,h)}return o(h,[{key:"phone",value:function(){var d=s();return!(!i.test(d)&&!l.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=s();return!(!c.test(d)&&!p.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();r.default=new u},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(o,i,l){var c=o.node.getAttribute("data-aos-once");i>o.position?o.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,i){var l=window.pageYOffset,c=window.innerHeight;o.forEach(function(p,u){e(p,c+l,i)})};r.default=s},function(a,r,e){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(12),i=s(o),l=function(c,p){return c.forEach(function(u,h){u.node.classList.add("aos-init"),u.position=(0,i.default)(u.node,p.offset)}),c};r.default=l},function(a,r,e){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(13),i=s(o),l=function(c,p){var u=0,h=0,d=window.innerHeight,g={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(h=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(c=document.querySelectorAll(g.anchor)[0]),u=(0,i.default)(c).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=d/2;break;case"bottom-center":u+=d/2+c.offsetHeight;break;case"center-center":u+=d/2+c.offsetHeight/2;break;case"top-top":u+=d;break;case"bottom-top":u+=c.offsetHeight+d;break;case"center-top":u+=c.offsetHeight/2+d}return g.anchorPlacement||g.offset||isNaN(p)||(h=p),u+h};r.default=l},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(s){for(var o=0,i=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),i+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:i,left:o}};r.default=e},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};r.default=e}])})}(Vs)),Vs.exports}var jf=Sf();const Zl=Xl(jf),Cf={class:"min-h-20"},Tf={__name:"Typewriter",setup(t){const n=[["Build Stunning Visuals","All With The Classic C++"],["Let's Innovate","With Cpp Playgrounds!"],["Less time","More productivity."],["Work Smart","Not Hard"],["Let's Shine","With Cpp Playgrounds!"]],a=Nt(null),r=Nt(null);let e=0,s;const o=()=>{const[i,l]=n[e];a.value.classList.remove("opacity-100"),r.value.classList.remove("opacity-100"),a.value.classList.add("opacity-0"),r.value.classList.add("opacity-0"),setTimeout(()=>{a.value.textContent=i,r.value.textContent="",a.value.classList.remove("opacity-0"),a.value.classList.add("opacity-100"),setTimeout(()=>{r.value.textContent=l,r.value.classList.remove("opacity-0"),r.value.classList.add("opacity-100")},500)},500),e=(e+1)%n.length,setTimeout(()=>{a.value.classList.remove("opacity-100"),a.value.classList.add("opacity-0"),r.value.classList.remove("opacity-100"),r.value.classList.add("opacity-0")},3e3)};return As(()=>{o(),s=setInterval(o,4e3)}),Wr(()=>{clearInterval(s)}),(i,l)=>(In(),Dn("div",Cf,[Z("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part1",ref:a},null,512),Z("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part2",ref:r},null,512)]))}};var Hs={exports:{}};/*!
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
 */var Pf=Hs.exports,ui;function Ef(){return ui||(ui=1,function(t,n){(function(r,e){t.exports=e()})(Pf,function(){return function(a){var r={};function e(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return a[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=a,e.c=r,e.d=function(s,o,i){e.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:i})},e.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,o){if(o&1&&(s=e(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var l in s)e.d(i,l,(function(c){return s[c]}).bind(null,l));return i},e.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(o,"a",o),o},e.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},e.p="",e(e.s=20)}([function(a,r){var e={};a.exports=e,function(){e._baseDelta=1e3/60,e._nextId=0,e._seed=0,e._nowStartTime=+new Date,e._warnedOnce={},e._decomp=null,e.extend=function(o,i){var l,c;typeof i=="boolean"?(l=2,c=i):(l=1,c=!0);for(var p=l;p<arguments.length;p++){var u=arguments[p];if(u)for(var h in u)c&&u[h]&&u[h].constructor===Object&&(!o[h]||o[h].constructor===Object)?(o[h]=o[h]||{},e.extend(o[h],c,u[h])):o[h]=u[h]}return o},e.clone=function(o,i){return e.extend({},i,o)},e.keys=function(o){if(Object.keys)return Object.keys(o);var i=[];for(var l in o)i.push(l);return i},e.values=function(o){var i=[];if(Object.keys){for(var l=Object.keys(o),c=0;c<l.length;c++)i.push(o[l[c]]);return i}for(var p in o)i.push(o[p]);return i},e.get=function(o,i,l,c){i=i.split(".").slice(l,c);for(var p=0;p<i.length;p+=1)o=o[i[p]];return o},e.set=function(o,i,l,c,p){var u=i.split(".").slice(c,p);return e.get(o,i,0,-1)[u[u.length-1]]=l,l},e.shuffle=function(o){for(var i=o.length-1;i>0;i--){var l=Math.floor(e.random()*(i+1)),c=o[i];o[i]=o[l],o[l]=c}return o},e.choose=function(o){return o[Math.floor(e.random()*o.length)]},e.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},e.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},e.isFunction=function(o){return typeof o=="function"},e.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},e.isString=function(o){return toString.call(o)==="[object String]"},e.clamp=function(o,i,l){return o<i?i:o>l?l:o},e.sign=function(o){return o<0?-1:1},e.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-e._nowStartTime},e.random=function(o,i){return o=typeof o<"u"?o:0,i=typeof i<"u"?i:1,o+s()*(i-o)};var s=function(){return e._seed=(e._seed*9301+49297)%233280,e._seed/233280};e.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},e.logLevel=1,e.log=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.info=function(){console&&e.logLevel>0&&e.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warn=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");e._warnedOnce[o]||(e.warn(o),e._warnedOnce[o]=!0)},e.deprecated=function(o,i,l){o[i]=e.chain(function(){e.warnOnce("🔅 deprecated 🔅",l)},o[i])},e.nextId=function(){return e._nextId++},e.indexOf=function(o,i){if(o.indexOf)return o.indexOf(i);for(var l=0;l<o.length;l++)if(o[l]===i)return l;return-1},e.map=function(o,i){if(o.map)return o.map(i);for(var l=[],c=0;c<o.length;c+=1)l.push(i(o[c]));return l},e.topologicalSort=function(o){var i=[],l=[],c=[];for(var p in o)!l[p]&&!c[p]&&e._topologicalSort(p,l,c,o,i);return i},e._topologicalSort=function(o,i,l,c,p){var u=c[o]||[];l[o]=!0;for(var h=0;h<u.length;h+=1){var d=u[h];l[d]||i[d]||e._topologicalSort(d,i,l,c,p)}l[o]=!1,i[o]=!0,p.push(o)},e.chain=function(){for(var o=[],i=0;i<arguments.length;i+=1){var l=arguments[i];l._chained?o.push.apply(o,l._chained):o.push(l)}var c=function(){for(var p,u=new Array(arguments.length),h=0,d=arguments.length;h<d;h++)u[h]=arguments[h];for(h=0;h<o.length;h+=1){var g=o[h].apply(p,u);typeof g<"u"&&(p=g)}return p};return c._chained=o,c},e.chainPathBefore=function(o,i,l){return e.set(o,i,e.chain(l,e.get(o,i)))},e.chainPathAfter=function(o,i,l){return e.set(o,i,e.chain(e.get(o,i),l))},e.setDecomp=function(o){e._decomp=o},e.getDecomp=function(){var o=e._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof pi<"u"&&(o=pi.decomp)}catch{o=null}return o}}()},function(a,r){var e={};a.exports=e,function(){e.create=function(s){var o={min:{x:0,y:0},max:{x:0,y:0}};return s&&e.update(o,s),o},e.update=function(s,o,i){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var l=0;l<o.length;l++){var c=o[l];c.x>s.max.x&&(s.max.x=c.x),c.x<s.min.x&&(s.min.x=c.x),c.y>s.max.y&&(s.max.y=c.y),c.y<s.min.y&&(s.min.y=c.y)}i&&(i.x>0?s.max.x+=i.x:s.min.x+=i.x,i.y>0?s.max.y+=i.y:s.min.y+=i.y)},e.contains=function(s,o){return o.x>=s.min.x&&o.x<=s.max.x&&o.y>=s.min.y&&o.y<=s.max.y},e.overlaps=function(s,o){return s.min.x<=o.max.x&&s.max.x>=o.min.x&&s.max.y>=o.min.y&&s.min.y<=o.max.y},e.translate=function(s,o){s.min.x+=o.x,s.max.x+=o.x,s.min.y+=o.y,s.max.y+=o.y},e.shift=function(s,o){var i=s.max.x-s.min.x,l=s.max.y-s.min.y;s.min.x=o.x,s.max.x=o.x+i,s.min.y=o.y,s.max.y=o.y+l}}()},function(a,r){var e={};a.exports=e,function(){e.create=function(s,o){return{x:s||0,y:o||0}},e.clone=function(s){return{x:s.x,y:s.y}},e.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},e.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},e.rotate=function(s,o,i){var l=Math.cos(o),c=Math.sin(o);i||(i={});var p=s.x*l-s.y*c;return i.y=s.x*c+s.y*l,i.x=p,i},e.rotateAbout=function(s,o,i,l){var c=Math.cos(o),p=Math.sin(o);l||(l={});var u=i.x+((s.x-i.x)*c-(s.y-i.y)*p);return l.y=i.y+((s.x-i.x)*p+(s.y-i.y)*c),l.x=u,l},e.normalise=function(s){var o=e.magnitude(s);return o===0?{x:0,y:0}:{x:s.x/o,y:s.y/o}},e.dot=function(s,o){return s.x*o.x+s.y*o.y},e.cross=function(s,o){return s.x*o.y-s.y*o.x},e.cross3=function(s,o,i){return(o.x-s.x)*(i.y-s.y)-(o.y-s.y)*(i.x-s.x)},e.add=function(s,o,i){return i||(i={}),i.x=s.x+o.x,i.y=s.y+o.y,i},e.sub=function(s,o,i){return i||(i={}),i.x=s.x-o.x,i.y=s.y-o.y,i},e.mult=function(s,o){return{x:s.x*o,y:s.y*o}},e.div=function(s,o){return{x:s.x/o,y:s.y/o}},e.perp=function(s,o){return o=o===!0?-1:1,{x:o*-s.y,y:o*s.x}},e.neg=function(s){return{x:-s.x,y:-s.y}},e.angle=function(s,o){return Math.atan2(o.y-s.y,o.x-s.x)},e._temp=[e.create(),e.create(),e.create(),e.create(),e.create(),e.create()]}()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(0);(function(){s.create=function(l,c){for(var p=[],u=0;u<l.length;u++){var h=l[u],d={x:h.x,y:h.y,index:u,body:c,isInternal:!1};p.push(d)}return p},s.fromPath=function(l,c){var p=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,u=[];return l.replace(p,function(h,d,g){u.push({x:parseFloat(d),y:parseFloat(g)})}),s.create(u,c)},s.centre=function(l){for(var c=s.area(l,!0),p={x:0,y:0},u,h,d,g=0;g<l.length;g++)d=(g+1)%l.length,u=o.cross(l[g],l[d]),h=o.mult(o.add(l[g],l[d]),u),p=o.add(p,h);return o.div(p,6*c)},s.mean=function(l){for(var c={x:0,y:0},p=0;p<l.length;p++)c.x+=l[p].x,c.y+=l[p].y;return o.div(c,l.length)},s.area=function(l,c){for(var p=0,u=l.length-1,h=0;h<l.length;h++)p+=(l[u].x-l[h].x)*(l[u].y+l[h].y),u=h;return c?p/2:Math.abs(p)/2},s.inertia=function(l,c){for(var p=0,u=0,h=l,d,g,f=0;f<h.length;f++)g=(f+1)%h.length,d=Math.abs(o.cross(h[g],h[f])),p+=d*(o.dot(h[g],h[g])+o.dot(h[g],h[f])+o.dot(h[f],h[f])),u+=d;return c/6*(p/u)},s.translate=function(l,c,p){p=typeof p<"u"?p:1;var u=l.length,h=c.x*p,d=c.y*p,g;for(g=0;g<u;g++)l[g].x+=h,l[g].y+=d;return l},s.rotate=function(l,c,p){if(c!==0){var u=Math.cos(c),h=Math.sin(c),d=p.x,g=p.y,f=l.length,m,y,b,_;for(_=0;_<f;_++)m=l[_],y=m.x-d,b=m.y-g,m.x=d+(y*u-b*h),m.y=g+(y*h+b*u);return l}},s.contains=function(l,c){for(var p=c.x,u=c.y,h=l.length,d=l[h-1],g,f=0;f<h;f++){if(g=l[f],(p-d.x)*(g.y-d.y)+(u-d.y)*(d.x-g.x)>0)return!1;d=g}return!0},s.scale=function(l,c,p,u){if(c===1&&p===1)return l;u=u||s.centre(l);for(var h,d,g=0;g<l.length;g++)h=l[g],d=o.sub(h,u),l[g].x=u.x+d.x*c,l[g].y=u.y+d.y*p;return l},s.chamfer=function(l,c,p,u,h){typeof c=="number"?c=[c]:c=c||[8],p=typeof p<"u"?p:-1,u=u||2,h=h||14;for(var d=[],g=0;g<l.length;g++){var f=l[g-1>=0?g-1:l.length-1],m=l[g],y=l[(g+1)%l.length],b=c[g<c.length?g:c.length-1];if(b===0){d.push(m);continue}var _=o.normalise({x:m.y-f.y,y:f.x-m.x}),S=o.normalise({x:y.y-m.y,y:m.x-y.x}),k=Math.sqrt(2*Math.pow(b,2)),x=o.mult(i.clone(_),b),w=o.normalise(o.mult(o.add(_,S),.5)),v=o.sub(m,o.mult(w,k)),j=p;p===-1&&(j=Math.pow(b,.32)*1.75),j=i.clamp(j,u,h),j%2===1&&(j+=1);for(var T=Math.acos(o.dot(_,S)),P=T/j,C=0;C<j;C++)d.push(o.add(o.rotate(x,P*C),v))}return d},s.clockwiseSort=function(l){var c=s.mean(l);return l.sort(function(p,u){return o.angle(c,p)-o.angle(c,u)}),l},s.isConvex=function(l){var c=0,p=l.length,u,h,d,g;if(p<3)return null;for(u=0;u<p;u++)if(h=(u+1)%p,d=(u+2)%p,g=(l[h].x-l[u].x)*(l[d].y-l[h].y),g-=(l[h].y-l[u].y)*(l[d].x-l[h].x),g<0?c|=1:g>0&&(c|=2),c===3)return!1;return c!==0?!0:null},s.hull=function(l){var c=[],p=[],u,h;for(l=l.slice(0),l.sort(function(d,g){var f=d.x-g.x;return f!==0?f:d.y-g.y}),h=0;h<l.length;h+=1){for(u=l[h];p.length>=2&&o.cross3(p[p.length-2],p[p.length-1],u)<=0;)p.pop();p.push(u)}for(h=l.length-1;h>=0;h-=1){for(u=l[h];c.length>=2&&o.cross3(c[c.length-2],c[c.length-1],u)<=0;)c.pop();c.push(u)}return c.pop(),p.pop(),c.concat(p)}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(2),l=e(7),c=e(0),p=e(1),u=e(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(d){var g={id:c.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},f=c.extend(g,d);return h(f,d),f},s.nextGroup=function(d){return d?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var h=function(d,g){g=g||{},s.set(d,{bounds:d.bounds||p.create(d.vertices),positionPrev:d.positionPrev||i.clone(d.position),anglePrev:d.anglePrev||d.angle,vertices:d.vertices,parts:d.parts||[d],isStatic:d.isStatic,isSleeping:d.isSleeping,parent:d.parent||d}),o.rotate(d.vertices,d.angle,d.position),u.rotate(d.axes,d.angle),p.update(d.bounds,d.vertices,d.velocity),s.set(d,{axes:g.axes||d.axes,area:g.area||d.area,mass:g.mass||d.mass,inertia:g.inertia||d.inertia});var f=d.isStatic?"#14151f":c.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=d.isStatic?"#555":"#ccc",y=d.isStatic&&d.render.fillStyle===null?1:0;d.render.fillStyle=d.render.fillStyle||f,d.render.strokeStyle=d.render.strokeStyle||m,d.render.lineWidth=d.render.lineWidth||y,d.render.sprite.xOffset+=-(d.bounds.min.x-d.position.x)/(d.bounds.max.x-d.bounds.min.x),d.render.sprite.yOffset+=-(d.bounds.min.y-d.position.y)/(d.bounds.max.y-d.bounds.min.y)};s.set=function(d,g,f){var m;typeof g=="string"&&(m=g,g={},g[m]=f);for(m in g)if(Object.prototype.hasOwnProperty.call(g,m))switch(f=g[m],m){case"isStatic":s.setStatic(d,f);break;case"isSleeping":l.set(d,f);break;case"mass":s.setMass(d,f);break;case"density":s.setDensity(d,f);break;case"inertia":s.setInertia(d,f);break;case"vertices":s.setVertices(d,f);break;case"position":s.setPosition(d,f);break;case"angle":s.setAngle(d,f);break;case"velocity":s.setVelocity(d,f);break;case"angularVelocity":s.setAngularVelocity(d,f);break;case"speed":s.setSpeed(d,f);break;case"angularSpeed":s.setAngularSpeed(d,f);break;case"parts":s.setParts(d,f);break;case"centre":s.setCentre(d,f);break;default:d[m]=f}},s.setStatic=function(d,g){for(var f=0;f<d.parts.length;f++){var m=d.parts[f];g?(m.isStatic||(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia}),m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null),m.isStatic=g}},s.setMass=function(d,g){var f=d.inertia/(d.mass/6);d.inertia=f*(g/6),d.inverseInertia=1/d.inertia,d.mass=g,d.inverseMass=1/d.mass,d.density=d.mass/d.area},s.setDensity=function(d,g){s.setMass(d,g*d.area),d.density=g},s.setInertia=function(d,g){d.inertia=g,d.inverseInertia=1/d.inertia},s.setVertices=function(d,g){g[0].body===d?d.vertices=g:d.vertices=o.create(g,d),d.axes=u.fromVertices(d.vertices),d.area=o.area(d.vertices),s.setMass(d,d.density*d.area);var f=o.centre(d.vertices);o.translate(d.vertices,f,-1),s.setInertia(d,s._inertiaScale*o.inertia(d.vertices,d.mass)),o.translate(d.vertices,d.position),p.update(d.bounds,d.vertices,d.velocity)},s.setParts=function(d,g,f){var m;for(g=g.slice(0),d.parts.length=0,d.parts.push(d),d.parent=d,m=0;m<g.length;m++){var y=g[m];y!==d&&(y.parent=d,d.parts.push(y))}if(d.parts.length!==1){if(f=typeof f<"u"?f:!0,f){var b=[];for(m=0;m<g.length;m++)b=b.concat(g[m].vertices);o.clockwiseSort(b);var _=o.hull(b),S=o.centre(_);s.setVertices(d,_),o.translate(d.vertices,S)}var k=s._totalProperties(d);d.area=k.area,d.parent=d,d.position.x=k.centre.x,d.position.y=k.centre.y,d.positionPrev.x=k.centre.x,d.positionPrev.y=k.centre.y,s.setMass(d,k.mass),s.setInertia(d,k.inertia),s.setPosition(d,k.centre)}},s.setCentre=function(d,g,f){f?(d.positionPrev.x+=g.x,d.positionPrev.y+=g.y,d.position.x+=g.x,d.position.y+=g.y):(d.positionPrev.x=g.x-(d.position.x-d.positionPrev.x),d.positionPrev.y=g.y-(d.position.y-d.positionPrev.y),d.position.x=g.x,d.position.y=g.y)},s.setPosition=function(d,g,f){var m=i.sub(g,d.position);f?(d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.velocity.x=m.x,d.velocity.y=m.y,d.speed=i.magnitude(m)):(d.positionPrev.x+=m.x,d.positionPrev.y+=m.y);for(var y=0;y<d.parts.length;y++){var b=d.parts[y];b.position.x+=m.x,b.position.y+=m.y,o.translate(b.vertices,m),p.update(b.bounds,b.vertices,d.velocity)}},s.setAngle=function(d,g,f){var m=g-d.angle;f?(d.anglePrev=d.angle,d.angularVelocity=m,d.angularSpeed=Math.abs(m)):d.anglePrev+=m;for(var y=0;y<d.parts.length;y++){var b=d.parts[y];b.angle+=m,o.rotate(b.vertices,m,d.position),u.rotate(b.axes,m),p.update(b.bounds,b.vertices,d.velocity),y>0&&i.rotateAbout(b.position,m,d.position,b.position)}},s.setVelocity=function(d,g){var f=d.deltaTime/s._baseDelta;d.positionPrev.x=d.position.x-g.x*f,d.positionPrev.y=d.position.y-g.y*f,d.velocity.x=(d.position.x-d.positionPrev.x)/f,d.velocity.y=(d.position.y-d.positionPrev.y)/f,d.speed=i.magnitude(d.velocity)},s.getVelocity=function(d){var g=s._baseDelta/d.deltaTime;return{x:(d.position.x-d.positionPrev.x)*g,y:(d.position.y-d.positionPrev.y)*g}},s.getSpeed=function(d){return i.magnitude(s.getVelocity(d))},s.setSpeed=function(d,g){s.setVelocity(d,i.mult(i.normalise(s.getVelocity(d)),g))},s.setAngularVelocity=function(d,g){var f=d.deltaTime/s._baseDelta;d.anglePrev=d.angle-g*f,d.angularVelocity=(d.angle-d.anglePrev)/f,d.angularSpeed=Math.abs(d.angularVelocity)},s.getAngularVelocity=function(d){return(d.angle-d.anglePrev)*s._baseDelta/d.deltaTime},s.getAngularSpeed=function(d){return Math.abs(s.getAngularVelocity(d))},s.setAngularSpeed=function(d,g){s.setAngularVelocity(d,c.sign(s.getAngularVelocity(d))*g)},s.translate=function(d,g,f){s.setPosition(d,i.add(d.position,g),f)},s.rotate=function(d,g,f,m){if(!f)s.setAngle(d,d.angle+g,m);else{var y=Math.cos(g),b=Math.sin(g),_=d.position.x-f.x,S=d.position.y-f.y;s.setPosition(d,{x:f.x+(_*y-S*b),y:f.y+(_*b+S*y)},m),s.setAngle(d,d.angle+g,m)}},s.scale=function(d,g,f,m){var y=0,b=0;m=m||d.position;for(var _=0;_<d.parts.length;_++){var S=d.parts[_];o.scale(S.vertices,g,f,m),S.axes=u.fromVertices(S.vertices),S.area=o.area(S.vertices),s.setMass(S,d.density*S.area),o.translate(S.vertices,{x:-S.position.x,y:-S.position.y}),s.setInertia(S,s._inertiaScale*o.inertia(S.vertices,S.mass)),o.translate(S.vertices,{x:S.position.x,y:S.position.y}),_>0&&(y+=S.area,b+=S.inertia),S.position.x=m.x+(S.position.x-m.x)*g,S.position.y=m.y+(S.position.y-m.y)*f,p.update(S.bounds,S.vertices,d.velocity)}d.parts.length>1&&(d.area=y,d.isStatic||(s.setMass(d,d.density*y),s.setInertia(d,b))),d.circleRadius&&(g===f?d.circleRadius*=g:d.circleRadius=null)},s.update=function(d,g){g=(typeof g<"u"?g:1e3/60)*d.timeScale;var f=g*g,m=s._timeCorrection?g/(d.deltaTime||g):1,y=1-d.frictionAir*(g/c._baseDelta),b=(d.position.x-d.positionPrev.x)*m,_=(d.position.y-d.positionPrev.y)*m;d.velocity.x=b*y+d.force.x/d.mass*f,d.velocity.y=_*y+d.force.y/d.mass*f,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.position.x+=d.velocity.x,d.position.y+=d.velocity.y,d.deltaTime=g,d.angularVelocity=(d.angle-d.anglePrev)*y*m+d.torque/d.inertia*f,d.anglePrev=d.angle,d.angle+=d.angularVelocity;for(var S=0;S<d.parts.length;S++){var k=d.parts[S];o.translate(k.vertices,d.velocity),S>0&&(k.position.x+=d.velocity.x,k.position.y+=d.velocity.y),d.angularVelocity!==0&&(o.rotate(k.vertices,d.angularVelocity,d.position),u.rotate(k.axes,d.angularVelocity),S>0&&i.rotateAbout(k.position,d.angularVelocity,d.position,k.position)),p.update(k.bounds,k.vertices,d.velocity)}},s.updateVelocities=function(d){var g=s._baseDelta/d.deltaTime,f=d.velocity;f.x=(d.position.x-d.positionPrev.x)*g,f.y=(d.position.y-d.positionPrev.y)*g,d.speed=Math.sqrt(f.x*f.x+f.y*f.y),d.angularVelocity=(d.angle-d.anglePrev)*g,d.angularSpeed=Math.abs(d.angularVelocity)},s.applyForce=function(d,g,f){var m={x:g.x-d.position.x,y:g.y-d.position.y};d.force.x+=f.x,d.force.y+=f.y,d.torque+=m.x*f.y-m.y*f.x},s._totalProperties=function(d){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},f=d.parts.length===1?0:1;f<d.parts.length;f++){var m=d.parts[f],y=m.mass!==1/0?m.mass:1;g.mass+=y,g.area+=m.area,g.inertia+=m.inertia,g.centre=i.add(g.centre,i.mult(m.position,y))}return g.centre=i.div(g.centre,g.mass),g}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s.on=function(i,l,c){for(var p=l.split(" "),u,h=0;h<p.length;h++)u=p[h],i.events=i.events||{},i.events[u]=i.events[u]||[],i.events[u].push(c);return c},s.off=function(i,l,c){if(!l){i.events={};return}typeof l=="function"&&(c=l,l=o.keys(i.events).join(" "));for(var p=l.split(" "),u=0;u<p.length;u++){var h=i.events[p[u]],d=[];if(c&&h)for(var g=0;g<h.length;g++)h[g]!==c&&d.push(h[g]);i.events[p[u]]=d}},s.trigger=function(i,l,c){var p,u,h,d,g=i.events;if(g&&o.keys(g).length>0){c||(c={}),p=l.split(" ");for(var f=0;f<p.length;f++)if(u=p[f],h=g[u],h){d=o.clone(c,!1),d.name=u,d.source=i;for(var m=0;m<h.length;m++)h[m].apply(i,[d])}}}})()},function(a,r,e){var s={};a.exports=s;var o=e(5),i=e(0),l=e(1),c=e(4);(function(){s.create=function(p){return i.extend({id:i.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},p)},s.setModified=function(p,u,h,d){if(p.isModified=u,u&&p.cache&&(p.cache.allBodies=null,p.cache.allConstraints=null,p.cache.allComposites=null),h&&p.parent&&s.setModified(p.parent,u,h,d),d)for(var g=0;g<p.composites.length;g++){var f=p.composites[g];s.setModified(f,u,h,d)}},s.add=function(p,u){var h=[].concat(u);o.trigger(p,"beforeAdd",{object:u});for(var d=0;d<h.length;d++){var g=h[d];switch(g.type){case"body":if(g.parent!==g){i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(p,g);break;case"constraint":s.addConstraint(p,g);break;case"composite":s.addComposite(p,g);break;case"mouseConstraint":s.addConstraint(p,g.constraint);break}}return o.trigger(p,"afterAdd",{object:u}),p},s.remove=function(p,u,h){var d=[].concat(u);o.trigger(p,"beforeRemove",{object:u});for(var g=0;g<d.length;g++){var f=d[g];switch(f.type){case"body":s.removeBody(p,f,h);break;case"constraint":s.removeConstraint(p,f,h);break;case"composite":s.removeComposite(p,f,h);break;case"mouseConstraint":s.removeConstraint(p,f.constraint);break}}return o.trigger(p,"afterRemove",{object:u}),p},s.addComposite=function(p,u){return p.composites.push(u),u.parent=p,s.setModified(p,!0,!0,!1),p},s.removeComposite=function(p,u,h){var d=i.indexOf(p.composites,u);if(d!==-1){var g=s.allBodies(u);s.removeCompositeAt(p,d);for(var f=0;f<g.length;f++)g[f].sleepCounter=0}if(h)for(var f=0;f<p.composites.length;f++)s.removeComposite(p.composites[f],u,!0);return p},s.removeCompositeAt=function(p,u){return p.composites.splice(u,1),s.setModified(p,!0,!0,!1),p},s.addBody=function(p,u){return p.bodies.push(u),s.setModified(p,!0,!0,!1),p},s.removeBody=function(p,u,h){var d=i.indexOf(p.bodies,u);if(d!==-1&&(s.removeBodyAt(p,d),u.sleepCounter=0),h)for(var g=0;g<p.composites.length;g++)s.removeBody(p.composites[g],u,!0);return p},s.removeBodyAt=function(p,u){return p.bodies.splice(u,1),s.setModified(p,!0,!0,!1),p},s.addConstraint=function(p,u){return p.constraints.push(u),s.setModified(p,!0,!0,!1),p},s.removeConstraint=function(p,u,h){var d=i.indexOf(p.constraints,u);if(d!==-1&&s.removeConstraintAt(p,d),h)for(var g=0;g<p.composites.length;g++)s.removeConstraint(p.composites[g],u,!0);return p},s.removeConstraintAt=function(p,u){return p.constraints.splice(u,1),s.setModified(p,!0,!0,!1),p},s.clear=function(p,u,h){if(h)for(var d=0;d<p.composites.length;d++)s.clear(p.composites[d],u,!0);return u?p.bodies=p.bodies.filter(function(g){return g.isStatic}):p.bodies.length=0,p.constraints.length=0,p.composites.length=0,s.setModified(p,!0,!0,!1),p},s.allBodies=function(p){if(p.cache&&p.cache.allBodies)return p.cache.allBodies;for(var u=[].concat(p.bodies),h=0;h<p.composites.length;h++)u=u.concat(s.allBodies(p.composites[h]));return p.cache&&(p.cache.allBodies=u),u},s.allConstraints=function(p){if(p.cache&&p.cache.allConstraints)return p.cache.allConstraints;for(var u=[].concat(p.constraints),h=0;h<p.composites.length;h++)u=u.concat(s.allConstraints(p.composites[h]));return p.cache&&(p.cache.allConstraints=u),u},s.allComposites=function(p){if(p.cache&&p.cache.allComposites)return p.cache.allComposites;for(var u=[].concat(p.composites),h=0;h<p.composites.length;h++)u=u.concat(s.allComposites(p.composites[h]));return p.cache&&(p.cache.allComposites=u),u},s.get=function(p,u,h){var d,g;switch(h){case"body":d=s.allBodies(p);break;case"constraint":d=s.allConstraints(p);break;case"composite":d=s.allComposites(p).concat(p);break}return d?(g=d.filter(function(f){return f.id.toString()===u.toString()}),g.length===0?null:g[0]):null},s.move=function(p,u,h){return s.remove(p,u),s.add(h,u),p},s.rebase=function(p){for(var u=s.allBodies(p).concat(s.allConstraints(p)).concat(s.allComposites(p)),h=0;h<u.length;h++)u[h].id=i.nextId();return p},s.translate=function(p,u,h){for(var d=h?s.allBodies(p):p.bodies,g=0;g<d.length;g++)c.translate(d[g],u);return p},s.rotate=function(p,u,h,d){for(var g=Math.cos(u),f=Math.sin(u),m=d?s.allBodies(p):p.bodies,y=0;y<m.length;y++){var b=m[y],_=b.position.x-h.x,S=b.position.y-h.y;c.setPosition(b,{x:h.x+(_*g-S*f),y:h.y+(_*f+S*g)}),c.rotate(b,u)}return p},s.scale=function(p,u,h,d,g){for(var f=g?s.allBodies(p):p.bodies,m=0;m<f.length;m++){var y=f[m],b=y.position.x-d.x,_=y.position.y-d.y;c.setPosition(y,{x:d.x+b*u,y:d.y+_*h}),c.scale(y,u,h)}return p},s.bounds=function(p){for(var u=s.allBodies(p),h=[],d=0;d<u.length;d+=1){var g=u[d];h.push(g.bounds.min,g.bounds.max)}return l.create(h)}})()},function(a,r,e){var s={};a.exports=s;var o=e(4),i=e(5),l=e(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(c,p){for(var u=p/l._baseDelta,h=s._motionSleepThreshold,d=0;d<c.length;d++){var g=c[d],f=o.getSpeed(g),m=o.getAngularSpeed(g),y=f*f+m*m;if(g.force.x!==0||g.force.y!==0){s.set(g,!1);continue}var b=Math.min(g.motion,y),_=Math.max(g.motion,y);g.motion=s._minBias*b+(1-s._minBias)*_,g.sleepThreshold>0&&g.motion<h?(g.sleepCounter+=1,g.sleepCounter>=g.sleepThreshold/u&&s.set(g,!0)):g.sleepCounter>0&&(g.sleepCounter-=1)}},s.afterCollisions=function(c){for(var p=s._motionSleepThreshold,u=0;u<c.length;u++){var h=c[u];if(h.isActive){var d=h.collision,g=d.bodyA.parent,f=d.bodyB.parent;if(!(g.isSleeping&&f.isSleeping||g.isStatic||f.isStatic)&&(g.isSleeping||f.isSleeping)){var m=g.isSleeping&&!g.isStatic?g:f,y=m===g?f:g;!m.isStatic&&y.motion>p&&s.set(m,!1)}}}},s.set=function(c,p){var u=c.isSleeping;p?(c.isSleeping=!0,c.sleepCounter=c.sleepThreshold,c.positionImpulse.x=0,c.positionImpulse.y=0,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.anglePrev=c.angle,c.speed=0,c.angularSpeed=0,c.motion=0,u||i.trigger(c,"sleepStart")):(c.isSleeping=!1,c.sleepCounter=0,u&&i.trigger(c,"sleepEnd"))}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(9);(function(){var l=[],c={overlap:0,axis:null},p={overlap:0,axis:null};s.create=function(u,h){return{pair:null,collided:!1,bodyA:u,bodyB:h,parentA:u.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(u,h,d){if(s._overlapAxes(c,u.vertices,h.vertices,u.axes),c.overlap<=0||(s._overlapAxes(p,h.vertices,u.vertices,h.axes),p.overlap<=0))return null;var g=d&&d.table[i.id(u,h)],f;g?f=g.collision:(f=s.create(u,h),f.collided=!0,f.bodyA=u.id<h.id?u:h,f.bodyB=u.id<h.id?h:u,f.parentA=f.bodyA.parent,f.parentB=f.bodyB.parent),u=f.bodyA,h=f.bodyB;var m;c.overlap<p.overlap?m=c:m=p;var y=f.normal,b=f.tangent,_=f.penetration,S=f.supports,k=m.overlap,x=m.axis,w=x.x,v=x.y,j=h.position.x-u.position.x,T=h.position.y-u.position.y;w*j+v*T>=0&&(w=-w,v=-v),y.x=w,y.y=v,b.x=-v,b.y=w,_.x=w*k,_.y=v*k,f.depth=k;var P=s._findSupports(u,h,y,1),C=0;if(o.contains(u.vertices,P[0])&&(S[C++]=P[0]),o.contains(u.vertices,P[1])&&(S[C++]=P[1]),C<2){var A=s._findSupports(h,u,y,-1);o.contains(h.vertices,A[0])&&(S[C++]=A[0]),C<2&&o.contains(h.vertices,A[1])&&(S[C++]=A[1])}return C===0&&(S[C++]=P[0]),f.supportCount=C,f},s._overlapAxes=function(u,h,d,g){var f=h.length,m=d.length,y=h[0].x,b=h[0].y,_=d[0].x,S=d[0].y,k=g.length,x=Number.MAX_VALUE,w=0,v,j,T,P,C,A;for(C=0;C<k;C++){var z=g[C],O=z.x,U=z.y,L=y*O+b*U,V=_*O+S*U,nn=L,on=V;for(A=1;A<f;A+=1)P=h[A].x*O+h[A].y*U,P>nn?nn=P:P<L&&(L=P);for(A=1;A<m;A+=1)P=d[A].x*O+d[A].y*U,P>on?on=P:P<V&&(V=P);if(j=nn-V,T=on-L,v=j<T?j:T,v<x&&(x=v,w=C,v<=0))break}u.axis=g[w],u.overlap=x},s._findSupports=function(u,h,d,g){var f=h.vertices,m=f.length,y=u.position.x,b=u.position.y,_=d.x*g,S=d.y*g,k=f[0],x=k,w=_*(y-x.x)+S*(b-x.y),v,j,T;for(T=1;T<m;T+=1)x=f[T],j=_*(y-x.x)+S*(b-x.y),j<w&&(w=j,k=x);return v=f[(m+k.index-1)%m],w=_*(y-v.x)+S*(b-v.y),x=f[(k.index+1)%m],_*(y-x.x)+S*(b-x.y)<w?(l[0]=k,l[1]=x,l):(l[0]=k,l[1]=v,l)}})()},function(a,r,e){var s={};a.exports=s;var o=e(16);(function(){s.create=function(i,l){var c=i.bodyA,p=i.bodyB,u={id:s.id(c,p),bodyA:c,bodyB:p,collision:i,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:c.isSensor||p.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(u,i,l),u},s.update=function(i,l,c){var p=l.supports,u=l.supportCount,h=i.contacts,d=l.parentA,g=l.parentB;i.isActive=!0,i.timeUpdated=c,i.collision=l,i.separation=l.depth,i.inverseMass=d.inverseMass+g.inverseMass,i.friction=d.friction<g.friction?d.friction:g.friction,i.frictionStatic=d.frictionStatic>g.frictionStatic?d.frictionStatic:g.frictionStatic,i.restitution=d.restitution>g.restitution?d.restitution:g.restitution,i.slop=d.slop>g.slop?d.slop:g.slop,i.contactCount=u,l.pair=i;var f=p[0],m=h[0],y=p[1],b=h[1];(b.vertex===f||m.vertex===y)&&(h[1]=m,h[0]=m=b,b=h[1]),m.vertex=f,b.vertex=y},s.setActive=function(i,l,c){l?(i.isActive=!0,i.timeUpdated=c):(i.isActive=!1,i.contactCount=0)},s.id=function(i,l){return i.id<l.id?i.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+i.id.toString(36)}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(2),l=e(7),c=e(1),p=e(11),u=e(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(h){var d=h;d.bodyA&&!d.pointA&&(d.pointA={x:0,y:0}),d.bodyB&&!d.pointB&&(d.pointB={x:0,y:0});var g=d.bodyA?i.add(d.bodyA.position,d.pointA):d.pointA,f=d.bodyB?i.add(d.bodyB.position,d.pointB):d.pointB,m=i.magnitude(i.sub(g,f));d.length=typeof d.length<"u"?d.length:m,d.id=d.id||u.nextId(),d.label=d.label||"Constraint",d.type="constraint",d.stiffness=d.stiffness||(d.length>0?1:.7),d.damping=d.damping||0,d.angularStiffness=d.angularStiffness||0,d.angleA=d.bodyA?d.bodyA.angle:d.angleA,d.angleB=d.bodyB?d.bodyB.angle:d.angleB,d.plugin={};var y={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return d.length===0&&d.stiffness>.1?(y.type="pin",y.anchors=!1):d.stiffness<.9&&(y.type="spring"),d.render=u.extend(y,d.render),d},s.preSolveAll=function(h){for(var d=0;d<h.length;d+=1){var g=h[d],f=g.constraintImpulse;g.isStatic||f.x===0&&f.y===0&&f.angle===0||(g.position.x+=f.x,g.position.y+=f.y,g.angle+=f.angle)}},s.solveAll=function(h,d){for(var g=u.clamp(d/u._baseDelta,0,1),f=0;f<h.length;f+=1){var m=h[f],y=!m.bodyA||m.bodyA&&m.bodyA.isStatic,b=!m.bodyB||m.bodyB&&m.bodyB.isStatic;(y||b)&&s.solve(h[f],g)}for(f=0;f<h.length;f+=1)m=h[f],y=!m.bodyA||m.bodyA&&m.bodyA.isStatic,b=!m.bodyB||m.bodyB&&m.bodyB.isStatic,!y&&!b&&s.solve(h[f],g)},s.solve=function(h,d){var g=h.bodyA,f=h.bodyB,m=h.pointA,y=h.pointB;if(!(!g&&!f)){g&&!g.isStatic&&(i.rotate(m,g.angle-h.angleA,m),h.angleA=g.angle),f&&!f.isStatic&&(i.rotate(y,f.angle-h.angleB,y),h.angleB=f.angle);var b=m,_=y;if(g&&(b=i.add(g.position,m)),f&&(_=i.add(f.position,y)),!(!b||!_)){var S=i.sub(b,_),k=i.magnitude(S);k<s._minLength&&(k=s._minLength);var x=(k-h.length)/k,w=h.stiffness>=1||h.length===0,v=w?h.stiffness*d:h.stiffness*d*d,j=h.damping*d,T=i.mult(S,x*v),P=(g?g.inverseMass:0)+(f?f.inverseMass:0),C=(g?g.inverseInertia:0)+(f?f.inverseInertia:0),A=P+C,z,O,U,L,V;if(j>0){var nn=i.create();U=i.div(S,k),V=i.sub(f&&i.sub(f.position,f.positionPrev)||nn,g&&i.sub(g.position,g.positionPrev)||nn),L=i.dot(U,V)}g&&!g.isStatic&&(O=g.inverseMass/P,g.constraintImpulse.x-=T.x*O,g.constraintImpulse.y-=T.y*O,g.position.x-=T.x*O,g.position.y-=T.y*O,j>0&&(g.positionPrev.x-=j*U.x*L*O,g.positionPrev.y-=j*U.y*L*O),z=i.cross(m,T)/A*s._torqueDampen*g.inverseInertia*(1-h.angularStiffness),g.constraintImpulse.angle-=z,g.angle-=z),f&&!f.isStatic&&(O=f.inverseMass/P,f.constraintImpulse.x+=T.x*O,f.constraintImpulse.y+=T.y*O,f.position.x+=T.x*O,f.position.y+=T.y*O,j>0&&(f.positionPrev.x+=j*U.x*L*O,f.positionPrev.y+=j*U.y*L*O),z=i.cross(y,T)/A*s._torqueDampen*f.inverseInertia*(1-h.angularStiffness),f.constraintImpulse.angle+=z,f.angle+=z)}}},s.postSolveAll=function(h){for(var d=0;d<h.length;d++){var g=h[d],f=g.constraintImpulse;if(!(g.isStatic||f.x===0&&f.y===0&&f.angle===0)){l.set(g,!1);for(var m=0;m<g.parts.length;m++){var y=g.parts[m];o.translate(y.vertices,f),m>0&&(y.position.x+=f.x,y.position.y+=f.y),f.angle!==0&&(o.rotate(y.vertices,f.angle,g.position),p.rotate(y.axes,f.angle),m>0&&i.rotateAbout(y.position,f.angle,g.position,y.position)),c.update(y.bounds,y.vertices,g.velocity)}f.angle*=s._warming,f.x*=s._warming,f.y*=s._warming}}},s.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},s.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},s.currentLength=function(h){var d=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),g=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),f=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),m=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),y=d-f,b=g-m;return Math.sqrt(y*y+b*b)}})()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(0);(function(){s.fromVertices=function(l){for(var c={},p=0;p<l.length;p++){var u=(p+1)%l.length,h=o.normalise({x:l[u].y-l[p].y,y:l[p].x-l[u].x}),d=h.y===0?1/0:h.x/h.y;d=d.toFixed(3).toString(),c[d]=h}return i.values(c)},s.rotate=function(l,c){if(c!==0)for(var p=Math.cos(c),u=Math.sin(c),h=0;h<l.length;h++){var d=l[h],g;g=d.x*p-d.y*u,d.y=d.x*u+d.y*p,d.x=g}}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(0),l=e(4),c=e(1),p=e(2);(function(){s.rectangle=function(u,h,d,g,f){f=f||{};var m={label:"Rectangle Body",position:{x:u,y:h},vertices:o.fromPath("L 0 0 L "+d+" 0 L "+d+" "+g+" L 0 "+g)};if(f.chamfer){var y=f.chamfer;m.vertices=o.chamfer(m.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete f.chamfer}return l.create(i.extend({},m,f))},s.trapezoid=function(u,h,d,g,f,m){m=m||{},f>=1&&i.warn("Bodies.trapezoid: slope parameter must be < 1."),f*=.5;var y=(1-f*2)*d,b=d*f,_=b+y,S=_+b,k;f<.5?k="L 0 0 L "+b+" "+-g+" L "+_+" "+-g+" L "+S+" 0":k="L 0 0 L "+_+" "+-g+" L "+S+" 0";var x={label:"Trapezoid Body",position:{x:u,y:h},vertices:o.fromPath(k)};if(m.chamfer){var w=m.chamfer;x.vertices=o.chamfer(x.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete m.chamfer}return l.create(i.extend({},x,m))},s.circle=function(u,h,d,g,f){g=g||{};var m={label:"Circle Body",circleRadius:d};f=f||25;var y=Math.ceil(Math.max(10,Math.min(f,d)));return y%2===1&&(y+=1),s.polygon(u,h,y,d,i.extend({},m,g))},s.polygon=function(u,h,d,g,f){if(f=f||{},d<3)return s.circle(u,h,g,f);for(var m=2*Math.PI/d,y="",b=m*.5,_=0;_<d;_+=1){var S=b+_*m,k=Math.cos(S)*g,x=Math.sin(S)*g;y+="L "+k.toFixed(3)+" "+x.toFixed(3)+" "}var w={label:"Polygon Body",position:{x:u,y:h},vertices:o.fromPath(y)};if(f.chamfer){var v=f.chamfer;w.vertices=o.chamfer(w.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete f.chamfer}return l.create(i.extend({},w,f))},s.fromVertices=function(u,h,d,g,f,m,y,b){var _=i.getDecomp(),S,k,x,w,v,j,T,P,C,A,z;for(S=!!(_&&_.quickDecomp),g=g||{},x=[],f=typeof f<"u"?f:!1,m=typeof m<"u"?m:.01,y=typeof y<"u"?y:10,b=typeof b<"u"?b:.01,i.isArray(d[0])||(d=[d]),A=0;A<d.length;A+=1)if(j=d[A],w=o.isConvex(j),v=!w,v&&!S&&i.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),w||!S)w?j=o.clockwiseSort(j):j=o.hull(j),x.push({position:{x:u,y:h},vertices:j});else{var O=j.map(function(Q){return[Q.x,Q.y]});_.makeCCW(O),m!==!1&&_.removeCollinearPoints(O,m),b!==!1&&_.removeDuplicatePoints&&_.removeDuplicatePoints(O,b);var U=_.quickDecomp(O);for(T=0;T<U.length;T++){var L=U[T],V=L.map(function(Q){return{x:Q[0],y:Q[1]}});y>0&&o.area(V)<y||x.push({position:o.centre(V),vertices:V})}}for(T=0;T<x.length;T++)x[T]=l.create(i.extend(x[T],g));if(f){var nn=5;for(T=0;T<x.length;T++){var on=x[T];for(P=T+1;P<x.length;P++){var dn=x[P];if(c.overlaps(on.bounds,dn.bounds)){var sn=on.vertices,cn=dn.vertices;for(C=0;C<on.vertices.length;C++)for(z=0;z<dn.vertices.length;z++){var pn=p.magnitudeSquared(p.sub(sn[(C+1)%sn.length],cn[z])),un=p.magnitudeSquared(p.sub(sn[C],cn[(z+1)%cn.length]));pn<nn&&un<nn&&(sn[C].isInternal=!0,cn[z].isInternal=!0)}}}}}return x.length>1?(k=l.create(i.extend({parts:x.slice(0)},g)),l.setPosition(k,{x:u,y:h}),k):x[0]}})()},function(a,r,e){var s={};a.exports=s;var o=e(0),i=e(8);(function(){s.create=function(l){var c={bodies:[],collisions:[],pairs:null};return o.extend(c,l)},s.setBodies=function(l,c){l.bodies=c.slice(0)},s.clear=function(l){l.bodies=[],l.collisions=[]},s.collisions=function(l){var c=l.pairs,p=l.bodies,u=p.length,h=s.canCollide,d=i.collides,g=l.collisions,f=0,m,y;for(p.sort(s._compareBoundsX),m=0;m<u;m++){var b=p[m],_=b.bounds,S=b.bounds.max.x,k=b.bounds.max.y,x=b.bounds.min.y,w=b.isStatic||b.isSleeping,v=b.parts.length,j=v===1;for(y=m+1;y<u;y++){var T=p[y],P=T.bounds;if(P.min.x>S)break;if(!(k<P.min.y||x>P.max.y)&&!(w&&(T.isStatic||T.isSleeping))&&h(b.collisionFilter,T.collisionFilter)){var C=T.parts.length;if(j&&C===1){var A=d(b,T,c);A&&(g[f++]=A)}else for(var z=v>1?1:0,O=C>1?1:0,U=z;U<v;U++)for(var L=b.parts[U],_=L.bounds,V=O;V<C;V++){var nn=T.parts[V],P=nn.bounds;if(!(_.min.x>P.max.x||_.max.x<P.min.x||_.max.y<P.min.y||_.min.y>P.max.y)){var A=d(L,nn,c);A&&(g[f++]=A)}}}}}return g.length!==f&&(g.length=f),g},s.canCollide=function(l,c){return l.group===c.group&&l.group!==0?l.group>0:(l.mask&c.category)!==0&&(c.mask&l.category)!==0},s._compareBoundsX=function(l,c){return l.bounds.min.x-c.bounds.min.x}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s.create=function(i){var l={};return i||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=i||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(c){var p=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u&&(l.button=0,c.preventDefault()),l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=c},l.mousedown=function(c){var p=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u?(l.button=0,c.preventDefault()):l.button=c.button,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=c},l.mouseup=function(c){var p=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u&&c.preventDefault(),l.button=-1,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=c},l.mousewheel=function(c){l.wheelDelta=Math.max(-1,Math.min(1,c.wheelDelta||-c.detail)),c.preventDefault(),l.sourceEvents.mousewheel=c},s.setElement(l,l.element),l},s.setElement=function(i,l){i.element=l,l.addEventListener("mousemove",i.mousemove,{passive:!0}),l.addEventListener("mousedown",i.mousedown,{passive:!0}),l.addEventListener("mouseup",i.mouseup,{passive:!0}),l.addEventListener("wheel",i.mousewheel,{passive:!1}),l.addEventListener("touchmove",i.mousemove,{passive:!1}),l.addEventListener("touchstart",i.mousedown,{passive:!1}),l.addEventListener("touchend",i.mouseup,{passive:!1})},s.clearSourceEvents=function(i){i.sourceEvents.mousemove=null,i.sourceEvents.mousedown=null,i.sourceEvents.mouseup=null,i.sourceEvents.mousewheel=null,i.wheelDelta=0},s.setOffset=function(i,l){i.offset.x=l.x,i.offset.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},s.setScale=function(i,l){i.scale.x=l.x,i.scale.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},s._getRelativeMousePosition=function(i,l,c){var p=l.getBoundingClientRect(),u=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:u.scrollLeft,d=window.pageYOffset!==void 0?window.pageYOffset:u.scrollTop,g=i.changedTouches,f,m;return g?(f=g[0].pageX-p.left-h,m=g[0].pageY-p.top-d):(f=i.pageX-p.left-h,m=i.pageY-p.top-d),{x:f/(l.clientWidth/(l.width||l.clientWidth)*c),y:m/(l.clientHeight/(l.height||l.clientHeight)*c)}}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s._registry={},s.register=function(i){if(s.isPlugin(i)||o.warn("Plugin.register:",s.toString(i),"does not implement all required fields."),i.name in s._registry){var l=s._registry[i.name],c=s.versionParse(i.version).number,p=s.versionParse(l.version).number;c>p?(o.warn("Plugin.register:",s.toString(l),"was upgraded to",s.toString(i)),s._registry[i.name]=i):c<p?o.warn("Plugin.register:",s.toString(l),"can not be downgraded to",s.toString(i)):i!==l&&o.warn("Plugin.register:",s.toString(i),"is already registered to different plugin object")}else s._registry[i.name]=i;return i},s.resolve=function(i){return s._registry[s.dependencyParse(i).name]},s.toString=function(i){return typeof i=="string"?i:(i.name||"anonymous")+"@"+(i.version||i.range||"0.0.0")},s.isPlugin=function(i){return i&&i.name&&i.version&&i.install},s.isUsed=function(i,l){return i.used.indexOf(l)>-1},s.isFor=function(i,l){var c=i.for&&s.dependencyParse(i.for);return!i.for||l.name===c.name&&s.versionSatisfies(l.version,c.range)},s.use=function(i,l){if(i.uses=(i.uses||[]).concat(l||[]),i.uses.length===0){o.warn("Plugin.use:",s.toString(i),"does not specify any dependencies to install.");return}for(var c=s.dependencies(i),p=o.topologicalSort(c),u=[],h=0;h<p.length;h+=1)if(p[h]!==i.name){var d=s.resolve(p[h]);if(!d){u.push("❌ "+p[h]);continue}s.isUsed(i,d.name)||(s.isFor(d,i)||(o.warn("Plugin.use:",s.toString(d),"is for",d.for,"but installed on",s.toString(i)+"."),d._warned=!0),d.install?d.install(i):(o.warn("Plugin.use:",s.toString(d),"does not specify an install function."),d._warned=!0),d._warned?(u.push("🔶 "+s.toString(d)),delete d._warned):u.push("✅ "+s.toString(d)),i.used.push(d.name))}u.length>0&&o.info(u.join("  "))},s.dependencies=function(i,l){var c=s.dependencyParse(i),p=c.name;if(l=l||{},!(p in l)){i=s.resolve(i)||i,l[p]=o.map(i.uses||[],function(h){s.isPlugin(h)&&s.register(h);var d=s.dependencyParse(h),g=s.resolve(h);return g&&!s.versionSatisfies(g.version,d.range)?(o.warn("Plugin.dependencies:",s.toString(g),"does not satisfy",s.toString(d),"used by",s.toString(c)+"."),g._warned=!0,i._warned=!0):g||(o.warn("Plugin.dependencies:",s.toString(h),"used by",s.toString(c),"could not be resolved."),i._warned=!0),d.name});for(var u=0;u<l[p].length;u+=1)s.dependencies(l[p][u],l);return l}},s.dependencyParse=function(i){if(o.isString(i)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(i)||o.warn("Plugin.dependencyParse:",i,"is not a valid dependency string."),{name:i.split("@")[0],range:i.split("@")[1]||"*"}}return{name:i.name,range:i.range||i.version}},s.versionParse=function(i){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(i)||o.warn("Plugin.versionParse:",i,"is not a valid version or range.");var c=l.exec(i),p=Number(c[4]),u=Number(c[5]),h=Number(c[6]);return{isRange:!!(c[1]||c[2]),version:c[3],range:i,operator:c[1]||c[2]||"",major:p,minor:u,patch:h,parts:[p,u,h],prerelease:c[7],number:p*1e8+u*1e4+h}},s.versionSatisfies=function(i,l){l=l||"*";var c=s.versionParse(l),p=s.versionParse(i);if(c.isRange){if(c.operator==="*"||i==="*")return!0;if(c.operator===">")return p.number>c.number;if(c.operator===">=")return p.number>=c.number;if(c.operator==="~")return p.major===c.major&&p.minor===c.minor&&p.patch>=c.patch;if(c.operator==="^")return c.major>0?p.major===c.major&&p.number>=c.number:c.minor>0?p.minor===c.minor&&p.patch>=c.patch:p.patch===c.patch}return i===l||i==="*"}})()},function(a,r){var e={};a.exports=e,function(){e.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}}()},function(a,r,e){var s={};a.exports=s;var o=e(7),i=e(18),l=e(13),c=e(19),p=e(5),u=e(6),h=e(10),d=e(0),g=e(4);(function(){s._deltaMax=1e3/60,s.create=function(f){f=f||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},y=d.extend(m,f);return y.world=f.world||u.create({label:"World"}),y.pairs=f.pairs||c.create(),y.detector=f.detector||l.create(),y.detector.pairs=y.pairs,y.grid={buckets:[]},y.world.gravity=y.gravity,y.broadphase=y.grid,y.metrics={},y},s.update=function(f,m){var y=d.now(),b=f.world,_=f.detector,S=f.pairs,k=f.timing,x=k.timestamp,w;m>s._deltaMax&&d.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),m=typeof m<"u"?m:d._baseDelta,m*=k.timeScale,k.timestamp+=m,k.lastDelta=m;var v={timestamp:k.timestamp,delta:m};p.trigger(f,"beforeUpdate",v);var j=u.allBodies(b),T=u.allConstraints(b);for(b.isModified&&(l.setBodies(_,j),u.setModified(b,!1,!1,!0)),f.enableSleeping&&o.update(j,m),s._bodiesApplyGravity(j,f.gravity),m>0&&s._bodiesUpdate(j,m),p.trigger(f,"beforeSolve",v),h.preSolveAll(j),w=0;w<f.constraintIterations;w++)h.solveAll(T,m);h.postSolveAll(j);var P=l.collisions(_);c.update(S,P,x),f.enableSleeping&&o.afterCollisions(S.list),S.collisionStart.length>0&&p.trigger(f,"collisionStart",{pairs:S.collisionStart,timestamp:k.timestamp,delta:m});var C=d.clamp(20/f.positionIterations,0,1);for(i.preSolvePosition(S.list),w=0;w<f.positionIterations;w++)i.solvePosition(S.list,m,C);for(i.postSolvePosition(j),h.preSolveAll(j),w=0;w<f.constraintIterations;w++)h.solveAll(T,m);for(h.postSolveAll(j),i.preSolveVelocity(S.list),w=0;w<f.velocityIterations;w++)i.solveVelocity(S.list,m);return s._bodiesUpdateVelocities(j),S.collisionActive.length>0&&p.trigger(f,"collisionActive",{pairs:S.collisionActive,timestamp:k.timestamp,delta:m}),S.collisionEnd.length>0&&p.trigger(f,"collisionEnd",{pairs:S.collisionEnd,timestamp:k.timestamp,delta:m}),s._bodiesClearForces(j),p.trigger(f,"afterUpdate",v),f.timing.lastElapsed=d.now()-y,f},s.merge=function(f,m){if(d.extend(f,m),m.world){f.world=m.world,s.clear(f);for(var y=u.allBodies(f.world),b=0;b<y.length;b++){var _=y[b];o.set(_,!1),_.id=d.nextId()}}},s.clear=function(f){c.clear(f.pairs),l.clear(f.detector)},s._bodiesClearForces=function(f){for(var m=f.length,y=0;y<m;y++){var b=f[y];b.force.x=0,b.force.y=0,b.torque=0}},s._bodiesApplyGravity=function(f,m){var y=typeof m.scale<"u"?m.scale:.001,b=f.length;if(!(m.x===0&&m.y===0||y===0))for(var _=0;_<b;_++){var S=f[_];S.isStatic||S.isSleeping||(S.force.y+=S.mass*m.y*y,S.force.x+=S.mass*m.x*y)}},s._bodiesUpdate=function(f,m){for(var y=f.length,b=0;b<y;b++){var _=f[b];_.isStatic||_.isSleeping||g.update(_,m)}},s._bodiesUpdateVelocities=function(f){for(var m=f.length,y=0;y<m;y++)g.updateVelocities(f[y])}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(0),l=e(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(c){var p,u,h,d=c.length;for(p=0;p<d;p++)u=c[p],u.isActive&&(h=u.contactCount,u.collision.parentA.totalContacts+=h,u.collision.parentB.totalContacts+=h)},s.solvePosition=function(c,p,u){var h,d,g,f,m,y,b,_,S=s._positionDampen*(u||1),k=i.clamp(p/i._baseDelta,0,1),x=c.length;for(h=0;h<x;h++)d=c[h],!(!d.isActive||d.isSensor)&&(g=d.collision,f=g.parentA,m=g.parentB,y=g.normal,d.separation=g.depth+y.x*(m.positionImpulse.x-f.positionImpulse.x)+y.y*(m.positionImpulse.y-f.positionImpulse.y));for(h=0;h<x;h++)d=c[h],!(!d.isActive||d.isSensor)&&(g=d.collision,f=g.parentA,m=g.parentB,y=g.normal,_=d.separation-d.slop*k,(f.isStatic||m.isStatic)&&(_*=2),f.isStatic||f.isSleeping||(b=S/f.totalContacts,f.positionImpulse.x+=y.x*_*b,f.positionImpulse.y+=y.y*_*b),m.isStatic||m.isSleeping||(b=S/m.totalContacts,m.positionImpulse.x-=y.x*_*b,m.positionImpulse.y-=y.y*_*b))},s.postSolvePosition=function(c){for(var p=s._positionWarming,u=c.length,h=o.translate,d=l.update,g=0;g<u;g++){var f=c[g],m=f.positionImpulse,y=m.x,b=m.y,_=f.velocity;if(f.totalContacts=0,y!==0||b!==0){for(var S=0;S<f.parts.length;S++){var k=f.parts[S];h(k.vertices,m),d(k.bounds,k.vertices,_),k.position.x+=y,k.position.y+=b}f.positionPrev.x+=y,f.positionPrev.y+=b,y*_.x+b*_.y<0?(m.x=0,m.y=0):(m.x*=p,m.y*=p)}}},s.preSolveVelocity=function(c){var p=c.length,u,h;for(u=0;u<p;u++){var d=c[u];if(!(!d.isActive||d.isSensor)){var g=d.contacts,f=d.contactCount,m=d.collision,y=m.parentA,b=m.parentB,_=m.normal,S=m.tangent;for(h=0;h<f;h++){var k=g[h],x=k.vertex,w=k.normalImpulse,v=k.tangentImpulse;if(w!==0||v!==0){var j=_.x*w+S.x*v,T=_.y*w+S.y*v;y.isStatic||y.isSleeping||(y.positionPrev.x+=j*y.inverseMass,y.positionPrev.y+=T*y.inverseMass,y.anglePrev+=y.inverseInertia*((x.x-y.position.x)*T-(x.y-y.position.y)*j)),b.isStatic||b.isSleeping||(b.positionPrev.x-=j*b.inverseMass,b.positionPrev.y-=T*b.inverseMass,b.anglePrev-=b.inverseInertia*((x.x-b.position.x)*T-(x.y-b.position.y)*j))}}}}},s.solveVelocity=function(c,p){var u=p/i._baseDelta,h=u*u,d=h*u,g=-s._restingThresh*u,f=s._restingThreshTangent,m=s._frictionNormalMultiplier*u,y=s._frictionMaxStatic,b=c.length,_,S,k,x;for(k=0;k<b;k++){var w=c[k];if(!(!w.isActive||w.isSensor)){var v=w.collision,j=v.parentA,T=v.parentB,P=v.normal.x,C=v.normal.y,A=v.tangent.x,z=v.tangent.y,O=w.inverseMass,U=w.friction*w.frictionStatic*m,L=w.contacts,V=w.contactCount,nn=1/V,on=j.position.x-j.positionPrev.x,dn=j.position.y-j.positionPrev.y,sn=j.angle-j.anglePrev,cn=T.position.x-T.positionPrev.x,pn=T.position.y-T.positionPrev.y,un=T.angle-T.anglePrev;for(x=0;x<V;x++){var Q=L[x],I=Q.vertex,G=I.x-j.position.x,N=I.y-j.position.y,Y=I.x-T.position.x,an=I.y-T.position.y,E=on-N*sn,M=dn+G*sn,R=cn-an*un,F=pn+Y*un,D=E-R,B=M-F,$=P*D+C*B,H=A*D+z*B,q=w.separation+$,W=Math.min(q,1);W=q<0?0:W;var J=W*U;H<-J||H>J?(S=H>0?H:-H,_=w.friction*(H>0?1:-1)*d,_<-S?_=-S:_>S&&(_=S)):(_=H,S=y);var K=G*C-N*P,X=Y*C-an*P,tn=nn/(O+j.inverseInertia*K*K+T.inverseInertia*X*X),ln=(1+w.restitution)*$*tn;if(_*=tn,$<g)Q.normalImpulse=0;else{var yn=Q.normalImpulse;Q.normalImpulse+=ln,Q.normalImpulse>0&&(Q.normalImpulse=0),ln=Q.normalImpulse-yn}if(H<-f||H>f)Q.tangentImpulse=0;else{var hn=Q.tangentImpulse;Q.tangentImpulse+=_,Q.tangentImpulse<-S&&(Q.tangentImpulse=-S),Q.tangentImpulse>S&&(Q.tangentImpulse=S),_=Q.tangentImpulse-hn}var zn=P*ln+A*_,An=C*ln+z*_;j.isStatic||j.isSleeping||(j.positionPrev.x+=zn*j.inverseMass,j.positionPrev.y+=An*j.inverseMass,j.anglePrev+=(G*An-N*zn)*j.inverseInertia),T.isStatic||T.isSleeping||(T.positionPrev.x-=zn*T.inverseMass,T.positionPrev.y-=An*T.inverseMass,T.anglePrev-=(Y*An-an*zn)*T.inverseInertia)}}}}})()},function(a,r,e){var s={};a.exports=s;var o=e(9),i=e(0);(function(){s.create=function(l){return i.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},s.update=function(l,c,p){var u=o.update,h=o.create,d=o.setActive,g=l.table,f=l.list,m=f.length,y=m,b=l.collisionStart,_=l.collisionEnd,S=l.collisionActive,k=c.length,x=0,w=0,v=0,j,T,P;for(P=0;P<k;P++)j=c[P],T=j.pair,T?(T.isActive&&(S[v++]=T),u(T,j,p)):(T=h(j,p),g[T.id]=T,b[x++]=T,f[y++]=T);for(y=0,m=f.length,P=0;P<m;P++)T=f[P],T.timeUpdated>=p?f[y++]=T:(d(T,!1,p),T.collision.bodyA.sleepCounter>0&&T.collision.bodyB.sleepCounter>0?f[y++]=T:(_[w++]=T,delete g[T.id]));f.length!==y&&(f.length=y),b.length!==x&&(b.length=x),_.length!==w&&(_.length=w),S.length!==v&&(S.length=v)},s.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(a,r,e){var s=a.exports=e(21);s.Axes=e(11),s.Bodies=e(12),s.Body=e(4),s.Bounds=e(1),s.Collision=e(8),s.Common=e(0),s.Composite=e(6),s.Composites=e(22),s.Constraint=e(10),s.Contact=e(16),s.Detector=e(13),s.Engine=e(17),s.Events=e(5),s.Grid=e(23),s.Mouse=e(14),s.MouseConstraint=e(24),s.Pair=e(9),s.Pairs=e(19),s.Plugin=e(15),s.Query=e(25),s.Render=e(26),s.Resolver=e(18),s.Runner=e(27),s.SAT=e(28),s.Sleeping=e(7),s.Svg=e(29),s.Vector=e(2),s.Vertices=e(3),s.World=e(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(a,r,e){var s={};a.exports=s;var o=e(15),i=e(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){o.use(s,Array.prototype.slice.call(arguments))},s.before=function(l,c){return l=l.replace(/^Matter./,""),i.chainPathBefore(s,l,c)},s.after=function(l,c){return l=l.replace(/^Matter./,""),i.chainPathAfter(s,l,c)}})()},function(a,r,e){var s={};a.exports=s;var o=e(6),i=e(10),l=e(0),c=e(4),p=e(12),u=l.deprecated;(function(){s.stack=function(h,d,g,f,m,y,b){for(var _=o.create({label:"Stack"}),S=h,k=d,x,w=0,v=0;v<f;v++){for(var j=0,T=0;T<g;T++){var P=b(S,k,T,v,x,w);if(P){var C=P.bounds.max.y-P.bounds.min.y,A=P.bounds.max.x-P.bounds.min.x;C>j&&(j=C),c.translate(P,{x:A*.5,y:C*.5}),S=P.bounds.max.x+m,o.addBody(_,P),x=P,w+=1}else S+=m}k+=j+y,S=h}return _},s.chain=function(h,d,g,f,m,y){for(var b=h.bodies,_=1;_<b.length;_++){var S=b[_-1],k=b[_],x=S.bounds.max.y-S.bounds.min.y,w=S.bounds.max.x-S.bounds.min.x,v=k.bounds.max.y-k.bounds.min.y,j=k.bounds.max.x-k.bounds.min.x,T={bodyA:S,pointA:{x:w*d,y:x*g},bodyB:k,pointB:{x:j*f,y:v*m}},P=l.extend(T,y);o.addConstraint(h,i.create(P))}return h.label+=" Chain",h},s.mesh=function(h,d,g,f,m){var y=h.bodies,b,_,S,k,x;for(b=0;b<g;b++){for(_=1;_<d;_++)S=y[_-1+b*d],k=y[_+b*d],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:k},m)));if(b>0)for(_=0;_<d;_++)S=y[_+(b-1)*d],k=y[_+b*d],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:k},m))),f&&_>0&&(x=y[_-1+(b-1)*d],o.addConstraint(h,i.create(l.extend({bodyA:x,bodyB:k},m)))),f&&_<d-1&&(x=y[_+1+(b-1)*d],o.addConstraint(h,i.create(l.extend({bodyA:x,bodyB:k},m))))}return h.label+=" Mesh",h},s.pyramid=function(h,d,g,f,m,y,b){return s.stack(h,d,g,f,m,y,function(_,S,k,x,w,v){var j=Math.min(f,Math.ceil(g/2)),T=w?w.bounds.max.x-w.bounds.min.x:0;if(!(x>j)){x=j-x;var P=x,C=g-1-x;if(!(k<P||k>C)){v===1&&c.translate(w,{x:(k+(g%2===1?1:-1))*T,y:0});var A=w?k*T:0;return b(h+A+k*m,S,k,x,w,v)}}})},s.newtonsCradle=function(h,d,g,f,m){for(var y=o.create({label:"Newtons Cradle"}),b=0;b<g;b++){var _=1.9,S=p.circle(h+b*(f*_),d+m,f,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),k=i.create({pointA:{x:h+b*(f*_),y:d},bodyB:S});o.addBody(y,S),o.addConstraint(y,k)}return y},u(s,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),s.car=function(h,d,g,f,m){var y=c.nextGroup(!0),b=20,_=-g*.5+b,S=g*.5-b,k=0,x=o.create({label:"Car"}),w=p.rectangle(h,d,g,f,{collisionFilter:{group:y},chamfer:{radius:f*.5},density:2e-4}),v=p.circle(h+_,d+k,m,{collisionFilter:{group:y},friction:.8}),j=p.circle(h+S,d+k,m,{collisionFilter:{group:y},friction:.8}),T=i.create({bodyB:w,pointB:{x:_,y:k},bodyA:v,stiffness:1,length:0}),P=i.create({bodyB:w,pointB:{x:S,y:k},bodyA:j,stiffness:1,length:0});return o.addBody(x,w),o.addBody(x,v),o.addBody(x,j),o.addConstraint(x,T),o.addConstraint(x,P),x},u(s,"car","Composites.car ➤ moved to car example"),s.softBody=function(h,d,g,f,m,y,b,_,S,k){S=l.extend({inertia:1/0},S),k=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},k);var x=s.stack(h,d,g,f,m,y,function(w,v){return p.circle(w,v,_,S)});return s.mesh(x,g,f,b,k),x.label="Soft Body",x},u(s,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(a,r,e){var s={};a.exports=s;var o=e(9),i=e(0),l=i.deprecated;(function(){s.create=function(c){var p={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return i.extend(p,c)},s.update=function(c,p,u,h){var d,g,f,m=u.world,y=c.buckets,b,_,S=!1;for(d=0;d<p.length;d++){var k=p[d];if(!(k.isSleeping&&!h)&&!(m.bounds&&(k.bounds.max.x<m.bounds.min.x||k.bounds.min.x>m.bounds.max.x||k.bounds.max.y<m.bounds.min.y||k.bounds.min.y>m.bounds.max.y))){var x=s._getRegion(c,k);if(!k.region||x.id!==k.region.id||h){(!k.region||h)&&(k.region=x);var w=s._regionUnion(x,k.region);for(g=w.startCol;g<=w.endCol;g++)for(f=w.startRow;f<=w.endRow;f++){_=s._getBucketId(g,f),b=y[_];var v=g>=x.startCol&&g<=x.endCol&&f>=x.startRow&&f<=x.endRow,j=g>=k.region.startCol&&g<=k.region.endCol&&f>=k.region.startRow&&f<=k.region.endRow;!v&&j&&j&&b&&s._bucketRemoveBody(c,b,k),(k.region===x||v&&!j||h)&&(b||(b=s._createBucket(y,_)),s._bucketAddBody(c,b,k))}k.region=x,S=!0}}}S&&(c.pairsList=s._createActivePairsList(c))},l(s,"update","Grid.update ➤ replaced by Matter.Detector"),s.clear=function(c){c.buckets={},c.pairs={},c.pairsList=[]},l(s,"clear","Grid.clear ➤ replaced by Matter.Detector"),s._regionUnion=function(c,p){var u=Math.min(c.startCol,p.startCol),h=Math.max(c.endCol,p.endCol),d=Math.min(c.startRow,p.startRow),g=Math.max(c.endRow,p.endRow);return s._createRegion(u,h,d,g)},s._getRegion=function(c,p){var u=p.bounds,h=Math.floor(u.min.x/c.bucketWidth),d=Math.floor(u.max.x/c.bucketWidth),g=Math.floor(u.min.y/c.bucketHeight),f=Math.floor(u.max.y/c.bucketHeight);return s._createRegion(h,d,g,f)},s._createRegion=function(c,p,u,h){return{id:c+","+p+","+u+","+h,startCol:c,endCol:p,startRow:u,endRow:h}},s._getBucketId=function(c,p){return"C"+c+"R"+p},s._createBucket=function(c,p){var u=c[p]=[];return u},s._bucketAddBody=function(c,p,u){var h=c.pairs,d=o.id,g=p.length,f;for(f=0;f<g;f++){var m=p[f];if(!(u.id===m.id||u.isStatic&&m.isStatic)){var y=d(u,m),b=h[y];b?b[2]+=1:h[y]=[u,m,1]}}p.push(u)},s._bucketRemoveBody=function(c,p,u){var h=c.pairs,d=o.id,g;p.splice(i.indexOf(p,u),1);var f=p.length;for(g=0;g<f;g++){var m=h[d(u,p[g])];m&&(m[2]-=1)}},s._createActivePairsList=function(c){var p,u=c.pairs,h=i.keys(u),d=h.length,g=[],f;for(f=0;f<d;f++)p=u[h[f]],p[2]>0?g.push(p):delete u[h[f]];return g}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(7),l=e(14),c=e(5),p=e(13),u=e(10),h=e(6),d=e(0),g=e(1);(function(){s.create=function(f,m){var y=(f?f.mouse:null)||(m?m.mouse:null);y||(f&&f.render&&f.render.canvas?y=l.create(f.render.canvas):m&&m.element?y=l.create(m.element):(y=l.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var b=u.create({label:"Mouse Constraint",pointA:y.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),_={type:"mouseConstraint",mouse:y,element:null,body:null,constraint:b,collisionFilter:{category:1,mask:4294967295,group:0}},S=d.extend(_,m);return c.on(f,"beforeUpdate",function(){var k=h.allBodies(f.world);s.update(S,k),s._triggerEvents(S)}),S},s.update=function(f,m){var y=f.mouse,b=f.constraint,_=f.body;if(y.button===0){if(b.bodyB)i.set(b.bodyB,!1),b.pointA=y.position;else for(var S=0;S<m.length;S++)if(_=m[S],g.contains(_.bounds,y.position)&&p.canCollide(_.collisionFilter,f.collisionFilter))for(var k=_.parts.length>1?1:0;k<_.parts.length;k++){var x=_.parts[k];if(o.contains(x.vertices,y.position)){b.pointA=y.position,b.bodyB=f.body=_,b.pointB={x:y.position.x-_.position.x,y:y.position.y-_.position.y},b.angleB=_.angle,i.set(_,!1),c.trigger(f,"startdrag",{mouse:y,body:_});break}}}else b.bodyB=f.body=null,b.pointB=null,_&&c.trigger(f,"enddrag",{mouse:y,body:_})},s._triggerEvents=function(f){var m=f.mouse,y=m.sourceEvents;y.mousemove&&c.trigger(f,"mousemove",{mouse:m}),y.mousedown&&c.trigger(f,"mousedown",{mouse:m}),y.mouseup&&c.trigger(f,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(8),l=e(1),c=e(12),p=e(3);(function(){s.collides=function(u,h){for(var d=[],g=h.length,f=u.bounds,m=i.collides,y=l.overlaps,b=0;b<g;b++){var _=h[b],S=_.parts.length,k=S===1?0:1;if(y(_.bounds,f))for(var x=k;x<S;x++){var w=_.parts[x];if(y(w.bounds,f)){var v=m(w,u);if(v){d.push(v);break}}}}return d},s.ray=function(u,h,d,g){g=g||1e-100;for(var f=o.angle(h,d),m=o.magnitude(o.sub(h,d)),y=(d.x+h.x)*.5,b=(d.y+h.y)*.5,_=c.rectangle(y,b,m,g,{angle:f}),S=s.collides(_,u),k=0;k<S.length;k+=1){var x=S[k];x.body=x.bodyB=x.bodyA}return S},s.region=function(u,h,d){for(var g=[],f=0;f<u.length;f++){var m=u[f],y=l.overlaps(m.bounds,h);(y&&!d||!y&&d)&&g.push(m)}return g},s.point=function(u,h){for(var d=[],g=0;g<u.length;g++){var f=u[g];if(l.contains(f.bounds,h))for(var m=f.parts.length===1?0:1;m<f.parts.length;m++){var y=f.parts[m];if(l.contains(y.bounds,h)&&p.contains(y.vertices,h)){d.push(f);break}}}return d}})()},function(a,r,e){var s={};a.exports=s;var o=e(4),i=e(0),l=e(6),c=e(1),p=e(5),u=e(2),h=e(14);(function(){var d,g;typeof window<"u"&&(d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(k){window.setTimeout(function(){k(i.now())},1e3/60)},g=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(k){var x={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!k.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},w=i.extend(x,k);return w.canvas&&(w.canvas.width=w.options.width||w.canvas.width,w.canvas.height=w.options.height||w.canvas.height),w.mouse=k.mouse,w.engine=k.engine,w.canvas=w.canvas||y(w.options.width,w.options.height),w.context=w.canvas.getContext("2d"),w.textures={},w.bounds=w.bounds||{min:{x:0,y:0},max:{x:w.canvas.width,y:w.canvas.height}},w.controller=s,w.options.showBroadphase=!1,w.options.pixelRatio!==1&&s.setPixelRatio(w,w.options.pixelRatio),i.isElement(w.element)&&w.element.appendChild(w.canvas),w},s.run=function(k){(function x(w){k.frameRequestId=d(x),f(k,w),s.world(k,w),k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0),(k.options.showStats||k.options.showDebug)&&s.stats(k,k.context,w),(k.options.showPerformance||k.options.showDebug)&&s.performance(k,k.context,w),k.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(k){g(k.frameRequestId)},s.setPixelRatio=function(k,x){var w=k.options,v=k.canvas;x==="auto"&&(x=b(v)),w.pixelRatio=x,v.setAttribute("data-pixel-ratio",x),v.width=w.width*x,v.height=w.height*x,v.style.width=w.width+"px",v.style.height=w.height+"px"},s.setSize=function(k,x,w){k.options.width=x,k.options.height=w,k.bounds.max.x=k.bounds.min.x+x,k.bounds.max.y=k.bounds.min.y+w,k.options.pixelRatio!==1?s.setPixelRatio(k,k.options.pixelRatio):(k.canvas.width=x,k.canvas.height=w)},s.lookAt=function(k,x,w,v){v=typeof v<"u"?v:!0,x=i.isArray(x)?x:[x],w=w||{x:0,y:0};for(var j={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},T=0;T<x.length;T+=1){var P=x[T],C=P.bounds?P.bounds.min:P.min||P.position||P,A=P.bounds?P.bounds.max:P.max||P.position||P;C&&A&&(C.x<j.min.x&&(j.min.x=C.x),A.x>j.max.x&&(j.max.x=A.x),C.y<j.min.y&&(j.min.y=C.y),A.y>j.max.y&&(j.max.y=A.y))}var z=j.max.x-j.min.x+2*w.x,O=j.max.y-j.min.y+2*w.y,U=k.canvas.height,L=k.canvas.width,V=L/U,nn=z/O,on=1,dn=1;nn>V?dn=nn/V:on=V/nn,k.options.hasBounds=!0,k.bounds.min.x=j.min.x,k.bounds.max.x=j.min.x+z*on,k.bounds.min.y=j.min.y,k.bounds.max.y=j.min.y+O*dn,v&&(k.bounds.min.x+=z*.5-z*on*.5,k.bounds.max.x+=z*.5-z*on*.5,k.bounds.min.y+=O*.5-O*dn*.5,k.bounds.max.y+=O*.5-O*dn*.5),k.bounds.min.x-=w.x,k.bounds.max.x-=w.x,k.bounds.min.y-=w.y,k.bounds.max.y-=w.y,k.mouse&&(h.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.canvas.width,y:(k.bounds.max.y-k.bounds.min.y)/k.canvas.height}),h.setOffset(k.mouse,k.bounds.min))},s.startViewTransform=function(k){var x=k.bounds.max.x-k.bounds.min.x,w=k.bounds.max.y-k.bounds.min.y,v=x/k.options.width,j=w/k.options.height;k.context.setTransform(k.options.pixelRatio/v,0,0,k.options.pixelRatio/j,0,0),k.context.translate(-k.bounds.min.x,-k.bounds.min.y)},s.endViewTransform=function(k){k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0)},s.world=function(k,x){var w=i.now(),v=k.engine,j=v.world,T=k.canvas,P=k.context,C=k.options,A=k.timing,z=l.allBodies(j),O=l.allConstraints(j),U=C.wireframes?C.wireframeBackground:C.background,L=[],V=[],nn,on={timestamp:v.timing.timestamp};if(p.trigger(k,"beforeRender",on),k.currentBackground!==U&&S(k,U),P.globalCompositeOperation="source-in",P.fillStyle="transparent",P.fillRect(0,0,T.width,T.height),P.globalCompositeOperation="source-over",C.hasBounds){for(nn=0;nn<z.length;nn++){var dn=z[nn];c.overlaps(dn.bounds,k.bounds)&&L.push(dn)}for(nn=0;nn<O.length;nn++){var sn=O[nn],cn=sn.bodyA,pn=sn.bodyB,un=sn.pointA,Q=sn.pointB;cn&&(un=u.add(cn.position,sn.pointA)),pn&&(Q=u.add(pn.position,sn.pointB)),!(!un||!Q)&&(c.contains(k.bounds,un)||c.contains(k.bounds,Q))&&V.push(sn)}s.startViewTransform(k),k.mouse&&(h.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.options.width,y:(k.bounds.max.y-k.bounds.min.y)/k.options.height}),h.setOffset(k.mouse,k.bounds.min))}else V=O,L=z,k.options.pixelRatio!==1&&k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0);!C.wireframes||v.enableSleeping&&C.showSleeping?s.bodies(k,L,P):(C.showConvexHulls&&s.bodyConvexHulls(k,L,P),s.bodyWireframes(k,L,P)),C.showBounds&&s.bodyBounds(k,L,P),(C.showAxes||C.showAngleIndicator)&&s.bodyAxes(k,L,P),C.showPositions&&s.bodyPositions(k,L,P),C.showVelocity&&s.bodyVelocity(k,L,P),C.showIds&&s.bodyIds(k,L,P),C.showSeparations&&s.separations(k,v.pairs.list,P),C.showCollisions&&s.collisions(k,v.pairs.list,P),C.showVertexNumbers&&s.vertexNumbers(k,L,P),C.showMousePosition&&s.mousePosition(k,k.mouse,P),s.constraints(V,P),C.hasBounds&&s.endViewTransform(k),p.trigger(k,"afterRender",on),A.lastElapsed=i.now()-w},s.stats=function(k,x,w){for(var v=k.engine,j=v.world,T=l.allBodies(j),P=0,C=55,A=44,z=0,O=0,U=0;U<T.length;U+=1)P+=T[U].parts.length;var L={Part:P,Body:T.length,Cons:l.allConstraints(j).length,Comp:l.allComposites(j).length,Pair:v.pairs.list.length};x.fillStyle="#0e0f19",x.fillRect(z,O,C*5.5,A),x.font="12px Arial",x.textBaseline="top",x.textAlign="right";for(var V in L){var nn=L[V];x.fillStyle="#aaa",x.fillText(V,z+C,O+8),x.fillStyle="#eee",x.fillText(nn,z+C,O+26),z+=C}},s.performance=function(k,x){var w=k.engine,v=k.timing,j=v.deltaHistory,T=v.elapsedHistory,P=v.timestampElapsedHistory,C=v.engineDeltaHistory,A=v.engineUpdatesHistory,z=v.engineElapsedHistory,O=w.timing.lastUpdatesPerFrame,U=w.timing.lastDelta,L=m(j),V=m(T),nn=m(C),on=m(A),dn=m(z),sn=m(P),cn=sn/L||0,pn=Math.round(L/U),un=1e3/L||0,Q=4,I=12,G=60,N=34,Y=10,an=69;x.fillStyle="#0e0f19",x.fillRect(0,50,I*5+G*6+22,N),s.status(x,Y,an,G,Q,j.length,Math.round(un)+" fps",un/s._goodFps,function(E){return j[E]/L-1}),s.status(x,Y+I+G,an,G,Q,C.length,U.toFixed(2)+" dt",s._goodDelta/U,function(E){return C[E]/nn-1}),s.status(x,Y+(I+G)*2,an,G,Q,A.length,O+" upf",Math.pow(i.clamp(on/pn||1,0,1),4),function(E){return A[E]/on-1}),s.status(x,Y+(I+G)*3,an,G,Q,z.length,dn.toFixed(2)+" ut",1-O*dn/s._goodFps,function(E){return z[E]/dn-1}),s.status(x,Y+(I+G)*4,an,G,Q,T.length,V.toFixed(2)+" rt",1-V/s._goodFps,function(E){return T[E]/V-1}),s.status(x,Y+(I+G)*5,an,G,Q,P.length,cn.toFixed(2)+" x",cn*cn*cn,function(E){return(P[E]/j[E]/cn||0)-1})},s.status=function(k,x,w,v,j,T,P,C,A){k.strokeStyle="#888",k.fillStyle="#444",k.lineWidth=1,k.fillRect(x,w+7,v,1),k.beginPath(),k.moveTo(x,w+7-j*i.clamp(.4*A(0),-2,2));for(var z=0;z<v;z+=1)k.lineTo(x+z,w+7-(z<T?j*i.clamp(.4*A(z),-2,2):0));k.stroke(),k.fillStyle="hsl("+i.clamp(25+95*C,0,120)+",100%,60%)",k.fillRect(x,w-7,4,4),k.font="12px Arial",k.textBaseline="middle",k.textAlign="right",k.fillStyle="#eee",k.fillText(P,x+v,w-5)},s.constraints=function(k,x){for(var w=x,v=0;v<k.length;v++){var j=k[v];if(!(!j.render.visible||!j.pointA||!j.pointB)){var T=j.bodyA,P=j.bodyB,C,A;if(T?C=u.add(T.position,j.pointA):C=j.pointA,j.render.type==="pin")w.beginPath(),w.arc(C.x,C.y,3,0,2*Math.PI),w.closePath();else{if(P?A=u.add(P.position,j.pointB):A=j.pointB,w.beginPath(),w.moveTo(C.x,C.y),j.render.type==="spring")for(var z=u.sub(A,C),O=u.perp(u.normalise(z)),U=Math.ceil(i.clamp(j.length/5,12,20)),L,V=1;V<U;V+=1)L=V%2===0?1:-1,w.lineTo(C.x+z.x*(V/U)+O.x*L*4,C.y+z.y*(V/U)+O.y*L*4);w.lineTo(A.x,A.y)}j.render.lineWidth&&(w.lineWidth=j.render.lineWidth,w.strokeStyle=j.render.strokeStyle,w.stroke()),j.render.anchors&&(w.fillStyle=j.render.strokeStyle,w.beginPath(),w.arc(C.x,C.y,3,0,2*Math.PI),w.arc(A.x,A.y,3,0,2*Math.PI),w.closePath(),w.fill())}}},s.bodies=function(k,x,w){var v=w;k.engine;var j=k.options,T=j.showInternalEdges||!j.wireframes,P,C,A,z;for(A=0;A<x.length;A++)if(P=x[A],!!P.render.visible){for(z=P.parts.length>1?1:0;z<P.parts.length;z++)if(C=P.parts[z],!!C.render.visible){if(j.showSleeping&&P.isSleeping?v.globalAlpha=.5*C.render.opacity:C.render.opacity!==1&&(v.globalAlpha=C.render.opacity),C.render.sprite&&C.render.sprite.texture&&!j.wireframes){var O=C.render.sprite,U=_(k,O.texture);v.translate(C.position.x,C.position.y),v.rotate(C.angle),v.drawImage(U,U.width*-O.xOffset*O.xScale,U.height*-O.yOffset*O.yScale,U.width*O.xScale,U.height*O.yScale),v.rotate(-C.angle),v.translate(-C.position.x,-C.position.y)}else{if(C.circleRadius)v.beginPath(),v.arc(C.position.x,C.position.y,C.circleRadius,0,2*Math.PI);else{v.beginPath(),v.moveTo(C.vertices[0].x,C.vertices[0].y);for(var L=1;L<C.vertices.length;L++)!C.vertices[L-1].isInternal||T?v.lineTo(C.vertices[L].x,C.vertices[L].y):v.moveTo(C.vertices[L].x,C.vertices[L].y),C.vertices[L].isInternal&&!T&&v.moveTo(C.vertices[(L+1)%C.vertices.length].x,C.vertices[(L+1)%C.vertices.length].y);v.lineTo(C.vertices[0].x,C.vertices[0].y),v.closePath()}j.wireframes?(v.lineWidth=1,v.strokeStyle=k.options.wireframeStrokeStyle,v.stroke()):(v.fillStyle=C.render.fillStyle,C.render.lineWidth&&(v.lineWidth=C.render.lineWidth,v.strokeStyle=C.render.strokeStyle,v.stroke()),v.fill())}v.globalAlpha=1}}},s.bodyWireframes=function(k,x,w){var v=w,j=k.options.showInternalEdges,T,P,C,A,z;for(v.beginPath(),C=0;C<x.length;C++)if(T=x[C],!!T.render.visible)for(z=T.parts.length>1?1:0;z<T.parts.length;z++){for(P=T.parts[z],v.moveTo(P.vertices[0].x,P.vertices[0].y),A=1;A<P.vertices.length;A++)!P.vertices[A-1].isInternal||j?v.lineTo(P.vertices[A].x,P.vertices[A].y):v.moveTo(P.vertices[A].x,P.vertices[A].y),P.vertices[A].isInternal&&!j&&v.moveTo(P.vertices[(A+1)%P.vertices.length].x,P.vertices[(A+1)%P.vertices.length].y);v.lineTo(P.vertices[0].x,P.vertices[0].y)}v.lineWidth=1,v.strokeStyle=k.options.wireframeStrokeStyle,v.stroke()},s.bodyConvexHulls=function(k,x,w){var v=w,j,T,P;for(v.beginPath(),T=0;T<x.length;T++)if(j=x[T],!(!j.render.visible||j.parts.length===1)){for(v.moveTo(j.vertices[0].x,j.vertices[0].y),P=1;P<j.vertices.length;P++)v.lineTo(j.vertices[P].x,j.vertices[P].y);v.lineTo(j.vertices[0].x,j.vertices[0].y)}v.lineWidth=1,v.strokeStyle="rgba(255,255,255,0.2)",v.stroke()},s.vertexNumbers=function(k,x,w){var v=w,j,T,P;for(j=0;j<x.length;j++){var C=x[j].parts;for(P=C.length>1?1:0;P<C.length;P++){var A=C[P];for(T=0;T<A.vertices.length;T++)v.fillStyle="rgba(255,255,255,0.2)",v.fillText(j+"_"+T,A.position.x+(A.vertices[T].x-A.position.x)*.8,A.position.y+(A.vertices[T].y-A.position.y)*.8)}}},s.mousePosition=function(k,x,w){var v=w;v.fillStyle="rgba(255,255,255,0.8)",v.fillText(x.position.x+"  "+x.position.y,x.position.x+5,x.position.y-5)},s.bodyBounds=function(k,x,w){var v=w;k.engine;var j=k.options;v.beginPath();for(var T=0;T<x.length;T++){var P=x[T];if(P.render.visible)for(var C=x[T].parts,A=C.length>1?1:0;A<C.length;A++){var z=C[A];v.rect(z.bounds.min.x,z.bounds.min.y,z.bounds.max.x-z.bounds.min.x,z.bounds.max.y-z.bounds.min.y)}}j.wireframes?v.strokeStyle="rgba(255,255,255,0.08)":v.strokeStyle="rgba(0,0,0,0.1)",v.lineWidth=1,v.stroke()},s.bodyAxes=function(k,x,w){var v=w;k.engine;var j=k.options,T,P,C,A;for(v.beginPath(),P=0;P<x.length;P++){var z=x[P],O=z.parts;if(z.render.visible)if(j.showAxes)for(C=O.length>1?1:0;C<O.length;C++)for(T=O[C],A=0;A<T.axes.length;A++){var U=T.axes[A];v.moveTo(T.position.x,T.position.y),v.lineTo(T.position.x+U.x*20,T.position.y+U.y*20)}else for(C=O.length>1?1:0;C<O.length;C++)for(T=O[C],A=0;A<T.axes.length;A++)v.moveTo(T.position.x,T.position.y),v.lineTo((T.vertices[0].x+T.vertices[T.vertices.length-1].x)/2,(T.vertices[0].y+T.vertices[T.vertices.length-1].y)/2)}j.wireframes?(v.strokeStyle="indianred",v.lineWidth=1):(v.strokeStyle="rgba(255, 255, 255, 0.4)",v.globalCompositeOperation="overlay",v.lineWidth=2),v.stroke(),v.globalCompositeOperation="source-over"},s.bodyPositions=function(k,x,w){var v=w;k.engine;var j=k.options,T,P,C,A;for(v.beginPath(),C=0;C<x.length;C++)if(T=x[C],!!T.render.visible)for(A=0;A<T.parts.length;A++)P=T.parts[A],v.arc(P.position.x,P.position.y,3,0,2*Math.PI,!1),v.closePath();for(j.wireframes?v.fillStyle="indianred":v.fillStyle="rgba(0,0,0,0.5)",v.fill(),v.beginPath(),C=0;C<x.length;C++)T=x[C],T.render.visible&&(v.arc(T.positionPrev.x,T.positionPrev.y,2,0,2*Math.PI,!1),v.closePath());v.fillStyle="rgba(255,165,0,0.8)",v.fill()},s.bodyVelocity=function(k,x,w){var v=w;v.beginPath();for(var j=0;j<x.length;j++){var T=x[j];if(T.render.visible){var P=o.getVelocity(T);v.moveTo(T.position.x,T.position.y),v.lineTo(T.position.x+P.x,T.position.y+P.y)}}v.lineWidth=3,v.strokeStyle="cornflowerblue",v.stroke()},s.bodyIds=function(k,x,w){var v=w,j,T;for(j=0;j<x.length;j++)if(x[j].render.visible){var P=x[j].parts;for(T=P.length>1?1:0;T<P.length;T++){var C=P[T];v.font="12px Arial",v.fillStyle="rgba(255,255,255,0.5)",v.fillText(C.id,C.position.x+10,C.position.y-10)}}},s.collisions=function(k,x,w){var v=w,j=k.options,T,P,C,A;for(v.beginPath(),C=0;C<x.length;C++)if(T=x[C],!!T.isActive)for(P=T.collision,A=0;A<T.contactCount;A++){var z=T.contacts[A],O=z.vertex;v.rect(O.x-1.5,O.y-1.5,3.5,3.5)}for(j.wireframes?v.fillStyle="rgba(255,255,255,0.7)":v.fillStyle="orange",v.fill(),v.beginPath(),C=0;C<x.length;C++)if(T=x[C],!!T.isActive&&(P=T.collision,T.contactCount>0)){var U=T.contacts[0].vertex.x,L=T.contacts[0].vertex.y;T.contactCount===2&&(U=(T.contacts[0].vertex.x+T.contacts[1].vertex.x)/2,L=(T.contacts[0].vertex.y+T.contacts[1].vertex.y)/2),P.bodyB===P.supports[0].body||P.bodyA.isStatic===!0?v.moveTo(U-P.normal.x*8,L-P.normal.y*8):v.moveTo(U+P.normal.x*8,L+P.normal.y*8),v.lineTo(U,L)}j.wireframes?v.strokeStyle="rgba(255,165,0,0.7)":v.strokeStyle="orange",v.lineWidth=1,v.stroke()},s.separations=function(k,x,w){var v=w,j=k.options,T,P,C,A,z;for(v.beginPath(),z=0;z<x.length;z++)if(T=x[z],!!T.isActive){P=T.collision,C=P.bodyA,A=P.bodyB;var O=1;!A.isStatic&&!C.isStatic&&(O=.5),A.isStatic&&(O=0),v.moveTo(A.position.x,A.position.y),v.lineTo(A.position.x-P.penetration.x*O,A.position.y-P.penetration.y*O),O=1,!A.isStatic&&!C.isStatic&&(O=.5),C.isStatic&&(O=0),v.moveTo(C.position.x,C.position.y),v.lineTo(C.position.x+P.penetration.x*O,C.position.y+P.penetration.y*O)}j.wireframes?v.strokeStyle="rgba(255,165,0,0.5)":v.strokeStyle="orange",v.stroke()},s.inspector=function(k,x){k.engine;var w=k.selected,v=k.render,j=v.options,T;if(j.hasBounds){var P=v.bounds.max.x-v.bounds.min.x,C=v.bounds.max.y-v.bounds.min.y,A=P/v.options.width,z=C/v.options.height;x.scale(1/A,1/z),x.translate(-v.bounds.min.x,-v.bounds.min.y)}for(var O=0;O<w.length;O++){var U=w[O].data;switch(x.translate(.5,.5),x.lineWidth=1,x.strokeStyle="rgba(255,165,0,0.9)",x.setLineDash([1,2]),U.type){case"body":T=U.bounds,x.beginPath(),x.rect(Math.floor(T.min.x-3),Math.floor(T.min.y-3),Math.floor(T.max.x-T.min.x+6),Math.floor(T.max.y-T.min.y+6)),x.closePath(),x.stroke();break;case"constraint":var L=U.pointA;U.bodyA&&(L=U.pointB),x.beginPath(),x.arc(L.x,L.y,10,0,2*Math.PI),x.closePath(),x.stroke();break}x.setLineDash([]),x.translate(-.5,-.5)}k.selectStart!==null&&(x.translate(.5,.5),x.lineWidth=1,x.strokeStyle="rgba(255,165,0,0.6)",x.fillStyle="rgba(255,165,0,0.1)",T=k.selectBounds,x.beginPath(),x.rect(Math.floor(T.min.x),Math.floor(T.min.y),Math.floor(T.max.x-T.min.x),Math.floor(T.max.y-T.min.y)),x.closePath(),x.stroke(),x.fill(),x.translate(-.5,-.5)),j.hasBounds&&x.setTransform(1,0,0,1,0,0)};var f=function(k,x){var w=k.engine,v=k.timing,j=v.historySize,T=w.timing.timestamp;v.delta=x-v.lastTime||s._goodDelta,v.lastTime=x,v.timestampElapsed=T-v.lastTimestamp||0,v.lastTimestamp=T,v.deltaHistory.unshift(v.delta),v.deltaHistory.length=Math.min(v.deltaHistory.length,j),v.engineDeltaHistory.unshift(w.timing.lastDelta),v.engineDeltaHistory.length=Math.min(v.engineDeltaHistory.length,j),v.timestampElapsedHistory.unshift(v.timestampElapsed),v.timestampElapsedHistory.length=Math.min(v.timestampElapsedHistory.length,j),v.engineUpdatesHistory.unshift(w.timing.lastUpdatesPerFrame),v.engineUpdatesHistory.length=Math.min(v.engineUpdatesHistory.length,j),v.engineElapsedHistory.unshift(w.timing.lastElapsed),v.engineElapsedHistory.length=Math.min(v.engineElapsedHistory.length,j),v.elapsedHistory.unshift(v.lastElapsed),v.elapsedHistory.length=Math.min(v.elapsedHistory.length,j)},m=function(k){for(var x=0,w=0;w<k.length;w+=1)x+=k[w];return x/k.length||0},y=function(k,x){var w=document.createElement("canvas");return w.width=k,w.height=x,w.oncontextmenu=function(){return!1},w.onselectstart=function(){return!1},w},b=function(k){var x=k.getContext("2d"),w=window.devicePixelRatio||1,v=x.webkitBackingStorePixelRatio||x.mozBackingStorePixelRatio||x.msBackingStorePixelRatio||x.oBackingStorePixelRatio||x.backingStorePixelRatio||1;return w/v},_=function(k,x){var w=k.textures[x];return w||(w=k.textures[x]=new Image,w.src=x,w)},S=function(k,x){var w=x;/(jpg|gif|png)$/.test(x)&&(w="url("+x+")"),k.canvas.style.background=w,k.canvas.style.backgroundSize="contain",k.currentBackground=x}})()},function(a,r,e){var s={};a.exports=s;var o=e(5),i=e(17),l=e(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(p){var u={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=l.extend(u,p);return h.fps=0,h},s.run=function(p,u){return p.timeBuffer=s._frameDeltaFallback,function h(d){p.frameRequestId=s._onNextFrame(p,h),d&&p.enabled&&s.tick(p,u,d)}(),p},s.tick=function(p,u,h){var d=l.now(),g=p.delta,f=0,m=h-p.timeLastTick;if((!m||!p.timeLastTick||m>Math.max(s._maxFrameDelta,p.maxFrameTime))&&(m=p.frameDelta||s._frameDeltaFallback),p.frameDeltaSmoothing){p.frameDeltaHistory.push(m),p.frameDeltaHistory=p.frameDeltaHistory.slice(-p.frameDeltaHistorySize);var y=p.frameDeltaHistory.slice(0).sort(),b=p.frameDeltaHistory.slice(y.length*s._smoothingLowerBound,y.length*s._smoothingUpperBound),_=c(b);m=_||m}p.frameDeltaSnapping&&(m=1e3/Math.round(1e3/m)),p.frameDelta=m,p.timeLastTick=h,p.timeBuffer+=p.frameDelta,p.timeBuffer=l.clamp(p.timeBuffer,0,p.frameDelta+g*s._timeBufferMargin),p.lastUpdatesDeferred=0;var S=p.maxUpdates||Math.ceil(p.maxFrameTime/g),k={timestamp:u.timing.timestamp};o.trigger(p,"beforeTick",k),o.trigger(p,"tick",k);for(var x=l.now();g>0&&p.timeBuffer>=g*s._timeBufferMargin;){o.trigger(p,"beforeUpdate",k),i.update(u,g),o.trigger(p,"afterUpdate",k),p.timeBuffer-=g,f+=1;var w=l.now()-d,v=l.now()-x,j=w+s._elapsedNextEstimate*v/f;if(f>=S||j>p.maxFrameTime){p.lastUpdatesDeferred=Math.round(Math.max(0,p.timeBuffer/g-s._timeBufferMargin));break}}u.timing.lastUpdatesPerFrame=f,o.trigger(p,"afterTick",k),p.frameDeltaHistory.length>=100&&(p.lastUpdatesDeferred&&Math.round(p.frameDelta/g)>S?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):p.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof p.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(p.deltaMin||p.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),p.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(p){s._cancelNextFrame(p)},s._onNextFrame=function(p,u){if(typeof window<"u"&&window.requestAnimationFrame)p.frameRequestId=window.requestAnimationFrame(u);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return p.frameRequestId},s._cancelNextFrame=function(p){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(p.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var c=function(p){for(var u=0,h=p.length,d=0;d<h;d+=1)u+=p[d];return u/h||0}})()},function(a,r,e){var s={};a.exports=s;var o=e(8),i=e(0),l=i.deprecated;(function(){s.collides=function(c,p){return o.collides(c,p)},l(s,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(a,r,e){var s={};a.exports=s,e(1);var o=e(0);(function(){s.pathToVertices=function(i,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var c,p,u,h,d,g,f,m,y,b,_=[],S,k,x=0,w=0,v=0;l=l||15;var j=function(P,C,A){var z=A%2===1&&A>1;if(!y||P!=y.x||C!=y.y){y&&z?(S=y.x,k=y.y):(S=0,k=0);var O={x:S+P,y:k+C};(z||!y)&&(y=O),_.push(O),w=S+P,v=k+C}},T=function(P){var C=P.pathSegTypeAsLetter.toUpperCase();if(C!=="Z"){switch(C){case"M":case"L":case"T":case"C":case"S":case"Q":w=P.x,v=P.y;break;case"H":w=P.x;break;case"V":v=P.y;break}j(w,v,P.pathSegType)}};for(s._svgPathToAbsolute(i),u=i.getTotalLength(),g=[],c=0;c<i.pathSegList.numberOfItems;c+=1)g.push(i.pathSegList.getItem(c));for(f=g.concat();x<u;){if(b=i.getPathSegAtLength(x),d=g[b],d!=m){for(;f.length&&f[0]!=d;)T(f.shift());m=d}switch(d.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=i.getPointAtLength(x),j(h.x,h.y,0);break}x+=l}for(c=0,p=f.length;c<p;++c)T(f[c]);return _},s._svgPathToAbsolute=function(i){for(var l,c,p,u,h,d,g=i.pathSegList,f=0,m=0,y=g.numberOfItems,b=0;b<y;++b){var _=g.getItem(b),S=_.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(S))"x"in _&&(f=_.x),"y"in _&&(m=_.y);else switch("x1"in _&&(p=f+_.x1),"x2"in _&&(h=f+_.x2),"y1"in _&&(u=m+_.y1),"y2"in _&&(d=m+_.y2),"x"in _&&(f+=_.x),"y"in _&&(m+=_.y),S){case"m":g.replaceItem(i.createSVGPathSegMovetoAbs(f,m),b);break;case"l":g.replaceItem(i.createSVGPathSegLinetoAbs(f,m),b);break;case"h":g.replaceItem(i.createSVGPathSegLinetoHorizontalAbs(f),b);break;case"v":g.replaceItem(i.createSVGPathSegLinetoVerticalAbs(m),b);break;case"c":g.replaceItem(i.createSVGPathSegCurvetoCubicAbs(f,m,p,u,h,d),b);break;case"s":g.replaceItem(i.createSVGPathSegCurvetoCubicSmoothAbs(f,m,h,d),b);break;case"q":g.replaceItem(i.createSVGPathSegCurvetoQuadraticAbs(f,m,p,u),b);break;case"t":g.replaceItem(i.createSVGPathSegCurvetoQuadraticSmoothAbs(f,m),b);break;case"a":g.replaceItem(i.createSVGPathSegArcAbs(f,m,_.r1,_.r2,_.angle,_.largeArcFlag,_.sweepFlag),b);break;case"z":case"Z":f=l,m=c;break}(S=="M"||S=="m")&&(l=f,c=m)}}})()},function(a,r,e){var s={};a.exports=s;var o=e(6);e(0),function(){s.create=o.create,s.add=o.add,s.remove=o.remove,s.clear=o.clear,s.addComposite=o.addComposite,s.addBody=o.addBody,s.addConstraint=o.addConstraint}()}])})}(Hs)),Hs.exports}var ut=Ef();function Bt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ql(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ha={duration:.5,overwrite:!1,delay:0},Zr,Ln,_n,zt=1e8,Nn=1/zt,cr=Math.PI*2,Mf=cr/4,Rf=0,Jl=Math.sqrt,Af=Math.cos,zf=Math.sin,Fn=function(n){return typeof n=="string"},Tn=function(n){return typeof n=="function"},qt=function(n){return typeof n=="number"},Qr=function(n){return typeof n>"u"},Ft=function(n){return typeof n=="object"},Qn=function(n){return n!==!1},Jr=function(){return typeof window<"u"},Ds=function(n){return Tn(n)||Fn(n)},nd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,ur=/(?:-?\.?\d|\.)+/gi,td=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ra=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,We=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ad=/[+-]=-?[.\d]+/,sd=/[^,'"\[\]\s]+/gi,If=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jn,Pt,fr,no,pt={},ee={},ed,rd=function(n){return(ee=qa(n,pt))&&at},to=function(n,a){return console.warn("Invalid property",n,"set to",a,"Missing plugin? gsap.registerPlugin()")},_s=function(n,a){return!a&&console.warn(n)},od=function(n,a){return n&&(pt[n]=a)&&ee&&(ee[n]=a)||pt},Ss=function(){return 0},Ff={suppressEvents:!0,isStart:!0,kill:!1},qs={suppressEvents:!0,kill:!1},Of={suppressEvents:!0},ao={},ea=[],hr={},id,rt={},Ne={},fi=30,Ys=[],so="",eo=function(n){var a=n[0],r,e;if(Ft(a)||Tn(a)||(n=[n]),!(r=(a._gsap||{}).harness)){for(e=Ys.length;e--&&!Ys[e].targetTest(a););r=Ys[e]}for(e=n.length;e--;)n[e]&&(n[e]._gsap||(n[e]._gsap=new Rd(n[e],r)))||n.splice(e,1);return n},ba=function(n){return n._gsap||eo(ht(n))[0]._gsap},ld=function(n,a,r){return(r=n[a])&&Tn(r)?n[a]():Qr(r)&&n.getAttribute&&n.getAttribute(a)||r},Jn=function(n,a){return(n=n.split(",")).forEach(a)||n},Pn=function(n){return Math.round(n*1e5)/1e5||0},Mn=function(n){return Math.round(n*1e7)/1e7||0},Ba=function(n,a){var r=a.charAt(0),e=parseFloat(a.substr(2));return n=parseFloat(n),r==="+"?n+e:r==="-"?n-e:r==="*"?n*e:n/e},Lf=function(n,a){for(var r=a.length,e=0;n.indexOf(a[e])<0&&++e<r;);return e<r},re=function(){var n=ea.length,a=ea.slice(0),r,e;for(hr={},ea.length=0,r=0;r<n;r++)e=a[r],e&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},ro=function(n){return!!(n._initted||n._startAt||n.add)},dd=function(n,a,r,e){ea.length&&!Ln&&re(),n.render(a,r,!!(Ln&&a<0&&ro(n))),ea.length&&!Ln&&re()},pd=function(n){var a=parseFloat(n);return(a||a===0)&&(n+"").match(sd).length<2?a:Fn(n)?n.trim():n},cd=function(n){return n},ct=function(n,a){for(var r in a)r in n||(n[r]=a[r]);return n},Df=function(n){return function(a,r){for(var e in r)e in a||e==="duration"&&n||e==="ease"||(a[e]=r[e])}},qa=function(n,a){for(var r in a)n[r]=a[r];return n},hi=function t(n,a){for(var r in a)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(n[r]=Ft(a[r])?t(n[r]||(n[r]={}),a[r]):a[r]);return n},oe=function(n,a){var r={},e;for(e in n)e in a||(r[e]=n[e]);return r},fs=function(n){var a=n.parent||jn,r=n.keyframes?Df(Hn(n.keyframes)):ct;if(Qn(n.inherit))for(;a;)r(n,a.vars.defaults),a=a.parent||a._dp;return n},Bf=function(n,a){for(var r=n.length,e=r===a.length;e&&r--&&n[r]===a[r];);return r<0},ud=function(n,a,r,e,s){var o=n[e],i;if(s)for(i=a[s];o&&o[s]>i;)o=o._prev;return o?(a._next=o._next,o._next=a):(a._next=n[r],n[r]=a),a._next?a._next._prev=a:n[e]=a,a._prev=o,a.parent=a._dp=n,a},Se=function(n,a,r,e){r===void 0&&(r="_first"),e===void 0&&(e="_last");var s=a._prev,o=a._next;s?s._next=o:n[r]===a&&(n[r]=o),o?o._prev=s:n[e]===a&&(n[e]=s),a._next=a._prev=a.parent=null},la=function(n,a){n.parent&&(!a||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},xa=function(n,a){if(n&&(!a||a._end>n._dur||a._start<0))for(var r=n;r;)r._dirty=1,r=r.parent;return n},Uf=function(n){for(var a=n.parent;a&&a.parent;)a._dirty=1,a.totalDuration(),a=a.parent;return n},gr=function(n,a,r,e){return n._startAt&&(Ln?n._startAt.revert(qs):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(a,!0,e))},Gf=function t(n){return!n||n._ts&&t(n.parent)},gi=function(n){return n._repeat?Ya(n._tTime,n=n.duration()+n._rDelay)*n:0},Ya=function(n,a){var r=Math.floor(n=Mn(n/a));return n&&r===n?r-1:r},ie=function(n,a){return(n-a._start)*a._ts+(a._ts>=0?0:a._dirty?a.totalDuration():a._tDur)},je=function(n){return n._end=Mn(n._start+(n._tDur/Math.abs(n._ts||n._rts||Nn)||0))},Ce=function(n,a){var r=n._dp;return r&&r.smoothChildTiming&&n._ts&&(n._start=Mn(r._time-(n._ts>0?a/n._ts:((n._dirty?n.totalDuration():n._tDur)-a)/-n._ts)),je(n),r._dirty||xa(r,n)),n},fd=function(n,a){var r;if((a._time||!a._dur&&a._initted||a._start<n._time&&(a._dur||!a.add))&&(r=ie(n.rawTime(),a),(!a._dur||Is(0,a.totalDuration(),r)-a._tTime>Nn)&&a.render(r,!0)),xa(n,a)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(r=n;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;n._zTime=-1e-8}},Mt=function(n,a,r,e){return a.parent&&la(a),a._start=Mn((qt(r)?r:r||n!==jn?ft(n,r,a):n._time)+a._delay),a._end=Mn(a._start+(a.totalDuration()/Math.abs(a.timeScale())||0)),ud(n,a,"_first","_last",n._sort?"_start":0),mr(a)||(n._recent=a),e||fd(n,a),n._ts<0&&Ce(n,n._tTime),n},hd=function(n,a){return(pt.ScrollTrigger||to("scrollTrigger",a))&&pt.ScrollTrigger.create(a,n)},gd=function(n,a,r,e,s){if(io(n,a,s),!n._initted)return 1;if(!r&&n._pt&&!Ln&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&id!==ot.frame)return ea.push(n),n._lazy=[s,e],1},Wf=function t(n){var a=n.parent;return a&&a._ts&&a._initted&&!a._lock&&(a.rawTime()<0||t(a))},mr=function(n){var a=n.data;return a==="isFromStart"||a==="isStart"},Nf=function(n,a,r,e){var s=n.ratio,o=a<0||!a&&(!n._start&&Wf(n)&&!(!n._initted&&mr(n))||(n._ts<0||n._dp._ts<0)&&!mr(n))?0:1,i=n._rDelay,l=0,c,p,u;if(i&&n._repeat&&(l=Is(0,n._tDur,a),p=Ya(l,i),n._yoyo&&p&1&&(o=1-o),p!==Ya(n._tTime,i)&&(s=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==s||Ln||e||n._zTime===Nn||!a&&n._zTime){if(!n._initted&&gd(n,a,e,r,l))return;for(u=n._zTime,n._zTime=a||(r?Nn:0),r||(r=a&&!u),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=l,c=n._pt;c;)c.r(o,c.d),c=c._next;a<0&&gr(n,a,r,!0),n._onUpdate&&!r&&lt(n,"onUpdate"),l&&n._repeat&&!r&&n.parent&&lt(n,"onRepeat"),(a>=n._tDur||a<0)&&n.ratio===o&&(o&&la(n,1),!r&&!Ln&&(lt(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=a)},Vf=function(n,a,r){var e;if(r>a)for(e=n._first;e&&e._start<=r;){if(e.data==="isPause"&&e._start>a)return e;e=e._next}else for(e=n._last;e&&e._start>=r;){if(e.data==="isPause"&&e._start<a)return e;e=e._prev}},$a=function(n,a,r,e){var s=n._repeat,o=Mn(a)||0,i=n._tTime/n._tDur;return i&&!e&&(n._time*=o/n._dur),n._dur=o,n._tDur=s?s<0?1e10:Mn(o*(s+1)+n._rDelay*s):o,i>0&&!e&&Ce(n,n._tTime=n._tDur*i),n.parent&&je(n),r||xa(n.parent,n),n},mi=function(n){return n instanceof Xn?xa(n):$a(n,n._dur)},Hf={_start:0,endTime:Ss,totalDuration:Ss},ft=function t(n,a,r){var e=n.labels,s=n._recent||Hf,o=n.duration()>=zt?s.endTime(!1):n._dur,i,l,c;return Fn(a)&&(isNaN(a)||a in e)?(l=a.charAt(0),c=a.substr(-1)==="%",i=a.indexOf("="),l==="<"||l===">"?(i>=0&&(a=a.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(a.substr(1))||0)*(c?(i<0?s:r).totalDuration()/100:1)):i<0?(a in e||(e[a]=o),e[a]):(l=parseFloat(a.charAt(i-1)+a.substr(i+1)),c&&r&&(l=l/100*(Hn(r)?r[0]:r).totalDuration()),i>1?t(n,a.substr(0,i-1),r)+l:o+l)):a==null?o:+a},hs=function(n,a,r){var e=qt(a[1]),s=(e?2:1)+(n<2?0:1),o=a[s],i,l;if(e&&(o.duration=a[1]),o.parent=r,n){for(i=o,l=r;l&&!("immediateRender"in i);)i=l.vars.defaults||{},l=Qn(l.vars.inherit)&&l.parent;o.immediateRender=Qn(i.immediateRender),n<2?o.runBackwards=1:o.startAt=a[s-1]}return new En(a[0],o,a[s+1])},ca=function(n,a){return n||n===0?a(n):a},Is=function(n,a,r){return r<n?n:r>a?a:r},Wn=function(n,a){return!Fn(n)||!(a=If.exec(n))?"":a[1]},qf=function(n,a,r){return ca(r,function(e){return Is(n,a,e)})},kr=[].slice,md=function(n,a){return n&&Ft(n)&&"length"in n&&(!a&&!n.length||n.length-1 in n&&Ft(n[0]))&&!n.nodeType&&n!==Pt},Yf=function(n,a,r){return r===void 0&&(r=[]),n.forEach(function(e){var s;return Fn(e)&&!a||md(e,1)?(s=r).push.apply(s,ht(e)):r.push(e)})||r},ht=function(n,a,r){return _n&&!a&&_n.selector?_n.selector(n):Fn(n)&&!r&&(fr||!Ka())?kr.call((a||no).querySelectorAll(n),0):Hn(n)?Yf(n,r):md(n)?kr.call(n,0):n?[n]:[]},yr=function(n){return n=ht(n)[0]||_s("Invalid scope")||{},function(a){var r=n.current||n.nativeElement||n;return ht(a,r.querySelectorAll?r:r===n?_s("Invalid scope")||no.createElement("div"):n)}},kd=function(n){return n.sort(function(){return .5-Math.random()})},yd=function(n){if(Tn(n))return n;var a=Ft(n)?n:{each:n},r=wa(a.ease),e=a.from||0,s=parseFloat(a.base)||0,o={},i=e>0&&e<1,l=isNaN(e)||i,c=a.axis,p=e,u=e;return Fn(e)?p=u={center:.5,edges:.5,end:1}[e]||0:!i&&l&&(p=e[0],u=e[1]),function(h,d,g){var f=(g||a).length,m=o[f],y,b,_,S,k,x,w,v,j;if(!m){if(j=a.grid==="auto"?0:(a.grid||[1,zt])[1],!j){for(w=-1e8;w<(w=g[j++].getBoundingClientRect().left)&&j<f;);j<f&&j--}for(m=o[f]=[],y=l?Math.min(j,f)*p-.5:e%j,b=j===zt?0:l?f*u/j-.5:e/j|0,w=0,v=zt,x=0;x<f;x++)_=x%j-y,S=b-(x/j|0),m[x]=k=c?Math.abs(c==="y"?S:_):Jl(_*_+S*S),k>w&&(w=k),k<v&&(v=k);e==="random"&&kd(m),m.max=w-v,m.min=v,m.v=f=(parseFloat(a.amount)||parseFloat(a.each)*(j>f?f-1:c?c==="y"?f/j:j:Math.max(j,f/j))||0)*(e==="edges"?-1:1),m.b=f<0?s-f:s,m.u=Wn(a.amount||a.each)||0,r=r&&f<0?Pd(r):r}return f=(m[h]-m.min)/m.max||0,Mn(m.b+(r?r(f):f)*m.v)+m.u}},vr=function(n){var a=Math.pow(10,((n+"").split(".")[1]||"").length);return function(r){var e=Mn(Math.round(parseFloat(r)/n)*n*a);return(e-e%1)/a+(qt(r)?0:Wn(r))}},vd=function(n,a){var r=Hn(n),e,s;return!r&&Ft(n)&&(e=r=n.radius||zt,n.values?(n=ht(n.values),(s=!qt(n[0]))&&(e*=e)):n=vr(n.increment)),ca(a,r?Tn(n)?function(o){return s=n(o),Math.abs(s-o)<=e?s:o}:function(o){for(var i=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=zt,p=0,u=n.length,h,d;u--;)s?(h=n[u].x-i,d=n[u].y-l,h=h*h+d*d):h=Math.abs(n[u]-i),h<c&&(c=h,p=u);return p=!e||c<=e?n[p]:o,s||p===o||qt(o)?p:p+Wn(o)}:vr(n))},bd=function(n,a,r,e){return ca(Hn(n)?!a:r===!0?!!(r=0):!e,function(){return Hn(n)?n[~~(Math.random()*n.length)]:(r=r||1e-5)&&(e=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((n-r/2+Math.random()*(a-n+r*.99))/r)*r*e)/e})},$f=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return function(e){return a.reduce(function(s,o){return o(s)},e)}},Kf=function(n,a){return function(r){return n(parseFloat(r))+(a||Wn(r))}},Xf=function(n,a,r){return wd(n,a,0,1,r)},xd=function(n,a,r){return ca(r,function(e){return n[~~a(e)]})},Zf=function t(n,a,r){var e=a-n;return Hn(n)?xd(n,t(0,n.length),a):ca(r,function(s){return(e+(s-n)%e)%e+n})},Qf=function t(n,a,r){var e=a-n,s=e*2;return Hn(n)?xd(n,t(0,n.length-1),a):ca(r,function(o){return o=(s+(o-n)%s)%s||0,n+(o>e?s-o:o)})},js=function(n){for(var a=0,r="",e,s,o,i;~(e=n.indexOf("random(",a));)o=n.indexOf(")",e),i=n.charAt(e+7)==="[",s=n.substr(e+7,o-e-7).match(i?sd:ur),r+=n.substr(a,e-a)+bd(i?s:+s[0],i?0:+s[1],+s[2]||1e-5),a=o+1;return r+n.substr(a,n.length-a)},wd=function(n,a,r,e,s){var o=a-n,i=e-r;return ca(s,function(l){return r+((l-n)/o*i||0)})},Jf=function t(n,a,r,e){var s=isNaN(n+a)?0:function(d){return(1-d)*n+d*a};if(!s){var o=Fn(n),i={},l,c,p,u,h;if(r===!0&&(e=1)&&(r=null),o)n={p:n},a={p:a};else if(Hn(n)&&!Hn(a)){for(p=[],u=n.length,h=u-2,c=1;c<u;c++)p.push(t(n[c-1],n[c]));u--,s=function(g){g*=u;var f=Math.min(h,~~g);return p[f](g-f)},r=a}else e||(n=qa(Hn(n)?[]:{},n));if(!p){for(l in a)oo.call(i,n,l,"get",a[l]);s=function(g){return co(g,i)||(o?n.p:n)}}}return ca(r,s)},ki=function(n,a,r){var e=n.labels,s=zt,o,i,l;for(o in e)i=e[o]-a,i<0==!!r&&i&&s>(i=Math.abs(i))&&(l=o,s=i);return l},lt=function(n,a,r){var e=n.vars,s=e[a],o=_n,i=n._ctx,l,c,p;if(s)return l=e[a+"Params"],c=e.callbackScope||n,r&&ea.length&&re(),i&&(_n=i),p=l?s.apply(c,l):s.call(c),_n=o,p},ss=function(n){return la(n),n.scrollTrigger&&n.scrollTrigger.kill(!!Ln),n.progress()<1&&lt(n,"onInterrupt"),n},Aa,_d=[],Sd=function(n){if(n)if(n=!n.name&&n.default||n,Jr()||n.headless){var a=n.name,r=Tn(n),e=a&&!r&&n.init?function(){this._props=[]}:n,s={init:Ss,render:co,add:oo,kill:gh,modifier:hh,rawVars:0},o={targetTest:0,get:0,getSetter:po,aliases:{},register:0};if(Ka(),n!==e){if(rt[a])return;ct(e,ct(oe(n,s),o)),qa(e.prototype,qa(s,oe(n,o))),rt[e.prop=a]=e,n.targetTest&&(Ys.push(e),ao[a]=1),a=(a==="css"?"CSS":a.charAt(0).toUpperCase()+a.substr(1))+"Plugin"}od(a,e),n.register&&n.register(at,e,nt)}else _d.push(n)},vn=255,es={aqua:[0,vn,vn],lime:[0,vn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vn],navy:[0,0,128],white:[vn,vn,vn],olive:[128,128,0],yellow:[vn,vn,0],orange:[vn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vn,0,0],pink:[vn,192,203],cyan:[0,vn,vn],transparent:[vn,vn,vn,0]},Ve=function(n,a,r){return n+=n<0?1:n>1?-1:0,(n*6<1?a+(r-a)*n*6:n<.5?r:n*3<2?a+(r-a)*(2/3-n)*6:a)*vn+.5|0},jd=function(n,a,r){var e=n?qt(n)?[n>>16,n>>8&vn,n&vn]:0:es.black,s,o,i,l,c,p,u,h,d,g;if(!e){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),es[n])e=es[n];else if(n.charAt(0)==="#"){if(n.length<6&&(s=n.charAt(1),o=n.charAt(2),i=n.charAt(3),n="#"+s+s+o+o+i+i+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return e=parseInt(n.substr(1,6),16),[e>>16,e>>8&vn,e&vn,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),e=[n>>16,n>>8&vn,n&vn]}else if(n.substr(0,3)==="hsl"){if(e=g=n.match(ur),!a)l=+e[0]%360/360,c=+e[1]/100,p=+e[2]/100,o=p<=.5?p*(c+1):p+c-p*c,s=p*2-o,e.length>3&&(e[3]*=1),e[0]=Ve(l+1/3,s,o),e[1]=Ve(l,s,o),e[2]=Ve(l-1/3,s,o);else if(~n.indexOf("="))return e=n.match(td),r&&e.length<4&&(e[3]=1),e}else e=n.match(ur)||es.transparent;e=e.map(Number)}return a&&!g&&(s=e[0]/vn,o=e[1]/vn,i=e[2]/vn,u=Math.max(s,o,i),h=Math.min(s,o,i),p=(u+h)/2,u===h?l=c=0:(d=u-h,c=p>.5?d/(2-u-h):d/(u+h),l=u===s?(o-i)/d+(o<i?6:0):u===o?(i-s)/d+2:(s-o)/d+4,l*=60),e[0]=~~(l+.5),e[1]=~~(c*100+.5),e[2]=~~(p*100+.5)),r&&e.length<4&&(e[3]=1),e},Cd=function(n){var a=[],r=[],e=-1;return n.split(ra).forEach(function(s){var o=s.match(Ra)||[];a.push.apply(a,o),r.push(e+=o.length+1)}),a.c=r,a},yi=function(n,a,r){var e="",s=(n+e).match(ra),o=a?"hsla(":"rgba(",i=0,l,c,p,u;if(!s)return n;if(s=s.map(function(h){return(h=jd(h,a,1))&&o+(a?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),r&&(p=Cd(n),l=r.c,l.join(e)!==p.c.join(e)))for(c=n.replace(ra,"1").split(Ra),u=c.length-1;i<u;i++)e+=c[i]+(~l.indexOf(i)?s.shift()||o+"0,0,0,0)":(p.length?p:s.length?s:r).shift());if(!c)for(c=n.split(ra),u=c.length-1;i<u;i++)e+=c[i]+s[i];return e+c[u]},ra=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in es)t+="|"+n+"\\b";return new RegExp(t+")","gi")}(),nh=/hsl[a]?\(/,Td=function(n){var a=n.join(" "),r;if(ra.lastIndex=0,ra.test(a))return r=nh.test(a),n[1]=yi(n[1],r),n[0]=yi(n[0],r,Cd(n[1])),!0},Cs,ot=function(){var t=Date.now,n=500,a=33,r=t(),e=r,s=1e3/240,o=s,i=[],l,c,p,u,h,d,g=function f(m){var y=t()-e,b=m===!0,_,S,k,x;if((y>n||y<0)&&(r+=y-a),e+=y,k=e-r,_=k-o,(_>0||b)&&(x=++u.frame,h=k-u.time*1e3,u.time=k=k/1e3,o+=_+(_>=s?4:s-_),S=1),b||(l=c(f)),S)for(d=0;d<i.length;d++)i[d](k,h,x,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ed&&(!fr&&Jr()&&(Pt=fr=window,no=Pt.document||{},pt.gsap=at,(Pt.gsapVersions||(Pt.gsapVersions=[])).push(at.version),rd(ee||Pt.GreenSockGlobals||!Pt.gsap&&Pt||{}),_d.forEach(Sd)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=p||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Cs=1,g(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(l),Cs=0,c=Ss},lagSmoothing:function(m,y){n=m||1/0,a=Math.min(y||33,n)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,y,b){var _=y?function(S,k,x,w){m(S,k,x,w),u.remove(_)}:m;return u.remove(m),i[b?"unshift":"push"](_),Ka(),_},remove:function(m,y){~(y=i.indexOf(m))&&i.splice(y,1)&&d>=y&&d--},_listeners:i},u}(),Ka=function(){return!Cs&&ot.wake()},fn={},th=/^[\d.\-M][\d.\-,\s]/,ah=/["']/g,sh=function(n){for(var a={},r=n.substr(1,n.length-3).split(":"),e=r[0],s=1,o=r.length,i,l,c;s<o;s++)l=r[s],i=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,i),a[e]=isNaN(c)?c.replace(ah,"").trim():+c,e=l.substr(i+1).trim();return a},eh=function(n){var a=n.indexOf("(")+1,r=n.indexOf(")"),e=n.indexOf("(",a);return n.substring(a,~e&&e<r?n.indexOf(")",r+1):r)},rh=function(n){var a=(n+"").split("("),r=fn[a[0]];return r&&a.length>1&&r.config?r.config.apply(null,~n.indexOf("{")?[sh(a[1])]:eh(n).split(",").map(pd)):fn._CE&&th.test(n)?fn._CE("",n):r},Pd=function(n){return function(a){return 1-n(1-a)}},Ed=function t(n,a){for(var r=n._first,e;r;)r instanceof Xn?t(r,a):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==a&&(r.timeline?t(r.timeline,a):(e=r._ease,r._ease=r._yEase,r._yEase=e,r._yoyo=a)),r=r._next},wa=function(n,a){return n&&(Tn(n)?n:fn[n]||rh(n))||a},Ca=function(n,a,r,e){r===void 0&&(r=function(l){return 1-a(1-l)}),e===void 0&&(e=function(l){return l<.5?a(l*2)/2:1-a((1-l)*2)/2});var s={easeIn:a,easeOut:r,easeInOut:e},o;return Jn(n,function(i){fn[i]=pt[i]=s,fn[o=i.toLowerCase()]=r;for(var l in s)fn[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fn[i+"."+l]=s[l]}),s},Md=function(n){return function(a){return a<.5?(1-n(1-a*2))/2:.5+n((a-.5)*2)/2}},He=function t(n,a,r){var e=a>=1?a:1,s=(r||(n?.3:.45))/(a<1?a:1),o=s/cr*(Math.asin(1/e)||0),i=function(p){return p===1?1:e*Math.pow(2,-10*p)*zf((p-o)*s)+1},l=n==="out"?i:n==="in"?function(c){return 1-i(1-c)}:Md(i);return s=cr/s,l.config=function(c,p){return t(n,c,p)},l},qe=function t(n,a){a===void 0&&(a=1.70158);var r=function(o){return o?--o*o*((a+1)*o+a)+1:0},e=n==="out"?r:n==="in"?function(s){return 1-r(1-s)}:Md(r);return e.config=function(s){return t(n,s)},e};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,n){var a=n<5?n+1:n;Ca(t+",Power"+(a-1),n?function(r){return Math.pow(r,a)}:function(r){return r},function(r){return 1-Math.pow(1-r,a)},function(r){return r<.5?Math.pow(r*2,a)/2:1-Math.pow((1-r)*2,a)/2})});fn.Linear.easeNone=fn.none=fn.Linear.easeIn;Ca("Elastic",He("in"),He("out"),He());(function(t,n){var a=1/n,r=2*a,e=2.5*a,s=function(i){return i<a?t*i*i:i<r?t*Math.pow(i-1.5/n,2)+.75:i<e?t*(i-=2.25/n)*i+.9375:t*Math.pow(i-2.625/n,2)+.984375};Ca("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ca("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Ca("Circ",function(t){return-(Jl(1-t*t)-1)});Ca("Sine",function(t){return t===1?1:-Af(t*Mf)+1});Ca("Back",qe("in"),qe("out"),qe());fn.SteppedEase=fn.steps=pt.SteppedEase={config:function(n,a){n===void 0&&(n=1);var r=1/n,e=n+(a?0:1),s=a?1:0,o=1-Nn;return function(i){return((e*Is(0,o,i)|0)+s)*r}}};Ha.ease=fn["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return so+=t+","+t+"Params,"});var Rd=function(n,a){this.id=Rf++,n._gsap=this,this.target=n,this.harness=a,this.get=a?a.get:ld,this.set=a?a.getSetter:po},Ts=function(){function t(a){this.vars=a,this._delay=+a.delay||0,(this._repeat=a.repeat===1/0?-2:a.repeat||0)&&(this._rDelay=a.repeatDelay||0,this._yoyo=!!a.yoyo||!!a.yoyoEase),this._ts=1,$a(this,+a.duration,1,1),this.data=a.data,_n&&(this._ctx=_n,_n.data.push(this)),Cs||ot.wake()}var n=t.prototype;return n.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},n.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},n.totalDuration=function(r){return arguments.length?(this._dirty=0,$a(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(r,e){if(Ka(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ce(this,r),!s._dp||s.parent||fd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Mt(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===Nn||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),dd(this,r,e)),this},n.time=function(r,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+gi(this))%(this._dur+this._rDelay)||(r?this._dur:0),e):this._time},n.totalProgress=function(r,e){return arguments.length?this.totalTime(this.totalDuration()*r,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(r,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+gi(this),e):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(r,e){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,e):this._repeat?Ya(this._tTime,s)+1:1},n.timeScale=function(r,e){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?ie(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(Is(-Math.abs(this._delay),this.totalDuration(),s),e!==!1),je(this),Uf(this)},n.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nn&&(this._tTime-=Nn)))),this):this._ps},n.startTime=function(r){if(arguments.length){this._start=r;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&Mt(e,this,r-this._delay),this}return this._start},n.endTime=function(r){return this._start+(Qn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(r){var e=this.parent||this._dp;return e?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ie(e.rawTime(r),this):this._tTime:this._tTime},n.revert=function(r){r===void 0&&(r=Of);var e=Ln;return Ln=r,ro(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Ln=e,this},n.globalTime=function(r){for(var e=this,s=arguments.length?r:e.rawTime();e;)s=e._start+s/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(r):s},n.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,mi(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(r){if(arguments.length){var e=this._time;return this._rDelay=r,mi(this),e?this.time(e):this}return this._rDelay},n.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},n.seek=function(r,e){return this.totalTime(ft(this,r),Qn(e))},n.restart=function(r,e){return this.play().totalTime(r?-this._delay:0,Qn(e)),this._dur||(this._zTime=-1e-8),this},n.play=function(r,e){return r!=null&&this.seek(r,e),this.reversed(!1).paused(!1)},n.reverse=function(r,e){return r!=null&&this.seek(r||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.pause=function(r,e){return r!=null&&this.seek(r,e),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},n.isActive=function(){var r=this.parent||this._dp,e=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=e&&s<this.endTime(!0)-Nn)},n.eventCallback=function(r,e,s){var o=this.vars;return arguments.length>1?(e?(o[r]=e,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=e)):delete o[r],this):o[r]},n.then=function(r){var e=this;return new Promise(function(s){var o=Tn(r)?r:cd,i=function(){var c=e.then;e.then=null,Tn(o)&&(o=o(e))&&(o.then||o===e)&&(e.then=c),s(o),e.then=c};e._initted&&e.totalProgress()===1&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i})},n.kill=function(){ss(this)},t}();ct(Ts.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Xn=function(t){Ql(n,t);function n(r,e){var s;return r===void 0&&(r={}),s=t.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=Qn(r.sortChildren),jn&&Mt(r.parent||jn,Bt(s),e),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&hd(Bt(s),r.scrollTrigger),s}var a=n.prototype;return a.to=function(e,s,o){return hs(0,arguments,this),this},a.from=function(e,s,o){return hs(1,arguments,this),this},a.fromTo=function(e,s,o,i){return hs(2,arguments,this),this},a.set=function(e,s,o){return s.duration=0,s.parent=this,fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new En(e,s,ft(this,o),1),this},a.call=function(e,s,o){return Mt(this,En.delayedCall(0,e,s),o)},a.staggerTo=function(e,s,o,i,l,c,p){return o.duration=s,o.stagger=o.stagger||i,o.onComplete=c,o.onCompleteParams=p,o.parent=this,new En(e,o,ft(this,l)),this},a.staggerFrom=function(e,s,o,i,l,c,p){return o.runBackwards=1,fs(o).immediateRender=Qn(o.immediateRender),this.staggerTo(e,s,o,i,l,c,p)},a.staggerFromTo=function(e,s,o,i,l,c,p,u){return i.startAt=o,fs(i).immediateRender=Qn(i.immediateRender),this.staggerTo(e,s,i,l,c,p,u)},a.render=function(e,s,o){var i=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,p=e<=0?0:Mn(e),u=this._zTime<0!=e<0&&(this._initted||!c),h,d,g,f,m,y,b,_,S,k,x,w;if(this!==jn&&p>l&&e>=0&&(p=l),p!==this._tTime||o||u){if(i!==this._time&&c&&(p+=this._time-i,e+=this._time-i),h=p,S=this._start,_=this._ts,y=!_,u&&(c||(i=this._zTime),(e||!s)&&(this._zTime=e)),this._repeat){if(x=this._yoyo,m=c+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,s,o);if(h=Mn(p%m),p===l?(f=this._repeat,h=c):(k=Mn(p/m),f=~~k,f&&f===k&&(h=c,f--),h>c&&(h=c)),k=Ya(this._tTime,m),!i&&this._tTime&&k!==f&&this._tTime-k*m-this._dur<=0&&(k=f),x&&f&1&&(h=c-h,w=1),f!==k&&!this._lock){var v=x&&k&1,j=v===(x&&f&1);if(f<k&&(v=!v),i=v?0:p%c?c:p,this._lock=1,this.render(i||(w?0:Mn(f*m)),s,!c)._lock=0,this._tTime=p,!s&&this.parent&&lt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),i&&i!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,j&&(this._lock=2,i=v?c:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;Ed(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Vf(this,Mn(i),Mn(h)),b&&(p-=h-(h=b._start))),this._tTime=p,this._time=h,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,i=0),!i&&p&&!s&&!k&&(lt(this,"onStart"),this._tTime!==p))return this;if(h>=i&&e>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(e,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!y){b=0,g&&(p+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var T=e<0?e:h;d;){if(g=d._prev,(d._act||T<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(e,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||Ln&&ro(d)),h!==this._time||!this._ts&&!y){b=0,g&&(p+=this._zTime=T?-1e-8:Nn);break}}d=g}}if(b&&!s&&(this.pause(),b.render(h>=i?0:-1e-8)._zTime=h>=i?1:-1,this._ts))return this._start=S,je(this),this.render(e,s,o);this._onUpdate&&!s&&lt(this,"onUpdate",!0),(p===l&&this._tTime>=this.totalDuration()||!p&&i)&&(S===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((e||!c)&&(p===l&&this._ts>0||!p&&this._ts<0)&&la(this,1),!s&&!(e<0&&!i)&&(p||i||!l)&&(lt(this,p===l&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom())))}return this},a.add=function(e,s){var o=this;if(qt(s)||(s=ft(this,s,e)),!(e instanceof Ts)){if(Hn(e))return e.forEach(function(i){return o.add(i,s)}),this;if(Fn(e))return this.addLabel(e,s);if(Tn(e))e=En.delayedCall(0,e);else return this}return this!==e?Mt(this,e,s):this},a.getChildren=function(e,s,o,i){e===void 0&&(e=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),i===void 0&&(i=-1e8);for(var l=[],c=this._first;c;)c._start>=i&&(c instanceof En?s&&l.push(c):(o&&l.push(c),e&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},a.getById=function(e){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===e)return s[o]},a.remove=function(e){return Fn(e)?this.removeLabel(e):Tn(e)?this.killTweensOf(e):(e.parent===this&&Se(this,e),e===this._recent&&(this._recent=this._last),xa(this))},a.totalTime=function(e,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mn(ot.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),t.prototype.totalTime.call(this,e,s),this._forcing=0,this):this._tTime},a.addLabel=function(e,s){return this.labels[e]=ft(this,s),this},a.removeLabel=function(e){return delete this.labels[e],this},a.addPause=function(e,s,o){var i=En.delayedCall(0,s||Ss,o);return i.data="isPause",this._hasPause=1,Mt(this,i,ft(this,e))},a.removePause=function(e){var s=this._first;for(e=ft(this,e);s;)s._start===e&&s.data==="isPause"&&la(s),s=s._next},a.killTweensOf=function(e,s,o){for(var i=this.getTweensOf(e,o),l=i.length;l--;)na!==i[l]&&i[l].kill(e,s);return this},a.getTweensOf=function(e,s){for(var o=[],i=ht(e),l=this._first,c=qt(s),p;l;)l instanceof En?Lf(l._targets,i)&&(c?(!na||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(p=l.getTweensOf(i,s)).length&&o.push.apply(o,p),l=l._next;return o},a.tweenTo=function(e,s){s=s||{};var o=this,i=ft(o,e),l=s,c=l.startAt,p=l.onStart,u=l.onStartParams,h=l.immediateRender,d,g=En.to(o,ct({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:s.duration||Math.abs((i-(c&&"time"in c?c.time:o._time))/o.timeScale())||Nn,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((i-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&$a(g,m,0,1).render(g._time,!0,!0),d=1}p&&p.apply(g,u||[])}},s));return h?g.render(0):g},a.tweenFromTo=function(e,s,o){return this.tweenTo(s,ct({startAt:{time:ft(this,e)}},o))},a.recent=function(){return this._recent},a.nextLabel=function(e){return e===void 0&&(e=this._time),ki(this,ft(this,e))},a.previousLabel=function(e){return e===void 0&&(e=this._time),ki(this,ft(this,e),1)},a.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Nn)},a.shiftChildren=function(e,s,o){o===void 0&&(o=0);for(var i=this._first,l=this.labels,c;i;)i._start>=o&&(i._start+=e,i._end+=e),i=i._next;if(s)for(c in l)l[c]>=o&&(l[c]+=e);return xa(this)},a.invalidate=function(e){var s=this._first;for(this._lock=0;s;)s.invalidate(e),s=s._next;return t.prototype.invalidate.call(this,e)},a.clear=function(e){e===void 0&&(e=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),xa(this)},a.totalDuration=function(e){var s=0,o=this,i=o._last,l=zt,c,p,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-e:e));if(o._dirty){for(u=o.parent;i;)c=i._prev,i._dirty&&i.totalDuration(),p=i._start,p>l&&o._sort&&i._ts&&!o._lock?(o._lock=1,Mt(o,i,p-i._delay,1)._lock=0):l=p,p<0&&i._ts&&(s-=p,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=p/o._ts,o._time-=p,o._tTime-=p),o.shiftChildren(-p,!1,-1/0),l=0),i._end>s&&i._ts&&(s=i._end),i=c;$a(o,o===jn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},n.updateRoot=function(e){if(jn._ts&&(dd(jn,ie(e,jn)),id=ot.frame),ot.frame>=fi){fi+=dt.autoSleep||120;var s=jn._first;if((!s||!s._ts)&&dt.autoSleep&&ot._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ot.sleep()}}},n}(Ts);ct(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var oh=function(n,a,r,e,s,o,i){var l=new nt(this._pt,n,a,0,1,Ld,null,s),c=0,p=0,u,h,d,g,f,m,y,b;for(l.b=r,l.e=e,r+="",e+="",(y=~e.indexOf("random("))&&(e=js(e)),o&&(b=[r,e],o(b,n,a),r=b[0],e=b[1]),h=r.match(We)||[];u=We.exec(e);)g=u[0],f=e.substring(c,u.index),d?d=(d+1)%5:f.substr(-5)==="rgba("&&(d=1),g!==h[p++]&&(m=parseFloat(h[p-1])||0,l._pt={_next:l._pt,p:f||p===1?f:",",s:m,c:g.charAt(1)==="="?Ba(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=We.lastIndex);return l.c=c<e.length?e.substring(c,e.length):"",l.fp=i,(ad.test(e)||y)&&(l.e=0),this._pt=l,l},oo=function(n,a,r,e,s,o,i,l,c,p){Tn(e)&&(e=e(s||0,n,o));var u=n[a],h=r!=="get"?r:Tn(u)?c?n[a.indexOf("set")||!Tn(n["get"+a.substr(3)])?a:"get"+a.substr(3)](c):n[a]():u,d=Tn(u)?c?ch:Fd:lo,g;if(Fn(e)&&(~e.indexOf("random(")&&(e=js(e)),e.charAt(1)==="="&&(g=Ba(h,e)+(Wn(h)||0),(g||g===0)&&(e=g))),!p||h!==e||br)return!isNaN(h*e)&&e!==""?(g=new nt(this._pt,n,a,+h||0,e-(h||0),typeof u=="boolean"?fh:Od,0,d),c&&(g.fp=c),i&&g.modifier(i,this,n),this._pt=g):(!u&&!(a in n)&&to(a,e),oh.call(this,n,a,h,e,d,l||dt.stringFilter,c))},ih=function(n,a,r,e,s){if(Tn(n)&&(n=gs(n,s,a,r,e)),!Ft(n)||n.style&&n.nodeType||Hn(n)||nd(n))return Fn(n)?gs(n,s,a,r,e):n;var o={},i;for(i in n)o[i]=gs(n[i],s,a,r,e);return o},Ad=function(n,a,r,e,s,o){var i,l,c,p;if(rt[n]&&(i=new rt[n]).init(s,i.rawVars?a[n]:ih(a[n],e,s,o,r),r,e,o)!==!1&&(r._pt=l=new nt(r._pt,s,n,0,1,i.render,i,0,i.priority),r!==Aa))for(c=r._ptLookup[r._targets.indexOf(s)],p=i._props.length;p--;)c[i._props[p]]=l;return i},na,br,io=function t(n,a,r){var e=n.vars,s=e.ease,o=e.startAt,i=e.immediateRender,l=e.lazy,c=e.onUpdate,p=e.runBackwards,u=e.yoyoEase,h=e.keyframes,d=e.autoRevert,g=n._dur,f=n._startAt,m=n._targets,y=n.parent,b=y&&y.data==="nested"?y.vars.targets:m,_=n._overwrite==="auto"&&!Zr,S=n.timeline,k,x,w,v,j,T,P,C,A,z,O,U,L;if(S&&(!h||!s)&&(s="none"),n._ease=wa(s,Ha.ease),n._yEase=u?Pd(wa(u===!0?s:u,Ha.ease)):0,u&&n._yoyo&&!n._repeat&&(u=n._yEase,n._yEase=n._ease,n._ease=u),n._from=!S&&!!e.runBackwards,!S||h&&!e.stagger){if(C=m[0]?ba(m[0]).harness:0,U=C&&e[C.prop],k=oe(e,ao),f&&(f._zTime<0&&f.progress(1),a<0&&p&&i&&!d?f.render(-1,!0):f.revert(p&&g?qs:Ff),f._lazy=0),o){if(la(n._startAt=En.set(m,ct({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!f&&Qn(l),startAt:null,delay:0,onUpdate:c&&function(){return lt(n,"onUpdate")},stagger:0},o))),n._startAt._dp=0,n._startAt._sat=n,a<0&&(Ln||!i&&!d)&&n._startAt.revert(qs),i&&g&&a<=0&&r<=0){a&&(n._zTime=a);return}}else if(p&&g&&!f){if(a&&(i=!1),w=ct({overwrite:!1,data:"isFromStart",lazy:i&&!f&&Qn(l),immediateRender:i,stagger:0,parent:y},k),U&&(w[C.prop]=U),la(n._startAt=En.set(m,w)),n._startAt._dp=0,n._startAt._sat=n,a<0&&(Ln?n._startAt.revert(qs):n._startAt.render(-1,!0)),n._zTime=a,!i)t(n._startAt,Nn,Nn);else if(!a)return}for(n._pt=n._ptCache=0,l=g&&Qn(l)||l&&!g,x=0;x<m.length;x++){if(j=m[x],P=j._gsap||eo(m)[x]._gsap,n._ptLookup[x]=z={},hr[P.id]&&ea.length&&re(),O=b===m?x:b.indexOf(j),C&&(A=new C).init(j,U||k,n,O,b)!==!1&&(n._pt=v=new nt(n._pt,j,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(V){z[V]=v}),A.priority&&(T=1)),!C||U)for(w in k)rt[w]&&(A=Ad(w,k,n,O,j,b))?A.priority&&(T=1):z[w]=v=oo.call(n,j,w,"get",k[w],O,b,0,e.stringFilter);n._op&&n._op[x]&&n.kill(j,n._op[x]),_&&n._pt&&(na=n,jn.killTweensOf(j,z,n.globalTime(a)),L=!n.parent,na=0),n._pt&&l&&(hr[P.id]=1)}T&&Dd(n),n._onInit&&n._onInit(n)}n._onUpdate=c,n._initted=(!n._op||n._pt)&&!L,h&&a<=0&&S.render(zt,!0,!0)},lh=function(n,a,r,e,s,o,i,l){var c=(n._pt&&n._ptCache||(n._ptCache={}))[a],p,u,h,d;if(!c)for(c=n._ptCache[a]=[],h=n._ptLookup,d=n._targets.length;d--;){if(p=h[d][a],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==a&&p.fp!==a;)p=p._next;if(!p)return br=1,n.vars[a]="+=0",io(n,i),br=0,l?_s(a+" not eligible for reset"):1;c.push(p)}for(d=c.length;d--;)u=c[d],p=u._pt||u,p.s=(e||e===0)&&!s?e:p.s+(e||0)+o*p.c,p.c=r-p.s,u.e&&(u.e=Pn(r)+Wn(u.e)),u.b&&(u.b=p.s+Wn(u.b))},dh=function(n,a){var r=n[0]?ba(n[0]).harness:0,e=r&&r.aliases,s,o,i,l;if(!e)return a;s=qa({},a);for(o in e)if(o in s)for(l=e[o].split(","),i=l.length;i--;)s[l[i]]=s[o];return s},ph=function(n,a,r,e){var s=a.ease||e||"power1.inOut",o,i;if(Hn(a))i=r[n]||(r[n]=[]),a.forEach(function(l,c){return i.push({t:c/(a.length-1)*100,v:l,e:s})});else for(o in a)i=r[o]||(r[o]=[]),o==="ease"||i.push({t:parseFloat(n),v:a[o],e:s})},gs=function(n,a,r,e,s){return Tn(n)?n.call(a,r,e,s):Fn(n)&&~n.indexOf("random(")?js(n):n},zd=so+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Id={};Jn(zd+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Id[t]=1});var En=function(t){Ql(n,t);function n(r,e,s,o){var i;typeof e=="number"&&(s.duration=e,e=s,s=null),i=t.call(this,o?e:fs(e))||this;var l=i.vars,c=l.duration,p=l.delay,u=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,f=l.defaults,m=l.scrollTrigger,y=l.yoyoEase,b=e.parent||jn,_=(Hn(r)||nd(r)?qt(r[0]):"length"in e)?[r]:ht(r),S,k,x,w,v,j,T,P;if(i._targets=_.length?eo(_):_s("GSAP target "+r+" not found. https://gsap.com",!dt.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=d,g||h||Ds(c)||Ds(p)){if(e=i.vars,S=i.timeline=new Xn({data:"nested",defaults:f||{},targets:b&&b.data==="nested"?b.vars.targets:_}),S.kill(),S.parent=S._dp=Bt(i),S._start=0,h||Ds(c)||Ds(p)){if(w=_.length,T=h&&yd(h),Ft(h))for(v in h)~zd.indexOf(v)&&(P||(P={}),P[v]=h[v]);for(k=0;k<w;k++)x=oe(e,Id),x.stagger=0,y&&(x.yoyoEase=y),P&&qa(x,P),j=_[k],x.duration=+gs(c,Bt(i),k,j,_),x.delay=(+gs(p,Bt(i),k,j,_)||0)-i._delay,!h&&w===1&&x.delay&&(i._delay=p=x.delay,i._start+=p,x.delay=0),S.to(j,x,T?T(k,j,_):0),S._ease=fn.none;S.duration()?c=p=0:i.timeline=0}else if(g){fs(ct(S.vars.defaults,{ease:"none"})),S._ease=wa(g.ease||e.ease||"none");var C=0,A,z,O;if(Hn(g))g.forEach(function(U){return S.to(_,U,">")}),S.duration();else{x={};for(v in g)v==="ease"||v==="easeEach"||ph(v,g[v],x,g.easeEach);for(v in x)for(A=x[v].sort(function(U,L){return U.t-L.t}),C=0,k=0;k<A.length;k++)z=A[k],O={ease:z.e,duration:(z.t-(k?A[k-1].t:0))/100*c},O[v]=z.v,S.to(_,O,C),C+=O.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||i.duration(c=S.duration())}else i.timeline=0;return d===!0&&!Zr&&(na=Bt(i),jn.killTweensOf(_),na=0),Mt(b,Bt(i),s),e.reversed&&i.reverse(),e.paused&&i.paused(!0),(u||!c&&!g&&i._start===Mn(b._time)&&Qn(u)&&Gf(Bt(i))&&b.data!=="nested")&&(i._tTime=-1e-8,i.render(Math.max(0,-p)||0)),m&&hd(Bt(i),m),i}var a=n.prototype;return a.render=function(e,s,o){var i=this._time,l=this._tDur,c=this._dur,p=e<0,u=e>l-Nn&&!p?l:e<Nn?0:e,h,d,g,f,m,y,b,_,S;if(!c)Nf(this,e,s,o);else if(u!==this._tTime||!e||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(h=u,_=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&p)return this.totalTime(f*100+e,s,o);if(h=Mn(u%f),u===l?(g=this._repeat,h=c):(m=Mn(u/f),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),y=this._yoyo&&g&1,y&&(S=this._yEase,h=c-h),m=Ya(this._tTime,f),h===i&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(_&&this._yEase&&Ed(_,y),this.vars.repeatRefresh&&!y&&!this._lock&&h!==f&&this._initted&&(this._lock=o=1,this.render(Mn(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(gd(this,p?e:h,o,s,u))return this._tTime=0,this;if(i!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(e,s,o)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(S||this._ease)(h/c),this._from&&(this.ratio=b=1-b),!i&&u&&!s&&!m&&(lt(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;_&&_.render(e<0?e:_._dur*_._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=e),this._onUpdate&&!s&&(p&&gr(this,e,s,o),lt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&lt(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(p&&!this._onUpdate&&gr(this,e,!0,!0),(e||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&la(this,1),!s&&!(p&&!i)&&(u||i||y)&&(lt(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},a.targets=function(){return this._targets},a.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e)},a.resetTo=function(e,s,o,i,l){Cs||ot.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||io(this,c),p=this._ease(c/this._dur),lh(this,e,s,o,i,p,c,l)?this.resetTo(e,s,o,i,1):(Ce(this,0),this.parent||ud(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},a.kill=function(e,s){if(s===void 0&&(s="all"),!e&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ss(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(e,s,na&&na.vars.overwrite!==!0)._first||ss(this),this.parent&&o!==this.timeline.totalDuration()&&$a(this,this._dur*this.timeline._tDur/o,0,1),this}var i=this._targets,l=e?ht(e):i,c=this._ptLookup,p=this._pt,u,h,d,g,f,m,y;if((!s||s==="all")&&Bf(i,l))return s==="all"&&(this._pt=0),ss(this);for(u=this._op=this._op||[],s!=="all"&&(Fn(s)&&(f={},Jn(s,function(b){return f[b]=1}),s=f),s=dh(i,s)),y=i.length;y--;)if(~l.indexOf(i[y])){h=c[y],s==="all"?(u[y]=s,g=h,d={}):(d=u[y]=u[y]||{},g=s);for(f in g)m=h&&h[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&Se(this,m,"_pt"),delete h[f]),d!=="all"&&(d[f]=1)}return this._initted&&!this._pt&&p&&ss(this),this},n.to=function(e,s){return new n(e,s,arguments[2])},n.from=function(e,s){return hs(1,arguments)},n.delayedCall=function(e,s,o,i){return new n(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:i})},n.fromTo=function(e,s,o){return hs(2,arguments)},n.set=function(e,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new n(e,s)},n.killTweensOf=function(e,s,o){return jn.killTweensOf(e,s,o)},n}(Ts);ct(En.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(t){En[t]=function(){var n=new Xn,a=kr.call(arguments,0);return a.splice(t==="staggerFromTo"?5:4,0,0),n[t].apply(n,a)}});var lo=function(n,a,r){return n[a]=r},Fd=function(n,a,r){return n[a](r)},ch=function(n,a,r,e){return n[a](e.fp,r)},uh=function(n,a,r){return n.setAttribute(a,r)},po=function(n,a){return Tn(n[a])?Fd:Qr(n[a])&&n.setAttribute?uh:lo},Od=function(n,a){return a.set(a.t,a.p,Math.round((a.s+a.c*n)*1e6)/1e6,a)},fh=function(n,a){return a.set(a.t,a.p,!!(a.s+a.c*n),a)},Ld=function(n,a){var r=a._pt,e="";if(!n&&a.b)e=a.b;else if(n===1&&a.e)e=a.e;else{for(;r;)e=r.p+(r.m?r.m(r.s+r.c*n):Math.round((r.s+r.c*n)*1e4)/1e4)+e,r=r._next;e+=a.c}a.set(a.t,a.p,e,a)},co=function(n,a){for(var r=a._pt;r;)r.r(n,r.d),r=r._next},hh=function(n,a,r,e){for(var s=this._pt,o;s;)o=s._next,s.p===e&&s.modifier(n,a,r),s=o},gh=function(n){for(var a=this._pt,r,e;a;)e=a._next,a.p===n&&!a.op||a.op===n?Se(this,a,"_pt"):a.dep||(r=1),a=e;return!r},mh=function(n,a,r,e){e.mSet(n,a,e.m.call(e.tween,r,e.mt),e)},Dd=function(n){for(var a=n._pt,r,e,s,o;a;){for(r=a._next,e=s;e&&e.pr>a.pr;)e=e._next;(a._prev=e?e._prev:o)?a._prev._next=a:s=a,(a._next=e)?e._prev=a:o=a,a=r}n._pt=s},nt=function(){function t(a,r,e,s,o,i,l,c,p){this.t=r,this.s=s,this.c=o,this.p=e,this.r=i||Od,this.d=l||this,this.set=c||lo,this.pr=p||0,this._next=a,a&&(a._prev=this)}var n=t.prototype;return n.modifier=function(r,e,s){this.mSet=this.mSet||this.set,this.set=mh,this.m=r,this.mt=s,this.tween=e},t}();Jn(so+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ao[t]=1});pt.TweenMax=pt.TweenLite=En;pt.TimelineLite=pt.TimelineMax=Xn;jn=new Xn({sortChildren:!1,defaults:Ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dt.stringFilter=Td;var _a=[],$s={},kh=[],vi=0,yh=0,Ye=function(n){return($s[n]||kh).map(function(a){return a()})},xr=function(){var n=Date.now(),a=[];n-vi>2&&(Ye("matchMediaInit"),_a.forEach(function(r){var e=r.queries,s=r.conditions,o,i,l,c;for(i in e)o=Pt.matchMedia(e[i]).matches,o&&(l=1),o!==s[i]&&(s[i]=o,c=1);c&&(r.revert(),l&&a.push(r))}),Ye("matchMediaRevert"),a.forEach(function(r){return r.onMatch(r,function(e){return r.add(null,e)})}),vi=n,Ye("matchMedia"))},Bd=function(){function t(a,r){this.selector=r&&yr(r),this.data=[],this._r=[],this.isReverted=!1,this.id=yh++,a&&this.add(a)}var n=t.prototype;return n.add=function(r,e,s){Tn(r)&&(s=e,e=r,r=Tn);var o=this,i=function(){var c=_n,p=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=yr(s)),_n=o,u=e.apply(o,arguments),Tn(u)&&o._r.push(u),_n=c,o.selector=p,o.isReverted=!1,u};return o.last=i,r===Tn?i(o,function(l){return o.add(null,l)}):r?o[r]=i:i},n.ignore=function(r){var e=_n;_n=null,r(this),_n=e},n.getTweens=function(){var r=[];return this.data.forEach(function(e){return e instanceof t?r.push.apply(r,e.getTweens()):e instanceof En&&!(e.parent&&e.parent.data==="nested")&&r.push(e)}),r},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(r,e){var s=this;if(r?function(){for(var i=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(p){return i.splice(i.indexOf(p),1)}));for(i.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,u){return u.g-p.g||-1/0}).forEach(function(p){return p.t.revert(r)}),l=s.data.length;l--;)c=s.data[l],c instanceof Xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof En)&&c.revert&&c.revert(r);s._r.forEach(function(p){return p(r,s)}),s.isReverted=!0}():this.data.forEach(function(i){return i.kill&&i.kill()}),this.clear(),e)for(var o=_a.length;o--;)_a[o].id===this.id&&_a.splice(o,1)},n.revert=function(r){this.kill(r||{})},t}(),vh=function(){function t(a){this.contexts=[],this.scope=a,_n&&_n.data.push(this)}var n=t.prototype;return n.add=function(r,e,s){Ft(r)||(r={matches:r});var o=new Bd(0,s||this.scope),i=o.conditions={},l,c,p;_n&&!o.selector&&(o.selector=_n.selector),this.contexts.push(o),e=o.add("onMatch",e),o.queries=r;for(c in r)c==="all"?p=1:(l=Pt.matchMedia(r[c]),l&&(_a.indexOf(o)<0&&_a.push(o),(i[c]=l.matches)&&(p=1),l.addListener?l.addListener(xr):l.addEventListener("change",xr)));return p&&e(o,function(u){return o.add(null,u)}),this},n.revert=function(r){this.kill(r||{})},n.kill=function(r){this.contexts.forEach(function(e){return e.kill(r,!0)})},t}(),le={registerPlugin:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];a.forEach(function(e){return Sd(e)})},timeline:function(n){return new Xn(n)},getTweensOf:function(n,a){return jn.getTweensOf(n,a)},getProperty:function(n,a,r,e){Fn(n)&&(n=ht(n)[0]);var s=ba(n||{}).get,o=r?cd:pd;return r==="native"&&(r=""),n&&(a?o((rt[a]&&rt[a].get||s)(n,a,r,e)):function(i,l,c){return o((rt[i]&&rt[i].get||s)(n,i,l,c))})},quickSetter:function(n,a,r){if(n=ht(n),n.length>1){var e=n.map(function(p){return at.quickSetter(p,a,r)}),s=e.length;return function(p){for(var u=s;u--;)e[u](p)}}n=n[0]||{};var o=rt[a],i=ba(n),l=i.harness&&(i.harness.aliases||{})[a]||a,c=o?function(p){var u=new o;Aa._pt=0,u.init(n,r?p+r:p,Aa,0,[n]),u.render(1,u),Aa._pt&&co(1,Aa)}:i.set(n,l);return o?c:function(p){return c(n,l,r?p+r:p,i,1)}},quickTo:function(n,a,r){var e,s=at.to(n,ct((e={},e[a]="+=0.1",e.paused=!0,e.stagger=0,e),r||{})),o=function(l,c,p){return s.resetTo(a,l,c,p)};return o.tween=s,o},isTweening:function(n){return jn.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=wa(n.ease,Ha.ease)),hi(Ha,n||{})},config:function(n){return hi(dt,n||{})},registerEffect:function(n){var a=n.name,r=n.effect,e=n.plugins,s=n.defaults,o=n.extendTimeline;(e||"").split(",").forEach(function(i){return i&&!rt[i]&&!pt[i]&&_s(a+" effect requires "+i+" plugin.")}),Ne[a]=function(i,l,c){return r(ht(i),ct(l||{},s),c)},o&&(Xn.prototype[a]=function(i,l,c){return this.add(Ne[a](i,Ft(l)?l:(c=l)&&{},this),c)})},registerEase:function(n,a){fn[n]=wa(a)},parseEase:function(n,a){return arguments.length?wa(n,a):fn},getById:function(n){return jn.getById(n)},exportRoot:function(n,a){n===void 0&&(n={});var r=new Xn(n),e,s;for(r.smoothChildTiming=Qn(n.smoothChildTiming),jn.remove(r),r._dp=0,r._time=r._tTime=jn._time,e=jn._first;e;)s=e._next,(a||!(!e._dur&&e instanceof En&&e.vars.onComplete===e._targets[0]))&&Mt(r,e,e._start-e._delay),e=s;return Mt(jn,r,0),r},context:function(n,a){return n?new Bd(n,a):_n},matchMedia:function(n){return new vh(n)},matchMediaRefresh:function(){return _a.forEach(function(n){var a=n.conditions,r,e;for(e in a)a[e]&&(a[e]=!1,r=1);r&&n.revert()})||xr()},addEventListener:function(n,a){var r=$s[n]||($s[n]=[]);~r.indexOf(a)||r.push(a)},removeEventListener:function(n,a){var r=$s[n],e=r&&r.indexOf(a);e>=0&&r.splice(e,1)},utils:{wrap:Zf,wrapYoyo:Qf,distribute:yd,random:bd,snap:vd,normalize:Xf,getUnit:Wn,clamp:qf,splitColor:jd,toArray:ht,selector:yr,mapRange:wd,pipe:$f,unitize:Kf,interpolate:Jf,shuffle:kd},install:rd,effects:Ne,ticker:ot,updateRoot:Xn.updateRoot,plugins:rt,globalTimeline:jn,core:{PropTween:nt,globals:od,Tween:En,Timeline:Xn,Animation:Ts,getCache:ba,_removeLinkedListItem:Se,reverting:function(){return Ln},context:function(n){return n&&_n&&(_n.data.push(n),n._ctx=_n),_n},suppressOverwrites:function(n){return Zr=n}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return le[t]=En[t]});ot.add(Xn.updateRoot);Aa=le.to({},{duration:0});var bh=function(n,a){for(var r=n._pt;r&&r.p!==a&&r.op!==a&&r.fp!==a;)r=r._next;return r},xh=function(n,a){var r=n._targets,e,s,o;for(e in a)for(s=r.length;s--;)o=n._ptLookup[s][e],o&&(o=o.d)&&(o._pt&&(o=bh(o,e)),o&&o.modifier&&o.modifier(a[e],n,r[s],e))},$e=function(n,a){return{name:n,headless:1,rawVars:1,init:function(e,s,o){o._onInit=function(i){var l,c;if(Fn(s)&&(l={},Jn(s,function(p){return l[p]=1}),s=l),a){l={};for(c in s)l[c]=a(s[c]);s=l}xh(i,s)}}}},at=le.registerPlugin({name:"attr",init:function(n,a,r,e,s){var o,i,l;this.tween=r;for(o in a)l=n.getAttribute(o)||"",i=this.add(n,"setAttribute",(l||0)+"",a[o],e,s,0,0,o),i.op=o,i.b=l,this._props.push(o)},render:function(n,a){for(var r=a._pt;r;)Ln?r.set(r.t,r.p,r.b,r):r.r(n,r.d),r=r._next}},{name:"endArray",headless:1,init:function(n,a){for(var r=a.length;r--;)this.add(n,r,n[r]||0,a[r],0,0,0,0,0,1)}},$e("roundProps",vr),$e("modifiers"),$e("snap",vd))||le;En.version=Xn.version=at.version="3.13.0";ed=1;Jr()&&Ka();fn.Power0;fn.Power1;fn.Power2;fn.Power3;fn.Power4;fn.Linear;fn.Quad;fn.Cubic;fn.Quart;fn.Quint;fn.Strong;fn.Elastic;fn.Back;fn.SteppedEase;fn.Bounce;fn.Sine;fn.Expo;fn.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bi,ta,Ua,uo,ya,xi,fo,wh=function(){return typeof window<"u"},Yt={},ka=180/Math.PI,Ga=Math.PI/180,Pa=Math.atan2,wi=1e8,ho=/([A-Z])/g,_h=/(left|right|width|margin|padding|x)/i,Sh=/[\s,\(]\S/,Rt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wr=function(n,a){return a.set(a.t,a.p,Math.round((a.s+a.c*n)*1e4)/1e4+a.u,a)},jh=function(n,a){return a.set(a.t,a.p,n===1?a.e:Math.round((a.s+a.c*n)*1e4)/1e4+a.u,a)},Ch=function(n,a){return a.set(a.t,a.p,n?Math.round((a.s+a.c*n)*1e4)/1e4+a.u:a.b,a)},Th=function(n,a){var r=a.s+a.c*n;a.set(a.t,a.p,~~(r+(r<0?-.5:.5))+a.u,a)},Ud=function(n,a){return a.set(a.t,a.p,n?a.e:a.b,a)},Gd=function(n,a){return a.set(a.t,a.p,n!==1?a.b:a.e,a)},Ph=function(n,a,r){return n.style[a]=r},Eh=function(n,a,r){return n.style.setProperty(a,r)},Mh=function(n,a,r){return n._gsap[a]=r},Rh=function(n,a,r){return n._gsap.scaleX=n._gsap.scaleY=r},Ah=function(n,a,r,e,s){var o=n._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},zh=function(n,a,r,e,s){var o=n._gsap;o[a]=r,o.renderTransform(s,o)},Cn="transform",tt=Cn+"Origin",Ih=function t(n,a){var r=this,e=this.target,s=e.style,o=e._gsap;if(n in Yt&&s){if(this.tfm=this.tfm||{},n!=="transform")n=Rt[n]||n,~n.indexOf(",")?n.split(",").forEach(function(i){return r.tfm[i]=Ut(e,i)}):this.tfm[n]=o.x?o[n]:Ut(e,n),n===tt&&(this.tfm.zOrigin=o.zOrigin);else return Rt.transform.split(",").forEach(function(i){return t.call(r,i,a)});if(this.props.indexOf(Cn)>=0)return;o.svg&&(this.svgo=e.getAttribute("data-svg-origin"),this.props.push(tt,a,"")),n=Cn}(s||a)&&this.props.push(n,a,s[n])},Wd=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Fh=function(){var n=this.props,a=this.target,r=a.style,e=a._gsap,s,o;for(s=0;s<n.length;s+=3)n[s+1]?n[s+1]===2?a[n[s]](n[s+2]):a[n[s]]=n[s+2]:n[s+2]?r[n[s]]=n[s+2]:r.removeProperty(n[s].substr(0,2)==="--"?n[s]:n[s].replace(ho,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)e[o]=this.tfm[o];e.svg&&(e.renderTransform(),a.setAttribute("data-svg-origin",this.svgo||"")),s=fo(),(!s||!s.isStart)&&!r[Cn]&&(Wd(r),e.zOrigin&&r[tt]&&(r[tt]+=" "+e.zOrigin+"px",e.zOrigin=0,e.renderTransform()),e.uncache=1)}},Nd=function(n,a){var r={target:n,props:[],revert:Fh,save:Ih};return n._gsap||at.core.getCache(n),a&&n.style&&n.nodeType&&a.split(",").forEach(function(e){return r.save(e)}),r},Vd,_r=function(n,a){var r=ta.createElementNS?ta.createElementNS((a||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):ta.createElement(n);return r&&r.style?r:ta.createElement(n)},gt=function t(n,a,r){var e=getComputedStyle(n);return e[a]||e.getPropertyValue(a.replace(ho,"-$1").toLowerCase())||e.getPropertyValue(a)||!r&&t(n,Xa(a)||a,1)||""},_i="O,Moz,ms,Ms,Webkit".split(","),Xa=function(n,a,r){var e=a||ya,s=e.style,o=5;if(n in s&&!r)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(_i[o]+n in s););return o<0?null:(o===3?"ms":o>=0?_i[o]:"")+n},Sr=function(){wh()&&window.document&&(bi=window,ta=bi.document,Ua=ta.documentElement,ya=_r("div")||{style:{}},_r("div"),Cn=Xa(Cn),tt=Cn+"Origin",ya.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vd=!!Xa("perspective"),fo=at.core.reverting,uo=1)},Si=function(n){var a=n.ownerSVGElement,r=_r("svg",a&&a.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),e=n.cloneNode(!0),s;e.style.display="block",r.appendChild(e),Ua.appendChild(r);try{s=e.getBBox()}catch{}return r.removeChild(e),Ua.removeChild(r),s},ji=function(n,a){for(var r=a.length;r--;)if(n.hasAttribute(a[r]))return n.getAttribute(a[r])},Hd=function(n){var a,r;try{a=n.getBBox()}catch{a=Si(n),r=1}return a&&(a.width||a.height)||r||(a=Si(n)),a&&!a.width&&!a.x&&!a.y?{x:+ji(n,["x","cx","x1"])||0,y:+ji(n,["y","cy","y1"])||0,width:0,height:0}:a},qd=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&Hd(n))},Sa=function(n,a){if(a){var r=n.style,e;a in Yt&&a!==tt&&(a=Cn),r.removeProperty?(e=a.substr(0,2),(e==="ms"||a.substr(0,6)==="webkit")&&(a="-"+a),r.removeProperty(e==="--"?a:a.replace(ho,"-$1").toLowerCase())):r.removeAttribute(a)}},aa=function(n,a,r,e,s,o){var i=new nt(n._pt,a,r,0,1,o?Gd:Ud);return n._pt=i,i.b=e,i.e=s,n._props.push(r),i},Ci={deg:1,rad:1,turn:1},Oh={grid:1,flex:1},da=function t(n,a,r,e){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",i=ya.style,l=_h.test(a),c=n.tagName.toLowerCase()==="svg",p=(c?"client":"offset")+(l?"Width":"Height"),u=100,h=e==="px",d=e==="%",g,f,m,y;if(e===o||!s||Ci[e]||Ci[o])return s;if(o!=="px"&&!h&&(s=t(n,a,r,"px")),y=n.getCTM&&qd(n),(d||o==="%")&&(Yt[a]||~a.indexOf("adius")))return g=y?n.getBBox()[l?"width":"height"]:n[p],Pn(d?s/g*u:s/100*g);if(i[l?"width":"height"]=u+(h?o:e),f=e!=="rem"&&~a.indexOf("adius")||e==="em"&&n.appendChild&&!c?n:n.parentNode,y&&(f=(n.ownerSVGElement||{}).parentNode),(!f||f===ta||!f.appendChild)&&(f=ta.body),m=f._gsap,m&&d&&m.width&&l&&m.time===ot.time&&!m.uncache)return Pn(s/m.width*u);if(d&&(a==="height"||a==="width")){var b=n.style[a];n.style[a]=u+e,g=n[p],b?n.style[a]=b:Sa(n,a)}else(d||o==="%")&&!Oh[gt(f,"display")]&&(i.position=gt(n,"position")),f===n&&(i.position="static"),f.appendChild(ya),g=ya[p],f.removeChild(ya),i.position="absolute";return l&&d&&(m=ba(f),m.time=ot.time,m.width=f[p]),Pn(h?g*s/u:g&&s?u/g*s:0)},Ut=function(n,a,r,e){var s;return uo||Sr(),a in Rt&&a!=="transform"&&(a=Rt[a],~a.indexOf(",")&&(a=a.split(",")[0])),Yt[a]&&a!=="transform"?(s=Es(n,e),s=a!=="transformOrigin"?s[a]:s.svg?s.origin:pe(gt(n,tt))+" "+s.zOrigin+"px"):(s=n.style[a],(!s||s==="auto"||e||~(s+"").indexOf("calc("))&&(s=de[a]&&de[a](n,a,r)||gt(n,a)||ld(n,a)||(a==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?da(n,a,s,r)+r:s},Lh=function(n,a,r,e){if(!r||r==="none"){var s=Xa(a,n,1),o=s&&gt(n,s,1);o&&o!==r?(a=s,r=o):a==="borderColor"&&(r=gt(n,"borderTopColor"))}var i=new nt(this._pt,n.style,a,0,1,Ld),l=0,c=0,p,u,h,d,g,f,m,y,b,_,S,k;if(i.b=r,i.e=e,r+="",e+="",e.substring(0,6)==="var(--"&&(e=gt(n,e.substring(4,e.indexOf(")")))),e==="auto"&&(f=n.style[a],n.style[a]=e,e=gt(n,a)||e,f?n.style[a]=f:Sa(n,a)),p=[r,e],Td(p),r=p[0],e=p[1],h=r.match(Ra)||[],k=e.match(Ra)||[],k.length){for(;u=Ra.exec(e);)m=u[0],b=e.substring(l,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(f=h[c++]||"")&&(d=parseFloat(f)||0,S=f.substr((d+"").length),m.charAt(1)==="="&&(m=Ba(d,m)+S),y=parseFloat(m),_=m.substr((y+"").length),l=Ra.lastIndex-_.length,_||(_=_||dt.units[a]||S,l===e.length&&(e+=_,i.e+=_)),S!==_&&(d=da(n,a,f,_)||0),i._pt={_next:i._pt,p:b||c===1?b:",",s:d,c:y-d,m:g&&g<4||a==="zIndex"?Math.round:0});i.c=l<e.length?e.substring(l,e.length):""}else i.r=a==="display"&&e==="none"?Gd:Ud;return ad.test(e)&&(i.e=0),this._pt=i,i},Ti={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dh=function(n){var a=n.split(" "),r=a[0],e=a[1]||"50%";return(r==="top"||r==="bottom"||e==="left"||e==="right")&&(n=r,r=e,e=n),a[0]=Ti[r]||r,a[1]=Ti[e]||e,a.join(" ")},Bh=function(n,a){if(a.tween&&a.tween._time===a.tween._dur){var r=a.t,e=r.style,s=a.u,o=r._gsap,i,l,c;if(s==="all"||s===!0)e.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)i=s[c],Yt[i]&&(l=1,i=i==="transformOrigin"?tt:Cn),Sa(r,i);l&&(Sa(r,Cn),o&&(o.svg&&r.removeAttribute("transform"),e.scale=e.rotate=e.translate="none",Es(r,1),o.uncache=1,Wd(e)))}},de={clearProps:function(n,a,r,e,s){if(s.data!=="isFromStart"){var o=n._pt=new nt(n._pt,a,r,0,0,Bh);return o.u=e,o.pr=-10,o.tween=s,n._props.push(r),1}}},Ps=[1,0,0,1,0,0],Yd={},$d=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Pi=function(n){var a=gt(n,Cn);return $d(a)?Ps:a.substr(7).match(td).map(Pn)},go=function(n,a){var r=n._gsap||ba(n),e=n.style,s=Pi(n),o,i,l,c;return r.svg&&n.getAttribute("transform")?(l=n.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ps:s):(s===Ps&&!n.offsetParent&&n!==Ua&&!r.svg&&(l=e.display,e.display="block",o=n.parentNode,(!o||!n.offsetParent&&!n.getBoundingClientRect().width)&&(c=1,i=n.nextElementSibling,Ua.appendChild(n)),s=Pi(n),l?e.display=l:Sa(n,"display"),c&&(i?o.insertBefore(n,i):o?o.appendChild(n):Ua.removeChild(n))),a&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},jr=function(n,a,r,e,s,o){var i=n._gsap,l=s||go(n,!0),c=i.xOrigin||0,p=i.yOrigin||0,u=i.xOffset||0,h=i.yOffset||0,d=l[0],g=l[1],f=l[2],m=l[3],y=l[4],b=l[5],_=a.split(" "),S=parseFloat(_[0])||0,k=parseFloat(_[1])||0,x,w,v,j;r?l!==Ps&&(w=d*m-g*f)&&(v=S*(m/w)+k*(-f/w)+(f*b-m*y)/w,j=S*(-g/w)+k*(d/w)-(d*b-g*y)/w,S=v,k=j):(x=Hd(n),S=x.x+(~_[0].indexOf("%")?S/100*x.width:S),k=x.y+(~(_[1]||_[0]).indexOf("%")?k/100*x.height:k)),e||e!==!1&&i.smooth?(y=S-c,b=k-p,i.xOffset=u+(y*d+b*f)-y,i.yOffset=h+(y*g+b*m)-b):i.xOffset=i.yOffset=0,i.xOrigin=S,i.yOrigin=k,i.smooth=!!e,i.origin=a,i.originIsAbsolute=!!r,n.style[tt]="0px 0px",o&&(aa(o,i,"xOrigin",c,S),aa(o,i,"yOrigin",p,k),aa(o,i,"xOffset",u,i.xOffset),aa(o,i,"yOffset",h,i.yOffset)),n.setAttribute("data-svg-origin",S+" "+k)},Es=function(n,a){var r=n._gsap||new Rd(n);if("x"in r&&!a&&!r.uncache)return r;var e=n.style,s=r.scaleX<0,o="px",i="deg",l=getComputedStyle(n),c=gt(n,tt)||"0",p,u,h,d,g,f,m,y,b,_,S,k,x,w,v,j,T,P,C,A,z,O,U,L,V,nn,on,dn,sn,cn,pn,un;return p=u=h=f=m=y=b=_=S=0,d=g=1,r.svg=!!(n.getCTM&&qd(n)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(e[Cn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Cn]!=="none"?l[Cn]:"")),e.scale=e.rotate=e.translate="none"),w=go(n,r.svg),r.svg&&(r.uncache?(V=n.getBBox(),c=r.xOrigin-V.x+"px "+(r.yOrigin-V.y)+"px",L=""):L=!a&&n.getAttribute("data-svg-origin"),jr(n,L||c,!!L||r.originIsAbsolute,r.smooth!==!1,w)),k=r.xOrigin||0,x=r.yOrigin||0,w!==Ps&&(P=w[0],C=w[1],A=w[2],z=w[3],p=O=w[4],u=U=w[5],w.length===6?(d=Math.sqrt(P*P+C*C),g=Math.sqrt(z*z+A*A),f=P||C?Pa(C,P)*ka:0,b=A||z?Pa(A,z)*ka+f:0,b&&(g*=Math.abs(Math.cos(b*Ga))),r.svg&&(p-=k-(k*P+x*A),u-=x-(k*C+x*z))):(un=w[6],cn=w[7],on=w[8],dn=w[9],sn=w[10],pn=w[11],p=w[12],u=w[13],h=w[14],v=Pa(un,sn),m=v*ka,v&&(j=Math.cos(-v),T=Math.sin(-v),L=O*j+on*T,V=U*j+dn*T,nn=un*j+sn*T,on=O*-T+on*j,dn=U*-T+dn*j,sn=un*-T+sn*j,pn=cn*-T+pn*j,O=L,U=V,un=nn),v=Pa(-A,sn),y=v*ka,v&&(j=Math.cos(-v),T=Math.sin(-v),L=P*j-on*T,V=C*j-dn*T,nn=A*j-sn*T,pn=z*T+pn*j,P=L,C=V,A=nn),v=Pa(C,P),f=v*ka,v&&(j=Math.cos(v),T=Math.sin(v),L=P*j+C*T,V=O*j+U*T,C=C*j-P*T,U=U*j-O*T,P=L,O=V),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,y=180-y),d=Pn(Math.sqrt(P*P+C*C+A*A)),g=Pn(Math.sqrt(U*U+un*un)),v=Pa(O,U),b=Math.abs(v)>2e-4?v*ka:0,S=pn?1/(pn<0?-pn:pn):0),r.svg&&(L=n.getAttribute("transform"),r.forceCSS=n.setAttribute("transform","")||!$d(gt(n,Cn)),L&&n.setAttribute("transform",L))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),a=a||r.uncache,r.x=p-((r.xPercent=p&&(!a&&r.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-p)?-50:0)))?n.offsetWidth*r.xPercent/100:0)+o,r.y=u-((r.yPercent=u&&(!a&&r.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-u)?-50:0)))?n.offsetHeight*r.yPercent/100:0)+o,r.z=h+o,r.scaleX=Pn(d),r.scaleY=Pn(g),r.rotation=Pn(f)+i,r.rotationX=Pn(m)+i,r.rotationY=Pn(y)+i,r.skewX=b+i,r.skewY=_+i,r.transformPerspective=S+o,(r.zOrigin=parseFloat(c.split(" ")[2])||!a&&r.zOrigin||0)&&(e[tt]=pe(c)),r.xOffset=r.yOffset=0,r.force3D=dt.force3D,r.renderTransform=r.svg?Gh:Vd?Kd:Uh,r.uncache=0,r},pe=function(n){return(n=n.split(" "))[0]+" "+n[1]},Ke=function(n,a,r){var e=Wn(a);return Pn(parseFloat(a)+parseFloat(da(n,"x",r+"px",e)))+e},Uh=function(n,a){a.z="0px",a.rotationY=a.rotationX="0deg",a.force3D=0,Kd(n,a)},ha="0deg",ts="0px",ga=") ",Kd=function(n,a){var r=a||this,e=r.xPercent,s=r.yPercent,o=r.x,i=r.y,l=r.z,c=r.rotation,p=r.rotationY,u=r.rotationX,h=r.skewX,d=r.skewY,g=r.scaleX,f=r.scaleY,m=r.transformPerspective,y=r.force3D,b=r.target,_=r.zOrigin,S="",k=y==="auto"&&n&&n!==1||y===!0;if(_&&(u!==ha||p!==ha)){var x=parseFloat(p)*Ga,w=Math.sin(x),v=Math.cos(x),j;x=parseFloat(u)*Ga,j=Math.cos(x),o=Ke(b,o,w*j*-_),i=Ke(b,i,-Math.sin(x)*-_),l=Ke(b,l,v*j*-_+_)}m!==ts&&(S+="perspective("+m+ga),(e||s)&&(S+="translate("+e+"%, "+s+"%) "),(k||o!==ts||i!==ts||l!==ts)&&(S+=l!==ts||k?"translate3d("+o+", "+i+", "+l+") ":"translate("+o+", "+i+ga),c!==ha&&(S+="rotate("+c+ga),p!==ha&&(S+="rotateY("+p+ga),u!==ha&&(S+="rotateX("+u+ga),(h!==ha||d!==ha)&&(S+="skew("+h+", "+d+ga),(g!==1||f!==1)&&(S+="scale("+g+", "+f+ga),b.style[Cn]=S||"translate(0, 0)"},Gh=function(n,a){var r=a||this,e=r.xPercent,s=r.yPercent,o=r.x,i=r.y,l=r.rotation,c=r.skewX,p=r.skewY,u=r.scaleX,h=r.scaleY,d=r.target,g=r.xOrigin,f=r.yOrigin,m=r.xOffset,y=r.yOffset,b=r.forceCSS,_=parseFloat(o),S=parseFloat(i),k,x,w,v,j;l=parseFloat(l),c=parseFloat(c),p=parseFloat(p),p&&(p=parseFloat(p),c+=p,l+=p),l||c?(l*=Ga,c*=Ga,k=Math.cos(l)*u,x=Math.sin(l)*u,w=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(p*=Ga,j=Math.tan(c-p),j=Math.sqrt(1+j*j),w*=j,v*=j,p&&(j=Math.tan(p),j=Math.sqrt(1+j*j),k*=j,x*=j)),k=Pn(k),x=Pn(x),w=Pn(w),v=Pn(v)):(k=u,v=h,x=w=0),(_&&!~(o+"").indexOf("px")||S&&!~(i+"").indexOf("px"))&&(_=da(d,"x",o,"px"),S=da(d,"y",i,"px")),(g||f||m||y)&&(_=Pn(_+g-(g*k+f*w)+m),S=Pn(S+f-(g*x+f*v)+y)),(e||s)&&(j=d.getBBox(),_=Pn(_+e/100*j.width),S=Pn(S+s/100*j.height)),j="matrix("+k+","+x+","+w+","+v+","+_+","+S+")",d.setAttribute("transform",j),b&&(d.style[Cn]=j)},Wh=function(n,a,r,e,s){var o=360,i=Fn(s),l=parseFloat(s)*(i&&~s.indexOf("rad")?ka:1),c=l-e,p=e+c+"deg",u,h;return i&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*wi)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*wi)%o-~~(c/o)*o)),n._pt=h=new nt(n._pt,a,r,e,c,jh),h.e=p,h.u="deg",n._props.push(r),h},Ei=function(n,a){for(var r in a)n[r]=a[r];return n},Nh=function(n,a,r){var e=Ei({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,i,l,c,p,u,h,d,g;e.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),o[Cn]=a,i=Es(r,1),Sa(r,Cn),r.setAttribute("transform",c)):(c=getComputedStyle(r)[Cn],o[Cn]=a,i=Es(r,1),o[Cn]=c);for(l in Yt)c=e[l],p=i[l],c!==p&&s.indexOf(l)<0&&(d=Wn(c),g=Wn(p),u=d!==g?da(r,l,c,g):parseFloat(c),h=parseFloat(p),n._pt=new nt(n._pt,i,l,u,h-u,wr),n._pt.u=g||0,n._props.push(l));Ei(i,e)};Jn("padding,margin,Width,Radius",function(t,n){var a="Top",r="Right",e="Bottom",s="Left",o=(n<3?[a,r,e,s]:[a+s,a+r,e+r,e+s]).map(function(i){return n<2?t+i:"border"+i+t});de[n>1?"border"+t:t]=function(i,l,c,p,u){var h,d;if(arguments.length<4)return h=o.map(function(g){return Ut(i,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(p+"").split(" "),d={},o.forEach(function(g,f){return d[g]=h[f]=h[f]||h[(f-1)/2|0]}),i.init(l,d,u)}});var Xd={name:"css",register:Sr,targetTest:function(n){return n.style&&n.nodeType},init:function(n,a,r,e,s){var o=this._props,i=n.style,l=r.vars.startAt,c,p,u,h,d,g,f,m,y,b,_,S,k,x,w,v;uo||Sr(),this.styles=this.styles||Nd(n),v=this.styles.props,this.tween=r;for(f in a)if(f!=="autoRound"&&(p=a[f],!(rt[f]&&Ad(f,a,r,e,n,s)))){if(d=typeof p,g=de[f],d==="function"&&(p=p.call(r,e,n,s),d=typeof p),d==="string"&&~p.indexOf("random(")&&(p=js(p)),g)g(this,n,f,p,r)&&(w=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(n).getPropertyValue(f)+"").trim(),p+="",ra.lastIndex=0,ra.test(c)||(m=Wn(c),y=Wn(p)),y?m!==y&&(c=da(n,f,c,y)+y):m&&(p+=m),this.add(i,"setProperty",c,p,e,s,0,0,f),o.push(f),v.push(f,0,i[f]);else if(d!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(r,e,n,s):l[f],Fn(c)&&~c.indexOf("random(")&&(c=js(c)),Wn(c+"")||c==="auto"||(c+=dt.units[f]||Wn(Ut(n,f))||""),(c+"").charAt(1)==="="&&(c=Ut(n,f))):c=Ut(n,f),h=parseFloat(c),b=d==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),u=parseFloat(p),f in Rt&&(f==="autoAlpha"&&(h===1&&Ut(n,"visibility")==="hidden"&&u&&(h=0),v.push("visibility",0,i.visibility),aa(this,i,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),f!=="scale"&&f!=="transform"&&(f=Rt[f],~f.indexOf(",")&&(f=f.split(",")[0]))),_=f in Yt,_){if(this.styles.save(f),d==="string"&&p.substring(0,6)==="var(--"&&(p=gt(n,p.substring(4,p.indexOf(")"))),u=parseFloat(p)),S||(k=n._gsap,k.renderTransform&&!a.parseTransform||Es(n,a.parseTransform),x=a.smoothOrigin!==!1&&k.smooth,S=this._pt=new nt(this._pt,i,Cn,0,1,k.renderTransform,k,0,-1),S.dep=1),f==="scale")this._pt=new nt(this._pt,k,"scaleY",k.scaleY,(b?Ba(k.scaleY,b+u):u)-k.scaleY||0,wr),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(tt,0,i[tt]),p=Dh(p),k.svg?jr(n,p,0,x,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==k.zOrigin&&aa(this,k,"zOrigin",k.zOrigin,y),aa(this,i,f,pe(c),pe(p)));continue}else if(f==="svgOrigin"){jr(n,p,1,x,0,this);continue}else if(f in Yd){Wh(this,k,f,h,b?Ba(h,b+p):p);continue}else if(f==="smoothOrigin"){aa(this,k,"smooth",k.smooth,p);continue}else if(f==="force3D"){k[f]=p;continue}else if(f==="transform"){Nh(this,p,n);continue}}else f in i||(f=Xa(f)||f);if(_||(u||u===0)&&(h||h===0)&&!Sh.test(p)&&f in i)m=(c+"").substr((h+"").length),u||(u=0),y=Wn(p)||(f in dt.units?dt.units[f]:m),m!==y&&(h=da(n,f,c,y)),this._pt=new nt(this._pt,_?k:i,f,h,(b?Ba(h,b+u):u)-h,!_&&(y==="px"||f==="zIndex")&&a.autoRound!==!1?Th:wr),this._pt.u=y||0,m!==y&&y!=="%"&&(this._pt.b=c,this._pt.r=Ch);else if(f in i)Lh.call(this,n,f,c,b?b+p:p);else if(f in n)this.add(n,f,c||n[f],b?b+p:p,e,s);else if(f!=="parseTransform"){to(f,p);continue}_||(f in i?v.push(f,0,i[f]):typeof n[f]=="function"?v.push(f,2,n[f]()):v.push(f,1,c||n[f])),o.push(f)}}w&&Dd(this)},render:function(n,a){if(a.tween._time||!fo())for(var r=a._pt;r;)r.r(n,r.d),r=r._next;else a.styles.revert()},get:Ut,aliases:Rt,getSetter:function(n,a,r){var e=Rt[a];return e&&e.indexOf(",")<0&&(a=e),a in Yt&&a!==tt&&(n._gsap.x||Ut(n,"x"))?r&&xi===r?a==="scale"?Rh:Mh:(xi=r||{})&&(a==="scale"?Ah:zh):n.style&&!Qr(n.style[a])?Ph:~a.indexOf("-")?Eh:po(n,a)},core:{_removeProperty:Sa,_getMatrix:go}};at.utils.checkPrefix=Xa;at.core.getStyleSaver=Nd;(function(t,n,a,r){var e=Jn(t+","+n+","+a,function(s){Yt[s]=1});Jn(n,function(s){dt.units[s]="deg",Yd[s]=1}),Rt[e[13]]=t+","+n,Jn(r,function(s){var o=s.split(":");Rt[o[1]]=e[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){dt.units[t]="px"});at.registerPlugin(Xd);var Zd=at.registerPlugin(Xd)||at;Zd.core.Tween;const Vh=`<!DOCTYPE html>\r
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
</html>`,eg=`<!DOCTYPE html>\r
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
</html>`,rg=`<!DOCTYPE html>\r
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
</html>`,og=`<!DOCTYPE html>\r
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
</html>`,Ms=[{id:1,title:"Recipe Rush: Online Grocery Ordering Game",slug:"recipe-rush",description:`
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
            the SFML (Simple and Fast Multimedia Library)`,image:new URL("/images/farm-frenzy-gui.jpeg",import.meta.url).href,content:Qh}]},{title:"🥗🎮 Buffet Rush – A C++ Game Based on a Buffet Experience",slug:"buffet-rush",description:'"Buffet Rush" is a fun, text-based or SFML-powered graphical C++ game where the player acts as a customer in a buffet. The goal is to build the perfect meal tray under time and nutritional constraints—while also managing cost, calories, and customer satisfaction.',image:new URL("/images/buffet.jpeg",import.meta.url).href,content:Jh,customReadMore:[{title:"🥗 Buffet Rush: A Tasty Game in C++ with GUI (SFML)",slug:"buffet-rush-with-gui",description:"Have you ever imagined what a buffet would look like if it turned into a fast-paced game? Welcome to Buffet Rush, a light-hearted yet educational C++ game powered by SFML, where you dodge unhealthy snacks and rack up your nutrition score!",image:new URL("/images/buffet-gui.jpeg",import.meta.url).href,content:ng}]},{title:"🚙 Jeep Adventure Game in C++ (with GUI + Weather Effects)",slug:"jeep-adventure-game",description:"This is a graphical C++ game using SFML, where you control a Jeep driving on a rainy road. Your goal is to avoid falling obstacles, stay visible in the rain, and survive long enough to earn points.",image:new URL("/images/jeep.jpeg",import.meta.url).href,content:tg},{title:"Echoes of Gaia",slug:"echoes-of-gaia",description:"A next-gen C++ game demo using real-time ray tracing, AI NPCs, and physics simulation.",image:new URL("/images/echo.jpeg",import.meta.url).href,content:ag},{title:"🌧️ Rainfall Reclaimer: EcoFrontline",slug:"rainfall-reclaimer",description:"Set in a near-future world suffering from extreme rainfall, acid rain, and rising floods, you play as an AI-assisted meteorological operative using drones, robots, and water recycling stations to monitor, mitigate, and survive climate chaos.",image:new URL("/images/rainfall-reclamation.jpeg",import.meta.url).href,content:sg},{title:"RainRise: Waterkeepers of Tomorrow",slug:"rain-rise",description:'"RainRise" is a futuristic open-world environmental simulation game where players act as Rainwater Engineers using advanced drones, AI sensors, water-routing bots, and bio-tech filtration systems to conserve rainwater, purify it, and sustain eco-settlements.',image:new URL("/images/rain-rise.jpg",import.meta.url).href,content:eg,customReadMore:[{title:"🌱 Feature: Vertical Garden & Hydroponics System",slug:"vertical-garden-and-hydroponics-system",excerpt:"Let’s now build the Vertical Garden & Hydroponics System using Unreal Engine 5 logic and code structure (C++ + Blueprint style), tied to rainwater conservation gameplay.",content:rg,image:new URL("/images/vertical-garden.jpg",import.meta.url).href}]},{title:"Picnic Panic: Nature Adventure",slug:"picnic-panic",description:"A vibrant 2.5D or 3D picnic simulation-adventure game where players must set up and protect their picnic in a dynamic environment, facing challenges like weather changes, animals, time constraints, and item collection.",image:new URL("/images/picnic-panic.jpeg",import.meta.url).href,content:og}],ig={class:"text-white px-4 py-12"},lg={class:"max-w-7xl mx-auto"},dg={class:"relative overflow-hidden"},pg=["data-aos-delay"],cg={class:"relative"},ug=["src"],fg={class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end transition-all duration-300 group-hover:backdrop-blur-sm"},hg={class:"text-lg text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300"},gg={class:"p-4"},mg={class:"text-xl font-semibold mb-2"},kg={class:"text-xs text-gray-400"},yg={__name:"Slider",setup(t){const n=Nt(Ms);function a(){const u=window.innerWidth;return u<640?1:u<1024?2:3}const r=Nt(0),e=Nt(a()),s=()=>{e.value=a(),r.value=0},o=Kn(()=>n.value.slice(r.value,r.value+e.value)),i=Nt(null),l=u=>{Zd.fromTo(i.value,{x:u==="next"?300:-300,opacity:0},{x:0,opacity:1,duration:.5,ease:"power2.out"})},c=()=>{r.value+e.value>=n.value.length?r.value=0:r.value+=e.value,l("next")},p=()=>{r.value-e.value<0?r.value=Math.max(n.value.length-e.value,0):r.value-=e.value,l("prev")};return As(()=>{Zl.init({once:!0}),window.addEventListener("resize",s)}),Nr(()=>{window.removeEventListener("resize",s)}),(u,h)=>(In(),Dn("section",ig,[Z("div",lg,[h[0]||(h[0]=Z("h2",{class:"text-3xl font-bold mb-8","data-aos":"fade-up"}," Latest Project Walkthroughs ",-1)),Z("div",dg,[Z("div",{ref_key:"slider",ref:i,class:"flex transition-all duration-500 space-x-6 w-full"},[(In(!0),Dn(Un,null,nr(o.value,(d,g)=>(In(),Dn("div",{key:d.id,class:"min-w-[300px] md:min-w-[350px] bg-gray-800 rounded-2xl shadow-xl overflow-hidden group relative","data-aos":"fade-up","data-aos-delay":100*g},[wn(bt(Xr),{to:`/blogs/${d.slug}`},{default:La(()=>[Z("div",cg,[Z("img",{src:d.image,alt:"Project Image",class:"w-full h-68 object-cover transition duration-300 group-hover:blur-sm"},null,8,ug),Z("div",fg,[Z("p",hg,Gt(d.description),1)])])]),_:2},1032,["to"]),Z("div",gg,[Z("h3",mg,Gt(d.title),1),Z("span",kg,Gt(d.date),1)])],8,pg))),128))],512),Z("button",{onClick:p,class:"absolute top-1/2 -translate-y-10 left-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ⬅ "),Z("button",{onClick:c,class:"absolute top-1/2 -translate-y-1/2 right-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ➡ ")])])]))}},vg="/images/logo.jpg",bg=(t,n)=>{const a=t.__vccOpts||t;for(const[r,e]of n)a[r]=e;return a},xg={},wg={class:"flex items-center justify-between"},_g={class:"w-20 relative left-5 sm:left-5 sm:w-32"},Sg={class:"flex justify-between w-36 sm:w-42 relative right-6 sm:right-12"};function jg(t,n){const a=tc("router-link");return In(),Dn("header",null,[Z("nav",wg,[Z("div",_g,[wn(a,{to:"/"},{default:La(()=>n[0]||(n[0]=[Z("img",{src:vg,class:"cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out",alt:"Logo"},null,-1)])),_:1,__:[0]})]),Z("div",Sg,[wn(a,{to:"/about-cpp-playgrounds"},{default:La(()=>n[1]||(n[1]=[Z("p",{class:"cursor-pointer"},"About Us",-1)])),_:1,__:[1]}),wn(a,{to:"/contact-cpp-playgrounds"},{default:La(()=>n[2]||(n[2]=[Z("p",{class:"cursor-pointer"},"Contact",-1)])),_:1,__:[2]})])])])}const Te=bg(xg,[["render",jg]]),Cg={class:"flex sm:flex-row flex-col justify-around items-center w-full min-h-screen p-4 space-y-6 md:space-y-0 mt-20 md:mt-36"},Tg={__name:"Banner",setup(t){const n=Nt(null);let a,r,e;const s=["https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png","https://em-content.zobj.net/thumbs/240/apple/354/red-heart_2764-fe0f.png","https://em-content.zobj.net/thumbs/240/apple/354/video-game_1f3ae.png","https://em-content.zobj.net/thumbs/240/apple/354/keyboard_2328-fe0f.png","https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg","https://em-content.zobj.net/thumbs/240/apple/354/smiling-face-with-sunglasses_1f60e.png","https://em-content.zobj.net/thumbs/240/apple/354/money-bag_1f4b0.png","https://em-content.zobj.net/thumbs/240/apple/354/party-popper_1f389.png","https://em-content.zobj.net/thumbs/240/apple/354/technologist_1f9d1-200d-1f4bb.png"];function o(i,l,c){return ut.Bodies.rectangle(i,l,40,40,{render:{sprite:{texture:c,xScale:.4,yScale:.4}}})}return As(()=>{a=ut.Engine.create();const i=a.world;r=ut.Render.create({canvas:n.value,engine:a,options:{width:window.innerWidth,height:window.innerHeight,background:"transparent",wireframes:!1}}),ut.Render.run(r),e=ut.Runner.create(),ut.Runner.run(e,a);const l=ut.Bodies.rectangle(window.innerWidth/2,window.innerHeight+20,window.innerWidth,40,{isStatic:!0,render:{fillStyle:"#333"}});ut.World.add(i,l);const c=setInterval(()=>{const u=Math.random()*window.innerWidth,h=-50,d=Math.floor(Math.random()*s.length),g=o(u,h,s[d]);ut.World.add(i,g)},50),p=()=>{ut.Render.lookAt(r,{min:{x:0,y:0},max:{x:window.innerWidth,y:window.innerHeight}})};window.addEventListener("resize",p),Wr(()=>{clearInterval(c),window.removeEventListener("resize",p),ut.Render.stop(r),ut.Runner.stop(e)})}),(i,l)=>(In(),Dn(Un,null,[wn(Te),l[1]||(l[1]=Z("h1",{class:"font-serif text-center text-2xl sm:text-3xl mt-6 sm:mt-1","data-aos":"zoom-out","data-aos-delay":"100"}," CPP Playgrounds ",-1)),wn(Tf),Z("div",Cg,[Z("canvas",{ref_key:"canvasRef",ref:n,class:"w-1/2 sm:w-1/2 md:w-1/2 h-[300px] md:h-[60vh] bg-black"},null,512),l[0]||(l[0]=Z("div",{class:"w-full sm:w-1/3 md:w-1/3 text-xl md:text-2xl text-white","data-aos":"fade-left","data-aos-delay":"250"},[Z("br"),Z("p",null,"Unlock your game development potential with our comprehensive C++ guides and step-by-step walkthroughs. Whether you're a beginner or looking to refine your skills, our expertly crafted tutorials cover everything from graphics and game loops to physics engines and AI logic. Learn how to build powerful, high-performance games using C++, the industry-standard language behind many of today’s biggest titles. With real-world examples, source code snippets, and hands-on projects, we make it easy for you to master the art of game development. Start building your dream game today — no experience needed! ")],-1))]),wn(yg),l[2]||(l[2]=Z("div",{class:"relative z-10 text-center mt-12 mb-3 text-sm"}," © 2025 Cpp Playgrounds. All rights reserved. ",-1))],64))}},Pg={key:0,class:""},Eg={class:"text-center text-xl sm:text-3xl mt-8 px-4"},Mg={class:"mt-10 w-1/2 mx-auto px-4 sm:px-6 lg:px-8"},Rg=["src"],Ag=["innerHTML"],zg={key:1,class:"text-center py-24 text-2xl"},Ig={key:2,class:"mt-20 border-t border-white/20 pt-10"},Fg={class:"space-y-8 max-w-3xl mx-auto px-4"},Og=["onClick"],Lg={class:"flex flex-col sm:flex-row gap-4 items-center"},Dg=["src"],Bg={class:"text-lg font-bold text-white"},Ug={class:"text-sm text-white/80 mt-1 line-clamp-2"},Gg={class:"mt-20 border-t border-white/20 pt-10"},Wg={class:"space-y-8 max-w-3xl mx-auto px-4"},Ng=["onClick"],Vg={class:"flex flex-col sm:flex-row gap-4 items-center"},Hg=["src"],qg={class:"text-lg font-bold text-white"},Yg={class:"text-sm text-white/80 mt-1"},$g={__name:"BlogPage",setup(t){const n=xf(),a=bf(),r=Kn(()=>n.params.slug);function e(l){var c,p;for(const u of Ms){if(u.slug===l)return u;const h=(c=u.related)==null?void 0:c.find(g=>g.slug===l);if(h)return h;const d=(p=u.customReadMore)==null?void 0:p.find(g=>g.slug===l);if(d)return d}return null}const s=Kn(()=>e(r.value)),o=Nt(null);As(()=>{o.value&&o.value.addEventListener("click",l=>{const c=l.target.closest("[data-router-link]");if(c){l.preventDefault();const p=c.getAttribute("data-router-link");p&&a.push(p)}})});const i=Kn(()=>Ms.filter(l=>{var c;return l.slug!==((c=s.value)==null?void 0:c.slug)}).slice(0,3));return(l,c)=>{var p,u;return In(),Dn(Un,null,[wn(Te),s.value?(In(),Dn("div",Pg,[Z("h1",Eg,Gt(s.value.title),1),Z("div",Mg,[Z("img",{src:s.value.image,alt:"blog-img",class:"mt-4 w-full h-auto rounded-lg shadow-lg",style:{"max-height":"400px"}},null,8,Rg)]),Z("div",{class:"text-lg w-1/2 mx-auto",innerHTML:s.value.content,ref_key:"htmlContainer",ref:o},null,8,Ag)])):(In(),Dn("div",zg," Blog not found. ")),(u=(p=s.value)==null?void 0:p.customReadMore)!=null&&u.length?(In(),Dn("div",Ig,[c[1]||(c[1]=Z("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"You Might Also Like",-1)),Z("div",Fg,[(In(!0),Dn(Un,null,nr(s.value.customReadMore,h=>(In(),Dn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:d=>bt(a).push({name:"BlogPage",params:{slug:h.slug}})},[Z("div",Lg,[Z("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Dg),Z("div",null,[Z("h3",Bg,Gt(h.title),1),Z("p",Ug,Gt(h.excerpt),1),c[0]||(c[0]=Z("button",{class:"mt-2 px-3 py-1 bg-indigo-600 text-sm text-white rounded hover:bg-indigo-700"}," Read More → ",-1))])])],8,Og))),128))])])):Fc("",!0),Z("div",Gg,[c[2]||(c[2]=Z("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"Read More",-1)),Z("div",Wg,[(In(!0),Dn(Un,null,nr(i.value,h=>(In(),Dn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:d=>bt(a).push({name:"BlogPage",params:{slug:h.slug}})},[Z("div",Vg,[Z("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Hg),Z("div",null,[Z("h3",qg,Gt(h.title),1),Z("p",Yg,Gt(h.excerpt),1)])])],8,Ng))),128))])])],64)}}};var Ks={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var Kg=Ks.exports,Mi;function Xg(){return Mi||(Mi=1,function(t,n){(function(a,r){t.exports=r()})(Kg,function(){var a={};a.version="0.2.0";var r=a.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};a.configure=function(g){var f,m;for(f in g)m=g[f],m!==void 0&&g.hasOwnProperty(f)&&(r[f]=m);return this},a.status=null,a.set=function(g){var f=a.isStarted();g=e(g,r.minimum,1),a.status=g===1?null:g;var m=a.render(!f),y=m.querySelector(r.barSelector),b=r.speed,_=r.easing;return m.offsetWidth,i(function(S){r.positionUsing===""&&(r.positionUsing=a.getPositioningCSS()),l(y,o(g,b,_)),g===1?(l(m,{transition:"none",opacity:1}),m.offsetWidth,setTimeout(function(){l(m,{transition:"all "+b+"ms linear",opacity:0}),setTimeout(function(){a.remove(),S()},b)},b)):setTimeout(S,b)}),this},a.isStarted=function(){return typeof a.status=="number"},a.start=function(){a.status||a.set(0);var g=function(){setTimeout(function(){a.status&&(a.trickle(),g())},r.trickleSpeed)};return r.trickle&&g(),this},a.done=function(g){return!g&&!a.status?this:a.inc(.3+.5*Math.random()).set(1)},a.inc=function(g){var f=a.status;return f?(typeof g!="number"&&(g=(1-f)*e(Math.random()*f,.1,.95)),f=e(f+g,0,.994),a.set(f)):a.start()},a.trickle=function(){return a.inc(Math.random()*r.trickleRate)},function(){var g=0,f=0;a.promise=function(m){return!m||m.state()==="resolved"?this:(f===0&&a.start(),g++,f++,m.always(function(){f--,f===0?(g=0,a.done()):a.set((g-f)/g)}),this)}}(),a.render=function(g){if(a.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var f=document.createElement("div");f.id="nprogress",f.innerHTML=r.template;var m=f.querySelector(r.barSelector),y=g?"-100":s(a.status||0),b=document.querySelector(r.parent),_;return l(m,{transition:"all 0 linear",transform:"translate3d("+y+"%,0,0)"}),r.showSpinner||(_=f.querySelector(r.spinnerSelector),_&&d(_)),b!=document.body&&p(b,"nprogress-custom-parent"),b.appendChild(f),f},a.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(r.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&d(g)},a.isRendered=function(){return!!document.getElementById("nprogress")},a.getPositioningCSS=function(){var g=document.body.style,f="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return f+"Perspective"in g?"translate3d":f+"Transform"in g?"translate":"margin"};function e(g,f,m){return g<f?f:g>m?m:g}function s(g){return(-1+g)*100}function o(g,f,m){var y;return r.positionUsing==="translate3d"?y={transform:"translate3d("+s(g)+"%,0,0)"}:r.positionUsing==="translate"?y={transform:"translate("+s(g)+"%,0)"}:y={"margin-left":s(g)+"%"},y.transition="all "+f+"ms "+m,y}var i=function(){var g=[];function f(){var m=g.shift();m&&m(f)}return function(m){g.push(m),g.length==1&&f()}}(),l=function(){var g=["Webkit","O","Moz","ms"],f={};function m(S){return S.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(k,x){return x.toUpperCase()})}function y(S){var k=document.body.style;if(S in k)return S;for(var x=g.length,w=S.charAt(0).toUpperCase()+S.slice(1),v;x--;)if(v=g[x]+w,v in k)return v;return S}function b(S){return S=m(S),f[S]||(f[S]=y(S))}function _(S,k,x){k=b(k),S.style[k]=x}return function(S,k){var x=arguments,w,v;if(x.length==2)for(w in k)v=k[w],v!==void 0&&k.hasOwnProperty(w)&&_(S,w,v);else _(S,x[1],x[2])}}();function c(g,f){var m=typeof g=="string"?g:h(g);return m.indexOf(" "+f+" ")>=0}function p(g,f){var m=h(g),y=m+f;c(m,f)||(g.className=y.substring(1))}function u(g,f){var m=h(g),y;c(g,f)&&(y=m.replace(" "+f+" "," "),g.className=y.substring(1,y.length-1))}function h(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function d(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return a})}(Ks)),Ks.exports}var Zg=Xg();const mo=Xl(Zg),Qg="/images/about_us.jpeg",Jg={class:"max-w-4xl mx-auto px-6 py-12 md:py-20"},nm={class:"space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"},tm={class:"text-center mt-16 px-6 py-8 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-xl border border-gray-200 dark:border-gray-700"},am={__name:"AboutUs",setup(t){return(n,a)=>(In(),Dn(Un,null,[wn(Te),Z("div",Jg,[a[4]||(a[4]=rr('<div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 mb-6"> 🎮 From Player to Creator: My C++ Game Dev Journey </h1><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"></div></div><div class="mb-16 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500"><img src="'+Qg+'" alt="Game development workspace" class="w-full h-auto object-cover"></div>',2)),Z("div",nm,[a[3]||(a[3]=rr('<p class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500"><span class="text-3xl mr-2">👾</span> I still remember the first time a video game truly captivated me. It wasn&#39;t just the immersive worlds or thrilling gameplay—I became obsessed with understanding <em class="font-semibold text-blue-600 dark:text-blue-400">how</em> these digital magic tricks worked. As a wide-eyed teenager, I&#39;d tear through game files, stumbling upon mysterious <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.cpp</code> extensions that might as well have been ancient hieroglyphics. </p><p class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500"><span class="text-3xl mr-2">🔥</span> My early coding attempts were brutal. I&#39;d stare at walls of C++ syntax—templates that looked like algebraic nightmares, pointer errors that crashed my screen, and linker errors that haunted my dreams. But every small breakthrough felt like leveling up in real life. That first moving sprite? <span class="font-bold text-amber-600 dark:text-amber-400">Pure euphoria</span>. My initial collision detection that actually worked? <span class="font-bold text-amber-600 dark:text-amber-400">Better than any boss fight</span>. </p><div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner"><h3 class="text-2xl font-bold mb-4 flex items-center"><span class="text-3xl mr-3">💡</span> Through years of trial and error, I discovered: </h3><ul class="space-y-4 pl-2"><li class="flex items-start"><span class="text-amber-500 mr-3">⚙️</span><span><strong class="text-gray-900 dark:text-white">Game code isn&#39;t about perfection</strong>—it&#39;s about systems talking to each other</span></li><li class="flex items-start"><span class="text-blue-500 mr-3">🧠</span><span><strong class="text-gray-900 dark:text-white">The best learning happens when you&#39;re fixing broken things</strong>, not just copying working examples</span></li><li class="flex items-start"><span class="text-purple-500 mr-3">🚀</span><span><strong class="text-gray-900 dark:text-white">C++&#39;s complexity is its superpower</strong>—once you tame it, you can bend hardware to your will</span></li></ul></div><p class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500"><span class="text-3xl mr-2">✨</span> This site is the mentor I wish I&#39;d had. Every tutorial solves a problem I struggled with—from &quot;why does my character clip through walls?&quot; to &quot;how do I make NPCs <em>think</em>?&quot; The code snippets are battle-tested, the explanations assume zero knowledge (but respect your intelligence), and the projects build toward actual portfolio pieces. </p>',4)),Z("div",tm,[a[1]||(a[1]=Z("h3",{class:"text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center"},[Z("span",{class:"mr-3"},"🎯"),Al(" Ready to Level Up? ")],-1)),a[2]||(a[2]=Z("p",{class:"text-xl mb-6"}," Whether you're modding your first game or architecting an engine from scratch, I'm here to help you skip the years of frustration. ",-1)),wn(bt(Xr),{to:"/"},{default:La(()=>a[0]||(a[0]=[Z("button",{class:"px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"}," Start Learning Now → ",-1)])),_:1,__:[0]})])])])],64))}},sm={__name:"ContactUs",setup(t){return(n,a)=>(In(),Dn(Un,null,[wn(Te),a[0]||(a[0]=rr('<div class="py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"><span class="inline-block mr-3">👋</span> Let&#39;s Connect! </h1><p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"> Whether you&#39;re stuck on a bug, want to suggest improvements, or just geek out about game dev </p><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full mt-6"></div></div><div class="grid md:grid-cols-2 gap-8"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4"><span class="text-2xl">📬</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Shoot Us a Message</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Found a bug in our code? Need advice on your project? Want mentorship or course recommendations? </p><div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500"><p class="font-mono text-lg break-all text-blue-600 dark:text-blue-300"> programmingninja@proton.me </p><p class="text-sm text-gray-500 dark:text-gray-400 mt-2"> (We typically reply within 24 hours) </p></div><p class="text-gray-600 dark:text-gray-300"><span class="font-bold">Pro Tip:</span> Include &quot;[GameDev]&quot; in your subject line to skip the queue! </p></div></div></div><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4"><span class="text-2xl">👨‍💻</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Join Community</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Connect with other game developers, share projects, and get real-time help: </p><div class="space-y-4"><a href="https://cppalliance.org/slack/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">💬</span><div><h3 class="font-bold">C++ Slack/Discord</h3><p class="text-sm text-gray-500 dark:text-gray-400">Live chat with developers. Best for real-time help</p></div></a><a href="https://www.reddit.com/r/cpp/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">🐦</span><div><h3 class="font-bold">r/cpp (Reddit)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Best for language updates, technical discussions</p></div></a><a href="https://stackoverflow.com/questions/tagged/c%252b%252b" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">📱</span><div><h3 class="font-bold">Stack Overflow (C++ Tag)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Code-specific questions</p></div></a></div></div></div></div></div><div class="mt-16 text-center"><p class="text-white text-md font-extrabold"><span class="inline-block mr-2 text-xl font-extrabold">⚠️</span> Warning: Contacting us about game dev may result in spontaneous coding sessions, excessive coffee consumption, and unexpected friendships. <span class="inline-block ml-2">☕</span></p></div></div></div>',1))],64))}};mo.configure({showSpinner:!1});const Pe=yf({history:$u("/"),scrollBehavior(t,n,a){return{top:0}},routes:[{path:"/",component:Tg},{path:"/about-cpp-playgrounds",name:"AboutUs",component:am,meta:{title:"About Us | cpp-playgrounds"}},{path:"/contact-cpp-playgrounds",name:"ContactUs",component:sm,meta:{title:"Contact US | cpp-playgrounds"}},{path:"/blogs/:slug",name:"BlogPage",component:$g,meta:{title:""}}],scrollBehavior(){return{top:0}}});Pe.beforeEach((t,n,a)=>{mo.start(),a()});Pe.afterEach(()=>{mo.done()});Pe.afterEach((t,n)=>{Br(()=>{var e;let a="cpp-playgrounds";const r=t.matched.slice().reverse().find(s=>s.meta&&s.meta.title);if(r&&r.meta.title&&(a=r.meta.title),t.name==="BlogPage"){const s=Ms.find(o=>o.slug===t.params.slug);if(s)a=`${s.title} | cpp-playgrounds`;else for(const o of Ms){const i=(e=o.customReadMore)==null?void 0:e.find(l=>l.slug===t.params.slug);if(i){a=`${i.title} | cpp-playgrounds`;break}}}document.title=a,typeof gtag=="function"?gtag("event","page_view",{page_title:a,page_location:window.location.href,page_path:t.fullPath}):console.warn("gtag not defined")})});Zl.init();const Qd=gu(wf);Qd.use(Pe);Qd.mount("#app");
