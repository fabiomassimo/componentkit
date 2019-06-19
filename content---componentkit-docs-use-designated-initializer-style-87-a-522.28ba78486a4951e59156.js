(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",function(){return a}),t.d(e,"rightToc",function(){return c}),t.d(e,"default",function(){return b});t(0);var i=t(125);function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function r(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var a={title:"Use Designated Initializer Style"},c=[],p={rightToc:c},l="wrapper";function b(n){var e=n.components,t=r(n,["components"]);return Object(i.b)(l,o({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use ",Object(i.b)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Struct_(C_programming_language)#Struct_initialization"}),"designated initializer style")," when initializing a structure."),Object(i.b)("p",null,"For example, consider ",Object(i.b)("inlineCode",{parentName:"p"},"CKStaticLayoutComponent")," which accepts a collection of children. Each ",Object(i.b)("inlineCode",{parentName:"p"},"CKStaticLayoutComponentChild")," is a structure that consists of a ",Object(i.b)("inlineCode",{parentName:"p"},"position"),", a ",Object(i.b)("inlineCode",{parentName:"p"},"component"),", and a ",Object(i.b)("inlineCode",{parentName:"p"},"size"),". Instead of initializing contiguous members:"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"CKComponent *const component =\n[CKStaticLayoutComponent\n newWithChildren:{\n   {\n     {0, 0},\n     leftComponent,\n     {50, 50},\n   },\n   {\n     {50, 0},\n     centerComponent,\n     {50, 50},\n   },\n   {\n     {100, 0},\n     rightComponent,\n     {50, 50},\n   },\n }]\n")),Object(i.b)("p",null,"You should initialize each member by name:"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-objectivec"}),"CKComponent *const component =\n[CKStaticLayoutComponent\n newWithChildren:{\n   {\n     .component = leftComponent,\n     .size = {50, 50},\n   },\n   {\n     .position = {50, 0},\n     .component = centerComponent,\n     .size = {50, 50},\n   },\n   {\n     .position = {100, 0},\n     .component = rightComponent,\n     .size = {50, 50},\n   },\n }]\n")),Object(i.b)("p",null,"Omitted members will be initialized to 0. In the example above the first child explicitly omits ",Object(i.b)("inlineCode",{parentName:"p"},"position")," since it will be initialized to ",Object(i.b)("inlineCode",{parentName:"p"},"{0, 0}")," by default."))}b.isMDXComponent=!0}}]);