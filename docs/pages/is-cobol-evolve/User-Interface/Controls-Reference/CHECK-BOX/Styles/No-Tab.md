## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example -** Define a check-box in screen section that would be skipped when tab is pressed

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 30
     id 11
     title "Sugar for you coffee?"
     no-tab
     .
```
