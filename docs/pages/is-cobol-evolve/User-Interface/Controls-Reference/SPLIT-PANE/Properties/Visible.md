## Visible

This property assumes a value of "0" if the Split-Pane control is not visible, "1" if it is visible.

When the Split-Pane is hidden, all the visible controls inside are hidden as well.

When the Split-Pane is made visible, all the controls inside that don't have their [Visible](../../../../Appendices/Graphical-Control-List) property set to 0 are made visible as well.

**Example** - Define a split pane initially invisible and make it visible on procedure division

```cobol
screen section.
...
  03 screen-1-sp-2 Split-pane
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
     visible 0
     .
...
procedure division.
...
   modify screen-1-sp-2 visible 1
...
```
