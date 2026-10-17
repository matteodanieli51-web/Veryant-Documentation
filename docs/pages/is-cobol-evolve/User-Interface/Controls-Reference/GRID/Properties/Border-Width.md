## Border-Width

This property allows you to set or retrieve the width of the four borders of the GRID control. The property is a list of four values that specify the width in pixels of the top, left, bottom and right border respectively. The border width is applicable only to controls with the  [Boxed](../Styles/3-D-Boxed-No-Box) style.

Setting the property to -1 resets the borders.

Passing less than four values assumes that the remaining values are 0.

This property overrides the layout provided by the active Look & Feel for the control.

**Example** - define a grid with a huge left border

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     border-width (1 5 1 1)
     .
```
