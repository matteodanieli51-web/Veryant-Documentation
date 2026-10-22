## EXP10

The EXP10 function returns the value of 10 raised to the power of the argument.

### Syntax 1

```cobol
function exp10 (arg-1)
```

### Syntax 2

```cobol
function $exp10 (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the value of 10 raised to the power of arg-1.

### Examples

**Example -** Display the result of 10 raised to the power of 3.

```cobol
display function exp10(3).
```
