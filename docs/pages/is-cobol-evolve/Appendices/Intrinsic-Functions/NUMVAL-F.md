## NUMVAL-F

The NUMVAL-F function returns the numbers found in a given alphanumeric value. Use this function when the argument includes an exponent value.

### Syntax 1

```cobol
function numval-f (arg-1)
```

### Syntax 2

```cobol
$numval-f (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns the numbers found in arg-1.

### Examples

**Example -** Display the numeric value.

```cobol
working-storage section.
77 w-num pic x(20) value "+ 12.345678E+2".
...
procedure division.
...
display function numval-f(w-num).
```
