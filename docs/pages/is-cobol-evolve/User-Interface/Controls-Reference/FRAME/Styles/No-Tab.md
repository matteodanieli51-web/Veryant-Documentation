## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Note -** Frames are skipped by default when the user navigates the screen using the Tab and the Backtab keys, so setting this style or not doesn’t make any difference.

**Example** - Define a frame that cannot be visited when pressing the tab key

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8
     id 16
     no-tab.
```
