## Parent

The value set to this property affects the place where the next item will be added the next time the [Item-To-Add](./Item-To-Add) property will be set. When set to zero, the new item will be added at the top level.

Items with the same parent belong to the same level and are called siblings.

Setting this property after the [Item-To-Add](./Item-To-Add) property is not recommended because it may lead to unexpected behaviors. A correct code will always look as the sample below.

**Example** - Add a child item to a given parent item

```cobol
modify screen-1-tv-1,
       parent      = parentItemId,
       item-to-add = "new item"
```
