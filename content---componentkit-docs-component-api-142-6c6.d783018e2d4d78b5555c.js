(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return r}),n.d(t,"rightToc",function(){return s}),n.d(t,"default",function(){return m});n(0);var a=n(131);n(132);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r={id:"component-api",title:"Component API"},s=[],i={rightToc:s},p="wrapper";function m(e){var t=e.components,n=c(e,["components"]);return Object(a.a)(p,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"The base ",Object(a.a)("inlineCode",{parentName:"p"},"CKComponent")," class is quite simple. Leaving out a few methods, it looks like this:"),Object(a.a)("pre",{className:"language-objectivec"},Object(a.a)("code",o({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(a.a)("span",o({parentName:"code"},{className:"token keyword"}),"@interface")," CKComponent ",Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),":")," NSObject\n\n",Object(a.a)("span",o({parentName:"code"},{className:"token comment"}),"/** Returns a new component. */"),"\n",Object(a.a)("span",o({parentName:"code"},{className:"token operator"}),"+")," ",Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"instancetype",Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"newWithView",Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(a.a)("span",o({parentName:"code"},{className:"token keyword"}),"const")," CKComponentViewConfiguration ",Object(a.a)("span",o({parentName:"code"},{className:"token operator"}),"&"),Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"view\n                       size",Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(a.a)("span",o({parentName:"code"},{className:"token keyword"}),"const")," CKComponentSize ",Object(a.a)("span",o({parentName:"code"},{className:"token operator"}),"&"),Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"size",Object(a.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(a.a)("span",o({parentName:"code"},{className:"token keyword"}),"@end"),"\n")),Object(a.a)("p",null,"Notes:"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"A component is totally immutable. For example, there is no ",Object(a.a)("inlineCode",{parentName:"li"},"addSubcomponent:")," method."),Object(a.a)("li",{parentName:"ul"},"A component can be created on any thread. This helps keep all sizing and construction operations off the main thread."),Object(a.a)("li",{parentName:"ul"},"The Objective-C idiom ",Object(a.a)("inlineCode",{parentName:"li"},"+newWith...")," is used for instantiation instead of the more typical ",Object(a.a)("inlineCode",{parentName:"li"},"+alloc/-initWith.."),". This is mainly for brevity. Getting rid of noise is important to keep components code readable.")))}m.isMDXComponent=!0}}]);