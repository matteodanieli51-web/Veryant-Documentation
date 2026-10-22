## No-Autosel

When this style is set, the content of the combo-box is not automatically selected when you move to the control using the Tab or the Backtab keys.

**Example -** Define a combo-box in screen section with no-autosel style

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     no-autosel
     3-d
     drop-down
     .
```
