import{h as r}from"./moment-b7869f98.js";r.locale("zh-cn");const n=o=>r.unix(o).fromNow(),a=(o,e)=>{if(e)return r.unix(o).fromNow();let t=r.unix(o),m=r();return t.year()!=m.year()?t.utc(!0).format("YYYY-MM-DD HH:mm"):r().diff(t,"month")>3?t.utc(!0).format("MM-DD HH:mm"):t.fromNow()};export{n as a,a as f};