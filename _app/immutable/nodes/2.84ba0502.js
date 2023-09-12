import{f as N,s as rt,n as et,h as nt}from"../chunks/scheduler.5eba7d9c.js";import{S as at,i as it,g as y,s as j,m as _,h as k,j as P,y as Y,c as E,n as b,f as T,k as x,a as z,x as o,z as J,A as ot,B as st,o as K,d as A,t as O,b as Q,C as U,p as X}from"../chunks/index.ff581f26.js";function lt(c){const t=c-1;return t*t*t+1}function D(c,{delay:t=0,duration:s=400,easing:a=lt,x:f=0,y:e=0,opacity:r=0}={}){const n=getComputedStyle(c),i=+n.opacity,d=n.transform==="none"?"":n.transform,L=i*(1-r),[v,M]=N(f),[C,H]=N(e);return{delay:t,duration:s,easing:a,css:(g,S)=>`
			transform: ${d} translate(${(1-g)*v}${M}, ${(1-g)*C}${H});
			opacity: ${i-L*S}`}}function Z(c){let t,s,a,f,e,r;return{c(){t=y("p"),s=_("The timer can't count faster than "),a=_(w),f=_(" ticks"),this.h()},l(n){t=k(n,"P",{class:!0});var i=P(t);s=b(i,"The timer can't count faster than "),a=b(i,w),f=b(i," ticks"),i.forEach(T),this.h()},h(){x(t,"class","text-black bg-red-400 w-64 rounded-lg p-2 text-center border-red-800 border")},m(n,i){z(n,t,i),o(t,s),o(t,a),o(t,f),r=!0},p:et,i(n){r||(n&&nt(()=>{r&&(e||(e=U(t,D,{y:10,duration:100},!0)),e.run(1))}),r=!0)},o(n){n&&(e||(e=U(t,D,{y:10,duration:100},!1)),e.run(0)),r=!1},d(n){n&&T(t),n&&e&&e.end()}}}function $(c){let t,s,a,f,e,r;return{c(){t=y("p"),s=_("The timer can't count past "),a=_(q),f=_(" ticks, try increasing the golem count"),this.h()},l(n){t=k(n,"P",{class:!0});var i=P(t);s=b(i,"The timer can't count past "),a=b(i,q),f=b(i," ticks, try increasing the golem count"),i.forEach(T),this.h()},h(){x(t,"class","text-black bg-red-400 w-64 rounded-lg p-2 text-center border border-red-800")},m(n,i){z(n,t,i),o(t,s),o(t,a),o(t,f),r=!0},p:et,i(n){r||(n&&nt(()=>{r&&(e||(e=U(t,D,{y:10,duration:100},!0)),e.run(1))}),r=!0)},o(n){n&&(e||(e=U(t,D,{y:10,duration:100},!1)),e.run(0)),r=!1},d(n){n&&T(t),n&&e&&e.end()}}}function ut(c){let t,s,a='<div class="h-14 bg-blue-500 grid place-content-center"><h1 class="text-white text-center text-4xl font-semibold sans font-sans">LIGMA Config Tool</h1></div>',f,e,r,n="How long you want the timer to run (ticks)",i,d,L,v,M,C,H,g,S,B,I,F,R,G,l=c[3]&&Z(),u=c[4]&&$();return{c(){t=y("body"),s=y("header"),s.innerHTML=a,f=j(),e=y("form"),r=y("label"),r.textContent=n,i=j(),d=y("input"),L=j(),v=y("p"),M=_("Coarse adjust: "),C=_(c[1]),H=j(),g=y("p"),S=_("Fine adjust: "),B=_(c[2]),I=j(),l&&l.c(),F=j(),u&&u.c(),this.h()},l(m){t=k(m,"BODY",{class:!0});var p=P(t);s=k(p,"HEADER",{"data-svelte-h":!0}),Y(s)!=="svelte-1lxuhb3"&&(s.innerHTML=a),f=E(p),e=k(p,"FORM",{class:!0});var h=P(e);r=k(h,"LABEL",{for:!0,"data-svelte-h":!0}),Y(r)!=="svelte-1jnm3eh"&&(r.textContent=n),i=E(h),d=k(h,"INPUT",{type:!0,name:!0,id:!0}),L=E(h),v=k(h,"P",{});var V=P(v);M=b(V,"Coarse adjust: "),C=b(V,c[1]),V.forEach(T),H=E(h),g=k(h,"P",{});var W=P(g);S=b(W,"Fine adjust: "),B=b(W,c[2]),W.forEach(T),I=E(h),l&&l.l(h),F=E(h),u&&u.l(h),h.forEach(T),p.forEach(T),this.h()},h(){x(r,"for","time"),x(d,"type","number"),x(d,"name","time"),x(d,"id","timerTime"),x(e,"class","grid grid-cols-1 place-items-center gap-y-1 mt-4"),x(t,"class","min-h-screen bg-orange-200")},m(m,p){z(m,t,p),o(t,s),o(t,f),o(t,e),o(e,r),o(e,i),o(e,d),J(d,c[0]),o(e,L),o(e,v),o(v,M),o(v,C),o(e,H),o(e,g),o(g,S),o(g,B),o(e,I),l&&l.m(e,null),o(e,F),u&&u.m(e,null),R||(G=ot(d,"input",c[5]),R=!0)},p(m,[p]){p&1&&st(d.value)!==m[0]&&J(d,m[0]),p&2&&K(C,m[1]),p&4&&K(B,m[2]),m[3]?l?(l.p(m,p),p&8&&A(l,1)):(l=Z(),l.c(),A(l,1),l.m(e,F)):l&&(X(),O(l,1,1,()=>{l=null}),Q()),m[4]?u?(u.p(m,p),p&16&&A(u,1)):(u=$(),u.c(),A(u,1),u.m(e,null)):u&&(X(),O(u,1,1,()=>{u=null}),Q())},i(m){A(l),A(u)},o(m){O(l),O(u)},d(m){m&&T(t),l&&l.d(),u&&u.d(),R=!1,G()}}}const w=63,q=72e3,tt=28;function ct(c,t,s){let a=w,f=1,e=1,r=!1,n=!1;function i(){a=st(this.value),s(0,a)}return c.$$.update=()=>{c.$$.dirty&1&&(a<0&&s(0,a=0),a<w?s(3,r=!0):s(3,r=!1),a>q?s(4,n=!0):s(4,n=!1),s(1,f=Math.floor((a-w)/tt)+1),s(2,e=(a-w)%tt+1))},[a,f,e,r,n,i]}class pt extends at{constructor(t){super(),it(this,t,ct,ut,rt,{})}}export{pt as component};
