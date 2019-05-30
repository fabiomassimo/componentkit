---
title: Components Can't Be Delegates Directly
id: components-cant-be-delegates
---

TL;DR: You can use `CKComponentDelegateAttribute` to configure a delegate for a view to proxy delegate methods back to your component.

Components are **short-lived**, and their lifecycle is not under your control. Thus they should not be delegates or `NSNotification` observers.

An example: imagine you're showing a `UIAlertView`. You might be tempted to make the component the delegate:

```objectivec redhighlight
@implementation AlertDisplayComponent <UIAlertViewDelegate>
{
  UIAlertView *_alertView;
}

- (void)didTapDisplayAlert
{
  _alertView = [[UIAlertView alloc] initWithTitle:@"Are you sure?"
                                          message:nil
                                         delegate:self ...];
  [_alertView show];
}

- (void)alertView:(UIAlertView *)alert didDismissWithButtonIndex:(NSInteger)buttonIndex
{
  [self updateState:...];
}
@end
```

But if the component hierarchy is regenerated for any reason, the original component will deallocate and the alert view will be left with no delegate.

Instead, use `CKComponentController`. Component controllers are long-lived; they persist and keep track of each updated version of your component. You can [learn more about component controllers](component-controllers.html); here's an example of their use:

```objectivec highlight

@interface AlertDisplayComponentController : CKComponentController <UIAlertViewDelegate>
@end

@implementation AlertDisplayComponentController
{
  UIAlertView *_alertView;
}

- (void)didTapDisplayAlert
{
  _alertView = [[UIAlertView alloc] initWithTitle:@"Are you sure?"
                                          message:nil
                                         delegate:self ...];
  [_alertView show];
}

- (void)alertView:(UIAlertView *)alert didDismissWithButtonIndex:(NSInteger)buttonIndex
{
  [self.component updateState:...];
}
@end
```

Your other option is to use `CKComponentDelegateAttribute`, which will proxy delegate callbacks into the component responder chain.

```objectivec highlight
[CKComponent
 newWithView:{[UIScrollView class], {
   CKComponentDelegateAttribute(@selector(setDelegate:), {
   @selector(scrollViewDidScroll:),
   @selector(scrollViewDidZoom:),
   })
 }}
 size:{}] ...
````

 Then in your component, you can implement the delegate methods `-scrollViewDidScroll:` and `-scrollViewDidZoom:`.
