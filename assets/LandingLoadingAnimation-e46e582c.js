import{r as l,g as h,_ as p,h as f,o as m,c as _,j as y,u as v,k as g,a as w,b as k,f as C,l as A,n as L}from"./app-5864f8be.js";function R(s=void 0,a=void 0){const o=l(0),n=l(0);return a??(a=i=>{i.forEach(e=>{o.value=e.contentRect.width,n.value=e.contentRect.height})}),{...h(ResizeObserver,a,{root:s}),width:o,height:n}}const b={__name:"AppCoverContainer",props:{fit:{type:Boolean,default:!1},aspect:{type:Number,default:1}},setup(s){const a=s,o=l(),n=l(),r=l(),i=f(()=>{var t,c,u,d;return isNaN((t=n.value)==null?void 0:t.value)||isNaN((c=r.value)==null?void 0:c.value)||((u=n.value)==null?void 0:u.value)/((d=r.value)==null?void 0:d.value)<a.aspect}),e=f(()=>a.fit?"h-full w-full":i.value?"h-full w-auto min-w-max":"w-full");{const{width:t,height:c}=R(o);n.value=t,r.value=c}return(t,c)=>(m(),_("div",{ref_key:"root",ref:o,class:"flex flex-row items-center justify-center overflow-hidden"},[y(t.$slots,"default",{classInner:v(e)})],512))}},x=p(b,[["__file","/home/runner/work/sharkcompany-frontend/sharkcompany-frontend/src/components/App/AppCoverContainer.vue"]]),B={__name:"LandingLoadingAnimation",props:{data:{type:Object,required:!0},addReverse:{type:Boolean,default:!1},fullPage:{type:Boolean,default:!1}},emits:["complete"],setup(s,{emit:a}){const o=s,n=l();let r=!1;return g(async()=>{const{default:i}=await w(()=>import("./lottie-05218004.js").then(t=>t.l),[]),e=i.loadAnimation({container:n.value,renderer:"svg",loop:!1,autoplay:!0,animationData:o.data});e.addEventListener("complete",()=>{if(!o.addReverse){a("complete");return}if(r){a("complete");return}r=!0,e.setSpeed(2),e.setDirection(-1),e.play()})}),(i,e)=>(m(),k(v(x),{fit:!s.fullPage},{default:C(({classInner:t})=>[A("div",{ref_key:"animationContainer",ref:n,class:L(t)},null,2)]),_:1},8,["fit"]))}},N=p(B,[["__file","/home/runner/work/sharkcompany-frontend/sharkcompany-frontend/src/components/Landing/LandingLoadingAnimation.vue"]]);export{N as default};
