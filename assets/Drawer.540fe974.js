import{b as M,a as d,c as u,_ as f}from"./index.87baa5ff.js";import{f as O,j as i,k as l,x as v,y as w,A as y,B as h,i as e,h as a,T as b,g as _,C as x,w as p,q as k}from"./vendor.0c9e2303.js";import{O as I}from"./Overlay.5baecccf.js";const $={components:{Link:O(()=>M(()=>import("./Link.42667dd8.js"),["assets/Link.42667dd8.js","assets/index.87baa5ff.js","assets/index.bc3e9965.css","assets/vendor.0c9e2303.js"]))},setup(){const{isMobile:t}=d(),{drawerIsOpen:s}=u();return{isMobile:t,drawerIsOpen:s}}},j={class:"fixed top-0 left-0 flex flex-col items-center justify-between min-w-fit w-16 pb-4 h-full z-30 overflow-auto transform ease-in-out transition-all duration-300 border-r bg-gray-200 border-gray-100 text-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-100"},C={class:"w-full h-16"};function L(t,s,c,o,m,g){const r=i("Link");return l(),v(b,{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"},{default:w(()=>[y(e("div",j,[e("div",null,[e("div",C,[a(r,{icon:"user-circle",url:"/user"})]),a(r,{icon:"home",url:"/"}),a(r,{icon:"user",url:"/characters"}),a(r,{icon:"feather-alt",url:"/tales"}),a(r,{icon:"desktop",url:"/window-data"})]),e("div",null,[a(r,{icon:"power-off",url:"/logout"})])],512),[[h,o.drawerIsOpen||!o.isMobile]])]),_:1})}var B=f($,[["render",L]]);const S={setup(){const{isMobile:t}=d(),{drawerIsOpen:s}=u();return{isMobile:t,drawerIsOpen:s}}},z={class:"fixed top-0 left-16 h-full z-30 w-56 flex flex-col transform ease-in-out transition-all duration-300 border-r border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"},A={class:"relative text-sm focus:outline-none group"},E=e("div",{class:"w-full h-16 px-4 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"},[e("span",{class:"font-medium"}," Dropdown "),e("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),F={class:"absolute z-10 flex-col items-start hidden w-full pb-1 bg-gray-100 dark:bg-gray-800 shadow-lg group-focus:flex"},N={class:"flex flex-col flex-grow p-4 overflow-auto"},T={class:"leading-none"},V={class:"flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium dark:text-white bg-gray-300 hover:bg-gray-400 dark:bg-gray-500 rounded dark:hover:bg-gray-600",href:"#"},P=e("span",{class:"ml-2 leading-none"},"New Item",-1);function q(t,s,c,o,m,g){const r=i("font-awesome-icon");return l(),v(b,{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"},{default:w(()=>[y(e("div",z,[e("button",A,[E,e("div",F,[(l(),_(p,null,x(3,n=>e("a",{key:n,class:"w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-900",href:"#"},"Menu Item "+k(n),1)),64))])]),e("div",N,[(l(),_(p,null,x(6,n=>e("a",{key:n,class:"flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-200 dark:hover:bg-gray-800",href:"#"},[e("span",T,"Item "+k(n),1)])),64)),e("a",V,[a(r,{icon:"plus"}),P])])],512),[[h,o.drawerIsOpen||!o.isMobile]])]),_:1})}var R=f(S,[["render",q]]);const G={components:{MainDrawer:B,SecondaryDrawer:R,Overlay:I},setup(){const{isMobile:t}=d(),{drawerIsOpen:s,closeDrawer:c}=u();return{isMobile:t,drawerIsOpen:s,closeDrawer:c}}};function H(t,s,c,o,m,g){const r=i("MainDrawer"),n=i("SecondaryDrawer"),D=i("Overlay");return l(),_(p,null,[a(r),a(n),a(D,{visible:o.drawerIsOpen&&o.isMobile,onClickFunction:o.closeDrawer},null,8,["visible","onClickFunction"])],64)}var U=f(G,[["render",H]]);export{U as default};