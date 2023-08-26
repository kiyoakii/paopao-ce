import{H as F,_ as b,I}from"./index-8c4266fc.js";import{S as k,J as $,T as B,b as U,e as W,i as z}from"./naive-ui-df120204.js";import{d as C,r,o as R,Q as V,a2 as s,a,V as n,e as l,M as i}from"./@vue-7e1ab0af.js";const M={class:"whisper-wrap"},N={class:"whisper-line"},A={class:"whisper-line send-wrap"},S=C({__name:"whisper",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(p,{emit:u}){const d=p,o=r(""),t=r(!1),_=()=>{u("success")},m=()=>{t.value=!0,F({user_id:d.user.id,content:o.value}).then(e=>{window.$message.success("发送成功"),t.value=!1,o.value="",_()}).catch(e=>{t.value=!1})};return(e,c)=>{const h=k,w=$,f=B,v=U,g=W,y=z;return R(),V(y,{show:e.show,"onUpdate:show":_,class:"whisper-card",preset:"card",size:"small",title:"私信","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:s(()=>[a("div",M,[n(f,{"show-icon":!1},{default:s(()=>[l(" 即将发送私信给: "),n(w,{style:{"max-width":"100%"}},{default:s(()=>[n(h,{type:"success"},{default:s(()=>[l(i(e.user.nickname)+"@"+i(e.user.username),1)]),_:1})]),_:1})]),_:1}),a("div",N,[n(v,{type:"textarea",placeholder:"请输入私信内容（请勿发送不和谐内容，否则将会被封号）",autosize:{minRows:5,maxRows:10},value:o.value,"onUpdate:value":c[0]||(c[0]=x=>o.value=x),maxlength:"200","show-count":""},null,8,["value"])]),a("div",A,[n(g,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:m},{default:s(()=>[l(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const E=b(S,[["__scopeId","data-v-0cbfe47c"]]),T={class:"whisper-wrap"},q={class:"whisper-line"},D={class:"whisper-line send-wrap"},H=C({__name:"whisper-add-friend",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(p,{emit:u}){const d=p,o=r(""),t=r(!1),_=()=>{u("success")},m=()=>{t.value=!0,I({user_id:d.user.id,greetings:o.value}).then(e=>{window.$message.success("发送成功"),t.value=!1,o.value="",_()}).catch(e=>{t.value=!1})};return(e,c)=>{const h=k,w=$,f=B,v=U,g=W,y=z;return R(),V(y,{show:e.show,"onUpdate:show":_,class:"whisper-card",preset:"card",size:"small",title:"申请添加朋友","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:s(()=>[a("div",T,[n(f,{"show-icon":!1},{default:s(()=>[l(" 发送添加朋友申请给: "),n(w,{style:{"max-width":"100%"}},{default:s(()=>[n(h,{type:"success"},{default:s(()=>[l(i(e.user.nickname)+"@"+i(e.user.username),1)]),_:1})]),_:1})]),_:1}),a("div",q,[n(v,{type:"textarea",placeholder:"请输入真挚的问候语",autosize:{minRows:5,maxRows:10},value:o.value,"onUpdate:value":c[0]||(c[0]=x=>o.value=x),maxlength:"120","show-count":""},null,8,["value"])]),a("div",D,[n(g,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:m},{default:s(()=>[l(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const G=b(H,[["__scopeId","data-v-60be56a2"]]);export{G as W,E as _};
