import{E as M,F as A,G as q,H as O,I as D,J as G,_ as H}from"./index-Ngk4ShPB.js";import{D as J}from"./@vicons-t7bPon9z.js";import{d as P,H as _,c as $,b as B,r as j,e as c,f as p,k as n,w as a,t as w,A as C,Z as u,v as k,bk as m,E as Z,ar as K,F as Q,x as R}from"./@vue-M2CzPUka.js";import{o as W,M as L,j as X,e as Y,P as x,O as ee,G as oe,f as te,g as ne,a as se,J as ae,k as ce}from"./naive-ui-CFtxauK_.js";import{_ as ie}from"./main-nav.vue_vue_type_style_index_0_lang-NlSSnAqR.js";import{u as le}from"./vuex-k9agayot.js";import"./vue-router-iNEl8q3a.js";import"./axios-zw96FDk0.js";import"./moment-jIwEdMgI.js";/* empty css               */import"./seemly-hKSMrbh9.js";import"./vueuc-5-iSHcg-.js";import"./evtd-9ZCiDXyn.js";import"./@css-render-nQ5vzMKz.js";import"./vooks-RlHpQsWY.js";import"./vdirs-gz97tqc5.js";import"./@juggle--NVrOerG.js";import"./css-render-Adblu2bf.js";import"./@emotion-vV6BesBt.js";import"./lodash-es-KEIJqYRD.js";import"./treemate-hmrDCADh.js";import"./async-validator-BHjhHa7C.js";import"./date-fns-E8ESfRGG.js";const _e={key:0,class:"tag-item"},pe={key:0,class:"tag-quote"},ue={key:1,class:"tag-quote tag-follow"},re={key:0,class:"options"},ge=P({__name:"tag-item",props:{tag:{},showAction:{type:Boolean},checkFollowing:{type:Boolean},checkPin:{type:Boolean}},setup(F){const l=_(!1),t=F,d=$(()=>t.tag.user?t.tag.user.avatar:M),r=$(()=>{let e=[];return t.tag.is_following===0?e.push({label:"关注",key:"follow"}):(t.tag.is_pin===0?e.push({label:"钉住",key:"pin"}):e.push({label:"取消钉住",key:"unpin"}),t.tag.is_top===0?e.push({label:"置顶",key:"stick"}):e.push({label:"取消置顶",key:"unstick"}),e.push({label:"取消关注",key:"unfollow"})),e}),i=e=>{switch(e){case"follow":D({topic_id:t.tag.id}).then(o=>{t.tag.is_following=1,window.$message.success("关注成功")}).catch(o=>{console.log(o)});break;case"unfollow":O({topic_id:t.tag.id}).then(o=>{t.tag.is_following=0,window.$message.success("取消关注")}).catch(o=>{console.log(o)});break;case"pin":q({topic_id:t.tag.id}).then(o=>{t.tag.is_pin=1,window.$message.success("钉住成功")}).catch(o=>{console.log(o)});break;case"unpin":q({topic_id:t.tag.id}).then(o=>{t.tag.is_pin=0,window.$message.success("取消钉住")}).catch(o=>{console.log(o)});break;case"stick":A({topic_id:t.tag.id}).then(o=>{t.tag.is_top=o.top_status,window.$message.success("置顶成功")}).catch(o=>{console.log(o)});break;case"unstick":A({topic_id:t.tag.id}).then(o=>{t.tag.is_top=o.top_status,window.$message.success("取消置顶")}).catch(o=>{console.log(o)});break}};return B(()=>{l.value=!1}),(e,o)=>{const v=j("router-link"),h=W,y=L,s=X,f=Y,b=x,g=ee;return!e.checkFollowing&&!e.checkPin||e.checkFollowing&&e.tag.is_following===1||e.checkPin&&e.tag.is_following===1&&e.tag.is_pin===1?(c(),p("div",_e,[n(g,null,{header:a(()=>[(c(),k(y,{type:"success",size:"large",round:"",key:e.tag.id},{avatar:a(()=>[n(h,{src:d.value},null,8,["src"])]),default:a(()=>[n(v,{class:"hash-link",to:{name:"home",query:{q:e.tag.tag,t:"tag"}}},{default:a(()=>[C(" #"+w(e.tag.tag),1)]),_:1},8,["to"]),e.showAction?u("",!0):(c(),p("span",pe,"("+w(e.tag.quote_num)+")",1)),e.showAction?(c(),p("span",ue,"("+w(e.tag.quote_num)+")",1)):u("",!0)]),_:1}))]),"header-extra":a(()=>[e.showAction?(c(),p("div",re,[n(b,{placement:"bottom-end",trigger:"click",size:"small",options:r.value,onSelect:i},{default:a(()=>[n(f,{type:"success",quaternary:"",circle:"",block:""},{icon:a(()=>[n(s,null,{default:a(()=>[n(m(J))]),_:1})]),_:1})]),_:1},8,["options"])])):u("",!0)]),_:1})])):u("",!0)}}}),me={key:0,class:"empty-wrap"},de=P({__name:"Topic",setup(F){const l=le(),t=_([]),d=_("hot"),r=_(!1),i=_(!1),e=_(!1),o=_(!1);Z(i,()=>{i.value||(window.$message.success("保存成功"),l.commit("refreshTopicFollow"))});const v=$({get:()=>{let s="编辑";return i.value&&(s="保存"),s},set:s=>{}}),h=()=>{r.value=!0,G({type:d.value,num:50}).then(s=>{t.value=s.topics,r.value=!1}).catch(s=>{t.value=[],console.log(s),r.value=!1})},y=s=>{d.value=s,e.value=s==="follow",o.value=s==="pin",h()};return B(()=>{h()}),(s,f)=>{const b=ie,g=te,V=L,E=ne,N=ge,S=se,U=ae,z=ce,I=oe;return c(),p("div",null,[n(b,{title:"话题"}),n(I,{class:"main-content-wrap tags-wrap",bordered:""},{default:a(()=>[n(E,{type:"line",animated:"","onUpdate:value":y},K({default:a(()=>[n(g,{name:"hot",tab:"热门"}),n(g,{name:"new",tab:"最新"}),m(l).state.userLogined?(c(),k(g,{key:0,name:"follow",tab:"关注"})):u("",!0),m(l).state.userLogined?(c(),k(g,{key:1,name:"pin",tab:"钉住"})):u("",!0)]),_:2},[m(l).state.userLogined?{name:"suffix",fn:a(()=>[n(V,{checked:i.value,"onUpdate:checked":f[0]||(f[0]=T=>i.value=T),checkable:""},{default:a(()=>[C(w(v.value),1)]),_:1},8,["checked"])]),key:"0"}:void 0]),1024),n(z,{show:r.value},{default:a(()=>[n(S,null,{default:a(()=>[(c(!0),p(Q,null,R(t.value,T=>(c(),k(N,{tag:T,showAction:m(l).state.userLogined&&i.value,checkFollowing:e.value,checkPin:o.value},null,8,["tag","showAction","checkFollowing","checkPin"]))),256))]),_:1}),t.value.length===0?(c(),p("div",me,[n(U,{size:"large",description:"暂无数据"})])):u("",!0)]),_:1},8,["show"])]),_:1})])}}}),Me=H(de,[["__scopeId","data-v-f89944c3"]]);export{Me as default};