---
title: Avoid Width 100%
id: avoid-width-100-percent
---

Avoid doing this:

```objectivec-redhighlight
@implementation ArtistComponent
+ (instancetype)newWithArtist:(ArtistModel *)artist
{
  return [super newWithComponent:
          [CKComponent
           newWithView:{[ArtistView class], ...}
           size:{.width = Percent(1.0)}]];
}
@end
```

Instead, favor an approach using `size:{}` and requiring the parent of `ArtistComponent` to specify its width. For example, if the parent is a `CKStackLayoutComponent`, use `CKStackLayoutAlignItemsStretch` to stretch the component to full width.

This keeps components reusable in situations where you don't want them to be 100% of the parent's width.
