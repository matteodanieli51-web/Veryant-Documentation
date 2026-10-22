## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example -** Define a chips-box in screen section that would be skipped when tab is pressed

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     no-tab
     .
```
