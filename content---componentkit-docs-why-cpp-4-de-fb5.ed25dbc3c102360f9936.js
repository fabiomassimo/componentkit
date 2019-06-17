(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return r}),n.d(t,"rightToc",function(){return c}),n.d(t,"default",function(){return h});n(0);var a=n(125);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r={title:"Why C++",id:"why-cpp"},c=[{value:"Aggregate Initialization",id:"aggregate-initialization",children:[]},{value:"Type Safety",id:"type-safety",children:[]},{value:"Efficiency",id:"efficiency",children:[]},{value:"Nil Safety",id:"nil-safety",children:[]}],l={rightToc:c},p="wrapper";function h(e){var t=e.components,n=o(e,["components"]);return Object(a.b)(p,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Using Objective-C++ in ComponentKit offers some serious wins in syntax. However this does mean you need to touch a limited subset of C++ to work with ComponentKit.  Don't worry, it's not too bad!"),Object(a.b)("p",null,"Here again is a generic article component:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-objectivec"}),"[CKStackLayoutComponent\n newWithStyle:{\n  .direction = CKStackLayoutComponentDirectionVertical,\n }\n children:{\n   {[HeaderComponent newWithArticle:article]},\n   {[MessageComponent newWithArticle:article]},\n   {[FooterComponent newWithArticle:article]},\n }];\n")),Object(a.b)("p",null,"Here's what it might look like in pure Objective-C:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"[CKStackLayoutComponent newWithStyle:[[CKStackLayoutComponentStyle alloc] initWithDirection:CKStackLayoutComponentDirectionVertical\n                                                                             justifyContent:CKStackLayoutComponentJustifyContentStart\n                                                                                 alignItems:CKStackLayoutComponentAlignItemsStart\n                                                                                    spacing:0]\n                            children:@[\n  [CKStackLayoutComponentChild childWithComponent:[HeaderComponent newWithArticle:article]\n                                       topPadding:0\n                                      leftPadding:0\n                                    bottomPadding:0],\n  [CKStackLayoutComponentChild childWithComponent:[MessageComponent newWithArticle:article]\n                                       topPadding:0\n                                      leftPadding:0\n                                    bottomPadding:0],\n  [CKStackLayoutComponentChild childWithComponent:[FooterComponent newWithArticle:article]\n                                       topPadding:0\n                                      leftPadding:0\n                                    bottomPadding:0]\n]];\n")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"aggregate-initialization"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#aggregate-initialization"}),"#"),"Aggregate Initialization"),Object(a.b)("p",null,"C and C++ have ",Object(a.b)("a",i({parentName:"p"},{href:"http://en.cppreference.com/w/cpp/language/aggregate_initialization"}),"aggregate initialization"),", which allows initializing a struct with very terse syntax. We need Objective-C++ to take advantage of this syntax because, unlike Objective-C, Objective-C++ allows putting Objective-C objects in structs when ARC is enabled."),Object(a.b)("p",null,"You can be as expressive as you like; you can use ",Object(a.b)("inlineCode",{parentName:"p"},"{ .name = value, ... }")," or just ",Object(a.b)("inlineCode",{parentName:"p"},"{ value1, value2, ... }"),". (The latter form is shorter, but fragile to argument reordering and sometimes harder to read.) Note that you can easily omit fields; in the C++ example above, the padding-related values are omitted and default to 0."),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"type-safety"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#type-safety"}),"#"),"Type Safety"),Object(a.b)("p",null,"In the previous example the C++ would fail to compile if we inserted a child of the wrong type, while the Objective-C example compiles with any type in the array—even an ",Object(a.b)("inlineCode",{parentName:"p"},"NSString *"),"."),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"efficiency"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#efficiency"}),"#"),"Efficiency"),Object(a.b)("p",null,"Being fully declarative and immutable means you use a ",Object(a.b)("em",{parentName:"p"},"lot")," of objects. C++ objects are far more efficient to create because they can be stack-allocated, ",Object(a.b)("a",i({parentName:"p"},{href:"http://stackoverflow.com/questions/4303513/push-back-vs-emplace-back"}),"emplaced"),", ",Object(a.b)("a",i({parentName:"p"},{href:"http://www.cprogramming.com/c++11/rvalue-references-and-move-semantics-in-c++11.html"}),"moved"),", etc."),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"nil-safety"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#nil-safety"}),"#"),"Nil Safety"),Object(a.b)("p",null,"Objective-C containers throw if you insert ",Object(a.b)("inlineCode",{parentName:"p"},"nil")," elements in them but C++ containers do not. Relaxing this constraint makes it convenient to write hierarchies where any individual child may be nil:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-objectivec"}),"  children:{\n    headerComponent,\n    messageComponent,\n    attachmentComponent,\n    footerComponent\n  }\n")),Object(a.b)("p",null,"The alternative would be a bunch of conditionals in Objective-C:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"NSMutableArray *children = [NSMutableArray array];\nif (headerComponent) {\n  [children addObject:headerComponent];\n}\nif (messageComponent) {\n  [children addObject:messageComponent];\n}\nif (attachmentComponent) {\n  [children addObject:attachmentComponent];\n}\nif (footerComponent) {\n  [children addObject:footerComponent];\n}\n")))}h.isMDXComponent=!0}}]);