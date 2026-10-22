## Cell-Current-Font

This property allows you to retrieve the font of the cell identified by the [X](./X) and [Y](./Y) properties.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Get the font of a cell

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2
  inquire screen-1-gr-1
          cell-current-font ws-cell-font
...
```
