## DATE-OF-INTEGER

The DATE-OF-INTEGER function converts a gregorian number into a date.

### Syntax 1

```cobol
function date-of-integer (arg-1)
```

### Syntax 2

```cobol
$date-of-integer (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the date corresponding to the value of arg-1. The date is returned in the format YYYYMMDD.

### Examples

**Example -** Display the date corresponding to the gregorian value 1234.

```cobol
display function date-of-integer(1234).
```
