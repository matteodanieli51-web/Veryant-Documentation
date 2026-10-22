## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example -** Define a scroll pane that would be skipped when tab is pressed

```cobol
screen section.
...
  03 screen-1-sp-2 Scroll-pane
     line 39.1
     column 12.8
     size 2.4
     lines 30.8
     id 10
     no-tab
     height-in-cells
     width-in-cells
     .
```
