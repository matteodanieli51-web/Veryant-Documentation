## Bitmap-Handle

This property identifies the bitmap strip handle to be used. If this value is omitted, the control uses the bitmap most recently loaded by [W$BITMAP](../../../../Appendices/Library-Routines/W$BITMAP/W$BITMAP). The [Bitmap](../Styles/Bitmap) style must be set.

If this property points to an animated GIF, then the Radio-Button control renders the animation.

**Example** - Define a radio button that uses a bitmap and the correspondent bitmap handle

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
     .
```
