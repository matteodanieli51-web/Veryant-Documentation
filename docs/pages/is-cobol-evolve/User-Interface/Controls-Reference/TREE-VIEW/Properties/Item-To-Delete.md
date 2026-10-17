## Item-To-Delete

As soon as the value of this property is modified, the corresponding item is removed.

Each item has a unique ID that is automatically assigned at the moment it is created.

**Example** - Modify a tree-view to delete the 3rd item

```cobol
...
procedure division.
...
  modify screen-1-tv-1 item-to-delete 3
...
```
