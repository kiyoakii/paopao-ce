import{N as b,_ as B}from"./index-Lx4Mi1rj.js";import{S as N,I as C,T as V,b as W,e as z,i as A}from"./naive-ui-qF3urcFV.js";import{d as F,H as i,e as I,v as R,w as s,j as a,k as n,A as l,t as r}from"./@vue-73x4sYJ2.js";const S={class:"whisper-wrap"},T={class:"whisper-line"},U={class:"whisper-line send-wrap"},j=F({__name:"whisper-add-friend",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(p,{emit:u}){const d=p,o=i(""),t=i(!1),m=u,_=()=>{m("success")},h=()=>{t.value=!0,b({user_id:d.user.id,greetings:o.value}).then(e=>{window.$message.success("发送成功"),t.value=!1,o.value="",_()}).catch(e=>{t.value=!1})};return(e,c)=>{const w=N,f=C,g=V,v=W,y=z,x=A;return I(),R(x,{show:e.show,"onUpdate:show":_,class:"whisper-card",preset:"card",size:"small",title:"申请添加朋友","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:s(()=>[a("div",S,[n(g,{"show-icon":!1},{default:s(()=>[l(" 发送添加朋友申请给: "),n(f,{style:{"max-width":"100%"}},{default:s(()=>[n(w,{type:"success"},{default:s(()=>[l(r(e.user.nickname)+"@"+r(e.user.username),1)]),_:1})]),_:1})]),_:1}),a("div",T,[n(v,{type:"textarea",placeholder:"请输入真挚的问候语",autosize:{minRows:5,maxRows:10},value:o.value,"onUpdate:value":c[0]||(c[0]=k=>o.value=k),maxlength:"120","show-count":""},null,8,["value"])]),a("div",U,[n(y,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:h},{default:s(()=>[l(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}}),M=B(j,[["__scopeId","data-v-60be56a2"]]);export{M as W};
