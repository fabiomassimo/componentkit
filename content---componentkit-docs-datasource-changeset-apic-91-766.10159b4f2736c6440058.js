(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",function(){return s}),t.d(a,"rightToc",function(){return p}),t.d(a,"default",function(){return i});t(0);var n=t(133);t(134);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s={title:"Changeset API"},p=[{value:"Order in which changes are applied.",id:"order-in-which-changes-are-applied",children:[]}],r={rightToc:p},m="wrapper";function i(e){var a=e.components,t=o(e,["components"]);return Object(n.a)(m,c({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.a)("p",null,'Changesets are how you interact with the datasource. They allow you to "enqueue" sets of commands to be processed by the datasource.'),Object(n.a)("p",null,"These commands can be seen as a sentence with three parts :"),Object(n.a)("ol",null,Object(n.a)("li",{parentName:"ol"},Object(n.a)("strong",{parentName:"li"},"action")," (insert/delete/udpate for items, insert/delete for sections)"),Object(n.a)("li",{parentName:"ol"},Object(n.a)("strong",{parentName:"li"},"position specifier")," (indexPath for items, index for sections)"),Object(n.a)("li",{parentName:"ol"},Object(n.a)("strong",{parentName:"li"},"model")," (that will be used to compute the components)")),Object(n.a)("p",null,"Here is some sample code, showing how to create a changeset - As you can see changesets are a c++ structure."),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),"CKArrayControllerInputItems items",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),'// Insert an item at index 0 in section 0 and compute the component for the model @"Hello"'),"\nitems",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"insert"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'@"Hello"'),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),'// Update the item at index 1 in section 0 and update it with the component computed for the model @"World"'),"\nitems",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"update"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"1"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'@"World"'),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// Delete the item at index 2 in section 0, no need for a model here :)"),"\nitems",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"delete"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"2"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\nSections sections",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\nsections",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"insert"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\nsections",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"insert"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"2"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\nsections",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"insert"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"3"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"datasource enqueueChangeset",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"sections",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," items",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(n.a)("p",null,"Changes can also be created from ",Object(n.a)("inlineCode",{parentName:"p"},"NSIndexPaths")," :"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),"CKArrayControllerInputItems items",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\nNSIndexPath ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"*"),"insertionIndexPath ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"NSIndexPath indexPathForItem",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0")," inSection",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\nitems",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"insert"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"insertionIndexPath",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'@"Hello"'),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(n.a)("p",null,"You can even get rid of the brackets around the ",Object(n.a)("inlineCode",{parentName:"p"},"NSIndexPath"),", thanks to ",Object(n.a)("a",c({parentName:"p"},{href:"http://en.cppreference.com/w/cpp/language/converting_constructor"}),"C++ converting constructors")," :"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),"CKArrayControllerInputItems items",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\nNSIndexPath ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"*"),"insertionIndexPath ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"NSIndexPath indexPathForItem",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0")," inSection",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\nitems",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"insert"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"insertionIndexPath",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token string"}),'@"Hello"'),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(n.a)("h2",null,Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"order-in-which-changes-are-applied"})),Object(n.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#order-in-which-changes-are-applied"}),"#"),"Order in which changes are applied."),Object(n.a)("div",{class:"note-important"},Object(n.a)("p",null,"The order in which commands are added to the changeset doesn't define the order in which those changes will eventually be applied to the `UICollectionView` (same for `UITableViews`).")),Object(n.a)("p",null,"Be wary of this fact while computing a changeset, the conventions defined in Cocoa for batch updates are as follows:"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Deletions and Updates are applied first using the current index space.")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Insertions are then applied in the post deletions index space (updates obviously won't modify the index space)."))),Object(n.a)("p",null,"You can consult the ",Object(n.a)("a",c({parentName:"p"},{href:"https://developer.apple.com/library/prerelease/ios/documentation/UserExperience/Conceptual/TableView_iPhone/ManageInsertDeleteRow/ManageInsertDeleteRow.html"}),"following section")," in the Apple documentation to get more information."))}i.isMDXComponent=!0}}]);