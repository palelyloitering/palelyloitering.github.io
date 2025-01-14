import{ah as se,D as N,W as ue,ai as ce,d as j,aj as K,ak as J,s as W,b as U,r as z,a as d,w as Z,g as G,h as p,T as de,al as ve,e as F,am as fe,c as H,an as me,t as pe,o as ge,ao as he,Q as R,N as ye,l as ee,I as $,Z as _e,$ as be,a0 as Ce,a1 as V,a2 as X,a3 as T,a4 as E,a7 as te,a6 as ne,ac as ae,ab as oe,aa as xe}from"./index.e8fcc9d7.js";import{Q as Pe,_ as we}from"./date_extensions.6736cbbb.js";import{g as ie,s as re}from"./touch.9135741d.js";import{c as qe}from"./selection.bf56e010.js";import{u as Se}from"./use-timeout.16ae7a66.js";import{u as ke,a as $e}from"./use-dark.018470f3.js";import{u as Te,a as Ie,b as Ae}from"./use-fullscreen.716c1d72.js";import{u as Be,H as M}from"./storeYahrzeits.e9386814.js";import{_ as De}from"./plugin-vue_export-helper.21dcd24c.js";function Qe(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,l)=>{const v=parseFloat(o);v&&(n[l]=v)}),n}var Ne=se({name:"touch-swipe",beforeMount(e,{value:n,arg:o,modifiers:l}){if(l.mouse!==!0&&N.has.touch!==!0)return;const v=l.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Qe(o),direction:ie(l),noop:ue,mouseStart(i){re(i,t)&&ce(i)&&(j(t,"temp",[[document,"mousemove","move",`notPassive${v}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(re(i,t)){const r=i.target;j(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,r){N.is.firefox===!0&&K(e,!0);const f=J(i);t.event={x:f.left,y:f.top,time:Date.now(),mouse:r===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){W(i);return}const r=Date.now()-t.event.time;if(r===0)return;const f=J(i),_=f.left-t.event.x,s=Math.abs(_),h=f.top-t.event.y,c=Math.abs(h);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&c<t.sensitivity[1]){t.end(i);return}}else if(window.getSelection().toString()!==""){t.end(i);return}else if(s<t.sensitivity[2]&&c<t.sensitivity[2])return;const b=s/r,C=c/r;t.direction.vertical===!0&&s<c&&s<100&&C>t.sensitivity[0]&&(t.event.dir=h<0?"up":"down"),t.direction.horizontal===!0&&s>c&&c<100&&b>t.sensitivity[0]&&(t.event.dir=_<0?"left":"right"),t.direction.up===!0&&s<c&&h<0&&s<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<c&&h>0&&s<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>c&&_<0&&c<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>c&&_>0&&c<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(W(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),qe(),t.styleCleanup=S=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const x=()=>{document.body.classList.remove("no-pointer-events--children")};S===!0?setTimeout(x,50):x()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:s,y:c}})):t.end(i)},end(i){t.event!==void 0&&(U(t,"temp"),N.is.firefox===!0&&K(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&W(i),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const i=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";j(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}N.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchswipe;o!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&o.end(),o.handler=n.value),o.direction=ie(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(U(n,"main"),U(n,"temp"),N.is.firefox===!0&&K(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Ve(){let e=Object.create(null);return{getCache:(n,o)=>e[n]===void 0?e[n]=typeof o=="function"?o():o:e[n],setCache(n,o){e[n]=o},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Ee={name:{required:!0},disable:Boolean},le={setup(e,{slots:n}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},F(n.default))}},Me={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ze=["update:modelValue","beforeTransition","transition"];function Fe(){const{props:e,emit:n,proxy:o}=G(),{getCache:l}=Ve(),{registerTimeout:v}=Se();let t,i;const r=z(null),f=z(null);function _(a){const u=e.vertical===!0?"up":"left";P((o.$q.lang.rtl===!0?-1:1)*(a.direction===u?1:-1))}const s=d(()=>[[Ne,_,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),h=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),c=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),b=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),C=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),x=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Z(()=>e.modelValue,(a,u)=>{const y=w(a)===!0?B(a):-1;i!==!0&&k(y===-1?0:y<B(u)?-1:1),r.value!==y&&(r.value=y,n("beforeTransition",a,u),v(()=>{n("transition",a,u)},e.transitionDuration))});function I(){P(1)}function L(){P(-1)}function A(a){n("update:modelValue",a)}function w(a){return a!=null&&a!==""}function B(a){return t.findIndex(u=>u.props.name===a&&u.props.disable!==""&&u.props.disable!==!0)}function D(){return t.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function k(a){const u=a!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(a===-1?h.value:c.value):null;f.value!==u&&(f.value=u)}function P(a,u=r.value){let y=u+a;for(;y!==-1&&y<t.length;){const Y=t[y];if(Y!==void 0&&Y.props.disable!==""&&Y.props.disable!==!0){k(a),i=!0,n("update:modelValue",Y.props.name),setTimeout(()=>{i=!1});return}y+=a}e.infinite===!0&&t.length!==0&&u!==-1&&u!==t.length&&P(a,a===-1?t.length:-1)}function O(){const a=B(e.modelValue);return r.value!==a&&(r.value=a),!0}function m(){const a=w(e.modelValue)===!0&&O()&&t[r.value];return e.keepAlive===!0?[p(fe,S.value,[p(x.value===!0?l(C.value,()=>({...le,name:C.value})):le,{key:C.value,style:b.value},()=>a)])]:[p("div",{class:"q-panel scroll",style:b.value,key:C.value,role:"tabpanel"},[a])]}function q(){if(t.length!==0)return e.animated===!0?[p(de,{name:f.value},m)]:m()}function Q(a){return t=ve(F(a.default,[])).filter(u=>u.props!==null&&u.props.slot===void 0&&w(u.props.name)===!0),t.length}function g(){return t}return Object.assign(o,{next:I,previous:L,goTo:A}),{panelIndex:r,panelDirectives:s,updatePanelsList:Q,updatePanelIndex:O,getPanelContent:q,getEnabledPanels:D,getPanels:g,isValidPanelName:w,keepAliveProps:S,needsUniqueKeepAliveWrapper:x,goToPanelByOffset:P,goToPanel:A,nextPanel:I,previousPanel:L}}var Le=H({name:"QCarouselSlide",props:{...Ee,imgSrc:String},setup(e,{slots:n}){const o=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:o.value},F(n.default))}}),Oe=H({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:n}){const o=d(()=>`q-carousel__control absolute absolute-${e.position}`),l=d(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>p("div",{class:o.value,style:l.value},F(n.default))}});const Ye=["top","right","bottom","left"],je=["regular","flat","outline","push","unelevated"];var Re=H({name:"QCarousel",props:{...ke,...Me,...Te,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>je.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ye.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ie,...ze],setup(e,{slots:n}){const{proxy:{$q:o}}=G(),l=$e(e,o);let v=null,t;const{updatePanelsList:i,getPanelContent:r,panelDirectives:f,goToPanel:_,previousPanel:s,nextPanel:h,getEnabledPanels:c,panelIndex:b}=Fe(),{inFullscreen:C}=Ae(),S=d(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),x=d(()=>e.vertical===!0?"vertical":"horizontal"),I=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),L=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${x.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${I.value}`:"")),A=d(()=>{const m=[e.prevIcon||o.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||o.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&o.lang.rtl===!0?m.reverse():m}),w=d(()=>e.navigationIcon||o.iconSet.carousel.navigationIcon),B=d(()=>e.navigationActiveIcon||w.value),D=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Z(()=>e.modelValue,()=>{e.autoplay&&k()}),Z(()=>e.autoplay,m=>{m?k():v!==null&&(clearTimeout(v),v=null)});function k(){const m=me(e.autoplay)===!0?Math.abs(e.autoplay):5e3;v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,m>=0?h():s()},m)}pe(()=>{e.autoplay&&k()}),ge(()=>{v!==null&&clearTimeout(v)});function P(m,q){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${m} q-carousel__navigation--${I.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},c().map(q))])}function O(){const m=[];if(e.navigation===!0){const q=n["navigation-icon"]!==void 0?n["navigation-icon"]:g=>p(R,{key:"nav"+g.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${g.active===!0?"":"in"}active`,...g.btnProps,onClick:g.onClick}),Q=t-1;m.push(P("buttons",(g,a)=>{const u=g.props.name,y=b.value===a;return q({index:a,maxIndex:Q,name:u,active:y,btnProps:{icon:y===!0?B.value:w.value,size:"sm",...D.value},onClick:()=>{_(u)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";m.push(P("thumbnails",Q=>{const g=Q.props;return p("img",{key:"tmb#"+g.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${g.name===e.modelValue?"":"in"}active`+q,src:g.imgSrc||g["img-src"],onClick:()=>{_(g.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&m.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${x.value} absolute flex flex-center`},[p(R,{icon:A.value[0],...D.value,onClick:s})])),(e.infinite===!0||b.value<t-1)&&m.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${x.value} absolute flex flex-center`},[p(R,{icon:A.value[1],...D.value,onClick:h})]))),ye(n.control,m)}return()=>(t=i(n),p("div",{class:L.value,style:S.value},[he("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>f.value)].concat(O())))}}),He=H({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:o}}=G(),l=ee(_e,$);if(l===$)return console.error("QPage needs to be a deep child of QLayout"),$;if(ee(be,$)===$)return console.error("QPage needs to be child of QPageContainer"),$;const t=d(()=>{const r=(l.header.space===!0?l.header.size:0)+(l.footer.space===!0?l.footer.size:0);if(typeof e.styleFn=="function"){const f=l.isContainer.value===!0?l.containerHeight.value:o.screen.height;return e.styleFn(r,f)}return{minHeight:l.isContainer.value===!0?l.containerHeight.value-r+"px":o.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":o.screen.height-r+"px"}}),i=d(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:i.value,style:t.value},F(n.default))}}),Ke="/assets/marble-texture-background-with-high-resolution-natural-background-ceramic-tiles-digital-design.4c052b95.jpg";const We={class:"page",width:"100%"},Ue={class:"row"},Xe={__name:"RememberThisMonth-carousel",setup(e){const n=Be(),o=z("style"),l=z(!0),v=z(!1),t=n.monthPageSize;return(()=>{n.getTodayYahrzeits(),n.getWeeksYarhzeits(new M),n.getMultipleWeeksYarhzeits([new M,new M().add(1,"weeks"),new M().add(2,"weeks"),new M().add(3,"weeks")],t)})(),(r,f)=>{const _=Ce("transition-prev");return V(),X(He,{width:"100%"},{default:T(()=>[E(Pe,{position:"top-right",offset:[18,4]},{default:T(()=>[E(R,{fab:"",onClick:f[0]||(f[0]=s=>r.$q.fullscreen.toggle()),icon:r.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),te("div",We,[E(_,{appear:"","enter-active-class":"animated fadeIn  slower  delay-20s","leave-active-class":"animated fadeOut"},{default:T(()=>[E(Re,{modelValue:o.value,"onUpdate:modelValue":f[1]||(f[1]=s=>o.value=s),fullscreen:v.value,"transition-prev":"animated   ","transition-next":"slide-up","transition-duration":"4000",animated:"","prev-icon":"arrow_left","next-icon":"arrow_right","navigation-icon":"radio_button_unchecked",infinite:"",height:"900px",autoplay:l.value,"control-color":"primary",class:"rounded-borders column"},{control:T(()=>[E(Oe,{position:"bottom-right",offset:[18,18]})]),default:T(()=>[(V(!0),ne(oe,null,ae(xe(n).allDataContinuous,(s,h)=>(V(),X(Le,{name:h,class:"no-wrap flex-center",key:h,"img-src":Ke},{default:T(()=>[te("div",Ue,[(V(!0),ne(oe,null,ae(s,c=>(V(),X(we,{key:c.id,ename:c.ename,hname:c.hname,hdate:c.hdate,look:"l6"},null,8,["ename","hname","hdate"]))),128))])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","fullscreen","autoplay"])]),_:1})])]),_:1})}}};var rt=De(Xe,[["__scopeId","data-v-c032d5c4"]]);export{rt as default};
