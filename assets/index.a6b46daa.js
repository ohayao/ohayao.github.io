import{r as e,o as t,j as n,F as a,k as r,m as s,w as l,l as i,p as o,n as u,f as c,g as d,t as g,q as p,c as h,s as m,v as f,x as b}from"./vendor.6f4f2cc4.js";const v={},y=i("div",{style:{clear:"both"}},null,-1),k=i("div",{style:{clear:"both"}},null,-1),w=u(" Https://");v.render=function(i,u){const c=e("v-input"),d=e("v-icon");return t(),n(a,null,[(t(),n(a,null,r(["tiny","small","medium","large","huge"],(e=>s(c,{key:e,class:o(e),label:e,widths:["30%","70%"]},null,8,["class","label"]))),64)),y,(t(),n(a,null,r(["igloohome","info","success","warn","error"],(e=>s(c,{key:e,class:o(e),label:e,widths:["30%","70%"]},null,8,["class","label"]))),64)),k,(t(),n(a,null,r(["igloohome","info","success","warn","error"],(e=>s(c,{key:e,class:o(e),borderd:"",label:e,widths:["30%","70%"]},null,8,["class","label"]))),64)),s(c,{label:"deafult",placeholder:"默认宽度各占50%",readonly:""}),s(c,{label:"reverse",placeholder:"反转",disabled:""}),s(c,{label:"borderd",placeholder:"设置边框",borderd:""}),s(c,{label:"borderd",placeholder:"设置边框",reverse:"",borderd:""}),s(c,{label:"Auto Focus",class:"igloohome",borderd:"",focus:""}),s(c,{label:"ClearAble",class:"igloohome",borderd:"",clearable:""}),s(c,{type:"date",label:"自定义Label,Input样式",label_align:"right",label_color:"#fff",label_bg_color:"#f3c",input_color:"#f3c",input_bg_color:"#3fc",widths:["60%","40%"]}),s(c,{widths:["calc(100% - 50px)","50px"],placeholder:"自定义Label插槽",borderd:"",reverse:""},{label:l((()=>[s(d,{name:"search"})])),_:1},8,["widths"]),s(c,{widths:["80px","calc(100% - 80px)"],class:"info",placeholder:"自定义Label插槽",borderd:""},{label:l((()=>[s(d,{name:"home"}),w])),_:1},8,["widths"]),s(c,{widths:["0","100%"],class:"info",placeholder:"隐藏Label,将其宽度设置为0",borderd:""})],64)};var x='<template>\n    <v-input v-for="s in [\'tiny\', \'small\', \'medium\', \'large\', \'huge\']" :key="s" :class="s" :label="s" :widths="[\'30%\', \'70%\']"></v-input>\n    <div style="clear: both"></div>\n    <v-input v-for="c in [\'igloohome\', \'info\', \'success\', \'warn\', \'error\']" :key="c" :class="c" :label="c" :widths="[\'30%\', \'70%\']"></v-input>\n    <div style="clear: both"></div>\n    <v-input v-for="c in [\'igloohome\', \'info\', \'success\', \'warn\', \'error\']" :key="c" :class="c" borderd :label="c" :widths="[\'30%\', \'70%\']"></v-input>\n    <v-input label="deafult" placeholder="默认宽度各占50%" readonly></v-input>\n    <v-input label="reverse" placeholder="反转" disabled></v-input>\n    <v-input label="borderd" placeholder="设置边框" borderd></v-input>\n    <v-input label="borderd" placeholder="设置边框" reverse borderd></v-input>\n    <v-input label="Auto Focus" class="igloohome" borderd focus></v-input>\n    <v-input label="ClearAble" class="igloohome" borderd clearable></v-input>\n    <v-input type="date" label="自定义Label,Input样式" label_align="right" label_color="#fff" label_bg_color="#f3c" input_color="#f3c" input_bg_color="#3fc" :widths="[\'60%\', \'40%\']"></v-input>\n    <v-input :widths="[\'calc(100% - 50px)\', \'50px\']" placeholder="自定义Label插槽" borderd reverse>\n        <template #label><v-icon name="search"></v-icon></template>\n    </v-input>\n    <v-input :widths="[\'80px\', \'calc(100% - 80px)\']" class="info" placeholder="自定义Label插槽" borderd>\n        <template #label><v-icon name="home"></v-icon> Https://</template>\n    </v-input>\n    <v-input :widths="[\'0\', \'100%\']" class="info" placeholder="隐藏Label,将其宽度设置为0" borderd> </v-input>\n</template>',F=c({components:{},setup(e,t){const n=d("Message.Toast");let a="";return{click:e=>{let t={};t.direction=e,t.content="Hello world!!!",t.type=a,Math.random()>.8&&(t.close_callback=()=>{n("callback ...")}),n(t)},clicks:e=>{a=e},msgtoast:n}}});const A={id:"abc"},_=["onClick"],$=i("br",null,null,-1),S=["onClick"];F.render=function(l,o,c,d,p,h){const m=e("v-icon");return t(),n("div",A,[(t(),n(a,null,r(["tl","tc","tr","ml","mc","mr","bl","bc","br"],(e=>i("button",{key:e,onClick:t=>l.click(e)},[s(m,{name:"home"}),u("Position ["+g(e)+"]",1)],8,_))),64)),$,(t(),n(a,null,r(["info","warn","success","error",""],(e=>i("button",{key:e,onClick:t=>l.clicks(e)},[s(m,{name:"home"}),u("Type ["+g(e)+"]",1)],8,S))),64)),i("button",{onClick:o[0]||(o[0]=e=>l.msgtoast("hello world"))},"Default"),i("button",{onClick:o[1]||(o[1]=e=>{l.msgtoast({content:"callback",close_callback:()=>{l.msgtoast("what are you doing?")}})})}," Callback ")])};var E=c({name:"v-code",props:{language:{type:String,default:"autodec"},html:{type:String,default:""}}});const C=["innerHTML"];E.render=function(e,a,r,s,l,u){return t(),n("pre",{class:o("language-"+e.language)},[i("code",{class:o("language-"+e.language),innerHTML:e.html},null,10,C)],2)};var j,L,T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};j={exports:{}},L=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,s;switch(n=n||{},r.util.type(t)){case"Object":if(s=r.util.objId(t),n[s])return n[s];for(var l in a={},n[s]=a,t)t.hasOwnProperty(l)&&(a[l]=e(t[l],n));return a;case"Array":return s=r.util.objId(t),n[s]?n[s]:(a=[],n[s]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var s=(a=a||r.languages)[e],l={};for(var i in s)if(s.hasOwnProperty(i)){if(i==t)for(var o in n)n.hasOwnProperty(o)&&(l[o]=n[o]);n.hasOwnProperty(i)||(l[i]=s[i])}var u=a[e];return a[e]=l,r.languages.DFS(r.languages,(function(t,n){n===u&&t!=e&&(this[t]=l)})),l},DFS:function e(t,n,a,s){s=s||{};var l=r.util.objId;for(var i in t)if(t.hasOwnProperty(i)){n.call(t,i,t[i],a||i);var o=t[i],u=r.util.type(o);"Object"!==u||s[l(o)]?"Array"!==u||s[l(o)]||(s[l(o)]=!0,e(o,n,i,s)):(s[l(o)]=!0,e(o,n,null,s))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var s,l=0;s=a.elements[l++];)r.highlightElement(s,!0===t,a.callback)},highlightElement:function(t,n,a){var s=r.util.getLanguage(t),l=r.languages[s];r.util.setLanguage(t,s);var i=t.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&r.util.setLanguage(i,s);var o={element:t,language:s,grammar:l,code:t.textContent};function u(e){o.highlightedCode=e,r.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r.hooks.run("after-highlight",o),r.hooks.run("complete",o),a&&a.call(o.element)}if(r.hooks.run("before-sanity-check",o),(i=o.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!o.code)return r.hooks.run("complete",o),void(a&&a.call(o.element));if(r.hooks.run("before-highlight",o),o.grammar)if(n&&e.Worker){var c=new Worker(r.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else u(r.highlight(o.code,o.grammar,o.language));else u(r.util.encode(o.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(r.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),s.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new o;return u(r,r.head,e),i(e,r,t,r.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,s=0;a=n[s++];)a(t)}},Token:s};function s(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function l(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function i(e,t,n,a,o,d){for(var g in n)if(n.hasOwnProperty(g)&&n[g]){var p=n[g];p=Array.isArray(p)?p:[p];for(var h=0;h<p.length;++h){if(d&&d.cause==g+","+h)return;var m=p[h],f=m.inside,b=!!m.lookbehind,v=!!m.greedy,y=m.alias;if(v&&!m.pattern.global){var k=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,k+"g")}for(var w=m.pattern||m,x=a.next,F=o;x!==t.tail&&!(d&&F>=d.reach);F+=x.value.length,x=x.next){var A=x.value;if(t.length>e.length)return;if(!(A instanceof s)){var _,$=1;if(v){if(!(_=l(w,F,e,b))||_.index>=e.length)break;var S=_.index,E=_.index+_[0].length,C=F;for(C+=x.value.length;S>=C;)C+=(x=x.next).value.length;if(F=C-=x.value.length,x.value instanceof s)continue;for(var j=x;j!==t.tail&&(C<E||"string"==typeof j.value);j=j.next)$++,C+=j.value.length;$--,A=e.slice(F,C),_.index-=F}else if(!(_=l(w,0,A,b)))continue;S=_.index;var L=_[0],T=A.slice(0,S),M=A.slice(S+L.length),P=F+A.length;d&&P>d.reach&&(d.reach=P);var z=x.prev;if(T&&(z=u(t,z,T),F+=T.length),c(t,z,$),x=u(t,z,new s(g,f?r.tokenize(L,f):L,y,L)),M&&u(t,x,M),$>1){var O={cause:g+","+h,reach:P};i(e,t,n,x.prev,F,O),d&&O.reach>d.reach&&(d.reach=O.reach)}}}}}}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function c(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=r,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var s={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},l=t.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(s.classes,l):s.classes.push(l)),r.hooks.run("wrap",s);var i="";for(var o in s.attributes)i+=" "+o+'="'+(s.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+i+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,s=n.code,l=n.immediateClose;e.postMessage(r.highlight(s,r.languages[a],a)),l&&e.close()}),!1),r):r;var d=r.util.currentScript();function g(){r.manual||r.highlightAll()}if(d&&(r.filename=d.src,d.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var p=document.readyState;"loading"===p||"interactive"===p&&d&&d.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{}),j.exports&&(j.exports=L),void 0!==T&&(T.Prism=L),L.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},L.languages.markup.tag.inside["attr-value"].inside.entity=L.languages.markup.entity,L.languages.markup.doctype.inside["internal-subset"].inside=L.languages.markup,L.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(L.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:L.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:L.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},L.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(L.languages.markup.tag,"addAttribute",{value:function(e,t){L.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:L.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),L.languages.html=L.languages.markup,L.languages.mathml=L.languages.markup,L.languages.svg=L.languages.markup,L.languages.xml=L.languages.extend("markup",{}),L.languages.ssml=L.languages.xml,L.languages.atom=L.languages.xml,L.languages.rss=L.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(L),L.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},L.languages.javascript=L.languages.extend("clike",{"class-name":[L.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),L.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,L.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:L.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:L.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:L.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:L.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:L.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),L.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:L.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),L.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),L.languages.markup&&(L.languages.markup.tag.addInlined("script","javascript"),L.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),L.languages.js=L.languages.javascript,function(){if(void 0!==L&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",n="loading",a="loaded",r='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';L.hooks.add("before-highlightall",(function(e){e.selector+=", "+r})),L.hooks.add("before-sanity-check",(function(s){var l=s.element;if(l.matches(r)){s.code="",l.setAttribute(t,n);var i=l.appendChild(document.createElement("CODE"));i.textContent="Loading…";var o=l.getAttribute("data-src"),u=s.language;if("none"===u){var c=(/\.(\w+)$/.exec(o)||[,"none"])[1];u=e[c]||c}L.util.setLanguage(i,u),L.util.setLanguage(l,u);var d=L.plugins.autoloader;d&&d.loadLanguages(u),function(e,t,n){var a=new XMLHttpRequest;a.open("GET",e,!0),a.onreadystatechange=function(){4==a.readyState&&(a.status<400&&a.responseText?t(a.responseText):a.status>=400?n("✖ Error "+a.status+" while fetching file: "+a.statusText):n("✖ Error: File does not exist or is empty"))},a.send(null)}(o,(function(e){l.setAttribute(t,a);var n=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var n=Number(t[1]),a=t[2],r=t[3];return a?r?[n,Number(r)]:[n,void 0]:[n,n]}}(l.getAttribute("data-range"));if(n){var r=e.split(/\r\n?|\n/g),s=n[0],o=null==n[1]?r.length:n[1];s<0&&(s+=r.length),s=Math.max(0,Math.min(s-1,r.length)),o<0&&(o+=r.length),o=Math.max(0,Math.min(o,r.length)),e=r.slice(s,o).join("\n"),l.hasAttribute("data-start")||l.setAttribute("data-start",String(s+1))}i.textContent=e,L.highlightElement(i)}),(function(e){l.setAttribute(t,"failed"),i.textContent=e}))}})),L.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(r),a=0;t=n[a++];)L.highlightElement(t)}};var s=!1;L.fileHighlight=function(){s||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),s=!0),L.plugins.fileHighlight.highlight.apply(this,arguments)}}}();const M=window.Prism,{highlight:P}=M,{html:z}=M.languages;var O=c({components:{"v-code":E},setup(){const e=p([{com:v,code:x,is_hide:!0},{com:F,code:"<template>\n    <div id=\"abc\">\n        <button v-for=\"p in ['tl', 'tc', 'tr', 'ml', 'mc', 'mr', 'bl', 'bc', 'br']\" :key=\"p\" @click=\"click(p)\"><v-icon name=\"home\"></v-icon>Position [{{ p }}]</button>\n        <br />\n        <button v-for=\"p in ['info', 'warn', 'success', 'error', '']\" :key=\"p\" @click=\"clicks(p)\"><v-icon name=\"home\"></v-icon>Type [{{ p }}]</button>\n        <button @click=\"msgtoast('hello world')\">Default</button>\n        <button\n            @click=\"\n                msgtoast({\n                    content: 'callback',\n                    close_callback: () => {\n                        msgtoast('what are you doing?');\n                    }\n                })\n            \"\n        >\n            Callback\n        </button>\n    </div>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent, inject } from 'vue';\nimport { types } from 'goapp';\nexport default defineComponent({\n    components: {},\n    setup(props, context) {\n        const msgtoast = inject('Message.Toast') as types.MessageToast;\n        let tps = '';\n        return {\n            click: (p: string) => {\n                let param: types.ConfigToast = {};\n                param.direction = p;\n                param.content = 'Hello world!!!';\n                param.type = tps;\n                if (Math.random() > 0.8)\n                    param.close_callback = () => {\n                        msgtoast('callback ...');\n                    };\n                msgtoast(param);\n            },\n            clicks: (t: string) => {\n                tps = t;\n            },\n            msgtoast\n        };\n    }\n});\n<\/script>",is_hide:!0}]);return{components:e,inputHTML:x,highlight:P,html:z,htmlString:e=>P(e,z,"html"),view_source:t=>{e[t].is_hide=!e[t].is_hide}}}});const H={style:{margin:"10px"}},D={class:"component"},N={class:"code"},I=["onClick"];O.render=function(l,o,u,c,d,g){const p=e("v-code");return t(),n("div",H,[(t(!0),n(a,null,r(l.components,((e,a)=>(t(),n("div",{class:"model",key:a},[i("div",D,[(t(),h(m(e.com)))]),i("div",N,[i("button",{class:"btnSource",onClick:e=>l.view_source(a)},"查看源码",8,I),f(s(p,{language:"html",html:l.htmlString(e.code)},null,8,["html"]),[[b,!e.is_hide]])])])))),128))])};export{O as default};