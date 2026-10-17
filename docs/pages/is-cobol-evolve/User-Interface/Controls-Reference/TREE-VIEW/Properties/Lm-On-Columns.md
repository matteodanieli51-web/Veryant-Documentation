## Lm-On-Columns

This property specifies the behavior of columns when the window is resized and a layout manager is involved.

|  |  |
| --- | --- |
| 0 | columns are not resized |
| 1 (default) | columns are resized |

This property is evaluated only if the Tree-View has the [Table-View](../Styles/Table-View) and [Adjustable-Columns](../Styles/Adjustable-Columns) styles.

**Example** - Define a tree table that allows resizing in columns

```cobol
screen section.
...
  03 screen-1-gr-1 Tree-View
     Table-View
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     layout-data 17
     no-box
     column-headings
     adjustable-columns
     lm-on-columns 1
     .
...
```
