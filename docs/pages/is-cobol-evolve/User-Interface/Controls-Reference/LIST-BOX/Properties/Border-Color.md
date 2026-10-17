## Border-Color

This property allows you to set or retrieve the border color of the List-Box control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. The border color is applicable only to controls with the  [Boxed](../Styles/3-D-Boxed-No-Box) style.

**Example** - define a list-box with red border

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     border-color 5
     boxed
     .
```
