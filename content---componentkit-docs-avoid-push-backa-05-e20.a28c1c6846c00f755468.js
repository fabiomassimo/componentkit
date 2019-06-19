(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{51:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return a}),t.d(n,"rightToc",function(){return l}),t.d(n,"default",function(){return b});t(0);var o=t(125);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a={title:"Avoid push_back"},l=[],c={rightToc:l},p="wrapper";function b(e){var n=e.components,t=i(e,["components"]);return Object(o.b)(p,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Avoid doing this:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"std::vector<CKStackLayoutComponentChild> children;\nif (someSetting) {\n  children.push_back({[HeaderComponent newWithModel:model});\n}\nif (fooComponent) {\n  children.push_back({fooComponent});\n}\nreturn [super newWithComponent:\n        [CKStackLayoutComponent\n         newWithView:{}\n         size:{}\n         style:{}\n         children:children]];\n")),Object(o.b)("p",null,"There are a few reasons why:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"There are good reasons to ",Object(o.b)("a",r({parentName:"li"},{href:"./avoid-local-variables"}),"avoid mutable local variables")," in general."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nil")," children are automatically dropped by ",Object(o.b)("inlineCode",{parentName:"li"},"CKStackLayoutComponent"),", so there's no need to check for ",Object(o.b)("inlineCode",{parentName:"li"},"nil")," before adding to the list of children."),Object(o.b)("li",{parentName:"ul"},"Conditionals are best done inline; or, encapsulate the checks in a new ",Object(o.b)("inlineCode",{parentName:"li"},"CKCompositeComponent")," that renders to ",Object(o.b)("inlineCode",{parentName:"li"},"nil")," if the conditional fails.")),Object(o.b)("p",null,"Instead, do this:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec"}),"return [super newWithComponent:\n        [CKStackLayoutComponent\n         newWithView:{}\n         size:{}\n         style:{}\n         children:{\n           {someSetting ? [HeaderComponent newWithModel:model] : nil},\n           {fooComponent},\n         }]];\n")))}b.isMDXComponent=!0}}]);