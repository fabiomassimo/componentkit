---
title: Break Out Composite Components
---
Avoid creating sub-components in `static` helper functions.

```objectivec redhighlight
+ (instancetype)newWithTitle:(NSString *)title
                    subtitle:(NSString *)subtitle
{
  return [super newWithComponent:
          [CKStackLayoutComponent
           newWithView:{}
           size:{}
           style:{.alignItems = CKStackLayoutAlignItemsStretch}
           children:{
             {textComponent(title, [UIFont boldSystemFontOfSize:17])},
             {textComponent(subtitle, [UIFont systemFontOfSize:15])},
           }]]
}

static CKComponent *textComponent(NSString *text, UIFont *font)
{
  return [CKLabelComponent
          newWithLabelAttributes:{
            .string = text,
            .font = font,
            .color = [UIColor grayColor],
            .maximumNumberOfLines = 1,
            .lineBreakMode = NSLineBreakByTruncatingTail,
          }
          viewAttributes:{}
          size:{}];
}
```

Instead, break out a separate `CKCompositeComponent`. This keeps components readable and allows more use of named parameters.

```objectivec highlight
+ (instancetype)newWithTitle:(NSString *)title
                    subtitle:(NSString *)subtitle
{
  return [super newWithComponent:
          [CKStackLayoutComponent
           newWithView:{}
           size:{}
           style:{.alignItems = CKStackLayoutAlignItemsStretch}
           children:{
             {[AETextComponent
               newWithString:title
               font:[UIFont boldSystemFontOfSize:17]]},
             {[AETextComponent
               newWithString:subtitle
               font:[UIFont systemFontOfSize:15]]},
           }]]
}
```
