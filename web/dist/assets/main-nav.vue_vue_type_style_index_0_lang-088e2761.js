import{a3 as B}from"./index-4afa107a.js";import{u as E}from"./vuex-44de225f.js";import{u as S}from"./vue-router-e5a2430e.js";import{j as z}from"./vooks-6d99783e.js";import{Y as C,Z as N,_ as P,$ as D}from"./@vicons-9939c40b.js";import{a3 as R,a4 as x,j as H,e as I,a5 as V,h as j}from"./naive-ui-d8de3dda.js";import{d as q,H as h,b as $,e as a,f,bf as o,k as e,w as t,Y as c,j as F,q as _,A as L,x as U,F as Y}from"./@vue-a481fc63.js";const Z={key:0},G={class:"navbar"},oe=q({__name:"main-nav",props:{title:{default:""},back:{type:Boolean,default:!1},theme:{type:Boolean,default:!0}},setup(g){const i=g,n=E(),m=S(),l=h(!1),k=h("left"),u=s=>{s?(localStorage.setItem("PAOPAO_THEME","dark"),n.commit("triggerTheme","dark")):(localStorage.setItem("PAOPAO_THEME","light"),n.commit("triggerTheme","light"))},w=()=>{window.history.length<=1?m.push({path:"/"}):m.go(-1)},v=()=>{l.value=!0};return $(()=>{localStorage.getItem("PAOPAO_THEME")||u(z()==="dark")}),(s,d)=>{const b=B,y=R,O=x,r=H,p=I,M=V,T=j;return a(),f(Y,null,[o(n).state.drawerModelShow?(a(),f("div",Z,[e(O,{show:l.value,"onUpdate:show":d[0]||(d[0]=A=>l.value=A),width:212,placement:k.value,resizable:""},{default:t(()=>[e(y,null,{default:t(()=>[e(b)]),_:1})]),_:1},8,["show","placement"])])):c("",!0),e(T,{size:"small",bordered:!0,class:"nav-title-card"},{header:t(()=>[F("div",G,[o(n).state.drawerModelShow&&!s.back?(a(),_(p,{key:0,class:"drawer-btn",onClick:v,quaternary:"",circle:"",size:"medium"},{icon:t(()=>[e(r,null,{default:t(()=>[e(o(C))]),_:1})]),_:1})):c("",!0),s.back?(a(),_(p,{key:1,class:"back-btn",onClick:w,quaternary:"",circle:"",size:"small"},{icon:t(()=>[e(r,null,{default:t(()=>[e(o(N))]),_:1})]),_:1})):c("",!0),L(" "+U(i.title)+" ",1),i.theme?(a(),_(M,{key:2,value:o(n).state.theme==="dark","onUpdate:value":u,size:"small",class:"theme-switch-wrap"},{"checked-icon":t(()=>[e(r,{component:o(P)},null,8,["component"])]),"unchecked-icon":t(()=>[e(r,{component:o(D)},null,8,["component"])]),_:1},8,["value"])):c("",!0)])]),_:1})],64)}}});export{oe as _};
