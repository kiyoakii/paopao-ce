import{p as R,a as V,_ as E,b as G,c as J}from"./content-70c346cf.js";import{d as K,c as C,r as W,e as l,f as b,k as n,al as Y,w as s,j as u,F as Q,u as U,y as v,bf as i,A as p,x as _,q as c,Y as r,h as $}from"./@vue-a481fc63.js";import{u as X}from"./vuex-44de225f.js";import{u as Z}from"./vue-router-e5a2430e.js";import{S as ee,A as te,B as oe}from"./index-043b20da.js";import{c as se}from"./copy-to-clipboard-4ef7d3eb.js";import{k as ne,l as ae,n as le,o as ie,r as ue,G as ce,x as re,J as pe,K as _e,q as de}from"./@vicons-4ed09704.js";import{j as h,o as me,M as ve,e as he,P as fe,a as ke,O as ge}from"./naive-ui-defd0b2d.js";const ye={class:"post-item"},we={class:"nickname-wrap"},be={class:"username-wrap"},xe={class:"timestamp-mobile"},Ce={class:"item-header-extra"},$e=["innerHTML"],Oe=["onClick"],qe=["onClick"],Ve=K({__name:"mobile-post-item",props:{post:{},isOwner:{type:Boolean},addFriendAction:{type:Boolean},addFollowAction:{type:Boolean}},emits:["send-whisper","handle-follow-action","handle-friend-action"],setup(O,{emit:k}){const a=O,g=Z(),q=X(),d=t=>()=>$(h,null,{default:()=>$(t)}),z=C(()=>{let t=[];return a.isOwner||t.push({label:"私信",key:"whisper",icon:d(ue)}),!a.isOwner&&a.addFollowAction&&(a.post.user.is_following?t.push({label:"取消关注",key:"unfollow",icon:d(ce)}):t.push({label:"关注",key:"follow",icon:d(re)})),!a.isOwner&&a.addFriendAction&&(a.post.user.is_friend?t.push({label:"删除好友",key:"delete",icon:d(pe)}):t.push({label:"添加朋友",key:"requesting",icon:d(_e)})),t.push({label:"复制链接",key:"copyTweetLink",icon:d(de)}),t}),T=async t=>{switch(t){case"copyTweetLink":se(`${window.location.origin}/#/post?id=${e.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板");break;case"whisper":k("send-whisper",a.post.user);break;case"delete":case"requesting":k("handle-friend-action",a.post);break;case"follow":case"unfollow":k("handle-follow-action",a.post);break}},e=C({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},a.post);return t.contents.map(o=>{(+o.type==1||+o.type==2)&&t.texts.push(o),+o.type==3&&t.imgs.push(o),+o.type==4&&t.videos.push(o),+o.type==6&&t.links.push(o),+o.type==7&&t.attachments.push(o),+o.type==8&&t.charge_attachments.push(o)}),t},set:t=>{a.post.upvote_count=t.upvote_count,a.post.collection_count=t.collection_count}}),P=()=>{te({id:e.value.id}).then(t=>{t.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count>0?e.value.upvote_count-1:0}}).catch(t=>{console.log(t)})},A=()=>{oe({id:e.value.id}).then(t=>{t.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count>0?e.value.collection_count-1:0}}).catch(t=>{console.log(t)})},y=t=>{g.push({name:"post",query:{id:t}})},B=(t,o)=>{if(t.target.dataset.detail){const m=t.target.dataset.detail.split(":");if(m.length===2){q.commit("refresh"),m[0]==="tag"?g.push({name:"home",query:{q:m[1],t:"tag"}}):g.push({name:"user",query:{s:m[1]}});return}}y(o)};return(t,o)=>{const m=me,F=W("router-link"),w=ve,S=he,L=fe,x=V,M=E,j=G,D=J,H=ke,I=ge;return l(),b("div",ye,[n(I,{"content-indented":""},Y({avatar:s(()=>[n(m,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:s(()=>[u("span",we,[n(F,{onClick:o[0]||(o[0]=v(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:s(()=>[p(_(e.value.user.nickname),1)]),_:1},8,["to"])]),u("span",be," @"+_(e.value.user.username),1),e.value.is_top?(l(),c(w,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:s(()=>[p(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(l(),c(w,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:s(()=>[p(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(l(),c(w,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:s(()=>[p(" 好友可见 ")]),_:1})):r("",!0),u("div",null,[u("span",xe,_(i(ee)(e.value.created_on))+" "+_(e.value.ip_loc),1)])]),"header-extra":s(()=>[u("div",Ce,[n(L,{placement:"bottom-end",trigger:"click",size:"small",options:z.value,onSelect:T},{default:s(()=>[n(S,{quaternary:"",circle:""},{icon:s(()=>[n(i(h),null,{default:s(()=>[n(i(ne))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:s(()=>[e.value.attachments.length>0?(l(),c(x,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(l(),c(x,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(l(),c(M,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(l(),c(j,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(l(),c(D,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:s(()=>[n(H,{justify:"space-between"},{default:s(()=>[u("div",{class:"opt-item",onClick:v(P,["stop"])},[n(i(h),{size:"18",class:"opt-item-icon"},{default:s(()=>[n(i(ae))]),_:1}),p(" "+_(e.value.upvote_count),1)],8,Oe),u("div",{class:"opt-item",onClick:o[3]||(o[3]=v(f=>y(e.value.id),["stop"]))},[n(i(h),{size:"18",class:"opt-item-icon"},{default:s(()=>[n(i(le))]),_:1}),p(" "+_(e.value.comment_count),1)]),u("div",{class:"opt-item",onClick:v(A,["stop"])},[n(i(h),{size:"18",class:"opt-item-icon"},{default:s(()=>[n(i(ie))]),_:1}),p(" "+_(e.value.collection_count),1)],8,qe)]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:s(()=>[u("div",{onClick:o[2]||(o[2]=f=>y(e.value.id))},[(l(!0),b(Q,null,U(e.value.texts,f=>(l(),b("span",{key:f.id,class:"post-text",onClick:o[1]||(o[1]=v(N=>B(N,e.value.id),["stop"])),innerHTML:i(R)(f.content).content},null,8,$e))),128))])]),key:"0"}:void 0]),1024)])}}});const ze={class:"nickname-wrap"},Te={class:"username-wrap"},Pe={class:"item-header-extra"},Ae={class:"timestamp"},Be=["innerHTML"],Fe=["onClick"],Se=["onClick"],Ee=K({__name:"post-item",props:{post:{},isOwner:{type:Boolean},addFriendAction:{type:Boolean},addFollowAction:{type:Boolean}},emits:["send-whisper","handle-follow-action","handle-friend-action"],setup(O,{emit:k}){const a=O,g=Z(),q=X(),d=t=>()=>$(h,null,{default:()=>$(t)}),z=C(()=>{let t=[];return a.isOwner||t.push({label:"私信",key:"whisper",icon:d(ue)}),!a.isOwner&&a.addFollowAction&&(a.post.user.is_following?t.push({label:"取消关注",key:"unfollow",icon:d(ce)}):t.push({label:"关注",key:"follow",icon:d(re)})),!a.isOwner&&a.addFriendAction&&(a.post.user.is_friend?t.push({label:"删除好友",key:"delete",icon:d(pe)}):t.push({label:"添加朋友",key:"requesting",icon:d(_e)})),t.push({label:"复制链接",key:"copyTweetLink",icon:d(de)}),t}),T=async t=>{switch(t){case"copyTweetLink":se(`${window.location.origin}/#/post?id=${e.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板");break;case"whisper":k("send-whisper",a.post.user);break;case"delete":case"requesting":k("handle-friend-action",a.post);break;case"follow":case"unfollow":k("handle-follow-action",a.post);break}},e=C({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},a.post);return t.contents.map(o=>{(+o.type==1||+o.type==2)&&t.texts.push(o),+o.type==3&&t.imgs.push(o),+o.type==4&&t.videos.push(o),+o.type==6&&t.links.push(o),+o.type==7&&t.attachments.push(o),+o.type==8&&t.charge_attachments.push(o)}),t},set:t=>{a.post.upvote_count=t.upvote_count,a.post.collection_count=t.collection_count}}),P=()=>{te({id:e.value.id}).then(t=>{t.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count>0?e.value.upvote_count-1:0}}).catch(t=>{console.log(t)})},A=()=>{oe({id:e.value.id}).then(t=>{t.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count>0?e.value.collection_count-1:0}}).catch(t=>{console.log(t)})},y=t=>{g.push({name:"post",query:{id:t}})},B=(t,o)=>{if(t.target.dataset.detail){const m=t.target.dataset.detail.split(":");if(m.length===2){q.commit("refresh"),m[0]==="tag"?g.push({name:"home",query:{q:m[1],t:"tag"}}):g.push({name:"user",query:{s:m[1]}});return}}y(o)};return(t,o)=>{const m=me,F=W("router-link"),w=ve,S=he,L=fe,x=V,M=E,j=G,D=J,H=ke,I=ge;return l(),b("div",{class:"post-item",onClick:o[3]||(o[3]=f=>y(e.value.id))},[n(I,{"content-indented":""},Y({avatar:s(()=>[n(m,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:s(()=>[u("span",ze,[n(F,{onClick:o[0]||(o[0]=v(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:s(()=>[p(_(e.value.user.nickname),1)]),_:1},8,["to"])]),u("span",Te," @"+_(e.value.user.username),1),e.value.is_top?(l(),c(w,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:s(()=>[p(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(l(),c(w,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:s(()=>[p(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(l(),c(w,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:s(()=>[p(" 好友可见 ")]),_:1})):r("",!0)]),"header-extra":s(()=>[u("div",Pe,[u("span",Ae,_(e.value.ip_loc?e.value.ip_loc+" · ":e.value.ip_loc)+" "+_(i(ee)(e.value.created_on)),1),n(L,{placement:"bottom-end",trigger:"hover",size:"small",options:z.value,onSelect:T},{default:s(()=>[n(S,{quaternary:"",circle:""},{icon:s(()=>[n(i(h),null,{default:s(()=>[n(i(ne))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:s(()=>[e.value.attachments.length>0?(l(),c(x,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(l(),c(x,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(l(),c(M,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(l(),c(j,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(l(),c(D,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:s(()=>[n(H,{justify:"space-between"},{default:s(()=>[u("div",{class:"opt-item hover",onClick:v(P,["stop"])},[n(i(h),{size:"18",class:"opt-item-icon"},{default:s(()=>[n(i(ae))]),_:1}),p(" "+_(e.value.upvote_count),1)],8,Fe),u("div",{class:"opt-item hover",onClick:o[2]||(o[2]=v(f=>y(e.value.id),["stop"]))},[n(i(h),{size:"18",class:"opt-item-icon"},{default:s(()=>[n(i(le))]),_:1}),p(" "+_(e.value.comment_count),1)]),u("div",{class:"opt-item hover",onClick:v(A,["stop"])},[n(i(h),{size:"18",class:"opt-item-icon"},{default:s(()=>[n(i(ie))]),_:1}),p(" "+_(e.value.collection_count),1)],8,Se)]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:s(()=>[(l(!0),b(Q,null,U(e.value.texts,f=>(l(),b("span",{key:f.id,class:"post-text hover",onClick:o[1]||(o[1]=v(N=>B(N,e.value.id),["stop"])),innerHTML:i(R)(f.content).content},null,8,Be))),128))]),key:"0"}:void 0]),1024)])}}});export{Ee as _,Ve as a};
