## Record-To-Add

This property allows you to add a new row from a buffer. The [Data-Columns](./Data-Columns) property must be properly set. The row is inserted, according to the value set in the [Insertion-Index](./Insertion-Index) property. Note that this property will not add an empty record. See [Cell-Data](./Cell-Data) for a way to add individual cells to a grid and [Insert-Rows](./Insert-Rows) for a way to insert empty records.

**Example** - Add one record to the grid

```cobol
working-storage section.
01 ws-record.
   05 col-1   pic x(8).
   05 col-2   pic x(3).
   05 col-3   pic x(10).
...
procedure division.
...
  move "C0140" to col-1
  move "XCM"   to col-2
  move "Adam"  to col-3
  modify screen-1-gr-1 insertion-index 2 record-to-add ws-record
...
```
