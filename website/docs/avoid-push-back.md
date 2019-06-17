---
title: Avoid push_back
---

Avoid doing this:

```objectivec-redhighlight
std::vector<CKStackLayoutComponentChild> children;
if (someSetting) {
  children.push_back({[HeaderComponent newWithModel:model});
}
if (fooComponent) {
  children.push_back({fooComponent});
}
return [super newWithComponent:
        [CKStackLayoutComponent
         newWithView:{}
         size:{}
         style:{}
         children:children]];
```

There are a few reasons why:

- There are good reasons to [avoid mutable local variables](./avoid-local-variables) in general.
- `nil` children are automatically dropped by `CKStackLayoutComponent`, so there's no need to check for `nil` before adding to the list of children.
- Conditionals are best done inline; or, encapsulate the checks in a new `CKCompositeComponent` that renders to `nil` if the conditional fails.

Instead, do this:

```objectivec
return [super newWithComponent:
        [CKStackLayoutComponent
         newWithView:{}
         size:{}
         style:{}
         children:{
           {someSetting ? [HeaderComponent newWithModel:model] : nil},
           {fooComponent},
         }]];
```
