## DAY-OF-INTEGER

The DAY-OF-INTEGER function converts a gregorian number into a julian date.

### Syntax 1

```cobol
function day-of-integer (arg-1)
```

### Syntax 2

```cobol
$day-of-integer (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the julian date corresponding to the value of arg-1. The date is returned in the format YYYYDDD, where DDD ranges from 1 to 366.

### Examples

**Example -** Display the julian date corresponding to the gregorian value 1234.

```cobol
display function day-of-integer(1234).
```
