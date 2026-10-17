## Item-To-Empty

As soon as the value of this property is modified, the corresponding item is emptied. The item itself is not deleted, only its children are removed from the Tree-View control.

Each item has a unique ID that is automatically assigned at the moment it is created.

**Example** - Modify a tree-view an empty one of its items

```cobol
...
procedure division.
...
  modify screen-1-tv-1 item-to-empty 1
...
```
