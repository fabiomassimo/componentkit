(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{57:function(t,n,e){"use strict";e.r(n),e.d(n,"frontMatter",function(){return a}),e.d(n,"rightToc",function(){return s}),e.d(n,"default",function(){return p});e(0);var o=e(125);function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function i(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var a={title:"Break Out Composite Components"},s=[],l={rightToc:s},c="wrapper";function p(t){var n=t.components,e=i(t,["components"]);return Object(o.b)(c,r({},l,e,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Avoid creating sub-components in ",Object(o.b)("inlineCode",{parentName:"p"},"static")," helper functions."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"+ (instancetype)newWithTitle:(NSString *)title\n                    subtitle:(NSString *)subtitle\n{\n  return [super newWithComponent:\n          [CKStackLayoutComponent\n           newWithView:{}\n           size:{}\n           style:{.alignItems = CKStackLayoutAlignItemsStretch}\n           children:{\n             {textComponent(title, [UIFont boldSystemFontOfSize:17])},\n             {textComponent(subtitle, [UIFont systemFontOfSize:15])},\n           }]]\n}\n\nstatic CKComponent *textComponent(NSString *text, UIFont *font)\n{\n  return [CKLabelComponent\n          newWithLabelAttributes:{\n            .string = text,\n            .font = font,\n            .color = [UIColor grayColor],\n            .maximumNumberOfLines = 1,\n            .lineBreakMode = NSLineBreakByTruncatingTail,\n          }\n          viewAttributes:{}\n          size:{}];\n}\n")),Object(o.b)("p",null,"Instead, break out a separate ",Object(o.b)("inlineCode",{parentName:"p"},"CKCompositeComponent"),". This keeps components readable and allows more use of named parameters."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec"}),"+ (instancetype)newWithTitle:(NSString *)title\n                    subtitle:(NSString *)subtitle\n{\n  return [super newWithComponent:\n          [CKStackLayoutComponent\n           newWithView:{}\n           size:{}\n           style:{.alignItems = CKStackLayoutAlignItemsStretch}\n           children:{\n             {[AETextComponent\n               newWithString:title\n               font:[UIFont boldSystemFontOfSize:17]]},\n             {[AETextComponent\n               newWithString:subtitle\n               font:[UIFont systemFontOfSize:15]]},\n           }]]\n}\n")))}p.isMDXComponent=!0}}]);