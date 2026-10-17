## Max-Width

The control's maximum width. This setting will affect the Layout Manager’s behavior.

**Example -** Define a bitmap with a maximum width in case of resizing

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
   max-width 20.8
   .
```
