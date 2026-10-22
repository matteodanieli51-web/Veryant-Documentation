## Border-Width

This property allows you to set or retrieve the width of the four borders of the Push-Button control. The property is a list of four values that specify the width in pixels of the top, left, bottom and right border respectively. This property has effect only on buttons with the [Flat](../Styles/Flat) style.

Setting the property to -1 resets the borders.

Passing less than four values assumes that the remaining values are 0.

This property overrides the layout provided by the active Look & Feel for the control.

**Example** - Define a push-button control with a huge bottom border

```cobol
screen section.
...
  03 screen-1-pb-1 Push-Button
     line 4.5
     column 8.1
     size 70
     lines 48
     id 1
     flat
     border-width (1 1 5 1)
     bitmap-handle icon-png
     square
     bitmap-default 21
     bitmap-disabled 18
     bitmap-rollover 19
     bitmap-pressed 20
     bitmap-width 18
     .
```
