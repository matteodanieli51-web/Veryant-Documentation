## Rollover-Border-Color

This property allows you to set or retrieve the border color of the Check-Box control with the [Bitmap](../Styles/Bitmap) style when the mouse pointer hovers over it. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a flat check-box with red border color during mouseover

```cobol
screen section.
...
  03 screen-1-cb-1 Check-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     background-color 3
     rollover-background-color 4
     id 10
     title "Sugar with the coffee?"
     bitmap
     bitmap-handle my-cb-png
     bitmap-number 1
     bitmap-width 20
     title-position 2
     bitmap-selected 2
     rollover-border-color 5
     .
```
