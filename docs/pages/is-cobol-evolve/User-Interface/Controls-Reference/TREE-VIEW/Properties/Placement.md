## Placement

The value set to this property affects the place where the next item will be added the next time the [Item-To-Add](./Item-To-Add) property will be set. It can be one of the following values:

|  |  |
| --- | --- |
| tvplace-first | The new item will be the first item of its level. |
| tvplace-last | The new item will be the last item of its level. |
| tvplace-sort | The items in the level will be sorted. It does not make sense to set tvplace-sort for a level where items are not sorted. In other words, if at least one item is added to the level with the PLACEMENT property set to tvplace-sort, all the other items of the same level should be added the same way. |
| *AnyItemID* | The new item will be placed after the item identified by AnyItemID. Obviously, AnyItemID must refer to an item of the level where the new item will be inserted. |

Setting this property after the [Item-To-Add](./Item-To-Add) property is not recommended because it may lead to unexpected behaviors. A correct code will always look as follows:

```cobol
modify screen-1-tv-1,
       parent      = parentItemId,
       placement   = tvplace-sort,
       item-to-add = "new item"
```
