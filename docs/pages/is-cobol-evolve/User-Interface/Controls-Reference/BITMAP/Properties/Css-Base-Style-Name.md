## Css-Base-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example -** Define a bitmap control with css base style (valid for EIS WebDirect deployemnt)

```cobol
working-storage section.
...
77 icon-png pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-bi-1 Bitmap
     line 14.0
     column 50.0
     size  17 pixels
     lines 30 pixels
     id 5
     css-base-style-name "bitmap-css-style"
     bitmap-handle icon-png
     bitmap-number 2
     .
```
