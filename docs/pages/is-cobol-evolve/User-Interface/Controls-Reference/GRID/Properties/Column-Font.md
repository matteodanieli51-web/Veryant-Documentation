## Column-Font

This property allows you to set or retrieve the font of the column identified by the [X](./X) property. When this property is set to zero, the column inherits the grid font.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Set the font of a grid column

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 2
         column-font Courier-New-10v0
         .
...
```
