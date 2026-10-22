## Y

This property is used to identify a row of the Grid control. It is always used in conjunction with other properties to set or retrieve the value of a row property, or in conjunction with the [X](./X) property, to set or retrieve the value of a cell property.

**Example** - Set a cell-data using X and Y coordinates

```cobol
procedure division.
...
  modify screen-1-gr-1 x=2 y=3 cell-data="Part 1020"
...
```
