(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{61:function(t,n,e){"use strict";e.r(n),e.d(n,"frontMatter",function(){return a}),e.d(n,"rightToc",function(){return c}),e.d(n,"default",function(){return p});e(0);var o=e(133);e(134);function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function i(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var a={title:"Avoid Single Use Constants"},c=[],s={rightToc:c},l="wrapper";function p(t){var n=t.components,e=i(t,["components"]);return Object(o.a)(l,r({},s,e,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"It's common for iOS code to use constants for layout metrics:"),Object(o.a)("p",null,"{: .redhighlight }\n{% highlight objc %}\nstatic const CGFloat kLeftMargin = 10.0;\nstatic const CGFloat kTopMargin = 10.0;\nstatic const CGFloat kRightMargin = 10.0;\nstatic const CGFloat kSpacingBetweenLines = 5.0;\n{% endhighlight %}"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Only use constants if they are actually used in multiple places.")),Object(o.a)("p",null,"Since in ComponentKit there is no duplication between ",Object(o.a)("inlineCode",{parentName:"p"},"sizeThatFits:")," and ",Object(o.a)("inlineCode",{parentName:"p"},"layoutSubviews"),", you should rarely need to use constants for metrics. This is much more readable:"),Object(o.a)("p",null,"{% highlight objc %}\n[CKInsetComponent\nnewWithInsets:{.left = 10, .top = 10, .right = 10}\ncomponent:\n[CKFlexboxComponent\nnewWithStyle:{.spacing = 5}\n...\n{% endhighlight %}"))}p.isMDXComponent=!0}}]);