(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{53:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",function(){return s}),n.d(a,"rightToc",function(){return p}),n.d(a,"default",function(){return u});n(0);var t=n(133);n(134);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s={title:"Avoid push_back"},p=[],m={rightToc:p},r="wrapper";function u(e){var a=e.components,n=o(e,["components"]);return Object(t.a)(r,c({},m,n,{components:a,mdxType:"MDXLayout"}),Object(t.a)("p",null,"Avoid doing this:"),Object(t.a)("pre",{className:"language-objectivec"},Object(t.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"redhighlight",redhighlight:!0}),"std",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"vector",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),"CKStackLayoutComponentChild",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">")," children",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"someSetting",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  children",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"push_back"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"HeaderComponent newWithModel",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"model",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"fooComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  children",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"push_back"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"fooComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"super")," newWithComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n        ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKStackLayoutComponent\n         newWithView",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n         size",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n         style",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n         children",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"children",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(t.a)("p",null,"There are a few reasons why:"),Object(t.a)("ul",null,Object(t.a)("li",{parentName:"ul"},"There are good reasons to ",Object(t.a)("a",c({parentName:"li"},{href:"avoid-local-variables.html"}),"avoid mutable local variables")," in general."),Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"nil")," children are automatically dropped by ",Object(t.a)("inlineCode",{parentName:"li"},"CKStackLayoutComponent"),", so there's no need to check for ",Object(t.a)("inlineCode",{parentName:"li"},"nil")," before adding to the list of children."),Object(t.a)("li",{parentName:"ul"},"Conditionals are best done inline; or, encapsulate the checks in a new ",Object(t.a)("inlineCode",{parentName:"li"},"CKCompositeComponent")," that renders to ",Object(t.a)("inlineCode",{parentName:"li"},"nil")," if the conditional fails.")),Object(t.a)("p",null,"Instead, do this:"),Object(t.a)("pre",{className:"language-objectivec"},Object(t.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"super")," newWithComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n        ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKStackLayoutComponent\n         newWithView",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n         size",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n         style",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n         children",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n           ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"someSetting ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"?")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"HeaderComponent newWithModel",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"model",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":")," nil",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n           ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"fooComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n         ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")))}u.isMDXComponent=!0}}]);