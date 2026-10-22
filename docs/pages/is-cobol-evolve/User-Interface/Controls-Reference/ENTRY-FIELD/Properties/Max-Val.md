## Max-Val

With this property it is possible to set the maximum numeric value that can be entered in the entry-field. If the number entered is greater than the one specified here, an error message is shown.

Negative values are allowed.

**Example** - Define a numeric entry-field control with a max value of 999

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     numeric
     max-val 999
     .
```
