import{R as m,x as k,o as r,b as g,f as p,j as y,y as _,u as s,_ as h,r as A,h as f,c as u,e as d,z as $,A as C,v as L,l as w,n as l,F as x,B as N,C as z,D as H,E as B,p as S,G as b,H as E}from"./app-4fb1f6f8.js";const V={__name:"AppLinkHash",props:{...m.props,exactActiveHashClass:{type:String,default:void 0}},setup(n){const o=n,{route:e,isExactActive:a}=k(o);return(t,c)=>(r(),g(s(m),_(o,{class:{[n.exactActiveHashClass]:s(a)&&t.$route.hash===s(e).hash}}),{default:p(i=>[y(t.$slots,"default",_(i,{isExactActiveHash:s(a)&&t.$route.hash===s(e).hash}))]),_:3},16,["class"]))}},D=h(V,[["__file","/home/runner/work/sharkcompany-frontend/sharkcompany-frontend/src/components/App/AppLinkHash.vue"]]),I={__name:"AppLogo",props:{size:{type:[String,Number],default:"xl"}},setup(n){const o=.8372093023255814,e=A(),a=f(()=>e.value?e.value/3:0),t=f(()=>e.value?e.value*o:void 0);return(c,i)=>(r(),u("div",{style:L({padding:`${s(a)}px`})},[d(s(C),{"actual-height":e.value,"onUpdate:actualHeight":i[0]||(i[0]=v=>e.value=v),icon:s($).LOGO,width:s(t),size:n.size},null,8,["actual-height","icon","width","size"])],4))}},M=h(I,[["__file","/home/runner/work/sharkcompany-frontend/sharkcompany-frontend/src/components/App/AppLogo.vue"]]),F="_landingNav_421pa_1",G="_link_421pa_5",O="_text_421pa_9",R="_isActive_421pa_13",T="_logoContainer_421pa_25",j={landingNav:F,link:G,text:O,isActive:R,logoContainer:T},P={__name:"LandingNav",props:{items:{type:Array,default:()=>[]}},setup(n){const o=e=>{var a;(a=document.getElementById(e))==null||a.scrollIntoView({behavior:"smooth",block:"center"})};return(e,a)=>(r(),u("div",{class:l(e.$style.landingNav)},[w("div",{class:l(e.$style.logoContainer)},[d(s(M),{class:"flex-none",size:43})],2),(r(!0),u(x,null,N(n.items,({text:t,id:c,hidden:i})=>z((r(),g(s(D),{key:c,to:{name:e.$route.name,hash:`#${c}`},class:l(e.$style.link),"exact-active-hash-class":e.$style.isActive,onClickCapture:E(v=>o(c),["stop","prevent"])},{default:p(()=>[d(s(B),{weight:"bold",tag:"div",size:"sm",class:l(e.$style.text)},{default:p(()=>[S(b(t),1)]),_:2},1032,["class"])]),_:2},1032,["to","class","exact-active-hash-class","onClickCapture"])),[[H,!i]])),128))],2))}},U={$style:j},J=h(P,[["__cssModules",U],["__file","/home/runner/work/sharkcompany-frontend/sharkcompany-frontend/src/layout/LandingNav.vue"]]);export{J as default};
