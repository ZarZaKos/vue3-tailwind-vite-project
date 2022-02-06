import{c as O,a as L,b as C,r as g,o as l,d as y,w as b,e as d,T as x,f,g as t,n as k,h as v,t as E,i as W,j as I,v as N,k as z,l as S,m as B,p as P,q as j,s as D,_ as A,u as V,F}from"./vendor.64a17d31.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const e of a.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&i(e)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};H();const T="modulepreload",M={},q="./",$=function(o,n){return!n||n.length===0?o():Promise.all(n.map(i=>{if(i=`${q}${i}`,i in M)return;M[i]=!0;const r=i.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const e=document.createElement("link");if(e.rel=r?"stylesheet":T,r||(e.as="script",e.crossOrigin=""),e.href=i,document.head.appendChild(e),r)return new Promise((c,m)=>{e.addEventListener("load",c),e.addEventListener("error",m)})})).then(()=>o())},K=()=>$(()=>import("./Home.648f5261.js"),["assets/Home.648f5261.js","assets/vendor.64a17d31.js"]),U=()=>$(()=>import("./NotFound.e1597225.js"),["assets/NotFound.e1597225.js","assets/vendor.64a17d31.js"]),h=()=>$(()=>import("./Default.c71e12fb.js"),["assets/Default.c71e12fb.js","assets/vendor.64a17d31.js"]),G=[{path:"/",name:"Inicio",component:K},{path:"/characters",name:"Personajes",component:h},{path:"/bookmarks",name:"Guardados",component:h},{path:"/user",name:"Usuario",component:h},{path:"/tales",name:"Historias",component:h},{path:"/logout",name:"Logout",component:h},{path:"/:catchAll(.*)",component:U}],J=O({history:L(),routes:G}),Q=C({state(){return{auth:{user:{username:"",mail:""}},sidebarShowing:!1}},mutations:{toggleSidebar(s){s.sidebarShowing=!s.sidebarShowing}}});var p=(s,o)=>{const n=s.__vccOpts||s;for(const[i,r]of o)n[i]=r;return n};const X={props:{icon:String,url:String}};function Y(s,o,n,i,r,a){const e=g("font-awesome-icon"),c=g("router-link");return l(),y(c,{class:"flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800",to:n.url},{default:b(()=>[d(e,{icon:n.icon},null,8,["icon"])]),_:1},8,["to"])}var Z=p(X,[["render",Y]]);const ee={components:{Link:Z},props:{drawerOpen:Boolean}},te={class:"w-full h-16"};function re(s,o,n,i,r,a){const e=g("Link");return l(),y(x,{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"},{default:b(()=>[n.drawerOpen?(l(),f("div",{key:0,class:k(["transform top-0 left-0 fixed h-full flex-col ease-in-out transition-all duration-300 z-30 items-center min-w-fit w-16 pb-4 overflow-auto border-r border-gray-800 text-gray-500 flex justify-between bg-gray-900",n.drawerOpen?"translate-x-0":"-translate-x-full"])},[t("div",null,[t("div",te,[d(e,{icon:"user-circle",url:"/user"})]),d(e,{icon:"home",url:"/"}),d(e,{icon:"user",url:"/characters"}),d(e,{icon:"feather-alt",url:"/tales"}),d(e,{icon:"bookmark",url:"/bookmarks"})]),t("div",null,[d(e,{icon:"power-off",url:"/logout"})])],2)):v("",!0)]),_:1})}var oe=p(ee,[["render",re]]);const se={props:{drawerOpen:Boolean}},ne=t("button",{class:"relative text-sm focus:outline-none group"},[t("div",{class:"flex items-center justify-between w-full h-16 px-4 border-b border-gray-800 hover:bg-gray-800"},[t("span",{class:"font-medium"}," Dropdown "),t("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])]),t("div",{class:"absolute z-10 flex-col items-start hidden w-full pb-1 bg-gray-800 shadow-lg group-focus:flex"},[t("a",{class:"w-full px-4 py-2 text-left hover:bg-gray-900",href:"#"},"Menu Item 1"),t("a",{class:"w-full px-4 py-2 text-left hover:bg-gray-900",href:"#"},"Menu Item 1"),t("a",{class:"w-full px-4 py-2 text-left hover:bg-gray-900",href:"#"},"Menu Item 1")])],-1),ae=t("div",{class:"flex flex-col flex-grow p-4 overflow-auto"},[t("a",{class:"flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800",href:"#"},[t("span",{class:"leading-none"},"Item 1")]),t("a",{class:"flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800",href:"#"},[t("span",{class:"leading-none"},"Item 2")]),t("a",{class:"flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800",href:"#"},[t("span",{class:"leading-none"},"Item 3")]),t("a",{class:"flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800",href:"#"},[t("span",{class:"leading-none"},"Item 4")]),t("a",{class:"flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800",href:"#"},[t("span",{class:"leading-none"},"Item 5")]),t("a",{class:"flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800",href:"#"},[t("span",{class:"leading-none"},"Item 6")]),t("a",{class:"flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-800 rounded hover:bg-gray-700",href:"#"},[t("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})]),t("span",{class:"ml-2 leading-none"},"New Item")])],-1),ie=[ne,ae];function le(s,o,n,i,r,a){return l(),y(x,{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"},{default:b(()=>[n.drawerOpen?(l(),f("div",{key:0,class:k(["transform top-0 left-16 h-full fixed flex-col ease-in-out transition-all duration-300 z-30 flex w-56 border-r border-gray-800 bg-gray-800",n.drawerOpen?"translate-x-0":"-translate-x-full"])},ie,2)):v("",!0)]),_:1})}var ce=p(se,[["render",le]]);const de={props:{isMobile:Boolean},methods:{toggleSidebar(){this.$store.commit("toggleSidebar")}}},ue={class:"flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-800 justify-between"},fe={class:"text-lg font-medium"};function ge(s,o,n,i,r,a){const e=g("font-awesome-icon");return l(),f("div",ue,[t("h1",fe,E(s.$route.name),1),n.isMobile?(l(),f("button",{key:0,class:"flex items-center justify-center w-10 h-10 rounded hover:bg-gray-800",onClick:o[0]||(o[0]=c=>a.toggleSidebar())},[d(e,{icon:"bars"})])):v("",!0)])}var pe=p(de,[["render",ge]]);const me={components:{NavBar:pe},props:{isMobile:Boolean}},ve={class:"flex flex-col flex-grow"},he=W('<div class="flex-grow p-6 overflow-auto bg-gray-700"><div class="grid grid-cols-3 gap-6"><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-2 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-2 bg-gray-600"></div><div class="h-24 col-span-3 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-2 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-2 bg-gray-600"></div><div class="h-24 col-span-3 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-2 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-1 bg-gray-600"></div><div class="h-24 col-span-2 bg-gray-600"></div><div class="h-24 col-span-3 bg-gray-600"></div></div></div>',1);function ye(s,o,n,i,r,a){const e=g("NavBar");return l(),f("div",ve,[d(e,{isMobile:n.isMobile},null,8,["isMobile"]),he])}var be=p(me,[["render",ye]]);const we={props:{drawerOpen:Boolean,isMobile:Boolean},methods:{toggleSidebar(){this.$store.commit("toggleSidebar")}}};function _e(s,o,n,i,r,a){return l(),y(x,{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"},{default:b(()=>[I(t("div",{onKeydown:o[1]||(o[1]=z((...e)=>a.toggleSidebar&&a.toggleSidebar(...e),["esc"])),class:"z-10 fixed inset-0 transition-opacity"},[t("div",{onClick:o[0]||(o[0]=(...e)=>a.toggleSidebar&&a.toggleSidebar(...e)),class:"absolute inset-0 bg-black opacity-50",tabindex:"0"})],544),[[N,n.drawerOpen&&n.isMobile]])]),_:1})}var xe=p(we,[["render",_e]]);function ke(s={}){const{immediate:o=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:r,onRegisterError:a}=s;let e,c;const m=async(u=!0)=>{u&&(e==null||e.addEventListener("controlling",_=>{_.isUpdate&&window.location.reload()})),c&&c.waiting&&await P(c.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){e=new B("./sw.js",{scope:"./",type:"classic"}),e.addEventListener("activated",u=>{u.isUpdate||i==null||i()});{const u=()=>{n==null||n()};e.addEventListener("waiting",u),e.addEventListener("externalwaiting",u)}e.register({immediate:o}).then(u=>{c=u,r==null||r(u)}).catch(u=>{a==null||a(u)})}return m}function R(s={}){const{immediate:o=!0,onNeedRefresh:n,onOfflineReady:i,onRegistered:r,onRegisterError:a}=s,e=S(!1),c=S(!1);return{updateServiceWorker:ke({immediate:o,onNeedRefresh(){e.value=!0,n==null||n()},onOfflineReady(){c.value=!0,i==null||i()},onRegistered:r,onRegisterError:a}),offlineReady:c,needRefresh:e}}const{updateServiceWorker:$e}=R(),Se=j({name:"ReloadPWA",setup(){const{offlineReady:s,needRefresh:o,updateServiceWorker:n}=R();return{offlineReady:s,needRefresh:o,updateServiceWorker:n,close:async()=>{s.value=!1,o.value=!1}}},methods:{async close(){this.offlineReady.value=!1,this.needRefresh.value=!1},async updateServiceWorker(){await $e()}}}),Me={key:0,class:"overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full flex"},Re={class:"relative px-4 w-full max-w-md h-full md:h-auto"},Oe={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},Le=t("div",{class:"flex justify-end p-2"},[t("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-toggle":"popup-modal"},[t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),Ce={class:"p-6 pt-0 text-center"},Ee=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),We=[Ee],Ie={key:0,class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"},Ne={key:1,class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"};function ze(s,o,n,i,r,a){return s.offlineReady||s.needRefresh?(l(),f("div",Me,[t("div",Re,[t("div",Oe,[Le,t("div",Ce,[(l(),f("svg",{onClick:o[0]||(o[0]=(...e)=>s.close&&s.close(...e)),class:"mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},We)),s.offlineReady?(l(),f("h3",Ie," La aplicaci\xF3n est\xE1 lista para funcionar offline. ")):(l(),f("h3",Ne," Nuevo contenido disponible, toque en refrescar para actualizar la p\xE1gina. ")),s.needRefresh?(l(),f("button",{key:2,onClick:o[1]||(o[1]=e=>s.updateServiceWorker()),type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"}," Refrescar ")):v("",!0),t("button",{onClick:o[2]||(o[2]=(...e)=>s.close&&s.close(...e)),type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"}," Cerrar ")])])])])):v("",!0)}var Be=p(Se,[["render",ze]]);const Pe={components:{MainDrawer:oe,SecondaryDrawer:ce,MainContent:be,Overlay:xe,ReloadPWA:Be},data(){return{isMobile:!0}},beforeDestroy(){typeof window!="undefined"&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize(){this.isMobile=window.innerWidth<600}},computed:{drawerOpen(){return this.$store.state.sidebarShowing||!this.isMobile}},watch:{drawerOpen:{immediate:!0,handler(s){s&&this.isMobile?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}}},je={class:"flex h-screen text-gray-400 bg-gray-900"};function De(s,o,n,i,r,a){const e=g("MainDrawer"),c=g("SecondaryDrawer"),m=g("Overlay"),u=g("MainContent"),_=g("ReloadPWA");return l(),f("div",je,[d(e,{drawerOpen:a.drawerOpen,isMobile:r.isMobile},null,8,["drawerOpen","isMobile"]),d(c,{drawerOpen:a.drawerOpen},null,8,["drawerOpen"]),d(m,{drawerOpen:a.drawerOpen,isMobile:r.isMobile},null,8,["drawerOpen","isMobile"]),t("div",{class:k(r.isMobile?"w-full":"w-full ml-72")},[d(u,{isMobile:r.isMobile},null,8,["isMobile"]),d(_)],2)])}var Ae=p(Pe,[["render",De]]);D.add(A);const w=V(Ae);w.use(J);w.use(Q);w.component("font-awesome-icon",F);w.mount("#app");export{p as _};