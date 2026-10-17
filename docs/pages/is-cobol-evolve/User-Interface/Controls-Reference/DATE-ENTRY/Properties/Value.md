## Value

This property represents the value of the Date-Entry control.

When inquired, it returns the value that is currently represented.

When set, the Date-Entry control changes its look to represent it.

**Example -** Query the value of a date-entry control

```cobol
...
procedure division.
...
   inquire screen-1-de-1 value ws-birth-date
...
```
