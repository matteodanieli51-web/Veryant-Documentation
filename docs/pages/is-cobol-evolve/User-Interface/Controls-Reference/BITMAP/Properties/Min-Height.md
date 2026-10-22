## Min-Height

The control's minimum height. This setting will affect the Layout Manager’s behavior.

**Example -** Define a bitmap with a minimum height in case of resizing

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.0
     column 33.0
     size 63 pixels
     lines 68 pixels
     id 9
     min-height 20.0
     .
```
