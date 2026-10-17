## Filter-Types

This property specifies the filtering property of the Grid control columns. Multiple values can be specified enclosed between parentheses. Values are applied to cells, starting from the first. Filter types are represented by single numbers.

Valid values are:

|  |  |
| --- | --- |
| 0 | No filter. This is the default. |
| 1 | One-time filter. A funnel icon is shown on the column header. When clicked, the list of distinct values found in the column is shown. The user can select the desired values and click OK to filter the Grid content on these values. Clicking again on the funnel icon removes the filter. |
| 2 | Editable filter with check boxes. A funnel icon is shown on the column header. When clicked, the list of distinct values found in the column is shown. The user can select the desired values and click OK to filter the Grid content on these values. Clicking again on the funnel icon shows the list again, allowing you to change the values for the filter. |
| 3 | Editable filter with text field. A funnel icon is shown on the column header. When clicked, a text field is shown below the column header. The user can type text into the text field. The inputted text is evaluated as a regular expression and only the rows that match the regular expression in the filtered column are left visible in the Grid. Clicking again on the funnel icon removes the text field leaving the Grid content filtered. Clicking again on the funnel icon shows the text field again, allowing you to input a different regular expression.<br>The text box content can be inquired and changed by program through the [Column-Filter](./Column-Filter) property. |

Any value other than the ones described above is equivalent of 1.

The icons displayed on the heading can be customized by providing custom PNG files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

The user requests the filter by clicking on the column header, so the [Column-Headings](../Styles/Column-Headings) style must be set.

The empty row produced by setting [Num-Rows](./Num-Rows) to "-1" is hidden when a filter is applied, as the empty value doesn’t match with any value used by the filter.

The values in the list dropped by clicking on the funnel icon are ordered according to the column’s [Data-Types](./Data-Types).

This property overrides the [Filterable-Columns](../Styles/Filterable-Columns) style. If both are set, the runtime behaves as if only Filter-Types was set.

**Example** - Define a grid where column 1 and 4 are filterable, but they use two different kinds of filter

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
     hscroll
     heading-color 200
     heading-divider-color 12
     cursor-frame-width 3
     display-columns (1, 10, 20, 30)
     filter-types (1, 0, 0, 2)
     num-rows 5
     .
```
