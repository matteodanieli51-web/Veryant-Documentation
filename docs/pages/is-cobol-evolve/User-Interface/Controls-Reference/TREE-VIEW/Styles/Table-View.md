## Table-View

When this style is set, items can have multiple values instead of a single value.

Each value is displayed in a separate column. Columns are defined by the [Display-Columns](../Properties/Display-Columns) property.

**Example** - Define a tree table view with 3 columns:

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     height-in-cells
     color 144
     id 2
     table-view
     display-columns (1, 10, 15)
     .
```
