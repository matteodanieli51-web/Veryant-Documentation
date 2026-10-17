## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Note -** Labels are skipped by default when the user navigates the screen using the Tab and the Backtab keys, so setting this style or not doesn’t make any difference.

**Example** - Define a label that is not navigable by the tab key

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     id 25
     center
     no-tab
     title "Main & Centered Title"
     .
```
