## Border-Width

This property allows you to set or retrieve the width of the four borders of the Check-Box control with the [Bitmap](../Styles/Bitmap) style. The property is a list of four values that specify the width in pixels of the top, left, bottom and right border respectively.

Setting the property to -1 resets the borders.

Passing less than four values assumes that the remaining values are 0.

This property overrides the layout provided by the active Look & Feel for the control.

**Example** - Define a check-box control with a huge bottom border

```cobol
screen section.
...
03 screen-1-cb-2 Check-Box
   line 27.0
   column 10.0
   size 116
   lines 31
   id 11
   flat
   bitmap
   title "My Check Box"
   bitmap-handle my-cb-png
   bitmap-number 1
   bitmap-width 20
   title-position 2
   bitmap-selected 2
   border-width (1 1 5 1)
   .
```
