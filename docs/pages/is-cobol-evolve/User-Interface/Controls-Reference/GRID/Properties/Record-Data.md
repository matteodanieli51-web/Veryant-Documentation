## Record-Data

This property allows you to set or retrieve the data contained in the row identified by the [Y](./Y) property. The [Data-Columns](./Data-Columns) property must be properly set.

**Example** - Get the full record on row 5 of a grid

```cobol
working-storage section.
01 ws-record.
   05 col-1   pic x(8).
   05 col-2   pic x(3).
   05 col-3   pic x(10).
...
procedure division.
...
  modify screen-1-gr-1 y 5
  inquire screen-1-gr-1 record-data ws-record
...
```
