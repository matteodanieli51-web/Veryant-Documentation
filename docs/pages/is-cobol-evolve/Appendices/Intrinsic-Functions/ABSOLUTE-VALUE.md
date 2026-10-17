## ABSOLUTE-VALUE

The ABSOLUTE-VALUE function returns the absolute value of a number.

### Syntax 1

```cobol
function absolute-value (arg-1)
```

### Syntax 2

```cobol
$absolute-value (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the absolute value of arg-1.

### Examples

**Example -** Display the absolute value of -1.

```cobol
display function absolute-value(-1).
```
