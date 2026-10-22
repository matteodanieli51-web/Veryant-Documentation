## Min-Val

With this property it is possible to set the minimum allowed value. All days below this value will not be enabled.

**Example -** Define a date-entry control with a minimum value

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
     min-val "20140515"
     value-format davf-yyyymmdd.
```
