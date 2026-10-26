(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();function mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ih(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ya={duration:.5,overwrite:!1,delay:0},Kl,Kt,bt,$r=1e8,_t=1/$r,El=Math.PI*2,Yd=El/4,jd=0,nh=Math.sqrt,Kd=Math.cos,Zd=Math.sin,Yt=function(r){return typeof r=="string"},Ct=function(r){return typeof r=="function"},Mi=function(r){return typeof r=="number"},Zl=function(r){return typeof r>"u"},ci=function(r){return typeof r=="object"},vr=function(r){return r!==!1},Jl=function(){return typeof window<"u"},us=function(r){return Ct(r)||Yt(r)},ah=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ir=Array.isArray,Jd=/random\([^)]+\)/g,Qd=/,\s*/g,wc=/(?:-?\.?\d|\.)+/gi,sh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Jn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,oh=/[+-]=-?[.\d]+/,ef=/[^,'"\[\]\s]+/gi,tf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,ti,Tl,Ql,Br={},ao={},lh,ch=function(r){return(ao=ua(r,Br))&&Tr},ec=function(r,e){return console.warn("Invalid property",r,"set to",e,"Missing plugin? gsap.registerPlugin()")},ja=function(r,e){return!e&&console.warn(r)},uh=function(r,e){return r&&(Br[r]=e)&&ao&&(ao[r]=e)||Br},Ka=function(){return 0},rf={suppressEvents:!0,isStart:!0,kill:!1},Ys={suppressEvents:!0,kill:!1},nf={suppressEvents:!0},tc={},Vi=[],bl={},hh,Lr={},Io={},Ac=30,js=[],rc="",ic=function(r){var e=r[0],t,i;if(ci(e)||Ct(e)||(r=[r]),!(t=(e._gsap||{}).harness)){for(i=js.length;i--&&!js[i].targetTest(e););t=js[i]}for(i=r.length;i--;)r[i]&&(r[i]._gsap||(r[i]._gsap=new Uh(r[i],t)))||r.splice(i,1);return r},xn=function(r){return r._gsap||ic(Xr(r))[0]._gsap},dh=function(r,e,t){return(t=r[e])&&Ct(t)?r[e]():Zl(t)&&r.getAttribute&&r.getAttribute(e)||t},xr=function(r,e){return(r=r.split(",")).forEach(e)||r},Dt=function(r){return Math.round(r*1e5)/1e5||0},wt=function(r){return Math.round(r*1e7)/1e7||0},ra=function(r,e){var t=e.charAt(0),i=parseFloat(e.substr(2));return r=parseFloat(r),t==="+"?r+i:t==="-"?r-i:t==="*"?r*i:r/i},af=function(r,e){for(var t=e.length,i=0;r.indexOf(e[i])<0&&++i<t;);return i<t},so=function(){var r=Vi.length,e=Vi.slice(0),t,i;for(bl={},Vi.length=0,t=0;t<r;t++)i=e[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nc=function(r){return!!(r._initted||r._startAt||r.add)},fh=function(r,e,t,i){Vi.length&&!Kt&&so(),r.render(e,t,!!(Kt&&e<0&&nc(r))),Vi.length&&!Kt&&so()},ph=function(r){var e=parseFloat(r);return(e||e===0)&&(r+"").match(ef).length<2?e:Yt(r)?r.trim():r},mh=function(r){return r},zr=function(r,e){for(var t in e)t in r||(r[t]=e[t]);return r},sf=function(r){return function(e,t){for(var i in t)i in e||i==="duration"&&r||i==="ease"||(e[i]=t[i])}},ua=function(r,e){for(var t in e)r[t]=e[t];return r},Rc=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ci(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},oo=function(r,e){var t={},i;for(i in r)i in e||(t[i]=r[i]);return t},Oa=function(r){var e=r.parent||At,t=r.keyframes?sf(ir(r.keyframes)):zr;if(vr(r.inherit))for(;e;)t(r,e.vars.defaults),e=e.parent||e._dp;return r},of=function(r,e){for(var t=r.length,i=t===e.length;i&&t--&&r[t]===e[t];);return t<0},gh=function(r,e,t,i,n){var a=r[i],s;if(n)for(s=e[n];a&&a[n]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=r[t],r[t]=e),e._next?e._next._prev=e:r[i]=e,e._prev=a,e.parent=e._dp=r,e},Mo=function(r,e,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:r[t]===e&&(r[t]=a),a?a._prev=n:r[i]===e&&(r[i]=n),e._next=e._prev=e.parent=null},Xi=function(r,e){r.parent&&(!e||r.parent.autoRemoveChildren)&&r.parent.remove&&r.parent.remove(r),r._act=0},yn=function(r,e){if(r&&(!e||e._end>r._dur||e._start<0))for(var t=r;t;)t._dirty=1,t=t.parent;return r},lf=function(r){for(var e=r.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return r},wl=function(r,e,t,i){return r._startAt&&(Kt?r._startAt.revert(Ys):r.vars.immediateRender&&!r.vars.autoRevert||r._startAt.render(e,!0,i))},cf=function r(e){return!e||e._ts&&r(e.parent)},Cc=function(r){return r._repeat?ha(r._tTime,r=r.duration()+r._rDelay)*r:0},ha=function(r,e){var t=Math.floor(r=wt(r/e));return r&&t===r?t-1:t},lo=function(r,e){return(r-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},So=function(r){return r._end=wt(r._start+(r._tDur/Math.abs(r._ts||r._rts||_t)||0))},Eo=function(r,e){var t=r._dp;return t&&t.smoothChildTiming&&r._ts&&(r._start=wt(t._time-(r._ts>0?e/r._ts:((r._dirty?r.totalDuration():r._tDur)-e)/-r._ts)),So(r),t._dirty||yn(t,r)),r},_h=function(r,e){var t;if((e._time||!e._dur&&e._initted||e._start<r._time&&(e._dur||!e.add))&&(t=lo(r.rawTime(),e),(!e._dur||ns(0,e.totalDuration(),t)-e._tTime>_t)&&e.render(t,!0)),yn(r,e)._dp&&r._initted&&r._time>=r._dur&&r._ts){if(r._dur<r.duration())for(t=r;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;r._zTime=-_t}},ai=function(r,e,t,i){return e.parent&&Xi(e),e._start=wt((Mi(t)?t:t||r!==At?Vr(r,t,e):r._time)+e._delay),e._end=wt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),gh(r,e,"_first","_last",r._sort?"_start":0),Al(e)||(r._recent=e),i||_h(r,e),r._ts<0&&Eo(r,r._tTime),r},vh=function(r,e){return(Br.ScrollTrigger||ec("scrollTrigger",e))&&Br.ScrollTrigger.create(e,r)},xh=function(r,e,t,i,n){if(sc(r,e,n),!r._initted)return 1;if(!t&&r._pt&&!Kt&&(r._dur&&r.vars.lazy!==!1||!r._dur&&r.vars.lazy)&&hh!==Ur.frame)return Vi.push(r),r._lazy=[n,i],1},uf=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Al=function(r){var e=r.data;return e==="isFromStart"||e==="isStart"},hf=function(r,e,t,i){var n=r.ratio,a=e<0||!e&&(!r._start&&uf(r)&&!(!r._initted&&Al(r))||(r._ts<0||r._dp._ts<0)&&!Al(r))?0:1,s=r._rDelay,o=0,l,c,h;if(s&&r._repeat&&(o=ns(0,r._tDur,e),c=ha(o,s),r._yoyo&&c&1&&(a=1-a),c!==ha(r._tTime,s)&&(n=1-a,r.vars.repeatRefresh&&r._initted&&r.invalidate())),a!==n||Kt||i||r._zTime===_t||!e&&r._zTime){if(!r._initted&&xh(r,e,i,t,o))return;for(h=r._zTime,r._zTime=e||(t?_t:0),t||(t=e&&!h),r.ratio=a,r._from&&(a=1-a),r._time=0,r._tTime=o,l=r._pt;l;)l.r(a,l.d),l=l._next;e<0&&wl(r,e,t,!0),r._onUpdate&&!t&&Nr(r,"onUpdate"),o&&r._repeat&&!t&&r.parent&&Nr(r,"onRepeat"),(e>=r._tDur||e<0)&&r.ratio===a&&(a&&Xi(r,1),!t&&!Kt&&(Nr(r,a?"onComplete":"onReverseComplete",!0),r._prom&&r._prom()))}else r._zTime||(r._zTime=e)},df=function(r,e,t){var i;if(t>e)for(i=r._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=r._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},da=function(r,e,t,i){var n=r._repeat,a=wt(e)||0,s=r._tTime/r._tDur;return s&&!i&&(r._time*=a/r._dur),r._dur=a,r._tDur=n?n<0?1e10:wt(a*(n+1)+r._rDelay*n):a,s>0&&!i&&Eo(r,r._tTime=r._tDur*s),r.parent&&So(r),t||yn(r.parent,r),r},Pc=function(r){return r instanceof gr?yn(r):da(r,r._dur)},ff={_start:0,endTime:Ka,totalDuration:Ka},Vr=function r(e,t,i){var n=e.labels,a=e._recent||ff,s=e.duration()>=$r?a.endTime(!1):e._dur,o,l,c;return Yt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?a:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(ir(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:s+l)):t==null?s:+t},Fa=function(r,e,t){var i=Mi(e[1]),n=(i?2:1)+(r<2?0:1),a=e[n],s,o;if(i&&(a.duration=e[1]),a.parent=t,r){for(s=a,o=t;o&&!("immediateRender"in s);)s=o.vars.defaults||{},o=vr(o.vars.inherit)&&o.parent;a.immediateRender=vr(s.immediateRender),r<2?a.runBackwards=1:a.startAt=e[n-1]}return new zt(e[0],a,e[n+1])},Ki=function(r,e){return r||r===0?e(r):e},ns=function(r,e,t){return t<r?r:t>e?e:t},tr=function(r,e){return!Yt(r)||!(e=tf.exec(r))?"":e[1]},pf=function(r,e,t){return Ki(t,function(i){return ns(r,e,i)})},Rl=[].slice,yh=function(r,e){return r&&ci(r)&&"length"in r&&(!e&&!r.length||r.length-1 in r&&ci(r[0]))&&!r.nodeType&&r!==ti},mf=function(r,e,t){return t===void 0&&(t=[]),r.forEach(function(i){var n;return Yt(i)&&!e||yh(i,1)?(n=t).push.apply(n,Xr(i)):t.push(i)})||t},Xr=function(r,e,t){return bt&&!e&&bt.selector?bt.selector(r):Yt(r)&&!t&&(Tl||!fa())?Rl.call((e||Ql).querySelectorAll(r),0):ir(r)?mf(r,t):yh(r)?Rl.call(r,0):r?[r]:[]},Cl=function(r){return r=Xr(r)[0]||ja("Invalid scope")||{},function(e){var t=r.current||r.nativeElement||r;return Xr(e,t.querySelectorAll?t:t===r?ja("Invalid scope")||Ql.createElement("div"):r)}},Mh=function(r){return r.sort(function(){return .5-Math.random()})},Sh=function(r){if(Ct(r))return r;var e=ci(r)?r:{each:r},t=Mn(e.ease),i=e.from||0,n=parseFloat(e.base)||0,a={},s=i>0&&i<1,o=isNaN(i)||s,l=e.axis,c=i,h=i;return Yt(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!s&&o&&(c=i[0],h=i[1]),function(d,u,p){var g=(p||e).length,_=a[g],m,f,E,v,S,P,w,b,C;if(!_){if(C=e.grid==="auto"?0:(e.grid||[1,$r])[1],!C){for(w=-$r;w<(w=p[C++].getBoundingClientRect().left)&&C<g;);C<g&&C--}for(_=a[g]=[],m=o?Math.min(C,g)*c-.5:i%C,f=C===$r?0:o?g*h/C-.5:i/C|0,w=0,b=$r,P=0;P<g;P++)E=P%C-m,v=f-(P/C|0),_[P]=S=l?Math.abs(l==="y"?v:E):nh(E*E+v*v),S>w&&(w=S),S<b&&(b=S);i==="random"&&Mh(_),_.max=w-b,_.min=b,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(C>g?g-1:l?l==="y"?g/C:C:Math.max(C,g/C))||0)*(i==="edges"?-1:1),_.b=g<0?n-g:n,_.u=tr(e.amount||e.each)||0,t=t&&g<0?Rf(t):t}return g=(_[d]-_.min)/_.max||0,wt(_.b+(t?t(g):g)*_.v)+_.u}},Pl=function(r){var e=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var i=wt(Math.round(parseFloat(t)/r)*r*e);return(i-i%1)/e+(Mi(t)?0:tr(t))}},Eh=function(r,e){var t=ir(r),i,n;return!t&&ci(r)&&(i=t=r.radius||$r,r.values?(r=Xr(r.values),(n=!Mi(r[0]))&&(i*=i)):r=Pl(r.increment)),Ki(e,t?Ct(r)?function(a){return n=r(a),Math.abs(n-a)<=i?n:a}:function(a){for(var s=parseFloat(n?a.x:a),o=parseFloat(n?a.y:0),l=$r,c=0,h=r.length,d,u;h--;)n?(d=r[h].x-s,u=r[h].y-o,d=d*d+u*u):d=Math.abs(r[h]-s),d<l&&(l=d,c=h);return c=!i||l<=i?r[c]:a,n||c===a||Mi(a)?c:c+tr(a)}:Pl(r))},Th=function(r,e,t,i){return Ki(ir(r)?!e:t===!0?!!(t=0):!i,function(){return ir(r)?r[~~(Math.random()*r.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((r-t/2+Math.random()*(e-r+t*.99))/t)*t*i)/i})},gf=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(i){return e.reduce(function(n,a){return a(n)},i)}},_f=function(r,e){return function(t){return r(parseFloat(t))+(e||tr(t))}},vf=function(r,e,t){return wh(r,e,0,1,t)},bh=function(r,e,t){return Ki(t,function(i){return r[~~e(i)]})},xf=function r(e,t,i){var n=t-e;return ir(e)?bh(e,r(0,e.length),t):Ki(i,function(a){return(n+(a-e)%n)%n+e})},yf=function r(e,t,i){var n=t-e,a=n*2;return ir(e)?bh(e,r(0,e.length-1),t):Ki(i,function(s){return s=(a+(s-e)%a)%a||0,e+(s>n?a-s:s)})},Za=function(r){return r.replace(Jd,function(e){var t=e.indexOf("[")+1,i=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(Qd);return Th(t?i:+i[0],t?0:+i[1],+i[2]||1e-5)})},wh=function(r,e,t,i,n){var a=e-r,s=i-t;return Ki(n,function(o){return t+((o-r)/a*s||0)})},Mf=function r(e,t,i,n){var a=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!a){var s=Yt(e),o={},l,c,h,d,u;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(ir(e)&&!ir(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,a=function(p){p*=d;var g=Math.min(u,~~p);return h[g](p-g)},i=t}else n||(e=ua(ir(e)?[]:{},e));if(!h){for(l in t)ac.call(o,e,l,"get",t[l]);a=function(p){return cc(p,o)||(s?e.p:e)}}}return Ki(i,a)},Lc=function(r,e,t){var i=r.labels,n=$r,a,s,o;for(a in i)s=i[a]-e,s<0==!!t&&s&&n>(s=Math.abs(s))&&(o=a,n=s);return o},Nr=function(r,e,t){var i=r.vars,n=i[e],a=bt,s=r._ctx,o,l,c;if(n)return o=i[e+"Params"],l=i.callbackScope||r,t&&Vi.length&&so(),s&&(bt=s),c=o?n.apply(l,o):n.call(l),bt=a,c},Ra=function(r){return Xi(r),r.scrollTrigger&&r.scrollTrigger.kill(!!Kt),r.progress()<1&&Nr(r,"onInterrupt"),r},Qn,Ah=[],Rh=function(r){if(r)if(r=!r.name&&r.default||r,Jl()||r.headless){var e=r.name,t=Ct(r),i=e&&!t&&r.init?function(){this._props=[]}:r,n={init:Ka,render:cc,add:ac,kill:Bf,modifier:Ff,rawVars:0},a={targetTest:0,get:0,getSetter:lc,aliases:{},register:0};if(fa(),r!==i){if(Lr[e])return;zr(i,zr(oo(r,n),a)),ua(i.prototype,ua(n,oo(r,a))),Lr[i.prop=e]=i,r.targetTest&&(js.push(i),tc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}uh(e,i),r.register&&r.register(Tr,i,yr)}else Ah.push(r)},gt=255,Ca={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},No=function(r,e,t){return r+=r<0?1:r>1?-1:0,(r*6<1?e+(t-e)*r*6:r<.5?t:r*3<2?e+(t-e)*(2/3-r)*6:e)*gt+.5|0},Ch=function(r,e,t){var i=r?Mi(r)?[r>>16,r>>8&gt,r&gt]:0:Ca.black,n,a,s,o,l,c,h,d,u,p;if(!i){if(r.substr(-1)===","&&(r=r.substr(0,r.length-1)),Ca[r])i=Ca[r];else if(r.charAt(0)==="#"){if(r.length<6&&(n=r.charAt(1),a=r.charAt(2),s=r.charAt(3),r="#"+n+n+a+a+s+s+(r.length===5?r.charAt(4)+r.charAt(4):"")),r.length===9)return i=parseInt(r.substr(1,6),16),[i>>16,i>>8&gt,i&gt,parseInt(r.substr(7),16)/255];r=parseInt(r.substr(1),16),i=[r>>16,r>>8&gt,r&gt]}else if(r.substr(0,3)==="hsl"){if(i=p=r.match(wc),!e)o=+i[0]%360/360,l=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(l+1):c+l-c*l,n=c*2-a,i.length>3&&(i[3]*=1),i[0]=No(o+1/3,n,a),i[1]=No(o,n,a),i[2]=No(o-1/3,n,a);else if(~r.indexOf("="))return i=r.match(sh),t&&i.length<4&&(i[3]=1),i}else i=r.match(wc)||Ca.transparent;i=i.map(Number)}return e&&!p&&(n=i[0]/gt,a=i[1]/gt,s=i[2]/gt,h=Math.max(n,a,s),d=Math.min(n,a,s),c=(h+d)/2,h===d?o=l=0:(u=h-d,l=c>.5?u/(2-h-d):u/(h+d),o=h===n?(a-s)/u+(a<s?6:0):h===a?(s-n)/u+2:(n-a)/u+4,o*=60),i[0]=~~(o+.5),i[1]=~~(l*100+.5),i[2]=~~(c*100+.5)),t&&i.length<4&&(i[3]=1),i},Ph=function(r){var e=[],t=[],i=-1;return r.split(Gi).forEach(function(n){var a=n.match(Jn)||[];e.push.apply(e,a),t.push(i+=a.length+1)}),e.c=t,e},Dc=function(r,e,t){var i="",n=(r+i).match(Gi),a=e?"hsla(":"rgba(",s=0,o,l,c,h;if(!n)return r;if(n=n.map(function(d){return(d=Ch(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),t&&(c=Ph(r),o=t.c,o.join(i)!==c.c.join(i)))for(l=r.replace(Gi,"1").split(Jn),h=l.length-1;s<h;s++)i+=l[s]+(~o.indexOf(s)?n.shift()||a+"0,0,0,0)":(c.length?c:n.length?n:t).shift());if(!l)for(l=r.split(Gi),h=l.length-1;s<h;s++)i+=l[s]+n[s];return i+l[h]},Gi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ca)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Sf=/hsl[a]?\(/,Lh=function(r){var e=r.join(" "),t;if(Gi.lastIndex=0,Gi.test(e))return t=Sf.test(e),r[1]=Dc(r[1],t),r[0]=Dc(r[0],t,Ph(r[1])),!0},Ja,Ur=function(){var r=Date.now,e=500,t=33,i=r(),n=i,a=1e3/240,s=a,o=[],l,c,h,d,u,p,g=function _(m){var f=r()-n,E=m===!0,v,S,P,w;if((f>e||f<0)&&(i+=f-t),n+=f,P=n-i,v=P-s,(v>0||E)&&(w=++d.frame,u=P-d.time*1e3,d.time=P=P/1e3,s+=v+(v>=a?4:a-v),S=1),E||(l=c(_)),S)for(p=0;p<o.length;p++)o[p](P,u,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return u/(1e3/(_||60))},wake:function(){lh&&(!Tl&&Jl()&&(ti=Tl=window,Ql=ti.document||{},Br.gsap=Tr,(ti.gsapVersions||(ti.gsapVersions=[])).push(Tr.version),ch(ao||ti.GreenSockGlobals||!ti.gsap&&ti||{}),Ah.forEach(Rh)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(_){return setTimeout(_,s-d.time*1e3+1|0)},Ja=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ja=0,c=Ka},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){a=1e3/(_||240),s=d.time*1e3+a},add:function(_,m,f){var E=m?function(v,S,P,w){_(v,S,P,w),d.remove(E)}:_;return d.remove(_),o[f?"unshift":"push"](E),fa(),E},remove:function(_,m){~(m=o.indexOf(_))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},d}(),fa=function(){return!Ja&&Ur.wake()},tt={},Ef=/^[\d.\-M][\d.\-,\s]/,Tf=/["']/g,bf=function(r){for(var e={},t=r.substr(1,r.length-3).split(":"),i=t[0],n=1,a=t.length,s,o,l;n<a;n++)o=t[n],s=n!==a-1?o.lastIndexOf(","):o.length,l=o.substr(0,s),e[i]=isNaN(l)?l.replace(Tf,"").trim():+l,i=o.substr(s+1).trim();return e},wf=function(r){var e=r.indexOf("(")+1,t=r.indexOf(")"),i=r.indexOf("(",e);return r.substring(e,~i&&i<t?r.indexOf(")",t+1):t)},Af=function(r){var e=(r+"").split("("),t=tt[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~r.indexOf("{")?[bf(e[1])]:wf(r).split(",").map(ph)):tt._CE&&Ef.test(r)?tt._CE("",r):t},Rf=function(r){return function(e){return 1-r(1-e)}},Mn=function(r,e){return r&&(Ct(r)?r:tt[r]||Af(r))||e},Ln=function(r,e,t,i){t===void 0&&(t=function(s){return 1-e(1-s)}),i===void 0&&(i=function(s){return s<.5?e(s*2)/2:1-e((1-s)*2)/2});var n={easeIn:e,easeOut:t,easeInOut:i},a;return xr(r,function(s){tt[s]=Br[s]=n,tt[a=s.toLowerCase()]=t;for(var o in n)tt[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=tt[s+"."+o]=n[o]}),n},Dh=function(r){return function(e){return e<.5?(1-r(1-e*2))/2:.5+r((e-.5)*2)/2}},Oo=function r(e,t,i){var n=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),s=a/El*(Math.asin(1/n)||0),o=function(c){return c===1?1:n*Math.pow(2,-10*c)*Zd((c-s)*a)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Dh(o);return a=El/a,l.config=function(c,h){return r(e,c,h)},l},Fo=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:Dh(i);return n.config=function(a){return r(e,a)},n};xr("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ln(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;Ln("Elastic",Oo("in"),Oo("out"),Oo());(function(r,e){var t=1/e,i=2*t,n=2.5*t,a=function(s){return s<t?r*s*s:s<i?r*Math.pow(s-1.5/e,2)+.75:s<n?r*(s-=2.25/e)*s+.9375:r*Math.pow(s-2.625/e,2)+.984375};Ln("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);Ln("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ln("Circ",function(r){return-(nh(1-r*r)-1)});Ln("Sine",function(r){return r===1?1:-Kd(r*Yd)+1});Ln("Back",Fo("in"),Fo("out"),Fo());tt.SteppedEase=tt.steps=Br.SteppedEase={config:function(r,e){r===void 0&&(r=1);var t=1/r,i=r+(e?0:1),n=e?1:0,a=1-_t;return function(s){return((i*ns(0,a,s)|0)+n)*t}}};Ya.ease=tt["quad.out"];xr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return rc+=r+","+r+"Params,"});var Uh=function(r,e){this.id=jd++,r._gsap=this,this.target=r,this.harness=e,this.get=e?e.get:dh,this.set=e?e.getSetter:lc},Qa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,da(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),Ja||Ur.wake()}var e=r.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,da(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if(fa(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Eo(this,t),!n._dp||n.parent||_h(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&t||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),fh(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Cc(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Cc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,i):this._repeat?ha(this._tTime,n)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?lo(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-_t?0:this._rts,this.totalTime(ns(-Math.abs(this._delay),this.totalDuration(),n),i!==!1),So(this),lf(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=wt(t);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ai(i,this,this._start-this._delay),this}return this._start},e.endTime=function(t){return this._start+(vr(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lo(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=nf);var i=Kt;return Kt=t,nc(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(t){for(var i=this,n=arguments.length?t:i.rawTime();i;)n=i._start+n/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Pc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,Pc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(Vr(this,t),vr(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,vr(i)),this._dur||(this._zTime=-_t),this},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,n;return!!(!t||this._ts&&this._initted&&t.isActive()&&(n=t.rawTime(!0))>=i&&n<this.endTime(!0)-_t)},e.eventCallback=function(t,i,n){var a=this.vars;return arguments.length>1?(i?(a[t]=i,n&&(a[t+"Params"]=n),t==="onUpdate"&&(this._onUpdate=i)):delete a[t],this):a[t]},e.then=function(t){var i=this,n=i._prom;return new Promise(function(a){var s=Ct(t)?t:mh,o=function(){var l=i.then;i.then=null,n&&n(),Ct(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=l),a(s),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ra(this)},r}();zr(Qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var gr=function(r){ih(e,r);function e(i,n){var a;return i===void 0&&(i={}),a=r.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=vr(i.sortChildren),At&&ai(i.parent||At,mi(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&vh(mi(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(i,n,a){return Fa(0,arguments,this),this},t.from=function(i,n,a){return Fa(1,arguments,this),this},t.fromTo=function(i,n,a,s){return Fa(2,arguments,this),this},t.set=function(i,n,a){return n.duration=0,n.parent=this,Oa(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new zt(i,n,Vr(this,a),1),this},t.call=function(i,n,a){return ai(this,zt.delayedCall(0,i,n),a)},t.staggerTo=function(i,n,a,s,o,l,c){return a.duration=n,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=c,a.parent=this,new zt(i,a,Vr(this,o)),this},t.staggerFrom=function(i,n,a,s,o,l,c){return a.runBackwards=1,Oa(a).immediateRender=vr(a.immediateRender),this.staggerTo(i,n,a,s,o,l,c)},t.staggerFromTo=function(i,n,a,s,o,l,c,h){return s.startAt=a,Oa(s).immediateRender=vr(s.immediateRender),this.staggerTo(i,n,s,o,l,c,h)},t.render=function(i,n,a){var s=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=i<=0?0:wt(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,u,p,g,_,m,f,E,v,S,P,w;if(this!==At&&c>o&&i>=0&&(c=o),c!==this._tTime||a||h){if(s!==this._time&&l&&(c+=this._time-s,i+=this._time-s),d=c,v=this._start,E=this._ts,m=!E,h&&(l||(s=this._zTime),(i||!n)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,_=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,n,a);if(d=wt(c%_),c===o?(g=this._repeat,d=l):(S=wt(c/_),g=~~S,g&&g===S&&(d=l,g--),d>l&&(d=l)),S=ha(this._tTime,_),!s&&this._tTime&&S!==g&&this._tTime-S*_-this._dur<=0&&(S=g),P&&g&1&&(d=l-d,w=1),g!==S&&!this._lock){var b=P&&S&1,C=b===(P&&g&1);if(g<S&&(b=!b),s=b?0:c%l?l:c,this._lock=1,this.render(s||(w?0:wt(g*_)),n,!l)._lock=0,this._tTime=c,!n&&this.parent&&Nr(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,S=g),s&&s!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,C&&(this._lock=2,s=b?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(f=df(this,wt(s),wt(d)),f&&(c-=d-(d=f._start))),this._tTime=c,this._time=d,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&c&&l&&!n&&!S&&(Nr(this,"onStart"),this._tTime!==c))return this;if(d>=s&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||d>=u._start)&&u._ts&&f!==u){if(u.parent!==this)return this.render(i,n,a);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,n,a),d!==this._time||!this._ts&&!m){f=0,p&&(c+=this._zTime=-_t);break}}u=p}else{u=this._last;for(var F=i<0?i:d;u;){if(p=u._prev,(u._act||F<=u._end)&&u._ts&&f!==u){if(u.parent!==this)return this.render(i,n,a);if(u.render(u._ts>0?(F-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(F-u._start)*u._ts,n,a||Kt&&nc(u)),d!==this._time||!this._ts&&!m){f=0,p&&(c+=this._zTime=F?-_t:_t);break}}u=p}}if(f&&!n&&(this.pause(),f.render(d>=s?0:-_t)._zTime=d>=s?1:-1,this._ts))return this._start=v,So(this),this.render(i,n,a);this._onUpdate&&!n&&Nr(this,"onUpdate",!0),(c===o&&this._tTime>=this.totalDuration()||!c&&s)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(c===o&&this._ts>0||!c&&this._ts<0)&&Xi(this,1),!n&&!(i<0&&!s)&&(c||s||!o)&&(Nr(this,c===o&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,n){var a=this;if(Mi(n)||(n=Vr(this,n,i)),!(i instanceof Qa)){if(ir(i))return i.forEach(function(s){return a.add(s,n)}),this;if(Yt(i))return this.addLabel(i,n);if(Ct(i))i=zt.delayedCall(0,i);else return this}return this!==i?ai(this,i,n):this},t.getChildren=function(i,n,a,s){i===void 0&&(i=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),s===void 0&&(s=-$r);for(var o=[],l=this._first;l;)l._start>=s&&(l instanceof zt?n&&o.push(l):(a&&o.push(l),i&&o.push.apply(o,l.getChildren(!0,n,a)))),l=l._next;return o},t.getById=function(i){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===i)return n[a]},t.remove=function(i){return Yt(i)?this.removeLabel(i):Ct(i)?this.killTweensOf(i):(i.parent===this&&Mo(this,i),i===this._recent&&(this._recent=this._last),yn(this))},t.totalTime=function(i,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(Ur.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,n),this._forcing=0,this):this._tTime},t.addLabel=function(i,n){return this.labels[i]=Vr(this,n),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,n,a){var s=zt.delayedCall(0,n||Ka,a);return s.data="isPause",this._hasPause=1,ai(this,s,Vr(this,i))},t.removePause=function(i){var n=this._first;for(i=Vr(this,i);n;)n._start===i&&n.data==="isPause"&&Xi(n),n=n._next},t.killTweensOf=function(i,n,a){for(var s=this.getTweensOf(i,a),o=s.length;o--;)Oi!==s[o]&&s[o].kill(i,n);return this},t.getTweensOf=function(i,n){for(var a=[],s=Xr(i),o=this._first,l=Mi(n),c;o;)o instanceof zt?af(o._targets,s)&&(l?(!Oi||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&a.push(o):(c=o.getTweensOf(s,n)).length&&a.push.apply(a,c),o=o._next;return a},t.tweenTo=function(i,n){n=n||{};var a=this,s=Vr(a,i),o=n,l=o.startAt,c=o.onStart,h=o.onStartParams,d=o.immediateRender,u,p=zt.to(a,zr({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||_t,onStart:function(){if(a.pause(),!u){var g=n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());p._dur!==g&&da(p,g,0,1).render(p._time,!0,!0),u=1}c&&c.apply(p,h||[])}},n));return d?p.render(0):p},t.tweenFromTo=function(i,n,a){return this.tweenTo(n,zr({startAt:{time:Vr(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Lc(this,Vr(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Lc(this,Vr(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,n,a){a===void 0&&(a=0);var s=this._first,o=this.labels,l;for(i=wt(i);s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(n)for(l in o)o[l]>=a&&(o[l]+=i);return yn(this)},t.invalidate=function(i){var n=this._first;for(this._lock=0;n;)n.invalidate(i),n=n._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yn(this)},t.totalDuration=function(i){var n=0,a=this,s=a._last,o=$r,l,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>o&&a._sort&&s._ts&&!a._lock?(a._lock=1,ai(a,s,c-s._delay,1)._lock=0):o=c,c<0&&s._ts&&(n-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=wt(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),o=0),s._end>n&&s._ts&&(n=s._end),s=l;da(a,a===At&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(At._ts&&(fh(At,lo(i,At)),hh=Ur.frame),Ur.frame>=Ac){Ac+=Fr.autoSleep||120;var n=At._first;if((!n||!n._ts)&&Fr.autoSleep&&Ur._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||Ur.sleep()}}},e}(Qa);zr(gr.prototype,{_lock:0,_hasPause:0,_forcing:0});var Cf=function(r,e,t,i,n,a,s){var o=new yr(this._pt,r,e,0,1,zh,null,n),l=0,c=0,h,d,u,p,g,_,m,f;for(o.b=t,o.e=i,t+="",i+="",(m=~i.indexOf("random("))&&(i=Za(i)),a&&(f=[t,i],a(f,r,e),t=f[0],i=f[1]),d=t.match(Uo)||[];h=Uo.exec(i);)p=h[0],g=i.substring(l,h.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),p!==d[c++]&&(_=parseFloat(d[c-1])||0,o._pt={_next:o._pt,p:g||c===1?g:",",s:_,c:p.charAt(1)==="="?ra(_,p)-_:parseFloat(p)-_,m:u&&u<4?Math.round:0},l=Uo.lastIndex);return o.c=l<i.length?i.substring(l,i.length):"",o.fp=s,(oh.test(i)||m)&&(o.e=0),this._pt=o,o},ac=function(r,e,t,i,n,a,s,o,l,c){Ct(i)&&(i=i(n||0,r,a));var h=r[e],d=t!=="get"?t:Ct(h)?l?r[e.indexOf("set")||!Ct(r["get"+e.substr(3)])?e:"get"+e.substr(3)](l):r[e]():h,u=Ct(h)?l?If:Fh:oc,p;if(Yt(i)&&(~i.indexOf("random(")&&(i=Za(i)),i.charAt(1)==="="&&(p=ra(d,i)+(tr(d)||0),(p||p===0)&&(i=p))),!c||d!==i||Ll)return!isNaN(d*i)&&i!==""?(p=new yr(this._pt,r,e,+d||0,i-(d||0),typeof h=="boolean"?Of:Bh,0,u),l&&(p.fp=l),s&&p.modifier(s,this,r),this._pt=p):(!h&&!(e in r)&&ec(e,i),Cf.call(this,r,e,d,i,u,o||Fr.stringFilter,l))},Pf=function(r,e,t,i,n){if(Ct(r)&&(r=Ba(r,n,e,t,i)),!ci(r)||r.style&&r.nodeType||ir(r)||ah(r))return Yt(r)?Ba(r,n,e,t,i):r;var a={},s;for(s in r)a[s]=Ba(r[s],n,e,t,i);return a},Ih=function(r,e,t,i,n,a){var s,o,l,c;if(Lr[r]&&(s=new Lr[r]).init(n,s.rawVars?e[r]:Pf(e[r],i,n,a,t),t,i,a)!==!1&&(t._pt=o=new yr(t._pt,n,r,0,1,s.render,s,0,s.priority),t!==Qn))for(l=t._ptLookup[t._targets.indexOf(n)],c=s._props.length;c--;)l[s._props[c]]=o;return s},Oi,Ll,sc=function r(e,t,i){var n=e.vars,a=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,p=n.autoRevert,g=e._dur,_=e._startAt,m=e._targets,f=e.parent,E=f&&f.data==="nested"?f.vars.targets:m,v=e._overwrite==="auto"&&!Kl,S=e.timeline,P=n.easeReverse||d,w,b,C,F,x,y,z,B,N,H,U,X,W;if(S&&(!u||!a)&&(a="none"),e._ease=Mn(a,Ya.ease),e._rEase=P&&(Mn(P)||e._ease),e._from=!S&&!!n.runBackwards,e._from&&(e.ratio=1),!S||u&&!n.stagger){if(B=m[0]?xn(m[0]).harness:0,X=B&&n[B.prop],w=oo(n,tc),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&g?Ys:rf),_._lazy=0),s){if(Xi(e._startAt=zt.set(m,zr({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&vr(l),startAt:null,delay:0,onUpdate:c&&function(){return Nr(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!o&&!p)&&e._startAt.revert(Ys),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),C=zr({overwrite:!1,data:"isFromStart",lazy:o&&!_&&vr(l),immediateRender:o,stagger:0,parent:f},w),X&&(C[B.prop]=X),Xi(e._startAt=zt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(Ys):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&vr(l)||l&&!g,b=0;b<m.length;b++){if(x=m[b],z=x._gsap||ic(m)[b]._gsap,e._ptLookup[b]=H={},bl[z.id]&&Vi.length&&so(),U=E===m?b:E.indexOf(x),B&&(N=new B).init(x,X||w,e,U,E)!==!1&&(e._pt=F=new yr(e._pt,x,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(R){H[R]=F}),N.priority&&(y=1)),!B||X)for(C in w)Lr[C]&&(N=Ih(C,w,e,U,x,E))?N.priority&&(y=1):H[C]=F=ac.call(e,x,C,"get",w[C],U,E,0,n.stringFilter);e._op&&e._op[b]&&e.kill(x,e._op[b]),v&&e._pt&&(Oi=e,At.killTweensOf(x,H,e.globalTime(t)),W=!e.parent,Oi=0),e._pt&&l&&(bl[z.id]=1)}y&&kh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,u&&t<=0&&S.render($r,!0,!0)},Lf=function(r,e,t,i,n,a,s,o){var l=(r._pt&&r._ptCache||(r._ptCache={}))[e],c,h,d,u;if(!l)for(l=r._ptCache[e]=[],d=r._ptLookup,u=r._targets.length;u--;){if(c=d[u][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Ll=1,r.vars[e]="+=0",sc(r,s),Ll=0,o?ja(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(c)}for(u=l.length;u--;)h=l[u],c=h._pt||h,c.s=(i||i===0)&&!n?i:c.s+(i||0)+a*c.c,c.c=t-c.s,h.e&&(h.e=Dt(t)+tr(h.e)),h.b&&(h.b=c.s+tr(h.b))},Df=function(r,e){var t=r[0]?xn(r[0]).harness:0,i=t&&t.aliases,n,a,s,o;if(!i)return e;n=ua({},e);for(a in i)if(a in n)for(o=i[a].split(","),s=o.length;s--;)n[o[s]]=n[a];return n},Uf=function(r,e,t,i){var n=e.ease||i||"power1.inOut",a,s;if(ir(e))s=t[r]||(t[r]=[]),e.forEach(function(o,l){return s.push({t:l/(e.length-1)*100,v:o,e:n})});else for(a in e)s=t[a]||(t[a]=[]),a==="ease"||s.push({t:parseFloat(r),v:e[a],e:n})},Ba=function(r,e,t,i,n){return Ct(r)?r.call(e,t,i,n):Yt(r)&&~r.indexOf("random(")?Za(r):r},Nh=rc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Oh={};xr(Nh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Oh[r]=1});var zt=function(r){ih(e,r);function e(i,n,a,s){var o;typeof n=="number"&&(a.duration=n,n=a,a=null),o=r.call(this,s?n:Oa(n))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=n.parent||At,E=(ir(i)||ah(i)?Mi(i[0]):"length"in n)?[i]:Xr(i),v,S,P,w,b,C,F,x;if(o._targets=E.length?ic(E):ja("GSAP target "+i+" not found. https://gsap.com",!Fr.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||u||us(c)||us(h)){n=o.vars;var y=n.easeReverse||n.yoyoEase;if(v=o.timeline=new gr({data:"nested",defaults:_||{},targets:f&&f.data==="nested"?f.vars.targets:E}),v.kill(),v.parent=v._dp=mi(o),v._start=0,u||us(c)||us(h)){if(w=E.length,F=u&&Sh(u),ci(u))for(b in u)~Nh.indexOf(b)&&(x||(x={}),x[b]=u[b]);for(S=0;S<w;S++)P=oo(n,Oh),P.stagger=0,y&&(P.easeReverse=y),x&&ua(P,x),C=E[S],P.duration=+Ba(c,mi(o),S,C,E),P.delay=(+Ba(h,mi(o),S,C,E)||0)-o._delay,!u&&w===1&&P.delay&&(o._delay=h=P.delay,o._start+=h,P.delay=0),v.to(C,P,F?F(S,C,E):0),v._ease=tt.none;v.duration()?c=h=0:o.timeline=0}else if(g){Oa(zr(v.vars.defaults,{ease:"none"})),v._ease=Mn(g.ease||n.ease||"none");var z=0,B,N,H;if(ir(g))g.forEach(function(U){return v.to(E,U,">")}),v.duration();else{P={};for(b in g)b==="ease"||b==="easeEach"||Uf(b,g[b],P,g.easeEach);for(b in P)for(B=P[b].sort(function(U,X){return U.t-X.t}),z=0,S=0;S<B.length;S++)N=B[S],H={ease:N.e,duration:(N.t-(S?B[S-1].t:0))/100*c},H[b]=N.v,v.to(E,H,z),z+=H.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!Kl&&(Oi=mi(o),At.killTweensOf(E),Oi=0),ai(f,mi(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!c&&!g&&o._start===wt(f._time)&&vr(d)&&cf(mi(o))&&f.data!=="nested")&&(o._tTime=-_t,o.render(Math.max(0,-h)||0)),m&&vh(mi(o),m),o}var t=e.prototype;return t.render=function(i,n,a){var s=this._time,o=this._tDur,l=this._dur,c=i<0,h=i>o-_t&&!c?o:i<_t?0:i,d,u,p,g,_,m,f,E;if(!l)hf(this,i,n,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=h,E=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+i,n,a);if(d=wt(h%g),h===o?(p=this._repeat,d=l):(_=wt(h/g),p=~~_,p&&p===_?(d=l,p--):d>l&&(d=l)),m=this._yoyo&&p&1,m&&(d=l-d),_=ha(this._tTime,g),d===s&&!a&&this._initted&&p===_)return this._tTime=h,this;p!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(wt(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(xh(this,c?i:d,a,n,h))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&p!==_))return this;if(l!==this._dur)return this.render(i,n,a)}if(this._rEase){var v=d<s;if(v!==this._inv){var S=v?s:l-s;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=f=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=f=this._ease(d/l);if(this._from&&(this.ratio=f=1-f),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!n&&!_&&(Nr(this,"onStart"),this._tTime!==h))return this;for(u=this._pt;u;)u.r(f,u.d),u=u._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),n,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!n&&(c&&wl(this,i,n,a),Nr(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!n&&this.parent&&Nr(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&wl(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xi(this,1),!n&&!(c&&!s)&&(h||s||m)&&(Nr(this,h===o?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,n,a,s,o){Ja||Ur.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||sc(this,l),c=this._ease(l/this._dur),Lf(this,i,n,a,s,c,l,o)?this.resetTo(i,n,a,s,1):(Eo(this,0),this.parent||gh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,n){if(n===void 0&&(n="all"),!i&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?Ra(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Kt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,n,Oi&&Oi.vars.overwrite!==!0)._first||Ra(this),this.parent&&a!==this.timeline.totalDuration()&&da(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,o=i?Xr(i):s,l=this._ptLookup,c=this._pt,h,d,u,p,g,_,m;if((!n||n==="all")&&of(s,o))return n==="all"&&(this._pt=0),Ra(this);for(h=this._op=this._op||[],n!=="all"&&(Yt(n)&&(g={},xr(n,function(f){return g[f]=1}),n=g),n=Df(s,n)),m=s.length;m--;)if(~o.indexOf(s[m])){d=l[m],n==="all"?(h[m]=n,p=d,u={}):(u=h[m]=h[m]||{},p=n);for(g in p)_=d&&d[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Mo(this,_,"_pt"),delete d[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&c&&Ra(this),this},e.to=function(i,n){return new e(i,n,arguments[2])},e.from=function(i,n){return Fa(1,arguments)},e.delayedCall=function(i,n,a,s){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,n,a){return Fa(2,arguments)},e.set=function(i,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(i,n)},e.killTweensOf=function(i,n,a){return At.killTweensOf(i,n,a)},e}(Qa);zr(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xr("staggerTo,staggerFrom,staggerFromTo",function(r){zt[r]=function(){var e=new gr,t=Rl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var oc=function(r,e,t){return r[e]=t},Fh=function(r,e,t){return r[e](t)},If=function(r,e,t,i){return r[e](i.fp,t)},Nf=function(r,e,t){return r.setAttribute(e,t)},lc=function(r,e){return Ct(r[e])?Fh:Zl(r[e])&&r.setAttribute?Nf:oc},Bh=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e6)/1e6,e)},Of=function(r,e){return e.set(e.t,e.p,!!(e.s+e.c*r),e)},zh=function(r,e){var t=e._pt,i="";if(!r&&e.b)i=e.b;else if(r===1&&e.e)i=e.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*r):Math.round((t.s+t.c*r)*1e4)/1e4)+i,t=t._next;i+=e.c}e.set(e.t,e.p,i,e)},cc=function(r,e){for(var t=e._pt;t;)t.r(r,t.d),t=t._next},Ff=function(r,e,t,i){for(var n=this._pt,a;n;)a=n._next,n.p===i&&n.modifier(r,e,t),n=a},Bf=function(r){for(var e=this._pt,t,i;e;)i=e._next,e.p===r&&!e.op||e.op===r?Mo(this,e,"_pt"):e.dep||(t=1),e=i;return!t},zf=function(r,e,t,i){i.mSet(r,e,i.m.call(i.tween,t,i.mt),i)},kh=function(r){for(var e=r._pt,t,i,n,a;e;){for(t=e._next,i=n;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:n=e,(e._next=i)?i._prev=e:a=e,e=t}r._pt=n},yr=function(){function r(t,i,n,a,s,o,l,c,h){this.t=i,this.s=a,this.c=s,this.p=n,this.r=o||Bh,this.d=l||this,this.set=c||oc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(t,i,n){this.mSet=this.mSet||this.set,this.set=zf,this.m=t,this.mt=n,this.tween=i},r}();xr(rc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return tc[r]=1});Br.TweenMax=Br.TweenLite=zt;Br.TimelineLite=Br.TimelineMax=gr;At=new gr({sortChildren:!1,defaults:Ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fr.stringFilter=Lh;var Sn=[],Ks={},kf=[],Uc=0,Hf=0,Bo=function(r){return(Ks[r]||kf).map(function(e){return e()})},Dl=function(){var r=Date.now(),e=[];r-Uc>2&&(Bo("matchMediaInit"),Sn.forEach(function(t){var i=t.queries,n=t.conditions,a,s,o,l;for(s in i)a=ti.matchMedia(i[s]).matches,a&&(o=1),a!==n[s]&&(n[s]=a,l=1);l&&(t.revert(),o&&e.push(t))}),Bo("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),Uc=r,Bo("matchMedia"))},Hh=function(){function r(t,i){this.selector=i&&Cl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Hf++,t&&this.add(t)}var e=r.prototype;return e.add=function(t,i,n){Ct(t)&&(n=i,i=t,t=Ct);var a=this,s=function(){var o=bt,l=a.selector,c;return o&&o!==a&&o.data.push(a),n&&(a.selector=Cl(n)),bt=a,c=i.apply(a,arguments),Ct(c)&&a._r.push(c),bt=o,a.selector=l,a.isReverted=!1,c};return a.last=s,t===Ct?s(a,function(o){return a.add(null,o)}):t?a[t]=s:s},e.ignore=function(t){var i=bt;bt=null,t(this),bt=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof r?t.push.apply(t,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var n=this;if(t?function(){for(var s=n.getTweens(),o=n.data.length,l;o--;)l=n.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(t)}),o=n.data.length;o--;)l=n.data[o],l instanceof gr?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof zt)&&l.revert&&l.revert(t);n._r.forEach(function(c){return c(t,n)}),n.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var a=Sn.length;a--;)Sn[a].id===this.id&&Sn.splice(a,1)},e.revert=function(t){this.kill(t||{})},r}(),Vf=function(){function r(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=r.prototype;return e.add=function(t,i,n){ci(t)||(t={matches:t});var a=new Hh(0,n||this.scope),s=a.conditions={},o,l,c;bt&&!a.selector&&(a.selector=bt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=t;for(l in t)l==="all"?c=1:(o=ti.matchMedia(t[l]),o&&(Sn.indexOf(a)<0&&Sn.push(a),(s[l]=o.matches)&&(c=1),o.addListener?o.addListener(Dl):o.addEventListener("change",Dl)));return c&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},r}(),co={registerPlugin:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];e.forEach(function(i){return Rh(i)})},timeline:function(r){return new gr(r)},getTweensOf:function(r,e){return At.getTweensOf(r,e)},getProperty:function(r,e,t,i){Yt(r)&&(r=Xr(r)[0]);var n=xn(r||{}).get,a=t?mh:ph;return t==="native"&&(t=""),r&&(e?a((Lr[e]&&Lr[e].get||n)(r,e,t,i)):function(s,o,l){return a((Lr[s]&&Lr[s].get||n)(r,s,o,l))})},quickSetter:function(r,e,t){if(r=Xr(r),r.length>1){var i=r.map(function(c){return Tr.quickSetter(c,e,t)}),n=i.length;return function(c){for(var h=n;h--;)i[h](c)}}r=r[0]||{};var a=Lr[e],s=xn(r),o=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(c){var h=new a;Qn._pt=0,h.init(r,t?c+t:c,Qn,0,[r]),h.render(1,h),Qn._pt&&cc(1,Qn)}:s.set(r,o);return a?l:function(c){return l(r,o,t?c+t:c,s,1)}},quickTo:function(r,e,t){var i,n=Tr.to(r,zr((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),t||{})),a=function(s,o,l){return n.resetTo(e,s,o,l)};return a.tween=n,a},isTweening:function(r){return At.getTweensOf(r,!0).length>0},defaults:function(r){return r&&r.ease&&(r.ease=Mn(r.ease,Ya.ease)),Rc(Ya,r||{})},config:function(r){return Rc(Fr,r||{})},registerEffect:function(r){var e=r.name,t=r.effect,i=r.plugins,n=r.defaults,a=r.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Lr[s]&&!Br[s]&&ja(e+" effect requires "+s+" plugin.")}),Io[e]=function(s,o,l){return t(Xr(s),zr(o||{},n),l)},a&&(gr.prototype[e]=function(s,o,l){return this.add(Io[e](s,ci(o)?o:(l=o)&&{},this),l)})},registerEase:function(r,e){tt[r]=Mn(e)},parseEase:function(r,e){return arguments.length?Mn(r,e):tt},getById:function(r){return At.getById(r)},exportRoot:function(r,e){r===void 0&&(r={});var t=new gr(r),i,n;for(t.smoothChildTiming=vr(r.smoothChildTiming),At.remove(t),t._dp=0,t._time=t._tTime=At._time,i=At._first;i;)n=i._next,(e||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&ai(t,i,i._start-i._delay),i=n;return ai(At,t,0),t},context:function(r,e){return r?new Hh(r,e):bt},matchMedia:function(r){return new Vf(r)},matchMediaRefresh:function(){return Sn.forEach(function(r){var e=r.conditions,t,i;for(i in e)e[i]&&(e[i]=!1,t=1);t&&r.revert()})||Dl()},addEventListener:function(r,e){var t=Ks[r]||(Ks[r]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(r,e){var t=Ks[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},utils:{wrap:xf,wrapYoyo:yf,distribute:Sh,random:Th,snap:Eh,normalize:vf,getUnit:tr,clamp:pf,splitColor:Ch,toArray:Xr,selector:Cl,mapRange:wh,pipe:gf,unitize:_f,interpolate:Mf,shuffle:Mh},install:ch,effects:Io,ticker:Ur,updateRoot:gr.updateRoot,plugins:Lr,globalTimeline:At,core:{PropTween:yr,globals:uh,Tween:zt,Timeline:gr,Animation:Qa,getCache:xn,_removeLinkedListItem:Mo,reverting:function(){return Kt},context:function(r){return r&&bt&&(bt.data.push(r),r._ctx=bt),bt},suppressOverwrites:function(r){return Kl=r}}};xr("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return co[r]=zt[r]});Ur.add(gr.updateRoot);Qn=co.to({},{duration:0});var Gf=function(r,e){for(var t=r._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},Wf=function(r,e){var t=r._targets,i,n,a;for(i in e)for(n=t.length;n--;)a=r._ptLookup[n][i],a&&(a=a.d)&&(a._pt&&(a=Gf(a,i)),a&&a.modifier&&a.modifier(e[i],r,t[n],i))},zo=function(r,e){return{name:r,headless:1,rawVars:1,init:function(t,i,n){n._onInit=function(a){var s,o;if(Yt(i)&&(s={},xr(i,function(l){return s[l]=1}),i=s),e){s={};for(o in i)s[o]=e(i[o]);i=s}Wf(a,i)}}}},Tr=co.registerPlugin({name:"attr",init:function(r,e,t,i,n){var a,s,o;this.tween=t;for(a in e)o=r.getAttribute(a)||"",s=this.add(r,"setAttribute",(o||0)+"",e[a],i,n,0,0,a),s.op=a,s.b=o,this._props.push(a)},render:function(r,e){for(var t=e._pt;t;)Kt?t.set(t.t,t.p,t.b,t):t.r(r,t.d),t=t._next}},{name:"endArray",headless:1,init:function(r,e){for(var t=e.length;t--;)this.add(r,t,r[t]||0,e[t],0,0,0,0,0,1)}},zo("roundProps",Pl),zo("modifiers"),zo("snap",Eh))||co;zt.version=gr.version=Tr.version="3.15.0";lh=1;Jl()&&fa();tt.Power0;tt.Power1;tt.Power2;tt.Power3;tt.Power4;tt.Linear;tt.Quad;tt.Cubic;tt.Quart;tt.Quint;tt.Strong;tt.Elastic;tt.Back;tt.SteppedEase;tt.Bounce;tt.Sine;tt.Expo;tt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ic,Fi,ia,uc,gn,Nc,hc,$f=function(){return typeof window<"u"},Si={},cn=180/Math.PI,na=Math.PI/180,Un=Math.atan2,Oc=1e8,dc=/([A-Z])/g,Xf=/(left|right|width|margin|padding|x)/i,qf=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ul=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e4)/1e4+e.u,e)},Yf=function(r,e){return e.set(e.t,e.p,r===1?e.e:Math.round((e.s+e.c*r)*1e4)/1e4+e.u,e)},jf=function(r,e){return e.set(e.t,e.p,r?Math.round((e.s+e.c*r)*1e4)/1e4+e.u:e.b,e)},Kf=function(r,e){return e.set(e.t,e.p,r===1?e.e:r?Math.round((e.s+e.c*r)*1e4)/1e4+e.u:e.b,e)},Zf=function(r,e){var t=e.s+e.c*r;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},Vh=function(r,e){return e.set(e.t,e.p,r?e.e:e.b,e)},Gh=function(r,e){return e.set(e.t,e.p,r!==1?e.b:e.e,e)},Jf=function(r,e,t){return r.style[e]=t},Qf=function(r,e,t){return r.style.setProperty(e,t)},ep=function(r,e,t){return r._gsap[e]=t},tp=function(r,e,t){return r._gsap.scaleX=r._gsap.scaleY=t},rp=function(r,e,t,i,n){var a=r._gsap;a.scaleX=a.scaleY=t,a.renderTransform(n,a)},ip=function(r,e,t,i,n){var a=r._gsap;a[e]=t,a.renderTransform(n,a)},Rt="transform",Mr=Rt+"Origin",np=function r(e,t){var i=this,n=this.target,a=n.style,s=n._gsap;if(e in Si&&a){if(this.tfm=this.tfm||{},e!=="transform")e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=gi(n,o)}):this.tfm[e]=s.x?s[e]:gi(n,e),e===Mr&&(this.tfm.zOrigin=s.zOrigin);else return si.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(Rt)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Mr,t,"")),e=Rt}(a||t)&&this.props.push(e,t,a[e])},Wh=function(r){r.translate&&(r.removeProperty("translate"),r.removeProperty("scale"),r.removeProperty("rotate"))},ap=function(){var r=this.props,e=this.target,t=e.style,i=e._gsap,n,a;for(n=0;n<r.length;n+=3)r[n+1]?r[n+1]===2?e[r[n]](r[n+2]):e[r[n]]=r[n+2]:r[n+2]?t[r[n]]=r[n+2]:t.removeProperty(r[n].substr(0,2)==="--"?r[n]:r[n].replace(dc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=hc(),(!n||!n.isStart)&&!t[Rt]&&(Wh(t),i.zOrigin&&t[Mr]&&(t[Mr]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$h=function(r,e){var t={target:r,props:[],revert:ap,save:np};return r._gsap||Tr.core.getCache(r),e&&r.style&&r.nodeType&&e.split(",").forEach(function(i){return t.save(i)}),t},Xh,Il=function(r,e){var t=Fi.createElementNS?Fi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),r):Fi.createElement(r);return t&&t.style?t:Fi.createElement(r)},Or=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(dc,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,pa(t)||t,1)||""},Fc="O,Moz,ms,Ms,Webkit".split(","),pa=function(r,e,t){var i=e||gn,n=i.style,a=5;if(r in n&&!t)return r;for(r=r.charAt(0).toUpperCase()+r.substr(1);a--&&!(Fc[a]+r in n););return a<0?null:(a===3?"ms":a>=0?Fc[a]:"")+r},Nl=function(){$f()&&window.document&&(Ic=window,Fi=Ic.document,ia=Fi.documentElement,gn=Il("div")||{style:{}},Il("div"),Rt=pa(Rt),Mr=Rt+"Origin",gn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xh=!!pa("perspective"),hc=Tr.core.reverting,uc=1)},Bc=function(r){var e=r.ownerSVGElement,t=Il("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=r.cloneNode(!0),n;i.style.display="block",t.appendChild(i),ia.appendChild(t);try{n=i.getBBox()}catch{}return t.removeChild(i),ia.removeChild(t),n},zc=function(r,e){for(var t=e.length;t--;)if(r.hasAttribute(e[t]))return r.getAttribute(e[t])},qh=function(r){var e,t;try{e=r.getBBox()}catch{e=Bc(r),t=1}return e&&(e.width||e.height)||t||(e=Bc(r)),e&&!e.width&&!e.x&&!e.y?{x:+zc(r,["x","cx","x1"])||0,y:+zc(r,["y","cy","y1"])||0,width:0,height:0}:e},Yh=function(r){return!!(r.getCTM&&(!r.parentNode||r.ownerSVGElement)&&qh(r))},qi=function(r,e){if(e){var t=r.style,i;e in Si&&e!==Mr&&(e=Rt),t.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(i==="--"?e:e.replace(dc,"-$1").toLowerCase())):t.removeAttribute(e)}},Bi=function(r,e,t,i,n,a){var s=new yr(r._pt,e,t,0,1,a?Gh:Vh);return r._pt=s,s.b=i,s.e=n,r._props.push(t),s},kc={deg:1,rad:1,turn:1},sp={grid:1,flex:1},Yi=function r(e,t,i,n){var a=parseFloat(i)||0,s=(i+"").trim().substr((a+"").length)||"px",o=gn.style,l=Xf.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",p=n==="%",g,_,m,f;if(n===s||!a||kc[n]||kc[s])return a;if(s!=="px"&&!u&&(a=r(e,t,i,"px")),f=e.getCTM&&Yh(e),(p||s==="%")&&(Si[t]||~t.indexOf("adius")))return g=f?e.getBBox()[l?"width":"height"]:e[h],Dt(p?a/g*d:a/100*g);if(o[l?"width":"height"]=d+(u?s:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Fi||!_.appendChild)&&(_=Fi.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Ur.time&&!m.uncache)return Dt(a/m.width*d);if(p&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=d+n,g=e[h],E?e.style[t]=E:qi(e,t)}else(p||s==="%")&&!sp[Or(_,"display")]&&(o.position=Or(e,"position")),_===e&&(o.position="static"),_.appendChild(gn),g=gn[h],_.removeChild(gn),o.position="absolute";return l&&p&&(m=xn(_),m.time=Ur.time,m.width=_[h]),Dt(u?g*a/d:g&&a?d/g*a:0)},gi=function(r,e,t,i){var n;return uc||Nl(),e in si&&e!=="transform"&&(e=si[e],~e.indexOf(",")&&(e=e.split(",")[0])),Si[e]&&e!=="transform"?(n=ts(r,i),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:ho(Or(r,Mr))+" "+n.zOrigin+"px"):(n=r.style[e],(!n||n==="auto"||i||~(n+"").indexOf("calc("))&&(n=uo[e]&&uo[e](r,e,t)||Or(r,e)||dh(r,e)||(e==="opacity"?1:0))),t&&!~(n+"").trim().indexOf(" ")?Yi(r,e,n,t)+t:n},op=function(r,e,t,i){if(!t||t==="none"){var n=pa(e,r,1),a=n&&Or(r,n,1);a&&a!==t?(e=n,t=a):e==="borderColor"&&(t=Or(r,"borderTopColor"))}var s=new yr(this._pt,r.style,e,0,1,zh),o=0,l=0,c,h,d,u,p,g,_,m,f,E,v,S;if(s.b=t,s.e=i,t+="",i+="",i.substring(0,6)==="var(--"&&(i=Or(r,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=r.style[e],r.style[e]=i,i=Or(r,e)||i,g?r.style[e]=g:qi(r,e)),c=[t,i],Lh(c),t=c[0],i=c[1],d=t.match(Jn)||[],S=i.match(Jn)||[],S.length){for(;h=Jn.exec(i);)_=h[0],f=i.substring(o,h.index),p?p=(p+1)%5:(f.substr(-5)==="rgba("||f.substr(-5)==="hsla(")&&(p=1),_!==(g=d[l++]||"")&&(u=parseFloat(g)||0,v=g.substr((u+"").length),_.charAt(1)==="="&&(_=ra(u,_)+v),m=parseFloat(_),E=_.substr((m+"").length),o=Jn.lastIndex-E.length,E||(E=E||Fr.units[e]||v,o===i.length&&(i+=E,s.e+=E)),v!==E&&(u=Yi(r,e,g,E)||0),s._pt={_next:s._pt,p:f||l===1?f:",",s:u,c:m-u,m:p&&p<4||e==="zIndex"?Math.round:0});s.c=o<i.length?i.substring(o,i.length):""}else s.r=e==="display"&&i==="none"?Gh:Vh;return oh.test(i)&&(s.e=0),this._pt=s,s},Hc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lp=function(r){var e=r.split(" "),t=e[0],i=e[1]||"50%";return(t==="top"||t==="bottom"||i==="left"||i==="right")&&(r=t,t=i,i=r),e[0]=Hc[t]||t,e[1]=Hc[i]||i,e.join(" ")},cp=function(r,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,i=t.style,n=e.u,a=t._gsap,s,o,l;if(n==="all"||n===!0)i.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)s=n[l],Si[s]&&(o=1,s=s==="transformOrigin"?Mr:Rt),qi(t,s);o&&(qi(t,Rt),a&&(a.svg&&t.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ts(t,1),a.uncache=1,Wh(i)))}},uo={clearProps:function(r,e,t,i,n){if(n.data!=="isFromStart"){var a=r._pt=new yr(r._pt,e,t,0,0,cp);return a.u=i,a.pr=-10,a.tween=n,r._props.push(t),1}}},es=[1,0,0,1,0,0],jh={},Kh=function(r){return r==="matrix(1, 0, 0, 1, 0, 0)"||r==="none"||!r},Vc=function(r){var e=Or(r,Rt);return Kh(e)?es:e.substr(7).match(sh).map(Dt)},fc=function(r,e){var t=r._gsap||xn(r),i=r.style,n=Vc(r),a,s,o,l;return t.svg&&r.getAttribute("transform")?(o=r.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?es:n):(n===es&&!r.offsetParent&&r!==ia&&!t.svg&&(o=i.display,i.display="block",a=r.parentNode,(!a||!r.offsetParent&&!r.getBoundingClientRect().width)&&(l=1,s=r.nextElementSibling,ia.appendChild(r)),n=Vc(r),o?i.display=o:qi(r,"display"),l&&(s?a.insertBefore(r,s):a?a.appendChild(r):ia.removeChild(r))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Ol=function(r,e,t,i,n,a){var s=r._gsap,o=n||fc(r,!0),l=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,d=s.yOffset||0,u=o[0],p=o[1],g=o[2],_=o[3],m=o[4],f=o[5],E=e.split(" "),v=parseFloat(E[0])||0,S=parseFloat(E[1])||0,P,w,b,C;t?o!==es&&(w=u*_-p*g)&&(b=v*(_/w)+S*(-g/w)+(g*f-_*m)/w,C=v*(-p/w)+S*(u/w)-(u*f-p*m)/w,v=b,S=C):(P=qh(r),v=P.x+(~E[0].indexOf("%")?v/100*P.width:v),S=P.y+(~(E[1]||E[0]).indexOf("%")?S/100*P.height:S)),i||i!==!1&&s.smooth?(m=v-l,f=S-c,s.xOffset=h+(m*u+f*g)-m,s.yOffset=d+(m*p+f*_)-f):s.xOffset=s.yOffset=0,s.xOrigin=v,s.yOrigin=S,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!t,r.style[Mr]="0px 0px",a&&(Bi(a,s,"xOrigin",l,v),Bi(a,s,"yOrigin",c,S),Bi(a,s,"xOffset",h,s.xOffset),Bi(a,s,"yOffset",d,s.yOffset)),r.setAttribute("data-svg-origin",v+" "+S)},ts=function(r,e){var t=r._gsap||new Uh(r);if("x"in t&&!e&&!t.uncache)return t;var i=r.style,n=t.scaleX<0,a="px",s="deg",o=getComputedStyle(r),l=Or(r,Mr)||"0",c,h,d,u,p,g,_,m,f,E,v,S,P,w,b,C,F,x,y,z,B,N,H,U,X,W,R,ae,ve,Ae,Ce,Y;return c=h=d=g=_=m=f=E=v=0,u=p=1,t.svg=!!(r.getCTM&&Yh(r)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(i[Rt]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[Rt]!=="none"?o[Rt]:"")),i.scale=i.rotate=i.translate="none"),w=fc(r,t.svg),t.svg&&(t.uncache?(X=r.getBBox(),l=t.xOrigin-X.x+"px "+(t.yOrigin-X.y)+"px",U=""):U=!e&&r.getAttribute("data-svg-origin"),Ol(r,U||l,!!U||t.originIsAbsolute,t.smooth!==!1,w)),S=t.xOrigin||0,P=t.yOrigin||0,w!==es&&(x=w[0],y=w[1],z=w[2],B=w[3],c=N=w[4],h=H=w[5],w.length===6?(u=Math.sqrt(x*x+y*y),p=Math.sqrt(B*B+z*z),g=x||y?Un(y,x)*cn:0,f=z||B?Un(z,B)*cn+g:0,f&&(p*=Math.abs(Math.cos(f*na))),t.svg&&(c-=S-(S*x+P*z),h-=P-(S*y+P*B))):(Y=w[6],Ae=w[7],R=w[8],ae=w[9],ve=w[10],Ce=w[11],c=w[12],h=w[13],d=w[14],b=Un(Y,ve),_=b*cn,b&&(C=Math.cos(-b),F=Math.sin(-b),U=N*C+R*F,X=H*C+ae*F,W=Y*C+ve*F,R=N*-F+R*C,ae=H*-F+ae*C,ve=Y*-F+ve*C,Ce=Ae*-F+Ce*C,N=U,H=X,Y=W),b=Un(-z,ve),m=b*cn,b&&(C=Math.cos(-b),F=Math.sin(-b),U=x*C-R*F,X=y*C-ae*F,W=z*C-ve*F,Ce=B*F+Ce*C,x=U,y=X,z=W),b=Un(y,x),g=b*cn,b&&(C=Math.cos(b),F=Math.sin(b),U=x*C+y*F,X=N*C+H*F,y=y*C-x*F,H=H*C-N*F,x=U,N=X),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,m=180-m),u=Dt(Math.sqrt(x*x+y*y+z*z)),p=Dt(Math.sqrt(H*H+Y*Y)),b=Un(N,H),f=Math.abs(b)>2e-4?b*cn:0,v=Ce?1/(Ce<0?-Ce:Ce):0),t.svg&&(U=r.getAttribute("transform"),t.forceCSS=r.setAttribute("transform","")||!Kh(Or(r,Rt)),U&&r.setAttribute("transform",U))),Math.abs(f)>90&&Math.abs(f)<270&&(n?(u*=-1,f+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,f+=f<=0?180:-180)),e=e||t.uncache,t.x=c-((t.xPercent=c&&(!e&&t.xPercent||(Math.round(r.offsetWidth/2)===Math.round(-c)?-50:0)))?r.offsetWidth*t.xPercent/100:0)+a,t.y=h-((t.yPercent=h&&(!e&&t.yPercent||(Math.round(r.offsetHeight/2)===Math.round(-h)?-50:0)))?r.offsetHeight*t.yPercent/100:0)+a,t.z=d+a,t.scaleX=Dt(u),t.scaleY=Dt(p),t.rotation=Dt(g)+s,t.rotationX=Dt(_)+s,t.rotationY=Dt(m)+s,t.skewX=f+s,t.skewY=E+s,t.transformPerspective=v+a,(t.zOrigin=parseFloat(l.split(" ")[2])||!e&&t.zOrigin||0)&&(i[Mr]=ho(l)),t.xOffset=t.yOffset=0,t.force3D=Fr.force3D,t.renderTransform=t.svg?hp:Xh?Zh:up,t.uncache=0,t},ho=function(r){return(r=r.split(" "))[0]+" "+r[1]},ko=function(r,e,t){var i=tr(e);return Dt(parseFloat(e)+parseFloat(Yi(r,"x",t+"px",i)))+i},up=function(r,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Zh(r,e)},Qi="0deg",xa="0px",en=") ",Zh=function(r,e){var t=e||this,i=t.xPercent,n=t.yPercent,a=t.x,s=t.y,o=t.z,l=t.rotation,c=t.rotationY,h=t.rotationX,d=t.skewX,u=t.skewY,p=t.scaleX,g=t.scaleY,_=t.transformPerspective,m=t.force3D,f=t.target,E=t.zOrigin,v="",S=m==="auto"&&r&&r!==1||m===!0;if(E&&(h!==Qi||c!==Qi)){var P=parseFloat(c)*na,w=Math.sin(P),b=Math.cos(P),C;P=parseFloat(h)*na,C=Math.cos(P),a=ko(f,a,w*C*-E),s=ko(f,s,-Math.sin(P)*-E),o=ko(f,o,b*C*-E+E)}_!==xa&&(v+="perspective("+_+en),(i||n)&&(v+="translate("+i+"%, "+n+"%) "),(S||a!==xa||s!==xa||o!==xa)&&(v+=o!==xa||S?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+en),l!==Qi&&(v+="rotate("+l+en),c!==Qi&&(v+="rotateY("+c+en),h!==Qi&&(v+="rotateX("+h+en),(d!==Qi||u!==Qi)&&(v+="skew("+d+", "+u+en),(p!==1||g!==1)&&(v+="scale("+p+", "+g+en),f.style[Rt]=v||"translate(0, 0)"},hp=function(r,e){var t=e||this,i=t.xPercent,n=t.yPercent,a=t.x,s=t.y,o=t.rotation,l=t.skewX,c=t.skewY,h=t.scaleX,d=t.scaleY,u=t.target,p=t.xOrigin,g=t.yOrigin,_=t.xOffset,m=t.yOffset,f=t.forceCSS,E=parseFloat(a),v=parseFloat(s),S,P,w,b,C;o=parseFloat(o),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,o+=c),o||l?(o*=na,l*=na,S=Math.cos(o)*h,P=Math.sin(o)*h,w=Math.sin(o-l)*-d,b=Math.cos(o-l)*d,l&&(c*=na,C=Math.tan(l-c),C=Math.sqrt(1+C*C),w*=C,b*=C,c&&(C=Math.tan(c),C=Math.sqrt(1+C*C),S*=C,P*=C)),S=Dt(S),P=Dt(P),w=Dt(w),b=Dt(b)):(S=h,b=d,P=w=0),(E&&!~(a+"").indexOf("px")||v&&!~(s+"").indexOf("px"))&&(E=Yi(u,"x",a,"px"),v=Yi(u,"y",s,"px")),(p||g||_||m)&&(E=Dt(E+p-(p*S+g*w)+_),v=Dt(v+g-(p*P+g*b)+m)),(i||n)&&(C=u.getBBox(),E=Dt(E+i/100*C.width),v=Dt(v+n/100*C.height)),C="matrix("+S+","+P+","+w+","+b+","+E+","+v+")",u.setAttribute("transform",C),f&&(u.style[Rt]=C)},dp=function(r,e,t,i,n){var a=360,s=Yt(n),o=parseFloat(n)*(s&&~n.indexOf("rad")?cn:1),l=o-i,c=i+l+"deg",h,d;return s&&(h=n.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Oc)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Oc)%a-~~(l/a)*a)),r._pt=d=new yr(r._pt,e,t,i,l,Yf),d.e=c,d.u="deg",r._props.push(t),d},Gc=function(r,e){for(var t in e)r[t]=e[t];return r},fp=function(r,e,t){var i=Gc({},t._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=t.style,s,o,l,c,h,d,u,p;i.svg?(l=t.getAttribute("transform"),t.setAttribute("transform",""),a[Rt]=e,s=ts(t,1),qi(t,Rt),t.setAttribute("transform",l)):(l=getComputedStyle(t)[Rt],a[Rt]=e,s=ts(t,1),a[Rt]=l);for(o in Si)l=i[o],c=s[o],l!==c&&n.indexOf(o)<0&&(u=tr(l),p=tr(c),h=u!==p?Yi(t,o,l,p):parseFloat(l),d=parseFloat(c),r._pt=new yr(r._pt,s,o,h,d-h,Ul),r._pt.u=p||0,r._props.push(o));Gc(s,i)};xr("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",a="Left",s=(e<3?[t,i,n,a]:[t+a,t+i,n+i,n+a]).map(function(o){return e<2?r+o:"border"+o+r});uo[e>1?"border"+r:r]=function(o,l,c,h,d){var u,p;if(arguments.length<4)return u=s.map(function(g){return gi(o,g,c)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(h+"").split(" "),p={},s.forEach(function(g,_){return p[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,p,d)}});var Jh={name:"css",register:Nl,targetTest:function(r){return r.style&&r.nodeType},init:function(r,e,t,i,n){var a=this._props,s=r.style,o=t.vars.startAt,l,c,h,d,u,p,g,_,m,f,E,v,S,P,w,b,C;uc||Nl(),this.styles=this.styles||$h(r),b=this.styles.props,this.tween=t;for(g in e)if(g!=="autoRound"&&(c=e[g],!(Lr[g]&&Ih(g,e,t,i,r,n)))){if(u=typeof c,p=uo[g],u==="function"&&(c=c.call(t,i,r,n),u=typeof c),u==="string"&&~c.indexOf("random(")&&(c=Za(c)),p)p(this,r,g,c,t)&&(w=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(r).getPropertyValue(g)+"").trim(),c+="",Gi.lastIndex=0,Gi.test(l)||(_=tr(l),m=tr(c),m?_!==m&&(l=Yi(r,g,l,m)+m):_&&(c+=_)),this.add(s,"setProperty",l,c,i,n,0,0,g),a.push(g),b.push(g,0,s[g]);else if(u!=="undefined"){if(o&&g in o?(l=typeof o[g]=="function"?o[g].call(t,i,r,n):o[g],Yt(l)&&~l.indexOf("random(")&&(l=Za(l)),tr(l+"")||l==="auto"||(l+=Fr.units[g]||tr(gi(r,g))||""),(l+"").charAt(1)==="="&&(l=gi(r,g))):l=gi(r,g),d=parseFloat(l),f=u==="string"&&c.charAt(1)==="="&&c.substr(0,2),f&&(c=c.substr(2)),h=parseFloat(c),g in si&&(g==="autoAlpha"&&(d===1&&gi(r,"visibility")==="hidden"&&h&&(d=0),b.push("visibility",0,s.visibility),Bi(this,s,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=si[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in Si,E){if(this.styles.save(g),C=c,u==="string"&&c.substring(0,6)==="var(--"){if(c=Or(r,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var F=r.style.perspective;r.style.perspective=c,c=Or(r,"perspective"),F?r.style.perspective=F:qi(r,"perspective")}h=parseFloat(c)}if(v||(S=r._gsap,S.renderTransform&&!e.parseTransform||ts(r,e.parseTransform),P=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new yr(this._pt,s,Rt,0,1,S.renderTransform,S,0,-1),v.dep=1),g==="scale")this._pt=new yr(this._pt,S,"scaleY",S.scaleY,(f?ra(S.scaleY,f+h):h)-S.scaleY||0,Ul),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(Mr,0,s[Mr]),c=lp(c),S.svg?Ol(r,c,0,P,0,this):(m=parseFloat(c.split(" ")[2])||0,m!==S.zOrigin&&Bi(this,S,"zOrigin",S.zOrigin,m),Bi(this,s,g,ho(l),ho(c)));continue}else if(g==="svgOrigin"){Ol(r,c,1,P,0,this);continue}else if(g in jh){dp(this,S,g,d,f?ra(d,f+c):c);continue}else if(g==="smoothOrigin"){Bi(this,S,"smooth",S.smooth,c);continue}else if(g==="force3D"){S[g]=c;continue}else if(g==="transform"){fp(this,c,r);continue}}else g in s||(g=pa(g)||g);if(E||(h||h===0)&&(d||d===0)&&!qf.test(c)&&g in s)_=(l+"").substr((d+"").length),h||(h=0),m=tr(c)||(g in Fr.units?Fr.units[g]:_),_!==m&&(d=Yi(r,g,l,m)),this._pt=new yr(this._pt,E?S:s,g,d,(f?ra(d,f+h):h)-d,!E&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?Zf:Ul),this._pt.u=m||0,E&&C!==c?(this._pt.b=l,this._pt.e=C,this._pt.r=Kf):_!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=jf);else if(g in s)op.call(this,r,g,l,f?f+c:c);else if(g in r)this.add(r,g,l||r[g],f?f+c:c,i,n);else if(g!=="parseTransform"){ec(g,c);continue}E||(g in s?b.push(g,0,s[g]):typeof r[g]=="function"?b.push(g,2,r[g]()):b.push(g,1,l||r[g])),a.push(g)}}w&&kh(this)},render:function(r,e){if(e.tween._time||!hc())for(var t=e._pt;t;)t.r(r,t.d),t=t._next;else e.styles.revert()},get:gi,aliases:si,getSetter:function(r,e,t){var i=si[e];return i&&i.indexOf(",")<0&&(e=i),e in Si&&e!==Mr&&(r._gsap.x||gi(r,"x"))?t&&Nc===t?e==="scale"?tp:ep:(Nc=t||{})&&(e==="scale"?rp:ip):r.style&&!Zl(r.style[e])?Jf:~e.indexOf("-")?Qf:lc(r,e)},core:{_removeProperty:qi,_getMatrix:fc}};Tr.utils.checkPrefix=pa;Tr.core.getStyleSaver=$h;(function(r,e,t,i){var n=xr(r+","+e+","+t,function(a){Si[a]=1});xr(e,function(a){Fr.units[a]="deg",jh[a]=1}),si[n[13]]=r+","+e,xr(i,function(a){var s=a.split(":");si[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Fr.units[r]="px"});Tr.registerPlugin(Jh);var Et=Tr.registerPlugin(Jh)||Tr;Et.core.Tween;function pp(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function mp(r,e,t){return e&&pp(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jt,Zs,Ir,zi,ki,aa,Qh,un,sa,ed,vi,Jr,td,rd=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},id=1,ea=[],et=[],li=[],za=Date.now,Fl=function(r,e){return e},gp=function(){var r=sa.core,e=r.bridge||{},t=r._scrollers,i=r._proxies;t.push.apply(t,et),i.push.apply(i,li),et=t,li=i,Fl=function(n,a){return e[n](a)}},Wi=function(r,e){return~li.indexOf(r)&&li[li.indexOf(r)+1][e]},ka=function(r){return!!~ed.indexOf(r)},or=function(r,e,t,i,n){return r.addEventListener(e,t,{passive:i!==!1,capture:!!n})},sr=function(r,e,t,i){return r.removeEventListener(e,t,!!i)},hs="scrollLeft",ds="scrollTop",Bl=function(){return vi&&vi.isPressed||et.cache++},fo=function(r,e){var t=function i(n){if(n||n===0){id&&(Ir.history.scrollRestoration="manual");var a=vi&&vi.isPressed;n=i.v=Math.round(n)||(vi&&vi.iOS?1:0),r(n),i.cacheID=et.cache,a&&Fl("ss",n)}else(e||et.cache!==i.cacheID||Fl("ref"))&&(i.cacheID=et.cache,i.v=r());return i.v+i.offset};return t.offset=0,r&&t},dr={s:hs,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fo(function(r){return arguments.length?Ir.scrollTo(r,Vt.sc()):Ir.pageXOffset||zi[hs]||ki[hs]||aa[hs]||0})},Vt={s:ds,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:dr,sc:fo(function(r){return arguments.length?Ir.scrollTo(dr.sc(),r):Ir.pageYOffset||zi[ds]||ki[ds]||aa[ds]||0})},pr=function(r,e){return(e&&e._ctx&&e._ctx.selector||jt.utils.toArray)(r)[0]||(typeof r=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",r):null)},_p=function(r,e){for(var t=e.length;t--;)if(e[t]===r||e[t].contains(r))return!0;return!1},ji=function(r,e){var t=e.s,i=e.sc;ka(r)&&(r=zi.scrollingElement||ki);var n=et.indexOf(r),a=i===Vt.sc?1:2;!~n&&(n=et.push(r)-1),et[n+a]||or(r,"scroll",Bl);var s=et[n+a],o=s||(et[n+a]=fo(Wi(r,t),!0)||(ka(r)?i:fo(function(l){return arguments.length?r[t]=l:r[t]})));return o.target=r,s||(o.smooth=jt.getProperty(r,"scrollBehavior")==="smooth"),o},zl=function(r,e,t){var i=r,n=r,a=za(),s=a,o=e||50,l=Math.max(500,o*3),c=function(u,p){var g=za();p||g-a>o?(n=i,i=u,s=a,a=g):t?i+=u:i=n+(u-n)/(g-s)*(a-s)},h=function(){n=i=t?0:i,s=a=0},d=function(u){var p=s,g=n,_=za();return(u||u===0)&&u!==i&&c(u),a===s||_-s>l?0:(i+(t?g:-g))/((t?_:a)-p)*1e3};return{update:c,reset:h,getVelocity:d}},ya=function(r,e){return e&&!r._gsapAllow&&r.cancelable!==!1&&r.preventDefault(),r.changedTouches?r.changedTouches[0]:r},Wc=function(r){var e=Math.max.apply(Math,r),t=Math.min.apply(Math,r);return Math.abs(e)>=Math.abs(t)?e:t},nd=function(){sa=jt.core.globals().ScrollTrigger,sa&&sa.core&&gp()},ad=function(r){return jt=r||rd(),!Zs&&jt&&typeof document<"u"&&document.body&&(Ir=window,zi=document,ki=zi.documentElement,aa=zi.body,ed=[Ir,zi,ki,aa],jt.utils.clamp,td=jt.core.context||function(){},un="onpointerenter"in aa?"pointer":"mouse",Qh=It.isTouch=Ir.matchMedia&&Ir.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ir||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jr=It.eventTypes=("ontouchstart"in ki?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ki?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return id=0},500),Zs=1),sa||nd(),Zs};dr.op=Vt;et.cache=0;var It=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(t){Zs||ad(jt)||console.warn("Please gsap.registerPlugin(Observer)"),sa||nd();var i=t.tolerance,n=t.dragMinimum,a=t.type,s=t.target,o=t.lineHeight,l=t.debounce,c=t.preventDefault,h=t.onStop,d=t.onStopDelay,u=t.ignore,p=t.wheelSpeed,g=t.event,_=t.onDragStart,m=t.onDragEnd,f=t.onDrag,E=t.onPress,v=t.onRelease,S=t.onRight,P=t.onLeft,w=t.onUp,b=t.onDown,C=t.onChangeX,F=t.onChangeY,x=t.onChange,y=t.onToggleX,z=t.onToggleY,B=t.onHover,N=t.onHoverEnd,H=t.onMove,U=t.ignoreCheck,X=t.isNormalizer,W=t.onGestureStart,R=t.onGestureEnd,ae=t.onWheel,ve=t.onEnable,Ae=t.onDisable,Ce=t.onClick,Y=t.scrollSpeed,K=t.capture,ie=t.allowClicks,se=t.lockAxis,xe=t.onLockAxis;this.target=s=pr(s)||ki,this.vars=t,u&&(u=jt.utils.toArray(u)),i=i||1e-9,n=n||0,p=p||1,Y=Y||1,a=a||"wheel,touch,pointer",l=l!==!1,o||(o=parseFloat(Ir.getComputedStyle(aa).lineHeight)||22);var _e,Re,He,ye,L,nt,Ie,V=this,Te=0,Ve=0,be=t.passive||!c&&t.passive!==!1,A=ji(s,dr),M=ji(s,Vt),k=A(),Z=M(),Q=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Jr[0]==="pointerdown",J=ka(s),ue=s.ownerDocument||zi,oe=[0,0,0],pe=[0,0,0],Pe=0,te=function(){return Pe=za()},le=function(re,Ge){return(V.event=re)&&u&&_p(re.target,u)||Ge&&Q&&re.pointerType!=="touch"||U&&U(re,Ge)},Fe=function(){V._vx.reset(),V._vy.reset(),Re.pause(),h&&h(V)},De=function(){var re=V.deltaX=Wc(oe),Ge=V.deltaY=Wc(pe),at=Math.abs(re)>=i,Se=Math.abs(Ge)>=i;x&&(at||Se)&&x(V,re,Ge,oe,pe),at&&(S&&V.deltaX>0&&S(V),P&&V.deltaX<0&&P(V),C&&C(V),y&&V.deltaX<0!=Te<0&&y(V),Te=V.deltaX,oe[0]=oe[1]=oe[2]=0),Se&&(b&&V.deltaY>0&&b(V),w&&V.deltaY<0&&w(V),F&&F(V),z&&V.deltaY<0!=Ve<0&&z(V),Ve=V.deltaY,pe[0]=pe[1]=pe[2]=0),(ye||He)&&(H&&H(V),He&&(_&&He===1&&_(V),f&&f(V),He=0),ye=!1),nt&&!(nt=!1)&&xe&&xe(V),L&&(ae(V),L=!1),_e=0},Me=function(re,Ge,at){oe[at]+=re,pe[at]+=Ge,V._vx.update(re),V._vy.update(Ge),l?_e||(_e=requestAnimationFrame(De)):De()},Xe=function(re,Ge){se&&!Ie&&(V.axis=Ie=Math.abs(re)>Math.abs(Ge)?"x":"y",nt=!0),Ie!=="y"&&(oe[2]+=re,V._vx.update(re,!0)),Ie!=="x"&&(pe[2]+=Ge,V._vy.update(Ge,!0)),l?_e||(_e=requestAnimationFrame(De)):De()},Be=function(re){if(!le(re,1)){re=ya(re,c);var Ge=re.clientX,at=re.clientY,Se=Ge-V.x,$e=at-V.y,Ue=V.isDragging;V.x=Ge,V.y=at,(Ue||(Se||$e)&&(Math.abs(V.startX-Ge)>=n||Math.abs(V.startY-at)>=n))&&(He||(He=Ue?2:1),Ue||(V.isDragging=!0),Xe(Se,$e))}},rt=V.onPress=function(re){le(re,1)||re&&re.button||(V.axis=Ie=null,Re.pause(),V.isPressed=!0,re=ya(re),Te=Ve=0,V.startX=V.x=re.clientX,V.startY=V.y=re.clientY,V._vx.reset(),V._vy.reset(),or(X?s:ue,Jr[1],Be,be,!0),V.deltaX=V.deltaY=0,E&&E(V))},D=V.onRelease=function(re){if(!le(re,1)){sr(X?s:ue,Jr[1],Be,!0);var Ge=!isNaN(V.y-V.startY),at=V.isDragging,Se=at&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),$e=ya(re);!Se&&Ge&&(V._vx.reset(),V._vy.reset(),c&&ie&&jt.delayedCall(.08,function(){if(za()-Pe>300&&!re.defaultPrevented){if(re.target.click)re.target.click();else if(ue.createEvent){var Ue=ue.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Ir,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),re.target.dispatchEvent(Ue)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&at&&!X&&Re.restart(!0),He&&De(),m&&at&&m(V),v&&v(V,Se)}},me=function(re){return re.touches&&re.touches.length>1&&(V.isGesturing=!0)&&W(re,V.isDragging)},q=function(){return(V.isGesturing=!1)||R(V)},ee=function(re){if(!le(re)){var Ge=A(),at=M();Me((Ge-k)*Y,(at-Z)*Y,1),k=Ge,Z=at,h&&Re.restart(!0)}},he=function(re){if(!le(re)){re=ya(re,c),ae&&(L=!0);var Ge=(re.deltaMode===1?o:re.deltaMode===2?Ir.innerHeight:1)*p;Me(re.deltaX*Ge,re.deltaY*Ge,0),h&&!X&&Re.restart(!0)}},de=function(re){if(!le(re)){var Ge=re.clientX,at=re.clientY,Se=Ge-V.x,$e=at-V.y;V.x=Ge,V.y=at,ye=!0,h&&Re.restart(!0),(Se||$e)&&Xe(Se,$e)}},it=function(re){V.event=re,B(V)},ot=function(re){V.event=re,N(V)},Ot=function(re){return le(re)||ya(re,c)&&Ce(V)};Re=V._dc=jt.delayedCall(d||.25,Fe).pause(),V.deltaX=V.deltaY=0,V._vx=zl(0,50,!0),V._vy=zl(0,50,!0),V.scrollX=A,V.scrollY=M,V.isDragging=V.isGesturing=V.isPressed=!1,td(this),V.enable=function(re){return V.isEnabled||(or(J?ue:s,"scroll",Bl),a.indexOf("scroll")>=0&&or(J?ue:s,"scroll",ee,be,K),a.indexOf("wheel")>=0&&or(s,"wheel",he,be,K),(a.indexOf("touch")>=0&&Qh||a.indexOf("pointer")>=0)&&(or(s,Jr[0],rt,be,K),or(ue,Jr[2],D),or(ue,Jr[3],D),ie&&or(s,"click",te,!0,!0),Ce&&or(s,"click",Ot),W&&or(ue,"gesturestart",me),R&&or(ue,"gestureend",q),B&&or(s,un+"enter",it),N&&or(s,un+"leave",ot),H&&or(s,un+"move",de)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=ye=He=!1,V._vx.reset(),V._vy.reset(),k=A(),Z=M(),re&&re.type&&rt(re),ve&&ve(V)),V},V.disable=function(){V.isEnabled&&(ea.filter(function(re){return re!==V&&ka(re.target)}).length||sr(J?ue:s,"scroll",Bl),V.isPressed&&(V._vx.reset(),V._vy.reset(),sr(X?s:ue,Jr[1],Be,!0)),sr(J?ue:s,"scroll",ee,K),sr(s,"wheel",he,K),sr(s,Jr[0],rt,K),sr(ue,Jr[2],D),sr(ue,Jr[3],D),sr(s,"click",te,!0),sr(s,"click",Ot),sr(ue,"gesturestart",me),sr(ue,"gestureend",q),sr(s,un+"enter",it),sr(s,un+"leave",ot),sr(s,un+"move",de),V.isEnabled=V.isPressed=V.isDragging=!1,Ae&&Ae(V))},V.kill=V.revert=function(){V.disable();var re=ea.indexOf(V);re>=0&&ea.splice(re,1),vi===V&&(vi=0)},ea.push(V),X&&ka(s)&&(vi=V),V.enable(g)},mp(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();It.version="3.15.0";It.create=function(r){return new It(r)};It.register=ad;It.getAll=function(){return ea.slice()};It.getById=function(r){return ea.filter(function(e){return e.vars.id===r})[0]};rd()&&jt.registerPlugin(It);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,Kn,Qe,dt,Dr,ct,pc,po,rs,Ha,Pa,fs,Qt,To,kl,ur,$c,Xc,Zn,sd,Ho,od,cr,Hl,ld,cd,Ii,Vl,mc,oa,gc,Va,Gl,Vo,ps=1,er=Date.now,Go=er(),qr=0,La=0,qc=function(r,e,t){var i=Pr(r)&&(r.substr(0,6)==="clamp("||r.indexOf("max")>-1);return t["_"+e+"Clamp"]=i,i?r.substr(6,r.length-7):r},Yc=function(r,e){return e&&(!Pr(r)||r.substr(0,6)!=="clamp(")?"clamp("+r+")":r},vp=function r(){return La&&requestAnimationFrame(r)},jc=function(){return To=1},Kc=function(){return To=0},ri=function(r){return r},Da=function(r){return Math.round(r*1e5)/1e5||0},ud=function(){return typeof window<"u"},hd=function(){return we||ud()&&(we=window.gsap)&&we.registerPlugin&&we},An=function(r){return!!~pc.indexOf(r)},dd=function(r){return(r==="Height"?gc:Qe["inner"+r])||Dr["client"+r]||ct["client"+r]},fd=function(r){return Wi(r,"getBoundingClientRect")||(An(r)?function(){return ro.width=Qe.innerWidth,ro.height=gc,ro}:function(){return _i(r)})},xp=function(r,e,t){var i=t.d,n=t.d2,a=t.a;return(a=Wi(r,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?dd(n):r["client"+n])||0}},yp=function(r,e){return!e||~li.indexOf(r)?fd(r):function(){return ro}},oi=function(r,e){var t=e.s,i=e.d2,n=e.d,a=e.a;return Math.max(0,(t="scroll"+i)&&(a=Wi(r,t))?a()-fd(r)()[n]:An(r)?(Dr[t]||ct[t])-dd(i):r[t]-r["offset"+i])},ms=function(r,e){for(var t=0;t<Zn.length;t+=3)(!e||~e.indexOf(Zn[t+1]))&&r(Zn[t],Zn[t+1],Zn[t+2])},Pr=function(r){return typeof r=="string"},rr=function(r){return typeof r=="function"},Ua=function(r){return typeof r=="number"},hn=function(r){return typeof r=="object"},Ma=function(r,e,t){return r&&r.progress(e?0:1)&&t&&r.pause()},In=function(r,e,t){if(r.enabled){var i=r._ctx?r._ctx.add(function(){return e(r,t)}):e(r,t);i&&i.totalTime&&(r.callbackAnimation=i)}},Nn=Math.abs,pd="left",md="top",_c="right",vc="bottom",En="width",Tn="height",Ga="Right",Wa="Left",$a="Top",Xa="Bottom",Bt="padding",Gr="margin",ma="Width",xc="Height",Ht="px",Wr=function(r){return Qe.getComputedStyle(r.nodeType===Node.DOCUMENT_NODE?r.scrollingElement:r)},Mp=function(r){var e=Wr(r).position;r.style.position=e==="absolute"||e==="fixed"?e:"relative"},Zc=function(r,e){for(var t in e)t in r||(r[t]=e[t]);return r},_i=function(r,e){var t=e&&Wr(r)[kl]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(r,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=r.getBoundingClientRect?r.getBoundingClientRect():r.scrollingElement.getBoundingClientRect();return t&&t.progress(0).kill(),i},mo=function(r,e){var t=e.d2;return r["offset"+t]||r["client"+t]||0},gd=function(r){var e=[],t=r.labels,i=r.duration(),n;for(n in t)e.push(t[n]/i);return e},Sp=function(r){return function(e){return we.utils.snap(gd(r),e)}},yc=function(r){var e=we.utils.snap(r),t=Array.isArray(r)&&r.slice(0).sort(function(i,n){return i-n});return t?function(i,n,a){a===void 0&&(a=.001);var s;if(!n)return e(i);if(n>0){for(i-=a,s=0;s<t.length;s++)if(t[s]>=i)return t[s];return t[s-1]}else for(s=t.length,i+=a;s--;)if(t[s]<=i)return t[s];return t[0]}:function(i,n,a){a===void 0&&(a=.001);var s=e(i);return!n||Math.abs(s-i)<a||s-i<0==n<0?s:e(n<0?i-r:i+r)}},Ep=function(r){return function(e,t){return yc(gd(r))(e,t.direction)}},gs=function(r,e,t,i){return t.split(",").forEach(function(n){return r(e,n,i)})},qt=function(r,e,t,i,n){return r.addEventListener(e,t,{passive:!i,capture:!!n})},Xt=function(r,e,t,i){return r.removeEventListener(e,t,!!i)},_s=function(r,e,t){t=t&&t.wheelHandler,t&&(r(e,"wheel",t),r(e,"touchmove",t))},Jc={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},vs={toggleActions:"play",anticipatePin:0},go={top:0,left:0,center:.5,bottom:1,right:1},Js=function(r,e){if(Pr(r)){var t=r.indexOf("="),i=~t?+(r.charAt(t-1)+1)*parseFloat(r.substr(t+1)):0;~t&&(r.indexOf("%")>t&&(i*=e/100),r=r.substr(0,t-1)),r=i+(r in go?go[r]*e:~r.indexOf("%")?parseFloat(r)*e/100:parseFloat(r)||0)}return r},xs=function(r,e,t,i,n,a,s,o){var l=n.startColor,c=n.endColor,h=n.fontSize,d=n.indent,u=n.fontWeight,p=dt.createElement("div"),g=An(t)||Wi(t,"pinType")==="fixed",_=r.indexOf("scroller")!==-1,m=g?ct:t.tagName==="IFRAME"?t.contentDocument.body:t,f=r.indexOf("start")!==-1,E=f?l:c,v="border-color:"+E+";font-size:"+h+";color:"+E+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((_||o)&&g?"fixed;":"absolute;"),(_||o||!g)&&(v+=(i===Vt?_c:vc)+":"+(a+parseFloat(d))+"px;"),s&&(v+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),p._isStart=f,p.setAttribute("class","gsap-marker-"+r+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?r+"-"+e:r,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],Qs(p,0,i,f),p},Qs=function(r,e,t,i){var n={display:"block"},a=t[i?"os2":"p2"],s=t[i?"p2":"os2"];r._isFlipped=i,n[t.a+"Percent"]=i?-100:0,n[t.a]=i?"1px":0,n["border"+a+ma]=1,n["border"+s+ma]=0,n[t.p]=e+"px",we.set(r,n)},Ze=[],Wl={},is,Qc=function(){return er()-qr>34&&(is||(is=requestAnimationFrame(yi)))},On=function(){(!cr||!cr.isPressed||cr.startX>ct.clientWidth)&&(et.cache++,cr?is||(is=requestAnimationFrame(yi)):yi(),qr||Cn("scrollStart"),qr=er())},Wo=function(){cd=Qe.innerWidth,ld=Qe.innerHeight},Ia=function(r){et.cache++,(r===!0||!Qt&&!od&&!dt.fullscreenElement&&!dt.webkitFullscreenElement&&(!Hl||cd!==Qe.innerWidth||Math.abs(Qe.innerHeight-ld)>Qe.innerHeight*.25))&&po.restart(!0)},Rn={},Tp=[],_d=function r(){return Xt(qe,"scrollEnd",r)||_n(!0)},Cn=function(r){return Rn[r]&&Rn[r].map(function(e){return e()})||Tp},Cr=[],vd=function(r){for(var e=0;e<Cr.length;e+=5)(!r||Cr[e+4]&&Cr[e+4].query===r)&&(Cr[e].style.cssText=Cr[e+1],Cr[e].getBBox&&Cr[e].setAttribute("transform",Cr[e+2]||""),Cr[e+3].uncache=1)},xd=function(){return et.forEach(function(r){return rr(r)&&++r.cacheID&&(r.rec=r())})},Mc=function(r,e){var t;for(ur=0;ur<Ze.length;ur++)t=Ze[ur],t&&(!e||t._ctx===e)&&(r?t.kill(1):t.revert(!0,!0));Va=!0,e&&vd(e),e||Cn("revert")},yd=function(r,e){et.cache++,(e||!hr)&&et.forEach(function(t){return rr(t)&&t.cacheID++&&(t.rec=0)}),Pr(r)&&(Qe.history.scrollRestoration=mc=r)},hr,bn=0,eu,bp=function(){if(eu!==bn){var r=eu=bn;requestAnimationFrame(function(){return r===bn&&_n(!0)})}},Md=function(){ct.appendChild(oa),gc=!cr&&oa.offsetHeight||Qe.innerHeight,ct.removeChild(oa)},tu=function(r){return rs(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=r?"none":"block"})},_n=function(r,e){if(Dr=dt.documentElement,ct=dt.body,pc=[Qe,dt,Dr,ct],qr&&!r&&!Va){qt(qe,"scrollEnd",_d);return}Md(),hr=qe.isRefreshing=!0,Va||xd();var t=Cn("refreshInit");sd&&qe.sort(),e||Mc(),et.forEach(function(i){rr(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ze.slice(0).forEach(function(i){return i.refresh()}),Va=!1,Ze.forEach(function(i){if(i._subPinOffset&&i.pin){var n=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[n];i.revert(!0,1),i.adjustPinSpacing(i.pin[n]-a),i.refresh()}}),Gl=1,tu(!0),Ze.forEach(function(i){var n=oi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>n,s=i._startClamp&&i.start>=n;(a||s)&&i.setPositions(s?n-1:i.start,a?Math.max(s?n:i.start+1,n):i.end,!0)}),tu(!1),Gl=0,t.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){rr(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),yd(mc,1),po.pause(),bn++,hr=2,yi(2),Ze.forEach(function(i){return rr(i.vars.onRefresh)&&i.vars.onRefresh(i)}),hr=qe.isRefreshing=!1,Cn("refresh")},$l=0,eo=1,qa,yi=function(r){if(r===2||!hr&&!Va){qe.isUpdating=!0,qa&&qa.update(0);var e=Ze.length,t=er(),i=t-Go>=50,n=e&&Ze[0].scroll();if(eo=$l>n?-1:1,hr||($l=n),i&&(qr&&!To&&t-qr>200&&(qr=0,Cn("scrollEnd")),Pa=Go,Go=t),eo<0){for(ur=e;ur-- >0;)Ze[ur]&&Ze[ur].update(0,i);eo=1}else for(ur=0;ur<e;ur++)Ze[ur]&&Ze[ur].update(0,i);qe.isUpdating=!1}is=0},Xl=[pd,md,vc,_c,Gr+Xa,Gr+Ga,Gr+$a,Gr+Wa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],to=Xl.concat([En,Tn,"boxSizing","max"+ma,"max"+xc,"position",Gr,Bt,Bt+$a,Bt+Ga,Bt+Xa,Bt+Wa]),wp=function(r,e,t){la(t);var i=r._gsap;if(i.spacerIsNative)la(i.spacerState);else if(r._gsap.swappedIn){var n=e.parentNode;n&&(n.insertBefore(r,e),n.removeChild(e))}r._gsap.swappedIn=!1},$o=function(r,e,t,i){if(!r._gsap.swappedIn){for(var n=Xl.length,a=e.style,s=r.style,o;n--;)o=Xl[n],a[o]=t[o];a.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(a.display="inline-block"),s[vc]=s[_c]="auto",a.flexBasis=t.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[En]=mo(r,dr)+Ht,a[Tn]=mo(r,Vt)+Ht,a[Bt]=s[Gr]=s[md]=s[pd]="0",la(i),s[En]=s["max"+ma]=t[En],s[Tn]=s["max"+xc]=t[Tn],s[Bt]=t[Bt],r.parentNode!==e&&(r.parentNode.insertBefore(e,r),e.appendChild(r)),r._gsap.swappedIn=!0}},Ap=/([A-Z])/g,la=function(r){if(r){var e=r.t.style,t=r.length,i=0,n,a;for((r.t._gsap||we.core.getCache(r.t)).uncache=1;i<t;i+=2)a=r[i+1],n=r[i],a?e[n]=a:e[n]&&e.removeProperty(n.replace(Ap,"-$1").toLowerCase())}},ys=function(r){for(var e=to.length,t=r.style,i=[],n=0;n<e;n++)i.push(to[n],t[to[n]]);return i.t=r,i},Rp=function(r,e,t){for(var i=[],n=r.length,a=t?8:0,s;a<n;a+=2)s=r[a],i.push(s,s in e?e[s]:r[a+1]);return i.t=r.t,i},ro={left:0,top:0},ru=function(r,e,t,i,n,a,s,o,l,c,h,d,u,p){rr(r)&&(r=r(o)),Pr(r)&&r.substr(0,3)==="max"&&(r=d+(r.charAt(4)==="="?Js("0"+r.substr(3),t):0));var g=u?u.time():0,_,m,f;if(u&&u.seek(0),isNaN(r)||(r=+r),Ua(r))u&&(r=we.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,r)),s&&Qs(s,t,i,!0);else{rr(e)&&(e=e(o));var E=(r||"0").split(" "),v,S,P,w;f=pr(e,o)||ct,v=_i(f)||{},(!v||!v.left&&!v.top)&&Wr(f).display==="none"&&(w=f.style.display,f.style.display="block",v=_i(f),w?f.style.display=w:f.style.removeProperty("display")),S=Js(E[0],v[i.d]),P=Js(E[1]||"0",t),r=v[i.p]-l[i.p]-c+S+n-P,s&&Qs(s,P,i,t-P<20||s._isStart&&P>20),t-=t-P}if(p&&(o[p]=r||-.001,r<0&&(r=0)),a){var b=r+t,C=a._isStart;_="scroll"+i.d2,Qs(a,b,i,C&&b>20||!C&&(h?Math.max(ct[_],Dr[_]):a.parentNode[_])<=b+1),h&&(l=_i(s),h&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+Ht))}return u&&f&&(_=_i(f),u.seek(d),m=_i(f),u._caScrollDist=_[i.p]-m[i.p],r=r/u._caScrollDist*d),u&&u.seek(g),u?r:Math.round(r)},Cp=/(webkit|moz|length|cssText|inset)/i,iu=function(r,e,t,i){if(r.parentNode!==e){var n=r.style,a,s;if(e===ct){r._stOrig=n.cssText,s=Wr(r);for(a in s)!+a&&!Cp.test(a)&&s[a]&&typeof n[a]=="string"&&a!=="0"&&(n[a]=s[a]);n.top=t,n.left=i}else n.cssText=r._stOrig;we.core.getCache(r).uncache=1,e.appendChild(r)}},Sd=function(r,e,t){var i=e,n=i;return function(a){var s=Math.round(r());return s!==i&&s!==n&&Math.abs(s-i)>3&&Math.abs(s-n)>3&&(a=s,t&&t()),n=i,i=Math.round(a),i}},Ms=function(r,e,t){var i={};i[e.p]="+="+t,we.set(r,i)},nu=function(r,e){var t=ji(r,e),i="_scroll"+e.p2,n=function a(s,o,l,c,h){var d=a.tween,u=o.onComplete,p={};l=l||t();var g=Sd(t,l,function(){d.kill(),a.tween=0});return h=c&&h||0,c=c||s-l,d&&d.kill(),o[i]=s,o.inherit=!1,o.modifiers=p,p[i]=function(){return g(l+c*d.ratio+h*d.ratio*d.ratio)},o.onUpdate=function(){et.cache++,a.tween&&yi()},o.onComplete=function(){a.tween=0,u&&u.call(d)},d=a.tween=we.to(r,o),d};return r[i]=t,t.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},qt(r,"wheel",t.wheelHandler),qe.isTouch&&qt(r,"touchmove",t.wheelHandler),n},qe=function(){function r(t,i){Kn||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vl(this),this.init(t,i)}var e=r.prototype;return e.init=function(t,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!La){this.update=this.refresh=this.kill=ri;return}t=Zc(Pr(t)||Ua(t)||t.nodeType?{trigger:t}:t,vs);var n=t,a=n.onUpdate,s=n.toggleClass,o=n.id,l=n.onToggle,c=n.onRefresh,h=n.scrub,d=n.trigger,u=n.pin,p=n.pinSpacing,g=n.invalidateOnRefresh,_=n.anticipatePin,m=n.onScrubComplete,f=n.onSnapComplete,E=n.once,v=n.snap,S=n.pinReparent,P=n.pinSpacer,w=n.containerAnimation,b=n.fastScrollEnd,C=n.preventOverlaps,F=t.horizontal||t.containerAnimation&&t.horizontal!==!1?dr:Vt,x=!h&&h!==0,y=pr(t.scroller||Qe),z=we.core.getCache(y),B=An(y),N=("pinType"in t?t.pinType:Wi(y,"pinType")||B&&"fixed")==="fixed",H=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],U=x&&t.toggleActions.split(" "),X="markers"in t?t.markers:vs.markers,W=B?0:parseFloat(Wr(y)["border"+F.p2+ma])||0,R=this,ae=t.onRefreshInit&&function(){return t.onRefreshInit(R)},ve=xp(y,B,F),Ae=yp(y,B),Ce=0,Y=0,K=0,ie=ji(y,F),se,xe,_e,Re,He,ye,L,nt,Ie,V,Te,Ve,be,A,M,k,Z,Q,J,ue,oe,pe,Pe,te,le,Fe,De,Me,Xe,Be,rt,D,me,q,ee,he,de,it,ot;if(R._startClamp=R._endClamp=!1,R._dir=F,_*=45,R.scroller=y,R.scroll=w?w.time.bind(w):ie,Re=ie(),R.vars=t,i=i||t.animation,"refreshPriority"in t&&(sd=1,t.refreshPriority===-9999&&(qa=R)),z.tweenScroll=z.tweenScroll||{top:nu(y,Vt),left:nu(y,dr)},R.tweenTo=se=z.tweenScroll[F.p],R.scrubDuration=function(Se){me=Ua(Se)&&Se,me?D?D.duration(Se):D=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:me,paused:!0,onComplete:function(){return m&&m(R)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&t.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Be=0,o||(o=i.vars.id)),v&&((!hn(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ct.style&&we.set(B?[ct,Dr]:y,{scrollBehavior:"auto"}),et.forEach(function(Se){return rr(Se)&&Se.target===(B?dt.scrollingElement||Dr:y)&&(Se.smooth=!1)}),_e=rr(v.snapTo)?v.snapTo:v.snapTo==="labels"?Sp(i):v.snapTo==="labelsDirectional"?Ep(i):v.directional!==!1?function(Se,$e){return yc(v.snapTo)(Se,er()-Y<500?0:$e.direction)}:we.utils.snap(v.snapTo),q=v.duration||{min:.1,max:2},q=hn(q)?Ha(q.min,q.max):Ha(q,q),ee=we.delayedCall(v.delay||me/2||.1,function(){var Se=ie(),$e=er()-Y<500,Ue=se.tween;if(($e||Math.abs(R.getVelocity())<10)&&!Ue&&!To&&Ce!==Se){var We=(Se-ye)/A,Pt=i&&!x?i.totalProgress():We,Je=$e?0:(Pt-rt)/(er()-Pa)*1e3||0,xt=we.utils.clamp(-We,1-We,Nn(Je/2)*Je/.185),kt=We+(v.inertia===!1?0:xt),pt,mt,lt=v,br=lt.onStart,Mt=lt.onInterrupt,nr=lt.onComplete;if(pt=_e(kt,R),Ua(pt)||(pt=kt),mt=Math.max(0,Math.round(ye+pt*A)),Se<=L&&Se>=ye&&mt!==Se){if(Ue&&!Ue._initted&&Ue.data<=Nn(mt-Se))return;v.inertia===!1&&(xt=pt-We),se(mt,{duration:q(Nn(Math.max(Nn(kt-Pt),Nn(pt-Pt))*.185/Je/.05||0)),ease:v.ease||"power3",data:Nn(mt-Se),onInterrupt:function(){return ee.restart(!0)&&Mt&&In(R,Mt)},onComplete:function(){R.update(),Ce=ie(),i&&!x&&(D?D.resetTo("totalProgress",pt,i._tTime/i._tDur):i.progress(pt)),Be=rt=i&&!x?i.totalProgress():R.progress,f&&f(R),nr&&In(R,nr)}},Se,xt*A,mt-Se-xt*A),br&&In(R,br,se.tween)}}else R.isActive&&Ce!==Se&&ee.restart(!0)}).pause()),o&&(Wl[o]=R),d=R.trigger=pr(d||u!==!0&&u),ot=d&&d._gsap&&d._gsap.stRevert,ot&&(ot=ot(R)),u=u===!0?d:pr(u),Pr(s)&&(s={targets:d,className:s}),u&&(p===!1||p===Gr||(p=!p&&u.parentNode&&u.parentNode.style&&Wr(u.parentNode).display==="flex"?!1:Bt),R.pin=u,xe=we.core.getCache(u),xe.spacer?M=xe.pinState:(P&&(P=pr(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),xe.spacerIsNative=!!P,P&&(xe.spacerState=ys(P))),xe.spacer=Q=P||dt.createElement("div"),Q.classList.add("pin-spacer"),o&&Q.classList.add("pin-spacer-"+o),xe.pinState=M=ys(u)),t.force3D!==!1&&we.set(u,{force3D:!0}),R.spacer=Q=xe.spacer,Xe=Wr(u),te=Xe[p+F.os2],ue=we.getProperty(u),oe=we.quickSetter(u,F.a,Ht),$o(u,Q,Xe),Z=ys(u)),X){Ve=hn(X)?Zc(X,Jc):Jc,V=xs("scroller-start",o,y,F,Ve,0),Te=xs("scroller-end",o,y,F,Ve,0,V),J=V["offset"+F.op.d2];var Ot=pr(Wi(y,"content")||y);nt=this.markerStart=xs("start",o,Ot,F,Ve,J,0,w),Ie=this.markerEnd=xs("end",o,Ot,F,Ve,J,0,w),w&&(it=we.quickSetter([nt,Ie],F.a,Ht)),!N&&!(li.length&&Wi(y,"fixedMarkers")===!0)&&(Mp(B?ct:y),we.set([V,Te],{force3D:!0}),Fe=we.quickSetter(V,F.a,Ht),Me=we.quickSetter(Te,F.a,Ht))}if(w){var re=w.vars.onUpdate,Ge=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){R.update(0,0,1),re&&re.apply(w,Ge||[])})}if(R.previous=function(){return Ze[Ze.indexOf(R)-1]},R.next=function(){return Ze[Ze.indexOf(R)+1]},R.revert=function(Se,$e){if(!$e)return R.kill(!0);var Ue=Se!==!1||!R.enabled,We=Qt;Ue!==R.isReverted&&(Ue&&(he=Math.max(ie(),R.scroll.rec||0),K=R.progress,de=i&&i.progress()),nt&&[nt,Ie,V,Te].forEach(function(Pt){return Pt.style.display=Ue?"none":"block"}),Ue&&(Qt=R,R.update(Ue)),u&&(!S||!R.isActive)&&(Ue?wp(u,Q,M):$o(u,Q,Wr(u),le)),Ue||R.update(Ue),Qt=We,R.isReverted=Ue)},R.refresh=function(Se,$e,Ue,We){if(!((Qt||!R.enabled)&&!$e)){if(u&&Se&&qr){qt(r,"scrollEnd",_d);return}!hr&&ae&&ae(R),Qt=R,se.tween&&!Ue&&(se.tween.kill(),se.tween=0),D&&D.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ft){return ft.vars.immediateRender&&ft.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Pt=ve(),Je=Ae(),xt=w?w.duration():oi(y,F),kt=A<=.01||!A,pt=0,mt=We||0,lt=hn(Ue)?Ue.end:t.end,br=t.endTrigger||d,Mt=hn(Ue)?Ue.start:t.start||(t.start===0||!d?0:u?"0 0":"0 100%"),nr=R.pinnedContainer=t.pinnedContainer&&pr(t.pinnedContainer,R),T=d&&Math.max(0,Ze.indexOf(R))||0,I=T,G,$,O,ne,ce,fe,Ee,ze,ke,Oe,Ke,ht,yt;for(X&&hn(Ue)&&(ht=we.getProperty(V,F.p),yt=we.getProperty(Te,F.p));I-- >0;)fe=Ze[I],fe.end||fe.refresh(0,1)||(Qt=R),Ee=fe.pin,Ee&&(Ee===d||Ee===u||Ee===nr)&&!fe.isReverted&&(Oe||(Oe=[]),Oe.unshift(fe),fe.revert(!0,!0)),fe!==Ze[I]&&(T--,I--);for(rr(Mt)&&(Mt=Mt(R)),Mt=qc(Mt,"start",R),ye=ru(Mt,d,Pt,F,ie(),nt,V,R,Je,W,N,xt,w,R._startClamp&&"_startClamp")||(u?-.001:0),rr(lt)&&(lt=lt(R)),Pr(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(Pr(Mt)?Mt.split(" ")[0]:"")+lt:(pt=Js(lt.substr(2),Pt),lt=Pr(Mt)?Mt:(w?we.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,ye):ye)+pt,br=d)),lt=qc(lt,"end",R),L=Math.max(ye,ru(lt||(br?"100% 0":xt),br,Pt,F,ie()+pt,Ie,Te,R,Je,W,N,xt,w,R._endClamp&&"_endClamp"))||-.001,pt=0,I=T;I--;)fe=Ze[I]||{},Ee=fe.pin,Ee&&fe.start-fe._pinPush<=ye&&!w&&fe.end>0&&(G=fe.end-(R._startClamp?Math.max(0,fe.start):fe.start),(Ee===d&&fe.start-fe._pinPush<ye||Ee===nr)&&isNaN(Mt)&&(pt+=G*(1-fe.progress)),Ee===u&&(mt+=G));if(ye+=pt,L+=pt,R._startClamp&&(R._startClamp+=pt),R._endClamp&&!hr&&(R._endClamp=L||-.001,L=Math.min(L,oi(y,F))),A=L-ye||(ye-=.01)&&.001,kt&&(K=we.utils.clamp(0,1,we.utils.normalize(ye,L,he))),R._pinPush=mt,nt&&pt&&(G={},G[F.a]="+="+pt,nr&&(G[F.p]="-="+ie()),we.set([nt,Ie],G)),u&&!(Gl&&R.end>=oi(y,F)))G=Wr(u),ne=F===Vt,O=ie(),pe=parseFloat(ue(F.a))+mt,!xt&&L>1&&(Ke=(B?dt.scrollingElement||Dr:y).style,Ke={style:Ke,value:Ke["overflow"+F.a.toUpperCase()]},B&&Wr(ct)["overflow"+F.a.toUpperCase()]!=="scroll"&&(Ke.style["overflow"+F.a.toUpperCase()]="scroll")),$o(u,Q,G),Z=ys(u),$=_i(u,!0),ze=N&&ji(y,ne?dr:Vt)(),p?(le=[p+F.os2,A+mt+Ht],le.t=Q,I=p===Bt?mo(u,F)+A+mt:0,I&&(le.push(F.d,I+Ht),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=I+Ht)),la(le),nr&&Ze.forEach(function(ft){ft.pin===nr&&ft.vars.pinSpacing!==!1&&(ft._subPinOffset=!0)}),N&&ie(he)):(I=mo(u,F),I&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=I+Ht)),N&&(ce={top:$.top+(ne?O-ye:ze)+Ht,left:$.left+(ne?ze:O-ye)+Ht,boxSizing:"border-box",position:"fixed"},ce[En]=ce["max"+ma]=Math.ceil($.width)+Ht,ce[Tn]=ce["max"+xc]=Math.ceil($.height)+Ht,ce[Gr]=ce[Gr+$a]=ce[Gr+Ga]=ce[Gr+Xa]=ce[Gr+Wa]="0",ce[Bt]=G[Bt],ce[Bt+$a]=G[Bt+$a],ce[Bt+Ga]=G[Bt+Ga],ce[Bt+Xa]=G[Bt+Xa],ce[Bt+Wa]=G[Bt+Wa],k=Rp(M,ce,S),hr&&ie(0)),i?(ke=i._initted,Ho(1),i.render(i.duration(),!0,!0),Pe=ue(F.a)-pe+A+mt,De=Math.abs(A-Pe)>1,N&&De&&k.splice(k.length-2,2),i.render(0,!0,!0),ke||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ho(0)):Pe=A,Ke&&(Ke.value?Ke.style["overflow"+F.a.toUpperCase()]=Ke.value:Ke.style.removeProperty("overflow-"+F.a));else if(d&&ie()&&!w)for($=d.parentNode;$&&$!==ct;)$._pinOffset&&(ye-=$._pinOffset,L-=$._pinOffset),$=$.parentNode;Oe&&Oe.forEach(function(ft){return ft.revert(!1,!0)}),R.start=ye,R.end=L,Re=He=hr?he:ie(),!w&&!hr&&(Re<he&&ie(he),R.scroll.rec=0),R.revert(!1,!0),Y=er(),ee&&(Ce=-1,ee.restart(!0)),Qt=0,i&&x&&(i._initted||de)&&i.progress()!==de&&i.progress(de||0,!0).render(i.time(),!0,!0),(kt||K!==R.progress||w||g||i&&!i._initted)&&(i&&!x&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(w&&ye<-.001&&!K?we.utils.normalize(ye,L,0):K,!0),R.progress=kt||(Re-ye)/A===K?0:K),u&&p&&(Q._pinOffset=Math.round(R.progress*Pe)),D&&D.invalidate(),isNaN(ht)||(ht-=we.getProperty(V,F.p),yt-=we.getProperty(Te,F.p),Ms(V,F,ht),Ms(nt,F,ht-(We||0)),Ms(Te,F,yt),Ms(Ie,F,yt-(We||0))),kt&&!hr&&R.update(),c&&!hr&&!be&&(be=!0,c(R),be=!1)}},R.getVelocity=function(){return(ie()-He)/(er()-Pa)*1e3||0},R.endAnimation=function(){Ma(R.callbackAnimation),i&&(D?D.progress(1):i.paused()?x||Ma(i,R.direction<0,1):Ma(i,i.reversed()))},R.labelToScroll=function(Se){return i&&i.labels&&(ye||R.refresh()||ye)+i.labels[Se]/i.duration()*A||0},R.getTrailing=function(Se){var $e=Ze.indexOf(R),Ue=R.direction>0?Ze.slice(0,$e).reverse():Ze.slice($e+1);return(Pr(Se)?Ue.filter(function(We){return We.vars.preventOverlaps===Se}):Ue).filter(function(We){return R.direction>0?We.end<=ye:We.start>=L})},R.update=function(Se,$e,Ue){if(!(w&&!Ue&&!Se)){var We=hr===!0?he:R.scroll(),Pt=Se?0:(We-ye)/A,Je=Pt<0?0:Pt>1?1:Pt||0,xt=R.progress,kt,pt,mt,lt,br,Mt,nr,T;if($e&&(He=Re,Re=w?ie():We,v&&(rt=Be,Be=i&&!x?i.totalProgress():Je)),_&&u&&!Qt&&!ps&&qr&&(!Je&&ye<We+(We-He)/(er()-Pa)*_?Je=1e-4:Je===1&&L>We+(We-He)/(er()-Pa)*_&&(Je=.9999)),Je!==xt&&R.enabled){if(kt=R.isActive=!!Je&&Je<1,pt=!!xt&&xt<1,Mt=kt!==pt,br=Mt||!!Je!=!!xt,R.direction=Je>xt?1:-1,R.progress=Je,br&&!Qt&&(mt=Je&&!xt?0:Je===1?1:xt===1?2:3,x&&(lt=!Mt&&U[mt+1]!=="none"&&U[mt+1]||U[mt],T=i&&(lt==="complete"||lt==="reset"||lt in i))),C&&(Mt||T)&&(T||h||!i)&&(rr(C)?C(R):R.getTrailing(C).forEach(function(O){return O.endAnimation()})),x||(D&&!Qt&&!ps?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",Je,i._tTime/i._tDur):(D.vars.totalProgress=Je,D.invalidate().restart())):i&&i.totalProgress(Je,!!(Qt&&(Y||Se)))),u){if(Se&&p&&(Q.style[p+F.os2]=te),!N)oe(Da(pe+Pe*Je));else if(br){if(nr=!Se&&Je>xt&&L+1>We&&We+1>=oi(y,F),S)if(!Se&&(kt||nr)){var I=_i(u,!0),G=We-ye;iu(u,ct,I.top+(F===Vt?G:0)+Ht,I.left+(F===Vt?0:G)+Ht)}else iu(u,Q);la(kt||nr?k:Z),De&&Je<1&&kt||oe(pe+(Je===1&&!nr?Pe:0))}}v&&!se.tween&&!Qt&&!ps&&ee.restart(!0),s&&(Mt||E&&Je&&(Je<1||!Vo))&&rs(s.targets).forEach(function(O){return O.classList[kt||E?"add":"remove"](s.className)}),a&&!x&&!Se&&a(R),br&&!Qt?(x&&(T&&(lt==="complete"?i.pause().totalProgress(1):lt==="reset"?i.restart(!0).pause():lt==="restart"?i.restart(!0):i[lt]()),a&&a(R)),(Mt||!Vo)&&(l&&Mt&&In(R,l),H[mt]&&In(R,H[mt]),E&&(Je===1?R.kill(!1,1):H[mt]=0),Mt||(mt=Je===1?1:3,H[mt]&&In(R,H[mt]))),b&&!kt&&Math.abs(R.getVelocity())>(Ua(b)?b:2500)&&(Ma(R.callbackAnimation),D?D.progress(1):Ma(i,lt==="reverse"?1:!Je,1))):x&&a&&!Qt&&a(R)}if(Me){var $=w?We/w.duration()*(w._caScrollDist||0):We;Fe($+(V._isFlipped?1:0)),Me($)}it&&it(-We/w.duration()*(w._caScrollDist||0))}},R.enable=function(Se,$e){R.enabled||(R.enabled=!0,qt(y,"resize",Ia),B||qt(y,"scroll",On),ae&&qt(r,"refreshInit",ae),Se!==!1&&(R.progress=K=0,Re=He=Ce=ie()),$e!==!1&&R.refresh())},R.getTween=function(Se){return Se&&se?se.tween:D},R.setPositions=function(Se,$e,Ue,We){if(w){var Pt=w.scrollTrigger,Je=w.duration(),xt=Pt.end-Pt.start;Se=Pt.start+xt*Se/Je,$e=Pt.start+xt*$e/Je}R.refresh(!1,!1,{start:Yc(Se,Ue&&!!R._startClamp),end:Yc($e,Ue&&!!R._endClamp)},We),R.update()},R.adjustPinSpacing=function(Se){if(le&&Se){var $e=le.indexOf(F.d)+1;le[$e]=parseFloat(le[$e])+Se+Ht,le[1]=parseFloat(le[1])+Se+Ht,la(le)}},R.disable=function(Se,$e){if(Se!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,$e||D&&D.pause(),he=0,xe&&(xe.uncache=1),ae&&Xt(r,"refreshInit",ae),ee&&(ee.pause(),se.tween&&se.tween.kill()&&(se.tween=0)),!B)){for(var Ue=Ze.length;Ue--;)if(Ze[Ue].scroller===y&&Ze[Ue]!==R)return;Xt(y,"resize",Ia),B||Xt(y,"scroll",On)}},R.kill=function(Se,$e){R.disable(Se,$e),D&&!$e&&D.kill(),o&&delete Wl[o];var Ue=Ze.indexOf(R);Ue>=0&&Ze.splice(Ue,1),Ue===ur&&eo>0&&ur--,Ue=0,Ze.forEach(function(We){return We.scroller===R.scroller&&(Ue=1)}),Ue||hr||(R.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),$e||i.kill()),nt&&[nt,Ie,V,Te].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),qa===R&&(qa=0),u&&(xe&&(xe.uncache=1),Ue=0,Ze.forEach(function(We){return We.pin===u&&Ue++}),Ue||(xe.spacer=0)),t.onKill&&t.onKill(R)},Ze.push(R),R.enable(!1,!1),ot&&ot(R),i&&i.add&&!A){var at=R.update;R.update=function(){R.update=at,et.cache++,ye||L||R.refresh()},we.delayedCall(.01,R.update),A=.01,ye=L=0}else R.refresh();u&&bp()},r.register=function(t){return Kn||(we=t||hd(),ud()&&window.document&&r.enable(),Kn=La),Kn},r.defaults=function(t){if(t)for(var i in t)vs[i]=t[i];return vs},r.disable=function(t,i){La=0,Ze.forEach(function(a){return a[i?"kill":"disable"](t)}),Xt(Qe,"wheel",On),Xt(dt,"scroll",On),clearInterval(fs),Xt(dt,"touchcancel",ri),Xt(ct,"touchstart",ri),gs(Xt,dt,"pointerdown,touchstart,mousedown",jc),gs(Xt,dt,"pointerup,touchend,mouseup",Kc),po.kill(),ms(Xt);for(var n=0;n<et.length;n+=3)_s(Xt,et[n],et[n+1]),_s(Xt,et[n],et[n+2])},r.enable=function(){if(Qe=window,dt=document,Dr=dt.documentElement,ct=dt.body,we){if(rs=we.utils.toArray,Ha=we.utils.clamp,Vl=we.core.context||ri,Ho=we.core.suppressOverwrites||ri,mc=Qe.history.scrollRestoration||"auto",$l=Qe.pageYOffset||0,we.core.globals("ScrollTrigger",r),ct){La=1,oa=document.createElement("div"),oa.style.height="100vh",oa.style.position="absolute",Md(),vp(),It.register(we),r.isTouch=It.isTouch,Ii=It.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Hl=It.isTouch===1,qt(Qe,"wheel",On),pc=[Qe,dt,Dr,ct],we.matchMedia?(r.matchMedia=function(c){var h=we.matchMedia(),d;for(d in c)h.add(d,c[d]);return h},we.addEventListener("matchMediaInit",function(){xd(),Mc()}),we.addEventListener("matchMediaRevert",function(){return vd()}),we.addEventListener("matchMedia",function(){_n(0,1),Cn("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Wo(),Wo})):console.warn("Requires GSAP 3.11.0 or later"),Wo(),qt(dt,"scroll",On);var t=ct.hasAttribute("style"),i=ct.style,n=i.borderTopStyle,a=we.core.Animation.prototype,s,o;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",s=_i(ct),Vt.m=Math.round(s.top+Vt.sc())||0,dr.m=Math.round(s.left+dr.sc())||0,n?i.borderTopStyle=n:i.removeProperty("border-top-style"),t||(ct.setAttribute("style",""),ct.removeAttribute("style")),fs=setInterval(Qc,250),we.delayedCall(.5,function(){return ps=0}),qt(dt,"touchcancel",ri),qt(ct,"touchstart",ri),gs(qt,dt,"pointerdown,touchstart,mousedown",jc),gs(qt,dt,"pointerup,touchend,mouseup",Kc),kl=we.utils.checkPrefix("transform"),to.push(kl),Kn=er(),po=we.delayedCall(.2,_n).pause(),Zn=[dt,"visibilitychange",function(){var c=Qe.innerWidth,h=Qe.innerHeight;dt.hidden?($c=c,Xc=h):($c!==c||Xc!==h)&&Ia()},dt,"DOMContentLoaded",_n,Qe,"load",_n,Qe,"resize",Ia],ms(qt),Ze.forEach(function(c){return c.enable(0,1)}),o=0;o<et.length;o+=3)_s(Xt,et[o],et[o+1]),_s(Xt,et[o],et[o+2])}else if(dt){var l=function c(){r.enable(),dt.removeEventListener("DOMContentLoaded",c)};dt.addEventListener("DOMContentLoaded",l)}}},r.config=function(t){"limitCallbacks"in t&&(Vo=!!t.limitCallbacks);var i=t.syncInterval;i&&clearInterval(fs)||(fs=i)&&setInterval(Qc,i),"ignoreMobileResize"in t&&(Hl=r.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(ms(Xt)||ms(qt,t.autoRefreshEvents||"none"),od=(t.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(t,i){var n=pr(t),a=et.indexOf(n),s=An(n);~a&&et.splice(a,s?6:2),i&&(s?li.unshift(Qe,i,ct,i,Dr,i):li.unshift(n,i))},r.clearMatchMedia=function(t){Ze.forEach(function(i){return i._ctx&&i._ctx.query===t&&i._ctx.kill(!0,!0)})},r.isInViewport=function(t,i,n){var a=(Pr(t)?pr(t):t).getBoundingClientRect(),s=a[n?En:Tn]*i||0;return n?a.right-s>0&&a.left+s<Qe.innerWidth:a.bottom-s>0&&a.top+s<Qe.innerHeight},r.positionInViewport=function(t,i,n){Pr(t)&&(t=pr(t));var a=t.getBoundingClientRect(),s=a[n?En:Tn],o=i==null?s/2:i in go?go[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return n?(a.left+o)/Qe.innerWidth:(a.top+o)/Qe.innerHeight},r.killAll=function(t){if(Ze.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),t!==!0){var i=Rn.killAll||[];Rn={},i.forEach(function(n){return n()})}},r}();qe.version="3.15.0";qe.saveStyles=function(r){return r?rs(r).forEach(function(e){if(e&&e.style){var t=Cr.indexOf(e);t>=0&&Cr.splice(t,5),Cr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Vl())}}):Cr};qe.revert=function(r,e){return Mc(!r,e)};qe.create=function(r,e){return new qe(r,e)};qe.refresh=function(r){return r?Ia(!0):(Kn||qe.register())&&_n(!0)};qe.update=function(r){return++et.cache&&yi(r===!0?2:0)};qe.clearScrollMemory=yd;qe.maxScroll=function(r,e){return oi(r,e?dr:Vt)};qe.getScrollFunc=function(r,e){return ji(pr(r),e?dr:Vt)};qe.getById=function(r){return Wl[r]};qe.getAll=function(){return Ze.filter(function(r){return r.vars.id!=="ScrollSmoother"})};qe.isScrolling=function(){return!!qr};qe.snapDirectional=yc;qe.addEventListener=function(r,e){var t=Rn[r]||(Rn[r]=[]);~t.indexOf(e)||t.push(e)};qe.removeEventListener=function(r,e){var t=Rn[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};qe.batch=function(r,e){var t=[],i={},n=e.interval||.016,a=e.batchMax||1e9,s=function(l,c){var h=[],d=[],u=we.delayedCall(n,function(){c(h,d),h=[],d=[]}).pause();return function(p){h.length||u.restart(!0),h.push(p.trigger),d.push(p),a<=h.length&&u.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&rr(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return rr(a)&&(a=a(),qt(qe,"refresh",function(){return a=e.batchMax()})),rs(r).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(qe.create(c))}),t};var au=function(r,e,t,i){return e>i?r(i):e<0&&r(0),t>i?(i-e)/(t-e):t<0?e/(e-t):1},Xo=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(It.isTouch?" pinch-zoom":""):"none",e===Dr&&r(ct,t)},Ss={auto:1,scroll:1},Pp=function(r){var e=r.event,t=r.target,i=r.axis,n=(e.changedTouches?e.changedTouches[0]:e).target,a=n._gsap||we.core.getCache(n),s=er(),o;if(!a._isScrollT||s-a._isScrollT>2e3){for(;n&&n!==ct&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(Ss[(o=Wr(n)).overflowY]||Ss[o.overflowX]));)n=n.parentNode;a._isScroll=n&&n!==t&&!An(n)&&(Ss[(o=Wr(n)).overflowY]||Ss[o.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Ed=function(r,e,t,i){return It.create({target:r,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Pp,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return t&&qt(dt,It.eventTypes[0],ou,!1,!0)},onDisable:function(){return Xt(dt,It.eventTypes[0],ou,!0)}})},Lp=/(input|label|select|textarea)/i,su,ou=function(r){var e=Lp.test(r.target.tagName);(e||su)&&(r._gsapAllow=!0,su=e)},Dp=function(r){hn(r)||(r={}),r.preventDefault=r.isNormalizer=r.allowClicks=!0,r.type||(r.type="wheel,touch"),r.debounce=!!r.debounce,r.id=r.id||"normalizer";var e=r,t=e.normalizeScrollX,i=e.momentum,n=e.allowNestedScroll,a=e.onRelease,s,o,l=pr(r.target)||Dr,c=we.core.globals().ScrollSmoother,h=c&&c.get(),d=Ii&&(r.content&&pr(r.content)||h&&r.content!==!1&&!h.smooth()&&h.content()),u=ji(l,Vt),p=ji(l,dr),g=1,_=(It.isTouch&&Qe.visualViewport?Qe.visualViewport.scale*Qe.visualViewport.width:Qe.outerWidth)/Qe.innerWidth,m=0,f=rr(i)?function(){return i(s)}:function(){return i||2.8},E,v,S=Ed(l,r.type,!0,n),P=function(){return v=!1},w=ri,b=ri,C=function(){o=oi(l,Vt),b=Ha(Ii?1:0,o),t&&(w=Ha(0,oi(l,dr))),E=bn},F=function(){d._gsap.y=Da(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},x=function(){if(v){requestAnimationFrame(P);var U=Da(s.deltaY/2),X=b(u.v-U);if(d&&X!==u.v+u.offset){u.offset=X-u.v;var W=Da((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+W+", 0, 1)",d._gsap.y=W+"px",u.cacheID=et.cache,yi()}return!0}u.offset&&F(),v=!0},y,z,B,N,H=function(){C(),y.isActive()&&y.vars.scrollY>o&&(u()>o?y.progress(1)&&u(o):y.resetTo("scrollY",o))};return d&&we.set(d,{y:"+=0"}),r.ignoreCheck=function(U){return Ii&&U.type==="touchmove"&&x()||g>1.05&&U.type!=="touchstart"||s.isGesturing||U.touches&&U.touches.length>1},r.onPress=function(){v=!1;var U=g;g=Da((Qe.visualViewport&&Qe.visualViewport.scale||1)/_),y.pause(),U!==g&&Xo(l,g>1.01?!0:t?!1:"x"),z=p(),B=u(),C(),E=bn},r.onRelease=r.onGestureStart=function(U,X){if(u.offset&&F(),!X)N.restart(!0);else{et.cache++;var W=f(),R,ae;t&&(R=p(),ae=R+W*.05*-U.velocityX/.227,W*=au(p,R,ae,oi(l,dr)),y.vars.scrollX=w(ae)),R=u(),ae=R+W*.05*-U.velocityY/.227,W*=au(u,R,ae,oi(l,Vt)),y.vars.scrollY=b(ae),y.invalidate().duration(W).play(.01),(Ii&&y.vars.scrollY>=o||R>=o-1)&&we.to({},{onUpdate:H,duration:W})}a&&a(U)},r.onWheel=function(){y._ts&&y.pause(),er()-m>1e3&&(E=0,m=er())},r.onChange=function(U,X,W,R,ae){if(bn!==E&&C(),X&&t&&p(w(R[2]===X?z+(U.startX-U.x):p()+X-R[1])),W){u.offset&&F();var ve=ae[2]===W,Ae=ve?B+U.startY-U.y:u()+W-ae[1],Ce=b(Ae);ve&&Ae!==Ce&&(B+=Ce-Ae),u(Ce)}(W||X)&&yi()},r.onEnable=function(){Xo(l,t?!1:"x"),qe.addEventListener("refresh",H),qt(Qe,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),S.enable()},r.onDisable=function(){Xo(l,!0),Xt(Qe,"resize",H),qe.removeEventListener("refresh",H),S.kill()},r.lockAxis=r.lockAxis!==!1,s=new It(r),s.iOS=Ii,Ii&&!u()&&u(1),Ii&&we.ticker.add(ri),N=s._dc,y=we.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Sd(u,u(),function(){return y.pause()})},onUpdate:yi,onComplete:N.vars.onComplete}),s};qe.sort=function(r){if(rr(r))return Ze.sort(r);var e=Qe.pageYOffset||0;return qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Qe.innerHeight}),Ze.sort(r||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};qe.observe=function(r){return new It(r)};qe.normalizeScroll=function(r){if(typeof r>"u")return cr;if(r===!0&&cr)return cr.enable();if(r===!1){cr&&cr.kill(),cr=r;return}var e=r instanceof It?r:Dp(r);return cr&&cr.target===e.target&&cr.kill(),An(e.target)&&(cr=e),e};qe.core={_getVelocityProp:zl,_inputObserver:Ed,_scrollers:et,_proxies:li,bridge:{ss:function(){qr||Cn("scrollStart"),qr=er()},ref:function(){return Qt}}};hd()&&we.registerPlugin(qe);var Up=Object.defineProperty,Ip=(r,e,t)=>e in r?Up(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Le=(r,e,t)=>Ip(r,typeof e!="symbol"?e+"":e,t),lu="1.3.27";function Td(r,e,t){return Math.max(r,Math.min(e,t))}function Np(r,e,t){return(1-t)*r+t*e}function Op(r,e,t,i){return Np(r,e,1-Math.exp(-t*i))}function Fp(r,e){return(r%e+e)%e}var Bp=class{constructor(){Le(this,"isRunning",!1),Le(this,"value",0),Le(this,"from",0),Le(this,"to",0),Le(this,"currentTime",0),Le(this,"lerp"),Le(this,"duration"),Le(this,"easing"),Le(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const i=Td(0,this.currentTime/this.duration,1);t=i>=1;const n=t?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Op(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:i,easing:n,onStart:a,onUpdate:s}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=s}};function zp(r,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,i)},e)}}var kp=class{constructor(r,e,{autoResize:t=!0,debounce:i=250}={}){Le(this,"width",0),Le(this,"height",0),Le(this,"scrollHeight",0),Le(this,"scrollWidth",0),Le(this,"debouncedResize"),Le(this,"wrapperResizeObserver"),Le(this,"contentResizeObserver"),Le(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()}),Le(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)}),Le(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)}),this.wrapper=r,this.content=e,t&&(this.debouncedResize=zp(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},bd=class{constructor(){Le(this,"events",{})}emit(r,...e){var t;const i=this.events[r]||[];for(let n=0,a=i.length;n<a;n++)(t=i[n])==null||t.call(i,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const Hp=100/6,Ai={passive:!1};function cu(r,e){return r===1?Hp:r===2?e:1}var Vp=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Le(this,"touchStart",{x:0,y:0}),Le(this,"lastDelta",{x:0,y:0}),Le(this,"window",{width:0,height:0}),Le(this,"emitter",new bd),Le(this,"onTouchStart",t=>{const{clientX:i,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})}),Le(this,"onTouchMove",t=>{const{clientX:i,clientY:n}=t.targetTouches?t.targetTouches[0]:t,a=-(i-this.touchStart.x)*this.options.touchMultiplier,s=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=n,this.lastDelta={x:a,y:s},this.emitter.emit("scroll",{deltaX:a,deltaY:s,event:t})}),Le(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})}),Le(this,"onWheel",t=>{let{deltaX:i,deltaY:n,deltaMode:a}=t;const s=cu(a,this.window.width),o=cu(a,this.window.height);i*=s,n*=o,i*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:t})}),Le(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}}),this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ai),this.element.addEventListener("touchstart",this.onTouchStart,Ai),this.element.addEventListener("touchmove",this.onTouchMove,Ai),this.element.addEventListener("touchend",this.onTouchEnd,Ai)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ai),this.element.removeEventListener("touchstart",this.onTouchStart,Ai),this.element.removeEventListener("touchmove",this.onTouchMove,Ai),this.element.removeEventListener("touchend",this.onTouchEnd,Ai)}};const uu=r=>Math.min(1,1.001-2**(-10*r));var Gp=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:a=.075,touchInertiaExponent:s=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:f,overscroll:E=!0,autoRaf:v=!1,anchors:S=!1,autoToggle:P=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:C=b,stopInertiaOnNavigate:F=!1,respectReducedMotion:x=!0}={}){Le(this,"_isScrolling",!1),Le(this,"_isStopped",!1),Le(this,"_isLocked",!1),Le(this,"_preventNextNativeScrollEvent",!1),Le(this,"_resetVelocityTimeout",null),Le(this,"_rafId",null),Le(this,"_isDraggingSelection",!1),Le(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)")),Le(this,"isTouching"),Le(this,"isIos"),Le(this,"time",0),Le(this,"userData",{}),Le(this,"lastVelocity",0),Le(this,"velocity",0),Le(this,"direction",0),Le(this,"options"),Le(this,"targetScroll"),Le(this,"animatedScroll"),Le(this,"animate",new Bp),Le(this,"emitter",new bd),Le(this,"dimensions"),Le(this,"virtualScroll"),Le(this,"onScrollEnd",y=>{y instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&y.stopPropagation()}),Le(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))}),Le(this,"onTransitionEnd",y=>{var z;(z=y.propertyName)!=null&&z.includes("overflow")&&y.target===this.rootElement&&this.checkOverflow()}),Le(this,"onClick",y=>{const z=y.composedPath().filter(N=>N instanceof HTMLAnchorElement&&N.href).map(N=>new URL(N.href)),B=new URL(window.location.href);if(this.options.anchors){const N=z.find(H=>B.host===H.host&&B.pathname===H.pathname&&H.hash);if(N){const H=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,U=decodeURIComponent(N.hash);this.scrollTo(U,H);return}}if(this.options.stopInertiaOnNavigate&&z.some(N=>B.host===N.host&&B.pathname!==N.pathname)){this.reset();return}}),Le(this,"onPointerDown",y=>{y.button===1&&this.reset()}),Le(this,"onVirtualScroll",y=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(y)===!1)return;const{deltaX:z,deltaY:B,event:N}=y;if(this.emitter.emit("virtual-scroll",{deltaX:z,deltaY:B,event:N}),N.ctrlKey||N.lenisStopPropagation)return;const H=N.type.includes("touch"),U=N.type.includes("wheel");if(H&&this.isIos&&(N.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(N)),this._isDraggingSelection)){N.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=N.type==="touchstart"||N.type==="touchmove";const X=z===0&&B===0;if(this.options.syncTouch&&H&&N.type==="touchstart"&&X&&!this.isStopped&&!this.isLocked){this.reset();return}const W=this.options.gestureOrientation==="vertical"&&B===0||this.options.gestureOrientation==="horizontal"&&z===0;if(X||W)return;let R=N.composedPath();R=R.slice(0,R.indexOf(this.rootElement));const ae=this.options.prevent,ve=Math.abs(z)>=Math.abs(B)?"horizontal":"vertical";if(R.find(K=>{var ie,se,xe,_e,Re;return K instanceof HTMLElement&&(typeof ae=="function"&&(ae==null?void 0:ae(K))||((ie=K.hasAttribute)==null?void 0:ie.call(K,"data-lenis-prevent"))||ve==="vertical"&&((se=K.hasAttribute)==null?void 0:se.call(K,"data-lenis-prevent-vertical"))||ve==="horizontal"&&((xe=K.hasAttribute)==null?void 0:xe.call(K,"data-lenis-prevent-horizontal"))||H&&((_e=K.hasAttribute)==null?void 0:_e.call(K,"data-lenis-prevent-touch"))||U&&((Re=K.hasAttribute)==null?void 0:Re.call(K,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(K,{deltaX:z,deltaY:B}))}))return;if(this.isStopped||this.isLocked){N.cancelable&&N.preventDefault();return}if(!(this.options.syncTouch&&H||this.options.smoothWheel&&U)){this.isScrolling="native",this.animate.stop(),N.lenisStopPropagation=!0;return}let Ae=B;this.options.gestureOrientation==="both"?Ae=Math.abs(B)>Math.abs(z)?B:z:this.options.gestureOrientation==="horizontal"&&(Ae=z),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&B>0||this.animatedScroll===this.limit&&B<0))&&(N.lenisStopPropagation=!0),N.cancelable&&N.preventDefault();const Ce=H&&this.options.syncTouch,Y=H&&N.type==="touchend";Y&&(Ae=Math.sign(Ae)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+Ae,{programmatic:!1,...Ce?{lerp:Y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})}),Le(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const y=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-y,this.direction=Math.sign(this.animatedScroll-y),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}}),Le(this,"raf",y=>{const z=y-(this.time||y);this.time=y,this.animate.advance(z*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}),window.lenisVersion=lu,window.lenis||(window.lenis={}),window.lenis.version=lu,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=uu:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:a,touchInertiaExponent:s,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:p,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:f,overscroll:E,autoRaf:v,anchors:S,autoToggle:P,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:F,respectReducedMotion:x},this.dimensions=new kp(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Vp(t,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const n=i[0],a=i[i.length-1],s=40,o=Math.hypot(t.clientX-n.left,t.clientY-n.top)<=s,l=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=s;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:n=!0,lerp:a=n?this.options.lerp:void 0,duration:s=n?this.options.duration:void 0,easing:o=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(n?t=!0:(a=1,s=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,p=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(g=u),g){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?S.left:S.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),f=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),E=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(f)?0:f)-(Number.isNaN(v)?0:v)}}if(typeof u=="number"){if(u+=p,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=Td(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=u),typeof s=="number"&&typeof o!="function"?o=uu:typeof o=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,u,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),n&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const i=Date.now();r._lenis||(r._lenis={});const n=r._lenis;let a,s,o,l,c,h,d,u,p,g;if(i-(n.time??0)>2e3){n.time=Date.now();const w=window.getComputedStyle(r);if(n.computedStyle=w,a=["auto","overlay","scroll"].includes(w.overflowX),s=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),n.hasOverflowX=a,n.hasOverflowY=s,!(a||s))return!1;d=r.scrollWidth,u=r.scrollHeight,p=r.clientWidth,g=r.clientHeight,o=d>p,l=u>g,n.isScrollableX=o,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=u,n.clientWidth=p,n.clientHeight=g,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else o=n.isScrollableX,l=n.isScrollableY,a=n.hasOverflowX,s=n.hasOverflowY,d=n.scrollWidth,u=n.scrollHeight,p=n.clientWidth,g=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(a&&o||s&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,f,E,v,S,P;if(_==="horizontal")m=Math.round(r.scrollLeft),f=d-p,E=e,v=a,S=o,P=c;else if(_==="vertical")m=Math.round(r.scrollTop),f=u-g,E=t,v=s,S=l,P=h;else return!1;return!P&&(m>=f||m<=0)?!0:(E>0?m<f:m>0)&&v&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Fp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="169",Ni="",ii="srgb",Zi="srgb-linear",Ec="display-p3",bo="display-p3-linear",_o="linear",St="srgb",vo="rec709",xo="p3",hu="300 es";class _a{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qo=Math.PI/180,ql=180/Math.PI;function as(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function mr(r,e,t){return Math.max(e,Math.min(t,r))}function Wp(r,e){return(r%e+e)%e}function Yo(r,e,t){return(1-t)*r+t*e}function Sa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function fr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mr(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,n,a,s,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c)}set(e,t,i,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],E=n[1],v=n[4],S=n[7],P=n[2],w=n[5],b=n[8];return a[0]=s*_+o*E+l*P,a[3]=s*m+o*v+l*w,a[6]=s*f+o*S+l*b,a[1]=c*_+h*E+d*P,a[4]=c*m+h*v+d*w,a[7]=c*f+h*S+d*b,a[2]=u*_+p*E+g*P,a[5]=u*m+p*v+g*w,a[8]=u*f+p*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,u=o*l-h*a,p=c*a-s*l,g=t*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*s)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new je;function wd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $p(){const r=yo("canvas");return r.style.display="block",r}const du={};function io(r){r in du||(du[r]=!0,console.warn(r))}function Xp(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function qp(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fu=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pu=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ea={[Zi]:{transfer:_o,primaries:vo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ii]:{transfer:St,primaries:vo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[bo]:{transfer:_o,primaries:xo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(pu),fromReference:r=>r.applyMatrix3(fu)},[Ec]:{transfer:St,primaries:xo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(pu),fromReference:r=>r.applyMatrix3(fu).convertLinearToSRGB()}},jp=new Set([Zi,bo]),ut={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!jp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Ea[e].toReference,n=Ea[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ea[r].primaries},getTransfer:function(r){return r===Ni?_o:Ea[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Ea[e].luminanceCoefficients)}};function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ko(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fn;class Kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=yo("canvas")),Fn.width=e.width,Fn.height=e.height;const i=Fn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=ca(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ca(t[i]/255)*255):t[i]=ca(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zp=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Zo(n[s].image)):a.push(Zo(n[s]))}else a=Zo(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function Zo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jp=0;class Sr extends _a{constructor(e=Sr.DEFAULT_IMAGE,t=Sr.DEFAULT_MAPPING,i=1001,n=1001,a=1006,s=1008,o=1023,l=1009,c=Sr.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=as(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sr.DEFAULT_IMAGE=null;Sr.DEFAULT_MAPPING=300;Sr.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,n=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],p=s[2],g=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,E=(d+1)/2,v=(_+1)/2,S=(l+h)/4,P=(c+p)/4,w=(u+g)/4;return f>E&&f>v?f<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(f),n=S/i,a=P/i):E>v?E<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(E),i=S/n,a=w/n):v<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(v),i=P/a,n=w/a),this.set(i,n,a,t),this}let m=Math.sqrt((g-u)*(g-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qp extends _a{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Sr(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ad(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Qp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rd extends Sr{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class em extends Sr{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=a[s+0],p=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*_,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),w=Math.atan2(P,f*E);m=Math.sin(m*w)/P,o=Math.sin(o*w)/P}const S=o*E;if(l=l*m+u*S,c=c*m+p*S,h=h*m+g*S,d=d*m+_*S,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,a,s){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=a[s],u=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(a/2),u=l(i/2),p=l(n/2),g=l(a/2);switch(s){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mr(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-n*o,this._w=s*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=s*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}let j=class Cd{constructor(e=0,t=0,i=0){Cd.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),h=2*(o*t-a*n),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*h,this.y=i+l*h+o*c-a*d,this.z=n+l*d+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mr(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Jo=new j,mu=new ss;class os{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,jr):jr.fromBufferAttribute(a,s),jr.applyMatrix4(e.matrixWorld),this.expandByPoint(jr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jr),jr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Ts.subVectors(this.max,Ta),Bn.subVectors(e.a,Ta),zn.subVectors(e.b,Ta),kn.subVectors(e.c,Ta),Ri.subVectors(zn,Bn),Ci.subVectors(kn,zn),tn.subVectors(Bn,kn);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-tn.z,tn.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,tn.z,0,-tn.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-tn.y,tn.x,0];return!Qo(t,Bn,zn,kn,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,Bn,zn,kn,Ts))?!1:(bs.crossVectors(Ri,Ci),t=[bs.x,bs.y,bs.z],Qo(t,Bn,zn,kn,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new j,new j,new j,new j,new j,new j,new j,new j],jr=new j,Es=new os,Bn=new j,zn=new j,kn=new j,Ri=new j,Ci=new j,tn=new j,Ta=new j,Ts=new j,bs=new j,rn=new j;function Qo(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){rn.fromArray(r,a);const o=n.x*Math.abs(rn.x)+n.y*Math.abs(rn.y)+n.z*Math.abs(rn.z),l=e.dot(rn),c=t.dot(rn),h=i.dot(rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tm=new os,ba=new j,el=new j;class wo{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tm.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const t=ba.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ba,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(el)),this.expandByPoint(ba.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new j,tl=new j,ws=new j,Pi=new j,rl=new j,As=new j,il=new j;class Pd{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){tl.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(tl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ws),o=Pi.dot(this.direction),l=-Pi.dot(ws),c=Pi.lengthSq(),h=Math.abs(1-s*s);let d,u,p,g;if(h>0)if(d=s*l-o,u=s*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+s*u+2*o)+u*(s*d+u+2*l)+c}else u=a,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-s*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(s*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=s>0?-a:a,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(tl).addScaledVector(ws,u),p}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),n=hi.dot(hi)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,n,a){rl.subVectors(t,e),As.subVectors(i,e),il.crossVectors(rl,As);let s=this.direction.dot(il),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(As.crossVectors(Pi,As));if(l<0)return null;const c=o*this.direction.dot(rl.cross(Pi));if(c<0||l+c>s)return null;const h=-o*Pi.dot(il);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,i,n,a,s,o,l,c,h,d,u,p,g,_,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c,h,d,u,p,g,_,m)}set(e,t,i,n,a,s,o,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Hn.setFromMatrixColumn(e,0).length(),a=1/Hn.setFromMatrixColumn(e,1).length(),s=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=s*h,p=s*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-s*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*h,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*h,p=s*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=s*l,p=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=s*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rm,e,im)}lookAt(e,t,i){const n=this.elements;return Ar.subVectors(e,t),Ar.lengthSq()===0&&(Ar.z=1),Ar.normalize(),Li.crossVectors(i,Ar),Li.lengthSq()===0&&(Math.abs(i.z)===1?Ar.x+=1e-4:Ar.z+=1e-4,Ar.normalize(),Li.crossVectors(i,Ar)),Li.normalize(),Rs.crossVectors(Ar,Li),n[0]=Li.x,n[4]=Rs.x,n[8]=Ar.x,n[1]=Li.y,n[5]=Rs.y,n[9]=Ar.y,n[2]=Li.z,n[6]=Rs.z,n[10]=Ar.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],v=i[7],S=i[11],P=i[15],w=n[0],b=n[4],C=n[8],F=n[12],x=n[1],y=n[5],z=n[9],B=n[13],N=n[2],H=n[6],U=n[10],X=n[14],W=n[3],R=n[7],ae=n[11],ve=n[15];return a[0]=s*w+o*x+l*N+c*W,a[4]=s*b+o*y+l*H+c*R,a[8]=s*C+o*z+l*U+c*ae,a[12]=s*F+o*B+l*X+c*ve,a[1]=h*w+d*x+u*N+p*W,a[5]=h*b+d*y+u*H+p*R,a[9]=h*C+d*z+u*U+p*ae,a[13]=h*F+d*B+u*X+p*ve,a[2]=g*w+_*x+m*N+f*W,a[6]=g*b+_*y+m*H+f*R,a[10]=g*C+_*z+m*U+f*ae,a[14]=g*F+_*B+m*X+f*ve,a[3]=E*w+v*x+S*N+P*W,a[7]=E*b+v*y+S*H+P*R,a[11]=E*C+v*z+S*U+P*ae,a[15]=E*F+v*B+S*X+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+a*l*d-n*c*d-a*o*u+i*c*u+n*o*p-i*l*p)+_*(+t*l*p-t*c*u+a*s*u-n*s*p+n*c*h-a*l*h)+m*(+t*c*d-t*o*p-a*s*d+i*s*p+a*o*h-i*c*h)+f*(-n*o*h-t*l*d+t*o*u+n*s*d-i*s*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=d*m*c-_*u*c+_*l*p-o*m*p-d*l*f+o*u*f,v=g*u*c-h*m*c-g*l*p+s*m*p+h*l*f-s*u*f,S=h*_*c-g*d*c+g*o*p-s*_*p-h*o*f+s*d*f,P=g*d*l-h*_*l-g*o*u+s*_*u+h*o*m-s*d*m,w=t*E+i*v+n*S+a*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(_*u*a-d*m*a-_*n*p+i*m*p+d*n*f-i*u*f)*b,e[2]=(o*m*a-_*l*a+_*n*c-i*m*c-o*n*f+i*l*f)*b,e[3]=(d*l*a-o*u*a-d*n*c+i*u*c+o*n*p-i*l*p)*b,e[4]=v*b,e[5]=(h*m*a-g*u*a+g*n*p-t*m*p-h*n*f+t*u*f)*b,e[6]=(g*l*a-s*m*a-g*n*c+t*m*c+s*n*f-t*l*f)*b,e[7]=(s*u*a-h*l*a+h*n*c-t*u*c-s*n*p+t*l*p)*b,e[8]=S*b,e[9]=(g*d*a-h*_*a-g*i*p+t*_*p+h*i*f-t*d*f)*b,e[10]=(s*_*a-g*o*a+g*i*c-t*_*c-s*i*f+t*o*f)*b,e[11]=(h*o*a-s*d*a-h*i*c+t*d*c+s*i*p-t*o*p)*b,e[12]=P*b,e[13]=(h*_*n-g*d*n+g*i*u-t*_*u-h*i*m+t*d*m)*b,e[14]=(g*o*n-s*_*n-g*i*l+t*_*l+s*i*m-t*o*m)*b,e[15]=(s*d*n-h*o*n+h*i*l-t*d*l-s*i*u+t*o*u)*b,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,d=o+o,u=a*c,p=a*h,g=a*d,_=s*h,m=s*d,f=o*d,E=l*c,v=l*h,S=l*d,P=i.x,w=i.y,b=i.z;return n[0]=(1-(_+f))*P,n[1]=(p+S)*P,n[2]=(g-v)*P,n[3]=0,n[4]=(p-S)*w,n[5]=(1-(u+f))*w,n[6]=(m+E)*w,n[7]=0,n[8]=(g+v)*b,n[9]=(m-E)*b,n[10]=(1-(u+_))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=Hn.set(n[0],n[1],n[2]).length();const s=Hn.set(n[4],n[5],n[6]).length(),o=Hn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Kr.copy(this);const l=1/a,c=1/s,h=1/o;return Kr.elements[0]*=l,Kr.elements[1]*=l,Kr.elements[2]*=l,Kr.elements[4]*=c,Kr.elements[5]*=c,Kr.elements[6]*=c,Kr.elements[8]*=h,Kr.elements[9]*=h,Kr.elements[10]*=h,t.setFromRotationMatrix(Kr),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=2e3){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let p,g;if(o===2e3)p=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===2001)p=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=2e3){const l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(s-a),u=(t+e)*c,p=(i+n)*h;let g,_;if(o===2e3)g=(s+a)*d,_=-2*d;else if(o===2001)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hn=new j,Kr=new Nt,rm=new j(0,0,0),im=new j(1,1,1),Li=new j,Rs=new j,Ar=new j,gu=new Nt,_u=new ss;class Ei{constructor(e=0,t=0,i=0,n=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(mr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mr(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(mr(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-mr(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(mr(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _u.setFromEuler(this),this.setFromQuaternion(_u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nm=0;const vu=new j,Vn=new ss,di=new Nt,Cs=new j,wa=new j,am=new j,sm=new ss,xu=new j(1,0,0),yu=new j(0,1,0),Mu=new j(0,0,1),Su={type:"added"},om={type:"removed"},Gn={type:"childadded",child:null},nl={type:"childremoved",child:null};class Er extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Er.DEFAULT_UP.clone();const e=new j,t=new Ei,i=new ss,n=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Nt},normalMatrix:{value:new je}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Er.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(wa,Cs,this.up):di.lookAt(Cs,wa,this.up),this.quaternion.setFromRotationMatrix(di),n&&(di.extractRotation(n.matrixWorld),Vn.setFromRotationMatrix(di),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Su),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(om),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Su),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),u=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Er.DEFAULT_UP=new j(0,1,0);Er.DEFAULT_MATRIX_AUTO_UPDATE=!0;Er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zr=new j,fi=new j,al=new j,pi=new j,Wn=new j,$n=new j,Eu=new j,sl=new j,ol=new j,ll=new j,cl=new Ut,ul=new Ut,hl=new Ut;class ei{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Zr.subVectors(e,t),n.cross(Zr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){Zr.subVectors(n,t),fi.subVectors(i,t),al.subVectors(e,t);const s=Zr.dot(Zr),o=Zr.dot(fi),l=Zr.dot(al),c=fi.dot(fi),h=fi.dot(al),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(s*h-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,n,a,s,o,l){return this.getBarycoord(e,t,i,n,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,pi.x),l.addScaledVector(s,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,t,i,n,a,s){return cl.setScalar(0),ul.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,i),hl.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(cl,a.x),s.addScaledVector(ul,a.y),s.addScaledVector(hl,a.z),s}static isFrontFacing(e,t,i,n){return Zr.subVectors(i,t),fi.subVectors(e,t),Zr.cross(fi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zr.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Zr.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let s,o;Wn.subVectors(n,i),$n.subVectors(a,i),sl.subVectors(e,i);const l=Wn.dot(sl),c=$n.dot(sl);if(l<=0&&c<=0)return t.copy(i);ol.subVectors(e,n);const h=Wn.dot(ol),d=$n.dot(ol);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Wn,s);ll.subVectors(e,a);const p=Wn.dot(ll),g=$n.dot(ll);if(g>=0&&p<=g)return t.copy(a);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector($n,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Eu.subVectors(a,n),o=(d-h)/(d-h+(p-g)),t.copy(n).addScaledVector(Eu,o);const f=1/(m+_+u);return s=_*f,o=u*f,t.copy(i).addScaledVector(Wn,s).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function dl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ut.workingColorSpace){if(e=Wp(e,1),t=mr(t,0,1),i=mr(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=dl(s,a,e+1/3),this.g=dl(s,a,e),this.b=dl(s,a,e-1/3)}return ut.toWorkingColorSpace(this,n),this}setStyle(e,t=ii){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const i=Dd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return ut.fromWorkingColorSpace(Jt.copy(this),e),Math.round(mr(Jt.r*255,0,255))*65536+Math.round(mr(Jt.g*255,0,255))*256+Math.round(mr(Jt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,n=Jt.g,a=Jt.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-i)/d+2;break;case a:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=ii){ut.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,n=Jt.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Ps);const i=Yo(Di.h,Ps.h,t),n=Yo(Di.s,Ps.s,t),a=Yo(Di.l,Ps.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new st;st.NAMES=Dd;let lm=0;class ls extends _a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=as(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ud extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new j,Ls=new vt;class _r{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=fr(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sa(t,this.array)),t}setX(e,t){return this.normalized&&(t=fr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sa(t,this.array)),t}setY(e,t){return this.normalized&&(t=fr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sa(t,this.array)),t}setW(e,t){return this.normalized&&(t=fr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fr(t,this.array),i=fr(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=fr(t,this.array),i=fr(i,this.array),n=fr(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=fr(t,this.array),i=fr(i,this.array),n=fr(n,this.array),a=fr(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Id extends _r{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nd extends _r{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wn extends _r{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cm=0;const Hr=new Nt,fl=new Er,Xn=new j,Rr=new os,Aa=new os,$t=new j;class bi extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Nd:Id)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new je().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hr.makeRotationFromQuaternion(e),this.applyMatrix4(Hr),this}rotateX(e){return Hr.makeRotationX(e),this.applyMatrix4(Hr),this}rotateY(e){return Hr.makeRotationY(e),this.applyMatrix4(Hr),this}rotateZ(e){return Hr.makeRotationZ(e),this.applyMatrix4(Hr),this}translate(e,t,i){return Hr.makeTranslation(e,t,i),this.applyMatrix4(Hr),this}scale(e,t,i){return Hr.makeScale(e,t,i),this.applyMatrix4(Hr),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Rr.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Rr.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Rr.min),this.boundingBox.expandByPoint(Rr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Rr.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Rr.min,Aa.min),Rr.expandByPoint($t),$t.addVectors(Rr.max,Aa.max),Rr.expandByPoint($t)):(Rr.expandByPoint(Aa.min),Rr.expandByPoint(Aa.max))}Rr.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)$t.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared($t));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(Xn.fromBufferAttribute(e,c),$t.add(Xn)),n=Math.max(n,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _r(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new j,l[C]=new j;const c=new j,h=new j,d=new j,u=new vt,p=new vt,g=new vt,_=new j,m=new j;function f(C,F,x){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,F),d.fromBufferAttribute(i,x),u.fromBufferAttribute(a,C),p.fromBufferAttribute(a,F),g.fromBufferAttribute(a,x),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const y=1/(p.x*g.y-g.x*p.y);isFinite(y)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(y),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(y),o[C].add(_),o[F].add(_),o[x].add(_),l[C].add(m),l[F].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,F=E.length;C<F;++C){const x=E[C],y=x.start,z=x.count;for(let B=y,N=y+z;B<N;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new j,S=new j,P=new j,w=new j;function b(C){P.fromBufferAttribute(n,C),w.copy(P);const F=o[C];v.copy(F),v.sub(P.multiplyScalar(P.dot(F))).normalize(),S.crossVectors(w,F);const x=S.dot(l[C])<0?-1:1;s.setXYZW(C,v.x,v.y,v.z,x)}for(let C=0,F=E.length;C<F;++C){const x=E[C],y=x.start,z=x.count;for(let B=y,N=y+z;B<N;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _r(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new j,a=new j,s=new j,o=new j,l=new j,c=new j,h=new j,d=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new _r(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new Nt,nn=new Pd,Ds=new wo,bu=new j,Us=new j,Is=new j,Ns=new j,pl=new j,Os=new j,wu=new j,Fs=new j;class xi extends Er{constructor(e=new bi,t=new Ud){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Os.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(pl.fromBufferAttribute(d,e),s?Os.addScaledVector(pl,h):Os.addScaledVector(pl.sub(t),h))}t.add(Os)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(a),nn.copy(e.ray).recast(e.near),!(Ds.containsPoint(nn.origin)===!1&&(nn.intersectSphere(Ds,bu)===null||nn.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Tu.copy(a).invert(),nn.copy(e.ray).applyMatrix4(Tu),!(i.boundingBox!==null&&nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,nn)))}_computeIntersections(e,t,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=s[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,P=v;S<P;S+=3){const w=o.getX(S),b=o.getX(S+1),C=o.getX(S+2);n=Bs(this,f,e,i,c,h,d,w,b,C),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);n=Bs(this,s,e,i,c,h,d,E,v,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=s[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,P=v;S<P;S+=3){const w=S,b=S+1,C=S+2;n=Bs(this,f,e,i,c,h,d,w,b,C),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,v=m+1,S=m+2;n=Bs(this,s,e,i,c,h,d,E,v,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function um(r,e,t,i,n,a,s,o){let l;if(e.side===1?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===0,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:r}}function Bs(r,e,t,i,n,a,s,o,l,c){r.getVertexPosition(o,Us),r.getVertexPosition(l,Is),r.getVertexPosition(c,Ns);const h=um(r,e,t,i,Us,Is,Ns,wu);if(h){const d=new j;ei.getBarycoord(wu,Us,Is,Ns,d),n&&(h.uv=ei.getInterpolatedAttribute(n,o,l,c,d,new vt)),a&&(h.uv1=ei.getInterpolatedAttribute(a,o,l,c,d,new vt)),s&&(h.normal=ei.getInterpolatedAttribute(s,o,l,c,d,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new j,materialIndex:0};ei.getNormal(Us,Is,Ns,u.normal),h.face=u,h.barycoord=d}return h}class cs extends bi{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,n,s,2),g("x","z","y",1,-1,e,i,-t,n,s,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(h,3)),this.setAttribute("uv",new wn(d,2));function g(_,m,f,E,v,S,P,w,b,C,F){const x=S/b,y=P/C,z=S/2,B=P/2,N=w/2,H=b+1,U=C+1;let X=0,W=0;const R=new j;for(let ae=0;ae<U;ae++){const ve=ae*y-B;for(let Ae=0;Ae<H;Ae++){const Ce=Ae*x-z;R[_]=Ce*E,R[m]=ve*v,R[f]=N,c.push(R.x,R.y,R.z),R[_]=0,R[m]=0,R[f]=w>0?1:-1,h.push(R.x,R.y,R.z),d.push(Ae/b),d.push(1-ae/C),X+=1}}for(let ae=0;ae<C;ae++)for(let ve=0;ve<b;ve++){const Ae=u+ve+H*ae,Ce=u+ve+H*(ae+1),Y=u+(ve+1)+H*(ae+1),K=u+(ve+1)+H*ae;l.push(Ae,Ce,K),l.push(Ce,Y,K),W+=6}o.addGroup(p,W,F),p+=W,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ga(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function lr(r){const e={};for(let t=0;t<r.length;t++){const i=ga(r[t]);for(const n in i)e[n]=i[n]}return e}function hm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Od(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const dm={clone:ga,merge:lr};var fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fd extends Er{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new j,Au=new vt,Ru=new vt;class Qr extends Fd{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Au,Ru),t.subVectors(Ru,Au)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qn=-90,Yn=1;class mm extends Er{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Qr(qn,Yn,e,t);n.layers=this.layers,this.add(n);const a=new Qr(qn,Yn,e,t);a.layers=this.layers,this.add(a);const s=new Qr(qn,Yn,e,t);s.layers=this.layers,this.add(s);const o=new Qr(qn,Yn,e,t);o.layers=this.layers,this.add(o);const l=new Qr(qn,Yn,e,t);l.layers=this.layers,this.add(l);const c=new Qr(qn,Yn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bd extends Sr{constructor(e,t,i,n,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,i,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gm extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Bd(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new cs(5,5,5),a=new Ti({name:"CubemapFromEquirect",uniforms:ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;const s=new xi(n,a),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new mm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}}const ml=new j,_m=new j,vm=new je;class dn{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ml.subVectors(i,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ml),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vm.getNormalMatrix(e),n=this.coplanarPoint(ml).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const an=new wo,zs=new j;class zd{constructor(e=new dn,t=new dn,i=new dn,n=new dn,a=new dn,s=new dn){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],E=n[13],v=n[14],S=n[15];if(i[0].setComponents(l-a,u-c,m-p,S-f).normalize(),i[1].setComponents(l+a,u+c,m+p,S+f).normalize(),i[2].setComponents(l+s,u+h,m+g,S+E).normalize(),i[3].setComponents(l-s,u-h,m-g,S-E).normalize(),i[4].setComponents(l-o,u-d,m-_,S-v).normalize(),t===2e3)i[5].setComponents(l+o,u+d,m+_,S+v).normalize();else if(t===2001)i[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),an.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),an.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(an)}intersectsSprite(e){return an.center.set(0,0,0),an.radius=.7071067811865476,an.applyMatrix4(e.matrixWorld),this.intersectsSphere(an)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(zs.x=n.normal.x>0?e.max.x:e.min.x,zs.y=n.normal.y>0?e.max.y:e.min.y,zs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kd(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function xm(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}class Ao extends bi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*u-s;for(let v=0;v<c;v++){const S=v*d-a;g.push(S,-E,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const v=E+c*f,S=E+c*(f+1),P=E+1+c*(f+1),w=E+1+c*f;p.push(v,S,w),p.push(S,P,w)}this.setIndex(p),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Um=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$m=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,og=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,p_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,v_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:ym,alphahash_pars_fragment:Mm,alphamap_fragment:Sm,alphamap_pars_fragment:Em,alphatest_fragment:Tm,alphatest_pars_fragment:bm,aomap_fragment:wm,aomap_pars_fragment:Am,batching_pars_vertex:Rm,batching_vertex:Cm,begin_vertex:Pm,beginnormal_vertex:Lm,bsdfs:Dm,iridescence_fragment:Um,bumpmap_pars_fragment:Im,clipping_planes_fragment:Nm,clipping_planes_pars_fragment:Om,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Bm,color_fragment:zm,color_pars_fragment:km,color_pars_vertex:Hm,color_vertex:Vm,common:Gm,cube_uv_reflection_fragment:Wm,defaultnormal_vertex:$m,displacementmap_pars_vertex:Xm,displacementmap_vertex:qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:jm,colorspace_fragment:Km,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:Qm,envmap_pars_fragment:eg,envmap_pars_vertex:tg,envmap_physical_pars_fragment:dg,envmap_vertex:rg,fog_vertex:ig,fog_pars_vertex:ng,fog_fragment:ag,fog_pars_fragment:sg,gradientmap_pars_fragment:og,lightmap_pars_fragment:lg,lights_lambert_fragment:cg,lights_lambert_pars_fragment:ug,lights_pars_begin:hg,lights_toon_fragment:fg,lights_toon_pars_fragment:pg,lights_phong_fragment:mg,lights_phong_pars_fragment:gg,lights_physical_fragment:_g,lights_physical_pars_fragment:vg,lights_fragment_begin:xg,lights_fragment_maps:yg,lights_fragment_end:Mg,logdepthbuf_fragment:Sg,logdepthbuf_pars_fragment:Eg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:bg,map_fragment:wg,map_pars_fragment:Ag,map_particle_fragment:Rg,map_particle_pars_fragment:Cg,metalnessmap_fragment:Pg,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Dg,morphcolor_vertex:Ug,morphnormal_vertex:Ig,morphtarget_pars_vertex:Ng,morphtarget_vertex:Og,normal_fragment_begin:Fg,normal_fragment_maps:Bg,normal_pars_fragment:zg,normal_pars_vertex:kg,normal_vertex:Hg,normalmap_pars_fragment:Vg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Wg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:jg,project_vertex:Kg,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:Qg,roughnessmap_pars_fragment:e_,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:r_,shadowmap_vertex:i_,shadowmask_pars_fragment:n_,skinbase_vertex:a_,skinning_pars_vertex:s_,skinning_vertex:o_,skinnormal_vertex:l_,specularmap_fragment:c_,specularmap_pars_fragment:u_,tonemapping_fragment:h_,tonemapping_pars_fragment:d_,transmission_fragment:f_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:__,worldpos_vertex:v_,background_vert:x_,background_frag:y_,backgroundCube_vert:M_,backgroundCube_frag:S_,cube_vert:E_,cube_frag:T_,depth_vert:b_,depth_frag:w_,distanceRGBA_vert:A_,distanceRGBA_frag:R_,equirect_vert:C_,equirect_frag:P_,linedashed_vert:L_,linedashed_frag:D_,meshbasic_vert:U_,meshbasic_frag:I_,meshlambert_vert:N_,meshlambert_frag:O_,meshmatcap_vert:F_,meshmatcap_frag:B_,meshnormal_vert:z_,meshnormal_frag:k_,meshphong_vert:H_,meshphong_frag:V_,meshphysical_vert:G_,meshphysical_frag:W_,meshtoon_vert:$_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:j_,shadow_frag:K_,sprite_vert:Z_,sprite_frag:J_},ge={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ni={basic:{uniforms:lr([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:lr([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new st(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:lr([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:lr([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:lr([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new st(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:lr([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:lr([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:lr([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:lr([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:lr([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:lr([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:lr([ge.common,ge.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:lr([ge.lights,ge.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ni.physical={uniforms:lr([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ks={r:0,b:0,g:0},sn=new Ei,Q_=new Nt;function ev(r,e,t,i,n,a,s){const o=new st(0);let l=a===!0?0:1,c,h,d=null,u=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const S=g(E);S===null?f(o,l):S&&S.isColor&&(f(S,1),v=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===306)?(h===void 0&&(h=new xi(new cs(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ga(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),sn.copy(v.backgroundRotation),sn.x*=-1,sn.y*=-1,sn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(sn)),h.material.toneMapped=ut.getTransfer(S.colorSpace)!==St,(d!==S||u!==S.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,p=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xi(new Ao(2,2),new Ti({name:"BackgroundMaterial",uniforms:ga(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ut.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,p=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,v){E.getRGB(ks,Od(r)),i.buffers.color.setClear(ks.r,ks.g,ks.b,v,s)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m}}function tv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let a=n,s=!1;function o(x,y,z,B,N){let H=!1;const U=d(B,z,y);a!==U&&(a=U,c(a.object)),H=p(x,B,z,N),H&&g(x,B,z,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,S(x,y,z,B),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function d(x,y,z){const B=z.wireframe===!0;let N=i[x.id];N===void 0&&(N={},i[x.id]=N);let H=N[y.id];H===void 0&&(H={},N[y.id]=H);let U=H[B];return U===void 0&&(U=u(l()),H[B]=U),U}function u(x){const y=[],z=[],B=[];for(let N=0;N<t;N++)y[N]=0,z[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,y,z,B){const N=a.attributes,H=y.attributes;let U=0;const X=z.getAttributes();for(const W in X)if(X[W].location>=0){const R=N[W];let ae=H[W];if(ae===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),R===void 0||R.attribute!==ae||ae&&R.data!==ae.data)return!0;U++}return a.attributesNum!==U||a.index!==B}function g(x,y,z,B){const N={},H=y.attributes;let U=0;const X=z.getAttributes();for(const W in X)if(X[W].location>=0){let R=H[W];R===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(R=x.instanceColor));const ae={};ae.attribute=R,R&&R.data&&(ae.data=R.data),N[W]=ae,U++}a.attributes=N,a.attributesNum=U,a.index=B}function _(){const x=a.newAttributes;for(let y=0,z=x.length;y<z;y++)x[y]=0}function m(x){f(x,0)}function f(x,y){const z=a.newAttributes,B=a.enabledAttributes,N=a.attributeDivisors;z[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),N[x]!==y&&(r.vertexAttribDivisor(x,y),N[x]=y)}function E(){const x=a.newAttributes,y=a.enabledAttributes;for(let z=0,B=y.length;z<B;z++)y[z]!==x[z]&&(r.disableVertexAttribArray(z),y[z]=0)}function v(x,y,z,B,N,H,U){U===!0?r.vertexAttribIPointer(x,y,z,N,H):r.vertexAttribPointer(x,y,z,B,N,H)}function S(x,y,z,B){_();const N=B.attributes,H=z.getAttributes(),U=y.defaultAttributeValues;for(const X in H){const W=H[X];if(W.location>=0){let R=N[X];if(R===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(R=x.instanceColor)),R!==void 0){const ae=R.normalized,ve=R.itemSize,Ae=e.get(R);if(Ae===void 0)continue;const Ce=Ae.buffer,Y=Ae.type,K=Ae.bytesPerElement,ie=Y===r.INT||Y===r.UNSIGNED_INT||R.gpuType===1013;if(R.isInterleavedBufferAttribute){const se=R.data,xe=se.stride,_e=R.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)f(W.location+Re,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<W.locationSize;Re++)m(W.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Re=0;Re<W.locationSize;Re++)v(W.location+Re,ve/W.locationSize,Y,ae,xe*K,(_e+ve/W.locationSize*Re)*K,ie)}else{if(R.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)f(W.location+se,R.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let se=0;se<W.locationSize;se++)m(W.location+se);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let se=0;se<W.locationSize;se++)v(W.location+se,ve/W.locationSize,Y,ae,ve*K,ve/W.locationSize*se*K,ie)}}else if(U!==void 0){const ae=U[X];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(W.location,ae);break;case 3:r.vertexAttrib3fv(W.location,ae);break;case 4:r.vertexAttrib4fv(W.location,ae);break;default:r.vertexAttrib1fv(W.location,ae)}}}}E()}function P(){C();for(const x in i){const y=i[x];for(const z in y){const B=y[z];for(const N in B)h(B[N].object),delete B[N];delete y[z]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const y=i[x.id];for(const z in y){const B=y[z];for(const N in B)h(B[N].object),delete B[N];delete y[z]}delete i[x.id]}function b(x){for(const y in i){const z=i[y];if(z[x.id]===void 0)continue;const B=z[x.id];for(const N in B)h(B[N].object),delete B[N];delete z[x.id]}}function C(){F(),s=!0,a!==n&&(a=n,c(a.object))}function F(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function rv(r,e,t){let i;function n(c){i=c}function a(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];t.update(u,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)t.update(g,i,u[_])}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function iv(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){return!(b!==1023&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==1009&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==1015&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:w}}function nv(r){const e=this;let t=null,i=0,n=!1,a=!1;const s=new dn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!n||g===null||g.length===0||a&&!m)a?h(null):c();else{const E=a?0:i,v=E*4;let S=f.clippingState||null;l.value=S,S=h(g,u,v,p);for(let P=0;P!==v;++P)S[P]=t[P];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)s.copy(d[v]).applyMatrix4(E,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function av(r){let e=new WeakMap;function t(s,o){return o===303?s.mapping=301:o===304&&(s.mapping=302),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===303||o===304)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new gm(l.height);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Hd extends Fd{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ta=4,Cu=[.125,.215,.35,.446,.526,.582],pn=20,gl=new Hd,Pu=new st;let _l=null,vl=0,xl=0,yl=!1;const fn=(1+Math.sqrt(5))/2,jn=1/fn,Lu=[new j(-fn,jn,0),new j(fn,jn,0),new j(-jn,0,fn),new j(jn,0,fn),new j(0,fn,-jn),new j(0,fn,jn),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=yl,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Zi,depthBuffer:!1},n=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sv(a)),this._blurMaterial=ov(a,e,t)}return n}_compileMaterial(e){const t=new xi(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,i,n){const a=new Qr(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Pu),l.toneMapping=0,l.autoClear=!1;const d=new Ud({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new xi(new cs,d);let p=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(Pu),p=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):m===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const f=this._cubeSize;Hs(n,m*f,_>2?f:0,f,f),l.setRenderTarget(n),p&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new xi(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Lu[(n-a-1)%Lu.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new xi(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*pn-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):pn;m>pn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pn}`);const f=[];let E=0;for(let b=0;b<pn;++b){const C=b/_,F=Math.exp(-C*C/2);f.push(F),b===0?E+=F:b<m&&(E+=2*F)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const S=this._sizeLods[n],P=3*S*(n>v-ta?n-v+ta:0),w=4*(this._cubeSize-S);Hs(t,P,w,3*S,2*S),l.setRenderTarget(t),l.render(d,gl)}}function sv(r){const e=[],t=[],i=[];let n=r;const a=r-ta+1+Cu.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>r-ta?l=Cu[s-r+ta-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,C=w>2?0:-1,F=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];E.set(F,_*g*w),v.set(u,m*g*w);const x=[w,w,w,w,w,w];S.set(x,f*g*w)}const P=new bi;P.setAttribute("position",new _r(E,_)),P.setAttribute("uv",new _r(v,m)),P.setAttribute("faceIndex",new _r(S,f)),e.push(P),n>ta&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(r,e,t){const i=new Pn(r,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function ov(r,e,t){const i=new Float32Array(pn),n=new j(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Iu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lv(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Du(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new Du(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function cv(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&io("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function uv(r,e,t,i){const n={},a=new WeakMap;function s(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}u.removeEventListener("dispose",s),delete n[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let v=0,S=E.length;v<S;v+=3){const P=E[v+0],w=E[v+1],b=E[v+2];u.push(P,w,w,b,b,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,S=E.length/3-1;v<S;v+=3){const P=v+0,w=v+1,b=v+2;u.push(P,w,w,b,b,P)}}else return;const m=new(wd(u)?Nd:Id)(u,1);m.version=_;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function hv(r,e,t){let i;function n(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,p){r.drawElements(i,p,a,u*s),t.update(p,i,1)}function c(u,p,g){g!==0&&(r.drawElementsInstanced(i,p,a,u*s,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,i,1)}function d(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/s,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<_.length;E++)t.update(f,i,_[E])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function dv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function fv(r,e,t){const i=new WeakMap,n=new Ut;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let p=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let P=o.attributes.position.count*S,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const b=new Float32Array(P*w*4*d),C=new Rd(b,P,w,d);C.type=1015,C.needsUpdate=!0;const F=S*4;for(let x=0;x<d;x++){const y=f[x],z=E[x],B=v[x],N=P*w*4*x;for(let H=0;H<y.count;H++){const U=H*F;g===!0&&(n.fromBufferAttribute(y,H),b[N+U+0]=n.x,b[N+U+1]=n.y,b[N+U+2]=n.z,b[N+U+3]=0),_===!0&&(n.fromBufferAttribute(z,H),b[N+U+4]=n.x,b[N+U+5]=n.y,b[N+U+6]=n.z,b[N+U+7]=0),m===!0&&(n.fromBufferAttribute(B,H),b[N+U+8]=n.x,b[N+U+9]=n.y,b[N+U+10]=n.z,b[N+U+11]=B.itemSize===4?n.w:1)}}u={count:d,texture:C,size:new vt(P,w)},i.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:a}}function pv(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Vd extends Sr{constructor(e,t,i,n,a,s,o,l,c,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===1026&&(i=1014),i===void 0&&h===1027&&(i=1020),super(null,n,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gd=new Sr,Ou=new Vd(1,1),Wd=new Rd,$d=new em,Xd=new Bd,Fu=[],Bu=[],zu=new Float32Array(16),ku=new Float32Array(9),Hu=new Float32Array(4);function va(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=Fu[n];if(a===void 0&&(a=new Float32Array(n),Fu[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function Gt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ro(r,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function xv(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Hu.set(i),r.uniformMatrix2fv(this.addr,!1,Hu),Wt(t,i)}}function yv(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;ku.set(i),r.uniformMatrix3fv(this.addr,!1,ku),Wt(t,i)}}function Mv(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;zu.set(i),r.uniformMatrix4fv(this.addr,!1,zu),Wt(t,i)}}function Sv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function wv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function Pv(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?(Ou.compareFunction=515,a=Ou):a=Gd,t.setTexture2D(e||a,n)}function Lv(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||$d,n)}function Dv(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Xd,n)}function Uv(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Wd,n)}function Iv(r){switch(r){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return vv;case 35674:return xv;case 35675:return yv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return Ev;case 35668:case 35672:return Tv;case 35669:case 35673:return bv;case 5125:return wv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Nv(r,e){r.uniform1fv(this.addr,e)}function Ov(r,e){const t=va(e,this.size,2);r.uniform2fv(this.addr,t)}function Fv(r,e){const t=va(e,this.size,3);r.uniform3fv(this.addr,t)}function Bv(r,e){const t=va(e,this.size,4);r.uniform4fv(this.addr,t)}function zv(r,e){const t=va(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function kv(r,e){const t=va(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hv(r,e){const t=va(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Vv(r,e){r.uniform1iv(this.addr,e)}function Gv(r,e){r.uniform2iv(this.addr,e)}function Wv(r,e){r.uniform3iv(this.addr,e)}function $v(r,e){r.uniform4iv(this.addr,e)}function Xv(r,e){r.uniform1uiv(this.addr,e)}function qv(r,e){r.uniform2uiv(this.addr,e)}function Yv(r,e){r.uniform3uiv(this.addr,e)}function jv(r,e){r.uniform4uiv(this.addr,e)}function Kv(r,e,t){const i=this.cache,n=e.length,a=Ro(t,n);Gt(i,a)||(r.uniform1iv(this.addr,a),Wt(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Gd,a[s])}function Zv(r,e,t){const i=this.cache,n=e.length,a=Ro(t,n);Gt(i,a)||(r.uniform1iv(this.addr,a),Wt(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||$d,a[s])}function Jv(r,e,t){const i=this.cache,n=e.length,a=Ro(t,n);Gt(i,a)||(r.uniform1iv(this.addr,a),Wt(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Xd,a[s])}function Qv(r,e,t){const i=this.cache,n=e.length,a=Ro(t,n);Gt(i,a)||(r.uniform1iv(this.addr,a),Wt(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Wd,a[s])}function e0(r){switch(r){case 5126:return Nv;case 35664:return Ov;case 35665:return Fv;case 35666:return Bv;case 35674:return zv;case 35675:return kv;case 35676:return Hv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return $v;case 5125:return Xv;case 36294:return qv;case 36295:return Yv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}class t0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iv(t.type)}}class r0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}}class i0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function Vu(r,e){r.seq.push(e),r.map[e.id]=e}function n0(r,e,t){const i=r.name,n=i.length;for(Ml.lastIndex=0;;){const a=Ml.exec(i),s=Ml.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Vu(t,c===void 0?new t0(o,r,e):new r0(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new i0(o),Vu(t,h)),t=h}}}class no{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);n0(a,s,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function Gu(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const a0=37297;let s0=0;function o0(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function l0(r){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(r);let i;switch(e===t?i="":e===xo&&t===vo?i="LinearDisplayP3ToLinearSRGB":e===vo&&t===xo&&(i="LinearSRGBToLinearDisplayP3"),r){case Zi:case bo:return[i,"LinearTransferOETF"];case ii:case Ec:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Wu(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+o0(r.getShaderSource(e),s)}else return n}function c0(r,e){const t=l0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function u0(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new j;function h0(){ut.getLuminanceCoefficients(Vs);const r=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function f0(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p0(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Na(r){return r!==""}function $u(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(r){return r.replace(m0,_0)}const g0=new Map;function _0(r,e){let t=Ye[e];if(t===void 0){const i=g0.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(r){return r.replace(v0,x0)}function x0(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Yu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function M0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function E0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function T0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function b0(r,e,t,i){const n=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=y0(t),c=M0(t),h=S0(t),d=E0(t),u=T0(t),p=d0(t),g=f0(a),_=n.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Na).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Na).join(`
`),f.length>0&&(f+=`
`)):(m=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),f=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ye.tonemapping_pars_fragment:"",t.toneMapping!==0?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,c0("linearToOutputTexel",t.outputColorSpace),h0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),s=Yl(s),s=$u(s,t),s=Xu(s,t),o=Yl(o),o=$u(o,t),o=Xu(o,t),s=qu(s),o=qu(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=E+m+s,S=E+f+o,P=Gu(n,n.VERTEX_SHADER,v),w=Gu(n,n.FRAGMENT_SHADER,S);n.attachShader(_,P),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function b(y){if(r.debug.checkShaderErrors){const z=n.getProgramInfoLog(_).trim(),B=n.getShaderInfoLog(P).trim(),N=n.getShaderInfoLog(w).trim();let H=!0,U=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,P,w);else{const X=Wu(n,P,"vertex"),W=Wu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+z+`
`+X+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||N==="")&&(U=!1);U&&(y.diagnostics={runnable:H,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:N,prefix:f}})}n.deleteShader(P),n.deleteShader(w),C=new no(n,_),F=p0(n,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let F;this.getAttributes=function(){return F===void 0&&b(this),F};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(_,a0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let w0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new R0(e),t.set(e,i)),i}}class R0{constructor(e){this.id=w0++,this.code=e,this.usedTimes=0}}function C0(r,e,t,i,n,a,s){const o=new Ld,l=new A0,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,p=n.vertexTextures;let g=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,y,z,B,N){const H=B.fog,U=N.geometry,X=x.isMeshStandardMaterial?B.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),R=W&&W.mapping===306?W.image.height:null,ae=_[x.type];x.precision!==null&&(g=n.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ve=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ae=ve!==void 0?ve.length:0;let Ce=0;U.morphAttributes.position!==void 0&&(Ce=1),U.morphAttributes.normal!==void 0&&(Ce=2),U.morphAttributes.color!==void 0&&(Ce=3);let Y,K,ie,se;if(ae){const Ge=ni[ae];Y=Ge.vertexShader,K=Ge.fragmentShader}else Y=x.vertexShader,K=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const xe=r.getRenderTarget(),_e=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,He=!!x.map,ye=!!x.matcap,L=!!W,nt=!!x.aoMap,Ie=!!x.lightMap,V=!!x.bumpMap,Te=!!x.normalMap,Ve=!!x.displacementMap,be=!!x.emissiveMap,A=!!x.metalnessMap,M=!!x.roughnessMap,k=x.anisotropy>0,Z=x.clearcoat>0,Q=x.dispersion>0,J=x.iridescence>0,ue=x.sheen>0,oe=x.transmission>0,pe=k&&!!x.anisotropyMap,Pe=Z&&!!x.clearcoatMap,te=Z&&!!x.clearcoatNormalMap,le=Z&&!!x.clearcoatRoughnessMap,Fe=J&&!!x.iridescenceMap,De=J&&!!x.iridescenceThicknessMap,Me=ue&&!!x.sheenColorMap,Xe=ue&&!!x.sheenRoughnessMap,Be=!!x.specularMap,rt=!!x.specularColorMap,D=!!x.specularIntensityMap,me=oe&&!!x.transmissionMap,q=oe&&!!x.thicknessMap,ee=!!x.gradientMap,he=!!x.alphaMap,de=x.alphaTest>0,it=!!x.alphaHash,ot=!!x.extensions;let Ot=0;x.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ot=r.toneMapping);const re={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:K,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:_e,instancingColor:_e&&N.instanceColor!==null,instancingMorph:_e&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Zi,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:ye,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:R,aoMap:nt,lightMap:Ie,bumpMap:V,normalMap:Te,displacementMap:p&&Ve,emissiveMap:be,normalMapObjectSpace:Te&&x.normalMapType===1,normalMapTangentSpace:Te&&x.normalMapType===0,metalnessMap:A,roughnessMap:M,anisotropy:k,anisotropyMap:pe,clearcoat:Z,clearcoatMap:Pe,clearcoatNormalMap:te,clearcoatRoughnessMap:le,dispersion:Q,iridescence:J,iridescenceMap:Fe,iridescenceThicknessMap:De,sheen:ue,sheenColorMap:Me,sheenRoughnessMap:Xe,specularMap:Be,specularColorMap:rt,specularIntensityMap:D,transmission:oe,transmissionMap:me,thicknessMap:q,gradientMap:ee,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:de,alphaHash:it,combine:x.combine,mapUv:He&&m(x.map.channel),aoMapUv:nt&&m(x.aoMap.channel),lightMapUv:Ie&&m(x.lightMap.channel),bumpMapUv:V&&m(x.bumpMap.channel),normalMapUv:Te&&m(x.normalMap.channel),displacementMapUv:Ve&&m(x.displacementMap.channel),emissiveMapUv:be&&m(x.emissiveMap.channel),metalnessMapUv:A&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:pe&&m(x.anisotropyMap.channel),clearcoatMapUv:Pe&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(x.sheenRoughnessMap.channel),specularMapUv:Be&&m(x.specularMap.channel),specularColorMapUv:rt&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:me&&m(x.transmissionMap.channel),thicknessMapUv:q&&m(x.thicknessMap.channel),alphaMapUv:he&&m(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Te||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(He||he),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function E(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)y.push(z),y.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(v(y,x),S(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function v(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),x.push(o.mask)}function P(x){const y=_[x.type];let z;if(y){const B=ni[y];z=dm.clone(B.uniforms)}else z=x.uniforms;return z}function w(x,y){let z;for(let B=0,N=h.length;B<N;B++){const H=h[B];if(H.cacheKey===y){z=H,++z.usedTimes;break}}return z===void 0&&(z=new b0(r,y,x,a),h.push(z)),z}function b(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function C(x){l.remove(x)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:P,acquireProgram:w,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:F}}function P0(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function L0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ju(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ku(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(d,u,p,g,_,m){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=s(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(d,u,p,g,_,m){const f=s(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||L0),i.length>1&&i.sort(u||ju),n.length>1&&n.sort(u||ju)}function h(){for(let d=e,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function D0(){let r=new WeakMap;function e(i,n){const a=r.get(i);let s;return a===void 0?(s=new Ku,r.set(i,[s])):n>=a.length?(s=new Ku,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function U0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new st};break;case"SpotLight":t={position:new j,direction:new j,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function I0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let N0=0;function O0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function F0(r){const e=new U0,t=I0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const n=new j,a=new Nt,s=new Nt;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,v=0,S=0,P=0,w=0,b=0;c.sort(O0);for(let F=0,x=c.length;F<x;F++){const y=c[F],z=y.color,B=y.intensity,N=y.distance,H=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=z.r*B,d+=z.g*B,u+=z.b*B;else if(y.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(y.sh.coefficients[U],B);b++}else if(y.isDirectionalLight){const U=e.get(y);if(U.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const X=y.shadow,W=t.get(y);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=y.shadow.matrix,E++}i.directional[p]=U,p++}else if(y.isSpotLight){const U=e.get(y);U.position.setFromMatrixPosition(y.matrixWorld),U.color.copy(z).multiplyScalar(B),U.distance=N,U.coneCos=Math.cos(y.angle),U.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),U.decay=y.decay,i.spot[_]=U;const X=y.shadow;if(y.map&&(i.spotLightMap[P]=y.map,P++,X.updateMatrices(y),y.castShadow&&w++),i.spotLightMatrix[_]=X.matrix,y.castShadow){const W=t.get(y);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=H,S++}_++}else if(y.isRectAreaLight){const U=e.get(y);U.color.copy(z).multiplyScalar(B),U.halfWidth.set(y.width*.5,0,0),U.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=U,m++}else if(y.isPointLight){const U=e.get(y);if(U.color.copy(y.color).multiplyScalar(y.intensity),U.distance=y.distance,U.decay=y.decay,y.castShadow){const X=y.shadow,W=t.get(y);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=y.shadow.matrix,v++}i.point[g]=U,g++}else if(y.isHemisphereLight){const U=e.get(y);U.skyColor.copy(y.color).multiplyScalar(B),U.groundColor.copy(y.groundColor).multiplyScalar(B),i.hemi[f]=U,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==E||C.numPointShadows!==v||C.numSpotShadows!==S||C.numSpotMaps!==P||C.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=E,C.numPointShadows=v,C.numSpotShadows=S,C.numSpotMaps=P,C.numLightProbes=b,i.version=N0++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const v=c[f];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),s.identity(),a.copy(v.matrixWorld),a.premultiply(m),s.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Zu(r){const e=new F0(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function B0(r){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new Zu(r),e.set(n,[o])):a>=s.length?(o=new Zu(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class z0 extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k0 extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G0(r,e,t){let i=new zd;const n=new vt,a=new vt,s=new Ut,o=new z0({depthPacking:3201}),l=new k0,c={},h=t.maxTextureSize,d={0:1,1:0,2:2},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:H0,fragmentShader:V0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xi(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const F=r.getRenderTarget(),x=r.getActiveCubeFace(),y=r.getActiveMipmapLevel(),z=r.state;z.setBlending(0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=f!==3&&this.type===3,N=f===3&&this.type!==3;for(let H=0,U=w.length;H<U;H++){const X=w[H],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const R=W.getFrameExtents();if(n.multiply(R),a.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/R.x),n.x=a.x*R.x,W.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/R.y),n.y=a.y*R.y,W.mapSize.y=a.y)),W.map===null||B===!0||N===!0){const ve=this.type!==3?{minFilter:1003,magFilter:1003}:{};W.map!==null&&W.map.dispose(),W.map=new Pn(n.x,n.y,ve),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ae=W.getViewportCount();for(let ve=0;ve<ae;ve++){const Ae=W.getViewport(ve);s.set(a.x*Ae.x,a.y*Ae.y,a.x*Ae.z,a.y*Ae.w),z.viewport(s),W.updateMatrices(X,ve),i=W.getFrustum(),S(b,C,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===3&&E(W,C),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(F,x,y)};function E(w,b){const C=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pn(n.x,n.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,p,_,null)}function v(w,b,C,F){let x=null;const y=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)x=y;else if(x=C.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=x.uuid,B=b.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let H=N[B];H===void 0&&(H=x.clone(),N[B]=H,b.addEventListener("dispose",P)),x=H}if(x.visible=b.visible,x.wireframe=b.wireframe,F===3?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=r.properties.get(x);z.light=C}return x}function S(w,b,C,F,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===3)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const z=e.update(w),B=w.material;if(Array.isArray(B)){const N=z.groups;for(let H=0,U=N.length;H<U;H++){const X=N[H],W=B[X.materialIndex];if(W&&W.visible){const R=v(w,W,F,x);w.onBeforeShadow(r,w,b,C,z,R,X),r.renderBufferDirect(C,null,z,R,w,X),w.onAfterShadow(r,w,b,C,z,R,X)}}}else if(B.visible){const N=v(w,B,F,x);w.onBeforeShadow(r,w,b,C,z,N,null),r.renderBufferDirect(C,null,z,N,w,null),w.onAfterShadow(r,w,b,C,z,N,null)}}const y=w.children;for(let z=0,B=y.length;z<B;z++)S(y[z],b,C,F,x)}function P(w){w.target.removeEventListener("dispose",P);for(const b in c){const C=c[b],F=w.target.uuid;F in C&&(C[F].dispose(),delete C[F])}}}const W0={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function $0(r){function e(){let D=!1;const me=new Ut;let q=null;const ee=new Ut(0,0,0,0);return{setMask:function(he){q!==he&&!D&&(r.colorMask(he,he,he,he),q=he)},setLocked:function(he){D=he},setClear:function(he,de,it,ot,Ot){Ot===!0&&(he*=ot,de*=ot,it*=ot),me.set(he,de,it,ot),ee.equals(me)===!1&&(r.clearColor(he,de,it,ot),ee.copy(me))},reset:function(){D=!1,q=null,ee.set(-1,0,0,0)}}}function t(){let D=!1,me=!1,q=null,ee=null,he=null;return{setReversed:function(de){me=de},setTest:function(de){de?ie(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(de){q!==de&&!D&&(r.depthMask(de),q=de)},setFunc:function(de){if(me&&(de=W0[de]),ee!==de){switch(de){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=de}},setLocked:function(de){D=de},setClear:function(de){he!==de&&(r.clearDepth(de),he=de)},reset:function(){D=!1,q=null,ee=null,he=null}}}function i(){let D=!1,me=null,q=null,ee=null,he=null,de=null,it=null,ot=null,Ot=null;return{setTest:function(re){D||(re?ie(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(re){me!==re&&!D&&(r.stencilMask(re),me=re)},setFunc:function(re,Ge,at){(q!==re||ee!==Ge||he!==at)&&(r.stencilFunc(re,Ge,at),q=re,ee=Ge,he=at)},setOp:function(re,Ge,at){(de!==re||it!==Ge||ot!==at)&&(r.stencilOp(re,Ge,at),de=re,it=Ge,ot=at)},setLocked:function(re){D=re},setClear:function(re){Ot!==re&&(r.clearStencil(re),Ot=re)},reset:function(){D=!1,me=null,q=null,ee=null,he=null,de=null,it=null,ot=null,Ot=null}}}const n=new e,a=new t,s=new i,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,E=null,v=null,S=null,P=null,w=new st(0,0,0),b=0,C=!1,F=null,x=null,y=null,z=null,B=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,U=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=U>=1):X.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=U>=2);let W=null,R={};const ae=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Ae=new Ut().fromArray(ae),Ce=new Ut().fromArray(ve);function Y(D,me,q,ee){const he=new Uint8Array(4),de=r.createTexture();r.bindTexture(D,de),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<q;it++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(me+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return de}const K={};K[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ie(r.DEPTH_TEST),a.setFunc(3),Ie(!1),V(1),ie(r.CULL_FACE),L(0);function ie(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function se(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function xe(D,me){return h[D]!==me?(r.bindFramebuffer(D,me),h[D]=me,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=me),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=me),!0):!1}function _e(D,me){let q=u,ee=!1;if(D){q=d.get(me),q===void 0&&(q=[],d.set(me,q));const he=D.textures;if(q.length!==he.length||q[0]!==r.COLOR_ATTACHMENT0){for(let de=0,it=he.length;de<it;de++)q[de]=r.COLOR_ATTACHMENT0+de;q.length=he.length,ee=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,ee=!0);ee&&r.drawBuffers(q)}function Re(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const He={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};He[103]=r.MIN,He[104]=r.MAX;const ye={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function L(D,me,q,ee,he,de,it,ot,Ot,re){if(D===0){g===!0&&(se(r.BLEND),g=!1);return}if(g===!1&&(ie(r.BLEND),g=!0),D!==5){if(D!==_||re!==C){if((m!==100||v!==100)&&(r.blendEquation(r.FUNC_ADD),m=100,v=100),re)switch(D){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,E=null,S=null,P=null,w.set(0,0,0),b=0,_=D,C=re}return}he=he||me,de=de||q,it=it||ee,(me!==m||he!==v)&&(r.blendEquationSeparate(He[me],He[he]),m=me,v=he),(q!==f||ee!==E||de!==S||it!==P)&&(r.blendFuncSeparate(ye[q],ye[ee],ye[de],ye[it]),f=q,E=ee,S=de,P=it),(ot.equals(w)===!1||Ot!==b)&&(r.blendColor(ot.r,ot.g,ot.b,Ot),w.copy(ot),b=Ot),_=D,C=!1}function nt(D,me){D.side===2?se(r.CULL_FACE):ie(r.CULL_FACE);let q=D.side===1;me&&(q=!q),Ie(q),D.blending===1&&D.transparent===!1?L(0):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),n.setMask(D.colorWrite);const ee=D.stencilWrite;s.setTest(ee),ee&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(D){F!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),F=D)}function V(D){D!==0?(ie(r.CULL_FACE),D!==x&&(D===1?r.cullFace(r.BACK):D===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),x=D}function Te(D){D!==y&&(H&&r.lineWidth(D),y=D)}function Ve(D,me,q){D?(ie(r.POLYGON_OFFSET_FILL),(z!==me||B!==q)&&(r.polygonOffset(me,q),z=me,B=q)):se(r.POLYGON_OFFSET_FILL)}function be(D){D?ie(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function A(D){D===void 0&&(D=r.TEXTURE0+N-1),W!==D&&(r.activeTexture(D),W=D)}function M(D,me,q){q===void 0&&(W===null?q=r.TEXTURE0+N-1:q=W);let ee=R[q];ee===void 0&&(ee={type:void 0,texture:void 0},R[q]=ee),(ee.type!==D||ee.texture!==me)&&(W!==q&&(r.activeTexture(q),W=q),r.bindTexture(D,me||K[D]),ee.type=D,ee.texture=me)}function k(){const D=R[W];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Ae.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ae.copy(D))}function Me(D){Ce.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ce.copy(D))}function Xe(D,me){let q=l.get(me);q===void 0&&(q=new WeakMap,l.set(me,q));let ee=q.get(D);ee===void 0&&(ee=r.getUniformBlockIndex(me,D.name),q.set(D,ee))}function Be(D,me){const q=l.get(me).get(D);o.get(me)!==q&&(r.uniformBlockBinding(me,q,D.__bindingPointIndex),o.set(me,q))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,R={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,E=null,v=null,S=null,P=null,w=new st(0,0,0),b=0,C=!1,F=null,x=null,y=null,z=null,B=null,Ae.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),s.reset()}return{buffers:{color:n,depth:a,stencil:s},enable:ie,disable:se,bindFramebuffer:xe,drawBuffers:_e,useProgram:Re,setBlending:L,setMaterial:nt,setFlipSided:Ie,setCullFace:V,setLineWidth:Te,setPolygonOffset:Ve,setScissorTest:be,activeTexture:A,bindTexture:M,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:le,texImage3D:Fe,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:te,texSubImage2D:J,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:De,viewport:Me,reset:rt}}function Ju(r,e,t,i){const n=X0(i);switch(t){case 1021:return r*e;case 1024:return r*e;case 1025:return r*e*2;case 1028:return r*e/n.components*n.byteLength;case 1029:return r*e/n.components*n.byteLength;case 1030:return r*e*2/n.components*n.byteLength;case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case 1023:return r*e*4/n.components*n.byteLength;case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function q0(r,e,t,i,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):yo("canvas")}function _(A,M,k){let Z=1;const Q=be(A);if((Q.width>k||Q.height>k)&&(Z=k/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Z*Q.width),ue=Math.floor(Z*Q.height);d===void 0&&(d=g(J,ue));const oe=M?g(J,ue):d;return oe.width=J,oe.height=ue,oe.getContext("2d").drawImage(A,0,0,J,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+ue+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==1003&&A.minFilter!==1006}function f(A){r.generateMipmap(A)}function E(A,M,k,Z,Q=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=M;if(M===r.RED&&(k===r.FLOAT&&(J=r.R32F),k===r.HALF_FLOAT&&(J=r.R16F),k===r.UNSIGNED_BYTE&&(J=r.R8)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.R8UI),k===r.UNSIGNED_SHORT&&(J=r.R16UI),k===r.UNSIGNED_INT&&(J=r.R32UI),k===r.BYTE&&(J=r.R8I),k===r.SHORT&&(J=r.R16I),k===r.INT&&(J=r.R32I)),M===r.RG&&(k===r.FLOAT&&(J=r.RG32F),k===r.HALF_FLOAT&&(J=r.RG16F),k===r.UNSIGNED_BYTE&&(J=r.RG8)),M===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RG8UI),k===r.UNSIGNED_SHORT&&(J=r.RG16UI),k===r.UNSIGNED_INT&&(J=r.RG32UI),k===r.BYTE&&(J=r.RG8I),k===r.SHORT&&(J=r.RG16I),k===r.INT&&(J=r.RG32I)),M===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGB8UI),k===r.UNSIGNED_SHORT&&(J=r.RGB16UI),k===r.UNSIGNED_INT&&(J=r.RGB32UI),k===r.BYTE&&(J=r.RGB8I),k===r.SHORT&&(J=r.RGB16I),k===r.INT&&(J=r.RGB32I)),M===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),k===r.UNSIGNED_INT&&(J=r.RGBA32UI),k===r.BYTE&&(J=r.RGBA8I),k===r.SHORT&&(J=r.RGBA16I),k===r.INT&&(J=r.RGBA32I)),M===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),M===r.RGBA){const ue=Q?_o:ut.getTransfer(Z);k===r.FLOAT&&(J=r.RGBA32F),k===r.HALF_FLOAT&&(J=r.RGBA16F),k===r.UNSIGNED_BYTE&&(J=ue===St?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(A,M){let k;return A?M===null||M===1014||M===1020?k=r.DEPTH24_STENCIL8:M===1015?k=r.DEPTH32F_STENCIL8:M===1012&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===1014||M===1020?k=r.DEPTH_COMPONENT24:M===1015?k=r.DEPTH_COMPONENT32F:M===1012&&(k=r.DEPTH_COMPONENT16),k}function S(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){const M=A.target;M.removeEventListener("dispose",P),b(M),M.isVideoTexture&&h.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),F(M)}function b(A){const M=i.get(A);if(M.__webglInit===void 0)return;const k=A.source,Z=u.get(k);if(Z){const Q=Z[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(A),Object.keys(Z).length===0&&u.delete(k)}i.remove(A)}function C(A){const M=i.get(A);r.deleteTexture(M.__webglTexture);const k=A.source,Z=u.get(k);delete Z[M.__cacheKey],s.memory.textures--}function F(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let Q=0;Q<M.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[Z]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=A.textures;for(let Z=0,Q=k.length;Z<Q;Z++){const J=i.get(k[Z]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),s.memory.textures--),i.remove(k[Z])}i.remove(A)}let x=0;function y(){x=0}function z(){const A=x;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),x+=1,A}function B(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function N(A,M){const k=i.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(k,A,M);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function H(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Ce(k,A,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function U(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Ce(k,A,M);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function X(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Y(k,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}const W={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},R={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},ae={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function ve(A,M){if(M.type===1015&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===1006||M.magFilter===1007||M.magFilter===1005||M.magFilter===1008||M.minFilter===1006||M.minFilter===1007||M.minFilter===1005||M.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,W[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,W[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,W[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,R[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,R[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));const Z=M.source;let Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));const J=B(M);if(J!==A.__cacheKey){Q[J]===void 0&&(Q[J]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,k=!0),Q[J].usedTimes++;const ue=Q[A.__cacheKey];ue!==void 0&&(Q[A.__cacheKey].usedTimes--,ue.usedTimes===0&&C(M)),A.__cacheKey=J,A.__webglTexture=Q[J].texture}return k}function Ce(A,M,k){let Z=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=r.TEXTURE_3D);const Q=Ae(A,M),J=M.source;t.bindTexture(Z,A.__webglTexture,r.TEXTURE0+k);const ue=i.get(J);if(J.version!==ue.__version||Q===!0){t.activeTexture(r.TEXTURE0+k);const oe=ut.getPrimaries(ut.workingColorSpace),pe=M.colorSpace===Ni?null:ut.getPrimaries(M.colorSpace),Pe=M.colorSpace===Ni||oe===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let te=_(M.image,!1,n.maxTextureSize);te=Ve(M,te);const le=a.convert(M.format,M.colorSpace),Fe=a.convert(M.type);let De=E(M.internalFormat,le,Fe,M.colorSpace,M.isVideoTexture);ve(Z,M);let Me;const Xe=M.mipmaps,Be=M.isVideoTexture!==!0,rt=ue.__version===void 0||Q===!0,D=J.dataReady,me=S(M,te);if(M.isDepthTexture)De=v(M.format===1027,M.type),rt&&(Be?t.texStorage2D(r.TEXTURE_2D,1,De,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,De,te.width,te.height,0,le,Fe,null));else if(M.isDataTexture)if(Xe.length>0){Be&&rt&&t.texStorage2D(r.TEXTURE_2D,me,De,Xe[0].width,Xe[0].height);for(let q=0,ee=Xe.length;q<ee;q++)Me=Xe[q],Be?D&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,le,Fe,Me.data):t.texImage2D(r.TEXTURE_2D,q,De,Me.width,Me.height,0,le,Fe,Me.data);M.generateMipmaps=!1}else Be?(rt&&t.texStorage2D(r.TEXTURE_2D,me,De,te.width,te.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,te.width,te.height,le,Fe,te.data)):t.texImage2D(r.TEXTURE_2D,0,De,te.width,te.height,0,le,Fe,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,De,Xe[0].width,Xe[0].height,te.depth);for(let q=0,ee=Xe.length;q<ee;q++)if(Me=Xe[q],M.format!==1023)if(le!==null)if(Be){if(D)if(M.layerUpdates.size>0){const he=Ju(Me.width,Me.height,M.format,M.type);for(const de of M.layerUpdates){const it=Me.data.subarray(de*he/Me.data.BYTES_PER_ELEMENT,(de+1)*he/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,de,Me.width,Me.height,1,le,it,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,te.depth,le,Me.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,De,Me.width,Me.height,te.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,te.depth,le,Fe,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,De,Me.width,Me.height,te.depth,0,le,Fe,Me.data)}else{Be&&rt&&t.texStorage2D(r.TEXTURE_2D,me,De,Xe[0].width,Xe[0].height);for(let q=0,ee=Xe.length;q<ee;q++)Me=Xe[q],M.format!==1023?le!==null?Be?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,le,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,q,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,le,Fe,Me.data):t.texImage2D(r.TEXTURE_2D,q,De,Me.width,Me.height,0,le,Fe,Me.data)}else if(M.isDataArrayTexture)if(Be){if(rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,De,te.width,te.height,te.depth),D)if(M.layerUpdates.size>0){const q=Ju(te.width,te.height,M.format,M.type);for(const ee of M.layerUpdates){const he=te.data.subarray(ee*q/te.data.BYTES_PER_ELEMENT,(ee+1)*q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,te.width,te.height,1,le,Fe,he)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Fe,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,te.width,te.height,te.depth,0,le,Fe,te.data);else if(M.isData3DTexture)Be?(rt&&t.texStorage3D(r.TEXTURE_3D,me,De,te.width,te.height,te.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Fe,te.data)):t.texImage3D(r.TEXTURE_3D,0,De,te.width,te.height,te.depth,0,le,Fe,te.data);else if(M.isFramebufferTexture){if(rt)if(Be)t.texStorage2D(r.TEXTURE_2D,me,De,te.width,te.height);else{let q=te.width,ee=te.height;for(let he=0;he<me;he++)t.texImage2D(r.TEXTURE_2D,he,De,q,ee,0,le,Fe,null),q>>=1,ee>>=1}}else if(Xe.length>0){if(Be&&rt){const q=be(Xe[0]);t.texStorage2D(r.TEXTURE_2D,me,De,q.width,q.height)}for(let q=0,ee=Xe.length;q<ee;q++)Me=Xe[q],Be?D&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,le,Fe,Me):t.texImage2D(r.TEXTURE_2D,q,De,le,Fe,Me);M.generateMipmaps=!1}else if(Be){if(rt){const q=be(te);t.texStorage2D(r.TEXTURE_2D,me,De,q.width,q.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,Fe,te)}else t.texImage2D(r.TEXTURE_2D,0,De,le,Fe,te);m(M)&&f(Z),ue.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Y(A,M,k){if(M.image.length!==6)return;const Z=Ae(A,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const J=i.get(Q);if(Q.version!==J.__version||Z===!0){t.activeTexture(r.TEXTURE0+k);const ue=ut.getPrimaries(ut.workingColorSpace),oe=M.colorSpace===Ni?null:ut.getPrimaries(M.colorSpace),pe=M.colorSpace===Ni||ue===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!Pe&&!te?le[ee]=_(M.image[ee],!0,n.maxCubemapSize):le[ee]=te?M.image[ee].image:M.image[ee],le[ee]=Ve(M,le[ee]);const Fe=le[0],De=a.convert(M.format,M.colorSpace),Me=a.convert(M.type),Xe=E(M.internalFormat,De,Me,M.colorSpace),Be=M.isVideoTexture!==!0,rt=J.__version===void 0||Z===!0,D=Q.dataReady;let me=S(M,Fe);ve(r.TEXTURE_CUBE_MAP,M);let q;if(Pe){Be&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Xe,Fe.width,Fe.height);for(let ee=0;ee<6;ee++){q=le[ee].mipmaps;for(let he=0;he<q.length;he++){const de=q[he];M.format!==1023?De!==null?Be?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,Xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,de.width,de.height,De,Me,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,Xe,de.width,de.height,0,De,Me,de.data)}}}else{if(q=M.mipmaps,Be&&rt){q.length>0&&me++;const ee=be(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(te){Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le[ee].width,le[ee].height,De,Me,le[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,le[ee].width,le[ee].height,0,De,Me,le[ee].data);for(let he=0;he<q.length;he++){const de=q[he].image[ee].image;Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,de.width,de.height,De,Me,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,Xe,de.width,de.height,0,De,Me,de.data)}}else{Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Me,le[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,De,Me,le[ee]);for(let he=0;he<q.length;he++){const de=q[he];Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,De,Me,de.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,Xe,De,Me,de.image[ee])}}}m(M)&&f(r.TEXTURE_CUBE_MAP),J.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function K(A,M,k,Z,Q,J){const ue=a.convert(k.format,k.colorSpace),oe=a.convert(k.type),pe=E(k.internalFormat,ue,oe,k.colorSpace);if(!i.get(M).__hasExternalTextures){const Pe=Math.max(1,M.width>>J),te=Math.max(1,M.height>>J);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,J,pe,Pe,te,M.depth,0,ue,oe,null):t.texImage2D(Q,J,pe,Pe,te,0,ue,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),V(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,i.get(k).__webglTexture,0,Ie(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,i.get(k).__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(A,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,J=v(M.stencilBuffer,Q),ue=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Ie(M);V(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,J,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,J,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,J,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,A)}else{const Z=M.textures;for(let Q=0;Q<Z.length;Q++){const J=Z[Q],ue=a.convert(J.format,J.colorSpace),oe=a.convert(J.type),pe=E(J.internalFormat,ue,oe,J.colorSpace),Pe=Ie(M);k&&V(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,pe,M.width,M.height):V(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,pe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);const k=i.get(M.depthTexture).__webglTexture,Z=Ie(M);if(M.depthTexture.format===1026)V(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else if(M.depthTexture.format===1027)V(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function xe(A){const M=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");se(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=r.createRenderbuffer(),ie(M.__webglDepthbuffer[Z],A,!1);else{const Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ie(M.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(A,M,k){const Z=i.get(A);M!==void 0&&K(Z.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&xe(A)}function Re(A){const M=A.texture,k=i.get(A),Z=i.get(M);A.addEventListener("dispose",w);const Q=A.textures,J=A.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=M.version,s.memory.textures++),J){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let pe=0;pe<M.mipmaps.length;pe++)k.__webglFramebuffer[oe][pe]=r.createFramebuffer()}else k.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)k.__webglFramebuffer[oe]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ue)for(let oe=0,pe=Q.length;oe<pe;oe++){const Pe=i.get(Q[oe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=r.createTexture(),s.memory.textures++)}if(A.samples>0&&V(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const pe=Q[oe];k.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const Pe=a.convert(pe.format,pe.colorSpace),te=a.convert(pe.type),le=E(pe.internalFormat,Pe,te,pe.colorSpace,A.isXRRenderTarget===!0),Fe=Ie(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,le,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ve(r.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)K(k.__webglFramebuffer[oe][pe],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else K(k.__webglFramebuffer[oe],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(M)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,pe=Q.length;oe<pe;oe++){const Pe=Q[oe],te=i.get(Pe);t.bindTexture(r.TEXTURE_2D,te.__webglTexture),ve(r.TEXTURE_2D,Pe),K(k.__webglFramebuffer,A,Pe,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(Pe)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),ve(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)K(k.__webglFramebuffer[pe],A,M,r.COLOR_ATTACHMENT0,oe,pe);else K(k.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,oe,0);m(M)&&f(oe),t.unbindTexture()}A.depthBuffer&&xe(A)}function He(A){const M=A.textures;for(let k=0,Z=M.length;k<Z;k++){const Q=M[k];if(m(Q)){const J=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ue=i.get(Q).__webglTexture;t.bindTexture(J,ue),f(J),t.unbindTexture()}}}const ye=[],L=[];function nt(A){if(A.samples>0){if(V(A)===!1){const M=A.textures,k=A.width,Z=A.height;let Q=r.COLOR_BUFFER_BIT;const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=i.get(A),oe=M.length>1;if(oe)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);const Pe=i.get(M[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,k,Z,0,0,k,Z,Q,r.NEAREST),l===!0&&(ye.length=0,L.length=0,ye.push(r.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ye.push(J),L.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);const Pe=i.get(M[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,Pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ie(A){return Math.min(n.maxSamples,A.samples)}function V(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(A){const M=s.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ve(A,M){const k=A.colorSpace,Z=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Zi&&k!==Ni&&(ut.getTransfer(k)===St?(Z!==1023||Q!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=y,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=X,this.rebindTextures=_e,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=V}function Y0(r,e){function t(i,n=Ni){let a;const s=ut.getTransfer(n);if(i===1009)return r.UNSIGNED_BYTE;if(i===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===1012)return r.UNSIGNED_SHORT;if(i===1013)return r.INT;if(i===1014)return r.UNSIGNED_INT;if(i===1015)return r.FLOAT;if(i===1016)return r.HALF_FLOAT;if(i===1021)return r.ALPHA;if(i===1022)return r.RGB;if(i===1023)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===1026)return r.DEPTH_COMPONENT;if(i===1027)return r.DEPTH_STENCIL;if(i===1028)return r.RED;if(i===1029)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===1031)return r.RG_INTEGER;if(i===1033)return r.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(s===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===36196||i===37492)return s===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===37496)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===37808)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===36492)return s===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class j0 extends Qr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gs extends Er{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Sr,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:Z0,fragmentShader:J0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xi(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ex extends _a{constructor(e,t){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new Q0,m=t.getContextAttributes();let f=null,E=null;const v=[],S=[],P=new vt;let w=null;const b=new Qr;b.layers.enable(1),b.viewport=new Ut;const C=new Qr;C.layers.enable(2),C.viewport=new Ut;const F=[b,C],x=new j0;x.layers.enable(1),x.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=v[Y];return K===void 0&&(K=new Sl,v[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=v[Y];return K===void 0&&(K=new Sl,v[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=v[Y];return K===void 0&&(K=new Sl,v[Y]=K),K.getHandSpace()};function B(Y){const K=S.indexOf(Y.inputSource);if(K===-1)return;const ie=v[K];ie!==void 0&&(ie.update(Y.inputSource,Y.frame,c||s),ie.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",H);for(let Y=0;Y<v.length;Y++){const K=S[Y];K!==null&&(S[Y]=null,v[Y].disconnect(K))}y=null,z=null,_.reset(),e.setRenderTarget(f),p=null,u=null,d=null,n=null,E=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",N),n.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,K),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Pn(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ie=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?1027:1026,ie=m.stencil?1020:1014);const xe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:a};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(xe),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Pn(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Vd(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Ce.setContext(n),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Y){for(let K=0;K<Y.removed.length;K++){const ie=Y.removed[K],se=S.indexOf(ie);se>=0&&(S[se]=null,v[se].disconnect(ie))}for(let K=0;K<Y.added.length;K++){const ie=Y.added[K];let se=S.indexOf(ie);if(se===-1){for(let _e=0;_e<v.length;_e++)if(_e>=S.length){S.push(ie),se=_e;break}else if(S[_e]===null){S[_e]=ie,se=_e;break}if(se===-1)break}const xe=v[se];xe&&xe.connect(ie)}}const U=new j,X=new j;function W(Y,K,ie){U.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ie.matrixWorld);const se=U.distanceTo(X),xe=K.projectionMatrix.elements,_e=ie.projectionMatrix.elements,Re=xe[14]/(xe[10]-1),He=xe[14]/(xe[10]+1),ye=(xe[9]+1)/xe[5],L=(xe[9]-1)/xe[5],nt=(xe[8]-1)/xe[0],Ie=(_e[8]+1)/_e[0],V=Re*nt,Te=Re*Ie,Ve=se/(-nt+Ie),be=Ve*-nt;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(be),Y.translateZ(Ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xe[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const A=Re+Ve,M=He+Ve,k=V-be,Z=Te+(se-be),Q=ye*He/M*A,J=L*He/M*A;Y.projectionMatrix.makePerspective(k,Z,Q,J,A,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function R(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let K=Y.near,ie=Y.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),x.near=C.near=b.near=K,x.far=C.far=b.far=ie,(y!==x.near||z!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,z=x.far);const se=Y.parent,xe=x.cameras;R(x,se);for(let _e=0;_e<xe.length;_e++)R(xe[_e],se);xe.length===2?W(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),ae(Y,x,se)};function ae(Y,K,ie){ie===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ie.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ql*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ve=null;function Ae(Y,K){if(h=K.getViewerPose(c||s),g=K,h!==null){const ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let se=!1;ie.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let _e=0;_e<ie.length;_e++){const Re=ie[_e];let He=null;if(p!==null)He=p.getViewport(Re);else{const L=d.getViewSubImage(u,Re);He=L.viewport,_e===0&&(e.setRenderTargetTextures(E,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(E))}let ye=F[_e];ye===void 0&&(ye=new Qr,ye.layers.enable(_e),ye.viewport=new Ut,F[_e]=ye),ye.matrix.fromArray(Re.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Re.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(He.x,He.y,He.width,He.height),_e===0&&(x.matrix.copy(ye.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(ye)}const xe=n.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const _e=d.getDepthInformation(ie[0]);_e&&_e.isValid&&_e.texture&&_.init(e,_e,n.renderState)}}for(let ie=0;ie<v.length;ie++){const se=S[ie],xe=v[ie];se!==null&&xe!==void 0&&xe.update(se,K,c||s)}ve&&ve(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ce=new kd;Ce.setAnimationLoop(Ae),this.setAnimationLoop=function(Y){ve=Y},this.dispose=function(){}}}const on=new Ei,tx=new Nt;function rx(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Od(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,E,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===1&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===1&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),v=E.envMap,S=E.envMapRotation;v&&(m.envMap.value=v,on.copy(S),on.x*=-1,on.y*=-1,on.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),m.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(on)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ix(r,e,t,i){let n={},a={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){const S=v.program;i.uniformBlockBinding(E,S)}function c(E,v){let S=n[E.id];S===void 0&&(g(E),S=h(E),n[E.id]=S,E.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(E,P);const w=e.render.frame;a[E.id]!==w&&(u(E),a[E.id]=w)}function h(E){const v=d();E.__bindingPointIndex=v;const S=r.createBuffer(),P=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,P,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function d(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const v=n[E.id],S=E.uniforms,P=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,b=S.length;w<b;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let F=0,x=C.length;F<x;F++){const y=C[F];if(p(y,w,F,P)===!0){const z=y.__offset,B=Array.isArray(y.value)?y.value:[y.value];let N=0;for(let H=0;H<B.length;H++){const U=B[H],X=_(U);typeof U=="number"||typeof U=="boolean"?(y.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,z+N,y.__data)):U.isMatrix3?(y.__data[0]=U.elements[0],y.__data[1]=U.elements[1],y.__data[2]=U.elements[2],y.__data[3]=0,y.__data[4]=U.elements[3],y.__data[5]=U.elements[4],y.__data[6]=U.elements[5],y.__data[7]=0,y.__data[8]=U.elements[6],y.__data[9]=U.elements[7],y.__data[10]=U.elements[8],y.__data[11]=0):(U.toArray(y.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,y.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(E,v,S,P){const w=E.value,b=v+"_"+S;if(P[b]===void 0)return typeof w=="number"||typeof w=="boolean"?P[b]=w:P[b]=w.clone(),!0;{const C=P[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return P[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(E){const v=E.uniforms;let S=0;const P=16;for(let b=0,C=v.length;b<C;b++){const F=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,y=F.length;x<y;x++){const z=F[x],B=Array.isArray(z.value)?z.value:[z.value];for(let N=0,H=B.length;N<H;N++){const U=B[N],X=_(U),W=S%P,R=W%X.boundary,ae=W+R;S+=R,ae!==0&&P-ae<X.storage&&(S+=P-ae),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=X.storage}}}const w=S%P;return w>0&&(S+=P-w),E.__size=S,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const S=s.indexOf(v.__bindingPointIndex);s.splice(S,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete a[v.id]}function f(){for(const E in n)r.deleteBuffer(n[E]);s=[],n={},a={}}return{bind:l,update:c,dispose:f}}class nx{constructor(e={}){const{canvas:t=$p(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=s;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let S=!1,P=0,w=0,b=null,C=-1,F=null;const x=new Ut,y=new Ut;let z=null;const B=new st(0);let N=0,H=t.width,U=t.height,X=1,W=null,R=null;const ae=new Ut(0,0,H,U),ve=new Ut(0,0,H,U);let Ae=!1;const Ce=new zd;let Y=!1,K=!1;const ie=new Nt,se=new Nt,xe=new j,_e=new Ut,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ye(){return b===null?X:1}let L=i;function nt(T,I){return t.getContext(T,I)}try{const T={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const I="webgl2";if(L=nt(I,T),L===null)throw nt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ie,V,Te,Ve,be,A,M,k,Z,Q,J,ue,oe,pe,Pe,te,le,Fe,De,Me,Xe,Be,rt,D;function me(){Ie=new cv(L),Ie.init(),Be=new Y0(L,Ie),V=new iv(L,Ie,e,Be),Te=new $0(L),V.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),Ve=new dv(L),be=new P0,A=new q0(L,Ie,Te,be,V,Be,Ve),M=new av(v),k=new lv(v),Z=new xm(L),rt=new tv(L,Z),Q=new uv(L,Z,Ve,rt),J=new pv(L,Q,Z,Ve),De=new fv(L,V,A),te=new nv(be),ue=new C0(v,M,k,Ie,V,rt,te),oe=new rx(v,be),pe=new D0,Pe=new B0(Ie),Fe=new ev(v,M,k,Te,J,u,l),le=new G0(v,J,V),D=new ix(L,Ve,V,Te),Me=new rv(L,Ie,Ve),Xe=new hv(L,Ie,Ve),Ve.programs=ue.programs,v.capabilities=V,v.extensions=Ie,v.properties=be,v.renderLists=pe,v.shadowMap=le,v.state=Te,v.info=Ve}me();const q=new ex(v,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(H,U,!1))},this.getSize=function(T){return T.set(H,U)},this.setSize=function(T,I,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,U=I,t.width=Math.floor(T*X),t.height=Math.floor(I*X),G===!0&&(t.style.width=T+"px",t.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(H*X,U*X).floor()},this.setDrawingBufferSize=function(T,I,G){H=T,U=I,X=G,t.width=Math.floor(T*G),t.height=Math.floor(I*G),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,I,G,$){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,I,G,$),Te.viewport(x.copy(ae).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(ve)},this.setScissor=function(T,I,G,$){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,I,G,$),Te.scissor(y.copy(ve).multiplyScalar(X).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){Te.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,I=!0,G=!0){let $=0;if(T){let O=!1;if(b!==null){const ne=b.texture.format;O=ne===1033||ne===1031||ne===1029}if(O){const ne=b.texture.type,ce=ne===1009||ne===1014||ne===1012||ne===1020||ne===1017||ne===1018,fe=Fe.getClearColor(),Ee=Fe.getClearAlpha(),ze=fe.r,ke=fe.g,Oe=fe.b;ce?(p[0]=ze,p[1]=ke,p[2]=Oe,p[3]=Ee,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=ze,g[1]=ke,g[2]=Oe,g[3]=Ee,L.clearBufferiv(L.COLOR,0,g))}else $|=L.COLOR_BUFFER_BIT}I&&($|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",de,!1),pe.dispose(),Pe.dispose(),be.dispose(),M.dispose(),k.dispose(),J.dispose(),rt.dispose(),D.dispose(),ue.dispose(),q.dispose(),q.removeEventListener("sessionstart",Se),q.removeEventListener("sessionend",$e),Ue.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Ve.autoReset,I=le.enabled,G=le.autoUpdate,$=le.needsUpdate,O=le.type;me(),Ve.autoReset=T,le.enabled=I,le.autoUpdate=G,le.needsUpdate=$,le.type=O}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const I=T.target;I.removeEventListener("dispose",it),ot(I)}function ot(T){Ot(T),be.remove(T)}function Ot(T){const I=be.get(T).programs;I!==void 0&&(I.forEach(function(G){ue.releaseProgram(G)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,G,$,O,ne){I===null&&(I=Re);const ce=O.isMesh&&O.matrixWorld.determinant()<0,fe=br(T,I,G,$,O);Te.setMaterial($,ce);let Ee=G.index,ze=1;if($.wireframe===!0){if(Ee=Q.getWireframeAttribute(G),Ee===void 0)return;ze=2}const ke=G.drawRange,Oe=G.attributes.position;let Ke=ke.start*ze,ht=(ke.start+ke.count)*ze;ne!==null&&(Ke=Math.max(Ke,ne.start*ze),ht=Math.min(ht,(ne.start+ne.count)*ze)),Ee!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,Ee.count)):Oe!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Oe.count));const yt=ht-Ke;if(yt<0||yt===1/0)return;rt.setup(O,$,fe,G,Ee);let ft,Tt=Me;if(Ee!==null&&(ft=Z.get(Ee),Tt=Xe,Tt.setIndex(ft)),O.isMesh)$.wireframe===!0?(Te.setLineWidth($.wireframeLinewidth*ye()),Tt.setMode(L.LINES)):Tt.setMode(L.TRIANGLES);else if(O.isLine){let Ne=$.linewidth;Ne===void 0&&(Ne=1),Te.setLineWidth(Ne*ye()),O.isLineSegments?Tt.setMode(L.LINES):O.isLineLoop?Tt.setMode(L.LINE_LOOP):Tt.setMode(L.LINE_STRIP)}else O.isPoints?Tt.setMode(L.POINTS):O.isSprite&&Tt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,ar=O._multiDrawCounts,Ji=O._multiDrawCount,Yr=Ee?Z.get(Ee).bytesPerElement:1,Dn=be.get($).currentProgram.getUniforms();for(let wr=0;wr<Ji;wr++)Dn.setValue(L,"_gl_DrawID",wr),Tt.render(Ne[wr]/Yr,ar[wr])}else if(O.isInstancedMesh)Tt.renderInstances(Ke,yt,O.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ar=Math.min(G.instanceCount,Ne);Tt.renderInstances(Ke,yt,ar)}else Tt.render(Ke,yt)};function re(T,I,G){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,pt(T,I,G),T.side=0,T.needsUpdate=!0,pt(T,I,G),T.side=2):pt(T,I,G)}this.compile=function(T,I,G=null){G===null&&(G=T),m=Pe.get(G),m.init(I),E.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const $=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let ce=0;ce<ne.length;ce++){const fe=ne[ce];re(fe,G,O),$.add(fe)}else re(ne,G,O),$.add(ne)}),E.pop(),m=null,$},this.compileAsync=function(T,I,G=null){const $=this.compile(T,I,G);return new Promise(O=>{function ne(){if($.forEach(function(ce){be.get(ce).currentProgram.isReady()&&$.delete(ce)}),$.size===0){O(T);return}setTimeout(ne,10)}Ie.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ge=null;function at(T){Ge&&Ge(T)}function Se(){Ue.stop()}function $e(){Ue.start()}const Ue=new kd;Ue.setAnimationLoop(at),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(T){Ge=T,q.setAnimationLoop(T),T===null?Ue.stop():Ue.start()},q.addEventListener("sessionstart",Se),q.addEventListener("sessionend",$e),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(I),I=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,b),m=Pe.get(T,E.length),m.init(I),E.push(m),se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ce.setFromProjectionMatrix(se),K=this.localClippingEnabled,Y=te.init(this.clippingPlanes,K),_=pe.get(T,f.length),_.init(),f.push(_),q.enabled===!0&&q.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&We(ne,I,-1/0,v.sortObjects)}We(T,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,R),He=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,He&&Fe.addToRenderList(_,T),this.info.render.frame++,Y===!0&&te.beginShadows();const G=m.state.shadowsArray;le.render(G,T,I),Y===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,O=_.transmissive;if(m.setupLights(),I.isArrayCamera){const ne=I.cameras;if(O.length>0)for(let ce=0,fe=ne.length;ce<fe;ce++){const Ee=ne[ce];Je($,O,T,Ee)}He&&Fe.render(T);for(let ce=0,fe=ne.length;ce<fe;ce++){const Ee=ne[ce];Pt(_,T,Ee,Ee.viewport)}}else O.length>0&&Je($,O,T,I),He&&Fe.render(T),Pt(_,T,I);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,I),rt.resetDefaultState(),C=-1,F=null,E.pop(),E.length>0?(m=E[E.length-1],Y===!0&&te.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function We(T,I,G,$){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ce.intersectsSprite(T)){$&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const ne=J.update(T),ce=T.material;ce.visible&&_.push(T,ne,ce,G,_e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ce.intersectsObject(T))){const ne=J.update(T),ce=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),_e.copy(ne.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(ce)){const fe=ne.groups;for(let Ee=0,ze=fe.length;Ee<ze;Ee++){const ke=fe[Ee],Oe=ce[ke.materialIndex];Oe&&Oe.visible&&_.push(T,ne,Oe,G,_e.z,ke)}}else ce.visible&&_.push(T,ne,ce,G,_e.z,null)}}const O=T.children;for(let ne=0,ce=O.length;ne<ce;ne++)We(O[ne],I,G,$)}function Pt(T,I,G,$){const O=T.opaque,ne=T.transmissive,ce=T.transparent;m.setupLightsView(G),Y===!0&&te.setGlobalState(v.clippingPlanes,G),$&&Te.viewport(x.copy($)),O.length>0&&xt(O,I,G),ne.length>0&&xt(ne,I,G),ce.length>0&&xt(ce,I,G),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Je(T,I,G,$){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Pn(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const O=m.state.transmissionRenderTarget[$.id],ne=$.viewport||x;O.setSize(ne.z,ne.w);const ce=v.getRenderTarget();v.setRenderTarget(O),v.getClearColor(B),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),He&&Fe.render(G);const fe=v.toneMapping;v.toneMapping=0;const Ee=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),Y===!0&&te.setGlobalState(v.clippingPlanes,$),xt(T,G,$),A.updateMultisampleRenderTarget(O),A.updateRenderTargetMipmap(O),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let ke=0,Oe=I.length;ke<Oe;ke++){const Ke=I[ke],ht=Ke.object,yt=Ke.geometry,ft=Ke.material,Tt=Ke.group;if(ft.side===2&&ht.layers.test($.layers)){const Ne=ft.side;ft.side=1,ft.needsUpdate=!0,kt(ht,G,$,yt,ft,Tt),ft.side=Ne,ft.needsUpdate=!0,ze=!0}}ze===!0&&(A.updateMultisampleRenderTarget(O),A.updateRenderTargetMipmap(O))}v.setRenderTarget(ce),v.setClearColor(B,N),Ee!==void 0&&($.viewport=Ee),v.toneMapping=fe}function xt(T,I,G){const $=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ne=T.length;O<ne;O++){const ce=T[O],fe=ce.object,Ee=ce.geometry,ze=$===null?ce.material:$,ke=ce.group;fe.layers.test(G.layers)&&kt(fe,I,G,Ee,ze,ke)}}function kt(T,I,G,$,O,ne){T.onBeforeRender(v,I,G,$,O,ne),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,I,G,$,T,ne),O.transparent===!0&&O.side===2&&O.forceSinglePass===!1?(O.side=1,O.needsUpdate=!0,v.renderBufferDirect(G,I,$,O,T,ne),O.side=0,O.needsUpdate=!0,v.renderBufferDirect(G,I,$,O,T,ne),O.side=2):v.renderBufferDirect(G,I,$,O,T,ne),T.onAfterRender(v,I,G,$,O,ne)}function pt(T,I,G){I.isScene!==!0&&(I=Re);const $=be.get(T),O=m.state.lights,ne=m.state.shadowsArray,ce=O.state.version,fe=ue.getParameters(T,O.state,ne,I,G),Ee=ue.getProgramCacheKey(fe);let ze=$.programs;$.environment=T.isMeshStandardMaterial?I.environment:null,$.fog=I.fog,$.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",it),ze=new Map,$.programs=ze);let ke=ze.get(Ee);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===ce)return lt(T,fe),ke}else fe.uniforms=ue.getUniforms(T),T.onBeforeCompile(fe,v),ke=ue.acquireProgram(fe,Ee),ze.set(Ee,ke),$.uniforms=fe.uniforms;const Oe=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=te.uniform),lt(T,fe),$.needsLights=nr(T),$.lightsStateVersion=ce,$.needsLights&&(Oe.ambientLightColor.value=O.state.ambient,Oe.lightProbe.value=O.state.probe,Oe.directionalLights.value=O.state.directional,Oe.directionalLightShadows.value=O.state.directionalShadow,Oe.spotLights.value=O.state.spot,Oe.spotLightShadows.value=O.state.spotShadow,Oe.rectAreaLights.value=O.state.rectArea,Oe.ltc_1.value=O.state.rectAreaLTC1,Oe.ltc_2.value=O.state.rectAreaLTC2,Oe.pointLights.value=O.state.point,Oe.pointLightShadows.value=O.state.pointShadow,Oe.hemisphereLights.value=O.state.hemi,Oe.directionalShadowMap.value=O.state.directionalShadowMap,Oe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Oe.spotShadowMap.value=O.state.spotShadowMap,Oe.spotLightMatrix.value=O.state.spotLightMatrix,Oe.spotLightMap.value=O.state.spotLightMap,Oe.pointShadowMap.value=O.state.pointShadowMap,Oe.pointShadowMatrix.value=O.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function mt(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=no.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function lt(T,I){const G=be.get(T);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function br(T,I,G,$,O){I.isScene!==!0&&(I=Re),A.resetTextureUnits();const ne=I.fog,ce=$.isMeshStandardMaterial?I.environment:null,fe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Zi,Ee=($.isMeshStandardMaterial?k:M).get($.envMap||ce),ze=$.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let yt=0;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(yt=v.toneMapping);const ft=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Tt=ft!==void 0?ft.length:0,Ne=be.get($),ar=m.state.lights;if(Y===!0&&(K===!0||T!==F)){const kr=T===F&&$.id===C;te.setState($,T,kr)}let Ji=!1;$.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ar.state.version||Ne.outputColorSpace!==fe||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==Ee||$.fog===!0&&Ne.fog!==ne||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==te.numPlanes||Ne.numIntersection!==te.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==ke||Ne.morphTargets!==Oe||Ne.morphNormals!==Ke||Ne.morphColors!==ht||Ne.toneMapping!==yt||Ne.morphTargetsCount!==Tt)&&(Ji=!0):(Ji=!0,Ne.__version=$.version);let Yr=Ne.currentProgram;Ji===!0&&(Yr=pt($,I,O));let Dn=!1,wr=!1,Po=!1;const Lt=Yr.getUniforms(),wi=Ne.uniforms;if(Te.useProgram(Yr.program)&&(Dn=!0,wr=!0,Po=!0),$.id!==C&&(C=$.id,wr=!0),Dn||F!==T){V.reverseDepthBuffer?(ie.copy(T.projectionMatrix),qp(ie),Yp(ie),Lt.setValue(L,"projectionMatrix",ie)):Lt.setValue(L,"projectionMatrix",T.projectionMatrix),Lt.setValue(L,"viewMatrix",T.matrixWorldInverse);const kr=Lt.map.cameraPosition;kr!==void 0&&kr.setValue(L,xe.setFromMatrixPosition(T.matrixWorld)),V.logarithmicDepthBuffer&&Lt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Lt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,wr=!0,Po=!0)}if(O.isSkinnedMesh){Lt.setOptional(L,O,"bindMatrix"),Lt.setOptional(L,O,"bindMatrixInverse");const kr=O.skeleton;kr&&(kr.boneTexture===null&&kr.computeBoneTexture(),Lt.setValue(L,"boneTexture",kr.boneTexture,A))}O.isBatchedMesh&&(Lt.setOptional(L,O,"batchingTexture"),Lt.setValue(L,"batchingTexture",O._matricesTexture,A),Lt.setOptional(L,O,"batchingIdTexture"),Lt.setValue(L,"batchingIdTexture",O._indirectTexture,A),Lt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Lt.setValue(L,"batchingColorTexture",O._colorsTexture,A));const Lo=G.morphAttributes;if((Lo.position!==void 0||Lo.normal!==void 0||Lo.color!==void 0)&&De.update(O,G,Yr),(wr||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,Lt.setValue(L,"receiveShadow",O.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(wi.envMap.value=Ee,wi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&I.environment!==null&&(wi.envMapIntensity.value=I.environmentIntensity),wr&&(Lt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&Mt(wi,Po),ne&&$.fog===!0&&oe.refreshFogUniforms(wi,ne),oe.refreshMaterialUniforms(wi,$,X,U,m.state.transmissionRenderTarget[T.id]),no.upload(L,mt(Ne),wi,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(no.upload(L,mt(Ne),wi,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Lt.setValue(L,"center",O.center),Lt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Lt.setValue(L,"normalMatrix",O.normalMatrix),Lt.setValue(L,"modelMatrix",O.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const kr=$.uniformsGroups;for(let Do=0,qd=kr.length;Do<qd;Do++){const bc=kr[Do];D.update(bc,Yr),D.bind(bc,Yr)}}return Yr}function Mt(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function nr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,I,G){be.get(T.texture).__webglTexture=I,be.get(T.depthTexture).__webglTexture=G;const $=be.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=G===void 0,$.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const G=be.get(T);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,G=0){b=T,P=I,w=G;let $=!0,O=null,ne=!1,ce=!1;if(T){const fe=be.get(T);if(fe.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(fe.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(fe.__hasExternalTextures)A.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(fe.__boundDepthTexture!==ke){if(ke!==null&&be.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ce=!0);const ze=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[I])?O=ze[I][G]:O=ze[I],ne=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?O=be.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[G]:O=ze,x.copy(T.viewport),y.copy(T.scissor),z=T.scissorTest}else x.copy(ae).multiplyScalar(X).floor(),y.copy(ve).multiplyScalar(X).floor(),z=Ae;if(Te.bindFramebuffer(L.FRAMEBUFFER,O)&&$&&Te.drawBuffers(T,O),Te.viewport(x),Te.scissor(y),Te.setScissorTest(z),ne){const fe=be.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,G)}else if(ce){const fe=be.get(T.texture),Ee=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,fe.__webglTexture,G||0,Ee)}C=-1},this.readRenderTargetPixels=function(T,I,G,$,O,ne,ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){Te.bindFramebuffer(L.FRAMEBUFFER,fe);try{const Ee=T.texture,ze=Ee.format,ke=Ee.type;if(!V.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-$&&G>=0&&G<=T.height-O&&L.readPixels(I,G,$,O,Be.convert(ze),Be.convert(ke),ne)}finally{const Ee=b!==null?be.get(b).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,I,G,$,O,ne,ce){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){const Ee=T.texture,ze=Ee.format,ke=Ee.type;if(!V.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-$&&G>=0&&G<=T.height-O){Te.bindFramebuffer(L.FRAMEBUFFER,fe);const Oe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Oe),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(I,G,$,O,Be.convert(ze),Be.convert(ke),0);const Ke=b!==null?be.get(b).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Ke);const ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xp(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Oe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(Oe),L.deleteSync(ht),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,G=0){T.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const $=Math.pow(2,-G),O=Math.floor(T.image.width*$),ne=Math.floor(T.image.height*$),ce=I!==null?I.x:0,fe=I!==null?I.y:0;A.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,ce,fe,O,ne),Te.unbindTexture()},this.copyTextureToTexture=function(T,I,G=null,$=null,O=0){T.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],I=arguments[2],O=arguments[3]||0,G=null);let ne,ce,fe,Ee,ze,ke;G!==null?(ne=G.max.x-G.min.x,ce=G.max.y-G.min.y,fe=G.min.x,Ee=G.min.y):(ne=T.image.width,ce=T.image.height,fe=0,Ee=0),$!==null?(ze=$.x,ke=$.y):(ze=0,ke=0);const Oe=Be.convert(I.format),Ke=Be.convert(I.type);A.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const ht=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ft=L.getParameter(L.UNPACK_SKIP_PIXELS),Tt=L.getParameter(L.UNPACK_SKIP_ROWS),Ne=L.getParameter(L.UNPACK_SKIP_IMAGES),ar=T.isCompressedTexture?T.mipmaps[O]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ar.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ar.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,ze,ke,ne,ce,Oe,Ke,ar.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,ze,ke,ar.width,ar.height,Oe,ar.data):L.texSubImage2D(L.TEXTURE_2D,O,ze,ke,ne,ce,Oe,Ke,ar),L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ft),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),O===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,I,G=null,$=null,O=0){T.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,$=arguments[1]||null,T=arguments[2],I=arguments[3],O=arguments[4]||0);let ne,ce,fe,Ee,ze,ke,Oe,Ke,ht;const yt=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(ne=G.max.x-G.min.x,ce=G.max.y-G.min.y,fe=G.max.z-G.min.z,Ee=G.min.x,ze=G.min.y,ke=G.min.z):(ne=yt.width,ce=yt.height,fe=yt.depth,Ee=0,ze=0,ke=0),$!==null?(Oe=$.x,Ke=$.y,ht=$.z):(Oe=0,Ke=0,ht=0);const ft=Be.convert(I.format),Tt=Be.convert(I.type);let Ne;if(I.isData3DTexture)A.setTexture3D(I,0),Ne=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),Ne=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const ar=L.getParameter(L.UNPACK_ROW_LENGTH),Ji=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yr=L.getParameter(L.UNPACK_SKIP_PIXELS),Dn=L.getParameter(L.UNPACK_SKIP_ROWS),wr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ne,O,Oe,Ke,ht,ne,ce,fe,ft,Tt,yt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ne,O,Oe,Ke,ht,ne,ce,fe,ft,yt.data):L.texSubImage3D(Ne,O,Oe,Ke,ht,ne,ce,fe,ft,Tt,yt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ar),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ji),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wr),O===0&&I.generateMipmaps&&L.generateMipmap(Ne),Te.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){P=0,w=0,b=null,Te.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ec?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===bo?"display-p3":"srgb"}}class ax extends Er{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sx extends ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qu=new Nt,jl=new Pd,Ws=new wo,$s=new j;class ox extends Er{constructor(e=new bi,t=new sx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(n),Ws.radius+=a,e.ray.intersectsSphere(Ws)===!1)return;Qu.copy(n).invert(),jl.copy(e.ray).applyMatrix4(Qu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let p=d,g=u;p<g;p++){const _=c.getX(p);$s.fromBufferAttribute(h,_),eh($s,_,l,n,e,t,this)}}else{const d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let p=d,g=u;p<g;p++)$s.fromBufferAttribute(h,p),eh($s,p,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function eh(r,e,t,i,n,a,s){const o=jl.distanceSqToPoint(r);if(o<t){const l=new j;jl.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const lx=[{lines:["STEPHEN","FEHON"],weight:800,tracking:"0em"},{lines:["BUILD"],weight:800,tracking:"0.02em"},{lines:["WRITE"],weight:800,tracking:"0.02em"},null,{lines:["SAY HELLO"],weight:800,tracking:"0em"}];function cx(r,e,t){const i=document.createElement("canvas"),n=i.getContext("2d",{willReadFrequently:!0});n.font=`800 ${Math.floor(420*.72)}px "Bricolage Grotesque"`,"letterSpacing"in n&&(n.letterSpacing=t);let a=0;for(const v of r)a=Math.max(a,n.measureText(v).width);i.width=Math.ceil(a+80),i.height=420*r.length+40;const s=i.getContext("2d");s.font=`800 ${Math.floor(420*.72)}px "Bricolage Grotesque"`,"letterSpacing"in s&&(s.letterSpacing=t),s.textBaseline="middle",s.fillStyle="#000";const o=i.height/r.length;r.forEach((v,S)=>s.fillText(v,40,o*(S+.5)));const l=s.getImageData(0,0,i.width,i.height).data,c=[],h=3;for(let v=0;v<i.height;v+=h)for(let S=0;S<i.width;S+=h)l[(v*i.width+S)*4+3]>110&&c.push(S,v);let d=1e9,u=-1e9,p=1e9,g=-1e9;for(let v=0;v<c.length;v+=2)d=Math.min(d,c[v]),u=Math.max(u,c[v]),p=Math.min(p,c[v+1]),g=Math.max(g,c[v+1]);const _=u-d,m=g-p,f=1/Math.max(_,m),E=new Float32Array(c.length);for(let v=0;v<c.length;v+=2)E[v]=((c[v]-d)/_-.5)*(_*f)*2,E[v+1]=-(((c[v+1]-p)/m-.5)*(m*f)*2);return{pts:E,count:c.length/2,aspect:_/m}}function ux(r){const e=new Float32Array(r*2),t=2,i=3,n=.42,a=.16;for(let s=0;s<r;s++){const o=s/r*Math.PI*2*6,l=(n+a*Math.cos(i*o))*Math.cos(t*o),c=(n+a*Math.cos(i*o))*Math.sin(t*o),h=.05;e[s*2]=l+(Math.random()-.5)*h,e[s*2+1]=c+(Math.random()-.5)*h}return{pts:e,count:r,aspect:1}}async function hx(r){let e;try{e=new nx({canvas:r,alpha:!0,antialias:!1,powerPreference:"high-performance"})}catch{return null}if(!e)return null;e.setClearColor(0,0);try{await document.fonts.load('800 300px "Bricolage Grotesque"'),await document.fonts.ready}catch{}const t=window.innerWidth<768?7e3:16e3,i=new ax,n=new Hd(-1,1,1,-1,-10,10),a=[];for(const H of lx){if(H===null){a.push(ux(t));continue}const U=cx(H.lines,800,H.tracking);a.push(U)}const s=a.map(H=>{const U=new Float32Array(t*2);for(let X=0;X<t;X++){const W=X*7919%H.count;U[X*2]=H.pts[W*2],U[X*2+1]=H.pts[W*2+1]}return U}),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t),h=new Float32Array(t),d=new Float32Array(t);for(let H=0;H<t;H++)o[H*3]=(Math.random()-.5)*4,o[H*3+1]=(Math.random()-.5)*3,o[H*3+2]=0,c[H]=Math.random(),h[H]=.6+Math.random()*.9;const u=new Float32Array(t*2);for(let H=0;H<t*2;H++)u[H]=(Math.random()-.5)*4;const p=new bi;p.setAttribute("position",new _r(o,3)),p.setAttribute("aVel",new _r(d,1)),p.setAttribute("aSeed",new _r(c,1)),p.setAttribute("aSize",new _r(h,1));const g={uScale:{value:1},uInk:{value:new st("#16151a")},uUltra:{value:new st("#2b3fd6")}},_=new Ti({uniforms:g,transparent:!0,depthWrite:!1,vertexShader:`
      attribute float aVel; attribute float aSeed; attribute float aSize;
      uniform float uScale; varying float vVel; varying float vSeed;
      void main() {
        vVel = aVel; vSeed = aSeed;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uInk; uniform vec3 uUltra;
      varying float vVel; varying float vSeed;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.28, length(d));
        if (m < 0.01) discard;
        vec3 col = mix(uInk, uUltra, clamp(vVel * 2.2, 0.0, 1.0) * 0.9);
        float a = m * (0.55 + 0.45 * fract(vSeed * 7.13));
        gl_FragColor = vec4(col, a);
      }`}),m=new ox(p,_);m.frustumCulled=!1,i.add(m);const f={morph:0,assemble:0,hold:0,holdV:0,turb:0,running:!0},E={x:9999,y:9999,tx:9999,ty:9999};let v=1,S=1;function P(){const H=r.clientWidth||window.innerWidth,U=r.clientHeight||window.innerHeight;v=H,S=U,e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.setSize(H,U,!1),n.left=-H/2,n.right=H/2,n.top=U/2,n.bottom=-U/2,n.updateProjectionMatrix(),g.uScale.value=U/900*e.getPixelRatio()*2.1}P();function w(H){return{x:H.clientX-v/2,y:-(H.clientY-S/2)}}function b(H){const U=w(H);E.tx=U.x,E.ty=U.y}function C(){E.tx=9999,E.ty=9999}let F=0;function x(H){H.target.closest&&H.target.closest("a, button, input, textarea, select")||(f.holdV=1,H.target,document.body.classList.add("ink-holding"))}function y(){f.holdV>.05&&(F=1),f.holdV=0,document.body.classList.remove("ink-holding")}window.addEventListener("pointermove",b,{passive:!0}),window.addEventListener("pointerdown",x,{passive:!0}),window.addEventListener("pointerup",y,{passive:!0}),window.addEventListener("pointercancel",y,{passive:!0}),document.addEventListener("mouseleave",C);let z=0;function B(H){if(!f.running)return;z+=H,E.x+=(E.tx-E.x)*.18,E.y+=(E.ty-E.y)*.18,f.hold+=(f.holdV-f.hold)*(f.holdV>f.hold?.08:.045),F>0&&(F=Math.max(0,F-H*1.7));const U=Math.max(0,Math.min(f.morph,a.length-1)),X=Math.floor(U),W=Math.min(X+1,a.length-1),R=U-X;p.attributes.position.array;const ae=p.attributes.aVel.array,ve=F>.1?.85:.8,Ae=f.assemble,Ce=f.hold,Y=z*.55;for(let K=0;K<t;K++){const ie=K*3,se=ie+1,xe=ie+2,_e=c[K];let Re=(R-_e*.35)/(1-.35);Re=Re<0?0:Re>1?1:Re,Re=Re*Re*(3-2*Re);const He=Math.max(0,Math.min((Ae-_e*.4)/.6,1)),ye=He*He*(3-2*He),L=s[X],nt=s[W];let Ie=L[K*2]+(nt[K*2]-L[K*2])*Re,V=L[K*2+1]+(nt[K*2+1]-L[K*2+1])*Re;const Te=Math.min(v*.46,S*.42);Ie*=Te,V*=Te*.86,Ie=u[K*2]*Te*1.6+(Ie-u[K*2]*Te*1.6)*ye,V=u[K*2+1]*Te*1.2+(V-u[K*2+1]*Te*1.2)*ye;let Ve=o[ie],be=o[se],A=o[xe],M=l[ie],k=l[se],Z=l[xe];M+=(Ie-Ve)*.085,k+=(V-be)*.085,Z+=(0-A)*.085,M+=Math.sin(Y+_e*40+Ve*.004)*.012,k+=Math.cos(Y*.8+_e*61+be*.004)*.012;const Q=Ve-E.x,J=be-E.y,ue=Q*Q+J*J;if(ue<32400){const Pe=Math.sqrt(ue)||1,te=(180-Pe)/180;M+=Q/Pe*te*2.4,k+=J/Pe*te*2.4}if(f.turb>.01){const Pe=f.turb;k-=Pe*(.4+_e*1.1)*1.5,M+=Math.sin(z*7+_e*47+be*.01)*Pe*.8,k+=Math.cos(z*5.5+_e*31+Ve*.01)*Pe*.4}if(Ce>.01){const Pe=Math.sqrt(Ve*Ve+be*be)||1,te=Ce*(.35+_e*.65);M+=Ve/Pe*te*2.6+Math.sin(z*3+_e*90)*te,k+=be/Pe*te*2.6+Math.cos(z*2.4+_e*70)*te,M+=-J*te*.0045,k+=Q*te*.0045,Z+=(3*te-A)*.06}if(F>.01){const Pe=_e*.5,te=Math.max(0,Math.min(1,(1-Pe-F)*6));if(te>0){const le=Ve-Ie,Fe=be-V,De=te*F*(.7+.5*_e)*.008;M+=-Fe*De,k+=le*De}}M*=ve,k*=ve,Z*=ve;const oe=Math.sqrt(M*M+k*k+Z*Z);if(oe>90){const Pe=90/oe;M*=Pe,k*=Pe,Z*=Pe}Ve+=M,be+=k,o[ie]=Ve,o[se]=be,o[xe]=A+Z*.1,(!Number.isFinite(Ve)||!Number.isFinite(be)||!Number.isFinite(o[xe]))&&(o[ie]=Ie,o[se]=V,o[xe]=0,l[ie]=0,l[se]=0,l[xe]=0),l[ie]=M,l[se]=k,l[xe]=Z;const pe=Math.sqrt(M*M+k*k);ae[K]=Math.min(1,pe*.14)}p.attributes.position.needsUpdate=!0,p.attributes.aVel.needsUpdate=!0,e.render(i,n)}document.addEventListener("visibilitychange",()=>{f.running=!document.hidden});function N(){const H=Math.max(0,Math.min(f.morph,a.length-1)),U=Math.floor(H),X=Math.min(U+1,a.length-1),W=H-U,R=Math.min(v*.46,S*.42);let ae=0,ve=0;for(let Ae=0;Ae<t;Ae++){const Ce=s[U],Y=s[X],K=(Ce[Ae*2]+(Y[Ae*2]-Ce[Ae*2])*W)*R,ie=(Ce[Ae*2+1]+(Y[Ae*2+1]-Ce[Ae*2+1])*W)*R*.86,se=o[Ae*3]-K,xe=o[Ae*3+1]-ie;ae+=se*se+xe*xe;const _e=o[Ae*3+2];(_e>9.5||_e<-9.5)&&ve++}return{morph:+f.morph.toFixed(3),assemble:+f.assemble.toFixed(3),hold:+f.hold.toFixed(3),rms:Math.round(Math.sqrt(ae/t)),zout:ve}}return typeof window<"u"&&(window.__inkDebug=N),{state:f,resize:P,frame:B,reveal(){f.assemble=1e-4},dispose(){window.removeEventListener("pointermove",b),window.removeEventListener("pointerdown",x),window.removeEventListener("pointerup",y),e.dispose()}}}Et.registerPlugin(qe);const $i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Co=window.matchMedia("(hover: none), (pointer: coarse)").matches;$i&&document.body.classList.add("reduced");Co&&document.body.classList.add("touch");let vn=null,Hi=null;$i?rh():hx(document.getElementById("ink")).then(r=>{if(!r)document.body.classList.add("no-gl");else{vn=r,Hi=r.state;const e=[...document.querySelectorAll("[data-chapter]")].map(i=>({el:i,to:parseFloat(i.dataset.chapter)})),t=()=>{if(!Hi)return;const i=window.innerHeight;let n=0;for(const a of e){const s=a.el.getBoundingClientRect().top,o=Math.min(1,Math.max(0,(i*.95-s)/(i*.7)));o>0&&(n=a.to-1+o)}Hi.morph=n};qe.create({trigger:document.body,start:"top top",end:"bottom bottom",onUpdate:t,onRefresh:t}),t()}rh()});let mn=null;if(!$i){mn=new Gp({lerp:.1,wheelMultiplier:1}),mn.on("scroll",qe.update),Et.ticker.add(e=>mn.raf(e*1e3)),Et.ticker.lagSmoothing(0);let r=0;Et.ticker.add(()=>{if(vn&&Hi&&Hi.running){if(mn&&Hi.turb!==void 0){const e=Math.min(1.2,Math.abs(mn.velocity||0)/70);r+=(e-r)*.12,Hi.turb=r}vn.frame(Et.ticker.deltaRatio(60)/60)}}),window.addEventListener("resize",()=>vn&&vn.resize())}document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",e=>{const t=r.getAttribute("href"),i=document.querySelector(t);i&&(e.preventDefault(),mn?mn.scrollTo(i,{offset:0,duration:1.4}):i.scrollIntoView({behavior:"smooth"}))})});function dx(r){const e=r.textContent;r.setAttribute("aria-label",e),r.textContent="",e.split(/\s+/).forEach((t,i,n)=>{const a=document.createElement("span");a.className="w";const s=document.createElement("span");s.className="wi",s.textContent=t,a.appendChild(s),r.appendChild(a),i<n.length-1&&r.appendChild(document.createTextNode(" "))})}document.querySelectorAll(".reveal").forEach(dx);document.querySelectorAll(".chapter-lede, .about-body p").forEach(r=>{r.classList.contains("reveal")&&Et.fromTo(r.querySelectorAll(".wi"),{yPercent:115},{yPercent:0,stagger:.012,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%"}})});document.querySelectorAll(".chapter-title, .chapter-no").forEach(r=>{Et.fromTo(r,{y:60,opacity:0},{y:0,opacity:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 88%"}})});const Xs=document.querySelector("[data-gallery]");if(Xs&&!$i){const r=Xs.querySelector(".gallery-track"),e=()=>r.scrollWidth-window.innerWidth;Et.to(r,{x:()=>-e(),ease:"none",scrollTrigger:{trigger:Xs,start:"top top",end:()=>"+="+e(),pin:!0,scrub:.6,invalidateOnRefresh:!0,anticipatePin:1}}),Et.utils.toArray(".card").forEach((t,i)=>{Et.fromTo(t.querySelector(".card-media"),{scale:.94},{scale:1,ease:"none",scrollTrigger:{trigger:Xs,start:"top top",end:()=>"+="+e(),scrub:.6}})})}const qs=document.querySelector("[data-essays]"),ln=document.querySelector(".essay-preview");if(qs&&ln&&!Co){const r=ln.querySelector("img"),e=["/img/cover-notes.png","/img/cover-sites.png","/img/cover-game.png"],t=Et.quickTo(ln,"x",{duration:.45,ease:"power3"}),i=Et.quickTo(ln,"y",{duration:.45,ease:"power3"});let n=!1;qs.addEventListener("pointermove",a=>{t(a.clientX+24),i(a.clientY-120)}),qs.querySelectorAll(".essay").forEach((a,s)=>{a.addEventListener("mouseenter",()=>{r.src=e[s%e.length],n||(Et.to(ln,{opacity:1,scale:1,duration:.4,ease:"power3.out"}),n=!0)})}),qs.addEventListener("mouseleave",()=>{Et.to(ln,{opacity:0,scale:.96,duration:.3,ease:"power2.in"}),n=!1}),Et.set(ln,{scale:.96})}if(!Co){const r=document.createElement("div");r.className="cursor",r.innerHTML='<span class="cursor-dot"></span><span class="cursor-ring"></span>',document.body.appendChild(r);const e=r.querySelector(".cursor-dot"),t=r.querySelector(".cursor-ring"),i=Et.quickTo(e,"x",{duration:.12,ease:"power2"}),n=Et.quickTo(e,"y",{duration:.12,ease:"power2"}),a=Et.quickTo(t,"x",{duration:.4,ease:"power3"}),s=Et.quickTo(t,"y",{duration:.4,ease:"power3"});window.addEventListener("pointermove",o=>{i(o.clientX),n(o.clientY),a(o.clientX),s(o.clientY)},{passive:!0}),document.querySelectorAll("a, button").forEach(o=>{o.addEventListener("mouseenter",()=>r.classList.add("is-link")),o.addEventListener("mouseleave",()=>r.classList.remove("is-link"))}),window.addEventListener("pointerdown",()=>r.classList.add("is-hold")),window.addEventListener("pointerup",()=>r.classList.remove("is-hold"))}!Co&&!$i&&document.querySelectorAll("[data-magnetic]").forEach(r=>{r.addEventListener("mousemove",e=>{const t=r.getBoundingClientRect(),i=e.clientX-t.left-t.width/2,n=e.clientY-t.top-t.height/2;Et.to(r,{x:i*.35,y:n*.35,duration:.4,ease:"power3.out"})}),r.addEventListener("mouseleave",()=>{Et.to(r,{x:0,y:0,duration:.7,ease:"elastic.out(1, 0.4)"})})});const fx=document.querySelector(".progress span");qe.create({start:0,end:"max",onUpdate:r=>Et.set(fx,{scaleX:r.progress})});let th=!1;function rh(){if(th)return;th=!0;const r=document.querySelector(".loader"),e=document.querySelector(".loader-count"),t={n:0},i=Et.timeline();i.to(t,{n:100,duration:$i?.2:1.3,ease:"power2.inOut",onUpdate:()=>{e.textContent=String(Math.round(t.n)).padStart(3,"0")}}),$i||i.to(r.querySelector(".loader-inner"),{y:-40,opacity:0,duration:.5,ease:"power2.in"},"+=0.15"),i.to(r,{yPercent:-100,duration:$i?.2:.9,ease:"power4.inOut"}),i.set(r,{display:"none"}),i.fromTo(".hero-sub, .hero-hint, .hero-foot",{y:30,opacity:0},{y:0,opacity:1,duration:.9,stagger:.08,ease:"power3.out"},"-=0.5"),i.call(()=>{vn&&(vn.reveal(),Et.to(Hi,{assemble:1,duration:2,ease:"power2.inOut"}))},null,.1)}qe.refresh();
