import{S as t,i as s,s as a,w as e,x as l,z as r,A as n,B as o,C as c,e as i,c as f,y as u,h,j as g,n as m,g as p,b as d,G as b,I as $,F as v,a as x,t as y,d as w,f as E,k as I,l as j,o as D,D as k,m as V,J as L,p as z,K as G,L as M,M as _}from"./client.ae4adeac.js";import{L as A,H as B}from"./Loader.82a533fc.js";function H(t,s,a){const e=t.slice();return e[11]=s[a],e[13]=a,e}function q(t){let s,a;return s=new A({props:{loading:!t[4]}}),{c(){e(s.$$.fragment)},l(t){l(s.$$.fragment,t)},m(t,e){r(s,t,e),a=!0},p(t,a){const e={};16&a&&(e.loading=!t[4]),s.$set(e)},i(t){a||(n(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){c(s,t)}}}function C(t){let s;return{c(){s=i("img"),this.h()},l(t){s=f(t,"IMG",{style:!0,class:!0}),this.h()},h(){u(s,"filter","blur(10px)"),h(s,"class","top-0 left-0 fixed h-screen w-screen object-cover")},m(a,e){g(a,s,e),t[6](s)},p:m,d(a){a&&p(s),t[6](null)}}}function F(t){let s,a,e=t[0],l=[];for(let s=0;s<e.length;s+=1)l[s]=N(H(t,e,s));const r=t=>o(l[t],1,1,()=>{l[t]=null});return{c(){s=i("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){s=f(t,"DIV",{class:!0});var a=d(s);for(let t=0;t<l.length;t+=1)l[t].l(a);a.forEach(p),this.h()},h(){h(s,"class","flex flex-wrap mt-60 mb-40 max-w-5xl px-4 mx-auto")},m(t,e){g(t,s,e);for(let t=0;t<l.length;t+=1)l[t].m(s,null);a=!0},p(t,a){if(1&a){let o;for(e=t[0],o=0;o<e.length;o+=1){const r=H(t,e,o);l[o]?(l[o].p(r,a),n(l[o],1)):(l[o]=N(r),l[o].c(),n(l[o],1),l[o].m(s,null))}for(L(),o=e.length;o<l.length;o+=1)r(o);$()}},i(t){if(!a){for(let t=0;t<e.length;t+=1)n(l[t]);a=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)o(l[t]);a=!1},d(t){t&&p(s),v(l,t)}}}function J(t){let s,a,m,b,$,v,y,E,j,D,k,V;return E=new B({props:{tags:t[11].tags,authors:t[11].authors,title:t[11].title}}),{c(){s=i("div"),a=i("a"),m=i("img"),v=x(),y=i("div"),e(E.$$.fragment),D=x(),this.h()},l(t){s=f(t,"DIV",{class:!0});var e=d(s);a=f(e,"A",{href:!0,class:!0,rel:!0});var r=d(a);m=f(r,"IMG",{style:!0,class:!0,src:!0,alt:!0}),v=w(r),y=f(r,"DIV",{class:!0});var n=d(y);l(E.$$.fragment,n),n.forEach(p),r.forEach(p),D=w(e),e.forEach(p),this.h()},h(){u(m,"filter","blur(5px)"),h(m,"class","rounded-lg object-cover w-full h-full absolute"),m.src!==(b=t[11].feature_image.small)&&h(m,"src",b),h(m,"alt",$=t[11].title),h(y,"class","w-full grid items-end bg-black rounded-lg bg-opacity-85\n                  relative z-20"),h(a,"href",j="/posts/"+t[11].slug),h(a,"class","bg-black bg-opacity-85 rounded-lg relative h-full flex"),h(a,"rel","prefetch"),h(s,"class","relative w-full sm:w-1/2 border-transparent border-8")},m(t,e){g(t,s,e),I(s,a),I(a,m),I(a,v),I(a,y),r(E,y,null),I(s,D),V=!0},p(t,s){(!V||1&s&&m.src!==(b=t[11].feature_image.small))&&h(m,"src",b),(!V||1&s&&$!==($=t[11].title))&&h(m,"alt",$);const e={};1&s&&(e.tags=t[11].tags),1&s&&(e.authors=t[11].authors),1&s&&(e.title=t[11].title),E.$set(e),(!V||1&s&&j!==(j="/posts/"+t[11].slug))&&h(a,"href",j)},i(t){V||(n(E.$$.fragment,t),G(()=>{k||(k=M(s,_,{},!0)),k.run(1)}),V=!0)},o(t){o(E.$$.fragment,t),k||(k=M(s,_,{},!1)),k.run(0),V=!1},d(t){t&&p(s),c(E),t&&k&&k.end()}}}function K(t){let s,a,m,b,$,v,y,E,j,D,k,V;return E=new B({props:{tags:t[11].tags,authors:t[11].authors,title:t[11].title}}),{c(){s=i("div"),a=i("a"),m=i("img"),v=x(),y=i("div"),e(E.$$.fragment),D=x(),this.h()},l(t){s=f(t,"DIV",{class:!0});var e=d(s);a=f(e,"A",{href:!0,class:!0,rel:!0});var r=d(a);m=f(r,"IMG",{style:!0,class:!0,src:!0,alt:!0}),v=w(r),y=f(r,"DIV",{class:!0});var n=d(y);l(E.$$.fragment,n),n.forEach(p),r.forEach(p),D=w(e),e.forEach(p),this.h()},h(){u(m,"filter","blur(5px)"),h(m,"class","rounded-lg object-cover w-full h-full absolute"),m.src!==(b=t[11].feature_image.small)&&h(m,"src",b),h(m,"alt",$=t[11].title),h(y,"class","w-full grid items-end bg-black rounded-lg bg-opacity-50\n                  relative z-20"),h(a,"href",j="/posts/"+t[11].slug),h(a,"class","bg-black bg-opacity-50 rounded-lg relative h-full flex"),h(a,"rel","prefetch"),h(s,"class","relative w-full border-transparent border-8")},m(t,e){g(t,s,e),I(s,a),I(a,m),I(a,v),I(a,y),r(E,y,null),I(s,D),V=!0},p(t,s){(!V||1&s&&m.src!==(b=t[11].feature_image.small))&&h(m,"src",b),(!V||1&s&&$!==($=t[11].title))&&h(m,"alt",$);const e={};1&s&&(e.tags=t[11].tags),1&s&&(e.authors=t[11].authors),1&s&&(e.title=t[11].title),E.$set(e),(!V||1&s&&j!==(j="/posts/"+t[11].slug))&&h(a,"href",j)},i(t){V||(n(E.$$.fragment,t),G(()=>{k||(k=M(s,_,{},!0)),k.run(1)}),V=!0)},o(t){o(E.$$.fragment,t),k||(k=M(s,_,{},!1)),k.run(0),V=!1},d(t){t&&p(s),c(E),t&&k&&k.end()}}}function N(t){let s,a,e,l;const r=[K,J],c=[];return s=function(t,s){return t[13]%3==0?0:1}(t),a=c[s]=r[s](t),{c(){a.c(),e=b()},l(t){a.l(t),e=b()},m(t,a){c[s].m(t,a),g(t,e,a),l=!0},p(t,s){a.p(t,s)},i(t){l||(n(a),l=!0)},o(t){o(a),l=!1},d(t){c[s].d(t),t&&p(e)}}}function S(t){let s,a,e,l,r,c,u,m,b,v,D,k,V,z=!t[4]&&q(t),G=t[2]&&C(t),M=t[4]&&F(t);return{c(){z&&z.c(),s=x(),a=i("div"),G&&G.c(),e=x(),l=i("div"),r=x(),c=i("h1"),u=y("from the "),m=i("b"),b=y(t[1]),v=y(" team"),D=x(),M&&M.c(),this.h()},l(n){z&&z.l(n),s=w(n),a=f(n,"DIV",{class:!0});var o=d(a);G&&G.l(o),e=w(o),l=f(o,"DIV",{class:!0}),d(l).forEach(p),r=w(o),c=f(o,"H1",{class:!0});var i=d(c);u=E(i,"from the "),m=f(i,"B",{class:!0});var h=d(m);b=E(h,t[1]),h.forEach(p),v=E(i," team"),i.forEach(p),D=w(o),M&&M.l(o),o.forEach(p),this.h()},h(){h(l,"class","top-0 left-0 fixed w-screen h-screen bg-opacity-25 bg-black pt-20"),h(m,"class","capitalize"),h(c,"class","text-white text-4xl bg-black font-hairline fixed top-0 right-0 py-2\n      px-4 w-screen text-right bg-opacity-75 z-30"),h(a,"class",k=(t[4]?"opacity-100":"opacity-0")+" duration-200 transition-opacity")},m(t,n){z&&z.m(t,n),g(t,s,n),g(t,a,n),G&&G.m(a,null),I(a,e),I(a,l),I(a,r),I(a,c),I(c,u),I(c,m),I(m,b),I(c,v),I(a,D),M&&M.m(a,null),V=!0},p(t,[l]){t[4]?z&&(L(),o(z,1,1,()=>{z=null}),$()):z?(z.p(t,l),16&l&&n(z,1)):(z=q(t),z.c(),n(z,1),z.m(s.parentNode,s)),t[2]?G?G.p(t,l):(G=C(t),G.c(),G.m(a,e)):G&&(G.d(1),G=null),(!V||2&l)&&j(b,t[1]),t[4]?M?(M.p(t,l),16&l&&n(M,1)):(M=F(t),M.c(),n(M,1),M.m(a,null)):M&&(L(),o(M,1,1,()=>{M=null}),$()),(!V||16&l&&k!==(k=(t[4]?"opacity-100":"opacity-0")+" duration-200 transition-opacity"))&&h(a,"class",k)},i(t){V||(n(z),n(M),V=!0)},o(t){o(z),o(M),V=!1},d(t){z&&z.d(t),t&&p(s),t&&p(a),G&&G.d(),M&&M.d()}}}function O({path:t,params:s,query:a}){return this.fetch(`teams/${s.slug}.json`).then(t=>t.json()).then(({posts:t,team:s,image:a})=>({posts:t,team:s,image:a}))}function P(t,s,a){let e,l,{posts:r}=s,{team:n}=s,{image:o}=s;const c=t=>{a(4,i=!0),l&&l.removeEventListener("load",c)};D(()=>{l&&o?(l.addEventListener("load",c),a(3,l.src=o.small,l)):a(4,i=!0)});let i=!1;const{preloading:f,page:u,session:h}=k();return V(t,f,t=>a(7,e=t)),t.$set=t=>{"posts"in t&&a(0,r=t.posts),"team"in t&&a(1,n=t.team),"image"in t&&a(2,o=t.image)},t.$$.update=()=>{140&t.$$.dirty&&!e&&l&&o&&(l.addEventListener("load",c),a(3,l.src=o.small,l))},[r,n,o,l,i,f,function(t){z[t?"unshift":"push"](()=>{l=t,a(3,l),a(7,e),a(2,o)})}]}export default class extends t{constructor(t){super(),s(this,t,P,S,a,{posts:0,team:1,image:2})}}export{O as preload};
