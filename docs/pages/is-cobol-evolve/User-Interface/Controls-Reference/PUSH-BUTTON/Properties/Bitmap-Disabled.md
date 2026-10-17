## Bitmap-Disabled

This property identifies the image to be displayed when the Push-Button control is disabled. The number corresponds to the position occupied by the image in the bitmap strip.

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
