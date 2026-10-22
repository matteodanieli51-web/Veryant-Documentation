## Filterable-Columns

When this style is set, a funnel icon is shown before each column title. Clicking on that icon shows a pop-up dialog with the list of values stored in the column, a OK button and a Cancel button. You can create a filter by unchecking the values that you wish to discard and checking the values that you wish to keep. Clicking on the OK button applies the filter. Clicking on the Cancel button closes the filter dialog.

When a filter is applied, a small red cross is shown over the funnel icon. Clicking on it removes the filter and restores the original Grid data.

The icons displayed on the heading can be customized by providing custom PNG files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

This style has effect only if used in conjunction with [Column-Headings](./Column-Headings).

The values in the list dropped by clicking on the funnel icon are ordered according to the column’s [Data-Types](../Properties/Data-Types).

This style makes all the columns filterable. If you wish to have only some columns with filter, you should consider to use  [Filter-Types](../Properties/Filter-Types), instead.

This style is overridden by the [Filter-Types](../Properties/Filter-Types) property. If both are set, the runtime behaves as if only [Filter-Types](../Properties/Filter-Types) was set.

**Example** - Define a grid with filterable columns

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
     event procedure screen-1-gr-1-evt-proc
     boxed
     column-headings
     filterable-columns
     hscroll
     reordering-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
