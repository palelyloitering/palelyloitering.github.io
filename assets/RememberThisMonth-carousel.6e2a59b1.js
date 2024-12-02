import{Q as K}from"./QBtn.3f12cf1e.js";import{Q as me,_ as pe}from"./date_extensions.6fd53721.js";import{J as ge,_ as Q,n as he,$ as ye,K as H,a0 as X,N as ne,s as G,L as J,r as I,c as f,k as A,g as U,h as g,V as _e,a1 as be,j as W,a2 as xe,a as ve,o as fe,a3 as oe,a4 as Ce,i as ae,e as $,x as Pe,y as we,C as qe,D as V,E as Z,F as T,Q as ee,S as re,I as te,G as M,O as ie,U as le,T as se}from"./index.8d7070b0.js";import{g as ue,s as ce,c as Se,u as ke,a as $e}from"./use-dark.2049b83d.js";import{u as Te}from"./use-timeout.ce4c8399.js";import{a as z,c as Ie,h as Ae}from"./render.260b5f95.js";import{h as Be,i as De}from"./Ripple.6982f1a4.js";import{_ as Fe,u as Ee,H as O}from"./plugin-vue_export-helper.7c2bc943.js";function Ne(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,i)=>{const u=parseFloat(a);u&&(n[i]=u)}),n}var Qe=ge({name:"touch-swipe",beforeMount(e,{value:n,arg:a,modifiers:i}){if(i.mouse!==!0&&Q.has.touch!==!0)return;const u=i.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ne(a),direction:ue(i),noop:he,mouseStart(l){ce(l,t)&&ye(l)&&(H(t,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(l,!0))},touchStart(l){if(ce(l,t)){const o=l.target;H(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","notPassiveCapture"],[o,"touchend","end","notPassiveCapture"]]),t.start(l)}},start(l,o){Q.is.firefox===!0&&X(e,!0);const d=ne(l);t.event={x:d.left,y:d.top,time:Date.now(),mouse:o===!0,dir:!1}},move(l){if(t.event===void 0)return;if(t.event.dir!==!1){G(l);return}const o=Date.now()-t.event.time;if(o===0)return;const d=ne(l),h=d.left-t.event.x,s=Math.abs(h),p=d.top-t.event.y,v=Math.abs(p);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(l);return}}else if(window.getSelection().toString()!==""){t.end(l);return}else if(s<t.sensitivity[2]&&v<t.sensitivity[2])return;const b=s/o,x=v/o;t.direction.vertical===!0&&s<v&&s<100&&x>t.sensitivity[0]&&(t.event.dir=p<0?"up":"down"),t.direction.horizontal===!0&&s>v&&v<100&&b>t.sensitivity[0]&&(t.event.dir=h<0?"left":"right"),t.direction.up===!0&&s<v&&p<0&&s<100&&x>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<v&&p>0&&s<100&&x>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>v&&h<0&&v<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>v&&h>0&&v<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(G(l),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Se(),t.styleCleanup=S=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};S===!0?setTimeout(C,50):C()}),t.handler({evt:l,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:o,distance:{x:s,y:v}})):t.end(l)},end(l){t.event!==void 0&&(J(t,"temp"),Q.is.firefox===!0&&X(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),l!==void 0&&t.event.dir!==!1&&G(l),t.event=void 0)}};if(e.__qtouchswipe=t,i.mouse===!0){const l=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";H(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}Q.has.touch===!0&&H(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const a=e.__qtouchswipe;a!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&a.end(),a.handler=n.value),a.direction=ue(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(J(n,"main"),J(n,"temp"),Q.is.firefox===!0&&X(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Ve(){let e=Object.create(null);return{getCache:(n,a)=>e[n]===void 0?e[n]=typeof a=="function"?a():a:e[n],setCache(n,a){e[n]=a},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Me={name:{required:!0},disable:Boolean},de={setup(e,{slots:n}){return()=>g("div",{class:"q-panel scroll",role:"tabpanel"},z(n.default))}},Oe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Le=["update:modelValue","beforeTransition","transition"];function ze(){const{props:e,emit:n,proxy:a}=U(),{getCache:i}=Ve(),{registerTimeout:u}=Te();let t,l;const o=I(null),d=I(null);function h(r){const c=e.vertical===!0?"up":"left";P((a.$q.lang.rtl===!0?-1:1)*(r.direction===c?1:-1))}const s=f(()=>[[Qe,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),p=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),v=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),b=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),x=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),C=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);A(()=>e.modelValue,(r,c)=>{const _=w(r)===!0?F(r):-1;l!==!0&&k(_===-1?0:_<F(c)?-1:1),o.value!==_&&(o.value=_,n("beforeTransition",r,c),u(()=>{n("transition",r,c)},e.transitionDuration))});function B(){P(1)}function R(){P(-1)}function D(r){n("update:modelValue",r)}function w(r){return r!=null&&r!==""}function F(r){return t.findIndex(c=>c.props.name===r&&c.props.disable!==""&&c.props.disable!==!0)}function E(){return t.filter(r=>r.props.disable!==""&&r.props.disable!==!0)}function k(r){const c=r!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(r===-1?p.value:v.value):null;d.value!==c&&(d.value=c)}function P(r,c=o.value){let _=c+r;for(;_!==-1&&_<t.length;){const Y=t[_];if(Y!==void 0&&Y.props.disable!==""&&Y.props.disable!==!0){k(r),l=!0,n("update:modelValue",Y.props.name),setTimeout(()=>{l=!1});return}_+=r}e.infinite===!0&&t.length!==0&&c!==-1&&c!==t.length&&P(r,r===-1?t.length:-1)}function j(){const r=F(e.modelValue);return o.value!==r&&(o.value=r),!0}function m(){const r=w(e.modelValue)===!0&&j()&&t[o.value];return e.keepAlive===!0?[g(be,S.value,[g(C.value===!0?i(x.value,()=>({...de,name:x.value})):de,{key:x.value,style:b.value},()=>r)])]:[g("div",{class:"q-panel scroll",style:b.value,key:x.value,role:"tabpanel"},[r])]}function q(){if(t.length!==0)return e.animated===!0?[g(_e,{name:d.value},m)]:m()}function N(r){return t=Be(z(r.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&w(c.props.name)===!0),t.length}function y(){return t}return Object.assign(a,{next:B,previous:R,goTo:D}),{panelIndex:o,panelDirectives:s,updatePanelsList:N,updatePanelIndex:j,getPanelContent:q,getEnabledPanels:E,getPanels:y,isValidPanelName:w,keepAliveProps:S,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:P,goToPanel:D,nextPanel:B,previousPanel:R}}var Re=W({name:"QCarouselSlide",props:{...Me,imgSrc:String},setup(e,{slots:n}){const a=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>g("div",{class:"q-carousel__slide",style:a.value},z(n.default))}}),je=W({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:n}){const a=f(()=>`q-carousel__control absolute absolute-${e.position}`),i=f(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>g("div",{class:a.value,style:i.value},z(n.default))}});let L=0;const Ye={fullscreen:Boolean,noRouteFullscreenExit:Boolean},He=["update:fullscreen","fullscreen"];function Ke(){const e=U(),{props:n,emit:a,proxy:i}=e;let u,t,l;const o=I(!1);De(e)===!0&&A(()=>i.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&s()}),A(()=>n.fullscreen,p=>{o.value!==p&&d()}),A(o,p=>{a("update:fullscreen",p),a("fullscreen",p)});function d(){o.value===!0?s():h()}function h(){o.value!==!0&&(o.value=!0,l=i.$el.parentNode,l.replaceChild(t,i.$el),document.body.appendChild(i.$el),L++,L===1&&document.body.classList.add("q-body--fullscreen-mixin"),u={handler:s},oe.add(u))}function s(){o.value===!0&&(u!==void 0&&(oe.remove(u),u=void 0),l.replaceChild(i.$el,t),o.value=!1,L=Math.max(0,L-1),L===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return xe(()=>{t=document.createElement("span")}),ve(()=>{n.fullscreen===!0&&h()}),fe(s),Object.assign(i,{toggleFullscreen:d,setFullscreen:h,exitFullscreen:s}),{inFullscreen:o,toggleFullscreen:d}}const Ue=["top","right","bottom","left"],We=["regular","flat","outline","push","unelevated"];var Xe=W({name:"QCarousel",props:{...ke,...Oe,...Ye,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>We.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ue.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...He,...Le],setup(e,{slots:n}){const{proxy:{$q:a}}=U(),i=$e(e,a);let u=null,t;const{updatePanelsList:l,getPanelContent:o,panelDirectives:d,goToPanel:h,previousPanel:s,nextPanel:p,getEnabledPanels:v,panelIndex:b}=ze(),{inFullscreen:x}=Ke(),S=f(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=f(()=>e.vertical===!0?"vertical":"horizontal"),B=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),R=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${B.value}`:"")),D=f(()=>{const m=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?m.reverse():m}),w=f(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),F=f(()=>e.navigationActiveIcon||w.value),E=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));A(()=>e.modelValue,()=>{e.autoplay&&k()}),A(()=>e.autoplay,m=>{m?k():u!==null&&(clearTimeout(u),u=null)});function k(){const m=Ce(e.autoplay)===!0?Math.abs(e.autoplay):5e3;u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,m>=0?p():s()},m)}ve(()=>{e.autoplay&&k()}),fe(()=>{u!==null&&clearTimeout(u)});function P(m,q){return g("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${m} q-carousel__navigation--${B.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[g("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(q))])}function j(){const m=[];if(e.navigation===!0){const q=n["navigation-icon"]!==void 0?n["navigation-icon"]:y=>g(K,{key:"nav"+y.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${y.active===!0?"":"in"}active`,...y.btnProps,onClick:y.onClick}),N=t-1;m.push(P("buttons",(y,r)=>{const c=y.props.name,_=b.value===r;return q({index:r,maxIndex:N,name:c,active:_,btnProps:{icon:_===!0?F.value:w.value,size:"sm",...E.value},onClick:()=>{h(c)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";m.push(P("thumbnails",N=>{const y=N.props;return g("img",{key:"tmb#"+y.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${y.name===e.modelValue?"":"in"}active`+q,src:y.imgSrc||y["img-src"],onClick:()=>{h(y.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&m.push(g("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[g(K,{icon:D.value[0],...E.value,onClick:s})])),(e.infinite===!0||b.value<t-1)&&m.push(g("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[g(K,{icon:D.value[1],...E.value,onClick:p})]))),Ae(n.control,m)}return()=>(t=l(n),g("div",{class:R.value,style:S.value},[Ie("div",{class:"q-carousel__slides-container"},o(),"sl-cont",e.swipeable,()=>d.value)].concat(j())))}}),Ge=W({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:a}}=U(),i=ae(Pe,$);if(i===$)return console.error("QPage needs to be a deep child of QLayout"),$;if(ae(we,$)===$)return console.error("QPage needs to be child of QPageContainer"),$;const t=f(()=>{const o=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const d=i.isContainer.value===!0?i.containerHeight.value:a.screen.height;return e.styleFn(o,d)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-o+"px":a.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":a.screen.height-o+"px"}}),l=f(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:l.value,style:t.value},z(n.default))}}),Je="/assets/marble-texture-background-with-high-resolution-natural-background-ceramic-tiles-digital-design.4c052b95.jpg";const Ze={class:"q-ma-none q-pa-sm"},et={class:"page",width:"100%"},tt={class:"row"},nt={__name:"RememberThisMonth-carousel",setup(e){const n=Ee(),a=I("style"),i=I(!0),u=I(!1),t=n.monthPageSize;return(()=>{n.getTodayYahrzeits(),n.getWeeksYarhzeits(new O),n.getMultipleWeeksYarhzeits([new O,new O().add(3,"weeks")],t)})(),(o,d)=>{const h=qe("transition-prev");return V(),Z(Ge,{width:"100%"},{default:T(()=>[ee("h6",Ze,"Saturday "+re(new(te(O))().onOrBefore(6))+" to Friday "+re(new(te(O))().add(3,"weeks").onOrAfter(5)),1),M(me,{position:"top-right",offset:[18,4]},{default:T(()=>[M(K,{fab:"",onClick:d[0]||(d[0]=s=>o.$q.fullscreen.toggle()),icon:o.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),ee("div",et,[M(h,{appear:"","enter-active-class":"animated fadeIn  slower  delay-5s","leave-active-class":"animated fadeOut"},{default:T(()=>[M(Xe,{modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=s=>a.value=s),fullscreen:u.value,"transition-prev":"animated  slower ","transition-next":"slide-up","transition-duration":"4000",animated:"","prev-icon":"arrow_left","next-icon":"arrow_right","navigation-icon":"radio_button_unchecked",infinite:"",height:"900px",autoplay:i.value,"control-color":"primary",class:"rounded-borders column"},{control:T(()=>[M(je,{position:"bottom-right",offset:[18,18]})]),default:T(()=>[(V(!0),ie(se,null,le(te(n).allDataContinuous,(s,p)=>(V(),Z(Re,{name:p,class:"no-wrap flex-center",key:p,"img-src":Je},{default:T(()=>[ee("div",tt,[(V(!0),ie(se,null,le(s,v=>(V(),Z(pe,{key:v.id,ename:v.ename,hname:v.hname,hdate:v.hdate,look:"l6"},null,8,["ename","hname","hdate"]))),128))])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","fullscreen","autoplay"])]),_:1})])]),_:1})}}};var dt=Fe(nt,[["__scopeId","data-v-7291fb8c"]]);export{dt as default};