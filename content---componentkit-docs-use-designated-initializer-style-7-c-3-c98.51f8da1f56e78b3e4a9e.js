(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{115:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",function(){return s}),n.d(a,"rightToc",function(){return p}),n.d(a,"default",function(){return N});n(0);var t=n(133);n(134);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s={title:"Use Designated Initializer Style"},p=[],m={rightToc:p},r="wrapper";function N(e){var a=e.components,n=o(e,["components"]);return Object(t.a)(r,c({},m,n,{components:a,mdxType:"MDXLayout"}),Object(t.a)("p",null,"Use ",Object(t.a)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Struct_(C_programming_language)#Struct_initialization"}),"designated initializer style")," when initializing a structure."),Object(t.a)("p",null,"For example, consider ",Object(t.a)("inlineCode",{parentName:"p"},"CKStaticLayoutComponent")," which accepts a collection of children. Each ",Object(t.a)("inlineCode",{parentName:"p"},"CKStaticLayoutComponentChild")," is a structure that consists of a ",Object(t.a)("inlineCode",{parentName:"p"},"position"),", a ",Object(t.a)("inlineCode",{parentName:"p"},"component"),", and a ",Object(t.a)("inlineCode",{parentName:"p"},"size"),". Instead of initializing contiguous members:"),Object(t.a)("pre",{className:"language-objectivec"},Object(t.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"redhighlight",redhighlight:!0}),"CKComponent ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"*"),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"const")," component ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKStaticLayoutComponent\n newWithChildren",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     leftComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     centerComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"100"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     rightComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),"\n")),Object(t.a)("p",null,"You should initialize each member by name:"),Object(t.a)("pre",{className:"language-objectivec"},Object(t.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),"CKComponent ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"*"),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"const")," component ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKStaticLayoutComponent\n newWithChildren",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"component ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," leftComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"size ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"position ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"component ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," centerComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"size ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"position ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"100"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"component ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," rightComponent",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"size ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"50"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),"\n")),Object(t.a)("p",null,"Omitted members will be initialized to 0. In the example above the first child explicitly omits ",Object(t.a)("inlineCode",{parentName:"p"},"position")," since it will be initialized to ",Object(t.a)("inlineCode",{parentName:"p"},"{0, 0}")," by default."))}N.isMDXComponent=!0}}]);