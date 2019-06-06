(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{125:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",function(){return s}),t.d(a,"rightToc",function(){return p}),t.d(a,"default",function(){return m});t(0);var n=t(131);t(132);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s={id:"views",title:"Views"},p=[{value:"Primitive Arguments",id:"primitive-arguments",children:[]},{value:"Viewless Components",id:"viewless-components",children:[]},{value:"Advanced Views",id:"advanced-views",children:[]}],i={rightToc:p},r="wrapper";function m(e){var a=e.components,t=o(e,["components"]);return Object(n.a)(r,c({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.a)("p",null,"Create components using the ",Object(n.a)("inlineCode",{parentName:"p"},"newWithView:size:")," class method:"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"+")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"instancetype",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"newWithView",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"const")," CKComponentViewConfiguration ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"&"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"view\n                       size",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"const")," CKComponentSize ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"&"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"size",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(n.a)("p",null,"It's important to note that you don't pass a ",Object(n.a)("inlineCode",{parentName:"p"},"UIView")," directly, but a ",Object(n.a)("inlineCode",{parentName:"p"},"CKComponentViewConfiguration"),". What's that?"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"struct")," CKComponentViewConfiguration ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  CKComponentViewClass viewClass",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n  std",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"unordered_map",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),"CKComponentViewAttribute",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," id",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),">")," attributes",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(n.a)("p",null,"The first field is a view class. Ignore ",Object(n.a)("inlineCode",{parentName:"p"},"CKComponentViewClass")," for now — in most cases you just pass a class like ",Object(n.a)("inlineCode",{parentName:"p"},"[UIImageView class]")," or ",Object(n.a)("inlineCode",{parentName:"p"},"[UIButton class]"),"."),Object(n.a)("p",null,"The second field holds a map of attributes to values: font, color, background image, and so forth. Again, ignore ",Object(n.a)("inlineCode",{parentName:"p"},"CKComponentViewAttribute")," for now; you can usually use a ",Object(n.a)("inlineCode",{parentName:"p"},"SEL")," as the attribute."),Object(n.a)("p",null,"Let's put one together:"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKComponent \n newWithView",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n   ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"UIImageView class",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n   ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n     ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"@selector"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"setImage",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," image",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n     ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"@selector"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"setContentMode",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"@"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"UIViewContentModeCenter",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// Wrapping into an NSNumber"),"\n   ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n size",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"image",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"size",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"width",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," image",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"size",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"height",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(n.a)("p",null,"That's all there is to it. ComponentKit does this for us:"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"Automatically creates or reuses a ",Object(n.a)("inlineCode",{parentName:"li"},"UIImageView")," when the component is mounted"),Object(n.a)("li",{parentName:"ul"},"Automatically calls ",Object(n.a)("inlineCode",{parentName:"li"},"setImage:")," and ",Object(n.a)("inlineCode",{parentName:"li"},"setContentMode:")," with the given values"),Object(n.a)("li",{parentName:"ul"},"Skips calling ",Object(n.a)("inlineCode",{parentName:"li"},"setImage:")," or ",Object(n.a)("inlineCode",{parentName:"li"},"setContentMode:")," if the value is unchanged between two updates — the most common case when updating a tree.")),Object(n.a)("h2",null,Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"primitive-arguments"})),Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#primitive-arguments"}),"#"),"Primitive Arguments"),Object(n.a)("p",null,"The values in the map are of type ",Object(n.a)("inlineCode",{parentName:"p"},"id"),", so if you want to pass in primitive types like ",Object(n.a)("inlineCode",{parentName:"p"},"BOOL"),", you have to wrap them into an ",Object(n.a)("inlineCode",{parentName:"p"},"NSValue")," object using e.g. ",Object(n.a)("inlineCode",{parentName:"p"},"@(value)")," and ComponentKit will unwrap them."),Object(n.a)("h2",null,Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"viewless-components"})),Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#viewless-components"}),"#"),"Viewless Components"),Object(n.a)("p",null,"Often there exist logical components that don't need a corresponding view in the view hierarchy. For example a ",Object(n.a)("inlineCode",{parentName:"p"},"CKStackLayoutComponent")," often doesn't need to have a view; it only needs to position various subviews inside a designated area. In such situations, just pass ",Object(n.a)("inlineCode",{parentName:"p"},"{}")," for the view configuration and no view is created. For example:"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKComponent newWithView",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," size",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),"\n")),Object(n.a)("p",null,"(You can also just use ",Object(n.a)("inlineCode",{parentName:"p"},"+new")," directly, which uses this as the default.)"),Object(n.a)("h2",null,Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"advanced-views"})),Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#advanced-views"}),"#"),"Advanced Views"),Object(n.a)("p",null,"This is sufficient for most cases, but there is considerably more power when you need it. See ",Object(n.a)("a",c({parentName:"p"},{href:"advanced-views.html"}),"Advanced Views")," if you want to learn more."))}m.isMDXComponent=!0}}]);