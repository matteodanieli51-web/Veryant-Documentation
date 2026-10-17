## FACTORIAL

The FACTORIAL function returns the factorial of a number.

### Syntax 1

```cobol
function factorial (arg-1)
```

### Syntax 2

```cobol
$factorial (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the factorial of arg-1.

### Examples

**Example -** Display the factorial of 123.

```cobol
display function factorial(123).
```
