## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example -** Define a horizontal scroll-bar that would be skipped when tab is pressed

```cobol
screen section.
...
  03 screen-1-sb-2 Scroll-Bar
     line 39.1
     column 12.8
     size 38.4
     lines 3.8
     id 10
     no-tab
     horizontal
     .
```
