## Insertion-Index

This numeric property is used to set the position of the newly inserted item. The new item is inserted right before the item number specified here. For example, with the value "1" the next item added to the List-Box control will appear at the top of the list. When it is set to zero (the default), items are added in sort-order, or to the end of the box if the [Unsorted](../Styles/Unsorted) style is set. After the item has been added, the insertion index automatically resets itself to a value of zero.

**Example** - Modify a list-box to insert a new item on position 5

```cobol
procedure division.
...
  modify screen-1-lb-1 insertion-index 5
  modify screen-1-lb-1 item-to-add "new item"
...
```
