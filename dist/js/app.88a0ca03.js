(function(t){function e(e){for(var o,u,a=e[0],i=e[1],b=e[2],s=0,d=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,b||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},c=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var b=0;b<a.length;b++)e(a[b]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0300":function(t,e,n){},4976:function(t,e,n){"use strict";n("b8a1")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},c=Object(o["f"])("Home"),u=Object(o["f"])(" | "),a=Object(o["f"])("About"),i=Object(o["f"])("Jobs");function b(t,e,n,b,l,s){var d=Object(o["u"])("router-link"),f=Object(o["u"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",r,[Object(o["g"])(d,{to:"/"},{default:Object(o["z"])((function(){return[c]})),_:1}),u,Object(o["g"])(d,{to:{name:"About"}},{default:Object(o["z"])((function(){return[a]})),_:1}),Object(o["g"])(d,{to:{name:"Jobs"}},{default:Object(o["z"])((function(){return[i]})),_:1})]),Object(o["e"])("button",{onClick:e[0]||(e[0]=function(){return s.redirect&&s.redirect.apply(s,arguments)})},"Redirect"),Object(o["e"])("button",{onClick:e[1]||(e[1]=function(){return s.back&&s.back.apply(s,arguments)})},"Back"),Object(o["e"])("button",{onClick:e[2]||(e[2]=function(){return s.forward&&s.forward.apply(s,arguments)})},"Forward"),Object(o["g"])(f)],64)}var l={methods:{redirect:function(){this.$router.push({name:"Home"})},back:function(){this.$router.go(-1)},forward:function(){this.$router.go(1)}}},s=(n("dbef"),n("6b0d")),d=n.n(s);const f=d()(l,[["render",b]]);var p=f,j=n("6c02"),O={class:"home"},h=Object(o["e"])("h1",null,"Homepage",-1),v=Object(o["e"])("p",null,"Welcome!",-1),m=[h,v];function g(t,e,n,r,c,u){return Object(o["p"])(),Object(o["d"])("div",O,m)}var y={name:"Home",components:{}};const w=d()(y,[["render",g]]);var k=w,_={class:"about"},J=Object(o["e"])("h2",null,"This is a page where you can find jobs",-1),P=Object(o["e"])("p",null,"This page was created in November 2021",-1),x=[J,P];function S(t,e){return Object(o["p"])(),Object(o["d"])("div",_,x)}const H={},z=d()(H,[["render",S]]);var A=z,M=Object(o["e"])("h1",null,"Jobs",-1),T={key:0},C=Object(o["f"])("¨ "),$={key:1},D=Object(o["e"])("p",null,"Loading jobs, wait a seconds ...",-1),F=[D];function L(t,e,n,r,c,u){var a=Object(o["u"])("router-link");return Object(o["p"])(),Object(o["d"])(o["a"],null,[M,c.jobs.length?(Object(o["p"])(),Object(o["d"])("div",T,[C,(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(c.jobs,(function(t){return Object(o["p"])(),Object(o["d"])("div",{key:t.id,class:"job"},[Object(o["g"])(a,{to:{name:"JobDetails",params:{id:t.id}}},{default:Object(o["z"])((function(){return[Object(o["e"])("h2",null,Object(o["w"])(t.title),1)]})),_:2},1032,["to"])])})),128))])):(Object(o["p"])(),Object(o["d"])("div",$,F))],64)}n("d3b7");var N={data:function(){return{jobs:[]}},mounted:function(){var t=this;fetch("https://api.npoint.io/7cdd4026123b37fb2338").then((function(t){return t.json()})).then((function(e){return t.jobs=e})).catch((function(t){return console.log(t.message)}))}};n("4976");const B=d()(N,[["render",L]]);var R=B,W={key:0},q={key:1},E=Object(o["e"])("p",null,"Loading details, wait a second ...",-1),G=[E];function I(t,e,n,r,c,u){return c.job?(Object(o["p"])(),Object(o["d"])("div",W,[Object(o["e"])("h1",null,Object(o["w"])(c.job.title),1),Object(o["e"])("p",null,Object(o["w"])(c.job.details),1)])):(Object(o["p"])(),Object(o["d"])("div",q,G))}var K={props:["id"],data:function(){return{job:null}},mounted:function(){var t=this;fetch("https://api.npoint.io/7cdd4026123b37fb2338/"+this.id).then((function(t){return t.json()})).then((function(e){return t.job=e})).catch((function(t){return console.log(t.message)}))}};n("d24c");const Q=d()(K,[["render",I]]);var U=Q,V=Object(o["e"])("h2",null,"404",-1),X=Object(o["e"])("h3",null,"Sorry, page not found",-1);function Y(t,e){return Object(o["p"])(),Object(o["d"])(o["a"],null,[V,X],64)}const Z={},tt=d()(Z,[["render",Y]]);var et=tt,nt=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:A},{path:"/jobs",name:"Jobs",component:R},{path:"/jobs/:id",name:"JobDetails",component:U,props:!0},{path:"/:catchAll(.*)",name:"NotFound",component:et}],ot=Object(j["a"])({history:Object(j["b"])("/"),routes:nt}),rt=ot;Object(o["c"])(p).use(rt).mount("#app")},"859e":function(t,e,n){},b8a1:function(t,e,n){},d24c:function(t,e,n){"use strict";n("859e")},dbef:function(t,e,n){"use strict";n("0300")}});
//# sourceMappingURL=app.88a0ca03.js.map