## Bitmap-Handle

This property identifies the bitmap strip handle to be used. If this value is omitted, the control uses the bitmap most recently loaded by [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP).  The [Bitmap](../Styles/Bitmap) style must be set.

If this property points to an animated GIF, then the Push-Button control renders the animation.

**Example** - Define a push-button using different bitmap images for different states of it

```cobol
screen section.
...
  03 screen-1-pb-1 Push-Button
     line 4.5
     column 8.1
     size 70
     lines 48
     id 1
     bitmap-handle icon-png
     square
     bitmap-default 21
     bitmap-disabled 18
     bitmap-rollover 19
     bitmap-pressed 20
     bitmap-width 18
     .
```
