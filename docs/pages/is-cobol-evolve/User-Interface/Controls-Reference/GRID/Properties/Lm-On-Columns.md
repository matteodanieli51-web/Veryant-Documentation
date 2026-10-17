## Lm-On-Columns

This property specifies the behavior of columns when the window is resized and a layout manager is involved.

|  |  |
| --- | --- |
| (NONE) | the behavior is controlled by the [iscobol.gui.grid.lm_on_columns (boolean) \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) property |
| 0 | columns are not resized |
| 1 | columns are resized |

This property is evaluated only if the Grid has the [Adjustable-Columns](../Styles/Adjustable-Columns) style.

**Example** - Define a grid that allows resizing in columns

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     help-id 5040
     id 1
     layout-data 17
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     hscroll
     adjustable-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     cursor-frame-width 3
     num-rows 5
     .
...
```
