---
title: Check for Nil
---

Remember: **`+new` can always return nil**. ComponentKit adopts the convention that a component may return nil from `+new` to signal that it has no data to render.

This is important when you are implementing `+new`; you must check if `[super +new...]` returned nil before assigning to ivars.

```objectivec-redhighlight
@implementation MyComponent
{
  NSString *_name;
}

+ (instancetype)newWithName:(NSString *)name
{
  MyComponent *c = [super newWithComponent:...];
  c->_name = [name copy]; // Crashes if c is nil
  return c;
}
```

Instead:

```objectivec

+ (instancetype)newWithName:(NSString *)name
{
  MyComponent *c = [super newWithComponent:...];
  if (c) {
    c->_name = [name copy];
  }
  return c;
}
```

(This is somewhat analogous to the usual pattern for implementing `-init`, where you check if `[super init...]` returns nil.)
