---
title: Avoid Single Use Constants
---

It's common for iOS code to use constants for layout metrics:

```objectivec-redhighlight
static const CGFloat kLeftMargin = 10.0;
static const CGFloat kTopMargin = 10.0;
static const CGFloat kRightMargin = 10.0;
static const CGFloat kSpacingBetweenLines = 5.0;
```

**Only use constants if they are actually used in multiple places.**

Since in ComponentKit there is no duplication between `sizeThatFits:` and `layoutSubviews`, you should rarely need to use constants for metrics. This is much more readable:

```objectivec
[CKInsetComponent
 newWithInsets:{.left = 10, .top = 10, .right = 10}
 component:
 [CKFlexboxComponent
  newWithStyle:{.spacing = 5}
  ...
```
