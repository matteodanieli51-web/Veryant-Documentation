## Virtual-Width

This property is used to set the total width of the columns, regardless of the width of the Tree-View control.

The default value is dynamically calculated in order to maintain a width of 10 cells for the last column. The value is updated each time the user changes the width of a column. See also the <<Display-Columns\>> property.

This property is used only with Tree-Views that have the [Table-View](../Styles/Table-View) style.

**Example** - Set the virtual width of a tree table view

```cobol
...
procedure division.
...
  modify screen-1-tv-1 virtual-width 50
```
