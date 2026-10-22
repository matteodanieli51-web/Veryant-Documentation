## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example -** Define a date-entry control that can be resized by the layout-manager and has a minimum width

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     help-id 4040
     id 17
     min-width 10.0
     layout-data 17
     century-date
     value-format davf-yyyymmdd
     .
```
