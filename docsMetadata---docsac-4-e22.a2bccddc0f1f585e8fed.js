(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{46:function(e){e.exports={docs:{"avoid-excessive-branching":{title:"Avoid Excessive Branching",id:"avoid-excessive-branching",description:"Avoid excessive branching in component code; it hurts readability.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-excessive-branching.md",permalink:"/docs/avoid-excessive-branching",sidebar:"docs",category:"Best Practices",next:"check-for-nil",previous:"components-cant-be-delegates",previous_title:"Components Can't Be Delegates Directly",next_title:"Check for Nil"},"advanced-views":{title:"Advanced Views",id:"advanced-views",description:"Back in [Views](views.html) we glossed over `CKComponentViewClass` and `CKComponentViewAttribute`. But there's a surprising amount of power hiding here!",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/advanced-views.md",permalink:"/docs/advanced-views",sidebar:"docs",category:"Appendix",previous:"why-cpp",previous_title:"Why C++"},"avoid-overrides":{title:"Avoid Overrides",id:"avoid-overrides",description:"Method overrides make components more difficult to use.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-overrides.md",permalink:"/docs/avoid-overrides",sidebar:"docs",category:"Best Practices",next:"indentation",previous:"never-subclass-components",previous_title:"Never Subclass Components",next_title:"Indentation"},"avoid-push-back":{title:"Avoid push_back",id:"avoid-push-back",description:"Avoid doing this:",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-push-back.md",permalink:"/docs/avoid-push-back",sidebar:"docs",category:"Best Practices",next:"under-300-lines",previous:"check-for-nil",previous_title:"Check for Nil",next_title:"Under 300 Lines"},"avoid-single-use-constants":{title:"Avoid Single Use Constants",id:"avoid-single-use-constants",description:"It's common for iOS code to use constants for layout metrics:",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-single-use-constants.md",permalink:"/docs/avoid-single-use-constants",sidebar:"docs",category:"Best Practices",next:"no-underscores",previous:"avoid-local-variables",previous_title:"Avoid Local Variables, Use Const",next_title:"No Underscores"},actions:{title:"Actions",id:"actions",description:"Often child components must communicate back to their parents. For example, a button component may need to signal that it has been tapped. Component actions provide a way to do this.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/actions.md",permalink:"/docs/actions",sidebar:"docs",category:"Reference",next:"state",previous:"responder-chain",previous_title:"Responder Chain",next_title:"State"},"avoid-local-variables":{title:"Avoid Local Variables, Use Const",id:"avoid-local-variables",description:"In your `+new` method:",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-local-variables.md",permalink:"/docs/avoid-local-variables",sidebar:"docs",category:"Best Practices",next:"avoid-single-use-constants",previous:"indentation",previous_title:"Indentation",next_title:"Avoid Single Use Constants"},"component-api":{id:"component-api",title:"Component API",description:"The base `CKComponent` class is quite simple. Leaving out a few methods, it looks like this:",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/component-api.md",permalink:"/docs/component-api",sidebar:"docs",category:"Reference",next:"composite-components",previous:"uses",previous_title:"Uses",next_title:"Composite Components"},"check-for-nil":{title:"Check for Nil",id:"check-for-nil",description:"Remember: **`+new` can always return nil**. ComponentKit adopts the convention that a component may return nil from `+new` to signal that it has no data to render.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/check-for-nil.md",permalink:"/docs/check-for-nil",sidebar:"docs",category:"Best Practices",next:"avoid-push-back",previous:"avoid-excessive-branching",previous_title:"Avoid Excessive Branching",next_title:"Avoid push_back"},"avoid-width-100-percent":{title:"Avoid Width 100%",id:"avoid-width-100-percent",description:"Avoid doing this:",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-width-100-percent.md",permalink:"/docs/avoid-width-100-percent",sidebar:"docs",category:"Best Practices",next:"use-designated-initializer-style",previous:"under-300-lines",previous_title:"Under 300 Lines",next_title:"Use Designated Initializer Style"},"break-out-composites":{title:"Break Out Composite Components",id:"break-out-composites",description:"Avoid creating sub-components in `static` helper functions.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/break-out-composites.md",permalink:"/docs/break-out-composites",sidebar:"docs",category:"Best Practices",next:"keep-controller-in-component",previous:"use-designated-initializer-style",previous_title:"Use Designated Initializer Style",next_title:"Keep Controller in Component"},"composite-components":{id:"composite-components",title:"Composite Components",description:"Avoid subclassing `CKComponent` directly. Instead, subclass `CKCompositeComponent`.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/composite-components.md",permalink:"/docs/composite-components",sidebar:"docs",category:"Reference",next:"views",previous:"component-api",previous_title:"Component API",next_title:"Views"},"component-hosting-view":{title:"Component Hosting View",id:"component-hosting-view",description:"So you've created a component and now need some way to render it on screen. If your use case involves using components inside a `UICollectionView`, you should be using `CKCollectionViewDataSource`. However, there are some cases where you want to render a component standalone. `CKComponentHostingView` was built for this purpose.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/component-hosting-view.md",permalink:"/docs/component-hosting-view",sidebar:"docs",category:"Infrastructure",next:"why-cpp",previous:"keep-controller-in-component",previous_title:"Keep Controller in Component",next_title:"Why C++"},"component-controllers":{title:"Component Controllers",id:"component-controllers",description:"import Image from '../theme/components/Image.js'",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/component-controllers.md",permalink:"/docs/component-controllers",sidebar:"docs",category:"Reference",next:"lifecycle-methods",previous:"scopes",previous_title:"Scopes",next_title:"Lifecycle Methods"},"components-cant-be-delegates":{title:"Components Can't Be Delegates Directly",id:"components-cant-be-delegates",description:"TL;DR: You can use `CKComponentDelegateAttribute` to configure a delegate for a view to proxy delegate methods back to your component.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/components-cant-be-delegates.md",permalink:"/docs/components-cant-be-delegates",sidebar:"docs",category:"Best Practices",next:"avoid-excessive-branching",previous:"pass-in-immutable-objects",previous_title:"Pass in Immutable Objects",next_title:"Avoid Excessive Branching"},debugging:{title:"Debugging",id:"debugging",description:"When working with ComponentKit, you would generally uses generic views such as `UIButton`, `UIImageView`, etc. under the hood. Hence, when you run a command in the LLDB debugger like [Chisel's](http://www.github.com/facebook/chisel) `pviews` you'll see a generic view hierarchy with no information about components. The following is the output of running `pviews` for an application using ComponentKit.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/debugging.md",permalink:"/docs/debugging",sidebar:"docs",category:"Reference",next:"datasource-overview",previous:"animation",previous_title:"Animation",next_title:"Overview"},"datasource-changeset-api":{title:"Changeset API",id:"datasource-changeset-api",description:'Changesets are how you interact with the datasource. They allow you to "enqueue" sets of commands to be processed by the datasource.',source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-changeset-api.md",permalink:"/docs/datasource-changeset-api",sidebar:"docs",category:"Collection Views",next:"datasource-gotchas",previous:"datasource-basics",previous_title:"Basics",next_title:"Gotchas"},"datasource-basics":{title:"Basics",id:"datasource-basics",description:"In this section we will go through the steps to create a `UICollectionView` powered by components.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-basics.md",permalink:"/docs/datasource-basics",sidebar:"docs",category:"Collection Views",next:"datasource-changeset-api",previous:"datasource-overview",previous_title:"Overview",next_title:"Changeset API"},"datasource-overview":{title:"Overview",id:"datasource-overview",description:'import Image from "../theme/components/Image"',source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-overview.md",permalink:"/docs/datasource-overview",sidebar:"docs",category:"Collection Views",next:"datasource-basics",previous:"debugging",previous_title:"Debugging",next_title:"Basics"},indentation:{title:"Indentation",id:"indentation",description:"Because components are often deeply nested structures, it's rarely possible to fit them on one line. We've developed some best practices for indentation unique to Components code. These rules should generally *not* be applied to non-Components code.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/indentation.md",permalink:"/docs/indentation",sidebar:"docs",category:"Best Practices",next:"avoid-local-variables",previous:"avoid-overrides",previous_title:"Avoid Overrides",next_title:"Avoid Local Variables, Use Const"},"getting-started":{title:"Getting Started",id:"getting-started",description:"import Image from '../theme/components/Image.js'",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/getting-started.md",permalink:"/docs/getting-started",sidebar:"docs",category:"Getting Started",next:"philosophy",next_title:"Philosophy"},"datasource-gotchas":{title:"Gotchas",id:"datasource-gotchas",description:"## Don't forget the initial section",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-gotchas.md",permalink:"/docs/datasource-gotchas",sidebar:"docs",category:"Collection Views",next:"datasource-dive-deeper",previous:"datasource-changeset-api",previous_title:"Changeset API",next_title:"Dive Deeper"},"never-subclass-components":{title:"Never Subclass Components",id:"never-subclass-components",description:"Only subclass `CKCompositeComponent`. (If you need to perform advanced layout by overriding `computeLayoutThatFits:` you may subclass `CKComponent` directly, but this should be rare.)",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/never-subclass-components.md",permalink:"/docs/never-subclass-components",sidebar:"docs",category:"Best Practices",next:"avoid-overrides",previous:"datasource-dive-deeper",previous_title:"Dive Deeper",next_title:"Avoid Overrides"},"keep-controller-in-component":{title:"Keep Controller in Component",id:"keep-controller-in-component",description:"Avoid creating a separate file for component controllers.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/keep-controller-in-component.md",permalink:"/docs/keep-controller-in-component",sidebar:"docs",category:"Best Practices",next:"component-hosting-view",previous:"break-out-composites",previous_title:"Break Out Composite Components",next_title:"Component Hosting View"},"lifecycle-methods":{title:"Lifecycle Methods",id:"lifecycle-methods",description:"[Component controllers](component-controllers.html) expose lifecycle methods that allow you to perform custom operations as components mount, unmount, update, and acquire views.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/lifecycle-methods.md",permalink:"/docs/lifecycle-methods",sidebar:"docs",category:"Reference",next:"animation",previous:"component-controllers",previous_title:"Component Controllers",next_title:"Animation"},"no-side-effects":{title:"No Side Effects",id:"no-side-effects",description:"Your `+new` method should not modify any global variables or global state. This could result in a component returning different results for the same parameters, which would be strange.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/no-side-effects.md",permalink:"/docs/no-side-effects",sidebar:"docs",category:"Best Practices",next:"pass-in-immutable-objects",previous:"pass-in-actions",previous_title:"Pass in Actions",next_title:"Pass in Immutable Objects"},layout:{title:"Layout",id:"layout",description:"`UIView` instances store position and size in their `center` and `bounds` properties. As constraints change, Core Animation performs a layout pass to call `layoutSubviews`, asking views to update these properties on their subviews.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/layout.md",permalink:"/docs/layout"},"no-underscores":{title:"No Underscores",id:"no-underscores",description:"Don't underscore-prefix private helper methods or `static` C functions.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/no-underscores.md",permalink:"/docs/no-underscores",sidebar:"docs",category:"Best Practices",next:"pass-in-actions",previous:"avoid-single-use-constants",previous_title:"Avoid Single Use Constants",next_title:"Pass in Actions"},philosophy:{title:"Philosophy",id:"philosophy",description:"Components are immutable objects that specify how to configure views.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/philosophy.md",permalink:"/docs/philosophy",sidebar:"docs",category:"Getting Started",next:"uses",previous:"getting-started",previous_title:"Getting Started",next_title:"Uses"},"pass-in-immutable-objects":{title:"Pass in Immutable Objects",id:"pass-in-immutable-objects",description:"Objects passed into components should be immutable.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/pass-in-immutable-objects.md",permalink:"/docs/pass-in-immutable-objects",sidebar:"docs",category:"Best Practices",next:"components-cant-be-delegates",previous:"no-side-effects",previous_title:"No Side Effects",next_title:"Components Can't Be Delegates Directly"},"pass-in-actions":{title:"Pass in Actions",id:"pass-in-actions",description:"Follow this simple rule: Selectors should be implemented in the same file they are referenced.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/pass-in-actions.md",permalink:"/docs/pass-in-actions",sidebar:"docs",category:"Best Practices",next:"no-side-effects",previous:"no-underscores",previous_title:"No Underscores",next_title:"No Side Effects"},"under-300-lines":{title:"Under 300 Lines",id:"under-300-lines",description:"Long files are the enemy of maintainable code. Keep component files under 300 lines total. If you're tempted to go above that size, split it into separate `CKCompositeComponent` 's.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/under-300-lines.md",permalink:"/docs/under-300-lines",sidebar:"docs",category:"Best Practices",next:"avoid-width-100-percent",previous:"avoid-push-back",previous_title:"Avoid push_back",next_title:"Avoid Width 100%"},"responder-chain":{title:"Responder Chain",id:"responder-chain",description:"import Image from '../theme/components/Image.js'",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/responder-chain.md",permalink:"/docs/responder-chain",sidebar:"docs",category:"Reference",next:"actions",previous:"views",previous_title:"Views",next_title:"Actions"},"use-designated-initializer-style":{title:"Use Designated Initializer Style",id:"use-designated-initializer-style",description:"Use [designated initializer style][0] when initializing a structure.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/use-designated-initializer-style.md",permalink:"/docs/use-designated-initializer-style",sidebar:"docs",category:"Best Practices",next:"break-out-composites",previous:"avoid-width-100-percent",previous_title:"Avoid Width 100%",next_title:"Break Out Composite Components"},state:{title:"State",id:"state",description:"So far we've been loosely inspired by [React](http://facebook.github.io/react/). If you're familiar with React, you'll know that React components have two elements:",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/state.md",permalink:"/docs/state",sidebar:"docs",category:"Reference",next:"scopes",previous:"actions",previous_title:"Actions",next_title:"Scopes"},scopes:{title:"Scopes",id:"scopes",description:"import Image from '../theme/components/Image.js'",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/scopes.md",permalink:"/docs/scopes",sidebar:"docs",category:"Reference",next:"component-controllers",previous:"state",previous_title:"State",next_title:"Component Controllers"},views:{id:"views",title:"Views",description:"Create components using the `newWithView:size:` class method:",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/views.md",permalink:"/docs/views",sidebar:"docs",category:"Reference",next:"responder-chain",previous:"composite-components",previous_title:"Composite Components",next_title:"Responder Chain"},"fb/super-secret":{title:"Super Secet",id:"fb/super-secret",description:"This is very secret",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/fb/super-secret.md",permalink:"/docs/fb/super-secret"},uses:{title:"Uses",id:"uses",description:"ComponentKit excels at powering list views with complex content. It was built to power Facebook's News Feed on iOS.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/uses.md",permalink:"/docs/uses",sidebar:"docs",category:"Getting Started",next:"component-api",previous:"philosophy",previous_title:"Philosophy",next_title:"Component API"},"why-cpp":{title:"Why C++",id:"why-cpp",description:"Using Objective-C++ in ComponentKit offers some serious wins in syntax. However this does mean you need to touch a limited subset of C++ to work with ComponentKit.  Don't worry, it's not too bad!",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/why-cpp.md",permalink:"/docs/why-cpp",sidebar:"docs",category:"Appendix",next:"advanced-views",previous:"component-hosting-view",previous_title:"Component Hosting View",next_title:"Advanced Views"},animation:{title:"Animation",id:"animation",description:"ComponentKit exposes three ways to perform animations on a component.",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/animation.md",permalink:"/docs/animation",sidebar:"docs",category:"Reference",next:"debugging",previous:"lifecycle-methods",previous_title:"Lifecycle Methods",next_title:"Debugging"},"datasource-dive-deeper":{title:"Dive Deeper",id:"datasource-dive-deeper",description:"import Image from '../theme/components/Image.js'",source:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-dive-deeper.md",permalink:"/docs/datasource-dive-deeper",sidebar:"docs",category:"Collection Views",next:"never-subclass-components",previous:"datasource-gotchas",previous_title:"Gotchas",next_title:"Never Subclass Components"}},docsDir:"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs",docsSidebars:{docs:[{type:"category",label:"Getting Started",items:[{type:"doc",id:"getting-started"},{type:"doc",id:"philosophy"},{type:"doc",id:"uses"}]},{type:"category",label:"Reference",items:[{type:"doc",id:"component-api"},{type:"doc",id:"composite-components"},{type:"doc",id:"views"},{type:"doc",id:"responder-chain"},{type:"doc",id:"actions"},{type:"doc",id:"state"},{type:"doc",id:"scopes"},{type:"doc",id:"component-controllers"},{type:"doc",id:"lifecycle-methods"},{type:"doc",id:"animation"},{type:"doc",id:"debugging"}]},{type:"category",label:"Collection Views",items:[{type:"doc",id:"datasource-overview"},{type:"doc",id:"datasource-basics"},{type:"doc",id:"datasource-changeset-api"},{type:"doc",id:"datasource-gotchas"},{type:"doc",id:"datasource-dive-deeper"}]},{type:"category",label:"Best Practices",items:[{type:"doc",id:"never-subclass-components"},{type:"doc",id:"avoid-overrides"},{type:"doc",id:"indentation"},{type:"doc",id:"avoid-local-variables"},{type:"doc",id:"avoid-single-use-constants"},{type:"doc",id:"no-underscores"},{type:"doc",id:"pass-in-actions"},{type:"doc",id:"no-side-effects"},{type:"doc",id:"pass-in-immutable-objects"},{type:"doc",id:"components-cant-be-delegates"},{type:"doc",id:"avoid-excessive-branching"},{type:"doc",id:"check-for-nil"},{type:"doc",id:"avoid-push-back"},{type:"doc",id:"under-300-lines"},{type:"doc",id:"avoid-width-100-percent"},{type:"doc",id:"use-designated-initializer-style"},{type:"doc",id:"break-out-composites"},{type:"doc",id:"keep-controller-in-component"}]},{type:"category",label:"Infrastructure",items:[{type:"doc",id:"component-hosting-view"}]},{type:"category",label:"Appendix",items:[{type:"doc",id:"why-cpp"},{type:"doc",id:"advanced-views"}]}]},sourceToPermalink:{"/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-excessive-branching.md":"/docs/avoid-excessive-branching","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/advanced-views.md":"/docs/advanced-views","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-overrides.md":"/docs/avoid-overrides","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-push-back.md":"/docs/avoid-push-back","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-single-use-constants.md":"/docs/avoid-single-use-constants","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/actions.md":"/docs/actions","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-local-variables.md":"/docs/avoid-local-variables","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/component-api.md":"/docs/component-api","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/check-for-nil.md":"/docs/check-for-nil","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/avoid-width-100-percent.md":"/docs/avoid-width-100-percent","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/break-out-composites.md":"/docs/break-out-composites","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/composite-components.md":"/docs/composite-components","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/component-hosting-view.md":"/docs/component-hosting-view","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/component-controllers.md":"/docs/component-controllers","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/components-cant-be-delegates.md":"/docs/components-cant-be-delegates","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/debugging.md":"/docs/debugging","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-changeset-api.md":"/docs/datasource-changeset-api","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-basics.md":"/docs/datasource-basics","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-overview.md":"/docs/datasource-overview","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/indentation.md":"/docs/indentation","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/getting-started.md":"/docs/getting-started","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-gotchas.md":"/docs/datasource-gotchas","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/never-subclass-components.md":"/docs/never-subclass-components","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/keep-controller-in-component.md":"/docs/keep-controller-in-component","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/lifecycle-methods.md":"/docs/lifecycle-methods","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/no-side-effects.md":"/docs/no-side-effects","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/layout.md":"/docs/layout","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/no-underscores.md":"/docs/no-underscores","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/philosophy.md":"/docs/philosophy","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/pass-in-immutable-objects.md":"/docs/pass-in-immutable-objects","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/pass-in-actions.md":"/docs/pass-in-actions","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/under-300-lines.md":"/docs/under-300-lines","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/responder-chain.md":"/docs/responder-chain","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/use-designated-initializer-style.md":"/docs/use-designated-initializer-style","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/state.md":"/docs/state","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/scopes.md":"/docs/scopes","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/views.md":"/docs/views","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/fb/super-secret.md":"/docs/fb/super-secret","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/uses.md":"/docs/uses","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/why-cpp.md":"/docs/why-cpp","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/animation.md":"/docs/animation","/Users/fabiomilano/Documents/GitHub/componentkit/website/docs/datasource-dive-deeper.md":"/docs/datasource-dive-deeper"},permalinkToId:{"/docs/avoid-excessive-branching":"avoid-excessive-branching","/docs/advanced-views":"advanced-views","/docs/avoid-overrides":"avoid-overrides","/docs/avoid-push-back":"avoid-push-back","/docs/avoid-single-use-constants":"avoid-single-use-constants","/docs/actions":"actions","/docs/avoid-local-variables":"avoid-local-variables","/docs/component-api":"component-api","/docs/check-for-nil":"check-for-nil","/docs/avoid-width-100-percent":"avoid-width-100-percent","/docs/break-out-composites":"break-out-composites","/docs/composite-components":"composite-components","/docs/component-hosting-view":"component-hosting-view","/docs/component-controllers":"component-controllers","/docs/components-cant-be-delegates":"components-cant-be-delegates","/docs/debugging":"debugging","/docs/datasource-changeset-api":"datasource-changeset-api","/docs/datasource-basics":"datasource-basics","/docs/datasource-overview":"datasource-overview","/docs/indentation":"indentation","/docs/getting-started":"getting-started","/docs/datasource-gotchas":"datasource-gotchas","/docs/never-subclass-components":"never-subclass-components","/docs/keep-controller-in-component":"keep-controller-in-component","/docs/lifecycle-methods":"lifecycle-methods","/docs/no-side-effects":"no-side-effects","/docs/layout":"layout","/docs/no-underscores":"no-underscores","/docs/philosophy":"philosophy","/docs/pass-in-immutable-objects":"pass-in-immutable-objects","/docs/pass-in-actions":"pass-in-actions","/docs/under-300-lines":"under-300-lines","/docs/responder-chain":"responder-chain","/docs/use-designated-initializer-style":"use-designated-initializer-style","/docs/state":"state","/docs/scopes":"scopes","/docs/views":"views","/docs/fb/super-secret":"fb/super-secret","/docs/uses":"uses","/docs/why-cpp":"why-cpp","/docs/animation":"animation","/docs/datasource-dive-deeper":"datasource-dive-deeper"}}}}]);