## Model-To-View-Y

When inquired, this property allows you to retrieve the row number on video corresponding to the row number for the program identified by the [Y](./Y) property.This kind of information is useful after a sort, when the order of the rows on video doesn’t match with the order of the rows for the program.

When the [Y](./Y) property value is greater than the number of visible rows in the Grid, inquiring this property returns the value 0.

**Example** - Get the row number on video of row 5 from a grid

```cobol
procedure division.
...
   inquire screen-1-gr-1(5, 1) model-to-view-y ws-mtv-y
...
```
