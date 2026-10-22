## Max-Val

This property is the maximum value represented by the Scroll-Bar control.

**Example** - Define a scroll-bar with maximum and minimum values

```cobol
screen section.
...
  03 screen-1-sb-1 Scroll-Bar
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     color 229
     help-id 3029
     id 5
     layout-data 16
     min-val 2
     max-val 20
     .
...
```
