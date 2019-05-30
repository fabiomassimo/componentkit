---
title: Overview
---

import StaticImage from "../theme/components/Image"

ComponentKit really shines when used with a `UICollectionView`.

### Automatic reuse

Who hasn't had bugs with cell reuse? In ComponentKit, the declarative nature of a Component makes it so you don't have to worry about reuse anymore! [This article in objc.io](http://www.objc.io/issue-22/facebook.html) explains in great detail how we achieve **automatic reuse and reconfiguration** with ComponentKit.

### Scroll performance

**ComponentKit addresses common scroll performance issues holistically**. Putting cells on screen is usually very performance sensitive. Cells are dequeued during scrolling, so any frame drop will be immediately visible.

Automatic and optimized reuse is already great for performance. But also, because generating a component and laying it out is just a **succession of pure functions working with immutable data** this operation can be very **easily moved to the background**.

As a result, the list view infrastructure provided by ComponentKit only spends a minimal amount of time in the main thread. No more stutters due to complex view  hierarchies or expensive text layout!

## The data sources

ComponentKit includes a standard data source stack dedicated to render components directly in a `UICollectionView`, and with a bit more effort, in a `UITableView`.

### CKDataSource

`CKDataSource` is at the core of the list view infrastructure. Instances of this class are agnostic to the `UICollectionView` API. The role of a `CKDataSource` is to:

1. Take as input changesets containing commands and models.
*e.g: "Insert at index 0 in section 1 the item representing ModelA".
2. **Generate and layout in the background** the components associated to those changes.
3. Output a changeset along with handles to the generated components so that it can be used with a `UITableView` or a `UICollectionView`

### CKCollectionViewTransactionalDataSource

`CKCollectionViewTransactionalDataSource` is a thin wrapper around `CKDataSource` that implements the `UICollectionViewDataSource` API.

It can be used to easily bootstrap a `UICollectionView` using components. See how to [display components in a collection view.](datasource-basics.html)

#### Philosophy

The UIKit way to add content to a collection view is:

1. Tell the `UICollectionView` to add/insert/update rows or sections.
2. Synchronously, the `UICollectionView` asks its data source for number of rows, sections and layout info.
3. Depending on whether or not the updated index paths are visible the `UICollectionView` will synchronously call `cellForItemAtIndexPath:`.
3. Finally, the data source returns a configured cell for this index path.

`CKCollectionViewTransactionalDataSource` uses an idiom that is more "reactive":

1. Tell the `CKCollectionViewTransactionalDataSource` to add/insert/update rows or sections.
2. Asynchronously, and in the background, computes the corresponding components.
3. When the computation is done, apply the changes to the `UICollectionView`.

Conceptually, we now have a one directional data flow. Obviously the back and forth between the `UICollectionView` and the `CKCollectionViewTransactionalDataSource` still happens but it is now hidden.

<StaticImage src="assets/datasource-overview.png" alt="CKCollectionViewTransactionalDataSource overview" width ="518" height="180" />
