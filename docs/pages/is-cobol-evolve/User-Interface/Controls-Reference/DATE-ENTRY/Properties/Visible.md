## Visible

This property assumes a value of "0" if the Date-Entry control is not visible, "1" if it is visible.

**Example -** Make a date-entry control become invisible during runtime

```cobol
...
procedure division.
...
  if dates-invisible
     modify screen-1-de-1 visible 0
  ...
  end-if
...
```
