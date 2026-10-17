## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define a list-box with maximum and minumum dimensions to be used by the layout manager

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     help-id 5040
     id 1
     max-width 70.0
     min-width 18.0
     min-height 8.0
     max-height 30.0
     layout-data 17
     .
...
```
