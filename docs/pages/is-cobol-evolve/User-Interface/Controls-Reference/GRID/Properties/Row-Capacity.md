## Row-Capacity

This property returns the number of records (rows) that can be displayed entirely within the Grid. This number doesn't usually match with the [Lines](./Lines) property if the grid height is measured in cells. This property is particularly useful for paged grids, where there's no vertical scroll-bar so it's important to have all the rows completely visible.

**Example** - Retrieve the row capacity of a grid and change the num-rows property accordingly

```cobol
working-storage section.
77 w-rows-displayable pic 9(9).
...
procedure division.
...
  inquire screen-1-gr-1  row-capacity w-rows-displayable
  modify screen-1-gr-1  num-rows w-rows-displayable
```
