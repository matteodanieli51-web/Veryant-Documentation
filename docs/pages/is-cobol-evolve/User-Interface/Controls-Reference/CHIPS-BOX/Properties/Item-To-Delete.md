## Item-To-Delete

As soon as the value of this property is modified, the corresponding item is removed.

Each item has a unique ID that is automatically assigned at the moment it is created.

**Example** - Modify a chips-box to delete the item pointed by wk-item

```cobol
working-storage section.
77 wk-item pic 9(2).
...
procedure division.
...
  modify screen-1-chip-1 item-to-delete wk-item
...
```
