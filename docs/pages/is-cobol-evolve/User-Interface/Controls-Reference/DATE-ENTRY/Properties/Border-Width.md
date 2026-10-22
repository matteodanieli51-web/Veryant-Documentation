## Border-Width

This property allows you to set or retrieve the width of the four borders of the Date-Entry control. The property is a list of four values that specify the width in pixels of the top, left, bottom and right border respectively.

Setting the property to -1 resets the borders.

Passing less than four values assumes that the remaining values are 0.

This property overrides the layout provided by the active Look & Feel for the control.

**Example** - Define a date-entry control with a huge bottom border

```cobol
screen section.
...
  03 screen-1-dt-2 Date-Entry
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     border-width (1 1 5 1)
     id 19
     .
```
