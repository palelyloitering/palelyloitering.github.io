import{v as a,g as u,c}from"./Ripple.7c16dfa9.js";import{u as f,o as w,m,g as p}from"./index.65778e06.js";let l,i=0;const n=new Array(256);for(let t=0;t<256;t++)n[t]=(t+256).toString(16).substring(1);const h=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return o=>{const e=new Uint8Array(o);return t.getRandomValues(e),e}}return o=>{const e=[];for(let r=o;r>0;r--)e.push(Math.floor(Math.random()*256));return e}})(),d=4096;function x(){(l===void 0||i+16>d)&&(i=0,l=h(d));const t=Array.prototype.slice.call(l,i,i+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,n[t[0]]+n[t[1]]+n[t[2]]+n[t[3]]+"-"+n[t[4]]+n[t[5]]+"-"+n[t[6]]+n[t[7]]+"-"+n[t[8]]+n[t[9]]+"-"+n[t[10]]+n[t[11]]+n[t[12]]+n[t[13]]+n[t[14]]+n[t[15]]}function E(){let t;const o=p();function e(){t=void 0}return f(e),w(e),{removeTick:e,registerTick(r){t=r,m(()=>{t===r&&(a(o)===!1&&t(),t=void 0)})}}}let g=!1;{const t=document.createElement("div");t.setAttribute("dir","rtl"),Object.assign(t.style,{width:"1px",height:"1px",overflow:"auto"});const o=document.createElement("div");Object.assign(o.style,{width:"1000px",height:"1px"}),document.body.appendChild(t),t.appendChild(o),t.scrollLeft=-1e3,g=t.scrollLeft>=0,t.remove()}const S=[Element,String],y=[null,document,document.body,document.scrollingElement,document.documentElement];function L(t,o){let e=u(o);if(e===void 0){if(t==null)return window;e=t.closest(".scroll,.scroll-y,.overflow-auto")}return y.includes(e)?window:e}function T(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function C(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let s;function B(){if(s!==void 0)return s;const t=document.createElement("p"),o=document.createElement("div");c(t,{width:"100%",height:"200px"}),c(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(t),document.body.appendChild(o);const e=t.offsetWidth;o.style.overflow="scroll";let r=t.offsetWidth;return e===r&&(r=o.clientWidth),o.remove(),s=e-r,s}function W(t,o=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:o?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{E as a,T as b,C as c,B as d,L as g,W as h,g as r,S as s,x as u};
