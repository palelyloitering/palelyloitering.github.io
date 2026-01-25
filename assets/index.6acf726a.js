const wv=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),rf={},Tv="/",Lt=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Tv}${r}`,r in rf)return;rf[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":wv,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},ri=[],jt=()=>{},Iv=()=>!1,Ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Gc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bv=Object.prototype.hasOwnProperty,Pe=(t,e)=>bv.call(t,e),ae=Array.isArray,ii=t=>Hs(t)==="[object Map]",jp=t=>Hs(t)==="[object Set]",Av=t=>Hs(t)==="[object RegExp]",de=t=>typeof t=="function",Be=t=>typeof t=="string",sr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",qp=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),Hp=Object.prototype.toString,Hs=t=>Hp.call(t),Rv=t=>Hs(t).slice(8,-1),zp=t=>Hs(t)==="[object Object]",Qc=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cs=Kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sv=/-(\w)/g,Ht=Ia(t=>t.replace(Sv,(e,n)=>n?n.toUpperCase():"")),Cv=/\B([A-Z])/g,Lr=Ia(t=>t.replace(Cv,"-$1").toLowerCase()),ba=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),ml=Ia(t=>t?`on${ba(t)}`:""),er=(t,e)=>!Object.is(t,e),us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Kp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Pv=t=>{const e=parseFloat(t);return isNaN(e)?t:e},kv=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let sf;const Wp=()=>sf||(sf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Jc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Be(r)?Dv(r):Jc(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Be(t)||Le(t))return t}const xv=/;(?![^(]*\))/g,Ov=/:([^]+)/,Nv=/\/\*[^]*?\*\//g;function Dv(t){const e={};return t.replace(Nv,"").split(xv).forEach(n=>{if(n){const r=n.split(Ov);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yc(t){let e="";if(Be(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Yc(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lv=Kc(Vv);function Gp(t){return!!t||t===""}const Qp=t=>!!(t&&t.__v_isRef===!0),Mv=t=>Be(t)?t:t==null?"":ae(t)||Le(t)&&(t.toString===Hp||!de(t.toString))?Qp(t)?Mv(t.value):JSON.stringify(t,Jp,2):String(t),Jp=(t,e)=>Qp(e)?Jp(t,e.value):ii(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[_l(r,s)+" =>"]=i,n),{})}:jp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_l(n))}:sr(e)?_l(e):Le(e)&&!ae(e)&&!zp(e)?String(e):e,_l=(t,e="")=>{var n;return sr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class Yp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Xp(t){return new Yp(t)}function Zp(){return Tt}function Fv(t,e=!1){Tt&&Tt.cleanups.push(t)}let Ne;const yl=new WeakSet;class eg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yl.has(this)&&(yl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ng(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,of(this),rg(this);const e=Ne,n=qt;Ne=this,qt=!0;try{return this.fn()}finally{ig(this),Ne=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xl(this)&&this.run()}get dirty(){return Xl(this)}}let tg=0,hs;function ng(t){t.flags|=8,t.next=hs,hs=t}function Xc(){tg++}function Zc(){if(--tg>0)return;let t;for(;hs;){let e=hs;for(hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function rg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ig(t,e=!1){let n,r=t.depsTail,i=r;for(;i;){const s=i.prevDep;i.version===-1?(i===r&&(r=s),eu(i,e),Uv(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=n,t.depsTail=r}function Xl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function sg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bs))return;t.globalVersion=bs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Xl(t)){t.flags&=-3;return}const n=Ne,r=qt;Ne=t,qt=!0;try{rg(t);const i=t.fn(t._value);(e.version===0||er(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ne=n,qt=r,ig(t,!0),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs)if(n.computed){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)eu(s,!0)}else n.map&&!e&&(n.map.delete(n.key),n.map.size||As.delete(n.target))}function Uv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qt=!0;const og=[];function or(){og.push(qt),qt=!1}function ar(){const t=og.pop();qt=t===void 0?!0:t}function of(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let bs=0;class Bv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(e){if(!Ne||!qt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new Bv(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Ne.flags&4&&ag(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,bs++,this.notify(e)}notify(e){Xc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zc()}}}function ag(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ag(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const As=new WeakMap,Er=Symbol(""),Zl=Symbol(""),Rs=Symbol("");function yt(t,e,n){if(qt&&Ne){let r=As.get(t);r||As.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new tu),i.target=t,i.map=r,i.key=n),i.track()}}function yn(t,e,n,r,i,s){const o=As.get(t);if(!o){bs++;return}const l=c=>{c&&c.trigger()};if(Xc(),e==="clear")o.forEach(l);else{const c=ae(t),h=c&&Qc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Rs||!sr(g)&&g>=f)&&l(p)})}else switch(n!==void 0&&l(o.get(n)),h&&l(o.get(Rs)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Er)),ii(t)&&l(o.get(Zl)));break;case"delete":c||(l(o.get(Er)),ii(t)&&l(o.get(Zl)));break;case"set":ii(t)&&l(o.get(Er));break}}Zc()}function $v(t,e){var n;return(n=As.get(t))==null?void 0:n.get(e)}function Hr(t){const e=be(t);return e===t?e:(yt(e,"iterate",Rs),Ft(t)?e:e.map(pt))}function Aa(t){return yt(t=be(t),"iterate",Rs),t}const jv={__proto__:null,[Symbol.iterator](){return vl(this,Symbol.iterator,pt)},concat(...t){return Hr(this).concat(...t.map(e=>ae(e)?Hr(e):e))},entries(){return vl(this,"entries",t=>(t[1]=pt(t[1]),t))},every(t,e){return cn(this,"every",t,e,void 0,arguments)},filter(t,e){return cn(this,"filter",t,e,n=>n.map(pt),arguments)},find(t,e){return cn(this,"find",t,e,pt,arguments)},findIndex(t,e){return cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return cn(this,"findLast",t,e,pt,arguments)},findLastIndex(t,e){return cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return El(this,"includes",t)},indexOf(...t){return El(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return El(this,"lastIndexOf",t)},map(t,e){return cn(this,"map",t,e,void 0,arguments)},pop(){return Gi(this,"pop")},push(...t){return Gi(this,"push",t)},reduce(t,...e){return af(this,"reduce",t,e)},reduceRight(t,...e){return af(this,"reduceRight",t,e)},shift(){return Gi(this,"shift")},some(t,e){return cn(this,"some",t,e,void 0,arguments)},splice(...t){return Gi(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return Gi(this,"unshift",t)},values(){return vl(this,"values",pt)}};function vl(t,e,n){const r=Aa(t),i=r[e]();return r!==t&&!Ft(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const qv=Array.prototype;function cn(t,e,n,r,i,s){const o=Aa(t),l=o!==t&&!Ft(t),c=o[e];if(c!==qv[e]){const p=c.apply(t,s);return l?pt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,pt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,h,r);return l&&i?i(f):f}function af(t,e,n,r){const i=Aa(t);let s=n;return i!==t&&(Ft(t)?n.length>3&&(s=function(o,l,c){return n.call(this,o,l,c,t)}):s=function(o,l,c){return n.call(this,o,pt(l),c,t)}),i[e](s,...r)}function El(t,e,n){const r=be(t);yt(r,"iterate",Rs);const i=r[e](...n);return(i===-1||i===!1)&&su(n[0])?(n[0]=be(n[0]),r[e](...n)):i}function Gi(t,e,n=[]){or(),Xc();const r=be(t)[e].apply(t,n);return Zc(),ar(),r}const Hv=Kc("__proto__,__v_isRef,__isVue"),lg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sr));function zv(t){sr(t)||(t=String(t));const e=be(this);return yt(e,"has",t),e.hasOwnProperty(t)}class cg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?iE:dg:s?fg:hg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!i){let c;if(o&&(c=jv[n]))return c;if(n==="hasOwnProperty")return zv}const l=Reflect.get(e,n,ze(e)?e:r);return(sr(n)?lg.has(n):Hv(n))||(i||yt(e,"get",n),s)?l:ze(l)?o&&Qc(n)?l:l.value:Le(l)?i?gg(l):Mr(l):l}}class ug extends cg{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const c=Sr(s);if(!Ft(r)&&!Sr(r)&&(s=be(s),r=be(r)),!ae(e)&&ze(s)&&!ze(r))return c?!1:(s.value=r,!0)}const o=ae(e)&&Qc(n)?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,r,ze(e)?e:i);return e===be(i)&&(o?er(r,s)&&yn(e,"set",n,r):yn(e,"add",n,r)),l}deleteProperty(e,n){const r=Pe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&yn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!sr(n)||!lg.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ae(e)?"length":Er),Reflect.ownKeys(e)}}class Kv extends cg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Wv=new ug,Gv=new Kv,Qv=new ug(!0);const nu=t=>t,Ra=t=>Reflect.getPrototypeOf(t);function To(t,e,n=!1,r=!1){t=t.__v_raw;const i=be(t),s=be(e);n||(er(e,s)&&yt(i,"get",e),yt(i,"get",s));const{has:o}=Ra(i),l=r?nu:n?ou:pt;if(o.call(i,e))return l(t.get(e));if(o.call(i,s))return l(t.get(s));t!==i&&t.get(e)}function Io(t,e=!1){const n=this.__v_raw,r=be(n),i=be(t);return e||(er(t,i)&&yt(r,"has",t),yt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function bo(t,e=!1){return t=t.__v_raw,!e&&yt(be(t),"iterate",Er),Reflect.get(t,"size",t)}function lf(t,e=!1){!e&&!Ft(t)&&!Sr(t)&&(t=be(t));const n=be(this);return Ra(n).has.call(n,t)||(n.add(t),yn(n,"add",t,t)),this}function cf(t,e,n=!1){!n&&!Ft(e)&&!Sr(e)&&(e=be(e));const r=be(this),{has:i,get:s}=Ra(r);let o=i.call(r,t);o||(t=be(t),o=i.call(r,t));const l=s.call(r,t);return r.set(t,e),o?er(e,l)&&yn(r,"set",t,e):yn(r,"add",t,e),this}function uf(t){const e=be(this),{has:n,get:r}=Ra(e);let i=n.call(e,t);i||(t=be(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&yn(e,"delete",t,void 0),s}function hf(){const t=be(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function Ao(t,e){return function(r,i){const s=this,o=s.__v_raw,l=be(o),c=e?nu:t?ou:pt;return!t&&yt(l,"iterate",Er),o.forEach((h,f)=>r.call(i,c(h),c(f),s))}}function Ro(t,e,n){return function(...r){const i=this.__v_raw,s=be(i),o=ii(s),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=i[t](...r),f=n?nu:e?ou:pt;return!e&&yt(s,"iterate",c?Zl:Er),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function kn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Jv(){const t={get(s){return To(this,s)},get size(){return bo(this)},has:Io,add:lf,set:cf,delete:uf,clear:hf,forEach:Ao(!1,!1)},e={get(s){return To(this,s,!1,!0)},get size(){return bo(this)},has:Io,add(s){return lf.call(this,s,!0)},set(s,o){return cf.call(this,s,o,!0)},delete:uf,clear:hf,forEach:Ao(!1,!0)},n={get(s){return To(this,s,!0)},get size(){return bo(this,!0)},has(s){return Io.call(this,s,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:Ao(!0,!1)},r={get(s){return To(this,s,!0,!0)},get size(){return bo(this,!0)},has(s){return Io.call(this,s,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:Ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ro(s,!1,!1),n[s]=Ro(s,!0,!1),e[s]=Ro(s,!1,!0),r[s]=Ro(s,!0,!0)}),[t,n,e,r]}const[Yv,Xv,Zv,eE]=Jv();function ru(t,e){const n=e?t?eE:Zv:t?Xv:Yv;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Pe(n,i)&&i in r?n:r,i,s)}const tE={get:ru(!1,!1)},nE={get:ru(!1,!0)},rE={get:ru(!0,!1)};const hg=new WeakMap,fg=new WeakMap,dg=new WeakMap,iE=new WeakMap;function sE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oE(t){return t.__v_skip||!Object.isExtensible(t)?0:sE(Rv(t))}function Mr(t){return Sr(t)?t:iu(t,!1,Wv,tE,hg)}function pg(t){return iu(t,!1,Qv,nE,fg)}function gg(t){return iu(t,!0,Gv,rE,dg)}function iu(t,e,n,r,i){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=oE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return i.set(t,l),l}function Qn(t){return Sr(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sr(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function su(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function Fr(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&Kp(t,"__v_skip",!0),t}const pt=t=>Le(t)?Mr(t):t,ou=t=>Le(t)?gg(t):t;function ze(t){return t?t.__v_isRef===!0:!1}function Cr(t){return mg(t,!1)}function aE(t){return mg(t,!0)}function mg(t,e){return ze(t)?t:new lE(t,e)}class lE{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||Sr(e);e=r?e:be(e),er(e,n)&&(this._rawValue=e,this._value=r?e:pt(e),this.dep.trigger())}}function wr(t){return ze(t)?t.value:t}const cE={get:(t,e,n)=>e==="__v_raw"?t:wr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ze(i)&&!ze(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function _g(t){return Qn(t)?t:new Proxy(t,cE)}function uE(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=fE(t,n);return e}class hE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $v(be(this._object),this._key)}}function fE(t,e,n){const r=t[e];return ze(r)?r:new hE(t,e,n)}class dE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bs-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return ng(this),!0}get value(){const e=this.dep.track();return sg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pE(t,e,n=!1){let r,i;return de(t)?r=t:(r=t.get,i=t.set),new dE(r,i,n)}const So={},Jo=new WeakMap;let _r;function gE(t,e=!1,n=_r){if(n){let r=Jo.get(n);r||Jo.set(n,r=[]),r.push(t)}}function mE(t,e,n=De){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:l,call:c}=n,h=D=>i?D:Ft(D)||i===!1||i===0?dn(D,1):dn(D);let f,p,g,v,S=!1,x=!1;if(ze(t)?(p=()=>t.value,S=Ft(t)):Qn(t)?(p=()=>h(t),S=!0):ae(t)?(x=!0,S=t.some(D=>Qn(D)||Ft(D)),p=()=>t.map(D=>{if(ze(D))return D.value;if(Qn(D))return h(D);if(de(D))return c?c(D,2):D()})):de(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){or();try{g()}finally{ar()}}const D=_r;_r=f;try{return c?c(t,3,[v]):t(v)}finally{_r=D}}:p=jt,e&&i){const D=p,B=i===!0?1/0:i;p=()=>dn(D(),B)}const k=Zp(),F=()=>{f.stop(),k&&Gc(k.effects,f)};if(s&&e){const D=e;e=(...B)=>{D(...B),F()}}let N=x?new Array(t.length).fill(So):So;const V=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(e){const B=f.run();if(i||S||(x?B.some((K,I)=>er(K,N[I])):er(B,N))){g&&g();const K=_r;_r=f;try{const I=[B,N===So?void 0:x&&N[0]===So?[]:N,v];c?c(e,3,I):e(...I),N=B}finally{_r=K}}}else f.run()};return l&&l(V),f=new eg(p),f.scheduler=o?()=>o(V,!1):V,v=D=>gE(D,!1,f),g=f.onStop=()=>{const D=Jo.get(f);if(D){if(c)c(D,4);else for(const B of D)B();Jo.delete(f)}},e?r?V(!0):N=f.run():o?o(V.bind(null,!0),!0):f.run(),F.pause=f.pause.bind(f),F.resume=f.resume.bind(f),F.stop=F,F}function dn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ze(t))dn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)dn(t[r],e,n);else if(jp(t)||ii(t))t.forEach(r=>{dn(r,e,n)});else if(zp(t)){for(const r in t)dn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&dn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zs(t,e,n,r){try{return r?t(...r):t()}catch(i){Sa(i,e,n)}}function zt(t,e,n,r){if(de(t)){const i=zs(t,e,n,r);return i&&qp(i)&&i.catch(s=>{Sa(s,e,n)}),i}if(ae(t)){const i=[];for(let s=0;s<t.length;s++)i.push(zt(t[s],e,n,r));return i}}function Sa(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(s){or(),zs(s,null,10,[t,c,h]),ar();return}}_E(t,n,i,r,o)}function _E(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}let Ss=!1,ec=!1;const It=[];let Jt=0;const si=[];let Mn=null,Jr=0;const yg=Promise.resolve();let au=null;function lu(t){const e=au||yg;return t?e.then(this?t.bind(this):t):e}function yE(t){let e=Ss?Jt+1:0,n=It.length;for(;e<n;){const r=e+n>>>1,i=It[r],s=Cs(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function cu(t){if(!(t.flags&1)){const e=Cs(t),n=It[It.length-1];!n||!(t.flags&2)&&e>=Cs(n)?It.push(t):It.splice(yE(e),0,t),t.flags|=1,vg()}}function vg(){!Ss&&!ec&&(ec=!0,au=yg.then(wg))}function vE(t){ae(t)?si.push(...t):Mn&&t.id===-1?Mn.splice(Jr+1,0,t):t.flags&1||(si.push(t),t.flags|=1),vg()}function ff(t,e,n=Ss?Jt+1:0){for(;n<It.length;n++){const r=It[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;It.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Eg(t){if(si.length){const e=[...new Set(si)].sort((n,r)=>Cs(n)-Cs(r));if(si.length=0,Mn){Mn.push(...e);return}for(Mn=e,Jr=0;Jr<Mn.length;Jr++){const n=Mn[Jr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mn=null,Jr=0}}const Cs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wg(t){ec=!1,Ss=!0;const e=jt;try{for(Jt=0;Jt<It.length;Jt++){const n=It[Jt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),zs(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Jt<It.length;Jt++){const n=It[Jt];n&&(n.flags&=-2)}Jt=0,It.length=0,Eg(),Ss=!1,au=null,(It.length||si.length)&&wg()}}let Ye=null,Tg=null;function Yo(t){const e=Ye;return Ye=t,Tg=t&&t.type.__scopeId||null,e}function EE(t,e=Ye,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&If(-1);const s=Yo(e);let o;try{o=t(...i)}finally{Yo(s),r._d&&If(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ig(t,e){if(Ye===null)return t;const n=Va(Ye),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,l,c=De]=e[i];s&&(de(s)&&(s={mounted:s,updated:s}),s.deep&&dn(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function pr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let c=l.dir[r];c&&(or(),zt(c,n,8,[t.el,l,t,e]),ar())}}const bg=Symbol("_vte"),Ag=t=>t.__isTeleport,fs=t=>t&&(t.disabled||t.disabled===""),wE=t=>t&&(t.defer||t.defer===""),df=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,pf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,tc=(t,e)=>{const n=t&&t.to;return Be(n)?e?e(n):null:n},TE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,l,c,h){const{mc:f,pc:p,pbc:g,o:{insert:v,querySelector:S,createText:x,createComment:k}}=h,F=fs(e.props);let{shapeFlag:N,children:V,dynamicChildren:D}=e;if(t==null){const B=e.el=x(""),K=e.anchor=x("");v(B,n,r),v(K,n,r);const I=(_,T)=>{N&16&&(i&&i.isCE&&(i.ce._teleportTarget=_),f(V,_,T,i,s,o,l,c))},y=()=>{const _=e.target=tc(e.props,S),T=Rg(_,e,x,v);_&&(o!=="svg"&&df(_)?o="svg":o!=="mathml"&&pf(_)&&(o="mathml"),F||(I(_,T),Lo(e)))};F&&(I(n,K),Lo(e)),wE(e.props)?Xe(y,s):y()}else{e.el=t.el,e.targetStart=t.targetStart;const B=e.anchor=t.anchor,K=e.target=t.target,I=e.targetAnchor=t.targetAnchor,y=fs(t.props),_=y?n:K,T=y?B:I;if(o==="svg"||df(K)?o="svg":(o==="mathml"||pf(K))&&(o="mathml"),D?(g(t.dynamicChildren,D,_,i,s,o,l),gu(t,e,!0)):c||p(t,e,_,T,i,s,o,l,!1),F)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Co(e,n,B,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=tc(e.props,S);R&&Co(e,R,null,h,0)}else y&&Co(e,K,I,h,1);Lo(e)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:l,anchor:c,targetStart:h,targetAnchor:f,target:p,props:g}=t;if(p&&(i(h),i(f)),s&&i(c),o&16){const v=s||!fs(g);for(let S=0;S<l.length;S++){const x=l[S];r(x,e,n,v,!!x.dynamicChildren)}}},move:Co,hydrate:IE};function Co(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:h,props:f}=t,p=s===2;if(p&&r(o,e,n),(!p||fs(f))&&c&16)for(let g=0;g<h.length;g++)i(h[g],e,n,2);p&&r(l,e,n)}function IE(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:h,createText:f}},p){const g=e.target=tc(e.props,c);if(g){const v=g._lpa||g.firstChild;if(e.shapeFlag&16)if(fs(e.props))e.anchor=p(o(t),e,l(t),n,r,i,s),e.targetStart=v,e.targetAnchor=v&&o(v);else{e.anchor=o(t);let S=v;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")e.targetStart=S;else if(S.data==="teleport anchor"){e.targetAnchor=S,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}S=o(S)}e.targetAnchor||Rg(g,e,f,h),p(v&&o(v),e,g,n,r,i,s)}Lo(e)}return e.anchor&&o(e.anchor)}const Ek=TE;function Lo(t){const e=t.ctx;if(e&&e.ut){let n=t.targetStart;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}function Rg(t,e,n,r){const i=e.targetStart=n(""),s=e.targetAnchor=n("");return i[bg]=s,t&&(r(i,t),r(s,t)),s}const Fn=Symbol("_leaveCb"),Po=Symbol("_enterCb");function Sg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ka(()=>{t.isMounted=!0}),xa(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],Cg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},Pg=t=>{const e=t.subTree;return e.component?Pg(e.component):e},bE={name:"BaseTransition",props:Cg,setup(t,{slots:e}){const n=Si(),r=Sg();return()=>{const i=e.default&&uu(e.default(),!0);if(!i||!i.length)return;const s=kg(i),o=be(t),{mode:l}=o;if(r.isLeaving)return wl(s);const c=gf(s);if(!c)return wl(s);let h=Ps(c,o,r,n,g=>h=g);c.type!==mt&&tr(c,h);const f=n.subTree,p=f&&gf(f);if(p&&p.type!==mt&&!jn(c,p)&&Pg(n).type!==mt){const g=Ps(p,o,r,n);if(tr(p,g),l==="out-in"&&c.type!==mt)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave},wl(s);l==="in-out"&&c.type!==mt&&(g.delayLeave=(v,S,x)=>{const k=xg(r,p);k[String(p.key)]=p,v[Fn]=()=>{S(),v[Fn]=void 0,delete h.delayedLeave},h.delayedLeave=x})}return s}}};function kg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==mt){e=n;break}}return e}const AE=bE;function xg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ps(t,e,n,r,i){const{appear:s,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:v,onAfterLeave:S,onLeaveCancelled:x,onBeforeAppear:k,onAppear:F,onAfterAppear:N,onAppearCancelled:V}=e,D=String(t.key),B=xg(n,t),K=(_,T)=>{_&&zt(_,r,9,T)},I=(_,T)=>{const R=T[1];K(_,T),ae(_)?_.every(A=>A.length<=1)&&R():_.length<=1&&R()},y={mode:o,persisted:l,beforeEnter(_){let T=c;if(!n.isMounted)if(s)T=k||c;else return;_[Fn]&&_[Fn](!0);const R=B[D];R&&jn(t,R)&&R.el[Fn]&&R.el[Fn](),K(T,[_])},enter(_){let T=h,R=f,A=p;if(!n.isMounted)if(s)T=F||h,R=N||f,A=V||p;else return;let w=!1;const Q=_[Po]=_e=>{w||(w=!0,_e?K(A,[_]):K(R,[_]),y.delayedLeave&&y.delayedLeave(),_[Po]=void 0)};T?I(T,[_,Q]):Q()},leave(_,T){const R=String(t.key);if(_[Po]&&_[Po](!0),n.isUnmounting)return T();K(g,[_]);let A=!1;const w=_[Fn]=Q=>{A||(A=!0,T(),Q?K(x,[_]):K(S,[_]),_[Fn]=void 0,B[R]===t&&delete B[R])};B[R]=t,v?I(v,[_,w]):w()},clone(_){const T=Ps(_,e,n,r,i);return i&&i(T),T}};return y}function wl(t){if(Ca(t))return t=vn(t),t.children=null,t}function gf(t){if(!Ca(t))return Ag(t.type)&&t.children?kg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function tr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,tr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function uu(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Rt?(o.patchFlag&128&&i++,r=r.concat(uu(o.children,e,l))):(e||o.type!==mt)&&r.push(l!=null?vn(o,{key:l}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function hu(t,e){return de(t)?(()=>Ge({name:t.name},e,{setup:t}))():t}function Og(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function nc(t,e,n,r,i=!1){if(ae(t)){t.forEach((S,x)=>nc(S,e&&(ae(e)?e[x]:e),n,r,i));return}if(Tr(r)&&!i)return;const s=r.shapeFlag&4?Va(r.component):r.el,o=i?null:s,{i:l,r:c}=t,h=e&&e.r,f=l.refs===De?l.refs={}:l.refs,p=l.setupState,g=be(p),v=p===De?()=>!1:S=>Pe(g,S);if(h!=null&&h!==c&&(Be(h)?(f[h]=null,v(h)&&(p[h]=null)):ze(h)&&(h.value=null)),de(c))zs(c,l,12,[o,f]);else{const S=Be(c),x=ze(c);if(S||x){const k=()=>{if(t.f){const F=S?v(c)?p[c]:f[c]:c.value;i?ae(F)&&Gc(F,s):ae(F)?F.includes(s)||F.push(s):S?(f[c]=[s],v(c)&&(p[c]=f[c])):(c.value=[s],t.k&&(f[t.k]=c.value))}else S?(f[c]=o,v(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(f[t.k]=o))};o?(k.id=-1,Xe(k,n)):k()}}}const Tr=t=>!!t.type.__asyncLoader,Ca=t=>t.type.__isKeepAlive,RE={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Si(),r=n.ctx;if(!r.renderer)return()=>{const N=e.default&&e.default();return N&&N.length===1?N[0]:N};const i=new Map,s=new Set;let o=null;const l=n.suspense,{renderer:{p:c,m:h,um:f,o:{createElement:p}}}=r,g=p("div");r.activate=(N,V,D,B,K)=>{const I=N.component;h(N,V,D,0,l),c(I.vnode,N,V,D,I,l,B,N.slotScopeIds,K),Xe(()=>{I.isDeactivated=!1,I.a&&us(I.a);const y=N.props&&N.props.onVnodeMounted;y&&Mt(y,I.parent,N)},l)},r.deactivate=N=>{const V=N.component;Zo(V.m),Zo(V.a),h(N,g,null,1,l),Xe(()=>{V.da&&us(V.da);const D=N.props&&N.props.onVnodeUnmounted;D&&Mt(D,V.parent,N),V.isDeactivated=!0},l)};function v(N){Tl(N),f(N,n,l,!0)}function S(N){i.forEach((V,D)=>{const B=lc(V.type);B&&!N(B)&&x(D)})}function x(N){const V=i.get(N);V&&(!o||!jn(V,o))?v(V):o&&Tl(o),i.delete(N),s.delete(N)}oi(()=>[t.include,t.exclude],([N,V])=>{N&&S(D=>es(N,D)),V&&S(D=>!es(V,D))},{flush:"post",deep:!0});let k=null;const F=()=>{k!=null&&(ea(n.subTree.type)?Xe(()=>{i.set(k,ko(n.subTree))},n.subTree.suspense):i.set(k,ko(n.subTree)))};return ka(F),fu(F),xa(()=>{i.forEach(N=>{const{subTree:V,suspense:D}=n,B=ko(V);if(N.type===B.type&&N.key===B.key){Tl(B);const K=B.component.da;K&&Xe(K,D);return}v(N)})}),()=>{if(k=null,!e.default)return o=null;const N=e.default(),V=N[0];if(N.length>1)return o=null,N;if(!xs(V)||!(V.shapeFlag&4)&&!(V.shapeFlag&128))return o=null,V;let D=ko(V);if(D.type===mt)return o=null,D;const B=D.type,K=lc(Tr(D)?D.type.__asyncResolved||{}:B),{include:I,exclude:y,max:_}=t;if(I&&(!K||!es(I,K))||y&&K&&es(y,K))return D.shapeFlag&=-257,o=D,V;const T=D.key==null?B:D.key,R=i.get(T);return D.el&&(D=vn(D),V.shapeFlag&128&&(V.ssContent=D)),k=T,R?(D.el=R.el,D.component=R.component,D.transition&&tr(D,D.transition),D.shapeFlag|=512,s.delete(T),s.add(T)):(s.add(T),_&&s.size>parseInt(_,10)&&x(s.values().next().value)),D.shapeFlag|=256,o=D,ea(V.type)?V:D}}},wk=RE;function es(t,e){return ae(t)?t.some(n=>es(n,e)):Be(t)?t.split(",").includes(e):Av(t)?(t.lastIndex=0,t.test(e)):!1}function SE(t,e){Ng(t,"a",e)}function CE(t,e){Ng(t,"da",e)}function Ng(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pa(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ca(i.parent.vnode)&&PE(r,e,n,i),i=i.parent}}function PE(t,e,n,r){const i=Pa(e,t,r,!0);Dg(()=>{Gc(r[e],i)},n)}function Tl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ko(t){return t.shapeFlag&128?t.ssContent:t}function Pa(t,e,n=et,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{or();const l=Ks(n),c=zt(e,n,t,o);return l(),ar(),c});return r?i.unshift(s):i.push(s),s}}const In=t=>(e,n=et)=>{(!Da||t==="sp")&&Pa(t,(...r)=>e(...r),n)},kE=In("bm"),ka=In("m"),xE=In("bu"),fu=In("u"),xa=In("bum"),Dg=In("um"),OE=In("sp"),NE=In("rtg"),DE=In("rtc");function VE(t,e=et){Pa("ec",t,e)}const Vg="components";function LE(t,e){return FE(Vg,t,!0,e)||t}const ME=Symbol.for("v-ndc");function FE(t,e,n=!0,r=!1){const i=Ye||et;if(i){const s=i.type;if(t===Vg){const l=lc(s,!1);if(l&&(l===e||l===Ht(e)||l===ba(Ht(e))))return s}const o=mf(i[t]||s[t],e)||mf(i.appContext[t],e);return!o&&r?s:o}}function mf(t,e){return t&&(t[e]||t[Ht(e)]||t[ba(Ht(e))])}function Tk(t,e,n,r){let i;const s=n&&n[r],o=ae(t);if(o||Be(t)){const l=o&&Qn(t);let c=!1;l&&(c=!Ft(t),t=Aa(t)),i=new Array(t.length);for(let h=0,f=t.length;h<f;h++)i[h]=e(c?pt(t[h]):t[h],h,void 0,s&&s[h])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,s&&s[l])}else if(Le(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,s&&s[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];i[c]=e(t[f],f,c,s&&s[c])}}else i=[];return n&&(n[r]=i),i}function Ik(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ae(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function bk(t,e,n={},r,i){if(Ye.ce||Ye.parent&&Tr(Ye.parent)&&Ye.parent.ce)return e!=="default"&&(n.name=e),ta(),na(Rt,null,[bt("slot",n,r&&r())],64);let s=t[e];s&&s._c&&(s._d=!1),ta();const o=s&&Lg(s(n)),l=na(Rt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Lg(t){return t.some(e=>xs(e)?!(e.type===mt||e.type===Rt&&!Lg(e.children)):!0)?t:null}const rc=t=>t?tm(t)?Va(t):rc(t.parent):null,ds=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rc(t.parent),$root:t=>rc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>du(t),$forceUpdate:t=>t.f||(t.f=()=>{cu(t.update)}),$nextTick:t=>t.n||(t.n=lu.bind(t.proxy)),$watch:t=>ow.bind(t)}),Il=(t,e)=>t!==De&&!t.__isScriptSetup&&Pe(t,e),UE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Il(r,e))return o[e]=1,r[e];if(i!==De&&Pe(i,e))return o[e]=2,i[e];if((h=t.propsOptions[0])&&Pe(h,e))return o[e]=3,s[e];if(n!==De&&Pe(n,e))return o[e]=4,n[e];ic&&(o[e]=0)}}const f=ds[e];let p,g;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==De&&Pe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Pe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Il(i,e)?(i[e]=n,!0):r!==De&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||t!==De&&Pe(t,o)||Il(e,o)||(l=s[0])&&Pe(l,o)||Pe(r,o)||Pe(ds,o)||Pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _f(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ic=!0;function BE(t){const e=du(t),n=t.proxy,r=t.ctx;ic=!1,e.beforeCreate&&yf(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:v,updated:S,activated:x,deactivated:k,beforeDestroy:F,beforeUnmount:N,destroyed:V,unmounted:D,render:B,renderTracked:K,renderTriggered:I,errorCaptured:y,serverPrefetch:_,expose:T,inheritAttrs:R,components:A,directives:w,filters:Q}=e;if(h&&$E(h,r,null),o)for(const ue in o){const ye=o[ue];de(ye)&&(r[ue]=ye.bind(n))}if(i){const ue=i.call(n,n);Le(ue)&&(t.data=Mr(ue))}if(ic=!0,s)for(const ue in s){const ye=s[ue],Ct=de(ye)?ye.bind(n,n):de(ye.get)?ye.get.bind(n,n):jt,Ut=!de(ye)&&de(ye.set)?ye.set.bind(n):jt,Ot=fe({get:Ct,set:Ut});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Me=>Ot.value=Me})}if(l)for(const ue in l)Mg(l[ue],r,n,ue);if(c){const ue=de(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(ye=>{Mo(ye,ue[ye])})}f&&yf(f,t,"c");function we(ue,ye){ae(ye)?ye.forEach(Ct=>ue(Ct.bind(n))):ye&&ue(ye.bind(n))}if(we(kE,p),we(ka,g),we(xE,v),we(fu,S),we(SE,x),we(CE,k),we(VE,y),we(DE,K),we(NE,I),we(xa,N),we(Dg,D),we(OE,_),ae(T))if(T.length){const ue=t.exposed||(t.exposed={});T.forEach(ye=>{Object.defineProperty(ue,ye,{get:()=>n[ye],set:Ct=>n[ye]=Ct})})}else t.exposed||(t.exposed={});B&&t.render===jt&&(t.render=B),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),w&&(t.directives=w),_&&Og(t)}function $E(t,e,n=jt){ae(t)&&(t=sc(t));for(const r in t){const i=t[r];let s;Le(i)?"default"in i?s=Zt(i.from||r,i.default,!0):s=Zt(i.from||r):s=Zt(i),ze(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function yf(t,e,n){zt(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mg(t,e,n,r){let i=r.includes(".")?Jg(n,r):()=>n[r];if(Be(t)){const s=e[t];de(s)&&oi(i,s)}else if(de(t))oi(i,t.bind(n));else if(Le(t))if(ae(t))t.forEach(s=>Mg(s,e,n,r));else{const s=de(t.handler)?t.handler.bind(n):e[t.handler];de(s)&&oi(i,s,t)}}function du(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,l=s.get(e);let c;return l?c=l:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(h=>Xo(c,h,o,!0)),Xo(c,e,o)),Le(e)&&s.set(e,c),c}function Xo(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Xo(t,s,n,!0),i&&i.forEach(o=>Xo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=jE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const jE={data:vf,props:Ef,emits:Ef,methods:ts,computed:ts,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ts,directives:ts,watch:HE,provide:vf,inject:qE};function vf(t,e){return e?t?function(){return Ge(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function qE(t,e){return ts(sc(t),sc(e))}function sc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?Ge(Object.create(null),t,e):e}function Ef(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:Ge(Object.create(null),_f(t),_f(e!=null?e:{})):e}function HE(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function Fg(){return{app:null,config:{isNativeTag:Iv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zE=0;function KE(t,e){return function(r,i=null){de(r)||(r=Ge({},r)),i!=null&&!Le(i)&&(i=null);const s=Fg(),o=new WeakSet,l=[];let c=!1;const h=s.app={_uid:zE++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Sw,get config(){return s.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(h,...p)):de(f)&&(o.add(f),f(h,...p))),h},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),h},component(f,p){return p?(s.components[f]=p,h):s.components[f]},directive(f,p){return p?(s.directives[f]=p,h):s.directives[f]},mount(f,p,g){if(!c){const v=h._ceVNode||bt(r,i);return v.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(v,f):t(v,f,g),c=!0,h._container=f,f.__vue_app__=h,Va(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(zt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return s.provides[f]=p,h},runWithContext(f){const p=Ir;Ir=h;try{return f()}finally{Ir=p}}};return h}}let Ir=null;function Mo(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=et||Ye;if(r||Ir){const i=Ir?Ir._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function WE(){return!!(et||Ye||Ir)}const Ug={},Bg=()=>Object.create(Ug),$g=t=>Object.getPrototypeOf(t)===Ug;function GE(t,e,n,r=!1){const i={},s=Bg();t.propsDefaults=Object.create(null),jg(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:pg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function QE(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,l=be(i),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Oa(t.emitsOptions,g))continue;const v=e[g];if(c)if(Pe(s,g))v!==s[g]&&(s[g]=v,h=!0);else{const S=Ht(g);i[S]=oc(c,l,S,v,t,!1)}else v!==s[g]&&(s[g]=v,h=!0)}}}else{jg(t,e,i,s)&&(h=!0);let f;for(const p in l)(!e||!Pe(e,p)&&((f=Lr(p))===p||!Pe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=oc(c,l,p,void 0,t,!0)):delete i[p]);if(s!==l)for(const p in s)(!e||!Pe(e,p)&&!0)&&(delete s[p],h=!0)}h&&yn(t.attrs,"set","")}function jg(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(cs(c))continue;const h=e[c];let f;i&&Pe(i,f=Ht(c))?!s||!s.includes(f)?n[f]=h:(l||(l={}))[f]=h:Oa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(s){const c=be(n),h=l||De;for(let f=0;f<s.length;f++){const p=s[f];n[p]=oc(i,c,p,h[p],t,!Pe(h,p))}}return o}function oc(t,e,n,r,i,s){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const f=Ks(i);r=h[n]=c.call(null,e),f()}}else r=c;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===Lr(n))&&(r=!0))}return r}const JE=new WeakMap;function qg(t,e,n=!1){const r=n?JE:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},l=[];let c=!1;if(!de(t)){const f=p=>{c=!0;const[g,v]=qg(p,e,!0);Ge(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!c)return Le(t)&&r.set(t,ri),ri;if(ae(s))for(let f=0;f<s.length;f++){const p=Ht(s[f]);wf(p)&&(o[p]=De)}else if(s)for(const f in s){const p=Ht(f);if(wf(p)){const g=s[f],v=o[p]=ae(g)||de(g)?{type:g}:Ge({},g),S=v.type;let x=!1,k=!0;if(ae(S))for(let F=0;F<S.length;++F){const N=S[F],V=de(N)&&N.name;if(V==="Boolean"){x=!0;break}else V==="String"&&(k=!1)}else x=de(S)&&S.name==="Boolean";v[0]=x,v[1]=k,(x||Pe(v,"default"))&&l.push(p)}}const h=[o,l];return Le(t)&&r.set(t,h),h}function wf(t){return t[0]!=="$"&&!cs(t)}const Hg=t=>t[0]==="_"||t==="$stable",pu=t=>ae(t)?t.map(Yt):[Yt(t)],YE=(t,e,n)=>{if(e._n)return e;const r=EE((...i)=>pu(e(...i)),n);return r._c=!1,r},zg=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Hg(i))continue;const s=t[i];if(de(s))e[i]=YE(i,s,r);else if(s!=null){const o=pu(s);e[i]=()=>o}}},Kg=(t,e)=>{const n=pu(e);t.slots.default=()=>n},Wg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},XE=(t,e,n)=>{const r=t.slots=Bg();if(t.vnode.shapeFlag&32){const i=e._;i?(Wg(r,e,n),n&&Kp(r,"_",i,!0)):zg(e,r)}else e&&Kg(t,e)},ZE=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?s=!1:Wg(i,e,n):(s=!e.$stable,zg(e,i)),o=e}else e&&(Kg(t,e),o={default:1});if(s)for(const l in i)!Hg(l)&&o[l]==null&&delete i[l]},Xe=dw;function ew(t){return tw(t)}function tw(t,e){const n=Wp();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:v=jt,insertStaticContent:S}=t,x=(E,b,P,U=null,L=null,j=null,J=void 0,W=null,z=!!b.dynamicChildren)=>{if(E===b)return;E&&!jn(E,b)&&(U=M(E),Me(E,L,j,!0),E=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:X}=b;switch(q){case Na:k(E,b,P,U);break;case mt:F(E,b,P,U);break;case Rl:E==null&&N(b,P,U,J);break;case Rt:A(E,b,P,U,L,j,J,W,z);break;default:X&1?B(E,b,P,U,L,j,J,W,z):X&6?w(E,b,P,U,L,j,J,W,z):(X&64||X&128)&&q.process(E,b,P,U,L,j,J,W,z,ee)}ie!=null&&L&&nc(ie,E&&E.ref,j,b||E,!b)},k=(E,b,P,U)=>{if(E==null)r(b.el=l(b.children),P,U);else{const L=b.el=E.el;b.children!==E.children&&h(L,b.children)}},F=(E,b,P,U)=>{E==null?r(b.el=c(b.children||""),P,U):b.el=E.el},N=(E,b,P,U)=>{[E.el,E.anchor]=S(E.children,b,P,U,E.el,E.anchor)},V=({el:E,anchor:b},P,U)=>{let L;for(;E&&E!==b;)L=g(E),r(E,P,U),E=L;r(b,P,U)},D=({el:E,anchor:b})=>{let P;for(;E&&E!==b;)P=g(E),i(E),E=P;i(b)},B=(E,b,P,U,L,j,J,W,z)=>{b.type==="svg"?J="svg":b.type==="math"&&(J="mathml"),E==null?K(b,P,U,L,j,J,W,z):_(E,b,L,j,J,W,z)},K=(E,b,P,U,L,j,J,W)=>{let z,q;const{props:ie,shapeFlag:X,transition:re,dirs:le}=E;if(z=E.el=o(E.type,j,ie&&ie.is,ie),X&8?f(z,E.children):X&16&&y(E.children,z,null,U,L,bl(E,j),J,W),le&&pr(E,null,U,"created"),I(z,E,E.scopeId,J,U),ie){for(const ge in ie)ge!=="value"&&!cs(ge)&&s(z,ge,null,ie[ge],j,U);"value"in ie&&s(z,"value",null,ie.value,j),(q=ie.onVnodeBeforeMount)&&Mt(q,U,E)}le&&pr(E,null,U,"beforeMount");const se=nw(L,re);se&&re.beforeEnter(z),r(z,b,P),((q=ie&&ie.onVnodeMounted)||se||le)&&Xe(()=>{q&&Mt(q,U,E),se&&re.enter(z),le&&pr(E,null,U,"mounted")},L)},I=(E,b,P,U,L)=>{if(P&&v(E,P),U)for(let j=0;j<U.length;j++)v(E,U[j]);if(L){let j=L.subTree;if(b===j||ea(j.type)&&(j.ssContent===b||j.ssFallback===b)){const J=L.vnode;I(E,J,J.scopeId,J.slotScopeIds,L.parent)}}},y=(E,b,P,U,L,j,J,W,z=0)=>{for(let q=z;q<E.length;q++){const ie=E[q]=W?Un(E[q]):Yt(E[q]);x(null,ie,b,P,U,L,j,J,W)}},_=(E,b,P,U,L,j,J)=>{const W=b.el=E.el;let{patchFlag:z,dynamicChildren:q,dirs:ie}=b;z|=E.patchFlag&16;const X=E.props||De,re=b.props||De;let le;if(P&&gr(P,!1),(le=re.onVnodeBeforeUpdate)&&Mt(le,P,b,E),ie&&pr(b,E,P,"beforeUpdate"),P&&gr(P,!0),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&f(W,""),q?T(E.dynamicChildren,q,W,P,U,bl(b,L),j):J||ye(E,b,W,null,P,U,bl(b,L),j,!1),z>0){if(z&16)R(W,X,re,P,L);else if(z&2&&X.class!==re.class&&s(W,"class",null,re.class,L),z&4&&s(W,"style",X.style,re.style,L),z&8){const se=b.dynamicProps;for(let ge=0;ge<se.length;ge++){const Te=se[ge],ct=X[Te],Qe=re[Te];(Qe!==ct||Te==="value")&&s(W,Te,ct,Qe,L,P)}}z&1&&E.children!==b.children&&f(W,b.children)}else!J&&q==null&&R(W,X,re,P,L);((le=re.onVnodeUpdated)||ie)&&Xe(()=>{le&&Mt(le,P,b,E),ie&&pr(b,E,P,"updated")},U)},T=(E,b,P,U,L,j,J)=>{for(let W=0;W<b.length;W++){const z=E[W],q=b[W],ie=z.el&&(z.type===Rt||!jn(z,q)||z.shapeFlag&70)?p(z.el):P;x(z,q,ie,null,U,L,j,J,!0)}},R=(E,b,P,U,L)=>{if(b!==P){if(b!==De)for(const j in b)!cs(j)&&!(j in P)&&s(E,j,b[j],null,L,U);for(const j in P){if(cs(j))continue;const J=P[j],W=b[j];J!==W&&j!=="value"&&s(E,j,W,J,L,U)}"value"in P&&s(E,"value",b.value,P.value,L)}},A=(E,b,P,U,L,j,J,W,z)=>{const q=b.el=E?E.el:l(""),ie=b.anchor=E?E.anchor:l("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:le}=b;le&&(W=W?W.concat(le):le),E==null?(r(q,P,U),r(ie,P,U),y(b.children||[],P,ie,L,j,J,W,z)):X>0&&X&64&&re&&E.dynamicChildren?(T(E.dynamicChildren,re,P,L,j,J,W),(b.key!=null||L&&b===L.subTree)&&gu(E,b,!0)):ye(E,b,P,ie,L,j,J,W,z)},w=(E,b,P,U,L,j,J,W,z)=>{b.slotScopeIds=W,E==null?b.shapeFlag&512?L.ctx.activate(b,P,U,J,z):Q(b,P,U,L,j,J,z):_e(E,b,z)},Q=(E,b,P,U,L,j,J)=>{const W=E.component=ww(E,U,L);if(Ca(E)&&(W.ctx.renderer=ee),Tw(W,!1,J),W.asyncDep){if(L&&L.registerDep(W,we,J),!E.el){const z=W.subTree=bt(mt);F(null,z,b,P)}}else we(W,E,b,P,L,j,J)},_e=(E,b,P)=>{const U=b.component=E.component;if(hw(E,b,P))if(U.asyncDep&&!U.asyncResolved){ue(U,b,P);return}else U.next=b,U.update();else b.el=E.el,U.vnode=b},we=(E,b,P,U,L,j,J)=>{const W=()=>{if(E.isMounted){let{next:X,bu:re,u:le,parent:se,vnode:ge}=E;{const Je=Gg(E);if(Je){X&&(X.el=ge.el,ue(E,X,J)),Je.asyncDep.then(()=>{E.isUnmounted||W()});return}}let Te=X,ct;gr(E,!1),X?(X.el=ge.el,ue(E,X,J)):X=ge,re&&us(re),(ct=X.props&&X.props.onVnodeBeforeUpdate)&&Mt(ct,se,X,ge),gr(E,!0);const Qe=Al(E),Pt=E.subTree;E.subTree=Qe,x(Pt,Qe,p(Pt.el),M(Pt),E,L,j),X.el=Qe.el,Te===null&&fw(E,Qe.el),le&&Xe(le,L),(ct=X.props&&X.props.onVnodeUpdated)&&Xe(()=>Mt(ct,se,X,ge),L)}else{let X;const{el:re,props:le}=b,{bm:se,m:ge,parent:Te,root:ct,type:Qe}=E,Pt=Tr(b);if(gr(E,!1),se&&us(se),!Pt&&(X=le&&le.onVnodeBeforeMount)&&Mt(X,Te,b),gr(E,!0),re&&xe){const Je=()=>{E.subTree=Al(E),xe(re,E.subTree,E,L,null)};Pt&&Qe.__asyncHydrate?Qe.__asyncHydrate(re,E,Je):Je()}else{ct.ce&&ct.ce._injectChildStyle(Qe);const Je=E.subTree=Al(E);x(null,Je,P,U,E,L,j),b.el=Je.el}if(ge&&Xe(ge,L),!Pt&&(X=le&&le.onVnodeMounted)){const Je=b;Xe(()=>Mt(X,Te,Je),L)}(b.shapeFlag&256||Te&&Tr(Te.vnode)&&Te.vnode.shapeFlag&256)&&E.a&&Xe(E.a,L),E.isMounted=!0,b=P=U=null}};E.scope.on();const z=E.effect=new eg(W);E.scope.off();const q=E.update=z.run.bind(z),ie=E.job=z.runIfDirty.bind(z);ie.i=E,ie.id=E.uid,z.scheduler=()=>cu(ie),gr(E,!0),q()},ue=(E,b,P)=>{b.component=E;const U=E.vnode.props;E.vnode=b,E.next=null,QE(E,b.props,U,P),ZE(E,b.children,P),or(),ff(E),ar()},ye=(E,b,P,U,L,j,J,W,z=!1)=>{const q=E&&E.children,ie=E?E.shapeFlag:0,X=b.children,{patchFlag:re,shapeFlag:le}=b;if(re>0){if(re&128){Ut(q,X,P,U,L,j,J,W,z);return}else if(re&256){Ct(q,X,P,U,L,j,J,W,z);return}}le&8?(ie&16&&At(q,L,j),X!==q&&f(P,X)):ie&16?le&16?Ut(q,X,P,U,L,j,J,W,z):At(q,L,j,!0):(ie&8&&f(P,""),le&16&&y(X,P,U,L,j,J,W,z))},Ct=(E,b,P,U,L,j,J,W,z)=>{E=E||ri,b=b||ri;const q=E.length,ie=b.length,X=Math.min(q,ie);let re;for(re=0;re<X;re++){const le=b[re]=z?Un(b[re]):Yt(b[re]);x(E[re],le,P,null,L,j,J,W,z)}q>ie?At(E,L,j,!0,!1,X):y(b,P,U,L,j,J,W,z,X)},Ut=(E,b,P,U,L,j,J,W,z)=>{let q=0;const ie=b.length;let X=E.length-1,re=ie-1;for(;q<=X&&q<=re;){const le=E[q],se=b[q]=z?Un(b[q]):Yt(b[q]);if(jn(le,se))x(le,se,P,null,L,j,J,W,z);else break;q++}for(;q<=X&&q<=re;){const le=E[X],se=b[re]=z?Un(b[re]):Yt(b[re]);if(jn(le,se))x(le,se,P,null,L,j,J,W,z);else break;X--,re--}if(q>X){if(q<=re){const le=re+1,se=le<ie?b[le].el:U;for(;q<=re;)x(null,b[q]=z?Un(b[q]):Yt(b[q]),P,se,L,j,J,W,z),q++}}else if(q>re)for(;q<=X;)Me(E[q],L,j,!0),q++;else{const le=q,se=q,ge=new Map;for(q=se;q<=re;q++){const nt=b[q]=z?Un(b[q]):Yt(b[q]);nt.key!=null&&ge.set(nt.key,q)}let Te,ct=0;const Qe=re-se+1;let Pt=!1,Je=0;const Rn=new Array(Qe);for(q=0;q<Qe;q++)Rn[q]=0;for(q=le;q<=X;q++){const nt=E[q];if(ct>=Qe){Me(nt,L,j,!0);continue}let Nt;if(nt.key!=null)Nt=ge.get(nt.key);else for(Te=se;Te<=re;Te++)if(Rn[Te-se]===0&&jn(nt,b[Te])){Nt=Te;break}Nt===void 0?Me(nt,L,j,!0):(Rn[Nt-se]=q+1,Nt>=Je?Je=Nt:Pt=!0,x(nt,b[Nt],P,null,L,j,J,W,z),ct++)}const Vi=Pt?rw(Rn):ri;for(Te=Vi.length-1,q=Qe-1;q>=0;q--){const nt=se+q,Nt=b[nt],so=nt+1<ie?b[nt+1].el:U;Rn[q]===0?x(null,Nt,P,so,L,j,J,W,z):Pt&&(Te<0||q!==Vi[Te]?Ot(Nt,P,so,2):Te--)}}},Ot=(E,b,P,U,L=null)=>{const{el:j,type:J,transition:W,children:z,shapeFlag:q}=E;if(q&6){Ot(E.component.subTree,b,P,U);return}if(q&128){E.suspense.move(b,P,U);return}if(q&64){J.move(E,b,P,ee);return}if(J===Rt){r(j,b,P);for(let X=0;X<z.length;X++)Ot(z[X],b,P,U);r(E.anchor,b,P);return}if(J===Rl){V(E,b,P);return}if(U!==2&&q&1&&W)if(U===0)W.beforeEnter(j),r(j,b,P),Xe(()=>W.enter(j),L);else{const{leave:X,delayLeave:re,afterLeave:le}=W,se=()=>r(j,b,P),ge=()=>{X(j,()=>{se(),le&&le()})};re?re(j,se,ge):ge()}else r(j,b,P)},Me=(E,b,P,U=!1,L=!1)=>{const{type:j,props:J,ref:W,children:z,dynamicChildren:q,shapeFlag:ie,patchFlag:X,dirs:re,cacheIndex:le}=E;if(X===-2&&(L=!1),W!=null&&nc(W,null,P,E,!0),le!=null&&(b.renderCache[le]=void 0),ie&256){b.ctx.deactivate(E);return}const se=ie&1&&re,ge=!Tr(E);let Te;if(ge&&(Te=J&&J.onVnodeBeforeUnmount)&&Mt(Te,b,E),ie&6)Qt(E.component,P,U);else{if(ie&128){E.suspense.unmount(P,U);return}se&&pr(E,null,b,"beforeUnmount"),ie&64?E.type.remove(E,b,P,ee,U):q&&!q.hasOnce&&(j!==Rt||X>0&&X&64)?At(q,b,P,!1,!0):(j===Rt&&X&384||!L&&ie&16)&&At(z,b,P),U&&Fe(E)}(ge&&(Te=J&&J.onVnodeUnmounted)||se)&&Xe(()=>{Te&&Mt(Te,b,E),se&&pr(E,null,b,"unmounted")},P)},Fe=E=>{const{type:b,el:P,anchor:U,transition:L}=E;if(b===Rt){An(P,U);return}if(b===Rl){D(E);return}const j=()=>{i(P),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:J,delayLeave:W}=L,z=()=>J(P,j);W?W(E.el,j,z):z()}else j()},An=(E,b)=>{let P;for(;E!==b;)P=g(E),i(E),E=P;i(b)},Qt=(E,b,P)=>{const{bum:U,scope:L,job:j,subTree:J,um:W,m:z,a:q}=E;Zo(z),Zo(q),U&&us(U),L.stop(),j&&(j.flags|=8,Me(J,E,b,P)),W&&Xe(W,b),Xe(()=>{E.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},At=(E,b,P,U=!1,L=!1,j=0)=>{for(let J=j;J<E.length;J++)Me(E[J],b,P,U,L)},M=E=>{if(E.shapeFlag&6)return M(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const b=g(E.anchor||E.el),P=b&&b[bg];return P?g(P):b};let Z=!1;const Y=(E,b,P)=>{E==null?b._vnode&&Me(b._vnode,null,null,!0):x(b._vnode||null,E,b,null,null,null,P),b._vnode=E,Z||(Z=!0,ff(),Eg(),Z=!1)},ee={p:x,um:Me,m:Ot,r:Fe,mt:Q,mc:y,pc:ye,pbc:T,n:M,o:t};let ve,xe;return e&&([ve,xe]=e(ee)),{render:Y,hydrate:ve,createApp:KE(Y,ve)}}function bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function gr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function nw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gu(t,e,n=!1){const r=t.children,i=e.children;if(ae(r)&&ae(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Un(i[s]),l.el=o.el),!n&&l.patchFlag!==-2&&gu(o,l)),l.type===Na&&(l.el=o.el)}}function rw(t){const e=t.slice(),n=[0];let r,i,s,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(i=n[n.length-1],t[i]<h){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,t[n[l]]<h?s=l+1:o=l;h<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Gg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gg(e)}function Zo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const iw=Symbol.for("v-scx"),sw=()=>Zt(iw);function oi(t,e,n){return Qg(t,e,n)}function Qg(t,e,n=De){const{immediate:r,deep:i,flush:s,once:o}=n,l=Ge({},n);let c;if(Da)if(s==="sync"){const g=sw();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!e||r)l.once=!0;else{const g=()=>{};return g.stop=jt,g.resume=jt,g.pause=jt,g}const h=et;l.call=(g,v,S)=>zt(g,h,v,S);let f=!1;s==="post"?l.scheduler=g=>{Xe(g,h&&h.suspense)}:s!=="sync"&&(f=!0,l.scheduler=(g,v)=>{v?g():cu(g)}),l.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=mE(t,e,l);return c&&c.push(p),p}function ow(t,e,n){const r=this.proxy,i=Be(t)?t.includes(".")?Jg(r,t):()=>r[t]:t.bind(r,r);let s;de(e)?s=e:(s=e.handler,n=e);const o=Ks(this),l=Qg(i,s.bind(r),n);return o(),l}function Jg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const aw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Lr(e)}Modifiers`];function lw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let i=n;const s=e.startsWith("update:"),o=s&&aw(r,e.slice(7));o&&(o.trim&&(i=n.map(f=>Be(f)?f.trim():f)),o.number&&(i=n.map(Pv)));let l,c=r[l=ml(e)]||r[l=ml(Ht(e))];!c&&s&&(c=r[l=ml(Lr(e))]),c&&zt(c,t,6,i);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,zt(h,t,6,i)}}function Yg(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},l=!1;if(!de(t)){const c=h=>{const f=Yg(h,e,!0);f&&(l=!0,Ge(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!l?(Le(t)&&r.set(t,null),null):(ae(s)?s.forEach(c=>o[c]=null):Ge(o,s),Le(t)&&r.set(t,o),o)}function Oa(t,e){return!t||!Ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Lr(e))||Pe(t,e))}function Al(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:v,ctx:S,inheritAttrs:x}=t,k=Yo(t);let F,N;try{if(n.shapeFlag&4){const D=i||r,B=D;F=Yt(h.call(B,D,f,p,v,g,S)),N=l}else{const D=e;F=Yt(D.length>1?D(p,{attrs:l,slots:o,emit:c}):D(p,null)),N=e.props?l:cw(l)}}catch(D){ps.length=0,Sa(D,t,1),F=bt(mt)}let V=F;if(N&&x!==!1){const D=Object.keys(N),{shapeFlag:B}=V;D.length&&B&7&&(s&&D.some(Wc)&&(N=uw(N,s)),V=vn(V,N,!1,!0))}return n.dirs&&(V=vn(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&tr(V,n.transition),F=V,Yo(k),F}const cw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ta(n))&&((e||(e={}))[n]=t[n]);return e},uw=(t,e)=>{const n={};for(const r in t)(!Wc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function hw(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:l,patchFlag:c}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Tf(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Oa(h,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Tf(r,o,h):!0:!!o;return!1}function Tf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Oa(n,s))return!0}return!1}function fw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ea=t=>t.__isSuspense;function dw(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):vE(t)}const Rt=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Rl=Symbol.for("v-stc"),ps=[];let xt=null;function ta(t=!1){ps.push(xt=t?null:[])}function pw(){ps.pop(),xt=ps[ps.length-1]||null}let ks=1;function If(t){ks+=t,t<0&&xt&&(xt.hasOnce=!0)}function Xg(t){return t.dynamicChildren=ks>0?xt||ri:null,pw(),ks>0&&xt&&xt.push(t),t}function Ak(t,e,n,r,i,s){return Xg(em(t,e,n,r,i,s,!0))}function na(t,e,n,r,i){return Xg(bt(t,e,n,r,i,!0))}function xs(t){return t?t.__v_isVNode===!0:!1}function jn(t,e){return t.type===e.type&&t.key===e.key}const Zg=({key:t})=>t!=null?t:null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||ze(t)||de(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function em(t,e=null,n=null,r=0,i=null,s=t===Rt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zg(e),ref:e&&Fo(e),scopeId:Tg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return l?(mu(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),ks>0&&!o&&xt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&xt.push(c),c}const bt=gw;function gw(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ME)&&(t=mt),xs(t)){const l=vn(t,e,!0);return n&&mu(l,n),ks>0&&!s&&xt&&(l.shapeFlag&6?xt[xt.indexOf(t)]=l:xt.push(l)),l.patchFlag=-2,l}if(Rw(t)&&(t=t.__vccOpts),e){e=mw(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=Yc(l)),Le(c)&&(su(c)&&!ae(c)&&(c=Ge({},c)),e.style=Jc(c))}const o=Be(t)?1:ea(t)?128:Ag(t)?64:Le(t)?4:de(t)?2:0;return em(t,e,n,r,i,o,s,!0)}function mw(t){return t?su(t)||$g(t)?Ge({},t):t:null}function vn(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:c}=t,h=e?yw(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Zg(h),ref:e&&e.ref?n&&s?ae(s)?s.concat(Fo(e)):[s,Fo(e)]:Fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&tr(f,c.clone(f)),f}function _w(t=" ",e=0){return bt(Na,null,t,e)}function Rk(t="",e=!1){return e?(ta(),na(mt,null,t)):bt(mt,null,t)}function Yt(t){return t==null||typeof t=="boolean"?bt(mt):ae(t)?bt(Rt,null,t.slice()):typeof t=="object"?Un(t):bt(Na,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function mu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),mu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!$g(e)?e._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),r&64?(n=16,e=[_w(e)]):n=8);t.children=e,t.shapeFlag|=n}function yw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Yc([e.class,r.class]));else if(i==="style")e.style=Jc([e.style,r.style]);else if(Ta(i)){const s=e[i],o=r[i];o&&s!==o&&!(ae(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Mt(t,e,n,r=null){zt(t,e,7,[n,r])}const vw=Fg();let Ew=0;function ww(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||vw,s={uid:Ew++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qg(r,i),emitsOptions:Yg(r,i),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=lw.bind(null,s),t.ce&&t.ce(s),s}let et=null;const Si=()=>et||Ye;let ra,ac;{const t=Wp(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};ra=e("__VUE_INSTANCE_SETTERS__",n=>et=n),ac=e("__VUE_SSR_SETTERS__",n=>Da=n)}const Ks=t=>{const e=et;return ra(t),t.scope.on(),()=>{t.scope.off(),ra(e)}},bf=()=>{et&&et.scope.off(),ra(null)};function tm(t){return t.vnode.shapeFlag&4}let Da=!1;function Tw(t,e=!1,n=!1){e&&ac(e);const{props:r,children:i}=t.vnode,s=tm(t);GE(t,r,s,e),XE(t,i,n);const o=s?Iw(t,e):void 0;return e&&ac(!1),o}function Iw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,UE);const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Aw(t):null,s=Ks(t);or();const o=zs(r,t,0,[t.props,i]);if(ar(),s(),qp(o)){if(Tr(t)||Og(t),o.then(bf,bf),e)return o.then(l=>{Af(t,l,e)}).catch(l=>{Sa(l,t,0)});t.asyncDep=o}else Af(t,o,e)}else nm(t,e)}function Af(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=_g(e)),nm(t,n)}let Rf;function nm(t,e,n){const r=t.type;if(!t.render){if(!e&&Rf&&!r.render){const i=r.template||du(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=Ge(Ge({isCustomElement:s,delimiters:l},o),c);r.render=Rf(i,h)}}t.render=r.render||jt}{const i=Ks(t);or();try{BE(t)}finally{ar(),i()}}}const bw={get(t,e){return yt(t,"get",""),t[e]}};function Aw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,bw),slots:t.slots,emit:t.emit,expose:e}}function Va(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_g(Fr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ds)return ds[n](t)},has(e,n){return n in e||n in ds}})):t.proxy}function lc(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Rw(t){return de(t)&&"__vccOpts"in t}const fe=(t,e)=>pE(t,e,Da);function he(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ae(e)?xs(e)?bt(t,null,[e]):bt(t,e):bt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xs(n)&&(n=[n]),bt(t,e,n))}const Sw="3.5.8";/**
* @vue/runtime-dom v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cc;const Sf=typeof window!="undefined"&&window.trustedTypes;if(Sf)try{cc=Sf.createPolicy("vue",{createHTML:t=>t})}catch{}const rm=cc?t=>cc.createHTML(t):t=>t,Cw="http://www.w3.org/2000/svg",Pw="http://www.w3.org/1998/Math/MathML",fn=typeof document!="undefined"?document:null,Cf=fn&&fn.createElement("template"),kw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?fn.createElementNS(Cw,t):e==="mathml"?fn.createElementNS(Pw,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Cf.innerHTML=rm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Cf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xn="transition",Qi="animation",gi=Symbol("_vtc"),im={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sm=Ge({},Cg,im),xw=t=>(t.displayName="Transition",t.props=sm,t),Ow=xw((t,{slots:e})=>he(AE,om(t),e)),mr=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Pf=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function om(t){const e={};for(const A in t)A in im||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:h=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,S=Nw(i),x=S&&S[0],k=S&&S[1],{onBeforeEnter:F,onEnter:N,onEnterCancelled:V,onLeave:D,onLeaveCancelled:B,onBeforeAppear:K=F,onAppear:I=N,onAppearCancelled:y=V}=e,_=(A,w,Q)=>{Dn(A,w?f:l),Dn(A,w?h:o),Q&&Q()},T=(A,w)=>{A._isLeaving=!1,Dn(A,p),Dn(A,v),Dn(A,g),w&&w()},R=A=>(w,Q)=>{const _e=A?I:N,we=()=>_(w,A,Q);mr(_e,[w,we]),kf(()=>{Dn(w,A?c:s),hn(w,A?f:l),Pf(_e)||xf(w,r,x,we)})};return Ge(e,{onBeforeEnter(A){mr(F,[A]),hn(A,s),hn(A,o)},onBeforeAppear(A){mr(K,[A]),hn(A,c),hn(A,h)},onEnter:R(!1),onAppear:R(!0),onLeave(A,w){A._isLeaving=!0;const Q=()=>T(A,w);hn(A,p),hn(A,g),lm(),kf(()=>{!A._isLeaving||(Dn(A,p),hn(A,v),Pf(D)||xf(A,r,k,Q))}),mr(D,[A,Q])},onEnterCancelled(A){_(A,!1),mr(V,[A])},onAppearCancelled(A){_(A,!0),mr(y,[A])},onLeaveCancelled(A){T(A),mr(B,[A])}})}function Nw(t){if(t==null)return null;if(Le(t))return[Sl(t.enter),Sl(t.leave)];{const e=Sl(t);return[e,e]}}function Sl(t){return kv(t)}function hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[gi]||(t[gi]=new Set)).add(e)}function Dn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[gi];n&&(n.delete(e),n.size||(t[gi]=void 0))}function kf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Dw=0;function xf(t,e,n,r){const i=t._endId=++Dw,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:l,propCount:c}=am(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,g),s()},g=v=>{v.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(h,g)}function am(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),i=r(`${xn}Delay`),s=r(`${xn}Duration`),o=Of(i,s),l=r(`${Qi}Delay`),c=r(`${Qi}Duration`),h=Of(l,c);let f=null,p=0,g=0;e===xn?o>0&&(f=xn,p=o,g=s.length):e===Qi?h>0&&(f=Qi,p=h,g=c.length):(p=Math.max(o,h),f=p>0?o>h?xn:Qi:null,g=f?f===xn?s.length:c.length:0);const v=f===xn&&/\b(transform|all)(,|$)/.test(r(`${xn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:v}}function Of(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Nf(n)+Nf(t[r])))}function Nf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function lm(){return document.body.offsetHeight}function Vw(t,e,n){const r=t[gi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Df=Symbol("_vod"),Lw=Symbol("_vsh"),Mw=Symbol(""),Fw=/(^|;)\s*display\s*:/;function Uw(t,e,n){const r=t.style,i=Be(n);let s=!1;if(n&&!i){if(e)if(Be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Uo(r,l,"")}else for(const o in e)n[o]==null&&Uo(r,o,"");for(const o in n)o==="display"&&(s=!0),Uo(r,o,n[o])}else if(i){if(e!==n){const o=r[Mw];o&&(n+=";"+o),r.cssText=n,s=Fw.test(n)}}else e&&t.removeAttribute("style");Df in t&&(t[Df]=s?r.display:"",t[Lw]&&(r.display="none"))}const Vf=/\s*!important$/;function Uo(t,e,n){if(ae(n))n.forEach(r=>Uo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bw(t,e);Vf.test(n)?t.setProperty(Lr(r),n.replace(Vf,""),"important"):t[r]=n}}const Lf=["Webkit","Moz","ms"],Cl={};function Bw(t,e){const n=Cl[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return Cl[e]=r;r=ba(r);for(let i=0;i<Lf.length;i++){const s=Lf[i]+r;if(s in t)return Cl[e]=s}return e}const Mf="http://www.w3.org/1999/xlink";function Ff(t,e,n,r,i,s=Lv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mf,e.slice(6,e.length)):t.setAttributeNS(Mf,e,n):n==null||s&&!Gp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":sr(n)?String(n):n)}function $w(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Gp(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function jw(t,e,n,r){t.addEventListener(e,n,r)}function qw(t,e,n,r){t.removeEventListener(e,n,r)}const Uf=Symbol("_vei");function Hw(t,e,n,r,i=null){const s=t[Uf]||(t[Uf]={}),o=s[e];if(r&&o)o.value=r;else{const[l,c]=zw(e);if(r){const h=s[e]=Gw(r,i);jw(t,l,h,c)}else o&&(qw(t,l,o,c),s[e]=void 0)}}const Bf=/(?:Once|Passive|Capture)$/;function zw(t){let e;if(Bf.test(t)){e={};let r;for(;r=t.match(Bf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let Pl=0;const Kw=Promise.resolve(),Ww=()=>Pl||(Kw.then(()=>Pl=0),Pl=Date.now());function Gw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(Qw(r,n.value),e,5,[r])};return n.value=t,n.attached=Ww(),n}function Qw(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const $f=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jw=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?Vw(t,r,o):e==="style"?Uw(t,n,r):Ta(e)?Wc(e)||Hw(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yw(t,e,r,o))?($w(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ff(t,e,r,o,s,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ff(t,e,r,o))};function Yw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$f(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return $f(e)&&Be(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!Be(n)))}const cm=new WeakMap,um=new WeakMap,ia=Symbol("_moveCb"),jf=Symbol("_enterCb"),Xw=t=>(delete t.props.mode,t),Zw=Xw({name:"TransitionGroup",props:Ge({},sm,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Si(),r=Sg();let i,s;return fu(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!iT(i[0].el,n.vnode.el,o))return;i.forEach(tT),i.forEach(nT);const l=i.filter(rT);lm(),l.forEach(c=>{const h=c.el,f=h.style;hn(h,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=h[ia]=g=>{g&&g.target!==h||(!g||/transform$/.test(g.propertyName))&&(h.removeEventListener("transitionend",p),h[ia]=null,Dn(h,o))};h.addEventListener("transitionend",p)})}),()=>{const o=be(t),l=om(o);let c=o.tag||Rt;if(i=[],s)for(let h=0;h<s.length;h++){const f=s[h];f.el&&f.el instanceof Element&&(i.push(f),tr(f,Ps(f,l,r,n)),cm.set(f,f.el.getBoundingClientRect()))}s=e.default?uu(e.default()):[];for(let h=0;h<s.length;h++){const f=s[h];f.key!=null&&tr(f,Ps(f,l,r,n))}return bt(c,null,s)}}}),eT=Zw;function tT(t){const e=t.el;e[ia]&&e[ia](),e[jf]&&e[jf]()}function nT(t){um.set(t,t.el.getBoundingClientRect())}function rT(t){const e=cm.get(t),n=um.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function iT(t,e,n){const r=t.cloneNode(),i=t[gi];i&&i.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=am(r);return s.removeChild(r),o}const sT=Ge({patchProp:Jw},kw);let qf;function oT(){return qf||(qf=ew(sT))}const hm=(...t)=>{const e=oT().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=lT(r);if(!i)return;const s=e._component;!de(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,aT(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function aT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lT(t){return Be(t)?document.querySelector(t):t}function La(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}function Sk(t,e){for(const n in e)La(t,n,e[n]);return t}const Pr=Cr(!1);let uc;function cT(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}function uT(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const fm="ontouchstart"in window||window.navigator.maxTouchPoints>0;function hT(t){const e=t.toLowerCase(),n=uT(e),r=cT(e,n),i={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.version,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];if(s===!0||e.indexOf("mobile")!==-1?i.mobile=!0:i.desktop=!0,i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),i.edga||i.edgios||i.edg?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox"),(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&(i.blackberry||i.bb?(r.browser="blackberry",i.blackberry=!0):i.playbook?(r.browser="playbook",i.playbook=!0):i.android?(r.browser="android",i.android=!0):i.kindle?(r.browser="kindle",i.kindle=!0):i.silk&&(r.browser="silk",i.silk=!0)),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")!==-1)i.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)i.bex=!0;else{if(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),Pr.value===!0&&(uc={is:{...i}}),fm===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)){delete i.mac,delete i.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(i,{mobile:!0,ios:!0,platform:o,[o]:!0})}i.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete i.desktop,i.mobile=!0)}return i}const Hf=navigator.userAgent||navigator.vendor||window.opera,fT={has:{touch:!1,webStorage:!1},within:{iframe:!1}},en={userAgent:Hf,is:hT(Hf),has:{touch:fm},within:{iframe:window.self!==window.top}},hc={install(t){const{$q:e}=t;Pr.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,en),Pr.value=!1}),e.platform=Mr(this)):e.platform=this}};{let t;La(en.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(hc,en),Pr.value===!0&&(Object.assign(hc,uc,fT),uc=null)}function Ws(t){return Fr(hu(t))}function dT(t){return Fr(t)}const Gs=(t,e)=>{const n=Mr(t);for(const r in t)La(e,r,()=>n[r],i=>{n[r]=i});return e},kr={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(kr,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function Os(){}function Ck(t){return t.button===0}function pT(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function Pk(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function dm(t){t.stopPropagation()}function fc(t){t.cancelable!==!1&&t.preventDefault()}function zr(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function kk(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",fc,kr.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",fc,kr.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function gT(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],kr[i[3]])})}function mT(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],kr[r[3]])}),t[n]=void 0)}function _T(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const kl=["sm","md","lg","xl"],{passive:zf}=kr;var yT=Gs({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Os,setDebounce:Os,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||en.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=p=>{const[g,v]=s();if(v!==this.height&&(this.height=v),g!==this.width)this.width=g;else if(p!==!0)return;let S=this.sizes;this.gt.xs=g>=S.sm,this.gt.sm=g>=S.md,this.gt.md=g>=S.lg,this.gt.lg=g>=S.xl,this.lt.sm=g<S.sm,this.lt.md=g<S.md,this.lt.lg=g<S.lg,this.lt.xl=g<S.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,S=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",S!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${S}`)),this.name=S)};let l,c={},h=16;this.setSizes=p=>{kl.forEach(g=>{p[g]!==void 0&&(c[g]=p[g])})},this.setDebounce=p=>{h=p};const f=()=>{const p=getComputedStyle(document.body);p.getPropertyValue("--q-size-sm")&&kl.forEach(g=>{this.sizes[g]=parseInt(p.getPropertyValue(`--q-size-${g}`),10)}),this.setSizes=g=>{kl.forEach(v=>{g[v]&&(this.sizes[v]=g[v])}),this.__update(!0)},this.setDebounce=g=>{l!==void 0&&r.removeEventListener("resize",l,zf),l=g>0?_T(this.__update,g):this.__update,r.addEventListener("resize",l,zf)},this.setDebounce(h),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Pr.value===!0?e.push(f):f()}});const it=Gs({isActive:!1,mode:!1},{__media:void 0,set(t){it.mode=t,t==="auto"?(it.__media===void 0&&(it.__media=window.matchMedia("(prefers-color-scheme: dark)"),it.__updateMedia=()=>{it.set("auto")},it.__media.addListener(it.__updateMedia)),t=it.__media.matches):it.__media!==void 0&&(it.__media.removeListener(it.__updateMedia),it.__media=void 0),it.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){it.set(it.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function vT(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let pm=!1;function ET(t){pm=t.isComposing===!0}function wT(t){return pm===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function dc(t,e){return wT(t)===!0?!1:[].concat(e).includes(t.keyCode)}function gm(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function TT({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=gm(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function IT(){const{is:t}=en,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const i=gm(t);i!==void 0&&n.add(`platform-${i}`)}}en.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),en.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function bT(t){for(const e in t)vT(e,t[e])}var AT={install(t){if(this.__installed!==!0){if(Pr.value===!0)IT();else{const{$q:e}=t;e.config.brand!==void 0&&bT(e.config.brand);const n=TT(en,e.config);document.body.classList.add.apply(document.body.classList,n)}en.is.ios===!0&&document.body.addEventListener("touchstart",Os),window.addEventListener("keydown",ET,!0)}}};const mm=()=>!0;function RT(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function ST(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function CT(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return mm;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(RT).map(ST)),()=>e.includes(window.location.hash)}var PT={__history:[],add:Os,remove:Os,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=en.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=mm),this.__history.push(o)},this.remove=o=>{const l=this.__history.indexOf(o);l>=0&&this.__history.splice(l,1)};const i=CT(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Kf={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Wf(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Bn=Gs({__qLang:{}},{getLocale:Wf,set(t=Kf,e){const n={...t,rtl:t.rtl===!0,getLocale:Wf};{if(n.set=Bn.set,Bn.__langConfig===void 0||Bn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Bn.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=Bn.__qLang,Bn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(i=>i!=="set"&&i!=="getLocale")}}),this.set(e||Kf))}});var kT={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const sa=Gs({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=sa.set,Object.assign(sa.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,La(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(i=>i!=="set")}}),this.set(e||kT))}}),xT="_q_",xk="_q_l_",Ok="_q_pc_",Nk="_q_fo_";function Dk(){}const oa={};let _m=!1;function OT(){_m=!0}function xl(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(xl(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}for(s=t.entries(),r=s.next();r.done!==!0;){if(xl(r.value[1],e.get(r.value[0]))!==!0)return!1;r=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(s=>t[s]!==void 0);if(n=i.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(r=n;r--!==0;){const s=i[r];if(xl(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function Ns(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function Vk(t){return Object.prototype.toString.call(t)==="[object Date]"}function Lk(t){return typeof t=="number"&&isFinite(t)}const Gf=[hc,AT,it,yT,PT,Bn,sa];function NT(t,e){const n=hm(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function Qf(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function DT(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(xT,n.$q),Qf(n,Gf),e.components!==void 0&&Object.values(e.components).forEach(r=>{Ns(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{Ns(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&Qf(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Gf.includes(r)===!1)),Pr.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var VT=function(t,e={}){const n={version:"2.17.0"};_m===!1?(e.config!==void 0&&Object.assign(oa,e.config),n.config={...oa},OT()):n.config=e.config||{},DT(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},LT={name:"Quasar",version:"2.17.0",install:VT,lang:Bn,iconSet:sa},MT=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let ym;const Ma=t=>ym=t,vm=Symbol();function pc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var gs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(gs||(gs={}));function FT(){const t=Xp(!0),e=t.run(()=>Cr({}));let n=[],r=[];const i=Fr({install(s){Ma(i),i._a=s,s.provide(vm,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!MT?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Em=()=>{};function Jf(t,e,n,r=Em){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Zp()&&Fv(i),i}function Kr(t,...e){t.slice().forEach(n=>{n(...e)})}const UT=t=>t(),Yf=Symbol(),Ol=Symbol();function gc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];pc(i)&&pc(r)&&t.hasOwnProperty(n)&&!ze(r)&&!Qn(r)?t[n]=gc(i,r):t[n]=r}return t}const BT=Symbol();function $T(t){return!pc(t)||!t.hasOwnProperty(BT)}const{assign:Vn}=Object;function jT(t){return!!(ze(t)&&t.effect)}function qT(t,e,n,r){const{state:i,actions:s,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=i?i():{});const f=uE(n.state.value[t]);return Vn(f,s,Object.keys(o||{}).reduce((p,g)=>(p[g]=Fr(fe(()=>{Ma(n);const v=n._s.get(t);return o[g].call(v,v)})),p),{}))}return c=wm(t,h,e,n,r,!0),c}function wm(t,e,n={},r,i,s){let o;const l=Vn({actions:{}},n),c={deep:!0};let h,f,p=[],g=[],v;const S=r.state.value[t];!s&&!S&&(r.state.value[t]={}),Cr({});let x;function k(y){let _;h=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:gs.patchFunction,storeId:t,events:v}):(gc(r.state.value[t],y),_={type:gs.patchObject,payload:y,storeId:t,events:v});const T=x=Symbol();lu().then(()=>{x===T&&(h=!0)}),f=!0,Kr(p,_,r.state.value[t])}const F=s?function(){const{state:_}=n,T=_?_():{};this.$patch(R=>{Vn(R,T)})}:Em;function N(){o.stop(),p=[],g=[],r._s.delete(t)}const V=(y,_="")=>{if(Yf in y)return y[Ol]=_,y;const T=function(){Ma(r);const R=Array.from(arguments),A=[],w=[];function Q(ue){A.push(ue)}function _e(ue){w.push(ue)}Kr(g,{args:R,name:T[Ol],store:B,after:Q,onError:_e});let we;try{we=y.apply(this&&this.$id===t?this:B,R)}catch(ue){throw Kr(w,ue),ue}return we instanceof Promise?we.then(ue=>(Kr(A,ue),ue)).catch(ue=>(Kr(w,ue),Promise.reject(ue))):(Kr(A,we),we)};return T[Yf]=!0,T[Ol]=_,T},D={_p:r,$id:t,$onAction:Jf.bind(null,g),$patch:k,$reset:F,$subscribe(y,_={}){const T=Jf(p,y,_.detached,()=>R()),R=o.run(()=>oi(()=>r.state.value[t],A=>{(_.flush==="sync"?f:h)&&y({storeId:t,type:gs.direct,events:v},A)},Vn({},c,_)));return T},$dispose:N},B=Mr(D);r._s.set(t,B);const I=(r._a&&r._a.runWithContext||UT)(()=>r._e.run(()=>(o=Xp()).run(()=>e({action:V}))));for(const y in I){const _=I[y];if(ze(_)&&!jT(_)||Qn(_))s||(S&&$T(_)&&(ze(_)?_.value=S[y]:gc(_,S[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const T=V(_,y);I[y]=T,l.actions[y]=_}}return Vn(B,I),Vn(be(B),I),Object.defineProperty(B,"$state",{get:()=>r.state.value[t],set:y=>{k(_=>{Vn(_,y)})}}),r._p.forEach(y=>{Vn(B,o.run(()=>y({store:B,app:r._a,pinia:r,options:l})))}),S&&s&&n.hydrate&&n.hydrate(B.$state,S),h=!0,f=!0,B}function HT(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(l,c){const h=WE();return l=l||(h?Zt(vm,null):null),l&&Ma(l),l=ym,l._s.has(r)||(s?wm(r,e,i,l):qT(r,i,l)),l._s.get(r)}return o.$id=r,o}/**
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
 */const Tm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,h=c?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,v=h&63;c||(v=64,o||(g=64)),r.push(n[f],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new KT;const g=s<<2|l>>4;if(r.push(g),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WT=function(t){const e=Tm(t);return Im.encodeByteArray(e,!0)},aa=function(t){return WT(t).replace(/\./g,"")},bm=function(t){try{return Im.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GT(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QT=()=>GT().__FIREBASE_DEFAULTS__,JT=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YT=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bm(t[1]);return e&&JSON.parse(e)},Fa=()=>{try{return QT()||JT()||YT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Am=t=>{var e,n;return(n=(e=Fa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XT=t=>{const e=Am(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rm=()=>{var t;return(t=Fa())===null||t===void 0?void 0:t.config},Sm=t=>{var e;return(e=Fa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ZT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[aa(JSON.stringify(n)),aa(JSON.stringify(o)),l].join(".")}/**
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
 */function vt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tI(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function nI(){var t;const e=(t=Fa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rI(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function iI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oI(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aI(){return!nI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lI(){try{return typeof indexedDB=="object"}catch{return!1}}function cI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const uI="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uI,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function hI(t,e){return t.replace(fI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fI=/\{\$([^}]+)}/g;function dI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function la(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xf(s)&&Xf(o)){if(!la(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xf(t){return t!==null&&typeof t=="object"}/**
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
 */function Js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pI(t,e){const n=new gI(t,e);return n.subscribe.bind(n)}class gI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nl),i.error===void 0&&(i.error=Nl),i.complete===void 0&&(i.complete=Nl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nl(){}/**
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
 */function St(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class _I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vI(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===yr?void 0:t}function vI(t){return t.instantiationMode==="EAGER"}/**
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
 */class EI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const wI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},TI=Ee.INFO,II={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},bI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=II[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=TI,this._logHandler=bI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const AI=(t,e)=>e.some(n=>t instanceof n);let Zf,ed;function RI(){return Zf||(Zf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return ed||(ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cm=new WeakMap,mc=new WeakMap,Pm=new WeakMap,Dl=new WeakMap,yu=new WeakMap;function CI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cm.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function PI(t){if(mc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mc.set(t,e)}let _c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kI(t){_c=t(_c)}function xI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vl(this),e,...n);return Pm.set(r,e.sort?e.sort():[e]),Jn(r)}:SI().includes(t)?function(...e){return t.apply(Vl(this),e),Jn(Cm.get(this))}:function(...e){return Jn(t.apply(Vl(this),e))}}function OI(t){return typeof t=="function"?xI(t):(t instanceof IDBTransaction&&PI(t),AI(t,RI())?new Proxy(t,_c):t)}function Jn(t){if(t instanceof IDBRequest)return CI(t);if(Dl.has(t))return Dl.get(t);const e=OI(t);return e!==t&&(Dl.set(t,e),yu.set(e,t)),e}const Vl=t=>yu.get(t);function NI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jn(o.result),c.oldVersion,c.newVersion,Jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const DI=["get","getKey","getAll","getAllKeys","count"],VI=["put","add","delete","clear"],Ll=new Map;function td(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ll.get(e))return Ll.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DI.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&c.done]))[0]};return Ll.set(e,s),s}kI(t=>({...t,get:(e,n,r)=>td(e,n)||t.get(e,n,r),has:(e,n)=>!!td(e,n)||t.has(e,n)}));/**
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
 */class LI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yc="@firebase/app",nd="0.10.13";/**
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
 */const En=new _u("@firebase/app"),FI="@firebase/app-compat",UI="@firebase/analytics-compat",BI="@firebase/analytics",$I="@firebase/app-check-compat",jI="@firebase/app-check",qI="@firebase/auth",HI="@firebase/auth-compat",zI="@firebase/database",KI="@firebase/data-connect",WI="@firebase/database-compat",GI="@firebase/functions",QI="@firebase/functions-compat",JI="@firebase/installations",YI="@firebase/installations-compat",XI="@firebase/messaging",ZI="@firebase/messaging-compat",e0="@firebase/performance",t0="@firebase/performance-compat",n0="@firebase/remote-config",r0="@firebase/remote-config-compat",i0="@firebase/storage",s0="@firebase/storage-compat",o0="@firebase/firestore",a0="@firebase/vertexai-preview",l0="@firebase/firestore-compat",c0="firebase",u0="10.14.1";/**
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
 */const vc="[DEFAULT]",h0={[yc]:"fire-core",[FI]:"fire-core-compat",[BI]:"fire-analytics",[UI]:"fire-analytics-compat",[jI]:"fire-app-check",[$I]:"fire-app-check-compat",[qI]:"fire-auth",[HI]:"fire-auth-compat",[zI]:"fire-rtdb",[KI]:"fire-data-connect",[WI]:"fire-rtdb-compat",[GI]:"fire-fn",[QI]:"fire-fn-compat",[JI]:"fire-iid",[YI]:"fire-iid-compat",[XI]:"fire-fcm",[ZI]:"fire-fcm-compat",[e0]:"fire-perf",[t0]:"fire-perf-compat",[n0]:"fire-rc",[r0]:"fire-rc-compat",[i0]:"fire-gcs",[s0]:"fire-gcs-compat",[o0]:"fire-fst",[l0]:"fire-fst-compat",[a0]:"fire-vertex","fire-js":"fire-js",[c0]:"fire-js-all"};/**
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
 */const ca=new Map,f0=new Map,Ec=new Map;function rd(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mi(t){const e=t.name;if(Ec.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Ec.set(e,t);for(const n of ca.values())rd(n,t);for(const n of f0.values())rd(n,t);return!0}function vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
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
 */const d0={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Yn=new Qs("app","Firebase",d0);/**
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
 */class p0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ci=u0;function km(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=Rm()),!n)throw Yn.create("no-options");const s=ca.get(i);if(s){if(la(n,s.options)&&la(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new EI(i);for(const c of Ec.values())o.addComponent(c);const l=new p0(n,r,o);return ca.set(i,l),l}function xm(t=vc){const e=ca.get(t);if(!e&&t===vc&&Rm())return km();if(!e)throw Yn.create("no-app",{appName:t});return e}function Xn(t,e,n){var r;let i=(r=h0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(l.join(" "));return}mi(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const g0="firebase-heartbeat-database",m0=1,Ds="firebase-heartbeat-store";let Ml=null;function Om(){return Ml||(Ml=NI(g0,m0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ds)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),Ml}async function _0(t){try{const n=(await Om()).transaction(Ds),r=await n.objectStore(Ds).get(Nm(t));return await n.done,r}catch(e){if(e instanceof bn)En.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function id(t,e){try{const r=(await Om()).transaction(Ds,"readwrite");await r.objectStore(Ds).put(e,Nm(t)),await r.done}catch(n){if(n instanceof bn)En.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function Nm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const y0=1024,v0=30*24*60*60*1e3;class E0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new T0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=v0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sd(),{heartbeatsToSend:r,unsentEntries:i}=w0(this._heartbeatsCache.heartbeats),s=aa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return En.warn(n),""}}}function sd(){return new Date().toISOString().substring(0,10)}function w0(t,e=y0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),od(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class T0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function od(t){return aa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function I0(t){mi(new xr("platform-logger",e=>new LI(e),"PRIVATE")),mi(new xr("heartbeat",e=>new E0(e),"PRIVATE")),Xn(yc,nd,t),Xn(yc,nd,"esm2017"),Xn("fire-js","")}I0("");var b0="firebase",A0="10.14.1";/**
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
 */Xn(b0,A0,"app");var ad=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var br,Dm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function _(){}_.prototype=y.prototype,I.D=y.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,R,A){for(var w=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)w[Q-2]=arguments[Q];return y.prototype[R].apply(T,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,_){_||(_=0);var T=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)T[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)T[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=I.g[0],_=I.g[1],R=I.g[2];var A=I.g[3],w=y+(A^_&(R^A))+T[0]+3614090360&4294967295;y=_+(w<<7&4294967295|w>>>25),w=A+(R^y&(_^R))+T[1]+3905402710&4294967295,A=y+(w<<12&4294967295|w>>>20),w=R+(_^A&(y^_))+T[2]+606105819&4294967295,R=A+(w<<17&4294967295|w>>>15),w=_+(y^R&(A^y))+T[3]+3250441966&4294967295,_=R+(w<<22&4294967295|w>>>10),w=y+(A^_&(R^A))+T[4]+4118548399&4294967295,y=_+(w<<7&4294967295|w>>>25),w=A+(R^y&(_^R))+T[5]+1200080426&4294967295,A=y+(w<<12&4294967295|w>>>20),w=R+(_^A&(y^_))+T[6]+2821735955&4294967295,R=A+(w<<17&4294967295|w>>>15),w=_+(y^R&(A^y))+T[7]+4249261313&4294967295,_=R+(w<<22&4294967295|w>>>10),w=y+(A^_&(R^A))+T[8]+1770035416&4294967295,y=_+(w<<7&4294967295|w>>>25),w=A+(R^y&(_^R))+T[9]+2336552879&4294967295,A=y+(w<<12&4294967295|w>>>20),w=R+(_^A&(y^_))+T[10]+4294925233&4294967295,R=A+(w<<17&4294967295|w>>>15),w=_+(y^R&(A^y))+T[11]+2304563134&4294967295,_=R+(w<<22&4294967295|w>>>10),w=y+(A^_&(R^A))+T[12]+1804603682&4294967295,y=_+(w<<7&4294967295|w>>>25),w=A+(R^y&(_^R))+T[13]+4254626195&4294967295,A=y+(w<<12&4294967295|w>>>20),w=R+(_^A&(y^_))+T[14]+2792965006&4294967295,R=A+(w<<17&4294967295|w>>>15),w=_+(y^R&(A^y))+T[15]+1236535329&4294967295,_=R+(w<<22&4294967295|w>>>10),w=y+(R^A&(_^R))+T[1]+4129170786&4294967295,y=_+(w<<5&4294967295|w>>>27),w=A+(_^R&(y^_))+T[6]+3225465664&4294967295,A=y+(w<<9&4294967295|w>>>23),w=R+(y^_&(A^y))+T[11]+643717713&4294967295,R=A+(w<<14&4294967295|w>>>18),w=_+(A^y&(R^A))+T[0]+3921069994&4294967295,_=R+(w<<20&4294967295|w>>>12),w=y+(R^A&(_^R))+T[5]+3593408605&4294967295,y=_+(w<<5&4294967295|w>>>27),w=A+(_^R&(y^_))+T[10]+38016083&4294967295,A=y+(w<<9&4294967295|w>>>23),w=R+(y^_&(A^y))+T[15]+3634488961&4294967295,R=A+(w<<14&4294967295|w>>>18),w=_+(A^y&(R^A))+T[4]+3889429448&4294967295,_=R+(w<<20&4294967295|w>>>12),w=y+(R^A&(_^R))+T[9]+568446438&4294967295,y=_+(w<<5&4294967295|w>>>27),w=A+(_^R&(y^_))+T[14]+3275163606&4294967295,A=y+(w<<9&4294967295|w>>>23),w=R+(y^_&(A^y))+T[3]+4107603335&4294967295,R=A+(w<<14&4294967295|w>>>18),w=_+(A^y&(R^A))+T[8]+1163531501&4294967295,_=R+(w<<20&4294967295|w>>>12),w=y+(R^A&(_^R))+T[13]+2850285829&4294967295,y=_+(w<<5&4294967295|w>>>27),w=A+(_^R&(y^_))+T[2]+4243563512&4294967295,A=y+(w<<9&4294967295|w>>>23),w=R+(y^_&(A^y))+T[7]+1735328473&4294967295,R=A+(w<<14&4294967295|w>>>18),w=_+(A^y&(R^A))+T[12]+2368359562&4294967295,_=R+(w<<20&4294967295|w>>>12),w=y+(_^R^A)+T[5]+4294588738&4294967295,y=_+(w<<4&4294967295|w>>>28),w=A+(y^_^R)+T[8]+2272392833&4294967295,A=y+(w<<11&4294967295|w>>>21),w=R+(A^y^_)+T[11]+1839030562&4294967295,R=A+(w<<16&4294967295|w>>>16),w=_+(R^A^y)+T[14]+4259657740&4294967295,_=R+(w<<23&4294967295|w>>>9),w=y+(_^R^A)+T[1]+2763975236&4294967295,y=_+(w<<4&4294967295|w>>>28),w=A+(y^_^R)+T[4]+1272893353&4294967295,A=y+(w<<11&4294967295|w>>>21),w=R+(A^y^_)+T[7]+4139469664&4294967295,R=A+(w<<16&4294967295|w>>>16),w=_+(R^A^y)+T[10]+3200236656&4294967295,_=R+(w<<23&4294967295|w>>>9),w=y+(_^R^A)+T[13]+681279174&4294967295,y=_+(w<<4&4294967295|w>>>28),w=A+(y^_^R)+T[0]+3936430074&4294967295,A=y+(w<<11&4294967295|w>>>21),w=R+(A^y^_)+T[3]+3572445317&4294967295,R=A+(w<<16&4294967295|w>>>16),w=_+(R^A^y)+T[6]+76029189&4294967295,_=R+(w<<23&4294967295|w>>>9),w=y+(_^R^A)+T[9]+3654602809&4294967295,y=_+(w<<4&4294967295|w>>>28),w=A+(y^_^R)+T[12]+3873151461&4294967295,A=y+(w<<11&4294967295|w>>>21),w=R+(A^y^_)+T[15]+530742520&4294967295,R=A+(w<<16&4294967295|w>>>16),w=_+(R^A^y)+T[2]+3299628645&4294967295,_=R+(w<<23&4294967295|w>>>9),w=y+(R^(_|~A))+T[0]+4096336452&4294967295,y=_+(w<<6&4294967295|w>>>26),w=A+(_^(y|~R))+T[7]+1126891415&4294967295,A=y+(w<<10&4294967295|w>>>22),w=R+(y^(A|~_))+T[14]+2878612391&4294967295,R=A+(w<<15&4294967295|w>>>17),w=_+(A^(R|~y))+T[5]+4237533241&4294967295,_=R+(w<<21&4294967295|w>>>11),w=y+(R^(_|~A))+T[12]+1700485571&4294967295,y=_+(w<<6&4294967295|w>>>26),w=A+(_^(y|~R))+T[3]+2399980690&4294967295,A=y+(w<<10&4294967295|w>>>22),w=R+(y^(A|~_))+T[10]+4293915773&4294967295,R=A+(w<<15&4294967295|w>>>17),w=_+(A^(R|~y))+T[1]+2240044497&4294967295,_=R+(w<<21&4294967295|w>>>11),w=y+(R^(_|~A))+T[8]+1873313359&4294967295,y=_+(w<<6&4294967295|w>>>26),w=A+(_^(y|~R))+T[15]+4264355552&4294967295,A=y+(w<<10&4294967295|w>>>22),w=R+(y^(A|~_))+T[6]+2734768916&4294967295,R=A+(w<<15&4294967295|w>>>17),w=_+(A^(R|~y))+T[13]+1309151649&4294967295,_=R+(w<<21&4294967295|w>>>11),w=y+(R^(_|~A))+T[4]+4149444226&4294967295,y=_+(w<<6&4294967295|w>>>26),w=A+(_^(y|~R))+T[11]+3174756917&4294967295,A=y+(w<<10&4294967295|w>>>22),w=R+(y^(A|~_))+T[2]+718787259&4294967295,R=A+(w<<15&4294967295|w>>>17),w=_+(A^(R|~y))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var _=y-this.blockSize,T=this.B,R=this.h,A=0;A<y;){if(R==0)for(;A<=_;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<y;)if(T[R++]=I.charCodeAt(A++),R==this.blockSize){i(this,T),R=0;break}}else for(;A<y;)if(T[R++]=I[A++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var _=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=_&255,_/=256;for(this.u(I),I=Array(16),y=_=0;4>y;++y)for(var T=0;32>T;T+=8)I[_++]=this.g[y]>>>T&255;return I};function s(I,y){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=y(I)}function o(I,y){this.h=y;for(var _=[],T=!0,R=I.length-1;0<=R;R--){var A=I[R]|0;T&&A==y||(_[R]=A,T=!1)}this.g=_}var l={};function c(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return k(h(-I));for(var y=[],_=1,T=0;I>=_;T++)y[T]=I/_|0,_*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return k(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),T=p,R=0;R<I.length;R+=8){var A=Math.min(8,I.length-R),w=parseInt(I.substring(R,R+A),y);8>A?(A=h(Math.pow(y,A)),T=T.j(A).add(h(w))):(T=T.j(_),T=T.add(h(w)))}return T}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-k(this).m();for(var I=0,y=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(x(this))return"-"+k(this).toString(I);for(var y=h(Math.pow(I,6)),_=this,T="";;){var R=D(_,y).g;_=F(_,R.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=R,S(_))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=F(this,I),x(I)?-1:S(I)?0:1};function k(I){for(var y=I.g.length,_=[],T=0;T<y;T++)_[T]=~I.g[T];return new o(_,~I.h).add(g)}t.abs=function(){return x(this)?k(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0,R=0;R<=y;R++){var A=T+(this.i(R)&65535)+(I.i(R)&65535),w=(A>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);T=w>>>16,A&=65535,w&=65535,_[R]=w<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function F(I,y){return I.add(k(y))}t.j=function(I){if(S(this)||S(I))return p;if(x(this))return x(I)?k(this).j(k(I)):k(k(this).j(I));if(x(I))return k(this.j(k(I)));if(0>this.l(v)&&0>I.l(v))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,_=[],T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<I.g.length;R++){var A=this.i(T)>>>16,w=this.i(T)&65535,Q=I.i(R)>>>16,_e=I.i(R)&65535;_[2*T+2*R]+=w*_e,N(_,2*T+2*R),_[2*T+2*R+1]+=A*_e,N(_,2*T+2*R+1),_[2*T+2*R+1]+=w*Q,N(_,2*T+2*R+1),_[2*T+2*R+2]+=A*Q,N(_,2*T+2*R+2)}for(T=0;T<y;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=y;T<2*y;T++)_[T]=0;return new o(_,0)};function N(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function V(I,y){this.g=I,this.h=y}function D(I,y){if(S(y))throw Error("division by zero");if(S(I))return new V(p,p);if(x(I))return y=D(k(I),y),new V(k(y.g),k(y.h));if(x(y))return y=D(I,k(y)),new V(k(y.g),y.h);if(30<I.g.length){if(x(I)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,T=y;0>=T.l(I);)_=B(_),T=B(T);var R=K(_,1),A=K(T,1);for(T=K(T,2),_=K(_,2);!S(T);){var w=A.add(T);0>=w.l(I)&&(R=R.add(_),A=w),T=K(T,1),_=K(_,1)}return y=F(I,R.j(y)),new V(R,y)}for(R=p;0<=I.l(y);){for(_=Math.max(1,Math.floor(I.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=h(_),w=A.j(y);x(w)||0<w.l(I);)_-=T,A=h(_),w=A.j(y);S(A)&&(A=g),R=R.add(A),I=F(I,w)}return new V(R,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)&I.i(T);return new o(_,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)|I.i(T);return new o(_,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)^I.i(T);return new o(_,this.h^I.h)};function B(I){for(var y=I.g.length+1,_=[],T=0;T<y;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(_,I.h)}function K(I,y){var _=y>>5;y%=32;for(var T=I.g.length-_,R=[],A=0;A<T;A++)R[A]=0<y?I.i(A+_)>>>y|I.i(A+_+1)<<32-y:I.i(A+_);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Dm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,br=o}).apply(typeof ad!="undefined"?ad:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var xo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vm,is,Lm,Bo,wc,Mm,Fm,Um;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xo=="object"&&xo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var O=d++;return{value:u(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,O){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return u.prototype[C].apply(m,G)}}function x(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function k(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=a.length||0,O=m.length||0;a.length=C+O;for(let G=0;G<O;G++)a[C+G]=m[G]}else a.push(m)}}class F{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var B=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function K(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let O=0;O<_.length;O++)d=_[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function A(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Ct;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Q{constructor(){this.h=this.g=null}add(u,d){const m=_e.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var _e=new F(()=>new we,a=>a.reset());class we{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ye=!1,Ct=new Q,Ut=()=>{const a=l.Promise.resolve(void 0);ue=()=>{a.then(Ot)}};var Ot=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){A(d)}var u=_e;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ye=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var An=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function Qt(a,u){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(B){e:{try{D(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Qt.aa.h.call(this)}}S(Qt,Fe);var At={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(a,u,d,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++Z,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ve(a){this.src=a,this.g={},this.h=0}ve.prototype.add=function(a,u,d,m,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var G=E(a,u,m,C);return-1<G?(u=a[G],d||(u.fa=!1)):(u=new Y(u,this.src,O,!!m,C),u.fa=d,a.push(u)),u};function xe(a,u){var d=u.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=C)&&Array.prototype.splice.call(m,C,1),O&&(ee(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function E(a,u,d,m){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==m)return C}return-1}var b="closure_lm_"+(1e6*Math.random()|0),P={};function U(a,u,d,m,C){if(m&&m.once)return J(a,u,d,m,C);if(Array.isArray(u)){for(var O=0;O<u.length;O++)U(a,u[O],d,m,C);return null}return d=le(d),a&&a[M]?a.K(u,d,h(m)?!!m.capture:!!m,C):L(a,u,d,!1,m,C)}function L(a,u,d,m,C,O){if(!u)throw Error("Invalid event type");var G=h(C)?!!C.capture:!!C,Oe=X(a);if(Oe||(a[b]=Oe=new ve(a)),d=Oe.add(u,d,m,G,O),d.proxy)return d;if(m=j(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)An||(C=G),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(q(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function j(){function a(d){return u.call(a.src,a.listener,d)}const u=ie;return a}function J(a,u,d,m,C){if(Array.isArray(u)){for(var O=0;O<u.length;O++)J(a,u[O],d,m,C);return null}return d=le(d),a&&a[M]?a.L(u,d,h(m)?!!m.capture:!!m,C):L(a,u,d,!0,m,C)}function W(a,u,d,m,C){if(Array.isArray(u))for(var O=0;O<u.length;O++)W(a,u[O],d,m,C);else m=h(m)?!!m.capture:!!m,d=le(d),a&&a[M]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],d=E(O,d,m,C),-1<d&&(ee(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=X(a))&&(u=a.g[u.toString()],a=-1,u&&(a=E(u,d,m,C)),(d=-1<a?u[a]:null)&&z(d))}function z(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[M])xe(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(q(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=X(u))?(xe(d,a),d.h==0&&(d.src=null,u[b]=null)):ee(a)}}}function q(a){return a in P?P[a]:P[a]="on"+a}function ie(a,u){if(a.da)a=!0;else{u=new Qt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&z(a),a=d.call(m,u)}return a}function X(a){return a=a[b],a instanceof ve?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[re]||(a[re]=function(u){return a.handleEvent(u)}),a[re])}function se(){Me.call(this),this.i=new ve(this),this.M=this,this.F=null}S(se,Me),se.prototype[M]=!0,se.prototype.removeEventListener=function(a,u,d,m){W(this,a,u,d,m)};function ge(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Fe(u,a);else if(u instanceof Fe)u.target=u.target||a;else{var C=u;u=new Fe(m,a),T(u,C)}if(C=!0,d)for(var O=d.length-1;0<=O;O--){var G=u.g=d[O];C=Te(G,m,!0,u)&&C}if(G=u.g=a,C=Te(G,m,!0,u)&&C,C=Te(G,m,!1,u)&&C,d)for(O=0;O<d.length;O++)G=u.g=d[O],C=Te(G,m,!1,u)&&C}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)ee(d[m]);delete a.g[u],a.h--}}this.F=null},se.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},se.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Te(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,O=0;O<u.length;++O){var G=u[O];if(G&&!G.da&&G.capture==d){var Oe=G.listener,rt=G.ha||G.src;G.fa&&xe(a.i,G),C=Oe.call(rt,m)!==!1&&C}}return C&&!m.defaultPrevented}function ct(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Qe(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,Qe(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Pt extends Me{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(a){Me.call(this),this.h=a,this.g={}}S(Je,Me);var Rn=[];function Vi(a){K(a.g,function(u,d){this.g.hasOwnProperty(d)&&z(u)},a),a.g={}}Je.prototype.N=function(){Je.aa.N.call(this),Vi(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nt=l.JSON.stringify,Nt=l.JSON.parse,so=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function tl(){}tl.prototype.h=null;function fh(a){return a.h||(a.h=a.i())}function dh(){}var Li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nl(){Fe.call(this,"d")}S(nl,Fe);function rl(){Fe.call(this,"c")}S(rl,Fe);var ur={},ph=null;function oo(){return ph=ph||new se}ur.La="serverreachability";function gh(a){Fe.call(this,ur.La,a)}S(gh,Fe);function Mi(a){const u=oo();ge(u,new gh(u))}ur.STAT_EVENT="statevent";function mh(a,u){Fe.call(this,ur.STAT_EVENT,a),this.stat=u}S(mh,Fe);function Et(a){const u=oo();ge(u,new mh(u,a))}ur.Ma="timingevent";function _h(a,u){Fe.call(this,ur.Ma,a),this.size=u}S(_h,Fe);function Fi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Ui(){this.g=!0}Ui.prototype.xa=function(){this.g=!1};function Xy(a,u,d,m,C,O){a.info(function(){if(a.g)if(O)for(var G="",Oe=O.split("&"),rt=0;rt<Oe.length;rt++){var Se=Oe[rt].split("=");if(1<Se.length){var ut=Se[0];Se=Se[1];var ht=ut.split("_");G=2<=ht.length&&ht[1]=="type"?G+(ut+"="+Se+"&"):G+(ut+"=redacted&")}}else G=null;else G=O;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+G})}function Zy(a,u,d,m,C,O,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+O+" "+G})}function Br(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+tv(a,d)+(m?" "+m:"")})}function ev(a,u){a.info(function(){return"TIMEOUT: "+u})}Ui.prototype.info=function(){};function tv(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return nt(d)}catch{return u}}var ao={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},il;function lo(){}S(lo,tl),lo.prototype.g=function(){return new XMLHttpRequest},lo.prototype.i=function(){return{}},il=new lo;function Sn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vh}function vh(){this.i=null,this.g="",this.h=!1}var Eh={},sl={};function ol(a,u,d){a.L=1,a.v=fo(an(u)),a.m=d,a.P=!0,wh(a,null)}function wh(a,u){a.F=Date.now(),co(a),a.A=an(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Vh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new vh,a.g=Zh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Pt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Rn[0]=C.toString()),C=Rn);for(var O=0;O<C.length;O++){var G=U(d,C[O],m||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Mi(),Xy(a.i,a.u,a.A,a.l,a.R,a.m)}Sn.prototype.ca=function(a){a=a.target;const u=this.M;u&&ln(a)==3?u.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const ht=ln(this.g);var u=this.g.Ba();const qr=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||jh(this.g)))){this.J||ht!=4||u==7||(u==8||0>=qr?Mi(3):Mi(2)),al(this);var d=this.g.Z();this.X=d;t:if(Th(this)){var m=jh(this.g);a="";var C=m.length,O=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){hr(this),Bi(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(O&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,Zy(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,rt=this.g;if((Oe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Oe)){var Se=Oe;break t}}Se=null}if(d=Se)Br(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ll(this,d);else{this.o=!1,this.s=3,Et(12),hr(this),Bi(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<G.length;)if(Bt=nv(this,G),Bt==sl){ht==4&&(this.s=4,Et(14),d=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Eh){this.s=4,Et(15),Br(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else Br(this.i,this.l,Bt,null),ll(this,Bt);if(Th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||G.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)Br(this.i,this.l,G,"[Invalid Chunked Response]"),hr(this),Bi(this);else if(0<G.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),pl(ut),ut.M=!0,Et(11))}}else Br(this.i,this.l,G,null),ll(this,G);ht==4&&hr(this),this.o&&!this.J&&(ht==4?Qh(this.j,this):(this.o=!1,co(this)))}else vv(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),hr(this),Bi(this)}}}catch{}finally{}};function Th(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function nv(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?sl:(d=Number(u.substring(d,m)),isNaN(d)?Eh:(m+=1,m+d>u.length?sl:(u=u.slice(m,m+d),a.C=m+d,u)))}Sn.prototype.cancel=function(){this.J=!0,hr(this)};function co(a){a.S=Date.now()+a.I,Ih(a,a.I)}function Ih(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Fi(g(a.ba,a),u)}function al(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ev(this.i,this.A),this.L!=2&&(Mi(),Et(17)),hr(this),this.s=2,Bi(this)):Ih(this,this.S-a)};function Bi(a){a.j.G==0||a.J||Qh(a.j,a)}function hr(a){al(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Vi(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ll(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||cl(d.h,a))){if(!a.K&&cl(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)vo(d),_o(d);else break e;dl(d),Et(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Fi(g(d.Za,d),6e3));if(1>=Rh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else dr(d,11)}else if((a.K||d.g==a)&&vo(d),!N(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let Se=C[u];if(d.T=Se[0],Se=Se[1],d.G==2)if(Se[0]=="c"){d.K=Se[1],d.ia=Se[2];const ut=Se[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ht=Se[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const qr=Se[5];qr!=null&&typeof qr=="number"&&0<qr&&(m=1.5*qr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Bt=a.g;if(Bt){const wo=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wo){var O=m.h;O.g||wo.indexOf("spdy")==-1&&wo.indexOf("quic")==-1&&wo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ul(O,O.h),O.h=null))}if(m.D){const gl=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;gl&&(m.ya=gl,Ve(m.I,m.D,gl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var G=a;if(m.qa=Xh(m,m.J?m.ia:null,m.W),G.K){Sh(m.h,G);var Oe=G,rt=m.L;rt&&(Oe.I=rt),Oe.B&&(al(Oe),co(Oe)),m.g=G}else Wh(m);0<d.i.length&&yo(d)}else Se[0]!="stop"&&Se[0]!="close"||dr(d,7);else d.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?dr(d,7):fl(d):Se[0]!="noop"&&d.l&&d.l.ta(Se),d.v=0)}}Mi(4)}catch{}}var rv=class{constructor(a,u){this.g=a,this.map=u}};function bh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ah(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rh(a){return a.h?1:a.g?a.g.size:0}function cl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ul(a,u){a.g?a.g.add(u):a.h=u}function Sh(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}bh.prototype.cancel=function(){if(this.i=Ch(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ch(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return x(a.i)}function iv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map!="undefined"&&a instanceof Map||typeof Set!="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function sv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map!="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!="undefined"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Ph(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=sv(a),m=iv(a),C=m.length,O=0;O<C;O++)u.call(void 0,m[O],d&&d[O],a)}var kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ov(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var O=a[d].substring(0,m);C=a[d].substring(m+1)}else O=a[d];u(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof fr){this.h=a.h,uo(this,a.j),this.o=a.o,this.g=a.g,ho(this,a.s),this.l=a.l;var u=a.i,d=new qi;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),xh(this,d),this.m=a.m}else a&&(u=String(a).match(kh))?(this.h=!1,uo(this,u[1]||"",!0),this.o=$i(u[2]||""),this.g=$i(u[3]||"",!0),ho(this,u[4]),this.l=$i(u[5]||"",!0),xh(this,u[6]||"",!0),this.m=$i(u[7]||"")):(this.h=!1,this.i=new qi(null,this.h))}fr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ji(u,Oh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ji(u,Oh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ji(d,d.charAt(0)=="/"?cv:lv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ji(d,hv)),a.join("")};function an(a){return new fr(a)}function uo(a,u,d){a.j=d?$i(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ho(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function xh(a,u,d){u instanceof qi?(a.i=u,fv(a.i,a.h)):(d||(u=ji(u,uv)),a.i=new qi(u,a.h))}function Ve(a,u,d){a.i.set(u,d)}function fo(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $i(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ji(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,av),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function av(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Oh=/[#\/\?@]/g,lv=/[#\?:]/g,cv=/[#\?]/g,uv=/[#\?@]/g,hv=/#/g;function qi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Cn(a){a.g||(a.g=new Map,a.h=0,a.i&&ov(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=qi.prototype,t.add=function(a,u){Cn(this),this.i=null,a=$r(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Nh(a,u){Cn(a),u=$r(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Dh(a,u){return Cn(a),u=$r(a,u),a.g.has(u)}t.forEach=function(a,u){Cn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){Cn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const C=a[m];for(let O=0;O<C.length;O++)d.push(u[m])}return d},t.V=function(a){Cn(this);let u=[];if(typeof a=="string")Dh(this,a)&&(u=u.concat(this.g.get($r(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Cn(this),this.i=null,a=$r(this,a),Dh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Vh(a,u,d){Nh(a,u),0<d.length&&(a.i=null,a.g.set($r(a,u),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const O=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var C=O;G[m]!==""&&(C+="="+encodeURIComponent(String(G[m]))),a.push(C)}}return this.i=a.join("&")};function $r(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function fv(a,u){u&&!a.j&&(Cn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(Nh(this,m),Vh(this,C,d))},a)),a.j=u}function dv(a,u){const d=new Ui;if(l.Image){const m=new Image;m.onload=v(Pn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=v(Pn,d,"TestLoadImage: error",!1,u,m),m.onabort=v(Pn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(Pn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function pv(a,u){const d=new Ui,m=new AbortController,C=setTimeout(()=>{m.abort(),Pn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(C),O.ok?Pn(d,"TestPingServer: ok",!0,u):Pn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Pn(d,"TestPingServer: error",!1,u)})}function Pn(a,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function gv(){this.g=new so}function mv(a,u,d){const m=d||"";try{Ph(a,function(C,O){let G=C;h(C)&&(G=nt(C)),u.push(m+O+"="+encodeURIComponent(G))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function po(a){this.l=a.Ub||null,this.j=a.eb||!1}S(po,tl),po.prototype.g=function(){return new go(this.l,this.j)},po.prototype.i=function(a){return function(){return a}}({});function go(a,u){se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(go,se),t=go.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zi(this)),this.g&&(this.readyState=3,zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Hi(this):zi(this),this.readyState==3&&Lh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Hi(this))},t.Qa=function(a){this.g&&(this.response=a,Hi(this))},t.ga=function(){this.g&&Hi(this)};function Hi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zi(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mh(a){let u="";return K(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function hl(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Mh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,u,d))}function $e(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S($e,se);var _v=/^https?$/i,yv=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():il.g(),this.v=this.o?fh(this.o):fh(il),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Fh(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yv,u,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,G]of d)this.g.setRequestHeader(O,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$h(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Fh(this,O)}};function Fh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Uh(a),mo(a)}function Uh(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),mo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mo(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bh(this):this.bb())},t.bb=function(){Bh(this)};function Bh(a){if(a.h&&typeof o!="undefined"&&(!a.v[1]||ln(a)!=4||a.Z()!=2)){if(a.u&&ln(a)==4)ct(a.Ea,0,a);else if(ge(a,"readystatechange"),ln(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=G===0){var C=String(a.D).match(kh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!_v.test(C?C.toLowerCase():"")}d=m}if(d)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var O=2<ln(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Uh(a)}}finally{mo(a)}}}}function mo(a,u){if(a.g){$h(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ge(a,"ready");try{d.onreadystatechange=m}catch{}}}function $h(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Nt(u)}};function jh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function vv(a){const u={};a=(a.g&&2<=ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(N(a[m]))continue;var d=R(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[C]||[];u[C]=O,O.push(d)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ki(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function qh(a){this.Aa=0,this.i=[],this.j=new Ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ki("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ki("baseRetryDelayMs",5e3,a),this.cb=Ki("retryDelaySeedMs",1e4,a),this.Wa=Ki("forwardChannelMaxRetries",2,a),this.wa=Ki("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bh(a&&a.concurrentRequestLimit),this.Da=new gv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){Et(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Xh(this,null,this.W),yo(this)};function fl(a){if(Hh(a),a.G==3){var u=a.U++,d=an(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Wi(a,d),u=new Sn(a,a.j,u),u.L=2,u.v=fo(an(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Zh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),co(u)}Yh(a)}function _o(a){a.g&&(pl(a),a.g.cancel(),a.g=null)}function Hh(a){_o(a),a.u&&(l.clearTimeout(a.u),a.u=null),vo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function yo(a){if(!Ah(a.h)&&!a.s){a.s=!0;var u=a.Ga;ue||Ut(),ye||(ue(),ye=!0),Ct.add(u,a),a.B=0}}function Ev(a,u){return Rh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Fi(g(a.Ga,a,u),Jh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Sn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Kh(this,C,u),d=an(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Wi(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(Mh(O)))+"&"+u:this.m&&hl(d,this.m,O)),ul(this.h,C),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),C.T=!0,ol(C,d,null)):ol(C,d,u),this.G=2}}else this.G==3&&(a?zh(this,a):this.i.length==0||Ah(this.h)||zh(this))};function zh(a,u){var d;u?d=u.l:d=a.U++;const m=an(a.I);Ve(m,"SID",a.K),Ve(m,"RID",d),Ve(m,"AID",a.T),Wi(a,m),a.m&&a.o&&hl(m,a.m,a.o),d=new Sn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Kh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ul(a.h,d),ol(d,m,u)}function Wi(a,u){a.H&&K(a.H,function(d,m){Ve(u,m,d)}),a.l&&Ph({},function(d,m){Ve(u,m,d)})}function Kh(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const G=["count="+d];O==-1?0<d?(O=C[0].g,G.push("ofs="+O)):O=0:G.push("ofs="+O);let Oe=!0;for(let rt=0;rt<d;rt++){let Se=C[rt].g;const ut=C[rt].map;if(Se-=O,0>Se)O=Math.max(0,C[rt].g-100),Oe=!1;else try{mv(ut,G,"req"+Se+"_")}catch{m&&m(ut)}}if(Oe){m=G.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Wh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ue||Ut(),ye||(ue(),ye=!0),Ct.add(u,a),a.v=0}}function dl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Fi(g(a.Fa,a),Jh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Fi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),_o(this),Gh(this))};function pl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Gh(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=an(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Wi(a,u),a.m&&a.o&&hl(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=fo(an(u)),d.m=null,d.P=!0,wh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,_o(this),dl(this),Et(19))};function vo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qh(a,u){var d=null;if(a.g==u){vo(a),pl(a),a.g=null;var m=2}else if(cl(a.h,u))d=u.D,Sh(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=oo(),ge(m,new _h(m,d)),yo(a)}else Wh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&Ev(a,u)||m==2&&dl(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:dr(a,5);break;case 4:dr(a,10);break;case 3:dr(a,6);break;default:dr(a,2)}}}function Jh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function dr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new fr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||uo(m,"https"),fo(m),C?dv(m.toString(),d):pv(m.toString(),d)}else Et(2);a.G=0,a.l&&a.l.sa(u),Yh(a),Hh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Yh(a){if(a.G=0,a.ka=[],a.l){const u=Ch(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Xh(a,u,d){var m=d instanceof fr?an(d):new fr(d);if(m.g!="")u&&(m.g=u+"."+m.g),ho(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var O=new fr(null);m&&uo(O,m),u&&(O.g=u),C&&ho(O,C),d&&(O.l=d),m=O}return d=a.D,u=a.ya,d&&u&&Ve(m,d,u),Ve(m,"VER",a.la),Wi(a,m),m}function Zh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new $e(new po({eb:d})):new $e(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ef(){}t=ef.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Eo(){}Eo.prototype.g=function(a,u){return new kt(a,u)};function kt(a,u){se.call(this),this.g=new qh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!N(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!N(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new jr(this)}S(kt,se),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){fl(this.g)},kt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=nt(a),a=d);u.i.push(new rv(u.Ya++,a)),u.G==3&&yo(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,kt.aa.N.call(this)};function tf(a){nl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(tf,nl);function nf(){rl.call(this),this.status=1}S(nf,rl);function jr(a){this.g=a}S(jr,ef),jr.prototype.ua=function(){ge(this.g,"a")},jr.prototype.ta=function(a){ge(this.g,new tf(a))},jr.prototype.sa=function(a){ge(this.g,new nf)},jr.prototype.ra=function(){ge(this.g,"b")},Eo.prototype.createWebChannel=Eo.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Um=function(){return new Eo},Fm=function(){return oo()},Mm=ur,wc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ao.NO_ERROR=0,ao.TIMEOUT=8,ao.HTTP_ERROR=6,Bo=ao,yh.COMPLETE="complete",Lm=yh,dh.EventType=Li,Li.OPEN="a",Li.CLOSE="b",Li.ERROR="c",Li.MESSAGE="d",se.prototype.listen=se.prototype.K,is=dh,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Vm=$e}).apply(typeof xo!="undefined"?xo:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const ld="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Pi="10.14.0";/**
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
 */const Or=new _u("@firebase/firestore");function Ji(){return Or.logLevel}function ne(t,...e){if(Or.logLevel<=Ee.DEBUG){const n=e.map(Eu);Or.debug(`Firestore (${Pi}): ${t}`,...n)}}function wn(t,...e){if(Or.logLevel<=Ee.ERROR){const n=e.map(Eu);Or.error(`Firestore (${Pi}): ${t}`,...n)}}function _i(t,...e){if(Or.logLevel<=Ee.WARN){const n=e.map(Eu);Or.warn(`Firestore (${Pi}): ${t}`,...n)}}function Eu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function je(t,e){t||me()}function Ae(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Bm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class S0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C0{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){je(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(je(typeof r.accessToken=="string"),new Bm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new dt(e)}}class P0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new P0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){je(this.o===void 0);const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(je(typeof n.token=="string"),this.R=n.token,new x0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function N0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class D0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=N0(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new tt(0,0))}static max(){return new pe(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vs{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Vs{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const V0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Vs{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return V0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new te(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new te(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Ue.fromString(e))}static fromName(e){return new oe(Ue.fromString(e).popFirst(5))}static empty(){return new oe(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Ue(e.slice()))}}function L0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new nr(i,oe.empty(),e)}function M0(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(pe.min(),oe.empty(),-1)}static max(){return new nr(pe.max(),oe.empty(),-1)}}function F0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const U0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wu(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==U0)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ys(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Tu.oe=-1;function Ua(t){return t==null}function ua(t){return t===0&&1/t==-1/0}function j0(t){return typeof t=="number"&&Number.isInteger(t)&&!ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function cd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $m(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ot.RED,this.left=i!=null?i:ot.EMPTY,this.right=s!=null?s:ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ot(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ud(this.data.getIterator())}getIteratorFrom(e){return new ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Wn([])}unionWith(e){let n=new at(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class jm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new jm("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const q0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(je(!!t),typeof t=="string"){let e=0;const n=q0.exec(t);if(je(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function Iu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bu(t){const e=t.mapValue.fields.__previous_value__;return Iu(e)?bu(e):e}function Ls(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class H0{constructor(e,n,r,i,s,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ms{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const No={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Iu(t)?4:K0(t)?9007199254740991:z0(t)?10:11:me()}function sn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ls(t).isEqual(Ls(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=rr(i.timestampValue),l=rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Nr(i.bytesValue).isEqual(Nr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return He(i.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return He(i.integerValue)===He(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=He(i.doubleValue),l=He(s.doubleValue);return o===l?ua(o)===ua(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return yi(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(cd(o)!==cd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!sn(o[c],l[c])))return!1;return!0}(t,e);default:return me()}}function Fs(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=He(s.integerValue||s.doubleValue),c=He(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return hd(t.timestampValue,e.timestampValue);case 4:return hd(Ls(t),Ls(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Nr(s),c=Nr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ce(l[h],c[h]);if(f!==0)return f}return Ce(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Ce(He(s.latitude),He(o.latitude));return l!==0?l:Ce(He(s.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fd(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,c,h,f;const p=s.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,x=Ce(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:fd(v,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===No.mapValue&&o===No.mapValue)return 0;if(s===No.mapValue)return 1;if(o===No.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Ce(c[p],f[p]);if(g!==0)return g;const v=vi(l[c[p]],h[f[p]]);if(v!==0)return v}return Ce(c.length,f.length)}(t.mapValue,e.mapValue);default:throw me()}}function hd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=rr(t),r=rr(e),i=Ce(n.seconds,r.seconds);return i!==0?i:Ce(n.nanos,r.nanos)}function fd(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=vi(n[i],r[i]);if(s)return s}return Ce(n.length,r.length)}function Ei(t){return Tc(t)}function Tc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Tc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Tc(n.fields[o])}`;return i+"}"}(t.mapValue):me()}function dd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ic(t){return!!t&&"integerValue"in t}function Au(t){return!!t&&"arrayValue"in t}function pd(t){return!!t&&"nullValue"in t}function gd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function z0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ms(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ms(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ms(t.arrayValue.values[n]);return e}return Object.assign({},t)}function K0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ms(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ms(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xt(ms(this.value))}}/**
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
 */class gt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,pe.min(),pe.min(),pe.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,pe.min(),pe.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,pe.min(),pe.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ha{constructor(e,n){this.position=e,this.inclusive=n}}function md(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=vi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Us{constructor(e,n="asc"){this.field=e,this.dir=n}}function W0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qm{}class We extends qm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Q0(e,n,r):n==="array-contains"?new X0(e,r):n==="in"?new Z0(e,r):n==="not-in"?new eb(e,r):n==="array-contains-any"?new tb(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new J0(e,r):new Y0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vi(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends qm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return Hm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hm(t){return t.op==="and"}function zm(t){return G0(t)&&Hm(t)}function G0(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function bc(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Ei(t.value);if(zm(t))return t.filters.map(e=>bc(e)).join(",");{const e=t.filters.map(n=>bc(n)).join(",");return`${t.op}(${e})`}}function Km(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Km(o,i.filters[l]),!0):!1}(t,e):void me()}function Wm(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Ei(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(Wm).join(" ,")+"}"}(t):"Filter"}class Q0 extends We{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class J0 extends We{constructor(e,n){super(e,"in",n),this.keys=Gm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Y0 extends We{constructor(e,n){super(e,"not-in",n),this.keys=Gm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class X0 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Au(n)&&Fs(n.arrayValue,this.value)}}class Z0 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fs(this.value.arrayValue,n)}}class eb extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fs(this.value.arrayValue,n)}}class tb extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Au(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}/**
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
 */class nb{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function yd(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nb(t,e,n,r,i,s,o)}function Ru(t){const e=Ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ei(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ei(r)).join(",")),e.ue=n}return e.ue}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!W0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Km(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_d(t.startAt,e.startAt)&&_d(t.endAt,e.endAt)}function Ac(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ki{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rb(t,e,n,r,i,s,o,l){return new ki(t,e,n,r,i,s,o,l)}function Cu(t){return new ki(t)}function vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qm(t){return t.collectionGroup!==null}function _s(t){const e=Ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Us(s,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new Us(_t.keyField(),r))}return e.ce}function tn(t){const e=Ae(t);return e.le||(e.le=ib(e,_s(t))),e.le}function ib(t,e){if(t.limitType==="F")return yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Us(i.field,s)});const n=t.endAt?new ha(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ha(t.startAt.position,t.startAt.inclusive):null;return yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rc(t,e){const n=t.filters.concat([e]);return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sc(t,e,n){return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ba(t,e){return Su(tn(t),tn(e))&&t.limitType===e.limitType}function Jm(t){return`${Ru(tn(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Wm(i)).join(", ")}]`),Ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ei(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ei(i)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function $a(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):oe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _s(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const h=md(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,_s(r),i)||r.endAt&&!function(o,l,c){const h=md(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,_s(r),i))}(t,e)}function sb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ym(t){return(e,n)=>{let r=!1;for(const i of _s(t)){const s=ob(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ob(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),h=l.data.field(s);return c!==null&&h!==null?vi(c,h):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $m(this.inner)}size(){return this.innerSize}}/**
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
 */const ab=new qe(oe.comparator);function ir(){return ab}const Xm=new qe(oe.comparator);function ss(...t){let e=Xm;for(const n of t)e=e.insert(n.key,n);return e}function lb(t){let e=Xm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vr(){return ys()}function Zm(){return ys()}function ys(){return new xi(t=>t.toString(),(t,e)=>t.isEqual(e))}new qe(oe.comparator);const cb=new at(oe.comparator);function Re(...t){let e=cb;for(const n of t)e=e.add(n);return e}const ub=new at(Ce);function hb(){return ub}/**
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
 */function Pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function e_(t){return{integerValue:""+t}}function fb(t,e){return j0(e)?e_(e):Pu(t,e)}/**
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
 */class ja{constructor(){this._=void 0}}function db(t,e,n){return t instanceof Cc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Iu(s)&&(s=bu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fa?t_(t,e):t instanceof da?n_(t,e):function(i,s){const o=gb(i,s),l=Ed(o)+Ed(i.Pe);return Ic(o)&&Ic(i.Pe)?e_(l):Pu(i.serializer,l)}(t,e)}function pb(t,e,n){return t instanceof fa?t_(t,e):t instanceof da?n_(t,e):n}function gb(t,e){return t instanceof Pc?function(r){return Ic(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Cc extends ja{}class fa extends ja{constructor(e){super(),this.elements=e}}function t_(t,e){const n=r_(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class da extends ja{constructor(e){super(),this.elements=e}}function n_(t,e){let n=r_(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class Pc extends ja{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ed(t){return He(t.integerValue||t.doubleValue)}function r_(t){return Au(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fa&&i instanceof fa||r instanceof da&&i instanceof da?yi(r.elements,i.elements,sn):r instanceof Pc&&i instanceof Pc?sn(r.Pe,i.Pe):r instanceof Cc&&i instanceof Cc}(t.transform,e.transform)}class Rr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ku{}function i_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yb(t.key,Rr.none()):new xu(t.key,t.data,Rr.none());{const n=t.data,r=Xt.empty();let i=new at(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new qa(t.key,r,new Wn(i.toArray()),Rr.none())}}function _b(t,e,n){t instanceof xu?function(i,s,o){const l=i.value.clone(),c=Td(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof qa?function(i,s,o){if(!$o(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Td(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(s_(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vs(t,e,n,r){return t instanceof xu?function(s,o,l,c){if(!$o(s.precondition,o))return l;const h=s.value.clone(),f=Id(s.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof qa?function(s,o,l,c){if(!$o(s.precondition,o))return l;const h=Id(s.fieldTransforms,c,o),f=o.data;return f.setAll(s_(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return $o(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yi(r,i,(s,o)=>mb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xu extends ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qa extends ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function s_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Td(t,e,n){const r=new Map;je(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,pb(o,l,n[i]))}return r}function Id(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,db(s,o,e))}return r}class yb extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_b(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zm();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=i_(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Re())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,(n,r)=>wd(n,r))&&yi(this.baseMutations,e.baseMutations,(n,r)=>wd(n,r))}}/**
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
 */class Eb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,Ie;function o_(t){if(t===void 0)return wn("GRPC error has no .code"),H.UNKNOWN;switch(t){case Ke.OK:return H.OK;case Ke.CANCELLED:return H.CANCELLED;case Ke.UNKNOWN:return H.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return H.INTERNAL;case Ke.UNAVAILABLE:return H.UNAVAILABLE;case Ke.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ke.NOT_FOUND:return H.NOT_FOUND;case Ke.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ke.ABORTED:return H.ABORTED;case Ke.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ke.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(Ie=Ke||(Ke={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Tb(){return new TextEncoder}/**
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
 */const Ib=new br([4294967295,4294967295],0);function bd(t){const e=Tb().encode(t),n=new Dm;return n.update(e),new Uint8Array(n.digest())}function Ad(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new br([n,r],0),new br([i,s],0)]}class Ou{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new os(`Invalid padding: ${n}`);if(r<0)throw new os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new os(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new os(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=br.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(br.fromNumber(r)));return i.compare(Ib)===1&&(i=new br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=bd(e),[r,i]=Ad(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ou(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=bd(e),[r,i]=Ad(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ha{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zs.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ha(pe.min(),i,new qe(Ce),ir(),Re())}}class Zs{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zs(r,n,Re(),Re(),Re())}}/**
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
 */class jo{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class a_{constructor(e,n){this.targetId=e,this.me=n}}class l_{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Rd{constructor(){this.fe=0,this.ge=Cd(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),n=Re(),r=Re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:me()}}),new Zs(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Cd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bb{constructor(e){this.Le=e,this.Be=new Map,this.ke=ir(),this.qe=Sd(),this.Qe=new qe(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ac(s))if(r===0){const o=new oe(s.path);this.Ue(n,o,gt.newNoDocument(o,pe.min()))}else je(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Nr(r).toUint8Array()}catch(c){if(c instanceof jm)return _i("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ou(o,i,s)}catch(c){return _i(c instanceof os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Ac(l.target)){const c=new oe(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,gt.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Re();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ha(e,n,this.Qe,this.ke,r);return this.ke=ir(),this.qe=Sd(),this.Qe=new qe(Ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Rd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Rd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Sd(){return new qe(oe.comparator)}function Cd(){return new qe(oe.comparator)}const Ab=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Sb=(()=>({and:"AND",or:"OR"}))();class Cb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kc(t,e){return t.useProto3Json||Ua(e)?e:{value:e}}function xc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function c_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ai(t){return je(!!t),pe.fromTimestamp(function(n){const r=rr(n);return new tt(r.seconds,r.nanos)}(t))}function u_(t,e){return Oc(t,e).canonicalString()}function Oc(t,e){const n=function(i){return new Ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function h_(t){const e=Ue.fromString(t);return je(m_(e)),e}function Ul(t,e){const n=h_(e);if(n.get(1)!==t.databaseId.projectId)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(d_(n))}function f_(t,e){return u_(t.databaseId,e)}function Pb(t){const e=h_(t);return e.length===4?Ue.emptyPath():d_(e)}function Pd(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function d_(t){return je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(je(f===void 0||typeof f=="string"),lt.fromBase64String(f||"")):(je(f===void 0||f instanceof Buffer||f instanceof Uint8Array),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?H.UNKNOWN:o_(h.code);return new te(f,h.message||"")}(o);n=new l_(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ul(t,r.document.name),s=ai(r.document.updateTime),o=r.document.createTime?ai(r.document.createTime):pe.min(),l=new Xt({mapValue:{fields:r.document.fields}}),c=gt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new jo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ul(t,r.document),s=r.readTime?ai(r.readTime):pe.min(),o=gt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ul(t,r.document),s=r.removedTargetIds||[];n=new jo([],s,i,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wb(i,s),l=r.targetId;n=new a_(l,o)}}return n}function xb(t,e){return{documents:[f_(t,e.path)]}}function Ob(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=f_(t,i);const s=function(h){if(h.length!==0)return g_(Kt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Xr(g.field),direction:Vb(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function Nb(t){let e=Pb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){je(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=p_(p);return g instanceof Kt&&zm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Us(Zr(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ua(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,v=p.values||[];return new ha(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new ha(v,g)}(n.endAt)),rb(e,i,o,s,l,"F",c,h)}function Db(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function p_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zr(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zr(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Zr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>p_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function Vb(t){return Ab[t]}function Lb(t){return Rb[t]}function Mb(t){return Sb[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return _t.fromServerFormat(t.fieldPath)}function g_(t){return t instanceof We?function(n){if(n.op==="=="){if(gd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(pd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(pd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:Lb(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>g_(i));return r.length===1?r[0]:{compositeFilter:{op:Mb(n.op),filters:r}}}(t):me()}function m_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Gn{constructor(e,n,r,i,s=pe.min(),o=pe.min(),l=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Fb{constructor(e){this.ct=e}}function Ub(t){const e=Nb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
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
 */class Bb{constructor(){this.un=new $b}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(nr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class $b{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new at(Ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new at(Ue.comparator)).toArray()}}/**
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
 */class wi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new wi(0)}static kn(){return new wi(-1)}}/**
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
 */class jb{constructor(){this.changes=new xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Hb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vs(r.mutation,i,Wn.empty(),tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Re()){const i=vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ss();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=ir();const o=ys(),l=function(){return ys()}();return n.forEach((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof qa)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),vs(f.mutation,h,f.mutation.getFieldMask(),tt.now())):o.set(h.key,Wn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new qb(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ys();let i=new qe((o,l)=>o-l),s=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Wn.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(i.get(l.batchId)||Re()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Zm();f.forEach(g=>{if(!s.has(g)){const v=i_(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(vr());let l=-1,c=s;return o.next(h=>$.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,Re())).next(f=>({batchId:l,changes:lb(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=ss();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ss();return this.indexManager.getCollectionParents(e,s).next(l=>$.forEach(l,c=>{const h=function(p,g){return new ki(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,gt.newInvalidDocument(f)))});let l=ss();return o.forEach((c,h)=>{const f=s.get(c);f!==void 0&&vs(f.mutation,h,Wn.empty(),tt.now()),$a(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class zb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ai(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Ub(i.bundledQuery),readTime:ai(i.readTime)}}(n)),$.resolve()}}/**
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
 */class Kb{constructor(){this.overlays=new qe(oe.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=vr(),s=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=vr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=vr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return $.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Eb(n,r));let s=this.Ir.get(n);s===void 0&&(s=Re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Wb{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Nu{constructor(){this.Tr=new at(Ze.Er),this.dr=new at(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new oe(new Ue([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new oe(new Ue([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=Re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return oe.comparator(e.key,n.key)||Ce(e.wr,n.wr)}static Ar(e,n){return Ce(e.wr,n.wr)||oe.comparator(e.key,n.key)}}/**
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
 */class Gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ze.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Ce);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;oe.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new oe(s),0);let l=new at(Ce);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.wr)),!0)},o),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){je(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Qb{constructor(e){this.Mr=e,this.docs=function(){return new qe(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ir();const o=n.path,l=new oe(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||F0(M0(f),r)<=0||(i.has(f.key)||$a(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){me()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jb(this)}getSize(e){return $.resolve(this.size)}}class Jb extends jb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Yb{constructor(e){this.persistence=e,this.Nr=new xi(n=>Ru(n),Su),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Nu,this.targetCount=0,this.kr=wi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class Xb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Tu(0),this.Kr=!1,this.Kr=!0,this.$r=new Wb,this.referenceDelegate=e(this),this.Ur=new Yb(this),this.indexManager=new Bb,this.remoteDocumentCache=function(i){return new Qb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Fb(n),this.Gr=new zb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Kb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Gb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const i=new Zb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Zb extends B0{constructor(e){super(),this.currentSequenceNumber=e}}class Du{constructor(e){this.persistence=e,this.Jr=new Nu,this.Yr=null}static Zr(e){return new Du(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=oe.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Vu{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Re(),i=Re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vu(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class eA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return aI()?8:$0(vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new eA;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ji()<=Ee.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ji()<=Ee.DEBUG&&ne("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ji()<=Ee.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):$.resolve())}Yi(e,n){if(vd(n))return $.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sc(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Re(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,Sc(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,i){return vd(n)||i.isEqual(pe.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?$.resolve(null):(Ji()<=Ee.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yr(n)),this.rs(e,o,n,L0(i,-1)).next(l=>l))})}ts(e,n){let r=new at(Ym(e));return n.forEach((i,s)=>{$a(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ji()<=Ee.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.Ji.getDocumentsMatchingQuery(e,n,nr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class nA{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new qe(Ce),this._s=new xi(s=>Ru(s),Su),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rA(t,e,n,r){return new nA(t,e,n,r)}async function __(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=Re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function y_(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function iA(t,e){const n=Ae(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(lt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),function(x,k,F){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,v,f)&&l.push(n.Ur.updateTargetData(s,v))});let c=ir(),h=Re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(sA(s,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(pe.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(n.os=i,s))}function sA(t,e,n){let r=Re(),i=Re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ir();return n.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function oA(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nc(t,e,n){const r=Ae(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ys(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function kd(t,e,n){const r=Ae(t);let i=pe.min(),s=Re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=Ae(c),g=p._s.get(f);return g!==void 0?$.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,tn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:pe.min(),n?s:Re())).next(l=>(aA(r,sb(e),l),{documents:l,Ts:s})))}function aA(t,e,n){let r=t.us.get(e)||pe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class xd{constructor(){this.activeTargetIds=hb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lA{constructor(){this.so=new xd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cA{_o(e){}shutdown(){}}/**
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
 */class Od{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Do=null;function Bl(){return Do===null?Do=function(){return 268435456+Math.round(2147483648*Math.random())}():Do++,"0x"+Do.toString(16)}/**
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
 */const uA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ft="WebChannelConnection";class fA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Bl(),c=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,c,h,i).then(f=>(ne("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw _i("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=uA[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Bl();return new Promise((o,l)=>{const c=new Vm;c.setWithCredentials(!0),c.listenOnce(Lm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bo.NO_ERROR:const f=c.getResponseJson();ne(ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Bo.TIMEOUT:ne(ft,`RPC '${e}' ${s} timed out`),l(new te(H.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const p=c.getStatus();if(ne(ft,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const S=function(k){const F=k.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(F)>=0?F:H.UNKNOWN}(v.status);l(new te(S,v.message))}else l(new te(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new te(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(ft,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);ne(ft,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Bl(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Um(),l=Fm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");ne(ft,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,v=!1;const S=new hA({Io:k=>{v?ne(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(ne(ft,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),ne(ft,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},To:()=>p.close()}),x=(k,F,N)=>{k.listen(F,V=>{try{N(V)}catch(D){setTimeout(()=>{throw D},0)}})};return x(p,is.EventType.OPEN,()=>{v||(ne(ft,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),x(p,is.EventType.CLOSE,()=>{v||(v=!0,ne(ft,`RPC '${e}' stream ${i} transport closed`),S.So())}),x(p,is.EventType.ERROR,k=>{v||(v=!0,_i(ft,`RPC '${e}' stream ${i} transport errored:`,k),S.So(new te(H.UNAVAILABLE,"The operation could not be completed")))}),x(p,is.EventType.MESSAGE,k=>{var F;if(!v){const N=k.data[0];je(!!N);const V=N,D=V.error||((F=V[0])===null||F===void 0?void 0:F.error);if(D){ne(ft,`RPC '${e}' stream ${i} received error:`,D);const B=D.status;let K=function(_){const T=Ke[_];if(T!==void 0)return o_(T)}(B),I=D.message;K===void 0&&(K=H.INTERNAL,I="Unknown error status: "+B+" with message "+D.message),v=!0,S.So(new te(K,I)),p.close()}else ne(ft,`RPC '${e}' stream ${i} received:`,N),S.bo(N)}}),x(l,Mm.STAT_EVENT,k=>{k.stat===wc.PROXY?ne(ft,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===wc.NOPROXY&&ne(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function $l(){return typeof document!="undefined"?document:null}/**
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
 */function za(t){return new Cb(t,!0)}/**
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
 */class v_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class dA{constructor(e,n,r,i,s,o,l,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new v_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new te(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pA extends dA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=kb(this.serializer,e),r=function(s){if(!("targetChange"in s))return pe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?ai(o.readTime):pe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Ac(c)?{documents:xb(s,c)}:{query:Ob(s,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=c_(s,o.resumeToken);const h=kc(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=xc(s,o.snapshotVersion.toTimestamp());const h=kc(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Db(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.a_(n)}}/**
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
 */class gA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Oc(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te(H.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Oc(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(H.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wn(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _A{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{to(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Ae(c);h.L_.add(4),await eo(h),h.q_.set("Unknown"),h.L_.delete(4),await Ka(h)}(this))})}),this.q_=new mA(r,i)}}async function Ka(t){if(to(t))for(const e of t.B_)await e(!0)}async function eo(t){for(const e of t.B_)await e(!1)}function E_(t,e){const n=Ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Uu(n)?Fu(n):Oi(n).r_()&&Mu(n,e))}function Lu(t,e){const n=Ae(t),r=Oi(n);n.N_.delete(e),r.r_()&&w_(n,e),n.N_.size===0&&(r.r_()?r.o_():to(n)&&n.q_.set("Unknown"))}function Mu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).A_(e)}function w_(t,e){t.Q_.xe(e),Oi(t).R_(e)}function Fu(t){t.Q_=new bb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.q_.v_()}function Uu(t){return to(t)&&!Oi(t).n_()&&t.N_.size>0}function to(t){return Ae(t).L_.size===0}function T_(t){t.Q_=void 0}async function yA(t){t.q_.set("Online")}async function vA(t){t.N_.forEach((e,n)=>{Mu(t,e)})}async function EA(t,e){T_(t),Uu(t)?(t.q_.M_(e),Fu(t)):t.q_.set("Unknown")}async function wA(t,e,n){if(t.q_.set("Online"),e instanceof l_&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nd(t,r)}else if(e instanceof jo?t.Q_.Ke(e):e instanceof a_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(pe.min()))try{const r=await y_(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),w_(s,c);const p=new Gn(f.target,c,h,f.sequenceNumber);Mu(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Nd(t,r)}}async function Nd(t,e,n){if(!Ys(e))throw e;t.L_.add(1),await eo(t),t.q_.set("Offline"),n||(n=()=>y_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ka(t)})}async function Dd(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=to(n);n.L_.add(3),await eo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ka(n)}async function TA(t,e){const n=Ae(t);e?(n.L_.delete(2),await Ka(n)):e||(n.L_.add(2),await eo(n),n.q_.set("Unknown"))}function Oi(t){return t.K_||(t.K_=function(n,r,i){const s=Ae(n);return s.w_(),new pA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yA.bind(null,t),Ro:vA.bind(null,t),mo:EA.bind(null,t),d_:wA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Uu(t)?Fu(t):t.q_.set("Unknown")):(await t.K_.stop(),T_(t))})),t.K_}/**
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
 */class Bu{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Bu(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Ys(t))return new te(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class li{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=ss(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new li(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Vd{constructor(){this.W_=new qe(oe.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ti{constructor(e,n,r,i,s,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ti(e,n,li.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class IA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bA{constructor(){this.queries=Ld(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Ae(n),s=i.queries;i.queries=Ld(),s.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new te(H.ABORTED,"Firestore shutting down"))}}function Ld(){return new xi(t=>Jm(t),Ba)}async function b_(t,e){const n=Ae(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new IA,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=I_(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&$u(n)}async function A_(t,e){const n=Ae(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AA(t,e){const n=Ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&$u(n)}function RA(t,e,n){const r=Ae(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function $u(t){t.Y_.forEach(e=>{e.next()})}var Dc,Md;(Md=Dc||(Dc={})).ea="default",Md.Cache="cache";class R_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Dc.Cache}}/**
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
 */class S_{constructor(e){this.key=e}}class C_{constructor(e){this.key=e}}class SA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Re(),this.mutatedKeys=Re(),this.Aa=Ym(e),this.Ra=new li(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Vd,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),v=$a(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),x=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;g&&v?g.data.isEqual(v.data)?S!==x&&(r.track({type:3,doc:v}),k=!0):this.ga(g,v)||(r.track({type:2,doc:v}),k=!0,(c&&this.Aa(v,c)>0||h&&this.Aa(v,h)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),k=!0):g&&!v&&(r.track({type:1,doc:g}),k=!0,(c||h)&&(l=!0)),k&&(v?(o=o.add(v),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,S){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return x(v)-x(S)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new Ti(this.query,e.Ra,s,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new C_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new S_(r))}),n}ba(e){this.Ta=e.Ts,this.da=Re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ti.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class CA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PA{constructor(e){this.key=e,this.va=!1}}class kA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xi(l=>Jm(l),Ba),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(oe.comparator),this.Na=new Map,this.La=new Nu,this.Ba={},this.ka=new Map,this.qa=wi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function xA(t,e,n=!0){const r=N_(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await P_(r,e,n,!0),i}async function OA(t,e){const n=N_(t);await P_(n,e,!0,!1)}async function P_(t,e,n,r){const i=await oA(t.localStore,tn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await NA(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&E_(t.remoteStore,i),l}async function NA(t,e,n,r,i){t.Ka=(p,g,v)=>async function(x,k,F,N){let V=k.view.ma(F);V.ns&&(V=await kd(x.localStore,k.query,!1).then(({documents:I})=>k.view.ma(I,V)));const D=N&&N.targetChanges.get(k.targetId),B=N&&N.targetMismatches.get(k.targetId)!=null,K=k.view.applyChanges(V,x.isPrimaryClient,D,B);return Ud(x,k.targetId,K.wa),K.snapshot}(t,p,g,v);const s=await kd(t.localStore,e,!0),o=new SA(e,s.Ts),l=o.ma(s.documents),c=Zs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,c);Ud(t,n,h.wa);const f=new CA(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function DA(t,e,n){const r=Ae(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ba(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Lu(r.remoteStore,i.targetId),Vc(r,i.targetId)}).catch(wu)):(Vc(r,i.targetId),await Nc(r.localStore,i.targetId,!0))}async function VA(t,e){const n=Ae(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Lu(n.remoteStore,r.targetId))}async function k_(t,e){const n=Ae(t);try{const r=await iA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(je(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?je(o.va):i.removedDocuments.size>0&&(je(o.va),o.va=!1))}),await O_(n,r,e)}catch(r){await wu(r)}}function Fd(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=Ae(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&$u(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LA(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new qe(oe.comparator);o=o.insert(s,gt.newNoDocument(s,pe.min()));const l=Re().add(s),c=new Ha(pe.min(),new Map,new qe(Ce),o,l);await k_(r,c),r.Oa=r.Oa.remove(s),r.Na.delete(e),ju(r)}else await Nc(r.localStore,e,!1).then(()=>Vc(r,e,n)).catch(wu)}function Vc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||x_(t,r)})}function x_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Lu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ju(t))}function Ud(t,e,n){for(const r of n)r instanceof S_?(t.La.addReference(r.key,e),MA(t,r)):r instanceof C_?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||x_(t,r.key)):me()}function MA(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),ju(t))}function ju(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new oe(Ue.fromString(e)),r=t.qa.next();t.Na.set(r,new PA(n)),t.Oa=t.Oa.insert(n,r),E_(t.remoteStore,new Gn(tn(Cu(n.path)),r,"TargetPurposeLimboResolution",Tu.oe))}}async function O_(t,e,n){const r=Ae(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Vu.Wi(c.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(c,h){const f=Ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(h,g=>$.forEach(g.$i,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>$.forEach(g.Ui,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Ys(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=f.os.get(g),S=v.snapshotVersion,x=v.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(g,x)}}}(r.localStore,s))}async function FA(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await __(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(c=>{c.reject(new te(H.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await O_(n,r.hs)}}function UA(t,e){const n=Ae(t),r=n.Na.get(e);if(r&&r.va)return Re().add(r.key);{let i=Re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function N_(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LA.bind(null,e),e.Ca.d_=AA.bind(null,e.eventManager),e.Ca.$a=RA.bind(null,e.eventManager),e}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=za(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rA(this.persistence,new tA,e.initialUser,this.serializer)}Ga(e){return new Xb(Du.Zr,this.serializer)}Wa(e){return new lA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class Lc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FA.bind(null,this.syncEngine),await TA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bA}()}createDatastore(e){const n=za(e.databaseInfo.databaseId),r=function(s){return new fA(s)}(e.databaseInfo);return function(s,o,l,c){return new gA(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _A(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fd(this.syncEngine,n,0),function(){return Od.D()?new Od:new cA}())}createSyncEngine(e,n){return function(i,s,o,l,c,h,f){const p=new kA(i,s,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Ae(i);ne("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await eo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lc.provider={build:()=>new Lc};/**
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
 */class D_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class BA{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=D0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=I_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jl(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await __(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $A(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dd(e.remoteStore,i)),t._onlineComponents=e}async function $A(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await jl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;_i("Error using user provided cache. Falling back to memory cache: "+n),await jl(t,new pa)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await jl(t,new pa);return t._offlineComponents}async function jA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Bd(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Bd(t,new Lc))),t._onlineComponents}async function Mc(t){const e=await jA(t),n=e.eventManager;return n.onListen=xA.bind(null,e.syncEngine),n.onUnlisten=DA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VA.bind(null,e.syncEngine),n}function qA(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new D_({next:g=>{f.Za(),o.enqueueAndForget(()=>A_(s,p)),g.fromCache&&c.source==="server"?h.reject(new te(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new R_(l,f,{includeMetadataChanges:!0,_a:!0});return b_(s,p)}(await Mc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function V_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $d=new Map;/**
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
 */function HA(t,e,n){if(!n)throw new te(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zA(t,e,n,r){if(e===!0&&r===!0)throw new te(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jd(t){if(oe.isDocumentKey(t))throw new te(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function ci(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wa(t);throw new te(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class qd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new R0;switch(r.type){case"firstParty":return new k0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$d.get(n);r&&(ne("ComponentProvider","Removing Datastore"),$d.delete(n),r.terminate())}(this),Promise.resolve()}}function KA(t,e,n,r={}){var i;const s=(t=ci(t,qu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=dt.MOCK_USER;else{l=eI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new te(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new dt(h)}t._authCredentials=new S0(new Bm(l,c))}}/**
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
 */class lr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class on{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class ui extends lr{constructor(e,n,r){super(e,n,Cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new oe(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Bk(t,e,...n){if(t=St(t),HA("collection","path",e),t instanceof qu){const r=Ue.fromString(e,...n);return jd(r),new ui(t,null,r)}{if(!(t instanceof on||t instanceof ui))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return jd(r),new ui(t.firestore,null,r)}}/**
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
 */class Hd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new v_(this,"async_queue_retry"),this.Vu=()=>{const r=$l();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=$l();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=$l();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ar;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ys(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Bu.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&me()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function zd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ga extends qu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hd(e),this._firestoreClient=void 0,await e}}}function WA(t,e){const n=typeof t=="object"?t:xm(),r=typeof t=="string"?t:e||"(default)",i=vu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=XT("firestore");s&&KA(i,...s)}return i}function L_(t){if(t._terminated)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||GA(t),t._firestoreClient}function GA(t){var e,n,r;const i=t._freezeSettings(),s=function(l,c,h,f){return new H0(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,V_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new BA(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ii(lt.fromBase64String(e))}catch(n){throw new te(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ii(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class M_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class F_{constructor(e){this._methodName=e}}/**
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
 */class Hu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class zu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const QA=/^__.*__$/;function U_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Ku{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ku(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(U_(this.Cu)&&QA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||za(e)}Qu(e,n,r,i=!1){return new Ku({Cu:e,methodName:n,qu:r,path:_t.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function YA(t){const e=t._freezeSettings(),n=za(t._databaseId);return new JA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XA(t,e,n,r=!1){return Wu(n,t.Qu(r?4:3,e))}function Wu(t,e){if(B_(t=St(t)))return eR("Unsupported field value:",e,t),ZA(t,e);if(t instanceof F_)return function(r,i){if(!U_(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Wu(l,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=St(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=tt.fromDate(r);return{timestampValue:xc(i.serializer,s)}}if(r instanceof tt){const s=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xc(i.serializer,s)}}if(r instanceof Hu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ii)return{bytesValue:c_(i.serializer,r._byteString)};if(r instanceof on){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:u_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof zu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Pu(l.serializer,c)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Wa(r)}`)}(t,e)}function ZA(t,e){const n={};return $m(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(r,i)=>{const s=Wu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function B_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Hu||t instanceof Ii||t instanceof on||t instanceof F_||t instanceof zu)}function eR(t,e,n){if(!B_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Wa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}const tR=new RegExp("[~\\*/\\[\\]]");function nR(t,e,n){if(e.search(tR)>=0)throw Fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new M_(...e.split("."))._internalPath}catch{throw Fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new te(H.INVALID_ARGUMENT,l+t+c)}/**
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
 */class $_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ga("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rR extends $_{data(){return super.data()}}function Ga(t,e){return typeof e=="string"?nR(t,e):e instanceof M_?e._internalPath:e._delegate._internalPath}/**
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
 */function j_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gu{}class q_ extends Gu{}function $k(t,e,...n){let r=[];e instanceof Gu&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Qu).length,l=s.filter(c=>c instanceof Qa).length;if(o>1||o>0&&l>0)throw new te(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Qa extends q_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qa(e,n,r)}_apply(e){const n=this._parse(e);return H_(e._query,n),new lr(e.firestore,e.converter,Rc(e._query,n))}_parse(e){const n=YA(e.firestore);return function(s,o,l,c,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new te(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Wd(p,f);const v=[];for(const S of p)v.push(Kd(c,s,S));g={arrayValue:{values:v}}}else g=Kd(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Wd(p,f),g=XA(l,o,p,f==="in"||f==="not-in");return We.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function jk(t,e,n){const r=e,i=Ga("where",t);return Qa._create(i,r,n)}class Qu extends Gu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)H_(o,c),o=Rc(o,c)}(e._query,n),new lr(e.firestore,e.converter,Rc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ju extends q_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ju(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new te(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new te(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Us(s,o)}(e._query,this._field,this._direction);return new lr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ki(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function qk(t,e="asc"){const n=e,r=Ga("orderBy",t);return Ju._create(r,n)}function Kd(t,e,n){if(typeof(n=St(n))=="string"){if(n==="")throw new te(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qm(e)&&n.indexOf("/")!==-1)throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!oe.isDocumentKey(r))throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dd(t,new oe(r))}if(n instanceof on)return dd(t,n._key);throw new te(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wa(n)}.`)}function Wd(t,e){if(!Array.isArray(t)||t.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function H_(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class iR{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>He(o.doubleValue));return new zu(s)}convertGeoPoint(e){return new Hu(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ls(e));default:return null}}convertTimestamp(e){const n=rr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);je(m_(r));const i=new Ms(r.get(1),r.get(3)),s=new oe(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class as{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class z_ extends $_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ga("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qo extends z_{data(e={}){return super.data(e)}}class K_{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qo(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new qo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new as(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new qo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new as(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:sR(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class Yu extends iR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,n)}}function Hk(t){t=ci(t,lr);const e=ci(t.firestore,ga),n=L_(e),r=new Yu(e);return j_(t._query),qA(n,t._query).then(i=>new K_(e,r,t,i))}function zk(t,...e){var n,r,i;t=St(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||zd(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(zd(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,h,f;if(t instanceof on)h=ci(t.firestore,ga),f=Cu(t._key.path),c={next:p=>{e[o]&&e[o](oR(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=ci(t,lr);h=ci(p.firestore,ga),f=p._query;const g=new Yu(h);c={next:v=>{e[o]&&e[o](new K_(h,g,p,v))},error:e[o+1],complete:e[o+2]},j_(t._query)}return function(g,v,S,x){const k=new D_(x),F=new R_(v,k,S);return g.asyncQueue.enqueueAndForget(async()=>b_(await Mc(g),F)),()=>{k.Za(),g.asyncQueue.enqueueAndForget(async()=>A_(await Mc(g),F))}}(L_(h),f,l,c)}function oR(t,e,n){const r=n.docs.get(e._key),i=new Yu(t);return new z_(t,i,e._key,r,new as(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Pi=i})(Ci),mi(new xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ga(new C0(r.getProvider("auth-internal")),new O0(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Xn(ld,"4.7.3",e),Xn(ld,"4.7.3","esm2017")})();function Xu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function W_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aR=W_,G_=new Qs("auth","Firebase",W_());/**
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
 */const ma=new _u("@firebase/auth");function lR(t,...e){ma.logLevel<=Ee.WARN&&ma.warn(`Auth (${Ci}): ${t}`,...e)}function Ho(t,...e){ma.logLevel<=Ee.ERROR&&ma.error(`Auth (${Ci}): ${t}`,...e)}/**
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
 */function Wt(t,...e){throw Zu(t,...e)}function nn(t,...e){return Zu(t,...e)}function Q_(t,e,n){const r=Object.assign(Object.assign({},aR()),{[e]:n});return new Qs("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return Q_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return G_.create(t,...e)}function ce(t,e,...n){if(!t)throw Zu(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ho(e),new Error(e)}function Tn(t,e){t||gn(e)}/**
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
 */function Uc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cR(){return Gd()==="http:"||Gd()==="https:"}function Gd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uR(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cR()||iI()||"connection"in navigator)?navigator.onLine:!0}function hR(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=tI()||sI()}get(){return uR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eh(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class J_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dR=new no(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,i={}){return Y_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Js(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},s);return rI()||(h.referrerPolicy="no-referrer"),J_.fetch()(X_(t,t.config.apiHost,n,l),h)})}async function Y_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fR),e);try{const i=new gR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Q_(t,f,h);Wt(t,f)}}catch(i){if(i instanceof bn)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function Ja(t,e,n,r,i={}){const s=await cr(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function X_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?eh(t.config,i):`${t.config.apiScheme}://${i}`}function pR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),dR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function Qd(t){return t!==void 0&&t.enterprise!==void 0}class mR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _R(t,e){return cr(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
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
 */async function yR(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function Z_(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Es(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vR(t,e=!1){const n=St(t),r=await n.getIdToken(e),i=th(r);ce(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Es(ql(i.auth_time)),issuedAtTime:Es(ql(i.iat)),expirationTime:Es(ql(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ql(t){return Number(t)*1e3}function th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const i=bm(n);return i?JSON.parse(i):(Ho("Failed to decode base64 JWT payload"),null)}catch(i){return Ho("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jd(t){const e=th(t);return ce(e,"internal-error"),ce(typeof e.exp!="undefined","internal-error"),ce(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&ER(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ER({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bs(t,Z_(n,{idToken:r}));ce(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ey(s.providerUserInfo):[],l=IR(t.providerData,o),c=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function TR(t){const e=St(t);await _a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ey(t){return t.map(e=>{var{providerId:n}=e,r=Xu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bR(t,e){const n=await Y_(t,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=X_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",J_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AR(t,e){return cr(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken!="undefined","internal-error"),ce(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Jd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hi;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function On(t,e){ce(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vR(this,e)}reload(){return TR(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Bs(this,yR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(h=n.createdAt)!==null&&h!==void 0?h:void 0,N=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:D,isAnonymous:B,providerData:K,stsTokenManager:I}=n;ce(V&&I,e,"internal-error");const y=hi.fromJSON(this.name,I);ce(typeof V=="string",e,"internal-error"),On(p,e.name),On(g,e.name),ce(typeof D=="boolean",e,"internal-error"),ce(typeof B=="boolean",e,"internal-error"),On(v,e.name),On(S,e.name),On(x,e.name),On(k,e.name),On(F,e.name),On(N,e.name);const _=new mn({uid:V,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:B,photoURL:S,phoneNumber:v,tenantId:x,stsTokenManager:y,createdAt:F,lastLoginAt:N});return K&&Array.isArray(K)&&(_.providerData=K.map(T=>Object.assign({},T))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new hi;i.updateFromServerResponse(n);const s=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _a(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ce(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ey(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new hi;l.updateFromIdToken(r);const c=new mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Bc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const Yd=new Map;function _n(t){Tn(t instanceof Function,"Expected a class definition");let e=Yd.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yd.set(t,e),e)}/**
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
 */class ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ty.type="NONE";const Xd=ty;/**
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
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=zo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fi(_n(Xd),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||_n(Xd);const o=zo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=mn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new fi(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new fi(s,e,r))}}/**
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
 */function Zd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ay(e))return"Blackberry";if(ly(e))return"Webos";if(ry(e))return"Safari";if((e.includes("chrome/")||iy(e))&&!e.includes("edge/"))return"Chrome";if(oy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ny(t=vt()){return/firefox\//i.test(t)}function ry(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iy(t=vt()){return/crios\//i.test(t)}function sy(t=vt()){return/iemobile/i.test(t)}function oy(t=vt()){return/android/i.test(t)}function ay(t=vt()){return/blackberry/i.test(t)}function ly(t=vt()){return/webos/i.test(t)}function nh(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RR(t=vt()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SR(){return oI()&&document.documentMode===10}function cy(t=vt()){return nh(t)||oy(t)||ly(t)||ay(t)||/windows phone/i.test(t)||sy(t)}/**
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
 */function uy(t,e=[]){let n;switch(t){case"Browser":n=Zd(vt());break;case"Worker":n=`${Zd(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}/**
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
 */class CR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function PR(t,e={}){return cr(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const kR=6;class xR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class OR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ep(this),this.idTokenSubscription=new ep(this),this.beforeStateQueue=new CR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Z_(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Zn(this));const n=e?St(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PR(this),n=new xR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ni(t){return St(t)}class ep{constructor(e){this.auth=e,this.observer=null,this.addObserver=pI(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NR(t){Ya=t}function hy(t){return Ya.loadJS(t)}function DR(){return Ya.recaptchaEnterpriseScript}function VR(){return Ya.gapiScript}function LR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const MR="recaptcha-enterprise",FR="NO_RECAPTCHA";class UR{constructor(e){this.type=MR,this.auth=Ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{_R(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new mR(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;Qd(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(FR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Qd(window.grecaptcha))i(l,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=DR();c.length!==0&&(c+=l),hy(c).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function tp(t,e,n,r=!1){const i=new UR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function np(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await tp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await tp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function BR(t,e){const n=vu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(la(s,e!=null?e:{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function $R(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jR(t,e,n){const r=Ni(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fy(e),{host:o,port:l}=qR(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||HR()}function fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qR(t){const e=fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rp(o)}}}function rp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function zR(t,e){return cr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function KR(t,e){return Ja(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
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
 */async function WR(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function GR(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
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
 */class $s extends rh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $s(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $s(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return np(e,n,"signInWithPassword",KR);case"emailLink":return WR(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return np(e,r,"signUpPassword",zR);case"emailLink":return GR(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function di(t,e){return Ja(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
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
 */const QR="http://localhost";class Vr extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:QR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
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
 */function JR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YR(t){const e=ns(rs(t)).link,n=e?ns(rs(e)).deep_link_id:null,r=ns(rs(t)).deep_link_id;return(r?ns(rs(r)).link:null)||r||n||e||t}class ih{constructor(e){var n,r,i,s,o,l;const c=ns(rs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=JR((i=c.mode)!==null&&i!==void 0?i:null);ce(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=YR(e);try{return new ih(n)}catch{return null}}}/**
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return $s._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ih.parseLink(n);return ce(r,"argument-error"),$s._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ro extends dy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends ro{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class zn extends ro{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class Kn extends ro{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mn._fromIdTokenResponse(e,r,i),o=ip(r);return new bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ip(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ip(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ya extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ya.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ya(e,n,r,i)}}function py(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ya._fromErrorAndOperation(t,s,e,r):s})}async function XR(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
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
 */async function ZR(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const s=await Bs(t,py(r,i,e,t),n);ce(s.idToken,r,"internal-error");const o=th(s.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
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
 */async function gy(t,e,n=!1){if(pn(t.app))return Promise.reject(Zn(t));const r="signIn",i=await py(t,r,e),s=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eS(t,e){return gy(Ni(t),e)}/**
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
 */async function tS(t){const e=Ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function nS(t,e,n){return pn(t.app)?Promise.reject(Zn(t)):eS(St(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tS(t),r})}function rS(t,e,n,r){return St(t).onIdTokenChanged(e,n,r)}function iS(t,e,n){return St(t).beforeAuthStateChanged(e,n)}function sS(t,e,n,r){return St(t).onAuthStateChanged(e,n,r)}function oS(t){return St(t).signOut()}const va="__sak";/**
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
 */class my{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(va,"1"),this.storage.removeItem(va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aS=1e3,lS=10;class _y extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_y.type="LOCAL";const cS=_y;/**
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
 */class yy extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yy.type="SESSION";const vy=yy;/**
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
 */function uS(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),c=await uS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xa.receivers=[];/**
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
 */function sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const h=sh("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function fS(t){rn().location.href=t}/**
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
 */function Ey(){return typeof rn().WorkerGlobalScope!="undefined"&&typeof rn().importScripts=="function"}async function dS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gS(){return Ey()?self:null}/**
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
 */const wy="firebaseLocalStorageDb",mS=1,Ea="firebaseLocalStorage",Ty="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Za(t,e){return t.transaction([Ea],e?"readwrite":"readonly").objectStore(Ea)}function _S(){const t=indexedDB.deleteDatabase(wy);return new io(t).toPromise()}function $c(){const t=indexedDB.open(wy,mS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ea,{keyPath:Ty})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ea)?e(r):(r.close(),await _S(),e(await $c()))})})}async function sp(t,e,n){const r=Za(t,!0).put({[Ty]:e,value:n});return new io(r).toPromise()}async function yS(t,e){const n=Za(t,!1).get(e),r=await new io(n).toPromise();return r===void 0?null:r.value}function op(t,e){const n=Za(t,!0).delete(e);return new io(n).toPromise()}const vS=800,ES=3;class Iy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ES)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xa._getInstance(gS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dS(),!this.activeServiceWorker)return;this.sender=new hS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await sp(e,va,"1"),await op(e,va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Za(i,!1).getAll();return new io(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iy.type="LOCAL";const wS=Iy;new no(3e4,6e4);/**
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
 */function TS(t,e){return e?_n(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oh extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IS(t){return gy(t.auth,new oh(t),t.bypassAuthState)}function bS(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),ZR(n,new oh(t),t.bypassAuthState)}async function AS(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),XR(n,new oh(t),t.bypassAuthState)}/**
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
 */class by{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IS;case"linkViaPopup":case"linkViaRedirect":return AS;case"reauthViaPopup":case"reauthViaRedirect":return bS;default:Wt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RS=new no(2e3,1e4);class ni extends by{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RS.get())};e()}}ni.currentPopupAction=null;/**
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
 */const SS="pendingRedirect",Ko=new Map;class CS extends by{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ko.get(this.auth._key());if(!e){try{const r=await PS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ko.set(this.auth._key(),e)}return this.bypassAuthState||Ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PS(t,e){const n=OS(e),r=xS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kS(t,e){Ko.set(t._key(),e)}function xS(t){return _n(t._redirectPersistence)}function OS(t){return zo(SS,t.config.apiKey,t.name)}async function NS(t,e,n=!1){if(pn(t.app))return Promise.reject(Zn(t));const r=Ni(t),i=TS(r,e),o=await new CS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DS=10*60*1e3;class VS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ay(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ap(e))}saveEventToCache(e){this.cachedEventUids.add(ap(e)),this.lastProcessedEventTime=Date.now()}}function ap(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ay({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ay(t);default:return!1}}/**
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
 */async function MS(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
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
 */const FS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,US=/^https?/;async function BS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MS(t);for(const n of e)try{if($S(n))return}catch{}Wt(t,"unauthorized-domain")}function $S(t){const e=Uc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!US.test(n))return!1;if(FS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jS=new no(3e4,6e4);function lp(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qS(t){return new Promise((e,n)=>{var r,i,s;function o(){lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lp(),n(nn(t,"network-request-failed"))},timeout:jS.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const l=LR("iframefcb");return rn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},hy(`${VR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Wo=null,e})}let Wo=null;function HS(t){return Wo=Wo||qS(t),Wo}/**
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
 */const zS=new no(5e3,15e3),KS="__/auth/iframe",WS="emulator/auth/iframe",GS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JS(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,WS):`https://${t.config.authDomain}/${KS}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=QS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Js(r).slice(1)}`}async function YS(t){const e=await HS(t),n=rn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:JS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=rn().setTimeout(()=>{s(o)},zS.get());function c(){rn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const XS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZS=500,eC=600,tC="_blank",nC="http://localhost";class cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rC(t,e,n,r=ZS,i=eC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},XS),{width:r.toString(),height:i.toString(),top:s,left:o}),h=vt().toLowerCase();n&&(l=iy(h)?tC:n),ny(h)&&(e=e||nC,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[v,S])=>`${g}${v}=${S},`,"");if(RR(h)&&l!=="_self")return iC(e||"",l),new cp(null);const p=window.open(e||"",l,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new cp(p)}function iC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sC="__/auth/handler",oC="emulator/auth/handler",aC=encodeURIComponent("fac");async function up(t,e,n,r,i,s){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof dy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof ro){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${aC}=${encodeURIComponent(c)}`:"";return`${lC(t)}?${Js(l).slice(1)}${h}`}function lC({config:t}){return t.emulator?eh(t,oC):`https://${t.authDomain}/${sC}`}/**
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
 */const Hl="webStorageSupport";class cC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vy,this._completeRedirectFn=NS,this._overrideRedirectResult=kS}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await up(e,n,r,Uc(),i);return rC(e,o,sh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await up(e,n,r,Uc(),i);return fS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YS(e),r=new VS(e);return n.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hl];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cy()||ry()||nh()}}const uC=cC;var hp="@firebase/auth",fp="1.7.9";/**
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
 */class hC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dC(t){mi(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uy(t)},h=new OR(r,i,s,c);return $R(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mi(new xr("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(r=>new hC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(hp,fp,fC(t)),Xn(hp,fp,"esm2017")}/**
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
 */const pC=5*60,gC=Sm("authIdTokenMaxAge")||pC;let dp=null;const mC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gC)return;const i=n==null?void 0:n.token;dp!==i&&(dp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _C(t=xm()){const e=vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BR(t,{popupRedirectResolver:uC,persistence:[wS,cS,vy]}),r=Sm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=mC(s.toString());iS(n,o,()=>o(n.currentUser)),rS(n,l=>o(l))}}const i=Am("auth");return i&&jR(n,`http://${i}`),n}function yC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dC("Browser");const vC={apiKey:"AIzaSyDHEBXd5mlbxLN12hAIPcKsY0fF1C8A8Jk",authDomain:"yahrzeitboard.firebaseapp.com",projectId:"yahrzeitboard",storageBucket:"yahrzeitboard.appspot.com",messagingSenderId:"1000296735348",appId:"1:1000296735348:web:11f4422a37b0275300e721"},Ry=km(vC),Kk=WA(Ry),zl=_C(Ry),EC=HT("storeAuth",{state:()=>({user:{},loggedIn:!1,li2:!1}),actions:{init(){sS(zl,t=>{t?(console.log("user logged in",t),this.user.id=t.uid,this.user.email=t.email,t.uid):this.user={}})},loginUser(t){nS(zl,t.email,t.password).then(e=>{const n=e.user;this.user.id=n.id,this.user.email=n.email,this.loggedIn=!0,console.log("user",n)}),console.log("User logged in",t)},logoutUser(){this.loggedIn="",this.loggedIn=!1,console.log("set logged in to",this.loggedIn),oS(zl).then(()=>{console.log(`User ${this.user.email} signed out`),this.user={}}).catch(t=>{console.log("Error:",t.message)})}}}),wC=Object.assign({name:"App"},{__name:"App",setup(t){const e=EC();return ka(()=>{e.init()}),(n,r)=>{const i=LE("router-view");return ta(),na(i)}}});function Wk(t){return t}var Kl=()=>FT();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ei=typeof document!="undefined";function Sy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function TC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sy(t.default)}const ke=Object.assign;function Wl(t,e){const n={};for(const r in e){const i=e[r];n[r]=Gt(i)?i.map(t):t(i)}return n}const ws=()=>{},Gt=Array.isArray,Cy=/#/g,IC=/&/g,bC=/\//g,AC=/=/g,RC=/\?/g,Py=/\+/g,SC=/%5B/g,CC=/%5D/g,ky=/%5E/g,PC=/%60/g,xy=/%7B/g,kC=/%7C/g,Oy=/%7D/g,xC=/%20/g;function ah(t){return encodeURI(""+t).replace(kC,"|").replace(SC,"[").replace(CC,"]")}function OC(t){return ah(t).replace(xy,"{").replace(Oy,"}").replace(ky,"^")}function jc(t){return ah(t).replace(Py,"%2B").replace(xC,"+").replace(Cy,"%23").replace(IC,"%26").replace(PC,"`").replace(xy,"{").replace(Oy,"}").replace(ky,"^")}function NC(t){return jc(t).replace(AC,"%3D")}function DC(t){return ah(t).replace(Cy,"%23").replace(RC,"%3F")}function VC(t){return t==null?"":DC(t).replace(bC,"%2F")}function js(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const LC=/\/$/,MC=t=>t.replace(LC,"");function Gl(t,e,n="/"){let r,i={},s="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,l>-1?l:e.length),i=t(s)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=$C(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:js(o)}}function FC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UC(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ai(e.matched[r],n.matched[i])&&Ny(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ai(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ny(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BC(t[n],e[n]))return!1;return!0}function BC(t,e){return Gt(t)?gp(t,e):Gt(e)?gp(e,t):t===e}function gp(t,e){return Gt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $C(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qs;(function(t){t.pop="pop",t.push="push"})(qs||(qs={}));var Ts;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ts||(Ts={}));function jC(t){if(!t)if(ei){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),MC(t)}const qC=/^[^#]+#/;function HC(t,e){return t.replace(qC,"#")+e}function zC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const el=()=>({left:window.scrollX,top:window.scrollY});function KC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mp(t,e){return(history.state?history.state.position-e:-1)+t}const qc=new Map;function WC(t,e){qc.set(t,e)}function GC(t){const e=qc.get(t);return qc.delete(t),e}let QC=()=>location.protocol+"//"+location.host;function Dy(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let l=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),pp(c,"")}return pp(n,t)+r+i}function JC(t,e,n,r){let i=[],s=[],o=null;const l=({state:g})=>{const v=Dy(t,location),S=n.value,x=e.value;let k=0;if(g){if(n.value=v,e.value=g,o&&o===S){o=null;return}k=x?g.position-x.position:0}else r(v);i.forEach(F=>{F(n.value,S,{delta:k,type:qs.pop,direction:k?k>0?Ts.forward:Ts.back:Ts.unknown})})};function c(){o=n.value}function h(g){i.push(g);const v=()=>{const S=i.indexOf(g);S>-1&&i.splice(S,1)};return s.push(v),v}function f(){const{history:g}=window;!g.state||g.replaceState(ke({},g.state,{scroll:el()}),"")}function p(){for(const g of s)g();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function _p(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?el():null}}function YC(t){const{history:e,location:n}=window,r={value:Dy(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:QC()+t+c;try{e[f?"replaceState":"pushState"](h,"",g),i.value=h}catch(v){console.error(v),n[f?"replace":"assign"](g)}}function o(c,h){const f=ke({},e.state,_p(i.value.back,c,i.value.forward,!0),h,{position:i.value.position});s(c,f,!0),r.value=c}function l(c,h){const f=ke({},i.value,e.state,{forward:c,scroll:el()});s(f.current,f,!0);const p=ke({},_p(r.value,c,null),{position:f.position+1},h);s(c,p,!1),r.value=c}return{location:r,state:i,push:l,replace:o}}function XC(t){t=jC(t);const e=YC(t),n=JC(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ke({location:"",base:t,go:r,createHref:HC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ZC(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),XC(t)}function eP(t){return typeof t=="string"||t&&typeof t=="object"}function Vy(t){return typeof t=="string"||typeof t=="symbol"}const Ly=Symbol("");var yp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yp||(yp={}));function Ri(t,e){return ke(new Error,{type:t,[Ly]:!0},e)}function un(t,e){return t instanceof Error&&Ly in t&&(e==null||!!(t.type&e))}const vp="[^/]+?",tP={sensitive:!1,strict:!1,start:!0,end:!0},nP=/[.+*?^${}()[\]/\\]/g;function rP(t,e){const n=ke({},tP,e),r=[];let i=n.start?"^":"";const s=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(i+="/");for(let p=0;p<h.length;p++){const g=h[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(i+="/"),i+=g.value.replace(nP,"\\$&"),v+=40;else if(g.type===1){const{value:S,repeatable:x,optional:k,regexp:F}=g;s.push({name:S,repeatable:x,optional:k});const N=F||vp;if(N!==vp){v+=10;try{new RegExp(`(${N})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${S}" (${N}): `+D.message)}}let V=x?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(V=k&&h.length<2?`(?:/${V})`:"/"+V),k&&(V+="?"),i+=V,v+=20,k&&(v+=-8),x&&(v+=-20),N===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const v=f[g]||"",S=s[g-1];p[S.name]=v&&S.repeatable?v.split("/"):v}return p}function c(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of g)if(v.type===0)f+=v.value;else if(v.type===1){const{value:S,repeatable:x,optional:k}=v,F=S in h?h[S]:"";if(Gt(F)&&!x)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const N=Gt(F)?F.join("/"):F;if(!N)if(k)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=N}}return f||"/"}return{re:o,score:r,keys:s,parse:l,stringify:c}}function iP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function My(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=iP(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Ep(r))return 1;if(Ep(i))return-1}return i.length-r.length}function Ep(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sP={type:0,value:""},oP=/[a-zA-Z0-9_]/;function aP(t){if(!t)return[[]];if(t==="/")return[[sP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let l=0,c,h="",f="";function p(){!h||(n===0?s.push({type:0,value:h}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:oP.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),i}function lP(t,e,n){const r=rP(aP(t.path),n),i=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function cP(t,e){const n=[],r=new Map;e=bp({strict:!1,end:!0,sensitive:!1},e);function i(p){return r.get(p)}function s(p,g,v){const S=!v,x=Tp(p);x.aliasOf=v&&v.record;const k=bp(e,p),F=[x];if("alias"in p){const D=typeof p.alias=="string"?[p.alias]:p.alias;for(const B of D)F.push(Tp(ke({},x,{components:v?v.record.components:x.components,path:B,aliasOf:v?v.record:x})))}let N,V;for(const D of F){const{path:B}=D;if(g&&B[0]!=="/"){const K=g.record.path,I=K[K.length-1]==="/"?"":"/";D.path=g.record.path+(B&&I+B)}if(N=lP(D,g,k),v?v.alias.push(N):(V=V||N,V!==N&&V.alias.push(N),S&&p.name&&!Ip(N)&&o(p.name)),Fy(N)&&c(N),x.children){const K=x.children;for(let I=0;I<K.length;I++)s(K[I],N,v&&v.children[I])}v=v||N}return V?()=>{o(V)}:ws}function o(p){if(Vy(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=fP(p,n);n.splice(g,0,p),p.record.name&&!Ip(p)&&r.set(p.record.name,p)}function h(p,g){let v,S={},x,k;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Ri(1,{location:p});k=v.record.name,S=ke(wp(g.params,v.keys.filter(V=>!V.optional).concat(v.parent?v.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&wp(p.params,v.keys.map(V=>V.name))),x=v.stringify(S)}else if(p.path!=null)x=p.path,v=n.find(V=>V.re.test(x)),v&&(S=v.parse(x),k=v.record.name);else{if(v=g.name?r.get(g.name):n.find(V=>V.re.test(g.path)),!v)throw Ri(1,{location:p,currentLocation:g});k=v.record.name,S=ke({},g.params,p.params),x=v.stringify(S)}const F=[];let N=v;for(;N;)F.unshift(N.record),N=N.parent;return{name:k,path:x,params:S,matched:F,meta:hP(F)}}t.forEach(p=>s(p));function f(){n.length=0,r.clear()}return{addRoute:s,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:i}}function wp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Tp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:uP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function uP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ip(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hP(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function bp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fP(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;My(t,e[s])<0?r=s:n=s+1}const i=dP(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function dP(t){let e=t;for(;e=e.parent;)if(Fy(e)&&My(t,e)===0)return e}function Fy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Py," "),o=s.indexOf("="),l=js(o<0?s:s.slice(0,o)),c=o<0?null:js(s.slice(o+1));if(l in e){let h=e[l];Gt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Ap(t){let e="";for(let n in t){const r=t[n];if(n=NC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(r)?r.map(s=>s&&jc(s)):[r&&jc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function gP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Gt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const mP=Symbol(""),Rp=Symbol(""),lh=Symbol(""),Uy=Symbol(""),Hc=Symbol("");function Yi(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $n(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Ri(4,{from:n,to:e})):g instanceof Error?c(g):eP(g)?c(Ri(2,{from:e,to:g})):(o&&r.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),l())},f=s(()=>t.call(r&&r.instances[i],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function Ql(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Sy(c)){const f=(c.__vccOpts||c)[e];f&&s.push($n(f,n,r,o,l,i))}else{let h=c();s.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=TC(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&$n(v,n,r,o,l,i)()}))}}return s}function Sp(t){const e=Zt(lh),n=Zt(Uy),r=fe(()=>{const c=wr(t.to);return e.resolve(c)}),i=fe(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Ai.bind(null,f));if(g>-1)return g;const v=Cp(c[h-2]);return h>1&&Cp(f)===v&&p[p.length-1].path!==v?p.findIndex(Ai.bind(null,c[h-2])):g}),s=fe(()=>i.value>-1&&EP(n.params,r.value.params)),o=fe(()=>i.value>-1&&i.value===n.matched.length-1&&Ny(n.params,r.value.params));function l(c={}){return vP(c)?e[wr(t.replace)?"replace":"push"](wr(t.to)).catch(ws):Promise.resolve()}return{route:r,href:fe(()=>r.value.href),isActive:s,isExactActive:o,navigate:l}}const _P=hu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sp,setup(t,{slots:e}){const n=Mr(Sp(t)),{options:r}=Zt(lh),i=fe(()=>({[Pp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Pp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:he("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),yP=_P;function vP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EP(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Gt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Cp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pp=(t,e,n)=>t!=null?t:e!=null?e:n,wP=hu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(Hc),i=fe(()=>t.route||r.value),s=Zt(Rp,0),o=fe(()=>{let h=wr(s);const{matched:f}=i.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=fe(()=>i.value.matched[o.value]);Mo(Rp,fe(()=>o.value+1)),Mo(mP,l),Mo(Hc,i);const c=Cr();return oi(()=>[c.value,l.value,t.name],([h,f,p],[g,v,S])=>{f&&(f.instances[p]=h,v&&v!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),h&&f&&(!v||!Ai(f,v)||!g)&&(f.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=i.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return kp(n.default,{Component:g,route:h});const v=p.props[f],S=v?v===!0?h.params:typeof v=="function"?v(h):v:null,k=he(g,ke({},S,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return kp(n.default,{Component:k,route:h})||k}}});function kp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TP=wP;function IP(t){const e=cP(t.routes,t),n=t.parseQuery||pP,r=t.stringifyQuery||Ap,i=t.history,s=Yi(),o=Yi(),l=Yi(),c=aE(Nn);let h=Nn;ei&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Wl.bind(null,M=>""+M),p=Wl.bind(null,VC),g=Wl.bind(null,js);function v(M,Z){let Y,ee;return Vy(M)?(Y=e.getRecordMatcher(M),ee=Z):ee=M,e.addRoute(ee,Y)}function S(M){const Z=e.getRecordMatcher(M);Z&&e.removeRoute(Z)}function x(){return e.getRoutes().map(M=>M.record)}function k(M){return!!e.getRecordMatcher(M)}function F(M,Z){if(Z=ke({},Z||c.value),typeof M=="string"){const b=Gl(n,M,Z.path),P=e.resolve({path:b.path},Z),U=i.createHref(b.fullPath);return ke(b,P,{params:g(P.params),hash:js(b.hash),redirectedFrom:void 0,href:U})}let Y;if(M.path!=null)Y=ke({},M,{path:Gl(n,M.path,Z.path).path});else{const b=ke({},M.params);for(const P in b)b[P]==null&&delete b[P];Y=ke({},M,{params:p(b)}),Z.params=p(Z.params)}const ee=e.resolve(Y,Z),ve=M.hash||"";ee.params=f(g(ee.params));const xe=FC(r,ke({},M,{hash:OC(ve),path:ee.path})),E=i.createHref(xe);return ke({fullPath:xe,hash:ve,query:r===Ap?gP(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:E})}function N(M){return typeof M=="string"?Gl(n,M,c.value.path):ke({},M)}function V(M,Z){if(h!==M)return Ri(8,{from:Z,to:M})}function D(M){return I(M)}function B(M){return D(ke(N(M),{replace:!0}))}function K(M){const Z=M.matched[M.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ee=typeof Y=="function"?Y(M):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=N(ee):{path:ee},ee.params={}),ke({query:M.query,hash:M.hash,params:ee.path!=null?{}:M.params},ee)}}function I(M,Z){const Y=h=F(M),ee=c.value,ve=M.state,xe=M.force,E=M.replace===!0,b=K(Y);if(b)return I(ke(N(b),{state:typeof b=="object"?ke({},ve,b.state):ve,force:xe,replace:E}),Z||Y);const P=Y;P.redirectedFrom=Z;let U;return!xe&&UC(r,ee,Y)&&(U=Ri(16,{to:P,from:ee}),Ot(ee,ee,!0,!1)),(U?Promise.resolve(U):T(P,ee)).catch(L=>un(L)?un(L,2)?L:Ut(L):ye(L,P,ee)).then(L=>{if(L){if(un(L,2))return I(ke({replace:E},N(L.to),{state:typeof L.to=="object"?ke({},ve,L.to.state):ve,force:xe}),Z||P)}else L=A(P,ee,!0,E,ve);return R(P,ee,L),L})}function y(M,Z){const Y=V(M,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(M){const Z=An.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(M):M()}function T(M,Z){let Y;const[ee,ve,xe]=bP(M,Z);Y=Ql(ee.reverse(),"beforeRouteLeave",M,Z);for(const b of ee)b.leaveGuards.forEach(P=>{Y.push($n(P,M,Z))});const E=y.bind(null,M,Z);return Y.push(E),At(Y).then(()=>{Y=[];for(const b of s.list())Y.push($n(b,M,Z));return Y.push(E),At(Y)}).then(()=>{Y=Ql(ve,"beforeRouteUpdate",M,Z);for(const b of ve)b.updateGuards.forEach(P=>{Y.push($n(P,M,Z))});return Y.push(E),At(Y)}).then(()=>{Y=[];for(const b of xe)if(b.beforeEnter)if(Gt(b.beforeEnter))for(const P of b.beforeEnter)Y.push($n(P,M,Z));else Y.push($n(b.beforeEnter,M,Z));return Y.push(E),At(Y)}).then(()=>(M.matched.forEach(b=>b.enterCallbacks={}),Y=Ql(xe,"beforeRouteEnter",M,Z,_),Y.push(E),At(Y))).then(()=>{Y=[];for(const b of o.list())Y.push($n(b,M,Z));return Y.push(E),At(Y)}).catch(b=>un(b,8)?b:Promise.reject(b))}function R(M,Z,Y){l.list().forEach(ee=>_(()=>ee(M,Z,Y)))}function A(M,Z,Y,ee,ve){const xe=V(M,Z);if(xe)return xe;const E=Z===Nn,b=ei?history.state:{};Y&&(ee||E?i.replace(M.fullPath,ke({scroll:E&&b&&b.scroll},ve)):i.push(M.fullPath,ve)),c.value=M,Ot(M,Z,Y,E),Ut()}let w;function Q(){w||(w=i.listen((M,Z,Y)=>{if(!Qt.listening)return;const ee=F(M),ve=K(ee);if(ve){I(ke(ve,{replace:!0}),ee).catch(ws);return}h=ee;const xe=c.value;ei&&WC(mp(xe.fullPath,Y.delta),el()),T(ee,xe).catch(E=>un(E,12)?E:un(E,2)?(I(E.to,ee).then(b=>{un(b,20)&&!Y.delta&&Y.type===qs.pop&&i.go(-1,!1)}).catch(ws),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),ye(E,ee,xe))).then(E=>{E=E||A(ee,xe,!1),E&&(Y.delta&&!un(E,8)?i.go(-Y.delta,!1):Y.type===qs.pop&&un(E,20)&&i.go(-1,!1)),R(ee,xe,E)}).catch(ws)}))}let _e=Yi(),we=Yi(),ue;function ye(M,Z,Y){Ut(M);const ee=we.list();return ee.length?ee.forEach(ve=>ve(M,Z,Y)):console.error(M),Promise.reject(M)}function Ct(){return ue&&c.value!==Nn?Promise.resolve():new Promise((M,Z)=>{_e.add([M,Z])})}function Ut(M){return ue||(ue=!M,Q(),_e.list().forEach(([Z,Y])=>M?Y(M):Z()),_e.reset()),M}function Ot(M,Z,Y,ee){const{scrollBehavior:ve}=t;if(!ei||!ve)return Promise.resolve();const xe=!Y&&GC(mp(M.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return lu().then(()=>ve(M,Z,xe)).then(E=>E&&KC(E)).catch(E=>ye(E,M,Z))}const Me=M=>i.go(M);let Fe;const An=new Set,Qt={currentRoute:c,listening:!0,addRoute:v,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:x,resolve:F,options:t,push:D,replace:B,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:l.add,onError:we.add,isReady:Ct,install(M){const Z=this;M.component("RouterLink",yP),M.component("RouterView",TP),M.config.globalProperties.$router=Z,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>wr(c)}),ei&&!Fe&&c.value===Nn&&(Fe=!0,D(i.location).catch(ve=>{}));const Y={};for(const ve in Nn)Object.defineProperty(Y,ve,{get:()=>c.value[ve],enumerable:!0});M.provide(lh,Z),M.provide(Uy,pg(Y)),M.provide(Hc,c);const ee=M.unmount;An.add(M),M.unmount=function(){An.delete(M),An.size<1&&(h=Nn,w&&w(),w=null,c.value=Nn,Fe=!1,ue=!1),ee()}}};function At(M){return M.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return Qt}function bP(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const l=e.matched[o];l&&(t.matched.find(h=>Ai(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Ai(h,c))||i.push(c))}return[n,r,i]}const AP=[{path:"/",component:()=>Lt(()=>import("./MainLayout.571e577b.js"),["assets/MainLayout.571e577b.js","assets/QList.7df0001a.js","assets/use-dark.543359e9.js","assets/QMenu.97e967e5.js","assets/position-engine.5f13f6db.js","assets/selection.93153d6b.js","assets/focus-manager.c9b70bc2.js","assets/scroll.a94b8f65.js","assets/use-timeout.300a518a.js","assets/QScrollObserver.865af923.js","assets/candle.60a747b1.js","assets/use-quasar.89718c96.js","assets/storeYahrzeits.ae9b2e7b.js","assets/index.f33ef9c5.js"]),children:[{path:"",component:()=>Lt(()=>import("./AllAboutThisWeek.ba27d1d0.js"),["assets/AllAboutThisWeek.ba27d1d0.js","assets/AllAboutThisWeek.934decb1.css","assets/QPageSticky.5b6c498b.js","assets/date_extensions.6f1a8f5a.js","assets/index.f33ef9c5.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/today",component:()=>Lt(()=>import("./TodayPage.ea0cc672.js"),["assets/TodayPage.ea0cc672.js","assets/TodayPage.850d0322.css","assets/QPageSticky.5b6c498b.js","assets/RememberItemLook.7e1825f8.js","assets/RememberItemLook.c6018c01.css","assets/date_extensions.6f1a8f5a.js","assets/storeYahrzeits.ae9b2e7b.js","assets/index.f33ef9c5.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/test",component:()=>Lt(()=>import("./TestDay-PDF.1471316c.js"),["assets/TestDay-PDF.1471316c.js","assets/TestDay-PDF.b212cf4a.css","assets/jspdf-html2canvas.min.0e701ca2.js","assets/use-dark.543359e9.js","assets/use-render-cache.3aae9b27.js","assets/private.use-form.9e19057c.js","assets/format.959830d0.js","assets/QDialog.e69800ad.js","assets/use-timeout.300a518a.js","assets/position-engine.5f13f6db.js","assets/selection.93153d6b.js","assets/focus-manager.c9b70bc2.js","assets/scroll.a94b8f65.js","assets/QMenu.97e967e5.js","assets/_commonjsHelpers.2cf1d77b.js","assets/QInput.440bdf66.js","assets/QCard.67591887.js","assets/date_extensions.6f1a8f5a.js","assets/storeYahrzeits.ae9b2e7b.js","assets/index.f33ef9c5.js","assets/PlaqueEntry.3c7760ce.js","assets/PlaqueEntry.4263ed96.css","assets/candle.60a747b1.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/auth",component:()=>Lt(()=>import("./ViewAuth.ceb50ca5.js"),["assets/ViewAuth.ceb50ca5.js","assets/QInput.440bdf66.js","assets/use-dark.543359e9.js","assets/focus-manager.c9b70bc2.js","assets/private.use-form.9e19057c.js"])},{path:"/thisweek",component:()=>Lt(()=>import("./RememberThisWeekWithDate.c502808a.js"),["assets/RememberThisWeekWithDate.c502808a.js","assets/RememberThisWeekWithDate.871f3793.css","assets/jspdf-html2canvas.min.0e701ca2.js","assets/use-dark.543359e9.js","assets/use-render-cache.3aae9b27.js","assets/private.use-form.9e19057c.js","assets/format.959830d0.js","assets/QDialog.e69800ad.js","assets/use-timeout.300a518a.js","assets/position-engine.5f13f6db.js","assets/selection.93153d6b.js","assets/focus-manager.c9b70bc2.js","assets/scroll.a94b8f65.js","assets/QMenu.97e967e5.js","assets/_commonjsHelpers.2cf1d77b.js","assets/QInput.440bdf66.js","assets/RememberItemLook.7e1825f8.js","assets/RememberItemLook.c6018c01.css","assets/date_extensions.6f1a8f5a.js","assets/storeYahrzeits.ae9b2e7b.js","assets/index.f33ef9c5.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/monthplaque",component:()=>Lt(()=>import("./RememberThisMonthPlaque.1461bd73.js"),["assets/RememberThisMonthPlaque.1461bd73.js","assets/RememberThisMonthPlaque.b9580448.css","assets/use-dark.543359e9.js","assets/QScrollObserver.865af923.js","assets/scroll.a94b8f65.js","assets/TouchPan.8e837506.js","assets/touch.9135741d.js","assets/selection.93153d6b.js","assets/format.959830d0.js","assets/QCarousel.2e184531.js","assets/use-render-cache.3aae9b27.js","assets/use-timeout.300a518a.js","assets/use-fullscreen.45069ce8.js","assets/PlaqueEntry.3c7760ce.js","assets/PlaqueEntry.4263ed96.css","assets/candle.60a747b1.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/date_extensions.6f1a8f5a.js","assets/storeYahrzeits.ae9b2e7b.js","assets/index.f33ef9c5.js"])},{path:"/thismonth",component:()=>Lt(()=>import("./RememberThisMonth-carousel.eeaf2af6.js"),["assets/RememberThisMonth-carousel.eeaf2af6.js","assets/RememberThisMonth-carousel.8cc46e43.css","assets/QCarousel.2e184531.js","assets/use-dark.543359e9.js","assets/touch.9135741d.js","assets/selection.93153d6b.js","assets/use-render-cache.3aae9b27.js","assets/use-timeout.300a518a.js","assets/use-fullscreen.45069ce8.js","assets/RememberItemLook.7e1825f8.js","assets/RememberItemLook.c6018c01.css","assets/date_extensions.6f1a8f5a.js","assets/storeYahrzeits.ae9b2e7b.js","assets/index.f33ef9c5.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/visitor",component:()=>Lt(()=>import("./VisitorSearch.db1b74b3.js"),["assets/VisitorSearch.db1b74b3.js","assets/VisitorSearch.eb5c3d2a.css","assets/QInput.440bdf66.js","assets/use-dark.543359e9.js","assets/focus-manager.c9b70bc2.js","assets/private.use-form.9e19057c.js","assets/QCard.67591887.js","assets/QList.7df0001a.js","assets/scroll.a94b8f65.js","assets/QMenu.97e967e5.js","assets/position-engine.5f13f6db.js","assets/selection.93153d6b.js","assets/use-timeout.300a518a.js","assets/QDialog.e69800ad.js","assets/format.959830d0.js","assets/use-fullscreen.45069ce8.js","assets/storeYahrzeits.ae9b2e7b.js","assets/index.f33ef9c5.js"])},{path:"/settings",component:()=>Lt(()=>import("./SettingsPage.f2fcb589.js"),["assets/SettingsPage.f2fcb589.js","assets/SettingsPage.194c2ad4.css","assets/private.use-form.9e19057c.js","assets/TouchPan.8e837506.js","assets/touch.9135741d.js","assets/selection.93153d6b.js","assets/use-dark.543359e9.js","assets/format.959830d0.js","assets/storeYahrzeits.ae9b2e7b.js","assets/index.f33ef9c5.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/:catchAll(.*)*",component:()=>Lt(()=>import("./ErrorNotFound.1cd2ffa4.js"),[])}];var Jl=function(){return IP({mode:"hash",scrollBehavior(n,r,i){return n.hash?{el:n.hash,behavior:"smooth"}:{x:0,y:0}},routes:AP,history:ZC("/")})};async function RP(t,e){const n=t(wC);n.use(LT,e);const r=typeof Kl=="function"?await Kl({}):Kl;n.use(r);const i=Fr(typeof Jl=="function"?await Jl({store:r}):Jl);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}const pi=[],Is=[];let SP=1,Ln=document.body;function CP(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${SP++}`:t,oa.globalNodes!==void 0){const r=oa.globalNodes.class;r!==void 0&&(n.className=r)}return Ln.appendChild(n),pi.push(n),Is.push(e),n}function Gk(t){const e=pi.indexOf(t);pi.splice(e,1),Is.splice(e,1),t.remove()}function PP(t){if(t===Ln)return;if(Ln=t,Ln===document.body||Is.reduce((n,r)=>r==="dialog"?n+1:n,0)<2){pi.forEach(n=>{n.contains(Ln)===!1&&Ln.appendChild(n)});return}const e=Is.lastIndexOf("dialog");for(let n=0;n<pi.length;n++){const r=pi[n];(n===e||Is[n]!=="dialog")&&r.contains(Ln)===!1&&Ln.appendChild(r)}}const Xi={};function kP(t){Object.assign(st,{request:t,exit:t,toggle:t})}function By(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement||null}function $y(){const t=st.activeEl=st.isActive===!1?null:By();PP(t===null||t===document.documentElement?document.body:t)}function xP(){st.isActive=st.isActive===!1,$y()}function xp(t,e){try{const n=t[e]();return n===void 0?Promise.resolve():n}catch(n){return Promise.reject(n)}}const st=Gs({isActive:!1,activeEl:null},{isCapable:!1,install({$q:t}){t.fullscreen=this}});Xi.request=["requestFullscreen","msRequestFullscreen","mozRequestFullScreen","webkitRequestFullscreen"].find(t=>document.documentElement[t]!==void 0),st.isCapable=Xi.request!==void 0,st.isCapable===!1?kP(()=>Promise.reject("Not capable")):(Object.assign(st,{request(t){const e=t||document.documentElement,{activeEl:n}=st;return e===n?Promise.resolve():(n!==null&&e.contains(n)===!0?st.exit():Promise.resolve()).finally(()=>xp(e,Xi.request))},exit(){return st.isActive===!0?xp(document,Xi.exit):Promise.resolve()},toggle(t){return st.isActive===!0?st.exit():st.request(t)}}),Xi.exit=["exitFullscreen","msExitFullscreen","mozCancelFullScreen","webkitExitFullscreen"].find(t=>document[t]),st.isActive=Boolean(By()),st.isActive===!0&&$y(),["onfullscreenchange","onmsfullscreenchange","onwebkitfullscreenchange"].forEach(t=>{document[t]=xP}));const zc={xs:18,sm:24,md:32,lg:38,xl:46},ch={size:String};function uh(t,e=zc){return fe(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}function OP(t,e){return t!==void 0&&t()||e}function Qk(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function ls(t,e){return t!==void 0?e.concat(t()):e}function NP(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function Jk(t,e,n,r,i,s){e.key=r+i;const o=he(t,e,n);return i===!0?Ig(o,s()):o}const Op="0 0 24 24",Np=t=>t,Yl=t=>`ionicons ${t}`,jy={"mdi-":t=>`mdi ${t}`,"icon-":Np,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":Yl,"ion-ios":Yl,"ion-logo":Yl,"iconfont ":Np,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},qy={o_:"-outlined",r_:"-round",s_:"-sharp"},Hy={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},DP=new RegExp("^("+Object.keys(jy).join("|")+")"),VP=new RegExp("^("+Object.keys(qy).join("|")+")"),Dp=new RegExp("^("+Object.keys(Hy).join("|")+")"),LP=/^[Mm]\s?[-+]?\.?\d/,MP=/^img:/,FP=/^svguse:/,UP=/^ion-/,BP=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var wa=Ws({name:"QIcon",props:{...ch,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Si(),r=uh(t),i=fe(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=fe(()=>{let o,l=t.name;if(l==="none"||!l)return{none:!0};if(n.iconMapFn!==null){const f=n.iconMapFn(l);if(f!==void 0)if(f.icon!==void 0){if(l=f.icon,l==="none"||!l)return{none:!0}}else return{cls:f.cls,content:f.content!==void 0?f.content:" "}}if(LP.test(l)===!0){const[f,p=Op]=l.split("|");return{svg:!0,viewBox:p,nodes:f.split("&&").map(g=>{const[v,S,x]=g.split("@@");return he("path",{style:S,d:v,transform:x})})}}if(MP.test(l)===!0)return{img:!0,src:l.substring(4)};if(FP.test(l)===!0){const[f,p=Op]=l.split("|");return{svguse:!0,src:f.substring(7),viewBox:p}}let c=" ";const h=l.match(DP);if(h!==null)o=jy[h[1]](l);else if(BP.test(l)===!0)o=l;else if(UP.test(l)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${l.substring(3)}`;else if(Dp.test(l)===!0){o="notranslate material-symbols";const f=l.match(Dp);f!==null&&(l=l.substring(6),o+=Hy[f[1]]),c=l}else{o="notranslate material-icons";const f=l.match(VP);f!==null&&(l=l.substring(2),o+=qy[f[1]]),c=l}return{cls:o,content:c}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?he(t.tag,o,OP(e.default)):s.value.img===!0?he(t.tag,o,ls(e.default,[he("img",{src:s.value.src})])):s.value.svg===!0?he(t.tag,o,ls(e.default,[he("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?he(t.tag,o,ls(e.default,[he("svg",{viewBox:s.value.viewBox},[he("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),he(t.tag,o,ls(e.default,[s.value.content])))}}}),$P=Ws({name:"QAvatar",props:{...ch,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=uh(t),r=fe(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=fe(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[he(wa,{name:t.icon})]:void 0;return he("div",{class:r.value,style:n.value},[he("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},NP(e.default,s))])}}});const jP={size:{type:[String,Number],default:"1em"},color:String};function qP(t){return{cSize:fe(()=>t.size in zc?`${zc[t.size]}px`:t.size),classes:fe(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var zy=Ws({name:"QSpinner",props:{...jP,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=qP(t);return()=>he("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[he("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function HP(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function Yk(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=wr(t);if(e)return e.$el||e}function Xk(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function zP(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function Vp(t,e,n,r){n.modifiers.stop===!0&&dm(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),l=document.createElement("span"),c=pT(t),{left:h,top:f,width:p,height:g}=e.getBoundingClientRect(),v=Math.sqrt(p*p+g*g),S=v/2,x=`${(p-v)/2}px`,k=s?x:`${c.left-h-S}px`,F=`${(g-v)/2}px`,N=s?F:`${c.top-f-S}px`;l.className="q-ripple__inner",HP(l,{height:`${v}px`,width:`${v}px`,transform:`translate3d(${k},${N},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(l),e.appendChild(o);const V=()=>{o.remove(),clearTimeout(D)};n.abort.push(V);let D=setTimeout(()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${x},${F},0) scale3d(1,1,1)`,l.style.opacity=.2,D=setTimeout(()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,D=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(V),1)},275)},250)},50)}function Lp(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var KP=dT({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&Vp(i,t,r,i.qKeyEvent===!0)},keystart:zP(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&dc(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&Vp(i,t,r,!0)},300)};Lp(r,e),t.__qripple=r,gT(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&Lp(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),mT(e,"main"),delete t._qripple)}});const Ky={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},WP=Object.keys(Ky),GP={align:{type:String,validator:t=>WP.includes(t)}};function QP(t){return fe(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${Ky[e]}`})}function Zk(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Wy(t,e){typeof e.type=="symbol"?Array.isArray(e.children)===!0&&e.children.forEach(n=>{Wy(t,n)}):t.add(e)}function e1(t){const e=new Set;return t.forEach(n=>{Wy(e,n)}),Array.from(e)}function JP(t){return t.appContext.config.globalProperties.$router!==void 0}function t1(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Mp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function Fp(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function YP(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Up(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function XP(t,e){return Array.isArray(t)===!0?Up(t,e):Array.isArray(e)===!0?Up(e,t):t===e}function ZP(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(XP(t[n],e[n])===!1)return!1;return!0}const Gy={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},n1={...Gy,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function ek({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Si(),{props:r,proxy:i,emit:s}=n,o=JP(n),l=fe(()=>r.disable!==!0&&r.href!==void 0),c=fe(e===!0?()=>o===!0&&r.disable!==!0&&l.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&l.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),h=fe(()=>c.value===!0?N(r.to):null),f=fe(()=>h.value!==null),p=fe(()=>l.value===!0||f.value===!0),g=fe(()=>r.type==="a"||p.value===!0?"a":r.tag||t||"div"),v=fe(()=>l.value===!0?{href:r.href,target:r.target}:f.value===!0?{href:h.value.href,target:r.target}:{}),S=fe(()=>{if(f.value===!1)return-1;const{matched:B}=h.value,{length:K}=B,I=B[K-1];if(I===void 0)return-1;const y=i.$route.matched;if(y.length===0)return-1;const _=y.findIndex(Fp.bind(null,I));if(_!==-1)return _;const T=Mp(B[K-2]);return K>1&&Mp(I)===T&&y[y.length-1].path!==T?y.findIndex(Fp.bind(null,B[K-2])):_}),x=fe(()=>f.value===!0&&S.value!==-1&&YP(i.$route.params,h.value.params)),k=fe(()=>x.value===!0&&S.value===i.$route.matched.length-1&&ZP(i.$route.params,h.value.params)),F=fe(()=>f.value===!0?k.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":x.value===!0?` ${r.activeClass}`:"":"");function N(B){try{return i.$router.resolve(B)}catch{}return null}function V(B,{returnRouterError:K,to:I=r.to,replace:y=r.replace}={}){if(r.disable===!0)return B.preventDefault(),Promise.resolve(!1);if(B.metaKey||B.altKey||B.ctrlKey||B.shiftKey||B.button!==void 0&&B.button!==0||r.target==="_blank")return Promise.resolve(!1);B.preventDefault();const _=i.$router[y===!0?"replace":"push"](I);return K===!0?_:_.then(()=>{}).catch(()=>{})}function D(B){if(f.value===!0){const K=I=>V(B,I);s("click",B,K),B.defaultPrevented!==!0&&K()}else s("click",B)}return{hasRouterLink:f,hasHrefLink:l,hasLink:p,linkTag:g,resolvedLink:h,linkIsActive:x,linkIsExactActive:k,linkClass:F,linkAttrs:v,getLink:N,navigateToRouterLink:V,navigateOnClick:D}}const Bp={none:0,xs:4,sm:8,md:16,lg:24,xl:32},tk={xs:8,sm:10,md:14,lg:20,xl:24},nk=["button","submit","reset"],rk=/[^\s]\/[^\s]/,ik=["flat","outline","push","unelevated"];function sk(t,e){return t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e}const ok={...ch,...Gy,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ik.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...GP.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},ak={...ok,round:Boolean};function lk(t){const e=uh(t,tk),n=QP(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:l}=ek({fallbackTag:"button"}),c=fe(()=>{const k=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},k,{padding:t.padding.split(/\s+/).map(F=>F in Bp?Bp[F]+"px":F).join(" "),minWidth:"0",minHeight:"0"}):k}),h=fe(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),f=fe(()=>t.disable!==!0&&t.loading!==!0),p=fe(()=>f.value===!0?t.tabindex||0:-1),g=fe(()=>sk(t,"standard")),v=fe(()=>{const k={tabindex:p.value};return i.value===!0?Object.assign(k,o.value):nk.includes(t.type)===!0&&(k.type=t.type),s.value==="a"?(t.disable===!0?k["aria-disabled"]="true":k.href===void 0&&(k.role="button"),r.value!==!0&&rk.test(t.type)===!0&&(k.type=t.type)):t.disable===!0&&(k.disabled="",k["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(k,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),k}),S=fe(()=>{let k;t.color!==void 0?t.flat===!0||t.outline===!0?k=`text-${t.textColor||t.color}`:k=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(k=`text-${t.textColor}`);const F=t.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${g.value} q-btn--${F}`+(k!==void 0?" "+k:"")+(f.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),x=fe(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:S,style:c,innerClasses:x,attributes:v,hasLink:i,linkTag:s,navigateOnClick:l,isActionable:f}}const{passiveCapture:Vt}=kr;let Wr=null,Gr=null,Qr=null;var ck=Ws({name:"QBtn",props:{...ak,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Si(),{classes:i,style:s,innerClasses:o,attributes:l,hasLink:c,linkTag:h,navigateOnClick:f,isActionable:p}=lk(t),g=Cr(null),v=Cr(null);let S=null,x,k=null;const F=fe(()=>t.label!==void 0&&t.label!==null&&t.label!==""),N=fe(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),V=fe(()=>({center:t.round})),D=fe(()=>{const Q=Math.max(0,Math.min(100,t.percentage));return Q>0?{transition:"transform 0.6s",transform:`translateX(${Q-100}%)`}:{}}),B=fe(()=>{if(t.loading===!0)return{onMousedown:w,onTouchstart:w,onClick:w,onKeydown:w,onKeyup:w};if(p.value===!0){const Q={onClick:I,onKeydown:y,onMousedown:T};if(r.$q.platform.has.touch===!0){const _e=t.onTouchstart!==void 0?"":"Passive";Q[`onTouchstart${_e}`]=_}return Q}return{onClick:zr}}),K=fe(()=>({ref:g,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...l.value,...B.value}));function I(Q){if(g.value!==null){if(Q!==void 0){if(Q.defaultPrevented===!0)return;const _e=document.activeElement;if(t.type==="submit"&&_e!==document.body&&g.value.contains(_e)===!1&&_e.contains(g.value)===!1){g.value.focus();const we=()=>{document.removeEventListener("keydown",zr,!0),document.removeEventListener("keyup",we,Vt),g.value!==null&&g.value.removeEventListener("blur",we,Vt)};document.addEventListener("keydown",zr,!0),document.addEventListener("keyup",we,Vt),g.value.addEventListener("blur",we,Vt)}}f(Q)}}function y(Q){g.value!==null&&(n("keydown",Q),dc(Q,[13,32])===!0&&Gr!==g.value&&(Gr!==null&&A(),Q.defaultPrevented!==!0&&(g.value.focus(),Gr=g.value,g.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),g.value.addEventListener("blur",R,Vt)),zr(Q)))}function _(Q){g.value!==null&&(n("touchstart",Q),Q.defaultPrevented!==!0&&(Wr!==g.value&&(Wr!==null&&A(),Wr=g.value,S=Q.target,S.addEventListener("touchcancel",R,Vt),S.addEventListener("touchend",R,Vt)),x=!0,k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,x=!1},200)))}function T(Q){g.value!==null&&(Q.qSkipRipple=x===!0,n("mousedown",Q),Q.defaultPrevented!==!0&&Qr!==g.value&&(Qr!==null&&A(),Qr=g.value,g.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,Vt)))}function R(Q){if(g.value!==null&&!(Q!==void 0&&Q.type==="blur"&&document.activeElement===g.value)){if(Q!==void 0&&Q.type==="keyup"){if(Gr===g.value&&dc(Q,[13,32])===!0){const _e=new MouseEvent("click",Q);_e.qKeyEvent=!0,Q.defaultPrevented===!0&&fc(_e),Q.cancelBubble===!0&&dm(_e),g.value.dispatchEvent(_e),zr(Q),Q.qKeyEvent=!0}n("keyup",Q)}A()}}function A(Q){const _e=v.value;Q!==!0&&(Wr===g.value||Qr===g.value)&&_e!==null&&_e!==document.activeElement&&(_e.setAttribute("tabindex",-1),_e.focus()),Wr===g.value&&(S!==null&&(S.removeEventListener("touchcancel",R,Vt),S.removeEventListener("touchend",R,Vt)),Wr=S=null),Qr===g.value&&(document.removeEventListener("mouseup",R,Vt),Qr=null),Gr===g.value&&(document.removeEventListener("keyup",R,!0),g.value!==null&&g.value.removeEventListener("blur",R,Vt),Gr=null),g.value!==null&&g.value.classList.remove("q-btn--active")}function w(Q){zr(Q),Q.qSkipRipple=!0}return xa(()=>{A(!0)}),Object.assign(r,{click:Q=>{p.value===!0&&I(Q)}}),()=>{let Q=[];t.icon!==void 0&&Q.push(he(wa,{name:t.icon,left:t.stack!==!0&&F.value===!0,role:"img"})),F.value===!0&&Q.push(he("span",{class:"block"},[t.label])),Q=ls(e.default,Q),t.iconRight!==void 0&&t.round===!1&&Q.push(he(wa,{name:t.iconRight,right:t.stack!==!0&&F.value===!0,role:"img"}));const _e=[he("span",{class:"q-focus-helper",ref:v})];return t.loading===!0&&t.percentage!==void 0&&_e.push(he("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[he("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),_e.push(he("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},Q)),t.loading!==null&&_e.push(he(Ow,{name:"q-transition--fade"},()=>t.loading===!0?[he("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[he(zy)])]:null)),Ig(he(h.value,K.value,_e),[[KP,N.value,void 0,V.value]])}}});let uk=0;const Go={},Qo={},$t={},Qy={},hk=/^\s*$/,Jy=[],fk=[void 0,null,!0,!1,""],hh=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],dk=["top-left","top-right","bottom-left","bottom-right"],ti={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function Yy(t,e,n){if(!t)return Zi("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,Go),Ns(t)===!1&&(i.type&&Object.assign(i,ti[i.type]),t={message:t}),Object.assign(i,ti[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=zy),i.spinner=Fr(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:$p(i.message)||$p(i.caption)},i.position){if(hh.includes(i.position)===!1)return Zi("wrong position",t)}else i.position="bottom";if(fk.includes(i.timeout)===!0)i.timeout=5e3;else{const c=Number(i.timeout);if(isNaN(c)||c<0)return Zi("wrong timeout",t);i.timeout=Number.isFinite(c)?c:0}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Go.actions)===!0?Go.actions:[]).concat(ti[t.type]!==void 0&&Array.isArray(ti[t.type].actions)===!0?ti[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:c,noDismiss:h,...f})=>({flat:!0,...f,onClick:typeof c=="function"?()=>{c(),h!==!0&&l()}:()=>{l()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const c=$t[i.position].value.indexOf(n.notif);$t[i.position].value[c]=i}else{const c=Qo[i.meta.group];if(c===void 0){if(i.meta.uid=uk++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)$t[i.position].value.splice(Math.floor($t[i.position].value.length/2),0,i);else{const h=i.position.indexOf("top")!==-1?"unshift":"push";$t[i.position].value[h](i)}i.group!==void 0&&(Qo[i.meta.group]=i)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),i.badgePosition!==void 0){if(dk.includes(i.badgePosition)===!1)return Zi("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")!==-1?"right":"left"}`;i.meta.uid=c.meta.uid,i.meta.badge=c.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const h=$t[i.position].value.indexOf(c);$t[i.position].value[h]=Qo[i.meta.group]=i}}const l=()=>{pk(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,l()},i.timeout+1e3)),i.group!==void 0)return c=>{c!==void 0?Zi("trying to update a grouped one which is forbidden",t):l()};if(r={dismiss:l,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const h=Object.assign({},r.config,c,{group:!1,position:i.position});Yy(h,e,r)}}}function pk(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=$t[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Qo[t.meta.group];const n=Jy[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}$t[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function $p(t){return t!=null&&hk.test(t)!==!0}function Zi(t,e){return console.error(`Notify: ${t}`,e),!1}function gk(){return Ws({name:"QNotifications",devtools:{hide:!0},setup(){return()=>he("div",{class:"q-notifications"},hh.map(t=>he(eT,{key:t,class:Qy[t],tag:"div",name:`q-notification--${t}`},()=>$t[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(he(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(he(wa,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(he($P,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>he("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const l=[e.message];s=e.caption?[he("div",l),he("div",{class:"q-notification__caption"},[e.caption])]:l}r.push(he("div",o,s))}const i=[he("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(he("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(he("div",{class:n.actionsClass},e.actions.map(s=>he(ck,s)))),n.badge>1&&i.push(he("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),he("div",{ref:s=>{Jy[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[he("div",{class:n.wrapperClass},i)])}))))}})}var mk={setDefaults(t){Ns(t)===!0&&Object.assign(Go,t)},registerType(t,e){Ns(e)===!0&&(ti[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>Yy(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){hh.forEach(r=>{$t[r]=Cr([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")!==-1?"top":"bottom",s=r.indexOf("left")!==-1?"start":r.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;Qy[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=CP("q-notify");NT(gk(),e).mount(n)}}},_k={config:{},plugins:{AppFullscreen:st,Notify:mk,Dark:it}};const yk="/";async function vk({app:t,router:e,store:n},r){let i=!1;const s=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(i=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const h=s(c);h!==null&&(window.location.href=h,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;i===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:l,publicPath:yk})}catch(h){if(h&&h.url){o(h.url);return}console.error("[Quasar] boot error:",h);return}i!==!0&&(t.use(e),t.mount("#q-app"))}RP(hm,_k).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([Lt(()=>import("./register.e909c3af.js"),["assets/register.e909c3af.js","assets/_commonjsHelpers.2cf1d77b.js","assets/position-engine.5f13f6db.js","assets/selection.93153d6b.js","assets/focus-manager.c9b70bc2.js","assets/scroll.a94b8f65.js","assets/use-timeout.300a518a.js","assets/use-quasar.89718c96.js"])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");vk(t,i)})});export{Ak as $,Ek as A,CP as B,Gk as C,CE as D,t1 as E,en as F,Yk as G,HP as H,Dk as I,xk as J,Qk as K,Mo as L,Ok as M,Pr as N,ls as O,hc as P,ck as Q,EC as R,LE as S,Ow as T,ta as U,na as V,EE as W,bt as X,$P as Y,em as Z,wr as _,fe as a,_w as a0,Rk as a1,Mv as a2,n1 as a3,ek as a4,pT as a5,Xk as a6,Bk as a7,HT as a8,Kk as a9,QP as aA,PT as aB,Pk as aC,Ik as aD,Ck as aE,kk as aF,e1 as aG,wk as aH,Lk as aI,Jk as aJ,ch as aK,uh as aL,NP as aM,KP as aN,xl as aO,fu as aP,be as aQ,Vk as aR,Sk as aS,$k as aa,jk as ab,zk as ac,qk as ad,Hk as ae,Os as af,Rt as ag,Tk as ah,st as ai,bk as aj,Yc as ak,wa as al,Ig as am,Bn as an,Kf as ao,Ns as ap,dT as aq,Lt as ar,xE as as,Nk as at,_T as au,SE as av,zy as aw,wT as ax,dm as ay,GP as az,mT as b,Ws as c,gT as d,OP as e,Mr as f,Si as g,he as h,hu as i,kE as j,Wk as k,Zt as l,dc as m,lu as n,xa as o,fc as p,xT as q,Cr as r,zr as s,ka as t,kr as u,JP as v,oi as w,Zk as x,Dg as y,La as z};
