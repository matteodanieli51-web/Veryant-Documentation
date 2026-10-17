## SIN

The SIN function returns the sine of a value.

### Syntax 1

```cobol
function sin (arg-1)
```

### Syntax 2

```cobol
$sin (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the sine of arg-1.

### Examples

**Example -** Display the sine of 3.5 .

```cobol
display function sin(3.5).
```
