## Max-Val

With this property it is possible to set the maximum allowed value. All days exceeding this value will not be enabled.

**Example -** Define a date-entry control with a maximum value

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
     max-val "20150515"
     value-format davf-yyyymmdd.
```
