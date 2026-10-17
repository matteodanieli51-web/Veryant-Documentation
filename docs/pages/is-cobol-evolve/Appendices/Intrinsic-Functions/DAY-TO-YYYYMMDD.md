## DAY-TO-YYYYMMDD

The DAY-TO-YYYYMMDD function converts a Converts YYDDD date into YYYYDDD date.

### Syntax 1

```cobol
function day-to-yyyyddd (arg-1)
```

### Syntax 2

```cobol
$day-to-yyyyddd (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the 7 digit julian date corresponding to the value of arg-1. The date is returned in the format YYYYDDD, where DDD ranges from 1 to 366.

### Examples

**Example -** Display the 7 digit julian date of a 5 digit julian date.

```cobol
working-storage section.
01 w-julian-date.
   03 w-year  pic 9(2).
   03 w-day   pic 9(3).
...
procedure division.
...
move 17001 to w-julian-date.
display function day-to-yyyyddd(w-julian-date)
```
