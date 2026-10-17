## Split-Orientation

This property sets or retrieve the split orientation.

Possible values are:

|  |  |
| --- | --- |
| 0 | Horizontal split with vertical divider bar (default) |
| 1 | Vertical split with horizontal divider bar |

**Example** - Define a split pane with vertical split

```cobol
screen section.
...
  03 screen-1-sp-2 Split-pane
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
     split-orientation 1
```
