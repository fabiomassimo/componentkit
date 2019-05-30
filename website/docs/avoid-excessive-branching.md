---
title: Avoid Excessive Branching
---

Avoid excessive branching in component code; it hurts readability.

```objectivec redhighlight
+ (instancetype)newWithArticle:(Article *)article
{
  CKComponent *headerComponent;
  if (article.featured) {
    headerComponent = [FeaturedArticleHeaderComponent newWithArticle:article];
  } else {
    headerComponent = [RegularArticleHeaderComponent newWithArticle:article];
  }

  UIEdgeInsets insets = {10, 10, 10, 10};
  CGFloat imageSize = 20;
  if (iPad) {
    insets = {20, 20, 20, 20};
    imageSize = 40;
  }

  return [super newWithComponent:
          [CKStackLayoutComponent
           newWithView:{}
           size:{}
           style:{}
           children:{
             {headerComponent},
             {[ArticleTextComponent
               newWithArticle:article
               insets:insets
               imageSize:imageSize]},
           }]]
}
```

If you find yourself branching too much, consider separating your component into smaller components and composing them.

```objectivec highlight
+ (instancetype)newWithArticle:(Article *)article
{
  return [super newWithComponent:
          [CKStackLayoutComponent
           newWithView:{}
           size:{}
           style:{}
           children:{
             // Encapsulates the choice of Featured or Regular header:
             {[ArticleHeaderComponent newWithArticle:article]},
             // Encapsulates insets and image size:
             {[ArticleBodyComponent newWithArticle:article]},
           }]]
}
```
