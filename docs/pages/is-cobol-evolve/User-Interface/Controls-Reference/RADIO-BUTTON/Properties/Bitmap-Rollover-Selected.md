## Bitmap-Rollover-Selected

This property identifies the image to be displayed when the mouse pointer is moved over a selected Radio-Button control. The number corresponds to the position occupied by the image in the bitmap strip.

**Example** - Define a radio button that uses a bitmap defining the image to use when the control is rolled over and selected

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
