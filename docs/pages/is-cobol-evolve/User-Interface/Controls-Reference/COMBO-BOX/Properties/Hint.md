## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Combo-Box control.

**Example -** Create a combo-box in screen section with hint text

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   id 13
   hint "Select color here"
   3-d
   drop-down
   .
```
