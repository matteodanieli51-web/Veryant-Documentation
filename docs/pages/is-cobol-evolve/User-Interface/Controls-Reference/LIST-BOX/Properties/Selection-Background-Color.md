## Selection-Background-Color

This property allows you to set or retrieve the background color of the currently selected row.

By default the selection background color is assigned by the LAF. If you inquire this default color, the color is returned as an RGB value expressed by a negative number, therefore you should use signed data-items to inquire this property.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Retrieve the selection background color

```cobol
procedure division.
...
   inquire screen-1-lb-1 selection-background-color w-color
...
```
