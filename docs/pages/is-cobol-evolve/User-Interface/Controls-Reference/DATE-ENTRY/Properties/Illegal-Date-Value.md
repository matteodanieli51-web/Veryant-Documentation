## Illegal-Date-Value

This property allows you to define a date that will be returned to the program when the user inputs an illegal date into a date-entry with the [Numeric](../Styles/Numeric) style set. The program can check against this date in order to intercept an illegal input and manage it.

This property must be set to a valid date in the format specified by [Value-Format](./Value-Format).

When this property is not set, the Date-Entry control returns the last valid date to the program when the user inputs an illegal date. If there’s no valid date in the history, then the current date is returned.

**Example -** Define a date-entry control that returns the 1th January 9999 when an illegal date is inputted by the user

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     layout-data 17
     century-date
     value-format davf-yyyymmdd
     illegal-date-value 99990101
     .
```
