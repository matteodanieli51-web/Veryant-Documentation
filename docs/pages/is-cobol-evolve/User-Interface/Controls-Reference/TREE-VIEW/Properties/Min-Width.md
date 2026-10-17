## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define a tree-view with maximum and minimum dimensions for the layout manager

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     id 2
     max-width 40.0
     min-width 10.0
     min-height 15.0
     max-height 50.0
     layout-data 17
     .
...
```
