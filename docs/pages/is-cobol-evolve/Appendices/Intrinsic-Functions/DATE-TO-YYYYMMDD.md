## DATE-TO-YYYYMMDD

The DATE-TO-YYYYMMDD function converts a 6 digit date into 8 digits date.

### Syntax 1

```cobol
function date-to-yyyymmdd (arg-1)
```

### Syntax 2

```cobol
$date-to-yyyymmdd (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the 8 digit date corresponding to the value of arg-1. The date is returned in the format YYYYMMDD.

### Examples

**Example -** Display the 8 digit date of a 6 digit date.

```cobol
working-storage section.
01 w-date-time.
   03 w-date.
      05 w-year  pic 9(2).
      05 w-month pic 9(2).
      05 w-day   pic 9(2).
...
procedure division.
...
move 171231 to w-date.
display function date-to-yyyymmdd(w-date)
```
