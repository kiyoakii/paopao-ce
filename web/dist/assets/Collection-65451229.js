import{_ as b}from"./post-item.vue_vue_type_style_index_0_lang-7dc04fd1.js";import{_ as z}from"./post-skeleton-4ffb4aa4.js";import{_ as B}from"./main-nav.vue_vue_type_style_index_0_lang-debfbf0a.js";import{d as P,r as n,a2 as R,Y as o,a4 as a,a5 as i,ai as $,bn as M,W as e,a3 as N,a7 as m,ab as S,ac as V,$ as q,ak as E,a6 as F,al as I}from"./index-105798e1.js";import{_ as L}from"./List-c9cbcb68.js";import{_ as T}from"./Pagination-e3eb443a.js";import{a as U,_ as W}from"./Skeleton-446e48ae.js";import"./content-a6dc32fa.js";import"./formatTime-9e336d4a.js";import"./Thing-56e8af29.js";const Y={key:0,class:"pagination-wrap"},j={key:0,class:"skeleton-wrap"},A={key:1},D={key:0,class:"empty-wrap"},G=P({__name:"Collection",setup(H){const d=q(),g=$();E();const s=n(!1),_=n([]),l=n(+g.query.p||1),c=n(20),p=n(0),r=()=>{s.value=!0,M({page:l.value,page_size:c.value}).then(t=>{s.value=!1,_.value=t.list,p.value=Math.ceil(t.pager.total_rows/c.value),window.scrollTo(0,0)}).catch(t=>{s.value=!1})},v=t=>{l.value=t,r()};return R(()=>{r()}),(t,J)=>{const f=B,h=T,k=z,y=U,w=b,C=W,x=L;return e(),o("div",null,[a(f,{title:"收藏"}),a(x,{class:"main-content-wrap",bordered:""},{footer:i(()=>[p.value>1?(e(),o("div",Y,[a(h,{page:l.value,"onUpdate:page":v,"page-slot":N(d).state.collapsedRight?5:8,"page-count":p.value},null,8,["page","page-slot","page-count"])])):m("",!0)]),default:i(()=>[s.value?(e(),o("div",j,[a(k,{num:c.value},null,8,["num"])])):(e(),o("div",A,[_.value.length===0?(e(),o("div",D,[a(y,{size:"large",description:"暂无数据"})])):m("",!0),(e(!0),o(S,null,V(_.value,u=>(e(),F(C,{key:u.id},{default:i(()=>[a(w,{post:u},null,8,["post"])]),_:2},1024))),128))]))]),_:1})])}}});const se=I(G,[["__scopeId","data-v-69c01585"]]);export{se as default};