(this["webpackJsonpstyled-cra"]=this["webpackJsonpstyled-cra"]||[]).push([[0],{501:function(e,t){!function(){var e="object"===typeof window?window:"object"===typeof self?self:this,t=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder;e.URL=e.URL||e.webkitURL||function(e,t){return(t=document.createElement("a")).href=e,t};var r=e.Blob,n=URL.createObjectURL,o=URL.revokeObjectURL,a=e.Symbol&&e.Symbol.toStringTag,c=!1,i=!1,s=!!e.ArrayBuffer,u=t&&t.prototype.append&&t.prototype.getBlob;try{c=2===new Blob(["\xe4"]).size,i=2===new Blob([new Uint8Array([1,2])]).size}catch(m){}function b(e){return e.map((function(e){if(e.buffer instanceof ArrayBuffer){var t=e.buffer;if(e.byteLength!==t.byteLength){var r=new Uint8Array(e.byteLength);r.set(new Uint8Array(t,e.byteOffset,e.byteLength)),t=r.buffer}return t}return e}))}function f(e,r){r=r||{};var n=new t;return b(e).forEach((function(e){n.append(e)})),r.type?n.getBlob(r.type):n.getBlob()}function d(e,t){return new r(b(e),t||{})}e.Blob&&(f.prototype=Blob.prototype,d.prototype=Blob.prototype);var j="function"===typeof TextEncoder?TextEncoder.prototype.encode.bind(new TextEncoder):function(t){for(var r=0,n=t.length,o=e.Uint8Array||Array,a=0,c=Math.max(32,n+(n>>1)+7),i=new o(c>>3<<3);r<n;){var s=t.charCodeAt(r++);if(s>=55296&&s<=56319){if(r<n){var l=t.charCodeAt(r);56320===(64512&l)&&(++r,s=((1023&s)<<10)+(1023&l)+65536)}if(s>=55296&&s<=56319)continue}if(a+4>i.length){c+=8,c=(c*=1+r/t.length*2)>>3<<3;var u=new Uint8Array(c);u.set(i),i=u}if(0!==(4294967168&s)){if(0===(4294965248&s))i[a++]=s>>6&31|192;else if(0===(4294901760&s))i[a++]=s>>12&15|224,i[a++]=s>>6&63|128;else{if(0!==(4292870144&s))continue;i[a++]=s>>18&7|240,i[a++]=s>>12&63|128,i[a++]=s>>6&63|128}i[a++]=63&s|128}else i[a++]=s}return i.slice(0,a)},h="function"===typeof TextDecoder?TextDecoder.prototype.decode.bind(new TextDecoder):function(e){for(var t=e.length,r=[],n=0;n<t;){var o,a,c,i,s=e[n],l=null,u=s>239?4:s>223?3:s>191?2:1;if(n+u<=t)switch(u){case 1:s<128&&(l=s);break;case 2:128===(192&(o=e[n+1]))&&(i=(31&s)<<6|63&o)>127&&(l=i);break;case 3:o=e[n+1],a=e[n+2],128===(192&o)&&128===(192&a)&&(i=(15&s)<<12|(63&o)<<6|63&a)>2047&&(i<55296||i>57343)&&(l=i);break;case 4:o=e[n+1],a=e[n+2],c=e[n+3],128===(192&o)&&128===(192&a)&&128===(192&c)&&(i=(15&s)<<18|(63&o)<<12|(63&a)<<6|63&c)>65535&&i<1114112&&(l=i)}null===l?(l=65533,u=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),n+=u}var b=r.length,f="";for(n=0;n<b;)f+=String.fromCharCode.apply(String,r.slice(n,n+=4096));return f};function p(){var t=!!e.ActiveXObject||"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,r=e.XMLHttpRequest&&e.XMLHttpRequest.prototype.send;t&&r&&(XMLHttpRequest.prototype.send=function(e){e instanceof Blob?(this.setRequestHeader("Content-Type",e.type),r.call(this,e)):r.call(this,e)});try{new File([],"")}catch(m){try{var n=new Function('class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name.replace(///g, ":");this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date();this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File')();e.File=n}catch(m){n=function(e,t,r){var n=new Blob(e,r),o=r&&void 0!==r.lastModified?new Date(r.lastModified):new Date;return n.name=t.replace(/\//g,":"),n.lastModifiedDate=o,n.lastModified=+o,n.toString=function(){return"[object File]"},a&&(n[a]="File"),n};e.File=n}}}c?(p(),e.Blob=i?e.Blob:d):u?(p(),e.Blob=f):function(){function t(e){for(var t=new Array(e.byteLength),r=new Uint8Array(e),n=t.length;n--;)t[n]=r[n];return t}function r(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r=[],n=0;n<e.length;n+=3){var o=e[n],a=n+1<e.length,c=a?e[n+1]:0,i=n+2<e.length,s=i?e[n+2]:0,l=o>>2,u=(3&o)<<4|c>>4,b=(15&c)<<2|s>>6,f=63&s;i||(f=64,a||(b=64)),r.push(t[l],t[u],t[b],t[f])}return r.join("")}var a=Object.create||function(e){function t(){}return t.prototype=e,new t};if(s)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function u(r,n){n=null==n?{}:n;for(var o=0,a=(r=r||[]).length;o<a;o++){var c=r[o];c instanceof u?r[o]=c._buffer:"string"===typeof c?r[o]=j(c):s&&(ArrayBuffer.prototype.isPrototypeOf(c)||i(c))?r[o]=t(c):s&&(b=c)&&DataView.prototype.isPrototypeOf(b)?r[o]=t(c.buffer):r[o]=j(String(c))}var b;this._buffer=e.Uint8Array?function(e){for(var t=0,r=e.length;r--;)t+=e[r].length;var n=new Uint8Array(t),o=0;for(r=0,l=e.length;r<l;r++){var a=e[r];n.set(a,o),o+=a.byteLength||a.length}return n}(r):[].concat.apply([],r),this.size=this._buffer.length,this.type=n.type||"",/[^\u0020-\u007E]/.test(this.type)?this.type="":this.type=this.type.toLowerCase()}function b(e,t,r){r=r||{};var n=u.call(this,e,r)||this;return n.name=t.replace(/\//g,":"),n.lastModifiedDate=r.lastModified?new Date(r.lastModified):new Date,n.lastModified=+n.lastModifiedDate,n}if(u.prototype.arrayBuffer=function(){return Promise.resolve(this._buffer)},u.prototype.text=function(){return Promise.resolve(h(this._buffer))},u.prototype.slice=function(e,t,r){return new u([this._buffer.slice(e||0,t||this._buffer.length)],{type:r})},u.prototype.toString=function(){return"[object Blob]"},b.prototype=a(u.prototype),b.prototype.constructor=b,Object.setPrototypeOf)Object.setPrototypeOf(b,u);else try{b.__proto__=u}catch(m){}function f(){if(!(this instanceof f))throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");var e=document.createDocumentFragment();this.addEventListener=e.addEventListener,this.dispatchEvent=function(t){var r=this["on"+t.type];"function"===typeof r&&r(t),e.dispatchEvent(t)},this.removeEventListener=e.removeEventListener}function d(e,t,r){if(!(t instanceof u))throw new TypeError("Failed to execute '"+r+"' on 'FileReader': parameter 1 is not of type 'Blob'.");e.result="",setTimeout((function(){this.readyState=f.LOADING,e.dispatchEvent(new Event("load")),e.dispatchEvent(new Event("loadend"))}))}b.prototype.toString=function(){return"[object File]"},f.EMPTY=0,f.LOADING=1,f.DONE=2,f.prototype.error=null,f.prototype.onabort=null,f.prototype.onerror=null,f.prototype.onload=null,f.prototype.onloadend=null,f.prototype.onloadstart=null,f.prototype.onprogress=null,f.prototype.readAsDataURL=function(e){d(this,e,"readAsDataURL"),this.result="data:"+e.type+";base64,"+r(e._buffer)},f.prototype.readAsText=function(e){d(this,e,"readAsText"),this.result=h(e._buffer)},f.prototype.readAsArrayBuffer=function(e){d(this,e,"readAsText"),this.result=(e._buffer.buffer||e._buffer).slice()},f.prototype.abort=function(){},URL.createObjectURL=function(e){return e instanceof u?"data:"+e.type+";base64,"+r(e._buffer):n.call(URL,e)},URL.revokeObjectURL=function(e){o&&o.call(URL,e)};var p=e.XMLHttpRequest&&e.XMLHttpRequest.prototype.send;p&&(XMLHttpRequest.prototype.send=function(e){e instanceof u?(this.setRequestHeader("Content-Type",e.type),p.call(this,h(e._buffer))):p.call(this,e)}),e.FileReader=f,e.File=b,e.Blob=u}(),a&&(File.prototype[a]="File",Blob.prototype[a]="Blob",FileReader.prototype[a]="FileReader");var O,y=e.Blob.prototype;function g(e){return new Promise((function(t,r){e.onload=e.onerror=function(n){e.onload=e.onerror=null,"load"===n.type?t(e.result||e):r(new Error("Failed to read the blob/file"))}}))}try{new ReadableStream({type:"bytes"}),O=function(){var e=0,t=this;return new ReadableStream({type:"bytes",autoAllocateChunkSize:524288,pull:function(r){var n=r.byobRequest.view;return t.slice(e,e+n.byteLength).arrayBuffer().then((function(o){var a=new Uint8Array(o),c=a.byteLength;e+=c,n.set(a),r.byobRequest.respond(c),e>=t.size&&r.close()}))}})}}catch(m){try{new ReadableStream({}),O=function(e){var t=0;e=this;return new ReadableStream({pull:function(r){return e.slice(t,t+524288).arrayBuffer().then((function(n){t+=n.byteLength;var o=new Uint8Array(n);r.enqueue(o),t==e.size&&r.close()}))}})}}catch(m){try{new Response("").body.getReader().read(),O=function(){return new Response(this).body}}catch(m){O=function(){throw new Error("Include https://github.com/MattiasBuelens/web-streams-polyfill")}}}}y.arrayBuffer||(y.arrayBuffer=function(){var e=new FileReader;return e.readAsArrayBuffer(this),g(e)}),y.text||(y.text=function(){var e=new FileReader;return e.readAsText(this),g(e)}),y.stream||(y.stream=O)}()},579:function(e,t,r){"use strict";r.r(t);r(301),r(311);var n,o,a,c=r(0),i=r.n(c),s=r(48),l=r.n(s),u=(r(501),r(55)),b=r(626),f=r(46),d=Object(u.b)(n||(n=Object(f.a)(["\n  body {\n    min-width: 100%;\n    min-height: 100%;\n    overflow-y: scroll;\n  }\n\n  img {\n    width: 100%;\n  }\n"]))),j=r(5),h=r(6),p=r(150),O=r(599),y=r(284),g=r(96),m=r.n(g),x=[30,48,62,80].map((function(e){return 16*e})),v=[[1,"mobile"],[2,"tablet"],[3,"laptop"],[4,"desktop"]],w=x.map((function(e,t){var r=v.findIndex((function(e){return Object(h.a)(e,1)[0]+1>t}));return r>=0?r:v.length})),R=Object(y.a)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.length;return n<=1?t[0]:x.map((function(e,r){return m()(t,[w[r]],null)}))})),A=["26em","44em","58em","76em"],S=R("1em","2em"),B='Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',k={fonts:{heading:B,body:B,mono:"Menlo, monospace"},colors:Object(j.a)(Object(j.a)({},p.theme.colors),{},{primary:m()(p.theme.colors,"".concat("blue",".500")),secondary:m()(p.theme.colors,"".concat("green",".500")),danger:m()(p.theme.colors,"".concat("red",".500")),text:m()(p.theme.colors,"black")}),breakpoints:x,containerWidth:A,headerHeight:"5em"},L=Object(O.a)(k),M=r(4),T=function(e){var t=e.children;return Object(M.jsx)(b.a,{theme:L,resetCSS:!0,children:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(u.a,{styles:d}),t]})})},F=Object(c.createContext)({}),C=r(286),U=function(e){return Object(C.useMediaQuery)({query:"(min-width: ".concat(e,"px)")})},D=function(e){var t=e.children,r=x.map(U);return Object(M.jsx)(F.Provider,{value:r,children:t})},E=Object(c.createContext)({hideHeader:!1,setHideHeader:function(){}}),P=function(e){var t=e.children,r=Object(c.useState)(),n=Object(h.a)(r,2),o=n[0],a=n[1];return Object(M.jsx)(E.Provider,{value:{hideHeader:o,setHideHeader:a},children:t})},H=r(47),z=r(600),I=Object(H.a)(z.a)(o||(o=Object(f.a)([""]))),_=I;I.Inline=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(I,Object(j.a)(Object(j.a)({as:"span",display:"inline-block",verticalAlign:"middle"},e),{},{ref:t}))})),I.Absolute=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(I,Object(j.a)(Object(j.a)({position:"absolute"},e),{},{ref:t}))})),I.FullAbs=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(I.Absolute,Object(j.a)(Object(j.a)({top:"0",left:"0",right:"0",bottom:"0"},e),{},{ref:t}))})),I.Relative=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(I,Object(j.a)(Object(j.a)({position:"relative"},e),{},{ref:t}))})),I.Fixed=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(I,Object(j.a)(Object(j.a)({position:"fixed"},e),{},{ref:t}))})),I.Invisible=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(I.Absolute,Object(j.a)(Object(j.a)({width:"0",height:"0",overflow:"hidden",opacity:"0"},e),{},{ref:t}))}));var q=Object(H.a)(_)(a||(a=Object(f.a)([""])));q.defaultProps={mx:"auto",px:S,maxWidth:A},q.displayName="Container";var W,N=r(601),Q=Object(H.a)(N.a)(W||(W=Object(f.a)([""])));Q.Vertical=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(N.a,Object(j.a)(Object(j.a)({direction:"column"},e),{},{ref:t}))}));var V,X=Q,G=r(602),J=r(287),K=r.n(J),Y=Object(H.a)(G.a)(V||(V=Object(f.a)([""])));Y.Inline=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(Y,Object(j.a)(Object(j.a)({as:"span"},e),{},{ref:t}))})),Y.Bold=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(Y,Object(j.a)(Object(j.a)({fontWeight:"700"},e),{},{ref:t}))})),Y.Thin=Object(c.forwardRef)((function(e,t){return Object(M.jsx)(Y,Object(j.a)(Object(j.a)({fontWeight:"200"},e),{},{ref:t}))})),K()(1,7).forEach((function(e){Y["H".concat(e)]=Object(c.forwardRef)((function(t,r){return Object(M.jsx)(Y,Object(j.a)(Object(j.a)({as:"h".concat(e),fontSize:"".concat(5-e,"xl")},t),{},{ref:r}))}))}));var Z=Y,$=r(34),ee=r(38),te=r(603),re=function(e){var t=Object(ee.get)(window,"Modernizr.webp");return Object(c.useMemo)((function(){return Object(ee.isArray)(e)?t?e[0]:e[1]:null}),[t,e])},ne=function(e){var t=e.src,r=e.children,n=Object($.a)(e,["src","children"]),o=re(t);return Object(M.jsx)(_,Object(j.a)(Object(j.a)({backgroundImage:"url(".concat(Object(ee.isArray)(t)?o:t,")")},n),{},{children:r&&Object(M.jsx)(_.FullAbs,{children:r})}))};ne.defaultProps={backgroundSize:"cover",backgroundPosition:"50% 50%",backgroundRepet:"no-repeat"};var oe=Object(c.forwardRef)((function(e,t){var r=e.src,n=e.children,o=e.backgroundSize,a=e.backgroundPosition,c=Object($.a)(e,["src","children","backgroundSize","backgroundPosition"]);return Object(M.jsx)(te.a,Object(j.a)(Object(j.a)({},c),{},{ref:t,children:Object(M.jsx)(ne,{src:r,backgroundSize:o,backgroundPosition:a,children:n})}))}));oe.displayName="BackgroundImage";var ae,ce=r(627),ie=r(604),se=Object(H.a)(ie.a)(ae||(ae=Object(f.a)([""]))),le=function(e){var t=e.href,r=Object($.a)(e,["href"]);return t?Object(M.jsx)(ce.a,Object(j.a)({as:function(e){return Object(M.jsx)(se,Object(j.a)(Object(j.a)({},e),{},{href:t}))}},r)):Object(M.jsx)(ce.a,Object(j.a)({},r))};le.defaultProps={colorScheme:"blue"},le.Secondary=function(e){return Object(M.jsx)(le,Object(j.a)({colorScheme:"green"},e))},le.Danger=function(e){return Object(M.jsx)(le,Object(j.a)({colorScheme:"red"},e))};var ue,be=le,fe=r(113),de=r.n(fe),je=r(288),he=r.n(je),pe=function(e){return v.reduce((function(t,r){var n=Object(h.a)(r,2),o=n[0],a=n[1];return t[he()("is-".concat(a))]=!e[o],t}),{})},Oe=function(){var e=Object(c.useContext)(F);return Object(j.a)(Object(j.a)({},pe(e)),{},{responsive:R,getCurrentValue:Object(c.useCallback)((function(t){if(!de()(t))return t;var r=e.findIndex((function(e){return!e}))-1;for(-2===r&&(r=t.length-1);!t[r]&&r>=0;)r-=1;return t[r]}),[e])})},ye=r(606),ge=function(e){var t=e.siteTitle,r=Object($.a)(e,["siteTitle"]);return Object(M.jsx)(X,Object(j.a)(Object(j.a)({position:"fixed",bg:"primary",top:0,left:0,right:0,alignItems:"center",zIndex:"docked"},r),{},{children:Object(M.jsx)(_,{px:"1em",flex:1,children:Object(M.jsx)(ye.a,{as:"h1",color:"white",children:t})})}))},me=function(e){var t=e.children,r=Object(c.useContext)(E).hideHeader;return Object(M.jsxs)(M.Fragment,{children:[!r&&Object(M.jsx)(ge,{height:L.headerHeight,siteTitle:"Trading Dashboard"}),Object(M.jsx)(_,{minHeight:"100vh",pt:!r&&L.headerHeight,children:t})]})},xe=r(624),ve=r(629),we=r(622),Re=r(293),Ae=r(620),Se=r(289),Be=r.p+"static/media/data.613e6be8.tsv",ke=r(612),Le=r(614),Me=r(630),Te=r(608),Fe=r(613),Ce=r(615),Ue=r(621),De=r(120),Ee=r(607),Pe=r(623),He=r(625),ze=r(633),Ie=r(290),_e=r.n(Ie),qe={top:40,right:10,bottom:30,left:40},We=Object(j.a)(Object(j.a)({},De.b),{},{padding:12,minWidth:60,backgroundColor:"rgba(0,0,0,0.9)",color:"white"}),Ne=function(e,t){var r=Object(ee.maxBy)(e,t),n=Object(ee.minBy)(e,t);return"string"===typeof t?[n[t],r[t]]:[t(n),t(r)]},Qe=Object(Ue.a)(".2r"),Ve=Object(Ue.a)(","),Xe=Object(Ue.a)("+,"),Ge=Object(c.forwardRef)((function(e,t){var r=e.width,n=e.height,o=e.margin,a=void 0===o?qe:o,c=e.xScale,i=e.yScale,s=e.data,l=e.series,u=e.highlight,b=Object($.a)(e,["width","height","margin","xScale","yScale","data","series","highlight"]),f=Object(Ee.a)(),d=f.tooltipOpen,h=f.tooltipLeft,p=f.tooltipTop,O=f.tooltipData,y=f.hideTooltip,g=f.showTooltip,m=Object(Pe.a)({scroll:!0}),x=m.containerRef,v=m.TooltipInPortal;if(r<10||!s||!c||!i||!l)return null;var w=l.reduce((function(e,t){var r=t.x,n=t.y;return e.concat(s.map((function(e){return{x:r(e),y:n(e)}})))}),[]),R=r-a.left-a.right,A=n-a.top-a.bottom,S=c({domain:Ne(w,"x").map((function(e,t){return t?1.1*e:.9*e})),range:[0,R]}),B=i({domain:Ne(w,"y"),range:[A,0]});return Object(M.jsxs)(_,Object(j.a)(Object(j.a)({as:"svg",width:r,height:n,ref:_e()(t,x)},b),{},{children:[Object(M.jsxs)(Te.a,{left:a.left,top:a.top,children:[Object(M.jsx)(Me.a,{xScale:S,yScale:B,width:R,height:A,stroke:"black",strokeOpacity:.1}),Object(M.jsx)(ke.a,{top:B(0),scale:S,tickFormat:function(e){var t="".concat(e);return t.match(/^[.01?[\]]*$/)?Ve(t):""}}),Object(M.jsx)(Le.a,{scale:B}),Object(M.jsx)(Te.a,{children:s.map((function(e,t){var r=l[0].x(e),n=l[1].x(e),o=l[0].y(e),a=l[1].y(e);return Object(M.jsx)(Fe.a,{className:"line",from:{x:S(r),y:B(o)},to:{x:S(n),y:B(a)},stroke:n<r?"green":"red",strokeWidth:6,opacity:d&&e.id!==O.id?.05:(Object(ee.isObject)(u[e.industry])?u[e.industry][e.item]:u[e.industry])?.9:.1,onMouseLeave:function(){ue=window.setTimeout((function(){y()}),300)},onMouseMove:function(t){ue&&clearTimeout(ue);var o=Object(He.a)(t);g({tooltipData:Object(j.a)(Object(j.a)({},e),{},{diff:n-r}),tooltipTop:null===o||void 0===o?void 0:o.y,tooltipLeft:null===o||void 0===o?void 0:o.x})}},"line-".concat(t))}))}),Object(M.jsx)(Te.a,{children:s.map((function(e,t){return Object(M.jsx)(Ce.a,{className:"dot",cx:S(l[1].x(e)),cy:B(l[1].y(e)),fill:"black",opacity:d&&e.id!==O.id?.05:.3,r:4},"point-".concat(t))}))})]}),d&&O&&Object(M.jsx)(v,{top:p,left:h,style:We,children:Object(M.jsxs)(ze.b,{children:[Object(M.jsx)(Z,{fontWeight:"bold",fontSize:"0.875em",children:O.industry}),Object(M.jsx)(Z,{fontSize:"1.125em",children:O.item}),Object(M.jsx)(ze.a,{py:"0.5em",spacing:"1em",children:l.map((function(e,t){var r=e.x,n=e.y,o=e.label;return Object(M.jsxs)(ze.b,{children:[Object(M.jsxs)(Z,{children:[o,":"]}),Object(M.jsx)(Z,{fontWeight:"bold",fontSize:"1.125em",children:Ve(r(O))}),Object(M.jsxs)(Z,{children:[Qe(n(O)),"%"]})]},t)}))}),Object(M.jsx)(Z,{fontWeight:"bold",fontSize:"1.125em",color:O.diff<0?"green.500":"red.500",children:Xe(O.diff)})]})})]}))})),Je=r(631),Ke=r(632),Ye=function(e){var t=e.ratio,r=e.children,n=Object($.a)(e,["ratio","children"]),o=Object(Je.a)(),a=Object(h.a)(o,2),c=a[0],s=a[1],l=s.width,u=s.height,b=Object(Ke.a)({width:l,height:u});return Object(M.jsx)(te.a,Object(j.a)(Object(j.a)({ratio:t,ref:c},n),{},{children:i.a.cloneElement(r,b)}))},Ze=r(628),$e=r(617);function et(e){var t=Object(Ze.a)(e),r=t.getInputProps,n=t.getCheckboxProps,o=r(),a=n();return Object(M.jsxs)(z.a,{as:"label",children:[Object(M.jsx)("input",Object(j.a)({},o)),Object(M.jsx)(z.a,Object(j.a)(Object(j.a)({},a),{},{cursor:"pointer",borderWidth:"1px",borderRadius:"md",boxShadow:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},_focus:{boxShadow:"outline"},px:5,py:3,children:e.children}))]})}var tt=function(e){var t=e.options,r=e.name,n=e.defaultValue,o=e.onChange,a=Object($.a)(e,["options","name","defaultValue","onChange"]),c=Object($e.a)({name:r,defaultValue:n,onChange:o}),i=c.getRootProps,s=c.getRadioProps,l=i();return Object(M.jsx)(ze.a,Object(j.a)(Object(j.a)(Object(j.a)({},l),a),{},{children:t.map((function(e){var t=e.value,r=e.label,n=s({value:t});return Object(M.jsx)(et,Object(j.a)(Object(j.a)({},n),{},{children:r}),t)}))}))},rt=[{"ICT\u7522\u696d":!0,"\u975eICT\u7522\u696d":!0},{"\u986f\u793a\u5668":!0,"\u534a\u5c0e\u9ad4":!0,"\u901a\u8a0a":!0,"\u96fb\u8def\u677f":!0,"\u8cc7\u8a0a\u53ca\u901a\u4fe1":!0,"\u5149\u96fb":!0,"\u6d88\u8cbb\u6027\u96fb\u5b50":!0,"\u8cc7\u901a\u8a0a":!0,"\u8ca1\u653f\u90e8\u7522\u696d\u5b9a\u7fa9":{"\u96fb\u5b50\u96f6\u7d44\u4ef6":!0,"\u5149\u5b78\u5668\u6750":!0}},{"\u6a5f\u68b0":!0},{"\u91ab\u7642\u5668\u6750":!0,"\u7f8e\u599d":!0,"\u50a2\u4ff1":!0,"\u8ca1\u653f\u90e8\u7522\u696d\u5b9a\u7fa9":{"\u7926\u7522\u54c1":!0,"\u5316\u5b78\u54c1":!0,"\u7d21\u7e54\u54c1":!0,"\u57fa\u672c\u91d1\u5c6c\u53ca\u5176\u88fd\u54c1":!0,"\u6a5f\u68b0":!0,"\u96fb\u6a5f\u7522\u54c1":!0,"\u904b\u8f38\u5de5\u5177":!0}}],nt=function(){var e=Object(c.useRef)(),t=Object(c.useState)(),r=Object(h.a)(t,2),n=r[0],o=r[1],a=Object(c.useState)("0"),i=Object(h.a)(a,2),s=i[0],l=i[1],u=rt[s],b=Object(c.useState)([]),f=Object(h.a)(b,2),d=f[0],p=f[1],O=Object(c.useState)([]),y=Object(h.a)(O,2),g=y[0],m=y[1];Object(c.useEffect)((function(){Object(xe.a)(Be,(function(e){return Object(j.a)(Object(j.a)({},Object(ee.mapValues)(e,(function(e){var t=Number(e);return isNaN(t)?e:t}))),{},{id:e.industry+e.item})})).then((function(e){var t=Object(ee.compact)(e);o(t),p(Object(ee.map)(Object(ee.groupBy)(t,"industry"),(function(e,t){return[t,e.length]})))}))}),[]);var x=Object(c.useMemo)((function(){return n?n&&n.filter((function(e){return e["2020Q1"]>0&&e["2021Q1"]>0&&(!g.length||g.includes(e.industry))})):n}),[n,g]),v=Object(c.useCallback)((function(){var t=(new Date).toLocaleDateString(),r=(new XMLSerializer).serializeToString(e.current);r.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)||(r=r.replace(/^<svg/,'<svg xmlns="http://www.w3.org/2000/svg"')),r.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)||(r=r.replace(/^<svg/,'<svg xmlns:xlink="http://www.w3.org/1999/xlink"'));var n=new Blob([r],{type:"image/svg+xml"});Object(Se.saveAs)(n,"".concat(t,".svg"))}),[]);return Object(M.jsxs)(_,{p:"2em",children:[Object(M.jsx)(ye.a,{mb:"0.5em",children:"2021 Q1\u8cbf\u6613\u984d\u8b8a\u5316"}),Object(M.jsx)(Re.a,{onChange:m,children:Object(M.jsx)(N.a,{flexWrap:"wrap",mx:"-0.25em",children:d.map((function(e){var t=Object(h.a)(e,2),r=t[0],n=t[1];return Object(M.jsx)(_,{m:"0.25em",children:Object(M.jsxs)(Ae.a,{value:r,children:[r," (",n,")"]})},r)}))})}),Object(M.jsx)(tt,{name:"page",defaultValue:s,options:rt.map((function(e,t){return{value:String(t),label:t+1}})),onChange:l,my:"1em"}),Object(M.jsx)(Ye,{ratio:3,children:Object(M.jsx)(Ge,{data:x,xScale:ve.a,yScale:we.a,series:[{x:function(e){return e["2020Q1"]},y:function(e){return e.gr_2020Q1},label:"2020 Q1"},{x:function(e){return e["2021Q1"]},y:function(e){return e.gr_2021Q1},label:"2021 Q1"}],highlight:u,ref:e})}),Object(M.jsx)(_,{my:"1em",children:Object(M.jsx)(be,{onClick:v,children:"\u4e0b\u8f09SVG"})})]})},ot=function(){Oe().isMobile;return Object(M.jsx)(me,{children:Object(M.jsx)(nt,{})})};var at=function(){return Object(M.jsx)(ot,{})};l.a.render(Object(M.jsx)(T,{children:Object(M.jsx)(D,{children:Object(M.jsx)(P,{children:Object(M.jsx)(at,{})})})}),document.getElementById("root"))}},[[579,1,2]]]);
//# sourceMappingURL=main.e0f8b7a5.chunk.js.map