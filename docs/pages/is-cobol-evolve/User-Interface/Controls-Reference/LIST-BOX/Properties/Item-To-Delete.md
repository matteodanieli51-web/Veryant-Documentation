## Item-To-Delete

As soon as the value of this property is modified, the corresponding item in the list is removed.

Each item is identified by a number that matches its position in the list, starting at 1.

**Example** - Modify a list-box to delete the second item

```cobol
procedure division.
...
  modify screen-1-lb-1 item-to-delete 2
...
```
