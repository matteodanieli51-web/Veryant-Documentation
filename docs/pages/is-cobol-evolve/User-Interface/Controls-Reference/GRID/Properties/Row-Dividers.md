## Row-Dividers

This property defines the thickness of lines between rows. Valid values are:

|  |  |
| --- | --- |
| -1 | Resets any value previously specified. |
| 0 | No line is drawn between lines. |
| > 0 | A line is drawn and the number represents its thickness, in pixels. |

Since this setting affects the appearance of the line between two rows, a list of values is needed in order to determine how to draw the lines between each pair of rows.

Each time you set this property to a value greater than zero, you set the width of the divider for one row of a record. The first setting applies to the first row, the second to the second row, and so on. The pattern established for one record repeats throughout the grid.

Assuming three rows per record, the following code would create a pattern in which records are divided from each other by a two-pixel border, and the three rows within the record are divided by a one-pixel border:

```cobol
ROW-DIVIDERS (1, 1, 2)
```

**Example** - Display a grid without separation lines between rows

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
     .
```
