import{_ as $e}from"./post-item.vue_vue_type_style_index_0_lang-09a3d19d.js";import{_ as qe}from"./post-skeleton-fdd699ea.js";import{d as Q,r as l,j as X,o as _,c as y,Y as T,a as q,L as t,$ as s,K as N,O as $,a0 as G,e as E,M as J,F as Y,a2 as W,n as xe,w as Ie}from"./@vue-ca177dbe.js";import{u as ee}from"./vuex-d28e9067.js";import{l as Z}from"./lodash-94eb5868.js";import{g as ze,a as Ue,c as Re,b as Ae,_ as Ee}from"./index-71354138.js";import{p as Le}from"./content-3f1d28f2.js";import{V as z,P as S}from"./IEnum-a180d93e.js";import{I as Pe,V as Se,A as Ne,d as Ve,E as Fe}from"./@vicons-6d35273b.js";import{o as Be,v as Oe,j as Me,e as De,w as je,x as He,y as Ke,z as Ge,A as Je,B as Ze,C as Qe,a as Xe,D as Ye,E as We,F as et,G as tt,H as at,I as ot}from"./naive-ui-2035804c.js";import{_ as nt}from"./main-nav.vue_vue_type_style_index_0_lang-5097b22a.js";import{b as st,u as lt}from"./vue-router-88cc84d1.js";import"./formatTime-000dbebb.js";import"./moment-b7869f98.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-973e5707.js";import"./evtd-b614532e.js";import"./@css-render-480a363d.js";import"./vooks-2c48c2b5.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./nonesir-video-db921567.js";const it=V=>{const x=new FileReader,i=p=>["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"].includes(p),I=()=>{const p=new Uint8Array(x.result).subarray(0,4);let m="";for(let c=0;c<p.length;c++)m+=p[c].toString(16);switch(m){case"504b0304":case"504b0506":case"504b0708":return i("application/zip");case"504b030414":return i("application/x-zip-compressed");case"504b0508":return i("application/x-zip");case"504b5370":return i("application/octet-stream");default:return!1}};return new Promise((p,m)=>{x.onloadend=()=>{const c=V.type;p(c===""||c==="application/octet-stream"?I():i(c))},x.readAsArrayBuffer(V.slice(0,4))})},rt={key:0,class:"compose-wrap"},ut={class:"compose-line"},ct={class:"compose-user"},pt={class:"compose-line compose-options"},_t={class:"attachment"},dt={class:"submit-wrap"},mt={class:"attachment-list-wrap"},vt={key:0,class:"attachment-price-wrap"},gt=q("span",null," 附件价格￥",-1),ft={key:0,class:"eye-wrap"},yt={key:1,class:"link-wrap"},ht={key:1,class:"compose-wrap"},wt=q("div",{class:"login-wrap"},[q("span",{class:"login-banner"}," 登录后，精彩更多")],-1),bt={key:0,class:"login-only-wrap"},kt={key:1,class:"login-wrap"},Ct=Q({__name:"compose",emits:["post-success"],setup(V,{emit:x}){const i=ee(),I=l([]),p=l(!1),m=l(!1),c=l(!1),w=l(!1),b=l(""),U=l([]),A=l(),L=l(0),g=l("public/image"),r=l([]),h=l([]),k=l([]),f=l([]),C=l(z.FRIEND),R=l(z.FRIEND),O=[{value:z.PUBLIC,label:"公开"},{value:z.PRIVATE,label:"私密"},{value:z.FRIEND,label:"好友可见"}],P=+"300",F=l("true".toLowerCase()==="true"),M=l("true".toLowerCase()==="true"),B=l("true".toLowerCase()==="true"),te=l("false".toLowerCase()==="true"),ae=l("true".toLowerCase()==="true"),oe="/v1/attachment",K=l(),ne=()=>{c.value=!c.value,c.value&&w.value&&(w.value=!1)},se=()=>{w.value=!w.value,w.value&&c.value&&(c.value=!1)},le=Z.debounce(a=>{ze({k:a}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),I.value=n,p.value=!1}).catch(e=>{p.value=!1})},200),ie=Z.debounce(a=>{Ue({k:a}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),I.value=n,p.value=!1}).catch(e=>{p.value=!1})},200),re=(a,e)=>{p.value||(p.value=!0,e==="@"?le(a):ie(a))},ue=a=>{a.length>P||(b.value=a)},D=a=>{g.value=a},ce=a=>{r.value=a},pe=async a=>{var e,n,o,u,v;return g.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((e=a.file.file)==null?void 0:e.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):g.value==="image"&&((n=a.file.file)==null?void 0:n.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):g.value==="public/video"&&!["video/mp4","video/quicktime"].includes((o=a.file.file)==null?void 0:o.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):g.value==="public/video"&&((u=a.file.file)==null?void 0:u.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):g.value==="attachment"&&!await it(a.file.file)?(window.$message.warning("附件仅允许 zip 格式"),!1):g.value==="attachment"&&((v=a.file.file)==null?void 0:v.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},_e=({file:a,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);o.code===0&&(g.value==="public/image"&&h.value.push({id:a.id,content:o.data.content}),g.value==="public/video"&&k.value.push({id:a.id,content:o.data.content}),g.value==="attachment"&&f.value.push({id:a.id,content:o.data.content}))}catch{window.$message.error("上传失败")}},de=({file:a,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);if(o.code!==0){let u=o.msg||"上传失败";o.details&&o.details.length>0&&o.details.map(v=>{u+=":"+v}),window.$message.error(u)}}catch{window.$message.error("上传失败")}},me=({file:a})=>{let e=h.value.findIndex(n=>n.id===a.id);e>-1&&h.value.splice(e,1),e=k.value.findIndex(n=>n.id===a.id),e>-1&&k.value.splice(e,1),e=f.value.findIndex(n=>n.id===a.id),e>-1&&f.value.splice(e,1)},ve=()=>{if(b.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:a,users:e}=Le(b.value);const n=[];let o=100;n.push({content:b.value,type:S.TEXT,sort:o}),h.value.map(u=>{o++,n.push({content:u.content,type:S.IMAGEURL,sort:o})}),k.value.map(u=>{o++,n.push({content:u.content,type:S.VIDEOURL,sort:o})}),f.value.map(u=>{o++,n.push({content:u.content,type:S.ATTACHMENT,sort:o})}),U.value.length>0&&U.value.map(u=>{o++,n.push({content:u,type:S.LINKURL,sort:o})}),m.value=!0,Re({contents:n,tags:Array.from(new Set(a)),users:Array.from(new Set(e)),attachment_price:+L.value*100,visibility:C.value}).then(u=>{var v;window.$message.success("发布成功"),m.value=!1,x("post-success",u),c.value=!1,w.value=!1,(v=A.value)==null||v.clear(),r.value=[],b.value="",U.value=[],h.value=[],k.value=[],f.value=[],C.value=R.value}).catch(u=>{m.value=!1})},j=a=>{i.commit("triggerAuth",!0),i.commit("triggerAuthKey",a)};return X(()=>{"friend".toLowerCase()==="friend"?R.value=z.FRIEND:"friend".toLowerCase()==="public"?R.value=z.PUBLIC:R.value=z.PRIVATE,C.value=R.value,K.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(a,e)=>{const n=Be,o=Oe,u=Me,v=De,H=je,ge=He,fe=Ke,ye=Ge,he=Je,we=Ze,be=Qe,ke=Xe,Ce=Ye,Te=We;return _(),y("div",null,[T(i).state.userInfo.id>0?(_(),y("div",rt,[q("div",ut,[q("div",ct,[t(n,{round:"",size:30,src:T(i).state.userInfo.avatar},null,8,["src"])]),t(o,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:p.value,value:b.value,prefix:["@","#"],options:I.value,onSearch:re,"onUpdate:value":ue,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),t(we,{ref_key:"uploadRef",ref:A,abstract:"","list-type":"image",multiple:!0,max:9,action:oe,headers:{Authorization:K.value},data:{type:g.value},onBeforeUpload:pe,onFinish:_e,onError:de,onRemove:me,"onUpdate:fileList":ce},{default:s(()=>[q("div",pt,[q("div",_t,[t(H,{abstract:""},{default:s(({handleClick:d})=>[t(v,{disabled:r.value.length>0&&g.value==="public/video"||r.value.length===9,onClick:()=>{D("public/image"),d()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(T(Pe))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),M.value?(_(),N(H,{key:0,abstract:""},{default:s(({handleClick:d})=>[t(v,{disabled:r.value.length>0&&g.value!=="public/video"||r.value.length===9,onClick:()=>{D("public/video"),d()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(T(Se))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):$("",!0),B.value?(_(),N(H,{key:1,abstract:""},{default:s(({handleClick:d})=>[t(v,{disabled:r.value.length>0&&g.value==="public/video"||r.value.length===9,onClick:()=>{D("attachment"),d()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(T(Ne))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):$("",!0),t(v,{quaternary:"",circle:"",type:"primary",onClick:G(ne,["stop"])},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(T(Ve))]),_:1})]),_:1},8,["onClick"]),ae.value?(_(),N(v,{key:2,quaternary:"",circle:"",type:"primary",onClick:G(se,["stop"])},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(T(Fe))]),_:1})]),_:1},8,["onClick"])):$("",!0)]),q("div",dt,[t(fe,{trigger:"hover",placement:"bottom"},{trigger:s(()=>[t(ge,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:b.value.length/T(P)*100},null,8,["percentage"])]),default:s(()=>[E(" "+J(b.value.length)+" / "+J(T(P)),1)]),_:1}),t(v,{loading:m.value,onClick:ve,type:"primary",secondary:"",round:""},{default:s(()=>[E(" 发布 ")]),_:1},8,["loading"])])]),q("div",mt,[t(ye),f.value.length>0?(_(),y("div",vt,[te.value?(_(),N(he,{key:0,value:L.value,"onUpdate:value":e[0]||(e[0]=d=>L.value=d),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:s(()=>[gt]),_:1},8,["value"])):$("",!0)])):$("",!0)])]),_:1},8,["headers","data"]),w.value?(_(),y("div",ft,[t(Ce,{value:C.value,"onUpdate:value":e[1]||(e[1]=d=>C.value=d),name:"radiogroup"},{default:s(()=>[t(ke,null,{default:s(()=>[(_(),y(Y,null,W(O,d=>t(be,{key:d.value,value:d.value,label:d.label},null,8,["value","label"])),64))]),_:1})]),_:1},8,["value"])])):$("",!0),c.value?(_(),y("div",yt,[t(Te,{value:U.value,"onUpdate:value":e[2]||(e[2]=d=>U.value=d),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":s(()=>[E(" 创建链接 ")]),_:1},8,["value"])])):$("",!0)])):(_(),y("div",ht,[wt,F.value?$("",!0):(_(),y("div",bt,[t(v,{strong:"",secondary:"",round:"",type:"primary",onClick:e[3]||(e[3]=d=>j("signin"))},{default:s(()=>[E(" 登录 ")]),_:1})])),F.value?(_(),y("div",kt,[t(v,{strong:"",secondary:"",round:"",type:"primary",onClick:e[4]||(e[4]=d=>j("signin"))},{default:s(()=>[E(" 登录 ")]),_:1}),t(v,{strong:"",secondary:"",round:"",type:"info",onClick:e[5]||(e[5]=d=>j("signup"))},{default:s(()=>[E(" 注册 ")]),_:1})])):$("",!0)]))])}}});const Tt={key:0,class:"skeleton-wrap"},$t={key:1},qt={key:0,class:"empty-wrap"},xt={key:0,class:"pagination-wrap"},It=Q({__name:"Home",setup(V){const x=ee(),i=st(),I=lt(),p=l(!1),m=l([]),c=l(+i.query.p||1),w=l(20),b=l(0),U=xe(()=>{let r="泡泡广场";return i.query&&i.query.q&&(i.query.t&&i.query.t==="tag"?r="#"+decodeURIComponent(i.query.q):r="搜索: "+decodeURIComponent(i.query.q)),r}),A=()=>{p.value=!0,Ae({query:i.query.q?decodeURIComponent(i.query.q):null,type:i.query.t,page:c.value,page_size:w.value}).then(r=>{p.value=!1,m.value=r.list,b.value=Math.ceil(r.pager.total_rows/w.value),window.scrollTo(0,0)}).catch(r=>{p.value=!1})},L=r=>{if(c.value!=1){I.push({name:"post",query:{id:r.id}});return}let h=[],k=m.value.length;k==w.value&&k--;for(var f=0;f<k;f++){let C=m.value[f];if(!C.is_top)break;h.push(C)}for(h.push(r);f<k;f++)h.push(m.value[f]);m.value=h},g=r=>{I.push({name:"home",query:{...i.query,p:r}})};return X(()=>{A()}),Ie(()=>({path:i.path,query:i.query,refresh:x.state.refresh}),(r,h)=>{if(r.refresh!==h.refresh){c.value=+i.query.p||1,setTimeout(()=>{A()},0);return}h.path!=="/post"&&r.path==="/"&&(c.value=+i.query.p||1,setTimeout(()=>{A()},0))}),(r,h)=>{const k=nt,f=Ct,C=at,R=qe,O=ot,P=$e,F=et,M=tt;return _(),y("div",null,[t(k,{title:T(U)},null,8,["title"]),t(F,{class:"main-content-wrap",bordered:""},{default:s(()=>[t(C,null,{default:s(()=>[t(f,{onPostSuccess:L})]),_:1}),p.value?(_(),y("div",Tt,[t(R,{num:w.value},null,8,["num"])])):(_(),y("div",$t,[m.value.length===0?(_(),y("div",qt,[t(O,{size:"large",description:"暂无数据"})])):$("",!0),(_(!0),y(Y,null,W(m.value,B=>(_(),N(C,{key:B.id},{default:s(()=>[t(P,{post:B},null,8,["post"])]),_:2},1024))),128))]))]),_:1}),b.value>0?(_(),y("div",xt,[t(M,{page:c.value,"onUpdate:page":g,"page-slot":T(x).state.collapsedRight?5:8,"page-count":b.value},null,8,["page","page-slot","page-count"])])):$("",!0)])}}});const ia=Ee(It,[["__scopeId","data-v-936146f2"]]);export{ia as default};