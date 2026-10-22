## Vtop

When this style is set, the title is aligned to the top.

When it is not set, the title is vertically centered. This is the default setting.

**Example** - Define a radio button with vertical alignment to the top

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 8.1 cells
     id 5
     vtop
     title "Option 2"
     .
```
