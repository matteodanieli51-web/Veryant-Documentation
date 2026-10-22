## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example -** Define a slider that would be skipped when tab is pressed

```cobol
screen section.
...
  03 screen-1-sl-2 Slider
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
     id 10
     horizontal
     inverted
     no-tab
     show-labels
     min-val 10
     max-val 100
     page-size 5
     labels-increment 15
     .
```
