## INTEGER-OF-DAY

The INTEGER-OF-DAY function converts a julian date into a gregorian number.

### Syntax 1

```cobol
function integer-of-day (arg-1)
```

### Syntax 2

```cobol
$integer-of-day (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal and must specify a date in the format YYYYDDD where DDD ranges fro 1 to 366.

### Result

The function returns a number that is the gregorian value corresponding to arg-1.

### Examples

**Example -** Display the gregorian value corresponding to the date 1st January 2017.

```cobol
display function integer-of-day(2017001).
```
