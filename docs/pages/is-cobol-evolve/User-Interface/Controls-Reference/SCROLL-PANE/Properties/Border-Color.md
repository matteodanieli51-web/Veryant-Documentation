## Border-Color

This property allows you to set or retrieve the border color of the Scroll-Pane control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. The border color is applicable only to controls with the [Boxed](../Styles/3-D-Boxed-No-Box) style.

**Example** - define a scroll-pane with red border

```cobol
screen section.
...
  03 screen-1-sp-1 Scroll-Pane
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     border-color 5
     boxed
     .
```
