## Numeric

This style allows users to enter only numeric data. However, entry-fields allow you to automatically enter only numeric data if a numeric or a numeric-edited data item has been assigned to the [Value](../Properties/Value) property. For this reason, this style is useful if only numeric data have to be accepted and the [Value](../Properties/Value) property is set to a non-numeric data item.

If [Format-String](../Properties/Format-String) is set, this style has no effect.

**Example** - Define an entry-field control that allows numeric entry only

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     numeric
     3-d
     .
```
