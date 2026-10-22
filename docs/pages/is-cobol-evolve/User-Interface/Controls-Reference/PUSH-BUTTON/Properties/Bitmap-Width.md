## Bitmap-Width

This property identifies the width in pixels of the image displayed in the Push-Button control. The bitmap strip identified by the [Bitmap-Handle](./Bitmap-Handle) property is divided into several smaller images. The width of each image is the value assigned to this property.

If this property is omitted, then the [Size](./Size) property is used to specify the width of the image.

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
