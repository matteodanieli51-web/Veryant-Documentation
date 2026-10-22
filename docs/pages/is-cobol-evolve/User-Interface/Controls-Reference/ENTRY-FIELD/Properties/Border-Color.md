## Border-Color

This property allows you to set or retrieve the border color of the Entry-Field control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. The border color is applicable only to controls with the  [Boxed](../Styles/3-D-Boxed-No-Box) style.

**Example** - Define an entry-field control with red border

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     border-color 5
     id 19
     boxed
     .
```
