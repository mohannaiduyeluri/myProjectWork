import{r as I,o as c,c as M,a as U,b as f,d as x,e as u,w as h,v as b,f as t,F as v,g as y,u as L,p as O,h as S,n as V,t as i,i as k,j as A,k as D,l as T}from"./vendor.ce62ac76.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};N();var g=(l,n)=>{const a=l.__vccOpts||l;for(const[d,o]of n)a[d]=o;return a};const B={};function E(l,n){const a=I("router-view");return c(),M(a)}var F=g(B,[["render",E]]);const _=U({isLoggedIn:!1,username:null}),P=f([{username:"Mohan",password:"Mohan"},{username:"user_2",password:"Mohan"}]);const $={class:"container"},K=x({setup(l){const n=f(""),a=f(""),d=()=>{P.value.filter(s=>s.username===n.value&&s.password===a.value).length>0?(_.username=n.value,_.isLoggedIn=!0,C.push("/tasks")):n.value="Invalid Credentials"};return(o,s)=>(c(),u("div",$,[h(t("input",{class:"input",type:"text",placeholder:"Username","onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r)},null,512),[[b,n.value]]),h(t("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=r=>a.value=r)},null,512),[[b,a.value]]),t("button",{class:"button",onClick:d},"Log In")]))}});var j=g(K,[["__scopeId","data-v-eb68e97c"]]);const w=f([{by:"Mohan",date:"20-04-2022",done:!1,title:"Update NodeJS",for:"user_2"},{by:"user_2",date:"20-04-2022",done:!1,title:"Update Vue",for:"Mohan"},{by:"user_2",date:"20-04-2022",done:!0,title:"Do something",for:"Mohan"}]);const p=l=>(O("data-v-0d7669cd"),l=l(),S(),l),q=p(()=>t("h1",null,"T A S K S",-1)),z=p(()=>t("div",{class:"card add"},"Add",-1)),H={class:"card tabs"},J=["onClick"],R={class:"tasks"},W={class:"half"},G=p(()=>t("div",{class:"heading"},"TODO",-1)),Q={class:"taskList"},X={class:"card task"},Y={class:"title"},Z={class:"for"},ee={class:"date"},se={class:"field"},te=p(()=>t("label",null,"Done",-1)),oe=["onUpdate:modelValue"],ne={class:"half"},ae=p(()=>t("div",{class:"heading"},"DONE",-1)),re={class:"taskList"},le={class:"card task"},ie={class:"title"},de={class:"for"},ce={class:"date"},ue={class:"field"},_e=p(()=>t("label",null,"Done",-1)),pe=["onUpdate:modelValue"],fe=x({setup(l){const n=["Assigned","Created","All"],a=f(n[0]),d=s=>s===a.value?"tab active":"tab",o=(s,r)=>a.value==n[0]?r?s.filter(e=>e.for===_.username&&e.done):s.filter(e=>e.for===_.username&&!e.done):a.value==n[1]?r?s.filter(e=>e.by===_.username&&e.done):s.filter(e=>e.by===_.username&&!e.done):r?s.filter(e=>e.done):s.filter(e=>!e.done);return(s,r)=>(c(),u(v,null,[q,z,t("div",H,[(c(),u(v,null,y(n,e=>t("div",{class:V(d(e)),onClick:()=>a.value=e},i(e),11,J)),64))]),t("div",R,[t("div",W,[G,t("div",Q,[(c(!0),u(v,null,y(o(L(w),!1),e=>(c(),u("div",X,[t("div",Y,i(e.title),1),t("div",Z,i(e.for),1),t("div",ee,i(e.date)+" \u2022 "+i(e.by),1),t("div",se,[te,h(t("input",{type:"checkbox","onUpdate:modelValue":m=>e.done=m},null,8,oe),[[k,e.done]])])]))),256))])]),t("div",ne,[ae,t("div",re,[(c(!0),u(v,null,y(o(L(w),!0),e=>(c(),u("div",le,[t("div",ie,i(e.title),1),t("div",de,i(e.for),1),t("div",ce,i(e.date)+" \u2022 "+i(e.by),1),t("div",ue,[_e,h(t("input",{type:"checkbox","onUpdate:modelValue":m=>e.done=m},null,8,pe),[[k,e.done]])])]))),256))])])])],64))}});var ve=g(fe,[["__scopeId","data-v-0d7669cd"]]);const he=[{path:"/",component:j},{path:"/tasks",component:ve}],C=A({history:D(),routes:he});T(F).use(C).mount("#app");
