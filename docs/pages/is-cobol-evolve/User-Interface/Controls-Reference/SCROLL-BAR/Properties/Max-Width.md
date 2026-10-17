## Max-Width

The control's maximum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define a scroll-bar with layout-data and maximum and minimum dimensions

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
     max-width 2.9
     min-width 2.9
     min-height 60.0
     max-height 15.0
     layout-data 16
     hint "Scroll-bar hint"
     .
```
