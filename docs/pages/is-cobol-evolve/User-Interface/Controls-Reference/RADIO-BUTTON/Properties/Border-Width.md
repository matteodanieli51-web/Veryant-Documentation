## Border-Width

This property allows you to set or retrieve the width of the four borders of the Radio-Button control with the [Bitmap](../Styles/Bitmap) style. The property is a list of four values that specify the width in pixels of the top, left, bottom and right border respectively.

Setting the property to -1 resets the borders.

Passing less than four values assumes that the remaining values are 0.

This property overrides the layout provided by the active Look & Feel for the control.

**Example** - Define a radio button control with a huge bottom border

```cobol
screen section.
...
  03 screen-1-rb-1 Radio-Button
     line 20.9
     column 5.4
     size 112
     lines 45
     id 4
     title "Option 1"
     bitmap-handle icon-png1
     square
     bitmap-number 1
     bitmap-disabled 6
     bitmap-rollover 3
     bitmap-pressed 2
     bitmap-width 18
     title-position 2
     bitmap-selected 5
     bitmap-rollover-selected 4
     border-width (1 1 5 1)
     .
```
