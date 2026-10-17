## Insertion-Index

This numeric property affects the position where a new row is added to a Grid control when the [Record-To-Add](./Record-To-Add) property is set. If this property is set to a positive value, the row is inserted immediately before the corresponding record. If "0" is assigned to this property, the row is inserted as last record of the Grid control. After the record has been added, the insertion index automatically resets itself to a value of "0".

**Example** - Modify a grid to insert 3 rows on position 5

```cobol
...
procedure division.
...
  modify screen-1-gr-1 insertion-index 5 insert-rows 3
...
```
