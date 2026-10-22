## Allow-Empty

When this style is set, the Date-Entry shows an empty field when the [Value](../Properties/Value) property is not set or is set to zero. Without this style, a date is always shown in the control.

**Example** - Define a date-entry control that allows an empty value

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     century-date
     allow-empty
     value-format davf-yyyymmdd
     .
```
