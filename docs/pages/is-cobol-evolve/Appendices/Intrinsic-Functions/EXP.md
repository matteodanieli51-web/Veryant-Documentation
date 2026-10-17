## EXP

The EXP function returns an approximation of the value of e raised to the power of the argument.

### Syntax 1

```cobol
function exp (arg-1)
```

### Syntax 2

```cobol
$exp (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the approximation of the value of e raised to the power of arg-1.

### Examples

**Example -** Display the approximation of e raised to the power of 2 .

```cobol
display function exp(2).
```
