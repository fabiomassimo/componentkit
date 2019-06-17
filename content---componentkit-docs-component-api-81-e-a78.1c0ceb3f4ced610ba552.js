(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return a}),t.d(n,"rightToc",function(){return c}),t.d(n,"default",function(){return s});t(0);var o=t(125);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a={id:"component-api",title:"Component API"},c=[],l={rightToc:c},p="wrapper";function s(e){var n=e.components,t=r(e,["components"]);return Object(o.b)(p,i({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The base ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponent")," class is quite simple. Leaving out a few methods, it looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-objectivec"}),"@interface CKComponent : NSObject\n\n/** Returns a new component. */\n+ (instancetype)newWithView:(const CKComponentViewConfiguration &)view\n                       size:(const CKComponentSize &)size;\n\n@end\n")),Object(o.b)("p",null,"Notes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A component is totally immutable. For example, there is no ",Object(o.b)("inlineCode",{parentName:"li"},"addSubcomponent:")," method."),Object(o.b)("li",{parentName:"ul"},"A component can be created on any thread. This helps keep all sizing and construction operations off the main thread."),Object(o.b)("li",{parentName:"ul"},"The Objective-C idiom ",Object(o.b)("inlineCode",{parentName:"li"},"+newWith...")," is used for instantiation instead of the more typical ",Object(o.b)("inlineCode",{parentName:"li"},"+alloc/-initWith.."),". This is mainly for brevity. Getting rid of noise is important to keep components code readable.")))}s.isMDXComponent=!0}}]);