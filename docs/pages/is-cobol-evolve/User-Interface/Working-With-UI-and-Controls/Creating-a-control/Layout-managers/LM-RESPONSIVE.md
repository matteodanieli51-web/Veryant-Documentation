### LM-RESPONSIVE

LM-RESPONSIVE automatically resizes, hides, shrinks, or enlarges controls, to make the screen look good on different screen widths.

The different widths are defined along with the layout manager as follows:

```cobol
HANDLE OF LAYOUT-MANAGER LM-RESPONSIVE "breakpoints"
```

Where *breakpoints* is a series of logical names followed by a size in the format:

```cobol
name=size [cells|pixels]
```

Where *name* is a free name, *size* is a numeric value and *cells* or *pixels* specify the measurement unit. If neither *cells* nor *pixels* is specified, then *pixels* is assumed. If *size* is decimal, the dot symbol must be used as decimal separator.

Multiple breakpoints can be defined. Their description must be separated by comma.

The following snippet defines a LM-RESPONSIVE layout manager that operates on three different screen widths: small, medium and large:

```cobol
       77  responsive-layout handle of layout-manager, lm-responsive 
              "small=14 cells, medium=40 cells, large=69 cells" .
```

When the window width changes in the range between 14 and 40 cells, the small breakpoint is used.

When the window width changes in the range between 40 and 69 cells, the medium breakpoint is used.

When the window width is increased to 69 cells or more, the large breakpoint is used.

When the window width is reduced below 14 cells, no specific breakpoint is used.

When the window width changes from a breakpoint to the other, the controls are redesigned by LM-RESPONSIVE according to their Layout-Data property.

Layout-Data must be set to an alphanumeric value that is a combination of one or more of the following entries separated by space:

| | |
| --- | --- |
| visible-*breakpoint* | The control is made visible when the window width is in the range specified by *breakpoint* (unless its Visible property is set to false) |
| hidden-*breakpoint* | The control is hidden when the window width is in the range specified by *breakpoint* |
| line-*breakpoint value* [cells\|pixels] | The control is positioned on the line number specified by *value* when the window width is in the range specified by *breakpoint* |
| lines-*breakpoint value* [cells\|pixels] | The control is resized to the height specified by *value* when the window width is in the range specified by *breakpoint* |
| col-*breakpoint value* [cells\|pixels] | The control is positioned on the column number specified by *value* when the window width is in the range specified by *breakpoint* |
| column-*breakpoint value* [cells\|pixels] | The control is positioned on the column number specified by *value* when the window width is in the range specified by *breakpoint* |
| size-*breakpoint value* [cells\|pixels] | The control is resized to the width specified by *value* when the window width is in the range specified by *breakpoint* |
| | |

Where *breakpoint* is one of the breakpoints specified in the layout manager definition, *value* is a numeric value (with the dot symbol as decimal separator) and *cells* or *pixels* are the measurement unit. If neither *cells* nor *pixels* is specified, then *pixel* is assumed.

If *visible* or *hidden* is specified only for one breakpoint, the opposite is assumed for the other breakpoints. For example, given the small, medium and large breakpoints described above, we can say that:

```cobol
Layout-Data "visible-small"
```

is equivalent to:

```cobol
Layout-Data "visible-small hidden-medium hidden-large"
```

When the window width changes inside the range between two breakpoints, the rules of [LM-SCALE](./LM-SCALE) are applied.

You can instruct LM-SCALE by adding one or more of the following entries to the control’s Layout-Data:

| | |
| --- | --- |
| move-x-*breakpoint* | The control is moved on the x-axis |
| resize-x-*breakpoint* | The control is resized on the x-axis |
| no-min-x-*breakpoint* | Allow the control to be resized or moved on the x-axis below its design values |
| move-y-*breakpoint* | The control is moved on the y-axis |
| resize-y-*breakpoint* | The control is resized on the y-axis |
| no-min-y-*breakpoint* | Allow the control to be resized or moved on the y-axis below its design values |
| move-x-any-*breakpoint* | Combination of move-x and no-min-x |
| resize-x-any-*breakpoint* | Combination of resize-x and no-min-x |
| move-y-any-*breakpoint* | Combination of move-y and no-min-y |
| resize-y-any-*breakpoint* | Combination of resize-y and no-min-y |
| move-both-*breakpoint* | Combination of move-x and move-y |
| resize-both-*breakpoint* | Combination of resize-x and resize-y |
| move-both-any-*breakpoint* | Combination of move-x, move-y, no-min-x and no-min-y |
| resize-both-any-*breakpoint* | Combination of resize-x, resize-y, no-min-x and no-min-y |
| no-scale-*breakpoint* | No action |

Where *breakpoint* is one of the breakpoints specified in the layout manager definition. If "-breakpoint" is omitted, then the entry is applied to all the breakpoints defined in the layout manager.

The following snippet shows how to set Layout-Data to make a entry-field go on the next line, column 2 with no scale action when the screen is reduced from the "medium" to "small":

```cobol
          03 ef-1 entry-field
             line 2, col 10, size 10 cells
             layout-data "line-small 3 col-small 2 no-scale"
             .
```
