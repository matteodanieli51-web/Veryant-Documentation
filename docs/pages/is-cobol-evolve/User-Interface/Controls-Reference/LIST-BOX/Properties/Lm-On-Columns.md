## Lm-On-Columns

This property specifies the behavior of columns when the window is resized and a layout manager is involved.

|  |  |
| --- | --- |
| (NONE) | the behavior is controlled by the [iscobol.gui.list.lm_on_columns (boolean)\*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) property |
| 0 | columns are not resized |
| 1 | columns are resized |

**Example** - Define a list-box that allows resizing in columns

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
     layout-data 17
     lm-on-columns 1
     .
...
```
