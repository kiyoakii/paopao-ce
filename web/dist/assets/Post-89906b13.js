import{d as X,r as c,a3 as ge,o,c as u,a as v,V as t,a1 as n,e as x,M as I,Q as P,O as i,_ as a,a2 as H,n as ae,a7 as qe,F as le,a4 as ie,j as ye,W as Ie,X as Te,s as be,w as Ee}from"./@vue-e0e89260.js";import{u as te}from"./vuex-473b3783.js";import{f as ue}from"./formatTime-4210fcd1.js";import{t as Ne,d as je,e as Be,_ as se,f as He,h as Fe,i as Ve,j as Ye,g as Je,k as Ke,l as Qe,m as We,n as Ge,o as Xe,s as Ze,p as et,v as tt,q as st,r as ot,u as nt,w as $e}from"./index-479e9ef6.js";import{Y as ce,V as Z}from"./IEnum-a180d93e.js";import{T as Pe,e as re,f as ze,g as _e,h as Ue,I as at,i as lt,j as it,k as ut,l as ct,m as rt,n as _t,o as pt,p as dt,q as mt,r as vt,s as Ce,F as xe,E as ve,t as he,u as fe}from"./@vicons-0524c43e.js";import{j as Y,e as oe,J as Re,K as ht,b as ft,L as gt,o as ke,M as Se,v as yt,w as kt,x as wt,y as bt,z as $t,B as Ct,O as xt,P as It,i as Tt,Q as Pt,a as Le,F as zt,I as Ut,k as Rt,H as St,f as Lt,g as Ot}from"./naive-ui-62663ad7.js";import{p as we,_ as Oe,a as Mt,b as At,c as Dt}from"./content-ffcf943b.js";import{u as Me,b as qt}from"./vue-router-b8e3382f.js";import{_ as Et}from"./post-skeleton-c0397381.js";import{l as Nt}from"./lodash-94eb5868.js";import{a as jt}from"./copy-to-clipboard-1dd3075d.js";import{_ as Bt}from"./main-nav.vue_vue_type_style_index_0_lang-db217db0.js";import{W as Ht}from"./v3-infinite-loading-e5c2e8bf.js";import"./moment-2ab8298d.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./evtd-b614532e.js";import"./@css-render-580d83ec.js";import"./vooks-a50491fd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./paopao-video-player-aa5e8b3f.js";import"./toggle-selection-93f4ad84.js";const Ft={class:"reply-item"},Vt={class:"header-wrap"},Yt={class:"username"},Jt={class:"reply-name"},Kt={class:"timestamp"},Qt={class:"base-wrap"},Wt={class:"content"},Gt={class:"reply-switch"},Xt={class:"time-item"},Zt={class:"actions"},es={class:"upvote-count"},ts=["onClick"],ss={class:"upvote-count"},os={key:2,class:"action-item"},ns=["onClick"],as=X({__name:"reply-item",props:{tweetId:{},reply:{}},emits:["focusReply","reload"],setup(A,{emit:q}){const l=A,p=te(),f=c(l.reply.is_thumbs_up==ce.YES),y=c(l.reply.is_thumbs_down==ce.YES),k=c(l.reply.thumbs_up_count),L=()=>{Ne({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(h=>{f.value=!f.value,f.value?(k.value++,y.value=!1):k.value--}).catch(h=>{console.log(h)})},r=()=>{je({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(h=>{y.value=!y.value,y.value&&f.value&&(k.value--,f.value=!1)}).catch(h=>{console.log(h)})},U=()=>{q("focusReply",l.reply)},T=()=>{Be({id:l.reply.id}).then(h=>{window.$message.success("删除成功"),setTimeout(()=>{q("reload")},50)}).catch(h=>{console.log(h)})};return(h,$)=>{const R=ge("router-link"),e=Y,_=oe,O=Re,w=ht;return o(),u("div",Ft,[v("div",Vt,[v("div",Yt,[t(R,{class:"user-link",to:{name:"user",query:{s:l.reply.user.username}}},{default:n(()=>[x(I(l.reply.user.username),1)]),_:1},8,["to"]),v("span",Jt,I(l.reply.at_user_id>0?"回复":":"),1),l.reply.at_user_id>0?(o(),P(R,{key:0,class:"user-link",to:{name:"user",query:{s:l.reply.at_user.username}}},{default:n(()=>[x(I(l.reply.at_user.username),1)]),_:1},8,["to"])):i("",!0)]),v("div",Kt,[x(I(l.reply.ip_loc)+" ",1),a(p).state.userInfo.is_admin||a(p).state.userInfo.id===l.reply.user.id?(o(),P(O,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:T},{trigger:n(()=>[t(_,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:n(()=>[t(e,null,{default:n(()=>[t(a(Pe))]),_:1})]),_:1})]),default:n(()=>[x(" 是否确认删除？ ")]),_:1})):i("",!0)])]),v("div",Qt,[v("div",Wt,[t(w,{"expand-trigger":"click","line-clamp":"5",tooltip:!1},{default:n(()=>[x(I(l.reply.content),1)]),_:1})]),v("div",Gt,[v("span",Xt,I(a(ue)(l.reply.created_on)),1),v("div",Zt,[a(p).state.userLogined?i("",!0):(o(),u("div",{key:0,class:"action-item",onClick:$[0]||($[0]=H(()=>{},["stop"]))},[t(e,{size:"medium"},{default:n(()=>[t(a(re))]),_:1}),v("span",es,I(k.value),1)])),a(p).state.userLogined?(o(),u("div",{key:1,class:"action-item hover",onClick:H(L,["stop"])},[t(e,{size:"medium"},{default:n(()=>[f.value?i("",!0):(o(),P(a(re),{key:0})),f.value?(o(),P(a(ze),{key:1,class:"show"})):i("",!0)]),_:1}),v("span",ss,I(k.value>0?k.value:"赞"),1)],8,ts)):i("",!0),a(p).state.userLogined?i("",!0):(o(),u("div",os,[t(e,{size:"medium"},{default:n(()=>[t(a(_e))]),_:1})])),a(p).state.userLogined?(o(),u("div",{key:3,class:"action-item hover",onClick:H(r,["stop"])},[t(e,{size:"medium"},{default:n(()=>[y.value?i("",!0):(o(),P(a(_e),{key:0})),y.value?(o(),P(a(Ue),{key:1,class:"show"})):i("",!0)]),_:1})],8,ns)):i("",!0),a(p).state.userLogined?(o(),u("span",{key:4,class:"show opacity-item reply-btn",onClick:U}," 回复 ")):i("",!0)])])])])}}});const ls=se(as,[["__scopeId","data-v-187a4ed3"]]),is={class:"reply-compose-wrap"},us={class:"reply-switch"},cs={class:"time-item"},rs={class:"actions"},_s={key:0,class:"action-item"},ps={class:"upvote-count"},ds=["onClick"],ms={class:"upvote-count"},vs={key:2,class:"action-item"},hs=["onClick"],fs={key:0,class:"reply-input-wrap"},gs=X({__name:"compose-reply",props:{comment:{},atUserid:{default:0},atUsername:{default:""}},emits:["reload","reset"],setup(A,{expose:q,emit:l}){const p=A,f=te(),y=c(),k=c(!1),L=c(""),r=c(!1),U=+"300",T=c(p.comment.is_thumbs_up==ce.YES),h=c(p.comment.is_thumbs_down==ce.YES),$=c(p.comment.thumbs_up_count),R=()=>{He({tweet_id:p.comment.post_id,comment_id:p.comment.id}).then(w=>{T.value=!T.value,T.value?($.value++,h.value=!1):$.value--}).catch(w=>{console.log(w)})},e=()=>{Fe({tweet_id:p.comment.post_id,comment_id:p.comment.id}).then(w=>{h.value=!h.value,h.value&&T.value&&($.value--,T.value=!1)}).catch(w=>{console.log(w)})},_=w=>{k.value=w,w?setTimeout(()=>{var M;(M=y.value)==null||M.focus()},10):(r.value=!1,L.value="",l("reset"))},O=()=>{r.value=!0,Ve({comment_id:p.comment.id,at_user_id:p.atUserid,content:L.value}).then(w=>{_(!1),window.$message.success("评论成功"),l("reload")}).catch(w=>{r.value=!1})};return q({switchReply:_}),(w,M)=>{const j=Y,B=ft,V=oe,z=gt;return o(),u("div",is,[v("div",us,[v("span",cs,I(a(ue)(w.comment.created_on)),1),v("div",rs,[a(f).state.userLogined?i("",!0):(o(),u("div",_s,[t(j,{size:"medium"},{default:n(()=>[t(a(re))]),_:1}),v("span",ps,I($.value),1)])),a(f).state.userLogined?(o(),u("div",{key:1,class:"action-item hover",onClick:H(R,["stop"])},[t(j,{size:"medium"},{default:n(()=>[T.value?i("",!0):(o(),P(a(re),{key:0})),T.value?(o(),P(a(ze),{key:1,class:"show"})):i("",!0)]),_:1}),v("span",ms,I($.value>0?$.value:"赞"),1)],8,ds)):i("",!0),a(f).state.userLogined?i("",!0):(o(),u("div",vs,[t(j,{size:"medium"},{default:n(()=>[t(a(_e))]),_:1})])),a(f).state.userLogined?(o(),u("div",{key:3,class:"action-item hover",onClick:H(e,["stop"])},[t(j,{size:"medium"},{default:n(()=>[h.value?i("",!0):(o(),P(a(_e),{key:0})),h.value?(o(),P(a(Ue),{key:1,class:"show"})):i("",!0)]),_:1})],8,hs)):i("",!0),a(f).state.userLogined&&!k.value?(o(),u("span",{key:4,class:"show reply-btn",onClick:M[0]||(M[0]=S=>_(!0))}," 回复 ")):i("",!0),a(f).state.userLogined&&k.value?(o(),u("span",{key:5,class:"hide reply-btn",onClick:M[1]||(M[1]=S=>_(!1))}," 取消 ")):i("",!0)])]),k.value?(o(),u("div",fs,[t(z,null,{default:n(()=>[t(B,{ref_key:"inputInstRef",ref:y,size:"small",placeholder:p.atUsername?"@"+p.atUsername:"请输入回复内容..",maxlength:a(U),value:L.value,"onUpdate:value":M[2]||(M[2]=S=>L.value=S),"show-count":"",clearable:""},null,8,["placeholder","maxlength","value"]),t(V,{type:"primary",size:"small",ghost:"",loading:r.value,onClick:O},{default:n(()=>[x(" 回复 ")]),_:1},8,["loading"])]),_:1})])):i("",!0)])}}});const ys=se(gs,[["__scopeId","data-v-f9af7a93"]]),ks={class:"comment-item"},ws={class:"nickname-wrap"},bs={class:"username-wrap"},$s={class:"opt-wrap"},Cs={class:"timestamp"},xs=["innerHTML"],Is={class:"reply-wrap"},Ts=X({__name:"comment-item",props:{comment:{}},emits:["reload"],setup(A,{emit:q}){const l=A,p=te(),f=Me(),y=c(0),k=c(""),L=c(),r=ae(()=>{let e=Object.assign({texts:[],imgs:[]},l.comment);return e.contents.map(_=>{(+_.type==1||+_.type==2)&&e.texts.push(_),+_.type==3&&e.imgs.push(_)}),e}),U=(e,_)=>{let O=e.target;if(O.dataset.detail){const w=O.dataset.detail.split(":");w.length===2&&(p.commit("refresh"),w[0]==="tag"?window.$message.warning("评论内的无效话题"):f.push({name:"user",query:{s:w[1]}}))}},T=e=>{var _,O;y.value=e.user_id,k.value=((_=e.user)==null?void 0:_.username)||"",(O=L.value)==null||O.switchReply(!0)},h=()=>{q("reload")},$=()=>{y.value=0,k.value=""},R=()=>{Ye({id:r.value.id}).then(e=>{window.$message.success("删除成功"),setTimeout(()=>{h()},50)}).catch(e=>{})};return(e,_)=>{const O=ke,w=ge("router-link"),M=Y,j=oe,B=Re,V=Oe,z=ys,S=ls,K=Se;return o(),u("div",ks,[t(K,{"content-indented":""},qe({avatar:n(()=>[t(O,{round:"",size:30,src:r.value.user.avatar},null,8,["src"])]),header:n(()=>[v("span",ws,[t(w,{onClick:_[0]||(_[0]=H(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:r.value.user.username}}},{default:n(()=>[x(I(r.value.user.nickname),1)]),_:1},8,["to"])]),v("span",bs," @"+I(r.value.user.username),1)]),"header-extra":n(()=>[v("div",$s,[v("span",Cs,I(r.value.ip_loc),1),a(p).state.userInfo.is_admin||a(p).state.userInfo.id===r.value.user.id?(o(),P(B,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:R},{trigger:n(()=>[t(j,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:n(()=>[t(M,null,{default:n(()=>[t(a(Pe))]),_:1})]),_:1})]),default:n(()=>[x(" 是否确认删除？ ")]),_:1})):i("",!0)])]),footer:n(()=>[r.value.imgs.length>0?(o(),P(V,{key:0,imgs:r.value.imgs},null,8,["imgs"])):i("",!0),t(z,{ref_key:"replyComposeRef",ref:L,comment:r.value,"at-userid":y.value,"at-username":k.value,onReload:h,onReset:$},null,8,["comment","at-userid","at-username"]),v("div",Is,[(o(!0),u(le,null,ie(r.value.replies,F=>(o(),P(S,{key:F.id,reply:F,"tweet-id":r.value.post_id,onFocusReply:T,onReload:h},null,8,["reply","tweet-id"]))),128))])]),_:2},[r.value.texts.length>0?{name:"description",fn:n(()=>[(o(!0),u(le,null,ie(r.value.texts,F=>(o(),u("span",{key:F.id,class:"comment-text",onClick:_[1]||(_[1]=H(J=>U(J,r.value.id),["stop"])),innerHTML:a(we)(F.content).content},null,8,xs))),128))]),key:"0"}:void 0]),1024)])}}});const Ps=se(Ts,[["__scopeId","data-v-36dac8c8"]]),zs=A=>(Ie("data-v-634e6bfd"),A=A(),Te(),A),Us={key:0,class:"compose-wrap"},Rs={class:"compose-line"},Ss={class:"compose-user"},Ls={class:"compose-line compose-options"},Os={class:"attachment"},Ms={class:"submit-wrap"},As={class:"attachment-list-wrap"},Ds={key:1,class:"compose-wrap"},qs=zs(()=>v("div",{class:"login-wrap"},[v("span",{class:"login-banner"}," 登录后，精彩更多")],-1)),Es={key:0,class:"login-only-wrap"},Ns={key:1,class:"login-wrap"},js=X({__name:"compose-comment",props:{lock:{default:0},postId:{default:0}},emits:["post-success"],setup(A,{emit:q}){const l=A,p=te(),f=c([]),y=c(!1),k=c(!1),L=c(!1),r=c(""),U=c(),T=c("public/image"),h=c([]),$=c([]),R=c("true".toLowerCase()==="true"),e=+"300",_="/v1/attachment",O=c(),w=Nt.debounce(m=>{Je({k:m}).then(g=>{let b=[];g.suggest.map(C=>{b.push({label:C,value:C})}),f.value=b,k.value=!1}).catch(g=>{k.value=!1})},200),M=(m,g)=>{k.value||(k.value=!0,g==="@"&&w(m))},j=m=>{m.length>e?r.value=m.substring(0,e):r.value=m},B=m=>{T.value=m},V=m=>{for(let E=0;E<m.length;E++){var g=m[E].name,b=g.split(".").slice(0,-1).join("."),C=g.split(".").pop();b.length>30&&(m[E].name=b.substring(0,18)+"..."+b.substring(b.length-9)+"."+C)}h.value=m},z=async m=>{var g,b;return T.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((g=m.file.file)==null?void 0:g.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):T.value==="image"&&((b=m.file.file)==null?void 0:b.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):!0},S=({file:m,event:g})=>{var b;try{let C=JSON.parse((b=g.target)==null?void 0:b.response);C.code===0&&T.value==="public/image"&&$.value.push({id:m.id,content:C.data.content})}catch{window.$message.error("上传失败")}},K=({file:m,event:g})=>{var b;try{let C=JSON.parse((b=g.target)==null?void 0:b.response);if(C.code!==0){let E=C.msg||"上传失败";C.details&&C.details.length>0&&C.details.map(D=>{E+=":"+D}),window.$message.error(E)}}catch{window.$message.error("上传失败")}},F=({file:m})=>{let g=$.value.findIndex(b=>b.id===m.id);g>-1&&$.value.splice(g,1)},J=()=>{y.value=!0},W=()=>{var m;y.value=!1,(m=U.value)==null||m.clear(),h.value=[],r.value="",$.value=[]},s=()=>{if(r.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{users:m}=we(r.value);const g=[];let b=100;g.push({content:r.value,type:2,sort:b}),$.value.map(C=>{b++,g.push({content:C.content,type:3,sort:b})}),L.value=!0,Ke({contents:g,post_id:l.postId,users:Array.from(new Set(m))}).then(C=>{window.$message.success("发布成功"),L.value=!1,q("post-success"),W()}).catch(C=>{L.value=!1})},d=m=>{p.commit("triggerAuth",!0),p.commit("triggerAuthKey",m)};return ye(()=>{O.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(m,g)=>{const b=ke,C=yt,E=Y,D=oe,Q=kt,pe=wt,de=bt,me=$t,ne=Ct;return o(),u("div",null,[a(p).state.userInfo.id>0?(o(),u("div",Us,[v("div",Rs,[v("div",Ss,[t(b,{round:"",size:30,src:a(p).state.userInfo.avatar},null,8,["src"])]),t(C,{type:"textarea",size:"large",autosize:"",bordered:!1,options:f.value,prefix:["@"],loading:k.value,value:r.value,disabled:l.lock===1,"onUpdate:value":j,onSearch:M,onFocus:J,placeholder:l.lock===1?"泡泡已被锁定，回复功能已关闭":"快来评论两句吧..."},null,8,["options","loading","value","disabled","placeholder"])]),y.value?(o(),P(ne,{key:0,ref_key:"uploadRef",ref:U,abstract:"","list-type":"image",multiple:!0,max:9,action:_,headers:{Authorization:O.value},data:{type:T.value},"file-list":h.value,onBeforeUpload:z,onFinish:S,onError:K,onRemove:F,"onUpdate:fileList":V},{default:n(()=>[v("div",Ls,[v("div",Os,[t(Q,{abstract:""},{default:n(({handleClick:G})=>[t(D,{disabled:h.value.length>0&&T.value==="public/video"||h.value.length===9,onClick:()=>{B("public/image"),G()},quaternary:"",circle:"",type:"primary"},{icon:n(()=>[t(E,{size:"20",color:"var(--primary-color)"},{default:n(()=>[t(a(at))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),t(de,{trigger:"hover",placement:"bottom"},{trigger:n(()=>[t(pe,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:r.value.length/a(e)*100},null,8,["percentage"])]),default:n(()=>[x(" "+I(r.value.length)+" / "+I(a(e)),1)]),_:1})]),v("div",Ms,[t(D,{quaternary:"",round:"",type:"tertiary",class:"cancel-btn",size:"small",onClick:W},{default:n(()=>[x(" 取消 ")]),_:1}),t(D,{loading:L.value,onClick:s,type:"primary",secondary:"",size:"small",round:""},{default:n(()=>[x(" 发布 ")]),_:1},8,["loading"])])]),v("div",As,[t(me)])]),_:1},8,["headers","data","file-list"])):i("",!0)])):(o(),u("div",Ds,[qs,R.value?i("",!0):(o(),u("div",Es,[t(D,{strong:"",secondary:"",round:"",type:"primary",onClick:g[0]||(g[0]=G=>d("signin"))},{default:n(()=>[x(" 登录 ")]),_:1})])),R.value?(o(),u("div",Ns,[t(D,{strong:"",secondary:"",round:"",type:"primary",onClick:g[1]||(g[1]=G=>d("signin"))},{default:n(()=>[x(" 登录 ")]),_:1}),t(D,{strong:"",secondary:"",round:"",type:"info",onClick:g[2]||(g[2]=G=>d("signup"))},{default:n(()=>[x(" 注册 ")]),_:1})])):i("",!0)]))])}}});const Bs=se(js,[["__scopeId","data-v-634e6bfd"]]),Hs={class:"username-wrap"},Fs={key:0,class:"options"},Vs={key:0},Ys=["innerHTML"],Js={class:"timestamp"},Ks={key:0},Qs={key:1},Ws={class:"opts-wrap"},Gs=["onClick"],Xs={class:"opt-item"},Zs=["onClick"],eo=["onClick"],to=X({__name:"post-detail",props:{post:{}},emits:["reload"],setup(A,{emit:q}){const l=A,p=te(),f=Me(),y=c(!1),k=c(!1),L=c(!1),r=c(!1),U=c(!1),T=c(!1),h=c(!1),$=c(!1),R=c(Z.PUBLIC),e=ae({get:()=>{let s=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},l.post);return s.contents.map(d=>{(+d.type==1||+d.type==2)&&s.texts.push(d),+d.type==3&&s.imgs.push(d),+d.type==4&&s.videos.push(d),+d.type==6&&s.links.push(d),+d.type==7&&s.attachments.push(d),+d.type==8&&s.charge_attachments.push(d)}),s},set:s=>{l.post.upvote_count=s.upvote_count,l.post.comment_count=s.comment_count,l.post.collection_count=s.collection_count,l.post.is_essence=s.is_essence}}),_=s=>()=>be(Y,null,{default:()=>be(s)}),O=ae(()=>{let s=[{label:"删除",key:"delete",icon:_(dt)}];return e.value.is_lock===0?s.push({label:"锁定",key:"lock",icon:_(mt)}):s.push({label:"解锁",key:"unlock",icon:_(vt)}),p.state.userInfo.is_admin&&(e.value.is_top===0?s.push({label:"置顶",key:"stick",icon:_(Ce)}):s.push({label:"取消置顶",key:"unstick",icon:_(Ce)})),e.value.is_essence===0?s.push({label:"设为亮点",key:"highlight",icon:_(xe)}):s.push({label:"取消亮点",key:"unhighlight",icon:_(xe)}),e.value.visibility===Z.PUBLIC?s.push({label:"公开",key:"vpublic",icon:_(ve),children:[{label:"私密",key:"vprivate",icon:_(he)},{label:"好友可见",key:"vfriend",icon:_(fe)}]}):e.value.visibility===Z.PRIVATE?s.push({label:"私密",key:"vprivate",icon:_(he),children:[{label:"公开",key:"vpublic",icon:_(ve)},{label:"好友可见",key:"vfriend",icon:_(fe)}]}):s.push({label:"好友可见",key:"vfriend",icon:_(fe),children:[{label:"公开",key:"vpublic",icon:_(ve)},{label:"私密",key:"vprivate",icon:_(he)}]}),s}),w=s=>{f.push({name:"post",query:{id:s}})},M=(s,d)=>{if(s.target.dataset.detail){const m=s.target.dataset.detail.split(":");if(m.length===2){p.commit("refresh"),m[0]==="tag"?f.push({name:"home",query:{q:m[1],t:"tag"}}):f.push({name:"user",query:{s:m[1]}});return}}w(d)},j=s=>{switch(s){case"delete":L.value=!0;break;case"lock":case"unlock":r.value=!0;break;case"stick":case"unstick":U.value=!0;break;case"highlight":case"unhighlight":T.value=!0;break;case"vpublic":R.value=0,h.value=!0;break;case"vprivate":R.value=1,h.value=!0;break;case"vfriend":R.value=2,h.value=!0;break}},B=()=>{Ge({id:e.value.id}).then(s=>{window.$message.success("删除成功"),f.replace("/"),setTimeout(()=>{p.commit("refresh")},50)}).catch(s=>{$.value=!1})},V=()=>{Xe({id:e.value.id}).then(s=>{q("reload"),s.lock_status===1?window.$message.success("锁定成功"):window.$message.success("解锁成功")}).catch(s=>{$.value=!1})},z=()=>{Ze({id:e.value.id}).then(s=>{q("reload"),s.top_status===1?window.$message.success("置顶成功"):window.$message.success("取消置顶成功")}).catch(s=>{$.value=!1})},S=()=>{et({id:e.value.id}).then(s=>{e.value={...e.value,is_essence:s.highlight_status},s.highlight_status===1?window.$message.success("设为亮点成功"):window.$message.success("取消亮点成功")}).catch(s=>{$.value=!1})},K=()=>{tt({id:e.value.id,visibility:R.value}).then(s=>{q("reload"),window.$message.success("修改可见性成功")}).catch(s=>{$.value=!1})},F=()=>{st({id:e.value.id}).then(s=>{y.value=s.status,s.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count-1}}).catch(s=>{console.log(s)})},J=()=>{ot({id:e.value.id}).then(s=>{k.value=s.status,s.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count-1}}).catch(s=>{console.log(s)})},W=()=>{jt(`${window.location.origin}/#/post?id=${e.value.id}`),window.$message.success("链接已复制到剪贴板")};return ye(()=>{p.state.userInfo.id>0&&(Qe({id:e.value.id}).then(s=>{y.value=s.status}).catch(s=>{console.log(s)}),We({id:e.value.id}).then(s=>{k.value=s.status}).catch(s=>{console.log(s)}))}),(s,d)=>{const m=ke,g=ge("router-link"),b=xt,C=oe,E=It,D=Tt,Q=Mt,pe=Oe,de=At,me=Dt,ne=Pt,G=Le,Ae=Se;return o(),u("div",{class:"detail-item",onClick:d[7]||(d[7]=N=>w(e.value.id))},[t(Ae,null,{avatar:n(()=>[t(m,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[t(g,{onClick:d[0]||(d[0]=H(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:n(()=>[x(I(e.value.user.nickname),1)]),_:1},8,["to"]),v("span",Hs," @"+I(e.value.user.username),1),e.value.is_top?(o(),P(b,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[x(" 置顶 ")]),_:1})):i("",!0),e.value.visibility==a(Z).PRIVATE?(o(),P(b,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[x(" 私密 ")]),_:1})):i("",!0),e.value.visibility==a(Z).FRIEND?(o(),P(b,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[x(" 好友可见 ")]),_:1})):i("",!0)]),"header-extra":n(()=>[a(p).state.userInfo.is_admin||a(p).state.userInfo.id===e.value.user.id?(o(),u("div",Fs,[t(E,{placement:"bottom-end",trigger:"click",size:"small",options:O.value,onSelect:j},{default:n(()=>[t(C,{quaternary:"",circle:""},{icon:n(()=>[t(a(Y),null,{default:n(()=>[t(a(lt))]),_:1})]),_:1})]),_:1},8,["options"])])):i("",!0),t(D,{show:L.value,"onUpdate:show":d[1]||(d[1]=N=>L.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定删除该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:B},null,8,["show"]),t(D,{show:r.value,"onUpdate:show":d[2]||(d[2]=N=>r.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(e.value.is_lock?"解锁":"锁定")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:V},null,8,["show","content"]),t(D,{show:U.value,"onUpdate:show":d[3]||(d[3]=N=>U.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(e.value.is_top?"取消置顶":"置顶")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:z},null,8,["show","content"]),t(D,{show:T.value,"onUpdate:show":d[4]||(d[4]=N=>T.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态"+(e.value.is_essence?"取消亮点":"设为亮点")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:S},null,8,["show","content"]),t(D,{show:h.value,"onUpdate:show":d[5]||(d[5]=N=>h.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态可见度修改为"+(R.value==0?"公开":R.value==1?"私密":"好友可见")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:K},null,8,["show","content"])]),footer:n(()=>[t(Q,{attachments:e.value.attachments},null,8,["attachments"]),t(Q,{attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"]),t(pe,{imgs:e.value.imgs},null,8,["imgs"]),t(de,{videos:e.value.videos,full:!0},null,8,["videos"]),t(me,{links:e.value.links},null,8,["links"]),v("div",Js,[x(" 发布于 "+I(a(ue)(e.value.created_on))+" ",1),e.value.ip_loc?(o(),u("span",Ks,[t(ne,{vertical:""}),x(" "+I(e.value.ip_loc),1)])):i("",!0),!a(p).state.collapsedLeft&&e.value.created_on!=e.value.latest_replied_on?(o(),u("span",Qs,[t(ne,{vertical:""}),x(" 最后回复 "+I(a(ue)(e.value.latest_replied_on)),1)])):i("",!0)])]),action:n(()=>[v("div",Ws,[t(G,{justify:"space-between"},{default:n(()=>[v("div",{class:"opt-item hover",onClick:H(F,["stop"])},[t(a(Y),{size:"20",class:"opt-item-icon"},{default:n(()=>[y.value?i("",!0):(o(),P(a(it),{key:0})),y.value?(o(),P(a(ut),{key:1,color:"red"})):i("",!0)]),_:1}),x(" "+I(e.value.upvote_count),1)],8,Gs),v("div",Xs,[t(a(Y),{size:"20",class:"opt-item-icon"},{default:n(()=>[t(a(ct))]),_:1}),x(" "+I(e.value.comment_count),1)]),v("div",{class:"opt-item hover",onClick:H(J,["stop"])},[t(a(Y),{size:"20",class:"opt-item-icon"},{default:n(()=>[k.value?i("",!0):(o(),P(a(rt),{key:0})),k.value?(o(),P(a(_t),{key:1,color:"#ff7600"})):i("",!0)]),_:1}),x(" "+I(e.value.collection_count),1)],8,Zs),v("div",{class:"opt-item hover",onClick:H(W,["stop"])},[t(a(Y),{size:"20",class:"opt-item-icon"},{default:n(()=>[t(a(pt))]),_:1}),x(" "+I(e.value.share_count),1)],8,eo)]),_:1})])]),default:n(()=>[e.value.texts.length>0?(o(),u("div",Vs,[(o(!0),u(le,null,ie(e.value.texts,N=>(o(),u("span",{key:N.id,class:"post-text",onClick:d[6]||(d[6]=H(De=>M(De,e.value.id),["stop"])),innerHTML:a(we)(N.content).content},null,8,Ys))),128))])):i("",!0)]),_:1})])}}});const so=A=>(Ie("data-v-0d01659f"),A=A(),Te(),A),oo={key:0,class:"detail-wrap"},no={key:1,class:"empty-wrap"},ao={key:0,class:"comment-opts-wrap"},lo=so(()=>v("span",{class:"comment-title-item"},"评论",-1)),io={key:2},uo={key:0,class:"skeleton-wrap"},co={key:1},ro={key:0,class:"empty-wrap"},_o={key:0,class:"load-more-spinner"},po={key:1,class:"load-more-spinner"},mo={key:2,class:"load-more-spinner"},vo={key:3,class:"load-more-spinner"},ee=20,ho=X({__name:"Post",setup(A){const q=qt(),l=c({}),p=c(!1),f=c(!1),y=c([]),k=ae(()=>+q.query.id),L=c("default"),r=c(!0);let U={loading(){},loaded(){},complete(){},error(){}};const T=z=>{L.value=z,z==="default"&&(r.value=!0),B(U)},h=()=>{l.value={id:0},p.value=!0,nt({id:k.value}).then(z=>{p.value=!1,l.value=z,B(U)}).catch(z=>{p.value=!1})};let $=1;const R=c(!1),e=c([]),_=z=>{R.value||$e({id:l.value.id,sort_strategy:"default",page:$,page_size:ee}).then(S=>{z!==null&&(U=z),S.list.length<ee?R.value=!0:$++,S.list.length>0&&($===1?e.value=S.list:e.value.push(...S.list),y.value=e.value),U.loaded(),f.value=!1}).catch(S=>{f.value=!1,U.error()})};let O=1,w=c(!1);const M=c([]),j=z=>{w.value||$e({id:l.value.id,sort_strategy:"newest",page:O,page_size:ee}).then(S=>{z!==null&&(U=z),S.list.length<ee?w.value=!0:O++,S.list.length>0&&(O===1?M.value=S.list:M.value.push(...S.list),y.value=M.value),U.loaded(),f.value=!1}).catch(S=>{f.value=!1,U.error()})},B=z=>{k.value<1||(y.value.length===0&&(f.value=!0),L.value==="default"?(y.value=e.value,_(z)):(y.value=M.value,j(z)),f.value=!1)},V=()=>{$=1,R.value=!1,e.value=[],O=1,w.value=!1,M.value=[],B(U)};return ye(()=>{h()}),Ee(k,()=>{k.value>0&&q.name==="post"&&h()}),(z,S)=>{const K=Bt,F=to,J=Ut,W=Rt,s=St,d=Lt,m=Ot,g=Bs,b=Et,C=Ps,E=Le,D=zt;return o(),u("div",null,[t(K,{title:"泡泡详情",back:!0}),t(D,{class:"main-content-wrap",bordered:""},{default:n(()=>[t(s,null,{default:n(()=>[t(W,{show:p.value},{default:n(()=>[l.value.id>1?(o(),u("div",oo,[t(F,{post:l.value,onReload:h},null,8,["post"])])):(o(),u("div",no,[t(J,{size:"large",description:"暂无数据"})]))]),_:1},8,["show"])]),_:1}),l.value.id>0?(o(),u("div",ao,[t(m,{type:"bar","justify-content":"end",size:"small",animated:"","onUpdate:value":T},{prefix:n(()=>[lo]),default:n(()=>[t(d,{name:"default",tab:"默认"}),t(d,{name:"newest",tab:"最新"})]),_:1})])):i("",!0),l.value.id>0?(o(),P(s,{key:1},{default:n(()=>[t(g,{lock:l.value.is_lock,"post-id":l.value.id,onPostSuccess:V},null,8,["lock","post-id"])]),_:1})):i("",!0),l.value.id>0?(o(),u("div",io,[f.value?(o(),u("div",uo,[t(b,{num:5})])):(o(),u("div",co,[y.value.length===0?(o(),u("div",ro,[t(J,{size:"large",description:"暂无评论，快来抢沙发"})])):i("",!0),(o(!0),u(le,null,ie(y.value,Q=>(o(),P(s,{key:Q.id},{default:n(()=>[t(C,{comment:Q,onReload:V},null,8,["comment"])]),_:2},1024))),128))]))])):i("",!0),y.value.length>=ee?(o(),P(E,{key:3,justify:"center"},{default:n(()=>[t(a(Ht),{class:"load-more",slots:{complete:"没有更多数据了",error:"加载出错"},onInfinite:B},{spinner:n(()=>[r.value&&R.value?(o(),u("span",_o)):i("",!0),!r.value&&a(w)?(o(),u("span",po)):i("",!0),r.value&&!R.value?(o(),u("span",mo,"加载评论")):i("",!0),!r.value&&!a(w)?(o(),u("span",vo,"加载评论")):i("",!0)]),_:1})]),_:1})):i("",!0)]),_:1})])}}});const Qo=se(ho,[["__scopeId","data-v-0d01659f"]]);export{Qo as default};
