(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return i}),n.d(t,"rightToc",function(){return c}),n.d(t,"default",function(){return l});n(0);var o=n(125);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={title:"Philosophy"},c=[],p={rightToc:c},s="wrapper";function l(e){var t=e.components,n=r(e,["components"]);return Object(o.b)(s,a({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Components are immutable objects that specify how to configure views."),Object(o.b)("p",null,"A simple analogy is to think of a component as a stencil: a fixed description that can be used to ",Object(o.b)("em",{parentName:"p"},"paint")," a view but that is not a view itself. A component is often composed of other components, building up a component hierarchy that ",Object(o.b)("em",{parentName:"p"},"describes")," a user interface."),Object(o.b)("p",null,"Let's see some sample code for rendering an article in a news app:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-objectivec"}),"@implementation ArticleComponent\n\n+ (instancetype)newWithArticle:(ArticleModel *)article\n{\n  return [super newWithComponent:\n          [CKFlexboxComponent\n           newWithView:{}\n           size:{}\n           style:{\n             .direction = CKFlexboxDirectionVertical,\n           }\n           children:{\n             {[HeaderComponent newWithArticle:article]},\n             {[MessageComponent newWithMessage:article.message]},\n             {[FooterComponent newWithFooter:article.footer]},\n           }];\n}\n\n@end\n")),Object(o.b)("p",null,"Components have three characteristics:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Declarative"),": Instead of implementing ",Object(o.b)("inlineCode",{parentName:"p"},"-sizeThatFits:")," and ",Object(o.b)("inlineCode",{parentName:"p"},"-layoutSubviews"),' and positioning subviews manually, you declare the subcomponents of your component (here, we say "stack them vertically").')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Functional"),": Data flows in one direction. Methods take data models and return totally immutable components. When state changes, ComponentKit re-renders from the root and reconciles the two component trees from the top with as few changes to the view hierarchy as possible.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Composable"),": Here ",Object(o.b)("inlineCode",{parentName:"p"},"FooterComponent")," is used in an article, but it could be reused for other UI with a similar footer. Reusing it is a one-liner. ",Object(o.b)("inlineCode",{parentName:"p"},"CKFlexboxComponent")," is inspired by the ",Object(o.b)("a",a({parentName:"p"},{href:"http://www.w3.org/TR/css3-flexbox"}),"flexbox model")," of the web and can easily be used to implement many layouts."))))}l.isMDXComponent=!0}}]);