## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example** - Define an iwc-panel that is not navigable by the tab key

```cobol
screen section.
...
  03 screen-1-ip-1 iwc-panel
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     no-tab
     id 1
     js-name "f-map"
     .
...
```
