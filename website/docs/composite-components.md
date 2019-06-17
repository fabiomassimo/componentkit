---
id: composite-components
title: Composite Components
---

Avoid subclassing `CKComponent` directly. Instead, subclass `CKCompositeComponent`.

A "composite component" simply wraps another component, hiding its implementation details from the outside world.

For example, imagine you're implementing a button to share an article in a newsreader app. You could implement `ShareButtonComponent` as a composite component that wraps a `CKButtonComponent`:

```objectivec
@implementation ShareButtonComponent

+ (instancetype)newWithArticle:(ArticleModel *)article
{
  return [super newWithComponent:
          [CKButtonComponent
           newWithAction:@selector(shareTapped)
           options:{...}]];
}

- (void)shareTapped
{
  // Share the article
}

@end
```

[Never Subclass Components](./never-subclass-components) contains more information about why you should favor subclassing `CKCompositeComponent` whenever posible.
