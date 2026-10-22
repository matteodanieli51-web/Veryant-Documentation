## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example** - Define a push-button that is not navigable by the tab key

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 10.7 cells
     lines 5.3 cells
     id 3
     title "Go..."
     no-tab
     .
```
