## Virtual-Width

This property is used to set the total width of the columns, regardless of the width of the Grid control.

The default value is dynamically calculated in order to maintain a width of 10 cells for the last column. The value is updated each time the user changes the width of a column. See also the [Display-Columns](./Display-Columns) property.

This property is used only with Grids that have the [Hscroll](../Styles/Hscroll) style. In Grids where the horizontal scrolling is not available, the last column extends to the end of the Grid so that the whole Grid [Size](./Size) is covered by the columns.

When inquired, this property returns the width of all columns, including hidden columns.

**Example** - Modify a grid to set its virtual width in cells

```cobol
procedure division.
...
  modify screen-1-gr-1 virtual-width 90.0
...
```
