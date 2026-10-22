## Cell-Data

This property allows you to set or retrieve the text of the cell identified by the [X](./X) and [Y](./Y) properties. HTML is allowed, see the [Alignment](./Alignment) property.

**Example** - Get the data of a grid cell

```cobol
...
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2
  inquire screen-1-gr-1 cell-data ws-data
...
```
