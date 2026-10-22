## Row-Font

This property allows you to set or retrieve the font of the row identified by the [Y](./Y) property. When this property is set to zero, the row inherits the column font.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example -** Modify one row to set its font

```cobol
working-storage section.
77 Calibri-10v0 handle of font.
...
procedure division.
...
*> Prior to modify the grid, load the font with w$font
...
  modify screen-1-gr-1 y = 5 row-font Calibri-10v0
...
```
