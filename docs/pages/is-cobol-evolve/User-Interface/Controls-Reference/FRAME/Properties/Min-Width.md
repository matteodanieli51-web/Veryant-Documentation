## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define a frame with layout-data that allows resize X and resize Y and has limits for max height, max width, min height and min width

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     max-width 50.0
     min-width 15.0
     min-height 20.0
     max-height 50.0
     .
```
