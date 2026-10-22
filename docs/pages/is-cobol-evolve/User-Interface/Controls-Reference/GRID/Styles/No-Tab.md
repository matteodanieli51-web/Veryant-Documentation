## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example** - Define a grid that is not navigable by the tab key

```cobol
screen section.
...
  03 screen-1-gr-2 Grid
     line 25.0
     column 3.1
     size 34.8 cells
     lines 16.2 cells
     id 2
     event procedure screen-1-gr-2-evt-proc
     no-box
     column-headings
     no-tab
     row-dividers 1
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
```
