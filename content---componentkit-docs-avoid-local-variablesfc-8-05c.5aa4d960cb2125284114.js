(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{55:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",function(){return s}),t.d(a,"rightToc",function(){return p}),t.d(a,"default",function(){return i});t(0);var n=t(131);t(132);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s={title:"Avoid Local Variables, Use Const"},p=[],r={rightToc:p},m="wrapper";function i(e){var a=e.components,t=c(e,["components"]);return Object(n.a)(m,o({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.a)("p",null,"In your ",Object(n.a)("inlineCode",{parentName:"p"},"+new")," method:"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Prefer inlining")," what would otherwise be a single-use temporary local variable."),Object(n.a)("li",{parentName:"ul"},"If inlining isn't possible due to necessary references or code duplication concerns, ",Object(n.a)("strong",{parentName:"li"},"add ",Object(n.a)("inlineCode",{parentName:"strong"},"const"))," to the\nright place to make sure the temporary local variable isn't assignable by  (E.g. ",Object(n.a)("inlineCode",{parentName:"li"},"NSString *const foo"),"\ninstead of ",Object(n.a)("inlineCode",{parentName:"li"},"NSString *foo"),").")),Object(n.a)("p",null,"We avoid reassigning variables because:"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"It makes code harder to read and modify")," since dependencies between local variables are hard to visualize."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"It encourages mutating local variables after assignment")," which hides surprising side-effects and changes.")),Object(n.a)("p",null,"Here is a really tangled-up ",Object(n.a)("inlineCode",{parentName:"p"},"+new")," method that is hard to read, understand, or modify:"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",o({parentName:"pre"},{className:"language-objectivec",metastring:"redhighlight",redhighlight:!0})," ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"+")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"instancetype",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"newWithArticle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"ArticleModel ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"*"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"article options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"ArticleOptions",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"options\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n    NSAttributedString ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"*"),"timestamp ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"CKDateFormatter stringFromDate",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"article",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"creationTime",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n    HeaderComponent ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"*"),"header ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"="),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"HeaderComponent\n     newWithTitle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"article",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"title\n     subtitle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"timestamp",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token comment"}),"// LOGIC ERROR! timestamp has already been used by header, but no one warns us."),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"options ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"&")," ArticleOptionHideTimestamp",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n      timestamp ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"=")," nil",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n    MessageOptions messageOptions ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",o({parentName:"code"},{className:"token number"}),"0"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"options ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"&")," ArticleOptionShortMessage",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n      messageOptions ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"|"),Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"=")," MessageOptionShort",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n    MessageComponent ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"*"),"message ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"="),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"MessageComponent\n     newWithArticle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"article\n     options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"messageOptions",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n    FooterComponent ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"*"),"footer ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"FooterComponent newWithArticle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"article",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token comment"}),"// SUBOPTIMAL: why did we create the header only to throw it away?"),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token comment"}),"// Also, notice how far this is from where we created the header."),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"options ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"&")," ArticleOptionOmitHeader",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n      header ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"=")," nil",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n    ",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"return")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"self")," newWithComponent",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"\n            ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"CKStackLayoutComponent\n             newWithChildren",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n               header",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),","),"\n               message",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),","),"\n               footer\n             ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(n.a)("p",null,"Instead, split out logic into separate components:"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",o({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"+")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"instancetype",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"newWithArticle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"ArticleModel ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"*"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"article options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"ArticleOptions",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"options\n",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token comment"}),"// Note how there are NO local variables here at all."),"\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"return")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"self")," newWithComponent",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"\n          ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"CKStackLayoutComponent\n           newWithChildren",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n             ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"ArticleHeaderComponent\n              newWithArticle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"article\n              options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",o({parentName:"code"},{className:"token function"}),"headerOptions"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),","),"\n             ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"ArticleMessageComponent\n              newWithArticle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"article\n              options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",o({parentName:"code"},{className:"token function"}),"messageOptions"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),","),"\n             ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"["),"FooterComponent newWithArticle",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),":"),"article",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),"\n           ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(n.a)("span",o({parentName:"code"},{className:"token comment"}),"// Note how this is a pure function mapping from one options bitmask to another."),"\n",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"static")," ArticleHeaderComponentOptions ",Object(n.a)("span",o({parentName:"code"},{className:"token function"}),"headerOptions"),Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"ArticleOptions options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ArticleHeaderComponentOptions options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"options ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"&")," ArticleOptionOmitHeader",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n    options ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"|"),Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"=")," ArticleHeaderComponentOptionOmit",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"options ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"&")," ArticleOptionHideTimestamp",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n    options ",Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"|"),Object(n.a)("span",o({parentName:"code"},{className:"token operator"}),"=")," ArticleHeaderComponentOptionHideTimestamp",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(n.a)("span",o({parentName:"code"},{className:"token keyword"}),"return")," options",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.a)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}i.isMDXComponent=!0}}]);