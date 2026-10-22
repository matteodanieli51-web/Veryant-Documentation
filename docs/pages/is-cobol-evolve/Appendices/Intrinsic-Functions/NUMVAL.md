## NUMVAL

The NUMVAL function returns the numbers found in a given alphanumeric value.

### Syntax 1

```cobol
function numval (arg-1)
```

### Syntax 2

```cobol
$numval (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns the numbers found in arg-1.

### Examples

**Example -** Remove separators from a date field.

```cobol
working-storage section.
77 w-date-display pic x(10) value "2017/12/31".
77 w-date         pic 9(8).
...
procedure division.
...
move function numval(w-date-display) to w-date.
```
