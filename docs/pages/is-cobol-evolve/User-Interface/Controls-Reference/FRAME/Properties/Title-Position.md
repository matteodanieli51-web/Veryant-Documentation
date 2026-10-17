## Title-Position

This property affects the position of the title. Valid values are:

|  |  |
| --- | --- |
| 1 | Top left, the default. |
| 2 | Top center |
| 3 | Top right |
| 4 | Bottom left |
| 5 | Bottom center |
| 6 | Bottom right |
| 7 | Horizontally and vertically centered |

**Example** - Define a frame with a top centered title

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     title-position 2
     title "Customer Data Area"
     .
```
