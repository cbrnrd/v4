(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/9aa":function(t,e,n){var o=n("NykK"),r=n("ExA7");t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,n){var o=n("dVn5"),r=n("fo6e"),a=n("dt0z"),u=n("9NmV");t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?r(t)?u(t):o(t):t.match(e)||[]}},"6qSS":function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),a=n("Wbzz"),u=n("TJpk"),c=n.n(u),f=n("N1om"),i=n.n(f),l=n("Kvkj"),s=n("vOnD"),d=n("InJ6"),x=d.h.colors,m=Object(s.c)(d.d).withConfig({displayName:"post__StyledPostContainer",componentId:"sc-8858gx-0"})(["max-width:1000px;"]),p=s.c.header.withConfig({displayName:"post__StyledPostHeader",componentId:"sc-8858gx-1"})(["margin-bottom:50px;.tag{margin-right:10px;}"]),g=s.c.div.withConfig({displayName:"post__StyledPostContent",componentId:"sc-8858gx-2"})(["margin-bottom:100px;h1,h2,h3,h4,h5,h6{margin:2em 0 1em;}p{margin:1em 0;line-height:1.5;color:",";}"],x.lightSlate);e.default=function(t){var e=t.data,n=t.location,o=e.markdownRemark,u=o.frontmatter,f=o.html,s=u.title,d=u.date,x=u.tags;return r.a.createElement(l.i,{location:n},r.a.createElement(c.a,null,r.a.createElement("title",null,s," | Brittany Chiang"),r.a.createElement("link",{rel:"canonical",href:"https://brittanychiang.com/blog"})),r.a.createElement(m,null,r.a.createElement("span",{className:"breadcrumb"},r.a.createElement("span",{className:"arrow"},"←"),r.a.createElement(a.Link,{to:"/blog"},"All memories")),r.a.createElement(p,null,r.a.createElement("h1",{className:"medium-title"},s),r.a.createElement("p",{className:"subtitle"},r.a.createElement("time",null,new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),r.a.createElement("span",null," — "),x&&x.length>0&&x.map((function(t,e){return r.a.createElement(a.Link,{key:e,to:"/blog/tags/"+i()(t)+"/",className:"tag"},"#",t)})))),r.a.createElement(g,{dangerouslySetInnerHTML:{__html:f}})))}},"9NmV":function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",r="\\d+",a="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+u+"|"+c+")",d="(?:"+l+"|"+c+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,i].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),p="(?:"+[a,f,i].join("|")+")"+m,g=RegExp([l+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,l,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,l+s,"$"].join("|")+")",l+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,p].join("|"),"g");t.exports=function(t){return t.match(g)||[]}},AP2z:function(t,e,n){var o=n("nmnc"),r=Object.prototype,a=r.hasOwnProperty,u=r.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(f){}var r=u.call(t);return o&&(e?t[c]=n:delete t[c]),r}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();t.exports=a},N1om:function(t,e,n){var o=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=o},NykK:function(t,e,n){var o=n("nmnc"),r=n("AP2z"),a=n("KfNM"),u=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?r(t):a(t)}},TKrE:function(t,e,n){var o=n("qRkn"),r=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(a,o).replace(u,"")}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},asDA:function(t,e){t.exports=function(t,e,n,o){var r=-1,a=null==t?0:t.length;for(o&&a&&(n=t[++r]);++r<a;)n=e(n,t[r],r,t);return n}},dVn5:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},dt0z:function(t,e,n){var o=n("zoYe");t.exports=function(t){return null==t?"":o(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,o=null==t?0:t.length,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r}},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},nmnc:function(t,e,n){var o=n("Kz5y").Symbol;t.exports=o},qRkn:function(t,e,n){var o=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=o},sgoq:function(t,e,n){var o=n("asDA"),r=n("TKrE"),a=n("6nK8"),u=RegExp("['’]","g");t.exports=function(t){return function(e){return o(a(r(e).replace(u,"")),t,"")}}},zoYe:function(t,e,n){var o=n("nmnc"),r=n("eUgh"),a=n("Z0cm"),u=n("/9aa"),c=o?o.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return r(e,t)+"";if(u(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-post-js-688f0334fd4b05f12a3c.js.map