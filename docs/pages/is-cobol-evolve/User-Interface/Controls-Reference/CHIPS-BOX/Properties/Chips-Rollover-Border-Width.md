## Chips-Rollover-Border-Width

This property allows you to set or retrieve the border width in pixels that chips assume when the mouse pointer hovers over them.

**Example** - Define a chips-box control whose chips become decorated on mouseover

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     border-width 0
     chips-border-width 1
     id 19
     .
```
