## Insertion-Index

This numeric property is used to set the position of the newly inserted item. The new item is inserted right before the item number specified here. For example, with the value "1" the next item added to the Combo-Box control will appear at the top of the list. When it is set to zero (the default), items are added in sort-order, or to the end of the box if the [Unsorted](../Styles/Unsorted) style is set. After the item has been added, the insertion index automatically resets itself to a value of zero.

**Example -** Add one item to a combo-box in 2nd position the combo-box should have the unsorted style

```cobol
procedure division.
...
  modify screen-1-co-1 insertion-index 2 item-to-add "Yellow".
...
```
