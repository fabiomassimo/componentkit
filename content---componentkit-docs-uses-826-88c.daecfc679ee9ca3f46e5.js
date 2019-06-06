(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return o}),a.d(t,"rightToc",function(){return c}),a.d(t,"default",function(){return p});a(0);var n=a(131);a(132);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o={title:"Uses"},c=[{value:"Strengths",id:"strengths",children:[]},{value:"Considerations",id:"considerations",children:[]}],l={rightToc:c},s="wrapper";function p(e){var t=e.components,a=r(e,["components"]);return Object(n.a)(s,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.a)("p",null,"ComponentKit excels at powering list views with complex content. It was built to power Facebook's News Feed on iOS."),Object(n.a)("h3",null,Object(n.a)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"strengths"})),Object(n.a)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#strengths"}),"#"),"Strengths"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"Simple and Declarative: Just like React itself. ",Object(n.a)("a",i({parentName:"li"},{href:"http://facebook.github.io/react/docs/why-react.html"}),"Why React?")," sums up these benefits."),Object(n.a)("li",{parentName:"ul"},"Scroll Performance: All layout is performed on a background thread, ensuring the main thread isn't tied up measuring text. 60FPS is a breeze even for deep, complex layouts like Facebook's News Feed."),Object(n.a)("li",{parentName:"ul"},"View Recycling: By requiring all view configurations to be expressed declaratively, ComponentKit makes error-free view recycling automatic."),Object(n.a)("li",{parentName:"ul"},"Composability: By encouraging heavy use of composition, it's possible to build UIs as complex as News Feed without any single component exceeding ",Object(n.a)("a",i({parentName:"li"},{href:"under-300-lines.html"}),"300 lines of code"),".")),Object(n.a)("h3",null,Object(n.a)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"considerations"})),Object(n.a)("a",i({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#considerations"}),"#"),"Considerations"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"Interfaces that aren't lists or tables aren't ideally suited to ComponentKit since it is optimized to work well with a  ",Object(n.a)("inlineCode",{parentName:"li"},"UICollectionView"),"."),Object(n.a)("li",{parentName:"ul"},"ComponentKit is fully native and compiled. ",Object(n.a)("a",i({parentName:"li"},{href:"https://code.facebook.com/videos/786462671439502/react-js-conf-2015-keynote-introducing-react-native-/"}),"React Native")," offers an alternative based on JavaScriptCore and React, including features like instant reload with no recompilation."),Object(n.a)("li",{parentName:"ul"},"ComponentKit is built on Objective-C++. There is no easy way to interoperate with ",Object(n.a)("a",i({parentName:"li"},{href:"https://developer.apple.com/swift/"}),"Swift")," since Swift cannot bridge to C++. Experimental projects like ",Object(n.a)("a",i({parentName:"li"},{href:"https://github.com/joshaber/Few.swift"}),"Few.swift")," or ",Object(n.a)("a",i({parentName:"li"},{href:"https://github.com/BendingSpoons/katana-swift/"}),"Katana")," are exploring how React's concepts could be applied in Swift.")))}p.isMDXComponent=!0}}]);