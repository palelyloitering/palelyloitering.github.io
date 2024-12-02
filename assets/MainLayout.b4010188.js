import{R as rt,Q as ae,h as Me,u as st,a as ut,v as ct,b as Fe,c as dt,d as pe,g as ft}from"./Ripple.bbef8a44.js";import{i as re,e as Q,t as He,r as C,c as h,o as W,a as X,w as vt,h as T,s as Pe,b as ht,d as bt,g as D,f as gt,j,k as A,l as Qe,n as Ve,m as ge,p as me,q as Oe,u as ye,v as mt,x as we,y as yt,z as te,A as De,B as wt,C as Tt,D as $e,E as ze,F as ne,G as U,H as xt}from"./index.6aa36f1f.js";import{u as Be}from"./use-timeout.24756b40.js";let fe,oe=0;const p=new Array(256);for(let e=0;e<256;e++)p[e]=(e+256).toString(16).substring(1);const Ct=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return u=>{const l=new Uint8Array(u);return e.getRandomValues(l),l}}return u=>{const l=[];for(let t=u;t>0;t--)l.push(Math.floor(Math.random()*256));return l}})(),Ae=4096;function qt(){(fe===void 0||oe+16>Ae)&&(oe=0,fe=Ct(Ae));const e=Array.prototype.slice.call(fe,oe,oe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,p[e[0]]+p[e[1]]+p[e[2]]+p[e[3]]+"-"+p[e[4]]+p[e[5]]+"-"+p[e[6]]+p[e[7]]+"-"+p[e[8]]+p[e[9]]+"-"+p[e[10]]+p[e[11]]+p[e[12]]+p[e[13]]+p[e[14]]+p[e[15]]}let St=0;const Lt=["click","keydown"],_t={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${St++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Rt(e,u,l,t){const o=re(He,Q);if(o===Q)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Q;const{proxy:b}=D(),m=C(null),_=C(null),g=C(null),d=h(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),R=h(()=>o.currentModel.value===e.name),$=h(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(R.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(t!==void 0?t.linkClass.value:"")),P=h(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),f=h(()=>e.disable===!0||o.hasFocus.value===!0||R.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function q(i,r){if(r!==!0&&m.value!==null&&m.value.focus(),e.disable===!0){t!==void 0&&t.hasRouterLink.value===!0&&Pe(i);return}if(t===void 0){o.updateModel({name:e.name}),l("click",i);return}if(t.hasRouterLink.value===!0){const y=(x={})=>{let k;const B=x.to===void 0||gt(x.to,e.to)===!0?o.avoidRouteWatcher=qt():null;return t.navigateToRouterLink(i,{...x,returnRouterError:!0}).catch(M=>{k=M}).then(M=>{if(B===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,k===void 0&&(M===void 0||M.message!==void 0&&M.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),x.returnRouterError===!0)return k!==void 0?Promise.reject(k):M})};l("click",i,y),i.defaultPrevented!==!0&&y();return}l("click",i)}function E(i){ht(i,[13,32])?q(i,!0):bt(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&i.altKey!==!0&&i.metaKey!==!0&&o.onKbdNavigate(i.keyCode,b.$el)===!0&&Pe(i),l("keydown",i)}function F(){const i=o.tabProps.value.narrowIndicator,r=[],y=T("div",{ref:g,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&r.push(T(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&r.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&r.push(e.alertIcon!==void 0?T(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&r.push(y);const x=[T("div",{class:"q-focus-helper",tabindex:-1,ref:m}),T("div",{class:P.value},Me(u.default,r))];return i===!1&&x.push(y),x}const I={name:h(()=>e.name),rootRef:_,tabIndicatorRef:g,routeData:t};W(()=>{o.unregisterTab(I)}),X(()=>{o.registerTab(I)});function s(i,r){const y={ref:_,class:$.value,tabindex:f.value,role:"tab","aria-selected":R.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:E,...r};return vt(T(i,y,F()),[[rt,d.value]])}return{renderTab:s,$tabs:o}}var ve=j({name:"QRouteTab",props:{...st,..._t},emits:Lt,setup(e,{slots:u,emit:l}){const t=ut({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:b}=Rt(e,u,l,{exact:h(()=>e.exact),...t});return A(()=>`${e.name} | ${e.exact} | ${(t.resolvedLink.value||{}).href}`,b.verifyRouteModel),()=>o(t.linkTag.value,t.linkAttrs.value)}});function kt(){const e=C(!Qe.value);return e.value===!1&&X(()=>{e.value=!0}),{isHydrated:e}}const We=typeof ResizeObserver!="undefined",Ee=We===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ie=j({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let l=null,t,o={width:-1,height:-1};function b(g){g===!0||e.debounce===0||e.debounce==="0"?m():l===null&&(l=setTimeout(m,e.debounce))}function m(){if(l!==null&&(clearTimeout(l),l=null),t){const{offsetWidth:g,offsetHeight:d}=t;(g!==o.width||d!==o.height)&&(o={width:g,height:d},u("resize",o))}}const{proxy:_}=D();if(_.trigger=b,We===!0){let g;const d=R=>{t=_.$el.parentNode,t?(g=new ResizeObserver(b),g.observe(t),m()):R!==!0&&ge(()=>{d(!0)})};return X(()=>{d()}),W(()=>{l!==null&&clearTimeout(l),g!==void 0&&(g.disconnect!==void 0?g.disconnect():t&&g.unobserve(t))}),Ve}else{let R=function(){l!==null&&(clearTimeout(l),l=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",b,me.passive),d=void 0)},$=function(){R(),t&&t.contentDocument&&(d=t.contentDocument.defaultView,d.addEventListener("resize",b,me.passive),m())};const{isHydrated:g}=kt();let d;return X(()=>{ge(()=>{t=_.$el,t&&$()})}),W(R),()=>{if(g.value===!0)return T("object",{class:"q--avoid-card-border",style:Ee.style,tabindex:-1,type:"text/html",data:Ee.url,"aria-hidden":"true",onLoad:$})}}}});function he(){let e;const u=D();function l(){e=void 0}return Oe(l),W(l),{removeTick:l,registerTick(t){e=t,ge(()=>{e===t&&(ct(u)===!1&&e(),e=void 0)})}}}let je=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const u=document.createElement("div");Object.assign(u.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(u),e.scrollLeft=-1e3,je=e.scrollLeft>=0,e.remove()}function pt(e,u,l){const t=l===!0?["left","right"]:["top","bottom"];return`absolute-${u===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const Pt=["left","center","right","justify"];var $t=j({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Pt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:u,emit:l}){const{proxy:t}=D(),{$q:o}=t,{registerTick:b}=he(),{registerTick:m}=he(),{registerTick:_}=he(),{registerTimeout:g,removeTimeout:d}=Be(),{registerTimeout:R,removeTimeout:$}=Be(),P=C(null),f=C(null),q=C(e.modelValue),E=C(!1),F=C(!0),I=C(!1),s=C(!1),i=[],r=C(0),y=C(!1);let x=null,k=null,B;const M=h(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:pt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ne=h(()=>{const n=r.value,a=q.value;for(let c=0;c<n;c++)if(i[c].name.value===a)return!0;return!1}),Ke=h(()=>`q-tabs__content--align-${E.value===!0?"left":s.value===!0?"justify":e.align}`),Ue=h(()=>`q-tabs row no-wrap items-center q-tabs--${E.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Xe=h(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ke.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),Y=h(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Z=h(()=>e.vertical!==!0&&o.lang.rtl===!0),se=h(()=>je===!1&&Z.value===!0);A(Z,K),A(()=>e.modelValue,n=>{ue({name:n,setCurrent:!0,skipEmit:!0})}),A(()=>e.outsideArrows,J);function ue({name:n,setCurrent:a,skipEmit:c}){q.value!==n&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",n),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Ge(q.value,n),q.value=n))}function J(){b(()=>{Te({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function Te(n){if(Y.value===void 0||f.value===null)return;const a=n[Y.value.container],c=Math.min(f.value[Y.value.scroll],Array.prototype.reduce.call(f.value.children,(L,w)=>L+(w[Y.value.content]||0),0)),S=a>0&&c>a;E.value=S,S===!0&&m(K),s.value=a<parseInt(e.breakpoint,10)}function Ge(n,a){const c=n!=null&&n!==""?i.find(L=>L.name.value===n):null,S=a!=null&&a!==""?i.find(L=>L.name.value===a):null;if(ee===!0)ee=!1;else if(c&&S){const L=c.tabIndicatorRef.value,w=S.tabIndicatorRef.value;x!==null&&(clearTimeout(x),x=null),L.style.transition="none",L.style.transform="none",w.style.transition="none",w.style.transform="none";const v=L.getBoundingClientRect(),z=w.getBoundingClientRect();w.style.transform=e.vertical===!0?`translate3d(0,${v.top-z.top}px,0) scale3d(1,${z.height?v.height/z.height:1},1)`:`translate3d(${v.left-z.left}px,0,0) scale3d(${z.width?v.width/z.width:1},1,1)`,_(()=>{x=setTimeout(()=>{x=null,w.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",w.style.transform="none"},70)})}S&&E.value===!0&&N(S.rootRef.value)}function N(n){const{left:a,width:c,top:S,height:L}=f.value.getBoundingClientRect(),w=n.getBoundingClientRect();let v=e.vertical===!0?w.top-S:w.left-a;if(v<0){f.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),K();return}v+=e.vertical===!0?w.height-L:w.width-c,v>0&&(f.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),K())}function K(){const n=f.value;if(n===null)return;const a=n.getBoundingClientRect(),c=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);Z.value===!0?(F.value=Math.ceil(c+a.width)<n.scrollWidth-1,I.value=c>0):(F.value=c>0,I.value=e.vertical===!0?Math.ceil(c+a.height)<n.scrollHeight:Math.ceil(c+a.width)<n.scrollWidth)}function xe(n){k!==null&&clearInterval(k),k=setInterval(()=>{Je(n)===!0&&V()},5)}function Ce(){xe(se.value===!0?Number.MAX_SAFE_INTEGER:0)}function qe(){xe(se.value===!0?0:Number.MAX_SAFE_INTEGER)}function V(){k!==null&&(clearInterval(k),k=null)}function Ye(n,a){const c=Array.prototype.filter.call(f.value.children,z=>z===a||z.matches&&z.matches(".q-tab.q-focusable")===!0),S=c.length;if(S===0)return;if(n===36)return N(c[0]),c[0].focus(),!0;if(n===35)return N(c[S-1]),c[S-1].focus(),!0;const L=n===(e.vertical===!0?38:37),w=n===(e.vertical===!0?40:39),v=L===!0?-1:w===!0?1:void 0;if(v!==void 0){const z=Z.value===!0?-1:1,H=c.indexOf(a)+v*z;return H>=0&&H<S&&(N(c[H]),c[H].focus({preventScroll:!0})),!0}}const Ze=h(()=>se.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,a)=>{n.scrollLeft=-a}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,a)=>{n.scrollTop=a}}:{get:n=>n.scrollLeft,set:(n,a)=>{n.scrollLeft=a}});function Je(n){const a=f.value,{get:c,set:S}=Ze.value;let L=!1,w=c(a);const v=n<w?-1:1;return w+=v*5,w<0?(L=!0,w=0):(v===-1&&w<=n||v===1&&w>=n)&&(L=!0,w=n),S(a,w),K(),L}function Se(n,a){for(const c in n)if(n[c]!==a[c])return!1;return!0}function et(){let n=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const c=i.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:S,query:L}=t.$route,w=Object.keys(L).length;for(const v of c){const z=v.routeData.exact.value===!0;if(v.routeData[z===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:H,query:ce,matched:at,href:it}=v.routeData.resolvedLink.value,de=Object.keys(ce).length;if(z===!0){if(H!==S||de!==w||Se(L,ce)===!1)continue;n=v.name.value;break}if(H!==""&&H!==S||de!==0&&Se(ce,L)===!1)continue;const O={matchedLen:at.length,queryDiff:w-de,hrefLen:it.length-H.length};if(O.matchedLen>a.matchedLen){n=v.name.value,a=O;continue}else if(O.matchedLen!==a.matchedLen)continue;if(O.queryDiff<a.queryDiff)n=v.name.value,a=O;else if(O.queryDiff!==a.queryDiff)continue;O.hrefLen>a.hrefLen&&(n=v.name.value,a=O)}if(n===null&&i.some(v=>v.routeData===void 0&&v.name.value===q.value)===!0){ee=!1;return}ue({name:n,setCurrent:!0})}function tt(n){if(d(),y.value!==!0&&P.value!==null&&n.target&&typeof n.target.closest=="function"){const a=n.target.closest(".q-tab");a&&P.value.contains(a)===!0&&(y.value=!0,E.value===!0&&N(a))}}function nt(){g(()=>{y.value=!1},30)}function G(){_e.avoidRouteWatcher===!1?R(et):$()}function Le(){if(B===void 0){const n=A(()=>t.$route.fullPath,G);B=()=>{n(),B=void 0}}}function ot(n){i.push(n),r.value++,J(),n.routeData===void 0||t.$route===void 0?R(()=>{if(E.value===!0){const a=q.value,c=a!=null&&a!==""?i.find(S=>S.name.value===a):null;c&&N(c.rootRef.value)}}):(Le(),n.routeData.hasRouterLink.value===!0&&G())}function lt(n){i.splice(i.indexOf(n),1),r.value--,J(),B!==void 0&&n.routeData!==void 0&&(i.every(a=>a.routeData===void 0)===!0&&B(),G())}const _e={currentModel:q,tabProps:M,hasFocus:y,hasActiveTab:Ne,registerTab:ot,unregisterTab:lt,verifyRouteModel:G,updateModel:ue,onKbdNavigate:Ye,avoidRouteWatcher:!1};ye(He,_e);function Re(){x!==null&&clearTimeout(x),V(),B!==void 0&&B()}let ke,ee;return W(Re),Oe(()=>{ke=B!==void 0,Re()}),mt(()=>{ke===!0&&(Le(),ee=!0,G()),J()}),()=>T("div",{ref:P,class:Ue.value,role:"tablist",onFocusin:tt,onFocusout:nt},[T(ie,{onResize:Te}),T("div",{ref:f,class:Xe.value,onScroll:K},Fe(u.default)),T(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:V,onMouseleavePassive:V,onTouchendPassive:V}),T(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:V,onMouseleavePassive:V,onTouchendPassive:V})])}}),zt=j({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:l}){const{proxy:{$q:t}}=D(),o=re(we,Q);if(o===Q)return console.error("QHeader needs to be child of QLayout"),Q;const b=C(parseInt(e.heightHint,10)),m=C(!0),_=h(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),g=h(()=>{if(e.modelValue!==!0)return 0;if(_.value===!0)return m.value===!0?b.value:0;const s=b.value-o.scroll.value.position;return s>0?s:0}),d=h(()=>e.modelValue!==!0||_.value===!0&&m.value!==!0),R=h(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),$=h(()=>"q-header q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),P=h(()=>{const s=o.rows.value.top,i={};return s[0]==="l"&&o.left.space===!0&&(i[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),s[2]==="r"&&o.right.space===!0&&(i[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),i});function f(s,i){o.update("header",s,i)}function q(s,i){s.value!==i&&(s.value=i)}function E({height:s}){q(b,s),f("size",s)}function F(s){R.value===!0&&q(m,!0),l("focusin",s)}A(()=>e.modelValue,s=>{f("space",s),q(m,!0),o.animate()}),A(g,s=>{f("offset",s)}),A(()=>e.reveal,s=>{s===!1&&q(m,e.modelValue)}),A(m,s=>{o.animate(),l("reveal",s)}),A(o.scroll,s=>{e.reveal===!0&&q(m,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const I={};return o.instances.header=I,e.modelValue===!0&&f("size",b.value),f("space",e.modelValue),f("offset",g.value),W(()=>{o.instances.header===I&&(o.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const s=dt(u.default,[]);return e.elevated===!0&&s.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(T(ie,{debounce:0,onResize:E})),T("header",{class:$.value,style:P.value,onFocusin:F},s)}}}),Bt=j({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:l}}=D(),t=re(we,Q);if(t===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;ye(yt,!0);const o=h(()=>{const b={};return t.header.space===!0&&(b.paddingTop=`${t.header.size}px`),t.right.space===!0&&(b[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(b.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(b[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),b});return()=>T("div",{class:"q-page-container",style:o.value},Fe(u.default))}});const At=[Element,String],Et=[null,document,document.body,document.scrollingElement,document.documentElement];function It(e,u){let l=ft(u);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Et.includes(l)?window:l}function Mt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ft(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function be(){if(le!==void 0)return le;const e=document.createElement("p"),u=document.createElement("div");pe(e,{width:"100%",height:"200px"}),pe(u,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),u.appendChild(e),document.body.appendChild(u);const l=e.offsetWidth;u.style.overflow="scroll";let t=e.offsetWidth;return l===t&&(t=u.clientWidth),u.remove(),le=l-t,le}const{passive:Ie}=me,Ht=["both","horizontal","vertical"];var Qt=j({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ht.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:At},emits:["scroll"],setup(e,{emit:u}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,b;A(()=>e.scrollTarget,()=>{g(),_()});function m(){t!==null&&t();const $=Math.max(0,Mt(o)),P=Ft(o),f={top:$-l.position.top,left:P-l.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const q=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";l.position={top:$,left:P},l.directionChanged=l.direction!==q,l.delta=f,l.directionChanged===!0&&(l.direction=q,l.inflectionPoint=l.position),u("scroll",{...l})}function _(){o=It(b,e.scrollTarget),o.addEventListener("scroll",d,Ie),d(!0)}function g(){o!==void 0&&(o.removeEventListener("scroll",d,Ie),o=void 0)}function d($){if($===!0||e.debounce===0||e.debounce==="0")m();else if(t===null){const[P,f]=e.debounce?[setTimeout(m,e.debounce),clearTimeout]:[requestAnimationFrame(m),cancelAnimationFrame];t=()=>{f(P),t=null}}}const{proxy:R}=D();return A(()=>R.$q.lang.rtl,m),X(()=>{b=R.$el.parentNode,_()}),W(()=>{t!==null&&t(),g()}),Object.assign(R,{trigger:d,getPosition:()=>l}),Ve}}),Vt=j({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:l}){const{proxy:{$q:t}}=D(),o=C(null),b=C(t.screen.height),m=C(e.container===!0?0:t.screen.width),_=C({position:0,direction:"down",inflectionPoint:0}),g=C(0),d=C(Qe.value===!0?0:be()),R=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),$=h(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),P=h(()=>d.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),f=h(()=>d.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function q(r){if(e.container===!0||document.qScrollPrevented!==!0){const y={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};_.value=y,e.onScroll!==void 0&&l("scroll",y)}}function E(r){const{height:y,width:x}=r;let k=!1;b.value!==y&&(k=!0,b.value=y,e.onScrollHeight!==void 0&&l("scrollHeight",y),I()),m.value!==x&&(k=!0,m.value=x),k===!0&&e.onResize!==void 0&&l("resize",r)}function F({height:r}){g.value!==r&&(g.value=r,I())}function I(){if(e.container===!0){const r=b.value>g.value?be():0;d.value!==r&&(d.value=r)}}let s=null;const i={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:o,height:b,containerHeight:g,scrollbarWidth:d,totalWidth:h(()=>m.value+d.value),rows:h(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:te({size:0,offset:0,space:!1}),right:te({size:300,offset:0,space:!1}),footer:te({size:0,offset:0,space:!1}),left:te({size:300,offset:0,space:!1}),scroll:_,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,y,x){i[r][y]=x}};if(ye(we,i),be()>0){let x=function(){r=null,y.classList.remove("hide-scrollbar")},k=function(){if(r===null){if(y.scrollHeight>t.screen.height)return;y.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(x,300)},B=function(M){r!==null&&M==="remove"&&(clearTimeout(r),x()),window[`${M}EventListener`]("resize",k)},r=null;const y=document.body;A(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),De(()=>{B("remove")})}return()=>{const r=Me(u.default,[T(Qt,{onScroll:q}),T(ie,{onResize:E})]),y=T("div",{class:R.value,style:$.value,ref:e.container===!0?void 0:o,tabindex:-1},r);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:o},[T(ie,{onResize:F}),T("div",{class:"absolute-full",style:P.value},[T("div",{class:"scroll",style:f.value},[y])])]):y}}});function Ot(){return re(wt)}const Nt={__name:"MainLayout",setup(e){const u=C(!1),l=Ot(),t=()=>{u.value=l.fullscreen.isActive};X(()=>{window.addEventListener("fullscreenchange",t)}),De(()=>{window.removeEventListener("fullscreenchange",t)});const o=C(null);return(b,m)=>{const _=Tt("router-view");return $e(),ze(Vt,{view:"hHh lpR fFf"},{default:ne(()=>[u.value?xt("",!0):($e(),ze(zt,{key:0,reveal:"",bordered:"",class:"bg-grey-8 text-white","height-hint":"98",ref_key:"header",ref:o},{default:ne(()=>[U($t,{align:"left"},{default:ne(()=>[U(ve,{to:"/today",label:"Today",icon:"today"}),U(ve,{to:"/thisweek",label:"A week",icon:"date_range"}),U(ve,{to:"/thismonth",label:"Four weeks",icon:"calendar_month"})]),_:1})]),_:1},512)),U(Bt,null,{default:ne(()=>[U(_)]),_:1})]),_:1})}}};export{Nt as default};
