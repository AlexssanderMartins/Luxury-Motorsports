import{C as Be,S as Z,i as p,s as x,D as O,k as V,a as y,l as w,m as M,c as z,h as k,n,b as B,E as T,g as L,v as G,d as H,f as j,F as U,G as N,H as q,I as we,J as Q,K as W,L as J,M as X,q as $,r as ee,N as ye,e as Y,O as ce,P as ze,Q as Oe,R as ue,T as te,U as Ue,V as Ne,W as qe,y as ae,z as ie,A as oe,B as re,X as Ge,Y as je}from"../chunks/index.7cf8fd15.js";import{w as Je}from"../chunks/index.71f4be7d.js";const le={};function de(s){return s==="local"?localStorage:sessionStorage}function fe(s,e,l){const a=(l==null?void 0:l.serializer)??JSON,r=(l==null?void 0:l.storage)??"local",t=typeof window<"u"&&typeof document<"u";function i(o,_){t&&de(r).setItem(o,a.stringify(_))}if(!le[s]){const o=Je(e,c=>{const g=t?de(r).getItem(s):null;if(g&&c(a.parse(g)),t){const C=v=>{v.key===s&&c(v.newValue?a.parse(v.newValue):null)};return window.addEventListener("storage",C),()=>window.removeEventListener("storage",C)}}),{subscribe:_,set:h}=o;le[s]={set(c){i(s,c),h(c)},update(c){const g=c(Be(o));i(s,g),h(g)},subscribe:_}}return le[s]}fe("modeOsPrefers",!1);const Ke=fe("modeUserPrefers",void 0),se=fe("modeCurrent",!1);function Qe(s){Ke.set(s)}function We(s){const e=document.documentElement.classList,l="dark";s===!0?e.remove(l):e.add(l),se.set(s)}function Xe(){const s=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",l=!("modeUserPrefers"in localStorage),a=window.matchMedia("(prefers-color-scheme: dark)").matches;e||l&&a?s.add("dark"):s.remove("dark")}const Ye=s=>({}),he=s=>({}),Ze=s=>({}),ge=s=>({}),pe=s=>({}),_e=s=>({});function me(s){let e,l,a;const r=s[22].lead,t=O(r,s,s[21],_e);return{c(){e=V("div"),t&&t.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var o=M(e);t&&t.l(o),o.forEach(k),this.h()},h(){n(e,"class",l="app-bar-slot-lead "+s[4])},m(i,o){B(i,e,o),t&&t.m(e,null),a=!0},p(i,o){t&&t.p&&(!a||o&2097152)&&U(t,r,i,i[21],a?q(r,i[21],o,pe):N(i[21]),_e),(!a||o&16&&l!==(l="app-bar-slot-lead "+i[4]))&&n(e,"class",l)},i(i){a||(L(t,i),a=!0)},o(i){H(t,i),a=!1},d(i){i&&k(e),t&&t.d(i)}}}function be(s){let e,l,a;const r=s[22].trail,t=O(r,s,s[21],ge);return{c(){e=V("div"),t&&t.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var o=M(e);t&&t.l(o),o.forEach(k),this.h()},h(){n(e,"class",l="app-bar-slot-trail "+s[2])},m(i,o){B(i,e,o),t&&t.m(e,null),a=!0},p(i,o){t&&t.p&&(!a||o&2097152)&&U(t,r,i,i[21],a?q(r,i[21],o,Ze):N(i[21]),ge),(!a||o&4&&l!==(l="app-bar-slot-trail "+i[2]))&&n(e,"class",l)},i(i){a||(L(t,i),a=!0)},o(i){H(t,i),a=!1},d(i){i&&k(e),t&&t.d(i)}}}function ke(s){let e,l,a;const r=s[22].headline,t=O(r,s,s[21],he);return{c(){e=V("div"),t&&t.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var o=M(e);t&&t.l(o),o.forEach(k),this.h()},h(){n(e,"class",l="app-bar-row-headline "+s[5])},m(i,o){B(i,e,o),t&&t.m(e,null),a=!0},p(i,o){t&&t.p&&(!a||o&2097152)&&U(t,r,i,i[21],a?q(r,i[21],o,Ye):N(i[21]),he),(!a||o&32&&l!==(l="app-bar-row-headline "+i[5]))&&n(e,"class",l)},i(i){a||(L(t,i),a=!0)},o(i){H(t,i),a=!1},d(i){i&&k(e),t&&t.d(i)}}}function xe(s){let e,l,a,r,t,i,o,_,h,c,g=s[8].lead&&me(s);const C=s[22].default,v=O(C,s,s[21],null);let E=s[8].trail&&be(s),D=s[8].headline&&ke(s);return{c(){e=V("div"),l=V("div"),g&&g.c(),a=y(),r=V("div"),v&&v.c(),i=y(),E&&E.c(),_=y(),D&&D.c(),this.h()},l(f){e=w(f,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var u=M(e);l=w(u,"DIV",{class:!0});var b=M(l);g&&g.l(b),a=z(b),r=w(b,"DIV",{class:!0});var A=M(r);v&&v.l(A),A.forEach(k),i=z(b),E&&E.l(b),b.forEach(k),_=z(u),D&&D.l(u),u.forEach(k),this.h()},h(){n(r,"class",t="app-bar-slot-default "+s[3]),n(l,"class",o="app-bar-row-main "+s[6]),n(e,"class",h="app-bar "+s[7]),n(e,"data-testid","app-bar"),n(e,"role","toolbar"),n(e,"aria-label",s[0]),n(e,"aria-labelledby",s[1])},m(f,u){B(f,e,u),T(e,l),g&&g.m(l,null),T(l,a),T(l,r),v&&v.m(r,null),T(l,i),E&&E.m(l,null),T(e,_),D&&D.m(e,null),c=!0},p(f,[u]){f[8].lead?g?(g.p(f,u),u&256&&L(g,1)):(g=me(f),g.c(),L(g,1),g.m(l,a)):g&&(G(),H(g,1,1,()=>{g=null}),j()),v&&v.p&&(!c||u&2097152)&&U(v,C,f,f[21],c?q(C,f[21],u,null):N(f[21]),null),(!c||u&8&&t!==(t="app-bar-slot-default "+f[3]))&&n(r,"class",t),f[8].trail?E?(E.p(f,u),u&256&&L(E,1)):(E=be(f),E.c(),L(E,1),E.m(l,null)):E&&(G(),H(E,1,1,()=>{E=null}),j()),(!c||u&64&&o!==(o="app-bar-row-main "+f[6]))&&n(l,"class",o),f[8].headline?D?(D.p(f,u),u&256&&L(D,1)):(D=ke(f),D.c(),L(D,1),D.m(e,null)):D&&(G(),H(D,1,1,()=>{D=null}),j()),(!c||u&128&&h!==(h="app-bar "+f[7]))&&n(e,"class",h),(!c||u&1)&&n(e,"aria-label",f[0]),(!c||u&2)&&n(e,"aria-labelledby",f[1])},i(f){c||(L(g),L(v,f),L(E),L(D),c=!0)},o(f){H(g),H(v,f),H(E),H(D),c=!1},d(f){f&&k(e),g&&g.d(),v&&v.d(f),E&&E.d(),D&&D.d()}}}const $e="flex flex-col",el="grid items-center",ll="",tl="flex-none flex justify-between items-center",sl="flex-auto",al="flex-none flex items-center space-x-4";function il(s,e,l){let a,r,t,i,o,_,{$$slots:h={},$$scope:c}=e;const g=we(h);let{background:C="bg-surface-100-800-token"}=e,{border:v=""}=e,{padding:E="p-4"}=e,{shadow:D=""}=e,{spacing:f="space-y-4"}=e,{gridColumns:u="grid-cols-[auto_1fr_auto]"}=e,{gap:b="gap-4"}=e,{regionRowMain:A=""}=e,{regionRowHeadline:I=""}=e,{slotLead:R=""}=e,{slotDefault:F=""}=e,{slotTrail:m=""}=e,{label:S=""}=e,{labelledby:P=""}=e;return s.$$set=d=>{l(23,e=Q(Q({},e),W(d))),"background"in d&&l(9,C=d.background),"border"in d&&l(10,v=d.border),"padding"in d&&l(11,E=d.padding),"shadow"in d&&l(12,D=d.shadow),"spacing"in d&&l(13,f=d.spacing),"gridColumns"in d&&l(14,u=d.gridColumns),"gap"in d&&l(15,b=d.gap),"regionRowMain"in d&&l(16,A=d.regionRowMain),"regionRowHeadline"in d&&l(17,I=d.regionRowHeadline),"slotLead"in d&&l(18,R=d.slotLead),"slotDefault"in d&&l(19,F=d.slotDefault),"slotTrail"in d&&l(20,m=d.slotTrail),"label"in d&&l(0,S=d.label),"labelledby"in d&&l(1,P=d.labelledby),"$$scope"in d&&l(21,c=d.$$scope)},s.$$.update=()=>{l(7,a=`${$e} ${C} ${v} ${f} ${E} ${D} ${e.class??""}`),s.$$.dirty&114688&&l(6,r=`${el} ${u} ${b} ${A}`),s.$$.dirty&131072&&l(5,t=`${ll} ${I}`),s.$$.dirty&262144&&l(4,i=`${tl} ${R}`),s.$$.dirty&524288&&l(3,o=`${sl} ${F}`),s.$$.dirty&1048576&&l(2,_=`${al} ${m}`)},e=W(e),[S,P,_,o,i,t,r,a,g,C,v,E,D,f,u,b,A,I,R,F,m,c,h]}class ol extends Z{constructor(e){super(),p(this,e,il,xe,x,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const rl=s=>({}),ve=s=>({}),fl=s=>({}),Le=s=>({}),nl=s=>({}),Se=s=>({}),cl=s=>({}),Ee=s=>({}),ul=s=>({}),De=s=>({}),dl=s=>({}),He=s=>({});function Pe(s){let e,l,a;const r=s[18].header,t=O(r,s,s[17],He);return{c(){e=V("header"),t&&t.c(),this.h()},l(i){e=w(i,"HEADER",{id:!0,class:!0});var o=M(e);t&&t.l(o),o.forEach(k),this.h()},h(){n(e,"id","shell-header"),n(e,"class",l="flex-none "+s[7])},m(i,o){B(i,e,o),t&&t.m(e,null),a=!0},p(i,o){t&&t.p&&(!a||o&131072)&&U(t,r,i,i[17],a?q(r,i[17],o,dl):N(i[17]),He),(!a||o&128&&l!==(l="flex-none "+i[7]))&&n(e,"class",l)},i(i){a||(L(t,i),a=!0)},o(i){H(t,i),a=!1},d(i){i&&k(e),t&&t.d(i)}}}function Re(s){let e,l;const a=s[18].sidebarLeft,r=O(a,s,s[17],De);return{c(){e=V("aside"),r&&r.c(),this.h()},l(t){e=w(t,"ASIDE",{id:!0,class:!0});var i=M(e);r&&r.l(i),i.forEach(k),this.h()},h(){n(e,"id","sidebar-left"),n(e,"class",s[6])},m(t,i){B(t,e,i),r&&r.m(e,null),l=!0},p(t,i){r&&r.p&&(!l||i&131072)&&U(r,a,t,t[17],l?q(a,t[17],i,ul):N(t[17]),De),(!l||i&64)&&n(e,"class",t[6])},i(t){l||(L(r,t),l=!0)},o(t){H(r,t),l=!1},d(t){t&&k(e),r&&r.d(t)}}}function Fe(s){let e,l,a;const r=s[18].pageHeader,t=O(r,s,s[17],Ee),i=t||hl();return{c(){e=V("header"),i&&i.c(),this.h()},l(o){e=w(o,"HEADER",{id:!0,class:!0});var _=M(e);i&&i.l(_),_.forEach(k),this.h()},h(){n(e,"id","page-header"),n(e,"class",l="flex-none "+s[4])},m(o,_){B(o,e,_),i&&i.m(e,null),a=!0},p(o,_){t&&t.p&&(!a||_&131072)&&U(t,r,o,o[17],a?q(r,o[17],_,cl):N(o[17]),Ee),(!a||_&16&&l!==(l="flex-none "+o[4]))&&n(e,"class",l)},i(o){a||(L(i,o),a=!0)},o(o){H(i,o),a=!1},d(o){o&&k(e),i&&i.d(o)}}}function hl(s){let e;return{c(){e=$("(slot:header)")},l(l){e=ee(l,"(slot:header)")},m(l,a){B(l,e,a)},d(l){l&&k(e)}}}function Ce(s){let e,l,a;const r=s[18].pageFooter,t=O(r,s,s[17],Se),i=t||gl();return{c(){e=V("footer"),i&&i.c(),this.h()},l(o){e=w(o,"FOOTER",{id:!0,class:!0});var _=M(e);i&&i.l(_),_.forEach(k),this.h()},h(){n(e,"id","page-footer"),n(e,"class",l="flex-none "+s[2])},m(o,_){B(o,e,_),i&&i.m(e,null),a=!0},p(o,_){t&&t.p&&(!a||_&131072)&&U(t,r,o,o[17],a?q(r,o[17],_,nl):N(o[17]),Se),(!a||_&4&&l!==(l="flex-none "+o[2]))&&n(e,"class",l)},i(o){a||(L(i,o),a=!0)},o(o){H(i,o),a=!1},d(o){o&&k(e),i&&i.d(o)}}}function gl(s){let e;return{c(){e=$("(slot:footer)")},l(l){e=ee(l,"(slot:footer)")},m(l,a){B(l,e,a)},d(l){l&&k(e)}}}function Ie(s){let e,l;const a=s[18].sidebarRight,r=O(a,s,s[17],Le);return{c(){e=V("aside"),r&&r.c(),this.h()},l(t){e=w(t,"ASIDE",{id:!0,class:!0});var i=M(e);r&&r.l(i),i.forEach(k),this.h()},h(){n(e,"id","sidebar-right"),n(e,"class",s[5])},m(t,i){B(t,e,i),r&&r.m(e,null),l=!0},p(t,i){r&&r.p&&(!l||i&131072)&&U(r,a,t,t[17],l?q(a,t[17],i,fl):N(t[17]),Le),(!l||i&32)&&n(e,"class",t[5])},i(t){l||(L(r,t),l=!0)},o(t){H(r,t),l=!1},d(t){t&&k(e),r&&r.d(t)}}}function Me(s){let e,l,a;const r=s[18].footer,t=O(r,s,s[17],ve);return{c(){e=V("footer"),t&&t.c(),this.h()},l(i){e=w(i,"FOOTER",{id:!0,class:!0});var o=M(e);t&&t.l(o),o.forEach(k),this.h()},h(){n(e,"id","shell-footer"),n(e,"class",l="flex-none "+s[1])},m(i,o){B(i,e,o),t&&t.m(e,null),a=!0},p(i,o){t&&t.p&&(!a||o&131072)&&U(t,r,i,i[17],a?q(r,i[17],o,rl):N(i[17]),ve),(!a||o&2&&l!==(l="flex-none "+i[1]))&&n(e,"class",l)},i(i){a||(L(t,i),a=!0)},o(i){H(t,i),a=!1},d(i){i&&k(e),t&&t.d(i)}}}function _l(s){let e,l,a,r,t,i,o,_,h,c,g,C,v,E,D,f=s[9].header&&Pe(s),u=s[9].sidebarLeft&&Re(s),b=s[9].pageHeader&&Fe(s);const A=s[18].default,I=O(A,s,s[17],null);let R=s[9].pageFooter&&Ce(s),F=s[9].sidebarRight&&Ie(s),m=s[9].footer&&Me(s);return{c(){e=V("div"),f&&f.c(),l=y(),a=V("div"),u&&u.c(),r=y(),t=V("div"),b&&b.c(),i=y(),o=V("main"),I&&I.c(),h=y(),R&&R.c(),g=y(),F&&F.c(),C=y(),m&&m.c(),this.h()},l(S){e=w(S,"DIV",{id:!0,class:!0,"data-testid":!0});var P=M(e);f&&f.l(P),l=z(P),a=w(P,"DIV",{class:!0});var d=M(a);u&&u.l(d),r=z(d),t=w(d,"DIV",{id:!0,class:!0});var K=M(t);b&&b.l(K),i=z(K),o=w(K,"MAIN",{id:!0,class:!0});var ne=M(o);I&&I.l(ne),ne.forEach(k),h=z(K),R&&R.l(K),K.forEach(k),g=z(d),F&&F.l(d),d.forEach(k),C=z(P),m&&m.l(P),P.forEach(k),this.h()},h(){n(o,"id","page-content"),n(o,"class",_="flex-auto "+s[3]),n(t,"id","page"),n(t,"class",c=s[0]+" "+Te),n(a,"class","flex-auto "+bl),n(e,"id","appShell"),n(e,"class",s[8]),n(e,"data-testid","app-shell")},m(S,P){B(S,e,P),f&&f.m(e,null),T(e,l),T(e,a),u&&u.m(a,null),T(a,r),T(a,t),b&&b.m(t,null),T(t,i),T(t,o),I&&I.m(o,null),T(t,h),R&&R.m(t,null),T(a,g),F&&F.m(a,null),T(e,C),m&&m.m(e,null),v=!0,E||(D=J(t,"scroll",s[19]),E=!0)},p(S,[P]){S[9].header?f?(f.p(S,P),P&512&&L(f,1)):(f=Pe(S),f.c(),L(f,1),f.m(e,l)):f&&(G(),H(f,1,1,()=>{f=null}),j()),S[9].sidebarLeft?u?(u.p(S,P),P&512&&L(u,1)):(u=Re(S),u.c(),L(u,1),u.m(a,r)):u&&(G(),H(u,1,1,()=>{u=null}),j()),S[9].pageHeader?b?(b.p(S,P),P&512&&L(b,1)):(b=Fe(S),b.c(),L(b,1),b.m(t,i)):b&&(G(),H(b,1,1,()=>{b=null}),j()),I&&I.p&&(!v||P&131072)&&U(I,A,S,S[17],v?q(A,S[17],P,null):N(S[17]),null),(!v||P&8&&_!==(_="flex-auto "+S[3]))&&n(o,"class",_),S[9].pageFooter?R?(R.p(S,P),P&512&&L(R,1)):(R=Ce(S),R.c(),L(R,1),R.m(t,null)):R&&(G(),H(R,1,1,()=>{R=null}),j()),(!v||P&1&&c!==(c=S[0]+" "+Te))&&n(t,"class",c),S[9].sidebarRight?F?(F.p(S,P),P&512&&L(F,1)):(F=Ie(S),F.c(),L(F,1),F.m(a,null)):F&&(G(),H(F,1,1,()=>{F=null}),j()),S[9].footer?m?(m.p(S,P),P&512&&L(m,1)):(m=Me(S),m.c(),L(m,1),m.m(e,null)):m&&(G(),H(m,1,1,()=>{m=null}),j()),(!v||P&256)&&n(e,"class",S[8])},i(S){v||(L(f),L(u),L(b),L(I,S),L(R),L(F),L(m),v=!0)},o(S){H(f),H(u),H(b),H(I,S),H(R),H(F),H(m),v=!1},d(S){S&&k(e),f&&f.d(),u&&u.d(),b&&b.d(),I&&I.d(S),R&&R.d(),F&&F.d(),m&&m.d(),E=!1,D()}}}const ml="w-full h-full flex flex-col overflow-hidden",bl="w-full h-full flex overflow-hidden",Te="flex-1 overflow-x-hidden flex flex-col",kl="flex-none overflow-x-hidden overflow-y-auto",vl="flex-none overflow-x-hidden overflow-y-auto";function Ll(s,e,l){let a,r,t,i,o,_,h,c,{$$slots:g={},$$scope:C}=e;const v=we(g);let{regionPage:E=""}=e,{slotHeader:D="z-10"}=e,{slotSidebarLeft:f="w-auto"}=e,{slotSidebarRight:u="w-auto"}=e,{slotPageHeader:b=""}=e,{slotPageContent:A=""}=e,{slotPageFooter:I=""}=e,{slotFooter:R=""}=e;function F(m){X.call(this,s,m)}return s.$$set=m=>{l(20,e=Q(Q({},e),W(m))),"regionPage"in m&&l(0,E=m.regionPage),"slotHeader"in m&&l(10,D=m.slotHeader),"slotSidebarLeft"in m&&l(11,f=m.slotSidebarLeft),"slotSidebarRight"in m&&l(12,u=m.slotSidebarRight),"slotPageHeader"in m&&l(13,b=m.slotPageHeader),"slotPageContent"in m&&l(14,A=m.slotPageContent),"slotPageFooter"in m&&l(15,I=m.slotPageFooter),"slotFooter"in m&&l(16,R=m.slotFooter),"$$scope"in m&&l(17,C=m.$$scope)},s.$$.update=()=>{l(8,a=`${ml} ${e.class??""}`),s.$$.dirty&1024&&l(7,r=`${D}`),s.$$.dirty&2048&&l(6,t=`${kl} ${f}`),s.$$.dirty&4096&&l(5,i=`${vl} ${u}`),s.$$.dirty&8192&&l(4,o=`${b}`),s.$$.dirty&16384&&l(3,_=`${A}`),s.$$.dirty&32768&&l(2,h=`${I}`),s.$$.dirty&65536&&l(1,c=`${R}`)},e=W(e),[E,c,h,_,o,i,t,r,a,v,D,f,u,b,A,I,R,C,g,F]}class Sl extends Z{constructor(e){super(),p(this,e,Ll,_l,x,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function El(s){let e,l=`<script>(${Xe.toString()})();<\/script>`,a,r,t,i,o,_,h,c,g,C,v,E,D;return{c(){e=new ye(!1),a=Y(),r=y(),t=V("div"),i=V("div"),o=ce("svg"),_=ce("path"),this.h()},l(f){const u=ze("svelte-1fqad1o",document.head);e=Oe(u,!1),a=Y(),u.forEach(k),r=z(f),t=w(f,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var b=M(t);i=w(b,"DIV",{class:!0});var A=M(i);o=ue(A,"svg",{class:!0,xmlns:!0,viewBox:!0});var I=M(o);_=ue(I,"path",{d:!0}),M(_).forEach(k),I.forEach(k),A.forEach(k),b.forEach(k),this.h()},h(){e.a=a,n(_,"d",h=s[0]?s[4].sun:s[4].moon),n(o,"class",c="lightswitch-icon "+s[1]),n(o,"xmlns","http://www.w3.org/2000/svg"),n(o,"viewBox","0 0 512 512"),n(i,"class",g="lightswitch-thumb "+s[2]),n(t,"class",C="lightswitch-track "+s[3]),n(t,"role","switch"),n(t,"aria-label","Light Switch"),n(t,"aria-checked",s[0]),n(t,"title",v="Toggle "+(s[0]===!0?"Dark":"Light")+" Mode"),n(t,"tabindex","0")},m(f,u){e.m(l,document.head),T(document.head,a),B(f,r,u),B(f,t,u),T(t,i),T(i,o),T(o,_),E||(D=[J(t,"click",s[5]),J(t,"click",s[18]),J(t,"keydown",Rl),J(t,"keydown",s[19]),J(t,"keyup",s[20]),J(t,"keypress",s[21])],E=!0)},p(f,[u]){u&1&&h!==(h=f[0]?f[4].sun:f[4].moon)&&n(_,"d",h),u&2&&c!==(c="lightswitch-icon "+f[1])&&n(o,"class",c),u&4&&g!==(g="lightswitch-thumb "+f[2])&&n(i,"class",g),u&8&&C!==(C="lightswitch-track "+f[3])&&n(t,"class",C),u&1&&n(t,"aria-checked",f[0]),u&1&&v!==(v="Toggle "+(f[0]===!0?"Dark":"Light")+" Mode")&&n(t,"title",v)},i:te,o:te,d(f){k(a),f&&e.d(),f&&k(r),f&&k(t),E=!1,Ue(D)}}}const Dl="cursor-pointer",Hl="aspect-square scale-[0.8] flex justify-center items-center",Pl="w-[70%] aspect-square";function Rl(s){["Enter","Space"].includes(s.code)&&(s.preventDefault(),s.currentTarget.click())}function Fl(s,e,l){let a,r,t,i,o,_,h,c;Ne(s,se,d=>l(0,c=d));let{bgLight:g="bg-surface-50"}=e,{bgDark:C="bg-surface-900"}=e,{fillLight:v="fill-surface-50"}=e,{fillDark:E="fill-surface-900"}=e,{width:D="w-12"}=e,{height:f="h-6"}=e,{ring:u="ring-[1px] ring-surface-500/30"}=e,{rounded:b="rounded-token"}=e;const A="transition-all duration-[200ms]",I={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function R(){qe(se,c=!c,c),Qe(c),We(c)}function F(d){X.call(this,s,d)}function m(d){X.call(this,s,d)}function S(d){X.call(this,s,d)}function P(d){X.call(this,s,d)}return s.$$set=d=>{l(23,e=Q(Q({},e),W(d))),"bgLight"in d&&l(6,g=d.bgLight),"bgDark"in d&&l(7,C=d.bgDark),"fillLight"in d&&l(8,v=d.fillLight),"fillDark"in d&&l(9,E=d.fillDark),"width"in d&&l(10,D=d.width),"height"in d&&l(11,f=d.height),"ring"in d&&l(12,u=d.ring),"rounded"in d&&l(13,b=d.rounded)},s.$$.update=()=>{s.$$.dirty&193&&l(17,a=c===!0?g:C),s.$$.dirty&193&&l(16,r=c===!0?C:g),s.$$.dirty&1&&l(15,t=c===!0?"translate-x-[100%]":""),s.$$.dirty&769&&l(14,i=c===!0?v:E),l(3,o=`${Dl} ${A} ${D} ${f} ${u} ${b} ${a} ${e.class??""}`),s.$$.dirty&108544&&l(2,_=`${Hl} ${A} ${f} ${b} ${r} ${t}`),s.$$.dirty&16384&&l(1,h=`${Pl} ${i}`)},e=W(e),[c,h,_,o,I,R,g,C,v,E,D,f,u,b,i,t,r,a,F,m,S,P]}class Cl extends Z{constructor(e){super(),p(this,e,Fl,El,x,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Ae(s,e,l){const a=s.slice();return a[3]=e[l],a[5]=l,a}function Il(s){let e;const l=s[1].default,a=O(l,s,s[2],null);return{c(){a&&a.c()},l(r){a&&a.l(r)},m(r,t){a&&a.m(r,t),e=!0},p(r,t){a&&a.p&&(!e||t&4)&&U(a,l,r,r[2],e?q(l,r[2],t,null):N(r[2]),null)},i(r){e||(L(a,r),e=!0)},o(r){H(a,r),e=!1},d(r){a&&a.d(r)}}}function Ml(s){let e,l;return{c(){e=V("strong"),l=$("Luxury Autos"),this.h()},l(a){e=w(a,"STRONG",{class:!0});var r=M(e);l=ee(r,"Luxury Autos"),r.forEach(k),this.h()},h(){n(e,"class","text-xl uppercase")},m(a,r){B(a,e,r),T(e,l)},p:te,d(a){a&&k(e)}}}function Ve(s,e){let l,a=e[3].name+"",r,t;return{key:s,first:null,c(){l=V("a"),r=$(a),t=y(),this.h()},l(i){l=w(i,"A",{class:!0,href:!0,target:!0,rel:!0});var o=M(l);r=ee(o,a),t=z(o),o.forEach(k),this.h()},h(){n(l,"class","btn btn-sm variant-ghost-surface"),n(l,"href",e[3].url),n(l,"target",e[3].href),n(l,"rel","noreferrer"),this.first=l},m(i,o){B(i,l,o),T(l,r),T(l,t)},p(i,o){e=i},d(i){i&&k(l)}}}function Tl(s){let e,l,a=[],r=new Map,t,i;e=new Cl({});let o=s[0];const _=h=>h[3];for(let h=0;h<o.length;h+=1){let c=Ae(s,o,h),g=_(c);r.set(g,a[h]=Ve(g,c))}return{c(){ae(e.$$.fragment),l=y();for(let h=0;h<a.length;h+=1)a[h].c();t=Y()},l(h){ie(e.$$.fragment,h),l=z(h);for(let c=0;c<a.length;c+=1)a[c].l(h);t=Y()},m(h,c){oe(e,h,c),B(h,l,c);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(h,c);B(h,t,c),i=!0},p(h,c){c&1&&(o=h[0],a=Ge(a,c,_,1,h,o,r,t.parentNode,je,Ve,t,Ae))},i(h){i||(L(e.$$.fragment,h),i=!0)},o(h){H(e.$$.fragment,h),i=!1},d(h){re(e,h),h&&k(l);for(let c=0;c<a.length;c+=1)a[c].d(h);h&&k(t)}}}function Al(s){let e,l;return e=new ol({props:{$$slots:{trail:[Tl],lead:[Ml]},$$scope:{ctx:s}}}),{c(){ae(e.$$.fragment)},l(a){ie(e.$$.fragment,a)},m(a,r){oe(e,a,r),l=!0},p(a,r){const t={};r&4&&(t.$$scope={dirty:r,ctx:a}),e.$set(t)},i(a){l||(L(e.$$.fragment,a),l=!0)},o(a){H(e.$$.fragment,a),l=!1},d(a){re(e,a)}}}function Vl(s){let e,l;return e=new Sl({props:{$$slots:{header:[Al],default:[Il]},$$scope:{ctx:s}}}),{c(){ae(e.$$.fragment)},l(a){ie(e.$$.fragment,a)},m(a,r){oe(e,a,r),l=!0},p(a,[r]){const t={};r&4&&(t.$$scope={dirty:r,ctx:a}),e.$set(t)},i(a){l||(L(e.$$.fragment,a),l=!0)},o(a){H(e.$$.fragment,a),l=!1},d(a){re(e,a)}}}function wl(s,e,l){let{$$slots:a={},$$scope:r}=e,t=[{name:"Home",url:"/",href:"_self"},{name:"Collection",url:"/collection",href:"_self"},{name:"GitHub",url:"https://github.com/AlexssanderMartins/Luxury-Motorsports",href:"_blank"}];return s.$$set=i=>{"$$scope"in i&&l(2,r=i.$$scope)},[t,a,r]}class zl extends Z{constructor(e){super(),p(this,e,wl,Vl,x,{})}}export{zl as default};
