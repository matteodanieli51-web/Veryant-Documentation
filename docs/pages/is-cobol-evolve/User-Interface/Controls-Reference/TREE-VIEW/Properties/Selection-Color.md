## Selection-Color

This property allows you to set or retrieve the color of the currently selected item.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

When the [Table-View](../Styles/Table-View) style is specified, the selection color extends to the whole line, over all the columns.

**Example** - Retrieve the selection color

```cobol
procedure division.
...
   inquire screen-1-tv-1 selection-color w-color
...
```
