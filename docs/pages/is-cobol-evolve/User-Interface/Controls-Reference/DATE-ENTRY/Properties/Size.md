## Size

This property allows you to specify the size of the Date-Entry control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the size of the Date-Entry control is still computed in CELLS, but the cell size is based on the font set for the Date-Entry control with the [Font](./Font) property. If no font has been defined for the Date-Entry control, the cell size is based on the font used for the parent window. Decimal values are allowed in this case, too.

**Example -** Define a date-entry with specific size

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     century-date
     value-format davf-yyyymmdd.
```
