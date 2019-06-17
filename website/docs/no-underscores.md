---
title: No Underscores
---
Don't underscore-prefix private helper methods or `static` C functions.

```objectivec-redhighlight
- (void)_buttonAction:(CKComponent *)sender
{
  _logEvent(@"button tapped");
}
```

[Subclassing components is discouraged](/never-subclass-components), so there's no need to worry about distinguishing public and private methods or colliding with methods in the superclass.

```objectivec
- (void)buttonAction:(CKComponent *)sender
{
  logEvent(@"button tapped");
}
```
