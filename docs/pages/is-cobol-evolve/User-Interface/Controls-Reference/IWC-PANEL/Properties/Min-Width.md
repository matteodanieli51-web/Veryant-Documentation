## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define an iwc-panel with maximum and minumum dimensions to be used by the layout manager

```cobol
screen section.
...
  03 screen-1-ip-1 iwc-panel
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     background-color 8
     foreground-color 3
     id 1
     js-name "f-map"
     max-width 70.0
     min-width 18.0
     min-height 8.0
     max-height 30.0
     layout-data 17
     .
...
```
