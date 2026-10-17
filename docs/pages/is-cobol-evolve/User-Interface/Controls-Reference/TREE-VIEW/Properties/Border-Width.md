## Border-Width

This property allows you to set or retrieve the width of the four borders of the Tree-View control. The property is a list of four values that specify the width in pixels of the top, left, bottom and right border respectively. The border width is applicable only to controls with the  [Boxed](../Styles/3-D-Boxed-No-Box) style.

Setting the property to -1 resets the borders.

Passing less than four values assumes that the remaining values are 0.

This property overrides the layout provided by the active Look & Feel for the control.

**Example** - Define a tree-view control with a huge bottom border

```cobol
screen section.
...
  03 screen-1-ef-2 Tree-View
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     border-width (1 1 5 1)
     id 19
     .
```
