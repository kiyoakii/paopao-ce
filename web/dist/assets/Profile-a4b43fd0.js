import{_ as ve}from"./mobile-post-item.vue_vue_type_style_index_0_lang-12577f06.js";import{_ as _e}from"./post-item.vue_vue_type_style_index_0_lang-870ff78f.js";import{_ as me}from"./post-skeleton-1c687629.js";import{_ as pe}from"./main-nav.vue_vue_type_style_index_0_lang-d5384489.js";import{d as fe,r as s,j as de,w as ge,a4 as he,c as f,V as i,_ as u,Q as k,a2 as p,O as y,o as r,a as c,M as d,e as C,a3 as A,F as J,a5 as K}from"./@vue-7e1ab0af.js";import{u as ke}from"./vuex-f1ee712f.js";import{b as we}from"./vue-router-edf90322.js";import{B as b,_ as ye}from"./index-8c4266fc.js";import{b as be}from"./formatTime-4210fcd1.js";import{W as Pe}from"./v3-infinite-loading-0611cb6c.js";import{F as Ie,a as Te,o as Me,M as ze,f as qe,g as xe,H as Ce,k as Le,G as $e}from"./naive-ui-df120204.js";import"./content-3263433b.js";import"./@vicons-b98681e0.js";import"./paopao-video-player-66a1a537.js";import"./copy-to-clipboard-4ef7d3eb.js";import"./@babel-725317a4.js";import"./toggle-selection-93f4ad84.js";import"./vooks-e23078ea.js";import"./evtd-b614532e.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-2fc92f18.js";import"./@css-render-16be7445.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./moment-2ab8298d.js";const Be={class:"profile-baseinfo"},Se={class:"avatar"},Ve={class:"base-info"},Ne={class:"username"},De={class:"userinfo"},Fe={class:"info-item"},Ue={class:"info-item"},je={class:"userinfo"},He={class:"info-item"},Ee={class:"info-item"},Ge={key:0,class:"skeleton-wrap"},Oe={key:1},Qe={key:0,class:"empty-wrap"},Re={key:1},We={key:2},Ae={class:"load-more-wrap"},Je={class:"load-more-spinner"},Ke=fe({__name:"Profile",setup(Xe){const o=ke(),g=we(),n=s(!1),_=s(!1),a=s([]),L=s([]),$=s([]),B=s([]),S=s([]),V=s([]),P=s("post"),N=s(+g.query.p||1),D=s(1),F=s(1),U=s(1),j=s(1),t=s(+g.query.p||1),v=s(20),l=s(0),H=s(0),E=s(0),G=s(0),O=s(0),Q=s(0),I=()=>{switch(P.value){case"post":T();break;case"comment":M();break;case"highlight":z();break;case"media":q();break;case"star":x();break}},T=()=>{n.value=!0,b({username:o.state.userInfo.username,style:"post",page:t.value,page_size:v.value}).then(e=>{n.value=!1,e.list.length===0&&(_.value=!0),t.value>1?a.value=a.value.concat(e.list):(a.value=e.list||[],window.scrollTo(0,0)),l.value=Math.ceil(e.pager.total_rows/v.value),L.value=a.value,H.value=l.value}).catch(e=>{a.value=[],t.value>1&&t.value--,n.value=!1})},M=()=>{n.value=!0,b({username:o.state.userInfo.username,style:"comment",page:t.value,page_size:v.value}).then(e=>{n.value=!1,e.list.length===0&&(_.value=!0),t.value>1?a.value=a.value.concat(e.list):(a.value=e.list||[],window.scrollTo(0,0)),l.value=Math.ceil(e.pager.total_rows/v.value),$.value=a.value,E.value=l.value}).catch(e=>{a.value=[],t.value>1&&t.value--,n.value=!1})},z=()=>{n.value=!0,b({username:o.state.userInfo.username,style:"highlight",page:t.value,page_size:v.value}).then(e=>{n.value=!1,e.list.length===0&&(_.value=!0),t.value>1?a.value=a.value.concat(e.list):(a.value=e.list||[],window.scrollTo(0,0)),l.value=Math.ceil(e.pager.total_rows/v.value),B.value=a.value,G.value=l.value}).catch(e=>{a.value=[],t.value>1&&t.value--,n.value=!1})},q=()=>{n.value=!0,b({username:o.state.userInfo.username,style:"media",page:t.value,page_size:v.value}).then(e=>{n.value=!1,e.list.length===0&&(_.value=!0),t.value>1?a.value=a.value.concat(e.list):(a.value=e.list||[],window.scrollTo(0,0)),l.value=Math.ceil(e.pager.total_rows/v.value),S.value=a.value,O.value=l.value}).catch(e=>{a.value=[],t.value>1&&t.value--,n.value=!1})},x=()=>{n.value=!0,b({username:o.state.userInfo.username,style:"star",page:t.value,page_size:v.value}).then(e=>{n.value=!1,e.list.length===0&&(_.value=!0),t.value>1?a.value=a.value.concat(e.list):(a.value=e.list||[],window.scrollTo(0,0)),l.value=Math.ceil(e.pager.total_rows/v.value),V.value=a.value,Q.value=l.value}).catch(e=>{a.value=[],t.value>1&&t.value--,n.value=!1})},X=e=>{switch(P.value=e,P.value){case"post":a.value=L.value,t.value=N.value,l.value=H.value,T();break;case"comment":a.value=$.value,t.value=D.value,l.value=E.value,M();break;case"highlight":a.value=B.value,t.value=F.value,l.value=G.value,z();break;case"media":a.value=S.value,t.value=U.value,l.value=O.value,q();break;case"star":a.value=V.value,t.value=j.value,l.value=Q.value,x();break}},Y=()=>{switch(P.value){case"post":N.value=t.value,T();break;case"comment":D.value=t.value,M();break;case"highlight":F.value=t.value,z();break;case"media":U.value=t.value,q();break;case"star":j.value=t.value,x();break}},Z=()=>{t.value<l.value||l.value==0?(_.value=!1,t.value++,Y()):_.value=!0};return de(()=>{I()}),ge(()=>({path:g.path,query:g.query,refresh:o.state.refresh}),(e,m)=>{if(e.refresh!==m.refresh){t.value=+g.query.p||1,setTimeout(()=>{I()},0);return}m.path!=="/post"&&e.path==="/profile"&&(t.value=+g.query.p||1,setTimeout(()=>{I()},0))}),(e,m)=>{const ee=pe,ae=Me,te=ze,R=he("router-link"),w=qe,se=xe,oe=me,le=Ce,ne=_e,W=$e,ue=ve,ie=Ie,re=Le,ce=Te;return r(),f("div",null,[i(ee,{title:"主页"}),u(o).state.userInfo.id>0?(r(),k(ie,{key:0,class:"main-content-wrap profile-wrap",bordered:""},{default:p(()=>[c("div",Be,[c("div",Se,[i(ae,{size:72,src:u(o).state.userInfo.avatar},null,8,["src"])]),c("div",Ve,[c("div",Ne,[c("strong",null,d(u(o).state.userInfo.nickname),1),c("span",null," @"+d(u(o).state.userInfo.username),1),u(o).state.userInfo.is_admin?(r(),k(te,{key:0,class:"top-tag",type:"error",size:"small",round:""},{default:p(()=>[C(" 管理员 ")]),_:1})):y("",!0)]),c("div",De,[c("span",Fe,"UID. "+d(u(o).state.userInfo.id),1),c("span",Ue,d(u(be)(u(o).state.userInfo.created_on))+" 加入",1)]),c("div",je,[c("span",He,[i(R,{onClick:m[0]||(m[0]=A(()=>{},["stop"])),class:"following-link",to:{name:"following",query:{s:u(o).state.userInfo.username,n:u(o).state.userInfo.nickname,t:"follows"}}},{default:p(()=>[C(" 关注  "+d(u(o).state.userInfo.follows),1)]),_:1},8,["to"])]),c("span",Ee,[i(R,{onClick:m[1]||(m[1]=A(()=>{},["stop"])),class:"following-link",to:{name:"following",query:{s:u(o).state.userInfo.username,n:u(o).state.userInfo.nickname,t:"followings"}}},{default:p(()=>[C(" 粉丝  "+d(u(o).state.userInfo.followings),1)]),_:1},8,["to"])])])])]),i(se,{class:"profile-tabs-wrap",type:"line",animated:"","onUpdate:value":X},{default:p(()=>[i(w,{name:"post",tab:"泡泡"}),i(w,{name:"comment",tab:"评论"}),i(w,{name:"highlight",tab:"亮点"}),i(w,{name:"media",tab:"图文"}),i(w,{name:"star",tab:"喜欢"})]),_:1}),n.value&&a.value.length===0?(r(),f("div",Ge,[i(oe,{num:v.value},null,8,["num"])])):(r(),f("div",Oe,[a.value.length===0?(r(),f("div",Qe,[i(le,{size:"large",description:"暂无数据"})])):y("",!0),u(o).state.desktopModelShow?(r(),f("div",Re,[(r(!0),f(J,null,K(a.value,h=>(r(),k(W,{key:h.id},{default:p(()=>[i(ne,{post:h},null,8,["post"])]),_:2},1024))),128))])):(r(),f("div",We,[(r(!0),f(J,null,K(a.value,h=>(r(),k(W,{key:h.id},{default:p(()=>[i(ue,{post:h},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1})):y("",!0),l.value>0?(r(),k(ce,{key:1,justify:"center"},{default:p(()=>[i(u(Pe),{class:"load-more",slots:{complete:"没有更多泡泡了",error:"加载出错"},onInfinite:m[2]||(m[2]=h=>Z())},{spinner:p(()=>[c("div",Ae,[_.value?y("",!0):(r(),k(re,{key:0,size:14})),c("span",Je,d(_.value?"没有更多泡泡了":"加载更多"),1)])]),_:1})]),_:1})):y("",!0)])}}});const La=ye(Ke,[["__scopeId","data-v-0542f078"]]);export{La as default};
