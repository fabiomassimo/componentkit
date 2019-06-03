(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{87:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",function(){return p}),t.d(a,"rightToc",function(){return r}),t.d(a,"default",function(){return m});t(0);var n=t(133),o=(t(134),t(138));function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p={title:"Getting Started"},r=[],i={rightToc:r},l="wrapper";function m(e){var a=e.components,t=s(e,["components"]);return Object(n.a)(l,c({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.a)("p",null,"Let's get a sample app powered by ComponentKit up and running, then make some tweaks to experiment with how components work."),Object(n.a)("p",null,"Clone the Github repo, install carthage frameworks and then open the Xcode project."),Object(n.a)("p",null,'(You may need to install Carthage first, e.g. with "brew install carthage" on macOS.)'),Object(n.a)("pre",{className:"language-bash"},Object(n.a)("code",c({parentName:"pre"},{className:"language-bash"}),"$ ",Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"git")," clone https://github.com/facebook/componentkit\n$ ",Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"cd")," componentkit\n$ carthage checkout\n$ ",Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"cd")," Examples/WildeGuess/\n$ ",Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"open")," WildeGuess.xcodeproj\n")),Object(n.a)("p",null,"Run the project in the simulator to see a simple app that shows a list of quotes."),Object(n.a)("p",null,"Let's imagine we want to remove the white quote mark that's circled in this screenshot:"),Object(n.a)(o.a,{src:"assets/quote-before.png",width:"250",height:"431",alt:"FrostedQuoteComponent screenshot with quote mark circled",mdxType:"Image"}),Object(n.a)("p",null,"First we'll need to figure out which component we need to change. Pause the app in the debugger and execute the following command in lldb. This inserts special debug views in the hierarchy, as described in ",Object(n.a)("a",c({parentName:"p"},{href:"debugging.html"}),"Debugging"),"."),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"lldb",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",c({parentName:"code"},{className:"token function"}),"e")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.a)("span",c({parentName:"code"},{className:"token keyword"}),"void"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKComponentDebugController setDebugMode",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"YES",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),"\n")),Object(n.a)("p",null,"Then click the ",Object(n.a)("a",c({parentName:"p"},{href:"https://developer.apple.com/library/ios/recipes/xcode_help-debugger/using_view_debugger/using_view_debugger.html"}),"Debug View Hierarchy")," button in Xcode and browse through the view hierarchy:"),Object(n.a)(o.a,{src:"assets/debugger-frosted-quote.png",alt:"Debugger showing FrostedQuoteComponent",mdxType:"Image"}),Object(n.a)("p",null,"Aha! So we need to modify ",Object(n.a)("inlineCode",{parentName:"p"},"FrostedQuoteComponent"),". That file should make a few things clear:"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"It uses the ",Object(n.a)("inlineCode",{parentName:"li"},"LosAngeles")," background image."),Object(n.a)("li",{parentName:"ul"},"The content is inset by 20 points on the left and right, 70 points on the top, and 25 points on the bottom."),Object(n.a)("li",{parentName:"ul"},"The content is made up of two components stacked vertically: a ",Object(n.a)("inlineCode",{parentName:"li"},"CKLabelComponent")," with the quote, and a second ",Object(n.a)("inlineCode",{parentName:"li"},"CKLabelComponent")," with an end quote symbol.")),Object(n.a)("p",null,"The quote mark is created here:"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),'// A semi-transparent end quote (") symbol placed below the quote.'),"\n  ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKInsetComponent\n   ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),".")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"omitted",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"alignSelf ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," CKStackLayoutAlignSelfEnd",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token comment"}),"// Right aligned"),"\n",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(n.a)("p",null,"Delete everything (including the curly braces), so that the ",Object(n.a)("inlineCode",{parentName:"p"},"CKStackLayoutComponent")," only has a single child. Run the app again and the quote mark is gone!"),Object(n.a)(o.a,{src:"assets/quote-after.png",width:"250",height:"431",alt:"FrostedQuoteComponent screenshot with quote mark removed",mdxType:"Image"}),Object(n.a)("p",null,"Things look a little imbalanced now, though. There are 70 points of padding on top and only 25 points on bottom. Modify the\n",Object(n.a)("inlineCode",{parentName:"p"},"CKInsetComponent")," to change the bottom padding to be 70 points as well:"),Object(n.a)("pre",{className:"language-objectivec"},Object(n.a)("code",c({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"CKInsetComponent\n newWithInsets",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),":"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"top ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"70"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"bottom ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"70"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"left ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"20"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"right ",Object(n.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",c({parentName:"code"},{className:"token number"}),"20"),Object(n.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(n.a)("p",null,"Run the app once more. Now it looks a lot better:"),Object(n.a)(o.a,{src:"assets/quote-tweaked.png",width:"250",height:"431",alt:"FrostedQuoteComponent screenshot with spacing tweaked",mdxType:"Image"}),Object(n.a)("p",null,"Congratulations! You've done your first development with ComponentKit. Keep poking around the sample app to learn more, or start using it in your own apps."))}m.isMDXComponent=!0}}]);