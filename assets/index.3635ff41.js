import{f as l,u as e,g as a,h as o,r as t,o as s,j as r,F as n,k as u,l as c,t as d,m as i,w as b,n as m,c as p,p as h}from"./vendor.af158fea.js";import{k as V}from"./index.0eedf391.js";var g=l({components:{},setup(l,t){e(V);const s=a("Message.Toast");let r="";const n=o(["tiny","small","medium","large","huge"]),u=o(["igloohome","info","success","warn","error"]),c=o("Hello"),d=o(0);return{click:l=>{let e={};e.direction=l,e.content="Hello world!!!",e.type=r,Math.random()>.8&&(e.close_callback=()=>{s("callback ...")}),s(e)},clicks:l=>{r=l},msgtoast:s,size:n,color:u,inputValueString:c,inputValueNumber:d}}});const k={id:"abc"},f=["onClick"],w=c("br",null,null,-1),y=["onClick"],v=c("br",null,null,-1),_=c("div",{style:{clear:"both"}},null,-1),C=c("div",{style:{clear:"both"}},null,-1),x=c("div",{style:{clear:"both"}},null,-1),N={style:{clear:"both"}},S=m(" Https://");g.render=function(l,e,a,o,V,g){const L=t("v-icon"),U=t("v-input");return s(),r("div",k,[(s(),r(n,null,u(["tl","tc","tr","ml","mc","mr","bl","bc","br"],(e=>c("button",{key:e,onClick:a=>l.click(e)},[i(L,{name:"home"}),m("Position ["+d(e)+"]",1)],8,f))),64)),w,(s(),r(n,null,u(["info","warn","success","error",""],(e=>c("button",{key:e,onClick:a=>l.clicks(e)},[i(L,{name:"home"}),m("Type ["+d(e)+"]",1)],8,y))),64)),c("button",{onClick:e[0]||(e[0]=e=>l.msgtoast("hello world"))},"Default"),c("button",{onClick:e[1]||(e[1]=e=>{l.msgtoast({content:"callback",close_callback:()=>{l.msgtoast("what are you doing?")}})})}," Callback "),v,_,(s(!0),r(n,null,u(l.size,(l=>(s(),p(U,{key:l,class:h(l),label:l,widths:["30%","70%"]},null,8,["class","label"])))),128)),C,(s(!0),r(n,null,u(l.color,(l=>(s(),p(U,{key:l,class:h(l),label:l,widths:["30%","70%"]},null,8,["class","label"])))),128)),x,(s(!0),r(n,null,u(l.color,(l=>(s(),p(U,{key:l,class:h(l),borderd:"",label:l,widths:["30%","70%"]},null,8,["class","label"])))),128)),c("div",N,d(l.inputValueNumber)+"-"+d(l.inputValueString),1),i(U,{label:"deafult",placeholder:"默认宽度各占50%",readonly:""}),i(U,{label:"reverse",placeholder:"反转",disabled:""}),i(U,{label:"borderd",placeholder:"设置边框",modelValue:l.inputValueString,"onUpdate:modelValue":e[2]||(e[2]=e=>l.inputValueString=e),borderd:""},null,8,["modelValue"]),i(U,{label:"borderd",placeholder:"设置边框",modelValue:l.inputValueString,"onUpdate:modelValue":e[3]||(e[3]=e=>l.inputValueString=e),reverse:"",borderd:""},null,8,["modelValue"]),i(U,{label:"Auto Focus",class:"igloohome",modelValue:l.inputValueNumber,"onUpdate:modelValue":e[4]||(e[4]=e=>l.inputValueNumber=e),borderd:"",focus:""},null,8,["modelValue"]),i(U,{label:"ClearAble",class:"igloohome",modelValue:l.inputValueNumber,"onUpdate:modelValue":e[5]||(e[5]=e=>l.inputValueNumber=e),borderd:"",clearable:""},null,8,["modelValue"]),i(U,{style:{width:"100%"},type:"date",label:"自定义Label,Input样式",label_align:"right",label_color:"#fff",label_bg_color:"#f3c",input_color:"#f3c",input_bg_color:"#3fc",widths:["60%","40%"]}),i(U,{style:{width:"100%"},widths:["calc(100% - 50px)","50px"],placeholder:"自定义Label插槽",borderd:"",reverse:""},{label:b((()=>[i(L,{name:"search"})])),_:1},8,["widths"]),i(U,{style:{width:"100%"},widths:["80px","calc(100% - 80px)"],class:"info",placeholder:"自定义Label插槽",borderd:""},{label:b((()=>[i(L,{name:"home"}),S])),_:1},8,["widths"]),i(U,{style:{width:"100%"},widths:["0","100%"],class:"info",placeholder:"隐藏Label,将其宽度设置为0",borderd:""})])};export{g as default};