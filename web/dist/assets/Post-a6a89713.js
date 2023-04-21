import{d as be,_ as Z,e as $e,f as xe,g as Ce,h as Ie,i as Pe,j as Re,k as Ue,l as ze,s as Se,v as Te,p as Le,m as Ae,n as qe,o as Me}from"./index-2c67ab1f.js";import{b as Oe,e as W,J as Be,j as ne,K as me,o as re,L as ve,v as je,w as De,x as Ne,y as Ve,z as Ee,B as Fe,M as He,O as Ke,i as Je,P as Ge,a as Qe,F as Ye,I as Ze,k as We,H as Xe,f as et,g as tt}from"./naive-ui-ddb574dd.js";import{d as G,r as p,o as a,c as d,a as v,O as y,L as s,Y as n,e as w,_ as _e,M as P,K as S,U as e,n as ee,a3 as st,F as te,$ as se,Z as K,j as pe,a4 as fe,a5 as ge,w as ot}from"./@vue-f70ab1bd.js";import{u as ae}from"./vuex-cc1858c6.js";import{f as oe}from"./formatTime-b37c8e0f.js";import{T as he,I as nt,e as at,f as lt,g as it,h as ct,i as ut,j as rt,k as _t}from"./@vicons-2f3cb6b9.js";import{p as de,_ as ye,a as pt,b as dt,c as mt}from"./content-8a1c5cf4.js";import{u as ke,b as vt}from"./vue-router-29025daf.js";import{_ as ft}from"./post-skeleton-3f57d9d8.js";import{l as gt}from"./lodash-3329902d.js";import{V as Y}from"./IEnum-ea67d3af.js";import{a as ht}from"./copy-to-clipboard-ca358197.js";import{_ as yt}from"./main-nav.vue_vue_type_style_index_0_lang-427305f4.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./evtd-b614532e.js";import"./@css-render-66126308.js";import"./vooks-dfdd6eef.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./moment-b7869f98.js";import"./nonesir-video-29a967e9.js";import"./toggle-selection-93f4ad84.js";const kt={class:"reply-compose-wrap"},wt={class:"reply-switch"},bt={key:0,class:"reply-input-wrap"},$t=G({__name:"compose-reply",props:{commentId:{default:0},atUserid:{default:0},atUsername:{default:""}},emits:["reload","reset"],setup(U,{expose:T,emit:i}){const c=U,R=p(),k=p(!1),f=p(""),C=p(!1),l=g=>{k.value=g,g?setTimeout(()=>{var r;(r=R.value)==null||r.focus()},10):(C.value=!1,f.value="",i("reset"))},z=()=>{C.value=!0,be({comment_id:c.commentId,at_user_id:c.atUserid,content:f.value}).then(g=>{l(!1),window.$message.success("评论成功"),i("reload")}).catch(g=>{C.value=!1})};return T({switchReply:l}),(g,r)=>{const b=Oe,o=W,I=Be;return a(),d("div",kt,[v("div",wt,[k.value?y("",!0):(a(),d("span",{key:0,class:"show",onClick:r[0]||(r[0]=h=>l(!0))}," 回复 ")),k.value?(a(),d("span",{key:1,class:"hide",onClick:r[1]||(r[1]=h=>l(!1))}," 取消 ")):y("",!0)]),k.value?(a(),d("div",bt,[s(I,null,{default:n(()=>[s(b,{ref_key:"inputInstRef",ref:R,size:"small",placeholder:c.atUsername?"@"+c.atUsername:"请输入回复内容..",maxlength:"100",value:f.value,"onUpdate:value":r[2]||(r[2]=h=>f.value=h),"show-count":"",clearable:""},null,8,["placeholder","value"]),s(o,{type:"primary",size:"small",ghost:"",loading:C.value,onClick:z},{default:n(()=>[w(" 回复 ")]),_:1},8,["loading"])]),_:1})])):y("",!0)])}}});const xt=Z($t,[["__scopeId","data-v-89bc7a6d"]]),Ct={class:"reply-item"},It={class:"header-wrap"},Pt={class:"username"},Rt={class:"reply-name"},Ut={class:"timestamp"},zt={class:"base-wrap"},St={class:"content"},Tt={key:0,class:"reply-switch"},Lt=G({__name:"reply-item",props:{reply:null},emits:["focusReply","reload"],setup(U,{emit:T}){const i=U,c=ae(),R=()=>{T("focusReply",i.reply)},k=()=>{$e({id:i.reply.id}).then(f=>{window.$message.success("删除成功"),setTimeout(()=>{T("reload")},50)}).catch(f=>{console.log(f)})};return(f,C)=>{const l=_e("router-link"),z=ne,g=W,r=me;return a(),d("div",Ct,[v("div",It,[v("div",Pt,[s(l,{class:"user-link",to:{name:"user",query:{username:i.reply.user.username}}},{default:n(()=>[w(P(i.reply.user.username),1)]),_:1},8,["to"]),v("span",Rt,P(i.reply.at_user_id>0?"回复":":"),1),i.reply.at_user_id>0?(a(),S(l,{key:0,class:"user-link",to:{name:"user",query:{username:i.reply.at_user.username}}},{default:n(()=>[w(P(i.reply.at_user.username),1)]),_:1},8,["to"])):y("",!0)]),v("div",Ut,[w(P(i.reply.ip_loc?i.reply.ip_loc+" · ":i.reply.ip_loc)+" "+P(e(oe)(i.reply.created_on,e(c).state.collapsedLeft))+" ",1),e(c).state.userInfo.is_admin||e(c).state.userInfo.id===i.reply.user.id?(a(),S(r,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:k},{trigger:n(()=>[s(g,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:n(()=>[s(z,null,{default:n(()=>[s(e(he))]),_:1})]),_:1})]),default:n(()=>[w(" 是否确认删除？ ")]),_:1})):y("",!0)])]),v("div",zt,[v("div",St,P(i.reply.content),1),e(c).state.userInfo.id>0?(a(),d("div",Tt,[v("span",{class:"show",onClick:R}," 回复 ")])):y("",!0)])])}}});const At=Z(Lt,[["__scopeId","data-v-c486479f"]]),qt={class:"comment-item"},Mt={class:"nickname-wrap"},Ot={class:"username-wrap"},Bt={class:"opt-wrap"},jt={class:"timestamp"},Dt=["innerHTML"],Nt={class:"reply-wrap"},Vt=G({__name:"comment-item",props:{comment:null},emits:["reload"],setup(U,{emit:T}){const i=U,c=ae(),R=ke(),k=p(0),f=p(""),C=p(),l=ee(()=>{let I=Object.assign({texts:[],imgs:[]},i.comment);return I.contents.map(h=>{(+h.type==1||+h.type==2)&&I.texts.push(h),+h.type==3&&I.imgs.push(h)}),I}),z=(I,h)=>{let L=I.target;if(L.dataset.detail){const A=L.dataset.detail.split(":");A.length===2&&(c.commit("refresh"),A[0]==="tag"?window.$message.warning("评论内的无效话题"):R.push({name:"user",query:{username:A[1]}}))}},g=I=>{var h,L;k.value=I.user_id,f.value=((h=I.user)==null?void 0:h.username)||"",(L=C.value)==null||L.switchReply(!0)},r=()=>{T("reload")},b=()=>{k.value=0,f.value=""},o=()=>{xe({id:l.value.id}).then(I=>{window.$message.success("删除成功"),setTimeout(()=>{r()},50)}).catch(I=>{})};return(I,h)=>{const L=re,A=_e("router-link"),j=ne,N=W,V=me,E=ye,F=At,H=xt,O=ve;return a(),d("div",qt,[s(O,{"content-indented":""},st({avatar:n(()=>[s(L,{round:"",size:30,src:e(l).user.avatar},null,8,["src"])]),header:n(()=>[v("span",Mt,[s(A,{onClick:h[0]||(h[0]=K(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e(l).user.username}}},{default:n(()=>[w(P(e(l).user.nickname),1)]),_:1},8,["to"])]),v("span",Ot," @"+P(e(l).user.username),1)]),"header-extra":n(()=>[v("div",Bt,[v("span",jt,P(e(l).ip_loc?e(l).ip_loc+" · ":e(l).ip_loc)+" "+P(e(oe)(e(l).created_on,e(c).state.collapsedLeft)),1),e(c).state.userInfo.is_admin||e(c).state.userInfo.id===e(l).user.id?(a(),S(V,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:o},{trigger:n(()=>[s(N,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:n(()=>[s(j,null,{default:n(()=>[s(e(he))]),_:1})]),_:1})]),default:n(()=>[w(" 是否确认删除？ ")]),_:1})):y("",!0)])]),footer:n(()=>[e(l).imgs.length>0?(a(),S(E,{key:0,imgs:e(l).imgs},null,8,["imgs"])):y("",!0),v("div",Nt,[(a(!0),d(te,null,se(e(l).replies,t=>(a(),S(F,{key:t.id,reply:t,onFocusReply:g,onReload:r},null,8,["reply"]))),128))]),e(c).state.userInfo.id>0?(a(),S(H,{key:1,ref_key:"replyComposeRef",ref:C,"comment-id":e(l).id,"at-userid":k.value,"at-username":f.value,onReload:r,onReset:b},null,8,["comment-id","at-userid","at-username"])):y("",!0)]),_:2},[e(l).texts.length>0?{name:"description",fn:n(()=>[(a(!0),d(te,null,se(e(l).texts,t=>(a(),d("span",{key:t.id,class:"comment-text",onClick:h[1]||(h[1]=K(u=>z(u,e(l).id),["stop"])),innerHTML:e(de)(t.content).content},null,8,Dt))),128))]),key:"0"}:void 0]),1024)])}}});const Et=Z(Vt,[["__scopeId","data-v-02db83b3"]]),Ft=U=>(fe("data-v-ca3e6071"),U=U(),ge(),U),Ht={key:0,class:"compose-wrap"},Kt={class:"compose-line"},Jt={class:"compose-user"},Gt={class:"compose-line compose-options"},Qt={class:"attachment"},Yt={class:"submit-wrap"},Zt={class:"attachment-list-wrap"},Wt={key:1,class:"compose-wrap"},Xt=Ft(()=>v("div",{class:"login-wrap"},[v("span",{class:"login-banner"}," 登录后，精彩更多")],-1)),es={key:0,class:"login-only-wrap"},ts={key:1,class:"login-wrap"},ss=G({__name:"compose-comment",props:{lock:{default:0},postId:{default:0}},emits:["post-success"],setup(U,{emit:T}){const i=U,c=ae(),R=p([]),k=p(!1),f=p(!1),C=p(!1),l=p(""),z=p(),g=p("public/image"),r=p([]),b=p([]),o=p("true".toLowerCase()==="true"),I="/v1/attachment",h=p(),L=gt.debounce(m=>{Ce({k:m}).then(_=>{let $=[];_.suggest.map(x=>{$.push({label:x,value:x})}),R.value=$,f.value=!1}).catch(_=>{f.value=!1})},200),A=(m,_)=>{f.value||(f.value=!0,_==="@"&&L(m))},j=m=>{m.length>200||(l.value=m)},N=m=>{g.value=m},V=m=>{r.value=m},E=async m=>{var _,$;return g.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((_=m.file.file)==null?void 0:_.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):g.value==="image"&&(($=m.file.file)==null?void 0:$.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):!0},F=({file:m,event:_})=>{var $;try{let x=JSON.parse(($=_.target)==null?void 0:$.response);x.code===0&&g.value==="public/image"&&b.value.push({id:m.id,content:x.data.content})}catch{window.$message.error("上传失败")}},H=({file:m,event:_})=>{var $;try{let x=JSON.parse(($=_.target)==null?void 0:$.response);if(x.code!==0){let B=x.msg||"上传失败";x.details&&x.details.length>0&&x.details.map(q=>{B+=":"+q}),window.$message.error(B)}}catch{window.$message.error("上传失败")}},O=({file:m})=>{let _=b.value.findIndex($=>$.id===m.id);_>-1&&b.value.splice(_,1)},t=()=>{k.value=!0},u=()=>{var m;k.value=!1,(m=z.value)==null||m.clear(),r.value=[],l.value="",b.value=[]},D=()=>{if(l.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{users:m}=de(l.value);const _=[];let $=100;_.push({content:l.value,type:2,sort:$}),b.value.map(x=>{$++,_.push({content:x.content,type:3,sort:$})}),C.value=!0,Ie({contents:_,post_id:i.postId,users:Array.from(new Set(m))}).then(x=>{window.$message.success("发布成功"),C.value=!1,T("post-success"),u()}).catch(x=>{C.value=!1})},Q=m=>{c.commit("triggerAuth",!0),c.commit("triggerAuthKey",m)};return pe(()=>{h.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(m,_)=>{const $=re,x=je,B=ne,q=W,le=De,ie=Ne,ce=Ve,X=Ee,ue=Fe;return a(),d("div",null,[e(c).state.userInfo.id>0?(a(),d("div",Ht,[v("div",Kt,[v("div",Jt,[s($,{round:"",size:30,src:e(c).state.userInfo.avatar},null,8,["src"])]),s(x,{type:"textarea",size:"large",autosize:"",bordered:!1,options:R.value,prefix:["@"],loading:f.value,value:l.value,disabled:i.lock===1,"onUpdate:value":j,onSearch:A,onFocus:t,placeholder:i.lock===1?"泡泡已被锁定，回复功能已关闭":"快来评论两句吧..."},null,8,["options","loading","value","disabled","placeholder"])]),k.value?(a(),S(ue,{key:0,ref_key:"uploadRef",ref:z,abstract:"","list-type":"image",multiple:!0,max:9,action:I,headers:{Authorization:h.value},data:{type:g.value},onBeforeUpload:E,onFinish:F,onError:H,onRemove:O,"onUpdate:fileList":V},{default:n(()=>[v("div",Gt,[v("div",Qt,[s(le,{abstract:""},{default:n(({handleClick:J})=>[s(q,{disabled:r.value.length>0&&g.value==="public/video"||r.value.length===9,onClick:()=>{N("public/image"),J()},quaternary:"",circle:"",type:"primary"},{icon:n(()=>[s(B,{size:"20",color:"var(--primary-color)"},{default:n(()=>[s(e(nt))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),s(ce,{trigger:"hover",placement:"bottom"},{trigger:n(()=>[s(ie,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:l.value.length/200*100},null,8,["percentage"])]),default:n(()=>[w(" "+P(l.value.length)+" / 200 ",1)]),_:1})]),v("div",Yt,[s(q,{quaternary:"",round:"",type:"tertiary",class:"cancel-btn",size:"small",onClick:u},{default:n(()=>[w(" 取消 ")]),_:1}),s(q,{loading:C.value,onClick:D,type:"primary",secondary:"",size:"small",round:""},{default:n(()=>[w(" 发布 ")]),_:1},8,["loading"])])]),v("div",Zt,[s(X)])]),_:1},8,["headers","data"])):y("",!0)])):(a(),d("div",Wt,[Xt,o.value?y("",!0):(a(),d("div",es,[s(q,{strong:"",secondary:"",round:"",type:"primary",onClick:_[0]||(_[0]=J=>Q("signin"))},{default:n(()=>[w(" 登录 ")]),_:1})])),o.value?(a(),d("div",ts,[s(q,{strong:"",secondary:"",round:"",type:"primary",onClick:_[1]||(_[1]=J=>Q("signin"))},{default:n(()=>[w(" 登录 ")]),_:1}),s(q,{strong:"",secondary:"",round:"",type:"info",onClick:_[2]||(_[2]=J=>Q("signup"))},{default:n(()=>[w(" 注册 ")]),_:1})])):y("",!0)]))])}}});const os=Z(ss,[["__scopeId","data-v-ca3e6071"]]),ns={class:"username-wrap"},as={key:0,class:"options"},ls={key:0},is=["innerHTML"],cs={class:"timestamp"},us={key:0},rs={key:1},_s={class:"opts-wrap"},ps=["onClick"],ds={class:"opt-item"},ms=["onClick"],vs=["onClick"],fs=G({__name:"post-detail",props:{post:null},emits:["reload"],setup(U,{emit:T}){const i=U,c=ae(),R=ke(),k=p(!1),f=p(!1),C=p(!1),l=p(!1),z=p(!1),g=p(!1),r=p(!1),b=p(Y.PUBLIC),o=ee({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},i.post);return t.contents.map(u=>{(+u.type==1||+u.type==2)&&t.texts.push(u),+u.type==3&&t.imgs.push(u),+u.type==4&&t.videos.push(u),+u.type==6&&t.links.push(u),+u.type==7&&t.attachments.push(u),+u.type==8&&t.charge_attachments.push(u)}),t},set:t=>{i.post.upvote_count=t.upvote_count,i.post.comment_count=t.comment_count,i.post.collection_count=t.collection_count}}),I=ee(()=>{let t=[{label:"删除",key:"delete"}];return o.value.is_lock===0?t.push({label:"锁定",key:"lock"}):t.push({label:"解锁",key:"unlock"}),c.state.userInfo.is_admin&&(o.value.is_top===0?t.push({label:"置顶",key:"stick"}):t.push({label:"取消置顶",key:"unstick"})),o.value.visibility===Y.PUBLIC?t.push({label:"公开",key:"vpublic",children:[{label:"私密",key:"vprivate"},{label:"好友可见",key:"vfriend"}]}):o.value.visibility===Y.PRIVATE?t.push({label:"私密",key:"vprivate",children:[{label:"公开",key:"vpublic"},{label:"好友可见",key:"vfriend"}]}):t.push({label:"好友可见",key:"vfriend",children:[{label:"公开",key:"vpublic"},{label:"私密",key:"vprivate"}]}),t}),h=t=>{R.push({name:"post",query:{id:t}})},L=(t,u)=>{if(t.target.dataset.detail){const D=t.target.dataset.detail.split(":");if(D.length===2){c.commit("refresh"),D[0]==="tag"?R.push({name:"home",query:{q:D[1],t:"tag"}}):R.push({name:"user",query:{username:D[1]}});return}}h(u)},A=t=>{switch(t){case"delete":C.value=!0;break;case"lock":case"unlock":l.value=!0;break;case"stick":case"unstick":z.value=!0;break;case"vpublic":b.value=0,g.value=!0;break;case"vprivate":b.value=1,g.value=!0;break;case"vfriend":b.value=2,g.value=!0;break}},j=()=>{Ue({id:o.value.id}).then(t=>{window.$message.success("删除成功"),R.replace("/"),setTimeout(()=>{c.commit("refresh")},50)}).catch(t=>{r.value=!1})},N=()=>{ze({id:o.value.id}).then(t=>{T("reload"),t.lock_status===1?window.$message.success("锁定成功"):window.$message.success("解锁成功")}).catch(t=>{r.value=!1})},V=()=>{Se({id:o.value.id}).then(t=>{T("reload"),t.top_status===1?window.$message.success("置顶成功"):window.$message.success("取消置顶成功")}).catch(t=>{r.value=!1})},E=()=>{Te({id:o.value.id,visibility:b.value}).then(t=>{T("reload"),window.$message.success("修改可见性成功")}).catch(t=>{r.value=!1})},F=()=>{Le({id:o.value.id}).then(t=>{k.value=t.status,t.status?o.value={...o.value,upvote_count:o.value.upvote_count+1}:o.value={...o.value,upvote_count:o.value.upvote_count-1}}).catch(t=>{console.log(t)})},H=()=>{Ae({id:o.value.id}).then(t=>{f.value=t.status,t.status?o.value={...o.value,collection_count:o.value.collection_count+1}:o.value={...o.value,collection_count:o.value.collection_count-1}}).catch(t=>{console.log(t)})},O=()=>{ht(`${window.location.origin}/#/post?id=${o.value.id}`),window.$message.success("链接已复制到剪贴板")};return pe(()=>{c.state.userInfo.id>0&&(Pe({id:o.value.id}).then(t=>{k.value=t.status}).catch(t=>{console.log(t)}),Re({id:o.value.id}).then(t=>{f.value=t.status}).catch(t=>{console.log(t)}))}),(t,u)=>{const D=re,Q=_e("router-link"),m=He,_=ne,$=W,x=Ke,B=Je,q=pt,le=ye,ie=dt,ce=mt,X=Ge,ue=Qe,J=ve;return a(),d("div",{class:"detail-item",onClick:u[6]||(u[6]=M=>h(e(o).id))},[s(J,null,{avatar:n(()=>[s(D,{round:"",size:30,src:e(o).user.avatar},null,8,["src"])]),header:n(()=>[s(Q,{onClick:u[0]||(u[0]=K(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e(o).user.username}}},{default:n(()=>[w(P(e(o).user.nickname),1)]),_:1},8,["to"]),v("span",ns," @"+P(e(o).user.username),1),e(o).is_top?(a(),S(m,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[w(" 置顶 ")]),_:1})):y("",!0),e(o).visibility==e(Y).PRIVATE?(a(),S(m,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[w(" 私密 ")]),_:1})):y("",!0),e(o).visibility==e(Y).FRIEND?(a(),S(m,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[w(" 好友可见 ")]),_:1})):y("",!0)]),"header-extra":n(()=>[e(c).state.userInfo.is_admin||e(c).state.userInfo.id===e(o).user.id?(a(),d("div",as,[s(x,{placement:"bottom-end",trigger:"click",size:"small",options:e(I),onSelect:A},{default:n(()=>[s($,{quaternary:"",circle:""},{icon:n(()=>[s(_,null,{default:n(()=>[s(e(at))]),_:1})]),_:1})]),_:1},8,["options"])])):y("",!0),s(B,{show:C.value,"onUpdate:show":u[1]||(u[1]=M=>C.value=M),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定删除该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:j},null,8,["show"]),s(B,{show:l.value,"onUpdate:show":u[2]||(u[2]=M=>l.value=M),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(e(o).is_lock?"解锁":"锁定")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:N},null,8,["show","content"]),s(B,{show:z.value,"onUpdate:show":u[3]||(u[3]=M=>z.value=M),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(e(o).is_top?"取消置顶":"置顶")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:V},null,8,["show","content"]),s(B,{show:g.value,"onUpdate:show":u[4]||(u[4]=M=>g.value=M),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态可见度修改为"+(b.value==0?"公开":b.value==1?"私密":"好友可见")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:E},null,8,["show","content"])]),footer:n(()=>[s(q,{attachments:e(o).attachments},null,8,["attachments"]),s(q,{attachments:e(o).charge_attachments,price:e(o).attachment_price},null,8,["attachments","price"]),s(le,{imgs:e(o).imgs},null,8,["imgs"]),s(ie,{videos:e(o).videos,full:!0},null,8,["videos"]),s(ce,{links:e(o).links},null,8,["links"]),v("div",cs,[w(" 发布于 "+P(e(oe)(e(o).created_on,e(c).state.collapsedLeft))+" ",1),e(o).ip_loc?(a(),d("span",us,[s(X,{vertical:""}),w(" "+P(e(o).ip_loc),1)])):y("",!0),!e(c).state.collapsedLeft&&e(o).created_on!=e(o).latest_replied_on?(a(),d("span",rs,[s(X,{vertical:""}),w(" 最后回复 "+P(e(oe)(e(o).latest_replied_on,e(c).state.collapsedLeft)),1)])):y("",!0)])]),action:n(()=>[v("div",_s,[s(ue,{justify:"space-between"},{default:n(()=>[v("div",{class:"opt-item hover",onClick:K(F,["stop"])},[s(_,{size:"20",class:"opt-item-icon"},{default:n(()=>[k.value?y("",!0):(a(),S(e(lt),{key:0})),k.value?(a(),S(e(it),{key:1,color:"red"})):y("",!0)]),_:1}),w(" "+P(e(o).upvote_count),1)],8,ps),v("div",ds,[s(_,{size:"20",class:"opt-item-icon"},{default:n(()=>[s(e(ct))]),_:1}),w(" "+P(e(o).comment_count),1)]),v("div",{class:"opt-item hover",onClick:K(H,["stop"])},[s(_,{size:"20",class:"opt-item-icon"},{default:n(()=>[f.value?y("",!0):(a(),S(e(ut),{key:0})),f.value?(a(),S(e(rt),{key:1,color:"#ff7600"})):y("",!0)]),_:1}),w(" "+P(e(o).collection_count),1)],8,ms),v("div",{class:"opt-item hover",onClick:K(O,["stop"])},[s(_,{size:"20",class:"opt-item-icon"},{default:n(()=>[s(e(_t))]),_:1}),w(" "+P(e(o).share_count),1)],8,vs)]),_:1})])]),default:n(()=>[e(o).texts.length>0?(a(),d("div",ls,[(a(!0),d(te,null,se(e(o).texts,M=>(a(),d("span",{key:M.id,class:"post-text",onClick:u[5]||(u[5]=K(we=>L(we,e(o).id),["stop"])),innerHTML:e(de)(M.content).content},null,8,is))),128))])):y("",!0)]),_:1})])}}});const gs=U=>(fe("data-v-219a8fb1"),U=U(),ge(),U),hs={key:0,class:"detail-wrap"},ys={key:1,class:"empty-wrap"},ks={key:0,class:"comment-opts-wrap"},ws=gs(()=>v("span",{class:"comment-title-item"},"评论",-1)),bs={key:2},$s={key:0,class:"skeleton-wrap"},xs={key:1},Cs={key:0,class:"empty-wrap"},Is=G({__name:"Post",setup(U){const T=vt(),i=p({}),c=p(!1),R=p(!1),k=p([]),f=ee(()=>+T.query.id),C=p("default"),l=r=>{C.value=r,g()},z=()=>{i.value={id:0},c.value=!0,qe({id:f.value}).then(r=>{c.value=!1,i.value=r,g()}).catch(r=>{c.value=!1})},g=(r=!1)=>{k.value.length===0&&(R.value=!0),Me({id:i.value.id,sort_strategy:C.value}).then(b=>{k.value=b.list,R.value=!1,r&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(b=>{R.value=!1})};return pe(()=>{z()}),ot(f,()=>{f.value>0&&T.name==="post"&&z()}),(r,b)=>{const o=yt,I=fs,h=Ze,L=We,A=Xe,j=et,N=tt,V=os,E=ft,F=Et,H=Ye;return a(),d("div",null,[s(o,{title:"泡泡详情",back:!0}),s(H,{class:"main-content-wrap",bordered:""},{default:n(()=>[s(A,null,{default:n(()=>[s(L,{show:c.value},{default:n(()=>[i.value.id>1?(a(),d("div",hs,[s(I,{post:i.value,onReload:z},null,8,["post"])])):(a(),d("div",ys,[s(h,{size:"large",description:"暂无数据"})]))]),_:1},8,["show"])]),_:1}),i.value.id>0?(a(),d("div",ks,[s(N,{type:"bar","justify-content":"end",size:"small",animated:"","onUpdate:value":l},{prefix:n(()=>[ws]),default:n(()=>[s(j,{name:"default",tab:"默认"}),s(j,{name:"newest",tab:"最新"})]),_:1})])):y("",!0),i.value.id>0?(a(),S(A,{key:1},{default:n(()=>[s(V,{lock:i.value.is_lock,"post-id":i.value.id,onPostSuccess:b[0]||(b[0]=O=>g(!0))},null,8,["lock","post-id"])]),_:1})):y("",!0),i.value.id>0?(a(),d("div",bs,[R.value?(a(),d("div",$s,[s(E,{num:5})])):(a(),d("div",xs,[k.value.length===0?(a(),d("div",Cs,[s(h,{size:"large",description:"暂无评论，快来抢沙发"})])):y("",!0),(a(!0),d(te,null,se(k.value,O=>(a(),S(A,{key:O.id},{default:n(()=>[s(F,{comment:O,onReload:g},null,8,["comment"])]),_:2},1024))),128))]))])):y("",!0)]),_:1})])}}});const no=Z(Is,[["__scopeId","data-v-219a8fb1"]]);export{no as default};