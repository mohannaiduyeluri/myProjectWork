import{r as P,o as v,c as J,d as V,a as h,b as f,e,t as b,p as U,f as F,g as W,w as D,v as L,F as N,u as S,n as I,h as j,i as K,j as z,k as q,l as Q,m as R}from"./vendor.e3b9678f.js";const G=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};G();var A=(s,a)=>{const i=s.__vccOpts||s;for(const[d,t]of a)i[d]=t;return i};const X={};function Z(s,a){const i=P("router-view");return v(),J(i)}var ee=A(X,[["render",Z]]);const E=s=>(U("data-v-412ae63c"),s=s(),F(),s),te={class:"frm"},se=E(()=>e("h1",{class:"title"},"Contact Us",-1)),ae=E(()=>e("input",{class:"input",type:"text",placeholder:"Name"},null,-1)),oe=E(()=>e("input",{class:"input",type:"email",placeholder:"Email"},null,-1)),ne=E(()=>e("textarea",{class:"textarea",type:"text",placeholder:"Message"},null,-1)),le=V({setup(s){const a=h("Submit"),i=()=>{a.value="Message Sent!",setTimeout(()=>{T.push("./tasks")},500)};return(d,t)=>(v(),f("div",te,[se,ae,oe,ne,e("button",{class:"button is-success",onClick:i},b(a.value),1)]))}});var re=A(le,[["__scopeId","data-v-412ae63c"]]),ie="/assets/todo.ae81ffdb.svg";const m=W({isLoggedIn:!1,username:null}),de=()=>{m.isLoggedIn=!1,m.username=null},Y=h([{username:"Mohan",password:"Mohan",avatar:"https://randomuser.me/api/portraits/men/1.jpg"},{username:"user_2",password:"Mohan",avatar:"https://randomuser.me/api/portraits/men/2.jpg"}]);const O=s=>(U("data-v-34d55db9"),s=s(),F(),s),ce=O(()=>e("img",{class:"ill",src:ie,width:"800"},null,-1)),ue={class:"container"},_e=O(()=>e("h1",{class:"title"},"To Do App",-1)),pe=O(()=>e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-right-to-bracket"})],-1)),ve=O(()=>e("span",null,"Log In",-1)),he=[pe,ve],me=V({setup(s){const a=h(""),i=h(""),d=h(""),t=()=>{if(d.value="",!(Y.value.filter(n=>n.username===a.value&&n.password===i.value).length>0)){d.value="Invalid Credentials";return}m.username=a.value,m.isLoggedIn=!0,T.push("/tasks")};return(o,n)=>(v(),f(N,null,[ce,e("div",ue,[_e,D(e("input",{class:"input",type:"text",placeholder:"Username","onUpdate:modelValue":n[0]||(n[0]=p=>a.value=p)},null,512),[[L,a.value]]),D(e("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":n[1]||(n[1]=p=>i.value=p)},null,512),[[L,i.value]]),e("button",{class:"button",onClick:t},he),e("p",null,b(d.value),1)])],64))}});var fe=A(me,[["__scopeId","data-v-34d55db9"]]);const C=h([{by:"Mohan",date:"04-22-2022",done:!1,title:"Update NodeJS",for:"user_2"},{by:"user_2",date:"04-28-2022",done:!1,title:"Update Vue",for:"Mohan"},{by:"user_2",date:"04-24-2022",done:!0,title:"Integrate jQuery",for:"Mohan"},{by:"user_2",date:"04-24-2022",done:!0,title:"Make a demo",for:"Mohan"}]);const H=s=>(U("data-v-8a8d7b0c"),s=s(),F(),s),ge=H(()=>e("h1",{class:"title"},"T A S K S",-1)),be={class:"sessionContainer"},ye=["src"],$e=H(()=>e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-right-from-bracket"})],-1)),ke=H(()=>e("span",null,"Log Out",-1)),we=[$e,ke],Ce=V({setup(s){const a=()=>{de(),T.push("/")};return(i,d)=>{var t;return v(),f("nav",null,[ge,e("div",be,[e("img",{src:(t=S(Y).filter(o=>o.username===S(m).username)[0])==null?void 0:t.avatar},null,8,ye),e("p",null,b(S(m).username),1),e("button",{onClick:a,class:"button is-danger"},we)])])}}});var xe=A(Ce,[["__scopeId","data-v-8a8d7b0c"]]);var Me=["January","February","March","April","May","June","July","August","September","October","November","December"],_=new Date,w=_.getFullYear(),u=_.getMonth();const Ie={name:"App",methods:{dayClicked:()=>{console.log("Day clicked!")},setcalander:function(s){var M=document.getElementById("actualDay");M.innerHTML="";var p=document.getElementById("monthYear");p.innerHTML="",s==0?_=new Date:s==1?(_=new Date(_.setMonth(u-1)),w=_.getFullYear(),u=_.getMonth(),u=_.getMonth()):s==2&&(_=new Date(_.setMonth(u+1)),w=_.getFullYear(),u=_.getMonth(),u=_.getMonth());var a=Me[u],i=new Date(w,u,1).getDay(),d=new Date(w,u+1,0).getDate(),t="<tr style='height: 80px;'>",o=0,n=1,p=document.getElementById("monthYear");p.innerHTML+="<span style='padding-top: 5px; padding-left: 3px; font-size: 20px;'>"+a+"&nbsp"+w+"</span>";var y=u+1;y<10&&(y="0"+y);for(var B=0;B<i;B++)t+="<td class='clouredTd'></td>",o++;for(n=1;n<=d;n++){var $=w;u<9?$+="-0"+(u+1):$+="-"+(u+1),n<10?$+="-0"+n:$+="-"+n,o!=0&&o%7==0&&(t+=" </tr>",t+=" <tr style='height: 80px;'>"),t+="<td class='clouredTd"+$+"' tdVal="+$+"  id='tabTd"+n+"' align='center'><div style='float:left;'>"+n+"</div>";var x=y+"-"+n+"-"+w;for(let k=0;k<C.value.length;k++)C.value[k].date==x&&(C.value[k].done==!0?t+="<div style='float:right;font-size: 12px;background-color:green;'><i style='color:white'>"+C.value[k].title+"</i></div>":t+="<div style='float:right;font-size: 12px;background-color:red;'><i style='color:white'>"+C.value[k].title+"</i></div>");t+="</td>",o++}for(;o%7!=0;)t+="<td> </td>",o++;t.endsWith("</tr>")||(t+=" </tr>");var M=document.getElementById("actualDay");M.innerHTML+=t}},mounted(){this.setcalander(0)}},Te={class:"App"},Ae={class:"col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 calendar",style:{padding:"0",border:"1px solid #000000"}},De={class:"table table-responsive table-bordered",style:{"margin-bottom":"1px"}},Le={class:"tb-head"},Se={colspan:"7"},Be={class:"row"},Ne={class:"col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12"},Ve=e("i",{class:"fa fa-arrow-left"},null,-1),Ue=[Ve],Fe=e("span",{class:"whiteCr text",id:"monthYear",style:{"padding-left":"45%"}},null,-1),Ee={style:{float:"right"}},Oe=e("i",{class:"fa fa-arrow-right"},null,-1),Ye=[Oe],He=e("tr",{class:"blueBr"},[e("td",{align:"center",class:"blackBg text",style:{width:"220px"}},"Sun"),e("td",{align:"center",class:"blackBg text",style:{width:"14%"}},"Mon"),e("td",{align:"center",class:"blackBg text",style:{width:"14%"}},"Tue"),e("td",{align:"center",class:"blackBg text",style:{width:"14%"}},"Wed"),e("td",{align:"center",class:"blackBg text",style:{width:"14%"}},"Thu"),e("td",{align:"center",class:"blackBg text",style:{width:"14%"}},"Fri"),e("td",{align:"center",class:"blackBg text",style:{width:"14%"}},"Sat")],-1),je=e("tbody",{id:"actualDay",style:{"background-color":"white"}},null,-1),ze=e("br",null,null,-1),Je=e("br",null,null,-1),Pe=e("br",null,null,-1);function We(s,a,i,d,t,o){return v(),f("div",Te,[e("div",Ae,[e("table",De,[e("thead",null,[e("tr",Le,[e("td",Se,[e("div",Be,[e("div",Ne,[e("span",null,[e("a",{onClick:a[0]||(a[0]=n=>o.setcalander(1))},Ue)]),Fe,e("span",Ee,[e("a",{onClick:a[1]||(a[1]=n=>o.setcalander(2))},Ye)])])])])]),He]),je])]),ze,Je,Pe])}var Ke=A(Ie,[["render",We]]);const g=s=>(U("data-v-1c9ef336"),s=s(),F(),s),qe=g(()=>e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-plus"})],-1)),Qe=g(()=>e("span",null,"Add",-1)),Re=[qe,Qe],Ge={class:"card tabs"},Xe=g(()=>e("br",null,null,-1)),Ze=g(()=>e("br",null,null,-1)),et=g(()=>e("br",null,null,-1)),tt=g(()=>e("br",null,null,-1)),st={class:"modal-content"},at={class:"card"},ot=g(()=>e("h1",null,"Add Task",-1)),nt={class:"dropdown is-hoverable"},lt={class:"dropdown-trigger"},rt={class:"field"},it={class:"control"},dt={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},ct={class:"dropdown-content"},ut=["onClick"],_t={key:0,class:"tasks"},pt={class:"tskLst"},vt={class:"title"},ht={class:"data"},mt=g(()=>e("div",{class:"c"},"for",-1)),ft={class:"data"},gt=g(()=>e("div",{class:"c"},"due",-1)),bt={class:"data"},yt=g(()=>e("div",{class:"c"},"by",-1)),$t=["onClick"],kt=V({setup(s){const a=h("Assigned"),i=c=>c===a.value?"tab active":"tab";m.isLoggedIn||T.push("/");const d=c=>(c=c.sort((l,r)=>l.done?1:-1),a.value=="Assigned"?c.filter(l=>l.for===m.username):a.value=="Created"?c.filter(l=>l.by===m.username):c),t=h(!1),o=c=>c?"modal is-active":"modal",n=h(""),p=h(""),y=h(""),B=()=>{!m.username||(C.value.push({by:m.username,date:y.value,done:!1,for:p.value,title:n.value}),t.value=!1)},$=c=>c.done?"button is-succes is-small":"button is-danger is-small",x=c=>a.value=c,M=()=>a.value!=="Calendar",k=()=>{T.push("/contact")};return(c,l)=>(v(),f(N,null,[e("button",{class:"button add",onClick:l[0]||(l[0]=()=>t.value=!0)},Re),e("div",Ge,[Xe,Ze,et,tt,e("div",{class:I(i("Assigned")),onClick:l[1]||(l[1]=r=>x("Assigned"))},"Assigned",2),e("div",{class:I(i("Created")),onClick:l[2]||(l[2]=r=>x("Created"))},"Created",2),e("div",{class:I(i("All")),onClick:l[3]||(l[3]=r=>x("All"))},"All",2),e("div",{class:I(i("Calendar")),onClick:l[4]||(l[4]=r=>x("Calendar"))},"Calender",2),e("div",{class:"tab",onClick:k},"Contact Us")]),e("div",{class:I(o(t.value))},[e("div",{class:"modal-background",onClick:l[5]||(l[5]=()=>t.value=!1)}),e("div",st,[e("div",at,[ot,D(e("input",{class:"input is-normal",type:"text",placeholder:"Title","onUpdate:modelValue":l[6]||(l[6]=r=>n.value=r)},null,512),[[L,n.value]]),e("div",nt,[e("div",lt,[e("div",rt,[e("div",it,[D(e("input",{class:"input is-normal",type:"search	",placeholder:"For","onUpdate:modelValue":l[7]||(l[7]=r=>p.value=r)},null,512),[[L,p.value]])])])]),e("div",dt,[e("div",ct,[(v(!0),f(N,null,j(S(Y),r=>(v(),f("a",{href:"#",class:"dropdown-item",onClick:()=>p.value=r.username},b(r.username),9,ut))),256))])])]),D(e("input",{class:"input is-normal",type:"date",placeholder:"Date","onUpdate:modelValue":l[8]||(l[8]=r=>y.value=r)},null,512),[[L,y.value]]),e("button",{class:"button is-normal",onClick:B},"Add")])]),e("button",{class:"modal-close is-large","aria-label":"close",onClick:l[9]||(l[9]=()=>t.value=!1)})],2),K(xe),M()?(v(),f("div",_t,[e("div",pt,[(v(!0),f(N,null,j(d(S(C)),r=>(v(),f("div",{class:"card task",key:r.title},[e("div",vt,b(r.title),1),e("div",ht,[mt,e("span",null,b(r.for),1)]),e("div",ft,[gt,e("span",null,b(r.date),1)]),e("div",bt,[yt,e("span",null,b(r.by),1)]),e("button",{class:I($(r)),onClick:()=>r.done=!r.done},b(r.done?"\u2718":"\u2714"),11,$t)]))),128))])])):z("",!0),M()?z("",!0):(v(),J(Ke,{key:1,class:"calendar"}))],64))}});var wt=A(kt,[["__scopeId","data-v-1c9ef336"]]);const Ct=[{path:"/",component:fe},{path:"/tasks",component:wt},{path:"/contact",component:re}],T=q({history:Q(),routes:Ct});R(ee).use(T).mount("#app");
