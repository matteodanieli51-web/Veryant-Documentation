## Selection-Mode

This property activates the ability to select multiple rows, columns and cells in the Grid.

The possible values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

|  |  |
| --- | --- |
| grsm-no-selection (value 0) | It’s not possible to select multiple rows or columns. |
| grsm-single-selection (value 1) | It’s possible to select a single item (row, column or cell) at a time. |
| grsm-single-interval-selection (value 2) | It’s possible to select more contiguous items (rows, columns or cells) at a time. |
| grsm-multiple-interval-selection (value 4) | It’s possible to select more items (rows, columns or cells) at a time, even if they’re not contiguous. |
| grsm-row-selection (value 8) | When selecting a cell, the whole row is selected. |
| grsm-column-selection (value 16) | When selecting a cell, the whole column is selected. |
| grsm-cell-selection (value 32) | When selecting a cell, that cell is selected. |

The above values can be combined in order to obtain the desired effect. For example, if you wish to allow the user to select multiple contiguous rows, add grsm-row-selection (value 8) to grsm-single-interval-selection (value 2), and you will obtain that the value for the Selection-Mode property is 10.

The selection of multiple items can be performed either by dragging the mouse pointer over the Grid or by holding CTRL (for multiple interval selection) or SHIFT (for single interval selection) on the keyboard and then use arrow keys or click with the mouse.

The color of the selected items is specified by the properties [Cell-Selected-Background-Color](./Cell-Selected-Background-Color), [Cell-Selected-Color](./Cell-Selected-Color), [Cell-Selected-Foreground-Color](./Cell-Selected-Foreground-Color), [Column-Selected-Background-Color](./Column-Selected-Background-Color), [Column-Selected-Color](./Column-Selected-Color), [Column-Selected-Foreground-Color](./Column-Selected-Foreground-Color), [Row-Selected-Background-Color](./Row-Selected-Background-Color), [Row-Selected-Color](./Row-Selected-Color) and [Row-Selected-Foreground-Color](./Row-Selected-Foreground-Color).

The list of the selected items can be retrieved by inquiring the properties [Cells-Selected](./Cells-Selected), [Columns-Selected](./Columns-Selected) and [Rows-Selected](./Rows-Selected).

**Example** - Define a grid where multiple rows can be selected:

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     pop-up menu hmenu
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     hscroll
     row-headings
     lm-on-columns 1
     row-dividers 0
     end-color 9
     cursor-frame-width 3
     num-rows 5
     selection-mode 12
     row-selected-color 480
     .
```
