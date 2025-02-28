import{v as Ct,g as Lt,c as We,a as Tt,u as St,b as xt,Q as _t,d as Et}from"./QBtn-Cb58P-7J.js";import{c as V,a as v,h as C,r as T,i as ot,o as U,g as M,b as N,n as ze,d as Y,l as H,e as $e,f as D,w as k,j as se,H as Fe,k as O,s as Pe,m as Bt,p as zt,P as $t,q as Pt,t as be,u as ye,v as oe,x as Se,y as Re,z as ge,A as Vt,B as Ot,C as nt,D as Ht,E as ne,F as Mt,G as Qt,I as lt,J as xe,K as re,L as z,M as Dt,N as B,O as ue,Q as _e,R as At,S as Wt,T as Ft,U as Rt,V as Nt,W as It}from"./index-PVxqsJ4O.js";import{h as I,a as it,b as Ne,c as Xt}from"./render-De2lMBaB.js";const jt=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},I(o.default))}}),Ut=V({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},I(o.default))}});function Yt(){const e=T(!ot.value);return e.value===!1&&U(()=>{e.value=!0}),{isHydrated:e}}const at=typeof ResizeObserver<"u",Ie=at===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Ee=V({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,i,t={width:-1,height:-1};function l(d){d===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:d,offsetHeight:c}=i;(d!==t.width||c!==t.height)&&(t={width:d,height:c},o("resize",t))}}const{proxy:f}=M();if(f.trigger=l,at===!0){let d;const c=r=>{i=f.$el.parentNode,i?(d=new ResizeObserver(l),d.observe(i),s()):r!==!0&&Y(()=>{c(!0)})};return U(()=>{c()}),N(()=>{n!==null&&clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),ze}else{let d=function(){n!==null&&(clearTimeout(n),n=null),b!==void 0&&(b.removeEventListener!==void 0&&b.removeEventListener("resize",l,H.passive),b=void 0)},c=function(){d(),i&&i.contentDocument&&(b=i.contentDocument.defaultView,b.addEventListener("resize",l,H.passive),s())};const{isHydrated:r}=Yt();let b;return U(()=>{Y(()=>{i=f.$el,i&&c()})}),N(d),()=>{if(r.value===!0)return C("object",{class:"q--avoid-card-border",style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:c})}}}}),Kt=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=M(),t=$e(se,D);if(t===D)return console.error("QHeader needs to be child of QLayout"),D;const l=T(parseInt(e.heightHint,10)),s=T(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||i.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?l.value:0;const u=l.value-t.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),r=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),b=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function S({height:u}){h(l,u),m("size",u)}function L(u){r.value===!0&&h(s,!0),n("focusin",u)}k(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),k(d,u=>{m("offset",u)}),k(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),k(s,u=>{t.animate(),n("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",l.value),m("space",e.modelValue),m("offset",d.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=it(o.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(Ee,{debounce:0,onResize:S})),C("header",{class:b.value,style:q.value,onFocusin:L},u)}}}),Be=V({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:t.value,class:i.value},I(o.default))}}),Ve={dark:{type:Boolean,default:null}};function Oe(e,o){return v(()=>e.dark===null?o.dark.isActive:e.dark)}const Gt=["ul","ol"],Jt=V({name:"QList",props:{...Ve,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=M(),i=Oe(e,n.proxy.$q),t=v(()=>Gt.includes(e.tag)?null:"list"),l=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:l.value,role:t.value},I(o.default))}});function Zt(e,o,n){let i;function t(){i!==void 0&&(Fe.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>n.value===!0,handler:o},Fe.add(i)}}}const eo={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},to=["beforeShow","show","beforeHide","hide"];function oo({showing:e,canShow:o,hideOnRouteChange:n,handleShow:i,handleHide:t,processOnMount:l}){const s=M(),{props:f,emit:d,proxy:c}=s;let r;function b(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),r=u,Y(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),i!==void 0?i(u):d("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),r=u,Y(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&S(u)}function S(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:S)(r)}k(()=>f.modelValue,L),n!==void 0&&Ct(s)===!0&&k(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),l===!0&&U(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:b};return Object.assign(c,g),g}const no=[Element,String],lo=[null,document,document.body,document.scrollingElement,document.documentElement];function io(e,o){let n=Lt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return lo.includes(n)?window:n}function rt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ut(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function we(){if(le!==void 0)return le;const e=document.createElement("p"),o=document.createElement("div");We(e,{width:"100%",height:"200px"}),We(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=o.clientWidth),o.remove(),le=n-i,le}function ao(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,qe,ke,Z,Ce=!1,Xe,je,Ue,R=null;function ro(e){uo(e)&&Pe(e)}function uo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Bt(e),n=e.shiftKey&&!e.deltaX,i=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||i?e.deltaY:e.deltaX;for(let l=0;l<o.length;l++){const s=o[l];if(ao(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ye(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:i}=document.scrollingElement;(Z===void 0||o!==window.innerHeight)&&(Z=n-o,document.scrollingElement.scrollTop=i),i>Z&&(document.scrollingElement.scrollTop-=Math.ceil((i-Z)/8))}))}function Ke(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);qe=ut(window),ke=rt(window),Xe=o.style.left,je=o.style.top,Ue=window.location.href,o.style.left=`-${qe}px`,o.style.top=`-${ke}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,H.passiveCapture),window.visualViewport.addEventListener("scroll",ie,H.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ye,H.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",ro,H.notPassive),e==="remove"&&(O.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ie,H.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,H.passiveCapture)):window.removeEventListener("scroll",Ye,H.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Xe,o.style.top=je,window.location.href===Ue&&window.scrollTo(qe,ke),Z=void 0)}function so(e){let o="add";if(e===!0){if(J++,R!==null){clearTimeout(R),R=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(o="remove",O.is.ios===!0&&O.is.nativeMobile===!0){R!==null&&clearTimeout(R),R=setTimeout(()=>{Ke(o),R=null},100);return}}Ke(o)}function co(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,so(o))}}}function fo(){let e=null;const o=M();function n(){e!==null&&(clearTimeout(e),e=null)}return zt(n),N(n),{removeTimeout:n,registerTimeout(i,t){n(),Tt(o)===!1&&(e=setTimeout(()=>{e=null,i()},t))}}}const He={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},vo=Object.keys(He);He.all=!0;function Ge(e){const o={};for(const n of vo)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?He:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const mo=["INPUT","TEXTAREA"];function Je(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&mo.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ho(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),$t.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,o,n){const i=Se(e);let t,l=i.left-o.event.x,s=i.top-o.event.y,f=Math.abs(l),d=Math.abs(s);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&l>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(i.left-=l,f=0,l=0):(i.top-=s,d=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:l,y:s},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let po=0;const Te=Pt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&O.has.touch!==!0)return;function i(l,s){n.mouse===!0&&s===!0?Pe(l):(n.stop===!0&&ge(l),n.prevent===!0&&Re(l))}const t={uid:"qvtp_"+po++,handler:o,modifiers:n,direction:Ge(n),noop:ze,mouseStart(l){Je(l,t)&&Vt(l)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Je(l,t)){const s=l.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,s){if(O.is.firefox===!0&&ye(e,!0),t.lastEvt=l,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Re(c),l.cancelBubble===!0&&ge(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}ge(l)}const{left:f,top:d}=Se(l);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(l){if(t.event===void 0)return;const s=Se(l),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=l;const c=t.event.mouse===!0,r=()=>{i(l,c);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ho(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{S(),h()},50):S()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:m,synthetic:h}=Le(l,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(l);return}const b=Math.abs(f),q=Math.abs(d);b!==q&&(t.direction.horizontal===!0&&b>q||t.direction.vertical===!0&&b<q||t.direction.up===!0&&b<q&&d<0||t.direction.down===!0&&b<q&&d>0||t.direction.left===!0&&b>q&&f<0||t.direction.right===!0&&b>q&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,s){if(t.event!==void 0){if(be(t,"temp"),O.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=Le(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}O.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ge(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),be(o,"main"),be(o,"temp"),O.is.firefox===!0&&ye(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function ae(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const Ze=150,bo=V({name:"QDrawer",inheritAttrs:!1,props:{...eo,...Ve,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...to,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:i}){const t=M(),{proxy:{$q:l}}=t,s=Oe(e,l),{preventBodyScroll:f}=co(),{registerTimeout:d,removeTimeout:c}=fo(),r=$e(se,D);if(r===D)return console.error("QDrawer needs to be child of QLayout"),D;let b,q=null,m;const h=T(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),S=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>S.value===!0?e.miniWidth:e.width),g=T(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||st.value===!0));function p(a,y){if($(),a!==!1&&r.animate(),P(0),h.value===!0){const E=r.instances[ee.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),A(1),r.isContainer.value!==!0&&f(!0)}else A(0),a!==!1&&me(!1);d(()=>{a!==!1&&me(!0),y!==!0&&n("show",a)},Ze)}function w(a,y){K(),a!==!1&&r.animate(),A(0),P(X.value*L.value),he(),y!==!0?d(()=>{n("hide",a)},Ze):c()}const{show:x,hide:_}=oo({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:w}),{addToHistory:$,removeFromHistory:K}=Zt(g,_,u),F={belowBreakpoint:h,hide:_},Q=v(()=>e.side==="right"),X=v(()=>(l.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),Me=T(0),j=T(!1),ce=T(!1),Qe=T(L.value*X.value),ee=v(()=>Q.value===!0?"left":"right"),de=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),fe=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(Q.value?"R":"L")!==-1||l.platform.is.ios===!0&&r.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),st=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),ct=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&j.value===!1?" hidden":"")),dt=v(()=>({backgroundColor:`rgba(0,0,0,${Me.value*.4})`})),De=v(()=>Q.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),ft=v(()=>Q.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),vt=v(()=>{const a={};return r.header.space===!0&&De.value===!1&&(fe.value===!0?a.top=`${r.header.offset}px`:r.header.space===!0&&(a.top=`${r.header.size}px`)),r.footer.space===!0&&ft.value===!1&&(fe.value===!0?a.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(a.bottom=`${r.footer.size}px`)),a}),mt=v(()=>{const a={width:`${L.value}px`,transform:`translateX(${Qe.value}px)`};return h.value===!0?a:Object.assign(a,vt.value)}),ht=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),pt=v(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(fe.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),bt=v(()=>{const a=l.lang.rtl===!0?e.side:ee.value;return[[Te,qt,void 0,{[a]:!0,mouse:!0}]]}),yt=v(()=>{const a=l.lang.rtl===!0?ee.value:e.side;return[[Te,Ae,void 0,{[a]:!0,mouse:!0}]]}),gt=v(()=>{const a=l.lang.rtl===!0?ee.value:e.side;return[[Te,Ae,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){kt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}k(h,a=>{a===!0?(b=g.value,g.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(g.value===!0?(P(0),A(0),he()):x(!1))}),k(()=>e.side,(a,y)=>{r.instances[y]===F&&(r.instances[y]=void 0,r[y].space=!1,r[y].offset=0),r.instances[a]=F,r[a].size=L.value,r[a].space=G.value,r[a].offset=de.value}),k(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),k(()=>e.behavior+e.breakpoint,ve),k(r.isContainer,a=>{g.value===!0&&f(a!==!0),a===!0&&ve()}),k(r.scrollbarWidth,()=>{P(g.value===!0?0:void 0)}),k(de,a=>{W("offset",a)}),k(G,a=>{n("onLayout",a),W("space",a)}),k(Q,()=>{P()}),k(L,a=>{P(),pe(e.miniToOverlay,a)}),k(()=>e.miniToOverlay,a=>{pe(a,L.value)}),k(()=>l.lang.rtl,()=>{P()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(wt(),r.animate())}),k(S,a=>{n("miniState",a)});function P(a){a===void 0?Y(()=>{a=g.value===!0?0:L.value,P(X.value*a)}):(r.isContainer.value===!0&&Q.value===!0&&(h.value===!0||Math.abs(a)===L.value)&&(a+=X.value*r.scrollbarWidth.value),Qe.value=a)}function A(a){Me.value=a}function me(a){const y=a===!0?"remove":r.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function wt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,q=setTimeout(()=>{q=null,ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function qt(a){if(g.value!==!1)return;const y=L.value,E=ae(a.distance.x,0,y);if(a.isFinal===!0){E>=Math.min(75,y)===!0?x():(r.animate(),A(0),P(X.value*y)),j.value=!1;return}P((l.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(y-E,0):Math.min(0,E-y)),A(ae(E/y,0,1)),a.isFirst===!0&&(j.value=!0)}function Ae(a){if(g.value!==!0)return;const y=L.value,E=a.direction===e.side,te=(l.lang.rtl===!0?E!==!0:E)?ae(a.distance.x,0,y):0;if(a.isFinal===!0){Math.abs(te)<Math.min(75,y)===!0?(r.animate(),A(1),P(0)):_(),j.value=!1;return}P(X.value*te),A(ae(1-te/y,0,1)),a.isFirst===!0&&(j.value=!0)}function he(){f(!1),me(!0)}function W(a,y){r.update(e.side,a,y)}function kt(a,y){a.value!==y&&(a.value=y)}function pe(a,y){W("size",a===!0?e.miniWidth:y)}return r.instances[e.side]=F,pe(e.miniToOverlay,L.value),W("space",G.value),W("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("onLayout",G.value),n("miniState",S.value),b=e.showIfAbove===!0;const a=()=>{(g.value===!0?p:w)(!1,!0)};if(r.totalWidth.value!==0){Y(a);return}m=k(r.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?x(!1):a()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&he(),r.instances[e.side]===F&&(r.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(Ot(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),bt.value)),a.push(Ne("div",{ref:"backdrop",class:ct.value,style:dt.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>gt.value)));const y=S.value===!0&&o.mini!==void 0,E=[C("div",{...i,key:""+y,class:[ht.value,i.class]},y===!0?o.mini():I(o.default))];return e.elevated===!0&&g.value===!0&&E.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Ne("aside",{ref:"content",class:pt.value,style:mt.value},E,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>yt.value)),C("div",{class:"q-drawer-container"},a)}}}),yo=V({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=M(),i=$e(se,D);if(i===D)return console.error("QPageContainer needs to be child of QLayout"),D;nt(Ht,!0);const t=v(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},I(o.default))}}),{passive:et}=H,go=["both","horizontal","vertical"],wo=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>go.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:no},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;k(()=>e.scrollTarget,()=>{d(),f()});function s(){i!==null&&i();const b=Math.max(0,rt(t)),q=ut(t),m={top:b-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:b,left:q},n.directionChanged=n.direction!==h,n.delta=m,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=io(l,e.scrollTarget),t.addEventListener("scroll",c,et),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,et),t=void 0)}function c(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:r}=M();return k(()=>r.$q.lang.rtl,s),U(()=>{l=r.$el.parentNode,f()}),N(()=>{i!==null&&i(),d()}),Object.assign(r,{trigger:c,getPosition:()=>n}),ze}}),qo=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=M(),t=T(null),l=T(i.screen.height),s=T(e.container===!0?0:i.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),d=T(0),c=T(ot.value===!0?0:we()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=v(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(w){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:w.position.top,direction:w.direction,directionChanged:w.directionChanged,inflectionPoint:w.inflectionPoint.top,delta:w.delta.top};f.value=x,e.onScroll!==void 0&&n("scroll",x)}}function S(w){const{height:x,width:_}=w;let $=!1;l.value!==x&&($=!0,l.value=x,e.onScrollHeight!==void 0&&n("scrollHeight",x),g()),s.value!==_&&($=!0,s.value=_),$===!0&&e.onResize!==void 0&&n("resize",w)}function L({height:w}){d.value!==w&&(d.value=w,g())}function g(){if(e.container===!0){const w=l.value>d.value?we():0;c.value!==w&&(c.value=w)}}let u=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const w=e.view.toLowerCase().split(" ");return{top:w[0].split(""),middle:w[1].split(""),bottom:w[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(w,x,_){p[w][x]=_}};if(nt(se,p),we()>0){let w=function(){$=null,K.classList.remove("hide-scrollbar")},x=function(){if($===null){if(K.scrollHeight>i.screen.height)return;K.classList.add("hide-scrollbar")}else clearTimeout($);$=setTimeout(w,300)},_=function(F){$!==null&&F==="remove"&&(clearTimeout($),w()),window[`${F}EventListener`]("resize",x)},$=null;const K=document.body;k(()=>e.container!==!0?"add":"remove",_),e.container!==!0&&_("add"),Mt(()=>{_("remove")})}return()=>{const w=Xt(o.default,[C(wo,{onScroll:h}),C(Ee,{onResize:S})]),x=C("div",{class:r.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},w);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(Ee,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[x])])]):x}}}),tt=V({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},I(o.default))}}),ko=V({name:"QItem",props:{...Ve,...St,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=M(),t=Oe(e,i),{hasLink:l,linkAttrs:s,linkClass:f,linkTag:d,navigateOnClick:c}=xt(),r=T(null),b=T(null),q=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=v(()=>e.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function L(p){m.value===!0&&(b.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===r.value?b.value.focus():document.activeElement===b.value&&r.value.focus()),c(p))}function g(p){if(m.value===!0&&Qt(p,[13,32])===!0){Pe(p),p.qKeyEvent=!0;const w=new MouseEvent("click",p);w.qKeyEvent=!0,r.value.dispatchEvent(w)}n("keyup",p)}function u(){const p=it(o.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:b})),p}return()=>{const p={ref:r,class:h.value,style:S.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),C(d.value,p,u())}}}),Co=lt({__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup(e){return(o,n)=>(re(),xe(ko,{clickable:"",tag:"a",target:"_blank",href:o.link},{default:z(()=>[o.icon?(re(),xe(tt,{key:0,avatar:""},{default:z(()=>[B(_t,{name:o.icon},null,8,["name"])]),_:1})):Dt("",!0),B(tt,null,{default:z(()=>[B(Be,null,{default:z(()=>[ue(_e(o.title),1)]),_:1}),B(Be,{caption:""},{default:z(()=>[ue(_e(o.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}}),_o=lt({__name:"MainLayout",setup(e){const o=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],n=T(!1);function i(){n.value=!n.value}return(t,l)=>{const s=At("router-view");return re(),xe(qo,{view:"lHh Lpr lFf"},{default:z(()=>[B(Kt,{elevated:""},{default:z(()=>[B(Ut,null,{default:z(()=>[B(Et,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:i}),B(jt,null,{default:z(()=>l[1]||(l[1]=[ue(" Quasar App ")])),_:1}),Wt("div",null,"Quasar v"+_e(t.$q.version),1)]),_:1})]),_:1}),B(bo,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=f=>n.value=f),"show-if-above":"",bordered:""},{default:z(()=>[B(Jt,null,{default:z(()=>[B(Be,{header:""},{default:z(()=>l[2]||(l[2]=[ue(" Essential Links ")])),_:1}),(re(),Ft(Rt,null,Nt(o,f=>B(Co,It({key:f.title,ref_for:!0},f),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),B(yo,null,{default:z(()=>[B(s)]),_:1})]),_:1})}}});export{_o as default};
