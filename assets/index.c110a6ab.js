import{r as N,o as c,c as B,a as F,b as v,d as A,e as p,w as m,v as y,f as e,F as g,g as k,u as C,n as S,t as d,p as E,h as P,i as T,j as $,k as K,l as j}from"./vendor.ce62ac76.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const _ of t.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&f(_)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}};q();var V=(u,n)=>{const a=u.__vccOpts||u;for(const[f,o]of n)a[f]=o;return a};const z={};function H(u,n){const a=N("router-view");return c(),B(a)}var J=V(z,[["render",H]]);const r=F({isLoggedIn:!1,username:null}),R=()=>{r.isLoggedIn=!1,r.username=null},M=v([{username:"Mohan",password:"Mohan"},{username:"user_2",password:"Mohan"}]);const W={class:"container"},G=A({setup(u){const n=v(""),a=v(""),f=()=>{M.value.filter(t=>t.username===n.value&&t.password===a.value).length>0?(r.username=n.value,r.isLoggedIn=!0,w.push("/tasks")):n.value="Invalid Credentials"};return(o,t)=>(c(),p("div",W,[m(e("input",{class:"input",type:"text",placeholder:"Username","onUpdate:modelValue":t[0]||(t[0]=_=>n.value=_)},null,512),[[y,n.value]]),m(e("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=_=>a.value=_)},null,512),[[y,a.value]]),e("button",{class:"button",onClick:f},"Log In")]))}});var Q=V(G,[["__scopeId","data-v-eb68e97c"]]);const U=v([{by:"Mohan",date:"20-04-2022",done:!1,title:"Update NodeJS",for:"user_2"},{by:"user_2",date:"20-04-2022",done:!1,title:"Update Vue",for:"Mohan"},{by:"user_2",date:"20-04-2022",done:!0,title:"Do something",for:"Mohan"}]);const h=u=>(E("data-v-07c884ff"),u=u(),P(),u),X=h(()=>e("h1",null,"T A S K S",-1)),Y={class:"card tabs"},Z=["onClick"],ee={class:"modal-content"},se={class:"card"},te=h(()=>e("h1",null,"Add Task",-1)),oe={class:"dropdown is-hoverable"},ne={class:"dropdown-trigger"},le={class:"field"},ae={class:"control"},re={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},ie={class:"dropdown-content"},de=["onClick"],ue={class:"sessionContainer"},ce={class:"tasks"},_e={class:"half"},pe=h(()=>e("div",{class:"heading"},"TODO",-1)),ve={class:"taskList"},fe={class:"title"},me={class:"for"},he={class:"date"},ge={class:"field"},ye=h(()=>e("label",null,"Done",-1)),be=["onUpdate:modelValue"],ke={class:"half"},Ce=h(()=>e("div",{class:"heading"},"DONE",-1)),we={class:"taskList"},Le={class:"title"},xe={class:"for"},Ie={class:"date"},Ue={class:"field"},Ve=h(()=>e("label",null,"Done",-1)),Se=["onUpdate:modelValue"],Te=A({setup(u){const n=["Assigned","Created","All"],a=v(n[0]),f=i=>i===a.value?"tab active":"tab";r.isLoggedIn||w.push("/");const o=(i,l)=>a.value==n[0]?l?i.filter(s=>s.for===r.username&&s.done):i.filter(s=>s.for===r.username&&!s.done):a.value==n[1]?l?i.filter(s=>s.by===r.username&&s.done):i.filter(s=>s.by===r.username&&!s.done):l?i.filter(s=>s.done):i.filter(s=>!s.done),t=v(!1),_=i=>i?"modal is-active":"modal",L=v(""),b=v(""),x=v(""),O=()=>{!r.username||(U.value.push({by:r.username,date:x.value,done:!1,for:b.value,title:L.value}),t.value=!1)},D=()=>{R(),w.push("/")};return(i,l)=>(c(),p(g,null,[X,e("div",{class:"card add",onClick:l[0]||(l[0]=()=>t.value=!0)},"Add"),e("div",Y,[(c(),p(g,null,k(n,s=>e("div",{class:S(f(s)),onClick:()=>a.value=s},d(s),11,Z)),64))]),e("div",{class:S(_(t.value))},[e("div",{class:"modal-background",onClick:l[1]||(l[1]=()=>t.value=!1)}),e("div",ee,[e("div",se,[te,m(e("input",{class:"input is-normal",type:"text",placeholder:"Title","onUpdate:modelValue":l[2]||(l[2]=s=>L.value=s)},null,512),[[y,L.value]]),e("div",oe,[e("div",ne,[e("div",le,[e("div",ae,[m(e("input",{class:"input is-normal",type:"search	",placeholder:"For","onUpdate:modelValue":l[3]||(l[3]=s=>b.value=s)},null,512),[[y,b.value]])])])]),e("div",re,[e("div",ie,[(c(!0),p(g,null,k(C(M),s=>(c(),p("a",{href:"#",class:"dropdown-item",onClick:()=>b.value=s.username},d(s.username),9,de))),256))])])]),m(e("input",{class:"input is-normal",type:"date",placeholder:"Date","onUpdate:modelValue":l[4]||(l[4]=s=>x.value=s)},null,512),[[y,x.value]]),e("button",{class:"button is-normal",onClick:O},"Add")])]),e("button",{class:"modal-close is-large","aria-label":"close",onClick:l[5]||(l[5]=()=>t.value=!1)})],2),e("nav",null,[e("div",ue,[e("p",null,d(C(r).username),1),e("button",{onClick:D,class:"is-normal is-outlined"},"Log Out")])]),e("div",ce,[e("div",_e,[pe,e("div",ve,[(c(!0),p(g,null,k(o(C(U),!1),s=>(c(),p("div",{class:"card task",key:s.title},[e("div",fe,d(s.title),1),e("div",me,d(s.for),1),e("div",he,d(s.date)+" \u2022 "+d(s.by),1),e("div",ge,[ye,m(e("input",{type:"checkbox","onUpdate:modelValue":I=>s.done=I},null,8,be),[[T,s.done]])])]))),128))])]),e("div",ke,[Ce,e("div",we,[(c(!0),p(g,null,k(o(C(U),!0),s=>(c(),p("div",{class:"card task",key:s.title},[e("div",Le,d(s.title),1),e("div",xe,d(s.for),1),e("div",Ie,d(s.date)+" \u2022 "+d(s.by),1),e("div",Ue,[Ve,m(e("input",{type:"checkbox","onUpdate:modelValue":I=>s.done=I},null,8,Se),[[T,s.done]])])]))),128))])])])],64))}});var Ae=V(Te,[["__scopeId","data-v-07c884ff"]]);const Me=[{path:"/",component:Q},{path:"/tasks",component:Ae}],w=$({history:K(),routes:Me});j(J).use(w).mount("#app");
