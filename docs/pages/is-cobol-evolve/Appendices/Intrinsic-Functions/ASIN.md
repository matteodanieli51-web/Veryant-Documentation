## ASIN

The ASIN function returns the arcsine of a value.

### Syntax 1

```cobol
function asin (arg-1)
```

### Syntax 2

```cobol
$asin (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the arcsine of arg-1.

### Examples

**Example -** Display the arcsine of -0.5 .

```cobol
display function asin(-0.5).
```
