## Max-Width

The control's maximum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define a tab-control with maximum and minimum dimensions to be used when the layout manager requires so

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     id 10
     max-width 70.0
     min-width 17.0
     min-height 15.0
     max-height 60.0
     layout-data 17
     .
```
