(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(a){if(a.ep)return;a.ep=!0;const e=s(a);fetch(a.href,e)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cr(t){const n=Object.create(null);for(const s of t.split(","))n[s]=1;return s=>s in n}const bn={},Os=[],It=()=>{},Jc=()=>!1,pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tr=t=>t.startsWith("onUpdate:"),$n=Object.assign,Pr=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},np=Object.prototype.hasOwnProperty,kn=(t,n)=>np.call(t,n),an=Array.isArray,js=t=>ua(t)==="[object Map]",Ri=t=>ua(t)==="[object Set]",rn=t=>typeof t=="function",An=t=>typeof t=="string",ps=t=>typeof t=="symbol",Sn=t=>t!==null&&typeof t=="object",Ai=t=>(Sn(t)||rn(t))&&rn(t.then)&&rn(t.catch),Ii=Object.prototype.toString,ua=t=>Ii.call(t),tp=t=>ua(t).slice(8,-1),Oi=t=>ua(t)==="[object Object]",Mr=t=>An(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,re=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},sp=/-(\w)/g,kt=da(t=>t.replace(sp,(n,s)=>s?s.toUpperCase():"")),ep=/\B([A-Z])/g,Cs=da(t=>t.replace(ep,"-$1").toLowerCase()),fa=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pa=da(t=>t?`on${fa(t)}`:""),es=(t,n)=>!Object.is(t,n),Ma=(t,...n)=>{for(let s=0;s<t.length;s++)t[s](...n)},ji=(t,n,s,r=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:r,value:s})},ap=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let vo;const ha=()=>vo||(vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Er(t){if(an(t)){const n={};for(let s=0;s<t.length;s++){const r=t[s],a=An(r)?lp(r):Er(r);if(a)for(const e in a)n[e]=a[e]}return n}else if(An(t)||Sn(t))return t}const rp=/;(?![^(]*\))/g,op=/:([^]+)/,ip=/\/\*[^]*?\*\//g;function lp(t){const n={};return t.replace(ip,"").split(rp).forEach(s=>{if(s){const r=s.split(op);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Rr(t){let n="";if(An(t))n=t;else if(an(t))for(let s=0;s<t.length;s++){const r=Rr(t[s]);r&&(n+=r+" ")}else if(Sn(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}const cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pp=Cr(cp);function Li(t){return!!t||t===""}const Di=t=>!!(t&&t.__v_isRef===!0),Gt=t=>An(t)?t:t==null?"":an(t)||Sn(t)&&(t.toString===Ii||!rn(t.toString))?Di(t)?Gt(t.value):JSON.stringify(t,Fi,2):String(t),Fi=(t,n)=>Di(n)?Fi(t,n.value):js(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[r,a],e)=>(s[Ea(r,e)+" =>"]=a,s),{})}:Ri(n)?{[`Set(${n.size})`]:[...n.values()].map(s=>Ea(s))}:ps(n)?Ea(n):Sn(n)&&!an(n)&&!Oi(n)?String(n):n,Ea=(t,n="")=>{var s;return ps(t)?`Symbol(${(s=t.description)!=null?s:n})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zn;class up{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zn,!n&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,s;if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].pause();for(n=0,s=this.effects.length;n<s;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,s;if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].resume();for(n=0,s=this.effects.length;n<s;n++)this.effects[n].resume()}}run(n){if(this._active){const s=Zn;try{return Zn=this,n()}finally{Zn=s}}}on(){++this._on===1&&(this.prevScope=Zn,Zn=this)}off(){this._on>0&&--this._on===0&&(Zn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(this.effects.length=0,s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function dp(){return Zn}let xn;const Ra=new WeakSet;class zi{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zn&&Zn.active&&Zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ui(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yo(this),Gi(this);const n=xn,s=yt;xn=this,yt=!0;try{return this.fn()}finally{Ni(this),xn=n,yt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Or(n);this.deps=this.depsTail=void 0,yo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qa(this)&&this.run()}get dirty(){return qa(this)}}let Bi=0,oe,ie;function Ui(t,n=!1){if(t.flags|=8,n){t.next=ie,ie=t;return}t.next=oe,oe=t}function Ar(){Bi++}function Ir(){if(--Bi>0)return;if(ie){let n=ie;for(ie=void 0;n;){const s=n.next;n.next=void 0,n.flags&=-9,n=s}}let t;for(;oe;){let n=oe;for(oe=void 0;n;){const s=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){t||(t=r)}n=s}}if(t)throw t}function Gi(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ni(t){let n,s=t.depsTail,r=s;for(;r;){const a=r.prevDep;r.version===-1?(r===s&&(s=a),Or(r),fp(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=a}t.deps=n,t.depsTail=s}function qa(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Hi(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function Hi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===me)||(t.globalVersion=me,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!qa(t))))return;t.flags|=2;const n=t.dep,s=xn,r=yt;xn=t,yt=!0;try{Gi(t);const a=t.fn(t._value);(n.version===0||es(a,t._value))&&(t.flags|=128,t._value=a,n.version++)}catch(a){throw n.version++,a}finally{xn=s,yt=r,Ni(t),t.flags&=-3}}function Or(t,n=!1){const{dep:s,prevSub:r,nextSub:a}=t;if(r&&(r.nextSub=a,t.prevSub=void 0),a&&(a.prevSub=r,t.nextSub=void 0),s.subs===t&&(s.subs=r,!r&&s.computed)){s.computed.flags&=-5;for(let e=s.computed.deps;e;e=e.nextDep)Or(e,!0)}!n&&!--s.sc&&s.map&&s.map.delete(s.key)}function fp(t){const{prevDep:n,nextDep:s}=t;n&&(n.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=n,t.nextDep=void 0)}let yt=!0;const Wi=[];function Wt(){Wi.push(yt),yt=!1}function Vt(){const t=Wi.pop();yt=t===void 0?!0:t}function yo(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const s=xn;xn=void 0;try{n()}finally{xn=s}}}let me=0;class hp{constructor(n,s){this.sub=n,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!xn||!yt||xn===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==xn)s=this.activeLink=new hp(xn,this),xn.deps?(s.prevDep=xn.depsTail,xn.depsTail.nextDep=s,xn.depsTail=s):xn.deps=xn.depsTail=s,Vi(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const r=s.nextDep;r.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=r),s.prevDep=xn.depsTail,s.nextDep=void 0,xn.depsTail.nextDep=s,xn.depsTail=s,xn.deps===s&&(xn.deps=r)}return s}trigger(n){this.version++,me++,this.notify(n)}notify(n){Ar();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Ir()}}}function Vi(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)Vi(r)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const Ka=new WeakMap,ys=Symbol(""),Xa=Symbol(""),ke=Symbol("");function Bn(t,n,s){if(yt&&xn){let r=Ka.get(t);r||Ka.set(t,r=new Map);let a=r.get(s);a||(r.set(s,a=new jr),a.map=r,a.key=s),a.track()}}function Nt(t,n,s,r,a,e){const o=Ka.get(t);if(!o){me++;return}const i=l=>{l&&l.trigger()};if(Ar(),n==="clear")o.forEach(i);else{const l=an(t),u=l&&Mr(s);if(l&&s==="length"){const p=Number(r);o.forEach((d,h)=>{(h==="length"||h===ke||!ps(h)&&h>=p)&&i(d)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),u&&i(o.get(ke)),n){case"add":l?u&&i(o.get("length")):(i(o.get(ys)),js(t)&&i(o.get(Xa)));break;case"delete":l||(i(o.get(ys)),js(t)&&i(o.get(Xa)));break;case"set":js(t)&&i(o.get(ys));break}}Ir()}function Ps(t){const n=mn(t);return n===t?n:(Bn(n,"iterate",ke),mt(t)?n:n.map(Dn))}function ga(t){return Bn(t=mn(t),"iterate",ke),t}const gp={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,Dn)},concat(...t){return Ps(this).concat(...t.map(n=>an(n)?Ps(n):n))},entries(){return Aa(this,"entries",t=>(t[1]=Dn(t[1]),t))},every(t,n){return Dt(this,"every",t,n,void 0,arguments)},filter(t,n){return Dt(this,"filter",t,n,s=>s.map(Dn),arguments)},find(t,n){return Dt(this,"find",t,n,Dn,arguments)},findIndex(t,n){return Dt(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Dt(this,"findLast",t,n,Dn,arguments)},findLastIndex(t,n){return Dt(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Dt(this,"forEach",t,n,void 0,arguments)},includes(...t){return Ia(this,"includes",t)},indexOf(...t){return Ia(this,"indexOf",t)},join(t){return Ps(this).join(t)},lastIndexOf(...t){return Ia(this,"lastIndexOf",t)},map(t,n){return Dt(this,"map",t,n,void 0,arguments)},pop(){return Qs(this,"pop")},push(...t){return Qs(this,"push",t)},reduce(t,...n){return xo(this,"reduce",t,n)},reduceRight(t,...n){return xo(this,"reduceRight",t,n)},shift(){return Qs(this,"shift")},some(t,n){return Dt(this,"some",t,n,void 0,arguments)},splice(...t){return Qs(this,"splice",t)},toReversed(){return Ps(this).toReversed()},toSorted(t){return Ps(this).toSorted(t)},toSpliced(...t){return Ps(this).toSpliced(...t)},unshift(...t){return Qs(this,"unshift",t)},values(){return Aa(this,"values",Dn)}};function Aa(t,n,s){const r=ga(t),a=r[n]();return r!==t&&!mt(t)&&(a._next=a.next,a.next=()=>{const e=a._next();return e.value&&(e.value=s(e.value)),e}),a}const mp=Array.prototype;function Dt(t,n,s,r,a,e){const o=ga(t),i=o!==t&&!mt(t),l=o[n];if(l!==mp[n]){const d=l.apply(t,e);return i?Dn(d):d}let u=s;o!==t&&(i?u=function(d,h){return s.call(this,Dn(d),h,t)}:s.length>2&&(u=function(d,h){return s.call(this,d,h,t)}));const p=l.call(o,u,r);return i&&a?a(p):p}function xo(t,n,s,r){const a=ga(t);let e=s;return a!==t&&(mt(t)?s.length>3&&(e=function(o,i,l){return s.call(this,o,i,l,t)}):e=function(o,i,l){return s.call(this,o,Dn(i),l,t)}),a[n](e,...r)}function Ia(t,n,s){const r=mn(t);Bn(r,"iterate",ke);const a=r[n](...s);return(a===-1||a===!1)&&Fr(s[0])?(s[0]=mn(s[0]),r[n](...s)):a}function Qs(t,n,s=[]){Wt(),Ar();const r=mn(t)[n].apply(t,s);return Ir(),Vt(),r}const kp=Cr("__proto__,__v_isRef,__isVue"),$i=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ps));function vp(t){ps(t)||(t=String(t));const n=mn(this);return Bn(n,"has",t),n.hasOwnProperty(t)}class Yi{constructor(n=!1,s=!1){this._isReadonly=n,this._isShallow=s}get(n,s,r){if(s==="__v_skip")return n.__v_skip;const a=this._isReadonly,e=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return e;if(s==="__v_raw")return r===(a?e?Mp:Zi:e?Xi:Ki).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const o=an(n);if(!a){let l;if(o&&(l=gp[s]))return l;if(s==="hasOwnProperty")return vp}const i=Reflect.get(n,s,Wn(n)?n:r);return(ps(s)?$i.has(s):kp(s))||(a||Bn(n,"get",s),e)?i:Wn(i)?o&&Mr(s)?i:i.value:Sn(i)?a?Ji(i):ma(i):i}}class qi extends Yi{constructor(n=!1){super(!1,n)}set(n,s,r,a){let e=n[s];if(!this._isShallow){const l=os(e);if(!mt(r)&&!os(r)&&(e=mn(e),r=mn(r)),!an(n)&&Wn(e)&&!Wn(r))return l?!1:(e.value=r,!0)}const o=an(n)&&Mr(s)?Number(s)<n.length:kn(n,s),i=Reflect.set(n,s,r,Wn(n)?n:a);return n===mn(a)&&(o?es(r,e)&&Nt(n,"set",s,r):Nt(n,"add",s,r)),i}deleteProperty(n,s){const r=kn(n,s);n[s];const a=Reflect.deleteProperty(n,s);return a&&r&&Nt(n,"delete",s,void 0),a}has(n,s){const r=Reflect.has(n,s);return(!ps(s)||!$i.has(s))&&Bn(n,"has",s),r}ownKeys(n){return Bn(n,"iterate",an(n)?"length":ys),Reflect.ownKeys(n)}}class yp extends Yi{constructor(n=!1){super(!0,n)}set(n,s){return!0}deleteProperty(n,s){return!0}}const xp=new qi,bp=new yp,wp=new qi(!0);const Za=t=>t,je=t=>Reflect.getPrototypeOf(t);function _p(t,n,s){return function(...r){const a=this.__v_raw,e=mn(a),o=js(e),i=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=a[t](...r),p=s?Za:n?Ke:Dn;return!n&&Bn(e,"iterate",l?Xa:ys),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:i?[p(d[0]),p(d[1])]:p(d),done:h}},[Symbol.iterator](){return this}}}}function Le(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function Sp(t,n){const s={get(a){const e=this.__v_raw,o=mn(e),i=mn(a);t||(es(a,i)&&Bn(o,"get",a),Bn(o,"get",i));const{has:l}=je(o),u=n?Za:t?Ke:Dn;if(l.call(o,a))return u(e.get(a));if(l.call(o,i))return u(e.get(i));e!==o&&e.get(a)},get size(){const a=this.__v_raw;return!t&&Bn(mn(a),"iterate",ys),Reflect.get(a,"size",a)},has(a){const e=this.__v_raw,o=mn(e),i=mn(a);return t||(es(a,i)&&Bn(o,"has",a),Bn(o,"has",i)),a===i?e.has(a):e.has(a)||e.has(i)},forEach(a,e){const o=this,i=o.__v_raw,l=mn(i),u=n?Za:t?Ke:Dn;return!t&&Bn(l,"iterate",ys),i.forEach((p,d)=>a.call(e,u(p),u(d),o))}};return $n(s,t?{add:Le("add"),set:Le("set"),delete:Le("delete"),clear:Le("clear")}:{add(a){!n&&!mt(a)&&!os(a)&&(a=mn(a));const e=mn(this);return je(e).has.call(e,a)||(e.add(a),Nt(e,"add",a,a)),this},set(a,e){!n&&!mt(e)&&!os(e)&&(e=mn(e));const o=mn(this),{has:i,get:l}=je(o);let u=i.call(o,a);u||(a=mn(a),u=i.call(o,a));const p=l.call(o,a);return o.set(a,e),u?es(e,p)&&Nt(o,"set",a,e):Nt(o,"add",a,e),this},delete(a){const e=mn(this),{has:o,get:i}=je(e);let l=o.call(e,a);l||(a=mn(a),l=o.call(e,a)),i&&i.call(e,a);const u=e.delete(a);return l&&Nt(e,"delete",a,void 0),u},clear(){const a=mn(this),e=a.size!==0,o=a.clear();return e&&Nt(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=_p(a,t,n)}),s}function Lr(t,n){const s=Sp(t,n);return(r,a,e)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(kn(s,a)&&a in r?s:r,a,e)}const Cp={get:Lr(!1,!1)},Tp={get:Lr(!1,!0)},Pp={get:Lr(!0,!1)};const Ki=new WeakMap,Xi=new WeakMap,Zi=new WeakMap,Mp=new WeakMap;function Ep(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rp(t){return t.__v_skip||!Object.isExtensible(t)?0:Ep(tp(t))}function ma(t){return os(t)?t:Dr(t,!1,xp,Cp,Ki)}function Qi(t){return Dr(t,!1,wp,Tp,Xi)}function Ji(t){return Dr(t,!0,bp,Pp,Zi)}function Dr(t,n,s,r,a){if(!Sn(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const e=Rp(t);if(e===0)return t;const o=a.get(t);if(o)return o;const i=new Proxy(t,e===2?r:s);return a.set(t,i),i}function Ls(t){return os(t)?Ls(t.__v_raw):!!(t&&t.__v_isReactive)}function os(t){return!!(t&&t.__v_isReadonly)}function mt(t){return!!(t&&t.__v_isShallow)}function Fr(t){return t?!!t.__v_raw:!1}function mn(t){const n=t&&t.__v_raw;return n?mn(n):t}function Ap(t){return!kn(t,"__v_skip")&&Object.isExtensible(t)&&ji(t,"__v_skip",!0),t}const Dn=t=>Sn(t)?ma(t):t,Ke=t=>Sn(t)?Ji(t):t;function Wn(t){return t?t.__v_isRef===!0:!1}function Ht(t){return nl(t,!1)}function Ip(t){return nl(t,!0)}function nl(t,n){return Wn(t)?t:new Op(t,n)}class Op{constructor(n,s){this.dep=new jr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?n:mn(n),this._value=s?n:Dn(n),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(n){const s=this._rawValue,r=this.__v_isShallow||mt(n)||os(n);n=r?n:mn(n),es(n,s)&&(this._rawValue=n,this._value=r?n:Dn(n),this.dep.trigger())}}function xt(t){return Wn(t)?t.value:t}const jp={get:(t,n,s)=>n==="__v_raw"?t:xt(Reflect.get(t,n,s)),set:(t,n,s,r)=>{const a=t[n];return Wn(a)&&!Wn(s)?(a.value=s,!0):Reflect.set(t,n,s,r)}};function tl(t){return Ls(t)?t:new Proxy(t,jp)}class Lp{constructor(n,s,r){this.fn=n,this.setter=s,this._value=void 0,this.dep=new jr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=me-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xn!==this)return Ui(this,!0),!0}get value(){const n=this.dep.track();return Hi(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Dp(t,n,s=!1){let r,a;return rn(t)?r=t:(r=t.get,a=t.set),new Lp(r,a,s)}const De={},Xe=new WeakMap;let ms;function Fp(t,n=!1,s=ms){if(s){let r=Xe.get(s);r||Xe.set(s,r=[]),r.push(t)}}function zp(t,n,s=bn){const{immediate:r,deep:a,once:e,scheduler:o,augmentJob:i,call:l}=s,u=S=>a?S:mt(S)||a===!1||a===0?Jt(S,1):Jt(S);let p,d,h,c,g=!1,f=!1;if(Wn(t)?(d=()=>t.value,g=mt(t)):Ls(t)?(d=()=>u(t),g=!0):an(t)?(f=!0,g=t.some(S=>Ls(S)||mt(S)),d=()=>t.map(S=>{if(Wn(S))return S.value;if(Ls(S))return u(S);if(rn(S))return l?l(S,2):S()})):rn(t)?n?d=l?()=>l(t,2):t:d=()=>{if(h){Wt();try{h()}finally{Vt()}}const S=ms;ms=p;try{return l?l(t,3,[c]):t(c)}finally{ms=S}}:d=It,n&&a){const S=d,k=a===!0?1/0:a;d=()=>Jt(S(),k)}const m=dp(),v=()=>{p.stop(),m&&m.active&&Pr(m.effects,p)};if(e&&n){const S=n;n=(...k)=>{S(...k),v()}}let x=f?new Array(t.length).fill(De):De;const _=S=>{if(!(!(p.flags&1)||!p.dirty&&!S))if(n){const k=p.run();if(a||g||(f?k.some((b,w)=>es(b,x[w])):es(k,x))){h&&h();const b=ms;ms=p;try{const w=[k,x===De?void 0:f&&x[0]===De?[]:x,c];x=k,l?l(n,3,w):n(...w)}finally{ms=b}}}else p.run()};return i&&i(_),p=new zi(d),p.scheduler=o?()=>o(_,!1):_,c=S=>Fp(S,!1,p),h=p.onStop=()=>{const S=Xe.get(p);if(S){if(l)l(S,4);else for(const k of S)k();Xe.delete(p)}},n?r?_(!0):x=p.run():o?o(_.bind(null,!0),!0):p.run(),v.pause=p.pause.bind(p),v.resume=p.resume.bind(p),v.stop=v,v}function Jt(t,n=1/0,s){if(n<=0||!Sn(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),n--,Wn(t))Jt(t.value,n,s);else if(an(t))for(let r=0;r<t.length;r++)Jt(t[r],n,s);else if(Ri(t)||js(t))t.forEach(r=>{Jt(r,n,s)});else if(Oi(t)){for(const r in t)Jt(t[r],n,s);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Jt(t[r],n,s)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Re(t,n,s,r){try{return r?t(...r):t()}catch(a){ka(a,n,s)}}function jt(t,n,s,r){if(rn(t)){const a=Re(t,n,s,r);return a&&Ai(a)&&a.catch(e=>{ka(e,n,s)}),a}if(an(t)){const a=[];for(let e=0;e<t.length;e++)a.push(jt(t[e],n,s,r));return a}}function ka(t,n,s,r=!0){const a=n?n.vnode:null,{errorHandler:e,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||bn;if(n){let i=n.parent;const l=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const p=i.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](t,l,u)===!1)return}i=i.parent}if(e){Wt(),Re(e,null,10,[t,l,u]),Vt();return}}Bp(t,s,a,r,o)}function Bp(t,n,s,r=!0,a=!1){if(a)throw t;console.error(t)}const qn=[];let Pt=-1;const Ds=[];let Xt=null,Es=0;const sl=Promise.resolve();let Ze=null;function el(t){const n=Ze||sl;return t?n.then(this?t.bind(this):t):n}function Up(t){let n=Pt+1,s=qn.length;for(;n<s;){const r=n+s>>>1,a=qn[r],e=ve(a);e<t||e===t&&a.flags&2?n=r+1:s=r}return n}function zr(t){if(!(t.flags&1)){const n=ve(t),s=qn[qn.length-1];!s||!(t.flags&2)&&n>=ve(s)?qn.push(t):qn.splice(Up(n),0,t),t.flags|=1,al()}}function al(){Ze||(Ze=sl.then(ol))}function Gp(t){an(t)?Ds.push(...t):Xt&&t.id===-1?Xt.splice(Es+1,0,t):t.flags&1||(Ds.push(t),t.flags|=1),al()}function bo(t,n,s=Pt+1){for(;s<qn.length;s++){const r=qn[s];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;qn.splice(s,1),s--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function rl(t){if(Ds.length){const n=[...new Set(Ds)].sort((s,r)=>ve(s)-ve(r));if(Ds.length=0,Xt){Xt.push(...n);return}for(Xt=n,Es=0;Es<Xt.length;Es++){const s=Xt[Es];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Xt=null,Es=0}}const ve=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ol(t){try{for(Pt=0;Pt<qn.length;Pt++){const n=qn[Pt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Re(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Pt<qn.length;Pt++){const n=qn[Pt];n&&(n.flags&=-2)}Pt=-1,qn.length=0,rl(),Ze=null,(qn.length||Ds.length)&&ol()}}let vt=null,il=null;function Qe(t){const n=vt;return vt=t,il=t&&t.type.__scopeId||null,n}function Fs(t,n=vt,s){if(!n||t._n)return t;const r=(...a)=>{r._d&&Ao(-1);const e=Qe(n);let o;try{o=t(...a)}finally{Qe(e),r._d&&Ao(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ds(t,n,s,r){const a=t.dirs,e=n&&n.dirs;for(let o=0;o<a.length;o++){const i=a[o];e&&(i.oldValue=e[o].value);let l=i.dir[r];l&&(Wt(),jt(l,s,8,[t.el,i,t,n]),Vt())}}const Np=Symbol("_vte"),Hp=t=>t.__isTeleport;function Br(t,n){t.shapeFlag&6&&t.component?(t.transition=n,Br(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function ll(t,n){return rn(t)?$n({name:t.name},n,{setup:t}):t}function cl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Je(t,n,s,r,a=!1){if(an(t)){t.forEach((g,f)=>Je(g,n&&(an(n)?n[f]:n),s,r,a));return}if(le(r)&&!a){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Je(t,n,s,r.component.subTree);return}const e=r.shapeFlag&4?Vr(r.component):r.el,o=a?null:e,{i,r:l}=t,u=n&&n.r,p=i.refs===bn?i.refs={}:i.refs,d=i.setupState,h=mn(d),c=d===bn?()=>!1:g=>kn(h,g);if(u!=null&&u!==l&&(An(u)?(p[u]=null,c(u)&&(d[u]=null)):Wn(u)&&(u.value=null)),rn(l))Re(l,i,12,[o,p]);else{const g=An(l),f=Wn(l);if(g||f){const m=()=>{if(t.f){const v=g?c(l)?d[l]:p[l]:l.value;a?an(v)&&Pr(v,e):an(v)?v.includes(e)||v.push(e):g?(p[l]=[e],c(l)&&(d[l]=p[l])):(l.value=[e],t.k&&(p[t.k]=l.value))}else g?(p[l]=o,c(l)&&(d[l]=o)):f&&(l.value=o,t.k&&(p[t.k]=o))};o?(m.id=-1,at(m,s)):m()}}}ha().requestIdleCallback;ha().cancelIdleCallback;const le=t=>!!t.type.__asyncLoader,pl=t=>t.type.__isKeepAlive;function Wp(t,n){ul(t,"a",n)}function Vp(t,n){ul(t,"da",n)}function ul(t,n,s=Gn){const r=t.__wdc||(t.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(va(n,r,s),s){let a=s.parent;for(;a&&a.parent;)pl(a.parent.vnode)&&$p(r,n,s,a),a=a.parent}}function $p(t,n,s,r){const a=va(n,t,r,!0);Gr(()=>{Pr(r[n],a)},s)}function va(t,n,s=Gn,r=!1){if(s){const a=s[t]||(s[t]=[]),e=n.__weh||(n.__weh=(...o)=>{Wt();const i=Ie(s),l=jt(n,s,t,o);return i(),Vt(),l});return r?a.unshift(e):a.push(e),e}}const qt=t=>(n,s=Gn)=>{(!xe||t==="sp")&&va(t,(...r)=>n(...r),s)},Yp=qt("bm"),Ae=qt("m"),qp=qt("bu"),Kp=qt("u"),Ur=qt("bum"),Gr=qt("um"),Xp=qt("sp"),Zp=qt("rtg"),Qp=qt("rtc");function Jp(t,n=Gn){va("ec",t,n)}const nu="components";function tu(t,n){return eu(nu,t,!0,n)||t}const su=Symbol.for("v-ndc");function eu(t,n,s=!0,r=!1){const a=vt||Gn;if(a){const e=a.type;{const i=Wu(e,!1);if(i&&(i===n||i===kt(n)||i===fa(kt(n))))return e}const o=wo(a[t]||e[t],n)||wo(a.appContext[t],n);return!o&&r?e:o}}function wo(t,n){return t&&(t[n]||t[kt(n)]||t[fa(kt(n))])}function Qa(t,n,s,r){let a;const e=s,o=an(t);if(o||An(t)){const i=o&&Ls(t);let l=!1,u=!1;i&&(l=!mt(t),u=os(t),t=ga(t)),a=new Array(t.length);for(let p=0,d=t.length;p<d;p++)a[p]=n(l?u?Ke(Dn(t[p])):Dn(t[p]):t[p],p,void 0,e)}else if(typeof t=="number"){a=new Array(t);for(let i=0;i<t;i++)a[i]=n(i+1,i,void 0,e)}else if(Sn(t))if(t[Symbol.iterator])a=Array.from(t,(i,l)=>n(i,l,void 0,e));else{const i=Object.keys(t);a=new Array(i.length);for(let l=0,u=i.length;l<u;l++){const p=i[l];a[l]=n(t[p],p,l,e)}}else a=[];return a}const Ja=t=>t?Ol(t)?Vr(t):Ja(t.parent):null,ce=$n(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ja(t.parent),$root:t=>Ja(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fl(t),$forceUpdate:t=>t.f||(t.f=()=>{zr(t.update)}),$nextTick:t=>t.n||(t.n=el.bind(t.proxy)),$watch:t=>Su.bind(t)}),Oa=(t,n)=>t!==bn&&!t.__isScriptSetup&&kn(t,n),au={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:s,setupState:r,data:a,props:e,accessCache:o,type:i,appContext:l}=t;let u;if(n[0]!=="$"){const c=o[n];if(c!==void 0)switch(c){case 1:return r[n];case 2:return a[n];case 4:return s[n];case 3:return e[n]}else{if(Oa(r,n))return o[n]=1,r[n];if(a!==bn&&kn(a,n))return o[n]=2,a[n];if((u=t.propsOptions[0])&&kn(u,n))return o[n]=3,e[n];if(s!==bn&&kn(s,n))return o[n]=4,s[n];nr&&(o[n]=0)}}const p=ce[n];let d,h;if(p)return n==="$attrs"&&Bn(t.attrs,"get",""),p(t);if((d=i.__cssModules)&&(d=d[n]))return d;if(s!==bn&&kn(s,n))return o[n]=4,s[n];if(h=l.config.globalProperties,kn(h,n))return h[n]},set({_:t},n,s){const{data:r,setupState:a,ctx:e}=t;return Oa(a,n)?(a[n]=s,!0):r!==bn&&kn(r,n)?(r[n]=s,!0):kn(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(e[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:r,appContext:a,propsOptions:e}},o){let i;return!!s[o]||t!==bn&&kn(t,o)||Oa(n,o)||(i=e[0])&&kn(i,o)||kn(r,o)||kn(ce,o)||kn(a.config.globalProperties,o)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:kn(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};function _o(t){return an(t)?t.reduce((n,s)=>(n[s]=null,n),{}):t}let nr=!0;function ru(t){const n=fl(t),s=t.proxy,r=t.ctx;nr=!1,n.beforeCreate&&So(n.beforeCreate,t,"bc");const{data:a,computed:e,methods:o,watch:i,provide:l,inject:u,created:p,beforeMount:d,mounted:h,beforeUpdate:c,updated:g,activated:f,deactivated:m,beforeDestroy:v,beforeUnmount:x,destroyed:_,unmounted:S,render:k,renderTracked:b,renderTriggered:w,errorCaptured:y,serverPrefetch:C,expose:P,inheritAttrs:M,components:T,directives:I,filters:O}=n;if(u&&ou(u,r,null),o)for(const F in o){const W=o[F];rn(W)&&(r[F]=W.bind(s))}if(a){const F=a.call(s,s);Sn(F)&&(t.data=ma(F))}if(nr=!0,e)for(const F in e){const W=e[F],nn=rn(W)?W.bind(s,s):rn(W.get)?W.get.bind(s,s):It,on=!rn(W)&&rn(W.set)?W.set.bind(s):It,cn=Kn({get:nn,set:on});Object.defineProperty(r,F,{enumerable:!0,configurable:!0,get:()=>cn.value,set:en=>cn.value=en})}if(i)for(const F in i)dl(i[F],r,s,F);if(l){const F=rn(l)?l.call(s):l;Reflect.ownKeys(F).forEach(W=>{ze(W,F[W])})}p&&So(p,t,"c");function U(F,W){an(W)?W.forEach(nn=>F(nn.bind(s))):W&&F(W.bind(s))}if(U(Yp,d),U(Ae,h),U(qp,c),U(Kp,g),U(Wp,f),U(Vp,m),U(Jp,y),U(Qp,b),U(Zp,w),U(Ur,x),U(Gr,S),U(Xp,C),an(P))if(P.length){const F=t.exposed||(t.exposed={});P.forEach(W=>{Object.defineProperty(F,W,{get:()=>s[W],set:nn=>s[W]=nn})})}else t.exposed||(t.exposed={});k&&t.render===It&&(t.render=k),M!=null&&(t.inheritAttrs=M),T&&(t.components=T),I&&(t.directives=I),C&&cl(t)}function ou(t,n,s=It){an(t)&&(t=tr(t));for(const r in t){const a=t[r];let e;Sn(a)?"default"in a?e=bt(a.from||r,a.default,!0):e=bt(a.from||r):e=bt(a),Wn(e)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>e.value,set:o=>e.value=o}):n[r]=e}}function So(t,n,s){jt(an(t)?t.map(r=>r.bind(n.proxy)):t.bind(n.proxy),n,s)}function dl(t,n,s,r){let a=r.includes(".")?Tl(s,r):()=>s[r];if(An(t)){const e=n[t];rn(e)&&Be(a,e)}else if(rn(t))Be(a,t.bind(s));else if(Sn(t))if(an(t))t.forEach(e=>dl(e,n,s,r));else{const e=rn(t.handler)?t.handler.bind(s):n[t.handler];rn(e)&&Be(a,e,t)}}function fl(t){const n=t.type,{mixins:s,extends:r}=n,{mixins:a,optionsCache:e,config:{optionMergeStrategies:o}}=t.appContext,i=e.get(n);let l;return i?l=i:!a.length&&!s&&!r?l=n:(l={},a.length&&a.forEach(u=>na(l,u,o,!0)),na(l,n,o)),Sn(n)&&e.set(n,l),l}function na(t,n,s,r=!1){const{mixins:a,extends:e}=n;e&&na(t,e,s,!0),a&&a.forEach(o=>na(t,o,s,!0));for(const o in n)if(!(r&&o==="expose")){const i=iu[o]||s&&s[o];t[o]=i?i(t[o],n[o]):n[o]}return t}const iu={data:Co,props:To,emits:To,methods:se,computed:se,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:se,directives:se,watch:cu,provide:Co,inject:lu};function Co(t,n){return n?t?function(){return $n(rn(t)?t.call(this,this):t,rn(n)?n.call(this,this):n)}:n:t}function lu(t,n){return se(tr(t),tr(n))}function tr(t){if(an(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function Yn(t,n){return t?[...new Set([].concat(t,n))]:n}function se(t,n){return t?$n(Object.create(null),t,n):n}function To(t,n){return t?an(t)&&an(n)?[...new Set([...t,...n])]:$n(Object.create(null),_o(t),_o(n??{})):n}function cu(t,n){if(!t)return n;if(!n)return t;const s=$n(Object.create(null),t);for(const r in n)s[r]=Yn(t[r],n[r]);return s}function hl(){return{app:null,config:{isNativeTag:Jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pu=0;function uu(t,n){return function(r,a=null){rn(r)||(r=$n({},r)),a!=null&&!Sn(a)&&(a=null);const e=hl(),o=new WeakSet,i=[];let l=!1;const u=e.app={_uid:pu++,_component:r,_props:a,_container:null,_context:e,_instance:null,version:$u,get config(){return e.config},set config(p){},use(p,...d){return o.has(p)||(p&&rn(p.install)?(o.add(p),p.install(u,...d)):rn(p)&&(o.add(p),p(u,...d))),u},mixin(p){return e.mixins.includes(p)||e.mixins.push(p),u},component(p,d){return d?(e.components[p]=d,u):e.components[p]},directive(p,d){return d?(e.directives[p]=d,u):e.directives[p]},mount(p,d,h){if(!l){const c=u._ceVNode||wn(r,a);return c.appContext=e,h===!0?h="svg":h===!1&&(h=void 0),t(c,p,h),l=!0,u._container=p,p.__vue_app__=u,Vr(c.component)}},onUnmount(p){i.push(p)},unmount(){l&&(jt(i,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(p,d){return e.provides[p]=d,u},runWithContext(p){const d=zs;zs=u;try{return p()}finally{zs=d}}};return u}}let zs=null;function ze(t,n){if(Gn){let s=Gn.provides;const r=Gn.parent&&Gn.parent.provides;r===s&&(s=Gn.provides=Object.create(r)),s[t]=n}}function bt(t,n,s=!1){const r=Gn||vt;if(r||zs){let a=zs?zs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(a&&t in a)return a[t];if(arguments.length>1)return s&&rn(n)?n.call(r&&r.proxy):n}}const gl={},ml=()=>Object.create(gl),kl=t=>Object.getPrototypeOf(t)===gl;function du(t,n,s,r=!1){const a={},e=ml();t.propsDefaults=Object.create(null),vl(t,n,a,e);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);s?t.props=r?a:Qi(a):t.type.props?t.props=a:t.props=e,t.attrs=e}function fu(t,n,s,r){const{props:a,attrs:e,vnode:{patchFlag:o}}=t,i=mn(a),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=t.vnode.dynamicProps;for(let d=0;d<p.length;d++){let h=p[d];if(ya(t.emitsOptions,h))continue;const c=n[h];if(l)if(kn(e,h))c!==e[h]&&(e[h]=c,u=!0);else{const g=kt(h);a[g]=sr(l,i,g,c,t,!1)}else c!==e[h]&&(e[h]=c,u=!0)}}}else{vl(t,n,a,e)&&(u=!0);let p;for(const d in i)(!n||!kn(n,d)&&((p=Cs(d))===d||!kn(n,p)))&&(l?s&&(s[d]!==void 0||s[p]!==void 0)&&(a[d]=sr(l,i,d,void 0,t,!0)):delete a[d]);if(e!==i)for(const d in e)(!n||!kn(n,d))&&(delete e[d],u=!0)}u&&Nt(t.attrs,"set","")}function vl(t,n,s,r){const[a,e]=t.propsOptions;let o=!1,i;if(n)for(let l in n){if(re(l))continue;const u=n[l];let p;a&&kn(a,p=kt(l))?!e||!e.includes(p)?s[p]=u:(i||(i={}))[p]=u:ya(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(e){const l=mn(s),u=i||bn;for(let p=0;p<e.length;p++){const d=e[p];s[d]=sr(a,l,d,u[d],t,!kn(u,d))}}return o}function sr(t,n,s,r,a,e){const o=t[s];if(o!=null){const i=kn(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rn(l)){const{propsDefaults:u}=a;if(s in u)r=u[s];else{const p=Ie(a);r=u[s]=l.call(null,n),p()}}else r=l;a.ce&&a.ce._setProp(s,r)}o[0]&&(e&&!i?r=!1:o[1]&&(r===""||r===Cs(s))&&(r=!0))}return r}const hu=new WeakMap;function yl(t,n,s=!1){const r=s?hu:n.propsCache,a=r.get(t);if(a)return a;const e=t.props,o={},i=[];let l=!1;if(!rn(t)){const p=d=>{l=!0;const[h,c]=yl(d,n,!0);$n(o,h),c&&i.push(...c)};!s&&n.mixins.length&&n.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!e&&!l)return Sn(t)&&r.set(t,Os),Os;if(an(e))for(let p=0;p<e.length;p++){const d=kt(e[p]);Po(d)&&(o[d]=bn)}else if(e)for(const p in e){const d=kt(p);if(Po(d)){const h=e[p],c=o[d]=an(h)||rn(h)?{type:h}:$n({},h),g=c.type;let f=!1,m=!0;if(an(g))for(let v=0;v<g.length;++v){const x=g[v],_=rn(x)&&x.name;if(_==="Boolean"){f=!0;break}else _==="String"&&(m=!1)}else f=rn(g)&&g.name==="Boolean";c[0]=f,c[1]=m,(f||kn(c,"default"))&&i.push(d)}}const u=[o,i];return Sn(t)&&r.set(t,u),u}function Po(t){return t[0]!=="$"&&!re(t)}const Nr=t=>t[0]==="_"||t==="$stable",Hr=t=>an(t)?t.map(Et):[Et(t)],gu=(t,n,s)=>{if(n._n)return n;const r=Fs((...a)=>Hr(n(...a)),s);return r._c=!1,r},xl=(t,n,s)=>{const r=t._ctx;for(const a in t){if(Nr(a))continue;const e=t[a];if(rn(e))n[a]=gu(a,e,r);else if(e!=null){const o=Hr(e);n[a]=()=>o}}},bl=(t,n)=>{const s=Hr(n);t.slots.default=()=>s},wl=(t,n,s)=>{for(const r in n)(s||!Nr(r))&&(t[r]=n[r])},mu=(t,n,s)=>{const r=t.slots=ml();if(t.vnode.shapeFlag&32){const a=n._;a?(wl(r,n,s),s&&ji(r,"_",a,!0)):xl(n,r)}else n&&bl(t,n)},ku=(t,n,s)=>{const{vnode:r,slots:a}=t;let e=!0,o=bn;if(r.shapeFlag&32){const i=n._;i?s&&i===1?e=!1:wl(a,n,s):(e=!n.$stable,xl(n,a)),o=n}else n&&(bl(t,n),o={default:1});if(e)for(const i in a)!Nr(i)&&o[i]==null&&delete a[i]},at=Au;function vu(t){return yu(t)}function yu(t,n){const s=ha();s.__VUE__=!0;const{insert:r,remove:a,patchProp:e,createElement:o,createText:i,createComment:l,setText:u,setElementText:p,parentNode:d,nextSibling:h,setScopeId:c=It,insertStaticContent:g}=t,f=(E,R,A,L=null,z=null,B=null,q=void 0,V=null,$=!!R.dynamicChildren)=>{if(E===R)return;E&&!Js(E,R)&&(L=j(E),en(E,z,B,!0),E=null),R.patchFlag===-2&&($=!1,R.dynamicChildren=null);const{type:N,ref:J,shapeFlag:K}=R;switch(N){case xa:m(E,R,A,L);break;case is:v(E,R,A,L);break;case Ue:E==null&&x(R,A,L,q);break;case Un:T(E,R,A,L,z,B,q,V,$);break;default:K&1?k(E,R,A,L,z,B,q,V,$):K&6?I(E,R,A,L,z,B,q,V,$):(K&64||K&128)&&N.process(E,R,A,L,z,B,q,V,$,Y)}J!=null&&z&&Je(J,E&&E.ref,B,R||E,!R)},m=(E,R,A,L)=>{if(E==null)r(R.el=i(R.children),A,L);else{const z=R.el=E.el;R.children!==E.children&&u(z,R.children)}},v=(E,R,A,L)=>{E==null?r(R.el=l(R.children||""),A,L):R.el=E.el},x=(E,R,A,L)=>{[E.el,E.anchor]=g(E.children,R,A,L,E.el,E.anchor)},_=({el:E,anchor:R},A,L)=>{let z;for(;E&&E!==R;)z=h(E),r(E,A,L),E=z;r(R,A,L)},S=({el:E,anchor:R})=>{let A;for(;E&&E!==R;)A=h(E),a(E),E=A;a(R)},k=(E,R,A,L,z,B,q,V,$)=>{R.type==="svg"?q="svg":R.type==="math"&&(q="mathml"),E==null?b(R,A,L,z,B,q,V,$):C(E,R,z,B,q,V,$)},b=(E,R,A,L,z,B,q,V)=>{let $,N;const{props:J,shapeFlag:K,transition:X,dirs:tn}=E;if($=E.el=o(E.type,B,J&&J.is,J),K&8?p($,E.children):K&16&&y(E.children,$,null,L,z,ja(E,B),q,V),tn&&ds(E,null,L,"created"),w($,E,E.scopeId,q,L),J){for(const vn in J)vn!=="value"&&!re(vn)&&e($,vn,null,J[vn],B,L);"value"in J&&e($,"value",null,J.value,B),(N=J.onVnodeBeforeMount)&&Tt(N,L,E)}tn&&ds(E,null,L,"beforeMount");const ln=xu(z,X);ln&&X.beforeEnter($),r($,R,A),((N=J&&J.onVnodeMounted)||ln||tn)&&at(()=>{N&&Tt(N,L,E),ln&&X.enter($),tn&&ds(E,null,L,"mounted")},z)},w=(E,R,A,L,z)=>{if(A&&c(E,A),L)for(let B=0;B<L.length;B++)c(E,L[B]);if(z){let B=z.subTree;if(R===B||Ml(B.type)&&(B.ssContent===R||B.ssFallback===R)){const q=z.vnode;w(E,q,q.scopeId,q.slotScopeIds,z.parent)}}},y=(E,R,A,L,z,B,q,V,$=0)=>{for(let N=$;N<E.length;N++){const J=E[N]=V?Zt(E[N]):Et(E[N]);f(null,J,R,A,L,z,B,q,V)}},C=(E,R,A,L,z,B,q)=>{const V=R.el=E.el;let{patchFlag:$,dynamicChildren:N,dirs:J}=R;$|=E.patchFlag&16;const K=E.props||bn,X=R.props||bn;let tn;if(A&&fs(A,!1),(tn=X.onVnodeBeforeUpdate)&&Tt(tn,A,R,E),J&&ds(R,E,A,"beforeUpdate"),A&&fs(A,!0),(K.innerHTML&&X.innerHTML==null||K.textContent&&X.textContent==null)&&p(V,""),N?P(E.dynamicChildren,N,V,A,L,ja(R,z),B):q||W(E,R,V,null,A,L,ja(R,z),B,!1),$>0){if($&16)M(V,K,X,A,z);else if($&2&&K.class!==X.class&&e(V,"class",null,X.class,z),$&4&&e(V,"style",K.style,X.style,z),$&8){const ln=R.dynamicProps;for(let vn=0;vn<ln.length;vn++){const hn=ln[vn],On=K[hn],In=X[hn];(In!==On||hn==="value")&&e(V,hn,On,In,z,A)}}$&1&&E.children!==R.children&&p(V,R.children)}else!q&&N==null&&M(V,K,X,A,z);((tn=X.onVnodeUpdated)||J)&&at(()=>{tn&&Tt(tn,A,R,E),J&&ds(R,E,A,"updated")},L)},P=(E,R,A,L,z,B,q)=>{for(let V=0;V<R.length;V++){const $=E[V],N=R[V],J=$.el&&($.type===Un||!Js($,N)||$.shapeFlag&198)?d($.el):A;f($,N,J,null,L,z,B,q,!0)}},M=(E,R,A,L,z)=>{if(R!==A){if(R!==bn)for(const B in R)!re(B)&&!(B in A)&&e(E,B,R[B],null,z,L);for(const B in A){if(re(B))continue;const q=A[B],V=R[B];q!==V&&B!=="value"&&e(E,B,V,q,z,L)}"value"in A&&e(E,"value",R.value,A.value,z)}},T=(E,R,A,L,z,B,q,V,$)=>{const N=R.el=E?E.el:i(""),J=R.anchor=E?E.anchor:i("");let{patchFlag:K,dynamicChildren:X,slotScopeIds:tn}=R;tn&&(V=V?V.concat(tn):tn),E==null?(r(N,A,L),r(J,A,L),y(R.children||[],A,J,z,B,q,V,$)):K>0&&K&64&&X&&E.dynamicChildren?(P(E.dynamicChildren,X,A,z,B,q,V),(R.key!=null||z&&R===z.subTree)&&_l(E,R,!0)):W(E,R,A,J,z,B,q,V,$)},I=(E,R,A,L,z,B,q,V,$)=>{R.slotScopeIds=V,E==null?R.shapeFlag&512?z.ctx.activate(R,A,L,q,$):O(R,A,L,z,B,q,$):D(E,R,$)},O=(E,R,A,L,z,B,q)=>{const V=E.component=Bu(E,L,z);if(pl(E)&&(V.ctx.renderer=Y),Uu(V,!1,q),V.asyncDep){if(z&&z.registerDep(V,U,q),!E.el){const $=V.subTree=wn(is);v(null,$,R,A)}}else U(V,E,R,A,z,B,q)},D=(E,R,A)=>{const L=R.component=E.component;if(Eu(E,R,A))if(L.asyncDep&&!L.asyncResolved){F(L,R,A);return}else L.next=R,L.update();else R.el=E.el,L.vnode=R},U=(E,R,A,L,z,B,q)=>{const V=()=>{if(E.isMounted){let{next:K,bu:X,u:tn,parent:ln,vnode:vn}=E;{const St=Sl(E);if(St){K&&(K.el=vn.el,F(E,K,q)),St.asyncDep.then(()=>{E.isUnmounted||V()});return}}let hn=K,On;fs(E,!1),K?(K.el=vn.el,F(E,K,q)):K=vn,X&&Ma(X),(On=K.props&&K.props.onVnodeBeforeUpdate)&&Tt(On,ln,K,vn),fs(E,!0);const In=Eo(E),_t=E.subTree;E.subTree=In,f(_t,In,d(_t.el),j(_t),E,z,B),K.el=In.el,hn===null&&Ru(E,In.el),tn&&at(tn,z),(On=K.props&&K.props.onVnodeUpdated)&&at(()=>Tt(On,ln,K,vn),z)}else{let K;const{el:X,props:tn}=R,{bm:ln,m:vn,parent:hn,root:On,type:In}=E,_t=le(R);fs(E,!1),ln&&Ma(ln),!_t&&(K=tn&&tn.onVnodeBeforeMount)&&Tt(K,hn,R),fs(E,!0);{On.ce&&On.ce._injectChildStyle(In);const St=E.subTree=Eo(E);f(null,St,A,L,E,z,B),R.el=St.el}if(vn&&at(vn,z),!_t&&(K=tn&&tn.onVnodeMounted)){const St=R;at(()=>Tt(K,hn,St),z)}(R.shapeFlag&256||hn&&le(hn.vnode)&&hn.vnode.shapeFlag&256)&&E.a&&at(E.a,z),E.isMounted=!0,R=A=L=null}};E.scope.on();const $=E.effect=new zi(V);E.scope.off();const N=E.update=$.run.bind($),J=E.job=$.runIfDirty.bind($);J.i=E,J.id=E.uid,$.scheduler=()=>zr(J),fs(E,!0),N()},F=(E,R,A)=>{R.component=E;const L=E.vnode.props;E.vnode=R,E.next=null,fu(E,R.props,L,A),ku(E,R.children,A),Wt(),bo(E),Vt()},W=(E,R,A,L,z,B,q,V,$=!1)=>{const N=E&&E.children,J=E?E.shapeFlag:0,K=R.children,{patchFlag:X,shapeFlag:tn}=R;if(X>0){if(X&128){on(N,K,A,L,z,B,q,V,$);return}else if(X&256){nn(N,K,A,L,z,B,q,V,$);return}}tn&8?(J&16&&Q(N,z,B),K!==N&&p(A,K)):J&16?tn&16?on(N,K,A,L,z,B,q,V,$):Q(N,z,B,!0):(J&8&&p(A,""),tn&16&&y(K,A,L,z,B,q,V,$))},nn=(E,R,A,L,z,B,q,V,$)=>{E=E||Os,R=R||Os;const N=E.length,J=R.length,K=Math.min(N,J);let X;for(X=0;X<K;X++){const tn=R[X]=$?Zt(R[X]):Et(R[X]);f(E[X],tn,A,null,z,B,q,V,$)}N>J?Q(E,z,B,!0,!1,K):y(R,A,L,z,B,q,V,$,K)},on=(E,R,A,L,z,B,q,V,$)=>{let N=0;const J=R.length;let K=E.length-1,X=J-1;for(;N<=K&&N<=X;){const tn=E[N],ln=R[N]=$?Zt(R[N]):Et(R[N]);if(Js(tn,ln))f(tn,ln,A,null,z,B,q,V,$);else break;N++}for(;N<=K&&N<=X;){const tn=E[K],ln=R[X]=$?Zt(R[X]):Et(R[X]);if(Js(tn,ln))f(tn,ln,A,null,z,B,q,V,$);else break;K--,X--}if(N>K){if(N<=X){const tn=X+1,ln=tn<J?R[tn].el:L;for(;N<=X;)f(null,R[N]=$?Zt(R[N]):Et(R[N]),A,ln,z,B,q,V,$),N++}}else if(N>X)for(;N<=K;)en(E[N],z,B,!0),N++;else{const tn=N,ln=N,vn=new Map;for(N=ln;N<=X;N++){const et=R[N]=$?Zt(R[N]):Et(R[N]);et.key!=null&&vn.set(et.key,N)}let hn,On=0;const In=X-ln+1;let _t=!1,St=0;const Zs=new Array(In);for(N=0;N<In;N++)Zs[N]=0;for(N=tn;N<=K;N++){const et=E[N];if(On>=In){en(et,z,B,!0);continue}let Ct;if(et.key!=null)Ct=vn.get(et.key);else for(hn=ln;hn<=X;hn++)if(Zs[hn-ln]===0&&Js(et,R[hn])){Ct=hn;break}Ct===void 0?en(et,z,B,!0):(Zs[Ct-ln]=N+1,Ct>=St?St=Ct:_t=!0,f(et,R[Ct],A,null,z,B,q,V,$),On++)}const mo=_t?bu(Zs):Os;for(hn=mo.length-1,N=In-1;N>=0;N--){const et=ln+N,Ct=R[et],ko=et+1<J?R[et+1].el:L;Zs[N]===0?f(null,Ct,A,ko,z,B,q,V,$):_t&&(hn<0||N!==mo[hn]?cn(Ct,A,ko,2):hn--)}}},cn=(E,R,A,L,z=null)=>{const{el:B,type:q,transition:V,children:$,shapeFlag:N}=E;if(N&6){cn(E.component.subTree,R,A,L);return}if(N&128){E.suspense.move(R,A,L);return}if(N&64){q.move(E,R,A,Y);return}if(q===Un){r(B,R,A);for(let K=0;K<$.length;K++)cn($[K],R,A,L);r(E.anchor,R,A);return}if(q===Ue){_(E,R,A);return}if(L!==2&&N&1&&V)if(L===0)V.beforeEnter(B),r(B,R,A),at(()=>V.enter(B),z);else{const{leave:K,delayLeave:X,afterLeave:tn}=V,ln=()=>{E.ctx.isUnmounted?a(B):r(B,R,A)},vn=()=>{K(B,()=>{ln(),tn&&tn()})};X?X(B,ln,vn):vn()}else r(B,R,A)},en=(E,R,A,L=!1,z=!1)=>{const{type:B,props:q,ref:V,children:$,dynamicChildren:N,shapeFlag:J,patchFlag:K,dirs:X,cacheIndex:tn}=E;if(K===-2&&(z=!1),V!=null&&(Wt(),Je(V,null,A,E,!0),Vt()),tn!=null&&(R.renderCache[tn]=void 0),J&256){R.ctx.deactivate(E);return}const ln=J&1&&X,vn=!le(E);let hn;if(vn&&(hn=q&&q.onVnodeBeforeUnmount)&&Tt(hn,R,E),J&6)dn(E.component,A,L);else{if(J&128){E.suspense.unmount(A,L);return}ln&&ds(E,null,R,"beforeUnmount"),J&64?E.type.remove(E,R,A,Y,L):N&&!N.hasOnce&&(B!==Un||K>0&&K&64)?Q(N,R,A,!1,!0):(B===Un&&K&384||!z&&J&16)&&Q($,R,A),L&&un(E)}(vn&&(hn=q&&q.onVnodeUnmounted)||ln)&&at(()=>{hn&&Tt(hn,R,E),ln&&ds(E,null,R,"unmounted")},A)},un=E=>{const{type:R,el:A,anchor:L,transition:z}=E;if(R===Un){pn(A,L);return}if(R===Ue){S(E);return}const B=()=>{a(A),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(E.shapeFlag&1&&z&&!z.persisted){const{leave:q,delayLeave:V}=z,$=()=>q(A,B);V?V(E.el,B,$):$()}else B()},pn=(E,R)=>{let A;for(;E!==R;)A=h(E),a(E),E=A;a(R)},dn=(E,R,A)=>{const{bum:L,scope:z,job:B,subTree:q,um:V,m:$,a:N,parent:J,slots:{__:K}}=E;Mo($),Mo(N),L&&Ma(L),J&&an(K)&&K.forEach(X=>{J.renderCache[X]=void 0}),z.stop(),B&&(B.flags|=8,en(q,E,R,A)),V&&at(V,R),at(()=>{E.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Q=(E,R,A,L=!1,z=!1,B=0)=>{for(let q=B;q<E.length;q++)en(E[q],R,A,L,z)},j=E=>{if(E.shapeFlag&6)return j(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=h(E.anchor||E.el),A=R&&R[Np];return A?h(A):R};let G=!1;const H=(E,R,A)=>{E==null?R._vnode&&en(R._vnode,null,null,!0):f(R._vnode||null,E,R,null,null,null,A),R._vnode=E,G||(G=!0,bo(),rl(),G=!1)},Y={p:f,um:en,m:cn,r:un,mt:O,mc:y,pc:W,pbc:P,n:j,o:t};return{render:H,hydrate:void 0,createApp:uu(H)}}function ja({type:t,props:n},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:s}function fs({effect:t,job:n},s){s?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function xu(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function _l(t,n,s=!1){const r=t.children,a=n.children;if(an(r)&&an(a))for(let e=0;e<r.length;e++){const o=r[e];let i=a[e];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[e]=Zt(a[e]),i.el=o.el),!s&&i.patchFlag!==-2&&_l(o,i)),i.type===xa&&(i.el=o.el),i.type===is&&!i.el&&(i.el=o.el)}}function bu(t){const n=t.slice(),s=[0];let r,a,e,o,i;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(a=s[s.length-1],t[a]<u){n[r]=a,s.push(r);continue}for(e=0,o=s.length-1;e<o;)i=e+o>>1,t[s[i]]<u?e=i+1:o=i;u<t[s[e]]&&(e>0&&(n[r]=s[e-1]),s[e]=r)}}for(e=s.length,o=s[e-1];e-- >0;)s[e]=o,o=n[o];return s}function Sl(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Sl(n)}function Mo(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const wu=Symbol.for("v-scx"),_u=()=>bt(wu);function Be(t,n,s){return Cl(t,n,s)}function Cl(t,n,s=bn){const{immediate:r,deep:a,flush:e,once:o}=s,i=$n({},s),l=n&&r||!n&&e!=="post";let u;if(xe){if(e==="sync"){const c=_u();u=c.__watcherHandles||(c.__watcherHandles=[])}else if(!l){const c=()=>{};return c.stop=It,c.resume=It,c.pause=It,c}}const p=Gn;i.call=(c,g,f)=>jt(c,p,g,f);let d=!1;e==="post"?i.scheduler=c=>{at(c,p&&p.suspense)}:e!=="sync"&&(d=!0,i.scheduler=(c,g)=>{g?c():zr(c)}),i.augmentJob=c=>{n&&(c.flags|=4),d&&(c.flags|=2,p&&(c.id=p.uid,c.i=p))};const h=zp(t,n,i);return xe&&(u?u.push(h):l&&h()),h}function Su(t,n,s){const r=this.proxy,a=An(t)?t.includes(".")?Tl(r,t):()=>r[t]:t.bind(r,r);let e;rn(n)?e=n:(e=n.handler,s=n);const o=Ie(this),i=Cl(a,e.bind(r),s);return o(),i}function Tl(t,n){const s=n.split(".");return()=>{let r=t;for(let a=0;a<s.length&&r;a++)r=r[s[a]];return r}}const Cu=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${kt(n)}Modifiers`]||t[`${Cs(n)}Modifiers`];function Tu(t,n,...s){if(t.isUnmounted)return;const r=t.vnode.props||bn;let a=s;const e=n.startsWith("update:"),o=e&&Cu(r,n.slice(7));o&&(o.trim&&(a=s.map(p=>An(p)?p.trim():p)),o.number&&(a=s.map(ap)));let i,l=r[i=Pa(n)]||r[i=Pa(kt(n))];!l&&e&&(l=r[i=Pa(Cs(n))]),l&&jt(l,t,6,a);const u=r[i+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,jt(u,t,6,a)}}function Pl(t,n,s=!1){const r=n.emitsCache,a=r.get(t);if(a!==void 0)return a;const e=t.emits;let o={},i=!1;if(!rn(t)){const l=u=>{const p=Pl(u,n,!0);p&&(i=!0,$n(o,p))};!s&&n.mixins.length&&n.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!e&&!i?(Sn(t)&&r.set(t,null),null):(an(e)?e.forEach(l=>o[l]=null):$n(o,e),Sn(t)&&r.set(t,o),o)}function ya(t,n){return!t||!pa(n)?!1:(n=n.slice(2).replace(/Once$/,""),kn(t,n[0].toLowerCase()+n.slice(1))||kn(t,Cs(n))||kn(t,n))}function Eo(t){const{type:n,vnode:s,proxy:r,withProxy:a,propsOptions:[e],slots:o,attrs:i,emit:l,render:u,renderCache:p,props:d,data:h,setupState:c,ctx:g,inheritAttrs:f}=t,m=Qe(t);let v,x;try{if(s.shapeFlag&4){const S=a||r,k=S;v=Et(u.call(k,S,p,d,c,h,g)),x=i}else{const S=n;v=Et(S.length>1?S(d,{attrs:i,slots:o,emit:l}):S(d,null)),x=n.props?i:Pu(i)}}catch(S){pe.length=0,ka(S,t,1),v=wn(is)}let _=v;if(x&&f!==!1){const S=Object.keys(x),{shapeFlag:k}=_;S.length&&k&7&&(e&&S.some(Tr)&&(x=Mu(x,e)),_=Ns(_,x,!1,!0))}return s.dirs&&(_=Ns(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(s.dirs):s.dirs),s.transition&&Br(_,s.transition),v=_,Qe(m),v}const Pu=t=>{let n;for(const s in t)(s==="class"||s==="style"||pa(s))&&((n||(n={}))[s]=t[s]);return n},Mu=(t,n)=>{const s={};for(const r in t)(!Tr(r)||!(r.slice(9)in n))&&(s[r]=t[r]);return s};function Eu(t,n,s){const{props:r,children:a,component:e}=t,{props:o,children:i,patchFlag:l}=n,u=e.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return r?Ro(r,o,u):!!o;if(l&8){const p=n.dynamicProps;for(let d=0;d<p.length;d++){const h=p[d];if(o[h]!==r[h]&&!ya(u,h))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?Ro(r,o,u):!0:!!o;return!1}function Ro(t,n,s){const r=Object.keys(n);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const e=r[a];if(n[e]!==t[e]&&!ya(s,e))return!0}return!1}function Ru({vnode:t,parent:n},s){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=n.vnode).el=s,n=n.parent;else break}}const Ml=t=>t.__isSuspense;function Au(t,n){n&&n.pendingBranch?an(t)?n.effects.push(...t):n.effects.push(t):Gp(t)}const Un=Symbol.for("v-fgt"),xa=Symbol.for("v-txt"),is=Symbol.for("v-cmt"),Ue=Symbol.for("v-stc"),pe=[];let it=null;function jn(t=!1){pe.push(it=t?null:[])}function Iu(){pe.pop(),it=pe[pe.length-1]||null}let ye=1;function Ao(t,n=!1){ye+=t,t<0&&it&&n&&(it.hasOnce=!0)}function El(t){return t.dynamicChildren=ye>0?it||Os:null,Iu(),ye>0&&it&&it.push(t),t}function zn(t,n,s,r,a,e){return El(Z(t,n,s,r,a,e,!0))}function Rl(t,n,s,r,a){return El(wn(t,n,s,r,a,!0))}function ta(t){return t?t.__v_isVNode===!0:!1}function Js(t,n){return t.type===n.type&&t.key===n.key}const Al=({key:t})=>t??null,Ge=({ref:t,ref_key:n,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?An(t)||Wn(t)||rn(t)?{i:vt,r:t,k:n,f:!!s}:t:null);function Z(t,n=null,s=null,r=0,a=null,e=t===Un?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Al(n),ref:n&&Ge(n),scopeId:il,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:e,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:vt};return i?(Wr(l,s),e&128&&t.normalize(l)):s&&(l.shapeFlag|=An(s)?8:16),ye>0&&!o&&it&&(l.patchFlag>0||e&6)&&l.patchFlag!==32&&it.push(l),l}const wn=Ou;function Ou(t,n=null,s=null,r=0,a=null,e=!1){if((!t||t===su)&&(t=is),ta(t)){const i=Ns(t,n,!0);return s&&Wr(i,s),ye>0&&!e&&it&&(i.shapeFlag&6?it[it.indexOf(t)]=i:it.push(i)),i.patchFlag=-2,i}if(Vu(t)&&(t=t.__vccOpts),n){n=ju(n);let{class:i,style:l}=n;i&&!An(i)&&(n.class=Rr(i)),Sn(l)&&(Fr(l)&&!an(l)&&(l=$n({},l)),n.style=Er(l))}const o=An(t)?1:Ml(t)?128:Hp(t)?64:Sn(t)?4:rn(t)?2:0;return Z(t,n,s,r,a,o,e,!0)}function ju(t){return t?Fr(t)||kl(t)?$n({},t):t:null}function Ns(t,n,s=!1,r=!1){const{props:a,ref:e,patchFlag:o,children:i,transition:l}=t,u=n?Du(a||{},n):a,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Al(u),ref:n&&n.ref?s&&e?an(e)?e.concat(Ge(n)):[e,Ge(n)]:Ge(n):e,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Un?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ns(t.ssContent),ssFallback:t.ssFallback&&Ns(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Br(p,l.clone(p)),p}function Il(t=" ",n=0){return wn(xa,null,t,n)}function er(t,n){const s=wn(Ue,null,t);return s.staticCount=n,s}function Lu(t="",n=!1){return n?(jn(),Rl(is,null,t)):wn(is,null,t)}function Et(t){return t==null||typeof t=="boolean"?wn(is):an(t)?wn(Un,null,t.slice()):ta(t)?Zt(t):wn(xa,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ns(t)}function Wr(t,n){let s=0;const{shapeFlag:r}=t;if(n==null)n=null;else if(an(n))s=16;else if(typeof n=="object")if(r&65){const a=n.default;a&&(a._c&&(a._d=!1),Wr(t,a()),a._c&&(a._d=!0));return}else{s=32;const a=n._;!a&&!kl(n)?n._ctx=vt:a===3&&vt&&(vt.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else rn(n)?(n={default:n,_ctx:vt},s=32):(n=String(n),r&64?(s=16,n=[Il(n)]):s=8);t.children=n,t.shapeFlag|=s}function Du(...t){const n={};for(let s=0;s<t.length;s++){const r=t[s];for(const a in r)if(a==="class")n.class!==r.class&&(n.class=Rr([n.class,r.class]));else if(a==="style")n.style=Er([n.style,r.style]);else if(pa(a)){const e=n[a],o=r[a];o&&e!==o&&!(an(e)&&e.includes(o))&&(n[a]=e?[].concat(e,o):o)}else a!==""&&(n[a]=r[a])}return n}function Tt(t,n,s,r=null){jt(t,n,7,[s,r])}const Fu=hl();let zu=0;function Bu(t,n,s){const r=t.type,a=(n?n.appContext:t.appContext)||Fu,e={uid:zu++,vnode:t,type:r,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yl(r,a),emitsOptions:Pl(r,a),emit:null,emitted:null,propsDefaults:bn,inheritAttrs:r.inheritAttrs,ctx:bn,data:bn,props:bn,attrs:bn,slots:bn,refs:bn,setupState:bn,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return e.ctx={_:e},e.root=n?n.root:e,e.emit=Tu.bind(null,e),t.ce&&t.ce(e),e}let Gn=null,sa,ar;{const t=ha(),n=(s,r)=>{let a;return(a=t[s])||(a=t[s]=[]),a.push(r),e=>{a.length>1?a.forEach(o=>o(e)):a[0](e)}};sa=n("__VUE_INSTANCE_SETTERS__",s=>Gn=s),ar=n("__VUE_SSR_SETTERS__",s=>xe=s)}const Ie=t=>{const n=Gn;return sa(t),t.scope.on(),()=>{t.scope.off(),sa(n)}},Io=()=>{Gn&&Gn.scope.off(),sa(null)};function Ol(t){return t.vnode.shapeFlag&4}let xe=!1;function Uu(t,n=!1,s=!1){n&&ar(n);const{props:r,children:a}=t.vnode,e=Ol(t);du(t,r,e,n),mu(t,a,s||n);const o=e?Gu(t,n):void 0;return n&&ar(!1),o}function Gu(t,n){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,au);const{setup:r}=s;if(r){Wt();const a=t.setupContext=r.length>1?Hu(t):null,e=Ie(t),o=Re(r,t,0,[t.props,a]),i=Ai(o);if(Vt(),e(),(i||t.sp)&&!le(t)&&cl(t),i){if(o.then(Io,Io),n)return o.then(l=>{Oo(t,l)}).catch(l=>{ka(l,t,0)});t.asyncDep=o}else Oo(t,o)}else jl(t)}function Oo(t,n,s){rn(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Sn(n)&&(t.setupState=tl(n)),jl(t)}function jl(t,n,s){const r=t.type;t.render||(t.render=r.render||It);{const a=Ie(t);Wt();try{ru(t)}finally{Vt(),a()}}}const Nu={get(t,n){return Bn(t,"get",""),t[n]}};function Hu(t){const n=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,Nu),slots:t.slots,emit:t.emit,expose:n}}function Vr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tl(Ap(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in ce)return ce[s](t)},has(n,s){return s in n||s in ce}})):t.proxy}function Wu(t,n=!0){return rn(t)?t.displayName||t.name:t.name||n&&t.__name}function Vu(t){return rn(t)&&"__vccOpts"in t}const Kn=(t,n)=>Dp(t,n,xe);function Ll(t,n,s){const r=arguments.length;return r===2?Sn(n)&&!an(n)?ta(n)?wn(t,null,[n]):wn(t,n):wn(t,null,n):(r>3?s=Array.prototype.slice.call(arguments,2):r===3&&ta(s)&&(s=[s]),wn(t,n,s))}const $u="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rr;const jo=typeof window<"u"&&window.trustedTypes;if(jo)try{rr=jo.createPolicy("vue",{createHTML:t=>t})}catch{}const Dl=rr?t=>rr.createHTML(t):t=>t,Yu="http://www.w3.org/2000/svg",qu="http://www.w3.org/1998/Math/MathML",zt=typeof document<"u"?document:null,Lo=zt&&zt.createElement("template"),Ku={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,r)=>{const a=n==="svg"?zt.createElementNS(Yu,t):n==="mathml"?zt.createElementNS(qu,t):s?zt.createElement(t,{is:s}):zt.createElement(t);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>zt.createTextNode(t),createComment:t=>zt.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zt.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,r,a,e){const o=s?s.previousSibling:n.lastChild;if(a&&(a===e||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),s),!(a===e||!(a=a.nextSibling)););else{Lo.innerHTML=Dl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const i=Lo.content;if(r==="svg"||r==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,s)}return[o?o.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}},Xu=Symbol("_vtc");function Zu(t,n,s){const r=t[Xu];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}const Do=Symbol("_vod"),Qu=Symbol("_vsh"),Ju=Symbol(""),nd=/(^|;)\s*display\s*:/;function td(t,n,s){const r=t.style,a=An(s);let e=!1;if(s&&!a){if(n)if(An(n))for(const o of n.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&Ne(r,i,"")}else for(const o in n)s[o]==null&&Ne(r,o,"");for(const o in s)o==="display"&&(e=!0),Ne(r,o,s[o])}else if(a){if(n!==s){const o=r[Ju];o&&(s+=";"+o),r.cssText=s,e=nd.test(s)}}else n&&t.removeAttribute("style");Do in t&&(t[Do]=e?r.display:"",t[Qu]&&(r.display="none"))}const Fo=/\s*!important$/;function Ne(t,n,s){if(an(s))s.forEach(r=>Ne(t,n,r));else if(s==null&&(s=""),n.startsWith("--"))t.setProperty(n,s);else{const r=sd(t,n);Fo.test(s)?t.setProperty(Cs(r),s.replace(Fo,""),"important"):t[r]=s}}const zo=["Webkit","Moz","ms"],La={};function sd(t,n){const s=La[n];if(s)return s;let r=kt(n);if(r!=="filter"&&r in t)return La[n]=r;r=fa(r);for(let a=0;a<zo.length;a++){const e=zo[a]+r;if(e in t)return La[n]=e}return n}const Bo="http://www.w3.org/1999/xlink";function Uo(t,n,s,r,a,e=pp(n)){r&&n.startsWith("xlink:")?s==null?t.removeAttributeNS(Bo,n.slice(6,n.length)):t.setAttributeNS(Bo,n,s):s==null||e&&!Li(s)?t.removeAttribute(n):t.setAttribute(n,e?"":ps(s)?String(s):s)}function Go(t,n,s,r,a){if(n==="innerHTML"||n==="textContent"){s!=null&&(t[n]=n==="innerHTML"?Dl(s):s);return}const e=t.tagName;if(n==="value"&&e!=="PROGRESS"&&!e.includes("-")){const i=e==="OPTION"?t.getAttribute("value")||"":t.value,l=s==null?t.type==="checkbox"?"on":"":String(s);(i!==l||!("_value"in t))&&(t.value=l),s==null&&t.removeAttribute(n),t._value=s;return}let o=!1;if(s===""||s==null){const i=typeof t[n];i==="boolean"?s=Li(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{t[n]=s}catch{}o&&t.removeAttribute(a||n)}function ed(t,n,s,r){t.addEventListener(n,s,r)}function ad(t,n,s,r){t.removeEventListener(n,s,r)}const No=Symbol("_vei");function rd(t,n,s,r,a=null){const e=t[No]||(t[No]={}),o=e[n];if(r&&o)o.value=r;else{const[i,l]=od(n);if(r){const u=e[n]=cd(r,a);ed(t,i,u,l)}else o&&(ad(t,i,o,l),e[n]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function od(t){let n;if(Ho.test(t)){n={};let r;for(;r=t.match(Ho);)t=t.slice(0,t.length-r[0].length),n[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cs(t.slice(2)),n]}let Da=0;const id=Promise.resolve(),ld=()=>Da||(id.then(()=>Da=0),Da=Date.now());function cd(t,n){const s=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=s.attached)return;jt(pd(r,s.value),n,5,[r])};return s.value=t,s.attached=ld(),s}function pd(t,n){if(an(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(r=>a=>!a._stopped&&r&&r(a))}else return n}const Wo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ud=(t,n,s,r,a,e)=>{const o=a==="svg";n==="class"?Zu(t,r,o):n==="style"?td(t,s,r):pa(n)?Tr(n)||rd(t,n,s,r,e):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):dd(t,n,r,o))?(Go(t,n,r),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Uo(t,n,r,o,e,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!An(r))?Go(t,kt(n),r,e,n):(n==="true-value"?t._trueValue=r:n==="false-value"&&(t._falseValue=r),Uo(t,n,r,o))};function dd(t,n,s,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in t&&Wo(n)&&rn(s));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Wo(n)&&An(s)?!1:n in t}const fd=$n({patchProp:ud},Ku);let Vo;function hd(){return Vo||(Vo=vu(fd))}const gd=(...t)=>{const n=hd().createApp(...t),{mount:s}=n;return n.mount=r=>{const a=kd(r);if(!a)return;const e=n._component;!rn(e)&&!e.render&&!e.template&&(e.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,md(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},n};function md(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function kd(t){return An(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof document<"u";function Fl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fl(t.default)}const gn=Object.assign;function Fa(t,n){const s={};for(const r in n){const a=n[r];s[r]=wt(a)?a.map(t):t(a)}return s}const ue=()=>{},wt=Array.isArray,zl=/#/g,yd=/&/g,xd=/\//g,bd=/=/g,wd=/\?/g,Bl=/\+/g,_d=/%5B/g,Sd=/%5D/g,Ul=/%5E/g,Cd=/%60/g,Gl=/%7B/g,Td=/%7C/g,Nl=/%7D/g,Pd=/%20/g;function $r(t){return encodeURI(""+t).replace(Td,"|").replace(_d,"[").replace(Sd,"]")}function Md(t){return $r(t).replace(Gl,"{").replace(Nl,"}").replace(Ul,"^")}function or(t){return $r(t).replace(Bl,"%2B").replace(Pd,"+").replace(zl,"%23").replace(yd,"%26").replace(Cd,"`").replace(Gl,"{").replace(Nl,"}").replace(Ul,"^")}function Ed(t){return or(t).replace(bd,"%3D")}function Rd(t){return $r(t).replace(zl,"%23").replace(wd,"%3F")}function Ad(t){return t==null?"":Rd(t).replace(xd,"%2F")}function be(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Id=/\/$/,Od=t=>t.replace(Id,"");function za(t,n,s="/"){let r,a={},e="",o="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(r=n.slice(0,l),e=n.slice(l+1,i>-1?i:n.length),a=t(e)),i>-1&&(r=r||n.slice(0,i),o=n.slice(i,n.length)),r=Fd(r??n,s),{fullPath:r+(e&&"?")+e+o,path:r,query:a,hash:be(o)}}function jd(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function $o(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Ld(t,n,s){const r=n.matched.length-1,a=s.matched.length-1;return r>-1&&r===a&&Hs(n.matched[r],s.matched[a])&&Hl(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function Hs(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Hl(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!Dd(t[s],n[s]))return!1;return!0}function Dd(t,n){return wt(t)?Yo(t,n):wt(n)?Yo(n,t):t===n}function Yo(t,n){return wt(n)?t.length===n.length&&t.every((s,r)=>s===n[r]):t.length===1&&t[0]===n}function Fd(t,n){if(t.startsWith("/"))return t;if(!t)return n;const s=n.split("/"),r=t.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let e=s.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")e>1&&e--;else break;return s.slice(0,e).join("/")+"/"+r.slice(o).join("/")}const Kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var we;(function(t){t.pop="pop",t.push="push"})(we||(we={}));var de;(function(t){t.back="back",t.forward="forward",t.unknown=""})(de||(de={}));function zd(t){if(!t)if(Rs){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Od(t)}const Bd=/^[^#]+#/;function Ud(t,n){return t.replace(Bd,"#")+n}function Gd(t,n){const s=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:n.behavior,left:r.left-s.left-(n.left||0),top:r.top-s.top-(n.top||0)}}const ba=()=>({left:window.scrollX,top:window.scrollY});function Nd(t){let n;if("el"in t){const s=t.el,r=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?r?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;n=Gd(a,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function qo(t,n){return(history.state?history.state.position-n:-1)+t}const ir=new Map;function Hd(t,n){ir.set(t,n)}function Wd(t){const n=ir.get(t);return ir.delete(t),n}let Vd=()=>location.protocol+"//"+location.host;function Wl(t,n){const{pathname:s,search:r,hash:a}=n,e=t.indexOf("#");if(e>-1){let i=a.includes(t.slice(e))?t.slice(e).length:1,l=a.slice(i);return l[0]!=="/"&&(l="/"+l),$o(l,"")}return $o(s,t)+r+a}function $d(t,n,s,r){let a=[],e=[],o=null;const i=({state:h})=>{const c=Wl(t,location),g=s.value,f=n.value;let m=0;if(h){if(s.value=c,n.value=h,o&&o===g){o=null;return}m=f?h.position-f.position:0}else r(c);a.forEach(v=>{v(s.value,g,{delta:m,type:we.pop,direction:m?m>0?de.forward:de.back:de.unknown})})};function l(){o=s.value}function u(h){a.push(h);const c=()=>{const g=a.indexOf(h);g>-1&&a.splice(g,1)};return e.push(c),c}function p(){const{history:h}=window;h.state&&h.replaceState(gn({},h.state,{scroll:ba()}),"")}function d(){for(const h of e)h();e=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function Ko(t,n,s,r=!1,a=!1){return{back:t,current:n,forward:s,replaced:r,position:window.history.length,scroll:a?ba():null}}function Yd(t){const{history:n,location:s}=window,r={value:Wl(t,s)},a={value:n.state};a.value||e(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function e(l,u,p){const d=t.indexOf("#"),h=d>-1?(s.host&&document.querySelector("base")?t:t.slice(d))+l:Vd()+t+l;try{n[p?"replaceState":"pushState"](u,"",h),a.value=u}catch(c){console.error(c),s[p?"replace":"assign"](h)}}function o(l,u){const p=gn({},n.state,Ko(a.value.back,l,a.value.forward,!0),u,{position:a.value.position});e(l,p,!0),r.value=l}function i(l,u){const p=gn({},a.value,n.state,{forward:l,scroll:ba()});e(p.current,p,!0);const d=gn({},Ko(r.value,l,null),{position:p.position+1},u);e(l,d,!1),r.value=l}return{location:r,state:a,push:i,replace:o}}function qd(t){t=zd(t);const n=Yd(t),s=$d(t,n.state,n.location,n.replace);function r(e,o=!0){o||s.pauseListeners(),history.go(e)}const a=gn({location:"",base:t,go:r,createHref:Ud.bind(null,t)},n,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function Kd(t){return typeof t=="string"||t&&typeof t=="object"}function Vl(t){return typeof t=="string"||typeof t=="symbol"}const $l=Symbol("");var Xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xo||(Xo={}));function Ws(t,n){return gn(new Error,{type:t,[$l]:!0},n)}function Ft(t,n){return t instanceof Error&&$l in t&&(n==null||!!(t.type&n))}const Zo="[^/]+?",Xd={sensitive:!1,strict:!1,start:!0,end:!0},Zd=/[.+*?^${}()[\]/\\]/g;function Qd(t,n){const s=gn({},Xd,n),r=[];let a=s.start?"^":"";const e=[];for(const u of t){const p=u.length?[]:[90];s.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const h=u[d];let c=40+(s.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Zd,"\\$&"),c+=40;else if(h.type===1){const{value:g,repeatable:f,optional:m,regexp:v}=h;e.push({name:g,repeatable:f,optional:m});const x=v||Zo;if(x!==Zo){c+=10;try{new RegExp(`(${x})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+S.message)}}let _=f?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(_=m&&u.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),a+=_,c+=20,m&&(c+=-8),f&&(c+=-20),x===".*"&&(c+=-50)}p.push(c)}r.push(p)}if(s.strict&&s.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const o=new RegExp(a,s.sensitive?"":"i");function i(u){const p=u.match(o),d={};if(!p)return null;for(let h=1;h<p.length;h++){const c=p[h]||"",g=e[h-1];d[g.name]=c&&g.repeatable?c.split("/"):c}return d}function l(u){let p="",d=!1;for(const h of t){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const c of h)if(c.type===0)p+=c.value;else if(c.type===1){const{value:g,repeatable:f,optional:m}=c,v=g in u?u[g]:"";if(wt(v)&&!f)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=wt(v)?v.join("/"):v;if(!x)if(m)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);p+=x}}return p||"/"}return{re:o,score:r,keys:e,parse:i,stringify:l}}function Jd(t,n){let s=0;for(;s<t.length&&s<n.length;){const r=n[s]-t[s];if(r)return r;s++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function Yl(t,n){let s=0;const r=t.score,a=n.score;for(;s<r.length&&s<a.length;){const e=Jd(r[s],a[s]);if(e)return e;s++}if(Math.abs(a.length-r.length)===1){if(Qo(r))return 1;if(Qo(a))return-1}return a.length-r.length}function Qo(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const nf={type:0,value:""},tf=/[a-zA-Z0-9_]/;function sf(t){if(!t)return[[]];if(t==="/")return[[nf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(c){throw new Error(`ERR (${s})/"${u}": ${c}`)}let s=0,r=s;const a=[];let e;function o(){e&&a.push(e),e=[]}let i=0,l,u="",p="";function d(){u&&(s===0?e.push({type:0,value:u}):s===1||s===2||s===3?(e.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),e.push({type:1,value:u,regexp:p,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;i<t.length;){if(l=t[i++],l==="\\"&&s!==2){r=s,s=4;continue}switch(s){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),s=1):h();break;case 4:h(),s=r;break;case 1:l==="("?s=2:tf.test(l)?h():(d(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+l:s=3:p+=l;break;case 3:d(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,p="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),d(),o(),a}function ef(t,n,s){const r=Qd(sf(t.path),s),a=gn(r,{record:t,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function af(t,n){const s=[],r=new Map;n=si({strict:!1,end:!0,sensitive:!1},n);function a(d){return r.get(d)}function e(d,h,c){const g=!c,f=ni(d);f.aliasOf=c&&c.record;const m=si(n,d),v=[f];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of S)v.push(ni(gn({},f,{components:c?c.record.components:f.components,path:k,aliasOf:c?c.record:f})))}let x,_;for(const S of v){const{path:k}=S;if(h&&k[0]!=="/"){const b=h.record.path,w=b[b.length-1]==="/"?"":"/";S.path=h.record.path+(k&&w+k)}if(x=ef(S,h,m),c?c.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),g&&d.name&&!ti(x)&&o(d.name)),ql(x)&&l(x),f.children){const b=f.children;for(let w=0;w<b.length;w++)e(b[w],x,c&&c.children[w])}c=c||x}return _?()=>{o(_)}:ue}function o(d){if(Vl(d)){const h=r.get(d);h&&(r.delete(d),s.splice(s.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=s.indexOf(d);h>-1&&(s.splice(h,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function i(){return s}function l(d){const h=lf(d,s);s.splice(h,0,d),d.record.name&&!ti(d)&&r.set(d.record.name,d)}function u(d,h){let c,g={},f,m;if("name"in d&&d.name){if(c=r.get(d.name),!c)throw Ws(1,{location:d});m=c.record.name,g=gn(Jo(h.params,c.keys.filter(_=>!_.optional).concat(c.parent?c.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&Jo(d.params,c.keys.map(_=>_.name))),f=c.stringify(g)}else if(d.path!=null)f=d.path,c=s.find(_=>_.re.test(f)),c&&(g=c.parse(f),m=c.record.name);else{if(c=h.name?r.get(h.name):s.find(_=>_.re.test(h.path)),!c)throw Ws(1,{location:d,currentLocation:h});m=c.record.name,g=gn({},h.params,d.params),f=c.stringify(g)}const v=[];let x=c;for(;x;)v.unshift(x.record),x=x.parent;return{name:m,path:f,params:g,matched:v,meta:of(v)}}t.forEach(d=>e(d));function p(){s.length=0,r.clear()}return{addRoute:e,resolve:u,removeRoute:o,clearRoutes:p,getRoutes:i,getRecordMatcher:a}}function Jo(t,n){const s={};for(const r of n)r in t&&(s[r]=t[r]);return s}function ni(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function rf(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const r in t.components)n[r]=typeof s=="object"?s[r]:s;return n}function ti(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function of(t){return t.reduce((n,s)=>gn(n,s.meta),{})}function si(t,n){const s={};for(const r in t)s[r]=r in n?n[r]:t[r];return s}function lf(t,n){let s=0,r=n.length;for(;s!==r;){const e=s+r>>1;Yl(t,n[e])<0?r=e:s=e+1}const a=cf(t);return a&&(r=n.lastIndexOf(a,r-1)),r}function cf(t){let n=t;for(;n=n.parent;)if(ql(n)&&Yl(t,n)===0)return n}function ql({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pf(t){const n={};if(t===""||t==="?")return n;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let a=0;a<r.length;++a){const e=r[a].replace(Bl," "),o=e.indexOf("="),i=be(o<0?e:e.slice(0,o)),l=o<0?null:be(e.slice(o+1));if(i in n){let u=n[i];wt(u)||(u=n[i]=[u]),u.push(l)}else n[i]=l}return n}function ei(t){let n="";for(let s in t){const r=t[s];if(s=Ed(s),r==null){r!==void 0&&(n+=(n.length?"&":"")+s);continue}(wt(r)?r.map(e=>e&&or(e)):[r&&or(r)]).forEach(e=>{e!==void 0&&(n+=(n.length?"&":"")+s,e!=null&&(n+="="+e))})}return n}function uf(t){const n={};for(const s in t){const r=t[s];r!==void 0&&(n[s]=wt(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return n}const df=Symbol(""),ai=Symbol(""),wa=Symbol(""),Yr=Symbol(""),lr=Symbol("");function ne(){let t=[];function n(r){return t.push(r),()=>{const a=t.indexOf(r);a>-1&&t.splice(a,1)}}function s(){t=[]}return{add:n,list:()=>t.slice(),reset:s}}function Qt(t,n,s,r,a,e=o=>o()){const o=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((i,l)=>{const u=h=>{h===!1?l(Ws(4,{from:s,to:n})):h instanceof Error?l(h):Kd(h)?l(Ws(2,{from:n,to:h})):(o&&r.enterCallbacks[a]===o&&typeof h=="function"&&o.push(h),i())},p=e(()=>t.call(r&&r.instances[a],n,s,u));let d=Promise.resolve(p);t.length<3&&(d=d.then(u)),d.catch(h=>l(h))})}function Ba(t,n,s,r,a=e=>e()){const e=[];for(const o of t)for(const i in o.components){let l=o.components[i];if(!(n!=="beforeRouteEnter"&&!o.instances[i]))if(Fl(l)){const p=(l.__vccOpts||l)[n];p&&e.push(Qt(p,s,r,o,i,a))}else{let u=l();e.push(()=>u.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const d=vd(p)?p.default:p;o.mods[i]=p,o.components[i]=d;const c=(d.__vccOpts||d)[n];return c&&Qt(c,s,r,o,i,a)()}))}}return e}function ri(t){const n=bt(wa),s=bt(Yr),r=Kn(()=>{const l=xt(t.to);return n.resolve(l)}),a=Kn(()=>{const{matched:l}=r.value,{length:u}=l,p=l[u-1],d=s.matched;if(!p||!d.length)return-1;const h=d.findIndex(Hs.bind(null,p));if(h>-1)return h;const c=oi(l[u-2]);return u>1&&oi(p)===c&&d[d.length-1].path!==c?d.findIndex(Hs.bind(null,l[u-2])):h}),e=Kn(()=>a.value>-1&&mf(s.params,r.value.params)),o=Kn(()=>a.value>-1&&a.value===s.matched.length-1&&Hl(s.params,r.value.params));function i(l={}){if(gf(l)){const u=n[xt(t.replace)?"replace":"push"](xt(t.to)).catch(ue);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Kn(()=>r.value.href),isActive:e,isExactActive:o,navigate:i}}function ff(t){return t.length===1?t[0]:t}const hf=ll({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ri,setup(t,{slots:n}){const s=ma(ri(t)),{options:r}=bt(wa),a=Kn(()=>({[ii(t.activeClass,r.linkActiveClass,"router-link-active")]:s.isActive,[ii(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const e=n.default&&ff(n.default(s));return t.custom?e:Ll("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},e)}}}),qr=hf;function gf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function mf(t,n){for(const s in n){const r=n[s],a=t[s];if(typeof r=="string"){if(r!==a)return!1}else if(!wt(a)||a.length!==r.length||r.some((e,o)=>e!==a[o]))return!1}return!0}function oi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ii=(t,n,s)=>t??n??s,kf=ll({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){const r=bt(lr),a=Kn(()=>t.route||r.value),e=bt(ai,0),o=Kn(()=>{let u=xt(e);const{matched:p}=a.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),i=Kn(()=>a.value.matched[o.value]);ze(ai,Kn(()=>o.value+1)),ze(df,i),ze(lr,a);const l=Ht();return Be(()=>[l.value,i.value,t.name],([u,p,d],[h,c,g])=>{p&&(p.instances[d]=u,c&&c!==p&&u&&u===h&&(p.leaveGuards.size||(p.leaveGuards=c.leaveGuards),p.updateGuards.size||(p.updateGuards=c.updateGuards))),u&&p&&(!c||!Hs(p,c)||!h)&&(p.enterCallbacks[d]||[]).forEach(f=>f(u))},{flush:"post"}),()=>{const u=a.value,p=t.name,d=i.value,h=d&&d.components[p];if(!h)return li(s.default,{Component:h,route:u});const c=d.props[p],g=c?c===!0?u.params:typeof c=="function"?c(u):c:null,m=Ll(h,gn({},g,n,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[p]=null)},ref:l}));return li(s.default,{Component:m,route:u})||m}}});function li(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const Kl=kf;function vf(t){const n=af(t.routes,t),s=t.parseQuery||pf,r=t.stringifyQuery||ei,a=t.history,e=ne(),o=ne(),i=ne(),l=Ip(Kt);let u=Kt;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Fa.bind(null,j=>""+j),d=Fa.bind(null,Ad),h=Fa.bind(null,be);function c(j,G){let H,Y;return Vl(j)?(H=n.getRecordMatcher(j),Y=G):Y=j,n.addRoute(Y,H)}function g(j){const G=n.getRecordMatcher(j);G&&n.removeRoute(G)}function f(){return n.getRoutes().map(j=>j.record)}function m(j){return!!n.getRecordMatcher(j)}function v(j,G){if(G=gn({},G||l.value),typeof j=="string"){const A=za(s,j,G.path),L=n.resolve({path:A.path},G),z=a.createHref(A.fullPath);return gn(A,L,{params:h(L.params),hash:be(A.hash),redirectedFrom:void 0,href:z})}let H;if(j.path!=null)H=gn({},j,{path:za(s,j.path,G.path).path});else{const A=gn({},j.params);for(const L in A)A[L]==null&&delete A[L];H=gn({},j,{params:d(A)}),G.params=d(G.params)}const Y=n.resolve(H,G),sn=j.hash||"";Y.params=p(h(Y.params));const E=jd(r,gn({},j,{hash:Md(sn),path:Y.path})),R=a.createHref(E);return gn({fullPath:E,hash:sn,query:r===ei?uf(j.query):j.query||{}},Y,{redirectedFrom:void 0,href:R})}function x(j){return typeof j=="string"?za(s,j,l.value.path):gn({},j)}function _(j,G){if(u!==j)return Ws(8,{from:G,to:j})}function S(j){return w(j)}function k(j){return S(gn(x(j),{replace:!0}))}function b(j){const G=j.matched[j.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let Y=typeof H=="function"?H(j):H;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=x(Y):{path:Y},Y.params={}),gn({query:j.query,hash:j.hash,params:Y.path!=null?{}:j.params},Y)}}function w(j,G){const H=u=v(j),Y=l.value,sn=j.state,E=j.force,R=j.replace===!0,A=b(H);if(A)return w(gn(x(A),{state:typeof A=="object"?gn({},sn,A.state):sn,force:E,replace:R}),G||H);const L=H;L.redirectedFrom=G;let z;return!E&&Ld(r,Y,H)&&(z=Ws(16,{to:L,from:Y}),cn(Y,Y,!0,!1)),(z?Promise.resolve(z):P(L,Y)).catch(B=>Ft(B)?Ft(B,2)?B:on(B):W(B,L,Y)).then(B=>{if(B){if(Ft(B,2))return w(gn({replace:R},x(B.to),{state:typeof B.to=="object"?gn({},sn,B.to.state):sn,force:E}),G||L)}else B=T(L,Y,!0,R,sn);return M(L,Y,B),B})}function y(j,G){const H=_(j,G);return H?Promise.reject(H):Promise.resolve()}function C(j){const G=pn.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(j):j()}function P(j,G){let H;const[Y,sn,E]=yf(j,G);H=Ba(Y.reverse(),"beforeRouteLeave",j,G);for(const A of Y)A.leaveGuards.forEach(L=>{H.push(Qt(L,j,G))});const R=y.bind(null,j,G);return H.push(R),Q(H).then(()=>{H=[];for(const A of e.list())H.push(Qt(A,j,G));return H.push(R),Q(H)}).then(()=>{H=Ba(sn,"beforeRouteUpdate",j,G);for(const A of sn)A.updateGuards.forEach(L=>{H.push(Qt(L,j,G))});return H.push(R),Q(H)}).then(()=>{H=[];for(const A of E)if(A.beforeEnter)if(wt(A.beforeEnter))for(const L of A.beforeEnter)H.push(Qt(L,j,G));else H.push(Qt(A.beforeEnter,j,G));return H.push(R),Q(H)}).then(()=>(j.matched.forEach(A=>A.enterCallbacks={}),H=Ba(E,"beforeRouteEnter",j,G,C),H.push(R),Q(H))).then(()=>{H=[];for(const A of o.list())H.push(Qt(A,j,G));return H.push(R),Q(H)}).catch(A=>Ft(A,8)?A:Promise.reject(A))}function M(j,G,H){i.list().forEach(Y=>C(()=>Y(j,G,H)))}function T(j,G,H,Y,sn){const E=_(j,G);if(E)return E;const R=G===Kt,A=Rs?history.state:{};H&&(Y||R?a.replace(j.fullPath,gn({scroll:R&&A&&A.scroll},sn)):a.push(j.fullPath,sn)),l.value=j,cn(j,G,H,R),on()}let I;function O(){I||(I=a.listen((j,G,H)=>{if(!dn.listening)return;const Y=v(j),sn=b(Y);if(sn){w(gn(sn,{replace:!0,force:!0}),Y).catch(ue);return}u=Y;const E=l.value;Rs&&Hd(qo(E.fullPath,H.delta),ba()),P(Y,E).catch(R=>Ft(R,12)?R:Ft(R,2)?(w(gn(x(R.to),{force:!0}),Y).then(A=>{Ft(A,20)&&!H.delta&&H.type===we.pop&&a.go(-1,!1)}).catch(ue),Promise.reject()):(H.delta&&a.go(-H.delta,!1),W(R,Y,E))).then(R=>{R=R||T(Y,E,!1),R&&(H.delta&&!Ft(R,8)?a.go(-H.delta,!1):H.type===we.pop&&Ft(R,20)&&a.go(-1,!1)),M(Y,E,R)}).catch(ue)}))}let D=ne(),U=ne(),F;function W(j,G,H){on(j);const Y=U.list();return Y.length?Y.forEach(sn=>sn(j,G,H)):console.error(j),Promise.reject(j)}function nn(){return F&&l.value!==Kt?Promise.resolve():new Promise((j,G)=>{D.add([j,G])})}function on(j){return F||(F=!j,O(),D.list().forEach(([G,H])=>j?H(j):G()),D.reset()),j}function cn(j,G,H,Y){const{scrollBehavior:sn}=t;if(!Rs||!sn)return Promise.resolve();const E=!H&&Wd(qo(j.fullPath,0))||(Y||!H)&&history.state&&history.state.scroll||null;return el().then(()=>sn(j,G,E)).then(R=>R&&Nd(R)).catch(R=>W(R,j,G))}const en=j=>a.go(j);let un;const pn=new Set,dn={currentRoute:l,listening:!0,addRoute:c,removeRoute:g,clearRoutes:n.clearRoutes,hasRoute:m,getRoutes:f,resolve:v,options:t,push:S,replace:k,go:en,back:()=>en(-1),forward:()=>en(1),beforeEach:e.add,beforeResolve:o.add,afterEach:i.add,onError:U.add,isReady:nn,install(j){const G=this;j.component("RouterLink",qr),j.component("RouterView",Kl),j.config.globalProperties.$router=G,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>xt(l)}),Rs&&!un&&l.value===Kt&&(un=!0,S(a.location).catch(sn=>{}));const H={};for(const sn in Kt)Object.defineProperty(H,sn,{get:()=>l.value[sn],enumerable:!0});j.provide(wa,G),j.provide(Yr,Qi(H)),j.provide(lr,l);const Y=j.unmount;pn.add(j),j.unmount=function(){pn.delete(j),pn.size<1&&(u=Kt,I&&I(),I=null,l.value=Kt,un=!1,F=!1),Y()}}};function Q(j){return j.reduce((G,H)=>G.then(()=>C(H)),Promise.resolve())}return dn}function yf(t,n){const s=[],r=[],a=[],e=Math.max(n.matched.length,t.matched.length);for(let o=0;o<e;o++){const i=n.matched[o];i&&(t.matched.find(u=>Hs(u,i))?r.push(i):s.push(i));const l=t.matched[o];l&&(n.matched.find(u=>Hs(u,l))||a.push(l))}return[s,r,a]}function xf(){return bt(wa)}function bf(t){return bt(Yr)}const wf={__name:"App",setup(t){return(n,s)=>(jn(),Rl(xt(Kl)))}};var ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var He={exports:{}},_f=He.exports,pi;function Sf(){return pi||(pi=1,function(t,n){(function(s,r){t.exports=r()})(_f,function(){return function(s){function r(e){if(a[e])return a[e].exports;var o=a[e]={exports:{},id:e,loaded:!1};return s[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var a={};return r.m=s,r.c=a,r.p="dist/",r(0)}([function(s,r,a){function e(O){return O&&O.__esModule?O:{default:O}}var o=Object.assign||function(O){for(var D=1;D<arguments.length;D++){var U=arguments[D];for(var F in U)Object.prototype.hasOwnProperty.call(U,F)&&(O[F]=U[F])}return O},i=a(1),l=(e(i),a(6)),u=e(l),p=a(7),d=e(p),h=a(8),c=e(h),g=a(9),f=e(g),m=a(10),v=e(m),x=a(11),_=e(x),S=a(14),k=e(S),b=[],w=!1,y={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},C=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(O&&(w=!0),w)return b=(0,_.default)(b,y),(0,v.default)(b,y.once),b},P=function(){b=(0,k.default)(),C()},M=function(){b.forEach(function(O,D){O.node.removeAttribute("data-aos"),O.node.removeAttribute("data-aos-easing"),O.node.removeAttribute("data-aos-duration"),O.node.removeAttribute("data-aos-delay")})},T=function(O){return O===!0||O==="mobile"&&f.default.mobile()||O==="phone"&&f.default.phone()||O==="tablet"&&f.default.tablet()||typeof O=="function"&&O()===!0},I=function(O){y=o(y,O),b=(0,k.default)();var D=document.all&&!window.atob;return T(y.disable)||D?M():(y.disableMutationObserver||c.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),y.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",y.easing),document.querySelector("body").setAttribute("data-aos-duration",y.duration),document.querySelector("body").setAttribute("data-aos-delay",y.delay),y.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?C(!0):y.startEvent==="load"?window.addEventListener(y.startEvent,function(){C(!0)}):document.addEventListener(y.startEvent,function(){C(!0)}),window.addEventListener("resize",(0,d.default)(C,y.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(C,y.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,v.default)(b,y.once)},y.throttleDelay)),y.disableMutationObserver||c.default.ready("[data-aos]",P),b)};s.exports={init:I,refresh:C,refreshHard:P}},function(s,r){},,,,,function(s,r){(function(a){function e(T,I,O){function D(A){var L=pn,z=dn;return pn=dn=void 0,Y=A,j=T.apply(z,L)}function U(A){return Y=A,G=setTimeout(nn,I),sn?D(A):j}function F(A){var L=A-H,z=A-Y,B=I-L;return E?P(B,Q-z):B}function W(A){var L=A-H,z=A-Y;return H===void 0||L>=I||L<0||E&&z>=Q}function nn(){var A=M();return W(A)?on(A):void(G=setTimeout(nn,F(A)))}function on(A){return G=void 0,R&&pn?D(A):(pn=dn=void 0,j)}function cn(){G!==void 0&&clearTimeout(G),Y=0,pn=H=dn=G=void 0}function en(){return G===void 0?j:on(M())}function un(){var A=M(),L=W(A);if(pn=arguments,dn=this,H=A,L){if(G===void 0)return U(H);if(E)return G=setTimeout(nn,I),D(H)}return G===void 0&&(G=setTimeout(nn,I)),j}var pn,dn,Q,j,G,H,Y=0,sn=!1,E=!1,R=!0;if(typeof T!="function")throw new TypeError(h);return I=p(I)||0,i(O)&&(sn=!!O.leading,E="maxWait"in O,Q=E?C(p(O.maxWait)||0,I):Q,R="trailing"in O?!!O.trailing:R),un.cancel=cn,un.flush=en,un}function o(T,I,O){var D=!0,U=!0;if(typeof T!="function")throw new TypeError(h);return i(O)&&(D="leading"in O?!!O.leading:D,U="trailing"in O?!!O.trailing:U),e(T,I,{leading:D,maxWait:I,trailing:U})}function i(T){var I=typeof T>"u"?"undefined":d(T);return!!T&&(I=="object"||I=="function")}function l(T){return!!T&&(typeof T>"u"?"undefined":d(T))=="object"}function u(T){return(typeof T>"u"?"undefined":d(T))=="symbol"||l(T)&&y.call(T)==g}function p(T){if(typeof T=="number")return T;if(u(T))return c;if(i(T)){var I=typeof T.valueOf=="function"?T.valueOf():T;T=i(I)?I+"":I}if(typeof T!="string")return T===0?T:+T;T=T.replace(f,"");var O=v.test(T);return O||x.test(T)?_(T.slice(2),O?2:8):m.test(T)?c:+T}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},h="Expected a function",c=NaN,g="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,x=/^0o[0-7]+$/i,_=parseInt,S=(typeof a>"u"?"undefined":d(a))=="object"&&a&&a.Object===Object&&a,k=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,b=S||k||Function("return this")(),w=Object.prototype,y=w.toString,C=Math.max,P=Math.min,M=function(){return b.Date.now()};s.exports=o}).call(r,function(){return this}())},function(s,r){(function(a){function e(M,T,I){function O(R){var A=un,L=pn;return un=pn=void 0,H=R,Q=M.apply(L,A)}function D(R){return H=R,j=setTimeout(W,T),Y?O(R):Q}function U(R){var A=R-G,L=R-H,z=T-A;return sn?C(z,dn-L):z}function F(R){var A=R-G,L=R-H;return G===void 0||A>=T||A<0||sn&&L>=dn}function W(){var R=P();return F(R)?nn(R):void(j=setTimeout(W,U(R)))}function nn(R){return j=void 0,E&&un?O(R):(un=pn=void 0,Q)}function on(){j!==void 0&&clearTimeout(j),H=0,un=G=pn=j=void 0}function cn(){return j===void 0?Q:nn(P())}function en(){var R=P(),A=F(R);if(un=arguments,pn=this,G=R,A){if(j===void 0)return D(G);if(sn)return j=setTimeout(W,T),O(G)}return j===void 0&&(j=setTimeout(W,T)),Q}var un,pn,dn,Q,j,G,H=0,Y=!1,sn=!1,E=!0;if(typeof M!="function")throw new TypeError(d);return T=u(T)||0,o(I)&&(Y=!!I.leading,sn="maxWait"in I,dn=sn?y(u(I.maxWait)||0,T):dn,E="trailing"in I?!!I.trailing:E),en.cancel=on,en.flush=cn,en}function o(M){var T=typeof M>"u"?"undefined":p(M);return!!M&&(T=="object"||T=="function")}function i(M){return!!M&&(typeof M>"u"?"undefined":p(M))=="object"}function l(M){return(typeof M>"u"?"undefined":p(M))=="symbol"||i(M)&&w.call(M)==c}function u(M){if(typeof M=="number")return M;if(l(M))return h;if(o(M)){var T=typeof M.valueOf=="function"?M.valueOf():M;M=o(T)?T+"":T}if(typeof M!="string")return M===0?M:+M;M=M.replace(g,"");var I=m.test(M);return I||v.test(M)?x(M.slice(2),I?2:8):f.test(M)?h:+M}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},d="Expected a function",h=NaN,c="[object Symbol]",g=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,x=parseInt,_=(typeof a>"u"?"undefined":p(a))=="object"&&a&&a.Object===Object&&a,S=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,k=_||S||Function("return this")(),b=Object.prototype,w=b.toString,y=Math.max,C=Math.min,P=function(){return k.Date.now()};s.exports=e}).call(r,function(){return this}())},function(s,r){function a(p){var d=void 0,h=void 0;for(d=0;d<p.length;d+=1)if(h=p[d],h.dataset&&h.dataset.aos||h.children&&a(h.children))return!0;return!1}function e(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!e()}function i(p,d){var h=window.document,c=e(),g=new c(l);u=d,g.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(p){p&&p.forEach(function(d){var h=Array.prototype.slice.call(d.addedNodes),c=Array.prototype.slice.call(d.removedNodes),g=h.concat(c);if(a(g))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:o,ready:i}},function(s,r){function a(h,c){if(!(h instanceof c))throw new TypeError("Cannot call a class as a function")}function e(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function h(c,g){for(var f=0;f<g.length;f++){var m=g[f];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(c,m.key,m)}}return function(c,g,f){return g&&h(c.prototype,g),f&&h(c,f),c}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function h(){a(this,h)}return o(h,[{key:"phone",value:function(){var c=e();return!(!i.test(c)&&!l.test(c.substr(0,4)))}},{key:"mobile",value:function(){var c=e();return!(!u.test(c)&&!p.test(c.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();r.default=new d},function(s,r){Object.defineProperty(r,"__esModule",{value:!0});var a=function(o,i,l){var u=o.node.getAttribute("data-aos-once");i>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&o.node.classList.remove("aos-animate")},e=function(o,i){var l=window.pageYOffset,u=window.innerHeight;o.forEach(function(p,d){a(p,u+l,i)})};r.default=e},function(s,r,a){function e(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=a(12),i=e(o),l=function(u,p){return u.forEach(function(d,h){d.node.classList.add("aos-init"),d.position=(0,i.default)(d.node,p.offset)}),u};r.default=l},function(s,r,a){function e(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=a(13),i=e(o),l=function(u,p){var d=0,h=0,c=window.innerHeight,g={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(h=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(u=document.querySelectorAll(g.anchor)[0]),d=(0,i.default)(u).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=u.offsetHeight/2;break;case"bottom-bottom":d+=u.offsetHeight;break;case"top-center":d+=c/2;break;case"bottom-center":d+=c/2+u.offsetHeight;break;case"center-center":d+=c/2+u.offsetHeight/2;break;case"top-top":d+=c;break;case"bottom-top":d+=u.offsetHeight+c;break;case"center-top":d+=u.offsetHeight/2+c}return g.anchorPlacement||g.offset||isNaN(p)||(h=p),d+h};r.default=l},function(s,r){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){for(var o=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)o+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),i+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:i,left:o}};r.default=a},function(s,r){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(o){return{node:o}})};r.default=a}])})}(He)),He.exports}var Cf=Sf();const Zl=Xl(Cf),Tf={class:"min-h-20"},Pf={__name:"Typewriter",setup(t){const n=[["Build Stunning Visuals","All With The Classic C++"],["Let's Innovate","With Cpp Playgrounds!"],["Less time","More productivity."],["Work Smart","Not Hard"],["Let's Shine","With Cpp Playgrounds!"]],s=Ht(null),r=Ht(null);let a=0,e;const o=()=>{const[i,l]=n[a];s.value.classList.remove("opacity-100"),r.value.classList.remove("opacity-100"),s.value.classList.add("opacity-0"),r.value.classList.add("opacity-0"),setTimeout(()=>{s.value.textContent=i,r.value.textContent="",s.value.classList.remove("opacity-0"),s.value.classList.add("opacity-100"),setTimeout(()=>{r.value.textContent=l,r.value.classList.remove("opacity-0"),r.value.classList.add("opacity-100")},500)},500),a=(a+1)%n.length,setTimeout(()=>{s.value.classList.remove("opacity-100"),s.value.classList.add("opacity-0"),r.value.classList.remove("opacity-100"),r.value.classList.add("opacity-0")},3e3)};return Ae(()=>{o(),e=setInterval(o,4e3)}),Ur(()=>{clearInterval(e)}),(i,l)=>(jn(),zn("div",Tf,[Z("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part1",ref:s},null,512),Z("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part2",ref:r},null,512)]))}};var We={exports:{}};/*!
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
 */var Mf=We.exports,ui;function Ef(){return ui||(ui=1,function(t,n){(function(r,a){t.exports=a()})(Mf,function(){return function(s){var r={};function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return s[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=s,a.c=r,a.d=function(e,o,i){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:i})},a.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(o&1&&(e=a(e)),o&8||o&4&&typeof e=="object"&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),o&2&&typeof e!="string")for(var l in e)a.d(i,l,(function(u){return e[u]}).bind(null,l));return i},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s=20)}([function(s,r){var a={};s.exports=a,function(){a._baseDelta=1e3/60,a._nextId=0,a._seed=0,a._nowStartTime=+new Date,a._warnedOnce={},a._decomp=null,a.extend=function(o,i){var l,u;typeof i=="boolean"?(l=2,u=i):(l=1,u=!0);for(var p=l;p<arguments.length;p++){var d=arguments[p];if(d)for(var h in d)u&&d[h]&&d[h].constructor===Object&&(!o[h]||o[h].constructor===Object)?(o[h]=o[h]||{},a.extend(o[h],u,d[h])):o[h]=d[h]}return o},a.clone=function(o,i){return a.extend({},i,o)},a.keys=function(o){if(Object.keys)return Object.keys(o);var i=[];for(var l in o)i.push(l);return i},a.values=function(o){var i=[];if(Object.keys){for(var l=Object.keys(o),u=0;u<l.length;u++)i.push(o[l[u]]);return i}for(var p in o)i.push(o[p]);return i},a.get=function(o,i,l,u){i=i.split(".").slice(l,u);for(var p=0;p<i.length;p+=1)o=o[i[p]];return o},a.set=function(o,i,l,u,p){var d=i.split(".").slice(u,p);return a.get(o,i,0,-1)[d[d.length-1]]=l,l},a.shuffle=function(o){for(var i=o.length-1;i>0;i--){var l=Math.floor(a.random()*(i+1)),u=o[i];o[i]=o[l],o[l]=u}return o},a.choose=function(o){return o[Math.floor(a.random()*o.length)]},a.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},a.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},a.isFunction=function(o){return typeof o=="function"},a.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},a.isString=function(o){return toString.call(o)==="[object String]"},a.clamp=function(o,i,l){return o<i?i:o>l?l:o},a.sign=function(o){return o<0?-1:1},a.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-a._nowStartTime},a.random=function(o,i){return o=typeof o<"u"?o:0,i=typeof i<"u"?i:1,o+e()*(i-o)};var e=function(){return a._seed=(a._seed*9301+49297)%233280,a._seed/233280};a.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},a.logLevel=1,a.log=function(){console&&a.logLevel>0&&a.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},a.info=function(){console&&a.logLevel>0&&a.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},a.warn=function(){console&&a.logLevel>0&&a.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},a.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");a._warnedOnce[o]||(a.warn(o),a._warnedOnce[o]=!0)},a.deprecated=function(o,i,l){o[i]=a.chain(function(){a.warnOnce("🔅 deprecated 🔅",l)},o[i])},a.nextId=function(){return a._nextId++},a.indexOf=function(o,i){if(o.indexOf)return o.indexOf(i);for(var l=0;l<o.length;l++)if(o[l]===i)return l;return-1},a.map=function(o,i){if(o.map)return o.map(i);for(var l=[],u=0;u<o.length;u+=1)l.push(i(o[u]));return l},a.topologicalSort=function(o){var i=[],l=[],u=[];for(var p in o)!l[p]&&!u[p]&&a._topologicalSort(p,l,u,o,i);return i},a._topologicalSort=function(o,i,l,u,p){var d=u[o]||[];l[o]=!0;for(var h=0;h<d.length;h+=1){var c=d[h];l[c]||i[c]||a._topologicalSort(c,i,l,u,p)}l[o]=!1,i[o]=!0,p.push(o)},a.chain=function(){for(var o=[],i=0;i<arguments.length;i+=1){var l=arguments[i];l._chained?o.push.apply(o,l._chained):o.push(l)}var u=function(){for(var p,d=new Array(arguments.length),h=0,c=arguments.length;h<c;h++)d[h]=arguments[h];for(h=0;h<o.length;h+=1){var g=o[h].apply(p,d);typeof g<"u"&&(p=g)}return p};return u._chained=o,u},a.chainPathBefore=function(o,i,l){return a.set(o,i,a.chain(l,a.get(o,i)))},a.chainPathAfter=function(o,i,l){return a.set(o,i,a.chain(a.get(o,i),l))},a.setDecomp=function(o){a._decomp=o},a.getDecomp=function(){var o=a._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof ci<"u"&&(o=ci.decomp)}catch{o=null}return o}}()},function(s,r){var a={};s.exports=a,function(){a.create=function(e){var o={min:{x:0,y:0},max:{x:0,y:0}};return e&&a.update(o,e),o},a.update=function(e,o,i){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var l=0;l<o.length;l++){var u=o[l];u.x>e.max.x&&(e.max.x=u.x),u.x<e.min.x&&(e.min.x=u.x),u.y>e.max.y&&(e.max.y=u.y),u.y<e.min.y&&(e.min.y=u.y)}i&&(i.x>0?e.max.x+=i.x:e.min.x+=i.x,i.y>0?e.max.y+=i.y:e.min.y+=i.y)},a.contains=function(e,o){return o.x>=e.min.x&&o.x<=e.max.x&&o.y>=e.min.y&&o.y<=e.max.y},a.overlaps=function(e,o){return e.min.x<=o.max.x&&e.max.x>=o.min.x&&e.max.y>=o.min.y&&e.min.y<=o.max.y},a.translate=function(e,o){e.min.x+=o.x,e.max.x+=o.x,e.min.y+=o.y,e.max.y+=o.y},a.shift=function(e,o){var i=e.max.x-e.min.x,l=e.max.y-e.min.y;e.min.x=o.x,e.max.x=o.x+i,e.min.y=o.y,e.max.y=o.y+l}}()},function(s,r){var a={};s.exports=a,function(){a.create=function(e,o){return{x:e||0,y:o||0}},a.clone=function(e){return{x:e.x,y:e.y}},a.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},a.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},a.rotate=function(e,o,i){var l=Math.cos(o),u=Math.sin(o);i||(i={});var p=e.x*l-e.y*u;return i.y=e.x*u+e.y*l,i.x=p,i},a.rotateAbout=function(e,o,i,l){var u=Math.cos(o),p=Math.sin(o);l||(l={});var d=i.x+((e.x-i.x)*u-(e.y-i.y)*p);return l.y=i.y+((e.x-i.x)*p+(e.y-i.y)*u),l.x=d,l},a.normalise=function(e){var o=a.magnitude(e);return o===0?{x:0,y:0}:{x:e.x/o,y:e.y/o}},a.dot=function(e,o){return e.x*o.x+e.y*o.y},a.cross=function(e,o){return e.x*o.y-e.y*o.x},a.cross3=function(e,o,i){return(o.x-e.x)*(i.y-e.y)-(o.y-e.y)*(i.x-e.x)},a.add=function(e,o,i){return i||(i={}),i.x=e.x+o.x,i.y=e.y+o.y,i},a.sub=function(e,o,i){return i||(i={}),i.x=e.x-o.x,i.y=e.y-o.y,i},a.mult=function(e,o){return{x:e.x*o,y:e.y*o}},a.div=function(e,o){return{x:e.x/o,y:e.y/o}},a.perp=function(e,o){return o=o===!0?-1:1,{x:o*-e.y,y:o*e.x}},a.neg=function(e){return{x:-e.x,y:-e.y}},a.angle=function(e,o){return Math.atan2(o.y-e.y,o.x-e.x)},a._temp=[a.create(),a.create(),a.create(),a.create(),a.create(),a.create()]}()},function(s,r,a){var e={};s.exports=e;var o=a(2),i=a(0);(function(){e.create=function(l,u){for(var p=[],d=0;d<l.length;d++){var h=l[d],c={x:h.x,y:h.y,index:d,body:u,isInternal:!1};p.push(c)}return p},e.fromPath=function(l,u){var p=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,d=[];return l.replace(p,function(h,c,g){d.push({x:parseFloat(c),y:parseFloat(g)})}),e.create(d,u)},e.centre=function(l){for(var u=e.area(l,!0),p={x:0,y:0},d,h,c,g=0;g<l.length;g++)c=(g+1)%l.length,d=o.cross(l[g],l[c]),h=o.mult(o.add(l[g],l[c]),d),p=o.add(p,h);return o.div(p,6*u)},e.mean=function(l){for(var u={x:0,y:0},p=0;p<l.length;p++)u.x+=l[p].x,u.y+=l[p].y;return o.div(u,l.length)},e.area=function(l,u){for(var p=0,d=l.length-1,h=0;h<l.length;h++)p+=(l[d].x-l[h].x)*(l[d].y+l[h].y),d=h;return u?p/2:Math.abs(p)/2},e.inertia=function(l,u){for(var p=0,d=0,h=l,c,g,f=0;f<h.length;f++)g=(f+1)%h.length,c=Math.abs(o.cross(h[g],h[f])),p+=c*(o.dot(h[g],h[g])+o.dot(h[g],h[f])+o.dot(h[f],h[f])),d+=c;return u/6*(p/d)},e.translate=function(l,u,p){p=typeof p<"u"?p:1;var d=l.length,h=u.x*p,c=u.y*p,g;for(g=0;g<d;g++)l[g].x+=h,l[g].y+=c;return l},e.rotate=function(l,u,p){if(u!==0){var d=Math.cos(u),h=Math.sin(u),c=p.x,g=p.y,f=l.length,m,v,x,_;for(_=0;_<f;_++)m=l[_],v=m.x-c,x=m.y-g,m.x=c+(v*d-x*h),m.y=g+(v*h+x*d);return l}},e.contains=function(l,u){for(var p=u.x,d=u.y,h=l.length,c=l[h-1],g,f=0;f<h;f++){if(g=l[f],(p-c.x)*(g.y-c.y)+(d-c.y)*(c.x-g.x)>0)return!1;c=g}return!0},e.scale=function(l,u,p,d){if(u===1&&p===1)return l;d=d||e.centre(l);for(var h,c,g=0;g<l.length;g++)h=l[g],c=o.sub(h,d),l[g].x=d.x+c.x*u,l[g].y=d.y+c.y*p;return l},e.chamfer=function(l,u,p,d,h){typeof u=="number"?u=[u]:u=u||[8],p=typeof p<"u"?p:-1,d=d||2,h=h||14;for(var c=[],g=0;g<l.length;g++){var f=l[g-1>=0?g-1:l.length-1],m=l[g],v=l[(g+1)%l.length],x=u[g<u.length?g:u.length-1];if(x===0){c.push(m);continue}var _=o.normalise({x:m.y-f.y,y:f.x-m.x}),S=o.normalise({x:v.y-m.y,y:m.x-v.x}),k=Math.sqrt(2*Math.pow(x,2)),b=o.mult(i.clone(_),x),w=o.normalise(o.mult(o.add(_,S),.5)),y=o.sub(m,o.mult(w,k)),C=p;p===-1&&(C=Math.pow(x,.32)*1.75),C=i.clamp(C,d,h),C%2===1&&(C+=1);for(var P=Math.acos(o.dot(_,S)),M=P/C,T=0;T<C;T++)c.push(o.add(o.rotate(b,M*T),y))}return c},e.clockwiseSort=function(l){var u=e.mean(l);return l.sort(function(p,d){return o.angle(u,p)-o.angle(u,d)}),l},e.isConvex=function(l){var u=0,p=l.length,d,h,c,g;if(p<3)return null;for(d=0;d<p;d++)if(h=(d+1)%p,c=(d+2)%p,g=(l[h].x-l[d].x)*(l[c].y-l[h].y),g-=(l[h].y-l[d].y)*(l[c].x-l[h].x),g<0?u|=1:g>0&&(u|=2),u===3)return!1;return u!==0?!0:null},e.hull=function(l){var u=[],p=[],d,h;for(l=l.slice(0),l.sort(function(c,g){var f=c.x-g.x;return f!==0?f:c.y-g.y}),h=0;h<l.length;h+=1){for(d=l[h];p.length>=2&&o.cross3(p[p.length-2],p[p.length-1],d)<=0;)p.pop();p.push(d)}for(h=l.length-1;h>=0;h-=1){for(d=l[h];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],d)<=0;)u.pop();u.push(d)}return u.pop(),p.pop(),u.concat(p)}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(2),l=a(7),u=a(0),p=a(1),d=a(11);(function(){e._timeCorrection=!0,e._inertiaScale=4,e._nextCollidingGroupId=1,e._nextNonCollidingGroupId=-1,e._nextCategory=1,e._baseDelta=1e3/60,e.create=function(c){var g={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},f=u.extend(g,c);return h(f,c),f},e.nextGroup=function(c){return c?e._nextNonCollidingGroupId--:e._nextCollidingGroupId++},e.nextCategory=function(){return e._nextCategory=e._nextCategory<<1,e._nextCategory};var h=function(c,g){g=g||{},e.set(c,{bounds:c.bounds||p.create(c.vertices),positionPrev:c.positionPrev||i.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),o.rotate(c.vertices,c.angle,c.position),d.rotate(c.axes,c.angle),p.update(c.bounds,c.vertices,c.velocity),e.set(c,{axes:g.axes||c.axes,area:g.area||c.area,mass:g.mass||c.mass,inertia:g.inertia||c.inertia});var f=c.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=c.isStatic?"#555":"#ccc",v=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||f,c.render.strokeStyle=c.render.strokeStyle||m,c.render.lineWidth=c.render.lineWidth||v,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};e.set=function(c,g,f){var m;typeof g=="string"&&(m=g,g={},g[m]=f);for(m in g)if(Object.prototype.hasOwnProperty.call(g,m))switch(f=g[m],m){case"isStatic":e.setStatic(c,f);break;case"isSleeping":l.set(c,f);break;case"mass":e.setMass(c,f);break;case"density":e.setDensity(c,f);break;case"inertia":e.setInertia(c,f);break;case"vertices":e.setVertices(c,f);break;case"position":e.setPosition(c,f);break;case"angle":e.setAngle(c,f);break;case"velocity":e.setVelocity(c,f);break;case"angularVelocity":e.setAngularVelocity(c,f);break;case"speed":e.setSpeed(c,f);break;case"angularSpeed":e.setAngularSpeed(c,f);break;case"parts":e.setParts(c,f);break;case"centre":e.setCentre(c,f);break;default:c[m]=f}},e.setStatic=function(c,g){for(var f=0;f<c.parts.length;f++){var m=c.parts[f];g?(m.isStatic||(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia}),m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null),m.isStatic=g}},e.setMass=function(c,g){var f=c.inertia/(c.mass/6);c.inertia=f*(g/6),c.inverseInertia=1/c.inertia,c.mass=g,c.inverseMass=1/c.mass,c.density=c.mass/c.area},e.setDensity=function(c,g){e.setMass(c,g*c.area),c.density=g},e.setInertia=function(c,g){c.inertia=g,c.inverseInertia=1/c.inertia},e.setVertices=function(c,g){g[0].body===c?c.vertices=g:c.vertices=o.create(g,c),c.axes=d.fromVertices(c.vertices),c.area=o.area(c.vertices),e.setMass(c,c.density*c.area);var f=o.centre(c.vertices);o.translate(c.vertices,f,-1),e.setInertia(c,e._inertiaScale*o.inertia(c.vertices,c.mass)),o.translate(c.vertices,c.position),p.update(c.bounds,c.vertices,c.velocity)},e.setParts=function(c,g,f){var m;for(g=g.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,m=0;m<g.length;m++){var v=g[m];v!==c&&(v.parent=c,c.parts.push(v))}if(c.parts.length!==1){if(f=typeof f<"u"?f:!0,f){var x=[];for(m=0;m<g.length;m++)x=x.concat(g[m].vertices);o.clockwiseSort(x);var _=o.hull(x),S=o.centre(_);e.setVertices(c,_),o.translate(c.vertices,S)}var k=e._totalProperties(c);c.area=k.area,c.parent=c,c.position.x=k.centre.x,c.position.y=k.centre.y,c.positionPrev.x=k.centre.x,c.positionPrev.y=k.centre.y,e.setMass(c,k.mass),e.setInertia(c,k.inertia),e.setPosition(c,k.centre)}},e.setCentre=function(c,g,f){f?(c.positionPrev.x+=g.x,c.positionPrev.y+=g.y,c.position.x+=g.x,c.position.y+=g.y):(c.positionPrev.x=g.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=g.y-(c.position.y-c.positionPrev.y),c.position.x=g.x,c.position.y=g.y)},e.setPosition=function(c,g,f){var m=i.sub(g,c.position);f?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=m.x,c.velocity.y=m.y,c.speed=i.magnitude(m)):(c.positionPrev.x+=m.x,c.positionPrev.y+=m.y);for(var v=0;v<c.parts.length;v++){var x=c.parts[v];x.position.x+=m.x,x.position.y+=m.y,o.translate(x.vertices,m),p.update(x.bounds,x.vertices,c.velocity)}},e.setAngle=function(c,g,f){var m=g-c.angle;f?(c.anglePrev=c.angle,c.angularVelocity=m,c.angularSpeed=Math.abs(m)):c.anglePrev+=m;for(var v=0;v<c.parts.length;v++){var x=c.parts[v];x.angle+=m,o.rotate(x.vertices,m,c.position),d.rotate(x.axes,m),p.update(x.bounds,x.vertices,c.velocity),v>0&&i.rotateAbout(x.position,m,c.position,x.position)}},e.setVelocity=function(c,g){var f=c.deltaTime/e._baseDelta;c.positionPrev.x=c.position.x-g.x*f,c.positionPrev.y=c.position.y-g.y*f,c.velocity.x=(c.position.x-c.positionPrev.x)/f,c.velocity.y=(c.position.y-c.positionPrev.y)/f,c.speed=i.magnitude(c.velocity)},e.getVelocity=function(c){var g=e._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*g,y:(c.position.y-c.positionPrev.y)*g}},e.getSpeed=function(c){return i.magnitude(e.getVelocity(c))},e.setSpeed=function(c,g){e.setVelocity(c,i.mult(i.normalise(e.getVelocity(c)),g))},e.setAngularVelocity=function(c,g){var f=c.deltaTime/e._baseDelta;c.anglePrev=c.angle-g*f,c.angularVelocity=(c.angle-c.anglePrev)/f,c.angularSpeed=Math.abs(c.angularVelocity)},e.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*e._baseDelta/c.deltaTime},e.getAngularSpeed=function(c){return Math.abs(e.getAngularVelocity(c))},e.setAngularSpeed=function(c,g){e.setAngularVelocity(c,u.sign(e.getAngularVelocity(c))*g)},e.translate=function(c,g,f){e.setPosition(c,i.add(c.position,g),f)},e.rotate=function(c,g,f,m){if(!f)e.setAngle(c,c.angle+g,m);else{var v=Math.cos(g),x=Math.sin(g),_=c.position.x-f.x,S=c.position.y-f.y;e.setPosition(c,{x:f.x+(_*v-S*x),y:f.y+(_*x+S*v)},m),e.setAngle(c,c.angle+g,m)}},e.scale=function(c,g,f,m){var v=0,x=0;m=m||c.position;for(var _=0;_<c.parts.length;_++){var S=c.parts[_];o.scale(S.vertices,g,f,m),S.axes=d.fromVertices(S.vertices),S.area=o.area(S.vertices),e.setMass(S,c.density*S.area),o.translate(S.vertices,{x:-S.position.x,y:-S.position.y}),e.setInertia(S,e._inertiaScale*o.inertia(S.vertices,S.mass)),o.translate(S.vertices,{x:S.position.x,y:S.position.y}),_>0&&(v+=S.area,x+=S.inertia),S.position.x=m.x+(S.position.x-m.x)*g,S.position.y=m.y+(S.position.y-m.y)*f,p.update(S.bounds,S.vertices,c.velocity)}c.parts.length>1&&(c.area=v,c.isStatic||(e.setMass(c,c.density*v),e.setInertia(c,x))),c.circleRadius&&(g===f?c.circleRadius*=g:c.circleRadius=null)},e.update=function(c,g){g=(typeof g<"u"?g:1e3/60)*c.timeScale;var f=g*g,m=e._timeCorrection?g/(c.deltaTime||g):1,v=1-c.frictionAir*(g/u._baseDelta),x=(c.position.x-c.positionPrev.x)*m,_=(c.position.y-c.positionPrev.y)*m;c.velocity.x=x*v+c.force.x/c.mass*f,c.velocity.y=_*v+c.force.y/c.mass*f,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=g,c.angularVelocity=(c.angle-c.anglePrev)*v*m+c.torque/c.inertia*f,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var S=0;S<c.parts.length;S++){var k=c.parts[S];o.translate(k.vertices,c.velocity),S>0&&(k.position.x+=c.velocity.x,k.position.y+=c.velocity.y),c.angularVelocity!==0&&(o.rotate(k.vertices,c.angularVelocity,c.position),d.rotate(k.axes,c.angularVelocity),S>0&&i.rotateAbout(k.position,c.angularVelocity,c.position,k.position)),p.update(k.bounds,k.vertices,c.velocity)}},e.updateVelocities=function(c){var g=e._baseDelta/c.deltaTime,f=c.velocity;f.x=(c.position.x-c.positionPrev.x)*g,f.y=(c.position.y-c.positionPrev.y)*g,c.speed=Math.sqrt(f.x*f.x+f.y*f.y),c.angularVelocity=(c.angle-c.anglePrev)*g,c.angularSpeed=Math.abs(c.angularVelocity)},e.applyForce=function(c,g,f){var m={x:g.x-c.position.x,y:g.y-c.position.y};c.force.x+=f.x,c.force.y+=f.y,c.torque+=m.x*f.y-m.y*f.x},e._totalProperties=function(c){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},f=c.parts.length===1?0:1;f<c.parts.length;f++){var m=c.parts[f],v=m.mass!==1/0?m.mass:1;g.mass+=v,g.area+=m.area,g.inertia+=m.inertia,g.centre=i.add(g.centre,i.mult(m.position,v))}return g.centre=i.div(g.centre,g.mass),g}})()},function(s,r,a){var e={};s.exports=e;var o=a(0);(function(){e.on=function(i,l,u){for(var p=l.split(" "),d,h=0;h<p.length;h++)d=p[h],i.events=i.events||{},i.events[d]=i.events[d]||[],i.events[d].push(u);return u},e.off=function(i,l,u){if(!l){i.events={};return}typeof l=="function"&&(u=l,l=o.keys(i.events).join(" "));for(var p=l.split(" "),d=0;d<p.length;d++){var h=i.events[p[d]],c=[];if(u&&h)for(var g=0;g<h.length;g++)h[g]!==u&&c.push(h[g]);i.events[p[d]]=c}},e.trigger=function(i,l,u){var p,d,h,c,g=i.events;if(g&&o.keys(g).length>0){u||(u={}),p=l.split(" ");for(var f=0;f<p.length;f++)if(d=p[f],h=g[d],h){c=o.clone(u,!1),c.name=d,c.source=i;for(var m=0;m<h.length;m++)h[m].apply(i,[c])}}}})()},function(s,r,a){var e={};s.exports=e;var o=a(5),i=a(0),l=a(1),u=a(4);(function(){e.create=function(p){return i.extend({id:i.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},p)},e.setModified=function(p,d,h,c){if(p.isModified=d,d&&p.cache&&(p.cache.allBodies=null,p.cache.allConstraints=null,p.cache.allComposites=null),h&&p.parent&&e.setModified(p.parent,d,h,c),c)for(var g=0;g<p.composites.length;g++){var f=p.composites[g];e.setModified(f,d,h,c)}},e.add=function(p,d){var h=[].concat(d);o.trigger(p,"beforeAdd",{object:d});for(var c=0;c<h.length;c++){var g=h[c];switch(g.type){case"body":if(g.parent!==g){i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}e.addBody(p,g);break;case"constraint":e.addConstraint(p,g);break;case"composite":e.addComposite(p,g);break;case"mouseConstraint":e.addConstraint(p,g.constraint);break}}return o.trigger(p,"afterAdd",{object:d}),p},e.remove=function(p,d,h){var c=[].concat(d);o.trigger(p,"beforeRemove",{object:d});for(var g=0;g<c.length;g++){var f=c[g];switch(f.type){case"body":e.removeBody(p,f,h);break;case"constraint":e.removeConstraint(p,f,h);break;case"composite":e.removeComposite(p,f,h);break;case"mouseConstraint":e.removeConstraint(p,f.constraint);break}}return o.trigger(p,"afterRemove",{object:d}),p},e.addComposite=function(p,d){return p.composites.push(d),d.parent=p,e.setModified(p,!0,!0,!1),p},e.removeComposite=function(p,d,h){var c=i.indexOf(p.composites,d);if(c!==-1){var g=e.allBodies(d);e.removeCompositeAt(p,c);for(var f=0;f<g.length;f++)g[f].sleepCounter=0}if(h)for(var f=0;f<p.composites.length;f++)e.removeComposite(p.composites[f],d,!0);return p},e.removeCompositeAt=function(p,d){return p.composites.splice(d,1),e.setModified(p,!0,!0,!1),p},e.addBody=function(p,d){return p.bodies.push(d),e.setModified(p,!0,!0,!1),p},e.removeBody=function(p,d,h){var c=i.indexOf(p.bodies,d);if(c!==-1&&(e.removeBodyAt(p,c),d.sleepCounter=0),h)for(var g=0;g<p.composites.length;g++)e.removeBody(p.composites[g],d,!0);return p},e.removeBodyAt=function(p,d){return p.bodies.splice(d,1),e.setModified(p,!0,!0,!1),p},e.addConstraint=function(p,d){return p.constraints.push(d),e.setModified(p,!0,!0,!1),p},e.removeConstraint=function(p,d,h){var c=i.indexOf(p.constraints,d);if(c!==-1&&e.removeConstraintAt(p,c),h)for(var g=0;g<p.composites.length;g++)e.removeConstraint(p.composites[g],d,!0);return p},e.removeConstraintAt=function(p,d){return p.constraints.splice(d,1),e.setModified(p,!0,!0,!1),p},e.clear=function(p,d,h){if(h)for(var c=0;c<p.composites.length;c++)e.clear(p.composites[c],d,!0);return d?p.bodies=p.bodies.filter(function(g){return g.isStatic}):p.bodies.length=0,p.constraints.length=0,p.composites.length=0,e.setModified(p,!0,!0,!1),p},e.allBodies=function(p){if(p.cache&&p.cache.allBodies)return p.cache.allBodies;for(var d=[].concat(p.bodies),h=0;h<p.composites.length;h++)d=d.concat(e.allBodies(p.composites[h]));return p.cache&&(p.cache.allBodies=d),d},e.allConstraints=function(p){if(p.cache&&p.cache.allConstraints)return p.cache.allConstraints;for(var d=[].concat(p.constraints),h=0;h<p.composites.length;h++)d=d.concat(e.allConstraints(p.composites[h]));return p.cache&&(p.cache.allConstraints=d),d},e.allComposites=function(p){if(p.cache&&p.cache.allComposites)return p.cache.allComposites;for(var d=[].concat(p.composites),h=0;h<p.composites.length;h++)d=d.concat(e.allComposites(p.composites[h]));return p.cache&&(p.cache.allComposites=d),d},e.get=function(p,d,h){var c,g;switch(h){case"body":c=e.allBodies(p);break;case"constraint":c=e.allConstraints(p);break;case"composite":c=e.allComposites(p).concat(p);break}return c?(g=c.filter(function(f){return f.id.toString()===d.toString()}),g.length===0?null:g[0]):null},e.move=function(p,d,h){return e.remove(p,d),e.add(h,d),p},e.rebase=function(p){for(var d=e.allBodies(p).concat(e.allConstraints(p)).concat(e.allComposites(p)),h=0;h<d.length;h++)d[h].id=i.nextId();return p},e.translate=function(p,d,h){for(var c=h?e.allBodies(p):p.bodies,g=0;g<c.length;g++)u.translate(c[g],d);return p},e.rotate=function(p,d,h,c){for(var g=Math.cos(d),f=Math.sin(d),m=c?e.allBodies(p):p.bodies,v=0;v<m.length;v++){var x=m[v],_=x.position.x-h.x,S=x.position.y-h.y;u.setPosition(x,{x:h.x+(_*g-S*f),y:h.y+(_*f+S*g)}),u.rotate(x,d)}return p},e.scale=function(p,d,h,c,g){for(var f=g?e.allBodies(p):p.bodies,m=0;m<f.length;m++){var v=f[m],x=v.position.x-c.x,_=v.position.y-c.y;u.setPosition(v,{x:c.x+x*d,y:c.y+_*h}),u.scale(v,d,h)}return p},e.bounds=function(p){for(var d=e.allBodies(p),h=[],c=0;c<d.length;c+=1){var g=d[c];h.push(g.bounds.min,g.bounds.max)}return l.create(h)}})()},function(s,r,a){var e={};s.exports=e;var o=a(4),i=a(5),l=a(0);(function(){e._motionWakeThreshold=.18,e._motionSleepThreshold=.08,e._minBias=.9,e.update=function(u,p){for(var d=p/l._baseDelta,h=e._motionSleepThreshold,c=0;c<u.length;c++){var g=u[c],f=o.getSpeed(g),m=o.getAngularSpeed(g),v=f*f+m*m;if(g.force.x!==0||g.force.y!==0){e.set(g,!1);continue}var x=Math.min(g.motion,v),_=Math.max(g.motion,v);g.motion=e._minBias*x+(1-e._minBias)*_,g.sleepThreshold>0&&g.motion<h?(g.sleepCounter+=1,g.sleepCounter>=g.sleepThreshold/d&&e.set(g,!0)):g.sleepCounter>0&&(g.sleepCounter-=1)}},e.afterCollisions=function(u){for(var p=e._motionSleepThreshold,d=0;d<u.length;d++){var h=u[d];if(h.isActive){var c=h.collision,g=c.bodyA.parent,f=c.bodyB.parent;if(!(g.isSleeping&&f.isSleeping||g.isStatic||f.isStatic)&&(g.isSleeping||f.isSleeping)){var m=g.isSleeping&&!g.isStatic?g:f,v=m===g?f:g;!m.isStatic&&v.motion>p&&e.set(m,!1)}}}},e.set=function(u,p){var d=u.isSleeping;p?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,d||i.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,d&&i.trigger(u,"sleepEnd"))}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(9);(function(){var l=[],u={overlap:0,axis:null},p={overlap:0,axis:null};e.create=function(d,h){return{pair:null,collided:!1,bodyA:d,bodyB:h,parentA:d.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},e.collides=function(d,h,c){if(e._overlapAxes(u,d.vertices,h.vertices,d.axes),u.overlap<=0||(e._overlapAxes(p,h.vertices,d.vertices,h.axes),p.overlap<=0))return null;var g=c&&c.table[i.id(d,h)],f;g?f=g.collision:(f=e.create(d,h),f.collided=!0,f.bodyA=d.id<h.id?d:h,f.bodyB=d.id<h.id?h:d,f.parentA=f.bodyA.parent,f.parentB=f.bodyB.parent),d=f.bodyA,h=f.bodyB;var m;u.overlap<p.overlap?m=u:m=p;var v=f.normal,x=f.tangent,_=f.penetration,S=f.supports,k=m.overlap,b=m.axis,w=b.x,y=b.y,C=h.position.x-d.position.x,P=h.position.y-d.position.y;w*C+y*P>=0&&(w=-w,y=-y),v.x=w,v.y=y,x.x=-y,x.y=w,_.x=w*k,_.y=y*k,f.depth=k;var M=e._findSupports(d,h,v,1),T=0;if(o.contains(d.vertices,M[0])&&(S[T++]=M[0]),o.contains(d.vertices,M[1])&&(S[T++]=M[1]),T<2){var I=e._findSupports(h,d,v,-1);o.contains(h.vertices,I[0])&&(S[T++]=I[0]),T<2&&o.contains(h.vertices,I[1])&&(S[T++]=I[1])}return T===0&&(S[T++]=M[0]),f.supportCount=T,f},e._overlapAxes=function(d,h,c,g){var f=h.length,m=c.length,v=h[0].x,x=h[0].y,_=c[0].x,S=c[0].y,k=g.length,b=Number.MAX_VALUE,w=0,y,C,P,M,T,I;for(T=0;T<k;T++){var O=g[T],D=O.x,U=O.y,F=v*D+x*U,W=_*D+S*U,nn=F,on=W;for(I=1;I<f;I+=1)M=h[I].x*D+h[I].y*U,M>nn?nn=M:M<F&&(F=M);for(I=1;I<m;I+=1)M=c[I].x*D+c[I].y*U,M>on?on=M:M<W&&(W=M);if(C=nn-W,P=on-F,y=C<P?C:P,y<b&&(b=y,w=T,y<=0))break}d.axis=g[w],d.overlap=b},e._findSupports=function(d,h,c,g){var f=h.vertices,m=f.length,v=d.position.x,x=d.position.y,_=c.x*g,S=c.y*g,k=f[0],b=k,w=_*(v-b.x)+S*(x-b.y),y,C,P;for(P=1;P<m;P+=1)b=f[P],C=_*(v-b.x)+S*(x-b.y),C<w&&(w=C,k=b);return y=f[(m+k.index-1)%m],w=_*(v-y.x)+S*(x-y.y),b=f[(k.index+1)%m],_*(v-b.x)+S*(x-b.y)<w?(l[0]=k,l[1]=b,l):(l[0]=k,l[1]=y,l)}})()},function(s,r,a){var e={};s.exports=e;var o=a(16);(function(){e.create=function(i,l){var u=i.bodyA,p=i.bodyB,d={id:e.id(u,p),bodyA:u,bodyB:p,collision:i,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||p.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return e.update(d,i,l),d},e.update=function(i,l,u){var p=l.supports,d=l.supportCount,h=i.contacts,c=l.parentA,g=l.parentB;i.isActive=!0,i.timeUpdated=u,i.collision=l,i.separation=l.depth,i.inverseMass=c.inverseMass+g.inverseMass,i.friction=c.friction<g.friction?c.friction:g.friction,i.frictionStatic=c.frictionStatic>g.frictionStatic?c.frictionStatic:g.frictionStatic,i.restitution=c.restitution>g.restitution?c.restitution:g.restitution,i.slop=c.slop>g.slop?c.slop:g.slop,i.contactCount=d,l.pair=i;var f=p[0],m=h[0],v=p[1],x=h[1];(x.vertex===f||m.vertex===v)&&(h[1]=m,h[0]=m=x,x=h[1]),m.vertex=f,x.vertex=v},e.setActive=function(i,l,u){l?(i.isActive=!0,i.timeUpdated=u):(i.isActive=!1,i.contactCount=0)},e.id=function(i,l){return i.id<l.id?i.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+i.id.toString(36)}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(2),l=a(7),u=a(1),p=a(11),d=a(0);(function(){e._warming=.4,e._torqueDampen=1,e._minLength=1e-6,e.create=function(h){var c=h;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var g=c.bodyA?i.add(c.bodyA.position,c.pointA):c.pointA,f=c.bodyB?i.add(c.bodyB.position,c.pointB):c.pointB,m=i.magnitude(i.sub(g,f));c.length=typeof c.length<"u"?c.length:m,c.id=c.id||d.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var v={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(v.type="pin",v.anchors=!1):c.stiffness<.9&&(v.type="spring"),c.render=d.extend(v,c.render),c},e.preSolveAll=function(h){for(var c=0;c<h.length;c+=1){var g=h[c],f=g.constraintImpulse;g.isStatic||f.x===0&&f.y===0&&f.angle===0||(g.position.x+=f.x,g.position.y+=f.y,g.angle+=f.angle)}},e.solveAll=function(h,c){for(var g=d.clamp(c/d._baseDelta,0,1),f=0;f<h.length;f+=1){var m=h[f],v=!m.bodyA||m.bodyA&&m.bodyA.isStatic,x=!m.bodyB||m.bodyB&&m.bodyB.isStatic;(v||x)&&e.solve(h[f],g)}for(f=0;f<h.length;f+=1)m=h[f],v=!m.bodyA||m.bodyA&&m.bodyA.isStatic,x=!m.bodyB||m.bodyB&&m.bodyB.isStatic,!v&&!x&&e.solve(h[f],g)},e.solve=function(h,c){var g=h.bodyA,f=h.bodyB,m=h.pointA,v=h.pointB;if(!(!g&&!f)){g&&!g.isStatic&&(i.rotate(m,g.angle-h.angleA,m),h.angleA=g.angle),f&&!f.isStatic&&(i.rotate(v,f.angle-h.angleB,v),h.angleB=f.angle);var x=m,_=v;if(g&&(x=i.add(g.position,m)),f&&(_=i.add(f.position,v)),!(!x||!_)){var S=i.sub(x,_),k=i.magnitude(S);k<e._minLength&&(k=e._minLength);var b=(k-h.length)/k,w=h.stiffness>=1||h.length===0,y=w?h.stiffness*c:h.stiffness*c*c,C=h.damping*c,P=i.mult(S,b*y),M=(g?g.inverseMass:0)+(f?f.inverseMass:0),T=(g?g.inverseInertia:0)+(f?f.inverseInertia:0),I=M+T,O,D,U,F,W;if(C>0){var nn=i.create();U=i.div(S,k),W=i.sub(f&&i.sub(f.position,f.positionPrev)||nn,g&&i.sub(g.position,g.positionPrev)||nn),F=i.dot(U,W)}g&&!g.isStatic&&(D=g.inverseMass/M,g.constraintImpulse.x-=P.x*D,g.constraintImpulse.y-=P.y*D,g.position.x-=P.x*D,g.position.y-=P.y*D,C>0&&(g.positionPrev.x-=C*U.x*F*D,g.positionPrev.y-=C*U.y*F*D),O=i.cross(m,P)/I*e._torqueDampen*g.inverseInertia*(1-h.angularStiffness),g.constraintImpulse.angle-=O,g.angle-=O),f&&!f.isStatic&&(D=f.inverseMass/M,f.constraintImpulse.x+=P.x*D,f.constraintImpulse.y+=P.y*D,f.position.x+=P.x*D,f.position.y+=P.y*D,C>0&&(f.positionPrev.x+=C*U.x*F*D,f.positionPrev.y+=C*U.y*F*D),O=i.cross(v,P)/I*e._torqueDampen*f.inverseInertia*(1-h.angularStiffness),f.constraintImpulse.angle+=O,f.angle+=O)}}},e.postSolveAll=function(h){for(var c=0;c<h.length;c++){var g=h[c],f=g.constraintImpulse;if(!(g.isStatic||f.x===0&&f.y===0&&f.angle===0)){l.set(g,!1);for(var m=0;m<g.parts.length;m++){var v=g.parts[m];o.translate(v.vertices,f),m>0&&(v.position.x+=f.x,v.position.y+=f.y),f.angle!==0&&(o.rotate(v.vertices,f.angle,g.position),p.rotate(v.axes,f.angle),m>0&&i.rotateAbout(v.position,f.angle,g.position,v.position)),u.update(v.bounds,v.vertices,g.velocity)}f.angle*=e._warming,f.x*=e._warming,f.y*=e._warming}}},e.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},e.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},e.currentLength=function(h){var c=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),g=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),f=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),m=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),v=c-f,x=g-m;return Math.sqrt(v*v+x*x)}})()},function(s,r,a){var e={};s.exports=e;var o=a(2),i=a(0);(function(){e.fromVertices=function(l){for(var u={},p=0;p<l.length;p++){var d=(p+1)%l.length,h=o.normalise({x:l[d].y-l[p].y,y:l[p].x-l[d].x}),c=h.y===0?1/0:h.x/h.y;c=c.toFixed(3).toString(),u[c]=h}return i.values(u)},e.rotate=function(l,u){if(u!==0)for(var p=Math.cos(u),d=Math.sin(u),h=0;h<l.length;h++){var c=l[h],g;g=c.x*p-c.y*d,c.y=c.x*d+c.y*p,c.x=g}}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(0),l=a(4),u=a(1),p=a(2);(function(){e.rectangle=function(d,h,c,g,f){f=f||{};var m={label:"Rectangle Body",position:{x:d,y:h},vertices:o.fromPath("L 0 0 L "+c+" 0 L "+c+" "+g+" L 0 "+g)};if(f.chamfer){var v=f.chamfer;m.vertices=o.chamfer(m.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete f.chamfer}return l.create(i.extend({},m,f))},e.trapezoid=function(d,h,c,g,f,m){m=m||{},f>=1&&i.warn("Bodies.trapezoid: slope parameter must be < 1."),f*=.5;var v=(1-f*2)*c,x=c*f,_=x+v,S=_+x,k;f<.5?k="L 0 0 L "+x+" "+-g+" L "+_+" "+-g+" L "+S+" 0":k="L 0 0 L "+_+" "+-g+" L "+S+" 0";var b={label:"Trapezoid Body",position:{x:d,y:h},vertices:o.fromPath(k)};if(m.chamfer){var w=m.chamfer;b.vertices=o.chamfer(b.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete m.chamfer}return l.create(i.extend({},b,m))},e.circle=function(d,h,c,g,f){g=g||{};var m={label:"Circle Body",circleRadius:c};f=f||25;var v=Math.ceil(Math.max(10,Math.min(f,c)));return v%2===1&&(v+=1),e.polygon(d,h,v,c,i.extend({},m,g))},e.polygon=function(d,h,c,g,f){if(f=f||{},c<3)return e.circle(d,h,g,f);for(var m=2*Math.PI/c,v="",x=m*.5,_=0;_<c;_+=1){var S=x+_*m,k=Math.cos(S)*g,b=Math.sin(S)*g;v+="L "+k.toFixed(3)+" "+b.toFixed(3)+" "}var w={label:"Polygon Body",position:{x:d,y:h},vertices:o.fromPath(v)};if(f.chamfer){var y=f.chamfer;w.vertices=o.chamfer(w.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete f.chamfer}return l.create(i.extend({},w,f))},e.fromVertices=function(d,h,c,g,f,m,v,x){var _=i.getDecomp(),S,k,b,w,y,C,P,M,T,I,O;for(S=!!(_&&_.quickDecomp),g=g||{},b=[],f=typeof f<"u"?f:!1,m=typeof m<"u"?m:.01,v=typeof v<"u"?v:10,x=typeof x<"u"?x:.01,i.isArray(c[0])||(c=[c]),I=0;I<c.length;I+=1)if(C=c[I],w=o.isConvex(C),y=!w,y&&!S&&i.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),w||!S)w?C=o.clockwiseSort(C):C=o.hull(C),b.push({position:{x:d,y:h},vertices:C});else{var D=C.map(function(Q){return[Q.x,Q.y]});_.makeCCW(D),m!==!1&&_.removeCollinearPoints(D,m),x!==!1&&_.removeDuplicatePoints&&_.removeDuplicatePoints(D,x);var U=_.quickDecomp(D);for(P=0;P<U.length;P++){var F=U[P],W=F.map(function(Q){return{x:Q[0],y:Q[1]}});v>0&&o.area(W)<v||b.push({position:o.centre(W),vertices:W})}}for(P=0;P<b.length;P++)b[P]=l.create(i.extend(b[P],g));if(f){var nn=5;for(P=0;P<b.length;P++){var on=b[P];for(M=P+1;M<b.length;M++){var cn=b[M];if(u.overlaps(on.bounds,cn.bounds)){var en=on.vertices,un=cn.vertices;for(T=0;T<on.vertices.length;T++)for(O=0;O<cn.vertices.length;O++){var pn=p.magnitudeSquared(p.sub(en[(T+1)%en.length],un[O])),dn=p.magnitudeSquared(p.sub(en[T],un[(O+1)%un.length]));pn<nn&&dn<nn&&(en[T].isInternal=!0,un[O].isInternal=!0)}}}}}return b.length>1?(k=l.create(i.extend({parts:b.slice(0)},g)),l.setPosition(k,{x:d,y:h}),k):b[0]}})()},function(s,r,a){var e={};s.exports=e;var o=a(0),i=a(8);(function(){e.create=function(l){var u={bodies:[],collisions:[],pairs:null};return o.extend(u,l)},e.setBodies=function(l,u){l.bodies=u.slice(0)},e.clear=function(l){l.bodies=[],l.collisions=[]},e.collisions=function(l){var u=l.pairs,p=l.bodies,d=p.length,h=e.canCollide,c=i.collides,g=l.collisions,f=0,m,v;for(p.sort(e._compareBoundsX),m=0;m<d;m++){var x=p[m],_=x.bounds,S=x.bounds.max.x,k=x.bounds.max.y,b=x.bounds.min.y,w=x.isStatic||x.isSleeping,y=x.parts.length,C=y===1;for(v=m+1;v<d;v++){var P=p[v],M=P.bounds;if(M.min.x>S)break;if(!(k<M.min.y||b>M.max.y)&&!(w&&(P.isStatic||P.isSleeping))&&h(x.collisionFilter,P.collisionFilter)){var T=P.parts.length;if(C&&T===1){var I=c(x,P,u);I&&(g[f++]=I)}else for(var O=y>1?1:0,D=T>1?1:0,U=O;U<y;U++)for(var F=x.parts[U],_=F.bounds,W=D;W<T;W++){var nn=P.parts[W],M=nn.bounds;if(!(_.min.x>M.max.x||_.max.x<M.min.x||_.max.y<M.min.y||_.min.y>M.max.y)){var I=c(F,nn,u);I&&(g[f++]=I)}}}}}return g.length!==f&&(g.length=f),g},e.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},e._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()},function(s,r,a){var e={};s.exports=e;var o=a(0);(function(){e.create=function(i){var l={};return i||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=i||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var p=e._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d&&(l.button=0,u.preventDefault()),l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var p=e._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var p=e._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d&&u.preventDefault(),l.button=-1,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),l.sourceEvents.mousewheel=u},e.setElement(l,l.element),l},e.setElement=function(i,l){i.element=l,l.addEventListener("mousemove",i.mousemove,{passive:!0}),l.addEventListener("mousedown",i.mousedown,{passive:!0}),l.addEventListener("mouseup",i.mouseup,{passive:!0}),l.addEventListener("wheel",i.mousewheel,{passive:!1}),l.addEventListener("touchmove",i.mousemove,{passive:!1}),l.addEventListener("touchstart",i.mousedown,{passive:!1}),l.addEventListener("touchend",i.mouseup,{passive:!1})},e.clearSourceEvents=function(i){i.sourceEvents.mousemove=null,i.sourceEvents.mousedown=null,i.sourceEvents.mouseup=null,i.sourceEvents.mousewheel=null,i.wheelDelta=0},e.setOffset=function(i,l){i.offset.x=l.x,i.offset.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},e.setScale=function(i,l){i.scale.x=l.x,i.scale.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},e._getRelativeMousePosition=function(i,l,u){var p=l.getBoundingClientRect(),d=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:d.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:d.scrollTop,g=i.changedTouches,f,m;return g?(f=g[0].pageX-p.left-h,m=g[0].pageY-p.top-c):(f=i.pageX-p.left-h,m=i.pageY-p.top-c),{x:f/(l.clientWidth/(l.width||l.clientWidth)*u),y:m/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()},function(s,r,a){var e={};s.exports=e;var o=a(0);(function(){e._registry={},e.register=function(i){if(e.isPlugin(i)||o.warn("Plugin.register:",e.toString(i),"does not implement all required fields."),i.name in e._registry){var l=e._registry[i.name],u=e.versionParse(i.version).number,p=e.versionParse(l.version).number;u>p?(o.warn("Plugin.register:",e.toString(l),"was upgraded to",e.toString(i)),e._registry[i.name]=i):u<p?o.warn("Plugin.register:",e.toString(l),"can not be downgraded to",e.toString(i)):i!==l&&o.warn("Plugin.register:",e.toString(i),"is already registered to different plugin object")}else e._registry[i.name]=i;return i},e.resolve=function(i){return e._registry[e.dependencyParse(i).name]},e.toString=function(i){return typeof i=="string"?i:(i.name||"anonymous")+"@"+(i.version||i.range||"0.0.0")},e.isPlugin=function(i){return i&&i.name&&i.version&&i.install},e.isUsed=function(i,l){return i.used.indexOf(l)>-1},e.isFor=function(i,l){var u=i.for&&e.dependencyParse(i.for);return!i.for||l.name===u.name&&e.versionSatisfies(l.version,u.range)},e.use=function(i,l){if(i.uses=(i.uses||[]).concat(l||[]),i.uses.length===0){o.warn("Plugin.use:",e.toString(i),"does not specify any dependencies to install.");return}for(var u=e.dependencies(i),p=o.topologicalSort(u),d=[],h=0;h<p.length;h+=1)if(p[h]!==i.name){var c=e.resolve(p[h]);if(!c){d.push("❌ "+p[h]);continue}e.isUsed(i,c.name)||(e.isFor(c,i)||(o.warn("Plugin.use:",e.toString(c),"is for",c.for,"but installed on",e.toString(i)+"."),c._warned=!0),c.install?c.install(i):(o.warn("Plugin.use:",e.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(d.push("🔶 "+e.toString(c)),delete c._warned):d.push("✅ "+e.toString(c)),i.used.push(c.name))}d.length>0&&o.info(d.join("  "))},e.dependencies=function(i,l){var u=e.dependencyParse(i),p=u.name;if(l=l||{},!(p in l)){i=e.resolve(i)||i,l[p]=o.map(i.uses||[],function(h){e.isPlugin(h)&&e.register(h);var c=e.dependencyParse(h),g=e.resolve(h);return g&&!e.versionSatisfies(g.version,c.range)?(o.warn("Plugin.dependencies:",e.toString(g),"does not satisfy",e.toString(c),"used by",e.toString(u)+"."),g._warned=!0,i._warned=!0):g||(o.warn("Plugin.dependencies:",e.toString(h),"used by",e.toString(u),"could not be resolved."),i._warned=!0),c.name});for(var d=0;d<l[p].length;d+=1)e.dependencies(l[p][d],l);return l}},e.dependencyParse=function(i){if(o.isString(i)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(i)||o.warn("Plugin.dependencyParse:",i,"is not a valid dependency string."),{name:i.split("@")[0],range:i.split("@")[1]||"*"}}return{name:i.name,range:i.range||i.version}},e.versionParse=function(i){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(i)||o.warn("Plugin.versionParse:",i,"is not a valid version or range.");var u=l.exec(i),p=Number(u[4]),d=Number(u[5]),h=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:i,operator:u[1]||u[2]||"",major:p,minor:d,patch:h,parts:[p,d,h],prerelease:u[7],number:p*1e8+d*1e4+h}},e.versionSatisfies=function(i,l){l=l||"*";var u=e.versionParse(l),p=e.versionParse(i);if(u.isRange){if(u.operator==="*"||i==="*")return!0;if(u.operator===">")return p.number>u.number;if(u.operator===">=")return p.number>=u.number;if(u.operator==="~")return p.major===u.major&&p.minor===u.minor&&p.patch>=u.patch;if(u.operator==="^")return u.major>0?p.major===u.major&&p.number>=u.number:u.minor>0?p.minor===u.minor&&p.patch>=u.patch:p.patch===u.patch}return i===l||i==="*"}})()},function(s,r){var a={};s.exports=a,function(){a.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}}}()},function(s,r,a){var e={};s.exports=e;var o=a(7),i=a(18),l=a(13),u=a(19),p=a(5),d=a(6),h=a(10),c=a(0),g=a(4);(function(){e._deltaMax=1e3/60,e.create=function(f){f=f||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},v=c.extend(m,f);return v.world=f.world||d.create({label:"World"}),v.pairs=f.pairs||u.create(),v.detector=f.detector||l.create(),v.detector.pairs=v.pairs,v.grid={buckets:[]},v.world.gravity=v.gravity,v.broadphase=v.grid,v.metrics={},v},e.update=function(f,m){var v=c.now(),x=f.world,_=f.detector,S=f.pairs,k=f.timing,b=k.timestamp,w;m>e._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",e._deltaMax.toFixed(3),"ms."),m=typeof m<"u"?m:c._baseDelta,m*=k.timeScale,k.timestamp+=m,k.lastDelta=m;var y={timestamp:k.timestamp,delta:m};p.trigger(f,"beforeUpdate",y);var C=d.allBodies(x),P=d.allConstraints(x);for(x.isModified&&(l.setBodies(_,C),d.setModified(x,!1,!1,!0)),f.enableSleeping&&o.update(C,m),e._bodiesApplyGravity(C,f.gravity),m>0&&e._bodiesUpdate(C,m),p.trigger(f,"beforeSolve",y),h.preSolveAll(C),w=0;w<f.constraintIterations;w++)h.solveAll(P,m);h.postSolveAll(C);var M=l.collisions(_);u.update(S,M,b),f.enableSleeping&&o.afterCollisions(S.list),S.collisionStart.length>0&&p.trigger(f,"collisionStart",{pairs:S.collisionStart,timestamp:k.timestamp,delta:m});var T=c.clamp(20/f.positionIterations,0,1);for(i.preSolvePosition(S.list),w=0;w<f.positionIterations;w++)i.solvePosition(S.list,m,T);for(i.postSolvePosition(C),h.preSolveAll(C),w=0;w<f.constraintIterations;w++)h.solveAll(P,m);for(h.postSolveAll(C),i.preSolveVelocity(S.list),w=0;w<f.velocityIterations;w++)i.solveVelocity(S.list,m);return e._bodiesUpdateVelocities(C),S.collisionActive.length>0&&p.trigger(f,"collisionActive",{pairs:S.collisionActive,timestamp:k.timestamp,delta:m}),S.collisionEnd.length>0&&p.trigger(f,"collisionEnd",{pairs:S.collisionEnd,timestamp:k.timestamp,delta:m}),e._bodiesClearForces(C),p.trigger(f,"afterUpdate",y),f.timing.lastElapsed=c.now()-v,f},e.merge=function(f,m){if(c.extend(f,m),m.world){f.world=m.world,e.clear(f);for(var v=d.allBodies(f.world),x=0;x<v.length;x++){var _=v[x];o.set(_,!1),_.id=c.nextId()}}},e.clear=function(f){u.clear(f.pairs),l.clear(f.detector)},e._bodiesClearForces=function(f){for(var m=f.length,v=0;v<m;v++){var x=f[v];x.force.x=0,x.force.y=0,x.torque=0}},e._bodiesApplyGravity=function(f,m){var v=typeof m.scale<"u"?m.scale:.001,x=f.length;if(!(m.x===0&&m.y===0||v===0))for(var _=0;_<x;_++){var S=f[_];S.isStatic||S.isSleeping||(S.force.y+=S.mass*m.y*v,S.force.x+=S.mass*m.x*v)}},e._bodiesUpdate=function(f,m){for(var v=f.length,x=0;x<v;x++){var _=f[x];_.isStatic||_.isSleeping||g.update(_,m)}},e._bodiesUpdateVelocities=function(f){for(var m=f.length,v=0;v<m;v++)g.updateVelocities(f[v])}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(0),l=a(1);(function(){e._restingThresh=2,e._restingThreshTangent=Math.sqrt(6),e._positionDampen=.9,e._positionWarming=.8,e._frictionNormalMultiplier=5,e._frictionMaxStatic=Number.MAX_VALUE,e.preSolvePosition=function(u){var p,d,h,c=u.length;for(p=0;p<c;p++)d=u[p],d.isActive&&(h=d.contactCount,d.collision.parentA.totalContacts+=h,d.collision.parentB.totalContacts+=h)},e.solvePosition=function(u,p,d){var h,c,g,f,m,v,x,_,S=e._positionDampen*(d||1),k=i.clamp(p/i._baseDelta,0,1),b=u.length;for(h=0;h<b;h++)c=u[h],!(!c.isActive||c.isSensor)&&(g=c.collision,f=g.parentA,m=g.parentB,v=g.normal,c.separation=g.depth+v.x*(m.positionImpulse.x-f.positionImpulse.x)+v.y*(m.positionImpulse.y-f.positionImpulse.y));for(h=0;h<b;h++)c=u[h],!(!c.isActive||c.isSensor)&&(g=c.collision,f=g.parentA,m=g.parentB,v=g.normal,_=c.separation-c.slop*k,(f.isStatic||m.isStatic)&&(_*=2),f.isStatic||f.isSleeping||(x=S/f.totalContacts,f.positionImpulse.x+=v.x*_*x,f.positionImpulse.y+=v.y*_*x),m.isStatic||m.isSleeping||(x=S/m.totalContacts,m.positionImpulse.x-=v.x*_*x,m.positionImpulse.y-=v.y*_*x))},e.postSolvePosition=function(u){for(var p=e._positionWarming,d=u.length,h=o.translate,c=l.update,g=0;g<d;g++){var f=u[g],m=f.positionImpulse,v=m.x,x=m.y,_=f.velocity;if(f.totalContacts=0,v!==0||x!==0){for(var S=0;S<f.parts.length;S++){var k=f.parts[S];h(k.vertices,m),c(k.bounds,k.vertices,_),k.position.x+=v,k.position.y+=x}f.positionPrev.x+=v,f.positionPrev.y+=x,v*_.x+x*_.y<0?(m.x=0,m.y=0):(m.x*=p,m.y*=p)}}},e.preSolveVelocity=function(u){var p=u.length,d,h;for(d=0;d<p;d++){var c=u[d];if(!(!c.isActive||c.isSensor)){var g=c.contacts,f=c.contactCount,m=c.collision,v=m.parentA,x=m.parentB,_=m.normal,S=m.tangent;for(h=0;h<f;h++){var k=g[h],b=k.vertex,w=k.normalImpulse,y=k.tangentImpulse;if(w!==0||y!==0){var C=_.x*w+S.x*y,P=_.y*w+S.y*y;v.isStatic||v.isSleeping||(v.positionPrev.x+=C*v.inverseMass,v.positionPrev.y+=P*v.inverseMass,v.anglePrev+=v.inverseInertia*((b.x-v.position.x)*P-(b.y-v.position.y)*C)),x.isStatic||x.isSleeping||(x.positionPrev.x-=C*x.inverseMass,x.positionPrev.y-=P*x.inverseMass,x.anglePrev-=x.inverseInertia*((b.x-x.position.x)*P-(b.y-x.position.y)*C))}}}}},e.solveVelocity=function(u,p){var d=p/i._baseDelta,h=d*d,c=h*d,g=-e._restingThresh*d,f=e._restingThreshTangent,m=e._frictionNormalMultiplier*d,v=e._frictionMaxStatic,x=u.length,_,S,k,b;for(k=0;k<x;k++){var w=u[k];if(!(!w.isActive||w.isSensor)){var y=w.collision,C=y.parentA,P=y.parentB,M=y.normal.x,T=y.normal.y,I=y.tangent.x,O=y.tangent.y,D=w.inverseMass,U=w.friction*w.frictionStatic*m,F=w.contacts,W=w.contactCount,nn=1/W,on=C.position.x-C.positionPrev.x,cn=C.position.y-C.positionPrev.y,en=C.angle-C.anglePrev,un=P.position.x-P.positionPrev.x,pn=P.position.y-P.positionPrev.y,dn=P.angle-P.anglePrev;for(b=0;b<W;b++){var Q=F[b],j=Q.vertex,G=j.x-C.position.x,H=j.y-C.position.y,Y=j.x-P.position.x,sn=j.y-P.position.y,E=on-H*en,R=cn+G*en,A=un-sn*dn,L=pn+Y*dn,z=E-A,B=R-L,q=M*z+T*B,V=I*z+O*B,$=w.separation+q,N=Math.min($,1);N=$<0?0:N;var J=N*U;V<-J||V>J?(S=V>0?V:-V,_=w.friction*(V>0?1:-1)*c,_<-S?_=-S:_>S&&(_=S)):(_=V,S=v);var K=G*T-H*M,X=Y*T-sn*M,tn=nn/(D+C.inverseInertia*K*K+P.inverseInertia*X*X),ln=(1+w.restitution)*q*tn;if(_*=tn,q<g)Q.normalImpulse=0;else{var vn=Q.normalImpulse;Q.normalImpulse+=ln,Q.normalImpulse>0&&(Q.normalImpulse=0),ln=Q.normalImpulse-vn}if(V<-f||V>f)Q.tangentImpulse=0;else{var hn=Q.tangentImpulse;Q.tangentImpulse+=_,Q.tangentImpulse<-S&&(Q.tangentImpulse=-S),Q.tangentImpulse>S&&(Q.tangentImpulse=S),_=Q.tangentImpulse-hn}var On=M*ln+I*_,In=T*ln+O*_;C.isStatic||C.isSleeping||(C.positionPrev.x+=On*C.inverseMass,C.positionPrev.y+=In*C.inverseMass,C.anglePrev+=(G*In-H*On)*C.inverseInertia),P.isStatic||P.isSleeping||(P.positionPrev.x-=On*P.inverseMass,P.positionPrev.y-=In*P.inverseMass,P.anglePrev-=(Y*In-sn*On)*P.inverseInertia)}}}}})()},function(s,r,a){var e={};s.exports=e;var o=a(9),i=a(0);(function(){e.create=function(l){return i.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},e.update=function(l,u,p){var d=o.update,h=o.create,c=o.setActive,g=l.table,f=l.list,m=f.length,v=m,x=l.collisionStart,_=l.collisionEnd,S=l.collisionActive,k=u.length,b=0,w=0,y=0,C,P,M;for(M=0;M<k;M++)C=u[M],P=C.pair,P?(P.isActive&&(S[y++]=P),d(P,C,p)):(P=h(C,p),g[P.id]=P,x[b++]=P,f[v++]=P);for(v=0,m=f.length,M=0;M<m;M++)P=f[M],P.timeUpdated>=p?f[v++]=P:(c(P,!1,p),P.collision.bodyA.sleepCounter>0&&P.collision.bodyB.sleepCounter>0?f[v++]=P:(_[w++]=P,delete g[P.id]));f.length!==v&&(f.length=v),x.length!==b&&(x.length=b),_.length!==w&&(_.length=w),S.length!==y&&(S.length=y)},e.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(s,r,a){var e=s.exports=a(21);e.Axes=a(11),e.Bodies=a(12),e.Body=a(4),e.Bounds=a(1),e.Collision=a(8),e.Common=a(0),e.Composite=a(6),e.Composites=a(22),e.Constraint=a(10),e.Contact=a(16),e.Detector=a(13),e.Engine=a(17),e.Events=a(5),e.Grid=a(23),e.Mouse=a(14),e.MouseConstraint=a(24),e.Pair=a(9),e.Pairs=a(19),e.Plugin=a(15),e.Query=a(25),e.Render=a(26),e.Resolver=a(18),e.Runner=a(27),e.SAT=a(28),e.Sleeping=a(7),e.Svg=a(29),e.Vector=a(2),e.Vertices=a(3),e.World=a(30),e.Engine.run=e.Runner.run,e.Common.deprecated(e.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(s,r,a){var e={};s.exports=e;var o=a(15),i=a(0);(function(){e.name="matter-js",e.version="0.20.0",e.uses=[],e.used=[],e.use=function(){o.use(e,Array.prototype.slice.call(arguments))},e.before=function(l,u){return l=l.replace(/^Matter./,""),i.chainPathBefore(e,l,u)},e.after=function(l,u){return l=l.replace(/^Matter./,""),i.chainPathAfter(e,l,u)}})()},function(s,r,a){var e={};s.exports=e;var o=a(6),i=a(10),l=a(0),u=a(4),p=a(12),d=l.deprecated;(function(){e.stack=function(h,c,g,f,m,v,x){for(var _=o.create({label:"Stack"}),S=h,k=c,b,w=0,y=0;y<f;y++){for(var C=0,P=0;P<g;P++){var M=x(S,k,P,y,b,w);if(M){var T=M.bounds.max.y-M.bounds.min.y,I=M.bounds.max.x-M.bounds.min.x;T>C&&(C=T),u.translate(M,{x:I*.5,y:T*.5}),S=M.bounds.max.x+m,o.addBody(_,M),b=M,w+=1}else S+=m}k+=C+v,S=h}return _},e.chain=function(h,c,g,f,m,v){for(var x=h.bodies,_=1;_<x.length;_++){var S=x[_-1],k=x[_],b=S.bounds.max.y-S.bounds.min.y,w=S.bounds.max.x-S.bounds.min.x,y=k.bounds.max.y-k.bounds.min.y,C=k.bounds.max.x-k.bounds.min.x,P={bodyA:S,pointA:{x:w*c,y:b*g},bodyB:k,pointB:{x:C*f,y:y*m}},M=l.extend(P,v);o.addConstraint(h,i.create(M))}return h.label+=" Chain",h},e.mesh=function(h,c,g,f,m){var v=h.bodies,x,_,S,k,b;for(x=0;x<g;x++){for(_=1;_<c;_++)S=v[_-1+x*c],k=v[_+x*c],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:k},m)));if(x>0)for(_=0;_<c;_++)S=v[_+(x-1)*c],k=v[_+x*c],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:k},m))),f&&_>0&&(b=v[_-1+(x-1)*c],o.addConstraint(h,i.create(l.extend({bodyA:b,bodyB:k},m)))),f&&_<c-1&&(b=v[_+1+(x-1)*c],o.addConstraint(h,i.create(l.extend({bodyA:b,bodyB:k},m))))}return h.label+=" Mesh",h},e.pyramid=function(h,c,g,f,m,v,x){return e.stack(h,c,g,f,m,v,function(_,S,k,b,w,y){var C=Math.min(f,Math.ceil(g/2)),P=w?w.bounds.max.x-w.bounds.min.x:0;if(!(b>C)){b=C-b;var M=b,T=g-1-b;if(!(k<M||k>T)){y===1&&u.translate(w,{x:(k+(g%2===1?1:-1))*P,y:0});var I=w?k*P:0;return x(h+I+k*m,S,k,b,w,y)}}})},e.newtonsCradle=function(h,c,g,f,m){for(var v=o.create({label:"Newtons Cradle"}),x=0;x<g;x++){var _=1.9,S=p.circle(h+x*(f*_),c+m,f,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),k=i.create({pointA:{x:h+x*(f*_),y:c},bodyB:S});o.addBody(v,S),o.addConstraint(v,k)}return v},d(e,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),e.car=function(h,c,g,f,m){var v=u.nextGroup(!0),x=20,_=-g*.5+x,S=g*.5-x,k=0,b=o.create({label:"Car"}),w=p.rectangle(h,c,g,f,{collisionFilter:{group:v},chamfer:{radius:f*.5},density:2e-4}),y=p.circle(h+_,c+k,m,{collisionFilter:{group:v},friction:.8}),C=p.circle(h+S,c+k,m,{collisionFilter:{group:v},friction:.8}),P=i.create({bodyB:w,pointB:{x:_,y:k},bodyA:y,stiffness:1,length:0}),M=i.create({bodyB:w,pointB:{x:S,y:k},bodyA:C,stiffness:1,length:0});return o.addBody(b,w),o.addBody(b,y),o.addBody(b,C),o.addConstraint(b,P),o.addConstraint(b,M),b},d(e,"car","Composites.car ➤ moved to car example"),e.softBody=function(h,c,g,f,m,v,x,_,S,k){S=l.extend({inertia:1/0},S),k=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},k);var b=e.stack(h,c,g,f,m,v,function(w,y){return p.circle(w,y,_,S)});return e.mesh(b,g,f,x,k),b.label="Soft Body",b},d(e,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(s,r,a){var e={};s.exports=e;var o=a(9),i=a(0),l=i.deprecated;(function(){e.create=function(u){var p={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return i.extend(p,u)},e.update=function(u,p,d,h){var c,g,f,m=d.world,v=u.buckets,x,_,S=!1;for(c=0;c<p.length;c++){var k=p[c];if(!(k.isSleeping&&!h)&&!(m.bounds&&(k.bounds.max.x<m.bounds.min.x||k.bounds.min.x>m.bounds.max.x||k.bounds.max.y<m.bounds.min.y||k.bounds.min.y>m.bounds.max.y))){var b=e._getRegion(u,k);if(!k.region||b.id!==k.region.id||h){(!k.region||h)&&(k.region=b);var w=e._regionUnion(b,k.region);for(g=w.startCol;g<=w.endCol;g++)for(f=w.startRow;f<=w.endRow;f++){_=e._getBucketId(g,f),x=v[_];var y=g>=b.startCol&&g<=b.endCol&&f>=b.startRow&&f<=b.endRow,C=g>=k.region.startCol&&g<=k.region.endCol&&f>=k.region.startRow&&f<=k.region.endRow;!y&&C&&C&&x&&e._bucketRemoveBody(u,x,k),(k.region===b||y&&!C||h)&&(x||(x=e._createBucket(v,_)),e._bucketAddBody(u,x,k))}k.region=b,S=!0}}}S&&(u.pairsList=e._createActivePairsList(u))},l(e,"update","Grid.update ➤ replaced by Matter.Detector"),e.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(e,"clear","Grid.clear ➤ replaced by Matter.Detector"),e._regionUnion=function(u,p){var d=Math.min(u.startCol,p.startCol),h=Math.max(u.endCol,p.endCol),c=Math.min(u.startRow,p.startRow),g=Math.max(u.endRow,p.endRow);return e._createRegion(d,h,c,g)},e._getRegion=function(u,p){var d=p.bounds,h=Math.floor(d.min.x/u.bucketWidth),c=Math.floor(d.max.x/u.bucketWidth),g=Math.floor(d.min.y/u.bucketHeight),f=Math.floor(d.max.y/u.bucketHeight);return e._createRegion(h,c,g,f)},e._createRegion=function(u,p,d,h){return{id:u+","+p+","+d+","+h,startCol:u,endCol:p,startRow:d,endRow:h}},e._getBucketId=function(u,p){return"C"+u+"R"+p},e._createBucket=function(u,p){var d=u[p]=[];return d},e._bucketAddBody=function(u,p,d){var h=u.pairs,c=o.id,g=p.length,f;for(f=0;f<g;f++){var m=p[f];if(!(d.id===m.id||d.isStatic&&m.isStatic)){var v=c(d,m),x=h[v];x?x[2]+=1:h[v]=[d,m,1]}}p.push(d)},e._bucketRemoveBody=function(u,p,d){var h=u.pairs,c=o.id,g;p.splice(i.indexOf(p,d),1);var f=p.length;for(g=0;g<f;g++){var m=h[c(d,p[g])];m&&(m[2]-=1)}},e._createActivePairsList=function(u){var p,d=u.pairs,h=i.keys(d),c=h.length,g=[],f;for(f=0;f<c;f++)p=d[h[f]],p[2]>0?g.push(p):delete d[h[f]];return g}})()},function(s,r,a){var e={};s.exports=e;var o=a(3),i=a(7),l=a(14),u=a(5),p=a(13),d=a(10),h=a(6),c=a(0),g=a(1);(function(){e.create=function(f,m){var v=(f?f.mouse:null)||(m?m.mouse:null);v||(f&&f.render&&f.render.canvas?v=l.create(f.render.canvas):m&&m.element?v=l.create(m.element):(v=l.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var x=d.create({label:"Mouse Constraint",pointA:v.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),_={type:"mouseConstraint",mouse:v,element:null,body:null,constraint:x,collisionFilter:{category:1,mask:4294967295,group:0}},S=c.extend(_,m);return u.on(f,"beforeUpdate",function(){var k=h.allBodies(f.world);e.update(S,k),e._triggerEvents(S)}),S},e.update=function(f,m){var v=f.mouse,x=f.constraint,_=f.body;if(v.button===0){if(x.bodyB)i.set(x.bodyB,!1),x.pointA=v.position;else for(var S=0;S<m.length;S++)if(_=m[S],g.contains(_.bounds,v.position)&&p.canCollide(_.collisionFilter,f.collisionFilter))for(var k=_.parts.length>1?1:0;k<_.parts.length;k++){var b=_.parts[k];if(o.contains(b.vertices,v.position)){x.pointA=v.position,x.bodyB=f.body=_,x.pointB={x:v.position.x-_.position.x,y:v.position.y-_.position.y},x.angleB=_.angle,i.set(_,!1),u.trigger(f,"startdrag",{mouse:v,body:_});break}}}else x.bodyB=f.body=null,x.pointB=null,_&&u.trigger(f,"enddrag",{mouse:v,body:_})},e._triggerEvents=function(f){var m=f.mouse,v=m.sourceEvents;v.mousemove&&u.trigger(f,"mousemove",{mouse:m}),v.mousedown&&u.trigger(f,"mousedown",{mouse:m}),v.mouseup&&u.trigger(f,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()},function(s,r,a){var e={};s.exports=e;var o=a(2),i=a(8),l=a(1),u=a(12),p=a(3);(function(){e.collides=function(d,h){for(var c=[],g=h.length,f=d.bounds,m=i.collides,v=l.overlaps,x=0;x<g;x++){var _=h[x],S=_.parts.length,k=S===1?0:1;if(v(_.bounds,f))for(var b=k;b<S;b++){var w=_.parts[b];if(v(w.bounds,f)){var y=m(w,d);if(y){c.push(y);break}}}}return c},e.ray=function(d,h,c,g){g=g||1e-100;for(var f=o.angle(h,c),m=o.magnitude(o.sub(h,c)),v=(c.x+h.x)*.5,x=(c.y+h.y)*.5,_=u.rectangle(v,x,m,g,{angle:f}),S=e.collides(_,d),k=0;k<S.length;k+=1){var b=S[k];b.body=b.bodyB=b.bodyA}return S},e.region=function(d,h,c){for(var g=[],f=0;f<d.length;f++){var m=d[f],v=l.overlaps(m.bounds,h);(v&&!c||!v&&c)&&g.push(m)}return g},e.point=function(d,h){for(var c=[],g=0;g<d.length;g++){var f=d[g];if(l.contains(f.bounds,h))for(var m=f.parts.length===1?0:1;m<f.parts.length;m++){var v=f.parts[m];if(l.contains(v.bounds,h)&&p.contains(v.vertices,h)){c.push(f);break}}}return c}})()},function(s,r,a){var e={};s.exports=e;var o=a(4),i=a(0),l=a(6),u=a(1),p=a(5),d=a(2),h=a(14);(function(){var c,g;typeof window<"u"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(k){window.setTimeout(function(){k(i.now())},1e3/60)},g=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),e._goodFps=30,e._goodDelta=1e3/60,e.create=function(k){var b={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!k.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},w=i.extend(b,k);return w.canvas&&(w.canvas.width=w.options.width||w.canvas.width,w.canvas.height=w.options.height||w.canvas.height),w.mouse=k.mouse,w.engine=k.engine,w.canvas=w.canvas||v(w.options.width,w.options.height),w.context=w.canvas.getContext("2d"),w.textures={},w.bounds=w.bounds||{min:{x:0,y:0},max:{x:w.canvas.width,y:w.canvas.height}},w.controller=e,w.options.showBroadphase=!1,w.options.pixelRatio!==1&&e.setPixelRatio(w,w.options.pixelRatio),i.isElement(w.element)&&w.element.appendChild(w.canvas),w},e.run=function(k){(function b(w){k.frameRequestId=c(b),f(k,w),e.world(k,w),k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0),(k.options.showStats||k.options.showDebug)&&e.stats(k,k.context,w),(k.options.showPerformance||k.options.showDebug)&&e.performance(k,k.context,w),k.context.setTransform(1,0,0,1,0,0)})()},e.stop=function(k){g(k.frameRequestId)},e.setPixelRatio=function(k,b){var w=k.options,y=k.canvas;b==="auto"&&(b=x(y)),w.pixelRatio=b,y.setAttribute("data-pixel-ratio",b),y.width=w.width*b,y.height=w.height*b,y.style.width=w.width+"px",y.style.height=w.height+"px"},e.setSize=function(k,b,w){k.options.width=b,k.options.height=w,k.bounds.max.x=k.bounds.min.x+b,k.bounds.max.y=k.bounds.min.y+w,k.options.pixelRatio!==1?e.setPixelRatio(k,k.options.pixelRatio):(k.canvas.width=b,k.canvas.height=w)},e.lookAt=function(k,b,w,y){y=typeof y<"u"?y:!0,b=i.isArray(b)?b:[b],w=w||{x:0,y:0};for(var C={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},P=0;P<b.length;P+=1){var M=b[P],T=M.bounds?M.bounds.min:M.min||M.position||M,I=M.bounds?M.bounds.max:M.max||M.position||M;T&&I&&(T.x<C.min.x&&(C.min.x=T.x),I.x>C.max.x&&(C.max.x=I.x),T.y<C.min.y&&(C.min.y=T.y),I.y>C.max.y&&(C.max.y=I.y))}var O=C.max.x-C.min.x+2*w.x,D=C.max.y-C.min.y+2*w.y,U=k.canvas.height,F=k.canvas.width,W=F/U,nn=O/D,on=1,cn=1;nn>W?cn=nn/W:on=W/nn,k.options.hasBounds=!0,k.bounds.min.x=C.min.x,k.bounds.max.x=C.min.x+O*on,k.bounds.min.y=C.min.y,k.bounds.max.y=C.min.y+D*cn,y&&(k.bounds.min.x+=O*.5-O*on*.5,k.bounds.max.x+=O*.5-O*on*.5,k.bounds.min.y+=D*.5-D*cn*.5,k.bounds.max.y+=D*.5-D*cn*.5),k.bounds.min.x-=w.x,k.bounds.max.x-=w.x,k.bounds.min.y-=w.y,k.bounds.max.y-=w.y,k.mouse&&(h.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.canvas.width,y:(k.bounds.max.y-k.bounds.min.y)/k.canvas.height}),h.setOffset(k.mouse,k.bounds.min))},e.startViewTransform=function(k){var b=k.bounds.max.x-k.bounds.min.x,w=k.bounds.max.y-k.bounds.min.y,y=b/k.options.width,C=w/k.options.height;k.context.setTransform(k.options.pixelRatio/y,0,0,k.options.pixelRatio/C,0,0),k.context.translate(-k.bounds.min.x,-k.bounds.min.y)},e.endViewTransform=function(k){k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0)},e.world=function(k,b){var w=i.now(),y=k.engine,C=y.world,P=k.canvas,M=k.context,T=k.options,I=k.timing,O=l.allBodies(C),D=l.allConstraints(C),U=T.wireframes?T.wireframeBackground:T.background,F=[],W=[],nn,on={timestamp:y.timing.timestamp};if(p.trigger(k,"beforeRender",on),k.currentBackground!==U&&S(k,U),M.globalCompositeOperation="source-in",M.fillStyle="transparent",M.fillRect(0,0,P.width,P.height),M.globalCompositeOperation="source-over",T.hasBounds){for(nn=0;nn<O.length;nn++){var cn=O[nn];u.overlaps(cn.bounds,k.bounds)&&F.push(cn)}for(nn=0;nn<D.length;nn++){var en=D[nn],un=en.bodyA,pn=en.bodyB,dn=en.pointA,Q=en.pointB;un&&(dn=d.add(un.position,en.pointA)),pn&&(Q=d.add(pn.position,en.pointB)),!(!dn||!Q)&&(u.contains(k.bounds,dn)||u.contains(k.bounds,Q))&&W.push(en)}e.startViewTransform(k),k.mouse&&(h.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.options.width,y:(k.bounds.max.y-k.bounds.min.y)/k.options.height}),h.setOffset(k.mouse,k.bounds.min))}else W=D,F=O,k.options.pixelRatio!==1&&k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0);!T.wireframes||y.enableSleeping&&T.showSleeping?e.bodies(k,F,M):(T.showConvexHulls&&e.bodyConvexHulls(k,F,M),e.bodyWireframes(k,F,M)),T.showBounds&&e.bodyBounds(k,F,M),(T.showAxes||T.showAngleIndicator)&&e.bodyAxes(k,F,M),T.showPositions&&e.bodyPositions(k,F,M),T.showVelocity&&e.bodyVelocity(k,F,M),T.showIds&&e.bodyIds(k,F,M),T.showSeparations&&e.separations(k,y.pairs.list,M),T.showCollisions&&e.collisions(k,y.pairs.list,M),T.showVertexNumbers&&e.vertexNumbers(k,F,M),T.showMousePosition&&e.mousePosition(k,k.mouse,M),e.constraints(W,M),T.hasBounds&&e.endViewTransform(k),p.trigger(k,"afterRender",on),I.lastElapsed=i.now()-w},e.stats=function(k,b,w){for(var y=k.engine,C=y.world,P=l.allBodies(C),M=0,T=55,I=44,O=0,D=0,U=0;U<P.length;U+=1)M+=P[U].parts.length;var F={Part:M,Body:P.length,Cons:l.allConstraints(C).length,Comp:l.allComposites(C).length,Pair:y.pairs.list.length};b.fillStyle="#0e0f19",b.fillRect(O,D,T*5.5,I),b.font="12px Arial",b.textBaseline="top",b.textAlign="right";for(var W in F){var nn=F[W];b.fillStyle="#aaa",b.fillText(W,O+T,D+8),b.fillStyle="#eee",b.fillText(nn,O+T,D+26),O+=T}},e.performance=function(k,b){var w=k.engine,y=k.timing,C=y.deltaHistory,P=y.elapsedHistory,M=y.timestampElapsedHistory,T=y.engineDeltaHistory,I=y.engineUpdatesHistory,O=y.engineElapsedHistory,D=w.timing.lastUpdatesPerFrame,U=w.timing.lastDelta,F=m(C),W=m(P),nn=m(T),on=m(I),cn=m(O),en=m(M),un=en/F||0,pn=Math.round(F/U),dn=1e3/F||0,Q=4,j=12,G=60,H=34,Y=10,sn=69;b.fillStyle="#0e0f19",b.fillRect(0,50,j*5+G*6+22,H),e.status(b,Y,sn,G,Q,C.length,Math.round(dn)+" fps",dn/e._goodFps,function(E){return C[E]/F-1}),e.status(b,Y+j+G,sn,G,Q,T.length,U.toFixed(2)+" dt",e._goodDelta/U,function(E){return T[E]/nn-1}),e.status(b,Y+(j+G)*2,sn,G,Q,I.length,D+" upf",Math.pow(i.clamp(on/pn||1,0,1),4),function(E){return I[E]/on-1}),e.status(b,Y+(j+G)*3,sn,G,Q,O.length,cn.toFixed(2)+" ut",1-D*cn/e._goodFps,function(E){return O[E]/cn-1}),e.status(b,Y+(j+G)*4,sn,G,Q,P.length,W.toFixed(2)+" rt",1-W/e._goodFps,function(E){return P[E]/W-1}),e.status(b,Y+(j+G)*5,sn,G,Q,M.length,un.toFixed(2)+" x",un*un*un,function(E){return(M[E]/C[E]/un||0)-1})},e.status=function(k,b,w,y,C,P,M,T,I){k.strokeStyle="#888",k.fillStyle="#444",k.lineWidth=1,k.fillRect(b,w+7,y,1),k.beginPath(),k.moveTo(b,w+7-C*i.clamp(.4*I(0),-2,2));for(var O=0;O<y;O+=1)k.lineTo(b+O,w+7-(O<P?C*i.clamp(.4*I(O),-2,2):0));k.stroke(),k.fillStyle="hsl("+i.clamp(25+95*T,0,120)+",100%,60%)",k.fillRect(b,w-7,4,4),k.font="12px Arial",k.textBaseline="middle",k.textAlign="right",k.fillStyle="#eee",k.fillText(M,b+y,w-5)},e.constraints=function(k,b){for(var w=b,y=0;y<k.length;y++){var C=k[y];if(!(!C.render.visible||!C.pointA||!C.pointB)){var P=C.bodyA,M=C.bodyB,T,I;if(P?T=d.add(P.position,C.pointA):T=C.pointA,C.render.type==="pin")w.beginPath(),w.arc(T.x,T.y,3,0,2*Math.PI),w.closePath();else{if(M?I=d.add(M.position,C.pointB):I=C.pointB,w.beginPath(),w.moveTo(T.x,T.y),C.render.type==="spring")for(var O=d.sub(I,T),D=d.perp(d.normalise(O)),U=Math.ceil(i.clamp(C.length/5,12,20)),F,W=1;W<U;W+=1)F=W%2===0?1:-1,w.lineTo(T.x+O.x*(W/U)+D.x*F*4,T.y+O.y*(W/U)+D.y*F*4);w.lineTo(I.x,I.y)}C.render.lineWidth&&(w.lineWidth=C.render.lineWidth,w.strokeStyle=C.render.strokeStyle,w.stroke()),C.render.anchors&&(w.fillStyle=C.render.strokeStyle,w.beginPath(),w.arc(T.x,T.y,3,0,2*Math.PI),w.arc(I.x,I.y,3,0,2*Math.PI),w.closePath(),w.fill())}}},e.bodies=function(k,b,w){var y=w;k.engine;var C=k.options,P=C.showInternalEdges||!C.wireframes,M,T,I,O;for(I=0;I<b.length;I++)if(M=b[I],!!M.render.visible){for(O=M.parts.length>1?1:0;O<M.parts.length;O++)if(T=M.parts[O],!!T.render.visible){if(C.showSleeping&&M.isSleeping?y.globalAlpha=.5*T.render.opacity:T.render.opacity!==1&&(y.globalAlpha=T.render.opacity),T.render.sprite&&T.render.sprite.texture&&!C.wireframes){var D=T.render.sprite,U=_(k,D.texture);y.translate(T.position.x,T.position.y),y.rotate(T.angle),y.drawImage(U,U.width*-D.xOffset*D.xScale,U.height*-D.yOffset*D.yScale,U.width*D.xScale,U.height*D.yScale),y.rotate(-T.angle),y.translate(-T.position.x,-T.position.y)}else{if(T.circleRadius)y.beginPath(),y.arc(T.position.x,T.position.y,T.circleRadius,0,2*Math.PI);else{y.beginPath(),y.moveTo(T.vertices[0].x,T.vertices[0].y);for(var F=1;F<T.vertices.length;F++)!T.vertices[F-1].isInternal||P?y.lineTo(T.vertices[F].x,T.vertices[F].y):y.moveTo(T.vertices[F].x,T.vertices[F].y),T.vertices[F].isInternal&&!P&&y.moveTo(T.vertices[(F+1)%T.vertices.length].x,T.vertices[(F+1)%T.vertices.length].y);y.lineTo(T.vertices[0].x,T.vertices[0].y),y.closePath()}C.wireframes?(y.lineWidth=1,y.strokeStyle=k.options.wireframeStrokeStyle,y.stroke()):(y.fillStyle=T.render.fillStyle,T.render.lineWidth&&(y.lineWidth=T.render.lineWidth,y.strokeStyle=T.render.strokeStyle,y.stroke()),y.fill())}y.globalAlpha=1}}},e.bodyWireframes=function(k,b,w){var y=w,C=k.options.showInternalEdges,P,M,T,I,O;for(y.beginPath(),T=0;T<b.length;T++)if(P=b[T],!!P.render.visible)for(O=P.parts.length>1?1:0;O<P.parts.length;O++){for(M=P.parts[O],y.moveTo(M.vertices[0].x,M.vertices[0].y),I=1;I<M.vertices.length;I++)!M.vertices[I-1].isInternal||C?y.lineTo(M.vertices[I].x,M.vertices[I].y):y.moveTo(M.vertices[I].x,M.vertices[I].y),M.vertices[I].isInternal&&!C&&y.moveTo(M.vertices[(I+1)%M.vertices.length].x,M.vertices[(I+1)%M.vertices.length].y);y.lineTo(M.vertices[0].x,M.vertices[0].y)}y.lineWidth=1,y.strokeStyle=k.options.wireframeStrokeStyle,y.stroke()},e.bodyConvexHulls=function(k,b,w){var y=w,C,P,M;for(y.beginPath(),P=0;P<b.length;P++)if(C=b[P],!(!C.render.visible||C.parts.length===1)){for(y.moveTo(C.vertices[0].x,C.vertices[0].y),M=1;M<C.vertices.length;M++)y.lineTo(C.vertices[M].x,C.vertices[M].y);y.lineTo(C.vertices[0].x,C.vertices[0].y)}y.lineWidth=1,y.strokeStyle="rgba(255,255,255,0.2)",y.stroke()},e.vertexNumbers=function(k,b,w){var y=w,C,P,M;for(C=0;C<b.length;C++){var T=b[C].parts;for(M=T.length>1?1:0;M<T.length;M++){var I=T[M];for(P=0;P<I.vertices.length;P++)y.fillStyle="rgba(255,255,255,0.2)",y.fillText(C+"_"+P,I.position.x+(I.vertices[P].x-I.position.x)*.8,I.position.y+(I.vertices[P].y-I.position.y)*.8)}}},e.mousePosition=function(k,b,w){var y=w;y.fillStyle="rgba(255,255,255,0.8)",y.fillText(b.position.x+"  "+b.position.y,b.position.x+5,b.position.y-5)},e.bodyBounds=function(k,b,w){var y=w;k.engine;var C=k.options;y.beginPath();for(var P=0;P<b.length;P++){var M=b[P];if(M.render.visible)for(var T=b[P].parts,I=T.length>1?1:0;I<T.length;I++){var O=T[I];y.rect(O.bounds.min.x,O.bounds.min.y,O.bounds.max.x-O.bounds.min.x,O.bounds.max.y-O.bounds.min.y)}}C.wireframes?y.strokeStyle="rgba(255,255,255,0.08)":y.strokeStyle="rgba(0,0,0,0.1)",y.lineWidth=1,y.stroke()},e.bodyAxes=function(k,b,w){var y=w;k.engine;var C=k.options,P,M,T,I;for(y.beginPath(),M=0;M<b.length;M++){var O=b[M],D=O.parts;if(O.render.visible)if(C.showAxes)for(T=D.length>1?1:0;T<D.length;T++)for(P=D[T],I=0;I<P.axes.length;I++){var U=P.axes[I];y.moveTo(P.position.x,P.position.y),y.lineTo(P.position.x+U.x*20,P.position.y+U.y*20)}else for(T=D.length>1?1:0;T<D.length;T++)for(P=D[T],I=0;I<P.axes.length;I++)y.moveTo(P.position.x,P.position.y),y.lineTo((P.vertices[0].x+P.vertices[P.vertices.length-1].x)/2,(P.vertices[0].y+P.vertices[P.vertices.length-1].y)/2)}C.wireframes?(y.strokeStyle="indianred",y.lineWidth=1):(y.strokeStyle="rgba(255, 255, 255, 0.4)",y.globalCompositeOperation="overlay",y.lineWidth=2),y.stroke(),y.globalCompositeOperation="source-over"},e.bodyPositions=function(k,b,w){var y=w;k.engine;var C=k.options,P,M,T,I;for(y.beginPath(),T=0;T<b.length;T++)if(P=b[T],!!P.render.visible)for(I=0;I<P.parts.length;I++)M=P.parts[I],y.arc(M.position.x,M.position.y,3,0,2*Math.PI,!1),y.closePath();for(C.wireframes?y.fillStyle="indianred":y.fillStyle="rgba(0,0,0,0.5)",y.fill(),y.beginPath(),T=0;T<b.length;T++)P=b[T],P.render.visible&&(y.arc(P.positionPrev.x,P.positionPrev.y,2,0,2*Math.PI,!1),y.closePath());y.fillStyle="rgba(255,165,0,0.8)",y.fill()},e.bodyVelocity=function(k,b,w){var y=w;y.beginPath();for(var C=0;C<b.length;C++){var P=b[C];if(P.render.visible){var M=o.getVelocity(P);y.moveTo(P.position.x,P.position.y),y.lineTo(P.position.x+M.x,P.position.y+M.y)}}y.lineWidth=3,y.strokeStyle="cornflowerblue",y.stroke()},e.bodyIds=function(k,b,w){var y=w,C,P;for(C=0;C<b.length;C++)if(b[C].render.visible){var M=b[C].parts;for(P=M.length>1?1:0;P<M.length;P++){var T=M[P];y.font="12px Arial",y.fillStyle="rgba(255,255,255,0.5)",y.fillText(T.id,T.position.x+10,T.position.y-10)}}},e.collisions=function(k,b,w){var y=w,C=k.options,P,M,T,I;for(y.beginPath(),T=0;T<b.length;T++)if(P=b[T],!!P.isActive)for(M=P.collision,I=0;I<P.contactCount;I++){var O=P.contacts[I],D=O.vertex;y.rect(D.x-1.5,D.y-1.5,3.5,3.5)}for(C.wireframes?y.fillStyle="rgba(255,255,255,0.7)":y.fillStyle="orange",y.fill(),y.beginPath(),T=0;T<b.length;T++)if(P=b[T],!!P.isActive&&(M=P.collision,P.contactCount>0)){var U=P.contacts[0].vertex.x,F=P.contacts[0].vertex.y;P.contactCount===2&&(U=(P.contacts[0].vertex.x+P.contacts[1].vertex.x)/2,F=(P.contacts[0].vertex.y+P.contacts[1].vertex.y)/2),M.bodyB===M.supports[0].body||M.bodyA.isStatic===!0?y.moveTo(U-M.normal.x*8,F-M.normal.y*8):y.moveTo(U+M.normal.x*8,F+M.normal.y*8),y.lineTo(U,F)}C.wireframes?y.strokeStyle="rgba(255,165,0,0.7)":y.strokeStyle="orange",y.lineWidth=1,y.stroke()},e.separations=function(k,b,w){var y=w,C=k.options,P,M,T,I,O;for(y.beginPath(),O=0;O<b.length;O++)if(P=b[O],!!P.isActive){M=P.collision,T=M.bodyA,I=M.bodyB;var D=1;!I.isStatic&&!T.isStatic&&(D=.5),I.isStatic&&(D=0),y.moveTo(I.position.x,I.position.y),y.lineTo(I.position.x-M.penetration.x*D,I.position.y-M.penetration.y*D),D=1,!I.isStatic&&!T.isStatic&&(D=.5),T.isStatic&&(D=0),y.moveTo(T.position.x,T.position.y),y.lineTo(T.position.x+M.penetration.x*D,T.position.y+M.penetration.y*D)}C.wireframes?y.strokeStyle="rgba(255,165,0,0.5)":y.strokeStyle="orange",y.stroke()},e.inspector=function(k,b){k.engine;var w=k.selected,y=k.render,C=y.options,P;if(C.hasBounds){var M=y.bounds.max.x-y.bounds.min.x,T=y.bounds.max.y-y.bounds.min.y,I=M/y.options.width,O=T/y.options.height;b.scale(1/I,1/O),b.translate(-y.bounds.min.x,-y.bounds.min.y)}for(var D=0;D<w.length;D++){var U=w[D].data;switch(b.translate(.5,.5),b.lineWidth=1,b.strokeStyle="rgba(255,165,0,0.9)",b.setLineDash([1,2]),U.type){case"body":P=U.bounds,b.beginPath(),b.rect(Math.floor(P.min.x-3),Math.floor(P.min.y-3),Math.floor(P.max.x-P.min.x+6),Math.floor(P.max.y-P.min.y+6)),b.closePath(),b.stroke();break;case"constraint":var F=U.pointA;U.bodyA&&(F=U.pointB),b.beginPath(),b.arc(F.x,F.y,10,0,2*Math.PI),b.closePath(),b.stroke();break}b.setLineDash([]),b.translate(-.5,-.5)}k.selectStart!==null&&(b.translate(.5,.5),b.lineWidth=1,b.strokeStyle="rgba(255,165,0,0.6)",b.fillStyle="rgba(255,165,0,0.1)",P=k.selectBounds,b.beginPath(),b.rect(Math.floor(P.min.x),Math.floor(P.min.y),Math.floor(P.max.x-P.min.x),Math.floor(P.max.y-P.min.y)),b.closePath(),b.stroke(),b.fill(),b.translate(-.5,-.5)),C.hasBounds&&b.setTransform(1,0,0,1,0,0)};var f=function(k,b){var w=k.engine,y=k.timing,C=y.historySize,P=w.timing.timestamp;y.delta=b-y.lastTime||e._goodDelta,y.lastTime=b,y.timestampElapsed=P-y.lastTimestamp||0,y.lastTimestamp=P,y.deltaHistory.unshift(y.delta),y.deltaHistory.length=Math.min(y.deltaHistory.length,C),y.engineDeltaHistory.unshift(w.timing.lastDelta),y.engineDeltaHistory.length=Math.min(y.engineDeltaHistory.length,C),y.timestampElapsedHistory.unshift(y.timestampElapsed),y.timestampElapsedHistory.length=Math.min(y.timestampElapsedHistory.length,C),y.engineUpdatesHistory.unshift(w.timing.lastUpdatesPerFrame),y.engineUpdatesHistory.length=Math.min(y.engineUpdatesHistory.length,C),y.engineElapsedHistory.unshift(w.timing.lastElapsed),y.engineElapsedHistory.length=Math.min(y.engineElapsedHistory.length,C),y.elapsedHistory.unshift(y.lastElapsed),y.elapsedHistory.length=Math.min(y.elapsedHistory.length,C)},m=function(k){for(var b=0,w=0;w<k.length;w+=1)b+=k[w];return b/k.length||0},v=function(k,b){var w=document.createElement("canvas");return w.width=k,w.height=b,w.oncontextmenu=function(){return!1},w.onselectstart=function(){return!1},w},x=function(k){var b=k.getContext("2d"),w=window.devicePixelRatio||1,y=b.webkitBackingStorePixelRatio||b.mozBackingStorePixelRatio||b.msBackingStorePixelRatio||b.oBackingStorePixelRatio||b.backingStorePixelRatio||1;return w/y},_=function(k,b){var w=k.textures[b];return w||(w=k.textures[b]=new Image,w.src=b,w)},S=function(k,b){var w=b;/(jpg|gif|png)$/.test(b)&&(w="url("+b+")"),k.canvas.style.background=w,k.canvas.style.backgroundSize="contain",k.currentBackground=b}})()},function(s,r,a){var e={};s.exports=e;var o=a(5),i=a(17),l=a(0);(function(){e._maxFrameDelta=1e3/15,e._frameDeltaFallback=1e3/60,e._timeBufferMargin=1.5,e._elapsedNextEstimate=1,e._smoothingLowerBound=.1,e._smoothingUpperBound=.9,e.create=function(p){var d={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=l.extend(d,p);return h.fps=0,h},e.run=function(p,d){return p.timeBuffer=e._frameDeltaFallback,function h(c){p.frameRequestId=e._onNextFrame(p,h),c&&p.enabled&&e.tick(p,d,c)}(),p},e.tick=function(p,d,h){var c=l.now(),g=p.delta,f=0,m=h-p.timeLastTick;if((!m||!p.timeLastTick||m>Math.max(e._maxFrameDelta,p.maxFrameTime))&&(m=p.frameDelta||e._frameDeltaFallback),p.frameDeltaSmoothing){p.frameDeltaHistory.push(m),p.frameDeltaHistory=p.frameDeltaHistory.slice(-p.frameDeltaHistorySize);var v=p.frameDeltaHistory.slice(0).sort(),x=p.frameDeltaHistory.slice(v.length*e._smoothingLowerBound,v.length*e._smoothingUpperBound),_=u(x);m=_||m}p.frameDeltaSnapping&&(m=1e3/Math.round(1e3/m)),p.frameDelta=m,p.timeLastTick=h,p.timeBuffer+=p.frameDelta,p.timeBuffer=l.clamp(p.timeBuffer,0,p.frameDelta+g*e._timeBufferMargin),p.lastUpdatesDeferred=0;var S=p.maxUpdates||Math.ceil(p.maxFrameTime/g),k={timestamp:d.timing.timestamp};o.trigger(p,"beforeTick",k),o.trigger(p,"tick",k);for(var b=l.now();g>0&&p.timeBuffer>=g*e._timeBufferMargin;){o.trigger(p,"beforeUpdate",k),i.update(d,g),o.trigger(p,"afterUpdate",k),p.timeBuffer-=g,f+=1;var w=l.now()-c,y=l.now()-b,C=w+e._elapsedNextEstimate*y/f;if(f>=S||C>p.maxFrameTime){p.lastUpdatesDeferred=Math.round(Math.max(0,p.timeBuffer/g-e._timeBufferMargin));break}}d.timing.lastUpdatesPerFrame=f,o.trigger(p,"afterTick",k),p.frameDeltaHistory.length>=100&&(p.lastUpdatesDeferred&&Math.round(p.frameDelta/g)>S?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):p.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof p.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(p.deltaMin||p.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),p.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},e.stop=function(p){e._cancelNextFrame(p)},e._onNextFrame=function(p,d){if(typeof window<"u"&&window.requestAnimationFrame)p.frameRequestId=window.requestAnimationFrame(d);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return p.frameRequestId},e._cancelNextFrame=function(p){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(p.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(p){for(var d=0,h=p.length,c=0;c<h;c+=1)d+=p[c];return d/h||0}})()},function(s,r,a){var e={};s.exports=e;var o=a(8),i=a(0),l=i.deprecated;(function(){e.collides=function(u,p){return o.collides(u,p)},l(e,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(s,r,a){var e={};s.exports=e,a(1);var o=a(0);(function(){e.pathToVertices=function(i,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,p,d,h,c,g,f,m,v,x,_=[],S,k,b=0,w=0,y=0;l=l||15;var C=function(M,T,I){var O=I%2===1&&I>1;if(!v||M!=v.x||T!=v.y){v&&O?(S=v.x,k=v.y):(S=0,k=0);var D={x:S+M,y:k+T};(O||!v)&&(v=D),_.push(D),w=S+M,y=k+T}},P=function(M){var T=M.pathSegTypeAsLetter.toUpperCase();if(T!=="Z"){switch(T){case"M":case"L":case"T":case"C":case"S":case"Q":w=M.x,y=M.y;break;case"H":w=M.x;break;case"V":y=M.y;break}C(w,y,M.pathSegType)}};for(e._svgPathToAbsolute(i),d=i.getTotalLength(),g=[],u=0;u<i.pathSegList.numberOfItems;u+=1)g.push(i.pathSegList.getItem(u));for(f=g.concat();b<d;){if(x=i.getPathSegAtLength(b),c=g[x],c!=m){for(;f.length&&f[0]!=c;)P(f.shift());m=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=i.getPointAtLength(b),C(h.x,h.y,0);break}b+=l}for(u=0,p=f.length;u<p;++u)P(f[u]);return _},e._svgPathToAbsolute=function(i){for(var l,u,p,d,h,c,g=i.pathSegList,f=0,m=0,v=g.numberOfItems,x=0;x<v;++x){var _=g.getItem(x),S=_.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(S))"x"in _&&(f=_.x),"y"in _&&(m=_.y);else switch("x1"in _&&(p=f+_.x1),"x2"in _&&(h=f+_.x2),"y1"in _&&(d=m+_.y1),"y2"in _&&(c=m+_.y2),"x"in _&&(f+=_.x),"y"in _&&(m+=_.y),S){case"m":g.replaceItem(i.createSVGPathSegMovetoAbs(f,m),x);break;case"l":g.replaceItem(i.createSVGPathSegLinetoAbs(f,m),x);break;case"h":g.replaceItem(i.createSVGPathSegLinetoHorizontalAbs(f),x);break;case"v":g.replaceItem(i.createSVGPathSegLinetoVerticalAbs(m),x);break;case"c":g.replaceItem(i.createSVGPathSegCurvetoCubicAbs(f,m,p,d,h,c),x);break;case"s":g.replaceItem(i.createSVGPathSegCurvetoCubicSmoothAbs(f,m,h,c),x);break;case"q":g.replaceItem(i.createSVGPathSegCurvetoQuadraticAbs(f,m,p,d),x);break;case"t":g.replaceItem(i.createSVGPathSegCurvetoQuadraticSmoothAbs(f,m),x);break;case"a":g.replaceItem(i.createSVGPathSegArcAbs(f,m,_.r1,_.r2,_.angle,_.largeArcFlag,_.sweepFlag),x);break;case"z":case"Z":f=l,m=u;break}(S=="M"||S=="m")&&(l=f,u=m)}}})()},function(s,r,a){var e={};s.exports=e;var o=a(6);a(0),function(){e.create=o.create,e.add=o.add,e.remove=o.remove,e.clear=o.clear,e.addComposite=o.addComposite,e.addBody=o.addBody,e.addConstraint=o.addConstraint}()}])})}(We)),We.exports}var dt=Ef();function Bt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ql(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ct={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vs={duration:.5,overwrite:!1,delay:0},Kr,Fn,_n,Ot=1e8,Hn=1/Ot,cr=Math.PI*2,Rf=cr/4,Af=0,Jl=Math.sqrt,If=Math.cos,Of=Math.sin,Ln=function(n){return typeof n=="string"},Pn=function(n){return typeof n=="function"},$t=function(n){return typeof n=="number"},Xr=function(n){return typeof n>"u"},Lt=function(n){return typeof n=="object"},Qn=function(n){return n!==!1},Zr=function(){return typeof window<"u"},Fe=function(n){return Pn(n)||Ln(n)},nc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,pr=/(?:-?\.?\d|\.)+/gi,tc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ua=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sc=/[+-]=-?[.\d]+/,ec=/[^,'"\[\]\s]+/gi,jf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Cn,Mt,ur,Qr,pt={},ea={},ac,rc=function(n){return(ea=$s(n,pt))&&st},Jr=function(n,s){return console.warn("Invalid property",n,"set to",s,"Missing plugin? gsap.registerPlugin()")},_e=function(n,s){return!s&&console.warn(n)},oc=function(n,s){return n&&(pt[n]=s)&&ea&&(ea[n]=s)||pt},Se=function(){return 0},Lf={suppressEvents:!0,isStart:!0,kill:!1},Ve={suppressEvents:!0,kill:!1},Df={suppressEvents:!0},no={},as=[],dr={},ic,rt={},Ga={},di=30,$e=[],to="",so=function(n){var s=n[0],r,a;if(Lt(s)||Pn(s)||(n=[n]),!(r=(s._gsap||{}).harness)){for(a=$e.length;a--&&!$e[a].targetTest(s););r=$e[a]}for(a=n.length;a--;)n[a]&&(n[a]._gsap||(n[a]._gsap=new Ac(n[a],r)))||n.splice(a,1);return n},xs=function(n){return n._gsap||so(ht(n))[0]._gsap},lc=function(n,s,r){return(r=n[s])&&Pn(r)?n[s]():Xr(r)&&n.getAttribute&&n.getAttribute(s)||r},Jn=function(n,s){return(n=n.split(",")).forEach(s)||n},Mn=function(n){return Math.round(n*1e5)/1e5||0},Rn=function(n){return Math.round(n*1e7)/1e7||0},Bs=function(n,s){var r=s.charAt(0),a=parseFloat(s.substr(2));return n=parseFloat(n),r==="+"?n+a:r==="-"?n-a:r==="*"?n*a:n/a},Ff=function(n,s){for(var r=s.length,a=0;n.indexOf(s[a])<0&&++a<r;);return a<r},aa=function(){var n=as.length,s=as.slice(0),r,a;for(dr={},as.length=0,r=0;r<n;r++)a=s[r],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},eo=function(n){return!!(n._initted||n._startAt||n.add)},cc=function(n,s,r,a){as.length&&!Fn&&aa(),n.render(s,r,!!(Fn&&s<0&&eo(n))),as.length&&!Fn&&aa()},pc=function(n){var s=parseFloat(n);return(s||s===0)&&(n+"").match(ec).length<2?s:Ln(n)?n.trim():n},uc=function(n){return n},ut=function(n,s){for(var r in s)r in n||(n[r]=s[r]);return n},zf=function(n){return function(s,r){for(var a in r)a in s||a==="duration"&&n||a==="ease"||(s[a]=r[a])}},$s=function(n,s){for(var r in s)n[r]=s[r];return n},fi=function t(n,s){for(var r in s)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(n[r]=Lt(s[r])?t(n[r]||(n[r]={}),s[r]):s[r]);return n},ra=function(n,s){var r={},a;for(a in n)a in s||(r[a]=n[a]);return r},fe=function(n){var s=n.parent||Cn,r=n.keyframes?zf(Vn(n.keyframes)):ut;if(Qn(n.inherit))for(;s;)r(n,s.vars.defaults),s=s.parent||s._dp;return n},Bf=function(n,s){for(var r=n.length,a=r===s.length;a&&r--&&n[r]===s[r];);return r<0},dc=function(n,s,r,a,e){var o=n[a],i;if(e)for(i=s[e];o&&o[e]>i;)o=o._prev;return o?(s._next=o._next,o._next=s):(s._next=n[r],n[r]=s),s._next?s._next._prev=s:n[a]=s,s._prev=o,s.parent=s._dp=n,s},_a=function(n,s,r,a){r===void 0&&(r="_first"),a===void 0&&(a="_last");var e=s._prev,o=s._next;e?e._next=o:n[r]===s&&(n[r]=o),o?o._prev=e:n[a]===s&&(n[a]=e),s._next=s._prev=s.parent=null},ls=function(n,s){n.parent&&(!s||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},bs=function(n,s){if(n&&(!s||s._end>n._dur||s._start<0))for(var r=n;r;)r._dirty=1,r=r.parent;return n},Uf=function(n){for(var s=n.parent;s&&s.parent;)s._dirty=1,s.totalDuration(),s=s.parent;return n},fr=function(n,s,r,a){return n._startAt&&(Fn?n._startAt.revert(Ve):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(s,!0,a))},Gf=function t(n){return!n||n._ts&&t(n.parent)},hi=function(n){return n._repeat?Ys(n._tTime,n=n.duration()+n._rDelay)*n:0},Ys=function(n,s){var r=Math.floor(n=Rn(n/s));return n&&r===n?r-1:r},oa=function(n,s){return(n-s._start)*s._ts+(s._ts>=0?0:s._dirty?s.totalDuration():s._tDur)},Sa=function(n){return n._end=Rn(n._start+(n._tDur/Math.abs(n._ts||n._rts||Hn)||0))},Ca=function(n,s){var r=n._dp;return r&&r.smoothChildTiming&&n._ts&&(n._start=Rn(r._time-(n._ts>0?s/n._ts:((n._dirty?n.totalDuration():n._tDur)-s)/-n._ts)),Sa(n),r._dirty||bs(r,n)),n},fc=function(n,s){var r;if((s._time||!s._dur&&s._initted||s._start<n._time&&(s._dur||!s.add))&&(r=oa(n.rawTime(),s),(!s._dur||Oe(0,s.totalDuration(),r)-s._tTime>Hn)&&s.render(r,!0)),bs(n,s)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(r=n;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;n._zTime=-1e-8}},Rt=function(n,s,r,a){return s.parent&&ls(s),s._start=Rn(($t(r)?r:r||n!==Cn?ft(n,r,s):n._time)+s._delay),s._end=Rn(s._start+(s.totalDuration()/Math.abs(s.timeScale())||0)),dc(n,s,"_first","_last",n._sort?"_start":0),hr(s)||(n._recent=s),a||fc(n,s),n._ts<0&&Ca(n,n._tTime),n},hc=function(n,s){return(pt.ScrollTrigger||Jr("scrollTrigger",s))&&pt.ScrollTrigger.create(s,n)},gc=function(n,s,r,a,e){if(ro(n,s,e),!n._initted)return 1;if(!r&&n._pt&&!Fn&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&ic!==ot.frame)return as.push(n),n._lazy=[e,a],1},Nf=function t(n){var s=n.parent;return s&&s._ts&&s._initted&&!s._lock&&(s.rawTime()<0||t(s))},hr=function(n){var s=n.data;return s==="isFromStart"||s==="isStart"},Hf=function(n,s,r,a){var e=n.ratio,o=s<0||!s&&(!n._start&&Nf(n)&&!(!n._initted&&hr(n))||(n._ts<0||n._dp._ts<0)&&!hr(n))?0:1,i=n._rDelay,l=0,u,p,d;if(i&&n._repeat&&(l=Oe(0,n._tDur,s),p=Ys(l,i),n._yoyo&&p&1&&(o=1-o),p!==Ys(n._tTime,i)&&(e=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==e||Fn||a||n._zTime===Hn||!s&&n._zTime){if(!n._initted&&gc(n,s,a,r,l))return;for(d=n._zTime,n._zTime=s||(r?Hn:0),r||(r=s&&!d),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=l,u=n._pt;u;)u.r(o,u.d),u=u._next;s<0&&fr(n,s,r,!0),n._onUpdate&&!r&&lt(n,"onUpdate"),l&&n._repeat&&!r&&n.parent&&lt(n,"onRepeat"),(s>=n._tDur||s<0)&&n.ratio===o&&(o&&ls(n,1),!r&&!Fn&&(lt(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=s)},Wf=function(n,s,r){var a;if(r>s)for(a=n._first;a&&a._start<=r;){if(a.data==="isPause"&&a._start>s)return a;a=a._next}else for(a=n._last;a&&a._start>=r;){if(a.data==="isPause"&&a._start<s)return a;a=a._prev}},qs=function(n,s,r,a){var e=n._repeat,o=Rn(s)||0,i=n._tTime/n._tDur;return i&&!a&&(n._time*=o/n._dur),n._dur=o,n._tDur=e?e<0?1e10:Rn(o*(e+1)+n._rDelay*e):o,i>0&&!a&&Ca(n,n._tTime=n._tDur*i),n.parent&&Sa(n),r||bs(n.parent,n),n},gi=function(n){return n instanceof Xn?bs(n):qs(n,n._dur)},Vf={_start:0,endTime:Se,totalDuration:Se},ft=function t(n,s,r){var a=n.labels,e=n._recent||Vf,o=n.duration()>=Ot?e.endTime(!1):n._dur,i,l,u;return Ln(s)&&(isNaN(s)||s in a)?(l=s.charAt(0),u=s.substr(-1)==="%",i=s.indexOf("="),l==="<"||l===">"?(i>=0&&(s=s.replace(/=/,"")),(l==="<"?e._start:e.endTime(e._repeat>=0))+(parseFloat(s.substr(1))||0)*(u?(i<0?e:r).totalDuration()/100:1)):i<0?(s in a||(a[s]=o),a[s]):(l=parseFloat(s.charAt(i-1)+s.substr(i+1)),u&&r&&(l=l/100*(Vn(r)?r[0]:r).totalDuration()),i>1?t(n,s.substr(0,i-1),r)+l:o+l)):s==null?o:+s},he=function(n,s,r){var a=$t(s[1]),e=(a?2:1)+(n<2?0:1),o=s[e],i,l;if(a&&(o.duration=s[1]),o.parent=r,n){for(i=o,l=r;l&&!("immediateRender"in i);)i=l.vars.defaults||{},l=Qn(l.vars.inherit)&&l.parent;o.immediateRender=Qn(i.immediateRender),n<2?o.runBackwards=1:o.startAt=s[e-1]}return new En(s[0],o,s[e+1])},us=function(n,s){return n||n===0?s(n):s},Oe=function(n,s,r){return r<n?n:r>s?s:r},Nn=function(n,s){return!Ln(n)||!(s=jf.exec(n))?"":s[1]},$f=function(n,s,r){return us(r,function(a){return Oe(n,s,a)})},gr=[].slice,mc=function(n,s){return n&&Lt(n)&&"length"in n&&(!s&&!n.length||n.length-1 in n&&Lt(n[0]))&&!n.nodeType&&n!==Mt},Yf=function(n,s,r){return r===void 0&&(r=[]),n.forEach(function(a){var e;return Ln(a)&&!s||mc(a,1)?(e=r).push.apply(e,ht(a)):r.push(a)})||r},ht=function(n,s,r){return _n&&!s&&_n.selector?_n.selector(n):Ln(n)&&!r&&(ur||!Ks())?gr.call((s||Qr).querySelectorAll(n),0):Vn(n)?Yf(n,r):mc(n)?gr.call(n,0):n?[n]:[]},mr=function(n){return n=ht(n)[0]||_e("Invalid scope")||{},function(s){var r=n.current||n.nativeElement||n;return ht(s,r.querySelectorAll?r:r===n?_e("Invalid scope")||Qr.createElement("div"):n)}},kc=function(n){return n.sort(function(){return .5-Math.random()})},vc=function(n){if(Pn(n))return n;var s=Lt(n)?n:{each:n},r=ws(s.ease),a=s.from||0,e=parseFloat(s.base)||0,o={},i=a>0&&a<1,l=isNaN(a)||i,u=s.axis,p=a,d=a;return Ln(a)?p=d={center:.5,edges:.5,end:1}[a]||0:!i&&l&&(p=a[0],d=a[1]),function(h,c,g){var f=(g||s).length,m=o[f],v,x,_,S,k,b,w,y,C;if(!m){if(C=s.grid==="auto"?0:(s.grid||[1,Ot])[1],!C){for(w=-1e8;w<(w=g[C++].getBoundingClientRect().left)&&C<f;);C<f&&C--}for(m=o[f]=[],v=l?Math.min(C,f)*p-.5:a%C,x=C===Ot?0:l?f*d/C-.5:a/C|0,w=0,y=Ot,b=0;b<f;b++)_=b%C-v,S=x-(b/C|0),m[b]=k=u?Math.abs(u==="y"?S:_):Jl(_*_+S*S),k>w&&(w=k),k<y&&(y=k);a==="random"&&kc(m),m.max=w-y,m.min=y,m.v=f=(parseFloat(s.amount)||parseFloat(s.each)*(C>f?f-1:u?u==="y"?f/C:C:Math.max(C,f/C))||0)*(a==="edges"?-1:1),m.b=f<0?e-f:e,m.u=Nn(s.amount||s.each)||0,r=r&&f<0?Mc(r):r}return f=(m[h]-m.min)/m.max||0,Rn(m.b+(r?r(f):f)*m.v)+m.u}},kr=function(n){var s=Math.pow(10,((n+"").split(".")[1]||"").length);return function(r){var a=Rn(Math.round(parseFloat(r)/n)*n*s);return(a-a%1)/s+($t(r)?0:Nn(r))}},yc=function(n,s){var r=Vn(n),a,e;return!r&&Lt(n)&&(a=r=n.radius||Ot,n.values?(n=ht(n.values),(e=!$t(n[0]))&&(a*=a)):n=kr(n.increment)),us(s,r?Pn(n)?function(o){return e=n(o),Math.abs(e-o)<=a?e:o}:function(o){for(var i=parseFloat(e?o.x:o),l=parseFloat(e?o.y:0),u=Ot,p=0,d=n.length,h,c;d--;)e?(h=n[d].x-i,c=n[d].y-l,h=h*h+c*c):h=Math.abs(n[d]-i),h<u&&(u=h,p=d);return p=!a||u<=a?n[p]:o,e||p===o||$t(o)?p:p+Nn(o)}:kr(n))},xc=function(n,s,r,a){return us(Vn(n)?!s:r===!0?!!(r=0):!a,function(){return Vn(n)?n[~~(Math.random()*n.length)]:(r=r||1e-5)&&(a=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((n-r/2+Math.random()*(s-n+r*.99))/r)*r*a)/a})},qf=function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return function(a){return s.reduce(function(e,o){return o(e)},a)}},Kf=function(n,s){return function(r){return n(parseFloat(r))+(s||Nn(r))}},Xf=function(n,s,r){return wc(n,s,0,1,r)},bc=function(n,s,r){return us(r,function(a){return n[~~s(a)]})},Zf=function t(n,s,r){var a=s-n;return Vn(n)?bc(n,t(0,n.length),s):us(r,function(e){return(a+(e-n)%a)%a+n})},Qf=function t(n,s,r){var a=s-n,e=a*2;return Vn(n)?bc(n,t(0,n.length-1),s):us(r,function(o){return o=(e+(o-n)%e)%e||0,n+(o>a?e-o:o)})},Ce=function(n){for(var s=0,r="",a,e,o,i;~(a=n.indexOf("random(",s));)o=n.indexOf(")",a),i=n.charAt(a+7)==="[",e=n.substr(a+7,o-a-7).match(i?ec:pr),r+=n.substr(s,a-s)+xc(i?e:+e[0],i?0:+e[1],+e[2]||1e-5),s=o+1;return r+n.substr(s,n.length-s)},wc=function(n,s,r,a,e){var o=s-n,i=a-r;return us(e,function(l){return r+((l-n)/o*i||0)})},Jf=function t(n,s,r,a){var e=isNaN(n+s)?0:function(c){return(1-c)*n+c*s};if(!e){var o=Ln(n),i={},l,u,p,d,h;if(r===!0&&(a=1)&&(r=null),o)n={p:n},s={p:s};else if(Vn(n)&&!Vn(s)){for(p=[],d=n.length,h=d-2,u=1;u<d;u++)p.push(t(n[u-1],n[u]));d--,e=function(g){g*=d;var f=Math.min(h,~~g);return p[f](g-f)},r=s}else a||(n=$s(Vn(n)?[]:{},n));if(!p){for(l in s)ao.call(i,n,l,"get",s[l]);e=function(g){return lo(g,i)||(o?n.p:n)}}}return us(r,e)},mi=function(n,s,r){var a=n.labels,e=Ot,o,i,l;for(o in a)i=a[o]-s,i<0==!!r&&i&&e>(i=Math.abs(i))&&(l=o,e=i);return l},lt=function(n,s,r){var a=n.vars,e=a[s],o=_n,i=n._ctx,l,u,p;if(e)return l=a[s+"Params"],u=a.callbackScope||n,r&&as.length&&aa(),i&&(_n=i),p=l?e.apply(u,l):e.call(u),_n=o,p},ee=function(n){return ls(n),n.scrollTrigger&&n.scrollTrigger.kill(!!Fn),n.progress()<1&&lt(n,"onInterrupt"),n},Is,_c=[],Sc=function(n){if(n)if(n=!n.name&&n.default||n,Zr()||n.headless){var s=n.name,r=Pn(n),a=s&&!r&&n.init?function(){this._props=[]}:n,e={init:Se,render:lo,add:ao,kill:gh,modifier:hh,rawVars:0},o={targetTest:0,get:0,getSetter:io,aliases:{},register:0};if(Ks(),n!==a){if(rt[s])return;ut(a,ut(ra(n,e),o)),$s(a.prototype,$s(e,ra(n,o))),rt[a.prop=s]=a,n.targetTest&&($e.push(a),no[s]=1),s=(s==="css"?"CSS":s.charAt(0).toUpperCase()+s.substr(1))+"Plugin"}oc(s,a),n.register&&n.register(st,a,nt)}else _c.push(n)},yn=255,ae={aqua:[0,yn,yn],lime:[0,yn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yn],navy:[0,0,128],white:[yn,yn,yn],olive:[128,128,0],yellow:[yn,yn,0],orange:[yn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yn,0,0],pink:[yn,192,203],cyan:[0,yn,yn],transparent:[yn,yn,yn,0]},Na=function(n,s,r){return n+=n<0?1:n>1?-1:0,(n*6<1?s+(r-s)*n*6:n<.5?r:n*3<2?s+(r-s)*(2/3-n)*6:s)*yn+.5|0},Cc=function(n,s,r){var a=n?$t(n)?[n>>16,n>>8&yn,n&yn]:0:ae.black,e,o,i,l,u,p,d,h,c,g;if(!a){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),ae[n])a=ae[n];else if(n.charAt(0)==="#"){if(n.length<6&&(e=n.charAt(1),o=n.charAt(2),i=n.charAt(3),n="#"+e+e+o+o+i+i+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return a=parseInt(n.substr(1,6),16),[a>>16,a>>8&yn,a&yn,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),a=[n>>16,n>>8&yn,n&yn]}else if(n.substr(0,3)==="hsl"){if(a=g=n.match(pr),!s)l=+a[0]%360/360,u=+a[1]/100,p=+a[2]/100,o=p<=.5?p*(u+1):p+u-p*u,e=p*2-o,a.length>3&&(a[3]*=1),a[0]=Na(l+1/3,e,o),a[1]=Na(l,e,o),a[2]=Na(l-1/3,e,o);else if(~n.indexOf("="))return a=n.match(tc),r&&a.length<4&&(a[3]=1),a}else a=n.match(pr)||ae.transparent;a=a.map(Number)}return s&&!g&&(e=a[0]/yn,o=a[1]/yn,i=a[2]/yn,d=Math.max(e,o,i),h=Math.min(e,o,i),p=(d+h)/2,d===h?l=u=0:(c=d-h,u=p>.5?c/(2-d-h):c/(d+h),l=d===e?(o-i)/c+(o<i?6:0):d===o?(i-e)/c+2:(e-o)/c+4,l*=60),a[0]=~~(l+.5),a[1]=~~(u*100+.5),a[2]=~~(p*100+.5)),r&&a.length<4&&(a[3]=1),a},Tc=function(n){var s=[],r=[],a=-1;return n.split(rs).forEach(function(e){var o=e.match(As)||[];s.push.apply(s,o),r.push(a+=o.length+1)}),s.c=r,s},ki=function(n,s,r){var a="",e=(n+a).match(rs),o=s?"hsla(":"rgba(",i=0,l,u,p,d;if(!e)return n;if(e=e.map(function(h){return(h=Cc(h,s,1))&&o+(s?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),r&&(p=Tc(n),l=r.c,l.join(a)!==p.c.join(a)))for(u=n.replace(rs,"1").split(As),d=u.length-1;i<d;i++)a+=u[i]+(~l.indexOf(i)?e.shift()||o+"0,0,0,0)":(p.length?p:e.length?e:r).shift());if(!u)for(u=n.split(rs),d=u.length-1;i<d;i++)a+=u[i]+e[i];return a+u[d]},rs=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in ae)t+="|"+n+"\\b";return new RegExp(t+")","gi")}(),nh=/hsl[a]?\(/,Pc=function(n){var s=n.join(" "),r;if(rs.lastIndex=0,rs.test(s))return r=nh.test(s),n[1]=ki(n[1],r),n[0]=ki(n[0],r,Tc(n[1])),!0},Te,ot=function(){var t=Date.now,n=500,s=33,r=t(),a=r,e=1e3/240,o=e,i=[],l,u,p,d,h,c,g=function f(m){var v=t()-a,x=m===!0,_,S,k,b;if((v>n||v<0)&&(r+=v-s),a+=v,k=a-r,_=k-o,(_>0||x)&&(b=++d.frame,h=k-d.time*1e3,d.time=k=k/1e3,o+=_+(_>=e?4:e-_),S=1),x||(l=u(f)),S)for(c=0;c<i.length;c++)i[c](k,h,b,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ac&&(!ur&&Zr()&&(Mt=ur=window,Qr=Mt.document||{},pt.gsap=st,(Mt.gsapVersions||(Mt.gsapVersions=[])).push(st.version),rc(ea||Mt.GreenSockGlobals||!Mt.gsap&&Mt||{}),_c.forEach(Sc)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=p||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Te=1,g(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(l),Te=0,u=Se},lagSmoothing:function(m,v){n=m||1/0,s=Math.min(v||33,n)},fps:function(m){e=1e3/(m||240),o=d.time*1e3+e},add:function(m,v,x){var _=v?function(S,k,b,w){m(S,k,b,w),d.remove(_)}:m;return d.remove(m),i[x?"unshift":"push"](_),Ks(),_},remove:function(m,v){~(v=i.indexOf(m))&&i.splice(v,1)&&c>=v&&c--},_listeners:i},d}(),Ks=function(){return!Te&&ot.wake()},fn={},th=/^[\d.\-M][\d.\-,\s]/,sh=/["']/g,eh=function(n){for(var s={},r=n.substr(1,n.length-3).split(":"),a=r[0],e=1,o=r.length,i,l,u;e<o;e++)l=r[e],i=e!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,i),s[a]=isNaN(u)?u.replace(sh,"").trim():+u,a=l.substr(i+1).trim();return s},ah=function(n){var s=n.indexOf("(")+1,r=n.indexOf(")"),a=n.indexOf("(",s);return n.substring(s,~a&&a<r?n.indexOf(")",r+1):r)},rh=function(n){var s=(n+"").split("("),r=fn[s[0]];return r&&s.length>1&&r.config?r.config.apply(null,~n.indexOf("{")?[eh(s[1])]:ah(n).split(",").map(pc)):fn._CE&&th.test(n)?fn._CE("",n):r},Mc=function(n){return function(s){return 1-n(1-s)}},Ec=function t(n,s){for(var r=n._first,a;r;)r instanceof Xn?t(r,s):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==s&&(r.timeline?t(r.timeline,s):(a=r._ease,r._ease=r._yEase,r._yEase=a,r._yoyo=s)),r=r._next},ws=function(n,s){return n&&(Pn(n)?n:fn[n]||rh(n))||s},Ts=function(n,s,r,a){r===void 0&&(r=function(l){return 1-s(1-l)}),a===void 0&&(a=function(l){return l<.5?s(l*2)/2:1-s((1-l)*2)/2});var e={easeIn:s,easeOut:r,easeInOut:a},o;return Jn(n,function(i){fn[i]=pt[i]=e,fn[o=i.toLowerCase()]=r;for(var l in e)fn[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fn[i+"."+l]=e[l]}),e},Rc=function(n){return function(s){return s<.5?(1-n(1-s*2))/2:.5+n((s-.5)*2)/2}},Ha=function t(n,s,r){var a=s>=1?s:1,e=(r||(n?.3:.45))/(s<1?s:1),o=e/cr*(Math.asin(1/a)||0),i=function(p){return p===1?1:a*Math.pow(2,-10*p)*Of((p-o)*e)+1},l=n==="out"?i:n==="in"?function(u){return 1-i(1-u)}:Rc(i);return e=cr/e,l.config=function(u,p){return t(n,u,p)},l},Wa=function t(n,s){s===void 0&&(s=1.70158);var r=function(o){return o?--o*o*((s+1)*o+s)+1:0},a=n==="out"?r:n==="in"?function(e){return 1-r(1-e)}:Rc(r);return a.config=function(e){return t(n,e)},a};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,n){var s=n<5?n+1:n;Ts(t+",Power"+(s-1),n?function(r){return Math.pow(r,s)}:function(r){return r},function(r){return 1-Math.pow(1-r,s)},function(r){return r<.5?Math.pow(r*2,s)/2:1-Math.pow((1-r)*2,s)/2})});fn.Linear.easeNone=fn.none=fn.Linear.easeIn;Ts("Elastic",Ha("in"),Ha("out"),Ha());(function(t,n){var s=1/n,r=2*s,a=2.5*s,e=function(i){return i<s?t*i*i:i<r?t*Math.pow(i-1.5/n,2)+.75:i<a?t*(i-=2.25/n)*i+.9375:t*Math.pow(i-2.625/n,2)+.984375};Ts("Bounce",function(o){return 1-e(1-o)},e)})(7.5625,2.75);Ts("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Ts("Circ",function(t){return-(Jl(1-t*t)-1)});Ts("Sine",function(t){return t===1?1:-If(t*Rf)+1});Ts("Back",Wa("in"),Wa("out"),Wa());fn.SteppedEase=fn.steps=pt.SteppedEase={config:function(n,s){n===void 0&&(n=1);var r=1/n,a=n+(s?0:1),e=s?1:0,o=1-Hn;return function(i){return((a*Oe(0,o,i)|0)+e)*r}}};Vs.ease=fn["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return to+=t+","+t+"Params,"});var Ac=function(n,s){this.id=Af++,n._gsap=this,this.target=n,this.harness=s,this.get=s?s.get:lc,this.set=s?s.getSetter:io},Pe=function(){function t(s){this.vars=s,this._delay=+s.delay||0,(this._repeat=s.repeat===1/0?-2:s.repeat||0)&&(this._rDelay=s.repeatDelay||0,this._yoyo=!!s.yoyo||!!s.yoyoEase),this._ts=1,qs(this,+s.duration,1,1),this.data=s.data,_n&&(this._ctx=_n,_n.data.push(this)),Te||ot.wake()}var n=t.prototype;return n.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},n.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},n.totalDuration=function(r){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(r,a){if(Ks(),!arguments.length)return this._tTime;var e=this._dp;if(e&&e.smoothChildTiming&&this._ts){for(Ca(this,r),!e._dp||e.parent||fc(e,this);e&&e.parent;)e.parent._time!==e._start+(e._ts>=0?e._tTime/e._ts:(e.totalDuration()-e._tTime)/-e._ts)&&e.totalTime(e._tTime,!0),e=e.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Rt(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===Hn||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),cc(this,r,a)),this},n.time=function(r,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+hi(this))%(this._dur+this._rDelay)||(r?this._dur:0),a):this._time},n.totalProgress=function(r,a){return arguments.length?this.totalTime(this.totalDuration()*r,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(r,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+hi(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(r,a){var e=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*e,a):this._repeat?Ys(this._tTime,e)+1:1},n.timeScale=function(r,a){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var e=this.parent&&this._ts?oa(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(Oe(-Math.abs(this._delay),this.totalDuration(),e),a!==!1),Sa(this),Uf(this)},n.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Hn&&(this._tTime-=Hn)))),this):this._ps},n.startTime=function(r){if(arguments.length){this._start=r;var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Rt(a,this,r-this._delay),this}return this._start},n.endTime=function(r){return this._start+(Qn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(r){var a=this.parent||this._dp;return a?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oa(a.rawTime(r),this):this._tTime:this._tTime},n.revert=function(r){r===void 0&&(r=Df);var a=Fn;return Fn=r,eo(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Fn=a,this},n.globalTime=function(r){for(var a=this,e=arguments.length?r:a.rawTime();a;)e=a._start+e/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(r):e},n.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,gi(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(r){if(arguments.length){var a=this._time;return this._rDelay=r,gi(this),a?this.time(a):this}return this._rDelay},n.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},n.seek=function(r,a){return this.totalTime(ft(this,r),Qn(a))},n.restart=function(r,a){return this.play().totalTime(r?-this._delay:0,Qn(a)),this._dur||(this._zTime=-1e-8),this},n.play=function(r,a){return r!=null&&this.seek(r,a),this.reversed(!1).paused(!1)},n.reverse=function(r,a){return r!=null&&this.seek(r||this.totalDuration(),a),this.reversed(!0).paused(!1)},n.pause=function(r,a){return r!=null&&this.seek(r,a),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},n.isActive=function(){var r=this.parent||this._dp,a=this._start,e;return!!(!r||this._ts&&this._initted&&r.isActive()&&(e=r.rawTime(!0))>=a&&e<this.endTime(!0)-Hn)},n.eventCallback=function(r,a,e){var o=this.vars;return arguments.length>1?(a?(o[r]=a,e&&(o[r+"Params"]=e),r==="onUpdate"&&(this._onUpdate=a)):delete o[r],this):o[r]},n.then=function(r){var a=this;return new Promise(function(e){var o=Pn(r)?r:uc,i=function(){var u=a.then;a.then=null,Pn(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=u),e(o),a.then=u};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?i():a._prom=i})},n.kill=function(){ee(this)},t}();ut(Pe.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Xn=function(t){Ql(n,t);function n(r,a){var e;return r===void 0&&(r={}),e=t.call(this,r)||this,e.labels={},e.smoothChildTiming=!!r.smoothChildTiming,e.autoRemoveChildren=!!r.autoRemoveChildren,e._sort=Qn(r.sortChildren),Cn&&Rt(r.parent||Cn,Bt(e),a),r.reversed&&e.reverse(),r.paused&&e.paused(!0),r.scrollTrigger&&hc(Bt(e),r.scrollTrigger),e}var s=n.prototype;return s.to=function(a,e,o){return he(0,arguments,this),this},s.from=function(a,e,o){return he(1,arguments,this),this},s.fromTo=function(a,e,o,i){return he(2,arguments,this),this},s.set=function(a,e,o){return e.duration=0,e.parent=this,fe(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new En(a,e,ft(this,o),1),this},s.call=function(a,e,o){return Rt(this,En.delayedCall(0,a,e),o)},s.staggerTo=function(a,e,o,i,l,u,p){return o.duration=e,o.stagger=o.stagger||i,o.onComplete=u,o.onCompleteParams=p,o.parent=this,new En(a,o,ft(this,l)),this},s.staggerFrom=function(a,e,o,i,l,u,p){return o.runBackwards=1,fe(o).immediateRender=Qn(o.immediateRender),this.staggerTo(a,e,o,i,l,u,p)},s.staggerFromTo=function(a,e,o,i,l,u,p,d){return i.startAt=o,fe(i).immediateRender=Qn(i.immediateRender),this.staggerTo(a,e,i,l,u,p,d)},s.render=function(a,e,o){var i=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,p=a<=0?0:Rn(a),d=this._zTime<0!=a<0&&(this._initted||!u),h,c,g,f,m,v,x,_,S,k,b,w;if(this!==Cn&&p>l&&a>=0&&(p=l),p!==this._tTime||o||d){if(i!==this._time&&u&&(p+=this._time-i,a+=this._time-i),h=p,S=this._start,_=this._ts,v=!_,d&&(u||(i=this._zTime),(a||!e)&&(this._zTime=a)),this._repeat){if(b=this._yoyo,m=u+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(m*100+a,e,o);if(h=Rn(p%m),p===l?(f=this._repeat,h=u):(k=Rn(p/m),f=~~k,f&&f===k&&(h=u,f--),h>u&&(h=u)),k=Ys(this._tTime,m),!i&&this._tTime&&k!==f&&this._tTime-k*m-this._dur<=0&&(k=f),b&&f&1&&(h=u-h,w=1),f!==k&&!this._lock){var y=b&&k&1,C=y===(b&&f&1);if(f<k&&(y=!y),i=y?0:p%u?u:p,this._lock=1,this.render(i||(w?0:Rn(f*m)),e,!u)._lock=0,this._tTime=p,!e&&this.parent&&lt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),i&&i!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,C&&(this._lock=2,i=y?u:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Ec(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Wf(this,Rn(i),Rn(h)),x&&(p-=h-(h=x._start))),this._tTime=p,this._time=h,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,i=0),!i&&p&&!e&&!k&&(lt(this,"onStart"),this._tTime!==p))return this;if(h>=i&&a>=0)for(c=this._first;c;){if(g=c._next,(c._act||h>=c._start)&&c._ts&&x!==c){if(c.parent!==this)return this.render(a,e,o);if(c.render(c._ts>0?(h-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(h-c._start)*c._ts,e,o),h!==this._time||!this._ts&&!v){x=0,g&&(p+=this._zTime=-1e-8);break}}c=g}else{c=this._last;for(var P=a<0?a:h;c;){if(g=c._prev,(c._act||P<=c._end)&&c._ts&&x!==c){if(c.parent!==this)return this.render(a,e,o);if(c.render(c._ts>0?(P-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(P-c._start)*c._ts,e,o||Fn&&eo(c)),h!==this._time||!this._ts&&!v){x=0,g&&(p+=this._zTime=P?-1e-8:Hn);break}}c=g}}if(x&&!e&&(this.pause(),x.render(h>=i?0:-1e-8)._zTime=h>=i?1:-1,this._ts))return this._start=S,Sa(this),this.render(a,e,o);this._onUpdate&&!e&&lt(this,"onUpdate",!0),(p===l&&this._tTime>=this.totalDuration()||!p&&i)&&(S===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((a||!u)&&(p===l&&this._ts>0||!p&&this._ts<0)&&ls(this,1),!e&&!(a<0&&!i)&&(p||i||!l)&&(lt(this,p===l&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom())))}return this},s.add=function(a,e){var o=this;if($t(e)||(e=ft(this,e,a)),!(a instanceof Pe)){if(Vn(a))return a.forEach(function(i){return o.add(i,e)}),this;if(Ln(a))return this.addLabel(a,e);if(Pn(a))a=En.delayedCall(0,a);else return this}return this!==a?Rt(this,a,e):this},s.getChildren=function(a,e,o,i){a===void 0&&(a=!0),e===void 0&&(e=!0),o===void 0&&(o=!0),i===void 0&&(i=-1e8);for(var l=[],u=this._first;u;)u._start>=i&&(u instanceof En?e&&l.push(u):(o&&l.push(u),a&&l.push.apply(l,u.getChildren(!0,e,o)))),u=u._next;return l},s.getById=function(a){for(var e=this.getChildren(1,1,1),o=e.length;o--;)if(e[o].vars.id===a)return e[o]},s.remove=function(a){return Ln(a)?this.removeLabel(a):Pn(a)?this.killTweensOf(a):(a.parent===this&&_a(this,a),a===this._recent&&(this._recent=this._last),bs(this))},s.totalTime=function(a,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rn(ot.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),t.prototype.totalTime.call(this,a,e),this._forcing=0,this):this._tTime},s.addLabel=function(a,e){return this.labels[a]=ft(this,e),this},s.removeLabel=function(a){return delete this.labels[a],this},s.addPause=function(a,e,o){var i=En.delayedCall(0,e||Se,o);return i.data="isPause",this._hasPause=1,Rt(this,i,ft(this,a))},s.removePause=function(a){var e=this._first;for(a=ft(this,a);e;)e._start===a&&e.data==="isPause"&&ls(e),e=e._next},s.killTweensOf=function(a,e,o){for(var i=this.getTweensOf(a,o),l=i.length;l--;)ns!==i[l]&&i[l].kill(a,e);return this},s.getTweensOf=function(a,e){for(var o=[],i=ht(a),l=this._first,u=$t(e),p;l;)l instanceof En?Ff(l._targets,i)&&(u?(!ns||l._initted&&l._ts)&&l.globalTime(0)<=e&&l.globalTime(l.totalDuration())>e:!e||l.isActive())&&o.push(l):(p=l.getTweensOf(i,e)).length&&o.push.apply(o,p),l=l._next;return o},s.tweenTo=function(a,e){e=e||{};var o=this,i=ft(o,a),l=e,u=l.startAt,p=l.onStart,d=l.onStartParams,h=l.immediateRender,c,g=En.to(o,ut({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(u&&"time"in u?u.time:o._time))/o.timeScale())||Hn,onStart:function(){if(o.pause(),!c){var m=e.duration||Math.abs((i-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&qs(g,m,0,1).render(g._time,!0,!0),c=1}p&&p.apply(g,d||[])}},e));return h?g.render(0):g},s.tweenFromTo=function(a,e,o){return this.tweenTo(e,ut({startAt:{time:ft(this,a)}},o))},s.recent=function(){return this._recent},s.nextLabel=function(a){return a===void 0&&(a=this._time),mi(this,ft(this,a))},s.previousLabel=function(a){return a===void 0&&(a=this._time),mi(this,ft(this,a),1)},s.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+Hn)},s.shiftChildren=function(a,e,o){o===void 0&&(o=0);for(var i=this._first,l=this.labels,u;i;)i._start>=o&&(i._start+=a,i._end+=a),i=i._next;if(e)for(u in l)l[u]>=o&&(l[u]+=a);return bs(this)},s.invalidate=function(a){var e=this._first;for(this._lock=0;e;)e.invalidate(a),e=e._next;return t.prototype.invalidate.call(this,a)},s.clear=function(a){a===void 0&&(a=!0);for(var e=this._first,o;e;)o=e._next,this.remove(e),e=o;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),bs(this)},s.totalDuration=function(a){var e=0,o=this,i=o._last,l=Ot,u,p,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-a:a));if(o._dirty){for(d=o.parent;i;)u=i._prev,i._dirty&&i.totalDuration(),p=i._start,p>l&&o._sort&&i._ts&&!o._lock?(o._lock=1,Rt(o,i,p-i._delay,1)._lock=0):l=p,p<0&&i._ts&&(e-=p,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=p/o._ts,o._time-=p,o._tTime-=p),o.shiftChildren(-p,!1,-1/0),l=0),i._end>e&&i._ts&&(e=i._end),i=u;qs(o,o===Cn&&o._time>e?o._time:e,1,1),o._dirty=0}return o._tDur},n.updateRoot=function(a){if(Cn._ts&&(cc(Cn,oa(a,Cn)),ic=ot.frame),ot.frame>=di){di+=ct.autoSleep||120;var e=Cn._first;if((!e||!e._ts)&&ct.autoSleep&&ot._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||ot.sleep()}}},n}(Pe);ut(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var oh=function(n,s,r,a,e,o,i){var l=new nt(this._pt,n,s,0,1,Fc,null,e),u=0,p=0,d,h,c,g,f,m,v,x;for(l.b=r,l.e=a,r+="",a+="",(v=~a.indexOf("random("))&&(a=Ce(a)),o&&(x=[r,a],o(x,n,s),r=x[0],a=x[1]),h=r.match(Ua)||[];d=Ua.exec(a);)g=d[0],f=a.substring(u,d.index),c?c=(c+1)%5:f.substr(-5)==="rgba("&&(c=1),g!==h[p++]&&(m=parseFloat(h[p-1])||0,l._pt={_next:l._pt,p:f||p===1?f:",",s:m,c:g.charAt(1)==="="?Bs(m,g)-m:parseFloat(g)-m,m:c&&c<4?Math.round:0},u=Ua.lastIndex);return l.c=u<a.length?a.substring(u,a.length):"",l.fp=i,(sc.test(a)||v)&&(l.e=0),this._pt=l,l},ao=function(n,s,r,a,e,o,i,l,u,p){Pn(a)&&(a=a(e||0,n,o));var d=n[s],h=r!=="get"?r:Pn(d)?u?n[s.indexOf("set")||!Pn(n["get"+s.substr(3)])?s:"get"+s.substr(3)](u):n[s]():d,c=Pn(d)?u?uh:Lc:oo,g;if(Ln(a)&&(~a.indexOf("random(")&&(a=Ce(a)),a.charAt(1)==="="&&(g=Bs(h,a)+(Nn(h)||0),(g||g===0)&&(a=g))),!p||h!==a||vr)return!isNaN(h*a)&&a!==""?(g=new nt(this._pt,n,s,+h||0,a-(h||0),typeof d=="boolean"?fh:Dc,0,c),u&&(g.fp=u),i&&g.modifier(i,this,n),this._pt=g):(!d&&!(s in n)&&Jr(s,a),oh.call(this,n,s,h,a,c,l||ct.stringFilter,u))},ih=function(n,s,r,a,e){if(Pn(n)&&(n=ge(n,e,s,r,a)),!Lt(n)||n.style&&n.nodeType||Vn(n)||nc(n))return Ln(n)?ge(n,e,s,r,a):n;var o={},i;for(i in n)o[i]=ge(n[i],e,s,r,a);return o},Ic=function(n,s,r,a,e,o){var i,l,u,p;if(rt[n]&&(i=new rt[n]).init(e,i.rawVars?s[n]:ih(s[n],a,e,o,r),r,a,o)!==!1&&(r._pt=l=new nt(r._pt,e,n,0,1,i.render,i,0,i.priority),r!==Is))for(u=r._ptLookup[r._targets.indexOf(e)],p=i._props.length;p--;)u[i._props[p]]=l;return i},ns,vr,ro=function t(n,s,r){var a=n.vars,e=a.ease,o=a.startAt,i=a.immediateRender,l=a.lazy,u=a.onUpdate,p=a.runBackwards,d=a.yoyoEase,h=a.keyframes,c=a.autoRevert,g=n._dur,f=n._startAt,m=n._targets,v=n.parent,x=v&&v.data==="nested"?v.vars.targets:m,_=n._overwrite==="auto"&&!Kr,S=n.timeline,k,b,w,y,C,P,M,T,I,O,D,U,F;if(S&&(!h||!e)&&(e="none"),n._ease=ws(e,Vs.ease),n._yEase=d?Mc(ws(d===!0?e:d,Vs.ease)):0,d&&n._yoyo&&!n._repeat&&(d=n._yEase,n._yEase=n._ease,n._ease=d),n._from=!S&&!!a.runBackwards,!S||h&&!a.stagger){if(T=m[0]?xs(m[0]).harness:0,U=T&&a[T.prop],k=ra(a,no),f&&(f._zTime<0&&f.progress(1),s<0&&p&&i&&!c?f.render(-1,!0):f.revert(p&&g?Ve:Lf),f._lazy=0),o){if(ls(n._startAt=En.set(m,ut({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!f&&Qn(l),startAt:null,delay:0,onUpdate:u&&function(){return lt(n,"onUpdate")},stagger:0},o))),n._startAt._dp=0,n._startAt._sat=n,s<0&&(Fn||!i&&!c)&&n._startAt.revert(Ve),i&&g&&s<=0&&r<=0){s&&(n._zTime=s);return}}else if(p&&g&&!f){if(s&&(i=!1),w=ut({overwrite:!1,data:"isFromStart",lazy:i&&!f&&Qn(l),immediateRender:i,stagger:0,parent:v},k),U&&(w[T.prop]=U),ls(n._startAt=En.set(m,w)),n._startAt._dp=0,n._startAt._sat=n,s<0&&(Fn?n._startAt.revert(Ve):n._startAt.render(-1,!0)),n._zTime=s,!i)t(n._startAt,Hn,Hn);else if(!s)return}for(n._pt=n._ptCache=0,l=g&&Qn(l)||l&&!g,b=0;b<m.length;b++){if(C=m[b],M=C._gsap||so(m)[b]._gsap,n._ptLookup[b]=O={},dr[M.id]&&as.length&&aa(),D=x===m?b:x.indexOf(C),T&&(I=new T).init(C,U||k,n,D,x)!==!1&&(n._pt=y=new nt(n._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){O[W]=y}),I.priority&&(P=1)),!T||U)for(w in k)rt[w]&&(I=Ic(w,k,n,D,C,x))?I.priority&&(P=1):O[w]=y=ao.call(n,C,w,"get",k[w],D,x,0,a.stringFilter);n._op&&n._op[b]&&n.kill(C,n._op[b]),_&&n._pt&&(ns=n,Cn.killTweensOf(C,O,n.globalTime(s)),F=!n.parent,ns=0),n._pt&&l&&(dr[M.id]=1)}P&&zc(n),n._onInit&&n._onInit(n)}n._onUpdate=u,n._initted=(!n._op||n._pt)&&!F,h&&s<=0&&S.render(Ot,!0,!0)},lh=function(n,s,r,a,e,o,i,l){var u=(n._pt&&n._ptCache||(n._ptCache={}))[s],p,d,h,c;if(!u)for(u=n._ptCache[s]=[],h=n._ptLookup,c=n._targets.length;c--;){if(p=h[c][s],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==s&&p.fp!==s;)p=p._next;if(!p)return vr=1,n.vars[s]="+=0",ro(n,i),vr=0,l?_e(s+" not eligible for reset"):1;u.push(p)}for(c=u.length;c--;)d=u[c],p=d._pt||d,p.s=(a||a===0)&&!e?a:p.s+(a||0)+o*p.c,p.c=r-p.s,d.e&&(d.e=Mn(r)+Nn(d.e)),d.b&&(d.b=p.s+Nn(d.b))},ch=function(n,s){var r=n[0]?xs(n[0]).harness:0,a=r&&r.aliases,e,o,i,l;if(!a)return s;e=$s({},s);for(o in a)if(o in e)for(l=a[o].split(","),i=l.length;i--;)e[l[i]]=e[o];return e},ph=function(n,s,r,a){var e=s.ease||a||"power1.inOut",o,i;if(Vn(s))i=r[n]||(r[n]=[]),s.forEach(function(l,u){return i.push({t:u/(s.length-1)*100,v:l,e})});else for(o in s)i=r[o]||(r[o]=[]),o==="ease"||i.push({t:parseFloat(n),v:s[o],e})},ge=function(n,s,r,a,e){return Pn(n)?n.call(s,r,a,e):Ln(n)&&~n.indexOf("random(")?Ce(n):n},Oc=to+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jc={};Jn(Oc+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return jc[t]=1});var En=function(t){Ql(n,t);function n(r,a,e,o){var i;typeof a=="number"&&(e.duration=a,a=e,e=null),i=t.call(this,o?a:fe(a))||this;var l=i.vars,u=l.duration,p=l.delay,d=l.immediateRender,h=l.stagger,c=l.overwrite,g=l.keyframes,f=l.defaults,m=l.scrollTrigger,v=l.yoyoEase,x=a.parent||Cn,_=(Vn(r)||nc(r)?$t(r[0]):"length"in a)?[r]:ht(r),S,k,b,w,y,C,P,M;if(i._targets=_.length?so(_):_e("GSAP target "+r+" not found. https://gsap.com",!ct.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=c,g||h||Fe(u)||Fe(p)){if(a=i.vars,S=i.timeline=new Xn({data:"nested",defaults:f||{},targets:x&&x.data==="nested"?x.vars.targets:_}),S.kill(),S.parent=S._dp=Bt(i),S._start=0,h||Fe(u)||Fe(p)){if(w=_.length,P=h&&vc(h),Lt(h))for(y in h)~Oc.indexOf(y)&&(M||(M={}),M[y]=h[y]);for(k=0;k<w;k++)b=ra(a,jc),b.stagger=0,v&&(b.yoyoEase=v),M&&$s(b,M),C=_[k],b.duration=+ge(u,Bt(i),k,C,_),b.delay=(+ge(p,Bt(i),k,C,_)||0)-i._delay,!h&&w===1&&b.delay&&(i._delay=p=b.delay,i._start+=p,b.delay=0),S.to(C,b,P?P(k,C,_):0),S._ease=fn.none;S.duration()?u=p=0:i.timeline=0}else if(g){fe(ut(S.vars.defaults,{ease:"none"})),S._ease=ws(g.ease||a.ease||"none");var T=0,I,O,D;if(Vn(g))g.forEach(function(U){return S.to(_,U,">")}),S.duration();else{b={};for(y in g)y==="ease"||y==="easeEach"||ph(y,g[y],b,g.easeEach);for(y in b)for(I=b[y].sort(function(U,F){return U.t-F.t}),T=0,k=0;k<I.length;k++)O=I[k],D={ease:O.e,duration:(O.t-(k?I[k-1].t:0))/100*u},D[y]=O.v,S.to(_,D,T),T+=D.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||i.duration(u=S.duration())}else i.timeline=0;return c===!0&&!Kr&&(ns=Bt(i),Cn.killTweensOf(_),ns=0),Rt(x,Bt(i),e),a.reversed&&i.reverse(),a.paused&&i.paused(!0),(d||!u&&!g&&i._start===Rn(x._time)&&Qn(d)&&Gf(Bt(i))&&x.data!=="nested")&&(i._tTime=-1e-8,i.render(Math.max(0,-p)||0)),m&&hc(Bt(i),m),i}var s=n.prototype;return s.render=function(a,e,o){var i=this._time,l=this._tDur,u=this._dur,p=a<0,d=a>l-Hn&&!p?l:a<Hn?0:a,h,c,g,f,m,v,x,_,S;if(!u)Hf(this,a,e,o);else if(d!==this._tTime||!a||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(h=d,_=this.timeline,this._repeat){if(f=u+this._rDelay,this._repeat<-1&&p)return this.totalTime(f*100+a,e,o);if(h=Rn(d%f),d===l?(g=this._repeat,h=u):(m=Rn(d/f),g=~~m,g&&g===m?(h=u,g--):h>u&&(h=u)),v=this._yoyo&&g&1,v&&(S=this._yEase,h=u-h),m=Ys(this._tTime,f),h===i&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(_&&this._yEase&&Ec(_,v),this.vars.repeatRefresh&&!v&&!this._lock&&h!==f&&this._initted&&(this._lock=o=1,this.render(Rn(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(gc(this,p?a:h,o,e,d))return this._tTime=0,this;if(i!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(a,e,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(h/u),this._from&&(this.ratio=x=1-x),!i&&d&&!e&&!m&&(lt(this,"onStart"),this._tTime!==d))return this;for(c=this._pt;c;)c.r(x,c.d),c=c._next;_&&_.render(a<0?a:_._dur*_._ease(h/this._dur),e,o)||this._startAt&&(this._zTime=a),this._onUpdate&&!e&&(p&&fr(this,a,e,o),lt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!e&&this.parent&&lt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(p&&!this._onUpdate&&fr(this,a,!0,!0),(a||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ls(this,1),!e&&!(p&&!i)&&(d||i||v)&&(lt(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},s.targets=function(){return this._targets},s.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),t.prototype.invalidate.call(this,a)},s.resetTo=function(a,e,o,i,l){Te||ot.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||ro(this,u),p=this._ease(u/this._dur),lh(this,a,e,o,i,p,u,l)?this.resetTo(a,e,o,i,1):(Ca(this,0),this.parent||dc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},s.kill=function(a,e){if(e===void 0&&(e="all"),!a&&(!e||e==="all"))return this._lazy=this._pt=0,this.parent?ee(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(a,e,ns&&ns.vars.overwrite!==!0)._first||ee(this),this.parent&&o!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/o,0,1),this}var i=this._targets,l=a?ht(a):i,u=this._ptLookup,p=this._pt,d,h,c,g,f,m,v;if((!e||e==="all")&&Bf(i,l))return e==="all"&&(this._pt=0),ee(this);for(d=this._op=this._op||[],e!=="all"&&(Ln(e)&&(f={},Jn(e,function(x){return f[x]=1}),e=f),e=ch(i,e)),v=i.length;v--;)if(~l.indexOf(i[v])){h=u[v],e==="all"?(d[v]=e,g=h,c={}):(c=d[v]=d[v]||{},g=e);for(f in g)m=h&&h[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&_a(this,m,"_pt"),delete h[f]),c!=="all"&&(c[f]=1)}return this._initted&&!this._pt&&p&&ee(this),this},n.to=function(a,e){return new n(a,e,arguments[2])},n.from=function(a,e){return he(1,arguments)},n.delayedCall=function(a,e,o,i){return new n(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:e,onReverseComplete:e,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:i})},n.fromTo=function(a,e,o){return he(2,arguments)},n.set=function(a,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new n(a,e)},n.killTweensOf=function(a,e,o){return Cn.killTweensOf(a,e,o)},n}(Pe);ut(En.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(t){En[t]=function(){var n=new Xn,s=gr.call(arguments,0);return s.splice(t==="staggerFromTo"?5:4,0,0),n[t].apply(n,s)}});var oo=function(n,s,r){return n[s]=r},Lc=function(n,s,r){return n[s](r)},uh=function(n,s,r,a){return n[s](a.fp,r)},dh=function(n,s,r){return n.setAttribute(s,r)},io=function(n,s){return Pn(n[s])?Lc:Xr(n[s])&&n.setAttribute?dh:oo},Dc=function(n,s){return s.set(s.t,s.p,Math.round((s.s+s.c*n)*1e6)/1e6,s)},fh=function(n,s){return s.set(s.t,s.p,!!(s.s+s.c*n),s)},Fc=function(n,s){var r=s._pt,a="";if(!n&&s.b)a=s.b;else if(n===1&&s.e)a=s.e;else{for(;r;)a=r.p+(r.m?r.m(r.s+r.c*n):Math.round((r.s+r.c*n)*1e4)/1e4)+a,r=r._next;a+=s.c}s.set(s.t,s.p,a,s)},lo=function(n,s){for(var r=s._pt;r;)r.r(n,r.d),r=r._next},hh=function(n,s,r,a){for(var e=this._pt,o;e;)o=e._next,e.p===a&&e.modifier(n,s,r),e=o},gh=function(n){for(var s=this._pt,r,a;s;)a=s._next,s.p===n&&!s.op||s.op===n?_a(this,s,"_pt"):s.dep||(r=1),s=a;return!r},mh=function(n,s,r,a){a.mSet(n,s,a.m.call(a.tween,r,a.mt),a)},zc=function(n){for(var s=n._pt,r,a,e,o;s;){for(r=s._next,a=e;a&&a.pr>s.pr;)a=a._next;(s._prev=a?a._prev:o)?s._prev._next=s:e=s,(s._next=a)?a._prev=s:o=s,s=r}n._pt=e},nt=function(){function t(s,r,a,e,o,i,l,u,p){this.t=r,this.s=e,this.c=o,this.p=a,this.r=i||Dc,this.d=l||this,this.set=u||oo,this.pr=p||0,this._next=s,s&&(s._prev=this)}var n=t.prototype;return n.modifier=function(r,a,e){this.mSet=this.mSet||this.set,this.set=mh,this.m=r,this.mt=e,this.tween=a},t}();Jn(to+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return no[t]=1});pt.TweenMax=pt.TweenLite=En;pt.TimelineLite=pt.TimelineMax=Xn;Cn=new Xn({sortChildren:!1,defaults:Vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ct.stringFilter=Pc;var _s=[],Ye={},kh=[],vi=0,vh=0,Va=function(n){return(Ye[n]||kh).map(function(s){return s()})},yr=function(){var n=Date.now(),s=[];n-vi>2&&(Va("matchMediaInit"),_s.forEach(function(r){var a=r.queries,e=r.conditions,o,i,l,u;for(i in a)o=Mt.matchMedia(a[i]).matches,o&&(l=1),o!==e[i]&&(e[i]=o,u=1);u&&(r.revert(),l&&s.push(r))}),Va("matchMediaRevert"),s.forEach(function(r){return r.onMatch(r,function(a){return r.add(null,a)})}),vi=n,Va("matchMedia"))},Bc=function(){function t(s,r){this.selector=r&&mr(r),this.data=[],this._r=[],this.isReverted=!1,this.id=vh++,s&&this.add(s)}var n=t.prototype;return n.add=function(r,a,e){Pn(r)&&(e=a,a=r,r=Pn);var o=this,i=function(){var u=_n,p=o.selector,d;return u&&u!==o&&u.data.push(o),e&&(o.selector=mr(e)),_n=o,d=a.apply(o,arguments),Pn(d)&&o._r.push(d),_n=u,o.selector=p,o.isReverted=!1,d};return o.last=i,r===Pn?i(o,function(l){return o.add(null,l)}):r?o[r]=i:i},n.ignore=function(r){var a=_n;_n=null,r(this),_n=a},n.getTweens=function(){var r=[];return this.data.forEach(function(a){return a instanceof t?r.push.apply(r,a.getTweens()):a instanceof En&&!(a.parent&&a.parent.data==="nested")&&r.push(a)}),r},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(r,a){var e=this;if(r?function(){for(var i=e.getTweens(),l=e.data.length,u;l--;)u=e.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(p){return i.splice(i.indexOf(p),1)}));for(i.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,d){return d.g-p.g||-1/0}).forEach(function(p){return p.t.revert(r)}),l=e.data.length;l--;)u=e.data[l],u instanceof Xn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof En)&&u.revert&&u.revert(r);e._r.forEach(function(p){return p(r,e)}),e.isReverted=!0}():this.data.forEach(function(i){return i.kill&&i.kill()}),this.clear(),a)for(var o=_s.length;o--;)_s[o].id===this.id&&_s.splice(o,1)},n.revert=function(r){this.kill(r||{})},t}(),yh=function(){function t(s){this.contexts=[],this.scope=s,_n&&_n.data.push(this)}var n=t.prototype;return n.add=function(r,a,e){Lt(r)||(r={matches:r});var o=new Bc(0,e||this.scope),i=o.conditions={},l,u,p;_n&&!o.selector&&(o.selector=_n.selector),this.contexts.push(o),a=o.add("onMatch",a),o.queries=r;for(u in r)u==="all"?p=1:(l=Mt.matchMedia(r[u]),l&&(_s.indexOf(o)<0&&_s.push(o),(i[u]=l.matches)&&(p=1),l.addListener?l.addListener(yr):l.addEventListener("change",yr)));return p&&a(o,function(d){return o.add(null,d)}),this},n.revert=function(r){this.kill(r||{})},n.kill=function(r){this.contexts.forEach(function(a){return a.kill(r,!0)})},t}(),ia={registerPlugin:function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];s.forEach(function(a){return Sc(a)})},timeline:function(n){return new Xn(n)},getTweensOf:function(n,s){return Cn.getTweensOf(n,s)},getProperty:function(n,s,r,a){Ln(n)&&(n=ht(n)[0]);var e=xs(n||{}).get,o=r?uc:pc;return r==="native"&&(r=""),n&&(s?o((rt[s]&&rt[s].get||e)(n,s,r,a)):function(i,l,u){return o((rt[i]&&rt[i].get||e)(n,i,l,u))})},quickSetter:function(n,s,r){if(n=ht(n),n.length>1){var a=n.map(function(p){return st.quickSetter(p,s,r)}),e=a.length;return function(p){for(var d=e;d--;)a[d](p)}}n=n[0]||{};var o=rt[s],i=xs(n),l=i.harness&&(i.harness.aliases||{})[s]||s,u=o?function(p){var d=new o;Is._pt=0,d.init(n,r?p+r:p,Is,0,[n]),d.render(1,d),Is._pt&&lo(1,Is)}:i.set(n,l);return o?u:function(p){return u(n,l,r?p+r:p,i,1)}},quickTo:function(n,s,r){var a,e=st.to(n,ut((a={},a[s]="+=0.1",a.paused=!0,a.stagger=0,a),r||{})),o=function(l,u,p){return e.resetTo(s,l,u,p)};return o.tween=e,o},isTweening:function(n){return Cn.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=ws(n.ease,Vs.ease)),fi(Vs,n||{})},config:function(n){return fi(ct,n||{})},registerEffect:function(n){var s=n.name,r=n.effect,a=n.plugins,e=n.defaults,o=n.extendTimeline;(a||"").split(",").forEach(function(i){return i&&!rt[i]&&!pt[i]&&_e(s+" effect requires "+i+" plugin.")}),Ga[s]=function(i,l,u){return r(ht(i),ut(l||{},e),u)},o&&(Xn.prototype[s]=function(i,l,u){return this.add(Ga[s](i,Lt(l)?l:(u=l)&&{},this),u)})},registerEase:function(n,s){fn[n]=ws(s)},parseEase:function(n,s){return arguments.length?ws(n,s):fn},getById:function(n){return Cn.getById(n)},exportRoot:function(n,s){n===void 0&&(n={});var r=new Xn(n),a,e;for(r.smoothChildTiming=Qn(n.smoothChildTiming),Cn.remove(r),r._dp=0,r._time=r._tTime=Cn._time,a=Cn._first;a;)e=a._next,(s||!(!a._dur&&a instanceof En&&a.vars.onComplete===a._targets[0]))&&Rt(r,a,a._start-a._delay),a=e;return Rt(Cn,r,0),r},context:function(n,s){return n?new Bc(n,s):_n},matchMedia:function(n){return new yh(n)},matchMediaRefresh:function(){return _s.forEach(function(n){var s=n.conditions,r,a;for(a in s)s[a]&&(s[a]=!1,r=1);r&&n.revert()})||yr()},addEventListener:function(n,s){var r=Ye[n]||(Ye[n]=[]);~r.indexOf(s)||r.push(s)},removeEventListener:function(n,s){var r=Ye[n],a=r&&r.indexOf(s);a>=0&&r.splice(a,1)},utils:{wrap:Zf,wrapYoyo:Qf,distribute:vc,random:xc,snap:yc,normalize:Xf,getUnit:Nn,clamp:$f,splitColor:Cc,toArray:ht,selector:mr,mapRange:wc,pipe:qf,unitize:Kf,interpolate:Jf,shuffle:kc},install:rc,effects:Ga,ticker:ot,updateRoot:Xn.updateRoot,plugins:rt,globalTimeline:Cn,core:{PropTween:nt,globals:oc,Tween:En,Timeline:Xn,Animation:Pe,getCache:xs,_removeLinkedListItem:_a,reverting:function(){return Fn},context:function(n){return n&&_n&&(_n.data.push(n),n._ctx=_n),_n},suppressOverwrites:function(n){return Kr=n}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ia[t]=En[t]});ot.add(Xn.updateRoot);Is=ia.to({},{duration:0});var xh=function(n,s){for(var r=n._pt;r&&r.p!==s&&r.op!==s&&r.fp!==s;)r=r._next;return r},bh=function(n,s){var r=n._targets,a,e,o;for(a in s)for(e=r.length;e--;)o=n._ptLookup[e][a],o&&(o=o.d)&&(o._pt&&(o=xh(o,a)),o&&o.modifier&&o.modifier(s[a],n,r[e],a))},$a=function(n,s){return{name:n,headless:1,rawVars:1,init:function(a,e,o){o._onInit=function(i){var l,u;if(Ln(e)&&(l={},Jn(e,function(p){return l[p]=1}),e=l),s){l={};for(u in e)l[u]=s(e[u]);e=l}bh(i,e)}}}},st=ia.registerPlugin({name:"attr",init:function(n,s,r,a,e){var o,i,l;this.tween=r;for(o in s)l=n.getAttribute(o)||"",i=this.add(n,"setAttribute",(l||0)+"",s[o],a,e,0,0,o),i.op=o,i.b=l,this._props.push(o)},render:function(n,s){for(var r=s._pt;r;)Fn?r.set(r.t,r.p,r.b,r):r.r(n,r.d),r=r._next}},{name:"endArray",headless:1,init:function(n,s){for(var r=s.length;r--;)this.add(n,r,n[r]||0,s[r],0,0,0,0,0,1)}},$a("roundProps",kr),$a("modifiers"),$a("snap",yc))||ia;En.version=Xn.version=st.version="3.13.0";ac=1;Zr()&&Ks();fn.Power0;fn.Power1;fn.Power2;fn.Power3;fn.Power4;fn.Linear;fn.Quad;fn.Cubic;fn.Quart;fn.Quint;fn.Strong;fn.Elastic;fn.Back;fn.SteppedEase;fn.Bounce;fn.Sine;fn.Expo;fn.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yi,ts,Us,co,vs,xi,po,wh=function(){return typeof window<"u"},Yt={},ks=180/Math.PI,Gs=Math.PI/180,Ms=Math.atan2,bi=1e8,uo=/([A-Z])/g,_h=/(left|right|width|margin|padding|x)/i,Sh=/[\s,\(]\S/,At={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xr=function(n,s){return s.set(s.t,s.p,Math.round((s.s+s.c*n)*1e4)/1e4+s.u,s)},Ch=function(n,s){return s.set(s.t,s.p,n===1?s.e:Math.round((s.s+s.c*n)*1e4)/1e4+s.u,s)},Th=function(n,s){return s.set(s.t,s.p,n?Math.round((s.s+s.c*n)*1e4)/1e4+s.u:s.b,s)},Ph=function(n,s){var r=s.s+s.c*n;s.set(s.t,s.p,~~(r+(r<0?-.5:.5))+s.u,s)},Uc=function(n,s){return s.set(s.t,s.p,n?s.e:s.b,s)},Gc=function(n,s){return s.set(s.t,s.p,n!==1?s.b:s.e,s)},Mh=function(n,s,r){return n.style[s]=r},Eh=function(n,s,r){return n.style.setProperty(s,r)},Rh=function(n,s,r){return n._gsap[s]=r},Ah=function(n,s,r){return n._gsap.scaleX=n._gsap.scaleY=r},Ih=function(n,s,r,a,e){var o=n._gsap;o.scaleX=o.scaleY=r,o.renderTransform(e,o)},Oh=function(n,s,r,a,e){var o=n._gsap;o[s]=r,o.renderTransform(e,o)},Tn="transform",tt=Tn+"Origin",jh=function t(n,s){var r=this,a=this.target,e=a.style,o=a._gsap;if(n in Yt&&e){if(this.tfm=this.tfm||{},n!=="transform")n=At[n]||n,~n.indexOf(",")?n.split(",").forEach(function(i){return r.tfm[i]=Ut(a,i)}):this.tfm[n]=o.x?o[n]:Ut(a,n),n===tt&&(this.tfm.zOrigin=o.zOrigin);else return At.transform.split(",").forEach(function(i){return t.call(r,i,s)});if(this.props.indexOf(Tn)>=0)return;o.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(tt,s,"")),n=Tn}(e||s)&&this.props.push(n,s,e[n])},Nc=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Lh=function(){var n=this.props,s=this.target,r=s.style,a=s._gsap,e,o;for(e=0;e<n.length;e+=3)n[e+1]?n[e+1]===2?s[n[e]](n[e+2]):s[n[e]]=n[e+2]:n[e+2]?r[n[e]]=n[e+2]:r.removeProperty(n[e].substr(0,2)==="--"?n[e]:n[e].replace(uo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)a[o]=this.tfm[o];a.svg&&(a.renderTransform(),s.setAttribute("data-svg-origin",this.svgo||"")),e=po(),(!e||!e.isStart)&&!r[Tn]&&(Nc(r),a.zOrigin&&r[tt]&&(r[tt]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},Hc=function(n,s){var r={target:n,props:[],revert:Lh,save:jh};return n._gsap||st.core.getCache(n),s&&n.style&&n.nodeType&&s.split(",").forEach(function(a){return r.save(a)}),r},Wc,br=function(n,s){var r=ts.createElementNS?ts.createElementNS((s||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):ts.createElement(n);return r&&r.style?r:ts.createElement(n)},gt=function t(n,s,r){var a=getComputedStyle(n);return a[s]||a.getPropertyValue(s.replace(uo,"-$1").toLowerCase())||a.getPropertyValue(s)||!r&&t(n,Xs(s)||s,1)||""},wi="O,Moz,ms,Ms,Webkit".split(","),Xs=function(n,s,r){var a=s||vs,e=a.style,o=5;if(n in e&&!r)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(wi[o]+n in e););return o<0?null:(o===3?"ms":o>=0?wi[o]:"")+n},wr=function(){wh()&&window.document&&(yi=window,ts=yi.document,Us=ts.documentElement,vs=br("div")||{style:{}},br("div"),Tn=Xs(Tn),tt=Tn+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wc=!!Xs("perspective"),po=st.core.reverting,co=1)},_i=function(n){var s=n.ownerSVGElement,r=br("svg",s&&s.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=n.cloneNode(!0),e;a.style.display="block",r.appendChild(a),Us.appendChild(r);try{e=a.getBBox()}catch{}return r.removeChild(a),Us.removeChild(r),e},Si=function(n,s){for(var r=s.length;r--;)if(n.hasAttribute(s[r]))return n.getAttribute(s[r])},Vc=function(n){var s,r;try{s=n.getBBox()}catch{s=_i(n),r=1}return s&&(s.width||s.height)||r||(s=_i(n)),s&&!s.width&&!s.x&&!s.y?{x:+Si(n,["x","cx","x1"])||0,y:+Si(n,["y","cy","y1"])||0,width:0,height:0}:s},$c=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&Vc(n))},Ss=function(n,s){if(s){var r=n.style,a;s in Yt&&s!==tt&&(s=Tn),r.removeProperty?(a=s.substr(0,2),(a==="ms"||s.substr(0,6)==="webkit")&&(s="-"+s),r.removeProperty(a==="--"?s:s.replace(uo,"-$1").toLowerCase())):r.removeAttribute(s)}},ss=function(n,s,r,a,e,o){var i=new nt(n._pt,s,r,0,1,o?Gc:Uc);return n._pt=i,i.b=a,i.e=e,n._props.push(r),i},Ci={deg:1,rad:1,turn:1},Dh={grid:1,flex:1},cs=function t(n,s,r,a){var e=parseFloat(r)||0,o=(r+"").trim().substr((e+"").length)||"px",i=vs.style,l=_h.test(s),u=n.tagName.toLowerCase()==="svg",p=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=a==="px",c=a==="%",g,f,m,v;if(a===o||!e||Ci[a]||Ci[o])return e;if(o!=="px"&&!h&&(e=t(n,s,r,"px")),v=n.getCTM&&$c(n),(c||o==="%")&&(Yt[s]||~s.indexOf("adius")))return g=v?n.getBBox()[l?"width":"height"]:n[p],Mn(c?e/g*d:e/100*g);if(i[l?"width":"height"]=d+(h?o:a),f=a!=="rem"&&~s.indexOf("adius")||a==="em"&&n.appendChild&&!u?n:n.parentNode,v&&(f=(n.ownerSVGElement||{}).parentNode),(!f||f===ts||!f.appendChild)&&(f=ts.body),m=f._gsap,m&&c&&m.width&&l&&m.time===ot.time&&!m.uncache)return Mn(e/m.width*d);if(c&&(s==="height"||s==="width")){var x=n.style[s];n.style[s]=d+a,g=n[p],x?n.style[s]=x:Ss(n,s)}else(c||o==="%")&&!Dh[gt(f,"display")]&&(i.position=gt(n,"position")),f===n&&(i.position="static"),f.appendChild(vs),g=vs[p],f.removeChild(vs),i.position="absolute";return l&&c&&(m=xs(f),m.time=ot.time,m.width=f[p]),Mn(h?g*e/d:g&&e?d/g*e:0)},Ut=function(n,s,r,a){var e;return co||wr(),s in At&&s!=="transform"&&(s=At[s],~s.indexOf(",")&&(s=s.split(",")[0])),Yt[s]&&s!=="transform"?(e=Ee(n,a),e=s!=="transformOrigin"?e[s]:e.svg?e.origin:ca(gt(n,tt))+" "+e.zOrigin+"px"):(e=n.style[s],(!e||e==="auto"||a||~(e+"").indexOf("calc("))&&(e=la[s]&&la[s](n,s,r)||gt(n,s)||lc(n,s)||(s==="opacity"?1:0))),r&&!~(e+"").trim().indexOf(" ")?cs(n,s,e,r)+r:e},Fh=function(n,s,r,a){if(!r||r==="none"){var e=Xs(s,n,1),o=e&&gt(n,e,1);o&&o!==r?(s=e,r=o):s==="borderColor"&&(r=gt(n,"borderTopColor"))}var i=new nt(this._pt,n.style,s,0,1,Fc),l=0,u=0,p,d,h,c,g,f,m,v,x,_,S,k;if(i.b=r,i.e=a,r+="",a+="",a.substring(0,6)==="var(--"&&(a=gt(n,a.substring(4,a.indexOf(")")))),a==="auto"&&(f=n.style[s],n.style[s]=a,a=gt(n,s)||a,f?n.style[s]=f:Ss(n,s)),p=[r,a],Pc(p),r=p[0],a=p[1],h=r.match(As)||[],k=a.match(As)||[],k.length){for(;d=As.exec(a);)m=d[0],x=a.substring(l,d.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(f=h[u++]||"")&&(c=parseFloat(f)||0,S=f.substr((c+"").length),m.charAt(1)==="="&&(m=Bs(c,m)+S),v=parseFloat(m),_=m.substr((v+"").length),l=As.lastIndex-_.length,_||(_=_||ct.units[s]||S,l===a.length&&(a+=_,i.e+=_)),S!==_&&(c=cs(n,s,f,_)||0),i._pt={_next:i._pt,p:x||u===1?x:",",s:c,c:v-c,m:g&&g<4||s==="zIndex"?Math.round:0});i.c=l<a.length?a.substring(l,a.length):""}else i.r=s==="display"&&a==="none"?Gc:Uc;return sc.test(a)&&(i.e=0),this._pt=i,i},Ti={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zh=function(n){var s=n.split(" "),r=s[0],a=s[1]||"50%";return(r==="top"||r==="bottom"||a==="left"||a==="right")&&(n=r,r=a,a=n),s[0]=Ti[r]||r,s[1]=Ti[a]||a,s.join(" ")},Bh=function(n,s){if(s.tween&&s.tween._time===s.tween._dur){var r=s.t,a=r.style,e=s.u,o=r._gsap,i,l,u;if(e==="all"||e===!0)a.cssText="",l=1;else for(e=e.split(","),u=e.length;--u>-1;)i=e[u],Yt[i]&&(l=1,i=i==="transformOrigin"?tt:Tn),Ss(r,i);l&&(Ss(r,Tn),o&&(o.svg&&r.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",Ee(r,1),o.uncache=1,Nc(a)))}},la={clearProps:function(n,s,r,a,e){if(e.data!=="isFromStart"){var o=n._pt=new nt(n._pt,s,r,0,0,Bh);return o.u=a,o.pr=-10,o.tween=e,n._props.push(r),1}}},Me=[1,0,0,1,0,0],Yc={},qc=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Pi=function(n){var s=gt(n,Tn);return qc(s)?Me:s.substr(7).match(tc).map(Mn)},fo=function(n,s){var r=n._gsap||xs(n),a=n.style,e=Pi(n),o,i,l,u;return r.svg&&n.getAttribute("transform")?(l=n.transform.baseVal.consolidate().matrix,e=[l.a,l.b,l.c,l.d,l.e,l.f],e.join(",")==="1,0,0,1,0,0"?Me:e):(e===Me&&!n.offsetParent&&n!==Us&&!r.svg&&(l=a.display,a.display="block",o=n.parentNode,(!o||!n.offsetParent&&!n.getBoundingClientRect().width)&&(u=1,i=n.nextElementSibling,Us.appendChild(n)),e=Pi(n),l?a.display=l:Ss(n,"display"),u&&(i?o.insertBefore(n,i):o?o.appendChild(n):Us.removeChild(n))),s&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e)},_r=function(n,s,r,a,e,o){var i=n._gsap,l=e||fo(n,!0),u=i.xOrigin||0,p=i.yOrigin||0,d=i.xOffset||0,h=i.yOffset||0,c=l[0],g=l[1],f=l[2],m=l[3],v=l[4],x=l[5],_=s.split(" "),S=parseFloat(_[0])||0,k=parseFloat(_[1])||0,b,w,y,C;r?l!==Me&&(w=c*m-g*f)&&(y=S*(m/w)+k*(-f/w)+(f*x-m*v)/w,C=S*(-g/w)+k*(c/w)-(c*x-g*v)/w,S=y,k=C):(b=Vc(n),S=b.x+(~_[0].indexOf("%")?S/100*b.width:S),k=b.y+(~(_[1]||_[0]).indexOf("%")?k/100*b.height:k)),a||a!==!1&&i.smooth?(v=S-u,x=k-p,i.xOffset=d+(v*c+x*f)-v,i.yOffset=h+(v*g+x*m)-x):i.xOffset=i.yOffset=0,i.xOrigin=S,i.yOrigin=k,i.smooth=!!a,i.origin=s,i.originIsAbsolute=!!r,n.style[tt]="0px 0px",o&&(ss(o,i,"xOrigin",u,S),ss(o,i,"yOrigin",p,k),ss(o,i,"xOffset",d,i.xOffset),ss(o,i,"yOffset",h,i.yOffset)),n.setAttribute("data-svg-origin",S+" "+k)},Ee=function(n,s){var r=n._gsap||new Ac(n);if("x"in r&&!s&&!r.uncache)return r;var a=n.style,e=r.scaleX<0,o="px",i="deg",l=getComputedStyle(n),u=gt(n,tt)||"0",p,d,h,c,g,f,m,v,x,_,S,k,b,w,y,C,P,M,T,I,O,D,U,F,W,nn,on,cn,en,un,pn,dn;return p=d=h=f=m=v=x=_=S=0,c=g=1,r.svg=!!(n.getCTM&&$c(n)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(a[Tn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tn]!=="none"?l[Tn]:"")),a.scale=a.rotate=a.translate="none"),w=fo(n,r.svg),r.svg&&(r.uncache?(W=n.getBBox(),u=r.xOrigin-W.x+"px "+(r.yOrigin-W.y)+"px",F=""):F=!s&&n.getAttribute("data-svg-origin"),_r(n,F||u,!!F||r.originIsAbsolute,r.smooth!==!1,w)),k=r.xOrigin||0,b=r.yOrigin||0,w!==Me&&(M=w[0],T=w[1],I=w[2],O=w[3],p=D=w[4],d=U=w[5],w.length===6?(c=Math.sqrt(M*M+T*T),g=Math.sqrt(O*O+I*I),f=M||T?Ms(T,M)*ks:0,x=I||O?Ms(I,O)*ks+f:0,x&&(g*=Math.abs(Math.cos(x*Gs))),r.svg&&(p-=k-(k*M+b*I),d-=b-(k*T+b*O))):(dn=w[6],un=w[7],on=w[8],cn=w[9],en=w[10],pn=w[11],p=w[12],d=w[13],h=w[14],y=Ms(dn,en),m=y*ks,y&&(C=Math.cos(-y),P=Math.sin(-y),F=D*C+on*P,W=U*C+cn*P,nn=dn*C+en*P,on=D*-P+on*C,cn=U*-P+cn*C,en=dn*-P+en*C,pn=un*-P+pn*C,D=F,U=W,dn=nn),y=Ms(-I,en),v=y*ks,y&&(C=Math.cos(-y),P=Math.sin(-y),F=M*C-on*P,W=T*C-cn*P,nn=I*C-en*P,pn=O*P+pn*C,M=F,T=W,I=nn),y=Ms(T,M),f=y*ks,y&&(C=Math.cos(y),P=Math.sin(y),F=M*C+T*P,W=D*C+U*P,T=T*C-M*P,U=U*C-D*P,M=F,D=W),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,v=180-v),c=Mn(Math.sqrt(M*M+T*T+I*I)),g=Mn(Math.sqrt(U*U+dn*dn)),y=Ms(D,U),x=Math.abs(y)>2e-4?y*ks:0,S=pn?1/(pn<0?-pn:pn):0),r.svg&&(F=n.getAttribute("transform"),r.forceCSS=n.setAttribute("transform","")||!qc(gt(n,Tn)),F&&n.setAttribute("transform",F))),Math.abs(x)>90&&Math.abs(x)<270&&(e?(c*=-1,x+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),s=s||r.uncache,r.x=p-((r.xPercent=p&&(!s&&r.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-p)?-50:0)))?n.offsetWidth*r.xPercent/100:0)+o,r.y=d-((r.yPercent=d&&(!s&&r.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-d)?-50:0)))?n.offsetHeight*r.yPercent/100:0)+o,r.z=h+o,r.scaleX=Mn(c),r.scaleY=Mn(g),r.rotation=Mn(f)+i,r.rotationX=Mn(m)+i,r.rotationY=Mn(v)+i,r.skewX=x+i,r.skewY=_+i,r.transformPerspective=S+o,(r.zOrigin=parseFloat(u.split(" ")[2])||!s&&r.zOrigin||0)&&(a[tt]=ca(u)),r.xOffset=r.yOffset=0,r.force3D=ct.force3D,r.renderTransform=r.svg?Gh:Wc?Kc:Uh,r.uncache=0,r},ca=function(n){return(n=n.split(" "))[0]+" "+n[1]},Ya=function(n,s,r){var a=Nn(s);return Mn(parseFloat(s)+parseFloat(cs(n,"x",r+"px",a)))+a},Uh=function(n,s){s.z="0px",s.rotationY=s.rotationX="0deg",s.force3D=0,Kc(n,s)},hs="0deg",te="0px",gs=") ",Kc=function(n,s){var r=s||this,a=r.xPercent,e=r.yPercent,o=r.x,i=r.y,l=r.z,u=r.rotation,p=r.rotationY,d=r.rotationX,h=r.skewX,c=r.skewY,g=r.scaleX,f=r.scaleY,m=r.transformPerspective,v=r.force3D,x=r.target,_=r.zOrigin,S="",k=v==="auto"&&n&&n!==1||v===!0;if(_&&(d!==hs||p!==hs)){var b=parseFloat(p)*Gs,w=Math.sin(b),y=Math.cos(b),C;b=parseFloat(d)*Gs,C=Math.cos(b),o=Ya(x,o,w*C*-_),i=Ya(x,i,-Math.sin(b)*-_),l=Ya(x,l,y*C*-_+_)}m!==te&&(S+="perspective("+m+gs),(a||e)&&(S+="translate("+a+"%, "+e+"%) "),(k||o!==te||i!==te||l!==te)&&(S+=l!==te||k?"translate3d("+o+", "+i+", "+l+") ":"translate("+o+", "+i+gs),u!==hs&&(S+="rotate("+u+gs),p!==hs&&(S+="rotateY("+p+gs),d!==hs&&(S+="rotateX("+d+gs),(h!==hs||c!==hs)&&(S+="skew("+h+", "+c+gs),(g!==1||f!==1)&&(S+="scale("+g+", "+f+gs),x.style[Tn]=S||"translate(0, 0)"},Gh=function(n,s){var r=s||this,a=r.xPercent,e=r.yPercent,o=r.x,i=r.y,l=r.rotation,u=r.skewX,p=r.skewY,d=r.scaleX,h=r.scaleY,c=r.target,g=r.xOrigin,f=r.yOrigin,m=r.xOffset,v=r.yOffset,x=r.forceCSS,_=parseFloat(o),S=parseFloat(i),k,b,w,y,C;l=parseFloat(l),u=parseFloat(u),p=parseFloat(p),p&&(p=parseFloat(p),u+=p,l+=p),l||u?(l*=Gs,u*=Gs,k=Math.cos(l)*d,b=Math.sin(l)*d,w=Math.sin(l-u)*-h,y=Math.cos(l-u)*h,u&&(p*=Gs,C=Math.tan(u-p),C=Math.sqrt(1+C*C),w*=C,y*=C,p&&(C=Math.tan(p),C=Math.sqrt(1+C*C),k*=C,b*=C)),k=Mn(k),b=Mn(b),w=Mn(w),y=Mn(y)):(k=d,y=h,b=w=0),(_&&!~(o+"").indexOf("px")||S&&!~(i+"").indexOf("px"))&&(_=cs(c,"x",o,"px"),S=cs(c,"y",i,"px")),(g||f||m||v)&&(_=Mn(_+g-(g*k+f*w)+m),S=Mn(S+f-(g*b+f*y)+v)),(a||e)&&(C=c.getBBox(),_=Mn(_+a/100*C.width),S=Mn(S+e/100*C.height)),C="matrix("+k+","+b+","+w+","+y+","+_+","+S+")",c.setAttribute("transform",C),x&&(c.style[Tn]=C)},Nh=function(n,s,r,a,e){var o=360,i=Ln(e),l=parseFloat(e)*(i&&~e.indexOf("rad")?ks:1),u=l-a,p=a+u+"deg",d,h;return i&&(d=e.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-360)),d==="cw"&&u<0?u=(u+o*bi)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*bi)%o-~~(u/o)*o)),n._pt=h=new nt(n._pt,s,r,a,u,Ch),h.e=p,h.u="deg",n._props.push(r),h},Mi=function(n,s){for(var r in s)n[r]=s[r];return n},Hh=function(n,s,r){var a=Mi({},r._gsap),e="perspective,force3D,transformOrigin,svgOrigin",o=r.style,i,l,u,p,d,h,c,g;a.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),o[Tn]=s,i=Ee(r,1),Ss(r,Tn),r.setAttribute("transform",u)):(u=getComputedStyle(r)[Tn],o[Tn]=s,i=Ee(r,1),o[Tn]=u);for(l in Yt)u=a[l],p=i[l],u!==p&&e.indexOf(l)<0&&(c=Nn(u),g=Nn(p),d=c!==g?cs(r,l,u,g):parseFloat(u),h=parseFloat(p),n._pt=new nt(n._pt,i,l,d,h-d,xr),n._pt.u=g||0,n._props.push(l));Mi(i,a)};Jn("padding,margin,Width,Radius",function(t,n){var s="Top",r="Right",a="Bottom",e="Left",o=(n<3?[s,r,a,e]:[s+e,s+r,a+r,a+e]).map(function(i){return n<2?t+i:"border"+i+t});la[n>1?"border"+t:t]=function(i,l,u,p,d){var h,c;if(arguments.length<4)return h=o.map(function(g){return Ut(i,g,u)}),c=h.join(" "),c.split(h[0]).length===5?h[0]:c;h=(p+"").split(" "),c={},o.forEach(function(g,f){return c[g]=h[f]=h[f]||h[(f-1)/2|0]}),i.init(l,c,d)}});var Xc={name:"css",register:wr,targetTest:function(n){return n.style&&n.nodeType},init:function(n,s,r,a,e){var o=this._props,i=n.style,l=r.vars.startAt,u,p,d,h,c,g,f,m,v,x,_,S,k,b,w,y;co||wr(),this.styles=this.styles||Hc(n),y=this.styles.props,this.tween=r;for(f in s)if(f!=="autoRound"&&(p=s[f],!(rt[f]&&Ic(f,s,r,a,n,e)))){if(c=typeof p,g=la[f],c==="function"&&(p=p.call(r,a,n,e),c=typeof p),c==="string"&&~p.indexOf("random(")&&(p=Ce(p)),g)g(this,n,f,p,r)&&(w=1);else if(f.substr(0,2)==="--")u=(getComputedStyle(n).getPropertyValue(f)+"").trim(),p+="",rs.lastIndex=0,rs.test(u)||(m=Nn(u),v=Nn(p)),v?m!==v&&(u=cs(n,f,u,v)+v):m&&(p+=m),this.add(i,"setProperty",u,p,a,e,0,0,f),o.push(f),y.push(f,0,i[f]);else if(c!=="undefined"){if(l&&f in l?(u=typeof l[f]=="function"?l[f].call(r,a,n,e):l[f],Ln(u)&&~u.indexOf("random(")&&(u=Ce(u)),Nn(u+"")||u==="auto"||(u+=ct.units[f]||Nn(Ut(n,f))||""),(u+"").charAt(1)==="="&&(u=Ut(n,f))):u=Ut(n,f),h=parseFloat(u),x=c==="string"&&p.charAt(1)==="="&&p.substr(0,2),x&&(p=p.substr(2)),d=parseFloat(p),f in At&&(f==="autoAlpha"&&(h===1&&Ut(n,"visibility")==="hidden"&&d&&(h=0),y.push("visibility",0,i.visibility),ss(this,i,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=At[f],~f.indexOf(",")&&(f=f.split(",")[0]))),_=f in Yt,_){if(this.styles.save(f),c==="string"&&p.substring(0,6)==="var(--"&&(p=gt(n,p.substring(4,p.indexOf(")"))),d=parseFloat(p)),S||(k=n._gsap,k.renderTransform&&!s.parseTransform||Ee(n,s.parseTransform),b=s.smoothOrigin!==!1&&k.smooth,S=this._pt=new nt(this._pt,i,Tn,0,1,k.renderTransform,k,0,-1),S.dep=1),f==="scale")this._pt=new nt(this._pt,k,"scaleY",k.scaleY,(x?Bs(k.scaleY,x+d):d)-k.scaleY||0,xr),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){y.push(tt,0,i[tt]),p=zh(p),k.svg?_r(n,p,0,b,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==k.zOrigin&&ss(this,k,"zOrigin",k.zOrigin,v),ss(this,i,f,ca(u),ca(p)));continue}else if(f==="svgOrigin"){_r(n,p,1,b,0,this);continue}else if(f in Yc){Nh(this,k,f,h,x?Bs(h,x+p):p);continue}else if(f==="smoothOrigin"){ss(this,k,"smooth",k.smooth,p);continue}else if(f==="force3D"){k[f]=p;continue}else if(f==="transform"){Hh(this,p,n);continue}}else f in i||(f=Xs(f)||f);if(_||(d||d===0)&&(h||h===0)&&!Sh.test(p)&&f in i)m=(u+"").substr((h+"").length),d||(d=0),v=Nn(p)||(f in ct.units?ct.units[f]:m),m!==v&&(h=cs(n,f,u,v)),this._pt=new nt(this._pt,_?k:i,f,h,(x?Bs(h,x+d):d)-h,!_&&(v==="px"||f==="zIndex")&&s.autoRound!==!1?Ph:xr),this._pt.u=v||0,m!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=Th);else if(f in i)Fh.call(this,n,f,u,x?x+p:p);else if(f in n)this.add(n,f,u||n[f],x?x+p:p,a,e);else if(f!=="parseTransform"){Jr(f,p);continue}_||(f in i?y.push(f,0,i[f]):typeof n[f]=="function"?y.push(f,2,n[f]()):y.push(f,1,u||n[f])),o.push(f)}}w&&zc(this)},render:function(n,s){if(s.tween._time||!po())for(var r=s._pt;r;)r.r(n,r.d),r=r._next;else s.styles.revert()},get:Ut,aliases:At,getSetter:function(n,s,r){var a=At[s];return a&&a.indexOf(",")<0&&(s=a),s in Yt&&s!==tt&&(n._gsap.x||Ut(n,"x"))?r&&xi===r?s==="scale"?Ah:Rh:(xi=r||{})&&(s==="scale"?Ih:Oh):n.style&&!Xr(n.style[s])?Mh:~s.indexOf("-")?Eh:io(n,s)},core:{_removeProperty:Ss,_getMatrix:fo}};st.utils.checkPrefix=Xs;st.core.getStyleSaver=Hc;(function(t,n,s,r){var a=Jn(t+","+n+","+s,function(e){Yt[e]=1});Jn(n,function(e){ct.units[e]="deg",Yc[e]=1}),At[a[13]]=t+","+n,Jn(r,function(e){var o=e.split(":");At[o[1]]=a[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ct.units[t]="px"});st.registerPlugin(Xc);var Zc=st.registerPlugin(Xc)||st;Zc.core.Tween;const Wh=`<!DOCTYPE html>\r
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
</html>`,Vh=`<!DOCTYPE html>\r
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
</html>`,Sr=[{id:1,title:"Recipe Rush: Online Grocery Ordering Game",slug:"recipe-rush",description:`
                It's a fun text-based simulation game teaching decision-making, budgeting, and basic input/output in C++ — great for beginners.`,image:new URL("/images/grocery-game-img.jpeg",import.meta.url).href,date:"Posted on June 15, 2025 – 10:00 AM",content:Wh,customReadMore:[{title:"Fun Meets Function: Grocery Games, Tips, and Surprising Facts",excerpt:"Scenario 1: Last-Minute Dinner Party You're hosting guests tonight and plan to cook Spaghetti Marinara. You have 20 minutes to order groceries before the cutoff for...",image:new URL("/images/grocery-game-fun.jpeg",import.meta.url).href,slug:"fun-meets-function",content:Vh},{title:"Let's add a Graphical User Interface (GUI) to your Recipe Rush: Online Grocery Ordering Game",excerpt:"With SFML, your game will look like: A window showing recipe selection. Grocery items displayed with names & prices as buttons. A side panel with your current cart and budget. Clickable buttons to add",image:new URL("/images/grocery-game-gui.jpeg",import.meta.url).href,slug:"adding-gui-to-recipe-rush",content:$h}]},{id:2,title:"Highway Driver: A Complete SFML Racing Game",slug:"highway-driver",description:"Highway Driver, you control a car speeding down a highway while avoiding incoming traffic. The longer you survive, the higher your score.",image:new URL("/images/highway-driver.jpeg",import.meta.url).href,date:"Posted on June 16, 2025 – 3:30 PM",content:Yh,customReadMore:[{title:"Speed, Skill & Code: The Making of a Highway Driver Game",excerpt:`Ever wondered how the simple thrill of dodging traffic in a game mirrors real-life driving? In this deep dive, we explore Highway Driver—a deceptively simple game that captures the chaos, strategy, and reflexes of the open road. From real-world driving psychology to game design secrets, we’ll break down:
        ✅ How highway survival games train your brain (faster reactions, better focus)
        ✅ Clever game mechanics inspired by actual driving challenges (lane-switching, speed fatigue, tunnel vision)
      ✅ Behind-the-scenes coding & design choices (why obstacles spawn just right)
      ✅ Fun upgrades to turn a basic prototype into a full-fledged game (weather, AI traffic, boss chases!)

      Whether you're a gamer, developer, or just love the open road, this post shifts gears between entertainment, education, and pure coding adrenaline. Ready to hit the highway? Let’s go! 🚗💨`,slug:"highway-driver-making",content:qh,image:new URL("/images/highway-driver-addition.jpeg",import.meta.url).href},{title:"Adding graphics to your game",excerpt:"Your Highway Driver game already has a basic graphical UI using SFML rectangles and text, but now let’s talk about enhancing the GUI (Graphical User Interface) with visual polish, usability, and menus — just like a complete arcade-style game.",slug:"highway-driver-gui",image:new URL("/images/highway-driver-gui.jpeg",import.meta.url).href,content:Kh}]},{id:3,title:"Car Parking Master",slug:"car-parking-master",description:"you control a car in a crowded parking lot. Your goal is to navigate through obstacles and park in the designated spot without collisions.",image:new URL("/images/car-parking.jpeg",import.meta.url).href,date:"Posted on June 17, 2025 – 8:00 AM",content:Xh}],Zh={class:"text-white px-4 py-12"},Qh={class:"max-w-7xl mx-auto"},Jh={class:"relative overflow-hidden"},ng=["data-aos-delay"],tg={class:"relative"},sg=["src"],eg={class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end transition-all duration-300 group-hover:backdrop-blur-sm"},ag={class:"text-lg text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300"},rg={class:"p-4"},og={class:"text-xl font-semibold mb-2"},ig={class:"text-xs text-gray-400"},lg={__name:"Slider",setup(t){const n=Ht(Sr);function s(){const d=window.innerWidth;return d<640?1:d<1024?2:3}const r=Ht(0),a=Ht(s()),e=()=>{a.value=s(),r.value=0},o=Kn(()=>n.value.slice(r.value,r.value+a.value)),i=Ht(null),l=d=>{Zc.fromTo(i.value,{x:d==="next"?300:-300,opacity:0},{x:0,opacity:1,duration:.5,ease:"power2.out"})},u=()=>{r.value+a.value>=n.value.length?r.value=0:r.value+=a.value,l("next")},p=()=>{r.value-a.value<0?r.value=Math.max(n.value.length-a.value,0):r.value-=a.value,l("prev")};return Ae(()=>{Zl.init({once:!0}),window.addEventListener("resize",e)}),Gr(()=>{window.removeEventListener("resize",e)}),(d,h)=>(jn(),zn("section",Zh,[Z("div",Qh,[h[0]||(h[0]=Z("h2",{class:"text-3xl font-bold mb-8","data-aos":"fade-up"}," Latest Project Walkthroughs ",-1)),Z("div",Jh,[Z("div",{ref_key:"slider",ref:i,class:"flex transition-all duration-500 space-x-6 w-full"},[(jn(!0),zn(Un,null,Qa(o.value,(c,g)=>(jn(),zn("div",{key:c.id,class:"min-w-[300px] md:min-w-[350px] bg-gray-800 rounded-2xl shadow-xl overflow-hidden group relative","data-aos":"fade-up","data-aos-delay":100*g},[wn(xt(qr),{to:`/blogs/${c.slug}`},{default:Fs(()=>[Z("div",tg,[Z("img",{src:c.image,alt:"Project Image",class:"w-full h-68 object-cover transition duration-300 group-hover:blur-sm"},null,8,sg),Z("div",eg,[Z("p",ag,Gt(c.description),1)])])]),_:2},1032,["to"]),Z("div",rg,[Z("h3",og,Gt(c.title),1),Z("span",ig,Gt(c.date),1)])],8,ng))),128))],512),Z("button",{onClick:p,class:"absolute top-1/2 -translate-y-10 left-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ⬅ "),Z("button",{onClick:u,class:"absolute top-1/2 -translate-y-1/2 right-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ➡ ")])])]))}},cg="/images/logo.jpg",pg=(t,n)=>{const s=t.__vccOpts||t;for(const[r,a]of n)s[r]=a;return s},ug={},dg={class:"flex items-center justify-between"},fg={class:"w-20 relative left-5 sm:left-5 sm:w-32"},hg={class:"flex justify-between w-36 sm:w-42 relative right-6 sm:right-12"};function gg(t,n){const s=tu("router-link");return jn(),zn("header",null,[Z("nav",dg,[Z("div",fg,[wn(s,{to:"/"},{default:Fs(()=>n[0]||(n[0]=[Z("img",{src:cg,class:"cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out",alt:"Logo"},null,-1)])),_:1,__:[0]})]),Z("div",hg,[wn(s,{to:"/about-cpp-playgrounds"},{default:Fs(()=>n[1]||(n[1]=[Z("p",{class:"cursor-pointer"},"About Us",-1)])),_:1,__:[1]}),wn(s,{to:"/contact-cpp-playgrounds"},{default:Fs(()=>n[2]||(n[2]=[Z("p",{class:"cursor-pointer"},"Contact",-1)])),_:1,__:[2]})])])])}const Ta=pg(ug,[["render",gg]]),mg={class:"flex sm:flex-row flex-col justify-around items-center w-full min-h-screen p-4 space-y-6 md:space-y-0 mt-20 md:mt-36"},kg={__name:"Banner",setup(t){const n=Ht(null);let s,r,a;const e=["https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png","https://em-content.zobj.net/thumbs/240/apple/354/red-heart_2764-fe0f.png","https://em-content.zobj.net/thumbs/240/apple/354/video-game_1f3ae.png","https://em-content.zobj.net/thumbs/240/apple/354/keyboard_2328-fe0f.png","https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg","https://em-content.zobj.net/thumbs/240/apple/354/smiling-face-with-sunglasses_1f60e.png","https://em-content.zobj.net/thumbs/240/apple/354/money-bag_1f4b0.png","https://em-content.zobj.net/thumbs/240/apple/354/party-popper_1f389.png","https://em-content.zobj.net/thumbs/240/apple/354/technologist_1f9d1-200d-1f4bb.png"];function o(i,l,u){return dt.Bodies.rectangle(i,l,40,40,{render:{sprite:{texture:u,xScale:.4,yScale:.4}}})}return Ae(()=>{s=dt.Engine.create();const i=s.world;r=dt.Render.create({canvas:n.value,engine:s,options:{width:window.innerWidth,height:window.innerHeight,background:"transparent",wireframes:!1}}),dt.Render.run(r),a=dt.Runner.create(),dt.Runner.run(a,s);const l=dt.Bodies.rectangle(window.innerWidth/2,window.innerHeight+20,window.innerWidth,40,{isStatic:!0,render:{fillStyle:"#333"}});dt.World.add(i,l);const u=setInterval(()=>{const d=Math.random()*window.innerWidth,h=-50,c=Math.floor(Math.random()*e.length),g=o(d,h,e[c]);dt.World.add(i,g)},50),p=()=>{dt.Render.lookAt(r,{min:{x:0,y:0},max:{x:window.innerWidth,y:window.innerHeight}})};window.addEventListener("resize",p),Ur(()=>{clearInterval(u),window.removeEventListener("resize",p),dt.Render.stop(r),dt.Runner.stop(a)})}),(i,l)=>(jn(),zn(Un,null,[wn(Ta),l[1]||(l[1]=Z("h1",{class:"font-serif text-center text-2xl sm:text-3xl mt-6 sm:mt-1","data-aos":"zoom-out","data-aos-delay":"100"}," CPP Playgrounds ",-1)),wn(Pf),Z("div",mg,[Z("canvas",{ref_key:"canvasRef",ref:n,class:"w-1/2 sm:w-1/2 md:w-1/2 h-[300px] md:h-[60vh] bg-black"},null,512),l[0]||(l[0]=Z("div",{class:"w-full sm:w-1/3 md:w-1/3 text-xl md:text-2xl text-white","data-aos":"fade-left","data-aos-delay":"250"},[Z("br"),Z("p",null,"Unlock your game development potential with our comprehensive C++ guides and step-by-step walkthroughs. Whether you're a beginner or looking to refine your skills, our expertly crafted tutorials cover everything from graphics and game loops to physics engines and AI logic. Learn how to build powerful, high-performance games using C++, the industry-standard language behind many of today’s biggest titles. With real-world examples, source code snippets, and hands-on projects, we make it easy for you to master the art of game development. Start building your dream game today — no experience needed! ")],-1))]),wn(lg),l[2]||(l[2]=Z("div",{class:"relative z-10 text-center mt-12 mb-3 text-sm"}," © 2025 Cpp Playgrounds. All rights reserved. ",-1))],64))}},vg={key:0,class:""},yg={class:"text-center text-xl sm:text-3xl mt-8 px-4"},xg={class:"mt-10 w-1/2 mx-auto px-4 sm:px-6 lg:px-8"},bg=["src"],wg=["innerHTML"],_g={key:1,class:"text-center py-24 text-2xl"},Sg={key:2,class:"mt-20 border-t border-white/20 pt-10"},Cg={class:"space-y-8 max-w-3xl mx-auto px-4"},Tg=["onClick"],Pg={class:"flex flex-col sm:flex-row gap-4 items-center"},Mg=["src"],Eg={class:"text-lg font-bold text-white"},Rg={class:"text-sm text-white/80 mt-1 line-clamp-2"},Ag={class:"mt-20 border-t border-white/20 pt-10"},Ig={class:"space-y-8 max-w-3xl mx-auto px-4"},Og=["onClick"],jg={class:"flex flex-col sm:flex-row gap-4 items-center"},Lg=["src"],Dg={class:"text-lg font-bold text-white"},Fg={class:"text-sm text-white/80 mt-1"},zg={__name:"BlogPage",setup(t){const n=bf(),s=xf(),r=Kn(()=>n.params.slug);function a(l){var u,p;for(const d of Sr){if(d.slug===l)return d;const h=(u=d.related)==null?void 0:u.find(g=>g.slug===l);if(h)return h;const c=(p=d.customReadMore)==null?void 0:p.find(g=>g.slug===l);if(c)return c}return null}const e=Kn(()=>a(r.value)),o=Ht(null);Ae(()=>{o.value&&o.value.addEventListener("click",l=>{const u=l.target.closest("[data-router-link]");if(u){l.preventDefault();const p=u.getAttribute("data-router-link");p&&s.push(p)}})});const i=Kn(()=>Sr.filter(l=>{var u;return l.slug!==((u=e.value)==null?void 0:u.slug)}).slice(0,3));return(l,u)=>{var p,d;return jn(),zn(Un,null,[wn(Ta),e.value?(jn(),zn("div",vg,[Z("h1",yg,Gt(e.value.title),1),Z("div",xg,[Z("img",{src:e.value.image,alt:"blog-img",class:"mt-4 w-full h-auto rounded-lg shadow-lg",style:{"max-height":"400px"}},null,8,bg)]),Z("div",{class:"text-lg w-1/2 mx-auto",innerHTML:e.value.content,ref_key:"htmlContainer",ref:o},null,8,wg)])):(jn(),zn("div",_g," Blog not found. ")),(d=(p=e.value)==null?void 0:p.customReadMore)!=null&&d.length?(jn(),zn("div",Sg,[u[1]||(u[1]=Z("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"You Might Also Like",-1)),Z("div",Cg,[(jn(!0),zn(Un,null,Qa(e.value.customReadMore,h=>(jn(),zn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:c=>xt(s).push({name:"BlogPage",params:{slug:h.slug}})},[Z("div",Pg,[Z("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Mg),Z("div",null,[Z("h3",Eg,Gt(h.title),1),Z("p",Rg,Gt(h.excerpt),1),u[0]||(u[0]=Z("button",{class:"mt-2 px-3 py-1 bg-indigo-600 text-sm text-white rounded hover:bg-indigo-700"}," Read More → ",-1))])])],8,Tg))),128))])])):Lu("",!0),Z("div",Ag,[u[2]||(u[2]=Z("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"Read More",-1)),Z("div",Ig,[(jn(!0),zn(Un,null,Qa(i.value,h=>(jn(),zn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:c=>xt(s).push({name:"BlogPage",params:{slug:h.slug}})},[Z("div",jg,[Z("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Lg),Z("div",null,[Z("h3",Dg,Gt(h.title),1),Z("p",Fg,Gt(h.excerpt),1)])])],8,Og))),128))])])],64)}}};var qe={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var Bg=qe.exports,Ei;function Ug(){return Ei||(Ei=1,function(t,n){(function(s,r){t.exports=r()})(Bg,function(){var s={};s.version="0.2.0";var r=s.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};s.configure=function(g){var f,m;for(f in g)m=g[f],m!==void 0&&g.hasOwnProperty(f)&&(r[f]=m);return this},s.status=null,s.set=function(g){var f=s.isStarted();g=a(g,r.minimum,1),s.status=g===1?null:g;var m=s.render(!f),v=m.querySelector(r.barSelector),x=r.speed,_=r.easing;return m.offsetWidth,i(function(S){r.positionUsing===""&&(r.positionUsing=s.getPositioningCSS()),l(v,o(g,x,_)),g===1?(l(m,{transition:"none",opacity:1}),m.offsetWidth,setTimeout(function(){l(m,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){s.remove(),S()},x)},x)):setTimeout(S,x)}),this},s.isStarted=function(){return typeof s.status=="number"},s.start=function(){s.status||s.set(0);var g=function(){setTimeout(function(){s.status&&(s.trickle(),g())},r.trickleSpeed)};return r.trickle&&g(),this},s.done=function(g){return!g&&!s.status?this:s.inc(.3+.5*Math.random()).set(1)},s.inc=function(g){var f=s.status;return f?(typeof g!="number"&&(g=(1-f)*a(Math.random()*f,.1,.95)),f=a(f+g,0,.994),s.set(f)):s.start()},s.trickle=function(){return s.inc(Math.random()*r.trickleRate)},function(){var g=0,f=0;s.promise=function(m){return!m||m.state()==="resolved"?this:(f===0&&s.start(),g++,f++,m.always(function(){f--,f===0?(g=0,s.done()):s.set((g-f)/g)}),this)}}(),s.render=function(g){if(s.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var f=document.createElement("div");f.id="nprogress",f.innerHTML=r.template;var m=f.querySelector(r.barSelector),v=g?"-100":e(s.status||0),x=document.querySelector(r.parent),_;return l(m,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),r.showSpinner||(_=f.querySelector(r.spinnerSelector),_&&c(_)),x!=document.body&&p(x,"nprogress-custom-parent"),x.appendChild(f),f},s.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(r.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&c(g)},s.isRendered=function(){return!!document.getElementById("nprogress")},s.getPositioningCSS=function(){var g=document.body.style,f="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return f+"Perspective"in g?"translate3d":f+"Transform"in g?"translate":"margin"};function a(g,f,m){return g<f?f:g>m?m:g}function e(g){return(-1+g)*100}function o(g,f,m){var v;return r.positionUsing==="translate3d"?v={transform:"translate3d("+e(g)+"%,0,0)"}:r.positionUsing==="translate"?v={transform:"translate("+e(g)+"%,0)"}:v={"margin-left":e(g)+"%"},v.transition="all "+f+"ms "+m,v}var i=function(){var g=[];function f(){var m=g.shift();m&&m(f)}return function(m){g.push(m),g.length==1&&f()}}(),l=function(){var g=["Webkit","O","Moz","ms"],f={};function m(S){return S.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(k,b){return b.toUpperCase()})}function v(S){var k=document.body.style;if(S in k)return S;for(var b=g.length,w=S.charAt(0).toUpperCase()+S.slice(1),y;b--;)if(y=g[b]+w,y in k)return y;return S}function x(S){return S=m(S),f[S]||(f[S]=v(S))}function _(S,k,b){k=x(k),S.style[k]=b}return function(S,k){var b=arguments,w,y;if(b.length==2)for(w in k)y=k[w],y!==void 0&&k.hasOwnProperty(w)&&_(S,w,y);else _(S,b[1],b[2])}}();function u(g,f){var m=typeof g=="string"?g:h(g);return m.indexOf(" "+f+" ")>=0}function p(g,f){var m=h(g),v=m+f;u(m,f)||(g.className=v.substring(1))}function d(g,f){var m=h(g),v;u(g,f)&&(v=m.replace(" "+f+" "," "),g.className=v.substring(1,v.length-1))}function h(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function c(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return s})}(qe)),qe.exports}var Gg=Ug();const ho=Xl(Gg),Ng="/images/about_us.jpeg",Hg={class:"max-w-4xl mx-auto px-6 py-12 md:py-20"},Wg={class:"space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"},Vg={class:"text-center mt-16 px-6 py-8 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-xl border border-gray-200 dark:border-gray-700"},$g={__name:"AboutUs",setup(t){return(n,s)=>(jn(),zn(Un,null,[wn(Ta),Z("div",Hg,[s[4]||(s[4]=er('<div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 mb-6"> 🎮 From Player to Creator: My C++ Game Dev Journey </h1><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"></div></div><div class="mb-16 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500"><img src="'+Ng+'" alt="Game development workspace" class="w-full h-auto object-cover"></div>',2)),Z("div",Wg,[s[3]||(s[3]=er('<p class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500"><span class="text-3xl mr-2">👾</span> I still remember the first time a video game truly captivated me. It wasn&#39;t just the immersive worlds or thrilling gameplay—I became obsessed with understanding <em class="font-semibold text-blue-600 dark:text-blue-400">how</em> these digital magic tricks worked. As a wide-eyed teenager, I&#39;d tear through game files, stumbling upon mysterious <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.cpp</code> extensions that might as well have been ancient hieroglyphics. </p><p class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500"><span class="text-3xl mr-2">🔥</span> My early coding attempts were brutal. I&#39;d stare at walls of C++ syntax—templates that looked like algebraic nightmares, pointer errors that crashed my screen, and linker errors that haunted my dreams. But every small breakthrough felt like leveling up in real life. That first moving sprite? <span class="font-bold text-amber-600 dark:text-amber-400">Pure euphoria</span>. My initial collision detection that actually worked? <span class="font-bold text-amber-600 dark:text-amber-400">Better than any boss fight</span>. </p><div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner"><h3 class="text-2xl font-bold mb-4 flex items-center"><span class="text-3xl mr-3">💡</span> Through years of trial and error, I discovered: </h3><ul class="space-y-4 pl-2"><li class="flex items-start"><span class="text-amber-500 mr-3">⚙️</span><span><strong class="text-gray-900 dark:text-white">Game code isn&#39;t about perfection</strong>—it&#39;s about systems talking to each other</span></li><li class="flex items-start"><span class="text-blue-500 mr-3">🧠</span><span><strong class="text-gray-900 dark:text-white">The best learning happens when you&#39;re fixing broken things</strong>, not just copying working examples</span></li><li class="flex items-start"><span class="text-purple-500 mr-3">🚀</span><span><strong class="text-gray-900 dark:text-white">C++&#39;s complexity is its superpower</strong>—once you tame it, you can bend hardware to your will</span></li></ul></div><p class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500"><span class="text-3xl mr-2">✨</span> This site is the mentor I wish I&#39;d had. Every tutorial solves a problem I struggled with—from &quot;why does my character clip through walls?&quot; to &quot;how do I make NPCs <em>think</em>?&quot; The code snippets are battle-tested, the explanations assume zero knowledge (but respect your intelligence), and the projects build toward actual portfolio pieces. </p>',4)),Z("div",Vg,[s[1]||(s[1]=Z("h3",{class:"text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center"},[Z("span",{class:"mr-3"},"🎯"),Il(" Ready to Level Up? ")],-1)),s[2]||(s[2]=Z("p",{class:"text-xl mb-6"}," Whether you're modding your first game or architecting an engine from scratch, I'm here to help you skip the years of frustration. ",-1)),wn(xt(qr),{to:"/"},{default:Fs(()=>s[0]||(s[0]=[Z("button",{class:"px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"}," Start Learning Now → ",-1)])),_:1,__:[0]})])])])],64))}},Yg={__name:"ContactUs",setup(t){return(n,s)=>(jn(),zn(Un,null,[wn(Ta),s[0]||(s[0]=er('<div class="py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"><span class="inline-block mr-3">👋</span> Let&#39;s Connect! </h1><p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"> Whether you&#39;re stuck on a bug, want to suggest improvements, or just geek out about game dev </p><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full mt-6"></div></div><div class="grid md:grid-cols-2 gap-8"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4"><span class="text-2xl">📬</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Shoot Us a Message</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Found a bug in our code? Need advice on your project? Want mentorship or course recommendations? </p><div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500"><p class="font-mono text-lg break-all text-blue-600 dark:text-blue-300"> programmingninja@proton.me </p><p class="text-sm text-gray-500 dark:text-gray-400 mt-2"> (We typically reply within 24 hours) </p></div><p class="text-gray-600 dark:text-gray-300"><span class="font-bold">Pro Tip:</span> Include &quot;[GameDev]&quot; in your subject line to skip the queue! </p></div></div></div><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4"><span class="text-2xl">👨‍💻</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Join Community</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Connect with other game developers, share projects, and get real-time help: </p><div class="space-y-4"><a href="https://cppalliance.org/slack/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">💬</span><div><h3 class="font-bold">C++ Slack/Discord</h3><p class="text-sm text-gray-500 dark:text-gray-400">Live chat with developers. Best for real-time help</p></div></a><a href="https://www.reddit.com/r/cpp/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">🐦</span><div><h3 class="font-bold">r/cpp (Reddit)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Best for language updates, technical discussions</p></div></a><a href="https://stackoverflow.com/questions/tagged/c%252b%252b" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">📱</span><div><h3 class="font-bold">Stack Overflow (C++ Tag)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Code-specific questions</p></div></a></div></div></div></div></div><div class="mt-16 text-center"><p class="text-white text-md font-extrabold"><span class="inline-block mr-2 text-xl font-extrabold">⚠️</span> Warning: Contacting us about game dev may result in spontaneous coding sessions, excessive coffee consumption, and unexpected friendships. <span class="inline-block ml-2">☕</span></p></div></div></div>',1))],64))}};ho.configure({showSpinner:!1});const go=vf({history:qd("/"),scrollBehavior(t,n,s){return{top:0}},routes:[{path:"/",component:kg},{path:"/about-cpp-playgrounds",name:"AboutUs",component:$g},{path:"/contact-cpp-playgrounds",name:"ContactUs",component:Yg},{path:"/blogs/:slug",name:"BlogPage",component:zg}],scrollBehavior(){return{top:0}}});go.beforeEach((t,n,s)=>{ho.start(),s()});go.afterEach(()=>{ho.done()});Zl.init();const Qc=gd(wf);Qc.use(go);Qc.mount("#app");
