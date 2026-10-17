## VPadding

This numeric property affects the height of the rows, indicating extra vertical space to be applied to each row. It is expressed as a percentage of the control’s font. Its default value is 50; this makes the row’s height 1.5 times the height of the font of the Grid control.

**Example** - Modify a grid to set the vpadding percentage

```cobol
procedure division.
...
  modify screen-1-gr-1 vpadding 70
...
```
