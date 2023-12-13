import{g as K,c as X,q as nt,r as st,W as at,j as d}from"./app-5bcb44db.js";import{D as G}from"./Dropdown-1231a57c.js";import{I as it}from"./InputError-774aa839.js";import{P as ut}from"./PrimaryButton-a22fcf92.js";import"./transition-1dc939f3.js";var tt={exports:{}};(function(p,Q){(function(j,M){p.exports=M()})(X,function(){var j=1e3,M=6e4,N=36e5,w="millisecond",S="second",b="minute",_="hour",c="day",g="week",l="month",E="quarter",k="year",O="date",C="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},U=function(s,r,t){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(t)+s},L={s:U,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+U(n,2,"0")+":"+U(e,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(n,l),a=t-e<0,i=r.clone().add(n+(a?-1:1),l);return+(-(n+(t-e)/(a?e-i:i-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:l,y:k,w:g,d:c,D:O,h:_,m:b,s:S,ms:w,Q:E}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},x="en",v={};v[x]=F;var I="$isDayjsObject",Y=function(s){return s instanceof V||!(!s||!s[I])},P=function s(r,t,n){var e;if(!r)return x;if(typeof r=="string"){var a=r.toLowerCase();v[a]&&(e=a),t&&(v[a]=t,e=a);var i=r.split("-");if(!e&&i.length>1)return s(i[0])}else{var o=r.name;v[o]=r,e=o}return!n&&e&&(x=e),e||!n&&x},h=function(s,r){if(Y(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new V(t)},u=L;u.l=P,u.i=Y,u.w=function(s,r){return h(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var V=function(){function s(t){this.$L=P(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[I]=!0}var r=s.prototype;return r.parse=function(t){this.$d=function(n){var e=n.date,a=n.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(A);if(i){var o=i[2]-1||0,f=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,f)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,f)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return u},r.isValid=function(){return this.$d.toString()!==C},r.isSame=function(t,n){var e=h(t);return this.startOf(n)<=e&&e<=this.endOf(n)},r.isAfter=function(t,n){return h(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<h(t)},r.$g=function(t,n,e){return u.u(t)?this[n]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var e=this,a=!!u.u(n)||n,i=u.p(t),o=function(W,y){var T=u.w(e.$u?Date.UTC(e.$y,y,W):new Date(e.$y,y,W),e);return a?T:T.endOf(c)},f=function(W,y){return u.w(e.toDate()[W].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(y)),e)},m=this.$W,$=this.$M,D=this.$D,z="set"+(this.$u?"UTC":"");switch(i){case k:return a?o(1,0):o(31,11);case l:return a?o(1,$):o(0,$+1);case g:var H=this.$locale().weekStart||0,J=(m<H?m+7:m)-H;return o(a?D-J:D+(6-J),$);case c:case O:return f(z+"Hours",0);case _:return f(z+"Minutes",1);case b:return f(z+"Seconds",2);case S:return f(z+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var e,a=u.p(t),i="set"+(this.$u?"UTC":""),o=(e={},e[c]=i+"Date",e[O]=i+"Date",e[l]=i+"Month",e[k]=i+"FullYear",e[_]=i+"Hours",e[b]=i+"Minutes",e[S]=i+"Seconds",e[w]=i+"Milliseconds",e)[a],f=a===c?this.$D+(n-this.$W):n;if(a===l||a===k){var m=this.clone().set(O,1);m.$d[o](f),m.init(),this.$d=m.set(O,Math.min(this.$D,m.daysInMonth())).$d}else o&&this.$d[o](f);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[u.p(t)]()},r.add=function(t,n){var e,a=this;t=Number(t);var i=u.p(n),o=function($){var D=h(a);return u.w(D.date(D.date()+Math.round($*t)),a)};if(i===l)return this.set(l,this.$M+t);if(i===k)return this.set(k,this.$y+t);if(i===c)return o(1);if(i===g)return o(7);var f=(e={},e[b]=M,e[_]=N,e[S]=j,e)[i]||1,m=this.$d.getTime()+t*f;return u.w(m,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||C;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),o=this.$H,f=this.$m,m=this.$M,$=e.weekdays,D=e.months,z=e.meridiem,H=function(y,T,Z,q){return y&&(y[T]||y(n,a))||Z[T].slice(0,q)},J=function(y){return u.s(o%12||12,y,"0")},W=z||function(y,T,Z){var q=y<12?"AM":"PM";return Z?q.toLowerCase():q};return a.replace(B,function(y,T){return T||function(Z){switch(Z){case"YY":return String(n.$y).slice(-2);case"YYYY":return u.s(n.$y,4,"0");case"M":return m+1;case"MM":return u.s(m+1,2,"0");case"MMM":return H(e.monthsShort,m,D,3);case"MMMM":return H(D,m);case"D":return n.$D;case"DD":return u.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return H(e.weekdaysMin,n.$W,$,2);case"ddd":return H(e.weekdaysShort,n.$W,$,3);case"dddd":return $[n.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return J(1);case"hh":return J(2);case"a":return W(o,f,!0);case"A":return W(o,f,!1);case"m":return String(f);case"mm":return u.s(f,2,"0");case"s":return String(n.$s);case"ss":return u.s(n.$s,2,"0");case"SSS":return u.s(n.$ms,3,"0");case"Z":return i}return null}(y)||i.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,e){var a,i=this,o=u.p(n),f=h(t),m=(f.utcOffset()-this.utcOffset())*M,$=this-f,D=function(){return u.m(i,f)};switch(o){case k:a=D()/12;break;case l:a=D();break;case E:a=D()/3;break;case g:a=($-m)/6048e5;break;case c:a=($-m)/864e5;break;case _:a=$/N;break;case b:a=$/M;break;case S:a=$/j;break;default:a=$}return e?a:u.a(a)},r.daysInMonth=function(){return this.endOf(l).$D},r.$locale=function(){return v[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),a=P(t,n,!0);return a&&(e.$L=a),e},r.clone=function(){return u.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),R=V.prototype;return h.prototype=R,[["$ms",w],["$s",S],["$m",b],["$H",_],["$W",c],["$M",l],["$y",k],["$D",O]].forEach(function(s){R[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),h.extend=function(s,r){return s.$i||(s(r,V,h),s.$i=!0),h},h.locale=P,h.isDayjs=Y,h.unix=function(s){return h(1e3*s)},h.en=v[x],h.Ls=v,h.p={},h})})(tt);var ot=tt.exports;const et=K(ot);var rt={exports:{}};(function(p,Q){(function(j,M){p.exports=M()})(X,function(){return function(j,M,N){j=j||{};var w=M.prototype,S={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function b(c,g,l,E){return w.fromToBase(c,g,l,E)}N.en.relativeTime=S,w.fromToBase=function(c,g,l,E,k){for(var O,C,A,B=l.$locale().relativeTime||S,F=j.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],U=F.length,L=0;L<U;L+=1){var x=F[L];x.d&&(O=E?N(c).diff(l,x.d,!0):l.diff(c,x.d,!0));var v=(j.rounding||Math.round)(Math.abs(O));if(A=O>0,v<=x.r||!x.r){v<=1&&L>0&&(x=F[L-1]);var I=B[x.l];k&&(v=k(""+v)),C=typeof I=="string"?I.replace("%d",v):I(v,g,x.l,A);break}}if(g)return C;var Y=A?B.future:B.past;return typeof Y=="function"?Y(C):Y.replace("%s",C)},w.to=function(c,g){return b(c,g,this,!0)},w.from=function(c,g){return b(c,g,this)};var _=function(c){return c.$u?N.utc():N()};w.toNow=function(c){return this.to(_(this),c)},w.fromNow=function(c){return this.from(_(this),c)}}})})(rt);var ct=rt.exports;const dt=K(ct);et.extend(dt);function gt({chirp:p}){const{auth:Q}=nt().props,[j,M]=st.useState(!1),{data:N,setData:w,patch:S,clearErrors:b,reset:_,errors:c}=at({message:p.message}),g=l=>{l.preventDefault(),S(route("chirps.update",p.id),{onSuccess:()=>M(!1)})};return d.jsxs("div",{className:"p-6 flex space-x-2",children:[d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-600 -scale-x-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-gray-800",children:p.user.name}),d.jsx("small",{className:"ml-2 text-sm text-gray-600",children:et(p.created_at).fromNow()}),p.created_at!==p.updated_at&&d.jsx("small",{className:"text-sm text-gray-600",children:" · edited"})]}),p.user.id===Q.user.id&&d.jsxs(G,{children:[d.jsx(G.Trigger,{children:d.jsx("button",{children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:d.jsx("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})})}),d.jsxs(G.Content,{children:[d.jsx("button",{className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:()=>M(!0),children:"Edit"}),d.jsx(G.Link,{as:"button",href:route("chirps.destroy",p.id),method:"delete",children:"Delete"})]})]})]}),j?d.jsxs("form",{onSubmit:g,children:[d.jsx("textarea",{value:N.message,onChange:l=>w("message",l.target.value),className:"mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),d.jsx(it,{message:c.message,className:"mt-2"}),d.jsxs("div",{className:"space-x-2",children:[d.jsx(ut,{className:"mt-4",children:"Save"}),d.jsx("button",{className:"mt-4",onClick:()=>{M(!1),_(),b()},children:"Cancel"})]})]}):d.jsx("p",{className:"mt-4 text-lg text-gray-900",children:p.message})]})]})}export{gt as default};
