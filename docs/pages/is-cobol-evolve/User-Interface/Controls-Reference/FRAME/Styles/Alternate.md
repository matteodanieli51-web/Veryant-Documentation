## Alternate

This style, used only in conjunction with the [VERY-HEAVY](./Heavy-Very-Heavy) style, draws a double line border.

**Example** - Define a frame with double border using alternate and very-heavy styles

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     very-heavy
     alternate.
```
