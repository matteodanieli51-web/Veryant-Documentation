## Time

When this style is set, the Date-Entry control represents a time instead of a date. The value of the [Value-Format](../Properties/Value-Format) property must be set accordingly.

**Example** - Define a date-entry control to handle time data

```cobol
screen section.
...
  03 screen-1-de-2 Date-Entry
     line 28.5
     column 49.7
     size 13.6 cells
     lines 4.3 cells
     id 18
     time.
```
