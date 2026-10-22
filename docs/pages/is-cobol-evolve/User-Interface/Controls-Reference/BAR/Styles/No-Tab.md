## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Note -** Bars are skipped by default when the user navigates the screen using the Tab and the Backtab keys, so setting this style or not doesn’t make any difference.

**Example -** Define a vertical bar in screen section that would be skipped when tab is pressed

```cobol
screen section.
...
  03 screen-1-br-3 Bar
     line 10.0
     column 5.0
     lines 22.0
     id 3
     no-tab
     height-in-cells
     .
```
