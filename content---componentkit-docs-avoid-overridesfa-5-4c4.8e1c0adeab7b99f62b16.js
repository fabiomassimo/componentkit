(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return a}),n.d(t,"rightToc",function(){return l}),n.d(t,"default",function(){return p});n(0);var o=n(127);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a={title:"Avoid Overrides"},l=[],c={rightToc:l},s="wrapper";function p(e){var t=e.components,n=i(e,["components"]);return Object(o.b)(s,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Method overrides make components more difficult to use."),Object(o.b)("p",null,"Imagine you're adding an optional text color parameter to a component. You might be tempted to add an override:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec",metastring:"redhighlight",redhighlight:!0}),"@interface ArticleTextComponent\n+ (instancetype)newWithText:(NSString *)text;\n+ (instancetype)newWithText:(NSString *)text textColor:(UIColor *)textColor;\n@end\n")),Object(o.b)("p",null,"But someone will later add another override:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec",metastring:"redhighlight",redhighlight:!0}),"  @interface ArticleTextComponent\n  + (instancetype)newWithText:(NSString *)text;\n  + (instancetype)newWithText:(NSString *)text textColor:(UIColor *)textColor;\n  + (instancetype)newWithText:(NSString *)text backgroundColor:(UIColor *)textColor;\n  + (instancetype)newWithText:(NSString *)text\n                    textColor:(UIColor *)textColor\n              backgroundColor:(UIColor *)backgroundColor;\n@end\n")),Object(o.b)("p",null,"The component is splintering. It's not obvious which override to use and we need a lot of boilerplate behind the scenes to redirect to the designated initializer."),Object(o.b)("p",null,"Instead, always expose all parameters in a single designated initializer and document which are optional."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),"@interface ArticleTextComponent\n/**\n @param text The text to render in the component.\n @param textColor Optional; pass nil for the default.\n @param backgroundColor Optional; pass nil for the default.\n */\n+ (instancetype)newWithText:(NSString *)text\n                  textColor:(UIColor *)textColor\n            backgroundColor:(UIColor *)backgroundColor;\n@end\n")),Object(o.b)("p",null,'If there are too many parameters, a useful pattern is a "style struct". For example, see ',Object(o.b)("inlineCode",{parentName:"p"},"CKTextComponent"),":"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),"struct CKTextKitAttributes {\n  NSAttributedString *attributedString;\n  NSAttributedString *truncationAttributedString;\n  NSCharacterSet *avoidTailTruncationSet;\n  NSLineBreakMode lineBreakMode;\n  NSUInteger maximumNumberOfLines;\n  CGSize shadowOffset;\n  UIColor *shadowColor;\n  CGFloat shadowOpacity;\n  CGFloat shadowRadius;\n};\n\n@interface CKTextComponent : CKComponent\n+ (instancetype)newWithTextAttributes:(const CKTextKitAttributes &)attributes\n                       viewAttributes:(const CKViewComponentAttributeValueMap &)viewAttributes\n                 accessibilityContext:(const CKTextComponentAccessibilityContext &)accessibilityContext;\n@end\n")),Object(o.b)("p",null,"Using ",Object(o.b)("a",r({parentName:"p"},{href:"http://en.cppreference.com/w/cpp/language/aggregate_initialization"}),"aggregate initialization"),", it's easy to initialize the style struct with only some parameters:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec",metastring:"highlight",highlight:!0}),"{\n  .shadowColor = [UIColor blackColor],\n  .maximumNumberOfLines = 1,\n}\n")))}p.isMDXComponent=!0}}]);