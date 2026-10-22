## Bitmap-Width

This property identifies the width in pixels of the image displayed in the Radio-Button control. The bitmap strip identified by the [Bitmap-Handle](./Bitmap-Handle) property is divided into several smaller images. The width of each image is the value assigned to this property.

If this property is omitted, then the [Size](./Size) property is used to specify the width of the image.

**Example** - Define a radio button that uses a bitmap defining the width of every image in the bitmap

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
