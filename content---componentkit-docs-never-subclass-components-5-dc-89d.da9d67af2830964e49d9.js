(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return i}),t.d(n,"rightToc",function(){return l}),t.d(n,"default",function(){return p});t(0);var o=t(133);t(134);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={title:"Never Subclass Components"},l=[],s={rightToc:l},c="wrapper";function p(e){var n=e.components,t=a(e,["components"]);return Object(o.a)(c,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Only subclass ",Object(o.a)("inlineCode",{parentName:"p"},"CKCompositeComponent"),". (If you need to perform advanced layout by overriding ",Object(o.a)("inlineCode",{parentName:"p"},"computeLayoutThatFits:")," you may subclass ",Object(o.a)("inlineCode",{parentName:"p"},"CKComponent")," directly, but this should be rare.)"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Subclassing is difficult to reason about.")," There is no ",Object(o.a)("inlineCode",{parentName:"li"},"final")," keyword in Objective-C, so ",Object(o.a)("em",{parentName:"li"},"any")," method can be overridden in a subclass. It's impossible to read a superclass and know what is and isn't overridden somewhere."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Subclassing makes refactoring the superclass difficult.")," If the superclass is refactored to rename or remove a method, every subclass must be inspected to see if they were overriding the method. This is often skipped or forgotten, leading to silent bugs.")),Object(o.a)("p",null,"For example, imagine that we're adding a new \"highlighted\" card component. It should look just like a regular card component, but have a yellow background color. Don't do this:"),Object(o.a)("p",null,"{: .redhighlight }\n{% highlight objc %}\n@implementation HighlightedCardComponent : CardComponent"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"(UIColor *)backgroundColor\n{\n// This breaks silently if the superclass method is renamed.\nreturn ","[UIColor yellowColor]",";\n}\n@end\n{% endhighlight %}")),Object(o.a)("p",null,"Instead, make ",Object(o.a)("inlineCode",{parentName:"p"},"CardComponent")," take the color as a parameter and then subclass ",Object(o.a)("inlineCode",{parentName:"p"},"CKCompositeComponent")," to create your highlighted component:"),Object(o.a)("p",null,"{% highlight objc %}\n@implementation HighlightedCardComponent : CKCompositeComponent"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"(instancetype)newWithArticle:(CKArticle *)article\n{\nreturn [super newWithComponent:\n[CardComponent\nnewWithArticle:article\nbackgroundColor:","[UIColor yellowColor]","]];\n}\n@end\n{% endhighlight %}")))}p.isMDXComponent=!0}}]);