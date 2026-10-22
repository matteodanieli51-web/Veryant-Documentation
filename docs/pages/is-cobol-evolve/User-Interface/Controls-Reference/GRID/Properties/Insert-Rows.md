## Insert-Rows

This numeric property establishes how many blank rows are to be inserted at the position set in the [Insertion-Index](./Insertion-Index) property.

**Example** - Modify a grid to insert 3 rows on position 5

```cobol
...
procedure division.
...
  modify screen-1-gr-1 insertion-index 5 insert-rows 3
...
```
