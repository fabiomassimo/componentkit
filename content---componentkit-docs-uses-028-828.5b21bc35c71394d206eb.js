(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return o}),n.d(t,"rightToc",function(){return c}),n.d(t,"default",function(){return p});n(0);var a=n(127);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o={title:"Uses"},c=[{value:"Strengths",id:"strengths",children:[]},{value:"Considerations",id:"considerations",children:[]}],l={rightToc:c},s="wrapper";function p(e){var t=e.components,n=r(e,["components"]);return Object(a.b)(s,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ComponentKit excels at powering list views with complex content. It was built to power Facebook's News Feed on iOS."),Object(a.b)("h3",null,Object(a.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"strengths"})),Object(a.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#strengths"}),"#"),"Strengths"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Simple and Declarative: Just like React itself. ",Object(a.b)("a",i({parentName:"li"},{href:"http://facebook.github.io/react/docs/why-react.html"}),"Why React?")," sums up these benefits."),Object(a.b)("li",{parentName:"ul"},"Scroll Performance: All layout is performed on a background thread, ensuring the main thread isn't tied up measuring text. 60FPS is a breeze even for deep, complex layouts like Facebook's News Feed."),Object(a.b)("li",{parentName:"ul"},"View Recycling: By requiring all view configurations to be expressed declaratively, ComponentKit makes error-free view recycling automatic."),Object(a.b)("li",{parentName:"ul"},"Composability: By encouraging heavy use of composition, it's possible to build UIs as complex as News Feed without any single component exceeding ",Object(a.b)("a",i({parentName:"li"},{href:"under-300-lines.html"}),"300 lines of code"),".")),Object(a.b)("h3",null,Object(a.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"considerations"})),Object(a.b)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#considerations"}),"#"),"Considerations"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Interfaces that aren't lists or tables aren't ideally suited to ComponentKit since it is optimized to work well with a  ",Object(a.b)("inlineCode",{parentName:"li"},"UICollectionView"),"."),Object(a.b)("li",{parentName:"ul"},"ComponentKit is fully native and compiled. ",Object(a.b)("a",i({parentName:"li"},{href:"https://code.facebook.com/videos/786462671439502/react-js-conf-2015-keynote-introducing-react-native-/"}),"React Native")," offers an alternative based on JavaScriptCore and React, including features like instant reload with no recompilation."),Object(a.b)("li",{parentName:"ul"},"ComponentKit is built on Objective-C++. There is no easy way to interoperate with ",Object(a.b)("a",i({parentName:"li"},{href:"https://developer.apple.com/swift/"}),"Swift")," since Swift cannot bridge to C++. Experimental projects like ",Object(a.b)("a",i({parentName:"li"},{href:"https://github.com/joshaber/Few.swift"}),"Few.swift")," or ",Object(a.b)("a",i({parentName:"li"},{href:"https://github.com/BendingSpoons/katana-swift/"}),"Katana")," are exploring how React's concepts could be applied in Swift.")))}p.isMDXComponent=!0}}]);