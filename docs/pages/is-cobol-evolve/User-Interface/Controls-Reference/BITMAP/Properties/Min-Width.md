## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example -** Define a bitmap with a minimum width in case of resizing

```cobol
screen section.
...
03 screen-1-bi-3 Bitmap
   line 15.0
   column 33.5
   size 63 pixels
   lines 68 pixels
   font Arial-0v00
   id 9
   min-width 20.8
   .
```
