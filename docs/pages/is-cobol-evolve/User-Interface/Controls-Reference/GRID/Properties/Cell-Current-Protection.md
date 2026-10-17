## Cell-Current-Protection

This property allows you to retrieve the current protection setting of the cell identified by the [X](./X) and [Y](./Y) properties. See [Cell-Protection](./Cell-Protection) property for details about protection.

**Example** - Get the protection status of a grid cell

```cobol
...
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2
  inquire screen-1-gr-1
          cell-current-protection ws-prot
...
```
