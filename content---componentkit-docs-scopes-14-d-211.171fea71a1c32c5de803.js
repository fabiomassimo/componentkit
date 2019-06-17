(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return p}),t.d(n,"rightToc",function(){return r}),t.d(n,"default",function(){return h});t(0);var o=t(125),i=t(126),a=t.n(i);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p={title:"Scopes"},r=[{value:"Defining a Scope",id:"defining-a-scope",children:[]},{value:"Scope collisions",id:"scope-collisions",children:[]}],l={rightToc:r},m="wrapper";function h(e){var n=e.components,t=c(e,["components"]);return Object(o.b)(m,s({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the following component hierarchy ComponentKit has no way to distinguish the three ",Object(o.b)("inlineCode",{parentName:"p"},"ListItem")," components:"),Object(o.b)("img",{src:a()("assets/tree.png"),width:"367",height:"124",alt:"Component Tree"}),Object(o.b)("p",null,"ComponentKit needs a way to uniquely identify each ",Object(o.b)("inlineCode",{parentName:"p"},"ListItem"),". Particularly as the component hierarchy is rebuilt over time:"),Object(o.b)("img",{src:a()("assets/tree-ids.png"),width:"367",height:"124",alt:"Component Tree with IDs"}),Object(o.b)("p",null,"Scopes give ComponentKit the ability to assign any component with a persistent identity: ",Object(o.b)("em",{parentName:"p"},"regardless of how many times a component is created it will always acquire the same scope"),". This behavior is required in the following three situations:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If a component has ",Object(o.b)("a",s({parentName:"li"},{href:"/state"}),"state")," it must also define a scope"),Object(o.b)("li",{parentName:"ol"},"If a component has a ",Object(o.b)("a",s({parentName:"li"},{href:"/component-controllers"}),"component controller")," it must also define a scope"),Object(o.b)("li",{parentName:"ol"},"If a component has children that themselves have state or component controllers it must also define a scope when encountering a scope collision")),Object(o.b)("h2",null,Object(o.b)("a",s({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"defining-a-scope"})),Object(o.b)("a",s({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#defining-a-scope"}),"#"),"Defining a Scope"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponentScope")," to define a component scope at the top of a component's ",Object(o.b)("inlineCode",{parentName:"p"},"+new")," method."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-objectivec"}),"@implementation ListItemComponent\n\n+ (instancetype)newWithListItem:(ListItem *)listItem\n{\n  // Defines a scope that is uniquely identified by the component's class (i.e. ListItemComponent) and the provided identifier.\n  CKComponentScope scope(self, listItem.uniqueID);\n  const auto c = /* ... */;\n  return [super newWithComponent:c];\n}\n\n@end\n")),Object(o.b)("p",null,"If a component does not have a model object with a unique identifier a scope can be defined without one:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-objectivec"}),"@implementation ListComponent\n\n+ (instancetype)newWithList:(List *)list\n{\n  // Defines a scope that is uniquely identified by the component's class (i.e. ListComponent).\n  CKComponentScope scope(self);\n  const auto c = /* ... */;\n  return [super newWithComponent:c];\n}\n\n@end\n")),Object(o.b)("p",null,"Omitting the scope's identifier is safe as long as there will not be more than one sibling component of the same type. The example above assumes ",Object(o.b)("inlineCode",{parentName:"p"},"ListComponent"),"'s parent will only ever render one ",Object(o.b)("inlineCode",{parentName:"p"},"ListComponent"),". If that assumption no longer holds then the parent component must specify a unique identifier for scopes of its children. This is when ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponentKey")," is helpful:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-objectivec"}),"@implementation ListsComponent\n\n+ (instancetype)newWithList:(NSArray<List *> *)lists\n{\n  // Defines a scope that is uniquely identified by the component's class (i.e. ListComponent).\n  CKComponentScope scope(self);\n  const auto c = /* ... */;\n  return\n  [super\n   newWithListComponents:\n   CK::map(lists, ^(List *list) {\n     CKComponentKey key(@([lists indexOfObject:list]));\n     return [ListComponent newWithList:list];\n   })];\n}\n\n@end\n")),Object(o.b)("p",null,"ComponentKit's keys are an ",Object(o.b)("a",s({parentName:"p"},{href:"https://facebook.github.io/react/docs/lists-and-keys.html#keys"}),"analogous to the concept of the same name in React"),". They allow the parent component to implicitly provide child components with a unique identifiers ",Object(o.b)("em",{parentName:"p"},"based on its knowledge of the component hierarchy"),". In the ",Object(o.b)("inlineCode",{parentName:"p"},"ListsComponent")," example each ",Object(o.b)("inlineCode",{parentName:"p"},"ListComponent")," is rendered in the order provided. Since the ",Object(o.b)("inlineCode",{parentName:"p"},"ListsComponent")," knows how it will display each ",Object(o.b)("inlineCode",{parentName:"p"},"ListComponent")," it can provide a key based on each ",Object(o.b)("inlineCode",{parentName:"p"},"list"),"'s order in the ",Object(o.b)("inlineCode",{parentName:"p"},"lists")," array."),Object(o.b)("h2",null,Object(o.b)("a",s({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"scope-collisions"})),Object(o.b)("a",s({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#scope-collisions"}),"#"),"Scope collisions"),Object(o.b)("p",null,"Scopes must be uniquely identifiable otherwise ComponentKit will be unable to reliably associate a component with its scope. When ComponentKit cannot uniquely identify two or more scopes then it has encountered a ",Object(o.b)("strong",{parentName:"p"},"scope collision")," and an assertion is raised. To avoid a scope collision either:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Define the scope of a component encountering a scope collision with a unique identifier"),Object(o.b)("li",{parentName:"ol"},"Define a key in a parent component when creating children encountering a scope collision")),Object(o.b)("p",null,"The assertion raised by ComponentKit highlights where in the component hierarchy a scope collision is detected. Information provided by the framework includes the name of the component encountering the scope collision and where the component lives in the component hierarchy."))}h.isMDXComponent=!0}}]);