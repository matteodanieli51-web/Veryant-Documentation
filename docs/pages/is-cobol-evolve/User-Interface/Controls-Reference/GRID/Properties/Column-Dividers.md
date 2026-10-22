## Column-Dividers

This property defines the thickness of each line between columns. Valid values are:

|  |  |
| --- | --- |
| -1 | Resets any value previously specified. |
| 0 | No line is drawn between columns. |
| > 0 | A line is drawn and the number represents its thickness, in pixels. |

Since this setting affects the appearance of the line between two columns, a list of values is needed in order to determine how to draw the lines between each pair of columns.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the line between the 1st and 2nd column is one pixel wide, the line between 2nd and 3rd column is 2 pixels wide and the line between 3rd and 4th column is 3 pixels wide. The lines between the other columns, if any, will be one pixel wide, the default.

```cobol
COLUMN-DIVIDERS = (1, 2, 3)
```

When a single value greater than or equal to zero is set, it is appended to the list. This is useful to define a user-defined appearance.

**Example** - Set column dividers by reading values from a Occurs

```cobol
procedure division.
...
modify screen-1-gr-1, column-dividers = -1 | resets the list of values
perform varying columnidx from 1 by 1 until columnidx > columncount
   modify screen-1-gr-1, column-dividers = dividerwidth(columnidx) | sets the width of the next divider
end-perform
```
