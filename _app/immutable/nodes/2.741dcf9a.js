import{f as Pt,s as Ut,r as wt,n as It,h as Mt}from"../chunks/scheduler.5eba7d9c.js";import{S as Bt,i as Ht,g as d,s as v,m as T,h,j as L,y as at,c as y,n as C,f as E,k as c,a as Ct,x as e,z as A,A as tt,B as X,o as it,d as Q,t as lt,b as Yt,C as ot,p as jt}from"../chunks/index.ff581f26.js";function Nt(s){const t=s-1;return t*t*t+1}function ut(s,{delay:t=0,duration:a=400,easing:f=Nt,x:g=0,y:n=0,opacity:l=0}={}){const r=getComputedStyle(s),o=+r.opacity,_=r.transform==="none"?"":r.transform,Y=o*(1-l),[k,I]=Pt(g),[M,S]=Pt(n);return{delay:t,duration:a,easing:f,css:(P,V)=>`
			transform: ${_} translate(${(1-P)*k}${I}, ${(1-P)*M}${S});
			opacity: ${o-Y*V}`}}function At(s){let t,a,f,g,n,l;return{c(){t=d("p"),a=T("The timer can't count faster than "),f=T(Z),g=T(" ticks"),this.h()},l(r){t=h(r,"P",{class:!0});var o=L(t);a=C(o,"The timer can't count faster than "),f=C(o,Z),g=C(o," ticks"),o.forEach(E),this.h()},h(){c(t,"class","text-black bg-red-400 w-64 rounded-lg p-2 text-center border-red-800 border")},m(r,o){Ct(r,t,o),e(t,a),e(t,f),e(t,g),l=!0},p:It,i(r){l||(r&&Mt(()=>{l&&(n||(n=ot(t,ut,{y:10,duration:100},!0)),n.run(1))}),l=!0)},o(r){r&&(n||(n=ot(t,ut,{y:10,duration:100},!1)),n.run(0)),l=!1},d(r){r&&E(t),r&&n&&n.end()}}}function Lt(s){let t,a,f,g,n,l;return{c(){t=d("p"),a=T("The timer can't count past "),f=T(Tt),g=T(" ticks, try increasing the golem count"),this.h()},l(r){t=h(r,"P",{class:!0});var o=L(t);a=C(o,"The timer can't count past "),f=C(o,Tt),g=C(o," ticks, try increasing the golem count"),o.forEach(E),this.h()},h(){c(t,"class","text-black bg-red-400 w-64 rounded-lg p-2 text-center border border-red-800")},m(r,o){Ct(r,t,o),e(t,a),e(t,f),e(t,g),l=!0},p:It,i(r){l||(r&&Mt(()=>{l&&(n||(n=ot(t,ut,{y:10,duration:100},!0)),n.run(1))}),l=!0)},o(r){r&&(n||(n=ot(t,ut,{y:10,duration:100},!1)),n.run(0)),l=!1},d(r){r&&E(t),r&&n&&n.end()}}}function Ft(s){let t,a,f='<div class="h-14 bg-blue-500 grid place-content-center"><h1 class="text-white text-center text-4xl font-semibold sans font-sans">LIGMA Config Tool</h1></div>',g,n,l,r="How long you want the timer to run (ticks)",o,_,Y,k,I,M,S,P,V,K,x,N,W,q,z,b,G,kt="What is the coordinates of the launcher (blue glass)",ft,F,U,ct,w,pt,J,Et="What is the coordinates of the center of the catching area",mt,O,B,dt,H,ht,R,_t,et,gt,nt,bt,Dt,p=s[8]&&At(),m=s[9]&&Lt();return{c(){t=d("body"),a=d("header"),a.innerHTML=f,g=v(),n=d("form"),l=d("label"),l.textContent=r,o=v(),_=d("input"),Y=v(),k=d("p"),I=T("Coarse adjust: "),M=T(s[6]),S=v(),P=d("p"),V=T("Fine adjust: "),K=T(s[7]),x=v(),p&&p.c(),N=v(),m&&m.c(),W=v(),q=d("hr"),z=v(),b=d("form"),G=d("label"),G.textContent=kt,ft=v(),F=d("div"),U=d("input"),ct=v(),w=d("input"),pt=v(),J=d("label"),J.textContent=Et,mt=v(),O=d("div"),B=d("input"),dt=v(),H=d("input"),ht=v(),R=d("p"),_t=T("You need X: "),et=T(s[5]),gt=T(" Y: "),nt=T(s[10]),this.h()},l(i){t=h(i,"BODY",{class:!0});var u=L(t);a=h(u,"HEADER",{"data-svelte-h":!0}),at(a)!=="svelte-1lxuhb3"&&(a.innerHTML=f),g=y(u),n=h(u,"FORM",{class:!0});var D=L(n);l=h(D,"LABEL",{for:!0,"data-svelte-h":!0}),at(l)!=="svelte-1jnm3eh"&&(l.textContent=r),o=y(D),_=h(D,"INPUT",{type:!0,name:!0,id:!0}),Y=y(D),k=h(D,"P",{});var vt=L(k);I=C(vt,"Coarse adjust: "),M=C(vt,s[6]),vt.forEach(E),S=y(D),P=h(D,"P",{});var yt=L(P);V=C(yt,"Fine adjust: "),K=C(yt,s[7]),yt.forEach(E),x=y(D),p&&p.l(D),N=y(D),m&&m.l(D),D.forEach(E),W=y(u),q=h(u,"HR",{class:!0}),z=y(u),b=h(u,"FORM",{class:!0});var j=L(b);G=h(j,"LABEL",{for:!0,"data-svelte-h":!0}),at(G)!=="svelte-nsb7sp"&&(G.textContent=kt),ft=y(j),F=h(j,"DIV",{class:!0});var rt=L(F);U=h(rt,"INPUT",{type:!0,name:!0}),ct=y(rt),w=h(rt,"INPUT",{type:!0,name:!0}),rt.forEach(E),pt=y(j),J=h(j,"LABEL",{for:!0,"data-svelte-h":!0}),at(J)!=="svelte-1rlssnd"&&(J.textContent=Et),mt=y(j),O=h(j,"DIV",{class:!0});var st=L(O);B=h(st,"INPUT",{type:!0,name:!0}),dt=y(st),H=h(st,"INPUT",{type:!0,name:!0}),st.forEach(E),ht=y(j),R=h(j,"P",{});var $=L(R);_t=C($,"You need X: "),et=C($,s[5]),gt=C($," Y: "),nt=C($,s[10]),$.forEach(E),j.forEach(E),u.forEach(E),this.h()},h(){c(l,"for","time"),c(_,"type","number"),c(_,"name","time"),c(_,"id","timerTime"),c(n,"class","grid grid-cols-1 place-items-center gap-y-1 mt-4"),c(q,"class","w-4/5 mx-auto bg-black border border-slate-600 mt-2"),c(G,"for","originX"),c(U,"type","number"),c(U,"name","originX"),c(w,"type","number"),c(w,"name","originY"),c(F,"class","grid grid-cols-2 gap-2"),c(J,"for","originX"),c(B,"type","number"),c(B,"name","destX"),c(H,"type","number"),c(H,"name","destY"),c(O,"class","grid grid-cols-2 gap-2"),c(b,"class","grid grid-cols-1 place-items-center gap-y-1 mt-4"),c(t,"class","min-h-screen bg-orange-200")},m(i,u){Ct(i,t,u),e(t,a),e(t,g),e(t,n),e(n,l),e(n,o),e(n,_),A(_,s[0]),e(n,Y),e(n,k),e(k,I),e(k,M),e(n,S),e(n,P),e(P,V),e(P,K),e(n,x),p&&p.m(n,null),e(n,N),m&&m.m(n,null),e(t,W),e(t,q),e(t,z),e(t,b),e(b,G),e(b,ft),e(b,F),e(F,U),A(U,s[1]),e(F,ct),e(F,w),A(w,s[2]),e(b,pt),e(b,J),e(b,mt),e(b,O),e(O,B),A(B,s[3]),e(O,dt),e(O,H),A(H,s[4]),e(b,ht),e(b,R),e(R,_t),e(R,et),e(R,gt),e(R,nt),bt||(Dt=[tt(_,"input",s[11]),tt(U,"input",s[12]),tt(w,"input",s[13]),tt(B,"input",s[14]),tt(H,"input",s[15])],bt=!0)},p(i,[u]){u&1&&X(_.value)!==i[0]&&A(_,i[0]),u&64&&it(M,i[6]),u&128&&it(K,i[7]),i[8]?p?(p.p(i,u),u&256&&Q(p,1)):(p=At(),p.c(),Q(p,1),p.m(n,N)):p&&(jt(),lt(p,1,1,()=>{p=null}),Yt()),i[9]?m?(m.p(i,u),u&512&&Q(m,1)):(m=Lt(),m.c(),Q(m,1),m.m(n,null)):m&&(jt(),lt(m,1,1,()=>{m=null}),Yt()),u&2&&X(U.value)!==i[1]&&A(U,i[1]),u&4&&X(w.value)!==i[2]&&A(w,i[2]),u&8&&X(B.value)!==i[3]&&A(B,i[3]),u&16&&X(H.value)!==i[4]&&A(H,i[4]),u&32&&it(et,i[5]),u&1024&&it(nt,i[10])},i(i){Q(p),Q(m)},o(i){lt(p),lt(m)},d(i){i&&E(t),p&&p.d(),m&&m.d(),bt=!1,wt(Dt)}}}const Z=63,Tt=72e3,Xt=28,Ot=40;function Rt(s,t,a){let f=Z,g=1,n=1,l=!1,r=!1,o=0,_=0,Y=100,k=100,I=0,M=0;function S(){f=X(this.value),a(0,f)}function P(){o=X(this.value),a(1,o)}function V(){_=X(this.value),a(2,_)}function K(){Y=X(this.value),a(3,Y)}function x(){k=X(this.value),a(4,k)}return s.$$.update=()=>{if(s.$$.dirty&1&&(f<0&&a(0,f=0),f<Z?a(8,l=!0):a(8,l=!1),f>Tt?a(9,r=!0):a(9,r=!1),a(6,g=Math.floor((f-Z)/Xt)+1),a(7,n=(f-Z)%Xt+1)),s.$$.dirty&62){const N=o-Y,W=_-k,q=Math.sqrt(N*N+W*W);q<Ot&&console.log("Distance is too short");const z=W/N;a(5,I=q/.989/Math.sqrt(z*z+1)),a(10,M=I*z)}},[f,o,_,Y,k,I,g,n,l,r,M,S,P,V,K,x]}class Wt extends Bt{constructor(t){super(),Ht(this,t,Rt,Ft,Ut,{})}}export{Wt as component};