## Hidden-Data

This property allows you to set or retrieve the hidden value of the cell identified by the [X](./X) and [Y](./Y) properties. The hidden value is never shown to the user.

**Example** - Modify a grid cell to include hidden data in it

```cobol
...
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2
         hidden-data "Hidden data in Cell (2,1)"
...
```
