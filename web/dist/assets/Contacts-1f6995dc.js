import{u as N,b as P}from"./vue-router-b8e3382f.js";import{d as k,o as e,c as n,a as s,V as a,M as d,r as c,j as R,a1 as f,_ as S,O as h,F as y,a4 as U,Q as q}from"./@vue-e0e89260.js";import{o as x,F as D,G as Q,I as T,H as j}from"./naive-ui-62663ad7.js";import{_ as b,Q as E}from"./index-479e9ef6.js";import{_ as G}from"./post-skeleton-c0397381.js";import{_ as H}from"./main-nav.vue_vue_type_style_index_0_lang-db217db0.js";import{u as L}from"./vuex-473b3783.js";import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./evtd-b614532e.js";import"./@css-render-580d83ec.js";import"./vooks-a50491fd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./axios-4a70c6fc.js";import"./@vicons-0524c43e.js";/* empty css               */const O={class:"avatar"},A={class:"base-info"},J={class:"username"},K={class:"uid"},W=k({__name:"contact-item",props:{contact:{}},setup(C){const l=N(),u=t=>{l.push({name:"user",query:{s:t}})};return(t,o)=>{const _=x;return e(),n("div",{class:"contact-item",onClick:o[0]||(o[0]=r=>u(t.contact.username))},[s("div",O,[a(_,{size:"large",src:t.contact.avatar},null,8,["src"])]),s("div",A,[s("div",J,[s("strong",null,d(t.contact.nickname),1),s("span",null," @"+d(t.contact.username),1)]),s("div",K,"UID. "+d(t.contact.user_id),1)])])}}});const X=b(W,[["__scopeId","data-v-0f1bf4ae"]]),Y={key:0,class:"skeleton-wrap"},Z={key:1},tt={key:0,class:"empty-wrap"},et={key:0,class:"pagination-wrap"},ot=k({__name:"Contacts",setup(C){const l=L(),u=P(),t=c(!1),o=c([]),_=c(+u.query.p||1),r=c(20),m=c(0),w=i=>{_.value=i,v()};R(()=>{v()});const v=(i=!1)=>{o.value.length===0&&(t.value=!0),E({page:_.value,page_size:r.value}).then(p=>{t.value=!1,o.value=p.list,m.value=Math.ceil(p.pager.total_rows/r.value),i&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(p=>{t.value=!1})};return(i,p)=>{const $=H,I=G,z=T,B=X,V=j,F=D,M=Q;return e(),n(y,null,[s("div",null,[a($,{title:"好友"}),a(F,{class:"main-content-wrap",bordered:""},{default:f(()=>[t.value?(e(),n("div",Y,[a(I,{num:r.value},null,8,["num"])])):(e(),n("div",Z,[o.value.length===0?(e(),n("div",tt,[a(z,{size:"large",description:"暂无数据"})])):h("",!0),(e(!0),n(y,null,U(o.value,g=>(e(),q(V,{key:g.user_id},{default:f(()=>[a(B,{contact:g},null,8,["contact"])]),_:2},1024))),128))]))]),_:1})]),m.value>0?(e(),n("div",et,[a(M,{page:_.value,"onUpdate:page":w,"page-slot":S(l).state.collapsedRight?5:8,"page-count":m.value},null,8,["page","page-slot","page-count"])])):h("",!0)],64)}}});const zt=b(ot,[["__scopeId","data-v-3b2bf978"]]);export{zt as default};
