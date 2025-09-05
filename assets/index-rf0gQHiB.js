(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Or(t){const n=Object.create(null);for(const a of t.split(","))n[a]=1;return a=>a in n}const _n={},Dt=[],za=()=>{},ld=()=>!1,ve=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Dr=t=>t.startsWith("onUpdate:"),$n=Object.assign,Lr=(t,n)=>{const a=t.indexOf(n);a>-1&&t.splice(a,1)},pd=Object.prototype.hasOwnProperty,yn=(t,n)=>pd.call(t,n),en=Array.isArray,Lt=t=>we(t)==="[object Map]",Ui=t=>we(t)==="[object Set]",rn=t=>typeof t=="function",En=t=>typeof t=="string",ut=t=>typeof t=="symbol",Tn=t=>t!==null&&typeof t=="object",Gi=t=>(Tn(t)||rn(t))&&rn(t.then)&&rn(t.catch),Wi=Object.prototype.toString,we=t=>Wi.call(t),dd=t=>we(t).slice(8,-1),Hi=t=>we(t)==="[object Object]",Br=t=>En(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fs=Or(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xe=t=>{const n=Object.create(null);return a=>n[a]||(n[a]=t(a))},cd=/-(\w)/g,va=xe(t=>t.replace(cd,(n,a)=>a?a.toUpperCase():"")),ud=/\B([A-Z])/g,Pt=xe(t=>t.replace(ud,"-$1").toLowerCase()),je=xe(t=>t.charAt(0).toUpperCase()+t.slice(1)),Le=xe(t=>t?`on${je(t)}`:""),rt=(t,n)=>!Object.is(t,n),Be=(t,...n)=>{for(let a=0;a<t.length;a++)t[a](...n)},Ni=(t,n,a,r=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:r,value:a})},hd=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Po;const _e=()=>Po||(Po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ur(t){if(en(t)){const n={};for(let a=0;a<t.length;a++){const r=t[a],e=En(r)?yd(r):Ur(r);if(e)for(const s in e)n[s]=e[s]}return n}else if(En(t)||Tn(t))return t}const fd=/;(?![^(]*\))/g,md=/:([^]+)/,gd=/\/\*[^]*?\*\//g;function yd(t){const n={};return t.replace(gd,"").split(fd).forEach(a=>{if(a){const r=a.split(md);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Gr(t){let n="";if(En(t))n=t;else if(en(t))for(let a=0;a<t.length;a++){const r=Gr(t[a]);r&&(n+=r+" ")}else if(Tn(t))for(const a in t)t[a]&&(n+=a+" ");return n.trim()}const kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=Or(kd);function Vi(t){return!!t||t===""}const Yi=t=>!!(t&&t.__v_isRef===!0),Fn=t=>En(t)?t:t==null?"":en(t)||Tn(t)&&(t.toString===Wi||!rn(t.toString))?Yi(t)?Fn(t.value):JSON.stringify(t,qi,2):String(t),qi=(t,n)=>Yi(n)?qi(t,n.value):Lt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((a,[r,e],s)=>(a[Ue(r,s)+" =>"]=e,a),{})}:Ui(n)?{[`Set(${n.size})`]:[...n.values()].map(a=>Ue(a))}:ut(n)?Ue(n):Tn(n)&&!en(n)&&!Hi(n)?String(n):n,Ue=(t,n="")=>{var a;return ut(t)?`Symbol(${(a=t.description)!=null?a:n})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qn;class vd{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qn,!n&&Qn&&(this.index=(Qn.scopes||(Qn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,a;if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].pause();for(n=0,a=this.effects.length;n<a;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,a;if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].resume();for(n=0,a=this.effects.length;n<a;n++)this.effects[n].resume()}}run(n){if(this._active){const a=Qn;try{return Qn=this,n()}finally{Qn=a}}}on(){++this._on===1&&(this.prevScope=Qn,Qn=this)}off(){this._on>0&&--this._on===0&&(Qn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let a,r;for(a=0,r=this.effects.length;a<r;a++)this.effects[a].stop();for(this.effects.length=0,a=0,r=this.cleanups.length;a<r;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,r=this.scopes.length;a<r;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function wd(){return Qn}let jn;const Ge=new WeakSet;class $i{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qn&&Qn.active&&Qn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ge.has(this)&&(Ge.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ki(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ao(this),Zi(this);const n=jn,a=xa;jn=this,xa=!0;try{return this.fn()}finally{Ji(this),jn=n,xa=a,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Nr(n);this.deps=this.depsTail=void 0,Ao(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ge.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rr(this)&&this.run()}get dirty(){return rr(this)}}let Xi=0,ms,gs;function Ki(t,n=!1){if(t.flags|=8,n){t.next=gs,gs=t;return}t.next=ms,ms=t}function Wr(){Xi++}function Hr(){if(--Xi>0)return;if(gs){let n=gs;for(gs=void 0;n;){const a=n.next;n.next=void 0,n.flags&=-9,n=a}}let t;for(;ms;){let n=ms;for(ms=void 0;n;){const a=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){t||(t=r)}n=a}}if(t)throw t}function Zi(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ji(t){let n,a=t.depsTail,r=a;for(;r;){const e=r.prevDep;r.version===-1?(r===a&&(a=e),Nr(r),xd(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}t.deps=n,t.depsTail=a}function rr(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Qi(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function Qi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ss)||(t.globalVersion=Ss,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!rr(t))))return;t.flags|=2;const n=t.dep,a=jn,r=xa;jn=t,xa=!0;try{Zi(t);const e=t.fn(t._value);(n.version===0||rt(e,t._value))&&(t.flags|=128,t._value=e,n.version++)}catch(e){throw n.version++,e}finally{jn=a,xa=r,Ji(t),t.flags&=-3}}function Nr(t,n=!1){const{dep:a,prevSub:r,nextSub:e}=t;if(r&&(r.nextSub=e,t.prevSub=void 0),e&&(e.prevSub=r,t.nextSub=void 0),a.subs===t&&(a.subs=r,!r&&a.computed)){a.computed.flags&=-5;for(let s=a.computed.deps;s;s=s.nextDep)Nr(s,!0)}!n&&!--a.sc&&a.map&&a.map.delete(a.key)}function xd(t){const{prevDep:n,nextDep:a}=t;n&&(n.nextDep=a,t.prevDep=void 0),a&&(a.prevDep=n,t.nextDep=void 0)}let xa=!0;const nl=[];function Ya(){nl.push(xa),xa=!1}function qa(){const t=nl.pop();xa=t===void 0?!0:t}function Ao(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const a=jn;jn=void 0;try{n()}finally{jn=a}}}let Ss=0;class jd{constructor(n,a){this.sub=n,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!jn||!xa||jn===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==jn)a=this.activeLink=new jd(jn,this),jn.deps?(a.prevDep=jn.depsTail,jn.depsTail.nextDep=a,jn.depsTail=a):jn.deps=jn.depsTail=a,al(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const r=a.nextDep;r.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=r),a.prevDep=jn.depsTail,a.nextDep=void 0,jn.depsTail.nextDep=a,jn.depsTail=a,jn.deps===a&&(jn.deps=r)}return a}trigger(n){this.version++,Ss++,this.notify(n)}notify(n){Wr();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Hr()}}}function al(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)al(r)}const a=t.dep.subs;a!==t&&(t.prevSub=a,a&&(a.nextSub=t)),t.dep.subs=t}}const or=new WeakMap,xt=Symbol(""),ir=Symbol(""),Cs=Symbol("");function Gn(t,n,a){if(xa&&jn){let r=or.get(t);r||or.set(t,r=new Map);let e=r.get(a);e||(r.set(a,e=new Vr),e.map=r,e.key=a),e.track()}}function Va(t,n,a,r,e,s){const o=or.get(t);if(!o){Ss++;return}const i=l=>{l&&l.trigger()};if(Wr(),n==="clear")o.forEach(i);else{const l=en(t),c=l&&Br(a);if(l&&a==="length"){const p=Number(r);o.forEach((u,h)=>{(h==="length"||h===Cs||!ut(h)&&h>=p)&&i(u)})}else switch((a!==void 0||o.has(void 0))&&i(o.get(a)),c&&i(o.get(Cs)),n){case"add":l?c&&i(o.get("length")):(i(o.get(xt)),Lt(t)&&i(o.get(ir)));break;case"delete":l||(i(o.get(xt)),Lt(t)&&i(o.get(ir)));break;case"set":Lt(t)&&i(o.get(xt));break}}Hr()}function Mt(t){const n=gn(t);return n===t?n:(Gn(n,"iterate",Cs),ba(t)?n:n.map(Bn))}function Se(t){return Gn(t=gn(t),"iterate",Cs),t}const _d={__proto__:null,[Symbol.iterator](){return We(this,Symbol.iterator,Bn)},concat(...t){return Mt(this).concat(...t.map(n=>en(n)?Mt(n):n))},entries(){return We(this,"entries",t=>(t[1]=Bn(t[1]),t))},every(t,n){return Ua(this,"every",t,n,void 0,arguments)},filter(t,n){return Ua(this,"filter",t,n,a=>a.map(Bn),arguments)},find(t,n){return Ua(this,"find",t,n,Bn,arguments)},findIndex(t,n){return Ua(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Ua(this,"findLast",t,n,Bn,arguments)},findLastIndex(t,n){return Ua(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Ua(this,"forEach",t,n,void 0,arguments)},includes(...t){return He(this,"includes",t)},indexOf(...t){return He(this,"indexOf",t)},join(t){return Mt(this).join(t)},lastIndexOf(...t){return He(this,"lastIndexOf",t)},map(t,n){return Ua(this,"map",t,n,void 0,arguments)},pop(){return rs(this,"pop")},push(...t){return rs(this,"push",t)},reduce(t,...n){return Mo(this,"reduce",t,n)},reduceRight(t,...n){return Mo(this,"reduceRight",t,n)},shift(){return rs(this,"shift")},some(t,n){return Ua(this,"some",t,n,void 0,arguments)},splice(...t){return rs(this,"splice",t)},toReversed(){return Mt(this).toReversed()},toSorted(t){return Mt(this).toSorted(t)},toSpliced(...t){return Mt(this).toSpliced(...t)},unshift(...t){return rs(this,"unshift",t)},values(){return We(this,"values",Bn)}};function We(t,n,a){const r=Se(t),e=r[n]();return r!==t&&!ba(t)&&(e._next=e.next,e.next=()=>{const s=e._next();return s.value&&(s.value=a(s.value)),s}),e}const Sd=Array.prototype;function Ua(t,n,a,r,e,s){const o=Se(t),i=o!==t&&!ba(t),l=o[n];if(l!==Sd[n]){const u=l.apply(t,s);return i?Bn(u):u}let c=a;o!==t&&(i?c=function(u,h){return a.call(this,Bn(u),h,t)}:a.length>2&&(c=function(u,h){return a.call(this,u,h,t)}));const p=l.call(o,c,r);return i&&e?e(p):p}function Mo(t,n,a,r){const e=Se(t);let s=a;return e!==t&&(ba(t)?a.length>3&&(s=function(o,i,l){return a.call(this,o,i,l,t)}):s=function(o,i,l){return a.call(this,o,Bn(i),l,t)}),e[n](s,...r)}function He(t,n,a){const r=gn(t);Gn(r,"iterate",Cs);const e=r[n](...a);return(e===-1||e===!1)&&$r(a[0])?(a[0]=gn(a[0]),r[n](...a)):e}function rs(t,n,a=[]){Ya(),Wr();const r=gn(t)[n].apply(t,a);return Hr(),qa(),r}const Cd=Or("__proto__,__v_isRef,__isVue"),tl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ut));function Td(t){ut(t)||(t=String(t));const n=gn(this);return Gn(n,"has",t),n.hasOwnProperty(t)}class sl{constructor(n=!1,a=!1){this._isReadonly=n,this._isShallow=a}get(n,a,r){if(a==="__v_skip")return n.__v_skip;const e=this._isReadonly,s=this._isShallow;if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return s;if(a==="__v_raw")return r===(e?s?Dd:il:s?ol:rl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const o=en(n);if(!e){let l;if(o&&(l=_d[a]))return l;if(a==="hasOwnProperty")return Td}const i=Reflect.get(n,a,Yn(n)?n:r);return(ut(a)?tl.has(a):Cd(a))||(e||Gn(n,"get",a),s)?i:Yn(i)?o&&Br(a)?i:i.value:Tn(i)?e?pl(i):Yt(i):i}}class el extends sl{constructor(n=!1){super(!1,n)}set(n,a,r,e){let s=n[a];if(!this._isShallow){const l=lt(s);if(!ba(r)&&!lt(r)&&(s=gn(s),r=gn(r)),!en(n)&&Yn(s)&&!Yn(r))return l?!1:(s.value=r,!0)}const o=en(n)&&Br(a)?Number(a)<n.length:yn(n,a),i=Reflect.set(n,a,r,Yn(n)?n:e);return n===gn(e)&&(o?rt(r,s)&&Va(n,"set",a,r):Va(n,"add",a,r)),i}deleteProperty(n,a){const r=yn(n,a);n[a];const e=Reflect.deleteProperty(n,a);return e&&r&&Va(n,"delete",a,void 0),e}has(n,a){const r=Reflect.has(n,a);return(!ut(a)||!tl.has(a))&&Gn(n,"has",a),r}ownKeys(n){return Gn(n,"iterate",en(n)?"length":xt),Reflect.ownKeys(n)}}class Pd extends sl{constructor(n=!1){super(!0,n)}set(n,a){return!0}deleteProperty(n,a){return!0}}const Ad=new el,Md=new Pd,Rd=new el(!0);const lr=t=>t,Hs=t=>Reflect.getPrototypeOf(t);function Ed(t,n,a){return function(...r){const e=this.__v_raw,s=gn(e),o=Lt(s),i=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=e[t](...r),p=a?lr:n?ee:Bn;return!n&&Gn(s,"iterate",l?ir:xt),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:i?[p(u[0]),p(u[1])]:p(u),done:h}},[Symbol.iterator](){return this}}}}function Ns(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function Id(t,n){const a={get(e){const s=this.__v_raw,o=gn(s),i=gn(e);t||(rt(e,i)&&Gn(o,"get",e),Gn(o,"get",i));const{has:l}=Hs(o),c=n?lr:t?ee:Bn;if(l.call(o,e))return c(s.get(e));if(l.call(o,i))return c(s.get(i));s!==o&&s.get(e)},get size(){const e=this.__v_raw;return!t&&Gn(gn(e),"iterate",xt),Reflect.get(e,"size",e)},has(e){const s=this.__v_raw,o=gn(s),i=gn(e);return t||(rt(e,i)&&Gn(o,"has",e),Gn(o,"has",i)),e===i?s.has(e):s.has(e)||s.has(i)},forEach(e,s){const o=this,i=o.__v_raw,l=gn(i),c=n?lr:t?ee:Bn;return!t&&Gn(l,"iterate",xt),i.forEach((p,u)=>e.call(s,c(p),c(u),o))}};return $n(a,t?{add:Ns("add"),set:Ns("set"),delete:Ns("delete"),clear:Ns("clear")}:{add(e){!n&&!ba(e)&&!lt(e)&&(e=gn(e));const s=gn(this);return Hs(s).has.call(s,e)||(s.add(e),Va(s,"add",e,e)),this},set(e,s){!n&&!ba(s)&&!lt(s)&&(s=gn(s));const o=gn(this),{has:i,get:l}=Hs(o);let c=i.call(o,e);c||(e=gn(e),c=i.call(o,e));const p=l.call(o,e);return o.set(e,s),c?rt(s,p)&&Va(o,"set",e,s):Va(o,"add",e,s),this},delete(e){const s=gn(this),{has:o,get:i}=Hs(s);let l=o.call(s,e);l||(e=gn(e),l=o.call(s,e)),i&&i.call(s,e);const c=s.delete(e);return l&&Va(s,"delete",e,void 0),c},clear(){const e=gn(this),s=e.size!==0,o=e.clear();return s&&Va(e,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(e=>{a[e]=Ed(e,t,n)}),a}function Yr(t,n){const a=Id(t,n);return(r,e,s)=>e==="__v_isReactive"?!t:e==="__v_isReadonly"?t:e==="__v_raw"?r:Reflect.get(yn(a,e)&&e in r?a:r,e,s)}const Fd={get:Yr(!1,!1)},zd={get:Yr(!1,!0)},Od={get:Yr(!0,!1)};const rl=new WeakMap,ol=new WeakMap,il=new WeakMap,Dd=new WeakMap;function Ld(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bd(t){return t.__v_skip||!Object.isExtensible(t)?0:Ld(dd(t))}function Yt(t){return lt(t)?t:qr(t,!1,Ad,Fd,rl)}function ll(t){return qr(t,!1,Rd,zd,ol)}function pl(t){return qr(t,!0,Md,Od,il)}function qr(t,n,a,r,e){if(!Tn(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const s=Bd(t);if(s===0)return t;const o=e.get(t);if(o)return o;const i=new Proxy(t,s===2?r:a);return e.set(t,i),i}function Bt(t){return lt(t)?Bt(t.__v_raw):!!(t&&t.__v_isReactive)}function lt(t){return!!(t&&t.__v_isReadonly)}function ba(t){return!!(t&&t.__v_isShallow)}function $r(t){return t?!!t.__v_raw:!1}function gn(t){const n=t&&t.__v_raw;return n?gn(n):t}function Ud(t){return!yn(t,"__v_skip")&&Object.isExtensible(t)&&Ni(t,"__v_skip",!0),t}const Bn=t=>Tn(t)?Yt(t):t,ee=t=>Tn(t)?pl(t):t;function Yn(t){return t?t.__v_isRef===!0:!1}function wn(t){return dl(t,!1)}function Gd(t){return dl(t,!0)}function dl(t,n){return Yn(t)?t:new Wd(t,n)}class Wd{constructor(n,a){this.dep=new Vr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?n:gn(n),this._value=a?n:Bn(n),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(n){const a=this._rawValue,r=this.__v_isShallow||ba(n)||lt(n);n=r?n:gn(n),rt(n,a)&&(this._rawValue=n,this._value=r?n:Bn(n),this.dep.trigger())}}function ja(t){return Yn(t)?t.value:t}const Hd={get:(t,n,a)=>n==="__v_raw"?t:ja(Reflect.get(t,n,a)),set:(t,n,a,r)=>{const e=t[n];return Yn(e)&&!Yn(a)?(e.value=a,!0):Reflect.set(t,n,a,r)}};function cl(t){return Bt(t)?t:new Proxy(t,Hd)}class Nd{constructor(n,a,r){this.fn=n,this.setter=a,this._value=void 0,this.dep=new Vr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ss-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&jn!==this)return Ki(this,!0),!0}get value(){const n=this.dep.track();return Qi(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Vd(t,n,a=!1){let r,e;return rn(t)?r=t:(r=t.get,e=t.set),new Nd(r,e,a)}const Vs={},re=new WeakMap;let bt;function Yd(t,n=!1,a=bt){if(a){let r=re.get(a);r||re.set(a,r=[]),r.push(t)}}function qd(t,n,a=_n){const{immediate:r,deep:e,once:s,scheduler:o,augmentJob:i,call:l}=a,c=S=>e?S:ba(S)||e===!1||e===0?at(S,1):at(S);let p,u,h,d,m=!1,f=!1;if(Yn(t)?(u=()=>t.value,m=ba(t)):Bt(t)?(u=()=>c(t),m=!0):en(t)?(f=!0,m=t.some(S=>Bt(S)||ba(S)),u=()=>t.map(S=>{if(Yn(S))return S.value;if(Bt(S))return c(S);if(rn(S))return l?l(S,2):S()})):rn(t)?n?u=l?()=>l(t,2):t:u=()=>{if(h){Ya();try{h()}finally{qa()}}const S=bt;bt=p;try{return l?l(t,3,[d]):t(d)}finally{bt=S}}:u=za,n&&e){const S=u,y=e===!0?1/0:e;u=()=>at(S(),y)}const g=wd(),b=()=>{p.stop(),g&&g.active&&Lr(g.effects,p)};if(s&&n){const S=n;n=(...y)=>{S(...y),b()}}let w=f?new Array(t.length).fill(Vs):Vs;const _=S=>{if(!(!(p.flags&1)||!p.dirty&&!S))if(n){const y=p.run();if(e||m||(f?y.some((x,v)=>rt(x,w[v])):rt(y,w))){h&&h();const x=bt;bt=p;try{const v=[y,w===Vs?void 0:f&&w[0]===Vs?[]:w,d];w=y,l?l(n,3,v):n(...v)}finally{bt=x}}}else p.run()};return i&&i(_),p=new $i(u),p.scheduler=o?()=>o(_,!1):_,d=S=>Yd(S,!1,p),h=p.onStop=()=>{const S=re.get(p);if(S){if(l)l(S,4);else for(const y of S)y();re.delete(p)}},n?r?_(!0):w=p.run():o?o(_.bind(null,!0),!0):p.run(),b.pause=p.pause.bind(p),b.resume=p.resume.bind(p),b.stop=b,b}function at(t,n=1/0,a){if(n<=0||!Tn(t)||t.__v_skip||(a=a||new Set,a.has(t)))return t;if(a.add(t),n--,Yn(t))at(t.value,n,a);else if(en(t))for(let r=0;r<t.length;r++)at(t[r],n,a);else if(Ui(t)||Lt(t))t.forEach(r=>{at(r,n,a)});else if(Hi(t)){for(const r in t)at(t[r],n,a);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&at(t[r],n,a)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Us(t,n,a,r){try{return r?t(...r):t()}catch(e){Ce(e,n,a)}}function Da(t,n,a,r){if(rn(t)){const e=Us(t,n,a,r);return e&&Gi(e)&&e.catch(s=>{Ce(s,n,a)}),e}if(en(t)){const e=[];for(let s=0;s<t.length;s++)e.push(Da(t[s],n,a,r));return e}}function Ce(t,n,a,r=!0){const e=n?n.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||_n;if(n){let i=n.parent;const l=n.proxy,c=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const p=i.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,l,c)===!1)return}i=i.parent}if(s){Ya(),Us(s,null,10,[t,l,c]),qa();return}}$d(t,a,e,r,o)}function $d(t,n,a,r=!0,e=!1){if(e)throw t;console.error(t)}const Kn=[];let Ma=-1;const Ut=[];let Ja=null,It=0;const ul=Promise.resolve();let oe=null;function Xr(t){const n=oe||ul;return t?n.then(this?t.bind(this):t):n}function Xd(t){let n=Ma+1,a=Kn.length;for(;n<a;){const r=n+a>>>1,e=Kn[r],s=Ts(e);s<t||s===t&&e.flags&2?n=r+1:a=r}return n}function Kr(t){if(!(t.flags&1)){const n=Ts(t),a=Kn[Kn.length-1];!a||!(t.flags&2)&&n>=Ts(a)?Kn.push(t):Kn.splice(Xd(n),0,t),t.flags|=1,hl()}}function hl(){oe||(oe=ul.then(ml))}function Kd(t){en(t)?Ut.push(...t):Ja&&t.id===-1?Ja.splice(It+1,0,t):t.flags&1||(Ut.push(t),t.flags|=1),hl()}function Ro(t,n,a=Ma+1){for(;a<Kn.length;a++){const r=Kn[a];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Kn.splice(a,1),a--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function fl(t){if(Ut.length){const n=[...new Set(Ut)].sort((a,r)=>Ts(a)-Ts(r));if(Ut.length=0,Ja){Ja.push(...n);return}for(Ja=n,It=0;It<Ja.length;It++){const a=Ja[It];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Ja=null,It=0}}const Ts=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ml(t){try{for(Ma=0;Ma<Kn.length;Ma++){const n=Kn[Ma];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Us(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ma<Kn.length;Ma++){const n=Kn[Ma];n&&(n.flags&=-2)}Ma=-1,Kn.length=0,fl(),oe=null,(Kn.length||Ut.length)&&ml()}}let wa=null,gl=null;function ie(t){const n=wa;return wa=t,gl=t&&t.type.__scopeId||null,n}function Gt(t,n=wa,a){if(!n||t._n)return t;const r=(...e)=>{r._d&&Go(-1);const s=ie(n);let o;try{o=t(...e)}finally{ie(s),r._d&&Go(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ft(t,n,a,r){const e=t.dirs,s=n&&n.dirs;for(let o=0;o<e.length;o++){const i=e[o];s&&(i.oldValue=s[o].value);let l=i.dir[r];l&&(Ya(),Da(l,a,8,[t.el,i,t,n]),qa())}}const Zd=Symbol("_vte"),Jd=t=>t.__isTeleport;function Zr(t,n){t.shapeFlag&6&&t.component?(t.transition=n,Zr(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function yl(t,n){return rn(t)?$n({name:t.name},n,{setup:t}):t}function kl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function le(t,n,a,r,e=!1){if(en(t)){t.forEach((m,f)=>le(m,n&&(en(n)?n[f]:n),a,r,e));return}if(ys(r)&&!e){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&le(t,n,a,r.component.subTree);return}const s=r.shapeFlag&4?to(r.component):r.el,o=e?null:s,{i,r:l}=t,c=n&&n.r,p=i.refs===_n?i.refs={}:i.refs,u=i.setupState,h=gn(u),d=u===_n?()=>!1:m=>yn(h,m);if(c!=null&&c!==l&&(En(c)?(p[c]=null,d(c)&&(u[c]=null)):Yn(c)&&(c.value=null)),rn(l))Us(l,i,12,[o,p]);else{const m=En(l),f=Yn(l);if(m||f){const g=()=>{if(t.f){const b=m?d(l)?u[l]:p[l]:l.value;e?en(b)&&Lr(b,s):en(b)?b.includes(s)||b.push(s):m?(p[l]=[s],d(l)&&(u[l]=p[l])):(l.value=[s],t.k&&(p[t.k]=l.value))}else m?(p[l]=o,d(l)&&(u[l]=o)):f&&(l.value=o,t.k&&(p[t.k]=o))};o?(g.id=-1,ia(g,a)):g()}}}_e().requestIdleCallback;_e().cancelIdleCallback;const ys=t=>!!t.type.__asyncLoader,bl=t=>t.type.__isKeepAlive;function Qd(t,n){vl(t,"a",n)}function nc(t,n){vl(t,"da",n)}function vl(t,n,a=Hn){const r=t.__wdc||(t.__wdc=()=>{let e=a;for(;e;){if(e.isDeactivated)return;e=e.parent}return t()});if(Te(n,r,a),a){let e=a.parent;for(;e&&e.parent;)bl(e.parent.vnode)&&ac(r,n,a,e),e=e.parent}}function ac(t,n,a,r){const e=Te(n,t,r,!0);Pe(()=>{Lr(r[n],e)},a)}function Te(t,n,a=Hn,r=!1){if(a){const e=a[t]||(a[t]=[]),s=n.__weh||(n.__weh=(...o)=>{Ya();const i=Gs(a),l=Da(n,a,t,o);return i(),qa(),l});return r?e.unshift(s):e.push(s),s}}const Ka=t=>(n,a=Hn)=>{(!As||t==="sp")&&Te(t,(...r)=>n(...r),a)},tc=Ka("bm"),Ba=Ka("m"),sc=Ka("bu"),ec=Ka("u"),ts=Ka("bum"),Pe=Ka("um"),rc=Ka("sp"),oc=Ka("rtg"),ic=Ka("rtc");function lc(t,n=Hn){Te("ec",t,n)}const wl="components";function pc(t,n){return jl(wl,t,!0,n)||t}const xl=Symbol.for("v-ndc");function dc(t){return En(t)?jl(wl,t,!1)||t:t||xl}function jl(t,n,a=!0,r=!1){const e=wa||Hn;if(e){const s=e.type;{const i=Kc(s,!1);if(i&&(i===n||i===va(n)||i===je(va(n))))return s}const o=Eo(e[t]||s[t],n)||Eo(e.appContext[t],n);return!o&&r?s:o}}function Eo(t,n){return t&&(t[n]||t[va(n)]||t[je(va(n))])}function pr(t,n,a,r){let e;const s=a,o=en(t);if(o||En(t)){const i=o&&Bt(t);let l=!1,c=!1;i&&(l=!ba(t),c=lt(t),t=Se(t)),e=new Array(t.length);for(let p=0,u=t.length;p<u;p++)e[p]=n(l?c?ee(Bn(t[p])):Bn(t[p]):t[p],p,void 0,s)}else if(typeof t=="number"){e=new Array(t);for(let i=0;i<t;i++)e[i]=n(i+1,i,void 0,s)}else if(Tn(t))if(t[Symbol.iterator])e=Array.from(t,(i,l)=>n(i,l,void 0,s));else{const i=Object.keys(t);e=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const p=i[l];e[l]=n(t[p],p,l,s)}}else e=[];return e}const dr=t=>t?Hl(t)?to(t):dr(t.parent):null,ks=$n(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dr(t.parent),$root:t=>dr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sl(t),$forceUpdate:t=>t.f||(t.f=()=>{Kr(t.update)}),$nextTick:t=>t.n||(t.n=Xr.bind(t.proxy)),$watch:t=>Rc.bind(t)}),Ne=(t,n)=>t!==_n&&!t.__isScriptSetup&&yn(t,n),cc={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:a,setupState:r,data:e,props:s,accessCache:o,type:i,appContext:l}=t;let c;if(n[0]!=="$"){const d=o[n];if(d!==void 0)switch(d){case 1:return r[n];case 2:return e[n];case 4:return a[n];case 3:return s[n]}else{if(Ne(r,n))return o[n]=1,r[n];if(e!==_n&&yn(e,n))return o[n]=2,e[n];if((c=t.propsOptions[0])&&yn(c,n))return o[n]=3,s[n];if(a!==_n&&yn(a,n))return o[n]=4,a[n];cr&&(o[n]=0)}}const p=ks[n];let u,h;if(p)return n==="$attrs"&&Gn(t.attrs,"get",""),p(t);if((u=i.__cssModules)&&(u=u[n]))return u;if(a!==_n&&yn(a,n))return o[n]=4,a[n];if(h=l.config.globalProperties,yn(h,n))return h[n]},set({_:t},n,a){const{data:r,setupState:e,ctx:s}=t;return Ne(e,n)?(e[n]=a,!0):r!==_n&&yn(r,n)?(r[n]=a,!0):yn(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(s[n]=a,!0)},has({_:{data:t,setupState:n,accessCache:a,ctx:r,appContext:e,propsOptions:s}},o){let i;return!!a[o]||t!==_n&&yn(t,o)||Ne(n,o)||(i=s[0])&&yn(i,o)||yn(r,o)||yn(ks,o)||yn(e.config.globalProperties,o)},defineProperty(t,n,a){return a.get!=null?t._.accessCache[n]=0:yn(a,"value")&&this.set(t,n,a.value,null),Reflect.defineProperty(t,n,a)}};function Io(t){return en(t)?t.reduce((n,a)=>(n[a]=null,n),{}):t}let cr=!0;function uc(t){const n=Sl(t),a=t.proxy,r=t.ctx;cr=!1,n.beforeCreate&&Fo(n.beforeCreate,t,"bc");const{data:e,computed:s,methods:o,watch:i,provide:l,inject:c,created:p,beforeMount:u,mounted:h,beforeUpdate:d,updated:m,activated:f,deactivated:g,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:S,render:y,renderTracked:x,renderTriggered:v,errorCaptured:k,serverPrefetch:j,expose:C,inheritAttrs:P,components:T,directives:E,filters:I}=n;if(c&&hc(c,r,null),o)for(const D in o){const V=o[D];rn(V)&&(r[D]=V.bind(a))}if(e){const D=e.call(a,a);Tn(D)&&(t.data=Yt(D))}if(cr=!0,s)for(const D in s){const V=s[D],nn=rn(V)?V.bind(a,a):rn(V.get)?V.get.bind(a,a):za,on=!rn(V)&&rn(V.set)?V.set.bind(a):za,pn=na({get:nn,set:on});Object.defineProperty(r,D,{enumerable:!0,configurable:!0,get:()=>pn.value,set:sn=>pn.value=sn})}if(i)for(const D in i)_l(i[D],r,a,D);if(l){const D=rn(l)?l.call(a):l;Reflect.ownKeys(D).forEach(V=>{qs(V,D[V])})}p&&Fo(p,t,"c");function U(D,V){en(V)?V.forEach(nn=>D(nn.bind(a))):V&&D(V.bind(a))}if(U(tc,u),U(Ba,h),U(sc,d),U(ec,m),U(Qd,f),U(nc,g),U(lc,k),U(ic,x),U(oc,v),U(ts,w),U(Pe,S),U(rc,j),en(C))if(C.length){const D=t.exposed||(t.exposed={});C.forEach(V=>{Object.defineProperty(D,V,{get:()=>a[V],set:nn=>a[V]=nn})})}else t.exposed||(t.exposed={});y&&t.render===za&&(t.render=y),P!=null&&(t.inheritAttrs=P),T&&(t.components=T),E&&(t.directives=E),j&&kl(t)}function hc(t,n,a=za){en(t)&&(t=ur(t));for(const r in t){const e=t[r];let s;Tn(e)?"default"in e?s=_a(e.from||r,e.default,!0):s=_a(e.from||r):s=_a(e),Yn(s)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):n[r]=s}}function Fo(t,n,a){Da(en(t)?t.map(r=>r.bind(n.proxy)):t.bind(n.proxy),n,a)}function _l(t,n,a,r){let e=r.includes(".")?Ll(a,r):()=>a[r];if(En(t)){const s=n[t];rn(s)&&$s(e,s)}else if(rn(t))$s(e,t.bind(a));else if(Tn(t))if(en(t))t.forEach(s=>_l(s,n,a,r));else{const s=rn(t.handler)?t.handler.bind(a):n[t.handler];rn(s)&&$s(e,s,t)}}function Sl(t){const n=t.type,{mixins:a,extends:r}=n,{mixins:e,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,i=s.get(n);let l;return i?l=i:!e.length&&!a&&!r?l=n:(l={},e.length&&e.forEach(c=>pe(l,c,o,!0)),pe(l,n,o)),Tn(n)&&s.set(n,l),l}function pe(t,n,a,r=!1){const{mixins:e,extends:s}=n;s&&pe(t,s,a,!0),e&&e.forEach(o=>pe(t,o,a,!0));for(const o in n)if(!(r&&o==="expose")){const i=fc[o]||a&&a[o];t[o]=i?i(t[o],n[o]):n[o]}return t}const fc={data:zo,props:Oo,emits:Oo,methods:cs,computed:cs,beforeCreate:Xn,created:Xn,beforeMount:Xn,mounted:Xn,beforeUpdate:Xn,updated:Xn,beforeDestroy:Xn,beforeUnmount:Xn,destroyed:Xn,unmounted:Xn,activated:Xn,deactivated:Xn,errorCaptured:Xn,serverPrefetch:Xn,components:cs,directives:cs,watch:gc,provide:zo,inject:mc};function zo(t,n){return n?t?function(){return $n(rn(t)?t.call(this,this):t,rn(n)?n.call(this,this):n)}:n:t}function mc(t,n){return cs(ur(t),ur(n))}function ur(t){if(en(t)){const n={};for(let a=0;a<t.length;a++)n[t[a]]=t[a];return n}return t}function Xn(t,n){return t?[...new Set([].concat(t,n))]:n}function cs(t,n){return t?$n(Object.create(null),t,n):n}function Oo(t,n){return t?en(t)&&en(n)?[...new Set([...t,...n])]:$n(Object.create(null),Io(t),Io(n??{})):n}function gc(t,n){if(!t)return n;if(!n)return t;const a=$n(Object.create(null),t);for(const r in n)a[r]=Xn(t[r],n[r]);return a}function Cl(){return{app:null,config:{isNativeTag:ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yc=0;function kc(t,n){return function(r,e=null){rn(r)||(r=$n({},r)),e!=null&&!Tn(e)&&(e=null);const s=Cl(),o=new WeakSet,i=[];let l=!1;const c=s.app={_uid:yc++,_component:r,_props:e,_container:null,_context:s,_instance:null,version:Jc,get config(){return s.config},set config(p){},use(p,...u){return o.has(p)||(p&&rn(p.install)?(o.add(p),p.install(c,...u)):rn(p)&&(o.add(p),p(c,...u))),c},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),c},component(p,u){return u?(s.components[p]=u,c):s.components[p]},directive(p,u){return u?(s.directives[p]=u,c):s.directives[p]},mount(p,u,h){if(!l){const d=c._ceVNode||Sn(r,e);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(d,p,h),l=!0,c._container=p,p.__vue_app__=c,to(d.component)}},onUnmount(p){i.push(p)},unmount(){l&&(Da(i,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(p,u){return s.provides[p]=u,c},runWithContext(p){const u=Wt;Wt=c;try{return p()}finally{Wt=u}}};return c}}let Wt=null;function qs(t,n){if(Hn){let a=Hn.provides;const r=Hn.parent&&Hn.parent.provides;r===a&&(a=Hn.provides=Object.create(r)),a[t]=n}}function _a(t,n,a=!1){const r=Hn||wa;if(r||Wt){let e=Wt?Wt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(e&&t in e)return e[t];if(arguments.length>1)return a&&rn(n)?n.call(r&&r.proxy):n}}const Tl={},Pl=()=>Object.create(Tl),Al=t=>Object.getPrototypeOf(t)===Tl;function bc(t,n,a,r=!1){const e={},s=Pl();t.propsDefaults=Object.create(null),Ml(t,n,e,s);for(const o in t.propsOptions[0])o in e||(e[o]=void 0);a?t.props=r?e:ll(e):t.type.props?t.props=e:t.props=s,t.attrs=s}function vc(t,n,a,r){const{props:e,attrs:s,vnode:{patchFlag:o}}=t,i=gn(e),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=t.vnode.dynamicProps;for(let u=0;u<p.length;u++){let h=p[u];if(Ae(t.emitsOptions,h))continue;const d=n[h];if(l)if(yn(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const m=va(h);e[m]=hr(l,i,m,d,t,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Ml(t,n,e,s)&&(c=!0);let p;for(const u in i)(!n||!yn(n,u)&&((p=Pt(u))===u||!yn(n,p)))&&(l?a&&(a[u]!==void 0||a[p]!==void 0)&&(e[u]=hr(l,i,u,void 0,t,!0)):delete e[u]);if(s!==i)for(const u in s)(!n||!yn(n,u))&&(delete s[u],c=!0)}c&&Va(t.attrs,"set","")}function Ml(t,n,a,r){const[e,s]=t.propsOptions;let o=!1,i;if(n)for(let l in n){if(fs(l))continue;const c=n[l];let p;e&&yn(e,p=va(l))?!s||!s.includes(p)?a[p]=c:(i||(i={}))[p]=c:Ae(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=gn(a),c=i||_n;for(let p=0;p<s.length;p++){const u=s[p];a[u]=hr(e,l,u,c[u],t,!yn(c,u))}}return o}function hr(t,n,a,r,e,s){const o=t[a];if(o!=null){const i=yn(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rn(l)){const{propsDefaults:c}=e;if(a in c)r=c[a];else{const p=Gs(e);r=c[a]=l.call(null,n),p()}}else r=l;e.ce&&e.ce._setProp(a,r)}o[0]&&(s&&!i?r=!1:o[1]&&(r===""||r===Pt(a))&&(r=!0))}return r}const wc=new WeakMap;function Rl(t,n,a=!1){const r=a?wc:n.propsCache,e=r.get(t);if(e)return e;const s=t.props,o={},i=[];let l=!1;if(!rn(t)){const p=u=>{l=!0;const[h,d]=Rl(u,n,!0);$n(o,h),d&&i.push(...d)};!a&&n.mixins.length&&n.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!s&&!l)return Tn(t)&&r.set(t,Dt),Dt;if(en(s))for(let p=0;p<s.length;p++){const u=va(s[p]);Do(u)&&(o[u]=_n)}else if(s)for(const p in s){const u=va(p);if(Do(u)){const h=s[p],d=o[u]=en(h)||rn(h)?{type:h}:$n({},h),m=d.type;let f=!1,g=!0;if(en(m))for(let b=0;b<m.length;++b){const w=m[b],_=rn(w)&&w.name;if(_==="Boolean"){f=!0;break}else _==="String"&&(g=!1)}else f=rn(m)&&m.name==="Boolean";d[0]=f,d[1]=g,(f||yn(d,"default"))&&i.push(u)}}const c=[o,i];return Tn(t)&&r.set(t,c),c}function Do(t){return t[0]!=="$"&&!fs(t)}const Jr=t=>t[0]==="_"||t==="$stable",Qr=t=>en(t)?t.map(Ea):[Ea(t)],xc=(t,n,a)=>{if(n._n)return n;const r=Gt((...e)=>Qr(n(...e)),a);return r._c=!1,r},El=(t,n,a)=>{const r=t._ctx;for(const e in t){if(Jr(e))continue;const s=t[e];if(rn(s))n[e]=xc(e,s,r);else if(s!=null){const o=Qr(s);n[e]=()=>o}}},Il=(t,n)=>{const a=Qr(n);t.slots.default=()=>a},Fl=(t,n,a)=>{for(const r in n)(a||!Jr(r))&&(t[r]=n[r])},jc=(t,n,a)=>{const r=t.slots=Pl();if(t.vnode.shapeFlag&32){const e=n._;e?(Fl(r,n,a),a&&Ni(r,"_",e,!0)):El(n,r)}else n&&Il(t,n)},_c=(t,n,a)=>{const{vnode:r,slots:e}=t;let s=!0,o=_n;if(r.shapeFlag&32){const i=n._;i?a&&i===1?s=!1:Fl(e,n,a):(s=!n.$stable,El(n,e)),o=n}else n&&(Il(t,n),o={default:1});if(s)for(const i in e)!Jr(i)&&o[i]==null&&delete e[i]},ia=Lc;function Sc(t){return Cc(t)}function Cc(t,n){const a=_e();a.__VUE__=!0;const{insert:r,remove:e,patchProp:s,createElement:o,createText:i,createComment:l,setText:c,setElementText:p,parentNode:u,nextSibling:h,setScopeId:d=za,insertStaticContent:m}=t,f=(A,M,R,O=null,L=null,B=null,X=void 0,Y=null,q=!!M.dynamicChildren)=>{if(A===M)return;A&&!os(A,M)&&(O=F(A),sn(A,L,B,!0),A=null),M.patchFlag===-2&&(q=!1,M.dynamicChildren=null);const{type:W,ref:Q,shapeFlag:K}=M;switch(W){case Me:g(A,M,R,O);break;case pt:b(A,M,R,O);break;case Xs:A==null&&w(M,R,O,X);break;case Wn:T(A,M,R,O,L,B,X,Y,q);break;default:K&1?y(A,M,R,O,L,B,X,Y,q):K&6?E(A,M,R,O,L,B,X,Y,q):(K&64||K&128)&&W.process(A,M,R,O,L,B,X,Y,q,$)}Q!=null&&L&&le(Q,A&&A.ref,B,M||A,!M)},g=(A,M,R,O)=>{if(A==null)r(M.el=i(M.children),R,O);else{const L=M.el=A.el;M.children!==A.children&&c(L,M.children)}},b=(A,M,R,O)=>{A==null?r(M.el=l(M.children||""),R,O):M.el=A.el},w=(A,M,R,O)=>{[A.el,A.anchor]=m(A.children,M,R,O,A.el,A.anchor)},_=({el:A,anchor:M},R,O)=>{let L;for(;A&&A!==M;)L=h(A),r(A,R,O),A=L;r(M,R,O)},S=({el:A,anchor:M})=>{let R;for(;A&&A!==M;)R=h(A),e(A),A=R;e(M)},y=(A,M,R,O,L,B,X,Y,q)=>{M.type==="svg"?X="svg":M.type==="math"&&(X="mathml"),A==null?x(M,R,O,L,B,X,Y,q):j(A,M,L,B,X,Y,q)},x=(A,M,R,O,L,B,X,Y)=>{let q,W;const{props:Q,shapeFlag:K,transition:Z,dirs:an}=A;if(q=A.el=o(A.type,B,Q&&Q.is,Q),K&8?p(q,A.children):K&16&&k(A.children,q,null,O,L,Ve(A,B),X,Y),an&&ft(A,null,O,"created"),v(q,A,A.scopeId,X,O),Q){for(const bn in Q)bn!=="value"&&!fs(bn)&&s(q,bn,null,Q[bn],B,O);"value"in Q&&s(q,"value",null,Q.value,B),(W=Q.onVnodeBeforeMount)&&Aa(W,O,A)}an&&ft(A,null,O,"beforeMount");const ln=Tc(L,Z);ln&&Z.beforeEnter(q),r(q,M,R),((W=Q&&Q.onVnodeMounted)||ln||an)&&ia(()=>{W&&Aa(W,O,A),ln&&Z.enter(q),an&&ft(A,null,O,"mounted")},L)},v=(A,M,R,O,L)=>{if(R&&d(A,R),O)for(let B=0;B<O.length;B++)d(A,O[B]);if(L){let B=L.subTree;if(M===B||Ul(B.type)&&(B.ssContent===M||B.ssFallback===M)){const X=L.vnode;v(A,X,X.scopeId,X.slotScopeIds,L.parent)}}},k=(A,M,R,O,L,B,X,Y,q=0)=>{for(let W=q;W<A.length;W++){const Q=A[W]=Y?Qa(A[W]):Ea(A[W]);f(null,Q,M,R,O,L,B,X,Y)}},j=(A,M,R,O,L,B,X)=>{const Y=M.el=A.el;let{patchFlag:q,dynamicChildren:W,dirs:Q}=M;q|=A.patchFlag&16;const K=A.props||_n,Z=M.props||_n;let an;if(R&&mt(R,!1),(an=Z.onVnodeBeforeUpdate)&&Aa(an,R,M,A),Q&&ft(M,A,R,"beforeUpdate"),R&&mt(R,!0),(K.innerHTML&&Z.innerHTML==null||K.textContent&&Z.textContent==null)&&p(Y,""),W?C(A.dynamicChildren,W,Y,R,O,Ve(M,L),B):X||V(A,M,Y,null,R,O,Ve(M,L),B,!1),q>0){if(q&16)P(Y,K,Z,R,L);else if(q&2&&K.class!==Z.class&&s(Y,"class",null,Z.class,L),q&4&&s(Y,"style",K.style,Z.style,L),q&8){const ln=M.dynamicProps;for(let bn=0;bn<ln.length;bn++){const fn=ln[bn],Dn=K[fn],On=Z[fn];(On!==Dn||fn==="value")&&s(Y,fn,Dn,On,L,R)}}q&1&&A.children!==M.children&&p(Y,M.children)}else!X&&W==null&&P(Y,K,Z,R,L);((an=Z.onVnodeUpdated)||Q)&&ia(()=>{an&&Aa(an,R,M,A),Q&&ft(M,A,R,"updated")},O)},C=(A,M,R,O,L,B,X)=>{for(let Y=0;Y<M.length;Y++){const q=A[Y],W=M[Y],Q=q.el&&(q.type===Wn||!os(q,W)||q.shapeFlag&198)?u(q.el):R;f(q,W,Q,null,O,L,B,X,!0)}},P=(A,M,R,O,L)=>{if(M!==R){if(M!==_n)for(const B in M)!fs(B)&&!(B in R)&&s(A,B,M[B],null,L,O);for(const B in R){if(fs(B))continue;const X=R[B],Y=M[B];X!==Y&&B!=="value"&&s(A,B,Y,X,L,O)}"value"in R&&s(A,"value",M.value,R.value,L)}},T=(A,M,R,O,L,B,X,Y,q)=>{const W=M.el=A?A.el:i(""),Q=M.anchor=A?A.anchor:i("");let{patchFlag:K,dynamicChildren:Z,slotScopeIds:an}=M;an&&(Y=Y?Y.concat(an):an),A==null?(r(W,R,O),r(Q,R,O),k(M.children||[],R,Q,L,B,X,Y,q)):K>0&&K&64&&Z&&A.dynamicChildren?(C(A.dynamicChildren,Z,R,L,B,X,Y),(M.key!=null||L&&M===L.subTree)&&zl(A,M,!0)):V(A,M,R,Q,L,B,X,Y,q)},E=(A,M,R,O,L,B,X,Y,q)=>{M.slotScopeIds=Y,A==null?M.shapeFlag&512?L.ctx.activate(M,R,O,X,q):I(M,R,O,L,B,X,q):z(A,M,q)},I=(A,M,R,O,L,B,X)=>{const Y=A.component=Vc(A,O,L);if(bl(A)&&(Y.ctx.renderer=$),Yc(Y,!1,X),Y.asyncDep){if(L&&L.registerDep(Y,U,X),!A.el){const q=Y.subTree=Sn(pt);b(null,q,M,R)}}else U(Y,A,M,R,L,B,X)},z=(A,M,R)=>{const O=M.component=A.component;if(Oc(A,M,R))if(O.asyncDep&&!O.asyncResolved){D(O,M,R);return}else O.next=M,O.update();else M.el=A.el,O.vnode=M},U=(A,M,R,O,L,B,X)=>{const Y=()=>{if(A.isMounted){let{next:K,bu:Z,u:an,parent:ln,vnode:bn}=A;{const Ta=Ol(A);if(Ta){K&&(K.el=bn.el,D(A,K,X)),Ta.asyncDep.then(()=>{A.isUnmounted||Y()});return}}let fn=K,Dn;mt(A,!1),K?(K.el=bn.el,D(A,K,X)):K=bn,Z&&Be(Z),(Dn=K.props&&K.props.onVnodeBeforeUpdate)&&Aa(Dn,ln,K,bn),mt(A,!0);const On=Bo(A),Ca=A.subTree;A.subTree=On,f(Ca,On,u(Ca.el),F(Ca),A,L,B),K.el=On.el,fn===null&&Dc(A,On.el),an&&ia(an,L),(Dn=K.props&&K.props.onVnodeUpdated)&&ia(()=>Aa(Dn,ln,K,bn),L)}else{let K;const{el:Z,props:an}=M,{bm:ln,m:bn,parent:fn,root:Dn,type:On}=A,Ca=ys(M);mt(A,!1),ln&&Be(ln),!Ca&&(K=an&&an.onVnodeBeforeMount)&&Aa(K,fn,M),mt(A,!0);{Dn.ce&&Dn.ce._injectChildStyle(On);const Ta=A.subTree=Bo(A);f(null,Ta,R,O,A,L,B),M.el=Ta.el}if(bn&&ia(bn,L),!Ca&&(K=an&&an.onVnodeMounted)){const Ta=M;ia(()=>Aa(K,fn,Ta),L)}(M.shapeFlag&256||fn&&ys(fn.vnode)&&fn.vnode.shapeFlag&256)&&A.a&&ia(A.a,L),A.isMounted=!0,M=R=O=null}};A.scope.on();const q=A.effect=new $i(Y);A.scope.off();const W=A.update=q.run.bind(q),Q=A.job=q.runIfDirty.bind(q);Q.i=A,Q.id=A.uid,q.scheduler=()=>Kr(Q),mt(A,!0),W()},D=(A,M,R)=>{M.component=A;const O=A.vnode.props;A.vnode=M,A.next=null,vc(A,M.props,O,R),_c(A,M.children,R),Ya(),Ro(A),qa()},V=(A,M,R,O,L,B,X,Y,q=!1)=>{const W=A&&A.children,Q=A?A.shapeFlag:0,K=M.children,{patchFlag:Z,shapeFlag:an}=M;if(Z>0){if(Z&128){on(W,K,R,O,L,B,X,Y,q);return}else if(Z&256){nn(W,K,R,O,L,B,X,Y,q);return}}an&8?(Q&16&&J(W,L,B),K!==W&&p(R,K)):Q&16?an&16?on(W,K,R,O,L,B,X,Y,q):J(W,L,B,!0):(Q&8&&p(R,""),an&16&&k(K,R,O,L,B,X,Y,q))},nn=(A,M,R,O,L,B,X,Y,q)=>{A=A||Dt,M=M||Dt;const W=A.length,Q=M.length,K=Math.min(W,Q);let Z;for(Z=0;Z<K;Z++){const an=M[Z]=q?Qa(M[Z]):Ea(M[Z]);f(A[Z],an,R,null,L,B,X,Y,q)}W>Q?J(A,L,B,!0,!1,K):k(M,R,O,L,B,X,Y,q,K)},on=(A,M,R,O,L,B,X,Y,q)=>{let W=0;const Q=M.length;let K=A.length-1,Z=Q-1;for(;W<=K&&W<=Z;){const an=A[W],ln=M[W]=q?Qa(M[W]):Ea(M[W]);if(os(an,ln))f(an,ln,R,null,L,B,X,Y,q);else break;W++}for(;W<=K&&W<=Z;){const an=A[K],ln=M[Z]=q?Qa(M[Z]):Ea(M[Z]);if(os(an,ln))f(an,ln,R,null,L,B,X,Y,q);else break;K--,Z--}if(W>K){if(W<=Z){const an=Z+1,ln=an<Q?M[an].el:O;for(;W<=Z;)f(null,M[W]=q?Qa(M[W]):Ea(M[W]),R,ln,L,B,X,Y,q),W++}}else if(W>Z)for(;W<=K;)sn(A[W],L,B,!0),W++;else{const an=W,ln=W,bn=new Map;for(W=ln;W<=Z;W++){const oa=M[W]=q?Qa(M[W]):Ea(M[W]);oa.key!=null&&bn.set(oa.key,W)}let fn,Dn=0;const On=Z-ln+1;let Ca=!1,Ta=0;const es=new Array(On);for(W=0;W<On;W++)es[W]=0;for(W=an;W<=K;W++){const oa=A[W];if(Dn>=On){sn(oa,L,B,!0);continue}let Pa;if(oa.key!=null)Pa=bn.get(oa.key);else for(fn=ln;fn<=Z;fn++)if(es[fn-ln]===0&&os(oa,M[fn])){Pa=fn;break}Pa===void 0?sn(oa,L,B,!0):(es[Pa-ln]=W+1,Pa>=Ta?Ta=Pa:Ca=!0,f(oa,M[Pa],R,null,L,B,X,Y,q),Dn++)}const Co=Ca?Pc(es):Dt;for(fn=Co.length-1,W=On-1;W>=0;W--){const oa=ln+W,Pa=M[oa],To=oa+1<Q?M[oa+1].el:O;es[W]===0?f(null,Pa,R,To,L,B,X,Y,q):Ca&&(fn<0||W!==Co[fn]?pn(Pa,R,To,2):fn--)}}},pn=(A,M,R,O,L=null)=>{const{el:B,type:X,transition:Y,children:q,shapeFlag:W}=A;if(W&6){pn(A.component.subTree,M,R,O);return}if(W&128){A.suspense.move(M,R,O);return}if(W&64){X.move(A,M,R,$);return}if(X===Wn){r(B,M,R);for(let K=0;K<q.length;K++)pn(q[K],M,R,O);r(A.anchor,M,R);return}if(X===Xs){_(A,M,R);return}if(O!==2&&W&1&&Y)if(O===0)Y.beforeEnter(B),r(B,M,R),ia(()=>Y.enter(B),L);else{const{leave:K,delayLeave:Z,afterLeave:an}=Y,ln=()=>{A.ctx.isUnmounted?e(B):r(B,M,R)},bn=()=>{K(B,()=>{ln(),an&&an()})};Z?Z(B,ln,bn):bn()}else r(B,M,R)},sn=(A,M,R,O=!1,L=!1)=>{const{type:B,props:X,ref:Y,children:q,dynamicChildren:W,shapeFlag:Q,patchFlag:K,dirs:Z,cacheIndex:an}=A;if(K===-2&&(L=!1),Y!=null&&(Ya(),le(Y,null,R,A,!0),qa()),an!=null&&(M.renderCache[an]=void 0),Q&256){M.ctx.deactivate(A);return}const ln=Q&1&&Z,bn=!ys(A);let fn;if(bn&&(fn=X&&X.onVnodeBeforeUnmount)&&Aa(fn,M,A),Q&6)un(A.component,R,O);else{if(Q&128){A.suspense.unmount(R,O);return}ln&&ft(A,null,M,"beforeUnmount"),Q&64?A.type.remove(A,M,R,$,O):W&&!W.hasOnce&&(B!==Wn||K>0&&K&64)?J(W,M,R,!1,!0):(B===Wn&&K&384||!L&&Q&16)&&J(q,M,R),O&&cn(A)}(bn&&(fn=X&&X.onVnodeUnmounted)||ln)&&ia(()=>{fn&&Aa(fn,M,A),ln&&ft(A,null,M,"unmounted")},R)},cn=A=>{const{type:M,el:R,anchor:O,transition:L}=A;if(M===Wn){dn(R,O);return}if(M===Xs){S(A);return}const B=()=>{e(R),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(A.shapeFlag&1&&L&&!L.persisted){const{leave:X,delayLeave:Y}=L,q=()=>X(R,B);Y?Y(A.el,B,q):q()}else B()},dn=(A,M)=>{let R;for(;A!==M;)R=h(A),e(A),A=R;e(M)},un=(A,M,R)=>{const{bum:O,scope:L,job:B,subTree:X,um:Y,m:q,a:W,parent:Q,slots:{__:K}}=A;Lo(q),Lo(W),O&&Be(O),Q&&en(K)&&K.forEach(Z=>{Q.renderCache[Z]=void 0}),L.stop(),B&&(B.flags|=8,sn(X,A,M,R)),Y&&ia(Y,M),ia(()=>{A.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},J=(A,M,R,O=!1,L=!1,B=0)=>{for(let X=B;X<A.length;X++)sn(A[X],M,R,O,L)},F=A=>{if(A.shapeFlag&6)return F(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const M=h(A.anchor||A.el),R=M&&M[Zd];return R?h(R):M};let G=!1;const N=(A,M,R)=>{A==null?M._vnode&&sn(M._vnode,null,null,!0):f(M._vnode||null,A,M,null,null,null,R),M._vnode=A,G||(G=!0,Ro(),fl(),G=!1)},$={p:f,um:sn,m:pn,r:cn,mt:I,mc:k,pc:V,pbc:C,n:F,o:t};return{render:N,hydrate:void 0,createApp:kc(N)}}function Ve({type:t,props:n},a){return a==="svg"&&t==="foreignObject"||a==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:a}function mt({effect:t,job:n},a){a?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function Tc(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function zl(t,n,a=!1){const r=t.children,e=n.children;if(en(r)&&en(e))for(let s=0;s<r.length;s++){const o=r[s];let i=e[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=e[s]=Qa(e[s]),i.el=o.el),!a&&i.patchFlag!==-2&&zl(o,i)),i.type===Me&&(i.el=o.el),i.type===pt&&!i.el&&(i.el=o.el)}}function Pc(t){const n=t.slice(),a=[0];let r,e,s,o,i;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(e=a[a.length-1],t[e]<c){n[r]=e,a.push(r);continue}for(s=0,o=a.length-1;s<o;)i=s+o>>1,t[a[i]]<c?s=i+1:o=i;c<t[a[s]]&&(s>0&&(n[r]=a[s-1]),a[s]=r)}}for(s=a.length,o=a[s-1];s-- >0;)a[s]=o,o=n[o];return a}function Ol(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ol(n)}function Lo(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const Ac=Symbol.for("v-scx"),Mc=()=>_a(Ac);function $s(t,n,a){return Dl(t,n,a)}function Dl(t,n,a=_n){const{immediate:r,deep:e,flush:s,once:o}=a,i=$n({},a),l=n&&r||!n&&s!=="post";let c;if(As){if(s==="sync"){const d=Mc();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=za,d.resume=za,d.pause=za,d}}const p=Hn;i.call=(d,m,f)=>Da(d,p,m,f);let u=!1;s==="post"?i.scheduler=d=>{ia(d,p&&p.suspense)}:s!=="sync"&&(u=!0,i.scheduler=(d,m)=>{m?d():Kr(d)}),i.augmentJob=d=>{n&&(d.flags|=4),u&&(d.flags|=2,p&&(d.id=p.uid,d.i=p))};const h=qd(t,n,i);return As&&(c?c.push(h):l&&h()),h}function Rc(t,n,a){const r=this.proxy,e=En(t)?t.includes(".")?Ll(r,t):()=>r[t]:t.bind(r,r);let s;rn(n)?s=n:(s=n.handler,a=n);const o=Gs(this),i=Dl(e,s.bind(r),a);return o(),i}function Ll(t,n){const a=n.split(".");return()=>{let r=t;for(let e=0;e<a.length&&r;e++)r=r[a[e]];return r}}const Ec=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${va(n)}Modifiers`]||t[`${Pt(n)}Modifiers`];function Ic(t,n,...a){if(t.isUnmounted)return;const r=t.vnode.props||_n;let e=a;const s=n.startsWith("update:"),o=s&&Ec(r,n.slice(7));o&&(o.trim&&(e=a.map(p=>En(p)?p.trim():p)),o.number&&(e=a.map(hd)));let i,l=r[i=Le(n)]||r[i=Le(va(n))];!l&&s&&(l=r[i=Le(Pt(n))]),l&&Da(l,t,6,e);const c=r[i+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Da(c,t,6,e)}}function Bl(t,n,a=!1){const r=n.emitsCache,e=r.get(t);if(e!==void 0)return e;const s=t.emits;let o={},i=!1;if(!rn(t)){const l=c=>{const p=Bl(c,n,!0);p&&(i=!0,$n(o,p))};!a&&n.mixins.length&&n.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!i?(Tn(t)&&r.set(t,null),null):(en(s)?s.forEach(l=>o[l]=null):$n(o,s),Tn(t)&&r.set(t,o),o)}function Ae(t,n){return!t||!ve(n)?!1:(n=n.slice(2).replace(/Once$/,""),yn(t,n[0].toLowerCase()+n.slice(1))||yn(t,Pt(n))||yn(t,n))}function Bo(t){const{type:n,vnode:a,proxy:r,withProxy:e,propsOptions:[s],slots:o,attrs:i,emit:l,render:c,renderCache:p,props:u,data:h,setupState:d,ctx:m,inheritAttrs:f}=t,g=ie(t);let b,w;try{if(a.shapeFlag&4){const S=e||r,y=S;b=Ea(c.call(y,S,p,u,d,h,m)),w=i}else{const S=n;b=Ea(S.length>1?S(u,{attrs:i,slots:o,emit:l}):S(u,null)),w=n.props?i:Fc(i)}}catch(S){bs.length=0,Ce(S,t,1),b=Sn(pt)}let _=b;if(w&&f!==!1){const S=Object.keys(w),{shapeFlag:y}=_;S.length&&y&7&&(s&&S.some(Dr)&&(w=zc(w,s)),_=qt(_,w,!1,!0))}return a.dirs&&(_=qt(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(a.dirs):a.dirs),a.transition&&Zr(_,a.transition),b=_,ie(g),b}const Fc=t=>{let n;for(const a in t)(a==="class"||a==="style"||ve(a))&&((n||(n={}))[a]=t[a]);return n},zc=(t,n)=>{const a={};for(const r in t)(!Dr(r)||!(r.slice(9)in n))&&(a[r]=t[r]);return a};function Oc(t,n,a){const{props:r,children:e,component:s}=t,{props:o,children:i,patchFlag:l}=n,c=s.emitsOptions;if(n.dirs||n.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return r?Uo(r,o,c):!!o;if(l&8){const p=n.dynamicProps;for(let u=0;u<p.length;u++){const h=p[u];if(o[h]!==r[h]&&!Ae(c,h))return!0}}}else return(e||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?Uo(r,o,c):!0:!!o;return!1}function Uo(t,n,a){const r=Object.keys(n);if(r.length!==Object.keys(t).length)return!0;for(let e=0;e<r.length;e++){const s=r[e];if(n[s]!==t[s]&&!Ae(a,s))return!0}return!1}function Dc({vnode:t,parent:n},a){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=n.vnode).el=a,n=n.parent;else break}}const Ul=t=>t.__isSuspense;function Lc(t,n){n&&n.pendingBranch?en(t)?n.effects.push(...t):n.effects.push(t):Kd(t)}const Wn=Symbol.for("v-fgt"),Me=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Xs=Symbol.for("v-stc"),bs=[];let da=null;function kn(t=!1){bs.push(da=t?null:[])}function Bc(){bs.pop(),da=bs[bs.length-1]||null}let Ps=1;function Go(t,n=!1){Ps+=t,t<0&&da&&n&&(da.hasOnce=!0)}function Gl(t){return t.dynamicChildren=Ps>0?da||Dt:null,Bc(),Ps>0&&da&&da.push(t),t}function xn(t,n,a,r,e,s){return Gl(H(t,n,a,r,e,s,!0))}function no(t,n,a,r,e){return Gl(Sn(t,n,a,r,e,!0))}function de(t){return t?t.__v_isVNode===!0:!1}function os(t,n){return t.type===n.type&&t.key===n.key}const Wl=({key:t})=>t??null,Ks=({ref:t,ref_key:n,ref_for:a})=>(typeof t=="number"&&(t=""+t),t!=null?En(t)||Yn(t)||rn(t)?{i:wa,r:t,k:n,f:!!a}:t:null);function H(t,n=null,a=null,r=0,e=null,s=t===Wn?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Wl(n),ref:n&&Ks(n),scopeId:gl,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:e,dynamicChildren:null,appContext:null,ctx:wa};return i?(ao(l,a),s&128&&t.normalize(l)):a&&(l.shapeFlag|=En(a)?8:16),Ps>0&&!o&&da&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&da.push(l),l}const Sn=Uc;function Uc(t,n=null,a=null,r=0,e=null,s=!1){if((!t||t===xl)&&(t=pt),de(t)){const i=qt(t,n,!0);return a&&ao(i,a),Ps>0&&!s&&da&&(i.shapeFlag&6?da[da.indexOf(t)]=i:da.push(i)),i.patchFlag=-2,i}if(Zc(t)&&(t=t.__vccOpts),n){n=Gc(n);let{class:i,style:l}=n;i&&!En(i)&&(n.class=Gr(i)),Tn(l)&&($r(l)&&!en(l)&&(l=$n({},l)),n.style=Ur(l))}const o=En(t)?1:Ul(t)?128:Jd(t)?64:Tn(t)?4:rn(t)?2:0;return H(t,n,a,r,e,o,s,!0)}function Gc(t){return t?$r(t)||Al(t)?$n({},t):t:null}function qt(t,n,a=!1,r=!1){const{props:e,ref:s,patchFlag:o,children:i,transition:l}=t,c=n?Wc(e||{},n):e,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Wl(c),ref:n&&n.ref?a&&s?en(s)?s.concat(Ks(n)):[s,Ks(n)]:Ks(n):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Wn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qt(t.ssContent),ssFallback:t.ssFallback&&qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Zr(p,l.clone(p)),p}function Jn(t=" ",n=0){return Sn(Me,null,t,n)}function fr(t,n){const a=Sn(Xs,null,t);return a.staticCount=n,a}function ce(t="",n=!1){return n?(kn(),no(pt,null,t)):Sn(pt,null,t)}function Ea(t){return t==null||typeof t=="boolean"?Sn(pt):en(t)?Sn(Wn,null,t.slice()):de(t)?Qa(t):Sn(Me,null,String(t))}function Qa(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qt(t)}function ao(t,n){let a=0;const{shapeFlag:r}=t;if(n==null)n=null;else if(en(n))a=16;else if(typeof n=="object")if(r&65){const e=n.default;e&&(e._c&&(e._d=!1),ao(t,e()),e._c&&(e._d=!0));return}else{a=32;const e=n._;!e&&!Al(n)?n._ctx=wa:e===3&&wa&&(wa.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else rn(n)?(n={default:n,_ctx:wa},a=32):(n=String(n),r&64?(a=16,n=[Jn(n)]):a=8);t.children=n,t.shapeFlag|=a}function Wc(...t){const n={};for(let a=0;a<t.length;a++){const r=t[a];for(const e in r)if(e==="class")n.class!==r.class&&(n.class=Gr([n.class,r.class]));else if(e==="style")n.style=Ur([n.style,r.style]);else if(ve(e)){const s=n[e],o=r[e];o&&s!==o&&!(en(s)&&s.includes(o))&&(n[e]=s?[].concat(s,o):o)}else e!==""&&(n[e]=r[e])}return n}function Aa(t,n,a,r=null){Da(t,n,7,[a,r])}const Hc=Cl();let Nc=0;function Vc(t,n,a){const r=t.type,e=(n?n.appContext:t.appContext)||Hc,s={uid:Nc++,vnode:t,type:r,parent:n,appContext:e,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(e.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rl(r,e),emitsOptions:Bl(r,e),emit:null,emitted:null,propsDefaults:_n,inheritAttrs:r.inheritAttrs,ctx:_n,data:_n,props:_n,attrs:_n,slots:_n,refs:_n,setupState:_n,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Ic.bind(null,s),t.ce&&t.ce(s),s}let Hn=null,ue,mr;{const t=_e(),n=(a,r)=>{let e;return(e=t[a])||(e=t[a]=[]),e.push(r),s=>{e.length>1?e.forEach(o=>o(s)):e[0](s)}};ue=n("__VUE_INSTANCE_SETTERS__",a=>Hn=a),mr=n("__VUE_SSR_SETTERS__",a=>As=a)}const Gs=t=>{const n=Hn;return ue(t),t.scope.on(),()=>{t.scope.off(),ue(n)}},Wo=()=>{Hn&&Hn.scope.off(),ue(null)};function Hl(t){return t.vnode.shapeFlag&4}let As=!1;function Yc(t,n=!1,a=!1){n&&mr(n);const{props:r,children:e}=t.vnode,s=Hl(t);bc(t,r,s,n),jc(t,e,a||n);const o=s?qc(t,n):void 0;return n&&mr(!1),o}function qc(t,n){const a=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cc);const{setup:r}=a;if(r){Ya();const e=t.setupContext=r.length>1?Xc(t):null,s=Gs(t),o=Us(r,t,0,[t.props,e]),i=Gi(o);if(qa(),s(),(i||t.sp)&&!ys(t)&&kl(t),i){if(o.then(Wo,Wo),n)return o.then(l=>{Ho(t,l)}).catch(l=>{Ce(l,t,0)});t.asyncDep=o}else Ho(t,o)}else Nl(t)}function Ho(t,n,a){rn(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Tn(n)&&(t.setupState=cl(n)),Nl(t)}function Nl(t,n,a){const r=t.type;t.render||(t.render=r.render||za);{const e=Gs(t);Ya();try{uc(t)}finally{qa(),e()}}}const $c={get(t,n){return Gn(t,"get",""),t[n]}};function Xc(t){const n=a=>{t.exposed=a||{}};return{attrs:new Proxy(t.attrs,$c),slots:t.slots,emit:t.emit,expose:n}}function to(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cl(Ud(t.exposed)),{get(n,a){if(a in n)return n[a];if(a in ks)return ks[a](t)},has(n,a){return a in n||a in ks}})):t.proxy}function Kc(t,n=!0){return rn(t)?t.displayName||t.name:t.name||n&&t.__name}function Zc(t){return rn(t)&&"__vccOpts"in t}const na=(t,n)=>Vd(t,n,As);function Vl(t,n,a){const r=arguments.length;return r===2?Tn(n)&&!en(n)?de(n)?Sn(t,null,[n]):Sn(t,n):Sn(t,null,n):(r>3?a=Array.prototype.slice.call(arguments,2):r===3&&de(a)&&(a=[a]),Sn(t,n,a))}const Jc="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gr;const No=typeof window<"u"&&window.trustedTypes;if(No)try{gr=No.createPolicy("vue",{createHTML:t=>t})}catch{}const Yl=gr?t=>gr.createHTML(t):t=>t,Qc="http://www.w3.org/2000/svg",nu="http://www.w3.org/1998/Math/MathML",Wa=typeof document<"u"?document:null,Vo=Wa&&Wa.createElement("template"),au={insert:(t,n,a)=>{n.insertBefore(t,a||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,a,r)=>{const e=n==="svg"?Wa.createElementNS(Qc,t):n==="mathml"?Wa.createElementNS(nu,t):a?Wa.createElement(t,{is:a}):Wa.createElement(t);return t==="select"&&r&&r.multiple!=null&&e.setAttribute("multiple",r.multiple),e},createText:t=>Wa.createTextNode(t),createComment:t=>Wa.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wa.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,a,r,e,s){const o=a?a.previousSibling:n.lastChild;if(e&&(e===s||e.nextSibling))for(;n.insertBefore(e.cloneNode(!0),a),!(e===s||!(e=e.nextSibling)););else{Vo.innerHTML=Yl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const i=Vo.content;if(r==="svg"||r==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,a)}return[o?o.nextSibling:n.firstChild,a?a.previousSibling:n.lastChild]}},tu=Symbol("_vtc");function su(t,n,a){const r=t[tu];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?t.removeAttribute("class"):a?t.setAttribute("class",n):t.className=n}const Yo=Symbol("_vod"),eu=Symbol("_vsh"),ru=Symbol(""),ou=/(^|;)\s*display\s*:/;function iu(t,n,a){const r=t.style,e=En(a);let s=!1;if(a&&!e){if(n)if(En(n))for(const o of n.split(";")){const i=o.slice(0,o.indexOf(":")).trim();a[i]==null&&Zs(r,i,"")}else for(const o in n)a[o]==null&&Zs(r,o,"");for(const o in a)o==="display"&&(s=!0),Zs(r,o,a[o])}else if(e){if(n!==a){const o=r[ru];o&&(a+=";"+o),r.cssText=a,s=ou.test(a)}}else n&&t.removeAttribute("style");Yo in t&&(t[Yo]=s?r.display:"",t[eu]&&(r.display="none"))}const qo=/\s*!important$/;function Zs(t,n,a){if(en(a))a.forEach(r=>Zs(t,n,r));else if(a==null&&(a=""),n.startsWith("--"))t.setProperty(n,a);else{const r=lu(t,n);qo.test(a)?t.setProperty(Pt(r),a.replace(qo,""),"important"):t[r]=a}}const $o=["Webkit","Moz","ms"],Ye={};function lu(t,n){const a=Ye[n];if(a)return a;let r=va(n);if(r!=="filter"&&r in t)return Ye[n]=r;r=je(r);for(let e=0;e<$o.length;e++){const s=$o[e]+r;if(s in t)return Ye[n]=s}return n}const Xo="http://www.w3.org/1999/xlink";function Ko(t,n,a,r,e,s=bd(n)){r&&n.startsWith("xlink:")?a==null?t.removeAttributeNS(Xo,n.slice(6,n.length)):t.setAttributeNS(Xo,n,a):a==null||s&&!Vi(a)?t.removeAttribute(n):t.setAttribute(n,s?"":ut(a)?String(a):a)}function Zo(t,n,a,r,e){if(n==="innerHTML"||n==="textContent"){a!=null&&(t[n]=n==="innerHTML"?Yl(a):a);return}const s=t.tagName;if(n==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?t.getAttribute("value")||"":t.value,l=a==null?t.type==="checkbox"?"on":"":String(a);(i!==l||!("_value"in t))&&(t.value=l),a==null&&t.removeAttribute(n),t._value=a;return}let o=!1;if(a===""||a==null){const i=typeof t[n];i==="boolean"?a=Vi(a):a==null&&i==="string"?(a="",o=!0):i==="number"&&(a=0,o=!0)}try{t[n]=a}catch{}o&&t.removeAttribute(e||n)}function pu(t,n,a,r){t.addEventListener(n,a,r)}function du(t,n,a,r){t.removeEventListener(n,a,r)}const Jo=Symbol("_vei");function cu(t,n,a,r,e=null){const s=t[Jo]||(t[Jo]={}),o=s[n];if(r&&o)o.value=r;else{const[i,l]=uu(n);if(r){const c=s[n]=mu(r,e);pu(t,i,c,l)}else o&&(du(t,i,o,l),s[n]=void 0)}}const Qo=/(?:Once|Passive|Capture)$/;function uu(t){let n;if(Qo.test(t)){n={};let r;for(;r=t.match(Qo);)t=t.slice(0,t.length-r[0].length),n[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pt(t.slice(2)),n]}let qe=0;const hu=Promise.resolve(),fu=()=>qe||(hu.then(()=>qe=0),qe=Date.now());function mu(t,n){const a=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=a.attached)return;Da(gu(r,a.value),n,5,[r])};return a.value=t,a.attached=fu(),a}function gu(t,n){if(en(n)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},n.map(r=>e=>!e._stopped&&r&&r(e))}else return n}const ni=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yu=(t,n,a,r,e,s)=>{const o=e==="svg";n==="class"?su(t,r,o):n==="style"?iu(t,a,r):ve(n)?Dr(n)||cu(t,n,a,r,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):ku(t,n,r,o))?(Zo(t,n,r),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Ko(t,n,r,o,s,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!En(r))?Zo(t,va(n),r,s,n):(n==="true-value"?t._trueValue=r:n==="false-value"&&(t._falseValue=r),Ko(t,n,r,o))};function ku(t,n,a,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in t&&ni(n)&&rn(a));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const e=t.tagName;if(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")return!1}return ni(n)&&En(a)?!1:n in t}const bu=$n({patchProp:yu},au);let ai;function vu(){return ai||(ai=Sc(bu))}const wu=(...t)=>{const n=vu().createApp(...t),{mount:a}=n;return n.mount=r=>{const e=ju(r);if(!e)return;const s=n._component;!rn(s)&&!s.render&&!s.template&&(s.template=e.innerHTML),e.nodeType===1&&(e.textContent="");const o=a(e,!1,xu(e));return e instanceof Element&&(e.removeAttribute("v-cloak"),e.setAttribute("data-v-app","")),o},n};function xu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ju(t){return En(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ft=typeof document<"u";function ql(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _u(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ql(t.default)}const mn=Object.assign;function $e(t,n){const a={};for(const r in n){const e=n[r];a[r]=Sa(e)?e.map(t):t(e)}return a}const vs=()=>{},Sa=Array.isArray,$l=/#/g,Su=/&/g,Cu=/\//g,Tu=/=/g,Pu=/\?/g,Xl=/\+/g,Au=/%5B/g,Mu=/%5D/g,Kl=/%5E/g,Ru=/%60/g,Zl=/%7B/g,Eu=/%7C/g,Jl=/%7D/g,Iu=/%20/g;function so(t){return encodeURI(""+t).replace(Eu,"|").replace(Au,"[").replace(Mu,"]")}function Fu(t){return so(t).replace(Zl,"{").replace(Jl,"}").replace(Kl,"^")}function yr(t){return so(t).replace(Xl,"%2B").replace(Iu,"+").replace($l,"%23").replace(Su,"%26").replace(Ru,"`").replace(Zl,"{").replace(Jl,"}").replace(Kl,"^")}function zu(t){return yr(t).replace(Tu,"%3D")}function Ou(t){return so(t).replace($l,"%23").replace(Pu,"%3F")}function Du(t){return t==null?"":Ou(t).replace(Cu,"%2F")}function Ms(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Lu=/\/$/,Bu=t=>t.replace(Lu,"");function Xe(t,n,a="/"){let r,e={},s="",o="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(r=n.slice(0,l),s=n.slice(l+1,i>-1?i:n.length),e=t(s)),i>-1&&(r=r||n.slice(0,i),o=n.slice(i,n.length)),r=Hu(r??n,a),{fullPath:r+(s&&"?")+s+o,path:r,query:e,hash:Ms(o)}}function Uu(t,n){const a=n.query?t(n.query):"";return n.path+(a&&"?")+a+(n.hash||"")}function ti(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Gu(t,n,a){const r=n.matched.length-1,e=a.matched.length-1;return r>-1&&r===e&&$t(n.matched[r],a.matched[e])&&Ql(n.params,a.params)&&t(n.query)===t(a.query)&&n.hash===a.hash}function $t(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Ql(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const a in t)if(!Wu(t[a],n[a]))return!1;return!0}function Wu(t,n){return Sa(t)?si(t,n):Sa(n)?si(n,t):t===n}function si(t,n){return Sa(n)?t.length===n.length&&t.every((a,r)=>a===n[r]):t.length===1&&t[0]===n}function Hu(t,n){if(t.startsWith("/"))return t;if(!t)return n;const a=n.split("/"),r=t.split("/"),e=r[r.length-1];(e===".."||e===".")&&r.push("");let s=a.length-1,o,i;for(o=0;o<r.length;o++)if(i=r[o],i!==".")if(i==="..")s>1&&s--;else break;return a.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Za={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Rs;(function(t){t.pop="pop",t.push="push"})(Rs||(Rs={}));var ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ws||(ws={}));function Nu(t){if(!t)if(Ft){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Bu(t)}const Vu=/^[^#]+#/;function Yu(t,n){return t.replace(Vu,"#")+n}function qu(t,n){const a=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:n.behavior,left:r.left-a.left-(n.left||0),top:r.top-a.top-(n.top||0)}}const Re=()=>({left:window.scrollX,top:window.scrollY});function $u(t){let n;if("el"in t){const a=t.el,r=typeof a=="string"&&a.startsWith("#"),e=typeof a=="string"?r?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!e)return;n=qu(e,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function ei(t,n){return(history.state?history.state.position-n:-1)+t}const kr=new Map;function Xu(t,n){kr.set(t,n)}function Ku(t){const n=kr.get(t);return kr.delete(t),n}let Zu=()=>location.protocol+"//"+location.host;function np(t,n){const{pathname:a,search:r,hash:e}=n,s=t.indexOf("#");if(s>-1){let i=e.includes(t.slice(s))?t.slice(s).length:1,l=e.slice(i);return l[0]!=="/"&&(l="/"+l),ti(l,"")}return ti(a,t)+r+e}function Ju(t,n,a,r){let e=[],s=[],o=null;const i=({state:h})=>{const d=np(t,location),m=a.value,f=n.value;let g=0;if(h){if(a.value=d,n.value=h,o&&o===m){o=null;return}g=f?h.position-f.position:0}else r(d);e.forEach(b=>{b(a.value,m,{delta:g,type:Rs.pop,direction:g?g>0?ws.forward:ws.back:ws.unknown})})};function l(){o=a.value}function c(h){e.push(h);const d=()=>{const m=e.indexOf(h);m>-1&&e.splice(m,1)};return s.push(d),d}function p(){const{history:h}=window;h.state&&h.replaceState(mn({},h.state,{scroll:Re()}),"")}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function ri(t,n,a,r=!1,e=!1){return{back:t,current:n,forward:a,replaced:r,position:window.history.length,scroll:e?Re():null}}function Qu(t){const{history:n,location:a}=window,r={value:np(t,a)},e={value:n.state};e.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(l,c,p){const u=t.indexOf("#"),h=u>-1?(a.host&&document.querySelector("base")?t:t.slice(u))+l:Zu()+t+l;try{n[p?"replaceState":"pushState"](c,"",h),e.value=c}catch(d){console.error(d),a[p?"replace":"assign"](h)}}function o(l,c){const p=mn({},n.state,ri(e.value.back,l,e.value.forward,!0),c,{position:e.value.position});s(l,p,!0),r.value=l}function i(l,c){const p=mn({},e.value,n.state,{forward:l,scroll:Re()});s(p.current,p,!0);const u=mn({},ri(r.value,l,null),{position:p.position+1},c);s(l,u,!1),r.value=l}return{location:r,state:e,push:i,replace:o}}function nh(t){t=Nu(t);const n=Qu(t),a=Ju(t,n.state,n.location,n.replace);function r(s,o=!0){o||a.pauseListeners(),history.go(s)}const e=mn({location:"",base:t,go:r,createHref:Yu.bind(null,t)},n,a);return Object.defineProperty(e,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>n.state.value}),e}function ah(t){return typeof t=="string"||t&&typeof t=="object"}function ap(t){return typeof t=="string"||typeof t=="symbol"}const tp=Symbol("");var oi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oi||(oi={}));function Xt(t,n){return mn(new Error,{type:t,[tp]:!0},n)}function Ga(t,n){return t instanceof Error&&tp in t&&(n==null||!!(t.type&n))}const ii="[^/]+?",th={sensitive:!1,strict:!1,start:!0,end:!0},sh=/[.+*?^${}()[\]/\\]/g;function eh(t,n){const a=mn({},th,n),r=[];let e=a.start?"^":"";const s=[];for(const c of t){const p=c.length?[]:[90];a.strict&&!c.length&&(e+="/");for(let u=0;u<c.length;u++){const h=c[u];let d=40+(a.sensitive?.25:0);if(h.type===0)u||(e+="/"),e+=h.value.replace(sh,"\\$&"),d+=40;else if(h.type===1){const{value:m,repeatable:f,optional:g,regexp:b}=h;s.push({name:m,repeatable:f,optional:g});const w=b||ii;if(w!==ii){d+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+S.message)}}let _=f?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;u||(_=g&&c.length<2?`(?:/${_})`:"/"+_),g&&(_+="?"),e+=_,d+=20,g&&(d+=-8),f&&(d+=-20),w===".*"&&(d+=-50)}p.push(d)}r.push(p)}if(a.strict&&a.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}a.strict||(e+="/?"),a.end?e+="$":a.strict&&!e.endsWith("/")&&(e+="(?:/|$)");const o=new RegExp(e,a.sensitive?"":"i");function i(c){const p=c.match(o),u={};if(!p)return null;for(let h=1;h<p.length;h++){const d=p[h]||"",m=s[h-1];u[m.name]=d&&m.repeatable?d.split("/"):d}return u}function l(c){let p="",u=!1;for(const h of t){(!u||!p.endsWith("/"))&&(p+="/"),u=!1;for(const d of h)if(d.type===0)p+=d.value;else if(d.type===1){const{value:m,repeatable:f,optional:g}=d,b=m in c?c[m]:"";if(Sa(b)&&!f)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=Sa(b)?b.join("/"):b;if(!w)if(g)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);p+=w}}return p||"/"}return{re:o,score:r,keys:s,parse:i,stringify:l}}function rh(t,n){let a=0;for(;a<t.length&&a<n.length;){const r=n[a]-t[a];if(r)return r;a++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function sp(t,n){let a=0;const r=t.score,e=n.score;for(;a<r.length&&a<e.length;){const s=rh(r[a],e[a]);if(s)return s;a++}if(Math.abs(e.length-r.length)===1){if(li(r))return 1;if(li(e))return-1}return e.length-r.length}function li(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const oh={type:0,value:""},ih=/[a-zA-Z0-9_]/;function lh(t){if(!t)return[[]];if(t==="/")return[[oh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(d){throw new Error(`ERR (${a})/"${c}": ${d}`)}let a=0,r=a;const e=[];let s;function o(){s&&e.push(s),s=[]}let i=0,l,c="",p="";function u(){c&&(a===0?s.push({type:0,value:c}):a===1||a===2||a===3?(s.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:p,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;i<t.length;){if(l=t[i++],l==="\\"&&a!==2){r=a,a=4;continue}switch(a){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),a=1):h();break;case 4:h(),a=r;break;case 1:l==="("?a=2:ih.test(l)?h():(u(),a=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+l:a=3:p+=l;break;case 3:u(),a=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,p="";break;default:n("Unknown state");break}}return a===2&&n(`Unfinished custom RegExp for param "${c}"`),u(),o(),e}function ph(t,n,a){const r=eh(lh(t.path),a),e=mn(r,{record:t,parent:n,children:[],alias:[]});return n&&!e.record.aliasOf==!n.record.aliasOf&&n.children.push(e),e}function dh(t,n){const a=[],r=new Map;n=ui({strict:!1,end:!0,sensitive:!1},n);function e(u){return r.get(u)}function s(u,h,d){const m=!d,f=di(u);f.aliasOf=d&&d.record;const g=ui(n,u),b=[f];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of S)b.push(di(mn({},f,{components:d?d.record.components:f.components,path:y,aliasOf:d?d.record:f})))}let w,_;for(const S of b){const{path:y}=S;if(h&&y[0]!=="/"){const x=h.record.path,v=x[x.length-1]==="/"?"":"/";S.path=h.record.path+(y&&v+y)}if(w=ph(S,h,g),d?d.alias.push(w):(_=_||w,_!==w&&_.alias.push(w),m&&u.name&&!ci(w)&&o(u.name)),ep(w)&&l(w),f.children){const x=f.children;for(let v=0;v<x.length;v++)s(x[v],w,d&&d.children[v])}d=d||w}return _?()=>{o(_)}:vs}function o(u){if(ap(u)){const h=r.get(u);h&&(r.delete(u),a.splice(a.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=a.indexOf(u);h>-1&&(a.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return a}function l(u){const h=hh(u,a);a.splice(h,0,u),u.record.name&&!ci(u)&&r.set(u.record.name,u)}function c(u,h){let d,m={},f,g;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Xt(1,{location:u});g=d.record.name,m=mn(pi(h.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&pi(u.params,d.keys.map(_=>_.name))),f=d.stringify(m)}else if(u.path!=null)f=u.path,d=a.find(_=>_.re.test(f)),d&&(m=d.parse(f),g=d.record.name);else{if(d=h.name?r.get(h.name):a.find(_=>_.re.test(h.path)),!d)throw Xt(1,{location:u,currentLocation:h});g=d.record.name,m=mn({},h.params,u.params),f=d.stringify(m)}const b=[];let w=d;for(;w;)b.unshift(w.record),w=w.parent;return{name:g,path:f,params:m,matched:b,meta:uh(b)}}t.forEach(u=>s(u));function p(){a.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:p,getRoutes:i,getRecordMatcher:e}}function pi(t,n){const a={};for(const r of n)r in t&&(a[r]=t[r]);return a}function di(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ch(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function ch(t){const n={},a=t.props||!1;if("component"in t)n.default=a;else for(const r in t.components)n[r]=typeof a=="object"?a[r]:a;return n}function ci(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uh(t){return t.reduce((n,a)=>mn(n,a.meta),{})}function ui(t,n){const a={};for(const r in t)a[r]=r in n?n[r]:t[r];return a}function hh(t,n){let a=0,r=n.length;for(;a!==r;){const s=a+r>>1;sp(t,n[s])<0?r=s:a=s+1}const e=fh(t);return e&&(r=n.lastIndexOf(e,r-1)),r}function fh(t){let n=t;for(;n=n.parent;)if(ep(n)&&sp(t,n)===0)return n}function ep({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function mh(t){const n={};if(t===""||t==="?")return n;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let e=0;e<r.length;++e){const s=r[e].replace(Xl," "),o=s.indexOf("="),i=Ms(o<0?s:s.slice(0,o)),l=o<0?null:Ms(s.slice(o+1));if(i in n){let c=n[i];Sa(c)||(c=n[i]=[c]),c.push(l)}else n[i]=l}return n}function hi(t){let n="";for(let a in t){const r=t[a];if(a=zu(a),r==null){r!==void 0&&(n+=(n.length?"&":"")+a);continue}(Sa(r)?r.map(s=>s&&yr(s)):[r&&yr(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+a,s!=null&&(n+="="+s))})}return n}function gh(t){const n={};for(const a in t){const r=t[a];r!==void 0&&(n[a]=Sa(r)?r.map(e=>e==null?null:""+e):r==null?r:""+r)}return n}const yh=Symbol(""),fi=Symbol(""),Ee=Symbol(""),eo=Symbol(""),br=Symbol("");function is(){let t=[];function n(r){return t.push(r),()=>{const e=t.indexOf(r);e>-1&&t.splice(e,1)}}function a(){t=[]}return{add:n,list:()=>t.slice(),reset:a}}function nt(t,n,a,r,e,s=o=>o()){const o=r&&(r.enterCallbacks[e]=r.enterCallbacks[e]||[]);return()=>new Promise((i,l)=>{const c=h=>{h===!1?l(Xt(4,{from:a,to:n})):h instanceof Error?l(h):ah(h)?l(Xt(2,{from:n,to:h})):(o&&r.enterCallbacks[e]===o&&typeof h=="function"&&o.push(h),i())},p=s(()=>t.call(r&&r.instances[e],n,a,c));let u=Promise.resolve(p);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function Ke(t,n,a,r,e=s=>s()){const s=[];for(const o of t)for(const i in o.components){let l=o.components[i];if(!(n!=="beforeRouteEnter"&&!o.instances[i]))if(ql(l)){const p=(l.__vccOpts||l)[n];p&&s.push(nt(p,a,r,o,i,e))}else{let c=l();s.push(()=>c.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=_u(p)?p.default:p;o.mods[i]=p,o.components[i]=u;const d=(u.__vccOpts||u)[n];return d&&nt(d,a,r,o,i,e)()}))}}return s}function mi(t){const n=_a(Ee),a=_a(eo),r=na(()=>{const l=ja(t.to);return n.resolve(l)}),e=na(()=>{const{matched:l}=r.value,{length:c}=l,p=l[c-1],u=a.matched;if(!p||!u.length)return-1;const h=u.findIndex($t.bind(null,p));if(h>-1)return h;const d=gi(l[c-2]);return c>1&&gi(p)===d&&u[u.length-1].path!==d?u.findIndex($t.bind(null,l[c-2])):h}),s=na(()=>e.value>-1&&wh(a.params,r.value.params)),o=na(()=>e.value>-1&&e.value===a.matched.length-1&&Ql(a.params,r.value.params));function i(l={}){if(vh(l)){const c=n[ja(t.replace)?"replace":"push"](ja(t.to)).catch(vs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:na(()=>r.value.href),isActive:s,isExactActive:o,navigate:i}}function kh(t){return t.length===1?t[0]:t}const bh=yl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:mi,setup(t,{slots:n}){const a=Yt(mi(t)),{options:r}=_a(Ee),e=na(()=>({[yi(t.activeClass,r.linkActiveClass,"router-link-active")]:a.isActive,[yi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const s=n.default&&kh(n.default(a));return t.custom?s:Vl("a",{"aria-current":a.isExactActive?t.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:e.value},s)}}}),ro=bh;function vh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function wh(t,n){for(const a in n){const r=n[a],e=t[a];if(typeof r=="string"){if(r!==e)return!1}else if(!Sa(e)||e.length!==r.length||r.some((s,o)=>s!==e[o]))return!1}return!0}function gi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yi=(t,n,a)=>t??n??a,xh=yl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:a}){const r=_a(br),e=na(()=>t.route||r.value),s=_a(fi,0),o=na(()=>{let c=ja(s);const{matched:p}=e.value;let u;for(;(u=p[c])&&!u.components;)c++;return c}),i=na(()=>e.value.matched[o.value]);qs(fi,na(()=>o.value+1)),qs(yh,i),qs(br,e);const l=wn();return $s(()=>[l.value,i.value,t.name],([c,p,u],[h,d,m])=>{p&&(p.instances[u]=c,d&&d!==p&&c&&c===h&&(p.leaveGuards.size||(p.leaveGuards=d.leaveGuards),p.updateGuards.size||(p.updateGuards=d.updateGuards))),c&&p&&(!d||!$t(p,d)||!h)&&(p.enterCallbacks[u]||[]).forEach(f=>f(c))},{flush:"post"}),()=>{const c=e.value,p=t.name,u=i.value,h=u&&u.components[p];if(!h)return ki(a.default,{Component:h,route:c});const d=u.props[p],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=Vl(h,mn({},m,n,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(u.instances[p]=null)},ref:l}));return ki(a.default,{Component:g,route:c})||g}}});function ki(t,n){if(!t)return null;const a=t(n);return a.length===1?a[0]:a}const rp=xh;function jh(t){const n=dh(t.routes,t),a=t.parseQuery||mh,r=t.stringifyQuery||hi,e=t.history,s=is(),o=is(),i=is(),l=Gd(Za);let c=Za;Ft&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=$e.bind(null,F=>""+F),u=$e.bind(null,Du),h=$e.bind(null,Ms);function d(F,G){let N,$;return ap(F)?(N=n.getRecordMatcher(F),$=G):$=F,n.addRoute($,N)}function m(F){const G=n.getRecordMatcher(F);G&&n.removeRoute(G)}function f(){return n.getRoutes().map(F=>F.record)}function g(F){return!!n.getRecordMatcher(F)}function b(F,G){if(G=mn({},G||l.value),typeof F=="string"){const R=Xe(a,F,G.path),O=n.resolve({path:R.path},G),L=e.createHref(R.fullPath);return mn(R,O,{params:h(O.params),hash:Ms(R.hash),redirectedFrom:void 0,href:L})}let N;if(F.path!=null)N=mn({},F,{path:Xe(a,F.path,G.path).path});else{const R=mn({},F.params);for(const O in R)R[O]==null&&delete R[O];N=mn({},F,{params:u(R)}),G.params=u(G.params)}const $=n.resolve(N,G),tn=F.hash||"";$.params=p(h($.params));const A=Uu(r,mn({},F,{hash:Fu(tn),path:$.path})),M=e.createHref(A);return mn({fullPath:A,hash:tn,query:r===hi?gh(F.query):F.query||{}},$,{redirectedFrom:void 0,href:M})}function w(F){return typeof F=="string"?Xe(a,F,l.value.path):mn({},F)}function _(F,G){if(c!==F)return Xt(8,{from:G,to:F})}function S(F){return v(F)}function y(F){return S(mn(w(F),{replace:!0}))}function x(F){const G=F.matched[F.matched.length-1];if(G&&G.redirect){const{redirect:N}=G;let $=typeof N=="function"?N(F):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=w($):{path:$},$.params={}),mn({query:F.query,hash:F.hash,params:$.path!=null?{}:F.params},$)}}function v(F,G){const N=c=b(F),$=l.value,tn=F.state,A=F.force,M=F.replace===!0,R=x(N);if(R)return v(mn(w(R),{state:typeof R=="object"?mn({},tn,R.state):tn,force:A,replace:M}),G||N);const O=N;O.redirectedFrom=G;let L;return!A&&Gu(r,$,N)&&(L=Xt(16,{to:O,from:$}),pn($,$,!0,!1)),(L?Promise.resolve(L):C(O,$)).catch(B=>Ga(B)?Ga(B,2)?B:on(B):V(B,O,$)).then(B=>{if(B){if(Ga(B,2))return v(mn({replace:M},w(B.to),{state:typeof B.to=="object"?mn({},tn,B.to.state):tn,force:A}),G||O)}else B=T(O,$,!0,M,tn);return P(O,$,B),B})}function k(F,G){const N=_(F,G);return N?Promise.reject(N):Promise.resolve()}function j(F){const G=dn.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(F):F()}function C(F,G){let N;const[$,tn,A]=_h(F,G);N=Ke($.reverse(),"beforeRouteLeave",F,G);for(const R of $)R.leaveGuards.forEach(O=>{N.push(nt(O,F,G))});const M=k.bind(null,F,G);return N.push(M),J(N).then(()=>{N=[];for(const R of s.list())N.push(nt(R,F,G));return N.push(M),J(N)}).then(()=>{N=Ke(tn,"beforeRouteUpdate",F,G);for(const R of tn)R.updateGuards.forEach(O=>{N.push(nt(O,F,G))});return N.push(M),J(N)}).then(()=>{N=[];for(const R of A)if(R.beforeEnter)if(Sa(R.beforeEnter))for(const O of R.beforeEnter)N.push(nt(O,F,G));else N.push(nt(R.beforeEnter,F,G));return N.push(M),J(N)}).then(()=>(F.matched.forEach(R=>R.enterCallbacks={}),N=Ke(A,"beforeRouteEnter",F,G,j),N.push(M),J(N))).then(()=>{N=[];for(const R of o.list())N.push(nt(R,F,G));return N.push(M),J(N)}).catch(R=>Ga(R,8)?R:Promise.reject(R))}function P(F,G,N){i.list().forEach($=>j(()=>$(F,G,N)))}function T(F,G,N,$,tn){const A=_(F,G);if(A)return A;const M=G===Za,R=Ft?history.state:{};N&&($||M?e.replace(F.fullPath,mn({scroll:M&&R&&R.scroll},tn)):e.push(F.fullPath,tn)),l.value=F,pn(F,G,N,M),on()}let E;function I(){E||(E=e.listen((F,G,N)=>{if(!un.listening)return;const $=b(F),tn=x($);if(tn){v(mn(tn,{replace:!0,force:!0}),$).catch(vs);return}c=$;const A=l.value;Ft&&Xu(ei(A.fullPath,N.delta),Re()),C($,A).catch(M=>Ga(M,12)?M:Ga(M,2)?(v(mn(w(M.to),{force:!0}),$).then(R=>{Ga(R,20)&&!N.delta&&N.type===Rs.pop&&e.go(-1,!1)}).catch(vs),Promise.reject()):(N.delta&&e.go(-N.delta,!1),V(M,$,A))).then(M=>{M=M||T($,A,!1),M&&(N.delta&&!Ga(M,8)?e.go(-N.delta,!1):N.type===Rs.pop&&Ga(M,20)&&e.go(-1,!1)),P($,A,M)}).catch(vs)}))}let z=is(),U=is(),D;function V(F,G,N){on(F);const $=U.list();return $.length?$.forEach(tn=>tn(F,G,N)):console.error(F),Promise.reject(F)}function nn(){return D&&l.value!==Za?Promise.resolve():new Promise((F,G)=>{z.add([F,G])})}function on(F){return D||(D=!F,I(),z.list().forEach(([G,N])=>F?N(F):G()),z.reset()),F}function pn(F,G,N,$){const{scrollBehavior:tn}=t;if(!Ft||!tn)return Promise.resolve();const A=!N&&Ku(ei(F.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return Xr().then(()=>tn(F,G,A)).then(M=>M&&$u(M)).catch(M=>V(M,F,G))}const sn=F=>e.go(F);let cn;const dn=new Set,un={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,clearRoutes:n.clearRoutes,hasRoute:g,getRoutes:f,resolve:b,options:t,push:S,replace:y,go:sn,back:()=>sn(-1),forward:()=>sn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:i.add,onError:U.add,isReady:nn,install(F){const G=this;F.component("RouterLink",ro),F.component("RouterView",rp),F.config.globalProperties.$router=G,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ja(l)}),Ft&&!cn&&l.value===Za&&(cn=!0,S(e.location).catch(tn=>{}));const N={};for(const tn in Za)Object.defineProperty(N,tn,{get:()=>l.value[tn],enumerable:!0});F.provide(Ee,G),F.provide(eo,ll(N)),F.provide(br,l);const $=F.unmount;dn.add(F),F.unmount=function(){dn.delete(F),dn.size<1&&(c=Za,E&&E(),E=null,l.value=Za,cn=!1,D=!1),$()}}};function J(F){return F.reduce((G,N)=>G.then(()=>j(N)),Promise.resolve())}return un}function _h(t,n){const a=[],r=[],e=[],s=Math.max(n.matched.length,t.matched.length);for(let o=0;o<s;o++){const i=n.matched[o];i&&(t.matched.find(c=>$t(c,i))?r.push(i):a.push(i));const l=t.matched[o];l&&(n.matched.find(c=>$t(c,l))||e.push(l))}return[a,r,e]}function Sh(){return _a(Ee)}function Ch(t){return _a(eo)}const Th={__name:"App",setup(t){return(n,a)=>(kn(),no(ja(rp)))}};var bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function op(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Js={exports:{}},Ph=Js.exports,vi;function Ah(){return vi||(vi=1,function(t,n){(function(a,r){t.exports=r()})(Ph,function(){return function(a){function r(s){if(e[s])return e[s].exports;var o=e[s]={exports:{},id:s,loaded:!1};return a[s].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=a,r.c=e,r.p="dist/",r(0)}([function(a,r,e){function s(I){return I&&I.__esModule?I:{default:I}}var o=Object.assign||function(I){for(var z=1;z<arguments.length;z++){var U=arguments[z];for(var D in U)Object.prototype.hasOwnProperty.call(U,D)&&(I[D]=U[D])}return I},i=e(1),l=(s(i),e(6)),c=s(l),p=e(7),u=s(p),h=e(8),d=s(h),m=e(9),f=s(m),g=e(10),b=s(g),w=e(11),_=s(w),S=e(14),y=s(S),x=[],v=!1,k={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var I=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(I&&(v=!0),v)return x=(0,_.default)(x,k),(0,b.default)(x,k.once),x},C=function(){x=(0,y.default)(),j()},P=function(){x.forEach(function(I,z){I.node.removeAttribute("data-aos"),I.node.removeAttribute("data-aos-easing"),I.node.removeAttribute("data-aos-duration"),I.node.removeAttribute("data-aos-delay")})},T=function(I){return I===!0||I==="mobile"&&f.default.mobile()||I==="phone"&&f.default.phone()||I==="tablet"&&f.default.tablet()||typeof I=="function"&&I()===!0},E=function(I){k=o(k,I),x=(0,y.default)();var z=document.all&&!window.atob;return T(k.disable)||z?P():(k.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),k.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",k.easing),document.querySelector("body").setAttribute("data-aos-duration",k.duration),document.querySelector("body").setAttribute("data-aos-delay",k.delay),k.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):k.startEvent==="load"?window.addEventListener(k.startEvent,function(){j(!0)}):document.addEventListener(k.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,u.default)(j,k.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(j,k.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,b.default)(x,k.once)},k.throttleDelay)),k.disableMutationObserver||d.default.ready("[data-aos]",C),x)};a.exports={init:E,refresh:j,refreshHard:C}},function(a,r){},,,,,function(a,r){(function(e){function s(T,E,I){function z(R){var O=dn,L=un;return dn=un=void 0,$=R,F=T.apply(L,O)}function U(R){return $=R,G=setTimeout(nn,E),tn?z(R):F}function D(R){var O=R-N,L=R-$,B=E-O;return A?C(B,J-L):B}function V(R){var O=R-N,L=R-$;return N===void 0||O>=E||O<0||A&&L>=J}function nn(){var R=P();return V(R)?on(R):void(G=setTimeout(nn,D(R)))}function on(R){return G=void 0,M&&dn?z(R):(dn=un=void 0,F)}function pn(){G!==void 0&&clearTimeout(G),$=0,dn=N=un=G=void 0}function sn(){return G===void 0?F:on(P())}function cn(){var R=P(),O=V(R);if(dn=arguments,un=this,N=R,O){if(G===void 0)return U(N);if(A)return G=setTimeout(nn,E),z(N)}return G===void 0&&(G=setTimeout(nn,E)),F}var dn,un,J,F,G,N,$=0,tn=!1,A=!1,M=!0;if(typeof T!="function")throw new TypeError(h);return E=p(E)||0,i(I)&&(tn=!!I.leading,A="maxWait"in I,J=A?j(p(I.maxWait)||0,E):J,M="trailing"in I?!!I.trailing:M),cn.cancel=pn,cn.flush=sn,cn}function o(T,E,I){var z=!0,U=!0;if(typeof T!="function")throw new TypeError(h);return i(I)&&(z="leading"in I?!!I.leading:z,U="trailing"in I?!!I.trailing:U),s(T,E,{leading:z,maxWait:E,trailing:U})}function i(T){var E=typeof T>"u"?"undefined":u(T);return!!T&&(E=="object"||E=="function")}function l(T){return!!T&&(typeof T>"u"?"undefined":u(T))=="object"}function c(T){return(typeof T>"u"?"undefined":u(T))=="symbol"||l(T)&&k.call(T)==m}function p(T){if(typeof T=="number")return T;if(c(T))return d;if(i(T)){var E=typeof T.valueOf=="function"?T.valueOf():T;T=i(E)?E+"":E}if(typeof T!="string")return T===0?T:+T;T=T.replace(f,"");var I=b.test(T);return I||w.test(T)?_(T.slice(2),I?2:8):g.test(T)?d:+T}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},h="Expected a function",d=NaN,m="[object Symbol]",f=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,w=/^0o[0-7]+$/i,_=parseInt,S=(typeof e>"u"?"undefined":u(e))=="object"&&e&&e.Object===Object&&e,y=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,x=S||y||Function("return this")(),v=Object.prototype,k=v.toString,j=Math.max,C=Math.min,P=function(){return x.Date.now()};a.exports=o}).call(r,function(){return this}())},function(a,r){(function(e){function s(P,T,E){function I(M){var R=cn,O=dn;return cn=dn=void 0,N=M,J=P.apply(O,R)}function z(M){return N=M,F=setTimeout(V,T),$?I(M):J}function U(M){var R=M-G,O=M-N,L=T-R;return tn?j(L,un-O):L}function D(M){var R=M-G,O=M-N;return G===void 0||R>=T||R<0||tn&&O>=un}function V(){var M=C();return D(M)?nn(M):void(F=setTimeout(V,U(M)))}function nn(M){return F=void 0,A&&cn?I(M):(cn=dn=void 0,J)}function on(){F!==void 0&&clearTimeout(F),N=0,cn=G=dn=F=void 0}function pn(){return F===void 0?J:nn(C())}function sn(){var M=C(),R=D(M);if(cn=arguments,dn=this,G=M,R){if(F===void 0)return z(G);if(tn)return F=setTimeout(V,T),I(G)}return F===void 0&&(F=setTimeout(V,T)),J}var cn,dn,un,J,F,G,N=0,$=!1,tn=!1,A=!0;if(typeof P!="function")throw new TypeError(u);return T=c(T)||0,o(E)&&($=!!E.leading,tn="maxWait"in E,un=tn?k(c(E.maxWait)||0,T):un,A="trailing"in E?!!E.trailing:A),sn.cancel=on,sn.flush=pn,sn}function o(P){var T=typeof P>"u"?"undefined":p(P);return!!P&&(T=="object"||T=="function")}function i(P){return!!P&&(typeof P>"u"?"undefined":p(P))=="object"}function l(P){return(typeof P>"u"?"undefined":p(P))=="symbol"||i(P)&&v.call(P)==d}function c(P){if(typeof P=="number")return P;if(l(P))return h;if(o(P)){var T=typeof P.valueOf=="function"?P.valueOf():P;P=o(T)?T+"":T}if(typeof P!="string")return P===0?P:+P;P=P.replace(m,"");var E=g.test(P);return E||b.test(P)?w(P.slice(2),E?2:8):f.test(P)?h:+P}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},u="Expected a function",h=NaN,d="[object Symbol]",m=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,b=/^0o[0-7]+$/i,w=parseInt,_=(typeof e>"u"?"undefined":p(e))=="object"&&e&&e.Object===Object&&e,S=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,y=_||S||Function("return this")(),x=Object.prototype,v=x.toString,k=Math.max,j=Math.min,C=function(){return y.Date.now()};a.exports=s}).call(r,function(){return this}())},function(a,r){function e(p){var u=void 0,h=void 0;for(u=0;u<p.length;u+=1)if(h=p[u],h.dataset&&h.dataset.aos||h.children&&e(h.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function i(p,u){var h=window.document,d=s(),m=new d(l);c=u,m.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(p){p&&p.forEach(function(u){var h=Array.prototype.slice.call(u.addedNodes),d=Array.prototype.slice.call(u.removedNodes),m=h.concat(d);if(e(m))return c()})}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){};r.default={isSupported:o,ready:i}},function(a,r){function e(h,d){if(!(h instanceof d))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function h(d,m){for(var f=0;f<m.length;f++){var g=m[f];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(d,g.key,g)}}return function(d,m,f){return m&&h(d.prototype,m),f&&h(d,f),d}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function h(){e(this,h)}return o(h,[{key:"phone",value:function(){var d=s();return!(!i.test(d)&&!l.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=s();return!(!c.test(d)&&!p.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();r.default=new u},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(o,i,l){var c=o.node.getAttribute("data-aos-once");i>o.position?o.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,i){var l=window.pageYOffset,c=window.innerHeight;o.forEach(function(p,u){e(p,c+l,i)})};r.default=s},function(a,r,e){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(12),i=s(o),l=function(c,p){return c.forEach(function(u,h){u.node.classList.add("aos-init"),u.position=(0,i.default)(u.node,p.offset)}),c};r.default=l},function(a,r,e){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(13),i=s(o),l=function(c,p){var u=0,h=0,d=window.innerHeight,m={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(h=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(c=document.querySelectorAll(m.anchor)[0]),u=(0,i.default)(c).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=d/2;break;case"bottom-center":u+=d/2+c.offsetHeight;break;case"center-center":u+=d/2+c.offsetHeight/2;break;case"top-top":u+=d;break;case"bottom-top":u+=c.offsetHeight+d;break;case"center-top":u+=c.offsetHeight/2+d}return m.anchorPlacement||m.offset||isNaN(p)||(h=p),u+h};r.default=l},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(s){for(var o=0,i=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),i+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:i,left:o}};r.default=e},function(a,r){Object.defineProperty(r,"__esModule",{value:!0});var e=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};r.default=e}])})}(Js)),Js.exports}var Mh=Ah();const ip=op(Mh),Rh={class:"min-h-20"},Eh={__name:"Typewriter",setup(t){const n=[["Build Stunning Visuals","All With The Classic C++"],["Let's Innovate","With Cpp Playgrounds!"],["Less time","More productivity."],["Work Smart","Not Hard"],["Let's Shine","With Cpp Playgrounds!"]],a=wn(null),r=wn(null);let e=0,s;const o=()=>{const[i,l]=n[e];a.value.classList.remove("opacity-100"),r.value.classList.remove("opacity-100"),a.value.classList.add("opacity-0"),r.value.classList.add("opacity-0"),setTimeout(()=>{a.value.textContent=i,r.value.textContent="",a.value.classList.remove("opacity-0"),a.value.classList.add("opacity-100"),setTimeout(()=>{r.value.textContent=l,r.value.classList.remove("opacity-0"),r.value.classList.add("opacity-100")},500)},500),e=(e+1)%n.length,setTimeout(()=>{a.value.classList.remove("opacity-100"),a.value.classList.add("opacity-0"),r.value.classList.remove("opacity-100"),r.value.classList.add("opacity-0")},3e3)};return Ba(()=>{o(),s=setInterval(o,4e3)}),ts(()=>{clearInterval(s)}),(i,l)=>(kn(),xn("div",Rh,[H("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part1",ref:a},null,512),H("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part2",ref:r},null,512)]))}};var Qs={exports:{}};/*!
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
 */var Ih=Qs.exports,wi;function Fh(){return wi||(wi=1,function(t,n){(function(r,e){t.exports=e()})(Ih,function(){return function(a){var r={};function e(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return a[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=a,e.c=r,e.d=function(s,o,i){e.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:i})},e.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,o){if(o&1&&(s=e(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var l in s)e.d(i,l,(function(c){return s[c]}).bind(null,l));return i},e.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(o,"a",o),o},e.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},e.p="",e(e.s=20)}([function(a,r){var e={};a.exports=e,function(){e._baseDelta=1e3/60,e._nextId=0,e._seed=0,e._nowStartTime=+new Date,e._warnedOnce={},e._decomp=null,e.extend=function(o,i){var l,c;typeof i=="boolean"?(l=2,c=i):(l=1,c=!0);for(var p=l;p<arguments.length;p++){var u=arguments[p];if(u)for(var h in u)c&&u[h]&&u[h].constructor===Object&&(!o[h]||o[h].constructor===Object)?(o[h]=o[h]||{},e.extend(o[h],c,u[h])):o[h]=u[h]}return o},e.clone=function(o,i){return e.extend({},i,o)},e.keys=function(o){if(Object.keys)return Object.keys(o);var i=[];for(var l in o)i.push(l);return i},e.values=function(o){var i=[];if(Object.keys){for(var l=Object.keys(o),c=0;c<l.length;c++)i.push(o[l[c]]);return i}for(var p in o)i.push(o[p]);return i},e.get=function(o,i,l,c){i=i.split(".").slice(l,c);for(var p=0;p<i.length;p+=1)o=o[i[p]];return o},e.set=function(o,i,l,c,p){var u=i.split(".").slice(c,p);return e.get(o,i,0,-1)[u[u.length-1]]=l,l},e.shuffle=function(o){for(var i=o.length-1;i>0;i--){var l=Math.floor(e.random()*(i+1)),c=o[i];o[i]=o[l],o[l]=c}return o},e.choose=function(o){return o[Math.floor(e.random()*o.length)]},e.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},e.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},e.isFunction=function(o){return typeof o=="function"},e.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},e.isString=function(o){return toString.call(o)==="[object String]"},e.clamp=function(o,i,l){return o<i?i:o>l?l:o},e.sign=function(o){return o<0?-1:1},e.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-e._nowStartTime},e.random=function(o,i){return o=typeof o<"u"?o:0,i=typeof i<"u"?i:1,o+s()*(i-o)};var s=function(){return e._seed=(e._seed*9301+49297)%233280,e._seed/233280};e.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},e.logLevel=1,e.log=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.info=function(){console&&e.logLevel>0&&e.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warn=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");e._warnedOnce[o]||(e.warn(o),e._warnedOnce[o]=!0)},e.deprecated=function(o,i,l){o[i]=e.chain(function(){e.warnOnce("🔅 deprecated 🔅",l)},o[i])},e.nextId=function(){return e._nextId++},e.indexOf=function(o,i){if(o.indexOf)return o.indexOf(i);for(var l=0;l<o.length;l++)if(o[l]===i)return l;return-1},e.map=function(o,i){if(o.map)return o.map(i);for(var l=[],c=0;c<o.length;c+=1)l.push(i(o[c]));return l},e.topologicalSort=function(o){var i=[],l=[],c=[];for(var p in o)!l[p]&&!c[p]&&e._topologicalSort(p,l,c,o,i);return i},e._topologicalSort=function(o,i,l,c,p){var u=c[o]||[];l[o]=!0;for(var h=0;h<u.length;h+=1){var d=u[h];l[d]||i[d]||e._topologicalSort(d,i,l,c,p)}l[o]=!1,i[o]=!0,p.push(o)},e.chain=function(){for(var o=[],i=0;i<arguments.length;i+=1){var l=arguments[i];l._chained?o.push.apply(o,l._chained):o.push(l)}var c=function(){for(var p,u=new Array(arguments.length),h=0,d=arguments.length;h<d;h++)u[h]=arguments[h];for(h=0;h<o.length;h+=1){var m=o[h].apply(p,u);typeof m<"u"&&(p=m)}return p};return c._chained=o,c},e.chainPathBefore=function(o,i,l){return e.set(o,i,e.chain(l,e.get(o,i)))},e.chainPathAfter=function(o,i,l){return e.set(o,i,e.chain(e.get(o,i),l))},e.setDecomp=function(o){e._decomp=o},e.getDecomp=function(){var o=e._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof bi<"u"&&(o=bi.decomp)}catch{o=null}return o}}()},function(a,r){var e={};a.exports=e,function(){e.create=function(s){var o={min:{x:0,y:0},max:{x:0,y:0}};return s&&e.update(o,s),o},e.update=function(s,o,i){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var l=0;l<o.length;l++){var c=o[l];c.x>s.max.x&&(s.max.x=c.x),c.x<s.min.x&&(s.min.x=c.x),c.y>s.max.y&&(s.max.y=c.y),c.y<s.min.y&&(s.min.y=c.y)}i&&(i.x>0?s.max.x+=i.x:s.min.x+=i.x,i.y>0?s.max.y+=i.y:s.min.y+=i.y)},e.contains=function(s,o){return o.x>=s.min.x&&o.x<=s.max.x&&o.y>=s.min.y&&o.y<=s.max.y},e.overlaps=function(s,o){return s.min.x<=o.max.x&&s.max.x>=o.min.x&&s.max.y>=o.min.y&&s.min.y<=o.max.y},e.translate=function(s,o){s.min.x+=o.x,s.max.x+=o.x,s.min.y+=o.y,s.max.y+=o.y},e.shift=function(s,o){var i=s.max.x-s.min.x,l=s.max.y-s.min.y;s.min.x=o.x,s.max.x=o.x+i,s.min.y=o.y,s.max.y=o.y+l}}()},function(a,r){var e={};a.exports=e,function(){e.create=function(s,o){return{x:s||0,y:o||0}},e.clone=function(s){return{x:s.x,y:s.y}},e.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},e.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},e.rotate=function(s,o,i){var l=Math.cos(o),c=Math.sin(o);i||(i={});var p=s.x*l-s.y*c;return i.y=s.x*c+s.y*l,i.x=p,i},e.rotateAbout=function(s,o,i,l){var c=Math.cos(o),p=Math.sin(o);l||(l={});var u=i.x+((s.x-i.x)*c-(s.y-i.y)*p);return l.y=i.y+((s.x-i.x)*p+(s.y-i.y)*c),l.x=u,l},e.normalise=function(s){var o=e.magnitude(s);return o===0?{x:0,y:0}:{x:s.x/o,y:s.y/o}},e.dot=function(s,o){return s.x*o.x+s.y*o.y},e.cross=function(s,o){return s.x*o.y-s.y*o.x},e.cross3=function(s,o,i){return(o.x-s.x)*(i.y-s.y)-(o.y-s.y)*(i.x-s.x)},e.add=function(s,o,i){return i||(i={}),i.x=s.x+o.x,i.y=s.y+o.y,i},e.sub=function(s,o,i){return i||(i={}),i.x=s.x-o.x,i.y=s.y-o.y,i},e.mult=function(s,o){return{x:s.x*o,y:s.y*o}},e.div=function(s,o){return{x:s.x/o,y:s.y/o}},e.perp=function(s,o){return o=o===!0?-1:1,{x:o*-s.y,y:o*s.x}},e.neg=function(s){return{x:-s.x,y:-s.y}},e.angle=function(s,o){return Math.atan2(o.y-s.y,o.x-s.x)},e._temp=[e.create(),e.create(),e.create(),e.create(),e.create(),e.create()]}()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(0);(function(){s.create=function(l,c){for(var p=[],u=0;u<l.length;u++){var h=l[u],d={x:h.x,y:h.y,index:u,body:c,isInternal:!1};p.push(d)}return p},s.fromPath=function(l,c){var p=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,u=[];return l.replace(p,function(h,d,m){u.push({x:parseFloat(d),y:parseFloat(m)})}),s.create(u,c)},s.centre=function(l){for(var c=s.area(l,!0),p={x:0,y:0},u,h,d,m=0;m<l.length;m++)d=(m+1)%l.length,u=o.cross(l[m],l[d]),h=o.mult(o.add(l[m],l[d]),u),p=o.add(p,h);return o.div(p,6*c)},s.mean=function(l){for(var c={x:0,y:0},p=0;p<l.length;p++)c.x+=l[p].x,c.y+=l[p].y;return o.div(c,l.length)},s.area=function(l,c){for(var p=0,u=l.length-1,h=0;h<l.length;h++)p+=(l[u].x-l[h].x)*(l[u].y+l[h].y),u=h;return c?p/2:Math.abs(p)/2},s.inertia=function(l,c){for(var p=0,u=0,h=l,d,m,f=0;f<h.length;f++)m=(f+1)%h.length,d=Math.abs(o.cross(h[m],h[f])),p+=d*(o.dot(h[m],h[m])+o.dot(h[m],h[f])+o.dot(h[f],h[f])),u+=d;return c/6*(p/u)},s.translate=function(l,c,p){p=typeof p<"u"?p:1;var u=l.length,h=c.x*p,d=c.y*p,m;for(m=0;m<u;m++)l[m].x+=h,l[m].y+=d;return l},s.rotate=function(l,c,p){if(c!==0){var u=Math.cos(c),h=Math.sin(c),d=p.x,m=p.y,f=l.length,g,b,w,_;for(_=0;_<f;_++)g=l[_],b=g.x-d,w=g.y-m,g.x=d+(b*u-w*h),g.y=m+(b*h+w*u);return l}},s.contains=function(l,c){for(var p=c.x,u=c.y,h=l.length,d=l[h-1],m,f=0;f<h;f++){if(m=l[f],(p-d.x)*(m.y-d.y)+(u-d.y)*(d.x-m.x)>0)return!1;d=m}return!0},s.scale=function(l,c,p,u){if(c===1&&p===1)return l;u=u||s.centre(l);for(var h,d,m=0;m<l.length;m++)h=l[m],d=o.sub(h,u),l[m].x=u.x+d.x*c,l[m].y=u.y+d.y*p;return l},s.chamfer=function(l,c,p,u,h){typeof c=="number"?c=[c]:c=c||[8],p=typeof p<"u"?p:-1,u=u||2,h=h||14;for(var d=[],m=0;m<l.length;m++){var f=l[m-1>=0?m-1:l.length-1],g=l[m],b=l[(m+1)%l.length],w=c[m<c.length?m:c.length-1];if(w===0){d.push(g);continue}var _=o.normalise({x:g.y-f.y,y:f.x-g.x}),S=o.normalise({x:b.y-g.y,y:g.x-b.x}),y=Math.sqrt(2*Math.pow(w,2)),x=o.mult(i.clone(_),w),v=o.normalise(o.mult(o.add(_,S),.5)),k=o.sub(g,o.mult(v,y)),j=p;p===-1&&(j=Math.pow(w,.32)*1.75),j=i.clamp(j,u,h),j%2===1&&(j+=1);for(var C=Math.acos(o.dot(_,S)),P=C/j,T=0;T<j;T++)d.push(o.add(o.rotate(x,P*T),k))}return d},s.clockwiseSort=function(l){var c=s.mean(l);return l.sort(function(p,u){return o.angle(c,p)-o.angle(c,u)}),l},s.isConvex=function(l){var c=0,p=l.length,u,h,d,m;if(p<3)return null;for(u=0;u<p;u++)if(h=(u+1)%p,d=(u+2)%p,m=(l[h].x-l[u].x)*(l[d].y-l[h].y),m-=(l[h].y-l[u].y)*(l[d].x-l[h].x),m<0?c|=1:m>0&&(c|=2),c===3)return!1;return c!==0?!0:null},s.hull=function(l){var c=[],p=[],u,h;for(l=l.slice(0),l.sort(function(d,m){var f=d.x-m.x;return f!==0?f:d.y-m.y}),h=0;h<l.length;h+=1){for(u=l[h];p.length>=2&&o.cross3(p[p.length-2],p[p.length-1],u)<=0;)p.pop();p.push(u)}for(h=l.length-1;h>=0;h-=1){for(u=l[h];c.length>=2&&o.cross3(c[c.length-2],c[c.length-1],u)<=0;)c.pop();c.push(u)}return c.pop(),p.pop(),c.concat(p)}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(2),l=e(7),c=e(0),p=e(1),u=e(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(d){var m={id:c.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},f=c.extend(m,d);return h(f,d),f},s.nextGroup=function(d){return d?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var h=function(d,m){m=m||{},s.set(d,{bounds:d.bounds||p.create(d.vertices),positionPrev:d.positionPrev||i.clone(d.position),anglePrev:d.anglePrev||d.angle,vertices:d.vertices,parts:d.parts||[d],isStatic:d.isStatic,isSleeping:d.isSleeping,parent:d.parent||d}),o.rotate(d.vertices,d.angle,d.position),u.rotate(d.axes,d.angle),p.update(d.bounds,d.vertices,d.velocity),s.set(d,{axes:m.axes||d.axes,area:m.area||d.area,mass:m.mass||d.mass,inertia:m.inertia||d.inertia});var f=d.isStatic?"#14151f":c.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),g=d.isStatic?"#555":"#ccc",b=d.isStatic&&d.render.fillStyle===null?1:0;d.render.fillStyle=d.render.fillStyle||f,d.render.strokeStyle=d.render.strokeStyle||g,d.render.lineWidth=d.render.lineWidth||b,d.render.sprite.xOffset+=-(d.bounds.min.x-d.position.x)/(d.bounds.max.x-d.bounds.min.x),d.render.sprite.yOffset+=-(d.bounds.min.y-d.position.y)/(d.bounds.max.y-d.bounds.min.y)};s.set=function(d,m,f){var g;typeof m=="string"&&(g=m,m={},m[g]=f);for(g in m)if(Object.prototype.hasOwnProperty.call(m,g))switch(f=m[g],g){case"isStatic":s.setStatic(d,f);break;case"isSleeping":l.set(d,f);break;case"mass":s.setMass(d,f);break;case"density":s.setDensity(d,f);break;case"inertia":s.setInertia(d,f);break;case"vertices":s.setVertices(d,f);break;case"position":s.setPosition(d,f);break;case"angle":s.setAngle(d,f);break;case"velocity":s.setVelocity(d,f);break;case"angularVelocity":s.setAngularVelocity(d,f);break;case"speed":s.setSpeed(d,f);break;case"angularSpeed":s.setAngularSpeed(d,f);break;case"parts":s.setParts(d,f);break;case"centre":s.setCentre(d,f);break;default:d[g]=f}},s.setStatic=function(d,m){for(var f=0;f<d.parts.length;f++){var g=d.parts[f];m?(g.isStatic||(g._original={restitution:g.restitution,friction:g.friction,mass:g.mass,inertia:g.inertia,density:g.density,inverseMass:g.inverseMass,inverseInertia:g.inverseInertia}),g.restitution=0,g.friction=1,g.mass=g.inertia=g.density=1/0,g.inverseMass=g.inverseInertia=0,g.positionPrev.x=g.position.x,g.positionPrev.y=g.position.y,g.anglePrev=g.angle,g.angularVelocity=0,g.speed=0,g.angularSpeed=0,g.motion=0):g._original&&(g.restitution=g._original.restitution,g.friction=g._original.friction,g.mass=g._original.mass,g.inertia=g._original.inertia,g.density=g._original.density,g.inverseMass=g._original.inverseMass,g.inverseInertia=g._original.inverseInertia,g._original=null),g.isStatic=m}},s.setMass=function(d,m){var f=d.inertia/(d.mass/6);d.inertia=f*(m/6),d.inverseInertia=1/d.inertia,d.mass=m,d.inverseMass=1/d.mass,d.density=d.mass/d.area},s.setDensity=function(d,m){s.setMass(d,m*d.area),d.density=m},s.setInertia=function(d,m){d.inertia=m,d.inverseInertia=1/d.inertia},s.setVertices=function(d,m){m[0].body===d?d.vertices=m:d.vertices=o.create(m,d),d.axes=u.fromVertices(d.vertices),d.area=o.area(d.vertices),s.setMass(d,d.density*d.area);var f=o.centre(d.vertices);o.translate(d.vertices,f,-1),s.setInertia(d,s._inertiaScale*o.inertia(d.vertices,d.mass)),o.translate(d.vertices,d.position),p.update(d.bounds,d.vertices,d.velocity)},s.setParts=function(d,m,f){var g;for(m=m.slice(0),d.parts.length=0,d.parts.push(d),d.parent=d,g=0;g<m.length;g++){var b=m[g];b!==d&&(b.parent=d,d.parts.push(b))}if(d.parts.length!==1){if(f=typeof f<"u"?f:!0,f){var w=[];for(g=0;g<m.length;g++)w=w.concat(m[g].vertices);o.clockwiseSort(w);var _=o.hull(w),S=o.centre(_);s.setVertices(d,_),o.translate(d.vertices,S)}var y=s._totalProperties(d);d.area=y.area,d.parent=d,d.position.x=y.centre.x,d.position.y=y.centre.y,d.positionPrev.x=y.centre.x,d.positionPrev.y=y.centre.y,s.setMass(d,y.mass),s.setInertia(d,y.inertia),s.setPosition(d,y.centre)}},s.setCentre=function(d,m,f){f?(d.positionPrev.x+=m.x,d.positionPrev.y+=m.y,d.position.x+=m.x,d.position.y+=m.y):(d.positionPrev.x=m.x-(d.position.x-d.positionPrev.x),d.positionPrev.y=m.y-(d.position.y-d.positionPrev.y),d.position.x=m.x,d.position.y=m.y)},s.setPosition=function(d,m,f){var g=i.sub(m,d.position);f?(d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.velocity.x=g.x,d.velocity.y=g.y,d.speed=i.magnitude(g)):(d.positionPrev.x+=g.x,d.positionPrev.y+=g.y);for(var b=0;b<d.parts.length;b++){var w=d.parts[b];w.position.x+=g.x,w.position.y+=g.y,o.translate(w.vertices,g),p.update(w.bounds,w.vertices,d.velocity)}},s.setAngle=function(d,m,f){var g=m-d.angle;f?(d.anglePrev=d.angle,d.angularVelocity=g,d.angularSpeed=Math.abs(g)):d.anglePrev+=g;for(var b=0;b<d.parts.length;b++){var w=d.parts[b];w.angle+=g,o.rotate(w.vertices,g,d.position),u.rotate(w.axes,g),p.update(w.bounds,w.vertices,d.velocity),b>0&&i.rotateAbout(w.position,g,d.position,w.position)}},s.setVelocity=function(d,m){var f=d.deltaTime/s._baseDelta;d.positionPrev.x=d.position.x-m.x*f,d.positionPrev.y=d.position.y-m.y*f,d.velocity.x=(d.position.x-d.positionPrev.x)/f,d.velocity.y=(d.position.y-d.positionPrev.y)/f,d.speed=i.magnitude(d.velocity)},s.getVelocity=function(d){var m=s._baseDelta/d.deltaTime;return{x:(d.position.x-d.positionPrev.x)*m,y:(d.position.y-d.positionPrev.y)*m}},s.getSpeed=function(d){return i.magnitude(s.getVelocity(d))},s.setSpeed=function(d,m){s.setVelocity(d,i.mult(i.normalise(s.getVelocity(d)),m))},s.setAngularVelocity=function(d,m){var f=d.deltaTime/s._baseDelta;d.anglePrev=d.angle-m*f,d.angularVelocity=(d.angle-d.anglePrev)/f,d.angularSpeed=Math.abs(d.angularVelocity)},s.getAngularVelocity=function(d){return(d.angle-d.anglePrev)*s._baseDelta/d.deltaTime},s.getAngularSpeed=function(d){return Math.abs(s.getAngularVelocity(d))},s.setAngularSpeed=function(d,m){s.setAngularVelocity(d,c.sign(s.getAngularVelocity(d))*m)},s.translate=function(d,m,f){s.setPosition(d,i.add(d.position,m),f)},s.rotate=function(d,m,f,g){if(!f)s.setAngle(d,d.angle+m,g);else{var b=Math.cos(m),w=Math.sin(m),_=d.position.x-f.x,S=d.position.y-f.y;s.setPosition(d,{x:f.x+(_*b-S*w),y:f.y+(_*w+S*b)},g),s.setAngle(d,d.angle+m,g)}},s.scale=function(d,m,f,g){var b=0,w=0;g=g||d.position;for(var _=0;_<d.parts.length;_++){var S=d.parts[_];o.scale(S.vertices,m,f,g),S.axes=u.fromVertices(S.vertices),S.area=o.area(S.vertices),s.setMass(S,d.density*S.area),o.translate(S.vertices,{x:-S.position.x,y:-S.position.y}),s.setInertia(S,s._inertiaScale*o.inertia(S.vertices,S.mass)),o.translate(S.vertices,{x:S.position.x,y:S.position.y}),_>0&&(b+=S.area,w+=S.inertia),S.position.x=g.x+(S.position.x-g.x)*m,S.position.y=g.y+(S.position.y-g.y)*f,p.update(S.bounds,S.vertices,d.velocity)}d.parts.length>1&&(d.area=b,d.isStatic||(s.setMass(d,d.density*b),s.setInertia(d,w))),d.circleRadius&&(m===f?d.circleRadius*=m:d.circleRadius=null)},s.update=function(d,m){m=(typeof m<"u"?m:1e3/60)*d.timeScale;var f=m*m,g=s._timeCorrection?m/(d.deltaTime||m):1,b=1-d.frictionAir*(m/c._baseDelta),w=(d.position.x-d.positionPrev.x)*g,_=(d.position.y-d.positionPrev.y)*g;d.velocity.x=w*b+d.force.x/d.mass*f,d.velocity.y=_*b+d.force.y/d.mass*f,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.position.x+=d.velocity.x,d.position.y+=d.velocity.y,d.deltaTime=m,d.angularVelocity=(d.angle-d.anglePrev)*b*g+d.torque/d.inertia*f,d.anglePrev=d.angle,d.angle+=d.angularVelocity;for(var S=0;S<d.parts.length;S++){var y=d.parts[S];o.translate(y.vertices,d.velocity),S>0&&(y.position.x+=d.velocity.x,y.position.y+=d.velocity.y),d.angularVelocity!==0&&(o.rotate(y.vertices,d.angularVelocity,d.position),u.rotate(y.axes,d.angularVelocity),S>0&&i.rotateAbout(y.position,d.angularVelocity,d.position,y.position)),p.update(y.bounds,y.vertices,d.velocity)}},s.updateVelocities=function(d){var m=s._baseDelta/d.deltaTime,f=d.velocity;f.x=(d.position.x-d.positionPrev.x)*m,f.y=(d.position.y-d.positionPrev.y)*m,d.speed=Math.sqrt(f.x*f.x+f.y*f.y),d.angularVelocity=(d.angle-d.anglePrev)*m,d.angularSpeed=Math.abs(d.angularVelocity)},s.applyForce=function(d,m,f){var g={x:m.x-d.position.x,y:m.y-d.position.y};d.force.x+=f.x,d.force.y+=f.y,d.torque+=g.x*f.y-g.y*f.x},s._totalProperties=function(d){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},f=d.parts.length===1?0:1;f<d.parts.length;f++){var g=d.parts[f],b=g.mass!==1/0?g.mass:1;m.mass+=b,m.area+=g.area,m.inertia+=g.inertia,m.centre=i.add(m.centre,i.mult(g.position,b))}return m.centre=i.div(m.centre,m.mass),m}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s.on=function(i,l,c){for(var p=l.split(" "),u,h=0;h<p.length;h++)u=p[h],i.events=i.events||{},i.events[u]=i.events[u]||[],i.events[u].push(c);return c},s.off=function(i,l,c){if(!l){i.events={};return}typeof l=="function"&&(c=l,l=o.keys(i.events).join(" "));for(var p=l.split(" "),u=0;u<p.length;u++){var h=i.events[p[u]],d=[];if(c&&h)for(var m=0;m<h.length;m++)h[m]!==c&&d.push(h[m]);i.events[p[u]]=d}},s.trigger=function(i,l,c){var p,u,h,d,m=i.events;if(m&&o.keys(m).length>0){c||(c={}),p=l.split(" ");for(var f=0;f<p.length;f++)if(u=p[f],h=m[u],h){d=o.clone(c,!1),d.name=u,d.source=i;for(var g=0;g<h.length;g++)h[g].apply(i,[d])}}}})()},function(a,r,e){var s={};a.exports=s;var o=e(5),i=e(0),l=e(1),c=e(4);(function(){s.create=function(p){return i.extend({id:i.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},p)},s.setModified=function(p,u,h,d){if(p.isModified=u,u&&p.cache&&(p.cache.allBodies=null,p.cache.allConstraints=null,p.cache.allComposites=null),h&&p.parent&&s.setModified(p.parent,u,h,d),d)for(var m=0;m<p.composites.length;m++){var f=p.composites[m];s.setModified(f,u,h,d)}},s.add=function(p,u){var h=[].concat(u);o.trigger(p,"beforeAdd",{object:u});for(var d=0;d<h.length;d++){var m=h[d];switch(m.type){case"body":if(m.parent!==m){i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(p,m);break;case"constraint":s.addConstraint(p,m);break;case"composite":s.addComposite(p,m);break;case"mouseConstraint":s.addConstraint(p,m.constraint);break}}return o.trigger(p,"afterAdd",{object:u}),p},s.remove=function(p,u,h){var d=[].concat(u);o.trigger(p,"beforeRemove",{object:u});for(var m=0;m<d.length;m++){var f=d[m];switch(f.type){case"body":s.removeBody(p,f,h);break;case"constraint":s.removeConstraint(p,f,h);break;case"composite":s.removeComposite(p,f,h);break;case"mouseConstraint":s.removeConstraint(p,f.constraint);break}}return o.trigger(p,"afterRemove",{object:u}),p},s.addComposite=function(p,u){return p.composites.push(u),u.parent=p,s.setModified(p,!0,!0,!1),p},s.removeComposite=function(p,u,h){var d=i.indexOf(p.composites,u);if(d!==-1){var m=s.allBodies(u);s.removeCompositeAt(p,d);for(var f=0;f<m.length;f++)m[f].sleepCounter=0}if(h)for(var f=0;f<p.composites.length;f++)s.removeComposite(p.composites[f],u,!0);return p},s.removeCompositeAt=function(p,u){return p.composites.splice(u,1),s.setModified(p,!0,!0,!1),p},s.addBody=function(p,u){return p.bodies.push(u),s.setModified(p,!0,!0,!1),p},s.removeBody=function(p,u,h){var d=i.indexOf(p.bodies,u);if(d!==-1&&(s.removeBodyAt(p,d),u.sleepCounter=0),h)for(var m=0;m<p.composites.length;m++)s.removeBody(p.composites[m],u,!0);return p},s.removeBodyAt=function(p,u){return p.bodies.splice(u,1),s.setModified(p,!0,!0,!1),p},s.addConstraint=function(p,u){return p.constraints.push(u),s.setModified(p,!0,!0,!1),p},s.removeConstraint=function(p,u,h){var d=i.indexOf(p.constraints,u);if(d!==-1&&s.removeConstraintAt(p,d),h)for(var m=0;m<p.composites.length;m++)s.removeConstraint(p.composites[m],u,!0);return p},s.removeConstraintAt=function(p,u){return p.constraints.splice(u,1),s.setModified(p,!0,!0,!1),p},s.clear=function(p,u,h){if(h)for(var d=0;d<p.composites.length;d++)s.clear(p.composites[d],u,!0);return u?p.bodies=p.bodies.filter(function(m){return m.isStatic}):p.bodies.length=0,p.constraints.length=0,p.composites.length=0,s.setModified(p,!0,!0,!1),p},s.allBodies=function(p){if(p.cache&&p.cache.allBodies)return p.cache.allBodies;for(var u=[].concat(p.bodies),h=0;h<p.composites.length;h++)u=u.concat(s.allBodies(p.composites[h]));return p.cache&&(p.cache.allBodies=u),u},s.allConstraints=function(p){if(p.cache&&p.cache.allConstraints)return p.cache.allConstraints;for(var u=[].concat(p.constraints),h=0;h<p.composites.length;h++)u=u.concat(s.allConstraints(p.composites[h]));return p.cache&&(p.cache.allConstraints=u),u},s.allComposites=function(p){if(p.cache&&p.cache.allComposites)return p.cache.allComposites;for(var u=[].concat(p.composites),h=0;h<p.composites.length;h++)u=u.concat(s.allComposites(p.composites[h]));return p.cache&&(p.cache.allComposites=u),u},s.get=function(p,u,h){var d,m;switch(h){case"body":d=s.allBodies(p);break;case"constraint":d=s.allConstraints(p);break;case"composite":d=s.allComposites(p).concat(p);break}return d?(m=d.filter(function(f){return f.id.toString()===u.toString()}),m.length===0?null:m[0]):null},s.move=function(p,u,h){return s.remove(p,u),s.add(h,u),p},s.rebase=function(p){for(var u=s.allBodies(p).concat(s.allConstraints(p)).concat(s.allComposites(p)),h=0;h<u.length;h++)u[h].id=i.nextId();return p},s.translate=function(p,u,h){for(var d=h?s.allBodies(p):p.bodies,m=0;m<d.length;m++)c.translate(d[m],u);return p},s.rotate=function(p,u,h,d){for(var m=Math.cos(u),f=Math.sin(u),g=d?s.allBodies(p):p.bodies,b=0;b<g.length;b++){var w=g[b],_=w.position.x-h.x,S=w.position.y-h.y;c.setPosition(w,{x:h.x+(_*m-S*f),y:h.y+(_*f+S*m)}),c.rotate(w,u)}return p},s.scale=function(p,u,h,d,m){for(var f=m?s.allBodies(p):p.bodies,g=0;g<f.length;g++){var b=f[g],w=b.position.x-d.x,_=b.position.y-d.y;c.setPosition(b,{x:d.x+w*u,y:d.y+_*h}),c.scale(b,u,h)}return p},s.bounds=function(p){for(var u=s.allBodies(p),h=[],d=0;d<u.length;d+=1){var m=u[d];h.push(m.bounds.min,m.bounds.max)}return l.create(h)}})()},function(a,r,e){var s={};a.exports=s;var o=e(4),i=e(5),l=e(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(c,p){for(var u=p/l._baseDelta,h=s._motionSleepThreshold,d=0;d<c.length;d++){var m=c[d],f=o.getSpeed(m),g=o.getAngularSpeed(m),b=f*f+g*g;if(m.force.x!==0||m.force.y!==0){s.set(m,!1);continue}var w=Math.min(m.motion,b),_=Math.max(m.motion,b);m.motion=s._minBias*w+(1-s._minBias)*_,m.sleepThreshold>0&&m.motion<h?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/u&&s.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},s.afterCollisions=function(c){for(var p=s._motionSleepThreshold,u=0;u<c.length;u++){var h=c[u];if(h.isActive){var d=h.collision,m=d.bodyA.parent,f=d.bodyB.parent;if(!(m.isSleeping&&f.isSleeping||m.isStatic||f.isStatic)&&(m.isSleeping||f.isSleeping)){var g=m.isSleeping&&!m.isStatic?m:f,b=g===m?f:m;!g.isStatic&&b.motion>p&&s.set(g,!1)}}}},s.set=function(c,p){var u=c.isSleeping;p?(c.isSleeping=!0,c.sleepCounter=c.sleepThreshold,c.positionImpulse.x=0,c.positionImpulse.y=0,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.anglePrev=c.angle,c.speed=0,c.angularSpeed=0,c.motion=0,u||i.trigger(c,"sleepStart")):(c.isSleeping=!1,c.sleepCounter=0,u&&i.trigger(c,"sleepEnd"))}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(9);(function(){var l=[],c={overlap:0,axis:null},p={overlap:0,axis:null};s.create=function(u,h){return{pair:null,collided:!1,bodyA:u,bodyB:h,parentA:u.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(u,h,d){if(s._overlapAxes(c,u.vertices,h.vertices,u.axes),c.overlap<=0||(s._overlapAxes(p,h.vertices,u.vertices,h.axes),p.overlap<=0))return null;var m=d&&d.table[i.id(u,h)],f;m?f=m.collision:(f=s.create(u,h),f.collided=!0,f.bodyA=u.id<h.id?u:h,f.bodyB=u.id<h.id?h:u,f.parentA=f.bodyA.parent,f.parentB=f.bodyB.parent),u=f.bodyA,h=f.bodyB;var g;c.overlap<p.overlap?g=c:g=p;var b=f.normal,w=f.tangent,_=f.penetration,S=f.supports,y=g.overlap,x=g.axis,v=x.x,k=x.y,j=h.position.x-u.position.x,C=h.position.y-u.position.y;v*j+k*C>=0&&(v=-v,k=-k),b.x=v,b.y=k,w.x=-k,w.y=v,_.x=v*y,_.y=k*y,f.depth=y;var P=s._findSupports(u,h,b,1),T=0;if(o.contains(u.vertices,P[0])&&(S[T++]=P[0]),o.contains(u.vertices,P[1])&&(S[T++]=P[1]),T<2){var E=s._findSupports(h,u,b,-1);o.contains(h.vertices,E[0])&&(S[T++]=E[0]),T<2&&o.contains(h.vertices,E[1])&&(S[T++]=E[1])}return T===0&&(S[T++]=P[0]),f.supportCount=T,f},s._overlapAxes=function(u,h,d,m){var f=h.length,g=d.length,b=h[0].x,w=h[0].y,_=d[0].x,S=d[0].y,y=m.length,x=Number.MAX_VALUE,v=0,k,j,C,P,T,E;for(T=0;T<y;T++){var I=m[T],z=I.x,U=I.y,D=b*z+w*U,V=_*z+S*U,nn=D,on=V;for(E=1;E<f;E+=1)P=h[E].x*z+h[E].y*U,P>nn?nn=P:P<D&&(D=P);for(E=1;E<g;E+=1)P=d[E].x*z+d[E].y*U,P>on?on=P:P<V&&(V=P);if(j=nn-V,C=on-D,k=j<C?j:C,k<x&&(x=k,v=T,k<=0))break}u.axis=m[v],u.overlap=x},s._findSupports=function(u,h,d,m){var f=h.vertices,g=f.length,b=u.position.x,w=u.position.y,_=d.x*m,S=d.y*m,y=f[0],x=y,v=_*(b-x.x)+S*(w-x.y),k,j,C;for(C=1;C<g;C+=1)x=f[C],j=_*(b-x.x)+S*(w-x.y),j<v&&(v=j,y=x);return k=f[(g+y.index-1)%g],v=_*(b-k.x)+S*(w-k.y),x=f[(y.index+1)%g],_*(b-x.x)+S*(w-x.y)<v?(l[0]=y,l[1]=x,l):(l[0]=y,l[1]=k,l)}})()},function(a,r,e){var s={};a.exports=s;var o=e(16);(function(){s.create=function(i,l){var c=i.bodyA,p=i.bodyB,u={id:s.id(c,p),bodyA:c,bodyB:p,collision:i,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:c.isSensor||p.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(u,i,l),u},s.update=function(i,l,c){var p=l.supports,u=l.supportCount,h=i.contacts,d=l.parentA,m=l.parentB;i.isActive=!0,i.timeUpdated=c,i.collision=l,i.separation=l.depth,i.inverseMass=d.inverseMass+m.inverseMass,i.friction=d.friction<m.friction?d.friction:m.friction,i.frictionStatic=d.frictionStatic>m.frictionStatic?d.frictionStatic:m.frictionStatic,i.restitution=d.restitution>m.restitution?d.restitution:m.restitution,i.slop=d.slop>m.slop?d.slop:m.slop,i.contactCount=u,l.pair=i;var f=p[0],g=h[0],b=p[1],w=h[1];(w.vertex===f||g.vertex===b)&&(h[1]=g,h[0]=g=w,w=h[1]),g.vertex=f,w.vertex=b},s.setActive=function(i,l,c){l?(i.isActive=!0,i.timeUpdated=c):(i.isActive=!1,i.contactCount=0)},s.id=function(i,l){return i.id<l.id?i.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+i.id.toString(36)}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(2),l=e(7),c=e(1),p=e(11),u=e(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(h){var d=h;d.bodyA&&!d.pointA&&(d.pointA={x:0,y:0}),d.bodyB&&!d.pointB&&(d.pointB={x:0,y:0});var m=d.bodyA?i.add(d.bodyA.position,d.pointA):d.pointA,f=d.bodyB?i.add(d.bodyB.position,d.pointB):d.pointB,g=i.magnitude(i.sub(m,f));d.length=typeof d.length<"u"?d.length:g,d.id=d.id||u.nextId(),d.label=d.label||"Constraint",d.type="constraint",d.stiffness=d.stiffness||(d.length>0?1:.7),d.damping=d.damping||0,d.angularStiffness=d.angularStiffness||0,d.angleA=d.bodyA?d.bodyA.angle:d.angleA,d.angleB=d.bodyB?d.bodyB.angle:d.angleB,d.plugin={};var b={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return d.length===0&&d.stiffness>.1?(b.type="pin",b.anchors=!1):d.stiffness<.9&&(b.type="spring"),d.render=u.extend(b,d.render),d},s.preSolveAll=function(h){for(var d=0;d<h.length;d+=1){var m=h[d],f=m.constraintImpulse;m.isStatic||f.x===0&&f.y===0&&f.angle===0||(m.position.x+=f.x,m.position.y+=f.y,m.angle+=f.angle)}},s.solveAll=function(h,d){for(var m=u.clamp(d/u._baseDelta,0,1),f=0;f<h.length;f+=1){var g=h[f],b=!g.bodyA||g.bodyA&&g.bodyA.isStatic,w=!g.bodyB||g.bodyB&&g.bodyB.isStatic;(b||w)&&s.solve(h[f],m)}for(f=0;f<h.length;f+=1)g=h[f],b=!g.bodyA||g.bodyA&&g.bodyA.isStatic,w=!g.bodyB||g.bodyB&&g.bodyB.isStatic,!b&&!w&&s.solve(h[f],m)},s.solve=function(h,d){var m=h.bodyA,f=h.bodyB,g=h.pointA,b=h.pointB;if(!(!m&&!f)){m&&!m.isStatic&&(i.rotate(g,m.angle-h.angleA,g),h.angleA=m.angle),f&&!f.isStatic&&(i.rotate(b,f.angle-h.angleB,b),h.angleB=f.angle);var w=g,_=b;if(m&&(w=i.add(m.position,g)),f&&(_=i.add(f.position,b)),!(!w||!_)){var S=i.sub(w,_),y=i.magnitude(S);y<s._minLength&&(y=s._minLength);var x=(y-h.length)/y,v=h.stiffness>=1||h.length===0,k=v?h.stiffness*d:h.stiffness*d*d,j=h.damping*d,C=i.mult(S,x*k),P=(m?m.inverseMass:0)+(f?f.inverseMass:0),T=(m?m.inverseInertia:0)+(f?f.inverseInertia:0),E=P+T,I,z,U,D,V;if(j>0){var nn=i.create();U=i.div(S,y),V=i.sub(f&&i.sub(f.position,f.positionPrev)||nn,m&&i.sub(m.position,m.positionPrev)||nn),D=i.dot(U,V)}m&&!m.isStatic&&(z=m.inverseMass/P,m.constraintImpulse.x-=C.x*z,m.constraintImpulse.y-=C.y*z,m.position.x-=C.x*z,m.position.y-=C.y*z,j>0&&(m.positionPrev.x-=j*U.x*D*z,m.positionPrev.y-=j*U.y*D*z),I=i.cross(g,C)/E*s._torqueDampen*m.inverseInertia*(1-h.angularStiffness),m.constraintImpulse.angle-=I,m.angle-=I),f&&!f.isStatic&&(z=f.inverseMass/P,f.constraintImpulse.x+=C.x*z,f.constraintImpulse.y+=C.y*z,f.position.x+=C.x*z,f.position.y+=C.y*z,j>0&&(f.positionPrev.x+=j*U.x*D*z,f.positionPrev.y+=j*U.y*D*z),I=i.cross(b,C)/E*s._torqueDampen*f.inverseInertia*(1-h.angularStiffness),f.constraintImpulse.angle+=I,f.angle+=I)}}},s.postSolveAll=function(h){for(var d=0;d<h.length;d++){var m=h[d],f=m.constraintImpulse;if(!(m.isStatic||f.x===0&&f.y===0&&f.angle===0)){l.set(m,!1);for(var g=0;g<m.parts.length;g++){var b=m.parts[g];o.translate(b.vertices,f),g>0&&(b.position.x+=f.x,b.position.y+=f.y),f.angle!==0&&(o.rotate(b.vertices,f.angle,m.position),p.rotate(b.axes,f.angle),g>0&&i.rotateAbout(b.position,f.angle,m.position,b.position)),c.update(b.bounds,b.vertices,m.velocity)}f.angle*=s._warming,f.x*=s._warming,f.y*=s._warming}}},s.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},s.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},s.currentLength=function(h){var d=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),m=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),f=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),g=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),b=d-f,w=m-g;return Math.sqrt(b*b+w*w)}})()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(0);(function(){s.fromVertices=function(l){for(var c={},p=0;p<l.length;p++){var u=(p+1)%l.length,h=o.normalise({x:l[u].y-l[p].y,y:l[p].x-l[u].x}),d=h.y===0?1/0:h.x/h.y;d=d.toFixed(3).toString(),c[d]=h}return i.values(c)},s.rotate=function(l,c){if(c!==0)for(var p=Math.cos(c),u=Math.sin(c),h=0;h<l.length;h++){var d=l[h],m;m=d.x*p-d.y*u,d.y=d.x*u+d.y*p,d.x=m}}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(0),l=e(4),c=e(1),p=e(2);(function(){s.rectangle=function(u,h,d,m,f){f=f||{};var g={label:"Rectangle Body",position:{x:u,y:h},vertices:o.fromPath("L 0 0 L "+d+" 0 L "+d+" "+m+" L 0 "+m)};if(f.chamfer){var b=f.chamfer;g.vertices=o.chamfer(g.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete f.chamfer}return l.create(i.extend({},g,f))},s.trapezoid=function(u,h,d,m,f,g){g=g||{},f>=1&&i.warn("Bodies.trapezoid: slope parameter must be < 1."),f*=.5;var b=(1-f*2)*d,w=d*f,_=w+b,S=_+w,y;f<.5?y="L 0 0 L "+w+" "+-m+" L "+_+" "+-m+" L "+S+" 0":y="L 0 0 L "+_+" "+-m+" L "+S+" 0";var x={label:"Trapezoid Body",position:{x:u,y:h},vertices:o.fromPath(y)};if(g.chamfer){var v=g.chamfer;x.vertices=o.chamfer(x.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete g.chamfer}return l.create(i.extend({},x,g))},s.circle=function(u,h,d,m,f){m=m||{};var g={label:"Circle Body",circleRadius:d};f=f||25;var b=Math.ceil(Math.max(10,Math.min(f,d)));return b%2===1&&(b+=1),s.polygon(u,h,b,d,i.extend({},g,m))},s.polygon=function(u,h,d,m,f){if(f=f||{},d<3)return s.circle(u,h,m,f);for(var g=2*Math.PI/d,b="",w=g*.5,_=0;_<d;_+=1){var S=w+_*g,y=Math.cos(S)*m,x=Math.sin(S)*m;b+="L "+y.toFixed(3)+" "+x.toFixed(3)+" "}var v={label:"Polygon Body",position:{x:u,y:h},vertices:o.fromPath(b)};if(f.chamfer){var k=f.chamfer;v.vertices=o.chamfer(v.vertices,k.radius,k.quality,k.qualityMin,k.qualityMax),delete f.chamfer}return l.create(i.extend({},v,f))},s.fromVertices=function(u,h,d,m,f,g,b,w){var _=i.getDecomp(),S,y,x,v,k,j,C,P,T,E,I;for(S=!!(_&&_.quickDecomp),m=m||{},x=[],f=typeof f<"u"?f:!1,g=typeof g<"u"?g:.01,b=typeof b<"u"?b:10,w=typeof w<"u"?w:.01,i.isArray(d[0])||(d=[d]),E=0;E<d.length;E+=1)if(j=d[E],v=o.isConvex(j),k=!v,k&&!S&&i.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),v||!S)v?j=o.clockwiseSort(j):j=o.hull(j),x.push({position:{x:u,y:h},vertices:j});else{var z=j.map(function(J){return[J.x,J.y]});_.makeCCW(z),g!==!1&&_.removeCollinearPoints(z,g),w!==!1&&_.removeDuplicatePoints&&_.removeDuplicatePoints(z,w);var U=_.quickDecomp(z);for(C=0;C<U.length;C++){var D=U[C],V=D.map(function(J){return{x:J[0],y:J[1]}});b>0&&o.area(V)<b||x.push({position:o.centre(V),vertices:V})}}for(C=0;C<x.length;C++)x[C]=l.create(i.extend(x[C],m));if(f){var nn=5;for(C=0;C<x.length;C++){var on=x[C];for(P=C+1;P<x.length;P++){var pn=x[P];if(c.overlaps(on.bounds,pn.bounds)){var sn=on.vertices,cn=pn.vertices;for(T=0;T<on.vertices.length;T++)for(I=0;I<pn.vertices.length;I++){var dn=p.magnitudeSquared(p.sub(sn[(T+1)%sn.length],cn[I])),un=p.magnitudeSquared(p.sub(sn[T],cn[(I+1)%cn.length]));dn<nn&&un<nn&&(sn[T].isInternal=!0,cn[I].isInternal=!0)}}}}}return x.length>1?(y=l.create(i.extend({parts:x.slice(0)},m)),l.setPosition(y,{x:u,y:h}),y):x[0]}})()},function(a,r,e){var s={};a.exports=s;var o=e(0),i=e(8);(function(){s.create=function(l){var c={bodies:[],collisions:[],pairs:null};return o.extend(c,l)},s.setBodies=function(l,c){l.bodies=c.slice(0)},s.clear=function(l){l.bodies=[],l.collisions=[]},s.collisions=function(l){var c=l.pairs,p=l.bodies,u=p.length,h=s.canCollide,d=i.collides,m=l.collisions,f=0,g,b;for(p.sort(s._compareBoundsX),g=0;g<u;g++){var w=p[g],_=w.bounds,S=w.bounds.max.x,y=w.bounds.max.y,x=w.bounds.min.y,v=w.isStatic||w.isSleeping,k=w.parts.length,j=k===1;for(b=g+1;b<u;b++){var C=p[b],P=C.bounds;if(P.min.x>S)break;if(!(y<P.min.y||x>P.max.y)&&!(v&&(C.isStatic||C.isSleeping))&&h(w.collisionFilter,C.collisionFilter)){var T=C.parts.length;if(j&&T===1){var E=d(w,C,c);E&&(m[f++]=E)}else for(var I=k>1?1:0,z=T>1?1:0,U=I;U<k;U++)for(var D=w.parts[U],_=D.bounds,V=z;V<T;V++){var nn=C.parts[V],P=nn.bounds;if(!(_.min.x>P.max.x||_.max.x<P.min.x||_.max.y<P.min.y||_.min.y>P.max.y)){var E=d(D,nn,c);E&&(m[f++]=E)}}}}}return m.length!==f&&(m.length=f),m},s.canCollide=function(l,c){return l.group===c.group&&l.group!==0?l.group>0:(l.mask&c.category)!==0&&(c.mask&l.category)!==0},s._compareBoundsX=function(l,c){return l.bounds.min.x-c.bounds.min.x}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s.create=function(i){var l={};return i||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=i||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(c){var p=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u&&(l.button=0,c.preventDefault()),l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=c},l.mousedown=function(c){var p=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u?(l.button=0,c.preventDefault()):l.button=c.button,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=c},l.mouseup=function(c){var p=s._getRelativeMousePosition(c,l.element,l.pixelRatio),u=c.changedTouches;u&&c.preventDefault(),l.button=-1,l.absolute.x=p.x,l.absolute.y=p.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=c},l.mousewheel=function(c){l.wheelDelta=Math.max(-1,Math.min(1,c.wheelDelta||-c.detail)),c.preventDefault(),l.sourceEvents.mousewheel=c},s.setElement(l,l.element),l},s.setElement=function(i,l){i.element=l,l.addEventListener("mousemove",i.mousemove,{passive:!0}),l.addEventListener("mousedown",i.mousedown,{passive:!0}),l.addEventListener("mouseup",i.mouseup,{passive:!0}),l.addEventListener("wheel",i.mousewheel,{passive:!1}),l.addEventListener("touchmove",i.mousemove,{passive:!1}),l.addEventListener("touchstart",i.mousedown,{passive:!1}),l.addEventListener("touchend",i.mouseup,{passive:!1})},s.clearSourceEvents=function(i){i.sourceEvents.mousemove=null,i.sourceEvents.mousedown=null,i.sourceEvents.mouseup=null,i.sourceEvents.mousewheel=null,i.wheelDelta=0},s.setOffset=function(i,l){i.offset.x=l.x,i.offset.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},s.setScale=function(i,l){i.scale.x=l.x,i.scale.y=l.y,i.position.x=i.absolute.x*i.scale.x+i.offset.x,i.position.y=i.absolute.y*i.scale.y+i.offset.y},s._getRelativeMousePosition=function(i,l,c){var p=l.getBoundingClientRect(),u=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:u.scrollLeft,d=window.pageYOffset!==void 0?window.pageYOffset:u.scrollTop,m=i.changedTouches,f,g;return m?(f=m[0].pageX-p.left-h,g=m[0].pageY-p.top-d):(f=i.pageX-p.left-h,g=i.pageY-p.top-d),{x:f/(l.clientWidth/(l.width||l.clientWidth)*c),y:g/(l.clientHeight/(l.height||l.clientHeight)*c)}}})()},function(a,r,e){var s={};a.exports=s;var o=e(0);(function(){s._registry={},s.register=function(i){if(s.isPlugin(i)||o.warn("Plugin.register:",s.toString(i),"does not implement all required fields."),i.name in s._registry){var l=s._registry[i.name],c=s.versionParse(i.version).number,p=s.versionParse(l.version).number;c>p?(o.warn("Plugin.register:",s.toString(l),"was upgraded to",s.toString(i)),s._registry[i.name]=i):c<p?o.warn("Plugin.register:",s.toString(l),"can not be downgraded to",s.toString(i)):i!==l&&o.warn("Plugin.register:",s.toString(i),"is already registered to different plugin object")}else s._registry[i.name]=i;return i},s.resolve=function(i){return s._registry[s.dependencyParse(i).name]},s.toString=function(i){return typeof i=="string"?i:(i.name||"anonymous")+"@"+(i.version||i.range||"0.0.0")},s.isPlugin=function(i){return i&&i.name&&i.version&&i.install},s.isUsed=function(i,l){return i.used.indexOf(l)>-1},s.isFor=function(i,l){var c=i.for&&s.dependencyParse(i.for);return!i.for||l.name===c.name&&s.versionSatisfies(l.version,c.range)},s.use=function(i,l){if(i.uses=(i.uses||[]).concat(l||[]),i.uses.length===0){o.warn("Plugin.use:",s.toString(i),"does not specify any dependencies to install.");return}for(var c=s.dependencies(i),p=o.topologicalSort(c),u=[],h=0;h<p.length;h+=1)if(p[h]!==i.name){var d=s.resolve(p[h]);if(!d){u.push("❌ "+p[h]);continue}s.isUsed(i,d.name)||(s.isFor(d,i)||(o.warn("Plugin.use:",s.toString(d),"is for",d.for,"but installed on",s.toString(i)+"."),d._warned=!0),d.install?d.install(i):(o.warn("Plugin.use:",s.toString(d),"does not specify an install function."),d._warned=!0),d._warned?(u.push("🔶 "+s.toString(d)),delete d._warned):u.push("✅ "+s.toString(d)),i.used.push(d.name))}u.length>0&&o.info(u.join("  "))},s.dependencies=function(i,l){var c=s.dependencyParse(i),p=c.name;if(l=l||{},!(p in l)){i=s.resolve(i)||i,l[p]=o.map(i.uses||[],function(h){s.isPlugin(h)&&s.register(h);var d=s.dependencyParse(h),m=s.resolve(h);return m&&!s.versionSatisfies(m.version,d.range)?(o.warn("Plugin.dependencies:",s.toString(m),"does not satisfy",s.toString(d),"used by",s.toString(c)+"."),m._warned=!0,i._warned=!0):m||(o.warn("Plugin.dependencies:",s.toString(h),"used by",s.toString(c),"could not be resolved."),i._warned=!0),d.name});for(var u=0;u<l[p].length;u+=1)s.dependencies(l[p][u],l);return l}},s.dependencyParse=function(i){if(o.isString(i)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(i)||o.warn("Plugin.dependencyParse:",i,"is not a valid dependency string."),{name:i.split("@")[0],range:i.split("@")[1]||"*"}}return{name:i.name,range:i.range||i.version}},s.versionParse=function(i){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(i)||o.warn("Plugin.versionParse:",i,"is not a valid version or range.");var c=l.exec(i),p=Number(c[4]),u=Number(c[5]),h=Number(c[6]);return{isRange:!!(c[1]||c[2]),version:c[3],range:i,operator:c[1]||c[2]||"",major:p,minor:u,patch:h,parts:[p,u,h],prerelease:c[7],number:p*1e8+u*1e4+h}},s.versionSatisfies=function(i,l){l=l||"*";var c=s.versionParse(l),p=s.versionParse(i);if(c.isRange){if(c.operator==="*"||i==="*")return!0;if(c.operator===">")return p.number>c.number;if(c.operator===">=")return p.number>=c.number;if(c.operator==="~")return p.major===c.major&&p.minor===c.minor&&p.patch>=c.patch;if(c.operator==="^")return c.major>0?p.major===c.major&&p.number>=c.number:c.minor>0?p.minor===c.minor&&p.patch>=c.patch:p.patch===c.patch}return i===l||i==="*"}})()},function(a,r){var e={};a.exports=e,function(){e.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}}()},function(a,r,e){var s={};a.exports=s;var o=e(7),i=e(18),l=e(13),c=e(19),p=e(5),u=e(6),h=e(10),d=e(0),m=e(4);(function(){s._deltaMax=1e3/60,s.create=function(f){f=f||{};var g={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},b=d.extend(g,f);return b.world=f.world||u.create({label:"World"}),b.pairs=f.pairs||c.create(),b.detector=f.detector||l.create(),b.detector.pairs=b.pairs,b.grid={buckets:[]},b.world.gravity=b.gravity,b.broadphase=b.grid,b.metrics={},b},s.update=function(f,g){var b=d.now(),w=f.world,_=f.detector,S=f.pairs,y=f.timing,x=y.timestamp,v;g>s._deltaMax&&d.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),g=typeof g<"u"?g:d._baseDelta,g*=y.timeScale,y.timestamp+=g,y.lastDelta=g;var k={timestamp:y.timestamp,delta:g};p.trigger(f,"beforeUpdate",k);var j=u.allBodies(w),C=u.allConstraints(w);for(w.isModified&&(l.setBodies(_,j),u.setModified(w,!1,!1,!0)),f.enableSleeping&&o.update(j,g),s._bodiesApplyGravity(j,f.gravity),g>0&&s._bodiesUpdate(j,g),p.trigger(f,"beforeSolve",k),h.preSolveAll(j),v=0;v<f.constraintIterations;v++)h.solveAll(C,g);h.postSolveAll(j);var P=l.collisions(_);c.update(S,P,x),f.enableSleeping&&o.afterCollisions(S.list),S.collisionStart.length>0&&p.trigger(f,"collisionStart",{pairs:S.collisionStart,timestamp:y.timestamp,delta:g});var T=d.clamp(20/f.positionIterations,0,1);for(i.preSolvePosition(S.list),v=0;v<f.positionIterations;v++)i.solvePosition(S.list,g,T);for(i.postSolvePosition(j),h.preSolveAll(j),v=0;v<f.constraintIterations;v++)h.solveAll(C,g);for(h.postSolveAll(j),i.preSolveVelocity(S.list),v=0;v<f.velocityIterations;v++)i.solveVelocity(S.list,g);return s._bodiesUpdateVelocities(j),S.collisionActive.length>0&&p.trigger(f,"collisionActive",{pairs:S.collisionActive,timestamp:y.timestamp,delta:g}),S.collisionEnd.length>0&&p.trigger(f,"collisionEnd",{pairs:S.collisionEnd,timestamp:y.timestamp,delta:g}),s._bodiesClearForces(j),p.trigger(f,"afterUpdate",k),f.timing.lastElapsed=d.now()-b,f},s.merge=function(f,g){if(d.extend(f,g),g.world){f.world=g.world,s.clear(f);for(var b=u.allBodies(f.world),w=0;w<b.length;w++){var _=b[w];o.set(_,!1),_.id=d.nextId()}}},s.clear=function(f){c.clear(f.pairs),l.clear(f.detector)},s._bodiesClearForces=function(f){for(var g=f.length,b=0;b<g;b++){var w=f[b];w.force.x=0,w.force.y=0,w.torque=0}},s._bodiesApplyGravity=function(f,g){var b=typeof g.scale<"u"?g.scale:.001,w=f.length;if(!(g.x===0&&g.y===0||b===0))for(var _=0;_<w;_++){var S=f[_];S.isStatic||S.isSleeping||(S.force.y+=S.mass*g.y*b,S.force.x+=S.mass*g.x*b)}},s._bodiesUpdate=function(f,g){for(var b=f.length,w=0;w<b;w++){var _=f[w];_.isStatic||_.isSleeping||m.update(_,g)}},s._bodiesUpdateVelocities=function(f){for(var g=f.length,b=0;b<g;b++)m.updateVelocities(f[b])}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(0),l=e(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(c){var p,u,h,d=c.length;for(p=0;p<d;p++)u=c[p],u.isActive&&(h=u.contactCount,u.collision.parentA.totalContacts+=h,u.collision.parentB.totalContacts+=h)},s.solvePosition=function(c,p,u){var h,d,m,f,g,b,w,_,S=s._positionDampen*(u||1),y=i.clamp(p/i._baseDelta,0,1),x=c.length;for(h=0;h<x;h++)d=c[h],!(!d.isActive||d.isSensor)&&(m=d.collision,f=m.parentA,g=m.parentB,b=m.normal,d.separation=m.depth+b.x*(g.positionImpulse.x-f.positionImpulse.x)+b.y*(g.positionImpulse.y-f.positionImpulse.y));for(h=0;h<x;h++)d=c[h],!(!d.isActive||d.isSensor)&&(m=d.collision,f=m.parentA,g=m.parentB,b=m.normal,_=d.separation-d.slop*y,(f.isStatic||g.isStatic)&&(_*=2),f.isStatic||f.isSleeping||(w=S/f.totalContacts,f.positionImpulse.x+=b.x*_*w,f.positionImpulse.y+=b.y*_*w),g.isStatic||g.isSleeping||(w=S/g.totalContacts,g.positionImpulse.x-=b.x*_*w,g.positionImpulse.y-=b.y*_*w))},s.postSolvePosition=function(c){for(var p=s._positionWarming,u=c.length,h=o.translate,d=l.update,m=0;m<u;m++){var f=c[m],g=f.positionImpulse,b=g.x,w=g.y,_=f.velocity;if(f.totalContacts=0,b!==0||w!==0){for(var S=0;S<f.parts.length;S++){var y=f.parts[S];h(y.vertices,g),d(y.bounds,y.vertices,_),y.position.x+=b,y.position.y+=w}f.positionPrev.x+=b,f.positionPrev.y+=w,b*_.x+w*_.y<0?(g.x=0,g.y=0):(g.x*=p,g.y*=p)}}},s.preSolveVelocity=function(c){var p=c.length,u,h;for(u=0;u<p;u++){var d=c[u];if(!(!d.isActive||d.isSensor)){var m=d.contacts,f=d.contactCount,g=d.collision,b=g.parentA,w=g.parentB,_=g.normal,S=g.tangent;for(h=0;h<f;h++){var y=m[h],x=y.vertex,v=y.normalImpulse,k=y.tangentImpulse;if(v!==0||k!==0){var j=_.x*v+S.x*k,C=_.y*v+S.y*k;b.isStatic||b.isSleeping||(b.positionPrev.x+=j*b.inverseMass,b.positionPrev.y+=C*b.inverseMass,b.anglePrev+=b.inverseInertia*((x.x-b.position.x)*C-(x.y-b.position.y)*j)),w.isStatic||w.isSleeping||(w.positionPrev.x-=j*w.inverseMass,w.positionPrev.y-=C*w.inverseMass,w.anglePrev-=w.inverseInertia*((x.x-w.position.x)*C-(x.y-w.position.y)*j))}}}}},s.solveVelocity=function(c,p){var u=p/i._baseDelta,h=u*u,d=h*u,m=-s._restingThresh*u,f=s._restingThreshTangent,g=s._frictionNormalMultiplier*u,b=s._frictionMaxStatic,w=c.length,_,S,y,x;for(y=0;y<w;y++){var v=c[y];if(!(!v.isActive||v.isSensor)){var k=v.collision,j=k.parentA,C=k.parentB,P=k.normal.x,T=k.normal.y,E=k.tangent.x,I=k.tangent.y,z=v.inverseMass,U=v.friction*v.frictionStatic*g,D=v.contacts,V=v.contactCount,nn=1/V,on=j.position.x-j.positionPrev.x,pn=j.position.y-j.positionPrev.y,sn=j.angle-j.anglePrev,cn=C.position.x-C.positionPrev.x,dn=C.position.y-C.positionPrev.y,un=C.angle-C.anglePrev;for(x=0;x<V;x++){var J=D[x],F=J.vertex,G=F.x-j.position.x,N=F.y-j.position.y,$=F.x-C.position.x,tn=F.y-C.position.y,A=on-N*sn,M=pn+G*sn,R=cn-tn*un,O=dn+$*un,L=A-R,B=M-O,X=P*L+T*B,Y=E*L+I*B,q=v.separation+X,W=Math.min(q,1);W=q<0?0:W;var Q=W*U;Y<-Q||Y>Q?(S=Y>0?Y:-Y,_=v.friction*(Y>0?1:-1)*d,_<-S?_=-S:_>S&&(_=S)):(_=Y,S=b);var K=G*T-N*P,Z=$*T-tn*P,an=nn/(z+j.inverseInertia*K*K+C.inverseInertia*Z*Z),ln=(1+v.restitution)*X*an;if(_*=an,X<m)J.normalImpulse=0;else{var bn=J.normalImpulse;J.normalImpulse+=ln,J.normalImpulse>0&&(J.normalImpulse=0),ln=J.normalImpulse-bn}if(Y<-f||Y>f)J.tangentImpulse=0;else{var fn=J.tangentImpulse;J.tangentImpulse+=_,J.tangentImpulse<-S&&(J.tangentImpulse=-S),J.tangentImpulse>S&&(J.tangentImpulse=S),_=J.tangentImpulse-fn}var Dn=P*ln+E*_,On=T*ln+I*_;j.isStatic||j.isSleeping||(j.positionPrev.x+=Dn*j.inverseMass,j.positionPrev.y+=On*j.inverseMass,j.anglePrev+=(G*On-N*Dn)*j.inverseInertia),C.isStatic||C.isSleeping||(C.positionPrev.x-=Dn*C.inverseMass,C.positionPrev.y-=On*C.inverseMass,C.anglePrev-=($*On-tn*Dn)*C.inverseInertia)}}}}})()},function(a,r,e){var s={};a.exports=s;var o=e(9),i=e(0);(function(){s.create=function(l){return i.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},s.update=function(l,c,p){var u=o.update,h=o.create,d=o.setActive,m=l.table,f=l.list,g=f.length,b=g,w=l.collisionStart,_=l.collisionEnd,S=l.collisionActive,y=c.length,x=0,v=0,k=0,j,C,P;for(P=0;P<y;P++)j=c[P],C=j.pair,C?(C.isActive&&(S[k++]=C),u(C,j,p)):(C=h(j,p),m[C.id]=C,w[x++]=C,f[b++]=C);for(b=0,g=f.length,P=0;P<g;P++)C=f[P],C.timeUpdated>=p?f[b++]=C:(d(C,!1,p),C.collision.bodyA.sleepCounter>0&&C.collision.bodyB.sleepCounter>0?f[b++]=C:(_[v++]=C,delete m[C.id]));f.length!==b&&(f.length=b),w.length!==x&&(w.length=x),_.length!==v&&(_.length=v),S.length!==k&&(S.length=k)},s.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(a,r,e){var s=a.exports=e(21);s.Axes=e(11),s.Bodies=e(12),s.Body=e(4),s.Bounds=e(1),s.Collision=e(8),s.Common=e(0),s.Composite=e(6),s.Composites=e(22),s.Constraint=e(10),s.Contact=e(16),s.Detector=e(13),s.Engine=e(17),s.Events=e(5),s.Grid=e(23),s.Mouse=e(14),s.MouseConstraint=e(24),s.Pair=e(9),s.Pairs=e(19),s.Plugin=e(15),s.Query=e(25),s.Render=e(26),s.Resolver=e(18),s.Runner=e(27),s.SAT=e(28),s.Sleeping=e(7),s.Svg=e(29),s.Vector=e(2),s.Vertices=e(3),s.World=e(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(a,r,e){var s={};a.exports=s;var o=e(15),i=e(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){o.use(s,Array.prototype.slice.call(arguments))},s.before=function(l,c){return l=l.replace(/^Matter./,""),i.chainPathBefore(s,l,c)},s.after=function(l,c){return l=l.replace(/^Matter./,""),i.chainPathAfter(s,l,c)}})()},function(a,r,e){var s={};a.exports=s;var o=e(6),i=e(10),l=e(0),c=e(4),p=e(12),u=l.deprecated;(function(){s.stack=function(h,d,m,f,g,b,w){for(var _=o.create({label:"Stack"}),S=h,y=d,x,v=0,k=0;k<f;k++){for(var j=0,C=0;C<m;C++){var P=w(S,y,C,k,x,v);if(P){var T=P.bounds.max.y-P.bounds.min.y,E=P.bounds.max.x-P.bounds.min.x;T>j&&(j=T),c.translate(P,{x:E*.5,y:T*.5}),S=P.bounds.max.x+g,o.addBody(_,P),x=P,v+=1}else S+=g}y+=j+b,S=h}return _},s.chain=function(h,d,m,f,g,b){for(var w=h.bodies,_=1;_<w.length;_++){var S=w[_-1],y=w[_],x=S.bounds.max.y-S.bounds.min.y,v=S.bounds.max.x-S.bounds.min.x,k=y.bounds.max.y-y.bounds.min.y,j=y.bounds.max.x-y.bounds.min.x,C={bodyA:S,pointA:{x:v*d,y:x*m},bodyB:y,pointB:{x:j*f,y:k*g}},P=l.extend(C,b);o.addConstraint(h,i.create(P))}return h.label+=" Chain",h},s.mesh=function(h,d,m,f,g){var b=h.bodies,w,_,S,y,x;for(w=0;w<m;w++){for(_=1;_<d;_++)S=b[_-1+w*d],y=b[_+w*d],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:y},g)));if(w>0)for(_=0;_<d;_++)S=b[_+(w-1)*d],y=b[_+w*d],o.addConstraint(h,i.create(l.extend({bodyA:S,bodyB:y},g))),f&&_>0&&(x=b[_-1+(w-1)*d],o.addConstraint(h,i.create(l.extend({bodyA:x,bodyB:y},g)))),f&&_<d-1&&(x=b[_+1+(w-1)*d],o.addConstraint(h,i.create(l.extend({bodyA:x,bodyB:y},g))))}return h.label+=" Mesh",h},s.pyramid=function(h,d,m,f,g,b,w){return s.stack(h,d,m,f,g,b,function(_,S,y,x,v,k){var j=Math.min(f,Math.ceil(m/2)),C=v?v.bounds.max.x-v.bounds.min.x:0;if(!(x>j)){x=j-x;var P=x,T=m-1-x;if(!(y<P||y>T)){k===1&&c.translate(v,{x:(y+(m%2===1?1:-1))*C,y:0});var E=v?y*C:0;return w(h+E+y*g,S,y,x,v,k)}}})},s.newtonsCradle=function(h,d,m,f,g){for(var b=o.create({label:"Newtons Cradle"}),w=0;w<m;w++){var _=1.9,S=p.circle(h+w*(f*_),d+g,f,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),y=i.create({pointA:{x:h+w*(f*_),y:d},bodyB:S});o.addBody(b,S),o.addConstraint(b,y)}return b},u(s,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),s.car=function(h,d,m,f,g){var b=c.nextGroup(!0),w=20,_=-m*.5+w,S=m*.5-w,y=0,x=o.create({label:"Car"}),v=p.rectangle(h,d,m,f,{collisionFilter:{group:b},chamfer:{radius:f*.5},density:2e-4}),k=p.circle(h+_,d+y,g,{collisionFilter:{group:b},friction:.8}),j=p.circle(h+S,d+y,g,{collisionFilter:{group:b},friction:.8}),C=i.create({bodyB:v,pointB:{x:_,y},bodyA:k,stiffness:1,length:0}),P=i.create({bodyB:v,pointB:{x:S,y},bodyA:j,stiffness:1,length:0});return o.addBody(x,v),o.addBody(x,k),o.addBody(x,j),o.addConstraint(x,C),o.addConstraint(x,P),x},u(s,"car","Composites.car ➤ moved to car example"),s.softBody=function(h,d,m,f,g,b,w,_,S,y){S=l.extend({inertia:1/0},S),y=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},y);var x=s.stack(h,d,m,f,g,b,function(v,k){return p.circle(v,k,_,S)});return s.mesh(x,m,f,w,y),x.label="Soft Body",x},u(s,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(a,r,e){var s={};a.exports=s;var o=e(9),i=e(0),l=i.deprecated;(function(){s.create=function(c){var p={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return i.extend(p,c)},s.update=function(c,p,u,h){var d,m,f,g=u.world,b=c.buckets,w,_,S=!1;for(d=0;d<p.length;d++){var y=p[d];if(!(y.isSleeping&&!h)&&!(g.bounds&&(y.bounds.max.x<g.bounds.min.x||y.bounds.min.x>g.bounds.max.x||y.bounds.max.y<g.bounds.min.y||y.bounds.min.y>g.bounds.max.y))){var x=s._getRegion(c,y);if(!y.region||x.id!==y.region.id||h){(!y.region||h)&&(y.region=x);var v=s._regionUnion(x,y.region);for(m=v.startCol;m<=v.endCol;m++)for(f=v.startRow;f<=v.endRow;f++){_=s._getBucketId(m,f),w=b[_];var k=m>=x.startCol&&m<=x.endCol&&f>=x.startRow&&f<=x.endRow,j=m>=y.region.startCol&&m<=y.region.endCol&&f>=y.region.startRow&&f<=y.region.endRow;!k&&j&&j&&w&&s._bucketRemoveBody(c,w,y),(y.region===x||k&&!j||h)&&(w||(w=s._createBucket(b,_)),s._bucketAddBody(c,w,y))}y.region=x,S=!0}}}S&&(c.pairsList=s._createActivePairsList(c))},l(s,"update","Grid.update ➤ replaced by Matter.Detector"),s.clear=function(c){c.buckets={},c.pairs={},c.pairsList=[]},l(s,"clear","Grid.clear ➤ replaced by Matter.Detector"),s._regionUnion=function(c,p){var u=Math.min(c.startCol,p.startCol),h=Math.max(c.endCol,p.endCol),d=Math.min(c.startRow,p.startRow),m=Math.max(c.endRow,p.endRow);return s._createRegion(u,h,d,m)},s._getRegion=function(c,p){var u=p.bounds,h=Math.floor(u.min.x/c.bucketWidth),d=Math.floor(u.max.x/c.bucketWidth),m=Math.floor(u.min.y/c.bucketHeight),f=Math.floor(u.max.y/c.bucketHeight);return s._createRegion(h,d,m,f)},s._createRegion=function(c,p,u,h){return{id:c+","+p+","+u+","+h,startCol:c,endCol:p,startRow:u,endRow:h}},s._getBucketId=function(c,p){return"C"+c+"R"+p},s._createBucket=function(c,p){var u=c[p]=[];return u},s._bucketAddBody=function(c,p,u){var h=c.pairs,d=o.id,m=p.length,f;for(f=0;f<m;f++){var g=p[f];if(!(u.id===g.id||u.isStatic&&g.isStatic)){var b=d(u,g),w=h[b];w?w[2]+=1:h[b]=[u,g,1]}}p.push(u)},s._bucketRemoveBody=function(c,p,u){var h=c.pairs,d=o.id,m;p.splice(i.indexOf(p,u),1);var f=p.length;for(m=0;m<f;m++){var g=h[d(u,p[m])];g&&(g[2]-=1)}},s._createActivePairsList=function(c){var p,u=c.pairs,h=i.keys(u),d=h.length,m=[],f;for(f=0;f<d;f++)p=u[h[f]],p[2]>0?m.push(p):delete u[h[f]];return m}})()},function(a,r,e){var s={};a.exports=s;var o=e(3),i=e(7),l=e(14),c=e(5),p=e(13),u=e(10),h=e(6),d=e(0),m=e(1);(function(){s.create=function(f,g){var b=(f?f.mouse:null)||(g?g.mouse:null);b||(f&&f.render&&f.render.canvas?b=l.create(f.render.canvas):g&&g.element?b=l.create(g.element):(b=l.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var w=u.create({label:"Mouse Constraint",pointA:b.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),_={type:"mouseConstraint",mouse:b,element:null,body:null,constraint:w,collisionFilter:{category:1,mask:4294967295,group:0}},S=d.extend(_,g);return c.on(f,"beforeUpdate",function(){var y=h.allBodies(f.world);s.update(S,y),s._triggerEvents(S)}),S},s.update=function(f,g){var b=f.mouse,w=f.constraint,_=f.body;if(b.button===0){if(w.bodyB)i.set(w.bodyB,!1),w.pointA=b.position;else for(var S=0;S<g.length;S++)if(_=g[S],m.contains(_.bounds,b.position)&&p.canCollide(_.collisionFilter,f.collisionFilter))for(var y=_.parts.length>1?1:0;y<_.parts.length;y++){var x=_.parts[y];if(o.contains(x.vertices,b.position)){w.pointA=b.position,w.bodyB=f.body=_,w.pointB={x:b.position.x-_.position.x,y:b.position.y-_.position.y},w.angleB=_.angle,i.set(_,!1),c.trigger(f,"startdrag",{mouse:b,body:_});break}}}else w.bodyB=f.body=null,w.pointB=null,_&&c.trigger(f,"enddrag",{mouse:b,body:_})},s._triggerEvents=function(f){var g=f.mouse,b=g.sourceEvents;b.mousemove&&c.trigger(f,"mousemove",{mouse:g}),b.mousedown&&c.trigger(f,"mousedown",{mouse:g}),b.mouseup&&c.trigger(f,"mouseup",{mouse:g}),l.clearSourceEvents(g)}})()},function(a,r,e){var s={};a.exports=s;var o=e(2),i=e(8),l=e(1),c=e(12),p=e(3);(function(){s.collides=function(u,h){for(var d=[],m=h.length,f=u.bounds,g=i.collides,b=l.overlaps,w=0;w<m;w++){var _=h[w],S=_.parts.length,y=S===1?0:1;if(b(_.bounds,f))for(var x=y;x<S;x++){var v=_.parts[x];if(b(v.bounds,f)){var k=g(v,u);if(k){d.push(k);break}}}}return d},s.ray=function(u,h,d,m){m=m||1e-100;for(var f=o.angle(h,d),g=o.magnitude(o.sub(h,d)),b=(d.x+h.x)*.5,w=(d.y+h.y)*.5,_=c.rectangle(b,w,g,m,{angle:f}),S=s.collides(_,u),y=0;y<S.length;y+=1){var x=S[y];x.body=x.bodyB=x.bodyA}return S},s.region=function(u,h,d){for(var m=[],f=0;f<u.length;f++){var g=u[f],b=l.overlaps(g.bounds,h);(b&&!d||!b&&d)&&m.push(g)}return m},s.point=function(u,h){for(var d=[],m=0;m<u.length;m++){var f=u[m];if(l.contains(f.bounds,h))for(var g=f.parts.length===1?0:1;g<f.parts.length;g++){var b=f.parts[g];if(l.contains(b.bounds,h)&&p.contains(b.vertices,h)){d.push(f);break}}}return d}})()},function(a,r,e){var s={};a.exports=s;var o=e(4),i=e(0),l=e(6),c=e(1),p=e(5),u=e(2),h=e(14);(function(){var d,m;typeof window<"u"&&(d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(y){window.setTimeout(function(){y(i.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(y){var x={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!y.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},v=i.extend(x,y);return v.canvas&&(v.canvas.width=v.options.width||v.canvas.width,v.canvas.height=v.options.height||v.canvas.height),v.mouse=y.mouse,v.engine=y.engine,v.canvas=v.canvas||b(v.options.width,v.options.height),v.context=v.canvas.getContext("2d"),v.textures={},v.bounds=v.bounds||{min:{x:0,y:0},max:{x:v.canvas.width,y:v.canvas.height}},v.controller=s,v.options.showBroadphase=!1,v.options.pixelRatio!==1&&s.setPixelRatio(v,v.options.pixelRatio),i.isElement(v.element)&&v.element.appendChild(v.canvas),v},s.run=function(y){(function x(v){y.frameRequestId=d(x),f(y,v),s.world(y,v),y.context.setTransform(y.options.pixelRatio,0,0,y.options.pixelRatio,0,0),(y.options.showStats||y.options.showDebug)&&s.stats(y,y.context,v),(y.options.showPerformance||y.options.showDebug)&&s.performance(y,y.context,v),y.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(y){m(y.frameRequestId)},s.setPixelRatio=function(y,x){var v=y.options,k=y.canvas;x==="auto"&&(x=w(k)),v.pixelRatio=x,k.setAttribute("data-pixel-ratio",x),k.width=v.width*x,k.height=v.height*x,k.style.width=v.width+"px",k.style.height=v.height+"px"},s.setSize=function(y,x,v){y.options.width=x,y.options.height=v,y.bounds.max.x=y.bounds.min.x+x,y.bounds.max.y=y.bounds.min.y+v,y.options.pixelRatio!==1?s.setPixelRatio(y,y.options.pixelRatio):(y.canvas.width=x,y.canvas.height=v)},s.lookAt=function(y,x,v,k){k=typeof k<"u"?k:!0,x=i.isArray(x)?x:[x],v=v||{x:0,y:0};for(var j={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},C=0;C<x.length;C+=1){var P=x[C],T=P.bounds?P.bounds.min:P.min||P.position||P,E=P.bounds?P.bounds.max:P.max||P.position||P;T&&E&&(T.x<j.min.x&&(j.min.x=T.x),E.x>j.max.x&&(j.max.x=E.x),T.y<j.min.y&&(j.min.y=T.y),E.y>j.max.y&&(j.max.y=E.y))}var I=j.max.x-j.min.x+2*v.x,z=j.max.y-j.min.y+2*v.y,U=y.canvas.height,D=y.canvas.width,V=D/U,nn=I/z,on=1,pn=1;nn>V?pn=nn/V:on=V/nn,y.options.hasBounds=!0,y.bounds.min.x=j.min.x,y.bounds.max.x=j.min.x+I*on,y.bounds.min.y=j.min.y,y.bounds.max.y=j.min.y+z*pn,k&&(y.bounds.min.x+=I*.5-I*on*.5,y.bounds.max.x+=I*.5-I*on*.5,y.bounds.min.y+=z*.5-z*pn*.5,y.bounds.max.y+=z*.5-z*pn*.5),y.bounds.min.x-=v.x,y.bounds.max.x-=v.x,y.bounds.min.y-=v.y,y.bounds.max.y-=v.y,y.mouse&&(h.setScale(y.mouse,{x:(y.bounds.max.x-y.bounds.min.x)/y.canvas.width,y:(y.bounds.max.y-y.bounds.min.y)/y.canvas.height}),h.setOffset(y.mouse,y.bounds.min))},s.startViewTransform=function(y){var x=y.bounds.max.x-y.bounds.min.x,v=y.bounds.max.y-y.bounds.min.y,k=x/y.options.width,j=v/y.options.height;y.context.setTransform(y.options.pixelRatio/k,0,0,y.options.pixelRatio/j,0,0),y.context.translate(-y.bounds.min.x,-y.bounds.min.y)},s.endViewTransform=function(y){y.context.setTransform(y.options.pixelRatio,0,0,y.options.pixelRatio,0,0)},s.world=function(y,x){var v=i.now(),k=y.engine,j=k.world,C=y.canvas,P=y.context,T=y.options,E=y.timing,I=l.allBodies(j),z=l.allConstraints(j),U=T.wireframes?T.wireframeBackground:T.background,D=[],V=[],nn,on={timestamp:k.timing.timestamp};if(p.trigger(y,"beforeRender",on),y.currentBackground!==U&&S(y,U),P.globalCompositeOperation="source-in",P.fillStyle="transparent",P.fillRect(0,0,C.width,C.height),P.globalCompositeOperation="source-over",T.hasBounds){for(nn=0;nn<I.length;nn++){var pn=I[nn];c.overlaps(pn.bounds,y.bounds)&&D.push(pn)}for(nn=0;nn<z.length;nn++){var sn=z[nn],cn=sn.bodyA,dn=sn.bodyB,un=sn.pointA,J=sn.pointB;cn&&(un=u.add(cn.position,sn.pointA)),dn&&(J=u.add(dn.position,sn.pointB)),!(!un||!J)&&(c.contains(y.bounds,un)||c.contains(y.bounds,J))&&V.push(sn)}s.startViewTransform(y),y.mouse&&(h.setScale(y.mouse,{x:(y.bounds.max.x-y.bounds.min.x)/y.options.width,y:(y.bounds.max.y-y.bounds.min.y)/y.options.height}),h.setOffset(y.mouse,y.bounds.min))}else V=z,D=I,y.options.pixelRatio!==1&&y.context.setTransform(y.options.pixelRatio,0,0,y.options.pixelRatio,0,0);!T.wireframes||k.enableSleeping&&T.showSleeping?s.bodies(y,D,P):(T.showConvexHulls&&s.bodyConvexHulls(y,D,P),s.bodyWireframes(y,D,P)),T.showBounds&&s.bodyBounds(y,D,P),(T.showAxes||T.showAngleIndicator)&&s.bodyAxes(y,D,P),T.showPositions&&s.bodyPositions(y,D,P),T.showVelocity&&s.bodyVelocity(y,D,P),T.showIds&&s.bodyIds(y,D,P),T.showSeparations&&s.separations(y,k.pairs.list,P),T.showCollisions&&s.collisions(y,k.pairs.list,P),T.showVertexNumbers&&s.vertexNumbers(y,D,P),T.showMousePosition&&s.mousePosition(y,y.mouse,P),s.constraints(V,P),T.hasBounds&&s.endViewTransform(y),p.trigger(y,"afterRender",on),E.lastElapsed=i.now()-v},s.stats=function(y,x,v){for(var k=y.engine,j=k.world,C=l.allBodies(j),P=0,T=55,E=44,I=0,z=0,U=0;U<C.length;U+=1)P+=C[U].parts.length;var D={Part:P,Body:C.length,Cons:l.allConstraints(j).length,Comp:l.allComposites(j).length,Pair:k.pairs.list.length};x.fillStyle="#0e0f19",x.fillRect(I,z,T*5.5,E),x.font="12px Arial",x.textBaseline="top",x.textAlign="right";for(var V in D){var nn=D[V];x.fillStyle="#aaa",x.fillText(V,I+T,z+8),x.fillStyle="#eee",x.fillText(nn,I+T,z+26),I+=T}},s.performance=function(y,x){var v=y.engine,k=y.timing,j=k.deltaHistory,C=k.elapsedHistory,P=k.timestampElapsedHistory,T=k.engineDeltaHistory,E=k.engineUpdatesHistory,I=k.engineElapsedHistory,z=v.timing.lastUpdatesPerFrame,U=v.timing.lastDelta,D=g(j),V=g(C),nn=g(T),on=g(E),pn=g(I),sn=g(P),cn=sn/D||0,dn=Math.round(D/U),un=1e3/D||0,J=4,F=12,G=60,N=34,$=10,tn=69;x.fillStyle="#0e0f19",x.fillRect(0,50,F*5+G*6+22,N),s.status(x,$,tn,G,J,j.length,Math.round(un)+" fps",un/s._goodFps,function(A){return j[A]/D-1}),s.status(x,$+F+G,tn,G,J,T.length,U.toFixed(2)+" dt",s._goodDelta/U,function(A){return T[A]/nn-1}),s.status(x,$+(F+G)*2,tn,G,J,E.length,z+" upf",Math.pow(i.clamp(on/dn||1,0,1),4),function(A){return E[A]/on-1}),s.status(x,$+(F+G)*3,tn,G,J,I.length,pn.toFixed(2)+" ut",1-z*pn/s._goodFps,function(A){return I[A]/pn-1}),s.status(x,$+(F+G)*4,tn,G,J,C.length,V.toFixed(2)+" rt",1-V/s._goodFps,function(A){return C[A]/V-1}),s.status(x,$+(F+G)*5,tn,G,J,P.length,cn.toFixed(2)+" x",cn*cn*cn,function(A){return(P[A]/j[A]/cn||0)-1})},s.status=function(y,x,v,k,j,C,P,T,E){y.strokeStyle="#888",y.fillStyle="#444",y.lineWidth=1,y.fillRect(x,v+7,k,1),y.beginPath(),y.moveTo(x,v+7-j*i.clamp(.4*E(0),-2,2));for(var I=0;I<k;I+=1)y.lineTo(x+I,v+7-(I<C?j*i.clamp(.4*E(I),-2,2):0));y.stroke(),y.fillStyle="hsl("+i.clamp(25+95*T,0,120)+",100%,60%)",y.fillRect(x,v-7,4,4),y.font="12px Arial",y.textBaseline="middle",y.textAlign="right",y.fillStyle="#eee",y.fillText(P,x+k,v-5)},s.constraints=function(y,x){for(var v=x,k=0;k<y.length;k++){var j=y[k];if(!(!j.render.visible||!j.pointA||!j.pointB)){var C=j.bodyA,P=j.bodyB,T,E;if(C?T=u.add(C.position,j.pointA):T=j.pointA,j.render.type==="pin")v.beginPath(),v.arc(T.x,T.y,3,0,2*Math.PI),v.closePath();else{if(P?E=u.add(P.position,j.pointB):E=j.pointB,v.beginPath(),v.moveTo(T.x,T.y),j.render.type==="spring")for(var I=u.sub(E,T),z=u.perp(u.normalise(I)),U=Math.ceil(i.clamp(j.length/5,12,20)),D,V=1;V<U;V+=1)D=V%2===0?1:-1,v.lineTo(T.x+I.x*(V/U)+z.x*D*4,T.y+I.y*(V/U)+z.y*D*4);v.lineTo(E.x,E.y)}j.render.lineWidth&&(v.lineWidth=j.render.lineWidth,v.strokeStyle=j.render.strokeStyle,v.stroke()),j.render.anchors&&(v.fillStyle=j.render.strokeStyle,v.beginPath(),v.arc(T.x,T.y,3,0,2*Math.PI),v.arc(E.x,E.y,3,0,2*Math.PI),v.closePath(),v.fill())}}},s.bodies=function(y,x,v){var k=v;y.engine;var j=y.options,C=j.showInternalEdges||!j.wireframes,P,T,E,I;for(E=0;E<x.length;E++)if(P=x[E],!!P.render.visible){for(I=P.parts.length>1?1:0;I<P.parts.length;I++)if(T=P.parts[I],!!T.render.visible){if(j.showSleeping&&P.isSleeping?k.globalAlpha=.5*T.render.opacity:T.render.opacity!==1&&(k.globalAlpha=T.render.opacity),T.render.sprite&&T.render.sprite.texture&&!j.wireframes){var z=T.render.sprite,U=_(y,z.texture);k.translate(T.position.x,T.position.y),k.rotate(T.angle),k.drawImage(U,U.width*-z.xOffset*z.xScale,U.height*-z.yOffset*z.yScale,U.width*z.xScale,U.height*z.yScale),k.rotate(-T.angle),k.translate(-T.position.x,-T.position.y)}else{if(T.circleRadius)k.beginPath(),k.arc(T.position.x,T.position.y,T.circleRadius,0,2*Math.PI);else{k.beginPath(),k.moveTo(T.vertices[0].x,T.vertices[0].y);for(var D=1;D<T.vertices.length;D++)!T.vertices[D-1].isInternal||C?k.lineTo(T.vertices[D].x,T.vertices[D].y):k.moveTo(T.vertices[D].x,T.vertices[D].y),T.vertices[D].isInternal&&!C&&k.moveTo(T.vertices[(D+1)%T.vertices.length].x,T.vertices[(D+1)%T.vertices.length].y);k.lineTo(T.vertices[0].x,T.vertices[0].y),k.closePath()}j.wireframes?(k.lineWidth=1,k.strokeStyle=y.options.wireframeStrokeStyle,k.stroke()):(k.fillStyle=T.render.fillStyle,T.render.lineWidth&&(k.lineWidth=T.render.lineWidth,k.strokeStyle=T.render.strokeStyle,k.stroke()),k.fill())}k.globalAlpha=1}}},s.bodyWireframes=function(y,x,v){var k=v,j=y.options.showInternalEdges,C,P,T,E,I;for(k.beginPath(),T=0;T<x.length;T++)if(C=x[T],!!C.render.visible)for(I=C.parts.length>1?1:0;I<C.parts.length;I++){for(P=C.parts[I],k.moveTo(P.vertices[0].x,P.vertices[0].y),E=1;E<P.vertices.length;E++)!P.vertices[E-1].isInternal||j?k.lineTo(P.vertices[E].x,P.vertices[E].y):k.moveTo(P.vertices[E].x,P.vertices[E].y),P.vertices[E].isInternal&&!j&&k.moveTo(P.vertices[(E+1)%P.vertices.length].x,P.vertices[(E+1)%P.vertices.length].y);k.lineTo(P.vertices[0].x,P.vertices[0].y)}k.lineWidth=1,k.strokeStyle=y.options.wireframeStrokeStyle,k.stroke()},s.bodyConvexHulls=function(y,x,v){var k=v,j,C,P;for(k.beginPath(),C=0;C<x.length;C++)if(j=x[C],!(!j.render.visible||j.parts.length===1)){for(k.moveTo(j.vertices[0].x,j.vertices[0].y),P=1;P<j.vertices.length;P++)k.lineTo(j.vertices[P].x,j.vertices[P].y);k.lineTo(j.vertices[0].x,j.vertices[0].y)}k.lineWidth=1,k.strokeStyle="rgba(255,255,255,0.2)",k.stroke()},s.vertexNumbers=function(y,x,v){var k=v,j,C,P;for(j=0;j<x.length;j++){var T=x[j].parts;for(P=T.length>1?1:0;P<T.length;P++){var E=T[P];for(C=0;C<E.vertices.length;C++)k.fillStyle="rgba(255,255,255,0.2)",k.fillText(j+"_"+C,E.position.x+(E.vertices[C].x-E.position.x)*.8,E.position.y+(E.vertices[C].y-E.position.y)*.8)}}},s.mousePosition=function(y,x,v){var k=v;k.fillStyle="rgba(255,255,255,0.8)",k.fillText(x.position.x+"  "+x.position.y,x.position.x+5,x.position.y-5)},s.bodyBounds=function(y,x,v){var k=v;y.engine;var j=y.options;k.beginPath();for(var C=0;C<x.length;C++){var P=x[C];if(P.render.visible)for(var T=x[C].parts,E=T.length>1?1:0;E<T.length;E++){var I=T[E];k.rect(I.bounds.min.x,I.bounds.min.y,I.bounds.max.x-I.bounds.min.x,I.bounds.max.y-I.bounds.min.y)}}j.wireframes?k.strokeStyle="rgba(255,255,255,0.08)":k.strokeStyle="rgba(0,0,0,0.1)",k.lineWidth=1,k.stroke()},s.bodyAxes=function(y,x,v){var k=v;y.engine;var j=y.options,C,P,T,E;for(k.beginPath(),P=0;P<x.length;P++){var I=x[P],z=I.parts;if(I.render.visible)if(j.showAxes)for(T=z.length>1?1:0;T<z.length;T++)for(C=z[T],E=0;E<C.axes.length;E++){var U=C.axes[E];k.moveTo(C.position.x,C.position.y),k.lineTo(C.position.x+U.x*20,C.position.y+U.y*20)}else for(T=z.length>1?1:0;T<z.length;T++)for(C=z[T],E=0;E<C.axes.length;E++)k.moveTo(C.position.x,C.position.y),k.lineTo((C.vertices[0].x+C.vertices[C.vertices.length-1].x)/2,(C.vertices[0].y+C.vertices[C.vertices.length-1].y)/2)}j.wireframes?(k.strokeStyle="indianred",k.lineWidth=1):(k.strokeStyle="rgba(255, 255, 255, 0.4)",k.globalCompositeOperation="overlay",k.lineWidth=2),k.stroke(),k.globalCompositeOperation="source-over"},s.bodyPositions=function(y,x,v){var k=v;y.engine;var j=y.options,C,P,T,E;for(k.beginPath(),T=0;T<x.length;T++)if(C=x[T],!!C.render.visible)for(E=0;E<C.parts.length;E++)P=C.parts[E],k.arc(P.position.x,P.position.y,3,0,2*Math.PI,!1),k.closePath();for(j.wireframes?k.fillStyle="indianred":k.fillStyle="rgba(0,0,0,0.5)",k.fill(),k.beginPath(),T=0;T<x.length;T++)C=x[T],C.render.visible&&(k.arc(C.positionPrev.x,C.positionPrev.y,2,0,2*Math.PI,!1),k.closePath());k.fillStyle="rgba(255,165,0,0.8)",k.fill()},s.bodyVelocity=function(y,x,v){var k=v;k.beginPath();for(var j=0;j<x.length;j++){var C=x[j];if(C.render.visible){var P=o.getVelocity(C);k.moveTo(C.position.x,C.position.y),k.lineTo(C.position.x+P.x,C.position.y+P.y)}}k.lineWidth=3,k.strokeStyle="cornflowerblue",k.stroke()},s.bodyIds=function(y,x,v){var k=v,j,C;for(j=0;j<x.length;j++)if(x[j].render.visible){var P=x[j].parts;for(C=P.length>1?1:0;C<P.length;C++){var T=P[C];k.font="12px Arial",k.fillStyle="rgba(255,255,255,0.5)",k.fillText(T.id,T.position.x+10,T.position.y-10)}}},s.collisions=function(y,x,v){var k=v,j=y.options,C,P,T,E;for(k.beginPath(),T=0;T<x.length;T++)if(C=x[T],!!C.isActive)for(P=C.collision,E=0;E<C.contactCount;E++){var I=C.contacts[E],z=I.vertex;k.rect(z.x-1.5,z.y-1.5,3.5,3.5)}for(j.wireframes?k.fillStyle="rgba(255,255,255,0.7)":k.fillStyle="orange",k.fill(),k.beginPath(),T=0;T<x.length;T++)if(C=x[T],!!C.isActive&&(P=C.collision,C.contactCount>0)){var U=C.contacts[0].vertex.x,D=C.contacts[0].vertex.y;C.contactCount===2&&(U=(C.contacts[0].vertex.x+C.contacts[1].vertex.x)/2,D=(C.contacts[0].vertex.y+C.contacts[1].vertex.y)/2),P.bodyB===P.supports[0].body||P.bodyA.isStatic===!0?k.moveTo(U-P.normal.x*8,D-P.normal.y*8):k.moveTo(U+P.normal.x*8,D+P.normal.y*8),k.lineTo(U,D)}j.wireframes?k.strokeStyle="rgba(255,165,0,0.7)":k.strokeStyle="orange",k.lineWidth=1,k.stroke()},s.separations=function(y,x,v){var k=v,j=y.options,C,P,T,E,I;for(k.beginPath(),I=0;I<x.length;I++)if(C=x[I],!!C.isActive){P=C.collision,T=P.bodyA,E=P.bodyB;var z=1;!E.isStatic&&!T.isStatic&&(z=.5),E.isStatic&&(z=0),k.moveTo(E.position.x,E.position.y),k.lineTo(E.position.x-P.penetration.x*z,E.position.y-P.penetration.y*z),z=1,!E.isStatic&&!T.isStatic&&(z=.5),T.isStatic&&(z=0),k.moveTo(T.position.x,T.position.y),k.lineTo(T.position.x+P.penetration.x*z,T.position.y+P.penetration.y*z)}j.wireframes?k.strokeStyle="rgba(255,165,0,0.5)":k.strokeStyle="orange",k.stroke()},s.inspector=function(y,x){y.engine;var v=y.selected,k=y.render,j=k.options,C;if(j.hasBounds){var P=k.bounds.max.x-k.bounds.min.x,T=k.bounds.max.y-k.bounds.min.y,E=P/k.options.width,I=T/k.options.height;x.scale(1/E,1/I),x.translate(-k.bounds.min.x,-k.bounds.min.y)}for(var z=0;z<v.length;z++){var U=v[z].data;switch(x.translate(.5,.5),x.lineWidth=1,x.strokeStyle="rgba(255,165,0,0.9)",x.setLineDash([1,2]),U.type){case"body":C=U.bounds,x.beginPath(),x.rect(Math.floor(C.min.x-3),Math.floor(C.min.y-3),Math.floor(C.max.x-C.min.x+6),Math.floor(C.max.y-C.min.y+6)),x.closePath(),x.stroke();break;case"constraint":var D=U.pointA;U.bodyA&&(D=U.pointB),x.beginPath(),x.arc(D.x,D.y,10,0,2*Math.PI),x.closePath(),x.stroke();break}x.setLineDash([]),x.translate(-.5,-.5)}y.selectStart!==null&&(x.translate(.5,.5),x.lineWidth=1,x.strokeStyle="rgba(255,165,0,0.6)",x.fillStyle="rgba(255,165,0,0.1)",C=y.selectBounds,x.beginPath(),x.rect(Math.floor(C.min.x),Math.floor(C.min.y),Math.floor(C.max.x-C.min.x),Math.floor(C.max.y-C.min.y)),x.closePath(),x.stroke(),x.fill(),x.translate(-.5,-.5)),j.hasBounds&&x.setTransform(1,0,0,1,0,0)};var f=function(y,x){var v=y.engine,k=y.timing,j=k.historySize,C=v.timing.timestamp;k.delta=x-k.lastTime||s._goodDelta,k.lastTime=x,k.timestampElapsed=C-k.lastTimestamp||0,k.lastTimestamp=C,k.deltaHistory.unshift(k.delta),k.deltaHistory.length=Math.min(k.deltaHistory.length,j),k.engineDeltaHistory.unshift(v.timing.lastDelta),k.engineDeltaHistory.length=Math.min(k.engineDeltaHistory.length,j),k.timestampElapsedHistory.unshift(k.timestampElapsed),k.timestampElapsedHistory.length=Math.min(k.timestampElapsedHistory.length,j),k.engineUpdatesHistory.unshift(v.timing.lastUpdatesPerFrame),k.engineUpdatesHistory.length=Math.min(k.engineUpdatesHistory.length,j),k.engineElapsedHistory.unshift(v.timing.lastElapsed),k.engineElapsedHistory.length=Math.min(k.engineElapsedHistory.length,j),k.elapsedHistory.unshift(k.lastElapsed),k.elapsedHistory.length=Math.min(k.elapsedHistory.length,j)},g=function(y){for(var x=0,v=0;v<y.length;v+=1)x+=y[v];return x/y.length||0},b=function(y,x){var v=document.createElement("canvas");return v.width=y,v.height=x,v.oncontextmenu=function(){return!1},v.onselectstart=function(){return!1},v},w=function(y){var x=y.getContext("2d"),v=window.devicePixelRatio||1,k=x.webkitBackingStorePixelRatio||x.mozBackingStorePixelRatio||x.msBackingStorePixelRatio||x.oBackingStorePixelRatio||x.backingStorePixelRatio||1;return v/k},_=function(y,x){var v=y.textures[x];return v||(v=y.textures[x]=new Image,v.src=x,v)},S=function(y,x){var v=x;/(jpg|gif|png)$/.test(x)&&(v="url("+x+")"),y.canvas.style.background=v,y.canvas.style.backgroundSize="contain",y.currentBackground=x}})()},function(a,r,e){var s={};a.exports=s;var o=e(5),i=e(17),l=e(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(p){var u={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=l.extend(u,p);return h.fps=0,h},s.run=function(p,u){return p.timeBuffer=s._frameDeltaFallback,function h(d){p.frameRequestId=s._onNextFrame(p,h),d&&p.enabled&&s.tick(p,u,d)}(),p},s.tick=function(p,u,h){var d=l.now(),m=p.delta,f=0,g=h-p.timeLastTick;if((!g||!p.timeLastTick||g>Math.max(s._maxFrameDelta,p.maxFrameTime))&&(g=p.frameDelta||s._frameDeltaFallback),p.frameDeltaSmoothing){p.frameDeltaHistory.push(g),p.frameDeltaHistory=p.frameDeltaHistory.slice(-p.frameDeltaHistorySize);var b=p.frameDeltaHistory.slice(0).sort(),w=p.frameDeltaHistory.slice(b.length*s._smoothingLowerBound,b.length*s._smoothingUpperBound),_=c(w);g=_||g}p.frameDeltaSnapping&&(g=1e3/Math.round(1e3/g)),p.frameDelta=g,p.timeLastTick=h,p.timeBuffer+=p.frameDelta,p.timeBuffer=l.clamp(p.timeBuffer,0,p.frameDelta+m*s._timeBufferMargin),p.lastUpdatesDeferred=0;var S=p.maxUpdates||Math.ceil(p.maxFrameTime/m),y={timestamp:u.timing.timestamp};o.trigger(p,"beforeTick",y),o.trigger(p,"tick",y);for(var x=l.now();m>0&&p.timeBuffer>=m*s._timeBufferMargin;){o.trigger(p,"beforeUpdate",y),i.update(u,m),o.trigger(p,"afterUpdate",y),p.timeBuffer-=m,f+=1;var v=l.now()-d,k=l.now()-x,j=v+s._elapsedNextEstimate*k/f;if(f>=S||j>p.maxFrameTime){p.lastUpdatesDeferred=Math.round(Math.max(0,p.timeBuffer/m-s._timeBufferMargin));break}}u.timing.lastUpdatesPerFrame=f,o.trigger(p,"afterTick",y),p.frameDeltaHistory.length>=100&&(p.lastUpdatesDeferred&&Math.round(p.frameDelta/m)>S?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):p.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof p.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(p.deltaMin||p.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),p.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(p){s._cancelNextFrame(p)},s._onNextFrame=function(p,u){if(typeof window<"u"&&window.requestAnimationFrame)p.frameRequestId=window.requestAnimationFrame(u);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return p.frameRequestId},s._cancelNextFrame=function(p){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(p.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var c=function(p){for(var u=0,h=p.length,d=0;d<h;d+=1)u+=p[d];return u/h||0}})()},function(a,r,e){var s={};a.exports=s;var o=e(8),i=e(0),l=i.deprecated;(function(){s.collides=function(c,p){return o.collides(c,p)},l(s,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(a,r,e){var s={};a.exports=s,e(1);var o=e(0);(function(){s.pathToVertices=function(i,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var c,p,u,h,d,m,f,g,b,w,_=[],S,y,x=0,v=0,k=0;l=l||15;var j=function(P,T,E){var I=E%2===1&&E>1;if(!b||P!=b.x||T!=b.y){b&&I?(S=b.x,y=b.y):(S=0,y=0);var z={x:S+P,y:y+T};(I||!b)&&(b=z),_.push(z),v=S+P,k=y+T}},C=function(P){var T=P.pathSegTypeAsLetter.toUpperCase();if(T!=="Z"){switch(T){case"M":case"L":case"T":case"C":case"S":case"Q":v=P.x,k=P.y;break;case"H":v=P.x;break;case"V":k=P.y;break}j(v,k,P.pathSegType)}};for(s._svgPathToAbsolute(i),u=i.getTotalLength(),m=[],c=0;c<i.pathSegList.numberOfItems;c+=1)m.push(i.pathSegList.getItem(c));for(f=m.concat();x<u;){if(w=i.getPathSegAtLength(x),d=m[w],d!=g){for(;f.length&&f[0]!=d;)C(f.shift());g=d}switch(d.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=i.getPointAtLength(x),j(h.x,h.y,0);break}x+=l}for(c=0,p=f.length;c<p;++c)C(f[c]);return _},s._svgPathToAbsolute=function(i){for(var l,c,p,u,h,d,m=i.pathSegList,f=0,g=0,b=m.numberOfItems,w=0;w<b;++w){var _=m.getItem(w),S=_.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(S))"x"in _&&(f=_.x),"y"in _&&(g=_.y);else switch("x1"in _&&(p=f+_.x1),"x2"in _&&(h=f+_.x2),"y1"in _&&(u=g+_.y1),"y2"in _&&(d=g+_.y2),"x"in _&&(f+=_.x),"y"in _&&(g+=_.y),S){case"m":m.replaceItem(i.createSVGPathSegMovetoAbs(f,g),w);break;case"l":m.replaceItem(i.createSVGPathSegLinetoAbs(f,g),w);break;case"h":m.replaceItem(i.createSVGPathSegLinetoHorizontalAbs(f),w);break;case"v":m.replaceItem(i.createSVGPathSegLinetoVerticalAbs(g),w);break;case"c":m.replaceItem(i.createSVGPathSegCurvetoCubicAbs(f,g,p,u,h,d),w);break;case"s":m.replaceItem(i.createSVGPathSegCurvetoCubicSmoothAbs(f,g,h,d),w);break;case"q":m.replaceItem(i.createSVGPathSegCurvetoQuadraticAbs(f,g,p,u),w);break;case"t":m.replaceItem(i.createSVGPathSegCurvetoQuadraticSmoothAbs(f,g),w);break;case"a":m.replaceItem(i.createSVGPathSegArcAbs(f,g,_.r1,_.r2,_.angle,_.largeArcFlag,_.sweepFlag),w);break;case"z":case"Z":f=l,g=c;break}(S=="M"||S=="m")&&(l=f,c=g)}}})()},function(a,r,e){var s={};a.exports=s;var o=e(6);e(0),function(){s.create=o.create,s.add=o.add,s.remove=o.remove,s.clear=o.clear,s.addComposite=o.addComposite,s.addBody=o.addBody,s.addConstraint=o.addConstraint}()}])})}(Qs)),Qs.exports}var ma=Fh();function Ha(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lp(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ua={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kt={duration:.5,overwrite:!1,delay:0},oo,Un,Cn,Oa=1e8,Vn=1/Oa,vr=Math.PI*2,zh=vr/4,Oh=0,pp=Math.sqrt,Dh=Math.cos,Lh=Math.sin,Ln=function(n){return typeof n=="string"},Mn=function(n){return typeof n=="function"},$a=function(n){return typeof n=="number"},io=function(n){return typeof n>"u"},La=function(n){return typeof n=="object"},aa=function(n){return n!==!1},lo=function(){return typeof window<"u"},Ys=function(n){return Mn(n)||Ln(n)},dp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,wr=/(?:-?\.?\d|\.)+/gi,cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ze=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,up=/[+-]=-?[.\d]+/,hp=/[^,'"\[\]\s]+/gi,Bh=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pn,Ra,xr,po,ha={},he={},fp,mp=function(n){return(he=Zt(n,ha))&&ra},co=function(n,a){return console.warn("Invalid property",n,"set to",a,"Missing plugin? gsap.registerPlugin()")},Es=function(n,a){return!a&&console.warn(n)},gp=function(n,a){return n&&(ha[n]=a)&&he&&(he[n]=a)||ha},Is=function(){return 0},Uh={suppressEvents:!0,isStart:!0,kill:!1},ne={suppressEvents:!0,kill:!1},Gh={suppressEvents:!0},uo={},ot=[],jr={},yp,la={},Je={},xi=30,ae=[],ho="",fo=function(n){var a=n[0],r,e;if(La(a)||Mn(a)||(n=[n]),!(r=(a._gsap||{}).harness)){for(e=ae.length;e--&&!ae[e].targetTest(a););r=ae[e]}for(e=n.length;e--;)n[e]&&(n[e]._gsap||(n[e]._gsap=new Gp(n[e],r)))||n.splice(e,1);return n},jt=function(n){return n._gsap||fo(ya(n))[0]._gsap},kp=function(n,a,r){return(r=n[a])&&Mn(r)?n[a]():io(r)&&n.getAttribute&&n.getAttribute(a)||r},ta=function(n,a){return(n=n.split(",")).forEach(a)||n},Rn=function(n){return Math.round(n*1e5)/1e5||0},zn=function(n){return Math.round(n*1e7)/1e7||0},Ht=function(n,a){var r=a.charAt(0),e=parseFloat(a.substr(2));return n=parseFloat(n),r==="+"?n+e:r==="-"?n-e:r==="*"?n*e:n/e},Wh=function(n,a){for(var r=a.length,e=0;n.indexOf(a[e])<0&&++e<r;);return e<r},fe=function(){var n=ot.length,a=ot.slice(0),r,e;for(jr={},ot.length=0,r=0;r<n;r++)e=a[r],e&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},mo=function(n){return!!(n._initted||n._startAt||n.add)},bp=function(n,a,r,e){ot.length&&!Un&&fe(),n.render(a,r,!!(Un&&a<0&&mo(n))),ot.length&&!Un&&fe()},vp=function(n){var a=parseFloat(n);return(a||a===0)&&(n+"").match(hp).length<2?a:Ln(n)?n.trim():n},wp=function(n){return n},fa=function(n,a){for(var r in a)r in n||(n[r]=a[r]);return n},Hh=function(n){return function(a,r){for(var e in r)e in a||e==="duration"&&n||e==="ease"||(a[e]=r[e])}},Zt=function(n,a){for(var r in a)n[r]=a[r];return n},ji=function t(n,a){for(var r in a)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(n[r]=La(a[r])?t(n[r]||(n[r]={}),a[r]):a[r]);return n},me=function(n,a){var r={},e;for(e in n)e in a||(r[e]=n[e]);return r},xs=function(n){var a=n.parent||Pn,r=n.keyframes?Hh(qn(n.keyframes)):fa;if(aa(n.inherit))for(;a;)r(n,a.vars.defaults),a=a.parent||a._dp;return n},Nh=function(n,a){for(var r=n.length,e=r===a.length;e&&r--&&n[r]===a[r];);return r<0},xp=function(n,a,r,e,s){var o=n[e],i;if(s)for(i=a[s];o&&o[s]>i;)o=o._prev;return o?(a._next=o._next,o._next=a):(a._next=n[r],n[r]=a),a._next?a._next._prev=a:n[e]=a,a._prev=o,a.parent=a._dp=n,a},Ie=function(n,a,r,e){r===void 0&&(r="_first"),e===void 0&&(e="_last");var s=a._prev,o=a._next;s?s._next=o:n[r]===a&&(n[r]=o),o?o._prev=s:n[e]===a&&(n[e]=s),a._next=a._prev=a.parent=null},dt=function(n,a){n.parent&&(!a||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},_t=function(n,a){if(n&&(!a||a._end>n._dur||a._start<0))for(var r=n;r;)r._dirty=1,r=r.parent;return n},Vh=function(n){for(var a=n.parent;a&&a.parent;)a._dirty=1,a.totalDuration(),a=a.parent;return n},_r=function(n,a,r,e){return n._startAt&&(Un?n._startAt.revert(ne):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(a,!0,e))},Yh=function t(n){return!n||n._ts&&t(n.parent)},_i=function(n){return n._repeat?Jt(n._tTime,n=n.duration()+n._rDelay)*n:0},Jt=function(n,a){var r=Math.floor(n=zn(n/a));return n&&r===n?r-1:r},ge=function(n,a){return(n-a._start)*a._ts+(a._ts>=0?0:a._dirty?a.totalDuration():a._tDur)},Fe=function(n){return n._end=zn(n._start+(n._tDur/Math.abs(n._ts||n._rts||Vn)||0))},ze=function(n,a){var r=n._dp;return r&&r.smoothChildTiming&&n._ts&&(n._start=zn(r._time-(n._ts>0?a/n._ts:((n._dirty?n.totalDuration():n._tDur)-a)/-n._ts)),Fe(n),r._dirty||_t(r,n)),n},jp=function(n,a){var r;if((a._time||!a._dur&&a._initted||a._start<n._time&&(a._dur||!a.add))&&(r=ge(n.rawTime(),a),(!a._dur||Ws(0,a.totalDuration(),r)-a._tTime>Vn)&&a.render(r,!0)),_t(n,a)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(r=n;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;n._zTime=-1e-8}},Ia=function(n,a,r,e){return a.parent&&dt(a),a._start=zn(($a(r)?r:r||n!==Pn?ga(n,r,a):n._time)+a._delay),a._end=zn(a._start+(a.totalDuration()/Math.abs(a.timeScale())||0)),xp(n,a,"_first","_last",n._sort?"_start":0),Sr(a)||(n._recent=a),e||jp(n,a),n._ts<0&&ze(n,n._tTime),n},_p=function(n,a){return(ha.ScrollTrigger||co("scrollTrigger",a))&&ha.ScrollTrigger.create(a,n)},Sp=function(n,a,r,e,s){if(yo(n,a,s),!n._initted)return 1;if(!r&&n._pt&&!Un&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&yp!==pa.frame)return ot.push(n),n._lazy=[s,e],1},qh=function t(n){var a=n.parent;return a&&a._ts&&a._initted&&!a._lock&&(a.rawTime()<0||t(a))},Sr=function(n){var a=n.data;return a==="isFromStart"||a==="isStart"},$h=function(n,a,r,e){var s=n.ratio,o=a<0||!a&&(!n._start&&qh(n)&&!(!n._initted&&Sr(n))||(n._ts<0||n._dp._ts<0)&&!Sr(n))?0:1,i=n._rDelay,l=0,c,p,u;if(i&&n._repeat&&(l=Ws(0,n._tDur,a),p=Jt(l,i),n._yoyo&&p&1&&(o=1-o),p!==Jt(n._tTime,i)&&(s=1-o,n.vars.repeatRefresh&&n._initted&&n.invalidate())),o!==s||Un||e||n._zTime===Vn||!a&&n._zTime){if(!n._initted&&Sp(n,a,e,r,l))return;for(u=n._zTime,n._zTime=a||(r?Vn:0),r||(r=a&&!u),n.ratio=o,n._from&&(o=1-o),n._time=0,n._tTime=l,c=n._pt;c;)c.r(o,c.d),c=c._next;a<0&&_r(n,a,r,!0),n._onUpdate&&!r&&ca(n,"onUpdate"),l&&n._repeat&&!r&&n.parent&&ca(n,"onRepeat"),(a>=n._tDur||a<0)&&n.ratio===o&&(o&&dt(n,1),!r&&!Un&&(ca(n,o?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=a)},Xh=function(n,a,r){var e;if(r>a)for(e=n._first;e&&e._start<=r;){if(e.data==="isPause"&&e._start>a)return e;e=e._next}else for(e=n._last;e&&e._start>=r;){if(e.data==="isPause"&&e._start<a)return e;e=e._prev}},Qt=function(n,a,r,e){var s=n._repeat,o=zn(a)||0,i=n._tTime/n._tDur;return i&&!e&&(n._time*=o/n._dur),n._dur=o,n._tDur=s?s<0?1e10:zn(o*(s+1)+n._rDelay*s):o,i>0&&!e&&ze(n,n._tTime=n._tDur*i),n.parent&&Fe(n),r||_t(n.parent,n),n},Si=function(n){return n instanceof Zn?_t(n):Qt(n,n._dur)},Kh={_start:0,endTime:Is,totalDuration:Is},ga=function t(n,a,r){var e=n.labels,s=n._recent||Kh,o=n.duration()>=Oa?s.endTime(!1):n._dur,i,l,c;return Ln(a)&&(isNaN(a)||a in e)?(l=a.charAt(0),c=a.substr(-1)==="%",i=a.indexOf("="),l==="<"||l===">"?(i>=0&&(a=a.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(a.substr(1))||0)*(c?(i<0?s:r).totalDuration()/100:1)):i<0?(a in e||(e[a]=o),e[a]):(l=parseFloat(a.charAt(i-1)+a.substr(i+1)),c&&r&&(l=l/100*(qn(r)?r[0]:r).totalDuration()),i>1?t(n,a.substr(0,i-1),r)+l:o+l)):a==null?o:+a},js=function(n,a,r){var e=$a(a[1]),s=(e?2:1)+(n<2?0:1),o=a[s],i,l;if(e&&(o.duration=a[1]),o.parent=r,n){for(i=o,l=r;l&&!("immediateRender"in i);)i=l.vars.defaults||{},l=aa(l.vars.inherit)&&l.parent;o.immediateRender=aa(i.immediateRender),n<2?o.runBackwards=1:o.startAt=a[s-1]}return new In(a[0],o,a[s+1])},ht=function(n,a){return n||n===0?a(n):a},Ws=function(n,a,r){return r<n?n:r>a?a:r},Nn=function(n,a){return!Ln(n)||!(a=Bh.exec(n))?"":a[1]},Zh=function(n,a,r){return ht(r,function(e){return Ws(n,a,e)})},Cr=[].slice,Cp=function(n,a){return n&&La(n)&&"length"in n&&(!a&&!n.length||n.length-1 in n&&La(n[0]))&&!n.nodeType&&n!==Ra},Jh=function(n,a,r){return r===void 0&&(r=[]),n.forEach(function(e){var s;return Ln(e)&&!a||Cp(e,1)?(s=r).push.apply(s,ya(e)):r.push(e)})||r},ya=function(n,a,r){return Cn&&!a&&Cn.selector?Cn.selector(n):Ln(n)&&!r&&(xr||!ns())?Cr.call((a||po).querySelectorAll(n),0):qn(n)?Jh(n,r):Cp(n)?Cr.call(n,0):n?[n]:[]},Tr=function(n){return n=ya(n)[0]||Es("Invalid scope")||{},function(a){var r=n.current||n.nativeElement||n;return ya(a,r.querySelectorAll?r:r===n?Es("Invalid scope")||po.createElement("div"):n)}},Tp=function(n){return n.sort(function(){return .5-Math.random()})},Pp=function(n){if(Mn(n))return n;var a=La(n)?n:{each:n},r=St(a.ease),e=a.from||0,s=parseFloat(a.base)||0,o={},i=e>0&&e<1,l=isNaN(e)||i,c=a.axis,p=e,u=e;return Ln(e)?p=u={center:.5,edges:.5,end:1}[e]||0:!i&&l&&(p=e[0],u=e[1]),function(h,d,m){var f=(m||a).length,g=o[f],b,w,_,S,y,x,v,k,j;if(!g){if(j=a.grid==="auto"?0:(a.grid||[1,Oa])[1],!j){for(v=-1e8;v<(v=m[j++].getBoundingClientRect().left)&&j<f;);j<f&&j--}for(g=o[f]=[],b=l?Math.min(j,f)*p-.5:e%j,w=j===Oa?0:l?f*u/j-.5:e/j|0,v=0,k=Oa,x=0;x<f;x++)_=x%j-b,S=w-(x/j|0),g[x]=y=c?Math.abs(c==="y"?S:_):pp(_*_+S*S),y>v&&(v=y),y<k&&(k=y);e==="random"&&Tp(g),g.max=v-k,g.min=k,g.v=f=(parseFloat(a.amount)||parseFloat(a.each)*(j>f?f-1:c?c==="y"?f/j:j:Math.max(j,f/j))||0)*(e==="edges"?-1:1),g.b=f<0?s-f:s,g.u=Nn(a.amount||a.each)||0,r=r&&f<0?Lp(r):r}return f=(g[h]-g.min)/g.max||0,zn(g.b+(r?r(f):f)*g.v)+g.u}},Pr=function(n){var a=Math.pow(10,((n+"").split(".")[1]||"").length);return function(r){var e=zn(Math.round(parseFloat(r)/n)*n*a);return(e-e%1)/a+($a(r)?0:Nn(r))}},Ap=function(n,a){var r=qn(n),e,s;return!r&&La(n)&&(e=r=n.radius||Oa,n.values?(n=ya(n.values),(s=!$a(n[0]))&&(e*=e)):n=Pr(n.increment)),ht(a,r?Mn(n)?function(o){return s=n(o),Math.abs(s-o)<=e?s:o}:function(o){for(var i=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Oa,p=0,u=n.length,h,d;u--;)s?(h=n[u].x-i,d=n[u].y-l,h=h*h+d*d):h=Math.abs(n[u]-i),h<c&&(c=h,p=u);return p=!e||c<=e?n[p]:o,s||p===o||$a(o)?p:p+Nn(o)}:Pr(n))},Mp=function(n,a,r,e){return ht(qn(n)?!a:r===!0?!!(r=0):!e,function(){return qn(n)?n[~~(Math.random()*n.length)]:(r=r||1e-5)&&(e=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((n-r/2+Math.random()*(a-n+r*.99))/r)*r*e)/e})},Qh=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return function(e){return a.reduce(function(s,o){return o(s)},e)}},nf=function(n,a){return function(r){return n(parseFloat(r))+(a||Nn(r))}},af=function(n,a,r){return Ep(n,a,0,1,r)},Rp=function(n,a,r){return ht(r,function(e){return n[~~a(e)]})},tf=function t(n,a,r){var e=a-n;return qn(n)?Rp(n,t(0,n.length),a):ht(r,function(s){return(e+(s-n)%e)%e+n})},sf=function t(n,a,r){var e=a-n,s=e*2;return qn(n)?Rp(n,t(0,n.length-1),a):ht(r,function(o){return o=(s+(o-n)%s)%s||0,n+(o>e?s-o:o)})},Fs=function(n){for(var a=0,r="",e,s,o,i;~(e=n.indexOf("random(",a));)o=n.indexOf(")",e),i=n.charAt(e+7)==="[",s=n.substr(e+7,o-e-7).match(i?hp:wr),r+=n.substr(a,e-a)+Mp(i?s:+s[0],i?0:+s[1],+s[2]||1e-5),a=o+1;return r+n.substr(a,n.length-a)},Ep=function(n,a,r,e,s){var o=a-n,i=e-r;return ht(s,function(l){return r+((l-n)/o*i||0)})},ef=function t(n,a,r,e){var s=isNaN(n+a)?0:function(d){return(1-d)*n+d*a};if(!s){var o=Ln(n),i={},l,c,p,u,h;if(r===!0&&(e=1)&&(r=null),o)n={p:n},a={p:a};else if(qn(n)&&!qn(a)){for(p=[],u=n.length,h=u-2,c=1;c<u;c++)p.push(t(n[c-1],n[c]));u--,s=function(m){m*=u;var f=Math.min(h,~~m);return p[f](m-f)},r=a}else e||(n=Zt(qn(n)?[]:{},n));if(!p){for(l in a)go.call(i,n,l,"get",a[l]);s=function(m){return vo(m,i)||(o?n.p:n)}}}return ht(r,s)},Ci=function(n,a,r){var e=n.labels,s=Oa,o,i,l;for(o in e)i=e[o]-a,i<0==!!r&&i&&s>(i=Math.abs(i))&&(l=o,s=i);return l},ca=function(n,a,r){var e=n.vars,s=e[a],o=Cn,i=n._ctx,l,c,p;if(s)return l=e[a+"Params"],c=e.callbackScope||n,r&&ot.length&&fe(),i&&(Cn=i),p=l?s.apply(c,l):s.call(c),Cn=o,p},us=function(n){return dt(n),n.scrollTrigger&&n.scrollTrigger.kill(!!Un),n.progress()<1&&ca(n,"onInterrupt"),n},Ot,Ip=[],Fp=function(n){if(n)if(n=!n.name&&n.default||n,lo()||n.headless){var a=n.name,r=Mn(n),e=a&&!r&&n.init?function(){this._props=[]}:n,s={init:Is,render:vo,add:go,kill:wf,modifier:vf,rawVars:0},o={targetTest:0,get:0,getSetter:bo,aliases:{},register:0};if(ns(),n!==e){if(la[a])return;fa(e,fa(me(n,s),o)),Zt(e.prototype,Zt(s,me(n,o))),la[e.prop=a]=e,n.targetTest&&(ae.push(e),uo[a]=1),a=(a==="css"?"CSS":a.charAt(0).toUpperCase()+a.substr(1))+"Plugin"}gp(a,e),n.register&&n.register(ra,e,sa)}else Ip.push(n)},vn=255,hs={aqua:[0,vn,vn],lime:[0,vn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vn],navy:[0,0,128],white:[vn,vn,vn],olive:[128,128,0],yellow:[vn,vn,0],orange:[vn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vn,0,0],pink:[vn,192,203],cyan:[0,vn,vn],transparent:[vn,vn,vn,0]},Qe=function(n,a,r){return n+=n<0?1:n>1?-1:0,(n*6<1?a+(r-a)*n*6:n<.5?r:n*3<2?a+(r-a)*(2/3-n)*6:a)*vn+.5|0},zp=function(n,a,r){var e=n?$a(n)?[n>>16,n>>8&vn,n&vn]:0:hs.black,s,o,i,l,c,p,u,h,d,m;if(!e){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),hs[n])e=hs[n];else if(n.charAt(0)==="#"){if(n.length<6&&(s=n.charAt(1),o=n.charAt(2),i=n.charAt(3),n="#"+s+s+o+o+i+i+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return e=parseInt(n.substr(1,6),16),[e>>16,e>>8&vn,e&vn,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),e=[n>>16,n>>8&vn,n&vn]}else if(n.substr(0,3)==="hsl"){if(e=m=n.match(wr),!a)l=+e[0]%360/360,c=+e[1]/100,p=+e[2]/100,o=p<=.5?p*(c+1):p+c-p*c,s=p*2-o,e.length>3&&(e[3]*=1),e[0]=Qe(l+1/3,s,o),e[1]=Qe(l,s,o),e[2]=Qe(l-1/3,s,o);else if(~n.indexOf("="))return e=n.match(cp),r&&e.length<4&&(e[3]=1),e}else e=n.match(wr)||hs.transparent;e=e.map(Number)}return a&&!m&&(s=e[0]/vn,o=e[1]/vn,i=e[2]/vn,u=Math.max(s,o,i),h=Math.min(s,o,i),p=(u+h)/2,u===h?l=c=0:(d=u-h,c=p>.5?d/(2-u-h):d/(u+h),l=u===s?(o-i)/d+(o<i?6:0):u===o?(i-s)/d+2:(s-o)/d+4,l*=60),e[0]=~~(l+.5),e[1]=~~(c*100+.5),e[2]=~~(p*100+.5)),r&&e.length<4&&(e[3]=1),e},Op=function(n){var a=[],r=[],e=-1;return n.split(it).forEach(function(s){var o=s.match(zt)||[];a.push.apply(a,o),r.push(e+=o.length+1)}),a.c=r,a},Ti=function(n,a,r){var e="",s=(n+e).match(it),o=a?"hsla(":"rgba(",i=0,l,c,p,u;if(!s)return n;if(s=s.map(function(h){return(h=zp(h,a,1))&&o+(a?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),r&&(p=Op(n),l=r.c,l.join(e)!==p.c.join(e)))for(c=n.replace(it,"1").split(zt),u=c.length-1;i<u;i++)e+=c[i]+(~l.indexOf(i)?s.shift()||o+"0,0,0,0)":(p.length?p:s.length?s:r).shift());if(!c)for(c=n.split(it),u=c.length-1;i<u;i++)e+=c[i]+s[i];return e+c[u]},it=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in hs)t+="|"+n+"\\b";return new RegExp(t+")","gi")}(),rf=/hsl[a]?\(/,Dp=function(n){var a=n.join(" "),r;if(it.lastIndex=0,it.test(a))return r=rf.test(a),n[1]=Ti(n[1],r),n[0]=Ti(n[0],r,Op(n[1])),!0},zs,pa=function(){var t=Date.now,n=500,a=33,r=t(),e=r,s=1e3/240,o=s,i=[],l,c,p,u,h,d,m=function f(g){var b=t()-e,w=g===!0,_,S,y,x;if((b>n||b<0)&&(r+=b-a),e+=b,y=e-r,_=y-o,(_>0||w)&&(x=++u.frame,h=y-u.time*1e3,u.time=y=y/1e3,o+=_+(_>=s?4:s-_),S=1),w||(l=c(f)),S)for(d=0;d<i.length;d++)i[d](y,h,x,g)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){fp&&(!xr&&lo()&&(Ra=xr=window,po=Ra.document||{},ha.gsap=ra,(Ra.gsapVersions||(Ra.gsapVersions=[])).push(ra.version),mp(he||Ra.GreenSockGlobals||!Ra.gsap&&Ra||{}),Ip.forEach(Fp)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=p||function(g){return setTimeout(g,o-u.time*1e3+1|0)},zs=1,m(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(l),zs=0,c=Is},lagSmoothing:function(g,b){n=g||1/0,a=Math.min(b||33,n)},fps:function(g){s=1e3/(g||240),o=u.time*1e3+s},add:function(g,b,w){var _=b?function(S,y,x,v){g(S,y,x,v),u.remove(_)}:g;return u.remove(g),i[w?"unshift":"push"](_),ns(),_},remove:function(g,b){~(b=i.indexOf(g))&&i.splice(b,1)&&d>=b&&d--},_listeners:i},u}(),ns=function(){return!zs&&pa.wake()},hn={},of=/^[\d.\-M][\d.\-,\s]/,lf=/["']/g,pf=function(n){for(var a={},r=n.substr(1,n.length-3).split(":"),e=r[0],s=1,o=r.length,i,l,c;s<o;s++)l=r[s],i=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,i),a[e]=isNaN(c)?c.replace(lf,"").trim():+c,e=l.substr(i+1).trim();return a},df=function(n){var a=n.indexOf("(")+1,r=n.indexOf(")"),e=n.indexOf("(",a);return n.substring(a,~e&&e<r?n.indexOf(")",r+1):r)},cf=function(n){var a=(n+"").split("("),r=hn[a[0]];return r&&a.length>1&&r.config?r.config.apply(null,~n.indexOf("{")?[pf(a[1])]:df(n).split(",").map(vp)):hn._CE&&of.test(n)?hn._CE("",n):r},Lp=function(n){return function(a){return 1-n(1-a)}},Bp=function t(n,a){for(var r=n._first,e;r;)r instanceof Zn?t(r,a):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==a&&(r.timeline?t(r.timeline,a):(e=r._ease,r._ease=r._yEase,r._yEase=e,r._yoyo=a)),r=r._next},St=function(n,a){return n&&(Mn(n)?n:hn[n]||cf(n))||a},At=function(n,a,r,e){r===void 0&&(r=function(l){return 1-a(1-l)}),e===void 0&&(e=function(l){return l<.5?a(l*2)/2:1-a((1-l)*2)/2});var s={easeIn:a,easeOut:r,easeInOut:e},o;return ta(n,function(i){hn[i]=ha[i]=s,hn[o=i.toLowerCase()]=r;for(var l in s)hn[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=hn[i+"."+l]=s[l]}),s},Up=function(n){return function(a){return a<.5?(1-n(1-a*2))/2:.5+n((a-.5)*2)/2}},nr=function t(n,a,r){var e=a>=1?a:1,s=(r||(n?.3:.45))/(a<1?a:1),o=s/vr*(Math.asin(1/e)||0),i=function(p){return p===1?1:e*Math.pow(2,-10*p)*Lh((p-o)*s)+1},l=n==="out"?i:n==="in"?function(c){return 1-i(1-c)}:Up(i);return s=vr/s,l.config=function(c,p){return t(n,c,p)},l},ar=function t(n,a){a===void 0&&(a=1.70158);var r=function(o){return o?--o*o*((a+1)*o+a)+1:0},e=n==="out"?r:n==="in"?function(s){return 1-r(1-s)}:Up(r);return e.config=function(s){return t(n,s)},e};ta("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,n){var a=n<5?n+1:n;At(t+",Power"+(a-1),n?function(r){return Math.pow(r,a)}:function(r){return r},function(r){return 1-Math.pow(1-r,a)},function(r){return r<.5?Math.pow(r*2,a)/2:1-Math.pow((1-r)*2,a)/2})});hn.Linear.easeNone=hn.none=hn.Linear.easeIn;At("Elastic",nr("in"),nr("out"),nr());(function(t,n){var a=1/n,r=2*a,e=2.5*a,s=function(i){return i<a?t*i*i:i<r?t*Math.pow(i-1.5/n,2)+.75:i<e?t*(i-=2.25/n)*i+.9375:t*Math.pow(i-2.625/n,2)+.984375};At("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);At("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});At("Circ",function(t){return-(pp(1-t*t)-1)});At("Sine",function(t){return t===1?1:-Dh(t*zh)+1});At("Back",ar("in"),ar("out"),ar());hn.SteppedEase=hn.steps=ha.SteppedEase={config:function(n,a){n===void 0&&(n=1);var r=1/n,e=n+(a?0:1),s=a?1:0,o=1-Vn;return function(i){return((e*Ws(0,o,i)|0)+s)*r}}};Kt.ease=hn["quad.out"];ta("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ho+=t+","+t+"Params,"});var Gp=function(n,a){this.id=Oh++,n._gsap=this,this.target=n,this.harness=a,this.get=a?a.get:kp,this.set=a?a.getSetter:bo},Os=function(){function t(a){this.vars=a,this._delay=+a.delay||0,(this._repeat=a.repeat===1/0?-2:a.repeat||0)&&(this._rDelay=a.repeatDelay||0,this._yoyo=!!a.yoyo||!!a.yoyoEase),this._ts=1,Qt(this,+a.duration,1,1),this.data=a.data,Cn&&(this._ctx=Cn,Cn.data.push(this)),zs||pa.wake()}var n=t.prototype;return n.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},n.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},n.totalDuration=function(r){return arguments.length?(this._dirty=0,Qt(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(r,e){if(ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ze(this,r),!s._dp||s.parent||jp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Ia(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===Vn||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),bp(this,r,e)),this},n.time=function(r,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+_i(this))%(this._dur+this._rDelay)||(r?this._dur:0),e):this._time},n.totalProgress=function(r,e){return arguments.length?this.totalTime(this.totalDuration()*r,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(r,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+_i(this),e):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(r,e){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,e):this._repeat?Jt(this._tTime,s)+1:1},n.timeScale=function(r,e){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?ge(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(Ws(-Math.abs(this._delay),this.totalDuration(),s),e!==!1),Fe(this),Vh(this)},n.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vn&&(this._tTime-=Vn)))),this):this._ps},n.startTime=function(r){if(arguments.length){this._start=r;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&Ia(e,this,r-this._delay),this}return this._start},n.endTime=function(r){return this._start+(aa(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(r){var e=this.parent||this._dp;return e?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ge(e.rawTime(r),this):this._tTime:this._tTime},n.revert=function(r){r===void 0&&(r=Gh);var e=Un;return Un=r,mo(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Un=e,this},n.globalTime=function(r){for(var e=this,s=arguments.length?r:e.rawTime();e;)s=e._start+s/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(r):s},n.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Si(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(r){if(arguments.length){var e=this._time;return this._rDelay=r,Si(this),e?this.time(e):this}return this._rDelay},n.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},n.seek=function(r,e){return this.totalTime(ga(this,r),aa(e))},n.restart=function(r,e){return this.play().totalTime(r?-this._delay:0,aa(e)),this._dur||(this._zTime=-1e-8),this},n.play=function(r,e){return r!=null&&this.seek(r,e),this.reversed(!1).paused(!1)},n.reverse=function(r,e){return r!=null&&this.seek(r||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.pause=function(r,e){return r!=null&&this.seek(r,e),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},n.isActive=function(){var r=this.parent||this._dp,e=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=e&&s<this.endTime(!0)-Vn)},n.eventCallback=function(r,e,s){var o=this.vars;return arguments.length>1?(e?(o[r]=e,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=e)):delete o[r],this):o[r]},n.then=function(r){var e=this;return new Promise(function(s){var o=Mn(r)?r:wp,i=function(){var c=e.then;e.then=null,Mn(o)&&(o=o(e))&&(o.then||o===e)&&(e.then=c),s(o),e.then=c};e._initted&&e.totalProgress()===1&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i})},n.kill=function(){us(this)},t}();fa(Os.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Zn=function(t){lp(n,t);function n(r,e){var s;return r===void 0&&(r={}),s=t.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=aa(r.sortChildren),Pn&&Ia(r.parent||Pn,Ha(s),e),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&_p(Ha(s),r.scrollTrigger),s}var a=n.prototype;return a.to=function(e,s,o){return js(0,arguments,this),this},a.from=function(e,s,o){return js(1,arguments,this),this},a.fromTo=function(e,s,o,i){return js(2,arguments,this),this},a.set=function(e,s,o){return s.duration=0,s.parent=this,xs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new In(e,s,ga(this,o),1),this},a.call=function(e,s,o){return Ia(this,In.delayedCall(0,e,s),o)},a.staggerTo=function(e,s,o,i,l,c,p){return o.duration=s,o.stagger=o.stagger||i,o.onComplete=c,o.onCompleteParams=p,o.parent=this,new In(e,o,ga(this,l)),this},a.staggerFrom=function(e,s,o,i,l,c,p){return o.runBackwards=1,xs(o).immediateRender=aa(o.immediateRender),this.staggerTo(e,s,o,i,l,c,p)},a.staggerFromTo=function(e,s,o,i,l,c,p,u){return i.startAt=o,xs(i).immediateRender=aa(i.immediateRender),this.staggerTo(e,s,i,l,c,p,u)},a.render=function(e,s,o){var i=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,p=e<=0?0:zn(e),u=this._zTime<0!=e<0&&(this._initted||!c),h,d,m,f,g,b,w,_,S,y,x,v;if(this!==Pn&&p>l&&e>=0&&(p=l),p!==this._tTime||o||u){if(i!==this._time&&c&&(p+=this._time-i,e+=this._time-i),h=p,S=this._start,_=this._ts,b=!_,u&&(c||(i=this._zTime),(e||!s)&&(this._zTime=e)),this._repeat){if(x=this._yoyo,g=c+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(g*100+e,s,o);if(h=zn(p%g),p===l?(f=this._repeat,h=c):(y=zn(p/g),f=~~y,f&&f===y&&(h=c,f--),h>c&&(h=c)),y=Jt(this._tTime,g),!i&&this._tTime&&y!==f&&this._tTime-y*g-this._dur<=0&&(y=f),x&&f&1&&(h=c-h,v=1),f!==y&&!this._lock){var k=x&&y&1,j=k===(x&&f&1);if(f<y&&(k=!k),i=k?0:p%c?c:p,this._lock=1,this.render(i||(v?0:zn(f*g)),s,!c)._lock=0,this._tTime=p,!s&&this.parent&&ca(this,"onRepeat"),this.vars.repeatRefresh&&!v&&(this.invalidate()._lock=1),i&&i!==this._time||b!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,j&&(this._lock=2,i=k?c:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!v&&this.invalidate()),this._lock=0,!this._ts&&!b)return this;Bp(this,v)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Xh(this,zn(i),zn(h)),w&&(p-=h-(h=w._start))),this._tTime=p,this._time=h,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,i=0),!i&&p&&!s&&!y&&(ca(this,"onStart"),this._tTime!==p))return this;if(h>=i&&e>=0)for(d=this._first;d;){if(m=d._next,(d._act||h>=d._start)&&d._ts&&w!==d){if(d.parent!==this)return this.render(e,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!b){w=0,m&&(p+=this._zTime=-1e-8);break}}d=m}else{d=this._last;for(var C=e<0?e:h;d;){if(m=d._prev,(d._act||C<=d._end)&&d._ts&&w!==d){if(d.parent!==this)return this.render(e,s,o);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,s,o||Un&&mo(d)),h!==this._time||!this._ts&&!b){w=0,m&&(p+=this._zTime=C?-1e-8:Vn);break}}d=m}}if(w&&!s&&(this.pause(),w.render(h>=i?0:-1e-8)._zTime=h>=i?1:-1,this._ts))return this._start=S,Fe(this),this.render(e,s,o);this._onUpdate&&!s&&ca(this,"onUpdate",!0),(p===l&&this._tTime>=this.totalDuration()||!p&&i)&&(S===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((e||!c)&&(p===l&&this._ts>0||!p&&this._ts<0)&&dt(this,1),!s&&!(e<0&&!i)&&(p||i||!l)&&(ca(this,p===l&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom())))}return this},a.add=function(e,s){var o=this;if($a(s)||(s=ga(this,s,e)),!(e instanceof Os)){if(qn(e))return e.forEach(function(i){return o.add(i,s)}),this;if(Ln(e))return this.addLabel(e,s);if(Mn(e))e=In.delayedCall(0,e);else return this}return this!==e?Ia(this,e,s):this},a.getChildren=function(e,s,o,i){e===void 0&&(e=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),i===void 0&&(i=-1e8);for(var l=[],c=this._first;c;)c._start>=i&&(c instanceof In?s&&l.push(c):(o&&l.push(c),e&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},a.getById=function(e){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===e)return s[o]},a.remove=function(e){return Ln(e)?this.removeLabel(e):Mn(e)?this.killTweensOf(e):(e.parent===this&&Ie(this,e),e===this._recent&&(this._recent=this._last),_t(this))},a.totalTime=function(e,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zn(pa.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),t.prototype.totalTime.call(this,e,s),this._forcing=0,this):this._tTime},a.addLabel=function(e,s){return this.labels[e]=ga(this,s),this},a.removeLabel=function(e){return delete this.labels[e],this},a.addPause=function(e,s,o){var i=In.delayedCall(0,s||Is,o);return i.data="isPause",this._hasPause=1,Ia(this,i,ga(this,e))},a.removePause=function(e){var s=this._first;for(e=ga(this,e);s;)s._start===e&&s.data==="isPause"&&dt(s),s=s._next},a.killTweensOf=function(e,s,o){for(var i=this.getTweensOf(e,o),l=i.length;l--;)tt!==i[l]&&i[l].kill(e,s);return this},a.getTweensOf=function(e,s){for(var o=[],i=ya(e),l=this._first,c=$a(s),p;l;)l instanceof In?Wh(l._targets,i)&&(c?(!tt||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(p=l.getTweensOf(i,s)).length&&o.push.apply(o,p),l=l._next;return o},a.tweenTo=function(e,s){s=s||{};var o=this,i=ga(o,e),l=s,c=l.startAt,p=l.onStart,u=l.onStartParams,h=l.immediateRender,d,m=In.to(o,fa({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:s.duration||Math.abs((i-(c&&"time"in c?c.time:o._time))/o.timeScale())||Vn,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((i-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&Qt(m,g,0,1).render(m._time,!0,!0),d=1}p&&p.apply(m,u||[])}},s));return h?m.render(0):m},a.tweenFromTo=function(e,s,o){return this.tweenTo(s,fa({startAt:{time:ga(this,e)}},o))},a.recent=function(){return this._recent},a.nextLabel=function(e){return e===void 0&&(e=this._time),Ci(this,ga(this,e))},a.previousLabel=function(e){return e===void 0&&(e=this._time),Ci(this,ga(this,e),1)},a.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Vn)},a.shiftChildren=function(e,s,o){o===void 0&&(o=0);for(var i=this._first,l=this.labels,c;i;)i._start>=o&&(i._start+=e,i._end+=e),i=i._next;if(s)for(c in l)l[c]>=o&&(l[c]+=e);return _t(this)},a.invalidate=function(e){var s=this._first;for(this._lock=0;s;)s.invalidate(e),s=s._next;return t.prototype.invalidate.call(this,e)},a.clear=function(e){e===void 0&&(e=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),_t(this)},a.totalDuration=function(e){var s=0,o=this,i=o._last,l=Oa,c,p,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-e:e));if(o._dirty){for(u=o.parent;i;)c=i._prev,i._dirty&&i.totalDuration(),p=i._start,p>l&&o._sort&&i._ts&&!o._lock?(o._lock=1,Ia(o,i,p-i._delay,1)._lock=0):l=p,p<0&&i._ts&&(s-=p,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=p/o._ts,o._time-=p,o._tTime-=p),o.shiftChildren(-p,!1,-1/0),l=0),i._end>s&&i._ts&&(s=i._end),i=c;Qt(o,o===Pn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},n.updateRoot=function(e){if(Pn._ts&&(bp(Pn,ge(e,Pn)),yp=pa.frame),pa.frame>=xi){xi+=ua.autoSleep||120;var s=Pn._first;if((!s||!s._ts)&&ua.autoSleep&&pa._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pa.sleep()}}},n}(Os);fa(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var uf=function(n,a,r,e,s,o,i){var l=new sa(this._pt,n,a,0,1,qp,null,s),c=0,p=0,u,h,d,m,f,g,b,w;for(l.b=r,l.e=e,r+="",e+="",(b=~e.indexOf("random("))&&(e=Fs(e)),o&&(w=[r,e],o(w,n,a),r=w[0],e=w[1]),h=r.match(Ze)||[];u=Ze.exec(e);)m=u[0],f=e.substring(c,u.index),d?d=(d+1)%5:f.substr(-5)==="rgba("&&(d=1),m!==h[p++]&&(g=parseFloat(h[p-1])||0,l._pt={_next:l._pt,p:f||p===1?f:",",s:g,c:m.charAt(1)==="="?Ht(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},c=Ze.lastIndex);return l.c=c<e.length?e.substring(c,e.length):"",l.fp=i,(up.test(e)||b)&&(l.e=0),this._pt=l,l},go=function(n,a,r,e,s,o,i,l,c,p){Mn(e)&&(e=e(s||0,n,o));var u=n[a],h=r!=="get"?r:Mn(u)?c?n[a.indexOf("set")||!Mn(n["get"+a.substr(3)])?a:"get"+a.substr(3)](c):n[a]():u,d=Mn(u)?c?yf:Vp:ko,m;if(Ln(e)&&(~e.indexOf("random(")&&(e=Fs(e)),e.charAt(1)==="="&&(m=Ht(h,e)+(Nn(h)||0),(m||m===0)&&(e=m))),!p||h!==e||Ar)return!isNaN(h*e)&&e!==""?(m=new sa(this._pt,n,a,+h||0,e-(h||0),typeof u=="boolean"?bf:Yp,0,d),c&&(m.fp=c),i&&m.modifier(i,this,n),this._pt=m):(!u&&!(a in n)&&co(a,e),uf.call(this,n,a,h,e,d,l||ua.stringFilter,c))},hf=function(n,a,r,e,s){if(Mn(n)&&(n=_s(n,s,a,r,e)),!La(n)||n.style&&n.nodeType||qn(n)||dp(n))return Ln(n)?_s(n,s,a,r,e):n;var o={},i;for(i in n)o[i]=_s(n[i],s,a,r,e);return o},Wp=function(n,a,r,e,s,o){var i,l,c,p;if(la[n]&&(i=new la[n]).init(s,i.rawVars?a[n]:hf(a[n],e,s,o,r),r,e,o)!==!1&&(r._pt=l=new sa(r._pt,s,n,0,1,i.render,i,0,i.priority),r!==Ot))for(c=r._ptLookup[r._targets.indexOf(s)],p=i._props.length;p--;)c[i._props[p]]=l;return i},tt,Ar,yo=function t(n,a,r){var e=n.vars,s=e.ease,o=e.startAt,i=e.immediateRender,l=e.lazy,c=e.onUpdate,p=e.runBackwards,u=e.yoyoEase,h=e.keyframes,d=e.autoRevert,m=n._dur,f=n._startAt,g=n._targets,b=n.parent,w=b&&b.data==="nested"?b.vars.targets:g,_=n._overwrite==="auto"&&!oo,S=n.timeline,y,x,v,k,j,C,P,T,E,I,z,U,D;if(S&&(!h||!s)&&(s="none"),n._ease=St(s,Kt.ease),n._yEase=u?Lp(St(u===!0?s:u,Kt.ease)):0,u&&n._yoyo&&!n._repeat&&(u=n._yEase,n._yEase=n._ease,n._ease=u),n._from=!S&&!!e.runBackwards,!S||h&&!e.stagger){if(T=g[0]?jt(g[0]).harness:0,U=T&&e[T.prop],y=me(e,uo),f&&(f._zTime<0&&f.progress(1),a<0&&p&&i&&!d?f.render(-1,!0):f.revert(p&&m?ne:Uh),f._lazy=0),o){if(dt(n._startAt=In.set(g,fa({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!f&&aa(l),startAt:null,delay:0,onUpdate:c&&function(){return ca(n,"onUpdate")},stagger:0},o))),n._startAt._dp=0,n._startAt._sat=n,a<0&&(Un||!i&&!d)&&n._startAt.revert(ne),i&&m&&a<=0&&r<=0){a&&(n._zTime=a);return}}else if(p&&m&&!f){if(a&&(i=!1),v=fa({overwrite:!1,data:"isFromStart",lazy:i&&!f&&aa(l),immediateRender:i,stagger:0,parent:b},y),U&&(v[T.prop]=U),dt(n._startAt=In.set(g,v)),n._startAt._dp=0,n._startAt._sat=n,a<0&&(Un?n._startAt.revert(ne):n._startAt.render(-1,!0)),n._zTime=a,!i)t(n._startAt,Vn,Vn);else if(!a)return}for(n._pt=n._ptCache=0,l=m&&aa(l)||l&&!m,x=0;x<g.length;x++){if(j=g[x],P=j._gsap||fo(g)[x]._gsap,n._ptLookup[x]=I={},jr[P.id]&&ot.length&&fe(),z=w===g?x:w.indexOf(j),T&&(E=new T).init(j,U||y,n,z,w)!==!1&&(n._pt=k=new sa(n._pt,j,E.name,0,1,E.render,E,0,E.priority),E._props.forEach(function(V){I[V]=k}),E.priority&&(C=1)),!T||U)for(v in y)la[v]&&(E=Wp(v,y,n,z,j,w))?E.priority&&(C=1):I[v]=k=go.call(n,j,v,"get",y[v],z,w,0,e.stringFilter);n._op&&n._op[x]&&n.kill(j,n._op[x]),_&&n._pt&&(tt=n,Pn.killTweensOf(j,I,n.globalTime(a)),D=!n.parent,tt=0),n._pt&&l&&(jr[P.id]=1)}C&&$p(n),n._onInit&&n._onInit(n)}n._onUpdate=c,n._initted=(!n._op||n._pt)&&!D,h&&a<=0&&S.render(Oa,!0,!0)},ff=function(n,a,r,e,s,o,i,l){var c=(n._pt&&n._ptCache||(n._ptCache={}))[a],p,u,h,d;if(!c)for(c=n._ptCache[a]=[],h=n._ptLookup,d=n._targets.length;d--;){if(p=h[d][a],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==a&&p.fp!==a;)p=p._next;if(!p)return Ar=1,n.vars[a]="+=0",yo(n,i),Ar=0,l?Es(a+" not eligible for reset"):1;c.push(p)}for(d=c.length;d--;)u=c[d],p=u._pt||u,p.s=(e||e===0)&&!s?e:p.s+(e||0)+o*p.c,p.c=r-p.s,u.e&&(u.e=Rn(r)+Nn(u.e)),u.b&&(u.b=p.s+Nn(u.b))},mf=function(n,a){var r=n[0]?jt(n[0]).harness:0,e=r&&r.aliases,s,o,i,l;if(!e)return a;s=Zt({},a);for(o in e)if(o in s)for(l=e[o].split(","),i=l.length;i--;)s[l[i]]=s[o];return s},gf=function(n,a,r,e){var s=a.ease||e||"power1.inOut",o,i;if(qn(a))i=r[n]||(r[n]=[]),a.forEach(function(l,c){return i.push({t:c/(a.length-1)*100,v:l,e:s})});else for(o in a)i=r[o]||(r[o]=[]),o==="ease"||i.push({t:parseFloat(n),v:a[o],e:s})},_s=function(n,a,r,e,s){return Mn(n)?n.call(a,r,e,s):Ln(n)&&~n.indexOf("random(")?Fs(n):n},Hp=ho+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Np={};ta(Hp+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Np[t]=1});var In=function(t){lp(n,t);function n(r,e,s,o){var i;typeof e=="number"&&(s.duration=e,e=s,s=null),i=t.call(this,o?e:xs(e))||this;var l=i.vars,c=l.duration,p=l.delay,u=l.immediateRender,h=l.stagger,d=l.overwrite,m=l.keyframes,f=l.defaults,g=l.scrollTrigger,b=l.yoyoEase,w=e.parent||Pn,_=(qn(r)||dp(r)?$a(r[0]):"length"in e)?[r]:ya(r),S,y,x,v,k,j,C,P;if(i._targets=_.length?fo(_):Es("GSAP target "+r+" not found. https://gsap.com",!ua.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=d,m||h||Ys(c)||Ys(p)){if(e=i.vars,S=i.timeline=new Zn({data:"nested",defaults:f||{},targets:w&&w.data==="nested"?w.vars.targets:_}),S.kill(),S.parent=S._dp=Ha(i),S._start=0,h||Ys(c)||Ys(p)){if(v=_.length,C=h&&Pp(h),La(h))for(k in h)~Hp.indexOf(k)&&(P||(P={}),P[k]=h[k]);for(y=0;y<v;y++)x=me(e,Np),x.stagger=0,b&&(x.yoyoEase=b),P&&Zt(x,P),j=_[y],x.duration=+_s(c,Ha(i),y,j,_),x.delay=(+_s(p,Ha(i),y,j,_)||0)-i._delay,!h&&v===1&&x.delay&&(i._delay=p=x.delay,i._start+=p,x.delay=0),S.to(j,x,C?C(y,j,_):0),S._ease=hn.none;S.duration()?c=p=0:i.timeline=0}else if(m){xs(fa(S.vars.defaults,{ease:"none"})),S._ease=St(m.ease||e.ease||"none");var T=0,E,I,z;if(qn(m))m.forEach(function(U){return S.to(_,U,">")}),S.duration();else{x={};for(k in m)k==="ease"||k==="easeEach"||gf(k,m[k],x,m.easeEach);for(k in x)for(E=x[k].sort(function(U,D){return U.t-D.t}),T=0,y=0;y<E.length;y++)I=E[y],z={ease:I.e,duration:(I.t-(y?E[y-1].t:0))/100*c},z[k]=I.v,S.to(_,z,T),T+=z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||i.duration(c=S.duration())}else i.timeline=0;return d===!0&&!oo&&(tt=Ha(i),Pn.killTweensOf(_),tt=0),Ia(w,Ha(i),s),e.reversed&&i.reverse(),e.paused&&i.paused(!0),(u||!c&&!m&&i._start===zn(w._time)&&aa(u)&&Yh(Ha(i))&&w.data!=="nested")&&(i._tTime=-1e-8,i.render(Math.max(0,-p)||0)),g&&_p(Ha(i),g),i}var a=n.prototype;return a.render=function(e,s,o){var i=this._time,l=this._tDur,c=this._dur,p=e<0,u=e>l-Vn&&!p?l:e<Vn?0:e,h,d,m,f,g,b,w,_,S;if(!c)$h(this,e,s,o);else if(u!==this._tTime||!e||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(h=u,_=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&p)return this.totalTime(f*100+e,s,o);if(h=zn(u%f),u===l?(m=this._repeat,h=c):(g=zn(u/f),m=~~g,m&&m===g?(h=c,m--):h>c&&(h=c)),b=this._yoyo&&m&1,b&&(S=this._yEase,h=c-h),g=Jt(this._tTime,f),h===i&&!o&&this._initted&&m===g)return this._tTime=u,this;m!==g&&(_&&this._yEase&&Bp(_,b),this.vars.repeatRefresh&&!b&&!this._lock&&h!==f&&this._initted&&(this._lock=o=1,this.render(zn(f*m),!0).invalidate()._lock=0))}if(!this._initted){if(Sp(this,p?e:h,o,s,u))return this._tTime=0,this;if(i!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(e,s,o)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(S||this._ease)(h/c),this._from&&(this.ratio=w=1-w),!i&&u&&!s&&!g&&(ca(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(w,d.d),d=d._next;_&&_.render(e<0?e:_._dur*_._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=e),this._onUpdate&&!s&&(p&&_r(this,e,s,o),ca(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&ca(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(p&&!this._onUpdate&&_r(this,e,!0,!0),(e||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&dt(this,1),!s&&!(p&&!i)&&(u||i||b)&&(ca(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},a.targets=function(){return this._targets},a.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e)},a.resetTo=function(e,s,o,i,l){zs||pa.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||yo(this,c),p=this._ease(c/this._dur),ff(this,e,s,o,i,p,c,l)?this.resetTo(e,s,o,i,1):(ze(this,0),this.parent||xp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},a.kill=function(e,s){if(s===void 0&&(s="all"),!e&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?us(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Un),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(e,s,tt&&tt.vars.overwrite!==!0)._first||us(this),this.parent&&o!==this.timeline.totalDuration()&&Qt(this,this._dur*this.timeline._tDur/o,0,1),this}var i=this._targets,l=e?ya(e):i,c=this._ptLookup,p=this._pt,u,h,d,m,f,g,b;if((!s||s==="all")&&Nh(i,l))return s==="all"&&(this._pt=0),us(this);for(u=this._op=this._op||[],s!=="all"&&(Ln(s)&&(f={},ta(s,function(w){return f[w]=1}),s=f),s=mf(i,s)),b=i.length;b--;)if(~l.indexOf(i[b])){h=c[b],s==="all"?(u[b]=s,m=h,d={}):(d=u[b]=u[b]||{},m=s);for(f in m)g=h&&h[f],g&&((!("kill"in g.d)||g.d.kill(f)===!0)&&Ie(this,g,"_pt"),delete h[f]),d!=="all"&&(d[f]=1)}return this._initted&&!this._pt&&p&&us(this),this},n.to=function(e,s){return new n(e,s,arguments[2])},n.from=function(e,s){return js(1,arguments)},n.delayedCall=function(e,s,o,i){return new n(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:i})},n.fromTo=function(e,s,o){return js(2,arguments)},n.set=function(e,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new n(e,s)},n.killTweensOf=function(e,s,o){return Pn.killTweensOf(e,s,o)},n}(Os);fa(In.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ta("staggerTo,staggerFrom,staggerFromTo",function(t){In[t]=function(){var n=new Zn,a=Cr.call(arguments,0);return a.splice(t==="staggerFromTo"?5:4,0,0),n[t].apply(n,a)}});var ko=function(n,a,r){return n[a]=r},Vp=function(n,a,r){return n[a](r)},yf=function(n,a,r,e){return n[a](e.fp,r)},kf=function(n,a,r){return n.setAttribute(a,r)},bo=function(n,a){return Mn(n[a])?Vp:io(n[a])&&n.setAttribute?kf:ko},Yp=function(n,a){return a.set(a.t,a.p,Math.round((a.s+a.c*n)*1e6)/1e6,a)},bf=function(n,a){return a.set(a.t,a.p,!!(a.s+a.c*n),a)},qp=function(n,a){var r=a._pt,e="";if(!n&&a.b)e=a.b;else if(n===1&&a.e)e=a.e;else{for(;r;)e=r.p+(r.m?r.m(r.s+r.c*n):Math.round((r.s+r.c*n)*1e4)/1e4)+e,r=r._next;e+=a.c}a.set(a.t,a.p,e,a)},vo=function(n,a){for(var r=a._pt;r;)r.r(n,r.d),r=r._next},vf=function(n,a,r,e){for(var s=this._pt,o;s;)o=s._next,s.p===e&&s.modifier(n,a,r),s=o},wf=function(n){for(var a=this._pt,r,e;a;)e=a._next,a.p===n&&!a.op||a.op===n?Ie(this,a,"_pt"):a.dep||(r=1),a=e;return!r},xf=function(n,a,r,e){e.mSet(n,a,e.m.call(e.tween,r,e.mt),e)},$p=function(n){for(var a=n._pt,r,e,s,o;a;){for(r=a._next,e=s;e&&e.pr>a.pr;)e=e._next;(a._prev=e?e._prev:o)?a._prev._next=a:s=a,(a._next=e)?e._prev=a:o=a,a=r}n._pt=s},sa=function(){function t(a,r,e,s,o,i,l,c,p){this.t=r,this.s=s,this.c=o,this.p=e,this.r=i||Yp,this.d=l||this,this.set=c||ko,this.pr=p||0,this._next=a,a&&(a._prev=this)}var n=t.prototype;return n.modifier=function(r,e,s){this.mSet=this.mSet||this.set,this.set=xf,this.m=r,this.mt=s,this.tween=e},t}();ta(ho+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return uo[t]=1});ha.TweenMax=ha.TweenLite=In;ha.TimelineLite=ha.TimelineMax=Zn;Pn=new Zn({sortChildren:!1,defaults:Kt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ua.stringFilter=Dp;var Ct=[],te={},jf=[],Pi=0,_f=0,tr=function(n){return(te[n]||jf).map(function(a){return a()})},Mr=function(){var n=Date.now(),a=[];n-Pi>2&&(tr("matchMediaInit"),Ct.forEach(function(r){var e=r.queries,s=r.conditions,o,i,l,c;for(i in e)o=Ra.matchMedia(e[i]).matches,o&&(l=1),o!==s[i]&&(s[i]=o,c=1);c&&(r.revert(),l&&a.push(r))}),tr("matchMediaRevert"),a.forEach(function(r){return r.onMatch(r,function(e){return r.add(null,e)})}),Pi=n,tr("matchMedia"))},Xp=function(){function t(a,r){this.selector=r&&Tr(r),this.data=[],this._r=[],this.isReverted=!1,this.id=_f++,a&&this.add(a)}var n=t.prototype;return n.add=function(r,e,s){Mn(r)&&(s=e,e=r,r=Mn);var o=this,i=function(){var c=Cn,p=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Tr(s)),Cn=o,u=e.apply(o,arguments),Mn(u)&&o._r.push(u),Cn=c,o.selector=p,o.isReverted=!1,u};return o.last=i,r===Mn?i(o,function(l){return o.add(null,l)}):r?o[r]=i:i},n.ignore=function(r){var e=Cn;Cn=null,r(this),Cn=e},n.getTweens=function(){var r=[];return this.data.forEach(function(e){return e instanceof t?r.push.apply(r,e.getTweens()):e instanceof In&&!(e.parent&&e.parent.data==="nested")&&r.push(e)}),r},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(r,e){var s=this;if(r?function(){for(var i=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(p){return i.splice(i.indexOf(p),1)}));for(i.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,u){return u.g-p.g||-1/0}).forEach(function(p){return p.t.revert(r)}),l=s.data.length;l--;)c=s.data[l],c instanceof Zn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof In)&&c.revert&&c.revert(r);s._r.forEach(function(p){return p(r,s)}),s.isReverted=!0}():this.data.forEach(function(i){return i.kill&&i.kill()}),this.clear(),e)for(var o=Ct.length;o--;)Ct[o].id===this.id&&Ct.splice(o,1)},n.revert=function(r){this.kill(r||{})},t}(),Sf=function(){function t(a){this.contexts=[],this.scope=a,Cn&&Cn.data.push(this)}var n=t.prototype;return n.add=function(r,e,s){La(r)||(r={matches:r});var o=new Xp(0,s||this.scope),i=o.conditions={},l,c,p;Cn&&!o.selector&&(o.selector=Cn.selector),this.contexts.push(o),e=o.add("onMatch",e),o.queries=r;for(c in r)c==="all"?p=1:(l=Ra.matchMedia(r[c]),l&&(Ct.indexOf(o)<0&&Ct.push(o),(i[c]=l.matches)&&(p=1),l.addListener?l.addListener(Mr):l.addEventListener("change",Mr)));return p&&e(o,function(u){return o.add(null,u)}),this},n.revert=function(r){this.kill(r||{})},n.kill=function(r){this.contexts.forEach(function(e){return e.kill(r,!0)})},t}(),ye={registerPlugin:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];a.forEach(function(e){return Fp(e)})},timeline:function(n){return new Zn(n)},getTweensOf:function(n,a){return Pn.getTweensOf(n,a)},getProperty:function(n,a,r,e){Ln(n)&&(n=ya(n)[0]);var s=jt(n||{}).get,o=r?wp:vp;return r==="native"&&(r=""),n&&(a?o((la[a]&&la[a].get||s)(n,a,r,e)):function(i,l,c){return o((la[i]&&la[i].get||s)(n,i,l,c))})},quickSetter:function(n,a,r){if(n=ya(n),n.length>1){var e=n.map(function(p){return ra.quickSetter(p,a,r)}),s=e.length;return function(p){for(var u=s;u--;)e[u](p)}}n=n[0]||{};var o=la[a],i=jt(n),l=i.harness&&(i.harness.aliases||{})[a]||a,c=o?function(p){var u=new o;Ot._pt=0,u.init(n,r?p+r:p,Ot,0,[n]),u.render(1,u),Ot._pt&&vo(1,Ot)}:i.set(n,l);return o?c:function(p){return c(n,l,r?p+r:p,i,1)}},quickTo:function(n,a,r){var e,s=ra.to(n,fa((e={},e[a]="+=0.1",e.paused=!0,e.stagger=0,e),r||{})),o=function(l,c,p){return s.resetTo(a,l,c,p)};return o.tween=s,o},isTweening:function(n){return Pn.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=St(n.ease,Kt.ease)),ji(Kt,n||{})},config:function(n){return ji(ua,n||{})},registerEffect:function(n){var a=n.name,r=n.effect,e=n.plugins,s=n.defaults,o=n.extendTimeline;(e||"").split(",").forEach(function(i){return i&&!la[i]&&!ha[i]&&Es(a+" effect requires "+i+" plugin.")}),Je[a]=function(i,l,c){return r(ya(i),fa(l||{},s),c)},o&&(Zn.prototype[a]=function(i,l,c){return this.add(Je[a](i,La(l)?l:(c=l)&&{},this),c)})},registerEase:function(n,a){hn[n]=St(a)},parseEase:function(n,a){return arguments.length?St(n,a):hn},getById:function(n){return Pn.getById(n)},exportRoot:function(n,a){n===void 0&&(n={});var r=new Zn(n),e,s;for(r.smoothChildTiming=aa(n.smoothChildTiming),Pn.remove(r),r._dp=0,r._time=r._tTime=Pn._time,e=Pn._first;e;)s=e._next,(a||!(!e._dur&&e instanceof In&&e.vars.onComplete===e._targets[0]))&&Ia(r,e,e._start-e._delay),e=s;return Ia(Pn,r,0),r},context:function(n,a){return n?new Xp(n,a):Cn},matchMedia:function(n){return new Sf(n)},matchMediaRefresh:function(){return Ct.forEach(function(n){var a=n.conditions,r,e;for(e in a)a[e]&&(a[e]=!1,r=1);r&&n.revert()})||Mr()},addEventListener:function(n,a){var r=te[n]||(te[n]=[]);~r.indexOf(a)||r.push(a)},removeEventListener:function(n,a){var r=te[n],e=r&&r.indexOf(a);e>=0&&r.splice(e,1)},utils:{wrap:tf,wrapYoyo:sf,distribute:Pp,random:Mp,snap:Ap,normalize:af,getUnit:Nn,clamp:Zh,splitColor:zp,toArray:ya,selector:Tr,mapRange:Ep,pipe:Qh,unitize:nf,interpolate:ef,shuffle:Tp},install:mp,effects:Je,ticker:pa,updateRoot:Zn.updateRoot,plugins:la,globalTimeline:Pn,core:{PropTween:sa,globals:gp,Tween:In,Timeline:Zn,Animation:Os,getCache:jt,_removeLinkedListItem:Ie,reverting:function(){return Un},context:function(n){return n&&Cn&&(Cn.data.push(n),n._ctx=Cn),Cn},suppressOverwrites:function(n){return oo=n}}};ta("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ye[t]=In[t]});pa.add(Zn.updateRoot);Ot=ye.to({},{duration:0});var Cf=function(n,a){for(var r=n._pt;r&&r.p!==a&&r.op!==a&&r.fp!==a;)r=r._next;return r},Tf=function(n,a){var r=n._targets,e,s,o;for(e in a)for(s=r.length;s--;)o=n._ptLookup[s][e],o&&(o=o.d)&&(o._pt&&(o=Cf(o,e)),o&&o.modifier&&o.modifier(a[e],n,r[s],e))},sr=function(n,a){return{name:n,headless:1,rawVars:1,init:function(e,s,o){o._onInit=function(i){var l,c;if(Ln(s)&&(l={},ta(s,function(p){return l[p]=1}),s=l),a){l={};for(c in s)l[c]=a(s[c]);s=l}Tf(i,s)}}}},ra=ye.registerPlugin({name:"attr",init:function(n,a,r,e,s){var o,i,l;this.tween=r;for(o in a)l=n.getAttribute(o)||"",i=this.add(n,"setAttribute",(l||0)+"",a[o],e,s,0,0,o),i.op=o,i.b=l,this._props.push(o)},render:function(n,a){for(var r=a._pt;r;)Un?r.set(r.t,r.p,r.b,r):r.r(n,r.d),r=r._next}},{name:"endArray",headless:1,init:function(n,a){for(var r=a.length;r--;)this.add(n,r,n[r]||0,a[r],0,0,0,0,0,1)}},sr("roundProps",Pr),sr("modifiers"),sr("snap",Ap))||ye;In.version=Zn.version=ra.version="3.13.0";fp=1;lo()&&ns();hn.Power0;hn.Power1;hn.Power2;hn.Power3;hn.Power4;hn.Linear;hn.Quad;hn.Cubic;hn.Quart;hn.Quint;hn.Strong;hn.Elastic;hn.Back;hn.SteppedEase;hn.Bounce;hn.Sine;hn.Expo;hn.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ai,st,Nt,wo,wt,Mi,xo,Pf=function(){return typeof window<"u"},Xa={},vt=180/Math.PI,Vt=Math.PI/180,Rt=Math.atan2,Ri=1e8,jo=/([A-Z])/g,Af=/(left|right|width|margin|padding|x)/i,Mf=/[\s,\(]\S/,Fa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rr=function(n,a){return a.set(a.t,a.p,Math.round((a.s+a.c*n)*1e4)/1e4+a.u,a)},Rf=function(n,a){return a.set(a.t,a.p,n===1?a.e:Math.round((a.s+a.c*n)*1e4)/1e4+a.u,a)},Ef=function(n,a){return a.set(a.t,a.p,n?Math.round((a.s+a.c*n)*1e4)/1e4+a.u:a.b,a)},If=function(n,a){var r=a.s+a.c*n;a.set(a.t,a.p,~~(r+(r<0?-.5:.5))+a.u,a)},Kp=function(n,a){return a.set(a.t,a.p,n?a.e:a.b,a)},Zp=function(n,a){return a.set(a.t,a.p,n!==1?a.b:a.e,a)},Ff=function(n,a,r){return n.style[a]=r},zf=function(n,a,r){return n.style.setProperty(a,r)},Of=function(n,a,r){return n._gsap[a]=r},Df=function(n,a,r){return n._gsap.scaleX=n._gsap.scaleY=r},Lf=function(n,a,r,e,s){var o=n._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},Bf=function(n,a,r,e,s){var o=n._gsap;o[a]=r,o.renderTransform(s,o)},An="transform",ea=An+"Origin",Uf=function t(n,a){var r=this,e=this.target,s=e.style,o=e._gsap;if(n in Xa&&s){if(this.tfm=this.tfm||{},n!=="transform")n=Fa[n]||n,~n.indexOf(",")?n.split(",").forEach(function(i){return r.tfm[i]=Na(e,i)}):this.tfm[n]=o.x?o[n]:Na(e,n),n===ea&&(this.tfm.zOrigin=o.zOrigin);else return Fa.transform.split(",").forEach(function(i){return t.call(r,i,a)});if(this.props.indexOf(An)>=0)return;o.svg&&(this.svgo=e.getAttribute("data-svg-origin"),this.props.push(ea,a,"")),n=An}(s||a)&&this.props.push(n,a,s[n])},Jp=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Gf=function(){var n=this.props,a=this.target,r=a.style,e=a._gsap,s,o;for(s=0;s<n.length;s+=3)n[s+1]?n[s+1]===2?a[n[s]](n[s+2]):a[n[s]]=n[s+2]:n[s+2]?r[n[s]]=n[s+2]:r.removeProperty(n[s].substr(0,2)==="--"?n[s]:n[s].replace(jo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)e[o]=this.tfm[o];e.svg&&(e.renderTransform(),a.setAttribute("data-svg-origin",this.svgo||"")),s=xo(),(!s||!s.isStart)&&!r[An]&&(Jp(r),e.zOrigin&&r[ea]&&(r[ea]+=" "+e.zOrigin+"px",e.zOrigin=0,e.renderTransform()),e.uncache=1)}},Qp=function(n,a){var r={target:n,props:[],revert:Gf,save:Uf};return n._gsap||ra.core.getCache(n),a&&n.style&&n.nodeType&&a.split(",").forEach(function(e){return r.save(e)}),r},nd,Er=function(n,a){var r=st.createElementNS?st.createElementNS((a||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):st.createElement(n);return r&&r.style?r:st.createElement(n)},ka=function t(n,a,r){var e=getComputedStyle(n);return e[a]||e.getPropertyValue(a.replace(jo,"-$1").toLowerCase())||e.getPropertyValue(a)||!r&&t(n,as(a)||a,1)||""},Ei="O,Moz,ms,Ms,Webkit".split(","),as=function(n,a,r){var e=a||wt,s=e.style,o=5;if(n in s&&!r)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);o--&&!(Ei[o]+n in s););return o<0?null:(o===3?"ms":o>=0?Ei[o]:"")+n},Ir=function(){Pf()&&window.document&&(Ai=window,st=Ai.document,Nt=st.documentElement,wt=Er("div")||{style:{}},Er("div"),An=as(An),ea=An+"Origin",wt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nd=!!as("perspective"),xo=ra.core.reverting,wo=1)},Ii=function(n){var a=n.ownerSVGElement,r=Er("svg",a&&a.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),e=n.cloneNode(!0),s;e.style.display="block",r.appendChild(e),Nt.appendChild(r);try{s=e.getBBox()}catch{}return r.removeChild(e),Nt.removeChild(r),s},Fi=function(n,a){for(var r=a.length;r--;)if(n.hasAttribute(a[r]))return n.getAttribute(a[r])},ad=function(n){var a,r;try{a=n.getBBox()}catch{a=Ii(n),r=1}return a&&(a.width||a.height)||r||(a=Ii(n)),a&&!a.width&&!a.x&&!a.y?{x:+Fi(n,["x","cx","x1"])||0,y:+Fi(n,["y","cy","y1"])||0,width:0,height:0}:a},td=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&ad(n))},Tt=function(n,a){if(a){var r=n.style,e;a in Xa&&a!==ea&&(a=An),r.removeProperty?(e=a.substr(0,2),(e==="ms"||a.substr(0,6)==="webkit")&&(a="-"+a),r.removeProperty(e==="--"?a:a.replace(jo,"-$1").toLowerCase())):r.removeAttribute(a)}},et=function(n,a,r,e,s,o){var i=new sa(n._pt,a,r,0,1,o?Zp:Kp);return n._pt=i,i.b=e,i.e=s,n._props.push(r),i},zi={deg:1,rad:1,turn:1},Wf={grid:1,flex:1},ct=function t(n,a,r,e){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",i=wt.style,l=Af.test(a),c=n.tagName.toLowerCase()==="svg",p=(c?"client":"offset")+(l?"Width":"Height"),u=100,h=e==="px",d=e==="%",m,f,g,b;if(e===o||!s||zi[e]||zi[o])return s;if(o!=="px"&&!h&&(s=t(n,a,r,"px")),b=n.getCTM&&td(n),(d||o==="%")&&(Xa[a]||~a.indexOf("adius")))return m=b?n.getBBox()[l?"width":"height"]:n[p],Rn(d?s/m*u:s/100*m);if(i[l?"width":"height"]=u+(h?o:e),f=e!=="rem"&&~a.indexOf("adius")||e==="em"&&n.appendChild&&!c?n:n.parentNode,b&&(f=(n.ownerSVGElement||{}).parentNode),(!f||f===st||!f.appendChild)&&(f=st.body),g=f._gsap,g&&d&&g.width&&l&&g.time===pa.time&&!g.uncache)return Rn(s/g.width*u);if(d&&(a==="height"||a==="width")){var w=n.style[a];n.style[a]=u+e,m=n[p],w?n.style[a]=w:Tt(n,a)}else(d||o==="%")&&!Wf[ka(f,"display")]&&(i.position=ka(n,"position")),f===n&&(i.position="static"),f.appendChild(wt),m=wt[p],f.removeChild(wt),i.position="absolute";return l&&d&&(g=jt(f),g.time=pa.time,g.width=f[p]),Rn(h?m*s/u:m&&s?u/m*s:0)},Na=function(n,a,r,e){var s;return wo||Ir(),a in Fa&&a!=="transform"&&(a=Fa[a],~a.indexOf(",")&&(a=a.split(",")[0])),Xa[a]&&a!=="transform"?(s=Ls(n,e),s=a!=="transformOrigin"?s[a]:s.svg?s.origin:be(ka(n,ea))+" "+s.zOrigin+"px"):(s=n.style[a],(!s||s==="auto"||e||~(s+"").indexOf("calc("))&&(s=ke[a]&&ke[a](n,a,r)||ka(n,a)||kp(n,a)||(a==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?ct(n,a,s,r)+r:s},Hf=function(n,a,r,e){if(!r||r==="none"){var s=as(a,n,1),o=s&&ka(n,s,1);o&&o!==r?(a=s,r=o):a==="borderColor"&&(r=ka(n,"borderTopColor"))}var i=new sa(this._pt,n.style,a,0,1,qp),l=0,c=0,p,u,h,d,m,f,g,b,w,_,S,y;if(i.b=r,i.e=e,r+="",e+="",e.substring(0,6)==="var(--"&&(e=ka(n,e.substring(4,e.indexOf(")")))),e==="auto"&&(f=n.style[a],n.style[a]=e,e=ka(n,a)||e,f?n.style[a]=f:Tt(n,a)),p=[r,e],Dp(p),r=p[0],e=p[1],h=r.match(zt)||[],y=e.match(zt)||[],y.length){for(;u=zt.exec(e);)g=u[0],w=e.substring(l,u.index),m?m=(m+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(m=1),g!==(f=h[c++]||"")&&(d=parseFloat(f)||0,S=f.substr((d+"").length),g.charAt(1)==="="&&(g=Ht(d,g)+S),b=parseFloat(g),_=g.substr((b+"").length),l=zt.lastIndex-_.length,_||(_=_||ua.units[a]||S,l===e.length&&(e+=_,i.e+=_)),S!==_&&(d=ct(n,a,f,_)||0),i._pt={_next:i._pt,p:w||c===1?w:",",s:d,c:b-d,m:m&&m<4||a==="zIndex"?Math.round:0});i.c=l<e.length?e.substring(l,e.length):""}else i.r=a==="display"&&e==="none"?Zp:Kp;return up.test(e)&&(i.e=0),this._pt=i,i},Oi={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nf=function(n){var a=n.split(" "),r=a[0],e=a[1]||"50%";return(r==="top"||r==="bottom"||e==="left"||e==="right")&&(n=r,r=e,e=n),a[0]=Oi[r]||r,a[1]=Oi[e]||e,a.join(" ")},Vf=function(n,a){if(a.tween&&a.tween._time===a.tween._dur){var r=a.t,e=r.style,s=a.u,o=r._gsap,i,l,c;if(s==="all"||s===!0)e.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)i=s[c],Xa[i]&&(l=1,i=i==="transformOrigin"?ea:An),Tt(r,i);l&&(Tt(r,An),o&&(o.svg&&r.removeAttribute("transform"),e.scale=e.rotate=e.translate="none",Ls(r,1),o.uncache=1,Jp(e)))}},ke={clearProps:function(n,a,r,e,s){if(s.data!=="isFromStart"){var o=n._pt=new sa(n._pt,a,r,0,0,Vf);return o.u=e,o.pr=-10,o.tween=s,n._props.push(r),1}}},Ds=[1,0,0,1,0,0],sd={},ed=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Di=function(n){var a=ka(n,An);return ed(a)?Ds:a.substr(7).match(cp).map(Rn)},_o=function(n,a){var r=n._gsap||jt(n),e=n.style,s=Di(n),o,i,l,c;return r.svg&&n.getAttribute("transform")?(l=n.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ds:s):(s===Ds&&!n.offsetParent&&n!==Nt&&!r.svg&&(l=e.display,e.display="block",o=n.parentNode,(!o||!n.offsetParent&&!n.getBoundingClientRect().width)&&(c=1,i=n.nextElementSibling,Nt.appendChild(n)),s=Di(n),l?e.display=l:Tt(n,"display"),c&&(i?o.insertBefore(n,i):o?o.appendChild(n):Nt.removeChild(n))),a&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fr=function(n,a,r,e,s,o){var i=n._gsap,l=s||_o(n,!0),c=i.xOrigin||0,p=i.yOrigin||0,u=i.xOffset||0,h=i.yOffset||0,d=l[0],m=l[1],f=l[2],g=l[3],b=l[4],w=l[5],_=a.split(" "),S=parseFloat(_[0])||0,y=parseFloat(_[1])||0,x,v,k,j;r?l!==Ds&&(v=d*g-m*f)&&(k=S*(g/v)+y*(-f/v)+(f*w-g*b)/v,j=S*(-m/v)+y*(d/v)-(d*w-m*b)/v,S=k,y=j):(x=ad(n),S=x.x+(~_[0].indexOf("%")?S/100*x.width:S),y=x.y+(~(_[1]||_[0]).indexOf("%")?y/100*x.height:y)),e||e!==!1&&i.smooth?(b=S-c,w=y-p,i.xOffset=u+(b*d+w*f)-b,i.yOffset=h+(b*m+w*g)-w):i.xOffset=i.yOffset=0,i.xOrigin=S,i.yOrigin=y,i.smooth=!!e,i.origin=a,i.originIsAbsolute=!!r,n.style[ea]="0px 0px",o&&(et(o,i,"xOrigin",c,S),et(o,i,"yOrigin",p,y),et(o,i,"xOffset",u,i.xOffset),et(o,i,"yOffset",h,i.yOffset)),n.setAttribute("data-svg-origin",S+" "+y)},Ls=function(n,a){var r=n._gsap||new Gp(n);if("x"in r&&!a&&!r.uncache)return r;var e=n.style,s=r.scaleX<0,o="px",i="deg",l=getComputedStyle(n),c=ka(n,ea)||"0",p,u,h,d,m,f,g,b,w,_,S,y,x,v,k,j,C,P,T,E,I,z,U,D,V,nn,on,pn,sn,cn,dn,un;return p=u=h=f=g=b=w=_=S=0,d=m=1,r.svg=!!(n.getCTM&&td(n)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(e[An]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[An]!=="none"?l[An]:"")),e.scale=e.rotate=e.translate="none"),v=_o(n,r.svg),r.svg&&(r.uncache?(V=n.getBBox(),c=r.xOrigin-V.x+"px "+(r.yOrigin-V.y)+"px",D=""):D=!a&&n.getAttribute("data-svg-origin"),Fr(n,D||c,!!D||r.originIsAbsolute,r.smooth!==!1,v)),y=r.xOrigin||0,x=r.yOrigin||0,v!==Ds&&(P=v[0],T=v[1],E=v[2],I=v[3],p=z=v[4],u=U=v[5],v.length===6?(d=Math.sqrt(P*P+T*T),m=Math.sqrt(I*I+E*E),f=P||T?Rt(T,P)*vt:0,w=E||I?Rt(E,I)*vt+f:0,w&&(m*=Math.abs(Math.cos(w*Vt))),r.svg&&(p-=y-(y*P+x*E),u-=x-(y*T+x*I))):(un=v[6],cn=v[7],on=v[8],pn=v[9],sn=v[10],dn=v[11],p=v[12],u=v[13],h=v[14],k=Rt(un,sn),g=k*vt,k&&(j=Math.cos(-k),C=Math.sin(-k),D=z*j+on*C,V=U*j+pn*C,nn=un*j+sn*C,on=z*-C+on*j,pn=U*-C+pn*j,sn=un*-C+sn*j,dn=cn*-C+dn*j,z=D,U=V,un=nn),k=Rt(-E,sn),b=k*vt,k&&(j=Math.cos(-k),C=Math.sin(-k),D=P*j-on*C,V=T*j-pn*C,nn=E*j-sn*C,dn=I*C+dn*j,P=D,T=V,E=nn),k=Rt(T,P),f=k*vt,k&&(j=Math.cos(k),C=Math.sin(k),D=P*j+T*C,V=z*j+U*C,T=T*j-P*C,U=U*j-z*C,P=D,z=V),g&&Math.abs(g)+Math.abs(f)>359.9&&(g=f=0,b=180-b),d=Rn(Math.sqrt(P*P+T*T+E*E)),m=Rn(Math.sqrt(U*U+un*un)),k=Rt(z,U),w=Math.abs(k)>2e-4?k*vt:0,S=dn?1/(dn<0?-dn:dn):0),r.svg&&(D=n.getAttribute("transform"),r.forceCSS=n.setAttribute("transform","")||!ed(ka(n,An)),D&&n.setAttribute("transform",D))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(d*=-1,w+=f<=0?180:-180,f+=f<=0?180:-180):(m*=-1,w+=w<=0?180:-180)),a=a||r.uncache,r.x=p-((r.xPercent=p&&(!a&&r.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-p)?-50:0)))?n.offsetWidth*r.xPercent/100:0)+o,r.y=u-((r.yPercent=u&&(!a&&r.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-u)?-50:0)))?n.offsetHeight*r.yPercent/100:0)+o,r.z=h+o,r.scaleX=Rn(d),r.scaleY=Rn(m),r.rotation=Rn(f)+i,r.rotationX=Rn(g)+i,r.rotationY=Rn(b)+i,r.skewX=w+i,r.skewY=_+i,r.transformPerspective=S+o,(r.zOrigin=parseFloat(c.split(" ")[2])||!a&&r.zOrigin||0)&&(e[ea]=be(c)),r.xOffset=r.yOffset=0,r.force3D=ua.force3D,r.renderTransform=r.svg?qf:nd?rd:Yf,r.uncache=0,r},be=function(n){return(n=n.split(" "))[0]+" "+n[1]},er=function(n,a,r){var e=Nn(a);return Rn(parseFloat(a)+parseFloat(ct(n,"x",r+"px",e)))+e},Yf=function(n,a){a.z="0px",a.rotationY=a.rotationX="0deg",a.force3D=0,rd(n,a)},gt="0deg",ls="0px",yt=") ",rd=function(n,a){var r=a||this,e=r.xPercent,s=r.yPercent,o=r.x,i=r.y,l=r.z,c=r.rotation,p=r.rotationY,u=r.rotationX,h=r.skewX,d=r.skewY,m=r.scaleX,f=r.scaleY,g=r.transformPerspective,b=r.force3D,w=r.target,_=r.zOrigin,S="",y=b==="auto"&&n&&n!==1||b===!0;if(_&&(u!==gt||p!==gt)){var x=parseFloat(p)*Vt,v=Math.sin(x),k=Math.cos(x),j;x=parseFloat(u)*Vt,j=Math.cos(x),o=er(w,o,v*j*-_),i=er(w,i,-Math.sin(x)*-_),l=er(w,l,k*j*-_+_)}g!==ls&&(S+="perspective("+g+yt),(e||s)&&(S+="translate("+e+"%, "+s+"%) "),(y||o!==ls||i!==ls||l!==ls)&&(S+=l!==ls||y?"translate3d("+o+", "+i+", "+l+") ":"translate("+o+", "+i+yt),c!==gt&&(S+="rotate("+c+yt),p!==gt&&(S+="rotateY("+p+yt),u!==gt&&(S+="rotateX("+u+yt),(h!==gt||d!==gt)&&(S+="skew("+h+", "+d+yt),(m!==1||f!==1)&&(S+="scale("+m+", "+f+yt),w.style[An]=S||"translate(0, 0)"},qf=function(n,a){var r=a||this,e=r.xPercent,s=r.yPercent,o=r.x,i=r.y,l=r.rotation,c=r.skewX,p=r.skewY,u=r.scaleX,h=r.scaleY,d=r.target,m=r.xOrigin,f=r.yOrigin,g=r.xOffset,b=r.yOffset,w=r.forceCSS,_=parseFloat(o),S=parseFloat(i),y,x,v,k,j;l=parseFloat(l),c=parseFloat(c),p=parseFloat(p),p&&(p=parseFloat(p),c+=p,l+=p),l||c?(l*=Vt,c*=Vt,y=Math.cos(l)*u,x=Math.sin(l)*u,v=Math.sin(l-c)*-h,k=Math.cos(l-c)*h,c&&(p*=Vt,j=Math.tan(c-p),j=Math.sqrt(1+j*j),v*=j,k*=j,p&&(j=Math.tan(p),j=Math.sqrt(1+j*j),y*=j,x*=j)),y=Rn(y),x=Rn(x),v=Rn(v),k=Rn(k)):(y=u,k=h,x=v=0),(_&&!~(o+"").indexOf("px")||S&&!~(i+"").indexOf("px"))&&(_=ct(d,"x",o,"px"),S=ct(d,"y",i,"px")),(m||f||g||b)&&(_=Rn(_+m-(m*y+f*v)+g),S=Rn(S+f-(m*x+f*k)+b)),(e||s)&&(j=d.getBBox(),_=Rn(_+e/100*j.width),S=Rn(S+s/100*j.height)),j="matrix("+y+","+x+","+v+","+k+","+_+","+S+")",d.setAttribute("transform",j),w&&(d.style[An]=j)},$f=function(n,a,r,e,s){var o=360,i=Ln(s),l=parseFloat(s)*(i&&~s.indexOf("rad")?vt:1),c=l-e,p=e+c+"deg",u,h;return i&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*Ri)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Ri)%o-~~(c/o)*o)),n._pt=h=new sa(n._pt,a,r,e,c,Rf),h.e=p,h.u="deg",n._props.push(r),h},Li=function(n,a){for(var r in a)n[r]=a[r];return n},Xf=function(n,a,r){var e=Li({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,i,l,c,p,u,h,d,m;e.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),o[An]=a,i=Ls(r,1),Tt(r,An),r.setAttribute("transform",c)):(c=getComputedStyle(r)[An],o[An]=a,i=Ls(r,1),o[An]=c);for(l in Xa)c=e[l],p=i[l],c!==p&&s.indexOf(l)<0&&(d=Nn(c),m=Nn(p),u=d!==m?ct(r,l,c,m):parseFloat(c),h=parseFloat(p),n._pt=new sa(n._pt,i,l,u,h-u,Rr),n._pt.u=m||0,n._props.push(l));Li(i,e)};ta("padding,margin,Width,Radius",function(t,n){var a="Top",r="Right",e="Bottom",s="Left",o=(n<3?[a,r,e,s]:[a+s,a+r,e+r,e+s]).map(function(i){return n<2?t+i:"border"+i+t});ke[n>1?"border"+t:t]=function(i,l,c,p,u){var h,d;if(arguments.length<4)return h=o.map(function(m){return Na(i,m,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(p+"").split(" "),d={},o.forEach(function(m,f){return d[m]=h[f]=h[f]||h[(f-1)/2|0]}),i.init(l,d,u)}});var od={name:"css",register:Ir,targetTest:function(n){return n.style&&n.nodeType},init:function(n,a,r,e,s){var o=this._props,i=n.style,l=r.vars.startAt,c,p,u,h,d,m,f,g,b,w,_,S,y,x,v,k;wo||Ir(),this.styles=this.styles||Qp(n),k=this.styles.props,this.tween=r;for(f in a)if(f!=="autoRound"&&(p=a[f],!(la[f]&&Wp(f,a,r,e,n,s)))){if(d=typeof p,m=ke[f],d==="function"&&(p=p.call(r,e,n,s),d=typeof p),d==="string"&&~p.indexOf("random(")&&(p=Fs(p)),m)m(this,n,f,p,r)&&(v=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(n).getPropertyValue(f)+"").trim(),p+="",it.lastIndex=0,it.test(c)||(g=Nn(c),b=Nn(p)),b?g!==b&&(c=ct(n,f,c,b)+b):g&&(p+=g),this.add(i,"setProperty",c,p,e,s,0,0,f),o.push(f),k.push(f,0,i[f]);else if(d!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(r,e,n,s):l[f],Ln(c)&&~c.indexOf("random(")&&(c=Fs(c)),Nn(c+"")||c==="auto"||(c+=ua.units[f]||Nn(Na(n,f))||""),(c+"").charAt(1)==="="&&(c=Na(n,f))):c=Na(n,f),h=parseFloat(c),w=d==="string"&&p.charAt(1)==="="&&p.substr(0,2),w&&(p=p.substr(2)),u=parseFloat(p),f in Fa&&(f==="autoAlpha"&&(h===1&&Na(n,"visibility")==="hidden"&&u&&(h=0),k.push("visibility",0,i.visibility),et(this,i,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),f!=="scale"&&f!=="transform"&&(f=Fa[f],~f.indexOf(",")&&(f=f.split(",")[0]))),_=f in Xa,_){if(this.styles.save(f),d==="string"&&p.substring(0,6)==="var(--"&&(p=ka(n,p.substring(4,p.indexOf(")"))),u=parseFloat(p)),S||(y=n._gsap,y.renderTransform&&!a.parseTransform||Ls(n,a.parseTransform),x=a.smoothOrigin!==!1&&y.smooth,S=this._pt=new sa(this._pt,i,An,0,1,y.renderTransform,y,0,-1),S.dep=1),f==="scale")this._pt=new sa(this._pt,y,"scaleY",y.scaleY,(w?Ht(y.scaleY,w+u):u)-y.scaleY||0,Rr),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){k.push(ea,0,i[ea]),p=Nf(p),y.svg?Fr(n,p,0,x,0,this):(b=parseFloat(p.split(" ")[2])||0,b!==y.zOrigin&&et(this,y,"zOrigin",y.zOrigin,b),et(this,i,f,be(c),be(p)));continue}else if(f==="svgOrigin"){Fr(n,p,1,x,0,this);continue}else if(f in sd){$f(this,y,f,h,w?Ht(h,w+p):p);continue}else if(f==="smoothOrigin"){et(this,y,"smooth",y.smooth,p);continue}else if(f==="force3D"){y[f]=p;continue}else if(f==="transform"){Xf(this,p,n);continue}}else f in i||(f=as(f)||f);if(_||(u||u===0)&&(h||h===0)&&!Mf.test(p)&&f in i)g=(c+"").substr((h+"").length),u||(u=0),b=Nn(p)||(f in ua.units?ua.units[f]:g),g!==b&&(h=ct(n,f,c,b)),this._pt=new sa(this._pt,_?y:i,f,h,(w?Ht(h,w+u):u)-h,!_&&(b==="px"||f==="zIndex")&&a.autoRound!==!1?If:Rr),this._pt.u=b||0,g!==b&&b!=="%"&&(this._pt.b=c,this._pt.r=Ef);else if(f in i)Hf.call(this,n,f,c,w?w+p:p);else if(f in n)this.add(n,f,c||n[f],w?w+p:p,e,s);else if(f!=="parseTransform"){co(f,p);continue}_||(f in i?k.push(f,0,i[f]):typeof n[f]=="function"?k.push(f,2,n[f]()):k.push(f,1,c||n[f])),o.push(f)}}v&&$p(this)},render:function(n,a){if(a.tween._time||!xo())for(var r=a._pt;r;)r.r(n,r.d),r=r._next;else a.styles.revert()},get:Na,aliases:Fa,getSetter:function(n,a,r){var e=Fa[a];return e&&e.indexOf(",")<0&&(a=e),a in Xa&&a!==ea&&(n._gsap.x||Na(n,"x"))?r&&Mi===r?a==="scale"?Df:Of:(Mi=r||{})&&(a==="scale"?Lf:Bf):n.style&&!io(n.style[a])?Ff:~a.indexOf("-")?zf:bo(n,a)},core:{_removeProperty:Tt,_getMatrix:_o}};ra.utils.checkPrefix=as;ra.core.getStyleSaver=Qp;(function(t,n,a,r){var e=ta(t+","+n+","+a,function(s){Xa[s]=1});ta(n,function(s){ua.units[s]="deg",sd[s]=1}),Fa[e[13]]=t+","+n,ta(r,function(s){var o=s.split(":");Fa[o[1]]=e[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ta("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ua.units[t]="px"});ra.registerPlugin(od);var zr=ra.registerPlugin(od)||ra;zr.core.Tween;const Kf=`<!DOCTYPE html>\r
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
</html>`,Zf=`<!DOCTYPE html>\r
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
</html>`,tm=`<!DOCTYPE html>\r
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
</html>`,sm=`<!DOCTYPE html>\r
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
</html>`,lm=`<!DOCTYPE html>\r
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
</html>`,cm=`<!DOCTYPE html>\r
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
</html>`,um=`<!DOCTYPE html>\r
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
</html>`,hm=`<!DOCTYPE html>\r
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
</html>`,fm=`<!DOCTYPE html>\r
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
</html>`,mm=`<!DOCTYPE html>\r
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
</html>`,gm=`<!DOCTYPE html>\r
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
</html>`,ss=(t,n)=>{const a=t.__vccOpts||t;for(const[r,e]of n)a[r]=e;return a},ym={class:"wrap"},km={class:"hud"},bm={class:"pill"},vm={class:"pill"},wm={class:"pill lives"},xm={class:"stage"},jm={key:0,class:"overlay"},_m={class:"card"},Sm={key:0},Cm={key:1},Tm={key:2},Pm={key:3},Am={__name:"RainCatcher",setup(t){const n=wn(null),a=wn(null),r={gravity:.12,spawnEveryMs:550,maxFallSpeed:6.5,bucketSpeed:6,bucketWidth:100,bucketHeight:18,startLives:3,levelUpEvery:8,levelSpeedBoost:.08},e=wn(!1),s=wn(0),o=wn(1),i=wn(r.startLives),l=wn(0),c=wn(0),p=Yt([]),u=Yt(new Set);let h;function d(){return{x:Math.random()*(n.value.width-12)+6,y:-10,vy:Math.random()*1+1.2,r:Math.random()*3+3}}function m(v,k,j,C,P,T,E){const I=Math.max(C,Math.min(v,C+T)),z=Math.max(P,Math.min(k,P+E)),U=v-I,D=k-z;return U*U+D*D<=j*j}function f(v,k){v.save(),v.globalAlpha=.15,v.strokeStyle="#9bdbff",v.lineWidth=1,v.setLineDash([10,14]),v.beginPath();for(let j=-40;j<k.width+40;j+=28)v.moveTo(j,-20),v.lineTo(j+60,k.height+40);v.stroke(),v.restore()}function g(v){const{x:k,y:j,w:C,h:P}=h;v.fillStyle="rgba(255, 209, 102, 0.95)",v.strokeStyle="rgba(255,255,255,0.3)",v.lineWidth=2,v.beginPath(),v.moveTo(k+8,j),v.lineTo(k+C-8,j),v.quadraticCurveTo(k+C,j,k+C,j+8),v.lineTo(k+C,j+P),v.lineTo(k,j+P),v.lineTo(k,j+8),v.quadraticCurveTo(k,j,k+8,j),v.closePath(),v.fill(),v.stroke()}function b(v,k){v.save();const j=v.createRadialGradient(k.x-1,k.y-2,1,k.x,k.y,k.r+2);j.addColorStop(0,"rgba(220, 245, 255, 0.95)"),j.addColorStop(1,"rgba(108, 192, 255, 0.55)"),v.fillStyle=j,v.beginPath(),v.arc(k.x,k.y,k.r,Math.PI,0),v.lineTo(k.x,k.y-k.r*1.6),v.closePath(),v.fill(),v.restore()}function w(){const v=n.value;u.has("ArrowLeft")&&h.move(-6),u.has("ArrowRight")&&h.move(r.bucketSpeed),performance.now()-l.value>r.spawnEveryMs/Math.max(1,1+(o.value-1)*.1)&&(p.push(d()),l.value=performance.now());for(let k=p.length-1;k>=0;k--){const j=p[k];if(j.vy=Math.min(j.vy+r.gravity+r.levelSpeedBoost*(o.value-1),r.maxFallSpeed+(o.value-1)*.6),j.y+=j.vy,m(j.x,j.y,j.r,h.x,h.y,h.w,h.h)){p.splice(k,1),s.value++,s.value%r.levelUpEvery===0&&o.value++;continue}if(j.y-j.r>v.height&&(p.splice(k,1),i.value--,i.value<=0)){x();return}}}function _(){const v=n.value,k=a.value;k.clearRect(0,0,v.width,v.height),f(k,v);for(const j of p)b(k,j);g(k)}function S(v){e.value&&(w(),_(),requestAnimationFrame(S))}function y(){s.value=0,o.value=1,i.value=r.startLives,p.splice(0,p.length),c.value=performance.now(),l.value=0,e.value=!0,requestAnimationFrame(S)}function x(){e.value=!1}return Ba(()=>{a.value=n.value.getContext("2d"),h={x:n.value.width/2-r.bucketWidth/2,y:n.value.height-40,w:r.bucketWidth,h:r.bucketHeight,move(v){this.x=Math.max(0,Math.min(n.value.width-this.w,this.x+v))}},n.value.addEventListener("mousemove",v=>{const k=n.value.getBoundingClientRect(),j=n.value.width/k.width;h.x=(v.clientX-k.left)*j-h.w/2,h.x=Math.max(0,Math.min(n.value.width-h.w,h.x))}),window.addEventListener("keydown",v=>{v.code==="Space"&&(e.value||y()),u.add(v.code)}),window.addEventListener("keyup",v=>u.delete(v.code))}),(v,k)=>(kn(),xn("div",ym,[k[5]||(k[5]=H("header",null,[H("h1",null,"🌧️ Rain Catcher — Vue JS"),H("div",{class:"controls"},[Jn("Move: "),H("strong",null,"Mouse"),Jn(" or "),H("strong",null,"◀ ▶"),Jn(" • Start/Restart: "),H("strong",null,"Space")])],-1)),H("div",km,[H("div",bm,[k[0]||(k[0]=Jn("Score: ")),H("span",null,Fn(s.value),1)]),H("div",vm,[k[1]||(k[1]=Jn("Level: ")),H("span",null,Fn(o.value),1)]),H("div",wm,[k[2]||(k[2]=Jn("Lives: ")),H("span",null,Fn(i.value),1)])]),H("div",xm,[H("canvas",{ref_key:"canvas",ref:n,width:"900",height:"500","aria-label":"Rain Catcher Game"},null,512),e.value?ce("",!0):(kn(),xn("div",jm,[H("div",_m,[i.value<=0?(kn(),xn("h2",Sm,"Game Over")):(kn(),xn("h2",Cm,"Catch the Rain!")),i.value<=0?(kn(),xn("p",Tm,[k[3]||(k[3]=Jn(" You scored ")),H("strong",null,Fn(s.value),1),Jn(" point"+Fn(s.value===1?"":"s")+" at level ",1),H("strong",null,Fn(o.value),1),k[4]||(k[4]=Jn(". "))])):(kn(),xn("p",Pm,"Slide the bucket to catch falling drops. Miss three and it's game over.")),H("button",{class:"btn",onClick:y},Fn(i.value<=0?"Play again":"Start"),1)])]))]),k[6]||(k[6]=H("footer",null,[Jn(" Tip: Works inside Vue. Tweak values in "),H("code",null,"SETTINGS"),Jn(" to change difficulty. ")],-1))]))}},Mm=ss(Am,[["__scopeId","data-v-beec5c41"]]),Rm={class:"flex flex-col items-center"},Em={class:"mt-2 text-lg font-semibold"},Im=3,Fm=3,ps=30,ds=20,zm={__name:"JeepGame",setup(t){const n=wn(null);let a,r=new Image;r.src="https://i.ibb.co/kc2nb9L/jeep-icon.png";let e={x:300,y:200,width:50,height:30,speed:4},s={},o=[],i=[];const l=wn(0);function c(){a.fillStyle="#EDC9AF",a.fillRect(0,0,600,400)}function p(){a.drawImage(r,e.x,e.y,e.width,e.height)}function u(){a.fillStyle="#654321",o.forEach(b=>{a.beginPath(),a.arc(b.x,b.y,ps/2,0,Math.PI*2),a.fill()})}function h(){a.fillStyle="blue",i.forEach(b=>{a.beginPath(),a.arc(b.x,b.y,ds/2,0,Math.PI*2),a.fill()})}function d(){s.ArrowUp&&(e.y-=e.speed),s.ArrowDown&&(e.y+=e.speed),s.ArrowLeft&&(e.x-=e.speed),s.ArrowRight&&(e.x+=e.speed),e.x=Math.max(0,Math.min(600-e.width,e.x)),e.y=Math.max(0,Math.min(400-e.height,e.y))}function m(){o.forEach((b,w)=>{e.x<b.x+ps&&e.x+e.width>b.x&&e.y<b.y+ps&&e.y+e.height>b.y&&(l.value=Math.max(0,l.value-5),o.splice(w,1))}),i.forEach((b,w)=>{e.x<b.x+ds&&e.x+e.width>b.x&&e.y<b.y+ds&&e.y+e.height>b.y&&(l.value+=10,i.splice(w,1))})}function f(){o.length<Im&&o.push({x:Math.random()*(600-ps),y:Math.random()*(400-ps)}),i.length<Fm&&i.push({x:Math.random()*(600-ds),y:Math.random()*(400-ds)})}function g(){c(),d(),p(),u(),h(),m(),f(),requestAnimationFrame(g)}return Ba(()=>{a=n.value.getContext("2d"),window.addEventListener("keydown",b=>s[b.key]=!0),window.addEventListener("keyup",b=>s[b.key]=!1),g()}),ts(()=>{window.removeEventListener("keydown",b=>s[b.key]=!0),window.removeEventListener("keyup",b=>s[b.key]=!1)}),(b,w)=>(kn(),xn("div",Rm,[w[0]||(w[0]=H("h2",{class:"text-xl font-bold mb-2"},"🏜️ Jeep in the Sand",-1)),H("canvas",{ref_key:"canvas",ref:n,width:"600",height:"400",class:"border rounded shadow"},null,512),w[1]||(w[1]=H("p",{class:"mt-2 text-sm text-gray-600"}," Use Arrow Keys ⬅️➡️⬆️⬇️ to move the Jeep. Collect 💧 to gain points, avoid 🪨 or lose points! ",-1)),H("p",Em,"Score: "+Fn(l.value),1)]))}},Om=ss(zm,[["__scopeId","data-v-297e4326"]]),Dm={class:"flex flex-col items-center"},Lm={class:"mt-2 text-lg font-semibold"},Bm=20,Um=25,Gm={__name:"BeachCatch",setup(t){const n=wn(null);let a,r={x:250,y:360,width:80,height:30,speed:6},e={},s=[],o=[];const i=wn(0);function l(){a.fillStyle="#87CEEB",a.fillRect(0,0,600,300),a.fillStyle="#F4E1A1",a.fillRect(0,300,600,100)}function c(){a.fillStyle="#8B4513",a.fillRect(r.x,r.y,r.width,r.height)}function p(){a.fillStyle="pink",s.forEach(b=>{a.beginPath(),a.arc(b.x,b.y,Bm/2,0,Math.PI*2),a.fill()})}function u(){a.fillStyle="red",o.forEach(b=>{a.beginPath(),a.arc(b.x,b.y,Um/2,0,Math.PI*2),a.fill()})}function h(){e.ArrowLeft&&(r.x-=r.speed),e.ArrowRight&&(r.x+=r.speed),r.x=Math.max(0,Math.min(600-r.width,r.x))}function d(){s.forEach(b=>b.y+=2),o.forEach(b=>b.y+=2),s=s.filter(b=>b.y<400),o=o.filter(b=>b.y<400)}function m(){s.forEach((b,w)=>{b.x>r.x&&b.x<r.x+r.width&&b.y>r.y&&b.y<r.y+r.height&&(i.value+=10,s.splice(w,1))}),o.forEach((b,w)=>{b.x>r.x&&b.x<r.x+r.width&&b.y>r.y&&b.y<r.y+r.height&&(i.value=Math.max(0,i.value-5),o.splice(w,1))})}function f(){Math.random()<.03&&s.push({x:Math.random()*580+10,y:0}),Math.random()<.01&&o.push({x:Math.random()*580+10,y:0})}function g(){l(),h(),d(),c(),p(),u(),m(),f(),requestAnimationFrame(g)}return Ba(()=>{a=n.value.getContext("2d"),window.addEventListener("keydown",b=>e[b.key]=!0),window.addEventListener("keyup",b=>e[b.key]=!1),g()}),ts(()=>{window.removeEventListener("keydown",b=>e[b.key]=!0),window.removeEventListener("keyup",b=>e[b.key]=!1)}),(b,w)=>(kn(),xn("div",Dm,[w[0]||(w[0]=H("h2",{class:"text-xl font-bold mb-2"},"🏖️ Beach Bucket Game",-1)),H("canvas",{ref_key:"canvas",ref:n,width:"600",height:"400",class:"border rounded shadow"},null,512),H("p",Lm,"Score: "+Fn(i.value),1),w[1]||(w[1]=H("p",{class:"mt-1 text-sm text-gray-600"},"Move bucket with ⬅️ ➡️ keys to catch 🐚 and avoid 🦀",-1))]))}},Wm=ss(Gm,[["__scopeId","data-v-a779c3b8"]]),Hm={class:"flex flex-col items-center"},Nm={class:"mt-2 text-lg font-semibold"},Vm={class:"mt-1 text-sm text-gray-600"},Ym={key:0},kt=25,Et=40,qm={__name:"SwimmingGame",setup(t){const n=wn(null);let a,r=null;const e=wn(0),s=wn(!1),o={},i={x:260,y:340,width:60,height:40,speed:6};let l=[],c=[],p={swimmer:null,medal:null,shark:null};function u(k){return new Promise((j,C)=>{const P=new Image;P.onload=()=>j(P),P.onerror=()=>C(new Error(`Failed to load ${k}`)),P.src=k})}const h="/".replace(/\/+$/,"")+"/";function d(){a.fillStyle="#1E90FF",a.fillRect(0,0,600,400),a.fillStyle="#ffffff";for(let k=0;k<5;k++)a.fillRect(k*120+55,0,5,400)}function m(){s.value&&p.swimmer?a.drawImage(p.swimmer,i.x,i.y,i.width,i.height):(a.fillStyle="#003366",a.fillRect(i.x,i.y,i.width,i.height))}function f(){s.value&&p.medal?l.forEach(k=>a.drawImage(p.medal,k.x,k.y,kt,kt)):(a.fillStyle="gold",l.forEach(k=>{a.beginPath(),a.arc(k.x+kt/2,k.y+kt/2,kt/2,0,Math.PI*2),a.fill()}))}function g(){s.value&&p.shark?c.forEach(k=>a.drawImage(p.shark,k.x,k.y,Et,Et)):(a.fillStyle="black",c.forEach(k=>{a.fillRect(k.x,k.y,Et,Et)}))}function b(){o.ArrowLeft&&(i.x-=i.speed),o.ArrowRight&&(i.x+=i.speed),i.x=Math.max(0,Math.min(600-i.width,i.x))}function w(){l.forEach(k=>k.y+=2),c.forEach(k=>k.y+=3),l=l.filter(k=>k.y<400),c=c.filter(k=>k.y<400)}function _(){for(let k=l.length-1;k>=0;k--){const j=l[k];j.x<i.x+i.width&&j.x+kt>i.x&&j.y<i.y+i.height&&j.y+kt>i.y&&(e.value+=10,l.splice(k,1))}for(let k=c.length-1;k>=0;k--){const j=c[k];j.x<i.x+i.width&&j.x+Et>i.x&&j.y<i.y+i.height&&j.y+Et>i.y&&(e.value=Math.max(0,e.value-15),c.splice(k,1))}}function S(){Math.random()<.03&&l.push({x:Math.random()*560,y:0}),Math.random()<.015&&c.push({x:Math.random()*560,y:0})}function y(){d(),b(),w(),m(),f(),g(),_(),S(),r=requestAnimationFrame(y)}function x(k){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(k.key)&&k.preventDefault(),o[k.key]=!0}function v(k){o[k.key]=!1}return Ba(async()=>{a=n.value.getContext("2d"),window.addEventListener("keydown",x,{passive:!1}),window.addEventListener("keyup",v);try{n.value.focus()}catch{}try{const[k,j,C]=await Promise.all([u(`${h}swimmer.png`),u(`${h}medal.png`),u(`${h}shark.png`)]);p={swimmer:k,medal:j,shark:C},s.value=!0}catch(k){console.warn("Image load failed; using shape fallbacks:",(k==null?void 0:k.message)||k),s.value=!1}r=requestAnimationFrame(y)}),ts(()=>{window.removeEventListener("keydown",x),window.removeEventListener("keyup",v),r&&cancelAnimationFrame(r)}),(k,j)=>(kn(),xn("div",Hm,[j[1]||(j[1]=H("h2",{class:"text-xl font-bold mb-2"},"🏊 Swimming Game",-1)),H("canvas",{ref_key:"canvas",ref:n,width:"600",height:"400",class:"border rounded shadow",tabindex:"0","aria-label":"Swimming game"},null,512),H("p",Nm,"Score: "+Fn(e.value),1),H("p",Vm,[j[0]||(j[0]=Jn(" Use ⬅️ ➡️ keys to move swimmer ")),s.value?ce("",!0):(kn(),xn("span",Ym," • Loading images…"))])]))}},$m=ss(qm,[["__scopeId","data-v-d52d7185"]]),Xm={class:"game-container"},Km={__name:"SeaAdventure",setup(t){const n=wn(null),a=wn(0),r={x:280,y:180,size:20,speed:5,dx:0,dy:0},e=[];function s(u){u.fillStyle="blue",u.beginPath(),u.arc(r.x,r.y,r.size,0,Math.PI*2),u.fill()}function o(u){u.fillStyle="red",e.forEach(h=>{u.fillRect(h.x,h.y,h.size,h.size)})}function i(){const u=n.value.getContext("2d");u.clearRect(0,0,n.value.width,n.value.height),r.x+=r.dx,r.y+=r.dy,r.x<r.size&&(r.x=r.size),r.y<r.size&&(r.y=r.size),r.x>n.value.width-r.size&&(r.x=n.value.width-r.size),r.y>n.value.height-r.size&&(r.y=n.value.height-r.size),s(u),o(u),e.forEach(h=>{r.x<h.x+h.size&&r.x+r.size>h.x&&r.y<h.y+h.size&&r.y+r.size>h.y&&(a.value-=1,h.x=-100)}),requestAnimationFrame(i)}function l(){e.push({x:Math.random()*580,y:Math.random()*380,size:20})}function c(u){u.key==="ArrowRight"&&(r.dx=r.speed),u.key==="ArrowLeft"&&(r.dx=-5),u.key==="ArrowUp"&&(r.dy=-5),u.key==="ArrowDown"&&(r.dy=r.speed)}function p(u){(u.key==="ArrowRight"||u.key==="ArrowLeft"||u.key==="ArrowUp"||u.key==="ArrowDown")&&(r.dx=0,r.dy=0)}return Ba(()=>{window.addEventListener("keydown",c),window.addEventListener("keyup",p),setInterval(l,2e3),i()}),Pe(()=>{window.removeEventListener("keydown",c),window.removeEventListener("keyup",p)}),(u,h)=>(kn(),xn("div",Xm,[h[0]||(h[0]=H("h2",null,"🌊 Sea Adventure Game",-1)),H("canvas",{ref_key:"canvas",ref:n,width:"600",height:"400"},null,512),h[1]||(h[1]=H("p",null,"Use arrow keys ⬅️➡️⬆️⬇️ to swim and avoid obstacles!",-1)),H("p",null,"Score: "+Fn(a.value),1)]))}},Zm=ss(Km,[["__scopeId","data-v-c3f75000"]]),Bs=[{id:1,title:"Recipe Rush: Online Grocery Ordering Game",slug:"recipe-rush",description:`
                It's a fun text-based simulation game teaching decision-making, budgeting, and basic input/output in C++ — great for beginners.`,image:new URL("/images/grocery-game-img.jpeg",import.meta.url).href,date:"Posted on June 15, 2025 – 10:00 AM",content:Kf,customReadMore:[{title:"Fun Meets Function: Grocery Games, Tips, and Surprising Facts",excerpt:"Scenario 1: Last-Minute Dinner Party You're hosting guests tonight and plan to cook Spaghetti Marinara. You have 20 minutes to order groceries before the cutoff for...",image:new URL("/images/grocery-game-fun.jpeg",import.meta.url).href,slug:"fun-meets-function",content:Zf},{title:"Let's add a Graphical User Interface (GUI) to your Recipe Rush: Online Grocery Ordering Game",excerpt:"With SFML, your game will look like: A window showing recipe selection. Grocery items displayed with names & prices as buttons. A side panel with your current cart and budget. Clickable buttons to add",image:new URL("/images/grocery-game-gui.jpeg",import.meta.url).href,slug:"adding-gui-to-recipe-rush",content:Jf}]},{id:2,title:"Highway Driver: A Complete SFML Racing Game",slug:"highway-driver",description:"Highway Driver, you control a car speeding down a highway while avoiding incoming traffic. The longer you survive, the higher your score.",image:new URL("/images/highway-driver.jpeg",import.meta.url).href,date:"Posted on June 16, 2025 – 3:30 PM",content:Qf,customReadMore:[{title:"Speed, Skill & Code: The Making of a Highway Driver Game",excerpt:`Ever wondered how the simple thrill of dodging traffic in a game mirrors real-life driving? In this deep dive, we explore Highway Driver—a deceptively simple game that captures the chaos, strategy, and reflexes of the open road. From real-world driving psychology to game design secrets, we’ll break down:
        ✅ How highway survival games train your brain (faster reactions, better focus)
        ✅ Clever game mechanics inspired by actual driving challenges (lane-switching, speed fatigue, tunnel vision)
      ✅ Behind-the-scenes coding & design choices (why obstacles spawn just right)
      ✅ Fun upgrades to turn a basic prototype into a full-fledged game (weather, AI traffic, boss chases!)

      Whether you're a gamer, developer, or just love the open road, this post shifts gears between entertainment, education, and pure coding adrenaline. Ready to hit the highway? Let’s go! 🚗💨`,slug:"highway-driver-making",content:nm,image:new URL("/images/highway-driver-addition.jpeg",import.meta.url).href},{title:"Adding graphics to your game",excerpt:"Your Highway Driver game already has a basic graphical UI using SFML rectangles and text, but now let’s talk about enhancing the GUI (Graphical User Interface) with visual polish, usability, and menus — just like a complete arcade-style game.",slug:"highway-driver-gui",image:new URL("/images/highway-driver-gui.jpeg",import.meta.url).href,content:am}]},{id:3,title:"Car Parking Master",slug:"car-parking-master",description:"you control a car in a crowded parking lot. Your goal is to navigate through obstacles and park in the designated spot without collisions.",image:new URL("/images/car-parking.jpeg",import.meta.url).href,content:tm},{id:4,title:"Farm Frenzy: Harvest Grow",slug:"farm-frenzy",description:`👨‍🌾 You're a farmer who must:
    🌱 Plant crops
  🐄 Feed animals
  🧺 Harvest and sell products
  🌾 Expand your farm
  💡 All while managing time, money, and resources wisely.`,image:new URL("/images/farm-frenzy.jpeg",import.meta.url).href,date:"Posted on June 17, 2025 – 8:00 AM",content:sm,customReadMore:[{title:"Building Farm Frenzy: A GUI-Based Farm Game in C++ with SFML",slug:"farm-frenzy-with-gui",excerpt:`What if you could bring the joy of farming to your screen using just C++ and a bit of graphics? Welcome to
        Farm Frenzy, a simple but engaging GUI-based farm simulation game developed in C++ using
            the SFML (Simple and Fast Multimedia Library)`,image:new URL("/images/farm-frenzy-gui.jpeg",import.meta.url).href,content:em}]},{title:"🥗🎮 Buffet Rush – A C++ Game Based on a Buffet Experience",slug:"buffet-rush",description:'"Buffet Rush" is a fun, text-based or SFML-powered graphical C++ game where the player acts as a customer in a buffet. The goal is to build the perfect meal tray under time and nutritional constraints—while also managing cost, calories, and customer satisfaction.',image:new URL("/images/buffet.jpeg",import.meta.url).href,content:rm,customReadMore:[{title:"🥗 Buffet Rush: A Tasty Game in C++ with GUI (SFML)",slug:"buffet-rush-with-gui",description:"Have you ever imagined what a buffet would look like if it turned into a fast-paced game? Welcome to Buffet Rush, a light-hearted yet educational C++ game powered by SFML, where you dodge unhealthy snacks and rack up your nutrition score!",image:new URL("/images/buffet-gui.jpeg",import.meta.url).href,content:om}]},{title:"🚙 Jeep Adventure Game in C++ (with GUI + Weather Effects)",slug:"jeep-adventure-game",description:"This is a graphical C++ game using SFML, where you control a Jeep driving on a rainy road. Your goal is to avoid falling obstacles, stay visible in the rain, and survive long enough to earn points.",image:new URL("/images/jeep.jpeg",import.meta.url).href,content:im,component:Om},{title:"Echoes of Gaia",slug:"echoes-of-gaia",description:"A next-gen C++ game demo using real-time ray tracing, AI NPCs, and physics simulation.",image:new URL("/images/echo.jpeg",import.meta.url).href,content:lm},{title:"🌧️ Rainfall Reclaimer: EcoFrontline",slug:"rainfall-reclaimer",description:"Set in a near-future world suffering from extreme rainfall, acid rain, and rising floods, you play as an AI-assisted meteorological operative using drones, robots, and water recycling stations to monitor, mitigate, and survive climate chaos.",image:new URL("/images/rainfall-reclamation.jpeg",import.meta.url).href,content:pm,component:Mm},{title:"RainRise: Waterkeepers of Tomorrow",slug:"rain-rise",description:'"RainRise" is a futuristic open-world environmental simulation game where players act as Rainwater Engineers using advanced drones, AI sensors, water-routing bots, and bio-tech filtration systems to conserve rainwater, purify it, and sustain eco-settlements.',image:new URL("/images/rain-rise.jpg",import.meta.url).href,content:dm,component:$m,customReadMore:[{title:"🌱 Feature: Vertical Garden & Hydroponics System",slug:"vertical-garden-and-hydroponics-system",excerpt:"Let’s now build the Vertical Garden & Hydroponics System using Unreal Engine 5 logic and code structure (C++ + Blueprint style), tied to rainwater conservation gameplay.",content:cm,image:new URL("/images/vertical-garden.jpg",import.meta.url).href}]},{title:"Picnic Panic: Nature Adventure",slug:"picnic-panic",description:"A vibrant 2.5D or 3D picnic simulation-adventure game where players must set up and protect their picnic in a dynamic environment, facing challenges like weather changes, animals, time constraints, and item collection.",image:new URL("/images/picnic-panic.jpeg",import.meta.url).href,content:um,component:Wm,customReadMore:[{title:`🎮 Picnic Panic: Nature Adventure
        A Modern Seasonal Picnic Game in Unreal Engine 5 using C++ Part 1`,slug:"picnic-panic-part1",excerpt:`Imagine setting up your picnic on a sunny spring day… until squirrels steal your food, bees buzz around, or snow suddenly starts falling in winter mode.
        This guide includes full C++ classes, explanations, and modular game logic that you can expand on.`,image:new URL("/images/picnic-panic-1.jpeg",import.meta.url).href,content:hm}]},{title:"Rainfall Rescue – Building a Fun SFML C++ Game",slug:"rainfall-rescue",description:"Have you ever wished you could control the rain? In this exciting C++ project, we’re doing just that – building Rainfall Rescue, a 2D arcade-style game where players catch pure rain and avoid acid drops.",image:new URL("/images/rainfall-rescue.jpeg",import.meta.url).href,content:fm,component:Zm},{title:"FloodGuard (UE5 C++): Rescue Boat vs. Rising Waters",slug:"floodguard",description:`Dynamic flood level that rises over time (configurable curve/speed).

A physics-driven rescue boat with simplified, performant buoyancy over a flat water plane.

Pickups (survivors) scattered on rooftops; collect them for score.

Basic HUD via on-screen debug messages (easy to swap for UMG later).

Clean, modular C++ classes: RescueBoatPawn, FloodManager, SurvivorPickup.`,image:new URL("/images/flood.jpeg",import.meta.url).href,content:mm},{title:"“Muggy Rush”",slug:"muggy-rush",description:"you’re a field technician sprinting through a monsoon-season city. the catch: heat + humidity make you tire quickly. you must manage stamina and body temperature by ducking into cool zones (AC vents, mist stations, shaded alleys) while collecting parts to restart dehumidifier towers before the city fogs out.",image:new URL("/images/muggyrush.jpeg",import.meta.url).href,content:gm}],Jm={class:"text-white px-4 py-12"},Qm={class:"max-w-7xl mx-auto"},ng={class:"relative overflow-hidden"},ag=["data-aos-delay"],tg={class:"relative"},sg=["src"],eg={class:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end transition-all duration-300 group-hover:backdrop-blur-sm"},rg={class:"text-lg text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300"},og={class:"p-4"},ig={class:"text-xl font-semibold mb-2"},lg={class:"text-xs text-gray-400"},pg={__name:"Slider",setup(t){const n=wn(Bs);function a(){const u=window.innerWidth;return u<640?1:u<1024?2:3}const r=wn(0),e=wn(a()),s=wn(null),o=()=>{e.value=a(),r.value=0},i=wn(0),l=()=>{var m;if(!s.value)return;const u=((m=s.value.children[0])==null?void 0:m.offsetWidth)||0;zr.to(s.value,{x:-i.value*(u+24),duration:.6,ease:"power3.inOut"});const d=[...s.value.children].slice(i.value,i.value+e.value);zr.fromTo(d,{opacity:0,rotationY:45,y:50},{opacity:1,rotationY:0,y:0,duration:.7,stagger:.1,ease:"back.out(1.7)"})},c=()=>{i.value+e.value>=n.value.length?i.value=0:i.value+=e.value,l()},p=()=>{i.value-e.value<0?i.value=Math.max(n.value.length-e.value,0):i.value-=e.value,l()};return Ba(()=>{ip.init({once:!0}),window.addEventListener("resize",o)}),Pe(()=>{window.removeEventListener("resize",o)}),(u,h)=>(kn(),xn("section",Jm,[H("div",Qm,[h[0]||(h[0]=H("h2",{class:"text-3xl font-bold mb-8","data-aos":"fade-up"}," Latest Project Walkthroughs ",-1)),H("div",ng,[H("div",{ref_key:"slider",ref:s,class:"flex space-x-6 w-full"},[(kn(!0),xn(Wn,null,pr(n.value,(d,m)=>(kn(),xn("div",{key:d.id,class:"min-w-[300px] md:min-w-[350px] bg-gray-800 rounded-2xl shadow-xl overflow-hidden group relative","data-aos":"fade-up","data-aos-delay":100*m},[Sn(ja(ro),{to:`/blogs/${d.slug}`},{default:Gt(()=>[H("div",tg,[H("img",{src:d.image,alt:"Project Image",class:"w-full h-68 object-cover transition duration-300 group-hover:blur-sm"},null,8,sg),H("div",eg,[H("p",rg,Fn(d.description),1)])])]),_:2},1032,["to"]),H("div",og,[H("h3",ig,Fn(d.title),1),H("span",lg,Fn(d.date),1)])],8,ag))),128))],512),H("button",{onClick:p,class:"absolute top-1/2 -translate-y-10 left-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ⬅ "),H("button",{onClick:c,class:"absolute top-1/2 -translate-y-1/2 right-0 bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-10"}," ➡ ")])])]))}},dg="/images/logo.jpg",cg={},ug={class:"flex items-center justify-between"},hg={class:"w-20 relative left-5 sm:left-5 sm:w-32"},fg={class:"flex justify-between w-36 sm:w-42 relative right-6 sm:right-12"};function mg(t,n){const a=pc("router-link");return kn(),xn("header",null,[H("nav",ug,[H("div",hg,[Sn(a,{to:"/"},{default:Gt(()=>n[0]||(n[0]=[H("img",{src:dg,class:"cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out",alt:"Logo"},null,-1)])),_:1,__:[0]})]),H("div",fg,[Sn(a,{to:"/about-cpp-playgrounds"},{default:Gt(()=>n[1]||(n[1]=[H("p",{class:"cursor-pointer"},"About Us",-1)])),_:1,__:[1]}),Sn(a,{to:"/contact-cpp-playgrounds"},{default:Gt(()=>n[2]||(n[2]=[H("p",{class:"cursor-pointer"},"Contact",-1)])),_:1,__:[2]})])])])}const Oe=ss(cg,[["render",mg]]),gg={class:"flex sm:flex-row flex-col justify-around items-center w-full min-h-screen p-4 space-y-6 md:space-y-0 mt-20 md:mt-36"},yg={__name:"Banner",setup(t){const n=wn(null);let a,r,e;const s=["https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png","https://em-content.zobj.net/thumbs/240/apple/354/red-heart_2764-fe0f.png","https://em-content.zobj.net/thumbs/240/apple/354/video-game_1f3ae.png","https://em-content.zobj.net/thumbs/240/apple/354/keyboard_2328-fe0f.png","https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg","https://em-content.zobj.net/thumbs/240/apple/354/smiling-face-with-sunglasses_1f60e.png","https://em-content.zobj.net/thumbs/240/apple/354/money-bag_1f4b0.png","https://em-content.zobj.net/thumbs/240/apple/354/party-popper_1f389.png","https://em-content.zobj.net/thumbs/240/apple/354/technologist_1f9d1-200d-1f4bb.png"];function o(i,l,c){return ma.Bodies.rectangle(i,l,40,40,{render:{sprite:{texture:c,xScale:.4,yScale:.4}}})}return Ba(()=>{a=ma.Engine.create();const i=a.world;r=ma.Render.create({canvas:n.value,engine:a,options:{width:window.innerWidth,height:window.innerHeight,background:"transparent",wireframes:!1}}),ma.Render.run(r),e=ma.Runner.create(),ma.Runner.run(e,a);const l=ma.Bodies.rectangle(window.innerWidth/2,window.innerHeight+20,window.innerWidth,40,{isStatic:!0,render:{fillStyle:"#333"}});ma.World.add(i,l);const c=setInterval(()=>{const u=Math.random()*window.innerWidth,h=-50,d=Math.floor(Math.random()*s.length),m=o(u,h,s[d]);ma.World.add(i,m)},50),p=()=>{ma.Render.lookAt(r,{min:{x:0,y:0},max:{x:window.innerWidth,y:window.innerHeight}})};window.addEventListener("resize",p),ts(()=>{clearInterval(c),window.removeEventListener("resize",p),ma.Render.stop(r),ma.Runner.stop(e)})}),(i,l)=>(kn(),xn(Wn,null,[Sn(Oe),l[1]||(l[1]=H("h1",{class:"font-serif text-center text-2xl sm:text-3xl mt-6 sm:mt-1","data-aos":"zoom-out","data-aos-delay":"100"}," CPP Playgrounds ",-1)),Sn(Eh),H("div",gg,[H("canvas",{ref_key:"canvasRef",ref:n,class:"w-1/2 sm:w-1/2 md:w-1/2 h-[300px] md:h-[60vh] bg-black"},null,512),l[0]||(l[0]=H("div",{class:"w-full sm:w-1/3 md:w-1/3 text-xl md:text-2xl text-white","data-aos":"fade-left","data-aos-delay":"250"},[H("br"),H("p",null,"Unlock your game development potential with our comprehensive C++ guides and step-by-step walkthroughs. Whether you're a beginner or looking to refine your skills, our expertly crafted tutorials cover everything from graphics and game loops to physics engines and AI logic. Learn how to build powerful, high-performance games using C++, the industry-standard language behind many of today’s biggest titles. With real-world examples, source code snippets, and hands-on projects, we make it easy for you to master the art of game development. Start building your dream game today — no experience needed! ")],-1))]),Sn(pg),l[2]||(l[2]=H("div",{class:"relative z-10 text-center mt-12 mb-3 text-sm"}," © 2025 Cpp Playgrounds. All rights reserved. ",-1))],64))}},kg={key:0,class:""},bg={class:"text-center text-xl sm:text-3xl mt-8 px-4"},vg={class:"mt-10 w-1/2 mx-auto px-4 sm:px-6 lg:px-8"},wg=["src"],xg=["innerHTML"],jg={key:1,class:"text-center py-24 text-2xl"},_g={key:3,class:"mt-20 border-t border-white/20 pt-10"},Sg={class:"space-y-8 max-w-3xl mx-auto px-4"},Cg=["onClick"],Tg={class:"flex flex-col sm:flex-row gap-4 items-center"},Pg=["src"],Ag={class:"text-lg font-bold text-white"},Mg={class:"text-sm text-white/80 mt-1 line-clamp-2"},Rg={class:"mt-20 border-t border-white/20 pt-10"},Eg={class:"space-y-8 max-w-3xl mx-auto px-4"},Ig=["onClick"],Fg={class:"flex flex-col sm:flex-row gap-4 items-center"},zg=["src"],Og={class:"text-lg font-bold text-white"},Dg={class:"text-sm text-white/80 mt-1"},Lg={__name:"BlogPage",setup(t){const n=Ch(),a=Sh(),r=na(()=>n.params.slug);function e(l){var c,p;for(const u of Bs){if(u.slug===l)return u;const h=(c=u.related)==null?void 0:c.find(m=>m.slug===l);if(h)return h;const d=(p=u.customReadMore)==null?void 0:p.find(m=>m.slug===l);if(d)return d}return null}const s=na(()=>e(r.value)),o=wn(null);Ba(()=>{o.value&&o.value.addEventListener("click",l=>{const c=l.target.closest("[data-router-link]");if(c){l.preventDefault();const p=c.getAttribute("data-router-link");p&&a.push(p)}})});const i=na(()=>Bs.filter(l=>{var c;return l.slug!==((c=s.value)==null?void 0:c.slug)}).slice(0,3));return(l,c)=>{var p,u;return kn(),xn(Wn,null,[Sn(Oe),s.value?(kn(),xn("div",kg,[H("h1",bg,Fn(s.value.title),1),H("div",vg,[H("img",{src:s.value.image,alt:"blog-img",class:"mt-4 w-full h-auto rounded-lg shadow-lg",style:{"max-height":"400px"}},null,8,wg)]),H("div",{class:"text-lg w-1/2 mx-auto",innerHTML:s.value.content,ref_key:"htmlContainer",ref:o},null,8,xg)])):(kn(),xn("div",jg," Blog not found. ")),s.value.component?(kn(),no(dc(s.value.component),{key:2})):ce("",!0),(u=(p=s.value)==null?void 0:p.customReadMore)!=null&&u.length?(kn(),xn("div",_g,[c[1]||(c[1]=H("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"You Might Also Like",-1)),H("div",Sg,[(kn(!0),xn(Wn,null,pr(s.value.customReadMore,h=>(kn(),xn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:d=>ja(a).push({name:"BlogPage",params:{slug:h.slug}})},[H("div",Tg,[H("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Pg),H("div",null,[H("h3",Ag,Fn(h.title),1),H("p",Mg,Fn(h.excerpt),1),c[0]||(c[0]=H("button",{class:"mt-2 px-3 py-1 bg-indigo-600 text-sm text-white rounded hover:bg-indigo-700"}," Read More → ",-1))])])],8,Cg))),128))])])):ce("",!0),H("div",Rg,[c[2]||(c[2]=H("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"Read More",-1)),H("div",Eg,[(kn(!0),xn(Wn,null,pr(i.value,h=>(kn(),xn("div",{key:h.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:d=>ja(a).push({name:"BlogPage",params:{slug:h.slug}})},[H("div",Fg,[H("img",{src:h.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,zg),H("div",null,[H("h3",Og,Fn(h.title),1),H("p",Dg,Fn(h.excerpt),1)])])],8,Ig))),128))])])],64)}}};var se={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var Bg=se.exports,Bi;function Ug(){return Bi||(Bi=1,function(t,n){(function(a,r){t.exports=r()})(Bg,function(){var a={};a.version="0.2.0";var r=a.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};a.configure=function(m){var f,g;for(f in m)g=m[f],g!==void 0&&m.hasOwnProperty(f)&&(r[f]=g);return this},a.status=null,a.set=function(m){var f=a.isStarted();m=e(m,r.minimum,1),a.status=m===1?null:m;var g=a.render(!f),b=g.querySelector(r.barSelector),w=r.speed,_=r.easing;return g.offsetWidth,i(function(S){r.positionUsing===""&&(r.positionUsing=a.getPositioningCSS()),l(b,o(m,w,_)),m===1?(l(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){l(g,{transition:"all "+w+"ms linear",opacity:0}),setTimeout(function(){a.remove(),S()},w)},w)):setTimeout(S,w)}),this},a.isStarted=function(){return typeof a.status=="number"},a.start=function(){a.status||a.set(0);var m=function(){setTimeout(function(){a.status&&(a.trickle(),m())},r.trickleSpeed)};return r.trickle&&m(),this},a.done=function(m){return!m&&!a.status?this:a.inc(.3+.5*Math.random()).set(1)},a.inc=function(m){var f=a.status;return f?(typeof m!="number"&&(m=(1-f)*e(Math.random()*f,.1,.95)),f=e(f+m,0,.994),a.set(f)):a.start()},a.trickle=function(){return a.inc(Math.random()*r.trickleRate)},function(){var m=0,f=0;a.promise=function(g){return!g||g.state()==="resolved"?this:(f===0&&a.start(),m++,f++,g.always(function(){f--,f===0?(m=0,a.done()):a.set((m-f)/m)}),this)}}(),a.render=function(m){if(a.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var f=document.createElement("div");f.id="nprogress",f.innerHTML=r.template;var g=f.querySelector(r.barSelector),b=m?"-100":s(a.status||0),w=document.querySelector(r.parent),_;return l(g,{transition:"all 0 linear",transform:"translate3d("+b+"%,0,0)"}),r.showSpinner||(_=f.querySelector(r.spinnerSelector),_&&d(_)),w!=document.body&&p(w,"nprogress-custom-parent"),w.appendChild(f),f},a.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(r.parent),"nprogress-custom-parent");var m=document.getElementById("nprogress");m&&d(m)},a.isRendered=function(){return!!document.getElementById("nprogress")},a.getPositioningCSS=function(){var m=document.body.style,f="WebkitTransform"in m?"Webkit":"MozTransform"in m?"Moz":"msTransform"in m?"ms":"OTransform"in m?"O":"";return f+"Perspective"in m?"translate3d":f+"Transform"in m?"translate":"margin"};function e(m,f,g){return m<f?f:m>g?g:m}function s(m){return(-1+m)*100}function o(m,f,g){var b;return r.positionUsing==="translate3d"?b={transform:"translate3d("+s(m)+"%,0,0)"}:r.positionUsing==="translate"?b={transform:"translate("+s(m)+"%,0)"}:b={"margin-left":s(m)+"%"},b.transition="all "+f+"ms "+g,b}var i=function(){var m=[];function f(){var g=m.shift();g&&g(f)}return function(g){m.push(g),m.length==1&&f()}}(),l=function(){var m=["Webkit","O","Moz","ms"],f={};function g(S){return S.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(y,x){return x.toUpperCase()})}function b(S){var y=document.body.style;if(S in y)return S;for(var x=m.length,v=S.charAt(0).toUpperCase()+S.slice(1),k;x--;)if(k=m[x]+v,k in y)return k;return S}function w(S){return S=g(S),f[S]||(f[S]=b(S))}function _(S,y,x){y=w(y),S.style[y]=x}return function(S,y){var x=arguments,v,k;if(x.length==2)for(v in y)k=y[v],k!==void 0&&y.hasOwnProperty(v)&&_(S,v,k);else _(S,x[1],x[2])}}();function c(m,f){var g=typeof m=="string"?m:h(m);return g.indexOf(" "+f+" ")>=0}function p(m,f){var g=h(m),b=g+f;c(g,f)||(m.className=b.substring(1))}function u(m,f){var g=h(m),b;c(m,f)&&(b=g.replace(" "+f+" "," "),m.className=b.substring(1,b.length-1))}function h(m){return(" "+(m.className||"")+" ").replace(/\s+/gi," ")}function d(m){m&&m.parentNode&&m.parentNode.removeChild(m)}return a})}(se)),se.exports}var Gg=Ug();const So=op(Gg),Wg="/images/about_us.jpeg",Hg={class:"max-w-4xl mx-auto px-6 py-12 md:py-20"},Ng={class:"space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"},Vg={class:"text-center mt-16 px-6 py-8 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-xl border border-gray-200 dark:border-gray-700"},Yg={__name:"AboutUs",setup(t){return(n,a)=>(kn(),xn(Wn,null,[Sn(Oe),H("div",Hg,[a[4]||(a[4]=fr('<div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 mb-6"> 🎮 From Player to Creator: My C++ Game Dev Journey </h1><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"></div></div><div class="mb-16 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500"><img src="'+Wg+'" alt="Game development workspace" class="w-full h-auto object-cover"></div>',2)),H("div",Ng,[a[3]||(a[3]=fr('<p class="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500"><span class="text-3xl mr-2">👾</span> I still remember the first time a video game truly captivated me. It wasn&#39;t just the immersive worlds or thrilling gameplay—I became obsessed with understanding <em class="font-semibold text-blue-600 dark:text-blue-400">how</em> these digital magic tricks worked. As a wide-eyed teenager, I&#39;d tear through game files, stumbling upon mysterious <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.cpp</code> extensions that might as well have been ancient hieroglyphics. </p><p class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500"><span class="text-3xl mr-2">🔥</span> My early coding attempts were brutal. I&#39;d stare at walls of C++ syntax—templates that looked like algebraic nightmares, pointer errors that crashed my screen, and linker errors that haunted my dreams. But every small breakthrough felt like leveling up in real life. That first moving sprite? <span class="font-bold text-amber-600 dark:text-amber-400">Pure euphoria</span>. My initial collision detection that actually worked? <span class="font-bold text-amber-600 dark:text-amber-400">Better than any boss fight</span>. </p><div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner"><h3 class="text-2xl font-bold mb-4 flex items-center"><span class="text-3xl mr-3">💡</span> Through years of trial and error, I discovered: </h3><ul class="space-y-4 pl-2"><li class="flex items-start"><span class="text-amber-500 mr-3">⚙️</span><span><strong class="text-gray-900 dark:text-white">Game code isn&#39;t about perfection</strong>—it&#39;s about systems talking to each other</span></li><li class="flex items-start"><span class="text-blue-500 mr-3">🧠</span><span><strong class="text-gray-900 dark:text-white">The best learning happens when you&#39;re fixing broken things</strong>, not just copying working examples</span></li><li class="flex items-start"><span class="text-purple-500 mr-3">🚀</span><span><strong class="text-gray-900 dark:text-white">C++&#39;s complexity is its superpower</strong>—once you tame it, you can bend hardware to your will</span></li></ul></div><p class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500"><span class="text-3xl mr-2">✨</span> This site is the mentor I wish I&#39;d had. Every tutorial solves a problem I struggled with—from &quot;why does my character clip through walls?&quot; to &quot;how do I make NPCs <em>think</em>?&quot; The code snippets are battle-tested, the explanations assume zero knowledge (but respect your intelligence), and the projects build toward actual portfolio pieces. </p>',4)),H("div",Vg,[a[1]||(a[1]=H("h3",{class:"text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center"},[H("span",{class:"mr-3"},"🎯"),Jn(" Ready to Level Up? ")],-1)),a[2]||(a[2]=H("p",{class:"text-xl mb-6"}," Whether you're modding your first game or architecting an engine from scratch, I'm here to help you skip the years of frustration. ",-1)),Sn(ja(ro),{to:"/"},{default:Gt(()=>a[0]||(a[0]=[H("button",{class:"px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"}," Start Learning Now → ",-1)])),_:1,__:[0]})])])])],64))}},qg={__name:"ContactUs",setup(t){return(n,a)=>(kn(),xn(Wn,null,[Sn(Oe),a[0]||(a[0]=fr('<div class="py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"><span class="inline-block mr-3">👋</span> Let&#39;s Connect! </h1><p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"> Whether you&#39;re stuck on a bug, want to suggest improvements, or just geek out about game dev </p><div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full mt-6"></div></div><div class="grid md:grid-cols-2 gap-8"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4"><span class="text-2xl">📬</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Shoot Us a Message</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Found a bug in our code? Need advice on your project? Want mentorship or course recommendations? </p><div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500"><p class="font-mono text-lg break-all text-blue-600 dark:text-blue-300"> programmingninja@proton.me </p><p class="text-sm text-gray-500 dark:text-gray-400 mt-2"> (We typically reply within 24 hours) </p></div><p class="text-gray-600 dark:text-gray-300"><span class="font-bold">Pro Tip:</span> Include &quot;[GameDev]&quot; in your subject line to skip the queue! </p></div></div></div><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"><div class="p-8"><div class="flex items-center mb-6"><div class="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4"><span class="text-2xl">👨‍💻</span></div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Join Community</h2></div><div class="space-y-6"><p class="text-lg text-gray-600 dark:text-gray-300"> Connect with other game developers, share projects, and get real-time help: </p><div class="space-y-4"><a href="https://cppalliance.org/slack/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">💬</span><div><h3 class="font-bold">C++ Slack/Discord</h3><p class="text-sm text-gray-500 dark:text-gray-400">Live chat with developers. Best for real-time help</p></div></a><a href="https://www.reddit.com/r/cpp/" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">🐦</span><div><h3 class="font-bold">r/cpp (Reddit)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Best for language updates, technical discussions</p></div></a><a href="https://stackoverflow.com/questions/tagged/c%252b%252b" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"><span class="text-2xl mr-4">📱</span><div><h3 class="font-bold">Stack Overflow (C++ Tag)</h3><p class="text-sm text-gray-500 dark:text-gray-400">Code-specific questions</p></div></a></div></div></div></div></div><div class="mt-16 text-center"><p class="text-white text-md font-extrabold"><span class="inline-block mr-2 text-xl font-extrabold">⚠️</span> Warning: Contacting us about game dev may result in spontaneous coding sessions, excessive coffee consumption, and unexpected friendships. <span class="inline-block ml-2">☕</span></p></div></div></div>',1))],64))}};So.configure({showSpinner:!1});const De=jh({history:nh("/"),scrollBehavior(t,n,a){return{top:0}},routes:[{path:"/",component:yg},{path:"/about-cpp-playgrounds",name:"AboutUs",component:Yg,meta:{title:"About Us | cpp-playgrounds"}},{path:"/contact-cpp-playgrounds",name:"ContactUs",component:qg,meta:{title:"Contact US | cpp-playgrounds"}},{path:"/blogs/:slug",name:"BlogPage",component:Lg,meta:{title:""}}],scrollBehavior(){return{top:0}}});De.beforeEach((t,n,a)=>{So.start(),a()});De.afterEach(()=>{So.done()});De.afterEach((t,n)=>{Xr(()=>{var e;let a="cpp-playgrounds";const r=t.matched.slice().reverse().find(s=>s.meta&&s.meta.title);if(r&&r.meta.title&&(a=r.meta.title),t.name==="BlogPage"){const s=Bs.find(o=>o.slug===t.params.slug);if(s)a=`${s.title} | cpp-playgrounds`;else for(const o of Bs){const i=(e=o.customReadMore)==null?void 0:e.find(l=>l.slug===t.params.slug);if(i){a=`${i.title} | cpp-playgrounds`;break}}}document.title=a,typeof gtag=="function"?gtag("event","page_view",{page_title:a,page_location:window.location.href,page_path:t.fullPath}):console.warn("gtag not defined")})});ip.init();const id=wu(Th);id.use(De);id.mount("#app");
