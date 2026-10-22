## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example -** Define a tab-control in screen section that would be skipped when tab is pressed

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     help-id 1036
     id 10
     background-low
     bold
     no-tab
     .
```
