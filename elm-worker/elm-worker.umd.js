(function(g,i){typeof exports=="object"&&typeof module!="undefined"?module.exports=i():typeof define=="function"&&define.amd?define(i):(g=typeof globalThis!="undefined"?globalThis:g||self,g["elm-worker"]=i())})(this,function(){"use strict";function g(r,n,t){return t.a=r,t.f=n,t}function i(r){return g(2,r,function(n){return function(t){return r(n,t)}})}function _(r){return g(3,r,function(n){return function(t){return function(e){return r(n,t,e)}}})}function N(r){return g(4,r,function(n){return function(t){return function(e){return function(u){return r(n,t,e,u)}}}})}function q(r){return g(5,r,function(n){return function(t){return function(e){return function(u){return function(o){return r(n,t,e,u,o)}}}}})}function ur(r){return g(6,r,function(n){return function(t){return function(e){return function(u){return function(o){return function(a){return r(n,t,e,u,o,a)}}}}}})}function Wr(r){return g(7,r,function(n){return function(t){return function(e){return function(u){return function(o){return function(a){return function(f){return r(n,t,e,u,o,a,f)}}}}}}})}function Rr(r){return g(8,r,function(n){return function(t){return function(e){return function(u){return function(o){return function(a){return function(f){return function(v){return r(n,t,e,u,o,a,f,v)}}}}}}}})}function kr(r){return g(9,r,function(n){return function(t){return function(e){return function(u){return function(o){return function(a){return function(f){return function(v){return function(c){return r(n,t,e,u,o,a,f,v,c)}}}}}}}}})}function $(r,n,t){return r.a===2?r.f(n,t):r(n)(t)}function s(r,n,t,e){return r.a===3?r.f(n,t,e):r(n)(t)(e)}function E(r,n,t,e,u){return r.a===4?r.f(n,t,e,u):r(n)(t)(e)(u)}function or(r,n,t,e,u,o){return r.a===5?r.f(n,t,e,u,o):r(n)(t)(e)(u)(o)}var h={$:0};function P(r,n){return{$:1,a:r,b:n}}var Ur=i(P);function d(r){for(var n=h,t=r.length;t--;)n=P(r[t],n);return n}function H(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}var Ir=_(function(r,n,t){for(var e=[];n.b&&t.b;n=n.b,t=t.b)e.push($(r,n.a,t.a));return d(e)});N(function(r,n,t,e){for(var u=[];n.b&&t.b&&e.b;n=n.b,t=t.b,e=e.b)u.push(s(r,n.a,t.a,e.a));return d(u)}),q(function(r,n,t,e,u){for(var o=[];n.b&&t.b&&e.b&&u.b;n=n.b,t=t.b,e=e.b,u=u.b)o.push(E(r,n.a,t.a,e.a,u.a));return d(o)}),ur(function(r,n,t,e,u,o){for(var a=[];n.b&&t.b&&e.b&&u.b&&o.b;n=n.b,t=t.b,e=e.b,u=u.b,o=o.b)a.push(or(r,n.a,t.a,e.a,u.a,o.a));return d(a)}),i(function(r,n){return d(H(n).sort(function(t,e){return p(r(t),r(e))}))}),i(function(r,n){return d(H(n).sort(function(t,e){var u=$(r,t,e);return u===pr?0:u===Ar?-1:1}))});var qr=[];function Hr(r){return r.length}var Gr=_(function(r,n,t){for(var e=new Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),Qr=i(function(r,n){for(var t=new Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,j(t,n)});i(function(r,n){return n[r]}),_(function(r,n,t){for(var e=t.length,u=new Array(e),o=0;o<e;o++)u[o]=t[o];return u[r]=n,u}),i(function(r,n){for(var t=n.length,e=new Array(t+1),u=0;u<t;u++)e[u]=n[u];return e[t]=r,e}),_(function(r,n,t){for(var e=t.length,u=0;u<e;u++)n=$(r,t[u],n);return n});var Yr=_(function(r,n,t){for(var e=t.length-1;e>=0;e--)n=$(r,t[e],n);return n});i(function(r,n){for(var t=n.length,e=new Array(t),u=0;u<t;u++)e[u]=r(n[u]);return e}),_(function(r,n,t){for(var e=t.length,u=new Array(e),o=0;o<e;o++)u[o]=$(r,n+o,t[o]);return u}),_(function(r,n,t){return t.slice(r,n)}),_(function(r,n,t){var e=n.length,u=r-e;u>t.length&&(u=t.length);for(var o=e+u,a=new Array(o),f=0;f<e;f++)a[f]=n[f];for(var f=0;f<u;f++)a[f+e]=t[f];return a}),i(function(r,n){return n}),i(function(r,n){return console.log(r+": "+Kr()),n});function Kr(r){return"<internals>"}function B(r){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}function ir(r,n){for(var t,e=[],u=G(r,n,0,e);u&&(t=e.pop());u=G(t.a,t.b,0,e));return u}function G(r,n,t,e){if(r===n)return!0;if(typeof r!="object"||r===null||n===null)return typeof r=="function"&&B(5),!1;if(t>100)return e.push(j(r,n)),!0;r.$<0&&(r=Jr(r),n=Jr(n));for(var u in r)if(!G(r[u],n[u],t+1,e))return!1;return!0}i(ir),i(function(r,n){return!ir(r,n)});function p(r,n,t){if(typeof r!="object")return r===n?0:r<n?-1:1;if(typeof r.$=="undefined")return(t=p(r.a,n.a))||(t=p(r.b,n.b))?t:p(r.c,n.c);for(;r.b&&n.b&&!(t=p(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}i(function(r,n){return p(r,n)<0}),i(function(r,n){return p(r,n)<1}),i(function(r,n){return p(r,n)>0}),i(function(r,n){return p(r,n)>=0}),i(function(r,n){var t=p(r,n);return t<0?Ar:t?Cn:pr});var Q=0;function j(r,n){return{a:r,b:n}}function pt(r){return r}i(Xr);function Xr(r,n){if(typeof r=="string")return r+n;if(!r.b)return n;var t=P(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=P(r.a,n);return t}i(function(r,n){return r+n}),i(function(r,n){return r-n}),i(function(r,n){return r*n}),i(function(r,n){return r/n}),i(function(r,n){return r/n|0}),i(Math.pow),i(function(r,n){return n%r}),i(function(r,n){var t=n%r;return r===0?B(11):t>0&&r<0||t<0&&r>0?t+r:t}),i(Math.atan2);var Zr=Math.ceil,Vr=Math.floor,ar=Math.log;i(function(r,n){return r&&n}),i(function(r,n){return r||n}),i(function(r,n){return r!==n}),i(function(r,n){return r+n});function zr(r){var n=r.charCodeAt(0);return isNaN(n)?En:yn(55296<=n&&n<=56319?j(r[0]+r[1],r.slice(2)):j(r[0],r.slice(1)))}i(function(r,n){return r+n}),i(function(r,n){for(var t=n.length,e=new Array(t),u=0;u<t;){var o=n.charCodeAt(u);if(55296<=o&&o<=56319){e[u]=r(n[u]+n[u+1]),u+=2;continue}e[u]=r(n[u]),u++}return e.join("")}),i(function(r,n){for(var t=[],e=n.length,u=0;u<e;){var o=n[u],a=n.charCodeAt(u);u++,55296<=a&&a<=56319&&(o+=n[u],u++),r(o)&&t.push(o)}return t.join("")}),_(function(r,n,t){for(var e=t.length,u=0;u<e;){var o=t[u],a=t.charCodeAt(u);u++,55296<=a&&a<=56319&&(o+=t[u],u++),n=$(r,o,n)}return n}),_(function(r,n,t){for(var e=t.length;e--;){var u=t[e],o=t.charCodeAt(e);56320<=o&&o<=57343&&(e--,u=t[e]+u),n=$(r,u,n)}return n});var xr=i(function(r,n){return n.split(r)}),rn=i(function(r,n){return n.join(r)});_(function(r,n,t){return t.slice(r,n)}),i(function(r,n){for(var t=n.length;t--;){var e=n[t],u=n.charCodeAt(t);if(56320<=u&&u<=57343&&(t--,e=n[t]+e),r(e))return!0}return!1});var nn=i(function(r,n){for(var t=n.length;t--;){var e=n[t],u=n.charCodeAt(t);if(56320<=u&&u<=57343&&(t--,e=n[t]+e),!r(e))return!1}return!0});i(function(r,n){return n.indexOf(r)>-1}),i(function(r,n){return n.indexOf(r)===0}),i(function(r,n){return n.length>=r.length&&n.lastIndexOf(r)===n.length-r.length}),i(function(r,n){var t=r.length;if(t<1)return h;for(var e=0,u=[];(e=n.indexOf(r,e))>-1;)u.push(e),e=e+t;return d(u)});function tn(r){return r+""}function en(r){var n=r.charCodeAt(0);return 55296<=n&&n<=56319?(n-55296)*1024+r.charCodeAt(1)-56320+65536:n}function un(r){return{$:0,a:r}}function on(r){return{$:2,b:r}}var an=on(function(r){return typeof r!="number"?F("an INT",r):-2147483647<r&&r<2147483647&&(r|0)===r||isFinite(r)&&!(r%1)?O(r):F("an INT",r)});i(function(r,n){return{$:6,d:r,b:n}}),i(function(r,n){return{$:7,e:r,b:n}});function w(r,n){return{$:9,f:r,g:n}}i(function(r,n){return{$:10,b:n,h:r}}),i(function(r,n){return w(r,[n])}),_(function(r,n,t){return w(r,[n,t])}),N(function(r,n,t,e){return w(r,[n,t,e])}),q(function(r,n,t,e,u){return w(r,[n,t,e,u])}),ur(function(r,n,t,e,u,o){return w(r,[n,t,e,u,o])}),Wr(function(r,n,t,e,u,o,a){return w(r,[n,t,e,u,o,a])}),Rr(function(r,n,t,e,u,o,a,f){return w(r,[n,t,e,u,o,a,f])}),kr(function(r,n,t,e,u,o,a,f,v){return w(r,[n,t,e,u,o,a,f,v])}),i(function(r,n){try{var t=JSON.parse(n);return J(r,t)}catch(e){return C($(V,"This is not valid JSON! "+e.message,n))}});var fr=i(function(r,n){return J(r,n)});function J(r,n){switch(r.$){case 2:return r.b(n);case 5:return n===null?O(r.c):F("null",n);case 3:return W(n)?cr(r.b,n,d):F("a LIST",n);case 4:return W(n)?cr(r.b,n,fn):F("an ARRAY",n);case 6:var t=r.d;if(typeof n!="object"||n===null||!(t in n))return F("an OBJECT with a field named `"+t+"`",n);var c=J(r.b,n[t]);return D(c)?c:C($(jr,t,c.a));case 7:var e=r.e;if(!W(n))return F("an ARRAY",n);if(e>=n.length)return F("a LONGER array. Need index "+e+" but only see "+n.length+" entries",n);var c=J(r.b,n[e]);return D(c)?c:C($(Fr,e,c.a));case 8:if(typeof n!="object"||n===null||W(n))return F("an OBJECT",n);var u=h;for(var o in n)if(n.hasOwnProperty(o)){var c=J(r.b,n[o]);if(!D(c))return C($(jr,o,c.a));u=P(j(o,c.a),u)}return O(y(u));case 9:for(var a=r.f,f=r.g,v=0;v<f.length;v++){var c=J(f[v],n);if(!D(c))return c;a=a(c.a)}return O(a);case 10:var c=J(r.b,n);return D(c)?J(r.h(c.a),n):c;case 11:for(var l=h,m=r.g;m.b;m=m.b){var c=J(m.a,n);if(D(c))return c;l=P(c.a,l)}return C(On(y(l)));case 1:return C($(V,r.a,n));case 0:return O(r.a)}}function cr(r,n,t){for(var e=n.length,u=new Array(e),o=0;o<e;o++){var a=J(r,n[o]);if(!D(a))return C($(Fr,o,a.a));u[o]=a.a}return O(t(u))}function W(r){return Array.isArray(r)||typeof FileList!="undefined"&&r instanceof FileList}function fn(r){return $(tt,r.length,function(n){return r[n]})}function F(r,n){return C($(V,"Expecting "+r,n))}var cn=i(function(r,n){return JSON.stringify(n,null,r)+""});function $n(r){return r}function At(r){return r}_(function(r,n,t){return t[r]=n,t});function R(r){return{$:0,a:r}}function Y(r){return{$:2,b:r,c:null}}var $r=i(function(r,n){return{$:3,b:r,d:n}});i(function(r,n){return{$:4,b:r,d:n}});function vn(r){return{$:5,b:r}}var ln=0;function _n(r){var n={$:0,e:ln++,f:r,g:null,h:[]};return X(n),n}function vr(r,n){r.h.push(n),X(r)}var sn=i(function(r,n){return Y(function(t){vr(r,n),t(R(Q))})}),K=!1,lr=[];function X(r){if(lr.push(r),!K){for(K=!0;r=lr.shift();)hn(r);K=!1}}function hn(r){for(;r.f;){var n=r.f.$;if(n===0||n===1){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else if(n===2){r.f.c=r.f.b(function(t){r.f=t,X(r)});return}else if(n===5){if(r.h.length===0)return;r.f=r.f.b(r.h.shift())}else r.g={$:n===3?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}function bn(r){return Y(function(n){var t=setTimeout(function(){n(R(Q))},r);return function(){clearTimeout(t)}})}var mn=N(function(r,n,t,e){return gn(n,e,r.a4,r.bp,r.bl,function(){return function(){}})});function gn(r,n,t,e,u,o){var a=$(fr,r,n?n.flags:void 0);D(a)||B(2);var f={},v=t(a.a),c=v.a,l=o(I,c),m=pn(f,I);function I(er,T){var L=$(e,er,c);l(c=L.a,T),br(f,L.b,u(c))}return br(f,v.b,u(c)),m?{ports:m}:{}}var b={};function pn(r,n){var t;for(var e in b){var u=b[e];u.a&&(t=t||{},t[e]=u.a(e,n)),r[e]=An(u,n)}return t}function An(r,n){var t={g:n,h:void 0},e=r.c,u=r.d,o=r.e,a=r.f;function f(v){return $($r,f,vn(function(c){var l=c.a;return c.$===0?s(u,t,l,v):o&&a?E(e,t,l.i,l.j,v):s(e,t,o?l.i:l.j,v)}))}return t.h=_n($($r,f,r.b))}i(function(r,n){return Y(function(t){r.g(n),t(R(Q))})}),i(function(r,n){return $(sn,r.h,{$:0,a:n})});function _r(r){return function(n){return{$:1,k:r,l:n}}}function sr(r){return{$:2,m:r}}i(function(r,n){return{$:3,n:r,o:n}});var hr=[],Z=!1;function br(r,n,t){if(hr.push({p:r,q:n,r:t}),!Z){Z=!0;for(var e;e=hr.shift();)dn(e.p,e.q,e.r);Z=!1}}function dn(r,n,t){var e={};k(!0,n,e,null),k(!1,t,e,null);for(var u in r)vr(r[u],{$:"fx",a:e[u]||{i:h,j:h}})}function k(r,n,t,e){switch(n.$){case 1:var u=n.k,o=Jn(r,u,e,n.l);t[u]=jn(r,o,t[u]);return;case 2:for(var a=n.m;a.b;a=a.b)k(r,a.a,t,e);return;case 3:k(r,n.o,t,{s:n.n,t:e});return}}function Jn(r,n,t,e){function u(a){for(var f=t;f;f=f.t)a=f.s(a);return a}var o=r?b[n].e:b[n].f;return $(o,u,e)}function jn(r,n,t){return t=t||{i:h,j:h},r?t.i=P(n,t.i):t.j=P(n,t.j),t}function mr(r){b[r]&&B(3)}function Fn(r,n){return mr(r),b[r]={e:Dn,u:n,a:Pn},_r(r)}var Dn=i(function(r,n){return n});function Pn(r){var n=[],t=b[r].u,e=bn(0);b[r].b=e,b[r].c=_(function(a,f,v){for(;f.b;f=f.b)for(var c=n,l=t(f.a),m=0;m<c.length;m++)c[m](l);return e});function u(a){n.push(a)}function o(a){n=n.slice();var f=n.indexOf(a);f>=0&&n.splice(f,1)}return{subscribe:u,unsubscribe:o}}function gr(r,n){return mr(r),b[r]={f:wn,u:n,a:Sn},_r(r)}var wn=i(function(r,n){return function(t){return r(n(t))}});function Sn(r,n){var t=h,e=b[r].u,u=R(null);b[r].b=u,b[r].c=_(function(a,f,v){return t=f,u});function o(a){var f=$(fr,e,a);D(f)||B(4,r,f.a);for(var v=f.a,c=t;c.b;c=c.b)n(c.a(v))}return{send:o}}var pr=1,Ar=0,S=Ur,U=Yr;_(function(r,n,t){var e=t.c,u=t.d,o=i(function(a,f){if(a.$){var c=a.a;return s(U,r,f,c)}else{var v=a.a;return s(U,o,f,v)}});return s(U,o,s(U,r,n,u),e)});var dr=_(function(r,n,t){r:for(;;){if(t.$===-2)return n;var e=t.b,u=t.c,o=t.d,a=t.e,f=r,v=s(r,e,u,s(dr,r,n,a)),c=o;r=f,n=v,t=c;continue r}}),Jr=function(r){return s(dr,_(function(n,t,e){return $(S,j(n,t),e)}),h,r)},Cn=2,C=function(r){return{$:1,a:r}},V=i(function(r,n){return{$:3,a:r,b:n}}),jr=i(function(r,n){return{$:0,a:r,b:n}}),Fr=i(function(r,n){return{$:1,a:r,b:n}}),O=function(r){return{$:0,a:r}},On=function(r){return{$:2,a:r}},yn=function(r){return{$:0,a:r}},En={$:1},Bn=nn,Mn=cn,z=tn,M=i(function(r,n){return $(rn,r,H(n))}),Tn=i(function(r,n){return d($(xr,r,n))}),Dr=function(r){return $(M,`
    `,$(Tn,`
`,r))},Pr=_(function(r,n,t){r:for(;;)if(t.b){var e=t.a,u=t.b,o=r,a=$(r,e,n),f=u;r=o,n=a,t=f;continue r}else return n}),wr=function(r){return s(Pr,i(function(n,t){return t+1}),0,r)},Ln=Ir,Nn=_(function(r,n,t){r:for(;;)if(p(r,n)<1){var e=r,u=n-1,o=$(S,n,t);r=e,n=u,t=o;continue r}else return t}),Wn=i(function(r,n){return s(Nn,r,n,h)}),Rn=i(function(r,n){return s(Ln,r,$(Wn,0,wr(n)-1),n)}),x=en,Sr=function(r){var n=x(r);return 97<=n&&n<=122},Cr=function(r){var n=x(r);return n<=90&&65<=n},kn=function(r){return Sr(r)||Cr(r)},Un=function(r){var n=x(r);return n<=57&&48<=n},In=function(r){return Sr(r)||Cr(r)||Un(r)},y=function(r){return s(Pr,S,h,r)},qn=zr,Hn=i(function(r,n){return`

(`+(z(r+1)+(") "+Dr(Gn(n))))}),Gn=function(r){return $(Qn,r,h)},Qn=i(function(r,n){r:for(;;)switch(r.$){case 0:var t=r.a,a=r.b,e=function(){var L=qn(t);if(L.$===1)return!1;var Nr=L.a,mt=Nr.a,gt=Nr.b;return kn(mt)&&$(Bn,In,gt)}(),u=e?"."+t:"['"+(t+"']"),v=a,c=$(S,u,n);r=v,n=c;continue r;case 1:var o=r.a,a=r.b,f="["+(z(o)+"]"),v=a,c=$(S,f,n);r=v,n=c;continue r;case 2:var l=r.a;if(l.b)if(l.b.b){var m=function(){return n.b?"The Json.Decode.oneOf at json"+$(M,"",y(n)):"Json.Decode.oneOf"}(),T=m+(" failed in the following "+(z(wr(l))+" ways:"));return $(M,`

`,$(S,T,$(Rn,Hn,l)))}else{var a=l.a,v=a,c=n;r=v,n=c;continue r}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return n.b?" at json"+$(M,"",y(n)):"!"}();default:var I=r.a,er=r.b,T=function(){return n.b?"Problem with the value at json"+($(M,"",y(n))+`:

    `):`Problem with the given value:

`}();return T+(Dr($(Mn,4,er))+(`

`+I))}}),A=32,rr=N(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),nr=qr,Or=Zr,yr=i(function(r,n){return ar(n)/ar(r)}),tr=Or($(yr,2,A)),Yn=E(rr,0,tr,nr,nr),Er=Gr,Kn=function(r){return{$:1,a:r}};i(function(r,n){return r(n)}),i(function(r,n){return n(r)});var Xn=Vr,Br=Hr,Zn=i(function(r,n){return p(r,n)>0?r:n}),Vn=function(r){return{$:0,a:r}},Mr=Qr,zn=i(function(r,n){r:for(;;){var t=$(Mr,A,r),e=t.a,u=t.b,o=$(S,Vn(e),n);if(u.b){var a=u,f=o;r=a,n=f;continue r}else return y(o)}}),xn=i(function(r,n){r:for(;;){var t=Or(n/A);if(t===1)return $(Mr,A,r).a;var e=$(zn,r,h),u=t;r=e,n=u;continue r}}),rt=i(function(r,n){if(n.b){var t=n.b*A,e=Xn($(yr,A,t-1)),u=r?y(n.e):n.e,o=$(xn,u,n.b);return E(rr,Br(n.d)+t,$(Zn,5,e*tr),o,n.d)}else return E(rr,Br(n.d),tr,nr,n.d)}),nt=q(function(r,n,t,e,u){r:for(;;){if(n<0)return $(rt,!1,{e,b:t/A|0,d:u});var o=Kn(s(Er,A,n,r)),a=r,f=n-A,v=t,c=$(S,o,e),l=u;r=a,n=f,t=v,e=c,u=l;continue r}}),tt=i(function(r,n){if(r<=0)return Yn;var t=r%A,e=s(Er,t,r-t,n),u=r-t-A;return or(nt,n,u,r,h,e)}),D=function(r){return!r.$},et=sr,ut=et(h),ot=function(r){return j(0,ut)},it=function(r){return{$:1,a:r}},at=function(r){return{$:0,a:r}},ft=sr,Tr=an,ct=gr("decrement",Tr),$t=gr("increment",Tr),vt=function(r){return ft(d([$t(at),ct(it)]))},lt=un,_t=$n,Lr=Fn("sendCount",_t),st=i(function(r,n){if(r.$){var t=r.a;return j(0,Lr(t-1))}else{var t=r.a;return j(0,Lr(t+1))}}),ht=mn,bt=ht({a4:ot,bl:vt,bp:st});return{Worker:{init:bt(lt(0))(0)}}.Worker.init()});