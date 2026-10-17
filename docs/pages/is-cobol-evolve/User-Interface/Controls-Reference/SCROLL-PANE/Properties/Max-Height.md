## Max-Height

The control's maximum height. This setting will affect the Layout Manager’s behavior.

**Example** - Define a scroll-pane with layout-data and maximum and minimum dimensions

```cobol
screen section.
...
  03 screen-1-sp-1 Scroll-Pane
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
     .
```
