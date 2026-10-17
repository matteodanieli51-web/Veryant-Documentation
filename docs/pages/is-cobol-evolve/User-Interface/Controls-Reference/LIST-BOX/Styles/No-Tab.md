## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example** - Define a list-box that is not navigable by the tab key

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     no-tab
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
```
